// ==========================================
// SERVICE WORKER - KIỂM TRA CACHE TRƯỚC (ZERO NETWORK FOR CACHED FILES)
// ==========================================

const CACHE_NAME = 'dailuantri-v1.8.0-fix10';

const allFilesToDownload = [
    './', 
    './index.html', 
    './style.css', 
    './manifest.json',

    // --- FILE UI NỘI BỘ ---
    './assets/css/tailwind.min.css',
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

self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then(async (cache) => {
            for (const url of allFilesToDownload) {
                try {
                    await cache.add(url);
                } catch (e) {
                    console.warn('[SW Install] Bỏ qua file lỗi:', url);
                }
            }
        })
    );
});

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

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;
    event.respondWith(
        caches.match(event.request).then((cached) => {
            return cached || fetch(event.request).catch(() => {
                if (event.request.mode === 'navigate') {
                    return caches.match('./index.html') || caches.match('./');
                }
            });
        })
    );
});

function fetchWithTimeout(url, timeoutMs) {
    return new Promise((resolve) => {
        let isDone = false;
        const timer = setTimeout(() => {
            if (!isDone) { isDone = true; resolve(null); }
        }, timeoutMs);

        fetch(url, { cache: 'no-cache' })
            .then(res => {
                if (!isDone) { isDone = true; clearTimeout(timer); resolve(res); }
            })
            .catch(() => {
                if (!isDone) { isDone = true; clearTimeout(timer); resolve(null); }
            });
    });
}

// Sửa tận gốc: Kiểm tra Cache trước, có rồi thì DỪNG KHÔNG GỬI REQUEST MẠNG
async function processSingleFileWithHardTimeout(cache, url, timeoutMs = 8000) {
    if (url === './main.js') url = './src/main.js';

    try {
        // 1. KIỂM TRA TRONG CACHE THỰC TẾ
        const matched = await cache.match(url);
        if (matched) {
            // Đã lưu thành công từ trước -> Bỏ qua tải mạng hoàn toàn!
            return true; 
        }

        // 2. CHỈ TẢI QUA MẠNG KHI CHƯA CÓ TRONG CACHE
        let res = await fetchWithTimeout(url, timeoutMs);
        if (!res) {
            // Thử lại lần 2 nếu mạng chập chờn
            res = await fetchWithTimeout(url, timeoutMs);
        }

        if (res && res.ok) {
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
