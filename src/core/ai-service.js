// ==========================================================================
// AI-SERVICE.JS - XỬ LÝ DỊCH VỤ AI, TRA CỨU BỔ SUNG & ĐỒNG BỘ DỮ LIỆU CÁ NHÂN
// ==========================================================================

// --- 1. XỬ LÝ & TRÍCH XUẤT ĐỊNH DẠNG DỮ LIỆU AI ---

function parseJsonFromAI(replyText) {
    if (!replyText) return null;
    try {
        // Tẩy sạch các ký tự Markdown block (```json ... ```) nếu AI kèm vào
        let cleaned = String(replyText).replace(/```json\s*/gi, '').replace(/```\s*/g, '').trim();

        // Thử parse trực tiếp nếu chuỗi đã là JSON chuẩn
        try {
            return JSON.parse(cleaned);
        } catch (e) {}

        // Ưu tiên dò tìm Mảng JSON [...] (Dành cho Trắc nghiệm / Danh sách)
        const arrayMatch = cleaned.match(/\[[\s\S]*\]/);
        if (arrayMatch) {
            try {
                return JSON.parse(arrayMatch[0]);
            } catch (e) {}
        }

        // Dò tìm Đối tượng JSON {...} (Dành cho Chi tiết Dược liệu / Biện chứng / Dược thiện...)
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

function formatAIMessage(text) {
    if (!text) return '';

    let cleaned = text.replace(/^(chào bạn|dưới đây là|rất vui)[^:\n]*[:\n]?/gi, '').trim();

    cleaned = cleaned
        .replace(/[\/\\]?stroke/gi, '')
        .replace(/\\?\$?\\(right|left)?arrow\$?/gi, '→')
        .replace(/\\(text|mathbf|mathrm|textit)\{([^}]+)\}/gi, '$2')
        .replace(/\$+/g, '')
        .replace(/\\[a-zA-Z]+/g, '')
        .replace(/[\u4e00-\u9fa5]+/g, '');

    // Tẩy sạch Markdown in đậm/nghiêng để tránh vỡ chuỗi HTML
    cleaned = cleaned
        .replace(/\*\*(.*?)\*\*/g, '$1')
        .replace(/\*(.*?)\*/g, '$1')
        .replace(/__(.*?)__/g, '$1')
        .replace(/_(.*?)_/g, '$1');

    let safe = escapeHTML(cleaned);

    safe = safe.replace(/^###?\s*(.*$)/gim, '<div class="text-amber-400 font-bold text-xs uppercase tracking-wider mt-3 mb-1 border-b border-stone-800 pb-1">$1</div>');
    safe = safe.replace(/^#\s*(.*$)/gim, '<div class="text-amber-400 font-bold text-sm uppercase tracking-wider mt-3 mb-1 border-b border-stone-800 pb-1">$1</div>');

    // Link Cổ Phương
    safe = safe.replace(/(Cổ phương(?: gợi ý)?:\s*)([A-ZĐÀÁẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÈÉẺẼẸÊẾỀỂỄỆÌÍỈĨỊÒÓỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÙÚỦŨỤƯỨỪỬỮỰỲÝỶỸỴa-zđàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵ\s]{3,40})/gi, (match, prefix, name) => {
        let cleanName = name.trim().replace(/\s*\(.*?\)/g, '').trim();
        if (!cleanName) return match;
        return `${prefix}<span onclick="chuyenQuaLuanTriVaTim('${cleanName}')" class="text-amber-400 font-bold underline cursor-pointer hover:text-amber-300" title="Tra cứu trong Luận Trị"><i class="fa-solid fa-scroll text-[10px] mr-1"></i>${cleanName}</span>`;
    });

    // Link Vị Thuốc dạng [TÊN THUỐC] (16g) - Giữ nguyên tên chế biến
    safe = safe.replace(/\[([^\]]+)\]\s*\(([\d\.\s-]+\s*(?:g|gam|mg|kg))\)/gi, (match, herbName, weight) => {
        let cleanHerb = herbName.trim();
        return `<span onclick="xemDuocLieu('${cleanHerb}')" class="text-emerald-400 font-semibold underline cursor-pointer hover:text-emerald-300" title="Bấm để xem vị thuốc ${cleanHerb}"><i class="fa-solid fa-leaf text-[10px] mr-0.5"></i>${cleanHerb}</span> (${weight})`;
    });

    // Fallback cho định dạng không ngoặc vuông - Full Regex Tiếng Việt
    safe = safe.replace(/(?<!\[)([A-ZĐÀÁẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÈÉẺẼẸÊẾỀỂỄỆÌÍỈĨỊÒÓỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÙÚỦŨỤƯỨỪỬỮỰỲÝỶỸỴa-zđàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵ\s]{2,30})\s*\(([\d\.\s-]+\s*(?:g|gam|mg|kg))\)/gi, (match, herbName, weight) => {
        let cleanHerb = herbName.trim()
            .replace(/^(Quân|Thần|Tá|Sứ|Gia|Gia giảm|Hoặc|Dùng|Thêm|Thay|Mặt|Tóc)\s*:\s*/i, '')
            .replace(/^(Gia|Hoặc|Dùng|Thêm|Thay)\s+/i, '')
            .replace(/^\d+\.\s*/, '')
            .trim();

        if (!cleanHerb || cleanHerb.length < 2) return match;
        return `<span onclick="xemDuocLieu('${cleanHerb}')" class="text-emerald-400 font-semibold underline cursor-pointer hover:text-emerald-300" title="Bấm để xem vị thuốc"><i class="fa-solid fa-leaf text-[10px] mr-0.5"></i>${cleanHerb}</span> (${weight})`;
    });

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

    const rawHtml = formattedLines.join('');
    return typeof DOMPurify !== 'undefined' ? DOMPurify.sanitize(rawHtml) : rawHtml;
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

    let fullPrompt = query;
    if (typeof currentDiagnosticContext !== 'undefined' && currentDiagnosticContext) {
        fullPrompt = `[NGỮ CẢNH HỘI CHẨN TRƯỚC ĐÓ]\n${currentDiagnosticContext}\n\n[CÂU HỎI TIẾP THEO CỦA BỆNH NHÂN]: "${query}"\nHãy trả lời ngắn gọn, trực tiếp liên quan đến phác đồ/bệnh án YHCT phía trên.`;
    }

    try {
        const res = await fetch(getApiEndpoint(), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                prompt: fullPrompt, 
                source: 'assistant',
                max_tokens: 350
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

// --- 3. HÀM TÌM KIẾM AI ĐỘC LẬP & TỰ ĐỘNG BỎ TẢI VÀO LOCALSTORAGE ---

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
        const prompt = `Bạn là hệ thống CSDL YHCT. Hãy cung cấp thông tin về "${query}" thuộc danh mục ${tabName}. 
        BẮT BUỘC trả về đúng định dạng JSON thuần túy (không kèm chữ nào khác ngoài JSON):
        - Nếu là Luận Trị: {"hc": "...", "pdt": "...", "tc": ["..."], "bt": "...", "tpbt": ["..."]}
        - Nếu là Dược Thiện: {"ten": "...", "nhom": "...", "cong_dung": "...", "thanh_phan": [{"vi": "...", "lieu": "..."}], "so_che": "...", "cach_lam": ["..."], "kieng_ky": "..."}
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
            
            luuKetQuaAiVaoDb(query, tabName, parsedObj);

            // Tự động load lại giao diện tương ứng sau khi ghi dữ liệu
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
    // 3. Tab Huyệt Vị
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
        
        if (typeof safeSetLocalStorage === 'function') safeSetLocalStorage('custom_traData', custom, 30);
        else localStorage.setItem('custom_traData', JSON.stringify(custom));
    }
    // 5. Tab Dược Thiện
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

// --- 5. NÚT KÍCH HOẠT SỰ KIỆN TÌM AI ĐỘC LẬP TỪ GIAO DIỆN ---

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
        if (!query) {
            alert('Vui lòng nhập tên dược liệu trước khi tìm với AI.');
            input?.focus();
            return;
        }
        fetchAIBackupResult(query, 'Dược Liệu YHCT', document.getElementById('gridDuocLieu'));
    } else if (tab === 'huyetvi') {
        const input = document.getElementById('searchHuyetVi');
        const query = input ? input.value.trim() : '';
        if (!query) {
            alert('Vui lòng nhập tên huyệt vị trước khi tìm với AI.');
            input?.focus();
            return;
        }
        fetchAIBackupResult(query, 'Huyệt Vị YHCT', document.getElementById('gridHuyetVi'));
    } else if (tab === 'tra') {
        const input = document.getElementById('searchTra');
        const query = input ? input.value.trim() : '';
        if (!query) {
            alert('Vui lòng nhập tên bài trà trước khi tìm với AI.');
            input?.focus();
            return;
        }
        fetchAIBackupResult(query, 'Trà Dược YHCT', document.getElementById('gridTra'));
    } else if (tab === 'duocthien') {
        const input = document.getElementById('searchDuocThien');
        const query = input ? input.value.trim() : '';
        if (!query) {
            alert('Vui lòng nhập tên món ăn bài thuốc trước khi tìm với AI.');
            input?.focus();
            return;
        }
        fetchAIBackupResult(query, 'Dược Thiện YHCT', document.getElementById('gridDuocThien'));
    }
}
