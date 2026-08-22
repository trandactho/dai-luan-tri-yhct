// ==========================================================================
// AI-SERVICE.JS - XỬ LÝ DỊCH VỤ AI, TRA CỨU CẤU TRÚC & ĐỒNG BỘ DỮ LIỆU CÁ NHÂN
// ==========================================================================

// --- 0. HÀM TIỆN ÍCH GIẢI MÃ THỰC THỂ HTML & LÀM SẠCH CHUỖI ---

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
    // Loại bỏ dấu gạch ngang, dấu hoa thị, khoảng trắng hoặc ký tự đặc biệt thừa ở đầu tiêu đề
    return decoded.replace(/^[\s\-–—*#]+/, '').trim();
}

// --- 1. XỬ LÝ & TRÍCH XUẤT ĐỊNH DẠNG DỮ LIỆU AI ---

function parseJsonFromAI(replyText) {
    if (!replyText) return null;
    try {
        let cleaned = String(replyText).replace(/```json\s*/gi, '').replace(/```\s*/g, '').trim();

        try {
            return JSON.parse(cleaned);
        } catch (e) {}

        const arrayMatch = cleaned.match(/\[[\s\S]*\]/);
        if (arrayMatch) {
            try {
                return JSON.parse(arrayMatch[0]);
            } catch (e) {}
        }

        const objectMatch = cleaned.match(/\{[\s\S]*\}/);
        if (objectMatch) {
            try {
                return JSON.parse(objectMatch[0]);
            } catch (e) {}
        }

        return null;
    } catch (e) {
        console.warn("AI không trả về JSON hợp lệ:", e);
        return null;
    }
}

/**
 * Hàm render thông minh: Tự động phân tích JSON hoặc xử lý văn bản thô, 
 * loại bỏ hoàn toàn rác Markdown và tách bạch các ý, đề mục rõ ràng.
 */
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

    const formattedLines = lines.map((line, index) => {
        let trimmed = line.trim();
        if (!trimmed || trimmed === '---') {
            return '<div class="h-2"></div>';
        }

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


// --- 2. TRỢ LÝ AI CHAT TRỰC TIẾP ---

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

    let fullPrompt = `[Yêu cầu: Trả lời cực kỳ ngắn gọn, súc tích, đi thẳng vào ý chính]. ${query}`;
    if (typeof currentDiagnosticContext !== 'undefined' && currentDiagnosticContext) {
        fullPrompt = `[NGỮ CẢNH HỘI CHẨN TRƯỚC ĐÓ]\n${currentDiagnosticContext}\n\n[CÂU HỎI TIẾP THEO CỦA BỆNH NHÂN - Yêu cầu ngắn gọn, súc tích]: "${query}"`;
    }

        try {
        const dynamicMaxTokens = typeof getMaxTokens === 'function' ? getMaxTokens('chat') : 200;

        const res = await fetch(getApiEndpoint(), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                prompt: fullPrompt, 
                source: 'assistant',
                max_tokens: dynamicMaxTokens 
            })
        });

        // 🟢 BẮT LỖI CHI TIẾT TỪ SERVER
        const responseText = await res.text();
        let data;
        try {
            data = JSON.parse(responseText);
        } catch (e) {
            throw new Error(`Server trả về dữ liệu không phải JSON (Mã ${res.status}): ${responseText.substring(0, 100)}`);
        }

        const loadingEl = document.getElementById(loadingId);
        if (loadingEl) loadingEl.remove();

                if (!res.ok || data.error) {
            const errDetail = data.error || data.message || 'Lỗi không xác định từ máy chủ';
            chatBox.innerHTML += `<div class="bg-red-950/40 p-3 rounded-lg border border-red-800 text-red-300 text-xs"><i class="fa-solid fa-triangle-exclamation mr-1"></i> <b>Lỗi AI (${res.status}):</b> ${escapeHTML(errDetail)}</div>`;
            alert(`⚠️ Không thể dùng AI:\n${errDetail}`);
        } else {
            // 🟢 CẬP NHẬT QUOTA CHUẨN TỪ SERVER LÊN GIAO DIỆN NGAY LẬP TỨC
            if (typeof data.aiUsedToday === 'number' && typeof capNhatQuotaUICucBo === 'function') {
                capNhatQuotaUICucBo(data.aiUsedToday);
            }

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
        chatBox.innerHTML += `<div class="bg-red-950/40 p-3 rounded-lg border border-red-800 text-red-300 text-xs"><i class="fa-solid fa-plug-circle-xmark mr-1"></i> <b>Lỗi kết nối:</b> ${escapeHTML(err.message)}</div>`;
        alert(`❌ Lỗi kết nối AI: ${err.message}`);
    
        } finally {
        if (btnSend) {
            btnSend.disabled = false;
            btnSend.classList.remove('opacity-50', 'pointer-events-none');
        }
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

// --- HÀM LÀM SẠCH CHUỖI GỐC (BỎ HOÀN TOÀN CÁC KÝ TỰ RÁC VỠ JSON) ---
function stripMarkdown(text) {
    if (!text) return '';
    return String(text)
        .replace(/```json/gi, '')
        .replace(/```/g, '')
        .replace(/\*\*/g, '')
        .replace(/__/g, '')
        .replace(/^[\s\-–—*#]+/g, '')
        .replace(/^\{?"?[a-zA-Z0-9_]+"?:/g, '') 
        .replace(/"/g, '') 
        .trim();
}

function validateAndCleanAIResult(obj, tabName) {
    if (!obj || typeof obj !== 'object') return null;

    // 1. Danh mục Biện chứng Luận Trị
    if (tabName.includes('Luận Trị') || tabName.includes('luantri')) {
        return {
            hc: stripMarkdown(obj.hc || 'HỘI CHỨNG CHƯA RÕ'),
            pdt: stripMarkdown(obj.pdt || 'Theo chỉ định chuyên môn'),
            tc: Array.isArray(obj.tc) ? obj.tc.map(stripMarkdown) : [stripMarkdown(obj.tc || 'Đang cập nhật triệu chứng')],
            bt: stripMarkdown(obj.bt || 'Đối chứng nghiệm phương'),
            tpbt: Array.isArray(obj.tpbt) ? obj.tpbt.map(stripMarkdown) : []
        };
    }
    
    // 2. Danh mục Dược Liệu
    else if (tabName.includes('Dược Liệu') || tabName.includes('duoclieu')) {
        return {
            ten: stripMarkdown(obj.ten || 'Dược liệu chưa rõ tên'),
            nhom: stripMarkdown(obj.nhom || 'Dược liệu YHCT'),
            ten_khoa_hoc: stripMarkdown(obj.ten_khoa_hoc || ''),
            pinyin: stripMarkdown(obj.pinyin || ''),
            cong_dung: stripMarkdown((!obj.cong_dung || obj.cong_dung === "Đang cập nhật") ? "Tư âm dưỡng huyết, khu phong trừ thấp." : obj.cong_dung),
            kieng_ky: stripMarkdown(obj.kieng_ky || obj.luu_y || 'Tuân thủ liều lượng phối ngũ tiêu chuẩn.')
        };
    } 
    
    // 3. Danh mục Huyệt Vị
    else if (tabName.includes('Huyệt Vị') || tabName.includes('huyetvi')) {
        return {
            ten: stripMarkdown(obj.ten || 'Huyệt chưa rõ tên'),
            kinh: stripMarkdown(obj.kinh || 'Kinh mạch YHCT'),
            ma_who: stripMarkdown(obj.ma_who || ''),
            chu_tri: stripMarkdown((!obj.chu_tri || obj.chu_tri === "Đang cập nhật") ? "Điều hòa khí huyết, thông kinh hoạt lạc." : obj.chu_tri),
            vi_tri: stripMarkdown(obj.vi_tri || obj.dinh_vi || 'Đang cập nhật mô tả giải phẫu.')
        };
    }

    // 4. Danh mục Trà Dược
    else if (tabName.includes('Trà Dược') || tabName.includes('Tra') || tabName.includes('tra')) {
        return {
            ten: stripMarkdown(obj.ten || 'Bài trà chưa rõ tên'),
            nhom: stripMarkdown(obj.nhom || 'Trà Dược YHCT'),
            cong_dung: stripMarkdown((!obj.cong_dung || obj.cong_dung === "Đang cập nhật") ? "Thanh nhiệt, giải độc, điều hòa cơ thể." : obj.cong_dung),
            cach_dung: stripMarkdown(obj.cach_dung || 'Hãm với nước sôi 85-90°C trong 10-15 phút.'),
            kieng_ky: stripMarkdown(obj.kieng_ky || 'Phụ nữ có thai hoặc người tỳ vị hư hàn nên tham khảo ý kiến chuyên gia.'),
            thanh_phan: Array.isArray(obj.thanh_phan) ? obj.thanh_phan.map(stripMarkdown) : []
        };
    }

    // 5. Danh mục Dược Thiện
    else if (tabName.includes('Dược Thiện') || tabName.includes('DuocThien') || tabName.includes('duocthien')) {
        let formattedThanhPhan = [{ vi: 'Thành phần chính', lieu: 'Vừa đủ' }];
        if (Array.isArray(obj.thanh_phan)) {
            formattedThanhPhan = obj.thanh_phan.map(item => {
                if (typeof item === 'object' && item !== null) {
                    return { vi: stripMarkdown(item.vi || 'Vị thuốc'), lieu: stripMarkdown(item.lieu || 'Vừa đủ') };
                }
                return { vi: stripMarkdown(item), lieu: 'Vừa đủ' };
            });
        }
    
        return {
            ten: stripMarkdown(obj.ten || 'Món dược thiện chưa rõ tên'),
            nhom: stripMarkdown(obj.nhom || 'Dược Thiện'),
            cong_dung: stripMarkdown(obj.cong_dung || 'Bồi bổ cơ thể, hỗ trợ điều trị bệnh.'),
            thanh_phan: formattedThanhPhan,
            so_che: stripMarkdown(obj.so_che || 'Sơ chế nguyên liệu sạch sẽ.'),
            cach_lam: Array.isArray(obj.cach_lam) 
                ? obj.cach_lam.map(stripMarkdown) 
                : [stripMarkdown(obj.cach_lam || 'Nấu chín theo phương pháp cổ truyền.')],
            kieng_ky: stripMarkdown(obj.kieng_ky || 'Tham khảo ý kiến thầy thuốc trước khi dùng.')
        };
    }

    // 6. Danh mục Tứ Chẩn & Hội Chẩn AI
    else if (tabName.includes('Tứ Chẩn') || tabName.includes('tu_chan') || tabName.includes('vongchan')) {
        return {
            bat_cuong: stripMarkdown(obj.bat_cuong || 'Chưa xác định Bát cương'),
            tang_phu: stripMarkdown(obj.tang_phu || 'Chưa xác định Tạng phủ'),
            hoi_chung: stripMarkdown(obj.hoi_chung || 'Chưa rõ hội chứng'),
            bien_chung: stripMarkdown(obj.bien_chung || 'Đang cập nhật biện chứng luận trị.'),
            phap_tri: stripMarkdown(obj.phap_tri || 'Đang cập nhật pháp trị.'),
            co_phuong: stripMarkdown(obj.co_phuong || '---'),
            vi_thuoc: Array.isArray(obj.vi_thuoc) ? obj.vi_thuoc.map(v => ({
                ten: stripMarkdown(v.ten || 'Vị thuốc'),
                lieu: stripMarkdown(v.lieu || 'Vừa đủ'),
                vai_tro: stripMarkdown(v.vai_tro || 'Thuốc')
            })) : []
        };
    }
    
    // Mặc định làm sạch chuỗi cho đối tượng khác nếu có
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
        // Xác định cấu trúc JSON mẫu phù hợp theo từng tab danh mục
        let promptSpec = `- Nếu là Dược Liệu: {"ten": "${query}", "nhom": "Dược liệu YHCT", "cong_dung": "...", "kieng_ky": "..."}`;
        if (tabName.includes('Luận Trị') || tabName.includes('luantri')) {
            promptSpec = `- Nếu là Biện chứng Luận Trị: {"hc": "${query}", "pdt": "Pháp trị chuẩn", "tc": ["Triệu chứng lâm sàng 1", "Triệu chứng 2"], "bt": "Bài thuốc cổ phương phù hợp", "tpbt": ["Vị thuốc 1", "Vị thuốc 2"]}`;
        } else if (tabName.includes('Huyệt Vị') || tabName.includes('huyetvi')) {
            promptSpec = `- Nếu là Huyệt Vị: {"ten": "${query}", "kinh": "Tên kinh mạch", "ma_who": "Mã định danh", "chu_tri": "Công dụng chính", "vi_tri": "Mô tả vị trí giải phẫu"}`;
        } else if (tabName.includes('Trà Dược') || tabName.includes('Tra')) {
            promptSpec = `- Nếu là Trà Dược: {"ten": "${query}", "nhom": "Trà Dược YHCT", "cong_dung": "...", "cach_dung": "...", "kieng_ky": "...", "thanh_phan": ["Vị 1", "Vị 2"]}`;
        } else if (tabName.includes('Dược Thiện') || tabName.includes('DuocThien')) {
            promptSpec = `- Nếu là Dược Thiện: {"ten": "${query}", "nhom": "Dược Thiện", "cong_dung": "...", "thanh_phan": [{"vi": "Vị thuốc", "lieu": "Liều lượng"}], "so_che": "...", "cach_lam": ["Bước 1"], "kieng_ky": "..."}`;
        }

        const prompt = `Bạn là hệ thống CSDL YHCT. Cung cấp thông tin ngắn gọn về "${query}" thuộc danh mục ${tabName}.
CẤM dùng ký tự Markdown **, CẤM dùng các từ như "Nhóm (Group):". 
BẮT BUỘC trả về JSON chuẩn duy nhất:
${promptSpec}`;

        const dynamicMaxTokens = typeof getMaxTokens === 'function' ? getMaxTokens('backup') : 250;

                // 🟢 Lấy Token từ localStorage để gửi kèm xác thực lên server
        let savedToken = '';
        try { savedToken = localStorage.getItem('access_token') || ''; } catch (e) {}

        const res = await fetch(getApiEndpoint(), {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                // Bổ sung Header Authorization để Server nhận diện tài khoản và tính lượt
                ...(savedToken ? { 'Authorization': `Bearer ${savedToken}` } : {})
            },
            body: JSON.stringify({ 
                prompt: prompt, 
                source: 'backup',
                max_tokens: dynamicMaxTokens 
            })
        });
        const data = await res.json();
    
        if (res.ok && data.reply) {
            // 🟢 CẬP NHẬT QUOTA NGAY LẬP TỨC KHI SERVER PHẢN HỒI THÀNH CÔNG
            if (typeof data.aiUsedToday === 'number' && typeof capNhatQuotaUICucBo === 'function') {
                capNhatQuotaUICucBo(data.aiUsedToday);
            }

            let parsedObj = parseJsonFromAI(data.reply);
            if (parsedObj) {
                parsedObj = validateAndCleanAIResult(parsedObj, tabName);
            } else {
                let cleanText = stripMarkdown(data.reply);
                parsedObj = { 
                    ten: query, 
                    nhom: tabName,
                    cong_dung: cleanText || "Đang cập nhật công năng.",
                    cach_dung: "Hãm với nước sôi 85-90°C trong 10-15 phút.",
                    thanh_phan: [query]
                };
            }
            
            // Lưu trữ vĩnh viễn vào CSDL & LocalStorage
            luuKetQuaAiVaoDb(query, tabName, parsedObj);            
            // Tự động làm mới giao diện hiển thị sau khi lưu
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


// --- 4. HÀM QUẢN LÝ LƯU TRỮ VĨNH VIỄN VÀO CSDL VÀ LOCALSTORAGE ---

function luuKetQuaAiVaoDb(query, tabName, objData) {
    if (!query || !objData) return;
    const cleanKey = removeAccents(query).trim().replace(/\s+/g, '_');

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
    else if (tabName.includes('Dược Liệu')) {
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
    }
    else if (tabName.includes('Huyệt Vị')) {
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
    }
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
        
        if (typeof safeSetLocalStorage === 'function') safeSetLocalStorage('custom_traData', custom, 30);
        else localStorage.setItem('custom_traData', JSON.stringify(custom));
    }
    else if (tabName.includes('Dược Thiện') || tabName.includes('DuocThien')) {
        if (typeof duocThienData === 'undefined') window.duocThienData = [];

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
            cach_lam: Array.isArray(objData.cach_lam) 
                ? objData.cach_lam 
                : (objData.cach_lam ? [objData.cach_lam] : ["Sơ chế nguyên liệu sạch sẽ.", "Nấu chín theo phương pháp cổ truyền."]),
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

// --- 5. NÚT KÍCH HOẠT SỰ KIỆN TÌM AI ĐỘC LẬP TỪ GIAO DIỆN (NÚT LỆNH THỰC THI 1 LẦN) ---

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
                const descEl = document.getElementById('ai-hc-desc');
                if (descEl) {
                    descEl.classList.remove('hidden');
                    descEl.innerHTML = `<i class="fa-solid fa-brain fa-spin text-amber-500 mr-1"></i> Đang phân tích hội chứng...`;
                    const res = await fetch(getApiEndpoint(), {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ 
                            prompt: `Phân tích cực kỳ ngắn gọn, súc tích hội chứng YHCT: ${query}. Tối đa 3 ý chính.`, 
                            source: 'assistant', 
                            max_tokens: 200 
                        })
                    });
                    const data = await res.json();
                    descEl.innerHTML = formatAIMessage(data.reply || 'Không có phản hồi.');
                }
            }
        } else if (loaiLenh === 'bt') {
            const query = document.getElementById('bai-thuoc')?.innerText;
            if (query && query !== '---') {
                const descEl = document.getElementById('ai-bt-desc');
                if (descEl) {
                    descEl.classList.remove('hidden');
                    descEl.innerHTML = `<i class="fa-solid fa-brain fa-spin text-amber-500 mr-1"></i> Đang phân tích bài thuốc...`;
                    const res = await fetch(getApiEndpoint(), {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ 
                            prompt: `Phân tích cực kỳ ngắn gọn, súc tích bài thuốc cổ phương: ${query}. Tối đa 3 ý chính.`, 
                            source: 'assistant', 
                            max_tokens: 200 
                        })
                    });
                    const data = await res.json();
                    descEl.innerHTML = formatAIMessage(data.reply || 'Không có phản hồi.');
                }
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
        if (!query) {
            alert('Vui lòng nhập từ khóa hội chứng hoặc triệu chứng trước khi tìm với AI.');
            input?.focus();
            return;
        }
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
