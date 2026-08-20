const CACHE_NAME = 'yhct-v1.7.3';

const DATA_ASSETS = [
    './luantridata.js',
    './huyetvidata.js',
    './duoclieudata1.js',
    './duoclieudata2.js',
    './duoclieudata3.js',
    './duoclieudata4.js',
    './duoclieudata5.js',
    './duocthiendata.js',
    './tradata.js',
    './questiondata.js'
];

const SYSTEM_ASSETS = [
    './',
    './index.html',
    './style.css',
    './manifest.json',
    './src/core/config.js',
    './src/core/utils.js',
    './src/core/ai-service.js',
    './src/modules/luan-tri.js',
    './src/modules/catalog.js',
    './src/modules/phoi-ngu.js',
    './src/modules/tai-khoan.js',
    './src/modules/tu-chan.js',
    './src/modules/trac-nghiem.js',
    './src/modules/thu-vien.js',
    './src/main.js'
];

const EXTERNAL_CDN_ASSETS = [
    'https://cdn.tailwindcss.com',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/dompurify/3.0.6/purify.min.js'
];

self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll([...DATA_ASSETS, ...SYSTEM_ASSETS]))
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME && key.startsWith('yhct-')) {
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Xử lý sự kiện "Tải Offline" từ Footer (An toàn 100% với CDN ngoài)
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'CACHE_ALL') {
        event.waitUntil(
            caches.open(CACHE_NAME).then(async (cache) => {
                await cache.addAll([...DATA_ASSETS, ...SYSTEM_ASSETS]);
                // Tải CDN riêng lẻ để không làm sập tiến trình nếu 1 link CDN bị lỗi
                await Promise.allSettled(
                    EXTERNAL_CDN_ASSETS.map(url => 
                        fetch(url, { mode: 'no-cors' })
                            .then(res => cache.put(url, res))
                            .catch(() => {})
                    )
                );
            })
        );
    }
});

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;
    if (!event.request.url.startsWith('http')) return;

    const reqUrl = event.request.url;

    if (
        reqUrl.includes('generativelanguage.googleapis.com') ||
        reqUrl.includes('pagead2.googlesyndication.com') ||
        reqUrl.includes('.netlify/functions') ||
        reqUrl.includes('supabase.co')
    ) {
        return;
    }

    const urlPath = new URL(reqUrl).pathname;
    const isSystemAsset = SYSTEM_ASSETS.some(asset => {
        const cleanAsset = asset.replace('./', '');
        return cleanAsset === '' ? urlPath.endsWith('/') : urlPath.endsWith(cleanAsset);
    });

    if (isSystemAsset) {
        event.respondWith(
            fetch(event.request)
                .then((networkResponse) => {
                    if (networkResponse && (networkResponse.status === 200 || networkResponse.type === 'opaque')) {
                        const responseClone = networkResponse.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
                    }
                    return networkResponse;
                })
                .catch(() => caches.match(event.request))
        );
    } else {
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                if (cachedResponse) return cachedResponse;
                return fetch(event.request).then((networkResponse) => {
                    if (networkResponse && (networkResponse.status === 200 || networkResponse.type === 'opaque')) {
                        const responseClone = networkResponse.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
                    }
                    return networkResponse;
                });
            })
        );
    }
});
