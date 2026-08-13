const CACHE_NAME = 'yhct-v1.6.6';

// Danh sách tất cả file cần lưu Offline
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './style.css',
    './manifest.json',

    // 10 File cơ sở dữ liệu
    './luantridata.js',
    './huyetvidata.js',
    './duoclieudata1.js',
    './duoclieudata2.js',
    './duoclieudata3.js',
    './duoclieudata4.js',
    './duoclieudata5.js',
    './duocthiendata.js',
    './tradata.js',
    './questiondata.js',

    // 3 File Core
    './src/core/config.js',
    './src/core/utils.js',
    './src/core/ai-service.js',

    // 6 File Modules
    './src/modules/luan-tri.js',
    './src/modules/catalog.js',
    './src/modules/phoi-ngu.js',
    './src/modules/tu-chan.js',
    './src/modules/trac-nghiem.js',
    './src/modules/thu-vien.js',

    // 1 File Main
    './src/main.js'
];

// Cài đặt Cache
self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// Kích hoạt & Xóa cache cũ
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Lắng nghe sự kiện lấy dữ liệu (Fetch)
self.addEventListener('fetch', (event) => {
    // Không cache các request gọi API AI hoặc Google CDN external
    if (event.request.url.includes('generativelanguage.googleapis.com') || 
        event.request.url.includes('pagead2.googlesyndication.com')) {
        return;
    }

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request);
        })
    );
});

// Lắng nghe lệnh tải offline từ giao diện
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'CACHE_ALL') {
        event.waitUntil(
            caches.open(CACHE_NAME).then((cache) => {
                return cache.addAll(ASSETS_TO_CACHE);
            })
        );
    }
});
