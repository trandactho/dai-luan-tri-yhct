// --- QUẢN LÝ TÍNH NĂNG VỌNG CHẨN AI ---
let vongChanImageBase64 = null;
let cameraStream = null;
let currentVongChanRecord = null;
// Bổ sung biến lưu trữ ngữ cảnh chẩn đoán hiện tại
let currentDiagnosticContext = "";

// Khởi tạo IndexedDB dùng chung cho Vọng Chẩn
function openVongChanDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('VongChanDB', 1);
        request.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains('history')) {
                db.createObjectStore('history', { keyPath: 'id' });
            }
        };
        request.onsuccess = (e) => resolve(e.target.result);
        request.onerror = (e) => reject(e.target.error);
    });
}

// Tắt Camera an toàn
function tatCameraVongChan() {
    if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
        cameraStream = null;
    }
    const videoEl = document.getElementById('vong-chan-video');
    if (videoEl) videoEl.classList.add('hidden');
    
    const btnToggle = document.getElementById('btn-toggle-camera');
    if (btnToggle) {
        btnToggle.innerHTML = `<i class="fa-solid fa-video"></i> Mở Camera`;
        btnToggle.onclick = moCameraVongChan;
    }
    
    const btnCapture = document.getElementById('btn-capture-photo');
    if (btnCapture) btnCapture.classList.add('hidden');
}

// Bật Camera thiết bị
async function moCameraVongChan() {
    if (!window.isSecureContext && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
        alert("Tính năng Camera yêu cầu kết nối bảo mật HTTPS. Vui lòng chọn tải ảnh từ thiết bị.");
        return;
    }
    
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert("Trình duyệt không hỗ trợ trực tiếp Camera. Vui lòng chọn tải ảnh từ thiết bị.");
        return;
    }

    const videoEl = document.getElementById('vong-chan-video');
    const imgEl = document.getElementById('vong-chan-img-preview');
    const placeholder = document.getElementById('vong-chan-placeholder');
    const btnToggle = document.getElementById('btn-toggle-camera');
    const btnCapture = document.getElementById('btn-capture-photo');

    try {
        cameraStream = await navigator.mediaDevices.getUserMedia({ 
            video: { facingMode: 'user' }, 
            audio: false 
        });
        
        videoEl.srcObject = cameraStream;
        videoEl.muted = true;
        
        videoEl.classList.remove('hidden');
        if (imgEl) imgEl.classList.add('hidden');
        if (placeholder) placeholder.classList.add('hidden');
        
        await videoEl.play().catch(e => console.log("Auto-play error:", e));
        
        if (btnCapture) btnCapture.classList.remove('hidden');
        if (btnToggle) {
            btnToggle.innerHTML = `<i class="fa-solid fa-video-slash"></i> Tắt Camera`;
            btnToggle.onclick = tatCameraVongChan;
        }
    } catch (err) {
        alert("Không thể truy cập Camera. Vui lòng cấp quyền truy cập trình duyệt hoặc tải ảnh lên.");
        console.error("Lỗi Camera:", err);
    }
}

// Thay thế đoạn xử lý canvas trong chupAnhVongChan()
function chupAnhVongChan() {
    const videoEl = document.getElementById('vong-chan-video');
    const imgEl = document.getElementById('vong-chan-img-preview');
    const canvas = document.createElement('canvas');
    
    // Giới hạn kích thước tối đa 512px
    const maxDim = 512;
    let width = videoEl.videoWidth || 640;
    let height = videoEl.videoHeight || 480;

    if (width > height && width > maxDim) {
        height = Math.round((height * maxDim) / width);
        width = maxDim;
    } else if (height > maxDim) {
        width = Math.round((width * maxDim) / height);
        height = maxDim;
    }

    canvas.width = width;
    canvas.height = height;
    
    const ctx = canvas.getContext('2d');
    ctx.drawImage(videoEl, 0, 0, width, height);
    
    // Nén JPEG xuống chất lượng 0.5 để giảm token vision
    vongChanImageBase64 = canvas.toDataURL('image/jpeg', 0.5);
    
    imgEl.src = vongChanImageBase64;
    imgEl.classList.remove('hidden');
    videoEl.classList.add('hidden');
    tatCameraVongChan();
}

function resetVongChanState() {
    vongChanImageBase64 = null;
    currentVongChanRecord = null;
    const imgEl = document.getElementById('vong-chan-img-preview');
    const placeholder = document.getElementById('vong-chan-placeholder');
    const resultBox = document.getElementById('vong-chan-result');
    
    if (imgEl) imgEl.classList.add('hidden');
    if (placeholder) placeholder.classList.remove('hidden');
    if (resultBox) resultBox.classList.add('hidden');
}

async function luuKetQuaVongChan() {
    if (!currentVongChanRecord) {
        alert("Không có dữ liệu kết quả để lưu!");
        return;
    }

    try {
        const db = await openVongChanDB();
        const tx = db.transaction('history', 'readwrite');
        const store = tx.objectStore('history');

        const request = store.getAll();
        request.onsuccess = () => {
            let history = request.result || [];
            
            const isExisted = history.some(item => item.id === currentVongChanRecord.id);
            if (isExisted) {
                alert("Hồ sơ này đã được lưu trước đó!");
                hienThiLichSuVongChan();
                return;
            }

            if (history.length >= 10) {
                history.sort((a, b) => a.id - b.id);
                const deleteCount = history.length - 9;
                for (let i = 0; i < deleteCount; i++) {
                    store.delete(history[i].id);
                }
            }

            store.put(currentVongChanRecord);
        };

        tx.oncomplete = () => {
            alert("Đã lưu hồ sơ thành công!");
            hienThiLichSuVongChan();
        };
    } catch (err) {
        console.error("Lỗi khi lưu vào IndexedDB:", err);
        alert("Không thể lưu hồ sơ vào cơ sở dữ liệu trình duyệt.");
    }
}

async function hienThiLichSuVongChan() {
    const listEl = document.getElementById('vong-chan-history-list') || document.getElementById('tu-chan-history-list');
    if (!listEl) return;

    try {
        const db = await openVongChanDB();
        const tx = db.transaction('history', 'readonly');
        const store = tx.objectStore('history');
        const request = store.getAll();

        request.onsuccess = () => {
            let history = request.result || [];
            
            history.sort((a, b) => b.id - a.id);

            if (history.length === 0) {
                listEl.innerHTML = `<div class="text-stone-500 text-center text-xs py-3 italic">Chưa có hồ sơ chẩn đoán nào được lưu.</div>`;
                return;
            }

            listEl.innerHTML = history.map(item => `
                <div class="bg-stone-900/80 p-2.5 rounded-lg border border-stone-800 text-xs flex items-center justify-between gap-3 hover:border-amber-600/40 transition-all">
                    <div class="flex items-center gap-2.5 overflow-hidden">
                        ${item.image ? `<img src="${item.image}" class="w-10 h-10 object-cover rounded border border-stone-700 flex-shrink-0" alt="Ảnh chẩn đoán">` : `<div class="w-10 h-10 bg-stone-800 rounded border border-stone-700 flex items-center justify-center text-amber-500 flex-shrink-0"><i class="fa-solid fa-notes-medical"></i></div>`}
                        <div class="truncate">
                            <div class="font-bold text-amber-400 truncate">${escapeHTML(item.type)}</div>
                            <div class="text-[10px] text-stone-400">${item.date} - ${escapeHTML(item.note)}</div>
                        </div>
                    </div>
                    <div class="flex items-center gap-1.5 flex-shrink-0">
                        <button onclick='xemLaiVongChan(${item.id})' class="px-2 py-1 bg-stone-800 hover:bg-stone-700 text-amber-400 font-bold rounded text-[10px] border border-stone-700 cursor-pointer">
                            <i class="fa-solid fa-eye"></i> Xem
                        </button>
                        <button onclick='xoaItemVongChan(${item.id})' class="px-2 py-1 bg-red-950/60 hover:bg-red-900 text-red-400 font-bold rounded text-[10px] border border-red-900/50 cursor-pointer">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </div>
            `).join('');
        };
    } catch (e) {
        console.error("Lỗi khi đọc lịch sử từ IndexedDB:", e);
    }
}

async function xemLaiVongChan(id) {
    try {
        const db = await openVongChanDB();
        const tx = db.transaction('history', 'readonly');
        const store = tx.objectStore('history');
        const request = store.get(id);

        request.onsuccess = () => {
            const record = request.result;
            if (!record) return;

            const imgEl = document.getElementById('vong-chan-img-preview');
            const placeholder = document.getElementById('vong-chan-placeholder');
            if (imgEl && placeholder) {
                if (record.image) {
                    imgEl.src = record.image;
                    imgEl.classList.remove('hidden');
                    placeholder.classList.add('hidden');
                    vongChanImageBase64 = record.image;
                } else {
                    imgEl.classList.add('hidden');
                    placeholder.classList.remove('hidden');
                    vongChanImageBase64 = null;
                }
            }

            // Đọc 2 ô element mới
            const elVanNghe = document.getElementById('van-nghe-note');
            const elVanHoi = document.getElementById('van-hoi-note');
            const elMach = document.getElementById('thiet-chan-mach');
            const elXuc = document.getElementById('thiet-chan-xuc');

            // Khôi phục Văn Chẩn (Có đọc lại biến cũ noteVan nếu có)
            if (elVanNghe) {
                elVanNghe.value = record.noteVanNghe || record.noteVan || '';
            }
            
            // Khôi phục Vấn Chẩn (Có đọc lại biến cũ noteVanSu/note nếu có)
            if (elVanHoi) {
                let cleanNote = record.noteVanHoi || record.noteVanSu || record.note || '';
                cleanNote = cleanNote.replace(/^Vấn:\s*/i, '').replace(/\s*\|\s*Mạch:.*$/i, '');
                elVanHoi.value = (cleanNote !== 'Không' && cleanNote !== 'Không có') ? cleanNote : '';
            }

            if (elMach) elMach.value = record.mach || '';
            if (elXuc) elXuc.value = record.xucChan || '';

            currentDiagnosticContext = `HỒ SƠ CHẨN ĐOÁN CŨ (${record.date}):
- Văn chẩn: ${record.noteVanNghe || record.noteVan || 'Không'}
- Vấn chẩn: ${record.noteVanHoi || record.noteVanSu || record.note || 'Không'}
- Mạch tượng: ${record.mach || 'Chưa bắt mạch'}
- KẾT QUẢ AI: ${record.reply}`;

            const resultBox = document.getElementById('vong-chan-result');
            const chatBox = document.getElementById('ai-chat-box');
            
            if (resultBox) resultBox.classList.remove('hidden');
            if (chatBox) {
                chatBox.innerHTML = renderTuChanCards(record.reply);
            }

            if (resultBox) {
                resultBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };
    } catch (e) {
        console.error("Lỗi xem lại bài:", e);
    }
}


function renderTuChanCards(aiReply) {
    let parsed = typeof parseJsonFromAI === 'function' ? parseJsonFromAI(aiReply) : null;
    if (!parsed) {
        try {
            const jsonStr = aiReply.replace(/```json/g, '').replace(/```/g, '').trim();
            parsed = JSON.parse(jsonStr);
        } catch (e) {
            return `<div class="p-3 bg-red-950/20 text-red-400 text-xs rounded border border-red-900">⚠️ Dữ liệu AI trả về chưa chuẩn định dạng, vui lòng thử lại.</div>`;
        }
    }
    
    const vongChan = parsed.vong_chan || '';
    const vanChan = parsed.van_chan || '';
    const vanHoi = parsed.van_hoi || '';
    const thietChan = parsed.thiet_chan || '';
    const coPhuong = parsed.co_phuong || '';
    const hoiChung = parsed.hoi_chung || '';

    return `
    <div class="space-y-4">
        <!-- TỨ CHẨN TỔNG HỢP -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            ${vongChan ? `<div class="bg-stone-900 p-3 rounded-lg border border-stone-800 space-y-1">
                <div class="text-[10px] text-amber-400 uppercase font-bold"><i class="fa-solid fa-eye"></i> Vọng chẩn</div>
                <p class="text-xs text-stone-200 leading-relaxed">${escapeHTML(vongChan)}</p>
            </div>` : ''}
            
            ${vanChan ? `<div class="bg-stone-900 p-3 rounded-lg border border-stone-800 space-y-1">
                <div class="text-[10px] text-amber-400 uppercase font-bold"><i class="fa-solid fa-ear-listen"></i> Văn chẩn</div>
                <p class="text-xs text-stone-200 leading-relaxed">${escapeHTML(vanChan)}</p>
            </div>` : ''}

            ${vanHoi ? `<div class="bg-stone-900 p-3 rounded-lg border border-stone-800 space-y-1">
                <div class="text-[10px] text-amber-400 uppercase font-bold"><i class="fa-solid fa-comments"></i> Vấn chẩn</div>
                <p class="text-xs text-stone-200 leading-relaxed">${escapeHTML(vanHoi)}</p>
            </div>` : ''}

            ${thietChan ? `<div class="bg-stone-900 p-3 rounded-lg border border-stone-800 space-y-1">
                <div class="text-[10px] text-amber-400 uppercase font-bold"><i class="fa-solid fa-hand-holding-medical"></i> Thiết chẩn</div>
                <p class="text-xs text-stone-200 leading-relaxed">${escapeHTML(thietChan)}</p>
            </div>` : ''}
        </div>

        <!-- 1. Bát Cương, Tạng Phủ & Hội Chứng -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div class="bg-stone-900 p-3 rounded-lg border border-stone-800">
                <div class="text-[10px] text-stone-400 uppercase font-bold">Bát cương</div>
                <div class="text-amber-300 font-bold text-sm">${escapeHTML(parsed.bat_cuong)}</div>
            </div>
            <div class="bg-stone-900 p-3 rounded-lg border border-stone-800">
                <div class="text-[10px] text-stone-400 uppercase font-bold">Tạng phủ</div>
                <div class="text-amber-300 font-bold text-sm">${escapeHTML(parsed.tang_phu)}</div>
            </div>
            <div class="bg-stone-900 p-3 rounded-lg border border-stone-800">
                <div class="text-[10px] text-stone-400 uppercase font-bold">Hội chứng</div>
                ${hoiChung && hoiChung !== '---' ? `
                    <button onclick="chuyenQuaLuanTriVaTim('${escapeHTML(hoiChung).replace(/'/g, "\\'")}')" class="text-amber-300 font-bold text-sm text-left hover:underline cursor-pointer w-full flex items-center justify-between mt-0.5" title="Tra cứu phác đồ hội chứng trong Luận Trị">
                        <span class="truncate">${escapeHTML(hoiChung)}</span>
                        <i class="fa-solid fa-arrow-right text-[10px] text-amber-500 flex-shrink-0 ml-1"></i>
                    </button>
                ` : `<div class="text-amber-300 font-bold text-sm mt-0.5">---</div>`}
            </div>
        </div>

        <!-- 2. Biện chứng & Pháp trị -->
        <div class="bg-stone-900 p-4 rounded-lg border border-stone-800 space-y-2">
            <div class="text-xs font-bold text-emerald-400 uppercase border-b border-stone-800 pb-1">Biện chứng & Pháp trị</div>
            <p class="text-sm text-stone-200 leading-relaxed">${escapeHTML(parsed.bien_chung)}</p>
            <div class="text-xs font-bold text-emerald-400 mt-2">Pháp trị: <span class="text-stone-300 font-normal">${escapeHTML(parsed.phap_tri)}</span></div>
        </div>

        <!-- 3. Cổ phương & Vị thuốc -->
        <div class="bg-stone-900 p-4 rounded-lg border border-stone-800 space-y-3">
            <div class="flex items-center justify-between border-b border-stone-800 pb-2">
                <div class="text-xs font-bold text-amber-400 uppercase">Bài thuốc chủ phương:</div>
                ${coPhuong && coPhuong !== '---' ? `
                    <button onclick="chuyenQuaLuanTriVaTim('${escapeHTML(coPhuong).replace(/'/g, "\\'")}')" class="px-2.5 py-1 bg-amber-950 text-amber-400 border border-amber-700/80 rounded-lg font-bold hover:bg-amber-900 transition-colors cursor-pointer flex items-center gap-1 text-xs shadow-sm" title="Tra cứu phác đồ trong Luận Trị">
                        <i class="fa-solid fa-scroll text-[10px]"></i> ${escapeHTML(coPhuong)} <i class="fa-solid fa-arrow-right text-[9px] ml-0.5"></i>
                    </button>
                ` : `<span class="text-stone-400 text-xs">---</span>`}
            </div>

            <div class="space-y-2">
                <div class="text-[11px] font-bold text-stone-400 uppercase tracking-wide">Thành phần vị thuốc:</div>
                ${Array.isArray(parsed.vi_thuoc) && parsed.vi_thuoc.length > 0 ? parsed.vi_thuoc.map(v => `
                    <div class="flex items-center justify-between p-2.5 bg-stone-800/90 rounded-lg border border-stone-700/60 text-xs">
                        <div class="flex items-center gap-2">
                            <span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-stone-900 text-amber-400 border border-stone-700">${escapeHTML(v.vai_tro || 'Thuốc')}</span>
                            <button onclick="xemDuocLieu('${escapeHTML(v.ten).replace(/'/g, "\\'")}')" class="font-bold text-emerald-400 underline cursor-pointer hover:text-emerald-300 inline-flex items-center gap-1 text-left">
                                <i class="fa-solid fa-leaf text-[10px]"></i> ${escapeHTML(v.ten)}
                            </button>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-stone-300 font-mono font-bold">(${escapeHTML(v.lieu)})</span>
                        </div>
                    </div>
                `).join('') : '<div class="text-stone-500 text-xs italic">Không có danh sách vị thuốc chi tiết.</div>'}
            </div>
        </div>
    </div>`;
}

async function xoaItemVongChan(id) {
    try {
        const db = await openVongChanDB();
        const tx = db.transaction('history', 'readwrite');
        tx.objectStore('history').delete(id);
        tx.oncomplete = () => {
            hienThiLichSuVongChan();
        };
    } catch (e) {
        console.error("Lỗi xóa mục:", e);
    }
}

async function xoaLichSuVongChan() {
    if (confirm("Bạn có chắc chắn muốn xóa toàn bộ lịch sử Vọng chẩn đã lưu không?")) {
        try {
            const db = await openVongChanDB();
            const tx = db.transaction('history', 'readwrite');
            tx.objectStore('history').clear();
            tx.oncomplete = () => {
                resetVongChanState();
                hienThiLichSuVongChan();
            };
        } catch (e) {
            console.error("Lỗi xóa lịch sử:", e);
        }
    }
}

let currentPreviewObjectUrl = null;

function xuLyChonFileVongChan(event) {
    const file = event.target.files && event.target.files[0];
    if (!file || !file.type.startsWith('image/')) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            const canvas = document.createElement('canvas');
            const maxDim = 512;
            let width = img.width;
            let height = img.height;

            if (width > height && width > maxDim) {
                height = Math.round((height * maxDim) / width);
                width = maxDim;
            } else if (height > maxDim) {
                width = Math.round((width * maxDim) / height);
                height = maxDim;
            }

            canvas.width = width;
            canvas.height = height;

            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, height);

            vongChanImageBase64 = canvas.toDataURL('image/jpeg', 0.55);

            const imgEl = document.getElementById('vong-chan-img-preview');
            const placeholder = document.getElementById('vong-chan-placeholder');
            if (imgEl && placeholder) {
                imgEl.src = vongChanImageBase64;
                imgEl.classList.remove('hidden');
                placeholder.classList.add('hidden');
            }
            tatCameraVongChan();
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}
