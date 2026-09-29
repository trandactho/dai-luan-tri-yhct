// ==========================================
// SERVICE WORKER - ĐẢM BẢO CACHE CHUẨN OFFLINE 100%
// ==========================================

const CACHE_NAME = 'dailuantri-v1.8.0-fix13'; // Tăng version để tự động xóa cache phình cũ

const allFilesToDownload = [
    './', 
    './index.html', 
    './style.css', 
    './manifest.json',

    // --- CDN BÊN NGOÀI (CẦN CACHE BẮT BUỘC) ---
    'https://cdn.tailwindcss.com',

    // --- FILE NỘI BỘ ---
    './assets/css/all.min.css',
    './assets/webfonts/fa-brands-400.woff2',
    './assets/webfonts/fa-regular-400.woff2',
    './assets/webfonts/fa-solid-900.woff2',
    './assets/webfonts/fa-v4compatibility.woff2',

    './luantridata.js', 
    './huyetvidata.js',
    './duoclieudata1.js', './duoclieudata2.js', './duoclieudata3.js', './duoclieudata4.js', './duoclieudata5.js',
    './duocthiendata.js', './tradata.js', './questiondata.js',
    './src/modules/tai-khoan.js', 
    './src/modules/luan-tri.js', 
    './src/modules/catalog.js',
    './src/modules/phoi-ngu.js', 
    './src/modules/trac-nghiem.js', 
    './src/modules/thu-vien.js', 
    './src/modules/tu-chan.js',
    './src/core/ai-service.js',
    './src/core/config.js',
    './src/core/utils.js',
    './src/main.js'
];

// 1. CÀI ĐẶT: Ép tải toàn bộ file trong danh sách vào Cache
self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then(async (cache) => {
            for (const url of allFilesToDownload) {
                try {
                    const response = await fetch(url, { mode: 'cors' });
                    if (response.ok || response.type === 'opaque') {
                        await cache.put(url, response);
                    }
                } catch (e) {
                    console.warn('[SW Install] Bỏ qua file lỗi hoặc không có mạng:', url);
                }
            }
        })
    );
});

// 2. KÍCH HOẠT: Xóa Cache tên cũ và dọn dẹp các file rác thừa
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) return caches.delete(key);
                })
            );
        }).then(async () => {
            // Lọc và xóa các file rác nhưng GIỮ LẠI danh sách chính + ảnh offline
            const cache = await caches.open(CACHE_NAME);
            const requests = await cache.keys();
            const validUrls = new Set(allFilesToDownload.map(f => new URL(f, self.location.origin).href));

            return Promise.all(
                requests.map(req => {
                    const url = req.url;
                    // Bỏ qua không xóa nếu là file trong allFilesToDownload HOẶC là file ảnh/dữ liệu offline
                    const isStaticFile = validUrls.has(url);
                    const isOfflineImage = url.includes('/hinhanhhuyetvi/') || 
                                           url.includes('/assets/') || 
                                           /\.(jpg|jpeg|png|webp|gif|svg|woff2)$/i.test(url);

                    if (!isStaticFile && !isOfflineImage) {
                        return cache.delete(req);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});


// 3. LẤY DỮ LIỆU: Ưu tiên Cache -> Không có mới gọi Mạng (KHÔNG tự động cache các request API/động)
self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;

    const url = new URL(event.request.url);

    // Chỉ xử lý giao thức HTTP/HTTPS
    if (!url.protocol.startsWith('http')) return;

    // KIỂM TRA REQUEST API / DỮ LIỆU ĐỘNG (KHÔNG LƯU VÀO CACHE THÊM)
    const isDynamicOrApi = 
        url.pathname.includes('/.netlify/') ||
        url.hostname.includes('supabase.co') ||
        url.hostname.includes('script.google.com') ||
        url.hostname.includes('googleapis.com') ||
        url.hostname.includes('google-analytics.com') ||
        url.search.length > 0; //Request có tham số query string (đăng nhập, tìm kiếm, auth...)

    event.respondWith(
        caches.match(event.request, { ignoreSearch: true }).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse; // File đã cache từ trước -> Trả về ngay
            }

            // Chưa có trong cache -> Fetch qua mạng
            return fetch(event.request).then((networkResponse) => {
                // CHỈ lưu cache tự động nếu KHÔNG PHẢI là API hay request động
                if (!isDynamicOrApi && networkResponse && (networkResponse.status === 200 || networkResponse.type === 'opaque')) {
                    const responseToCache = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseToCache);
                    });
                }
                return networkResponse;
            }).catch(() => {
                if (event.request.mode === 'navigate') {
                    return caches.match('./index.html') || caches.match('./');
                }
            });
        })
    );
});

// Hàm hỗ trợ Tải với Timeout
function fetchWithTimeout(url, timeoutMs = 8000) {
    return new Promise((resolve) => {
        let isDone = false;
        const timer = setTimeout(() => {
            if (!isDone) { isDone = true; resolve(null); }
        }, timeoutMs);

        fetch(url, { mode: 'cors', cache: 'no-cache' })
            .then(res => {
                if (!isDone) { isDone = true; clearTimeout(timer); resolve(res); }
            })
            .catch(() => {
                if (!isDone) { isDone = true; clearTimeout(timer); resolve(null); }
            });
    });
}

// Kiểm tra chính xác xem file đã nằm trong Cache Storage chưa
async function processSingleFileWithHardTimeout(cache, url, timeoutMs = 8000) {
    if (url === './main.js') url = './src/main.js';

    try {
        const matched = await cache.match(url, { ignoreSearch: true });
        if (matched && (matched.ok || matched.type === 'opaque')) {
            return true;
        }

        let res = await fetchWithTimeout(url, timeoutMs);
        if (!res || (!res.ok && res.type !== 'opaque')) {
            res = await fetchWithTimeout(url, timeoutMs);
        }

        if (res && (res.ok || res.type === 'opaque')) {
            await cache.put(url, res.clone());
            return true;
        }

        return false;
    } catch (e) {
        return false;
    }
}

async function processPool(items, concurrency, taskFn) {
    let index = 0;
    const workers = Array(concurrency).fill(0).map(async () => {
        while (index < items.length) {
            const currentIndex = index++;
            await taskFn(items[currentIndex], currentIndex);
        }
    });
    await Promise.all(workers);
}

// 4. LẮNG NGHE LỆNH "TẢI OFFLINE" TỪ GIAO DIỆN
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
        return;
    }

    if (event.data && event.data.type === 'CACHE_ALL') {
        event.waitUntil(
            (async () => {
                const channel = new BroadcastChannel('pwa_offline_progress');

                const sendError = (code, detail) => {
                    try { channel.postMessage({ type: 'SW_ERROR', code: code, detail: detail }); } catch(e){}
                };

                try {
                    const rawList = event.data.imageList || [];
                    const cleanImageList = [...new Set(rawList)].filter(
                        u => u && typeof u === 'string' && !u.includes('undefined') && !u.includes('null')
                    );

                    let allResources = [...allFilesToDownload, ...cleanImageList].map(item => {
                        return item === './main.js' ? './src/main.js' : item;
                    });
                    allResources = [...new Set(allResources)];

                    const totalItems = allResources.length;
                    let processedCount = 0;
                    let successCount = 0;
                    let failedFiles = [];

                    let cache;
                    try {
                        cache = await caches.open(CACHE_NAME);
                    } catch (cacheErr) {
                        return sendError('ERR_CACHE_OPEN', 'Không thể mở Cache Storage: ' + cacheErr.message);
                    }

                    channel.postMessage({
                        type: 'PROGRESS',
                        percent: 0,
                        processed: 0,
                        total: totalItems
                    });

                    const CONCURRENCY = 3;

                    await processPool(allResources, CONCURRENCY, async (url) => {
                        const isSuccess = await processSingleFileWithHardTimeout(cache, url, 8000);
                        if (isSuccess) {
                            successCount++;
                        } else {
                            failedFiles.push(url);
                        }
                        
                        processedCount++;
                        const percent = Math.min(100, Math.round((processedCount / totalItems) * 100));
                        try {
                            channel.postMessage({
                                type: 'PROGRESS',
                                percent: percent,
                                processed: processedCount,
                                total: totalItems
                            });
                        } catch(e){}
                    });

                    channel.postMessage({ 
                        type: 'COMPLETE', 
                        success: true, 
                        count: successCount,
                        failed: failedFiles.length,
                        total: totalItems,
                        failedList: failedFiles
                    });
                    channel.close();
                } catch (mainSWError) {
                    sendError('ERR_SW_EXECUTION', mainSWError.message || mainSWError);
                }
            })()
        );
    }
});
