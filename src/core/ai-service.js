// ==========================================================================
// AI-SERVICE.JS - TỔNG HỢP TOÀN BỘ XỬ LÝ DỊCH VỤ AI, TRA CỨU & HỘI CHẨN
// ==========================================================================

// Hàm hỗ trợ tự động lấy Header xác thực từ Supabase Session
async function getAuthHeaders() {
    const headers = { 'Content-Type': 'application/json' };
    try {
        if (typeof supabase !== 'undefined') {
            const { data: { session } } = await supabase.auth.getSession();
            if (session?.access_token) {
                headers['Authorization'] = `Bearer ${session.access_token}`;
            }
        }
    } catch (e) {
        console.warn("Chưa khởi tạo session:", e);
    }
    return headers;
}

// Hàm điều tiết source, max_tokens và chốt chặn quyền hạn tại chỗ
function getAiParams(source) {
    const role = (typeof getCurrentUserRole === 'function' ? getCurrentUserRole() : 'GUEST').toUpperCase();
    
    const vipOnlySources = ['vongchan', 'sach_ai', 'thucdon', 'quiz'];
    const isForbidden = vipOnlySources.includes(source) && (role === 'GUEST' || role === 'FREE');
    
    // CHỐT CHẶN TUYỆT ĐỐI TẠI ĐÂY: Mở Modal & ngắt luồng bằng exception
    if (isForbidden) {
        console.warn(`[AI Access Denied] Tài khoản ${role} bị giới hạn tính năng ${source}`);
        document.getElementById('modal-role-lock')?.classList.remove('hidden');
        throw new Error(`[PERMISSION_DENIED] Cần cấp VIP để sử dụng tính năng ${source}`);
    }

    const baseTokensMap = {
        'search': 700,
        'backup': 900,
        'luantrihc': 400,
        'luantribt': 400,
        'phoingu_danhgia': 600,
        'sach_ai': 800,
        'vongchan': 700,
        'quiz': 800,
        'thucdon': 1400
    };

    const multipliers = { 'GUEST': 1, 'FREE': 1.1, 'VIP': 1.3, 'SVIP': 1.6 };

    return {
        allowed: true,
        source: source,
        max_tokens: Math.round((baseTokensMap[source] || 400) * (multipliers[role] || 1)),
        role: role
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

function extractFieldsFromTruncatedJson(str) {
    if (!str) return null;
    const result = {};
    const keys = ['ten', 'nhom', 'cong_dung', 'cach_dung', 'kieng_ky', 'luu_y', 'pdt', 'hc', 'bt', 'so_che', 'chu_tri', 'vi_tri', 'kinh'];
    
    keys.forEach(key => {
        const reg = new RegExp(`"${key}"\\s*:\\s*"([^"]*)`, 'i');
        const match = str.match(reg);
        if (match && match[1]) {
            result[key] = match[1].trim();
        }
    });

    return Object.keys(result).length > 0 ? result : null;
}

function cleanJsonArtifacts(val) {
    if (!val || typeof val !== 'string') return val || '';
    if (val.includes('{"') || val.includes('":') || val.includes('}') || val.includes('{')) {
        return val.replace(/\{[\s\S]*?\}/g, '')
                  .replace(/"[^"]+"\s*:\s*/g, '')
                  .replace(/[{}\[\]"]/g, '')
                  .trim();
    }
    return val;
}

function parseJsonFromAI(replyText) {
    if (!replyText) return null;
    try {
        let cleaned = String(replyText).replace(/```json\s*/gi, '').replace(/```\s*/g, '').trim();
        try { return JSON.parse(cleaned); } catch (e) {}

        const arrayMatch = cleaned.match(/\[[\s\S]*\]/);
        if (arrayMatch) { try { return JSON.parse(arrayMatch[0]); } catch (e) {} }

        const objectMatch = cleaned.match(/\{[\s\S]*\}/);
        if (objectMatch) { try { return JSON.parse(objectMatch[0]); } catch (e) {} }

        const partial = extractFieldsFromTruncatedJson(cleaned);
        if (partial) return partial;

        return null;
    } catch (e) {
        console.warn("AI không trả về JSON hợp lệ:", e);
        return null;
    }
}

function formatAIMessage(text) {
    if (!text) return '';

    let data = parseJsonFromAI(text);
    if (data && (data.cac_muc || data.tieu_de || data.hc || data.ten)) {
        let html = `<div class="space-y-3 text-xs text-stone-300">`;
        let mainTitle = cleanTitleText(data.tieu_de || data.hc || data.ten);
        
        if (mainTitle) {
            html += `<div class="text-amber-400 font-bold text-sm uppercase tracking-wider border-b border-stone-800 pb-1.5 mb-2.5 flex items-center gap-1.5">
                        <i class="fa-solid fa-seedling text-amber-500 text-xs"></i> ${escapeHTML(mainTitle)}
                     </div>`;
        }

        if (data.pdt || data.nhom) {
            html += `<div class="bg-stone-900/90 px-2.5 py-1.5 rounded border border-stone-800 text-emerald-400 font-semibold mb-2 flex items-center gap-1.5">
                        <i class="fa-solid fa-prescription-bottle-medical text-xs"></i> ${escapeHTML(cleanTitleText(data.pdt || data.nhom))}
                     </div>`;
        }

        let sections = data.cac_muc || [];
        if (sections.length === 0) {
            if (data.nguon_goc) sections.push({ tieu_de_muc: "Nguồn gốc & Xuất xứ", noi_dung: Array.isArray(data.nguon_goc) ? data.nguon_goc : [data.nguon_goc] });
            if (data.co_che) sections.push({ tieu_de_muc: "Cơ chế tác động", noi_dung: Array.isArray(data.co_che) ? data.co_che : [data.co_che] });
            if (data.bieu_hien) sections.push({ tieu_de_muc: "Biểu hiện lâm sàng", noi_dung: Array.isArray(data.bieu_hien) ? data.bieu_hien : [data.bieu_hien] });
            if (data.cong_dung) sections.push({ tieu_de_muc: "Công năng chủ trị", noi_dung: Array.isArray(data.cong_dung) ? data.cong_dung : [data.cong_dung] });
        }

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

        let warningText = data.luu_y || data.kieng_ky;
        if (warningText) {
            html += `<div class="bg-amber-950/60 border-l-4 border-amber-500 p-3 mt-3 rounded-r-lg text-amber-200 leading-relaxed shadow-md">
                        <div class="font-bold text-amber-400 mb-1 uppercase tracking-wider text-[10px] flex items-center gap-1.5">
                            <i class="fa-solid fa-triangle-exclamation"></i> Lưu ý lâm sàng & Kiêng kỵ:
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
        const headers = await getAuthHeaders();
        const res = await fetch(getApiEndpoint(), {
            method: 'POST',
            headers,
            body: JSON.stringify({ prompt: fullPrompt, ...getAiParams('search') })
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
        if (!err.message.includes('[PERMISSION_DENIED]')) {
            chatBox.innerHTML += `<div class="bg-red-950/40 p-3 rounded-lg border border-red-800 text-red-300 text-xs"><i class="fa-solid fa-plug-circle-xmark mr-1"></i> ${escapeHTML(err.message || 'Lỗi kết nối máy chủ AI.')}</div>`;
        }
    } finally {
        if (btnSend) {
            btnSend.disabled = false;
            btnSend.classList.remove('opacity-50', 'pointer-events-none');
        }
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

function validateAndCleanAIResult(obj, tabName, fallbackQuery = '') {
    if (!obj || typeof obj !== 'object') return null;

    const cleanStr = (str, def = '') => {
        if (!str) return def;
        let s = cleanJsonArtifacts(String(str)).replace(/^[\s\)\],":}]+/, '').trim();
        return s || def;
    };

    if (tabName.includes('Luận Trị') || tabName.includes('luantri')) {
        return {
            hc: cleanStr(obj.hc, fallbackQuery.toUpperCase() || 'HỘI CHỨNG CHƯA RÕ'),
            phanloai: Array.isArray(obj.phanloai) && obj.phanloai.length > 0 ? obj.phanloai.map(v => cleanStr(v)) : ['Tạng Phế', 'Bình', 'Thực', '---'],
            pdt: cleanStr(obj.pdt, 'Theo chỉ định chuyên môn'),
            tc: Array.isArray(obj.tc) && obj.tc.length > 0 ? obj.tc.map(v => cleanStr(v)) : [cleanStr(obj.tc, 'Đang cập nhật triệu chứng')],
            bt: cleanStr(obj.bt, 'Đối chứng nghiệm phương'),
            tpbt: Array.isArray(obj.tpbt) ? obj.tpbt.map(v => cleanStr(v)) : []
        };
    } else if (tabName.includes('Dược Liệu') || tabName.includes('duoclieu')) {
        return {
            ten: cleanStr(obj.ten, fallbackQuery || 'Dược liệu chưa rõ tên'),
            nhom: cleanStr(obj.nhom, 'Dược liệu YHCT'),
            ten_khoa_hoc: cleanStr(obj.ten_khoa_hoc, ''),
            pinyin: cleanStr(obj.pinyin, ''),
            cong_dung: cleanStr(obj.cong_dung, 'Bồi bổ cơ thể, hỗ trợ điều trị bệnh.'),
            kieng_ky: cleanStr(obj.kieng_ky || obj.luu_y, 'Tuân thủ liều lượng tiêu chuẩn.')
        };
    } else if (tabName.includes('Huyệt Vị') || tabName.includes('huyetvi')) {
        return {
            ten: cleanStr(obj.ten, fallbackQuery || 'Huyệt chưa rõ tên'),
            kinh: cleanStr(obj.kinh, 'Kinh mạch YHCT'),
            ma_who: cleanStr(obj.ma_who, ''),
            chu_tri: cleanStr(obj.chu_tri, 'Điều hòa khí huyết, thông kinh hoạt lạc.'),
            vi_tri: cleanStr(obj.vi_tri || obj.dinh_vi, 'Đang cập nhật mô tả giải phẫu.')
        };
    } else if (tabName.includes('Trà Dược') || tabName.includes('Tra') || tabName.includes('tra')) {
        let tp = Array.isArray(obj.thanh_phan) ? obj.thanh_phan.map(v => cleanStr(v)).filter(Boolean) : [];
        if (tp.length === 0 && fallbackQuery) tp = [fallbackQuery];

        return {
            ten: cleanStr(obj.ten, fallbackQuery || 'Bài trà chưa rõ tên'),
            nhom: cleanStr(obj.nhom, 'Trà Dược YHCT'),
            cong_dung: cleanStr(obj.cong_dung, 'Thanh nhiệt, giải độc, điều hòa cơ thể.'),
            cach_dung: cleanStr(obj.cach_dung, 'Hãm với nước sôi 85-90°C trong 10-15 phút.'),
            kieng_ky: cleanStr(obj.kieng_ky, 'Phụ nữ có thai hoặc tỳ vị hư hàn nên tham khảo ý kiến chuyên gia.'),
            thanh_phan: tp
        };
    } else if (tabName.includes('Dược Thiện') || tabName.includes('DuocThien') || tabName.includes('duocthien')) {
        let formattedThanhPhan = [{ vi: fallbackQuery || 'Thành phần chính', lieu: 'Vừa đủ' }];
        if (Array.isArray(obj.thanh_phan) && obj.thanh_phan.length > 0) {
            formattedThanhPhan = obj.thanh_phan.map(item => {
                if (typeof item === 'object' && item !== null) {
                    return { vi: cleanStr(item.vi, 'Vị thuốc'), lieu: cleanStr(item.lieu, 'Vừa đủ') };
                }
                return { vi: cleanStr(item, 'Vị thuốc'), lieu: 'Vừa đủ' };
            });
        }
        return {
            ten: cleanStr(obj.ten, fallbackQuery || 'Món dược thiện chưa rõ tên'),
            nhom: cleanStr(obj.nhom, 'Dược Thiện'),
            cong_dung: cleanStr(obj.cong_dung, 'Bồi bổ cơ thể, hỗ trợ điều trị bệnh.'),
            thanh_phan: formattedThanhPhan,
            so_che: cleanStr(obj.so_che, 'Sơ chế nguyên liệu sạch sẽ.'),
            cach_lam: Array.isArray(obj.cach_lam) && obj.cach_lam.length > 0 ? obj.cach_lam.map(v => cleanStr(v)) : [cleanStr(obj.cach_lam, 'Nấu chín theo phương pháp cổ truyền.')],
            kieng_ky: cleanStr(obj.kieng_ky, 'Tham khảo ý kiến thầy thuốc trước khi dùng.')
        };
    } else if (tabName.includes('Tứ Chẩn') || tabName.includes('tu_chan') || tabName.includes('vongchan')) {
        return {
            bat_cuong: cleanStr(obj.bat_cuong, 'Chưa xác định Bát cương'),
            tang_phu: cleanStr(obj.tang_phu, 'Chưa xác định Tạng phủ'),
            hoi_chung: cleanStr(obj.hoi_chung, 'Chưa rõ hội chứng'),
            bien_chung: cleanStr(obj.bien_chung, 'Đang cập nhật biện chứng luận trị.'),
            phap_tri: cleanStr(obj.phap_tri, 'Đang cập nhật pháp trị.'),
            co_phuong: cleanStr(obj.co_phuong, '---'),
            vi_thuoc: Array.isArray(obj.vi_thuoc) ? obj.vi_thuoc.map(v => ({
                ten: cleanStr(v.ten, 'Vị thuốc'),
                lieu: cleanStr(v.lieu, 'Vừa đủ'),
                vai_tro: cleanStr(v.vai_tro, 'Thuốc')
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
            <p class="text-xs text-stone-500">Từ khóa: "${escapeHTML(query)}"</p>
        </div>
    `;
    try {
        const prompt = `Bạn là CSDL YHCT. Cung cấp thông tin siêu ngắn gọn về "${query}" thuộc danh mục ${tabName}. 
BẮT BUỘC trả về DUY NHẤT 1 JSON thuần túy (không markdown, không thêm bất kỳ văn bản nào khác):
- Luận Trị: {"hc":"${query}","pdt":"...","tc":["..."],"bt":"...","tpbt":["..."]}
- Dược Liệu: {"ten":"${query}","nhom":"Dược liệu YHCT","cong_dung":"...","kieng_ky":"..."}
- Trà Dược: {"ten":"${query}","nhom":"Trà Dược YHCT","cong_dung":"...","cach_dung":"...","kieng_ky":"...","thanh_phan":["${query}"]}
- Dược Thiện: {"ten":"${query}","nhom":"Dược Thiện","cong_dung":"...","thanh_phan":[{"vi":"${query}","lieu":"Vừa đủ"}],"so_che":"...","cach_lam":["..."],"kieng_ky":"..."}
- Huyệt Vị: {"ten":"${query}","kinh":"Kinh mạch YHCT","chu_tri":"...","vi_tri":"..."}`;

        const headers = await getAuthHeaders();
        const res = await fetch(getApiEndpoint(), {
            method: 'POST',
            headers,
            body: JSON.stringify({ prompt: prompt, ...getAiParams('backup') })
        });
        const data = await res.json();
    
        if (res.ok && data.reply) {
            let parsedObj = parseJsonFromAI(data.reply);
            if (parsedObj) {
                parsedObj = validateAndCleanAIResult(parsedObj, tabName, query);
            } else {
                let cleanReply = cleanJsonArtifacts(String(data.reply));
                parsedObj = { 
                    ten: query, 
                    nhom: tabName,
                    cong_dung: cleanReply || "Bồi bổ sức khỏe, điều hòa cơ thể.",
                    cach_dung: "Hãm với nước sôi 85-90°C trong 10-15 phút.",
                    thanh_phan: [query]
                };
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
        if (!err.message.includes('[PERMISSION_DENIED]')) {
            containerEl.innerHTML = `<div class="col-span-full text-center py-8 text-xs text-red-400">Lỗi kết nối AI.</div>`;
        }
    }
}

function luuKetQuaAiVaoDb(query, tabName, objData) {
    if (!query || !objData) return;
    const cleanKey = removeAccents(query).trim().replace(/\s+/g, '_');

    if (tabName.includes('Luận Trị')) {
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
        try { localStorage.setItem('custom_database', JSON.stringify(database)); } catch (e) {}
    } else if (tabName.includes('Dược Liệu')) {
        if (typeof duocLieuData === 'undefined') window.duocLieuData = [];
        const newObj = {
            ten: objData.ten || query,
            nhom: objData.nhom || "Dược liệu YHCT",
            ten_khoa_hoc: objData.ten_khoa_hoc || "",
            pinyin: objData.pinyin || "",
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
        
        if (typeof safeSetLocalStorage === 'function') safeSetLocalStorage('custom_duocLieuData', custom, 30);
        else localStorage.setItem('custom_duocLieuData', JSON.stringify(custom));
    } else if (tabName.includes('Huyệt Vị')) {
        if (typeof huyetViData === 'undefined') window.huyetViData = [];
        const newObj = {
            ten: objData.ten || query,
            kinh: objData.kinh || "Kinh mạch YHCT",
            ma_who: objData.ma_who || "",
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
        
        if (typeof safeSetLocalStorage === 'function') safeSetLocalStorage('custom_huyetViData', custom, 30);
        else localStorage.setItem('custom_huyetViData', JSON.stringify(custom));
    } else if (tabName.includes('Trà Dược') || tabName.includes('Tra')) {
        if (typeof traData === 'undefined') window.traData = [];
        const newObj = {
            ten: objData.ten || query,
            nhom: objData.nhom || "Trà Dược YHCT",
            cong_dung: (!objData.cong_dung || objData.cong_dung === "Đang cập nhật") ? "Thanh nhiệt, giải độc, mát gan; An thần, trị mất ngủ, giảm căng thẳng." : objData.cong_dung,
            kieng_ky: objData.kieng_ky || "Phụ nữ có thai hoặc người tỳ vị hư hàn nên tham khảo ý kiến chuyên gia.",
            cach_dung: objData.cach_dung || "Hãm với nước sôi 85-90°C trong 10-15 phút.",
            thanh_phan: Array.isArray(objData.thanh_phan) && objData.thanh_phan.length > 0 ? objData.thanh_phan : [query],
            isAiGenerated: true
        };
        let idx = traData.findIndex(t => removeAccents(t.ten) === removeAccents(query));
        if (idx >= 0) traData[idx] = { ...traData[idx], ...newObj };
        else traData.unshift(newObj);

        let custom = JSON.parse(localStorage.getItem('custom_traData') || '[]');
        let cIdx = custom.findIndex(t => removeAccents(t.ten) === removeAccents(query));
        if (cIdx >= 0) custom[cIdx] = newObj; else custom.unshift(newObj);
        
        if (typeof safeSetLocalStorage === 'function') safeSetLocalStorage('custom_traData', custom, 30);
        else localStorage.setItem('custom_traData', JSON.stringify(custom));
    } else if (tabName.includes('Dược Thiện') || tabName.includes('DuocThien')) {
        if (typeof duocThienData === 'undefined') window.duocThienData = [];

        let formattedThanhPhan = [{ vi: query, lieu: "Vừa đủ" }];
        if (Array.isArray(objData.thanh_phan) && objData.thanh_phan.length > 0) {
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

        let idx = duocThienData.findIndex(t => removeAccents(t.ten) === removeAccents(query));
        if (idx >= 0) duocThienData[idx] = { ...duocThienData[idx], ...newObj };
        else duocThienData.unshift(newObj);

        let custom = JSON.parse(localStorage.getItem('custom_duocThienData') || '[]');
        let cIdx = custom.findIndex(t => removeAccents(t.ten) === removeAccents(query));
        if (cIdx >= 0) custom[cIdx] = newObj; else custom.unshift(newObj);
        
        if (typeof safeSetLocalStorage === 'function') safeSetLocalStorage('custom_duocThienData', custom, 30);
        else localStorage.setItem('custom_duocThienData', JSON.stringify(custom));
    }
}

async function chayLenhAi(btnElement, loaiLenh) {
    if (!btnElement) return;

    btnElement.disabled = true;
    btnElement.classList.add('opacity-50', 'pointer-events-none');
    const originalHtml = btnElement.innerHTML;
    btnElement.innerHTML = `<i class="fa-solid fa-spinner fa-spin mr-1"></i> Đang xử lý...`;

    try {
        if (loaiLenh === 'hoiduc') {
            await triggerAiSearch('luantri');
        } else if (loaiLenh === 'baithuoc') {
            await sendAIWebMessage();
        } else if (loaiLenh === 'hc') {
            const query = document.getElementById('hoi-chung')?.innerText;
            if (query && query !== '---') {
                await fetchAIHcDesc(query);
            }
        } else if (loaiLenh === 'bt') {
            const query = document.getElementById('bai-thuoc')?.innerText;
            if (query && query !== '---') {
                await fetchAIBtDesc(query);
            }
        }
    } catch (err) {
        console.error("Lỗi thực thi lệnh AI:", err);
    } finally {
        btnElement.disabled = false;
        btnElement.classList.remove('opacity-50', 'pointer-events-none');
        btnElement.innerHTML = originalHtml;
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

// --- CÁC HÀM AI ĐÃ DI DỜI TỪ CÁC FILE KHÁC ---

// 1. Từ catalog.js (Thực đơn tuần AI)
async function chayAIthucDonTuanModal() {
    const params = getAiParams('thucdon'); // Tự bật Modal & Throw Exception nếu bị cấm
    const resultArea = document.getElementById('tna-result-area');
    if (!resultArea) return;

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
        const headers = await getAuthHeaders();
        const res = await fetch(getApiEndpoint(), {
            method: 'POST',
            headers,
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
            resultArea.innerHTML = `<div class="text-center py-6 text-xs text-red-400">${escapeHTML(data.error || 'AI không phản hồi dữ liệu thực đơn.')}</div>`;
        }
    } catch (err) {
        console.error("Lỗi tạo thực đơn tuần:", err);
        if (!err.message.includes('[PERMISSION_DENIED]')) {
            resultArea.innerHTML = `<div class="text-center py-6 text-xs text-red-400">Lỗi kết nối máy chủ AI.</div>`;
        }
    }
}

function renderThucDonTuanModalUI(data) {
    const resultArea = document.getElementById('tna-result-area');
    if (!resultArea) return;

    let html = `
        <div class="bg-stone-950 p-4 rounded-xl border border-amber-500/40 space-y-3">
            <div class="border-b border-stone-800 pb-2">
                <h4 class="font-bold text-amber-400 text-sm uppercase flex items-center gap-1.5">
                    <i class="fa-solid fa-utensils text-amber-500"></i> ${escapeHTML(data.tieu_de || 'Thực Đơn Dược Thiện Lý Tưởng Tuần Nay')}
                </h4>
                <p class="text-[11px] text-stone-300 mt-1 leading-relaxed bg-stone-900 p-2.5 rounded border border-stone-800">
                    <strong class="text-amber-400"><i class="fa-solid fa-cloud-sun"></i> Khí hậu & Mùa:</strong> ${escapeHTML(data.phan_tich_khu_vuc || '')}
                </p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[50vh] overflow-y-auto pr-1">`;

    if (Array.isArray(data.cac_ngay)) {
        data.cac_ngay.forEach(ngay => {
            html += `
                <div class="bg-stone-900 p-3 rounded-lg border border-stone-800 space-y-1.5 text-xs">
                    <div class="font-bold text-emerald-400 border-b border-stone-800 pb-1 flex items-center gap-1">
                        <i class="fa-solid fa-calendar-day text-amber-500 text-[10px]"></i> ${escapeHTML(ngay.thu)}
                    </div>
                    <div class="space-y-1 text-[11px] text-stone-300">
                        <div><strong>☀️ Sáng:</strong> ${escapeHTML(ngay.sang?.mon || '')} <span class="text-stone-500 text-[10px]">(${escapeHTML(ngay.sang?.cong_dung || '')})</span></div>
                        <div><strong>🍛 Trưa:</strong> ${escapeHTML(ngay.trua?.mon || '')} <span class="text-stone-500 text-[10px]">(${escapeHTML(ngay.trua?.cong_dung || '')})</span></div>
                        <div><strong>🌙 Tối:</strong> ${escapeHTML(ngay.toi?.mon || '')} <span class="text-stone-500 text-[10px]">(${escapeHTML(ngay.toi?.cong_dung || '')})</span></div>
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

// 2. Từ luan-tri.js (Phân tích Hội chứng & Bài thuốc AI)
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
        const headers = await getAuthHeaders();
        const res = await fetch(getApiEndpoint(), {
            method: 'POST',
            headers,
            body: JSON.stringify({ prompt, ...getAiParams('luantrihc') })
        });
        const data = await res.json();

        if (res.ok && data.reply) {
            const htmlResult = `
                <div class="font-bold text-amber-400 mb-1 flex items-center gap-1"><i class="fa-solid fa-robot"></i> Mô tả chi tiết hội chứng:</div>
                <div class="space-y-1">${formatAIMessage(data.reply)}</div>`;
            if (typeof setCacheWithTTL === 'function') setCacheWithTTL(cacheKey, htmlResult, 99); 
            aiHcEl.innerHTML = htmlResult;
        } else {
            aiHcEl.innerHTML = `<div class="text-amber-400/90 bg-amber-950/40 p-2.5 rounded border border-amber-800/60 text-xs">${escapeHTML(data.error || 'Lỗi')}</div>`;
        }
    } catch (err) {
        if (!err.message.includes('[PERMISSION_DENIED]')) {
            aiHcEl.innerHTML = `<div class="text-red-400 font-mono text-[11px] p-2 bg-red-950/50 border border-red-800 rounded">⚠️ Lỗi kết nối.</div>`;
        }
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
        const headers = await getAuthHeaders();
        const res = await fetch(getApiEndpoint(), {
            method: 'POST',
            signal: aiBtAbortController.signal,
            headers,
            body: JSON.stringify({ prompt, ...getAiParams('luantribt') })
        });
        const data = await res.json();

        if (res.ok && data.reply) {
            const htmlResult = `
                <div class="font-bold text-amber-400 mb-1 flex items-center gap-1"><i class="fa-solid fa-robot"></i> Nguồn gốc & đặc điểm cổ phương:</div>
                <div class="space-y-1">${formatAIMessage(data.reply)}</div>`;
            if (typeof setCacheWithTTL === 'function') setCacheWithTTL(cacheKey, htmlResult, 99); 
            aiBtEl.innerHTML = htmlResult;
        }
    } catch (err) {
        if (err.name !== 'AbortError' && !err.message.includes('[PERMISSION_DENIED]')) {
            aiBtEl.innerHTML = `<div class="text-red-400 font-mono text-[11px] p-2 bg-red-950/50 border border-red-800 rounded">⚠️ Lỗi kết nối.</div>`;
        }
    }
}

// 3. Từ phoi-ngu.js (Đánh giá phối ngũ bài thuốc AI)
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

        const headers = await getAuthHeaders();
        const res = await fetch(getApiEndpoint(), {
            method: 'POST',
            headers,
            body: JSON.stringify({ prompt: prompt, ...getAiParams('phoingu_danhgia') })
        });
        const data = await res.json();

        if (res.ok && data.reply) {
            contentEl.innerHTML = formatAIMessage(data.reply);
        } else {
            contentEl.innerHTML = `<div class="text-red-400 font-medium">⚠️ ${escapeHTML(data.error || 'Không nhận được phản hồi từ AI.')}</div>`;
        }
    } catch (err) {
        console.error("Lỗi AI đánh giá tổng thể:", err);
        if (!err.message.includes('[PERMISSION_DENIED]')) {
            contentEl.innerHTML = `<div class="text-red-400 font-medium">⚠️ Lỗi kết nối đến máy chủ AI.</div>`;
        }
    }
}

// 4. Từ thu-vien.js (Hỏi đáp sách PDF AI)
async function hoiAIveSach(e) {
    if (e && e.preventDefault) e.preventDefault();

    const params = getAiParams('sach_ai'); // Tự động bật Modal và ngắt lệnh nếu không có quyền VIP
    const chatBox = document.getElementById('sach-ai-chat-box') || document.getElementById('sach-chat-box');
    const inputEl = document.getElementById('sach-ai-input');
    
    if (!chatBox || !inputEl || typeof selectedBookForAI === 'undefined' || !selectedBookForAI) return;

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
        const headers = await getAuthHeaders();
        const res = await fetch(getApiEndpoint(), {
            method: 'POST',
            headers,
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
            chatBox.innerHTML += `<div class="bg-red-950/40 p-2.5 rounded border border-red-800 text-red-300 text-xs">⚠️ ${escapeHTML(data.error || 'Không nhận được phản hồi từ AI.')}</div>`;
        }
    } catch (err) {
        document.getElementById(loadingId)?.remove();
        if (!err.message.includes('[PERMISSION_DENIED]')) {
            chatBox.innerHTML += `<div class="bg-red-950/40 p-2.5 rounded border border-red-800 text-red-300 text-xs">⚠️ Lỗi kết nối máy chủ.</div>`;
        }
    } finally {
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

// 5. Từ trac-nghiem.js (Tạo câu hỏi trắc nghiệm AI)
async function fetchAIQuizQuestions(category, count) {
    const params = getAiParams('quiz'); // Tự động bật Modal và ngắt lệnh nếu không có quyền VIP

    try {
        const prompt = `Hãy soạn chính xác ${count} câu hỏi trắc nghiệm khách quan về chuyên đề ${category} trong Y học cổ truyền (YHCT). 
        Yêu cầu trả về đúng định dạng JSON chuẩn gồm một mảng đúng ${count} object với các trường:
        - "cau_hoi": Nội dung câu hỏi lâm sàng hoặc lý luận.
        - "lua_chon": Mảng gồm đúng 4 đáp án (chỉ chứa nội dung đáp án, KHÔNG ghi ký tự A, B, C, D ở đầu).
        - "dap_an": Chỉ số đáp án đúng (từ 0 đến 3 ứng với 4 lựa chọn).
        - "giai_thich": Giải thích chi tiết ngắn gọn vì sao đáp án đó chính xác.
        Chỉ trả về định dạng JSON thuần túy, không kèm theo chữ giải thích nào khác ngoài JSON.`;

        const headers = await getAuthHeaders();
        const res = await fetch(getApiEndpoint(), {
            method: 'POST',
            headers,
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
        if (!err.message.includes('[PERMISSION_DENIED]')) {
            console.error("Lỗi khi tạo câu hỏi bằng AI:", err);
        }
    }
    return [];
}

// 6. Từ tu-chan.js (Phân tích Vọng chẩn & Tứ chẩn AI)
async function guiPhanTichVongChan() {
    const params = getAiParams('vongchan'); // Tự động bật Modal và ngắt lệnh nếu không có quyền VIP
    const outputEl = document.getElementById('vong-chan-output');
    const chatBox = document.getElementById('ai-chat-box');

    if (typeof vongChanImageBase64 === 'undefined' || !vongChanImageBase64) {
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
    if (typeof currentVongChanRecord !== 'undefined') currentVongChanRecord = null;

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
        const headers = await getAuthHeaders();
        const res = await fetch(getApiEndpoint(), {
            method: 'POST',
            headers,
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
        if (!err.message.includes('[PERMISSION_DENIED]')) {
            if (outputEl) outputEl.innerHTML = `<div class="text-red-400 font-medium p-2 bg-red-950/40 border border-red-800 rounded">⚠️ Lỗi kết nối server AI.</div>`;
        }
    } finally {
        if (btnSubmit) {
            btnSubmit.disabled = false;
            btnSubmit.classList.remove('opacity-50', 'pointer-events-none');
            btnSubmit.innerHTML = `<i class="fa-solid fa-brain"></i> AI Phân Tích Vọng Chẩn`;
        }
    }
}

async function guiPhanTichTuChan() {
    const params = getAiParams('vongchan'); // Tự động bật Modal và ngắt lệnh nếu không có quyền VIP
    const chatBox = document.getElementById('ai-chat-box');

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
- Văn chẩn (Thanh âm, hơi thở, mùi cơ thể): ${noteVanNghe || 'Không có'}
- Vấn chẩn (Triệu chứng bệnh nhân khai báo): ${noteVanHoi || 'Không có'}
- Mạch tượng: ${mach || 'Chưa bắt mạch'}
- Xúc chẩn / Biểu hiện khác: ${xucChan || 'Không'}
${historyContext ? `- Lịch sử khám: ${historyContext}` : ''}

Yêu cầu: BẮT BUỘC trả về DUY NHẤT một đối tượng JSON thuần túy (không kèm Markdown, không lời chào) theo đúng cấu trúc:
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
        const headers = await getAuthHeaders();
        const res = await fetch(getApiEndpoint(), {
            method: 'POST',
            headers,
            body: JSON.stringify({ 
                prompt: promptText, 
                image: (typeof vongChanImageBase64 !== 'undefined' ? vongChanImageBase64 : undefined),
                ...params
            })
        });

        const data = await res.json();
        if (res.ok && data.reply) {
            currentDiagnosticContext = `HỒ SƠ BỆNH NHÂN HIỆN TẠI:
- Văn chẩn: ${noteVanNghe || 'Không'}
- Vấn chẩn: ${noteVanHoi || 'Không'} | Mạch: ${mach || 'Chưa bắt mạch'}
- KẾT QUẢ AI: ${data.reply}`;

            if (chatBox) {
                chatBox.innerHTML = typeof renderTuChanCards === 'function' ? renderTuChanCards(data.reply) : data.reply;
            }

            currentVongChanRecord = {
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
        if (!err.message.includes('[PERMISSION_DENIED]')) {
            if (chatBox) chatBox.innerHTML = `<div class="text-red-400 p-2 bg-red-950/40 rounded">⚠️ Lỗi kết nối máy chủ AI.</div>`;
        }
    } finally {
        if (btnSubmit) {
            btnSubmit.disabled = false;
            btnSubmit.innerHTML = `<i class="fa-solid fa-brain"></i> AI Tổng Hội Chẩn Tứ Chẩn`;
        }
    }
}
