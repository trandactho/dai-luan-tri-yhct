// --- KHỞI CHẠY ỨNG DỤNG & ĐIỀU HƯỚNG TAB ---
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // 1. Tải và hiển thị ngay các dữ liệu local/offline có sẵn
        capNhatThongKeHeader();
        if (typeof capNhatTongSoTrieuChung === 'function') capNhatTongSoTrieuChung();
        if (typeof capNhatTongSoTracNghiem === 'function') capNhatTongSoTracNghiem();
        if (typeof capNhatDiemGanNhat === 'function') capNhatDiemGanNhat();

        if (typeof updateLuanTri === 'function') updateLuanTri();

        // 2. Chỉ truy vấn API Server/Drive NẾU THIẾT BỊ ĐANG CÓ MẠNG (ONLINE)
        setTimeout(() => {
            if (navigator.onLine) {
                if (typeof taiDanhSachSachTuDrive === 'function') taiDanhSachSachTuDrive();
                if (typeof initUserAuthSession === 'function') initUserAuthSession();
            } else {
                console.log("ℹ️ Đang ở chế độ Offline: Bỏ qua kết nối Google Drive & Auth Session.");
            }
        }, 500);

    } catch (err) {
        console.error("Lỗi trong quá trình khởi chạy ứng dụng:", err);
    } finally {
        // 3. Tắt màn hình chờ (Loader) bình thường kể cả khi Online hay Offline
        const loader = document.getElementById('app-loader');
        if (loader) {
            loader.classList.add('opacity-0');
            setTimeout(() => {
                loader.classList.add('hidden');
            }, 500);
        }
    }
});

// 4. (Tùy chọn bổ sung) Tự động kết nối lại Server ngay khi thiết bị có lại Wifi/4G
window.addEventListener('online', () => {
    console.log("🌐 Đã kết nối Internet trở lại! Đang đồng bộ dữ liệu...");
    if (typeof taiDanhSachSachTuDrive === 'function') taiDanhSachSachTuDrive();
    if (typeof initUserAuthSession === 'function') initUserAuthSession();
});


document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target && e.target.tagName === 'INPUT') {
        e.target.blur();
    }
});

function capNhatThongKeHeader() {
    const elThuoc = document.getElementById('total-thuoc');
    if (elThuoc && typeof duocLieuData !== 'undefined' && Array.isArray(duocLieuData)) {
        elThuoc.innerText = duocLieuData.length;
    }

    const elHuyet = document.getElementById('total-huyet');
    if (elHuyet && typeof huyetViData !== 'undefined' && Array.isArray(huyetViData)) {
        elHuyet.innerText = huyetViData.length;
    }

    const elDuocThien = document.getElementById('total-duocthien');
    if (elDuocThien) {
        if (typeof getCombinedDuocThienData === 'function') {
            elDuocThien.innerText = getCombinedDuocThienData().length;
        } else if (typeof duocThienData !== 'undefined' && Array.isArray(duocThienData)) {
            elDuocThien.innerText = duocThienData.length;
        }
    }

    const elTra = document.getElementById('total-tra');
    if (elTra) {
        if (typeof getCombinedTraData === 'function') {
            elTra.innerText = getCombinedTraData().length;
        } else if (typeof traData !== 'undefined' && Array.isArray(traData)) {
            elTra.innerText = traData.length;
        }
    }

    const elSach = document.getElementById('total-sach');
    if (elSach && typeof danhSachSachPDF !== 'undefined' && Array.isArray(danhSachSachPDF)) {
        elSach.innerText = danhSachSachPDF.length;
    }
}

async function switchTab(tabName, pushHistory = true) {
    const tabs = [
        { id: 'luantri', sec: 'sectionLuanTri', btn: 'btnTabLuanTri' },
        { id: 'huyetvi', sec: 'sectionHuyetVi', btn: 'btnTabHuyetVi' },
        { id: 'duoclieu', sec: 'sectionDuocLieu', btn: 'btnTabDuocLieu' },
        { id: 'duocthien', sec: 'sectionDuocThien', btn: 'btnTabDuocThien' },
        { id: 'tra', sec: 'sectionTra', btn: 'btnTabTra' },
        { id: 'tracnghiem', sec: 'sectionTracNghiem', btn: 'btnTabTracNghiem' },
        { id: 'tracuusach', sec: 'sectionTraCuuSach', btn: 'btnTabTraCuuSach' },
        { id: 'phoingu', sec: 'sectionPhoiNgu', btn: 'btnTabPhoiNgu' },
        { id: 'tuchan', sec: 'sectionTuChan', btn: 'btnTabTuChan' },
        { id: 'taikhoan', sec: 'sectionTaiKhoan', btn: 'btnTabTaiKhoan' }
    ];

    tabs.forEach(t => {
        const secEl = document.getElementById(t.sec);
        const btnEl = document.getElementById(t.btn);
        if (secEl) {
            secEl.classList.add('hidden');
            secEl.style.display = 'none';
        }
        if (btnEl) btnEl.classList.remove('tab-active');
    });

    const target = tabs.find(t => t.id === tabName);
    if (target) {
        const secEl = document.getElementById(target.sec);
        const btnEl = document.getElementById(target.btn);
        if (secEl) {
            secEl.classList.remove('hidden');
            secEl.style.display = 'block';
        }
        if (btnEl) {
            btnEl.classList.add('tab-active');
            btnEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    }

    if (pushHistory) {
        history.pushState({ tab: tabName }, '', window.location.href);
    }

    requestAnimationFrame(() => {
        if (tabName === 'duoclieu' && typeof renderActiveGrid === 'function' && currentRenderType !== 'duoclieu') filterDuocLieu();
        if (tabName === 'huyetvi' && typeof renderActiveGrid === 'function' && currentRenderType !== 'huyetvi') filterHuyetVi();
        if (tabName === 'tra' && typeof renderActiveGrid === 'function' && currentRenderType !== 'tra') filterTra();
        if (tabName === 'duocthien' && typeof renderActiveGrid === 'function' && currentRenderType !== 'duocthien') filterDuocThien();
        
        if (tabName === 'tracuusach' && typeof taiDanhSachSachTuDrive === 'function') taiDanhSachSachTuDrive();
        if (tabName === 'tuchan' && typeof hienThiLichSuVongChan === 'function') hienThiLichSuVongChan();
        if (tabName === 'phoingu' && typeof renderPhoiNguUI === 'function') renderPhoiNguUI();
        
        if (tabName === 'taikhoan') {
            if (typeof refreshUserDataFromServer === 'function') {
                refreshUserDataFromServer();
            } else if (typeof initUserAuthSession === 'function') {
                initUserAuthSession();
            }
        }
    });                
}

function exportPDF() {
    if (typeof moModalDonThuoc === 'function') {
        moModalDonThuoc();
    } else {
        window.print();
    }
}

async function taiDuLieuOffline() {
    const logErr = (code, detail) => {
        const msg = `❌ LỖI [${code}]: ${detail}`;
        console.error(msg);
        alert(msg);
        const btnEl = document.getElementById('btn-download-offline') || document.querySelector('[onclick*="taiDuLieuOffline"]');
        if (btnEl) {
            btnEl.disabled = false;
            btnEl.innerText = '☁️ Tải Offline';
        }
    };

    if (!('serviceWorker' in navigator)) {
        return logErr('ERR_NO_SW_SUPPORT', 'Trình duyệt không hỗ trợ Service Worker.');
    }

    const btnEl = document.getElementById('btn-download-offline') || document.querySelector('[onclick*="taiDuLieuOffline"]');
    if (btnEl) {
        btnEl.disabled = true;
        btnEl.innerText = 'Đang khởi chạy...';
    }

    try {
        // TỰ ĐỘNG CẬP NHẬT/ĐẮNG KÝ LẠI SW MỚI
        const registrations = await navigator.serviceWorker.getRegistrations();
        for (let reg of registrations) {
            await reg.update();
        }

        const reg = await navigator.serviceWorker.register('./sw.js');
        await reg.update();

        const readyTimeout = new Promise((_, reject) => 
            setTimeout(() => reject(new Error('SW không phản hồi. Vui lòng F5 lại trang!')), 4000)
        );

        await Promise.race([navigator.serviceWorker.ready, readyTimeout]);

        if (!navigator.serviceWorker.controller) {
            return logErr('ERR_NO_CONTROLLER', 'Đã cập nhật SW! Hãy bấm F5 (Tải lại trang) 1 lần rồi bấm Tải lại.');
        }

        const channel = new BroadcastChannel('pwa_offline_progress');
        
        channel.onmessage = (event) => {
    const data = event.data;
    if (!data) return;

    if (data.type === 'PROGRESS') {
        if (btnEl) btnEl.innerText = `Đang tải... ${data.percent}% (${data.processed}/${data.total})`;
    }

    if (data.type === 'COMPLETE') {
        if (btnEl) {
            btnEl.disabled = false;
            btnEl.innerHTML = '☁️ Tải Offline';
        }

        // Báo lỗi thực tế nếu SW đang chạy là bản cũ
        if (typeof data.total === 'undefined') {
            alert('⚠️ Service Worker cũ chưa nhả cache. Đang làm mới trang...');
            window.location.reload();
            return;
        }

        let msg = `✅ Tải hoàn tất!\n- Thành công: ${data.count}/${data.total} file.\n- Bị lỗi/bỏ qua: ${data.failed} file.`;
        if (data.failedList && data.failedList.length > 0) {
            msg += `\n\n📌 Danh sách file chưa tải được:\n` + data.failedList.join('\n');
        }

        alert(msg);
        channel.close();
    }
};


                                // Lọc danh sách ảnh huyệt vị dựa vào mã WHO (ma_who)
        let listAnh = [];
let missingWhoCount = 0;

try {
    let rawData = [];
    if (typeof huyetViData !== 'undefined' && Array.isArray(huyetViData)) rawData = huyetViData;
    else if (typeof DANH_SACH_HUYET_VI !== 'undefined' && Array.isArray(DANH_SACH_HUYET_VI)) rawData = DANH_SACH_HUYET_VI;

    rawData.forEach((h, index) => {
        if (!h) return;
        const maWho = h.ma_who || h.maWHO || h.ma || '';
        const safe = String(maWho).trim().replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
        if (safe) {
            listAnh.push(`./hinhanhhuyetvi/${safe}.png`);
        } else {
            missingWhoCount++; // Bẫy đếm số huyệt thiếu ma_who
        }
    });

    listAnh = [...new Set(listAnh)];
    
    // Báo thông số quét ban đầu ra alert trên điện thoại nếu phát hiện bất thường
    if (listAnh.length < 397) {
        console.warn(`[Quét ảnh] Tìm thấy ${listAnh.length}/397 mã ảnh. Có ${missingWhoCount} huyệt thiếu ma_who.`);
    }
} catch (e) {
    return logErr('ERR_DATA_PARSE', 'Lỗi quét danh sách ảnh: ' + e.message);
}

        if (btnEl) btnEl.innerText = 'Đang tiến hành tải...';

        navigator.serviceWorker.controller.postMessage({
            type: 'CACHE_ALL',
            imageList: listAnh
        });

    } catch (err) {
        logErr('ERR_CLIENT_TRY_CATCH', err.message || err);
    }
}



// --- BỘ XỬ LÝ VUỐT CHUYỂN TAB TỐI ƯU HÓA MOBILE ---

let touchStartX = 0;
let touchStartY = 0;
let touchStartTime = 0;
let isSwipeIgnored = false;

const ALL_TABS = ['luantri', 'huyetvi', 'duoclieu', 'duocthien', 'tra', 'tracnghiem', 'tracuusach', 'phoingu', 'tuchan', 'taikhoan'];

function shouldIgnoreSwipe(target) {
    if (!target) return false;

    const ignoredTags = ['INPUT', 'TEXTAREA', 'SELECT', 'OPTION'];
    if (ignoredTags.includes(target.tagName) || target.closest('input, textarea, select')) {
        return true;
    }

    const activeModal = target.closest('#modal-don-thuoc, #modal-thong-tin-yhct, #modal-role-lock, #modal-cai-dat');
    if (activeModal && !activeModal.classList.contains('hidden')) return true;

    const horizontalScrollBox = target.closest('.overflow-x-auto');
    if (horizontalScrollBox && horizontalScrollBox.scrollWidth > horizontalScrollBox.clientWidth) {
        return true;
    }

    if (target.closest('#sach-chat-box, #ai-chat-box, #vong-chan-history-list, #quiz-review-list')) {
        return true;
    }

    return false;
}

document.addEventListener('touchstart', (e) => {
    // Nếu tắt tính năng vuốt chuyển tab trong cài đặt -> bỏ qua và đánh dấu ignore ngay lập tức
    if (localStorage.getItem('setting_swipe_tabs') === 'false') {
        isSwipeIgnored = true;
        return;
    }

    if (e.touches.length !== 1) {
        isSwipeIgnored = true;
        return;
    }

    if (shouldIgnoreSwipe(e.target)) {
        isSwipeIgnored = true;
        return;
    }

    isSwipeIgnored = false;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchStartTime = Date.now();
}, { passive: true });

document.addEventListener('touchend', (e) => {
    // Kiểm tra thêm điều kiện cài đặt ở touchend để đảm bảo tuyệt đối
    if (localStorage.getItem('setting_swipe_tabs') === 'false') return;
    if (isSwipeIgnored || !e.changedTouches || e.changedTouches.length === 0) return;

    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const duration = Date.now() - touchStartTime;

    if (duration > 500) return;

    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;

    if (Math.abs(deltaX) >= 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
        handleSwipeDirection(deltaX < 0 ? 'NEXT' : 'PREV');
    }
}, { passive: true });

document.addEventListener('touchcancel', () => {
    isSwipeIgnored = true;
}, { passive: true });

function handleSwipeDirection(direction) {
    const activeBtn = document.querySelector('nav button.tab-active');
    if (!activeBtn) return;
    
    const currentTabId = activeBtn.id.replace('btnTab', '').toLowerCase();
    const currentIndex = ALL_TABS.findIndex(t => t.toLowerCase() === currentTabId);

    if (currentIndex === -1) return;

    let targetIndex = currentIndex;
    if (direction === 'NEXT') {
        targetIndex = (currentIndex + 1) % ALL_TABS.length;
    } else if (direction === 'PREV') {
        targetIndex = (currentIndex - 1 + ALL_TABS.length) % ALL_TABS.length;
    }

    const targetTabName = ALL_TABS[targetIndex];
    switchTab(targetTabName);
}

// --- BỘ KHÔI PHỤC TRẠNG THÁI & XỬ LÝ NÚT BACK ---

function khoiPhucTrangThaiTruocDo() {
    const rawState = sessionStorage.getItem('last_catalog_state') || localStorage.getItem('last_catalog_state');
    if (!rawState) return;

    try {
        const state = JSON.parse(rawState);
        if (state.tab && typeof switchTab === 'function') {
            switchTab(state.tab, false);

            const searchInput = document.getElementById(`search${capitalize(state.tab)}`);
            if (searchInput && state.search) searchInput.value = state.search;

            setTimeout(() => {
                const filterEl = document.getElementById(`filterNhom${capitalize(state.tab)}`) || document.getElementById(`filterKinhLac`);
                if (filterEl && state.group) filterEl.value = state.group;

                if (state.tab === 'duoclieu' && typeof filterDuocLieu === 'function') filterDuocLieu();
                else if (state.tab === 'huyetvi' && typeof filterHuyetVi === 'function') filterHuyetVi();
                else if (state.tab === 'tra' && typeof filterTra === 'function') filterTra();
                else if (state.tab === 'duocthien' && typeof filterDuocThien === 'function') filterDuocThien();

                if (typeof state.scroll === 'number' && state.scroll > 0) {
                    window.scrollTo({ top: state.scroll, behavior: 'instant' });
                }
            }, 150);
        }
    } catch (e) {
        console.error("Lỗi khôi phục vị trí catalog:", e);
    }
}

// Khôi phục khi mở lại app từ trình duyệt
window.addEventListener('pageshow', khoiPhucTrangThaiTruocDo);

// Xử lý nút Back của trình duyệt / thiết bị di động
window.addEventListener('popstate', (e) => {
    // Nếu tắt tính năng chặn nút back trong cài đặt -> cho phép trình duyệt xử lý tự nhiên hoàn toàn
    if (localStorage.getItem('setting_back_block') === 'false') return;

    // 1. Kiểm tra và đóng các modal đang mở trước
    const openModals = [
        'modal-cai-dat',
        'modal-don-thuoc',
        'modal-tuan-nay-an-gi',
        'modal-thong-tin-yhct',
        'modal-role-lock'
    ];
    
    let closedAnyModal = false;
    for (const modalId of openModals) {
        const modalEl = document.getElementById(modalId);
        if (modalEl && !modalEl.classList.contains('hidden')) {
            modalEl.classList.add('hidden');
            closedAnyModal = true;
        }
    }

    if (closedAnyModal) return;

    const activeBtn = document.querySelector('nav button.tab-active');
    const currentTabId = activeBtn ? activeBtn.id.replace('btnTab', '').toLowerCase() : '';

    if (currentTabId && currentTabId !== 'taikhoan') {
        history.pushState({ tab: 'taikhoan' }, '', window.location.href);
        switchTab('taikhoan', false);
    } 
});

// --- QUẢN LÝ MODAL CÀI ĐẶT & TRẠNG THÁI ---

function moModalCaiDat() {
    const modal = document.getElementById('modal-cai-dat');
    if (modal) {
        modal.classList.remove('hidden');
        
        // Đồng bộ trạng thái checkbox với localStorage
        const swipeToggle = document.getElementById('setting-swipe-tabs');
        const backToggle = document.getElementById('setting-back-block');
        
        const isSwipeOn = localStorage.getItem('setting_swipe_tabs') !== 'false';
        const isBackBlockOn = localStorage.getItem('setting_back_block') !== 'false';
        
        if (swipeToggle) swipeToggle.checked = isSwipeOn;
        if (backToggle) backToggle.checked = isBackBlockOn;
    }
}

function dongModalCaiDat() {
    const modal = document.getElementById('modal-cai-dat');
    if (modal) modal.classList.add('hidden');
}

function toggleSettingSwipe(checkbox) {
    localStorage.setItem('setting_swipe_tabs', checkbox.checked);
}

function toggleSettingBackBlock(checkbox) {
    localStorage.setItem('setting_back_block', checkbox.checked);
}

// --- ĐIỀU CHỈNH TRONG SỰ KIỆN VUỐT TAB ---
document.addEventListener('touchstart', (e) => {
    // Nếu tắt tính năng vuốt chuyển tab trong cài đặt -> bỏ qua
    if (localStorage.getItem('setting_swipe_tabs') === 'false') return;

    if (e.touches.length !== 1) {
        isSwipeIgnored = true;
        return;
    }

    if (shouldIgnoreSwipe(e.target)) {
        isSwipeIgnored = true;
        return;
    }

    isSwipeIgnored = false;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchStartTime = Date.now();
}, { passive: true });

// --- ĐIỀU CHỈNH TRONG SỰ KIỆN POPSTATE (NÚT BACK) ---
window.addEventListener('popstate', (e) => {
    // Nếu tắt tính năng chặn nút back trong cài đặt -> cho phép trình duyệt xử lý tự nhiên
    if (localStorage.getItem('setting_back_block') === 'false') return;

    const openModals = [
        'modal-cai-dat',
        'modal-don-thuoc',
        'modal-tuan-nay-an-gi',
        'modal-thong-tin-yhct',
        'modal-role-lock'
    ];
    
    let closedAnyModal = false;
    for (const modalId of openModals) {
        const modalEl = document.getElementById(modalId);
        if (modalEl && !modalEl.classList.contains('hidden')) {
            modalEl.classList.add('hidden');
            closedAnyModal = true;
        }
    }

    if (closedAnyModal) return;

    const activeBtn = document.querySelector('nav button.tab-active');
    const currentTabId = activeBtn ? activeBtn.id.replace('btnTab', '').toLowerCase() : '';

    if (currentTabId && currentTabId !== 'taikhoan') {
        history.pushState({ tab: 'taikhoan' }, '', window.location.href);
        switchTab('taikhoan', false);
    } 
});
