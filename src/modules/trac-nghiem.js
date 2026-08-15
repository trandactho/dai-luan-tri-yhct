// --- QUẢN LÝ HỆ THỐNG TRẮC NGHIỆM YHCT ---
let quizTimerInterval = null;
let quizTimeRemaining = 30;
let isTimerEnabled = false;
let timePerQuestion = 30;

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

let currentQuizQuestions = [];
let currentQuizIndex = 0;
let quizScore = 0;
let userAnswers = [];

function capNhatDiemGanNhat() {
    let history = [];
    try {
        history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
        if (!Array.isArray(history)) history = [];
    } catch (e) {
        history = [];
    }
    
    const el = document.getElementById('quiz-last-score');
    if (el && history.length > 0) {
        el.innerHTML = `⏱️ Lần gần nhất (${history[0].date}): <strong class="text-amber-400">${history[0].score}</strong> (${history[0].percent})`;
    }
}

function taoCauHoiTamTuDuLieu(category) {
    let generated = [];
    const getRandomWrongOptions = (sourceArray, correctValue, count) => {
        const wrongOptions = [];
        const maxTries = count * 5;
        let tries = 0;
        while (wrongOptions.length < count && tries < maxTries) {
            const randomVal = sourceArray[Math.floor(Math.random() * sourceArray.length)];
            if (randomVal !== correctValue && !wrongOptions.includes(randomVal)) {
                wrongOptions.push(randomVal);
            }
            tries++;
        }
        return wrongOptions;
    };

    if ((category === 'luantri' || category === 'all') && typeof database !== 'undefined') {
        const allHC = Object.values(database).map(d => d.hc).filter(Boolean);
        Object.keys(database).forEach(key => {
            const item = database[key];
            if (item && item.hc && item.tc && item.tc.length > 0) {
                const wrongOptions = getRandomWrongOptions(allHC, item.hc, 3);
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
        const allCongDung = duocLieuData.map(item => item.cong_dung).filter(Boolean);
        duocLieuData.forEach(d => {
            if (d && d.ten && d.cong_dung) {
                const wrongOptions = getRandomWrongOptions(allCongDung, d.cong_dung, 3);
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
        const allChuTri = huyetViData.map(item => item.chu_tri).filter(Boolean);
        huyetViData.forEach(h => {
            if (h && h.ten && h.chu_tri) {
                const wrongOptions = getRandomWrongOptions(allChuTri, h.chu_tri, 3);
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
    if ((category === 'duocthien' || category === 'all') && typeof duocThienData !== 'undefined' && Array.isArray(duocThienData)) {
        const allCongDungDuocThien = duocThienData.map(item => item.cong_dung).filter(Boolean);
        duocThienData.forEach(t => {
            if (t && t.ten && t.cong_dung) {
                const wrongOptions = getRandomWrongOptions(allCongDungDuocThien, t.cong_dung, 3);
                if (wrongOptions.length >= 3) {
                    const options = [t.cong_dung, ...wrongOptions].sort(() => 0.5 - Math.random());
                    generated.push({
                        category: 'duocthien',
                        cau_hoi: `Món dược thiện "${t.ten}" có công năng chủ trị chính là gì?`,
                        lua_chon: options,
                        dap_an: options.indexOf(t.cong_dung),
                        giai_thich: `Công năng chuẩn: ${t.cong_dung}`
                    });
                }
            }
        });
    }
    if ((category === 'tra' || category === 'all') && typeof traData !== 'undefined' && Array.isArray(traData)) {
        const allCongDungTra = traData.map(item => item.cong_dung).filter(Boolean);
        traData.forEach(t => {
            if (t && t.ten && t.cong_dung) {
                const wrongOptions = getRandomWrongOptions(allCongDungTra, t.cong_dung, 3);
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

async function fetchAIQuizQuestions(category, count) {
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
            body: JSON.stringify({ prompt, source: 'quiz', max_tokens: 800 })
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

function toggleAiQuizCountLock(checkboxEl) {
    const countSelect = document.getElementById('quiz-count');
    if (!countSelect) return;

    if (checkboxEl.checked) {
        countSelect.value = "5";
        countSelect.disabled = true;
        countSelect.classList.add('opacity-50', 'cursor-not-allowed');
    } else {
        countSelect.disabled = false;
        countSelect.classList.remove('opacity-50', 'cursor-not-allowed');
    }
}

async function batDauTracNghiem() {
    const categorySelect = document.getElementById('quiz-category');
    const countSelect = document.getElementById('quiz-count');
    const useAICheckbox = document.getElementById('use-ai-quiz');
    const useTimerCheckbox = document.getElementById('use-quiz-timer');
    const timeSelect = document.getElementById('quiz-time-per-question');
    
    // Thêm giá trị mặc định an toàn nếu Element chưa xuất hiện trên DOM
    const category = categorySelect ? categorySelect.value : 'all';
    const count = countSelect ? (parseInt(countSelect.value) || 10) : 10;
    const isUseAI = useAICheckbox ? useAICheckbox.checked : false;
    
    isTimerEnabled = useTimerCheckbox ? useTimerCheckbox.checked : false;
    timePerQuestion = timeSelect ? parseInt(timeSelect.value) : 30;

    const btnStart = document.activeElement;
    const oldBtnText = btnStart?.innerHTML;
    if (isUseAI && btnStart && btnStart.tagName === 'BUTTON') {
        btnStart.disabled = true;
        btnStart.innerHTML = `<i class="fa-solid fa-spinner fa-spin mr-1"></i> AI đang tạo...`;
    }

    let pool = [];
    if (isUseAI) {
        pool = await fetchAIQuizQuestions(category, count);

        if (pool && pool.length > 0) {
            if (typeof questionsData === 'undefined') window.questionsData = [];
            
            let customQuestions = JSON.parse(localStorage.getItem('custom_questionsData') || '[]');
            
            pool.forEach(q => {
                if (!q.category) q.category = category;
                q.isAiGenerated = true;

                if (!questionsData.some(exist => exist.cau_hoi === q.cau_hoi)) {
                    questionsData.unshift(q);
                }
                if (!customQuestions.some(exist => exist.cau_hoi === q.cau_hoi)) {
                    customQuestions.unshift(q);
                }
            });

            if (customQuestions.length > 50) {
                customQuestions = customQuestions.slice(0, 50);
            }
            try {
                localStorage.setItem('custom_questionsData', JSON.stringify(customQuestions));
            } catch (e) {
                console.warn("Lỗi lưu câu hỏi AI vào localStorage:", e);
            }
            
            capNhatTongSoTracNghiem();
        }
    }

    if (isUseAI && btnStart && btnStart.tagName === 'BUTTON') {
        btnStart.disabled = false;
        btnStart.innerHTML = oldBtnText;
    }

    if (!pool || pool.length === 0) {
        if (isUseAI) {
            alert('AI đang bận. Hệ thống quay lại câu hỏi có sẵn.');
        }

        let rawData = [];
        if (typeof questionsData !== 'undefined' && Array.isArray(questionsData)) {
            rawData = [...questionsData];
        } else if (Array.isArray(window.questionsData)) {
            rawData = [...window.questionsData];
        }

        rawData = rawData.concat(taoCauHoiTamTuDuLieu(category));
        pool = category === 'all' ? rawData : rawData.filter(q => q && q.category === category);
    }

    if (pool.length === 0) {
        alert('Không tìm thấy câu hỏi phù hợp.');
        return;
    }

    let selectedQuestions = [];
    let poolCopy = [...pool];
    let actualCount = Math.min(count, poolCopy.length);

    for (let i = 0; i < actualCount; i++) {
        let randomIndex = Math.floor(Math.random() * poolCopy.length);
        selectedQuestions.push(poolCopy[randomIndex]);
        poolCopy[randomIndex] = poolCopy[poolCopy.length - 1];
        poolCopy.pop();
    }

    currentQuizQuestions = selectedQuestions.map(q => {
        const specialKeywords = ['cả a và b', 'tất cả', 'không có', 'cả hai', 'đều đúng', 'đều sai'];
        const hasSpecialOpt = q.lua_chon && q.lua_chon.some(text => 
            specialKeywords.some(keyword => text.toLowerCase().includes(keyword))
        );

        if (hasSpecialOpt) return { ...q };

        const shuffled = q.lua_chon
            .map((text, idx) => ({ text, isCorrect: idx === q.dap_an }))
            .sort(() => 0.5 - Math.random());

        return {
            ...q,
            lua_chon: shuffled.map(item => item.text),
            dap_an: shuffled.findIndex(item => item.isCorrect)
        };
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

function updateTimerDisplay() {
    const progressEl = document.getElementById('quiz-progress');
    if (progressEl) {
        const total = currentQuizQuestions.length;
        const timerColor = quizTimeRemaining <= 5 ? 'text-red-400 animate-pulse font-bold' : 'text-amber-400';
        progressEl.innerHTML = `<i class="fa-solid fa-fire text-amber-500"></i> Câu ${currentQuizIndex + 1}/${total} <span class="ml-3 ${timerColor}"><i class="fa-solid fa-stopwatch"></i> ${quizTimeRemaining}s</span>`;
    }
}

function clearQuizTimer() {
    if (quizTimerInterval) {
        clearInterval(quizTimerInterval);
        quizTimerInterval = null;
    }
}

function hienThiCauHoiTracNghiem() {
    if (currentQuizIndex >= currentQuizQuestions.length) {
        hienThiKetQuaTracNghiem();
        return;
    }

    if (quizTimerInterval) {
        clearInterval(quizTimerInterval);
        quizTimerInterval = null;
    }

    const oldFeedback = document.getElementById('quiz-feedback-box');
    if (oldFeedback) oldFeedback.remove();

    const q = currentQuizQuestions[currentQuizIndex];
    const total = currentQuizQuestions.length;

    document.getElementById('quiz-score-live').innerHTML = `<i class="fa-solid fa-star text-amber-400 mr-1"></i> Điểm: ${quizScore}`;
    
    const qEl = document.getElementById('quiz-question');
    if (qEl) {
        qEl.className = "bg-stone-900/90 border border-stone-800 p-2.5 rounded-xl text-xs sm:text-sm leading-relaxed text-stone-200 shadow-md";
        qEl.innerText = q.cau_hoi;
    }

    if (isTimerEnabled) {
        quizTimeRemaining = timePerQuestion;
        updateTimerDisplay();
        quizTimerInterval = setInterval(() => {
            quizTimeRemaining--;
            updateTimerDisplay();
            if (quizTimeRemaining <= 0) {
                if (quizTimerInterval) {
                    clearInterval(quizTimerInterval);
                    quizTimerInterval = null;
                }
                chonDapAnTracNghiem(-1, true);
            }
        }, 1000);
    } else {
        document.getElementById('quiz-progress').innerHTML = `<i class="fa-solid fa-fire text-amber-500"></i> Câu ${currentQuizIndex + 1}/${total}`;
    }

    const progressBar = document.getElementById('quiz-progress-bar');
    if (progressBar) {
        const percent = ((currentQuizIndex) / total) * 100;
        progressBar.style.width = `${percent}%`;
    }

    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = "";

    q.lua_chon.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = "w-full p-2.5 text-left bg-stone-900/90 hover:bg-stone-800 border border-stone-800 hover:border-amber-500/50 rounded-xl text-xs text-stone-200 transition-all duration-200 flex items-center gap-2.5 shadow-sm cursor-pointer group";
        btn.innerHTML = `
            <span class="w-5 h-5 rounded-md bg-stone-800 group-hover:bg-amber-600 group-hover:text-white flex items-center justify-center text-[11px] font-bold text-amber-400 transition-colors shadow-sm flex-shrink-0">
                ${String.fromCharCode(65 + idx)}
            </span> 
            <span class="leading-relaxed font-medium text-xs">${escapeHTML(opt)}</span>
        `;
        btn.onclick = () => chonDapAnTracNghiem(idx, false);
        optionsContainer.appendChild(btn);
    });
}

function chonDapAnTracNghiem(selectedIndex, isTimeout = false) {
    if (quizTimerInterval) {
        clearInterval(quizTimerInterval);
        quizTimerInterval = null;
    }

    const q = currentQuizQuestions[currentQuizIndex];
    const isCorrect = !isTimeout && (selectedIndex === q.dap_an);
    
    if (isCorrect) quizScore++;

    userAnswers.push({
        cau_hoi: q.cau_hoi,
        lua_chon: q.lua_chon,
        dap_an_dung: q.dap_an,
        lua_chon_cua_ban: isTimeout ? undefined : selectedIndex,
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
        } else if (i === selectedIndex && !isCorrect && !isTimeout) {
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

    if (isTimeout) {
        feedbackDiv.className = "mt-2 p-2.5 rounded-lg border border-amber-800 bg-amber-950/40 text-xs space-y-1.5 animate-fade-in";
        feedbackDiv.innerHTML = `
            <div class="font-bold text-amber-400 flex items-center gap-1.5 text-xs">
                <i class="fa-solid fa-clock-rotate-left"></i> Hết thời gian!
            </div>
            <div class="text-stone-300 italic text-[11px] leading-snug">💡 ${escapeHTML(q.giai_thich || 'Đã quá thời gian trả lời.')}</div>
            <button onclick="chuyenCauTiepTheo()" class="mt-1.5 w-full py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded transition-all flex items-center justify-center gap-2 cursor-pointer text-xs">
                Câu tiếp theo <i class="fa-solid fa-arrow-right"></i>
            </button>
        `;
    } else if (isCorrect) {
        feedbackDiv.className = "mt-2 p-2.5 rounded-lg border border-emerald-800 bg-emerald-950/40 text-xs space-y-1.5 animate-fade-in";
        feedbackDiv.innerHTML = `
            <div class="font-bold text-emerald-400 flex items-center gap-1.5 text-xs">
                <i class="fa-solid fa-circle-check"></i> Chính xác!
            </div>
            <div class="text-stone-300 italic text-[11px] leading-snug">💡 ${escapeHTML(q.giai_thich || 'Đã ghi nhận đáp án đúng.')}</div>
            <button onclick="chuyenCauTiepTheo()" class="mt-1.5 w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded transition-all flex items-center justify-center gap-2 cursor-pointer text-xs">
                Câu tiếp theo <i class="fa-solid fa-arrow-right"></i>
            </button>
        `;
    } else {
        feedbackDiv.className = "mt-2 p-2.5 rounded-lg border border-red-800 bg-red-950/40 text-xs space-y-1.5 animate-fade-in";
        feedbackDiv.innerHTML = `
            <div class="font-bold text-red-400 flex items-center gap-1.5 text-xs">
                <i class="fa-solid fa-circle-xmark"></i> Chưa chính xác!
            </div>
            <div class="text-stone-300 italic text-[11px] leading-snug">💡 ${escapeHTML(q.giai_thich || 'Xem lại kiến thức chuyên đề này.')}</div>
            <button onclick="chuyenCauTiepTheo()" class="mt-1.5 w-full py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 font-bold rounded transition-all flex items-center justify-center gap-2 cursor-pointer text-xs">
                Câu tiếp theo <i class="fa-solid fa-arrow-right"></i>
            </button>
        `;
    }

    feedbackDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function chuyenCauTiepTheo() {
    currentQuizIndex++;
    hienThiCauHoiTracNghiem();
}

function hienThiKetQuaTracNghiem() {
    if (quizTimerInterval) {
        clearInterval(quizTimerInterval);
        quizTimerInterval = null;
    }

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

    let history = [];
    try {
        history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
        if (!Array.isArray(history)) history = [];
    } catch (e) {
        history = [];
    }
    
    history.unshift({
        date: new Date().toLocaleDateString('vi-VN'),
        score: `${quizScore}/${total}`,
        percent: percent.toFixed(0) + '%'
    });
    localStorage.setItem('quizHistory', JSON.stringify(history.slice(0, 5)));
    capNhatDiemGanNhat();
}

function quayLaiCauHinhQuiz() {
    if (quizTimerInterval) {
        clearInterval(quizTimerInterval);
        quizTimerInterval = null;
    }
    document.getElementById('quiz-result').classList.add('hidden');
    document.getElementById('quiz-review').classList.add('hidden');
    document.getElementById('quiz-play').classList.add('hidden');
    
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
        
        const yourChoiceText = (ans.lua_chon_cua_ban !== undefined && ans.lua_chon_cua_ban >= 0) ? ans.lua_chon[ans.lua_chon_cua_ban] : "Hết giờ / Chưa trả lời";
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
