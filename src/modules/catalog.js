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
    if (e.target === modal) {
        dongModalThongTin();
    }
});

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

function filterDuocLieu(isEnter = false, forceExact = false) {
    saveDuocLieuState();
    const grid = document.getElementById('gridDuocLieu'); 
    if (!grid) return; 

    if (typeof duocLieuData === 'undefined' || !duocLieuData) {
        grid.innerHTML = `<div class="col-span-full text-center py-14 text-stone-500"><i class="fa-solid fa-spinner fa-spin text-3xl text-amber-500 mb-1"></i><p>Đang tải dữ liệu...</p></div>`;
        return;
    }

    // Tự động nạp tùy chọn Nhóm Dược Liệu
    const selectNhomDL = document.getElementById('filterNhomDuocLieu');
    if (selectNhomDL) {
        const nhomDL = [...new Set(duocLieuData.map(d => d && d.nhom).filter(Boolean))];
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
    const isAiChecked = document.getElementById('ai-backup-duoclieu')?.checked || false;

    grid.innerHTML = "";
    const scoredData = [];

    duocLieuData.forEach(d => {
        if (!d) return;
        const nhom = d.nhom || '';
        if (group !== "" && nhom !== group) return;

        const score = tinhDiemKhopTongQuat(d, txtRaw, 'ten');
        if (score > 0) {
            scoredData.push({ item: d, score: score });
        }
    });

    scoredData.sort((a, b) => b.score - a.score);
    const filteredData = scoredData.map(s => s.item);

    if (filteredData.length === 0) {
        if (txtRaw && (isEnter || isAiChecked)) {
            const aiCheck = document.getElementById('ai-backup-duoclieu');
            if (aiCheck) aiCheck.checked = true;
            fetchAIBackupResult(txtRaw, 'Dược Liệu YHCT', grid);
            return;
        }

        const feedbackMsg = txtRaw 
            ? `<p class="text-xs text-stone-500 font-medium flex items-center justify-center gap-1">Nhấn <span class="px-2 py-0.5 bg-amber-950/80 text-amber-400 border border-amber-600/60 rounded font-bold text-[11px] inline-flex items-center gap-1"><i class="fa-solid fa-robot text-[10px]"></i> AI Tìm</span> để tìm chính xác với AI</p>` 
            : '';

        grid.innerHTML = `<div class="col-span-full text-center py-14 text-stone-500"><i class="fa-solid fa-magnifying-glass-blur text-3xl opacity-40 mb-1"></i><p>Không tìm thấy dược liệu phù hợp</p>${feedbackMsg}</div>`;
        return;
    }

    const frag = document.createDocumentFragment();
    filteredData.slice(0, 50).forEach(d => {
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
            ${d.ten_khoa_hoc ? `
                <a href="${linkKhoaHoc}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" class="inline-flex items-center gap-1 w-fit text-stone-400 italic hover:text-emerald-300 hover:underline">
                    <i class="fa-solid fa-flask text-[10px] text-emerald-500/80"></i> ${highlightText(d.ten_khoa_hoc, txtRaw)}
                </a>
            ` : ''}
            ${d.pinyin ? `
                <a href="${linkPinyin}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()" class="inline-flex items-center gap-1 w-fit text-amber-300/90 font-medium hover:text-amber-200 hover:underline">
                    <i class="fa-solid fa-language text-[10px] text-amber-500"></i> ${highlightText(d.pinyin, txtRaw)}
                </a>
            ` : ''}
        </div>
    </div>

    <div class="blur-target ${blurDL} space-y-2">
        <div class="bg-emerald-950/30 border border-emerald-600/60 p-2.5 rounded-md cong-dung-el cursor-pointer hover:border-amber-500/80 transition-colors" title="Bấm để tra cứu hội chứng phù hợp trong Luận trị">
            <div class="text-emerald-400 text-[10px] font-bold tracking-wider uppercase flex items-center gap-1">
                <i class="fa-solid fa-briefcase-medical text-[9px]"></i> CÔNG DỤNG CHÍNH:
            </div>
            <p class="text-sm text-stone-200 font-medium mt-0.5 leading-relaxed">${highlightText(d.cong_dung || 'Đang cập nhật công năng chủ trị.', txtRaw)}</p>
        </div>

        ${d.kieng_ky ? `
        <div class="bg-red-950/20 border border-red-900/40 p-2.5 rounded-md text-xs leading-relaxed">
            <div class="text-red-400 text-[10px] font-bold tracking-wider uppercase flex items-center gap-1 mb-0.5">
                <i class="fa-solid fa-triangle-exclamation text-[9px]"></i> LƯU Ý & KIÊNG KỴ:
            </div>
            <p class="text-red-300/90 font-medium">${highlightText(d.kieng_ky, txtRaw)}</p>
        </div>` : ''}
    </div>
`;

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

function getKinhTheme(kinhName) {
    const norm = removeAccents(kinhName || '').toLowerCase();
    
    if (norm.includes('phoi') || norm.includes('phe')) {
        return { border: 'border-l-4 border-slate-400', tag: 'bg-slate-800 text-slate-300', text: 'text-slate-300', textLight: 'text-slate-200', bgBox: 'bg-slate-950/40' };
    }
    if (norm.includes('dai truong')) {
        return { border: 'border-l-4 border-amber-600', tag: 'bg-amber-950 text-amber-400', text: 'text-amber-400', textLight: 'text-amber-200', bgBox: 'bg-amber-950/30' };
    }
    if (norm.includes('vi') || norm.includes('da day')) {
        return { border: 'border-l-4 border-yellow-500', tag: 'bg-yellow-950 text-yellow-400', text: 'text-yellow-400', textLight: 'text-yellow-200', bgBox: 'bg-yellow-950/30' };
    }
    if (norm.includes('ty')) {
        return { border: 'border-l-4 border-orange-500', tag: 'bg-orange-950 text-orange-400', text: 'text-orange-400', textLight: 'text-orange-200', bgBox: 'bg-orange-950/30' };
    }
    if (norm.includes('tim') || norm.includes('tam')) {
        return { border: 'border-l-4 border-red-500', tag: 'bg-red-950 text-red-400', text: 'text-red-400', textLight: 'text-red-200', bgBox: 'bg-red-950/30' };
    }
    if (norm.includes('tieu truong')) {
        return { border: 'border-l-4 border-rose-600', tag: 'bg-rose-950 text-rose-400', text: 'text-rose-400', textLight: 'text-rose-200', bgBox: 'bg-rose-950/30' };
    }
    if (norm.includes('bang quang')) {
        return { border: 'border-l-4 border-blue-500', tag: 'bg-blue-950 text-blue-400', text: 'text-blue-400', textLight: 'text-blue-200', bgBox: 'bg-blue-950/30' };
    }
    if (norm.includes('than')) {
        return { border: 'border-l-4 border-indigo-500', tag: 'bg-indigo-950 text-indigo-400', text: 'text-indigo-400', textLight: 'text-indigo-200', bgBox: 'bg-indigo-950/30' };
    }
    if (norm.includes('tam bao')) {
        return { border: 'border-l-4 border-purple-500', tag: 'bg-purple-950 text-purple-400', text: 'text-purple-400', textLight: 'text-purple-200', bgBox: 'bg-purple-950/30' };
    }
    if (norm.includes('tam tieu')) {
        return { border: 'border-l-4 border-violet-500', tag: 'bg-violet-950 text-violet-400', text: 'text-violet-400', textLight: 'text-violet-200', bgBox: 'bg-violet-950/30' };
    }
    if (norm.includes('dam') || norm.includes('mat')) {
        return { border: 'border-l-4 border-emerald-500', tag: 'bg-emerald-950 text-emerald-400', text: 'text-emerald-400', textLight: 'text-emerald-200', bgBox: 'bg-emerald-950/30' };
    }
    if (norm.includes('can') || norm.includes('gan')) {
        return { border: 'border-l-4 border-green-500', tag: 'bg-green-950 text-green-400', text: 'text-green-400', textLight: 'text-green-200', bgBox: 'bg-green-950/30' };
    }
    
    return { border: 'border-l-4 border-teal-600', tag: 'bg-teal-950 text-teal-400', text: 'text-teal-400', textLight: 'text-teal-200', bgBox: 'bg-teal-950/30' };
}

function filterHuyetVi(isEnter = false, forceExact = false) {
    saveHuyetViState();
    const grid = document.getElementById('gridHuyetVi'); 
    if (!grid) return; 

    if (typeof huyetViData === 'undefined' || !huyetViData) {
        grid.innerHTML = `<div class="col-span-full text-center py-14 text-stone-500"><i class="fa-solid fa-spinner fa-spin text-3xl text-amber-500 mb-1"></i><p>Đang tải dữ liệu...</p></div>`;
        return;
    }

    // Tự động nạp tùy chọn Kinh Lạc
    const selectKinh = document.getElementById('filterKinhLac');
    if (selectKinh) {
        const danhSachKinh = [...new Set(huyetViData.map(h => h && h.kinh).filter(Boolean))];
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

    const txtRaw = getVal('searchHuyetVi').trim();
    const kinh = getVal('filterKinhLac');
    const isAiChecked = document.getElementById('ai-backup-huyetvi')?.checked || false;
    
    grid.innerHTML = "";

    const scoredData = [];
    huyetViData.forEach(h => {
        if (!h) return;
        const matchKinh = (kinh === "" || h.kinh === kinh);
        if (!matchKinh) return;

        const score = tinhDiemKhopTongQuat(h, txtRaw, 'ten');
        if (score > 0) {
            scoredData.push({ item: h, score: score });
        }
    });

    scoredData.sort((a, b) => {
        if (b.score !== a.score) {
            return b.score - a.score;
        }
        if (kinh === "") {
            const isBQA = removeAccents(a.item.kinh || '').includes('bang quang');
            const isBQB = removeAccents(b.item.kinh || '').includes('bang quang');
            if (isBQA && !isBQB) return -1;
            if (!isBQA && isBQB) return 1;
        }
        return 0;
    });

    const filteredData = scoredData.map(s => s.item);

    if (filteredData.length === 0) {
        if (txtRaw && (isEnter || isAiChecked)) {
            const aiCheck = document.getElementById('ai-backup-huyetvi');
            if (aiCheck) aiCheck.checked = true;
            fetchAIBackupResult(txtRaw, 'Huyệt Vị YHCT', grid);
            return;
        }

        const feedbackMsg = txtRaw 
            ? `<p class="text-xs text-stone-500 font-medium flex items-center justify-center gap-1">Nhấn <span class="px-2 py-0.5 bg-amber-950/80 text-amber-400 border border-amber-600/60 rounded font-bold text-[11px] inline-flex items-center gap-1"><i class="fa-solid fa-robot text-[10px]"></i> AI Tìm</span> để tìm kiếm với AI</p>` 
            : '';

        grid.innerHTML = `<div class="col-span-full text-center py-14 text-stone-500"><i class="fa-solid fa-magnifying-glass-blur text-3xl opacity-40 mb-1"></i><p>Không tìm thấy huyệt vị phù hợp</p>${feedbackMsg}</div>`;
        return;
    }

    const frag = document.createDocumentFragment();
    filteredData.slice(0, 50).forEach(h => {
        const theme = getKinhTheme(h.kinh);
        let card = document.createElement('div'); 
        card.className = `bg-dark-box p-4 rounded-lg space-y-3 relative cursor-pointer ${theme.border} shadow-md shadow-black/40`;
        
        const blurHV = AppState.isQuizHV ? 'blur-md transition-all duration-300' : '';
        const maWhoHtml = h.ma_who ? `
            <a href="https://www.google.com/search?q=${encodeURIComponent('Huyệt ' + (h.ten || '') + ' ' + h.ma_who + ' YHCT')}" 
               target="_blank" 
               rel="noopener noreferrer" 
               onclick="event.stopPropagation()" 
               class="px-1.5 py-0.5 text-[10px] font-mono font-bold bg-stone-800 text-amber-400 border border-stone-700/80 rounded hover:border-amber-500 hover:text-amber-300 transition-all cursor-pointer shadow-sm inline-block" 
               title="Bấm để tìm kiếm Google cho mã ${escapeHTML(h.ma_who)}">
                ${highlightText(h.ma_who, txtRaw)}
            </a>
        ` : '';

        const kinhBadgeHtml = h.kinh ? `
            <div class="absolute top-0 right-0 ${theme.tag} font-bold px-2 py-0.5 text-[9px] uppercase rounded-bl border-b border-l border-stone-800/60">${escapeHTML(h.kinh)}</div>
        ` : '';

        card.innerHTML = `
            ${kinhBadgeHtml}
            <div class="mb-2 flex items-center gap-2 flex-wrap">
                <span class="font-bold ${theme.text} text-base inline-flex items-center gap-1.5 cursor-pointer hover:underline card-title-el w-fit">
                    <i class="fa-solid fa-circle-dot text-xs"></i> Huyệt ${highlightText(h.ten || '', txtRaw)}
                </span>
                ${maWhoHtml}
            </div>
            <div class="blur-target ${blurHV} transition-all duration-300 space-y-2">
                <div class="${theme.bgBox} border border-sky-600/60 p-2.5 rounded-md chu-tri-el cursor-pointer hover:border-amber-500/80 transition-colors" title="Bấm để tra cứu phác đồ Luận trị">
                    <div class="${theme.text} text-[10px] font-bold tracking-wider uppercase flex items-center gap-1">
                        <i class="fa-solid fa-kit-medical text-[9px]"></i> CHỦ TRỊ ĐẶC HIỆU:
                    </div>
                    <p class="text-sm ${theme.textLight} font-medium mt-0.5 leading-relaxed">${highlightText(h.chu_tri || '', txtRaw)}</p>
                </div>
                <div class="bg-stone-900/90 border border-stone-700/80 p-2.5 rounded-md">
                    <div class="text-amber-400 text-[10px] font-bold tracking-wider uppercase flex items-center gap-1 mb-0.5">
                        <i class="fa-solid fa-location-dot text-[9px]"></i> ĐỊNH VỊ GIẢI PHẪU:
                    </div>
                    <p class="text-xs text-stone-200 font-medium leading-relaxed">${highlightText(h.vi_tri || h.dinh_vi || 'Đang cập nhật', txtRaw)}</p>
                </div>
            </div>
        `;

        card.onclick = (e) => {
            const isTitle = e.target.closest('.card-title-el');
            const isChuTri = e.target.closest('.chu-tri-el');
            const blurEl = card.querySelector('.blur-target');
            const isBlurred = blurEl && blurEl.classList.contains('blur-md');

            if (AppState.isQuizHV && isBlurred) {
                if (blurEl) blurEl.classList.remove('blur-md');
                return;
            }

            if (isChuTri) {
                e.stopPropagation();
                chuyenQuaLuanTriVaTim(h.chu_tri || '');
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

function getCombinedTraData() {
    let customData = [];
    try {
        customData = JSON.parse(localStorage.getItem('custom_traData') || '[]');
    } catch (e) {
        customData = [];
    }
    
    const baseData = (typeof traData !== 'undefined' && Array.isArray(traData)) ? traData : [];
    
    const map = new Map();
    baseData.forEach(item => {
        if (item && item.ten) map.set(removeAccents(item.ten), item);
    });
    customData.forEach(item => {
        if (item && item.ten) map.set(removeAccents(item.ten), item);
    });
    
    return Array.from(map.values());
}

function filterTra(isEnter = false) {
    const grid = document.getElementById('gridTra'); 
    if (!grid) return; 

    const activeTraData = getCombinedTraData();
    if (activeTraData.length === 0 && (typeof traData === 'undefined' || !traData)) {
        return;
    }

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
    const isAiChecked = document.getElementById('ai-backup-tra')?.checked || false;
    
    grid.innerHTML = "";

    const scoredData = [];
    activeTraData.forEach(t => {
        if (!t) return;
        const nhomItem = String(t.nhom || '');
        if (nhom !== "" && nhomItem !== nhom) return;

        const score = tinhDiemKhopTongQuat(t, txtRaw, 'ten');
        if (score > 0) {
            scoredData.push({ item: t, score: score });
        }
    });

    scoredData.sort((a, b) => b.score - a.score);
    const filteredData = scoredData.map(s => s.item);

    if (filteredData.length === 0) {
        if (txtRaw && (isEnter || isAiChecked)) {
            const aiCheck = document.getElementById('ai-backup-tra');
            if (aiCheck) aiCheck.checked = true;
            fetchAIBackupResult(txtRaw, 'Trà Dược YHCT', grid);
            return;
        }

        const feedbackMsg = txtRaw 
            ? `<p class="text-xs text-stone-500 font-medium flex items-center justify-center gap-1">Nhấn nút <span class="px-2 py-0.5 bg-amber-950/80 text-amber-400 border border-amber-600/60 rounded font-bold text-[11px] inline-flex items-center gap-1"><i class="fa-solid fa-robot text-[10px]"></i> AI Tìm</span> để tìm kiếm với AI</p>` 
            : '';
            
        grid.innerHTML = `
            <div class="col-span-full text-center py-14 space-y-2 text-stone-500">
                <i class="fa-solid fa-mug-xmark text-3xl opacity-40 block mb-1"></i>
                <p class="text-sm font-medium">Không tìm thấy công thức trà phù hợp</p>
                ${feedbackMsg}
            </div>
        `;
        return;
    }
    const frag = document.createDocumentFragment();
    filteredData.slice(0, 50).forEach(t => {
        let card = document.createElement('div');
        card.className = "bg-dark-box p-4 rounded-lg space-y-3 relative border-l-4 border-amber-600/70 shadow-md shadow-black/40 hover:scale-[1.01] transition-all duration-150";
        
        const tpCardArr = Array.isArray(t.thanh_phan) ? t.thanh_phan : (t.thanh_phan ? [t.thanh_phan] : []);
        const tagsHtml = tpCardArr.map(tp => 
            `<button onclick="xemDuocLieu('${escapeHTML(tp)}')" class="bg-stone-800 text-amber-400/90 font-semibold text-xs px-2.5 py-1 rounded border border-stone-700/60 flex items-center gap-1 shadow-sm shadow-black/20 hover:border-amber-500 active:scale-95 transition-all">
                <i class="fa-solid fa-leaf text-[10px] text-emerald-500"></i> ${highlightText(tp, txtRaw)}
            </button>`
        ).join(' ');

        const displayCongDung = (!t.cong_dung || t.cong_dung === "Đang cập nhật") 
            ? "Thanh nhiệt, giải độc, mát gan; An thần, trị mất ngủ, giảm căng thẳng." 
            : t.cong_dung;

        const luuYCardHtml = t.kieng_ky ? `
            <div class="bg-red-950/20 border border-red-900/40 p-2.5 rounded-md text-xs leading-relaxed mt-2">
                <div class="text-red-400 text-[10px] font-bold tracking-wider uppercase flex items-center gap-1 mb-0.5">
                    <i class="fa-solid fa-triangle-exclamation text-[9px]"></i> LƯU Ý & KIÊNG KỴ:
                </div>
                <p class="text-red-300/90 font-medium">${highlightText(t.kieng_ky, txtRaw)}</p>
            </div>
        ` : '';

        card.innerHTML = `
            <div class="absolute top-0 right-0 bg-amber-950 text-amber-500 text-[10px] font-bold px-2 py-0.5 rounded-bl uppercase tracking-wider">${escapeHTML(t.nhom || 'Trà Dược YHCT')}</div>
            <h3 class="font-bold text-amber-500 text-base">☕ ${highlightText(t.ten || '', txtRaw)}</h3>
            <div>
                <div class="text-stone-500 text-[10px] font-bold tracking-wider uppercase">CÔNG DỤNG CHÍNH:</div>
                <p class="text-sm text-stone-300 leading-relaxed mt-0.5">${highlightText(displayCongDung, txtRaw)}</p>
            </div>
            ${luuYCardHtml}
            <div class="bg-amber-950/30 border border-amber-900/50 p-2.5 rounded-md text-xs leading-relaxed">
                <div class="text-amber-500 text-[10px] font-bold tracking-wider uppercase flex items-center gap-1 mb-0.5">
                    <i class="fa-solid fa-lightbulb text-[9px]"></i> CÁCH PHA & DÙNG:
                </div>
                <p class="font-medium text-amber-200/90">${highlightText(t.cach_dung || 'Hãm với nước sôi 85-90°C trong 10-15 phút.', txtRaw)}</p>
            </div>
            <div class="space-y-1.5 pt-0.5">
                <div class="text-stone-500 text-[10px] font-bold tracking-wider uppercase flex items-center gap-1">
                    <i class="fa-solid fa-clipboard-list text-[9px]"></i> THÀNH PHẦN DƯỢC LIỆU:
                </div>
                <div class="flex flex-wrap gap-1.5">${tagsHtml}</div>
            </div>
        `;
        frag.appendChild(card);
    });
    grid.appendChild(frag);
}

function getCombinedDuocThienData() {
    let customData = [];
    try {
        customData = JSON.parse(localStorage.getItem('custom_duocThienData') || '[]');
    } catch (e) {
        customData = [];
    }
    
    const baseData = (typeof duocThienData !== 'undefined' && Array.isArray(duocThienData)) ? duocThienData : [];
    
    const map = new Map();
    baseData.forEach(item => {
        if (item && item.ten) map.set(removeAccents(item.ten), item);
    });
    customData.forEach(item => {
        if (item && item.ten) map.set(removeAccents(item.ten), item);
    });
    
    return Array.from(map.values());
}

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
    grid.innerHTML = "";

    const scoredData = [];
    activeDuocThienData.forEach(t => {
        if (!t) return;
        const matchGroup = !group || t.nhom === group;
        if (!matchGroup) return;

        const score = tinhDiemKhopTongQuat(t, txtRaw, 'ten');
        if (score > 0) {
            scoredData.push({ item: t, score: score });
        }
    });

    scoredData.sort((a, b) => b.score - a.score);
    const filteredData = scoredData.map(s => s.item);

    if (filteredData.length === 0) {
        if (txtRaw && isEnter) {
            fetchAIBackupResult(txtRaw, 'Dược Thiện YHCT', grid);
            return;
        }
        grid.innerHTML = `<div class="col-span-full text-center py-10 text-stone-500">Không tìm thấy món ăn phù hợp.</div>`;
        return;
    }

    filteredData.forEach(t => {
        let card = document.createElement('div');
        card.className = "bg-dark-box p-4 rounded-lg space-y-3 relative border-l-4 border-amber-600 shadow-md";
        
        const thanhPhanHtml = (t.thanh_phan || []).map(item => {
            const vi = typeof item === 'object' ? (item.vi || '') : String(item);
            const lieu = typeof item === 'object' ? (item.lieu || 'Vừa đủ') : '';
            return `
                <span onclick="xemDuocLieu('${escapeHTML(vi)}')" class="inline-flex items-center gap-1 px-2 py-0.5 bg-stone-800 text-emerald-400 text-xs rounded border border-stone-700 cursor-pointer hover:border-amber-500">
                    🌿 <strong>${escapeHTML(vi)}</strong> ${lieu ? `: <span class="text-amber-200">${escapeHTML(lieu)}</span>` : ''}
                </span>
            `;
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

            ${t.so_che ? `
            <div class="bg-stone-900/80 p-2 rounded text-xs">
                <span class="text-amber-400 font-bold">🔪 Sơ chế:</span> <span class="text-stone-300">${escapeHTML(t.so_che)}</span>
            </div>` : ''}

            <div class="bg-amber-950/20 border border-amber-900/40 p-2.5 rounded-md space-y-1">
                <div class="text-amber-400 text-[10px] font-bold uppercase flex items-center gap-1">
                    <i class="fa-solid fa-fire-burner"></i> KỸ THUẬT CHẾ BIẾN:
                </div>
                <ol class="space-y-1 leading-relaxed">${cachLamHtml}</ol>
            </div>

            ${t.kieng_ky ? `
            <div class="text-xs text-red-400 bg-red-950/20 p-2 rounded border border-red-900/30">
                <strong>⚠️ Kiêng kỵ:</strong> ${escapeHTML(t.kieng_ky)}
            </div>` : ''}
        `;
        grid.appendChild(card);
    });
}

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
    
    const urlGoogle = `https://www.google.com/search?q=${q}&udm=2`;
    window.open(urlGoogle, '_blank', 'noopener,noreferrer');
}
