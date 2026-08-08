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

// 3. Phục vụ tài nguyên offline-first và tự động lưu cache khi có mạng
self.addEventListener('fetch', event => {
    // Bỏ qua các yêu cầu gọi API đến Netlify Functions
    if (event.request.url.includes('/.netlify/functions/')) return;

    event.respondWith(
        caches.match(event.request).then(cachedRes => {
            // Nếu tìm thấy trong cache thì trả về ngay lập tức
            if (cachedRes) return cachedRes;

            // Nếu chưa có trong cache, tiến hành fetch từ mạng
            return fetch(event.request).then(networkRes => {
                // Kiểm tra nếu response hợp lệ thì nhân bản và tự động lưu vào cache để lần sau dùng offline
                if (!networkRes || networkRes.status !== 200 || networkRes.type !== 'basic') {
                    return networkRes;
                }
                const resToCache = networkRes.clone();
                caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, resToCache);
                });
                return networkRes;
            }).catch(async () => {
                // XỬ LÝ KHI MẤT MẠNG HOÀN TOÀN (OFFLINE)
                const cache = await caches.open(CACHE_NAME);

                // Nếu trình duyệt yêu cầu trang HTML -> trả về index.html
                if (event.request.mode === 'navigate' || (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html'))) {
                    return cache.match('./index.html') || cache.match('/');
                }

                // Nếu là các tệp dữ liệu .js cốt lõi, cố gắng trả về từ cache, tránh sập ứng dụng
                return cache.match(event.request);
            });
        })
    );
});
