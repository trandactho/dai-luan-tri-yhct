const questionsDataPart1 = [
   // ==================== LÝ LUẬN CƠ BẢN ====================
    {
        category: 'lyluan',
        cau_hoi: 'Theo học thuyết Ngũ hành, tạng Can thuộc hành nào?',
        lua_chon: ['Mộc', 'Hỏa', 'Thổ', 'Kim'],
        dap_an: 0,
        giai_thich: 'Tạng Can ứng với mùa xuân, màu xanh, có đặc tính thăng phát nên thuộc hành Mộc.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tạng nào chủ về vận hóa thủy cốc và thủy thấp?',
        lua_chon: ['Tâm', 'Can', 'Tỳ', 'Phế'],
        dap_an: 2,
        giai_thich: 'Tỳ chủ vận hóa đồ ăn thức uống (thủy cốc) và vận hành, phân bố dịch thể (thủy thấp).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Quan hệ tương sinh nào sau đây là ĐÚNG trong Ngũ hành?',
        lua_chon: ['Mộc sinh Hỏa', 'Hỏa sinh Kim', 'Kim sinh Mộc', 'Thủy sinh Thổ'],
        dap_an: 0,
        giai_thich: 'Quy luật tương sinh: Mộc sinh Hỏa, Hỏa sinh Thổ, Thổ sinh Kim, Kim sinh Thủy, Thủy sinh Mộc.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tạng Thận có chức năng chủ yếu nào sau đây?',
        lua_chon: ['Chủ tàng huyết', 'Chủ tàng tinh, chủ thủy', 'Chủ thống huyết', 'Chủ tuyên phát túc giáng'],
        dap_an: 1,
        giai_thich: 'Thận tàng trữ tinh tiên thiên/hậu thiên và chủ trì việc chuyển hóa, phân bố nước (thủy) trong cơ thể.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Loại khí nào có vai trò bảo vệ bề mặt cơ thể chống ngoại tà?',
        lua_chon: ['Nguyên khí', 'Tông khí', 'Dinh khí', 'Vệ khí'],
        dap_an: 3,
        giai_thich: 'Vệ khí vận hành ngoài lòng mạch, bảo vệ bề mặt da thịt và chống lại sự xâm nhập của tà khí.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tạng Tâm chủ về yếu tố nào?',
        lua_chon: ['Cân cơ', 'Huyết mạch và thần minh', 'Bì mao', 'Cơ thịt'],
        dap_an: 1,
        giai_thich: 'Tâm thúc đẩy huyết lưu thông trong lòng mạch và làm chủ các hoạt động tinh thần, tư duy (thần minh).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Trong học thuyết Ngũ hành, Thổ khắc hành nào?',
        lua_chon: ['Mộc', 'Hỏa', 'Thủy', 'Kim'],
        dap_an: 2,
        giai_thich: 'Quy luật tương khắc: Thổ khắc Thủy (đất ngăn đê giữ nước).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Khái niệm "Tạng phủ" trong YHCT bao gồm:',
        lua_chon: ['5 tạng, 6 phủ, phủ kỳ hằng', '6 tạng, 5 phủ', '4 tạng, 4 phủ', '5 tạng, 5 phủ'],
        dap_an: 0,
        giai_thich: 'Hệ thống gồm Ngũ tạng (Tâm, Can, Tỳ, Phế, Thận), Lục phủ (Đởm, Vị, Tiểu trường, Đại trường, Bàng quang, Tam tiêu) và Phủ kỳ hằng.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Biểu hiện nào sau đây thuộc thuộc tính Âm?',
        lua_chon: ['Hưng phấn, vận động', 'Nhiệt, hướng lên', 'Tĩnh, lạnh, hướng xuống', 'Sáng chói, nhanh'],
        dap_an: 2,
        giai_thich: 'Thuộc tính Âm bao gồm các đặc tính: tĩnh lặng, lạnh, ức chế, hướng xuống dưới và vào bên trong.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tạng Phế khai khiếu ra đâu?',
        lua_chon: ['Mắt', 'Tai', 'Mũi', 'Miệng'],
        dap_an: 2,
        giai_thich: 'Phế làm chủ hô hấp, phế khí thông ra mũi nên Phế khai khiếu ra mũi.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Trong học thuyết Ngũ hành, tạng Can khai khiếu ra đâu?',
        lua_chon: ['Mũi', 'Mắt', 'Tai', 'Miệng'],
        dap_an: 1,
        giai_thich: 'Tạng Can tàng huyết, tinh khí của Can đi lên nuôi dưỡng mắt nên Can khai khiếu ra mắt.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tình chí "Nộ" (giận dữ quá độ) gây ảnh hưởng xấu nhất đến tạng nào?',
        lua_chon: ['Tâm', 'Can', 'Tỳ', 'Thận'],
        dap_an: 1,
        giai_thich: 'Giận dữ (Nộ) làm Can khí bốc ngược lên trên, trực tiếp tổn thương tạng Can (Nộ thương Can).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Loại khí nào chảy trong lòng mạch, có vai trò sinh hóa ra Huyết và nuôi dưỡng cơ thể?',
        lua_chon: ['Vệ khí', 'Tông khí', 'Dinh khí', 'Nguyên khí'],
        dap_an: 2,
        giai_thich: 'Dinh khí do Tỳ Vị vận hóa từ tinh hoa thủy cốc, đi trong lòng mạch để hóa sinh ra Huyết và nuôi dưỡng toàn thân.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tạng nào chủ trì việc "nạp khí" trong quá trình hô hấp của cơ thể?',
        lua_chon: ['Phế', 'Thận', 'Tỳ', 'Tâm'],
        dap_an: 1,
        giai_thich: 'Phế hít khí vào nhưng Thận phải thu nạp, bắt giữ khí xuống dưới để hô hấp được sâu lắng.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Mạch Nhâm có vai trò gì trong hệ thống Kỳ kinh bát mạch?',
        lua_chon: ['Bể của các kinh âm', 'Bể của các kinh dương', 'Bể của huyết hải', 'Điều hòa khí toàn thân'],
        dap_an: 0,
        giai_thich: 'Mạch Nhâm đi ở mặt trước cơ thể, hội tụ khí huyết của tất cả các kinh âm nên gọi là "Âm kinh chi hải".'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Mạch Đốc đóng vai trò gì trong hệ thống Kỳ kinh bát mạch?',
        lua_chon: ['Thống quản tất cả kinh âm', 'Thống quản tất cả kinh dương', 'Bể của thủy cốc', 'Chủ về vinh vệ'],
        dap_an: 1,
        giai_thich: 'Mạch Đốc chạy dọc cột sống sau lưng, hội tụ tất cả kinh dương nên gọi là "Dương kinh chi hải".'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tình chí "Hỷ" (vui mừng quá độ) làm hại tạng nào?',
        lua_chon: ['Can', 'Tâm', 'Tỳ', 'Phế'],
        dap_an: 1,
        giai_thich: 'Vui mừng quá mức khiến tâm khí hoãn giải, thần khí bị tán loạn (Hỷ thương Tâm).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tình chí "Tư" (lo nghĩ nhiều, kéo dài) dễ gây tổn thương tạng nào?',
        lua_chon: ['Tỳ', 'Thận', 'Tâm', 'Phế'],
        dap_an: 0,
        giai_thich: 'Lo nghĩ nhiều làm cho tỳ khí bị uất trệ, ảnh hưởng đến chức năng vận hóa đồ ăn (Tư thương Tỳ).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tạng Tỳ tương ứng với vị nào trong Ngũ vị?',
        lua_chon: ['Chua', 'Đắng', 'Ngọt', 'Cay'],
        dap_an: 2,
        giai_thich: 'Tỳ thuộc hành Thổ, tương ứng với vị ngọt (Cam).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tạng Phế tương ứng với màu sắc nào trong Ngũ sắc?',
        lua_chon: ['Xanh', 'Đỏ', 'Trắng', 'Đen'],
        dap_an: 2,
        giai_thich: 'Phế thuộc hành Kim, tương ứng với màu trắng.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Lục dâm (6 nguyên nhân gây bệnh bên ngoài) bao gồm yếu tố nào?',
        lua_chon: ['Phong, Hàn, Thử, Thấp, Táo, Hỏa', 'Hỷ, Nộ, Ưu, Tư, Bi, Khủng', 'Đàm, Ứ, Thấp, Hàn, Nhiệt, Phong', 'Tâm, Can, Tỳ, Phế, Thận, Đởm'],
        dap_an: 0,
        giai_thich: 'Lục dâm bao gồm 6 yếu tố thời tiết khi biến đổi bất thường gây bệnh: Gió, Lạnh, Nắng, Ẩm, Khô, Nóng.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tà khí nào được xem là "bách bệnh chi thủy" (đứng đầu các bệnh) có đặc tính hay di động?',
        lua_chon: ['Hàn tà', 'Thấp tà', 'Phong tà', 'Táo tà'],
        dap_an: 2,
        giai_thich: 'Phong tà hay di động, biến hóa nhanh và thường đưa các tà khí khác xâm nhập cơ thể.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Đặc tính nổi bật của Thấp tà là gì?',
        lua_chon: ['Gây khô bốc lên trên', 'Nặng nề, dính trệ, hướng xuống', 'Di chuyển nhanh, biến hóa nhiều', 'Gây ngưng trệ, co rút'],
        dap_an: 1,
        giai_thich: 'Thấp tà mang thuộc tính Âm, gây bệnh xu hướng nặng nề (trọng), dính trệ (trệ) và kéo dài.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Phủ nào có quan hệ Biểu - Lý trực tiếp với tạng Tâm?',
        lua_chon: ['Đại trường', 'Tiểu trường', 'Vị', 'Bàng quang'],
        dap_an: 1,
        giai_thich: 'Tâm (tạng) và Tiểu trường (phủ) có đường kinh quan hệ Biểu - Lý qua lại.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Phủ nào có quan hệ Biểu - Lý trực tiếp với tạng Can?',
        lua_chon: ['Đởm', 'Vị', 'Tam tiêu', 'Bàng quang'],
        dap_an: 0,
        giai_thich: 'Can thuộc tạng Âm, Đởm thuộc phủ Dương, hai cơ quan có quan hệ Biểu - Lý.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Phủ nào có quan hệ Biểu - Lý trực tiếp với tạng Phế?',
        lua_chon: ['Tiểu trường', 'Đại trường', 'Đởm', 'Tam tiêu'],
        dap_an: 1,
        giai_thich: 'Phế (tạng) quan hệ Biểu - Lý trực tiếp với Đại trường (phủ).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Phủ nào có quan hệ Biểu - Lý trực tiếp với tạng Thận?',
        lua_chon: ['Vị', 'Bàng quang', 'Đởm', 'Tiểu trường'],
        dap_an: 1,
        giai_thich: 'Thận quản lý việc tạo nước tiểu và Bàng quang chứa/bài tiết nước tiểu, hai tạng phủ có quan hệ Biểu - Lý.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Nguyên khí được tàng trữ ở đâu và có nguồn gốc chủ yếu từ đâu?',
        lua_chon: ['Tàng ở Thận, nguồn gốc bẩm sinh từ cha mẹ', 'Tàng ở Tỳ, nguồn gốc từ đồ ăn thức uống', 'Tàng ở Phế, nguồn gốc từ khí trời', 'Tàng ở Tâm, nguồn gốc từ huyết mạch'],
        dap_an: 0,
        giai_thich: 'Nguyên khí là gốc khí của cơ thể, do tinh tiên thiên cha mẹ truyền lại và tàng trữ tại Thận.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tông khí tích tụ ở vùng nào trong cơ thể?',
        lua_chon: ['Trong lòng mạch', 'Ở vùng Đản trung (ngực)', 'Ở vùng Hạ tiêu', 'Ở bề mặt da thịt'],
        dap_an: 1,
        giai_thich: 'Tông khí hình thành do sự kết hợp giữa khí trời (Phế) và tinh hoa thủy cốc (Tỳ), tích tụ tại vùng ngực (Đản trung).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tạng Thận vinh nhuận (biểu hiện ra ngoài) ở đâu?',
        lua_chon: ['Móng tay, móng chân', 'Tóc', 'Môi', 'Sắc mặt'],
        dap_an: 1,
        giai_thich: 'Thận tàng tinh, tinh sinh huyết, tóc là phần thừa của huyết nên sự suy thịnh của Thận thể hiện ra tóc.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tạng Can vinh nhuận ra bộ phận nào?',
        lua_chon: ['Tóc', 'Móng tay, móng chân', 'Da và lông', 'Thịt'],
        dap_an: 1,
        giai_thich: 'Can chủ cân và tàng huyết, sự dồi dào của can huyết phản ánh rõ nhất ra móng tay, móng chân (trảo).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tạng Tỳ vinh nhuận ra bộ phận nào?',
        lua_chon: ['Môi', 'Mắt', 'Mũi', 'Tai'],
        dap_an: 0,
        giai_thich: 'Tỳ khí nhu hòa, vận hóa tốt thì môi hồng hào nhuận ướt.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tạng Tâm vinh nhuận ra đâu?',
        lua_chon: ['Sắc mặt', 'Tóc', 'Lông bì', 'Móng'],
        dap_an: 0,
        giai_thich: 'Tâm chủ huyết mạch, huyết dịch lưu thông tốt làm cho sắc mặt hồng hào tươi nhuận.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Theo Ngũ hành tương sinh, tạng Tâm là "mẹ" của tạng nào?',
        lua_chon: ['Can', 'Tỳ', 'Phế', 'Thận'],
        dap_an: 1,
        giai_thich: 'Tâm thuộc Hỏa, Tỳ thuộc Thổ; quy luật Hỏa sinh Thổ nên Tâm (Hỏa) là mẹ của Tỳ (Thổ).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Theo Ngũ hành tương sinh, tạng nào là "con" của tạng Phế?',
        lua_chon: ['Tâm', 'Can', 'Tỳ', 'Thận'],
        dap_an: 3,
        giai_thich: 'Phế thuộc Kim, Thận thuộc Thủy; Kim sinh Thủy nên Thận là con của Phế.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Hiện tượng tạng Can (Mộc) quá mạnh chèn ép tạng Tỳ (Thổ) thuộc quy luật nào?',
        lua_chon: ['Tương sinh', 'Tương khắc', 'Tương thừa', 'Tương vũ'],
        dap_an: 2,
        giai_thich: 'Tương thừa là sự khắc phạt quá mức của một hành quá mạnh lên hành bị khắc (Mộc thừa Thổ).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Khi tạng Tỳ (Thổ) suy yếu không khắc được Thủy, bị Thủy phản lại gọi là:',
        lua_chon: ['Tương thừa', 'Tương vũ', 'Tương sinh', 'Tương hòa'],
        dap_an: 1,
        giai_thich: 'Tương vũ là hiện tượng lấn áp ngược của hành bị khắc đối với hành vốn khắc nó do suy yếu.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tạng nào chủ trị việc thống quản huyết (giữ huyết đi trong lòng mạch)?',
        lua_chon: ['Tâm', 'Tỳ', 'Can', 'Thận'],
        dap_an: 1,
        giai_thich: 'Tỳ thống huyết giúp cai quản và giữ huyết đi đúng đường trong mạch.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tạng nào chủ tàng huyết và điều tiết lượng huyết trong cơ thể?',
        lua_chon: ['Tâm', 'Can', 'Tỳ', 'Phế'],
        dap_an: 1,
        giai_thich: 'Can chủ tàng huyết, lưu trữ máu khi nghỉ ngơi và phân bố máu khi hoạt động.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tạng nào chủ về xương (cốt) và sinh tủy?',
        lua_chon: ['Thận', 'Tỳ', 'Can', 'Phế'],
        dap_an: 0,
        giai_thich: 'Thận tàng tinh, tinh hóa tủy nuôi dưỡng xương cốt (Thận chủ cốt sinh tủy).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Toàn bộ chất lỏng bình thường trong cơ thể (nước bọt, mồ hôi, dịch khớp...) gọi chung là:',
        lua_chon: ['Huyết', 'Tân dịch', 'Tinh', 'Khí'],
        dap_an: 1,
        giai_thich: 'Tân dịch là tên gọi chung của toàn bộ dịch thể bình thường có chức năng nuôi dưỡng.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tà khí ngoại cảm nào xuất hiện vào mùa hè, gây sốt cao, vã mồ hôi, hao khí thương tân?',
        lua_chon: ['Phong tà', 'Thử tà', 'Táo tà', 'Hàn tà'],
        dap_an: 1,
        giai_thich: 'Thử tà gây bệnh về mùa hè, có đặc tính viêm nhiệt và tiêu hao khí, tân dịch nhanh chóng.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tà khí nào gây bệnh mùa thu, có đặc tính làm tiêu hao tân dịch (khô mũi, họng, da)?',
        lua_chon: ['Táo tà', 'Thấp tà', 'Hàn tà', 'Thử tà'],
        dap_an: 0,
        giai_thich: 'Táo tà đặc trưng cho khí khô ráo mùa thu, hay gây chứng mất nước, khô nẻ.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tình chí "Khủng" (sợ hãi quá độ) ảnh hưởng thế nào đến khí và tạng nào?',
        lua_chon: ['Hại Can, làm khí thượng', 'Hại Thận, làm khí hạ', 'Hại Tâm, làm khí hoãn', 'Hại Phế, làm khí tiêu'],
        dap_an: 1,
        giai_thich: 'Sợ hãi quá độ tổn thương tạng Thận, làm thận khí suy yếu hãm xuống (Khủng thương Thận, khí hạ).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tình chí "Kinh" (hoảng sợ đột ngột) làm cho khí cơ diễn biến thế nào?',
        lua_chon: ['Khí thăng', 'Khí hạ', 'Khí loạn', 'Khí uất'],
        dap_an: 2,
        giai_thich: 'Hoảng sợ bất ngờ làm thần trí không định, khí cơ hỗn loạn (Kinh tắc khí loạn).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Phủ nào có chức năng chứa đựng dịch mật do Can tiết ra?',
        lua_chon: ['Vị', 'Đởm', 'Bàng quang', 'Tam tiêu'],
        dap_an: 1,
        giai_thich: 'Đởm là túi chứa dịch mật do Can sơ tiết ra để giúp bài tiết tiêu hóa.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Theo YHCT, "Phủ kỳ hằng" bao gồm các cơ quan nào?',
        lua_chon: ['Não, Tủy, Cốt, Mạch, Đởm, Tử cung', 'Tâm, Can, Tỳ, Phế, Thận, Đởm', 'Vị, Đại trường, Tiểu trường, Bàng quang, Tam tiêu', 'Mắt, Tai, Mũi, Lưỡi, Thân, Ý'],
        dap_an: 0,
        giai_thich: 'Phủ kỳ hằng gồm 6 cơ quan hình dáng giống phủ nhưng chức năng tàng trữ giống tạng.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tạng Phế chủ về yếu tố nào sau đây?',
        lua_chon: ['Huyết mạch', 'Cơ thịt', 'Khí và chủ tuyên phát túc giáng', 'Tàng tinh'],
        dap_an: 2,
        giai_thich: 'Phế chủ toàn thân chi khí, vận hành khí qua hoạt động tuyên phát (ra ngoài) và túc giáng (xuống dưới).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Trong Âm Dương, hiện tượng "Âm thịnh" sẽ dẫn đến trạng thái lâm sàng nào?',
        lua_chon: ['Sinh Nhiệt', 'Sinh Hàn', 'Sinh Phong', 'Sinh Táo'],
        dap_an: 1,
        giai_thich: 'Âm thịnh tắc Hàn (Âm thừa sẽ phát sinh ra chứng thực hàn).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Khái niệm "Khí" trong YHCT KHÔNG bao gồm chức năng nào sau đây?',
        lua_chon: ['Thúc đẩy', 'Ôn húc (làm ấm)', 'Cố nhiếp', 'Trực tiếp cấu tạo nên cốt tủy'],
        dap_an: 3,
        giai_thich: 'Cốt tủy được sinh ra từ Thận tinh, không phải do chức năng trực tiếp của Khí.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tạng Tâm khai khiếu ra đâu?',
        lua_chon: ['Lưỡi', 'Mắt', 'Tai', 'Mũi'],
        dap_an: 0,
        giai_thich: 'Tâm khai khiếu ra lưỡi (ảnh hưởng sắc lưỡi, cảm nhận vị giác và giọng nói).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tạng Thận khai khiếu ra đâu?',
        lua_chon: ['Mắt', 'Mũi', 'Tai và nhị âm', 'Miệng'],
        dap_an: 2,
        giai_thich: 'Thận khai khiếu ra tai (sức nghe) và nhị âm (đường tiểu/sinh dục và đường đại tiện).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tạng Tỳ khai khiếu ra đâu?',
        lua_chon: ['Lưỡi', 'Miệng', 'Mắt', 'Tai'],
        dap_an: 1,
        giai_thich: 'Tỳ khai khiếu ra miệng, quyết định cảm giác ăn ngon miệng và vị giác.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tình chí "Ưu, Bi" (lo buồn, đau thương) gây tổn thương trực tiếp đến tạng nào?',
        lua_chon: ['Tâm', 'Can', 'Phế', 'Thận'],
        dap_an: 2,
        giai_thich: 'Lo buồn, đau thương kéo dài làm tiêu hao phế khí (Ưu bi thương Phế).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tình chí "Nộ" (giận dữ) quá độ làm cho khí cơ diễn biến như thế nào?',
        lua_chon: ['Khí thượng (bốc lên)', 'Khí hạ (hạ xuống)', 'Khí hoãn (chậm lại)', 'Khí tiêu (hao mất)'],
        dap_an: 0,
        giai_thich: 'Giận dữ làm can khí xông ngược lên trên (Nộ tắc khí thượng).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tình chí "Tư" (lo nghĩ quá độ) làm cho khí cơ biến hóa ra sao?',
        lua_chon: ['Khí loạn', 'Khí kết (trệ lại)', 'Khí hạ', 'Khí thượng'],
        dap_an: 1,
        giai_thich: 'Lo nghĩ quá mức làm khí cơ trệ ngưng lại ở Trung tiêu (Tư tắc khí kết).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tình chí "Hỷ" (vui mừng quá độ) làm cho khí cơ thay đổi thế nào?',
        lua_chon: ['Khí thượng', 'Khí hoãn (tán loạn)', 'Khí tiêu', 'Khí kết'],
        dap_an: 1,
        giai_thich: 'Vui mừng quá trớn làm tâm khí bị hoãn giải, thần chí không tập trung (Hỷ tắc khí hoãn).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tạng Tâm tương ứng với vị nào trong Ngũ vị?',
        lua_chon: ['Chua', 'Đắng', 'Ngọt', 'Mặn'],
        dap_an: 1,
        giai_thich: 'Tâm thuộc hành Hỏa, tương ứng với vị đắng (Khổ).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tạng Can tương ứng với vị nào trong Ngũ vị?',
        lua_chon: ['Chua', 'Đắng', 'Cay', 'Mặn'],
        dap_an: 0,
        giai_thich: 'Can thuộc hành Mộc, tương ứng với vị chua (Toan).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tạng Thận tương ứng với vị nào trong Ngũ vị?',
        lua_chon: ['Ngọt', 'Cay', 'Mặn', 'Chua'],
        dap_an: 2,
        giai_thich: 'Thận thuộc hành Thủy, tương ứng với vị mặn (Hàm).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tạng Phế tương ứng với vị nào trong Ngũ vị?',
        lua_chon: ['Cay', 'Chua', 'Đắng', 'Ngọt'],
        dap_an: 0,
        giai_thich: 'Phế thuộc hành Kim, tương ứng với vị cay (Tân).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tạng Can tương ứng với màu sắc nào trong Ngũ sắc?',
        lua_chon: ['Đỏ', 'Xanh', 'Vàng', 'Đen'],
        dap_an: 1,
        giai_thich: 'Can thuộc Mộc, tương ứng với màu xanh (Thanh).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tạng Tâm tương ứng với màu sắc nào trong Ngũ sắc?',
        lua_chon: ['Đỏ', 'Trắng', 'Đen', 'Vàng'],
        dap_an: 0,
        giai_thich: 'Tâm thuộc Hỏa, tương ứng với màu đỏ (Xích).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tạng Tỳ tương ứng với màu sắc nào trong Ngũ sắc?',
        lua_chon: ['Xanh', 'Vàng', 'Trắng', 'Đen'],
        dap_an: 1,
        giai_thich: 'Tỳ thuộc Thổ, tương ứng với màu vàng (Hoàng).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tạng Thận tương ứng với màu sắc nào trong Ngũ sắc?',
        lua_chon: ['Xanh', 'Đỏ', 'Trắng', 'Đen'],
        dap_an: 3,
        giai_thich: 'Thận thuộc Thủy, tương ứng với màu đen (Hắc).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Phủ Vị có quan hệ Biểu - Lý trực tiếp với tạng nào?',
        lua_chon: ['Tỳ', 'Can', 'Thận', 'Phế'],
        dap_an: 0,
        giai_thich: 'Tỳ và Vị đều ở Trung tiêu, quan hệ Biểu - Lý (Tỳ chủ thăng, Vị chủ giáng).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Phủ nào đóng vai trò tiếp nhận thủy cốc từ Vị và "chủ phân biệt thanh trọc (trong đục)"?',
        lua_chon: ['Đại trường', 'Tiểu trường', 'Bàng quang', 'Tam tiêu'],
        dap_an: 1,
        giai_thich: 'Tiểu trường tiếp nhận thức ăn từ Vị, chắt lọc tinh hoa (thanh) đưa đi nuôi cơ thể và đẩy cặn bã (trọc) xuống Đại trường.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Phủ nào có chức năng truyền dẫn và tống cặn bã ra ngoài cơ thể?',
        lua_chon: ['Tiểu trường', 'Đại trường', 'Bàng quang', 'Vị'],
        dap_an: 1,
        giai_thich: 'Đại trường tiếp nhận chất thải từ Tiểu trường, hấp thu lại nước và bài tiết phân ra ngoài.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Quan hệ tương khắc nào sau đây là ĐÚNG trong học thuyết Ngũ hành?',
        lua_chon: ['Mộc khắc Thổ', 'Hỏa khắc Mộc', 'Kim khắc Thủy', 'Thổ khắc Hỏa'],
        dap_an: 0,
        giai_thich: 'Vòng tương khắc chuẩn: Mộc khắc Thổ, Thổ khắc Thủy, Thủy khắc Hỏa, Hỏa khắc Kim, Kim khắc Mộc.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Theo quy luật Ngũ hành tương sinh, hành Thủy là "con" của hành nào?',
        lua_chon: ['Mộc', 'Hỏa', 'Thổ', 'Kim'],
        dap_an: 3,
        giai_thich: 'Kim sinh Thủy, do đó Kim là Mẹ và Thủy là Con.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Trạng thái "Dương thịnh" trong thuyết Âm Dương thường dẫn đến biểu hiện lâm sàng nào?',
        lua_chon: ['Sinh Hàn', 'Sinh Nhiệt', 'Hao Âm', 'Trệ Khí'],
        dap_an: 1,
        giai_thich: 'Dương thịnh tắc Nhiệt (biểu hiện sốt cao, khát nước, thực nhiệt).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Hiện tượng "Dương hư" trong cơ thể thường gây ra trạng thái nào?',
        lua_chon: ['Nội nhiệt', 'Ngoại hàn (Sinh Hàn)', 'Ứ huyết', 'Khí uất'],
        dap_an: 1,
        giai_thich: 'Dương hư tắc Ngoại hàn (suy giảm chức năng làm ấm, sợ lạnh, tay chân lạnh).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Hiện tượng "Âm hư" thường dẫn đến trạng thái lâm sàng nào?',
        lua_chon: ['Nội nhiệt (Hư nhiệt)', 'Ngoại hàn', 'Khí trệ', 'Đàm thấp'],
        dap_an: 0,
        giai_thich: 'Âm hư tắc Nội nhiệt (phần âm giảm gây hỏa vượng, sốt về chiều, lòng bàn tay chân nóng).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tạng Phế vinh nhuận ra bộ phận nào trên cơ thể?',
        lua_chon: ['Móng tay', 'Tóc', 'Da và lông (bì mao)', 'Môi'],
        dap_an: 2,
        giai_thich: 'Phế chủ bì mao, tuyên phát tân dịch nuôi dưỡng da và lông toàn thân.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tạng Can chủ về thể hiện (thể) nào trong cơ thể?',
        lua_chon: ['Chủ cân (gân)', 'Chủ cơ thịt', 'Chủ cốt (xương)', 'Chủ mạch'],
        dap_an: 0,
        giai_thich: 'Can chủ cân (dây chằng và gân cơ duy trì vận động khớp).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tạng Tỳ chủ về thể hiện nào trong cơ thể?',
        lua_chon: ['Chủ gân', 'Chủ cơ thịt và tứ chi', 'Chủ xương tủy', 'Chủ bì mao'],
        dap_an: 1,
        giai_thich: 'Tỳ vận hóa nuôi dưỡng cơ thịt (nhục) dồi dào và điều khiển hoạt động tứ chi.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Nguyên nhân gây bệnh bên trong cơ thể (Nội nhân) bao gồm yếu tố nào?',
        lua_chon: ['Lục dâm', 'Thất tình', 'Ăn uống bất điều', 'Trùng thú cắn'],
        dap_an: 1,
        giai_thich: 'Nội nhân là 7 thứ tình chí (Thất tình: Hỷ, Nộ, Ưu, Tư, Bi, Khủng, Kinh).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Nguyên nhân gây bệnh nào sau đây thuộc nhóm "Bất nội ngoại nhân"?',
        lua_chon: ['Phong, Hàn, Thử', 'Hỷ, Nộ, Ưu, Tư', 'Ăn uống quá độ, lao lực, chấn thương', 'Tâm, Can, Tỳ hư'],
        dap_an: 2,
        giai_thich: 'Bất nội ngoại nhân bao gồm ăn uống, mệt mỏi quá độ, chấn thương, trùng thú cắn.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tà khí "Hàn" có đặc tính nổi bật nào sau đây?',
        lua_chon: ['Chủ ngưng trệ và thu dẫn (co rút)', 'Hay di động và biến hóa', 'Nặng nề dính trệ', 'Gây khô bốc lên'],
        dap_an: 0,
        giai_thich: 'Hàn tà có tính ngưng trệ (ngăn trở khí huyết gây đau) và thu dẫn (làm co rút gân cơ).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tà khí "Hỏa" (Nhiệt tà) có đặc tính nổi bật nào?',
        lua_chon: ['Hướng xuống dưới', 'Hay ngưng trệ', 'Viêm nhiệt, hướng lên trên, hao khí thương tân', 'Chủ về ẩm thấp'],
        dap_an: 2,
        giai_thich: 'Hỏa tà thuộc Dương, tính viêm nhiệt bốc lên, đốt cháy tân dịch và hao tổn khí.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Chức năng "Tâm chủ thần minh" ám chỉ điều gì?',
        lua_chon: ['Quản lý vận động gân xương', 'Chủ quản hoạt động tinh thần, tư duy, ý thức', 'Tiết ra dịch mật', 'Nạp khí vào cơ thể'],
        dap_an: 1,
        giai_thich: 'Tâm chủ thần minh chịu trách nhiệm điều khiển toàn bộ tư duy, trí tuệ và cảm xúc con người.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Hệ thống "Bát cương" dùng trong chẩn đoán YHCT bao gồm 4 cặp quy cương nào?',
        lua_chon: ['Biểu - Lý, Hàn - Nhiệt, Hư - Thực, Âm - Dương', 'Tâm - Can - Tỳ - Phế', 'Phong - Hàn - Thấp - Nhiệt', 'Khí - Huyết - Tân - Dịch'],
        dap_an: 0,
        giai_thich: 'Bát cương gồm 8 quy cương: Biểu/Lý, Hàn/Nhiệt, Hư/Thực và Âm/Dương.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Mạch Xung trong Kỳ kinh bát mạch được coi là gì?',
        lua_chon: ['Bể của các kinh âm', 'Bể của các kinh dương', 'Huyết hải (Bể của huyết)', 'Bể của thủy cốc'],
        dap_an: 2,
        giai_thich: 'Mạch Xung là nơi tập trung khí huyết của 12 đường kinh chính nên gọi là Huyết hải.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Kỳ kinh nào trong Bát mạch có đường đi chạy vòng quanh eo lưng như sợi dây đai?',
        lua_chon: ['Mạch Nhâm', 'Mạch Đốc', 'Mạch Đải', 'Mạch Xung'],
        dap_an: 2,
        giai_thich: 'Mạch Đải đi ngang quanh thắt lưng, buộc thắt các đường kinh chạy dọc.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tạng nào được Đông y tôn xưng là "Tiên thiên chi bản" (Gốc bẩm sinh của cơ thể)?',
        lua_chon: ['Tâm', 'Can', 'Tỳ', 'Thận'],
        dap_an: 3,
        giai_thich: 'Thận tàng tinh tiên thiên nhận từ bố mẹ, quyết định sự sống bẩm sinh.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tạng nào được coi là "Hậu thiên chi bản" (Gốc nguồn sống sau khi sinh)?',
        lua_chon: ['Tỳ', 'Phế', 'Thận', 'Tâm'],
        dap_an: 0,
        giai_thich: 'Tỳ tiêu hóa thủy cốc sinh ra tinh khí hậu thiên nuôi cơ thể sau khi sinh.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tạng Can được ví như vị quan nào trong cơ thể ("Thập nhị quan")?',
        lua_chon: ['Quân chủ chi quan', 'Tướng quân chi quan', 'Thương lẫm chi quan', 'Tác hoạt chi quan'],
        dap_an: 1,
        giai_thich: 'Can mưu lược, dũng mộng chống tà khí nên gọi là Tướng quân chi quan.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tạng Tâm được ví như vị quan nào trong hệ thống tạng phủ?',
        lua_chon: ['Tướng quân chi quan', 'Quân chủ chi quan', 'Thần minh chi quan', 'Tỳ tướng chi quan'],
        dap_an: 1,
        giai_thich: 'Tâm giữ vai trò chỉ huy cao nhất toàn bộ cơ thể nên gọi là Quân chủ chi quan.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Theo YHCT, dịch tiết nào thuộc về tạng Phế (trong Ngũ dịch)?',
        lua_chon: ['Khấp (nước mắt)', 'Thế (nước mũi)', 'Tuyến (nước bọt trong)', 'Hãn (mồ hôi)'],
        dap_an: 1,
        giai_thich: 'Ngũ dịch: Tâm - mồ hôi, Can - nước mắt, Tỳ - nước bọt loãng, Phế - nước mũi, Thận - nước bọt đặc.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Mồ hôi (Hãn dịch) được coi là chất dịch liên quan trực tiếp đến tạng nào?',
        lua_chon: ['Tâm', 'Can', 'Thận', 'Tỳ'],
        dap_an: 0,
        giai_thich: 'Tâm chủ huyết mạch, "Hãn vi Tâm chi dịch" (Mồ hôi là dịch của tạng Tâm).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tạng Thận làm chủ loại dịch tiết nào trong cơ thể (trong Ngũ dịch)?',
        lua_chon: ['Khấp (nước mắt)', 'Trĩ/Dãi (nước bọt đặc gốc lưỡi)', 'Thế (nước mũi)', 'Tuyến (nước bọt trong)'],
        dap_an: 1,
        giai_thich: 'Nước bọt đặc xuất phát từ gốc lưỡi (Trĩ/Dãi) thuộc tạng Thận quản lý.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Huyệt "Thái Xung" là Nguyên huyệt của kinh nào?',
        lua_chon: ['Túc thái âm Tỳ', 'Túc quyết âm Can', 'Túc thiếu âm Thận', 'Thủ thái âm Phế'],
        dap_an: 1,
        giai_thich: 'Thái Xung là Nguyên huyệt nằm trên đường kinh Túc quyết âm Can.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Theo Y học cổ truyền, tạng nào "chủ thăng", đưa các chất tinh hoa thủy cốc lên trên?',
        lua_chon: ['Can', 'Tỳ', 'Phế', 'Thận'],
        dap_an: 1,
        giai_thich: 'Tỳ khí chủ thăng, vận chuyển chất tinh hoa lên Phế để hóa sinh khí huyết.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Tạng Phế có đặc tính "chủ giáng", nghĩa là làm gì?',
        lua_chon: ['Đưa khí và tân dịch đi xuống dưới', 'Tàng trữ huyết', 'Chuyển hóa thức ăn', 'Nạp tinh khí'],
        dap_an: 0,
        giai_thich: 'Túc giáng là sự thanh lọc và phân bố khí, dịch thể xuôi dòng đi xuống dưới.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Yếu tố nào sau đây KHÔNG thuộc Thất tình (7 cảm xúc gây bệnh)?',
        lua_chon: ['Hỷ, Nộ', 'Ưu, Tư', 'Bi, Khủng, Kinh', 'Phong, Hàn'],
        dap_an: 3,
        giai_thich: 'Phong, Hàn là hai ngoại tà thuộc Lục dâm, không thuộc Thất tình.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Hành Mộc tương ứng với mùa nào trong Ngũ thời?',
        lua_chon: ['Mùa Xuân', 'Mùa Hạ', 'Mùa Thu', 'Mùa Đông'],
        dap_an: 0,
        giai_thich: 'Mộc tương ứng với mùa Xuân (sự sinh sôi, phát triển).'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Hành Kim tương ứng với mùa nào trong Ngũ thời?',
        lua_chon: ['Mùa Xuân', 'Mùa Hạ', 'Mùa Thu', 'Mùa Đông'],
        dap_an: 2,
        giai_thich: 'Kim mang đặc tính mát mẻ, thu hái, ứng với mùa Thu.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Hành Thủy tương ứng với phương nào trong Ngũ phương?',
        lua_chon: ['Phương Đông', 'Phương Nam', 'Phương Tây', 'Phương Bắc'],
        dap_an: 3,
        giai_thich: 'Ngũ phương: Mộc - Đông, Hỏa - Nam, Kim - Tây, Thủy - Bắc, Thổ - Trung ương.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Hiện tượng "Phế Kim khắc Can Mộc" là thể hiện quy luật nào trong Ngũ hành?',
        lua_chon: ['Tương sinh', 'Tương khắc', 'Tương thừa', 'Tương vũ'],
        dap_an: 1,
        giai_thich: 'Đây là quan hệ tương khắc sinh lý bình thường giữa các hành trong Ngũ hành.'
    },
    {
        category: 'lyluan',
        cau_hoi: 'Khái niệm "Tâm bao lạc" (Màng ngoài tâm) có chức năng chính là gì?',
        lua_chon: ['Bảo vệ tạng Tâm chống lại tà khí', 'Chứa đựng dịch mật', 'Vận hóa thủy thấp', 'Tàng trữ tinh khí'],
        dap_an: 0,
        giai_thich: 'Tâm bao lạc bọc quanh tạng Tâm, gánh chịu ngoại tà thay cho tạng Tâm.'
    },
];
const questionsDataPart2 = [
    // ==================== PHƯƠNG TỄ HỌC ====================
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Tứ quân tử thang" gồm các vị thuốc nào?',
        lua_chon: [
            'Nhân sâm, Bạch thuật, Phục linh, Cam thảo',
            'Đương quy, Thục địa, Bạch thược, Xuyên khung',
            'Hoàng kỳ, Nhân sâm, Phòng phong, Đương quy',
            'Bạch thuật, Phục linh, Trạch tả, Trư linh'
        ],
        dap_an: 0,
        giai_thich: 'Tứ quân tử thang là bài thuốc cơ bản bổ khí gồm 4 vị: Nhân sâm (Quân), Bạch thuật (Thần), Phục linh (Tá), Cam thảo (Sứ).'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Tứ vật thang" có công dụng chính là gì?',
        lua_chon: ['Bổ khí', 'Bổ huyết', 'Bổ âm', 'Bổ dương'],
        dap_an: 1,
        giai_thich: 'Tứ vật thang (Khung, Quy, Thược, Địa) là bài thuốc cổ phương đầu bảng về bổ huyết và điều huyết.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Vị thuốc đóng vai trò chính, chữa nguyên nhân hoặc triệu chứng chính gọi là:',
        lua_chon: ['Quân', 'Thần', 'Tá', 'Sứ'],
        dap_an: 0,
        giai_thich: 'Trong cấu trúc phương tễ (Quân - Thần - Tá - Sứ), vị Quân giữ vai trò chủ chốt để giải quyết nguyên nhân/chứng bệnh chính.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Lục vị địa hoàng hoàn" có tác dụng chủ yếu là:',
        lua_chon: ['Bổ Thận dương', 'Bổ Thận âm', 'Sơ can giải uất', 'Thanh nhiệt giải độc'],
        dap_an: 1,
        giai_thich: 'Lục vị địa hoàng hoàn là bài thuốc kinh điển chuyên tư bổ Thận âm.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Thành phần bài thuốc "Bát trân thang" là kết hợp của 2 bài thuốc nào?',
        lua_chon: ['Tứ quân + Tứ vật', 'Lục vị + Bát vị', 'Tứ quân + Bát vị', 'Tứ vật + Lục vị'],
        dap_an: 0,
        giai_thich: 'Bát trân thang hợp thành từ Tứ quân tử thang (bổ khí) và Tứ vật thang (bổ huyết) để điều trị khí huyết lưỡng hư.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Vị thuốc "Sứ" trong cấu trúc bài thuốc YHCT có vai trò gì?',
        lua_chon: [
            'Chữa triệu chứng phụ',
            'Dẫn thuốc đến kinh bệnh hoặc điều hòa các vị thuốc',
            'Giảm độc tính của bài thuốc',
            'Tăng tác dụng của vị Quân'
        ],
        dap_an: 1,
        giai_thich: 'Vị Sứ đảm nhận vai trò dẫn dược tính đến đúng kinh bệnh (dẫn kinh) hoặc hòa hoãn các vị thuốc khác.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Tiêu dao tán" nổi tiếng với tác dụng nào?',
        lua_chon: ['Sơ can giải uất, kiện tỳ dưỡng huyết', 'Thanh nhiệt trừ thấp', 'Ôn trung tán hàn', 'Táo thấp hóa đàm'],
        dap_an: 0,
        giai_thich: 'Tiêu dao tán dùng điều trị chứng Can khí uất kết gây tỳ hư huyết kém.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Bạch hổ thang" dùng để điều trị chứng bệnh nào?',
        lua_chon: ['Biểu nhiệt', 'Khí phận thực nhiệt', 'Thận âm hư', 'Tỳ vị hư hàn'],
        dap_an: 1,
        giai_thich: 'Bạch hổ thang chữa chứng thực nhiệt ở khí phận với biểu hiện "Tứ đại": đại nhiệt, đại khát, đại hãn, mạch hồng đại.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài "An cung ngưu hoàng hoàn" thuộc nhóm phương tễ nào?',
        lua_chon: ['Thuốc Bổ', 'Thuốc Khai khiếu', 'Thuốc Giải biểu', 'Thuốc Trừ đàm'],
        dap_an: 1,
        giai_thich: 'An cung ngưu hoàng hoàn thuộc nhóm thuốc Lương khai (Khai khiếu thanh nhiệt), trị trúng phong thể bế nhiệt.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài "Bát vị địa hoàng hoàn" khác bài "Lục vị" ở chỗ thêm 2 vị thuốc nào?',
        lua_chon: ['Phụ tử, Nhục quế (hoặc Quế chi)', 'Nhân sâm, Hoàng kỳ', 'Đương quy, Xuyên khung', 'Mạch môn, Ngũ vị tử'],
        dap_an: 0,
        giai_thich: 'Bát vị địa hoàng hoàn gia thêm Phụ tử chế và Nhục quế (hoặc Quế chi) vào bài Lục vị để ôn bổ Thận dương.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Ma hoàng thang" gồm các vị thuốc nào?',
        lua_chon: [
            'Ma hoàng, Quế chi, Hạnh nhân, Cam thảo',
            'Ma hoàng, Hoàng kỳ, Bạch thuật, Cam thảo',
            'Ma hoàng, Quế chi, Phòng phong, Khương hoạt',
            'Ma hoàng, Tế tân, Phụ tử, Cam thảo'
        ],
        dap_an: 0,
        giai_thich: 'Ma hoàng thang gồm Ma hoàng, Quế chi, Hạnh nhân, Cam thảo, có tác dụng tân ôn giải biểu, phát hãn bình suyễn.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Quế chi thang" chủ trị chứng bệnh nào?',
        lua_chon: ['Ngoại cảm phong hàn biểu thực', 'Ngoại cảm phong hàn biểu hư (tự hãn)', 'Ngoại cảm phong nhiệt', 'Tỳ vị hư hàn'],
        dap_an: 1,
        giai_thich: 'Quế chi thang chữa ngoại cảm phong hàn thể biểu hư có triệu chứng sốt, sợ gió, vã mồ hôi (tự hãn).'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Bổ trung ích khí thang" do danh y nào sáng chế?',
        lua_chon: ['Trương Trọng Cảnh', 'Lý Đông Viên', 'Diệp Thiên Thủy', 'Trương Cảnh Nhạc'],
        dap_an: 1,
        giai_thich: 'Bài Bổ trung ích khí thang do Lý Đông Viên (người sáng lập trường phái Bổ thổ) biên soạn trong sách Tỳ Vị Luận.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Công dụng chính của bài thuốc "Quy tỳ thang" là gì?',
        lua_chon: ['Tư âm giáng hỏa, kiện tỳ', 'Bổ tâm tỳ, dưỡng huyết an thần', 'Sơ can giải uất, kiện tỳ', 'Bổ khí thăng dương, cố biểu'],
        dap_an: 1,
        giai_thich: 'Quy tỳ thang chuyên trị hội chứng Tâm Tỳ lưỡng hư gây mất ngủ, hồi hộp, hay quên, ăn kém.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Ngũ linh tán" có tác dụng chính là gì?',
        lua_chon: ['Lợi thủy thẩm thấp, ôn dương hóa khí', 'Thanh nhiệt lợi thấp, giải độc', 'Ôn trung tán hàn, chỉ thống', 'Táo thấp hóa đàm, hòa vị'],
        dap_an: 0,
        giai_thich: 'Ngũ linh tán (Trạch tả, Trư linh, Phục linh, Bạch thuật, Quế chi) giúp thông dương lợi thủy, trị thủy thũng, tiểu khó.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Tỷ lệ giữa Hoàng kỳ và Đương quy trong bài "Đương quy bổ huyết thang" là bao nhiêu?',
        lua_chon: ['1 : 1', '2 : 1', '5 : 1', '10 : 1'],
        dap_an: 2,
        giai_thich: 'Đương quy bổ huyết thang dùng Hoàng kỳ (5 phần - 30g) kết hợp Đương quy (1 phần - 6g) theo nguyên lý "khi sinh huyết".'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Tiểu sài hồ thang" thuộc nhóm phương tễ nào?',
        lua_chon: ['Giải biểu phương', 'Hòa giải phương', 'Tả hạ phương', 'Thanh nhiệt phương'],
        dap_an: 1,
        giai_thich: 'Tiểu sài hồ thang là bài thuốc hòa giải kinh Thiếu dương (bán biểu bán lý).'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Sinh mạch tán" gồm 3 vị thuốc nào?',
        lua_chon: ['Nhân sâm, Mạch môn, Ngũ vị tử', 'Nhân sâm, Mạch môn, Đương quy', 'Đương quy, Thục địa, Ngũ vị tử', 'Hoàng kỳ, Mạch môn, Nhân sâm'],
        dap_an: 0,
        giai_thich: 'Sinh mạch tán (Sâm, Mạch, Vị) có công năng ích khí sinh tân, liễm hãn dưỡng âm.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Bình vị tán" gồm các vị thuốc chính nào?',
        lua_chon: ['Thương truật, Hậu phác, Trần bì, Cam thảo', 'Bạch thuật, Phục linh, Trần bì, Cam thảo', 'Bán hạ, Trần bì, Phục linh, Cam thảo', 'Sơn tra, Thần khúc, Lai phục tử, Trần bì'],
        dap_an: 0,
        giai_thich: 'Bình vị tán gồm Thương truật, Hậu phác, Trần bì, Cam thảo, chuyên trị Tỳ vị thấp trệ, bụng đầy trướng.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Độc hoạt ký sinh thang" chủ trị chứng bệnh nào?',
        lua_chon: ['Phong hàn thấp tý kèm Can Thận hư, khí huyết giảm', 'Cấp tính đau khớp do phong nhiệt tý', 'Thủy thũng do Thận dương hư', 'Cảm mạo phong hàn thể biểu thực'],
        dap_an: 0,
        giai_thich: 'Độc hoạt ký sinh thang vừa khư phong trừ thấp, vừa bổ can thận và khí huyết cho bệnh nhân đau khớp mạn tính.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Trong cấu trúc phương tễ, vị thuốc "Thần" có vai trò gì?',
        lua_chon: ['Trực tiếp chữa nguyên nhân bệnh chính', 'Tăng cường tác dụng trị bệnh của vị Quân', 'Dẫn thuốc tới kinh bệnh', 'Giảm tác dụng phụ của vị Quân'],
        dap_an: 1,
        giai_thich: 'Vị Thần có tác dụng hỗ trợ, làm tăng hiệu quả điều trị của vị Quân hoặc chữa triệu chứng kèm theo.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Đại thừa khí thang" có tác dụng chủ yếu là:',
        lua_chon: ['Nhuận tràng thông tiện', 'Tuấn hạ nhiệt kết (tả hạ thực nhiệt tích trệ)', 'Ôn dương thông tiện', 'Tư âm thông tiện'],
        dap_an: 1,
        giai_thich: 'Đại thừa khí thang (Đại hoàng, Mang tiêu, Chỉ thực, Hậu phác) có tác dụng xổ mạnh (tuấn hạ) trị táo bón do thực nhiệt kết tụ ở Dương minh.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Đào hồng tứ vật thang" gia thêm 2 vị thuốc nào vào bài Tứ vật thang?',
        lua_chon: ['Đào nhân, Hồng hoa', 'Đan sâm, Hồng hoa', 'Đào nhân, Tam thất', 'Xuyên sơn giáp, Hồng hoa'],
        dap_an: 0,
        giai_thich: 'Bài thuốc gia Đào nhân và Hồng hoa vào Tứ vật thang để tăng cường tác dụng hoạt huyết khư ứ.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Long đởm tả can thang" dùng để điều trị chứng bệnh nào?',
        lua_chon: ['Can phong nội động', 'Can đởm thực hỏa thượng viêm / Hạ tiêu thấp nhiệt', 'Can huyết hư', 'Can tỳ bất hòa'],
        dap_an: 1,
        giai_thich: 'Long đởm tả can thang chuyên thanh tả Can đởm thực hỏa và thanh lợi thấp nhiệt ở hạ tiêu.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Nhị trần thang" là bài thuốc cơ bản điều trị chứng bệnh nào?',
        lua_chon: ['Khí hư', 'Đàm thấp nội trệ', 'Huyết ứ', 'Nhiệt độc'],
        dap_an: 1,
        giai_thich: 'Nhị trần thang (Bán hạ, Trần bì, Phục linh, Cam thảo) là phương tễ cơ bản tổ tông về táo thấp hóa đàm.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Phụ tử lý trung hoàn" có công dụng chính là gì?',
        lua_chon: ['Ôn trung khư hàn, kiện tỳ bổ khí', 'Ôn bổ Thận dương, điền tinh', 'Thanh nhiệt hoán tỳ', 'Sơ can kiện tỳ'],
        dap_an: 0,
        giai_thich: 'Phụ tử lý trung hoàn gia Phụ tử vào Lý trung hoàn nhằm tăng sức ôn trung khư hàn, trị Tỳ Vị hư hàn nặng.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Bán hạ hậu phác thang" chủ trị chứng bệnh nào sau đây?',
        lua_chon: ['Vị nhiệt nôn mửa', 'Mai hạch khí (khí uất đàm kết ở họng)', 'Khái huyết do Phế nhiệt', 'Tiêu hóa trệ tích'],
        dap_an: 1,
        giai_thich: 'Bán hạ hậu phác thang hành khí tán kết, giáng nghịch hóa đàm, trị Mai hạch khí (vướng họng khạc không ra nuốt không xuống).'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Tả quy hoàn" có công dụng chính là gì?',
        lua_chon: ['Tư âm bổ Thận, điền tinh ích tủy', 'Ôn bổ Thận dương', 'Sơ can giải uất', 'Thanh nhiệt lợi thấp'],
        dap_an: 0,
        giai_thich: 'Tả quy hoàn do Trương Cảnh Nhạc lập phương chuyên thuần tư bổ Thận âm, điền tinh ích tủy.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Hữu quy hoàn" có công dụng chính là gì?',
        lua_chon: ['Tư âm dưỡng huyết', 'Ôn bổ Thận dương, điền tinh bổ huyết', 'Thanh tả Thận hỏa', 'Kiện tỳ trừ thấp'],
        dap_an: 1,
        giai_thich: 'Hữu quy hoàn chuyên ôn bổ Thận dương, tăng cường Mệnh môn hỏa.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Hoàng liên giải độc thang" gồm các vị thuốc nào?',
        lua_chon: ['Hoàng liên, Hoàng cầm, Hoàng bá, Chi tử', 'Hoàng liên, Hoàng kỳ, Đương quy, Cam thảo', 'Hoàng liên, Bán hạ, Trần bì, Phục linh', 'Hoàng liên, Đại hoàng, Mãng tiêu, Cam thảo'],
        dap_an: 0,
        giai_thich: 'Hoàng liên giải độc thang gồm 4 vị đắng lạnh thanh nhiệt tả hỏa ở cả Tam tiêu.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Chân vũ thang" có công dụng chính là gì?',
        lua_chon: ['Ôn dương lợi thủy', 'Thanh nhiệt lợi thấp', 'Tư âm lợi thủy', 'Hành khí lợi thủy'],
        dap_an: 0,
        giai_thich: 'Chân vũ thang (Phụ tử, Bạch thuật, Phục linh, Thược dược, Sinh khương) dùng ôn Thận Tỳ dương để lợi thủy tiêu thũng.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Sài hồ sơ can tán" dùng để điều trị chứng bệnh nào?',
        lua_chon: ['Can khí uất trệ gây đau mạn sườn, đầy bụng', 'Can hỏa bốc lên gây đau đầu', 'Tỳ hư sinh đàm thấp', 'Thận hư đau lưng'],
        dap_an: 0,
        giai_thich: 'Sài hồ sơ can tán giúp sơ can lý khí, hoạt huyết chỉ thống trị đau tức mạn sườn do Can khí trệ.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Theo nguyên tắc sắc thuốc YHCT, các bài "Giải biểu" nên sắc thế nào?',
        lua_chon: ['Sắc lửa nhỏ (Văn hỏa), thời gian kéo dài', 'Sắc lửa lớn (Vũ hỏa), thời gian ngắn', 'Sắc 3 lần lấy nước cốt', 'Sắc ngâm qua đêm trước khi đun'],
        dap_an: 1,
        giai_thich: 'Thuốc giải biểu chứa tinh dầu dễ bay hơi nên dùng lửa lớn (Vũ hỏa) sắc nhanh (10-15 phút) để giữ nguyên dược tính.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Khái niệm "Bát pháp" trong YHCT bao gồm 8 phương pháp chữa bệnh nào?',
        lua_chon: [
            'Hãn, Thổ, Hạ, Hòa, Ôn, Thanh, Tiêu, Bổ',
            'Vọng, Văn, Vấn, Thiết, Ôn, Thanh, Tiêu, Bổ',
            'Quân, Thần, Tá, Sứ, Hãn, Thổ, Hạ, Hòa',
            'Phong, Hàn, Thử, Thấp, Táo, Hỏa, Âm, Dương'
        ],
        dap_an: 0,
        giai_thich: 'Bát pháp điều trị gồm: Hãn (ra mồ hôi), Thổ (gây nôn), Hạ (tẩy xổ), Hòa (hòa giải), Ôn (làm ấm), Thanh (thanh nhiệt), Tiêu (tiêu tích), Bổ (bồi bổ).'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Bán hạ bạch thuật thiên ma thang" có công dụng gì?',
        lua_chon: ['Táo thấp hóa đàm, bình can tức phong', 'Thanh nhiệt hóa đàm, an thần', 'Tư âm bình can, tiềm dương', 'Kiện tỳ trừ thấp, thông kinh'],
        dap_an: 0,
        giai_thich: 'Bài thuốc trị đau đầu, chóng mặt do phong đàm bốc lên trên.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Mạch môn đông thang" chủ trị chứng bệnh nào?',
        lua_chon: ['Phế vị âm hư, khí nghịch hư hỏa thượng viêm', 'Tỳ vị hư hàn', 'Can khí thượng nghịch', 'Thận âm hư sốt về chiều'],
        dap_an: 0,
        giai_thich: 'Mạch môn đông thang dưỡng âm thanh nhiệt, giáng nghịch chỉ ho do Phế Vị âm hư.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Bảo hòa hoàn" có tác dụng chính là gì?',
        lua_chon: ['Bổ khí kiện tỳ', 'Tiêu thực hòa vị', 'Thanh nhiệt giải độc', 'Tư âm nhuận tràng'],
        dap_an: 1,
        giai_thich: 'Bảo hòa hoàn (Sơn tra, Thần khúc, Lai phục tử...) chuyên điều trị thực tích trệ, ăn uống không tiêu.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Tiêu phong tán" dùng điều trị loại bệnh nào?',
        lua_chon: ['Cảm mạo phong hàn', 'Bệnh ngoài da (mẩn ngứa, mụn nhọt) do phong nhiệt/phong thấp', 'Trúng phong co giật', 'Đau đầu phong nhiệt'],
        dap_an: 1,
        giai_thich: 'Tiêu phong tán khư phong chấn ngứa, thanh nhiệt trừ thấp trị mề đay, chàm ngoài da.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Chỉ thấu tán" có công dụng chính là gì?',
        lua_chon: ['Tuyên Phế hóa đàm, chỉ khái (trị ho ngoại cảm)', 'Bổ Phế ích khí, chỉ khái', 'Tư âm nhuận Phế', 'Thanh Phế hóa đàm'],
        dap_an: 0,
        giai_thich: 'Chỉ thấu tán là bài thuốc ôn hòa giúp tuyên phế chỉ ho do cảm mạo biểu chứng đã giải nhưng ho chưa dứt.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Ngọc bình phong tán" gồm các vị thuốc chính nào?',
        lua_chon: ['Hoàng kỳ, Phòng phong, Bạch truật', 'Nhân sâm, Hoàng kỳ, Đương quy', 'Phòng phong, Tế tân, Bạch chỉ', 'Hoàng kỳ, Cam thảo, Nhân sâm'],
        dap_an: 0,
        giai_thich: 'Ngọc bình phong tán gồm Hoàng kỳ, Bạch truật, Phòng phong, đóng vai trò như bức bình phong ngọc bảo vệ cơ thể.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Công dụng chính của bài "Ngọc bình phong tán" là gì?',
        lua_chon: ['Bổ khí cố biểu, chỉ hãn (chữa tự hãn do khí hư)', 'Giải biểu tán hàn', 'Tư âm hãm hãn', 'Sơ phong thanh nhiệt'],
        dap_an: 0,
        giai_thich: 'Bài thuốc giúp ích khí cố biểu, củng cố vệ khí để trị chứng vã mồ hôi trộm/tự hãn do phế khí hư.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Dưỡng âm thanh phế thang" thường dùng cho bệnh nào?',
        lua_chon: ['Sốt rét', 'Bạch hầu / Viêm họng cấp thể Phế âm hư táo nhiệt', 'Ho đờm trắng lạnh', 'Cảm mạo phong hàn'],
        dap_an: 1,
        giai_thich: 'Dưỡng âm thanh phế thang chuyên trị ho khan, họng đau sưng, bạch hầu do Phế âm hư nhiệt.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Vị thuốc nào làm "Quân" trong bài thuốc "Bạch hổ thang"?',
        lua_chon: ['Tri mẫu', 'Thạch cao', 'Cam thảo', 'Gạo nếp (Cảnh mễ)'],
        dap_an: 1,
        giai_thich: 'Thạch cao là vị thuốc khoáng vật cay đắng rất lạnh, giữ vai trò Quân dược giáng hỏa thanh nhiệt ở Khí phận.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Tế sinh Thận khí hoàn" gia thêm 2 vị thuốc nào vào bài Bát vị?',
        lua_chon: ['Ngưu tất, Xa tiền tử', 'Đương quy, Xuyên khung', 'Mạch môn, Ngũ vị tử', 'Nhân sâm, Hoàng kỳ'],
        dap_an: 0,
        giai_thich: 'Bài thuốc gia thêm Ngưu tất và Xa tiền tử để tăng cường lợi thủy tiêu thũng.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Thanh cốt tán" dùng cho chứng bệnh nào?',
        lua_chon: ['Âm hư nội nhiệt, cốt chưng trào nhiệt (sốt trong xương)', 'Thực nhiệt sốt cao', 'Ngoại cảm sốt rét', 'Thận dương hư lạnh xương khớp'],
        dap_an: 0,
        giai_thich: 'Thanh cốt tán thanh hư nhiệt, trị chứng sốt âm ỉ từ trong xương (cốt chưng) do âm hư.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Mộc hương binh lang hoàn" thuộc nhóm phương tễ nào?',
        lua_chon: ['Thuốc Bổ', 'Thuốc Hành khí tiêu tích', 'Thuốc Giải biểu', 'Thuốc Dưỡng tâm an thần'],
        dap_an: 1,
        giai_thich: 'Phương tễ này dùng để hành khí thông trệ, tiêu tích đạo trệ trị mót rặn, bụng đau trướng.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Khi sắc các vị thuốc có tinh dầu (như Bạc hà, Kinh giới), nên cho vào khi nào?',
        lua_chon: ['Cho vào ngay từ đầu sắc cùng các vị khác', 'Cho vào sau, trước khi kết thúc sắc khoảng 5-10 phút', 'Sắc riêng rồi trộn vào', 'Nướng cháy trước khi sắc'],
        dap_an: 1,
        giai_thich: 'Cho vào sau (Hậu hạ) giúp tránh phân hủy và bay hơi mất các thành phần tinh dầu có tác dụng chữa bệnh.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Thanh vị tán" có tác dụng chính là gì?',
        lua_chon: ['Thanh vị nhiệt, mát huyết (chữa đau răng, sưng lợi do Vị hỏa)', 'Ôn vị khư hàn', 'Kiện tỳ hòa vị', 'Tiêu thực đạo trệ'],
        dap_an: 0,
        giai_thich: 'Thanh vị tán (Hoàng liên, Đan bì, Thăng ma...) thanh tả thực hỏa ở Vị kinh gây sưng đau lở nướu răng.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Ô mai hoàn" chủ trị chứng bệnh nào?',
        lua_chon: ['Đau bụng do giun (hồi quyết) / Tạng hàn giun quấy', 'Tiêu chảy do tỳ hư', 'Đau dạ dày do hỏa uất', 'Táo bón lâu ngày'],
        dap_an: 0,
        giai_thich: 'Ô mai hoàn ôn trung an vị, trừ giun chỉ thống trị chứng giun chui mật/đau bụng giun.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Trong cấu trúc bài thuốc, vị thuốc "Tá" KHÔNG có chức năng nào sau đây?',
        lua_chon: [
            'Hỗ trợ vị Quân, Thần tăng hiệu quả trị bệnh',
            'Chữa các triệu chứng phụ kèm theo',
            'Giảm bớt độc tính hoặc tính quá chênh lệch của vị Quân',
            'Trực tiếp dẫn thuốc đến đúng kinh bệnh (đây là vai trò của vị Sứ)'
        ],
        dap_an: 3,
        giai_thich: 'Dẫn thuốc đến đúng kinh bệnh là vai trò "Dẫn kinh" thuộc về vị Sứ.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Thập toàn đại bổ thang" được gia thêm 2 vị thuốc nào từ bài Bát trân thang?',
        lua_chon: ['Hoàng kỳ, Nhục quế', 'Phụ tử, Quế chi', 'Nhân sâm, Hoàng kỳ', 'Mạch môn, Ngũ vị tử'],
        dap_an: 0,
        giai_thich: 'Thập toàn đại bổ = Bát trân thang gia thêm Hoàng kỳ (bổ khí) và Nhục quế (ôn dương).'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Ngân kiều tán" thuộc nhóm phương tễ nào?',
        lua_chon: ['Tân ôn giải biểu', 'Tân lương giải biểu', 'Thanh nhiệt giải độc', 'Tả hạ phương'],
        dap_an: 1,
        giai_thich: 'Ngân kiều tán là bài thuốc mát cay giải biểu (Tân lương giải biểu) trị cảm mạo phong nhiệt giai đoạn đầu.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Tứ thần hoàn" nổi tiếng với tác dụng điều trị chứng bệnh nào?',
        lua_chon: ['Tiêu chảy lúc sáng sớm (Ngũ canh tả)', 'Táo bón lâu ngày do âm hư', 'Đau bụng kinh do huyết ứ', 'Trúng phong co quắp'],
        dap_an: 0,
        giai_thich: 'Tứ thần hoàn ôn bổ Thận Tỳ dương, cố sáp chỉ tả trị chứng Ngũ canh tả (tiêu chảy lúc 3-5h sáng).'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Vị thuốc nào đóng vai trò làm "Quân" trong bài thuốc "Bình vị tán"?',
        lua_chon: ['Bạch thuật', 'Thương truật', 'Hậu phác', 'Trần bì'],
        dap_an: 1,
        giai_thich: 'Thương truật có tính đắng đắng cay đắng cay nóng táo thấp cực mạnh, làm Quân dược trong Bình vị tán.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Tam tử dưỡng thân thang" gồm 3 hạt (tử) của các vị thuốc nào?',
        lua_chon: ['Tô tử, La bạc tử, Bạch giới tử', 'Kỷ tử, Sa uyển tử, Ngũ vị tử', 'Cúc hoa, Quyết minh tử, Bối mẫu', 'Liên tử, Sa nhân, Ý dĩ'],
        dap_an: 0,
        giai_thich: 'Tam tử dưỡng thân thang gồm hạt tía tô (Tô tử), hạt củ cải (La bạc tử) và hạt cải trắng (Bạch giới tử) giúp giáng khí hóa đàm.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Huyết phủ trục ứ thang" do danh y nào sáng chế?',
        lua_chon: ['Trương Trọng Cảnh', 'Lý Đông Viên', 'Vương Thanh Nhậm', 'Hoa Đà'],
        dap_an: 2,
        giai_thich: 'Bài thuốc trị huyết ứ vùng ngực nổi tiếng do danh y Vương Thanh Nhậm sáng chế trong sách Y Lâm Cải Thác.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Tiểu kiến trung thang" có vị thuốc đặc trưng tạo vị ngọt ôn trung, hòa hoãn chỉ thống là:',
        lua_chon: ['Mạch nha (Di đường)', 'Cam thảo', 'Mật ong', 'Táo đỏ'],
        dap_an: 0,
        giai_thich: 'Mạch nha bổ trung ích khí, hòa hoãn chỉ thống làm Quân dược trong bài Tiểu kiến trung thang.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Tứ nghịch thang" có tác dụng chính là gì?',
        lua_chon: ['Hồi dương cứu nghịch', 'Thanh nhiệt giải độc', 'Sơ can giải uất', 'Tuyên Phế chỉ khái'],
        dap_an: 0,
        giai_thich: 'Tứ nghịch thang (Phụ tử, Can khương, Cam thảo) chuyên cấp cứu các trường hợp tâm thận dương hư cấp nguy (chân hàn giả nhiệt, thoát dương).'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Thanh hao biệt giáp thang" chủ trị chứng bệnh nào?',
        lua_chon: ['Đêm sốt sáng mát, nhiệt phục ở âm phân', 'Thực nhiệt sốt cao ở khí phận', 'Cảm mạo phong hàn', 'Thấp nhiệt ở đại tràng'],
        dap_an: 0,
        giai_thich: 'Bài thuốc tư âm thanh nhiệt, đưa hỏa từ âm phân ra ngoài, trị chứng đêm sốt sáng lui.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Sâm linh bạch thuật tán" có công dụng chính là:',
        lua_chon: ['Ích khí kiện tỳ, thẩm thấp chỉ tả', 'Tư âm bổ thận, điền tinh', 'Ôn trung tán hàn, chỉ thống', 'Thanh nhiệt trừ thấp, hóa đàm'],
        dap_an: 0,
        giai_thich: 'Sâm linh bạch thuật tán bổ tỳ ích khí, lợi thấp dừng tiêu chảy do tỳ hư.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Thiên ma câu đằng ẩm" chủ trị chứng bệnh nào?',
        lua_chon: ['Can dương thượng kháng (đau đầu, chóng mặt, hoa mắt)', 'Tỳ hư sinh đàm thấp', 'Thận dương hư gây lạnh lưng', 'Khí trệ mạn sườn'],
        dap_an: 0,
        giai_thich: 'Thiên ma câu đằng ẩm bình can tức phong, thanh nhiệt an thần trị tăng huyết áp/đau đầu do Can dương vượng.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Ôn đởm thang" có tác dụng chính là gì?',
        lua_chon: ['Lý khí hóa đàm, thanh đởm hòa vị', 'Ôn bổ Thận dương', 'Sơ can giải uất', 'Giải biểu tán hàn'],
        dap_an: 0,
        giai_thich: 'Ôn đởm thang thanh đởm hòa vị, đàm nhiệt nội nhiễu gây mất ngủ, hồi hộp, nôn mửa.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Thất tiếu tán" gồm 2 vị thuốc chính nào để hoạt huyết khư ứ, chỉ thống?',
        lua_chon: ['Ngũ linh chi, Bồ hoàng', 'Đào nhân, Hồng hoa', 'Đan sâm, Tam thất', 'Nhũ hương, Một dược'],
        dap_an: 0,
        giai_thich: 'Thất tiếu tán phối hợp Ngũ linh chi và Bồ hoàng trị đau bụng kinh, đau tức ngực do huyết ứ.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Trấn can túc phong thang" dùng để điều trị chứng bệnh nào?',
        lua_chon: ['Trúng phong do Can dương thượng kháng, khí huyết thượng nghịch', 'Cảm mạo phong hàn', 'Đau khớp do phong thấp', 'Đau bụng do giun'],
        dap_an: 0,
        giai_thich: 'Trấn can túc phong thang trấn can tiềm dương, trị chứng nguy cơ đột quỵ do hỏa bốc.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Tam nhân thang" gồm 3 vị thuốc mang tên "nhân" nào?',
        lua_chon: ['Hạnh nhân, Bạch khấu nhân, Ý dĩ nhân', 'Đào nhân, Mộc thông, Sa nhân', 'Táo nhân, Mạch môn, Bối mẫu', 'Bá tử nhân, Đào nhân, Thần khúc'],
        dap_an: 0,
        giai_thich: 'Tam nhân thang thanh nhiệt lợi thấp, tuyên thông khí cơ phân biệt tuyên thượng, hòa trung, lợi hạ.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Định suyễn thang" chủ trị chứng bệnh nào?',
        lua_chon: ['Hen suyễn do phong hàn ngoại thúc, đàm nhiệt nội uất', 'Ho do âm hư phế táo', 'Tỳ hư đàm vắt', 'Tâm hỏa bốc lên'],
        dap_an: 0,
        giai_thich: 'Bài thuốc vừa giải biểu tán hàn bên ngoài vừa thanh nhiệt hóa đàm bên trong trị hen suyễn.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Việt cúc hoàn" chủ trị "Lục uất". Lục uất bao gồm 6 loại uất nào?',
        lua_chon: ['Khí, Huyết, Đàm, Hỏa, Thấp, Thực', 'Phong, Hàn, Thử, Thấp, Táo, Hỏa', 'Tâm, Gan, Tỳ, Phế, Thận, Vị', 'Khí, Huyết, Âm, Dương, Tinh, Tân'],
        dap_an: 0,
        giai_thich: 'Việt cúc hoàn do Chu Đan Khê lập phương trị 6 chứng uất: Khí uất, Huyết uất, Đàm uất, Hỏa uất, Thấp uất và Thực uất.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Bát chính tán" dùng để điều trị chứng bệnh nào?',
        lua_chon: ['Thấp nhiệt hạ tiêu (đái buốt, đái rắt, tiểu đục, tiểu ra máu)', 'Tỳ hư thủy thũng', 'Thận dương hư di niệu', 'Khí hư tự hãn'],
        dap_an: 0,
        giai_thich: 'Bát chính tán chuyên thanh nhiệt lợi thấp thông lâm, trị viêm đường tiết niệu, sỏi niệu.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Kim khóa cố tinh hoàn" có công dụng chính là gì?',
        lua_chon: ['Cố tinh sáp niệu (trị di tinh, hoạt tinh do Thận hư)', 'Bổ khí thăng dương', 'Thanh nhiệt giải độc', 'Sơ can giải uất'],
        dap_an: 0,
        giai_thich: 'Kim khóa cố tinh hoàn sáp tinh chỉ tả, trị nam giới di tinh mộng tinh do Thận hư không cố nhiếp.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Tả bạch tán" có tác dụng chính là gì?',
        lua_chon: ['Thanh tả Phế nhiệt, bình suyễn chỉ khái', 'Thanh tả Tỳ hỏa', 'Thanh tả Can nhiệt', 'Thanh tả Vị nhiệt'],
        dap_an: 0,
        giai_thich: 'Tả bạch tán (Tang bạch bì, Địa cốt bì, Cam thảo, Cảnh mễ) thanh tả ẩn nhiệt ở Phế.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Vị thuốc nào cần được "Sắc trước" (Tiên sắc) khi đun bài thuốc YHCT?',
        lua_chon: ['Khoáng vật, vỏ cứng (Thạch cao, Mẫu lệ, Phụ tử chế)', 'Các vị chứa tinh dầu (Bạc hà, Kinh giới)', 'Các vị đắt tiền (Nhân sâm, Lộc nhung)', 'Các vị dạng bột dính (Xa tiền tử, Hoài sơn)'],
        dap_an: 0,
        giai_thich: 'Các vị thuốc cứng rắn/khoáng vật hoặc có độc tính nhẹ cần sắc trước 15-30 phút để chiết xuất hoạt chất hoặc giảm độc.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Tiểu thừa khí thang" khác "Đại thừa khí thang" ở điểm nào?',
        lua_chon: ['Bỏ vị Mang tiêu', 'Bỏ vị Đại hoàng', 'Bỏ vị Hậu phác', 'Bỏ vị Chỉ thực'],
        dap_an: 0,
        giai_thich: 'Tiểu thừa khí thang bỏ vị Mang tiêu nên lực xổ nhẹ hơn, chủ yếu hành khí tiêu trướng.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Tang cúc âm" có tác dụng chính là gì?',
        lua_chon: ['Sơ phong thanh nhiệt, tuyên Phế chỉ khái', 'Tân ôn giải biểu, phát hãn khư hàn', 'Tư âm nhuận Phế', 'Thanh nhiệt giải độc'],
        dap_an: 0,
        giai_thich: 'Tang cúc âm dùng trị ho cảm mạo phong nhiệt nhẹ ở Phế.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Cửu vị khương hoạt thang" chủ trị chứng bệnh nào?',
        lua_chon: ['Ngoại cảm phong hàn thấp kèm theo trong có lý nhiệt', 'Ngoại cảm phong nhiệt nặng', 'Tỳ vị hư hàn tiêu chảy', 'Can phong nội động'],
        dap_an: 0,
        giai_thich: 'Cửu vị khương hoạt thang giải biểu phát hãn, khư phong phát thấp kiêm thanh lý nhiệt.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Hoàn đới thang" có tác dụng điều trị chứng bệnh nào?',
        lua_chon: ['Bạch đới đục trắng do Tỳ hư thấp thịnh', 'Rong kinh do huyết nhiệt', 'Tiểu đường thể âm hư', 'Đau đầu do Can hỏa'],
        dap_an: 0,
        giai_thich: 'Hoàn đới thang kiện tỳ táo thấp, trị phụ nữ khí hư đới hạ ra nhiều màu trắng trong.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Sâm phụ thang" gồm 2 vị thuốc chính nào?',
        lua_chon: ['Nhân sâm, Phụ tử chế', 'Nhân sâm, Hoàng kỳ', 'Đương quy, Phụ tử', 'Nhân sâm, Mạch môn'],
        dap_an: 0,
        giai_thich: 'Sâm phụ thang ích khí hồi dương, cấp cứu suy tim kiệt sức thể thoát dương.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Tô tử giáng khí thang" dùng điều trị chứng bệnh nào?',
        lua_chon: ['Thượng thực hạ hư (ho hen, khí nghịch, đờm nhiều kèm đau lưng mỏi gối)', 'Tỳ vị hư hàn tiêu chảy', 'Phế âm hư ho khô', 'Nhiệt kết đại tràng'],
        dap_an: 0,
        giai_thich: 'Tô tử giáng khí thang giáng khí hóa đàm, trị ho hen đờm trệ trên kiêm thận hư dưới.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Hòe hoa tán" có công dụng chính là gì?',
        lua_chon: ['Thanh nhiệt chỉ huyết, sáp trĩ (trị trĩ, đại tiện ra máu)', 'Ôn kinh chỉ huyết', 'Hoạt huyết hóa ứ', 'Bổ huyết an thai'],
        dap_an: 0,
        giai_thich: 'Hòe hoa tán thanh trường chỉ huyết, chuyên trị trĩ xuất huyết, đi ngoài ra máu tươi.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Cát căn hoàng liên hoàng cầm thang" chủ trị chứng bệnh nào?',
        lua_chon: ['Biểu chứng chưa giải, lý nhiệt bức xuống gây tiêu chảy, sốt', 'Tỳ vị hư hàn tiêu chảy', 'Thận âm hư sốt về chiều', 'Cảm mạo phong hàn biểu thực'],
        dap_an: 0,
        giai_thich: 'Bài thuốc giải biểu thanh nhiệt, trị tiêu chảy cấp kèm sốt do thấp nhiệt.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Phòng kỷ hoàng kỳ thang" có tác dụng chính là gì?',
        lua_chon: ['Ích khí kiện tỳ, khư phong lợi thủy (trị thủy thũng, sợ gió do khí hư)', 'Tư âm lợi thủy', 'Thanh nhiệt lợi thấp', 'Hồi dương cứu nghịch'],
        dap_an: 0,
        giai_thich: 'Phòng kỷ hoàng kỳ thang ích khí cố biểu, lợi thủy tiêu thũng.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Vị thuốc nào làm "Quân" trong bài thuốc "Chân vũ thang"?',
        lua_chon: ['Phụ tử chế', 'Bạch thuật', 'Phục linh', 'Thược dược'],
        dap_an: 0,
        giai_thich: 'Phụ tử chế cay nóng ôn Thận dương, ôn Tỳ thổ làm Quân dược chính.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Địa hoàng ẩm tử" dùng để điều trị chứng bệnh gì?',
        lua_chon: ['Trúng phong do Thận âm Thận dương hư, đàm quyết khàn tiếng, liệt chân', 'Cảm mạo phong hàn', 'Tiêu chảy cấp do thấp nhiệt', 'Nổi mề đay do phong nhiệt'],
        dap_an: 0,
        giai_thich: 'Địa hoàng ẩm tử tư âm ôn dương, khư đàm khai khiếu trị tai biến mạch máu não đờm rãi tắc nghẽn.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Lương phụ hoàn" gồm 2 vị thuốc nào?',
        lua_chon: ['Cao lương khương, Hương phụ', 'Phụ tử, Can khương', 'Mộc hương, Hương phụ', 'Thương thuật, Phụ tử'],
        dap_an: 0,
        giai_thich: 'Lương phụ hoàn phối hợp Cao lương khương (ôn vị tán hàn) và Hương phụ (sơ can lý khí) trị đau dạ dày do lạnh.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Thanh doanh thang" chủ trị trường hợp tà nhiệt truyền vào đâu?',
        lua_chon: ['Khí phận', 'Doanh phận', 'Huyết phận', 'Vệ phận'],
        dap_an: 1,
        giai_thich: 'Thanh doanh thang thanh doanh nhược âm, chữa bệnh ôn nhiệt tà nhập Doanh phận gây sốt đêm, mê đà, nổi ban.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Đại sài hồ thang" là sự kết hợp tác dụng của 2 nhóm phương tễ nào?',
        lua_chon: ['Hòa giải phương và Tả hạ phương', 'Giải biểu phương và Bổ phương', 'Thanh nhiệt phương và Khai khiếu phương', 'Ôn lý phương và Cố sáp phương'],
        dap_an: 0,
        giai_thich: 'Đại sài hồ thang vừa hòa giải Thiếu dương vừa thông tả thực nhiệt ở Dương minh.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Khương hoạt thắng thấp thang" có công dụng chính là gì?',
        lua_chon: ['Khư phong thắng thấp (trị đau đầu, đau lưng mình mẩy do phong thấp)', 'Tư âm bổ thận', 'Thanh nhiệt giải độc', 'Bổ khí thăng dương'],
        dap_an: 0,
        giai_thich: 'Bài thuốc khư phong thắng thấp, chỉ thống trị đau nhức xương khớp và cơ bắp toàn thân.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Thái sơn bàn thạch tán" dùng để làm gì?',
        lua_chon: ['Bổ khí huyết, an thai (dùng cho phụ nữ thai yếu, hay sảy thai)', 'Thanh nhiệt giải độc', 'Trừ phong thấp đau khớp', 'Trị tiêu chảy do Tỳ hư'],
        dap_an: 0,
        giai_thich: 'Thái sơn bàn thạch tán ích khí dưỡng huyết, kiện tỳ an thai trị dọa sảy thai mạn tính.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Chân nhân dưỡng tạng thang" thuộc nhóm phương tễ nào?',
        lua_chon: ['Thuốc Ôn lý', 'Thuốc Cố sáp (sáp tràng chỉ tả)', 'Thuốc Thanh nhiệt', 'Thuốc Giải biểu'],
        dap_an: 1,
        giai_thich: 'Bài thuốc ôn bổ tỳ thận, sáp tràng chỉ tả trị tiêu chảy kéo dài, kiết lỵ mạn tính.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Thanh táo cứu phế thang" chủ trị chứng bệnh nào?',
        lua_chon: ['Ôn táo thương Phế, khí âm lưỡng hư (ho khô, không đờm, sốt)', 'Phế hàn ho đờm trắng', 'Tỳ hư đàm thấp', 'Thận hư hen suyễn'],
        dap_an: 0,
        giai_thich: 'Thanh táo cứu phế thang thanh táo nhuận phế, ích khí dưỡng âm.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Tả hoàng tán" dùng điều trị chứng bệnh nào?',
        lua_chon: ['Tỳ vị thực nhiệt (miệng hôi, lở miệng, răng sưng đau)', 'Tỳ vị hư hàn', 'Phế nhiệt ho suyễn', 'Can hỏa bốc lên'],
        dap_an: 0,
        giai_thich: 'Tả hoàng tán (Tả tỳ tán) thanh tả thực hỏa ẩn trệ ở Tỳ Vị.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Đại tần giao thang" chủ trị trường hợp trúng phong ở mức độ nào?',
        lua_chon: ['Trúng phong kinh lạc (miệng mắt méo lệch, nói ngọng)', 'Trúng phong tạng phủ thể bế', 'Trúng phong tạng phủ thể thoát', 'Can phong nội động do âm hư'],
        dap_an: 0,
        giai_thich: 'Đại tần giao thang khư phong thanh nhiệt, dưỡng huyết thông lạc trị liệt mặt, trúng phong kinh lạc nhẹ.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Cố xung thang" dùng để điều trị chứng bệnh nào?',
        lua_chon: ['Bổ khí kiện tỳ, cố xung chỉ huyết (trị rong kinh, rong huyết do khí hư)', 'Cố tinh di niệu', 'Thanh nhiệt lương huyết', 'Sơ can giải uất'],
        dap_an: 0,
        giai_thich: 'Cố xung thang ích khí kiện tỳ, cố xung chỉ huyết trị xuất huyết tử cung do khí hư không cố nhiếp.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Vị thuốc "Mộc thông, Xa tiền tử, Biển súc, Cù mạch" là thành phần chính của bài thuốc nào?',
        lua_chon: ['Bát chính tán', 'Ngũ linh tán', 'Chân vũ thang', 'Đạo xích tán'],
        dap_an: 0,
        giai_thich: 'Đây là các vị thuốc lợi thủy thông lâm chính cấu thành nên Bát chính tán.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Đạo xích tán" dùng để thanh nhiệt ở kinh Tâm và cơ quan nào?',
        lua_chon: ['Tiểu tràng', 'Đại tràng', 'Đởm', 'Vị'],
        dap_an: 0,
        giai_thich: 'Đạo xích tán (Mộc thông, Sinh địa, Cam thảo ngọn, Trúc nhự) thanh tâm lợi thủy, đưa tâm hỏa xuống Tiểu tràng theo đường tiểu ra ngoài.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "An thần định chí hoàn" thuộc nhóm phương tễ nào?',
        lua_chon: ['Thuốc An thần', 'Thuốc Bổ', 'Thuốc Khai khiếu', 'Thuốc Trừ đàm'],
        dap_an: 0,
        giai_thich: 'An thần định chí hoàn ích khí trấn kinh, an thần định chí trị Tâm Đởm khí hư hay giật mình, hoảng sợ.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Toan táo nhân thang" chủ trị chứng bệnh nào?',
        lua_chon: ['Mất ngủ do Can huyết hư, hư nhiệt nội nhiễu', 'Mất ngủ do Tâm Tỳ lưỡng hư', 'Mất ngủ do Đờm nhiệt nội nhiễu', 'Mất ngủ do Thận dương hư'],
        dap_an: 0,
        giai_thich: 'Toan táo nhân thang dưỡng can an thần, thanh nhiệt trừ phiền trị mất ngủ do âm huyết suy hư.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc nào nổi tiếng trị Tâm Tỳ lưỡng hư gây mất ngủ, hay quên, hồi hộp?',
        lua_chon: ['Quy tỳ thang', 'Toan táo nhân thang', 'Hoàng liên an thần thang', 'Bình đông thang'],
        dap_an: 0,
        giai_thich: 'Quy tỳ thang là bài thuốc kinh điển nhất trị chứng suy nhược thần kinh thể Tâm Tỳ hư.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Vị thuốc nào cần được "Hậu hạ" (cho vào sau khi sắc gần xong) để giữ tác dụng tẩy hạ mạnh?',
        lua_chon: ['Đại hoàng', 'Thục địa', 'Bạch thuật', 'Phụ tử'],
        dap_an: 0,
        giai_thich: 'Đại hoàng nếu sắc lâu chất Anthraquinone bị phân hủy bớt sẽ giảm hiệu lực xổ tống nhiệt tích.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Bạch đầu ông thang" là bài thuốc chuyên trị chứng bệnh gì?',
        lua_chon: ['Lỵ nhiệt (thấp nhiệt lỵ, đại tiện ra mủ máu, mót rượt)', 'Tiêu chảy do Tỳ hư', 'Táo bón do nhiệt kết', 'Đau bụng do giun'],
        dap_an: 0,
        giai_thich: 'Bạch đầu ông thang thanh nhiệt giải độc, lương huyết chỉ lỵ trị lỵ trực khuẩn thể nhiệt lỵ.'
    },
    {
        category: 'phuongte',
        cau_hoi: 'Bài thuốc "Ôn kinh thang" chủ trị chứng bệnh nào?',
        lua_chon: ['Xung nhâm hư hàn, huyết ứ gây kinh nguyệt không đều, khó thụ thai', 'Can khí uất trệ gây rối loạn kinh nguyệt', 'Huyết nhiệt gây kinh nguyệt đến sớm', 'Khí hư gây sa tử cung'],
        dap_an: 0,
        giai_thich: 'Ôn kinh thang ôn kinh tán hàn, dưỡng huyết khư ứ trị phụ nữ lạnh tử cung, vô sinh hiếm muộn.'
    },
];
const questionsDataPart3 = [
    // ==================== CHẨN ĐOÁN YHCT ====================
    {
        category: 'chandoan',
        cau_hoi: 'Phương pháp "Tứ chẩn" trong YHCT gồm những kỹ thuật nào?',
        lua_chon: ['Vọng, Văn, Vấn, Thiết', 'Xem, Hỏi, Sờ, Nắn', 'Nhìn, Nghe, Bắt mạch, Đo', 'Vọng, Biện, Luận, Trị'],
        dap_an: 0,
        giai_thich: 'Tứ chẩn là 4 phương pháp thăm khám YHCT gồm: Vọng (quan sát), Văn (lắng nghe, ngửi), Vấn (hỏi bệnh), Thiết (bắt mạch và xúc chẩn).'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Bắt mạch và ấn chẩn vùng bụng thuộc phương pháp nào trong Tứ chẩn?',
        lua_chon: ['Vọng chẩn', 'Văn chẩn', 'Vấn chẩn', 'Thiết chẩn'],
        dap_an: 3,
        giai_thich: 'Thiết chẩn bao gồm Mạch chẩn (bắt mạch ở cổ tay) và Xúc chẩn (sờ nắn, ấn chẩn các vùng bụng, da cơ, huyệt vị).'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Quan sát sắc mặt, thần thái và chất lưỡi thuộc phương pháp nào?',
        lua_chon: ['Vọng chẩn', 'Văn chẩn', 'Vấn chẩn', 'Thiết chẩn'],
        dap_an: 0,
        giai_thich: 'Vọng chẩn là phương pháp thầy thuốc dùng mắt để quan sát thần, sắc, hình thể, thái độ và chất/rêu lưỡi của bệnh nhân.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Mạch "Phù" (đi nông, ấn nhẹ đã thấy) thường báo hiệu bệnh ở đâu?',
        lua_chon: ['Bệnh ở Biểu (bên ngoài)', 'Bệnh ở Lý (bên trong)', 'Bệnh ở tạng Thận', 'Bệnh lâu ngày'],
        dap_an: 0,
        giai_thich: 'Mạch Phù đi ở bề nông, biểu thị tà khí đang ở phần biểu (da lông, kinh lạc).'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Lưỡi có chất lưỡi đỏ, rêu lưỡi vàng dầy phản ánh tình trạng nào?',
        lua_chon: ['Hàn chứng', 'Nhiệt chứng (Lý thực nhiệt)', 'Khí hư', 'Huyết hư'],
        dap_an: 1,
        giai_thich: 'Lưỡi đỏ chủ về Nhiệt, rêu lưỡi vàng dầy chủ về Thực nhiệt ở Lý (tạng phủ).'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Nghe tiếng nói, hơi thở, tiếng ho của bệnh nhân thuộc phương pháp nào?',
        lua_chon: ['Vọng chẩn', 'Văn chẩn', 'Vấn chẩn', 'Thiết chẩn'],
        dap_an: 1,
        giai_thich: 'Văn chẩn là phương pháp dùng thính giác lắng nghe âm thanh (tiếng nói, thở, ho, ợ) và khứu giác ngửi mùi của bệnh nhân.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Mạch "Trầm" (ấn nặng mới thấy mạch đập) thường biểu hiện bệnh ở đâu?',
        lua_chon: ['Biểu chứng', 'Lý chứng', 'Nhiệt chứng', 'Phong chứng'],
        dap_an: 1,
        giai_thich: 'Mạch Trầm nằm sâu dưới cơ xương, ấn nặng mới thấy đập rõ, biểu thị bệnh đã vào sâu bên trong (Lý chứng).'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Sắc mặt xanh xao, nhợt nhạt thường gợi ý chứng bệnh gì?',
        lua_chon: ['Nhiệt chứng', 'Hư chứng, Hàn chứng, Huyết hư', 'Thực nhiệt', 'Tỳ nhiệt'],
        dap_an: 1,
        giai_thich: 'Sắc mặt xanh (chủ hàn, chủ đau, gân trệ) và nhợt nhạt (chủ huyết hư, khí hư, hư hàn).'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Rêu lưỡi trắng mỏng thường gặp ở loại bệnh nào?',
        lua_chon: ['Ngoại cảm phong hàn (Biểu hàn)', 'Nội thương nhiệt chứng', 'Đàm nhiệt nội kết', 'Thực tích'],
        dap_an: 0,
        giai_thich: 'Rêu lưỡi trắng mỏng là biểu hiện lưỡi bình thường hoặc bệnh ở giai đoạn đầu ngoại cảm phong hàn (Biểu hàn).'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Lưỡi bệu, có dấu ấn răng ở rìa lưỡi là đặc điểm của chứng:',
        lua_chon: ['Tỳ hư, thủy thấp trệ', 'Tâm hỏa thịnh', 'Can phong nội động', 'Phế âm hư'],
        dap_an: 0,
        giai_thich: 'Tỳ hư không vận hóa được thủy thấp làm chất lưỡi phù bệu, chèn vào răng tạo nên hằn răng.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Mạch "Sác" (nhịp mạch đập nhanh, trên 90 lần/phút) chủ yếu biểu hiện chứng bệnh nào?',
        lua_chon: ['Hàn chứng', 'Nhiệt chứng', 'Hư chứng', 'Thấp chứng'],
        dap_an: 1,
        giai_thich: 'Mạch Sác chảy nhanh do nhiệt thúc đẩy huyết lưu thông dồn dập, đại diện cho Nhiệt chứng.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Mạch "Trì" (nhịp mạch đập chậm, dưới 60 lần/phút) chủ yếu biểu hiện chứng bệnh nào?',
        lua_chon: ['Nhiệt chứng', 'Hàn chứng', 'Thực chứng', 'Phong chứng'],
        dap_an: 1,
        giai_thich: 'Mạch Trì đập chậm do hàn khí làm ngưng trệ vận hành của huyết dịch, đại diện cho Hàn chứng.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Hệ thống "Bát cương" trong chẩn đoán YHCT gồm những cặp thuộc tính nào?',
        lua_chon: [
            'Âm - Dương, Biểu - Lý, Hàn - Nhiệt, Hư - Thực',
            'Vọng - Văn - Vấn - Thiết, Hàn - Nhiệt',
            'Tâm - Can - Tỳ - Phế - Thận',
            'Phong - Hàn - Thử - Thấp - Táo - Hỏa'
        ],
        dap_an: 0,
        giai_thich: 'Bát cương bao gồm 4 cặp quy cương đối lập dùng để đánh giá vị trí, tính chất, thế lực và bản chất bệnh.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Mạch "Huyền" (căng thẳng cứng như dây đàn) thường gặp trong bệnh lý của tạng nào?',
        lua_chon: ['Tâm', 'Can', 'Phế', 'Thận'],
        dap_an: 1,
        giai_thich: 'Mạch Huyền chủ về bệnh lý tạng Can Đởm, chứng đau hoặc chứng đàm trệ.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Vị trí bắt mạch Thốn khẩu ở tay TRÁI lần lượt tương ứng với các tạng nào (Thốn - Quan - Xích)?',
        lua_chon: ['Tâm - Can - Thận', 'Phế - Tỳ - Thận', 'Can - Tâm - Phế', 'Tỳ - Can - Thận'],
        dap_an: 0,
        giai_thich: 'Tay trái (phần Âm/Huyết): Thốn ứng với Tâm, Quan ứng với Can, Xích ứng với Thận.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Vị trí bắt mạch Thốn khẩu ở tay PHẢI lần lượt tương ứng với các tạng nào (Thốn - Quan - Xích)?',
        lua_chon: ['Tâm - Can - Thận', 'Phế - Tỳ - Thận', 'Tỳ - Phế - Can', 'Thận - Tỳ - Phế'],
        dap_an: 1,
        giai_thich: 'Tay phải (phần Dương/Khí): Thốn ứng với Phế, Quan ứng với Tỳ, Xích ứng với Thận (Mệnh môn).'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Biểu hiện chất lưỡi đỏ khô, ít rêu hoặc không rêu phản ánh tình trạng nào?',
        lua_chon: ['Khí hư', 'Âm hư hỏa thịnh / Tân dịch tổn thương', 'Dương hư hàn thịnh', 'Thực tích đàm thấp'],
        dap_an: 1,
        giai_thich: 'Chất lưỡi đỏ chủ nhiệt, khô ít rêu biểu thị phần âm và tân dịch bị hư tổn thiêu đốt.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Triệu chứng "Triều nhiệt" (sốt từng đợt về chiều/đêm, lòng bàn tay chân nóng) là đặc trưng của:',
        lua_chon: ['Khí hư', 'Âm hư', 'Dương hư', 'Huyết ứ'],
        dap_an: 1,
        giai_thich: 'Âm hư sinh nội nhiệt, về chiều âm khí suy nên hư nhiệt bốc lên gây sốt triều nhiệt.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Mạch "Tế" (nhỏ lăn tăn như sợi chỉ, ấn rõ) chủ yếu phản ánh tình trạng bệnh lý nào?',
        lua_chon: ['Thực nhiệt', 'Khí huyết hư / Âm hư', 'Đàm tích', 'Phong nhiệt biểu chứng'],
        dap_an: 1,
        giai_thich: 'Mạch Tế nhỏ yếu do khí huyết không đủ đi lấp đầy lòng mạch.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Mạch "Hoạt" (đi tròn trơn trùn như hạt châu lăn) thường gặp ở trường hợp nào?',
        lua_chon: ['Đàm thấp, thực tích, hoặc phụ nữ có thai', 'Âm hư hỏa thịnh', 'Mất máu cấp', 'Tỳ Thận dương hư'],
        dap_an: 0,
        giai_thich: 'Mạch Hoạt lưu thông trơn tru chủ về đàm thấp tích tụ, thực trệ hoặc trạng thái sinh lý có thai.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Chất lưỡi sắc tím hoặc xuất hiện các điểm ban tím (điểm ứ huyết) biểu thị bệnh lý:',
        lua_chon: ['Khí trệ', 'Huyết ứ', 'Tân dịch hư', 'Phong đàm'],
        dap_an: 1,
        giai_thich: 'Huyết trệ không lưu thông làm lưỡi chuyển sắc tím ứ hoặc tạo điểm ứ huyết.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Mạch "Sáp" (đi rít, không trơn trùn, như dao cạo vỏ trúc) phản ánh chứng bệnh nào?',
        lua_chon: ['Huyết ứ, tinh huyết khuyết đản', 'Thực nhiệt', 'Ngoại cảm phong nhiệt', 'Thủy thũng'],
        dap_an: 0,
        giai_thich: 'Mạch Sáp chảy rít chậm do huyết dịch thiếu hụt hoặc huyết trệ cản trở dòng chảy.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Hiện tượng "Tự hãn" (vã mồ hôi khi vận động nhẹ hoặc nghỉ ngơi) biểu hiện chứng bệnh nào?',
        lua_chon: ['Âm hư', 'Khí hư (Phế/Tỳ khí hư)', 'Huyết hư', 'Thực nhiệt'],
        dap_an: 1,
        giai_thich: 'Khí hư làm giảm chức năng cố nhiếp, không giữ được mồ hôi dẫn đến vã mồ hôi ban ngày (tự hãn).'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Hiện tượng "Đạo hãn" (đổ mồ hôi trộm khi ngủ, tỉnh dậy thì hết) thường gặp trong chứng nào?',
        lua_chon: ['Khí hư', 'Âm hư', 'Dương hư', 'Biểu hàn'],
        dap_an: 1,
        giai_thich: 'Khi ngủ âm khí đi vào trong, âm hư không chế được hỏa làm ép tân dịch vã ra ngoài thành mồ hôi trộm (đạo hãn).'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Sắc mặt đỏ rực toàn bộ khuôn mặt thường báo hiệu chứng bệnh nào?',
        lua_chon: ['Thực nhiệt', 'Hư nhiệt (Âm hư)', 'Hàn chứng', 'Thấp chứng'],
        dap_an: 0,
        giai_thich: 'Sắc mặt đỏ rực toàn bộ là biểu hiện hỏa nhiệt thịnh ở Khí phận (Thực nhiệt).'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Sắc mặt hai gò má đỏ bừng vào buổi chiều là biểu hiện của chứng bệnh nào?',
        lua_chon: ['Thực nhiệt', 'Hư nhiệt (Âm hư)', 'Ngoại cảm biểu nhiệt', 'Tỳ vị hư hàn'],
        dap_an: 1,
        giai_thich: 'Đỏ hai bên gò má vượng về chiều chẩm (triều nhiệt) là hình ảnh điển hình của Âm hư hư nhiệt.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Khi hỏi bệnh (Vấn chẩn), bệnh nhân thích uống nước lạnh là biểu hiện của:',
        lua_chon: ['Hàn chứng', 'Nhiệt chứng', 'Hư chứng', 'Thấp chứng'],
        dap_an: 1,
        giai_thich: 'Nhiệt chứng làm thiêu đốt tân dịch gây khát, thích uống nước mát lạnh để xoa dịu.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Bệnh nhân sợ lạnh, thích ấm, chân tay lạnh thuộc về nhóm chứng bệnh nào?',
        lua_chon: ['Nhiệt chứng', 'Hàn chứng', 'Táo chứng', 'Thực chứng'],
        dap_an: 1,
        giai_thich: 'Hàn chứng làm suy giảm ôn húc, biểu hiện sợ lạnh, thích chườm ấm, chi lạnh.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Trong Vọng chẩn lưỡi, đầu lưỡi (chóp lưỡi) phản ánh tình trạng tạng phủ nào?',
        lua_chon: ['Tâm và Phế', 'Can và Đởm', 'Tỳ và Vị', 'Thận và Bàng quang'],
        dap_an: 0,
        giai_thich: 'Phân vùng lưỡi: Đầu lưỡi ứng với Thượng tiêu (Tâm, Phế).'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Trong Vọng chẩn lưỡi, rìa lưỡi hai bên phản ánh tình trạng của tạng phủ nào?',
        lua_chon: ['Tâm và Phế', 'Can và Đởm', 'Tỳ và Vị', 'Thận'],
        dap_an: 1,
        giai_thich: 'Hai bên rìa lưỡi phản ánh tình trạng Can Đởm.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Trong Vọng chẩn lưỡi, phần trung tâm (giữa mặt lưỡi) phản ánh tạng phủ nào?',
        lua_chon: ['Tâm, Phế', 'Can, Đởm', 'Tỳ, Vị', 'Thận'],
        dap_an: 2,
        giai_thich: 'Giữa mặt lưỡi ứng với Trung tiêu (Tỳ, Vị).'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Trong Vọng chẩn lưỡi, phần gốc lưỡi (phía trong cùng) phản ánh tạng phủ nào?',
        lua_chon: ['Tâm', 'Can', 'Tỳ', 'Thận, Bàng quang'],
        dap_an: 3,
        giai_thich: 'Gốc lưỡi ứng với Hạ tiêu (Thận, Bàng quang, Đại tràng).'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Mạch "Nhu" (đi nông, mềm, nhỏ lăn tăn) chủ yếu biểu hiện chứng bệnh gì?',
        lua_chon: ['Thấp chứng hoặc Khí huyết hư', 'Thực nhiệt', 'Ngoại cảm phong hàn', 'Can hỏa thượng viêm'],
        dap_an: 0,
        giai_thich: 'Mạch Nhu nổi nông nhưng nhỏ mềm nhũn, chủ về Thấp tà ứ trệ hoặc Khí huyết suy hư.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Trong Văn chẩn, tiếng nói to sảng sảng, hơi thở mạnh dồn dập thuộc về chứng nào?',
        lua_chon: ['Hư chứng', 'Thực chứng, Nhiệt chứng', 'Âm chứng', 'Hàn chứng'],
        dap_an: 1,
        giai_thich: 'Âm thanh to, vang, cuồn cuộn thuộc về Dương, Thực chứng và Nhiệt chứng.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Trong Văn chẩn, tiếng nói nhỏ thút thít, thều thào, ngắn hơi thuộc về chứng nào?',
        lua_chon: ['Thực chứng', 'Hư chứng, Khí hư', 'Thực nhiệt', 'Huyết ứ'],
        dap_an: 1,
        giai_thich: 'Âm thanh nhỏ yếu, đứt quãng, nói không ra hơi thuộc về Âm, Hư chứng (đặc biệt Khí hư).'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Bệnh nhân đau bụng "thiện án" (thích xoa bóp, ấn vào thấy bớt đau) là đặc điểm của:',
        lua_chon: ['Thực chứng', 'Hư chứng', 'Thực nhiệt', 'Huyết ứ'],
        dap_an: 1,
        giai_thich: 'Đau thích xoa bóp ấn nắn (thiện án) phản ánh sự thiếu hụt dinh dưỡng/ôn húc (Hư chứng).'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Bệnh nhân đau bụng "cự án" (sợ chạm vào, càng ấn càng đau dữ dội) là đặc điểm của:',
        lua_chon: ['Hư chứng', 'Thực chứng (tích trệ, huyết ứ, thực nhiệt)', 'Khí hư', 'Âm hư'],
        dap_an: 1,
        giai_thich: 'Đau sợ nắn ấn (cự án) là do sự tích tụ thực tà, huyết ứ hoặc tắc nghẽn dồn dập (Thực chứng).'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Trong Bát cương, hai cương lĩnh nào làm tổng cương để phân định Âm Dương đại thể?',
        lua_chon: ['Biểu - Lý', 'Hàn - Nhiệt', 'Hư - Thực', 'Âm - Dương'],
        dap_an: 3,
        giai_thich: 'Âm và Dương là 2 quy cương tổng quát nhất chỉ đạo 3 cặp còn lại (Biểu/Hàn/Hư thuộc Âm, Lý/Nhiệt/Thực thuộc Dương).'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Đi ngoài phân sống, tiêu chảy lúc sáng sớm (Ngũ canh tả) là triệu chứng điển hình của:',
        lua_chon: ['Tỳ khí hư', 'Thận dương hư (Mệnh môn hỏa suy)', 'Can tỳ bất hòa', 'Đại trường thấp nhiệt'],
        dap_an: 1,
        giai_thich: 'Lúc 3-5h sáng dương khí chưa phát, Thận dương hư không ôn sưởi được Tỳ thổ gây tiêu chảy.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Mạch "Khấu" (ấn vào thấy rỗng ở giữa như cọng hành) thường xuất hiện trong trường hợp nào?',
        lua_chon: ['Mất máu cấp (đại xuất huyết) hoặc mất tân dịch nặng', 'Ngoại cảm phong hàn', 'Đàm nhiệt nội kết', 'Tỳ hư thấp trệ'],
        dap_an: 0,
        giai_thich: 'Mạch Khấu rỗng ruột xuất hiện do huyết dịch hoặc tân dịch bị thất thoát dồn dập.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Chất lưỡi nhợt nhạt, rêu lưỡi trắng trơn trượt phản ánh chứng bệnh nào?',
        lua_chon: ['Nhiệt chứng, Thực chứng', 'Hàn chứng, Hư chứng (Tỳ Thận dương hư)', 'Can hỏa thịnh', 'Phế nhiệt'],
        dap_an: 1,
        giai_thich: 'Lưỡi nhợt chủ hư/hàn, rêu trơn trượt chủ thủy thấp đọng do dương hư không hóa khí.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Ngửi mùi chất thải (phân, nước tiểu, chất nôn) có mùi hôi thối nồng nặc thuộc chứng nào?',
        lua_chon: ['Hàn chứng', 'Nhiệt chứng / Thực nhiệt', 'Hư chứng', 'Khí hư'],
        dap_an: 1,
        giai_thich: 'Mùi hôi nồng thối là biểu hiện chất thải bị chưng nấu bởi Nhiệt tà (Thực nhiệt).'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Ngửi mùi chất thải nhạt, ít mùi hoặc hơi tanh nhẹ thuộc chứng nào?',
        lua_chon: ['Nhiệt chứng', 'Hàn chứng / Hư hàn', 'Thực nhiệt', 'Táo nhiệt'],
        dap_an: 1,
        giai_thich: 'Mùi chất thải trong, nhạt, tanh lạnh biểu thị cơ thể hư hàn.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Bệnh nhân miệng đắng, họng khô, mắt hoa, ngực sườn đầy tức, lúc sốt lúc rét là bệnh ở kinh nào?',
        lua_chon: ['Thái dương kinh', 'Thiếu dương kinh', 'Dương minh kinh', 'Thái âm kinh'],
        dap_an: 1,
        giai_thich: 'Đây là các triệu chứng điển hình của chứng bệnh ở kinh Thiếu dương (bán biểu bán lý).'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Sắc da và mắt vàng tươi sáng như màu quả quýt chín (Dương hoàng) thuộc chứng bệnh nào?',
        lua_chon: ['Thấp nhiệt nội kết (Can Đởm thấp nhiệt)', 'Hàn thấp trệ (Tỳ dương hư)', 'Khí huyết hư', 'Huyết ứ'],
        dap_an: 0,
        giai_thich: 'Hoàng đản sắc vàng tươi (Dương hoàng) do thấp nhiệt huân chưng làm dịch mật tràn ra da.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Sắc da và mắt vàng tối, u ám như màu khói xám (Âm hoàng) thuộc chứng bệnh nào?',
        lua_chon: ['Thấp nhiệt nội kết', 'Hàn thấp trệ / Tỳ Thận dương hư', 'Thực nhiệt', 'Phong nhiệt'],
        dap_an: 1,
        giai_thich: 'Hoàng đản sắc vàng tối xám (Âm hoàng) do hàn thấp tích trệ, tỳ dương suy hư.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Mạch "Đại" (nhịp đập to, nổi rõ rộng rãi dưới ngón tay) biểu hiện tình trạng gì?',
        lua_chon: ['Bệnh tiến triển, Thực chứng hoặc Nhiệt thịnh', 'Khí huyết hư suy', 'Âm hàn trệ', 'Thủy thũng'],
        dap_an: 0,
        giai_thich: 'Mạch đập to rộng biểu thị tà khí đang dồi dào, thực nhiệt thịnh.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Bệnh nhân sốt cao, không sợ lạnh mà sợ nóng, khát nước đòi uống lạnh thuộc hội chứng nào?',
        lua_chon: ['Biểu hàn chứng', 'Lý nhiệt chứng', 'Biểu nhiệt chứng', 'Lý hàn chứng'],
        dap_an: 1,
        giai_thich: 'Các triệu chứng sốt cao, sợ nóng, khát uống lạnh phản ánh hỏa nhiệt đã vào sâu tạng phủ (Lý nhiệt).'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Triệu chứng sốt nhẹ, sợ gió, tự hãn (vã mồ hôi), mạch Phù hoãn là đặc điểm của:',
        lua_chon: ['Phong hàn biểu thực chứng', 'Phong hàn biểu hư chứng', 'Lý thực nhiệt chứng', 'Âm hư hư nhiệt'],
        dap_an: 1,
        giai_thich: 'Phong hàn biểu hư chứng có biểu hiện đặc trưng là sợ gió và tự ra mồ hôi do vệ khí hư yếu.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Cơn đau đầu khu trú rõ ở vùng đỉnh đầu (vùng huyệt Bách hội) liên quan trực tiếp đến kinh lạc nào?',
        lua_chon: ['Kinh Túc thái dương Bàng quang', 'Kinh Túc quyết âm Can', 'Kinh Túc thiếu dương Đởm', 'Kinh Túc dương minh Vị'],
        dap_an: 1,
        giai_thich: 'Mạch của kinh Túc quyết âm Can đi lên đỉnh đầu hội tụ tại Bách hội.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Cơn đau đầu khu trú ở vùng trán và vùng lông mày liên quan đến đường kinh nào?',
        lua_chon: ['Kinh Thái dương', 'Kinh Dương minh', 'Kinh Thiếu dương', 'Kinh Quyết âm'],
        dap_an: 1,
        giai_thich: 'Kinh Dương minh (Vị/Đại trường) phân bố ở trán và vùng lông mày.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Cơn đau đầu khu trú ở vùng hai bên thái dương và sau tai liên quan đến đường kinh nào?',
        lua_chon: ['Kinh Thái dương', 'Kinh Dương minh', 'Kinh Thiếu dương', 'Kinh Quyết âm'],
        dap_an: 2,
        giai_thich: 'Kinh Thiếu dương (Đởm) chạy qua hai bên đầu thái dương.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Cơn đau đầu khu trú ở vùng gáy và chẩm liên quan đến đường kinh nào?',
        lua_chon: ['Kinh Thái dương', 'Kinh Dương minh', 'Kinh Thiếu dương', 'Kinh Quyết âm'],
        dap_an: 0,
        giai_thich: 'Kinh Thái dương (Bàng quang) đi từ trán qua đỉnh đầu xuống gáy chẩm.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Mạch "Hồng" (đi rộng lớn, đến cuồn cuộn như sóng trào, đi rút lui nhanh) báo hiệu tình trạng nào?',
        lua_chon: ['Thực nhiệt thịnh ở khí phận', 'Âm hư nội nhiệt', 'Biểu hàn chứng', 'Thấp trệ'],
        dap_an: 0,
        giai_thich: 'Mạch Hồng cuồn cuộn đến to rút nhanh biểu thị hỏa nhiệt bùng phát dồn dập ở Khí phận.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Mạch "Nhược" (chìm sâu, nhỏ mềm, ấn nặng mới thấy) biểu hiện chứng bệnh gì?',
        lua_chon: ['Khí huyết đều hư / Dương hư', 'Thực nhiệt', 'Can hỏa thịnh', 'Phong hàn biểu thực'],
        dap_an: 0,
        giai_thich: 'Mạch Nhược vừa chìm vừa nhỏ mềm, biểu thị khí huyết suy hư nặng.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Mạch "Phục" (ấn sát tận xương mới thấy đập) thường gặp trong trường hợp nào?',
        lua_chon: ['Tà khí bế tắc nặng, bế chứng, đau dữ dội', 'Ngoại cảm phong nhiệt', 'Âm hư hỏa thịnh', 'Huyết ứ nhẹ'],
        dap_an: 0,
        giai_thich: 'Mạch Phục nằm ẩn sát xương do tà khí bế tắc nặng hoặc đau đớn dữ dội làm khí huyết không phát ra ngoài.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Triệu chứng "Sốt cao, mặt đỏ, khát nước, nhưng tay chân lạnh ngắt, mạch Trầm Phục" thuộc chứng gì?',
        lua_chon: ['Chân nhiệt giả hàn', 'Chân hàn giả nhiệt', 'Biểu hàn lý nhiệt', 'Biểu nhiệt lý hàn'],
        dap_an: 0,
        giai_thich: 'Nội nhiệt cực thịnh ép âm khí ra ngoài hoặc ngăn cản dương khí ra tay chân gây Chân nhiệt giả hàn.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Triệu chứng "Mặt đỏ hồng như thoa phấn, họng đau không sưng, thích đắp chăn, mạch Trì Nhược" thuộc chứng gì?',
        lua_chon: ['Chân hàn giả nhiệt', 'Chân nhiệt giả hàn', 'Biểu thực lý hư', 'Thực nhiệt nội kết'],
        dap_an: 0,
        giai_thich: 'Âm hàn bên trong quá thịnh đẩy hư dương nổi lên trên mặt gây Chân hàn giả nhiệt.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Trong Ngũ luân chẩn đoán qua mắt, "Khí luân" tương ứng với lòng trắng mắt phản ánh tạng nào?',
        lua_chon: ['Tâm', 'Phế', 'Can', 'Thận'],
        dap_an: 1,
        giai_thich: 'Ngũ luân: Lòng trắng (Khí luân) ứng với tạng Phế.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Trong Ngũ luân chẩn đoán qua mắt, "Phong luân" tương ứng với lòng đen mắt phản ánh tạng nào?',
        lua_chon: ['Phế', 'Can', 'Tỳ', 'Thận'],
        dap_an: 1,
        giai_thich: 'Lòng đen (Phong luân) ứng với tạng Can.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Trong Ngũ luân chẩn đoán qua mắt, "Thủy luân" tương ứng với đồng tử (con ngươi) phản ánh tạng nào?',
        lua_chon: ['Tâm', 'Can', 'Thận', 'Tỳ'],
        dap_an: 2,
        giai_thich: 'Con ngươi (Thủy luân) ứng với tạng Thận.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Trong Ngũ luân chẩn đoán qua mắt, "Nhục luân" tương ứng với mí mắt phản ánh tạng nào?',
        lua_chon: ['Tỳ', 'Phế', 'Can', 'Tâm'],
        dap_an: 0,
        giai_thich: 'Mí mắt (Nhục luân) ứng với tạng Tỳ.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Trong Ngũ luân chẩn đoán qua mắt, "Huyết luân" tương ứng với khóe mắt phản ánh tạng nào?',
        lua_chon: ['Thận', 'Can', 'Tâm', 'Phế'],
        dap_an: 2,
        giai_thich: 'Khóe mắt (Huyết luân) ứng với tạng Tâm.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Mạch "Xúc" (mạch đi nhanh Sác mà thỉnh thoảng ngừng nghỉ không theo quy luật) phản ánh chứng gì?',
        lua_chon: ['Dương nhiệt thịnh, khí huyết ứ trệ, đàm tích', 'Dương khí suy vi', 'Âm hư hỏa thịnh nhẹ', 'Phong hàn nhập biểu'],
        dap_an: 0,
        giai_thich: 'Mạch Sác kiêm có đoạn nghỉ không đều do nhiệt tà quá thịnh làm nghẽn mạch.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Mạch "Kết" (mạch đi chậm Trì mà thỉnh thoảng ngừng nghỉ không theo quy luật) phản ánh chứng gì?',
        lua_chon: ['Âm thịnh khí kết, hàn đàm, huyết ứ', 'Dương nhiệt thịnh', 'Khí huyết dồi dào', 'Biểu nhiệt'],
        dap_an: 0,
        giai_thich: 'Mạch Trì kiêm có đoạn nghỉ không đều do âm hàn ngưng trệ gây cản trở mạch.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Mạch "Đại" (mạch ngừng nghỉ có chu kỳ quy luật rõ rệt) thường báo hiệu tình trạng nào?',
        lua_chon: ['Tạng khí suy vi nghiêm trọng, đau dữ dội hoặc chấn thương', 'Ngoại cảm phong nhiệt nhẹ', 'Thực tích', 'Tỳ vị hòa hợp'],
        dap_an: 0,
        giai_thich: 'Mạch đập ngừng nghỉ có quy luật chu kỳ cố định phản ánh tạng khí bị suy kiệt nặng.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Triệu chứng "Đau tức ngực sườn, hay thở dài, tính tình dễ giận dỗi" thuộc chứng bệnh nào?',
        lua_chon: ['Can khí uất trệ', 'Phế khí hư', 'Tâm hỏa thịnh', 'Tỳ khí hư'],
        dap_an: 0,
        giai_thich: 'Can chủ sơ tiết, khí uất trệ cản trở kinh Can gây đau tức sườn và hay thở dài để giải uất.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Bệnh nhân ho tiếng to, khạc đờm vàng đặc, sốt, ngực đau, rêu lưỡi vàng dầy, mạch Sác thuộc chứng:',
        lua_chon: ['Đàm nhiệt uất Phế', 'Phế khí hư', 'Phế âm hư', 'Phong hàn phạm Phế'],
        dap_an: 0,
        giai_thich: 'Đờm vàng đặc, ho to, sốt, rêu vàng sác là biểu hiện tiêu biểu của Đàm nhiệt uất Phế.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Bệnh nhân ho khô không đờm, sốt về chiều, gò má đỏ, lòng bàn tay chân nóng thuộc chứng:',
        lua_chon: ['Phế âm hư', 'Phế khí hư', 'Phong nhiệt phạm Phế', 'Tỳ vị hư hàn'],
        dap_an: 0,
        giai_thich: 'Ho khô kiêm các triệu chứng hư nhiệt bốc lên do âm dịch ở Phế bị hao tổn.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Triệu chứng "Hồi hộp, mất ngủ, hay quên, sắc mặt nhợt nhạt, móng tay nhạt" thuộc chứng:',
        lua_chon: ['Tâm huyết hư', 'Tâm hỏa thịnh', 'Can khí uất', 'Thận dương hư'],
        dap_an: 0,
        giai_thich: 'Tâm huyết thiếu không dưỡng được tâm thần gây hồi hộp mất ngủ, sắc mặt nhợt.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Triệu chứng "Xuất huyết dưới da, chảy máu cam kèm ăn kém, mệt mỏi, phân sống" biểu hiện chứng:',
        lua_chon: ['Tỳ bất thống huyết', 'Huyết nhiệt vọng hành', 'Can hỏa bốc lên', 'Thận âm hư hỏa thịnh'],
        dap_an: 0,
        giai_thich: 'Tỳ khí hư suy không quản lý được huyết đi trong lòng mạch gây chảy máu tràn ra ngoài.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Bệnh nhân hay bị ho, hắt hơi khi gặp lạnh, dễ bị cảm mạo, tự hãn, sợ gió thuộc hội chứng:',
        lua_chon: ['Phế khí hư (Phế vệ bất cố)', 'Tâm khí hư', 'Can khí uất', 'Thận dương hư'],
        dap_an: 0,
        giai_thich: 'Phế khí hư suy làm giảm vệ khí bảo vệ bề mặt da, khiến cơ thể dễ bị ngoại tà xâm nhập.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Sắc mặt đen u ám, khô sạm thường gặp ở bệnh nhân có tổn thương thuộc tạng nào?',
        lua_chon: ['Thận (Thận hư / Huyết ứ lâu ngày)', 'Can', 'Tỳ', 'Phế'],
        dap_an: 0,
        giai_thich: 'Sắc đen thuộc hành Thủy, biểu hiện Thận hư suy nặng hoặc huyết ứ lâu ngày.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Sắc mặt trắng bệch, nhợt nhạt bóng nẩy thường gặp trong chứng bệnh nào?',
        lua_chon: ['Dương hư hoặc Mất máu', 'Thực nhiệt', 'Can hỏa', 'Thấp nhiệt'],
        dap_an: 0,
        giai_thich: 'Sắc mặt trắng bệch do thiếu hụt huyết nuôi dưỡng hoặc dương khí suy yếu không sưởi ấm được.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Rêu lưỡi vàng dầy, khô, lòng lưỡi có gai đỏ là biểu hiện của:',
        lua_chon: ['Lý thực nhiệt / Vị nhiệt tích trệ', 'Biểu hàn', 'Âm hư nhẹ', 'Tỳ Thận hư hàn'],
        dap_an: 0,
        giai_thich: 'Rêu vàng dầy khô gai đỏ là triệu chứng của thực nhiệt thiêu đốt ở tạng phủ.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Rêu lưỡi xám đen khô dầy phản ánh tình trạng bệnh lý nào?',
        lua_chon: ['Nhiệt cực (nhiệt thịnh thiêu đốt tân dịch nặng)', 'Biểu phong hàn nhẹ', 'Tỳ khí hư', 'Khí trệ nhẹ'],
        dap_an: 0,
        giai_thich: 'Rêu xám đen mà khô dầy chứng tỏ nhiệt tà đạt đến mức cực điểm làm thiêu cạn tân dịch.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Rêu lưỡi xám đen trơn ướt phản ánh tình trạng bệnh lý nào?',
        lua_chon: ['Hàn cực / Thấp hàn tích trệ nặng', 'Nhiệt cực thiêu đốt', 'Can hỏa bốc cao', 'Ngoại cảm phong nhiệt'],
        dap_an: 0,
        giai_thich: 'Rêu xám đen nhưng trơn ướt chứng tỏ âm hàn đạt mức cực điểm, đàm thấp ngưng trệ nặng.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Chất lưỡi bong rêu hoàn toàn thành từng mảng gợn nham nhở (lưỡi bản đồ) biểu thị:',
        lua_chon: ['Vị âm hư / Khí âm lưỡng hư', 'Tỳ dương hư', 'Can thực hỏa', 'Huyết ứ nặng'],
        dap_an: 0,
        giai_thich: 'Lưỡi bản đồ thể hiện vị khí và vị âm tổn thương không nuôi dưỡng được rêu lưỡi.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Lưỡi gầy nhỏ, sắc đỏ khô không rêu biểu thị hội chứng bệnh lý nào?',
        lua_chon: ['Âm hư hỏa thịnh nặng', 'Thấp nhiệt trệ', 'Khí huyết hư', 'Huyết ứ'],
        dap_an: 0,
        giai_thich: 'Lưỡi nhỏ gầy khô đỏ rêu trụi lụi do âm dịch kiệt quệ, nội nhiệt thiêu đốt dồn dập.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Triệu chứng "Đau nhói cố định một chỗ, đêm đau nhiều hơn ngày, lưỡi tím có điểm ứ huyết" thuộc:',
        lua_chon: ['Huyết ứ chứng', 'Khí hư chứng', 'Khí trệ chứng', 'Thấp trệ chứng'],
        dap_an: 0,
        giai_thich: 'Đau như dao đâm cố định nghẽn mạch đêm nặng hơn là đặc tính lâm sàng của Huyết ứ.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Triệu chứng "Đau trướng, vị trí đau di chuyển không cố định, tăng khi giận dỗi" thuộc:',
        lua_chon: ['Khí trệ chứng', 'Huyết ứ chứng', 'Thực tích chứng', 'Hàn trệ chứng'],
        dap_an: 0,
        giai_thich: 'Đau trướng di chuyển không cố định là đặc tính của Khí trệ.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Triệu chứng "Chóng mặt, ù tai như ve kêu, lưng mỏi gối yếu, sốt về chiều, ngủ hay mơ" do:',
        lua_chon: ['Thận âm hư', 'Tỳ khí hư', 'Phế khí hư', 'Tâm hỏa thịnh'],
        dap_an: 0,
        giai_thich: 'Thận âm hư không nuôi dưỡng được tai xương khớp, sinh hư nhiệt bốc lên.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Triệu chứng "Lưng gối lạnh đau, sợ lạnh, di tinh, liệt dương, đi tiểu đêm nhiều lần" do:',
        lua_chon: ['Thận dương hư', 'Tâm huyết hư', 'Can khí uất', 'Tỳ khí hư'],
        dap_an: 0,
        giai_thich: 'Thận dương suy yếu không sưởi ấm mệnh môn hỏa gây lạnh, suy giảm sinh lý.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Triệu chứng "Đau đầu dữ dội, mắt đỏ, đắng miệng, dễ giận dữ, mạch Huyền Sác" thuộc:',
        lua_chon: ['Can hỏa thượng viêm', 'Can huyết hư', 'Can tỳ bất hòa', 'Thận âm hư'],
        dap_an: 0,
        giai_thich: 'Can hỏa bốc dồn lên đầu mặt gây đau đầu, đắng miệng, tính hay cáu gắt.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Triệu chứng "Chóng mặt, run tay chân, co giật, méo miệng lệch mắt, mạch Huyền" biểu hiện:',
        lua_chon: ['Can phong nội động', 'Can huyết hư', 'Tỳ hư thấp trệ', 'Phế hư suyễn'],
        dap_an: 0,
        giai_thich: 'Các biểu hiện động (run, co giật, méo miệng) thuộc Can phong phát sinh từ bên trong.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Trong Bát cương, chứng bệnh ở giai đoạn đầu, tà khí còn ở nông (da lông, phế vệ) gọi là:',
        lua_chon: ['Biểu chứng', 'Lý chứng', 'Hàn chứng', 'Hư chứng'],
        dap_an: 0,
        giai_thich: 'Biểu chứng là vị trí bệnh còn nông ngoài bề mặt da cơ kinh lạc.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Trong Bát cương, chứng bệnh đã vào sâu bên trong tạng phủ, khí huyết, xương tủy gọi là:',
        lua_chon: ['Lý chứng', 'Biểu chứng', 'Thực chứng', 'Nhiệt chứng'],
        dap_an: 0,
        giai_thich: 'Lý chứng biểu thị tà khí đã xâm nhập vào tạng phủ khí huyết sâu bên trong.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Triệu chứng "Sốt cao, mê sảng, khát nước, tiểu đỏ ít, táo bón, lưỡi đỏ rêu vàng, mạch Sác" thuộc:',
        lua_chon: ['Lý thực nhiệt chứng', 'Biểu hư hàn chứng', 'Lý hư hàn chứng', 'Biểu nhiệt chứng'],
        dap_an: 0,
        giai_thich: 'Hội chứng tà nhiệt thịnh kết tụ dồn dập ở bên trong tạng phủ.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Triệu chứng "Bụng đầy trướng, ợ hơi hôi chua, nôn ra thức ăn chưa tiêu, sợ ăn" là do:',
        lua_chon: ['Thực tích (thức ăn tích trệ ở Vị)', 'Tỳ dương hư', 'Can khí uất', 'Thận âm hư'],
        dap_an: 0,
        giai_thich: 'Đồ ăn dồn đọng không tiêu hóa được gây thối trệ uất lại ở Vị.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Mạch "Đoản" (nhịp mạch ngắn, không lấp đầy 3 bộ Thốn Quan Xích) biểu hiện chứng bệnh gì?',
        lua_chon: ['Khí hư hoặc Khí trệ', 'Huyết nhiệt', 'Ngoại cảm biểu thực', 'Tỳ vị hòa hợp'],
        dap_an: 0,
        giai_thich: 'Mạch Đoản không kéo dài qua 3 bộ do khí bị suy hư không thúc đẩy được hoặc khí trệ cản trở.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Mạch "Trường" (nhịp mạch dài quá vị trí Thốn Xích, đi thong dong mềm mại) là biểu hiện của:',
        lua_chon: ['Chính khí dồi dào / Mạch người bình thường khỏe mạnh', 'Khí huyết đại hư', 'Tạng khí sắp tuyệt', 'Đàm thấp nặng'],
        dap_an: 0,
        giai_thich: 'Mạch Trường đi dài rộng dồi dào thong dong là biểu hiện chính khí tốt.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Tiếng ho đục nặng hắng, đờm trắng loãng dễ khạc thuộc về chứng bệnh nào?',
        lua_chon: ['Phong hàn phạm Phế', 'Phong nhiệt phạm Phế', 'Phế âm hư', 'Tâm hỏa thịnh'],
        dap_an: 0,
        giai_thich: 'Đờm trắng loãng dễ khạc kiêm ho nặng tiếng do hàn tà xâm nhập Phế.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Tiếng ho rít, đờm vàng đặc khó khạc, họng đau khô thuộc về chứng bệnh nào?',
        lua_chon: ['Phong nhiệt phạm Phế', 'Phong hàn phạm Phế', 'Phế khí hư', 'Tỳ vị hư hàn'],
        dap_an: 0,
        giai_thich: 'Đờm vàng dính rít kiêm họng sưng đau khô phản ánh nhiệt tà xâm nhập Phế.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Bệnh nhân cảm thấy vướng ở họng, khạc không ra, nuốt không xuống, không đau (Mai hạch khí) do:',
        lua_chon: ['Can khí uất kết kết hợp đàm trệ', 'Phế nhiệt ho suyễn', 'Vị hỏa bốc lên', 'Tỳ hư thủy thũng'],
        dap_an: 0,
        giai_thich: 'Can khí uất ngưng trệ kết hợp đàm ẩm đóng tụ ở họng gây hội chứng Mai hạch khí.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Bệnh nhân hay hốt hoảng, dễ giật mình, ngủ mơ thấy rơi từ trên cao xuống thuộc tạng nào bị bệnh?',
        lua_chon: ['Tâm, Đởm (Tâm Đởm khí hư)', 'Phế', 'Tỳ', 'Bàng quang'],
        dap_an: 0,
        giai_thich: 'Tâm chủ thần minh, Đởm chủ quyết đoán; Tâm Đởm khí hư làm thần trí bất an hoảng sợ.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Mạch "Táo" (mạch đi nhanh, gấp gáp, lăn tăn, 1 nhịp thở trên 6 lần đập) biểu hiện chứng gì?',
        lua_chon: ['Dương nhiệt cực thịnh / Bệnh biến nguy cấp', 'Âm hàn ngưng trệ', 'Tỳ hư', 'Khí hư'],
        dap_an: 0,
        giai_thich: 'Mạch Táo nhảy dồn dập cực nhanh do hỏa nhiệt bùng phát nguy kịch.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Vị trí chẩn mạch Thốn Khẩu nằm ở động mạch nào?',
        lua_chon: ['Động mạch Quay (Radial artery)', 'Động mạch Cảnh', 'Động mạch Cánh tay', 'Động mạch Mu chân'],
        dap_an: 0,
        giai_thich: 'Bắt mạch Thốn khẩu được thực hiện trên đường đi của động mạch quay ở cổ tay.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Trong Thiết chẩn, khi ấn chẩn vùng bụng thấy bụng mềm, ấn vào thấy dễ chịu (thiện án) gọi là:',
        lua_chon: ['Hư chứng', 'Thực chứng', 'Nhiệt chứng', 'Huyết ứ'],
        dap_an: 0,
        giai_thich: 'Thích xoa bóp ấn nắn biểu hiện tạng phủ thiếu hụt khí huyết (Hư chứng).'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Bệnh nhân ăn nhiều mau đói nhưng người vẫn gầy (Tiêu cốc thiện cơ) do chứng bệnh nào?',
        lua_chon: ['Vị nhiệt thịnh (Vị hỏa)', 'Tỳ hư', 'Thận dương hư', 'Phế khí hư'],
        dap_an: 0,
        giai_thich: 'Vị hỏa quá vượng thiêu đốt tiêu hóa dồn dập làm ăn nhiều nhưng không tích tụ nuôi cơ thể.'
    },
    {
        category: 'chandoan',
        cau_hoi: 'Bệnh nhân chán ăn, miệng nhạt, ăn vào khó tiêu, bụng trướng nhẹ sau ăn là do:',
        lua_chon: ['Tỳ vị khí hư', 'Vị hỏa bốc lên', 'Can hỏa thịnh', 'Đàm nhiệt nội kết'],
        dap_an: 0,
        giai_thich: 'Tỳ vị hư suy kém vận hóa làm chán ăn, ăn không tiêu.'
    },
];
const questionsDataPart4 = [
    // ==================== CHÂM CỨU - XOA BÓP - DƯỠNG SINH ====================
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Hợp Cốc (LI4) thuộc đường kinh nào?',
        lua_chon: ['Thủ thái âm Phế', 'Thủ dương minh Đại trường', 'Thủ thiếu âm Tâm', 'Thủ thái dương Tiểu trường'],
        dap_an: 1,
        giai_thich: 'Huyệt Hợp Cốc là Nguyên huyệt thuộc đường kinh Thủ dương minh Đại trường, nằm ở kẽ xương bàn tay 1-2.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Túc Tam Lý (ST36) có vị trí xác định như thế nào?',
        lua_chon: [
            'Dưới lõm ngoài xương bánh chè (Độc Tỵ) đo xuống 3 thốn, cách mào xương chày 1 khoát ngón tay',
            'Dưới bờ bánh chè 2 thốn',
            'Tại giữa nếp gấp khoeo chân',
            'Mặt trong cẳng chân, trên mắt cá trong 3 thốn'
        ],
        dap_an: 0,
        giai_thich: 'Túc Tam Lý thuộc kinh Vị, nằm dưới huyệt Độc Tỵ 3 thốn và cách mào chày 1 ngón tay.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Tam Âm Giao (SP6) là nơi giao hội của 3 đường kinh âm nào ở chân?',
        lua_chon: ['Tỳ, Can, Thận', 'Tâm, Can, Tỳ', 'Phế, Tỳ, Thận', 'Vị, Đởm, Bàng quang'],
        dap_an: 0,
        giai_thich: 'Tam Âm Giao nằm trên mắt cá trong 3 thốn, là nơi giao hội của 3 kinh Túc thái âm Tỳ, Túc quyết âm Can, Túc thiếu âm Thận.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Bách Hội (GV20) nằm ở vị trí nào?',
        lua_chon: [
            'Giao điểm của đường dọc chính giữa đầu và đường nối hai đỉnh vành tai',
            'Ở giữa hai lông mày',
            'Tại chỗ lõm sau gáy',
            'Ở giữa trán'
        ],
        dap_an: 0,
        giai_thich: 'Bách Hội thuộc Mạch Đốc, nằm ở điểm cao nhất của đỉnh đầu.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Nội Quan (PC6) thuộc đường kinh nào?',
        lua_chon: ['Thủ thiếu âm Tâm', 'Thủ quyết âm Tâm bao', 'Thủ thái âm Phế', 'Thủ thiếu dương Tam tiêu'],
        dap_an: 1,
        giai_thich: 'Nội Quan là Lạc huyệt của kinh Thủ quyết âm Tâm bao, nằm trên nếp gấp cổ tay 2 thốn, giữa hai gân cơ.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Thái Xung (LR3) giữ vai trò gì trên đường kinh Túc quyết âm Can?',
        lua_chon: ['Nguyên huyệt', 'Lạc huyệt', 'Khích huyệt', 'Mộ huyệt'],
        dap_an: 0,
        giai_thich: 'Thái Xung là Nguyên huyệt kiêm Du huyệt của kinh Can, nằm ở kẽ xương bàn chân 1-2.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Dũng Tuyền (KI1) thuộc đường kinh nào và nằm ở đâu?',
        lua_chon: [
            'Thủy huyệt kinh Thận, nằm ở chỗ lõm lòng bàn chân (1/3 trước)',
            'Kinh Tỳ, nằm ở ngón chân cái',
            'Kinh Can, nằm ở mu bàn chân',
            'Mạch Nhâm, nằm ở vùng bụng'
        ],
        dap_an: 0,
        giai_thich: 'Dũng Tuyền là Tỉnh huyệt thuộc kinh Thận, nằm ở điểm nối 1/3 trước và 2/3 sau của lòng bàn chân.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Quan Nguyên (CV4) nằm ở đâu?',
        lua_chon: [
            'Dưới rốn 3 thốn trên đường giữa bụng',
            'Dưới rốn 1.5 thốn',
            'Trên rốn 2 thốn',
            'Dưới rốn 4 thốn'
        ],
        dap_an: 0,
        giai_thich: 'Quan Nguyên thuộc Mạch Nhâm, nằm dưới rốn 3 thốn, là nơi tàng trữ tinh khí của cơ thể.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Khí Hải (CV6) có vị trí xác định như thế nào?',
        lua_chon: ['Dưới rốn 1.5 thốn', 'Dưới rốn 3 thốn', 'Trên rốn 1 thốn', 'Dưới rốn 2 thốn'],
        dap_an: 0,
        giai_thich: 'Khí Hải thuộc Mạch Nhâm, nằm dưới rốn 1.5 thốn, chủ về bồi bổ khí.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Phong Trì (GB20) thuộc đường kinh nào?',
        lua_chon: ['Túc thiếu dương Đởm', 'Túc thái dương Bàng quang', 'Mạch Đốc', 'Thủ thiếu dương Tam tiêu'],
        dap_an: 0,
        giai_thich: 'Phong Trì thuộc kinh Đởm, nằm ở chỗ lõm phía sau gáy, dưới xương chẩm.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Xích Trạch (LU5) thuộc đường kinh nào và ở vị trí nào?',
        lua_chon: [
            'Kinh Phế, nằm trên nếp gấp khuỷu tay ở bờ ngoài gân cơ nhị đầu',
            'Kinh Tâm, ở bờ trong khuỷu tay',
            'Kinh Đại trường, ở bờ ngoài khuỷu tay',
            'Kinh Tâm bao, ở giữa nếp khuỷu'
        ],
        dap_an: 0,
        giai_thich: 'Xích Trạch là Hợp huyệt kinh Phế, nằm trên nếp khuỷu tay phía ngoài gân cơ nhị đầu.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Thần Môn (HT7) có tác dụng nổi bật nào?',
        lua_chon: ['Bổ tâm an thần, trị mất ngủ, hồi hộp', 'Trị tiêu chảy', 'Trị ho suyễn', 'Trị đau lưng'],
        dap_an: 0,
        giai_thich: 'Thần Môn là Nguyên huyệt kinh Tâm, chuyên trị chứng mất ngủ, lo âu, cuồng loạn.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Dương Lăng Tuyền (GB34) là "Hội huyệt" của bộ phận nào?',
        lua_chon: ['Cân (gân)', 'Mạch', 'Cốt (xương)', 'Tủy'],
        dap_an: 0,
        giai_thich: 'Trong Bát hội huyệt, Dương Lăng Tuyền là Cân hội (chuyên trị bệnh về gân cơ).'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Thái Khê (KI3) nằm ở vị trí nào?',
        lua_chon: [
            'Trung điểm giữa đường nối đỉnh mắt cá trong và gân gót',
            'Đỉnh mắt cá ngoài',
            'Dưới mắt cá trong 1 thốn',
            'Sau mắt cá ngoài 0.5 thốn'
        ],
        dap_an: 0,
        giai_thich: 'Thái Khê là Nguyên huyệt kinh Thận, nằm ở chỗ lõm giữa mắt cá trong và gân gót (gân Achilles).'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Thủ thuật xoa bóp nào tác động chủ yếu lên YẾU TỐ DA?',
        lua_chon: ['Xoa, xát, miết, phân, hợp', 'Đấm, chặt, véo', 'Lăn, bóp, vần', 'Bấm, điểm, ấn'],
        dap_an: 0,
        giai_thich: 'Các thủ thuật xoa, xát, miết, phân, hợp lướt nhẹ trên da, làm ấm da và thông thoáng lỗ mồ hôi.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Thủ thuật xoa bóp nào tác động trực tiếp lên CƠ THỊT?',
        lua_chon: ['Vé, bóp, đấm, chặt, lăn, vần', 'Xoa, xát', 'Bấm, điểm', 'Vận động khớp'],
        dap_an: 0,
        giai_thich: 'Nhóm thủ thuật đấm, chặt, bóp, lăn tác động sâu vào khối cơ giúp thư giãn và giải cơ trệ.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Thủ thuật "Vé" (Véo da) có tác dụng gì tốt nhất?',
        lua_chon: ['Trừ phong hàn, điều hòa vinh vệ, kích thích tiêu hóa (cuộn da dọc sống lưng)', 'Làm tan ứ máu', 'Lợi khớp', 'Hạ sốt nhanh'],
        dap_an: 0,
        giai_thich: 'Véo da (nhất là véo cột sống Hoa Đà) giúp nâng cao vệ khí, kích thích kinh Đốc và kinh Bàng quang.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Thủ thuật "Bấm huyệt" đòi hỏi kỹ thuật thế nào?',
        lua_chon: [
            'Dùng đầu ngón tay ấn vuông góc vào huyệt, lực tăng dần từ nhẹ đến mạnh',
            'Dùng lực tác động ngắt quãng thật nhanh',
            'Miết trượt liên tục trên mặt da',
            'Xoa tròn nhẹ nhàng quanh huyệt'
        ],
        dap_an: 0,
        giai_thich: 'Bấm huyệt yêu cầu dùng đầu ngón tay tác động lực vuông góc, từ từ thấm sâu vào huyệt vị.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Trong kỹ thuật châm cứu, hiện tượng "Đắc khí" là gì?',
        lua_chon: [
            'Bệnh nhân cảm thấy căng, tức, nặng, mỏi tại vùng châm, thầy thuốc cảm thấy kim bị mút chặt',
            'Bệnh nhân thấy đau nhói cháy da',
            'Kim châm bị gãy',
            'Máu chảy ra nhiều tại vị trí châm'
        ],
        dap_an: 0,
        giai_thich: 'Đắc khí là dấu hiệu hiệu quả châm cứu, khi khí cơ đến làm kim cảm giác mút và bệnh nhân thấy căng tức nhẹ.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Để "Bổ" khi châm cứu (Châm bổ), người ta thường áp dụng nguyên tắc nào?',
        lua_chon: [
            'Châm thuận chiều đường kinh, rút kim nhanh và bít lỗ châm ngay',
            'Châm ngược chiều đường kinh, rút kim chậm',
            'Vê kim thật mạnh và liên tục',
            'Không bít lỗ châm sau khi rút kim'
        ],
        dap_an: 0,
        giai_thich: 'Thủ pháp châm Bổ: châm thuận kinh, từ từ đưa kim, rút kim nhanh và ấn bịt ngay lỗ châm để giữ khí.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Để "Tả" khi châm cứu (Châm tả), nguyên tắc nào đúng?',
        lua_chon: [
            'Châm ngược chiều đường kinh, khi rút kim làm lay rộng lỗ châm và không bít lỗ châm',
            'Châm thuận chiều đường kinh',
            'Rút kim nhanh và bít chặt lỗ châm',
            'Châm nhẹ nhàng và ngâm kim lâu'
        ],
        dap_an: 0,
        giai_thich: 'Thủ pháp châm Tả: châm ngược chiều kinh, vận kim mạnh, rút kim nhanh đồng thời day rộng lỗ châm không bít để xả tà khí.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Góc châm nghiêng (châm xiên 45 độ) thường áp dụng cho vùng nào?',
        lua_chon: ['Nơi cơ tương đối mỏng hoặc gần tạng phủ nông', 'Nơi cơ dầy như mông, đùi', 'Vùng sát xương đầu', 'Lòng bàn tay'],
        dap_an: 0,
        giai_thich: 'Châm nghiêng 45 độ dùng ở vùng thịt mỏng để tránh đâm sâu vào mạch máu hoặc tạng tạng sâu.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Góc châm luồn kim (châm sát da 15 - 20 độ) áp dụng ở vị trí nào?',
        lua_chon: ['Vùng đầu, mặt, ngực thịt rất mỏng sát xương', 'Vùng mông', 'Vùng đùi', 'Vùng thắt lưng'],
        dap_an: 0,
        giai_thich: 'Châm luồn sát da dùng ở những vùng da mỏng nằm sát xương như da đầu, vùng lông mày.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Khi châm cứu vùng ngực và lưng trên, cần chú ý điều gì nguy hiểm nhất?',
        lua_chon: ['Tránh châm quá sâu gây thủng màng phổi (tràn khí màng phổi)', 'Gây gãy kim', 'Gây chảy máu ngoài da', 'Gây co giật'],
        dap_an: 0,
        giai_thich: 'Châm vùng ngực/lưng trên quá sâu dễ đâm thủng màng phổi gây cấp cứu tràn khí màng phổi.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Xử trí sự cố "Vận kim" (say kim, bệnh nhân vã mồ hôi, hoa mắt, choáng váng) như thế nào?',
        lua_chon: [
            'Rút ngay toàn bộ kim, cho bệnh nhân nằm nghỉ nơi thoáng, uống nước ấm, bấm huyệt Nhân Trung',
            'Tiếp tục giữ nguyên kim',
            'Vê kim mạnh hơn',
            'Cho bệnh nhân đứng dậy đi lại'
        ],
        dap_an: 0,
        giai_thich: 'Khi say kim cần lập tức rút kim, nằm nghỉ đầu thấp, uống nước ấm và bấm Nhân Trung, Hợp Cốc.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Thủ pháp "Thủy châm" là kỹ thuật gì?',
        lua_chon: [
            'Tiêm dung dịch thuốc vào huyệt vị YHCT',
            'Chườm nước nóng lên huyệt',
            'Ngâm kim vào nước trước khi châm',
            'Châm kim dưới nước'
        ],
        dap_an: 0,
        giai_thich: 'Thủy châm là kết hợp Đông - Tây y: tiêm thuốc dịch bổ/chữa bệnh trực tiếp vào huyệt đạo.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Thủ pháp "Điện châm" là gì?',
        lua_chon: [
            'Dùng dòng điện sinh lý mạch xung nối vào kim châm để kích thích huyệt',
            'Dùng dòng điện cao thế kích thích da',
            'Đốt nóng kim châm bằng điện',
            'Chiếu ánh sáng điện vào huyệt'
        ],
        dap_an: 0,
        giai_thich: 'Điện châm kết hợp kim châm với dòng điện xung liên tục/ngắt quãng để tăng kích thích điều trị.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Kiên Tỉnh (GB21) nằm ở đâu?',
        lua_chon: [
            'Điểm giữa đường nối huyệt Đại Chùy đến đỉnh cao gồ vai (mỏm quạ)',
            'Giữa khớp vai',
            'Ở sau nách',
            'Dưới xương đòn'
        ],
        dap_an: 0,
        giai_thich: 'Kiên Tỉnh thuộc kinh Đởm, nằm ở điểm giữa đường nối từ gai đốt sống cổ 7 đến mỏm vai.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Trung Quản (CV12) là "Mộ huyệt" của cơ quan nào và nằm ở đâu?',
        lua_chon: ['Mộ huyệt của Vị, nằm trên rốn 4 thốn', 'Mộ huyệt của Tỳ, dưới rốn 2 thốn', 'Mộ huyệt của Phế, ở ngực', 'Mộ huyệt của Thận, sau lưng'],
        dap_an: 0,
        giai_thich: 'Trung Quản là Mộ huyệt của Vị kiêm Hội huyệt của Phủ, nằm trên rốn 4 thốn.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Đản Trung (CV17) nằm ở vị trí nào?',
        lua_chon: [
            'Điểm giữa đường nối 2 đầu núm vú (ở nam giới) trên xương ức',
            'Dưới rốn 2 thốn',
            'Ở hõm ức',
            'Giữa hai bả vai'
        ],
        dap_an: 0,
        giai_thich: 'Đản Trung thuộc Mạch Nhâm, là Hội huyệt của Khí, nằm giữa hai núm vú ở ngang khoang liên sườn 4.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Liệt Khuyết (LU7) thuộc đường kinh nào?',
        lua_chon: ['Thủ thái âm Phế', 'Thủ dương minh Đại trường', 'Thủ thiếu âm Tâm', 'Thủ quyết âm Tâm bao'],
        dap_an: 0,
        giai_thich: 'Liệt Khuyết là Lạc huyệt kinh Phế, nằm ở bờ ngoài xương quay, trên nếp gấp cổ tay 1.5 thốn.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Nhân Trung (GV26) nằm ở vị trí nào?',
        lua_chon: [
            'Tại điểm nối 1/3 trên và 2/3 dưới của rãnh nhân trung',
            'Giữa cằm',
            'Dưới khóe miệng',
            'Giữa hai lông mày'
        ],
        dap_an: 0,
        giai_thich: 'Nhân Trung thuộc Mạch Đốc, là huyệt cấp cứu hàng đầu nằm ở 1/3 trên rãnh nhân trung.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Ủy Trung (BL40) có vị trí xác định như thế nào?',
        lua_chon: ['Tại chính giữa nếp gấp khoeo chân', 'Dưới mắt cá ngoài', 'Ở giữa bắp chân', 'Tại giữa nếp mông'],
        dap_an: 0,
        giai_thich: 'Ủy Trung thuộc kinh Bàng quang, nằm ở trung tâm nếp gấp trám khoeo chân, chủ trị đau lưng.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Giáp Tích (Hoa Đà Giáp Tích) nằm ở đâu?',
        lua_chon: [
            'Nhóm huyệt nằm hai bên cột sống, cách đường giữa gai sống 0.5 thốn',
            'Cách đường giữa lưng 1.5 thốn',
            'Cách đường giữa lưng 3 thốn',
            'Nằm ngay trên gai đốt sống'
        ],
        dap_an: 0,
        giai_thich: 'Huyệt Giáp Tích gồm các điểm nằm song song hai bên cột sống, cách gai sống 0.5 thốn từ C1 đến S4.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Thận Du (BL23) nằm ở vị trí nào?',
        lua_chon: [
            'Dưới gai đốt sống thắt lưng L2 đo ngang ra 1.5 thốn',
            'Dưới gai sống L4 đo ra 1.5 thốn',
            'Dưới gai sống T12 đo ra 1.5 thốn',
            'Dưới rốn 3 thốn'
        ],
        dap_an: 0,
        giai_thich: 'Thận Du là Bối du huyệt của Thận, nằm ở bờ dưới mỏm gai L2 ngang ra 1.5 thốn.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Đại Chùy (GV14) nằm ở đâu?',
        lua_chon: [
            'Chỗ lõm dưới mỏm gai đốt sống cổ C7',
            'Dưới gai đốt sống lưng T1',
            'Giữa hai lông mày',
            'Sau dái tai'
        ],
        dap_an: 0,
        giai_thich: 'Đại Chùy thuộc Mạch Đốc, nằm ngay dưới gai đốt sống cổ C7 (đốt sống cổ nổi to nhất khi cúi đầu).'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Mệnh Môn (GV4) có vị trí ở đâu?',
        lua_chon: ['Chỗ lõm dưới mỏm gai đốt sống thắt lưng L2', 'Dưới gai sống L4', 'Dưới gai sống T12', 'Trên rốn 2 thốn'],
        dap_an: 0,
        giai_thich: 'Mệnh Môn thuộc Mạch Đốc, nằm ngay dưới mỏm gai L2 (đối diện rốn ra sau lưng).'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Túc Lâm Khấp (GB41) thuộc đường kinh nào?',
        lua_chon: ['Túc thiếu dương Đởm', 'Túc thái âm Tỳ', 'Túc quyết âm Can', 'Túc dương minh Vị'],
        dap_an: 0,
        giai_thich: 'Túc Lâm Khấp là Du huyệt kinh Đởm, nằm ở kẽ xương bàn chân 4-5.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Hoàn Khiêu (GB30) chủ trị chính chứng bệnh gì?',
        lua_chon: ['Đau thần kinh tọa, đau khớp hông háng, liệt chi dưới', 'Đau dạ dày', 'Đau đầu', 'Ho hen'],
        dap_an: 0,
        giai_thich: 'Hoàn Khiêu nằm ở khớp hông háng, là huyệt quan trọng điều trị đau dây thần kinh tọa và liệt chân.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Túc Quyết Âm Can khởi đầu từ huyệt nào?',
        lua_chon: ['Đại Đốn (LR1)', 'Thái Xung', 'Hành Gian', 'Chương Môn'],
        dap_an: 0,
        giai_thich: 'Kinh Can bắt đầu từ huyệt Đại Đốn ở góc ngoài móng ngón chân cái.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Theo phương pháp đo thốn đồng thân, 1 thốn (thốn ngón tay) tương ứng với:',
        lua_chon: [
            'Khoảng cách giữa hai đầu nếp gấp ngón tay giữa khi co ngón tay lại',
            'Chiều rộng ngón tay cái',
            'Cả A và B đều đúng',
            'Chiều dài ngón tay trỏ'
        ],
        dap_an: 2,
        giai_thich: '1 thốn ngón tay (thốn đồng thân) lấy theo độ rộng đốt ngón cái hoặc nếp co đốt giữa ngón giữa của chính bệnh nhân.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Bề rộng 4 ngón tay áp sát nhau (trỏ, giữa, áp út, út) ở khớp đốt trung tương ứng bao nhiêu thốn?',
        lua_chon: ['3 thốn (Danh xưng Danh chỉ thốn)', '2 thốn', '1.5 thốn', '4 thốn'],
        dap_an: 0,
        giai_thich: 'Độ rộng 4 ngón tay chụm lại tương đương 3 thốn.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Khoảng cách phân đoạn từ nếp nách trước đến nếp gấp khuỷu tay được tính là bao nhiêu thốn?',
        lua_chon: ['9 thốn', '12 thốn', '8 thốn', '6 thốn'],
        dap_an: 0,
        giai_thich: 'Phân đoạn khớp cánh tay: từ nếp nách đến nếp khuỷu tay bằng 9 thốn.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Khoảng cách từ nếp khuỷu tay đến nếp gấp cổ tay là bao nhiêu thốn?',
        lua_chon: ['12 thốn', '10 thốn', '9 thốn', '14 thốn'],
        dap_an: 0,
        giai_thich: 'Phân đoạn cẳng tay: từ nếp khuỷu đến nếp cổ tay bằng 12 thốn.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Khoảng cách từ hai đầu núm vú (ngực) được tính quy đổi là bao nhiêu thốn?',
        lua_chon: ['8 thốn', '6 thốn', '9 thốn', '12 thốn'],
        dap_an: 0,
        giai_thich: 'Khoảng cách giữa hai núm vú ở nam giới quy ước chuẩn là 8 thốn.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Khoảng cách từ rốn đến bờ trên xương mu là bao nhiêu thốn?',
        lua_chon: ['5 thốn', '4 thốn', '3 thốn', '6 thốn'],
        dap_an: 0,
        giai_thich: 'Phân đoạn hạ tiêu: từ rốn xuống bờ trên xương mu bằng 5 thốn.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Khoảng cách từ mũi kiếm xương ức (giao điểm sườn) đến rốn là bao nhiêu thốn?',
        lua_chon: ['8 thốn', '6 thốn', '9 thốn', '5 thốn'],
        dap_an: 0,
        giai_thich: 'Phân đoạn thượng/trung tiêu: từ đường nếp ngực ức xuống rốn bằng 8 thốn.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Khoảng cách từ đỉnh mắt cá trong đến nếp gấp khoeo chân là bao nhiêu thốn?',
        lua_chon: ['15 thốn', '13 thốn', '16 thốn', '12 thốn'],
        dap_an: 0,
        giai_thich: 'Phân đoạn cẳng chân mặt trong: từ mắt cá trong lên nếp khoeo bằng 13 thốn.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Phương pháp CỨU (Ngải cứu) KHÔNG áp dụng cho trường hợp nào?',
        lua_chon: ['Thực nhiệt, sốt cao, âm hư hỏa thịnh', 'Hàn chứng, bệnh mạn tính hư hàn', 'Trúng hàn đau bụng', 'Tỳ vị hư hàn tiêu chảy'],
        dap_an: 0,
        giai_thich: 'Ngải cứu mang tính nóng nhiệt ấm nên cấm dùng trong các trường hợp sốt cao, thực nhiệt, âm hư hỏa vượng.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Kỹ thuật "Giác hơi" (Thấu kính hơi) có tác dụng gì chủ yếu?',
        lua_chon: ['Thông kinh hoạt lạc, khư phong tán hàn, giảm đau giải ứ', 'Bổ âm điền tinh', 'Hạ đường huyết', 'Thanh tả thực nhiệt sâu'],
        dap_an: 0,
        giai_thich: 'Giác hơi dùng áp suất âm kích thích da cơ giúp lưu thông khí huyết, giải cảm phong hàn và giảm đau cơ.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Chống chỉ định tuyệt đối của Giác hơi là vùng nào?',
        lua_chon: ['Vùng da đang lở loét, vết thương hở, vùng mạch máu lớn, bụng phụ nữ mang thai', 'Vùng lưng vòm', 'Vùng mông', 'Vùng đùi'],
        dap_an: 0,
        giai_thich: 'Không giác hơi trên vùng tổn thương da, cấp cứu xuất huyết, vị trí mạch máu đập và bụng thai phụ.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Thính Cung (SI19) thuộc đường kinh nào và nằm ở đâu?',
        lua_chon: [
            'Kinh Tiểu trường, nằm ở chỗ lõm phía trước giữa bình tai (khi há miệng)',
            'Kinh Bàng quang, sau tai',
            'Kinh Đởm, trên đỉnh tai',
            'Kinh Vị, dưới má'
        ],
        dap_an: 0,
        giai_thich: 'Thính Cung thuộc kinh Tiểu trường, nằm ở rãnh trước nắp bình tai, há miệng lộ rõ chỗ lõm.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Dịch Môn (TE2) thuộc kinh nào?',
        lua_chon: ['Thủ thiếu dương Tam tiêu', 'Thủ thái dương Tiểu trường', 'Thủ dương minh Đại trường', 'Thủ thái âm Phế'],
        dap_an: 0,
        giai_thich: 'Ép Môn (Dịch Môn) là Huỳnh huyệt thuộc đường kinh Thủ thiếu dương Tam tiêu, ở kẽ ngón tay 4-5.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Toản Trúc (BL2) nằm ở vị trí nào?',
        lua_chon: ['Ở chỗ lõm đầu trong lông mày', 'Ở đuôi lông mày', 'Giữa hai lông mày', 'Ở chỗ lõm thái dương'],
        dap_an: 0,
        giai_thich: 'Toản Trúc thuộc kinh Bàng quang, nằm ở ngay đầu trong của lông mày.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Ty Trúc Không (TE23) nằm ở vị trí nào?',
        lua_chon: ['Chỗ lõm đầu ngoài (đuôi) lông mày', 'Đầu trong lông mày', 'Dưới hốc mắt', 'Trên lông mày 1 thốn'],
        dap_an: 0,
        giai_thich: 'Ty Trúc Không thuộc kinh Tam tiêu, nằm ở đuôi ngoài lông mày.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Thái Dương (Kỳ huyệt) nằm ở vị trí nào?',
        lua_chon: ['Chỗ lõm sau đuôi lông mày và đuôi mắt nối ra sau 1 thốn', 'Giữa trán', 'Sau dái tai', 'Đỉnh đầu'],
        dap_an: 0,
        giai_thich: 'Thái Dương là Ngoài kinh kỳ huyệt nằm ở chỗ lõm vùng thái dương.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Ấn Đường (Kỳ huyệt) có vị trí xác định thế nào?',
        lua_chon: ['Tại điểm giữa đường nối đầu trong hai lông mày', 'Giữa trán', 'Ở sống mũi', 'Ở chóp mũi'],
        dap_an: 0,
        giai_thich: 'Ấn Đường nằm chính giữa đường nối hai đầu lông mày, dùng trấn an thần, định tâm.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Nghinh Hương (LI20) chủ trị chính bệnh lý nào?',
        lua_chon: ['Nghẹt mũi, viêm mũi, chảy máu cam, liệt mặt', 'Đau dạ dày', 'Đau tai, ù tai', 'Đau mắt đỏ'],
        dap_an: 0,
        giai_thich: 'Nghinh Hương nằm ở điểm rãnh mũi miệng ngang chân cánh mũi, chuyên trị bệnh lý về mũi.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Địa Thương (ST4) nằm ở đâu?',
        lua_chon: ['Cách khóe miệng 0.4 thốn trên đường tiếp tuyến', 'Dưới cằm', 'Ở gò má', 'Dưới cánh mũi'],
        dap_an: 0,
        giai_thich: 'Địa Thương thuộc kinh Vị, nằm ngoài khóe miệng 0.4 thốn, chữa liệt mặt, chảy dãi.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Hạ Quan (ST7) nằm ở đâu và chữa bệnh gì?',
        lua_chon: [
            'Chỗ lõm phía trước khớp thái dương hàm, trị đau răng, viêm khớp thái dương hàm, lệch mặt',
            'Sau dái tai, trị ù tai',
            'Dưới gò má, trị hoa mắt',
            'Ở gáy, trị đau đầu'
        ],
        dap_an: 0,
        giai_thich: 'Hạ Quan thuộc kinh Vị, nằm ở bờ dưới cung tiếp xương gò má, chữa đau răng và khớp thái dương hàm.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Ế Phong (TE17) có vị trí ở đâu?',
        lua_chon: ['Chỗ lõm phía sau dái tai, giữa xương chẩm và xương hàm dưới', 'Trước tai', 'Trên đỉnh tai', 'Dưới cằm'],
        dap_an: 0,
        giai_thich: 'Ế Phong thuộc kinh Tam tiêu, nằm ở chỗ lõm đằng sau dái tai, trị điếc, ù tai, liệt mặt.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Kỹ thuật xoa bóp "Chặt" thực hiện như thế nào?',
        lua_chon: [
            'Dùng bờ duỗi (bờ tiểu chỉ) của bàn tay đập liên tiếp lên cơ thể',
            'Dùng lòng bàn tay vỗ',
            'Dùng các ngón tay bấu',
            'Dùng nắm tay đấm'
        ],
        dap_an: 0,
        giai_thich: 'Thủ thuật Chặt dùng bờ ngoặc út bàn tay thực hiện tác động nhịp nhàng lên các vùng cơ dầy.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Thủ thuật "Lăn" trong xoa bóp đòi hỏi tác động lực như thế nào?',
        lua_chon: [
            'Dùng khớp ngón tay hoặc bờ ngoài bàn tay lăn cuộn liên tục trên cơ',
            'Dùng ngón tay ấn đứng yên',
            'Cào nhẹ trên da',
            'Vắt bóp cơ thịt'
        ],
        dap_an: 0,
        giai_thich: 'Thủ thuật Lăn sử dụng sức vận động của cổ tay đưa ô mô út hoặc các khớp ngón tay lăn đều trên cơ.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Thủ thuật "Miết" khác thủ thuật "Xát" ở điểm nào?',
        lua_chon: [
            'Miết dùng ngón tay ấn chặt dồn kéo da trượt trên cơ; Xát dùng lòng bàn tay trượt nhẹ nhanh gây nóng',
            'Miết làm nhẹ hơn Xát',
            'Xát dùng đầu ngón tay',
            'Miết chỉ dùng ở mông'
        ],
        dap_an: 0,
        giai_thich: 'Miết dùng ngón tay miết chặt dồn da trượt sang một bên, trong khi Xát di chuyển bàn tay trượt thẳng nhanh tạo nhiệt.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Nguyên tắc "Đầu gối đau châm bên lành, chân trái đau châm chân phải" thuộc phương pháp chọn huyệt nào?',
        lua_chon: ['Cự thích (Thích đối bên)', 'Tuần kinh chọn huyệt', 'Tại chỗ chọn huyệt', 'Bối du huyệt chọn phương'],
        dap_an: 0,
        giai_thich: 'Cự thích là phương pháp châm bên lành đối diện để điều trị bên bệnh theo nguyên lý Âm Dương cân bằng.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Trong Dưỡng sinh Nguyễn Văn Hưởng, bài tập "Thở 4 thì" gồm những thì nào?',
        lua_chon: [
            'Thì 1: Hít vào sâu căng bụng; Thì 2: Giữ hơi mở thanh quản; Thì 3: Thở ra tự nhiên; Thì 4: Nghỉ ngơi thư giãn',
            'Thì 1: Hít vào; Thì 2: Thở ra; Thì 3: Nín thở; Thì 4: Hít tiếp',
            'Thì 1: Thở ra; Thì 2: Hít vào; Thì 3: Thở ra; Thì 4: Nín thở',
            'Thì 1: Nín thở; Thì 2: Hít vào; Thì 3: Nín thở; Thì 4: Thở ra'
        ],
        dap_an: 0,
        giai_thich: 'Phương pháp thở 4 thì của BS Nguyễn Văn Hưởng: 1-Hít vào ngực nở bụng phình; 2-Giữ hơi mở thanh quản; 3-Thở ra ngực xẹp bụng thóp; 4-Nghỉ thư giãn.'
    },
    {
        category: 'duongsinh',
        cau_hoi: 'Bài tập Dưỡng sinh "Xem diệc ngửa xem đuôi" giúp rèn luyện bộ phận nào?',
        lua_chon: ['Cột sống cổ và vùng vai gáy', 'Cột sống thắt lưng', 'Khớp cổ chân', 'Khớp khuỷu tay'],
        dap_an: 0,
        giai_thich: 'Động tác vận động quay xoay đầu cổ nhịp nhàng trợ giúp phòng ngừa thoái hóa cột sống cổ.'
    },
    {
        category: 'duongsinh',
        cau_hoi: 'Trong Khí công Dưỡng sinh, nguyên tắc "Thư thái, thả lỏng toàn thân, tâm trí tập trung vào hơi thở" gọi là:',
        lua_chon: ['Thư giãn (Bình tâm tĩnh khí)', 'Ý thủ đan điền', 'Luyện khí công', 'Bão thủ quy nguyên'],
        dap_an: 0,
        giai_thich: 'Thư giãn là bước nền tảng giúp đưa hệ thần kinh vào trạng thái ức chế bảo vệ, giảm tiêu hao năng lượng.'
    },
    {
        category: 'duongsinh',
        cau_hoi: 'Vùng "Đan điền" trong tập luyện Dưỡng sinh Khí công thường được hiểu là khu vực nào?',
        lua_chon: ['Vùng Hạ đan điền (dưới rốn khoảng 1.5 - 3 thốn)', 'Vùng giữa ngực', 'Đỉnh đầu', 'Sống lưng'],
        dap_an: 0,
        giai_thich: 'Hạ đan điền ở dưới rốn là trung tâm tích tụ và phát xuất khí năng của cơ thể.'
    },
    {
        category: 'duongsinh',
        cau_hoi: 'Bài tập Dưỡng sinh "Chào mặt trời / Chào công tác" nhằm mục đích gì?',
        lua_chon: ['Khởi động toàn thân, kéo giãn gân cốt, lưu thông khí huyết đầu ngày', 'Chữa tiêu chảy', 'Giảm đau răng', 'Trị mất ngủ ngay lập tức'],
        dap_an: 0,
        giai_thich: 'Các động tác chào mặt trời giúp hệ vận động co giãn toàn diện, thư thái tinh thần.'
    },
    {
        category: 'duongsinh',
        cau_hoi: 'Động tác "Bắc cầu" trong thể dục dưỡng sinh có tác dụng chủ yếu lên vùng nào?',
        lua_chon: ['Tăng cường sức mạnh cơ lưng, đùi, mông và độ dẻo cột sống thắt lưng', 'Tăng cường thị lực', 'Chữa viêm tai', 'Trị nghẹt mũi'],
        dap_an: 0,
        giai_thich: 'Động tác Bắc cầu nâng hông đùi giúp luyện dẻo dai cơ thắt lưng và duỗi khớp háng.'
    },
    {
        category: 'duongsinh',
        cau_hoi: 'Phương pháp Dưỡng sinh YHCT coi yếu tố nào là 3 bảo vật của đời sống con người ("Tam bảo")?',
        lua_chon: ['Tinh - Khí - Thần', 'Tâm - Tỳ - Thận', 'Âm - Dương - Khí', 'Bổ - Tả - Hòa'],
        dap_an: 0,
        giai_thich: 'Tam bảo gồm Tinh (vật chất cơ sở), Khí (năng lượng hoạt động) và Thần (hoạt động tinh thần chỉ huy).'
    },
    {
        category: 'duongsinh',
        cau_hoi: 'Mục đích cốt lõi của luyện tập Khí công Dưỡng sinh là gì?',
        lua_chon: ['Bảo tồn tinh khí, lưu thông khí huyết, cân bằng Âm Dương, phòng chữa bệnh', 'Tăng khối lượng cơ bắp cực đại', 'Tăng nhịp tim nhanh chóng', 'Giảm nhu cầu ăn uống hoàn toàn'],
        dap_an: 0,
        giai_thich: 'Khí công dưỡng sinh điều hòa hơi thở và tâm trí nhằm nuôi dưỡng sức sống, cân bằng trạng thái sinh lý.'
    },
    {
        category: 'duongsinh',
        cau_hoi: 'Động tác "Sờ tai, đảo mắt, dái tai" trong dưỡng sinh giúp ích cho các cơ quan nào?',
        lua_chon: ['Mắt, Tai, tăng tuần hoàn vùng đầu mặt', 'Tỳ vị', 'Cổ chân', 'Bàng quang'],
        dap_an: 0,
        giai_thich: 'Các tác động tự xoa bóp tại vùng ngũ quan trên mặt giúp kích thích dây thần kinh, tăng nuôi dưỡng mắt tai.'
    },
    {
        category: 'duongsinh',
        cau_hoi: 'Trạng thái "Thần khí bình hòa" khi luyện tập dưỡng sinh có tác dụng phòng ngừa tình trạng nào?',
        lua_chon: ['Căng thẳng thần kinh (Stress), rối loạn thần kinh thực vật', 'Béo phì', 'Gãy xương', 'Nhiễm trùng ngoài da'],
        dap_an: 0,
        giai_thich: 'Giữ tâm trí tĩnh lặng giải tỏa áp lực thần kinh, điều hòa chức năng vỏ não.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Khuyết Bồn (ST12) nằm ở đâu?',
        lua_chon: ['Chỗ lõm hố trên xương đòn', 'Dưới xương đòn', 'Ở hõm ức', 'Tại nách'],
        dap_an: 0,
        giai_thich: 'Khuyết Bồn thuộc kinh Vị, nằm ở chính giữa hố trên xương đòn.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Xung Môn (SP12) thuộc đường kinh nào?',
        lua_chon: ['Túc thái âm Tỳ', 'Túc quyết âm Can', 'Túc thiếu âm Thận', 'Túc dương minh Vị'],
        dap_an: 0,
        giai_thich: 'Xung Môn thuộc kinh Tỳ, nằm ở nếp gấp bẹn, phía ngoài động mạch đùi.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Phong Long (ST40) là huyệt chuyên dùng để chữa chứng bệnh gì nổi tiếng?',
        lua_chon: ['Hóa đàm (đàm trệ toàn thân, ho đờm, béo phì do đàm)', 'Thanh nhiệt hạ sốt', 'Bổ Thận âm', 'Cầm máu'],
        dap_an: 0,
        giai_thich: 'Phong Long là Lạc huyệt kinh Vị, được coi là "đệ nhất huyệt" về định tâm hóa đàm thấp.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Âm Lăng Tuyền (SP9) thuộc đường kinh nào và nằm ở đâu?',
        lua_chon: [
            'Kinh Tỳ, nằm ở chỗ lõm bờ dưới sau lồi củ trong xương chày',
            'Kinh Thận, dưới mắt cá trong',
            'Kinh Can, ở mu chân',
            'Kinh Đởm, bờ ngoài gối'
        ],
        dap_an: 0,
        giai_thich: 'Âm Lăng Tuyền là Hợp huyệt kinh Tỳ, chuyên dùng để kiện tỳ lợi thấp tiêu thũng.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Huyết Hải (SP10) có vị trí ở đâu?',
        lua_chon: [
            'Mặt trước trong đùi, từ bờ trên trong xương bánh chè đo lên 2 thốn',
            'Trên mắt cá trong 3 thốn',
            'Ở giữa nếp bẹn',
            'Trên bánh chè 4 thốn'
        ],
        dap_an: 0,
        giai_thich: 'Huyết Hải thuộc kinh Tỳ, nằm ở mặt trong đùi trên bánh chè 2 thốn, có tác dụng thanh nhiệt điều huyết.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Trung Lăng Du (BL29) nằm ở đâu?',
        lua_chon: ['Ngang gai sống S3 đo ra 1.5 thốn', 'Ngang L2 đo ra 1.5 thốn', 'Ngang L4 đo ra 1.5 thốn', 'Ngang S1 đo ra 1.5 thốn'],
        dap_an: 0,
        giai_thich: 'Trung Lăng Du thuộc kinh Bàng quang, ngang đốt sống thiêng S3 ra 1.5 thốn.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Trật Biên (BL54) nằm ở vị trí nào?',
        lua_chon: ['Ngang lỗ thiêng 4 (S4) đo ngang ra 3 thốn', 'Ngang S1 đo ra 1.5 thốn', 'Ở nếp mông', 'Ngang L2 đo ra 3 thốn'],
        dap_an: 0,
        giai_thich: 'Trật Biên thuộc kinh Bàng quang, nằm ở vùng mông ngang S4 ra 3 thốn, trị đau dây thần kinh tọa.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Côn Lôn (BL60) nằm ở vị trí nào?',
        lua_chon: [
            'Tại chỗ lõm giữa đỉnh mắt cá ngoài và gân gót',
            'Chỗ lõm giữa mắt cá trong và gân gót',
            'Dưới mắt cá ngoài 1 thốn',
            'Trước mắt cá ngoài'
        ],
        dap_an: 0,
        giai_thich: 'Côn Lôn thuộc kinh Bàng quang, nằm giữa đỉnh mắt cá ngoài và gân gót.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Thừa Sơn (BL57) nằm ở đâu?',
        lua_chon: ['Tại đỉnh góc nhọn tạo bởi hai bụng cơ sinh đôi bắp chân', 'Chính giữa khoeo chân', 'Dưới mắt cá ngoài', 'Ở mặt trước cẳng chân'],
        dap_an: 0,
        giai_thich: 'Thừa Sơn thuộc kinh Bàng quang, nằm ở chỗ chắp nối hai bụng cơ bắp chân (cơ bắp chuối).'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Hành Gian (LR2) thuộc đường kinh nào và ở vị trí nào?',
        lua_chon: [
            'Huỳnh huyệt kinh Can, nằm ở kẽ ngón chân 1-2 phía sát đầu nếp da',
            'Nguyên huyệt kinh Can, ở lưng bàn chân',
            'Tỉnh huyệt kinh Thận',
            'Kinh Tỳ, ở ngón chân cái'
        ],
        dap_an: 0,
        giai_thich: 'Hành Gian là Huỳnh huyệt thuộc kinh Can, chuyên thanh tả Can hỏa, nằm ở kẽ ngón chân 1-2.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Giác Tôn (TE20) có vị trí xác định thế nào?',
        lua_chon: ['Chính giữa bờ trên vành tai áp sát vào da đầu', 'Sau dái tai', 'Trước bình tai', 'Dưới vành tai'],
        dap_an: 0,
        giai_thich: 'Giác Tôn thuộc kinh Tam tiêu, nằm ở điểm gấp vành tai áp lên da đầu.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Thính Hội (GB2) thuộc kinh nào?',
        lua_chon: ['Túc thiếu dương Đởm', 'Thủ thái dương Tiểu trường', 'Thủ thiếu dương Tam tiêu', 'Túc thái dương Bàng quang'],
        dap_an: 0,
        giai_thich: 'Thính Hội thuộc kinh Đởm, nằm ở chỗ lõm phía dưới rãnh trước nắp bình tai khi há miệng.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Nhĩ Môn (TE21) thuộc đường kinh nào?',
        lua_chon: ['Thủ thiếu dương Tam tiêu', 'Thủ thái dương Tiểu trường', 'Túc thiếu dương Đởm', 'Thủ thiếu âm Tâm'],
        dap_an: 0,
        giai_thich: 'Nhĩ Môn thuộc kinh Tam tiêu, nằm ở chỗ lõm phía trên rãnh trước nắp bình tai.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Bộ ba huyệt chữa ồn tai, điếc tai, viêm tai ở vùng tai gồm:',
        lua_chon: ['Nhĩ Môn, Thính Cung, Thính Hội', 'Toản Trúc, Ty Trúc Không, Ấn Đường', 'Địa Thương, Giáp Xa, Hạ Quan', 'Ế Phong, Phong Trì, Bách Hội'],
        dap_an: 0,
        giai_thich: 'Ba huyệt nằm xếp hàng dọc trước tai (Nhĩ Môn - Tam tiêu, Thính Cung - Tiểu trường, Thính Hội - Đởm) chuyên trị bệnh về tai.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Thương Khâu (SP5) thuộc đường kinh nào?',
        lua_chon: ['Túc thái âm Tỳ', 'Túc thiếu âm Thận', 'Túc quyết âm Can', 'Túc dương minh Vị'],
        dap_an: 0,
        giai_thich: 'Thương Khâu là Kinh huyệt thuộc đường kinh Tỳ, nằm ở chỗ lõm phía dưới trước mắt cá trong.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Chi Câu (TE6) có vị trí ở đâu và chủ trị chứng gì nổi tiếng?',
        lua_chon: ['Trên nếp cổ tay sau 3 thốn giữa xương quay và xương trụ; trị táo bón, đau sườn', 'Dưới cổ tay 2 thốn, trị ho', 'Ở khuỷu tay, trị sốt', 'Ở bàn tay, trị đau đầu'],
        dap_an: 0,
        giai_thich: 'Chi Câu thuộc kinh Tam tiêu, là huyệt đặc hiệu điều trị táo bón và đau tức mạn sườn.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Ngoại Quan (TE5) là Lạc huyệt của kinh Tam tiêu, nối với mạch nào trong Kỳ kinh bát mạch?',
        lua_chon: ['Mạch Đải', 'Mạch Dương duy', 'Mạch Âm duy', 'Mạch Xung'],
        dap_an: 1,
        giai_thich: 'Ngoại Quan thông với Mạch Dương duy, chuyên giải biểu thanh nhiệt ngoài kinh lạc.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Khúc Trì (LI11) nằm ở đâu?',
        lua_chon: [
            'Chính giữa tận cùng phía ngoài nếp gấp khuỷu tay khi co tay vuông góc',
            'Ở bờ trong nếp khuỷu',
            'Trên cổ tay 2 thốn',
            'Ở mỏm khuỷu tay'
        ],
        dap_an: 0,
        giai_thich: 'Khúc Trì là Hợp huyệt kinh Đại trường, nằm ở đầu ngoài nếp gấp khuỷu tay, chuyên thanh nhiệt giải độc, hạ huyết áp.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Kiên Ngung (LI15) nằm ở đâu?',
        lua_chon: [
            'Tại chỗ lõm phía trước dưới mỏm quạ vai khi dang cánh tay ngang',
            'Ở sau nách',
            'Trên đòn',
            'Giữa khớp cổ tay'
        ],
        dap_an: 0,
        giai_thich: 'Kiên Yu thuộc kinh Đại trường, nằm ở chỗ lõm phía trước vai khi dang tay 90 độ.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Kiên Trinh (SI9) thuộc kinh nào?',
        lua_chon: ['Thủ thái dương Tiểu trường', 'Thủ dương minh Đại trường', 'Thủ thiếu dương Tam tiêu', 'Thủ thiếu âm Tâm'],
        dap_an: 0,
        giai_thich: 'Kiên Trinh thuộc kinh Tiểu trường, nằm ở phía sau trên nếp nách sau 1 thốn.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Thiên Tông (SI11) nằm ở vị trí nào?',
        lua_chon: ['Tại chỗ lõm chính giữa hố dưới gai xương bả vai', 'Trên bờ vai', 'Ở nếp nách', 'Dưới gáy'],
        dap_an: 0,
        giai_thich: 'Thiên Tông thuộc kinh Tiểu trường, nằm ở vị trí trung tâm hố dưới gai xương bả vai, trị đau vai tay.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Tâm Du (BL15) nằm ở vị trí nào?',
        lua_chon: ['Dưới gai đốt sống lưng T5 đo ra 1.5 thốn', 'Dưới gai T3 đo ra 1.5 thốn', 'Dưới gai T7 đo ra 1.5 thốn', 'Dưới gai L2 đo ra 1.5 thốn'],
        dap_an: 0,
        giai_thich: 'Tâm Du là Bối du huyệt của Tâm, nằm dưới mỏm gai đốt sống lưng T5 ngang ra 1.5 thốn.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Phế Du (BL13) nằm ở vị trí nào?',
        lua_chon: ['Dưới gai đốt sống lưng T3 đo ngang ra 1.5 thốn', 'Dưới gai T5 đo ra 1.5 thốn', 'Dưới C7 đo ra 1.5 thốn', 'Dưới T1 đo ra 1.5 thốn'],
        dap_an: 0,
        giai_thich: 'Phế Du là Bối du huyệt của Phế, nằm dưới mỏm gai đốt sống T3 ngang ra 1.5 thốn.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Can Du (BL18) nằm ở đâu?',
        lua_chon: ['Dưới gai đốt sống lưng T9 đo ra 1.5 thốn', 'Dưới T7 đo ra 1.5 thốn', 'Dưới T11 đo ra 1.5 thốn', 'Dưới L2 đo ra 1.5 thốn'],
        dap_an: 0,
        giai_thich: 'Can Du là Bối du huyệt của Can, nằm ở bờ dưới gai đốt sống T9 ngang ra 1.5 thốn.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Tỳ Du (BL20) nằm ở vị trí nào?',
        lua_chon: ['Dưới gai đốt sống lưng T11 đo ra 1.5 thốn', 'Dưới T9 đo ra 1.5 thốn', 'Dưới T12 đo ra 1.5 thốn', 'Dưới L1 đo ra 1.5 thốn'],
        dap_an: 0,
        giai_thich: 'Tỳ Du là Bối du huyệt của Tỳ, nằm dưới mỏm gai T11 ngang ra 1.5 thốn.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Cách Du (BL17) là "Hội huyệt" của bộ phận nào?',
        lua_chon: ['Huyết (Huyết hội)', 'Khí (Khí hội)', 'Cân (Cân hội)', 'Cốt (Cốt hội)'],
        dap_an: 0,
        giai_thich: 'Cách Du nằm dưới gai T7 ra 1.5 thốn, là Huyết hội trong Bát hội huyệt, trị các bệnh về huyết.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Đại Trường Du (BL25) nằm ở vị trí nào?',
        lua_chon: ['Dưới gai đốt sống thắt lưng L4 đo ra 1.5 thốn', 'Dưới L2 đo ra 1.5 thốn', 'Dưới L5 đo ra 1.5 thốn', 'Dưới S1 đo ra 1.5 thốn'],
        dap_an: 0,
        giai_thich: 'Đại Trường Du nằm dưới mỏm gai L4 ngang ra 1.5 thốn, chữa đau thắt lưng, bệnh đại tràng.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Thủ thuật xoa bóp "Phân" và "Hợp" có cách làm thế nào?',
        lua_chon: [
            'Phân: dùng 2 ngón tay/bàn tay miết di chuyển ra 2 hướng ngược nhau. Hợp: miết từ 2 hướng ngược nhau về 1 điểm chung',
            'Phân là đấm nhẹ, Hợp là bóp cơ',
            'Phân là cào, Hợp là phát',
            'Giống hệt thủ thuật lăn'
        ],
        dap_an: 0,
        giai_thich: 'Phân tách ra hai bên, Hợp dồn lại một chỗ, tác động nhẹ nhàng lên da mặt hoặc ngực trán.'
    },
    {
        category: 'duongsinh',
        cau_hoi: 'Động tác dưỡng sinh "Ngõa quan / Đánh trống trời" (Minh thiên cổ) bằng cách bịt tai vỗ ngón tay vào sau chẩm có tác dụng:',
        lua_chon: ['Kích thích hệ thần kinh trung ương, tỉnh táo tinh thần, giảm ù tai chóng mặt', 'Làm sáng mắt', 'Chữa đau bụng', 'Làm mạnh cơ đùi'],
        dap_an: 0,
        giai_thich: 'Gõ ngón tay sau chẩm phát ra tiếng kêu vang trong đầu giúp kích thích thính giác và thần kinh.'
    },
    {
        category: 'duongsinh',
        cau_hoi: 'Bài tập Dưỡng sinh "Co duỗi tay chân, vươn vai" thích hợp nhất vào thời điểm nào?',
        lua_chon: ['Ngay sau khi thức dậy buổi sáng trên giường', 'Khi vừa ăn no xong', 'Khi đang sốt cao', 'Nửa đêm khi đang ngủ'],
        dap_an: 0,
        giai_thich: 'Vươn vai co duỗi trên giường giúp đánh thức cơ bắp và hệ tuần hoàn sau giấc ngủ đêm.'
    },
    {
        category: 'duongsinh',
        cau_hoi: 'Phương pháp "Xoa bụng" trong Dưỡng sinh YHCT nên xoa theo chiều nào để hỗ trợ nhuận tràng chống táo bón?',
        lua_chon: [
            'Xoa theo chiều kim đồng hồ quanh rốn (chiều khung đại tràng)',
            'Xoa ngược chiều kim đồng hồ',
            'Xoa dọc thẳng từ dưới lên',
            'Xoa ngang qua lại'
        ],
        dap_an: 0,
        giai_thich: 'Xoa bụng thuận chiều kim đồng hồ thúc đẩy dòng di chuyển cặn bã theo chiều giải phẫu của Đại tràng.'
    },
    {
        category: 'duongsinh',
        cau_hoi: 'Thời điểm nào trong ngày được coi là thích hợp nhất để tập luyện Khí công Dưỡng sinh ngoài trời?',
        lua_chon: ['Sáng sớm khi không khí trong lành, mặt trời mới mọc', 'Buổi trưa nắng gắt 12h', 'Nửa đêm muộn', 'Khi trời mưa rào'],
        dap_an: 0,
        giai_thich: 'Sáng sớm là thời điểm dương khí bắt đầu phát sinh, không khí trong lành tốt cho hô hấp.'
    },
    {
        category: 'chamcuu_xoabop',
        cau_hoi: 'Huyệt Thần Khuyết (CV8) nằm ở vị trí nào trên cơ thể?',
        lua_chon: ['Ngay chính giữa rốn', 'Trên rốn 1 thốn', 'Dưới rốn 1 thốn', 'Cạnh rốn 2 thốn'],
        dap_an: 0,
        giai_thich: 'Thần Khuyết chính là vị trí giữa rốn (chỉ cứu không châm kim).'
    },
];
const questionsDataPart5 = [
    // ==================== DƯỢC HỌC & BỆNH HỌC YHCT ====================
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Bạc hà thuộc nhóm thuốc nào trong YHCT?',
        lua_chon: ['Phát tán phong hàn', 'Phát tán phong nhiệt', 'Thanh nhiệt giải độc', 'Hành khí chỉ thống'],
        dap_an: 1,
        giai_thich: 'Bạc hà có vị cay, tính mát, thơm nhẹ, thuộc nhóm thuốc Tân lương giải biểu (phát tán phong nhiệt).'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Ma hoàng có tác dụng chính nào sau đây?',
        lua_chon: ['Phát hãn giải biểu, bình suyễn, lợi thủy', 'Tư âm giáng hỏa', 'Bổ huyết an thần', 'Thanh nhiệt lương huyết'],
        dap_an: 0,
        giai_thich: 'Ma hoàng tính ấm, vị cay đắng, có công năng phát hãn tuyên Phế bình suyễn và lợi thủy tiêu thũng.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Hoàng liên có tính vị và tác dụng nổi bật nào?',
        lua_chon: ['Đắng lạnh; thanh nhiệt táo thấp, tả hỏa giải độc', 'Cay nóng; ôn trung tán hàn', 'Ngọt bình; bổ khí kiện tỳ', 'Chua ấm; liễm hãn sáp tinh'],
        dap_an: 0,
        giai_thich: 'Hoàng liên vị rất đắng, tính lạnh, chuyên thanh nhiệt táo thấp ở Tâm và Vị hỏa.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Khi chế biến Sinh địa thành Thục địa (chưng với rượu, gừng, hoài sơn/sa nhân), tính vị và tác dụng thay đổi thế nào?',
        lua_chon: [
            'Từ tính hàn sang tính ôn, tăng tác dụng tư âm bổ huyết',
            'Từ tính ấm sang tính mát, tăng tác dụng giải độc',
            'Từ vị đắng sang vị cay, tăng tác dụng phát hãn',
            'Không thay đổi tính vị'
        ],
        dap_an: 0,
        giai_thich: 'Sinh địa tính đắng lạnh (thanh nhiệt) qua cửu chưng cửu sái thành Thục địa tính ấm ngọt, chuyên bổ huyết tư âm.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Kim ngân hoa chuyên trị chứng bệnh nào?',
        lua_chon: ['Mụn nhọt, dị ứng, mẩn ngứa, mưng mủ (thanh nhiệt giải độc)', 'Đau lưng mỏi gối do Thận hư', 'Tiêu chảy do Tỳ hư', 'Mất ngủ do Tâm huyết hư'],
        dap_an: 0,
        giai_thich: 'Kim ngân hoa là vị thuốc hàng đầu trong nhóm thanh nhiệt giải độc, trị mụn nhọt đinh độc.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Phụ tử chế có tính chất dược lý đặc biệt nào cần lưu ý?',
        lua_chon: ['Vị cay ngọt, tính rất nóng, có độc; tác dụng hồi dương cứu nghịch', 'Vị đắng mát, không độc', 'Tính lạnh, thanh nhiệt tả hỏa', 'Vị chua, liễm phế chỉ khái'],
        dap_an: 0,
        giai_thich: 'Phụ tử chế (rễ củ con cây Ô đầu) rất nóng, có độc, là vị thuốc chủ lực cứu thoát dương.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Bán hạ chế có công dụng chính là gì?',
        lua_chon: ['Táo thấp hóa đàm,giáng nghịch chỉ nôn', 'Bổ khí thăng dương', 'Lương huyết chỉ huyết', 'Tư âm nhuận Phế'],
        dap_an: 0,
        giai_thich: 'Bán hạ vị cay tính ấm, chuyên trừ đàm thấp nội trệ vàgiáng nghịch chống nôn mửa.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Trần bì là bộ phận dùng của cây nào?',
        lua_chon: ['Vỏ quả chín khô của cây Quýt', 'Vỏ thân cây Hạt búp', 'Lá cây Tía tố', 'Hạt cây Cải trắng'],
        dap_an: 0,
        giai_thich: 'Trần bì là vỏ quả quýt chín (Citrus reticulata) để lâu năm, có tác dụng lý khí hóa đàm.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Đương quy được tôn vinh là vị thuốc hàng đầu về nhóm nào?',
        lua_chon: ['Bổ huyết và điều huyết', 'Bổ khí thăng dương', 'Thanh nhiệt giải độc', 'Trừ phong thấp'],
        dap_an: 0,
        giai_thich: 'Đương quy vị ngọt cay, tính ấm, là "Thánh dược" trong điều trị các chứng huyết hư, huyết ứ.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Nhân sâm có công năng nổi bật nhất là gì?',
        lua_chon: ['Đại bổ nguyên khí, sinh tân, an thần', 'Khư phong trừ thấp', 'Thanh nhiệt tả hỏa', 'Hoạt huyết hóa ứ'],
        dap_an: 0,
        giai_thich: 'Nhân sâm đại bổ nguyên khí, dùng cho các trường hợp kiệt sức, suy nhược cấp mạn tính.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Hoàng kỳ có tác dụng nào sau đây?',
        lua_chon: ['Bổ khí thăng dương, cố biểu chỉ hãn, lợi thủy tiêu thũng', 'Tư âm giáng hỏa', 'Lương huyế chỉ huyết', 'Thanh tỳ hỏa'],
        dap_an: 0,
        giai_thich: 'Hoàng kỳ bổ khí mạnh, giúp củng cố vệ khí chống vã mồ hôi và nâng tạng phủ bị sa.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Bạch thuật có công dụng chính là gì?',
        lua_chon: ['Kiện tỳ ích khí, táo thấp, lợi thủy, an thai', 'Bổ thận trợ dương', 'Thanh phế chỉ khái', 'Sơ gan giải uất'],
        dap_an: 0,
        giai_thich: 'Bạch thuật vị ngọt đắng tính ấm, là vị thuốc quan trọng nhất để kiện Tỳ và trừ thấp.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Phục linh có nguồn gốc là gì và có tác dụng gì?',
        lua_chon: ['Thể nấm ký sinh trên rễ cây Thông; tác dụng thẩm thấp lợi thủy, kiện tỳ, an thần', 'Vỏ cây rừng; tác dụng bổ huyết', 'Rễ củ cây cỏ; tác dụng phát hãn', 'Khoáng vật; tác dụng thanh nhiệt'],
        dap_an: 0,
        giai_thich: 'Phục linh là thể quả nấm Poria cocos ký sinh rễ thông, giúp lợi tiểu, khỏe tỳ và êm dịu thần kinh.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Cam thảo đóng vai trò gì phổ biến nhất trong các phương tễ?',
        lua_chon: ['Điều hòa các vị thuốc (Sứ dược), bổ tỳ ích khí, giải độc', 'Bổ thận dương mạnh nhất', 'Xổ tống tích trệ', 'Tả hỏa cực mạnh'],
        dap_an: 0,
        giai_thich: 'Cam thảo ngọt bình, giúp hòa hoãn độc tính/tính chênh lệch của các dược liệu khác trong bài thuốc.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Hoài sơn (Sơn dược) có công năng chủ yếu nào?',
        lua_chon: ['Bổ Tỳ, dưỡng Vị, ích Phế, bổ Thận, cố tinh', 'Hoạt huyết hóa ứ', 'Phát tán phong nhiệt', 'Thanh tả thực nhiệt'],
        dap_an: 0,
        giai_thich: 'Hoài sơn (củ khoai mài) bổ tỳ vị, ích phế thận, dùng trị tiêu chảy mạn, di tinh, tiểu đường.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Đỗ trọng có tác dụng chính là gì?',
        lua_chon: ['Bổ Can Thận, cường gân cốt, an thai', 'Thanh nhiệt giải độc', 'Táo thấp hóa đàm', 'Phát tán phong hàn'],
        dap_an: 0,
        giai_thich: 'Vỏ cây Đỗ trọng bổ can thận, làm chắc gân xương, dùng trị đau lưng mỏi gối, thai động.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Ba kích có tác dụng nổi bật nào?',
        lua_chon: ['Ôn Thận trợ dương, khư phong thấp, mạnh gân cốt', 'Tư âm nhuận phế', 'Thanh nhiệt lương huyết', 'Tiêu thực đạo trệ'],
        dap_an: 0,
        giai_thich: 'Ba kích tím vị ngọt cay tính ấm, dùng trị liệt dương, xuất tinh sớm, đau khớp do lạnh.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Kỷ tử (Cẩu kỷ tử) thuộc nhóm thuốc nào và có tác dụng gì?',
        lua_chon: ['Thuốc Bổ âm/Bổ huyết; tư bổ Can Thận, minh mục (sáng mắt)', 'Thuốc Tả hạ', 'Thuốc Giải biểu', 'Thuốc Ôn trung'],
        dap_an: 0,
        giai_thich: 'Kỷ tử hạt đỏ vị ngọt, chuyên nuôi dưỡng âm huyết tạng Can Thận, cải thiện thị lực.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Cúc hoa có công dụng chính là gì?',
        lua_chon: ['Sơ phong thanh nhiệt, bình Can sáng mắt, giải độc', 'Bổ hỏa trợ dương', 'sáp tràng chỉ tả', 'Thông kinh phá ứ'],
        dap_an: 0,
        giai_thich: 'Cúc hoa đắng ngọt mát, chuyên chữa đau đầu phong nhiệt, mắt đỏ sưng đau do Can hỏa.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Câu đằng có tác dụng đặc trị nào?',
        lua_chon: ['Bình Can tức phong, thanh nhiệt trấn giật (trị cao huyết áp, co giật)', 'Bổ khí thăng dương', 'Táo thấp kiện tỳ', 'Ôn trung chỉ thống'],
        dap_an: 0,
        giai_thich: 'Móc câu cây Câu đằng chứa alkaloid hạ huyết áp, dập tắt gai phong gây co giật.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Mộc hương chuyên trị triệu chứng nào?',
        lua_chon: ['Đau trướng bụng, nôn mửa, tiêu chảy do khí trệ Tỳ Vị', 'Ho khô kéo dài', 'Mất ngủ kéo dài', 'Đau đầu gáy'],
        dap_an: 0,
        giai_thich: 'Mộc hương đắng cay ấm, hành khí chỉ thống cực tốt ở đường tiêu hóa.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Hương phụ (củ gấu) là vị thuốc quý chuyên dùng cho đối tượng nào?',
        lua_chon: ['Phụ nữ (sơ Can lý khí, điều kinh chỉ thống)', 'Trẻ em sốt cao', 'Người già hư suyễn', 'Người bị trĩ nội'],
        dap_an: 0,
        giai_thich: 'Hương phụ là "Đầu bảng phụ khoa" giúp giải uất can khí, chữa đau kinh, rối loạn kinh nguyệt.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Chỉ thực khác Chỉ xác ở điểm nào về lực tác dụng?',
        lua_chon: [
            'Chỉ thực (quả hái non) lực phá khí tiêu tích mạnh hơn Chỉ xác (quả hái gần chín)',
            'Chỉ xác lực mạnh hơn Chỉ thực',
            'Chỉ thực dùng bổ khí, Chỉ xác dùng tả khí',
            'Hai vị hoàn toàn giống nhau'
        ],
        dap_an: 0,
        giai_thich: 'Chỉ thực tính thu hái lúc quả còn nhỏ nên tính chất mãnh liệt phá trướng trệ, Chỉ xác hòa hoãn hơn.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Đan sâm có công năng nào nổi tiếng?',
        lua_chon: ['Hoạt huyết khư ứ, lương huyết an thần ("Nhất vị Đan sâm công đồng Tứ vật")', 'Bổ thận trợ dương', 'Phát tán phong hàn', 'Sáp tinh dừng di niệu'],
        dap_an: 0,
        giai_thich: 'Đan sâm hoạt huyết dưỡng huyết tốt đến mức cổ nhân ví tác dụng ngang bài Tứ vật thang.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Tam thất có tác dụng đặc biệt nào khi dùng trị xuất huyết?',
        lua_chon: ['Hóa ứ chỉ huyết (cầm máu mà không gây đọng máu ứ)', 'Gây đông máu cục bộ nguy hiểm', 'Chỉ dùng để bổ khí', 'Chỉ dùng ngoài da'],
        dap_an: 0,
        giai_thich: 'Tam thất vừa có khả năng dừng chảy máu vừa làm tan các khối máu tụ ứ trệ.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Ngưu tất có đặc tính tác dụng hướng đi nào đặc trưng?',
        lua_chon: ['Hoạt huyết thông kinh, bổ Can Thận, dẫn huyết (và hỏa) hạ hành xuống dưới', 'Dẫn thuốc bốc lên đầu', 'Chỉ tác dụng ở phế', 'Tụ khí ở trung tiêu'],
        dap_an: 0,
        giai_thich: 'Ngưu tất bổ gan thận, chữa đau khớp chi dưới và có xu hướng dẫn khí huyết giáng xuống.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Sơn tra chuyên tiêu hóa loại thức ăn tích trệ nào tốt nhất?',
        lua_chon: ['Thịt mỡ, đồ ăn nhiều dầu mỡ dính trệ', 'Đồ ăn ngũ cốc, bột đường', 'Rượu bia', 'Rau củ sống'],
        dap_an: 0,
        giai_thich: 'Sơn tra (táo mèo) chứa nhiều acid hữu cơ giúp cắt giảm và tiêu hóa dầu mỡ, thịt động vật.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Thần khúc chuyên tiêu hóa tích trệ loại thức ăn nào?',
        lua_chon: ['Lúa gạo, ngũ cốc, đồ ăn bột mì', 'Thịt lợn, thịt bò', 'Hải sản đồ tươi sống', 'Đồ uống lạnh'],
        dap_an: 0,
        giai_thich: 'Thần khúc làm từ bột lên men cùng dược liệu, trị tích trệ đồ ăn ngũ cốc tinh bột.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Bối mẫu có công dụng chính là gì?',
        lua_chon: ['Thanh nhiệt hóa đàm, nhuận Phế chỉ khái, tán kết', 'Ôn phế hóa ẩm', 'Bổ tỳ止 tả', 'Hoạt huyết chỉ thống'],
        dap_an: 0,
        giai_thich: 'Bối mẫu mát nhuận, chuyên trị ho do phế nhiệt, ho khô đờm dính khó khạc.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Tang bạch bì (vỏ rễ cây Dâu tằm) có tác dụng gì?',
        lua_chon: ['Thanh Phế bình suyễn, lợi thủy tiêu thũng', 'Ôn thận trợ dương', 'Phát tán phong hàn', 'Nhuận tràng thông tiện'],
        dap_an: 0,
        giai_thich: 'Tang bạch bì ngọt mát, thanh tả phế nhiệt ho suyễn kiêm lợi tiểu giảm phù.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Toan táo nhân (nhân hạt táo chua) cần chế biến thế nào để điều trị mất ngủ?',
        lua_chon: ['Sao đen / Sao vàng cháy', 'Dùng sống hoàn toàn', 'Ngâm giấm', 'Nướng vôi'],
        dap_an: 0,
        giai_thich: 'Toan táo nhân sao đắng ấm giúp dưỡng tâm an thần (dùng sống lại có tác dụng tỉnh táo).'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Viễn chí có tác dụng gì nổi bật?',
        lua_chon: ['Dưỡng tâm an thần, khư đàm khai khiếu', 'Bổ thận tráng dương', 'Lương huyế chỉ huyết', 'Giải biểu phát hãn'],
        dap_an: 0,
        giai_thich: 'Viễn chí đắng cay tính ấm, trừ đàm ở tâm trí giúp tinh thần minh mẫn, trị mất ngủ, hay quên.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Thương thuật có công năng nào chính?',
        lua_chon: ['Táo thấp kiện Tỳ, khư phong tán hàn, minh mục', 'Tư âm giáng hỏa', 'Lương huyết解 độc', 'Bổ huyết dưỡng tâm'],
        dap_an: 0,
        giai_thich: 'Thương thuật cay đắng đắng nóng, có tính táo thấp cực mạnh giúp chữa Tỳ hư thấp trệ.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Trạch tả chuyên chữa chứng bệnh nào?',
        lua_chon: ['Lợi thủy thẩm thấp, thanh nhiệt Hạ tiêu (trị tiểu đục, tiểu buốt, thủy thũng)', 'Bổ khí thăng dương', 'Tuyên phế chỉ khái', 'Sơ can giải uất'],
        dap_an: 0,
        giai_thich: 'Trạch tả vị ngọt nhạt tính mát, bào chế từ củ cây mã đề nước, bài trừ thủy thấp qua đường tiểu.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Xa tiền tử là bộ phận nào của cây Mã đề và có tác dụng gì?',
        lua_chon: ['Hạt chín khô; lợi thủy thông lâm, thanh Can sáng mắt, thanh Phế hóa đàm', 'Lá cây; chỉ có tác dụng bổ', 'Rễ cây; trị đau lưng', 'Hoa; trị mất ngủ'],
        dap_an: 0,
        giai_thich: 'Xa tiền tử là hạt mã đề, hạt nhỏ có chất nhầy giúp lợi tiểu, thanh hỏa ở Can và Phế.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Ý dĩ (hạt bo bo) có công dụng chính là gì?',
        lua_chon: ['Kiện tỳ lợi thấp, thanh nhiệt排 mủ, trừ tý', 'Bổ thận dương', 'Phát tán phong hàn', 'Hoạt huyết tán ứ'],
        dap_an: 0,
        giai_thich: 'Ý dĩ nhạt mát, vừa làm thực phẩm bổ dưỡng vừa kiện tỳ trừ thấp, bài mủ trong áp xe.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Sự khác biệt vùng tác dụng giữa Khương hoạt và Độc hoạt là gì?',
        lua_chon: [
            'Khương hoạt chữa đau phong thấp nửa người trên (vai, gáy, lưng); Độc hoạt chữa nửa người dưới (thắt lưng, chân)',
            'Khương hoạt chữa chân; Độc hoạt chữa tay',
            'Khương hoạt chữa nhiệt; Độc hoạt chữa hàn',
            'Hoàn toàn giống nhau'
        ],
        dap_an: 0,
        giai_thich: 'Khương hoạt chạy lên vùng thượng tiêu thái dương; Độc hoạt chạy xuống hạ tiêu thiếu âm.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Tang ký sinh (cây tầm gửi trên cây dâu tằm) có công dụng gì?',
        lua_chon: ['Khư phong thấp, bổ Can Thận, cường gân cốt, an thai', 'Thanh tả tỳ hỏa', 'Xổ hạ thực nhiệt', 'Hồi dương cứu nghịch'],
        dap_an: 0,
        giai_thich: 'Tang ký sinh bổ gan thận chắc xương gân, trị đau khớp mạn tính kiêm dọa sảy thai.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Can khương (củ gừng khô) khác Sinh khương (gừng tươi) ở điểm nào?',
        lua_chon: [
            'Can khương ôn trung tán hàn nội tạng mạnh hơn; Sinh khương giải biểu phát hãn ở ngoài mạnh hơn',
            'Can khương mát hơn Sinh khương',
            'Can khương dùng bổ âm',
            'Hai vị không khác nhau'
        ],
        dap_an: 0,
        giai_thich: 'Sinh khương tính tản chạy ra ngoài bì mao; Can khương giữ lại bên trong làm ấm Tỳ Vị (ôn trung).'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Kha tử chuyên chữa chứng bệnh kéo dài nào?',
        lua_chon: ['Ho lâu ngày mất tiếng, tiêu chảy kéo dài mạn tính (liễm Phế sáp trĩ)', 'Sốt cao cấp tính', 'Táo bón cấp', 'Đau đầu dữ dội'],
        dap_an: 0,
        giai_thich: 'Kha tử vị đắng chua chát, có tính cố sáp mạnh trị ho mạn tính khàn tiếng và đái dầm/tiêu chảy mạn.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Ô mai có tác dụng gì đối với bệnh lý đường tiêu hóa?',
        lua_chon: ['Liễm phế, sáp trĩ, sinh tân, an giun (trị giun chui mật)', 'Tiêu mỡ máu', 'Tả hạ thông tiện', 'Nôn mửa cấp'],
        dap_an: 0,
        giai_thich: 'Ô mai vị chua, làm êm giun (an giun) dừng đau bụng giun và làm dịu cổ họng khô.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Mẫu lệ (vỏ hàu/vỏ hến nung) có công năng gì?',
        lua_chon: ['Bình Can tiềm dương, nhuyễn kiên tán kết, thu hãm cố sáp', 'Bổ khí thăng dương', 'Phát tán phong nhiệt', 'Thanh nhiệt tả hạ'],
        dap_an: 0,
        giai_thich: 'Mẫu lệ là chất khoáng mặn đắng nhẹ, đè nén hỏa bốc (tiềm dương) và làm mềm khối u cứng (nhuyễn kiên).'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Huyền sâm có tác dụng chính là gì?',
        lua_chon: ['Tư âm giáng hỏa, thanh nhiệt lương huyết, giải độc tán kết', 'Bổ thận dương', 'Ôn trung tán hàn', 'Hành khí chỉ thống'],
        dap_an: 0,
        giai_thich: 'Huyền sâm đắng mặn mát, chuyên trị các chứng sốt cao mất nước, sưng hạch, viêm họng mạn.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Mạch môn đông chuyên dùng nuôi dưỡng âm dịch của tạng phủ nào?',
        lua_chon: ['Phế và Tâm (Phế vị âm hư, Tâm hỏa nhiễu)', 'Thận và Bàng quang', 'Can và Đởm', 'Tỳ và Đại tràng'],
        dap_an: 0,
        giai_thich: 'Mạch môn vị ngọt hơi đắng mát, dưỡng phế tân dịch, thanh tâm phiền.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Quy bản (Yếm rùa) thuộc nhóm thuốc nào?',
        lua_chon: ['Thuốc Bổ âm (Tư âm tiềm dương, bổ Thận健 cốt)', 'Thuốc Tả hạ', 'Thuốc Phát tán', 'Thuốc Ôn lý'],
        dap_an: 0,
        giai_thich: 'Quy bản là dược liệu nguồn gốc động vật quý giúp bồi bổ phần âm kiệt quệ và làm chắc xương.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Xuyên tâm liên thuộc nhóm thuốc nào?',
        lua_chon: ['Thanh nhiệt giải độc', 'Bổ khí', 'Trừ phong thấp', 'Hồi dương cứu nghịch'],
        dap_an: 0,
        giai_thich: 'Xuyên tâm liên rất đắng, tính lạnh, tác dụng thanh nhiệt giải độc như kháng sinh đông y.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Mã tiền chế có tác dụng và độc tính như thế nào?',
        lua_chon: [
            'Có độc tính cao (chứa Strychnin); tác dụng thông kinh hoạt lạc, trừ phong thấp, giảm đau dữ dội',
            'Không có độc tính, dùng tùy ý',
            'Chỉ dùng làm thực phẩm',
            'Tính mát, bổ âm'
        ],
        dap_an: 0,
        giai_thich: 'Mã tiền chế chữa đau khớp nặng, liệt mặt nhưng phải kiểm soát liều nghiêm ngặt do độc tính cao.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Chứng "Tọa cốt phong" trong Y học cổ truyền tương ứng với bệnh lý nào trong Y học hiện đại?',
        lua_chon: ['Đau dây thần kinh hông to (thần kinh tọa)', 'Thoái hóa khớp gối', 'Viêm quanh khớp vai', 'Đau dạ dày cấp'],
        dap_an: 0,
        giai_thich: 'Tọa cốt phong mô tả chứng đau lan từ thắt lưng chạy dọc mông xuống chân theo đường đi dây thần kinh tọa.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Biểu hiện lâm sàng đặc trưng của "Trúng phong kinh lạc" là gì?',
        lua_chon: [
            'Đột ngột méo miệng, lệch mắt, nói ngọng, tay chân yếu mỏi NHƯNG KHÔNG hôn mê',
            'Đột ngột hôn mê bất tỉnh, co giật',
            'Sốt cao vã mồ hôi',
            'Đau bụng tiêu chảy'
        ],
        dap_an: 0,
        giai_thich: 'Trúng phong kinh lạc mức độ nhẹ hơn tạng phủ, tổn thương dừng ở kinh lạc nên bệnh nhân hoàn toàn tỉnh táo.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Điểm khác biệt cốt lõi giữa "Trúng phong tạng phủ" và "Trúng phong kinh lạc" là gì?',
        lua_chon: [
            'Trúng phong tạng phủ CÓ hội chứng hôn mê, rối loạn ý thức',
            'Trúng phong tạng phủ không bị méo miệng',
            'Trúng phong kinh lạc nguy hiểm hơn',
            'Không có điểm khác biệt'
        ],
        dap_an: 0,
        giai_thich: 'Tà khí trúng vào Tạng Phủ làm tâm thần bế tắc hoặc thoát gãy gây hôn mê bất tỉnh.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Chứng "Khái sậy" trong Đông y tương ứng với triệu chứng/bệnh lý nào?',
        lua_chon: ['Chứng Ho / Bệnh lý hô hấp', 'Chứng Tiêu chảy', 'Chứng Đau đầu', 'Chứng Liệt mặt'],
        dap_an: 0,
        giai_thich: 'Khái (ho có tiếng không đờm), Sậy (ho có đờm) gọi chung là chứng ho.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Chứng "Tiết tả" thể Tỳ hư có đặc điểm lâm sàng nào?',
        lua_chon: ['Phân sống, tiêu chảy kéo dài, ăn kém, bụng trướng sau ăn, mệt mỏi', 'Phân thối nồng, đái rắt', 'Sốt cao nôn mửa', 'Đau bụng dữ dội cự án'],
        dap_an: 0,
        giai_thich: 'Tỳ hư suy giảm vận hóa gây tiêu chảy mạn tính, phân nát sống.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Đau đầu do "Can dương thượng kháng" nên chọn bài thuốc nào điều trị tốt nhất?',
        lua_chon: ['Thiên ma câu đằng ẩm', 'Độc hoạt ký sinh thang', 'Tứ quân tử thang', 'Bình vị tán'],
        dap_an: 0,
        giai_thich: 'Thiên ma câu đằng ẩm bình can tiềm dương, trị chứng nhức đầu, chóng mặt do huyết áp cao/Can dương vượng.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Chứng "Tọa cốt phong" thể Phong hàn thấp mạn tính nên ưu tiên dùng bài thuốc nào?',
        lua_chon: ['Độc hoạt ký sinh thang', 'Bạch hổ thang', 'Bát chính tán', 'Long đởm tả can thang'],
        dap_an: 0,
        giai_thich: 'Độc hoạt ký sinh thang khư phong thấp chỉ thống kiêm bổ can thận khí huyết, đệ nhất trị đau thần kinh tọa.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Chứng "Hung tý" trong YHCT tương ứng với bệnh lý nào trong Y học hiện đại?',
        lua_chon: ['Cơn đau thắt ngực / Bệnh thiếu máu cơ tim cục bộ', 'Viêm dạ dày', 'Viêm phế quản mạn', 'Viêm cầu thận'],
        dap_an: 0,
        giai_thich: 'Hung tý mô tả chứng đau đè nén, tức nhói vùng ngực trái lan ra tay do tâm mạch bế tắc.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Bài thuốc "Bổ dương hoàn ngũ thang" chuyên dùng điều trị di chứng nào sau trúng phong?',
        lua_chon: ['Bán thân bất toại (liệt nửa người) thể Khí hư huyết ứ', 'Sốt cao co giật', 'Nôn ra máu', 'Tiêu chảy cấp'],
        dap_an: 0,
        giai_thich: 'Bổ dương hoàn ngũ thang dùng Hoàng kỳ liều rất cao bổ khí để thúc đẩy phục hồi liệt nửa người.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Chứng "Vị quản thống" trong YHCT tương ứng với bệnh lý nào theo Tây y?',
        lua_chon: ['Đau dạ dày / Viêm loét dạ dày tá tràng', 'Đau ruột thừa', 'Viêm đại tràng', 'Sỏi mật'],
        dap_an: 0,
        giai_thich: 'Vị quản thống là cơn đau vùng thượng vị (vùng dạ dày).'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Chứng "Mất ngủ" (Thất miên) thể Tâm Tỳ hư dùng bài thuốc nào hiệu quả nhất?',
        lua_chon: ['Quy tỳ thang', 'Đại thừa khí thang', 'Ma hoàng thang', 'Chân vũ thang'],
        dap_an: 0,
        giai_thich: 'Quy tỳ thang bổ tâm tỳ, dưỡng huyết an thần trị mất ngủ, lo âu, hồi hộp.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Thành phần bài thuốc "Nhị trần thang" dùng trị chứng đàm thấp gồm các vị nào?',
        lua_chon: ['Bán hạ, Trần bì, Phục linh, Cam thảo', 'Nhân sâm, Bạch thuật, Phục linh, Cam thảo', 'Đương quy, Thục địa, Bạch thược, Xuyên khung', 'Hoàng liên, Hoàng cầm, Chi tử, Bán hạ'],
        dap_an: 0,
        giai_thich: 'Nhị trần thang lấy Bán hạ và Trần bì (hai vị thuốc để càng lâu năm càng tốt) làm cốt lõi hóa đàm.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Cỏ mực (Hạn liên thảo) có tác dụng gì?',
        lua_chon: ['Tư âm bổ thận, lương huyết chỉ huyết (cầm máu)', 'Ôn trung tán hàn', 'Thông tiện xổ hạ', 'Phát hãn giải biểu'],
        dap_an: 0,
        giai_thich: 'Cỏ mực ngọt chua tính mát, cầm máu rất tốt do nhiệt bức huyết vọng hành.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Hòe hoa (nụ hoa cây Hòe) chứa hoạt chất Rutin có tác dụng nổi bật gì?',
        lua_chon: ['Làm bền thành mạch, hạ huyết áp, cầm máu (trị trĩ chảy máu, đại tiện ra máu)', 'Bổ khí', 'Tăng đường huyết', 'Gây nôn'],
        dap_an: 0,
        giai_thich: 'Rutin trong hoa hòe củng cố mao mạch, thanh nhiệt chỉ huyết trị bệnh trĩ, xuất huyết.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Nhục quế khác Quế chi ở bộ phận dùng và tính năng thế nào?',
        lua_chon: [
            'Nhục quế là vỏ thân (ấm sâu vào trong, bổ Hỏa trợ Dương); Quế chi là cành nhỏ (chạy ra ngoài kinh lạc giải biểu)',
            'Nhục quế là cành; Quế chi là vỏ',
            'Nhục quế mát hơn Quế chi',
            'Hoàn toàn giống nhau'
        ],
        dap_an: 0,
        giai_thich: 'Vỏ thân quế (Nhục quế) đi vào hạ tiêu ôn mệnh môn; Cành quế (Quế chi) đi ra vai tay phát tán phong hàn.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Xuyên khung có đặc tính điều trị đau đầu thế nào?',
        lua_chon: ['Là "Thánh dược chữa đau đầu", trị được đau đầu do cả phong hàn, phong nhiệt, huyết hư, huyết ứ', 'Chỉ chữa đau bụng', 'Chỉ chữa đau chân', 'Không chữa đau đầu'],
        dap_an: 0,
        giai_thich: 'Xuyên khung cay ấm, hành huyết hành khí, thông suốt kinh lạc vùng đầu mặt.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Sa nhân có công năng chính nào trên tiêu hóa và thai phụ?',
        lua_chon: ['Hành khí hòa vị, hóa thấp, an thai (trị nôn mửa thai nghén, bụng đầy)', 'Tả hạ通 tiện mạnh', 'Lương huyết cầm máu', 'Nhuận phế chỉ khái'],
        dap_an: 0,
        giai_thich: 'Sa nhân thơm ấm, giúp ấm trung tiêu, trừ nôn và làm yên thai trệ.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Ngũ vị tử thuộc nhóm thuốc nào và có tác dụng gì?',
        lua_chon: ['Thuốc Cố sáp; liễm Phế chỉ khái, sáp tinh chỉ tả, sinh tân', 'Thuốc Tả hạ', 'Thuốc Giải biểu', 'Thuốc Thanh nhiệt'],
        dap_an: 0,
        giai_thich: 'Ngũ vị tử có đủ 5 vị (chua chủ đạo), giữ khí cố tinh, trị ho mạn và vã mồ hôi.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Sơn thù dư (Sơn thù) có công năng chính là gì?',
        lua_chon: ['Bổ ích Can Thận, sáp tinh cố hãn', 'Thanh tả tỳ hỏa', 'Phát tán phong nhiệt', 'Thông kinh phá ứ'],
        dap_an: 0,
        giai_thich: 'Sơn thù vị chua ấm, chuyên ôn bổ can thận, giữ tinh khí không bị thất thoát.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Mạch môn đông KHÔNG nên dùng trong trường hợp nào?',
        lua_chon: ['Tiêu chảy do Tỳ Vị hư hàn, đàm thấp ngưng trệ', 'Phế âm hư ho khô', 'Miệng khô khát nước', 'Mất ngủ phiền rạo rực'],
        dap_an: 0,
        giai_thich: 'Mạch môn tính mát nhuận trệ, dùng cho người Tỳ hư tiêu chảy sẽ làm bệnh nặng thêm.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Long nhãn (nhãn nhục) có tác dụng chính là gì?',
        lua_chon: ['Bổ Tâm Tỳ, dưỡng huyết an thần', 'Thanh nhiệt giải độc', 'Khư phong trừ thấp', 'Ôn Thận trợ dương'],
        dap_an: 0,
        giai_thich: 'Long nhãn ngọt ấm, dưỡng tâm huyết, khỏe tỳ khí, chữa suy nhược mất ngủ.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Hà thủ ô đỏ có tác dụng gì nổi tiếng dân gian?',
        lua_chon: ['Bổ Can Thận, bổ tinh huyết, làm đen tóc, sáng mắt', 'Tả hạ chữa táo bón', 'Phát hãn chữa cảm', 'Thanh nhiệt hạ sốt'],
        dap_an: 0,
        giai_thich: 'Hà thủ ô đỏ chế đậu đen bổ thận tinh, giúp tóc đen mượt và khỏe gân xương.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Khi sử dụng Hà thủ ô sống (chưa chế biến), cần đề phòng tác dụng phụ nào?',
        lua_chon: ['Gây tiêu chảy, kích ứng đường ruột do chứa Anthranoid', 'Gây mất ngủ', 'Gây hạ đường huyết cấp', 'Gây tăng huyết áp'],
        dap_an: 0,
        giai_thich: 'Hà thủ ô sống chứa nhiều chất gây nhuận tràng mạnh dễ làm đi ngoài phân sống tiêu chảy.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Tang diệp (lá Dâu tằm) có công dụng chính là gì?',
        lua_chon: ['Sơ phong thanh nhiệt, thanh Phế nhuận táo, thanh Can sáng mắt', 'Ôn Thận trợ dương', 'sáp tràng chỉ tả', 'Hoạt huyết chỉ thống'],
        dap_an: 0,
        giai_thich: 'Lá dâu tằm đắng ngọt mát, chuyên chữa cảm mạo phong nhiệt, ho khô và đau mắt đỏ.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Tang thầm (quả Dâu tằm chín) có tác dụng gì?',
        lua_chon: ['Bổ âm dưỡng huyết, sinh tân nhuận tràng', 'Táo thấp hóa đàm', 'Phát tán phong hàn', 'Hồi dương cứu nghịch'],
        dap_an: 0,
        giai_thich: 'Quả dâu chín vị ngọt chua mát, bồi bổ huyết dịch, trị táo bón do âm hư.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Đan bì (mẫu đơn bì) có công năng chủ yếu nào?',
        lua_chon: ['Thanh nhiệt lương huyết, hoạt huyết tán ứ', 'Ôn trung khư hàn', 'Bổ khí ích tỳ', 'Liễm hãn chỉ hãn'],
        dap_an: 0,
        giai_thich: 'Đan bì đắng cay mát, thanh sức hỏa ẩn trong huyết và giải tỏa các mảng huyết ứ.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Xa tiền thảo (cây Mã đề) khác Xa tiền tử (hạt) ở điểm nào?',
        lua_chon: [
            'Xa tiền thảo (toàn cây) tác dụng thanh nhiệt giải độc và can hỏa mạnh hơn; Xa tiền tử (hạt) thiên về lợi thủy thông lâm hơn',
            'Hoàn toàn giống nhau',
            'Xa tiền thảo có tính nóng',
            'Xa tiền tử dùng bổ âm'
        ],
        dap_an: 0,
        giai_thich: 'Toàn cây mã đề giải độc tiêu viêm tốt, hạt tập trung lực thẩm thấp lợi niệu.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Địa cốt bì là vỏ rễ của cây nào và có tác dụng gì?',
        lua_chon: ['Vỏ rễ cây Câu kỷ; thanh hư nhiệt, lương huyết (chữa sốt về chiều do âm hư)', 'Vỏ cây Dâu; chữa ho', 'Vỏ cây Quýt; chữa đàm', 'Vỏ cây Nhãn; chữa mất ngủ'],
        dap_an: 0,
        giai_thich: 'Địa cốt bì ngọt đắng tính mát, chuyên lui chứng sốt hấp trong xương (cốt chưng) do âm hư.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Đại hoàng có tác dụng chính nào trong nhóm Tả hạ?',
        lua_chon: ['Tả nhiệt通 tiện, thanh hỏa giải độc, hoạt huyết khư ứ', 'Nhuận tràng ôn dung', 'Bổ tỳ止 tả', 'Tuyên phế chỉ khái'],
        dap_an: 0,
        giai_thich: 'Đại hoàng đắng lạnh, là vị thuốc xổ xả nhiệt tích dồn đọng mạnh hàng đầu.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Mang tiêu (muối Natri sulfat thiên nhiên) thường phối hợp với Đại hoàng để làm gì?',
        lua_chon: ['Nhuận khô, mền khối phân cứng (nhuyễn kiên) để dễ tống ra ngoài', 'Bổ khí', 'Cầm tiêu chảy', 'Bổ thận'],
        dap_an: 0,
        giai_thich: 'Mang tiêu mặn lạnh hút nước làm mềm khối táo kết phân khô cứng ở đại tràng.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Bồ công anh ngoài thanh nhiệt giải độc còn đặc trị bệnh lý nào ở phụ nữ?',
        lua_chon: ['Nhũ ung (viêm tắc tuyến vú, sưng đau vú)', 'Rong kinh', 'Sa tử cung', 'Ốm nghén'],
        dap_an: 0,
        giai_thich: 'Bồ công anh là vị thuốc kinh điển trị viêm sưng tắc tia sữa, áp xe vú.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Tía tô (Tô diệp) có tác dụng gì cho phụ nữ mang thai?',
        lua_chon: ['Hành khí an thai, giảm ốm nghén nôn mửa', 'Gây sảy thai', 'Bổ huyết tuyệt đối', 'Thanh tỳ hỏa'],
        dap_an: 0,
        giai_thich: 'Tía tô cay ấm lý khí, giúp làm yên thai trệ, giảm cảm giác nôn nao nghén.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Kinh giới có đặc tính phát tán thế nào?',
        lua_chon: ['Tính ấm ôn hòa, chữa được cả phong hàn và phong nhiệt, sao cháy có tác dụng cầm máu', 'Tính rất lạnh', 'Chỉ chữa bệnh mạn tính', 'Gây độc cao'],
        dap_an: 0,
        giai_thich: 'Kinh giới cay ấm nhẹ, dùng giải cảm rất an toàn và Kinh giới tuệ sao đen (kinh giới thán) dùng chỉ huyết.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Cỏ tranh (Bạch mao căn) chuyên trị triệu chứng nào?',
        lua_chon: ['Thanh nhiệt lương huyết, lợi tiểu (chữa tiểu ra máu, chảy máu cam do nhiệt)', 'Ôn thận trợ dương', 'Táo thấp hóa đàm', 'Sơ can giải uất'],
        dap_an: 0,
        giai_thich: 'Rễ cỏ tranh ngọt mát, thanh mát máu và lợi tiểu, chữa các chứng nôn ra máu, đái ra máu.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Táo nhân (Toan táo nhân) phối hợp với Viễn chí, Phục linh nhằm mục đích gì?',
        lua_chon: ['Tăng cường hiệu quả dưỡng tâm an thần, trị mất ngủ lo âu', 'Tăng tác dụng tẩy xổ', 'Tăng tác dụng hạ sốt', 'Trị tiêu chảy'],
        dap_an: 0,
        giai_thich: 'Sự kết hợp này giúp vừa bổ tâm huyết vừa trừ đàm nhiễu tâm trí, mang lại giấc ngủ sâu.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Chứng "Hen suyễn" thể Phong hàn (Phế hàn ho suyễn) nên dùng vị thuốc thảo dược nào?',
        lua_chon: ['Ma hoàng, Hạnh nhân, Tía tô', 'Hoàng liên, Chi tử', 'Thục địa, Quy bản', 'Đại hoàng, Mang tiêu'],
        dap_an: 0,
        giai_thich: 'Ma hoàng kết hợp Hạnh nhân ôn phế tán hàn, tuyên thông khí phế giúp cắt cơn suyễn.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Chứng "Nhĩ minh / Nhĩ lung" (ù tai, điếc tai) do Thận âm hư nên chọn phương dược nào?',
        lua_chon: ['Lục vị địa hoàng hoàn gia Ngũ vị, Từ đá (Kỷ cúc địa hoàng / Nhĩ mông hoàn)', 'Bình vị tán', 'Ma hoàng thang', 'Bát chính tán'],
        dap_an: 0,
        giai_thich: 'Bổ thận âm kết hợp các vị dẫn thuốc lên tai giúp phục hồi thính lực do thận hư.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Khương hoàng (Củ nghệ vàng) có hoạt chất Curcumin có công năng gì?',
        lua_chon: ['Hành khí phá huyết, thông kinh chỉ thống, làm lành vết loét dạ dày', 'Bổ thận tráng dương', 'Phát tán phong hàn', 'Nhuận tràng sáp trĩ'],
        dap_an: 0,
        giai_thich: 'Nghệ vàng cay đắng ấm, làm tan máu ứ, chống viêm loét dạ dày và mờ sẹo.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Ngũ gia bì có công dụng chính là gì?',
        lua_chon: ['Khư phong thấp, bổ Can Thận, mạnh gân xương, giảm mệt mỏi', 'Thanh nhiệt giải độc', 'Nhuận phế chỉ khái', 'Lương huyế chỉ huyết'],
        dap_an: 0,
        giai_thich: 'Ngũ gia bì cay đắng ấm, làm khỏe gân xương, trừ đau nhức khớp ở người già.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Xuyên bối mẫu khác Thổ bối mẫu ở điểm nào?',
        lua_chon: [
            'Xuyên bối mẫu tư âm nhuận Phế chỉ ho mạnh hơn; Thổ bối mẫu thanh nhiệt giải độc tán kết mạnh hơn',
            'Hoàn toàn giống nhau',
            'Xuyên bối mẫu có tính nóng',
            'Thổ bối mẫu chuyên dùng bổ thận'
        ],
        dap_an: 0,
        giai_thich: 'Xuyên bối mẫu đắt tiền hơn, mát nhuận trị ho âm hư; Thổ bối mẫu chuyên trị mụn nhọt áp xe.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Cát cánh có tác dụng đặc biệt nào đối với hệ hô hấp?',
        lua_chon: ['Tuyên Phế, khạc đờm, lợi họng, DẪN THUỐC ĐI LÊN VÙNG THƯỢNG TIÊU (Phế)', 'Giáng khí xuống hạ tiêu', 'Nhuận tràng通 tiện', 'Bổ thận cố tinh'],
        dap_an: 0,
        giai_thich: 'Cát cánh là vị thuốc "Thăng提" đưa dược lực của bài thuốc đi hướng lên tạng Phế và vùng họng.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Mộc thông có chống chỉ định nào quan trọng?',
        lua_chon: ['Phụ nữ có thai (dễ gây sảy thai/kích thích tử cung) và người Thận hư không có thấp nhiệt', 'Người ho suyễn', 'Người táo bón', 'Người mất ngủ'],
        dap_an: 0,
        giai_thich: 'Mộc thông thông lợi tác dụng mạnh, cấm dùng cho thai phụ để tránh nguy cơ sảy thai.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Hạt sen (Liên tử) có công năng chủ yếu nào?',
        lua_chon: ['Kiện Tỳ chỉ tả, dưỡng Tâm an thần, ích Thận cố tinh', 'Thanh nhiệt giải độc', 'Hoạt huyết tán ứ', 'Phát tán phong hàn'],
        dap_an: 0,
        giai_thich: 'Hạt sen vị ngọt tính bình, bổ cả 3 tạng Tỳ, Tâm, Thận.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Tâm sen (Liên tử tâm) có vị đắng, tính dính lạnh, chuyên trị triệu chứng nào?',
        lua_chon: ['Thanh Tâm hỏa, trấn an thần, chữa mất ngủ do Tâm hỏa nhiệt phiền rạo rực', 'Bổ tỳ hư tiêu chảy', 'Trị ho do phế hàn', 'Bổ thận dương'],
        dap_an: 0,
        giai_thich: 'Tim sen đắng lạnh thanh tâm hỏa cực mạnh, hạ huyết áp nhẹ và giúp ngủ ngon.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Sa nhân khi sắc thuốc YHCT cần chú ý kỹ thuật nào?',
        lua_chon: ['Nên đập dập và SẮC SAU (Hậu hạ) gần lúc kết thúc để tránh mất tinh dầu', 'Sắc trước 1 giờ', 'Nướng cháy đen trước khi sắc', 'Hầm chung với kim loại'],
        dap_an: 0,
        giai_thich: 'Sa nhân giàu tinh dầu thơm dễ bay hơi nên cho vào sau khi sắc thuốc gần xong (5-10 phút cuối).'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Chứng "Khớp xương sưng nóng đỏ đau cấp tính" theo YHCT thuộc thể bệnh nào?',
        lua_chon: ['Phong nhiệt thấp tý (Nhiệt tý)', 'Phong hàn thấp tý (Hàn tý)', 'Can Thận hư tý', 'Khí huyết hư tý'],
        dap_an: 0,
        giai_thich: 'Đau khớp có đặc tính sưng, nóng, đỏ là do nhiệt tà kết hợp phong thấp (Nhiệt tý).'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Chứng "Đau khớp lạnh tăng, gặp ấm dễ chịu, không sưng đỏ" thuộc thể bệnh nào?',
        lua_chon: ['Phong hàn thấp tý (Hàn tý)', 'Phong nhiệt thấp tý', 'Âm hư hỏa thịnh', 'Thực nhiệt nội kết'],
        dap_an: 0,
        giai_thich: 'Hàn tà ngưng trệ gây đau dữ dội, lạnh thì đau tăng, ấm thì dễ chịu.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Bạch mao căn là bộ phận nào của cây Cỏ tranh?',
        lua_chon: ['Rễ củ sống khô', 'Lá tươi', 'Hoa', 'Hạt'],
        dap_an: 0,
        giai_thich: 'Bạch mao căn là phần thân rễ màu trắng ngà của cây cỏ tranh.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Quế chi có tác dụng "Thông dương hóa khí" hỗ trợ điều trị chứng gì?',
        lua_chon: ['Thủy thũng, ứ đọng dịch thể do dương khí không hóa được thủy', 'Sốt cao co giật', 'Mất máu cấp', 'Nhiệt lỵ'],
        dap_an: 0,
        giai_thich: 'Quế chi ôn thông dương khí giúp Bàng quang hóa khí bài tiết nước tiểu tiêu phù.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị thuốc Bạch thược khi phối hợp với Cam thảo (Thược dược cam thảo thang) có tác dụng gì nổi tiếng?',
        lua_chon: ['Nhuận can chỉ thống, giảm co thắt cơ trôi/cơ xương gây đau bụng, đau chân', 'Tẩy xổ phân khô', 'Hạ sốt cao', 'Gây nôn lập tức'],
        dap_an: 0,
        giai_thich: 'Sự kết hợp Chua (Thược dược) + Ngọt (Cam thảo) hóa Âm, làm dịu gân cơ và dứt cơn co thắt đau bụng.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Khái niệm "Thất ngôn" hay "Tính năng dược liệu" bao gồm các yếu tố nào?',
        lua_chon: ['Tứ khí, Ngũ vị, Thăng giáng phù trầm, Quy kinh, Độc tính', 'Biểu, Lý, Hàn, Nhiệt', 'Hãn, Thổ, Hạ, Hòa', 'Tâm, Can, Tỳ, Phế'],
        dap_an: 0,
        giai_thich: 'Tính năng vị thuốc YHCT được quy định bởi Khí (tính), Vị, Hướng tác dụng (thăng giáng phù trầm) và Kinh lạc đi vào (quy kinh).'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Tứ khí (4 tính chất của vị thuốc) gồm những tính nào?',
        lua_chon: ['Hàn (Lạnh), Nhiệt (Nóng), Ôn (Ấm), Lương (Mát)', 'Chua, Cay, Ngọt, Đắng', 'Thăng, Giáng, Phù, Trầm', 'Âm, Dương, Biểu, Lý'],
        dap_an: 0,
        giai_thich: 'Tứ khí phản ánh mức độ ảnh hưởng nhiệt độ sinh lý của thuốc lên cơ thể: Hàn - Lương (thuộc Âm), Nhiệt - Ôn (thuộc Dương).'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Ngũ vị (5 vị của vị thuốc) bao gồm:',
        lua_chon: ['Tân (Cay), Cam (Ngọt), Khổ (Đắng), Toan (Chua), Hàm (Mặn)', 'Hàn, Nhiệt, Ôn, Lương, Bình', 'Xanh, Đỏ, Vàng, Trắng, Đen', 'Phong, Hàn, Thấp, Táo, Hỏa'],
        dap_an: 0,
        giai_thich: 'Ngũ vị đại diện cho 5 hương vị và tác dụng sinh lý tương ứng của dược liệu.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị CAY (Tân) của vị thuốc thường có tác dụng dược lý gì?',
        lua_chon: ['Phát tán, hành khí, hành huyết', 'Thu sáp, liễm hãn', 'Nhuận tràng, bổ dưỡng', 'Thanh nhiệt, tả hỏa'],
        dap_an: 0,
        giai_thich: 'Vị cay làm lưu thông khí huyết, phát tán ngoại tà ra ngoài.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị NGỌT (Cam) của vị thuốc thường có tác dụng gì?',
        lua_chon: ['Bồi bổ, hòa hoãn, giảm đau', 'Phát hãn giải biểu', 'Táo thấp tả hạ', 'Rút mủ tán kết'],
        dap_an: 0,
        giai_thich: 'Vị ngọt giúp bổ dưỡng cơ thể suy nhược, hòa hoãn tính dược và giảm co thắt đau.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị ĐẮNG (Khổ) của vị thuốc thường có tác dụng gì?',
        lua_chon: ['Thanh nhiệt, táo thấp, tả hỏa, giáng nghịch', 'Bổ khí thăng dương', 'Thu hãm cố sáp', 'Nhuận tràng'],
        dap_an: 0,
        giai_thich: 'Vị đắng giúp làm khô thấp đọng (táo thấp) và hạ hỏa sốt (thanh nhiệt tả hỏa).'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị CHUA (Toan) của vị thuốc thường có tác dụng gì?',
        lua_chon: ['Thu lượm, cố sáp, liễm hãn, chỉ tả (giữ không cho thất thoát)', 'Phát tán giải biểu', 'Tẩy xổ tích trệ', 'Hành khí chỉ thống'],
        dap_an: 0,
        giai_thich: 'Vị chua có tính chất co rút, giữ chặt tân dịch, mồ hôi, tinh khí không bị thoát ra ngoài.'
    },
    {
        category: 'duochoc_benhhoc',
        cau_hoi: 'Vị MẶN (Hàm) của vị thuốc thường có tác dụng gì?',
        lua_chon: ['Nhuyễn kiên (làm mềm khối cứng), tán kết, nhuận tràng', 'Phát tán phong hàn', 'Liễm hãn sáp tinh', 'Bình suyễn chỉ khái'],
        dap_an: 0,
        giai_thich: 'Vị mặn đi vào kinh Thận, có tác dụng làm mềm các khối u hạch cứng và thông nếp phân táo.'
    },
];
    window.questionsData = [
    ...questionsDataPart1,
    ...questionsDataPart2,
    ...questionsDataPart3,
    ...questionsDataPart4,
    ...questionsDataPart5
];



