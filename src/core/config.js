// ==========================================================================
// CONFIG.JS - CẤU HÌNH HỆ THỐNG, TRẠNG THÁI & GIAO DIỆN MẪU
// ==========================================================================

const DOMAIN_NETLIFY = 'https://dailuantriyhct.com';
const APP_VERSION = '1.7.6';

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
    aiBtActive: false, // Trạng thái AI Bài thuốc
    auth: {
        role: 'GUEST',
        user: null,
        token: null
    }
};

const AppStore = {
    database: {},
    duocLieu: [],
    huyetVi: [],
    duocThien: [],
    tra: [],
    questions: [],
    
    init() {
        if (typeof database !== 'undefined') this.database = database;
        if (typeof duocLieuData !== 'undefined') this.duocLieu = duocLieuData;
        if (typeof huyetViData !== 'undefined') this.huyetVi = huyetViData;
        if (typeof duocThienData !== 'undefined') this.duocThien = duocThienData;
        if (typeof traData !== 'undefined') this.tra = traData;
        if (typeof questionsData !== 'undefined') this.questions = questionsData;
    }        
};

// Khai báo sẵn các biến toàn cục chống lỗi ReferenceError
window.database = window.database || {};
window.duocLieuData = window.duocLieuData || [];
window.huyetViData = window.huyetViData || [];
window.duocThienData = window.duocThienData || []; 
window.traData = window.traData || [];
window.questionsData = window.questionsData || [];

const ORIGINAL_PDF_AREA_HTML = `
    <div id="lt-card-hc" class="bg-dark-box p-5 rounded-lg space-y-2 border border-stone-800">
        <div class="flex justify-between items-center mb-3 border-b border-stone-800 pb-2">
            <div>
                <div class="text-stone-300 text-xs font-bold uppercase tracking-wider">Hội chứng biện chứng</div>
                <div id="hoi-chung" class="text-lg font-bold text-amber-400 transition-all">---</div>
            </div>
            <button id="ai-toggle-hc" onclick="chayLenhAi(this, 'hc')" data-min-role="FREE" data-feature-name="AI Phân Tích Hội Chứng" class="px-2 py-1 bg-stone-800 hover:bg-stone-700 text-amber-400 border border-stone-700 font-bold rounded text-[11px] flex items-center gap-1 transition-all shadow-sm whitespace-nowrap flex-shrink-0">
                <i class="fa-solid fa-robot text-[10px]"></i> AI
            </button>
        </div>
        <div id="ai-hc-desc" class="hidden text-xs text-stone-300 pt-2 border-t border-stone-800/80 leading-relaxed"></div>
    </div>

    <div class="bg-dark-box p-5 rounded-lg border border-stone-800">
        <div class="text-stone-300 text-xs font-bold uppercase tracking-wider mb-2"><i class="fa-solid fa-stethoscopes mr-1.5 text-amber-500"></i>Triệu chứng lâm sàng</div>
        <ul id="trieu-chung" class="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1 list-disc pl-5 text-sm text-stone-200"></ul>
    </div>
    
    <div id="lt-card-pdt" class="bg-dark-box p-5 rounded-lg border border-stone-800">
        <div class="text-stone-300 text-xs font-bold uppercase tracking-wider mb-2"><i class="fa-solid fa-gavel mr-1.5 text-emerald-500"></i>Pháp trị chuẩn hóa</div>
        <div id="phap-dieu-tri" class="text-base font-semibold text-emerald-400 transition-all">---</div>
    </div>

    <div id="lt-card-bt" class="bg-dark-box p-5 rounded-lg space-y-2 relative border border-stone-800">
        <div class="flex justify-between items-center mb-3 border-b border-stone-800 pb-2">
            <div>
                <div class="text-stone-300 text-xs font-bold uppercase tracking-wider">Đối chiếu cổ phương</div>
                <div id="bai-thuoc" class="text-lg font-bold text-amber-400 transition-all">---</div>
            </div>
            <button id="ai-toggle-bt" onclick="chayLenhAi(this, 'bt')" data-min-role="FREE" data-feature-name="AI Phân Tích Bài Thuốc" class="px-2 py-1 bg-stone-800 hover:bg-stone-700 text-amber-400 border border-stone-700 font-bold rounded text-[11px] flex items-center gap-1 transition-all shadow-sm whitespace-nowrap flex-shrink-0">
                <i class="fa-solid fa-robot text-[10px]"></i> AI
            </button>
        </div>
        <div class="text-stone-300 text-xs font-bold uppercase mb-2">Thành phần quân thần tá sứ:</div>
        <div id="chi-tiet-bai-thuoc" class="flex flex-wrap gap-2 transition-all"></div>
        <div id="ai-bt-desc" class="hidden text-xs text-stone-300 pt-2 border-t border-stone-800/80 leading-relaxed"></div>
    </div>
`;
