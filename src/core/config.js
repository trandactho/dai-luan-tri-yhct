const DOMAIN_NETLIFY = 'https://dailuantriyhct.com';
const APP_VERSION = '1.6.5';

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
window.duocThienData = window.duocThienData || []; // <-- BỔ SUNG DÒNG NÀY
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
