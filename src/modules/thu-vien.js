// ==========================================================================
// THU-VIEN.JS - QUẢN LÝ THƯ VIỆN SÁCH PDF & AI HỎI ĐÁP
// ==========================================================================

let selectedBookForAI = null;
let danhSachSachPDF = [];

async function taiDanhSachSachTuDrive() {
    const grid = document.getElementById('grid-sach-pdf');
    if (!grid) return;

    if (danhSachSachPDF.length > 0) return; // Nếu đã tải rồi thì bỏ qua

    grid.innerHTML = `<div class="col-span-full text-center py-6 text-xs text-stone-400"><i class="fa-solid fa-spinner fa-spin text-amber-500 mr-1.5"></i> Đang đồng bộ danh sách tài liệu từ Google Drive...</div>`;

    try {
        // URL Web App của Google Apps Script
        const response = await fetch("https://script.google.com/macros/s/AKfycbyxPDLn_B20CFLJnEe7rOp_SbfeFQ7WDDgIFwIN9-nkXJz8naV4ivnBykRnvZuAzOd_gQ/exec");
        danhSachSachPDF = await response.json();
        
        renderDanhSachSach(danhSachSachPDF);
        const len = danhSachSachPDF.length;
        const elHeader = document.getElementById('total-sach');
        const elKho = document.getElementById('total-sach-kho');

        if (elHeader) elHeader.innerText = len;
        if (elKho) elKho.innerText = len;

    } catch (err) {
        console.error("Lỗi đồng bộ Drive:", err);
        grid.innerHTML = `<div class="col-span-full text-center py-6 text-xs text-red-400">Không thể đồng bộ danh sách tài liệu từ Drive. Vui lòng kiểm tra lại mạng.</div>`;
    }
}

function renderDanhSachSach(arr) {
    const grid = document.getElementById('grid-sach-pdf');
    if (!grid) return;

    if (arr.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center py-6 text-xs text-stone-500 italic">Không tìm thấy đầu sách phù hợp.</div>`;
        return;
    }

    const grouped = {
        '📖 Sách Kinh Điển & Lý Luận': [],
        '📍 Châm Cứu & Huyệt Vị': [],
        '🌿 Bài Thuốc, Dược Liệu & Lâm Sàng': [],
        '🧘 Dưỡng Sinh & Y Dược Khác': []
    };

    arr.forEach(s => {
        const t = removeAccents(s.ten || '').toLowerCase().replace(/[_,-]/g, ' ');
        if (t.includes('noi kinh') || t.includes('thuong han') || t.includes('kim quy') || t.includes('bien chung') || t.includes('hai thuong') || t.includes('ly luan') || t.includes('chan tri') || t.includes('van dap') || t.includes('bien luan lam sang') || t.includes('thiet chan') || t.includes('chan doan') || t.includes('an ma') || t.includes('ngu tieu')) {
            grouped['📖 Sách Kinh Điển & Lý Luận'].push(s);
        } else if (t.includes('cham cuu') || t.includes('huyet') || t.includes('osteopathic') || t.includes('xoa bop')) {
            grouped['📍 Châm Cứu & Huyệt Vị'].push(s);
        } else if (t.includes('bai thuoc') || t.includes('phuong') || t.includes('thuoc') || t.includes('duoc') || t.includes('san phu khoa') || t.includes('chan doan xq') || t.includes('trung duoc')) {
            grouped['🌿 Bài Thuốc, Dược Liệu & Lâm Sàng'].push(s);
        } else {
            grouped['🧘 Dưỡng Sinh & Y Dược Khác'].push(s);
        }
    });

    function getMoTaTuDong(tenSach) {
        const t = removeAccents(tenSach || '').toLowerCase();
        if (t.includes('cham cuu')) return 'Tài liệu hướng dẫn kỹ thuật châm cứu, huyệt vị và phác đồ điều trị lâm sàng.';
        if (t.includes('bai thuoc') || t.includes('phuong')) return 'Tổng hợp các bài thuốc kinh nghiệm, phương tễ cổ phương và gia truyền.';
        if (t.includes('che bien')) return 'Phương pháp bào chế, sao chế và bảo quản các vị thuốc cổ truyền.';
        if (t.includes('bien chung') || t.includes('tiet chan') || t.includes('chan doan')) return 'Phương pháp chẩn đoán, phân tích hội chứng tạng phủ và lý luận lâm sàng.';
        if (t.includes('hai thuong')) return 'Tác phẩm y học kinh điển của Hải Thượng Lãn Ông Lê Hữu Trác.';
        return 'Tài liệu chuyên sâu tra cứu và ứng dụng Y học cổ truyền.';
    }

    let html = '';
    for (const [nhomName, sachList] of Object.entries(grouped)) {
        if (sachList.length === 0) continue;

        sachList.sort((a, b) => (a.ten || '').localeCompare(b.ten || 'vn', 'vi'));

        html += `
            <div class="col-span-full mt-4 mb-2">
                <h3 class="text-amber-400 font-bold text-xs uppercase tracking-wider border-b border-amber-900/40 pb-1.5 flex items-center justify-between">
                    <span class="flex items-center gap-1.5"><i class="fa-solid fa-scroll text-amber-500"></i> ${escapeHTML(nhomName)}</span>
                    <span class="text-[10px] bg-amber-950/60 text-amber-300/80 px-2 py-0.5 rounded border border-amber-800/40 font-mono">${sachList.length} cuốn</span>
                </h3>
            </div>
        `;

        sachList.forEach(s => {
    const moTaHienThi = getMoTaTuDong(s.ten);

    html += `
        <!-- Dùng style inline đè !important để xóa sạch màu xanh lá -->
        <div class="bg-stone-900/90 p-3.5 rounded-lg border border-stone-800/80 hover:border-amber-500/70 transition-all space-y-2 shadow-md shadow-black/50" 
             style="border-left: 4px solid #b45309 !important;">
            
            <div class="flex items-start justify-between gap-2">
                <div class="flex items-center gap-2 overflow-hidden">
                    <i class="fa-solid fa-scroll text-amber-500 text-sm flex-shrink-0"></i>
                    <span class="font-bold text-amber-300 text-xs truncate leading-snug" title="${escapeHTML(s.ten)}">
                        ${escapeHTML(s.ten)}
                    </span>
                </div>
                <span class="text-[10px] bg-stone-950 text-amber-400/80 px-1.5 py-0.5 rounded border border-amber-900/40 font-mono flex-shrink-0">${s.dungLuong}</span>
            </div>

            <p class="text-[11px] text-stone-400 line-clamp-2 leading-relaxed italic pl-1 border-l border-stone-800">
                ${escapeHTML(moTaHienThi)}
            </p>

            <div class="flex items-center justify-end gap-2 pt-1.5 border-t border-stone-800/60">
                <button onclick="window.open('${s.url}', '_blank')" class="px-3 py-1 bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold rounded text-[11px] cursor-pointer transition-colors border border-stone-700 flex items-center gap-1">
                    <i class="fa-solid fa-book-open text-amber-400"></i> Đọc sách
                </button>
                <button onclick="moHoiDapSach('${s.ten.replace(/'/g, "\\'")}', '${s.dungLuong}')" class="px-3 py-1 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded text-[11px] cursor-pointer transition-colors flex items-center gap-1 shadow-sm">
                    <i class="fa-solid fa-brain"></i> Hỏi AI
                </button>
            </div>
        </div>
    `;
});

    }

    grid.innerHTML = html;
}

function filterSachPDF() {
    const keyword = removeAccents(document.getElementById('search-sach-input').value).toLowerCase().trim();
    const filtered = danhSachSachPDF.filter(s => removeAccents(s.ten).toLowerCase().includes(keyword));
    renderDanhSachSach(filtered);
}

function moHoiDapSach(tenSach, dungLuong) {
    selectedBookForAI = tenSach;
    const container = document.getElementById('sach-reader-container');
    const titleEl = document.getElementById('current-sach-title');
    const sizeEl = document.getElementById('current-sach-size');
    const chatBox = document.getElementById('sach-chat-box');

    if (titleEl) titleEl.innerText = tenSach;
    if (sizeEl) sizeEl.innerText = `Dung lượng: ${dungLuong}`;
    if (container) container.classList.remove('hidden');
    
    if (chatBox) {
        chatBox.innerHTML = `
            <div class="bg-stone-900 p-2.5 rounded text-stone-300 text-xs">
                <span class="font-bold text-amber-500">Trợ Lý AI:</span> Đã sẵn sàng khai thác tài liệu từ sách <strong>"${escapeHTML(tenSach)}"</strong>. Bạn muốn tìm hiểu nội dung nào trong cuốn này?
            </div>
        `;
    }
    container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function dongDocSach() {
    selectedBookForAI = null;
    document.getElementById('sach-reader-container')?.classList.add('hidden');
}

async function hoiAIveSach(e) {
    if (e && e.preventDefault) e.preventDefault();

    const inputEl = document.getElementById('sach-ai-input');
    const chatBox = document.getElementById('sach-chat-box');
    if (!inputEl || !chatBox || !selectedBookForAI) return;

    const query = inputEl.value.trim();
    if (!query) return;

    chatBox.innerHTML += `
        <div class="bg-amber-950/40 p-2.5 rounded border border-amber-900/50 text-amber-200 text-right font-medium text-xs">
            <span class="font-bold text-amber-400">Bạn:</span> ${escapeHTML(query)}
        </div>`;
    inputEl.value = '';

    const loadingId = 'sach-loading-' + Date.now();
    chatBox.innerHTML += `
        <div id="${loadingId}" class="bg-stone-900 p-2.5 rounded border border-stone-800 text-stone-400 flex items-center gap-2 text-xs">
            <i class="fa-solid fa-brain text-amber-500 animate-spin"></i>
            <span>Đang tra cứu nội dung trong sách "${escapeHTML(selectedBookForAI)}"...</span>
        </div>`;
    
    chatBox.scrollTop = chatBox.scrollHeight;

    try {
        const prompt = `Dựa trên nội dung chuẩn của cuốn sách y học cổ truyền "${selectedBookForAI}", hãy giải đáp chi tiết câu hỏi sau: "${query}". Trả lời súc tích, chuyên môn cao bằng tiếng Việt.`;
        const res = await fetch(getApiEndpoint(), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: prompt, source: 'sach_ai', max_tokens: 400 })
        });
        const data = await res.json();

        document.getElementById(loadingId)?.remove();

        if (res.ok && data.reply) {
            chatBox.innerHTML += `
                <div class="bg-stone-900 p-3 rounded border border-stone-800 text-stone-300 space-y-1 text-xs">
                    <div class="font-bold text-amber-500 flex items-center gap-1.5 mb-1 pb-1 border-b border-stone-800">
                        <i class="fa-solid fa-robot"></i> Trích xuất từ "${escapeHTML(selectedBookForAI)}"
                    </div>
                    <div class="leading-relaxed space-y-1">${formatAIMessage(data.reply)}</div>
                </div>`;
        } else {
            chatBox.innerHTML += `<div class="bg-red-950/40 p-2.5 rounded border border-red-800 text-red-300 text-xs">⚠️ Không nhận được phản hồi từ AI.</div>`;
        }
    } catch (err) {
        document.getElementById(loadingId)?.remove();
        chatBox.innerHTML += `<div class="bg-red-950/40 p-2.5 rounded border border-red-800 text-red-300 text-xs">⚠️ Lỗi kết nối máy chủ.</div>`;
    } finally {
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
