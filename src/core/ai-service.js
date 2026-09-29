// ==========================================================================
// AI-SERVICE.JS - TỔNG HỢP TOÀN BỘ XỬ LÝ DỊCH VỤ AI, TRA CỨU & HỘI CHẨN
// ==========================================================================

// --- HELPER XỬ LÝ AN TOÀN & BỘ NHỚ CỤC BỘ ---
const safeRemoveAccents = (str) => {
    if (!str) return '';
    if (typeof removeAccents === 'function') {
        return removeAccents(str);
    }
    return String(str)
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D')
        .toLowerCase();
};

const safeEscapeHTML = (str) => {
    if (typeof escapeHTML === 'function') {
        return escapeHTML(str);
    }
    return String(str || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
};

const safeGetLocalStorageJSON = (key, defaultValue = []) => {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
        console.warn(`Lỗi parse LocalStorage key [${key}]:`, e);
        return defaultValue;
    }
};

const safeSetLocalStorage = (key, value, days = 30) => {
    if (typeof window.safeSetLocalStorage === 'function') {
        return window.safeSetLocalStorage(key, value, days);
    }
    try {
        localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
    } catch (e) {
        console.warn(`Lỗi lưu LocalStorage key [${key}]:`, e);
    }
};

const safeGetCache = (key) => {
    if (typeof getCacheWithTTL === 'function') return getCacheWithTTL(key);
    return null;
};

const safeSetCache = (key, value, ttlMinutes = 99) => {
    if (typeof setCacheWithTTL === 'function') setCacheWithTTL(key, value, ttlMinutes);
};

// --- QUẢN LÝ QUYỀN HẠN & ĐIỀU TIẾT AI ---
function getAiParams(source) {
    let role = 'GUEST';
    let serverAuthenticated = false;

    try {
        if (window.AppState?.auth?.user) {
            role = (window.AppState.auth.role || window.AppState.auth.user.role || 'GUEST').toUpperCase();
            serverAuthenticated = !!window.AppState.auth.token;
        } else {
            const token = localStorage.getItem('access_token');
            const storedUser = localStorage.getItem('app_user_data');
            
            if (storedUser) {
                const userData = JSON.parse(storedUser);
                role = (userData.role || 'FREE').toUpperCase();
                serverAuthenticated = !!token;
            }
        }
    } catch (e) {
        console.warn("Lỗi đối chiếu phiên làm việc cục bộ:", e);
    }

    const verifiedRole = role;
    const vipOnlySources = ['vongchan', 'sach_ai', 'thucdon', 'quiz'];
    const isAllowed = !(vipOnlySources.includes(source) && (verifiedRole === 'GUEST' || verifiedRole === 'FREE'));
    
    if (!isAllowed) {
        console.warn(`[AI Access Denied] Tài khoản ${verifiedRole} bị giới hạn tính năng ${source}`);
    }

    return {
        allowed: isAllowed,
        source: source,
        role: verifiedRole,
        serverAuthenticated: serverAuthenticated
    };
}

function decodeHtmlEntities(str) {
    if (!str) return '';
    return String(str)
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");
}

function cleanTitleText(str) {
    if (!str) return '';
    let decoded = decodeHtmlEntities(String(str));
    return decoded.replace(/^[\s\-–—*#]+/, '').trim();
}

// --- PARSER JSON & FORMATTER DỮ LIỆU AI ---
function parseJsonFromAI(replyText) {
    if (!replyText) return null;
    try {
        let cleaned = String(replyText)
            .replace(/```json\s*/gi, '')
            .replace(/```\s*/g, '')
            .trim();
        
        const tryParse = (str) => {
            try { return JSON.parse(str); } catch (e) {}
            try { return JSON.parse(str.replace(/[\u0000-\u001F\u007F-\u009F]/g, " ")); } catch (e) {}
            return null;
        };

        let result = tryParse(cleaned);
        if (result) return result;

        const arrayMatch = cleaned.match(/\[[\s\S]*\]/);
        if (arrayMatch) {
            result = tryParse(arrayMatch[0]);
            if (result) return result;
        }

        const objectMatch = cleaned.match(/\{[\s\S]*\}/);
        if (objectMatch) {
            result = tryParse(objectMatch[0]);
            if (result) return result;
        }

        return null;
    } catch (e) {
        console.warn("AI không trả về JSON hợp lệ:", e);
        return null;
    }
}

function formatAIMessage(text) {
    if (!text) return '';
    
    let cleaned = String(text).replace(/^(chào bạn|dưới đây là|rất vui)[^:\n]*[:\n]?/gi, '').trim();

    cleaned = cleaned
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/\*([^*]+)\*/g, '<em>$1</em>');

    let safe = decodeHtmlEntities(cleaned);
    const lines = safe.split('\n');

    let inList = false;
    const formattedLines = [];

    lines.forEach((line) => {
        let trimmed = line.trim();

        if (!trimmed || trimmed === '---') {
            if (inList) {
                inList = false;
                formattedLines.push('</ul>');
            }
            formattedLines.push('<div class="h-2"></div>');
            return;
        }

        const isListItem = trimmed.startsWith('* ') || trimmed.startsWith('- ');

        // Nếu dòng hiện tại không phải list item nhưng đang ở trong list -> đóng list
        if (!isListItem && inList) {
            inList = false;
            formattedLines.push('</ul>');
        }

        if (isListItem) {
            let itemContent = trimmed.substring(2);
            if (!inList) {
                inList = true;
                formattedLines.push('<ul class="list-disc pl-5 my-1.5 space-y-1 text-stone-300 text-xs">');
            }
            formattedLines.push(`<li class="leading-relaxed">${itemContent}</li>`);
        } else if (trimmed.startsWith('###') || trimmed.startsWith('##') || trimmed.startsWith('#')) {
            let titleText = cleanTitleText(trimmed);
            let escapedTitle = safeEscapeHTML(titleText);
            formattedLines.push(`<div class="text-amber-400 font-bold text-xs uppercase tracking-wider mt-4 mb-2 border-b border-stone-800 pb-1">${escapedTitle}</div>`);
        } else {
            formattedLines.push(`<p class="my-1.5 leading-relaxed text-stone-300 text-xs">${trimmed}</p>`);
        }
    });

    if (inList) formattedLines.push('</ul>');
    const rawHtml = formattedLines.join('');
    
    return typeof DOMPurify !== 'undefined' ? DOMPurify.sanitize(rawHtml, { ADD_ATTR: ['target', 'onclick', 'title'] }) : rawHtml;
}

// --- TRỢ LÝ AI CHAT TRỰC TIẾP ---
async function sendAIWebMessage(btnElement) {
    const inputEl = document.getElementById('ai-input-text');
    const chatBox = document.getElementById('ai-chat-box');
    if (!inputEl || !chatBox) return;

    const message = inputEl.value.trim();
    if (!message) return;

    let originalBtnHtml = '';
    if (btnElement) {
        originalBtnHtml = btnElement.innerHTML;
        btnElement.disabled = true;
        btnElement.innerHTML = `<i class="fas fa-spinner fa-spin"></i>`;
    }

    // 1. Chèn tin nhắn User bằng insertAdjacentHTML (Tránh reset DOM/mất event)
    const userHtml = `<div class="flex justify-end mb-3">
        <div class="bg-amber-600/30 text-amber-100 p-2.5 rounded-lg max-w-[85%] text-xs leading-relaxed border border-amber-500/30">${safeEscapeHTML(message)}</div>
    </div>`;
    chatBox.insertAdjacentHTML('beforeend', userHtml);
    
    inputEl.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;

    // 2. Chèn khung Loading
    const loadingId = 'ai-loading-' + Date.now();
    const loadingHtml = `<div id="${loadingId}" class="flex justify-start mb-3">
        <div class="bg-stone-800 p-2.5 rounded-lg text-stone-400 text-xs flex items-center gap-2 border border-stone-700">
            <i class="fas fa-spinner fa-spin text-amber-500"></i> Đang suy luận...
        </div>
    </div>`;
    chatBox.insertAdjacentHTML('beforeend', loadingHtml);
    chatBox.scrollTop = chatBox.scrollHeight;

    try {
        // Thay thế bằng hàm gọi API thực tế trong dự án của bạn (ví dụ: gọi fetch tới Netlify function hoặc Supabase)
        const aiResponseText = await callAIBackendService(message);

        // Xóa khung loading
        const loadingEl = document.getElementById(loadingId);
        if (loadingEl) loadingEl.remove();

        // 3. Chèn kết quả AI đã qua formatMarkdown
        const formattedContent = formatAIMessage(aiResponseText);
        const aiHtml = `<div class="flex justify-start mb-3">
            <div class="bg-stone-900 text-stone-200 p-3 rounded-lg max-w-[90%] text-xs leading-relaxed border border-stone-800 shadow-sm">${formattedContent}</div>
        </div>`;
        chatBox.insertAdjacentHTML('beforeend', aiHtml);
        chatBox.scrollTop = chatBox.scrollHeight;

    } catch (error) {
        console.error("Lỗi sendAIWebMessage:", error);
        const loadingEl = document.getElementById(loadingId);
        if (loadingEl) loadingEl.remove();

        const errHtml = `<div class="flex justify-start mb-3">
            <div class="bg-red-900/30 text-red-200 p-2.5 rounded-lg text-xs border border-red-800/50">Không thể kết nối dịch vụ AI. Vui lòng kiểm tra lại.</div>
        </div>`;
        chatBox.insertAdjacentHTML('beforeend', errHtml);
        chatBox.scrollTop = chatBox.scrollHeight;
    } finally {
        if (btnElement) {
            btnElement.disabled = false;
            btnElement.innerHTML = originalBtnHtml;
        }
    }
}

// --- TỰ ĐỘNG TRA CỨU & BỔ SUNG CSDL BẰNG AI ---
function validateAndCleanAIResult(obj, tabName) {
    if (!obj || typeof obj !== 'object') return null;

    if (tabName.includes('Luận Trị') || tabName.includes('luantri')) {
        return {
            hc: String(obj.hc || 'HỘI CHỨNG CHƯA RÕ'),
            phanloai: Array.isArray(obj.phanloai) ? obj.phanloai.map(String) : ['Tạng Phế', 'Bình', 'Thực', '---'],
            pdt: String(obj.pdt || 'Theo chỉ định chuyên môn'),
            tc: Array.isArray(obj.tc) ? obj.tc.map(String) : [String(obj.tc || 'Đang cập nhật triệu chứng')],
            bt: String(obj.bt || 'Đối chứng nghiệm phương'),
            tpbt: Array.isArray(obj.tpbt) ? obj.tpbt.map(String) : []
        };
    } else if (tabName.includes('Dược Liệu') || tabName.includes('duoclieu')) {
        return {
            ten: String(obj.ten || 'Dược liệu chưa rõ tên'),
            nhom: String(obj.nhom || 'Dược liệu YHCT'),
            ten_khoa_hoc: String(obj.ten_khoa_hoc || ''),
            pinyin: String(obj.pinyin || ''),
            dac_tinh: String(obj.dac_tinh || ''),
            hinh_dang: String(obj.hinh_dang || ''),
            cong_dung: String(obj.cong_dung || 'Đang cập nhật công năng chủ trị.'),
            kieng_ky: String(obj.kieng_ky || obj.luu_y || 'Tuân thủ liều lượng tiêu chuẩn.')
        };
    } else if (tabName.includes('Huyệt Vị') || tabName.includes('huyetvi')) {
        return {
            ten: String(obj.ten || 'Huyệt chưa rõ tên'),
            kinh: String(obj.kinh || 'Kinh mạch YHCT'),
            ma_who: String(obj.ma_who || ''),
            chu_tri: String(obj.chu_tri || 'Điều hòa khí huyết, thông kinh hoạt lạc.'),
            vi_tri: String(obj.vi_tri || obj.dinh_vi || 'Đang cập nhật mô tả giải phẫu.')
        };
    } else if (tabName.includes('Trà Dược') || tabName.includes('traduoc')) {
        return {
            ten: String(obj.ten || 'Bài trà chưa rõ tên'),
            nhom: String(obj.nhom || 'Trà Dược YHCT'),
            cong_dung: String(obj.cong_dung || 'Thanh nhiệt, giải độc, điều hòa cơ thể.'),
            cach_dung: String(obj.cach_dung || 'Hãm với nước sôi 85-90°C trong 10-15 phút.'),
            kieng_ky: String(obj.kieng_ky || 'Phụ nữ có thai hoặc tỳ vị hư hàn nên tham khảo ý kiến chuyên gia.'),
            thanh_phan: Array.isArray(obj.thanh_phan) ? obj.thanh_phan.map(String) : []
        };
    } else if (tabName.includes('Dược Thiện') || tabName.includes('DuocThien') || tabName.includes('duocthien')) {
        let formattedThanhPhan = [{ vi: 'Thành phần chính', lieu: 'Vừa đủ' }];
        if (Array.isArray(obj.thanh_phan)) {
            formattedThanhPhan = obj.thanh_phan.map(item => {
                if (typeof item === 'object' && item !== null) {
                    return { vi: String(item.vi || 'Vị thuốc'), lieu: String(item.lieu || 'Vừa đủ') };
                }
                return { vi: String(item), lieu: 'Vừa đủ' };
            });
        }
        return {
            ten: String(obj.ten || 'Món dược thiện chưa rõ tên'),
            nhom: String(obj.nhom || 'Dược Thiện'),
            cong_dung: String(obj.cong_dung || 'Bồi bổ cơ thể, hỗ trợ điều trị bệnh.'),
            thanh_phan: formattedThanhPhan,
            so_che: String(obj.so_che || 'Sơ chế nguyên liệu sạch sẽ.'),
            cach_lam: Array.isArray(obj.cach_lam) ? obj.cach_lam.map(String) : [String(obj.cach_lam || 'Nấu chín theo phương pháp cổ truyền.')],
            kieng_ky: String(obj.kieng_ky || 'Tham khảo ý kiến thầy thuốc trước khi dùng.')
        };
    } else if (tabName.includes('Tứ Chẩn') || tabName.includes('tu_chan') || tabName.includes('vongchan')) {
        return {
            bat_cuong: String(obj.bat_cuong || 'Chưa xác định Bát cương'),
            tang_phu: String(obj.tang_phu || 'Chưa xác định Tạng phủ'),
            hoi_chung: String(obj.hoi_chung || 'Chưa rõ hội chứng'),
            bien_chung: String(obj.bien_chung || 'Đang cập nhật biện chứng luận trị.'),
            phap_tri: String(obj.phap_tri || 'Đang cập nhật pháp trị.'),
            co_phuong: String(obj.co_phuong || '---'),
            vi_thuoc: Array.isArray(obj.vi_thuoc) ? obj.vi_thuoc.map(v => ({
                ten: String(v.ten || 'Vị thuốc'),
                lieu: String(v.lieu || 'Vừa đủ'),
                vai_tro: String(v.vai_tro || 'Thuốc')
            })) : []
        };
    }
    return obj;
}

async function fetchAIBackupResult(query, tabName, containerEl) {
    if (!containerEl) return;
    containerEl.innerHTML = `
        <div class="col-span-full text-center py-12 space-y-2 text-stone-400 bg-stone-900/60 rounded-xl border border-amber-600/30">
            <i class="fa-solid fa-brain fa-spin text-3xl text-amber-500 block mb-1"></i>
            <p class="text-sm font-bold text-amber-400">Trợ lý AI đang tra cứu & tự động lưu vĩnh viễn...</p>
            <p class="text-xs text-stone-500">Từ khóa: "${safeEscapeHTML(query)}"</p>
        </div>
    `;
    try {
        const prompt = `Bạn là hệ thống CSDL YHCT. Hãy cung cấp thông tin ngắn gọn về "${query}" thuộc danh mục ${tabName}. 
BẮT BUỘC trả về đúng định dạng JSON thuần túy (không kèm chữ nào khác ngoài JSON):
- Nếu là Luận Trị: {"hc": "...", "pdt": "...", "tc": ["..."], "bt": "...", "tpbt": ["..."]}
- Nếu là Dược Thiện: {"ten": "...", "nhom": "...", "cong_dung": "...", "thanh_phan": [{"vi": "...", "lieu": "..."}], "so_che": "...", "cach_lam": ["..."], "kieng_ky": "..."}
- Nếu là Dược Liệu: {"ten": "...", "nhom": "...", "ten_khoa_hoc": "...", "pinyin": "...", "dac_tinh": "...", "hinh_dang": "...", "cong_dung": "...", "kieng_ky": "..."}
- Nếu là Huyệt Vị: {"ten": "...", "kinh": "...", "ma_who": "...", "chu_tri": "...", "vi_tri": "..."}
- Nếu là Trà Dược: {"ten": "...", "nhom": "...", "cong_dung": "...", "cach_dung": "...", "thanh_phan": ["..."], "kieng_ky": "..."}`;

        const endpoint = typeof getApiEndpoint === 'function' ? getApiEndpoint() : '/.netlify/functions/chat';
        const res = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: prompt, ...getAiParams('backup') })
        });
        const data = await res.json();
    
        if (res.ok && data.reply) {
            let parsedObj = parseJsonFromAI(data.reply);
            if (parsedObj) {
                parsedObj = validateAndCleanAIResult(parsedObj, tabName);
            } else {
                if (tabName.includes('Luận Trị')) {
                    parsedObj = { 
                        hc: query.toUpperCase(), 
                        phanloai: ["Tạng Phế", "Bình", "Thực", "---"],
                        pdt: 'Theo chỉ định AI', 
                        tc: [query], 
                        bt: 'Đối chứng nghiệm phương', 
                        tpbt: [] 
                    };
                } else {
                    parsedObj = { 
                        ten: query, 
                        nhom: tabName,
                        cong_dung: data.reply,
                        cach_dung: "Hãm với nước sôi 85-90°C trong 10-15 phút.",
                        thanh_phan: [query]
                    };
                }
            }
            
            luuKetQuaAiVaoDb(query, tabName, parsedObj);

            if (tabName.includes('Trà Dược') || tabName.includes('Tra')) {
                if (typeof filterTra === 'function') filterTra();
            } else if (tabName.includes('Dược Liệu')) {
                if (typeof filterDuocLieu === 'function') filterDuocLieu();
            } else if (tabName.includes('Huyệt Vị')) {
                if (typeof filterHuyetVi === 'function') filterHuyetVi();
            } else if (tabName.includes('Dược Thiện') || tabName.includes('DuocThien')) {
                if (typeof filterDuocThien === 'function') filterDuocThien();
            } else {
                if (typeof updateLuanTri === 'function') updateLuanTri(query, true);
            }
        } else {
            containerEl.innerHTML = `<div class="col-span-full text-center py-8 text-xs text-stone-500">AI Backup không phản hồi.</div>`;
        }
    } catch (err) {
        console.error("Lỗi AI Backup:", err);
        containerEl.innerHTML = `<div class="col-span-full text-center py-8 text-xs text-red-400">Lỗi kết nối AI.</div>`;
    }
}

function luuKetQuaAiVaoDb(query, tabName, objData) {
    if (!query || !objData) return;
    const cleanKey = safeRemoveAccents(query).trim().replace(/\s+/g, '_');

    if (tabName.includes('Luận Trị')) {
        if (typeof window.database === 'undefined') window.database = {};
        window.database[cleanKey] = {
            hc: objData.hc || query.toUpperCase(),
            phanloai: Array.isArray(objData.phanloai) ? objData.phanloai : ["Tạng Phế", "Bình", "Thực", "---"],
            tc: Array.isArray(objData.tc) ? objData.tc : [query],
            pdt: objData.pdt || "Theo chỉ định AI",
            bt: objData.bt || "Đối chứng nghiệm phương",
            tpbt: Array.isArray(objData.tpbt) ? objData.tpbt : [],
            isAiGenerated: true
        };
        safeSetLocalStorage('custom_database', window.database);
    } else if (tabName.includes('Dược Liệu')) {
        if (typeof window.duocLieuData === 'undefined') window.duocLieuData = [];
        const newObj = {
            ten: objData.ten || query,
            nhom: objData.nhom || "Dược liệu YHCT",
            ten_khoa_hoc: objData.ten_khoa_hoc || "",
            pinyin: objData.pinyin || "",
            dac_tinh: objData.dac_tinh || "",
            hinh_dang: objData.hinh_dang || "",
            cong_dung: (!objData.cong_dung || objData.cong_dung === "Đang cập nhật") ? "Tư âm dưỡng huyết, khu phong trừ thấp." : objData.cong_dung,
            kieng_ky: objData.kieng_ky || objData.luu_y || "Tuân thủ liều lượng phối ngũ tiêu chuẩn.",
            isAiGenerated: true
        };
        let idx = window.duocLieuData.findIndex(d => safeRemoveAccents(d.ten) === safeRemoveAccents(query));
        if (idx >= 0) window.duocLieuData[idx] = { ...window.duocLieuData[idx], ...newObj };
        else window.duocLieuData.unshift(newObj);

        let custom = safeGetLocalStorageJSON('custom_duocLieuData', []);
        let cIdx = custom.findIndex(d => safeRemoveAccents(d.ten) === safeRemoveAccents(query));
        if (cIdx >= 0) custom[cIdx] = newObj; else custom.unshift(newObj);
        
        safeSetLocalStorage('custom_duocLieuData', custom, 30);
    } else if (tabName.includes('Huyệt Vị')) {
        if (typeof window.huyetViData === 'undefined') window.huyetViData = [];
        const newObj = {
            ten: objData.ten || query,
            kinh: objData.kinh || "Kinh mạch YHCT",
            ma_who: objData.ma_who || "",
            chu_tri: (!objData.chu_tri || objData.chu_tri === "Đang cập nhật") ? "Điều hòa khí huyết, thông kinh hoạt lạc." : objData.chu_tri,
            vi_tri: objData.vi_tri || objData.dinh_vi || "Xem mô tả chi tiết giải phẫu.",
            isAiGenerated: true
        };
        let idx = window.huyetViData.findIndex(h => safeRemoveAccents(h.ten) === safeRemoveAccents(query));
        if (idx >= 0) window.huyetViData[idx] = { ...window.huyetViData[idx], ...newObj };
        else window.huyetViData.unshift(newObj);

        let custom = safeGetLocalStorageJSON('custom_huyetViData', []);
        let cIdx = custom.findIndex(h => safeRemoveAccents(h.ten) === safeRemoveAccents(query));
        if (cIdx >= 0) custom[cIdx] = newObj; else custom.unshift(newObj);
        
        safeSetLocalStorage('custom_huyetViData', custom, 30);
    } else if (tabName.includes('Trà Dược') || tabName.includes('traduoc')) {
        if (typeof window.traData === 'undefined') window.traData = [];
        const newObj = {
            ten: objData.ten || query,
            nhom: objData.nhom || "Trà Dược YHCT",
            cong_dung: (!objData.cong_dung || objData.cong_dung === "Đang cập nhật") ? "Thanh nhiệt, giải độc, mát gan; An thần, trị mất ngủ, giảm căng thẳng." : objData.cong_dung,
            kieng_ky: objData.kieng_ky || "Phụ nữ có thai hoặc người tỳ vị hư hàn nên tham khảo ý kiến chuyên gia.",
            cach_dung: objData.cach_dung || "Hãm với nước sôi 85-90°C trong 10-15 phút.",
            thanh_phan: Array.isArray(objData.thanh_phan) ? objData.thanh_phan : [query],
            isAiGenerated: true
        };
        let idx = window.traData.findIndex(t => safeRemoveAccents(t.ten) === safeRemoveAccents(query));
        if (idx >= 0) window.traData[idx] = { ...window.traData[idx], ...newObj };
        else window.traData.unshift(newObj);

        let custom = safeGetLocalStorageJSON('custom_traData', []);
        let cIdx = custom.findIndex(t => safeRemoveAccents(t.ten) === safeRemoveAccents(query));
        if (cIdx >= 0) custom[cIdx] = newObj; else custom.unshift(newObj);
        
        safeSetLocalStorage('custom_traData', custom, 30);
    } else if (tabName.includes('Dược Thiện') || tabName.includes('DuocThien')) {
        if (typeof window.duocThienData === 'undefined') window.duocThienData = [];

        let formattedThanhPhan = [{ vi: query, lieu: "Vừa đủ" }];
        if (Array.isArray(objData.thanh_phan)) {
            formattedThanhPhan = objData.thanh_phan.map(item => {
                if (typeof item === 'object' && item !== null) {
                    return { vi: item.vi || query, lieu: item.lieu || "Vừa đủ" };
                }
                return { vi: String(item), lieu: "Vừa đủ" };
            });
        }

        const newObj = {
            ten: objData.ten || query,
            nhom: objData.nhom || "Dược Thiện",
            cong_dung: objData.cong_dung || "Bồi bổ cơ thể, hỗ trợ điều trị bệnh.",
            thanh_phan: formattedThanhPhan,
            so_che: objData.so_che || "",
            cach_lam: Array.isArray(objData.cach_lam) ? objData.cach_lam : (objData.cach_lam ? [objData.cach_lam] : ["Sơ chế nguyên liệu sạch sẽ.", "Nấu chín theo phương pháp cổ truyền."]),
            kieng_ky: objData.kieng_ky || "Tham khảo ý kiến thầy thuốc trước khi dùng.",
            isAiGenerated: true
        };

        let idx = window.duocThienData.findIndex(t => safeRemoveAccents(t.ten) === safeRemoveAccents(query));
        if (idx >= 0) window.duocThienData[idx] = { ...window.duocThienData[idx], ...newObj };
        else window.duocThienData.unshift(newObj);

        let custom = safeGetLocalStorageJSON('custom_duocThienData', []);
        let cIdx = custom.findIndex(t => safeRemoveAccents(t.ten) === safeRemoveAccents(query));
        if (cIdx >= 0) custom[cIdx] = newObj; else custom.unshift(newObj);
        
        safeSetLocalStorage('custom_duocThienData', custom, 30);
    }
}

async function chayLenhAi(loaiLenh, btnElement) {
    // 1. Nếu là lệnh 'baithuoc', chuyển giao hoàn toàn cho sendAIWebMessage xử lý nút bấm
    if (loaiLenh === 'baithuoc') {
        const inputEl = document.getElementById('ai-input-text');
        if (inputEl) {
            // Chuẩn bị câu lệnh mẫu vào ô input
            inputEl.value = "Phân tích bài thuốc và gia giảm theo triệu chứng..."; 
        }
        // Để sendAIWebMessage tự quản lý btnElement (disable, loading, enable)
        await sendAIWebMessage(btnElement); 
        return;
    }

    // 2. Đối với các loại lệnh khác (tự xử lý riêng tại chayLenhAi)
    let originalHtml = '';
    if (btnElement) {
        originalHtml = btnElement.innerHTML;
        btnElement.disabled = true;
        btnElement.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Đang xử lý...`;
    }

    try {
        // Thực hiện logic xử lý các lệnh khác...
        if (loaiLenh === 'hoichan') {
            await phanTichHoiChan();
        } else if (loaiLenh === 'tracuu') {
            await traCuuYHCT();
        }
    } catch (error) {
        console.error("Lỗi chayLenhAi:", error);
    } finally {
        // Trả lại trạng thái cũ cho nút bấm
        if (btnElement) {
            btnElement.disabled = false;
            btnElement.innerHTML = originalHtml;
        }
    }
}

function triggerAiSearch(tab) {
    if (tab === 'luantri') {
        const input = document.getElementById('search-input');
        const query = input ? input.value.trim() : '';
        if (!query) { alert('Vui lòng nhập từ khóa hội chứng hoặc triệu chứng trước khi tìm với AI.'); input?.focus(); return; }
        return fetchAIBackupResult(query, 'Biện chứng Luận Trị YHCT', document.getElementById('pdf-area'));
    } else if (tab === 'duoclieu') {
        const input = document.getElementById('searchDuocLieu');
        const query = input ? input.value.trim() : '';
        if (!query) { alert('Vui lòng nhập tên dược liệu trước khi tìm với AI.'); input?.focus(); return; }
        return fetchAIBackupResult(query, 'Dược Liệu YHCT', document.getElementById('gridDuocLieu'));
    } else if (tab === 'huyetvi') {
        const input = document.getElementById('searchHuyetVi');
        const query = input ? input.value.trim() : '';
        if (!query) { alert('Vui lòng nhập tên huyệt vị trước khi tìm với AI.'); input?.focus(); return; }
        return fetchAIBackupResult(query, 'Huyệt Vị YHCT', document.getElementById('gridHuyetVi'));
    } else if (tab === 'tra') {
        const input = document.getElementById('searchTra');
        const query = input ? input.value.trim() : '';
        if (!query) { alert('Vui lòng nhập tên bài trà trước khi tìm với AI.'); input?.focus(); return; }
        return fetchAIBackupResult(query, 'Trà Dược YHCT', document.getElementById('gridTra'));
    } else if (tab === 'duocthien') {
        const input = document.getElementById('searchDuocThien');
        const query = input ? input.value.trim() : '';
        if (!query) { alert('Vui lòng nhập tên món ăn bài thuốc trước khi tìm với AI.'); input?.focus(); return; }
        return fetchAIBackupResult(query, 'Dược Thiện YHCT', document.getElementById('gridDuocThien'));
    }
}

// --- THỰC ĐƠN TUẦN AI ---
async function chayAIthucDonTuanModal() {
    const params = getAiParams('thucdon');
    const resultArea = document.getElementById('tna-result-area');
    if (!resultArea) return;

    if (!params.allowed) {
        resultArea.innerHTML = `<div class="bg-amber-950/40 p-4 rounded-xl border border-amber-800 text-amber-300 text-xs text-center"><i class="fa-solid fa-lock mr-1.5"></i> Tính năng Tạo Thực Đơn Tuần yêu cầu tài khoản từ cấp <strong>VIP</strong> trở lên.</div>`;
        return;
    }

    const cheDo = document.getElementById('tna-che-do')?.value || 'bth';
    const vungMien = document.getElementById('tna-vung-mien')?.value || 'dong-bang';
    const yeuCauPhu = document.getElementById('tna-yeu-cau-phu')?.value.trim() || '';

    const now = new Date();
    const thang = now.getMonth() + 1;
    const muaHienTai = (thang >= 7 && thang <= 9) ? "Mùa Hạ/Thu giao mùa (Nóng ẩm, mưa nhiều tại Việt Nam)" : "Theo mùa khí hậu hiện tại";

    resultArea.innerHTML = `
        <div class="text-center py-10 space-y-2 text-stone-400 bg-stone-950 rounded-xl border border-amber-600/30">
            <i class="fa-solid fa-brain fa-spin text-2xl text-amber-500 block mb-1"></i>
            <p class="text-xs font-bold text-amber-400">AI đang phân tích vùng miền, khí hậu và lập thực đơn 7 ngày...</p>
            <p class="text-[11px] text-stone-500">Khu vực: ${vungMien} - Đặc thù: ${muaHienTai}</p>
        </div>
    `;

    const prompt = `Bạn là chuyên gia Dinh dưỡng và Dược thiện Y học cổ truyền. Hãy lập một thực đơn 7 ngày lý tưởng ("Tuần nay ăn gì") dựa trên các thông số sau:
    - Vùng miền / Địa lý: ${vungMien} (Lưu ý: BẮT BUỘC lựa chọn nguyên liệu thực phẩm phổ biến, dễ mua tại vùng này).
    - Thời điểm & Khí hậu: ${muaHienTai}.
    - Chế độ ăn: ${cheDo}.
    - Yêu cầu phụ của người dùng: "${yeuCauPhu}".
    
    BẮT BUỘC trả về đúng định dạng JSON thuần túy (không kèm markdown ngoài JSON) với cấu trúc:
    {"tieu_de": "...", "phan_tich_khu_vuc": "...", "cac_ngay": [{"thu": "Thứ Hai", "sang": {"mon": "...", "cong_dung": "..."}, "trua": {"mon": "...", "cong_dung": "..."}, "toi": {"mon": "...", "cong_dung": "..."}}], "luu_y_chung": "..."}`;

    try {
        const endpoint = typeof getApiEndpoint === 'function' ? getApiEndpoint() : '/.netlify/functions/chat';
        const res = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: prompt, ...params })
        });
        const data = await res.json();

        if (res.ok && data.reply) {
            let parsedObj = parseJsonFromAI(data.reply);
            if (parsedObj) {
                renderThucDonTuanModalUI(parsedObj);
            } else {
                resultArea.innerHTML = `<div class="bg-stone-950 p-3 rounded-lg text-stone-300 text-xs leading-relaxed">${formatAIMessage(data.reply)}</div>`;
            }
        } else {
            resultArea.innerHTML = `<div class="text-center py-6 text-xs text-red-400">AI không phản hồi dữ liệu thực đơn.</div>`;
        }
    } catch (err) {
        console.error("Lỗi tạo thực đơn tuần:", err);
        resultArea.innerHTML = `<div class="text-center py-6 text-xs text-red-400">Lỗi kết nối máy chủ AI.</div>`;
    }
}

function renderThucDonTuanModalUI(data) {
    const resultArea = document.getElementById('tna-result-area');
    if (!resultArea) return;

    let html = `
        <div class="bg-stone-950 p-4 rounded-xl border border-amber-500/40 space-y-3">
            <div class="border-b border-stone-800 pb-2">
                <h4 class="font-bold text-amber-400 text-sm uppercase flex items-center gap-1.5">
                    <i class="fa-solid fa-utensils text-amber-500"></i> ${safeEscapeHTML(data.tieu_de || 'Thực Đơn Dược Thiện Lý Tưởng Tuần Nay')}
                </h4>
                <p class="text-[11px] text-stone-300 mt-1 leading-relaxed bg-stone-900 p-2.5 rounded border border-stone-800">
                    <strong class="text-amber-400"><i class="fa-solid fa-cloud-sun"></i> Khí hậu & Mùa:</strong> ${safeEscapeHTML(data.phan_tich_khu_vuc || '')}
                </p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[50vh] overflow-y-auto pr-1">`;

    if (Array.isArray(data.cac_ngay)) {
        data.cac_ngay.forEach(ngay => {
            html += `
                <div class="bg-stone-900 p-3 rounded-lg border border-stone-800 space-y-1.5 text-xs">
                    <div class="font-bold text-emerald-400 border-b border-stone-800 pb-1 flex items-center gap-1">
                        <i class="fa-solid fa-calendar-day text-amber-500 text-[10px]"></i> ${safeEscapeHTML(ngay.thu)}
                    </div>
                    <div class="space-y-1 text-[11px] text-stone-300">
                        <div><strong>☀️ Sáng:</strong> ${safeEscapeHTML(ngay.sang?.mon || '')} <span class="text-stone-500 text-[10px]">(${safeEscapeHTML(ngay.sang?.cong_dung || '')})</span></div>
                        <div><strong>🍛 Trưa:</strong> ${safeEscapeHTML(ngay.trua?.mon || '')} <span class="text-stone-500 text-[10px]">(${safeEscapeHTML(ngay.trua?.cong_dung || '')})</span></div>
                        <div><strong>🌙 Tối:</strong> ${safeEscapeHTML(ngay.toi?.mon || '')} <span class="text-stone-500 text-[10px]">(${safeEscapeHTML(ngay.toi?.cong_dung || '')})</span></div>
                    </div>
                </div>`;
        });
    }

    html += `</div>
            ${data.luu_y_chung ? `
                <div class="bg-amber-950/40 border-l-4 border-amber-500 p-2.5 rounded-r text-amber-200 text-[11px] leading-relaxed">
                    <strong class="text-amber-400 uppercase tracking-wider text-[10px] block mb-0.5"><i class="fa-solid fa-triangle-exclamation"></i> Lưu ý phối hợp & chế biến:</strong>
                    ${safeEscapeHTML(data.luu_y_chung)}
                </div>` : ''}
        </div>`;
    resultArea.innerHTML = html;
}

// --- PHÂN TÍCH HỘI CHỨNG & BÀI THUỐC AI ---
async function fetchAIHcDesc(hcName) {
    const aiHcEl = document.getElementById('ai-hc-desc');
    if (!aiHcEl || !hcName || hcName === "---") return;

    const cacheKey = 'ai_hc_' + safeRemoveAccents(hcName).replace(/\s+/g, '_');
    const cachedHTML = safeGetCache(cacheKey); 
    if (cachedHTML) {
        aiHcEl.classList.remove('hidden');
        aiHcEl.innerHTML = cachedHTML;
        return;
    }

    aiHcEl.classList.remove('hidden');
    aiHcEl.innerHTML = `<div class="text-amber-400/80 italic flex items-center gap-1.5"><i class="fa-solid fa-brain fa-spin"></i> AI đang phân tích...</div>`;

    try {
        const prompt = `Phân tích súc tích (<150 từ, tiếng Việt, không chữ Hán) về cơ chế, nguyên nhân, biểu hiện của hội chứng YHCT: "${hcName}".`;
        const endpoint = typeof getApiEndpoint === 'function' ? getApiEndpoint() : '/.netlify/functions/chat';
        const res = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt, ...getAiParams('luantrihc') })
        });
        const data = await res.json();

        if (res.ok && data.reply) {
            const htmlResult = `
                <div class="font-bold text-amber-400 mb-1 flex items-center gap-1"><i class="fa-solid fa-robot"></i> Mô tả chi tiết hội chứng:</div>
                <div class="space-y-1">${formatAIMessage(data.reply)}</div>`;
            safeSetCache(cacheKey, htmlResult, 99); 
            aiHcEl.innerHTML = htmlResult;
        } else {
            aiHcEl.innerHTML = `<div class="text-amber-400/90 bg-amber-950/40 p-2.5 rounded border border-amber-800/60 text-xs">${safeEscapeHTML(data.error || 'Lỗi')}</div>`;
        }
    } catch (err) {
        aiHcEl.innerHTML = `<div class="text-red-400 font-mono text-[11px] p-2 bg-red-950/50 border border-red-800 rounded">⚠️ Lỗi kết nối.</div>`;
    }
}

let aiBtAbortController = null;
async function fetchAIBtDesc(btName) {
    const aiBtEl = document.getElementById('ai-bt-desc');
    if (!aiBtEl || !btName || btName === "---" || btName === "Đối chứng nghiệm phương") return;

    const cacheKey = 'ai_bt_' + safeRemoveAccents(btName).replace(/\s+/g, '_');
    const cachedHTML = safeGetCache(cacheKey); 
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
        const endpoint = typeof getApiEndpoint === 'function' ? getApiEndpoint() : '/.netlify/functions/chat';
        const res = await fetch(endpoint, {
            method: 'POST',
            signal: aiBtAbortController.signal,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt, ...getAiParams('luantribt') })
        });
        const data = await res.json();

        if (res.ok && data.reply) {
            const htmlResult = `
                <div class="font-bold text-amber-400 mb-1 flex items-center gap-1"><i class="fa-solid fa-robot"></i> Nguồn gốc & đặc điểm cổ phương:</div>
                <div class="space-y-1">${formatAIMessage(data.reply)}</div>`;
            safeSetCache(cacheKey, htmlResult, 99); 
            aiBtEl.innerHTML = htmlResult;
        } else {
            aiBtEl.innerHTML = `<div class="text-amber-400/90 bg-amber-950/40 p-2.5 rounded border border-amber-800/60 text-xs">${safeEscapeHTML(data.error || 'Không nhận được phản hồi')}</div>`;
        }
    } catch (err) {
        if (err.name !== 'AbortError') {
            aiBtEl.innerHTML = `<div class="text-red-400 font-mono text-[11px] p-2 bg-red-950/50 border border-red-800 rounded">⚠️ Lỗi kết nối.</div>`;
        }
    }
}

// --- ĐÁNH GIÁ PHỐI NGŨ BÀI THUỐC AI ---
async function aiDanhGiaTongTheBaiThuoc() {
    const contentEl = document.getElementById('ai-tong-the-content');
    if (!contentEl || typeof window.currentFormulaHerbs === 'undefined' || !Array.isArray(window.currentFormulaHerbs) || window.currentFormulaHerbs.length === 0) return;

    contentEl.innerHTML = `<div class="text-amber-400 italic flex items-center gap-1.5 py-2"><i class="fa-solid fa-brain fa-spin"></i> Chuyên gia AI đang phân tích Quân Thần Tá Sứ và tổng thể bài thuốc...</div>`;

    try {
        const prompt = `Bạn là một chuyên gia Y học cổ truyền (YHCT). Hãy đánh giá tổng thể bài thuốc tự do gồm các vị thuốc sau: ${window.currentFormulaHerbs.join(', ')}. 
        Yêu cầu phân tích ngắn gọn (<200 từ, tiếng Việt, không dùng chữ Hán):
        1. Phân định Quân - Thần - Tá - Sứ.
        2. Tổng hợp chủ trị lâm sàng chính.
        3. Mức độ phối ngũ và lưu ý.`;

        const endpoint = typeof getApiEndpoint === 'function' ? getApiEndpoint() : '/.netlify/functions/chat';
        const res = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: prompt, ...getAiParams('phoingu_danhgia') })
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

// --- HỎI ĐÁP SÁCH PDF AI ---
async function hoiAIveSach(e) {
    if (e && e.preventDefault) e.preventDefault();

    const params = getAiParams('sach_ai');
    const chatBox = document.getElementById('sach-ai-chat-box') || document.getElementById('sach-chat-box');
    const inputEl = document.getElementById('sach-ai-input');
    
    if (!chatBox) return;

    if (!params.allowed) {
        chatBox.innerHTML += `<div class="bg-amber-950/40 p-2.5 rounded border border-amber-800 text-amber-300 text-xs"><i class="fa-solid fa-lock mr-1.5"></i> Tính năng Trích xuất Sách AI yêu cầu tài khoản từ cấp <strong>VIP</strong> trở lên.</div>`;
        return;
    }

    if (!inputEl || typeof window.selectedBookForAI === 'undefined' || !window.selectedBookForAI) return;

    const query = inputEl.value.trim();
    if (!query) return;

    chatBox.innerHTML += `
        <div class="bg-amber-950/40 p-2.5 rounded border border-amber-900/50 text-amber-200 text-right font-medium text-xs">
            <span class="font-bold text-amber-400">Bạn:</span> ${safeEscapeHTML(query)}
        </div>`;
    inputEl.value = '';

    const loadingId = 'sach-loading-' + Date.now();
    chatBox.innerHTML += `
        <div id="${loadingId}" class="bg-stone-900 p-2.5 rounded border border-stone-800 text-stone-400 flex items-center gap-2 text-xs">
            <i class="fa-solid fa-brain text-amber-500 animate-spin"></i>
            <span>Đang tra cứu nội dung trong sách "${safeEscapeHTML(window.selectedBookForAI)}"...</span>
        </div>`;
    chatBox.scrollTop = chatBox.scrollHeight;

    try {
        const prompt = `Dựa trên nội dung chuẩn của cuốn sách y học cổ truyền "${window.selectedBookForAI}", hãy giải đáp chi tiết câu hỏi sau: "${query}". Trả lời súc tích, chuyên môn cao bằng tiếng Việt.`;
        const endpoint = typeof getApiEndpoint === 'function' ? getApiEndpoint() : '/.netlify/functions/chat';
        const res = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: prompt, ...params })
        });
        const data = await res.json();

        document.getElementById(loadingId)?.remove();

        if (res.ok && data.reply) {
            chatBox.innerHTML += `
                <div class="bg-stone-900 p-3 rounded border border-stone-800 text-stone-300 space-y-1 text-xs">
                    <div class="font-bold text-amber-500 flex items-center gap-1.5 mb-1 pb-1 border-b border-stone-800">
                        <i class="fa-solid fa-robot"></i> Trích xuất từ "${safeEscapeHTML(window.selectedBookForAI)}"
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

// --- TẠO CÂU HỎI TRẮC NGHIỆM AI ---
async function fetchAIQuizQuestions(category, count) {
    const params = getAiParams('quiz');
    
    if (!params.allowed) {
        return [];
    }

    try {
        const prompt = `Hãy soạn chính xác ${count} câu hỏi trắc nghiệm khách quan về chuyên đề ${category} trong Y học cổ truyền (YHCT). 
        Yêu cầu trả về đúng định dạng JSON chuẩn gồm một mảng đúng ${count} object với các trường:
        - "cau_hoi": Nội dung câu hỏi lâm sàng hoặc lý luận.
        - "lua_chon": Mảng gồm đúng 4 đáp án (chỉ chứa nội dung đáp án, KHÔNG ghi ký tự A, B, C, D ở đầu).
        - "dap_an": Chỉ số đáp án đúng (từ 0 đến 3 ứng với 4 lựa chọn).
        - "giai_thich": Giải thích chi tiết ngắn gọn vì sao đáp án đó chính xác.
        Chỉ trả về định dạng JSON thuần túy, không kèm theo chữ giải thích nào khác ngoài JSON.`;

        const endpoint = typeof getApiEndpoint === 'function' ? getApiEndpoint() : '/.netlify/functions/chat';
        const res = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                prompt, 
                ...params 
            })
        });
        
        const data = await res.json();
        if (res.ok && data.reply) {
            const parsedArray = parseJsonFromAI(data.reply);
            if (Array.isArray(parsedArray)) {
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

// --- PHÂN TÍCH VỌNG CHẨN & TỨ CHẨN AI ---
async function guiPhanTichVongChan() {
    const params = getAiParams('vongchan');
    const outputEl = document.getElementById('vong-chan-output');

    if (!params.allowed) {
        const errHtml = `<div class="bg-amber-950/40 p-3 rounded-lg border border-amber-800 text-amber-300 text-xs text-center"><i class="fa-solid fa-lock mr-1.5"></i> Tính năng Phân Tích Vọng Chẩn bằng AI yêu cầu tài khoản từ cấp <strong>VIP</strong> trở lên.</div>`;
        if (outputEl) outputEl.innerHTML = errHtml;
        return;
    }

    const imgBase64 = window.vongChanImageBase64;
    if (!imgBase64) {
        alert("Vui lòng chụp ảnh hoặc tải ảnh lên trước khi thực hiện phân tích!");
        return;
    }

    const typeSelect = document.getElementById('vong-chan-type')?.value;
    const noteText = document.getElementById('van-hoi-note')?.value.trim() || '';
    const useHistory = !!document.getElementById('vong-chan-use-history')?.checked;
    
    const btnSubmit = document.getElementById('btn-phan-tich-vong-chan');
    const resultBox = document.getElementById('vong-chan-result');
    const btnSave = document.getElementById('btn-save-vongchan');

    if (btnSave) btnSave.classList.add('hidden');
    if (typeof window.currentVongChanRecord !== 'undefined') window.currentVongChanRecord = null;

    let typeText = "Thiệt chẩn (Lưỡi)";
    if (typeSelect === "dien_chan") typeText = "Diện chẩn (Sắc mặt, thần thái)";
    if (typeSelect === "da_da") typeText = "Sắc da / Thương tổn ngoài da";

    let historyContext = "";
    if (useHistory && typeof openVongChanDB === 'function') {
        try {
            const db = await openVongChanDB();
            const tx = db.transaction('history', 'readonly');
            const store = tx.objectStore('history');
            const request = store.getAll();
            
            await new Promise((resolve) => {
                request.onsuccess = () => {
                    const history = request.result || [];
                    if (history.length > 0) {
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
            console.error("Lỗi trích xuất lịch sử:", e);
        }
    }

    const promptText = `Chuyên gia YHCT: Phân tích hình ảnh theo phương pháp "${typeText}".
Triệu chứng: "${noteText || 'Không'}". ${historyContext}

Yêu cầu súc tích (<200 từ, tiếng Việt, không dùng chữ Hán):
1. Hình thái đặc trưng
2. Biện chứng YHCT (Căn bệnh, Bát cương, Tạng phủ)
3. Định hướng điều trị & Cổ phương`;

    if (btnSubmit) {
        btnSubmit.disabled = true;
        btnSubmit.classList.add('opacity-50', 'pointer-events-none');
        btnSubmit.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> AI đang soi hình ảnh & đối chiếu lịch sử...`;
    }
    
    if (resultBox) resultBox.classList.remove('hidden');
    if (outputEl) outputEl.innerHTML = `<div class="text-amber-400 italic flex items-center gap-1.5"><i class="fa-solid fa-brain fa-spin"></i> AI đang phân tích hình ảnh & dữ liệu...</div>`;

    try {
        const endpoint = typeof getApiEndpoint === 'function' ? getApiEndpoint() : '/.netlify/functions/chat';
        const res = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                prompt: promptText, 
                image: imgBase64,
                ...params
            })
        });

        const data = await res.json();
        if (res.ok && data.reply) {
            if (outputEl) outputEl.innerHTML = formatAIMessage(data.reply);

            if (typeof window.currentVongChanRecord !== 'undefined') {
                window.currentVongChanRecord = {
                    id: Date.now(),
                    date: new Date().toLocaleString('vi-VN'),
                    type: "Vọng Chẩn (Hình Ảnh)",
                    noteVanSu: noteText || '',
                    mach: '',
                    xucChan: '',
                    note: `Vấn: ${noteText || 'Không'}`,
                    image: imgBase64 || '',
                    reply: data.reply
                };
            }
            if (btnSave) btnSave.classList.remove('hidden');
        } else {
            if (outputEl) outputEl.innerHTML = `<div class="text-red-400 font-medium p-2 bg-red-950/40 border border-red-800 rounded">⚠️ ${safeEscapeHTML(data.error || 'AI không nhận diện được ảnh.')}</div>`;
        }
    } catch (err) {
        console.error("Lỗi gửi Vọng chẩn:", err);
        if (outputEl) outputEl.innerHTML = `<div class="text-red-400 font-medium p-2 bg-red-950/40 border border-red-800 rounded">⚠️ Lỗi kết nối server AI.</div>`;
    } finally {
        if (btnSubmit) {
            btnSubmit.disabled = false;
            btnSubmit.classList.remove('opacity-50', 'pointer-events-none');
            btnSubmit.innerHTML = `<i class="fa-solid fa-brain"></i> AI Phân Tích Vọng Chẩn`;
        }
    }
}

async function guiPhanTichTuChan() {
    const params = getAiParams('vongchan');
    const chatBox = document.getElementById('ai-chat-box');

    if (!params.allowed) {
        if (chatBox) chatBox.innerHTML = `<div class="bg-amber-950/40 p-3 rounded-lg border border-amber-800 text-amber-300 text-xs text-center"><i class="fa-solid fa-lock mr-1.5"></i> Tính năng Hội Chẩn Tứ Chẩn AI yêu cầu tài khoản từ cấp <strong>VIP</strong> trở lên.</div>`;
        return;
    }

    const noteVanNghe = document.getElementById('van-nghe-note')?.value.trim() || '';
    const noteVanHoi = document.getElementById('van-hoi-note')?.value.trim() || '';
    const mach = document.getElementById('thiet-chan-mach')?.value || '';
    const xucChan = document.getElementById('thiet-chan-xuc')?.value.trim() || '';
    const useHistory = !!document.getElementById('vong-chan-use-history')?.checked;
    
    const btnSubmit = document.getElementById('btn-phan-tich-tu-chan');
    const resultBox = document.getElementById('vong-chan-result');

    let historyContext = "";
    if (useHistory && typeof openVongChanDB === 'function') {
        try {
            const db = await openVongChanDB();
            const tx = db.transaction('history', 'readonly');
            const store = tx.objectStore('history');
            const request = store.getAll();
            
            await new Promise((resolve) => {
                request.onsuccess = () => {
                    const history = request.result || [];
                    if (history.length > 0) {
                        history.sort((a, b) => b.id - a.id);
                        const last = history[0];
                        const safeReply = last.reply ? String(last.reply).replace(/[\n\r]+/g, ' ').substring(0, 80) : '';
                        historyContext = ` Lần trước (${last.date}): ${safeReply}...`;
                    }
                    resolve();
                };
                request.onerror = () => resolve();
            });
        } catch (e) {
            console.error("Lỗi trích xuất lịch sử:", e);
        }
    }

    const promptText = `Bạn là chuyên gia Y học cổ truyền. Hãy phân tích Tứ Chẩn dựa trên dữ liệu bệnh nhân sau:
- Vọng chẩn (Hình ảnh sắc mặt/lưỡi): Phân tích đặc điểm hình thái quan sát được từ ảnh.
- Văn chẩn (Âm thanh, hơi thở): ${noteVanNghe || 'Không có'}
- Vấn chẩn (Triệu chứng hỏi bệnh): ${noteVanHoi || 'Không có'}
- Thiết chẩn (Mạch tượng & Xúc chẩn): Mạch ${mach || 'Chưa bắt'}, Xúc chẩn: ${xucChan || 'Không'}
${historyContext ? `- Lịch sử khám: ${historyContext}` : ''}

Yêu cầu: BẮT BUỘC trả về DUY NHẤT một đối tượng JSON thuần túy theo đúng cấu trúc:
{
  "vong_chan": "...",
  "van_chan": "...",
  "van_hoi": "...",
  "thiet_chan": "...",
  "bat_cuong": "...", 
  "tang_phu": "...", 
  "hoi_chung": "...",
  "bien_chung": "...", 
  "phap_tri": "...", 
  "co_phuong": "...", 
  "vi_thuoc": [{"ten": "...", "lieu": "...", "vai_tro": "..."}]
}`;

    if (btnSubmit) {
        btnSubmit.disabled = true;
        btnSubmit.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> AI đang phân tích...`;
    }
    
    if (resultBox) resultBox.classList.remove('hidden');
    if (chatBox) chatBox.innerHTML = `<div class="bg-stone-900 p-3 rounded text-amber-400 italic flex items-center gap-2"><i class="fa-solid fa-brain fa-spin"></i> AI đang hội chẩn Tứ Chẩn...</div>`;

    const imgBase64 = (typeof window.vongChanImageBase64 !== 'undefined' && window.vongChanImageBase64) ? window.vongChanImageBase64 : null;

    try {
        const endpoint = typeof getApiEndpoint === 'function' ? getApiEndpoint() : '/.netlify/functions/chat';
        const res = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                prompt: promptText, 
                image: imgBase64,
                ...params
            })
        });

        const data = await res.json();
        if (res.ok && data.reply) {
            window.currentDiagnosticContext = `HỒ SƠ BỆNH NHÂN HIỆN TẠI:
- Văn chẩn: ${noteVanNghe || 'Không'}
- Vấn chẩn: ${noteVanHoi || 'Không'} | Mạch: ${mach || 'Chưa bắt mạch'}
- KẾT QUẢ AI: ${data.reply}`;

            if (chatBox) {
                chatBox.innerHTML = typeof renderTuChanCards === 'function' ? renderTuChanCards(data.reply) : formatAIMessage(data.reply);
            }

            if (typeof window.currentVongChanRecord !== 'undefined') {
                window.currentVongChanRecord = {
                    id: Date.now(),
                    date: new Date().toLocaleString('vi-VN'),
                    type: "Tứ Chẩn YHCT",
                    noteVanNghe: noteVanNghe,
                    noteVanHoi: noteVanHoi,
                    mach: mach || '',
                    xucChan: xucChan || '',
                    image: imgBase64 || '',
                    reply: data.reply
                };
            }

            const btnSave = document.getElementById('btn-save-vongchan');
            if (btnSave) btnSave.classList.remove('hidden');
        } else {
            if (chatBox) chatBox.innerHTML = `<div class="text-red-400 p-2 bg-red-950/40 rounded">⚠️ ${safeEscapeHTML(data.error || 'Lỗi phân tích')}</div>`;
        }
    } catch (err) {
        if (chatBox) chatBox.innerHTML = `<div class="text-red-400 p-2 bg-red-950/40 rounded">⚠️ Lỗi kết nối máy chủ AI.</div>`;
    } finally {
        if (btnSubmit) {
            btnSubmit.disabled = false;
            btnSubmit.innerHTML = `<i class="fa-solid fa-brain"></i> AI Tổng Hội Chẩn Tứ Chẩn`;
        }
    }
}
