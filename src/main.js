// --- KHỞI CHẠY ỨNG DỤNG & ĐIỀU HƯỚNG TAB ---

document.addEventListener('DOMContentLoaded', async () => {
    try {
        if (typeof restoreDuocLieuState === 'function') restoreDuocLieuState();
        if (typeof restoreHuyetViState === 'function') restoreHuyetViState();

        capNhatThongKeHeader();
        if (typeof capNhatTongSoTrieuChung === 'function') capNhatTongSoTrieuChung();
        if (typeof capNhatTongSoTracNghiem === 'function') capNhatTongSoTracNghiem();
        if (typeof capNhatDiemGanNhat === 'function') capNhatDiemGanNhat();

        if (typeof updateLuanTri === 'function') updateLuanTri();

        if (typeof taiDanhSachSachTuDrive === 'function') {
            taiDanhSachSachTuDrive();
        }

        if (typeof initUserAuthSession === 'function') {
            initUserAuthSession();
        }

    } catch (err) {
        console.error("Lỗi trong quá trình khởi chạy ứng dụng:", err);
    } finally {
        const loader = document.getElementById('app-loader');
        if (loader) {
            loader.classList.add('opacity-0');
            setTimeout(() => {
                loader.classList.add('hidden');
            }, 300);
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

async function switchTab(tabName) {
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

        requestAnimationFrame(() => {
        if (tabName === 'duoclieu' && typeof filterDuocLieu === 'function') filterDuocLieu();
        if (tabName === 'huyetvi' && typeof filterHuyetVi === 'function') filterHuyetVi();
        if (tabName === 'tra' && typeof filterTra === 'function') filterTra();
        if (tabName === 'duocthien' && typeof filterDuocThien === 'function') filterDuocThien();
        if (tabName === 'tracuusach' && typeof taiDanhSachSachTuDrive === 'function') taiDanhSachSachTuDrive();
        if (tabName === 'tuchan' && typeof hienThiLichSuVongChan === 'function') hienThiLichSuVongChan();
        if (tabName === 'phoingu' && typeof renderPhoiNguUI === 'function') renderPhoiNguUI();
        
        // TỰ ĐỘNG ĐỒNG BỘ NGẦM VỚI SERVER KHI BẤM VÀO TAB TÀI KHOẢN
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

let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

const ALL_TABS = ['luantri', 'huyetvi', 'duoclieu', 'duocthien', 'tra', 'tracnghiem', 'tracuusach', 'phoingu', 'tuchan', 'taikhoan'];

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;

    if (Math.abs(deltaY) > Math.abs(deltaX)) return;

    const threshold = 60;
    if (Math.abs(deltaX) < threshold) return;

    const activeBtn = document.querySelector('nav button.tab-active');
    if (!activeBtn) return;
    
    const currentTabId = activeBtn.id.replace('btnTab', '').toLowerCase();
    const currentIndex = ALL_TABS.findIndex(t => t.toLowerCase() === currentTabId);

    if (currentIndex === -1) return;

    if (deltaX < 0) {
        const nextIndex = (currentIndex + 1) % ALL_TABS.length;
        switchTab(ALL_TABS[nextIndex]);
    } else if (deltaX > 0) {
        const prevIndex = (currentIndex - 1 + ALL_TABS.length) % ALL_TABS.length;
        switchTab(ALL_TABS[prevIndex]);
    }
}
