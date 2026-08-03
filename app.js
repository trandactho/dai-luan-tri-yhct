// --- QUẢN LÝ TRẠNG THÁI ỨNG DỤNG (Hợp nhất tập trung) ---
const AppState = {
    quizActive: false,
    isQuizDL: false,
    isQuizHV: false,
    isQuizLT: false
};

let originalQuizSetupHTML = ""; // Lưu giao diện cấu hình gốc[span_1](start_span)[span_1](end_span)

// Biến quản lý đồng hồ đếm ngược trắc nghiệm
let quizTimerInterval = null;
let quizTimeRemaining = 30;
let isTimerEnabled = false;
let timePerQuestion = 30;

function escapeHTML(str) {
    if (!str) return '';
    return String(str).replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag])
    );
}

function startQuizMode() {
    if (typeof database === 'undefined' || !database) return;
    AppState.quizActive = true;
    
    const boLoc = document.getElementById('bo-loc-tam-truc');
    if (boLoc) boLoc.classList.add('blur-sm', 'pointer-events-none', 'opacity-40');
    const input = document.getElementById('search-input');
    if (input) {
        input.classList.add('blur-sm', 'pointer-events-none', 'opacity-40');
        input.disabled = true;
    }
    
    const controls = document.getElementById('quiz-controls');
    if (controls) {
        controls.innerHTML = `
            <button onclick="loadRandomCase()" class="flex-1 px-4 py-2 bg-purple-900 hover:bg-purple-800 text-purple-300 border border-purple-700 font-bold rounded text-xs flex items-center justify-center gap-2 transition-all cursor-pointer">
                <i class="fa-solid fa-shuffle"></i> Ca Tiếp Theo
            </button>
            <button onclick="stopQuizMode()" class="flex-1 px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-400 border border-stone-700 font-bold rounded text-xs flex items-center justify-center gap-2 transition-all cursor-pointer">
                <i class="fa-solid fa-xmark"></i> Thoát
            </button>
        `;
    }
    loadRandomCase();
}

function loadRandomCase() {
    if (!AppState.quizActive || typeof database === 'undefined' || !database) return;
    const keys = Object.keys(database);
    if (keys.length === 0) return;
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const data = database[randomKey];
    if (data) {
        const parts = randomKey.split('_');
        if (parts.length === 3) {
            const tp = document.getElementById('tang-phu');
            const hn = document.getElementById('han-nhiet');
            const ht = document.getElementById('hu-thuc');
            if (tp) tp.value = parts[0];
            if (hn) hn.value = parts[1];
            if (ht) ht.value = parts[2];
        }
        const hcEl = document.getElementById('hoi-chung');
        const pdtEl = document.getElementById('phap-dieu-tri');
        const btEl = document.getElementById('bai-thuoc');
        if (hcEl) hcEl.innerText = data.hc || "Chưa rõ hội chứng";
        if (pdtEl) pdtEl.innerText = data.pdt || "Chưa rõ pháp trị";
        if (btEl) btEl.innerText = data.bt || "Chưa rõ cổ phương";

        const ul = document.getElementById('trieu-chung'); 
        if (ul) {
            ul.innerHTML = "";
            if (data.tc && Array.isArray(data.tc)) {
                const frag = document.createDocumentFragment();
                data.tc.forEach(t => { let li = document.createElement('li'); li.innerText = t; frag.appendChild(li); });
                ul.appendChild(frag);
            }
        }
        const divBt = document.getElementById('chi-tiet-bai-thuoc'); 
        if (divBt) {
            divBt.innerHTML = "";
            if (data.tpbt && Array.isArray(data.tpbt)) {
                const frag = document.createDocumentFragment();
                data.tpbt.forEach(v => {
                    let b = document.createElement('button');
                    b.className = "px-2.5 py-1 text-xs bg-stone-800 text-amber-400 border border-stone-700 rounded transition-all font-medium";
                    b.innerHTML = `<i class="fa-solid fa-leaf text-[10px] mr-1 text-emerald-500"></i>${v}`;
                    b.onclick = () => xemDuocLieu(v); frag.appendChild(b);
                });
                divBt.appendChild(frag);
            }
        }
        
        const boLoc = document.getElementById('bo-loc-tam-truc');
        if (boLoc) boLoc.classList.add('blur-sm', 'pointer-events-none', 'opacity-40');
        if (hcEl) hcEl.className = "text-xl font-bold text-primary transition-all blur-sm select-none cursor-pointer";
        if (pdtEl) pdtEl.className = "text-base font-semibold text-emerald-500 transition-all blur-sm select-none cursor-pointer";
        if (btEl) btEl.className = "text-lg font-bold text-amber-500 transition-all blur-sm select-none cursor-pointer";
        const chiTietBT = document.getElementById('chi-tiet-bai-thuoc');
        if (chiTietBT) chiTietBT.className = "flex flex-wrap gap-2 transition-all blur-sm select-none";
        
        const revealAction = () => {
            if (hcEl) hcEl.classList.remove('blur-sm', 'select-none');
            if (pdtEl) pdtEl.classList.remove('blur-sm', 'select-none');
            if (btEl) btEl.classList.remove('blur-sm', 'select-none');
            if (chiTietBT) chiTietBT.classList.remove('blur-sm', 'select-none');
            if (boLoc) boLoc.classList.remove('blur-sm', 'opacity-40');
        };
        if (hcEl) hcEl.onclick = revealAction;
        if (pdtEl) pdtEl.onclick = revealAction;
        if (btEl) btEl.onclick = revealAction;
    }
}

function stopQuizMode() {
    AppState.quizActive = false;
    const boLoc = document.getElementById('bo-loc-tam-truc');
    if (boLoc) boLoc.classList.remove('blur-sm', 'pointer-events-none', 'opacity-40');
    const input = document.getElementById('search-input');
    if (input) {
        input.classList.remove('blur-sm', 'pointer-events-none', 'opacity-40');
        input.disabled = false;
    }
    
    const controls = document.getElementById('quiz-controls');
    if (controls) {
        controls.innerHTML = `
            <button onclick="startQuizMode()" class="w-full px-4 py-2 bg-stone-800 hover:bg-stone-700 text-amber-500 border border-stone-700 font-bold rounded text-xs flex items-center justify-center gap-2 transition-all cursor-pointer">
                <i class="fa-solid fa-graduation-cap"></i> Chế độ Ôn Tập
            </button>
        `;
    }
    const hcEl = document.getElementById('hoi-chung');
    const pdtEl = document.getElementById('phap-dieu-tri');
    const btEl = document.getElementById('bai-thuoc');
    const chiTietBT = document.getElementById('chi-tiet-bai-thuoc');
    if (hcEl) { hcEl.className = "text-xl font-bold text-primary transition-all"; hcEl.onclick = null; }
    if (pdtEl) { pdtEl.className = "text-base font-semibold text-emerald-500 transition-all"; pdtEl.onclick = null; }
    if (btEl) { btEl.className = "text-lg font-bold text-amber-500 transition-all"; btEl.onclick = null; }
    if (chiTietBT) chiTietBT.className = "flex flex-wrap gap-2 transition-all";
    updateLuanTri();
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
    
    ['lt-card-hc', 'lt-card-pdt', 'lt-card-bt'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            if (AppState.isQuizLT) {
                el.classList.add('blur-md', 'transition-all', 'duration-300', 'cursor-pointer');
                el.title = "Bấm vào để lật xem đáp án";
                el.onclick = () => el.classList.remove('blur-md');
            } else {
                el.classList.remove('blur-md', 'cursor-pointer');
                el.title = "";
                el.onclick = null;
            }
        }
    });
}

function toggleQuizDL(btnEl) {
    AppState.isQuizDL = !AppState.isQuizDL;
    const btn = btnEl || document.querySelector('button[onclick*="toggleQuizDL"]');
    if (btn) {
        if (AppState.isQuizDL) {
            btn.className = "px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-lg text-xs flex items-center gap-1.5 transition-all flex-shrink-0 shadow-lg shadow-amber-900/50";
        } else {
            btn.className = "px-4 py-2 bg-stone-800 hover:bg-stone-700 text-amber-500 border border-stone-700 font-bold rounded-lg text-xs flex items-center gap-1.5 transition-all flex-shrink-0";
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

function capNhatTongSoTracNghiem() {
    let total = 0;
    if (typeof questionsData !== 'undefined' && Array.isArray(questionsData)) {
        total += questionsData.length;
    } else if (Array.isArray(window.questionsData)) {
        total += window.questionsData.length;
    }
    if (typeof database !== 'undefined') total += Object.keys(database).length;
    if (typeof duocLieuData !== 'undefined' && Array.isArray(duocLieuData)) total += duocLieuData.length;
    if (typeof huyetViData !== 'undefined' && Array.isArray(huyetViData)) total += huyetViData.length;
    if (typeof traData !== 'undefined' && Array.isArray(traData)) total += traData.length;

    const el = document.getElementById('total-quiz');
    if (el) el.innerText = total;
}

function debounce(func, delay = 100) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

const debounceSearchLuanTri = debounce(searchLuanTri, 100);
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

function highlightText(text, query) {
    if (!query || !text) return escapeHTML(text);
    const safeText = String(text);
    
    // Loại bỏ dấu câu khỏi chuỗi truy vấn
    const cleanQuery = query.replace(/[,\.;:?!()\[\]{}]/g, ' ');
    const words = cleanQuery.trim().split(/\s+/).filter(Boolean);
    
    if (words.length === 0) return escapeHTML(safeText);

    const escapedWords = words.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const regex = new RegExp(`(${escapedWords.join('|')})`, 'gi');
    
    const parts = safeText.split(regex);
    return parts.map((part, i) => {
        if (i % 2 === 1) {
            return `<mark class="bg-amber-500/30 text-amber-300 font-bold px-0.5 rounded">${escapeHTML(part)}</mark>`;
        }
        return escapeHTML(part);
    }).join('');
}


function removeAccents(str) {
    return (str || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

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

const getVal = (id) => document.getElementById(id)?.value ?? '';

function getFilterVal(id) {
    const el = document.getElementById(id);
    if (!el) return '';
    const val = el.value !== undefined ? el.value : '';
    const text = el.selectedIndex >= 0 ? el.options[el.selectedIndex].text : '';
    const combined = removeAccents(val + ' ' + text);
    if (combined.includes('tat ca') || combined.includes('--') || combined === '') {
        return '';
    }
    return val || text;
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

function updateLuanTri(query = "") {
    if (AppState.quizActive || typeof database === 'undefined' || !database) return;

    const tp = getFilterVal('tang-phu');
    const hn = getFilterVal('han-nhiet');
    const ht = getFilterVal('hu-thuc');
    const bc = getFilterVal('benh-co');
    const searchInput = getVal('search-input').toLowerCase().trim();
    const activeQuery = query || searchInput;
    // Làm sạch dấu câu trước khi tách mảng từ khóa
const cleanActiveQuery = activeQuery.replace(/[,\.;:?!()\[\]{}]/g, ' ');
const queryWords = cleanActiveQuery ? cleanActiveQuery.split(/\s+/).filter(Boolean) : [];
    let bestMatchData = null;
    let maxScore = -1;

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
        } else {
            matchCount = 1;
        }

        if (matchCount > maxScore) {
            maxScore = matchCount;
            bestMatchData = item;
        }
    }

    renderDetailLuanTri(bestMatchData, activeQuery);
}

function renderDetailLuanTri(data, query = "", isEnter = false) {
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

        // Tích hợp AI Backup phân tích sâu Hội chứng & Cổ phương
        const aiCheck = document.getElementById('ai-backup-luantri');
        const aiHcEl = document.getElementById('ai-hc-desc');
        const aiBtEl = document.getElementById('ai-bt-desc');
        
        if (aiCheck && aiCheck.checked && data.hc) {
            fetchLuanTriAIBackup(data.hc, data.bt);
        } else {
            if (aiHcEl) aiHcEl.classList.add('hidden');
            if (aiBtEl) aiBtEl.classList.add('hidden');
        }

    } else {
        if (query && document.getElementById('ai-backup-luantri')?.checked) {
            fetchAIBackupResult(query, 'Luận Trị Biện Chứng', ul);
            if (hcEl) hcEl.innerHTML = `<span class='text-amber-400 font-bold text-base'>🔍 Đang tra cứu AI Backup cho: "${escapeHTML(query)}"</span>`;
            if (pdtEl) pdtEl.innerText = "---";
            if (btEl) btEl.innerText = "---";
            if (divBt) divBt.innerHTML = "";
            if (warningContainer) warningContainer.innerHTML = "";
            return;
        }

        if (query && isEnter) xuLyKhongTimThay('Luận Trị', query);

        const msg = (query && isEnter)
            ? `<i class='fa-solid fa-paper-plane text-[10px]'></i> Đã tự động ghi nhận từ khóa "${escapeHTML(query)}" để bổ sung dữ liệu.`
            : (query ? `<i class='fa-solid fa-keyboard text-[10px]'></i> Nhấn <kbd class="px-1 py-0.5 bg-stone-800 border border-stone-700 rounded text-amber-400 font-mono">Enter</kbd> để gửi từ khóa "${escapeHTML(query)}".` : '');

        if (hcEl) hcEl.innerHTML = "<span class='text-stone-500 font-normal text-base'><i class='fa-solid fa-circle-exclamation mr-1 text-amber-500'></i>Không tìm thấy hội chứng phù hợp</span>";
        if (pdtEl) pdtEl.innerText = "---";
        if (btEl) btEl.innerText = "---";
        if (ul) ul.innerHTML = `<li class='text-amber-500/80 italic text-xs col-span-full flex items-center gap-1.5'>${msg}</li>`;
        if (divBt) divBt.innerHTML = "";
        if (warningContainer) warningContainer.innerHTML = "";
    }

    ['lt-card-hc', 'lt-card-pdt', 'lt-card-bt'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            if (AppState.isQuizLT) {
                el.classList.add('blur-md', 'transition-all', 'duration-300', 'cursor-pointer');
                el.title = "Bấm vào để lật xem đáp án";
                el.onclick = () => el.classList.remove('blur-md');
            } else {
                el.classList.remove('blur-md', 'cursor-pointer');
                el.title = "";
                el.onclick = null;
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
            spacer.style.transition = 'height 0.2s ease';
            searchWrapper.parentElement.insertBefore(spacer, searchWrapper.nextSibling);
        }
    }
    if (spacer) {
        spacer.style.height = show ? '240px' : '0px';
    }

    const dropdown = document.getElementById('search-dropdown');
    if (dropdown) {
        dropdown.style.zIndex = '99999';
        dropdown.style.position = 'absolute';
        dropdown.style.width = '100%';
    }
}

function searchLuanTri(isEnter = false) {
    if (AppState.quizActive) stopQuizMode();

    const input = document.getElementById('search-input');
    const dropdown = document.getElementById('search-dropdown');
    const queryStr = (input ? input.value : '').toLowerCase().trim();
    
    // Làm sạch dấu câu để tách mảng từ khóa chính xác (khắc phục lỗi dính dấu phẩy, chấm)
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
        updateLuanTri(queryStr);
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
    setDropdownSpacer(false);
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

function xuLyKhongTimThay(tabName, query) {
    if (!query || query.trim().length < 2) return;
    const cleanQuery = query.trim();
    const timeStr = new Date().toLocaleString('vi-VN');

    const params = new URLSearchParams();
    params.append('form-name', 'gop-y-yhct');
    params.append('hoten', 'Hệ thống tự động');
    params.append('email', 'system@luantriyhct.com');
    params.append('chude', `Từ khóa thiếu: ${tabName}`);
    params.append('noidung', `Từ khóa chưa có dữ liệu: "${cleanQuery}" (Thời gian: ${timeStr})`);

    fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString()
    }).catch(err => {
        console.error("Lỗi kết nối khi gửi phản hồi từ khóa thiếu:", err);
    });

    hienThongBaoGhiNhan(tabName, cleanQuery);
}

function hienThongBaoGhiNhan(tabName, query) {
    let toast = document.getElementById('feedback-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'feedback-toast';
        toast.className = 'fixed top-4 right-4 z-50 bg-amber-950/95 border border-amber-600/80 text-amber-200 text-xs px-4 py-3 rounded-lg shadow-2xl flex items-center gap-2.5 transition-all duration-300 transform -translate-y-2 opacity-0';
        document.body.appendChild(toast);
    }
    
    toast.innerHTML = `<i class="fa-solid fa-paper-plane text-amber-400 text-sm"></i> <span>Đã gửi phản hồi từ khóa <strong class="text-white">"${escapeHTML(query)}"</strong> (${tabName}) về hệ thống!</span>`;
    
    requestAnimationFrame(() => {
        toast.classList.remove('-translate-y-2', 'opacity-0');
        toast.classList.add('translate-y-0', 'opacity-100');
    });

    setTimeout(() => {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('-translate-y-2', 'opacity-0');
    }, 3500);
}
async function fetchLuanTriAIBackup(hcName, btName) {
    const aiHcEl = document.getElementById('ai-hc-desc');
    const aiBtEl = document.getElementById('ai-bt-desc');
    
    if (aiHcEl) {
        aiHcEl.classList.remove('hidden');
        aiHcEl.innerHTML = `<div class="text-amber-400/80 italic flex items-center gap-1.5"><i class="fa-solid fa-brain fa-spin"></i> AI đang phân tích sâu về hội chứng...</div>`;
    }
    if (aiBtEl && btName && btName !== "Đối chứng nghiệm phương") {
        aiBtEl.classList.remove('hidden');
        aiBtEl.innerHTML = `<div class="text-amber-400/80 italic flex items-center gap-1.5"><i class="fa-solid fa-brain fa-spin"></i> AI đang tra cứu nguồn gốc và đặc điểm cổ phương...</div>`;
    } else if (aiBtEl) {
        aiBtEl.classList.add('hidden');
    }

    try {
        const prompt = `Trong Y học cổ truyền (YHCT), hãy phân tích ngắn gọn, chuẩn chuyên môn cho 2 phần sau:
        PART1: Mô tả chi tiết về hội chứng "${hcName}" (cơ chế bệnh sinh, nguyên nhân cốt lõi, biểu hiện lâm sàng đặc trưng).
        PART2: Nguồn gốc, xuất xứ và đặc điểm nổi bật của cổ phương/bài thuốc "${btName}".
        Yêu cầu dùng từ "PART2:" để phân tách rõ ràng hai phần.`;

        const res = await fetch('/.netlify/functions/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt, source: 'backup' })
        });
        const data = await res.json();
        if (res.ok && data.reply) {
            const parts = data.reply.split('PART2:');
            const hcText = parts[0] ? parts[0].replace('PART1:', '').trim() : data.reply;
            const btText = parts[1] ? parts[1].trim() : '';

            if (aiHcEl) {
                aiHcEl.innerHTML = `
                    <div class="font-bold text-amber-400 mb-1 flex items-center gap-1"><i class="fa-solid fa-robot"></i> Mô tả chi tiết hội chứng:</div>
                    <div class="space-y-1">${formatAIMessage(hcText)}</div>
                `;
            }
            if (aiBtEl && btName && btName !== "Đối chứng nghiệm phương") {
                aiBtEl.innerHTML = `
                    <div class="font-bold text-amber-400 mb-1 flex items-center gap-1"><i class="fa-solid fa-robot"></i> Nguồn gốc & đặc điểm cổ phương:</div>
                    <div class="space-y-1">${formatAIMessage(btText || 'Đang cập nhật thông tin bài thuốc.')}</div>
                `;
            }
        } else {
            if (aiHcEl) aiHcEl.innerHTML = `<span class="text-stone-500">Không tải được mô tả AI cho hội chứng.</span>`;
            if (aiBtEl) aiBtEl.innerHTML = `<span class="text-stone-500">Không tải được thông tin cổ phương từ AI.</span>`;
        }
    } catch (err) {
        console.error("Lỗi AI Backup Luận Trị:", err);
        if (aiHcEl) aiHcEl.innerHTML = `<span class="text-red-400">Lỗi kết nối AI khi lấy mô tả hội chứng.</span>`;
        if (aiBtEl) aiBtEl.innerHTML = `<span class="text-red-400">Lỗi kết nối AI khi lấy thông tin cổ phương.</span>`;
    }
}
function filterDuocLieu(isEnter = false) {
    const grid = document.getElementById('gridDuocLieu'); 
    if (!grid) return; 

    if (typeof duocLieuData === 'undefined' || !duocLieuData) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-14 space-y-2 text-stone-500">
                <i class="fa-solid fa-spinner fa-spin text-3xl opacity-40 block mb-1 text-amber-500"></i>
                <p class="text-sm font-medium">Đang tải dữ liệu dược liệu...</p>
            </div>
        `;
        return;
    }

    const txtRaw = getVal('searchDuocLieu').trim().normalize('NFC');
    const txt = txtRaw.toLowerCase();
    const cleanTxt = txt.replace(/[,\.;:?!()\[\]{}]/g, ' ');
    const queryWords = cleanTxt ? cleanTxt.split(/\s+/).filter(Boolean) : [];
    const group = getVal('filterNhomDuocLieu');
    grid.innerHTML = "";
    
    const scoredData = [];

    duocLieuData.forEach(d => {
        if (!d) return;
        const nhom = d.nhom || '';
        if (group !== "" && nhom !== group) return;

        if (queryWords.length === 0) {
            scoredData.push({ item: d, score: 1 });
            return;
        }

        const ten = (d.ten || '').toLowerCase().normalize('NFC');
        const tenKhac = (d.ten_khac || '').toLowerCase().normalize('NFC');
        const congDung = (d.cong_dung || '').toLowerCase().normalize('NFC');
        const kiengKy = (d.kieng_ky || d.dac_tinh || d.chong_chi_dinh || d.luu_y || '').toLowerCase().normalize('NFC');
        const fullText = `${ten} ${tenKhac} ${congDung} ${kiengKy}`;

        let matchCount = 0;
        queryWords.forEach(word => {
            if (fullText.includes(word)) {
                matchCount++;
                if (ten.includes(word)) matchCount += 0.5;
            }
        });

        if (matchCount > 0) {
            scoredData.push({ item: d, score: matchCount });
        }
    });

    scoredData.sort((a, b) => b.score - a.score);
    const filteredData = scoredData.map(s => s.item);

    if (filteredData.length === 0) {
        if (txtRaw && document.getElementById('ai-backup-duoclieu')?.checked) {
            fetchAIBackupResult(txtRaw, 'Dược Liệu YHCT', grid);
            return;
        }

        if (txtRaw && isEnter) xuLyKhongTimThay('Dược Liệu', txtRaw);

        const feedbackMsg = (txtRaw && isEnter) 
            ? `<p class="text-xs text-amber-500/90 font-medium"><i class="fa-solid fa-paper-plane mr-1"></i>Đã tự động gửi phản hồi từ khóa "${escapeHTML(txtRaw)}" về hệ thống.</p>`
            : (txtRaw ? `<p class="text-xs text-stone-500 font-medium"><i class="fa-solid fa-keyboard mr-1"></i>Nhấn <kbd class="px-1 py-0.5 bg-stone-800 border border-stone-700 rounded text-amber-400 font-mono">Enter</kbd> để gửi từ khóa "${escapeHTML(txtRaw)}" về hệ thống.</p>` : '');

        grid.innerHTML = `
            <div class="col-span-full text-center py-14 space-y-2 text-stone-500">
                <i class="fa-solid fa-magnifying-glass-blur text-3xl opacity-40 block mb-1"></i>
                <p class="text-sm font-medium">Không tìm thấy dược liệu phù hợp</p>
                ${feedbackMsg}
            </div>
        `;
        return;
    }
            
    const frag = document.createDocumentFragment();
    filteredData.slice(0, 50).forEach(d => {
        let card = document.createElement('div'); 
        card.className = "bg-dark-box p-4 rounded-lg space-y-3 relative cursor-pointer border-l-4 border-emerald-600/70 hover:scale-[1.01] transition-all duration-150 shadow-md shadow-black/40";
        
        const kiengKy = d.kieng_ky || d.dac_tinh || d.chong_chi_dinh || d.luu_y || "";
        const boxHTML = kiengKy ? `
            <div class="bg-red-950/20 border border-red-900/40 p-2.5 rounded-md text-xs leading-relaxed mt-1">
                <div class="text-red-500 text-[10px] font-bold tracking-wider uppercase flex items-center gap-1 mb-0.5">
                    <i class="fa-solid fa-triangle-exclamation text-[9px]"></i> KIÊNG KỴ LÂM SÀNG:
                </div>
                <p class="text-red-400/90 font-medium">${highlightText(kiengKy, txtRaw)}</p>
            </div>
        ` : `
            <div class="bg-stone-950/50 border border-stone-900 p-2.5 rounded-md text-xs leading-relaxed mt-1">
                <div class="text-emerald-600/90 text-[10px] font-bold tracking-wider uppercase flex items-center gap-1 mb-0.5">
                    <i class="fa-solid fa-circle-info text-[9px]"></i> LƯU Ý LÂM SÀNG:
                </div>
                <p class="text-stone-400 font-medium">Tuân thủ liều lượng phối ngũ tiêu chuẩn theo y lệnh.</p>
            </div>
        `;

        const blurDL = AppState.isQuizDL ? 'blur-md transition-all duration-300' : '';

        card.innerHTML = `
            <div class="absolute top-0 right-0 bg-emerald-950 text-emerald-400 font-bold px-2 py-0.5 text-[10px] uppercase rounded-bl border-b border-l border-stone-800/60 tracking-wider">${escapeHTML(d.nhom || 'Dược liệu')}</div>
            <div class="mb-2">
                <span class="font-bold text-emerald-400 text-base inline-flex items-center gap-1.5 cursor-pointer hover:underline card-title-el">
                    <i class="fa-solid fa-leaf text-xs"></i> ${highlightText(d.ten || '', txtRaw)}
                </span>
            </div>
            <div class="blur-target ${blurDL} transition-all duration-300">
                <div>
                    <div class="text-stone-500 text-[10px] font-bold tracking-wider uppercase">CÔNG NĂNG CHỦ TRỊ:</div>
                    <p class="text-sm text-stone-300 leading-relaxed mt-0.5">${highlightText(d.cong_dung || '', txtRaw)}</p>
                </div>
                <div class="mt-2">${boxHTML}</div>
            </div>
        `;

        card.onclick = (e) => {
            const isTitle = e.target.closest('.card-title-el');
            if (AppState.isQuizDL) {
                const blurEl = card.querySelector('.blur-target');
                if (blurEl) blurEl.classList.remove('blur-md');
                if (isTitle) kichHoatTimAnh(d.ten || '');
            } else {
                if (isTitle) kichHoatTimAnh(d.ten || '');
            }
        };

        frag.appendChild(card);
    });
    grid.appendChild(frag);
}

function filterHuyetVi(isEnter = false) {
    const grid = document.getElementById('gridHuyetVi'); 
    if (!grid) return; 

    if (typeof huyetViData === 'undefined' || !huyetViData) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-14 space-y-2 text-stone-500">
                <i class="fa-solid fa-spinner fa-spin text-3xl opacity-40 block mb-1 text-amber-500"></i>
                <p class="text-sm font-medium">Đang tải dữ liệu huyệt vị...</p>
            </div>
        `;
        return;
    }

    const txtRaw = getVal('searchHuyetVi').trim();
    const txt = txtRaw.toLowerCase();
    const cleanTxt = txt.replace(/[,\.;:?!()\[\]{}]/g, ' ');
    const queryWords = cleanTxt ? cleanTxt.split(/\s+/).filter(Boolean) : [];    
    const kinh = getVal('filterKinhLac');
    grid.innerHTML = "";
    
    const getKinhTheme = (kinhName) => {
        const k = (kinhName || '').toLowerCase();
        if (k.includes('phế') || k.includes('đại trường')) return { border: 'border-l-4 border-sky-500', bgBox: 'bg-sky-950/40 border-sky-900/60', text: 'text-sky-400', textLight: 'text-sky-200/90', tag: 'bg-sky-950 text-sky-400' };
        if (k.includes('can') || k.includes('đởm')) return { border: 'border-l-4 border-emerald-500', bgBox: 'bg-emerald-950/40 border-emerald-900/60', text: 'text-emerald-400', textLight: 'text-emerald-200/90', tag: 'bg-emerald-950 text-emerald-400' };
        if (k.includes('tỳ') || k.includes('vị')) return { border: 'border-l-4 border-amber-500', bgBox: 'bg-amber-950/40 border-amber-900/60', text: 'text-amber-400', textLight: 'text-amber-200/90', tag: 'bg-amber-950 text-amber-400' };
        if (k.includes('tâm') || k.includes('tiểu trường') || k.includes('tiêu') || k.includes('bào')) return { border: 'border-l-4 border-rose-500', bgBox: 'bg-rose-950/40 border-rose-900/60', text: 'text-rose-400', textLight: 'text-rose-200/90', tag: 'bg-rose-950 text-rose-400' };
        if (k.includes('thận') || k.includes('bàng quang')) return { border: 'border-l-4 border-indigo-500', bgBox: 'bg-indigo-950/40 border-indigo-900/60', text: 'text-indigo-400', textLight: 'text-indigo-200/90', tag: 'bg-indigo-950 text-indigo-400' };
        return { border: 'border-l-4 border-teal-500', bgBox: 'bg-teal-950/40 border-teal-900/60', text: 'text-teal-400', textLight: 'text-teal-200/90', tag: 'bg-teal-950 text-teal-400' };
    };

    const scoredData = [];
    huyetViData.forEach(h => {
        if (!h) return;
        const matchKinh = (kinh === "" || h.kinh === kinh);
        if (!matchKinh) return;

        if (queryWords.length === 0) {
            scoredData.push({ item: h, score: 1 });
            return;
        }

        const ten = (h.ten || '').toLowerCase();
        const chuTri = (h.chu_tri || '').toLowerCase();
        const viTri = (h.vi_tri || '').toLowerCase();
        const dinhVi = (h.dinh_vi || '').toLowerCase();
        const kinhName = (h.kinh || '').toLowerCase();
        const fullText = `${ten} ${chuTri} ${viTri} ${dinhVi} ${kinhName}`;

        let matchCount = 0;
        queryWords.forEach(word => {
            if (fullText.includes(word)) {
                matchCount++;
                if (ten.includes(word)) matchCount += 0.5;
            }
        });

        if (matchCount > 0) {
            scoredData.push({ item: h, score: matchCount });
        }
    });

    scoredData.sort((a, b) => b.score - a.score);
    const filteredData = scoredData.map(s => s.item);

    if (filteredData.length === 0) {
        if (txtRaw && document.getElementById('ai-backup-huyetvi')?.checked) {
            fetchAIBackupResult(txtRaw, 'Huyệt Vị YHCT', grid);
            return;
        }

        if (txtRaw && isEnter) xuLyKhongTimThay('Huyệt Vị', txtRaw);

        const feedbackMsg = (txtRaw && isEnter) 
            ? `<p class="text-xs text-amber-500/90 font-medium"><i class="fa-solid fa-paper-plane mr-1"></i>Đã tự động gửi phản hồi từ khóa "${escapeHTML(txtRaw)}" về hệ thống.</p>`
            : (txtRaw ? `<p class="text-xs text-stone-500 font-medium"><i class="fa-solid fa-keyboard mr-1"></i>Nhấn <kbd class="px-1 py-0.5 bg-stone-800 border border-stone-700 rounded text-amber-400 font-mono">Enter</kbd> để gửi từ khóa "${escapeHTML(txtRaw)}" về hệ thống.</p>` : '');

        grid.innerHTML = `
            <div class="col-span-full text-center py-14 space-y-2 text-stone-500">
                <i class="fa-solid fa-magnifying-glass-blur text-3xl opacity-40 block mb-1"></i>
                <p class="text-sm font-medium">Không tìm thấy huyệt vị phù hợp</p>
                ${feedbackMsg}
            </div>
        `;
        return;
    }

    const frag = document.createDocumentFragment();
    filteredData.slice(0, 50).forEach(h => {
        const theme = getKinhTheme(h.kinh);
        let card = document.createElement('div'); 
        card.className = `bg-dark-box p-4 rounded-lg space-y-3 relative cursor-pointer ${theme.border} shadow-md shadow-black/40`;
        
        const blurHV = AppState.isQuizHV ? 'blur-md transition-all duration-300' : '';

        card.innerHTML = `
            <div class="absolute top-0 right-0 ${theme.tag} font-bold px-2 py-0.5 text-[9px] uppercase rounded-bl border-b border-l border-stone-800/60">${escapeHTML(h.kinh || '')}</div>
            <div class="mb-2">
                <span class="font-bold ${theme.text} text-base inline-flex items-center gap-1.5 cursor-pointer hover:underline card-title-el">
                    <i class="fa-solid fa-circle-dot text-xs"></i> Huyệt ${highlightText(h.ten || '', txtRaw)}
                </span>
            </div>
            <div class="blur-target ${blurHV} transition-all duration-300">
                <div>
                    <div class="text-stone-500 text-[10px] font-bold tracking-wider uppercase">ĐỊNH VỊ GIẢI PHẪU:</div>
                    <p class="text-xs text-stone-400 mt-0.5 leading-relaxed">${highlightText(h.vi_tri || h.dinh_vi || 'Đang cập nhật', txtRaw)}</p>
                </div>
                <div class="${theme.bgBox} border p-2.5 rounded-md mt-1.5">
                    <div class="${theme.text} text-[10px] font-bold tracking-wider uppercase flex items-center gap-1">
                        <i class="fa-solid fa-kit-medical text-[9px]"></i> CHỦ TRỊ ĐẶC HIỆU:
                    </div>
                    <p class="text-sm ${theme.textLight} font-medium mt-0.5 leading-relaxed">${highlightText(h.chu_tri || '', txtRaw)}</p>
                </div>
            </div>
        `;

        card.onclick = (e) => {
            const isTitle = e.target.closest('.card-title-el');
            if (AppState.isQuizHV) {
                const blurEl = card.querySelector('.blur-target');
                if (blurEl) blurEl.classList.remove('blur-md');
                if (isTitle) kichHoatTimAnh('Huyệt ' + (h.ten || ''));
            } else {
                if (isTitle) kichHoatTimAnh('Huyệt ' + (h.ten || ''));
            }
        };

        frag.appendChild(card);
    });
    grid.appendChild(frag);
}


function filterTra(isEnter = false) {
    const grid = document.getElementById('gridTra'); 
    if (!grid) return; 

    if (typeof traData === 'undefined' || !traData) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-14 space-y-2 text-stone-500">
                <i class="fa-solid fa-spinner fa-spin text-3xl opacity-40 block mb-1 text-amber-500"></i>
                <p class="text-sm font-medium">Đang tải dữ liệu trà dược...</p>
            </div>
        `;
        return;
    }

    const txtRaw = getVal('searchTra').trim();
    const txt = txtRaw.toLowerCase();
    const cleanTxt = txt.replace(/[,\.;:?!()\[\]{}]/g, ' ');
    const queryWords = cleanTxt ? cleanTxt.split(/\s+/).filter(Boolean) : [];    
    let expandedWords = [...queryWords];
    if (txt.includes('dành dành') && !expandedWords.includes('chi tử')) {
        expandedWords.push('chi tử');
    } else if (txt.includes('chi tử') && !expandedWords.includes('dành dành')) {
        expandedWords.push('dành dành');
    }

    const nhom = getVal('filterNhomTra');
    grid.innerHTML = "";

    const scoredData = [];

    traData.forEach(t => {
        if (!t) return;
        const nhomItem = t.nhom || '';
        if (nhom !== "" && nhomItem !== nhom) return;

        if (expandedWords.length === 0) {
            scoredData.push({ item: t, score: 1 });
            return;
        }

        const ten = (t.ten || '').toLowerCase();
        const congDung = (t.cong_dung || '').toLowerCase();
        const cachDung = (t.cach_dung || '').toLowerCase();
        const thanhPhan = (t.thanh_phan || []).join(' ').toLowerCase();
        const fullText = `${ten} ${congDung} ${cachDung} ${thanhPhan}`;

        let matchCount = 0;
        expandedWords.forEach(word => {
            if (fullText.includes(word)) {
                matchCount++;
                if (ten.includes(word)) matchCount += 0.5;
            }
        });

        if (matchCount > 0) {
            scoredData.push({ item: t, score: matchCount });
        }
    });

    scoredData.sort((a, b) => b.score - a.score);
    const filteredData = scoredData.map(s => s.item);

    if (filteredData.length === 0) {
        if (txtRaw && document.getElementById('ai-backup-tra')?.checked) {
            fetchAIBackupResult(txtRaw, 'Trà Dược YHCT', grid);
            return;
        }

        if (txtRaw && isEnter) xuLyKhongTimThay('Trà Dược', txtRaw);

        const feedbackMsg = (txtRaw && isEnter) 
            ? `<p class="text-xs text-amber-500/90 font-medium"><i class="fa-solid fa-paper-plane mr-1"></i>Đã tự động gửi phản hồi từ khóa "${escapeHTML(txtRaw)}" về hệ thống.</p>`
            : (txtRaw ? `<p class="text-xs text-stone-500 font-medium"><i class="fa-solid fa-keyboard mr-1"></i>Nhấn <kbd class="px-1 py-0.5 bg-stone-800 border border-stone-700 rounded text-amber-400 font-mono">Enter</kbd> để gửi từ khóa "${escapeHTML(txtRaw)}" về hệ thống.</p>` : '');

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
        
        const tagsHtml = (t.thanh_phan || []).map(tp => 
            `<button onclick="xemDuocLieu('${escapeHTML(tp)}')" class="bg-stone-800 text-amber-400/90 font-semibold text-xs px-2.5 py-1 rounded border border-stone-700/60 flex items-center gap-1 shadow-sm shadow-black/20 hover:border-amber-500 active:scale-95 transition-all">
                <i class="fa-solid fa-leaf text-[10px] text-emerald-500"></i> ${highlightText(tp, txtRaw)}
            </button>`
        ).join(' ');

        card.innerHTML = `
            <div class="absolute top-0 right-0 bg-amber-950 text-amber-500 text-[10px] font-bold px-2 py-0.5 rounded-bl uppercase tracking-wider">${escapeHTML(t.nhom || '')}</div>
            <h3 class="font-bold text-amber-500 text-base">☕ ${highlightText(t.ten || '', txtRaw)}</h3>
            <div>
                <div class="text-stone-500 text-[10px] font-bold tracking-wider uppercase">CÔNG DỤNG CHÍNH:</div>
                <p class="text-sm text-stone-300 leading-relaxed mt-0.5">${highlightText(t.cong_dung || '', txtRaw)}</p>
            </div>
            <div class="bg-amber-950/30 border border-amber-900/50 p-2.5 rounded-md text-xs leading-relaxed">
                <div class="text-amber-500 text-[10px] font-bold tracking-wider uppercase flex items-center gap-1 mb-0.5">
                    <i class="fa-solid fa-lightbulb text-[9px]"></i> CÁCH PHA & DÙNG:
                </div>
                <p class="font-medium text-amber-200/90">${highlightText(t.cach_dung || '', txtRaw)}</p>
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


window.addEventListener("DOMContentLoaded", () => {
    const setupBox = document.getElementById('quiz-setup');
    if (setupBox) {
        if (!document.getElementById('use-quiz-timer')) {
            const aiCheckContainer = setupBox.querySelector('label') || setupBox.querySelector('input[type="checkbox"]')?.parentElement;
            if (aiCheckContainer) {
                const timerDiv = document.createElement('div');
                timerDiv.className = "flex items-center justify-between gap-2 pt-2 pb-1 border-t border-stone-800/80 mt-2";
                timerDiv.innerHTML = `
                    <label class="flex items-center gap-2 text-xs text-stone-300 cursor-pointer select-none">
                        <input type="checkbox" id="use-quiz-timer" class="w-4 h-4 rounded border-stone-700 bg-stone-900 text-amber-600 focus:ring-amber-500">
                        <span>⏱️ Giới hạn thời gian mỗi câu</span>
                    </label>
                    <select id="quiz-time-per-question" class="bg-stone-900 text-stone-200 border border-stone-800 rounded-lg px-2 py-1 text-xs focus:border-amber-500 outline-none">
                        <option value="15">15 giây</option>
                        <option value="30" selected>30 giây</option>
                        <option value="45">45 giây</option>
                        <option value="60">60 giây</option>
                    </select>
                `;
                aiCheckContainer.parentNode.insertBefore(timerDiv, aiCheckContainer.nextSibling);
            }
        }
        originalQuizSetupHTML = setupBox.innerHTML;
    }

    requestAnimationFrame(() => {
        try {
            capNhatTongSoTrieuChung();
            capNhatTongSoTracNghiem();

            if (typeof duocLieuData !== 'undefined' && duocLieuData) {
                const el = document.getElementById('total-thuoc');
                if (el) el.textContent = duocLieuData.length;
            }
            if (typeof huyetViData !== 'undefined' && huyetViData) {
                const el = document.getElementById('total-huyet');
                if (el) el.textContent = huyetViData.length;
            }
            if (typeof traData !== 'undefined' && traData) {
                const el = document.getElementById('total-tra');
                if (el) el.textContent = traData.length;
            }
        } catch (err) {
            console.error("Lỗi khởi tạo:", err);
        }
        const savedTab = localStorage.getItem('activeTab') || 'luantri';
        switchTab(savedTab);
        const loader = document.getElementById('app-loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 300);
        }
    });

    ['tang-phu', 'han-nhiet', 'hu-thuc', 'benh-co'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('change', () => {
                searchLuanTri();
                const dropdown = document.getElementById('search-dropdown');
                if (dropdown) {
                    dropdown.classList.remove('hidden');
                    setDropdownSpacer(true);
                }
            });
        }
    });
});

async function switchTab(tabName) {
    if (tabName === 'luantri') await loadScript('luantridata.js');
    if (tabName === 'duoclieu') await loadScript('duoclieudata.js');
    if (tabName === 'huyetvi') await loadScript('huyetvidata.js');
    if (tabName === 'tra') await loadScript('tradata.js');
    if (tabName === 'tracnghiem') await loadScript('questiondata.js');

    if (tabName !== 'xemanh') {
        localStorage.setItem('activeTab', tabName);
    }

    const tabs = ['luantri', 'tracnghiem', 'duoclieu', 'huyetvi', 'tra', 'xemanh', 'ai'];
    const pascalMap = { 
        luantri: 'LuanTri', 
        tracnghiem: 'TracNghiem', 
        duoclieu: 'DuocLieu', 
        huyetvi: 'HuyetVi', 
        tra: 'Tra', 
        xemanh: 'XemAnh',
        ai: 'AI'
    };

    tabs.forEach(t => {
        const pascalCase = pascalMap[t];
        const section = document.getElementById('section' + pascalCase);
        const btn = document.getElementById('btnTab' + pascalCase);

        if (t === tabName) {
            if (section) {
                section.classList.remove('hidden');
                section.style.opacity = '0';
                section.style.transform = 'translateY(6px)';
                section.style.transition = 'all 0.15s ease';
                requestAnimationFrame(() => {
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                });
            }
            if (btn) btn.classList.add('tab-active', 'text-primary');

            if (t === 'luantri') {
                capNhatTongSoTrieuChung();
                updateLuanTri();
            }
            if (t === 'duoclieu') filterDuocLieu();
            if (t === 'huyetvi') filterHuyetVi();
            if (t === 'tra') filterTra();
            if (t === 'tracnghiem') capNhatDiemGanNhat();

        } else {
            if (section) section.classList.add('hidden');
            if (btn) btn.classList.remove('tab-active', 'text-primary');
        }
    });
}

let currentQuizQuestions = [];
let currentQuizIndex = 0;
let quizScore = 0;
let userAnswers = [];

function capNhatDiemGanNhat() {
    let history = [];
    try {
        history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
        if (!Array.isArray(history)) history = [];
    } catch (e) {
        history = [];
    }
    
    const el = document.getElementById('quiz-last-score');
    if (el && history.length > 0) {
        el.innerHTML = `⏱️ Lần gần nhất (${history[0].date}): <strong class="text-amber-400">${history[0].score}</strong> (${history[0].percent})`;
    }
}

function taoCauHoiTamTuDuLieu(category) {
    let generated = [];
    const getRandomWrongOptions = (sourceArray, correctValue, count) => {
        const wrongOptions = [];
        const maxTries = count * 5;
        let tries = 0;
        while (wrongOptions.length < count && tries < maxTries) {
            const randomVal = sourceArray[Math.floor(Math.random() * sourceArray.length)];
            if (randomVal !== correctValue && !wrongOptions.includes(randomVal)) {
                wrongOptions.push(randomVal);
            }
            tries++;
        }
        return wrongOptions;
    };

    if ((category === 'luantri' || category === 'all') && typeof database !== 'undefined') {
        const allHC = Object.values(database).map(d => d.hc).filter(Boolean);
        Object.keys(database).forEach(key => {
            const item = database[key];
            if (item && item.hc && item.tc && item.tc.length > 0) {
                const wrongOptions = getRandomWrongOptions(allHC, item.hc, 3);
                if (wrongOptions.length >= 3) {
                    const options = [item.hc, ...wrongOptions].sort(() => 0.5 - Math.random());
                    generated.push({
                        category: 'luantri',
                        cau_hoi: `Triệu chứng lâm sàng: "${item.tc.slice(0, 3).join(', ')}..." định hướng đến hội chứng nào?`,
                        lua_chon: options,
                        dap_an: options.indexOf(item.hc),
                        giai_thich: `Biện chứng: ${item.hc} (Pháp trị: ${item.pdt || 'Chưa rõ'})`
                    });
                }
            }
        });
    }

    if ((category === 'duoclieu' || category === 'all') && typeof duocLieuData !== 'undefined' && Array.isArray(duocLieuData)) {
        const allCongDung = duocLieuData.map(item => item.cong_dung).filter(Boolean);
        duocLieuData.forEach(d => {
            if (d && d.ten && d.cong_dung) {
                const wrongOptions = getRandomWrongOptions(allCongDung, d.cong_dung, 3);
                if (wrongOptions.length >= 3) {
                    const options = [d.cong_dung, ...wrongOptions].sort(() => 0.5 - Math.random());
                    generated.push({
                        category: 'duoclieu',
                        cau_hoi: `Vị thuốc "${d.ten}" có công năng chủ trị chính là gì?`,
                        lua_chon: options,
                        dap_an: options.indexOf(d.cong_dung),
                        giai_thich: `Công năng chuẩn: ${d.cong_dung}`
                    });
                }
            }
        });
    }

    if ((category === 'huyetvi' || category === 'all') && typeof huyetViData !== 'undefined' && Array.isArray(huyetViData)) {
        const allChuTri = huyetViData.map(item => item.chu_tri).filter(Boolean);
        huyetViData.forEach(h => {
            if (h && h.ten && h.chu_tri) {
                const wrongOptions = getRandomWrongOptions(allChuTri, h.chu_tri, 3);
                if (wrongOptions.length >= 3) {
                    const options = [h.chu_tri, ...wrongOptions].sort(() => 0.5 - Math.random());
                    generated.push({
                        category: 'huyetvi',
                        cau_hoi: `Huyệt "${h.ten}" có chủ trị đặc hiệu nào sau đây?`,
                        lua_chon: options,
                        dap_an: options.indexOf(h.chu_tri),
                        giai_thich: `Vị trí: ${h.vi_tri || h.dinh_vi || 'Đang cập nhật'}. Chủ trị: ${h.chu_tri}`
                    });
                }
            }
        });
    }

    if ((category === 'tra' || category === 'all') && typeof traData !== 'undefined' && Array.isArray(traData)) {
        const allCongDungTra = traData.map(item => item.cong_dung).filter(Boolean);
        traData.forEach(t => {
            if (t && t.ten && t.cong_dung) {
                const wrongOptions = getRandomWrongOptions(allCongDungTra, t.cong_dung, 3);
                if (wrongOptions.length >= 3) {
                    const options = [t.cong_dung, ...wrongOptions].sort(() => 0.5 - Math.random());
                    generated.push({
                        category: 'tra',
                        cau_hoi: `Công dụng chính của "${t.ten}" là gì?`,
                        lua_chon: options,
                        dap_an: options.indexOf(t.cong_dung),
                        giai_thich: `Thành phần: ${t.thanh_phan ? t.thanh_phan.join(', ') : 'Đang cập nhật'}.`
                    });
                }
            }
        });
    }

    return generated;
}

async function fetchAIQuizQuestions(category, count) {
    try {
        const prompt = `Hãy soạn chính xác ${count} câu hỏi trắc nghiệm khách quan về chuyên đề ${category} trong Y học cổ truyền (YHCT). 
        Yêu cầu trả về đúng định dạng JSON chuẩn gồm một mảng đúng ${count} object với các trường:
        - "cau_hoi": Nội dung câu hỏi lâm sàng hoặc lý luận.
        - "lua_chon": Mảng gồm đúng 4 đáp án (A, B, C, D).
        - "dap_an": Chỉ số đáp án đúng (từ 0 đến 3 ứng với 4 lựa chọn).
        - "giai_thich": Giải thích chi tiết ngắn gọn vì sao đáp án đó chính xác.
        Chỉ trả về định dạng JSON thuần túy, không kèm theo chữ giải thích nào khác ngoài JSON.`;

        const res = await fetch('/.netlify/functions/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt, source: 'quiz' })
        });

        const data = await res.json();
        if (res.ok && data.reply) {
            let jsonStr = data.reply.trim();
            if (jsonStr.startsWith('```json')) {
                jsonStr = jsonStr.replace(/^```json/, '').replace(/```$/, '').trim();
            } else if (jsonStr.startsWith('```')) {
                jsonStr = jsonStr.replace(/^```/, '').replace(/```$/, '').trim();
            }
            const parsedArray = JSON.parse(jsonStr);
            return Array.isArray(parsedArray) ? parsedArray.slice(0, count) : [];
        }
    } catch (err) {
        console.error("Lỗi khi tạo câu hỏi bằng AI:", err);
    }
    return [];
}

async function batDauTracNghiem() {
    const categorySelect = document.getElementById('quiz-category');
    const countSelect = document.getElementById('quiz-count');
    const useAICheckbox = document.getElementById('use-ai-quiz');
    const useTimerCheckbox = document.getElementById('use-quiz-timer');
    const timeSelect = document.getElementById('quiz-time-per-question');
    
    const category = categorySelect ? categorySelect.value : 'all';
    const count = countSelect ? parseInt(countSelect.value) : 10;
    const isUseAI = useAICheckbox ? useAICheckbox.checked : false;
    
    isTimerEnabled = useTimerCheckbox ? useTimerCheckbox.checked : false;
    timePerQuestion = timeSelect ? parseInt(timeSelect.value) : 30;

    if (isUseAI) {
        const setupBox = document.getElementById('quiz-setup');
        if (setupBox) {
            setupBox.innerHTML = `
                <div class="text-center py-10 space-y-3">
                    <i class="fa-solid fa-brain text-4xl text-amber-500 animate-spin"></i>
                    <p class="text-sm font-bold text-amber-400">Trợ lý AI đang biên soạn bộ câu hỏi lâm sàng mới...</p>
                    <p class="text-xs text-stone-500">Vui lòng đợi trong giây lát</p>
                </div>
            `;
        }
    }

    let pool = [];
    if (isUseAI) {
        pool = await fetchAIQuizQuestions(category, count);
    }

    if (!pool || pool.length === 0) {
        if (isUseAI) {
            alert('AI đang bận hoặc phản hồi chậm, hệ thống chuyển về kho câu hỏi chuẩn có sẵn.');
            location.reload(); 
            return;
        }

        let rawData = [];
        if (typeof questionsData !== 'undefined' && Array.isArray(questionsData)) {
            rawData = [...questionsData];
        } else if (Array.isArray(window.questionsData)) {
            rawData = [...window.questionsData];
        }

        rawData = rawData.concat(taoCauHoiTamTuDuLieu(category));
        pool = category === 'all' ? rawData : rawData.filter(q => q && q.category === category);
    }

    if (pool.length === 0) {
        alert('Không tìm thấy câu hỏi phù hợp.');
        location.reload();
        return;
    }

    let selectedQuestions = [];
    let poolCopy = [...pool];
    let actualCount = Math.min(count, poolCopy.length);

    for (let i = 0; i < actualCount; i++) {
        let randomIndex = Math.floor(Math.random() * poolCopy.length);
        selectedQuestions.push(poolCopy[randomIndex]);
        poolCopy[randomIndex] = poolCopy[poolCopy.length - 1];
        poolCopy.pop();
    }

    currentQuizQuestions = selectedQuestions.map(q => {
        const specialKeywords = ['cả a và b', 'tất cả', 'không có', 'cả hai', 'đều đúng', 'đều sai'];
        const hasSpecialOpt = q.lua_chon && q.lua_chon.some(text => 
            specialKeywords.some(keyword => text.toLowerCase().includes(keyword))
        );

        if (hasSpecialOpt) {
            return { ...q };
        } else {
            const shuffled = q.lua_chon
                .map((text, idx) => ({ text, isCorrect: idx === q.dap_an }))
                .sort(() => 0.5 - Math.random());

            return {
                ...q,
                lua_chon: shuffled.map(item => item.text),
                dap_an: shuffled.findIndex(item => item.isCorrect)
            };
        }
    });

    currentQuizIndex = 0;
    quizScore = 0;
    userAnswers = [];

    document.getElementById('quiz-setup').classList.add('hidden');
    document.getElementById('quiz-result').classList.add('hidden');
    document.getElementById('quiz-review').classList.add('hidden');
    document.getElementById('quiz-play').classList.remove('hidden');

    hienThiCauHoiTracNghiem();
}

function updateTimerDisplay() {
    const progressEl = document.getElementById('quiz-progress');
    if (progressEl) {
        const total = currentQuizQuestions.length;
        const timerColor = quizTimeRemaining <= 5 ? 'text-red-400 animate-pulse font-bold' : 'text-amber-400';
        progressEl.innerHTML = `<i class="fa-solid fa-fire text-amber-500"></i> Câu ${currentQuizIndex + 1}/${total} <span class="ml-3 ${timerColor}"><i class="fa-solid fa-stopwatch"></i> ${quizTimeRemaining}s</span>`;
    }
}

function hienThiCauHoiTracNghiem() {
    if (currentQuizIndex >= currentQuizQuestions.length) {
        hienThiKetQuaTracNghiem();
        return;
    }

    // Tối ưu: Dọn dẹp khoảng thời gian cũ triệt để tránh race condition
    if (quizTimerInterval) {
        clearInterval(quizTimerInterval);
        quizTimerInterval = null;
    }

    const oldFeedback = document.getElementById('quiz-feedback-box');
    if (oldFeedback) oldFeedback.remove();

    const q = currentQuizQuestions[currentQuizIndex];
    const total = currentQuizQuestions.length;
    
    document.getElementById('quiz-score-live').innerHTML = `<i class="fa-solid fa-star text-amber-400 mr-1"></i> Điểm: ${quizScore}`;
    document.getElementById('quiz-question').innerText = q.cau_hoi;

    if (isTimerEnabled) {
        quizTimeRemaining = timePerQuestion;
        updateTimerDisplay();
        quizTimerInterval = setInterval(() => {
            quizTimeRemaining--;
            updateTimerDisplay();
            if (quizTimeRemaining <= 0) {
                if (quizTimerInterval) {
                    clearInterval(quizTimerInterval);
                    quizTimerInterval = null;
                }
                chonDapAnTracNghiem(-1, true); // Hết giờ
            }
        }, 1000);
    } else {
        document.getElementById('quiz-progress').innerHTML = `<i class="fa-solid fa-fire text-amber-500"></i> Câu ${currentQuizIndex + 1}/${total}`;
    }

    const progressBar = document.getElementById('quiz-progress-bar');
    if (progressBar) {
        const percent = ((currentQuizIndex) / total) * 100;
        progressBar.style.width = `${percent}%`;
    }

    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = "";

    q.lua_chon.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = "w-full p-3.5 text-left bg-stone-900/90 hover:bg-stone-800 border border-stone-800 hover:border-amber-500/50 rounded-xl text-xs text-stone-200 transition-all duration-200 flex items-center gap-3 shadow-sm cursor-pointer group";
        btn.innerHTML = `
            <span class="w-6 h-6 rounded-lg bg-stone-800 group-hover:bg-amber-600 group-hover:text-white flex items-center justify-center text-xs font-bold text-amber-400 transition-colors shadow-sm flex-shrink-0">
                ${String.fromCharCode(65 + idx)}
            </span> 
            <span class="leading-relaxed font-medium">${escapeHTML(opt)}</span>
        `;
        btn.onclick = () => chonDapAnTracNghiem(idx, false);
        optionsContainer.appendChild(btn);
    });
}

function chonDapAnTracNghiem(selectedIndex, isTimeout = false) {
    if (quizTimerInterval) {
        clearInterval(quizTimerInterval);
        quizTimerInterval = null;
    }

    const q = currentQuizQuestions[currentQuizIndex];
    const isCorrect = !isTimeout && (selectedIndex === q.dap_an);
    
    if (isCorrect) quizScore++;

    userAnswers.push({
        cau_hoi: q.cau_hoi,
        lua_chon: q.lua_chon,
        dap_an_dung: q.dap_an,
        lua_chon_cua_ban: isTimeout ? undefined : selectedIndex,
        giai_thich: q.giai_thich,
        dung: isCorrect
    });

    const optionsContainer = document.getElementById('quiz-options');
    const buttons = optionsContainer.children;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        buttons[i].classList.add('pointer-events-none', 'opacity-75');
        if (i === q.dap_an) {
            buttons[i].classList.remove('bg-stone-900', 'border-stone-800');
            buttons[i].classList.add('bg-emerald-950/80', 'border-emerald-600', 'text-emerald-300', 'font-bold');
        } else if (i === selectedIndex && !isCorrect && !isTimeout) {
            buttons[i].classList.remove('bg-stone-900', 'border-stone-800');
            buttons[i].classList.add('bg-red-950/80', 'border-red-600', 'text-red-300', 'font-bold');
        }
    }

    let feedbackDiv = document.getElementById('quiz-feedback-box');
    if (!feedbackDiv) {
        feedbackDiv = document.createElement('div');
        feedbackDiv.id = 'quiz-feedback-box';
        optionsContainer.parentNode.appendChild(feedbackDiv);
    }

    if (isTimeout) {
        feedbackDiv.className = "mt-4 p-3.5 rounded-lg border border-amber-800 bg-amber-950/40 text-xs space-y-2 animate-fade-in";
        feedbackDiv.innerHTML = `
            <div class="font-bold text-amber-400 flex items-center gap-1.5 text-sm">
                <i class="fa-solid fa-clock-rotate-left"></i> Hết thời gian!
            </div>
            <div class="text-stone-300 italic">💡 ${escapeHTML(q.giai_thich || 'Đã quá thời gian trả lời cho câu hỏi này.')}</div>
            <button onclick="chuyenCauTiepTheo()" class="mt-2 w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded transition-all flex items-center justify-center gap-2 cursor-pointer">
                Câu tiếp theo <i class="fa-solid fa-arrow-right"></i>
            </button>
        `;
    } else if (isCorrect) {
        feedbackDiv.className = "mt-4 p-3.5 rounded-lg border border-emerald-800 bg-emerald-950/40 text-xs space-y-2 animate-fade-in";
        feedbackDiv.innerHTML = `
            <div class="font-bold text-emerald-400 flex items-center gap-1.5 text-sm">
                <i class="fa-solid fa-circle-check"></i> Chính xác!
            </div>
            <div class="text-stone-300 italic">💡 ${escapeHTML(q.giai_thich || 'Đã ghi nhận đáp án đúng.')}</div>
            <button onclick="chuyenCauTiepTheo()" class="mt-2 w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded transition-all flex items-center justify-center gap-2 cursor-pointer">
                Câu tiếp theo <i class="fa-solid fa-arrow-right"></i>
            </button>
        `;
    } else {
        feedbackDiv.className = "mt-4 p-3.5 rounded-lg border border-red-800 bg-red-950/40 text-xs space-y-2 animate-fade-in";
        feedbackDiv.innerHTML = `
            <div class="font-bold text-red-400 flex items-center gap-1.5 text-sm">
                <i class="fa-solid fa-circle-xmark"></i> Chưa chính xác!
            </div>
            <div class="text-stone-300 italic">💡 ${escapeHTML(q.giai_thich || 'Xem lại kiến thức chuyên đề này.')}</div>
            <button onclick="chuyenCauTiepTheo()" class="mt-2 w-full py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 font-bold rounded transition-all flex items-center justify-center gap-2 cursor-pointer">
                Câu tiếp theo <i class="fa-solid fa-arrow-right"></i>
            </button>
        `;
    }
}

function chuyenCauTiepTheo() {
    currentQuizIndex++;
    hienThiCauHoiTracNghiem();
}
        
function hienThiKetQuaTracNghiem() {
    if (quizTimerInterval) {
        clearInterval(quizTimerInterval);
        quizTimerInterval = null;
    }

    document.getElementById('quiz-play').classList.add('hidden');
    document.getElementById('quiz-result').classList.remove('hidden');

    const total = currentQuizQuestions.length;
    document.getElementById('quiz-score-final').innerText = `${quizScore}/${total}`;

    let evaluationText = "";
    const percent = (quizScore / total) * 100;
    if (percent === 100) {
        evaluationText = "🏆 Xuất sắc! Bạn nắm rất vững kiến thức Y học cổ truyền chuẩn xác.";
    } else if (percent >= 80) {
        evaluationText = "👍 Rất tốt! Kiến thức lâm sàng và dược lý của bạn ở mức cao.";
    } else if (percent >= 50) {
        evaluationText = "📚 Khá ổn, tuy nhiên bạn cần ôn tập thêm về các pháp trị và dược liệu.";
    } else {
        evaluationText = "💡 Cần cố gắng ôn luyện thêm các chuyên đề Biện chứng luận trị và Dược liệu học.";
    }
    document.getElementById('quiz-evaluation').innerText = evaluationText;

    let history = [];
    try {
        history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
        if (!Array.isArray(history)) history = [];
    } catch (e) {
        history = [];
    }
    
    history.unshift({
        date: new Date().toLocaleDateString('vi-VN'),
        score: `${quizScore}/${total}`,
        percent: percent.toFixed(0) + '%'
    });
    localStorage.setItem('quizHistory', JSON.stringify(history.slice(0, 5)));
    capNhatDiemGanNhat();
}

function kichHoatTimAnh(keyword = "") {
    const kw = keyword.trim() || "Chưa chọn vị thuốc";
    const kwEl = document.getElementById('current-image-keyword');
    if (kwEl) kwEl.innerText = kw;

    const container = document.getElementById('image-links-container');
    if (container) {
        if (kw === "Chưa chọn vị thuốc") {
            container.innerHTML = `<div class="text-xs text-stone-400 italic">Vui lòng chọn dược liệu hoặc huyệt vị từ các tab trước để hiển thị liên kết tra cứu.</div>`;
        } else {
            const kwClean = kw.replace(/\(.*?\)/g, '').replace(/[^\w\sàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]/gi, ' ').trim();
            const suffix = kwClean.toLowerCase().includes('huyệt') ? ' huyệt vị YHCT' : ' vị thuốc YHCT';
            const q = encodeURIComponent(kwClean + suffix);

            const urlGoogle = `https://www.google.com/search?q=${q}&udm=2`;
            const urlDDG = `https://duckduckgo.com/?q=${q}&iax=images&ia=images`;
            const urlBing = `https://www.bing.com/images/search?q=${q}&form=HDRSC2`;

            container.innerHTML = `
                <button onclick="window.open('${urlDDG}', '_blank', 'noopener,noreferrer')" class="w-full py-3 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer">
                    <i class="fa-solid fa-shield-halved text-sm"></i> Mở trên DuckDuckGo
                </button>
                <button onclick="window.open('${urlGoogle}', '_blank', 'noopener,noreferrer')" class="w-full py-3 px-3 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs rounded flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer">
                    <i class="fa-brands fa-google text-sm"></i> Mở ảnh trên Google
                </button>
                <button onclick="window.open('${urlBing}', '_blank', 'noopener,noreferrer')" class="w-full py-3 px-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer">
                    <i class="fa-solid fa-magnifying-glass text-sm"></i> Mở trên Bing
                </button>
            `;
        }
    }

    switchTab('xemanh');
}

function quayLaiCauHinhQuiz() {
    if (quizTimerInterval) {
        clearInterval(quizTimerInterval);
        quizTimerInterval = null;
    }
    document.getElementById('quiz-result').classList.add('hidden');
    document.getElementById('quiz-review').classList.add('hidden');
    
    const setupBox = document.getElementById('quiz-setup');
    if (setupBox) {
        if (originalQuizSetupHTML) {
            setupBox.innerHTML = originalQuizSetupHTML;
        }
        setupBox.classList.remove('hidden');
    }
}

function hienThiXemLai() {
    document.getElementById('quiz-result').classList.add('hidden');
    const reviewDiv = document.getElementById('quiz-review');
    reviewDiv.classList.remove('hidden');

    const listContainer = document.getElementById('quiz-review-list');
    listContainer.innerHTML = "";

    userAnswers.forEach((ans, index) => {
        const item = document.createElement('div');
        item.className = `p-3 rounded-lg border text-xs space-y-1.5 ${ans.dung ? 'bg-emerald-950/20 border-emerald-900/50' : 'bg-red-950/20 border-red-900/50'}`;
        
        const yourChoiceText = (ans.lua_chon_cua_ban !== undefined && ans.lua_chon_cua_ban >= 0) ? ans.lua_chon[ans.lua_chon_cua_ban] : "Hết giờ / Chưa trả lời";
        const correctChoiceText = ans.lua_chon[ans.dap_an_dung];

        item.innerHTML = `
            <div class="font-bold text-stone-200">Câu ${index + 1}: ${escapeHTML(ans.cau_hoi)}</div>
            <div class="${ans.dung ? 'text-emerald-400' : 'text-red-400'} font-medium">
                👉 Lựa chọn của bạn: ${escapeHTML(yourChoiceText)} ${ans.dung ? '✓' : '✗'}
            </div>
            ${!ans.dung ? `<div class="text-emerald-400 font-medium">✔ Đáp án đúng: ${escapeHTML(correctChoiceText)}</div>` : ''}
            <div class="text-stone-400 italic pt-1">💡 Giải thích: ${escapeHTML(ans.giai_thich)}</div>
        `;
        listContainer.appendChild(item);
    });
}

function dongXemLai() {
    document.getElementById('quiz-review').classList.add('hidden');
    document.getElementById('quiz-result').classList.remove('hidden');
}

function quayLaiTabTruoc() {
    const lastTab = localStorage.getItem('activeTab') || 'duoclieu';
    switchTab(lastTab);
}

async function xemDuocLieu(tenViThuoc) {
    if (!tenViThuoc) return;
    await switchTab('duoclieu');
    const searchInput = document.getElementById('searchDuocLieu');
    const filterNhom = document.getElementById('filterNhomDuocLieu');
    if (searchInput) searchInput.value = tenViThuoc;
    if (filterNhom) filterNhom.value = "";
    filterDuocLieu();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onload = function() {
    setTimeout(() => {
        if (typeof duocLieuData !== 'undefined' && duocLieuData && Array.isArray(duocLieuData)) {
            const nhomDL = [...new Set(duocLieuData.map(d => d.nhom).filter(Boolean))];
            const selectDL = document.getElementById('filterNhomDuocLieu');
            if (selectDL) {
                selectDL.innerHTML = '<option value="">-- Tất cả nhóm dược --</option>';
                nhomDL.forEach(n => { let opt = document.createElement('option'); opt.value = n; opt.innerText = n; selectDL.appendChild(opt); });
            }
        }
        
        if (typeof huyetViData !== 'undefined' && huyetViData && Array.isArray(huyetViData)) {
            const heKinhLac = [...new Set(huyetViData.map(h => h.kinh).filter(Boolean))];
            const selectHL = document.getElementById('filterKinhLac');
            if (selectHL) {
                selectHL.innerHTML = '<option value="">-- Tất cả hệ thống kinh mạch --</option>';
                heKinhLac.forEach(k => { let opt = document.createElement('option'); opt.value = k; opt.innerText = k; selectHL.appendChild(opt); });
            }
        }

        if (typeof traData !== 'undefined' && traData && Array.isArray(traData)) {
            const nhomTra = [...new Set(traData.map(t => t.nhom).filter(Boolean))];
            const selectTra = document.getElementById('filterNhomTra');
            if (selectTra) {
                selectTra.innerHTML = '<option value="">-- Tất cả nhóm công dụng --</option>';
                nhomTra.forEach(n => { let opt = document.createElement('option'); opt.value = n; opt.innerText = n; selectTra.appendChild(opt); });
            }
        }
    }, 20);
};

const loadedScripts = new Set();
function loadScript(src) {
    if (loadedScripts.has(src)) return Promise.resolve();
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => { 
            loadedScripts.add(src); 
            capNhatTongSoTracNghiem();

            if (src === 'luantridata.js' && typeof database !== 'undefined') {
                capNhatTongSoTrieuChung();
                updateLuanTri();
            }
            
            if (src === 'duoclieudata.js' && typeof duocLieuData !== 'undefined') {
                const elThuoc = document.getElementById('total-thuoc');
                if (elThuoc) elThuoc.innerText = duocLieuData.length;

                const selectDL = document.getElementById('filterNhomDuocLieu');
                if (selectDL && selectDL.options.length <= 1) {
                    const nhomDL = [...new Set(duocLieuData.map(d => d.nhom).filter(Boolean))];
                    selectDL.innerHTML = '<option value="">-- Tất cả nhóm dược --</option>';
                    nhomDL.forEach(n => { let opt = document.createElement('option'); opt.value = n; opt.innerText = n; selectDL.appendChild(opt); });
                }
            }

            if (src === 'huyetvidata.js' && typeof huyetViData !== 'undefined') {
                const elHuyet = document.getElementById('total-huyet');
                if (elHuyet) elHuyet.innerText = huyetViData.length;

                const selectHL = document.getElementById('filterKinhLac');
                if (selectHL && selectHL.options.length <= 1) {
                    const heKinhLac = [...new Set(huyetViData.map(h => h.kinh).filter(Boolean))];
                    selectHL.innerHTML = '<option value="">-- Tất cả hệ thống kinh mạch --</option>';
                    heKinhLac.forEach(k => { let opt = document.createElement('option'); opt.value = k; opt.innerText = k; selectHL.appendChild(opt); });
                }
            }

            if (src === 'tradata.js' && typeof traData !== 'undefined') {
                const elTra = document.getElementById('total-tra');
                if (elTra) elTra.innerText = traData.length;

                const selectTra = document.getElementById('filterNhomTra');
                if (selectTra && selectTra.options.length <= 1) {
                    const nhomTra = [...new Set(traData.map(t => t.nhom).filter(Boolean))];
                    selectTra.innerHTML = '<option value="">-- Tất cả nhóm công dụng --</option>';
                    nhomTra.forEach(n => { let opt = document.createElement('option'); opt.value = n; opt.innerText = n; selectTra.appendChild(opt); });
                }
            }

            resolve(); 
        };
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

async function exportPDF() {
    const btn = document.querySelector('button[onclick="exportPDF()"]');
    const oldHtml = btn ? btn.innerHTML : '';

    if (typeof html2pdf === 'undefined') {
        if (btn) {
            btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Đang tải thư viện PDF...';
            btn.classList.add('opacity-75', 'pointer-events-none');
        }
        try {
            await loadScript('html2pdf.bundle.min.js');
        } catch (err) {
            console.error("Lỗi tải thư viện html2pdf:", err);
            alert('Không thể tải thư viện xuất PDF từ thư mục.');
            if (btn) {
                btn.innerHTML = oldHtml;
                btn.classList.remove('opacity-75', 'pointer-events-none');
            }
            return;
        }
    }

    if (typeof html2pdf === 'undefined') {
        alert('Đang khởi tạo, vui lòng bấm lại nút xuất PDF sau 1 giây.');
        if (btn) {
            btn.innerHTML = oldHtml;
            btn.classList.remove('opacity-75', 'pointer-events-none');
        }
        return;
    }

    if (btn) {
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Đang xuất PDF...';
        btn.classList.add('opacity-75', 'pointer-events-none');
    }

    const element = document.getElementById('pdf-area');
    const opt = {
        margin:       [10, 10, 10, 10],
        filename:     'Phac-Do-YHCT.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true, letterRendering: true, scrollY: 0 },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
    };

    html2pdf().set(opt).from(element).save().then(() => {
        if (btn) {
            btn.innerHTML = oldHtml;
            btn.classList.remove('opacity-75', 'pointer-events-none');
        }
    }).catch(err => {
        console.error("Lỗi xuất PDF:", err);
        if (btn) {
            btn.innerHTML = oldHtml;
            btn.classList.remove('opacity-75', 'pointer-events-none');
        }
    });
}

function formatAIMessage(text) {
    if (!text) return '';
    let safe = escapeHTML(text);
    safe = safe.replace(/\*\*(.*?)\*\*/g, '<strong class="text-amber-400 font-bold">$1</strong>');

    const lines = safe.split('\n');
    const formattedLines = lines.map(line => {
        const trimmed = line.trim();
        if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
            return `<li class="ml-4 list-disc text-stone-300 my-1">${trimmed.substring(2)}</li>`;
        }
        if (/^\d+\.\s/.test(trimmed)) {
            return `<div class="font-bold text-amber-300 mt-2.5 mb-1 flex items-center gap-1">${trimmed}</div>`;
        }
        if (trimmed.includes('⚠️') || trimmed.toLowerCase().includes('lưu ý') || trimmed.toLowerCase().includes('cấp cứu')) {
            return `<div class="bg-amber-950/50 border-l-4 border-amber-500 p-2.5 my-2 rounded-r text-amber-200 text-xs leading-relaxed">${trimmed}</div>`;
        }
        if (trimmed === '') return '<div class="h-2"></div>';
        return `<p class="my-1 leading-relaxed text-stone-300">${trimmed}</p>`;
    });

    return formattedLines.join('');
}

async function sendAIWebMessage() {
    const inputEl = document.getElementById('ai-input');
    const chatBox = document.getElementById('ai-chat-box');
    const btnSend = document.querySelector('button[onclick="sendAIWebMessage()"]');
    if (!inputEl || !chatBox) return;
    
    let query = inputEl.value.trim();
    if (!query) return;

    const safeQuery = escapeHTML(query);

    chatBox.innerHTML += `
        <div class="bg-amber-950/40 p-3 rounded-lg border border-amber-900/50 text-amber-200 text-right font-medium">
            <span class="font-bold text-amber-400">Bạn:</span> ${safeQuery}
        </div>
    `;
    inputEl.value = '';

    const loadingId = 'ai-loading-' + Date.now();
    chatBox.innerHTML += `
        <div id="${loadingId}" class="bg-stone-900/90 p-3 rounded-lg border border-stone-800 text-stone-400 flex items-center gap-2.5 animate-pulse text-xs">
            <i class="fa-solid fa-brain text-amber-500 animate-spin text-sm"></i>
            <span>Trợ lý AI YHCT đang suy nghĩ & phân tích phác đồ...</span>
        </div>
    `;
    chatBox.scrollTop = chatBox.scrollHeight;

    if (btnSend) {
        btnSend.disabled = true;
        btnSend.classList.add('opacity-50', 'pointer-events-none');
    }

    try {
        const res = await fetch('/.netlify/functions/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: query, source: 'assistant' })
        });
        const data = await res.json();

        const loadingEl = document.getElementById(loadingId);
        if (loadingEl) loadingEl.remove();

        if (!res.ok) {
            const safeErr = escapeHTML(data.error || 'Lỗi hệ thống');
            chatBox.innerHTML += `
                <div class="bg-red-950/40 p-3 rounded-lg border border-red-800 text-red-300 text-xs">
                    <i class="fa-solid fa-triangle-exclamation mr-1"></i> ${safeErr}
                </div>
            `;
        } else {
            const formattedReply = formatAIMessage(data.reply || 'Không có phản hồi từ AI.');
            chatBox.innerHTML += `
                <div class="bg-stone-900 p-3.5 rounded-lg border border-stone-800 text-stone-300 space-y-1 shadow-inner">
                    <div class="font-bold text-amber-500 flex items-center gap-1.5 mb-2 pb-1.5 border-b border-stone-800">
                        <i class="fa-solid fa-robot"></i> Trợ Lý AI YHCT
                    </div>
                    <div class="text-xs leading-relaxed space-y-1">${formattedReply}</div>
                </div>
            `;
        }
    } catch (err) {
        const loadingEl = document.getElementById(loadingId);
        if (loadingEl) loadingEl.remove();
        console.error("Lỗi kết nối AI:", err);
        chatBox.innerHTML += `
            <div class="bg-red-950/40 p-3 rounded-lg border border-red-800 text-red-300 text-xs">
                <i class="fa-solid fa-plug-circle-xmark mr-1"></i> Lỗi kết nối máy chủ AI. Vui lòng thử lại.
            </div>
        `;
    } finally {
        if (btnSend) {
            btnSend.disabled = false;
            btnSend.classList.remove('opacity-50', 'pointer-events-none');
        }
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

let touchstartX = 0, touchstartY = 0, touchendX = 0, touchendY = 0;                               
function handleSwipe(startX, startY, endX, endY) {
    const tabsOrder = ['luantri', 'tracnghiem', 'duoclieu', 'huyetvi', 'tra', 'xemanh', 'ai'];
    const pascalMap = { luantri: 'LuanTri', tracnghiem: 'TracNghiem', duoclieu: 'DuocLieu', huyetvi: 'HuyetVi', tra: 'Tra', xemanh: 'XemAnh', ai: 'AI' };
    
    const diffX = endX - startX;
    const diffY = endY - startY;

    const screenWidth = window.innerWidth;
    if (startX > 25 && startX < screenWidth - 25 && Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        let currentActive = tabsOrder.find(t => {
            return document.getElementById('btnTab' + pascalMap[t])?.classList.contains('tab-active');
        }) || 'luantri';
        let currentIndex = tabsOrder.indexOf(currentActive);

        if (diffX < 0) {
            if (currentIndex < tabsOrder.length - 1) {
                switchTab(tabsOrder[currentIndex + 1]);
            }
        } else if (diffX > 0) {
            if (currentIndex > 0) {
                switchTab(tabsOrder[currentIndex - 1]);
            }
        }
    }
}

document.addEventListener('touchstart', e => {
    touchstartX = e.touches[0].clientX;
    touchstartY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener('touchend', e => {
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    handleSwipe(touchstartX, touchstartY, endX, endY);
}, { passive: true });

// Đã khắc phục lỗi xung đột phím Enter bằng cách kiểm tra loại trừ id của ô search
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && e.target.tagName === 'INPUT' && !e.target.id.includes('search')) {
        e.target.blur();
    }
});

async function taiDuLieuOffline() {
    if (!('caches' in window)) return alert('Trình duyệt không hỗ trợ tính năng lưu offline.');

    const xacNhan = confirm(
        '📥 KÍCH HOẠT CHẾ ĐỘ OFFLINE\n\n' +
        'Bạn có muốn tải toàn bộ dữ liệu ứng dụng về máy không?\n\n' +
        '💡 Lưu ý: Cần thực hiện thao tác tải lại này để cập nhật phiên bản mới nhất khi ứng dụng có thay đổi.'
    );
    if (!xacNhan) return;

    try {
        const cache = await caches.open('dailuantri-v1.3.9');
        await cache.addAll([
            './', './index.html', './style.css', './app.js',
            './luantridata.js', './duoclieudata.js', './huyetvidata.js',
            './tradata.js', './questiondata.js', './manifest.json'
        ]);

        if ('serviceWorker' in navigator) {
            await navigator.serviceWorker.register('./sw.js');
        }

        alert('Đã tải dữ liệu và kích hoạt chế độ offline thành công!');
    } catch (err) {
        console.error("Lỗi tải offline:", err);
        alert('Cần có mạng ổn định để tải dữ liệu lần đầu.');
    }
}

const PHAN_UY_RULES = [
    { a: 'Ô đầu', b: 'Bối mẫu', msg: 'Ô đầu phản Bối mẫu' },
    { a: 'Ô đầu', b: 'Bán hạ', msg: 'Ô đầu phản Bán hạ' },
    { a: 'Ô đầu', b: 'Qua lâu', msg: 'Ô đầu phản Qua lâu' },
    { a: 'Ô đầu', b: 'Bạch cập', msg: 'Ô đầu phản Bạch cập' },
    { a: 'Ô đầu', b: 'Bạch liễm', msg: 'Ô đầu phản Bạch liễm' },
    { a: 'Xuyên ô', b: 'Bối mẫu', msg: 'Xuyên ô phản Bối mẫu' },
    { a: 'Xuyên ô', b: 'Bán hạ', msg: 'Xuyên ô phản Bán hạ' },
    { a: 'Xuyên ô', b: 'Qua lâu', msg: 'Xuyên ô phản Qua lâu' },
    { a: 'Xuyên ô', b: 'Bạch cập', msg: 'Xuyên ô phản Bạch cập' },
    { a: 'Xuyên ô', b: 'Bạch liễm', msg: 'Xuyên ô phản Bạch liễm' },
    { a: 'Thảo ô', b: 'Bối mẫu', msg: 'Thảo ô phản Bối mẫu' },
    { a: 'Thảo ô', b: 'Bán hạ', msg: 'Thảo ô phản Bán hạ' },
    { a: 'Thảo ô', b: 'Qua lâu', msg: 'Thảo ô phản Qua lâu' },
    { a: 'Thảo ô', b: 'Bạch cập', msg: 'Thảo ô phản Bạch cập' },
    { a: 'Thảo ô', b: 'Bạch liễm', msg: 'Thảo ô phản Bạch liễm' },
    { a: 'Phụ tử', b: 'Bối mẫu', msg: 'Phụ tử phản Bối mẫu' },
    { a: 'Phụ tử', b: 'Bán hạ', msg: 'Phụ tử phản Bán hạ' },
    { a: 'Phụ tử', b: 'Qua lâu', msg: 'Phụ tử phản Qua lâu' },
    { a: 'Phụ tử', b: 'Bạch cập', msg: 'Phụ tử phản Bạch cập' },
    { a: 'Phụ tử', b: 'Bạch liễm', msg: 'Phụ tử phản Bạch liễm' },
    { a: 'Cam thảo', b: 'Hải tảo', msg: 'Cam thảo phản Hải tảo' },
    { a: 'Cam thảo', b: 'Đại kích', msg: 'Cam thảo phản Đại kích' },
    { a: 'Cam thảo', b: 'Nguyên hoa', msg: 'Cam thảo phản Nguyên hoa' },
    { a: 'Cam thảo', b: 'Kích hoa', msg: 'Cam thảo phản Kích hoa' },
    { a: 'Lê lô', b: 'Nhân sâm', msg: 'Lê lô phản Nhân sâm' },
    { a: 'Lê lô', b: 'Sa sâm', msg: 'Lê lô phản Sa sâm' },
    { a: 'Lê lô', b: 'Đan sâm', msg: 'Lê lô phản Đan sâm' },
    { a: 'Lê lô', b: 'Khổ sâm', msg: 'Lê lô phản Khổ sâm' },
    { a: 'Lê lô', b: 'Tế tân', msg: 'Lê lô phản Tế tân' },
    { a: 'Lê lô', b: 'Thược dược', msg: 'Lê lô phản Thược dược' },
    { a: 'Lê lô', b: 'Bạch thược', msg: 'Lê lô phản Bạch thược' },
    { a: 'Lê lô', b: 'Xích thược', msg: 'Lê lô phản Xích thược' },
    { a: 'Lê lô', b: 'Cát cánh', msg: 'Lê lô phản Cát cánh' },
    { a: 'Lưu hoàng', b: 'Phác tiêu', msg: 'Lưu hoàng úy Phác tiêu' },
    { a: 'Thủy ngân', b: 'Tỳ sương', msg: 'Thủy ngân úy Tỳ sương' },
    { a: 'Hùng hoàng', b: 'Ba đậu', msg: 'Hùng hoàng úy Ba đậu' },
    { a: 'Mật đà tăng', b: 'Lang độc', msg: 'Mật đà tăng úy Lang độc' },
    { a: 'Ba đậu', b: 'Khiên ngưu', msg: 'Ba đậu úy Khiên ngưu' },
    { a: 'Đinh hương', b: 'Uất kim', msg: 'Đinh hương úy Uất kim' },
    { a: 'Nha tiêu', b: 'Tam lăng', msg: 'Nha tiêu úy Tam lăng' },
    { a: 'Xuyên ô', b: 'Tê giác', msg: 'Xuyên ô úy Tê giác' },
    { a: 'Thảo ô', b: 'Tê giác', msg: 'Thảo ô úy Tê giác' },
    { a: 'Nhân sâm', b: 'Ngũ linh chi', msg: 'Nhân sâm úy Ngũ linh chi' },
    { a: 'Nhục quế', b: 'Xích thạch chi', msg: 'Nhục quế úy Xích thạch chi'}
    ];

function kiemTraTuongKy(danhSachViThuoc) {
    if (!Array.isArray(danhSachViThuoc)) return [];
    let canhBao = [];
    
    for (let i = 0; i < danhSachViThuoc.length; i++) {
        for (let j = i + 1; j < danhSachViThuoc.length; j++) {
            let v1 = removeAccents(danhSachViThuoc[i]).toLowerCase();
            let v2 = removeAccents(danhSachViThuoc[j]).toLowerCase();
            
            PHAN_UY_RULES.forEach(rule => {
                let ra = removeAccents(rule.a).toLowerCase();
                let rb = removeAccents(rule.b).toLowerCase();
                if ((v1.includes(ra) && v2.includes(rb)) || (v1.includes(rb) && v2.includes(ra))) {
                    canhBao.push(rule.msg);
                }
            });
        }
    }
    return [...new Set(canhBao)];
}
async function fetchAIBackupResult(query, tabName, containerEl) {
    if (!containerEl) return;
    containerEl.innerHTML = `
        <div class="col-span-full text-center py-12 space-y-2 text-stone-400 bg-stone-900/60 rounded-xl border border-amber-600/30">
            <i class="fa-solid fa-brain fa-spin text-3xl text-amber-500 block mb-1"></i>
            <p class="text-sm font-bold text-amber-400">Không tìm thấy trong cơ sở dữ liệu offline. Trợ lý AI đang tìm kiếm dự phòng (AI Backup)...</p>
            <p class="text-xs text-stone-500">Từ khóa: "${escapeHTML(query)}"</p>
        </div>
    `;
    try {
        const prompt = `Người dùng đang tra cứu về "${query}" trong danh mục ${tabName} của Y học cổ truyền (YHCT) nhưng không có sẵn trong cơ sở dữ liệu offline. Hãy cung cấp thông tin chi tiết, chuẩn xác, đầy đủ chuyên môn về từ khóa này bằng tiếng Việt, định dạng rõ ràng, ngắn gọn, súc tích.`;
        const res = await fetch('/.netlify/functions/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt, source: 'backup' })
        });
        const data = await res.json();
        if (res.ok && data.reply) {
            containerEl.innerHTML = `
                <div class="col-span-full bg-stone-900/90 border border-amber-600/50 p-4 rounded-xl space-y-3 shadow-xl">
                    <div class="flex items-center justify-between border-b border-stone-800 pb-2">
                        <span class="text-xs font-bold text-amber-400 flex items-center gap-1.5 uppercase">
                            <i class="fa-solid fa-robot"></i> Kết quả Tra cứu Dự phòng từ AI (AI Backup) - ${tabName}
                        </span>
                        <span class="text-[10px] bg-amber-950 text-amber-300 px-2 py-0.5 rounded border border-amber-800">Trực tuyến</span>
                    </div>
                    <div class="text-xs leading-relaxed space-y-1 text-stone-200">${formatAIMessage(data.reply)}</div>
                </div>
            `;
        } else {
            containerEl.innerHTML = `<div class="col-span-full text-center py-8 text-xs text-stone-500">AI Backup không phản hồi hoặc mất kết nối mạng.</div>`;
        }
    } catch (err) {
        console.error("Lỗi AI Backup:", err);
        containerEl.innerHTML = `<div class="col-span-full text-center py-8 text-xs text-red-400">Lỗi kết nối khi gọi AI Backup.</div>`;
    }
}
// Tự động ẩn bàn phím khi chạm/vuốt ra ngoài ô nhập liệu
document.addEventListener('pointerdown', (e) => {
    if (!e.target.closest('input, textarea, select')) {
        const active = document.activeElement;
        if (active && ['INPUT', 'TEXTAREA', 'SELECT'].includes(active.tagName)) {
            active.blur();
        }
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const aiCheckLt = document.getElementById('ai-backup-luantri');
    if (aiCheckLt) {
        aiCheckLt.addEventListener('change', () => {
            updateLuanTri();
        });
    }
});
