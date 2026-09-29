// ==========================================
// SERVICE WORKER - TỰ ĐỘNG CẬP NHẬT CODE CORE KHÔNG CẦN ĐỔI VERSION
// ==========================================

const STATIC_CACHE = 'dailuantri-static-v1.8.0-fix18'; 
const PERSISTENT_CACHE = 'dailuantri-persistent-v1';  

const allFilesToDownload = [
    './', 
    './index.html', 
    './style.css', 
    './manifest.json',

    // --- CDN BÊN NGOÀI ---
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

function isPersistentResource(urlStr) {
    const url = new URL(urlStr, self.location.origin);
    return url.hostname.includes('cdn.tailwindcss.com') ||
           url.pathname.includes('/hinhanhhuyetvi/') ||
           url.pathname.includes('/assets/webfonts/') ||
           url.pathname.includes('/assets/css/') ||
           /\.(jpg|jpeg|png|webp|gif|svg|woff2|woff|ttf)$/i.test(url.pathname);
}

function isCacheableStaticResource(urlStr) {
    const url = new URL(urlStr, self.location.origin);

    const isDynamicOrApi = 
        url.pathname.includes('/.netlify/') ||
        url.hostname.includes('supabase.co') ||
        url.hostname.includes('script.google.com') ||
        url.hostname.includes('googleapis.com') ||
        url.hostname.includes('google-analytics.com') ||
        url.hostname.includes('googleusercontent.com') ||
        url.hostname.includes('githubusercontent.com');

    if (isDynamicOrApi) return false;

    const cleanHref = url.origin + url.pathname;
    const isDeclaredFile = allFilesToDownload.some(f => {
        const declaredUrl = new URL(f, self.location.origin);
        return declaredUrl.origin + declaredUrl.pathname === cleanHref;
    });

    const isPersistent = isPersistentResource(urlStr);

    return isDeclaredFile || isPersistent;
}

// CÀI ĐẶT (Đã bọc timeout tránh treo khởi động)
self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        (async () => {
            const staticCache = await caches.open(STATIC_CACHE);
            const persistentCache = await caches.open(PERSISTENT_CACHE);

            for (const url of allFilesToDownload) {
                try {
                    let response = await fetchWithTimeout(url, 5000); // Giới hạn 5 giây mỗi file
                    if (response && (response.ok || response.type === 'opaque')) {
                        const targetCache = isPersistentResource(url) ? persistentCache : staticCache;
                        await targetCache.put(url, response);
                    }
                } catch (e) {
                    console.warn('[SW Install] Bỏ qua file lỗi/timeout:', url);
                }
            }
        })()
    );
});

// KÍCH HOẠT: Dọn dẹp cache thừa
self.addEventListener('activate', (event) => {
    event.waitUntil(
        (async () => {
            const pCache = await caches.open(PERSISTENT_CACHE);
            const sCache = await caches.open(STATIC_CACHE);
            const keys = await caches.keys();

            for (const key of keys) {
                if (key !== STATIC_CACHE && key !== PERSISTENT_CACHE) {
                    try {
                        const oldCache = await caches.open(key);
                        const oldRequests = await oldCache.keys();
                        for (const req of oldRequests) {
                            if (isPersistentResource(req.url)) {
                                const response = await oldCache.match(req);
                                if (response) await pCache.put(req, response);
                            }
                        }
                    } catch (e) {}
                    await caches.delete(key);
                }
            }

            const validStaticUrls = new Set(allFilesToDownload.map(f => new URL(f, self.location.origin).pathname));
            const staticRequests = await sCache.keys();

            for (const req of staticRequests) {
                const reqPath = new URL(req.url).pathname;
                if (!validStaticUrls.has(reqPath) && !isPersistentResource(req.url)) {
                    await sCache.delete(req);
                }
            }

            await self.clients.claim();
        })()
    );
});

// LẤY DỮ LIỆU: TỐI ƯU TRÁNH PHÌNH CACHE KHI VUỐT TAB
self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;

    const url = new URL(event.request.url);
    if (!url.protocol.startsWith('http')) return;

    if (!isCacheableStaticResource(event.request.url)) return;

    const isPersistent = isPersistentResource(event.request.url);

    if (isPersistent) {
        event.respondWith(
            caches.match(event.request, { ignoreSearch: true }).then((cachedResponse) => {
                // 1. Nếu đã có trong Cache (do tải offline), trả về ngay lập tức
                if (cachedResponse) return cachedResponse;

                // 2. Nếu chưa có, chỉ tải qua mạng trả về trình duyệt, TUYỆT ĐỐI KHÔNG tự động cache.put() nữa
                return fetch(event.request);
            })
        );
    } else {
        event.respondWith(
            fetch(event.request, { cache: 'no-cache' })
                .then((networkResponse) => {
                    if (networkResponse && networkResponse.status === 200) {
                        const responseToCache = networkResponse.clone();
                        caches.open(STATIC_CACHE).then((cache) => {
                            cache.put(event.request, responseToCache);
                        });
                    }
                    return networkResponse;
                })
                .catch(() => {
                    return caches.match(event.request, { ignoreSearch: true }).then((cachedResponse) => {
                        if (cachedResponse) return cachedResponse;
                        if (event.request.mode === 'navigate') {
                            return caches.match('./index.html', { ignoreSearch: true }) || caches.match('./', { ignoreSearch: true });
                        }
                    });
                })
        );
    }
});


function fetchWithTimeout(url, timeoutMs = 8000) {
    return new Promise((resolve) => {
        let isDone = false;
        const timer = setTimeout(() => { if (!isDone) { isDone = true; resolve(null); } }, timeoutMs);
        fetch(url, { cache: 'no-cache' })
            .then(res => { if (!isDone) { isDone = true; clearTimeout(timer); resolve(res); } })
            .catch(() => { if (!isDone) { isDone = true; clearTimeout(timer); resolve(null); } });
    });
}

async function processSingleFileWithHardTimeout(pCache, sCache, url, timeoutMs = 8000) {
    const targetCache = isPersistentResource(url) ? pCache : sCache;

    try {
        let res = await fetchWithTimeout(url, timeoutMs);
        if (!res || (!res.ok && res.type !== 'opaque')) res = await fetchWithTimeout(url, timeoutMs);

        if (res && (res.ok || res.type === 'opaque')) {
            await targetCache.put(url, res.clone());
            return true;
        }

        const matched = await targetCache.match(url, { ignoreSearch: true });
        return !!(matched && (matched.ok || matched.type === 'opaque'));
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

// LẮNG NGHE LỆNH "TẢI OFFLINE" HOẶC "SKIP WAITING"
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
        return;
    }

    if (event.data && event.data.type === 'CACHE_ALL') {
        event.waitUntil(
            (async () => {
                let channel = null;
                if ('BroadcastChannel' in self) {
                    channel = new BroadcastChannel('pwa_offline_progress');
                }
                
                const sendMsg = (payload) => {
                    if (channel) {
                        try { channel.postMessage(payload); } catch(e){}
                    }
                };

                const sendError = (code, detail) => {
                    sendMsg({ type: 'SW_ERROR', code: code, detail: detail });
                };

                try {
                    const rawList = event.data.imageList || [];
                    const cleanImageList = [...new Set(rawList)].filter(
                        u => u && typeof u === 'string' && !u.includes('undefined') && !u.includes('null')
                    );

                    let allResources = [...allFilesToDownload, ...cleanImageList];
                    allResources = [...new Set(allResources)];

                    const totalItems = allResources.length;
                    let processedCount = 0;
                    let successCount = 0;
                    let failedFiles = [];

                    let pCache, sCache;
                    try {
                        pCache = await caches.open(PERSISTENT_CACHE);
                        sCache = await caches.open(STATIC_CACHE);
                    } catch (cacheErr) {
                        return sendError('ERR_CACHE_OPEN', 'Không thể mở Cache Storage: ' + cacheErr.message);
                    }

                    sendMsg({ type: 'PROGRESS', percent: 0, processed: 0, total: totalItems });

                    await processPool(allResources, 3, async (url) => {
                        const isSuccess = await processSingleFileWithHardTimeout(pCache, sCache, url, 8000);
                        if (isSuccess) successCount++;
                        else failedFiles.push(url);
                        
                        processedCount++;
                        const percent = Math.min(100, Math.round((processedCount / totalItems) * 100));
                        sendMsg({ type: 'PROGRESS', percent: percent, processed: processedCount, total: totalItems });
                    });

                    sendMsg({ type: 'COMPLETE', success: true, count: successCount, failed: failedFiles.length, total: totalItems, failedList: failedFiles });
                    if (channel) channel.close();
                } catch (mainSWError) {
                    sendError('ERR_SW_EXECUTION', mainSWError.message || mainSWError);
                }
            })()
        );
    }
});
