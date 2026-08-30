// ==========================================================================
// PHOI-NGU.JS - XÂY DỰNG & PHỐI NGŨ BÀI THUỐC TỰ DO (ĐÃ ĐỒNG BỘ Ổ KHÓA 🔒)
// ==========================================================================

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

let currentFormulaHerbs = [];

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
            
            luuKetQuaAiVaoDb(parsedObj.ten, 'Dược Liệu', parsedObj);
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

    listEl.innerHTML = currentFormulaHerbs.map((herb, idx) => `
        <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-stone-800 text-amber-400 border border-stone-700 rounded-lg text-xs font-semibold shadow-sm">
            <i class="fa-solid fa-leaf text-emerald-500 text-[10px]"></i> ${escapeHTML(herb)}
            <button onclick="xoaViThuocPhoiNgu(${idx})" class="text-stone-400 hover:text-red-400 ml-1 cursor-pointer"><i class="fa-solid fa-xmark"></i></button>
        </span>
    `).join('');

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

            <div class="bg-stone-900/95 p-4 rounded-lg border border-amber-600/50 space-y-2 relative shadow-lg">
                <div class="flex items-center justify-between border-b border-stone-800 pb-2">
                    <div class="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                        <i class="fa-solid fa-robot text-amber-500"></i> Đánh giá tổng thể bài thuốc (Chuyên gia AI)
                    </div>
                    <button onclick="aiDanhGiaTongTheBaiThuoc()" data-min-role="VIP" data-feature-name="Đánh Giá Phối Ngũ AI" class="px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-lg text-xs flex items-center gap-1.5 transition-all shadow cursor-pointer">
                        <i class="fa-solid fa-brain"></i> Đánh giá ngay
                    </button>
                </div>
                <div id="ai-tong-the-content" class="text-xs text-stone-300 leading-relaxed pt-1">
                    Nhấn nút <strong class="text-amber-400">"Đánh giá ngay"</strong> để chuyên gia AI phân tích tính Quân - Thần - Tá - Sứ, chủ trị lâm sàng và mức độ hòa hợp của bài thuốc tự do này.
                </div>
            </div>
        </div>
    `;

    // Tự động quét và cập nhật ổ khóa 🔒 sau khi render xong HTML động
    if (typeof window.updateRoleLockUI === 'function') {
        window.updateRoleLockUI();
    }
}

function napBaiThuocMau(arrViThuoc) {
    if (!Array.isArray(arrViThuoc)) return;
    currentFormulaHerbs = [...arrViThuoc];
    renderPhoiNguUI();
}
