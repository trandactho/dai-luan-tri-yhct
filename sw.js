const CACHE_NAME = 'dailuantri-v1.5.5';

const SYSTEM_FILES = [
    '/',
    '/index.html',
    '/style.css',
    '/app.js',
    '/luantridata.js',
    '/duoclieudata.js',
    '/huyetvidata.js',
    '/tradata.js',
    '/questiondata.js',
    '/manifest.json',
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

self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then(async cache => {
            for (const file of SYSTEM_FILES) {
                try { await cache.add(file); } catch (err) {}
            }
        })
    );
});

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

self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET' || event.request.url.includes('/.netlify/functions/')) return;

    event.respondWith(
        // CÚ PHÁP QUAN TRỌNG NHẤT: ignoreSearch: true giúp bỏ qua mọi query parameter rác
        caches.match(event.request, { ignoreSearch: true }).then(cachedRes => {
            if (cachedRes) return cachedRes;

            return fetch(event.request).then(networkRes => {
                if (!networkRes || networkRes.status !== 200 || networkRes.type !== 'basic') {
                    return networkRes;
                }
                const resToCache = networkRes.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(event.request, resToCache));
                return networkRes;
            }).catch(async () => {
                const cache = await caches.open(CACHE_NAME);
                const urlObj = new URL(event.request.url);
                
                // Cố gắng cứu vớt bằng đường dẫn tuyệt đối
                let match = await cache.match(urlObj.pathname, { ignoreSearch: true });
                if (match) return match;

                // Nếu mất mạng hoàn toàn thì nạp cứng trang HTML 
                if (event.request.mode === 'navigate' || (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html'))) {
                    return cache.match('/index.html', { ignoreSearch: true }) || cache.match('/', { ignoreSearch: true });
                }
            });
        })
    );
});
