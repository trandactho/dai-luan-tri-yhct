// ==========================================
// SERVICE WORKER - ĐẠI LUẬN TRỊ YHCT v1.7.8 (Tối ưu tuyệt đối & Có dọn rác)
// ==========================================

const CACHE_NAME = 'dailuantri-v1.7.8-fixed-v7';

// Chỉ khai báo khung giao diện tối thiểu để web bật lên tức thì[span_0](start_span)[span_0](end_span)
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './style.css',
    './manifest.json',
    'https://cdn.tailwindcss.com',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/dompurify/3.0.6/purify.min.js',
    './src/core/config.js',
    './src/core/utils.js',
    './src/main.js'
];

// 1. Cài đặt cốt lõi[span_1](start_span)[span_1](end_span)
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(async (cache) => {
            for (const url of ASSETS_TO_CACHE) {
                try {
                    await cache.add(url);
                } catch (err) {
                    console.warn(`Không thể cache tệp tĩnh: ${url}`, err);
                }
            }
        })
    );
    self.skipWaiting();
});

// 2. Dọn dẹp cache rác cũ khi đổi phiên bản[span_2](start_span)[span_2](end_span)
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// 3. Xử lý Fetch phân loại tối ưu[span_3](start_span)[span_3](end_span)
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Bỏ qua Netlify Functions và Google Apps Script (Chat API)[span_4](start_span)[span_4](end_span)
    if (
        url.pathname.includes('/.netlify/functions/') || 
        url.hostname.includes('script.google.com') || 
        event.request.method !== 'GET'
    ) {
        return;
    }

    // A. Tệp HTML / Điều hướng: Network First (Luôn ưu tiên lấy bản mới nhất từ mạng)[span_5](start_span)[span_5](end_span)
    if (event.request.mode === 'navigate' || url.pathname.endsWith('.html') || url.pathname === '/') {
        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseToCache);
                    });
                    return response;
                })
                .catch(() => caches.match(event.request))
        );
        return;
    }

    // B. Thư viện CDN ngoài, Dữ liệu (*data.js), Hình ảnh huyệt vị: CACHE FIRST[span_6](start_span)[span_6](end_span)
    if (
        url.hostname.includes('cdnjs.cloudflare.com') ||
        url.hostname.includes('tailwindcss.com') ||
        url.pathname.includes('data.js') || 
        url.pathname.includes('/hinhanhhuyetvi/')
    ) {
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                if (cachedResponse) {
                    return cachedResponse; 
                }
                return fetch(event.request).then((networkResponse) => {
                    if (networkResponse && networkResponse.status === 200) {
                        const responseToCache = networkResponse.clone();
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, responseToCache);
                        });
                    }
                    return networkResponse;
                });
            })
        );
        return;
    }

    // C. Các tệp JS module / CSS chính: Stale-While-Revalidate[span_7](start_span)[span_7](end_span)
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            const fetchPromise = fetch(event.request).then((networkResponse) => {
                if (networkResponse && networkResponse.status === 200) {
                    const responseToCache = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseToCache);
                    });
                }
                return networkResponse;
            }).catch(() => {});

            return cachedResponse || fetchPromise;
        })
    );
});

// 4. Lắng nghe lệnh tải Offline thủ công (Kèm cơ chế quét và dọn rác cache thông minh)
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'CACHE_ALL') {
        caches.open(CACHE_NAME).then(async (cache) => {
            // Tổng hợp danh sách tất cả các tệp dữ liệu và module hợp lệ
            const allFilesToDownload = [
                ...ASSETS_TO_CACHE,
                './luantridata.js', './huyetvidata.js',
                './duoclieudata1.js', './duoclieudata2.js', './duoclieudata3.js', './duoclieudata4.js', './duoclieudata5.js',
                './duocthiendata.js', './tradata.js', './questiondata.js',
                './src/modules/tai-khoan.js', './src/modules/luan-tri.js', './src/modules/catalog.js',
                './src/modules/phoi-ngu.js', './src/modules/trac-nghiem.js', './src/modules/thu-vien.js', './src/modules/tu-chan.js'
            ];
            // Tự động quét từ 1 đến 397. Các ảnh chưa có (404) sẽ được try...catch bỏ qua tự động
            const listAnhHuyetVi = [];
            for (let i = 1; i <= 397; i++) {
                listAnhHuyetVi.push(`./hinhanhhuyetvi/BL${i}.png`);
            }


            // Tạo tập hợp (Set) chứa toàn bộ các URL chuẩn hợp lệ để đối chiếu
            const validUrlsSet = new Set([
                ...allFilesToDownload.map(url => new URL(url, self.location).href),
                ...listAnhHuyetVi.map(url => new URL(url, self.location).href)
            ]);

            // 🟢 BƯỚC DỌN RÁC: Quét kho cache hiện tại, xóa bỏ các tệp lạ hoặc rác không nằm trong danh sách hợp lệ
            const cachedKeys = await cache.keys();
            for (const request of cachedKeys) {
                const reqUrl = request.url;
                // Giữ lại các tệp gốc quan trọng như trang chủ, manifest, style, còn lại nếu không khớp danh sách hợp lệ sẽ bị xóa
                const isCoreEssential = reqUrl.endsWith('/') || reqUrl.endsWith('index.html') || reqUrl.endsWith('style.css') || reqUrl.endsWith('manifest.json');
                
                if (!validUrlsSet.has(reqUrl) && !isCoreEssential) {
                    await cache.delete(request);
                    console.log('🧹 Đã dọn dẹp tệp rác khỏi cache:', reqUrl);
                }
            }

            // Tải và bổ sung các tệp dữ liệu/module còn thiếu
            for (const url of allFilesToDownload) {
                try {
                    const matched = await cache.match(url);
                    if (!matched) {
                        await cache.add(url);
                    }
                } catch (e) {}
            }

            // Tải và bổ sung ảnh huyệt vị (Không nhân đôi cache)[span_8](start_span)[span_8](end_span)
            let successCount = 0;
            await Promise.all(
                listAnhHuyetVi.map(async (url) => {
                    try {
                        const matched = await cache.match(url);
                        if (matched) {
                            successCount++;
                            return;
                        }
                        await cache.add(url);
                        successCount++;
                    } catch (err) {
                        console.warn(`Không tìm thấy file ${url}`);
                    }
                })
            );

            console.log(`📥 Đã đồng bộ hoàn tất Cache Offline và dọn rác thành công! Tổng số ảnh: ${successCount}/${listAnhHuyetVi.length}`);
        });
    }
});
