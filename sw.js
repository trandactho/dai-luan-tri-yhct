const CACHE_NAME = 'dailuantri-v1.3.0';

// Các file cốt lõi bắt buộc để chạy khung giao diện
const ESSENTIAL_ASSETS = [
    './',
    './index.html',
    './app.js',
    './manifest.json',
    'https://cdn.tailwindcss.com',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

// Các file dữ liệu & thư viện (tải từng file, file nào thiếu không làm hỏng SW)
const OPTIONAL_ASSETS = [
    './style.css',
    './luantridata.js',
    './duoclieudata.js',
    './huyetvidata.js',
    './tradata.js',
    './questiondata.js',
    './html2pdf.bundle.min.js'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(async cache => {
            // 1. Tải các file khung giao diện trước
            await cache.addAll(ESSENTIAL_ASSETS).catch(() => {});
            
            // 2. Tải an toàn từng file dữ liệu (nếu file nào chưa có trên server thì bỏ qua, không làm sập SW)
            for (const asset of OPTIONAL_ASSETS) {
                try {
                    await cache.add(new Request(asset, { cache: 'reload' }));
                } catch (e) {
                    console.warn('Bỏ qua file chưa có hoặc lỗi:', asset);
                }
            }
        }).then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.map(key => {
                    if (key !== CACHE_NAME) return caches.delete(key);
                })
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;
    if (!event.request.url.startsWith('http')) return;

    event.respondWith(
        caches.match(event.request, { ignoreSearch: true }).then(cachedResponse => {
            if (cachedResponse) return cachedResponse;

            return fetch(event.request).then(response => {
                if (!response || response.status !== 200 || response.type === 'error') {
                    return response;
                }
                const responseToCache = response.clone();
                caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, responseToCache);
                });
                return response;
            }).catch(() => {
                // Tự động trả về trang index.html nếu ngắt mạng khi điều hướng
                if (event.request.mode === 'navigate') {
                    return caches.match('./index.html') || caches.match('./');
                }
            });
        })
    );
});
