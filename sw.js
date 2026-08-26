// ==========================================
// SERVICE WORKER - ĐẠI LUẬN TRỊ YHCT v1.7.8 (Tối ưu hóa Cache 388 Ảnh)
// ==========================================

const CACHE_NAME = 'dailuantri-v1.7.8';

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

// 1. Cài đặt và nạp sẵn toàn bộ dữ liệu cấu trúc vào cache
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        }).catch(err => console.log('Lỗi nạp cache tĩnh:', err))
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

// 3. Xử lý Fetch: Ưu tiên lấy từ Cache, hỗ trợ lưu CDN giao diện
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Bỏ qua không can thiệp API Netlify hoặc method khác GET
    if (url.pathname.includes('/.netlify/functions/') || event.request.method !== 'GET') {
        return;
    }

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            // Có trong cache thì trả về ngay
            if (cachedResponse) {
                return cachedResponse;
            }
            
            // Không có thì gọi mạng
            return fetch(event.request).then((response) => {
                // CHỈ lưu cache tự động đối với các CDN giao diện (Tailwind, FontAwesome, DOMPurify)
                if (response && response.status === 200 && (url.hostname === 'cdn.tailwindcss.com' || url.hostname === 'cdnjs.cloudflare.com')) {
                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseToCache);
                    });
                }
                return response;
            });
        }).catch(() => {
            console.log('Mất mạng và không tìm thấy file trong cache:', event.request.url);
        })
    );
});

// 4. Lắng nghe lệnh tải Offline thủ công: Tải toàn bộ tài nguyên + 388 tệp ảnh
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'CACHE_ALL') {
        caches.open(CACHE_NAME).then(async (cache) => {
            // 1. Tải lại cấu trúc tệp tĩnh
            try {
                await cache.addAll(ASSETS_TO_CACHE);
            } catch (e) {
                console.log('Lỗi nạp tệp tĩnh:', e);
            }

            // 2. Tạo danh sách 388 tệp ảnh theo quy luật
            const listAnhHuyetVi = [];
            for (let i = 1; i <= 388; i++) {
                listAnhHuyetVi.push(`./hinhanhhuyetvi/BL${i}.png`);
            }

            // 3. Tải song song từng tệp an toàn (tránh văng lỗi hỏng cả tiến trình nếu thiếu 1 ảnh)
            let successCount = 0;
            await Promise.all(
                listAnhHuyetVi.map(url => 
                    cache.add(url)
                        .then(() => { successCount++; })
                        .catch(err => console.warn(`Không tìm thấy file ${url}`))
                )
            );

            console.log(`📥 Đã đồng bộ thành công ${successCount}/${listAnhHuyetVi.length} ảnh huyệt vị vào Cache Offline!`);
        });
    }
});
