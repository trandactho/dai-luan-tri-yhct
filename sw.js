const CACHE_NAME = 'yhct-cache-v1';

self.addEventListener('install', event => {
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
    // Để trống hoặc thêm logic cache PWA sau
});
