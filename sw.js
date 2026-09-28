// ==========================================
// SERVICE WORKER - ĐẢM BẢO CACHE CHUẨN OFFINE 100%
// ==========================================

const CACHE_NAME = 'dailuantri-v1.8.0-fix12';

const allFilesToDownload = [
    './', 
    './index.html', 
    './style.css', 
    './manifest.json',

    // --- CDN BÊN NGOÀI (CẦN CACHE BẮT BUỘC) ---
    'https://cdn.tailwindcss.com',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',

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

// 2. KÍCH HOẠT: Xóa Cache cũ
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) return caches.delete(key);
                })
            );
        }).then(() => self.clients.claim())
    );
});

// 3. LẤY DỮ LIỆU: Ưu tiên Cache -> Không có mới gọi Mạng & Tự động lưu Cache
self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request, { ignoreSearch: true }).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse; // Đã có trong cache -> Trả về ngay
            }

            // Nếu chưa có trong cache -> Fetch qua mạng và TỰ ĐỘNG LƯU VÀO CACHE
            return fetch(event.request).then((networkResponse) => {
                if (networkResponse && (networkResponse.status === 200 || networkResponse.type === 'opaque')) {
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
        // 1. KIỂM TRA XEM ĐÃ CÓ TRONG CACHE CHƯA
        const matched = await cache.match(url, { ignoreSearch: true });
        if (matched && (matched.ok || matched.type === 'opaque')) {
            return true; // File đã tồn tại chuẩn xác trong Cache!
        }

        // 2. CHƯA CÓ TRONG CACHE -> ÉP TẢI VỀ TỪ MẠNG
        let res = await fetchWithTimeout(url, timeoutMs);
        if (!res || (!res.ok && res.type !== 'opaque')) {
            // Thử lại lần 2
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