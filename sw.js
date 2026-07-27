const CACHE_NAME = 'dailuantri-v1.2.3';
const assetsToCache = [
    './',
    './index.html',
    './style.css',
    './luantridata.js',
    './duoclieudata.js',
    './huyetvidata.js',
    './tradata.js',
    './questiondata.js',
    './html2pdf.bundle.min.js',
    './manifest.json',
    './icon-192.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(assetsToCache.map(url => new Request(url, { cache: 'reload' })));
        }).then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.map(key => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => clients.claim())
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request).catch(() => {
                if (event.request.mode === 'navigate') {
                    return caches.match('./index.html');
                }
            });
        })
    );
});
