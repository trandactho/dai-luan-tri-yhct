const CACHE_NAME = 'dailuantri-v1.5.2'; // Đổi số phiên bản để kích hoạt cập nhật

const SYSTEM_FILES = [
    './', './index.html', './style.css', './app.js',
    './luantridata.js', './duoclieudata.js', './huyetvidata.js',
    './tradata.js', './questiondata.js', './manifest.json'
];

// 1. Tải trước file hệ thống mới
self.addEventListener('install', event => {
    self.skipWaiting(); //
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(SYSTEM_FILES))
    );
});

// 2. Kích hoạt: Chỉ xóa CacheStorage cũ, KHÔNG đụng vào localStorage
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.map(key => {
                    if (key !== CACHE_NAME && key.startsWith('dailuantri-')) {
                        return caches.delete(key); //
                    }
                })
            );
        }).then(() => self.clients.claim()) //
    );
});

// 3. Phục vụ tài nguyên
self.addEventListener('fetch', event => {
    if (event.request.url.includes('/.netlify/functions/')) return;
    event.respondWith(
        caches.match(event.request).then(res => res || fetch(event.request)) //
    );
});
