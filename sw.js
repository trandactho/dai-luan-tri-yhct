const CACHE_NAME = 'yhct-v1.7.4'; // Tăng số phiên bản khi có cập nhật dữ liệu nặng

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

// 1. Khi cài đặt: Chỉ cache các tệp cốt lõi nhẹ gọn để khởi động ngay lập tức
self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS))
    );
});

// 2. Khi kích hoạt: Dọn dẹp cache cũ, đồng thời nếu thay đổi CACHE_NAME (tăng phiên bản), 
// hệ thống sẽ tự động làm mới bộ đệm dữ liệu nặng
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

// 3. Cho phép chủ động kích hoạt tải qua nút Offline hoặc khi đổi version
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

// 4. Cơ chế thông minh: Tệp cốt lõi luôn ưu tiên mạng (Network-First) để cập nhật liên tục. 
// Tệp dữ liệu lớn/nặng nếu có sẵn ưu tiên dùng hoặc cập nhật theo version.
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

    // Kiểm tra nếu là tệp cốt lõi (Core assets) hoặc trang chính -> Áp dụng Network-First tuyệt đối
    const isCoreAsset = CORE_ASSETS.some(asset => reqUrl.includes(asset.replace('./', '')));

    if (isCoreAsset) {
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
        // Các tệp dữ liệu khác: Dùng Cache trước, nếu chưa có mới fetch mạng
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                if (cachedResponse) {
                    return cachedResponse;
                }
                return fetch(event.request).then((networkResponse) => {
                    if (networkResponse && (networkResponse.status === 200 || networkResponse.type === 'opaque')) {
                        const responseClone = networkResponse.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
                    }
                    return networkResponse;
                });
            })
        );
    }
});
