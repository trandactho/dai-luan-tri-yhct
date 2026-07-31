const questionsDataPart1 = [
   // ==================== LÝ LUẬN CƠ BẢN ====================
    { category: 'lyluan', cau_hoi: 'Theo học thuyết Ngũ hành, tạng Can thuộc hành nào?', lua_chon: ['Mộc', 'Hỏa', 'Thổ', 'Kim'], dap_an: 0, giai_thich: 'Tạng Can ứng với mùa xuân, màu xanh, có đặc tính thăng phát nên thuộc hành Mộc.'
    },
    { category: 'lyluan', cau_hoi: 'Tạng nào chủ về vận hóa thủy cốc và thủy thấp?', lua_chon: ['Tâm', 'Can', 'Tỳ', 'Phế'], dap_an: 2, giai_thich: 'Tỳ chủ vận hóa đồ ăn thức uống (thủy cốc) và vận hành, phân bố dịch thể (thủy thấp).'
    },
    { category: 'lyluan', cau_hoi: 'Quan hệ tương sinh nào sau đây là ĐÚNG trong Ngũ hành?', lua_chon: ['Mộc sinh Hỏa', 'Hỏa sinh Kim', 'Kim sinh Mộc', 'Thủy sinh Thổ'], dap_an: 0, giai_thich: 'Quy luật tương sinh: Mộc sinh Hỏa, Hỏa sinh Thổ, Thổ sinh Kim, Kim sinh Thủy, Thủy sinh Mộc.'
    },
    { category: 'lyluan', cau_hoi: 'Tạng Thận có chức năng chủ yếu nào sau đây?', lua_chon: ['Chủ tàng huyết', 'Chủ tàng tinh, chủ thủy', 'Chủ thống huyết', 'Chủ tuyên phát túc giáng'], dap_an: 1, giai_thich: 'Thận tàng trữ tinh tiên thiên/hậu thiên và chủ trì việc chuyển hóa, phân bố nước (thủy) trong cơ thể.'
    },
    { category: 'lyluan', cau_hoi: 'Loại khí nào có vai trò bảo vệ bề mặt cơ thể chống ngoại tà?', lua_chon: ['Nguyên khí', 'Tông khí', 'Dinh khí', 'Vệ khí'], dap_an: 3, giai_thich: 'Vệ khí vận hành ngoài lòng mạch, bảo vệ bề mặt da thịt và chống lại sự xâm nhập của tà khí.'
    },
    { category: 'lyluan', cau_hoi: 'Tạng Tâm chủ về yếu tố nào?', lua_chon: ['Cân cơ', 'Huyết mạch và thần minh', 'Bì mao', 'Cơ thịt'], dap_an: 1, giai_thich: 'Tâm thúc đẩy huyết lưu thông trong lòng mạch và làm chủ các hoạt động tinh thần, tư duy (thần minh).'
    },
    { category: 'lyluan', cau_hoi: 'Trong học thuyết Ngũ hành, Thổ khắc hành nào?', lua_chon: ['Mộc', 'Hỏa', 'Thủy', 'Kim'], dap_an: 2, giai_thich: 'Quy luật tương khắc: Thổ khắc Thủy (đất ngăn đê giữ nước).'
    },
    { category: 'lyluan', cau_hoi: 'Khái niệm "Tạng phủ" trong YHCT bao gồm:', lua_chon: ['5 tạng, 6 phủ, phủ kỳ hằng', '6 tạng, 5 phủ', '4 tạng, 4 phủ', '5 tạng, 5 phủ'], dap_an: 0, giai_thich: 'Hệ thống gồm Ngũ tạng (Tâm, Can, Tỳ, Phế, Thận), Lục phủ (Đởm, Vị, Tiểu trường, Đại trường, Bàng quang, Tam tiêu) và Phủ kỳ hằng.'
    },
    { category: 'lyluan', cau_hoi: 'Biểu hiện nào sau đây thuộc thuộc tính Âm?', lua_chon: ['Hưng phấn, vận động', 'Nhiệt, hướng lên', 'Tĩnh, lạnh, hướng xuống', 'Sáng chói, nhanh'], dap_an: 2, giai_thich: 'Thuộc tính Âm bao gồm các đặc tính: tĩnh lặng, lạnh, ức chế, hướng xuống dưới và vào bên trong.'
    },
    { category: 'lyluan', cau_hoi: 'Tạng Phế khai khiếu ra đâu?', lua_chon: ['Mắt', 'Tai', 'Mũi', 'Miệng'], dap_an: 2, giai_thich: 'Phế làm chủ hô hấp, phế khí thông ra mũi nên Phế khai khiếu ra mũi.'
    },
    { category: 'lyluan', cau_hoi: 'Trong học thuyết Ngũ hành, tạng Can khai khiếu ra đâu?', lua_chon: ['Mũi', 'Mắt', 'Tai', 'Miệng'], dap_an: 1, giai_thich: 'Tạng Can tàng huyết, tinh khí của Can đi lên nuôi dưỡng mắt nên Can khai khiếu ra mắt.'
    },
    { category: 'lyluan', cau_hoi: 'Tình chí "Nộ" (giận dữ quá độ) gây ảnh hưởng xấu nhất đến tạng nào?', lua_chon: ['Tâm', 'Can', 'Tỳ', 'Thận'], dap_an: 1, giai_thich: 'Giận dữ (Nộ) làm Can khí bốc ngược lên trên, trực tiếp tổn thương tạng Can (Nộ thương Can).'
    },
    { category: 'lyluan', cau_hoi: 'Loại khí nào chảy trong lòng mạch, có vai trò sinh hóa ra Huyết và nuôi dưỡng cơ thể?', lua_chon: ['Vệ khí', 'Tông khí', 'Dinh khí', 'Nguyên khí'], dap_an: 2, giai_thich: 'Dinh khí do Tỳ Vị vận hóa từ tinh hoa thủy cốc, đi trong lòng mạch để hóa sinh ra Huyết và nuôi dưỡng toàn thân.'
    },
    { category: 'lyluan', cau_hoi: 'Tạng nào chủ trì việc "nạp khí" trong quá trình hô hấp của cơ thể?', lua_chon: ['Phế', 'Thận', 'Tỳ', 'Tâm'], dap_an: 1, giai_thich: 'Phế hít khí vào nhưng Thận phải thu nạp, bắt giữ khí xuống dưới để hô hấp được sâu lắng.'
    },
    { category: 'lyluan', cau_hoi: 'Mạch Nhâm có vai trò gì trong hệ thống Kỳ kinh bát mạch?', lua_chon: ['Bể của các kinh âm', 'Bể của các kinh dương', 'Bể của huyết hải', 'Điều hòa khí toàn thân'], dap_an: 0, giai_thich: 'Mạch Nhâm đi ở mặt trước cơ thể, hội tụ khí huyết của tất cả các kinh âm nên gọi là "Âm kinh chi hải".'
    },
    { category: 'lyluan', cau_hoi: 'Mạch Đốc đóng vai trò gì trong hệ thống Kỳ kinh bát mạch?', lua_chon: ['Thống quản tất cả kinh âm', 'Thống quản tất cả kinh dương', 'Bể của thủy cốc', 'Chủ về vinh vệ'], dap_an: 1, giai_thich: 'Mạch Đốc chạy dọc cột sống sau lưng, hội tụ tất cả kinh dương nên gọi là "Dương kinh chi hải".'
    },
    { category: 'lyluan', cau_hoi: 'Tình chí "Hỷ" (vui mừng quá độ) làm hại tạng nào?', lua_chon: ['Can', 'Tâm', 'Tỳ', 'Phế'], dap_an: 1, giai_thich: 'Vui mừng quá mức khiến tâm khí hoãn giải, thần khí bị tán loạn (Hỷ thương Tâm).'
    },
    { category: 'lyluan', cau_hoi: 'Tình chí "Tư" (lo nghĩ nhiều, kéo dài) dễ gây tổn thương tạng nào?', lua_chon: ['Tỳ', 'Thận', 'Tâm', 'Phế'], dap_an: 0, giai_thich: 'Lo nghĩ nhiều làm cho tỳ khí bị uất trệ, ảnh hưởng đến chức năng vận hóa đồ ăn (Tư thương Tỳ).'
    },
    { category: 'lyluan', cau_hoi: 'Tạng Tỳ tương ứng với vị nào trong Ngũ vị?', lua_chon: ['Chua', 'Đắng', 'Ngọt', 'Cay'], dap_an: 2, giai_thich: 'Tỳ thuộc hành Thổ, tương ứng với vị ngọt (Cam).'
    },
    { category: 'lyluan', cau_hoi: 'Tạng Phế tương ứng với màu sắc nào trong Ngũ sắc?', lua_chon: ['Xanh', 'Đỏ', 'Trắng', 'Đen'], dap_an: 2, giai_thich: 'Phế thuộc hành Kim, tương ứng với màu trắng.'
    },
    { category: 'lyluan', cau_hoi: 'Lục dâm (6 nguyên nhân gây bệnh bên ngoài) bao gồm yếu tố nào?', lua_chon: ['Phong, Hàn, Thử, Thấp, Táo, Hỏa', 'Hỷ, Nộ, Ưu, Tư, Bi, Khủng', 'Đàm, Ứ, Thấp, Hàn, Nhiệt, Phong', 'Tâm, Can, Tỳ, Phế, Thận, Đởm'], dap_an: 0, giai_thich: 'Lục dâm bao gồm 6 yếu tố thời tiết khi biến đổi bất thường gây bệnh: Gió, Lạnh, Nắng, Ẩm, Khô, Nóng.'
    },
    { category: 'lyluan', cau_hoi: 'Tà khí nào được xem là "bách bệnh chi thủy" (đứng đầu các bệnh) có đặc tính hay di động?', lua_chon: ['Hàn tà', 'Thấp tà', 'Phong tà', 'Táo tà'], dap_an: 2, giai_thich: 'Phong tà hay di động, biến hóa nhanh và thường đưa các tà khí khác xâm nhập cơ thể.'
    },
    { category: 'lyluan', cau_hoi: 'Đặc tính nổi bật của Thấp tà là gì?', lua_chon: ['Gây khô bốc lên trên', 'Nặng nề, dính trệ, hướng xuống', 'Di chuyển nhanh, biến hóa nhiều', 'Gây ngưng trệ, co rút'], dap_an: 1, giai_thich: 'Thấp tà mang thuộc tính Âm, gây bệnh xu hướng nặng nề (trọng), dính trệ (trệ) và kéo dài.'
    },
    { category: 'lyluan', cau_hoi: 'Phủ nào có quan hệ Biểu - Lý trực tiếp với tạng Tâm?', lua_chon: ['Đại trường', 'Tiểu trường', 'Vị', 'Bàng quang'], dap_an: 1, giai_thich: 'Tâm (tạng) và Tiểu trường (phủ) có đường kinh quan hệ Biểu - Lý qua lại.'
    },
    { category: 'lyluan', cau_hoi: 'Phủ nào có quan hệ Biểu - Lý trực tiếp với tạng Can?', lua_chon: ['Đởm', 'Vị', 'Tam tiêu', 'Bàng quang'], dap_an: 0, giai_thich: 'Can thuộc tạng Âm, Đởm thuộc phủ Dương, hai cơ quan có quan hệ Biểu - Lý.'
    },
    { category: 'lyluan', cau_hoi: 'Phủ nào có quan hệ Biểu - Lý trực tiếp với tạng Phế?', lua_chon: ['Tiểu trường', 'Đại trường', 'Đởm', 'Tam tiêu'], dap_an: 1, giai_thich: 'Phế (tạng) quan hệ Biểu - Lý trực tiếp với Đại trường (phủ).'
    },
    { category: 'lyluan', cau_hoi: 'Phủ nào có quan hệ Biểu - Lý trực tiếp với tạng Thận?', lua_chon: ['Vị', 'Bàng quang', 'Đởm', 'Tiểu trường'], dap_an: 1, giai_thich: 'Thận quản lý việc tạo nước tiểu và Bàng quang chứa/bài tiết nước tiểu, hai tạng phủ có quan hệ Biểu - Lý.'
    },
    { category: 'lyluan', cau_hoi: 'Nguyên khí được tàng trữ ở đâu và có nguồn gốc chủ yếu từ đâu?', lua_chon: ['Tàng ở Thận, nguồn gốc bẩm sinh từ cha mẹ', 'Tàng ở Tỳ, nguồn gốc từ đồ ăn thức uống', 'Tàng ở Phế, nguồn gốc từ khí trời', 'Tàng ở Tâm, nguồn gốc từ huyết mạch'], dap_an: 0, giai_thich: 'Nguyên khí là gốc khí của cơ thể, do tinh tiên thiên cha mẹ truyền lại và tàng trữ tại Thận.'
    },
    { category: 'lyluan', cau_hoi: 'Tông khí tích tụ ở vùng nào trong cơ thể?', lua_chon: ['Trong lòng mạch', 'Ở vùng Đản trung (ngực)', 'Ở vùng Hạ tiêu', 'Ở bề mặt da thịt'], dap_an: 1, giai_thich: 'Tông khí hình thành do sự kết hợp giữa khí trời (Phế) và tinh hoa thủy cốc (Tỳ), tích tụ tại vùng ngực (Đản trung).'
    },
    { category: 'lyluan', cau_hoi: 'Tạng Thận vinh nhuận (biểu hiện ra ngoài) ở đâu?', lua_chon: ['Móng tay, móng chân', 'Tóc', 'Môi', 'Sắc mặt'], dap_an: 1, giai_thich: 'Thận tàng tinh, tinh sinh huyết, tóc là phần thừa của huyết nên sự suy thịnh của Thận thể hiện ra tóc.'
    },
    { category: 'lyluan', cau_hoi: 'Tạng Can vinh nhuận ra bộ phận nào?', lua_chon: ['Tóc', 'Móng tay, móng chân', 'Da và lông', 'Thịt'], dap_an: 1, giai_thich: 'Can chủ cân và tàng huyết, sự dồi dào của can huyết phản ánh rõ nhất ra móng tay, móng chân (trảo).'
    },
    { category: 'lyluan', cau_hoi: 'Tạng Tỳ vinh nhuận ra bộ phận nào?', lua_chon: ['Môi', 'Mắt', 'Mũi', 'Tai'], dap_an: 0, giai_thich: 'Tỳ khí nhu hòa, vận hóa tốt thì môi hồng hào nhuận ướt.'
    },
    { category: 'lyluan', cau_hoi: 'Tạng Tâm vinh nhuận ra đâu?', lua_chon: ['Sắc mặt', 'Tóc', 'Lông bì', 'Móng'], dap_an: 0, giai_thich: 'Tâm chủ huyết mạch, huyết dịch lưu thông tốt làm cho sắc mặt hồng hào tươi nhuận.'
    },
    { category: 'lyluan', cau_hoi: 'Theo Ngũ hành tương sinh, tạng Tâm là "mẹ" của tạng nào?', lua_chon: ['Can', 'Tỳ', 'Phế', 'Thận'], dap_an: 1, giai_thich: 'Tâm thuộc Hỏa, Tỳ thuộc Thổ; quy luật Hỏa sinh Thổ nên Tâm (Hỏa) là mẹ của Tỳ (Thổ).'
    },
    { category: 'lyluan', cau_hoi: 'Theo Ngũ hành tương sinh, tạng nào là "con" của tạng Phế?', lua_chon: ['Tâm', 'Can', 'Tỳ', 'Thận'], dap_an: 3, giai_thich: 'Phế thuộc Kim, Thận thuộc Thủy; Kim sinh Thủy nên Thận là con của Phế.'
    },
    { category: 'lyluan', cau_hoi: 'Hiện tượng tạng Can (Mộc) quá mạnh chèn ép tạng Tỳ (Thổ) thuộc quy luật nào?', lua_chon: ['Tương sinh', 'Tương khắc', 'Tương thừa', 'Tương vũ'], dap_an: 2, giai_thich: 'Tương thừa là sự khắc phạt quá mức của một hành quá mạnh lên hành bị khắc (Mộc thừa Thổ).'
    },
    { category: 'lyluan', cau_hoi: 'Khi tạng Tỳ (Thổ) suy yếu không khắc được Thủy, bị Thủy phản lại gọi là:', lua_chon: ['Tương thừa', 'Tương vũ', 'Tương sinh', 'Tương hòa'], dap_an: 1, giai_thich: 'Tương vũ là hiện tượng lấn áp ngược của hành bị khắc đối với hành vốn khắc nó do suy yếu.'
    },
    { category: 'lyluan', cau_hoi: 'Tạng nào chủ trị việc thống quản huyết (giữ huyết đi trong lòng mạch)?', lua_chon: ['Tâm', 'Tỳ', 'Can', 'Thận'], dap_an: 1, giai_thich: 'Tỳ thống huyết giúp cai quản và giữ huyết đi đúng đường trong mạch.'
    },
    { category: 'lyluan', cau_hoi: 'Tạng nào chủ tàng huyết và điều tiết lượng huyết trong cơ thể?', lua_chon: ['Tâm', 'Can', 'Tỳ', 'Phế'], dap_an: 1, giai_thich: 'Can chủ tàng huyết, lưu trữ máu khi nghỉ ngơi và phân bố máu khi hoạt động.'
    },
    { category: 'lyluan', cau_hoi: 'Tạng nào chủ về xương (cốt) và sinh tủy?', lua_chon: ['Thận', 'Tỳ', 'Can', 'Phế'], dap_an: 0, giai_thich: 'Thận tàng tinh, tinh hóa tủy nuôi dưỡng xương cốt (Thận chủ cốt sinh tủy).'
    },
    { category: 'lyluan', cau_hoi: 'Toàn bộ chất lỏng bình thường trong cơ thể (nước bọt, mồ hôi, dịch khớp...) gọi chung là:', lua_chon: ['Huyết', 'Tân dịch', 'Tinh', 'Khí'], dap_an: 1, giai_thich: 'Tân dịch là tên gọi chung của toàn bộ dịch thể bình thường có chức năng nuôi dưỡng.'
    },
    { category: 'lyluan', cau_hoi: 'Tà khí ngoại cảm nào xuất hiện vào mùa hè, gây sốt cao, vã mồ hôi, hao khí thương tân?', lua_chon: ['Phong tà', 'Thử tà', 'Táo tà', 'Hàn tà'], dap_an: 1, giai_thich: 'Thử tà gây bệnh về mùa hè, có đặc tính viêm nhiệt và tiêu hao khí, tân dịch nhanh chóng.'
    },
    { category: 'lyluan', cau_hoi: 'Tà khí nào gây bệnh mùa thu, có đặc tính làm tiêu hao tân dịch (khô mũi, họng, da)?', lua_chon: ['Táo tà', 'Thấp tà', 'Hàn tà', 'Thử tà'], dap_an: 0, giai_thich: 'Táo tà đặc trưng cho khí khô ráo mùa thu, hay gây chứng mất nước, khô nẻ.'
    },
    { category: 'lyluan', cau_hoi: 'Tình chí "Khủng" (sợ hãi quá độ) ảnh hưởng thế nào đến khí và tạng nào?', lua_chon: ['Hại Can, làm khí thượng', 'Hại Thận, làm khí hạ', 'Hại Tâm, làm khí hoãn', 'Hại Phế, làm khí tiêu'], dap_an: 1, giai_thich: 'Sợ hãi quá độ tổn thương tạng Thận, làm thận khí suy yếu hãm xuống (Khủng thương Thận, khí hạ).'
    },
    { category: 'lyluan', cau_hoi: 'Tình chí "Kinh" (hoảng sợ đột ngột) làm cho khí cơ diễn biến thế nào?', lua_chon: ['Khí thăng', 'Khí hạ', 'Khí loạn', 'Khí uất'], dap_an: 2, giai_thich: 'Hoảng sợ bất ngờ làm thần trí không định, khí cơ hỗn loạn (Kinh tắc khí loạn).'
    },
    { category: 'lyluan', cau_hoi: 'Phủ nào có chức năng chứa đựng dịch mật do Can tiết ra?', lua_chon: ['Vị', 'Đởm', 'Bàng quang', 'Tam tiêu'], dap_an: 1, giai_thich: 'Đởm là túi chứa dịch mật do Can sơ tiết ra để giúp bài tiết tiêu hóa.'
    },
    { category: 'lyluan', cau_hoi: 'Theo YHCT, "Phủ kỳ hằng" bao gồm các cơ quan nào?', lua_chon: ['Não, Tủy, Cốt, Mạch, Đởm, Tử cung', 'Tâm, Can, Tỳ, Phế, Thận, Đởm', 'Vị, Đại trường, Tiểu trường, Bàng quang, Tam tiêu', 'Mắt, Tai, Mũi, Lưỡi, Thân, Ý'], dap_an: 0, giai_thich: 'Phủ kỳ hằng gồm 6 cơ quan hình dáng giống phủ nhưng chức năng tàng trữ giống tạng.'
    },
    { category: 'lyluan', cau_hoi: 'Tạng Phế chủ về yếu tố nào sau đây?', lua_chon: ['Huyết mạch', 'Cơ thịt', 'Khí và chủ tuyên phát túc giáng', 'Tàng tinh'], dap_an: 2, giai_thich: 'Phế chủ toàn thân chi khí, vận hành khí qua hoạt động tuyên phát (ra ngoài) và túc giáng (xuống dưới).'
    },
    { category: 'lyluan', cau_hoi: 'Trong Âm Dương, hiện tượng "Âm thịnh" sẽ dẫn đến trạng thái lâm sàng nào?', lua_chon: ['Sinh Nhiệt', 'Sinh Hàn', 'Sinh Phong', 'Sinh Táo'], dap_an: 1, giai_thich: 'Âm thịnh tắc Hàn (Âm thừa sẽ phát sinh ra chứng thực hàn).'
    },
    { category: 'lyluan', cau_hoi: 'Khái niệm "Khí" trong YHCT KHÔNG bao gồm chức năng nào sau đây?', lua_chon: ['Thúc đẩy', 'Ôn húc (làm ấm)', 'Cố nhiếp', 'Trực tiếp cấu tạo nên cốt tủy'], dap_an: 3, giai_thich: 'Cốt tủy được sinh ra từ Thận tinh, không phải do chức năng trực tiếp của Khí.'
    },
    { category: 'lyluan', cau_hoi: 'Tạng Tâm khai khiếu ra đâu?', lua_chon: ['Lưỡi', 'Mắt', 'Tai', 'Mũi'], dap_an: 0, giai_thich: 'Tâm khai khiếu ra lưỡi (ảnh hưởng sắc lưỡi, cảm nhận vị giác và giọng nói).'
    },
    { category: 'lyluan', cau_hoi: 'Tạng Thận khai khiếu ra đâu?', lua_chon: ['Mắt', 'Mũi', 'Tai và nhị âm', 'Miệng'], dap_an: 2, giai_thich: 'Thận khai khiếu ra tai (sức nghe) và nhị âm (đường tiểu/sinh dục và đường đại tiện).'
    },
    { category: 'lyluan', cau_hoi: 'Tạng Tỳ khai khiếu ra đâu?', lua_chon: ['Lưỡi', 'Miệng', 'Mắt', 'Tai'], dap_an: 1, giai_thich: 'Tỳ khai khiếu ra miệng, quyết định cảm giác ăn ngon miệng và vị giác.'
    },
    { category: 'lyluan', cau_hoi: 'Tình chí "Ưu, Bi" (lo buồn, đau thương) gây tổn thương trực tiếp đến tạng nào?', lua_chon: ['Tâm', 'Can', 'Phế', 'Thận'], dap_an: 2, giai_thich: 'Lo buồn, đau thương kéo dài làm tiêu hao phế khí (Ưu bi thương Phế).'
    },
    { category: 'lyluan', cau_hoi: 'Tình chí "Nộ" (giận dữ) quá độ làm cho khí cơ diễn biến như thế nào?', lua_chon: ['Khí thượng (bốc lên)', 'Khí hạ (hạ xuống)', 'Khí hoãn (chậm lại)', 'Khí tiêu (hao mất)'], dap_an: 0, giai_thich: 'Giận dữ làm can khí xông ngược lên trên (Nộ tắc khí thượng).'
    },
    { category: 'lyluan', cau_hoi: 'Tình chí "Tư" (lo nghĩ quá độ) làm cho khí cơ biến hóa ra sao?', lua_chon: ['Khí loạn', 'Khí kết (trệ lại)', 'Khí hạ', 'Khí thượng'], dap_an: 1, giai_thich: 'Lo nghĩ quá mức làm khí cơ trệ ngưng lại ở Trung tiêu (Tư tắc khí kết).'
    },
    { category: 'lyluan', cau_hoi: 'Tình chí "Hỷ" (vui mừng quá độ) làm cho khí cơ thay đổi thế nào?', lua_chon: ['Khí thượng', 'Khí hoãn (tán loạn)', 'Khí tiêu', 'Khí kết'], dap_an: 1, giai_thich: 'Vui mừng quá trớn làm tâm khí bị hoãn giải, thần chí không tập trung (Hỷ tắc khí hoãn).'
    },
    { category: 'lyluan', cau_hoi: 'Tạng Tâm tương ứng với vị nào trong Ngũ vị?', lua_chon: ['Chua', 'Đắng', 'Ngọt', 'Mặn'], dap_an: 1, giai_thich: 'Tâm thuộc hành Hỏa, tương ứng với vị đắng (Khổ).'
    },
    { category: 'lyluan', cau_hoi: 'Tạng Can tương ứng với vị nào trong Ngũ vị?', lua_chon: ['Chua', 'Đắng', 'Cay', 'Mặn'], dap_an: 0, giai_thich: 'Can thuộc hành Mộc, tương ứng với vị chua (Toan).'
    },
    { category: 'lyluan', cau_hoi: 'Tạng Thận tương ứng với vị nào trong Ngũ vị?', lua_chon: ['Ngọt', 'Cay', 'Mặn', 'Chua'], dap_an: 2, giai_thich: 'Thận thuộc hành Thủy, tương ứng với vị mặn (Hàm).'
    },
    { category: 'lyluan', cau_hoi: 'Tạng Phế tương ứng với vị nào trong Ngũ vị?', lua_chon: ['Cay', 'Chua', 'Đắng', 'Ngọt'], dap_an: 0, giai_thich: 'Phế thuộc hành Kim, tương ứng với vị cay (Tân).'
    },
    { category: 'lyluan', cau_hoi: 'Tạng Can tương ứng với màu sắc nào trong Ngũ sắc?', lua_chon: ['Đỏ', 'Xanh', 'Vàng', 'Đen'], dap_an: 1, giai_thich: 'Can thuộc Mộc, tương ứng với màu xanh (Thanh).'
    },
    { category: 'lyluan', cau_hoi: 'Tạng Tâm tương ứng với màu sắc nào trong Ngũ sắc?', lua_chon: ['Đỏ', 'Trắng', 'Đen', 'Vàng'], dap_an: 0, giai_thich: 'Tâm thuộc Hỏa, tương ứng với màu đỏ (Xích).'
    },
    { category: 'lyluan', cau_hoi: 'Tạng Tỳ tương ứng với màu sắc nào trong Ngũ sắc?', lua_chon: ['Xanh', 'Vàng', 'Trắng', 'Đen'], dap_an: 1, giai_thich: 'Tỳ thuộc Thổ, tương ứng với màu vàng (Hoàng).'
    },
    { category: 'lyluan', cau_hoi: 'Tạng Thận tương ứng với màu sắc nào trong Ngũ sắc?', lua_chon: ['Xanh', 'Đỏ', 'Trắng', 'Đen'], dap_an: 3, giai_thich: 'Thận thuộc Thủy, tương ứng với màu đen (Hắc).'
    },
    { category: 'lyluan', cau_hoi: 'Phủ Vị có quan hệ Biểu - Lý trực tiếp với tạng nào?', lua_chon: ['Tỳ', 'Can', 'Thận', 'Phế'], dap_an: 0, giai_thich: 'Tỳ và Vị đều ở Trung tiêu, quan hệ Biểu - Lý (Tỳ chủ thăng, Vị chủ giáng).'
    },
    { category: 'lyluan', cau_hoi: 'Phủ nào đóng vai trò tiếp nhận thủy cốc từ Vị và "chủ phân biệt thanh trọc (trong đục)"?', lua_chon: ['Đại trường', 'Tiểu trường', 'Bàng quang', 'Tam tiêu'], dap_an: 1, giai_thich: 'Tiểu trường tiếp nhận thức ăn từ Vị, chắt lọc tinh hoa (thanh) đưa đi nuôi cơ thể và đẩy cặn bã (trọc) xuống Đại trường.'
    },
    { category: 'lyluan', cau_hoi: 'Phủ nào có chức năng truyền dẫn và tống cặn bã ra ngoài cơ thể?', lua_chon: ['Tiểu trường', 'Đại trường', 'Bàng quang', 'Vị'], dap_an: 1, giai_thich: 'Đại trường tiếp nhận chất thải từ Tiểu trường, hấp thu lại nước và bài tiết phân ra ngoài.'
    },
    { category: 'lyluan', cau_hoi: 'Quan hệ tương khắc nào sau đây là ĐÚNG trong học thuyết Ngũ hành?', lua_chon: ['Mộc khắc Thổ', 'Hỏa khắc Mộc', 'Kim khắc Thủy', 'Thổ khắc Hỏa'], dap_an: 0, giai_thich: 'Vòng tương khắc chuẩn: Mộc khắc Thổ, Thổ khắc Thủy, Thủy khắc Hỏa, Hỏa khắc Kim, Kim khắc Mộc.'
    },
    { category: 'lyluan', cau_hoi: 'Theo quy luật Ngũ hành tương sinh, hành Thủy là "con" của hành nào?', lua_chon: ['Mộc', 'Hỏa', 'Thổ', 'Kim'], dap_an: 3, giai_thich: 'Kim sinh Thủy, do đó Kim là Mẹ và Thủy là Con.'
    },
    { category: 'lyluan', cau_hoi: 'Trạng thái "Dương thịnh" trong thuyết Âm Dương thường dẫn đến biểu hiện lâm sàng nào?', lua_chon: ['Sinh Hàn', 'Sinh Nhiệt', 'Hao Âm', 'Trệ Khí'], dap_an: 1, giai_thich: 'Dương thịnh tắc Nhiệt (biểu hiện sốt cao, khát nước, thực nhiệt).'
    },
    { category: 'lyluan', cau_hoi: 'Hiện tượng "Dương hư" trong cơ thể thường gây ra trạng thái nào?', lua_chon: ['Nội nhiệt', 'Ngoại hàn (Sinh Hàn)', 'Ứ huyết', 'Khí uất'], dap_an: 1, giai_thich: 'Dương hư tắc Ngoại hàn (suy giảm chức năng làm ấm, sợ lạnh, tay chân lạnh).'
    },
    { category: 'lyluan', cau_hoi: 'Hiện tượng "Âm hư" thường dẫn đến trạng thái lâm sàng nào?', lua_chon: ['Nội nhiệt (Hư nhiệt)', 'Ngoại hàn', 'Khí trệ', 'Đàm thấp'], dap_an: 0, giai_thich: 'Âm hư tắc Nội nhiệt (phần âm giảm gây hỏa vượng, sốt về chiều, lòng bàn tay chân nóng).'
    },
    { category: 'lyluan', cau_hoi: 'Tạng Phế vinh nhuận ra bộ phận nào trên cơ thể?', lua_chon: ['Móng tay', 'Tóc', 'Da và lông (bì mao)', 'Môi'], dap_an: 2, giai_thich: 'Phế chủ bì mao, tuyên phát tân dịch nuôi dưỡng da và lông toàn thân.'
    },
    { category: 'lyluan', cau_hoi: 'Tạng Can chủ về thể hiện (thể) nào trong cơ thể?', lua_chon: ['Chủ cân (gân)', 'Chủ cơ thịt', 'Chủ cốt (xương)', 'Chủ mạch'], dap_an: 0, giai_thich: 'Can chủ cân (dây chằng và gân cơ duy trì vận động khớp).'
    },
    { category: 'lyluan', cau_hoi: 'Tạng Tỳ chủ về thể hiện nào trong cơ thể?', lua_chon: ['Chủ gân', 'Chủ cơ thịt và tứ chi', 'Chủ xương tủy', 'Chủ bì mao'], dap_an: 1, giai_thich: 'Tỳ vận hóa nuôi dưỡng cơ thịt (nhục) dồi dào và điều khiển hoạt động tứ chi.'
    },
    { category: 'lyluan', cau_hoi: 'Nguyên nhân gây bệnh bên trong cơ thể (Nội nhân) bao gồm yếu tố nào?', lua_chon: ['Lục dâm', 'Thất tình', 'Ăn uống bất điều', 'Trùng thú cắn'], dap_an: 1, giai_thich: 'Nội nhân là 7 thứ tình chí (Thất tình: Hỷ, Nộ, Ưu, Tư, Bi, Khủng, Kinh).'
    },
    { category: 'lyluan', cau_hoi: 'Nguyên nhân gây bệnh nào sau đây thuộc nhóm "Bất nội ngoại nhân"?', lua_chon: ['Phong, Hàn, Thử', 'Hỷ, Nộ, Ưu, Tư', 'Ăn uống quá độ, lao lực, chấn thương', 'Tâm, Can, Tỳ hư'], dap_an: 2, giai_thich: 'Bất nội ngoại nhân bao gồm ăn uống, mệt mỏi quá độ, chấn thương, trùng thú cắn.'
    },
    { category: 'lyluan', cau_hoi: 'Tà khí "Hàn" có đặc tính nổi bật nào sau đây?', lua_chon: ['Chủ ngưng trệ và thu dẫn (co rút)', 'Hay di động và biến hóa', 'Nặng nề dính trệ', 'Gây khô bốc lên'], dap_an: 0, giai_thich: 'Hàn tà có tính ngưng trệ (ngăn trở khí huyết gây đau) và thu dẫn (làm co rút gân cơ).'
    },
    { category: 'lyluan', cau_hoi: 'Tà khí "Hỏa" (Nhiệt tà) có đặc tính nổi bật nào?', lua_chon: ['Hướng xuống dưới', 'Hay ngưng trệ', 'Viêm nhiệt, hướng lên trên, hao khí thương tân', 'Chủ về ẩm thấp'], dap_an: 2, giai_thich: 'Hỏa tà thuộc Dương, tính viêm nhiệt bốc lên, đốt cháy tân dịch và hao tổn khí.'
    },
    { category: 'lyluan', cau_hoi: 'Chức năng "Tâm chủ thần minh" ám chỉ điều gì?', lua_chon: ['Quản lý vận động gân xương', 'Chủ quản hoạt động tinh thần, tư duy, ý thức', 'Tiết ra dịch mật', 'Nạp khí vào cơ thể'], dap_an: 1, giai_thich: 'Tâm chủ thần minh chịu trách nhiệm điều khiển toàn bộ tư duy, trí tuệ và cảm xúc con người.'
    },
    { category: 'lyluan', cau_hoi: 'Hệ thống "Bát cương" dùng trong chẩn đoán YHCT bao gồm 4 cặp quy cương nào?', lua_chon: ['Biểu - Lý, Hàn - Nhiệt, Hư - Thực, Âm - Dương', 'Tâm - Can - Tỳ - Phế', 'Phong - Hàn - Thấp - Nhiệt', 'Khí - Huyết - Tân - Dịch'], dap_an: 0, giai_thich: 'Bát cương gồm 8 quy cương: Biểu/Lý, Hàn/Nhiệt, Hư/Thực và Âm/Dương.'
    },
    { category: 'lyluan', cau_hoi: 'Mạch Xung trong Kỳ kinh bát mạch được coi là gì?', lua_chon: ['Bể của các kinh âm', 'Bể của các kinh dương', 'Huyết hải (Bể của huyết)', 'Bể của thủy cốc'], dap_an: 2, giai_thich: 'Mạch Xung là nơi tập trung khí huyết của 12 đường kinh chính nên gọi là Huyết hải.'
    },
    { category: 'lyluan', cau_hoi: 'Kỳ kinh nào trong Bát mạch có đường đi chạy vòng quanh eo lưng như sợi dây đai?', lua_chon: ['Mạch Nhâm', 'Mạch Đốc', 'Mạch Đải', 'Mạch Xung'], dap_an: 2, giai_thich: 'Mạch Đải đi ngang quanh thắt lưng, buộc thắt các đường kinh chạy dọc.'
    },
    { category: 'lyluan', cau_hoi: 'Tạng nào được Đông y tôn xưng là "Tiên thiên chi bản" (Gốc bẩm sinh của cơ thể)?', lua_chon: ['Tâm', 'Can', 'Tỳ', 'Thận'], dap_an: 3, giai_thich: 'Thận tàng tinh tiên thiên nhận từ bố mẹ, quyết định sự sống bẩm sinh.'
    },
    { category: 'lyluan', cau_hoi: 'Tạng nào được coi là "Hậu thiên chi bản" (Gốc nguồn sống sau khi sinh)?', lua_chon: ['Tỳ', 'Phế', 'Thận', 'Tâm'], dap_an: 0, giai_thich: 'Tỳ tiêu hóa thủy cốc sinh ra tinh khí hậu thiên nuôi cơ thể sau khi sinh.'
    },
    { category: 'lyluan', cau_hoi: 'Tạng Can được ví như vị quan nào trong cơ thể ("Thập nhị quan")?', lua_chon: ['Quân chủ chi quan', 'Tướng quân chi quan', 'Thương lẫm chi quan', 'Tác hoạt chi quan'], dap_an: 1, giai_thich: 'Can mưu lược, dũng mộng chống tà khí nên gọi là Tướng quân chi quan.'
    },
    { category: 'lyluan', cau_hoi: 'Tạng Tâm được ví như vị quan nào trong hệ thống tạng phủ?', lua_chon: ['Tướng quân chi quan', 'Quân chủ chi quan', 'Thần minh chi quan', 'Tỳ tướng chi quan'], dap_an: 1, giai_thich: 'Tâm giữ vai trò chỉ huy cao nhất toàn bộ cơ thể nên gọi là Quân chủ chi quan.'
    },
    { category: 'lyluan', cau_hoi: 'Theo YHCT, dịch tiết nào thuộc về tạng Phế (trong Ngũ dịch)?', lua_chon: ['Khấp (nước mắt)', 'Thế (nước mũi)', 'Tuyến (nước bọt trong)', 'Hãn (mồ hôi)'], dap_an: 1, giai_thich: 'Ngũ dịch: Tâm - mồ hôi, Can - nước mắt, Tỳ - nước bọt loãng, Phế - nước mũi, Thận - nước bọt đặc.'
    },
    { category: 'lyluan', cau_hoi: 'Mồ hôi (Hãn dịch) được coi là chất dịch liên quan trực tiếp đến tạng nào?', lua_chon: ['Tâm', 'Can', 'Thận', 'Tỳ'], dap_an: 0, giai_thich: 'Tâm chủ huyết mạch, "Hãn vi Tâm chi dịch" (Mồ hôi là dịch của tạng Tâm).'
    },
    { category: 'lyluan', cau_hoi: 'Tạng Thận làm chủ loại dịch tiết nào trong cơ thể (trong Ngũ dịch)?', lua_chon: ['Khấp (nước mắt)', 'Trĩ/Dãi (nước bọt đặc gốc lưỡi)', 'Thế (nước mũi)', 'Tuyến (nước bọt trong)'], dap_an: 1, giai_thich: 'Nước bọt đặc xuất phát từ gốc lưỡi (Trĩ/Dãi) thuộc tạng Thận quản lý.'
    },
    { category: 'lyluan', cau_hoi: 'Huyệt "Thái Xung" là Nguyên huyệt của kinh nào?', lua_chon: ['Túc thái âm Tỳ', 'Túc quyết âm Can', 'Túc thiếu âm Thận', 'Thủ thái âm Phế'], dap_an: 1, giai_thich: 'Thái Xung là Nguyên huyệt nằm trên đường kinh Túc quyết âm Can.'
    },
    { category: 'lyluan', cau_hoi: 'Theo Y học cổ truyền, tạng nào "chủ thăng", đưa các chất tinh hoa thủy cốc lên trên?', lua_chon: ['Can', 'Tỳ', 'Phế', 'Thận'], dap_an: 1, giai_thich: 'Tỳ khí chủ thăng, vận chuyển chất tinh hoa lên Phế để hóa sinh khí huyết.'
    },
    { category: 'lyluan', cau_hoi: 'Tạng Phế có đặc tính "chủ giáng", nghĩa là làm gì?', lua_chon: ['Đưa khí và tân dịch đi xuống dưới', 'Tàng trữ huyết', 'Chuyển hóa thức ăn', 'Nạp tinh khí'], dap_an: 0, giai_thich: 'Túc giáng là sự thanh lọc và phân bố khí, dịch thể xuôi dòng đi xuống dưới.'
    },
    { category: 'lyluan', cau_hoi: 'Yếu tố nào sau đây KHÔNG thuộc Thất tình (7 cảm xúc gây bệnh)?', lua_chon: ['Hỷ, Nộ', 'Ưu, Tư', 'Bi, Khủng, Kinh', 'Phong, Hàn'], dap_an: 3, giai_thich: 'Phong, Hàn là hai ngoại tà thuộc Lục dâm, không thuộc Thất tình.'
    },
    { category: 'lyluan', cau_hoi: 'Hành Mộc tương ứng với mùa nào trong Ngũ thời?', lua_chon: ['Mùa Xuân', 'Mùa Hạ', 'Mùa Thu', 'Mùa Đông'], dap_an: 0, giai_thich: 'Mộc tương ứng với mùa Xuân (sự sinh sôi, phát triển).'
    },
    { category: 'lyluan', cau_hoi: 'Hành Kim tương ứng với mùa nào trong Ngũ thời?', lua_chon: ['Mùa Xuân', 'Mùa Hạ', 'Mùa Thu', 'Mùa Đông'], dap_an: 2, giai_thich: 'Kim mang đặc tính mát mẻ, thu hái, ứng với mùa Thu.'
    },
    { category: 'lyluan', cau_hoi: 'Hành Thủy tương ứng với phương nào trong Ngũ phương?', lua_chon: ['Phương Đông', 'Phương Nam', 'Phương Tây', 'Phương Bắc'], dap_an: 3, giai_thich: 'Ngũ phương: Mộc - Đông, Hỏa - Nam, Kim - Tây, Thủy - Bắc, Thổ - Trung ương.'
    },
    { category: 'lyluan', cau_hoi: 'Hiện tượng "Phế Kim khắc Can Mộc" là thể hiện quy luật nào trong Ngũ hành?', lua_chon: ['Tương sinh', 'Tương khắc', 'Tương thừa', 'Tương vũ'], dap_an: 1, giai_thich: 'Đây là quan hệ tương khắc sinh lý bình thường giữa các hành trong Ngũ hành.'
    },
    { category: 'lyluan', cau_hoi: 'Khái niệm "Tâm bao lạc" (Màng ngoài tâm) có chức năng chính là gì?', lua_chon: ['Bảo vệ tạng Tâm chống lại tà khí', 'Chứa đựng dịch mật', 'Vận hóa thủy thấp', 'Tàng trữ tinh khí'], dap_an: 0, giai_thich: 'Tâm bao lạc bọc quanh tạng Tâm, gánh chịu ngoại tà thay cho tạng Tâm.'
    },
];

const questionsDataPart2 = [
    // ==================== PHƯƠNG TỄ HỌC ====================
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Tứ quân tử thang" gồm các vị thuốc nào?', lua_chon: [     'Nhân sâm, Bạch thuật, Phục linh, Cam thảo',     'Đương quy, Thục địa, Bạch thược, Xuyên khung',     'Hoàng kỳ, Nhân sâm, Phòng phong, Đương quy',     'Bạch thuật, Phục linh, Trạch tả, Trư linh' ], dap_an: 0, giai_thich: 'Tứ quân tử thang là bài thuốc cơ bản bổ khí gồm 4 vị: Nhân sâm (Quân), Bạch thuật (Thần), Phục linh (Tá), Cam thảo (Sứ).'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Tứ vật thang" có công dụng chính là gì?', lua_chon: ['Bổ khí', 'Bổ huyết', 'Bổ âm', 'Bổ dương'], dap_an: 1, giai_thich: 'Tứ vật thang (Khung, Quy, Thược, Địa) là bài thuốc cổ phương đầu bảng về bổ huyết và điều huyết.'
    },
    { category: 'phuongte', cau_hoi: 'Vị thuốc đóng vai trò chính, chữa nguyên nhân hoặc triệu chứng chính gọi là:', lua_chon: ['Quân', 'Thần', 'Tá', 'Sứ'], dap_an: 0, giai_thich: 'Trong cấu trúc phương tễ (Quân - Thần - Tá - Sứ), vị Quân giữ vai trò chủ chốt để giải quyết nguyên nhân/chứng bệnh chính.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Lục vị địa hoàng hoàn" có tác dụng chủ yếu là:', lua_chon: ['Bổ Thận dương', 'Bổ Thận âm', 'Sơ can giải uất', 'Thanh nhiệt giải độc'], dap_an: 1, giai_thich: 'Lục vị địa hoàng hoàn là bài thuốc kinh điển chuyên tư bổ Thận âm.'
    },
    { category: 'phuongte', cau_hoi: 'Thành phần bài thuốc "Bát trân thang" là kết hợp của 2 bài thuốc nào?', lua_chon: ['Tứ quân + Tứ vật', 'Lục vị + Bát vị', 'Tứ quân + Bát vị', 'Tứ vật + Lục vị'], dap_an: 0, giai_thich: 'Bát trân thang hợp thành từ Tứ quân tử thang (bổ khí) và Tứ vật thang (bổ huyết) để điều trị khí huyết lưỡng hư.'
    },
    { category: 'phuongte', cau_hoi: 'Vị thuốc "Sứ" trong cấu trúc bài thuốc YHCT có vai trò gì?', lua_chon: [     'Chữa triệu chứng phụ',     'Dẫn thuốc đến kinh bệnh hoặc điều hòa các vị thuốc',     'Giảm độc tính của bài thuốc',     'Tăng tác dụng của vị Quân' ], dap_an: 1, giai_thich: 'Vị Sứ đảm nhận vai trò dẫn dược tính đến đúng kinh bệnh (dẫn kinh) hoặc hòa hoãn các vị thuốc khác.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Tiêu dao tán" nổi tiếng với tác dụng nào?', lua_chon: ['Sơ can giải uất, kiện tỳ dưỡng huyết', 'Thanh nhiệt trừ thấp', 'Ôn trung tán hàn', 'Táo thấp hóa đàm'], dap_an: 0, giai_thich: 'Tiêu dao tán dùng điều trị chứng Can khí uất kết gây tỳ hư huyết kém.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Bạch hổ thang" dùng để điều trị chứng bệnh nào?', lua_chon: ['Biểu nhiệt', 'Khí phận thực nhiệt', 'Thận âm hư', 'Tỳ vị hư hàn'], dap_an: 1, giai_thich: 'Bạch hổ thang chữa chứng thực nhiệt ở khí phận với biểu hiện "Tứ đại": đại nhiệt, đại khát, đại hãn, mạch hồng đại.'
    },
    { category: 'phuongte', cau_hoi: 'Bài "An cung ngưu hoàng hoàn" thuộc nhóm phương tễ nào?', lua_chon: ['Thuốc Bổ', 'Thuốc Khai khiếu', 'Thuốc Giải biểu', 'Thuốc Trừ đàm'], dap_an: 1, giai_thich: 'An cung ngưu hoàng hoàn thuộc nhóm thuốc Lương khai (Khai khiếu thanh nhiệt), trị trúng phong thể bế nhiệt.'
    },
    { category: 'phuongte', cau_hoi: 'Bài "Bát vị địa hoàng hoàn" khác bài "Lục vị" ở chỗ thêm 2 vị thuốc nào?', lua_chon: ['Phụ tử, Nhục quế (hoặc Quế chi)', 'Nhân sâm, Hoàng kỳ', 'Đương quy, Xuyên khung', 'Mạch môn, Ngũ vị tử'], dap_an: 0, giai_thich: 'Bát vị địa hoàng hoàn gia thêm Phụ tử chế và Nhục quế (hoặc Quế chi) vào bài Lục vị để ôn bổ Thận dương.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Ma hoàng thang" gồm các vị thuốc nào?', lua_chon: [     'Ma hoàng, Quế chi, Hạnh nhân, Cam thảo',     'Ma hoàng, Hoàng kỳ, Bạch thuật, Cam thảo',     'Ma hoàng, Quế chi, Phòng phong, Khương hoạt',     'Ma hoàng, Tế tân, Phụ tử, Cam thảo' ], dap_an: 0, giai_thich: 'Ma hoàng thang gồm Ma hoàng, Quế chi, Hạnh nhân, Cam thảo, có tác dụng tân ôn giải biểu, phát hãn bình suyễn.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Quế chi thang" chủ trị chứng bệnh nào?', lua_chon: ['Ngoại cảm phong hàn biểu thực', 'Ngoại cảm phong hàn biểu hư (tự hãn)', 'Ngoại cảm phong nhiệt', 'Tỳ vị hư hàn'], dap_an: 1, giai_thich: 'Quế chi thang chữa ngoại cảm phong hàn thể biểu hư có triệu chứng sốt, sợ gió, vã mồ hôi (tự hãn).'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Bổ trung ích khí thang" do danh y nào sáng chế?', lua_chon: ['Trương Trọng Cảnh', 'Lý Đông Viên', 'Diệp Thiên Thủy', 'Trương Cảnh Nhạc'], dap_an: 1, giai_thich: 'Bài Bổ trung ích khí thang do Lý Đông Viên (người sáng lập trường phái Bổ thổ) biên soạn trong sách Tỳ Vị Luận.'
    },
    { category: 'phuongte', cau_hoi: 'Công dụng chính của bài thuốc "Quy tỳ thang" là gì?', lua_chon: ['Tư âm giáng hỏa, kiện tỳ', 'Bổ tâm tỳ, dưỡng huyết an thần', 'Sơ can giải uất, kiện tỳ', 'Bổ khí thăng dương, cố biểu'], dap_an: 1, giai_thich: 'Quy tỳ thang chuyên trị hội chứng Tâm Tỳ lưỡng hư gây mất ngủ, hồi hộp, hay quên, ăn kém.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Ngũ linh tán" có tác dụng chính là gì?', lua_chon: ['Lợi thủy thẩm thấp, ôn dương hóa khí', 'Thanh nhiệt lợi thấp, giải độc', 'Ôn trung tán hàn, chỉ thống', 'Táo thấp hóa đàm, hòa vị'], dap_an: 0, giai_thich: 'Ngũ linh tán (Trạch tả, Trư linh, Phục linh, Bạch thuật, Quế chi) giúp thông dương lợi thủy, trị thủy thũng, tiểu khó.'
    },
    { category: 'phuongte', cau_hoi: 'Tỷ lệ giữa Hoàng kỳ và Đương quy trong bài "Đương quy bổ huyết thang" là bao nhiêu?', lua_chon: ['1 : 1', '2 : 1', '5 : 1', '10 : 1'], dap_an: 2, giai_thich: 'Đương quy bổ huyết thang dùng Hoàng kỳ (5 phần - 30g) kết hợp Đương quy (1 phần - 6g) theo nguyên lý "khí sinh huyết".'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Tiểu sài hồ thang" thuộc nhóm phương tễ nào?', lua_chon: ['Giải biểu phương', 'Hòa giải phương', 'Tả hạ phương', 'Thanh nhiệt phương'], dap_an: 1, giai_thich: 'Tiểu sài hồ thang là bài thuốc hòa giải kinh Thiếu dương (bán biểu bán lý).'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Sinh mạch tán" gồm 3 vị thuốc nào?', lua_chon: ['Nhân sâm, Mạch môn, Ngũ vị tử', 'Nhân sâm, Mạch môn, Đương quy', 'Đương quy, Thục địa, Ngũ vị tử', 'Hoàng kỳ, Mạch môn, Nhân sâm'], dap_an: 0, giai_thich: 'Sinh mạch tán (Sâm, Mạch, Vị) có công năng ích khí sinh tân, liễm hãn dưỡng âm.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Bình vị tán" gồm các vị thuốc chính nào?', lua_chon: ['Thương truật, Hậu phác, Trần bì, Cam thảo', 'Bạch thuật, Phục linh, Trần bì, Cam thảo', 'Bán hạ, Trần bì, Phục linh, Cam thảo', 'Sơn tra, Thần khúc, Lai phục tử, Trần bì'], dap_an: 0, giai_thich: 'Bình vị tán gồm Thương truật, Hậu phác, Trần bì, Cam thảo, chuyên trị Tỳ vị thấp trệ, bụng đầy trướng.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Độc hoạt ký sinh thang" chủ trị chứng bệnh nào?', lua_chon: ['Phong hàn thấp tý kèm Can Thận hư, khí huyết giảm', 'Cấp tính đau khớp do phong nhiệt tý', 'Thủy thũng do Thận dương hư', 'Cảm mạo phong hàn thể biểu thực'], dap_an: 0, giai_thich: 'Độc hoạt ký sinh thang vừa khư phong trừ thấp, vừa bổ can thận và khí huyết cho bệnh nhân đau khớp mạn tính.'
    },
    { category: 'phuongte', cau_hoi: 'Trong cấu trúc phương tễ, vị thuốc "Thần" có vai trò gì?', lua_chon: ['Trực tiếp chữa nguyên nhân bệnh chính', 'Tăng cường tác dụng trị bệnh của vị Quân', 'Dẫn thuốc tới kinh bệnh', 'Giảm tác dụng phụ của vị Quân'], dap_an: 1, giai_thich: 'Vị Thần có tác dụng hỗ trợ, làm tăng hiệu quả điều trị của vị Quân hoặc chữa triệu chứng kèm theo.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Đại thừa khí thang" có tác dụng chủ yếu là:', lua_chon: ['Nhuận tràng thông tiện', 'Tuấn hạ nhiệt kết (tả hạ thực nhiệt tích trệ)', 'Ôn dương thông tiện', 'Tư âm thông tiện'], dap_an: 1, giai_thich: 'Đại thừa khí thang (Đại hoàng, Mang tiêu, Chỉ thực, Hậu phác) có tác dụng xổ mạnh (tuấn hạ) trị táo bón do thực nhiệt kết tụ ở Dương minh.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Đào hồng tứ vật thang" gia thêm 2 vị thuốc nào vào bài Tứ vật thang?', lua_chon: ['Đào nhân, Hồng hoa', 'Đan sâm, Hồng hoa', 'Đào nhân, Tam thất', 'Xuyên sơn giáp, Hồng hoa'], dap_an: 0, giai_thich: 'Bài thuốc gia Đào nhân và Hồng hoa vào Tứ vật thang để tăng cường tác dụng hoạt huyết khư ứ.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Long đởm tả can thang" dùng để điều trị chứng bệnh nào?', lua_chon: ['Can phong nội động', 'Can đởm thực hỏa thượng viêm / Hạ tiêu thấp nhiệt', 'Can huyết hư', 'Can tỳ bất hòa'], dap_an: 1, giai_thich: 'Long đởm tả can thang chuyên thanh tả Can đởm thực hỏa và thanh lợi thấp nhiệt ở hạ tiêu.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Nhị trần thang" là bài thuốc cơ bản điều trị chứng bệnh nào?', lua_chon: ['Khí hư', 'Đàm thấp nội trệ', 'Huyết ứ', 'Nhiệt độc'], dap_an: 1, giai_thich: 'Nhị trần thang (Bán hạ, Trần bì, Phục linh, Cam thảo) là phương tễ cơ bản tổ tông về táo thấp hóa đàm.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Phụ tử lý trung hoàn" có công dụng chính là gì?', lua_chon: ['Ôn trung khư hàn, kiện tỳ bổ khí', 'Ôn bổ Thận dương, điền tinh', 'Thanh nhiệt hoán tỳ', 'Sơ can kiện tỳ'], dap_an: 0, giai_thich: 'Phụ tử lý trung hoàn gia Phụ tử vào Lý trung hoàn nhằm tăng sức ôn trung khư hàn, trị Tỳ Vị hư hàn nặng.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Bán hạ hậu phác thang" chủ trị chứng bệnh nào sau đây?', lua_chon: ['Vị nhiệt nôn mửa', 'Mai hạch khí (khí uất đàm kết ở họng)', 'Khái huyết do Phế nhiệt', 'Tiêu hóa trệ tích'], dap_an: 1, giai_thich: 'Bán hạ hậu phác thang hành khí tán kết, giáng nghịch hóa đàm, trị Mai hạch khí (vướng họng khạc không ra nuốt không xuống).'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Tả quy hoàn" có công dụng chính là gì?', lua_chon: ['Tư âm bổ Thận, điền tinh ích tủy', 'Ôn bổ Thận dương', 'Sơ can giải uất', 'Thanh nhiệt lợi thấp'], dap_an: 0, giai_thich: 'Tả quy hoàn do Trương Cảnh Nhạc lập phương chuyên thuần tư bổ Thận âm, điền tinh ích tủy.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Hữu quy hoàn" có công dụng chính là gì?', lua_chon: ['Tư âm dưỡng huyết', 'Ôn bổ Thận dương, điền tinh bổ huyết', 'Thanh tả Thận hỏa', 'Kiện tỳ trừ thấp'], dap_an: 1, giai_thich: 'Hữu quy hoàn chuyên ôn bổ Thận dương, tăng cường Mệnh môn hỏa.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Hoàng liên giải độc thang" gồm các vị thuốc nào?', lua_chon: ['Hoàng liên, Hoàng cầm, Hoàng bá, Chi tử', 'Hoàng liên, Hoàng kỳ, Đương quy, Cam thảo', 'Hoàng liên, Bán hạ, Trần bì, Phục linh', 'Hoàng liên, Đại hoàng, Mãng tiêu, Cam thảo'], dap_an: 0, giai_thich: 'Hoàng liên giải độc thang gồm 4 vị đắng lạnh thanh nhiệt tả hỏa ở cả Tam tiêu.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Chân vũ thang" có công dụng chính là gì?', lua_chon: ['Ôn dương lợi thủy', 'Thanh nhiệt lợi thấp', 'Tư âm lợi thủy', 'Hành khí lợi thủy'], dap_an: 0, giai_thich: 'Chân vũ thang (Phụ tử, Bạch thuật, Phục linh, Thược dược, Sinh khương) dùng ôn Thận Tỳ dương để lợi thủy tiêu thũng.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Sài hồ sơ can tán" dùng để điều trị chứng bệnh nào?', lua_chon: ['Can khí uất trệ gây đau mạn sườn, đầy bụng', 'Can hỏa bốc lên gây đau đầu', 'Tỳ hư sinh đàm thấp', 'Thận hư đau lưng'], dap_an: 0, giai_thich: 'Sài hồ sơ can tán giúp sơ can lý khí, hoạt huyết chỉ thống trị đau tức mạn sườn do Can khí trệ.'
    },
    { category: 'phuongte', cau_hoi: 'Theo nguyên tắc sắc thuốc YHCT, các bài "Giải biểu" nên sắc thế nào?', lua_chon: ['Sắc lửa nhỏ (Văn hỏa), thời gian kéo dài', 'Sắc lửa lớn (Vũ hỏa), thời gian ngắn', 'Sắc 3 lần lấy nước cốt', 'Sắc ngâm qua đêm trước khi đun'], dap_an: 1, giai_thich: 'Thuốc giải biểu chứa tinh dầu dễ bay hơi nên dùng lửa lớn (Vũ hỏa) sắc nhanh (10-15 phút) để giữ nguyên dược tính.'
    },
    { category: 'phuongte', cau_hoi: 'Khái niệm "Bát pháp" trong YHCT bao gồm 8 phương pháp chữa bệnh nào?', lua_chon: [     'Hãn, Thổ, Hạ, Hòa, Ôn, Thanh, Tiêu, Bổ',     'Vọng, Văn, Vấn, Thiết, Ôn, Thanh, Tiêu, Bổ',     'Quân, Thần, Tá, Sứ, Hãn, Thổ, Hạ, Hòa',     'Phong, Hàn, Thử, Thấp, Táo, Hỏa, Âm, Dương' ], dap_an: 0, giai_thich: 'Bát pháp điều trị gồm: Hãn (ra mồ hôi), Thổ (gây nôn), Hạ (tẩy xổ), Hòa (hòa giải), Ôn (làm ấm), Thanh (thanh nhiệt), Tiêu (tiêu tích), Bổ (bồi bổ).'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Bán hạ bạch thuật thiên ma thang" có công dụng gì?', lua_chon: ['Táo thấp hóa đàm, bình can tức phong', 'Thanh nhiệt hóa đàm, an thần', 'Tư âm bình can, tiềm dương', 'Kiện tỳ trừ thấp, thông kinh'], dap_an: 0, giai_thich: 'Bài thuốc trị đau đầu, chóng mặt do phong đàm bốc lên trên.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Mạch môn đông thang" chủ trị chứng bệnh nào?', lua_chon: ['Phế vị âm hư, khí nghịch hư hỏa thượng viêm', 'Tỳ vị hư hàn', 'Can khí thượng nghịch', 'Thận âm hư sốt về chiều'], dap_an: 0, giai_thich: 'Mạch môn đông thang dưỡng âm thanh nhiệt, giáng nghịch chỉ ho do Phế Vị âm hư.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Bảo hòa hoàn" có tác dụng chính là gì?', lua_chon: ['Bổ khí kiện tỳ', 'Tiêu thực hòa vị', 'Thanh nhiệt giải độc', 'Tư âm nhuận tràng'], dap_an: 1, giai_thich: 'Bảo hòa hoàn (Sơn tra, Thần khúc, Lai phục tử...) chuyên điều trị thực tích trệ, ăn uống không tiêu.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Tiêu phong tán" dùng điều trị loại bệnh nào?', lua_chon: ['Cảm mạo phong hàn', 'Bệnh ngoài da (mẩn ngứa, mụn nhọt) do phong nhiệt/phong thấp', 'Trúng phong co giật', 'Đau đầu phong nhiệt'], dap_an: 1, giai_thich: 'Tiêu phong tán khư phong chấn ngứa, thanh nhiệt trừ thấp trị mề đay, chàm ngoài da.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Chỉ thấu tán" có công dụng chính là gì?', lua_chon: ['Tuyên Phế hóa đàm, chỉ khái (trị ho ngoại cảm)', 'Bổ Phế ích khí, chỉ khái', 'Tư âm nhuận Phế', 'Thanh Phế hóa đàm'], dap_an: 0, giai_thich: 'Chỉ thấu tán là bài thuốc ôn hòa giúp tuyên phế chỉ ho do cảm mạo biểu chứng đã giải nhưng ho chưa dứt.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Ngọc bình phong tán" gồm các vị thuốc chính nào?', lua_chon: ['Hoàng kỳ, Phòng phong, Bạch truật', 'Nhân sâm, Hoàng kỳ, Đương quy', 'Phòng phong, Tế tân, Bạch chỉ', 'Hoàng kỳ, Cam thảo, Nhân sâm'], dap_an: 0, giai_thich: 'Ngọc bình phong tán gồm Hoàng kỳ, Bạch truật, Phòng phong, đóng vai trò như bức bình phong ngọc bảo vệ cơ thể.'
    },
    { category: 'phuongte', cau_hoi: 'Công dụng chính của bài "Ngọc bình phong tán" là gì?', lua_chon: ['Bổ khí cố biểu, chỉ hãn (chữa tự hãn do khí hư)', 'Giải biểu tán hàn', 'Tư âm hãm hãn', 'Sơ phong thanh nhiệt'], dap_an: 0, giai_thich: 'Bài thuốc giúp ích khí cố biểu, củng cố vệ khí để trị chứng vã mồ hôi trộm/tự hãn do phế khí hư.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Dưỡng âm thanh phế thang" thường dùng cho bệnh nào?', lua_chon: ['Sốt rét', 'Bạch hầu / Viêm họng cấp thể Phế âm hư táo nhiệt', 'Ho đờm trắng lạnh', 'Cảm mạo phong hàn'], dap_an: 1, giai_thich: 'Dưỡng âm thanh phế thang chuyên trị ho khan, họng đau sưng, bạch hầu do Phế âm hư nhiệt.'
    },
    { category: 'phuongte', cau_hoi: 'Vị thuốc nào làm "Quân" trong bài thuốc "Bạch hổ thang"?', lua_chon: ['Tri mẫu', 'Thạch cao', 'Cam thảo', 'Gạo nếp (Cảnh mễ)'], dap_an: 1, giai_thich: 'Thạch cao là vị thuốc khoáng vật cay đắng rất lạnh, giữ vai trò Quân dược giáng hỏa thanh nhiệt ở Khí phận.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Tế sinh Thận khí hoàn" gia thêm 2 vị thuốc nào vào bài Bát vị?', lua_chon: ['Ngưu tất, Xa tiền tử', 'Đương quy, Xuyên khung', 'Mạch môn, Ngũ vị tử', 'Nhân sâm, Hoàng kỳ'], dap_an: 0, giai_thich: 'Bài thuốc gia thêm Ngưu tất và Xa tiền tử để tăng cường lợi thủy tiêu thũng.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Thanh cốt tán" dùng cho chứng bệnh nào?', lua_chon: ['Âm hư nội nhiệt, cốt chưng trào nhiệt (sốt trong xương)', 'Thực nhiệt sốt cao', 'Ngoại cảm sốt rét', 'Thận dương hư lạnh xương khớp'], dap_an: 0, giai_thich: 'Thanh cốt tán thanh hư nhiệt, trị chứng sốt âm ỉ từ trong xương (cốt chưng) do âm hư.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Mộc hương binh lang hoàn" thuộc nhóm phương tễ nào?', lua_chon: ['Thuốc Bổ', 'Thuốc Hành khí tiêu tích', 'Thuốc Giải biểu', 'Thuốc Dưỡng tâm an thần'], dap_an: 1, giai_thich: 'Phương tễ này dùng để hành khí thông trệ, tiêu tích đạo trệ trị mót rặn, bụng đau trướng.'
    },
    { category: 'phuongte', cau_hoi: 'Khi sắc các vị thuốc có tinh dầu (như Bạc hà, Kinh giới), nên cho vào khi nào?', lua_chon: ['Cho vào ngay từ đầu sắc cùng các vị khác', 'Cho vào sau, trước khi kết thúc sắc khoảng 5-10 phút', 'Sắc riêng rồi trộn vào', 'Nướng cháy trước khi sắc'], dap_an: 1, giai_thich: 'Cho vào sau (Hậu hạ) giúp tránh phân hủy và bay hơi mất các thành phần tinh dầu có tác dụng chữa bệnh.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Thanh vị tán" có tác dụng chính là gì?', lua_chon: ['Thanh vị nhiệt, mát huyết (chữa đau răng, sưng lợi do Vị hỏa)', 'Ôn vị khư hàn', 'Kiện tỳ hòa vị', 'Tiêu thực đạo trệ'], dap_an: 0, giai_thich: 'Thanh vị tán (Hoàng liên, Đan bì, Thăng ma...) thanh tả thực hỏa ở Vị kinh gây sưng đau lở nướu răng.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Ô mai hoàn" chủ trị chứng bệnh nào?', lua_chon: ['Đau bụng do giun (hồi quyết) / Tạng hàn giun quấy', 'Tiêu chảy do tỳ hư', 'Đau dạ dày do hỏa uất', 'Táo bón lâu ngày'], dap_an: 0, giai_thich: 'Ô mai hoàn ôn trung an vị, trừ giun chỉ thống trị chứng giun chui mật/đau bụng giun.'
    },
    { category: 'phuongte', cau_hoi: 'Trong cấu trúc bài thuốc, vị thuốc "Tá" KHÔNG có chức năng nào sau đây?', lua_chon: [     'Hỗ trợ vị Quân, Thần tăng hiệu quả trị bệnh',     'Chữa các triệu chứng phụ kèm theo',     'Giảm bớt độc tính hoặc tính quá chênh lệch của vị Quân',     'Trực tiếp dẫn thuốc đến đúng kinh bệnh (đây là vai trò của vị Sứ)' ], dap_an: 3, giai_thich: 'Dẫn thuốc đến đúng kinh bệnh là vai trò "Dẫn kinh" thuộc về vị Sứ.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Thập toàn đại bổ thang" được gia thêm 2 vị thuốc nào từ bài Bát trân thang?', lua_chon: ['Hoàng kỳ, Nhục quế', 'Phụ tử, Quế chi', 'Nhân sâm, Hoàng kỳ', 'Mạch môn, Ngũ vị tử'], dap_an: 0, giai_thich: 'Thập toàn đại bổ = Bát trân thang gia thêm Hoàng kỳ (bổ khí) và Nhục quế (ôn dương).'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Ngân kiều tán" thuộc nhóm phương tễ nào?', lua_chon: ['Tân ôn giải biểu', 'Tân lương giải biểu', 'Thanh nhiệt giải độc', 'Tả hạ phương'], dap_an: 1, giai_thich: 'Ngân kiều tán là bài thuốc mát cay giải biểu (Tân lương giải biểu) trị cảm mạo phong nhiệt giai đoạn đầu.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Tứ thần hoàn" nổi tiếng với tác dụng điều trị chứng bệnh nào?', lua_chon: ['Tiêu chảy lúc sáng sớm (Ngũ canh tả)', 'Táo bón lâu ngày do âm hư', 'Đau bụng kinh do huyết ứ', 'Trúng phong co quắp'], dap_an: 0, giai_thich: 'Tứ thần hoàn ôn bổ Thận Tỳ dương, cố sáp chỉ tả trị chứng Ngũ canh tả (tiêu chảy lúc 3-5h sáng).'
    },
    { category: 'phuongte', cau_hoi: 'Vị thuốc nào đóng vai trò làm "Quân" trong bài thuốc "Bình vị tán"?', lua_chon: ['Bạch thuật', 'Thương truật', 'Hậu phác', 'Trần bì'], dap_an: 1, giai_thich: 'Thương truật có tính đắng cay nóng. táo thấp cực mạnh, làm Quân dược trong Bình vị tán.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Tam tử dưỡng thân thang" gồm 3 hạt (tử) của các vị thuốc nào?', lua_chon: ['Tô tử, La bạc tử, Bạch giới tử', 'Kỷ tử, Sa uyển tử, Ngũ vị tử', 'Cúc hoa, Quyết minh tử, Bối mẫu', 'Liên tử, Sa nhân, Ý dĩ'], dap_an: 0, giai_thich: 'Tam tử dưỡng thân thang gồm hạt tía tô (Tô tử), hạt củ cải (La bạc tử) và hạt cải trắng (Bạch giới tử) giúp giáng khí hóa đàm.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Huyết phủ trục ứ thang" do danh y nào sáng chế?', lua_chon: ['Trương Trọng Cảnh', 'Lý Đông Viên', 'Vương Thanh Nhậm', 'Hoa Đà'], dap_an: 2, giai_thich: 'Bài thuốc trị huyết ứ vùng ngực nổi tiếng do danh y Vương Thanh Nhậm sáng chế trong sách Y Lâm Cải Thác.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Tiểu kiến trung thang" có vị thuốc đặc trưng tạo vị ngọt ôn trung, hòa hoãn chỉ thống là:', lua_chon: ['Mạch nha (Di đường)', 'Cam thảo', 'Mật ong', 'Táo đỏ'], dap_an: 0, giai_thich: 'Mạch nha bổ trung ích khí, hòa hoãn chỉ thống làm Quân dược trong bài Tiểu kiến trung thang.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Tứ nghịch thang" có tác dụng chính là gì?', lua_chon: ['Hồi dương cứu nghịch', 'Thanh nhiệt giải độc', 'Sơ can giải uất', 'Tuyên Phế chỉ khái'], dap_an: 0, giai_thich: 'Tứ nghịch thang (Phụ tử, Can khương, Cam thảo) chuyên cấp cứu các trường hợp tâm thận dương hư cấp nguy (chân hàn giả nhiệt, thoát dương).'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Thanh hao biệt giáp thang" chủ trị chứng bệnh nào?', lua_chon: ['Đêm sốt sáng mát, nhiệt phục ở âm phân', 'Thực nhiệt sốt cao ở khí phận', 'Cảm mạo phong hàn', 'Thấp nhiệt ở đại tràng'], dap_an: 0, giai_thich: 'Bài thuốc tư âm thanh nhiệt, đưa hỏa từ âm phân ra ngoài, trị chứng đêm sốt sáng lui.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Sâm linh bạch thuật tán" có công dụng chính là:', lua_chon: ['Ích khí kiện tỳ, thẩm thấp chỉ tả', 'Tư âm bổ thận, điền tinh', 'Ôn trung tán hàn, chỉ thống', 'Thanh nhiệt trừ thấp, hóa đàm'], dap_an: 0, giai_thich: 'Sâm linh bạch thuật tán bổ tỳ ích khí, lợi thấp dừng tiêu chảy do tỳ hư.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Thiên ma câu đằng ẩm" chủ trị chứng bệnh nào?', lua_chon: ['Can dương thượng kháng (đau đầu, chóng mặt, hoa mắt)', 'Tỳ hư sinh đàm thấp', 'Thận dương hư gây lạnh lưng', 'Khí trệ mạn sườn'], dap_an: 0, giai_thich: 'Thiên ma câu đằng ẩm bình can tức phong, thanh nhiệt an thần trị tăng huyết áp/đau đầu do Can dương vượng.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Ôn đởm thang" có tác dụng chính là gì?', lua_chon: ['Lý khí hóa đàm, thanh đởm hòa vị', 'Ôn bổ Thận dương', 'Sơ can giải uất', 'Giải biểu tán hàn'], dap_an: 0, giai_thich: 'Ôn đởm thang thanh đởm hòa vị, đàm nhiệt nội nhiễu gây mất ngủ, hồi hộp, nôn mửa.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Thất tiếu tán" gồm 2 vị thuốc chính nào để hoạt huyết khư ứ, chỉ thống?', lua_chon: ['Ngũ linh chi, Bồ hoàng', 'Đào nhân, Hồng hoa', 'Đan sâm, Tam thất', 'Nhũ hương, Một dược'], dap_an: 0, giai_thich: 'Thất tiếu tán phối hợp Ngũ linh chi và Bồ hoàng trị đau bụng kinh, đau tức ngực do huyết ứ.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Trấn can túc phong thang" dùng để điều trị chứng bệnh nào?', lua_chon: ['Trúng phong do Can dương thượng kháng, khí huyết thượng nghịch', 'Cảm mạo phong hàn', 'Đau khớp do phong thấp', 'Đau bụng do giun'], dap_an: 0, giai_thich: 'Trấn can túc phong thang trấn can tiềm dương, trị chứng nguy cơ đột quỵ do hỏa bốc.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Tam nhân thang" gồm 3 vị thuốc mang tên "nhân" nào?', lua_chon: ['Hạnh nhân, Bạch khấu nhân, Ý dĩ nhân', 'Đào nhân, Mộc thông, Sa nhân', 'Táo nhân, Mạch môn, Bối mẫu', 'Bá tử nhân, Đào nhân, Thần khúc'], dap_an: 0, giai_thich: 'Tam nhân thang thanh nhiệt lợi thấp, tuyên thông khí cơ phân biệt tuyên thượng, hòa trung, lợi hạ.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Định suyễn thang" chủ trị chứng bệnh nào?', lua_chon: ['Hen suyễn do phong hàn ngoại thúc, đàm nhiệt nội uất', 'Ho do âm hư phế táo', 'Tỳ hư đàm vắt', 'Tâm hỏa bốc lên'], dap_an: 0, giai_thich: 'Bài thuốc vừa giải biểu tán hàn bên ngoài vừa thanh nhiệt hóa đàm bên trong trị hen suyễn.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Việt cúc hoàn" chủ trị "Lục uất". Lục uất bao gồm 6 loại uất nào?', lua_chon: ['Khí, Huyết, Đàm, Hỏa, Thấp, Thực', 'Phong, Hàn, Thử, Thấp, Táo, Hỏa', 'Tâm, Gan, Tỳ, Phế, Thận, Vị', 'Khí, Huyết, Âm, Dương, Tinh, Tân'], dap_an: 0, giai_thich: 'Việt cúc hoàn do Chu Đan Khê lập phương trị 6 chứng uất: Khí uất, Huyết uất, Đàm uất, Hỏa uất, Thấp uất và Thực uất.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Bát chính tán" dùng để điều trị chứng bệnh nào?', lua_chon: ['Thấp nhiệt hạ tiêu (đái buốt, đái rắt, tiểu đục, tiểu ra máu)', 'Tỳ hư thủy thũng', 'Thận dương hư di niệu', 'Khí hư tự hãn'], dap_an: 0, giai_thich: 'Bát chính tán chuyên thanh nhiệt lợi thấp thông lâm, trị viêm đường tiết niệu, sỏi niệu.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Kim khóa cố tinh hoàn" có công dụng chính là gì?', lua_chon: ['Cố tinh sáp niệu (trị di tinh, hoạt tinh do Thận hư)', 'Bổ khí thăng dương', 'Thanh nhiệt giải độc', 'Sơ can giải uất'], dap_an: 0, giai_thich: 'Kim khóa cố tinh hoàn sáp tinh chỉ tả, trị nam giới di tinh mộng tinh do Thận hư không cố nhiếp.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Tả bạch tán" có tác dụng chính là gì?', lua_chon: ['Thanh tả Phế nhiệt, bình suyễn chỉ khái', 'Thanh tả Tỳ hỏa', 'Thanh tả Can nhiệt', 'Thanh tả Vị nhiệt'], dap_an: 0, giai_thich: 'Tả bạch tán (Tang bạch bì, Địa cốt bì, Cam thảo, Cảnh mễ) thanh tả ẩn nhiệt ở Phế.'
    },
    { category: 'phuongte', cau_hoi: 'Vị thuốc nào cần được "Sắc trước" (Tiên sắc) khi đun bài thuốc YHCT?', lua_chon: ['Khoáng vật, vỏ cứng (Thạch cao, Mẫu lệ, Phụ tử chế)', 'Các vị chứa tinh dầu (Bạc hà, Kinh giới)', 'Các vị đắt tiền (Nhân sâm, Lộc nhung)', 'Các vị dạng bột dính (Xa tiền tử, Hoài sơn)'], dap_an: 0, giai_thich: 'Các vị thuốc cứng rắn/khoáng vật hoặc có độc tính nhẹ cần sắc trước 15-30 phút để chiết xuất hoạt chất hoặc giảm độc.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Tiểu thừa khí thang" khác "Đại thừa khí thang" ở điểm nào?', lua_chon: ['Bỏ vị Mang tiêu', 'Bỏ vị Đại hoàng', 'Bỏ vị Hậu phác', 'Bỏ vị Chỉ thực'], dap_an: 0, giai_thich: 'Tiểu thừa khí thang bỏ vị Mang tiêu nên lực xổ nhẹ hơn, chủ yếu hành khí tiêu trướng.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Tang cúc âm" có tác dụng chính là gì?', lua_chon: ['Sơ phong thanh nhiệt, tuyên Phế chỉ khái', 'Tân ôn giải biểu, phát hãn khư hàn', 'Tư âm nhuận Phế', 'Thanh nhiệt giải độc'], dap_an: 0, giai_thich: 'Tang cúc âm dùng trị ho cảm mạo phong nhiệt nhẹ ở Phế.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Cửu vị khương hoạt thang" chủ trị chứng bệnh nào?', lua_chon: ['Ngoại cảm phong hàn thấp kèm theo trong có lý nhiệt', 'Ngoại cảm phong nhiệt nặng', 'Tỳ vị hư hàn tiêu chảy', 'Can phong nội động'], dap_an: 0, giai_thich: 'Cửu vị khương hoạt thang giải biểu phát hãn, khư phong phát thấp kiêm thanh lý nhiệt.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Hoàn đới thang" có tác dụng điều trị chứng bệnh nào?', lua_chon: ['Bạch đới đục trắng do Tỳ hư thấp thịnh', 'Rong kinh do huyết nhiệt', 'Tiểu đường thể âm hư', 'Đau đầu do Can hỏa'], dap_an: 0, giai_thich: 'Hoàn đới thang kiện tỳ táo thấp, trị phụ nữ khí hư đới hạ ra nhiều màu trắng trong.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Sâm phụ thang" gồm 2 vị thuốc chính nào?', lua_chon: ['Nhân sâm, Phụ tử chế', 'Nhân sâm, Hoàng kỳ', 'Đương quy, Phụ tử', 'Nhân sâm, Mạch môn'], dap_an: 0, giai_thich: 'Sâm phụ thang ích khí hồi dương, cấp cứu suy tim kiệt sức thể thoát dương.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Tô tử giáng khí thang" dùng điều trị chứng bệnh nào?', lua_chon: ['Thượng thực hạ hư (ho hen, khí nghịch, đờm nhiều kèm đau lưng mỏi gối)', 'Tỳ vị hư hàn tiêu chảy', 'Phế âm hư ho khô', 'Nhiệt kết đại tràng'], dap_an: 0, giai_thich: 'Tô tử giáng khí thang giáng khí hóa đàm, trị ho hen đờm trệ trên kiêm thận hư dưới.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Hòe hoa tán" có công dụng chính là gì?', lua_chon: ['Thanh nhiệt chỉ huyết, sáp trĩ (trị trĩ, đại tiện ra máu)', 'Ôn kinh chỉ huyết', 'Hoạt huyết hóa ứ', 'Bổ huyết an thai'], dap_an: 0, giai_thich: 'Hòe hoa tán thanh trường chỉ huyết, chuyên trị trĩ xuất huyết, đi ngoài ra máu tươi.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Cát căn hoàng liên hoàng cầm thang" chủ trị chứng bệnh nào?', lua_chon: ['Biểu chứng chưa giải, lý nhiệt bức xuống gây tiêu chảy, sốt', 'Tỳ vị hư hàn tiêu chảy', 'Thận âm hư sốt về chiều', 'Cảm mạo phong hàn biểu thực'], dap_an: 0, giai_thich: 'Bài thuốc giải biểu thanh nhiệt, trị tiêu chảy cấp kèm sốt do thấp nhiệt.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Phòng kỷ hoàng kỳ thang" có tác dụng chính là gì?', lua_chon: ['Ích khí kiện tỳ, khư phong lợi thủy (trị thủy thũng, sợ gió do khí hư)', 'Tư âm lợi thủy', 'Thanh nhiệt lợi thấp', 'Hồi dương cứu nghịch'], dap_an: 0, giai_thich: 'Phòng kỷ hoàng kỳ thang ích khí cố biểu, lợi thủy tiêu thũng.'
    },
    { category: 'phuongte', cau_hoi: 'Vị thuốc nào làm "Quân" trong bài thuốc "Chân vũ thang"?', lua_chon: ['Phụ tử chế', 'Bạch thuật', 'Phục linh', 'Thược dược'], dap_an: 0, giai_thich: 'Phụ tử chế cay nóng ôn Thận dương, ôn Tỳ thổ làm Quân dược chính.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Địa hoàng ẩm tử" dùng để điều trị chứng bệnh gì?', lua_chon: ['Trúng phong do Thận âm Thận dương hư, đàm quyết khàn tiếng, liệt chân', 'Cảm mạo phong hàn', 'Tiêu chảy cấp do thấp nhiệt', 'Nổi mề đay do phong nhiệt'], dap_an: 0, giai_thich: 'Địa hoàng ẩm tử tư âm ôn dương, khư đàm khai khiếu trị tai biến mạch máu não đờm rãi tắc nghẽn.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Lương phụ hoàn" gồm 2 vị thuốc nào?', lua_chon: ['Cao lương khương, Hương phụ', 'Phụ tử, Can khương', 'Mộc hương, Hương phụ', 'Thương thuật, Phụ tử'], dap_an: 0, giai_thich: 'Lương phụ hoàn phối hợp Cao lương khương (ôn vị tán hàn) và Hương phụ (sơ can lý khí) trị đau dạ dày do lạnh.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Thanh doanh thang" chủ trị trường hợp tà nhiệt truyền vào đâu?', lua_chon: ['Khí phận', 'Doanh phận', 'Huyết phận', 'Vệ phận'], dap_an: 1, giai_thich: 'Thanh doanh thang thanh doanh nhược âm, chữa bệnh ôn nhiệt tà nhập Doanh phận gây sốt đêm, mê đà, nổi ban.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Đại sài hồ thang" là sự kết hợp tác dụng của 2 nhóm phương tễ nào?', lua_chon: ['Hòa giải phương và Tả hạ phương', 'Giải biểu phương và Bổ phương', 'Thanh nhiệt phương và Khai khiếu phương', 'Ôn lý phương và Cố sáp phương'], dap_an: 0, giai_thich: 'Đại sài hồ thang vừa hòa giải Thiếu dương vừa thông tả thực nhiệt ở Dương minh.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Khương hoạt thắng thấp thang" có công dụng chính là gì?', lua_chon: ['Khư phong thắng thấp (trị đau đầu, đau lưng mình mẩy do phong thấp)', 'Tư âm bổ thận', 'Thanh nhiệt giải độc', 'Bổ khí thăng dương'], dap_an: 0, giai_thich: 'Bài thuốc khư phong thắng thấp, chỉ thống trị đau nhức xương khớp và cơ bắp toàn thân.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Thái sơn bàn thạch tán" dùng để làm gì?', lua_chon: ['Bổ khí huyết, an thai (dùng cho phụ nữ thai yếu, hay sảy thai)', 'Thanh nhiệt giải độc', 'Trừ phong thấp đau khớp', 'Trị tiêu chảy do Tỳ hư'], dap_an: 0, giai_thich: 'Thái sơn bàn thạch tán ích khí dưỡng huyết, kiện tỳ an thai trị dọa sảy thai mạn tính.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Chân nhân dưỡng tạng thang" thuộc nhóm phương tễ nào?', lua_chon: ['Thuốc Ôn lý', 'Thuốc Cố sáp (sáp tràng chỉ tả)', 'Thuốc Thanh nhiệt', 'Thuốc Giải biểu'], dap_an: 1, giai_thich: 'Bài thuốc ôn bổ tỳ thận, sáp tràng chỉ tả trị tiêu chảy kéo dài, kiết lỵ mạn tính.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Thanh táo cứu phế thang" chủ trị chứng bệnh nào?', lua_chon: ['Ôn táo thương Phế, khí âm lưỡng hư (ho khô, không đờm, sốt)', 'Phế hàn ho đờm trắng', 'Tỳ hư đàm thấp', 'Thận hư hen suyễn'], dap_an: 0, giai_thich: 'Thanh táo cứu phế thang thanh táo nhuận phế, ích khí dưỡng âm.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Tả hoàng tán" dùng điều trị chứng bệnh nào?', lua_chon: ['Tỳ vị thực nhiệt (miệng hôi, lở miệng, răng sưng đau)', 'Tỳ vị hư hàn', 'Phế nhiệt ho suyễn', 'Can hỏa bốc lên'], dap_an: 0, giai_thich: 'Tả hoàng tán (Tả tỳ tán) thanh tả thực hỏa ẩn trệ ở Tỳ Vị.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Đại tần giao thang" chủ trị trường hợp trúng phong ở mức độ nào?', lua_chon: ['Trúng phong kinh lạc (miệng mắt méo lệch, nói ngọng)', 'Trúng phong tạng phủ thể bế', 'Trúng phong tạng phủ thể thoát', 'Can phong nội động do âm hư'], dap_an: 0, giai_thich: 'Đại tần giao thang khư phong thanh nhiệt, dưỡng huyết thông lạc trị liệt mặt, trúng phong kinh lạc nhẹ.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Cố xung thang" dùng để điều trị chứng bệnh nào?', lua_chon: ['Bổ khí kiện tỳ, cố xung chỉ huyết (trị rong kinh, rong huyết do khí hư)', 'Cố tinh di niệu', 'Thanh nhiệt lương huyết', 'Sơ can giải uất'], dap_an: 0, giai_thich: 'Cố xung thang ích khí kiện tỳ, cố xung chỉ huyết trị xuất huyết tử cung do khí hư không cố nhiếp.'
    },
    { category: 'phuongte', cau_hoi: 'Vị thuốc "Mộc thông, Xa tiền tử, Biển súc, Cù mạch" là thành phần chính của bài thuốc nào?', lua_chon: ['Bát chính tán', 'Ngũ linh tán', 'Chân vũ thang', 'Đạo xích tán'], dap_an: 0, giai_thich: 'Đây là các vị thuốc lợi thủy thông lâm chính cấu thành nên Bát chính tán.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Đạo xích tán" dùng để thanh nhiệt ở kinh Tâm và cơ quan nào?', lua_chon: ['Tiểu tràng', 'Đại tràng', 'Đởm', 'Vị'], dap_an: 0, giai_thich: 'Đạo xích tán (Mộc thông, Sinh địa, Cam thảo ngọn, Trúc nhự) thanh tâm lợi thủy, đưa tâm hỏa xuống Tiểu tràng theo đường tiểu ra ngoài.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "An thần định chí hoàn" thuộc nhóm phương tễ nào?', lua_chon: ['Thuốc An thần', 'Thuốc Bổ', 'Thuốc Khai khiếu', 'Thuốc Trừ đàm'], dap_an: 0, giai_thich: 'An thần định chí hoàn ích khí trấn kinh, an thần định chí trị Tâm Đởm khí hư hay giật mình, hoảng sợ.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Toan táo nhân thang" chủ trị chứng bệnh nào?', lua_chon: ['Mất ngủ do Can huyết hư, hư nhiệt nội nhiễu', 'Mất ngủ do Tâm Tỳ lưỡng hư', 'Mất ngủ do Đờm nhiệt nội nhiễu', 'Mất ngủ do Thận dương hư'], dap_an: 0, giai_thich: 'Toan táo nhân thang dưỡng can an thần, thanh nhiệt trừ phiền trị mất ngủ do âm huyết suy hư.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc nào nổi tiếng trị Tâm Tỳ lưỡng hư gây mất ngủ, hay quên, hồi hộp?', lua_chon: ['Quy tỳ thang', 'Toan táo nhân thang', 'Hoàng liên an thần thang', 'Bình đông thang'], dap_an: 0, giai_thich: 'Quy tỳ thang là bài thuốc kinh điển nhất trị chứng suy nhược thần kinh thể Tâm Tỳ hư.'
    },
    { category: 'phuongte', cau_hoi: 'Vị thuốc nào cần được "Hậu hạ" (cho vào sau khi sắc gần xong) để giữ tác dụng tẩy hạ mạnh?', lua_chon: ['Đại hoàng', 'Thục địa', 'Bạch thuật', 'Phụ tử'], dap_an: 0, giai_thich: 'Đại hoàng nếu sắc lâu chất Anthraquinone bị phân hủy bớt sẽ giảm hiệu lực xổ tống nhiệt tích.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Bạch đầu ông thang" là bài thuốc chuyên trị chứng bệnh gì?', lua_chon: ['Lỵ nhiệt (thấp nhiệt lỵ, đại tiện ra mủ máu, mót rặn)', 'Tiêu chảy do Tỳ hư', 'Táo bón do nhiệt kết', 'Đau bụng do giun'], dap_an: 0, giai_thich: 'Bạch đầu ông thang thanh nhiệt giải độc, lương huyết chỉ lỵ trị lỵ trực khuẩn thể nhiệt lỵ.'
    },
    { category: 'phuongte', cau_hoi: 'Bài thuốc "Ôn kinh thang" chủ trị chứng bệnh nào?', lua_chon: ['Xung nhâm hư hàn, huyết ứ gây kinh nguyệt không đều, khó thụ thai', 'Can khí uất trệ gây rối loạn kinh nguyệt', 'Huyết nhiệt gây kinh nguyệt đến sớm', 'Khí hư gây sa tử cung'], dap_an: 0, giai_thich: 'Ôn kinh thang ôn kinh tán hàn, dưỡng huyết khư ứ trị phụ nữ lạnh tử cung, vô sinh hiếm muộn.'
    },
];

const questionsDataPart3 = [
    // ==================== CHẨN ĐOÁN YHCT ====================
    { category: 'chandoan', cau_hoi: 'Phương pháp "Tứ chẩn" trong YHCT gồm những kỹ thuật nào?', lua_chon: ['Vọng, Văn, Vấn, Thiết', 'Xem, Hỏi, Sờ, Nắn', 'Nhìn, Nghe, Bắt mạch, Đo', 'Vọng, Biện, Luận, Trị'], dap_an: 0, giai_thich: 'Tứ chẩn là 4 phương pháp thăm khám YHCT gồm: Vọng (quan sát), Văn (lắng nghe, ngửi), Vấn (hỏi bệnh), Thiết (bắt mạch và xúc chẩn).'
    },
    { category: 'chandoan', cau_hoi: 'Bắt mạch và ấn chẩn vùng bụng thuộc phương pháp nào trong Tứ chẩn?', lua_chon: ['Vọng chẩn', 'Văn chẩn', 'Vấn chẩn', 'Thiết chẩn'], dap_an: 3, giai_thich: 'Thiết chẩn bao gồm Mạch chẩn (bắt mạch ở cổ tay) và Xúc chẩn (sờ nắn, ấn chẩn các vùng bụng, da cơ, huyệt vị).'
    },
    { category: 'chandoan', cau_hoi: 'Quan sát sắc mặt, thần thái và chất lưỡi thuộc phương pháp nào?', lua_chon: ['Vọng chẩn', 'Văn chẩn', 'Vấn chẩn', 'Thiết chẩn'], dap_an: 0, giai_thich: 'Vọng chẩn là phương pháp thầy thuốc dùng mắt để quan sát thần, sắc, hình thể, thái độ và chất/rêu lưỡi của bệnh nhân.'
    },
    { category: 'chandoan', cau_hoi: 'Mạch "Phù" (đi nông, ấn nhẹ đã thấy) thường báo hiệu bệnh ở đâu?', lua_chon: ['Bệnh ở Biểu (bên ngoài)', 'Bệnh ở Lý (bên trong)', 'Bệnh ở tạng Thận', 'Bệnh lâu ngày'], dap_an: 0, giai_thich: 'Mạch Phù đi ở bề nông, biểu thị tà khí đang ở phần biểu (da lông, kinh lạc).'
    },
    { category: 'chandoan', cau_hoi: 'Lưỡi có chất lưỡi đỏ, rêu lưỡi vàng dầy phản ánh tình trạng nào?', lua_chon: ['Hàn chứng', 'Nhiệt chứng (Lý thực nhiệt)', 'Khí hư', 'Huyết hư'], dap_an: 1, giai_thich: 'Lưỡi đỏ chủ về Nhiệt, rêu lưỡi vàng dầy chủ về Thực nhiệt ở Lý (tạng phủ).'
    },
    { category: 'chandoan', cau_hoi: 'Nghe tiếng nói, hơi thở, tiếng ho của bệnh nhân thuộc phương pháp nào?', lua_chon: ['Vọng chẩn', 'Văn chẩn', 'Vấn chẩn', 'Thiết chẩn'], dap_an: 1, giai_thich: 'Văn chẩn là phương pháp dùng thính giác lắng nghe âm thanh (tiếng nói, thở, ho, ợ) và khứu giác ngửi mùi của bệnh nhân.'
    },
    { category: 'chandoan', cau_hoi: 'Mạch "Trầm" (ấn nặng mới thấy mạch đập) thường biểu hiện bệnh ở đâu?', lua_chon: ['Biểu chứng', 'Lý chứng', 'Nhiệt chứng', 'Phong chứng'], dap_an: 1, giai_thich: 'Mạch Trầm nằm sâu dưới cơ xương, ấn nặng mới thấy đập rõ, biểu thị bệnh đã vào sâu bên trong (Lý chứng).'
    },
    { category: 'chandoan', cau_hoi: 'Sắc mặt xanh xao, nhợt nhạt thường gợi ý chứng bệnh gì?', lua_chon: ['Nhiệt chứng', 'Hư chứng, Hàn chứng, Huyết hư', 'Thực nhiệt', 'Tỳ nhiệt'], dap_an: 1, giai_thich: 'Sắc mặt xanh (chủ hàn, chủ đau, gân trệ) và nhợt nhạt (chủ huyết hư, khí hư, hư hàn).'
    },
    { category: 'chandoan', cau_hoi: 'Rêu lưỡi trắng mỏng thường gặp ở loại bệnh nào?', lua_chon: ['Ngoại cảm phong hàn (Biểu hàn)', 'Nội thương nhiệt chứng', 'Đàm nhiệt nội kết', 'Thực tích'], dap_an: 0, giai_thich: 'Rêu lưỡi trắng mỏng là biểu hiện lưỡi bình thường hoặc bệnh ở giai đoạn đầu ngoại cảm phong hàn (Biểu hàn).'
    },
    { category: 'chandoan', cau_hoi: 'Lưỡi bệu, có dấu ấn răng ở rìa lưỡi là đặc điểm của chứng:', lua_chon: ['Tỳ hư, thủy thấp trệ', 'Tâm hỏa thịnh', 'Can phong nội động', 'Phế âm hư'], dap_an: 0, giai_thich: 'Tỳ hư không vận hóa được thủy thấp làm chất lưỡi phù bệu, chèn vào răng tạo nên hằn răng.'
    },
    { category: 'chandoan', cau_hoi: 'Mạch "Sác" (nhịp mạch đập nhanh, trên 90 lần/phút) chủ yếu biểu hiện chứng bệnh nào?', lua_chon: ['Hàn chứng', 'Nhiệt chứng', 'Hư chứng', 'Thấp chứng'], dap_an: 1, giai_thich: 'Mạch Sác chảy nhanh do nhiệt thúc đẩy huyết lưu thông dồn dập, đại diện cho Nhiệt chứng.'
    },
    { category: 'chandoan', cau_hoi: 'Mạch "Trì" (nhịp mạch đập chậm, dưới 60 lần/phút) chủ yếu biểu hiện chứng bệnh nào?', lua_chon: ['Nhiệt chứng', 'Hàn chứng', 'Thực chứng', 'Phong chứng'], dap_an: 1, giai_thich: 'Mạch Trì đập chậm do hàn khí làm ngưng trệ vận hành của huyết dịch, đại diện cho Hàn chứng.'
    },
    { category: 'chandoan', cau_hoi: 'Hệ thống "Bát cương" trong chẩn đoán YHCT gồm những cặp thuộc tính nào?', lua_chon: [     'Âm - Dương, Biểu - Lý, Hàn - Nhiệt, Hư - Thực',     'Vọng - Văn - Vấn - Thiết, Hàn - Nhiệt',     'Tâm - Can - Tỳ - Phế - Thận',     'Phong - Hàn - Thử - Thấp - Táo - Hỏa' ], dap_an: 0, giai_thich: 'Bát cương bao gồm 4 cặp quy cương đối lập dùng để đánh giá vị trí, tính chất, thế lực và bản chất bệnh.'
    },
    { category: 'chandoan', cau_hoi: 'Mạch "Huyền" (căng thẳng cứng như dây đàn) thường gặp trong bệnh lý của tạng nào?', lua_chon: ['Tâm', 'Can', 'Phế', 'Thận'], dap_an: 1, giai_thich: 'Mạch Huyền chủ về bệnh lý tạng Can Đởm, chứng đau hoặc chứng đàm trệ.'
    },
    { category: 'chandoan', cau_hoi: 'Vị trí bắt mạch Thốn khẩu ở tay TRÁI lần lượt tương ứng với các tạng nào (Thốn - Quan - Xích)?', lua_chon: ['Tâm - Can - Thận', 'Phế - Tỳ - Thận', 'Can - Tâm - Phế', 'Tỳ - Can - Thận'], dap_an: 0, giai_thich: 'Tay trái (phần Âm/Huyết): Thốn ứng với Tâm, Quan ứng với Can, Xích ứng với Thận.'
    },
    { category: 'chandoan', cau_hoi: 'Vị trí bắt mạch Thốn khẩu ở tay PHẢI lần lượt tương ứng với các tạng nào (Thốn - Quan - Xích)?', lua_chon: ['Tâm - Can - Thận', 'Phế - Tỳ - Thận', 'Tỳ - Phế - Can', 'Thận - Tỳ - Phế'], dap_an: 1, giai_thich: 'Tay phải (phần Dương/Khí): Thốn ứng với Phế, Quan ứng với Tỳ, Xích ứng với Thận (Mệnh môn).'
    },
    { category: 'chandoan', cau_hoi: 'Biểu hiện chất lưỡi đỏ khô, ít rêu hoặc không rêu phản ánh tình trạng nào?', lua_chon: ['Khí hư', 'Âm hư hỏa thịnh / Tân dịch tổn thương', 'Dương hư hàn thịnh', 'Thực tích đàm thấp'], dap_an: 1, giai_thich: 'Chất lưỡi đỏ chủ nhiệt, khô ít rêu biểu thị phần âm và tân dịch bị hư tổn thiêu đốt.'
    },
    { category: 'chandoan', cau_hoi: 'Triệu chứng "Triều nhiệt" (sốt từng đợt về chiều/đêm, lòng bàn tay chân nóng) là đặc trưng của:', lua_chon: ['Khí hư', 'Âm hư', 'Dương hư', 'Huyết ứ'], dap_an: 1, giai_thich: 'Âm hư sinh nội nhiệt, về chiều âm khí suy nên hư nhiệt bốc lên gây sốt triều nhiệt.'
    },
    { category: 'chandoan', cau_hoi: 'Mạch "Tế" (nhỏ lăn tăn như sợi chỉ, ấn rõ) chủ yếu phản ánh tình trạng bệnh lý nào?', lua_chon: ['Thực nhiệt', 'Khí huyết hư / Âm hư', 'Đàm tích', 'Phong nhiệt biểu chứng'], dap_an: 1, giai_thich: 'Mạch Tế nhỏ yếu do khí huyết không đủ đi lấp đầy lòng mạch.'
    },
    { category: 'chandoan', cau_hoi: 'Mạch "Hoạt" (đi tròn trơn tru như hạt châu lăn) thường gặp ở trường hợp nào?', lua_chon: ['Đàm thấp, thực tích, hoặc phụ nữ có thai', 'Âm hư hỏa thịnh', 'Mất máu cấp', 'Tỳ Thận dương hư'], dap_an: 0, giai_thich: 'Mạch Hoạt lưu thông trơn tru chủ về đàm thấp tích tụ, thực trệ hoặc trạng thái sinh lý có thai.'
    },
    { category: 'chandoan', cau_hoi: 'Chất lưỡi sắc tím hoặc xuất hiện các điểm ban tím (điểm ứ huyết) biểu thị bệnh lý:', lua_chon: ['Khí trệ', 'Huyết ứ', 'Tân dịch hư', 'Phong đàm'], dap_an: 1, giai_thich: 'Huyết trệ không lưu thông làm lưỡi chuyển sắc tím ứ hoặc tạo điểm ứ huyết.'
    },
    { category: 'chandoan', cau_hoi: 'Mạch "Sáp" (đi rít, không trơn tru, như dao cạo vỏ trúc) phản ánh chứng bệnh nào?', lua_chon: ['Huyết ứ, tinh huyết khuyết đản', 'Thực nhiệt', 'Ngoại cảm phong nhiệt', 'Thủy thũng'], dap_an: 0, giai_thich: 'Mạch Sáp chảy rít chậm do huyết dịch thiếu hụt hoặc huyết trệ cản trở dòng chảy.'
    },
    { category: 'chandoan', cau_hoi: 'Hiện tượng "Tự hãn" (vã mồ hôi khi vận động nhẹ hoặc nghỉ ngơi) biểu hiện chứng bệnh nào?', lua_chon: ['Âm hư', 'Khí hư (Phế/Tỳ khí hư)', 'Huyết hư', 'Thực nhiệt'], dap_an: 1, giai_thich: 'Khí hư làm giảm chức năng cố nhiếp, không giữ được mồ hôi dẫn đến vã mồ hôi ban ngày (tự hãn).'
    },
    { category: 'chandoan', cau_hoi: 'Hiện tượng "Đạo hãn" (đổ mồ hôi trộm khi ngủ, tỉnh dậy thì hết) thường gặp trong chứng nào?', lua_chon: ['Khí hư', 'Âm hư', 'Dương hư', 'Biểu hàn'], dap_an: 1, giai_thich: 'Khi ngủ âm khí đi vào trong, âm hư không chế được hỏa làm ép tân dịch vã ra ngoài thành mồ hôi trộm (đạo hãn).'
    },
    { category: 'chandoan', cau_hoi: 'Sắc mặt đỏ rực toàn bộ khuôn mặt thường báo hiệu chứng bệnh nào?', lua_chon: ['Thực nhiệt', 'Hư nhiệt (Âm hư)', 'Hàn chứng', 'Thấp chứng'], dap_an: 0, giai_thich: 'Sắc mặt đỏ rực toàn bộ là biểu hiện hỏa nhiệt thịnh ở Khí phận (Thực nhiệt).'
    },
    { category: 'chandoan', cau_hoi: 'Sắc mặt hai gò má đỏ bừng vào buổi chiều là biểu hiện của chứng bệnh nào?', lua_chon: ['Thực nhiệt', 'Hư nhiệt (Âm hư)', 'Ngoại cảm biểu nhiệt', 'Tỳ vị hư hàn'], dap_an: 1, giai_thich: 'Đỏ hai bên gò má vượng về chiều chẩm (triều nhiệt) là hình ảnh điển hình của Âm hư hư nhiệt.'
    },
    { category: 'chandoan', cau_hoi: 'Khi hỏi bệnh (Vấn chẩn), bệnh nhân thích uống nước lạnh là biểu hiện của:', lua_chon: ['Hàn chứng', 'Nhiệt chứng', 'Hư chứng', 'Thấp chứng'], dap_an: 1, giai_thich: 'Nhiệt chứng làm thiêu đốt tân dịch gây khát, thích uống nước mát lạnh để xoa dịu.'
    },
    { category: 'chandoan', cau_hoi: 'Bệnh nhân sợ lạnh, thích ấm, chân tay lạnh thuộc về nhóm chứng bệnh nào?', lua_chon: ['Nhiệt chứng', 'Hàn chứng', 'Táo chứng', 'Thực chứng'], dap_an: 1, giai_thich: 'Hàn chứng làm suy giảm ôn húc, biểu hiện sợ lạnh, thích chườm ấm, chi lạnh.'
    },
    { category: 'chandoan', cau_hoi: 'Trong Vọng chẩn lưỡi, đầu lưỡi (chóp lưỡi) phản ánh tình trạng tạng phủ nào?', lua_chon: ['Tâm và Phế', 'Can và Đởm', 'Tỳ và Vị', 'Thận và Bàng quang'], dap_an: 0, giai_thich: 'Phân vùng lưỡi: Đầu lưỡi ứng với Thượng tiêu (Tâm, Phế).'
    },
    { category: 'chandoan', cau_hoi: 'Trong Vọng chẩn lưỡi, rìa lưỡi hai bên phản ánh tình trạng của tạng phủ nào?', lua_chon: ['Tâm và Phế', 'Can và Đởm', 'Tỳ và Vị', 'Thận'], dap_an: 1, giai_thich: 'Hai bên rìa lưỡi phản ánh tình trạng Can Đởm.'
    },
    { category: 'chandoan', cau_hoi: 'Trong Vọng chẩn lưỡi, phần trung tâm (giữa mặt lưỡi) phản ánh tạng phủ nào?', lua_chon: ['Tâm, Phế', 'Can, Đởm', 'Tỳ, Vị', 'Thận'], dap_an: 2, giai_thich: 'Giữa mặt lưỡi ứng với Trung tiêu (Tỳ, Vị).'
    },
    { category: 'chandoan', cau_hoi: 'Trong Vọng chẩn lưỡi, phần gốc lưỡi (phía trong cùng) phản ánh tạng phủ nào?', lua_chon: ['Tâm', 'Can', 'Tỳ', 'Thận, Bàng quang'], dap_an: 3, giai_thich: 'Gốc lưỡi ứng với Hạ tiêu (Thận, Bàng quang, Đại tràng).'
    },
    { category: 'chandoan', cau_hoi: 'Mạch "Nhu" (đi nông, mềm, nhỏ lăn tăn) chủ yếu biểu hiện chứng bệnh gì?', lua_chon: ['Thấp chứng hoặc Khí huyết hư', 'Thực nhiệt', 'Ngoại cảm phong hàn', 'Can hỏa thượng viêm'], dap_an: 0, giai_thich: 'Mạch Nhu nổi nông nhưng nhỏ mềm nhũn, chủ về Thấp tà ứ trệ hoặc Khí huyết suy hư.'
    },
    { category: 'chandoan', cau_hoi: 'Trong Văn chẩn, tiếng nói to sảng sảng, hơi thở mạnh dồn dập thuộc về chứng nào?', lua_chon: ['Hư chứng', 'Thực chứng, Nhiệt chứng', 'Âm chứng', 'Hàn chứng'], dap_an: 1, giai_thich: 'Âm thanh to, vang, cuồn cuộn thuộc về Dương, Thực chứng và Nhiệt chứng.'
    },
    { category: 'chandoan', cau_hoi: 'Trong Văn chẩn, tiếng nói nhỏ thút thít, thều thào, ngắn hơi thuộc về chứng nào?', lua_chon: ['Thực chứng', 'Hư chứng, Khí hư', 'Thực nhiệt', 'Huyết ứ'], dap_an: 1, giai_thich: 'Âm thanh nhỏ yếu, đứt quãng, nói không ra hơi thuộc về Âm, Hư chứng (đặc biệt Khí hư).'
    },
    { category: 'chandoan', cau_hoi: 'Bệnh nhân đau bụng "thiện án" (thích xoa bóp, ấn vào thấy bớt đau) là đặc điểm của:', lua_chon: ['Thực chứng', 'Hư chứng', 'Thực nhiệt', 'Huyết ứ'], dap_an: 1, giai_thich: 'Đau thích xoa bóp ấn nắn (thiện án) phản ánh sự thiếu hụt dinh dưỡng/ôn húc (Hư chứng).'
    },
    { category: 'chandoan', cau_hoi: 'Bệnh nhân đau bụng "cự án" (sợ chạm vào, càng ấn càng đau dữ dội) là đặc điểm của:', lua_chon: ['Hư chứng', 'Thực chứng (tích trệ, huyết ứ, thực nhiệt)', 'Khí hư', 'Âm hư'], dap_an: 1, giai_thich: 'Đau sợ nắn ấn (cự án) là do sự tích tụ thực tà, huyết ứ hoặc tắc nghẽn dồn dập (Thực chứng).'
    },
    { category: 'chandoan', cau_hoi: 'Trong Bát cương, hai cương lĩnh nào làm tổng cương để phân định Âm Dương đại thể?', lua_chon: ['Biểu - Lý', 'Hàn - Nhiệt', 'Hư - Thực', 'Âm - Dương'], dap_an: 3, giai_thich: 'Âm và Dương là 2 quy cương tổng quát nhất chỉ đạo 3 cặp còn lại (Biểu/Hàn/Hư thuộc Âm, Lý/Nhiệt/Thực thuộc Dương).'
    },
    { category: 'chandoan', cau_hoi: 'Đi ngoài phân sống, tiêu chảy lúc sáng sớm (Ngũ canh tả) là triệu chứng điển hình của:', lua_chon: ['Tỳ khí hư', 'Thận dương hư (Mệnh môn hỏa suy)', 'Can tỳ bất hòa', 'Đại trường thấp nhiệt'], dap_an: 1, giai_thich: 'Lúc 3-5h sáng dương khí chưa phát, Thận dương hư không ôn sưởi được Tỳ thổ gây tiêu chảy.'
    },
    { category: 'chandoan', cau_hoi: 'Mạch "Khấu" (ấn vào thấy rỗng ở giữa như cọng hành) thường xuất hiện trong trường hợp nào?', lua_chon: ['Mất máu cấp (đại xuất huyết) hoặc mất tân dịch nặng', 'Ngoại cảm phong hàn', 'Đàm nhiệt nội kết', 'Tỳ hư thấp trệ'], dap_an: 0, giai_thich: 'Mạch Khấu rỗng ruột xuất hiện do huyết dịch hoặc tân dịch bị thất thoát dồn dập.'
    },
    { category: 'chandoan', cau_hoi: 'Chất lưỡi nhợt nhạt, rêu lưỡi trắng trơn trượt phản ánh chứng bệnh nào?', lua_chon: ['Nhiệt chứng, Thực chứng', 'Hàn chứng, Hư chứng (Tỳ Thận dương hư)', 'Can hỏa thịnh', 'Phế nhiệt'], dap_an: 1, giai_thich: 'Lưỡi nhợt chủ hư/hàn, rêu trơn trượt chủ thủy thấp đọng do dương hư không hóa khí.'
    },
    { category: 'chandoan', cau_hoi: 'Ngửi mùi chất thải (phân, nước tiểu, chất nôn) có mùi hôi thối nồng nặc thuộc chứng nào?', lua_chon: ['Hàn chứng', 'Nhiệt chứng / Thực nhiệt', 'Hư chứng', 'Khí hư'], dap_an: 1, giai_thich: 'Mùi hôi nồng thối là biểu hiện chất thải bị chưng nấu bởi Nhiệt tà (Thực nhiệt).'
    },
    { category: 'chandoan', cau_hoi: 'Ngửi mùi chất thải nhạt, ít mùi hoặc hơi tanh nhẹ thuộc chứng nào?', lua_chon: ['Nhiệt chứng', 'Hàn chứng / Hư hàn', 'Thực nhiệt', 'Táo nhiệt'], dap_an: 1, giai_thich: 'Mùi chất thải trong, nhạt, tanh lạnh biểu thị cơ thể hư hàn.'
    },
    { category: 'chandoan', cau_hoi: 'Bệnh nhân miệng đắng, họng khô, mắt hoa, ngực sườn đầy tức, lúc sốt lúc rét là bệnh ở kinh nào?', lua_chon: ['Thái dương kinh', 'Thiếu dương kinh', 'Dương minh kinh', 'Thái âm kinh'], dap_an: 1, giai_thich: 'Đây là các triệu chứng điển hình của chứng bệnh ở kinh Thiếu dương (bán biểu bán lý).'
    },
    { category: 'chandoan', cau_hoi: 'Sắc da và mắt vàng tươi sáng như màu quả quýt chín (Dương hoàng) thuộc chứng bệnh nào?', lua_chon: ['Thấp nhiệt nội kết (Can Đởm thấp nhiệt)', 'Hàn thấp trệ (Tỳ dương hư)', 'Khí huyết hư', 'Huyết ứ'], dap_an: 0, giai_thich: 'Hoàng đản sắc vàng tươi (Dương hoàng) do thấp nhiệt huân chưng làm dịch mật tràn ra da.'
    },
    { category: 'chandoan', cau_hoi: 'Sắc da và mắt vàng tối, u ám như màu khói xám (Âm hoàng) thuộc chứng bệnh nào?', lua_chon: ['Thấp nhiệt nội kết', 'Hàn thấp trệ / Tỳ Thận dương hư', 'Thực nhiệt', 'Phong nhiệt'], dap_an: 1, giai_thich: 'Hoàng đản sắc vàng tối xám (Âm hoàng) do hàn thấp tích trệ, tỳ dương suy hư.'
    },
    { category: 'chandoan', cau_hoi: 'Mạch "Đại" (nhịp đập to, nổi rõ rộng rãi dưới ngón tay) biểu hiện tình trạng gì?', lua_chon: ['Bệnh tiến triển, Thực chứng hoặc Nhiệt thịnh', 'Khí huyết hư suy', 'Âm hàn trệ', 'Thủy thũng'], dap_an: 0, giai_thich: 'Mạch đập to rộng biểu thị tà khí đang dồi dào, thực nhiệt thịnh.'
    },
    { category: 'chandoan', cau_hoi: 'Bệnh nhân sốt cao, không sợ lạnh mà sợ nóng, khát nước đòi uống lạnh thuộc hội chứng nào?', lua_chon: ['Biểu hàn chứng', 'Lý nhiệt chứng', 'Biểu nhiệt chứng', 'Lý hàn chứng'], dap_an: 1, giai_thich: 'Các triệu chứng sốt cao, sợ nóng, khát uống lạnh phản ánh hỏa nhiệt đã vào sâu tạng phủ (Lý nhiệt).'
    },
    { category: 'chandoan', cau_hoi: 'Triệu chứng sốt nhẹ, sợ gió, tự hãn (vã mồ hôi), mạch Phù hoãn là đặc điểm của:', lua_chon: ['Phong hàn biểu thực chứng', 'Phong hàn biểu hư chứng', 'Lý thực nhiệt chứng', 'Âm hư hư nhiệt'], dap_an: 1, giai_thich: 'Phong hàn biểu hư chứng có biểu hiện đặc trưng là sợ gió và tự ra mồ hôi do vệ khí hư yếu.'
    },
    { category: 'chandoan', cau_hoi: 'Cơn đau đầu khu trú rõ ở vùng đỉnh đầu (vùng huyệt Bách hội) liên quan trực tiếp đến kinh lạc nào?', lua_chon: ['Kinh Túc thái dương Bàng quang', 'Kinh Túc quyết âm Can', 'Kinh Túc thiếu dương Đởm', 'Kinh Túc dương minh Vị'], dap_an: 1, giai_thich: 'Mạch của kinh Túc quyết âm Can đi lên đỉnh đầu hội tụ tại Bách hội.'
    },
    { category: 'chandoan', cau_hoi: 'Cơn đau đầu khu trú ở vùng trán và vùng lông mày liên quan đến đường kinh nào?', lua_chon: ['Kinh Thái dương', 'Kinh Dương minh', 'Kinh Thiếu dương', 'Kinh Quyết âm'], dap_an: 1, giai_thich: 'Kinh Dương minh (Vị/Đại trường) phân bố ở trán và vùng lông mày.'
    },
    { category: 'chandoan', cau_hoi: 'Cơn đau đầu khu trú ở vùng hai bên thái dương và sau tai liên quan đến đường kinh nào?', lua_chon: ['Kinh Thái dương', 'Kinh Dương minh', 'Kinh Thiếu dương', 'Kinh Quyết âm'], dap_an: 2, giai_thich: 'Kinh Thiếu dương (Đởm) chạy qua hai bên đầu thái dương.'
    },
    { category: 'chandoan', cau_hoi: 'Cơn đau đầu khu trú ở vùng gáy và chẩm liên quan đến đường kinh nào?', lua_chon: ['Kinh Thái dương', 'Kinh Dương minh', 'Kinh Thiếu dương', 'Kinh Quyết âm'], dap_an: 0, giai_thich: 'Kinh Thái dương (Bàng quang) đi từ trán qua đỉnh đầu xuống gáy chẩm.'
    },
    { category: 'chandoan', cau_hoi: 'Mạch "Hồng" (đi rộng lớn, đến cuồn cuộn như sóng trào, đi rút lui nhanh) báo hiệu tình trạng nào?', lua_chon: ['Thực nhiệt thịnh ở khí phận', 'Âm hư nội nhiệt', 'Biểu hàn chứng', 'Thấp trệ'], dap_an: 0, giai_thich: 'Mạch Hồng cuồn cuộn đến to rút nhanh biểu thị hỏa nhiệt bùng phát dồn dập ở Khí phận.'
    },
    { category: 'chandoan', cau_hoi: 'Mạch "Nhược" (chìm sâu, nhỏ mềm, ấn nặng mới thấy) biểu hiện chứng bệnh gì?', lua_chon: ['Khí huyết đều hư / Dương hư', 'Thực nhiệt', 'Can hỏa thịnh', 'Phong hàn biểu thực'], dap_an: 0, giai_thich: 'Mạch Nhược vừa chìm vừa nhỏ mềm, biểu thị khí huyết suy hư nặng.'
    },
    { category: 'chandoan', cau_hoi: 'Mạch "Phục" (ấn sát tận xương mới thấy đập) thường gặp trong trường hợp nào?', lua_chon: ['Tà khí bế tắc nặng, bế chứng, đau dữ dội', 'Ngoại cảm phong nhiệt', 'Âm hư hỏa thịnh', 'Huyết ứ nhẹ'], dap_an: 0, giai_thich: 'Mạch Phục nằm ẩn sát xương do tà khí bế tắc nặng hoặc đau đớn dữ dội làm khí huyết không phát ra ngoài.'
    },
    { category: 'chandoan', cau_hoi: 'Triệu chứng "Sốt cao, mặt đỏ, khát nước, nhưng tay chân lạnh ngắt, mạch Trầm Phục" thuộc chứng gì?', lua_chon: ['Chân nhiệt giả hàn', 'Chân hàn giả nhiệt', 'Biểu hàn lý nhiệt', 'Biểu nhiệt lý hàn'], dap_an: 0, giai_thich: 'Nội nhiệt cực thịnh ép âm khí ra ngoài hoặc ngăn cản dương khí ra tay chân gây Chân nhiệt giả hàn.'
    },
    { category: 'chandoan', cau_hoi: 'Triệu chứng "Mặt đỏ hồng như thoa phấn, họng đau không sưng, thích đắp chăn, mạch Trì Nhược" thuộc chứng gì?', lua_chon: ['Chân hàn giả nhiệt', 'Chân nhiệt giả hàn', 'Biểu thực lý hư', 'Thực nhiệt nội kết'], dap_an: 0, giai_thich: 'Âm hàn bên trong quá thịnh đẩy hư dương nổi lên trên mặt gây Chân hàn giả nhiệt.'
    },
   
    { category: 'chandoan', cau_hoi: 'Mạch "Xúc" (mạch đi nhanh Sác mà thỉnh thoảng ngừng nghỉ không theo quy luật) phản ánh chứng gì?', lua_chon: ['Dương nhiệt thịnh, khí huyết ứ trệ, đàm tích', 'Dương khí suy vi', 'Âm hư hỏa thịnh nhẹ', 'Phong hàn nhập biểu'], dap_an: 0, giai_thich: 'Mạch Sác kiêm có đoạn nghỉ không đều do nhiệt tà quá thịnh làm nghẽn mạch.'
    },
    { category: 'chandoan', cau_hoi: 'Mạch "Kết" (mạch đi chậm Trì mà thỉnh thoảng ngừng nghỉ không theo quy luật) phản ánh chứng gì?', lua_chon: ['Âm thịnh khí kết, hàn đàm, huyết ứ', 'Dương nhiệt thịnh', 'Khí huyết dồi dào', 'Biểu nhiệt'], dap_an: 0, giai_thich: 'Mạch Trì kiêm có đoạn nghỉ không đều do âm hàn ngưng trệ gây cản trở mạch.'
    },
    { category: 'chandoan', cau_hoi: 'Mạch "Đại" (mạch ngừng nghỉ có chu kỳ quy luật rõ rệt) thường báo hiệu tình trạng nào?', lua_chon: ['Tạng khí suy vi nghiêm trọng, đau dữ dội hoặc chấn thương', 'Ngoại cảm phong nhiệt nhẹ', 'Thực tích', 'Tỳ vị hòa hợp'], dap_an: 0, giai_thich: 'Mạch đập ngừng nghỉ có quy luật chu kỳ cố định phản ánh tạng khí bị suy kiệt nặng.'
    },
    { category: 'chandoan', cau_hoi: 'Triệu chứng "Đau tức ngực sườn, hay thở dài, tính tình dễ giận dỗi" thuộc chứng bệnh nào?', lua_chon: ['Can khí uất trệ', 'Phế khí hư', 'Tâm hỏa thịnh', 'Tỳ khí hư'], dap_an: 0, giai_thich: 'Can chủ sơ tiết, khí uất trệ cản trở kinh Can gây đau tức sườn và hay thở dài để giải uất.'
    },
    { category: 'chandoan', cau_hoi: 'Bệnh nhân ho tiếng to, khạc đờm vàng đặc, sốt, ngực đau, rêu lưỡi vàng dầy, mạch Sác thuộc chứng:', lua_chon: ['Đàm nhiệt uất Phế', 'Phế khí hư', 'Phế âm hư', 'Phong hàn phạm Phế'], dap_an: 0, giai_thich: 'Đờm vàng đặc, ho to, sốt, rêu vàng sác là biểu hiện tiêu biểu của Đàm nhiệt uất Phế.'
    },
    { category: 'chandoan', cau_hoi: 'Bệnh nhân ho khô không đờm, sốt về chiều, gò má đỏ, lòng bàn tay chân nóng thuộc chứng:', lua_chon: ['Phế âm hư', 'Phế khí hư', 'Phong nhiệt phạm Phế', 'Tỳ vị hư hàn'], dap_an: 0, giai_thich: 'Ho khô kiêm các triệu chứng hư nhiệt bốc lên do âm dịch ở Phế bị hao tổn.'
    },
    { category: 'chandoan', cau_hoi: 'Triệu chứng "Hồi hộp, mất ngủ, hay quên, sắc mặt nhợt nhạt, móng tay nhạt" thuộc chứng:', lua_chon: ['Tâm huyết hư', 'Tâm hỏa thịnh', 'Can khí uất', 'Thận dương hư'], dap_an: 0, giai_thich: 'Tâm huyết thiếu không dưỡng được tâm thần gây hồi hộp mất ngủ, sắc mặt nhợt.'
    },
    { category: 'chandoan', cau_hoi: 'Triệu chứng "Xuất huyết dưới da, chảy máu cam kèm ăn kém, mệt mỏi, phân sống" biểu hiện chứng:', lua_chon: ['Tỳ bất thống huyết', 'Huyết nhiệt vọng hành', 'Can hỏa bốc lên', 'Thận âm hư hỏa thịnh'], dap_an: 0, giai_thich: 'Tỳ khí hư suy không quản lý được huyết đi trong lòng mạch gây chảy máu tràn ra ngoài.'
    },
    { category: 'chandoan', cau_hoi: 'Bệnh nhân hay bị ho, hắt hơi khi gặp lạnh, dễ bị cảm mạo, tự hãn, sợ gió thuộc hội chứng:', lua_chon: ['Phế khí hư (Phế vệ bất cố)', 'Tâm khí hư', 'Can khí uất', 'Thận dương hư'], dap_an: 0, giai_thich: 'Phế khí hư suy làm giảm vệ khí bảo vệ bề mặt da, khiến cơ thể dễ bị ngoại tà xâm nhập.'
    },
    { category: 'chandoan', cau_hoi: 'Sắc mặt đen u ám, khô sạm thường gặp ở bệnh nhân có tổn thương thuộc tạng nào?', lua_chon: ['Thận (Thận hư / Huyết ứ lâu ngày)', 'Can', 'Tỳ', 'Phế'], dap_an: 0, giai_thich: 'Sắc đen thuộc hành Thủy, biểu hiện Thận hư suy nặng hoặc huyết ứ lâu ngày.'
    },
    { category: 'chandoan', cau_hoi: 'Sắc mặt trắng bệch, nhợt nhạt bóng nẩy thường gặp trong chứng bệnh nào?', lua_chon: ['Dương hư hoặc Mất máu', 'Thực nhiệt', 'Can hỏa', 'Thấp nhiệt'], dap_an: 0, giai_thich: 'Sắc mặt trắng bệch do thiếu hụt huyết nuôi dưỡng hoặc dương khí suy yếu không sưởi ấm được.'
    },
    { category: 'chandoan', cau_hoi: 'Rêu lưỡi vàng dầy, khô, lòng lưỡi có gai đỏ là biểu hiện của:', lua_chon: ['Lý thực nhiệt / Vị nhiệt tích trệ', 'Biểu hàn', 'Âm hư nhẹ', 'Tỳ Thận hư hàn'], dap_an: 0, giai_thich: 'Rêu vàng dầy khô gai đỏ là triệu chứng của thực nhiệt thiêu đốt ở tạng phủ.'
    },
    { category: 'chandoan', cau_hoi: 'Rêu lưỡi xám đen khô dầy phản ánh tình trạng bệnh lý nào?', lua_chon: ['Nhiệt cực (nhiệt thịnh thiêu đốt tân dịch nặng)', 'Biểu phong hàn nhẹ', 'Tỳ khí hư', 'Khí trệ nhẹ'], dap_an: 0, giai_thich: 'Rêu xám đen mà khô dầy chứng tỏ nhiệt tà đạt đến mức cực điểm làm thiêu cạn tân dịch.'
    },
    { category: 'chandoan', cau_hoi: 'Rêu lưỡi xám đen trơn ướt phản ánh tình trạng bệnh lý nào?', lua_chon: ['Hàn cực / Thấp hàn tích trệ nặng', 'Nhiệt cực thiêu đốt', 'Can hỏa bốc cao', 'Ngoại cảm phong nhiệt'], dap_an: 0, giai_thich: 'Rêu xám đen nhưng trơn ướt chứng tỏ âm hàn đạt mức cực điểm, đàm thấp ngưng trệ nặng.'
    },
    { category: 'chandoan', cau_hoi: 'Chất lưỡi bong rêu hoàn toàn thành từng mảng gợn nham nhở (lưỡi bản đồ) biểu thị:', lua_chon: ['Vị âm hư / Khí âm lưỡng hư', 'Tỳ dương hư', 'Can thực hỏa', 'Huyết ứ nặng'], dap_an: 0, giai_thich: 'Lưỡi bản đồ thể hiện vị khí và vị âm tổn thương không nuôi dưỡng được rêu lưỡi.'
    },
    { category: 'chandoan', cau_hoi: 'Lưỡi gầy nhỏ, sắc đỏ khô không rêu biểu thị hội chứng bệnh lý nào?', lua_chon: ['Âm hư hỏa thịnh nặng', 'Thấp nhiệt trệ', 'Khí huyết hư', 'Huyết ứ'], dap_an: 0, giai_thich: 'Lưỡi nhỏ gầy khô đỏ rêu trụi lụi do âm dịch kiệt quệ, nội nhiệt thiêu đốt dồn dập.'
    },
    { category: 'chandoan', cau_hoi: 'Triệu chứng "Đau nhói cố định một chỗ, đêm đau nhiều hơn ngày, lưỡi tím có điểm ứ huyết" thuộc:', lua_chon: ['Huyết ứ chứng', 'Khí hư chứng', 'Khí trệ chứng', 'Thấp trệ chứng'], dap_an: 0, giai_thich: 'Đau như dao đâm cố định nghẽn mạch đêm nặng hơn là đặc tính lâm sàng của Huyết ứ.'
    },
    { category: 'chandoan', cau_hoi: 'Triệu chứng "Đau trướng, vị trí đau di chuyển không cố định, tăng khi giận dỗi" thuộc:', lua_chon: ['Khí trệ chứng', 'Huyết ứ chứng', 'Thực tích chứng', 'Hàn trệ chứng'], dap_an: 0, giai_thich: 'Đau trướng di chuyển không cố định là đặc tính của Khí trệ.'
    },
    { category: 'chandoan', cau_hoi: 'Triệu chứng "Chóng mặt, ù tai như ve kêu, lưng mỏi gối yếu, sốt về chiều, ngủ hay mơ" do:', lua_chon: ['Thận âm hư', 'Tỳ khí hư', 'Phế khí hư', 'Tâm hỏa thịnh'], dap_an: 0, giai_thich: 'Thận âm hư không nuôi dưỡng được tai xương khớp, sinh hư nhiệt bốc lên.'
    },
    { category: 'chandoan', cau_hoi: 'Triệu chứng "Lưng gối lạnh đau, sợ lạnh, di tinh, liệt dương, đi tiểu đêm nhiều lần" do:', lua_chon: ['Thận dương hư', 'Tâm huyết hư', 'Can khí uất', 'Tỳ khí hư'], dap_an: 0, giai_thich: 'Thận dương suy yếu không sưởi ấm mệnh môn hỏa gây lạnh, suy giảm sinh lý.'
    },
    { category: 'chandoan', cau_hoi: 'Triệu chứng "Đau đầu dữ dội, mắt đỏ, đắng miệng, dễ giận dữ, mạch Huyền Sác" thuộc:', lua_chon: ['Can hỏa thượng viêm', 'Can huyết hư', 'Can tỳ bất hòa', 'Thận âm hư'], dap_an: 0, giai_thich: 'Can hỏa bốc dồn lên đầu mặt gây đau đầu, đắng miệng, tính hay cáu gắt.'
    },
    { category: 'chandoan', cau_hoi: 'Triệu chứng "Chóng mặt, run tay chân, co giật, méo miệng lệch mắt, mạch Huyền" biểu hiện:', lua_chon: ['Can phong nội động', 'Can huyết hư', 'Tỳ hư thấp trệ', 'Phế hư suyễn'], dap_an: 0, giai_thich: 'Các biểu hiện động (run, co giật, méo miệng) thuộc Can phong phát sinh từ bên trong.'
    },
    { category: 'chandoan', cau_hoi: 'Trong Bát cương, chứng bệnh ở giai đoạn đầu, tà khí còn ở nông (da lông, phế vệ) gọi là:', lua_chon: ['Biểu chứng', 'Lý chứng', 'Hàn chứng', 'Hư chứng'], dap_an: 0, giai_thich: 'Biểu chứng là vị trí bệnh còn nông ngoài bề mặt da cơ kinh lạc.'
    },
    { category: 'chandoan', cau_hoi: 'Trong Bát cương, chứng bệnh đã vào sâu bên trong tạng phủ, khí huyết, xương tủy gọi là:', lua_chon: ['Lý chứng', 'Biểu chứng', 'Thực chứng', 'Nhiệt chứng'], dap_an: 0, giai_thich: 'Lý chứng biểu thị tà khí đã xâm nhập vào tạng phủ khí huyết sâu bên trong.'
    },
    { category: 'chandoan', cau_hoi: 'Triệu chứng "Sốt cao, mê sảng, khát nước, tiểu đỏ ít, táo bón, lưỡi đỏ rêu vàng, mạch Sác" thuộc:', lua_chon: ['Lý thực nhiệt chứng', 'Biểu hư hàn chứng', 'Lý hư hàn chứng', 'Biểu nhiệt chứng'], dap_an: 0, giai_thich: 'Hội chứng tà nhiệt thịnh kết tụ dồn dập ở bên trong tạng phủ.'
    },
    { category: 'chandoan', cau_hoi: 'Triệu chứng "Bụng đầy trướng, ợ hơi hôi chua, nôn ra thức ăn chưa tiêu, sợ ăn" là do:', lua_chon: ['Thực tích (thức ăn tích trệ ở Vị)', 'Tỳ dương hư', 'Can khí uất', 'Thận âm hư'], dap_an: 0, giai_thich: 'Đồ ăn dồn đọng không tiêu hóa được gây thối trệ uất lại ở Vị.'
    },
    { category: 'chandoan', cau_hoi: 'Mạch "Đoản" (nhịp mạch ngắn, không lấp đầy 3 bộ Thốn Quan Xích) biểu hiện chứng bệnh gì?', lua_chon: ['Khí hư hoặc Khí trệ', 'Huyết nhiệt', 'Ngoại cảm biểu thực', 'Tỳ vị hòa hợp'], dap_an: 0, giai_thich: 'Mạch Đoản không kéo dài qua 3 bộ do khí bị suy hư không thúc đẩy được hoặc khí trệ cản trở.'
    },
    { category: 'chandoan', cau_hoi: 'Mạch "Trường" (nhịp mạch dài quá vị trí Thốn Xích, đi thong dong mềm mại) là biểu hiện của:', lua_chon: ['Chính khí dồi dào / Mạch người bình thường khỏe mạnh', 'Khí huyết đại hư', 'Tạng khí sắp tuyệt', 'Đàm thấp nặng'], dap_an: 0, giai_thich: 'Mạch Trường đi dài rộng dồi dào thong dong là biểu hiện chính khí tốt.'
    },
    { category: 'chandoan', cau_hoi: 'Tiếng ho đục nặng hắng, đờm trắng loãng dễ khạc thuộc về chứng bệnh nào?', lua_chon: ['Phong hàn phạm Phế', 'Phong nhiệt phạm Phế', 'Phế âm hư', 'Tâm hỏa thịnh'], dap_an: 0, giai_thich: 'Đờm trắng loãng dễ khạc kiêm ho nặng tiếng do hàn tà xâm nhập Phế.'
    },
    { category: 'chandoan', cau_hoi: 'Tiếng ho rít, đờm vàng đặc khó khạc, họng đau khô thuộc về chứng bệnh nào?', lua_chon: ['Phong nhiệt phạm Phế', 'Phong hàn phạm Phế', 'Phế khí hư', 'Tỳ vị hư hàn'], dap_an: 0, giai_thich: 'Đờm vàng dính rít kiêm họng sưng đau khô phản ánh nhiệt tà xâm nhập Phế.'
    },
    { category: 'chandoan', cau_hoi: 'Bệnh nhân cảm thấy vướng ở họng, khạc không ra, nuốt không xuống, không đau (Mai hạch khí) do:', lua_chon: ['Can khí uất kết kết hợp đàm trệ', 'Phế nhiệt ho suyễn', 'Vị hỏa bốc lên', 'Tỳ hư thủy thũng'], dap_an: 0, giai_thich: 'Can khí uất ngưng trệ kết hợp đàm ẩm đóng tụ ở họng gây hội chứng Mai hạch khí.'
    },
    { category: 'chandoan', cau_hoi: 'Bệnh nhân hay hốt hoảng, dễ giật mình, ngủ mơ thấy rơi từ trên cao xuống thuộc tạng nào bị bệnh?', lua_chon: ['Tâm, Đởm (Tâm Đởm khí hư)', 'Phế', 'Tỳ', 'Bàng quang'], dap_an: 0, giai_thich: 'Tâm chủ thần minh, Đởm chủ quyết đoán; Tâm Đởm khí hư làm thần trí bất an hoảng sợ.'
    },
    { category: 'chandoan', cau_hoi: 'Mạch "Táo" (mạch đi nhanh, gấp gáp, lăn tăn, 1 nhịp thở trên 6 lần đập) biểu hiện chứng gì?', lua_chon: ['Dương nhiệt cực thịnh / Bệnh biến nguy cấp', 'Âm hàn ngưng trệ', 'Tỳ hư', 'Khí hư'], dap_an: 0, giai_thich: 'Mạch Táo nhảy dồn dập cực nhanh do hỏa nhiệt bùng phát nguy kịch.'
    },
    { category: 'chandoan', cau_hoi: 'Vị trí chẩn mạch Thốn Khẩu nằm ở động mạch nào?', lua_chon: ['Động mạch Quay (Radial artery)', 'Động mạch Cảnh', 'Động mạch Cánh tay', 'Động mạch Mu chân'], dap_an: 0, giai_thich: 'Bắt mạch Thốn khẩu được thực hiện trên đường đi của động mạch quay ở cổ tay.'
    },
    { category: 'chandoan', cau_hoi: 'Trong Thiết chẩn, khi ấn chẩn vùng bụng thấy bụng mềm, ấn vào thấy dễ chịu (thiện án) gọi là:', lua_chon: ['Hư chứng', 'Thực chứng', 'Nhiệt chứng', 'Huyết ứ'], dap_an: 0, giai_thich: 'Thích xoa bóp ấn nắn biểu hiện tạng phủ thiếu hụt khí huyết (Hư chứng).'
    },
    { category: 'chandoan', cau_hoi: 'Bệnh nhân ăn nhiều mau đói nhưng người vẫn gầy (Tiêu cốc thiện cơ) do chứng bệnh nào?', lua_chon: ['Vị nhiệt thịnh (Vị hỏa)', 'Tỳ hư', 'Thận dương hư', 'Phế khí hư'], dap_an: 0, giai_thich: 'Vị hỏa quá vượng thiêu đốt tiêu hóa dồn dập làm ăn nhiều nhưng không tích tụ nuôi cơ thể.'
    },
    { category: 'chandoan', cau_hoi: 'Bệnh nhân chán ăn, miệng nhạt, ăn vào khó tiêu, bụng trướng nhẹ sau ăn là do:', lua_chon: ['Tỳ vị khí hư', 'Vị hỏa bốc lên', 'Can hỏa thịnh', 'Đàm nhiệt nội kết'], dap_an: 0, giai_thich: 'Tỳ vị hư suy kém vận hóa làm chán ăn, ăn không tiêu.'
    },
];

const questionsDataPart4 = [
    // ==================== CHÂM CỨU - XOA BÓP - DƯỠNG SINH ====================
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Hợp Cốc (LI4) thuộc đường kinh nào?', lua_chon: ['Thủ thái âm Phế', 'Thủ dương minh Đại trường', 'Thủ thiếu âm Tâm', 'Thủ thái dương Tiểu trường'], dap_an: 1, giai_thich: 'Huyệt Hợp Cốc là Nguyên huyệt thuộc đường kinh Thủ dương minh Đại trường, nằm ở kẽ xương bàn tay 1-2.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Túc Tam Lý (ST36) có vị trí xác định như thế nào?', lua_chon: [     'Dưới lõm ngoài xương bánh chè (Độc Tỵ) đo xuống 3 thốn, cách mào xương chày 1 khoát ngón tay',     'Dưới bờ bánh chè 2 thốn',     'Tại giữa nếp gấp khoeo chân',     'Mặt trong cẳng chân, trên mắt cá trong 3 thốn' ], dap_an: 0, giai_thich: 'Túc Tam Lý thuộc kinh Vị, nằm dưới huyệt Độc Tỵ 3 thốn và cách mào chày 1 ngón tay.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Tam Âm Giao (SP6) là nơi giao hội của 3 đường kinh âm nào ở chân?', lua_chon: ['Tỳ, Can, Thận', 'Tâm, Can, Tỳ', 'Phế, Tỳ, Thận', 'Vị, Đởm, Bàng quang'], dap_an: 0, giai_thich: 'Tam Âm Giao nằm trên mắt cá trong 3 thốn, là nơi giao hội của 3 kinh Túc thái âm Tỳ, Túc quyết âm Can, Túc thiếu âm Thận.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Bách Hội (GV20) nằm ở vị trí nào?', lua_chon: [     'Giao điểm của đường dọc chính giữa đầu và đường nối hai đỉnh vành tai',     'Ở giữa hai lông mày',     'Tại chỗ lõm sau gáy',     'Ở giữa trán' ], dap_an: 0, giai_thich: 'Bách Hội thuộc Mạch Đốc, nằm ở điểm cao nhất của đỉnh đầu.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Nội Quan (PC6) thuộc đường kinh nào?', lua_chon: ['Thủ thiếu âm Tâm', 'Thủ quyết âm Tâm bao', 'Thủ thái âm Phế', 'Thủ thiếu dương Tam tiêu'], dap_an: 1, giai_thich: 'Nội Quan là Lạc huyệt của kinh Thủ quyết âm Tâm bao, nằm trên nếp gấp cổ tay 2 thốn, giữa hai gân cơ.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Thái Xung (LR3) giữ vai trò gì trên đường kinh Túc quyết âm Can?', lua_chon: ['Nguyên huyệt', 'Lạc huyệt', 'Khích huyệt', 'Mộ huyệt'], dap_an: 0, giai_thich: 'Thái Xung là Nguyên huyệt kiêm Du huyệt của kinh Can, nằm ở kẽ xương bàn chân 1-2.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Dũng Tuyền (KI1) thuộc đường kinh nào và nằm ở đâu?', lua_chon: [     'Thủy huyệt kinh Thận, nằm ở chỗ lõm lòng bàn chân (1/3 trước)',     'Kinh Tỳ, nằm ở ngón chân cái',     'Kinh Can, nằm ở mu bàn chân',     'Mạch Nhâm, nằm ở vùng bụng' ], dap_an: 0, giai_thich: 'Dũng Tuyền là Tỉnh huyệt thuộc kinh Thận, nằm ở điểm nối 1/3 trước và 2/3 sau của lòng bàn chân.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Quan Nguyên (CV4) nằm ở đâu?', lua_chon: [     'Dưới rốn 3 thốn trên đường giữa bụng',     'Dưới rốn 1.5 thốn',     'Trên rốn 2 thốn',     'Dưới rốn 4 thốn' ], dap_an: 0, giai_thich: 'Quan Nguyên thuộc Mạch Nhâm, nằm dưới rốn 3 thốn, là nơi tàng trữ tinh khí của cơ thể.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Khí Hải (CV6) có vị trí xác định như thế nào?', lua_chon: ['Dưới rốn 1.5 thốn', 'Dưới rốn 3 thốn', 'Trên rốn 1 thốn', 'Dưới rốn 2 thốn'], dap_an: 0, giai_thich: 'Khí Hải thuộc Mạch Nhâm, nằm dưới rốn 1.5 thốn, chủ về bồi bổ khí.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Phong Trì (GB20) thuộc đường kinh nào?', lua_chon: ['Túc thiếu dương Đởm', 'Túc thái dương Bàng quang', 'Mạch Đốc', 'Thủ thiếu dương Tam tiêu'], dap_an: 0, giai_thich: 'Phong Trì thuộc kinh Đởm, nằm ở chỗ lõm phía sau gáy, dưới xương chẩm.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Xích Trạch (LU5) thuộc đường kinh nào và ở vị trí nào?', lua_chon: [     'Kinh Phế, nằm trên nếp gấp khuỷu tay ở bờ ngoài gân cơ nhị đầu',     'Kinh Tâm, ở bờ trong khuỷu tay',     'Kinh Đại trường, ở bờ ngoài khuỷu tay',     'Kinh Tâm bao, ở giữa nếp khuỷu' ], dap_an: 0, giai_thich: 'Xích Trạch là Hợp huyệt kinh Phế, nằm trên nếp khuỷu tay phía ngoài gân cơ nhị đầu.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Thần Môn (HT7) có tác dụng nổi bật nào?', lua_chon: ['Bổ tâm an thần, trị mất ngủ, hồi hộp', 'Trị tiêu chảy', 'Trị ho suyễn', 'Trị đau lưng'], dap_an: 0, giai_thich: 'Thần Môn là Nguyên huyệt kinh Tâm, chuyên trị chứng mất ngủ, lo âu, cuồng loạn.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Dương Lăng Tuyền (GB34) là "Hội huyệt" của bộ phận nào?', lua_chon: ['Cân (gân)', 'Mạch', 'Cốt (xương)', 'Tủy'], dap_an: 0, giai_thich: 'Trong Bát hội huyệt, Dương Lăng Tuyền là Cân hội (chuyên trị bệnh về gân cơ).'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Thái Khê (KI3) nằm ở vị trí nào?', lua_chon: [     'Trung điểm giữa đường nối đỉnh mắt cá trong và gân gót',     'Đỉnh mắt cá ngoài',     'Dưới mắt cá trong 1 thốn',     'Sau mắt cá ngoài 0.5 thốn' ], dap_an: 0, giai_thich: 'Thái Khê là Nguyên huyệt kinh Thận, nằm ở chỗ lõm giữa mắt cá trong và gân gót (gân Achilles).'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Thủ thuật xoa bóp nào tác động chủ yếu lên YẾU TỐ DA?', lua_chon: ['Xoa, xát, miết, phân, hợp', 'Đấm, chặt, véo', 'Lăn, bóp, vần', 'Bấm, điểm, ấn'], dap_an: 0, giai_thich: 'Các thủ thuật xoa, xát, miết, phân, hợp lướt nhẹ trên da, làm ấm da và thông thoáng lỗ mồ hôi.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Thủ thuật xoa bóp nào tác động trực tiếp lên CƠ THỊT?', lua_chon: ['Vé, bóp, đấm, chặt, lăn, vần', 'Xoa, xát', 'Bấm, điểm', 'Vận động khớp'], dap_an: 0, giai_thich: 'Nhóm thủ thuật đấm, chặt, bóp, lăn tác động sâu vào khối cơ giúp thư giãn và giải cơ trệ.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Thủ thuật "Vé" (Véo da) có tác dụng gì tốt nhất?', lua_chon: ['Trừ phong hàn, điều hòa vinh vệ, kích thích tiêu hóa (cuộn da dọc sống lưng)', 'Làm tan ứ máu', 'Lợi khớp', 'Hạ sốt nhanh'], dap_an: 0, giai_thich: 'Véo da (nhất là véo cột sống Hoa Đà) giúp nâng cao vệ khí, kích thích kinh Đốc và kinh Bàng quang.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Thủ thuật "Bấm huyệt" đòi hỏi kỹ thuật thế nào?', lua_chon: [     'Dùng đầu ngón tay ấn vuông góc vào huyệt, lực tăng dần từ nhẹ đến mạnh',     'Dùng lực tác động ngắt quãng thật nhanh',     'Miết trượt liên tục trên mặt da',     'Xoa tròn nhẹ nhàng quanh huyệt' ], dap_an: 0, giai_thich: 'Bấm huyệt yêu cầu dùng đầu ngón tay tác động lực vuông góc, từ từ thấm sâu vào huyệt vị.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Trong kỹ thuật châm cứu, hiện tượng "Đắc khí" là gì?', lua_chon: [     'Bệnh nhân cảm thấy căng, tức, nặng, mỏi tại vùng châm, thầy thuốc cảm thấy kim bị mút chặt',     'Bệnh nhân thấy đau nhói cháy da',     'Kim châm bị gãy',     'Máu chảy ra nhiều tại vị trí châm' ], dap_an: 0, giai_thich: 'Đắc khí là dấu hiệu hiệu quả châm cứu, khi khí cơ đến làm kim cảm giác mút và bệnh nhân thấy căng tức nhẹ.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Để "Bổ" khi châm cứu (Châm bổ), người ta thường áp dụng nguyên tắc nào?', lua_chon: [     'Châm thuận chiều đường kinh, rút kim nhanh và bít lỗ châm ngay',     'Châm ngược chiều đường kinh, rút kim chậm',     'Vê kim thật mạnh và liên tục',     'Không bít lỗ châm sau khi rút kim' ], dap_an: 0, giai_thich: 'Thủ pháp châm Bổ: châm thuận kinh, từ từ đưa kim, rút kim nhanh và ấn bịt ngay lỗ châm để giữ khí.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Để "Tả" khi châm cứu (Châm tả), nguyên tắc nào đúng?', lua_chon: [     'Châm ngược chiều đường kinh, khi rút kim làm lay rộng lỗ châm và không bít lỗ châm',     'Châm thuận chiều đường kinh',     'Rút kim nhanh và bít chặt lỗ châm',     'Châm nhẹ nhàng và ngâm kim lâu' ], dap_an: 0, giai_thich: 'Thủ pháp châm Tả: châm ngược chiều kinh, vận kim mạnh, rút kim nhanh đồng thời day rộng lỗ châm không bít để xả tà khí.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Góc châm nghiêng (châm xiên 45 độ) thường áp dụng cho vùng nào?', lua_chon: ['Nơi cơ tương đối mỏng hoặc gần tạng phủ nông', 'Nơi cơ dầy như mông, đùi', 'Vùng sát xương đầu', 'Lòng bàn tay'], dap_an: 0, giai_thich: 'Châm nghiêng 45 độ dùng ở vùng thịt mỏng để tránh đâm sâu vào mạch máu hoặc tạng tạng sâu.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Góc châm luồn kim (châm sát da 15 - 20 độ) áp dụng ở vị trí nào?', lua_chon: ['Vùng đầu, mặt, ngực thịt rất mỏng sát xương', 'Vùng mông', 'Vùng đùi', 'Vùng thắt lưng'], dap_an: 0, giai_thich: 'Châm luồn sát da dùng ở những vùng da mỏng nằm sát xương như da đầu, vùng lông mày.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Khi châm cứu vùng ngực và lưng trên, cần chú ý điều gì nguy hiểm nhất?', lua_chon: ['Tránh châm quá sâu gây thủng màng phổi (tràn khí màng phổi)', 'Gây gãy kim', 'Gây chảy máu ngoài da', 'Gây co giật'], dap_an: 0, giai_thich: 'Châm vùng ngực/lưng trên quá sâu dễ đâm thủng màng phổi gây cấp cứu tràn khí màng phổi.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Xử trí sự cố "Vận kim" (say kim, bệnh nhân vã mồ hôi, hoa mắt, choáng váng) như thế nào?', lua_chon: [     'Rút ngay toàn bộ kim, cho bệnh nhân nằm nghỉ nơi thoáng, uống nước ấm, bấm huyệt Nhân Trung',     'Tiếp tục giữ nguyên kim',     'Vê kim mạnh hơn',     'Cho bệnh nhân đứng dậy đi lại' ], dap_an: 0, giai_thich: 'Khi say kim cần lập tức rút kim, nằm nghỉ đầu thấp, uống nước ấm và bấm Nhân Trung, Hợp Cốc.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Thủ pháp "Thủy châm" là kỹ thuật gì?', lua_chon: [     'Tiêm dung dịch thuốc vào huyệt vị YHCT',     'Chườm nước nóng lên huyệt',     'Ngâm kim vào nước trước khi châm',     'Châm kim dưới nước' ], dap_an: 0, giai_thich: 'Thủy châm là kết hợp Đông - Tây y: tiêm thuốc dịch bổ/chữa bệnh trực tiếp vào huyệt đạo.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Thủ pháp "Điện châm" là gì?', lua_chon: [     'Dùng dòng điện sinh lý mạch xung nối vào kim châm để kích thích huyệt',     'Dùng dòng điện cao thế kích thích da',     'Đốt nóng kim châm bằng điện',     'Chiếu ánh sáng điện vào huyệt' ], dap_an: 0, giai_thich: 'Điện châm kết hợp kim châm với dòng điện xung liên tục/ngắt quãng để tăng kích thích điều trị.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Kiên Tỉnh (GB21) nằm ở đâu?', lua_chon: [     'Điểm giữa đường nối huyệt Đại Chùy đến đỉnh cao gồ vai (mỏm quạ)',     'Giữa khớp vai',     'Ở sau nách',     'Dưới xương đòn' ], dap_an: 0, giai_thich: 'Kiên Tỉnh thuộc kinh Đởm, nằm ở điểm giữa đường nối từ gai đốt sống cổ 7 đến mỏm vai.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Trung Quản (CV12) là "Mộ huyệt" của cơ quan nào và nằm ở đâu?', lua_chon: ['Mộ huyệt của Vị, nằm trên rốn 4 thốn', 'Mộ huyệt của Tỳ, dưới rốn 2 thốn', 'Mộ huyệt của Phế, ở ngực', 'Mộ huyệt của Thận, sau lưng'], dap_an: 0, giai_thich: 'Trung Quản là Mộ huyệt của Vị kiêm Hội huyệt của Phủ, nằm trên rốn 4 thốn.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Đản Trung (CV17) nằm ở vị trí nào?', lua_chon: [     'Điểm giữa đường nối 2 đầu núm vú (ở nam giới) trên xương ức',     'Dưới rốn 2 thốn',     'Ở hõm ức',     'Giữa hai bả vai' ], dap_an: 0, giai_thich: 'Đản Trung thuộc Mạch Nhâm, là Hội huyệt của Khí, nằm giữa hai núm vú ở ngang khoang liên sườn 4.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Liệt Khuyết (LU7) thuộc đường kinh nào?', lua_chon: ['Thủ thái âm Phế', 'Thủ dương minh Đại trường', 'Thủ thiếu âm Tâm', 'Thủ quyết âm Tâm bao'], dap_an: 0, giai_thich: 'Liệt Khuyết là Lạc huyệt kinh Phế, nằm ở bờ ngoài xương quay, trên nếp gấp cổ tay 1.5 thốn.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Nhân Trung (GV26) nằm ở vị trí nào?', lua_chon: [     'Tại điểm nối 1/3 trên và 2/3 dưới của rãnh nhân trung',     'Giữa cằm',     'Dưới khóe miệng',     'Giữa hai lông mày' ], dap_an: 0, giai_thich: 'Nhân Trung thuộc Mạch Đốc, là huyệt cấp cứu hàng đầu nằm ở 1/3 trên rãnh nhân trung.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Ủy Trung (BL40) có vị trí xác định như thế nào?', lua_chon: ['Tại chính giữa nếp gấp khoeo chân', 'Dưới mắt cá ngoài', 'Ở giữa bắp chân', 'Tại giữa nếp mông'], dap_an: 0, giai_thich: 'Ủy Trung thuộc kinh Bàng quang, nằm ở trung tâm nếp gấp trám khoeo chân, chủ trị đau lưng.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Giáp Tích (Hoa Đà Giáp Tích) nằm ở đâu?', lua_chon: [     'Nhóm huyệt nằm hai bên cột sống, cách đường giữa gai sống 0.5 thốn',     'Cách đường giữa lưng 1.5 thốn',     'Cách đường giữa lưng 3 thốn',     'Nằm ngay trên gai đốt sống' ], dap_an: 0, giai_thich: 'Huyệt Giáp Tích gồm các điểm nằm song song hai bên cột sống, cách gai sống 0.5 thốn từ C1 đến S4.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Thận Du (BL23) nằm ở vị trí nào?', lua_chon: [     'Dưới gai đốt sống thắt lưng L2 đo ngang ra 1.5 thốn',     'Dưới gai sống L4 đo ra 1.5 thốn',     'Dưới gai sống T12 đo ra 1.5 thốn',     'Dưới rốn 3 thốn' ], dap_an: 0, giai_thich: 'Thận Du là Bối du huyệt của Thận, nằm ở bờ dưới mỏm gai L2 ngang ra 1.5 thốn.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Đại Chùy (GV14) nằm ở đâu?', lua_chon: [     'Chỗ lõm dưới mỏm gai đốt sống cổ C7',     'Dưới gai đốt sống lưng T1',     'Giữa hai lông mày',     'Sau dái tai' ], dap_an: 0, giai_thich: 'Đại Chùy thuộc Mạch Đốc, nằm ngay dưới gai đốt sống cổ C7 (đốt sống cổ nổi to nhất khi cúi đầu).'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Mệnh Môn (GV4) có vị trí ở đâu?', lua_chon: ['Chỗ lõm dưới mỏm gai đốt sống thắt lưng L2', 'Dưới gai sống L4', 'Dưới gai sống T12', 'Trên rốn 2 thốn'], dap_an: 0, giai_thich: 'Mệnh Môn thuộc Mạch Đốc, nằm ngay dưới mỏm gai L2 (đối diện rốn ra sau lưng).'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Túc Lâm Khấp (GB41) thuộc đường kinh nào?', lua_chon: ['Túc thiếu dương Đởm', 'Túc thái âm Tỳ', 'Túc quyết âm Can', 'Túc dương minh Vị'], dap_an: 0, giai_thich: 'Túc Lâm Khấp là Du huyệt kinh Đởm, nằm ở kẽ xương bàn chân 4-5.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Hoàn Khiêu (GB30) chủ trị chính chứng bệnh gì?', lua_chon: ['Đau thần kinh tọa, đau khớp hông háng, liệt chi dưới', 'Đau dạ dày', 'Đau đầu', 'Ho hen'], dap_an: 0, giai_thich: 'Hoàn Khiêu nằm ở khớp hông háng, là huyệt quan trọng điều trị đau dây thần kinh tọa và liệt chân.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Túc Quyết Âm Can khởi đầu từ huyệt nào?', lua_chon: ['Đại Đốn (LR1)', 'Thái Xung', 'Hành Gian', 'Chương Môn'], dap_an: 0, giai_thich: 'Kinh Can bắt đầu từ huyệt Đại Đốn ở góc ngoài móng ngón chân cái.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Theo phương pháp đo thốn đồng thân, 1 thốn (thốn ngón tay) tương ứng với:', lua_chon: [     'Khoảng cách giữa hai đầu nếp gấp ngón tay giữa khi co ngón tay lại',     'Chiều rộng ngón tay cái',     'Cả A và B đều đúng',     'Chiều dài ngón tay trỏ' ], dap_an: 2, giai_thich: '1 thốn ngón tay (thốn đồng thân) lấy theo độ rộng đốt ngón cái hoặc nếp co đốt giữa ngón giữa của chính bệnh nhân.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Bề rộng 4 ngón tay áp sát nhau (trỏ, giữa, áp út, út) ở khớp đốt trung tương ứng bao nhiêu thốn?', lua_chon: ['3 thốn (Danh xưng Danh chỉ thốn)', '2 thốn', '1.5 thốn', '4 thốn'], dap_an: 0, giai_thich: 'Độ rộng 4 ngón tay chụm lại tương đương 3 thốn.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Khoảng cách phân đoạn từ nếp nách trước đến nếp gấp khuỷu tay được tính là bao nhiêu thốn?', lua_chon: ['9 thốn', '12 thốn', '8 thốn', '6 thốn'], dap_an: 0, giai_thich: 'Phân đoạn khớp cánh tay: từ nếp nách đến nếp khuỷu tay bằng 9 thốn.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Khoảng cách từ nếp khuỷu tay đến nếp gấp cổ tay là bao nhiêu thốn?', lua_chon: ['12 thốn', '10 thốn', '9 thốn', '14 thốn'], dap_an: 0, giai_thich: 'Phân đoạn cẳng tay: từ nếp khuỷu đến nếp cổ tay bằng 12 thốn.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Khoảng cách từ hai đầu núm vú (ngực) được tính quy đổi là bao nhiêu thốn?', lua_chon: ['8 thốn', '6 thốn', '9 thốn', '12 thốn'], dap_an: 0, giai_thich: 'Khoảng cách giữa hai núm vú ở nam giới quy ước chuẩn là 8 thốn.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Khoảng cách từ rốn đến bờ trên xương mu là bao nhiêu thốn?', lua_chon: ['5 thốn', '4 thốn', '3 thốn', '6 thốn'], dap_an: 0, giai_thich: 'Phân đoạn hạ tiêu: từ rốn xuống bờ trên xương mu bằng 5 thốn.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Khoảng cách từ mũi kiếm xương ức (giao điểm sườn) đến rốn là bao nhiêu thốn?', lua_chon: ['8 thốn', '6 thốn', '9 thốn', '5 thốn'], dap_an: 0, giai_thich: 'Phân đoạn thượng/trung tiêu: từ đường nếp ngực ức xuống rốn bằng 8 thốn.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Khoảng cách từ đỉnh mắt cá trong đến nếp gấp khoeo chân là bao nhiêu thốn?', lua_chon: ['15 thốn', '13 thốn', '16 thốn', '12 thốn'], dap_an: 0, giai_thich: 'Phân đoạn cẳng chân mặt trong: từ mắt cá trong lên nếp khoeo bằng 13 thốn.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Phương pháp CỨU (Ngải cứu) KHÔNG áp dụng cho trường hợp nào?', lua_chon: ['Thực nhiệt, sốt cao, âm hư hỏa thịnh', 'Hàn chứng, bệnh mạn tính hư hàn', 'Trúng hàn đau bụng', 'Tỳ vị hư hàn tiêu chảy'], dap_an: 0, giai_thich: 'Ngải cứu mang tính nóng nhiệt ấm nên cấm dùng trong các trường hợp sốt cao, thực nhiệt, âm hư hỏa vượng.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Kỹ thuật "Giác hơi" (Thấu kính hơi) có tác dụng gì chủ yếu?', lua_chon: ['Thông kinh hoạt lạc, khư phong tán hàn, giảm đau giải ứ', 'Bổ âm điền tinh', 'Hạ đường huyết', 'Thanh tả thực nhiệt sâu'], dap_an: 0, giai_thich: 'Giác hơi dùng áp suất âm kích thích da cơ giúp lưu thông khí huyết, giải cảm phong hàn và giảm đau cơ.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Chống chỉ định tuyệt đối của Giác hơi là vùng nào?', lua_chon: ['Vùng da đang lở loét, vết thương hở, vùng mạch máu lớn, bụng phụ nữ mang thai', 'Vùng lưng vòm', 'Vùng mông', 'Vùng đùi'], dap_an: 0, giai_thich: 'Không giác hơi trên vùng tổn thương da, cấp cứu xuất huyết, vị trí mạch máu đập và bụng thai phụ.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Thính Cung (SI19) thuộc đường kinh nào và nằm ở đâu?', lua_chon: [     'Kinh Tiểu trường, nằm ở chỗ lõm phía trước giữa bình tai (khi há miệng)',     'Kinh Bàng quang, sau tai',     'Kinh Đởm, trên đỉnh tai',     'Kinh Vị, dưới má' ], dap_an: 0, giai_thich: 'Thính Cung thuộc kinh Tiểu trường, nằm ở rãnh trước nắp bình tai, há miệng lộ rõ chỗ lõm.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Dịch Môn (TE2) thuộc kinh nào?', lua_chon: ['Thủ thiếu dương Tam tiêu', 'Thủ thái dương Tiểu trường', 'Thủ dương minh Đại trường', 'Thủ thái âm Phế'], dap_an: 0, giai_thich: 'Dịch Môn là Huỳnh huyệt thuộc đường kinh Thủ thiếu dương Tam tiêu, ở kẽ ngón tay 4-5.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Toản Trúc (BL2) nằm ở vị trí nào?', lua_chon: ['Ở chỗ lõm đầu trong lông mày', 'Ở đuôi lông mày', 'Giữa hai lông mày', 'Ở chỗ lõm thái dương'], dap_an: 0, giai_thich: 'Toản Trúc thuộc kinh Bàng quang, nằm ở ngay đầu trong của lông mày.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Ty Trúc Không (TE23) nằm ở vị trí nào?', lua_chon: ['Chỗ lõm đầu ngoài (đuôi) lông mày', 'Đầu trong lông mày', 'Dưới hốc mắt', 'Trên lông mày 1 thốn'], dap_an: 0, giai_thich: 'Ty Trúc Không thuộc kinh Tam tiêu, nằm ở đuôi ngoài lông mày.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Thái Dương (Kỳ huyệt) nằm ở vị trí nào?', lua_chon: ['Chỗ lõm sau đuôi lông mày và đuôi mắt nối ra sau 1 thốn', 'Giữa trán', 'Sau dái tai', 'Đỉnh đầu'], dap_an: 0, giai_thich: 'Thái Dương là Ngoài kinh kỳ huyệt nằm ở chỗ lõm vùng thái dương.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Ấn Đường (Kỳ huyệt) có vị trí xác định thế nào?', lua_chon: ['Tại điểm giữa đường nối đầu trong hai lông mày', 'Giữa trán', 'Ở sống mũi', 'Ở chóp mũi'], dap_an: 0, giai_thich: 'Ấn Đường nằm chính giữa đường nối hai đầu lông mày, dùng trấn an thần, định tâm.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Nghinh Hương (LI20) chủ trị chính bệnh lý nào?', lua_chon: ['Nghẹt mũi, viêm mũi, chảy máu cam, liệt mặt', 'Đau dạ dày', 'Đau tai, ù tai', 'Đau mắt đỏ'], dap_an: 0, giai_thich: 'Nghinh Hương nằm ở điểm rãnh mũi miệng ngang chân cánh mũi, chuyên trị bệnh lý về mũi.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Địa Thương (ST4) nằm ở đâu?', lua_chon: ['Cách khóe miệng 0.4 thốn trên đường tiếp tuyến', 'Dưới cằm', 'Ở gò má', 'Dưới cánh mũi'], dap_an: 0, giai_thich: 'Địa Thương thuộc kinh Vị, nằm ngoài khóe miệng 0.4 thốn, chữa liệt mặt, chảy dãi.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Hạ Quan (ST7) nằm ở đâu và chữa bệnh gì?', lua_chon: [     'Chỗ lõm phía trước khớp thái dương hàm, trị đau răng, viêm khớp thái dương hàm, lệch mặt',     'Sau dái tai, trị ù tai',     'Dưới gò má, trị hoa mắt',     'Ở gáy, trị đau đầu' ], dap_an: 0, giai_thich: 'Hạ Quan thuộc kinh Vị, nằm ở bờ dưới cung tiếp xương gò má, chữa đau răng và khớp thái dương hàm.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Ế Phong (TE17) có vị trí ở đâu?', lua_chon: ['Chỗ lõm phía sau dái tai, giữa xương chẩm và xương hàm dưới', 'Trước tai', 'Trên đỉnh tai', 'Dưới cằm'], dap_an: 0, giai_thich: 'Ế Phong thuộc kinh Tam tiêu, nằm ở chỗ lõm đằng sau dái tai, trị điếc, ù tai, liệt mặt.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Kỹ thuật xoa bóp "Chặt" thực hiện như thế nào?', lua_chon: [     'Dùng bờ duỗi (bờ tiểu chỉ) của bàn tay đập liên tiếp lên cơ thể',     'Dùng lòng bàn tay vỗ',     'Dùng các ngón tay bấu','Dùng nắm tay đấm' ], dap_an: 0, giai_thich: 'Thủ thuật Chặt dùng bờ ngoặc út bàn tay thực hiện tác động nhịp nhàng lên các vùng cơ dầy.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Thủ thuật "Lăn" trong xoa bóp đòi hỏi tác động lực như thế nào?', lua_chon: [     'Dùng khớp ngón tay hoặc bờ ngoài bàn tay lăn cuộn liên tục trên cơ',     'Dùng ngón tay ấn đứng yên',     'Cào nhẹ trên da',     'Vắt bóp cơ thịt' ], dap_an: 0, giai_thich: 'Thủ thuật Lăn sử dụng sức vận động của cổ tay đưa ô mô út hoặc các khớp ngón tay lăn đều trên cơ.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Thủ thuật "Miết" khác thủ thuật "Xát" ở điểm nào?', lua_chon: [     'Miết dùng ngón tay ấn chặt dồn kéo da trượt trên cơ; Xát dùng lòng bàn tay trượt nhẹ nhanh gây nóng',     'Miết làm nhẹ hơn Xát',     'Xát dùng đầu ngón tay',     'Miết chỉ dùng ở mông' ], dap_an: 0, giai_thich: 'Miết dùng ngón tay miết chặt dồn da trượt sang một bên, trong khi Xát di chuyển bàn tay trượt thẳng nhanh tạo nhiệt.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Nguyên tắc "Đầu gối đau châm bên lành, chân trái đau châm chân phải" thuộc phương pháp chọn huyệt nào?', lua_chon: ['Cự thích (Thích đối bên)', 'Tuần kinh chọn huyệt', 'Tại chỗ chọn huyệt', 'Bối du huyệt chọn phương'], dap_an: 0, giai_thich: 'Cự thích là phương pháp châm bên lành đối diện để điều trị bên bệnh theo nguyên lý Âm Dương cân bằng.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Trong Dưỡng sinh Nguyễn Văn Hưởng, bài tập "Thở 4 thì" gồm những thì nào?', lua_chon: [     'Thì 1: Hít vào sâu căng bụng; Thì 2: Giữ hơi mở thanh quản; Thì 3: Thở ra tự nhiên; Thì 4: Nghỉ ngơi thư giãn',     'Thì 1: Hít vào; Thì 2: Thở ra; Thì 3: Nín thở; Thì 4: Hít tiếp',     'Thì 1: Thở ra; Thì 2: Hít vào; Thì 3: Thở ra; Thì 4: Nín thở',     'Thì 1: Nín thở; Thì 2: Hít vào; Thì 3: Nín thở; Thì 4: Thở ra' ], dap_an: 0, giai_thich: 'Phương pháp thở 4 thì của BS Nguyễn Văn Hưởng: 1-Hít vào ngực nở bụng phình; 2-Giữ hơi mở thanh quản; 3-Thở ra ngực xẹp bụng thóp; 4-Nghỉ thư giãn.'
    },
    { category: 'duongsinh', cau_hoi: 'Bài tập Dưỡng sinh "Xem diệc ngửa xem đuôi" giúp rèn luyện bộ phận nào?', lua_chon: ['Cột sống cổ và vùng vai gáy', 'Cột sống thắt lưng', 'Khớp cổ chân', 'Khớp khuỷu tay'], dap_an: 0, giai_thich: 'Động tác vận động quay xoay đầu cổ nhịp nhàng trợ giúp phòng ngừa thoái hóa cột sống cổ.'
    },
    { category: 'duongsinh', cau_hoi: 'Trong Khí công Dưỡng sinh, nguyên tắc "Thư thái, thả lỏng toàn thân, tâm trí tập trung vào hơi thở" gọi là:', lua_chon: ['Thư giãn (Bình tâm tĩnh khí)', 'Ý thủ đan điền', 'Luyện khí công', 'Bão thủ quy nguyên'], dap_an: 0, giai_thich: 'Thư giãn là bước nền tảng giúp đưa hệ thần kinh vào trạng thái ức chế bảo vệ, giảm tiêu hao năng lượng.'
    },
    { category: 'duongsinh', cau_hoi: 'Vùng "Đan điền" trong tập luyện Dưỡng sinh Khí công thường được hiểu là khu vực nào?', lua_chon: ['Vùng Hạ đan điền (dưới rốn khoảng 1.5 - 3 thốn)', 'Vùng giữa ngực', 'Đỉnh đầu', 'Sống lưng'], dap_an: 0, giai_thich: 'Hạ đan điền ở dưới rốn là trung tâm tích tụ và phát xuất khí năng của cơ thể.'
    },
    { category: 'duongsinh', cau_hoi: 'Bài tập Dưỡng sinh "Chào mặt trời / Chào công tác" nhằm mục đích gì?', lua_chon: ['Khởi động toàn thân, kéo giãn gân cốt, lưu thông khí huyết đầu ngày', 'Chữa tiêu chảy', 'Giảm đau răng', 'Trị mất ngủ ngay lập tức'], dap_an: 0, giai_thich: 'Các động tác chào mặt trời giúp hệ vận động co giãn toàn diện, thư thái tinh thần.'
    },
    { category: 'duongsinh', cau_hoi: 'Động tác "Bắc cầu" trong thể dục dưỡng sinh có tác dụng chủ yếu lên vùng nào?', lua_chon: ['Tăng cường sức mạnh cơ lưng, đùi, mông và độ dẻo cột sống thắt lưng', 'Tăng cường thị lực', 'Chữa viêm tai', 'Trị nghẹt mũi'], dap_an: 0, giai_thich: 'Động tác Bắc cầu nâng hông đùi giúp luyện dẻo dai cơ thắt lưng và duỗi khớp háng.'
    },
    { category: 'duongsinh', cau_hoi: 'Phương pháp Dưỡng sinh YHCT coi yếu tố nào là 3 bảo vật của đời sống con người ("Tam bảo")?', lua_chon: ['Tinh - Khí - Thần', 'Tâm - Tỳ - Thận', 'Âm - Dương - Khí', 'Bổ - Tả - Hòa'], dap_an: 0, giai_thich: 'Tam bảo gồm Tinh (vật chất cơ sở), Khí (năng lượng hoạt động) và Thần (hoạt động tinh thần chỉ huy).'
    },
    { category: 'duongsinh', cau_hoi: 'Mục đích cốt lõi của luyện tập Khí công Dưỡng sinh là gì?', lua_chon: ['Bảo tồn tinh khí, lưu thông khí huyết, cân bằng Âm Dương, phòng chữa bệnh', 'Tăng khối lượng cơ bắp cực đại', 'Tăng nhịp tim nhanh chóng', 'Giảm nhu cầu ăn uống hoàn toàn'], dap_an: 0, giai_thich: 'Khí công dưỡng sinh điều hòa hơi thở và tâm trí nhằm nuôi dưỡng sức sống, cân bằng trạng thái sinh lý.'
    },
    { category: 'duongsinh', cau_hoi: 'Động tác "Sờ tai, đảo mắt, dái tai" trong dưỡng sinh giúp ích cho các cơ quan nào?', lua_chon: ['Mắt, Tai, tăng tuần hoàn vùng đầu mặt', 'Tỳ vị', 'Cổ chân', 'Bàng quang'], dap_an: 0, giai_thich: 'Các tác động tự xoa bóp tại vùng ngũ quan trên mặt giúp kích thích dây thần kinh, tăng nuôi dưỡng mắt tai.'
    },
    { category: 'duongsinh', cau_hoi: 'Trạng thái "Thần khí bình hòa" khi luyện tập dưỡng sinh có tác dụng phòng ngừa tình trạng nào?', lua_chon: ['Căng thẳng thần kinh (Stress), rối loạn thần kinh thực vật', 'Béo phì', 'Gãy xương', 'Nhiễm trùng ngoài da'], dap_an: 0, giai_thich: 'Giữ tâm trí tĩnh lặng giải tỏa áp lực thần kinh, điều hòa chức năng vỏ não.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Khuyết Bồn (ST12) nằm ở đâu?', lua_chon: ['Chỗ lõm hố trên xương đòn', 'Dưới xương đòn', 'Ở hõm ức', 'Tại nách'], dap_an: 0, giai_thich: 'Khuyết Bồn thuộc kinh Vị, nằm ở chính giữa hố trên xương đòn.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Xung Môn (SP12) thuộc đường kinh nào?', lua_chon: ['Túc thái âm Tỳ', 'Túc quyết âm Can', 'Túc thiếu âm Thận', 'Túc dương minh Vị'], dap_an: 0, giai_thich: 'Xung Môn thuộc kinh Tỳ, nằm ở nếp gấp bẹn, phía ngoài động mạch đùi.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Phong Long (ST40) là huyệt chuyên dùng để chữa chứng bệnh gì nổi tiếng?', lua_chon: ['Hóa đàm (đàm trệ toàn thân, ho đờm, béo phì do đàm)', 'Thanh nhiệt hạ sốt', 'Bổ Thận âm', 'Cầm máu'], dap_an: 0, giai_thich: 'Phong Long là Lạc huyệt kinh Vị, được coi là "đệ nhất huyệt" về định tâm hóa đàm thấp.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Âm Lăng Tuyền (SP9) thuộc đường kinh nào và nằm ở đâu?', lua_chon: [     'Kinh Tỳ, nằm ở chỗ lõm bờ dưới sau lồi củ trong xương chày',     'Kinh Thận, dưới mắt cá trong',     'Kinh Can, ở mu chân',     'Kinh Đởm, bờ ngoài gối' ], dap_an: 0, giai_thich: 'Âm Lăng Tuyền là Hợp huyệt kinh Tỳ, chuyên dùng để kiện tỳ lợi thấp tiêu thũng.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Huyết Hải (SP10) có vị trí ở đâu?', lua_chon: [     'Mặt trước trong đùi, từ bờ trên trong xương bánh chè đo lên 2 thốn',     'Trên mắt cá trong 3 thốn',     'Ở giữa nếp bẹn',     'Trên bánh chè 4 thốn' ], dap_an: 0, giai_thich: 'Huyết Hải thuộc kinh Tỳ, nằm ở mặt trong đùi trên bánh chè 2 thốn, có tác dụng thanh nhiệt điều huyết.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Trung Lăng Du (BL29) nằm ở đâu?', lua_chon: ['Ngang gai sống S3 đo ra 1.5 thốn', 'Ngang L2 đo ra 1.5 thốn', 'Ngang L4 đo ra 1.5 thốn', 'Ngang S1 đo ra 1.5 thốn'], dap_an: 0, giai_thich: 'Trung Lăng Du thuộc kinh Bàng quang, ngang đốt sống thiêng S3 ra 1.5 thốn.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Trật Biên (BL54) nằm ở vị trí nào?', lua_chon: ['Ngang lỗ thiêng 4 (S4) đo ngang ra 3 thốn', 'Ngang S1 đo ra 1.5 thốn', 'Ở nếp mông', 'Ngang L2 đo ra 3 thốn'], dap_an: 0, giai_thich: 'Trật Biên thuộc kinh Bàng quang, nằm ở vùng mông ngang S4 ra 3 thốn, trị đau dây thần kinh tọa.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Côn Lôn (BL60) nằm ở vị trí nào?', lua_chon: [     'Tại chỗ lõm giữa đỉnh mắt cá ngoài và gân gót',     'Chỗ lõm giữa mắt cá trong và gân gót',     'Dưới mắt cá ngoài 1 thốn',     'Trước mắt cá ngoài' ], dap_an: 0, giai_thich: 'Côn Lôn thuộc kinh Bàng quang, nằm giữa đỉnh mắt cá ngoài và gân gót.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Thừa Sơn (BL57) nằm ở đâu?', lua_chon: ['Tại đỉnh góc nhọn tạo bởi hai bụng cơ sinh đôi bắp chân', 'Chính giữa khoeo chân', 'Dưới mắt cá ngoài', 'Ở mặt trước cẳng chân'], dap_an: 0, giai_thich: 'Thừa Sơn thuộc kinh Bàng quang, nằm ở chỗ chắp nối hai bụng cơ bắp chân (cơ bắp chuối).'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Hành Gian (LR2) thuộc đường kinh nào và ở vị trí nào?', lua_chon: [     'Huỳnh huyệt kinh Can, nằm ở kẽ ngón chân 1-2 phía sát đầu nếp da',     'Nguyên huyệt kinh Can, ở lưng bàn chân',     'Tỉnh huyệt kinh Thận',     'Kinh Tỳ, ở ngón chân cái' ], dap_an: 0, giai_thich: 'Hành Gian là Huỳnh huyệt thuộc kinh Can, chuyên thanh tả Can hỏa, nằm ở kẽ ngón chân 1-2.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Giác Tôn (TE20) có vị trí xác định thế nào?', lua_chon: ['Chính giữa bờ trên vành tai áp sát vào da đầu', 'Sau dái tai', 'Trước bình tai', 'Dưới vành tai'], dap_an: 0, giai_thich: 'Giác Tôn thuộc kinh Tam tiêu, nằm ở điểm gấp vành tai áp lên da đầu.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Thính Hội (GB2) thuộc kinh nào?', lua_chon: ['Túc thiếu dương Đởm', 'Thủ thái dương Tiểu trường', 'Thủ thiếu dương Tam tiêu', 'Túc thái dương Bàng quang'], dap_an: 0, giai_thich: 'Thính Hội thuộc kinh Đởm, nằm ở chỗ lõm phía dưới rãnh trước nắp bình tai khi há miệng.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Nhĩ Môn (TE21) thuộc đường kinh nào?', lua_chon: ['Thủ thiếu dương Tam tiêu', 'Thủ thái dương Tiểu trường', 'Túc thiếu dương Đởm', 'Thủ thiếu âm Tâm'], dap_an: 0, giai_thich: 'Nhĩ Môn thuộc kinh Tam tiêu, nằm ở chỗ lõm phía trên rãnh trước nắp bình tai.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Bộ ba huyệt chữa ồn tai, điếc tai, viêm tai ở vùng tai gồm:', lua_chon: ['Nhĩ Môn, Thính Cung, Thính Hội', 'Toản Trúc, Ty Trúc Không, Ấn Đường', 'Địa Thương, Giáp Xa, Hạ Quan', 'Ế Phong, Phong Trì, Bách Hội'], dap_an: 0, giai_thich: 'Ba huyệt nằm xếp hàng dọc trước tai (Nhĩ Môn - Tam tiêu, Thính Cung - Tiểu trường, Thính Hội - Đởm) chuyên trị bệnh về tai.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Thương Khâu (SP5) thuộc đường kinh nào?', lua_chon: ['Túc thái âm Tỳ', 'Túc thiếu âm Thận', 'Túc quyết âm Can', 'Túc dương minh Vị'], dap_an: 0, giai_thich: 'Thương Khâu là Kinh huyệt thuộc đường kinh Tỳ, nằm ở chỗ lõm phía dưới trước mắt cá trong.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Chi Câu (TE6) có vị trí ở đâu và chủ trị chứng gì nổi tiếng?', lua_chon: ['Trên nếp cổ tay sau 3 thốn giữa xương quay và xương trụ; trị táo bón, đau sườn', 'Dưới cổ tay 2 thốn, trị ho', 'Ở khuỷu tay, trị sốt', 'Ở bàn tay, trị đau đầu'], dap_an: 0, giai_thich: 'Chi Câu thuộc kinh Tam tiêu, là huyệt đặc hiệu điều trị táo bón và đau tức mạn sườn.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Ngoại Quan (TE5) là Lạc huyệt của kinh Tam tiêu, nối với mạch nào trong Kỳ kinh bát mạch?', lua_chon: ['Mạch Đải', 'Mạch Dương duy', 'Mạch Âm duy', 'Mạch Xung'], dap_an: 1, giai_thich: 'Ngoại Quan thông với Mạch Dương duy, chuyên giải biểu thanh nhiệt ngoài kinh lạc.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Khúc Trì (LI11) nằm ở đâu?', lua_chon: [     'Chính giữa tận cùng phía ngoài nếp gấp khuỷu tay khi co tay vuông góc',     'Ở bờ trong nếp khuỷu',     'Trên cổ tay 2 thốn',     'Ở mỏm khuỷu tay' ], dap_an: 0, giai_thich: 'Khúc Trì là Hợp huyệt kinh Đại trường, nằm ở đầu ngoài nếp gấp khuỷu tay, chuyên thanh nhiệt giải độc, hạ huyết áp.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Kiên Ngung (LI15) nằm ở đâu?', lua_chon: [     'Tại chỗ lõm phía trước dưới mỏm quạ vai khi dang cánh tay ngang',     'Ở sau nách',     'Trên đòn',     'Giữa khớp cổ tay' ], dap_an: 0, giai_thich: 'Kiên Ngung thuộc kinh Đại trường, nằm ở chỗ lõm phía trước vai khi dang tay 90 độ.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Kiên Trinh (SI9) thuộc kinh nào?', lua_chon: ['Thủ thái dương Tiểu trường', 'Thủ dương minh Đại trường', 'Thủ thiếu dương Tam tiêu', 'Thủ thiếu âm Tâm'], dap_an: 0, giai_thich: 'Kiên Trinh thuộc kinh Tiểu trường, nằm ở phía sau trên nếp nách sau 1 thốn.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Thiên Tông (SI11) nằm ở vị trí nào?', lua_chon: ['Tại chỗ lõm chính giữa hố dưới gai xương bả vai', 'Trên bờ vai', 'Ở nếp nách', 'Dưới gáy'], dap_an: 0, giai_thich: 'Thiên Tông thuộc kinh Tiểu trường, nằm ở vị trí trung tâm hố dưới gai xương bả vai, trị đau vai tay.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Tâm Du (BL15) nằm ở vị trí nào?', lua_chon: ['Dưới gai đốt sống lưng T5 đo ra 1.5 thốn', 'Dưới gai T3 đo ra 1.5 thốn', 'Dưới gai T7 đo ra 1.5 thốn', 'Dưới gai L2 đo ra 1.5 thốn'], dap_an: 0, giai_thich: 'Tâm Du là Bối du huyệt của Tâm, nằm dưới mỏm gai đốt sống lưng T5 ngang ra 1.5 thốn.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Phế Du (BL13) nằm ở vị trí nào?', lua_chon: ['Dưới gai đốt sống lưng T3 đo ngang ra 1.5 thốn', 'Dưới gai T5 đo ra 1.5 thốn', 'Dưới C7 đo ra 1.5 thốn', 'Dưới T1 đo ra 1.5 thốn'], dap_an: 0, giai_thich: 'Phế Du là Bối du huyệt của Phế, nằm dưới mỏm gai đốt sống T3 ngang ra 1.5 thốn.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Can Du (BL18) nằm ở đâu?', lua_chon: ['Dưới gai đốt sống lưng T9 đo ra 1.5 thốn', 'Dưới T7 đo ra 1.5 thốn', 'Dưới T11 đo ra 1.5 thốn', 'Dưới L2 đo ra 1.5 thốn'], dap_an: 0, giai_thich: 'Can Du là Bối du huyệt của Can, nằm ở bờ dưới gai đốt sống T9 ngang ra 1.5 thốn.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Tỳ Du (BL20) nằm ở vị trí nào?', lua_chon: ['Dưới gai đốt sống lưng T11 đo ra 1.5 thốn', 'Dưới T9 đo ra 1.5 thốn', 'Dưới T12 đo ra 1.5 thốn', 'Dưới L1 đo ra 1.5 thốn'], dap_an: 0, giai_thich: 'Tỳ Du là Bối du huyệt của Tỳ, nằm dưới mỏm gai T11 ngang ra 1.5 thốn.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Cách Du (BL17) là "Hội huyệt" của bộ phận nào?', lua_chon: ['Huyết (Huyết hội)', 'Khí (Khí hội)', 'Cân (Cân hội)', 'Cốt (Cốt hội)'], dap_an: 0, giai_thich: 'Cách Du nằm dưới gai T7 ra 1.5 thốn, là Huyết hội trong Bát hội huyệt, trị các bệnh về huyết.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Đại Trường Du (BL25) nằm ở vị trí nào?', lua_chon: ['Dưới gai đốt sống thắt lưng L4 đo ra 1.5 thốn', 'Dưới L2 đo ra 1.5 thốn', 'Dưới L5 đo ra 1.5 thốn', 'Dưới S1 đo ra 1.5 thốn'], dap_an: 0, giai_thich: 'Đại Trường Du nằm dưới mỏm gai L4 ngang ra 1.5 thốn, chữa đau thắt lưng, bệnh đại tràng.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Thủ thuật xoa bóp "Phân" và "Hợp" có cách làm thế nào?', lua_chon: [     'Phân: dùng 2 ngón tay/bàn tay miết di chuyển ra 2 hướng ngược nhau. Hợp: miết từ 2 hướng ngược nhau về 1 điểm chung',     'Phân là đấm nhẹ, Hợp là bóp cơ',     'Phân là cào, Hợp là phát',     'Giống hệt thủ thuật lăn' ], dap_an: 0, giai_thich: 'Phân tách ra hai bên, Hợp dồn lại một chỗ, tác động nhẹ nhàng lên da mặt hoặc ngực trán.'
    },
    { category: 'duongsinh', cau_hoi: 'Động tác dưỡng sinh "Ngõa quan / Đánh trống trời" (Minh thiên cổ) bằng cách bịt tai vỗ ngón tay vào sau chẩm có tác dụng:', lua_chon: ['Kích thích hệ thần kinh trung ương, tỉnh táo tinh thần, giảm ù tai chóng mặt', 'Làm sáng mắt', 'Chữa đau bụng', 'Làm mạnh cơ đùi'], dap_an: 0, giai_thich: 'Gõ ngón tay sau chẩm phát ra tiếng kêu vang trong đầu giúp kích thích thính giác và thần kinh.'
    },
    { category: 'duongsinh', cau_hoi: 'Bài tập Dưỡng sinh "Co duỗi tay chân, vươn vai" thích hợp nhất vào thời điểm nào?', lua_chon: ['Ngay sau khi thức dậy buổi sáng trên giường', 'Khi vừa ăn no xong', 'Khi đang sốt cao', 'Nửa đêm khi đang ngủ'], dap_an: 0, giai_thich: 'Vươn vai co duỗi trên giường giúp đánh thức cơ bắp và hệ tuần hoàn sau giấc ngủ đêm.'
    },
    { category: 'duongsinh', cau_hoi: 'Phương pháp "Xoa bụng" trong Dưỡng sinh YHCT nên xoa theo chiều nào để hỗ trợ nhuận tràng chống táo bón?', lua_chon: [     'Xoa theo chiều kim đồng hồ quanh rốn (chiều khung đại tràng)',     'Xoa ngược chiều kim đồng hồ',     'Xoa dọc thẳng từ dưới lên',     'Xoa ngang qua lại' ], dap_an: 0, giai_thich: 'Xoa bụng thuận chiều kim đồng hồ thúc đẩy dòng di chuyển cặn bã theo chiều giải phẫu của Đại tràng.'
    },
    { category: 'duongsinh', cau_hoi: 'Thời điểm nào trong ngày được coi là thích hợp nhất để tập luyện Khí công Dưỡng sinh ngoài trời?', lua_chon: ['Sáng sớm khi không khí trong lành, mặt trời mới mọc', 'Buổi trưa nắng gắt 12h', 'Nửa đêm muộn', 'Khi trời mưa rào'], dap_an: 0, giai_thich: 'Sáng sớm là thời điểm dương khí bắt đầu phát sinh, không khí trong lành tốt cho hô hấp.'
    },
    { category: 'chamcuu_xoabop', cau_hoi: 'Huyệt Thần Khuyết (CV8) nằm ở vị trí nào trên cơ thể?', lua_chon: ['Ngay chính giữa rốn', 'Trên rốn 1 thốn', 'Dưới rốn 1 thốn', 'Cạnh rốn 2 thốn'], dap_an: 0, giai_thich: 'Thần Khuyết chính là vị trí giữa rốn (chỉ cứu không châm kim).'
    },
];

const questionsDataPart5 = [
    // ==================== DƯỢC HỌC & BỆNH HỌC YHCT ====================
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Bạc hà thuộc nhóm thuốc nào trong YHCT?', lua_chon: ['Phát tán phong hàn', 'Phát tán phong nhiệt', 'Thanh nhiệt giải độc', 'Hành khí chỉ thống'], dap_an: 1, giai_thich: 'Bạc hà có vị cay, tính mát, thơm nhẹ, thuộc nhóm thuốc Tân lương giải biểu (phát tán phong nhiệt).'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Ma hoàng có tác dụng chính nào sau đây?', lua_chon: ['Phát hãn giải biểu, bình suyễn, lợi thủy', 'Tư âm giáng hỏa', 'Bổ huyết an thần', 'Thanh nhiệt lương huyết'], dap_an: 0, giai_thich: 'Ma hoàng tính ấm, vị cay đắng, có công năng phát hãn tuyên Phế bình suyễn và lợi thủy tiêu thũng.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Hoàng liên có tính vị và tác dụng nổi bật nào?', lua_chon: ['Đắng lạnh; thanh nhiệt táo thấp, tả hỏa giải độc', 'Cay nóng; ôn trung tán hàn', 'Ngọt bình; bổ khí kiện tỳ', 'Chua ấm; liễm hãn sáp tinh'], dap_an: 0, giai_thich: 'Hoàng liên vị rất đắng, tính lạnh, chuyên thanh nhiệt táo thấp ở Tâm và Vị hỏa.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Khi chế biến Sinh địa thành Thục địa (chưng với rượu, gừng, hoài sơn/sa nhân), tính vị và tác dụng thay đổi thế nào?', lua_chon: [     'Từ tính hàn sang tính ôn, tăng tác dụng tư âm bổ huyết',     'Từ tính ấm sang tính mát, tăng tác dụng giải độc',     'Từ vị đắng sang vị cay, tăng tác dụng phát hãn',     'Không thay đổi tính vị' ], dap_an: 0, giai_thich: 'Sinh địa tính đắng lạnh (thanh nhiệt) qua cửu chưng cửu sái thành Thục địa tính ấm ngọt, chuyên bổ huyết tư âm.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Kim ngân hoa chuyên trị chứng bệnh nào?', lua_chon: ['Mụn nhọt, dị ứng, mẩn ngứa, mưng mủ (thanh nhiệt giải độc)', 'Đau lưng mỏi gối do Thận hư', 'Tiêu chảy do Tỳ hư', 'Mất ngủ do Tâm huyết hư'], dap_an: 0, giai_thich: 'Kim ngân hoa là vị thuốc hàng đầu trong nhóm thanh nhiệt giải độc, trị mụn nhọt đinh độc.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Phụ tử chế có tính chất dược lý đặc biệt nào cần lưu ý?', lua_chon: ['Vị cay ngọt, tính rất nóng, có độc; tác dụng hồi dương cứu nghịch', 'Vị đắng mát, không độc', 'Tính lạnh, thanh nhiệt tả hỏa', 'Vị chua, liễm phế chỉ khái'], dap_an: 0, giai_thich: 'Phụ tử chế (rễ củ con cây Ô đầu) rất nóng, có độc, là vị thuốc chủ lực cứu thoát dương.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Bán hạ chế có công dụng chính là gì?', lua_chon: ['táo thấp hóa đàm, giáng nghịch chỉ nôn', 'Bổ khí thăng dương', 'Lương huyết chỉ huyết', 'Tư âm nhuận Phế'], dap_an: 0, giai_thich: 'Bán hạ vị cay tính ấm, chuyên trừ đàm thấp nội trệ và giáng nghịch chống nôn mửa.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Trần bì là bộ phận dùng của cây nào?', lua_chon: ['Vỏ quả chín khô của cây Quýt', 'Vỏ thân cây Hạt búp', 'Lá cây Tía tô', 'Hạt cây Cải trắng'], dap_an: 0, giai_thich: 'Trần bì là vỏ quả quýt chín (Citrus reticulata) để lâu năm, có tác dụng lý khí hóa đàm.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Đương quy được tôn vinh là vị thuốc hàng đầu về nhóm nào?', lua_chon: ['Bổ huyết và điều huyết', 'Bổ khí thăng dương', 'Thanh nhiệt giải độc', 'Trừ phong thấp'], dap_an: 0, giai_thich: 'Đương quy vị ngọt cay, tính ấm, là "Thánh dược" trong điều trị các chứng huyết hư, huyết ứ.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Nhân sâm có công năng nổi bật nhất là gì?', lua_chon: ['Đại bổ nguyên khí, sinh tân, an thần', 'Khư phong trừ thấp', 'Thanh nhiệt tả hỏa', 'Hoạt huyết hóa ứ'], dap_an: 0, giai_thich: 'Nhân sâm đại bổ nguyên khí, dùng cho các trường hợp kiệt sức, suy nhược cấp mạn tính.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Hoàng kỳ có tác dụng nào sau đây?', lua_chon: ['Bổ khí thăng dương, cố biểu chỉ hãn, lợi thủy tiêu thũng', 'Tư âm giáng hỏa', 'Lương huyết chỉ huyết', 'Thanh tỳ hỏa'], dap_an: 0, giai_thich: 'Hoàng kỳ bổ khí mạnh, giúp củng cố vệ khí chống vã mồ hôi và nâng tạng phủ bị sa.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Bạch thuật có công dụng chính là gì?', lua_chon: ['Kiện tỳ ích khí, táo thấp, lợi thủy, an thai', 'Bổ thận trợ dương', 'Thanh phế chỉ khái', 'Sơ gan giải uất'], dap_an: 0, giai_thich: 'Bạch thuật vị ngọt đắng tính ấm, là vị thuốc quan trọng nhất để kiện Tỳ và trừ thấp.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Phục linh có nguồn gốc là gì và có tác dụng gì?', lua_chon: ['Thể nấm ký sinh trên rễ cây Thông; tác dụng thẩm thấp lợi thủy, kiện tỳ, an thần', 'Vỏ cây rừng; tác dụng bổ huyết', 'Rễ củ cây cỏ; tác dụng phát hãn', 'Khoáng vật; tác dụng thanh nhiệt'], dap_an: 0, giai_thich: 'Phục linh là thể quả nấm Poria cocos ký sinh rễ thông, giúp lợi tiểu, khỏe tỳ và êm dịu thần kinh.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Cam thảo đóng vai trò gì phổ biến nhất trong các phương tễ?', lua_chon: ['Điều hòa các vị thuốc (Sứ dược), bổ tỳ ích khí, giải độc', 'Bổ thận dương mạnh nhất', 'Xổ tống tích trệ', 'Tả hỏa cực mạnh'], dap_an: 0, giai_thich: 'Cam thảo ngọt bình, giúp hòa hoãn độc tính/tính chênh lệch của các dược liệu khác trong bài thuốc.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Hoài sơn (Sơn dược) có công năng chủ yếu nào?', lua_chon: ['Bổ Tỳ, dưỡng Vị, ích Phế, bổ Thận, cố tinh', 'Hoạt huyết hóa ứ', 'Phát tán phong nhiệt', 'Thanh tả thực nhiệt'], dap_an: 0, giai_thich: 'Hoài sơn (củ khoai mài) bổ tỳ vị, ích phế thận, dùng trị tiêu chảy mạn, di tinh, tiểu đường.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Đỗ trọng có tác dụng chính là gì?', lua_chon: ['Bổ Can Thận, cường gân cốt, an thai', 'Thanh nhiệt giải độc', 'Táo thấp hóa đàm', 'Phát tán phong hàn'], dap_an: 0, giai_thich: 'Vỏ cây Đỗ trọng bổ can thận, làm chắc gân xương, dùng trị đau lưng mỏi gối, thai động.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Ba kích có tác dụng nổi bật nào?', lua_chon: ['Ôn Thận trợ dương, khư phong thấp, mạnh gân cốt', 'Tư âm nhuận phế', 'Thanh nhiệt lương huyết', 'Tiêu thực đạo trệ'], dap_an: 0, giai_thich: 'Ba kích tím vị ngọt cay tính ấm, dùng trị liệt dương, xuất tinh sớm, đau khớp do lạnh.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Kỷ tử (Cẩu kỷ tử) thuộc nhóm thuốc nào và có tác dụng gì?', lua_chon: ['Thuốc Bổ âm/Bổ huyết; tư bổ Can Thận, minh mục (sáng mắt)', 'Thuốc Tả hạ', 'Thuốc Giải biểu', 'Thuốc Ôn trung'], dap_an: 0, giai_thich: 'Kỷ tử hạt đỏ vị ngọt, chuyên nuôi dưỡng âm huyết tạng Can Thận, cải thiện thị lực.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Cúc hoa có công dụng chính là gì?', lua_chon: ['Sơ phong thanh nhiệt, bình Can sáng mắt, giải độc', 'Bổ hỏa trợ dương', 'Sáp tràng chỉ tả', 'Thông kinh phá ứ'], dap_an: 0, giai_thich: 'Cúc hoa đắng ngọt mát, chuyên chữa đau đầu phong nhiệt, mắt đỏ sưng đau do Can hỏa.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Câu đằng có tác dụng đặc trị nào?', lua_chon: ['Bình Can tức phong, thanh nhiệt trấn giật (trị cao huyết áp, co giật)', 'Bổ khí thăng dương', 'Táo thấp kiện tỳ', 'Ôn trung chỉ thống'], dap_an: 0, giai_thich: 'Móc câu cây Câu đằng chứa alkaloid hạ huyết áp, dập tắt gai phong gây co giật.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Mộc hương chuyên trị triệu chứng nào?', lua_chon: ['Đau trướng bụng, nôn mửa, tiêu chảy do khí trệ Tỳ Vị', 'Ho khô kéo dài', 'Mất ngủ kéo dài', 'Đau đầu gáy'], dap_an: 0, giai_thich: 'Mộc hương đắng cay ấm, hành khí chỉ thống cực tốt ở đường tiêu hóa.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Hương phụ (củ gấu) là vị thuốc quý chuyên dùng cho đối tượng nào?', lua_chon: ['Phụ nữ (sơ Can lý khí, điều kinh chỉ thống)', 'Trẻ em sốt cao', 'Người già hư suyễn', 'Người bị trĩ nội'], dap_an: 0, giai_thich: 'Hương phụ là "Đầu bảng phụ khoa" giúp giải uất can khí, chữa đau kinh, rối loạn kinh nguyệt.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Chỉ thực khác Chỉ xác ở điểm nào về lực tác dụng?', lua_chon: [     'Chỉ thực (quả hái non) lực phá khí tiêu tích mạnh hơn Chỉ xác (quả hái gần chín)',     'Chỉ xác lực mạnh hơn Chỉ thực',     'Chỉ thực dùng bổ khí, Chỉ xác dùng tả khí',     'Hai vị hoàn toàn giống nhau' ], dap_an: 0, giai_thich: 'Chỉ thực tính thu hái lúc quả còn nhỏ nên tính chất mãnh liệt phá trướng trệ, Chỉ xác hòa hoãn hơn.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Đan sâm có công năng nào nổi tiếng?', lua_chon: ['Hoạt huyết khư ứ, lương huyết an thần ("Nhất vị Đan sâm công đồng Tứ vật")', 'Bổ thận trợ dương', 'Phát tán phong hàn', 'Sáp tinh dừng di niệu'], dap_an: 0, giai_thich: 'Đan sâm hoạt huyết dưỡng huyết tốt đến mức cổ nhân ví tác dụng ngang bài Tứ vật thang.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Tam thất có tác dụng đặc biệt nào khi dùng trị xuất huyết?', lua_chon: ['Hóa ứ chỉ huyết (cầm máu mà không gây đọng máu ứ)', 'Gây đông máu cục bộ nguy hiểm', 'Chỉ dùng để bổ khí', 'Chỉ dùng ngoài da'], dap_an: 0, giai_thich: 'Tam thất vừa có khả năng dừng chảy máu vừa làm tan các khối máu tụ ứ trệ.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Ngưu tất có đặc tính tác dụng hướng đi nào đặc trưng?', lua_chon: ['Hoạt huyết thông kinh, bổ Can Thận, dẫn huyết (và hỏa) hạ hành xuống dưới', 'Dẫn thuốc bốc lên đầu', 'Chỉ tác dụng ở phế', 'Tụ khí ở trung tiêu'], dap_an: 0, giai_thich: 'Ngưu tất bổ gan thận, chữa đau khớp chi dưới và có xu hướng dẫn khí huyết giáng xuống.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Sơn tra chuyên tiêu hóa loại thức ăn tích trệ nào tốt nhất?', lua_chon: ['Thịt mỡ, đồ ăn nhiều dầu mỡ dính trệ', 'Đồ ăn ngũ cốc, bột đường', 'Rượu bia', 'Rau củ sống'], dap_an: 0, giai_thich: 'Sơn tra (táo mèo) chứa nhiều acid hữu cơ giúp cắt giảm và tiêu hóa dầu mỡ, thịt động vật.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Thần khúc chuyên tiêu hóa tích trệ loại thức ăn nào?', lua_chon: ['Lúa gạo, ngũ cốc, đồ ăn bột mì', 'Thịt lợn, thịt bò', 'Hải sản đồ tươi sống', 'Đồ uống lạnh'], dap_an: 0, giai_thich: 'Thần khúc làm từ bột lên men cùng dược liệu, trị tích trệ đồ ăn ngũ cốc tinh bột.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Bối mẫu có công dụng chính là gì?', lua_chon: ['Thanh nhiệt hóa đàm, nhuận Phế chỉ khái, tán kết', 'Ôn phế hóa ẩm', 'Bổ tỳ chỉ tả', 'Hoạt huyết chỉ thống'], dap_an: 0, giai_thich: 'Bối mẫu mát nhuận, chuyên trị ho do phế nhiệt, ho khô đờm dính khó khạc.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Tang bạch bì (vỏ rễ cây Dâu tằm) có tác dụng gì?', lua_chon: ['Thanh Phế bình suyễn, lợi thủy tiêu thũng', 'Ôn thận trợ dương', 'Phát tán phong hàn', 'Nhuận tràng thông tiện'], dap_an: 0, giai_thich: 'Tang bạch bì ngọt mát, thanh tả phế nhiệt ho suyễn kiêm lợi tiểu giảm phù.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Toan táo nhân (nhân hạt táo chua) cần chế biến thế nào để điều trị mất ngủ?', lua_chon: ['Sao đen / Sao vàng cháy', 'Dùng sống hoàn toàn', 'Ngâm giấm', 'Nướng vôi'], dap_an: 0, giai_thich: 'Toan táo nhân sao đắng ấm giúp dưỡng tâm an thần (dùng sống lại có tác dụng tỉnh táo).'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Viễn chí có tác dụng gì nổi bật?', lua_chon: ['Dưỡng tâm an thần, khư đàm khai khiếu', 'Bổ thận tráng dương', 'Lương huyết chỉ huyết', 'Giải biểu phát hãn'], dap_an: 0, giai_thich: 'Viễn chí đắng cay tính ấm, trừ đàm ở tâm trí giúp tinh thần minh mẫn, trị mất ngủ, hay quên.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Thương thuật có công năng nào chính?', lua_chon: ['Táo thấp kiện Tỳ, khư phong tán hàn, minh mục', 'Tư âm giáng hỏa', 'Lương huyết giải độc', 'Bổ huyết dưỡng tâm'], dap_an: 0, giai_thich: 'Thương thuật cay đắng đắng nóng, có tính táo thấp cực mạnh giúp chữa Tỳ hư thấp trệ.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Trạch tả chuyên chữa chứng bệnh nào?', lua_chon: ['Lợi thủy thẩm thấp, thanh nhiệt Hạ tiêu (trị tiểu đục, tiểu buốt, thủy thũng)', 'Bổ khí thăng dương', 'Tuyên phế chỉ khái', 'Sơ can giải uất'], dap_an: 0, giai_thich: 'Trạch tả vị ngọt nhạt tính mát, bào chế từ củ cây mã đề nước, bài trừ thủy thấp qua đường tiểu.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Xa tiền tử là bộ phận nào của cây Mã đề và có tác dụng gì?', lua_chon: ['Hạt chín khô; lợi thủy thông lâm, thanh Can sáng mắt, thanh Phế hóa đàm', 'Lá cây; chỉ có tác dụng bổ', 'Rễ cây; trị đau lưng', 'Hoa; trị mất ngủ'], dap_an: 0, giai_thich: 'Xa tiền tử là hạt mã đề, hạt nhỏ có chất nhầy giúp lợi tiểu, thanh hỏa ở Can và Phế.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Ý dĩ (hạt bo bo) có công dụng chính là gì?', lua_chon: ['Kiện tỳ lợi thấp, thanh nhiệt bài mủ, trừ tý', 'Bổ thận dương', 'Phát tán phong hàn', 'Hoạt huyết tán ứ'], dap_an: 0, giai_thich: 'Ý dĩ nhạt mát, vừa làm thực phẩm bổ dưỡng vừa kiện tỳ trừ thấp, bài mủ trong áp xe.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Sự khác biệt vùng tác dụng giữa Khương hoạt và Độc hoạt là gì?', lua_chon: [     'Khương hoạt chữa đau phong thấp nửa người trên (vai, gáy, lưng); Độc hoạt chữa nửa người dưới (thắt lưng, chân)',     'Khương hoạt chữa chân; Độc hoạt chữa tay',     'Khương hoạt chữa nhiệt; Độc hoạt chữa hàn',     'Hoàn toàn giống nhau' ], dap_an: 0, giai_thich: 'Khương hoạt chạy lên vùng thượng tiêu thái dương; Độc hoạt chạy xuống hạ tiêu thiếu âm.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Tang ký sinh (cây tầm gửi trên cây dâu tằm) có công dụng gì?', lua_chon: ['Khư phong thấp, bổ Can Thận, cường gân cốt, an thai', 'Thanh tả tỳ hỏa', 'Xổ hạ thực nhiệt', 'Hồi dương cứu nghịch'], dap_an: 0, giai_thich: 'Tang ký sinh bổ gan thận chắc xương gân, trị đau khớp mạn tính kiêm dọa sảy thai.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Can khương (củ gừng khô) khác Sinh khương (gừng tươi) ở điểm nào?', lua_chon: [     'Can khương ôn trung tán hàn nội tạng mạnh hơn; Sinh khương giải biểu phát hãn ở ngoài mạnh hơn',     'Can khương mát hơn Sinh khương',     'Can khương dùng bổ âm',     'Hai vị không khác nhau' ], dap_an: 0, giai_thich: 'Sinh khương tính tản chạy ra ngoài bì mao; Can khương giữ lại bên trong làm ấm Tỳ Vị (ôn trung).'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Kha tử chuyên chữa chứng bệnh kéo dài nào?', lua_chon: ['Ho lâu ngày mất tiếng, tiêu chảy kéo dài mạn tính (liễm Phế sáp trĩ)', 'Sốt cao cấp tính', 'Táo bón cấp', 'Đau đầu dữ dội'], dap_an: 0, giai_thich: 'Kha tử vị đắng chua chát, có tính cố sáp mạnh trị ho mạn tính khàn tiếng và đái dầm/tiêu chảy mạn.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Ô mai có tác dụng gì đối với bệnh lý đường tiêu hóa?', lua_chon: ['Liễm phế, sáp trĩ, sinh tân, an giun (trị giun chui mật)', 'Tiêu mỡ máu', 'Tả hạ thông tiện', 'Nôn mửa cấp'], dap_an: 0, giai_thich: 'Ô mai vị chua, làm êm giun (an giun) dừng đau bụng giun và làm dịu cổ họng khô.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Mẫu lệ (vỏ hàu/vỏ hến nung) có công năng gì?', lua_chon: ['Bình Can tiềm dương, nhuyễn kiên tán kết, thu hãm cố sáp', 'Bổ khí thăng dương', 'Phát tán phong nhiệt', 'Thanh nhiệt tả hạ'], dap_an: 0, giai_thich: 'Mẫu lệ là chất khoáng mặn đắng nhẹ, đè nén hỏa bốc (tiềm dương) và làm mềm khối u cứng (nhuyễn kiên).'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Huyền sâm có tác dụng chính là gì?', lua_chon: ['Tư âm giáng hỏa, thanh nhiệt lương huyết, giải độc tán kết', 'Bổ thận dương', 'Ôn trung tán hàn', 'Hành khí chỉ thống'], dap_an: 0, giai_thich: 'Huyền sâm đắng mặn mát, chuyên trị các chứng sốt cao mất nước, sưng hạch, viêm họng mạn.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Mạch môn đông chuyên dùng nuôi dưỡng âm dịch của tạng phủ nào?', lua_chon: ['Phế và Tâm (Phế vị âm hư, Tâm hỏa nhiễu)', 'Thận và Bàng quang', 'Can và Đởm', 'Tỳ và Đại tràng'], dap_an: 0, giai_thich: 'Mạch môn vị ngọt hơi đắng mát, dưỡng phế tân dịch, thanh tâm phiền.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Quy bản (Yếm rùa) thuộc nhóm thuốc nào?', lua_chon: ['Thuốc Bổ âm (Tư âm tiềm dương, bổ Thận kiện cốt)', 'Thuốc Tả hạ', 'Thuốc Phát tán', 'Thuốc Ôn lý'], dap_an: 0, giai_thich: 'Quy bản là dược liệu nguồn gốc động vật quý giúp bồi bổ phần âm kiệt quệ và làm chắc xương.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Xuyên tâm liên thuộc nhóm thuốc nào?', lua_chon: ['Thanh nhiệt giải độc', 'Bổ khí', 'Trừ phong thấp', 'Hồi dương cứu nghịch'], dap_an: 0, giai_thich: 'Xuyên tâm liên rất đắng, tính lạnh, tác dụng thanh nhiệt giải độc như kháng sinh đông y.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Mã tiền chế có tác dụng và độc tính như thế nào?', lua_chon: [     'Có độc tính cao (chứa Strychnin); tác dụng thông kinh hoạt lạc, trừ phong thấp, giảm đau dữ dội',     'Không có độc tính, dùng tùy ý',     'Chỉ dùng làm thực phẩm',     'Tính mát, bổ âm' ], dap_an: 0, giai_thich: 'Mã tiền chế chữa đau khớp nặng, liệt mặt nhưng phải kiểm soát liều nghiêm ngặt do độc tính cao.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Chứng "Tọa cốt phong" trong Y học cổ truyền tương ứng với bệnh lý nào trong Y học hiện đại?', lua_chon: ['Đau dây thần kinh hông to (thần kinh tọa)', 'Thoái hóa khớp gối', 'Viêm quanh khớp vai', 'Đau dạ dày cấp'], dap_an: 0, giai_thich: 'Tọa cốt phong mô tả chứng đau lan từ thắt lưng chạy dọc mông xuống chân theo đường đi dây thần kinh tọa.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Biểu hiện lâm sàng đặc trưng của "Trúng phong kinh lạc" là gì?', lua_chon: [     'Đột ngột méo miệng, lệch mắt, nói ngọng, tay chân yếu mỏi NHƯNG KHÔNG hôn mê',     'Đột ngột hôn mê bất tỉnh, co giật',     'Sốt cao vã mồ hôi',     'Đau bụng tiêu chảy' ], dap_an: 0, giai_thich: 'Trúng phong kinh lạc mức độ nhẹ hơn tạng phủ, tổn thương dừng ở kinh lạc nên bệnh nhân hoàn toàn tỉnh táo.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Điểm khác biệt cốt lõi giữa "Trúng phong tạng phủ" và "Trúng phong kinh lạc" là gì?', lua_chon: [     'Trúng phong tạng phủ CÓ hội chứng hôn mê, rối loạn ý thức',     'Trúng phong tạng phủ không bị méo miệng',     'Trúng phong kinh lạc nguy hiểm hơn',     'Không có điểm khác biệt' ], dap_an: 0, giai_thich: 'Tà khí trúng vào Tạng Phủ làm tâm thần bế tắc hoặc thoát gãy gây hôn mê bất tỉnh.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Chứng "Khái sậy" trong Đông y tương ứng với triệu chứng/bệnh lý nào?', lua_chon: ['Chứng Ho / Bệnh lý hô hấp', 'Chứng Tiêu chảy', 'Chứng Đau đầu', 'Chứng Liệt mặt'], dap_an: 0, giai_thich: 'Khái (ho có tiếng không đờm), Sậy (ho có đờm) gọi chung là chứng ho.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Chứng "Tiết tả" thể Tỳ hư có đặc điểm lâm sàng nào?', lua_chon: ['Phân sống, tiêu chảy kéo dài, ăn kém, bụng trướng sau ăn, mệt mỏi', 'Phân thối nồng, đái rắt', 'Sốt cao nôn mửa', 'Đau bụng dữ dội cự án'], dap_an: 0, giai_thich: 'Tỳ hư suy giảm vận hóa gây tiêu chảy mạn tính, phân nát sống.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Đau đầu do "Can dương thượng kháng" nên chọn bài thuốc nào điều trị tốt nhất?', lua_chon: ['Thiên ma câu đằng ẩm', 'Độc hoạt ký sinh thang', 'Tứ quân tử thang', 'Bình vị tán'], dap_an: 0, giai_thich: 'Thiên ma câu đằng ẩm bình can tiềm dương, trị chứng nhức đầu, chóng mặt do huyết áp cao/Can dương vượng.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Chứng "Tọa cốt phong" thể Phong hàn thấp mạn tính nên ưu tiên dùng bài thuốc nào?', lua_chon: ['Độc hoạt ký sinh thang', 'Bạch hổ thang', 'Bát chính tán', 'Long đởm tả can thang'], dap_an: 0, giai_thich: 'Độc hoạt ký sinh thang khư phong thấp chỉ thống kiêm bổ can thận khí huyết, đệ nhất trị đau thần kinh tọa.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Chứng "Hung tý" trong YHCT tương ứng với bệnh lý nào trong Y học hiện đại?', lua_chon: ['Cơn đau thắt ngực / Bệnh thiếu máu cơ tim cục bộ', 'Viêm dạ dày', 'Viêm phế quản mạn', 'Viêm cầu thận'], dap_an: 0, giai_thich: 'Hung tý mô tả chứng đau đè nén, tức nhói vùng ngực trái lan ra tay do tâm mạch bế tắc.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Bài thuốc "Bổ dương hoàn ngũ thang" chuyên dùng điều trị di chứng nào sau trúng phong?', lua_chon: ['Bán thân bất toại (liệt nửa người) thể Khí hư huyết ứ', 'Sốt cao co giật', 'Nôn ra máu', 'Tiêu chảy cấp'], dap_an: 0, giai_thich: 'Bổ dương hoàn ngũ thang dùng Hoàng kỳ liều rất cao bổ khí để thúc đẩy phục hồi liệt nửa người.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Chứng "Vị quản thống" trong YHCT tương ứng với bệnh lý nào theo Tây y?', lua_chon: ['Đau dạ dày / Viêm loét dạ dày tá tràng', 'Đau ruột thừa', 'Viêm đại tràng', 'Sỏi mật'], dap_an: 0, giai_thich: 'Vị quản thống là cơn đau vùng thượng vị (vùng dạ dày).'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Chứng "Mất ngủ" (Thất miên) thể Tâm Tỳ hư dùng bài thuốc nào hiệu quả nhất?', lua_chon: ['Quy tỳ thang', 'Đại thừa khí thang', 'Ma hoàng thang', 'Chân vũ thang'], dap_an: 0, giai_thich: 'Quy tỳ thang bổ tâm tỳ, dưỡng huyết an thần trị mất ngủ, lo âu, hồi hộp.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Thành phần bài thuốc "Nhị trần thang" dùng trị chứng đàm thấp gồm các vị nào?', lua_chon: ['Bán hạ, Trần bì, Phục linh, Cam thảo', 'Nhân sâm, Bạch thuật, Phục linh, Cam thảo', 'Đương quy, Thục địa, Bạch thược, Xuyên khung', 'Hoàng liên, Hoàng cầm, Chi tử, Bán hạ'], dap_an: 0, giai_thich: 'Nhị trần thang lấy Bán hạ và Trần bì (hai vị thuốc để càng lâu năm càng tốt) làm cốt lõi hóa đàm.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Cỏ mực (Hạn liên thảo) có tác dụng gì?', lua_chon: ['Tư âm bổ thận, lương huyết chỉ huyết (cầm máu)', 'Ôn trung tán hàn', 'Thông tiện xổ hạ', 'Phát hãn giải biểu'], dap_an: 0, giai_thich: 'Cỏ mực ngọt chua tính mát, cầm máu rất tốt do nhiệt bức huyết vọng hành.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Hòe hoa (nụ hoa cây Hòe) chứa hoạt chất Rutin có tác dụng nổi bật gì?', lua_chon: ['Làm bền thành mạch, hạ huyết áp, cầm máu (trị trĩ chảy máu, đại tiện ra máu)', 'Bổ khí', 'Tăng đường huyết', 'Gây nôn'], dap_an: 0, giai_thich: 'Rutin trong hoa hòe củng cố mao mạch, thanh nhiệt chỉ huyết trị bệnh trĩ, xuất huyết.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Nhục quế khác Quế chi ở bộ phận dùng và tính năng thế nào?', lua_chon: [     'Nhục quế là vỏ thân (ấm sâu vào trong, bổ Hỏa trợ Dương); Quế chi là cành nhỏ (chạy ra ngoài kinh lạc giải biểu)',     'Nhục quế là cành; Quế chi là vỏ',     'Nhục quế mát hơn Quế chi',     'Hoàn toàn giống nhau' ], dap_an: 0, giai_thich: 'Vỏ thân quế (Nhục quế) đi vào hạ tiêu ôn mệnh môn; Cành quế (Quế chi) đi ra vai tay phát tán phong hàn.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Xuyên khung có đặc tính điều trị đau đầu thế nào?', lua_chon: ['Là "Thánh dược chữa đau đầu", trị được đau đầu do cả phong hàn, phong nhiệt, huyết hư, huyết ứ', 'Chỉ chữa đau bụng', 'Chỉ chữa đau chân', 'Không chữa đau đầu'], dap_an: 0, giai_thich: 'Xuyên khung cay ấm, hành huyết hành khí, thông suốt kinh lạc vùng đầu mặt.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Sa nhân có công năng chính nào trên tiêu hóa và thai phụ?', lua_chon: ['Hành khí hòa vị, hóa thấp, an thai (trị nôn mửa thai nghén, bụng đầy)', 'Tả hạ thông tiện mạnh', 'Lương huyết cầm máu', 'Nhuận phế chỉ khái'], dap_an: 0, giai_thich: 'Sa nhân thơm ấm, giúp ấm trung tiêu, trừ nôn và làm yên thai trệ.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Ngũ vị tử thuộc nhóm thuốc nào và có tác dụng gì?', lua_chon: ['Thuốc Cố sáp; liễm Phế chỉ khái, sáp tinh chỉ tả, sinh tân', 'Thuốc Tả hạ', 'Thuốc Giải biểu', 'Thuốc Thanh nhiệt'], dap_an: 0, giai_thich: 'Ngũ vị tử có đủ 5 vị (chua chủ đạo), giữ khí cố tinh, trị ho mạn và vã mồ hôi.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Sơn thù dư (Sơn thù) có công năng chính là gì?', lua_chon: ['Bổ ích Can Thận, sáp tinh cố hãn', 'Thanh tả tỳ hỏa', 'Phát tán phong nhiệt', 'Thông kinh phá ứ'], dap_an: 0, giai_thich: 'Sơn thù vị chua ấm, chuyên ôn bổ can thận, giữ tinh khí không bị thất thoát.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Mạch môn đông KHÔNG nên dùng trong trường hợp nào?', lua_chon: ['Tiêu chảy do Tỳ Vị hư hàn, đàm thấp ngưng trệ', 'Phế âm hư ho khô', 'Miệng khô khát nước', 'Mất ngủ phiền rạo rực'], dap_an: 0, giai_thich: 'Mạch môn tính mát nhuận trệ, dùng cho người Tỳ hư tiêu chảy sẽ làm bệnh nặng thêm.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Long nhãn (nhãn nhục) có tác dụng chính là gì?', lua_chon: ['Bổ Tâm Tỳ, dưỡng huyết an thần', 'Thanh nhiệt giải độc', 'Khư phong trừ thấp', 'Ôn Thận trợ dương'], dap_an: 0, giai_thich: 'Long nhãn ngọt ấm, dưỡng tâm huyết, khỏe tỳ khí, chữa suy nhược mất ngủ.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Hà thủ ô đỏ có tác dụng gì nổi tiếng dân gian?', lua_chon: ['Bổ Can Thận, bổ tinh huyết, làm đen tóc, sáng mắt', 'Tả hạ chữa táo bón', 'Phát hãn chữa cảm', 'Thanh nhiệt hạ sốt'], dap_an: 0, giai_thich: 'Hà thủ ô đỏ chế đậu đen bổ thận tinh, giúp tóc đen mượt và khỏe gân xương.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Khi sử dụng Hà thủ ô sống (chưa chế biến), cần đề phòng tác dụng phụ nào?', lua_chon: ['Gây tiêu chảy, kích ứng đường ruột do chứa Anthranoid', 'Gây mất ngủ', 'Gây hạ đường huyết cấp', 'Gây tăng huyết áp'], dap_an: 0, giai_thich: 'Hà thủ ô sống chứa nhiều chất gây nhuận tràng mạnh dễ làm đi ngoài phân sống tiêu chảy.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Tang diệp (lá Dâu tằm) có công dụng chính là gì?', lua_chon: ['Sơ phong thanh nhiệt, thanh Phế nhuận táo, thanh Can sáng mắt', 'Ôn Thận trợ dương', 'Sáp tràng chỉ tả', 'Hoạt huyết chỉ thống'], dap_an: 0, giai_thich: 'Lá dâu tằm đắng ngọt mát, chuyên chữa cảm mạo phong nhiệt, ho khô và đau mắt đỏ.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Tang thầm (quả Dâu tằm chín) có tác dụng gì?', lua_chon: ['Bổ âm dưỡng huyết, sinh tân nhuận tràng', 'Táo thấp hóa đàm', 'Phát tán phong hàn', 'Hồi dương cứu nghịch'], dap_an: 0, giai_thich: 'Quả dâu chín vị ngọt chua mát, bồi bổ huyết dịch, trị táo bón do âm hư.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Đan bì (mẫu đơn bì) có công năng chủ yếu nào?', lua_chon: ['Thanh nhiệt lương huyết, hoạt huyết tán ứ', 'Ôn trung khư hàn', 'Bổ khí ích tỳ', 'Liễm hãn chỉ hãn'], dap_an: 0, giai_thich: 'Đan bì đắng cay mát, thanh sức hỏa ẩn trong huyết và giải tỏa các mảng huyết ứ.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Xa tiền thảo (cây Mã đề) khác Xa tiền tử (hạt) ở điểm nào?', lua_chon: [     'Xa tiền thảo (toàn cây) tác dụng thanh nhiệt giải độc và can hỏa mạnh hơn; Xa tiền tử (hạt) thiên về lợi thủy thông lâm hơn',     'Hoàn toàn giống nhau',     'Xa tiền thảo có tính nóng',     'Xa tiền tử dùng bổ âm' ], dap_an: 0, giai_thich: 'Toàn cây mã đề giải độc tiêu viêm tốt, hạt tập trung lực thẩm thấp lợi niệu.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Địa cốt bì là vỏ rễ của cây nào và có tác dụng gì?', lua_chon: ['Vỏ rễ cây Câu kỷ; thanh hư nhiệt, lương huyết (chữa sốt về chiều do âm hư)', 'Vỏ cây Dâu; chữa ho', 'Vỏ cây Quýt; chữa đàm', 'Vỏ cây Nhãn; chữa mất ngủ'], dap_an: 0, giai_thich: 'Địa cốt bì ngọt đắng tính mát, chuyên lui chứng sốt hấp trong xương (cốt chưng) do âm hư.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Đại hoàng có tác dụng chính nào trong nhóm Tả hạ?', lua_chon: ['Tả nhiệt thông tiện, thanh hỏa giải độc, hoạt huyết khư ứ', 'Nhuận tràng ôn dung', 'Bổ tỳ chỉ tả', 'Tuyên phế chỉ khái'], dap_an: 0, giai_thich: 'Đại hoàng đắng lạnh, là vị thuốc xổ xả nhiệt tích dồn đọng mạnh hàng đầu.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Mang tiêu (muối Natri sulfat thiên nhiên) thường phối hợp với Đại hoàng để làm gì?', lua_chon: ['Nhuận khô, mền khối phân cứng (nhuyễn kiên) để dễ tống ra ngoài', 'Bổ khí', 'Cầm tiêu chảy', 'Bổ thận'], dap_an: 0, giai_thich: 'Mang tiêu mặn lạnh hút nước làm mềm khối táo kết phân khô cứng ở đại tràng.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Bồ công anh ngoài thanh nhiệt giải độc còn đặc trị bệnh lý nào ở phụ nữ?', lua_chon: ['Nhũ ung (viêm tắc tuyến vú, sưng đau vú)', 'Rong kinh', 'Sa tử cung', 'Ốm nghén'], dap_an: 0, giai_thich: 'Bồ công anh là vị thuốc kinh điển trị viêm sưng tắc tia sữa, áp xe vú.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Tía tô (Tô diệp) có tác dụng gì cho phụ nữ mang thai?', lua_chon: ['Hành khí an thai, giảm ốm nghén nôn mửa', 'Gây sảy thai', 'Bổ huyết tuyệt đối', 'Thanh tỳ hỏa'], dap_an: 0, giai_thich: 'Tía tô cay ấm lý khí, giúp làm yên thai trệ, giảm cảm giác nôn nao nghén.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Kinh giới có đặc tính phát tán thế nào?', lua_chon: ['Tính ấm ôn hòa, chữa được cả phong hàn và phong nhiệt, sao cháy có tác dụng cầm máu', 'Tính rất lạnh', 'Chỉ chữa bệnh mạn tính', 'Gây độc cao'], dap_an: 0, giai_thich: 'Kinh giới cay ấm nhẹ, dùng giải cảm rất an toàn và Kinh giới tuệ sao đen (kinh giới thán) dùng chỉ huyết.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Cỏ tranh (Bạch mao căn) chuyên trị triệu chứng nào?', lua_chon: ['Thanh nhiệt lương huyết, lợi tiểu (chữa tiểu ra máu, chảy máu cam do nhiệt)', 'Ôn thận trợ dương', 'Táo thấp hóa đàm', 'Sơ can giải uất'], dap_an: 0, giai_thich: 'Rễ cỏ tranh ngọt mát, thanh mát máu và lợi tiểu, chữa các chứng nôn ra máu, đái ra máu.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Táo nhân (Toan táo nhân) phối hợp với Viễn chí, Phục linh nhằm mục đích gì?', lua_chon: ['Tăng cường hiệu quả dưỡng tâm an thần, trị mất ngủ lo âu', 'Tăng tác dụng tẩy xổ', 'Tăng tác dụng hạ sốt', 'Trị tiêu chảy'], dap_an: 0, giai_thich: 'Sự kết hợp này giúp vừa bổ tâm huyết vừa trừ đàm nhiễu tâm trí, mang lại giấc ngủ sâu.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Chứng "Hen suyễn" thể Phong hàn (Phế hàn ho suyễn) nên dùng vị thuốc thảo dược nào?', lua_chon: ['Ma hoàng, Hạnh nhân, Tía tô', 'Hoàng liên, Chi tử', 'Thục địa, Quy bản', 'Đại hoàng, Mang tiêu'], dap_an: 0, giai_thich: 'Ma hoàng kết hợp Hạnh nhân ôn phế tán hàn, tuyên thông khí phế giúp cắt cơn suyễn.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Chứng "Nhĩ minh / Nhĩ lung" (ù tai, điếc tai) do Thận âm hư nên chọn phương dược nào?', lua_chon: ['Lục vị địa hoàng hoàn gia Ngũ vị, Từ đá (Kỷ cúc địa hoàng / Nhĩ mông hoàn)', 'Bình vị tán', 'Ma hoàng thang', 'Bát chính tán'], dap_an: 0, giai_thich: 'Bổ thận âm kết hợp các vị dẫn thuốc lên tai giúp phục hồi thính lực do thận hư.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Khương hoàng (Củ nghệ vàng) có hoạt chất Curcumin có công năng gì?', lua_chon: ['Hành khí phá huyết, thông kinh chỉ thống, làm lành vết loét dạ dày', 'Bổ thận tráng dương', 'Phát tán phong hàn', 'Nhuận tràng sáp trĩ'], dap_an: 0, giai_thich: 'Nghệ vàng cay đắng ấm, làm tan máu ứ, chống viêm loét dạ dày và mờ sẹo.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Ngũ gia bì có công dụng chính là gì?', lua_chon: ['Khư phong thấp, bổ Can Thận, mạnh gân xương, giảm mệt mỏi', 'Thanh nhiệt giải độc', 'Nhuận phế chỉ khái', 'Lương huyết chỉ huyết'], dap_an: 0, giai_thich: 'Ngũ gia bì cay đắng ấm, làm khỏe gân xương, trừ đau nhức khớp ở người già.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Xuyên bối mẫu khác Thổ bối mẫu ở điểm nào?', lua_chon: [     'Xuyên bối mẫu tư âm nhuận Phế chỉ ho mạnh hơn; Thổ bối mẫu thanh nhiệt giải độc tán kết mạnh hơn',     'Hoàn toàn giống nhau',     'Xuyên bối mẫu có tính nóng',     'Thổ bối mẫu chuyên dùng bổ thận' ], dap_an: 0, giai_thich: 'Xuyên bối mẫu đắt tiền hơn, mát nhuận trị ho âm hư; Thổ bối mẫu chuyên trị mụn nhọt áp xe.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Cát cánh có tác dụng đặc biệt nào đối với hệ hô hấp?', lua_chon: ['Tuyên Phế, khạc đờm, lợi họng, DẪN THUỐC ĐI LÊN VÙNG THƯỢNG TIÊU (Phế)', 'Giáng khí xuống hạ tiêu', 'Nhuận tràng thông tiện', 'Bổ thận cố tinh'], dap_an: 0, giai_thich: 'Cát cánh là vị thuốc "Thăng đề" đưa dược lực của bài thuốc đi hướng lên tạng Phế và vùng họng.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Mộc thông có chống chỉ định nào quan trọng?', lua_chon: ['Phụ nữ có thai (dễ gây sảy thai/kích thích tử cung) và người Thận hư không có thấp nhiệt', 'Người ho suyễn', 'Người táo bón', 'Người mất ngủ'], dap_an: 0, giai_thich: 'Mộc thông thông lợi tác dụng mạnh, cấm dùng cho thai phụ để tránh nguy cơ sảy thai.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Hạt sen (Liên tử) có công năng chủ yếu nào?', lua_chon: ['Kiện Tỳ chỉ tả, dưỡng Tâm an thần, ích Thận cố tinh', 'Thanh nhiệt giải độc', 'Hoạt huyết tán ứ', 'Phát tán phong hàn'], dap_an: 0, giai_thich: 'Hạt sen vị ngọt tính bình, bổ cả 3 tạng Tỳ, Tâm, Thận.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Tâm sen (Liên tử tâm) có vị đắng, tính dính lạnh, chuyên trị triệu chứng nào?', lua_chon: ['Thanh Tâm hỏa, trấn an thần, chữa mất ngủ do Tâm hỏa nhiệt phiền rạo rực', 'Bổ tỳ hư tiêu chảy', 'Trị ho do phế hàn', 'Bổ thận dương'], dap_an: 0, giai_thich: 'Tim sen đắng lạnh thanh tâm hỏa cực mạnh, hạ huyết áp nhẹ và giúp ngủ ngon.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Sa nhân khi sắc thuốc YHCT cần chú ý kỹ thuật nào?', lua_chon: ['Nên đập dập và SẮC SAU (Hậu hạ) gần lúc kết thúc để tránh mất tinh dầu', 'Sắc trước 1 giờ', 'Nướng cháy đen trước khi sắc', 'Hầm chung với kim loại'], dap_an: 0, giai_thich: 'Sa nhân giàu tinh dầu thơm dễ bay hơi nên cho vào sau khi sắc thuốc gần xong (5-10 phút cuối).'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Chứng "Khớp xương sưng nóng đỏ đau cấp tính" theo YHCT thuộc thể bệnh nào?', lua_chon: ['Phong nhiệt thấp tý (Nhiệt tý)', 'Phong hàn thấp tý (Hàn tý)', 'Can Thận hư tý', 'Khí huyết hư tý'], dap_an: 0, giai_thich: 'Đau khớp có đặc tính sưng, nóng, đỏ là do nhiệt tà kết hợp phong thấp (Nhiệt tý).'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Chứng "Đau khớp lạnh tăng, gặp ấm dễ chịu, không sưng đỏ" thuộc thể bệnh nào?', lua_chon: ['Phong hàn thấp tý (Hàn tý)', 'Phong nhiệt thấp tý', 'Âm hư hỏa thịnh', 'Thực nhiệt nội kết'], dap_an: 0, giai_thich: 'Hàn tà ngưng trệ gây đau dữ dội, lạnh thì đau tăng, ấm thì dễ chịu.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Bạch mao căn là bộ phận nào của cây Cỏ tranh?', lua_chon: ['Rễ củ sống khô', 'Lá tươi', 'Hoa', 'Hạt'], dap_an: 0, giai_thich: 'Bạch mao căn là phần thân rễ màu trắng ngà của cây cỏ tranh.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Quế chi có tác dụng "Thông dương hóa khí" hỗ trợ điều trị chứng gì?', lua_chon: ['Thủy thũng, ứ đọng dịch thể do dương khí không hóa được thủy', 'Sốt cao co giật', 'Mất máu cấp', 'Nhiệt lỵ'], dap_an: 0, giai_thich: 'Quế chi ôn thông dương khí giúp Bàng quang hóa khí bài tiết nước tiểu tiêu phù.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị thuốc Bạch thược khi phối hợp với Cam thảo (Thược dược cam thảo thang) có tác dụng gì nổi tiếng?', lua_chon: ['Nhuận can chỉ thống, giảm co thắt cơ trôi/cơ xương gây đau bụng, đau chân', 'Tẩy xổ phân khô', 'Hạ sốt cao', 'Gây nôn lập tức'], dap_an: 0, giai_thich: 'Sự kết hợp Chua (Thược dược) + Ngọt (Cam thảo) hóa Âm, làm dịu gân cơ và dứt cơn co thắt đau bụng.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Khái niệm "Thất ngôn" hay "Tính năng dược liệu" bao gồm các yếu tố nào?', lua_chon: ['Tứ khí, Ngũ vị, Thăng giáng phù trầm, Quy kinh, Độc tính', 'Biểu, Lý, Hàn, Nhiệt', 'Hãn, Thổ, Hạ, Hòa', 'Tâm, Can, Tỳ, Phế'], dap_an: 0, giai_thich: 'Tính năng vị thuốc YHCT được quy định bởi Khí (tính), Vị, Hướng tác dụng (thăng giáng phù trầm) và Kinh lạc đi vào (quy kinh).'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Tứ khí (4 tính chất của vị thuốc) gồm những tính nào?', lua_chon: ['Hàn (Lạnh), Nhiệt (Nóng), Ôn (Ấm), Lương (Mát)', 'Chua, Cay, Ngọt, Đắng', 'Thăng, Giáng, Phù, Trầm', 'Âm, Dương, Biểu, Lý'], dap_an: 0, giai_thich: 'Tứ khí phản ánh mức độ ảnh hưởng nhiệt độ sinh lý của thuốc lên cơ thể: Hàn - Lương (thuộc Âm), Nhiệt - Ôn (thuộc Dương).'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Ngũ vị (5 vị của vị thuốc) bao gồm:', lua_chon: ['Tân (Cay), Cam (Ngọt), Khổ (Đắng), Toan (Chua), Hàm (Mặn)', 'Hàn, Nhiệt, Ôn, Lương, Bình', 'Xanh, Đỏ, Vàng, Trắng, Đen', 'Phong, Hàn, Thấp, Táo, Hỏa'], dap_an: 0, giai_thich: 'Ngũ vị đại diện cho 5 hương vị và tác dụng sinh lý tương ứng của dược liệu.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị CAY (Tân) của vị thuốc thường có tác dụng dược lý gì?', lua_chon: ['Phát tán, hành khí, hành huyết', 'Thu sáp, liễm hãn', 'Nhuận tràng, bổ dưỡng', 'Thanh nhiệt, tả hỏa'], dap_an: 0, giai_thich: 'Vị cay làm lưu thông khí huyết, phát tán ngoại tà ra ngoài.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị NGỌT (Cam) của vị thuốc thường có tác dụng gì?', lua_chon: ['Bồi bổ, hòa hoãn, giảm đau', 'Phát hãn giải biểu', 'Táo thấp tả hạ', 'Rút mủ tán kết'], dap_an: 0, giai_thich: 'Vị ngọt giúp bổ dưỡng cơ thể suy nhược, hòa hoãn tính dược và giảm co thắt đau.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị ĐẮNG (Khổ) của vị thuốc thường có tác dụng gì?', lua_chon: ['Thanh nhiệt, táo thấp, tả hỏa, giáng nghịch', 'Bổ khí thăng dương', 'Thu hãm cố sáp', 'Nhuận tràng'], dap_an: 0, giai_thich: 'Vị đắng giúp làm khô thấp đọng (táo thấp) và hạ hỏa sốt (thanh nhiệt tả hỏa).'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị CHUA (Toan) của vị thuốc thường có tác dụng gì?', lua_chon: ['Thu lượm, cố sáp, liễm hãn, chỉ tả (giữ không cho thất thoát)', 'Phát tán giải biểu', 'Tẩy xổ tích trệ', 'Hành khí chỉ thống'], dap_an: 0, giai_thich: 'Vị chua có tính chất co rút, giữ chặt tân dịch, mồ hôi, tinh khí không bị thoát ra ngoài.'
    },
    { category: 'duochoc_benhhoc', cau_hoi: 'Vị MẶN (Hàm) của vị thuốc thường có tác dụng gì?', lua_chon: ['Nhuyễn kiên (làm mềm khối cứng), tán kết, nhuận tràng', 'Phát tán phong hàn', 'Liễm hãn sáp tinh', 'Bình suyễn chỉ khái'], dap_an: 0, giai_thich: 'Vị mặn đi vào kinh Thận, có tác dụng làm mềm các khối u hạch cứng và thông nếp phân táo.'
    },
];

const questionsDataPartLyluanExt = [
    // ==================== HỌC THUYẾT ÂM DƯƠNG ====================
    { category: 'lyluan', cau_hoi: "Thuộc tính nào sau đây thuộc về Âm?", lua_chon: ["Tĩnh, lạnh, hướng xuống, bên trong, ức chế", "Động, nóng, hướng lên, bên ngoài, hưng phấn", "Sáng chói, vận động, vươn lên", "Nhiệt, thăng, tán, vô hình"], dap_an: 0, giai_thich: "Âm có đặc tính tĩnh, lạnh, trầm, giáng, nội, ức chế, hữu hình." },
    { category: 'lyluan', cau_hoi: "Thuộc tính nào sau đây thuộc về Dương?", lua_chon: ["Động, nóng, hướng lên, bên ngoài, hưng phấn", "Tĩnh, lạnh, hướng xuống, bên trong, ức chế", "Tối, lạnh, tích tụ, ngưng trệ", "Trầm, giáng, thu, tàng"], dap_an: 0, giai_thich: "Dương có đặc tính động, nhiệt, thăng, phát, ngoại, hưng phấn, vô hình." },
    { category: 'lyluan', cau_hoi: "Quy luật 'Âm Dương đối lập' phản ánh điều gì?", lua_chon: ["Sự mâu thuẫn, chế ước và đấu tranh giữa hai mặt Âm Dương", "Sự nương tựa lẫn nhau cùng tồn tại của Âm Dương", "Sự chuyển hóa từ Âm sang Dương và ngược lại", "Sự tăng giảm không ngừng của Âm Dương"], dap_an: 0, giai_thich: "Đối lập là sự mâu thuẫn, chế ước, ức chế lẫn nhau giữa hai mặt Âm và Dương." },
    { category: 'lyluan', cau_hoi: "Quy luật 'Âm Dương hỗ căn' nghĩa là gì?", lua_chon: ["Âm và Dương nương tựa vào nhau, làm gốc của nhau", "Âm và Dương triệt tiêu lẫn nhau", "Âm Dương luôn ở trạng thái tĩnh tuyệt đối", "Âm chuyển thành Dương khi đạt cực điểm"], dap_an: 0, giai_thich: "Hỗ căn nghĩa là Âm lấy Dương làm gốc, Dương lấy Âm làm cơ sở, không mặt nào tồn tại đơn độc." },
    { category: 'lyluan', cau_hoi: "Quy luật 'Âm Dương tiêu trưởng' nói lên điều gì?", lua_chon: ["Sự vận động, thay đổi lượng liên tục của Âm Dương trong thế cân bằng động", "Sự đứng yên vĩnh cửu của cơ thể", "Sự tiêu diệt hoàn toàn một trong hai mặt", "Sự tách rời tuyệt đối giữa Âm và Dương"], dap_an: 0, giai_thich: "Tiêu trưởng mô tả sự biến đổi số lượng: Âm tiến thì Dương lùi và ngược lại, giữ thế cân bằng động." },
    { category: 'lyluan', cau_hoi: "Quy luật 'Âm Dương chuyển hóa' xảy ra khi nào?", lua_chon: ["Khi sự tiêu trưởng đạt đến mức độ cực điểm ('Vật cực tất phản')", "Ngay từ khi mới bắt đầu vận động", "Khi cơ thể hoàn toàn khỏe mạnh không có bệnh", "Khi không có sự xuất hiện của ngoại tà"], dap_an: 0, giai_thich: "Sự chuyển hóa về chất giữa Âm và Dương xảy ra khi sự biến đổi về lượng đạt đến cực điểm." },
    { category: 'lyluan', cau_hoi: "Trạng thái 'Âm thắng tắc Hàn' thể hiện bệnh lý nào?", lua_chon: ["Thực hàn", "Hư hàn", "Thực nhiệt", "Hư nhiệt"], dap_an: 0, giai_thich: "Âm tà thịnh vượng vượt quá mức bình thường sẽ gây ra chứng Thực hàn." },
    { category: 'lyluan', cau_hoi: "Trạng thái 'Dương thắng tắc Nhiệt' thể hiện bệnh lý nào?", lua_chon: ["Thực nhiệt", "Hư nhiệt", "Thực hàn", "Hư hàn"], dap_an: 0, giai_thich: "Dương tà thịnh vượng bùng phát sẽ sinh ra chứng Thực nhiệt." },
    { category: 'lyluan', cau_hoi: "Trạng thái 'Âm hư tắc Nội nhiệt' (Âm suy dẫn đến Nhiệt) biểu hiện bệnh lý gì?", lua_chon: ["Hư nhiệt", "Thực nhiệt", "Thực hàn", "Hư hàn"], dap_an: 0, giai_thich: "Phần Âm suy yếu không chế áp được Dương gây ra chứng Hư nhiệt (sốt về chiều, ngũ tâm phiền nhiệt)." },
    { category: 'lyluan', cau_hoi: "Trạng thái 'Dương hư tắc Ngoại hàn' (Dương suy dẫn đến Hàn) biểu hiện bệnh lý gì?", lua_chon: ["Hư hàn", "Thực hàn", "Thực nhiệt", "Hư nhiệt"], dap_an: 0, giai_thich: "Dương khí suy yếu không ôn sưởi được bề mặt cơ thể gây ra chứng Hư hàn (sợ lạnh, tay chân lạnh)." },
    { category: 'lyluan', cau_hoi: "Trạng thái 'Âm tổn cập Dương' nghĩa là gì?", lua_chon: ["Phần Âm suy yếu lâu ngày dẫn đến phần Dương cũng suy yếu theo", "Dương vượng làm Âm tiêu tan", "Âm và Dương diệt vong cùng lúc", "Âm vượng lên làm Dương tăng theo"], dap_an: 0, giai_thich: "Bệnh lý Âm hư kéo dài gây tổn hại đến Dương khí, dẫn đến Âm Dương đều hư." },
    { category: 'lyluan', cau_hoi: "Trạng thái 'Dương tổn cập Âm' nghĩa là gì?", lua_chon: ["Phần Dương suy yếu lâu ngày kéo theo phần Âm bị suy hư", "Phần Âm vượng lên đè bẹp Dương", "Dương hư làm Âm tăng mạnh", "Dương biến thành Âm hoàn toàn"], dap_an: 0, giai_thich: "Dương khí suy giảm kéo dài không hóa sinh được phần Âm, dẫn đến Âm Dương đều hư." },
    { category: 'lyluan', cau_hoi: "Hiện tượng 'Chân Hàn Giả Nhiệt' xảy ra trong trường hợp nào?", lua_chon: ["Âm hàn cực thịnh ở trong đẩy hư dương nổi ra ngoài", "Dương nhiệt cực thịnh ép Âm ra ngoài", "Âm hư hỏa vượng nhẹ", "Cơ thể bình thường"], dap_an: 0, giai_thich: "Bản chất bên trong là Âm hàn cực thịnh ép chút Dương khí còn lại nổi lên bề mặt." },
    { category: 'lyluan', cau_hoi: "Hiện tượng 'Chân Nhiệt Giả Hàn' xảy ra trong trường hợp nào?", lua_chon: ["Dương nhiệt cực thịnh bế tắc ở trong làm Âm khí không thông ra ngoài", "Âm hàn cực thịnh đẩy Dương", "Dương hư nặng", "Âm hư nặng"], dap_an: 0, giai_thich: "Nội nhiệt quá thịnh bế tắc bên trong làm khí huyết không ra được tứ chi gây tay chân lạnh ngắt." },

    // ==================== HỌC THUYẾT NGŨ HÀNH ====================
    { category: 'lyluan', cau_hoi: "Theo Ngũ hành tương sinh, hành nào là 'Mẹ' của hành Mộc?", lua_chon: ["Thủy", "Hỏa", "Thổ", "Kim"], dap_an: 0, giai_thich: "Thủy sinh Mộc, nên Thủy là Mẹ của Mộc." },
    { category: 'lyluan', cau_hoi: "Theo Ngũ hành tương sinh, hành Mộc sinh ra hành nào?", lua_chon: ["Hỏa", "Thổ", "Kim", "Thủy"], dap_an: 0, giai_thich: "Mộc sinh Hỏa, nên Hỏa là Con của Mộc." },
    { category: 'lyluan', cau_hoi: "Theo Ngũ hành tương khắc, hành Mộc khắc hành nào?", lua_chon: ["Thổ", "Thủy", "Hỏa", "Kim"], dap_an: 0, giai_thich: "Mộc khắc Thổ (rễ cây đâm thủng đất)." },
    { category: 'lyluan', cau_hoi: "Theo Ngũ hành tương khắc, hành nào khắc hành Mộc?", lua_chon: ["Kim", "Hỏa", "Thổ", "Thủy"], dap_an: 0, giai_thich: "Kim khắc Mộc (dao búa chặt được cây)." },
    { category: 'lyluan', cau_hoi: "Hiện tượng hành Mộc quá mạnh lấn áp hành Thổ vượt mức bình thường gọi là gì?", lua_chon: ["Tương thừa", "Tương vũ", "Tương sinh", "Tương hòa"], dap_an: 0, giai_thich: "Mộc vốn khắc Thổ, khi Mộc quá mạnh khắc phạt thái quá lên Thổ gọi là Tương thừa (Mộc thừa Thổ)." },
    { category: 'lyluan', cau_hoi: "Hiện tượng hành Thổ cậy mạnh lấn ngược lại hành Mộc vốn khắc nó gọi là gì?", lua_chon: ["Tương vũ", "Tương thừa", "Tương sinh", "Tương hợp"], dap_an: 0, giai_thich: "Khi Mộc suy yếu, Thổ phản khắc lấn ngược lại gọi là Tương vũ (Thổ vũ Mộc)." },
    { category: 'lyluan', cau_hoi: "Theo Ngũ hành tương sinh, hành nào là 'Mẹ' của hành Hỏa?", lua_chon: ["Mộc", "Thổ", "Kim", "Thủy"], dap_an: 0, giai_thich: "Mộc sinh Hỏa, nên Mộc là Mẹ của Hỏa." },
    { category: 'lyluan', cau_hoi: "Theo Ngũ hành tương sinh, hành Hỏa sinh ra hành nào?", lua_chon: ["Thổ", "Kim", "Thủy", "Mộc"], dap_an: 0, giai_thich: "Hỏa sinh Thổ (tro bụi hóa thành đất)." },

    // ==================== HỌC THUYẾT TẠNG PHỦ ====================
    { category: 'lyluan', cau_hoi: "Tạng Can giữ vai trò chức năng chính nào sau đây?", lua_chon: ["Sơ tiết và Tàng huyết", "Chủ vận hóa thủy thấp", "Chủ tàng huyết hoàn toàn", "Chủ tuyên phát túc giáng"], dap_an: 0, giai_thich: "Can chủ sơ tiết (điều hòa khí cơ) và tàng huyết (lưu trữ/điều tiết lượng máu)." },
    { category: 'lyluan', cau_hoi: "Trong hệ thống Thập nhị quan, tạng Can được ví như vị quan nào?", lua_chon: ["Tướng quân chi quan", "Quân chủ chi quan", "Thương lẫm chi quan", "Tác hoạt chi quan"], dap_an: 0, giai_thich: "Can mưu lược, dũng cảm chống ngoại tà nên được ví là Tướng quân chi quan." },
    { category: 'lyluan', cau_hoi: "Tạng Tỳ giữ vai trò chức năng chính nào sau đây?", lua_chon: ["Vận hóa thủy cốc/thủy thấp và Thống huyết", "Chủ vận hóa thủy thấp", "Chủ tàng huyết", "Chủ tuyên phát túc giáng"], dap_an: 0, giai_thich: "Tỳ chủ vận hóa đồ ăn, phân bố tân dịch và thống quản huyết đi trong mạch." },
    { category: 'lyluan', cau_hoi: "Trong hệ thống Thập nhị quan, tạng Tỳ được ví như vị quan nào?", lua_chon: ["Thương lẫm chi quan", "Quân chủ chi quan", "Tướng quân chi quan", "Tác hoạt chi quan"], dap_an: 0, giai_thich: "Tỳ quản lý kho tàng lương thực tiêu hóa nên gọi là Thương lẫm chi quan." },
    { category: 'lyluan', cau_hoi: "Tạng Phế giữ vai trò chức năng chính nào sau đây?", lua_chon: ["Khí, hô hấp và Tuyên phát túc giáng", "Chủ vận hóa thủy thấp", "Chủ tàng huyết", "Chủ tuyên phát túc giáng"], dap_an: 0, giai_thich: "Phế làm chủ toàn thân chi khí, thực hiện hô hấp và tuyên phát túc giáng tân dịch." },
    { category: 'lyluan', cau_hoi: "Trong hệ thống Thập nhị quan, tạng Phế được ví như vị quan nào?", lua_chon: ["Tướng phó chi quan", "Quân chủ chi quan", "Tướng quân chi quan", "Thương lẫm chi quan"], dap_an: 0, giai_thich: "Phế giúp Tâm điều hành khí huyết toàn thân nên gọi là Tướng phó chi quan." },
    { category: 'lyluan', cau_hoi: "Tạng Thận giữ vai trò chức năng chính nào sau đây?", lua_chon: ["Tàng tinh, chủ thủy, chủ nạp khí, chủ cốt sinh tủy", "Chủ vận hóa thủy thấp", "Chủ tàng huyết", "Chủ tuyên phát túc giáng"], dap_an: 0, giai_thich: "Thận tàng tinh tiên/hậu thiên, chủ trì chuyển hóa nước và thu nạp khí." },
    { category: 'lyluan', cau_hoi: "Trong hệ thống Thập nhị quan, tạng Thận được ví như vị quan nào?", lua_chon: ["Tác hoạt chi quan", "Quân chủ chi quan", "Tướng quân chi quan", "Thương lẫm chi quan"], dap_an: 0, giai_thich: "Thận biểu hiện sự khéo léo, mưu trí sinh lực nên gọi là Tác hoạt chi quan." },

    // ==================== TINH - KHÍ - HUYẾT - TÂN DỊCH ====================
    { category: 'lyluan', cau_hoi: "Loại Khí nào do tinh tiên thiên cha mẹ truyền lại, tàng trữ ở Thận?", lua_chon: ["Nguyên khí (Chính khí)", "Tông khí", "Dinh khí", "Vệ khí"], dap_an: 0, giai_thich: "Nguyên khí là gốc sinh mệnh, tàng ở Thận, do tinh tiên thiên sinh ra." },
    { category: 'lyluan', cau_hoi: "Loại Khí nào được tạo thành từ sự kết hợp giữa khí trời (Phế) và tinh hoa thủy cốc (Tỳ)?", lua_chon: ["Tông khí", "Nguyên khí", "Dinh khí", "Vệ khí"], dap_an: 0, giai_thich: "Tông khí tích tụ ở ngực (Đản trung), giúp Phế hô hấp và Tâm vận hành huyết mạch." },
    { category: 'lyluan', cau_hoi: "Loại Khí nào chạy trong lòng mạch, có vai trò hóa sinh ra Huyết và nuôi dưỡng toàn thân?", lua_chon: ["Dinh khí", "Vệ khí", "Nguyên khí", "Tông khí"], dap_an: 0, giai_thich: "Dinh khí đi trong lòng mạch, là thành phần cơ bản cấu tạo nên Huyết." },
    { category: 'lyluan', cau_hoi: "Loại Khí nào vận hành ngoài lòng mạch, bảo vệ bề mặt da thịt, đóng mở lỗ mồ hôi?", lua_chon: ["Vệ khí", "Dinh khí", "Tông khí", "Nguyên khí"], dap_an: 0, giai_thich: "Vệ khí phân bố ngoài lòng mạch, ôn xưởi da thịt và chống ngoại tà xâm nhập." },
    { category: 'lyluan', cau_hoi: "Chức năng 'Cố nhiếp' của Khí phản ánh điều gì?", lua_chon: ["Quản lý, giữ dịch thể (mồ hôi, nước tiểu, huyết) không thất thoát bất thường", "Làm ấm cơ thể", "Tạo ra cảm giác ăn ngon", "Chống cảm mạo"], dap_an: 0, giai_thich: "Cố nhiếp giúp giữ huyết đi trong mạch, giữ mồ hôi, nước tiểu, tinh dịch không chảy ra bất thường." },
    { category: 'lyluan', cau_hoi: "Mối quan hệ giữa Khí và Huyết được tóm tắt qua câu nói nổi tiếng nào?", lua_chon: ["Khí vi Huyết chi soái, Huyết vi Khí chi mẫu", "Âm bình Dương bí", "Âm hư sinh nội nhiệt", "Nộ tắc khí thượng"], dap_an: 0, giai_thich: "Khí thúc đẩy/sinh/nhiếp Huyết; Huyết mang và nuôi dưỡng Khí." },
    { category: 'lyluan', cau_hoi: "Trạng thái 'Khí trệ' dẫn đến biểu hiện lâm sàng đặc trưng nào?", lua_chon: ["Đau trướng, vị trí đau di chuyển không cố định", "Đau nhói cố định một chỗ", "Mặt nhợt nhạt mất mồ hôi", "Chân tay lạnh ngắt"], dap_an: 0, giai_thich: "Khí ngưng trệ gây ra triệu chứng đau trướng, đầy hơi, di chuyển." },
    { category: 'lyluan', cau_hoi: "Trạng thái 'Huyết ứ' dẫn đến biểu hiện lâm sàng đặc trưng nào?", lua_chon: ["Đau nhói như dao đâm, vị trí cố định, lưỡi tím có điểm ứ huyết", "Đau trướng di chuyển", "Sợ lạnh thích ấm", "Vã mồ hôi liên tục"], dap_an: 0, giai_thich: "Huyết ứ cản trở lưu thông gây đau nhói cố định, nặng về đêm, lưỡi tím." },
    { category: 'lyluan', cau_hoi: "Trạng thái 'Khí hãm' (như Tỳ khí hạ hãm) gây ra chứng bệnh gì?", lua_chon: ["Sa các tạng phủ (sa dạ dày, sa tử cung, sa trĩ) và tiêu chảy mạn", "Ho bốc ngược lên", "Mất ngủ kéo dài", "Co giật tay chân"], dap_an: 0, giai_thich: "Khí hư không nâng đỡ được làm tạng phủ bị sa xuống hạ tiêu." },
    { category: 'lyluan', cau_hoi: "Trạng thái 'Khí nghịch' (Phế/Vị khí nghịch) gây ra biểu hiện gì?", lua_chon: ["Ho, suyễn, ợ hơi, nôn mửa", "Tiêu chảy phân sống", "Sa trĩ", "Lạnh tay chân"], dap_an: 0, giai_thich: "Khí cơ không giáng xuống mà bốc ngược lên trên gây ho, nôn, ợ." },

    // ==================== LỤC DÂM & THẤT TÌNH ====================
    { category: 'lyluan', cau_hoi: "Tà khí 'Phong' có đặc tính nổi bật nào?", lua_chon: ["Hay di động, biến hóa nhanh ('Phong vi bách bệnh chi thủy')", "Chủ ngưng trệ co rút", "Chủ nặng nề dính trệ", "Gây khô xơ tiêu hao dịch"], dap_an: 0, giai_thich: "Phong tà thuộc Dương, mang tính di động, biến hóa nhanh và đưa tà khí khác vào." },
    { category: 'lyluan', cau_hoi: "Tà khí 'Hàn' có đặc tính nổi bật nào?", lua_chon: ["Chủ ngưng trệ (gây đau) và thu dẫn (co rút gân cơ)", "Hay bốc lên trên", "Dính trệ kéo dài", "Gây hao khí thương tân"], dap_an: 0, giai_thich: "Hàn tà mang thuộc tính Âm, làm ngưng trệ khí huyết gây đau dữ dội và co rút gân cơ." },
    { category: 'lyluan', cau_hoi: "Tà khí 'Thấp' có đặc tính nổi bật nào?", lua_chon: ["Nặng nề (trọng), dính trệ (trệ), xu hướng hướng xuống dưới (hạ hành)", "Hay di động lên trên", "Gây co rút nhanh", "Gây khô nẻ da"], dap_an: 0, giai_thich: "Thấp tà mang tính Âm, bệnh cảnh nặng nề, dính trệ mạn tính và hay tổn thương phần dưới." },
    { category: 'lyluan', cau_hoi: "Tình chí 'Nộ' (giận dữ) làm khí cơ biến hóa thế nào?", lua_chon: ["Nộ tắc khí thượng (Khí bốc lên trên)", "Khí hạ", "Khí hoãn", "Khí kết"], dap_an: 0, giai_thich: "Giận dữ làm Can khí xông ngược lên đầu mặt gây đau đầu, mắt đỏ, nôn máu." },
    { category: 'lyluan', cau_hoi: "Tình chí 'Tư' (lo nghĩ nhiều) làm khí cơ biến hóa thế nào?", lua_chon: ["Tư tắc khí kết (Khí bị trệ ngưng lại ở Trung tiêu)", "Khí tiêu", "Khí loạn", "Khí thượng"], dap_an: 0, giai_thich: "Lo nghĩ kéo dài làm khí cơ Tỳ Vị bế tắc không vận hóa được đồ ăn." },
    { category: 'lyluan', cau_hoi: "Tình chí 'Khủng' (sợ hãi) làm khí cơ biến hóa thế nào?", lua_chon: ["Khủng tắc khí hạ (Khí suy hãm xuống dưới)", "Khí thượng", "Khí hoãn", "Khí kết"], dap_an: 0, giai_thich: "Sợ hãi làm Thận khí không cố nhiếp, khí hãm gây đái dầm, tiêu chảy." },

    // ==================== HỌC THUYẾT KINH LẠC ====================
    { category: 'lyluan', cau_hoi: "Mạch Nhâm có chức năng tổng quát là gì?", lua_chon: ["Bể của các kinh Âm ('Âm kinh chi hải')", "Bể của các kinh Dương", "Bể của Huyết", "Quản lý eo lưng"], dap_an: 0, giai_thich: "Mạch Nhâm đi ở đường giữa trước bụng ngực, hội tụ và điều tiết khí huyết tất cả kinh Âm." },
    { category: 'lyluan', cau_hoi: "Mạch Đốc có chức năng tổng quát là gì?", lua_chon: ["Bể của các kinh Dương ('Dương kinh chi hải')", "Bể của các kinh Âm", "Bể của Thủy cốc", "Chủ về vinh vệ"], dap_an: 0, giai_thich: "Mạch Đốc đi ở đường giữa sau lưng, thống quản toàn bộ các kinh Dương." },
    { category: 'lyluan', cau_hoi: "Mạch Xung có vai trò là gì?", lua_chon: ["Bể của Huyết ('Huyết hải') và Bể của 12 kinh lạc", "Bể của Âm kinh", "Chủ buộc các kinh", "Chủ về tưới nhuần"], dap_an: 0, giai_thich: "Mạch Xung hội tụ khí huyết dồi dào từ tử cung nên gọi là Bể của Huyết." },
    { category: 'lyluan', cau_hoi: "Mạch Đải có đặc điểm đường đi đặc biệt nào?", lua_chon: ["Chạy vòng quanh thắt lưng như dây đai buộc các đường kinh dọc", "Chạy từ chân lên đầu", "Chạy ở mặt trước bụng", "Chạy ở giữa sống lưng"], dap_an: 0, giai_thich: "Mạch Đải đi ngang quanh thắt lưng, giữ vai trò thắt buộc các kinh chạy dọc." },

    // ==================== CƠ CHẾ BỆNH SINH & BÁT CƯƠNG ====================
    { category: 'lyluan', cau_hoi: "Hội chứng 'Tâm Khí Hư' có triệu chứng đặc trưng nào?", lua_chon: ["Hồi hộp, đoản hơi, mệt mỏi, vận động nhẹ đã thở dốc, mạch Hư/Đoản", "Sốt cao mê sảng", "Đau nhói ngực cố định", "Sốt về chiều ngũ tâm phiền nhiệt"], dap_an: 0, giai_thich: "Tâm khí hư gây suy giảm chức năng đẩy huyết, biểu hiện hồi hộp, đoản hơi, tự hãn." },
    { category: 'lyluan', cau_hoi: "Hội chứng 'Can Khí Uất Trệ' biểu hiện bằng các triệu chứng nào?", lua_chon: ["Đau tức mạn sườn, hay thở dài, tính tình hay cáu gắt, ngực trướng", "Tiêu chảy phân sống", "Ho đờm vàng", "Lạnh lưng mỏi gối"], dap_an: 0, giai_thich: "Can khí uất trệ cản trở đường kinh Can gây tức sườn và thở dài giải uất." },
    { category: 'lyluan', cau_hoi: "Hội chứng 'Tỳ Khí Hư' biểu hiện bằng triệu chứng nào?", lua_chon: ["Ăn kém, bụng đầy trướng sau ăn, đại tiện phân nát, mệt mỏi, sắc mặt vàng nhạt", "Sốt cao vã mồ hôi", "Đau đầu như búa bổ", "Đái buốt đái dầm"], dap_an: 0, giai_thich: "Tỳ hư không vận hóa thủy cốc làm ăn kém, bụng trướng, phân nát." },
    { category: 'lyluan', cau_hoi: "Hội chứng 'Thận Âm Hư' có biểu hiện lâm sàng đặc trưng là:", lua_chon: ["Ù tai như ve kêu, chóng mặt, lưng mỏi gối yếu, sốt về chiều, mồ hôi trộm (đạo hãn)", "Sợ lạnh chân tay lạnh ngắt", "Ăn không tiêu phân sống", "Mặt đỏ như bôi phấn"], dap_an: 0, giai_thich: "Thận âm hư sinh hư nhiệt, gây ù tai, mỏi lưng, triều nhiệt, đạo hãn." },
    { category: 'lyluan', cau_hoi: "Hội chứng 'Thận Dương Hư' có biểu hiện lâm sàng đặc trưng là:", lua_chon: ["Lưng gối lạnh đau, sợ lạnh, liệt dương, di tinh, đi tiểu đêm nhiều lần, phân sống", "Sốt cao khát uống lạnh", "Đau đầu dữ dội", "Mắt sưng đỏ đau"], dap_an: 0, giai_thich: "Thận dương hư (Mệnh môn hỏa suy) làm giảm chức năng làm ấm, sinh lý suy yếu." },
    { category: 'lyluan', cau_hoi: "Khái niệm 'Chính khí tồn nội, tà bất khả can' trong Đông y có nghĩa là gì?", lua_chon: ["Khi sức đề kháng (Chính khí) trong cơ thể dồi dào thì bệnh tà không thể xâm nhập", "Mọi bệnh đều do ngoại tà", "Thuốc là quan trọng nhất", "Âm Dương luôn tách rời"], dap_an: 0, giai_thich: "Chính khí khỏe mạnh là yếu tố quyết định phòng ngừa mọi bệnh tật." },
    { category: 'lyluan', cau_hoi: "Khái niệm 'Tà chi sở tấu, kỳ khí tất hư' khẳng định điều gì?", lua_chon: ["Bệnh tà xâm nhập được vào cơ thể là do Chính khí đã bị suy yếu trước", "Do thời tiết hoàn toàn", "Do ăn uống tuyệt đối", "Do di truyền"], dap_an: 0, giai_thich: "Ngoại tà thừa cơ xâm nhập khi sức đề kháng cơ thể suy giảm." }
];

const questionsDataPartLyluanExt2 = [
    // ==================== TẠNG PHỦ TƯƠNG QUAN ====================
    { category: 'lyluan', cau_hoi: "Câu nói 'Tỳ vi sinh đàm chi nguyên, Phế vi trữ đàm chi khí' phản ánh mối quan hệ nào?", lua_chon: ["Tỳ vận hóa kém sinh đàm thấp, đàm trệ tích tụ lại ở Phế", "Phế sinh ra đàm rồi chuyển xuống Tỳ", "Can đàm uất kết sinh ra đàm ở Phế", "Thận hư không chứa được đàm"], dap_an: 0, giai_thich: "Tỳ hư thất vận sinh ra đàm thấp, đàm theo khí đi lên và chứa đọng tại Phế." },
    { category: 'lyluan', cau_hoi: "Mối quan hệ 'Tâm chủ huyết, Can tàng huyết' được thể hiện như thế nào trong cơ thể?", lua_chon: ["Tâm thúc đẩy huyết lưu thông, Can quản lý lưu trữ và điều tiết lượng huyết", "Tâm tạo ra huyết, Can tiêu hủy huyết", "Can thúc đẩy huyết đi, Tâm giữ huyết lại", "Cả hai tạng đều tàng trữ huyết như nhau"], dap_an: 0, giai_thich: "Tâm chủ vận hành huyết dịch, Can tàng trữ huyết lúc nghỉ ngơi và phân bố khi hoạt động." },
    { category: 'lyluan', cau_hoi: "Sự phối hợp giữa 'Phế chủ khí' và 'Thận nạp khí' có vai trò gì trong hô hấp?", lua_chon: ["Giúp quá trình hít thở được sâu lắng, nhịp nhàng và liên tục", "Giúp phế khí bốc mạnh lên trên", "Giúp tăng số lần thở nông", "Chỉ có tác dụng khi vận động mạnh"], dap_an: 0, giai_thich: "Phế hít khí vào nhưng Thận phải bắt giữ, nạp khí xuống dưới thì hô hấp mới sâu và đều." },
    { category: 'lyluan', cau_hoi: "Khái niệm 'Phát vi huyết chi dư' (Tóc là phần thừa của Huyết) liên quan trực tiếp đến tạng nào?", lua_chon: ["Thận và Can", "Tỳ và Vị", "Phế và Tâm", "Tâm và Đại trường"], dap_an: 0, giai_thich: "Tóc do Thận tinh sinh ra và được Can huyết nuôi dưỡng (Thận vinh nhuận ra tóc, tóc là phần thừa của huyết)." },
    { category: 'lyluan', cau_hoi: "Khái niệm 'Sỉ vi cốt chi dư' (Răng là phần thừa của Xương) phản ánh sự thịnh suy của tạng nào?", lua_chon: ["Thận", "Can", "Tỳ", "Phế"], dap_an: 0, giai_thich: "Thận chủ cốt sinh tủy, răng là phần nhô ra của xương nên sự chắc khỏe của răng do Thận quyết định." },
    { category: 'lyluan', cau_hoi: "Tạng Tỳ và tạng Phế phối hợp chặt chẽ với nhau trong quá trình nào?", lua_chon: ["Tạo thành Tông khí và phân bố Tân dịch", "Lưu trữ huyết dịch", "Thu nạp khí trời", "Thanh tả thực hỏa"], dap_an: 0, giai_thich: "Tỳ vận hóa tinh hoa thủy cốc đưa lên Phế kết hợp với khí trời tạo thành Tông khí và phân bố tân dịch." },
    { category: 'lyluan', cau_hoi: "Khái niệm 'Vị bất hòa tắc ngoạ bất an' chỉ mối liên hệ bệnh lý giữa Vị và tạng nào?", lua_chon: ["Tâm (gây mất ngủ, trằn trọc)", "Can (gây đau đầu)", "Phế (gây ho)", "Thận (gây đau lưng)"], dap_an: 0, giai_thich: "Ăn uống tích trệ ở Vị làm khí cơ không hòa降, ảnh hưởng Tâm thần gây mất ngủ, trằn trọc." },

    // ==================== BÁT CƯƠNG LÝ LUẬN NÂNG CAO ====================
    { category: 'lyluan', cau_hoi: "Trong Bát cương, hai quy cương dùng để xác định VỊ TRÍ nông sâu của bệnh là:", lua_chon: ["Biểu - Lý", "Hàn - Nhiệt", "Hư - Thực", "Âm - Dương"], dap_an: 0, giai_thich: "Biểu (ngoài da cơ kinh lạc) và Lý (bên trong tạng phủ khí huyết) chỉ vị trí bệnh." },
    { category: 'lyluan', cau_hoi: "Trong Bát cương, hai quy cương dùng để xác định TÍNH CHẤT của bệnh là:", lua_chon: ["Hàn - Nhiệt", "Biểu - Lý", "Hư - Thực", "Âm - Dương"], dap_an: 0, giai_thich: "Hàn (lạnh) và Nhiệt (nóng) xác định tính chất của hiện tượng bệnh lý." },
    { category: 'lyluan', cau_hoi: "Trong Bát cương, hai quy cương dùng để xác định TRẠNG THÁI thế lực giữa Chính khí và Tà khí là:", lua_chon: ["Hư - Thực", "Biểu - Lý", "Hàn - Nhiệt", "Âm - Dương"], dap_an: 0, giai_thich: "Hư (chính khí suy) và Thực (tà khí thịnh/tích trệ) xác định thế lực tương quan." },
    { category: 'lyluan', cau_hoi: "Trạng thái 'Hư trung giáp thực' (Hư thực hiệp tạp) nghĩa là gì?", lua_chon: ["Cơ thể vốn chính khí suy hư kiêm có tà khí tích trệ bên trong", "Hoàn toàn là thực chứng", "Hoàn toàn là hư chứng", "Cơ thể hoàn toàn khỏe mạnh"], dap_an: 0, giai_thich: "Bệnh mạn tính chính khí hư suy nhưng đồng thời có ứ huyết, đàm thấp hoặc thực tích ứ đọng." },
    { category: 'lyluan', cau_hoi: "Hội chứng 'Biểu nhiệt Lý hàn' có biểu hiện nào?", lua_chon: ["Bên ngoài sốt nhẹ, sợ gió nhưng bên trong bụng đau lạnh, tiêu chảy phân sống", "Sốt cao vã mồ hôi khát nước", "Sợ lạnh tay chân lạnh ngắt", "Mất ngủ sốt về chiều"], dap_an: 0, giai_thich: "Ngoại cảm phong nhiệt ở biểu kiêm Tỳ Vị hư hàn ở lý." },

    // ==================== KHÍ - HUYẾT - TÂN DỊCH - ĐÀM ẨM ====================
    { category: 'lyluan', cau_hoi: "Sự khác biệt cơ bản giữa 'Đàm' và 'Ẩm' trong YHCT là gì?", lua_chon: ["Đàm có chất đặc dính; Ẩm có chất trong loãng", "Đàm loãng hơn Ẩm", "Đàm do Thận sinh ra, Ẩm do Phế sinh ra", "Hoàn toàn giống nhau"], dap_an: 0, giai_thich: "Đàm ẩm đều là sản phẩm bệnh lý của thủy thấp ngưng trệ, Đàm đặc dính hơn, Ẩm trong loãng hơn." },
    { category: 'lyluan', cau_hoi: "Khái niệm 'Chân âm' (Nguyên âm) và 'Chân dương' (Nguyên dương) chỉ phần âm dương của tạng nào?", lua_chon: ["Thận", "Tâm", "Can", "Tỳ"], dap_an: 0, giai_thich: "Thận âm (Chân âm) và Thận dương (Chân dương/Mệnh môn hỏa) là gốc âm dương của toàn cơ thể." },
    { category: 'lyluan', cau_hoi: "Tân dịch sau khi được Tỳ Vị vận hóa sẽ truyền đưa lên tạng nào đầu tiên để phân bố?", lua_chon: ["Phế (Phế chủ tuyên phát túc giáng)", "Thận", "Can", "Tâm"], dap_an: 0, giai_thich: "Tỳ khí thăng thanh đưa tân dịch lên Phế, Phế tuyên phát ra da lông và túc giáng xuống Thận/Bàng quang." },
    { category: 'lyluan', cau_hoi: "Vệ khí do tạng nào tuyên phát, phân bố ra toàn bề mặt cơ thể?", lua_chon: ["Phế", "Tâm", "Tỳ", "Thận"], dap_an: 0, giai_thich: "Phế khí tuyên phát đưa Vệ khí ra ngoài bì mao để ôn xưởi và bảo vệ cơ thể." },
    { category: 'lyluan', cau_hoi: "Tông khí tích tụ tại vùng Đản trung (ngực) đảm nhận hai chức năng chính nào?", lua_chon: ["Trợ Phế hô hấp và trợ Tâm hành huyết", "Bổ thận tráng dương", "Sơ can giải uất", "Tiêu hóa đồ ăn"], dap_an: 0, giai_thich: "Tông khí thúc đẩy nhịp hít thở của Phế và vận hành huyết mạch của Tâm." },

    // ==================== KỲ KINH BÁT MẠCH ====================
    { category: 'lyluan', cau_hoi: "Ba mạch Nhâm, Đốc và Xung có đặc điểm khởi đầu chung nào?", lua_chon: ["Đều bắt nguồn từ Bào trung (hạ tiêu)", "Đều bắt đầu từ đầu mặt", "Đều bắt đầu từ ngón chân", "Đều bắt đầu từ lòng bàn tay"], dap_an: 0, giai_thich: "Ba mạch Nhâm, Đốc, Xung 'đồng khởi ư Bào trung' (đều xuất phát từ vùng hạ tiêu/tử cung)." },
    { category: 'lyluan', cau_hoi: "Sự khác biệt giữa cảm xúc 'Kinh' và 'Khủng' trong Thất tình là gì?", lua_chon: ["Kinh là hoảng sợ đột ngột (khí loạn); Khủng là sợ hãi kéo dài/biết trước (khí hạ)", "Kinh hại Thận, Khủng hại Can", "Kinh thuộc Âm, Khủng thuộc Dương", "Hoàn toàn giống nhau"], dap_an: 0, giai_thich: "Kinh là biến cố bất ngờ làm khí loạn; Khủng là tâm lý lo sợ kéo dài làm khí hãm." }
];

const questionsDataPartLyluanExt3 = [
    // ==================== TẠNG PHỦ BỆNH LÝ PHỐI HỢP ====================
    {  category: 'lyluan',  cau_hoi: "Hội chứng 'Tâm Thận Bất Giao' sinh ra do cơ chế bệnh sinh nào?",  lua_chon: [     "Thận âm hư không thủy thăng lên tế Tâm hỏa, làm Tâm hỏa độc vượng ở trên",      "Can hỏa bốc lên quấy rối Phế",      "Tỳ hư không vận hóa được thủy thấp ở Thận",      "Phế khí hư không giáng xuống Thận" ],  dap_an: 0,  giai_thich: "Thận thủy hư suy không đi lên để chế ngự Tâm hỏa, khiến Tâm hỏa bốc lên đơn độc gây mất ngủ, hồi hộp, sốt về chiều." 
    },
    {  category: 'lyluan',  cau_hoi: "Triệu chứng điển hình của hội chứng 'Can Tỳ Bất Hòa' là gì?",  lua_chon: [     "Đau tức mạn sườn, căng trướng bụng, ợ hơi, đại tiện lúc lỏng lúc táo",      "Sốt cao vã mồ hôi khát nước",      "Ho đờm vàng đặc sưng họng",      "Lạnh gối di tinh đi tiểu đêm" ],  dap_an: 0,  giai_thich: "Can khí uất trệ hoành nghịch sang khắc Tỳ thổ làm Tỳ hư thất vận, sinh trướng bụng và rối loạn đại tiện." 
    },
    {  category: 'lyluan',  cau_hoi: "Biểu hiện nổi bật của hội chứng 'Can Vị Bất Hòa' là gì?",  lua_chon: [     "Đau trướng vùng thượng vị lan ra hai mạn sườn, ợ chua, nôn mửa, đắng miệng",      "Tiêu chảy phân sống lúc sáng sớm",      "Mất ngủ gò má đỏ",      "Ho ra máu sốt về chiều" ],  dap_an: 0,  giai_thich: "Can khí uất phạm Vị làm Vị khí không giáng xuống mà bốc ngược lên trên gây ợ chua, nôn mửa và đau thượng vị." 
    },
    {  category: 'lyluan',  cau_hoi: "Hội chứng 'Thận Khí Bất Cố' dẫn đến triệu chứng đặc trưng nào?",  lua_chon: [     "Di tinh, hoạt tinh, đái dầm, tiểu đêm nhiều lần, di niệu",      "Sốt cao cuồng loạn",      "Mắt sưng đỏ đau",      "Ho suyễn khạc đờm đặc" ],  dap_an: 0,  giai_thich: "Thận khí suy yếu giảm khả năng cố nhiếp, không quản lý được tinh dịch và đường niệu." 
    },
    {  category: 'lyluan',  cau_hoi: "Triệu chứng lâm sàng chủ yếu của hội chứng 'Thận Bất Nạp Khí' là gì?",  lua_chon: [     "Ho suyễn thở gấp, thở vào khó hơn thở ra, vận động nhẹ đã khó thở",      "Ợ hơi nuốt chua",      "Tiêu chảy phân nát có mủ",      "Đau nhói vùng ngực cố định" ],  dap_an: 0,  giai_thich: "Thận hư không thu bắt và giữ được khí từ Phế đưa xuống, gây khó thở đặc biệt ở thì hít vào." 
    },
    {  category: 'lyluan',  cau_hoi: "Triệu chứng nổi bật của hội chứng 'Tỳ Bất Thống Huyết' là gì?",  lua_chon: [     "Xuất huyết dưới da, chảy máu cam, rong kinh, đại tiện ra máu sắc nhạt",      "Đi tiểu ra máu buốt dắt do nhiệt",      "Sốt cao nôn ra máu đỏ tươi",      "Đau đầu dữ dội nôn máu" ],  dap_an: 0,  giai_thich: "Tỳ khí hư suy không cai quản, giữ được huyết đi trong lòng mạch, làm huyết tràn ra ngoài gây xuất huyết mạn tính nhạt sắc." 
    },

    // ==================== CHẨN ĐOÁN LÝ LUẬN (TỨ CHẨN) ====================
    {  category: 'lyluan',  cau_hoi: "Trạng thái 'Còn Thần' (Hữu thần) trong Vọng chẩn biểu hiện qua yếu tố nào?",  lua_chon: [     "Ánh mắt linh hoạt, sắc mặt hồng hào nhuận, tinh thần tỉnh táo, thở đều",      "Thần trí lơ mơ, mắt lờ đờ",      "Sắc mặt xanh xao khô sạm",      "Thở đứt quãng tiếng nhỏ" ],  dap_an: 0,  giai_thich: "Hữu thần chứng tỏ tinh khí chưa suy, chính khí còn dồi dào, tiên lượng bệnh tốt." 
    },
    {  category: 'lyluan',  cau_hoi: "Trạng thái 'Mất Thần' (Thất thần) phản ánh tình trạng bệnh lý như thế nào?",  lua_chon: [     "Chính khí đã suy kiệt nghiêm trọng, tinh khí hao tổn, tiên lượng nặng",      "Chính khí mới bị tổn thương nhẹ",      "Cơ thể hoàn toàn khỏe mạnh",      "Tà khí đã bị tiêu trừ hoàn toàn" ],  dap_an: 0,  giai_thich: "Thất thần biểu hiện qua ánh mắt đờ đẫn, tinh thần mệt mỏi cuồng loạn, báo hiệu chính khí suy kiệt." 
    },
    {  category: 'lyluan',  cau_hoi: "Hiện tượng 'Giả Thần' (Hồi quang phản chiếu) biểu hiện như thế nào?",  lua_chon: [     "Bệnh nhân đang nguy ngập đột nhiên tỉnh táo, đòi ăn, gò má đỏ rực rồi tử vong",      "Bệnh nhân từ khỏe mạnh đột nhiên mê man",      "Bệnh nhân sốt cao co giật",      "Bệnh nhân ngủ mê không tỉnh" ],  dap_an: 0,  giai_thich: "Đây là hiện tượng âm dương sắp ly quyết, chút tàn dương cuối cùng bộc phát ra trước khi tử vong." 
    },
    {  category: 'lyluan',  cau_hoi: "Bệnh nhân có biểu hiện 'Ố hàn phát nhiệt' (Sợ lạnh kèm sốt) báo hiệu bệnh ở đâu?",  lua_chon: [     "Biểu chứng (Ngoại cảm giai đoạn đầu)",      "Lý thực nhiệt chứng",      "Tỳ vị hư hàn",      "Âm hư hư nhiệt" ],  dap_an: 0,  giai_thich: "Sợ lạnh kèm sốt là dấu hiệu đặc trưng khi ngoại tà mới xâm nhập phần biểu, vệ khí bị bó lại đấu tranh với tà khí." 
    },
    {  category: 'lyluan',  cau_hoi: "Bệnh nhân khát nước nhưng chỉ muốn súc miệng không muốn nuốt thuộc về chứng gì?",  lua_chon: [     "Huyết ứ hoặc Thấp nhiệt nội đọng",      "Thực nhiệt ở Khí phận",      "Tỳ vị hư hàn",      "Phế hỏa cực thịnh" ],  dap_an: 0,  giai_thich: "Thấp nhiệt hoặc huyết ứ cản trở tân dịch phân bố gây cảm giác khô miệng khát, nhưng bản thân cơ thể không thiếu nước nên không muốn nuốt." 
    },

    // ==================== MẠCH HỌC LÝ LUẬN ====================
    {  category: 'lyluan',  cau_hoi: "Mạch 'Phù' có đặc điểm tay bắt mạch như thế nào?",  lua_chon: [     "Ấn nhẹ tay đã thấy đập rõ, ấn nặng lực giảm (đi ở bề nông)",      "Ấn nặng mới thấy đập sát xương",      "Nhịp đập chậm dưới 60 lần/phút",      "Nhịp đập cực nhanh trên 90 lần/phút" ],  dap_an: 0,  giai_thich: "Mạch Phù nổi ở bề nông do chính khí hướng ra ngoài bề mặt để chống ngoại tà ở phần Biểu." 
    },
    {  category: 'lyluan',  cau_hoi: "Mạch 'Trầm' biểu thị tà khí hoặc bệnh lý đang ở vị trí nào?",  lua_chon: [     "Lý chứng (Bệnh ở sâu bên trong tạng phủ)",      "Biểu chứng",      "Khí hư nhẹ ngoài da",      "Thực nhiệt ở Vệ phận" ],  dap_an: 0,  giai_thich: "Mạch Trầm chìm sâu sát xương, ấn nặng mới thấy rõ, chủ về Lý chứng (tạng phủ, khí huyết bên trong)." 
    },
    {  category: 'lyluan',  cau_hoi: "Mạch 'Trì' (nhịp đập dưới 60 lần/phút) đại diện cho nhóm chứng bệnh nào?",  lua_chon: [     "Hàn chứng",      "Nhiệt chứng",      "Phong chứng",      "Thấp chứng" ],  dap_an: 0,  giai_thich: "Hàn tính ngưng trệ làm vận hành khí huyết chậm lại sinh ra Mạch Trì." 
    },
    {  category: 'lyluan',  cau_hoi: "Mạch 'Sác' (nhịp đập trên 90 lần/phút) đại diện cho nhóm chứng bệnh nào?",  lua_chon: [     "Nhiệt chứng",      "Hàn chứng",      "Âm chứng",      "Hư chứng thuần túy" ],  dap_an: 0,  giai_thich: "Nhiệt tính đun nóng thúc đẩy dòng huyết lưu thông dồn dập sinh ra Mạch Sác." 
    },
    {  category: 'lyluan',  cau_hoi: "Mạch 'Huyền' (căng thẳng như dây đàn) thường xuất hiện trong bệnh lý nào?",  lua_chon: [     "Bệnh tạng Can, Đởm, chứng Đau, hoặc Đàm trệ",      "Tỳ vị hư hàn",      "Phế khí hư",      "Thận âm hư thuần túy" ],  dap_an: 0,  giai_thich: "Can chủ co duỗi, can khí uất trệ hoặc cơn đau cấp làm mạch tượng căng cứng như dây đàn (Mạch Huyền)." 
    },
    {  category: 'lyluan',  cau_hoi: "Mạch 'Hoạt' (đi trơn tru như hạt châu lăn) chủ về các chứng bệnh nào?",  lua_chon: [     "Đàm thấp, Thực tích (thức ăn ứ trệ), hoặc phụ nữ có thai sinh lý",      "Mất máu cấp",      "Dương khí kiệt",      "Can huyết hư" ],  dap_an: 0,  giai_thich: "Đàm thấp và thực tích làm khí huyết lưu thông trơn tuột dồn dập, hoặc khí huyết dồi dào khi dưỡng thai." 
    },

    // ==================== BỆNH CƠ NỘI PHONG & ĐÀM ẨM ====================
    {  category: 'lyluan',  cau_hoi: "Khái niệm 'Thủy hỏa ký tế' chỉ sự hòa hợp sinh lý giữa hai tạng nào?",  lua_chon: [     "Tâm (Hỏa) và Thận (Thủy)",      "Can (Mộc) và Tỳ (Thổ)",      "Phế (Kim) và Thận (Thủy)",      "Tỳ (Thổ) và Vị (Thổ)" ],  dap_an: 0,  giai_thich: "Tâm hỏa giáng xuống sưởi ấm Thận thủy; Thận thủy thăng lên làm mát Tâm hỏa, tạo thế quân bình Thủy Hỏa." 
    },
    {  category: 'lyluan',  cau_hoi: "'Nội phong' (Can phong nội động) thường sinh ra từ 4 cơ chế bệnh sinh nào?",  lua_chon: [     "Can dương thượng kháng, Nhiệt cực sinh phong, Âm hư sinh phong, Huyết hư sinh phong",      "Phong hàn, Phong nhiệt, Phong thấp, Phong táo",      "Tỳ hư, Phế hư, Thận hư, Tâm hư",      "Thực tích, Đàm trệ, Huyết ứ, Khí trệ" ],  dap_an: 0,  giai_thich: "Đây là 4 con đường chính dẫn đến triệu chứng động phong (co giật, run, choáng váng, liệt mặt) từ bên trong." 
    },
    {  category: 'lyluan',  cau_hoi: "Triệu chứng điển hình của bệnh cơ 'Nhiệt cực sinh phong' là gì?",  lua_chon: [     "Sốt cao tột độ, co giật, cổ cứng, trợn mắt, hôn mê",      "Chân tay lạnh ngắt, phân sống",      "Da khô tróc vảy",      "Ho đờm trắng loãng" ],  dap_an: 0,  giai_thich: "Nhiệt tà nhập thiêu đốt kinh giáp làm thiêu gân cơ gây co giật dữ dội trong sốt cao." 
    },
    {  category: 'lyluan',  cau_hoi: "'Vô hình chi đàm' (Đàm không có hình khối khạc ra được) gây ra triệu chứng bệnh lý nào?",  lua_chon: [     "Chóng mặt, hoa mắt (Đàm mông thanh khiếu) hoặc Mai hạch khí, điên giản",      "Ho khạc ra đờm đặc",      "Sốt vã mồ hôi",      "Đau khớp gối sưng đỏ" ],  dap_an: 0,  giai_thich: "Vô hình chi đàm ứ trệ ở kinh lạc, tim, não gây ra hoa mắt, mất trí, hoảng loạn hoặc vướng họng." 
    }
];

const questionsDataPartLyluanExt4 = [
    // ==================== KHÍ CƠ & SỰ THĂNG GIÁNG TẠNG PHỦ ====================
    {  category: 'lyluan',  cau_hoi: "Mối quan hệ thăng giáng giữa Tỳ và Vị trong hoạt động tiêu hóa diễn ra như thế nào?",  lua_chon: [     "Tỳ khí chủ thăng (đưa chất tinh hoa lên), Vị khí chủ giáng (đưa cặn bã xuống)",      "Tỳ khí chủ giáng, Vị khí chủ thăng",      "Cả Tỳ và Vị đều chủ thăng",      "Cả Tỳ và Vị đều chủ giáng" ],  dap_an: 0,  giai_thich: "Tỳ chủ thăng thanh (đưa tinh hoa thủy cốc lên Phế/Tâm); Vị chủ giáng trọc (đẩy cặn bã xuống Tiểu trường/Đại trường)." 
    },
    {  category: 'lyluan',  cau_hoi: "Sự điều hòa khí cơ giữa Can và Phế tuân theo quy luật thăng giáng nào?",  lua_chon: [     "Can khí chủ thăng ở bên trái, Phế khí chủ giáng ở bên phải",      "Can khí chủ giáng, Phế khí chủ thăng",      "Cả hai tạng cùng thăng",      "Cả hai tạng cùng giáng" ],  dap_an: 0,  giai_thich: "Can Mộc có tính thăng phát ở bên trái, Phế Kim có tính túc giáng ở bên phải, phối hợp tạo nên chu trình thăng giáng khí cơ." 
    },
    {  category: 'lyluan',  cau_hoi: "Đặc điểm thăng giáng phân chia theo chức năng của Tam tiêu được Nội Kinh mô tả là gì?",  lua_chon: [     "Thượng tiêu như sương mù (Vụ), Trung tiêu như vũng ngâm (Đầm), Hạ tiêu như ngòi rãnh (Độc)",      "Thượng tiêu như nước chảy, Hạ tiêu như sương mù",      "Trung tiêu như ngòi rãnh, Hạ tiêu như đầm",      "Tam tiêu đồng nhất như ngòi rãnh chảy" ],  dap_an: 0,  giai_thich: "Thượng tiêu phân bố tân dịch như sương (như Vụ); Trung tiêu làm nhừ thức ăn (như Đầm); Hạ tiêu bài tiết thủy bã (như Độc)." 
    },

    // ==================== CHẨN ĐOÁN LƯỠI & MẠCH TƯỢNG BỔ SUNG ====================
    {  category: 'lyluan',  cau_hoi: "Mạch 'Nhu' (đi nổi nông, nhỏ, mềm nhũn) phản ánh tình trạng bệnh lý nào?",  lua_chon: [     "Thấp tà ứ trệ hoặc Khí huyết suy hư",      "Thực nhiệt thịnh ở Khí phận",      "Can hỏa bốc cao",      "Phong hàn bó chặt bề ngoài" ],  dap_an: 0,  giai_thich: "Mạch Nhu nổi nông nhưng ấn vào mềm yếu nhũn, chủ về Thấp tà gây cản trở hoặc Khí huyết hư suy không đầy mạch." 
    },
    {  category: 'lyluan',  cau_hoi: "Mạch 'Khấu' (ấn vào thấy rỗng ở giữa như cọng hành) xuất hiện trong trường hợp nào?",  lua_chon: [     "Mất máu cấp tính (Đại xuất huyết) hoặc mất tân dịch dồn dập",      "Thực tích đồ ăn tích trệ",      "Đàm nhiệt uất Phế",      "Ngoại cảm phong nhiệt" ],  dap_an: 0,  giai_thich: "Mạch Khấu rỗng ruột do thành mạch căng nhưng huyết dịch/tân dịch bên trong bị thất thoát dồn dập." 
    },
    {  category: 'lyluan',  cau_hoi: "Mạch 'Xúc' có đặc điểm nhịp đập và giá trị chẩn đoán như thế nào?",  lua_chon: [     "Nhịp đập nhanh (Sác) kiêm có đoạn ngừng nghỉ KHÔNG theo quy luật; chủ về Dương nhiệt thịnh, trệ khí, huyết ứ",      "Nhịp đập chậm kiêm có đoạn nghỉ đều đặn",      "Nhịp đập yếu chìm sát xương",      "Nhịp đập chậm kiêm có đoạn nghỉ không quy luật" ],  dap_an: 0,  giai_thich: "Mạch Xúc là mạch Sác chảy nhanh kiêm có nhịp ngừng nghỉ ngắt quãng không đều do nhiệt tà hay huyết trệ ngưng bế." 
    },
    {  category: 'lyluan',  cau_hoi: "Mạch 'Kết' có đặc điểm nhịp đập và giá trị chẩn đoán như thế nào?",  lua_chon: [     "Nhịp đập chậm (Trì) kiêm có đoạn ngừng nghỉ KHÔNG theo quy luật; chủ về Âm thịnh, hàn đàm, huyết ứ",      "Nhịp đập nhanh kiêm có đoạn nghỉ đều",      "Nhịp đập to rộng cuồn cuộn",      "Nhịp đập chìm sâu dồn dập" ],  dap_an: 0,  giai_thich: "Mạch Kết là mạch Trì đập chậm kiêm có khoảng dừng ngắt quãng không đều do âm hàn ngưng trệ gây cản trở dòng chảy." 
    },
    {  category: 'lyluan',  cau_hoi: "Mạch 'Đại' (Đại mạch) có đặc điểm và ý nghĩa lâm sàng nguy hiểm như thế nào?",  lua_chon: [     "Nhịp đập có khoảng ngừng nghỉ CÓ CHU KỲ QUY LUẬT rõ rệt; chủ về Tạng khí suy kiệt nghiêm trọng",      "Nhịp đập nhanh liên tục không ngừng",      "Nhịp đập căng như dây đàn",      "Nhịp đập trơn tru như hạt châu" ],  dap_an: 0,  giai_thich: "Mạch Đại đập ngừng nghỉ có quy luật chu kỳ định sẵn, báo hiệu tạng khí suy vi, nguy cấp." 
    },
    {  category: 'lyluan',  cau_hoi: "Chất lưỡi bong rêu hoàn toàn thành từng mảng nham nhở (Lưỡi bản đồ) thể hiện tổn thương ở đâu?",  lua_chon: [     "Vị khí và Vị âm bị tổn thương không nuôi dưỡng được rêu lưỡi",      "Can huyết hư nặng",      "Phế khí hư",      "Thận dương suy kiệt" ],  dap_an: 0,  giai_thich: "Rêu lưỡi do Vị khí huân chưng sinh ra; lưỡi bản đồ tróc rêu từng mảng biểu thị Vị âm/Vị khí suy hư." 
    },

    // ==================== BỆNH CƠ TẠNG PHỦ CHUYÊN SÂU ====================
    {  category: 'lyluan',  cau_hoi: "Tạng Can và tạng Đởm phối hợp với nhau như thế nào trong hoạt động tâm lý?",  lua_chon: [     "Can chủ về Mưu lược (đưa ra ý tưởng), Đởm chủ về Quyết đoán (đưa ra quyết định)",      "Can chủ quyết đoán, Đởm chủ mưu lược",      "Cả hai cùng chủ về tư duy tinh thần",      "Can chủ thần minh, Đởm chủ huyết mạch" ],  dap_an: 0,  giai_thich: "Can mưu trí lập kế hoạch; Đởm dũng cảm đưa ra quyết định hành động." 
    },
    {  category: 'lyluan',  cau_hoi: "Chức năng chính của 'Tâm Bao Lạc' (Màng ngoài tâm) đối với tạng Tâm là gì?",  lua_chon: [     "Bảo vệ tạng Tâm, gánh chịu tà khí thay cho Tâm khi ngoại tà xâm nhập",      "Tàng trữ tinh khí thay Tâm",      "Quản lý việc tiêu hóa thức ăn",      "Bài tiết tân dịch ra ngoài" ],  dap_an: 0,  giai_thich: "Tâm Bao Lạc bọc bên ngoài bảo vệ Tâm, khi nhiệt tà xâm nhập Tâm bao (Bế chứng) sẽ chịu tổn thương trước." 
    },
    {  category: 'lyluan',  cau_hoi: "Tà khí 'Thử' (nắng hè) hay có đặc tính phối hợp với tà khí nào để gây bệnh?",  lua_chon: [     "Thấp tà (Thử kiêm Thấp)",      "Hàn tà",      "Táo tà",      "Phong tà thuần túy" ],  dap_an: 0,  giai_thich: "Mùa hè thời tiết nóng bức kèm độ ẩm cao nên Thử tà rất hay kết hợp với Thấp tà gây bệnh sốt, ngực tức, tiêu chảy." 
    },
    {  category: 'lyluan',  cau_hoi: "Biểu hiện lâm sàng nổi bật của chứng 'Thấp nhiệt Đại trường' là gì?",  lua_chon: [     "Đau bụng, đi ngoài ra mủ máu (mót rặn), hậu môn nóng rát, phân hôi nồng",      "Phân sống lỏng nát lúc sáng sớm",      "Táo bón nhiều ngày phân khô cứng như phân dê",      "Sợ lạnh nôn ra nước trong" ],  dap_an: 0,  giai_thich: "Thấp nhiệt ứ trệ ở Đại trường làm tổn thương huyết mạch ruột sinh ra lỵ mủ máu, mót rặn và nóng rát hậu môn." 
    },
    {  category: 'lyluan',  cau_hoi: "Biểu hiện đặc trưng của chứng 'Bàng quang Thấp nhiệt' (Nhiệt lâm) là gì?",  lua_chon: [     "Đái buốt, đái rắt, nước tiểu vàng đục hoặc có máu, đau tức vùng hạ vị",      "Đi tiểu đêm nhiều lần nước tiểu trong dài",      "Đi tiểu không tự chủ do Thận hư",      "Tiểu dầm khi ngủ" ],  dap_an: 0,  giai_thich: "Thấp nhiệt dồn xuống Bàng quang làm rối loạn chức năng hóa khí bài tiết nước tiểu, gây buốt rắt và đục." 
    }
];

const questionsDataPartLyluanExt5 = [
    // ==================== HỌC THUYẾT KINH LẠC & HUYỆT VỊ LÝ LUẬN ====================
    {  category: 'lyluan',  cau_hoi: "Khái niệm 'Bối Du Huyệt' trong hệ thống kinh lạc là gì?",  lua_chon: [     "Các huyệt nằm ở vùng lưng, nơi khí của ngũ tạng lục phủ rót ra bề mặt cơ thể",      "Các huyệt nằm ở ngực bụng",      "Các huyệt nằm ở đầu chi",      "Các huyệt giao hội của 8 mạch kỳ kinh" ],  dap_an: 0,  giai_thich: "Bối Du huyệt nằm trên kinh Bàng quang ở vùng lưng, là nơi kinh khí của các tạng phủ rót ra." 
    },
    {  category: 'lyluan',  cau_hoi: "Khái niệm 'Mộ Huyệt' trong lý luận huyệt vị YHCT có nghĩa là gì?",  lua_chon: [     "Các huyệt nằm ở vùng ngực bụng, nơi khí của tạng phủ tập trung kết tụ lại",      "Các huyệt nằm ở sau lưng",      "Các huyệt nằm ở khuỷu tay và khớp gối",      "Các huyệt nằm ở kẽ ngón tay ngón chân" ],  dap_an: 0,  giai_thich: "Mộ huyệt nằm ở vùng ngực và bụng, là nơi khí của tạng phủ kết tụ ở mặt trước cơ thể." 
    },
    {  category: 'lyluan',  cau_hoi: "Theo nguyên tắc phối hợp huyệt 'Du Mộ phối huyệt', khi chữa bệnh thuộc tạng phủ thể Âm/Hư nên chọn thế nào?",  lua_chon: [     "Thường chọn Bối Du huyệt (thuộc Dương) ở lưng để điều trị bệnh thuộc Âm",      "Chỉ chọn Mộ huyệt ở bụng",      "Chỉ dùng huyệt ở vùng chân",      "Chỉ châm các huyệt ở đầu" ],  dap_an: 0,  giai_thich: "Theo quy luật Âm Dương, bệnh Âm/Lý/Hư chọn Bối Du huyệt ở lưng (Dương) để ôn dưỡng chấn hưng." 
    },
    {  category: 'lyluan',  cau_hoi: "Trong Bát Hội Huyệt, huyệt nào là 'Khí hội' (nơi hội tụ khí toàn thân)?",  lua_chon: [     "Đản Trung (CV17)",      "Cách Du (BL17)",      "Trung Quản (CV12)",      "Dương Lăng Tuyền (GB34)" ],  dap_an: 0,  giai_thich: "Đản Trung nằm giữa ngực là nơi tích tụ Tông khí và là Khí hội trong Bát hội huyệt." 
    },
    {  category: 'lyluan',  cau_hoi: "Trong Bát Hội Huyệt, huyệt nào là 'Huyết hội' (chuyên chữa các bệnh về huyết)?",  lua_chon: [     "Cách Du (BL17)",      "Đản Trung (CV17)",      "Thái Xung (LR3)",      "Huyết Hải (SP10)" ],  dap_an: 0,  giai_thich: "Cách Du (nằm ở đốt sống lưng T7 ra 1.5 thốn) là Huyết hội trong Bát hội huyệt." 
    },

    // ==================== NGUYÊN TẮC CHỮA BỆNH & BÁT PHÁP ====================
    {  category: 'lyluan',  cau_hoi: "Nguyên tắc trị bệnh 'Trị bệnh cầu bản' trong Đông y có nghĩa là gì?",  lua_chon: [     "Chữa bệnh phải tìm tận gốc rễ nguyên nhân gây bệnh để điều trị",      "Chỉ tập trung chữa triệu chứng ngọn bên ngoài",      "Chỉ dùng thuốc bổ nâng cao sức khỏe",      "Chờ bệnh nặng mới bắt đầu điều trị" ],  dap_an: 0,  giai_thich: "Cầu bản là tìm đúng bản chất nguyên nhân cơ chế sinh bệnh để gỡ gốc tận cùng." 
    },
    {  category: 'lyluan',  cau_hoi: "Nguyên tắc 'Cấp tắc trị kỳ tiêu, hoãn tắc trị kỳ bản' được áp dụng như thế nào?",  lua_chon: [     "Bệnh cấp bách (tiêu) phải chữa triệu chứng trước để cấp cứu; bệnh mạn tính êm dịu (bản) chữa vào gốc bệnh",      "Luôn chữa gốc bệnh trước trong mọi trường hợp",      "Chỉ chữa triệu chứng ngọn",      "Bệnh nhẹ thì cấp cứu, bệnh nặng thì hoãn lại" ],  dap_an: 0,  giai_thich: "Khi triệu chứng ngọn đe dọa tính mạng (như sốt cao co giật, xuất huyết dồn dập) phải giải quyết 'Tiêu' trước rồi mới chữa 'Bản'." 
    },
    {  category: 'lyluan',  cau_hoi: "Nguyên tắc 'Tam nhân chế nghi' trong điều trị YHCT bao gồm 3 yếu tố chế nghi nào?",  lua_chon: [     "Nhân thời chế nghi, Nhân địa chế nghi, Nhân nhân chế nghi",      "Nhân Tỳ, Nhân Phế, Nhân Thận",      "Nhân Phong, Nhân Hàn, Nhân Thấp",      "Nhân Âm, Nhân Dương, Nhân Khí" ],  dap_an: 0,  giai_thich: "Chữa bệnh phải linh hoạt tùy theo Mùa/Thời tiết (Thời), Vùng miền/Địa lý (Địa) và Thể trạng/Cơ địa con người (Nhân)." 
    },
    {  category: 'lyluan',  cau_hoi: "Thủ pháp 'Hãn pháp' trong Bát pháp điều trị có tác dụng gì?",  lua_chon: [     "Làm ra mồ hôi để xua đuổi tà khí ở phần Biểu ra ngoài",      "Gây nôn tống chất độc ra",      "Tẩy xổ phân khô tích trệ",      "Bồi bổ khí huyết hư suy" ],  dap_an: 0,  giai_thich: "Hãn pháp (phương pháp phát hãn) dùng thuốc cay ấm/mát làm khai mở lỗ mồ hôi giải ngoại tà ở biểu." 
    },
    {  category: 'lyluan',  cau_hoi: "Thủ pháp 'Hạ pháp' trong Bát pháp điều trị áp dụng cho trường hợp nào?",  lua_chon: [     "Thực nhiệt tích trệ ở Đại tràng gây táo bón, phân khô kết",      "Ngoại cảm phong hàn ở bề ngoài",      "Khí huyết suy hư nặng",      "Bệnh ở bán biểu bán lý" ],  dap_an: 0,  giai_thich: "Hạ pháp (phương pháp tẩy xổ) dùng tống thực tích, nhiệt kết ở đại tràng theo đường đại tiện ra ngoài." 
    },
    {  category: 'lyluan',  cau_hoi: "Thủ pháp 'Hòa pháp' trong Bát pháp điều trị áp dụng cho bệnh lý ở vị trí nào?",  lua_chon: [     "Bệnh ở vị trí Bán biểu Bán lý (như kinh Thiếu dương) hoặc tạng phủ bất hòa",      "Bệnh hoàn toàn ở nông ngoài da",      "Bệnh tích tụ sâu gây táo bón nặng",      "Bệnh thoát dương cấp cứu" ],  dap_an: 0,  giai_thich: "Hòa pháp hòa giải sự xung đột, áp dụng cho bệnh bán biểu bán lý (như Tiêu sài hồ thang) hoặc Can Tỳ bất hòa." 
    },
    {  category: 'lyluan',  cau_hoi: "Thủ pháp 'Thanh pháp' trong Bát pháp điều trị có công dụng chính là gì?",  lua_chon: [     "Dùng thuốc tính hàn lương để thanh giải hỏa nhiệt, giải độc ở trong",      "Dùng thuốc tính nóng để làm ấm trung tiêu",      "Dùng thuốc bổ để điền tinh",      "Dùng thuốc chát để cầm tiêu chảy" ],  dap_an: 0,  giai_thich: "Thanh pháp (thanh nhiệt tả hỏa) dùng các vị đắng lạnh/mát để tiêu trừ hỏa nhiệt nội tạng." 
    },
    {  category: 'lyluan',  cau_hoi: "Thủ pháp 'Ôn pháp' trong Bát pháp điều trị được chỉ định cho chứng bệnh nào?",  lua_chon: [     "Các chứng Lý hàn, Tỳ Vị hư hàn, Thận dương hư",      "Sốt cao vã mồ hôi khát nước",      "Thực nhiệt tích trệ ở ruột",      "Viêm nhiễm sưng nóng đỏ đau cấp tính" ],  dap_an: 0,  giai_thich: "Ôn pháp (làm ấm) dùng các vị cay nóng ôn trung khư hàn để xua tan âm hàn nội tạng." 
    },
    {  category: 'lyluan',  cau_hoi: "Thủ pháp 'Tiêu pháp' trong Bát pháp điều trị có tác dụng gì?",  lua_chon: [     "Làm mềm và tiêu tan các khối tích trệ hữu hình (thức ăn tích, ứ huyết, đàm ứ, mụn nhọt)",      "Gây nôn thức ăn",      "Làm ra mồ hôi nhanh",      "Bồi bổ khí huyết toàn thân" ],  dap_an: 0,  giai_thich: "Tiêu pháp (tiêu đạo tán kết) làm tiêu tan từ từ các khối tích trệ hữu hình trong cơ thể." 
    }
];

const questionsDataPartLyluanExt6 = [
    // ==================== MẠCH TƯỢNG VÀ BỆNH LÝ CHUYÊN SÂU ====================
    {  category: 'lyluan',  cau_hoi: "Mạch 'Đoản' (nhịp mạch ngắn, không lấp đầy đủ 3 bộ Thốn - Quan - Xích) phản ánh chứng bệnh gì?",  lua_chon: [     "Khí hư (không đủ sức thúc đẩy) hoặc Khí trệ (khí bị bế tắc)",      "Dương nhiệt cực thịnh",      "Huyết ứ toàn thân",      "Thủy thấp ứ đọng nặng" ],  dap_an: 0,  giai_thich: "Mạch Đoản không kéo dài qua 3 bộ do khí suy hư không thúc đẩy được dòng mạch hoặc khí bị uất trệ cản trở." 
    },
    {  category: 'lyluan',  cau_hoi: "Mạch 'Trường' (nhịp mạch dài vượt quá vị trí Thốn - Xích, đi thong dong mềm mại) biểu hiện điều gì?",  lua_chon: [     "Chính khí dồi dào, mạch tượng của người bình thường khỏe mạnh",      "Âm hư hỏa vượng nặng",      "Khí huyết kiệt quệ",      "Nhiệt cực sinh phong" ],  dap_an: 0,  giai_thich: "Mạch Trường đi dài dồi dào, nhịp điệu thong dong là biểu hiện chính khí đầy đủ, khí huyết hòa hợp." 
    },
    {  category: 'lyluan',  cau_hoi: "Mạch 'Phục' (ấn chìm sát xương, phải dùng lực ấn rất nặng mới thấy đập) báo hiệu tình trạng nào?",  lua_chon: [     "Tà khí bế tắc nghiêm trọng, đau đớn dữ dội hoặc Bế chứng",      "Ngoại cảm phong nhiệt nhẹ",      "Thực tích đồ ăn mới mắc",      "Khí huyết vượng thịnh" ],  dap_an: 0,  giai_thich: "Mạch Phục ẩn sát xương do tà khí bế tắc nặng hoặc đau đớn cực độ làm khí huyết không phát lộ ra bề ngoài." 
    },
    {  category: 'lyluan',  cau_hoi: "Mạch 'Táo' (nhịp đập gấp gáp, lăn tăn, 1 nhịp thở trên 6 lần đập) chủ yếu gặp trong trường hợp nào?",  lua_chon: [     "Dương nhiệt cực thịnh, bệnh biến nguy cấp",      "Âm hàn trệ nặng",      "Tỳ vị hư hàn",      "Khí hư tự hãn" ],  dap_an: 0,  giai_thich: "Mạch Táo bùng phát dồn dập dồn dội do hỏa nhiệt cực thịnh thiêu đốt cơ thể ở giai đoạn nguy kịch." 
    },
    {  category: 'lyluan',  cau_hoi: "Mạch 'Nhược' (chìm sâu sát xương, nhỏ mềm, ấn nặng mới thấy) biểu hiện hội chứng bệnh nào?",  lua_chon: [     "Khí huyết đều hư hoặc Thận dương hư",      "Thực nhiệt thịnh ở Khí phận",      "Can hỏa thượng viêm",      "Thực tích tỳ vị" ],  dap_an: 0,  giai_thich: "Mạch Nhược vừa chìm vừa nhỏ mềm, biểu thị cả khí lẫn huyết đều hư suy nặng không đủ lấp đầy lòng mạch." 
    },

    // ==================== HỌC THUYẾT NGŨ LUÂN (CHẨN ĐOÁN MẮT) ====================
    {  category: 'lyluan',  cau_hoi: "Trong học thuyết Ngũ luân chẩn đoán qua mắt, 'Khí luân' tương ứng với lòng trắng mắt phản ánh tạng nào?",  lua_chon: [     "Phế",      "Tâm",      "Can",      "Thận" ],  dap_an: 0,  giai_thich: "Khí luân (lòng trắng mắt) thuộc hành Kim, phản ánh sự thịnh suy của tạng Phế." 
    },
    {  category: 'lyluan',  cau_hoi: "Trong học thuyết Ngũ luân, 'Phong luân' tương ứng với lòng đen mắt phản ánh tạng nào?",  lua_chon: [     "Can",      "Phế",      "Tỳ",      "Thận" ],  dap_an: 0,  giai_thich: "Phong luân (lòng đen mắt) thuộc hành Mộc, phản ánh tình trạng của tạng Can." 
    },
    {  category: 'lyluan',  cau_hoi: "Trong học thuyết Ngũ luân, 'Thủy luân' tương ứng với đồng tử (con ngươi) phản ánh tạng nào?",  lua_chon: [     "Thận",      "Can",      "Tâm",      "Tỳ" ],  dap_an: 0,  giai_thich: "Thủy luân (con ngươi/đồng tử) thuộc hành Thủy, phản ánh sự suy thịnh của Thận tinh." 
    },
    {  category: 'lyluan',  cau_hoi: "Trong học thuyết Ngũ luân, 'Nhục luân' tương ứng với mi mắt trên và dưới phản ánh tạng nào?",  lua_chon: [     "Tỳ",      "Phế",      "Can",      "Tâm" ],  dap_an: 0,  giai_thich: "Nhục luân (mí mắt cơ thịt) thuộc hành Thổ, phản ánh tình trạng vận hóa của Tỳ." 
    },
    {  category: 'lyluan',  cau_hoi: "Trong học thuyết Ngũ luân, 'Huyết luân' tương ứng với khóe mắt (khóe mắt trong và ngoài) phản ánh tạng nào?",  lua_chon: [     "Tâm",      "Thận",      "Can",      "Phế" ],  dap_an: 0,  giai_thich: "Huyết luân (khóe mắt tụ nhiều mạch máu) thuộc hành Hỏa, phản ánh trạng thái của tạng Tâm." 
    },

    // ==================== BỆNH CƠ TẠNG PHỦ BỔ SUNG ====================
    {  category: 'lyluan',  cau_hoi: "Hội chứng 'Can Huyết Hư' biểu hiện qua các triệu chứng lâm sàng đặc trưng nào?",  lua_chon: [     "Chóng mặt, hoa mắt, móng tay khô giòn nhợt, nhìn mờ, co quắp gân cơ, kinh ít",      "Mặt đỏ rực, đắng miệng, cáu gắt",      "Sốt cao co giật hôn mê",      "Đau nhói vùng ngực trái" ],  dap_an: 0,  giai_thich: "Can tàng huyết suy hư không nuôi dưỡng được mắt (nhìn mờ), móng tay (khô nhợt), gân cơ (co quắp) và kinh nguyệt." 
    },
    {  category: 'lyluan',  cau_hoi: "Sự khác biệt cốt lõi giữa hội chứng 'Tâm Dương Hư' và 'Tâm Khí Hư' là gì?",  lua_chon: [     "Tâm Dương Hư ngoài triệu chứng khí hư còn có thêm sợ lạnh, tay chân lạnh, đau tức ngực",      "Tâm Dương Hư bị mất ngủ kéo dài hơn",      "Tâm Khí Hư có mụn nhọt ở lưỡi",      "Hai hội chứng hoàn toàn giống nhau" ],  dap_an: 0,  giai_thich: "Tâm Dương Hư là mức độ nặng hơn của Tâm Khí Hư, suy giảm chức năng Ôn húc gây sợ lạnh, chi lạnh và đau ngực." 
    },
    {  category: 'lyluan',  cau_hoi: "Hội chứng 'Tâm Hỏa Thượng Viêm' khác 'Can Hỏa Thượng Viêm' ở điểm nổi bật nào?",  lua_chon: [     "Tâm Hỏa thiên về lở miệng lưỡi, lưỡi đỏ rát, mất ngủ, tiểu đỏ buốt",      "Can Hỏa gây nôn ra thức ăn chua",      "Tâm Hỏa gây sưng đau khớp gối",      "Can Hỏa gây tiêu chảy phân sống" ],  dap_an: 0,  giai_thich: "Tâm khai khiếu ra lưỡi và quan hệ với Tiểu trường nên Tâm hỏa gây lở miệng rát lưỡi và tiểu đỏ buốt." 
    },
    {  category: 'lyluan',  cau_hoi: "Triệu chứng 'Tự hãn' (vã mồ hôi tự nhiên ban ngày khi không vận động) do cơ chế bệnh sinh nào?",  lua_chon: [     "Phế khí hư (Vệ khí hư suy) không cố nhiếp giữ được mồ hôi",      "Âm hư hỏa vượng ép tân dịch",      "Thực nhiệt tích trệ ở Đại tràng",      "Can huyết hư không nuôi gân" ],  dap_an: 0,  giai_thich: "Khí hư suy giảm chức năng cố nhiếp, không quản lý đóng mở lỗ mồ hôi dẫn đến mồ hôi tự chảy ra ban ngày." 
    },
    {  category: 'lyluan',  cau_hoi: "Triệu chứng 'Đạo hãn' (đổ mồ hôi trộm khi ngủ, tỉnh dậy thì mồ hôi dừng) do cơ chế nào?",  lua_chon: [     "Âm hư sinh nội nhiệt, khi ngủ âm khí đi vào trong ép tân dịch vã ra ngoài",      "Dương hư không ôn xưởi da thịt",      "Khí hư hạ hãm gây mất nước",      "Thấp nhiệt ở Bàng quang" ],  dap_an: 0,  giai_thich: "Âm hư hư nhiệt thiêu đốt bên trong, khi ngủ âm khí thu vào nội tạng đẩy tân dịch thoát ra thành mồ hôi trộm." 
    },

    // ==================== NGUYÊN NHÂN GÂY BỆNH & LÝ LUẬN ĐIỀU TRỊ ====================
    {  category: 'lyluan',  cau_hoi: "Nhóm nguyên nhân 'Bất nội ngoại nhân' trong YHCT bao gồm những yếu tố nào?",  lua_chon: [     "Ăn uống bất điều, lao lực quá độ, chấn thương, trùng thú cắn",      "Phong, Hàn, Thử, Thấp, Táo, Hỏa",      "Hỷ, Nộ, Ưu, Tư, Bi, Khủng, Kinh",      "Tâm, Can, Tỳ, Phế, Thận hư" ],  dap_an: 0,  giai_thich: "Bất nội ngoại nhân là các nguyên nhân không thuộc Lục dâm (Ngoại nhân) và Thất tình (Nội nhân)." 
    },
    {  category: 'lyluan',  cau_hoi: "Tà khí 'Táo' (khô ráo) được phân chia thành 2 dạng bệnh lý nào dựa theo mùa?",  lua_chon: [     "Ôn táo (đầu mùa thu còn hơi nóng) và Lương táo (cuối mùa thu chớm lạnh)",      "Phong táo và Thấp táo",      "Hàn táo và Nhiệt táo",      "Nội táo và Ngoại táo" ],  dap_an: 0,  giai_thich: "Táo tà đầu thu kiêm khí nóng mùa hè gọi là Ôn táo; Táo tà cuối thu kiêm khí lạnh mùa đông gọi là Lương táo." 
    },
    {  category: 'lyluan',  cau_hoi: "Đặc tính 'Phong tính thiện hành nhi sác biến' có nghĩa là gì?",  lua_chon: [     "Phong tà hay di chuyển vị trí đau (thiện hành) và biến hóa bệnh trạng nhanh chóng (sác biến)",      "Phong tà gây đau cố định một chỗ",      "Phong tà di chuyển chậm chạp kéo dài",      "Phong tà chỉ gây bệnh ở chân" ],  dap_an: 0,  giai_thich: "Thiện hành là di chuyển không cố định (như đau khớp di chuyển); Sác biến là bệnh phát phát biến đổi rất nhanh." 
    },
    {  category: 'lyluan',  cau_hoi: "Nguyên tắc điều trị 'Chế kỳ hữu dư, bổ kỳ bất túc' được hiểu như thế nào?",  lua_chon: [     "Tà khí thịnh (hữu dư) thì dùng phương pháp Tả; Chính khí suy (bất túc) thì dùng phương pháp Bổ",      "Luôn dùng thuốc bổ cho mọi bệnh nhân",      "Chỉ tấn công xua đuổi tà khí",      "Không can thiệp để cơ thể tự phục hồi" ],  dap_an: 0,  giai_thich: "Đây là nguyên tắc căn bản lập lại cân bằng: xả bớt phần dư thừa tà khí (Thực tà) và bồi bổ phần thiếu hụt chính khí (Hư chứng)." 
    },
    {  category: 'lyluan',  cau_hoi: "Phương pháp chữa bệnh 'Nhiệt nhân nhiệt dụng' thuộc nguyên tắc điều trị nào trong Đông y?",  lua_chon: [     "Phản trị (Tòng trị) - Dùng thuốc tính ấm nóng để chữa chứng Chân Hàn Giả Nhiệt",      "Chính trị (Nghịch trị) tiêu chuẩn",      "Hãn pháp giải biểu",      "Thanh nhiệt giải độc" ],  dap_an: 0,  giai_thich: "Phản trị là chữa theo hiện tượng giả: dùng thuốc nóng (Nhiệt) trị bệnh có hiện tượng sốt/đỏ giả nhiệt nhưng bản chất bên trong là Chân Hàn." 
    },
    {  category: 'lyluan',  cau_hoi: "Phương pháp 'Hàn nhân hàn dụng' thuộc nguyên tắc nào và áp dụng cho trường hợp nào?",  lua_chon: [     "Phản trị - Dùng thuốc tính lạnh (Hàn) để chữa chứng Chân Nhiệt Giả Hàn",      "Chính trị - Dùng thuốc lạnh chữa bệnh sốt",      "Ôn pháp - Dùng thuốc ấm làm nóng",      "Tiêu pháp tiêu tích trệ" ],  dap_an: 0,  giai_thich: "Hàn nhân hàn dụng dùng thuốc lạnh trị bệnh có triệu chứng tay chân lạnh ngắt giả hàn nhưng bản chất bên trong là Chân Nhiệt." 
    },
    {  category: 'lyluan',  cau_hoi: "Sự chuyển hóa bệnh lý từ 'Thực chứng' sang 'Hư chứng' thường xảy ra trong hoàn cảnh nào?",  lua_chon: [     "Bệnh thực tà kéo dài không được chữa dứt điểm làm tiêu hao dần Chính khí",      "Do dùng quá nhiều thuốc bổ",      "Khi ngoại tà mới xâm nhập",      "Khi chính khí vượng lên" ],  dap_an: 0,  giai_thich: "Bệnh thực tà kéo dài khiến cơ thể chống đỡ liên tục dẫn đến hao tổn khí huyết tân dịch, biến thành hư chứng." 
    },
    {  category: 'lyluan',  cau_hoi: "Mối quan hệ giữa 'Tân dịch' và 'Huyết' được tóm tắt qua câu nói nào?",  lua_chon: [     "Tân huyết đồng nguồn (Tân dịch và Huyết cùng nguồn gốc từ tinh hoa thủy cốc)",      "Tân Huyết đối lập hoàn toàn",      "Huyết sinh ra Tân dịch, Tân dịch tiêu diệt Huyết",      "Tân dịch thuộc Dương, Huyết thuộc Âm" ],  dap_an: 0,  giai_thich: "Tân dịch và Huyết đều do Tỳ Vị vận hóa tinh hoa thủy cốc sinh ra, có thể chuyển hóa lẫn nhau (Tân huyết đồng nguồn)." 
    },
    {  category: 'lyluan',  cau_hoi: "Câu nói 'Huyết hãn đồng nguồn' nhắc nhở thầy thuốc điều gì khi lâm sàng?",  lua_chon: [     "Người đang mất máu cấp không được dùng thuốc làm ra mồ hôi (Hãn pháp) và ngược lại",      "Nên cho ra mồ hôi nhiều để cầm máu",      "Mồ hôi và máu không liên quan nhau",      "Luôn dùng Hãn pháp cho người huyết hư" ],  dap_an: 0,  giai_thich: "Mồ hôi là dịch của Tâm, phát sinh từ tân dịch/huyết. Mất máu mà dùng thuốc phát hãn sẽ làm kiệt quệ tân dịch và huyết nghiêm trọng." 
    },
    {  category: 'lyluan',  cau_hoi: "Sự hình thành 'Khí trệ' lâu ngày trong cơ thể dễ dẫn đến hậu quả bệnh lý trực tiếp nào?",  lua_chon: [     "Huyết ứ (Khí trệ dẫn đến Huyết ứ)",      "Âm hư hỏa vượng",      "Tỳ khí thăng hoa",      "Thận dương hồi phục" ],  dap_an: 0,  giai_thich: "Khí là sức đẩy của Huyết, khi khí ngưng trệ không thúc đẩy được làm huyết lưu thông chậm lại và kết tụ thành Huyết ứ." 
    }
];

const questionsDataPartLyluanExt7 = [
    // ==================== TẠNG PHỦ LÝ LUẬN CHUYÊN SÂU (1 - 30) ====================
    { category: 'lyluan', cau_hoi: "Tạng Tâm làm chủ yếu tố nào trong cơ thể?", lua_chon: ["Huyết mạch và Thần minh", "Vận hóa thủy cốc", "Tàng trữ dịch mật", "Nạp khí hô hấp"], dap_an: 0, giai_thich: "Tâm chủ huyết mạch (thúc đẩy huyết lưu thông) và chủ thần minh (quản lý hoạt động tinh thần, tư duy)."
    },
    { category: 'lyluan', cau_hoi: "Biểu hiện nào sau đây phản ánh chức năng 'Tâm chủ huyết mạch' bị suy yếu?", lua_chon: ["Hồi hộp, đánh trống ngực, sắc mặt nhợt nhạt, mạch Tế Dược", "Đau tức hai mạn sườn", "Tiêu chảy phân sống", "Thở khè khè đờm dính"], dap_an: 0, giai_thich: "Tâm khí/huyết hư làm suy giảm khả năng thúc đẩy tuần hoàn, gây hồi hộp, tim đập nhanh, sắc mặt nhợt."
    },
    { category: 'lyluan', cau_hoi: "Tạng Can có vai trò gì trong việc điều hòa kinh nguyệt ở phụ nữ?", lua_chon: ["Can tàng huyết và chủ sơ tiết giúp điều hòa lượng máu và chu kỳ kinh", "Can chủ vận hóa tân dịch", "Can sinh ra huyết hoàn toàn", "Can trực tiếp chứa đựng thai nhi"], dap_an: 0, giai_thich: "Can tàng huyết quản lý lượng máu, Can sơ tiết giữ cho khí cơ thông suốt, quyết định đến sự đều đặn của kinh nguyệt."
    },
    { category: 'lyluan', cau_hoi: "Hiện tượng 'Can khí hoành nghịch' xâm phạm tạng Tỳ gây nên chứng bệnh gì?", lua_chon: ["Can Tỳ bất hòa (đau sườn, đầy trướng bụng, tiêu chảy)", "Phế hỏa bốc cao", "Thận âm suy kiệt", "Tâm hỏa độc vượng"], dap_an: 0, giai_thich: "Can khí uất trệ chèn ép Tỳ thổ làm Tỳ hư thất vận, gây trướng bụng và rối loạn tiêu hóa."
    },
    { category: 'lyluan', cau_hoi: "Chức năng 'Tỳ chủ thăng thanh' có ý nghĩa sinh lý như thế nào?", lua_chon: ["Đưa chất tinh hoa thủy cốc lên Phế và Tâm để hóa sinh khí huyết", "Đẩy cặn bã xuống Đại trường", "Bài tiết nước tiểu ra Bàng quang", "Sơ tiết dịch mật"], dap_an: 0, giai_thich: "Tỳ khí chủ thăng, hấp thu và vận chuyển tinh hoa thức ăn hướng lên trên để nuôi dưỡng cơ thể."
    },
    { category: 'lyluan', cau_hoi: "Nếu chức năng 'Tỳ chủ thăng' bị suy yếu (Tỳ khí hạ hãm) sẽ dẫn đến biểu hiện gì?", lua_chon: ["Sa tạng phủ (sa dạ dày, sa tử cung, sa trĩ) và tiêu chảy mạn tính", "Ho ra máu", "Co giật tay chân", "Sốt cao vã mồ hôi"], dap_an: 0, giai_thich: "Tỳ khí suy hư không nâng đỡ được cơ quan nội tạng làm tạng phủ sa xuống hạ tiêu."
    },
    { category: 'lyluan', cau_hoi: "Tạng Phế làm chủ hoạt động nào sau đây?", lua_chon: ["Chủ khí toàn thân và chủ hô hấp", "Chủ tàng huyết", "Chủ tàng tinh", "Chủ vận hóa thủy thấp"], dap_an: 0, giai_thich: "Phế làm chủ khí toàn thân và thực hiện trao đổi khí trời qua hô hấp."
    },
    { category: 'lyluan', cau_hoi: "Hoạt động 'Phế chủ tuyên phát' có tác dụng gì đối với tân dịch?", lua_chon: ["Phân bố tân dịch và vệ khí ra toàn bộ bề mặt da lông (bì mao)", "Tống cặn bã ra ngoài", "Đưa tân dịch xuống Bàng quang", "Tàng trữ tân dịch ở Thận"], dap_an: 0, giai_thich: "Tuyên phát là hướng ra ngoài và lên trên, đưa tân dịch nhuần tưới da lông mồ hôi."
    },
    { category: 'lyluan', cau_hoi: "Chức năng 'Phế chủ túc giáng' bị rối loạn sẽ sinh ra triệu chứng lâm sàng nào?", lua_chon: ["Ho, suyễn, tức ngực, khí nghịch bốc lên", "Tiêu chảy phân nát", "Đau lưng mỏi gối", "Mất ngủ hay quên"], dap_an: 0, giai_thich: "Túc giáng là thanh lọc đưa khí xuôi xuống; khi rối loạn khí bốc ngược gây ho suyễn."
    },
    { category: 'lyluan', cau_hoi: "Khái niệm 'Thận tàng tinh' bao gồm những loại tinh nào?", lua_chon: ["Tinh tiên thiên (bẩm sinh từ cha mẹ) và Tinh hậu thiên (từ thủy cốc)", "Chỉ có tinh sinh dục", "Chỉ có tinh hoa từ thức ăn", "Tinh khí do Phế hít thở"], dap_an: 0, giai_thich: "Thận tàng trữ cả tinh tiên thiên (di truyền) và tinh hậu thiên (do Tỳ Vị chắt lọc)."
    },
    { category: 'lyluan', cau_hoi: "Thận tinh suy yếu ở trẻ em sẽ dẫn đến hậu quả phát triển như thế nào?", lua_chon: ["Chậm mọc răng, chậm biết đi, chậm nói, xương mềm (Chậm phát triển)", "Sốt cao co giật", "Ăn nhiều mau đói", "Ho kéo dài"], dap_an: 0, giai_thich: "Thận chủ cốt sinh tủy và tàng tinh; Thận tinh hư làm trẻ bị chứng ngũ trì, ngũ nhược."
    },
    { category: 'lyluan', cau_hoi: "Thận âm (Chân âm) giữ vai trò gì đối với các tạng phủ trong cơ thể?", lua_chon: ["Nhuần tưới, làm mát và tàng trữ chất dinh dưỡng cho toàn thân", "Sưởi ấm cơ thể", "Thúc đẩy tuần hoàn máu", "Tiêu hóa thức ăn"], dap_an: 0, giai_thich: "Thận âm là gốc dịch thể Âm của toàn cơ thể, có tác dụng tư dưỡng và làm mát."
    },
    { category: 'lyluan', cau_hoi: "Thận dương (Mệnh môn hỏa) giữ vai trò gì đối với cơ thể?", lua_chon: ["Ôn xưởi, thúc đẩy hoạt động năng lượng và khí hóa của các tạng phủ", "Làm mát nội tạng", "Tàng trữ máu", "Nhuận tràng"], dap_an: 0, giai_thich: "Thận dương là gốc Dương khí, cung cấp nhiệt năng ôn húc cho toàn bộ sinh lý cơ thể."
    },
    { category: 'lyluan', cau_hoi: "Khi Mệnh môn hỏa suy (Thận dương hư) không ôn sưởi được Tỳ thổ sẽ gây ra:", lua_chon: ["Tiêu chảy lúc sáng sớm (Ngũ canh tả), phân sống, đau bụng lạnh", "Sốt về chiều gò má đỏ", "Ho khan không đờm", "Miệng lở loét sưng đau"], dap_an: 0, giai_thich: "Lúc 3-5h sáng dương khí yếu, Thận dương hư không giúp Tỳ vận hóa sinh tiêu chảy ngũ canh."
    },
    { category: 'lyluan', cau_hoi: "Phủ Vị có đặc tính sinh lý về thăng giáng và ưa thích thế nào?", lua_chon: ["Chủ giáng trọc, ưa nhuận ghét táo", "Chủ thăng thanh, ưa táo ghét thấp", "Chủ thăng giáng tự do", "Chủ tàng trữ không vận chuyển"], dap_an: 0, giai_thich: "Vị là phủ Dương, ưa ẩm nhuận (nhuận) để làm nhừ thức ăn và đưa cặn bã đi xuống (giáng trọc)."
    },
    { category: 'lyluan', cau_hoi: "Tạng Tỳ có đặc tính sinh lý về thăng giáng và ưa thích thế nào?", lua_chon: ["Chủ thăng thanh, ưa táo ghét thấp", "Chủ giáng trọc, ưa nhuận ghét táo", "Chủ túc giáng", "Chủ tuyên phát"], dap_an: 0, giai_thich: "Tỳ thuộc Âm thổ, ưa khô ráo (táo) để vận hóa và đưa chất thanh lên trên (thăng thanh)."
    },
    { category: 'lyluan', cau_hoi: "Phủ Tiểu trường tiếp nhận dịch thủy cốc từ đâu truyền xuống?", lua_chon: ["Từ phủ Vị", "Từ phủ Đại trường", "Từ phủ Bàng quang", "Từ tạng Can"], dap_an: 0, giai_thich: "Vị làm nhừ thức ăn rồi chuyển xuống Tiểu trường để gắt lọc chất thanh trọc."
    },
    { category: 'lyluan', cau_hoi: "Chức năng 'phân biệt thanh trọc' của Tiểu trường có nghĩa là gì?", lua_chon: ["Hấp thu chất dinh dưỡng (thanh) đưa đi nuôi cơ thể, tống cặn bã (trọc) xuống Đại trường/Bàng quang", "Tiêu hóa dầu mỡ", "Bài tiết mật", "Lưu trữ khí"], dap_an: 0, giai_thich: "Tiểu trường chắt lọc tinh hoa nước và thức ăn, đẩy phần cặn bã khô xuống Đại trường và nước thừa xuống Bàng quang."
    },
    { category: 'lyluan', cau_hoi: "Phủ Đại trường tống bài tiết cặn bã ra ngoài dưới sự chỉ đạo giáng khí của tạng nào?", lua_chon: ["Tạng Phế (Phế và Đại trường quan hệ biểu lý)", "Tạng Can", "Tạng Tâm", "Tạng Thận"], dap_an: 0, giai_thich: "Phế khí túc giáng thúc đẩy Đại trường truyền dẫn phân ra ngoài; Phế táo thì Đại trường dễ bị táo bón."
    },
    { category: 'lyluan', cau_hoi: "Phủ Bàng quang bài tiết nước tiểu dựa vào sự hỗ trợ khí hóa của tạng nào?", lua_chon: ["Tạng Thận (Thận khí hóa thủy)", "Tạng Can", "Tạng Tỳ", "Tạng Tâm"], dap_an: 0, giai_thich: "Bàng quang tàng trữ nước tiểu nhưng phải nhờ Thận dương khí hóa mới đóng mở bài tiết nhịp nhàng."
    },
    { category: 'lyluan', cau_hoi: "Khái niệm 'Thượng tiêu' trong Tam tiêu bao gồm các tạng phủ nào?", lua_chon: ["Tâm, Phế (và vùng ngực)", "Tỳ, Vị", "Thận, Bàng quang", "Can, Đởm"], dap_an: 0, giai_thich: "Thượng tiêu tính từ cơ hoành trở lên, gồm Tâm và Phế."
    },
    { category: 'lyluan', cau_hoi: "Khái niệm 'Trung tiêu' trong Tam tiêu bao gồm các tạng phủ nào?", lua_chon: ["Tỳ, Vị (và vùng bụng trên)", "Tâm, Phế", "Thận, Bàng quang", "Não, Tủy"], dap_an: 0, giai_thich: "Trung tiêu ở vùng giữa bụng (từ rốn đến rãnh hoành), gồm Tỳ và Vị."
    },
    { category: 'lyluan', cau_hoi: "Khái niệm 'Hạ tiêu' trong Tam tiêu bao gồm các tạng phủ nào?", lua_chon: ["Thận, Bàng quang, Đại trường, Tiểu trường, Can (và bụng dưới)", "Tâm, Phế", "Tỳ, Vị", "Đầu mặt"], dap_an: 0, giai_thich: "Hạ tiêu tính từ rốn trở xuống, gồm Thận, Bàng quang, Ruột và tạng Can."
    },
    { category: 'lyluan', cau_hoi: "Cơ quan 'Tử cung' thuộc hệ thống cơ quan nào theo YHCT?", lua_chon: ["Phủ kỳ hằng", "Ngũ tạng", "Lục phủ", "Kinh lạc"], dap_an: 0, giai_thich: "Tử cung (Bào cung) là Phủ kỳ hằng, quản lý việc ra kinh nguyệt và nuôi dưỡng thai nhi."
    },
    { category: 'lyluan', cau_hoi: "Sự hoạt động sinh lý của Tử cung phụ thuộc trực tiếp vào hai mạch kỳ kinh nào?", lua_chon: ["Mạch Xung và Mạch Nhâm", "Mạch Đốc và Mạch Đải", "Mạch Âm duy và Dương duy", "Mạch Âm kiểu và Dương kiểu"], dap_an: 0, giai_thich: "Xung vi Huyết hải, Nhâm chủ bào thai; hai mạch Xung Nhâm đầy đủ thì kinh nguyệt hòa hợp."
    },
    { category: 'lyluan', cau_hoi: "Não được YHCT coi là 'Bể' của chất gì?", lua_chon: ["Bể của Tủy ('Tủy chi hải')", "Bể của Khí", "Bể của Huyết", "Bể của Thủy cốc"], dap_an: 0, giai_thich: "Thận sinh tủy, tủy hội tụ lên đầu thành Não, nên Não là Bể của Tủy."
    },
    { category: 'lyluan', cau_hoi: "Khi Thận tinh suy yếu làm 'Bể tủy rỗng yếu' sẽ sinh ra triệu chứng gì?", lua_chon: ["Chóng mặt, ù tai, thắt lưng mỏi, trí nhớ suy giảm, mệt mỏi", "Sốt cao vã mồ hôi", "Ho đờm dính", "Đau dạ dày"], dap_an: 0, giai_thich: "Thận hư không sinh đủ tủy nuôi Não gây trống rỗng bể tủy, sinh chóng mặt, ù tai, giảm nhớ."
    },
    { category: 'lyluan', cau_hoi: "Chức năng 'Tỳ thống huyết' có nghĩa là gì?", lua_chon: ["Cai quản, giữ cho huyết đi đúng đường trong lòng mạch không tràn ra ngoài", "Tàng trữ máu lúc ngủ", "Thúc đẩy máu chảy", "Tiêu hủy hồng cầu"], dap_an: 0, giai_thich: "Tỳ khí cố nhiếp giữ không cho huyết thoát khỏi mạch sinh ra xuất huyết."
    },
    { category: 'lyluan', cau_hoi: "Mối quan hệ 'Tâm sinh Tỳ' theo Ngũ hành tương sinh biểu hiện qua sinh lý nào?", lua_chon: ["Tâm Hỏa sưởi ấm Tỳ Thổ giúp Tỳ vận hóa tốt", "Tâm Kim sinh Tỳ Thủy", "Tâm Mộc khắc Tỳ Thổ", "Tâm Thủy dập Tỳ Hỏa"], dap_an: 0, giai_thich: "Tâm thuộc Hỏa, Tỳ thuộc Thổ; Hỏa sinh Thổ nên Tâm hỏa ôn dưỡng Tỳ thổ tiêu hóa."
    },
    { category: 'lyluan', cau_hoi: "Mối quan hệ 'Tỳ sinh Phế' theo Ngũ hành tương sinh biểu hiện như thế nào?", lua_chon: ["Tỳ Thổ sinh Phế Kim (Tỳ vận hóa tinh hoa nuôi dưỡng Phế khí)", "Tỳ Hỏa sinh Phế Thủy", "Tỳ Mộc sinh Phế Kim", "Tỳ Thủy khắc Phế Hỏa"], dap_an: 0, giai_thich: "Tỳ Thổ vận hóa thủy cốc đưa khí lên bổ dưỡng cho Phế Kim (Mẹ sinh Con)."
    },

    // ==================== CƠ CHẾ BỆNH SINH ÂM DƯƠNG - NGUYÊN NHÂN (31 - 60) ====================
    { category: 'lyluan', cau_hoi: "Khái niệm 'Chính khí' trong Đông y dùng để chỉ yếu tố nào?", lua_chon: ["Toàn bộ khả năng thích ứng, bảo vệ và sức đề kháng của cơ thể", "Chỉ là phế khí", "Chỉ là lượng máu", "Khí trời hít vào"], dap_an: 0, giai_thich: "Chính khí là tổng hòa năng lượng, sức đề kháng chống lại các tác nhân gây bệnh."
    },
    { category: 'lyluan', cau_hoi: "Khái niệm 'Tà khí' trong Đông y dùng để chỉ yếu tố nào?", lua_chon: ["Mọi nguyên nhân gây bệnh bên ngoài hoặc bên trong làm mất cân bằng cơ thể", "Vi khuẩn Tây y thuần túy", "Thời tiết nắng nóng nhẹ", "Đồ ăn bổ dưỡng"], dap_an: 0, giai_thich: "Tà khí là tất cả các yếu tố độc hại gây rối loạn sinh lý Âm Dương."
    },
    { category: 'lyluan', cau_hoi: "Thế nào là hiện tượng 'Âm Dương mất cân bằng' (Âm Dương thất điều)?", lua_chon: ["Sự thiên thịnh (thừa) hoặc thiên hư (thiếu) của một trong hai mặt Âm - Dương", "Âm và Dương luôn bằng nhau", "Dương biến mất hoàn toàn", "Âm hòa hợp với Dương"], dap_an: 0, giai_thich: "Khi Âm hoặc Dương bị thiên lệch vượng lên hoặc suy giảm sẽ gây ra trạng thái bệnh lý."
    },
    { category: 'lyluan', cau_hoi: "Trạng thái bệnh lý 'Thực Hàn' sinh ra do cơ chế nào?", lua_chon: ["Ngoại cảm Hàn tà xâm nhập quá mạnh (Âm thịnh)", "Thận dương hư suy", "Tỳ khí hư suy", "Âm hư hỏa vượng"], dap_an: 0, giai_thich: "Hàn tà bên ngoài tấn công làm phần Âm tăng cao tuyệt đối sinh ra Thực Hàn."
    },
    { category: 'lyluan', cau_hoi: "Trạng thái bệnh lý 'Hư Hàn' sinh ra do cơ chế nào?", lua_chon: ["Dương khí trong cơ thể bị suy yếu không chế ngự được Âm (Dương hư)", "Nhiệt tà xâm nhập", "Ăn nhiều đồ lạnh", "Ứ huyết lâu ngày"], dap_an: 0, giai_thich: "Dương khí hư suy (chính khí suy) làm giảm khả năng ôn húc sinh ra Hư Hàn."
    },
    { category: 'lyluan', cau_hoi: "Trạng thái bệnh lý 'Thực Nhiệt' sinh ra do cơ chế nào?", lua_chon: ["Nhiệt tà/Hỏa tà bên ngoài tấn công hoặc tích trệ hóa hỏa (Dương thịnh)", "Thận âm hư", "Mất máu cấp", "Phế khí hư"], dap_an: 0, giai_thich: "Nhiệt tà bùng phát làm phần Dương tăng vượng tuyệt đối sinh ra Thực Nhiệt."
    },
    { category: 'lyluan', cau_hoi: "Trạng thái bệnh lý 'Hư Nhiệt' sinh ra do cơ chế nào?", lua_chon: ["Phần Âm trong cơ thể bị suy hao không chế ngự được Dương (Âm hư)", "Nhiệt tà xâm nhập", "Ăn nhiều ớt cay", "Trúng nắng mùa hè"], dap_an: 0, giai_thich: "Âm dịch giảm hụt làm Dương hỏa nổi lên tương đối sinh ra Hư Nhiệt."
    },
    { category: 'lyluan', cau_hoi: "Hiện tượng 'Vong Âm' (mất Âm dịch cấp tính) thường dẫn đến hậu quả nguy cấp nào?", lua_chon: ["Mất nước, mất máu dồn dập, kéo theo Vong Dương (Tử vong)", "Sốt lạnh tay chân", "Táo bón nhẹ", "Đau nhức gối"], dap_an: 0, giai_thich: "Mất Âm dịch quá nhanh làm Dương khí mất chỗ nương tựa thoát ra ngoài (Vong Dương)."
    },
    { category: 'lyluan', cau_hoi: "Hiện tượng 'Vong Dương' (thoát Dương khí cấp tính) có biểu hiện lâm sàng nguy kịch nào?", lua_chon: ["Mồ hôi lạnh vã ra như tắm, tay chân lạnh ngắt, thở yếu, mạch Vi muốn tuyệt", "Mặt đỏ sốt cao khát nước", "Co quặp lưỡi đỏ", "Nôn ra mủ máu"], dap_an: 0, giai_thich: "Vong Dương là trạng thái kiệt quệ Dương khí, mồ hôi lạnh vã ra, chân tay lạnh ngắt cấp cứu."
    },
    { category: 'lyluan', cau_hoi: "Đặc tính 'Hàn tính ngưng trệ' của Hàn tà gây ra triệu chứng đặc trưng nào?", lua_chon: ["Khí huyết lưu thông chậm trệ gây các cơn ĐAU dữ dội", "Gây nổi mẩn ngứa di chuyển", "Gây vã mồ hôi nhiều", "Gây đi tiểu đục"], dap_an: 0, giai_thich: "Hàn làm ngưng trệ dòng khí huyết, 'thông tắc bất thống, thống tắc bất thông' gây đau."
    },
    { category: 'lyluan', cau_hoi: "Đặc tính 'Hàn tính thu dẫn' của Hàn tà biểu hiện qua triệu chứng nào?", lua_chon: ["Co rút gân cơ, co gân tay chân, bế tắc lỗ mồ hôi không ra mồ hôi", "Da lở loét mưng mủ", "Mắt sưng đỏ", "Chảy máu cam"], dap_an: 0, giai_thich: "Thu dẫn là co rút lại, làm gân cơ co quắp và lỗ mồ hôi bị bó chặt."
    },
    { category: 'lyluan', cau_hoi: "Tà khí 'Thấp' gây cảm giác mình mẩy thế nào cho bệnh nhân?", lua_chon: ["Đầu nặng như đeo đá, tay chân nặng nề, cơ thể mệt mỏi trệ khí", "Đau nhói như dao đâm", "Ngứa ngáy di chuyển", "Nóng rát da"], dap_an: 0, giai_thich: "Thấp tính trọng trệ, làm người bệnh cảm thấy nặng nề toàn thân."
    },
    { category: 'lyluan', cau_hoi: "Đặc tính 'Thấp tính dính trệ' (trệ) thể hiện qua diễn biến bệnh như thế nào?", lua_chon: ["Bệnh kéo dài mạn tính, dai dẳng khó chữa dứt điểm, chất thải dính đục", "Bệnh phát nhanh khỏi nhanh trong ngày", "Chỉ phát bệnh về mùa đông", "Bệnh dễ chữa trị"], dap_an: 0, giai_thich: "Dính trệ làm chất thải dính nhớt và diễn tiến bệnh mạn tính dầy vò lâu khỏi."
    },
    { category: 'lyluan', cau_hoi: "Đặc tính 'Hỏa tà bốc lên trên' (Thượng viêm) gây triệu chứng vùng đầu mặt thế nào?", lua_chon: ["Mắt đỏ, sưng đau họng, lở loét miệng, đau đầu nhói, mặt đỏ", "Lạnh gáy mỏi cổ", "Chóng mặt khi đứng dậy", "Chảy nước mũi trong"], dap_an: 0, giai_thich: "Hỏa tà thuộc Dương bốc dồn lên trên gây sưng viêm vùng đầu ngũ quan."
    },
    { category: 'lyluan', cau_hoi: "Vì sao Hỏa tà (Nhiệt tà) lại dễ 'Sinh phong động huyết'?", lua_chon: ["Hỏa thiêu đốt tân dịch gân cơ (sinh phong) và bức huyết chảy tràn ra ngoài mạch (động huyết)", "Hỏa làm lạnh ngắt cơ thể", "Hỏa làm ngưng trệ dòng máu", "Hỏa làm khí bị suy hãm"], dap_an: 0, giai_thich: "Nhiệt cực sinh phong gây co giật; nhiệt bức huyết vọng hành gây xuất huyết dồn dập."
    },
    { category: 'lyluan', cau_hoi: "Nguyên nhân 'Ăn uống quá độ' đồ béo ngọt tích tụ ở Vị sẽ sinh ra sản phẩm bệnh lý nào?", lua_chon: ["Đàm thấp, Thấp nhiệt và Thực tích", "Khí hư thuần túy", "Chân hàn giả nhiệt", "Âm hư phế táo"], dap_an: 0, giai_thich: "Ăn đồ quá béo ngọt bổ bứ làm Tỳ Vị quá tải, sinh ra đàm thấp, thực tích hôi chua."
    },
    { category: 'lyluan', cau_hoi: "Nguyên nhân 'Lao lực quá độ' (Lao quằn quại kéo dài) làm tiêu hao tố chất nào?", lua_chon: ["Hao tổn Khí và Khí huyết", "Chỉ làm tăng khí", "Sinh ra nhiệt tà cấp", "Làm tàng trữ thêm tinh"], dap_an: 0, giai_thich: "Lao động thể lực vất vả quá sức tiêu tốn lượng lớn Khí và làm hư suy cơ thể."
    },
    { category: 'lyluan', cau_hoi: "Khái niệm 'Phòng lao quá độ' (Hoạt động tình dục quá mức) gây tổn thương trực tiếp tạng nào?", lua_chon: ["Tạng Thận (hao tổn Thận tinh và Mệnh môn hỏa)", "Tạng Phế", "Tạng Tỳ", "Tạng Tâm"], dap_an: 0, giai_thich: "Sinh hoạt tình dục quá độ làm tiêu hao Thận tinh, dẫn đến Thận âm/Thận dương suy kiệt."
    },
    { category: 'lyluan', cau_hoi: "Sự hình thành 'Ứ huyết' xuất phát từ 3 nguyên nhân căn bản nào?", lua_chon: ["Khí trệ, Khí hư (không thúc đẩy được) hoặc Chấn thương ngoaị khoa", "Ăn nhiều rau xanh", "Tập thể dục dưỡng sinh", "Hít thở khí trời"], dap_an: 0, giai_thich: "Ứ huyết do khí trệ không đẩy huyết, khí hư không đẩy nổi hoặc chấn thương làm máu tràn khỏi mạch đọng lại."
    },
    { category: 'lyluan', cau_hoi: "Khái niệm 'Nội đàm' (Đàm ẩm từ bên trong) sinh ra do sự rối loạn chức năng của 3 tạng nào?", lua_chon: ["Tỳ, Phế, Thận (Tỳ sinh đàm, Phế trữ đàm, Thận chủ thủy)", "Can, Tâm, Đởm", "Vị, Đại trường, Bàng quang", "Tâm, Can, Tỳ"], dap_an: 0, giai_thich: "Ba tạng Tỳ, Phế, Thận quản lý vận hành nước; khi rối loạn sẽ biến nước thành đàm ẩm ngưng trệ."
    },

    // ==================== TỨ CHẨN & BÁT CƯƠNG LÝ LUẬN (61 - 100) ====================
    { category: 'lyluan', cau_hoi: "Phương pháp 'Vọng chẩn' trong Tứ chẩn quan sát yếu tố nào đầu tiên?", lua_chon: ["Quan sát Thần thái (Hữu thần hay Thất thần)", "Bắt mạch ở cổ tay", "Nghe tiếng ho", "Hỏi tiền sử bệnh"], dap_an: 0, giai_thich: "Thần thái phản ánh sinh khí toàn thân, là đối tượng ưu tiên hàng đầu khi Vọng chẩn."
    },
    { category: 'lyluan', cau_hoi: "Sắc mặt 'Xanh' (Thanh) trong Vọng chẩn thường báo hiệu chứng bệnh gì?", lua_chon: ["Hàn chứng, Đau dữ dội (Chủ đau), Can bệnh hoặc Huyết ứ", "Thực nhiệt thịnh", "Tỳ vị hư suy", "Thận âm hư"], dap_an: 0, giai_thich: "Màu xanh thuộc Mộc (Can), chủ về hàn tà, cơn đau dữ dội cản trở khí huyết và ứ trệ."
    },
    { category: 'lyluan', cau_hoi: "Sắc mặt 'Đỏ' (Xích) trong Vọng chẩn biểu hiện nhóm bệnh lý nào?", lua_chon: ["Nhiệt chứng (Thực nhiệt hoặc Hư nhiệt)", "Hàn chứng nặng", "Thấp trệ", "Khí huyết đại hư"], dap_an: 0, giai_thich: "Màu đỏ thuộc Hỏa, đại diện cho hiện tượng hỏa nhiệt bốc lên mặt."
    },
    { category: 'lyluan', cau_hoi: "Sắc mặt 'Vàng' (Hoàng) trong Vọng chẩn biểu hiện tổn thương ở tạng phủ nào?", lua_chon: ["Tỳ Vị hư yếu hoặc Hoàng đản (bệnh Can Đởm thấp nhiệt)", "Phế hỏa", "Thận thủy hư", "Tâm huyết ứ"], dap_an: 0, giai_thich: "Màu vàng thuộc Thổ, thể hiện Tỳ hư không vận hóa hoặc mật tràn ra da."
    },
    { category: 'lyluan', cau_hoi: "Sắc mặt 'Trắng' (Bạch) trong Vọng chẩn báo hiệu tình trạng bệnh lý gì?", lua_chon: ["Hư chứng, Hàn chứng hoặc Mất máu (Huyết hư)", "Thực nhiệt ở ruột", "Can hỏa cực thịnh", "Thấp nhiệt hạ tiêu"], dap_an: 0, giai_thich: "Sắc mặt trắng bệch do thiếu hụt huyết nuôi dưỡng hoặc dương khí suy yếu không sưởi ấm."
    },
    { category: 'lyluan', cau_hoi: "Sắc mặt 'Đen' (Hắc) trong Vọng chẩn biểu hiện tổn thương thuộc tạng nào?", lua_chon: ["Thận hư (Thận âm/dương hư) hoặc Huyết ứ lâu ngày", "Tỳ hư", "Phế hư", "Can hỏa"], dap_an: 0, giai_thich: "Màu đen thuộc Thủy (Thận), chủ về Thận hư suy nặng hoặc đau đớn ứ huyết kéo dài."
    },
    { category: 'lyluan', cau_hoi: "Chất lưỡi 'Nhợt' (Đạm bạch) biểu hiện hội chứng bệnh nào?", lua_chon: ["Hư chứng, Hàn chứng, Khí huyết hư suy", "Thực nhiệt chứng", "Huyết ứ nặng", "Đàm nhiệt nội kết"], dap_an: 0, giai_thich: "Chất lưỡi nhợt màu do thiếu huyết nuôi dưỡng hoặc hư hàn không đưa khí huyết lên lưỡi."
    },
    { category: 'lyluan', cau_hoi: "Chất lưỡi 'Đỏ' (Hồng) biểu hiện hội chứng bệnh nào?", lua_chon: ["Nhiệt chứng (Thực nhiệt hoặc Âm hư hư nhiệt)", "Hàn chứng", "Dương hư", "Thủy thấp đọng"], dap_an: 0, giai_thich: "Chất lưỡi đỏ phản ánh nhiệt tà thúc đẩy huyết dồn lên lưỡi."
    },
    { category: 'lyluan', cau_hoi: "Chất lưỡi 'Đỏ giáng' (Đỏ thẫm, khô) báo hiệu nhiệt tà đã truyền vào phần nào?", lua_chon: ["Truyền sâu vào Doanh phận hoặc Huyết phận (Nhiệt cực nặng)", "Mới ở Vệ phận", "Ở ngoài da", "Tỳ vị hư hàn"], dap_an: 0, giai_thich: "Lưỡi đỏ thẫm khô gai phản ánh nhiệt tà đã vào sâu thiêu đốt phần Doanh Huyết."
    },
    { category: 'lyluan', cau_hoi: "Chất lưỡi 'Tím' hoặc có 'Điểm ban tím' là dấu hiệu đặc hiệu của:", lua_chon: ["Huyết ứ trệ không lưu thông", "Khí hư nhẹ", "Phong hàn mới mắc", "Tỳ vị hư yếu"], dap_an: 0, giai_thich: "Sắc tím trên lưỡi phản ánh dòng huyết bị tắc nghẽn, đọng lại thành khối ứ."
    },
    { category: 'lyluan', cau_hoi: "Rêu lưỡi 'Trắng mỏng' phản ánh trạng thái bệnh lý nào?", lua_chon: ["Bình thường hoặc Bệnh ngoại cảm Phong hàn ở giai đoạn Biểu", "Lý thực nhiệt nặng", "Tỳ hỏa độc vượng", "Thận âm kiệt"], dap_an: 0, giai_thich: "Rêu trắng mỏng là rêu lưỡi sinh lý bình thường hoặc ngoại cảm nhẹ mới ở phần biểu."
    },
    { category: 'lyluan', cau_hoi: "Rêu lưỡi 'Vàng dầy' phản ánh tình trạng bệnh lý nào?", lua_chon: ["Nhiệt chứng ở Lý (Lý thực nhiệt) hoặc Thực tích đàm nhiệt", "Biểu hàn chứng", "Âm hư hư hàn", "Khí hư tự hãn"], dap_an: 0, giai_thich: "Rêu vàng biểu thị Nhiệt; rêu dầy biểu thị bệnh đã vào Lý và có đàm/thức ăn tích trệ."
    },
    { category: 'lyluan', cau_hoi: "Rêu lưỡi 'Trơn trượt' (ướt át, mảng nhớt) phản ánh hiện tượng gì?", lua_chon: ["Thủy thấp đọng, Đàm ẩm nội trệ do Dương hư không hóa khí", "Âm hư hỏa vượng", "Táo nhiệt thiêu đốt", "Mất nước nặng"], dap_an: 0, giai_thich: "Rêu ướt đọng nước chứng tỏ dương khí không hóa được nước, thủy thấp tích tụ."
    },
    { category: 'lyluan', cau_hoi: "Trong Văn chẩn, nghe tiếng ho 'Hắng to, vang cuồn cuộn' thuộc về:", lua_chon: ["Thực chứng, Nhiệt chứng", "Hư chứng, Phế khí hư", "Âm hư hư nhiệt", "Thận dương hư"], dap_an: 0, giai_thich: "Âm thanh to, dội, mạnh thuộc về thuộc tính Dương và Thực chứng."
    },
    { category: 'lyluan', cau_hoi: "Trong Văn chẩn, nghe tiếng thở 'Thều thào, ngắn hơi, nói không ra hơi' thuộc về:", lua_chon: ["Hư chứng, Khí hư", "Thực nhiệt", "Đàm nhiệt uất Phế", "Huyết ứ"], dap_an: 0, giai_thich: "Âm thanh nhỏ yếu, đứt quãng, không đủ sức phát ra tiếng thuộc Hư chứng (Khí hư)."
    },
    { category: 'lyluan', cau_hoi: "Trong Vấn chẩn, bệnh nhân 'Khát thích uống nước lạnh' biểu hiện chứng gì?", lua_chon: ["Nhiệt chứng (Nhiệt thiêu đốt tân dịch)", "Hàn chứng", "Dương hư", "Âm hàn cực thịnh"], dap_an: 0, giai_thich: "Nhiệt làm tiêu hao tân dịch gây khát và đòi uống nước mát lạnh để xoa dịu."
    },
    { category: 'lyluan', cau_hoi: "Trong Vấn chẩn, bệnh nhân 'Không khát hoặc khát mà thích uống nước ấm' biểu hiện:", lua_chon: ["Hàn chứng hoặc Thấp chứng", "Thực nhiệt chứng", "Can hỏa bốc", "Phế nhiệt ho suyễn"], dap_an: 0, giai_thich: "Hàn chứng không làm tiêu tân dịch nên không khát, hoặc thích uống ấm để làm dịu hàn."
    },
    { category: 'lyluan', cau_hoi: "Cảm giác đau 'Cự án' (sợ ấn chạm vào, càng ấn càng đau) phản ánh:", lua_chon: ["Thực chứng (ứ huyết, thực tích, đàm trệ, nhiệt kết)", "Hư chứng", "Khí hư", "Âm hư"], dap_an: 0, giai_thich: "Sự bế tắc hữu hình dồn tụ làm cản trở hoàn toàn, khi ấn vào tăng thêm bế tắc gây đau dữ (Thực)."
    },
    { category: 'lyluan', cau_hoi: "Cảm giác đau 'Thiện án' (thích xoa bóp, ấn vào thấy dễ chịu bớt đau) phản ánh:", lua_chon: ["Hư chứng (Khí hư, Huyết hư, Hư hàn)", "Thực chứng", "Ứ huyết nặng", "Thực tích"], dap_an: 0, giai_thich: "Nội tạng thiếu hụt khí huyết dưỡng nuôi sinh đau, khi ấn xoa giúp khí huyết lưu thông tạm thời nên bớt đau (Hư)."
    },
    { category: 'lyluan', cau_hoi: "Vị trí xem mạch 'Thốn Khẩu' ở cổ tay được chia thành 3 bộ vị nào?", lua_chon: ["Thốn - Quan - Xích", "Biểu - Lý - Cương", "Thượng - Trung - Hạ", "Âm - Dương - Khí"], dap_an: 0, giai_thich: "Bắt mạch Thốn khẩu chia làm 3 vị trí nối tiếp: Thốn (gần bàn tay), Quan (giữa), Xích (gần cẳng tay)."
    },
    { category: 'lyluan', cau_hoi: "Khi bắt mạch, xem ở 3 mức độ ấn tay (Khấu, Trung, Trầm) gọi là:", lua_chon: ["Tam tầm (Nông, Vừa, Sâu)", "Bát cương", "Tứ chẩn", "Ngũ hành"], dap_an: 0, giai_thich: "Tam tầm là 3 mức độ dùng lực ngón tay: Phù tìm (nhẹ), Trung tìm (vừa), Trầm tìm (sâu sát xương)."
    },
    { category: 'lyluan', cau_hoi: "Mạch người bình thường vô bệnh (Mạch Bình/Mạch Hòa) có đặc điểm nhịp như thế nào?", lua_chon: ["1 nhịp thở (hít vào - thở ra) đập 4 đến 5 nhịp, thong dong, hòa hoãn, có lực", "Đập dồn dập trên 90 lần/phút", "Đập chậm dưới 50 lần/phút", "Ấn sát xương mới đập"], dap_an: 0, giai_thich: "Mạch bình thường nhịp đập 60-80 lần/phút (4-5 nhịp/hơi thở), nhịp điệu đều đặn mềm mại."
    },
    { category: 'lyluan', cau_hoi: "Mạch tượng có 'Vị khí' biểu hiện qua đặc điểm nào?", lua_chon: ["Nhịp đập thong dong, nhịp nhàng, không quá nhanh không quá chậm", "Đập căng như dây đàn", "Đập trơn tuột như hạt châu", "Đập ngắt quãng ngắn"], dap_an: 0, giai_thich: "Vị khí là gốc của mạch tượng; mạch có Vị khí đi thong dong, nhịp nhàng, nhu hòa."
    },
    { category: 'lyluan', cau_hoi: "Mạch tượng có 'Thần' biểu hiện qua đặc điểm nào?", lua_chon: ["Ấn sâu vào bộ Xích vẫn có lực đập nhu hòa", "Đập hỗn loạn", "Mạch nổi bồng bềnh", "Mạch đập rất nhanh"], dap_an: 0, giai_thich: "Mạch có Thần thể hiện sự dồi dào của tinh khí, ấn nặng lực đập vẫn nhu hòa vững vàng."
    },
    { category: 'lyluan', cau_hoi: "Mạch tượng có 'Căn' (có Gốc) biểu hiện qua vị trí bộ mạch nào?", lua_chon: ["Bộ Xích đập rõ ràng, ấn nặng vẫn thấy lực đập (Thận khí còn)", "Bộ Thốn đập mạnh", "Bộ Quan đập căng", "Mạch nổi ở da"], dap_an: 0, giai_thich: "Bộ Xích ứng với tạng Thận (Gốc của sinh mệnh); bộ Xích đập vững chứng tỏ mạch có Căn."
    },
    { category: 'lyluan', cau_hoi: "Cương lĩnh 'Âm Dương' trong Bát cương giữ vai trò gì?", lua_chon: ["Là Tổng cương (quy cương tổng quát nhất chỉ đạo 3 cặp còn lại)", "Chỉ chữa bệnh ở da", "Chỉ để bắt mạch", "Chỉ áp dụng cho người già"], dap_an: 0, giai_thich: "Âm và Dương thống quản 3 cặp còn lại: Biểu, Hàn, Hư thuộc Âm; Lý, Nhiệt, Thực thuộc Dương."
    },
    { category: 'lyluan', cau_hoi: "Nhóm thuộc tính Bát cương thuộc về 'Dương chứng' bao gồm:", lua_chon: ["Biểu, Nhiệt, Thực", "Lý, Hàn, Hư", "Biểu, Hàn, Hư", "Lý, Nhiệt, Hư"], dap_an: 0, giai_thich: "Dương chứng gồm các hội chứng mang đặc tính hưng phấn, nóng, ở ngoài, thế lực mạnh (Biểu, Nhiệt, Thực)."
    },
    { category: 'lyluan', cau_hoi: "Nhóm thuộc tính Bát cương thuộc về 'Âm chứng' bao gồm:", lua_chon: ["Lý, Hàn, Hư", "Biểu, Nhiệt, Thực", "Biểu, Nhiệt, Hư", "Lý, Nhiệt, Thực"], dap_an: 0, giai_thich: "Âm chứng gồm các hội chứng mang đặc tính ức chế, lạnh, ở sâu, suy hư (Lý, Hàn, Hư)."
    },
    { category: 'lyluan', cau_hoi: "Nguyên tắc điều trị 'Chính trị' (Nghịch trị) có nghĩa là gì?", lua_chon: ["Dùng thuốc có tính chất ĐỐI LẬP hoàn toàn với bản chất tính chất của bệnh", "Dùng thuốc cùng tính chất với bệnh", "Không dùng thuốc", "Chỉ bấm huyệt"], dap_an: 0, giai_thich: "Nghịch trị là phương pháp đánh trực diện: Bệnh Hàn dùng thuốc Nhiệt; Bệnh Nhiệt dùng thuốc Hàn."
    },
    { category: 'lyluan', cau_hoi: "Thủ pháp 'Bổ pháp' trong Bát pháp được chỉ định khi nào?", lua_chon: ["Khi cơ thể ở trạng thái Hư chứng (Chính khí suy hư)", "Khi cơ thể bị Thực nhiệt tích trệ", "Khi ngoại tà mới xâm nhập", "Khi bị ngộ độc thức ăn"], dap_an: 0, giai_thich: "Bổ pháp dùng bồi bổ các phần hư hụt của cơ thể (Bổ khí, Bổ huyết, Bổ âm, Bổ dương)."
    },
    { category: 'lyluan', cau_hoi: "Thủ pháp 'Tả pháp' trong Bát pháp được chỉ định khi nào?", lua_chon: ["Khi tà khí thịnh, cơ thể ở trạng thái Thực chứng", "Khi người bệnh quá suy kiệt", "Khi bị mất máu nhiều", "Khi âm hư sốt về chiều"], dap_an: 0, giai_thich: "Tả pháp dùng xua đuổi tà khí, công tả tích trệ khi tà khí đang vượng."
    },
    { category: 'lyluan', cau_hoi: "Đường kinh 'Thủ thái âm Phế' có tổng cộng bao nhiêu huyệt vị ở mỗi bên?", lua_chon: ["11 huyệt", "9 huyệt", "14 huyệt", "21 huyệt"], dap_an: 0, giai_thich: "Đường kinh Phế bắt đầu từ Trung Phủ (LU1) đến Thiếu Thương (LU11), gồm 11 huyệt."
    },
    { category: 'lyluan', cau_hoi: "Đường kinh 'Thủ dương minh Đại trường' có bao nhiêu huyệt ở mỗi bên?", lua_chon: ["20 huyệt", "11 huyệt", "19 huyệt", "67 huyệt"], dap_an: 0, giai_thich: "Kinh Đại trường đi từ Thương Dương (LI1) đến Nghinh Hương (LI20), gồm 20 huyệt."
    },
    { category: 'lyluan', cau_hoi: "Đường kinh 'Túc thái dương Bàng quang' là đường kinh dài nhất, có bao nhiêu huyệt?", lua_chon: ["67 huyệt", "45 huyệt", "21 huyệt", "36 huyệt"], dap_an: 0, giai_thich: "Kinh Bàng quang bắt đầu từ Tinh Minh (BL1) đến Chí Âm (BL67), gồm 67 huyệt vị."
    },
    { category: 'lyluan', cau_hoi: "Khái niệm 'Ngũ Du Huyệt' trên các đường kinh chính bao gồm 5 loại huyệt nào?", lua_chon: ["Tỉnh - Huỳnh - Du - Kinh - Hợp", "Nguyên - Lạc - Khích - Mộ - Du", "Bát hội - Bát mạch", "Thôn - Quan - Xích - Căn - Thần"], dap_an: 0, giai_thich: "Ngũ du huyệt bố trí từ ngón tay/chân lên khuỷu/gối gồm Tỉnh, Huỳnh, Du, Kinh, Hợp."
    },
    { category: 'lyluan', cau_hoi: "Vị trí của 'Tỉnh huyệt' trong hệ thống Ngũ Du Huyệt nằm ở đâu?", lua_chon: ["Ở đầu ngón tay, ngón chân (nơi kinh khí bắt đầu nhú ra như gốc nước)", "Ở khớp khuỷu tay", "Ở vùng thắt lưng", "Ở vùng bụng"], dap_an: 0, giai_thich: "Tỉnh huyệt nằm ở đầu các ngón tay ngón chân, dùng cấp cứu ngất, sốt cao."
    },
    { category: 'lyluan', cau_hoi: "Vị trí của 'Hợp huyệt' trong hệ thống Ngũ Du Huyệt nằm ở đâu?", lua_chon: ["Ở xung quanh khớp khuỷu tay hoặc khớp gối (nơi kinh khí hội nhập vào sâu)", "Ở đầu ngón tay", "Ở cổ tay", "Ở bẹn"], dap_an: 0, giai_thich: "Hợp huyệt nằm ở nếp khuỷu/khoeo gối, nơi dòng kinh khí nhập sâu vào tạng phủ."
    },
    { category: 'lyluan', cau_hoi: "Khái niệm 'Lạc Huyệt' có chức năng kết nối giữa:", lua_chon: ["Đường kinh chính và đường kinh có quan hệ Biểu - Lý với nó", "Lưng và bụng", "Đầu và chân", "Khí và Huyết"], dap_an: 0, giai_thich: "Lạc huyệt là nơi xuất phát nhánh Lạc mạch nối sang đường kinh có quan hệ biểu lý."
    },
    { category: 'lyluan', cau_hoi: "Khái niệm 'Khích Huyệt' là nơi kinh khí tập trung sâu, chuyên điều trị:", lua_chon: ["Các chứng bệnh cấp tính và đau đớn dữ dội của tạng phủ tương ứng", "Bệnh mạn tính kéo dài", "Bệnh ngoài da nhẹ", "Bồi bổ sức khỏe hàng ngày"], dap_an: 0, giai_thich: "Khích huyệt là nơi kinh khí tụ lại ở kẽ xương cơ, chuyên cấp cứu cắt cơn đau cấp."
    },
    { category: 'lyluan', cau_hoi: "Mạch Đốc có tổng cộng bao nhiêu huyệt vị trên đường giữa sau lưng?", lua_chon: ["28 huyệt", "24 huyệt", "14 huyệt", "36 huyệt"], dap_an: 0, giai_thich: "Mạch Đốc bắt đầu từ Trường Cường (GV1) đến Ngân Giao (GV28), gồm 28 huyệt."
    },
    { category: 'lyluan', cau_hoi: "Mạch Nhâm có tổng cộng bao nhiêu huyệt vị trên đường giữa trước bụng ngực?", lua_chon: ["24 huyệt", "28 huyệt", "12 huyệt", "18 huyệt"], dap_an: 0, giai_thich: "Mạch Nhâm bắt đầu từ Hội Âm (CV1) đến Thừa Tương (CV24), gồm 24 huyệt."
    }
];

const questionsDataPartLyluanExt8 = [
    // ==================== TẠNG PHỦ & BÁT PHÁP LÝ LUẬN (1 - 20) ====================
    { category: 'lyluan', cau_hoi: "Tạng Tâm khai khiếu ra đâu và vinh nhuận ra bộ phận nào?", lua_chon: ["Khai khiếu ra Lưỡi, vinh nhuận ra Sắc mặt", "Khai khiếu ra Mắt, vinh nhuận ra Móng", "Khai khiếu ra Miệng, vinh nhuận ra Môi", "Khai khiếu ra Tai, vinh nhuận ra Tóc"], dap_an: 0, giai_thich: "Tâm khai khiếu ra Lưỡi (ảnh hưởng tiếng nói, vị giác) và vinh nhuận thể hiện ra Sắc mặt."
    },
    { category: 'lyluan', cau_hoi: "Tạng Can khai khiếu ra đâu và vinh nhuận ra bộ phận nào?", lua_chon: ["Khai khiếu ra Mắt, vinh nhuận ra Móng tay móng chân", "Khai khiếu ra Lưỡi, vinh nhuận ra Sắc mặt", "Khai khiếu ra Mũi, vinh nhuận ra Da lông", "Khai khiếu ra Tai, vinh nhuận ra Tóc"], dap_an: 0, giai_thich: "Can tàng huyết dưỡng Mắt (khai khiếu ra Mắt) và chủ Cân nên vinh nhuận ra Móng."
    },
    { category: 'lyluan', cau_hoi: "Tạng Tỳ khai khiếu ra đâu và vinh nhuận ra bộ phận nào?", lua_chon: ["Khai khiếu ra Miệng, vinh nhuận ra Môi", "Khai khiếu ra Mắt, vinh nhuận ra Móng", "Khai khiếu ra Lưỡi, vinh nhuận ra Sắc mặt", "Khai khiếu ra Mũi, vinh nhuận ra Da lông"], dap_an: 0, giai_thich: "Tỳ vận hóa thủy cốc khai khiếu ra Miệng (cảm nhận vị giác) và vinh nhuận ra Môi."
    },
    { category: 'lyluan', cau_hoi: "Tạng Phế khai khiếu ra đâu và vinh nhuận ra bộ phận nào?", lua_chon: ["Khai khiếu ra Mũi, vinh nhuận ra Da lông (Bì mao)", "Khai khiếu ra Tai, vinh nhuận ra Tóc", "Khai khiếu ra Lưỡi, vinh nhuận ra Mạch", "Khai khiếu ra Mắt, vinh nhuận ra Gân"], dap_an: 0, giai_thich: "Phế chủ hô hấp thông qua Mũi và tuyên phát tân dịch nuôi dưỡng Bì mao."
    },
    { category: 'lyluan', cau_hoi: "Tạng Thận khai khiếu ra đâu và vinh nhuận ra bộ phận nào?", lua_chon: ["Khai khiếu ra Tai và Nhị âm, vinh nhuận ra Tóc", "Khai khiếu ra Mũi, vinh nhuận ra Da", "Khai khiếu ra Mắt, vinh nhuận ra Móng", "Khai khiếu ra Lưỡi, vinh nhuận ra Mặt"], dap_an: 0, giai_thich: "Thận tàng tinh khai khiếu ra Tai/Nhị âm và huyết dư sinh Tóc nên vinh nhuận ra Tóc."
    },
    { category: 'lyluan', cau_hoi: "Các bài thuốc Thừa khí thang (Đại thừa khí, Tiểu thừa khí) dựa trên thủ pháp nào trong Bát pháp?", lua_chon: ["Hạ pháp (Tẩy xổ nhiệt tích)", "Hãn pháp", "Hòa pháp", "Bổ pháp"], dap_an: 0, giai_thich: "Thừa khí thang dùng Hạ pháp xổ tả nhiệt tích trệ ở Đại trường."
    },
    { category: 'lyluan', cau_hoi: "Các bài thuốc Ma hoàng thang, Quế chi thang ứng dụng thủ pháp nào trong Bát pháp?", lua_chon: ["Hãn pháp (Giải biểu phát hãn)", "Hạ pháp", "Thanh pháp", "Tiêu pháp"], dap_an: 0, giai_thich: "Ma hoàng, Quế chi thang làm ra mồ hôi giải ngoại tà ở phần Biểu (Hãn pháp)."
    },
    { category: 'lyluan', cau_hoi: "Bài thuốc Tiêu sài hồ thang đại diện cho thủ pháp điều trị nào trong Bát pháp?", lua_chon: ["Hòa pháp (Hòa giải bán biểu bán lý)", "Thổ pháp", "Ôn pháp", "Thanh pháp"], dap_an: 0, giai_thich: "Tiêu sài hồ thang hòa giải kinh Thiếu dương bán biểu bán lý (Hòa pháp)."
    },
    { category: 'lyluan', cau_hoi: "Các bài thuốc Bạch hổ thang, Hoàng liên giải độc thang áp dụng thủ pháp nào?", lua_chon: ["Thanh pháp (Thanh nhiệt giải độc)", "Ôn pháp", "Hạ pháp", "Bổ pháp"], dap_an: 0, giai_thich: "Thanh pháp dùng các vị đắng lạnh thanh tả thực hỏa độc nhiệt ở khí phận và nội tạng."
    },
    { category: 'lyluan', cau_hoi: "Các bài thuốc Lý trung hoàn, Tứ nghịch thang áp dụng thủ pháp điều trị nào?", lua_chon: ["Ôn pháp (Ôn trung tán hàn, hồi dương)", "Thanh pháp", "Hãn pháp", "Tiêu pháp"], dap_an: 0, giai_thich: "Ôn pháp dùng bài thuốc cay nóng làm ấm Tỳ Vị hư hàn và hồi dương cứu nghịch."
    },
    { category: 'lyluan', cau_hoi: "Các bài thuốc Bảo hòa hoàn, Mộc hương binh lang hoàn áp dụng thủ pháp nào?", lua_chon: ["Tiêu pháp (Tiêu thực đạo trệ)", "Hãn pháp", "Hạ pháp", "Ôn pháp"], dap_an: 0, giai_thich: "Tiêu pháp dùng làm tiêu tan từ từ các khối thực tích, đàm trệ hữu hình."
    },
    { category: 'lyluan', cau_hoi: "Các bài thuốc Tứ quân tử thang, Tứ vật thang áp dụng thủ pháp nào?", lua_chon: ["Bổ pháp (Bồi bổ hư suy)", "Hạ pháp", "Thổ pháp", "Hòa pháp"], dap_an: 0, giai_thich: "Bổ pháp dùng bồi bổ các phần khí huyết âm dương bị thiếu hụt."
    },
    { category: 'lyluan', cau_hoi: "Phương pháp gây nôn tống thức ăn độc hoặc đàm dính ở họng ra ngoài thuộc thủ pháp nào?", lua_chon: ["Thổ pháp", "Hãn pháp", "Hạ pháp", "Thanh pháp"], dap_an: 0, giai_thich: "Thổ pháp dùng kích thích gây nôn tống tà tích ở dạ dày họng ra ngoài."
    },
    { category: 'lyluan', cau_hoi: "Trong học thuyết Vệ Khí Doanh Huyết của Ôn bệnh, giai đoạn bệnh ở vị trí nông nhất là:", lua_chon: ["Vệ phận (Bề ngoài da lông)", "Khí phận", "Doanh phận", "Huyết phận"], dap_an: 0, giai_thich: "Vệ phận là giai đoạn khởi phát đầu tiên của bệnh Ôn nhiệt ở bề ngoài."
    },
    { category: 'lyluan', cau_hoi: "Trong học thuyết Vệ Khí Doanh Huyết, khi tà nhiệt đi vào sâu hơn Vệ phận sẽ đến:", lua_chon: ["Khí phận (Tạng phủ bên trong)", "Doanh phận", "Huyết phận", "Cốt phận"], dap_an: 0, giai_thich: "Khí phận là giai đoạn tà nhiệt đã vào sâu tạng phủ gây sốt cao, khát nước."
    },
    { category: 'lyluan', cau_hoi: "Giai đoạn tà nhiệt làm tổn thương âm dịch, sốt về đêm, lưỡi đỏ thẫm thuộc phân gian nào?", lua_chon: ["Doanh phận", "Vệ phận", "Khí phận", "Kinh phận"], dap_an: 0, giai_thich: "Doanh phận phản ánh nhiệt tà thiêu đốt âm dịch, ảnh hưởng Tâm thần."
    },
    { category: 'lyluan', cau_hoi: "Giai đoạn bệnh Ôn nhiệt nặng nhất gây cuồng loạn, xuất huyết, nôn máu thuộc phân gian nào?", lua_chon: ["Huyết phận", "Vệ phận", "Khí phận", "Doanh phận"], dap_an: 0, giai_thich: "Huyết phận là giai đoạn cực nặng, nhiệt bức huyết vọng hành gây xuất huyết dồn dập."
    },
    { category: 'lyluan', cau_hoi: "Trong Thương hàn luận, kinh đầu tiên tiếp nhận ngoại cảm phong hàn tấn công là:", lua_chon: ["Thái dương kinh", "Dương minh kinh", "Thiếu dương kinh", "Thái âm kinh"], dap_an: 0, giai_thich: "Kinh Thái dương ở sau lưng làm rào chắn bên ngoài chống ngoại tà đầu tiên."
    },
    { category: 'lyluan', cau_hoi: "Giai đoạn bệnh Thương hàn có triệu chứng 'sốt cao, sợ nóng, khát nước, táo bón' thuộc kinh nào?", lua_chon: ["Dương minh kinh", "Thái dương kinh", "Thiếu dương kinh", "Thận kinh"], dap_an: 0, giai_thich: "Dương minh kinh chủ về hỏa nhiệt bùng phát ở Khí phận gây táo bón thực nhiệt."
    },
    { category: 'lyluan', cau_hoi: "Giai đoạn bệnh Thương hàn có triệu chứng 'lúc sốt lúc rét, miệng đắng, họng khô' thuộc kinh nào?", lua_chon: ["Thiếu dương kinh (Bán biểu bán lý)", "Thái dương kinh", "Dương minh kinh", "Quyết âm kinh"], dap_an: 0, giai_thich: "Thiếu dương kinh là vị trí bán biểu bán lý sinh ra chứng vãng lai hàn nhiệt."
    },

    // ==================== BÁT HỘI HUYỆT & NGŨ DU HUYỆT (21 - 50) ====================
    { category: 'lyluan', cau_hoi: "Theo Ngũ hành Ngũ Du Huyệt, 'Tỉnh huyệt' của 6 đường kinh Âm thuộc hành nào?", lua_chon: ["Mộc", "Hỏa", "Thổ", "Kim"], dap_an: 0, giai_thich: "Quy luật Ngũ du kinh Âm bắt đầu Tỉnh Mộc -> Huỳnh Hỏa -> Du Thổ -> Kinh Kim -> Hợp Thủy."
    },
    { category: 'lyluan', cau_hoi: "Theo Ngũ hành Ngũ Du Huyệt, 'Tỉnh huyệt' của 6 đường kinh Dương thuộc hành nào?", lua_chon: ["Kim", "Thủy", "Mộc", "Hỏa"], dap_an: 0, giai_thich: "Quy luật Ngũ du kinh Dương bắt đầu Tỉnh Kim -> Huỳnh Thủy -> Du Mộc -> Kinh Hỏa -> Hợp Thổ."
    },
    { category: 'lyluan', cau_hoi: "Theo Ngũ hành Ngũ Du Huyệt, 'Huỳnh huyệt' của 6 đường kinh Âm thuộc hành nào?", lua_chon: ["Hỏa", "Thổ", "Kim", "Thủy"], dap_an: 0, giai_thich: "Kinh Âm: Tỉnh Mộc -> Huỳnh Hỏa."
    },
    { category: 'lyluan', cau_hoi: "Theo Ngũ hành Ngũ Du Huyệt, 'Huỳnh huyệt' của 6 đường kinh Dương thuộc hành nào?", lua_chon: ["Thủy", "Mộc", "Hỏa", "Thổ"], dap_an: 0, giai_thich: "Kinh Dương: Tỉnh Kim -> Huỳnh Thủy."
    },
    { category: 'lyluan', cau_hoi: "Theo Ngũ hành Ngũ Du Huyệt, 'Du huyệt' của 6 đường kinh Âm thuộc hành nào?", lua_chon: ["Thổ (đồng thời là Nguyên huyệt của kinh Âm)", "Kim", "Thủy", "Mộc"], dap_an: 0, giai_thich: "Ở 6 kinh Âm, Du huyệt thuộc Thổ và trùng hợp chính là Nguyên huyệt."
    },
    { category: 'lyluan', cau_hoi: "Theo Ngũ hành Ngũ Du Huyệt, 'Du huyệt' của 6 đường kinh Dương thuộc hành nào?", lua_chon: ["Mộc", "Hỏa", "Thổ", "Kim"], dap_an: 0, giai_thich: "Kinh Dương: Tỉnh Kim -> Huỳnh Thủy -> Du Mộc."
    },
    { category: 'lyluan', cau_hoi: "Trong Bát Hội Huyệt, huyệt Chương Môn (LR13) giữ vai trò hội tụ gì?", lua_chon: ["Tạng hội (Nơi hội tụ khí của Ngũ tạng)", "Phủ hội", "Khí hội", "Huyết hội"], dap_an: 0, giai_thich: "Chương Môn (Mộ huyệt của Tỳ) là Tạng hội trong Bát hội huyệt."
    },
    { category: 'lyluan', cau_hoi: "Trong Bát Hội Huyệt, huyệt Trung Quản (CV12) giữ vai trò hội tụ gì?", lua_chon: ["Phủ hội (Nơi hội tụ khí của Lục phủ)", "Tạng hội", "Cân hội", "Tủy hội"], dap_an: 0, giai_thich: "Trung Quản (Mộ huyệt của Vị) là Phủ hội trong Bát hội huyệt."
    },
    { category: 'lyluan', cau_hoi: "Trong Bát Hội Huyệt, huyệt Dương Lăng Tuyền (GB34) giữ vai trò hội tụ gì?", lua_chon: ["Cân hội (Nơi hội tụ của Gân cơ)", "Mạch hội", "Cốt hội", "Tủy hội"], dap_an: 0, giai_thich: "Dương Lăng Tuyền chuyên trị các bệnh về gân co quắp, đau khớp (Cân hội)."
    },
    { category: 'lyluan', cau_hoi: "Trong Bát Hội Huyệt, huyệt Thái Uyên (LU9) giữ vai trò hội tụ gì?", lua_chon: ["Mạch hội (Nơi hội tụ của Mạch máu)", "Khí hội", "Huyết hội", "Cân hội"], dap_an: 0, giai_thich: "Thái Uyên (Nguyên huyệt kinh Phế) nằm ở động mạch quay là Mạch hội."
    },
    { category: 'lyluan', cau_hoi: "Trong Bát Hội Huyệt, huyệt Đại Trữ (BL11) giữ vai trò hội tụ gì?", lua_chon: ["Cốt hội (Nơi hội tụ của Xương)", "Tủy hội", "Cân hội", "Tạng hội"], dap_an: 0, giai_thich: "Đại Trữ (ngang gai đốt sống lưng T1 ra 1.5 thốn) là Cốt hội chuyên trị bệnh xương."
    },
    { category: 'lyluan', cau_hoi: "Trong Bát Hội Huyệt, huyệt Tuyệt Cốc (Huyền Chung - GB39) giữ vai trò hội tụ gì?", lua_chon: ["Tủy hội (Nơi hội tụ của Tủy)", "Cốt hội", "Mạch hội", "Khí hội"], dap_an: 0, giai_thich: "Tuyệt Cốc (trên mắt cá ngoài 3 thốn) là Tủy hội."
    },
    { category: 'lyluan', cau_hoi: "Huyệt Nguyên của kinh Thủ thái âm Phế là huyệt nào?", lua_chon: ["Thái Uyên (LU9)", "Liệt Khuyết", "Xích Trạch", "Thiếu Thương"], dap_an: 0, giai_thich: "Thái Uyên là Nguyên huyệt kiêm Du huyệt của kinh Phế."
    },
    { category: 'lyluan', cau_hoi: "Huyệt Nguyên của kinh Thủ dương minh Đại trường là huyệt nào?", lua_chon: ["Hợp Cốc (LI4)", "Khúc Trì", "Kiên Ngung", "Thương Dương"], dap_an: 0, giai_thich: "Hợp Cốc là Nguyên huyệt của kinh Đại trường."
    },
    { category: 'lyluan', cau_hoi: "Huyệt Nguyên của kinh Túc dương minh Vị là huyệt nào?", lua_chon: ["Xung Dương (ST42)", "Túc Tam Lý", "Giải Khê", "Nội Đình"], dap_an: 0, giai_thich: "Xung Dương nằm ở mu bàn chân là Nguyên huyệt kinh Vị."
    },
    { category: 'lyluan', cau_hoi: "Huyệt Nguyên của kinh Túc thái âm Tỳ là huyệt nào?", lua_chon: ["Thái Bạch (SP3)", "Tam Âm Giao", "Âm Lăng Tuyền", "Huyết Hải"], dap_an: 0, giai_thich: "Thái Bạch nằm ở bờ trong bàn chân là Nguyên huyệt kinh Tỳ."
    },
    { category: 'lyluan', cau_hoi: "Huyệt Nguyên của kinh Thủ thiếu âm Tâm là huyệt nào?", lua_chon: ["Thần Môn (HT7)", "Thiếu Hải", "Thông Lý", "Cực Tuyền"], dap_an: 0, giai_thich: "Thần Môn nằm ở nếp cổ tay bờ trong là Nguyên huyệt kinh Tâm."
    },
    { category: 'lyluan', cau_hoi: "Huyệt Nguyên của kinh Túc thiếu âm Thận là huyệt nào?", lua_chon: ["Thái Khê (KI3)", "Dũng Tuyền", "Phục Lưu", "Chiếu Hải"], dap_an: 0, giai_thich: "Thái Khê giữa mắt cá trong và gân gót là Nguyên huyệt kinh Thận."
    },
    { category: 'lyluan', cau_hoi: "Huyệt Nguyên của kinh Túc quyết âm Can là huyệt nào?", lua_chon: ["Thái Xung (LR3)", "Hành Gian", "Đại Đốn", "Kỳ Môn"], dap_an: 0, giai_thich: "Thái Xung ở kẽ ngón chân 1-2 là Nguyên huyệt kinh Can."
    },
    { category: 'lyluan', cau_hoi: "Huyệt Lạc của kinh Thủ thái âm Phế kết nối sang kinh Đại trường là huyệt nào?", lua_chon: ["Liệt Khuyết (LU7)", "Thái Uyên", "Khổng Tối", "Nội Quan"], dap_an: 0, giai_thich: "Liệt Khuyết là Lạc huyệt kinh Phế."
    },
    { category: 'lyluan', cau_hoi: "Huyệt Lạc của kinh Túc dương minh Vị là huyệt nào?", lua_chon: ["Phong Long (ST40)", "Túc Tam Lý", "Giải Khê", "Hạ Quan"], dap_an: 0, giai_thich: "Phong Long là Lạc huyệt kinh Vị chuyên hóa đàm."
    },
    { category: 'lyluan', cau_hoi: "Huyệt Lạc của kinh Túc thái âm Tỳ là huyệt nào?", lua_chon: ["Công Tôn (SP4)", "Tam Âm Giao", "Thái Bạch", "Thương Khâu"], dap_an: 0, giai_thich: "Công Tôn là Lạc huyệt kinh Tỳ thông với mạch Xung."
    },
    { category: 'lyluan', cau_hoi: "Bối Du Huyệt của tạng Tâm nằm ở sau lưng là huyệt nào?", lua_chon: ["Tâm Du (BL15 - Ngang đốt T5 ra 1.5 thốn)", "Phế Du", "Can Du", "Thận Du"], dap_an: 0, giai_thich: "Tâm Du dưới gai T5 ra 1.5 thốn là Bối du huyệt của Tâm."
    },
    { category: 'lyluan', cau_hoi: "Bối Du Huyệt của tạng Can là huyệt nào?", lua_chon: ["Can Du (BL18 - Ngang T9 ra 1.5 thốn)", "Đởm Du", "Tỳ Du", "Phế Du"], dap_an: 0, giai_thich: "Can Du dưới gai T9 ra 1.5 thốn là Bối du huyệt của Can."
    },
    { category: 'lyluan', cau_hoi: "Bối Du Huyệt của tạng Tỳ là huyệt nào?", lua_chon: ["Tỳ Du (BL20 - Ngang T11 ra 1.5 thốn)", "Vị Du", "Thận Du", "Cách Du"], dap_an: 0, giai_thich: "Tỳ Du dưới gai T11 ra 1.5 thốn là Bối du huyệt của Tỳ."
    },
    { category: 'lyluan', cau_hoi: "Bối Du Huyệt của tạng Phế là huyệt nào?", lua_chon: ["Phế Du (BL13 - Ngang T3 ra 1.5 thốn)", "Tâm Du", "Đốc Sống", "Phong Trì"], dap_an: 0, giai_thich: "Phế Du dưới gai T3 ra 1.5 thốn là Bối du huyệt của Phế."
    },
    { category: 'lyluan', cau_hoi: "Bối Du Huyệt của tạng Thận là huyệt nào?", lua_chon: ["Thận Du (BL23 - Ngang L2 ra 1.5 thốn)", "Đại Trường Du", "Quan Nguyên Du", "Mệnh Môn"], dap_an: 0, giai_thich: "Thận Du dưới gai L2 ra 1.5 thốn là Bối du huyệt của Thận."
    },

    // ==================== MÔ BỆNH HỌC TẠNG PHỦ MỜ RỘNG (51 - 80) ====================
    { category: 'lyluan', cau_hoi: "Mộ Huyệt của tạng Phế nằm ở ngực là huyệt nào?", lua_chon: ["Trung Phủ (LU1)", "Đản Trung", "Xích Trạch", "Khuyết Bồn"], dap_an: 0, giai_thich: "Trung Phủ ở khoang liên sườn 1 ra 6 thốn là Mộ huyệt của Phế."
    },
    { category: 'lyluan', cau_hoi: "Mộ Huyệt của phủ Đại trường là huyệt nào?", lua_chon: ["Thiên Khu (ST25 - Ngang rốn ra 2 thốn)", "Quan Nguyên", "Khí Hải", "Trung Cực"], dap_an: 0, giai_thich: "Thiên Khu cạnh rốn 2 thốn là Mộ huyệt của Đại trường."
    },
    { category: 'lyluan', cau_hoi: "Mộ Huyệt của phủ Vị là huyệt nào?", lua_chon: ["Trung Quản (CV12 - Trên rốn 4 thốn)", "Hạ Quản", "Thượng Quản", "Cự Khuyết"], dap_an: 0, giai_thich: "Trung Quản trên rốn 4 thốn là Mộ huyệt của Vị."
    },
    { category: 'lyluan', cau_hoi: "Mộ Huyệt của tạng Tỳ là huyệt nào?", lua_chon: ["Chương Môn (LR13 - Đầu xương sườn tự do 11)", "Kỳ Môn", "Nhật Nguyệt", "Đại Bao"], dap_an: 0, giai_thich: "Chương Môn trên kinh Can là Mộ huyệt của Tỳ."
    },
    { category: 'lyluan', cau_hoi: "Mộ Huyệt của tạng Tâm là huyệt nào?", lua_chon: ["Cự Khuyết (CV14 - Trên rốn 6 thốn)", "Đản Trung", "Thần Khuyết", "Cửu Vĩ"], dap_an: 0, giai_thich: "Cự Khuyết thuộc Mạch Nhâm là Mộ huyệt của Tâm."
    },
    { category: 'lyluan', cau_hoi: "Mộ Huyệt của phủ Bàng quang là huyệt nào?", lua_chon: ["Trung Cực (CV3 - Dưới rốn 4 thốn)", "Quan Nguyên", "Khí Hải", "Khúc Cốt"], dap_an: 0, giai_thich: "Trung Cực dưới rốn 4 thốn là Mộ huyệt của Bàng quang."
    },
    { category: 'lyluan', cau_hoi: "Mộ Huyệt của tạng Thận là huyệt nào?", lua_chon: ["Kinh Môn (GB25 - Đầu xương sườn tự do 12)", "Chương Môn", "Thận Du", "Mệnh Môn"], dap_an: 0, giai_thich: "Kinh Môn thuộc kinh Đởm là Mộ huyệt của Thận."
    },
    { category: 'lyluan', cau_hoi: "Mộ Huyệt của tạng Can là huyệt nào?", lua_chon: ["Kỳ Môn (LR14 - Khoang liên sườn 6 gian đường nách)", "Chương Môn", "Nhật Nguyệt", "Thái Xung"], dap_an: 0, giai_thich: "Kỳ Môn ở khoang liên sườn 6 là Mộ huyệt của Can."
    },
    { category: 'lyluan', cau_hoi: "Hội chứng 'Tỳ Phế khí hư' sinh ra do sự phối hợp bệnh lý nào?", lua_chon: ["Tỳ hư kém vận hóa thủy cốc không nuôi Phế, Phế khí hư giảm hô hấp", "Can khí uất trệ", "Thận hỏa bốc", "Tâm hỏa độc vượng"], dap_an: 0, giai_thich: "Tỳ Thổ hư không sinh Phế Kim, gây biếng ăn, phân nát kèm ho tiếng nhỏ, đoản hơi."
    },
    { category: 'lyluan', cau_hoi: "Hội chứng 'Tâm Thận dương hư' gây nên tình trạng lâm sàng nguy kịch nào?", lua_chon: ["Hồi hộp, tim đập chậm, sợ lạnh, chi lạnh ngắt, phù thũng toàn thân", "Sốt cao cuồng loạn", "Mất ngủ sốt về chiều", "Ho ra máu tươi"], dap_an: 0, giai_thich: "Tâm dương hư không thúc đẩy huyết kiêm Thận dương hư không hóa khí thủy thũng."
    },
    { category: 'lyluan', cau_hoi: "Hội chứng 'Phế Thận âm hư' biểu hiện qua tập hợp triệu chứng điển hình nào?", lua_chon: ["Ho khan đờm dính máu, sốt về chiều, gò má đỏ, lưng mỏi gối yếu, đạo hãn", "Sợ lạnh tay chân lạnh ngắt", "Nôn mửa ra thức ăn hôi", "Đau tức sườn cáu gắt"], dap_an: 0, giai_thich: "Phế Âm hư gây ho khan; Thận Âm hư gây mỏi lưng triều nhiệt đạo hãn."
    },

    // ==================== CHẨN ĐOÁN & MẠCH TƯỢNG PHỐI HỢP (81 - 100) ====================
    { category: 'lyluan', cau_hoi: "Triệu chứng 'Khát không muốn uống' hoặc 'Khát uống súc miệng rồi nhả' gợi ý bệnh lý gì?", lua_chon: ["Huyết ứ hoặc Thấp nhiệt nội kết", "Thực nhiệt ở Khí phận", "Tỳ vị hư hàn", "Phế hỏa bốc cao"], dap_an: 0, giai_thich: "Khát súc miệng nhả do ứ huyết/thấp nhiệt cản trở phân bố tân dịch chứ cơ thể không thiếu nước."
    },
    { category: 'lyluan', cau_hoi: "Hiện tượng 'Ngũ tâm phiền nhiệt' là cảm giác nóng ở những vị trí nào trên cơ thể?", lua_chon: ["Hai lòng bàn tay, hai lòng bàn chân và vùng Ngực", "Đầu, Mặt, Cổ", "Lưng, Bụng, Đùi", "Hai nách và hai bẹn"], dap_an: 0, giai_thich: "Ngũ tâm là 5 lòng (2 lòng bàn tay, 2 lòng bàn chân, 1 vùng ngực tim)."
    },
    { category: 'lyluan', cau_hoi: "Triệu chứng 'Ngũ tâm phiền nhiệt' là dấu hiệu đặc trưng của hội chứng bệnh lý nào?", lua_chon: ["Âm hư nội nhiệt (Hư nhiệt)", "Dương hư ngoại hàn", "Thực nhiệt ở Vệ phận", "Khí trệ"], dap_an: 0, giai_thich: "Âm hư sinh nội nhiệt làm bứt rứt nóng ở 5 lòng bẩm sinh."
    },
    { category: 'lyluan', cau_hoi: "Sự phối hợp mạch 'Phù Khẩn' phản ánh hội chứng bệnh lý nào?", lua_chon: ["Phong hàn biểu thực chứng (Cảm mạo phong hàn không mồ hôi)", "Phong nhiệt biểu chứng", "Lý thực nhiệt", "Tỳ hư"], dap_an: 0, giai_thich: "Phù chủ về Biểu; Khẩn chủ về Hàn tà bó chặt không ra mồ hôi."
    },
    { category: 'lyluan', cau_hoi: "Sự phối hợp mạch 'Phù Sác' phản ánh hội chứng bệnh lý nào?", lua_chon: ["Phong nhiệt biểu chứng (Cảm mạo phong nhiệt)", "Phong hàn biểu chứng", "Lý hàn chứng", "Âm hư"], dap_an: 0, giai_thich: "Phù chủ về Biểu; Sác chủ về Nhiệt tà."
    },
    { category: 'lyluan', cau_hoi: "Sự phối hợp mạch 'Trầm Trì' phản ánh hội chứng bệnh lý nào?", lua_chon: ["Lý hàn chứng (Hàn tà ở sâu tạng phủ)", "Biểu nhiệt chứng", "Lý nhiệt chứng", "Phong thấp"], dap_an: 0, giai_thich: "Trầm chủ về Lý; Trì chủ về Hàn."
    },
    { category: 'lyluan', cau_hoi: "Sự phối hợp mạch 'Trầm Sác' phản ánh hội chứng bệnh lý nào?", lua_chon: ["Lý nhiệt chứng (Nhiệt tà ở tạng phủ)", "Biểu hàn chứng", "Lý hàn chứng", "Âm hư nhẹ"], dap_an: 0, giai_thich: "Trầm chủ về Lý; Sác chủ về Nhiệt."
    },
    { category: 'lyluan', cau_hoi: "Sự phối hợp mạch 'Trầm Tế Sác' phản ánh hội chứng bệnh lý nào?", lua_chon: ["Âm hư nội nhiệt chứng", "Thực nhiệt thịnh", "Dương hư ngoại hàn", "Khí trệ nặng"], dap_an: 0, giai_thich: "Trầm (Lý), Tế (Âm/Huyết hư), Sác (Nhiệt) -> Âm hư nội nhiệt."
    },
    { category: 'lyluan', cau_hoi: "Sự phối hợp mạch 'Trầm Vi Tế' phản ánh hội chứng bệnh lý nào?", lua_chon: ["Dương khí suy vi / Khí huyết đại hư", "Lý thực nhiệt", "Thực tích", "Can hỏa"], dap_an: 0, giai_thich: "Trầm (chìm), Vi (nhỏ xíu sắp đứt), Tế (nhỏ) -> Dương khí suy kiệt nguy ngập."
    },
    { category: 'lyluan', cau_hoi: "Rêu lưỡi 'Vàng khô gai' phản ánh tình trạng nhiệt độ cơ thể như thế nào?", lua_chon: ["Thực nhiệt cực thịnh ở tạng phủ thiêu đốt tân dịch", "Âm hàn ngưng trệ", "Tỳ hư thấp đọng", "Mới mắc phong hàn"], dap_an: 0, giai_thich: "Vàng (Nhiệt), khô gai (thiêu đốt kiệt tân dịch) -> Thực nhiệt nặng."
    },
    { category: 'lyluan', cau_hoi: "Rêu lưỡi 'Đen khô' biểu hiện trạng thái nhiệt độ cơ thể ở mức nào?", lua_chon: ["Nhiệt cực (Nhiệt thịnh đến cực điểm thiêu cạn tân dịch)", "Âm hàn cực điểm", "Khí hư nhẹ", "Can huyết hư"], dap_an: 0, giai_thich: "Rêu đen mà khô ráp chứng tỏ hỏa nhiệt thiêu đốt đạt mức cực đại."
    },
    { category: 'lyluan', cau_hoi: "Rêu lưỡi 'Đen trơn ướt' biểu hiện trạng thái nhiệt độ cơ thể ở mức nào?", lua_chon: ["Hàn cực (Âm hàn ngưng trệ đến mức cực điểm)", "Nhiệt cực", "Táo nhiệt", "Can hỏa thượng viêm"], dap_an: 0, giai_thich: "Rêu đen nhưng trơn ướt chứng tỏ âm hàn đàm thấp tích tụ đạt cực điểm."
    },
    { category: 'lyluan', cau_hoi: "Chất lưỡi 'Thè dài, lắc lư, co rút' (Lưỡi động) là biểu hiện lâm sàng của:", lua_chon: ["Can phong nội động (Nhiệt cực sinh phong hoặc Trúng phong)", "Tỳ khí hư", "Phế phế táo", "Tâm hỏa nhẹ"], dap_an: 0, giai_thich: "Sự vận động bất thường co giật lắc lư của lưỡi thuộc về Can phong nội động."
    },
    { category: 'lyluan', cau_hoi: "Chất lưỡi 'Lệch sang một bên' khi há miệng là dấu hiệu đặc trưng của bệnh nào?", lua_chon: ["Trúng phong (Tai biến mạch máu não)", "Tỳ hư tiêu chảy", "Ngoại cảm phong hàn", "Vị nhiệt lở miệng"], dap_an: 0, giai_thich: "Lưỡi lệch nghiêng một bên là dấu hiệu tổn thương thần kinh do Trúng phong/Liệt mặt."
    },
    { category: 'lyluan', cau_hoi: "Trong chẩn đoán YHCT, 'Nhiệt cực sinh phong' biến hóa theo quy luật nào?", lua_chon: ["Hỏa thịnh sinh Phong (Nhiệt độ quá cao kích thích sinh co giật)", "Âm thịnh sinh Hàn", "Mộc sinh Thổ", "Kim khắc Mộc"], dap_an: 0, giai_thich: "Nhiệt tà thiêu đốt cực điểm thiêu gân sinh ra phong động co giật."
    },
    { category: 'lyluan', cau_hoi: "Biểu hiện 'Phôi thai trù đao' (Phân khô cứng nẩy thành cục như phân dê) do cơ chế gì?", lua_chon: ["Đại trường táo nhiệt / Tân dịch hao tổn không nhuận tràng", "Tỳ hư tiêu chảy", "Thấp nhiệt tỳ vị", "Can khí thăng hoa"], dap_an: 0, giai_thich: "Nhiệt thiêu kiệt tân dịch ở Đại trường làm phân khô cứng thành viên rời rạc."
    },
    { category: 'lyluan', cau_hoi: "Triệu chứng 'Đau bụng âm ỉ, thích xoa bóp, thích chườm nóng' thuộc chứng gì?", lua_chon: ["Tỳ Vị hư hàn (Hư chứng)", "Tỳ Vị thực nhiệt (Thực chứng)", "Ứ huyết tạng phủ", "Thực tích trệ"], dap_an: 0, giai_thich: "Đau âm ỉ thích chườm ấm xoa bóp thuộc hư hàn."
    },
    { category: 'lyluan', cau_hoi: "Triệu chứng 'Đau bụng dữ dội, cự án, chườm nóng đau tăng' thuộc chứng gì?", lua_chon: ["Thực nhiệt / Ứ trệ (Thực chứng)", "Hư hàn", "Tỳ khí hư", "Thận âm hư"], dap_an: 0, giai_thich: "Đau dữ dội sợ chườm nóng cự án thuộc thực nhiệt bế tắc."
    },
    { category: 'lyluan', cau_hoi: "Trong chẩn đoán theo Lục kinh, chứng 'Thiếu âm bệnh' có 2 xu hướng chính nào?", lua_chon: ["Thiếu âm Hóa Hàn (Thận dương hư) và Thiếu âm Hóa Nhiệt (Thận âm hư)", "Thái dương và Dương minh", "Vệ phận và Khí phận", "Biểu và Lý"], dap_an: 0, giai_thich: "Thiếu âm (Tâm Thận) có thể tiến triển theo hướng hỏa suy (Hóa hàn) hoặc âm hư hỏa vượng (Hóa nhiệt)."
    },
    { category: 'lyluan', cau_hoi: "Khái niệm 'Kinh nguyệt đến sớm' (Tiên kỳ, trước 7 ngày) thường xuất hiện do 2 nguyên nhân chính nào?", lua_chon: ["Huyết nhiệt (Nhiệt bức huyết vọng hành) hoặc Khí hư (Không cố nhiếp được huyết)", "Huyết hàn", "Can huyết hư", "Tỳ dương hư"], dap_an: 0, giai_thich: "Kinh đến sớm do Nhiệt làm dồn dập hoặc Khí hư không giữ được kinh chảy sớm."
    }
];
// Bổ sung hàm định nghĩa lọc trùng lặp câu hỏi
function removeDuplicateQuestions(arr) {
    const seen = new Set();
    return arr.filter(item => {
        // Kiểm tra xem nội dung câu hỏi đã xuất hiện chưa
        if (seen.has(item.cau_hoi)) {
            return false;
        }
        seen.add(item.cau_hoi);
        return true;
    });
}

// Tổng hợp tất cả các phần dữ liệu
window.questionsData = [
    ...questionsDataPart1,
    ...questionsDataPart2,
    ...questionsDataPart3,
    ...questionsDataPart4,
    ...questionsDataPart5,
    ...questionsDataPartLyluanExt,
    ...questionsDataPartLyluanExt2,
    ...questionsDataPartLyluanExt3,
    ...questionsDataPartLyluanExt4,
    ...questionsDataPartLyluanExt5,
    ...questionsDataPartLyluanExt6,
    ...questionsDataPartLyluanExt7,
    ...questionsDataPartLyluanExt8
];


console.log("Tổng số câu hỏi trước khi xóa trùng:", window.questionsData.length);

// Tự động xóa các câu trùng lặp nội dung câu hỏi
window.questionsData = removeDuplicateQuestions(window.questionsData);

console.log("Tổng số câu hỏi hiện tại:", window.questionsData.length);

















