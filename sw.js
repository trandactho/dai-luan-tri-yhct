const CACHE_NAME = 'yhct-vfix'; // <-- Đổi số phiên bản khi đưa file DỮ LIỆU mới lên Server

// 1. Danh sách File DỮ LIỆU (Quản lý theo phiên bản CACHE_NAME)
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

// 2. Danh sách File VẬN HÀNH HỆ THỐNG (Bắt buộc nạp tươi hoàn toàn từ Server, không Cache)
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

// Cài đặt SW: Chỉ lưu sẵn các file DỮ LIỆU vào Cache theo phiên bản
self.addEventListener('install', (event) => {
    self.skipWaiting(); // Chiếm quyền kiểm soát ngay lập tức
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(DATA_ASSETS);
        })
    );
});

// Kích hoạt: Xóa triệt để các Cache dữ liệu cũ khi đổi CACHE_NAME
// Tuyệt đối KHÔNG đụng đến LocalStorage hay IndexedDB (Nơi lưu dữ liệu AI và Người dùng)
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

// Xử lý Request (Fetch)
self.addEventListener('fetch', (event) => {
    const reqUrl = event.request.url;

    // Bỏ qua các Request API ngoài (AI, Quảng cáo...)
    if (reqUrl.includes('generativelanguage.googleapis.com') || 
        reqUrl.includes('pagead2.googlesyndication.com')) {
        return;
    }

    const isSystemAsset = SYSTEM_ASSETS.some(asset => {
        const cleanAsset = asset.replace('./', '');
        return cleanAsset === '' ? reqUrl.endsWith('/') : reqUrl.endsWith(cleanAsset);
    });

    if (isSystemAsset) {
        // 🔴 CHIẾN LƯỢC CHO FILE HỆ THỐNG: Mạng thuần túy (Network Only)
        // Ép trình duyệt đi thẳng ra Server lấy code mới nhất, KHÔNG qua Cache
        event.respondWith(
            fetch(event.request, { cache: 'no-store' })
                .catch(() => {
                    // Dự phòng rủi ro mất mạng
                    return new Response('Không có kết nối mạng để tải file hệ thống.', {
                        status: 503,
                        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
                    });
                })
        );
    } else {
        // 🟢 CHIẾN LƯỢC CHO FILE DỮ LIỆU: Cache-First (Theo phiên bản)
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
    }
});
