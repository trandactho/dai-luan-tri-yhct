const CACHE_NAME = 'yhct-v1.6.8'; // <-- Nhớ đổi số phiên bản khi đưa code mới lên Server

// 1. Danh sách File DỮ LIỆU tĩnh cơ bản
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

// 2. Danh sách File VẬN HÀNH HỆ THỐNG
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
    './src/modules/tu-chan.js',
    './src/modules/trac-nghiem.js',
    './src/modules/thu-vien.js',
    './src/main.js'
];

const ALL_ASSETS = [...DATA_ASSETS, ...SYSTEM_ASSETS];

// Cài đặt Cache ban đầu
self.addEventListener('install', (event) => {
    self.skipWaiting(); // Cài xong là chiếm quyền kiểm soát ngay lập tức
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ALL_ASSETS);
        })
    );
});

// Kích hoạt & Xóa triệt để cache cũ, BẢO VỆ NGUYÊN VẸN LOCALSTORAGE
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

// Lắng nghe sự kiện lấy dữ liệu (Fetch)
self.addEventListener('fetch', (event) => {
    const reqUrl = event.request.url;

    // Bỏ qua các Request API ngoài (AI, Quảng cáo, Google CDN...)
    if (reqUrl.includes('generativelanguage.googleapis.com') || 
        reqUrl.includes('pagead2.googlesyndication.com')) {
        return;
    }

    const isDataAsset = DATA_ASSETS.some(asset => reqUrl.endsWith(asset.replace('./', '')));

    if (isDataAsset) {
        // 🟢 CHIẾN LƯỢC CACHE-FIRST CHO DỮ LIỆU: Đọc nhanh từ bộ nhớ
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                if (cachedResponse) {
                    return cachedResponse;
                }
                return fetch(event.request).then((networkResponse) => {
                    if (networkResponse && networkResponse.status === 200) {
                        const responseClone = networkResponse.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
                    }
                    return networkResponse;
                });
            })
        );
    } else {
        // 🔴 CHIẾN LƯỢC NETWORK-FIRST ÉP TẢI TƯƠI CHO HỆ THỐNG (ĐÃ SỬA LỖI):
        // Thêm { cache: 'no-cache' } để ép Trình duyệt đi thẳng ra Server lấy file mới nhất
        event.respondWith(
            fetch(event.request, { cache: 'no-cache' })
                .then((networkResponse) => {
                    if (networkResponse && networkResponse.status === 200) {
                        const responseClone = networkResponse.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
                    }
                    return networkResponse;
                })
                .catch(() => {
                    // Khi mất mạng hoàn toàn mới móc từ Cache dự phòng ra dùng
                    return caches.match(event.request);
                })
        );
    }
});

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'CACHE_ALL') {
        event.waitUntil(
            caches.open(CACHE_NAME).then((cache) => {
                return cache.addAll(ALL_ASSETS);
            })
        );
    }
});
