// ==========================================
// SERVICE WORKER - CHỐNG PHÌNH CACHE & DỌN DẸP RÁC
// ==========================================

const STATIC_CACHE = 'dailuantri-static-v1.8.0-fix14'; // Chỉ chứa HTML/JS/CSS nội bộ
const PERSISTENT_CACHE = 'dailuantri-persistent-v1';  // Chứa CDN + Ảnh + Font (BẢO TỒN VĨNH VIỄN)

const allFilesToDownload = [
    './', 
    './index.html', 
    './style.css', 
    './manifest.json',

    // --- CDN BÊN NGOÀI (LƯU VÀO CACHE BỀN VỮNG) ---
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

// 1. Kiểm tra file thuộc nhóm Bền Vững (CDN, Ảnh, Font)
function isPersistentResource(urlStr) {
    const url = new URL(urlStr, self.location.origin);
    return url.hostname.includes('cdn.tailwindcss.com') ||
           url.pathname.includes('/hinhanhhuyetvi/') ||
           url.pathname.includes('/assets/webfonts/') ||
           url.pathname.includes('/assets/css/') || // <-- Bổ sung để giữ vĩnh viễn FontAwesome CSS
           /\.(jpg|jpeg|png|webp|gif|svg|woff2|woff|ttf)$/i.test(url.pathname);
}

// 2. KIỂM TRA NGHIÊM NGẶT: Chỉ lưu Cache file hợp lệ, KHÔNG LƯU RÁC ĐĂNG NHẬP
function isCacheableStaticResource(urlStr) {
    const url = new URL(urlStr, self.location.origin);

    // Chặn tuyệt đối các domain API, Auth, Avatar Đăng nhập
    const isDynamicOrApi = 
        url.pathname.includes('/.netlify/') ||
        url.hostname.includes('supabase.co') ||
        url.hostname.includes('script.google.com') ||
        url.hostname.includes('googleapis.com') ||
        url.hostname.includes('google-analytics.com') ||
        url.hostname.includes('googleusercontent.com') || // Chặn lưu avatar Google
        url.hostname.includes('githubusercontent.com') ||
        url.search.length > 0;

    if (isDynamicOrApi) return false;

    // CHỈ CHẤP NHẬN CACHE NẾU NẰM TRONG DANH SÁCH FILE HOẶC LÀ ẢNH/FONT CHUẨN
    const isDeclaredFile = allFilesToDownload.some(f => new URL(f, self.location.origin).href === url.href);
    const isPersistent = isPersistentResource(urlStr);

    return isDeclaredFile || isPersistent;
}

// CÀI ĐẶT
self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        (async () => {
            const staticCache = await caches.open(STATIC_CACHE);
            const persistentCache = await caches.open(PERSISTENT_CACHE);

            for (const url of allFilesToDownload) {
                try {
                    const response = await fetch(url, { mode: 'cors' });
                    if (response.ok || response.type === 'opaque') {
                        const targetCache = isPersistentResource(url) ? persistentCache : staticCache;
                        await targetCache.put(url, response);
                    }
                } catch (e) {
                    console.warn('[SW Install] Bỏ qua file lỗi:', url);
                }
            }
        })()
    );
});

// KÍCH HOẠT: Di chuyển ảnh cũ + DỌN DẸP SẠCH FILE RÁC THỪA
self.addEventListener('activate', (event) => {
    event.waitUntil(
        (async () => {
            const pCache = await caches.open(PERSISTENT_CACHE);
            const sCache = await caches.open(STATIC_CACHE);
            const keys = await caches.keys();

            // Bước 1: Cứu Ảnh/Font từ Cache cũ sang PERSISTENT_CACHE
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

            // Bước 2: Quét và XÓA SẠCH file rác trong STATIC_CACHE
            const validStaticUrls = new Set(allFilesToDownload.map(f => new URL(f, self.location.origin).href));
            const staticRequests = await sCache.keys();

            for (const req of staticRequests) {
                if (!validStaticUrls.has(req.url) && !isPersistentResource(req.url)) {
                    await sCache.delete(req); // Xóa file phát sinh thừa
                }
            }

            await self.clients.claim();
        })()
    );
});

// LẤY DỮ LIỆU: Chỉ lưu vào Cache nếu thỏa mãn điều kiện an toàn
self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;

    const url = new URL(event.request.url);
    if (!url.protocol.startsWith('http')) return;

    event.respondWith(
        caches.match(event.request, { ignoreSearch: true }).then((cachedResponse) => {
            if (cachedResponse) return cachedResponse;

            return fetch(event.request).then((networkResponse) => {
                // KIỂM TRA CHẶN RÁC TRƯỚC KHI LƯU
                if (networkResponse && (networkResponse.status === 200 || networkResponse.type === 'opaque')) {
                    if (isCacheableStaticResource(event.request.url)) {
                        const responseToCache = networkResponse.clone();
                        const targetCacheName = isPersistentResource(event.request.url) ? PERSISTENT_CACHE : STATIC_CACHE;
                        
                        caches.open(targetCacheName).then((cache) => {
                            cache.put(event.request, responseToCache);
                        });
                    }
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

// Hàm hỗ trợ Tải Offline
function fetchWithTimeout(url, timeoutMs = 8000) {
    return new Promise((resolve) => {
        let isDone = false;
        const timer = setTimeout(() => { if (!isDone) { isDone = true; resolve(null); } }, timeoutMs);
        fetch(url, { mode: 'cors', cache: 'no-cache' })
            .then(res => { if (!isDone) { isDone = true; clearTimeout(timer); resolve(res); } })
            .catch(() => { if (!isDone) { isDone = true; clearTimeout(timer); resolve(null); } });
    });
}

async function processSingleFileWithHardTimeout(pCache, sCache, url, timeoutMs = 8000) {
    if (url === './main.js') url = './src/main.js';
    const targetCache = isPersistentResource(url) ? pCache : sCache;

    try {
        const matched = await targetCache.match(url, { ignoreSearch: true });
        if (matched && (matched.ok || matched.type === 'opaque')) return true;

        let res = await fetchWithTimeout(url, timeoutMs);
        if (!res || (!res.ok && res.type !== 'opaque')) res = await fetchWithTimeout(url, timeoutMs);

        if (res && (res.ok || res.type === 'opaque')) {
            await targetCache.put(url, res.clone());
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

// LẮNG NGHE LỆNH "TẢI OFFLINE"
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

                    let allResources = [...allFilesToDownload, ...cleanImageList].map(item => item === './main.js' ? './src/main.js' : item);
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

                    channel.postMessage({ type: 'PROGRESS', percent: 0, processed: 0, total: totalItems });

                    await processPool(allResources, 3, async (url) => {
                        const isSuccess = await processSingleFileWithHardTimeout(pCache, sCache, url, 8000);
                        if (isSuccess) successCount++;
                        else failedFiles.push(url);
                        
                        processedCount++;
                        const percent = Math.min(100, Math.round((processedCount / totalItems) * 100));
                        try { channel.postMessage({ type: 'PROGRESS', percent: percent, processed: processedCount, total: totalItems }); } catch(e){}
                    });

                    channel.postMessage({ type: 'COMPLETE', success: true, count: successCount, failed: failedFiles.length, total: totalItems, failedList: failedFiles });
                    channel.close();
                } catch (mainSWError) {
                    sendError('ERR_SW_EXECUTION', mainSWError.message || mainSWError);
                }
            })()
        );
    }
});
