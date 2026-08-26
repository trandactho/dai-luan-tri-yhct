// --- KHỞI CHẠY ỨNG DỤNG & ĐIỀU HƯỚNG TAB ---

document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Bỏ qua việc tự động khôi phục / lọc nặng khi vừa mở app để giảm tải cho CPU
        capNhatThongKeHeader();
        if (typeof capNhatTongSoTrieuChung === 'function') capNhatTongSoTrieuChung();
        if (typeof capNhatTongSoTracNghiem === 'function') capNhatTongSoTracNghiem();
        if (typeof capNhatDiemGanNhat === 'function') capNhatDiemGanNhat();

        if (typeof updateLuanTri === 'function') updateLuanTri();

        // Cho phép đồng bộ Drive chạy sau cùng bằng setTimeout để không nghẽn luồng chính
        setTimeout(() => {
            if (typeof taiDanhSachSachTuDrive === 'function') taiDanhSachSachTuDrive();
            if (typeof initUserAuthSession === 'function') initUserAuthSession();
        }, 500);

    } catch (err) {
        console.error("Lỗi trong quá trình khởi chạy ứng dụng:", err);
    } finally {
        const loader = document.getElementById('app-loader');
        if (loader) {
            loader.classList.add('opacity-0');
            setTimeout(() => {
                loader.classList.add('hidden');
              }, 500);
        }
    }
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

    // Đẩy lịch sử trình duyệt để nút Back có thể bắt được sự kiện chuyển tab
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
    if (!('serviceWorker' in navigator)) {
        alert('Trình duyệt của bạn không hỗ trợ tính năng Offline.');
        return;
    }

    try {
        const registration = await navigator.serviceWorker.ready;
        const activeWorker = navigator.serviceWorker.controller || registration.active;

        if (activeWorker) {
            activeWorker.postMessage({ type: 'CACHE_ALL' });
            alert('Đã lưu toàn bộ 10 module và dữ liệu Offline thành công!');
        } else {
            alert('Service Worker đang khởi tạo, vui lòng tải lại trang (F5) và thử lại.');
        }
    } catch (err) {
        console.error('Lỗi tải offline:', err);
        alert('Chưa thể lưu Offline: ' + err.message);
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

    // 1. Chỉ chặn khi người dùng đang gõ trực tiếp trong ô input, textarea hoặc chọn select/option
    const ignoredTags = ['INPUT', 'TEXTAREA', 'SELECT', 'OPTION'];
    if (ignoredTags.includes(target.tagName) || target.closest('input, textarea, select')) {
        return true;
    }

    // 2. Chặn khi đang mở Modal / Popup chức năng
    const activeModal = target.closest('#modal-don-thuoc, #modal-thong-tin-yhct, #modal-role-lock');
    if (activeModal && !activeModal.classList.contains('hidden')) return true;

    // 3. Chặn nếu trúng vùng cuộn NGANG riêng biệt (bảng dữ liệu, danh sách ngang)
    const horizontalScrollBox = target.closest('.overflow-x-auto');
    if (horizontalScrollBox && horizontalScrollBox.scrollWidth > horizontalScrollBox.clientWidth) {
        return true;
    }

    // 4. Chặn nếu đang tương tác bên trong khung Chat AI hoặc danh sách lịch sử có thể cuộn dọc
    if (target.closest('#sach-chat-box, #ai-chat-box, #vong-chan-history-list, #quiz-review-list')) {
        return true;
    }

    return false;
}

document.addEventListener('touchstart', (e) => {
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
    if (isSwipeIgnored || !e.changedTouches || e.changedTouches.length === 0) return;

    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const duration = Date.now() - touchStartTime;

    // Giới hạn thời gian vuốt trong vòng 0.5s để đảm bảo thao tác dứt khoát
    if (duration > 500) return;

    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;

    // Đặt ngưỡng dịch chuyển ngang tối thiểu 45px và độ lệch ngang lớn hơn 1.5 lần độ lệch dọc
    // Giúp người dùng lướt đọc nội dung dọc thoải mái mà không bị nhảy tab oan.
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

// --- BỘ KHÔI PHỤC VỊ TRÍ & TAB KHI BẤM BACK TỪ GOOGLE ---
function khoiPhucTrangThaiTruocDo() {
    const rawState = sessionStorage.getItem('last_catalog_state') || localStorage.getItem('last_catalog_state');
    if (!rawState) return;

    try {
        const state = JSON.parse(rawState);
        if (state.tab && typeof switchTab === 'function') {
            // Chuyển về đúng tab đang xem
            switchTab(state.tab);

            // Điền lại từ khóa tìm kiếm
            const searchInput = document.getElementById(`search${capitalize(state.tab)}`);
            if (searchInput && state.search) searchInput.value = state.search;

            // Chờ dữ liệu Render xong rồi cuộn về đúng tọa độ ban đầu
            setTimeout(() => {
                const filterEl = document.getElementById(`filterNhom${capitalize(state.tab)}`) || document.getElementById(`filterKinhLac`);
                if (filterEl && state.group) filterEl.value = state.group;

                if (state.tab === 'duoclieu' && typeof filterDuocLieu === 'function') filterDuocLieu();
                else if (state.tab === 'huyetvi' && typeof filterHuyetVi === 'function') filterHuyetVi();
                else if (state.tab === 'tra' && typeof filterTra === 'function') filterTra();
                else if (state.tab === 'duocthien' && typeof filterDuocThien === 'function') filterDuocThien();

                // Tự động cuộn trang xuống đúng vị trí cũ
                if (typeof state.scroll === 'number' && state.scroll > 0) {
                    window.scrollTo({ top: state.scroll, behavior: 'instant' });
                }
            }, 150);
        }
    } catch (e) {
        console.error("Lỗi khôi phục vị trí catalog:", e);
    }
}
// Khôi phục ngay khi app được mở lại từ tab Google
window.addEventListener('pageshow', khoiPhucTrangThaiTruocDo);

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
    const activeBtn = document.querySelector('nav button.tab-active');
    const currentTabId = activeBtn ? activeBtn.id.replace('btnTab', '').toLowerCase() : '';

    // Nếu KHÔNG phải tab 10 (taikhoan), bấm back sẽ nhảy về tab 10
    if (currentTabId && currentTabId !== 'taikhoan') {
        history.pushState({ tab: 'taikhoan' }, '', window.location.href);
        switchTab('taikhoan', false);
    } 
    // Nếu ĐÃ ĐANG ở tab 10 (taikhoan), không can thiệp để hệ thống/trình duyệt tự xử lý mặc định (thoát trang hoặc về trang trước)
});
