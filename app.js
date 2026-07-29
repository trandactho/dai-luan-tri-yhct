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

let quizActive = false;
let isQuizDL = false, isQuizHV = false;

function toggleQuizDL(btnEl) {
    isQuizDL = !isQuizDL;
    const btn = btnEl || event?.currentTarget || document.querySelector('button[onclick*="toggleQuizDL"]');
    if (btn) {
        if (isQuizDL) {
            btn.className = "px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-lg text-xs flex items-center gap-1.5 transition-all flex-shrink-0 shadow-lg shadow-amber-900/50";
        } else {
            btn.className = "px-4 py-2 bg-stone-800 hover:bg-stone-700 text-amber-500 border border-stone-700 font-bold rounded-lg text-xs flex items-center gap-1.5 transition-all flex-shrink-0";
        }
    }
    filterDuocLieu();
}

function toggleQuizHV(btnEl) {
    isQuizHV = !isQuizHV;
    const btn = btnEl || event?.currentTarget || document.querySelector('button[onclick*="toggleQuizHV"]');
    if (btn) {
        if (isQuizHV) {
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

const getVal = (id) => document.getElementById(id)?.value ?? '';

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

window.addEventListener("DOMContentLoaded", () => {
    requestAnimationFrame(() => {
        try {
            capNhatTongSoTrieuChung();
            capNhatTongSoTracNghiem();

            if (typeof duocLieuData !== 'undefined' && duocLieuData) {
                const el = document.getElementById('total-thuoc');
                if (el) el.textContent = duocLieuData.length;
            }
            if (typeof huyetViData !== 'undefined' && huyetViData) {
                const el = document.getElementById('total-huyet');
                if (el) el.textContent = huyetViData.length;
            }
            if (typeof traData !== 'undefined' && traData) {
                const el = document.getElementById('total-tra');
                if (el) el.textContent = traData.length;
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
});

// 2. Nạp dữ liệu tương ứng khi người dùng mở từng Tab
async function switchTab(tabName) {
    if (tabName === 'luantri') await loadScript('luantridata.js');
    if (tabName === 'duoclieu') await loadScript('duoclieudata.js');
    if (tabName === 'huyetvi') await loadScript('huyetvidata.js');
    if (tabName === 'tra') await loadScript('tradata.js');
    if (tabName === 'tracnghiem') await loadScript('questiondata.js');

    if (tabName !== 'xemanh') {
        localStorage.setItem('activeTab', tabName);
    }

    const tabs = ['luantri', 'tracnghiem', 'duoclieu', 'huyetvi', 'tra', 'xemanh', 'ai'];
    const pascalMap = { 
        luantri: 'LuanTri', 
        tracnghiem: 'TracNghiem', 
        duoclieu: 'DuocLieu', 
        huyetvi: 'HuyetVi', 
        tra: 'Tra', 
        xemanh: 'XemAnh',
        ai: 'AI'
    };

    tabs.forEach(t => {
        const pascalCase = pascalMap[t];
        const section = document.getElementById('section' + pascalCase);
        const btn = document.getElementById('btnTab' + pascalCase);

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

            // 👉 BỔ SUNG ĐOẠN NÀY: Cập nhật dữ liệu Luận trị ngay khi mở tab
            if (t === 'luantri') {
                capNhatTongSoTrieuChung();
                updateLuanTri();
            }
            if (t === 'duoclieu') filterDuocLieu();
            if (t === 'huyetvi') filterHuyetVi();
            if (t === 'tra') filterTra();
            if (t === 'tracnghiem') capNhatDiemGanNhat();
            
        } else {
            if (section) section.classList.add('hidden');
            if (btn) btn.classList.remove('tab-active', 'text-primary');
        }
    });
}

let currentQuizQuestions = [];
let currentQuizIndex = 0;
let quizScore = 0;
let userAnswers = [];

function capNhatDiemGanNhat() {
    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    const el = document.getElementById('quiz-last-score');
    if (el && history.length > 0) {
        el.innerHTML = `⏱️ Lần gần nhất (${history[0].date}): <strong class="text-amber-400">${history[0].score}</strong> (${history[0].percent})`;
    }
}

function taoCauHoiTamTuDuLieu(category) {
    let generated = [];
    if ((category === 'luantri' || category === 'all') && typeof database !== 'undefined') {
        Object.keys(database).forEach(key => {
            const item = database[key];
            if (item && item.hc && item.tc && item.tc.length > 0) {
                const wrongOptions = Object.values(database)
                    .map(d => d.hc).filter(hc => hc !== item.hc)
                    .sort(() => 0.5 - Math.random()).slice(0, 3);
                
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
        duocLieuData.forEach(d => {
            if (d && d.ten && d.cong_dung) {
                const wrongOptions = duocLieuData
                    .map(item => item.cong_dung).filter(cd => cd !== d.cong_dung)
                    .sort(() => 0.5 - Math.random()).slice(0, 3);

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
        huyetViData.forEach(h => {
            if (h && h.ten && h.chu_tri) {
                const wrongOptions = huyetViData
                    .map(item => item.chu_tri).filter(ct => ct !== h.chu_tri)
                    .sort(() => 0.5 - Math.random()).slice(0, 3);

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
        traData.forEach(t => {
            if (t && t.ten && t.cong_dung) {
                const wrongOptions = traData
                    .map(item => item.cong_dung).filter(cd => cd !== t.cong_dung)
                    .sort(() => 0.5 - Math.random()).slice(0, 3);

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

function batDauTracNghiem() {
    const categorySelect = document.getElementById('quiz-category');
    const countSelect = document.getElementById('quiz-count');
    
    const category = categorySelect ? categorySelect.value : 'all';
    const count = countSelect ? parseInt(countSelect.value) : 10;

    let rawData = [];
    if (typeof questionsData !== 'undefined' && Array.isArray(questionsData)) {
        rawData = [...questionsData];
    } else if (Array.isArray(window.questionsData)) {
        rawData = [...window.questionsData];
    }

    rawData = rawData.concat(taoCauHoiTamTuDuLieu(category));

    let pool = [];
    if (category === 'all') {
        pool = rawData;
    } else {
        pool = rawData.filter(q => q && q.category === category);
    }

    if (pool.length === 0) {
        alert('Không tìm thấy câu hỏi, hệ thống chuyển sang chế độ Tổng hợp tất cả.');
        pool = rawData;
    }

    currentQuizQuestions = [...pool]
        .sort(() => 0.5 - Math.random())
        .slice(0, count)
        .map(q => {
            const specialKeywords = ['cả a và b', 'tất cả', 'không có', 'cả hai', 'đều đúng', 'đều sai'];
            const hasSpecialOpt = q.lua_chon && q.lua_chon.some(text => 
                specialKeywords.some(keyword => text.toLowerCase().includes(keyword))
            );

            if (hasSpecialOpt) {
                return { ...q };
            } else {
                const shuffled = q.lua_chon
                    .map((text, idx) => ({ text, isCorrect: idx === q.dap_an }))
                    .sort(() => 0.5 - Math.random());

                return {
                    ...q,
                    lua_chon: shuffled.map(item => item.text),
                    dap_an: shuffled.findIndex(item => item.isCorrect)
                };
            }
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

function hienThiCauHoiTracNghiem() {
    if (currentQuizIndex >= currentQuizQuestions.length) {
        hienThiKetQuaTracNghiem();
        return;
    }

    const oldFeedback = document.getElementById('quiz-feedback-box');
    if (oldFeedback) oldFeedback.remove();

    const q = currentQuizQuestions[currentQuizIndex];
    document.getElementById('quiz-progress').innerText = `Câu ${currentQuizIndex + 1}/${currentQuizQuestions.length}`;
    document.getElementById('quiz-score-live').innerText = `Điểm: ${quizScore}`;
    document.getElementById('quiz-question').innerText = q.cau_hoi;

    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = "";

    q.lua_chon.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = "w-full p-3 text-left bg-stone-900 hover:bg-stone-800 border border-stone-800 rounded text-xs text-stone-200 transition-all flex items-center gap-2";
        btn.innerHTML = `<span class="w-5 h-5 rounded-full bg-stone-800 flex items-center justify-center text-[10px] font-bold text-amber-500">${String.fromCharCode(65 + idx)}</span> <span>${escapeHTML(opt)}</span>`;
        btn.onclick = () => chonDapAnTracNghiem(idx);
        optionsContainer.appendChild(btn);
    });
}

function chonDapAnTracNghiem(selectedIndex) {
    const q = currentQuizQuestions[currentQuizIndex];
    const isCorrect = selectedIndex === q.dap_an;
    
    if (isCorrect) quizScore++;

    userAnswers.push({
        cau_hoi: q.cau_hoi,
        lua_chon: q.lua_chon,
        dap_an_dung: q.dap_an,
        lua_chon_cua_ban: selectedIndex,
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
        } else if (i === selectedIndex && !isCorrect) {
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

    if (isCorrect) {
        feedbackDiv.className = "mt-4 p-3.5 rounded-lg border border-emerald-800 bg-emerald-950/40 text-xs space-y-2 animate-fade-in";
        feedbackDiv.innerHTML = `
            <div class="font-bold text-emerald-400 flex items-center gap-1.5 text-sm">
                <i class="fa-solid fa-circle-check"></i> Chính xác!
            </div>
            <div class="text-stone-300 italic">💡 ${escapeHTML(q.giai_thich || 'Đã ghi nhận đáp án đúng.')}</div>
            <button onclick="chuyenCauTiepTheo()" class="mt-2 w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded transition-all flex items-center justify-center gap-2 cursor-pointer">
                Câu tiếp theo <i class="fa-solid fa-arrow-right"></i>
            </button>
        `;
    } else {
        feedbackDiv.className = "mt-4 p-3.5 rounded-lg border border-red-800 bg-red-950/40 text-xs space-y-2 animate-fade-in";
        feedbackDiv.innerHTML = `
            <div class="font-bold text-red-400 flex items-center gap-1.5 text-sm">
                <i class="fa-solid fa-circle-xmark"></i> Chưa chính xác!
            </div>
            <div class="text-stone-300 italic">💡 ${escapeHTML(q.giai_thich || 'Xem lại kiến thức chuyên đề này.')}</div>
            <button onclick="chuyenCauTiepTheo()" class="mt-2 w-full py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 font-bold rounded transition-all flex items-center justify-center gap-2 cursor-pointer">
                Câu tiếp theo <i class="fa-solid fa-arrow-right"></i>
            </button>
        `;
    }
}

function chuyenCauTiepTheo() {
    currentQuizIndex++;
    hienThiCauHoiTracNghiem();
}
        
function hienThiKetQuaTracNghiem() {
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

    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    history.unshift({
        date: new Date().toLocaleDateString('vi-VN'),
        score: `${quizScore}/${total}`,
        percent: percent.toFixed(0) + '%'
    });
    localStorage.setItem('quizHistory', JSON.stringify(history.slice(0, 5)));
    capNhatDiemGanNhat();
}

function kichHoatTimAnh(keyword = "") {
    const kw = keyword.trim() || "Chưa chọn vị thuốc";
    const kwEl = document.getElementById('current-image-keyword');
    if (kwEl) kwEl.innerText = kw;

    const container = document.getElementById('image-links-container');
    if (container) {
        if (kw === "Chưa chọn vị thuốc") {
            container.innerHTML = `<div class="text-xs text-stone-400 italic">Vui lòng chọn dược liệu hoặc huyệt vị từ các tab trước để hiển thị liên kết tra cứu.</div>`;
        } else {
            const kwClean = kw.replace(/\(.*?\)/g, '').replace(/[^\w\sàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]/gi, ' ').trim();
            const suffix = kwClean.toLowerCase().includes('huyệt') ? ' huyệt vị YHCT' : ' vị thuốc YHCT';
            const q = encodeURIComponent(kwClean + suffix);

            const urlGoogle = `https://www.google.com/search?q=${q}&udm=2`;
            const urlDDG = `https://duckduckgo.com/?q=${q}&iax=images&ia=images`;
            const urlBing = `https://www.bing.com/images/search?q=${q}&form=HDRSC2`;

            container.innerHTML = `
                <button onclick="window.open('${urlDDG}', '_blank', 'noopener,noreferrer')" class="w-full py-3 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer">
                    <i class="fa-solid fa-shield-halved text-sm"></i> Mở trên DuckDuckGo
                </button>
                <button onclick="window.open('${urlGoogle}', '_blank', 'noopener,noreferrer')" class="w-full py-3 px-3 bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs rounded flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer">
                    <i class="fa-brands fa-google text-sm"></i> Mở ảnh trên Google
                </button>
                <button onclick="window.open('${urlBing}', '_blank', 'noopener,noreferrer')" class="w-full py-3 px-3 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer">
                    <i class="fa-solid fa-magnifying-glass text-sm"></i> Mở trên Bing
                </button>
            `;
        }
    }

    switchTab('xemanh');
}

function quayLaiCauHinhQuiz() {
    document.getElementById('quiz-result').classList.add('hidden');
    document.getElementById('quiz-review').classList.add('hidden');
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
        
        const yourChoiceText = ans.lua_chon_cua_ban !== undefined ? ans.lua_chon[ans.lua_chon_cua_ban] : "Chưa trả lời";
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

window.onload = function() {
    setTimeout(() => {
        if (typeof duocLieuData !== 'undefined' && duocLieuData && Array.isArray(duocLieuData)) {
            const nhomDL = [...new Set(duocLieuData.map(d => d.nhom).filter(Boolean))];
            const selectDL = document.getElementById('filterNhomDuocLieu');
            if (selectDL) {
                selectDL.innerHTML = '<option value="">-- Tất cả nhóm dược --</option>';
                nhomDL.forEach(n => { let opt = document.createElement('option'); opt.value = n; opt.innerText = n; selectDL.appendChild(opt); });
            }
        }
        
        if (typeof huyetViData !== 'undefined' && huyetViData && Array.isArray(huyetViData)) {
            const heKinhLac = [...new Set(huyetViData.map(h => h.kinh).filter(Boolean))];
            const selectHL = document.getElementById('filterKinhLac');
            if (selectHL) {
                selectHL.innerHTML = '<option value="">-- Tất cả hệ thống kinh mạch --</option>';
                heKinhLac.forEach(k => { let opt = document.createElement('option'); opt.value = k; opt.innerText = k; selectHL.appendChild(opt); });
            }
        }

        if (typeof traData !== 'undefined' && traData && Array.isArray(traData)) {
            const nhomTra = [...new Set(traData.map(t => t.nhom).filter(Boolean))];
            const selectTra = document.getElementById('filterNhomTra');
            if (selectTra) {
                selectTra.innerHTML = '<option value="">-- Tất cả nhóm công dụng --</option>';
                nhomTra.forEach(n => { let opt = document.createElement('option'); opt.value = n; opt.innerText = n; selectTra.appendChild(opt); });
            }
        }
        updateLuanTri();
    }, 20);
};

function startQuizMode() {
    if (typeof database === 'undefined' || !database) return;
    quizActive = true;
    
    const boLoc = document.getElementById('bo-loc-tam-truc');
    if (boLoc) boLoc.classList.add('blur-sm', 'pointer-events-none', 'opacity-40');
    const input = document.getElementById('search-input');
    if (input) {
        input.classList.add('blur-sm', 'pointer-events-none', 'opacity-40');
        input.disabled = true;
    }
    
    const controls = document.getElementById('quiz-controls');
    if (controls) {
        controls.innerHTML = `
            <button onclick="loadRandomCase()" class="flex-1 px-4 py-3 bg-purple-900 hover:bg-purple-800 text-purple-300 border border-purple-700 font-bold rounded flex items-center justify-center gap-2 transition-all">
                <i class="fa-solid fa-shuffle"></i> Ca Tiếp Theo
            </button>
            <button onclick="stopQuizMode()" class="flex-1 px-4 py-3 bg-stone-800 hover:bg-stone-700 text-stone-400 border border-stone-700 font-bold rounded flex items-center justify-center gap-2 transition-all">
                <i class="fa-solid fa-xmark"></i> Thoát
            </button>
        `;
    }
    loadRandomCase();
}

function loadRandomCase() {
    if (!quizActive || typeof database === 'undefined' || !database) return;
    const keys = Object.keys(database);
    if (keys.length === 0) return;
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const data = database[randomKey];
    if (data) {
        const parts = randomKey.split('_');
        if (parts.length === 3) {
            const tp = document.getElementById('tang-phu');
            const hn = document.getElementById('han-nhiet');
            const ht = document.getElementById('hu-thuc');
            if (tp) tp.value = parts[0];
            if (hn) hn.value = parts[1];
            if (ht) ht.value = parts[2];
        }
        const hcEl = document.getElementById('hoi-chung');
        const pdtEl = document.getElementById('phap-dieu-tri');
        const btEl = document.getElementById('bai-thuoc');
        if (hcEl) hcEl.innerText = data.hc || "Chưa rõ hội chứng";
        if (pdtEl) pdtEl.innerText = data.pdt || "Chưa rõ pháp trị";
        if (btEl) btEl.innerText = data.bt || "Chưa rõ cổ phương";

        const ul = document.getElementById('trieu-chung'); 
        if (ul) {
            ul.innerHTML = "";
            if (data.tc && Array.isArray(data.tc)) {
                const frag = document.createDocumentFragment();
                data.tc.forEach(t => { let li = document.createElement('li'); li.innerText = t; frag.appendChild(li); });
                ul.appendChild(frag);
            }
        }
        const divBt = document.getElementById('chi-tiet-bai-thuoc'); 
        if (divBt) {
            divBt.innerHTML = "";
            if (data.tpbt && Array.isArray(data.tpbt)) {
                const frag = document.createDocumentFragment();
                data.tpbt.forEach(v => {
                    let b = document.createElement('button');
                    b.className = "px-2.5 py-1 text-xs bg-stone-800 text-amber-400 border border-stone-700 rounded transition-all font-medium";
                    b.innerHTML = `<i class="fa-solid fa-leaf text-[10px] mr-1 text-emerald-500"></i>${v}`;
                    b.onclick = () => xemDuocLieu(v); frag.appendChild(b);
                });
                divBt.appendChild(frag);
            }
        }
        
        const boLoc = document.getElementById('bo-loc-tam-truc');
        if (boLoc) boLoc.classList.add('blur-sm', 'pointer-events-none', 'opacity-40');
        if (hcEl) hcEl.className = "text-xl font-bold text-primary transition-all blur-sm select-none cursor-pointer";
        if (pdtEl) pdtEl.className = "text-base font-semibold text-emerald-500 transition-all blur-sm select-none cursor-pointer";
        if (btEl) btEl.className = "text-lg font-bold text-amber-500 transition-all blur-sm select-none cursor-pointer";
        const chiTietBT = document.getElementById('chi-tiet-bai-thuoc');
        if (chiTietBT) chiTietBT.className = "flex flex-wrap gap-2 transition-all blur-sm select-none";
        
        const revealAction = () => {
            if (hcEl) hcEl.classList.remove('blur-sm', 'select-none');
            if (pdtEl) pdtEl.classList.remove('blur-sm', 'select-none');
            if (btEl) btEl.classList.remove('blur-sm', 'select-none');
            if (chiTietBT) chiTietBT.classList.remove('blur-sm', 'select-none');
            if (boLoc) boLoc.classList.remove('blur-sm', 'opacity-40');
        };
        if (hcEl) hcEl.onclick = revealAction;
        if (pdtEl) pdtEl.onclick = revealAction;
        if (btEl) btEl.onclick = revealAction;
    }
}

function stopQuizMode() {
    quizActive = false;
    const boLoc = document.getElementById('bo-loc-tam-truc');
    if (boLoc) boLoc.classList.remove('blur-sm', 'pointer-events-none', 'opacity-40');
    const input = document.getElementById('search-input');
    if (input) {
        input.classList.remove('blur-sm', 'pointer-events-none', 'opacity-40');
        input.disabled = false;
    }
    
    const controls = document.getElementById('quiz-controls');
    if (controls) {
        controls.innerHTML = `
            <button onclick="startQuizMode()" class="w-full px-4 py-2 bg-stone-800 hover:bg-stone-700 text-amber-500 border border-stone-700 font-bold rounded flex items-center justify-center gap-2 transition-all">
                <i class="fa-solid fa-graduation-cap"></i> Chế độ Ôn Tập
            </button>
        `;
    }
    const hcEl = document.getElementById('hoi-chung');
    const pdtEl = document.getElementById('phap-dieu-tri');
    const btEl = document.getElementById('bai-thuoc');
    const chiTietBT = document.getElementById('chi-tiet-bai-thuoc');
    if (hcEl) { hcEl.className = "text-xl font-bold text-primary transition-all"; hcEl.onclick = null; }
    if (pdtEl) { pdtEl.className = "text-base font-semibold text-emerald-500 transition-all"; pdtEl.onclick = null; }
    if (btEl) { btEl.className = "text-lg font-bold text-amber-500 transition-all"; btEl.onclick = null; }
    if (chiTietBT) chiTietBT.className = "flex flex-wrap gap-2 transition-all";
    updateLuanTri();
}

function highlightText(text, query) {
    if (!query || !text) return escapeHTML(text);
    const safeText = String(text);
    const safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${safeQuery})`, 'gi');
    
    const parts = safeText.split(regex);
    return parts.map((part, i) => {
        if (i % 2 === 1) {
            return `<mark class="bg-amber-500/30 text-amber-300 font-bold px-0.5 rounded">${escapeHTML(part)}</mark>`;
        }
        return escapeHTML(part);
    }).join('');
}

function removeAccents(str) {
    return (str || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function getItemTamTruc(item) {
    if (!item) return { tp: '', hn: '', ht: '', bc: '' };
    
    const pl = Array.isArray(item.phanloai) ? item.phanloai : [];
    const title = removeAccents(item.hc || '');
    const pTP = removeAccents(pl[0] || title);
    const pHN = removeAccents(pl[1] || item.han_nhiet || title);
    const pHT = removeAccents(pl[2] || item.hu_thuc || title);
    const pBC = removeAccents(pl[3] || title);

    let tp = '';
    if (pTP.includes('tam tieu')) tp = 'Tam_Tieu';
    else if (pTP.includes('dai truong')) tp = 'Dai_Truong';
    else if (pTP.includes('tieu truong')) tp = 'Tieu_Truong';
    else if (pTP.includes('bang quang')) tp = 'Bang_Quang';
    else if (pTP.includes('can')) tp = 'Can';
    else if (pTP.includes('tam')) tp = 'Tam';
    else if (pTP.includes('ty')) tp = 'Ty';
    else if (pTP.includes('phe')) tp = 'Phe';
    else if (pTP.includes('than')) tp = 'Than';
    else if (pTP.includes('dom')) tp = 'Dom';
    else if (pTP.includes('vi')) tp = 'Vi';

    let hn = 'Binh';
    if (pHN.includes('hiep tap')) hn = 'Han nhiet hiep tap';
    else if (pHN.includes('nhiet') || pHN.includes('hoa')) hn = 'Nhiet';
    else if (pHN.includes('han') || pHN.includes('lanh')) hn = 'Han';
    else if (pHN.includes('binh')) hn = 'Binh';

    let ht = 'Thuc';
    if (pHT.includes('hiep tap')) ht = 'Hu thuc hiep tap';
    else if (pHT.includes('hu') || pHT.includes('suy')) ht = 'Hu';
    else if (pHT.includes('thuc')) ht = 'Thuc';

    let bc = '';
    if (pBC.includes('thap nhiet')) bc = 'thap nhiet';
    else if (pBC.includes('khi') || pBC.includes('uat') || pBC.includes('tre')) bc = 'khi';
    else if (pBC.includes('huyet') || pBC.includes('u')) bc = 'huyet u';
    else if (pBC.includes('dam') || pBC.includes('thap')) bc = 'dam';
    else if (pBC.includes('hoa')) bc = 'hoa';

    return { tp, hn, ht, bc };
}

function syncSelectsWithItem(item) {
    const tp = document.getElementById('tang-phu');
    const hn = document.getElementById('han-nhiet');
    const ht = document.getElementById('hu-thuc');
    const bc = document.getElementById('benh-co');

    if (!item) {
        if (tp) tp.value = '';
        if (hn) hn.value = '';
        if (ht) ht.value = '';
        if (bc) bc.value = '';
        return;
    }

    const info = getItemTamTruc(item);
    if (tp) tp.value = info.tp;
    if (hn) hn.value = info.hn;
    if (ht) ht.value = info.ht;
    if (bc) bc.value = info.bc;
}

function renderDetailLuanTri(data, query = "", isEnter = false) {
    const hcEl = document.getElementById('hoi-chung');
    const pdtEl = document.getElementById('phap-dieu-tri');
    const btEl = document.getElementById('bai-thuoc');
    const ul = document.getElementById('trieu-chung');
    const divBt = document.getElementById('chi-tiet-bai-thuoc');

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
    } else {
        if (query && isEnter) xuLyKhongTimThay('Luận Trị', query);

        const msg = (query && isEnter)
            ? `<i class='fa-solid fa-paper-plane text-[10px]'></i> Đã tự động ghi nhận từ khóa "${escapeHTML(query)}" để bổ sung dữ liệu.`
            : (query ? `<i class='fa-solid fa-keyboard text-[10px]'></i> Nhấn <kbd class="px-1 py-0.5 bg-stone-800 border border-stone-700 rounded text-amber-400 font-mono">Enter</kbd> để gửi từ khóa "${escapeHTML(query)}".` : '');

        if (hcEl) hcEl.innerHTML = "<span class='text-stone-500 font-normal text-base'><i class='fa-solid fa-circle-exclamation mr-1 text-amber-500'></i>Không tìm thấy hội chứng phù hợp</span>";
        if (pdtEl) pdtEl.innerText = "---";
        if (btEl) btEl.innerText = "---";
        if (ul) ul.innerHTML = `<li class='text-amber-500/80 italic text-xs col-span-full flex items-center gap-1.5'>${msg}</li>`;
        if (divBt) divBt.innerHTML = "";
        
        syncSelectsWithItem(null);
    }
} 

function updateLuanTri(query = "") {
    if (quizActive || typeof database === 'undefined' || !database) return;

    const tp = getVal('tang-phu');
    const hn = getVal('han-nhiet');
    const ht = getVal('hu-thuc');
    const bc = getVal('benh-co');
    const searchInput = getVal('search-input').toLowerCase().trim();
    const activeQuery = query || searchInput;

    let bestMatchData = null;

    if (!tp && !hn && !ht && !bc && !activeQuery) {
        bestMatchData = Object.values(database)[0] || null;
        if (bestMatchData) syncSelectsWithItem(bestMatchData);
    } else {
        for (let key in database) {
            const item = database[key];
            if (!item) continue;

            const info = getItemTamTruc(item);

            const matchTP = !tp || info.tp === tp;
            const matchHN = !hn || info.hn === hn;
            const matchHT = !ht || info.ht === ht;
            const matchBC = !bc || info.bc === bc;

            let matchSearch = true;
            if (activeQuery) {
                const matchHC = (item.hc || '').toLowerCase().includes(activeQuery);
                const matchTC = (item.tc || []).some(t => (t || '').toLowerCase().includes(activeQuery));
                const matchBT = (item.bt || '').toLowerCase().includes(activeQuery);
                const matchTPBT = (item.tpbt || []).some(v => (v || '').toLowerCase().includes(activeQuery));
                matchSearch = matchHC || matchTC || matchBT || matchTPBT;
            }

            if (matchTP && matchHN && matchHT && matchBC && matchSearch) {
                bestMatchData = item;
                break;
            }
        }
    }

    renderDetailLuanTri(bestMatchData, activeQuery);
}

// Kết nối tính năng Chẩn đoán thông minh khi ấn Enter tìm kiếm Luận trị
function searchLuanTri(isEnter = false) {
    if (quizActive) stopQuizMode();

    const input = document.getElementById('search-input');
    const dropdown = document.getElementById('search-dropdown');
    const query = (input ? input.value : '').toLowerCase().trim();

    if (!query) {
        if (dropdown) dropdown.classList.add('hidden');
        updateLuanTri();
        return;
    }

    const matches = [];
    for (let key in database) {
        const item = database[key];
        if (!item) continue;
        const matchHoiChung = (item.hc || '').toLowerCase().includes(query);
        const matchTrieuChung = (item.tc || []).some(t => (t || '').toLowerCase().includes(query));
        const matchBaiThuoc = (item.bt || '').toLowerCase().includes(query);
        const matchViThuoc = (item.tpbt || []).some(v => (v || '').toLowerCase().includes(query));

        if (matchHoiChung || matchTrieuChung || matchBaiThuoc || matchViThuoc) {
            matches.push({ key, ...item });
            if (matches.length >= 30) break;
        }
    }

    if (dropdown) {
        if (matches.length > 0) {
            dropdown.innerHTML = matches.map(m => `
                <div onclick="selectSearchResult('${m.key}')" class="p-2.5 hover:bg-stone-800 border-b border-stone-800/80 cursor-pointer transition-colors text-xs text-left">
                    <div class="font-bold text-amber-400">${highlightText(m.hc, query)}</div>
                    <div class="text-stone-400 text-[11px] truncate mt-0.5">${escapeHTML(m.tc ? m.tc.join(', ') : '')}</div>
                </div>
            `).join('');
            dropdown.classList.remove('hidden');
        } else {
            dropdown.innerHTML = `<div class="p-3 text-xs text-stone-500 text-center">Không tìm thấy hội chứng phù hợp</div>`;
            dropdown.classList.remove('hidden');
        }
    }

    if (matches.length > 1 && isEnter) {
        if (dropdown) dropdown.classList.add('hidden');
        batDauLuanTriThongMinh(query);
    } else if (matches.length > 0) {
        selectSearchResult(matches[0].key, false);
    } else {
        renderDetailLuanTri(null, query, isEnter);
    }
}

// ==========================================
// KHAI BÁO BIẾN & HÀM CHẨN ĐOÁN THÔNG MINH
// ==========================================

let currentDiagnosisSession = {
    step: 0,
    candidateList: [],
    targetHoiChung: null
};

function batDauLuanTriThongMinh(query) {
    if (typeof database === 'undefined' || !database) return;
    
    const matches = Object.keys(database).map(key => {
        const item = database[key];
        let score = 0;
        const q = query.toLowerCase();
        
        if ((item.hc || '').toLowerCase().includes(q)) score += 3;
        if ((item.tc || []).some(t => t.toLowerCase().includes(q))) score += 2;
        if ((item.pdt || '').toLowerCase().includes(q)) score += 1;
        
        return { key, ...item, score };
    }).filter(item => item.score > 0).sort((a, b) => b.score - a.score);

    if (matches.length <= 1) {
        if (matches.length === 1) selectSearchResult(matches[0].key, false);
        else renderDetailLuanTri(null, query, true);
        return;
    }

    currentDiagnosisSession = {
        step: 0,
        candidateList: matches.slice(0, 4),
        targetHoiChung: null
    };

    hienThiCauHoiPhanBieuLamSang();
}

function hienThiCauHoiPhanBieuLamSang() {
    const session = currentDiagnosisSession;
    const pdfArea = document.getElementById('pdf-area');
    if (!pdfArea) return;

    if (session.candidateList.length <= 1 || session.step >= 2) {
        const finalChoice = session.candidateList[0] || Object.values(database)[0];
        selectSearchResult(finalChoice.key, false);
        return;
    }

    const hc1 = session.candidateList[0];
    const hc2 = session.candidateList[1];

    const dacTrung1 = (hc1.tc && hc1.tc[0]) ? hc1.tc[0] : 'Triệu chứng đặc trưng';
    const dacTrung2 = (hc2.tc && hc2.tc[0]) ? hc2.tc[0] : 'Triệu chứng đặc trưng';

    pdfArea.innerHTML = `
        <div class="bg-dark-box p-6 rounded-lg border-2 border-amber-600/60 space-y-4 animate-fade-in">
            <div class="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <i class="fa-solid fa-stethoscope"></i> TRỢ LÝ LÂM SÀNG: HỎI THÊM ĐỂ CHỐT HỘI CHỨNG CHÍNH XÁC
            </div>
            <p class="text-xs text-stone-300 leading-relaxed">
                Hệ thống phát hiện các triệu chứng tương đồng giữa hai hội chứng. Vui lòng xác nhận triệu chứng thực tế của bệnh nhân để loại bỏ hội chứng thừa:
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button onclick="phanHoiLamSang(0)" class="p-3.5 bg-stone-900 hover:bg-stone-800 border border-stone-700 hover:border-amber-500 rounded-lg text-left text-xs space-y-1 transition-all cursor-pointer">
                    <div class="font-bold text-amber-400">👉 Hướng về: ${escapeHTML(hc1.hc)}</div>
                    <div class="text-stone-400 italic">Dấu hiệu nổi trội: "${escapeHTML(dacTrung1)}"</div>
                </button>
                <button onclick="phanHoiLamSang(1)" class="p-3.5 bg-stone-900 hover:bg-stone-800 border border-stone-700 hover:border-amber-500 rounded-lg text-left text-xs space-y-1 transition-all cursor-pointer">
                    <div class="font-bold text-amber-400">👉 Hướng về: ${escapeHTML(hc2.hc)}</div>
                    <div class="text-stone-400 italic">Dấu hiệu nổi trội: "${escapeHTML(dacTrung2)}"</div>
                </button>
            </div>
            <div class="text-right pt-1">
                <button onclick="huyBoChuanDoan()" class="text-[11px] text-stone-500 hover:text-stone-300 underline cursor-pointer">Bỏ qua, hiển thị toàn bộ kết quả</button>
            </div>
        </div>
    `;
}

function phanHoiLamSang(choiceIndex) {
    const session = currentDiagnosisSession;
    if (choiceIndex === 0) {
        session.candidateList.splice(1, 1);
    } else {
        const removed = session.candidateList.splice(1, 1);
        session.candidateList[0] = removed[0];
    }
    session.step++;
    hienThiCauHoiPhanBieuLamSang();
}

function selectSearchResult(key, hideDropdown = true) {
    const query = getVal('search-input').trim();
    if (typeof database === 'undefined' || !database || !database[key]) return;

    const item = database[key];
    renderDetailLuanTri(item, query);
    syncSelectsWithItem(item);

    if (hideDropdown) {
        const dropdown = document.getElementById('search-dropdown');
        if (dropdown) dropdown.classList.add('hidden');
    }
}

// Bổ sung hàm Hủy bỏ chẩn đoán phân biệt
function huyBoChuanDoan() {
    updateLuanTri();
}

function xuLyKhongTimThay(tabName, query) {
    if (!query || query.trim().length < 2) return;
    const cleanQuery = query.trim();
    const timeStr = new Date().toLocaleString('vi-VN');

    const params = new URLSearchParams();
    params.append('form-name', 'gop-y-yhct');
    params.append('hoten', 'Hệ thống tự động');
    params.append('email', 'system@luantriyhct.com');
    params.append('chude', `Từ khóa thiếu: ${tabName}`);
    params.append('noidung', `Từ khóa chưa có dữ liệu: "${cleanQuery}" (Thời gian: ${timeStr})`);

    fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString()
    }).catch(() => {});

    hienThongBaoGhiNhan(tabName, cleanQuery);
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
    
    requestAnimationFrame(() => {
        toast.classList.remove('-translate-y-2', 'opacity-0');
        toast.classList.add('translate-y-0', 'opacity-100');
    });

    setTimeout(() => {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('-translate-y-2', 'opacity-0');
    }, 3500);
}

function filterDuocLieu(isEnter = false) {
    if (typeof duocLieuData === 'undefined' || !duocLieuData) return;
    const txtRaw = getVal('searchDuocLieu').trim().normalize('NFC');
    const txt = txtRaw.toLowerCase();
    const group = getVal('filterNhomDuocLieu');
    const grid = document.getElementById('gridDuocLieu'); 
    if (!grid) return; 
    grid.innerHTML = "";
    
    const filteredData = duocLieuData.filter(d => {
        if (!d) return false;
        const nhom = d.nhom || '';
        if (group !== "" && nhom !== group) return false;
        if (!txt) return true;

        const ten = (d.ten || '').toLowerCase().normalize('NFC');
        const tenKhac = (d.ten_khac || '').toLowerCase().normalize('NFC');
        const congDung = (d.cong_dung || '').toLowerCase().normalize('NFC');

        return ten.includes(txt) || tenKhac.includes(txt) || congDung.includes(txt);
    });

    if (filteredData.length === 0) {
        if (txtRaw && isEnter) xuLyKhongTimThay('Dược Liệu', txtRaw);

        const feedbackMsg = (txtRaw && isEnter) 
            ? `<p class="text-xs text-amber-500/90 font-medium"><i class="fa-solid fa-paper-plane mr-1"></i>Đã tự động gửi phản hồi từ khóa "${escapeHTML(txtRaw)}" về hệ thống.</p>`
            : (txtRaw ? `<p class="text-xs text-stone-500 font-medium"><i class="fa-solid fa-keyboard mr-1"></i>Nhấn <kbd class="px-1 py-0.5 bg-stone-800 border border-stone-700 rounded text-amber-400 font-mono">Enter</kbd> để gửi từ khóa "${escapeHTML(txtRaw)}" về hệ thống.</p>` : '');

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

        const blurDL = typeof isQuizDL !== 'undefined' && isQuizDL ? 'blur-md transition-all duration-300' : '';

        card.innerHTML = `
            <div class="absolute top-0 right-0 bg-emerald-950 text-emerald-400 font-bold px-2 py-0.5 text-[10px] uppercase rounded-bl border-b border-l border-stone-800/60 tracking-wider">${escapeHTML(d.nhom || 'Dược liệu')}</div>
            <div class="mb-2">
                <span class="font-bold text-emerald-400 text-base inline-flex items-center gap-1.5 cursor-pointer hover:underline card-title-el">
                    <i class="fa-solid fa-leaf text-xs"></i> ${highlightText(d.ten || '', txtRaw)}
                </span>
            </div>
            <div class="blur-target ${blurDL} transition-all duration-300">
                <div>
                    <div class="text-stone-500 text-[10px] font-bold tracking-wider uppercase">CÔNG NĂNG CHỦ TRỊ:</div>
                    <p class="text-sm text-stone-300 leading-relaxed mt-0.5">${highlightText(d.cong_dung || '', txtRaw)}</p>
                </div>
                <div class="mt-2">
                    ${boxHTML}
                </div>
            </div>
        `;

        card.onclick = (e) => {
            const isTitle = e.target.closest('.card-title-el');
            const activeQuiz = typeof isQuizDL !== 'undefined' && isQuizDL;

            if (activeQuiz) {
                const blurEl = card.querySelector('.blur-target');
                if (blurEl) blurEl.classList.remove('blur-md');
                if (isTitle) {
                    kichHoatTimAnh(d.ten || '');
                }
            } else {
                if (isTitle) {
                    kichHoatTimAnh(d.ten || '');
                }
            }
        };

        frag.appendChild(card);
    });
    grid.appendChild(frag);
}

function filterHuyetVi(isEnter = false) {
    if (typeof huyetViData === 'undefined' || !huyetViData) return;
    const txt = getVal('searchHuyetVi').toLowerCase().trim();
    const kinh = getVal('filterKinhLac');
    const grid = document.getElementById('gridHuyetVi'); 
    if (!grid) return; 
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

    const filteredData = huyetViData.filter(h => {
        if (!h) return false;
        const matchTxt = (h.ten || '').toLowerCase().includes(txt) || 
                         (h.chu_tri || '').toLowerCase().includes(txt) || 
                         (h.vi_tri || '').toLowerCase().includes(txt) || 
                         (h.dinh_vi || '').toLowerCase().includes(txt);
        const matchKinh = (kinh === "" || h.kinh === kinh);
        return matchTxt && matchKinh;
    });

    if (filteredData.length === 0) {
        if (txt && isEnter) xuLyKhongTimThay('Huyệt Vị', txt);

        const feedbackMsg = (txt && isEnter) 
            ? `<p class="text-xs text-amber-500/90 font-medium"><i class="fa-solid fa-paper-plane mr-1"></i>Đã tự động gửi phản hồi từ khóa "${escapeHTML(txt)}" về hệ thống.</p>`
            : (txt ? `<p class="text-xs text-stone-500 font-medium"><i class="fa-solid fa-keyboard mr-1"></i>Nhấn <kbd class="px-1 py-0.5 bg-stone-800 border border-stone-700 rounded text-amber-400 font-mono">Enter</kbd> để gửi từ khóa "${escapeHTML(txt)}" về hệ thống.</p>` : '');

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
        
        const blurHV = typeof isQuizHV !== 'undefined' && isQuizHV ? 'blur-md transition-all duration-300' : '';

        card.innerHTML = `
            <div class="absolute top-0 right-0 ${theme.tag} font-bold px-2 py-0.5 text-[9px] uppercase rounded-bl border-b border-l border-stone-800/60">${escapeHTML(h.kinh || '')}</div>
            <div class="mb-2">
                <span class="font-bold ${theme.text} text-base inline-flex items-center gap-1.5 cursor-pointer hover:underline card-title-el">
                    <i class="fa-solid fa-circle-dot text-xs"></i> Huyệt ${highlightText(h.ten || '', txt)}
                </span>
            </div>
            <div class="blur-target ${blurHV} transition-all duration-300">
                <div>
                    <div class="text-stone-500 text-[10px] font-bold tracking-wider uppercase">ĐỊNH VỊ GIẢI PHẪU:</div>
                    <p class="text-xs text-stone-400 mt-0.5 leading-relaxed">${highlightText(h.vi_tri || h.dinh_vi || 'Đang cập nhật', txt)}</p>
                </div>
                <div class="${theme.bgBox} border p-2.5 rounded-md mt-1.5">
                    <div class="${theme.text} text-[10px] font-bold tracking-wider uppercase flex items-center gap-1">
                        <i class="fa-solid fa-kit-medical text-[9px]"></i> CHỦ TRỊ ĐẶC HIỆU:
                    </div>
                    <p class="text-sm ${theme.textLight} font-medium mt-0.5 leading-relaxed">${highlightText(h.chu_tri || '', txt)}</p>
                </div>
            </div>
        `;

        card.onclick = (e) => {
            const isTitle = e.target.closest('.card-title-el');
            const activeQuiz = typeof isQuizHV !== 'undefined' && isQuizHV;

            if (activeQuiz) {
                const blurEl = card.querySelector('.blur-target');
                if (blurEl) blurEl.classList.remove('blur-md');
                if (isTitle) {
                    kichHoatTimAnh('Huyệt ' + (h.ten || ''));
                }
            } else {
                if (isTitle) {
                    kichHoatTimAnh('Huyệt ' + (h.ten || ''));
                }
            }
        };

        frag.appendChild(card);
    });
    grid.appendChild(frag);
}

function filterTra(isEnter = false) {
    if (typeof traData === 'undefined' || !traData) return;
    let txt = getVal('searchTra').toLowerCase().trim();
    const nhom = getVal('filterNhomTra');
    const grid = document.getElementById('gridTra'); 
    if (!grid) return; 
    grid.innerHTML = "";

    let altTxt = txt;
    if (txt.includes('dành dành')) altTxt = 'chi tử';
    else if (txt.includes('chi tử')) altTxt = 'dành dành';

    const filteredData = traData.filter(t => {
        if (!t) return false;
        const matchTxt = (t.ten || '').toLowerCase().includes(txt) || 
                         (t.ten || '').toLowerCase().includes(altTxt) ||
                         (t.cong_dung || '').toLowerCase().includes(txt) ||
                         (t.cong_dung || '').toLowerCase().includes(altTxt) ||
                         (t.thanh_phan || []).some(tp => {
                             const tpLow = (tp || '').toLowerCase();
                             return tpLow.includes(txt) || tpLow.includes(altTxt);
                         });
        const matchNhom = (nhom === "" || t.nhom === nhom);
        return matchTxt && matchNhom;
    });

    if (filteredData.length === 0) {
        if (txt && isEnter) xuLyKhongTimThay('Trà Dược', txt);

        const feedbackMsg = (txt && isEnter) 
            ? `<p class="text-xs text-amber-500/90 font-medium"><i class="fa-solid fa-paper-plane mr-1"></i>Đã tự động gửi phản hồi từ khóa "${escapeHTML(txt)}" về hệ thống.</p>`
            : (txt ? `<p class="text-xs text-stone-500 font-medium"><i class="fa-solid fa-keyboard mr-1"></i>Nhấn <kbd class="px-1 py-0.5 bg-stone-800 border border-stone-700 rounded text-amber-400 font-mono">Enter</kbd> để gửi từ khóa "${escapeHTML(txt)}" về hệ thống.</p>` : '');

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
        
        const tagsHtml = (t.thanh_phan || []).map(tp => 
            `<button onclick="xemDuocLieu('${escapeHTML(tp)}')" class="bg-stone-800 text-amber-400/90 font-semibold text-xs px-2.5 py-1 rounded border border-stone-700/60 flex items-center gap-1 shadow-sm shadow-black/20 hover:border-amber-500 active:scale-95 transition-all">
                <i class="fa-solid fa-leaf text-[10px] text-emerald-500"></i> ${highlightText(tp, txt)}
            </button>`
        ).join(' ');

        card.innerHTML = `
            <div class="absolute top-0 right-0 bg-amber-950 text-amber-500 text-[10px] font-bold px-2 py-0.5 rounded-bl uppercase tracking-wider">${escapeHTML(t.nhom || '')}</div>
            <h3 class="font-bold text-amber-500 text-base">☕ ${highlightText(t.ten || '', txt)}</h3>
            <div>
                <div class="text-stone-500 text-[10px] font-bold tracking-wider uppercase">CÔNG DỤNG CHÍNH:</div>
                <p class="text-sm text-stone-300 leading-relaxed mt-0.5">${highlightText(t.cong_dung || '', txt)}</p>
            </div>
            <div class="bg-amber-950/30 border border-amber-900/50 p-2.5 rounded-md text-xs leading-relaxed">
                <div class="text-amber-500 text-[10px] font-bold tracking-wider uppercase flex items-center gap-1 mb-0.5">
                    <i class="fa-solid fa-lightbulb text-[9px]"></i> CÁCH PHA & DÙNG:
                </div>
                <p class="font-medium text-amber-200/90">${highlightText(t.cach_dung || '', txt)}</p>
            </div>
            <div class="space-y-1.5 pt-0.5">
                <div class="text-stone-500 text-[10px] font-bold tracking-wider uppercase flex items-center gap-1">
                    <i class="fa-solid fa-clipboard-list text-[9px]"></i> THÀNH PHẦN DƯỢC LIỆU:
                </div>
                <div class="flex flex-wrap gap-1.5">
                    ${tagsHtml}
                </div>
            </div>
        `;
        frag.appendChild(card);
    });
    grid.appendChild(frag);
}

// 1. Hàm nạp file JS động & Khởi tạo bộ lọc tự động
const loadedScripts = new Set();
function loadScript(src) {
    if (loadedScripts.has(src)) return Promise.resolve();
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => { 
            loadedScripts.add(src); 
            
            capNhatTongSoTracNghiem();

            // 👉 BỔ SUNG ĐOẠN NÀY: Cập nhật số đếm & hiển thị khi nạp xong luantridata.js
            if (src === 'luantridata.js' && typeof database !== 'undefined') {
                capNhatTongSoTrieuChung();
                updateLuanTri();
            }
            
            if (src === 'duoclieudata.js' && typeof duocLieuData !== 'undefined') {
                const elThuoc = document.getElementById('total-thuoc');
                if (elThuoc) elThuoc.innerText = duocLieuData.length;

                const selectDL = document.getElementById('filterNhomDuocLieu');
                if (selectDL && selectDL.options.length <= 1) {
                    const nhomDL = [...new Set(duocLieuData.map(d => d.nhom).filter(Boolean))];
                    selectDL.innerHTML = '<option value="">-- Tất cả nhóm dược --</option>';
                    nhomDL.forEach(n => { let opt = document.createElement('option'); opt.value = n; opt.innerText = n; selectDL.appendChild(opt); });
                }
            }

            if (src === 'huyetvidata.js' && typeof huyetViData !== 'undefined') {
                const elHuyet = document.getElementById('total-huyet');
                if (elHuyet) elHuyet.innerText = huyetViData.length;

                const selectHL = document.getElementById('filterKinhLac');
                if (selectHL && selectHL.options.length <= 1) {
                    const heKinhLac = [...new Set(huyetViData.map(h => h.kinh).filter(Boolean))];
                    selectHL.innerHTML = '<option value="">-- Tất cả hệ thống kinh mạch --</option>';
                    heKinhLac.forEach(k => { let opt = document.createElement('option'); opt.value = k; opt.innerText = k; selectHL.appendChild(opt); });
                }
            }

            if (src === 'tradata.js' && typeof traData !== 'undefined') {
                const elTra = document.getElementById('total-tra');
                if (elTra) elTra.innerText = traData.length;

                const selectTra = document.getElementById('filterNhomTra');
                if (selectTra && selectTra.options.length <= 1) {
                    const nhomTra = [...new Set(traData.map(t => t.nhom).filter(Boolean))];
                    selectTra.innerHTML = '<option value="">-- Tất cả nhóm công dụng --</option>';
                    nhomTra.forEach(n => { let opt = document.createElement('option'); opt.value = n; opt.innerText = n; selectTra.appendChild(opt); });
                }
            }

            resolve(); 
        };
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// 3. Chỉ nạp thư viện PDF khi người dùng bấm nút Xuất PDF
async function exportPDF() {
    await loadScript('html2pdf.bundle.min.js');
    
    const element = document.getElementById('pdf-area');
    if (typeof html2pdf === 'undefined') {
        alert('Đang tải bộ công cụ xuất PDF, vui lòng thử lại sau vài giây.');
        return;
    }

    const btn = document.querySelector('button[onclick="exportPDF()"]');
    const oldHtml = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Đang xuất PDF...';
    btn.classList.add('opacity-75', 'pointer-events-none');

    html2pdf().from(element).save('Phac-Do-YHCT.pdf').then(() => {
        btn.innerHTML = oldHtml;
        btn.classList.remove('opacity-75', 'pointer-events-none');
    });
}

function formatAIMessage(text) {
    if (!text) return '';
    let safe = escapeHTML(text);
    safe = safe.replace(/\*\*(.*?)\*\*/g, '<strong class="text-amber-400 font-bold">$1</strong>');

    const lines = safe.split('\n');
    const formattedLines = lines.map(line => {
        const trimmed = line.trim();
        if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
            return `<li class="ml-4 list-disc text-stone-300 my-1">${trimmed.substring(2)}</li>`;
        }
        if (/^\d+\.\s/.test(trimmed)) {
            return `<div class="font-bold text-amber-300 mt-2.5 mb-1 flex items-center gap-1">${trimmed}</div>`;
        }
        if (trimmed.includes('⚠️') || trimmed.toLowerCase().includes('lưu ý') || trimmed.toLowerCase().includes('cấp cứu')) {
            return `<div class="bg-amber-950/50 border-l-4 border-amber-500 p-2.5 my-2 rounded-r text-amber-200 text-xs leading-relaxed">${trimmed}</div>`;
        }
        if (trimmed === '') return '<div class="h-2"></div>';
        return `<p class="my-1 leading-relaxed text-stone-300">${trimmed}</p>`;
    });

    return formattedLines.join('');
}

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
        </div>
    `;
    inputEl.value = '';

    const loadingId = 'ai-loading-' + Date.now();
    chatBox.innerHTML += `
        <div id="${loadingId}" class="bg-stone-900/90 p-3 rounded-lg border border-stone-800 text-stone-400 flex items-center gap-2.5 animate-pulse text-xs">
            <i class="fa-solid fa-brain text-amber-500 animate-spin text-sm"></i>
            <span>Trợ lý AI YHCT đang suy nghĩ & phân tích phác đồ...</span>
        </div>
    `;
    chatBox.scrollTop = chatBox.scrollHeight;

    if (btnSend) {
        btnSend.disabled = true;
        btnSend.classList.add('opacity-50', 'pointer-events-none');
    }

    try {
        const res = await fetch('/.netlify/functions/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: query })
        });
        const data = await res.json();

        const loadingEl = document.getElementById(loadingId);
        if (loadingEl) loadingEl.remove();

        if (!res.ok) {
            const safeErr = escapeHTML(data.error || 'Lỗi hệ thống');
            chatBox.innerHTML += `
                <div class="bg-red-950/40 p-3 rounded-lg border border-red-800 text-red-300 text-xs">
                    <i class="fa-solid fa-triangle-exclamation mr-1"></i> ${safeErr}
                </div>
            `;
        } else {
            const formattedReply = formatAIMessage(data.reply || 'Không có phản hồi từ AI.');
            chatBox.innerHTML += `
                <div class="bg-stone-900 p-3.5 rounded-lg border border-stone-800 text-stone-300 space-y-1 shadow-inner">
                    <div class="font-bold text-amber-500 flex items-center gap-1.5 mb-2 pb-1.5 border-b border-stone-800">
                        <i class="fa-solid fa-robot"></i> Trợ Lý AI YHCT
                    </div>
                    <div class="text-xs leading-relaxed space-y-1">${formattedReply}</div>
                </div>
            `;
        }
    } catch (err) {
        const loadingEl = document.getElementById(loadingId);
        if (loadingEl) loadingEl.remove();
        chatBox.innerHTML += `
            <div class="bg-red-950/40 p-3 rounded-lg border border-red-800 text-red-300 text-xs">
                <i class="fa-solid fa-plug-circle-xmark mr-1"></i> Lỗi kết nối máy chủ AI. Vui lòng thử lại.
            </div>
        `;
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
    const tabsOrder = ['luantri', 'tracnghiem', 'duoclieu', 'huyetvi', 'tra', 'xemanh', 'ai'];
    const pascalMap = { luantri: 'LuanTri', tracnghiem: 'TracNghiem', duoclieu: 'DuocLieu', huyetvi: 'HuyetVi', tra: 'Tra', xemanh: 'XemAnh', ai: 'AI' };
    
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

document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && e.target.tagName === 'INPUT') {
        e.target.blur();
    }
});
