const CACHE_NAME = 'yhct-v1.7.6'; // Tăng phiên bản mới để dọn sạch cache phình to cũ

const CORE_ASSETS = [
    './',
    './index.html',
    './style.css',
    './manifest.json',
    './about.html',
    './changelog.html',
    './disclaimer.html',
    './privacy.html',
    './contact.html',
    './src/core/config.js',
    './src/core/utils.js',
    './src/core/ai-service.js',
    './src/modules/tai-khoan.js',
    './src/main.js'
];

const HEAVY_ASSETS = [
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
    './src/modules/luan-tri.js',
    './src/modules/catalog.js',
    './src/modules/phoi-ngu.js',
    './src/modules/tu-chan.js',
    './src/modules/trac-nghiem.js',
    './src/modules/thu-vien.js'
];

const EXTERNAL_CDN_ASSETS = [
    'https://cdn.tailwindcss.com',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/dompurify/3.0.6/purify.min.js'
];

// 1. Khi cài đặt: Chỉ cache các tệp cốt lõi nhẹ gọn
self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS))
    );
});

// 2. Khi kích hoạt: Dọn dẹp sạch toàn bộ cache cũ khác tên
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        console.log('[Service Worker] Xóa cache cũ:', key);
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// 3. Chỉ tải toàn bộ file nặng khi có lệnh chủ động (Ví dụ: bấm nút tải offline)
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'CACHE_ALL') {
        event.waitUntil(
            caches.open(CACHE_NAME).then(async (cache) => {
                await cache.addAll([...CORE_ASSETS, ...HEAVY_ASSETS]);
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

// 4. Cơ chế fetch kiểm soát chặt chẽ chống phình cache
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

    const isCoreAsset = CORE_ASSETS.some(asset => reqUrl.includes(asset.replace('./', '')));

    if (isCoreAsset) {
        // Tệp core: Network-First, luôn cập nhật bản mới nhất và ghi đè an toàn
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
        // Các tệp khác: Ưu tiên đọc từ Cache nếu có sẵn để chạy nhanh/offline, 
        // nếu chưa có thì gọi mạng bình thường nhưng KHÔNG tự động nhồi vào cache để tránh phình bộ nhớ
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                if (cachedResponse) {
                    return cachedResponse;
                }
                return fetch(event.request);
            })
        );
    }
});
