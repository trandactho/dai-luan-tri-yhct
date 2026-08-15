const CACHE_NAME = 'yhct-v1.6.8-final';

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

self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll([...DATA_ASSETS, ...SYSTEM_ASSETS]))
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

self.addEventListener('fetch', (event) => {
    const reqUrl = event.request.url;

    if (reqUrl.includes('generativelanguage.googleapis.com') || reqUrl.includes('pagead2.googlesyndication.com')) {
        return;
    }

    const isSystemAsset = SYSTEM_ASSETS.some(asset => {
        const cleanAsset = asset.replace('./', '');
        return cleanAsset === '' ? reqUrl.endsWith('/') : reqUrl.endsWith(cleanAsset);
    });

    if (isSystemAsset) {
        // Network-First: Thử lấy dữ liệu mới từ mạng, nếu mất mạng thì lấy từ Cache
        event.respondWith(
            fetch(event.request)
                .then((networkResponse) => {
                    if (networkResponse && networkResponse.status === 200) {
                        const responseClone = networkResponse.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
                    }
                    return networkResponse;
                })
                .catch(() => caches.match(event.request))
        );
    } else {
        // Cache-First cho dữ liệu tĩnh
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                if (cachedResponse) return cachedResponse;
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
