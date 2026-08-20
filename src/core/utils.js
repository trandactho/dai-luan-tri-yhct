// Cấu hình phân tầng quyền lợi tài khoản
const ROLE_CONFIG = {
    GUEST: {
        tokenMultiplier: 1.0,
        showAds: true,
        name: 'Tài khoản Miễn phí'
    },
    VIP: {
        tokenMultiplier: 1.5,
        showAds: false,
        name: 'Tài khoản VIP'
    },
    SVIP: {
        tokenMultiplier: 2.0,
        showAds: false,
        name: 'Tài khoản SVIP'
    }
};

// 1. Hàm kiểm tra ẩn/hiện quảng cáo
function shouldShowAds() {
    const role = AppState.auth?.role || 'GUEST';
    return ROLE_CONFIG[role]?.showAds ?? true;
}

// 2. Hàm ẩn/hiện Banner Quảng cáo trên UI
function renderAdsControl() {
    const adContainers = document.querySelectorAll('.ad-banner-container');
    const isShow = shouldShowAds();
    
    adContainers.forEach(el => {
        if (isShow) {
            el.classList.remove('hidden');
        } else {
            el.classList.add('hidden');
        }
    });
}

// --- QUẢN LÝ LƯU TRẠNG THÁI TÌM KIẾM ---
function saveDuocLieuState() {
    sessionStorage.setItem('dl_search', getVal('searchDuocLieu'));
    sessionStorage.setItem('dl_group', getVal('filterNhomDuocLieu'));
}

function restoreDuocLieuState() {
    const search = sessionStorage.getItem('dl_search');
    const group = sessionStorage.getItem('dl_group');
    const input = document.getElementById('searchDuocLieu');
    const select = document.getElementById('filterNhomDuocLieu');
    
    if (input && search !== null) input.value = search;
    if (select && group !== null) select.value = group;
}

function saveHuyetViState() {
    sessionStorage.setItem('hv_search', getVal('searchHuyetVi'));
    sessionStorage.setItem('hv_kinh', getVal('filterKinhLac'));
}

function restoreHuyetViState() {
    const search = sessionStorage.getItem('hv_search');
    const kinh = sessionStorage.getItem('hv_kinh');
    const input = document.getElementById('searchHuyetVi');
    const select = document.getElementById('filterKinhLac');
    
    if (input && search !== null) input.value = search;
    if (select && kinh !== null) select.value = kinh;
}

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

function safeSetLocalStorage(key, dataArray, maxItems = 30) {
    try {
        if (!window.localStorage) return;
        if (Array.isArray(dataArray) && dataArray.length > maxItems) {
            dataArray = dataArray.slice(0, maxItems);
        }
        localStorage.setItem(key, JSON.stringify(dataArray));
    } catch (e) {
        console.warn(`LocalStorage bị giới hạn hoặc đầy ở khóa "${key}":`, e);
        // Tiến hành dọn dẹp khẩn cấp bộ nhớ cache
        cleanExpiredLocalStorage();
        try {
            localStorage.setItem(key, JSON.stringify(dataArray.slice(0, 10))); // Lưu rút gọn
        } catch (err) {
            // Bỏ qua nếu vẫn không thể ghi
        }
    }
}

function removeAccents(str) {
    return (str || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function parseSearchQuery(rawQuery) {
    if (!rawQuery) return { txtRaw: '', queryWords: [] };
    const txtRaw = String(rawQuery).trim().normalize('NFC');
    const cleanTxt = txtRaw.toLowerCase().replace(/[,\.;:?!()\[\]{}]/g, ' ');
    const queryWords = cleanTxt.split(/\s+/).filter(Boolean);
    return { txtRaw, queryWords };
}

function debounce(func, delay = 100) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
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

function checkAndCleanStorage() {
    try {
        let history = JSON.parse(localStorage.getItem('vongChanHistory') || '[]');
        if (Array.isArray(history) && history.length > 20) {
            history = history.slice(0, 20); // Giữ tối đa 20 hồ sơ gần nhất
            localStorage.setItem('vongChanHistory', JSON.stringify(history));
        }
    } catch (e) {
        console.warn("Dọn dẹp LocalStorage để tránh tràn bộ nhớ:", e);
    }
}

function setCacheWithTTL(key, value, ttlDays = 180) {
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

function cleanExpiredLocalStorage() {
    const now = Date.now();
    Object.keys(localStorage).forEach(key => {
        try {
            // Xóa các key cache AI quá hạn hoặc các key tạm thời
            const itemStr = localStorage.getItem(key);
            if (itemStr.startsWith('{') && itemStr.includes('expiry')) {
                const item = JSON.parse(itemStr);
                if (item && item.expiry && now > item.expiry) {
                    localStorage.removeItem(key);
                }
            }
        } catch (e) {
            // Nếu key không đúng định dạng JSON, bỏ qua
        }
    });
}

function tinhDiemKhopTongQuat(item, rawQuery, titleField = 'ten') {
    if (!rawQuery) return 1;
    
    const queryRaw = rawQuery.toLowerCase().trim();
    const queryMain = queryRaw.replace(/\s*\(.*?\)/g, '').trim();

    // 🟢 1. XỬ LÝ RIÊNG CHO TAB LUẬN TRỊ (Khi titleField === 'hc')
    if (titleField === 'hc') {
        const baiThuoc = (item.bt || '').toLowerCase().trim();
        const hoiChung = (item.hc || '').toLowerCase().trim();
        const cleanTitle = hoiChung.replace(/\s*\(.*?\)/g, '').trim();
        const tpbtStr = Array.isArray(item.tpbt) ? item.tpbt.join(' ').toLowerCase() : '';
        const tcStr = Array.isArray(item.tc) ? item.tc.join(' ').toLowerCase() : '';

        // Tầng 1: Khớp tuyệt đối (Bài thuốc ➔ Hội chứng)
        if (baiThuoc && baiThuoc === queryRaw) return 12000;
        if (hoiChung && (hoiChung === queryRaw || cleanTitle === queryMain)) return 10000;

        // Tầng 2: Khớp chuỗi con (Bài thuốc ➔ Hội chứng ➔ Tên thuốc ➔ Triệu chứng)
        if (baiThuoc && baiThuoc.includes(queryMain)) return 8000;
        if (cleanTitle.includes(queryMain) || queryMain.includes(cleanTitle)) return 6000;
        if (tpbtStr && tpbtStr.includes(queryMain)) return 4000;
        if (tcStr && tcStr.includes(queryMain)) return 2000;

        // Tầng 3: Phân rã Token theo thứ tự ưu tiên
        const tokens = queryMain.replace(/[,\.;:?!()\[\]{}]/g, ' ').split(/\s+/).filter(Boolean);
        if (tokens.length === 0) return 0;

        let matchedTokens = 0;
        let score = 0;

        tokens.forEach(token => {
            if (baiThuoc && baiThuoc.includes(token)) {
                matchedTokens++;
                score += 40; // 1. Ưu tiên 1: Bài thuốc
            } else if (hoiChung && hoiChung.includes(token)) {
                matchedTokens++;
                score += 30; // 2. Ưu tiên 2: Hội chứng
            } else if (tpbtStr && tpbtStr.includes(token)) {
                matchedTokens++;
                score += 20; // 3. Ưu tiên 3: Tên thuốc (Thành phần)
            } else if (tcStr && tcStr.includes(token)) {
                matchedTokens++;
                score += 10; // 4. Ưu tiên 4: Triệu chứng
            }
        });

        const coverageRatio = matchedTokens / tokens.length;
        if (coverageRatio < 0.6) return 0; 
        return score * coverageRatio;
    }

    // 🔵 2. GIỮ NGUYÊN CODE GỐC CHO CÁC TAB KHÁC (Dược liệu, Huyệt vị, Trà dược)
    const mainTitle = (item[titleField] || '').toLowerCase().trim();
    const cleanTitle = mainTitle.replace(/\s*\(.*?\)/g, '').trim();
    
    const tenKhoaHoc = (item.ten_khoa_hoc || '').toLowerCase().trim();
    const pinyin = (item.pinyin || '').toLowerCase().trim();
    const maWho = (item.ma_who || '').toLowerCase().trim();

    // TẦNG 1: Khớp tuyệt đối tiêu đề chính, tên khoa học, pinyin hoặc mã WHO
    if (mainTitle === queryRaw || cleanTitle === queryMain) return 10000;
    if (tenKhoaHoc && tenKhoaHoc === queryRaw) return 9000;
    if (pinyin && pinyin === queryRaw) return 9000;
    if (maWho && maWho === queryRaw) return 9000;

    if (cleanTitle.includes(queryMain) || queryMain.includes(cleanTitle)) return 5000;
    if (tenKhoaHoc && tenKhoaHoc.includes(queryMain)) return 4500;
    if (pinyin && pinyin.includes(queryMain)) return 4500;
    if (maWho && maWho.includes(queryMain)) return 4500;

    const fullText = Object.values(item)
        .filter(v => typeof v === 'string' || Array.isArray(v))
        .join(' ')
        .toLowerCase();

    // TẦNG 2: Phân rã Token + Tính tỷ lệ phủ từ khóa
    const tokens = queryMain.replace(/[,\.;:?!()\[\]{}]/g, ' ').split(/\s+/).filter(Boolean);
    if (tokens.length === 0) return 0;

    let matchedTokens = 0;
    let score = 0;

    tokens.forEach(token => {
        if (mainTitle.includes(token)) {
            matchedTokens++;
            score += 15;
        } else if (tenKhoaHoc.includes(token) || pinyin.includes(token) || maWho.includes(token)) {
            matchedTokens++;
            score += 12;
        } else if (fullText.includes(token)) {
            matchedTokens++;
            score += 2;
        }
    });

    const coverageRatio = matchedTokens / tokens.length;
    if (coverageRatio < 0.6) return 0; 

    return score * coverageRatio;
}

function getMaxTokens(sourceKey) {
    const role = AppState.auth?.role || 'GUEST';
    
    const baseTokens = {
        'luantri': 250,
        'backup': 300,
        'phoingu': 400,
        'vongchan': 400,
        'sach_ai': 400,
        'chat': 500,
        'tu_chan': 500,
        'quiz': 800
    }[sourceKey] || 300;

    const multiplier = role === 'SVIP' ? 2.0 : (role === 'VIP' ? 1.5 : 1.0);
    return Math.round(baseTokens * multiplier);
}

const ROLE_LEVELS = { 'GUEST': 1, 'FREE': 2, 'VIP': 3, 'SVIP': 4 };

function getCurrentUserRole() {
    try {
        const sessionAuth = sessionStorage.getItem('session_auth');
        if (sessionAuth) {
            const parsed = JSON.parse(sessionAuth);
            if (parsed && parsed.role) return String(parsed.role).toUpperCase();
        }
        const appUserData = localStorage.getItem('app_user_data');
        if (appUserData) {
            const parsed = JSON.parse(appUserData);
            if (parsed && parsed.role) return String(parsed.role).toUpperCase();
        }
    } catch (e) {}

    const role = window.AppState?.auth?.role || window.currentUser?.role || 'GUEST';
    return String(role).toUpperCase();
}

function updateRoleLockUI() {
    const userRole = getCurrentUserRole();
    const userLevel = ROLE_LEVELS[userRole] || 1;
    
    document.querySelectorAll('[data-min-role]').forEach(el => {
        const minRole = (el.getAttribute('data-min-role') || 'FREE').toUpperCase();
        const requiredLevel = ROLE_LEVELS[minRole] || 1;

        const targetContainer = (el.tagName === 'INPUT' && el.parentElement) ? el.parentElement : el;

        const oldLock = targetContainer.querySelector('.role-lock-badge');
        if (oldLock) oldLock.remove();

        if (userLevel < requiredLevel) {
            const lockBadge = document.createElement('i');
            lockBadge.className = 'fa-solid fa-lock text-amber-400 text-[10px] ml-1.5 role-lock-badge inline-block';
            targetContainer.appendChild(lockBadge);
        }
    });
}
window.updateRoleLockUI = updateRoleLockUI;

// 2. Chặn click nút bị khóa & hiển thị Modal nâng cấp
document.addEventListener('click', function (e) {
    const targetBtn = e.target.closest('[data-min-role]');
    if (!targetBtn) return;

    const minRole = (targetBtn.getAttribute('data-min-role') || 'FREE').toUpperCase();
    const userRole = getCurrentUserRole();

    if ((ROLE_LEVELS[userRole] || 1) < (ROLE_LEVELS[minRole] || 1)) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();

        const featureName = targetBtn.getAttribute('data-feature-name') || 'Tính năng này';
        
        const lockTitle = document.getElementById('lock-modal-title');
        const lockDesc = document.getElementById('lock-modal-desc');
        const lockModal = document.getElementById('modal-role-lock');

        if (lockTitle) lockTitle.innerText = `TÍNH NĂNG DÀNH CHO CẤP ${minRole}`;
        if (lockDesc) {
            lockDesc.innerHTML = 
                `Tính năng <strong>${featureName}</strong> yêu cầu tài khoản từ cấp <strong>${minRole}</strong> trở lên.<br>Vui lòng nâng cấp tài khoản để truy cập!`;
        }
        if (lockModal) lockModal.classList.remove('hidden');
        return false;
    }
}, true);

// Khởi chạy khi tải trang & sau khi đăng nhập
window.addEventListener('DOMContentLoaded', updateRoleLockUI);
