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

// 1. Khai báo biến toàn cục & Hàm xử lý Click Outside
let wasSearchInputFocusedOnTouch = false;

const handleTouchStartOutsideSearch = (e) => {
    const searchInput = document.getElementById('search-input');
    const dropdown = document.getElementById('search-dropdown');
    if (!searchInput || !dropdown) return;

    const searchWrapper = searchInput.closest('.relative') || searchInput.parentElement;
    const isInsideSearch = (searchWrapper && searchWrapper.contains(e.target));
    const isInsideDropdown = dropdown.contains(e.target);

    if (!isInsideSearch && !isInsideDropdown) {
        wasSearchInputFocusedOnTouch = (document.activeElement === searchInput);
    } else {
        wasSearchInputFocusedOnTouch = false;
    }
};

const handleClickOutsideSearch = (e) => {
    const searchInput = document.getElementById('search-input');
    const dropdown = document.getElementById('search-dropdown');
    if (!searchInput || !dropdown) return;

    const searchWrapper = searchInput.closest('.relative') || searchInput.parentElement;
    const isInsideSearch = (searchWrapper && searchWrapper.contains(e.target));
    const isInsideDropdown = dropdown.contains(e.target);

    const boLocTamTruc = document.getElementById('bo-loc-tam-truc');
    const isInsideTamTruc = boLocTamTruc && boLocTamTruc.contains(e.target);

    if (isInsideTamTruc) return;

    if (!isInsideSearch && !isInsideDropdown) {
        if (wasSearchInputFocusedOnTouch) {
            wasSearchInputFocusedOnTouch = false;
            return;
        }

        if (!dropdown.classList.contains('hidden')) {
            dropdown.classList.add('hidden');
            setDropdownSpacer(false);
            updateLuanTri(); // Ép cập nhật nhảy theo hội chứng khi đóng dropdown
        }
    }
};

// 2. Khai báo Debounce
let _debounceFn = null;
function debounceSearchLuanTri() {
    if (!_debounceFn && typeof debounce === 'function') {
        _debounceFn = debounce(searchLuanTri, 100);
    }
    if (_debounceFn) {
        _debounceFn();
    } else {
        searchLuanTri();
    }
}

// 3. Khởi tạo sự kiện Tam Trục (Linh hoạt giữa Dropdown và Nhảy hội chứng)
function initTamTrucListeners() {
    const filters = ['tang-phu', 'han-nhiet', 'hu-thuc', 'benh-co'];
    filters.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('change', () => {
                const input = document.getElementById('search-input');
                const dropdown = document.getElementById('search-dropdown');
                
                const queryVal = input ? input.value.trim() : '';
                const isDropdownVisible = dropdown && !dropdown.classList.contains('hidden');

                // Nếu đang gõ từ khóa HOẶC Dropdown đang hiển thị -> Tam trục làm Key phụ lọc Dropdown
                if (queryVal !== '' && isDropdownVisible) {
                    searchLuanTri();
                } else {
                    // Ngược lại (Không có từ khóa/Dropdown ẩn) -> Tam trục nhảy trực tiếp theo Hội chứng
                    updateLuanTri();
                }
            });
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTamTrucListeners);
} else {
    initTamTrucListeners();
}

// Quản lý bật/tắt Chế độ Ôn Tập
function startQuizMode() {
    if (typeof database === 'undefined' || !database) return;
    
    AppState.quizActive = true;
    AppState.isQuizLT = true;
    AppState.aiHcActive = false;
    AppState.aiBtActive = false;
    
    const aiCheck = document.getElementById('ai-backup-luantri');
    if (aiCheck) {
        aiCheck.checked = false;
        if (aiCheck.parentElement) {
            aiCheck.parentElement.className = 'px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer bg-stone-900 text-amber-400 border border-stone-800 hover:border-amber-500/60 select-none';
        }
    }

    document.getElementById('normal-mode-actions')?.classList.add('hidden');
    document.getElementById('quiz-mode-actions')?.classList.remove('hidden');

    const btnQuiz = document.getElementById('btn-toggle-quiz');
    if (btnQuiz) {
        btnQuiz.onclick = stopQuizMode;
        btnQuiz.className = "px-3 py-1 bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 font-bold rounded-lg text-xs flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap";
        btnQuiz.innerHTML = `<i class="fa-solid fa-xmark text-[11px]"></i> Thoát`;
    }

    loadRandomCase();
}

function stopQuizMode() {
    AppState.quizActive = false;
    AppState.isQuizLT = false;

    document.getElementById('quiz-mode-actions')?.classList.add('hidden');
    document.getElementById('normal-mode-actions')?.classList.remove('hidden');

    const btnQuiz = document.getElementById('btn-toggle-quiz');
    if (btnQuiz) {
        btnQuiz.onclick = startQuizMode;
        btnQuiz.className = "px-3 py-1 bg-stone-800 hover:bg-stone-700 text-amber-500 border border-stone-700 font-bold rounded-lg text-xs flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap";
        btnQuiz.innerHTML = `<i class="fa-solid fa-graduation-cap"></i> Ôn tập`;
    }

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
    
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const data = database[randomKey];
    if (!data) return;

    if (typeof syncSelectsWithItem === 'function') {
        syncSelectsWithItem(data);
    }

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
    updateLuanTri();
}

function getItemTamTruc(item) {
    if (!item) return { tp: '', hn: '', ht: '', bc: '' };
    const pl = Array.isArray(item.phanloai) ? item.phanloai : [];
    const title = typeof removeAccents === 'function' ? removeAccents(item.hc || '') : (item.hc || '').toLowerCase();
    
    let pTP = typeof removeAccents === 'function' ? removeAccents(pl[0] || title) : (pl[0] || title).toLowerCase();
    let pHN = typeof removeAccents === 'function' ? removeAccents(pl[1] || item.han_nhiet || title) : (pl[1] || item.han_nhiet || title).toLowerCase();
    let pHT = typeof removeAccents === 'function' ? removeAccents(pl[2] || item.hu_thuc || title) : (pl[2] || item.hu_thuc || title).toLowerCase();
    let pBC = typeof removeAccents === 'function' ? removeAccents(pl[3] || title) : (pl[3] || title).toLowerCase();

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
    
    resetTamTrucFilters();

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.value = keyword;
        updateLuanTri(keyword, false, false);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateLuanTri(query = "", isEnter = false, forceExact = false) {
    if (typeof database === 'undefined' || !database) return;

    const searchInputVal = typeof getVal === 'function' ? getVal('search-input').trim() : '';
    const activeQuery = query || searchInputVal.toLowerCase();
    
    const tp = typeof getFilterVal === 'function' ? getFilterVal('tang-phu') : '';
    const hn = typeof getFilterVal === 'function' ? getFilterVal('han-nhiet') : '';
    const ht = typeof getFilterVal === 'function' ? getFilterVal('hu-thuc') : '';
    const bc = typeof getFilterVal === 'function' ? getFilterVal('benh-co') : '';
    
    let bestMatchData = null;
    let maxScore = -1;

    for (let key in database) {
        const item = database[key];
        if (!item) continue;
        if (!checkMatchFilter(item, tp, hn, ht, bc)) continue;

        const score = (activeQuery && typeof tinhDiemKhopTongQuat === 'function') 
            ? tinhDiemKhopTongQuat(item, activeQuery, 'hc') 
            : 1;

        if (score > maxScore && score > 0) {
            maxScore = score;
            bestMatchData = item;
        }
    }

    renderDetailLuanTri(bestMatchData, activeQuery, isEnter);
}

function resetTamTrucFilters() {
    ['tang-phu', 'han-nhiet', 'hu-thuc', 'benh-co'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.selectedIndex = 0;
    });
}

function searchLuanTri(isEnter = false) {
    if (typeof database === 'undefined' || !database) return;

    const input = document.getElementById('search-input');
    const dropdown = document.getElementById('search-dropdown');
    const queryStr = (input ? input.value : '').toLowerCase().trim();
    
    // TRƯỜNG HỢP 1: Ô TÌM KIẾM TRỐNG -> ĐÓNG DROPDOWN & NHẢY THEO HỘI CHỨNG (DỰA TRÊN TAM TRỤC HIỆN TẠI)
    if (!queryStr) {
        if (dropdown) dropdown.classList.add('hidden');
        setDropdownSpacer(false);
        updateLuanTri(); // Kích hoạt nhảy theo hội chứng ngay lập tức
        return;
    }

    // TRƯỜNG HỢP 2: TỪ KHÓA BẮT ĐẦU XUẤT HIỆN -> RESET TAM TRỤC VỀ MẶC ĐỊNH LẦN ĐẦU MỞ DROPDOWN
    // (Kiểm tra nếu dropdown vừa chuyển từ trạng thái Ẩn sang Hiện)
    if (dropdown && dropdown.classList.contains('hidden')) {
        resetTamTrucFilters(); // Reset 4 ô select tam trục về giá trị mặc định
    }

    const tp = typeof getFilterVal === 'function' ? getFilterVal('tang-phu') : '';
    const hn = typeof getFilterVal === 'function' ? getFilterVal('han-nhiet') : '';
    const ht = typeof getFilterVal === 'function' ? getFilterVal('hu-thuc') : '';
    const bc = typeof getFilterVal === 'function' ? getFilterVal('benh-co') : '';

    const matches = [];
    for (let key in database) {
        const item = database[key];
        if (!item || !checkMatchFilter(item, tp, hn, ht, bc)) continue;

        const score = typeof tinhDiemKhopTongQuat === 'function' ? tinhDiemKhopTongQuat(item, queryStr, 'hc') : 1;
        if (score > 0) matches.push({ key, ...item, score });
    }

    matches.sort((a, b) => b.score - a.score);

    if (dropdown) {
        if (matches.length > 0) {
            dropdown.innerHTML = matches.slice(0, 30).map(m => `
                <div onclick="selectSearchResult('${m.key}')" class="p-2.5 hover:bg-stone-800 border-b border-stone-800/80 cursor-pointer transition-colors text-xs text-left">
                    <div class="font-bold text-amber-400">${typeof highlightText === 'function' ? highlightText(m.hc, queryStr) : m.hc}</div>
                    <div class="text-stone-400 text-[11px] truncate mt-0.5">${typeof highlightText === 'function' ? highlightText(m.tc ? m.tc.join(', ') : '', queryStr) : (m.tc ? m.tc.join(', ') : '')}</div>
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

    if (isEnter && matches.length > 0) {
        selectSearchResult(matches[0].key, true);
    } else {
        renderDetailLuanTri(matches.length > 0 ? matches[0] : null, queryStr, isEnter);
    }
}

function renderDetailLuanTri(data, query = "", isEnter = false) {
    const pdfArea = document.getElementById('pdf-area');
    
    if (!document.getElementById('hoi-chung') && pdfArea && typeof ORIGINAL_PDF_AREA_HTML !== 'undefined') {
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

    if (typeof AppState !== 'undefined') {
        const btnHc = document.getElementById('ai-toggle-hc');
        if (btnHc) {
            btnHc.className = `px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1 transition-all shadow cursor-pointer ${AppState.aiHcActive ? 'bg-amber-600 text-white shadow-amber-900/50' : 'bg-stone-900/90 text-amber-400 border border-stone-800 hover:border-amber-500/60'}`;
        }

        const btnBt = document.getElementById('ai-toggle-bt');
        if (btnBt) {
            btnBt.className = `px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1 transition-all shadow cursor-pointer ${AppState.aiBtActive ? 'bg-amber-600 text-white shadow-amber-900/50' : 'bg-stone-900/90 text-amber-400 border border-stone-800 hover:border-amber-500/60'}`;
        }
    }

    if (data) {
        if (hcEl) hcEl.innerHTML = typeof highlightText === 'function' ? highlightText(data.hc || "Chưa rõ hội chứng", query) : (data.hc || "Chưa rõ hội chứng");
        if (pdtEl) pdtEl.innerText = data.pdt || "Chưa có pháp trị";
        if (btEl) btEl.innerText = data.bt || "Đối chứng nghiệm phương";
        
        if (ul) {
            ul.innerHTML = "";
            if (data.tc && Array.isArray(data.tc)) { 
                const frag = document.createDocumentFragment();
                data.tc.forEach(t => { 
                    let li = document.createElement('li'); 
                    li.innerHTML = typeof highlightText === 'function' ? highlightText(t, query) : t; 
                    frag.appendChild(li); 
                }); 
                ul.appendChild(frag);
            }
        }

        if (divBt) {
            divBt.innerHTML = "";
            if (data.tpbt && Array.isArray(data.tpbt)) {
                window.currentActiveHerbs = [...data.tpbt];
                const frag = document.createDocumentFragment();
                data.tpbt.forEach(v => {
                    let btn = document.createElement('button');
                    btn.className = "px-2.5 py-1 text-xs bg-stone-800 text-amber-400 border border-stone-700 rounded transition-all font-medium";
                    btn.innerHTML = `<i class="fa-solid fa-leaf text-[10px] mr-1 text-emerald-500"></i>${typeof highlightText === 'function' ? highlightText(v, query) : v}`;
                    btn.onclick = () => typeof xemDuocLieu === 'function' && xemDuocLieu(v); 
                    frag.appendChild(btn);
                });
                divBt.appendChild(frag);
            }
        }
            if (warningContainer) {
            if (data.tpbt && Array.isArray(data.tpbt) && typeof kiemTraTuongKy === 'function') {
                const listCanhBao = kiemTraTuongKy(data.tpbt);
                if (listCanhBao.length > 0) {
                    warningContainer.innerHTML = `
                        <div class="mt-3 p-3 bg-red-950/40 border border-red-800 rounded-lg text-xs space-y-1">
                            <div class="text-red-400 font-bold flex items-center gap-1.5 uppercase">
                                <i class="fa-solid fa-triangle-exclamation"></i> Cảnh báo tương kỵ lâm sàng:
                            </div>
                            <ul class="list-disc pl-5 text-red-300 font-medium">
                                ${listCanhBao.map(cb => `<li>Phát hiện cặp vị thuốc xung khắc: <strong>${typeof escapeHTML === 'function' ? escapeHTML(cb) : cb}</strong></li>`).join('')}
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

        if (typeof AppState !== 'undefined' && AppState.aiHcActive && data.hc) {
            fetchAIHcDesc(data.hc);
        } else {
            const aiHcEl = document.getElementById('ai-hc-desc');
            if (aiHcEl) {
                aiHcEl.classList.add('hidden');
                aiHcEl.innerHTML = '';
            }
        }

        if (typeof AppState !== 'undefined' && AppState.aiBtActive && data.bt) {
            fetchAIBtDesc(data.bt);
        } else {
            const aiBtEl = document.getElementById('ai-bt-desc');
            if (aiBtEl) {
                aiBtEl.classList.add('hidden');
                aiBtEl.innerHTML = '';
            }
        }

    } else {
        if (query && isEnter && typeof fetchAIBackupResult === 'function') {
            fetchAIBackupResult(query, 'Biện chứng Luận Trị YHCT', pdfArea);
            return;
        }            

        const safeTxt = typeof escapeHTML === 'function' ? escapeHTML(query) : query;
        const msg = (query && isEnter)
            ? `<i class='fa-solid fa-paper-plane text-[10px]'></i> Đã ghi nhận từ khóa "${safeTxt}".`
            : (query ? `<i class='fa-solid fa-keyboard text-[10px]'></i> Nhấn <kbd class="px-1 py-0.5 bg-stone-800 border border-stone-700 rounded text-amber-400 font-mono">Enter</kbd> để tìm với AI.` : '');

        if (hcEl) hcEl.innerHTML = "<span class='text-stone-500 font-normal text-base'><i class='fa-solid fa-circle-exclamation mr-1 text-amber-500'></i>Không tìm thấy hội chứng phù hợp</span>";
        if (pdtEl) pdtEl.innerText = "---";
        if (btEl) btEl.innerText = "---";
        if (ul) ul.innerHTML = `<li class='text-amber-500/80 italic text-xs col-span-full flex items-center gap-1.5'>${msg}</li>`;
        if (divBt) divBt.innerHTML = "";
        if (warningContainer) warningContainer.innerHTML = "";
    }

    const isQuizMode = typeof AppState !== 'undefined' && (AppState.quizActive || AppState.isQuizLT);
    
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

                if (cardId === 'lt-card-bt') {
                    const chiTietBT = document.getElementById('chi-tiet-bai-thuoc');
                    if (chiTietBT) chiTietBT.classList.remove('blur-md', 'select-none', 'pointer-events-none');
                }
            };

            if (cardId === 'lt-card-bt') {
                const chiTietBT = document.getElementById('chi-tiet-bai-thuoc');
                if (chiTietBT) {
                    chiTietBT.classList.add('blur-md', 'transition-all', 'duration-300', 'select-none', 'pointer-events-none');
                    
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
        spacer.style.height = show ? '180px' : '0px';
    }

    const dropdown = document.getElementById('search-dropdown');
    if (dropdown) {
        dropdown.style.zIndex = '99999';
        dropdown.style.position = 'absolute';
        dropdown.style.width = '100%';
    }
}

function selectSearchResult(key, hideDropdown = true) {
    const query = typeof getVal === 'function' ? getVal('search-input').trim() : '';
    if (typeof database === 'undefined' || !database || !database[key]) return;

    const item = database[key];
    
    // Đồng bộ lại 4 ô select Tam Trục theo hội chứng vừa chọn
    if (typeof syncSelectsWithItem === 'function') {
        syncSelectsWithItem(item);
    }

    renderDetailLuanTri(item, query);

    const dropdown = document.getElementById('search-dropdown');
    if (dropdown) dropdown.classList.add('hidden');
    
    setDropdownSpacer(false);

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
        const target = typeof removeAccents === 'function' ? removeAccents(val) : val.toLowerCase();

        for (let i = 0; i < el.options.length; i++) {
            const optVal = typeof removeAccents === 'function' ? removeAccents(el.options[i].value) : el.options[i].value.toLowerCase();
            const optTxt = typeof removeAccents === 'function' ? removeAccents(el.options[i].text) : el.options[i].text.toLowerCase();
            if (!optVal || optVal.includes('tat ca')) continue;
            if (optVal === target || optTxt === target) {
                el.selectedIndex = i;
                return;
            }
        }

        for (let i = 0; i < el.options.length; i++) {
            const optVal = typeof removeAccents === 'function' ? removeAccents(el.options[i].value) : el.options[i].value.toLowerCase();
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

    const cacheKey = 'ai_hc_' + (typeof removeAccents === 'function' ? removeAccents(hcName) : hcName.toLowerCase()).replace(/\s+/g, '_');
    
    const cachedHTML = typeof getCacheWithTTL === 'function' ? getCacheWithTTL(cacheKey) : null; 
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
                <div class="space-y-1">${typeof formatAIMessage === 'function' ? formatAIMessage(data.reply) : data.reply}</div>
            `;
            
            if (typeof setCacheWithTTL === 'function') setCacheWithTTL(cacheKey, htmlResult, 99); 
            aiHcEl.innerHTML = htmlResult;
        } else {
            let errorMsg = data.error || 'Không nhận được phản hồi từ AI.';
            aiHcEl.innerHTML = `<div class="text-amber-400/90 bg-amber-950/40 p-2.5 rounded border border-amber-800/60 text-xs">${typeof escapeHTML === 'function' ? escapeHTML(errorMsg) : errorMsg}</div>`;
        }
    } catch (err) {
        aiHcEl.innerHTML = `<div class="text-red-400 font-mono text-[11px] p-2 bg-red-950/50 border border-red-800 rounded">⚠️ Lỗi kết nối.</div>`;
    }
}

let aiBtAbortController = null;

async function fetchAIBtDesc(btName) {
    const aiBtEl = document.getElementById('ai-bt-desc');
    if (!aiBtEl || !btName || btName === "---" || btName === "Đối chứng nghiệm phương") return;

    const cacheKey = 'ai_bt_' + (typeof removeAccents === 'function' ? removeAccents(btName) : btName.toLowerCase()).replace(/\s+/g, '_');
    const cachedHTML = typeof getCacheWithTTL === 'function' ? getCacheWithTTL(cacheKey) : null; 
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
                <div class="space-y-1">${typeof formatAIMessage === 'function' ? formatAIMessage(data.reply) : data.reply}</div>
            `;
            if (typeof setCacheWithTTL === 'function') setCacheWithTTL(cacheKey, htmlResult, 99); 
            aiBtEl.innerHTML = htmlResult;
        }
    } catch (err) {
        if (err.name !== 'AbortError') {
            aiBtEl.innerHTML = `<div class="text-red-400 font-mono text-[11px] p-2 bg-red-950/50 border border-red-800 rounded">⚠️ Lỗi kết nối.</div>`;
        }
    }
}

function toggleAiFeature(type) {
    if (typeof AppState === 'undefined') return;

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

// ========================================================
// 🟢 BỔ SUNG GIA GIẢM LIỀU LƯỢNG, THÊM BỚT & SỬA LIỀU KÊ
// ========================================================

// 1. Thuật toán tính hệ số điều chỉnh liều theo tuổi & thể trạng
function tinhHesoLieuLuong(tuoi, theTrang) {
    let heSo = 1.0; // Liều chuẩn người trưởng thành
    if (tuoi < 3) heSo = 0.25;
    else if (tuoi <= 7) heSo = 0.4;
    else if (tuoi <= 12) heSo = 0.6;
    else if (tuoi <= 16) heSo = 0.8;
    else if (tuoi >= 65) heSo = 0.8;

    if (theTrang === 'pntt') heSo *= 0.7;           // Phụ nữ thai nghén
    else if (theTrang === 'suynhuoc') heSo *= 0.75; // Cơ thể suy nhược
    else if (theTrang === 'theluc') heSo *= 1.1;    // Thể lực tráng kiện

    return Math.round(heSo * 100) / 100;
}

// 2. Gia giảm danh sách vị thuốc
function tinhLieuDanhSachVi(danhSachVi, tuoi, theTrang) {
    const heSo = tinhHesoLieuLuong(tuoi, theTrang);
    const lieuDefault = 12; // Liều tiêu chuẩn mặc định 12g

    return danhSachVi.map(item => {
        let tenVi = '';
        let lieuChuan = lieuDefault;

        // Xử lý tách chuỗi tên và liều gốc trực tiếp nếu chuỗi có dạng "Tên vị thuốc Xg"
        if (typeof item === 'string') {
            const match = item.match(/^(.*?)\s+(\d+(?:\.\d+)?)\s*g$/i);
            if (match) {
                tenVi = match[1].trim();
                lieuChuan = parseFloat(match[2]);
            } else {
                tenVi = item;
                lieuChuan = lieuDefault;
            }
        } else if (typeof item === 'object' && item !== null) {
            let rawTen = item.ten || '';
            const match = rawTen.match(/^(.*?)\s+(\d+(?:\.\d+)?)\s*g$/i);
            if (match) {
                tenVi = match[1].trim();
                lieuChuan = item.lieu !== undefined ? parseFloat(item.lieu) : parseFloat(match[2]);
            } else {
                tenVi = rawTen;
                lieuChuan = item.lieu !== undefined ? parseFloat(item.lieu) : lieuDefault;
            }
        }

        if (isNaN(lieuChuan)) lieuChuan = lieuDefault;

        // Nếu người dùng đã tự tay sửa liều kê (lieuCustom) -> Giữ nguyên liều người dùng chọn
        // Ngược lại -> Tự động tính theo hệ số tuổi & thể trạng
        let lieuDieuChinh = (typeof item === 'object' && item !== null && item.lieuCustom !== undefined && item.lieuCustom !== null) 
            ? parseFloat(item.lieuCustom) 
            : Math.round(lieuChuan * heSo);

        if (isNaN(lieuDieuChinh)) lieuDieuChinh = lieuChuan;

        let canhBao = '';
        if (theTrang === 'pntt') {
            const listKiemKy = ['bán hạ', 'ô đầu', 'phụ tử', 'đào nhân', 'hồng hoa', 'tam lăng', 'nga truật', 'ba đậu'];
            const normTen = typeof removeAccents === 'function' ? removeAccents(tenVi) : tenVi.toLowerCase();
            if (listKiemKy.some(k => normTen.includes(k))) {
                canhBao = '⚠️ Thận trọng / Chống chỉ định thai phụ';
            }
        }

        return { ten: tenVi, lieuGoc: lieuChuan, lieuTinh: lieuDieuChinh, canhBao };
    });
}


// Cấu hình LocalStorage lưu mặc định đơn thuốc
const DON_THUOC_SETTINGS_KEY = 'yhct_don_thuoc_settings';

function loadDonThuocSettings() {
    const saved = localStorage.getItem(DON_THUOC_SETTINGS_KEY);
    const defaults = {
        tenPhongKham: 'PHÒNG KHÁM Y HỌC CỔ TRUYỀN ĐẠI LUẬN TRỊ',
        huongDanSac: 'Đổ 3 bát nước sắc còn 1 bát, uống ấm sau bữa ăn 30 phút. Mỗi ngày 1 thang, chia 2 lần.',
        danDoKiengKy: 'Kiêng đồ ăn cay nóng, sống lạnh, chất kích thích và các món nhiều mỡ.',
        tenBacSi: 'BS. Trần Thị Đoan Trang'
    };
    return saved ? { ...defaults, ...JSON.parse(saved) } : defaults;
}

function luuCaiDatDonThuoc(field, value) {
    const currentSettings = loadDonThuocSettings();
    currentSettings[field] = value;
    localStorage.setItem(DON_THUOC_SETTINGS_KEY, JSON.stringify(currentSettings));
}

 function hienThiModalKhoaQuyen(title, desc) {
    const titleEl = document.getElementById('lock-modal-title');
    const descEl = document.getElementById('lock-modal-desc');
    const modal = document.getElementById('modal-role-lock');
    if (titleEl) titleEl.innerText = title;
    if (descEl) descEl.innerText = desc;
    if (modal) modal.classList.remove('hidden');
}

// 3. Cập nhật trong hàm moModalDonThuoc để hiển thị biểu tượng ổ khóa và trạng thái khóa cho ô tên phòng khám
function moModalDonThuoc() {
    const modal = document.getElementById('modal-don-thuoc');
    if (!modal) {
        window.print();
        return;
    }

    const settings = loadDonThuocSettings();
    const role = typeof getCurrentUserRole === 'function' ? getCurrentUserRole() : (window.currentUser?.role || 'GUEST');
    const isVIPOrAbove = (role === 'VIP' || role === 'SVIP');

    const gánLuuGiaTri = (id, key) => {
        const el = document.getElementById(id);
        if (el) {
            if (id === 'don-ten-phongkham') {
                if (!isVIPOrAbove) {
                    el.readOnly = true;
                    el.value = "";
                    el.placeholder = "🔒 Phòng chẩn trị y học cổ truyền đại luận trị";
                    el.title = "Tính năng tùy chỉnh tên phòng khám yêu cầu cấp độ VIP trở lên";
                    el.classList.add('cursor-not-allowed', 'opacity-80');
                    el.onclick = () => {
                        hienThiModalKhoaQuyen('Tùy Chỉnh Tên Phòng Khám', 'Tính năng thay đổi tên phòng khám yêu cầu tài khoản cấp độ VIP trở lên.');
                    };
                    el.onfocus = () => {
                        el.blur();
                        hienThiModalKhoaQuyen('Tùy Chỉnh Tên Phòng Khám', 'Tính năng thay đổi tên phòng khám yêu cầu tài khoản cấp độ VIP trở lên.');
                    };
                    return;
                }
            }

            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.value = settings[key] || '';
            } else {
                el.innerText = settings[key] || '';
            }

            el.oninput = (e) => {
                const val = (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') ? e.target.value : e.target.innerText;
                luuCaiDatDonThuoc(key, val);
            };
        }
    };

    gánLuuGiaTri('don-ten-phongkham', 'tenPhongKham');
    gánLuuGiaTri('don-huongdan-sac', 'huongDanSac');
    gánLuuGiaTri('don-dando-kiengky', 'danDoKiengKy');
    gánLuuGiaTri('don-ten-bacsi', 'tenBacSi');   

    const searchViInput = document.getElementById('search-don-vithuoc');
    if (searchViInput) {
        if (!isVIPOrAbove) {
            searchViInput.readOnly = true;
            searchViInput.placeholder = "🔒 Thêm vị thuốc từ CSDL";
            searchViInput.classList.add('cursor-not-allowed', 'opacity-80');
            searchViInput.onclick = () => {
                hienThiModalKhoaQuyen('Thêm Vị Thuốc', 'Tính năng tìm kiếm và thêm vị thuốc từ cơ sở dữ liệu yêu cầu tài khoản cấp độ VIP trở lên.');
            };
            searchViInput.onfocus = () => {
                searchViInput.blur();
                hienThiModalKhoaQuyen('Thêm Vị Thuốc', 'Tính năng tìm kiếm và thêm vị thuốc từ cơ sở dữ liệu yêu cầu tài khoản cấp độ VIP trở lên.');
            };
            searchViInput.oninput = null;
        } else {
            searchViInput.readOnly = false;
            searchViInput.placeholder = "🔍 Gõ tên vị thuốc từ CSDL để thêm vào đơn...";
            searchViInput.classList.remove('cursor-not-allowed', 'opacity-80');
            searchViInput.onclick = null;
            searchViInput.onfocus = null;
            searchViInput.oninput = gieoGoiYViThuocDon;
        }
    }

    const hcText = document.getElementById('hoi-chung')?.innerText || 'Chưa xác định';
    const pdtText = document.getElementById('phap-dieu-tri')?.innerText || 'Chưa xác định';
    const btText = document.getElementById('bai-thuoc')?.innerText || 'Đối chứng nghiệm phương';
    
    const elChanDoan = document.getElementById('don-chandoan');
    const elBaiThuoc = document.getElementById('don-baithuoc-ten');

    if (elChanDoan) elChanDoan.value = `${hcText} (Pháp trị: ${pdtText})`;
    if (elBaiThuoc) elBaiThuoc.value = btText;

    const elNgay = document.getElementById('don-ngay-thang');
    if (elNgay) {
        const d = new Date();
        elNgay.innerText = `Ngày ${d.getDate()} tháng ${d.getMonth() + 1} năm ${d.getFullYear()}`;
    }

    let rawHerbs = [];
    if (Array.isArray(window.currentActiveHerbs) && window.currentActiveHerbs.length > 0) {
        rawHerbs = window.currentActiveHerbs;
    } else if (typeof currentFormulaHerbs !== 'undefined' && Array.isArray(currentFormulaHerbs) && currentFormulaHerbs.length > 0) {
        rawHerbs = currentFormulaHerbs;
    } else {
        rawHerbs = ['Nhân sâm', 'Bạch truật', 'Phục linh', 'Cam thảo'];
    }

    window.donThuocCurrentHerbs = rawHerbs.map(item => {
        let ten = '', lieu = 12;
        if (typeof item === 'string') {
            const m = item.match(/^(.*?)\s+(\d+(?:\.\d+)?)\s*g$/i);
            if (m) { ten = m[1].trim(); lieu = parseFloat(m[2]); } else { ten = item; }
        } else if (typeof item === 'object' && item !== null) {
            const raw = item.ten || '';
            const m = raw.match(/^(.*?)\s+(\d+(?:\.\d+)?)\s*g$/i);
            if (m) { ten = m[1].trim(); lieu = item.lieu !== undefined ? parseFloat(item.lieu) : parseFloat(m[2]); } 
            else { ten = raw; lieu = item.lieu !== undefined ? parseFloat(item.lieu) : 12; }
        }
        return { ten, lieu, lieuCustom: item.lieuCustom || null };
    });

    capNhatBangLieuLuongDonThuoc();
    modal.classList.remove('hidden');
    history.pushState({ modal: 'don-thuoc' }, '', window.location.href); // 🟢 Thêm dòng này để ghi nhận lịch sử mở modal
}

// 3.1. Thuật toán kiểm tra Tương Kỵ / Phản Úy YHCT
function kiemTraTuongKyDonThuoc(danhSachVi) {
    if (!Array.isArray(danhSachVi) || danhSachVi.length < 2) return [];

    const normName = (item) => {
        let s = typeof item === 'object' ? (item.ten || '') : item;
        return typeof removeAccents === 'function' ? removeAccents(s).toLowerCase().trim() : s.toLowerCase().trim();
    };

    const names = danhSachVi.map(normName);
    const rawNames = danhSachVi.map(v => typeof v === 'object' ? v.ten : v);

    const quyTacPhanUy = [
        // Thập Bát Phản
        { nhomA: ['cam thao', 'chich cam thao'], nhomB: ['hai tao', 'dai kich', 'hong dai kich', 'nguyen hoa', 'cam toai'], loai: 'Thập Bát Phản (Cam thảo)' },
        { nhomA: ['o dau', 'phu tu', 'che phu tu', 'hac phu tu'], nhomB: ['ban ha', 'qua lau', 'boi mau', 'tri mau', 'bach liem', 'bach cap'], loai: 'Thập Bát Phản (Ô đầu / Phụ tử)' },
        { nhomA: ['nhan sam', 'dang sam', 'kho sam', 'sa sam', 'huyen sam', 'dan sam'], nhomB: ['le lo'], loai: 'Thập Bát Phản (Họ Sâm / Lê lô)' },
        // Thập Cửu Úy
        { nhomA: ['nhan sam', 'dang sam'], nhomB: ['ngu linh chi'], loai: 'Thập Cửu Úy (Nhân sâm - Ngũ linh chi)' },
        { nhomA: ['dinh huong'], nhomB: ['uat kim'], loai: 'Thập Cửu Úy (Đinh hương - Uất kim)' },
        { nhomA: ['nhuc que', 'que chi'], nhomB: ['xich thach chi'], loai: 'Thập Cửu Úy (Nhục quế - Xích thạch chỉ)' },
        { nhomA: ['ba dau'], nhomB: ['dong quy', 'nga truat'], loai: 'Thập Cửu Úy (Ba đậu)' }
    ];

    const canhBao = [];

    quyTacPhanUy.forEach(qt => {
        let foundA = [];
        let foundB = [];

        names.forEach((n, idx) => {
            if (qt.nhomA.some(a => n.includes(a))) foundA.push(rawNames[idx]);
            if (qt.nhomB.some(b => n.includes(b))) foundB.push(rawNames[idx]);
        });

        if (foundA.length > 0 && foundB.length > 0) {
            canhBao.push(`🚨 <strong>Xung khắc [${qt.loai}]</strong>: <u>${foundA.join(', ')}</u> tương phản/tương úy với <u>${foundB.join(', ')}</u>!`);
        }
    });

    return canhBao;
}

// 4. Cập nhật trong hàm capNhatBangLieuLuongDonThuoc để hiển thị biểu tượng ổ khóa ở các ô liều kê khi chưa đạt cấp VIP
function capNhatBangLieuLuongDonThuoc() {
    const tuoi = parseInt(document.getElementById('don-tuoi')?.value) || 35;
    const theTrang = document.getElementById('don-thetrang')?.value || 'binhthuong';
    const container = document.getElementById('don-danhsach-vithuoc');
    if (!container) return;

    if (!Array.isArray(window.donThuocCurrentHerbs)) {
        window.donThuocCurrentHerbs = [];
    }

    const role = typeof getCurrentUserRole === 'function' ? getCurrentUserRole() : (window.currentUser?.role || 'GUEST');
    const isVIPOrAbove = (role === 'VIP' || role === 'SVIP');

    const listCalculated = tinhLieuDanhSachVi(window.donThuocCurrentHerbs, tuoi, theTrang);
    const safeEscape = typeof escapeHTML === 'function' ? escapeHTML : (s => s);

    container.innerHTML = listCalculated.map((v, idx) => `
        <tr class="border-b border-stone-800 text-xs print:border-stone-400">
            <td class="py-2 px-1 text-center text-stone-400 font-mono print:text-black">${idx + 1}</td>
            <td class="py-2 px-2 text-emerald-400 font-bold whitespace-normal break-words print:text-black">
                ${safeEscape(v.ten)}
                ${v.canhBao ? `<span class="text-red-400 font-normal block text-[10px] print:text-red-600">${v.canhBao}</span>` : ''}
            </td>
            <td class="py-2 px-1 text-stone-300 text-center no-print">${v.lieuGoc}g</td>
            <td class="py-1 px-1 text-center bg-amber-950/25 print:bg-transparent">
                <!-- Vùng bọc Input & Chữ g (Căn giữa khi hiển thị web) -->
                <div class="flex items-center justify-center gap-0.5">
                    
                    <!-- 1. Ô Input: Chỉnh sửa mượt mà trên app - SẼ BỊ ẨN KHI IN (print:hidden) -->
                    <input type="${isVIPOrAbove ? 'number' : 'text'}" ${isVIPOrAbove ? 'min="1" max="500"' : ''} value="${isVIPOrAbove ? v.lieuTinh : '🔒 ' + v.lieuTinh}" 
                        ${!isVIPOrAbove ? `readonly onclick="hienThiModalKhoaQuyen('Tùy Chỉnh Liều Lượng', 'Tính năng chỉnh sửa liều lượng vị thuốc yêu cầu cấp độ VIP trở lên.')" onfocus="this.blur(); hienThiModalKhoaQuyen('Tùy Chỉnh Liều Lượng', 'Tính năng chỉnh sửa liều lượng vị thuốc yêu cầu cấp độ VIP trở lên.');"` : ''}
                        onchange="${isVIPOrAbove ? `suaLieuKeViThuoc(${idx}, this.value)` : ''}" 
                        oninput="${isVIPOrAbove ? `this.nextElementSibling.innerText = this.value; suaLieuKeViThuoc(${idx}, this.value)` : ''}" 
                        class="w-16 p-0.5 text-center bg-stone-900 text-amber-400 font-bold border border-amber-600/60 rounded outline-none text-xs print:hidden ${!isVIPOrAbove ? 'cursor-not-allowed opacity-80' : 'focus:border-amber-400'}">
                    
                    <!-- 2. Văn bản Text: Cập nhật trực tiếp số liệu từ Input - CHỈ HIỆN KHI IN (hidden print:inline-block) -->
                    <span class="hidden print:inline-block font-bold text-black text-right">${isVIPOrAbove ? v.lieuTinh : '🔒 ' + v.lieuTinh}</span>
                    
                    <!-- 3. Đơn vị g -->
                    <span class="text-amber-500 font-medium text-[11px] print:text-black">g</span>
                </div>
            </td>
            <td class="py-2 px-1 text-center no-print">
                <button onclick="${isVIPOrAbove ? `xoaViThuocDon(${idx})` : `hienThiModalKhoaQuyen('Xóa Vị Thuốc', 'Tính năng xóa vị thuốc trong đơn yêu cầu cấp độ VIP trở lên.')`}" class="text-red-400 hover:text-red-300 p-0.5 rounded ${!isVIPOrAbove ? 'opacity-60 cursor-not-allowed' : ''}" title="${isVIPOrAbove ? 'Xóa vị thuốc' : 'Yêu cầu cấp VIP để xóa vị thuốc'}">
                    <i class="fa-solid fa-trash-can text-xs"></i>
                </button>
            </td>
        </tr>
    `).join('');

    let warningBox = document.getElementById('don-tuongky-warning');
    if (!warningBox) {
        warningBox = document.createElement('div');
        warningBox.id = 'don-tuongky-warning';
        warningBox.className = 'no-print mt-2 p-2.5 bg-red-950/60 border border-red-700/80 rounded-lg text-xs space-y-1';
        const parentTableDiv = container.closest('.border') || container.parentElement;
        if (parentTableDiv && parentTableDiv.parentElement) {
            parentTableDiv.parentElement.appendChild(warningBox);
        }
    }

    const listCanhBao = kiemTraTuongKyDonThuoc(window.donThuocCurrentHerbs);
    if (listCanhBao.length > 0) {
        warningBox.innerHTML = `
            <div class="text-red-400 font-bold flex items-center gap-1.5 uppercase text-[11px]">
                <i class="fa-solid fa-triangle-exclamation text-amber-400"></i> CẢNH BÁO PHẢN ÚY / TƯƠNG KỴ:
            </div>
            <ul class="list-disc pl-5 text-red-300 font-medium text-[11px] space-y-0.5">
                ${listCanhBao.map(cb => `<li>${cb}</li>`).join('')}
            </ul>
        `;
        warningBox.classList.remove('hidden');
    } else {
        warningBox.classList.add('hidden');
        warningBox.innerHTML = '';
    }
}

// 5. Hàm ghi nhận giá trị liều kê do thầy thuốc tự nhập
function suaLieuKeViThuoc(index, val) {
    if (!Array.isArray(window.donThuocCurrentHerbs) || !window.donThuocCurrentHerbs[index]) return;
    const num = parseFloat(val);
    if (!isNaN(num) && num > 0) {
        window.donThuocCurrentHerbs[index].lieuCustom = num;
    }
}

// 6. Thêm vị thuốc mới vào Đơn Thuốc
function themViThuocVaoDon(tenVi, lieuGoc = 12) {
    if (!tenVi) return;
    if (!Array.isArray(window.donThuocCurrentHerbs)) window.donThuocCurrentHerbs = [];

    const normTen = typeof removeAccents === 'function' ? removeAccents(tenVi) : tenVi.toLowerCase();
    const isExisted = window.donThuocCurrentHerbs.some(item => {
        const itemTen = typeof removeAccents === 'function' ? removeAccents(item.ten) : item.ten.toLowerCase();
        return itemTen === normTen;
    });

    if (isExisted) {
        alert(`Vị thuốc "${tenVi}" đã có trong đơn thuốc!`);
        return;
    }

    window.donThuocCurrentHerbs.push({ ten: tenVi, lieu: lieuGoc, lieuCustom: null });
    capNhatBangLieuLuongDonThuoc();

    const searchInput = document.getElementById('search-don-vithuoc');
    const dropdown = document.getElementById('dropdown-don-vithuoc');
    if (searchInput) searchInput.value = '';
    if (dropdown) dropdown.classList.add('hidden');
}

// 7. Xóa vị thuốc khỏi Đơn Thuốc
function xoaViThuocDon(index) {
    if (!Array.isArray(window.donThuocCurrentHerbs)) return;
    window.donThuocCurrentHerbs.splice(index, 1);
    capNhatBangLieuLuongDonThuoc();
}

// 8. Gợi ý vị thuốc tự động từ CSDL khi gõ vào ô tìm kiếm
function gieoGoiYViThuocDon() {
    const input = document.getElementById('search-don-vithuoc');
    const dropdown = document.getElementById('dropdown-don-vithuoc');
    if (!input || !dropdown) return;

    const query = input.value.trim().toLowerCase();
    if (!query) {
        dropdown.classList.add('hidden');
        return;
    }

    let dbHerbs = [];
    if (typeof duoclieuData !== 'undefined' && Array.isArray(duoclieuData)) {
        dbHerbs = duoclieuData;
    } else if (typeof database_duoclieu !== 'undefined') {
        dbHerbs = Object.values(database_duoclieu);
    }

    const normQuery = typeof removeAccents === 'function' ? removeAccents(query) : query;
    const matches = dbHerbs.filter(herb => {
        const name = herb.ten || herb.name || '';
        const normName = typeof removeAccents === 'function' ? removeAccents(name) : name.toLowerCase();
        return normName.includes(normQuery);
    }).slice(0, 10);

    if (matches.length > 0) {
        dropdown.innerHTML = matches.map(m => {
            const name = m.ten || m.name || '';
            return `
                <div onclick="themViThuocVaoDon('${name.replace(/'/g, "\\'")}')" class="p-2 hover:bg-stone-800 cursor-pointer text-xs text-amber-400 border-b border-stone-800 flex justify-between items-center">
                    <span><i class="fa-solid fa-leaf text-emerald-500 mr-1.5"></i>${name}</span>
                    <span class="text-[10px] text-stone-400 bg-stone-800 px-1.5 py-0.5 rounded">+ Thêm</span>
                </div>
            `;
        }).join('');
        dropdown.classList.remove('hidden');
    } else {
        dropdown.innerHTML = `
            <div onclick="themViThuocVaoDon('${query.replace(/'/g, "\\'")}')" class="p-2 hover:bg-stone-800 cursor-pointer text-xs text-amber-400 flex justify-between items-center">
                <span>Thêm thủ công: "<strong>${query}</strong>"</span>
                <span class="text-[10px] text-amber-500 font-bold">+ Thêm</span>
            </div>
        `;
        dropdown.classList.remove('hidden');
    }
}

// 9. Thực hiện in đơn thuốc (Chạy trực tiếp mượt mà trên TrebEdit / Mobile WebView)
function inDonThuoc() {
    window.print();
}

// 10. Gửi đơn thuốc dạng văn bản chuẩn qua Zalo
async function chiaSeZaloDonThuoc() {
    const tenBn = document.getElementById('don-ten-bn')?.value || 'Bệnh nhân';
    const tuoi = document.getElementById('don-tuoi')?.value || '35';
    const chanDoan = document.getElementById('don-chandoan')?.value || '';
    const baiThuoc = document.getElementById('don-baithuoc-ten')?.value || '';
    
    let noiDungViThuoc = '';
    const rows = document.querySelectorAll('#don-danhsach-vithuoc tr');
    rows.forEach((tr, i) => {
        const cols = tr.querySelectorAll('td');
        if (cols.length >= 4) {
            const tenVi = cols[1].innerText.replace(/\n.*/, '').trim();
            const inputVal = cols[3].querySelector('input')?.value || cols[3].innerText.trim();
            noiDungViThuoc += `  • ${tenVi}: ${inputVal}g\n`;
        }
    });

    const content = `👤 Bệnh nhân: ${tenBn} (${tuoi} tuổi)\n📋 Chẩn đoán: ${chanDoan}\n🌿 Bài thuốc: ${baiThuoc}\n----------------------------------\n🧪 THÀNH PHẦN (1 THANG/NGÀY):\n${noiDungViThuoc}\n🥣 CÁCH DÙNG:\nSắc 3 bát nước lấy 1 bát, uống ấm.`;

    if (navigator.clipboard) {
        await navigator.clipboard.writeText(content);
        alert('Đã sao chép đơn thuốc gọn gàng! Đang mở Zalo để dán...');
        window.open('https://zalo.me', '_blank');
    }
}

// ========================================================
// 🟢 QUẢN LÝ & LƯU TRỮ HỒ SƠ BỆNH NHÂN
// ========================================================
const HO_SO_BENH_NHAN_KEY = 'yhct_ho_so_benh_nhan_list';
let activeHoSoId = null; // Biến lưu ID hồ sơ đang mở/xem

// 1. Lấy danh sách hồ sơ từ LocalStorage
function getDanhSachHoSoBenhNhan() {
    try {
        return JSON.parse(localStorage.getItem(HO_SO_BENH_NHAN_KEY) || '[]');
    } catch (e) {
        return [];
    }
}

// 2. Lưu hồ sơ mới (Độc lập từng lần khám)
function luuHoSoBenhNhan() {
    const tenBn = document.getElementById('don-ten-bn')?.value?.trim();
    const tuoi = document.getElementById('don-tuoi')?.value || '35';
    const diachi = document.getElementById('don-diachi')?.value?.trim() || '';

    if (!tenBn) {
        alert('⚠️ Vui lòng nhập Họ & Tên bệnh nhân trước khi lưu!');
        document.getElementById('don-ten-bn')?.focus();
        return;
    }

    const ngayHienTai = new Date().toLocaleDateString('vi-VN');
    const gioHienTai = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });

    const cleanName = typeof removeAccents === 'function' ? removeAccents(tenBn).toLowerCase().replace(/\s+/g, '_') : tenBn.toLowerCase();
    const cleanAddress = typeof removeAccents === 'function' ? removeAccents(diachi).toLowerCase().replace(/\s+/g, '_') : diachi.toLowerCase();
    
    // Gán ID mới và cập nhật vào biến activeHoSoId
    activeHoSoId = `bn_${cleanName}_${tuoi}_${cleanAddress}_${Date.now()}`;

    const hoSoNew = {
        id: activeHoSoId,
        tenBn: tenBn,
        tuoi: tuoi,
        diachi: diachi,
        theTrang: document.getElementById('don-thetrang')?.value || 'binhthuong',
        chanDoan: document.getElementById('don-chandoan')?.value || '',
        baiThuoc: document.getElementById('don-baithuoc-ten')?.value || '',
        herbs: Array.isArray(window.donThuocCurrentHerbs) ? JSON.parse(JSON.stringify(window.donThuocCurrentHerbs)) : [],
        huongDanSac: document.getElementById('don-huongdan-sac')?.value || '',
        danDoKiengKy: document.getElementById('don-dando-kiengky')?.value || '',
        tenBacSi: document.getElementById('don-ten-bacsi')?.value || '',
        ngayCapNhat: `${ngayHienTai} lúc ${gioHienTai}`
    };

    let dsHoSo = getDanhSachHoSoBenhNhan();
    dsHoSo.unshift(hoSoNew);
    localStorage.setItem(HO_SO_BENH_NHAN_KEY, JSON.stringify(dsHoSo));
    alert(`✅ Đã lưu hồ sơ mới cho bệnh nhân "${tenBn}" thành công!`);

    const dropdown = document.getElementById('dropdown-tim-bn');
    if (dropdown) dropdown.classList.add('hidden');
}

// 3. Gợi ý tìm kiếm khi gõ tên bệnh nhân
function gieoGoiYTimHoSo() {
    const input = document.getElementById('don-ten-bn');
    const dropdown = document.getElementById('dropdown-tim-bn');
    if (!input || !dropdown) return;

    const query = input.value.trim().toLowerCase();
    const dsHoSo = getDanhSachHoSoBenhNhan();

    if (!query || dsHoSo.length === 0) {
        dropdown.classList.add('hidden');
        return;
    }

    const normQuery = typeof removeAccents === 'function' ? removeAccents(query) : query;
    const matches = dsHoSo.filter(hs => {
        const normTen = typeof removeAccents === 'function' ? removeAccents(hs.tenBn).toLowerCase() : hs.tenBn.toLowerCase();
        return normTen.includes(normQuery);
    }).slice(0, 10);

    if (matches.length > 0) {
        dropdown.innerHTML = matches.map(m => `
            <div onclick="taiHoSoBenhNhan('${m.id}')" class="p-2 hover:bg-stone-800 cursor-pointer text-xs border-b border-stone-800/80 flex justify-between items-center transition-colors">
                <div>
                    <span class="font-bold text-amber-400">👤 ${typeof escapeHTML === 'function' ? escapeHTML(m.tenBn) : m.tenBn}</span>
                    <span class="text-stone-300 text-[11px] ml-1">(${m.tuoi} tuổi${m.diachi ? ' - ' + escapeHTML(m.diachi) : ''})</span>
                    <div class="text-stone-400 text-[10px] mt-0.5">${typeof escapeHTML === 'function' ? escapeHTML(m.baiThuoc || 'Chưa rõ bài thuốc') : (m.baiThuoc || 'Chưa rõ bài thuốc')}</div>
                </div>
                <div class="flex items-center gap-2 flex-shrink-0">
                    <span class="text-[10px] text-stone-500">${m.ngayCapNhat || ''}</span>
                    <button onclick="event.stopPropagation(); xoaHoSoBenhNhan('${m.id}')" class="text-red-400 hover:text-red-300 p-1" title="Xóa hồ sơ">
                        <i class="fa-solid fa-trash-can text-[10px]"></i>
                    </button>
                </div>
            </div>
        `).join('');
        dropdown.classList.remove('hidden');
    } else {
        dropdown.classList.add('hidden');
    }
}

// 4. Nạp lại thông tin vào modal và ghi nhớ ID đang mở
function taiHoSoBenhNhan(hoSoId) {
    const dsHoSo = getDanhSachHoSoBenhNhan();
    const hs = dsHoSo.find(item => item.id === hoSoId);
    if (!hs) return;

    activeHoSoId = hs.id; // Ghi nhớ ID hồ sơ đang tải lên

    if (document.getElementById('don-ten-bn')) document.getElementById('don-ten-bn').value = hs.tenBn || '';
    if (document.getElementById('don-tuoi')) document.getElementById('don-tuoi').value = hs.tuoi || '35';
    if (document.getElementById('don-diachi')) document.getElementById('don-diachi').value = hs.diachi || '';
    if (document.getElementById('don-thetrang')) document.getElementById('don-thetrang').value = hs.theTrang || 'binhthuong';
    if (document.getElementById('don-chandoan')) document.getElementById('don-chandoan').value = hs.chanDoan || '';
    if (document.getElementById('don-baithuoc-ten')) document.getElementById('don-baithuoc-ten').value = hs.baiThuoc || '';
    if (document.getElementById('don-huongdan-sac')) document.getElementById('don-huongdan-sac').value = hs.huongDanSac || '';
    if (document.getElementById('don-dando-kiengky')) document.getElementById('don-dando-kiengky').value = hs.danDoKiengKy || '';
    if (document.getElementById('don-ten-bacsi')) document.getElementById('don-ten-bacsi').value = hs.tenBacSi || '';

    window.donThuocCurrentHerbs = Array.isArray(hs.herbs) ? JSON.parse(JSON.stringify(hs.herbs)) : [];

    if (typeof capNhatBangLieuLuongDonThuoc === 'function') {
        capNhatBangLieuLuongDonThuoc();
    }

    const dropdown = document.getElementById('dropdown-tim-bn');
    if (dropdown) dropdown.classList.add('hidden');
}

// 5. Xóa hồ sơ đang hiển thị trên form (Nút Xóa hồ sơ)
function xoaHoSoHienTai() {
    if (!activeHoSoId) {
        alert('⚠️ Chưa có hồ sơ nào được chọn hoặc tải lên từ hệ thống!');
        return;
    }
    if (confirm('Bạn có chắc chắn muốn xóa hồ sơ này không?')) {
        xoaHoSoBenhNhan(activeHoSoId);
        activeHoSoId = null;
        
        // Reset sạch form
        document.getElementById('don-ten-bn').value = '';
        document.getElementById('don-tuoi').value = '35';
        document.getElementById('don-diachi').value = '';
        document.getElementById('don-chandoan').value = '';
        document.getElementById('don-baithuoc-ten').value = '';
        window.donThuocCurrentHerbs = [];
        if (typeof capNhatBangLieuLuongDonThuoc === 'function') {
            capNhatBangLieuLuongDonThuoc();
        }
        alert('🗑️ Đã xóa hồ sơ thành công!');
    }
}

// 6. Xóa hồ sơ bất kỳ theo ID (Dùng chung cho cả nút trong dropdown lẫn hàm trên)
function xoaHoSoBenhNhan(hoSoId) {
    let dsHoSo = getDanhSachHoSoBenhNhan();
    dsHoSo = dsHoSo.filter(item => item.id !== hoSoId);
    localStorage.setItem(HO_SO_BENH_NHAN_KEY, JSON.stringify(dsHoSo));
    if (activeHoSoId === hoSoId) activeHoSoId = null;
    gieoGoiYTimHoSo();
}

// 7. Đóng Dropdown khi click ra ngoài
document.addEventListener('click', function(e) {
    const input = document.getElementById('don-ten-bn');
    const dropdown = document.getElementById('dropdown-tim-bn');
    if (dropdown && !dropdown.classList.contains('hidden')) {
        if (input && !input.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.add('hidden');
        }
    }
});

// ========================================================
// 🟢 SAO LƯU & PHỤC HỒI DỮ LIỆU
// ========================================================
function xuatDuLieuHoSo() {
    const dsHoSo = getDanhSachHoSoBenhNhan();
    if (dsHoSo.length === 0) {
        alert('⚠️ Hiện tại chưa có hồ sơ nào để sao lưu!');
        return;
    }

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(dsHoSo, null, 2));
    const downloadAnchor = document.createElement('a');
    const ngayTruyXuat = new Date().toISOString().slice(0, 10);
    
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `Backup_HoSoBenhNhan_${ngayTruyXuat}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    
    alert(`✅ Đã xuất thành công ${dsHoSo.length} hồ sơ lưu trữ!`);
}

function nhapDuLieuHoSo(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedData = JSON.parse(e.target.result);
            if (Array.isArray(importedData)) {
                if (confirm(`⚠️ Tìm thấy ${importedData.length} hồ sơ. Bạn có muốn gộp vào hệ thống không?`)) {
                    let currentDs = getDanhSachHoSoBenhNhan();
                    const existingIds = new Set(currentDs.map(item => item.id));
                    let addedCount = 0;

                    importedData.forEach(item => {
                        if (!existingIds.has(item.id)) {
                            currentDs.push(item);
                            addedCount++;
                        }
                    });

                    localStorage.setItem(HO_SO_BENH_NHAN_KEY, JSON.stringify(currentDs));
                    alert(`✅ Phục hồi thành công ${addedCount} hồ sơ mới.`);
                }
            } else {
                alert('❌ Định dạng tệp không hợp lệ!');
            }
        } catch (err) {
            alert('❌ Lỗi đọc tệp dữ liệu!');
        }
        event.target.value = '';
    };
    reader.readAsText(file);
}
// ========================================================
// 🟢 TÌM KIẾM & CHỌN BÀI THUỐC TỪ CSDL LUANTRIDATA.JS
// ========================================================

// 1. Gợi ý tìm kiếm bài thuốc khi gõ vào ô Bài thuốc chủ phương
function gieoGoiYBaiThuocLuanTri() {
    const input = document.getElementById('don-baithuoc-ten');
    const dropdown = document.getElementById('dropdown-tim-baithuoc');
    if (!input || !dropdown) return;

    const query = input.value.trim().toLowerCase();
    
    // Kiểm tra biến database (nạp từ luantridata.js)
    if (typeof database === 'undefined' || !database) {
        dropdown.classList.add('hidden');
        return;
    }

    const matches = [];
    for (let key in database) {
        const item = database[key];
        const btName = item.bt || '';
        if (!btName || btName === "Đối chứng nghiệm phương") continue;

        const normBtName = typeof removeAccents === 'function' ? removeAccents(btName).toLowerCase() : btName.toLowerCase();
        const normQuery = typeof removeAccents === 'function' ? removeAccents(query) : query;

        if (normBtName.includes(normQuery)) {
            if (!matches.some(m => m.bt.toLowerCase() === btName.toLowerCase())) {
                matches.push({ key, ...item });
            }
        }
        if (matches.length >= 15) break;
    }

    if (matches.length > 0 && query !== '') {
        dropdown.innerHTML = matches.map(m => `
            <div onclick="chonBaiThuocLuanTri('${m.key}')" class="p-2 hover:bg-stone-800 cursor-pointer text-xs border-b border-stone-800/80 flex justify-between items-center transition-colors">
                <div>
                    <span class="font-bold text-emerald-400">🌿 ${typeof escapeHTML === 'function' ? escapeHTML(m.bt) : m.bt}</span>
                    <div class="text-stone-400 text-[10px] mt-0.5">Hội chứng: ${typeof escapeHTML === 'function' ? escapeHTML(m.hc || '') : (m.hc || '')}</div>
                </div>
                <span class="text-[10px] text-amber-500 bg-amber-950/40 px-1.5 py-0.5 rounded border border-amber-800/50">Chọn</span>
            </div>
        `).join('');
        dropdown.classList.remove('hidden');
    } else {
        dropdown.classList.add('hidden');
    }
}

// 2. Nạp bài thuốc và danh sách vị thuốc tương ứng khi người dùng bấm chọn
function chonBaiThuocLuanTri(key) {
    if (typeof database === 'undefined' || !database || !database[key]) return;
    const item = database[key];

    const inputBt = document.getElementById('don-baithuoc-ten');
    if (inputBt) inputBt.value = item.bt || '';

    if (Array.isArray(item.tpbt) && item.tpbt.length > 0) {
        window.donThuocCurrentHerbs = item.tpbt.map(v => {
            let ten = '', lieu = 12;
            if (typeof v === 'string') {
                const m = v.match(/^(.*?)\s+(\d+(?:\.\d+)?)\s*g$/i);
                if (m) { ten = m[1].trim(); lieu = parseFloat(m[2]); } else { ten = v; }
            } else if (typeof v === 'object' && v !== null) {
                const raw = v.ten || '';
                const m = raw.match(/^(.*?)\s+(\d+(?:\.\d+)?)\s*g$/i);
                if (m) { ten = m[1].trim(); lieu = v.lieu !== undefined ? parseFloat(v.lieu) : parseFloat(m[2]); } 
                else { ten = raw; lieu = v.lieu !== undefined ? parseFloat(v.lieu) : 12; }
            }
            return { ten, lieu, lieuCustom: v.lieuCustom || null };
        });
        
        if (typeof capNhatBangLieuLuongDonThuoc === 'function') {
            capNhatBangLieuLuongDonThuoc();
        }
    }

    const dropdown = document.getElementById('dropdown-tim-baithuoc');
    if (dropdown) dropdown.classList.add('hidden');
}
