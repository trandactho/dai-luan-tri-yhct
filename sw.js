// ==========================================
// SERVICE WORKER - ĐẠI LUẬN TRỊ YHCT v1.7.8
// ==========================================

const CACHE_NAME = 'dailuantri-v1.8.0'; 

// ... các phần giữ nguyên ...

// 4. Lắng nghe lệnh tải Offline thủ công (Kèm cơ chế quét và dọn rác cache thông minh)
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'CACHE_ALL') {
        caches.open(CACHE_NAME).then(async (cache) => {
            // Tổng hợp danh sách tất cả các tệp dữ liệu và module hợp lệ
            const allFilesToDownload = [
                ...ASSETS_TO_CACHE,
                './ai-service.js', // 🟢 Bổ sung thêm file ai-service.js vào cache
                './luantridata.js', './huyetvidata.js',
                './duoclieudata1.js', './duoclieudata2.js', './duoclieudata3.js', './duoclieudata4.js', './duoclieudata5.js',
                './duocthiendata.js', './tradata.js', './questiondata.js',
                './src/modules/tai-khoan.js', './src/modules/luan-tri.js', './src/modules/catalog.js',
                './src/modules/phoi-ngu.js', './src/modules/trac-nghiem.js', './src/modules/thu-vien.js', './src/modules/tu-chan.js'
            ];
            
            const listAnhHuyetVi = [];
            for (let i = 1; i <= 397; i++) {
                listAnhHuyetVi.push(`./hinhanhhuyetvi/BL${i}.png`);
            }

            const validUrlsSet = new Set([
                ...allFilesToDownload.map(url => new URL(url, self.location).href),
                ...listAnhHuyetVi.map(url => new URL(url, self.location).href)
            ]);

            // BƯỚC DỌN RÁC
            const cachedKeys = await cache.keys();
            for (const request of cachedKeys) {
                const reqUrl = request.url;
                const isCoreEssential = reqUrl.endsWith('/') || reqUrl.endsWith('index.html') || reqUrl.endsWith('style.css') || reqUrl.endsWith('manifest.json');
                
                if (!validUrlsSet.has(reqUrl) && !isCoreEssential) {
                    await cache.delete(request);
                    console.log('🧹 Đã dọn dẹp tệp rác khỏi cache:', reqUrl);
                }
            }

            // Tải tệp dữ liệu / module
            for (const url of allFilesToDownload) {
                try {
                    const matched = await cache.match(url);
                    if (!matched) {
                        await cache.add(url);
                    }
                } catch (e) {}
            }

            // Tải ảnh huyệt vị
            let successCount = 0;
            await Promise.all(
                listAnhHuyetVi.map(async (url) => {
                    try {
                        const matched = await cache.match(url);
                        if (matched) {
                            successCount++;
                            return;
                        }
                        await cache.add(url);
                        successCount++;
                    } catch (err) {
                        console.warn(`Không tìm thấy file ${url}`);
                    }
                })
            );

            console.log(`📥 Đã đồng bộ hoàn tất Cache Offline và dọn rác thành công! Tổng số ảnh: ${successCount}/${listAnhHuyetVi.length}`);

            // 🟢 THÊM ĐOẠN NÀY: Phản hồi kết quả về cho main_2.js để hiển thị alert
            if (event.ports && event.ports[0]) {
                event.ports[0].postMessage({
                    success: true,
                    count: successCount
                });
            }
        });
    }
});
