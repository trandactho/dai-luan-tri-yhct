// ==========================================================================
// AI-SERVICE.JS - TỔNG HỢP TOÀN BỘ XỬ LÝ DỊCH VỤ AI, TRA CỨU & HỘI CHẨN
// ==========================================================================
function getApiEndpoint() {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        if (window.location.port === '8080') {
            return 'https://dailuantriyhct.com/.netlify/functions/chat';
        }
    }
    return '/.netlify/functions/chat';
}

const memoryStorage = {};

function safeLocalStorageGet(key, fallback = '{}') {
    try {
        return localStorage.getItem(key) || fallback;
    } catch (e) {
        return memoryStorage[key] || fallback;
    }
}

function safeLocalStorageSet(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (e) {
        memoryStorage[key] = value;
    }
}

function safeLocalStorageRemove(key) {
    try {
        localStorage.removeItem(key);
    } catch (e) {
        delete memoryStorage[key];
    }
}


function getAiParams(source, customMaxTokens = null) {
    let userSession = {};
    try {
        // Use safe retrieval instead of direct localStorage access
        userSession = JSON.parse(safeLocalStorageGet('app_user_session', '{}') || safeLocalStorageGet('user', '{}'));
    } catch (e) {
        console.warn("[AI Service] Không đọc được session từ localStorage:", e);
    }

    let role = (typeof getCurrentUserRole === 'function' ? getCurrentUserRole() : '').toUpperCase();
    if (!role) {
        // Replace direct localStorage calls here too
        role = (userSession.role || safeLocalStorageGet('user_role', 'GUEST').replace(/["']/g, '')).toUpperCase();
    }
    const email = window.currentUser?.email || userSession.email || '';
    const userId = window.currentUser?.id || userSession.id || '';

    const BASE_TOKENS = {
        'search': 500,
        'backup': 1100,
        'luantrihc': 500,
        'luantribt': 500,
        'phoingu_danhgia': 1000,
        'sach_ai': 1200,
        'vongchan': 1500,
        'quiz': 1500,
        'assistant': 3200,
        'default': 500
    };

    const baseTokens = BASE_TOKENS[source] || customMaxTokens ||  BASE_TOKENS['default'];
    const vipOnlySources = ['vongchan', 'sach_ai', 'thucdon', 'quiz'];
    const isAllowed = !(vipOnlySources.includes(source) && (role === 'GUEST' || role === 'FREE'));
    
    if (!isAllowed) {
        console.warn(`[AI Access Denied] Tài khoản ${role} bị giới hạn tính năng ${source}`);
    }

    let multiplier = 1;
    if (role === 'VIP') multiplier = 1.2;
    else if (role === 'SVIP') multiplier = 1.5;

    return {
        allowed: isAllowed,
        source: source,
        max_tokens: Math.round(baseTokens * multiplier),
        role: role,
        user_id: userId,
        email: email
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

function parseJsonFromAI(replyText) {
    if (!replyText) return null;
    let cleaned = String(replyText).replace(/```json\s*/gi, '').replace(/```\s*/g, '').trim();

    if (cleaned.toLowerCase().includes('valid json string') || cleaned.toLowerCase().includes('no prefix/suffix')) {
        return null;
    }

    try { 
        let parsed = JSON.parse(cleaned);
        if (parsed) return parsed;
    } catch (e) {}

    // Fallback cleanup for slightly malformed JSON or placeholder keys
    try {
        let fixedCleaned = cleaned
            .replace(/([{,]\s*)([a-zA-Z0-9_]+)(\s*:\s*)/g, '$1"$2"$3') // Quote unquoted keys
            .replace(/:\s*"([^"]*)"\s*(?=[,}])/g, (match, p1) => {
                if (p1.toUpperCase().includes('PHANTICH') || p1 === '...' || p1 === '') {
                    return ': "Đang cập nhật phân tích chi tiết theo vùng khí hậu."';
                }
                return match;
            });
        let parsedFixed = JSON.parse(fixedCleaned);
        if (parsedFixed) return parsedFixed;
    } catch (e) {}

    const objectMatch = cleaned.match(/\{[\s\S]*\}/);
    if (objectMatch) { 
        try { return JSON.parse(objectMatch[0]); } catch (e) {} 
    }

    const arrayMatch = cleaned.match(/\[[\s\S]*\]/);
    if (arrayMatch) { try { return JSON.parse(arrayMatch[0]); } catch (e) {} }

    return null;
}

function formatAIMessage(text) {
    if (!text) return '';

    let data = parseJsonFromAI(text);
    if (data && (data.cac_muc || data.tieu_de || data.tieude || data.hc || data.ten || data.cac_ngay || data.cacngay)) {
        let title = data.tieu_de || data.tieude || data.hc || data.ten;
        let html = `<div class="space-y-3 text-xs text-stone-300">`;
        let mainTitle = cleanTitleText(title);
        
        if (mainTitle) {
            html += `<div class="text-amber-400 font-bold text-sm uppercase tracking-wider border-b border-stone-800 pb-1.5 mb-2.5 flex items-center gap-1.5">
                        <i class="fa-solid fa-utensils text-amber-500 text-xs"></i> ${escapeHTML(mainTitle)}
                     </div>`;
        }

        let khuVuc = data.phan_tich_khu_vuc || data.phantichkhuvuc;
        if (khuVuc) {
            html += `<div class="bg-stone-900 p-2.5 rounded border border-stone-800 text-stone-300 mb-2 leading-relaxed">
                        <strong class="text-amber-400"><i class="fa-solid fa-cloud-sun"></i> Khí hậu & Mùa:</strong> ${escapeHTML(khuVuc)}
                     </div>`;
        }

        let days = data.cac_ngay || data.cacngay || [];
        if (Array.isArray(days) && days.length > 0) {
            html += `<div class="grid grid-cols-1 gap-2 my-2">`;
            days.forEach(ngay => {
                const thu = ngay.thu || ngay.day || 'Ngày';
                const sang = ngay.sang || { mon: '', cong_dung: '' };
                const trua = ngay.trua || { mon: '', cong_dung: '' };
                const toi = ngay.toi || { mon: '', cong_dung: '' };
                html += `<div class="bg-stone-900 p-2.5 rounded border border-stone-800 space-y-1">
                            <div class="font-bold text-emerald-400 border-b border-stone-800 pb-1 text-[11px] flex items-center gap-1">
                                <i class="fa-solid fa-calendar-day text-amber-500 text-[10px]"></i> ${escapeHTML(thu)}
                            </div>
                            <div class="text-[11px] space-y-1 text-stone-300 pt-1">
                                <div><strong>☀️ Sáng:</strong> ${escapeHTML(sang.mon || '')} <span class="text-stone-500 text-[10px]">(${escapeHTML(sang.cong_dung || '')})</span></div>
                                <div><strong>🍛 Trưa:</strong> ${escapeHTML(trua.mon || '')} <span class="text-stone-500 text-[10px]">(${escapeHTML(trua.cong_dung || '')})</span></div>
                                <div><strong>🌙 Tối:</strong> ${escapeHTML(toi.mon || '')} <span class="text-stone-500 text-[10px]">(${escapeHTML(toi.cong_dung || '')})</span></div>
                            </div>
                         </div>`;
            });
            html += `</div>`;
        }

        let sections = data.cac_muc || [];
        sections.forEach(muc => {
            let titleMuc = cleanTitleText(muc.tieu_de_muc || muc.muc || "");
            let noiDungMuc = muc.noi_dung || muc.noi_dung_chinh || muc.chi_tiet || [];

            html += `<div class="mt-3 mb-2">`;
            if (titleMuc) {
                html += `<div class="text-amber-400 font-bold uppercase text-[11px] tracking-wide bg-stone-900 px-2 py-1 rounded border border-stone-800 mb-1.5 inline-block">
                            <i class="fa-solid fa-caret-right text-amber-500 mr-1 text-[9px]"></i>${escapeHTML(titleMuc)}:
                         </div>`;
            }

            if (Array.isArray(noiDungMuc) && noiDungMuc.length > 0) {
                html += `<ul class="space-y-1 pl-1">`;
                noiDungMuc.forEach(y => {
                    html += `<li class="flex items-start gap-2 my-1 text-stone-300 leading-relaxed">
                                <span class="text-amber-500 mt-0.5 text-[8px] shrink-0"><i class="fa-solid fa-circle"></i></span>
                                <span>${escapeHTML(decodeHtmlEntities(String(y)))}</span>
                             </li>`;
                });
                html += `</ul>`;
            } else if (typeof noiDungMuc === 'string' && noiDungMuc) {
                html += `<p class="leading-relaxed pl-1 text-stone-300">${escapeHTML(decodeHtmlEntities(noiDungMuc))}</p>`;
            }
            html += `</div>`;
        });

        let warningText = data.luu_y || data.kieng_ky || data.luu_y_chung;
        if (warningText) {
            html += `<div class="bg-amber-950/60 border-l-4 border-amber-500 p-3 mt-3 rounded-r-lg text-amber-200 leading-relaxed shadow-md">
                        <div class="font-bold text-amber-400 mb-1 uppercase tracking-wider text-[10px] flex items-center gap-1.5">
                            <i class="fa-solid fa-triangle-exclamation"></i> Lưu ý phối hợp & chế biến:
                        </div>
                        ${escapeHTML(decodeHtmlEntities(String(warningText)))}
                     </div>`;
        }

        html += `</div>`;
        return typeof DOMPurify !== 'undefined' ? DOMPurify.sanitize(html, { ADD_ATTR: ['target', 'onclick', 'title'] }) : html;
    }

    let cleaned = String(text).replace(/^(chào bạn|dưới đây là|rất vui)[^:\n]*[:\n]?/gi, '').trim();
    cleaned = cleaned
        .replace(/\*\*([^*]+)\*\*/g, '$1')
        .replace(/\*([^*]+)\*/g, '$1')
        .replace(/__([^_]+)__/g, '$1')
        .replace(/_([^_]+)_/g, '$1');

    let safe = escapeHTML(decodeHtmlEntities(cleaned));
    const lines = safe.split('\n');

    const formattedLines = lines.map((line) => {
        let trimmed = line.trim();
        if (!trimmed || trimmed === '---') return '<div class="h-2"></div>';

        if (trimmed.startsWith('###') || trimmed.startsWith('##') || trimmed.startsWith('#')) {
            let titleText = cleanTitleText(trimmed);
            return `<div class="text-amber-400 font-bold text-xs uppercase tracking-wider mt-4 mb-2 border-b border-stone-800 pb-1">${escapeHTML(titleText)}</div>`;
        }

        const isHeadingLabel = (trimmed.endsWith(':') || trimmed.endsWith('：')) && trimmed.length < 40 && !trimmed.includes('(');
        if (isHeadingLabel) {
            let labelText = cleanTitleText(trimmed.replace(/[:：]\s*$/, ''));
            return `<div class="text-amber-400 font-bold text-xs uppercase tracking-wider mt-4 mb-1.5 flex items-center gap-1.5"><i class="fa-solid fa-caret-right text-amber-500 text-[10px]"></i>${escapeHTML(labelText)}</div>`;
        }

        const colonIndex = trimmed.indexOf(':');
        if (colonIndex > 0 && colonIndex < 35 && !trimmed.startsWith('http')) {
            let label = cleanTitleText(trimmed.substring(0, colonIndex));
            let content = trimmed.substring(colonIndex + 1).trim();
            if (label.length < 30) {
                return `<div class="mt-3 mb-1 text-xs leading-relaxed"><span class="text-amber-400 font-semibold bg-stone-900 px-1.5 py-0.5 rounded border border-stone-800 mr-1.5 inline-block">${escapeHTML(label)}:</span> <span class="text-stone-300">${content}</span></div>`;
            }
        }

        if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
            return `<li class="ml-4 list-disc text-stone-300 my-1.5 leading-relaxed text-xs">${trimmed.substring(2)}</li>`;
        }

        if (/^\d+\.\s/.test(trimmed)) {
            return `<div class="font-bold text-amber-300 mt-3 mb-1 text-xs">${trimmed}</div>`;
        }

        if (trimmed.includes('⚠️') || trimmed.toLowerCase().includes('lưu ý') || trimmed.toLowerCase().includes('chú ý') || trimmed.toLowerCase().includes('kiêng kỵ')) {
            let contentWarning = trimmed.replace(/^(⚠️|lưu ý lâm sàng[:\s]*|lưu ý[:\s]*|chú ý[:\s]*)/gi, '');
            return `<div class="bg-amber-950/60 border-l-4 border-amber-500 p-3 my-3 rounded-r-lg text-amber-200 text-xs leading-relaxed shadow-md"><div class="font-bold text-amber-400 mb-1 uppercase tracking-wider">Lưu ý lâm sàng:</div>${escapeHTML(contentWarning)}</div>`;
        }

        return `<p class="my-1.5 leading-relaxed text-stone-300 text-xs">${trimmed}</p>`;
    });

    const rawHtml = formattedLines.join('');
    return typeof DOMPurify !== 'undefined' ? DOMPurify.sanitize(rawHtml, { ADD_ATTR: ['target', 'onclick', 'title'] }) : rawHtml;
}

// --- TRỢ LÝ AI CHAT TRỰC TIẾP ---
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
            <span>Trợ lý AI YHCT đang phân tích theo hồ sơ chẩn đoán...</span>
        </div>`;
    chatBox.scrollTop = chatBox.scrollHeight;

    if (btnSend) {
        btnSend.disabled = true;
        btnSend.classList.add('opacity-50', 'pointer-events-none');
    }

    let fullPrompt = `[Yêu cầu: Trả lời ngắn gọn, súc tích, đi thẳng vào ý chính]. ${query}`;
    if (typeof currentDiagnosticContext !== 'undefined' && currentDiagnosticContext) {
        fullPrompt = `[NGỮ CẢNH HỘI CHẨN TRƯỚC ĐÓ]\n${currentDiagnosticContext}\n\n[CÂU HỎI TIẾP THEO CỦA BỆNH NHÂN - Yêu cầu ngắn gọn, súc tích]: "${query}"`;
    }

    try {
        const res = await fetch(getApiEndpoint(), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: fullPrompt, ...getAiParams('search', 200) })
        });
        const data = await res.json();

        document.getElementById(loadingId)?.remove();

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
        document.getElementById(loadingId)?.remove();
        chatBox.innerHTML += `<div class="bg-red-950/40 p-3 rounded-lg border border-red-800 text-red-300 text-xs"><i class="fa-solid fa-plug-circle-xmark mr-1"></i> ${escapeHTML(err.message || 'Lỗi kết nối máy chủ AI.')}</div>`;
    } finally {
        if (btnSend) {
            btnSend.disabled = false;
            btnSend.classList.remove('opacity-50', 'pointer-events-none');
        }
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

function validateAndCleanAIResult(obj, tabName) {
    if (!obj || typeof obj !== 'object') return null;

    const getVal = (keys, defaultVal = '') => {
        for (let k of keys) {
            if (obj[k] && String(obj[k]).trim()) return String(obj[k]).trim();
        }
        return defaultVal;
    };

    if (tabName.includes('Luận Trị') || tabName.includes('luantri')) {
        return {
            hc: getVal(['hc', 'hoi_chung', 'ten'], 'HỘI CHỨNG CHƯA RÕ'),
            phanloai: Array.isArray(obj.phanloai) ? obj.phanloai.map(String) : ['Tạng Phế', 'Bình', 'Thực', '---'],
            pdt: getVal(['pdt', 'phap_tri', 'phap_dieu_tri'], 'Theo chỉ định chuyên môn'),
            tc: Array.isArray(obj.tc) ? obj.tc.map(String) : [getVal(['tc', 'trieu_chung'], 'Đang cập nhật triệu chứng')],
            bt: getVal(['bt', 'bai_thuoc', 'co_phuong'], 'Đối chứng nghiệm phương'),
            tpbt: Array.isArray(obj.tpbt) ? obj.tpbt.map(String) : []
        };
    } else if (tabName.includes('Dược Liệu') || tabName.includes('duoclieu')) {
        return {
            ten: getVal(['ten', 'ten_duoc_lieu'], 'Dược liệu chưa rõ tên'),
            nhom: getVal(['nhom', 'nhom_duoc_lieu'], 'Dược liệu YHCT'),
            ten_khoa_hoc: getVal(['ten_khoa_hoc', 'khoa_hoc'], ''),
            pinyin: getVal(['pinyin', 'ten_trung_quoc'], ''),
            cong_dung: getVal(['cong_dung', 'tac_dung', 'chu_tri'], 'Tư âm dưỡng huyết, khu phong trừ thấp.'),
            kieng_ky: getVal(['kieng_ky', 'luu_y', 'chong_chi_dinh'], 'Tuân thủ liều lượng tiêu chuẩn.')
        };
    } else if (tabName.includes('Huyệt Vị') || tabName.includes('huyetvi')) {
        return {
            ten: getVal(['ten', 'ten_huyet'], 'Huyệt chưa rõ tên'),
            kinh: getVal(['kinh', 'kinh_mach'], 'Kinh mạch YHCT'),
            ma_who: getVal(['ma_who', 'ma_huyet'], ''),
            chu_tri: getVal(['chu_tri', 'cong_dung', 'tac_dung'], 'Điều hòa khí huyết, thông kinh hoạt lạc.'),
            vi_tri: getVal(['vi_tri', 'dinh_vi', 'mota'], 'Đang cập nhật mô tả giải phẫu.')
        };
    } else if (tabName.includes('Trà Dược') || tabName.includes('Tra') || tabName.includes('tra')) {
        let rawThanhPhan = obj.thanh_phan || obj.thanhphan || obj.cac_vi_thuoc || obj.nguyen_lieu || obj.thanh_phan_chinh;
        let thanhPhanArr = [];
        
        if (Array.isArray(rawThanhPhan)) {
            thanhPhanArr = rawThanhPhan.map(v => String(v).replace(/^[\s,.\-]+/, '').trim()).filter(Boolean);
        } else if (typeof rawThanhPhan === 'string' && rawThanhPhan.trim()) {
            thanhPhanArr = rawThanhPhan.split(/[,;\n]+/).map(v => v.replace(/^[\s,.\-]+/, '').trim()).filter(Boolean);
        }

        let rawCongDung = getVal(['cong_dung', 'tac_dung', 'chu_tri', 'cong_nang'], '').replace(/^[\s,.\-]+/, '').trim();
        let rawCachDung = getVal(['cach_dung', 'cach_pha', 'huong_dan', 'lieu_dung'], '').replace(/^[\s,.\-]+/, '').trim();

        const isUsageText = (txt) => /hãm|pha|uống|nước sôi|phút|ngày|lần|dùng/i.test(txt);
        const looksLikeIngredients = (txt) => !isUsageText(txt) && (txt.includes(',') || txt.includes('(') || /hoa|táo|trà|cúc|lài|kỷ tử|nhân sâm|cam thảo/i.test(txt));

        if (looksLikeIngredients(rawCachDung)) {
            if (thanhPhanArr.length === 0 || (thanhPhanArr.length === 1 && thanhPhanArr[0] === obj.ten)) {
                thanhPhanArr = rawCachDung.split(/[,;\n]+/).map(v => v.replace(/^[\s,.\-]+/, '').trim()).filter(Boolean);
            }
            rawCachDung = 'Hãm với nước sôi 85-90°C trong 10-15 phút, uống ấm hàng ngày.';
        }

        if (isUsageText(rawCongDung) && !isUsageText(rawCachDung)) {
            rawCachDung = rawCongDung;
            rawCongDung = 'Thanh nhiệt, giải độc, điều hòa cơ thể, tăng cường sức khỏe.';
        }

        let finalTen = getVal(['ten', 'ten_tra', 'ten_bai_tra'], 'Bài trà YHCT');
        
        if (thanhPhanArr.length === 0 || (thanhPhanArr.length === 1 && thanhPhanArr[0].toLowerCase() === finalTen.toLowerCase())) {
            thanhPhanArr = ["Chưa phân tách được thành phần"];
        }

        return {
            ten: finalTen,
            nhom: getVal(['nhom', 'nhom_tra'], 'Trà Dược YHCT'),
            cong_dung: rawCongDung || 'Thanh nhiệt, giải độc, an thần, điều hòa cơ thể.',
            cach_dung: rawCachDung || 'Hãm với nước sôi 85-90°C trong 10-15 phút.',
            kieng_ky: getVal(['kieng_ky', 'luu_y', 'chong_chi_dinh'], 'Phụ nữ có thai hoặc người tỳ vị hư hàn nên tham khảo ý kiến chuyên gia.'),
            thanh_phan: thanhPhanArr
        };
    } else if (tabName.includes('Dược Thiện') || tabName.includes('DuocThien') || tabName.includes('duocthien')) {
        let formattedThanhPhan = [{ vi: 'Thành phần chính', lieu: 'Vừa đủ' }];
        if (Array.isArray(obj.thanh_phan)) {
            formattedThanhPhan = obj.thanh_phan.map(item => {
                if (typeof item === 'object' && item !== null) {
                    return { vi: String(item.vi || item.ten || 'Vị thuốc'), lieu: String(item.lieu || item.lieu_luong || 'Vừa đủ') };
                }
                return { vi: String(item), lieu: 'Vừa đủ' };
            });
        }
        return {
            ten: getVal(['ten', 'ten_mon'], 'Món dược thiện chưa rõ tên'),
            nhom: getVal(['nhom', 'nhom_duoc_thien'], 'Dược Thiện YHCT'),
            cong_dung: getVal(['cong_dung', 'tac_dung', 'chu_tri'], 'Bồi bổ cơ thể, hỗ trợ điều trị bệnh.'),
            thanh_phan: formattedThanhPhan,
            so_che: getVal(['so_che', 'chuan_bi'], 'Sơ chế nguyên liệu sạch sẽ.'),
            cach_lam: Array.isArray(obj.cach_lam) ? obj.cach_lam.map(String) : [getVal(['cach_lam', 'huong_dan'], 'Nấu chín theo phương pháp cổ truyền.')],
            kieng_ky: getVal(['kieng_ky', 'luu_y'], 'Tham khảo ý kiến thầy thuốc trước khi dùng.')
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
            <p class="text-xs text-stone-500">Từ khóa: "${escapeHTML(query)}"</p>
        </div>
    `;
    try {
        let prompt = '';
        if (tabName.includes('Dược Liệu') || tabName.includes('duoclieu')) {
            prompt = `Yêu cầu: Hãy đóng vai CSDL YHCT chuẩn xác và trả về DUY NHẤT 1 JSON string hợp lệ cho dược liệu "${query}", KHÔNG kèm bất kỳ chữ dẫn dắt nào ngoài JSON.

Cấu trúc JSON:
{
  "ten": "${query}",
  "nhom": "Tên nhóm dược liệu phù hợp",
  "ten_khoa_hoc": "Tên khoa học Latinh chính xác",
  "pinyin": "Tên phiên âm Pinyin/tiếng Trung",
  "cong_dung": "Mô tả tác dụng chữa bệnh chính",
  "kieng_ky": "Lưu ý kiêng kỵ"
}`;
        } else if (tabName.includes('Huyệt Vị') || tabName.includes('huyetvi')) {
            prompt = `Yêu cầu: Hãy đóng vai CSDL YHCT chuẩn xác và trả về DUY NHẤT 1 JSON string hợp lệ cho huyệt vị "${query}", KHÔNG kèm bất kỳ chữ dẫn dắt nào ngoài JSON.

Cấu trúc JSON:
{
  "ten": "${query}",
  "kinh": "Tên kinh mạch (ví dụ: Kinh Phế, Kinh Vị...)",
  "ma_who": "Mã chuẩn WHO (nếu có, vd: LU7, ST36)",
  "chu_tri": "Công dụng chủ trị chính của huyệt",
  "vi_tri": "Mô tả vị trí giải phẫu cụ thể"
}`;
        } else if (tabName.includes('Trà Dược') || tabName.includes('Tra') || tabName.includes('tra')) {
            prompt = `Yêu cầu: Hãy đóng vai CSDL YHCT chuẩn xác và trả về DUY NHẤT 1 JSON string hợp lệ cho bài trà "${query}", KHÔNG kèm bất kỳ chữ dẫn dắt nào ngoài JSON.

Cấu trúc JSON:
{
  "ten": "${query}",
  "nhom": "Nhóm trà dược phù hợp",
  "cong_dung": "Công dụng chính",
  "cach_dung": "Cách hãm/pha trà chi tiết",
  "kieng_ky": "Lưu ý kiêng kỵ",
  "thanh_phan": ["Thành phần vị 1", "Thành phần vị 2"]
}`;
        } else if (tabName.includes('Dược Thiện') || tabName.includes('DuocThien') || tabName.includes('duocthien')) {
            prompt = `Yêu cầu: Hãy đóng vai CSDL YHCT chuẩn xác và trả về DUY NHẤT 1 JSON string hợp lệ cho món dược thiện "${query}", KHÔNG kèm bất kỳ chữ dẫn dắt nào ngoài JSON.

Cấu trúc JSON:
{
  "ten": "${query}",
  "nhom": "Nhóm dược thiện",
  "cong_dung": "Tác dụng bồi bổ/chữa bệnh",
  "thanh_phan": [{"vi": "Tên vị/nguyên liệu", "lieu": "Liều lượng"}],
  "so_che": "Cách sơ chế nguyên liệu",
  "cach_lam": ["Bước 1...", "Bước 2..."],
  "kieng_ky": "Lưu ý khi dùng"
}`;
        } else {
            prompt = `Yêu cầu: Hãy đóng vai CSDL YHCT chuẩn xác và trả về DUY NHẤT 1 JSON string hợp lệ cho hội chứng/triệu chứng "${query}" (Biện chứng Luận Trị), KHÔNG kèm bất kỳ chữ dẫn dắt nào ngoài JSON.

Cấu trúc JSON:
{
  "hc": "${query.toUpperCase()}",
  "phanloai": ["Tạng phủ", "Âm dương", "Biểu lý", "Hư thực"],
  "pdt": "Pháp điều trị chính",
  "tc": ["Triệu chứng lâm sàng 1", "Triệu chứng lâm sàng 2"],
  "bt": "Bài thuốc cổ phương đại diện",
  "tpbt": ["Thành phần bài thuốc 1", "Thành phần bài thuốc 2"]
}`;
        }

        const res = await fetch(getApiEndpoint(), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: prompt, ...getAiParams('backup', 1000) })
        });

        let data = {};
        try {
            data = await res.json();
        } catch (e) {
            throw new Error('Máy chủ trả về dữ liệu không hợp lệ.');
        }
    
        if (res.ok && data.reply) {
            let parsedObj = parseJsonFromAI(data.reply);
            if (parsedObj) {
                parsedObj = validateAndCleanAIResult(parsedObj, tabName);
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
                const isMetaError = data.reply && (data.reply.includes('valid JSON string') || data.reply.includes('no prefix'));
                containerEl.innerHTML = `
                    <div class="col-span-full bg-stone-900 p-4 rounded-xl border border-amber-600/40 text-stone-300 space-y-2 shadow-inner">
                        <div class="font-bold text-amber-400 text-sm flex items-center gap-2 border-b border-stone-800 pb-2">
                            <i class="fa-solid fa-robot"></i> Trợ lý AI YHCT:
                        </div>
                        <div class="text-xs leading-relaxed text-stone-300">
                            ${isMetaError ? 'Hệ thống đang bận định dạng phản hồi. Vui lòng bấm lại nút "AI Tìm & lưu" để tiếp tục.' : formatAIMessage(data.reply)}
                        </div>
                    </div>`;
            }
        } else {
            containerEl.innerHTML = `<div class="col-span-full text-center py-8 text-xs text-stone-500">${escapeHTML(data.error || 'AI Backup không phản hồi.')}</div>`;
        }
    } catch (err) {
        console.error("Lỗi AI Backup:", err);
        containerEl.innerHTML = `<div class="col-span-full text-center py-8 text-xs text-red-400">Lỗi kết nối AI. Vui lòng thử lại sau.</div>`;
    }
}

function luuKetQuaAiVaoDb(query, tabName, objData) {
    if (!query || !objData) return;

    const cleanKey = typeof removeAccents === 'function' ? removeAccents(query).trim().replace(/\s+/g, '_') : query.toLowerCase().replace(/\s+/g, '_');

    // 1. LUẬN TRỊ
    if (tabName.includes('Luận Trị') || tabName.includes('luantri')) {
        if (typeof database === 'undefined') window.database = {};
        database[cleanKey] = {
            hc: objData.hc || query.toUpperCase(),
            phanloai: Array.isArray(objData.phanloai) ? objData.phanloai : ["Tạng Phế", "Bình", "Thực", "---"],
            tc: Array.isArray(objData.tc) ? objData.tc : [query],
            pdt: objData.pdt || "Theo chỉ định AI",
            bt: objData.bt || "Đối chứng nghiệm phương",
            tpbt: Array.isArray(objData.tpbt) ? objData.tpbt : [],
            isAiGenerated: true
        };
        safeLocalStorageSet('custom_database', JSON.stringify(database));
    } 
    // 2. DƯỢC LIỆU
    else if (tabName.includes('Dược Liệu') || tabName.includes('duoclieu')) {
        if (typeof duocLieuData === 'undefined') window.duocLieuData = [];
        const newObj = {
            ten: objData.ten || query,
            nhom: objData.nhom || "Dược Liệu YHCT",
            ten_khoa_hoc: objData.ten_khoa_hoc || '',
            pinyin: objData.pinyin || '',
            cong_dung: objData.cong_dung || 'Tư âm dưỡng huyết, khu phong trừ thấp.',
            kieng_ky: objData.kieng_ky || 'Tuân thủ liều lượng tiêu chuẩn.',
            isAiGenerated: true
        };
        let idx = duocLieuData.findIndex(t => (typeof removeAccents === 'function' ? removeAccents(t.ten) : t.ten) === (typeof removeAccents === 'function' ? removeAccents(query) : query));
        if (idx >= 0) duocLieuData[idx] = { ...duocLieuData[idx], ...newObj }; else duocLieuData.unshift(newObj);

        let custom = JSON.parse(safeLocalStorageGet('custom_duocLieuData', '[]'));
        let cIdx = custom.findIndex(t => (typeof removeAccents === 'function' ? removeAccents(t.ten) : t.ten) === (typeof removeAccents === 'function' ? removeAccents(query) : query));
        if (cIdx >= 0) custom[cIdx] = newObj; else custom.unshift(newObj);
        
        safeLocalStorageSet('custom_duocLieuData', JSON.stringify(custom));
    }
    // 3. HUYỆT VỊ
    else if (tabName.includes('Huyệt Vị') || tabName.includes('huyetvi')) {
        if (typeof huyetViData === 'undefined') window.huyetViData = [];
        const newObj = {
            ten: objData.ten || query,
            kinh: objData.kinh || "Kinh mạch YHCT",
            ma_who: objData.ma_who || '',
            chu_tri: objData.chu_tri || 'Điều hòa khí huyết, thông kinh hoạt lạc.',
            vi_tri: objData.vi_tri || 'Đang cập nhật mô tả giải phẫu.',
            isAiGenerated: true
        };
        let idx = huyetViData.findIndex(t => (typeof removeAccents === 'function' ? removeAccents(t.ten) : t.ten) === (typeof removeAccents === 'function' ? removeAccents(query) : query));
        if (idx >= 0) huyetViData[idx] = { ...huyetViData[idx], ...newObj }; else huyetViData.unshift(newObj);

        let custom = JSON.parse(safeLocalStorageGet('custom_huyetViData', '[]'));
        let cIdx = custom.findIndex(t => (typeof removeAccents === 'function' ? removeAccents(t.ten) : t.ten) === (typeof removeAccents === 'function' ? removeAccents(query) : query));
        if (cIdx >= 0) custom[cIdx] = newObj; else custom.unshift(newObj);
        
        safeLocalStorageSet('custom_huyetViData', JSON.stringify(custom));
    }
    // 4. TRÀ DƯỢC
    else if (tabName.includes('Trà Dược') || tabName.includes('Tra') || tabName.includes('tra')) {
        if (typeof traData === 'undefined') window.traData = [];
        const newObj = {
            ten: objData.ten || query,
            nhom: objData.nhom || "Trà Dược YHCT",
            cong_dung: objData.cong_dung || 'Thanh nhiệt, giải độc, điều hòa cơ thể.',
            kieng_ky: objData.kieng_ky || 'Tham khảo ý kiến chuyên gia.',
            cach_dung: objData.cach_dung || 'Hãm với nước sôi 10-15 phút.',
            thanh_phan: Array.isArray(objData.thanh_phan) && objData.thanh_phan.length > 0 ? objData.thanh_phan : [query],
            isAiGenerated: true
        };
        let idx = traData.findIndex(t => (typeof removeAccents === 'function' ? removeAccents(t.ten) : t.ten) === (typeof removeAccents === 'function' ? removeAccents(query) : query));
        if (idx >= 0) traData[idx] = { ...traData[idx], ...newObj }; else traData.unshift(newObj);

        let custom = JSON.parse(safeLocalStorageGet('custom_traData', '[]'));
        let cIdx = custom.findIndex(t => (typeof removeAccents === 'function' ? removeAccents(t.ten) : t.ten) === (typeof removeAccents === 'function' ? removeAccents(query) : query));
        if (cIdx >= 0) custom[cIdx] = newObj; else custom.unshift(newObj);

        safeLocalStorageSet('custom_traData', JSON.stringify(custom));
    }
    // 5. DƯỢC THIỆN
    else if (tabName.includes('Dược Thiện') || tabName.includes('DuocThien') || tabName.includes('duocthien')) {
        if (typeof duocThienData === 'undefined') window.duocThienData = [];
        const newObj = {
            ten: objData.ten || query,
            nhom: objData.nhom || "Dược Thiện YHCT",
            cong_dung: objData.cong_dung || 'Bồi bổ cơ thể, hỗ trợ điều trị bệnh.',
            thanh_phan: Array.isArray(objData.thanh_phan) ? objData.thanh_phan : [{ vi: 'Thành phần chính', lieu: 'Vừa đủ' }],
            so_che: objData.so_che || 'Sơ chế nguyên liệu sạch sẽ.',
            cach_lam: Array.isArray(objData.cach_lam) ? objData.cach_lam : [objData.cach_lam || 'Nấu chín theo phương pháp cổ truyền.'],
            kieng_ky: objData.kieng_ky || 'Tham khảo ý kiến thầy thuốc trước khi dùng.',
            isAiGenerated: true
        };
        let idx = duocThienData.findIndex(t => (typeof removeAccents === 'function' ? removeAccents(t.ten) : t.ten) === (typeof removeAccents === 'function' ? removeAccents(query) : query));
        if (idx >= 0) duocThienData[idx] = { ...duocThienData[idx], ...newObj }; else duocThienData.unshift(newObj);

        let custom = JSON.parse(safeLocalStorageGet('custom_duocThienData', '[]'));
        let cIdx = custom.findIndex(t => (typeof removeAccents === 'function' ? removeAccents(t.ten) : t.ten) === (typeof removeAccents === 'function' ? removeAccents(query) : query));
        if (cIdx >= 0) custom[cIdx] = newObj; else custom.unshift(newObj);

        safeLocalStorageSet('custom_duocThienData', JSON.stringify(custom));
    }
}

async function chayLenhAi(btnElement, loaiLenh) {
    if (!btnElement) return;

    if (loaiLenh === 'hc') {
        const hcName = document.getElementById('hoi-chung')?.innerText?.trim();
        if (!hcName || hcName === '---' || hcName.includes('Không tìm thấy')) {
            alert('Vui lòng chọn hoặc tra cứu một hội chứng cụ thể trước khi phân tích AI.');
            return;
        }

        let descEl = document.getElementById('ai-hc-desc');
        if (!descEl) {
            descEl = document.createElement('div');
            descEl.id = 'ai-hc-desc';
            descEl.className = 'text-xs text-stone-300 pt-2 border-t border-stone-800/80 leading-relaxed mt-2';
            btnElement.closest('.bg-dark-box')?.appendChild(descEl);
        }

        descEl.classList.remove('hidden');
        descEl.innerHTML = `<i class="fa-solid fa-brain fa-spin text-amber-500 mr-1"></i> AI đang phân tích hội chứng...`;

        btnElement.disabled = true;
        btnElement.classList.add('opacity-50', 'pointer-events-none');

        try {
            const res = await fetch(getApiEndpoint(), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    prompt: `Phân tích cực kỳ ngắn gọn, súc tích hội chứng YHCT: ${hcName}. Tối đa 3 ý chính.`,
                    ...getAiParams('search', 300)
                })
            });
            const data = await res.json();
            descEl.innerHTML = formatAIMessage(data.reply || 'Không có phản hồi từ AI.');
        } catch (err) {
            descEl.innerHTML = `<div class="text-red-400 text-xs py-1">⚠️ Lỗi kết nối AI. Vui lòng thử lại.</div>`;
        } finally {
            btnElement.disabled = false;
            btnElement.classList.remove('opacity-50', 'pointer-events-none');
        }

    } else if (loaiLenh === 'bt') {
        const btName = document.getElementById('bai-thuoc')?.innerText?.trim();
        if (!btName || btName === '---' || btName === 'Đối chứng nghiệm phương') {
            alert('Vui lòng chọn hoặc tra cứu một bài thuốc cụ thể trước khi phân tích AI.');
            return;
        }

        let descEl = document.getElementById('ai-bt-desc');
        if (!descEl) {
            descEl = document.createElement('div');
            descEl.id = 'ai-bt-desc';
            descEl.className = 'text-xs text-stone-300 pt-2 border-t border-stone-800/80 leading-relaxed mt-2';
            btnElement.closest('.bg-dark-box')?.appendChild(descEl);
        }

        descEl.classList.remove('hidden');
        descEl.innerHTML = `<i class="fa-solid fa-brain fa-spin text-amber-500 mr-1"></i> AI đang phân tích bài thuốc...`;

        btnElement.disabled = true;
        btnElement.classList.add('opacity-50', 'pointer-events-none');

        try {
            const res = await fetch(getApiEndpoint(), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    prompt: `Phân tích cực kỳ ngắn gọn, súc tích bài thuốc cổ phương: ${btName}. Tối đa 3 ý chính.`,
                    ...getAiParams('search', 300)
                })
            });
            const data = await res.json();
            descEl.innerHTML = formatAIMessage(data.reply || 'Không có phản hồi từ AI.');
        } catch (err) {
            descEl.innerHTML = `<div class="text-red-400 text-xs py-1">⚠️ Lỗi kết nối AI. Vui lòng thử lại.</div>`;
        } finally {
            btnElement.disabled = false;
            btnElement.classList.remove('opacity-50', 'pointer-events-none');
        }
    }
}

function triggerAiSearch(tab) {
    if (tab === 'luantri') {
        const input = document.getElementById('search-input');
        const query = input ? input.value.trim() : '';
        if (!query) { alert('Vui lòng nhập từ khóa hội chứng hoặc triệu chứng trước khi tìm với AI.'); input?.focus(); return; }
        fetchAIBackupResult(query, 'Biện chứng Luận Trị YHCT', document.getElementById('pdf-area'));
    } else if (tab === 'duoclieu') {
        const input = document.getElementById('searchDuocLieu');
        const query = input ? input.value.trim() : '';
        if (!query) { alert('Vui lòng nhập tên dược liệu trước khi tìm với AI.'); input?.focus(); return; }
        fetchAIBackupResult(query, 'Dược Liệu YHCT', document.getElementById('gridDuocLieu'));
    } else if (tab === 'huyetvi') {
        const input = document.getElementById('searchHuyetVi');
        const query = input ? input.value.trim() : '';
        if (!query) { alert('Vui lòng nhập tên huyệt vị trước khi tìm với AI.'); input?.focus(); return; }
        fetchAIBackupResult(query, 'Huyệt Vị YHCT', document.getElementById('gridHuyetVi'));
    } else if (tab === 'tra') {
        const input = document.getElementById('searchTra');
        const query = input ? input.value.trim() : '';
        if (!query) { alert('Vui lòng nhập tên bài trà trước khi tìm với AI.'); input?.focus(); return; }
        fetchAIBackupResult(query, 'Trà Dược YHCT', document.getElementById('gridTra'));
    } else if (tab === 'duocthien') {
        const input = document.getElementById('searchDuocThien');
        const query = input ? input.value.trim() : '';
        if (!query) { alert('Vui lòng nhập tên món ăn bài thuốc trước khi tìm với AI.'); input?.focus(); return; }
        fetchAIBackupResult(query, 'Dược Thiện YHCT', document.getElementById('gridDuocThien'));
    }
}

// ==========================================================================
// THỰC ĐƠN TUẦN AI ("TUẦN NAY ĂN GÌ")
// ==========================================================================
async function chayAIthucDonTuanModal() {
    const params = getAiParams('assistant', 1200);
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
    
    BẮT BUỘC trả về đúng định dạng JSON thuần túy (không kèm markdown ngoài JSON) với cấu trúc chính xác:
    {"tieu_de": "...", "phan_tich_khu_vuc": "...", "cac_ngay": [{"thu": "Thứ Hai", "sang": {"mon": "...", "cong_dung": "..."}, "trua": {"mon": "...", "cong_dung": "..."}, "toi": {"mon": "...", "cong_dung": "..."}}], "luu_y_chung": "..."}`;

    try {
        const res = await fetch(getApiEndpoint(), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: prompt, ...params })
        });
        const data = await res.json();

        if (res.ok && data.reply) {
            let parsedObj = parseJsonFromAI(data.reply);
            if (!parsedObj) {
                // Cố gắng quét trích xuất JSON thủ công nếu AI trả về bọc thêm text hoặc lỗi nhẹ
                const match = data.reply.match(/\{[\s\S]*\}/);
                if (match) {
                    try { parsedObj = JSON.parse(match[0]); } catch (e) {}
                }
            }

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

function renderThucDonTuanModalUI(rawObj) {
    const resultArea = document.getElementById('tna-result-area');
    if (!resultArea) return;

    // Chuẩn hóa linh hoạt các key để phòng trường hợp AI sinh ra tên khác nhau
    const data = {
        tieu_de: rawObj.tieu_de || rawObj.tieude || rawObj.title || 'Thực Đơn Dược Thiện Lý Tưởng Tuần Nay',
        phan_tich_khu_vuc: rawObj.phan_tich_khu_vuc || rawObj.phantichkhuvuc || rawObj.phanTichKhuVuc || '',
        cac_ngay: rawObj.cac_ngay || rawObj.cacngay || rawObj.days || [],
        luu_y_chung: rawObj.luu_y_chung || rawObj.luuychung || rawObj.note || ''
    };

    let html = `
        <div class="bg-stone-950 p-4 rounded-xl border border-amber-500/40 space-y-3">
            <div class="border-b border-stone-800 pb-2">
                <h4 class="font-bold text-amber-400 text-sm uppercase flex items-center gap-1.5">
                    <i class="fa-solid fa-utensils text-amber-500"></i> ${escapeHTML(data.tieu_de)}
                </h4>
                <p class="text-[11px] text-stone-300 mt-1 leading-relaxed bg-stone-900 p-2.5 rounded border border-stone-800">
                    <strong class="text-amber-400"><i class="fa-solid fa-cloud-sun"></i> Khí hậu & Mùa:</strong> ${escapeHTML(data.phan_tich_khu_vuc)}
                </p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[50vh] overflow-y-auto pr-1">`;

    if (Array.isArray(data.cac_ngay)) {
        data.cac_ngay.forEach(ngay => {
            const thu = ngay.thu || ngay.day || 'Ngày';
            const sang = ngay.sang || ngay.breakfast || { mon: '', cong_dung: '' };
            const trua = ngay.trua || ngay.lunch || { mon: '', cong_dung: '' };
            const toi = ngay.toi || ngay.dinner || { mon: '', cong_dung: '' };

            html += `
                <div class="bg-stone-900 p-3 rounded-lg border border-stone-800 space-y-1.5 text-xs">
                    <div class="font-bold text-emerald-400 border-b border-stone-800 pb-1 flex items-center gap-1">
                        <i class="fa-solid fa-calendar-day text-amber-500 text-[10px]"></i> ${escapeHTML(thu)}
                    </div>
                    <div class="space-y-1 text-[11px] text-stone-300">
                        <div><strong>☀️ Sáng:</strong> ${escapeHTML(sang.mon || sang.ten || '')} <span class="text-stone-500 text-[10px]">(${escapeHTML(sang.cong_dung || sang.tac_dung || '')})</span></div>
                        <div><strong>🍛 Trưa:</strong> ${escapeHTML(trua.mon || trua.ten || '')} <span class="text-stone-500 text-[10px]">(${escapeHTML(trua.cong_dung || trua.tac_dung || '')})</span></div>
                        <div><strong>🌙 Tối:</strong> ${escapeHTML(toi.mon || toi.ten || '')} <span class="text-stone-500 text-[10px]">(${escapeHTML(toi.cong_dung || toi.tac_dung || '')})</span></div>
                    </div>
                </div>`;
        });
    }

    html += `</div>
            ${data.luu_y_chung ? `
                <div class="bg-amber-950/40 border-l-4 border-amber-500 p-2.5 rounded-r text-amber-200 text-[11px] leading-relaxed">
                    <strong class="text-amber-400 uppercase tracking-wider text-[10px] block mb-0.5"><i class="fa-solid fa-triangle-exclamation"></i> Lưu ý phối hợp & chế biến:</strong>
                    ${escapeHTML(data.luu_y_chung)}
                </div>` : ''}
        </div>`;
    resultArea.innerHTML = html;
}

// ==========================================================================
// CÁC HÀM AI MODULE KHÁC
// ==========================================================================

async function aiDanhGiaTongTheBaiThuoc() {
    const contentEl = document.getElementById('ai-tong-the-content');
    if (!contentEl || typeof currentFormulaHerbs === 'undefined' || currentFormulaHerbs.length === 0) return;

    contentEl.innerHTML = `<div class="text-amber-400 italic flex items-center gap-1.5 py-2"><i class="fa-solid fa-brain fa-spin"></i> Chuyên gia AI đang phân tích Quân Thần Tá Sứ và tổng thể bài thuốc...</div>`;

    try {
        const prompt = `Bạn là một chuyên gia Y học cổ truyền (YHCT). Hãy đánh giá tổng thể bài thuốc tự do gồm các vị thuốc sau: ${currentFormulaHerbs.join(', ')}. 
        Yêu cầu phân tích ngắn gọn (<200 từ, tiếng Việt, không dùng chữ Hán):
        1. Phân định Quân - Thần - Tá - Sứ.
        2. Tổng hợp chủ trị lâm sàng chính.
        3. Mức độ phối ngũ và lưu ý.`;

        const res = await fetch(getApiEndpoint(), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: prompt, ...getAiParams('phoingu_danhgia', 400) })
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

async function hoiAIveSach(e) {
    if (e && e.preventDefault) e.preventDefault();

    const params = getAiParams('sach_ai', 400);
    const chatBox = document.getElementById('sach-ai-chat-box') || document.getElementById('sach-chat-box');
    const inputEl = document.getElementById('sach-ai-input');
    
    if (!chatBox) return;

    if (!params.allowed) {
        chatBox.innerHTML += `<div class="bg-amber-950/40 p-2.5 rounded border border-amber-800 text-amber-300 text-xs"><i class="fa-solid fa-lock mr-1.5"></i> Tính năng Trích xuất Sách AI yêu cầu tài khoản từ cấp <strong>VIP</strong> trở lên.</div>`;
        return;
    }

    if (!inputEl || typeof selectedBookForAI === 'undefined' || !selectedBookForAI) return;

    const query = inputEl.value.trim();
    if (!query) return;

    chatBox.innerHTML += `
        <div class="bg-amber-950/40 p-2.5 rounded border border-amber-900/50 text-amber-200 text-right font-medium text-xs">
            <span class="font-bold text-amber-400">Bạn:</span> ${escapeHTML(query)}
        </div>`;
    inputEl.value = '';

    const loadingId = 'sach-loading-' + Date.now();
    chatBox.innerHTML += `
        <div id="${loadingId}" class="bg-stone-900 p-2.5 rounded border border-stone-800 text-stone-400 flex items-center gap-2 text-xs">
            <i class="fa-solid fa-brain text-amber-500 animate-spin"></i>
            <span>Đang tra cứu nội dung trong sách "${escapeHTML(selectedBookForAI)}"...</span>
        </div>`;
    chatBox.scrollTop = chatBox.scrollHeight;

    try {
        const prompt = `Dựa trên nội dung chuẩn của cuốn sách y học cổ truyền "${selectedBookForAI}", hãy giải đáp chi tiết câu hỏi sau: "${query}". Trả lời súc tích, chuyên môn cao bằng tiếng Việt.`;
        const res = await fetch(getApiEndpoint(), {
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
                        <i class="fa-solid fa-robot"></i> Trích xuất từ "${escapeHTML(selectedBookForAI)}"
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

async function fetchAIQuizQuestions(category, count) {
    const params = getAiParams('quiz', 800);
    if (!params.allowed) return [];

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
            body: JSON.stringify({ prompt, ...params })
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

async function guiPhanTichVongChan() {
    const params = getAiParams('vongchan', 400);
    const outputEl = document.getElementById('vong-chan-output');
    const chatBox = document.getElementById('ai-chat-box');

    if (!params.allowed) {
        const errHtml = `<div class="bg-amber-950/40 p-3 rounded-lg border border-amber-800 text-amber-300 text-xs text-center"><i class="fa-solid fa-lock mr-1.5"></i> Tính năng Phân Tích Vọng Chẩn bằng AI yêu cầu tài khoản từ cấp <strong>VIP</strong> trở lên.</div>`;
        if (outputEl) outputEl.innerHTML = errHtml;
        if (chatBox) chatBox.innerHTML = errHtml;
        return;
    }

    if (typeof vongChanImageBase64 === 'undefined' || !vongChanImageBase64) {
        alert("Vui lòng chụp ảnh hoặc tải ảnh lên trước khi thực hiện phân tích!");
        return;
    }

    const typeSelect = document.getElementById('vong-chan-type')?.value;
    const noteText = document.getElementById('van-hoi-note')?.value.trim() || '';
    
    const btnSubmit = document.getElementById('btn-phan-tich-vong-chan');
    const resultBox = document.getElementById('vong-chan-result');
    const btnSave = document.getElementById('btn-save-vongchan');

    if (btnSave) btnSave.classList.add('hidden');
    if (typeof currentVongChanRecord !== 'undefined') currentVongChanRecord = null;

    let typeText = "Thiệt chẩn (Lưỡi)";
    if (typeSelect === "dien_chan") typeText = "Diện chẩn (Sắc mặt, thần thái)";
    if (typeSelect === "da_da") typeText = "Sắc da / Thương tổn ngoài da";

    const promptText = `Chuyên gia YHCT: Phân tích hình ảnh theo phương pháp "${typeText}".
Triệu chứng: "${noteText || 'Không'}".

Yêu cầu súc tích (<200 từ, tiếng Việt, không dùng chữ Hán):
1. Hình thái đặc trưng
2. Biện chứng YHCT (Căn bệnh, Bát cương, Tạng phủ)
3. Định hướng điều trị & Cổ phương`;

    if (btnSubmit) {
        btnSubmit.disabled = true;
        btnSubmit.classList.add('opacity-50', 'pointer-events-none');
        btnSubmit.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> AI đang soi hình ảnh...`;
    }
    
    if (resultBox) resultBox.classList.remove('hidden');
    if (outputEl) outputEl.innerHTML = `<div class="text-amber-400 italic flex items-center gap-1.5"><i class="fa-solid fa-brain fa-spin"></i> AI đang phân tích hình ảnh...</div>`;

    try {
        const res = await fetch(getApiEndpoint(), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                prompt: promptText, 
                image: vongChanImageBase64,
                ...params
            })
        });

        const data = await res.json();
        if (res.ok && data.reply) {
            if (chatBox) chatBox.innerHTML = formatAIMessage(data.reply);          
            if (outputEl) outputEl.innerHTML = formatAIMessage(data.reply);

            if (typeof currentVongChanRecord !== 'undefined') {
                currentVongChanRecord = {
                    id: Date.now(),
                    date: new Date().toLocaleString('vi-VN'),
                    type: "Vọng Chẩn (Hình Ảnh)",
                    noteVanSu: noteText || '',
                    mach: '',
                    xucChan: '',
                    note: `Vấn: ${noteText || 'Không'}`,
                    image: vongChanImageBase64 || '',
                    reply: data.reply
                };
            }
            if (btnSave) btnSave.classList.remove('hidden');
        } else {
            if (outputEl) outputEl.innerHTML = `<div class="text-red-400 font-medium p-2 bg-red-950/40 border border-red-800 rounded">⚠️ ${escapeHTML(data.error || 'AI không nhận diện được ảnh.')}</div>`;
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
    const params = getAiParams('vongchan', 600);
    const chatBox = document.getElementById('ai-chat-box');

    if (!params.allowed) {
        if (chatBox) chatBox.innerHTML = `<div class="bg-amber-950/40 p-3 rounded-lg border border-amber-800 text-amber-300 text-xs text-center"><i class="fa-solid fa-lock mr-1.5"></i> Tính năng Hội Chẩn Tứ Chẩn AI yêu cầu tài khoản từ cấp <strong>VIP</strong> trở lên.</div>`;
        return;
    }

    const noteVanNghe = document.getElementById('van-nghe-note')?.value.trim() || '';
    const noteVanHoi = document.getElementById('van-hoi-note')?.value.trim() || '';
    const mach = document.getElementById('thiet-chan-mach')?.value || '';
    const xucChan = document.getElementById('thiet-chan-xuc')?.value.trim() || '';
    
    const btnSubmit = document.getElementById('btn-phan-tich-tu-chan');
    const resultBox = document.getElementById('vong-chan-result');

    const promptText = `Bạn là chuyên gia Y học cổ truyền. Hãy phân tích Tứ Chẩn dựa trên dữ liệu bệnh nhân sau:
- Văn chẩn (Thanh âm, hơi thở, mùi cơ thể): ${noteVanNghe || 'Không có'}
- Vấn chẩn (Triệu chứng bệnh nhân khai báo): ${noteVanHoi || 'Không có'}
- Mạch tượng: ${mach || 'Chưa bắt mạch'}
- Xúc chẩn / Biểu hiện khác: ${xucChan || 'Không'}

Yêu cầu: BẮT BUỘC trả về DUY NHẤT một đối tượng JSON thuần túy (không kèm Markdown) theo đúng cấu trúc:
{
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

    try {
        const res = await fetch(getApiEndpoint(), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                prompt: promptText, 
                image: (typeof vongChanImageBase64 !== 'undefined' ? vongChanImageBase64 : undefined),
                ...params
            })
        });

        const data = await res.json();
        if (res.ok && data.reply) {
            // Gán an toàn vào window object để tránh lỗi ReferenceError ở Strict Mode
            window.currentDiagnosticContext = `HỒ SƠ BỆNH NHÂN HIỆN TẠI:
- Văn chẩn: ${noteVanNghe || 'Không'}
- Vấn chẩn: ${noteVanHoi || 'Không'} | Mạch: ${mach || 'Chưa bắt mạch'}
- KẾT QUẢ AI: ${data.reply}`;

            if (chatBox) {
                chatBox.innerHTML = typeof renderTuChanCards === 'function' ? renderTuChanCards(data.reply) : data.reply;
            }

            window.currentVongChanRecord = {
                id: Date.now(),
                date: new Date().toLocaleString('vi-VN'),
                type: "Tứ Chẩn YHCT",
                noteVanNghe: noteVanNghe,
                noteVanHoi: noteVanHoi,
                mach: mach || '',
                xucChan: xucChan || '',
                reply: data.reply
            };

            const btnSave = document.getElementById('btn-save-vongchan');
            if (btnSave) btnSave.classList.remove('hidden');
        } else {
            if (chatBox) chatBox.innerHTML = `<div class="text-red-400 p-2 bg-red-950/40 rounded">⚠️ ${escapeHTML(data.error || 'Lỗi phân tích')}</div>`;
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

// ==========================================================================
// HÀM QUÉT & DỌN RÁC TOÀN BỘ LOCALSTORAGE (TẤT CẢ TÁC VỤ AI & CSDL)
// ==========================================================================
function donDepDuLieuRacLocalStorage() {
    try {
        const isInvalid = (item, keyName = 'ten') => {
            if (!item || typeof item !== 'object') return true;
            const val = String(item[keyName] || item.hc || '').trim().toLowerCase();
            return !val || val === '---' || val.includes('undefined') || val.includes('null');
        };

        // 1. Quét Dược Liệu[span_11](start_span)[span_11](end_span)
        try {
            let customDL = JSON.parse(safeLocalStorageGet('custom_duocLieuData', '[]'));
            if (Array.isArray(customDL)) {
                safeLocalStorageSet('custom_duocLieuData', JSON.stringify(customDL.filter(i => !isInvalid(i, 'ten'))));
            }
        } catch (err) { safeLocalStorageRemove('custom_duocLieuData'); }

        // 2. Quét Huyệt Vị[span_12](start_span)[span_12](end_span)
        try {
            let customHV = JSON.parse(safeLocalStorageGet('custom_huyetViData', '[]'));
            if (Array.isArray(customHV)) {
                safeLocalStorageSet('custom_huyetViData', JSON.stringify(customHV.filter(i => !isInvalid(i, 'ten'))));
            }
        } catch (err) { safeLocalStorageRemove('custom_huyetViData'); }

        // 3. Quét Trà Dược[span_13](start_span)[span_13](end_span)
        try {
            let customTra = JSON.parse(safeLocalStorageGet('custom_traData', '[]'));
            if (Array.isArray(customTra)) {
                safeLocalStorageSet('custom_traData', JSON.stringify(customTra.filter(i => !isInvalid(i, 'ten'))));
            }
        } catch (err) { safeLocalStorageRemove('custom_traData'); }

        // 4. Quét Dược Thiện[span_14](start_span)[span_14](end_span)
        try {
            let customDT = JSON.parse(safeLocalStorageGet('custom_duocThienData', '[]'));
            if (Array.isArray(customDT)) {
                safeLocalStorageSet('custom_duocThienData', JSON.stringify(customDT.filter(i => !isInvalid(i, 'ten'))));
            }
        } catch (err) { safeLocalStorageRemove('custom_duocThienData'); }

        // 5. Quét CSDL Luận Trị[span_15](start_span)[span_15](end_span)
        try {
            let customDb = JSON.parse(safeLocalStorageGet('custom_database', '{}'));
            if (customDb && typeof customDb === 'object' && !Array.isArray(customDb)) {
                let hasChanged = false;
                Object.keys(customDb).forEach(key => {
                    if (isInvalid(customDb[key], 'hc') || key.includes('undefined') || key.includes('null')) {
                        delete customDb[key];
                        hasChanged = true;
                    }
                });
                if (hasChanged) safeLocalStorageSet('custom_database', JSON.stringify(customDb));
            } else {
                safeLocalStorageSet('custom_database', '{}');
            }
        } catch (err) { safeLocalStorageSet('custom_database', '{}'); }

        // 6. Quét Lịch Sử Vọng Chẩn[span_16](start_span)[span_16](end_span)
        try {
            let historyVC = JSON.parse(safeLocalStorageGet('vongchan_history', '[]'));
            if (Array.isArray(historyVC)) {
                const cleanVC = historyVC.filter(item => item && item.id && item.reply && !item.reply.includes('undefined'));
                safeLocalStorageSet('vongchan_history', JSON.stringify(cleanVC));
            }
        } catch (err) { safeLocalStorageSet('vongchan_history', '[]'); }

    } catch (e) {
        console.warn("[Garbage Collector] Lỗi khi làm sạch LocalStorage:", e?.message || String(e));
    }
}

// Tự động kích hoạt khi ứng dụng khởi chạy
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', donDepDuLieuRacLocalStorage);
} else {
    donDepDuLieuRacLocalStorage();
}
