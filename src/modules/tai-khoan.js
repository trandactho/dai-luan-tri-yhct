// ==========================================================================
// TAI-KHOAN.JS - QUẢN LÝ ĐĂNG NHẬP, ĐĂNG KÝ, XÁC THỰC OTP & HẠN MỨC AI TOÀN DIỆN
// ==========================================================================

const API_BASE_URL = 'https://dailuantriyhct.com/.netlify/functions';
window.GAS_CHAT_API = 'https://script.google.com/macros/s/AKfycbxgjSJ2xuqoSTrXACWMesXYrKQSi20s_ySBwL9g6EPkcmknyqgz6cqs1Tn628PK1LHN2Q/exec';

// Khai báo các hàm toàn cục
window.toggleAuthMode = toggleAuthMode;
window.initUserAuthSession = initUserAuthSession;
window.renderAuthUI = renderAuthUI;
window.handleUserRegister = handleUserRegister;
window.handleUserLogin = handleUserLogin;
window.handleUserLogout = handleUserLogout;
window.applyRolePermissions = applyRolePermissions;
window.handleForgotPassword = handleForgotPassword;
window.handleVerifyOTP = handleVerifyOTP;
window.togglePasswordVisibility = togglePasswordVisibility;

window.showRoleLockModal = function(minRole, featureName = 'Tính năng này') {
    const modal = document.getElementById('modal-role-lock');
    const title = document.getElementById('lock-modal-title');
    const desc = document.getElementById('lock-modal-desc');
    
    if (!modal) return;
    if (title) title.innerText = `TÍNH NĂNG DÀNH CHO CẤP ${minRole}`;
    if (desc) {
        desc.innerHTML = `Tính năng <strong>${featureName}</strong> yêu cầu tài khoản từ cấp <strong>${minRole}</strong> trở lên.<br>Vui lòng nâng cấp tài khoản để truy cập!`;
    }
    modal.classList.remove('hidden');
};

function getTodayDateString() {
    const now = new Date();
    const vnTime = new Date(now.getTime() + (7 * 60 + now.getTimezoneOffset()) * 60000);
    return vnTime.toISOString().slice(0, 10);
}

function getRoleMaxQuota(role) {
    return 99999;
}

function getDailyQuotaUsed(role) {
    return 0;
}

function capNhatQuotaUICucBo(newQuota) {
    if (!window.AppState) window.AppState = { auth: {} };
    if (!AppState.auth) AppState.auth = {};
    if (!AppState.auth.user) AppState.auth.user = {};

    const role = AppState.auth.role || 'GUEST';
    const today = getTodayDateString();
    
    AppState.auth.user.aiUsedToday = newQuota;

    if (role === 'GUEST') {
        try {
            localStorage.setItem('guest_ai_quota', JSON.stringify({ date: today, used: newQuota }));
        } catch (e) {}
    } else {
        try {
            AppState.auth.user.lastUsedDate = today;
            localStorage.setItem('app_user_data', JSON.stringify(AppState.auth.user));
        } catch (e) {}
    }

    renderAuthUI(role !== 'GUEST');
}
window.capNhatQuotaUICucBo = capNhatQuotaUICucBo;
window.getDailyQuotaUsed = getDailyQuotaUsed;
window.getRoleMaxQuota = getRoleMaxQuota;

function toggleAuthMode(mode) {
    const formLogin = document.getElementById('form-auth-login');
    const formReg = document.getElementById('form-auth-register');
    const formForgot = document.getElementById('form-auth-forgot');
    const formOtpStep2 = document.getElementById('form-otp-step-2');
    const btnLogin = document.getElementById('btn-auth-login');
    const btnReg = document.getElementById('btn-auth-reg');
    const btnForgot = document.getElementById('btn-auth-forgot');

    if (formLogin) formLogin.classList.add('hidden');
    if (formReg) formReg.classList.add('hidden');
    if (formForgot) formForgot.classList.add('hidden');
    if (formOtpStep2) formOtpStep2.classList.add('hidden');

    if (btnLogin) btnLogin.className = "flex-1 py-2 text-stone-400";
    if (btnReg) btnReg.className = "flex-1 py-2 text-stone-400";
    if (btnForgot) btnForgot.className = "flex-1 py-2 text-stone-400";

    if (mode === 'login') {
        if (formLogin) formLogin.classList.remove('hidden');
        if (btnLogin) btnLogin.className = "flex-1 py-2 text-amber-400 border-b-2 border-amber-500 font-bold";
    } else if (mode === 'register') {
        if (formReg) formReg.classList.remove('hidden');
        if (btnReg) btnReg.className = "flex-1 py-2 text-amber-400 border-b-2 border-amber-500 font-bold";
    } else if (mode === 'forgot') {
        if (formForgot) formForgot.classList.remove('hidden');
        if (btnForgot) btnForgot.className = "flex-1 py-2 text-amber-400 border-b-2 border-amber-500 font-bold";
    }
}

function checkAndApplyExpiration(userData) {
    if (!userData || !userData.email) return 'GUEST';
    let role = userData.role || 'FREE';
    
    if (role !== 'FREE' && role !== 'GUEST' && userData.expireDate) {
        const now = Date.now();
        const expireMs = new Date(userData.expireDate).getTime();
        
        let lastTime = Number(localStorage.getItem('last_known_time') || 0);
        if (now < lastTime) { 
            role = 'FREE';
            userData.role = 'FREE';
            return role;
        }
        if (navigator.onLine) {
            localStorage.setItem('last_known_time', now.toString());
        }

        if (!isNaN(expireMs) && now > expireMs) {
            role = 'FREE';
            userData.role = 'FREE';
            userData.expireDate = null;
        }
    }
    return role;
}

let isVerifyingSession = false;

async function initUserAuthSession() {
    if (isVerifyingSession) return;
    
    let savedToken = null;
    try { savedToken = localStorage.getItem('access_token'); } catch (e) {}

    if (typeof AppState === 'undefined') {
        window.AppState = { auth: { role: 'GUEST', token: null, user: null } };
    }

    if (!savedToken) {
        resetToGuestSession();
        return;
    }

    try {
        isVerifyingSession = true;

        const res = await fetch(`${API_BASE_URL}/auth`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'verify_token', token: savedToken })
        });

        const result = await res.json();
        
        if (!res.ok || !result.user) {
            if (result.message) {
                alert(`⚠️ ${result.message}`);
            }
            throw new Error(result.message || 'Phiên hết hạn');
        }

        const userData = result.user;
        const serverRole = checkAndApplyExpiration(userData);

        AppState.auth.role = serverRole;
        AppState.auth.token = savedToken;
        AppState.auth.user = {
            id: userData.id || '',
            email: userData.email || '',
            role: serverRole,
            shortId: getFixedIdFromEmail(userData.email),
            aiUsedToday: userData.aiUsedToday || 0,
            lastUsedDate: getTodayDateString(),
            expireDate: userData.expireDate || null
        };

        try { localStorage.setItem('app_user_data', JSON.stringify(AppState.auth.user)); } catch (e) {}

        renderAuthUI(true);
    } catch (e) {
        console.warn('Xác thực thất bại:', e.message);
        
        const localUser = localStorage.getItem('app_user_data');
        if (localUser) {
            try {
                const parsedUser = JSON.parse(localUser);
                AppState.auth.role = parsedUser.role || 'FREE';
                AppState.auth.token = savedToken;
                AppState.auth.user = parsedUser;
                renderAuthUI(true);
                return;
            } catch (err) {}
        }

        resetToGuestSession();
    } finally {
        isVerifyingSession = false;
    }
    
    try { applyRolePermissions(); } catch (e) {}
}

function resetToGuestSession() {
    try {
        localStorage.removeItem('access_token');
        localStorage.removeItem('app_user_data');
    } catch (e) {}
    
    const guestUsed = getDailyQuotaUsed('GUEST');

    if (typeof AppState !== 'undefined') {
        AppState.auth.role = 'GUEST';
        AppState.auth.token = null;
        AppState.auth.user = { 
            role: 'GUEST',
            shortId: 'GUEST', 
            email: 'Khách', 
            aiUsedToday: guestUsed 
        };
    }
    renderAuthUI(false);
    toggleAuthMode('login');
}

function renderAuthUI(isLoggedIn) {
    const guestView = document.getElementById('auth-guest-view');
    const memberView = document.getElementById('auth-member-view');
    if (!guestView || !memberView) return;

    const u = AppState.auth?.user || {};
    const userRole = checkAndApplyExpiration(u) || AppState.auth?.role || 'GUEST';
    updateFreeCardActionUI(isLoggedIn && userRole !== 'GUEST');

    const shortId = u.shortId || getFixedIdFromEmail(u.email) || 'DL1000';
    const leaderboardWrapper = document.getElementById('leaderboard-section-wrapper');
    const chatWrapper = document.getElementById('chat-section-wrapper');
    
    const paidSections = document.getElementById('paid-upgrade-sections');
    const isPaidHidden = paidSections ? paidSections.classList.contains('hidden') : true;

    const guestCard = document.getElementById('card-upgrade-guest');
    const freeCard = document.getElementById('card-upgrade-free');
    const vip3Card = document.getElementById('card-upgrade-vip3');
    const vipCard = document.getElementById('card-upgrade-vip');
    const svipCard = document.getElementById('card-upgrade-svip');

    let elRoleDesc = document.getElementById('user-role-description');
    if (!elRoleDesc && memberView) {
        const infoBox = memberView.querySelector('.bg-stone-950');
        if (infoBox) {
            const descDiv = document.createElement('div');
            descDiv.id = 'user-role-description';
            descDiv.className = 'text-[11px] text-stone-300 pt-2 border-t border-stone-800 leading-relaxed space-y-1';
            infoBox.appendChild(descDiv);
            elRoleDesc = descDiv;
        }
    }

    if (!isLoggedIn || userRole === 'GUEST') {
        if (leaderboardWrapper) leaderboardWrapper.style.display = 'none';
        if (chatWrapper) chatWrapper.style.display = 'none';

        guestView.style.display = 'block';
        guestView.classList.remove('hidden');
        memberView.style.display = 'none';
        memberView.classList.add('hidden');

        if (paidSections) paidSections.className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch max-w-6xl mx-auto";
        
        if (guestCard) guestCard.style.display = 'flex';
        if (freeCard) freeCard.style.display = 'flex';
        if (vip3Card) vip3Card.style.display = 'none';
        if (vipCard) vipCard.style.display = 'none';
        if (svipCard) svipCard.style.display = 'none';
            
        if (elRoleDesc) elRoleDesc.innerHTML = '👤 <strong>Cấp GUEST:</strong> Tra cứu CSDL YHCT cơ bản. Hãy <strong>Đăng ký/Đăng nhập</strong> để nhận Cấp FREE vĩnh viễn.';
    } else {
        if (leaderboardWrapper) {
            leaderboardWrapper.style.display = isPaidHidden ? 'none' : 'block';
        }
        if (chatWrapper) {
            chatWrapper.style.display = 'block';
        }

        guestView.style.display = 'none';
        guestView.classList.add('hidden');
        memberView.style.display = 'block';
        memberView.classList.remove('hidden');

        const elEmail = document.getElementById('user-display-email');
        const elRole = document.getElementById('user-display-role');
        const elRoleText = document.getElementById('user-display-role-text');
        const elId = document.getElementById('user-display-id');

        if (elEmail) elEmail.innerText = u.email || 'Thành viên';
        if (elId) elId.innerText = shortId;
        if (elRoleText) elRoleText.innerText = userRole;

        if (elRole) {
            elRole.innerText = userRole;
            if (userRole === 'VIP') {
                elRole.className = "px-2.5 py-1 bg-amber-950 text-amber-400 border border-amber-800 rounded-lg text-xs font-bold";
            } else if (userRole === 'SVIP') {
                elRole.className = "px-2.5 py-1 bg-purple-950 text-purple-400 border border-purple-800 rounded-lg text-xs font-bold";
            } else {
                elRole.className = "px-2.5 py-1 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded-lg text-xs font-bold";
            }
        }

        if (paidSections) {
            const isHidden = paidSections.classList.contains('hidden');
            paidSections.className = `${isHidden ? 'hidden ' : ''}grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch max-w-6xl mx-auto`;
        }

        if (guestCard) guestCard.style.display = 'flex';
        if (freeCard) freeCard.style.display = 'flex';
        if (vip3Card) vip3Card.style.display = 'flex';
        if (vipCard) vipCard.style.display = 'flex';
        if (svipCard) svipCard.style.display = 'flex';

        let countdownHtml = '';
        if (u && u.expireDate && userRole !== 'FREE') {
            const expireMs = new Date(u.expireDate).getTime();
            const diffMs = expireMs - Date.now();
            const remainingDays = Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
            const formattedDate = new Date(u.expireDate).toLocaleDateString('vi-VN');

            countdownHtml = `
                <div class="mt-2 p-2.5 bg-stone-950 rounded-lg border border-amber-500/40 text-xs space-y-1.5">
                    <div class="flex items-center justify-between text-amber-400 font-bold">
                        <span><i class="fa-solid fa-hourglass-half mr-1"></i>Thời hạn gói:</span>
                        <span class="text-white bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800">Còn ${remainingDays} ngày</span>
                    </div>
                    <div class="flex items-center justify-between text-[11px] text-stone-400 border-t border-stone-800/80 pt-1.5">
                        <span>Ngày hết hạn:</span>
                        <span class="text-stone-200 font-medium">${formattedDate}</span>
                    </div>
                </div>
            `;
        }

        if (userRole === 'FREE') {
            if (elRoleDesc) elRoleDesc.innerHTML = '✨ <strong>Đặc quyền FREE:</strong> Bao gồm toàn bộ quyền cấp FREE + AI Tìm & Lưu tra cứu, Trắc nghiệm CSDL & Phối ngũ bài thuốc.';
        } else if (userRole === 'VIP') {
            if (elRoleDesc) elRoleDesc.innerHTML = `👑 <strong>Đặc quyền VIP:</strong> Bao gồm toàn bộ quyền cấp FREE + Tứ Chẩn AI, AI Sinh Trắc Nghiệm lâm sàng, Kê đơn PDF & Tắt quảng cáo.${countdownHtml}`;
        } else if (userRole === 'SVIP') {
            if (elRoleDesc) elRoleDesc.innerHTML = `⚡ <strong>Đặc quyền SVIP:</strong> Bao gồm toàn bộ quyền cấp VIP + Phản hồi AI dài tối đa & ưu tiên xử lý cao nhất.${countdownHtml}`;
        }
    }

    updateVietQRImages(shortId);
    
    if (typeof loadLeaderboardFromDB === 'function') {
        loadLeaderboardFromDB();
    }
    
    if (typeof updateChatPermissionUI === 'function') {
        updateChatPermissionUI(userRole);
    }

    if (isLoggedIn && userRole !== 'GUEST') {
        if (typeof loadChatHistoryFromDrive === 'function') {
            loadChatHistoryFromDrive();
        }
    }
    
    if (typeof updateRoleLockUI === 'function') {
        updateRoleLockUI();
    }
}

function getFixedIdFromEmail(email) {
    if (!email) return 'DL1000';
    let hash = 0;
    const cleanEmail = email.trim().toLowerCase();
    for (let i = 0; i < cleanEmail.length; i++) {
        hash = (hash << 5) - hash + cleanEmail.charCodeAt(i);
        hash |= 0;
    }
    const num = 1000 + (Math.abs(hash) % 9000);
    return `DL${num}`;
}

function saveUserSession(token, user) {
    try {
        localStorage.setItem('access_token', token);
        localStorage.setItem('app_user_data', JSON.stringify(user));
    } catch (e) {
        console.warn('Tab ẩn danh không cho phép lưu đăng nhập cục bộ.');
    }
    
    if (typeof AppState !== 'undefined') {
        AppState.auth.user = user;
        AppState.auth.role = user.role;
        AppState.auth.token = token;
    }
    renderAuthUI(true);
    applyRolePermissions();
    
    if (typeof updateRoleLockUI === 'function') {
        updateRoleLockUI();
    }
}

async function handleUserLogin(e) {
    if (e && e.preventDefault) e.preventDefault();
    const email = document.getElementById('login-email')?.value.trim();
    const password = document.getElementById('login-pass')?.value;
    if (!email || !password) return;

    try {
        const res = await fetch(`${API_BASE_URL}/auth`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'login', email, password })
        });

        const result = await res.json();
        if (!res.ok) throw new Error(result.message || 'Đăng nhập thất bại');

        const userData = result.user || {};
        const userRole = checkAndApplyExpiration(userData);

        saveUserSession(result.token, {
            id: userData.id || '',
            email: userData.email || email,
            role: userRole,
            shortId: getFixedIdFromEmail(userData.email || email),
            aiUsedToday: userData.aiUsedToday || 0,
            lastUsedDate: getTodayDateString(),
            expireDate: userData.expireDate || null
        });
        
        let successMsg = '🎉 Đăng nhập thành công!';
        if (result.warning) {
            successMsg += '\n\n' + result.warning;
        }
        alert(successMsg);
    } catch (err) {
        alert('Lỗi đăng nhập: ' + err.message);
    }
}

async function handleUserRegister(e) {
    if (e && e.preventDefault) e.preventDefault();
    const email = document.getElementById('reg-email')?.value.trim().toLowerCase();
    const password = document.getElementById('reg-pass')?.value;
    if (!email || !password) return;

    try {
        const res = await fetch(`${API_BASE_URL}/auth`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'register', email, password })
        });

        const result = await res.json();
        if (!res.ok) throw new Error(result.message || 'Đăng ký thất bại');

        alert('🎉 Đăng ký thành công! Vui lòng kiểm tra hộp thư email (cả mục Spam/Thư rác) để xác thực tài khoản.');
        toggleAuthMode('login');
    } catch (err) {
        alert('Lỗi đăng ký: ' + err.message);
    }
}

async function handleUserLogout() {
    if (confirm("Bạn có chắc chắn muốn đăng xuất không?")) {
        const token = localStorage.getItem('access_token');
        if (token) {
            try {
                await fetch(`${API_BASE_URL}/auth`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ action: 'logout', token })
                });
            } catch (e) {}
        }
        resetToGuestSession();
        applyRolePermissions();
    }
}

function applyRolePermissions() {
    if (typeof window.updateRoleLockUI === 'function') {
        window.updateRoleLockUI();
    }
}

async function handleForgotPassword(e) {
    if (e && e.preventDefault) e.preventDefault();
    const email = document.getElementById('reset-email')?.value.trim();
    if (!email) return;
    
    try {
        const res = await fetch(`${API_BASE_URL}/auth-otp`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'request_otp', email })
        });
        
        const result = await res.json();
        if (!res.ok) throw new Error(result.error || 'Email không tồn tại trên hệ thống!');
        
        alert("Mã OTP 6 số đã được gửi tới Email của bạn.");
        const formForgot = document.getElementById('form-auth-forgot');
        const formOtpStep2 = document.getElementById('form-otp-step-2');
        if (formForgot) formForgot.classList.add('hidden');
        if (formOtpStep2) formOtpStep2.classList.remove('hidden');
    } catch (err) {
        alert("Lỗi: " + err.message);
    }
}

async function handleVerifyOTP(e) {
    if (e && e.preventDefault) e.preventDefault();
    const email = document.getElementById('reset-email')?.value.trim();
    const otp = document.getElementById('reset-otp')?.value.trim();
    const newPass = document.getElementById('reset-new-pass')?.value;

    if (!email || !otp || !newPass) {
        alert('Vui lòng nhập đầy đủ thông tin!');
        return;
    }

    try {
        const res = await fetch(`${API_BASE_URL}/auth-otp`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'verify_otp', email, otp, newPass })
        });
        
        const result = await res.json();
        if (!res.ok) throw new Error(result.error || 'Mã OTP không chính xác');

        alert("Đổi mật khẩu thành công! Vui lòng đăng nhập lại.");
        toggleAuthMode('login');
    } catch (err) {
        alert("Lỗi: " + err.message);
    }
}

function togglePasswordVisibility(inputId, btn) {
    const input = document.getElementById(inputId);
    const icon = btn?.querySelector('i');
    if (!input || !icon) return;

    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

async function refreshUserDataFromServer() {
    if (isVerifyingSession) return;

    let savedToken = null;
    try { savedToken = localStorage.getItem('access_token'); } catch (e) {}

    if (!savedToken) {
        if (typeof initUserAuthSession === 'function') initUserAuthSession();
        return;
    }

    try {
        isVerifyingSession = true;

        const res = await fetch(`${API_BASE_URL}/auth`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'verify_token', token: savedToken })
        });

        const result = await res.json();
        if (res.ok && result.user) {
            const userData = result.user;
            const serverRole = checkAndApplyExpiration(userData);

            if (typeof AppState !== 'undefined' && AppState.auth) {
                AppState.auth.role = serverRole;
                AppState.auth.user.role = serverRole;
                AppState.auth.user.aiUsedToday = userData.aiUsedToday || 0;
                AppState.auth.user.lastUsedDate = getTodayDateString();
                AppState.auth.user.expireDate = userData.expireDate || null;
            }

            try { localStorage.setItem('app_user_data', JSON.stringify(AppState.auth.user)); } catch (e) {}
            renderAuthUI(true);
            if (typeof applyRolePermissions === 'function') applyRolePermissions();
        } else {
            if (result.message) {
                alert(`⚠️ ${result.message}`);
            }
            if (typeof resetToGuestSession === 'function') resetToGuestSession();
        }
    } catch (e) {
        console.warn('Không thể kết nối server:', e.message);
    } finally {
        isVerifyingSession = false;
    }
}
window.refreshUserDataFromServer = refreshUserDataFromServer;

async function tangVaDongBoQuotaAI() {
    return true; 
}

function updateVietQRImages(userShortId) {
    const bankId = 'VPBANK';
    const accountNo = 'AGBSPCE6NAP5';
    const accountName = encodeURIComponent('TRAN DAC THO');

    const imgVip3 = document.getElementById('vietqr-vip3-img');
    const memoVip3 = document.getElementById('qr-vip3-memo');
    if (imgVip3) imgVip3.src = `https://img.vietqr.io/image/${bankId}-${accountNo}-compact2.png?amount=15000&addInfo=VIP%20${userShortId}&accountName=${accountName}`;
    if (memoVip3) memoVip3.innerText = `VIP ${userShortId}`;

    const imgVip = document.getElementById('vietqr-vip-img');
    const memoVip = document.getElementById('qr-vip-memo');
    if (imgVip) imgVip.src = `https://img.vietqr.io/image/${bankId}-${accountNo}-compact2.png?amount=99000&addInfo=VIP%20${userShortId}&accountName=${accountName}`;
    if (memoVip) memoVip.innerText = `VIP ${userShortId}`;

    const imgSvip = document.getElementById('vietqr-svip-img');
    const memoSvip = document.getElementById('qr-svip-memo');
    if (imgSvip) imgSvip.src = `https://img.vietqr.io/image/${bankId}-${accountNo}-compact2.png?amount=990000&addInfo=SVIP%20${userShortId}&accountName=${accountName}`;
    if (memoSvip) memoSvip.innerText = `SVIP ${userShortId}`;
}

document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && localStorage.getItem('access_token')) {
        if (!isVerifyingSession) {
            refreshUserDataFromServer();
        }
    }
});

function renderLeaderboard(usersList = []) {
    const container = document.getElementById('leaderboard-list');
    if (!container) return;

    const table = container.closest('table');
    if (table) {
        const headers = table.querySelectorAll('th');
        if (headers[3]) headers[3].innerText = 'THỜI HẠN';
    }

    if (!usersList || usersList.length === 0) {
        container.innerHTML = `
            <tr>
                <td colspan="4" class="py-4 text-center text-stone-500 italic">Chưa có dữ liệu xếp hạng</td>
            </tr>
        `;
        return;
    }

    container.innerHTML = usersList.slice(0, 10).map((user, index) => {
        let rankBadge = `${index + 1}`;
        if (index === 0) rankBadge = `<i class="fa-solid fa-crown text-amber-400"></i> 1`;
        else if (index === 1) rankBadge = `<i class="fa-solid fa-medal text-slate-300"></i> 2`;
        else if (index === 2) rankBadge = `<i class="fa-solid fa-award text-amber-600"></i> 3`;

        let roleClass = "bg-emerald-950 text-emerald-400 border-emerald-800";
        if (user.role === 'SVIP') roleClass = "bg-purple-950 text-purple-400 border-purple-800";
        else if (user.role === 'VIP') roleClass = "bg-amber-950 text-amber-400 border-amber-800";

        return `
            <tr class="hover:bg-stone-800/40 transition-colors">
                <td class="py-2 px-2 text-center font-bold text-stone-400">${rankBadge}</td>
                <td class="py-2 px-2 font-mono text-stone-300">${escapeHTML(user.displayName)}</td>
                <td class="py-2 px-2 text-center">
                    <span class="px-2 py-0.5 ${roleClass} border rounded text-[10px] font-bold">${user.role}</span>
                </td>
                <td class="py-2 px-2 text-right font-mono text-amber-400 text-xs font-bold">${user.timeText}</td>
            </tr>
        `;
    }).join('');
}
window.renderLeaderboard = renderLeaderboard;

async function loadLeaderboardFromDB() {
    const container = document.getElementById('leaderboard-list');
    
    if (container) {
        container.innerHTML = `<tr><td colspan="4" class="py-4 text-center text-amber-500 italic">Đang tải dữ liệu từ Server...</td></tr>`;
    }

    try {
        const res = await fetch(`${API_BASE_URL}/auth`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'get_leaderboard' })
        });
        
        const result = await res.json();
        
        if (!res.ok) {
            const errorMsg = result.message || result.error || JSON.stringify(result);
            if (container) {
                container.innerHTML = `<tr><td colspan="4" class="py-4 text-center text-red-500 italic font-bold">Lỗi Server: ${errorMsg}</td></tr>`;
            }
            return;
        }
        
        if (result.leaderboard && Array.isArray(result.leaderboard)) {
            if (result.leaderboard.length === 0) {
                 if (container) {
                     container.innerHTML = `<tr><td colspan="4" class="py-4 text-center text-stone-500 italic">CSDL Supabase hiện chưa có tài khoản nào.</td></tr>`;
                 }
                 return;
            }
            
            const formattedList = result.leaderboard.map(user => {
                const userRole = user.effectiveRole || user.role || 'FREE';
                let displayName = 'Thành viên';
                if (user.email) {
                    displayName = user.email.split('@')[0];
                } else if (user.id) {
                    displayName = 'DL' + String(user.id).slice(0, 6);
                }
                return {
                    displayName: displayName,
                    role: userRole,
                    timeText: user.remainingTimeText || (userRole === 'FREE' ? 'Miễn phí' : 'Vĩnh viễn')
                };
            });
            renderLeaderboard(formattedList);
        } else {
            if (container) {
                container.innerHTML = `<tr><td colspan="4" class="py-4 text-center text-red-500 italic">API trả về sai định dạng dữ liệu!</td></tr>`;
            }
        }
    } catch (err) {
        if (container) {
            container.innerHTML = `<tr><td colspan="4" class="py-4 text-center text-red-500 italic font-bold">Lỗi kết nối: ${err.message}</td></tr>`;
        }
    }
}
window.loadLeaderboardFromDB = loadLeaderboardFromDB;

function updateFreeCardActionUI(isLoggedIn) {
    const box = document.getElementById('free-card-action-box');
    if (!box) return;

    if (!isLoggedIn) {
        box.innerHTML = `
            <button type="button" onclick="toggleAuthMode('register'); window.scrollTo({top: 0, behavior: 'smooth'});" class="text-[11px] text-emerald-400 font-bold hover:underline cursor-pointer flex items-center justify-center gap-1 w-full">
                <i class="fa-solid fa-user-plus text-[10px]"></i> Đăng nhập nhận ngay
            </button>
        `;
    } else {
        box.innerHTML = `
            <span class="text-[11px] text-emerald-400 font-semibold flex items-center justify-center gap-1">
                <i class="fa-solid fa-check-circle text-[10px]"></i> Cấp độ cơ bản vĩnh viễn
            </span>
        `;
    }
}
window.updateFreeCardActionUI = updateFreeCardActionUI;

function toggleUpgradeSections() {
    const sections = document.getElementById('paid-upgrade-sections');
    const leaderboardWrapper = document.getElementById('leaderboard-section-wrapper');
    const icon = document.getElementById('icon-toggle-upgrade');
    if (!sections) return;

    const isHidden = sections.classList.toggle('hidden');
    
    const u = AppState.auth?.user || {};
    const userRole = checkAndApplyExpiration(u) || AppState.auth?.role || 'GUEST';
    const isLoggedIn = AppState.auth?.token && userRole !== 'GUEST';

    if (leaderboardWrapper && isLoggedIn) {
        leaderboardWrapper.style.display = isHidden ? 'none' : 'block';
    }

    if (icon) {
        if (isHidden) {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        } else {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        }
    }
}
window.toggleUpgradeSections = toggleUpgradeSections;

// --------------------------------------------------------------------------
// HÀM XỬ LÝ BOX CHAT THẢO LUẬN TÍCH HỢP CỘNG ĐỒNG
// --------------------------------------------------------------------------

function getCurrentUserChatName() {
    const u = window.AppState?.auth?.user || {};
    if (u.email) return u.email.split('@')[0];
    if (u.shortId && u.shortId !== 'GUEST') return u.shortId;

    try {
        const local = JSON.parse(localStorage.getItem('app_user_data') || '{}');
        if (local.email) return local.email.split('@')[0];
        if (local.shortId && local.shortId !== 'GUEST') return local.shortId;
    } catch(e) {}

    return u.shortId || 'Thành viên'; 
}

function formatChatTime(timestamp) {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    if (isNaN(date.getTime())) return '';

    const now = new Date();
    const isToday = date.toDateString() === now.toDateString();
    
    const timeString = date.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
    if (isToday) return timeString;
    
    const dayString = date.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit' });
    return `${timeString} ${dayString}`;
}

async function loadChatHistoryFromDrive() {
    const messagesEl = document.getElementById('chat-messages');
    if (!messagesEl) return;

    messagesEl.innerHTML = '<div class="text-stone-500 text-center italic text-xs py-4"><i class="fa-solid fa-spinner fa-spin text-amber-500 mr-1.5"></i> Đang tải dữ liệu thảo luận...</div>';

    try {
        const res = await fetch(`${window.GAS_CHAT_API}?userId=GLOBAL_COMMUNITY`);
        const history = await res.json();

        if (!Array.isArray(history) || history.length === 0) {
            messagesEl.innerHTML = '<div class="text-stone-500 text-center italic text-xs py-4">Chưa có tin nhắn nào trong 7 ngày qua. Hãy là người đầu tiên thảo luận!</div>';
            return;
        }

        renderMessagesToDOM(messagesEl, history);
    } catch (e) {
        console.error('Lỗi tải chat:', e);
        messagesEl.innerHTML = '<div class="text-red-400 text-center text-xs py-2">Không thể tải nội dung thảo luận.</div>';
    }
}
window.loadChatHistoryFromDrive = loadChatHistoryFromDrive;

function renderMessagesToDOM(messagesEl, history) {
    const myName = getCurrentUserChatName().toLowerCase();
    let lastTimestamp = 0;
    
    // Lọc chỉ lấy tin nhắn trong vòng 7 ngày qua
    const sevenDaysAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
    const recentHistory = history.filter(item => {
        const msgTime = new Date(item.timestamp || 0).getTime();
        return !isNaN(msgTime) && msgTime >= sevenDaysAgo;
    });

    const latestMessages = recentHistory.slice(-50);
    let htmlContent = '';

    if (latestMessages.length === 0) {
        messagesEl.innerHTML = '<div class="text-stone-500 text-center italic text-xs py-4">Chưa có tin nhắn nào trong 7 ngày qua. Hãy là người đầu tiên thảo luận!</div>';
        return;
    }

    latestMessages.forEach(item => {
        const rawSender = item.sender || item.senderName || '';
        const senderNameClean = rawSender.trim().toLowerCase();
        const isMe = senderNameClean === myName;            
        
        let displayName = rawSender;
        if (!displayName || displayName === 'user' || displayName === 'Thành viên' || displayName === 'Thành viên VIP' || displayName === 'Thành viên khác' || displayName === 'Ẩn danh') {
            displayName = isMe ? getCurrentUserChatName() : 'Thành viên';
        }

        let safeText = typeof escapeHTML === 'function' ? escapeHTML(item.text) : item.text;
        
        safeText = safeText.replace(/@([^\s,]+)/g, '<span class="bg-amber-500/20 text-amber-300 font-bold px-1.5 py-0.5 rounded border border-amber-500/40">@$1</span>');

        const safeSender = typeof escapeHTML === 'function' ? escapeHTML(displayName) : displayName;

        let timeDividerHtml = '';
        const msgTime = item.timestamp ? new Date(item.timestamp).getTime() : 0;
        if (msgTime && (msgTime - lastTimestamp > 15 * 60 * 1000)) {
            timeDividerHtml = `
                <div class="flex justify-center my-2">
                    <span class="px-2 py-0.5 bg-stone-900 text-stone-400 text-[10px] rounded-full border border-stone-800 font-mono">
                        ${formatChatTime(msgTime)}
                    </span>
                </div>
            `;
            lastTimestamp = msgTime;
        }

        htmlContent += `
            ${timeDividerHtml}
            <div class="space-y-0.5">
                <div class="text-[10px] text-stone-500 ${isMe ? 'text-right' : 'text-left'} px-1 font-mono">${safeSender}</div>
                <div class="flex justify-${isMe ? 'end' : 'start'}">
                    <div class="${isMe ? 'bg-amber-600/30 border border-amber-500/50 text-amber-200' : 'bg-stone-800 border border-stone-700 text-stone-300'} p-2.5 rounded-xl max-w-[85%] font-medium leading-relaxed">
                        ${safeText}
                    </div>
                </div>
            </div>
        `;
    });

    messagesEl.innerHTML = htmlContent;
    messagesEl.scrollTo({ top: messagesEl.scrollHeight, behavior: 'smooth' });

    if (latestMessages.length > 0) {
        const lastMsg = latestMessages[latestMessages.length - 1];
        const lastSender = (lastMsg.sender || lastMsg.senderName || '').trim().toLowerCase();
        const lastTime = new Date(lastMsg.timestamp || 0).getTime();
        const viewedTime = Number(localStorage.getItem('last_viewed_chat_time') || 0);

        const notiDot = document.getElementById('chat-noti-dot');
        if (notiDot) {
            if (lastSender !== myName && lastTime > viewedTime) {
                notiDot.classList.remove('hidden');
            } else {
                notiDot.classList.add('hidden');
            }
        }
    }
}

async function sendChatMessage() {
    const input = document.getElementById('chat-input');
    const messages = document.getElementById('chat-messages');
    if (!input || !messages) return;

    const text = input.value.trim();
    if (!text) return;

    const senderName = getCurrentUserChatName();
    const nowTime = new Date().toISOString();
    let safeText = typeof escapeHTML === 'function' ? escapeHTML(text) : text;
    
    safeText = safeText.replace(/@([^\s,]+)/g, '<span class="bg-amber-500/20 text-amber-300 font-bold px-1.5 py-0.5 rounded border border-amber-500/40">@$1</span>');

    messages.innerHTML += `
        <div class="space-y-0.5">
            <div class="text-[10px] text-stone-500 text-right px-1 font-mono">${senderName}</div>
            <div class="flex justify-end">
                <div class="bg-amber-600/30 border border-amber-500/50 p-2.5 rounded-xl max-w-[85%] text-amber-200 font-medium leading-relaxed">
                    ${safeText}
                </div>
            </div>
        </div>
    `;
    input.value = '';
    messages.scrollTo({ top: messages.scrollHeight, behavior: 'smooth' });

    try {
        await fetch(window.GAS_CHAT_API, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                userId: 'GLOBAL_COMMUNITY', 
                senderId: senderName, 
                senderName: senderName, 
                sender: senderName, 
                text: text,
                timestamp: nowTime 
            })
        });
    } catch (e) {
        console.error('Lỗi lưu tin nhắn:', e);
    }
}

function goToChatSection() {
    const chatCard = document.getElementById('card-vip-chat');
    if (chatCard) {
        chatCard.scrollIntoView({ behavior: 'smooth' });
    }
    localStorage.setItem('last_viewed_chat_time', Date.now().toString());
    const notiDot = document.getElementById('chat-noti-dot');
    if (notiDot) {
        notiDot.classList.add('hidden');
    }
}
window.goToChatSection = goToChatSection;

function updateChatPermissionUI(forcedRole) {
    const container = document.getElementById('chat-input-container');
    if (!container) return;

    let role = forcedRole;
    if (!role) {
        const u = window.AppState?.auth?.user || {};
        role = window.AppState?.auth?.role || u.role || 'GUEST';
    }
    const upperRole = String(role).toUpperCase();

    if (upperRole === 'VIP' || upperRole === 'SVIP') {
        container.innerHTML = `
            <div class="flex gap-2">
                <input type="text" id="chat-input" placeholder="Nhập tin nhắn thảo luận (có thể dùng @tên)..." class="flex-1 p-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-200 text-xs outline-none focus:border-amber-500" onkeydown="if(event.key==='Enter') sendChatMessage()">
                <button type="button" onclick="sendChatMessage()" class="px-4 py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer shrink-0">
                    <i class="fa-solid fa-paper-plane"></i> Gửi
                </button>
            </div>
        `;
    } else {
        container.innerHTML = `
            <div class="p-3 bg-stone-950/80 border border-amber-900/40 rounded-xl text-center text-xs text-stone-400 flex items-center justify-between">
                <span><i class="fa-solid fa-lock text-amber-500 mr-1.5"></i> Bạn đang ở chế độ <strong>Chỉ Xem</strong>.</span>
                <button type="button" onclick="switchTab('taikhoan'); window.scrollTo({top: 0, behavior: 'smooth'});" class="px-2.5 py-1 bg-amber-600 hover:bg-amber-500 text-white font-bold text-[11px] rounded-lg transition-colors cursor-pointer">
                    Nâng Cấp VIP
                </button>
            </div>
        `;
    }
}

window.loadChatHistoryFromDrive = loadChatHistoryFromDrive;
window.renderMessagesToDOM = renderMessagesToDOM;
window.sendChatMessage = sendChatMessage;
window.updateChatPermissionUI = updateChatPermissionUI;
