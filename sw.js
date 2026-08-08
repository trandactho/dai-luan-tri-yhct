const CACHE_NAME = 'dailuantri-v1.5.4';

const SYSTEM_FILES = [
    './', 
    './index.html', 
    './style.css', 
    './app.js',
    './luantridata.js', 
    './duoclieudata.js', 
    './huyetvidata.js',
    './tradata.js', 
    './questiondata.js', 
    './manifest.json'
];

// 1. Tải trước file hệ thống an toàn
self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then(async cache => {
            for (const file of SYSTEM_FILES) {
                try {
                    await cache.add(file);
                } catch (err) {
                    console.warn(`Không thể cache tệp: ${file}`, err);
                }
            }
        })
    );
});

// 2. Kích hoạt: Xóa CacheStorage cũ, giữ nguyên localStorage
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.map(key => {
                    if (key !== CACHE_NAME && key.startsWith('dailuantri-')) {
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// 3. Phục vụ tài nguyên offline-first (Đã thêm cơ chế Fallback chuẩn xác)
self.addEventListener('fetch', event => {
    // Bỏ qua các yêu cầu gọi API đến Netlify Functions
    if (event.request.url.includes('/.netlify/functions/')) return;

    event.respondWith(
        caches.match(event.request).then(cachedRes => {
            if (cachedRes) return cachedRes;

            return fetch(event.request).catch(async () => {
                // Xử lý khi mất mạng hoàn toàn: Nếu trình duyệt yêu cầu trang HTML, trả về index.html từ cache
                if (event.request.mode === 'navigate' || event.request.headers.get('accept').includes('text/html')) {
                    const cache = await caches.open(CACHE_NAME);
                    return cache.match('./index.html') || cache.match('/');
                }
            });
        })
    );
});
