const CACHE_NAME = 'dailuantri-v1.3.0';
const assetsToCache = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './luantridata.js',
    './duoclieudata.js',
    './huyetvidata.js',
    './tradata.js',
    './questiondata.js',
    './html2pdf.bundle.min.js',
    './manifest.json',
    // Thêm CDN giao diện để khi offline không bị vỡ giao diện & icon
    'https://cdn.tailwindcss.com',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(assetsToCache.map(url => new Request(url, { cache: 'reload' })));
        }).then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.map(key => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    // 1. Bỏ qua các request KHÔNG PHẢI 'GET' (như API chat AI dạng POST)
    if (event.request.method !== 'GET') return;

    // 2. Bỏ qua các giao thức không phải http/https (như chrome-extension://)
    if (!event.request.url.startsWith('http')) return;

    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request).then(response => {
                // 3. Chỉ lưu cache nếu kết quả trả về hợp lệ (mã 200)
                if (!response || response.status !== 200 || response.type === 'error') {
                    return response;
                }
                const responseToCache = response.clone();
                caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, responseToCache);
                });
                return response;
            }).catch(() => {
                if (event.request.mode === 'navigate') {
                    return caches.match('./index.html');
                }
            });
        })
    );
});
