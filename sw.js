const CACHE_NAME = 'yhct-v1.7.3';

// Gộp chung toàn bộ dữ liệu và file hệ thống để áp dụng chiến lược Network-First
const SYSTEM_ASSETS = [
    './',
    './index.html',
    './style.css',
    './manifest.json',
    './about.html',
    './changelog.html',
    './disclaimer.html',
    './privacy.html',
    './contact.html',
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
    './src/core/config.js',
    './src/core/utils.js',
    './src/core/ai-service.js',
    './src/modules/luan-tri.js',
    './src/modules/catalog.js',
    './src/modules/phoi-ngu.js',
    './src/modules/tai-khoan.js',
    './src/modules/tu-chan.js',
    './src/modules/trac-nghiem.js',
    './src/modules/thu-vien.js',
    './src/main.js'
];

const EXTERNAL_CDN_ASSETS = [
    'https://cdn.tailwindcss.com',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/dompurify/3.0.6/purify.min.js'
];

self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(SYSTEM_ASSETS))
    );
});

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

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'CACHE_ALL') {
        event.waitUntil(
            caches.open(CACHE_NAME).then(async (cache) => {
                await cache.addAll(SYSTEM_ASSETS);
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

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;
    if (!event.request.url.startsWith('http')) return;

    const reqUrl = event.request.url;

    // Bỏ qua các đường dẫn API động, quảng cáo và AI
    if (
        reqUrl.includes('generativelanguage.googleapis.com') ||
        reqUrl.includes('pagead2.googlesyndication.com') ||
        reqUrl.includes('.netlify/functions') ||
        reqUrl.includes('supabase.co')
    ) {
        return;
    }

    // Tất cả tài nguyên hệ thống dùng chiến lược Network-First (Tải mới trước, mất mạng mới đọc cache)
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
});
