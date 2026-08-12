const CACHE_NAME = 'dailuantri-v1.6.3';

const SYSTEM_FILES = [
    '/',
    '/index.html',
    '/style.css',
    '/app.js',
    '/luantridata.js',
    '/duoclieudata1.js',
    '/duoclieudata2.js',
    '/duoclieudata3.js',
    '/duoclieudata4.js',
    '/duoclieudata5.js',
    '/huyetvidata.js',
    '/tradata.js',
    '/questiondata.js',
    '/manifest.json',
    './',
    './index.html',
    './style.css',
    './app.js',
    './luantridata.js',
    '/duoclieudata1.js',
    '/duoclieudata2.js',
    '/duoclieudata3.js',
    '/duoclieudata4.js',
    '/duoclieudata5.js',
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
    // Bỏ qua các request không phải GET (ví dụ: POST từ API AI)
    if (event.request.method !== 'GET') return;

    // CHIẾN LƯỢC NETWORK-FIRST: Luôn gọi mạng lấy code mới nhất trước
    event.respondWith(
        fetch(event.request)
            .then(networkRes => {
                // Nếu lấy được mạng thành công, cập nhật lại cache ngầm và trả về dữ liệu mới
                if (networkRes && networkRes.status === 200) {
                    const resToCache = networkRes.clone();
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, resToCache);
                    });
                }
                return networkRes;
            })
            .catch(async () => {
                // KHI MẤT MẠNG (OFFLINE): Mới quay đầu tìm trong cache
                const cache = await caches.open(CACHE_NAME);
                const cachedRes = await cache.match(event.request, { ignoreSearch: true });
                if (cachedRes) return cachedRes;

                // Nếu là request điều hướng trang mà offline -> trả về index.html
                if (event.request.mode === 'navigate') {
                    return cache.match('./index.html', { ignoreSearch: true });
                }
            })
    );
});
