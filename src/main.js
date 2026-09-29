// --- KHỞI CHẠY ỨNG DỤNG & ĐIỀU HƯỚNG TAB ---

document.addEventListener('DOMContentLoaded', async () => {
    try {
        capNhatThongKeHeader();
        if (typeof capNhatTongSoTrieuChung === 'function') capNhatTongSoTrieuChung();
        if (typeof capNhatTongSoTracNghiem === 'function') capNhatTongSoTracNghiem();
        if (typeof capNhatDiemGanNhat === 'function') capNhatDiemGanNhat();

        if (typeof updateLuanTri === 'function') updateLuanTri();

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
    if (!history.state) {
        history.replaceState({ tab: 'luantri' }, '', window.location.href);
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

    // Chỉ pushState nếu tab chuyển đổi khác với tab hiện tại trong history
    if (pushHistory && history.state?.tab !== tabName) {
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

        // Tự động kích hoạt controller nếu chưa nhận ngay
        if (!navigator.serviceWorker.controller) {
            if (reg.active) {
                reg.active.postMessage({ type: 'SKIP_WAITING' });
            }
            await new Promise(resolve => setTimeout(resolve, 300));
        }

        const activeController = navigator.serviceWorker.controller || reg.active;
        if (!activeController) {
            return logErr('ERR_NO_CONTROLLER', 'Chưa thể kết nối Service Worker! Hãy bấm F5 để thử lại.');
        }

        let channel = null;
        if ('BroadcastChannel' in window) {
            channel = new BroadcastChannel('pwa_offline_progress');
            channel.onmessage = (event) => {
                const data = event.data;
                if (!data) return;

                if (data.type === 'SW_ERROR') {
                    logErr(data.code || 'ERR_SW', data.detail || 'Lỗi không xác định từ Service Worker.');
                    channel.close();
                    return;
                }

                if (data.type === 'PROGRESS') {
                    if (btnEl) btnEl.innerText = `Đang tải... ${data.percent}% (${data.processed}/${data.total})`;
                }

                if (data.type === 'COMPLETE') {
                    if (btnEl) {
                        btnEl.disabled = false;
                        btnEl.innerHTML = '☁️ Tải Offline';
                    }

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
        }

        // Lọc danh sách ảnh huyệt vị
        let listAnh = [];
        try {
            let rawData = [];
            if (typeof huyetViData !== 'undefined' && Array.isArray(huyetViData) && huyetViData.length > 0) {
                rawData = huyetViData;
            } else if (typeof DANH_SACH_HUYET_VI !== 'undefined' && Array.isArray(DANH_SACH_HUYET_VI) && DANH_SACH_HUYET_VI.length > 0) {
                rawData = DANH_SACH_HUYET_VI;
            } else if (window.huyetViData && Array.isArray(window.huyetViData) && window.huyetViData.length > 0) {
                rawData = window.huyetViData;
            }

            if (rawData.length > 0) {
                rawData.forEach(h => {
                    if (!h) return;
                    const maWho = h.ma_who || h.maWHO || h.ma || '';
                    const safe = String(maWho).trim().replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
                    if (safe) listAnh.push(`./hinhanhhuyetvi/${safe}.png`);
                });
            }

            if (listAnh.length === 0) {
                try {
                    const controller = new AbortController();
                    const timeoutId = setTimeout(() => controller.abort(), 3000);
                    const res = await fetch('./huyetvidata.js', { signal: controller.signal });
                    clearTimeout(timeoutId);

                    if (res.ok) {
                        const text = await res.text();
                        const matches = text.match(/["']?ma_?who["']?\s*:\s*["']([^"']+)["']/gi) || [];
                        matches.forEach(m => {
                            const val = m.match(/:\s*["']([^"']+)["']/);
                            if (val && val[1]) {
                                const safe = val[1].trim().replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
                                if (safe) listAnh.push(`./hinhanhhuyetvi/${safe}.png`);
                            }
                        });
                    }
                } catch (fetchErr) {
                    console.warn('Lỗi fetch huyetvidata.js:', fetchErr);
                }
            }
            listAnh = [...new Set(listAnh)];
            console.log(`[Offline Check] Đã quét thành công ${listAnh.length} ảnh huyệt vị.`);
        } catch (e) {
            return logErr('ERR_DATA_PARSE', 'Lỗi quét danh sách ảnh: ' + e.message);
        }

        if (btnEl) btnEl.innerText = 'Đang tiến hành tải...';

        activeController.postMessage({
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

            const tabCap = typeof capitalize === 'function' 
                ? capitalize(state.tab) 
                : (state.tab.charAt(0).toUpperCase() + state.tab.slice(1));

            const searchInput = document.getElementById(`search${tabCap}`);
            if (searchInput && state.search) searchInput.value = state.search;

            setTimeout(() => {
                const filterEl = document.getElementById(`filterNhom${tabCap}`) || document.getElementById(`filterKinhLac`);
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

window.addEventListener('pageshow', khoiPhucTrangThaiTruocDo);

window.addEventListener('popstate', (e) => {
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

    if (closedAnyModal) {
        const activeBtn = document.querySelector('nav button.tab-active');
        const currentTabId = activeBtn ? activeBtn.id.replace('btnTab', '').toLowerCase() : 'luantri';
        history.pushState({ tab: currentTabId }, '', window.location.href);
        return;
    }

    if (e.state && e.state.tab) {
        switchTab(e.state.tab, false);
    }
});

// --- QUẢN LÝ MODAL CÀI ĐẶT ---

function moModalCaiDat() {
    const modal = document.getElementById('modal-cai-dat');
    if (modal) {
        modal.classList.remove('hidden');
        
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
