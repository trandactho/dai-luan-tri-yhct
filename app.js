const DOMAIN_NETLIFY = 'https://dailuantriyhct.com';
function getApiEndpoint() {
    return (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
        ? `${DOMAIN_NETLIFY}/.netlify/functions/chat`
        : '/.netlify/functions/chat';
}

// --- QUẢN LÝ TRẠNG THÁI ỨNG DỤNG ---
const AppState = {
    quizActive: false,
    isQuizDL: false,
    isQuizHV: false,
    isQuizLT: false,
    aiHcActive: false, // Trạng thái AI Hội chứng
    aiBtActive: false  // Trạng thái AI Bài thuốc
};

const AppStore = {
    database: {},
    duocLieu: [],
    huyetVi: [],
    tra: [],
    
    init() {
        if (typeof database !== 'undefined') this.database = database;
        if (typeof duocLieuData !== 'undefined') this.duocLieu = duocLieuData;
        if (typeof huyetViData !== 'undefined') this.huyetVi = huyetViData;
        if (typeof traData !== 'undefined') this.tra = traData;
    }        
};
// Khai báo sẵn các biến toàn cục chống lỗi ReferenceError
window.database = window.database || {};
window.duocLieuData = window.duocLieuData || [];
window.huyetViData = window.huyetViData || [];
window.traData = window.traData || [];
window.questionsData = window.questionsData || [];

const ORIGINAL_PDF_AREA_HTML = `
    <div id="lt-card-hc" class="bg-dark-box p-5 rounded-lg border-l-4 border-amber-500 space-y-2 relative">
        <div class="text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">Hội chứng biện chứng</div>
        <div id="hoi-chung" class="text-xl font-bold text-amber-200 transition-all">---</div>
        <div id="ai-hc-desc" class="hidden text-xs text-stone-300 pt-2 border-t border-stone-800/80 leading-relaxed"></div>
        <div class="absolute top-3 right-4 z-10">
            <button id="ai-toggle-hc" onclick="toggleAiFeature('hc')" class="px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1 transition-all shadow cursor-pointer bg-stone-900/90 text-amber-400 border border-stone-800 hover:border-amber-500/60">
                <i class="fa-solid fa-robot text-[9px]"></i> AI
            </button>
        </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-dark-box p-5 rounded-lg">
            <div class="text-stone-300 text-xs font-bold uppercase tracking-wider mb-2"><i class="fa-solid fa-stethoscopes mr-1.5 text-amber-500"></i>Triệu chứng lâm sàng</div>
            <ul id="trieu-chung" class="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1 list-disc pl-5 text-sm text-stone-200"></ul>
        </div>
        <div id="lt-card-pdt" class="bg-dark-box p-5 rounded-lg">
            <div class="text-stone-300 text-xs font-bold uppercase tracking-wider mb-2"><i class="fa-solid fa-gavel mr-1.5 text-emerald-500"></i>Pháp trị chuẩn hóa</div>
            <div id="phap-dieu-tri" class="text-base font-semibold text-emerald-400 transition-all">---</div>
        </div>
    </div>
    <div id="lt-card-bt" class="bg-dark-box p-5 rounded-lg space-y-2 relative">
        <div class="flex justify-between items-center mb-3 border-b border-stone-800 pb-2">
            <div>
                <div class="text-stone-300 text-xs font-bold uppercase tracking-wider">Đối chiếu cổ phương</div>
                <div id="bai-thuoc" class="text-lg font-bold text-amber-400 transition-all">---</div>
            </div>
        </div>
        <div class="text-stone-300 text-xs font-bold uppercase mb-2">Thành phần quân thần tá sứ:</div>
        <div id="chi-tiet-bai-thuoc" class="flex flex-wrap gap-2 transition-all"></div>
        <div id="ai-bt-desc" class="hidden text-xs text-stone-300 pt-2 border-t border-stone-800/80 leading-relaxed"></div>
        <div class="absolute top-3 right-4 z-10">
            <button id="ai-toggle-bt" onclick="toggleAiFeature('bt')" class="px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1 transition-all shadow cursor-pointer bg-stone-900/90 text-amber-400 border border-stone-800 hover:border-amber-500/60">
                <i class="fa-solid fa-robot text-[9px]"></i> AI
            </button>
        </div>
    </div>
`;

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
// Bổ sung hàm safeSetLocalStorage bị thiếu
function safeSetLocalStorage(key, dataArray, maxItems = 20) {
    try {
        if (Array.isArray(dataArray) && dataArray.length > maxItems) {
            dataArray = dataArray.slice(0, maxItems);
        }
        localStorage.setItem(key, JSON.stringify(dataArray));
    } catch (e) {
        console.warn(`Không thể ghi vào localStorage cho key "${key}":`, e);
    }
}

// Hàm hỗ trợ trích xuất JSON từ chuỗi phản hồi của AI
function parseJsonFromAI(replyText) {
    if (!replyText) return null;
    let jsonStr = replyText.trim();
    
    // Regex trích xuất nội dung nằm giữa ```json và ``` hoặc ``` và ```
    const match = jsonStr.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
    if (match && match[1]) {
        jsonStr = match[1].trim();
    }
    
    try {
        return JSON.parse(jsonStr);
    } catch (e) {
        console.error("Không thể parse JSON từ AI:", e, jsonStr);
        return null;
    }
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
// Bổ sung hàm helper xử lý từ khóa tìm kiếm dùng chung
function parseSearchQuery(rawQuery) {
    if (!rawQuery) return { txtRaw: '', queryWords: [] };
    const txtRaw = String(rawQuery).trim().normalize('NFC');
    const cleanTxt = txtRaw.toLowerCase().replace(/[,\.;:?!()\[\]{}]/g, ' ');
    const queryWords = cleanTxt.split(/\s+/).filter(Boolean);
    return { txtRaw, queryWords };
}

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



// --- SỬA LẠI HÀM loadRandomCase CHUẨN HOÀN CHỈNH ---
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

// Tìm hàm toggleQuizLuanTri và cập nhật lại đoạn xử lý cuối hàm:
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

function updateLuanTri(query = "", isEnter = false) {
    const tp = getFilterVal('tang-phu');
    const hn = getFilterVal('han-nhiet');
    const ht = getFilterVal('hu-thuc');
    const bc = getFilterVal('benh-co');
    const searchInput = getVal('search-input').toLowerCase().trim();
    const activeQuery = query || searchInput;
    
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
            const hc = (item.hc || '').toLowerCase().normalize('NFC');
            const tc = (item.tc || []).join(' ').toLowerCase().normalize('NFC');
            const bt = (item.bt || '').toLowerCase().normalize('NFC');
            const tpbt = (item.tpbt || []).join(' ').toLowerCase().normalize('NFC');
            const fullText = `${hc} ${tc} ${bt} ${tpbt}`;

            queryWords.forEach(word => {
                if (fullText.includes(word)) {
                    matchCount++;
                    if (hc.includes(word)) matchCount += 1.5; // Thưởng điểm ưu tiên khi khớp tên hội chứng
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

function hienThongBaoGhiNhan(tabName, query) {
    let toast = document.getElementById('feedback-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'feedback-toast';
        toast.className = 'fixed top-4 right-4 z-50 bg-amber-950/95 border border-amber-600/80 text-amber-200 text-xs px-4 py-3 rounded-lg shadow-2xl flex items-center gap-2.5 transition-all duration-300 transform -translate-y-2 opacity-0';
        document.body.appendChild(toast);
    }
    
    toast.innerHTML = `<i class="fa-solid fa-paper-plane text-amber-400 text-sm"></i> <span>Đã gửi phản hồi từ khóa <strong class="text-white">"${escapeHTML(query)}"</strong> (${tabName}) về hệ thống!</span>`;
    
    // Lồng 2 lần requestAnimationFrame để kích hoạt CSS transition
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            toast.classList.remove('-translate-y-2', 'opacity-0');
            toast.classList.add('translate-y-0', 'opacity-100');
        });
    });

    setTimeout(() => {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('-translate-y-2', 'opacity-0');
    }, 3500);
}

async function chuyenQuaLuanTriVaTim(keyword) {
    if (!keyword) return;
    await switchTab('luantri');
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.value = keyword;
        searchLuanTri(true);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    const cleanTxt = txtRaw.toLowerCase().replace(/[,\.;:?!()\[\]{}]/g, ' ').trim();
    const queryWords = cleanTxt ? cleanTxt.split(/\s+/).filter(Boolean) : [];
    const group = getVal('filterNhomDuocLieu');
    const isAiChecked = document.getElementById('ai-backup-duoclieu')?.checked || false;

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
        const fullText = `${ten} ${(d.ten_khac || '')} ${(d.cong_dung || '')} ${(d.kieng_ky || d.dac_tinh || d.chong_chi_dinh || d.luu_y || '')}`.toLowerCase().normalize('NFC');

        // CHẾ ĐỘ 1: Khi BẬT AI -> Bắt buộc tìm chính xác cụm từ đi liền nhau trong CSDL trước
        if (isAiChecked) {
            if (fullText.includes(cleanTxt)) {
                let matchScore = 1;
                if (ten.includes(cleanTxt)) matchScore += 5; // Ưu tiên rất cao nếu khớp Tên dược liệu
                scoredData.push({ item: d, score: matchScore });
            }
        } 
        // CHẾ ĐỘ 2: Tìm kiếm thông thường khi TẮT AI
        else {
            let matchCount = 0;
            queryWords.forEach(word => {
                if (fullText.includes(word)) {
                    matchCount++;
                    if (ten.includes(word)) matchCount += 1.5;
                }
            });
            if (matchCount > 0) scoredData.push({ item: d, score: matchCount });
        }
    });

    scoredData.sort((a, b) => b.score - a.score);
    const filteredData = scoredData.map(s => s.item);

    // XỬ LÝ KHI KHÔNG TÌM THẤY TRONG CSDL
    if (filteredData.length === 0) {
        // Nếu Bật AI (hoặc bấm Enter) -> Tiến hành gọi AI tra cứu ra ngoài
        if (txtRaw && (isEnter || isAiChecked)) {
            const aiCheck = document.getElementById('ai-backup-duoclieu');
            if (aiCheck) aiCheck.checked = true;
            fetchAIBackupResult(txtRaw, 'Dược Liệu YHCT', grid);
            return;
        }

        const feedbackMsg = txtRaw 
            ? `<p class="text-xs text-stone-500 font-medium flex items-center justify-center gap-1">Nhấn nút <span class="px-2 py-0.5 bg-amber-950/80 text-amber-400 border border-amber-600/60 rounded font-bold text-[11px] inline-flex items-center gap-1"><i class="fa-solid fa-robot text-[10px]"></i> AI Tìm</span> để tìm chính xác với AI</p>` 
            : '';

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
            <div class="blur-target ${blurDL} transition-all duration-300 space-y-2">
                <div class="bg-emerald-950/40 border border-emerald-700/70 p-2.5 rounded-md cong-dung-el cursor-pointer hover:border-amber-500/80 transition-colors" title="Bấm để tra cứu phác đồ Luận trị">
                    <div class="text-emerald-400 text-[10px] font-bold tracking-wider uppercase flex items-center gap-1 mb-0.5">
                        <i class="fa-solid fa-kit-medical text-[9px]"></i> CÔNG NĂNG CHỦ TRỊ:
                    </div>
                    <p class="text-sm text-stone-200 leading-relaxed">${highlightText(d.cong_dung || '', txtRaw)}</p>
                </div>
                <div>${boxHTML}</div>
            </div>
        `;

                card.onclick = (e) => {
            const isTitle = e.target.closest('.card-title-el');
            const isCongDung = e.target.closest('.cong-dung-el');
            const blurEl = card.querySelector('.blur-target');
            const isBlurred = blurEl && blurEl.classList.contains('blur-md');

            // Nếu đang bị che mờ, ưu tiên bấm để mở mờ xem đáp án trước
            if (AppState.isQuizDL && isBlurred) {
                if (blurEl) blurEl.classList.remove('blur-md');
                return; // Dừng lại, không thực hiện hành động khác khi đang mở mờ
            }

            // Khi đã rõ, các chức năng bấm hoạt động bình thường
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
    const cleanTxt = txtRaw.toLowerCase().replace(/[,\.;:?!()\[\]{}]/g, ' ');
    const queryWords = cleanTxt ? cleanTxt.split(/\s+/).filter(Boolean) : [];    
    const kinh = getVal('filterKinhLac');
    const isAiChecked = document.getElementById('ai-backup-huyetvi')?.checked || false;
    
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
        const fullText = `${ten} ${(h.chu_tri || '')} ${(h.vi_tri || '')} ${(h.dinh_vi || '')} ${(h.kinh || '')}`.toLowerCase();

        if (isAiChecked) {
            if (fullText.includes(cleanTxt)) {
                let matchScore = 1;
                if (ten.includes(cleanTxt)) matchScore += 5;
                scoredData.push({ item: h, score: matchScore });
            }
        } else {
            let matchCount = 0;
            queryWords.forEach(word => {
                if (fullText.includes(word)) {
                    matchCount++;
                    if (ten.includes(word)) matchCount += 1.5;
                }
            });
            if (matchCount > 0) scoredData.push({ item: h, score: matchCount });
        }
    });

    scoredData.sort((a, b) => b.score - a.score);
    const filteredData = scoredData.map(s => s.item);

    if (filteredData.length === 0) {
        if (txtRaw && (isEnter || isAiChecked)) {
            const aiCheck = document.getElementById('ai-backup-huyetvi');
            if (aiCheck) aiCheck.checked = true;
            fetchAIBackupResult(txtRaw, 'Huyệt Vị YHCT', grid);
            return;
        }

        const feedbackMsg = txtRaw 
            ? `<p class="text-xs text-stone-500 font-medium flex items-center justify-center gap-1">Nhấn nút <span class="px-2 py-0.5 bg-amber-950/80 text-amber-400 border border-amber-600/60 rounded font-bold text-[11px] inline-flex items-center gap-1"><i class="fa-solid fa-robot text-[10px]"></i> AI Tìm</span> để tìm kiếm với AI</p>` 
            : '';

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

function filterTra(isEnter = false) {
    const grid = document.getElementById('gridTra'); 
    if (!grid) return; 

    const activeTraData = getCombinedTraData();

    if (activeTraData.length === 0 && (typeof traData === 'undefined' || !traData)) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-14 space-y-2 text-stone-500">
                <i class="fa-solid fa-spinner fa-spin text-3xl opacity-40 block mb-1 text-amber-500"></i>
                <p class="text-sm font-medium">Đang tải dữ liệu trà dược...</p>
            </div>
        `;
        return;
    }

    const txtRaw = getVal('searchTra').trim().normalize('NFC');
    const cleanTxt = txtRaw.toLowerCase().replace(/[,\.;:?!()\[\]{}]/g, ' ');
    const queryWords = cleanTxt ? cleanTxt.split(/\s+/).filter(Boolean) : [];    
    const nhom = getVal('filterNhomTra');
    const isAiChecked = document.getElementById('ai-backup-tra')?.checked || false;
    
    grid.innerHTML = "";

    const scoredData = [];
    activeTraData.forEach(t => {
        if (!t) return;
        const nhomItem = String(t.nhom || '');
        if (nhom !== "" && nhomItem !== nhom) return;

        const ten = String(t.ten || '').toLowerCase().normalize('NFC');
        if (queryWords.length === 0) {
            scoredData.push({ item: t, score: 1 });
            return;
        }

        const congDung = String(t.cong_dung || '').toLowerCase().normalize('NFC');
        const kiengKy = String(t.kieng_ky || '').toLowerCase().normalize('NFC');
        const cachDung = String(t.cach_dung || '').toLowerCase().normalize('NFC');
        const tpArr = Array.isArray(t.thanh_phan) ? t.thanh_phan : (t.thanh_phan ? [t.thanh_phan] : []);
        const fullText = `${ten} ${congDung} ${kiengKy} ${cachDung} ${tpArr.join(' ').toLowerCase().normalize('NFC')}`;

        if (isAiChecked) {
            if (fullText.includes(cleanTxt)) {
                let matchScore = 1;
                if (ten.includes(cleanTxt)) matchScore += 5;
                scoredData.push({ item: t, score: matchScore });
            }
        } else {
            let matchCount = 0;
            queryWords.forEach(word => {
                if (fullText.includes(word)) {
                    matchCount++;
                    if (ten.includes(word)) matchCount += 1.5;
                }
            });
            if (matchCount > 0) scoredData.push({ item: t, score: matchCount });
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

// Hàm hợp nhất dữ liệu Trà Dược tĩnh và LocalStorage
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

window.addEventListener("DOMContentLoaded", () => {
    if (typeof AppStore !== 'undefined') {
        AppStore.init(); // Đồng bộ biến toàn cục an toàn
    }
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
    }

    requestAnimationFrame(() => {
        try {
            capNhatTongSoTrieuChung();
            capNhatTongSoTracNghiem();

            // Đổ dữ liệu bộ lọc (Chuyển từ window.onload vào đây để đồng bộ 1 luồng)
            if (typeof duocLieuData !== 'undefined' && duocLieuData && Array.isArray(duocLieuData)) {
                const el = document.getElementById('total-thuoc');
                if (el) el.textContent = duocLieuData.length;
                
                const nhomDL = [...new Set(duocLieuData.map(d => d.nhom).filter(Boolean))];
                const selectDL = document.getElementById('filterNhomDuocLieu');
                if (selectDL) {
                    selectDL.innerHTML = '<option value="">-- Tất cả nhóm dược --</option>';
                    nhomDL.forEach(n => { let opt = document.createElement('option'); opt.value = n; opt.innerText = n; selectDL.appendChild(opt); });
                }
            }

            if (typeof huyetViData !== 'undefined' && huyetViData && Array.isArray(huyetViData)) {
                const el = document.getElementById('total-huyet');
                if (el) el.textContent = huyetViData.length;

                const heKinhLac = [...new Set(huyetViData.map(h => h.kinh).filter(Boolean))];
                const selectHL = document.getElementById('filterKinhLac');
                if (selectHL) {
                    selectHL.innerHTML = '<option value="">-- Tất cả hệ thống kinh mạch --</option>';
                    heKinhLac.forEach(k => { let opt = document.createElement('option'); opt.value = k; opt.innerText = k; selectHL.appendChild(opt); });
                }
            }

            if (typeof traData !== 'undefined' && traData && Array.isArray(traData)) {
                const el = document.getElementById('total-tra');
                if (el) el.textContent = traData.length;

                const nhomTra = [...new Set(traData.map(t => t.nhom).filter(Boolean))];
                const selectTra = document.getElementById('filterNhomTra');
                if (selectTra) {
                    selectTra.innerHTML = '<option value="">-- Tất cả nhóm công dụng --</option>';
                    nhomTra.forEach(n => { let opt = document.createElement('option'); opt.value = n; opt.innerText = n; selectTra.appendChild(opt); });
                }
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

// 2. AI Soạn bộ câu hỏi trắc nghiệm
async function fetchAIQuizQuestions(category, count) {
    try {
        const prompt = `Hãy soạn chính xác ${count} câu hỏi trắc nghiệm khách quan về chuyên đề ${category} trong Y học cổ truyền (YHCT). 
        Yêu cầu trả về đúng định dạng JSON chuẩn gồm một mảng đúng ${count} object với các trường:
        - "cau_hoi": Nội dung câu hỏi lâm sàng hoặc lý luận.
        - "lua_chon": Mảng gồm đúng 4 đáp án (chỉ chứa nội dung đáp án, KHÔNG ghi ký tự A, B, C, D ở đầu).
        - "dap_an": Chỉ số đáp án đúng (từ 0 đến 3 ứng với 4 lựa chọn).
        - "giai_thich": Giải thích chi tiết ngắn gọn vì sao đáp án đó chính xác.
        Chỉ trả về định dạng JSON thuần túy, không kèm theo chữ giải thích nào khác ngoài JSON.`;

        const res = await fetch(getApiEndpoint(), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt, source: 'quiz', max_tokens: 800 })
        });
        
        const data = await res.json();
        if (res.ok && data.reply) {
            const parsedArray = parseJsonFromAI(data.reply);
            if (Array.isArray(parsedArray)) {
                // 👉 BỔ SUNG: Tự động loại bỏ tiền tố A., B., C., D. thừa nếu AI trót thêm vào
                return parsedArray.slice(0, count).map(q => {
                    if (Array.isArray(q.lua_chon)) {
                        q.lua_chon = q.lua_chon.map(opt => 
                            String(opt).replace(/^[A-D][\.\:\-\s]+/i, '').trim()
                        );
                    }
                    return q;
                });
            }
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

    // ⚡ HIỆN ICON XOAY TRÊN NÚT BẤM (KHÔNG ĐÈ DOM CÀI ĐẶT)
    const btnStart = document.activeElement;
    const oldBtnText = btnStart?.innerHTML;
    if (isUseAI && btnStart && btnStart.tagName === 'BUTTON') {
        btnStart.disabled = true;
        btnStart.innerHTML = `<i class="fa-solid fa-spinner fa-spin mr-1"></i> AI đang tạo...`;
    }

        let pool = [];
    if (isUseAI) {
        pool = await fetchAIQuizQuestions(category, count);

        // --- TỰ ĐỘNG LƯU CÂU HỎI AI VÀO LOCALSTORAGE ---
        if (pool && pool.length > 0) {
            if (typeof questionsData === 'undefined') window.questionsData = [];
            
            let customQuestions = JSON.parse(localStorage.getItem('custom_questionsData') || '[]');
            
            pool.forEach(q => {
                if (!q.category) q.category = category;
                q.isAiGenerated = true;

                // Thêm vào mảng chạy hiện tại nếu chưa có
                if (!questionsData.some(exist => exist.cau_hoi === q.cau_hoi)) {
                    questionsData.unshift(q);
                }
                // Thêm vào mảng lưu trữ local
                if (!customQuestions.some(exist => exist.cau_hoi === q.cau_hoi)) {
                    customQuestions.unshift(q);
                }
            });

            // Chỉ giữ lại tối đa 50 câu gần nhất
if (customQuestions.length > 50) {
    customQuestions = customQuestions.slice(0, 50);
}
try {
    localStorage.setItem('custom_questionsData', JSON.stringify(customQuestions));
} catch (e) {
    console.warn("Lỗi lưu câu hỏi AI vào localStorage:", e);
}
            
            // Cập nhật lại số lượng câu hỏi trên UI
            capNhatTongSoTracNghiem();
        }
    }

    // Khôi phục nút bấm
    if (isUseAI && btnStart && btnStart.tagName === 'BUTTON') {
        btnStart.disabled = false;
        btnStart.innerHTML = oldBtnText;
    }

    if (!pool || pool.length === 0) {
        if (isUseAI) {
            alert('AI đang bận. Hệ thống quay lại câu hỏi có sẵn.');
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

        if (hasSpecialOpt) return { ...q };

        const shuffled = q.lua_chon
            .map((text, idx) => ({ text, isCorrect: idx === q.dap_an }))
            .sort(() => 0.5 - Math.random());

        return {
            ...q,
            lua_chon: shuffled.map(item => item.text),
            dap_an: shuffled.findIndex(item => item.isCorrect)
        };
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
function clearQuizTimer() {
    if (quizTimerInterval) {
        clearInterval(quizTimerInterval);
        quizTimerInterval = null;
    }
}

function hienThiCauHoiTracNghiem() {
    if (currentQuizIndex >= currentQuizQuestions.length) {
        hienThiKetQuaTracNghiem();
        return;
    }

    if (quizTimerInterval) {
        clearInterval(quizTimerInterval);
        quizTimerInterval = null;
    }

    const oldFeedback = document.getElementById('quiz-feedback-box');
    if (oldFeedback) oldFeedback.remove();

    const q = currentQuizQuestions[currentQuizIndex];
    const total = currentQuizQuestions.length;

    document.getElementById('quiz-score-live').innerHTML = `<i class="fa-solid fa-star text-amber-400 mr-1"></i> Điểm: ${quizScore}`;
    
    // Tối ưu khoảng cách ô câu hỏi
    const qEl = document.getElementById('quiz-question');
    if (qEl) {
        qEl.className = "bg-stone-900/90 border border-stone-800 p-2.5 rounded-xl text-xs sm:text-sm leading-relaxed text-stone-200 shadow-md";
        qEl.innerText = q.cau_hoi;
    }

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

    // Render danh sách đáp án chuẩn hóa
    q.lua_chon.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = "w-full p-2.5 text-left bg-stone-900/90 hover:bg-stone-800 border border-stone-800 hover:border-amber-500/50 rounded-xl text-xs text-stone-200 transition-all duration-200 flex items-center gap-2.5 shadow-sm cursor-pointer group";
        btn.innerHTML = `
            <span class="w-5 h-5 rounded-md bg-stone-800 group-hover:bg-amber-600 group-hover:text-white flex items-center justify-center text-[11px] font-bold text-amber-400 transition-colors shadow-sm flex-shrink-0">
                ${String.fromCharCode(65 + idx)}
            </span> 
            <span class="leading-relaxed font-medium text-xs">${escapeHTML(opt)}</span>
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

    // TỐI ƯU GIAO DIỆN: Giảm p-3.5 xuống p-2.5, giảm mt-4 xuống mt-2 để vừa vặn màn hình
    if (isTimeout) {
        feedbackDiv.className = "mt-2 p-2.5 rounded-lg border border-amber-800 bg-amber-950/40 text-xs space-y-1.5 animate-fade-in";
        feedbackDiv.innerHTML = `
            <div class="font-bold text-amber-400 flex items-center gap-1.5 text-xs">
                <i class="fa-solid fa-clock-rotate-left"></i> Hết thời gian!
            </div>
            <div class="text-stone-300 italic text-[11px] leading-snug">💡 ${escapeHTML(q.giai_thich || 'Đã quá thời gian trả lời.')}</div>
            <button onclick="chuyenCauTiepTheo()" class="mt-1.5 w-full py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded transition-all flex items-center justify-center gap-2 cursor-pointer text-xs">
                Câu tiếp theo <i class="fa-solid fa-arrow-right"></i>
            </button>
        `;
    } else if (isCorrect) {
        feedbackDiv.className = "mt-2 p-2.5 rounded-lg border border-emerald-800 bg-emerald-950/40 text-xs space-y-1.5 animate-fade-in";
        feedbackDiv.innerHTML = `
            <div class="font-bold text-emerald-400 flex items-center gap-1.5 text-xs">
                <i class="fa-solid fa-circle-check"></i> Chính xác!
            </div>
            <div class="text-stone-300 italic text-[11px] leading-snug">💡 ${escapeHTML(q.giai_thich || 'Đã ghi nhận đáp án đúng.')}</div>
            <button onclick="chuyenCauTiepTheo()" class="mt-1.5 w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded transition-all flex items-center justify-center gap-2 cursor-pointer text-xs">
                Câu tiếp theo <i class="fa-solid fa-arrow-right"></i>
            </button>
        `;
    } else {
        feedbackDiv.className = "mt-2 p-2.5 rounded-lg border border-red-800 bg-red-950/40 text-xs space-y-1.5 animate-fade-in";
        feedbackDiv.innerHTML = `
            <div class="font-bold text-red-400 flex items-center gap-1.5 text-xs">
                <i class="fa-solid fa-circle-xmark"></i> Chưa chính xác!
            </div>
            <div class="text-stone-300 italic text-[11px] leading-snug">💡 ${escapeHTML(q.giai_thich || 'Xem lại kiến thức chuyên đề này.')}</div>
            <button onclick="chuyenCauTiepTheo()" class="mt-1.5 w-full py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 font-bold rounded transition-all flex items-center justify-center gap-2 cursor-pointer text-xs">
                Câu tiếp theo <i class="fa-solid fa-arrow-right"></i>
            </button>
        `;
    }

    // Tự động cuộn nhẹ xuống nút "Câu tiếp theo" nếu nội dung dài
    feedbackDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
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
    const kw = keyword.trim();
    if (!kw) return;
    
    const kwClean = kw.replace(/\(.*?\)/g, '').replace(/[^\w\sàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]/gi, ' ').trim();
    const suffix = kwClean.toLowerCase().includes('huyệt') ? ' huyệt vị YHCT' : ' vị thuốc YHCT';
    const q = encodeURIComponent(kwClean + suffix);
    
    const urlGoogle = `https://www.google.com/search?q=${q}&udm=2`;
    window.open(urlGoogle, '_blank', 'noopener,noreferrer');
}

function quayLaiCauHinhQuiz() {
    if (quizTimerInterval) {
        clearInterval(quizTimerInterval);
        quizTimerInterval = null;
    }
    document.getElementById('quiz-result').classList.add('hidden');
    document.getElementById('quiz-review').classList.add('hidden');
    document.getElementById('quiz-play').classList.add('hidden');
    
    // Chỉ bỏ ẩn, toàn bộ cài đặt cũ trên giao diện sẽ được giữ nguyên 100%
    document.getElementById('quiz-setup').classList.remove('hidden');
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

// 3. Khắc phục chống phình mảng trong dongBoDuLieuAI
const syncedScripts = new Set();
function dongBoDuLieuAI(scriptSrc) {
    if (syncedScripts.has(scriptSrc)) return; // Tránh đồng bộ lặp gây tràn RAM
    syncedScripts.add(scriptSrc);

    try {
        if (scriptSrc === 'luantridata.js' && typeof database !== 'undefined') {
            const saved = JSON.parse(localStorage.getItem('custom_database') || '{}');
            Object.assign(database, saved);
        }
        else if (scriptSrc === 'duoclieudata.js' && typeof duocLieuData !== 'undefined') {
            const saved = JSON.parse(localStorage.getItem('custom_duocLieuData') || '[]');
            const map = new Map(duocLieuData.map(item => [removeAccents(item.ten), item]));
            saved.forEach(item => map.set(removeAccents(item.ten), item));
            duocLieuData.length = 0;
            duocLieuData.push(...map.values());
        }
        else if (scriptSrc === 'huyetvidata.js' && typeof huyetViData !== 'undefined') {
            const saved = JSON.parse(localStorage.getItem('custom_huyetViData') || '[]');
            const map = new Map(huyetViData.map(item => [removeAccents(item.ten), item]));
            saved.forEach(item => map.set(removeAccents(item.ten), item));
            huyetViData.length = 0;
            huyetViData.push(...map.values());
        }
        else if (scriptSrc === 'questiondata.js' && typeof questionsData !== 'undefined') {
            const saved = JSON.parse(localStorage.getItem('custom_questionsData') || '[]');
            const map = new Map(questionsData.map(item => [item.cau_hoi, item]));
            saved.forEach(item => map.set(item.cau_hoi, item));
            questionsData.length = 0;
            questionsData.push(...map.values());
        }
    } catch (e) {
        console.warn("Lỗi đồng bộ dữ liệu AI:", e);
    }
}


const loadedScripts = new Set(); //[span_21](start_span)[span_21](end_span)
function loadScript(src) {
    if (loadedScripts.has(src)) return Promise.resolve(); //[span_22](start_span)[span_22](end_span)
    return new Promise((resolve, reject) => {
        const script = document.createElement('script'); //[span_23](start_span)[span_23](end_span)
        script.src = src; //[span_24](start_span)[span_24](end_span)
        script.onload = () => { 
            loadedScripts.add(src); //[span_25](start_span)[span_25](end_span)
            
            // 👉 Bơm ngay dữ liệu AI vào bộ nhớ Javascript khi file tĩnh tải xong
            dongBoDuLieuAI(src);
            
            capNhatTongSoTracNghiem(); //[span_26](start_span)[span_26](end_span)

            if (src === 'luantridata.js' && typeof database !== 'undefined') {
                capNhatTongSoTrieuChung(); //[span_27](start_span)[span_27](end_span)
                updateLuanTri(); //[span_28](start_span)[span_28](end_span)
            }
            
            if (src === 'duoclieudata.js' && typeof duocLieuData !== 'undefined') {
                const elThuoc = document.getElementById('total-thuoc'); //[span_29](start_span)[span_29](end_span)
                if (elThuoc) elThuoc.innerText = duocLieuData.length; //[span_30](start_span)[span_30](end_span)

                const selectDL = document.getElementById('filterNhomDuocLieu'); //[span_31](start_span)[span_31](end_span)
                if (selectDL && selectDL.options.length <= 1) {
                    const nhomDL = [...new Set(duocLieuData.map(d => d.nhom).filter(Boolean))]; //[span_32](start_span)[span_32](end_span)
                    selectDL.innerHTML = '<option value="">-- Tất cả nhóm dược --</option>'; //[span_33](start_span)[span_33](end_span)
                    nhomDL.forEach(n => { let opt = document.createElement('option'); opt.value = n; opt.innerText = n; selectDL.appendChild(opt); }); //[span_34](start_span)[span_34](end_span)
                }
            }

            if (src === 'huyetvidata.js' && typeof huyetViData !== 'undefined') {
                const elHuyet = document.getElementById('total-huyet'); //[span_35](start_span)[span_35](end_span)
                if (elHuyet) elHuyet.innerText = huyetViData.length; //[span_36](start_span)[span_36](end_span)

                const selectHL = document.getElementById('filterKinhLac'); //[span_37](start_span)[span_37](end_span)
                if (selectHL && selectHL.options.length <= 1) {
                    const heKinhLac = [...new Set(huyetViData.map(h => h.kinh).filter(Boolean))]; //[span_38](start_span)[span_38](end_span)
                    selectHL.innerHTML = '<option value="">-- Tất cả hệ thống kinh mạch --</option>'; //[span_39](start_span)[span_39](end_span)
                    heKinhLac.forEach(k => { let opt = document.createElement('option'); opt.value = k; opt.innerText = k; selectHL.appendChild(opt); }); //[span_40](start_span)[span_40](end_span)
                }
            }

            if (src === 'tradata.js' && typeof traData !== 'undefined') {
                const elTra = document.getElementById('total-tra'); //[span_41](start_span)[span_41](end_span)
                if (elTra) elTra.innerText = getCombinedTraData().length; // Cập nhật đếm gồm cả bài trà AI[span_42](start_span)[span_42](end_span)

                const selectTra = document.getElementById('filterNhomTra'); //[span_43](start_span)[span_43](end_span)
                if (selectTra && selectTra.options.length <= 1) {
                    const activeTra = getCombinedTraData(); //[span_44](start_span)[span_44](end_span)
                    const nhomTra = [...new Set(activeTra.map(t => t.nhom).filter(Boolean))]; //[span_45](start_span)[span_45](end_span)
                    selectTra.innerHTML = '<option value="">-- Tất cả nhóm công dụng --</option>'; //[span_46](start_span)[span_46](end_span)
                    nhomTra.forEach(n => { let opt = document.createElement('option'); opt.value = n; opt.innerText = n; selectTra.appendChild(opt); }); //[span_47](start_span)[span_47](end_span)
                }
            }

            resolve(); //[span_48](start_span)[span_48](end_span)
        };
        script.onerror = () => reject(new Error(`Không thể tải tập lệnh: ${src}`)); //[span_49](start_span)[span_49](end_span)
        document.head.appendChild(script); //[span_50](start_span)[span_50](end_span)
    });
}


let currentSwitchTabToken = 0;
async function switchTab(tabName) {
    console.log("Đang chuyển sang tab:", tabName); // Kiểm tra xem hàm có được gọi không
    const localToken = ++currentSwitchTabToken;

    try {
        if (tabName === 'luantri') await loadScript('luantridata.js');
        if (tabName === 'duoclieu') await loadScript('duoclieudata.js');
        if (tabName === 'huyetvi') await loadScript('huyetvidata.js');
        if (tabName === 'tra') await loadScript('tradata.js');
        if (tabName === 'tracnghiem') await loadScript('questiondata.js');
    } catch (err) {
        console.error("Lỗi nạp dữ liệu tab:", err.message);
    }

    // Nếu người dùng đã chuyển sang Tab khác trong lúc script đang tải -> Bỏ qua render thừa
    if (localToken !== currentSwitchTabToken) return;

    if (tabName !== 'xemanh') {
        localStorage.setItem('activeTab', tabName);
    }

    const tabs = ['luantri', 'tracnghiem', 'duoclieu', 'huyetvi', 'tra', 'xemanh', 'phoingu', 'ai'];
    const pascalMap = { 
        luantri: 'LuanTri', tracnghiem: 'TracNghiem', duoclieu: 'DuocLieu', 
        huyetvi: 'HuyetVi', tra: 'Tra', xemanh: 'XemAnh', phoingu: 'PhoiNgu', ai: 'AI'
    };
    tabs.forEach(t => {
        const pascalCase = pascalMap[t];
        const section = document.getElementById('section' + pascalCase);
        const btn = document.getElementById('btnTab' + pascalCase);
// THÊM ĐOẠN NÀY ĐỂ DEBUG:
        if (t === tabName) {
            console.log("Tìm thấy section:", section); // Nếu là null, ID HTML bị sai
            console.log("Tìm thấy btn:", btn);        // Nếu là null, ID HTML bị sai
        }

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
            if (t === 'xemanh') hienThiLichSuVongChan();

        } else {
            if (section) section.classList.add('hidden');
            if (btn) btn.classList.remove('tab-active', 'text-primary');
        }
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

    // 1. Loại bỏ lời chào rườm rà
    let cleaned = text.replace(/^(chào bạn|dưới đây là|rất vui)[^:\n]*[:\n]?/gi, '').trim();

    // 2. Tẩy sạch mã LaTeX / MathJax rác
    cleaned = cleaned
        .replace(/[\/\\]?stroke/gi, '')
        .replace(/\\?\$?\\(right|left)?arrow\$?/gi, '→')
        .replace(/\\(text|mathbf|mathrm|textit)\{([^}]+)\}/gi, '$2')
        .replace(/\$+/g, '')
        .replace(/\\[a-zA-Z]+/g, '')
        .replace(/[\u4e00-\u9fa5]+/g, '');

    // 3. Escape HTML bảo mật
    let safe = escapeHTML(cleaned);

    // 4. Xử lý các tiêu đề Markdown
    safe = safe.replace(/^###?\s*(.*$)/gim, '<div class="text-amber-400 font-bold text-xs uppercase tracking-wider mt-3 mb-1 border-b border-stone-800 pb-1">$1</div>');
    safe = safe.replace(/^#\s*(.*$)/gim, '<div class="text-amber-400 font-bold text-sm uppercase tracking-wider mt-3 mb-1 border-b border-stone-800 pb-1">$1</div>');

    // 5. Xử lý Markdown in đậm
    safe = safe.replace(/\*\*(.*?)\*\*/g, '<strong class="text-amber-300 font-bold">$1</strong>');
    safe = safe.replace(/\*(.*?)\*/g, '<strong class="text-amber-300 font-bold">$1</strong>');

    // 6. Định dạng dòng & danh sách
    const lines = safe.split('\n');
    const formattedLines = lines.map(line => {
        const trimmed = line.trim();
        if (trimmed.startsWith('<div class="text-amber-400')) return trimmed;
        if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
            return `<li class="ml-4 list-disc text-stone-300 my-0.5">${trimmed.substring(2)}</li>`;
        }
        if (/^\d+\.\s/.test(trimmed)) {
            return `<div class="font-bold text-amber-300 mt-2 mb-0.5 flex items-center gap-1">${trimmed}</div>`;
        }
        if (trimmed.includes('⚠️') || trimmed.toLowerCase().includes('lưu ý') || trimmed.toLowerCase().includes('cấp cứu')) {
            return `<div class="bg-amber-950/50 border-l-4 border-amber-500 p-2 my-1.5 rounded-r text-amber-200 text-xs leading-relaxed">${trimmed}</div>`;
        }
        if (trimmed === '' || trimmed === '---') return '<div class="h-1"></div>';
        return `<p class="my-0.5 leading-relaxed text-stone-300">${trimmed}</p>`;
    });

    // 7. Bọc DOMPurify làm sạch HTML trả về ở cuối hàm
    const rawHtml = formattedLines.join('');
    return typeof DOMPurify !== 'undefined' ? DOMPurify.sanitize(rawHtml) : rawHtml;
}

// 3. Trợ lý AI nhắn tin trực tiếp
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
        </div>`;
    inputEl.value = '';

    const loadingId = 'ai-loading-' + Date.now();
    chatBox.innerHTML += `
        <div id="${loadingId}" class="bg-stone-900/90 p-3 rounded-lg border border-stone-800 text-stone-400 flex items-center gap-2.5 animate-pulse text-xs">
            <i class="fa-solid fa-brain text-amber-500 animate-spin text-sm"></i>
            <span>Trợ lý AI YHCT đang suy nghĩ & phân tích phác đồ...</span>
        </div>`;
    chatBox.scrollTop = chatBox.scrollHeight;

    if (btnSend) {
        btnSend.disabled = true;
        btnSend.classList.add('opacity-50', 'pointer-events-none');
    }

    try {
        const res = await fetch(getApiEndpoint(), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                prompt: query, 
                source: 'assistant'
            })
        });
        const data = await res.json();

        const loadingEl = document.getElementById(loadingId);
        if (loadingEl) loadingEl.remove();

        if (!res.ok || data.error) {
            chatBox.innerHTML += `<div class="bg-red-950/40 p-3 rounded-lg border border-red-800 text-red-300 text-xs"><i class="fa-solid fa-triangle-exclamation mr-1"></i> ${escapeHTML(data.error || 'Lỗi hệ thống')}</div>`;
        } else {
            const formattedReply = formatAIMessage(data.reply || 'Không có phản hồi từ AI.');
            chatBox.innerHTML += `
                <div class="bg-stone-900 p-3.5 rounded-lg border border-stone-800 text-stone-300 space-y-1 shadow-inner">
                    <div class="font-bold text-amber-500 flex items-center gap-1.5 mb-2 pb-1.5 border-b border-stone-800">
                        <i class="fa-solid fa-robot"></i> Trợ Lý AI YHCT
                    </div>
                    <div class="text-xs leading-relaxed space-y-1">${formattedReply}</div>
                </div>`;
        }
    } catch (err) {
        const loadingEl = document.getElementById(loadingId);
        if (loadingEl) loadingEl.remove();
        chatBox.innerHTML += `<div class="bg-red-950/40 p-3 rounded-lg border border-red-800 text-red-300 text-xs"><i class="fa-solid fa-plug-circle-xmark mr-1"></i> ${escapeHTML(err.message || 'Lỗi kết nối máy chủ AI.')}</div>`;
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
    const tabsOrder = ['luantri', 'tracnghiem', 'duoclieu', 'huyetvi', 'tra', 'phoingu', 'xemanh', 'ai'];
    const pascalMap = { 
        luantri: 'LuanTri', 
        tracnghiem: 'TracNghiem', 
        duoclieu: 'DuocLieu', 
        huyetvi: 'HuyetVi', 
        tra: 'Tra', 
        xemanh: 'XemAnh', 
        phoingu: 'PhoiNgu', 
        ai: 'AI' 
    };    
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

    const xacNhan = confirm('📥 KÍCH HOẠT CHẾ ĐỘ OFFLINE\n\nBạn có muốn tải toàn bộ dữ liệu ứng dụng về máy không?');
    if (!xacNhan) return;

    try {
        // Tự động lấy cache key hiện tại từ SW hoặc dùng fallback
        const cacheKeys = await caches.keys();
        const activeCacheName = cacheKeys.find(k => k.startsWith('dailuantri-')) || 'dailuantri-v1.5.5';
        const cache = await caches.open(activeCacheName);

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
// 4. AI Backup tra cứu dữ liệu thiếu & TỰ ĐỘNG LƯU VÀO CSDL VÀ LÀM SẠCH CẤU TRÚC
// 4. AI Backup tra cứu dữ liệu thiếu & ĐỒNG BỘ VỚI CSDL CŨ
async function fetchAIBackupResult(query, tabName, containerEl) {
    if (!containerEl) return;
    containerEl.innerHTML = `
        <div class="col-span-full text-center py-12 space-y-2 text-stone-400 bg-stone-900/60 rounded-xl border border-amber-600/30">
            <i class="fa-solid fa-brain fa-spin text-3xl text-amber-500 block mb-1"></i>
            <p class="text-sm font-bold text-amber-400">Không tìm thấy trong CSDL offline. Trợ lý AI đang tra cứu & đồng bộ...</p>
            <p class="text-xs text-stone-500">Từ khóa: "${escapeHTML(query)}"</p>
        </div>
    `;
    try {
        const prompt = `Bạn là hệ thống CSDL YHCT. Hãy cung cấp thông tin về "${query}" thuộc danh mục ${tabName}. 
        BẮT BUỘC trả về đúng định dạng JSON thuần túy (không kèm chữ nào khác ngoài JSON):
        - Nếu là Luận Trị: {"hc": "...", "pdt": "...", "tc": ["..."], "bt": "...", "tpbt": ["..."]}
        - Nếu là Dược Liệu/Huyệt/Trà: {"ten": "...", "nhom": "...", "cong_dung": "...", "cach_dung": "...", "thanh_phan": ["..."]}`;

        const res = await fetch(getApiEndpoint(), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                prompt: prompt, 
                source: 'backup',
                max_tokens: 400 
            })
        });
        const data = await res.json();
        
        if (res.ok && data.reply) {
    let parsedObj = parseJsonFromAI(data.reply);
    if (!parsedObj) {
        parsedObj = { 
            ten: query, 
            nhom: tabName,
            cong_dung: data.reply,
            cach_dung: "Hãm với nước sôi 85-90°C trong 10-15 phút.",
            thanh_phan: [query]
        };
    }
            // Gọi hàm lưu trữ và chuẩn hóa dữ liệu vào LocalStorage
            luuKetQuaAiVaoDb(query, tabName, parsedObj);
            // Tự động kích hoạt lại hàm lọc/render của từng Tab để hiển thị thành Card chuẩn xác 100%
            if (tabName.includes('Trà Dược') || tabName.includes('Tra')) {
                filterTra();
            } else if (tabName.includes('Dược Liệu')) {
                filterDuocLieu();
            } else if (tabName.includes('Huyệt Vị')) {
                filterHuyetVi();
            } else {
                updateLuanTri(query, true);
            }

        } else {
            containerEl.innerHTML = `<div class="col-span-full text-center py-8 text-xs text-stone-500">AI Backup không phản hồi.</div>`;
        }
    } catch (err) {
        console.error("Lỗi AI Backup:", err);
        containerEl.innerHTML = `<div class="col-span-full text-center py-8 text-xs text-red-400">Lỗi kết nối AI.</div>`;
    }
}
// --- THÊM ĐOẠN NÀY VÀO NGOÀI CÙNG APP.JS ---
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js', { scope: './' })
            .then(reg => console.log('Service Worker đã luôn được kích hoạt an toàn!'))
            .catch(err => console.error('Lỗi khởi động SW:', err));
    });
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

// AI Phân tích riêng cho Hội chứng (Đã tối ưu Caching chống Spam Quota)
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


// 2. Hoàn thiện hàm fetchAIBtDesc có cả AbortController lẫn Caching & Render
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

// Hàm Bật/Tắt AI hoàn toàn độc lập
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
// --- QUẢN LÝ TÍNH NĂNG VỌNG CHẨN AI ---
let vongChanImageBase64 = null;
let cameraStream = null;
let currentVongChanRecord = null;

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

// Xử lý khi chọn file ảnh từ thiết bị
// Xử lý khi chọn file ảnh từ thiết bị
async function guiPhanTichVongChan() {
    if (!vongChanImageBase64) {
        alert("Vui lòng chụp ảnh hoặc tải ảnh lên trước khi thực hiện phân tích!");
        return;
    }

    const typeSelect = document.getElementById('vong-chan-type')?.value;
    const noteText = document.getElementById('vong-chan-note')?.value.trim();
    const useHistory = !!document.getElementById('vong-chan-use-history')?.checked; 
    const btnSubmit = document.getElementById('btn-phan-tich-vong-chan');
    const resultBox = document.getElementById('vong-chan-result');
    const outputEl = document.getElementById('vong-chan-output');
    const btnSave = document.getElementById('btn-save-vongchan');

    if (btnSave) btnSave.classList.add('hidden');
    currentVongChanRecord = null;

    let typeText = "Thiệt chẩn (Lưỡi)";
    if (typeSelect === "dien_chan") typeText = "Diện chẩn (Sắc mặt, thần thái)";
    if (typeSelect === "da_da") typeText = "Sắc da / Thương tổn ngoài da";

    // Trích xuất lịch sử từ IndexedDB an toàn
    let historyContext = "";
    if (useHistory) {
        try {
            const db = await openVongChanDB();
            const tx = db.transaction('history', 'readonly');
            const store = tx.objectStore('history');
            const request = store.getAll();
            
            await new Promise((resolve) => {
                request.onsuccess = () => {
                    const history = request.result || [];
                    if (history.length > 0) {
                        // Sắp xếp bản ghi mới nhất
                        history.sort((a, b) => b.id - a.id);
                        const last = history[0];
                        const safeReply = last.reply ? String(last.reply).replace(/[\n\r]+/g, ' ').substring(0, 80) : '';
                        historyContext = `\nLần khám gần nhất (${last.date}): ${last.note}. KQ: ${safeReply}...`;
                    }
                    resolve();
                };
                request.onerror = () => resolve();
            });
        } catch (e) {
            console.error("Lỗi trích xuất lịch sử từ IndexedDB:", e);
        }
    }

    // Prompt ngắn gọn, đúng trọng tâm
    const promptText = `Chuyên gia YHCT: Phân tích hình ảnh theo phương pháp "${typeText}".
Triệu chứng: "${noteText || 'Không'}". ${historyContext}

Yêu cầu súc tích (<200 từ, tiếng Việt, không dùng chữ Hán):
1. Hình thái đặc trưng
2. Biện chứng YHCT (Căn bệnh, Bát cương, Tạng phủ)
3. Định hướng điều trị & Cổ phương`;

    btnSubmit.disabled = true;
    btnSubmit.classList.add('opacity-50', 'pointer-events-none');
    btnSubmit.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> AI đang soi hình ảnh & đối chiếu lịch sử...`;
    
    resultBox.classList.remove('hidden');
    outputEl.innerHTML = `<div class="text-amber-400 italic flex items-center gap-1.5"><i class="fa-solid fa-brain fa-spin"></i> AI đang phân tích hình ảnh & dữ liệu...</div>`;

    try {
        const res = await fetch(getApiEndpoint(), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                prompt: promptText, 
                image: vongChanImageBase64,
                source: 'vongchan',
                max_tokens: 400
            })
        });

        const data = await res.json();
        if (res.ok && data.reply) {
            outputEl.innerHTML = formatAIMessage(data.reply);

            currentVongChanRecord = {
                id: Date.now(),
                date: new Date().toLocaleString('vi-VN'),
                type: typeText,
                note: noteText || 'Không có',
                image: vongChanImageBase64,
                reply: data.reply
            };

            if (btnSave) btnSave.classList.remove('hidden');
        } else {
            outputEl.innerHTML = `<div class="text-red-400 font-medium p-2 bg-red-950/40 border border-red-800 rounded">⚠️ ${escapeHTML(data.error || 'AI không thể nhận diện được hình ảnh.')}</div>`;
        }
    } catch (err) {
        console.error("Lỗi gửi Vọng chẩn:", err);
        outputEl.innerHTML = `<div class="text-red-400 font-medium p-2 bg-red-950/40 border border-red-800 rounded">⚠️ Lỗi kết nối đến server AI.</div>`;
    } finally {
        btnSubmit.disabled = false;
        btnSubmit.classList.remove('opacity-50', 'pointer-events-none');
        btnSubmit.innerHTML = `<i class="fa-solid fa-brain"></i> AI Phân Tích Vọng Chẩn`;
    }
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
// Hàm kiểm tra và tự động giải phóng bộ nhớ LocalStorage nếu gần đầy
function checkAndCleanStorage() {
    try {
        let history = JSON.parse(localStorage.getItem('vongChanHistory') || '[]');
        if (Array.isArray(history) && history.length > 8) {
            // Tự động cắt giảm bớt các bản ghi cũ nhất, chỉ giữ lại 8 bản ghi gần nhất
            history = history.slice(0, 8);
            localStorage.setItem('vongChanHistory', JSON.stringify(history));
        }
    } catch (e) {
        console.warn("Dọn dẹp LocalStorage để tránh tràn bộ nhớ:", e);
    }
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
            
            // Kiểm tra nếu bản ghi đã tồn tại
            const isExisted = history.some(item => item.id === currentVongChanRecord.id);
            if (isExisted) {
                alert("Hồ sơ này đã được lưu trước đó!");
                return;
            }

            // Tự động xóa các bản ghi cũ nhất nếu đã đủ/vượt 10 bản ghi
            if (history.length >= 10) {
                history.sort((a, b) => a.id - b.id); // Xếp cũ -> mới
                const deleteCount = history.length - 9; // Chừa 9 chỗ cho bản ghi mới
                for (let i = 0; i < deleteCount; i++) {
                    store.delete(history[i].id);
                }
            }

            // Thêm bản ghi mới
            store.put(currentVongChanRecord);
        };

        tx.oncomplete = () => {
            alert("Đã lưu hồ sơ Vọng chẩn thành công!");
            hienThiLichSuVongChan();
        };
    } catch (err) {
        console.error("Lỗi khi lưu vào IndexedDB:", err);
        alert("Không thể lưu hồ sơ vào cơ sở dữ liệu trình duyệt.");
    }
}

// 2. Hiển thị danh sách lịch sử đã lưu
async function hienThiLichSuVongChan() {
    const listEl = document.getElementById('vong-chan-history-list');
    if (!listEl) return;

    try {
        const db = await openVongChanDB();
        const tx = db.transaction('history', 'readonly');
        const store = tx.objectStore('history');
        const request = store.getAll();

        request.onsuccess = () => {
            let history = request.result || [];
            
            // Sắp xếp bản ghi mới nhất lên đầu
            history.sort((a, b) => b.id - a.id);

            if (history.length === 0) {
                listEl.innerHTML = `<div class="text-stone-500 text-center text-xs py-3 italic">Chưa có hồ sơ Vọng chẩn nào được lưu.</div>`;
                return;
            }

            listEl.innerHTML = history.map(item => `
                <div class="bg-stone-900/80 p-2.5 rounded-lg border border-stone-800 text-xs flex items-center justify-between gap-3 hover:border-amber-600/40 transition-all">
                    <div class="flex items-center gap-2.5 overflow-hidden">
                        <img src="${item.image}" class="w-10 h-10 object-cover rounded border border-stone-700 flex-shrink-0" alt="Ảnh chẩn đoán">
                        <div class="truncate">
                            <div class="font-bold text-amber-400 truncate">${escapeHTML(item.type)}</div>
                            <div class="text-[10px] text-stone-400">${item.date} - Ghi chú: ${escapeHTML(item.note)}</div>
                        </div>
                    </div>
                    <div class="flex items-center gap-1.5 flex-shrink-0">
                        <button onclick='xemLaiVongChan(${item.id})' class="px-2 py-1 bg-stone-800 hover:bg-stone-700 text-amber-400 font-bold rounded text-[10px] border border-stone-700">
                            <i class="fa-solid fa-eye"></i> Xem
                        </button>
                        <button onclick='xoaItemVongChan(${item.id})' class="px-2 py-1 bg-red-950/60 hover:bg-red-900 text-red-400 font-bold rounded text-[10px] border border-red-900/50">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </div>
            `).join('');
        };
    } catch (e) {
        console.error("Lỗi khi đọc danh sách từ IndexedDB:", e);
        listEl.innerHTML = `<div class="text-red-400 text-center text-xs py-3">Lỗi tải dữ liệu lịch sử.</div>`;
    }
}

// Xem lại chi tiết bài chẩn đoán
async function xemLaiVongChan(id) {
    try {
        const db = await openVongChanDB();
        const tx = db.transaction('history', 'readonly');
        const store = tx.objectStore('history');
        const request = store.get(id);

        request.onsuccess = () => {
            const record = request.result;
            if (!record) return;

            const typeSelect = document.getElementById('vong-chan-type');
            const noteText = document.getElementById('vong-chan-note');

            if (typeSelect && record.type) {
                if (record.type.includes("Thiệt")) typeSelect.value = "thiet_chan";
                else if (record.type.includes("Diện")) typeSelect.value = "dien_chan";
                else if (record.type.includes("Sắc da")) typeSelect.value = "da_da";
            }
            if (noteText) noteText.value = record.note !== 'Không có' ? record.note : '';

            const imgEl = document.getElementById('vong-chan-img-preview');
            const placeholder = document.getElementById('vong-chan-placeholder');
            if (imgEl && placeholder) {
                imgEl.src = record.image;
                imgEl.classList.remove('hidden');
                placeholder.classList.add('hidden');
            }

            const resultBox = document.getElementById('vong-chan-result');
            const outputEl = document.getElementById('vong-chan-output');
            if (resultBox && outputEl) {
                resultBox.classList.remove('hidden');
                outputEl.innerHTML = formatAIMessage(record.reply);
                document.getElementById('btn-save-vongchan')?.classList.add('hidden');
            }

            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    } catch (e) {
        console.error("Lỗi xem lại bài:", e);
    }
}

// Xóa 1 mục trong IndexedDB
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

// Xóa toàn bộ lịch sử IndexedDB
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


// Fix rò rỉ bộ nhớ Blob URL
// 1. Sửa hàm chọn file Vọng chẩn: Chuyển sang Base64 chuẩn và thu hồi URL an toàn
// 1. Sửa lỗi dọn dẹp Object URL & đọc Base64 chuẩn
let currentPreviewObjectUrl = null;

function xuLyChonFileVongChan(event) {
    const file = event.target.files && event.target.files[0];
    if (!file || !file.type.startsWith('image/')) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            // Khởi tạo canvas để nén ảnh
            const canvas = document.createElement('canvas');
            const maxDim = 512; // Giới hạn kích thước tối đa 512px
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

            // Nén sang JPEG chất lượng 0.55
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


// --- TỐI ƯU CẤU TRÚC LƯU TRỮ VÀ XỬ LÝ DỮ LIỆU AI ---

function luuKetQuaAiVaoDb(query, tabName, objData) {
    if (!query || !objData) return;
    const cleanKey = removeAccents(query).trim().replace(/\s+/g, '_');

    // 1. Tab Biện chứng Luận trị
    if (tabName.includes('Luận Trị')) {
        if (typeof database === 'undefined') window.database = {};
        
        database[cleanKey] = {
            hc: objData.hc || query.toUpperCase(),
            pdt: objData.pdt || "Theo chỉ định AI",
            tc: Array.isArray(objData.tc) ? objData.tc : [query],
            bt: objData.bt || "Đối chứng nghiệm phương",
            tpbt: Array.isArray(objData.tpbt) ? objData.tpbt : [],
            isAiGenerated: true
        };
        try { localStorage.setItem('custom_database', JSON.stringify(database)); } catch (e) {}
    }
    // 2. Tab Dược Liệu
    else if (tabName.includes('Dược Liệu')) {
        if (typeof duocLieuData === 'undefined') window.duocLieuData = [];
        const newObj = {
            ten: objData.ten || query,
            nhom: objData.nhom || "Dược liệu YHCT",
            cong_dung: (!objData.cong_dung || objData.cong_dung === "Đang cập nhật") ? "Tư âm dưỡng huyết, khu phong trừ thấp." : objData.cong_dung,
            kieng_ky: objData.kieng_ky || objData.luu_y || "Tuân thủ liều lượng phối ngũ tiêu chuẩn.",
            isAiGenerated: true
        };
        let idx = duocLieuData.findIndex(d => removeAccents(d.ten) === removeAccents(query));
        if (idx >= 0) duocLieuData[idx] = { ...duocLieuData[idx], ...newObj };
        else duocLieuData.unshift(newObj);

        let custom = JSON.parse(localStorage.getItem('custom_duocLieuData') || '[]');
        let cIdx = custom.findIndex(d => removeAccents(d.ten) === removeAccents(query));
        if (cIdx >= 0) custom[cIdx] = newObj; else custom.unshift(newObj);
        safeSetLocalStorage('custom_duocLieuData', custom, 20); // Dùng safeSetLocalStorage
    }
    // 3. Tab Huyệt Vị
    else if (tabName.includes('Huyệt Vị')) {
        if (typeof huyetViData === 'undefined') window.huyetViData = [];
        const newObj = {
            ten: objData.ten || query,
            kinh: objData.kinh || "Kinh mạch YHCT",
            chu_tri: (!objData.chu_tri || objData.chu_tri === "Đang cập nhật") ? "Điều hòa khí huyết, thông kinh hoạt lạc." : objData.chu_tri,
            vi_tri: objData.vi_tri || objData.dinh_vi || "Xem mô tả chi tiết giải phẫu.",
            isAiGenerated: true
        };
        let idx = huyetViData.findIndex(h => removeAccents(h.ten) === removeAccents(query));
        if (idx >= 0) huyetViData[idx] = { ...huyetViData[idx], ...newObj };
        else huyetViData.unshift(newObj);

        let custom = JSON.parse(localStorage.getItem('custom_huyetViData') || '[]');
        let cIdx = custom.findIndex(h => removeAccents(h.ten) === removeAccents(query));
        if (cIdx >= 0) custom[cIdx] = newObj; else custom.unshift(newObj);
        safeSetLocalStorage('custom_huyetViData', custom, 20); // Dùng safeSetLocalStorage
    }
    // 4. Tab Trà Dược
    else if (tabName.includes('Trà Dược') || tabName.includes('Tra')) {
        if (typeof traData === 'undefined') window.traData = [];
        const newObj = {
            ten: objData.ten || query,
            nhom: objData.nhom || "Trà Dược YHCT",
            cong_dung: (!objData.cong_dung || objData.cong_dung === "Đang cập nhật") ? "Thanh nhiệt, giải độc, mát gan; An thần, trị mất ngủ, giảm căng thẳng." : objData.cong_dung,
            kieng_ky: objData.kieng_ky || "Phụ nữ có thai hoặc người tỳ vị hư hàn nên tham khảo ý kiến chuyên gia.",
            cach_dung: objData.cach_dung || "Hãm với nước sôi 85-90°C trong 10-15 phút.",
            thanh_phan: Array.isArray(objData.thanh_phan) ? objData.thanh_phan : [query],
            isAiGenerated: true
        };
        let idx = traData.findIndex(t => removeAccents(t.ten) === removeAccents(query));
        if (idx >= 0) traData[idx] = { ...traData[idx], ...newObj };
        else traData.unshift(newObj);

        let custom = JSON.parse(localStorage.getItem('custom_traData') || '[]');
        let cIdx = custom.findIndex(t => removeAccents(t.ten) === removeAccents(query));
        if (cIdx >= 0) custom[cIdx] = newObj; else custom.unshift(newObj);
        safeSetLocalStorage('custom_traData', custom, 20); // Dùng safeSetLocalStorage
    }
}

/**
 * Lưu dữ liệu vào localStorage kèm thời gian sống (TTL)
 * @param {string} key - Tên khóa lưu trữ
 * @param {any} value - Dữ liệu cần lưu (chuỗi, object, html...)
 * @param {number} ttlDays - Số ngày dữ liệu được phép tồn tại (mặc định 30 ngày)
 */
// Lưu cache với thời hạn mặc định 99 ngày
function setCacheWithTTL(key, value, ttlDays = 99) {
    const item = {
        value: value,
        expiry: Date.now() + (ttlDays * 24 * 60 * 60 * 1000)
    };
    try {
        localStorage.setItem(key, JSON.stringify(item));
    } catch (e) {
        // Bước 1: Dọn dẹp tất cả dữ liệu quá hạn
        cleanExpiredLocalStorage();
        try {
            localStorage.setItem(key, JSON.stringify(item));
        } catch (err) {
            // Bước 2: Nếu vẫn đầy, tiến hành giải phóng cache AI cũ
            Object.keys(localStorage).forEach(k => {
                if (k.startsWith('ai_hc_') || k.startsWith('ai_bt_')) {
                    localStorage.removeItem(k);
                }
            });
            try { localStorage.setItem(key, JSON.stringify(item)); } catch (finalErr) {}
        }
    }
}

/**
 * Đọc dữ liệu từ localStorage và tự động dọn dẹp nếu đã hết hạn
 * @param {string} key - Tên khóa lưu trữ
 * @returns {any|null} Trả về dữ liệu nếu còn hạn, ngược lại trả về null
 */
// 2. Sửa an toàn hàm Cache TTL chống crash JSON.parse
function getCacheWithTTL(key) {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) return null;

    try {
        const item = JSON.parse(itemStr);
        if (!item || typeof item !== 'object' || !('expiry' in item)) {
            return itemStr; // Fallback nếu dữ liệu lưu dạng chuỗi cũ
        }

        const now = new Date();
        if (now.getTime() > item.expiry) {
            localStorage.removeItem(key); // Xóa cache quá hạn
            return null;
        }
        return item.value;
    } catch (e) {
        return itemStr; 
    }
}
// Hàm phụ trợ: Tự động xóa các mục đã hết hạn trong LocalStorage
function cleanExpiredLocalStorage() {
    const now = Date.now();
    Object.keys(localStorage).forEach(key => {
        try {
            const item = JSON.parse(localStorage.getItem(key));
            if (item && typeof item === 'object' && item.expiry && now > item.expiry) {
                localStorage.removeItem(key);
            }
        } catch (e) {}
    });
}
// --- QUẢN LÝ TÍNH NĂNG PHỐI NGŨ BÀI THUỐC TỰ DO ---
let currentFormulaHerbs = [];

// Cập nhật mảng tabs trong switchTab để hỗ trợ 'phoingu'
// (Đảm bảo trong hàm switchTab, biến tabs có chứa 'phoingu' và pascalMap có mapping tương ứng)

function suggestPhoiNguHerbs() {
    const input = document.getElementById('search-phoingu-input');
    const dropdown = document.getElementById('phoingu-dropdown');
    if (!input || !dropdown) return;

    const query = removeAccents(input.value).trim().toLowerCase();
    const rawQuery = input.value.trim();
    if (!query) {
        dropdown.classList.add('hidden');
        return;
    }

    if (typeof duocLieuData === 'undefined' || !Array.isArray(duocLieuData)) return;

    const matches = duocLieuData.filter(d => removeAccents(d.ten).toLowerCase().includes(query)).slice(0, 10);

    if (matches.length > 0) {
        dropdown.innerHTML = matches.map(m => `
            <div onclick="chonViThuocPhoiNgu('${escapeHTML(m.ten).replace(/'/g, "\\'")}')" class="p-2 hover:bg-stone-800 border-b border-stone-800/80 cursor-pointer text-xs text-amber-400 font-medium">
                <i class="fa-solid fa-leaf text-emerald-500 mr-1.5"></i> ${escapeHTML(m.ten)} <span class="text-stone-500 text-[10px]">(${escapeHTML(m.nhom || '')})</span>
            </div>
        `).join('');
        dropdown.classList.remove('hidden');
    } else {
        // HIỂN THỊ NÚT AI TÌM KHI KHÔNG CÓ KẾT QUẢ
        dropdown.innerHTML = `
            <div class="p-3 text-xs text-stone-400 text-center space-y-2">
                <div>Không tìm thấy vị thuốc <strong>"${escapeHTML(rawQuery)}"</strong></div>
                <button onclick="aiTimViThuocPhoiNgu('${escapeHTML(rawQuery).replace(/'/g, "\\'")}')" class="px-3 py-1.5 bg-amber-950/80 text-amber-400 border border-amber-600/60 rounded flex items-center justify-center gap-1.5 hover:bg-amber-900 transition-colors mx-auto w-full font-bold shadow-sm cursor-pointer">
                    <i class="fa-solid fa-robot"></i> AI Tìm & Thêm Vào Bài
                </button>
            </div>
        `;
        dropdown.classList.remove('hidden');
    }
}
async function aiTimViThuocPhoiNgu(query) {
    const dropdown = document.getElementById('phoingu-dropdown');
    if (!dropdown) return;

    // Hiển thị trạng thái đang tải
    dropdown.innerHTML = `
        <div class="p-3 text-center space-y-2 bg-stone-900/90">
            <i class="fa-solid fa-brain fa-spin text-amber-500 text-xl block"></i>
            <div class="text-xs text-stone-300 font-medium">AI đang tra cứu và thêm "${escapeHTML(query)}"...</div>
        </div>
    `;

    try {
        const prompt = `Bạn là hệ thống CSDL YHCT. Hãy cung cấp thông tin về vị thuốc "${query}". 
        BẮT BUỘC trả về đúng định dạng JSON thuần túy (không kèm chữ nào khác ngoài JSON):
        {"ten": "${query}", "nhom": "Dược liệu", "cong_dung": "...", "kieng_ky": "..."}`;

        const res = await fetch(getApiEndpoint(), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: prompt, source: 'backup', max_tokens: 300 })
        });
        const data = await res.json();

        if (res.ok && data.reply) {
            let parsedObj = parseJsonFromAI(data.reply);
            if (!parsedObj) {
                parsedObj = { 
                    ten: query, 
                    nhom: "Dược liệu", 
                    cong_dung: data.reply,
                    kieng_ky: "Chưa có thông tin kiêng kỵ cụ thể."
                };
            }
            
            // 1. Lưu dược liệu AI tìm được vào CSDL offline (để dùng cho tab Dược Liệu sau này)
            luuKetQuaAiVaoDb(parsedObj.ten, 'Dược Liệu', parsedObj);
            
            // 2. Tự động thêm vị thuốc đó vào Bài thuốc Phối ngũ hiện tại
            chonViThuocPhoiNgu(parsedObj.ten);
        } else {
            dropdown.innerHTML = `<div class="p-3 text-xs text-red-400 text-center font-medium">AI không nhận diện được dược liệu này.</div>`;
        }
    } catch (err) {
        console.error("Lỗi AI Phối Ngũ:", err);
        dropdown.innerHTML = `<div class="p-3 text-xs text-red-400 text-center font-medium">Lỗi kết nối máy chủ AI.</div>`;
    }
}


function chonViThuocPhoiNgu(tenViThuoc) {
    const name = String(tenViThuoc).trim();
    if (!name) return;

    if (!currentFormulaHerbs.includes(name)) {
        currentFormulaHerbs.push(name);
    }

    const input = document.getElementById('search-phoingu-input');
    const dropdown = document.getElementById('phoingu-dropdown');
    if (input) input.value = '';
    if (dropdown) dropdown.classList.add('hidden');

    renderPhoiNguUI();
}

function xoaViThuocPhoiNgu(index) {
    currentFormulaHerbs.splice(index, 1);
    renderPhoiNguUI();
}

async function renderPhoiNguUI() {
    const listEl = document.getElementById('selected-herbs-list');
    const countEl = document.getElementById('count-phoingu-herbs');
    const resultEl = document.getElementById('phoingu-analysis-result');
    if (!listEl || !resultEl) return;

    countEl.innerText = currentFormulaHerbs.length;

    if (currentFormulaHerbs.length === 0) {
        listEl.innerHTML = `<span class="text-xs text-stone-500 italic">Chưa có vị thuốc nào được chọn. Hãy tìm và thêm vị thuốc.</span>`;
        resultEl.innerHTML = `<div class="text-xs text-stone-500 italic text-center py-4">Thêm ít nhất 2 vị thuốc để hệ thống phân tích tương kỵ và phối ngũ.</div>`;
        return;
    }

    // Hiển thị các tag vị thuốc đã chọn
    listEl.innerHTML = currentFormulaHerbs.map((herb, idx) => `
        <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-stone-800 text-amber-400 border border-stone-700 rounded-lg text-xs font-semibold shadow-sm">
            <i class="fa-solid fa-leaf text-emerald-500 text-[10px]"></i> ${escapeHTML(herb)}
            <button onclick="xoaViThuocPhoiNgu(${idx})" class="text-stone-400 hover:text-red-400 ml-1 cursor-pointer"><i class="fa-solid fa-xmark"></i></button>
        </span>
    `).join('');

    // Kiểm tra tương kỵ sử dụng hàm kiemTraTuongKy có sẵn
    const listCanhBao = kiemTraTuongKy(currentFormulaHerbs);
    
    let warningHTML = "";
    if (listCanhBao.length > 0) {
        warningHTML = `
            <div class="p-3 bg-red-950/40 border border-red-800 rounded-lg text-xs space-y-1">
                <div class="text-red-400 font-bold flex items-center gap-1.5 uppercase">
                    <i class="fa-solid fa-triangle-exclamation"></i> Cảnh báo tương kỵ lâm sàng (18 phản / 19 úy):
                </div>
                <ul class="list-disc pl-5 text-red-300 font-medium">
                    ${listCanhBao.map(cb => `<li>Phát hiện cặp vị thuốc xung khắc: <strong>${escapeHTML(cb)}</strong></li>`).join('')}
                </ul>
            </div>
        `;
    } else {
        warningHTML = `
            <div class="p-3 bg-emerald-950/30 border border-emerald-800/60 rounded-lg text-xs text-emerald-400 font-medium flex items-center gap-2">
                <i class="fa-solid fa-circle-check text-sm"></i> An toàn: Không phát hiện cặp vị thuốc xung khắc trong danh mục 18 phản / 19 úy.
            </div>
        `;
    }

    // Tổng hợp công năng từ CSDL duocLieuData nếu có
    let summaryCongDung = [];
    if (typeof duocLieuData !== 'undefined' && Array.isArray(duocLieuData)) {
        currentFormulaHerbs.forEach(h => {
            const found = duocLieuData.find(d => removeAccents(d.ten).toLowerCase() === removeAccents(h).toLowerCase());
            if (found && found.cong_dung) {
                summaryCongDung.push(`<strong>${escapeHTML(h)}:</strong> ${escapeHTML(found.cong_dung)}`);
            }
        });
    }

    resultEl.innerHTML = `
        <div class="space-y-3">
            ${warningHTML}
            <div class="bg-stone-900/90 p-4 rounded-lg border border-stone-800 space-y-2">
                <div class="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                    <i class="fa-solid fa-book-medical"></i> Tổng hợp công năng chủ trị các vị:
                </div>
                ${summaryCongDung.length > 0 ? `
                    <ul class="list-disc pl-5 text-xs text-stone-300 space-y-1">
                        ${summaryCongDung.map(cd => `<li>${cd}</li>`).join('')}
                    </ul>
                ` : `<div class="text-xs text-stone-400 italic">Đang cập nhật công năng chi tiết cho các vị thuốc này.</div>`}
            </div>

            <!-- KHUNG HIỂN THỊ ĐÁNH GIÁ TỔNG THỂ TỪ AI -->
            <div class="bg-stone-900/95 p-4 rounded-lg border border-amber-600/50 space-y-2 relative shadow-lg">
                <div class="flex items-center justify-between border-b border-stone-800 pb-2">
                    <div class="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                        <i class="fa-solid fa-robot text-amber-500"></i> Đánh giá tổng thể bài thuốc (Chuyên gia AI)
                    </div>
                    <button onclick="aiDanhGiaTongTheBaiThuoc()" class="px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-lg text-xs flex items-center gap-1.5 transition-all shadow cursor-pointer">
                        <i class="fa-solid fa-brain"></i> Đánh giá ngay
                    </button>
                </div>
                <div id="ai-tong-the-content" class="text-xs text-stone-300 leading-relaxed pt-1">
                    Nhấn nút <strong class="text-amber-400">"Đánh giá ngay"</strong> để chuyên gia AI phân tích tính Quân - Thần - Tá - Sứ, chủ trị lâm sàng và mức độ hòa hợp của bài thuốc tự do này.
                </div>
            </div>
        </div>
    `;
}

// HÀM GỌI AI ĐÁNH GIÁ TỔNG THỂ BÀI THUỐC
async function aiDanhGiaTongTheBaiThuoc() {
    const contentEl = document.getElementById('ai-tong-the-content');
    if (!contentEl || currentFormulaHerbs.length === 0) return;

    contentEl.innerHTML = `<div class="text-amber-400 italic flex items-center gap-1.5 py-2"><i class="fa-solid fa-brain fa-spin"></i> Chuyên gia AI đang phân tích Quân Thần Tá Sứ và tổng thể bài thuốc...</div>`;

    try {
        const prompt = `Bạn là một chuyên gia Y học cổ truyền (YHCT). Hãy đánh giá tổng thể bài thuốc tự do gồm các vị thuốc sau: ${currentFormulaHerbs.join(', ')}. 
        Yêu cầu phân tích ngắn gọn (<200 từ, tiếng Việt, không dùng chữ Hán):
        1. Phân định Quân - Thần - Tá - Sứ (vị nào chủ đạo, vị nào hỗ trợ).
        2. Tổng hợp chủ trị lâm sàng chính của bài thuốc.
        3. Đánh giá mức độ phối ngũ và lưu ý khi sử dụng.`;

        const res = await fetch(getApiEndpoint(), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: prompt, source: 'phoingu_danhgia', max_tokens: 400 })
        });
        const data = await res.json();

        if (res.ok && data.reply) {
            contentEl.innerHTML = formatAIMessage(data.reply);
        } else {
            contentEl.innerHTML = `<div class="text-red-400 font-medium">⚠️ Không nhận được phản hồi từ AI.</div>`;
        }
    } catch (err) {
        console.error("Lỗi AI đánh giá tổng thể:", err);
        contentEl.innerHTML = `<div class="text-red-400 font-medium">⚠️ Lỗi kết nối đến máy chủ AI.</div>`;
    }
}


