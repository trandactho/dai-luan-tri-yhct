const CACHE_NAME = 'dailuantri-v1.4.2'; // Tăng số phiên bản khi bạn cập nhật code/dữ liệu mới

// 1. Cài đặt và ép buộc bỏ qua trạng thái chờ để kích hoạt ngay
self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll([
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
            ]);
        })
    );
});

// 2. Kích hoạt và tự động quét xoá toàn bộ cache phiên bản cũ
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.map(key => {
                    if (key !== CACHE_NAME) {
                        console.log('Đang xoá cache cũ:', key);
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => self.clients.claim()) // Kiểm soát ngay lập tức các tab đang mở
    );
});

// 3. Phục vụ tài nguyên từ cache, nếu không có sẽ gọi mạng
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
