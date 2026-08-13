const TCM_RULES = {
    'Than': { strictHuThuc: 'Thuc', fallbackBC: 'thuy khi' },
    'Can': { fallbackBC: 'khi' },
    'Ty': { fallbackBC: 'dam' },
    'Tam': { fallbackBC: 'huyet u' },
    'Phe': { fallbackBC: 'dam' },
    'Vi': { fallbackBC: 'nhiet' },
    'Dom': { fallbackBC: 'thap nhiet' },
    'Dai_Truong': { fallbackBC: 'thap nhiet' },
    'Tieu_Truong': { fallbackBC: 'thap nhiet' },
    'Bang_Quang': { fallbackBC: 'thap nhiet' },
    'Tam_Tieu': { fallbackBC: 'thap nhiet' }
};

const debounceSearchLuanTri = debounce(searchLuanTri, 100);

// Quản lý bật/tắt Chế độ Ôn Tập tổng quát
function startQuizMode() {
    if (typeof database === 'undefined' || !database) return;
    
    // 1. Cập nhật State đồng bộ
    AppState.quizActive = true;
    AppState.isQuizLT = true; // Đồng bộ cờ mờ thẻ Luận Trị
    AppState.aiHcActive = false;
    AppState.aiBtActive = false;
    
    // 2. Tắt AI Backup checkbox
    const aiCheck = document.getElementById('ai-backup-luantri');
    if (aiCheck) {
        aiCheck.checked = false;
        if (aiCheck.parentElement) {
            aiCheck.parentElement.className = 'px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer bg-stone-900 text-amber-400 border border-stone-800 hover:border-amber-500/60 select-none';
        }
    }

    // 3. Đổi giao diện Action Bar
    document.getElementById('normal-mode-actions')?.classList.add('hidden');
    document.getElementById('quiz-mode-actions')?.classList.remove('hidden');

    // 4. Cập nhật nút Thoát
    const btnQuiz = document.getElementById('btn-toggle-quiz');
    if (btnQuiz) {
        btnQuiz.onclick = stopQuizMode;
        btnQuiz.className = "px-3 py-1 bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 font-bold rounded-lg text-xs flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap";
        btnQuiz.innerHTML = `<i class="fa-solid fa-xmark text-[11px]"></i> Thoát`;
    }

    loadRandomCase();
}

function stopQuizMode() {
    // 1. Cập nhật State
    AppState.quizActive = false;
    AppState.isQuizLT = false;

    // 2. Phục hồi giao diện Action Bar
    document.getElementById('quiz-mode-actions')?.classList.add('hidden');
    document.getElementById('normal-mode-actions')?.classList.remove('hidden');

    // 3. Cập nhật nút Ôn Tập
    const btnQuiz = document.getElementById('btn-toggle-quiz');
    if (btnQuiz) {
        btnQuiz.onclick = startQuizMode;
        btnQuiz.className = "px-3 py-1 bg-stone-800 hover:bg-stone-700 text-amber-500 border border-stone-700 font-bold rounded-lg text-xs flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap";
        btnQuiz.innerHTML = `<i class="fa-solid fa-graduation-cap"></i> Ôn tập`;
    }

    // 4. Reset thuộc tính mờ/lật đáp án trên các Card
    ['hoi-chung', 'phap-dieu-tri', 'bai-thuoc', 'chi-tiet-bai-thuoc'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.classList.remove('blur-sm', 'blur-md', 'select-none', 'cursor-pointer');
            el.onclick = null;
        }
    });

    ['lt-card-hc', 'lt-card-pdt', 'lt-card-bt'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            delete el.dataset.revealed;
            el.classList.remove('blur-md', 'cursor-pointer');
            el.title = "";
            el.onclick = null;
        }
    });

    updateLuanTri();
}

function loadRandomCase() {
    if (!AppState.quizActive || typeof database === 'undefined' || !database) return;
    const keys = Object.keys(database);
    if (keys.length === 0) return;
    
    // 1. Lấy ngẫu nhiên một ca trong CSDL
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const data = database[randomKey];
    if (!data) return;

    // 2. Tự động đồng bộ các ô chọn Tam Trục theo thông tin của ca đó
    if (typeof syncSelectsWithItem === 'function') {
        syncSelectsWithItem(data);
    }

    // 3. Đưa qua renderDetailLuanTri để vẽ Card có ranh giới chuẩn & Lật mờ độc lập 100%
    renderDetailLuanTri(data);
}

function moCheDoOnTap() {
    switchTab('tracnghiem');
}

function moOnTapLuanTri() {
    const catSelect = document.getElementById('quiz-category');
    if (catSelect) {
        catSelect.value = 'luantri';
    }
    switchTab('tracnghiem');
    batDauTracNghiem();
}

function toggleQuizLuanTri(btnEl) {
    AppState.isQuizLT = !AppState.isQuizLT;
    const btn = btnEl || document.querySelector('button[onclick*="toggleQuizLuanTri"]');
    if (btn) {
        if (AppState.isQuizLT) {
            btn.className = "w-full px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-lg text-xs flex items-center justify-center gap-2 transition-all flex-shrink-0 shadow-lg shadow-amber-900/50 cursor-pointer";
        } else {
            btn.className = "w-full px-4 py-2 bg-stone-800 hover:bg-stone-700 text-amber-500 border border-stone-700 font-bold rounded-lg text-xs flex items-center justify-center gap-2 transition-all flex-shrink-0 cursor-pointer";
        }
    }
    
    // Gọi lại updateLuanTri để renderDetailLuanTri tự áp dụng hiệu ứng mờ chuẩn xác
    updateLuanTri();
}

function getItemTamTruc(item) {
    if (!item) return { tp: '', hn: '', ht: '', bc: '' };
    const pl = Array.isArray(item.phanloai) ? item.phanloai : [];
    const title = removeAccents(item.hc || '');
    
    let pTP = removeAccents(pl[0] || title);
    let pHN = removeAccents(pl[1] || item.han_nhiet || title);
    let pHT = removeAccents(pl[2] || item.hu_thuc || title);
    let pBC = removeAccents(pl[3] || title);

    const mapTP = { 
        'tam tieu': 'Tam_Tieu', 'dai truong': 'Dai_Truong', 'tieu truong': 'Tieu_Truong', 
        'bang quang': 'Bang_Quang', 'can': 'Can', 'gan': 'Can', 'tam': 'Tam', 'tim': 'Tam', 
        'ty': 'Ty', 'tieu hoa': 'Ty', 'phe': 'Phe', 'phoi': 'Phe', 'than': 'Than', 
        'noi tiet': 'Than', 'dom': 'Dom', 'mat': 'Dom', 'vi': 'Vi', 'da day': 'Vi' 
    };
    const mapHN = { 'hiep tap': 'Han nhiet hiep tap', 'nhiet': 'Nhiet', 'hoa': 'Nhiet', 'han': 'Han', 'lanh': 'Han', 'binh': 'Binh' };
    const mapHT = { 'hiep tap': 'Hu thuc hiep tap', 'thuc': 'Thuc', 'hu': 'Hu', 'suy': 'Hu' };
    const mapBC = { 'thap nhiet': 'thap nhiet', 'thuy khi': 'thuy khi', 'thuy thung': 'thuy khi', 'khi': 'khi', 'uat': 'khi', 'tre': 'khi', 'huyet': 'huyet u', 'u': 'huyet u', 'dam': 'dam', 'thap': 'dam', 'hoa': 'hoa', 'nhiet': 'nhiet' };

    const getMatch = (str, map, def) => {
        const foundKey = Object.keys(map).find(k => str.includes(k));
        return foundKey ? map[foundKey] : def;
    };

    let resolvedTP = getMatch(pTP, mapTP, '');
    let resolvedHN = getMatch(pHN, mapHN, 'Binh');
    let resolvedHT = getMatch(pHT, mapHT, 'Thuc');
    let resolvedBC = getMatch(pBC, mapBC, '');

    if (TCM_RULES[resolvedTP]) {
        const rule = TCM_RULES[resolvedTP];
        if (rule.strictHuThuc && resolvedHT === rule.strictHuThuc) {
            if (!resolvedBC) {
                if (title.includes('thuy') || title.includes('thung')) resolvedBC = 'thuy khi';
                else if (title.includes('thap') || title.includes('nhiet')) resolvedBC = 'thap nhiet';
                else if (title.includes('huyet') || title.includes('u')) resolvedBC = 'huyet u';
                else resolvedBC = rule.fallbackBC;
            }
        } else if (resolvedHT === 'Thuc' && !resolvedBC) {
            if (title.includes('hoa') || title.includes('duong')) resolvedBC = 'hoa';
            else if (title.includes('thap') || title.includes('dam')) resolvedBC = 'dam';
            else if (title.includes('khi') || title.includes('uat')) resolvedBC = 'khi';
            else if (title.includes('nhiet')) resolvedBC = 'nhiet';
            else resolvedBC = rule.fallbackBC;
        }
    }

    return { tp: resolvedTP, hn: resolvedHN, ht: resolvedHT, bc: resolvedBC };
}

function checkMatchFilter(item, tp, hn, ht, bc) {
    const info = getItemTamTruc(item);
    
    let matchTP = true;
    if (tp && tp !== "" && !removeAccents(tp).includes('tat ca') && !tp.includes('--')) {
        const normTP = removeAccents(tp);
        let targetTP = '';
        if (normTP.includes('than') || normTP.includes('noi tiet')) targetTP = 'than';
        else if (normTP.includes('phe') || normTP.includes('phoi')) targetTP = 'phe';
        else if (normTP.includes('can') || normTP.includes('gan')) targetTP = 'can';
        else if (normTP.includes('tam') || normTP.includes('tim')) targetTP = 'tam';
        else if (normTP.includes('ty') || normTP.includes('tieu hoa')) targetTP = 'ty';
        else if (normTP.includes('vi') || normTP.includes('da day')) targetTP = 'vi';
        else if (normTP.includes('dom') || normTP.includes('mat')) targetTP = 'dom';
        else if (normTP.includes('tam tieu')) targetTP = 'tam_tieu';
        else if (normTP.includes('dai truong')) targetTP = 'dai_truong';
        else if (normTP.includes('tieu truong')) targetTP = 'tieu_truong';
        else if (normTP.includes('bang quang')) targetTP = 'bang_quang';
        else targetTP = normTP;

        const cleanTargetTP = targetTP.replace(/[_]/g, '').split(' ')[0];
        const rawItemText = removeAccents((item.hc || '') + ' ' + (Array.isArray(item.phanloai) ? item.phanloai.join(' ') : ''));
        const normInfoTP = removeAccents(info.tp).toLowerCase().replace(/[_]/g, '');

        matchTP = rawItemText.includes(cleanTargetTP) || normInfoTP.includes(cleanTargetTP);
    }

    let matchHN = true;
    if (hn && hn !== "" && !removeAccents(hn).includes('tat ca') && !hn.includes('--')) {
        const normHN = removeAccents(hn);
        const normInfoHN = removeAccents(info.hn);
        matchHN = normInfoHN !== "" && normInfoHN.includes(normHN);
    }

    let matchHT = true;
    if (ht && ht !== "" && !removeAccents(ht).includes('tat ca') && !ht.includes('--')) {
        const normHT = removeAccents(ht);
        const normInfoHT = removeAccents(info.hu_thuc || info.ht || ''); 
        matchHT = normInfoHT !== "" && normInfoHT.includes(normHT);
    }

    let matchBC = true;
    if (bc && bc !== "" && !removeAccents(bc).includes('tat ca') && !bc.includes('--')) {
        const normBC = removeAccents(bc);
        const normInfoBC = removeAccents(info.bc);
        matchBC = normInfoBC !== "" && normInfoBC.includes(normBC);
    }

    return matchTP && matchHN && matchHT && matchBC;
}

async function chuyenQuaLuanTriVaTim(keyword) {
    if (!keyword) return;
    await switchTab('luantri');
    
    ['tang-phu', 'han-nhiet', 'hu-thuc', 'benh-co'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.selectedIndex = 0;
    });

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.value = keyword;
        
        // Đặt forceExact = thành false để hệ thống phân rã và tìm kiếm theo từng từ ngữ (tokens)
        updateLuanTri(keyword, false, false);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateLuanTri(query = "", isEnter = false, forceExact = false) {
    const searchInputVal = getVal('search-input').trim();
    const dropdown = document.getElementById('search-dropdown');
    const isDropdownOpen = dropdown && !dropdown.classList.contains('hidden');

    // NẾU CÓ TỪ KHÓA TÌM KIẾM HOẶC DROPDOWN ĐANG MỞ: Tự động gọi lại searchLuanTri
    // để bộ lọc Tam Trục đóng vai trò làm khóa phụ lọc tức thì danh sách gợi ý Dropdown
    if ((searchInputVal !== "" || isDropdownOpen) && !query) {
        searchLuanTri(isEnter);
        return;
    }

    const tp = getFilterVal('tang-phu');
    const hn = getFilterVal('han-nhiet');
    const ht = getFilterVal('hu-thuc');
    const bc = getFilterVal('benh-co');
    const activeQuery = query || searchInputVal.toLowerCase();
    
    let bestMatchData = null;
    let maxScore = -1;

    for (let key in database) {
        const item = database[key];
        if (!item) continue;
        if (!checkMatchFilter(item, tp, hn, ht, bc)) continue;

        // Sử dụng hàm chấm điểm chung với trường tiêu đề chính là 'hc'
        const score = tinhDiemKhopTongQuat(item, activeQuery, 'hc');

        if (score > maxScore && score > 0) {
            maxScore = score;
            bestMatchData = item;
        }
    }

    renderDetailLuanTri(bestMatchData, activeQuery, isEnter);
}

function renderDetailLuanTri(data, query = "", isEnter = false) {
    const pdfArea = document.getElementById('pdf-area');
    
    if (!document.getElementById('hoi-chung') && pdfArea) {
        pdfArea.innerHTML = ORIGINAL_PDF_AREA_HTML;
    }

    const hcEl = document.getElementById('hoi-chung');
    const pdtEl = document.getElementById('phap-dieu-tri');
    const btEl = document.getElementById('bai-thuoc');
    const ul = document.getElementById('trieu-chung');
    const divBt = document.getElementById('chi-tiet-bai-thuoc');
    
    let warningContainer = document.getElementById('tuong-ky-warning');
    if (!warningContainer && divBt && divBt.parentNode) {
        warningContainer = document.createElement('div');
        warningContainer.id = 'tuong-ky-warning';
        divBt.parentNode.appendChild(warningContainer);
    }

    const btnHc = document.getElementById('ai-toggle-hc');
    if (btnHc) {
        btnHc.className = `px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1 transition-all shadow cursor-pointer ${AppState.aiHcActive ? 'bg-amber-600 text-white shadow-amber-900/50' : 'bg-stone-900/90 text-amber-400 border border-stone-800 hover:border-amber-500/60'}`;
    }

    const btnBt = document.getElementById('ai-toggle-bt');
    if (btnBt) {
        btnBt.className = `px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1 transition-all shadow cursor-pointer ${AppState.aiBtActive ? 'bg-amber-600 text-white shadow-amber-900/50' : 'bg-stone-900/90 text-amber-400 border border-stone-800 hover:border-amber-500/60'}`;
    }

    if (data) {
        if (hcEl) hcEl.innerHTML = highlightText(data.hc || "Chưa rõ hội chứng", query);
        if (pdtEl) pdtEl.innerText = data.pdt || "Chưa có pháp trị";
        if (btEl) btEl.innerText = data.bt || "Đối chứng nghiệm phương";
        
        if (ul) {
            ul.innerHTML = "";
            if (data.tc && Array.isArray(data.tc)) { 
                const frag = document.createDocumentFragment();
                data.tc.forEach(t => { 
                    let li = document.createElement('li'); 
                    li.innerHTML = highlightText(t, query); 
                    frag.appendChild(li); 
                }); 
                ul.appendChild(frag);
            }
        }

        if (divBt) {
            divBt.innerHTML = "";
            if (data.tpbt && Array.isArray(data.tpbt)) {
                const frag = document.createDocumentFragment();
                data.tpbt.forEach(v => {
                    let btn = document.createElement('button');
                    btn.className = "px-2.5 py-1 text-xs bg-stone-800 text-amber-400 border border-stone-700 rounded transition-all font-medium";
                    btn.innerHTML = `<i class="fa-solid fa-leaf text-[10px] mr-1 text-emerald-500"></i>${highlightText(v, query)}`;
                    btn.onclick = () => xemDuocLieu(v); 
                    frag.appendChild(btn);
                });
                divBt.appendChild(frag);
            }
        }

        if (warningContainer) {
            if (data.tpbt && Array.isArray(data.tpbt)) {
                const listCanhBao = kiemTraTuongKy(data.tpbt);
                if (listCanhBao.length > 0) {
                    warningContainer.innerHTML = `
                        <div class="mt-3 p-3 bg-red-950/40 border border-red-800 rounded-lg text-xs space-y-1">
                            <div class="text-red-400 font-bold flex items-center gap-1.5 uppercase">
                                <i class="fa-solid fa-triangle-exclamation"></i> Cảnh báo tương kỵ lâm sàng:
                            </div>
                            <ul class="list-disc pl-5 text-red-300 font-medium">
                                ${listCanhBao.map(cb => `<li>Phát hiện cặp vị thuốc xung khắc: <strong>${escapeHTML(cb)}</strong></li>`).join('')}
                            </ul>
                        </div>
                    `;
                } else {
                    warningContainer.innerHTML = "";
                }
            } else {
                warningContainer.innerHTML = "";
            }
        }

        if (AppState.aiHcActive && data.hc) {
            fetchAIHcDesc(data.hc);
        } else {
            const aiHcEl = document.getElementById('ai-hc-desc');
            if (aiHcEl) {
                aiHcEl.classList.add('hidden');
                aiHcEl.innerHTML = '';
            }
        }

        if (AppState.aiBtActive && data.bt) {
            fetchAIBtDesc(data.bt);
        } else {
            const aiBtEl = document.getElementById('ai-bt-desc');
            if (aiBtEl) {
                aiBtEl.classList.add('hidden');
                aiBtEl.innerHTML = '';
            }
        }

    } else {
        // Nếu không tìm thấy và người dùng có nhấn Enter -> Tự động kích hoạt AI Backup
        if (query && isEnter) {
            fetchAIBackupResult(query, 'Biện chứng Luận Trị YHCT', pdfArea);
            return;
        }            

        const msg = (query && isEnter)
            ? `<i class='fa-solid fa-paper-plane text-[10px]'></i> Đã ghi nhận từ khóa "${escapeHTML(query)}".`
            : (query ? `<i class='fa-solid fa-keyboard text-[10px]'></i> Nhấn <kbd class="px-1 py-0.5 bg-stone-800 border border-stone-700 rounded text-amber-400 font-mono">Enter</kbd> để tìm với AI.` : '');

        if (hcEl) hcEl.innerHTML = "<span class='text-stone-500 font-normal text-base'><i class='fa-solid fa-circle-exclamation mr-1 text-amber-500'></i>Không tìm thấy hội chứng phù hợp</span>";
        if (pdtEl) pdtEl.innerText = "---";
        if (btEl) btEl.innerText = "---";
        if (ul) ul.innerHTML = `<li class='text-amber-500/80 italic text-xs col-span-full flex items-center gap-1.5'>${msg}</li>`;
        if (divBt) divBt.innerHTML = "";
        if (warningContainer) warningContainer.innerHTML = "";
    }

    // --- CHE MỜ ĐÁP ÁN & CHẶN CHUYỂN TAB KHI CHƯA MỞ MỜ ---
    const isQuizMode = AppState.quizActive || AppState.isQuizLT;
    
    const quizPairs = [
        ['lt-card-hc', 'hoi-chung'],
        ['lt-card-pdt', 'phap-dieu-tri'],
        ['lt-card-bt', 'bai-thuoc']
    ];

    quizPairs.forEach(([cardId, contentId]) => {
        const cardEl = document.getElementById(cardId);
        const contentEl = document.getElementById(contentId);
        if (!cardEl || !contentEl) return;

        cardEl.classList.remove('blur-md', 'cursor-pointer');
        cardEl.onclick = null;

        if (isQuizMode && data) {
            contentEl.classList.add('blur-md', 'transition-all', 'duration-300', 'cursor-pointer', 'select-none');
            contentEl.title = "Bấm để mở đáp án";

            contentEl.onclick = (e) => {
                e.stopPropagation();
                contentEl.classList.remove('blur-md', 'cursor-pointer', 'select-none');
                contentEl.title = "";

                // Đồng thời mở mờ phần thành phần bài thuốc nếu bấm vào tên bài thuốc
                if (cardId === 'lt-card-bt') {
                    const chiTietBT = document.getElementById('chi-tiet-bai-thuoc');
                    if (chiTietBT) chiTietBT.classList.remove('blur-md', 'select-none', 'pointer-events-none');
                }
            };

            // Làm mờ và tạm thời khóa click chuyển tab trên phần thành phần bài thuốc
            if (cardId === 'lt-card-bt') {
                const chiTietBT = document.getElementById('chi-tiet-bai-thuoc');
                if (chiTietBT) {
                    chiTietBT.classList.add('blur-md', 'transition-all', 'duration-300', 'select-none', 'pointer-events-none');
                    
                    // Nếu người dùng bấm trực tiếp vào vùng thành phần mờ -> Chỉ lật mờ, không mở tab Dược liệu
                    const parentBox = chiTietBT.parentElement;
                    if (parentBox) {
                        parentBox.onclick = (e) => {
                            if (chiTietBT.classList.contains('blur-md')) {
                                e.stopPropagation();
                                chiTietBT.classList.remove('blur-md', 'select-none', 'pointer-events-none');
                                if (contentEl) contentEl.classList.remove('blur-md', 'cursor-pointer', 'select-none');
                            }
                        };
                    }
                }
            }
        } else {
            contentEl.classList.remove('blur-md', 'cursor-pointer', 'select-none');
            contentEl.title = "";
            contentEl.onclick = null;

            if (cardId === 'lt-card-bt') {
                const chiTietBT = document.getElementById('chi-tiet-bai-thuoc');
                if (chiTietBT) chiTietBT.classList.remove('blur-md', 'select-none', 'pointer-events-none');
            }
        }
    });
}

function setDropdownSpacer(show) {
    let spacer = document.getElementById('dropdown-spacer');
    const searchInput = document.getElementById('search-input');
    if (!spacer && searchInput) {
        const searchWrapper = searchInput.closest('.relative') || searchInput.parentElement;
        if (searchWrapper && searchWrapper.parentElement) {
            spacer = document.createElement('div');
            spacer.id = 'dropdown-spacer';
            spacer.style.transition = 'height 0.15s ease';
            searchWrapper.parentElement.insertBefore(spacer, searchWrapper.nextSibling);
        }
    }
    if (spacer) {
        // Thu gọn chiều cao khoảng trống vừa đủ để không đè nát viewport điện thoại
        spacer.style.height = show ? '180px' : '0px';
    }

    const dropdown = document.getElementById('search-dropdown');
    if (dropdown) {
        dropdown.style.zIndex = '99999';
        dropdown.style.position = 'absolute';
        dropdown.style.width = '100%';
    }
}

function searchLuanTri(isEnter = false) {
    const input = document.getElementById('search-input');
    const dropdown = document.getElementById('search-dropdown');
    const queryStr = (input ? input.value : '').toLowerCase().trim();
    
    const cleanQueryStr = queryStr.replace(/[,\.;:?!()\[\]{}]/g, ' ');
    const queryWords = cleanQueryStr ? cleanQueryStr.split(/\s+/).filter(Boolean) : [];

    const tp = getFilterVal('tang-phu');
    const hn = getFilterVal('han-nhiet');
    const ht = getFilterVal('hu-thuc');
    const bc = getFilterVal('benh-co');

    const hasTamTrucFilter = (tp !== "") || (hn !== "") || (ht !== "") || (bc !== "");

    if (queryWords.length === 0 && !hasTamTrucFilter) {
        if (dropdown) dropdown.classList.add('hidden');
        setDropdownSpacer(false);
        updateLuanTri();
        return;
    }

    const matches = [];
    for (let key in database) {
        const item = database[key];
        if (!item) continue;
        if (!checkMatchFilter(item, tp, hn, ht, bc)) continue;

        let matchCount = 0;
        if (queryWords.length > 0) {
            const hc = (item.hc || '').toLowerCase();
            const tc = (item.tc || []).join(' ').toLowerCase();
            const bt = (item.bt || '').toLowerCase();
            const tpbt = (item.tpbt || []).join(' ').toLowerCase();
            const fullText = `${hc} ${tc} ${bt} ${tpbt}`;

            queryWords.forEach(word => {
                if (fullText.includes(word)) {
                    matchCount++;
                    if (hc.includes(word)) matchCount += 0.5;
                }
            });

            if (matchCount === 0) continue;
            matches.push({ key, ...item, score: matchCount });
        } else {
            matches.push({ key, ...item, score: 1 });
        }
    }

    matches.sort((a, b) => b.score - a.score);
    const topMatches = matches.slice(0, 30);

    if (dropdown) {
        if (topMatches.length > 0) {
            dropdown.innerHTML = topMatches.map(m => `
                <div onclick="selectSearchResult('${m.key}')" class="p-2.5 hover:bg-stone-800 border-b border-stone-800/80 cursor-pointer transition-colors text-xs text-left">
                    <div class="font-bold text-amber-400">${highlightText(m.hc, queryStr)}</div>
                    <div class="text-stone-400 text-[11px] truncate mt-0.5">${highlightText(m.tc ? m.tc.join(', ') : '', queryStr)}</div>
                </div>
            `).join('');
            dropdown.classList.remove('hidden');
            setDropdownSpacer(true);
        } else {
            dropdown.innerHTML = `<div class="p-3 text-xs text-stone-500 text-center">Không tìm thấy hội chứng phù hợp</div>`;
            dropdown.classList.remove('hidden');
            setDropdownSpacer(true);
        }
    }

    if (isEnter && topMatches.length > 0) {
        if (dropdown) dropdown.classList.add('hidden');
        setDropdownSpacer(false);
        selectSearchResult(topMatches[0].key, false);
    } else {
        updateLuanTri(queryStr, isEnter);
    }
}

function selectSearchResult(key, hideDropdown = true) {
    const query = getVal('search-input').trim();
    if (typeof database === 'undefined' || !database || !database[key]) return;

    const item = database[key];
    renderDetailLuanTri(item, query);
    
    if (typeof syncSelectsWithItem === 'function') {
        syncSelectsWithItem(item);
    }

    const dropdown = document.getElementById('search-dropdown');
    if (dropdown) dropdown.classList.add('hidden');
    
    // Đảm bảo thu gọn spacer ngay lập tức khi đã chọn item
    setDropdownSpacer(false);

    // TỰ ĐỘNG THU BÀN PHÍM ẢO TRÊN ĐIỆN THOẠI ĐỂ TRÁNH TRÈO MÀN HÌNH
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
        document.activeElement.blur();
    }
}

function syncSelectsWithItem(item) {
    if (!item || !Array.isArray(item.phanloai)) return;
    const pl = item.phanloai;

    const setSelect = (selectId, val) => {
        const el = document.getElementById(selectId);
        if (!el || !val) return;
        const target = removeAccents(val);

        for (let i = 0; i < el.options.length; i++) {
            const optVal = removeAccents(el.options[i].value);
            const optTxt = removeAccents(el.options[i].text);
            if (!optVal || optVal.includes('tat ca')) continue;
            if (optVal === target || optTxt === target) {
                el.selectedIndex = i;
                return;
            }
        }

        for (let i = 0; i < el.options.length; i++) {
            const optVal = removeAccents(el.options[i].value);
            if (!optVal || optVal.includes('tat ca')) continue;
            if (target.includes(optVal) || optVal.includes(target)) {
                el.selectedIndex = i;
                return;
            }
        }
    };

    setSelect('tang-phu', pl[0]);
    setSelect('han-nhiet', pl[1]);
    setSelect('hu-thuc', pl[2]);
    setSelect('benh-co', pl[3]);
}

function huyBoChuanDoan() {
    updateLuanTri();
}

async function fetchAIHcDesc(hcName) {
    const aiHcEl = document.getElementById('ai-hc-desc');
    if (!aiHcEl || !hcName || hcName === "---") return;

    const cacheKey = 'ai_hc_' + removeAccents(hcName).replace(/\s+/g, '_');
    
    // 1. Kiểm tra Cache TTL (Nếu còn hạn 30 ngày -> Lấy dùng ngay, không gọi AI)
    const cachedHTML = getCacheWithTTL(cacheKey); 
    if (cachedHTML) {
        aiHcEl.classList.remove('hidden');
        aiHcEl.innerHTML = cachedHTML;
        return;
    }

    aiHcEl.classList.remove('hidden');
    aiHcEl.innerHTML = `<div class="text-amber-400/80 italic flex items-center gap-1.5"><i class="fa-solid fa-brain fa-spin"></i> AI đang phân tích...</div>`;

    try {
        const prompt = `Phân tích súc tích (<150 từ, tiếng Việt, không chữ Hán) về cơ chế, nguyên nhân, biểu hiện của hội chứng YHCT: "${hcName}".`;
        const res = await fetch(getApiEndpoint(), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt, source: 'luantrihc', max_tokens: 250 })
        });
        const data = await res.json();

        if (res.ok && data.reply) {
            const htmlResult = `
                <div class="font-bold text-amber-400 mb-1 flex items-center gap-1"><i class="fa-solid fa-robot"></i> Mô tả chi tiết hội chứng:</div>
                <div class="space-y-1">${formatAIMessage(data.reply)}</div>
            `;
            
            // 2. Lưu kết quả vào Cache với hạn sống 30 ngày
            setCacheWithTTL(cacheKey, htmlResult, 99); 
            
            aiHcEl.innerHTML = htmlResult;
        } else {
            let errorMsg = data.error || 'Không nhận được phản hồi từ AI.';
            aiHcEl.innerHTML = `<div class="text-amber-400/90 bg-amber-950/40 p-2.5 rounded border border-amber-800/60 text-xs">${escapeHTML(errorMsg)}</div>`;
        }
    } catch (err) {
        aiHcEl.innerHTML = `<div class="text-red-400 font-mono text-[11px] p-2 bg-red-950/50 border border-red-800 rounded">⚠️ Lỗi kết nối.</div>`;
    }
}

let aiBtAbortController = null;

async function fetchAIBtDesc(btName) {
    const aiBtEl = document.getElementById('ai-bt-desc');
    if (!aiBtEl || !btName || btName === "---" || btName === "Đối chứng nghiệm phương") return;

    const cacheKey = 'ai_bt_' + removeAccents(btName).replace(/\s+/g, '_');
    const cachedHTML = getCacheWithTTL(cacheKey); 
    if (cachedHTML) {
        aiBtEl.classList.remove('hidden');
        aiBtEl.innerHTML = cachedHTML;
        return;
    }

    if (aiBtAbortController) aiBtAbortController.abort();
    aiBtAbortController = new AbortController();

    aiBtEl.classList.remove('hidden');
    aiBtEl.innerHTML = `<div class="text-amber-400/80 italic flex items-center gap-1.5"><i class="fa-solid fa-brain fa-spin"></i> AI đang tra cứu...</div>`;

    try {
        const prompt = `Phân tích súc tích (<150 từ, tiếng Việt, không chữ Hán) về nguồn gốc, xuất xứ, đặc điểm nổi bật của bài thuốc YHCT: "${btName}".`;
        const res = await fetch(getApiEndpoint(), {
            method: 'POST',
            signal: aiBtAbortController.signal,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt, source: 'luantribt', max_tokens: 250 })
        });
        const data = await res.json();

        if (res.ok && data.reply) {
            const htmlResult = `
                <div class="font-bold text-amber-400 mb-1 flex items-center gap-1"><i class="fa-solid fa-robot"></i> Nguồn gốc & đặc điểm cổ phương:</div>
                <div class="space-y-1">${formatAIMessage(data.reply)}</div>
            `;
            setCacheWithTTL(cacheKey, htmlResult, 99); 
            aiBtEl.innerHTML = htmlResult;
        }
    } catch (err) {
        if (err.name !== 'AbortError') {
            aiBtEl.innerHTML = `<div class="text-red-400 font-mono text-[11px] p-2 bg-red-950/50 border border-red-800 rounded">⚠️ Lỗi kết nối.</div>`;
        }
    }
}

function toggleAiFeature(type) {
    if (type === 'hc') {
        AppState.aiHcActive = !AppState.aiHcActive;
        const btnHc = document.getElementById('ai-toggle-hc');
        const aiHcEl = document.getElementById('ai-hc-desc');
        
        if (btnHc) {
            btnHc.className = `px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1 transition-all shadow cursor-pointer ${AppState.aiHcActive ? 'bg-amber-600 text-white shadow-amber-900/50' : 'bg-stone-900/90 text-amber-400 border border-stone-800 hover:border-amber-500/60'}`;
        }
        
        if (AppState.aiHcActive) {
            const hcName = document.getElementById('hoi-chung')?.innerText;
            fetchAIHcDesc(hcName);
        } else if (aiHcEl) {
            aiHcEl.classList.add('hidden');
        }
    } else if (type === 'bt') {
        AppState.aiBtActive = !AppState.aiBtActive;
        const btnBt = document.getElementById('ai-toggle-bt');
        const aiBtEl = document.getElementById('ai-bt-desc');
        
        if (btnBt) {
            btnBt.className = `px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1 transition-all shadow cursor-pointer ${AppState.aiBtActive ? 'bg-amber-600 text-white shadow-amber-900/50' : 'bg-stone-900/90 text-amber-400 border border-stone-800 hover:border-amber-500/60'}`;
        }
        
        if (AppState.aiBtActive) {
            const btName = document.getElementById('bai-thuoc')?.innerText;
            fetchAIBtDesc(btName);
        } else if (aiBtEl) {
            aiBtEl.classList.add('hidden');
        }
    }
}

// --- XỬ LÝ HẠ BÀN PHÍM VÀ ẨN DROPDOWN TÁCH BIỆT (ĐÃ SỬA LỖI TIMING ON MOBILE) ---
let wasSearchInputFocusedOnTouch = false;

// 1. Chốt trạng thái bàn phím NGAY LÚC VỪA CHẠM TAY VÀO MÀN HÌNH (Trước khi trình duyệt tự blur)
const handleTouchStartOutsideSearch = (e) => {
    const searchInput = document.getElementById('search-input');
    const dropdown = document.getElementById('search-dropdown');
    if (!searchInput || !dropdown) return;

    const searchWrapper = searchInput.closest('.relative') || searchInput.parentElement;
    const isInsideSearch = (searchWrapper && searchWrapper.contains(e.target));
    const isInsideDropdown = dropdown.contains(e.target);

    // Nếu chạm ra ngoài cả ô tìm kiếm lẫn dropdown
    if (!isInsideSearch && !isInsideDropdown) {
        // Ghi nhớ xem bàn phím có đang mở hay không
        wasSearchInputFocusedOnTouch = (document.activeElement === searchInput);
    } else {
        wasSearchInputFocusedOnTouch = false;
    }
};

// 2. Xử lý ẩn Dropdown dựa trên trạng thái đã chốt
const handleClickOutsideSearch = (e) => {
    const searchInput = document.getElementById('search-input');
    const dropdown = document.getElementById('search-dropdown');
    if (!searchInput || !dropdown) return;

    const searchWrapper = searchInput.closest('.relative') || searchInput.parentElement;
    const isInsideSearch = (searchWrapper && searchWrapper.contains(e.target));
    const isInsideDropdown = dropdown.contains(e.target);

    if (!isInsideSearch && !isInsideDropdown) {
        // Lần chạm này là để ẩn bàn phím -> GIỮ NGUYÊN DROPDOWN!
        if (wasSearchInputFocusedOnTouch) {
            wasSearchInputFocusedOnTouch = false;
            return;
        }

        // Bàn phím đã hạ sẵn từ trước -> Mới ẩn Dropdown
        if (!dropdown.classList.contains('hidden')) {
            dropdown.classList.add('hidden');
            setDropdownSpacer(false);
        }
    }
};

document.addEventListener('pointerdown', handleTouchStartOutsideSearch, { passive: true });
document.addEventListener('click', handleClickOutsideSearch);
