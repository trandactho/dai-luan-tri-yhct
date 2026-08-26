// ==========================================
// SERVICE WORKER - ĐẠI LUẬN TRỊ YHCT v1.7.7 (Tối ưu hóa Cache)
// ==========================================

const CACHE_NAME = 'dailuantri-v1.7.7';

// Khai báo CHÍNH XÁC các tệp đang sử dụng trong index.html
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './style.css',
    './manifest.json',
    // Dữ liệu tĩnh
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
    './hinhanhhuyetvi',    
    // Core Scripts
    './src/core/config.js',
    './src/core/utils.js',
    './src/core/ai-service.js',
    // Module Scripts
    './src/modules/tai-khoan.js',
    './src/modules/luan-tri.js',
    './src/modules/catalog.js',
    './src/modules/phoi-ngu.js',
    './src/modules/trac-nghiem.js',
    './src/modules/thu-vien.js',
    './src/modules/tu-chan.js',
    // Main Script
    './src/main.js'
];

// 1. Cài đặt và nạp sẵn toàn bộ dữ liệu vào cache
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        }).catch(err => console.log('Lỗi nạp cache tĩnh (kiểm tra lại tên file có sai sót không):', err))
    );
    self.skipWaiting();
});

// 2. Kích hoạt và dọn dẹp sạch sẽ các bản cache rác cũ
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        console.log('🗑️ Đã xóa cache rác cũ:', key);
                        return caches.delete(key);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// 3. Xử lý Fetch: Chặn phình bộ nhớ, NHƯNG cho phép lưu cache các CDN giao diện
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Bỏ qua không can thiệp API Netlify hoặc method khác GET
    if (url.pathname.includes('/.netlify/functions/') || event.request.method !== 'GET') {
        return;
    }

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            // Có trong cache thì trả về luôn
            if (cachedResponse) {
                return cachedResponse;
            }
            
           // Không có thì gọi mạng
            return fetch(event.request).then((response) => {
                // CHỈ lưu cache tự động đối với các CDN giao diện (Tailwind, FontAwesome, DOMPurify)
                // TUYỆT ĐỐI KHÔNG lưu cache các file local để chống phình rác
                if (response && response.status === 200 && (url.hostname === 'cdn.tailwindcss.com' || url.hostname === 'cdnjs.cloudflare.com')) {
                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseToCache);
                    });
                }
                return response;
            })            ).catch(() => {
                console.log('Mất mạng và không tìm thấy file trong cache:', event.request.url);
            });
        })
    );
});

// 4. Lắng nghe lệnh tải Offline thủ công từ giao diện
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'CACHE_ALL') {
        caches.open(CACHE_NAME).then((cache) => {
            // Thực sự gọi lệnh nạp lại danh sách để chắc chắn 100% file đã được tải
            cache.addAll(ASSETS_TO_CACHE).then(() => {
                console.log('📥 Đã đồng bộ toàn bộ dữ liệu Offline thành công.');
            }).catch(err => console.log('Lỗi khi đồng bộ thủ công:', err));
        });
    }
});
