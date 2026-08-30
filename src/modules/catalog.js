// ==========================================================================
// CATALOG.JS - QUẢN LÝ DANH MỤC DƯỢC LIỆU, HUYỆT VỊ, TRÀ DƯỢC & DƯỢC THIỆN
// ==========================================================================

// --- MODAL THÔNG TIN CHUYÊN MÔN ---
function moModalThongTin(loai) {
    const modal = document.getElementById('modal-thong-tin-yhct');
    const titleEl = document.getElementById('modal-yhct-title');
    const contentEl = document.getElementById('modal-yhct-content');
    if (!modal || !titleEl || !contentEl) return;

    if (loai === 'duoclieu') {
        titleEl.innerHTML = `<i class="fa-solid fa-leaf text-emerald-400"></i> Thông tin chuyên môn Dược Liệu`;
        contentEl.innerHTML = `
            <p class="text-stone-200 font-medium">Toàn bộ thông tin dược liệu sẽ được đối chiếu dựa trên các nguồn tài liệu y khoa và Y học cổ truyền chính thống (Dược điển Việt Nam, Giáo trình Dược liệu học - Bộ Y tế, Từ điển Cây thuốc Việt Nam).</p>
            <div class="font-bold text-amber-400 uppercase tracking-wider text-xs pt-2">Cam kết xử lý dữ liệu:</div>
            <ul class="list-disc pl-5 space-y-2 text-stone-300 pt-1">
                <li><strong class="text-stone-100">Chính xác & Nguyên bản:</strong> Thông tin về tên vị thuốc, nhóm tác dụng, công dụng và kiêng kỵ được kiểm tra chặt chẽ theo tài liệu chuẩn.</li>
                <li><strong class="text-stone-100">Khuyến cáo y tế:</strong> Dữ liệu phục vụ tra cứu và học thuật; việc sử dụng thực tế cần có sự chỉ định của bác sĩ hoặc thầy thuốc chuyên môn.</li>
            </ul>
        `;
    } else if (loai === 'huyetvi') {
        titleEl.innerHTML = `<i class="fa-solid fa-circle-dot text-amber-400"></i> Đánh giá chuyên môn Y học cổ truyền`;
        contentEl.innerHTML = `
            <ul class="list-disc pl-5 space-y-2.5 text-stone-300">
                <li><strong class="text-stone-100">Độ chính xác danh mục:</strong> Hệ thống 14 đường kinh chính và Kỳ huyệt được phân loại chuẩn xác theo mã hiệu quốc tế (LU, LI, ST, SP, HT, SI, BL, KI, PC, TE, GB, LR, CV, GV, EX).</li>
                <li><strong class="text-stone-100">Vị trí và chủ trị:</strong> Mô tả mốc giải phẫu (như thốn, khoang liên sườn, gân cơ) đúng theo Dược điển và Giáo trình Châm cứu.</li>
                <li><strong class="text-stone-100">Thận trọng y khoa:</strong> Đã bao gồm các chống chỉ định quan trọng như cấm châm tại huyệt Nhữ Trung (ST17) và Thần Khuyết (CV8).</li>
            </ul>
        `;
    } else if (loai === 'phoingu') {
        titleEl.innerHTML = `<i class="fa-solid fa-mortar-pestle text-emerald-400"></i> Hướng dẫn vận hành Phối Ngũ & Tương Kỵ`;
        contentEl.innerHTML = `
            <p class="text-stone-200 font-medium">Tab Phối Ngũ cho phép thầy thuốc và người học tự xây dựng, kiểm nghiệm một phương tễ Đông y:</p>
            <ul class="list-disc pl-5 space-y-2.5 text-stone-300 pt-1">
                <li><strong class="text-stone-100">1. Nạp bài thuốc mẫu nhanh:</strong> Bấm vào các nút gợi ý nhanh (như <em>Tứ Quân, Tứ Vật, Hoàng Liên Giải Độc</em> hoặc nút thử nghiệm xung khắc) để nạp sẵn danh sách vị thuốc.</li>
                <li><strong class="text-stone-100">2. Thêm dược liệu tự do:</strong> Gõ tên vị thuốc vào ô tìm kiếm hoặc dùng tính năng AI tìm kiếm và lưu trữ tự động.</li>
                <li><strong class="text-stone-100">3. Kiểm tra Tương Kỵ:</strong> Hệ thống tự động quét và đối chiếu toàn bộ bài thuốc với danh mục luật <code class="text-amber-400 font-mono">18 phản / 19 úy</code> để cảnh báo ngay các cặp vị thuốc đại kỵ.</li>
                <li><strong class="text-stone-100">4. Đánh giá từ Chuyên gia AI:</strong> Bấm nút <em>"Đánh giá ngay"</em> để AI phân tích cấu trúc Quân - Thần - Tá - Sứ và công năng tổng thể của bài thuốc.</li>
            </ul>
        `;
    }

    modal.classList.remove('hidden');
}

function dongModalThongTin() {
    const modal = document.getElementById('modal-thong-tin-yhct');
    if (modal) modal.classList.add('hidden');
} 

window.addEventListener('click', (e) => {
    const modal = document.getElementById('modal-thong-tin-yhct');
    if (e.target === modal) dongModalThongTin();
});

// --- TIỆN ÍCH BỔ TRỢ ---
if (typeof debounce !== 'function') {
    window.debounce = function(func, wait) {
        let timeout;
        return function(...args) {
            const context = this;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), wait);
        };
    };
}

function toggleQuizDL(btnEl) {
    AppState.isQuizDL = !AppState.isQuizDL;
    const btn = btnEl || document.querySelector('button[onclick*="toggleQuizDL"]');
    if (btn) {
        if (AppState.isQuizDL) {
            btn.className = "px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-lg text-xs flex items-center gap-1.5 transition-all flex-shrink-0 shadow-lg shadow-amber-900/50 cursor-pointer";
        } else {
            btn.className = "px-4 py-2 bg-stone-800 hover:bg-stone-700 text-amber-500 border border-stone-700 font-bold rounded-lg text-xs flex items-center gap-1.5 transition-all flex-shrink-0 cursor-pointer";
        }
    }
    filterDuocLieu();
}

function toggleQuizHV(btnEl) {
    AppState.isQuizHV = !AppState.isQuizHV;
    const btn = btnEl || document.querySelector('button[onclick*="toggleQuizHV"]');
    if (btn) {
        if (AppState.isQuizHV) {
            btn.className = "px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-lg text-xs flex items-center gap-1.5 transition-all flex-shrink-0 shadow-lg shadow-amber-900/50";
        } else {
            btn.className = "px-4 py-2 bg-stone-800 hover:bg-stone-700 text-amber-500 border border-stone-700 font-bold rounded-lg text-xs flex items-center gap-1.5 transition-all flex-shrink-0";
        }
    }
    filterHuyetVi();
}

const debounceFilterDuocLieu = debounce(filterDuocLieu, 100);
const debounceFilterHuyetVi = debounce(filterHuyetVi, 100);
const debounceFilterTra = debounce(filterTra, 100);

function capNhatTongSoTrieuChung() {
    if (typeof database === 'undefined' || !database) return;
    const tatCaTrieuChung = [];
    Object.values(database).forEach(hoiChung => {
        if (hoiChung?.tc && Array.isArray(hoiChung.tc)) {
            tatCaTrieuChung.push(...hoiChung.tc);
        }
    });
    const trieuChungDuyNhat = [...new Set(tatCaTrieuChung.filter(Boolean))];
    const elementTong = document.getElementById('total-chung');
    if (elementTong) elementTong.innerText = trieuChungDuyNhat.length;
}

// --- QUẢN LÝ CUỘN VÔ HẠN THÔNG MINH (INFINITE SCROLL) ---
let currentActiveList = [];
let currentRenderType = '';
let displayLimit = 25;

function renderActiveGrid(reset = true) {
    if (reset) displayLimit = 25;
    if (currentRenderType === 'duoclieu') executeRenderDuocLieu(currentActiveList);
    else if (currentRenderType === 'huyetvi') executeRenderHuyetVi(currentActiveList);
    else if (currentRenderType === 'tra') executeRenderTra(currentActiveList);
    else if (currentRenderType === 'duocthien') executeRenderDuocThien(currentActiveList);
}

let isTicking = false;
window.addEventListener('scroll', () => {
    if (!isTicking) {
        window.requestAnimationFrame(() => {
            if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 400) {
                if (currentActiveList.length > 0 && displayLimit < currentActiveList.length) {
                    displayLimit += 50;
                    renderActiveGrid(false);
                }
            }
            isTicking = false;
        });
        isTicking = true;
    }
}, { passive: true });

// --- HÀM TRÍCH XUẤT VÀ KẾT HỢP DỮ LIỆU TỪ CSDL VÀ LOCALSTORAGE ---
function getCombinedDuocLieuData() {
    let customData = [];
    try { customData = JSON.parse(localStorage.getItem('custom_duocLieuData') || '[]'); } catch (e) { customData = []; }
    const baseData = (typeof duocLieuData !== 'undefined' && Array.isArray(duocLieuData)) ? duocLieuData : [];
    const map = new Map();
    baseData.forEach(item => { if (item && item.ten) map.set(removeAccents(item.ten), item); });
    customData.forEach(item => { if (item && item.ten) map.set(removeAccents(item.ten), item); });
    return Array.from(map.values());
}

function getCombinedHuyetViData() {
    let customData = [];
    try { customData = JSON.parse(localStorage.getItem('custom_huyetViData') || '[]'); } catch (e) { customData = []; }
    const baseData = (typeof huyetViData !== 'undefined' && Array.isArray(huyetViData)) ? huyetViData : [];
    const map = new Map();
    baseData.forEach(item => { if (item && item.ten) map.set(removeAccents(item.ten), item); });
    customData.forEach(item => { if (item && item.ten) map.set(removeAccents(item.ten), item); });
    return Array.from(map.values());
}

function getCombinedTraData() {
    let customData = [];
    try { customData = JSON.parse(localStorage.getItem('custom_traData') || '[]'); } catch (e) { customData = []; }
    const baseData = (typeof traData !== 'undefined' && Array.isArray(traData)) ? traData : [];
    const map = new Map();
    baseData.forEach(item => { if (item && item.ten) map.set(removeAccents(item.ten), item); });
    customData.forEach(item => { if (item && item.ten) map.set(removeAccents(item.ten), item); });
    return Array.from(map.values());
}

function getCombinedDuocThienData() {
    let customData = [];
    try { customData = JSON.parse(localStorage.getItem('custom_duocThienData') || '[]'); } catch (e) { customData = []; }
    const baseData = (typeof duocThienData !== 'undefined' && Array.isArray(duocThienData)) ? duocThienData : [];
    const map = new Map();
    baseData.forEach(item => { if (item && item.ten) map.set(removeAccents(item.ten), item); });
    customData.forEach(item => { if (item && item.ten) map.set(removeAccents(item.ten), item); });
    return Array.from(map.values());
}

// --- 1. TAB DƯỢC LIỆU ---
function filterDuocLieu(isEnter = false, forceExact = false) {
    saveCatalogState('duoclieu');
    const grid = document.getElementById('gridDuocLieu'); 
    if (!grid) return; 

    const activeDuocLieuData = getCombinedDuocLieuData();
    if (activeDuocLieuData.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center py-14 text-stone-500"><i class="fa-solid fa-spinner fa-spin text-3xl text-amber-500 mb-1"></i><p>Đang tải dữ liệu...</p></div>`;
        return;
    }

    const selectNhomDL = document.getElementById('filterNhomDuocLieu');
    if (selectNhomDL) {
        const nhomDL = [...new Set(activeDuocLieuData.map(d => d && d.nhom).filter(Boolean))];
        if (selectNhomDL.options.length <= 1 || (selectNhomDL.options.length - 1) !== nhomDL.length) {
            const curVal = selectNhomDL.value;
            selectNhomDL.innerHTML = '<option value="">-- Tất cả nhóm dược liệu --</option>';
            nhomDL.forEach(n => {
                const opt = document.createElement('option');
                opt.value = n;
                opt.innerText = n;
                selectNhomDL.appendChild(opt);
            });
            selectNhomDL.value = curVal;
        }
    }

    const txtRaw = getVal('searchDuocLieu').trim();
    const group = getVal('filterNhomDuocLieu');

    const scoredData = [];
    activeDuocLieuData.forEach(d => {
        if (!d) return;
        const nhom = d.nhom || '';
        if (group !== "" && nhom !== group) return;

        const score = tinhDiemKhopTongQuat(d, txtRaw, 'ten');
        if (score > 0) scoredData.push({ item: d, score: score });
    });

    scoredData.sort((a, b) => b.score - a.score);
    currentActiveList = scoredData.map(s => s.item);
    currentRenderType = 'duoclieu';

    if (currentActiveList.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center py-14 text-stone-500"><i class="fa-solid fa-magnifying-glass-blur text-3xl opacity-40 mb-1"></i><p>Không tìm thấy dược liệu phù hợp trong CSDL.</p><p class="text-xs text-amber-500/80 mt-1">💡 Bấm nút <strong>"AI Tìm & lưu"</strong> để yêu cầu AI tra cứu mới.</p></div>`;
        return;
    }

    renderActiveGrid(true);
}

function executeRenderDuocLieu(filteredData) {
    const grid = document.getElementById('gridDuocLieu');
    if (!grid) return;
    const txtRaw = getVal('searchDuocLieu').trim();

    grid.innerHTML = "";
    const frag = document.createDocumentFragment();
    filteredData.slice(0, displayLimit).forEach(d => {
        let card = document.createElement('div');
        card.className = "bg-dark-box p-4 rounded-lg space-y-3 relative border-l-4 border-emerald-600/70 shadow-md shadow-black/40 hover:scale-[1.01] transition-all duration-150 cursor-pointer";
        const blurDL = AppState.isQuizDL ? 'blur-md select-none transition-all duration-300' : '';
        const linkKhoaHoc = d.ten_khoa_hoc ? `https://www.google.com/search?q=${encodeURIComponent(d.ten_khoa_hoc)}` : '';
        const linkPinyin = d.pinyin ? `https://www.google.com/search?q=${encodeURIComponent(d.pinyin + ' YHCT')}` : '';

        card.innerHTML = `
            <div class="absolute top-0 right-0 bg-emerald-950 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-bl uppercase tracking-wider">${escapeHTML(d.nhom || 'Dược liệu YHCT')}</div>
            <div>
                <h3 class="font-bold text-emerald-400 text-base cursor-pointer hover:underline card-title-el inline-flex items-center gap-1 w-fit">🌿 ${highlightText(d.ten || '', txtRaw)}</h3>
                <div class="flex flex-wrap gap-x-3 gap-y-1 mt-1 text-xs">
                    ${d.ten_khoa_hoc ? `<a href="${linkKhoaHoc}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" class="inline-flex items-center gap-1 w-fit text-stone-400 italic hover:text-emerald-300 hover:underline"><i class="fa-solid fa-flask text-[10px] text-emerald-500/80"></i> ${highlightText(d.ten_khoa_hoc, txtRaw)}</a>` : ''}
                    ${d.pinyin ? `<a href="${linkPinyin}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" class="inline-flex items-center gap-1 w-fit text-amber-300/90 font-medium hover:text-amber-200 hover:underline"><i class="fa-solid fa-language text-[10px] text-amber-500"></i> ${highlightText(d.pinyin, txtRaw)}</a>` : ''}
                </div>
            </div>
            <div class="blur-target ${blurDL} space-y-2">
                <div class="bg-emerald-950/30 border border-emerald-600/60 p-2.5 rounded-md cong-dung-el cursor-pointer hover:border-amber-500/80 transition-colors" title="Bấm để tra cứu hội chứng phù hợp trong Luận trị">
                    <div class="text-emerald-400 text-[10px] font-bold tracking-wider uppercase flex items-center gap-1"><i class="fa-solid fa-briefcase-medical text-[9px]"></i> CÔNG DỤNG CHÍNH:</div>
                    <p class="text-sm text-stone-200 font-medium mt-0.5 leading-relaxed">${highlightText(d.cong_dung || 'Đang cập nhật công năng chủ trị.', txtRaw)}</p>
                </div>
                ${d.kieng_ky ? `<div class="bg-red-950/20 border border-red-900/40 p-2.5 rounded-md text-xs leading-relaxed"><div class="text-red-400 text-[10px] font-bold tracking-wider uppercase flex items-center gap-1 mb-0.5"><i class="fa-solid fa-triangle-exclamation text-[9px]"></i> LƯU Ý & KIÊNG KỴ:</div><p class="text-red-300/90 font-medium">${highlightText(d.kieng_ky, txtRaw)}</p></div>` : ''}
            </div>`;

        card.onclick = (e) => {
            const isTitle = e.target.closest('.card-title-el');
            const isCongDung = e.target.closest('.cong-dung-el');
            const blurEl = card.querySelector('.blur-target');
            const isBlurred = blurEl && blurEl.classList.contains('blur-md');

            if (AppState.isQuizDL && isBlurred) {
                if (blurEl) blurEl.classList.remove('blur-md', 'select-none');
                return;
            }
            if (isCongDung) {
                e.stopPropagation();
                chuyenQuaLuanTriVaTim(d.cong_dung || '');
                return;
            }
            if (isTitle) {
                kichHoatTimAnh(d.ten || '');
            }
        };
        frag.appendChild(card);
    });
    grid.appendChild(frag);
}

// --- 2. THEME KINH MẠCH & TAB HUYỆT VỊ ---
function getKinhTheme(kinhName) {
    const norm = removeAccents(kinhName || '').toLowerCase();
    
    if (norm.includes('bang quang')) return { border: 'border-l-4 border-blue-500', tag: 'bg-blue-950 text-blue-400', text: 'text-blue-400', textLight: 'text-blue-200', bgBox: 'bg-blue-950/30' };
    if (norm.includes('phoi') || norm.includes('phe')) return { border: 'border-l-4 border-slate-400', tag: 'bg-slate-800 text-slate-300', text: 'text-slate-300', textLight: 'text-slate-200', bgBox: 'bg-slate-950/40' };
    if (norm.includes('dai truong')) return { border: 'border-l-4 border-amber-600', tag: 'bg-amber-950 text-amber-400', text: 'text-amber-400', textLight: 'text-amber-200', bgBox: 'bg-amber-950/30' };
    if (norm.includes('vi') || norm.includes('da day')) return { border: 'border-l-4 border-yellow-500', tag: 'bg-yellow-950 text-yellow-400', text: 'text-yellow-400', textLight: 'text-yellow-200', bgBox: 'bg-yellow-950/30' };
    if (norm.includes('ty')) return { border: 'border-l-4 border-orange-500', tag: 'bg-orange-950 text-orange-400', text: 'text-orange-400', textLight: 'text-orange-200', bgBox: 'bg-orange-950/30' };
    if (norm.includes('tim') || norm.includes('tam')) return { border: 'border-l-4 border-red-500', tag: 'bg-red-950 text-red-400', text: 'text-red-400', textLight: 'text-red-200', bgBox: 'bg-red-950/30' };
    if (norm.includes('tieu truong')) return { border: 'border-l-4 border-rose-600', tag: 'bg-rose-950 text-rose-400', text: 'text-rose-400', textLight: 'text-rose-200', bgBox: 'bg-rose-950/30' };
    if (norm.includes('than')) return { border: 'border-l-4 border-indigo-500', tag: 'bg-indigo-950 text-indigo-400', text: 'text-indigo-400', textLight: 'text-indigo-200', bgBox: 'bg-indigo-950/30' };
    if (norm.includes('tam bao')) return { border: 'border-l-4 border-purple-500', tag: 'bg-purple-950 text-purple-400', text: 'text-purple-400', textLight: 'text-purple-200', bgBox: 'bg-purple-950/30' };
    if (norm.includes('tam tieu')) return { border: 'border-l-4 border-violet-500', tag: 'bg-violet-950 text-violet-400', text: 'text-violet-400', textLight: 'text-violet-200', bgBox: 'bg-violet-950/30' };
    if (norm.includes('dam') || norm.includes('mat')) return { border: 'border-l-4 border-emerald-500', tag: 'bg-emerald-950 text-emerald-400', text: 'text-emerald-400', textLight: 'text-emerald-200', bgBox: 'bg-emerald-950/30' };
    if (norm.includes('can') || norm.includes('gan')) return { border: 'border-l-4 border-green-500', tag: 'bg-green-950 text-green-400', text: 'text-green-400', textLight: 'text-green-200', bgBox: 'bg-green-950/30' };
    
    return { border: 'border-l-4 border-blue-500', tag: 'bg-blue-950 text-blue-400', text: 'text-blue-400', textLight: 'text-blue-200', bgBox: 'bg-blue-950/30' };
}

function filterHuyetVi(isEnter = false, forceExact = false) {
    saveCatalogState('huyetvi');
    const grid = document.getElementById('gridHuyetVi'); 
    if (!grid) return; 

    const activeHuyetViData = getCombinedHuyetViData();
    if (activeHuyetViData.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center py-14 text-stone-500"><i class="fa-solid fa-spinner fa-spin text-3xl text-amber-500 mb-1"></i><p>Đang tải dữ liệu...</p></div>`;
        return;
    }

    const selectKinh = document.getElementById('filterKinhLac');
    if (selectKinh) {
        const danhSachKinh = [...new Set(activeHuyetViData.map(h => h && h.kinh).filter(Boolean))];
        if (selectKinh.options.length <= 1 || (selectKinh.options.length - 1) !== danhSachKinh.length) {
            const curVal = selectKinh.value;
            selectKinh.innerHTML = '<option value="">-- Tất cả đường kinh & kỳ huyệt --</option>';
            danhSachKinh.forEach(k => {
                const opt = document.createElement('option');
                opt.value = k;
                opt.innerText = k;
                selectKinh.appendChild(opt);
            });
            selectKinh.value = curVal;
        }
    }

    const txtRaw = getVal('searchHuyetVi')?.trim() || '';
    const kinh = document.getElementById('filterKinhLac')?.value || '';
    
    const scoredData = [];
    activeHuyetViData.forEach(h => {
        if (!h) return;
        if (kinh !== "" && h.kinh !== kinh) return;

        const score = tinhDiemKhopTongQuat(h, txtRaw, 'ten');
        if (score > 0) scoredData.push({ item: h, score: score });
    });

    scoredData.sort((a, b) => b.score - a.score);
    currentActiveList = scoredData.map(s => s.item);
    currentRenderType = 'huyetvi';

    if (currentActiveList.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center py-14 text-stone-500"><i class="fa-solid fa-magnifying-glass-blur text-3xl opacity-40 mb-1"></i><p>Không tìm thấy huyệt vị phù hợp trong CSDL.</p><p class="text-xs text-amber-500/80 mt-1">💡 Bấm nút <strong>"AI Tìm & lưu"</strong> để yêu cầu AI tra cứu mới.</p></div>`;
        return;
    }

    renderActiveGrid(true);
}

function getKinhFolder(kinhName) {
    if (!kinhName) return 'khac';
    const norm = removeAccents(String(kinhName)).toLowerCase().replace(/[^a-z0-9]/g, '');
    return norm.startsWith('kinh') ? norm : 'kinh' + norm;
}

// --- ĐÃ KHÔI PHỤC: MÃ WHO NẰM CÙNG DÒNG VỚI TÊN HUYỆT ---
function executeRenderHuyetVi(filteredData) {
    const grid = document.getElementById('gridHuyetVi');
    if (!grid) return;
    const txtRaw = getVal('searchHuyetVi')?.trim() || '';
    grid.innerHTML = "";
    const frag = document.createDocumentFragment();
    
    filteredData.slice(0, displayLimit).forEach(h => {
        const theme = getKinhTheme(h.kinh);
        let card = document.createElement('div'); 
        card.className = `bg-dark-box p-3.5 rounded-lg relative cursor-pointer ${theme.border} shadow-md shadow-black/40 hover:border-amber-500/50 transition-colors grid grid-cols-12 gap-3.5 items-center`;
        
        // 🟢 Áp dụng lớp làm mờ blur cho cả phần chữ (đã có từ trước) VÀ khung ảnh khi bật chế độ ôn tập huyệt vị
        const blurHV = AppState.isQuizHV ? 'blur-md transition-all duration-300 select-none' : '';
        
        const safeMaWho = h.ma_who ? String(h.ma_who).trim().replace(/[^a-zA-Z0-9]/g, '').toUpperCase() : '';
        const maWhoHtml = safeMaWho ? `<a href="https://www.google.com/search?q=${encodeURIComponent('Huyệt ' + (h.ten || '') + ' ' + safeMaWho + ' YHCT')}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" class="px-1.5 py-0.5 text-[10px] font-mono font-bold bg-stone-800 text-amber-400 border border-stone-700/80 rounded hover:border-amber-500 hover:text-amber-300 transition-all cursor-pointer shadow-sm inline-block shrink-0">${highlightText(h.ma_who, txtRaw)}</a>` : '';
        const kinhBadgeHtml = h.kinh ? `<div class="absolute top-0 right-0 ${theme.tag} font-bold px-2.5 py-0.5 text-[9px] uppercase rounded-bl border-b border-l border-stone-800/60 z-20">${escapeHTML(h.kinh)}</div>` : '';

        const imgPath = safeMaWho ? `./hinhanhhuyetvi/${safeMaWho}.png` : '';

        card.innerHTML = `
            ${kinhBadgeHtml}
            
            <div class="col-span-7 flex flex-col gap-2 min-w-0">
                <!-- Tiêu đề & mã WHO -->
                <div class="flex items-center gap-1.5 min-w-0 pr-2 relative z-10">
                    <span class="font-bold ${theme.text} text-base cursor-pointer hover:underline card-title-el shrink-0">
                        <i class="fa-solid fa-circle-dot text-[11px]"></i> Huyệt ${highlightText(h.ten || '', txtRaw)}
                    </span>
                    ${maWhoHtml}
                </div>
                
                <div class="blur-target ${blurHV} flex flex-col gap-2">
                    <div class="${theme.bgBox} border border-sky-600/60 p-2.5 rounded-md chu-tri-el cursor-pointer hover:border-amber-500/80 transition-colors flex flex-col justify-center" title="Bấm để tra cứu phác đồ">
                        <div class="${theme.text} text-[9px] font-bold tracking-wider uppercase flex items-center gap-1 mb-0.5"><i class="fa-solid fa-kit-medical text-[9px]"></i> CHỦ TRỊ ĐẶC HIỆU:</div>
                        <p class="text-[11px] ${theme.textLight} font-medium leading-relaxed line-clamp-3">${highlightText(h.chu_tri || '', txtRaw)}</p>
                    </div>
                    <div class="bg-stone-900/90 border border-stone-700/80 p-2.5 rounded-md flex flex-col justify-center">
                        <div class="text-amber-400 text-[9px] font-bold tracking-wider uppercase flex items-center gap-1 mb-0.5"><i class="fa-solid fa-location-dot text-[9px]"></i> ĐỊNH VỊ GIẢI PHẪU:</div>
                        <p class="text-[10px] text-stone-300 font-medium leading-relaxed line-clamp-3">${highlightText(h.vi_tri || h.dinh_vi || 'Đang cập nhật', txtRaw)}</p>
                    </div>
                </div>
            </div>

            <!-- KHUNG ẢNH ĐƯỢC TÍCH HỢP BIẾN CHE ${blurHV} -->
            <div class="col-span-5 w-full aspect-[3/4] mt-3.5 self-center bg-stone-950 border border-stone-800 rounded-lg relative group cursor-pointer overflow-hidden img-box-el flex flex-col items-center justify-center shadow-inner z-0 ${blurHV}" title="Bấm để xem ảnh lớn">
                <div class="absolute inset-0 flex flex-col items-center justify-center bg-stone-900/50 text-center p-1 z-0">
                    <i class="fa-solid fa-image text-stone-700 text-2xl mb-1"></i>
                    <span class="text-[9px] text-stone-500 font-bold leading-tight tracking-wider">${safeMaWho || 'NO IMG'}</span>
                </div>
                
                ${imgPath ? `<img src="${imgPath}" loading="lazy" class="absolute inset-0 w-full h-full object-cover z-10 bg-stone-950 transition-transform duration-300 group-hover:scale-105" onerror="this.style.display='none';">` : ''}
                
                <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[11px] font-bold gap-1 z-20 pointer-events-none">
                    <i class="fa-solid fa-expand"></i> Phóng to
                </div>
            </div>`;

        card.onclick = (e) => {
            const isTitle = e.target.closest('.card-title-el');
            const isChuTri = e.target.closest('.chu-tri-el');
            const isImgBox = e.target.closest('.img-box-el');
            const blurTargets = card.querySelectorAll('.blur-target, .img-box-el');
            const isBlurred = blurTargets[0] && blurTargets[0].classList.contains('blur-md');

            // Khi đang bật chế độ ôn tập và nội dung đang bị che, bấm vào thẻ sẽ mở khóa hiển thị (cả chữ và ảnh)
            if (AppState.isQuizHV && isBlurred) {
                blurTargets.forEach(el => el.classList.remove('blur-md', 'select-none'));
                return;
            }
            if (isChuTri) {
                e.stopPropagation();
                chuyenQuaLuanTriVaTim(h.chu_tri || '');
                return;
            }
            if (isImgBox && imgPath && !e.target.closest('a')) {
                e.stopPropagation();
                saveCurrentTabState();
                window.open(imgPath, '_blank', 'noopener,noreferrer');
                return;
            }

            if (isTitle) {
                kichHoatTimAnh('Huyệt ' + (h.ten || ''));
            }
        };
        frag.appendChild(card);
    });
    grid.appendChild(frag);
}


// --- 3. TAB TRÀ DƯỢC ---
function filterTra(isEnter = false) {
    const grid = document.getElementById('gridTra'); 
    if (!grid) return; 

    const activeTraData = getCombinedTraData();
    if (activeTraData.length === 0 && (typeof traData === 'undefined' || !traData)) return;

    const selectTra = document.getElementById('filterNhomTra');
    if (selectTra) {
        const nhomTra = [...new Set(activeTraData.map(t => t && t.nhom).filter(Boolean))];
        if (selectTra.options.length <= 1 || (selectTra.options.length - 1) !== nhomTra.length) {
            const curVal = selectTra.value;
            selectTra.innerHTML = '<option value="">-- Tất cả nhóm công dụng --</option>';
            nhomTra.forEach(n => {
                const opt = document.createElement('option');
                opt.value = n;
                opt.innerText = n;
                selectTra.appendChild(opt);
            });
            selectTra.value = curVal;
        }
    }

    const txtRaw = getVal('searchTra').trim();
    const nhom = getVal('filterNhomTra');
    
    const scoredData = [];
    activeTraData.forEach(t => {
        if (!t) return;
        const nhomItem = String(t.nhom || '');
        if (nhom !== "" && nhomItem !== nhom) return;

        const score = tinhDiemKhopTongQuat(t, txtRaw, 'ten');
        if (score > 0) scoredData.push({ item: t, score: score });
    });

    scoredData.sort((a, b) => b.score - a.score);
    currentActiveList = scoredData.map(s => s.item);
    currentRenderType = 'tra';

    if (currentActiveList.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center py-14 text-stone-500"><i class="fa-solid fa-mug-xmark text-3xl opacity-40 block mb-1"></i><p>Không tìm thấy công thức trà phù hợp trong CSDL.</p><p class="text-xs text-amber-500/80 mt-1">💡 Bấm nút <strong>"AI Tìm & lưu"</strong> để yêu cầu AI tra cứu mới.</p></div>`;
        return;
    }

    renderActiveGrid(true);
}

function executeRenderTra(filteredData) {
    const grid = document.getElementById('gridTra');
    if (!grid) return;
    const txtRaw = getVal('searchTra').trim();

    grid.innerHTML = "";
    const frag = document.createDocumentFragment();
    filteredData.slice(0, displayLimit).forEach(t => {
        let card = document.createElement('div');
        card.className = "bg-dark-box p-4 rounded-lg space-y-3 relative border-l-4 border-amber-600/70 shadow-md shadow-black/40 hover:scale-[1.01] transition-all duration-150";
        
        const tpCardArr = Array.isArray(t.thanh_phan) ? t.thanh_phan : (t.thanh_phan ? [t.thanh_phan] : []);
        const tagsHtml = tpCardArr.map(tp => 
            `<button onclick="xemDuocLieu('${escapeHTML(tp)}')" class="bg-stone-800 text-amber-400/90 font-semibold text-xs px-2.5 py-1 rounded border border-stone-700/60 flex items-center gap-1 shadow-sm shadow-black/20 hover:border-amber-500 active:scale-95 transition-all">
                <i class="fa-solid fa-leaf text-[10px] text-emerald-500"></i> ${highlightText(tp, txtRaw)}
            </button>`
        ).join(' ');

        const displayCongDung = (!t.cong_dung || t.cong_dung === "Đang cập nhật") ? "Thanh nhiệt, giải độc, mát gan; An thần, trị mất ngủ, giảm căng thẳng." : t.cong_dung;

        card.innerHTML = `
            <div class="absolute top-0 right-0 bg-amber-950 text-amber-500 text-[10px] font-bold px-2 py-0.5 rounded-bl uppercase tracking-wider">${escapeHTML(t.nhom || 'Trà Dược YHCT')}</div>
            <h3 class="font-bold text-amber-500 text-base">☕ ${highlightText(t.ten || '', txtRaw)}</h3>
            <div>
                <div class="text-stone-500 text-[10px] font-bold tracking-wider uppercase">CÔNG DỤNG CHÍNH:</div>
                <p class="text-sm text-stone-300 leading-relaxed mt-0.5">${highlightText(displayCongDung, txtRaw)}</p>
            </div>
            ${t.kieng_ky ? `<div class="bg-red-950/20 border border-red-900/40 p-2.5 rounded-md text-xs leading-relaxed mt-2"><div class="text-red-400 text-[10px] font-bold tracking-wider uppercase flex items-center gap-1 mb-0.5"><i class="fa-solid fa-triangle-exclamation text-[9px]"></i> LƯU Ý & KIÊNG KỴ:</div><p class="text-red-300/90 font-medium">${highlightText(t.kieng_ky, txtRaw)}</p></div>` : ''}
            <div class="bg-amber-950/30 border border-amber-900/50 p-2.5 rounded-md text-xs leading-relaxed">
                <div class="text-amber-500 text-[10px] font-bold tracking-wider uppercase flex items-center gap-1 mb-0.5"><i class="fa-solid fa-lightbulb text-[9px]"></i> CÁCH PHA & DÙNG:</div>
                <p class="font-medium text-amber-200/90">${highlightText(t.cach_dung || 'Hãm với nước sôi 85-90°C trong 10-15 phút.', txtRaw)}</p>
            </div>
            <div class="space-y-1.5 pt-0.5">
                <div class="text-stone-500 text-[10px] font-bold tracking-wider uppercase flex items-center gap-1"><i class="fa-solid fa-clipboard-list text-[9px]"></i> THÀNH PHẦN DƯỢC LIỆU:</div>
                <div class="flex flex-wrap gap-1.5">${tagsHtml}</div>
            </div>`;
        frag.appendChild(card);
    });
    grid.appendChild(frag);
}

// --- 4. TAB DƯỢC THIỆN ---
function filterDuocThien(isEnter = false) {
    const grid = document.getElementById('gridDuocThien'); 
    if (!grid) return; 

    const activeDuocThienData = getCombinedDuocThienData();
    const selectDT = document.getElementById('filterNhomDuocThien');
    if (selectDT) {
        const nhomDT = [...new Set(activeDuocThienData.map(t => t && t.nhom).filter(Boolean))];
        if (selectDT.options.length <= 1 || (selectDT.options.length - 1) !== nhomDT.length) {
            const curVal = selectDT.value;
            selectDT.innerHTML = '<option value="">-- Tất cả nhóm dược thiện --</option>';
            nhomDT.forEach(n => {
                const opt = document.createElement('option');
                opt.value = n;
                opt.innerText = n;
                selectDT.appendChild(opt);
            });
            selectDT.value = curVal;
        }
    }

    const txtRaw = getVal('searchDuocThien').trim();
    const group = getVal('filterNhomDuocThien');
    
    const scoredData = [];
    activeDuocThienData.forEach(t => {
        if (!t) return;
        const matchGroup = !group || t.nhom === group;
        if (!matchGroup) return;

        const score = tinhDiemKhopTongQuat(t, txtRaw, 'ten');
        if (score > 0) scoredData.push({ item: t, score: score });
    });

    scoredData.sort((a, b) => b.score - a.score);
    currentActiveList = scoredData.map(s => s.item);
    currentRenderType = 'duocthien';

    if (currentActiveList.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center py-14 text-stone-500"><i class="fa-solid fa-utensils text-3xl opacity-40 block mb-1"></i><p>Không tìm thấy món ăn dược thiện phù hợp trong CSDL.</p><p class="text-xs text-amber-500/80 mt-1">💡 Bấm nút <strong>"AI Tìm & lưu"</strong> để yêu cầu AI tra cứu mới.</p></div>`;
        return;
    }

    renderActiveGrid(true);
}

function executeRenderDuocThien(filteredData) {
    const grid = document.getElementById('gridDuocThien');
    if (!grid) return;
    const txtRaw = getVal('searchDuocThien').trim();

    grid.innerHTML = "";
    const frag = document.createDocumentFragment();
    filteredData.slice(0, displayLimit).forEach(t => {
        let card = document.createElement('div');
        card.className = "bg-dark-box p-4 rounded-lg space-y-3 relative border-l-4 border-amber-600 shadow-md";
        
        const thanhPhanHtml = (t.thanh_phan || []).map(item => {
            const vi = typeof item === 'object' ? (item.vi || '') : String(item);
            const lieu = typeof item === 'object' ? (item.lieu || 'Vừa đủ') : '';
            return `<span onclick="xemDuocLieu('${escapeHTML(vi)}')" class="inline-flex items-center gap-1 px-2 py-0.5 bg-stone-800 text-emerald-400 text-xs rounded border border-stone-700 cursor-pointer hover:border-amber-500">🌿 <strong>${escapeHTML(vi)}</strong> ${lieu ? `: <span class="text-amber-200">${escapeHTML(lieu)}</span>` : ''}</span>`;
        }).join(' ');

        const cachLamHtml = Array.isArray(t.cach_lam) 
            ? t.cach_lam.map(step => `<li class="ml-4 list-decimal text-stone-300 text-xs">${escapeHTML(step)}</li>`).join('')
            : `<p class="text-xs text-stone-300">${escapeHTML(t.cach_lam || 'Đang cập nhật')}</p>`;

        card.innerHTML = `
            <div class="absolute top-0 right-0 bg-amber-950 text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded-bl uppercase">${escapeHTML(t.nhom || 'Dược Thiện')}</div>
            <h3 class="font-bold text-amber-400 text-base">🍲 ${highlightText(t.ten, txtRaw)}</h3>
            <div>
                <div class="text-stone-500 text-[10px] font-bold uppercase">CÔNG DỤNG CHÍNH:</div>
                <p class="text-xs text-stone-300 mt-0.5">${highlightText(t.cong_dung, txtRaw)}</p>
            </div>
            <div class="space-y-1">
                <div class="text-stone-500 text-[10px] font-bold uppercase">ĐỊNH LƯỢNG NGUYÊN LIỆU:</div>
                <div class="flex flex-wrap gap-1.5">${thanhPhanHtml}</div>
            </div>
            ${t.so_che ? `<div class="bg-stone-900/80 p-2 rounded text-xs"><span class="text-amber-400 font-bold">🔪 Sơ chế:</span> <span class="text-stone-300">${escapeHTML(t.so_che)}</span></div>` : ''}
            <div class="bg-amber-950/20 border border-amber-900/40 p-2.5 rounded-md space-y-1">
                <div class="text-amber-400 text-[10px] font-bold uppercase flex items-center gap-1"><i class="fa-solid fa-fire-burner"></i> KỸ THUẬT CHẾ BIẾN:</div>
                <ol class="space-y-1 leading-relaxed">${cachLamHtml}</ol>
            </div>
            ${t.kieng_ky ? `<div class="text-xs text-red-400 bg-red-950/20 p-2 rounded border border-red-900/30"><strong>⚠️ Kiêng kỵ:</strong> ${escapeHTML(t.kieng_ky)}</div>` : ''}`;
        frag.appendChild(card);
    });
    grid.appendChild(frag);
}

// --- KHÔI PHỤC BỘ LỌC VÀ TRẠNG THÁI CUỘN TỪ SESSIONSTORAGE ---
function saveCatalogState(tabName) {
    const state = {
        tab: tabName,
        search: getVal(`search${capitalize(tabName)}`),
        group: getVal(`filterNhom${capitalize(tabName)}`) || getVal(`filterKinhLac`) || '',
        scroll: window.scrollY
    };
    sessionStorage.setItem('last_catalog_state', JSON.stringify(state));
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// --- HÀM ĐIỀU HƯỚNG LIÊN TAB & TÌM ẢNH HỌC THUẬT ---
async function xemDuocLieu(tenViThuoc) {
    if (!tenViThuoc) return;
    await switchTab('duoclieu');
    const searchInput = document.getElementById('searchDuocLieu');
    const filterNhom = document.getElementById('filterNhomDuocLieu');
    if (searchInput) searchInput.value = tenViThuoc;
    if (filterNhom) filterNhom.value = "";
    filterDuocLieu(false, true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function xemHuyetVi(tenHuyet) {
    if (!tenHuyet) return;
    await switchTab('huyetvi');
    const searchInput = document.getElementById('searchHuyetVi');
    const filterKinh = document.getElementById('filterKinhLac');
    if (searchInput) searchInput.value = tenHuyet;
    if (filterKinh) filterKinh.value = "";
    filterHuyetVi(false, true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function kichHoatTimAnh(keyword = "") {
    const kw = keyword.trim();
    if (!kw) return;

    const kwClean = kw.replace(/\(.*?\)/g, '').replace(/[^\w\sàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]/gi, ' ').trim();
    const suffix = kwClean.toLowerCase().includes('huyệt') ? ' huyệt vị YHCT' : ' vị thuốc YHCT';
    const q = encodeURIComponent(kwClean + suffix);
    
    saveCurrentTabState(); // THÊM DÒNG NÀY

    const link = document.createElement('a');
    link.href = `https://www.google.com/search?q=${q}&udm=2`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
}


function khoiPhucCatalog() {
    const savedState = sessionStorage.getItem('last_catalog_state');
    if (savedState) {
        try {
            const state = JSON.parse(savedState);
            if (state.tab && typeof switchTab === 'function') {
                switchTab(state.tab);

                const searchInput = document.getElementById(`search${capitalize(state.tab)}`);
                if (searchInput && state.search) searchInput.value = state.search;
                
                setTimeout(() => {
                    const filterEl = document.getElementById(`filterNhom${capitalize(state.tab)}`) || document.getElementById(`filterKinhLac`);
                    if (filterEl && state.group) filterEl.value = state.group;
                    
                    if (state.tab === 'duoclieu') filterDuocLieu();
                    else if (state.tab === 'huyetvi') filterHuyetVi();
                    else if (state.tab === 'tra') filterTra();
                    else if (state.tab === 'duocthien') filterDuocThien();

                    if (state.scroll) {
                        window.scrollTo({ top: state.scroll, behavior: 'instant' });
                    }
                }, 100);
            }
        } catch (e) {
            console.error("Lỗi khôi phục trạng thái catalog:", e);
        }
    }
}

// Chạy khi khởi động ứng dụng
window.addEventListener('DOMContentLoaded', khoiPhucCatalog);

function saveCurrentTabState() {
    const activeBtn = document.querySelector('nav button.tab-active');
    if (activeBtn) {
        const currentTabId = activeBtn.id.replace('btnTab', '').toLowerCase();
        saveCatalogState(currentTabId);
    }
}

// Khôi phục hàm về trạng thái chuẩn, không tự kiểm tra riêng lẻ gây xung đột
function moModalTuanNayAnGi() {
    const modal = document.getElementById('modal-tuan-nay-an-gi');
    if (modal) modal.classList.remove('hidden');
}
window.moModalTuanNayAnGi = moModalTuanNayAnGi;

function dongModalTuanNayAnGi() {
    const modal = document.getElementById('modal-tuan-nay-an-gi');
    if (modal) modal.classList.add('hidden');
}
window.dongModalTuanNayAnGi = dongModalTuanNayAnGi;

function layNoiDungThucDonTuanText() {
    const resultArea = document.getElementById('tna-result-area');
    if (!resultArea) return '';
    return resultArea.innerText.trim();
}

async function saoChepThucDonTuan() {
    const text = layNoiDungThucDonTuanText();
    if (!text || text.includes('Chưa có thực đơn')) {
        alert('⚠️ Chưa có nội dung thực đơn để sao chép!');
        return;
    }
    if (navigator.clipboard) {
        try {
            await navigator.clipboard.writeText(text);
            alert('✅ Đã sao chép thực đơn tuần vào bộ nhớ tạm!');
        } catch (e) {
            alert('❌ Không thể sao chép.');
        }
    }
}

async function chiaSeZaloThucDonTuan() {
    const text = layNoiDungThucDonTuanText();
    if (!text || text.includes('Chưa có thực đơn')) {
        alert('⚠️ Chưa có nội dung thực đơn để chia sẻ!');
        return;
    }
    if (navigator.clipboard) {
        try {
            await navigator.clipboard.writeText(text);
            alert('✅ Đã sao chép thực đơn! Đang mở Zalo để dán...');
            window.open('https://zalo.me', '_blank');
        } catch (e) {
            window.open('https://zalo.me', '_blank');
        }
    } else {
        window.open('https://zalo.me', '_blank');
    }
}

