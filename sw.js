// ==========================================
// SERVICE WORKER - BẮT LỖI TREO CACHE.PUT TUYỆT ĐỐI
// ==========================================

const CACHE_NAME = 'dailuantri-v1.8.0-fix v2';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) return caches.delete(key);
                })
            );
        }).then(() => self.clients.claim()) // Ép chiếm quyền control ngay lập tức
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

// Bẫy Timeout tuyệt đối cho TOÀN BỘ quá trình (Fetch + Cache.put)
function processSingleFileWithHardTimeout(cache, url, timeoutMs = 2500) {
    return new Promise((resolve) => {
        let isDone = false;

        // Bẫy đếm giờ tuyệt đối: Quá timeoutMs là ÉP HỦY ngắt luồng ngay lập tức
        const timer = setTimeout(() => {
            if (!isDone) {
                isDone = true;
                resolve(false); // Quá thời gian -> Bỏ qua file này
            }
        }, timeoutMs);

        (async () => {
            try {
                // 1. Nếu đã có trong Cache -> Bỏ qua
                const matched = await cache.match(url);
                if (matched) {
                    if (!isDone) { isDone = true; clearTimeout(timer); resolve(true); }
                    return;
                }

                // 2. Tải file từ mạng
                const res = await fetch(url, { cache: 'no-cache' });
                if (res && res.ok) {
                    // 3. Ghi vào Cache (Nếu bước này treo, Bẫy timer ở trên vẫn sẽ giải thoát luồng)
                    await cache.put(url, res.clone());
                    if (!isDone) { isDone = true; clearTimeout(timer); resolve(true); }
                } else {
                    if (!isDone) { isDone = true; clearTimeout(timer); resolve(false); }
                }
            } catch (err) {
                if (!isDone) { isDone = true; clearTimeout(timer); resolve(false); }
            }
        })();
    });
}

// Xử lý hàng đợi song song
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

// --- THAY ĐOẠN MESSAGE TRONG sw.js ---
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
                    // --- CẬP NHẬT MẢNG allFilesToDownload TRONG sw.js ---
const allFilesToDownload = [
    './', './index.html', './style.css', './manifest.json',
    'https://cdn.tailwindcss.com',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/dompurify/3.0.6/purify.min.js',
    './luantridata.js', './huyetvidata.js',
    './duoclieudata1.js', './duoclieudata2.js', './duoclieudata3.js', './duoclieudata4.js', './duoclieudata5.js',
    './duocthiendata.js', './tradata.js', './questiondata.js',
    './src/modules/tai-khoan.js', 
    './src/modules/luan-tri.js', 
    './src/modules/catalog.js',
    './src/modules/phoi-ngu.js', 
    './src/modules/trac-nghiem.js', 
    './src/modules/thu-vien.js', 
    './src/modules/tu-chan.js',
    './src/core/ai-service.js', // Sửa lại đúng đường dẫn thư mục core
    './src/core/config.js',
    './src/core/utils.js'
];


                    const rawList = event.data.imageList || [];
                    const cleanImageList = [...new Set(rawList)].filter(
                        u => u && typeof u === 'string' && !u.includes('undefined') && !u.includes('null')
                    );

                    const allResources = [...allFilesToDownload, ...cleanImageList];
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
                        // Tăng bẫy Timeout lên 3500ms cho mạng di động
                        const isSuccess = await processSingleFileWithHardTimeout(cache, url, 3500);
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

                    // Gửi chính xác số file thành công, thất bại và danh sách file lỗi
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
