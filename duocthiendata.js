const duocThienData = [
    // ==========================================
    // NHÓM 1: BỔ DƯỠNG & PHỤC HỒI (STT 1 - 20)
    // ==========================================
    {
        stt: 1,
        ten: "Gà Ác Hầm Đương Quy Hải Sâm",
        nhom: "Bổ dưỡng & Phục hồi",
        cong_dung: "Tư âm bổ huyết, ích khí trợ dương, dùng cho người suy nhược, thể trạng yếu, sau ốm.",
        thanh_phan: [
            { vi: "Gà ác", lieu: "1 con (400 - 500g)" },
            { vi: "Hải sâm (ngâm nở)", lieu: "100g" },
            { vi: "Đương quy", lieu: "12g" },
            { vi: "Thục địa", lieu: "15g" },
            { vi: "Táo đỏ", lieu: "5 quả" },
            { vi: "Gừng tươi", lieu: "3 lát" }
        ],
        so_che: "Gà làm sạch, bỏ tạng, xát muối rửa sạch. Hải sâm thái miếng vừa ăn. Dược liệu rửa sạch.",
        cach_lam: [
            "Cho gà, hải sâm, gừng và các vị thuốc vào nồi gốm cùng 1.5 lít nước.",
            "Đun sôi bùng, hớt sạch bọt màng để nước hầm trong.",
            "Hạ lửa nhỏ ninh liên tục trong 60 - 90 phút cho thịt mềm nhừ.",
            "Nêm ít muối tinh vừa ăn rồi tắt bếp."
        ],
        kieng_ky: "Người đang cảm sốt, ngoại tà thực nhiệt, tiêu chảy rêu lưỡi dày mỏng không nên dùng."
    },
    {
        stt: 2,
        ten: "Chim Cút Hầm Bách Hợp Đương Quy",
        nhom: "Bổ dưỡng & Phục hồi",
        cong_dung: "Bổ ngũ tạng, dưỡng huyết ích khí, thích hợp cho người yếu mệt, hay hoa mắt chóng mặt.",
        thanh_phan: [
            { vi: "Chim cút", lieu: "2 con" },
            { vi: "Bách hợp", lieu: "20g" },
            { vi: "Đương quy", lieu: "10g" },
            { vi: "Kỷ tử", lieu: "10g" },
            { vi: "Hành tím", lieu: "2 củ" }
        ],
        so_che: "Chim cút mổ bỏ nội tạng, rửa sạch với nước gừng rượu. Dược liệu rửa qua nước ấm.",
        cach_lam: [
            "Xếp chim cút và dược liệu vào thố chưng cất.",
            "Chưng cách thủy trong 60 phút đến khi thịt chim chín mềm nhừ.",
            "Nêm nhẹ gia vị vừa miệng, ăn khi còn nóng."
        ],
        kieng_ky: "Người có thể tạng đại tiện lỏng, rối loạn tiêu hóa do tỳ hư thấp trệ."
    },
    {
        stt: 3,
        ten: "Canh Thịt Nạc Hầm Hoàng Kỳ Đảng Sâm",
        nhom: "Bổ dưỡng & Phục hồi",
        cong_dung: "Bổ trung ích khí, thăng dương cố biểu, hỗ trợ phục hồi sức khỏe cho người mới ốm dậy.",
        thanh_phan: [
            { vi: "Thịt lợn nạc", lieu: "300g" },
            { vi: "Hoàng kỳ", lieu: "20g" },
            { vi: "Đảng sâm", lieu: "15g" },
            { vi: "Táo đỏ", lieu: "6 quả" }
        ],
        so_che: "Thịt lợn thái khối vừa ăn, chần qua nước sôi. Rửa sạch các vị thuốc bắc.",
        cach_lam: [
            "Cho thịt và dược liệu vào nồi, thêm 1.2 lít nước ninh trong 45 phút.",
            "Nêm muối vừa vặn, dùng ăn cả nước lẫn thịt."
        ],
        kieng_ky: "Không dùng cho người âm hư hỏa vượng, huyết áp cao cấp tính."
    },
    {
        stt: 4,
        ten: "Gà Hầm Tứ Vật Thang",
        nhom: "Bổ dưỡng & Phục hồi",
        cong_dung: "Bổ huyết hòa huyết, điều kinh dưỡng da, tốt cho phụ nữ xanh xao, suy nhược.",
        thanh_phan: [
            { vi: "Gà ta", lieu: "1/2 con (600g)" },
            { vi: "Đương quy", lieu: "12g" },
            { vi: "Thục địa", lieu: "12g" },
            { vi: "Bạch thược", lieu: "10g" },
            { vi: "Xuyên khung", lieu: "8g" }
        ],
        so_che: "Gà chặt miếng to, rửa sạch. Các vị thuốc rửa sạch bụi bẩn.",
        cach_lam: [
            "Đun sôi gà và bài thuốc Tứ Vật với 1.5 lít nước.",
            "Hạ lửa ninh nhỏ riu riu trong 60 phút cho ngấm dược tính."
        ],
        kieng_ky: "Người đang đờm trọc tích tụ, đầy bụng khó tiêu."
    },
    {
        stt: 5,
        ten: "Cháo Thịt Bò Kỷ Tử Cốc Tinh",
        nhom: "Bổ dưỡng & Phục hồi",
        cong_dung: "Bổ gan thận, ích tinh huyết, tăng cường thể lực và thị lực.",
        thanh_phan: [
            { vi: "Thịt bò nạc", lieu: "150g" },
            { vi: "Kỷ tử", lieu: "15g" },
            { vi: "Gạo tẻ", lieu: "100g" },
            { vi: "Hành hoa", lieu: "2 nhánh" }
        ],
        so_che: "Thịt bò băm nhỏ ướp gia vị. Gạo vo sạch.",
        cach_lam: [
            "Ninh gạo thành cháo nhừ, cho kỷ tử và thịt bò vào đun sôi lại 10 phút.",
            "Rắc hành hoa thái nhỏ, ăn nóng."
        ],
        kieng_ky: "Người thể tạng nhiệt, đang bị mụn nhọt ngứa ngáy."
    },
    {
        stt: 6,
        ten: "Canh Sườn Lợn Hầm Đỗ Trọng Bổ Cốt Toái",
        nhom: "Bổ dưỡng & Phục hồi",
        cong_dung: "Bổ gan thận, cường gân cốt, hỗ trợ phục hồi cho người suy nhược đau lưng mỏi gối.",
        thanh_phan: [
            { vi: "Sườn lợn", lieu: "400g" },
            { vi: "Đỗ trọng", lieu: "15g" },
            { vi: "Bổ cốt toái", lieu: "15g" },
            { vi: "Gừng tươi", lieu: "2 lát" }
        ],
        so_che: "Sườn chặt khúc chần qua nước sôi. Dược liệu bọc trong túi vải gạc.",
        cach_lam: [
            "Cho sườn và túi dược liệu vào nồi, hầm lửa nhỏ 60 phút.",
            "Vớt bỏ túi thuốc, nêm gia vị vừa ăn."
        ],
        kieng_ky: "Người bị âm hư hỏa vượng, môi khô họng khát."
    },
    {
        stt: 7,
        ten: "Vịt Hầm Trùng Thảo Táo Đỏ",
        nhom: "Bổ dưỡng & Phục hồi",
        cong_dung: "Bổ phế thận, ích tinh khí, dùng cho người gầy yếu, mệt mỏi lâu ngày.",
        thanh_phan: [
            { vi: "Thịt vịt", lieu: "500g" },
            { vi: "Đông trùng hạ thảo", lieu: "5g" },
            { vi: "Táo đỏ", lieu: "6 quả" },
            { vi: "Rượu ruột", lieu: "1 thìa" }
        ],
        so_che: "Vịt làm sạch, rửa với rượu gừng khử mùi hôi, chặt miếng.",
        cach_lam: [
            "Cho các nguyên liệu vào thố, chưng cách thủy trong 90 phút.",
            "Ăn cả thịt và nước chưng."
        ],
        kieng_ky: "Người bị cảm mạn tính, sốt cao do thực nhiệt."
    },
    {
        stt: 8,
        ten: "Cháo Hà Thủ Ô Ngũ Vị Tử",
        nhom: "Bổ dưỡng & Phục hồi",
        cong_dung: "Bổ gan thận, dưỡng huyết, mượt tóc, khỏe khoắn cơ thể.",
        thanh_phan: [
            { vi: "Hà thủ ô đỏ", lieu: "20g" },
            { vi: "Ngũ vị tử", lieu: "6g" },
            { vi: "Gạo tẻ", lieu: "100g" },
            { vi: "Đường đỏ", lieu: "vừa đủ" }
        ],
        so_che: "Hà thủ ô sắc lấy nước đặc, bỏ bã.",
        cach_lam: [
            "Lấy nước hà thủ ô nấu gạo và ngũ vị tử thành cháo nhừ.",
            "Thêm chút đường đỏ khi ăn."
        ],
        kieng_ky: "Người tiêu chảy, tỳ vị hư hàn, rêu lưỡi nhớt."
    },
    {
        stt: 9,
        ten: "Dê Hầm Dâm Dương Hoắc Đỗ Trọng",
        nhom: "Bổ dưỡng & Phục hồi",
        cong_dung: "Ôn thận trợ dương, ích tinh tủy, phù hợp người suy nhược gân cốt yếu.",
        thanh_phan: [
            { vi: "Thịt dê", lieu: "300g" },
            { vi: "Dâm dương hoắc", lieu: "10g" },
            { vi: "Đỗ trọng", lieu: "12g" },
            { vi: "Gừng, sả", lieu: "vừa đủ" }
        ],
        so_che: "Thịt dê thái quân cờ, chần nước sôi có gừng sả.",
        cach_lam: [
            "Hầm thịt dê cùng dược liệu bọc vải trong 60 phút.",
            "Nêm nếm gia vị đậm đà, dùng nóng."
        ],
        kieng_ky: "Người thể nhiệt, cao huyết áp, mắt đỏ sưng đau."
    },
    {
        stt: 10,
        ten: "Cháo Nhân Sâm Đàm Mộc",
        nhom: "Bổ dưỡng & Phục hồi",
        cong_dung: "Đại bổ nguyên khí, định thần ích trí, phục hồi thể lực nhanh chóng.",
        thanh_phan: [
            { vi: "Nhân sâm thái lát", lieu: "6g" },
            { vi: "Gạo tẻ", lieu: "100g" },
            { vi: "Đường phèn", lieu: "15g" }
        ],
        so_che: "Nhân sâm hấp mềm. Gạo vo sạch.",
        cach_lam: [
            "Nấu gạo thành cháo, cho sâm vào đun nhỏ lửa thêm 20 phút.",
            "Hòa đường phèn vào ăn lúc ấm."
        ],
        kieng_ky: "Người cao huyết áp, căng thẳng thần kinh kích thích, cảm sốt."
    },
    {
        stt: 11,
        ten: "Tim Lợn Hầm Đảng Sâm Hạt Sen",
        nhom: "Bổ dưỡng & Phục hồi",
        cong_dung: "Bổ tâm khí, dưỡng huyết, phục hồi sức khỏe cho người kiệt sức.",
        thanh_phan: [
            { vi: "Tim lợn", lieu: "1 quả" },
            { vi: "Đảng sâm", lieu: "20g" },
            { vi: "Hạt sen", lieu: "30g" }
        ],
        so_che: "Tim lợn bổ đôi rửa sạch máu nhầy. Hạt sen thông tâm.",
        cach_lam: [
            "Nhồi đảng sâm và hạt sen vào trong tim lợn, đem chưng cách thủy 60 phút.",
            "Thái miếng ăn kèm nước hầm."
        ],
        kieng_ky: "Người bị mỡ máu quá cao, đầy hơi trướng bụng."
    },
    {
        stt: 12,
        ten: "Canh Bồ Câu Hầm Hoàng Kỳ Hoài Sơn",
        nhom: "Bổ dưỡng & Phục hồi",
        cong_dung: "Bổ khí dưỡng âm, ích tỳ vị, dành cho người sau phẫu thuật, suy nhược.",
        thanh_phan: [
            { vi: "Chim bồ câu", lieu: "1 con" },
            { vi: "Hoàng kỳ", lieu: "15g" },
            { vi: "Hoài sơn", lieu: "20g" },
            { vi: "Táo đỏ", lieu: "5 quả" }
        ],
        so_che: "Bồ câu làm sạch vặt lông, không rửa nước lạnh quá nhiều.",
        cach_lam: [
            "Cho bồ câu và thuốc vào thố chưng cách thủy 90 phút.",
            "Nêm ít muối ăn nóng."
        ],
        kieng_ky: "Người bị viêm nhiễm cấp tính, sốt phát ban."
    },
    {
        stt: 13,
        ten: "Cháo Hải Sâm Kỷ Tử",
        nhom: "Bổ dưỡng & Phục hồi",
        cong_dung: "Bổ thận ích tinh, tư âm dưỡng huyết, sinh lực dồi dào.",
        thanh_phan: [
            { vi: "Hải sâm", lieu: "50g" },
            { vi: "Kỷ tử", lieu: "10g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Hải sâm thái hạt lựu xào sơ với gừng.",
        cach_lam: [
            "Nấu gạo thành cháo nhừ rồi cho hải sâm, kỷ tử vào đun thêm 15 phút."
        ],
        kieng_ky: "Người bị chướng bụng, đại tiện phân lỏng."
    },
    {
        stt: 14,
        ten: "Canh Gà Hầm Hà Thủ Ô Táo Đỏ",
        nhom: "Bổ dưỡng & Phục hồi",
        cong_dung: "Bổ gan thận, dưỡng huyết tân dịch, giúp cơ thể săn chắc, giảm mệt mỏi.",
        thanh_phan: [
            { vi: "Thịt gà", lieu: "400g" },
            { vi: "Hà thủ ô đỏ", lieu: "15g" },
            { vi: "Táo đỏ", lieu: "6 quả" }
        ],
        so_che: "Gà chặt miếng vừa. Hà thủ ô bọc vải gạc.",
        cach_lam: [
            "Ninh gà và các vị thuốc trong 60 phút, vớt bọc hà thủ ô ra trước khi dùng."
        ],
        kieng_ky: "Người tỳ vị hư hàn, tiêu chảy mãn tính."
    },
    {
        stt: 15,
        ten: "Cháo Thịt Dê Đương Quy Gừng Tươi",
        nhom: "Bổ dưỡng & Phục hồi",
        cong_dung: "Ôn trung bổ hư, ấm huyết khu hàn, tốt cho người gầy yếu chịu lạnh kém.",
        thanh_phan: [
            { vi: "Thịt dê", lieu: "150g" },
            { vi: "Đương quy", lieu: "10g" },
            { vi: "Gừng tươi", lieu: "15g" },
            { vi: "Gạo tẻ", lieu: "100g" }
        ],
        so_che: "Thịt dê thái mỏng. Gừng thái chỉ.",
        cach_lam: [
            "Sắc đương quy lấy nước nấu cháo với gạo. Cháo chín cho thịt dê và gừng vào đun sôi lại."
        ],
        kieng_ky: "Người bị nhiệt bàng quang, sốt do vi khuẩn."
    },
    {
        stt: 16,
        ten: "Canh Chân Giò Hầm Mộc Nhĩ Đương Quy",
        nhom: "Bổ dưỡng & Phục hồi",
        cong_dung: "Bổ huyết hoạt huyết, nhuận tràng, tăng cường thể trạng.",
        thanh_phan: [
            { vi: "Móng giò lợn", lieu: "1 cái" },
            { vi: "Mộc nhĩ đen", lieu: "15g" },
            { vi: "Đương quy", lieu: "12g" }
        ],
        so_che: "Móng giò chặt nhỏ chần nước sôi. Mộc nhĩ ngâm nở rửa sạch.",
        cach_lam: [
            "Ninh móng giò và đương quy 60 phút, cho mộc nhĩ vào đun thêm 15 phút."
        ],
        kieng_ky: "Người mỡ máu quá cao, tiêu hóa kém."
    },
    {
        stt: 17,
        ten: "Cháo Yến Mạch Kỷ Tử Táo Đỏ",
        nhom: "Bổ dưỡng & Phục hồi",
        cong_dung: "Bổ trung ích khí, dưỡng tâm ích trí, thanh nhẹ dễ hấp thu.",
        thanh_phan: [
            { vi: "Yến mạch", lieu: "60g" },
            { vi: "Kỷ tử", lieu: "10g" },
            { vi: "Táo đỏ", lieu: "5 quả" }
        ],
        so_che: "Táo đỏ bỏ hạt cắt nhỏ.",
        cach_lam: [
            "Đun sôi nước, cho yến mạch, kỷ tử, táo đỏ vào nấu nhỏ lửa 15 phút."
        ],
        kieng_ky: "Người dị ứng với yến mạch."
    },
    {
        stt: 18,
        ten: "Gà Ác Hầm Tam Thất",
        nhom: "Bổ dưỡng & Phục hồi",
        cong_dung: "Bổ khí huyết, tiêu ứ sinh tân, thích hợp phục hồi sức khỏe sau chấn thương, mất máu.",
        thanh_phan: [
            { vi: "Gà ác", lieu: "1 con" },
            { vi: "Bột tam thất", lieu: "5g" },
            { vi: "Kỷ tử", lieu: "10g" }
        ],
        so_che: "Gà làm sạch, rắc bột tam thất và kỷ tử vào bụng gà.",
        cach_lam: [
            "Chưng cách thủy thố gà trong 70 phút."
        ],
        kieng_ky: "Phụ nữ có thai tuyệt đối không dùng."
    },
    {
        stt: 19,
        ten: "Canh Ngầu Pín Hầm Ba Kích Đỗ Trọng",
        nhom: "Bổ dưỡng & Phục hồi",
        cong_dung: "Bổ thận dương, tráng gân cốt, tráng kiện thể lực.",
        thanh_phan: [
            { vi: "Pín bò", lieu: "1 bộ" },
            { vi: "Ba kích tím", lieu: "15g" },
            { vi: "Đỗ trọng", lieu: "15g" }
        ],
        so_che: "Pín bò làm sạch nhúng nước sôi cạo sạch, thái khúc.",
        cach_lam: [
            "Hầm pín bò cùng các vị thuốc trong 90 phút cho giòn mềm."
        ],
        kieng_ky: "Người âm hư hỏa vượng, bị táo bón kiên trì."
    },
    {
        stt: 20,
        ten: "Cháo Tôm Nõn Bổ Thận Kỷ Tử",
        nhom: "Bổ dưỡng & Phục hồi",
        cong_dung: "Bổ thận tráng dương, dưỡng huyết dồi dào sinh lực.",
        thanh_phan: [
            { vi: "Tôm nõn tươi", lieu: "100g" },
            { vi: "Kỷ tử", lieu: "12g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Tôm rửa sạch xào sơ thơm.",
        cach_lam: [
            "Nấu cháo gạo nhừ rồi cho tôm và kỷ tử vào đun tiếp 10 phút."
        ],
        kieng_ky: "Người dị ứng hải sản, dị ứng tôm."
    },

    // ==========================================
    // NHÓM 2: THANH NHIỆT & GIẢI ĐỘC (STT 21 - 40)
    // ==========================================
    {
        stt: 21,
        ten: "Chè Hạt Sen Long Nhãn Cốt Bách Hợp",
        nhom: "Thanh nhiệt & Giải độc",
        cong_dung: "Thanh nhiệt dưỡng âm, an thần định trí, giải phiền nhiệt mùa hè.",
        thanh_phan: [
            { vi: "Hạt sen tươi", lieu: "100g" },
            { vi: "Long nhãn", lieu: "30g" },
            { vi: "Bách hợp", lieu: "15g" },
            { vi: "Đường phèn", lieu: "40g" }
        ],
        so_che: "Hạt sen bỏ tâm. Bách hợp rửa sạch ngâm mềm.",
        cach_lam: [
            "Nấu hạt sen và bách hợp mềm nhừ.",
            "Cho long nhãn và đường phèn vào đun thêm 5 phút cho ngấm."
        ],
        kieng_ky: "Người bị tiểu đường, tiêu chảy do tỳ hàn."
    },
    {
        stt: 22,
        ten: "Canh Khổ Qua Nhồi Thịt Nạc Dược Liệu",
        nhom: "Thanh nhiệt & Giải độc",
        cong_dung: "Thanh tâm tả hỏa, giải độc mát gan, giảm mụn nhọt.",
        thanh_phan: [
            { vi: "Khổ qua (Mướp đắng)", lieu: "2 quả" },
            { vi: "Thịt lợn nạc băm", lieu: "150g" },
            { vi: "Mộc nhĩ", lieu: "10g" },
            { vi: "Hành hoa", lieu: "vừa đủ" }
        ],
        so_che: "Khổ qua bỏ ruột, rửa sạch. Trộn thịt băm với mộc nhĩ gia vị nhồi vào khổ qua.",
        cach_lam: [
            "Đun nước sôi, cho khổ qua vào nấu chín mềm trong 25 phút."
        ],
        kieng_ky: "Người tỳ vị hư hàn, hay bị lạnh bụng tiêu chảy."
    },
    {
        stt: 23,
        ten: "Cháo Đậu Xanh Râu Ngô",
        nhom: "Thanh nhiệt & Giải độc",
        cong_dung: "Thanh nhiệt lợi tiểu, giải độc mát gan, giảm sưng phù.",
        thanh_phan: [
            { vi: "Đậu xanh nguyên vỏ", lieu: "50g" },
            { vi: "Râu ngô tươi", lieu: "30g" },
            { vi: "Gạo tẻ", lieu: "50g" }
        ],
        so_che: "Râu ngô rửa sạch sắc lấy nước. Đậu xanh ngâm nước 2 giờ.",
        cach_lam: [
            "Lấy nước râu ngô nấu gạo và đậu xanh thành cháo nhừ."
        ],
        kieng_ky: "Người hạ huyết áp, tiểu đêm quá nhiều."
    },
    {
        stt: 24,
        ten: "Canh Cuống Sen Mộc Nhĩ Trắng Táo Đỏ",
        nhom: "Thanh nhiệt & Giải độc",
        cong_dung: "Thanh nhiệt phế vị, sinh tân nhuận tràng, mát huyết.",
        thanh_phan: [
            { vi: "Củ sen", lieu: "150g" },
            { vi: "Mộc nhĩ trắng (Tuyết nhĩ)", lieu: "15g" },
            { vi: "Táo đỏ", lieu: "5 quả" }
        ],
        so_che: "Củ sen thái lát. Tuyết nhĩ ngâm nở xé nhỏ.",
        cach_lam: [
            "Nấu củ sen và tuyết nhĩ với 1 lít nước trong 40 phút, nêm chút đường phèn."
        ],
        kieng_ky: "Người hay bị đầy bụng trướng hơi."
    },
    {
        stt: 25,
        ten: "Cháo Ý Dĩ Đậu Đỏ",
        nhom: "Thanh nhiệt & Giải độc",
        cong_dung: "Thanh nhiệt trừ thấp, kiện tỳ lợi thủy, giải mẩn ngứa.",
        thanh_phan: [
            { vi: "Ý dĩ", lieu: "30g" },
            { vi: "Đậu đỏ", lieu: "30g" },
            { vi: "Gạo tẻ", lieu: "50g" }
        ],
        so_che: "Ý dĩ và đậu đỏ ngâm nở 3 giờ.",
        cach_lam: [
            "Cho tất cả vào nồi ninh nhừ thành cháo."
        ],
        kieng_ky: "Phụ nữ mang thai nên thận trọng hạn chế dùng nhiều ý dĩ."
    },
    {
        stt: 26,
        ten: "Canh Nghêu Nấu Rau Cần Tiêu Nhiệt",
        nhom: "Thanh nhiệt & Giải độc",
        cong_dung: "Thanh nhiệt mát gan, hạ huyết áp, thông tiểu tiện.",
        thanh_phan: [
            { vi: "Thịt nghêu (ngao)", lieu: "150g" },
            { vi: "Rau cần ta", lieu: "100g" },
            { vi: "Cà chua", lieu: "1 quả" }
        ],
        so_che: "Rau cần rửa sạch cắt khúc. Cà chua bổ múi cau.",
        cach_lam: [
            "Nấu nước cà chua sôi rồi cho nghêu và rau cần vào đun chín tới."
        ],
        kieng_ky: "Người bị dư axit dạ dày, tiêu chảy cấp."
    },
    {
        stt: 27,
        ten: "Chè Củ Sắn Dây Hạt Sen",
        nhom: "Thanh nhiệt & Giải độc",
        cong_dung: "Giải độc thanh nhiệt, sinh tân chỉ khát, làm dịu nóng trong.",
        thanh_phan: [
            { vi: "Bột sắn dây", lieu: "30g" },
            { vi: "Hạt sen", lieu: "50g" },
            { vi: "Đường phèn", lieu: "20g" }
        ],
        so_che: "Hạt sen ninh mềm.",
        cach_lam: [
            "Hòa bột sắn dây nước lạnh rồi đổ vào nồi hạt sen khuấy đều đến khi trong suốt."
        ],
        kieng_ky: "Người đang bị lạnh bụng, tay chân lạnh."
    },
    {
        stt: 28,
        ten: "Canh Bầu Nấu Tôm Nõn Hành Hoa",
        nhom: "Thanh nhiệt & Giải độc",
        cong_dung: "Thanh nhiệt giải mộc, lợi tiểu, thanh lọc cơ thể.",
        thanh_phan: [
            { vi: "Quả bầu tươi", lieu: "300g" },
            { vi: "Tôm nõn", lieu: "50g" },
            { vi: "Hành hoa", lieu: "vừa đủ" }
        ],
        so_che: "Bầu gọt vỏ băm hoặc thái chỉ.",
        cach_lam: [
            "Nấu tôm giã nhỏ đun sôi rồi cho bầu vào nấu chín nhanh."
        ],
        kieng_ky: "Người tỳ vị hư hàn đại tiện lỏng."
    },
    {
        stt: 29,
        ten: "Cháo Cần Tây Mộc Nhĩ Đen",
        nhom: "Thanh nhiệt & Giải độc",
        cong_dung: "Thanh bình can hỏa, giải độc mát máu, giảm mỡ máu.",
        thanh_phan: [
            { vi: "Cần tây tươi", lieu: "100g" },
            { vi: "Mộc nhĩ đen", lieu: "10g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Cần tây rửa sạch thái nhỏ. Mộc nhĩ thái sợi.",
        cach_lam: [
            "Nấu cháo gạo chín nhừ cho mộc nhĩ và cần tây vào đun thêm 5 phút."
        ],
        kieng_ky: "Người huyết áp thấp."
    },
    {
        stt: 30,
        ten: "Canh Củ Cải Trắng Hầm Thịt Lợn Nạc",
        nhom: "Thanh nhiệt & Giải độc",
        cong_dung: "Thanh nhiệt hóa đàm, tiêu tích thông khí, làm mát phế vị.",
        thanh_phan: [
            { vi: "Củ cải trắng", lieu: "200g" },
            { vi: "Thịt lợn nạc", lieu: "150g" }
        ],
        so_che: "Củ cải gọt vỏ cắt miếng. Thịt thái miếng.",
        cach_lam: [
            "Ninh củ cải và thịt trong 35 phút cho ngọt nước."
        ],
        kieng_ky: "Không dùng chung với nhân sâm."
    },
    {
        stt: 31,
        ten: "Cháo Lá Bồ Công Anh Đậu Xanh",
        nhom: "Thanh nhiệt & Giải độc",
        cong_dung: "Thanh nhiệt giải độc, tiêu viêm tán kết, mát gan.",
        thanh_phan: [
            { vi: "Bồ công anh tươi", lieu: "30g" },
            { vi: "Đậu xanh", lieu: "30g" },
            { vi: "Gạo tẻ", lieu: "60g" }
        ],
        so_che: "Bồ công anh sắc lấy nước bọc.",
        cach_lam: [
            "Nấu đậu xanh và gạo bằng nước bồ công anh thành cháo."
        ],
        kieng_ky: "Người thể hư hàn, huyết áp thấp."
    },
    {
        stt: 32,
        ten: "Canh Rau Dền Nấu Thịt Cua Đồng",
        nhom: "Thanh nhiệt & Giải độc",
        cong_dung: "Thanh nhiệt giải độc, mát máu, bổ sung canxi tự nhiên.",
        thanh_phan: [
            { vi: "Rau dền đỏ/khoang", lieu: "150g" },
            { vi: "Cua đồng giã lọc", lieu: "200g" }
        ],
        so_che: "Lọc lấy nước cua. Rau dền rửa sạch cắt ngắn.",
        cach_lam: [
            "Đun nước cua đóng gạch rồi thả rau dền vào sôi lại là tắt bếp."
        ],
        kieng_ky: "Phụ nữ mang thai thời kỳ đầu, người đau bụng tiêu chảy."
    },
    {
        stt: 33,
        ten: "Chè Bách Hợp Tuyết Nhĩ Cốt Cam Thảo",
        nhom: "Thanh nhiệt & Giải độc",
        cong_dung: "Thanh nhiệt dưỡng phế, giảm khô họng, thanh lọc độc tố.",
        thanh_phan: [
            { vi: "Bách hợp", lieu: "20g" },
            { vi: "Tuyết nhĩ", lieu: "10g" },
            { vi: "Cam thảo lát", lieu: "3g" }
        ],
        so_che: "Tuyết nhĩ ngâm nở mềm.",
        cach_lam: [
            "Chưng các vị thuốc cùng đường phèn 45 phút."
        ],
        kieng_ky: "Người đang đờm nhiều đại tiện lỏng."
    },
    {
        stt: 34,
        ten: "Canh Mướp Đắng Nấu Cá Sóc",
        nhom: "Thanh nhiệt & Giải độc",
        cong_dung: "Bổ âm thanh nhiệt, mát gan sáng mắt.",
        thanh_phan: [
            { vi: "Mướp đắng", lieu: "150g" },
            { vi: "Thịt cá tươi", lieu: "150g" }
        ],
        so_che: "Mướp đắng thái lát.",
        cach_lam: [
            "Nấu cá chín rồi cho mướp đắng vào đun sôi chín tới."
        ],
        kieng_ky: "Người tỳ vị hư hàn."
    },
    {
        stt: 35,
        ten: "Cháo Hoa Cúc Kim Ngân Hoa",
        nhom: "Thanh nhiệt & Giải độc",
        cong_dung: "Thanh nhiệt giải độc, trừ phong nhiệt, giảm nhiệt miệng mụn nhọt.",
        thanh_phan: [
            { vi: "Hoa cúc khô", lieu: "10g" },
            { vi: "Kim ngân hoa", lieu: "10g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Sắc hoa cúc và kim ngân lấy nước.",
        cach_lam: [
            "Lấy nước dược liệu ninh gạo thành cháo."
        ],
        kieng_ky: "Người không có thực nhiệt, tỳ vị hư hàn."
    },
    {
        stt: 36,
        ten: "Canh Hến Nấu Mồng Tơi Rễ Cỏ Tranh",
        nhom: "Thanh nhiệt & Giải độc",
        cong_dung: "Thanh nhiệt lợi thấp, mát máu giải độc bàng quang.",
        thanh_phan: [
            { vi: "Thịt hến", lieu: "100g" },
            { vi: "Rau mồng tơi", lieu: "100g" },
            { vi: "Rễ cỏ tranh", lieu: "15g" }
        ],
        so_che: "Rễ cỏ tranh sắc lấy nước đặc.",
        cach_lam: [
            "Dùng nước rễ cỏ tranh nấu hến và mồng tơi thành canh."
        ],
        kieng_ky: "Người tỳ vị hư lạnh."
    },
    {
        stt: 37,
        ten: "Cháo Đậu Đỏ Củ Sắn Dây",
        nhom: "Thanh nhiệt & Giải độc",
        cong_dung: "Thanh nhiệt giải độc, thoái hỏa trừ phiền.",
        thanh_phan: [
            { vi: "Đậu đỏ", lieu: "40g" },
            { vi: "Củ sắn dây tươi thái hạt lựu", lieu: "50g" },
            { vi: "Gạo tẻ", lieu: "50g" }
        ],
        so_che: "Ninh đậu đỏ trước cho mềm.",
        cach_lam: [
            "Cho gạo và sắn dây vào ninh chung thành cháo."
        ],
        kieng_ky: "Người tay chân lạnh sợ lạnh."
    },
    {
        stt: 38,
        ten: "Canh Bí Đao Nấu Thịt Vịt",
        nhom: "Thanh nhiệt & Giải độc",
        cong_dung: "Thanh nhiệt tư âm, lợi thủy tiêu thũng mát phế.",
        thanh_phan: [
            { vi: "Bí đao gọt vỏ", lieu: "250g" },
            { vi: "Thịt vịt", lieu: "200g" }
        ],
        so_che: "Bí đao thái miếng. Thịt vịt chặt nhỏ chần sơ.",
        cach_lam: [
            "Ninh thịt vịt 40 phút rồi cho bí đao vào đun thêm 15 phút."
        ],
        kieng_ky: "Người dạ dày lạnh dễ tiêu chảy."
    },
    {
        stt: 39,
        ten: "Chè Cỏ Ngọt Hạt Bát Bửu",
        nhom: "Thanh nhiệt & Giải độc",
        cong_dung: "Thanh nhiệt sinh tân, hạ hỏa mát ruột.",
        thanh_phan: [
            { vi: "Lá cỏ ngọt", lieu: "5g" },
            { vi: "Hạt sen, ý dĩ, đậu xanh", lieu: "mỗi thứ 20g" }
        ],
        so_che: "Sắc cỏ ngọt lấy nước ngọt tự nhiên.",
        cach_lam: [
            "Ninh nhừ các loại hạt bằng nước cỏ ngọt."
        ],
        kieng_ky: "Người bị đi ngoài phân lỏng."
    },
    {
        stt: 40,
        ten: "Canh Rau Cải Cúc Tôm Nõn",
        nhom: "Thanh nhiệt & Giải độc",
        cong_dung: "Thanh nhiệt giải hỏa, bình gan hạ áp, mát phế.",
        thanh_phan: [
            { vi: "Rau cải cúc", lieu: "150g" },
            { vi: "Tôm nõn", lieu: "40g" }
        ],
        so_che: "Tôm giã sơ. Cải cúc rửa sạch.",
        cach_lam: [
            "Đun nước tôm sôi rồi thả cải cúc vào sôi bùng tắt bếp ngay."
        ],
        kieng_ky: "Người hư hàn tiêu chảy."
    },

    // ==========================================
    // NHÓM 3: KIỆN TỲ & TIÊU HÓA (STT 41 - 60)
    // ==========================================
    {
        stt: 41,
        ten: "Cháo Sơn Dược (Hoài Sơn) Hạt Sen",
        nhom: "Kiện tỳ & Tiêu hóa",
        cong_dung: "Kiện tỳ ích khí, chỉ tả hòa vị, giúp tiêu hóa ngon miệng.",
        thanh_phan: [
            { vi: "Hoài sơn (Sơn dược)", lieu: "30g" },
            { vi: "Hạt sen", lieu: "20g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Hoài sơn thái lát nhỏ. Hạt sen ngâm nở.",
        cach_lam: [
            "Nấu tất cả thành cháo nhừ mịn, ăn vào buổi sáng."
        ],
        kieng_ky: "Người bị táo bón kiên trì, tích trệ thực ứ."
    },
    {
        stt: 42,
        ten: "Cháo Ý Dĩ Tỳ Vi",
        nhom: "Kiện tỳ & Tiêu hóa",
        cong_dung: "Kiện tỳ trừ thấp, thẩm thấp tiêu trướng, dịu đường ruột.",
        thanh_phan: [
            { vi: "Ý dĩ nhân", lieu: "40g" },
            { vi: "Gạo nếp", lieu: "50g" }
        ],
        so_che: "Ý dĩ sao nhẹ.",
        cach_lam: [
            "Ninh ý dĩ và gạo nếp thành cháo đặc mịn."
        ],
        kieng_ky: "Phụ nữ có thai hạn chế ăn nhiều."
    },
    {
        stt: 43,
        ten: "Canh Dạ Dày Lợn Hầm Hạt Tiêu Bạch Truật",
        nhom: "Kiện tỳ & Tiêu hóa",
        cong_dung: "Ôn trung tỳ vị, trợ tiêu hóa, trị lạnh bụng đau dạ dày.",
        thanh_phan: [
            { vi: "Dạ dày lợn", lieu: "1 cái" },
            { vi: "Hạt tiêu trắng", lieu: "10g" },
            { vi: "Bạch truật", lieu: "12g" }
        ],
        so_che: "Dạ dày lợn xát muối giấm làm sạch nhầy mùi hôi.",
        cach_lam: [
            "Nhồi hạt tiêu và bạch truật vào dạ dày, ninh 90 phút.",
            "Thái lát dạ dày ăn nóng."
        ],
        kieng_ky: "Người âm hư nội nhiệt, loét dạ dày chảy máu."
    },
    {
        stt: 44,
        ten: "Cháo Sa Nhân Bát Bửu",
        nhom: "Kiện tỳ & Tiêu hóa",
        cong_dung: "Hành khí hòa vị, kiện tỳ chỉ tả, trị đầy hơi trướng bụng.",
        thanh_phan: [
            { vi: "Sa nhân nghiền nhỏ", lieu: "5g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Gạo vo sạch nấu cháo.",
        cach_lam: [
            "Cháo chín nhừ rắc bột sa nhân vào đun thêm 3 phút."
        ],
        kieng_ky: "Người âm hư nội nhiệt."
    },
    {
        stt: 45,
        ten: "Canh Khoai Môn Hầm Thịt Nạc Trần Bì",
        nhom: "Kiện tỳ & Tiêu hóa",
        cong_dung: "Kiện tỳ lý khí, hóa đàm tiêu trướng.",
        thanh_phan: [
            { vi: "Khoai môn", lieu: "200g" },
            { vi: "Thịt lợn nạc", lieu: "100g" },
            { vi: "Trần bì (vỏ quýt khô)", lieu: "5g" }
        ],
        so_che: "Khoai môn gọt vỏ cắt khối. Trần bì ngâm mềm thái chỉ.",
        cach_lam: [
            "Nấu canh khoai môn thịt nạc và trần bì chín nhừ."
        ],
        kieng_ky: "Người bị sốt phát ban."
    },
    {
        stt: 46,
        ten: "Cháo Bí Đỏ Hoài Sơn",
        nhom: "Kiện tỳ & Tiêu hóa",
        cong_dung: "Bổ trung ích khí, kiện tỳ hòa vị, nhuận tràng nhẹ.",
        thanh_phan: [
            { vi: "Bí đỏ", lieu: "100g" },
            { vi: "Hoài sơn tươi", lieu: "50g" },
            { vi: "Gạo tẻ", lieu: "60g" }
        ],
        so_che: "Bí đỏ và hoài sơn thái nhỏ.",
        cach_lam: [
            "Nấu chung gạo, bí đỏ, hoài sơn nhừ nhuyễn."
        ],
        kieng_ky: "Người bị dị ứng bí đỏ."
    },
    {
        stt: 47,
        ten: "Canh Cá Lóc Nấu Măng Chua Trần Bì",
        nhom: "Kiện tỳ & Tiêu hóa",
        cong_dung: "Kiện tỳ khai vị, tiêu thực hóa trệ, kích thích thèm ăn.",
        thanh_phan: [
            { vi: "Cá lóc (cá quả)", lieu: "300g" },
            { vi: "Trần bì", lieu: "5g" },
            { vi: "Gừng", lieu: "3 lát" }
        ],
        so_che: "Cá lóc rán sơ cho thơm.",
        cach_lam: [
            "Nấu canh cá với trần bì và gừng đun kỹ."
        ],
        kieng_ky: "Người bị viêm xơ gan cấp."
    },
    {
        stt: 48,
        ten: "Cháo Cẩm Kê Mộc Hương",
        nhom: "Kiện tỳ & Tiêu hóa",
        cong_dung: "Hành khí chỉ thống, kiện tỳ trị đau bụng tiêu chảy.",
        thanh_phan: [
            { vi: "Mộc hương", lieu: "6g" },
            { vi: "Thịt gà", lieu: "100g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Sắc mộc hương lấy nước lọc.",
        cach_lam: [
            "Lấy nước mộc hương nấu cháo gà."
        ],
        kieng_ky: "Người âm hư kiệt tân dịch."
    },
    {
        stt: 49,
        ten: "Canh Sườn Lợn Nấu Củ Táo Bối",
        nhom: "Kiện tỳ & Tiêu hóa",
        cong_dung: "Bổ tỳ vị, dưỡng dạ dày, kích thích hấp thu.",
        thanh_phan: [
            { vi: "Sườn lợn", lieu: "300g" },
            { vi: "Táo bối / Hoài sơn", lieu: "30g" }
        ],
        so_che: "Sườn chặt nhỏ chần sơ.",
        cach_lam: [
            "Hầm sườn và hoài sơn trong 50 phút."
        ],
        kieng_ky: "Người đầy trướng bụng do thức ăn hư hỏng."
    },
    {
        stt: 50,
        ten: "Cháo Đậu Bạch Mây Hoàng Kỳ",
        nhom: "Kiện tỳ & Tiêu hóa",
        cong_dung: "Bổ khí kiện tỳ, thăng dương chống sa dãn tạng phủ.",
        thanh_phan: [
            { vi: "Hoàng kỳ", lieu: "20g" },
            { vi: "Đậu trắng", lieu: "30g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Sắc hoàng kỳ lấy nước nấu.",
        cach_lam: [
            "Nấu gạo và đậu trắng bằng nước hoàng kỳ."
        ],
        kieng_ky: "Người bị cao huyết áp kịch phát."
    },
    {
        stt: 51,
        ten: "Canh Thịt Bò Ninh Phụ Tử Mộc Hương",
        nhom: "Kiện tỳ & Tiêu hóa",
        cong_dung: "Ôn tỳ vị, trừ hàn thấp tiêu hóa trệ.",
        thanh_phan: [
            { vi: "Thịt bò", lieu: "200g" },
            { vi: "Mộc hương", lieu: "5g" },
            { vi: "Gừng", lieu: "10g" }
        ],
        so_che: "Thịt bò thái miếng uống rượu sơ chế.",
        cach_lam: [
            "Hầm chín mềm thịt bò với vị thuốc."
        ],
        kieng_ky: "Người nhiệt thịnh khô họng."
    },
    {
        stt: 52,
        ten: "Cháo Ngô Nõn Hạt Bún Hoài Sơn",
        nhom: "Kiện tỳ & Tiêu hóa",
        cong_dung: "Bổ tỳ hòa vị, lợi khí nhuận ruột.",
        thanh_phan: [
            { vi: "Ngô ngọt nõn", lieu: "50g" },
            { vi: "Hoài sơn", lieu: "20g" },
            { vi: "Gạo", lieu: "60g" }
        ],
        so_che: "Ngô và hoài sơn giã dập.",
        cach_lam: [
            "Ninh cháo đặc ăn vào các bữa phụ."
        ],
        kieng_ky: "Người bị đầy bụng do thực trệ."
    },
    {
        stt: 53,
        ten: "Canh Tim Lợn Hầm Bạch Truật Đương Quy",
        nhom: "Kiện tỳ & Tiêu hóa",
        cong_dung: "Bổ tâm tỳ, tăng cường dưỡng chất.",
        thanh_phan: [
            { vi: "Tim lợn", lieu: "1/2 quả" },
            { vi: "Bạch truật", lieu: "12g" },
            { vi: "Đương quy", lieu: "10g" }
        ],
        so_che: "Tim thái mỏng ướp gia vị.",
        cach_lam: [
            "Hầm tim lợn cùng dược liệu 45 phút."
        ],
        kieng_ky: "Người bị chứng nóng trong thực hỏa."
    },
    {
        stt: 54,
        ten: "Cháo Thịt Nạc Mộc Hương Mạch Nha",
        nhom: "Kiện tỳ & Tiêu hóa",
        cong_dung: "Vận tỳ tiêu tinh bột, giảm trướng đầy ứ trệ.",
        thanh_phan: [
            { vi: "Mạch nha sao", lieu: "15g" },
            { vi: "Thịt nạc", lieu: "80g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Sắc mạch nha lấy nước.",
        cach_lam: [
            "Dùng nước mạch nha nấu cháo thịt nạc."
        ],
        kieng_ky: "Phụ nữ đang cho con bú (mạch nha gây mất sữa)."
    },
    {
        stt: 55,
        ten: "Canh Lươn Ninh Đương Quy Hoài Sơn",
        nhom: "Kiện tỳ & Tiêu hóa",
        cong_dung: "Bổ khí huyết, kiện tỳ vị, dưỡng sức.",
        thanh_phan: [
            { vi: "Thịt lươn", lieu: "200g" },
            { vi: "Hoài sơn", lieu: "20g" },
            { vi: "Đương quy", lieu: "10g" }
        ],
        so_che: "Lươn làm sạch nhớt bằng giấm, thái khúc.",
        cach_lam: [
            "Ninh lươn cùng dược liệu 45 phút ngấm vị."
        ],
        kieng_ky: "Người dị ứng đạm lươn."
    },
    {
        stt: 56,
        ten: "Cháo Củ Cải Trần Bì",
        nhom: "Kiện tỳ & Tiêu hóa",
        cong_dung: "Hành khí tiêu thực, hóa đàm kiện tỳ.",
        thanh_phan: [
            { vi: "Củ cải trắng", lieu: "100g" },
            { vi: "Trần bì", lieu: "6g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Củ cải thái sợi nhỏ.",
        cach_lam: [
            "Nấu cháo gạo nhừ rồi cho củ cải trần bì vào đun 15 phút."
        ],
        kieng_ky: "Người thể khí hư trệ quá mức."
    },
    {
        stt: 57,
        ten: "Canh Thịt Lợn Hầm Phù Trúc Hoài Sơn",
        nhom: "Kiện tỳ & Tiêu hóa",
        cong_dung: "Kiện tỳ bổ hư, sinh tân dịch.",
        thanh_phan: [
            { vi: "Thịt lợn nạc", lieu: "150g" },
            { vi: "Phù trúc (Váng đậu)", lieu: "30g" },
            { vi: "Hoài sơn", lieu: "20g" }
        ],
        so_che: "Phù trúc ngâm mềm cắt ngắn.",
        cach_lam: [
            "Nấu canh thịt hoài sơn rồi cho phù trúc vào sau."
        ],
        kieng_ky: "Người bị đầy bụng nôn mửa."
    },
    {
        stt: 58,
        ten: "Cháo Hạt Kê Cam Thảo",
        nhom: "Kiện tỳ & Tiêu hóa",
        cong_dung: "Hòa vị kiện tỳ, thanh nhẹ dưỡng dạ dày.",
        thanh_phan: [
            { vi: "Hạt kê", lieu: "60g" },
            { vi: "Cam thảo", lieu: "5g" }
        ],
        so_che: "Cam thảo sắc lấy nước.",
        cach_lam: [
            "Lấy nước cam thảo ninh hạt kê thành cháo mịn."
        ],
        kieng_ky: "Người bị sỏi thận."
    },
    {
        stt: 59,
        ten: "Canh Gà Nấu Nấm Hương Trần Bì",
        nhom: "Kiện tỳ & Tiêu hóa",
        cong_dung: "Bổ tỳ khai vị, ích khí hòa vinh.",
        thanh_phan: [
            { vi: "Thịt gà", lieu: "250g" },
            { vi: "Nấm hương ngâm nở", lieu: "20g" },
            { vi: "Trần bì", lieu: "5g" }
        ],
        so_che: "Thịt gà chặt miếng vừa ăn.",
        cach_lam: [
            "Hầm gà với nấm hương trần bì trong 45 phút."
        ],
        kieng_ky: "Người sốt cảm mạn tính."
    },
    {
        stt: 60,
        ten: "Cháo Táo Đỏ Sơn Tra Kiện Tỳ",
        nhom: "Kiện tỳ & Tiêu hóa",
        cong_dung: "Tiêu tích hóa ứ, kiện tỳ khai vị, giảm mỡ máu.",
        thanh_phan: [
            { vi: "Sơn tra", lieu: "15g" },
            { vi: "Táo đỏ", lieu: "6 quả" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Sơn tra sắc lấy nước lọc bã.",
        cach_lam: [
            "Dùng nước sơn tra ninh táo đỏ và gạo thành cháo."
        ],
        kieng_ky: "Người viêm loét dạ dày dư axit nghiêm trọng."
    },

    // ==========================================
    // NHÓM 4: AN THẦN & DƯỠNG TÂM (STT 61 - 80)
    // ==========================================
    {
        stt: 61,
        ten: "Canh Tim Lợn Hầm Hạt Sen Táo Đỏ",
        nhom: "An thần & Dưỡng tâm",
        cong_dung: "Dưỡng tâm an thần, ích khí bổ huyết, trị mất ngủ trằn trọc.",
        thanh_phan: [
            { vi: "Tim lợn", lieu: "1/2 quả (200g)" },
            { vi: "Hạt sen", lieu: "30g" },
            { vi: "Táo đỏ", lieu: "6 quả" },
            { vi: "Bách hợp", lieu: "10g" }
        ],
        so_che: "Tim lợn thái lát vừa ăn. Hạt sen thông tâm.",
        cach_lam: [
            "Cho các nguyên liệu vào thố hầm chưng cách thủy 60 phút.",
            "Ăn cả nước lẫn cái trước khi đi ngủ 2 giờ."
        ],
        kieng_ky: "Người bị đầy bụng do cảm trệ."
    },
    {
        stt: 62,
        ten: "Cháo Bách Hợp Dưỡng Tâm",
        nhom: "An thần & Dưỡng tâm",
        cong_dung: "Nhuận phế dưỡng tâm, an thần định trí, dịu căng thần kinh.",
        thanh_phan: [
            { vi: "Bách hợp khô", lieu: "20g" },
            { vi: "Hạt sen", lieu: "20g" },
            { vi: "Gạo tẻ", lieu: "80g" },
            { vi: "Đường phèn", lieu: "15g" }
        ],
        so_che: "Bách hợp ngâm nước ấm 1 giờ.",
        cach_lam: [
            "Ninh bách hợp, hạt sen và gạo thành cháo nhừ rồi thêm đường phèn."
        ],
        kieng_ky: "Người bị tiêu chảy do hư hàn."
    },
    {
        stt: 63,
        ten: "Chè Hạt Sen Long Nhãn Viễn Chí",
        nhom: "An thần & Dưỡng tâm",
        cong_dung: "Bổ tâm tỳ, ích trí an thần, cải thiện trí nhớ kém mất ngủ.",
        thanh_phan: [
            { vi: "Hạt sen", lieu: "50g" },
            { vi: "Long nhãn", lieu: "25g" },
            { vi: "Viễn chí", lieu: "6g" }
        ],
        so_che: "Viễn chí bỏ ruột gỗ sắc lấy nước.",
        cach_lam: [
            "Dùng nước viễn chí nấu hạt sen và long nhãn thành chè."
        ],
        kieng_ky: "Người có đờm hỏa thịnh trong người."
    },
    {
        stt: 64,
        ten: "Canh Lòng Đỏ Trứng Bách Hợp",
        nhom: "An thần & Dưỡng tâm",
        cong_dung: "Tư âm giáng hỏa, dưỡng tâm an thần, trị tâm phiền mất ngủ.",
        thanh_phan: [
            { vi: "Bách hợp tươi", lieu: "30g" },
            { vi: "Lòng đỏ trứng gà", lieu: "1 quả" }
        ],
        so_che: "Bách hợp tách cánh rửa sạch.",
        cach_lam: [
            "Luộc bách hợp chín nhừ rồi đánh lòng đỏ trứng vào khuấy đều sôi lại là được."
        ],
        kieng_ky: "Người dị ứng trứng gà, mỡ máu cao."
    },
    {
        stt: 65,
        ten: "Cháo Táo Nhân Phù Súp",
        nhom: "An thần & Dưỡng tâm",
        cong_dung: "Dưỡng tâm can, liễm hãn an thần, trị mất ngủ hay hồi hộp.",
        thanh_phan: [
            { vi: "Toan táo nhân sao đen", lieu: "15g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Toan táo nhân đập dập sắc lấy nước.",
        cach_lam: [
            "Dùng nước táo nhân ninh gạo thành cháo nhừ ăn buổi tối."
        ],
        kieng_ky: "Người bị thực nhiệt táo bón."
    },
    {
        stt: 66,
        ten: "Canh Thịt Nạc Hầm Dạ Giao Đằng",
        nhom: "An thần & Dưỡng tâm",
        cong_dung: "Dưỡng huyết an thần, thông kinh lạc, trị suy nhược thần kinh.",
        thanh_phan: [
            { vi: "Dạ giao đằng (dây Hà thủ ô)", lieu: "30g" },
            { vi: "Thịt lợn nạc", lieu: "150g" },
            { vi: "Táo đỏ", lieu: "5 quả" }
        ],
        so_che: "Dạ giao đằng sắc lấy nước bọc.",
        cach_lam: [
            "Lấy nước dược liệu ninh thịt nạc và táo đỏ trong 45 phút."
        ],
        kieng_ky: "Người tiêu chảy do tỳ hư."
    },
    {
        stt: 67,
        ten: "Cháo Long Nhãn Táo Đỏ",
        nhom: "An thần & Dưỡng tâm",
        cong_dung: "Bổ tâm tỳ, dưỡng huyết an thần, cho giấc ngủ sâu.",
        thanh_phan: [
            { vi: "Long nhãn", lieu: "20g" },
            { vi: "Táo đỏ", lieu: "8 quả" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Táo đỏ bỏ hạt.",
        cach_lam: [
            "Nấu gạo, long nhãn, táo đỏ thành cháo ăn ấm."
        ],
        kieng_ky: "Người bị béo phì, nhiều đờm trệ."
    },
    {
        stt: 68,
        ten: "Canh Óc Lợn Hầm Thiên Ma",
        nhom: "An thần & Dưỡng tâm",
        cong_dung: "Bình gan an thần, bổ não giảm đau đầu mất ngủ.",
        thanh_phan: [
            { vi: "Óc lợn", lieu: "1 bộ" },
            { vi: "Thiên ma", lieu: "10g" },
            { vi: "Kỷ tử", lieu: "10g" }
        ],
        so_che: "Óc lợn bóc sạch gân máu bằng tăm khều.",
        cach_lam: [
            "Cho óc lợn và vị thuốc vào bát chưng cách thủy 40 phút."
        ],
        kieng_ky: "Người mỡ máu quá cao."
    },
    {
        stt: 69,
        ten: "Cháo Hạt Kê Phù Táo",
        nhom: "An thần & Dưỡng tâm",
        cong_dung: "Hòa vị an thần, dưỡng tâm nhẹ nhàng.",
        thanh_phan: [
            { vi: "Hạt kê", lieu: "50g" },
            { vi: "Táo đỏ", lieu: "6 quả" }
        ],
        so_che: "Táo đỏ xắt nhỏ.",
        cach_lam: [
            "Ninh hạt kê và táo đỏ thành cháo sánh ăn tối."
        ],
        kieng_ky: "Người bị trướng bụng đầy hơi."
    },
    {
        stt: 70,
        ten: "Canh Hạt Sen Mộc Nhĩ Trắng Dưỡng Thần",
        nhom: "An thần & Dưỡng tâm",
        cong_dung: "Tư âm nhuận phế, dưỡng tâm an thần.",
        thanh_phan: [
            { vi: "Hạt sen", lieu: "30g" },
            { vi: "Mộc nhĩ trắng", lieu: "10g" },
            { vi: "Đường phèn", lieu: "20g" }
        ],
        so_che: "Mộc nhĩ trắng ngâm nở xé nhỏ.",
        cach_lam: [
            "Ninh mềm hạt sen và mộc nhĩ trắng cùng đường phèn."
        ],
        kieng_ky: "Người cảm sốt phong hàn."
    },
    {
        stt: 71,
        ten: "Cháo Phù Súp Mạch Môn",
        nhom: "An thần & Dưỡng tâm",
        cong_dung: "Dưỡng âm thanh nhiệt, an thần trấn tĩnh.",
        thanh_phan: [
            { vi: "Mạch môn", lieu: "15g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Mạch môn rút lõi sắc lấy nước.",
        cach_lam: [
            "Dùng nước mạch môn nấu cháo gạo nhừ."
        ],
        kieng_ky: "Người đại tiện lỏng hư hàn."
    },
    {
        stt: 72,
        ten: "Canh Tim Lợn Hầm Phục Linh Viễn Chí",
        nhom: "An thần & Dưỡng tâm",
        cong_dung: "Bổ tâm an thần, kiện tỳ trừ đờm định trí.",
        thanh_phan: [
            { vi: "Tim lợn", lieu: "200g" },
            { vi: "Phục linh", lieu: "15g" },
            { vi: "Viễn chí", lieu: "6g" }
        ],
        so_che: "Tim lợn thái mỏng vừa ăn.",
        cach_lam: [
            "Hầm tim lợn cùng dược liệu chưng cách thủy 50 phút."
        ],
        kieng_ky: "Người thực hỏa thịnh."
    },
    {
        stt: 73,
        ten: "Chè Dưỡng Tâm Bách Hợp Long Nhãn",
        nhom: "An thần & Dưỡng tâm",
        cong_dung: "Dưỡng âm hòa huyết, an tâm định thần.",
        thanh_phan: [
            { vi: "Bách hợp", lieu: "20g" },
            { vi: "Long nhãn", lieu: "20g" },
            { vi: "Hạt sen", lieu: "30g" }
        ],
        so_che: "Bách hợp ngâm mềm.",
        cach_lam: [
            "Nấu chè chín nhừ ăn ấm buổi tối."
        ],
        kieng_ky: "Người đờm thấp tỳ vị lạnh."
    },
    {
        stt: 74,
        ten: "Cháo Hạt Muồng Táo Nhân",
        nhom: "An thần & Dưỡng tâm",
        cong_dung: "Thanh gan sáng mắt, an thần hạ áp.",
        thanh_phan: [
            { vi: "Hạt muồng (Quyết minh tử) sao", lieu: "12g" },
            { vi: "Toan táo nhân", lieu: "10g" },
            { vi: "Gạo tẻ", lieu: "70g" }
        ],
        so_che: "Sắc hạt muồng và táo nhân lấy nước.",
        cach_lam: [
            "Dùng nước thuốc ninh cháo gạo."
        ],
        kieng_ky: "Người tiêu chảy huyết áp thấp."
    },
    {
        stt: 75,
        ten: "Canh Thịt Lợn Nạc Hầm Ngũ Vi Tử",
        nhom: "An thần & Dưỡng tâm",
        cong_dung: "Tư thận dưỡng tâm, thu hãn an thần.",
        thanh_phan: [
            { vi: "Thịt lợn nạc", lieu: "150g" },
            { vi: "Ngũ vị tử", lieu: "8g" }
        ],
        so_che: "Thịt lợn thái khối.",
        cach_lam: [
            "Hầm thịt nạc và ngũ vị tử trong 45 phút."
        ],
        kieng_ky: "Người có ngoại tà chưa giải."
    },
    {
        stt: 76,
        ten: "Cháo Hạt Sen Bạch Phục Linh",
        nhom: "An thần & Dưỡng tâm",
        cong_dung: "Kiện tỳ dưỡng tâm, ninh tâm an thần.",
        thanh_phan: [
            { vi: "Bạch phục linh tán bột", lieu: "15g" },
            { vi: "Hạt sen", lieu: "30g" },
            { vi: "Gạo tẻ", lieu: "70g" }
        ],
        so_che: "Hạt sen ngâm nở.",
        cach_lam: [
            "Nấu cháo hạt sen gạo chín rồi hòa bột phục linh đun sôi lại."
        ],
        kieng_ky: "Người tiểu nhiều không cầm."
    },
    {
        stt: 77,
        ten: "Canh Bồ Câu Hầm Táo Nhân Hoài Sơn",
        nhom: "An thần & Dưỡng tâm",
        cong_dung: "Bổ ngũ tạng, an thần định trí.",
        thanh_phan: [
            { vi: "Bồ câu", lieu: "1 con" },
            { vi: "Táo nhân sao", lieu: "12g" },
            { vi: "Hoài sơn", lieu: "20g" }
        ],
        so_che: "Bồ câu mổ sạch.",
        cach_lam: [
            "Chưng cách thủy bồ câu và vị thuốc 70 phút."
        ],
        kieng_ky: "Người đang bị viêm sốt cấp."
    },
    {
        stt: 78,
        ten: "Cháo Yến Mạch Hạt Sen Long Nhãn",
        nhom: "An thần & Dưỡng tâm",
        cong_dung: "Dưỡng tâm ích khí, thanh nhẹ dễ ngủ.",
        thanh_phan: [
            { vi: "Yến mạch", lieu: "50g" },
            { vi: "Hạt sen", lieu: "20g" },
            { vi: "Long nhãn", lieu: "15g" }
        ],
        so_che: "Hạt sen nấu chín mềm trước.",
        cach_lam: [
            "Cho yến mạch và long nhãn vào nồi hạt sen nấu tiếp 10 phút."
        ],
        kieng_ky: "Người dị ứng yến mạch."
    },
    {
        stt: 79,
        ten: "Canh Sườn Lợn Hầm Bách Hợp Mạch Môn",
        nhom: "An thần & Dưỡng tâm",
        cong_dung: "Dưỡng âm an thần, tư phế dịu tâm.",
        thanh_phan: [
            { vi: "Sườn lợn", lieu: "300g" },
            { vi: "Bách hợp", lieu: "15g" },
            { vi: "Mạch môn", lieu: "12g" }
        ],
        so_che: "Sườn chần xát sạch.",
        cach_lam: [
            "Ninh sườn và các vị thuốc 50 phút."
        ],
        kieng_ky: "Người tỳ vị hư hàn tiêu chảy."
    },
    {
        stt: 80,
        ten: "Chè Hạt Dẻ Long Nhãn Táo Đỏ",
        nhom: "An thần & Dưỡng tâm",
        cong_dung: "Bổ thận dưỡng tâm, ích khí an thần.",
        thanh_phan: [
            { vi: "Hạt dẻ bóc vỏ", lieu: "60g" },
            { vi: "Long nhãn", lieu: "20g" },
            { vi: "Táo đỏ", lieu: "6 quả" }
        ],
        so_che: "Hạt dẻ luộc chín sương.",
        cach_lam: [
            "Nấu hạt dẻ, long nhãn, táo đỏ thành chè ngon."
        ],
        kieng_ky: "Người bị khó tiêu đầy hơi."
    },

    // ==========================================
    // NHÓM 5: KHU PHONG & TRỪ THẤP (STT 81 - 100)
    // ==========================================
    {
        stt: 81,
        ten: "Lẩu Dê Hầm Thuốc Bắc Đỗ Trọng Ngưu Tất",
        nhom: "Khu phong & Trừ thấp",
        cong_dung: "Khu phong trừ thấp, bổ gan thận, giảm đau nhức xương khớp lưng gối.",
        thanh_phan: [
            { vi: "Thịt dê", lieu: "500g" },
            { vi: "Đỗ trọng", lieu: "15g" },
            { vi: "Ngưu tất", lieu: "12g" },
            { vi: "Đương quy", lieu: "10g" },
            { vi: "Gừng, sả, ớt", lieu: "vừa đủ" }
        ],
        so_che: "Thịt dê khử mùi bằng rượu gừng, thái miếng. Thuốc bắc rửa sạch.",
        cach_lam: [
            "Hầm thịt dê cùng túi thuốc bắc trong 60 phút cho mềm thơm.",
            "Ăn dạng lẩu kèm rau cải cúc, nấm."
        ],
        kieng_ky: "Người âm hư hỏa vượng, sốt mụn nhọt nóng trong."
    },
    {
        stt: 82,
        ten: "Cháo Xích Tiểu Đậu Ý Dĩ",
        nhom: "Khu phong & Trừ thấp",
        cong_dung: "Lợi thủy tiêu thũng, kiện tỳ trừ thấp, giảm sưng đau khớp.",
        thanh_phan: [
            { vi: "Xích tiểu đậu (Đậu đỏ nhỏ)", lieu: "40g" },
            { vi: "Ý dĩ nhân", lieu: "30g" },
            { vi: "Gạo tẻ", lieu: "60g" }
        ],
        so_che: "Đậu đỏ và ý dĩ ngâm nở 3 giờ.",
        cach_lam: [
            "Ninh nhừ đậu đỏ, ý dĩ và gạo thành cháo ăn ấm."
        ],
        kieng_ky: "Người bị tiểu đêm quá nhiều."
    },
    {
        stt: 83,
        ten: "Canh Lươn Hầm Đỗ Trọng Thiên Niên Kiện",
        nhom: "Khu phong & Trừ thấp",
        cong_dung: "Bổ gan thận, khu phong trừ thấp, mạnh gân cốt.",
        thanh_phan: [
            { vi: "Thịt lươn", lieu: "250g" },
            { vi: "Đỗ trọng", lieu: "12g" },
            { vi: "Thiên niên kiện", lieu: "8g" }
        ],
        so_che: "Lươn tuốt sạch nhớt xào sơ thơm.",
        cach_lam: [
            "Hầm lươn và dược liệu bọc vải gạc 45 phút."
        ],
        kieng_ky: "Phụ nữ mang thai dùng thiên niên kiện cần thận trọng."
    },
    {
        stt: 84,
        ten: "Cháo Tang Ký Sinh Thịt Nạc",
        nhom: "Khu phong & Trừ thấp",
        cong_dung: "Bổ gan thận, khu phong thấp, dưỡng huyết an thai dịu đau lưng.",
        thanh_phan: [
            { vi: "Tang ký sinh (Tầm gửi cây dâu)", lieu: "20g" },
            { vi: "Thịt lợn nạc", lieu: "100g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Tang ký sinh sắc lấy nước đặc lọc bã.",
        cach_lam: [
            "Dùng nước tang ký sinh nấu cháo thịt nạc."
        ],
        kieng_ky: "Không dùng nếu dược liệu không rõ nguồn gốc cây chủ."
    },
    {
        stt: 85,
        ten: "Canh Sườn Lợn Hầm Ngưu Tất Đỗ Trọng",
        nhom: "Khu phong & Trừ thấp",
        cong_dung: "Thông kinh hoạt lạc, bổ thận tráng xương, trị đau lưng mỏi gối.",
        thanh_phan: [
            { vi: "Sườn lợn", lieu: "350g" },
            { vi: "Ngưu tất", lieu: "12g" },
            { vi: "Đỗ trọng", lieu: "12g" }
        ],
        so_che: "Sườn chặt khúc chần sơ nước sôi.",
        cach_lam: [
            "Hầm sườn cùng vị thuốc trong 50 phút."
        ],
        kieng_ky: "Phụ nữ có thai, người ra nhiều kinh nguyệt."
    },
    {
        stt: 86,
        ten: "Cháo Gừng Tươi Tía Tô Trừ Thấp",
        nhom: "Khu phong & Trừ thấp",
        cong_dung: "Ôn thông kinh lạc, phát hãn giải biểu khu phong thấp.",
        thanh_phan: [
            { vi: "Gừng tươi thái chỉ", lieu: "15g" },
            { vi: "Lá tía tô thái nhỏ", lieu: "20g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Rau củ rửa sạch thái nhỏ.",
        cach_lam: [
            "Nấu cháo gạo nhừ, thả gừng và tía tô vào đun bùng ăn nóng đắp chăn."
        ],
        kieng_ky: "Người âm hư tự hãn (nhiều mồ hôi do hư)."
    },
    {
        stt: 87,
        ten: "Canh Cá Chép Nấu Đậu Đỏ Lợi Thủy",
        nhom: "Khu phong & Trừ thấp",
        cong_dung: "Kiện tỳ lợi thủy, trừ thấp tiêu sũng đau khớp.",
        thanh_phan: [
            { vi: "Cá chép", lieu: "1 con (400g)" },
            { vi: "Đậu đỏ", lieu: "50g" },
            { vi: "Gừng tươi", lieu: "3 lát" }
        ],
        so_che: "Cá chép làm sạch đánh vảy giữ nguyên ruột rửa sạch.",
        cach_lam: [
            "Ninh cá chép và đậu đỏ hầm chín nhừ 60 phút không cho nhiều muối."
        ],
        kieng_ky: "Người dị ứng cá chép."
    },
    {
        stt: 88,
        ten: "Cháo Dải Áo Đậu Cốt Ngưu Tất",
        nhom: "Khu phong & Trừ thấp",
        cong_dung: "Hoạt huyết trừ thấp, dãn gân cốt.",
        thanh_phan: [
            { vi: "Ngưu tất", lieu: "15g" },
            { vi: "Đậu đen sao", lieu: "30g" },
            { vi: "Gạo tẻ", lieu: "70g" }
        ],
        so_che: "Ngưu tất sắc lấy nước.",
        cach_lam: [
            "Dùng nước thuốc ninh đậu đen gạo thành cháo."
        ],
        kieng_ky: "Phụ nữ mang thai."
    },
    {
        stt: 89,
        ten: "Canh Thịt Lợn Hầm Kê Huyết Đằng",
        nhom: "Khu phong & Trừ thấp",
        cong_dung: "Bổ huyết hoạt huyết, thông kinh trừ phong thấp tê dại.",
        thanh_phan: [
            { vi: "Kê huyết đằng", lieu: "20g" },
            { vi: "Thịt lợn nạc", lieu: "150g" },
            { vi: "Táo đỏ", lieu: "5 quả" }
        ],
        so_che: "Kê huyết đằng sắc lấy nước lọc.",
        cach_lam: [
            "Lấy nước dược liệu ninh thịt lợn và táo đỏ."
        ],
        kieng_ky: "Phụ nữ hành kinh kéo dài không dứt."
    },
    {
        stt: 90,
        ten: "Cháo Ý Dĩ Mộc Qua",
        nhom: "Khu phong & Trừ thấp",
        cong_dung: "Hòa vị hóa thấp, thư gân bình can trị co quắp khớp.",
        thanh_phan: [
            { vi: "Mộc qua", lieu: "10g" },
            { vi: "Ý dĩ", lieu: "30g" },
            { vi: "Gạo tẻ", lieu: "70g" }
        ],
        so_che: "Mộc qua sắc lấy nước bọc.",
        cach_lam: [
            "Ninh ý dĩ và gạo bằng nước mộc qua."
        ],
        kieng_ky: "Người bị tiểu đục."
    },
    {
        stt: 91,
        ten: "Canh Chân Giò Hầm Tục Đoán Đỗ Trọng",
        nhom: "Khu phong & Trừ thấp",
        cong_dung: "Bổ thận cường gân, thông khớp chỉ thống.",
        thanh_phan: [
            { vi: "Móng giò lợn", lieu: "1 cái" },
            { vi: "Tục đoán", lieu: "15g" },
            { vi: "Đỗ trọng", lieu: "15g" }
        ],
        so_che: "Móng giò cạo sạch chặt nhỏ.",
        cach_lam: [
            "Hầm móng giò và thuốc bắc trong 60 phút."
        ],
        kieng_ky: "Người mỡ máu cao tiêu hóa kém."
    },
    {
        stt: 92,
        ten: "Cháo Thịt Bò Độc Hoạt Thiên Niên Kiện",
        nhom: "Khu phong & Trừ thấp",
        cong_dung: "Khu phong thắng thấp, giảm đau nhức xương khớp gió lạnh.",
        thanh_phan: [
            { vi: "Độc hoạt", lieu: "8g" },
            { vi: "Thiên niên kiện", lieu: "8g" },
            { vi: "Thịt bò", lieu: "100g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Sắc hai vị thuốc lấy nước đặc.",
        cach_lam: [
            "Lấy nước thuốc nấu cháo thịt bò băm."
        ],
        kieng_ky: "Người âm hư hỏa vượng, loét miệng."
    },
    {
        stt: 93,
        ten: "Canh Gà Ác Hầm Ngũ Gia Bì",
        nhom: "Khu phong & Trừ thấp",
        cong_dung: "Bổ gan thận, cường gân cốt, trừ phong thấp gầy yếu.",
        thanh_phan: [
            { vi: "Gà ác", lieu: "1 con" },
            { vi: "Ngũ gia bì", lieu: "15g" }
        ],
        so_che: "Gà mổ sạch. Ngũ gia bì rửa sạch.",
        cach_lam: [
            "Chưng cách thủy gà và ngũ gia bì 60 phút."
        ],
        kieng_ky: "Người âm hư nội nhiệt."
    },
    {
        stt: 94,
        ten: "Cháo Phục Linh Ý Dĩ",
        nhom: "Khu phong & Trừ thấp",
        cong_dung: "Kiện tỳ trừ thấp, lợi thủy thông kinh.",
        thanh_phan: [
            { vi: "Phục linh", lieu: "15g" },
            { vi: "Ý dĩ", lieu: "30g" },
            { vi: "Gạo tẻ", lieu: "60g" }
        ],
        so_che: "Phục linh tán nhỏ.",
        cach_lam: [
            "Ninh cháo ý dĩ gạo rồi hòa bột phục linh đun chín."
        ],
        kieng_ky: "Người tiểu đêm nhiều."
    },
    {
        stt: 95,
        ten: "Canh Lươn Nấu Uy Linh Tiên",
        nhom: "Khu phong & Trừ thấp",
        cong_dung: "Thông kinh lạc, khu phong chỉ thống khớp xương.",
        thanh_phan: [
            { vi: "Thịt lươn", lieu: "200g" },
            { vi: "Uy linh tiên", lieu: "10g" }
        ],
        so_che: "Sắc uy linh tiên lấy nước hầm lươn.",
        cach_lam: [
            "Hầm lươn chín mềm dùng nóng."
        ],
        kieng_ky: "Người thể trạng huyết hư không có phong thấp."
    },
    {
        stt: 96,
        ten: "Cháo Đậu Đỏ Vỏ Quýt",
        nhom: "Khu phong & Trừ thấp",
        cong_dung: "Lợi thủy tiêu sũng, hành khí hóa thấp.",
        thanh_phan: [
            { vi: "Đậu đỏ", lieu: "40g" },
            { vi: "Trần bì", lieu: "6g" },
            { vi: "Gạo tẻ", lieu: "60g" }
        ],
        so_che: "Đậu đỏ ngâm trước.",
        cach_lam: [
            "Ninh cháo đậu đỏ trần bì mềm nhừ."
        ],
        kieng_ky: "Người khô họng thiếu nước."
    },
    {
        stt: 97,
        ten: "Canh Thịt Dê Hầm Hy Thiêm",
        nhom: "Khu phong & Trừ thấp",
        cong_dung: "Khu phong thấp, lợi gân cốt hạ huyết áp nhẹ.",
        thanh_phan: [
            { vi: "Thịt dê", lieu: "200g" },
            { vi: "Hy thiêm thảo", lieu: "12g" }
        ],
        so_che: "Hy thiêm sắc lấy nước bọc.",
        cach_lam: [
            "Hầm thịt dê cùng nước sắc hy thiêm."
        ],
        kieng_ky: "Người tỳ vị lạnh tiêu chảy."
    },
    {
        stt: 98,
        ten: "Cháo Ngưu Tất Hạt Kê",
        nhom: "Khu phong & Trừ thấp",
        cong_dung: "Bổ gan thận, dẫn dược xuống gối chân dịu đau.",
        thanh_phan: [
            { vi: "Ngưu tất", lieu: "12g" },
            { vi: "Hạt kê", lieu: "60g" }
        ],
        so_che: "Ngưu tất sắc lấy nước sắc.",
        cach_lam: [
            "Ninh hạt kê bằng nước ngưu tất thành cháo."
        ],
        kieng_ky: "Phụ nữ mang thai và đang hành kinh."
    },
    {
        stt: 99,
        ten: "Canh Cật Lợn Hầm Đỗ Trọng",
        nhom: "Khu phong & Trừ thấp",
        cong_dung: "Bổ thận khí, cường thắt lưng gối, trừ phong thấp.",
        thanh_phan: [
            { vi: "Cật lợn (Thận lợn)", lieu: "1 cặp" },
            { vi: "Đỗ trọng", lieu: "15g" }
        ],
        so_che: "Cật lợn bổ đôi cạo sạch màng trắng hôi rửa rượu.",
        cach_lam: [
            "Khía vảy rồng cật lợn, kẹp đỗ trọng hấp chưng 45 phút."
        ],
        kieng_ky: "Người bị mỡ máu cao, độc gút."
    },
    {
        stt: 100,
        ten: "Cháo Cánh Gà Ninh Tần Giao",
        nhom: "Khu phong & Trừ thấp",
        cong_dung: "Khu phong thanh nhiệt thấp, thư gân mỏi tay chân.",
        thanh_phan: [
            { vi: "Cánh gà", lieu: "2 cái" },
            { vi: "Tần giao", lieu: "10g" },
            { vi: "Gạo tẻ", lieu: "70g" }
        ],
        so_che: "Tần giao sắc lấy nước ninh cháo.",
        cach_lam: [
            "Hầm cánh gà và gạo bằng nước tần giao."
        ],
        kieng_ky: "Người tiêu chảy lâu ngày."
    },

    // ==========================================
    // NHÓM 6: ÔN PHẾ & CHỈ KHÁI (STT 101 - 120)
    // ==========================================
    {
        stt: 101,
        ten: "Lê Hấp Bối Mẫu Đường Phèn",
        nhom: "Ôn phế & Chỉ khái",
        cong_dung: "Nhuận phế thanh nhiệt, hóa đàm chỉ khái, dịu rát họng ho khô.",
        thanh_phan: [
            { vi: "Lê tươi", lieu: "1 quả to" },
            { vi: "Xuyên bối mẫu nghiền mịn", lieu: "5g" },
            { vi: "Đường phèn", lieu: "15g" }
        ],
        so_che: "Lê rửa sạch, cắt khoét bỏ ruột hạt tạo thành chén.",
        cach_lam: [
            "Cho bối mẫu và đường phèn vào ruột quả lê.",
            "Chưng cách thủy 45 phút cho lê mềm tiết nước ngọt.",
            "Ăn cả quả lê lẫn nước cốt."
        ],
        kieng_ky: "Người bị ho do hàn đờm trong lỏng trắng."
    },
    {
        stt: 102,
        ten: "Yến Chưng Táo Đỏ Kỷ Tử",
        nhom: "Ôn phế & Chỉ khái",
        cong_dung: "Dưỡng phế tư âm, bổ khí nhuận ho, phục hồi hô hấp.",
        thanh_phan: [
            { vi: "Yến sào đã ngâm nở", lieu: "10g" },
            { vi: "Táo đỏ", lieu: "5 quả" },
            { vi: "Kỷ tử", lieu: "5g" },
            { vi: "Đường phèn", lieu: "15g" }
        ],
        so_che: "Yến ngâm mềm làm sạch lông bụi. Táo đỏ cắt khoanh.",
        cach_lam: [
            "Chưng cách thủy yến, táo đỏ, kỷ tử với đường phèn trong 30 phút."
        ],
        kieng_ky: "Người đang cảm sốt cao phong hàn, tiêu chảy cấp."
    },
    {
        stt: 103,
        ten: "Cháo Cát Cánh Hạnh Nhân",
        nhom: "Ôn phế & Chỉ khái",
        cong_dung: "Tuyên phế lợi họng, hóa đàm chỉ khái, dịu ngứa cổ ho.",
        thanh_phan: [
            { vi: "Cát cánh", lieu: "10g" },
            { vi: "Hạnh nhân", lieu: "10g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Cát cánh sắc lấy nước đặc.",
        cach_lam: [
            "Nấu gạo và hạnh nhân bằng nước cát cánh thành cháo nhừ."
        ],
        kieng_ky: "Người ho ra máu dai dẳng."
    },
    {
        stt: 104,
        ten: "Canh Phế Lợn Hầm Mạch Môn",
        nhom: "Ôn phế & Chỉ khái",
        cong_dung: "Dưỡng phế tư âm, thanh nhiệt nhuận ho khan lâu ngày.",
        thanh_phan: [
            { vi: "Phế lợn (Phổi lợn)", lieu: "200g" },
            { vi: "Mạch môn", lieu: "15g" },
            { vi: "Bách hợp", lieu: "15g" }
        ],
        so_che: "Phổi lợn sục rửa sạch máu bọt dưới vòi nước nhiều lần thái miếng.",
        cach_lam: [
            "Hầm phổi lợn cùng mạch môn bách hợp trong 60 phút."
        ],
        kieng_ky: "Người ho đờm lạnh nhiều."
    },
    {
        stt: 105,
        ten: "Cháo Bách Hợp Ngân Nhĩ",
        nhom: "Ôn phế & Chỉ khái",
        cong_dung: "Nhuận phế chỉ khái, tư âm sinh tân, giảm khát xơ họng.",
        thanh_phan: [
            { vi: "Bách hợp", lieu: "20g" },
            { vi: "Ngân nhĩ (Mộc nhĩ trắng)", lieu: "10g" },
            { vi: "Gạo tẻ", lieu: "70g" }
        ],
        so_che: "Ngân nhĩ ngâm nở xé nhỏ.",
        cach_lam: [
            "Ninh bách hợp, ngân nhĩ và gạo thành cháo mịn."
        ],
        kieng_ky: "Người tỳ vị trệ cảm lạnh."
    },
    {
        stt: 106,
        ten: "Canh Củ Cải Trắng Hầm Gừng Tươi Mật Ong",
        nhom: "Ôn phế & Chỉ khái",
        cong_dung: "Ôn phế tán hàn, hóa đàm chỉ khái ho hen lạnh.",
        thanh_phan: [
            { vi: "Củ cải trắng", lieu: "150g" },
            { vi: "Gừng tươi", lieu: "10g" },
            { vi: "Mật ong", lieu: "20ml" }
        ],
        so_che: "Củ cải thái con cờ. Gừng thái chỉ.",
        cach_lam: [
            "Đun củ cải và gừng với nước chín nhừ, tắt bếp hòa mật ong uống."
        ],
        kieng_ky: "Trẻ em dưới 1 tuổi không dùng mật ong."
    },
    {
        stt: 107,
        ten: "Cháo Trần Bì Cát Cánh",
        nhom: "Ôn phế & Chỉ khái",
        cong_dung: "Lý khí hóa đàm, tuyên phế thông họng.",
        thanh_phan: [
            { vi: "Trần bì", lieu: "6g" },
            { vi: "Cát cánh", lieu: "8g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Sắc cát cánh trần bì lấy nước.",
        cach_lam: [
            "Lấy nước dược liệu ninh gạo thành cháo ăn ấm."
        ],
        kieng_ky: "Người ho khan không đờm âm hư."
    },
    {
        stt: 108,
        ten: "Canh Thịt Nạc Hầm Tử Uyển Khoản Đông Hoa",
        nhom: "Ôn phế & Chỉ khái",
        cong_dung: "Ôn phế hạ khí, hóa đàm chỉ khái ho lâu ngày không khỏi.",
        thanh_phan: [
            { vi: "Tử uyển", lieu: "10g" },
            { vi: "Khoản đông hoa", lieu: "10g" },
            { vi: "Thịt lợn nạc", lieu: "150g" }
        ],
        so_che: "Hai vị thuốc bọc vải gạc.",
        cach_lam: [
            "Ninh thịt nạc cùng túi thuốc 45 phút."
        ],
        kieng_ky: "Người ho do nhiệt thực hỏa."
    },
    {
        stt: 109,
        ten: "Lê Hấp Mật Ong Gừng Tươi",
        nhom: "Ôn phế & Chỉ khái",
        cong_dung: "Nhuận phế giải hàn, giảm ho phế họng khàn tiếng.",
        thanh_phan: [
            { vi: "Quả lê", lieu: "1 quả" },
            { vi: "Gừng sợi", lieu: "5g" },
            { vi: "Mật ong", lieu: "15ml" }
        ],
        so_che: "Lê khoét bỏ hạt.",
        cach_lam: [
            "Cho gừng và mật ong vào quả lê chưng cách thủy 30 phút."
        ],
        kieng_ky: "Trẻ dưới 12 tháng tuổi."
    },
    {
        stt: 110,
        ten: "Cháo Hạnh Nhân Tang Diệp",
        nhom: "Ôn phế & Chỉ khái",
        cong_dung: "Sơ phong thanh phế, nhuận khô chỉ khái ho mùa thu khô.",
        thanh_phan: [
            { vi: "Tang diệp (Lá dâu)", lieu: "12g" },
            { vi: "Hạnh nhân", lieu: "10g" },
            { vi: "Gạo tẻ", lieu: "70g" }
        ],
        so_che: "Tang diệp sắc lấy nước đun.",
        cach_lam: [
            "Ninh hạnh nhân và gạo bằng nước lá dâu."
        ],
        kieng_ky: "Người ho do lạnh rét nhiều."
    },
    {
        stt: 111,
        ten: "Canh Cần Tây Củ Cải Trắng Chỉ Khái",
        nhom: "Ôn phế & Chỉ khái",
        cong_dung: "Thanh nhiệt hóa đàm, dịu ho khè khè.",
        thanh_phan: [
            { vi: "Cần tây", lieu: "80g" },
            { vi: "Củ cải trắng", lieu: "100g" }
        ],
        so_che: "Cắt khúc rửa sạch.",
        cach_lam: [
            "Nấu canh củ cải chín rồi cho cần tây vào sôi tắt bếp."
        ],
        kieng_ky: "Người huyết áp thấp tỳ hư."
    },
    {
        stt: 112,
        ten: "Cháo Bách Hợp Sa Sâm",
        nhom: "Ôn phế & Chỉ khái",
        cong_dung: "Dưỡng âm nhuận phế, thanh hỏa bớt ho.",
        thanh_phan: [
            { vi: "Bách hợp", lieu: "15g" },
            { vi: "Sa sâm", lieu: "15g" },
            { vi: "Gạo tẻ", lieu: "70g" }
        ],
        so_che: "Sa sâm sắc lấy nước.",
        cach_lam: [
            "Ninh bách hợp gạo bằng nước sa sâm."
        ],
        kieng_ky: "Người ho do hàn đờm loãng."
    },
    {
        stt: 113,
        ten: "Canh Vịt Hầm Sa Sâm Mạch Môn",
        nhom: "Ôn phế & Chỉ khái",
        cong_dung: "Tư âm nhuận phế, chỉ khái sinh tân.",
        thanh_phan: [
            { vi: "Thịt vịt", lieu: "300g" },
            { vi: "Sa sâm", lieu: "15g" },
            { vi: "Mạch môn", lieu: "12g" }
        ],
        so_che: "Thịt vịt rửa rượu gừng bớt hôi.",
        cach_lam: [
            "Ninh thịt vịt cùng dược liệu trong 60 phút."
        ],
        kieng_ky: "Người tiêu chảy hư hàn."
    },
    {
        stt: 114,
        ten: "Cháo Cát Cánh Bối Mẫu",
        nhom: "Ôn phế & Chỉ khái",
        cong_dung: "Tuyên phế hóa đàm, chỉ khái thông họng.",
        thanh_phan: [
            { vi: "Cát cánh", lieu: "8g" },
            { vi: "Xuyên bối mẫu nghiền", lieu: "5g" },
            { vi: "Gạo tẻ", lieu: "70g" }
        ],
        so_che: "Cát cánh sắc lấy nước bọc.",
        cach_lam: [
            "Nấu cháo gạo bằng nước cát cánh, cháo chín rắc bột bối mẫu khuấy đều."
        ],
        kieng_ky: "Người ho suyễn do lạnh phong hàn."
    },
    {
        stt: 115,
        ten: "Canh Phế Lợn Hầm Bách Bộ",
        nhom: "Ôn phế & Chỉ khái",
        cong_dung: "Ôn phế nhuận phế, sát trùng chỉ khái, trị ho bách nhật ho dai dẳng.",
        thanh_phan: [
            { vi: "Bách bộ", lieu: "12g" },
            { vi: "Phế lợn", lieu: "150g" }
        ],
        so_che: "Phế lợn rửa bọt thật sạch.",
        cach_lam: [
            "Hầm phế lợn và bách bộ trong 50 phút bớt đắng."
        ],
        kieng_ky: "Người tiêu chảy tỳ vị hư."
    },
    {
        stt: 116,
        ten: "Cháo Đậu Măng Cam Thảo",
        nhom: "Ôn phế & Chỉ khái",
        cong_dung: "Thanh phế lợi họng, dịu ho sốt nhẹ.",
        thanh_phan: [
            { vi: "Cam thảo", lieu: "6g" },
            { vi: "Đậu măng/Đậu xanh", lieu: "40g" },
            { vi: "Gạo tẻ", lieu: "60g" }
        ],
        so_che: "Sắc cam thảo lấy nước.",
        cach_lam: [
            "Ninh cháo đậu bằng nước cam thảo."
        ],
        kieng_ky: "Người đầy trướng bụng."
    },
    {
        stt: 117,
        ten: "Lê Hấp Xuyên Bối Mẫu Quất Cốt",
        nhom: "Ôn phế & Chỉ khái",
        cong_dung: "Hóa đàm tuyên phế, dịu rát cổ họng ho gió ho khan.",
        thanh_phan: [
            { vi: "Quả lê", lieu: "1 quả" },
            { vi: "Xuyên bối mẫu", lieu: "4g" },
            { vi: "Quất xanh thái lát", lieu: "2 quả" },
            { vi: "Đường phèn", lieu: "10g" }
        ],
        so_che: "Lê khoét bỏ ruột.",
        cach_lam: [
            "Cho nguyên liệu vào chén lê chưng cách thủy 35 phút."
        ],
        kieng_ky: "Người lạnh bụng đi ngoài."
    },
    {
        stt: 118,
        ten: "Canh Sườn Lợn Hầm Sa Sâm",
        nhom: "Ôn phế & Chỉ khái",
        cong_dung: "Bổ khí dưỡng âm phế, giảm khô họng đờm đặc.",
        thanh_phan: [
            { vi: "Sườn lợn", lieu: "300g" },
            { vi: "Sa sâm", lieu: "20g" },
            { vi: "Ngọc trúc", lieu: "15g" }
        ],
        so_che: "Sườn chần xát sạch.",
        cach_lam: [
            "Hầm sườn cùng sa sâm và ngọc trúc 50 phút."
        ],
        kieng_ky: "Người cảm sốt phong hàn đờm loãng."
    },
    {
        stt: 119,
        ten: "Cháo Tía Tô Bát Bửu Ôn Phế",
        nhom: "Ôn phế & Chỉ khái",
        cong_dung: "Ôn phế tán hàn, tuyên thông khí phế, dịu ho do ngấm lạnh.",
        thanh_phan: [
            { vi: "Lá tía tô", lieu: "20g" },
            { vi: "Hành hoa", lieu: "2 nhánh" },
            { vi: "Gừng", lieu: "3 lát" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Rau rửa sạch thái nhỏ.",
        cach_lam: [
            "Cháo gạo ninh chín trút gia vị rau vào đun bùng ăn nóng."
        ],
        kieng_ky: "Người hỏa nhiệt ra nhiều mồ hôi."
    },
    {
        stt: 120,
        ten: "Canh Thịt Nạc Hầm Bách Hợp Mạch Môn",
        nhom: "Ôn phế & Chỉ khái",
        cong_dung: "Tư âm nhuận phế, chỉ khái sinh tân dịch.",
        thanh_phan: [
            { vi: "Thịt lợn nạc", lieu: "150g" },
            { vi: "Bách hợp", lieu: "15g" },
            { vi: "Mạch môn", lieu: "12g" }
        ],
        so_che: "Thịt thái miếng vừa ăn.",
        cach_lam: [
            "Hầm thịt nạc và các vị thuốc trong 45 phút, nêm chút muối."
        ],
        kieng_ky: "Người cảm lạnh tỳ vị hư hàn."
    },
    // ==========================================
    // NHÓM 7: HÀNH KHÍ & HOẠT HUYẾT (STT 121 - 140)
    // ==========================================
    {
        stt: 121,
        ten: "Canh Thịt Nạc Hầm Mộc Nhĩ Đen Đương Quy",
        nhom: "Hành khí & Hoạt huyết",
        cong_dung: "Hoạt huyết hóa ứ, hành khí thông kinh, trị co thắt ngực hông và mỏi mệt.",
        thanh_phan: [
            { vi: "Thịt lợn nạc", lieu: "200g" },
            { vi: "Mộc nhĩ đen", lieu: "15g" },
            { vi: "Đương quy", lieu: "10g" },
            { vi: "Xuyên khung", lieu: "6g" }
        ],
        so_che: "Mộc nhĩ ngâm nở xé nhỏ. Thịt nạc thái miếng chần qua. Dược liệu rửa sạch.",
        cach_lam: [
            "Hầm thịt nạc, đương quy, xuyên khung với 1 lít nước trong 40 phút.",
            "Cho mộc nhĩ đen vào đun tiếp 15 phút, nêm chút gia vị vừa ăn."
        ],
        kieng_ky: "Phụ nữ đang xuất huyết nhiều, người bị rối loạn đông máu."
    },
    {
        stt: 122,
        ten: "Cháo Đan Sâm Hồng Hoa",
        nhom: "Hành khí & Hoạt huyết",
        cong_dung: "Hoạt huyết trừ ứ, thông kinh chỉ thống, tốt cho người bị bế kinh hoặc đau nhói vùng ngực.",
        thanh_phan: [
            { vi: "Đan sâm", lieu: "15g" },
            { vi: "Hồng hoa", lieu: "5g" },
            { vi: "Gạo tẻ", lieu: "80g" },
            { vi: "Đường đỏ", lieu: "15g" }
        ],
        so_che: "Đan sâm và hồng hoa sắc lấy nước đặc, lọc bỏ bã.",
        cach_lam: [
            "Dùng nước sắc dược liệu ninh gạo thành cháo nhừ.",
            "Hòa đường đỏ vào ăn lúc cháo còn ấm."
        ],
        kieng_ky: "Phụ nữ mang thai tuyệt đối không dùng."
    },
    {
        stt: 123,
        ten: "Canh Cá Chép Nấu Sơn Tra Trần Bì",
        nhom: "Hành khí & Hoạt huyết",
        cong_dung: "Hành khí tiêu tích, hóa ứ hạ mỡ máu, kích thích tiêu hóa.",
        thanh_phan: [
            { vi: "Cá chép", lieu: "1 con (400g)" },
            { vi: "Sơn tra", lieu: "15g" },
            { vi: "Trần bì", lieu: "6g" },
            { vi: "Gừng tươi", lieu: "3 lát" }
        ],
        so_che: "Cá chép làm sạch, xào sơ hai mặt. Sơn tra và trần bì rửa sạch.",
        cach_lam: [
            "Cho cá, sơn tra, trần bì, gừng vào nồi với 1.2 lít nước ninh nhỏ lửa 45 phút.",
            "Nêm ít gia vị rồi dùng nóng."
        ],
        kieng_ky: "Người viêm loét dạ dày dư axit nặng."
    },
    {
        stt: 124,
        ten: "Cháo Tam Thất Thịt Bò",
        nhom: "Hành khí & Hoạt huyết",
        cong_dung: "Bổ huyết hoạt huyết, tán ứ chỉ huyết, phục hồi sưng đau chấn thương.",
        thanh_phan: [
            { vi: "Thịt bò nạc băm", lieu: "100g" },
            { vi: "Bột tam thất", lieu: "5g" },
            { vi: "Gạo tẻ", lieu: "80g" },
            { vi: "Hành hoa", lieu: "vừa đủ" }
        ],
        so_che: "Thịt bò băm ướp gia vị nhẹ. Gạo vo sạch.",
        cach_lam: [
            "Ninh gạo thành cháo chín nhừ.",
            "Cho thịt bò băm và bột tam thất vào khuấy đều đun sôi thêm 5 phút.",
            "Rắc hành hoa ăn nóng."
        ],
        kieng_ky: "Phụ nữ có thai, người đang bị sốt cao phát ban."
    },
    {
        stt: 125,
        ten: "Canh Tim Lợn Hầm Đan Sâm Ích Mẫu",
        nhom: "Hành khí & Hoạt huyết",
        cong_dung: "Dưỡng tâm hoạt huyết, điều kinh chỉ thống, dịu hồi hộp đánh trống ngực.",
        thanh_phan: [
            { vi: "Tim lợn", lieu: "1/2 quả" },
            { vi: "Đan sâm", lieu: "15g" },
            { vi: "Ích mẫu thảo", lieu: "12g" }
        ],
        so_che: "Tim lợn rửa sạch máu, thái lát. Dược liệu bọc túi vải.",
        cach_lam: [
            "Cho tim lợn và túi dược liệu vào thố chưng cách thủy 50 phút.",
            "Nêm ít muối ăn khi còn nóng."
        ],
        kieng_ky: "Phụ nữ mang thai, người huyết áp thấp nặng."
    },
    {
        stt: 126,
        ten: "Cháo Hương Phụ Ngải Cứu",
        nhom: "Hành khí & Hoạt huyết",
        cong_dung: "Hành khí giải uất, ôn kinh tán hàn, giảm đau bụng kinh do lạnh.",
        thanh_phan: [
            { vi: "Hương phụ (Củ gấu)", lieu: "10g" },
            { vi: "Lá ngải cứu tươi", lieu: "20g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Hương phụ sắc lấy nước bọc. Ngải cứu thái nhỏ.",
        cach_lam: [
            "Nấu cháo gạo bằng nước hương phụ.",
            "Cháo chín cho ngải cứu vào đun sôi lại 3 phút rồi tắt bếp."
        ],
        kieng_ky: "Người âm hư huyết nhiệt, hỏa thịnh."
    },
    {
        stt: 127,
        ten: "Canh Thịt Lợn Hầm Nga Truật Tam Thất",
        nhom: "Hành khí & Hoạt huyết",
        cong_dung: "Hành khí phá huyết, tiêu tích tán ứ, giảm trướng đau bàng quang hông sườn.",
        thanh_phan: [
            { vi: "Thịt lợn nạc", lieu: "150g" },
            { vi: "Nga truật (Nghệ đen)", lieu: "8g" },
            { vi: "Bột tam thất", lieu: "3g" }
        ],
        so_che: "Thịt lợn thái khối. Nga truật thái lát.",
        cach_lam: [
            "Ninh thịt và nga truật trong 40 phút.",
            "Hòa bột tam thất vào khuấy đều trước khi dùng."
        ],
        kieng_ky: "Phụ nữ mang thai, người đang bị rong kinh."
    },
    {
        stt: 128,
        ten: "Cháo Uất Kim Củ Cải",
        nhom: "Hành khí & Hoạt huyết",
        cong_dung: "Hành khí giải uất, lợi mật mát gan, hóa ứ tiêu đàm.",
        thanh_phan: [
            { vi: "Uất kim (Củ nghệ xơ)", lieu: "10g" },
            { vi: "Củ cải trắng", lieu: "100g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Uất kim sắc lấy nước bọc. Củ cải thái chỉ.",
        cach_lam: [
            "Ninh gạo và củ cải bằng nước uất kim thành cháo chín nhừ."
        ],
        kieng_ky: "Phụ nữ có thai, người thể hư tỳ vị hư hàn."
    },
    {
        stt: 129,
        ten: "Canh Sườn Lợn Nấu Đan Sâm Táo Đỏ",
        nhom: "Hành khí & Hoạt huyết",
        cong_dung: "Bổ huyết hoạt huyết, dưỡng tâm thông mạch, giảm mỏi mệt tê bì.",
        thanh_phan: [
            { vi: "Sườn lợn", lieu: "300g" },
            { vi: "Đan sâm", lieu: "15g" },
            { vi: "Táo đỏ", lieu: "6 quả" }
        ],
        so_che: "Sườn chặt khúc chần sơ. Đan sâm rửa sạch.",
        cach_lam: [
            "Ninh sườn, đan sâm và táo đỏ với 1.2 lít nước trong 50 phút."
        ],
        kieng_ky: "Người đang bị chứng chảy máu cam, huyết nhiệt."
    },
    {
        stt: 130,
        ten: "Cháo Tam Thất Hạt Kê",
        nhom: "Hành khí & Hoạt huyết",
        cong_dung: "Hòa vị hoạt huyết, tiêu ứ bổ thể lực.",
        thanh_phan: [
            { vi: "Bột tam thất", lieu: "4g" },
            { vi: "Hạt kê", lieu: "60g" },
            { vi: "Táo đỏ", lieu: "4 quả" }
        ],
        so_che: "Hạt kê vo sạch. Táo đỏ bỏ hạt.",
        cach_lam: [
            "Ninh hạt kê và táo đỏ thành cháo sánh.",
            "Rắc bột tam thất vào khuấy đều ăn ấm."
        ],
        kieng_ky: "Phụ nữ mang thai."
    },
    {
        stt: 131,
        ten: "Canh Gà Hầm Hồng Hoa Đương Quy",
        nhom: "Hành khí & Hoạt huyết",
        cong_dung: "Bổ huyết hoạt huyết, thông kinh chỉ thống, dưỡng sắc mặt hồng hào.",
        thanh_phan: [
            { vi: "Thịt gà ta", lieu: "300g" },
            { vi: "Đương quy", lieu: "10g" },
            { vi: "Hồng hoa", lieu: "3g" }
        ],
        so_che: "Gà chặt miếng vừa. Dược liệu rửa qua nước sạch.",
        cach_lam: [
            "Hầm gà và đương quy 45 phút, sau đó thả hồng hoa đun thêm 5 phút."
        ],
        kieng_ky: "Người bị băng huyết, rong huyết, có thai."
    },
    {
        stt: 132,
        ten: "Cháo Xuyên Khung Thịt Nạc",
        nhom: "Hành khí & Hoạt huyết",
        cong_dung: "Hành khí hoạt huyết, khu phong chỉ thống, dịu đau đầu do hỏa ứ.",
        thanh_phan: [
            { vi: "Xuyên khung", lieu: "8g" },
            { vi: "Thịt lợn nạc băm", lieu: "80g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Xuyên khung sắc lấy nước đặc.",
        cach_lam: [
            "Dùng nước xuyên khung ninh gạo thành cháo, trút thịt băm vào đun chín."
        ],
        kieng_ky: "Người âm hư hỏa vượng, huyết áp cao cấp."
    },
    {
        stt: 133,
        ten: "Canh Lươn Nấu Sơn Tra Hành Tây",
        nhom: "Hành khí & Hoạt huyết",
        cong_dung: "Bổ khí hoạt huyết, thông huyết mạch, giảm mỡ máu.",
        thanh_phan: [
            { vi: "Thịt lươn", lieu: "200g" },
            { vi: "Sơn tra", lieu: "12g" },
            { vi: "Hành tây thái nhỏ", lieu: "50g" }
        ],
        so_che: "Lươn tuốt sạch nhớt, xào xơ với hành tây.",
        cach_lam: [
            "Nấu lươn và sơn tra thành canh đun lửa vừa 35 phút."
        ],
        kieng_ky: "Người đau dạ dày nặng."
    },
    {
        stt: 134,
        ten: "Cháo Ngải Cứu Trứng Gà Hoạt Huyết",
        nhom: "Hành khí & Hoạt huyết",
        cong_dung: "Ôn kinh hoạt huyết, giảm đau bụng lạnh, điều hòa kinh nguyệt.",
        thanh_phan: [
            { vi: "Lá ngải cứu tươi", lieu: "30g" },
            { vi: "Trứng gà", lieu: "1 quả" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Ngải cứu thái nhỏ.",
        cach_lam: [
            "Nấu cháo gạo nhừ, thả ngải cứu và đánh trứng gà vào khuấy chín bùng."
        ],
        kieng_ky: "Người thể tạng nhiệt nội hỏa."
    },
    {
        stt: 135,
        ten: "Canh Chân Giò Hầm Đan Sâm",
        nhom: "Hành khí & Hoạt huyết",
        cong_dung: "Bổ huyết hoạt huyết, thông tia sữa, phục hồi sau sinh.",
        thanh_phan: [
            { vi: "Móng giò lợn", lieu: "1 cái" },
            { vi: "Đan sâm", lieu: "15g" },
            { vi: "Mộc thông", lieu: "6g" }
        ],
        so_che: "Móng giò cạo sạch chặt khúc.",
        cach_lam: [
            "Hầm móng giò cùng các vị thuốc bọc vải gạc trong 60 phút."
        ],
        kieng_ky: "Phụ nữ đang mang thai."
    },
    {
        stt: 136,
        ten: "Cháo Đan Sâm Mộc Hương",
        nhom: "Hành khí & Hoạt huyết",
        cong_dung: "Hành khí trệ, hoạt huyết ứ, trị đau trướng bụng ngực.",
        thanh_phan: [
            { vi: "Đan sâm", lieu: "12g" },
            { vi: "Mộc hương", lieu: "5g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Sắc hai vị thuốc lấy nước bọc.",
        cach_lam: [
            "Ninh cháo gạo bằng nước thuốc ăn ấm."
        ],
        kieng_ky: "Người kiệt âm hư nhiệt."
    },
    {
        stt: 137,
        ten: "Canh Thịt Bò Hầm Sơn Tra Trần Bì",
        nhom: "Hành khí & Hoạt huyết",
        cong_dung: "Hành khí tiêu thực, hoạt huyết hóa ứ, mềm thịt bò.",
        thanh_phan: [
            { vi: "Thịt bò nạc", lieu: "200g" },
            { vi: "Sơn tra", lieu: "15g" },
            { vi: "Trần bì", lieu: "5g" }
        ],
        so_che: "Thịt bò thái khối.",
        cach_lam: [
            "Hầm thịt bò, sơn tra, trần bì trong 50 phút cho thịt mềm."
        ],
        kieng_ky: "Người dư axit dạ dày nặng."
    },
    {
        stt: 138,
        ten: "Cháo Ích Mẫu Đường Đỏ",
        nhom: "Hành khí & Hoạt huyết",
        cong_dung: "Hoạt huyết điều kinh, lợi thủy tiêu thũng sau sinh.",
        thanh_phan: [
            { vi: "Ích mẫu thảo", lieu: "15g" },
            { vi: "Gạo tẻ", lieu: "80g" },
            { vi: "Đường đỏ", lieu: "20g" }
        ],
        so_che: "Sắc ích mẫu lấy nước bọc.",
        cach_lam: [
            "Ninh cháo gạo bằng nước ích mẫu, thêm đường đỏ khi ăn."
        ],
        kieng_ky: "Phụ nữ có thai tuyệt đối tránh."
    },
    {
        stt: 139,
        ten: "Canh Cá Lóc Hầm Tam Thất",
        nhom: "Hành khí & Hoạt huyết",
        cong_dung: "Bổ khí hoạt huyết, tiêu ứ sinh cơ, chóng lành vết thương.",
        thanh_phan: [
            { vi: "Thịt cá lóc", lieu: "200g" },
            { vi: "Bột tam thất", lieu: "5g" },
            { vi: "Gừng tươi", lieu: "3 lát" }
        ],
        so_che: "Cá lóc rán sơ.",
        cach_lam: [
            "Nấu canh cá với gừng 30 phút, hòa bột tam thất vào khuấy đều dùng nóng."
        ],
        kieng_ky: "Phụ nữ đang mang thai."
    },
    {
        stt: 140,
        ten: "Cháo Hồng Hoa Hạt Sen",
        nhom: "Hành khí & Hoạt huyết",
        cong_dung: "Hoạt huyết an thần, giải xơ trệ huyết mạch.",
        thanh_phan: [
            { vi: "Hồng hoa", lieu: "3g" },
            { vi: "Hạt sen", lieu: "30g" },
            { vi: "Gạo tẻ", lieu: "70g" }
        ],
        so_che: "Hạt sen ninh trước.",
        cach_lam: [
            "Cho gạo và hồng hoa vào nồi hạt sen nấu thành cháo."
        ],
        kieng_ky: "Phụ nữ mang thai, người dễ chảy máu."
    },

    // ==========================================
    // NHÓM 8: BỔ THẬN & TRÁNG DƯƠNG (STT 141 - 160)
    // ==========================================
    {
        stt: 141,
        ten: "Canh Thỏ Hầm Thỏ Ty Tử Dâm Dương Hoắc",
        nhom: "Bổ thận & Tráng dương",
        cong_dung: "Bổ thận ích tinh, tráng dương cường cốt, cải thiện sinh lực hư suy.",
        thanh_phan: [
            { vi: "Thịt thỏ", lieu: "250g" },
            { vi: "Thỏ ty tử", lieu: "12g" },
            { vi: "Dâm dương hoắc", lieu: "10g" },
            { vi: "Gừng tươi", lieu: "2 lát" }
        ],
        so_che: "Thịt thỏ rửa rượu xát sạch, chặt miếng. Dược liệu bọc túi vải.",
        cach_lam: [
            "Hầm thịt thỏ cùng túi dược liệu trong 60 phút.",
            "Thêm chút muối gia vị ăn nóng."
        ],
        kieng_ky: "Người âm hư hỏa vượng, môi khô họng khát."
    },
    {
        stt: 142,
        ten: "Cháo Hải Mã Nhục Thung Dung",
        nhom: "Bổ thận & Tráng dương",
        cong_dung: "Ôn thận tráng dương, điều khí hoạt huyết, bổ tinh tủy.",
        thanh_phan: [
            { vi: "Hải mã (Cá ngựa) sấy khô", lieu: "1 cặp" },
            { vi: "Nhục thung dung", lieu: "12g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Hải mã nướng vàng tán bột. Nhục thung dung sắc lấy nước.",
        cach_lam: [
            "Nấu cháo gạo bằng nước nhục thung dung.",
            "Cháo nhừ rắc bột hải mã khuấy đều đun sôi 5 phút."
        ],
        kieng_ky: "Người bị chứng âm hư nhiệt, cảm sốt."
    },
    {
        stt: 143,
        ten: "Canh Chim Cút Hầm Câu Kỷ Tử Tỏa Dương",
        nhom: "Bổ thận & Tráng dương",
        cong_dung: "Bổ gan thận, trợ dương ích tinh, dùng cho người đau lưng mỏi gối rét tay chân.",
        thanh_phan: [
            { vi: "Chim cút", lieu: "2 con" },
            { vi: "Kỷ tử", lieu: "15g" },
            { vi: "Tỏa dương (Nấm ngọc cẩu)", lieu: "10g" }
        ],
        so_che: "Chim cút làm sạch xào sơ.",
        cach_lam: [
            "Chưng cách thủy chim cút và dược liệu trong 60 phút."
        ],
        kieng_ky: "Người bị táo bón, đái dắt do nhiệt."
    },
    {
        stt: 144,
        ten: "Cháo Thận Dê Hầm Ba Kích",
        nhom: "Bổ thận & Tráng dương",
        cong_dung: "Bổ thận khí, tráng dương gân cốt, chống lạnh nhạt sinh lý.",
        thanh_phan: [
            { vi: "Thận dê", lieu: "1 cặp" },
            { vi: "Ba kích tím (bỏ lõi)", lieu: "15g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Thận dê bổ đôi cạo màng trắng hôi rửa rượu gừng.",
        cach_lam: [
            "Ninh ba kích lấy nước nấu cháo với thận dê thái lát."
        ],
        kieng_ky: "Người sốt hỏa thịnh, đại tiện táo."
    },
    {
        stt: 145,
        ten: "Canh Ngầu Pín Hầm Nhục Thung Dung",
        nhom: "Bổ thận & Tráng dương",
        cong_dung: "Đại bổ thận dương, ích tinh huyết, săn chắc thể lực.",
        thanh_phan: [
            { vi: "Pín bò", lieu: "200g" },
            { vi: "Nhục thung dung", lieu: "15g" },
            { vi: "Đỗ trọng", lieu: "12g" }
        ],
        so_che: "Pín bò làm sạch thái khúc.",
        cach_lam: [
            "Hầm pín bò cùng các vị thuốc 90 phút cho mềm giòn."
        ],
        kieng_ky: "Người bị bệnh gút cấp, mỡ máu cao."
    },
    {
        stt: 146,
        ten: "Cháo Bổ Thận Nhục Thung Dung Đỗ Trọng",
        nhom: "Bổ thận & Tráng dương",
        cong_dung: "Ôn thận trợ dương, nhuận tràng thông tiện nhẹ.",
        thanh_phan: [
            { vi: "Nhục thung dung", lieu: "15g" },
            { vi: "Đỗ trọng", lieu: "10g" },
            { vi: "Thịt lợn nạc", lieu: "80g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Sắc hai vị thuốc lấy nước đặc.",
        cach_lam: [
            "Dùng nước thuốc ninh gạo và thịt nạc thành cháo nhừ."
        ],
        kieng_ky: "Người đại tiện phân lỏng cấp tính."
    },
    {
        stt: 147,
        ten: "Canh Tôm Nõn Hầm Dâm Dương Hoắc",
        nhom: "Bổ thận & Tráng dương",
        cong_dung: "Bổ thận tráng dương, ấm lưng gối, tăng dồi dào sinh lực.",
        thanh_phan: [
            { vi: "Tôm nõn tươi", lieu: "150g" },
            { vi: "Dâm dương hoắc", lieu: "10g" },
            { vi: "Gừng tươi", lieu: "2 lát" }
        ],
        so_che: "Dâm dương hoắc sắc lấy nước lọc.",
        cach_lam: [
            "Dùng nước dược liệu nấu tôm nõn đun sôi 15 phút."
        ],
        kieng_ky: "Người dị ứng tôm hải sản."
    },
    {
        stt: 148,
        ten: "Cháo Thỏ Ty Tử Hạt Kê",
        nhom: "Bổ thận & Tráng dương",
        cong_dung: "Bổ thận cố tinh, dưỡng gan sáng mắt.",
        thanh_phan: [
            { vi: "Thỏ ty tử", lieu: "15g" },
            { vi: "Hạt kê", lieu: "60g" }
        ],
        so_che: "Thỏ ty tử giã dập sắc lấy nước đặc.",
        cach_lam: [
            "Ninh hạt kê bằng nước thỏ ty tử thành cháo."
        ],
        kieng_ky: "Người bị táo bón, bí tiểu do nhiệt."
    },
    {
        stt: 149,
        ten: "Canh Thịt Dê Hầm Tiên Mao Ba Kích",
        nhom: "Bổ thận & Tráng dương",
        cong_dung: "Ôn thận tráng dương, trừ phong thấp lạnh gân cốt.",
        thanh_phan: [
            { vi: "Thịt dê", lieu: "250g" },
            { vi: "Tiên mao (Sâm cau)", lieu: "10g" },
            { vi: "Ba kích", lieu: "10g" }
        ],
        so_che: "Thịt dê thái khối chần nước gừng.",
        cach_lam: [
            "Ninh thịt dê cùng thuốc bắc 60 phút."
        ],
        kieng_ky: "Người thể tạng nhiệt hư hỏa."
    },
    {
        stt: 150,
        ten: "Cháo Hải Sâm Nhục Thung Dung",
        nhom: "Bổ thận & Tráng dương",
        cong_dung: "Tư âm tráng dương, bổ tinh huyết hư tổn.",
        thanh_phan: [
            { vi: "Hải sâm", lieu: "60g" },
            { vi: "Nhục thung dung", lieu: "12g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Hải sâm thái nhỏ xào thơm.",
        cach_lam: [
            "Nấu cháo gạo bằng nước sắc nhục thung dung rồi thả hải sâm vào."
        ],
        kieng_ky: "Người bị đờm thấp trệ bụng trướng."
    },
    {
        stt: 151,
        ten: "Canh Cật Lợn Hầm Thỏ Ty Tử Kỷ Tử",
        nhom: "Bổ thận & Tráng dương",
        cong_dung: "Bổ thận ích tinh, chữa đau lưng mỏi gối di tinh.",
        thanh_phan: [
            { vi: "Cật lợn", lieu: "1 cặp" },
            { vi: "Thỏ ty tử", lieu: "12g" },
            { vi: "Kỷ tử", lieu: "12g" }
        ],
        so_che: "Cật lợn rửa sạch cạo màng thái khía.",
        cach_lam: [
            "Chưng cách thủy cật lợn cùng vị thuốc trong 50 phút."
        ],
        kieng_ky: "Người bị mỡ máu quá cao."
    },
    {
        stt: 152,
        ten: "Cháo Thận Bò Hầm Ba Kích",
        nhom: "Bổ thận & Tráng dương",
        cong_dung: "Bổ thận tráng dương, cường gân cốt.",
        thanh_phan: [
            { vi: "Thận bò", lieu: "150g" },
            { vi: "Ba kích tím", lieu: "12g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Thận bò làm sạch thái mỏng.",
        cach_lam: [
            "Sắc ba kích lấy nước ninh cháo gạo và thận bò."
        ],
        kieng_ky: "Người âm hư hỏa vượng."
    },
    {
        stt: 153,
        ten: "Canh Đuôi Bò Hầm Nhục Thung Dung Đỗ Trọng",
        nhom: "Bổ thận & Tráng dương",
        cong_dung: "Bổ thận tráng dương, kiện thắt lưng xương sống.",
        thanh_phan: [
            { vi: "Đuôi bò", lieu: "300g" },
            { vi: "Nhục thung dung", lieu: "15g" },
            { vi: "Đỗ trọng", lieu: "15g" }
        ],
        so_che: "Đuôi bò thui cạo sạch chặt khúc.",
        cach_lam: [
            "Hầm đuôi bò và thuốc bắc trong 90 phút cho nhừ giòn."
        ],
        kieng_ky: "Người bị bệnh gút, tiêu chảy."
    },
    {
        stt: 154,
        ten: "Cháo Tỏa Dương Hạt Sen",
        nhom: "Bổ thận & Tráng dương",
        cong_dung: "Bổ thận trợ dương, nhuận huyết tinh.",
        thanh_phan: [
            { vi: "Tỏa dương", lieu: "12g" },
            { vi: "Hạt sen", lieu: "30g" },
            { vi: "Gạo tẻ", lieu: "70g" }
        ],
        so_che: "Tỏa dương sắc lấy nước bọc.",
        cach_lam: [
            "Dùng nước tỏa dương ninh hạt sen và gạo thành cháo."
        ],
        kieng_ky: "Người hay bị nhiệt miệng tiêu chảy."
    },
    {
        stt: 155,
        ten: "Canh Gà Hầm Bổ Cốt Toái Ba Kích",
        nhom: "Bổ thận & Tráng dương",
        cong_dung: "Bổ thận tráng dương, nhanh liền xương cốt suy yếu.",
        thanh_phan: [
            { vi: "Thịt gà ta", lieu: "300g" },
            { vi: "Bổ cốt toái", lieu: "12g" },
            { vi: "Ba kích", lieu: "10g" }
        ],
        so_che: "Gà chặt miếng.",
        cach_lam: [
            "Hầm gà và các vị thuốc 50 phút."
        ],
        kieng_ky: "Người âm hư hỏa vượng."
    },
    {
        stt: 156,
        ten: "Cháo Tôm Nõn Dâm Dương Hoắc",
        nhom: "Bổ thận & Tráng dương",
        cong_dung: "Ấm thận trợ dương, giảm sợ lạnh tay chân.",
        thanh_phan: [
            { vi: "Tôm nõn", lieu: "80g" },
            { vi: "Dâm dương hoắc", lieu: "10g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Sắc dâm dương hoắc lấy nước.",
        cach_lam: [
            "Lấy nước dược liệu nấu cháo tôm nõn."
        ],
        kieng_ky: "Người dị ứng hải sản."
    },
    {
        stt: 157,
        ten: "Canh Chim Bồ Câu Hầm Thỏ Ty Tử",
        nhom: "Bổ thận & Tráng dương",
        cong_dung: "Bổ thận ích tinh, ấm bao tử và lưng mỏi.",
        thanh_phan: [
            { vi: "Chim bồ câu", lieu: "1 con" },
            { vi: "Thỏ ty tử", lieu: "15g" }
        ],
        so_che: "Bồ câu mổ sạch.",
        cach_lam: [
            "Bọc thỏ ty tử vào vải gạc cho vào bụng bồ câu chưng cách thủy 70 phút."
        ],
        kieng_ky: "Người sốt do vi trùng."
    },
    {
        stt: 158,
        ten: "Cháo Hải Mã Kỷ Tử",
        nhom: "Bổ thận & Tráng dương",
        cong_dung: "Tráng dương bổ tinh, dồi dào sức sống.",
        thanh_phan: [
            { vi: "Bột hải mã", lieu: "3g" },
            { vi: "Kỷ tử", lieu: "15g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Kỷ tử ngâm rửa.",
        cach_lam: [
            "Ninh cháo gạo kỷ tử, cháo chín rắc bột hải mã đun sôi thêm 3 phút."
        ],
        kieng_ky: "Phụ nữ có thai."
    },
    {
        stt: 159,
        ten: "Canh Cật Dê Hầm Ba Kích Đỗ Trọng",
        nhom: "Bổ thận & Tráng dương",
        cong_dung: "Bổ thận khí, mạnh lưng gối sinh lực.",
        thanh_phan: [
            { vi: "Cật dê", lieu: "1 cặp" },
            { vi: "Ba kích", lieu: "12g" },
            { vi: "Đỗ trọng", lieu: "12g" }
        ],
        so_che: "Cật dê rửa sạch rượu gừng.",
        cach_lam: [
            "Hầm cật dê cùng vị thuốc 50 phút."
        ],
        kieng_ky: "Người bị bệnh mỡ máu cao."
    },
    {
        stt: 160,
        ten: "Cháo Nhục Thung Dung Thịt Nạc",
        nhom: "Bổ thận & Tráng dương",
        cong_dung: "Bổ thận tráng dương, nhuận tràng dễ tiêu.",
        thanh_phan: [
            { vi: "Nhục thung dung", lieu: "12g" },
            { vi: "Thịt lợn nạc băm", lieu: "100g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Sắc nhục thung dung lấy nước bọc.",
        cach_lam: [
            "Dùng nước thuốc nấu cháo thịt nạc băm."
        ],
        kieng_ky: "Người bị tiêu chảy phân lỏng."
    },
    {
    stt: 221,
    ten: "Canh Đuôi Hươu Hầm Sâm Cau Nhục Thung Dung",
    nhom: "Bổ thận & Tráng dương",
    cong_dung: "Ôn thận tráng dương, cường gân cốt, ích tinh tủy, dùng cho người suy giảm sinh lý, đau lưng.",
    thanh_phan: [
        { vi: "Đuôi hươu", lieu: "150g" },
        { vi: "Sâm cau (Tiên mao)", lieu: "12g" },
        { vi: "Nhục thung dung", lieu: "12g" },
        { vi: "Gừng tươi", lieu: "3 lát" }
    ],
    so_che: "Đuôi hươu thui cạo sạch lông, chặt khúc, chần qua nước gừng rượu.",
    cach_lam: [
        "Cho đuôi hươu và dược liệu vào thố gốm với 1 lít nước.",
        "Ninh lửa nhỏ hoặc chưng cách thủy trong 90 phút.",
        "Nêm ít muối tinh vừa ăn rồi dùng nóng."
    ],
    kieng_ky: "Người âm hư hỏa vượng, môi khô khát nước, huyết áp cao kịch phát."
},
{
    stt: 222,
    ten: "Cháo Nhung Hươu Kỷ Tử",
    nhom: "Bổ thận & Tráng dương",
    cong_dung: "Đại bổ tinh huyết, tráng dương cố tinh, cải thiện cơ thể mệt mỏi suy nhược.",
    thanh_phan: [
        { vi: "Nhung hươu thái lát", lieu: "5g" },
        { vi: "Kỷ tử", lieu: "10g" },
        { vi: "Gạo tẻ", lieu: "80g" }
    ],
    so_che: "Nhung hươu băm nhỏ. Gạo vo sạch.",
    cach_lam: [
        "Ninh gạo và kỷ tử thành cháo nhừ.",
        "Cho nhung hươu vào đun tiếp 10 phút trên lửa nhỏ, khuấy đều ăn nóng."
    ],
    kieng_ky: "Người bị cảm sốt, viêm nhiễm cấp tính, người thể tạng quá nhiệt."
},
{
    stt: 223,
    ten: "Canh Chim Cút Hầm Dâm Dương Hoắc Tiên Mao",
    nhom: "Bổ thận & Tráng dương",
    cong_dung: "Ôn kinh trợ dương, ích tinh tủy, trị liệt dương tay chân lạnh.",
    thanh_phan: [
        { vi: "Chim cút", lieu: "2 con" },
        { vi: "Dâm dương hoắc", lieu: "10g" },
        { vi: "Tiên mao", lieu: "10g" }
    ],
    so_che: "Chim cút mổ bỏ tạng, rửa sạch rượu gừng. Dược liệu bọc túi vải gạc.",
    cach_lam: [
        "Hầm chim cút cùng túi thuốc trong 60 phút cho thịt mềm nhừ.",
        "Nêm chút gia vị vừa ăn dùng nóng."
    ],
    kieng_ky: "Người bị tiểu dắt, đại tiện táo bón do âm hư."
},
{
    stt: 224,
    ten: "Cháo Thận Lợn Hầm Cốt Toái Bổ Thận",
    nhom: "Bổ thận & Tráng dương",
    cong_dung: "Bổ thận tráng dương, mạnh gân cốt, chữa đau lưng mỏi gối.",
    thanh_phan: [
        { vi: "Thận lợn (Cật lợn)", lieu: "1 cặp" },
        { vi: "Bổ cốt toái", lieu: "12g" },
        { vi: "Gạo tẻ", lieu: "80g" }
    ],
    so_che: "Thận lợn bổ đôi cạo sạch màng trắng hôi, xát muối rượu. Bổ cốt toái sắc lấy nước.",
    cach_lam: [
        "Dùng nước bổ cốt toái nấu cháo gạo và thận lợn thái mỏng.",
        "Cháo chín nhừ nêm gia vị ăn nóng."
    ],
    kieng_ky: "Người có thể tạng hư hỏa, mụn nhọt, rêu lưỡi vàng."
},
{
    stt: 225,
    ten: "Canh Tôm Hùm Nấu Hải Mã Dâm Dương Hoắc",
    nhom: "Bổ thận & Tráng dương",
    cong_dung: "Đại bổ thận dương, tráng sinh lực, trợ khí huyết dồi dào.",
    thanh_phan: [
        { vi: "Thịt tôm hùm", lieu: "150g" },
        { vi: "Hải mã (Cá ngựa)", lieu: "1 cặp" },
        { vi: "Dâm dương hoắc", lieu: "10g" }
    ],
    so_che: "Hải mã nướng vàng sơ chế. Dâm dương hoắc rửa sạch.",
    cach_lam: [
        "Nấu hải mã và dâm dương hoắc lấy nước dùng.",
        "Thả thịt tôm hùm vào nước dùng đun chín tới trong 15 phút."
    ],
    kieng_ky: "Người bị dị ứng hải sản, dị ứng đạm tôm."
},
{
    stt: 226,
    ten: "Cháo Tỏa Dương Nhục Thung Dung Dưỡng Tủy",
    nhom: "Bổ thận & Tráng dương",
    cong_dung: "Bổ thận tráng dương, nhuận huyết ích tinh, trị di tinh liệt dương.",
    thanh_phan: [
        { vi: "Tỏa dương (Nấm ngọc cẩu)", lieu: "12g" },
        { vi: "Nhục thung dung", lieu: "12g" },
        { vi: "Gạo tẻ", lieu: "80g" }
    ],
    so_che: "Sắc tỏa dương và nhục thung dung lấy nước đặc.",
    cach_lam: [
        "Dùng nước thuốc ninh gạo thành cháo chín nhừ.",
        "Thêm ít muối hoặc đường đỏ tùy khẩu vị."
    ],
    kieng_ky: "Người bị tiêu chảy cấp, âm hư hỏa vượng."
},
{
    stt: 227,
    ten: "Canh Thịt Dê Hầm Tục Đoán Ba Kích",
    nhom: "Bổ thận & Tráng dương",
    cong_dung: "Ôn thận tráng dương, cường gân nối xương, trị đau lưng mỏi gối.",
    thanh_phan: [
        { vi: "Thịt dê", lieu: "250g" },
        { vi: "Tục đoán", lieu: "12g" },
        { vi: "Ba kích tím", lieu: "12g" }
    ],
    so_che: "Thịt dê thái miếng chần nước sôi gừng sả.",
    cach_lam: [
        "Ninh thịt dê cùng tục đoán và ba kích trong 60 phút.",
        "Nêm chút gia vị vừa dùng."
    ],
    kieng_ky: "Người cao huyết áp kịch phát, nhiệt thịnh."
},
{
    stt: 228,
    ten: "Cháo Cá Chép Hầm Thỏ Ty Tử Bổ Thận",
    nhom: "Bổ thận & Tráng dương",
    cong_dung: "Bổ thận cố tinh, kiện tỳ an thai, ấm thận dương.",
    thanh_phan: [
        { vi: "Cá chép", lieu: "300g" },
        { vi: "Thỏ ty tử", lieu: "15g" },
        { vi: "Gạo tẻ", lieu: "80g" }
    ],
    so_che: "Cá chép làm sạch. Thỏ ty tử bọc vải gạc sắc lấy nước.",
    cach_lam: [
        "Dùng nước thỏ ty tử ninh cá chép và gạo thành cháo.",
        "Gỡ thịt cá bỏ xương, khuấy đều ăn ấm."
    ],
    kieng_ky: "Người bị chứng hỏa nhiệt táo bón."
},
{
    stt: 229,
    ten: "Canh Gà Ác Hầm Hải Mã Câu Kỷ Tử",
    nhom: "Bổ thận & Tráng dương",
    cong_dung: "Tư bổ can thận, ích tinh trợ dương, tăng thể lực sung mãn.",
    thanh_phan: [
        { vi: "Gà ác", lieu: "1 con (400g)" },
        { vi: "Hải mã sấy khô", lieu: "1 cặp" },
        { vi: "Kỷ tử", lieu: "12g" }
    ],
    so_che: "Gà ác mổ sạch, xát muối rửa gừng.",
    cach_lam: [
        "Cho hải mã và kỷ tử vào bụng gà ác.",
        "Chưng cách thủy thố gà trong 75 phút."
    ],
    kieng_ky: "Phụ nữ mang thai, người bị sốt do cảm mạo."
},
{
    stt: 230,
    ten: "Cháo Đuôi Bò Hầm Tiên Mao Nhục Thung Dung",
    nhom: "Bổ thận & Tráng dương",
    cong_dung: "Bổ thận tráng dương, mạnh thắt lưng gối, ích tinh huyết.",
    thanh_phan: [
        { vi: "Đuôi bò", lieu: "200g" },
        { vi: "Tiên mao", lieu: "10g" },
        { vi: "Nhục thung dung", lieu: "10g" },
        { vi: "Gạo tẻ", lieu: "80g" }
    ],
    so_che: "Đuôi bò thui cạo sạch, chặt khúc chần sơ.",
    cach_lam: [
        "Hầm đuôi bò cùng các vị thuốc 60 phút.",
        "Cho gạo vào ninh tiếp thành cháo nhừ."
    ],
    kieng_ky: "Người bị gút cấp, mỡ máu cao, tiêu chảy."
},
{
    stt: 231,
    ten: "Canh Cật Bò Hầm Dâm Dương Hoắc Ba Kích",
    nhom: "Bổ thận & Tráng dương",
    cong_dung: "Bổ thận khí, tráng dương cốt, khu phong thấp hàn tê.",
    thanh_phan: [
        { vi: "Cật bò (Thận bò)", lieu: "150g" },
        { vi: "Dâm dương hoắc", lieu: "12g" },
        { vi: "Ba kích tím", lieu: "12g" }
    ],
    so_che: "Cật bò bổ đôi lột màng trắng, khía vảy rồng rửa rượu.",
    cach_lam: [
        "Hầm cật bò với túi thuốc bắc 50 phút.",
        "Ăn nóng kèm chút gia vị."
    ],
    kieng_ky: "Người âm hư hỏa vượng, sốt cao."
},
{
    stt: 232,
    ten: "Cháo Bồ Câu Hầm Tỏa Dương Ba Kích",
    nhom: "Bổ thận & Tráng dương",
    cong_dung: "Bổ ngũ tạng, trợ dương ích tinh, trị suy nhược sinh lý.",
    thanh_phan: [
        { vi: "Chim bồ câu", lieu: "1 con" },
        { vi: "Tỏa dương", lieu: "10g" },
        { vi: "Ba kích", lieu: "10g" },
        { vi: "Gạo tẻ", lieu: "70g" }
    ],
    so_che: "Bồ câu mổ sạch, vặt lông.",
    cach_lam: [
        "Ninh bồ câu và vị thuốc 45 phút rồi trút gạo vào ninh nhừ thành cháo."
    ],
    kieng_ky: "Người đang bị viêm cấp tính, sốt phát ban."
},
{
    stt: 233,
    ten: "Canh Ngầu Pín Hầm Sâm Cau Kỷ Tử",
    nhom: "Bổ thận & Tráng dương",
    cong_dung: "Tráng dương bổ tinh, dồi dào sức sống, giảm lạnh lưng gối.",
    thanh_phan: [
        { vi: "Pín bò", lieu: "150g" },
        { vi: "Sâm cau (Tiên mao)", lieu: "12g" },
        { vi: "Kỷ tử", lieu: "12g" }
    ],
    so_che: "Pín bò ngâm nước nóng cạo rửa sạch, thái đoạn ngắn.",
    cach_lam: [
        "Hầm pín bò cùng sâm cau và kỷ tử trong 90 phút cho giòn mềm."
    ],
    kieng_ky: "Người thể tạng nhiệt, bị táo bón kịch liệt."
},
{
    stt: 234,
    ten: "Cháo Nhung Hươu Hoài Sơn",
    nhom: "Bổ thận & Tráng dương",
    cong_dung: "Bổ thận kiện tỳ, ích tinh huyết, tăng thể lực chống mệt mỏi.",
    thanh_phan: [
        { vi: "Nhung hươu thái lát", lieu: "4g" },
        { vi: "Hoài sơn (Sơn dược)", lieu: "20g" },
        { vi: "Gạo tẻ", lieu: "80g" }
    ],
    so_che: "Hoài sơn thái nhỏ. Nhung hươu băm nhẹ.",
    cach_lam: [
        "Ninh gạo và hoài sơn thành cháo sánh nhừ.",
        "Thả nhung hươu vào đun sôi lại 10 phút."
    ],
    kieng_ky: "Người bị tăng huyết áp chưa kiểm soát."
},
{
    stt: 235,
    ten: "Canh Thỏ Hầm Ba Kích Đỗ Trọng",
    nhom: "Bổ thận & Tráng dương",
    cong_dung: "Bổ can thận, tráng dương kiên cốt, giảm mỏi thắt lưng.",
    thanh_phan: [
        { vi: "Thịt thỏ", lieu: "200g" },
        { vi: "Ba kích tím", lieu: "12g" },
        { vi: "Đỗ trọng", lieu: "12g" }
    ],
    so_che: "Thịt thỏ làm sạch, chặt khối vừa ăn.",
    cach_lam: [
        "Hầm thịt thỏ cùng thuốc bắc trong 50 phút."
    ],
    kieng_ky: "Người âm hư nội nhiệt, miệng khô đắng."
},
{
    stt: 236,
    ten: "Cháo Cật Lợn Hầm Tiên Mao Nhục Thung Dung",
    nhom: "Bổ thận & Tráng dương",
    cong_dung: "Ôn thận trợ dương, nhuận tràng cố tinh.",
    thanh_phan: [
        { vi: "Cật lợn", lieu: "1 cặp" },
        { vi: "Tiên mao", lieu: "10g" },
        { vi: "Nhục thung dung", lieu: "10g" },
        { vi: "Gạo tẻ", lieu: "80g" }
    ],
    so_che: "Cật lợn sơ chế sạch. Dược liệu sắc lấy nước.",
    cach_lam: [
        "Nấu cháo gạo bằng nước thuốc, cháo chín thả cật lợn thái mỏng đun tái chín."
    ],
    kieng_ky: "Người bị đái rắt do nhiệt."
},
{
    stt: 237,
    ten: "Canh Thịt Dê Hầm Sơn Thù Du Thỏ Ty Tử",
    nhom: "Bổ thận & Tráng dương",
    cong_dung: "Ôn thận cố tinh, bổ thận dương, giảm di tinh tiểu đêm.",
    thanh_phan: [
        { vi: "Thịt dê", lieu: "200g" },
        { vi: "Sơn thù du", lieu: "10g" },
        { vi: "Thỏ ty tử", lieu: "12g" }
    ],
    so_che: "Thịt dê chần rượu gừng khử mùi hôi.",
    cach_lam: [
        "Ninh thịt dê cùng túi dược liệu trong 60 phút."
    ],
    kieng_ky: "Người bị đại tiện táo kết."
},
{
    stt: 238,
    ten: "Cháo Hải Sâm Ba Kích Bổ Thận",
    nhom: "Bổ thận & Tráng dương",
    cong_dung: "Bổ thận ích tinh, tráng dương dồi dào sinh lực.",
    thanh_phan: [
        { vi: "Hải sâm ngâm nở", lieu: "60g" },
        { vi: "Ba kích tím", lieu: "12g" },
        { vi: "Gạo tẻ", lieu: "80g" }
    ],
    so_che: "Hải sâm thái hạt lựu xào sơ. Ba kích sắc lấy nước.",
    cach_lam: [
        "Nấu cháo bằng nước ba kích rồi cho hải sâm vào đun tiếp 15 phút."
    ],
    kieng_ky: "Người tỳ vị trệ tiêu chảy."
},
{
    stt: 239,
    ten: "Canh Chân Giò Hầm Dâm Dương Hoắc Bổ Cốt Toái",
    nhom: "Bổ thận & Tráng dương",
    cong_dung: "Tráng dương cường cốt, thông kinh hoạt lạc.",
    thanh_phan: [
        { vi: "Móng giò lợn", lieu: "1 cái" },
        { vi: "Dâm dương hoắc", lieu: "10g" },
        { vi: "Bổ cốt toái", lieu: "12g" }
    ],
    so_che: "Móng giò cạo sạch chặt khúc.",
    cach_lam: [
        "Hầm móng giò và các vị thuốc trong 60 phút."
    ],
    kieng_ky: "Người mỡ máu quá cao."
},
{
    stt: 240,
    ten: "Cháo Thỏ Ty Tử Nhục Thung Dung Thịt Dê",
    nhom: "Bổ thận & Tráng dương",
    cong_dung: "Đại bổ thận dương, ấm bao tử, sinh tinh tủy.",
    thanh_phan: [
        { vi: "Thịt dê băm", lieu: "100g" },
        { vi: "Thỏ ty tử", lieu: "10g" },
        { vi: "Nhục thung dung", lieu: "10g" },
        { vi: "Gạo tẻ", lieu: "80g" }
    ],
    so_che: "Thỏ ty tử và nhục thung dung sắc lấy nước.",
    cach_lam: [
        "Dùng nước thuốc nấu cháo gạo và thịt dê băm chín nhừ."
    ],
    kieng_ky: "Người bị thực nhiệt, âm hư hỏa vượng."
},
    // ==========================================
    // NHÓM 9: DƯỠNG NHAN & NHUẬN TRÀNG (STT 161 - 180)
    // ==========================================
    {
        stt: 161,
        ten: "Chè Mủ Trôm Tuyết Yến Hạt Bát Bửu",
        nhom: "Dưỡng nhan & Nhuận tràng",
        cong_dung: "Thanh nhiệt nhuận tràng, bổ collagen tự nhiên, đẹp da tươi trẻ.",
        thanh_phan: [
            { vi: "Tuyết yến (ngâm nở)", lieu: "10g" },
            { vi: "Mủ trôm (ngâm nở)", lieu: "10g" },
            { vi: "Hạt sen", lieu: "30g" },
            { vi: "Táo đỏ", lieu: "5 quả" },
            { vi: "Đường phèn", lieu: "30g" }
        ],
        so_che: "Tuyết yến và mủ trôm ngâm nở mềm trước 12 tiếng.",
        cach_lam: [
            "Ninh hạt sen và táo đỏ mềm.",
            "Cho đường phèn, tuyết yến, mủ trôm vào khuấy đun sôi lại 3 phút tắt bếp."
        ],
        kieng_ky: "Người đang bị đi ngoài tiêu chảy, phụ nữ mang thai 3 tháng đầu."
    },
    {
        stt: 162,
        ten: "Cháo Mừng Bách Hợp Mộc Nhĩ Trắng",
        nhom: "Dưỡng nhan & Nhuận tràng",
        cong_dung: "Tư âm nhuận phế, thanh ruột thông tiện, mượt da.",
        thanh_phan: [
            { vi: "Mộc nhĩ trắng (Ngân nhĩ)", lieu: "10g" },
            { vi: "Bách hợp", lieu: "15g" },
            { vi: "Gạo tẻ", lieu: "70g" },
            { vi: "Đường phèn", lieu: "15g" }
        ],
        so_che: "Ngân nhĩ ngâm nở xé vụn.",
        cach_lam: [
            "Ninh bách hợp, ngân nhĩ và gạo thành cháo sánh mịn nhẹ."
        ],
        kieng_ky: "Người bị tiêu chảy hư hàn."
    },
    {
        stt: 163,
        ten: "Canh Thịt Nạc Hầm Mộc Nhĩ Đen Vừng Đen",
        nhom: "Dưỡng nhan & Nhuận tràng",
        cong_dung: "Bổ thận dưỡng huyết, nhuận tràng chống táo bón, đen tóc.",
        thanh_phan: [
            { vi: "Thịt lợn nạc", lieu: "150g" },
            { vi: "Mộc nhĩ đen", lieu: "15g" },
            { vi: "Vừng đen (Mè đen) rang", lieu: "20g" }
        ],
        so_che: "Mộc nhĩ ngâm nở. Thịt nạc thái miếng.",
        cach_lam: [
            "Ninh thịt nạc và mộc nhĩ 40 phút, rắc vừng đen vào trước khi dùng."
        ],
        kieng_ky: "Người bị tiêu chảy dai dẳng."
    },
    {
        stt: 164,
        ten: "Chè Nhựa Đào Tuyết Yến Táo Đỏ",
        nhom: "Dưỡng nhan & Nhuận tràng",
        cong_dung: "Tư âm dưỡng nhan, thông ruột nhuận tràng, mờ vết thâm.",
        thanh_phan: [
            { vi: "Nhựa đào ngâm nở", lieu: "15g" },
            { vi: "Tuyết yến ngâm nở", lieu: "10g" },
            { vi: "Táo đỏ", lieu: "6 quả" },
            { vi: "Kỷ tử", lieu: "10g" }
        ],
        so_che: "Nhựa đào rửa sạch tạp chất sau khi ngâm 12 giờ.",
        cach_lam: [
            "Nấu nhựa đào, táo đỏ, kỷ tử 20 phút rồi cho tuyết yến và đường phèn vào đun sôi lại."
        ],
        kieng_ky: "Phụ nữ mang thai, người bị lạnh bụng tiêu chảy."
    },
    {
        stt: 165,
        ten: "Cháo Vừng Đen Hà Thủ Ô",
        nhom: "Dưỡng nhan & Nhuận tràng",
        cong_dung: "Bổ huyết bổ thận, mượt tóc xanh tóc, nhuận tràng kiên trì.",
        thanh_phan: [
            { vi: "Vừng đen sao thơm", lieu: "30g" },
            { vi: "Hà thủ ô đỏ", lieu: "15g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Hà thủ ô sắc lấy nước lọc bã.",
        cach_lam: [
            "Lấy nước hà thủ ô ninh gạo và vừng đen xay mịn thành cháo nhừ."
        ],
        kieng_ky: "Người tỳ hư đại tiện phân lỏng."
    },
    {
        stt: 166,
        ten: "Canh Củ Sen Hầm Táo Đỏ Kỷ Tử Dưỡng Nhan",
        nhom: "Dưỡng nhan & Nhuận tràng",
        cong_dung: "Bổ huyết thanh nhiệt, mịn da tươi tắn, dịu táo bón.",
        thanh_phan: [
            { vi: "Củ sen", lieu: "200g" },
            { vi: "Táo đỏ", lieu: "6 quả" },
            { vi: "Kỷ tử", lieu: "10g" },
            { vi: "Sườn lợn", lieu: "200g" }
        ],
        so_che: "Củ sen gọt vỏ thái lát. Sườn chần xát sạch.",
        cach_lam: [
            "Ninh sườn và củ sen 50 phút, cho táo đỏ kỷ tử vào đun thêm 10 phút."
        ],
        kieng_ky: "Người đầy trướng bụng do hàn."
    },
    {
        stt: 167,
        ten: "Chè Hạt Sen Tuyết Nhĩ Long Nhãn",
        nhom: "Dưỡng nhan & Nhuận tràng",
        cong_dung: "An thần dưỡng nhan, nhuận ruột sinh tân dịch.",
        thanh_phan: [
            { vi: "Hạt sen", lieu: "50g" },
            { vi: "Tuyết nhĩ", lieu: "10g" },
            { vi: "Long nhãn", lieu: "20g" }
        ],
        so_che: "Tuyết nhĩ ngâm mềm cắt vụn.",
        cach_lam: [
            "Ninh hạt sen mềm, thả tuyết nhĩ long nhãn đun 15 phút với đường phèn."
        ],
        kieng_ky: "Người bệnh tiểu đường."
    },
    {
        stt: 168,
        ten: "Cháo Hạt Bút Hỏa Mộc Nhĩ Trắng",
        nhom: "Dưỡng nhan & Nhuận tràng",
        cong_dung: "Bổ âm nhuận phế, làm sạch ruột sáng da.",
        thanh_phan: [
            { vi: "Mộc nhĩ trắng", lieu: "12g" },
            { vi: "Gạo nếp", lieu: "80g" },
            { vi: "Đường phèn", lieu: "20g" }
        ],
        so_che: "Mộc nhĩ ngâm xé nhỏ.",
        cach_lam: [
            "Ninh mộc nhĩ trắng và gạo nếp thành cháo sánh mịn."
        ],
        kieng_ky: "Người ho đờm lỏng."
    },
    {
        stt: 169,
        ten: "Canh Yến Sào Nhuận Tràng Tuyết Nhĩ",
        nhom: "Dưỡng nhan & Nhuận tràng",
        cong_dung: "Đại bổ vinh vệ, hồng hào sắc mặt, nhuận tràng tiêu hóa tốt.",
        thanh_phan: [
            { vi: "Yến sào ngâm nở", lieu: "10g" },
            { vi: "Tuyết nhĩ", lieu: "10g" },
            { vi: "Táo đỏ", lieu: "5 quả" }
        ],
        so_che: "Tuyết nhĩ xé nhỏ.",
        cach_lam: [
            "Chưng cách thủy yến, tuyết nhĩ, táo đỏ trong 30 phút."
        ],
        kieng_ky: "Người cảm sốt cấp tính."
    },
    {
        stt: 170,
        ten: "Chè Bách Hợp Hạt Sen Mật Ong",
        nhom: "Dưỡng nhan & Nhuận tràng",
        cong_dung: "Dưỡng tâm mịn da, nhuận ruột trị táo bón nhẹ.",
        thanh_phan: [
            { vi: "Bách hợp tươi", lieu: "30g" },
            { vi: "Hạt sen", lieu: "40g" },
            { vi: "Mật ong", lieu: "20ml" }
        ],
        so_che: "Hạt sen ninh mềm.",
        cach_lam: [
            "Nấu bách hợp và hạt sen chín nhừ, tắt bếp hòa mật ong."
        ],
        kieng_ky: "Trẻ em dưới 1 tuổi."
    },
    {
        stt: 171,
        ten: "Cháo Khoai Lang Vừng Đen",
        nhom: "Dưỡng nhan & Nhuận tràng",
        cong_dung: "Nhuận tràng thông tiện, kiện tỳ thải độc da.",
        thanh_phan: [
            { vi: "Khoai lang gọt vỏ thái hạt lựu", lieu: "100g" },
            { vi: "Vừng đen sao", lieu: "20g" },
            { vi: "Gạo tẻ", lieu: "60g" }
        ],
        so_che: "Khoai lang thái nhỏ.",
        cach_lam: [
            "Nấu gạo, khoai lang và vừng đen thành cháo nhừ ăn sáng."
        ],
        kieng_ky: "Người đang bị tiêu chảy."
    },
    {
        stt: 172,
        ten: "Canh Bí Đỏ Hầm Đậu Đen Vừng Đen",
        nhom: "Dưỡng nhan & Nhuận tràng",
        cong_dung: "Bổ khí huyết, nhuận ruột dưỡng tóc.",
        thanh_phan: [
            { vi: "Bí đỏ", lieu: "150g" },
            { vi: "Đậu đen", lieu: "40g" },
            { vi: "Vừng đen", lieu: "15g" }
        ],
        so_che: "Đậu đen ngâm mềm.",
        cach_lam: [
            "Ninh đậu đen mềm cho bí đỏ và vừng đen vào đun thêm 20 phút."
        ],
        kieng_ky: "Người bị đầy bụng do tích trệ."
    },
    {
        stt: 173,
        ten: "Chè Mộc Nhĩ Trắng Đường Phèn Táo Đỏ",
        nhom: "Dưỡng nhan & Nhuận tràng",
        cong_dung: "Bổ âm nhuận phế, dưỡng ẩm làn da.",
        thanh_phan: [
            { vi: "Mộc nhĩ trắng", lieu: "15g" },
            { vi: "Táo đỏ", lieu: "8 quả" },
            { vi: "Đường phèn", lieu: "25g" }
        ],
        so_che: "Ngâm mộc nhĩ xé mỏng.",
        cach_lam: [
            "Ninh mộc nhĩ trắng táo đỏ 45 phút cho nhừa dẻo."
        ],
        kieng_ky: "Người đờm lạnh nhiều."
    },
    {
        stt: 174,
        ten: "Cháo Hạt Sung Nhuận Tràng",
        nhom: "Dưỡng nhan & Nhuận tràng",
        cong_dung: "Kiện tỳ khai vị, giải độc nhuận tràng trị trĩ táo bón.",
        thanh_phan: [
            { vi: "Quả sung sấy khô thái nhỏ", lieu: "30g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Sung rửa sạch.",
        cach_lam: [
            "Ninh sung cùng gạo thành cháo nhừ dùng ăn hàng ngày."
        ],
        kieng_ky: "Người tiêu chảy cấp."
    },
    {
        stt: 175,
        ten: "Canh Thịt Lợn Nạc Ninh Mộc Nhĩ Trắng Hoài Sơn",
        nhom: "Dưỡng nhan & Nhuận tràng",
        cong_dung: "Bổ tỳ tư âm, đẹp sắc mặt thanh nhẹ.",
        thanh_phan: [
            { vi: "Thịt lợn nạc", lieu: "150g" },
            { vi: "Mộc nhĩ trắng", lieu: "10g" },
            { vi: "Hoài sơn", lieu: "20g" }
        ],
        so_che: "Mộc nhĩ ngâm nở.",
        cach_lam: [
            "Ninh thịt, hoài sơn và mộc nhĩ 40 phút."
        ],
        kieng_ky: "Người bị cảm lạnh."
    },
    {
        stt: 176,
        ten: "Chè Yến Mạch Táo Đỏ Hạt Sen",
        nhom: "Dưỡng nhan & Nhuận tràng",
        cong_dung: "Bổ chất xơ, nhuận ruột giảm mỡ mịn da.",
        thanh_phan: [
            { vi: "Yến mạch cán", lieu: "50g" },
            { vi: "Táo đỏ", lieu: "5 quả" },
            { vi: "Hạt sen", lieu: "20g" }
        ],
        so_che: "Hạt sen ninh trước.",
        cach_lam: [
            "Cho yến mạch và táo đỏ vào nồi hạt sen đun thêm 15 phút."
        ],
        kieng_ky: "Người dị ứng yến mạch."
    },
    {
        stt: 177,
        ten: "Cháo Đậu Xanh Vừng Đen Nhuận Tràng",
        nhom: "Dưỡng nhan & Nhuận tràng",
        cong_dung: "Thanh nhiệt giải độc, thông tiện làm mát da.",
        thanh_phan: [
            { vi: "Đậu xanh", lieu: "40g" },
            { vi: "Vừng đen", lieu: "20g" },
            { vi: "Gạo tẻ", lieu: "60g" }
        ],
        so_che: "Đậu xanh ngâm nở.",
        cach_lam: [
            "Ninh đậu xanh, gạo và vừng đen thành cháo nhừ."
        ],
        kieng_ky: "Người tỳ vị quá lạnh."
    },
    {
        stt: 178,
        ten: "Canh Củ Cải Trắng Ninh Mộc Nhĩ Đen",
        nhom: "Dưỡng nhan & Nhuận tràng",
        cong_dung: "Thanh ruột hóa tích, nhuận tràng hạ mỡ.",
        thanh_phan: [
            { vi: "Củ cải trắng", lieu: "150g" },
            { vi: "Mộc nhĩ đen", lieu: "15g" }
        ],
        so_che: "Củ cải cắt miếng, mộc nhĩ ngâm xé.",
        cach_lam: [
            "Nấu canh đun lửa vừa 30 phút."
        ],
        kieng_ky: "Người huyết áp quá thấp."
    },
    {
        stt: 179,
        ten: "Chè Nhựa Đào Hạt Sen Kỷ Tử",
        nhom: "Dưỡng nhan & Nhuận tràng",
        cong_dung: "Dưỡng nhan tươi tắn, mịn da chống lão hóa.",
        thanh_phan: [
            { vi: "Nhựa đào ngâm nở", lieu: "15g" },
            { vi: "Hạt sen", lieu: "30g" },
            { vi: "Kỷ tử", lieu: "10g" }
        ],
        so_che: "Nhựa đào rửa kĩ bụi.",
        cach_lam: [
            "Ninh hạt sen chín cho nhựa đào kỷ tử đường phèn vào nấu 15 phút."
        ],
        kieng_ky: "Phụ nữ mang thai."
    },
    {
        stt: 180,
        ten: "Cháo Sơn Tra Vừng Đen Dưỡng Nhan",
        nhom: "Dưỡng nhan & Nhuận tràng",
        cong_dung: "Tiêu mỡ nhuận ruột, sáng da giảm tàn nhang.",
        thanh_phan: [
            { vi: "Sơn tra", lieu: "15g" },
            { vi: "Vừng đen sao", lieu: "20g" },
            { vi: "Gạo tẻ", lieu: "70g" }
        ],
        so_che: "Sơn tra sắc lấy nước bọc.",
        cach_lam: [
            "Dùng nước sơn tra ninh gạo và vừng đen thành cháo."
        ],
        kieng_ky: "Người đau dạ dày nặng do dư axit."
    },

    // ==========================================
    // NHÓM 10: TƯ ÂM & BỔ HUYẾT (STT 181 - 200)
    // ==========================================
    {
        stt: 181,
        ten: "Canh Gà Mái Hầm Thục Địa Đương Quy",
        nhom: "Tư âm & Bổ huyết",
        cong_dung: "Tư âm bổ huyết, tráng mỡ tủy, điều trị da xanh hoa mắt.",
        thanh_phan: [
            { vi: "Thịt gà mái", lieu: "350g" },
            { vi: "Thục địa", lieu: "20g" },
            { vi: "Đương quy", lieu: "12g" },
            { vi: "Bạch thược", lieu: "10g" }
        ],
        so_che: "Gà làm sạch chặt miếng. Dược liệu rửa qua.",
        cach_lam: [
            "Hầm gà và bài thuốc bắc với 1.5 lít nước trong 60 phút."
        ],
        kieng_ky: "Người bị đầy bụng tiêu chảy rêu lưỡi nhớt."
    },
    {
        stt: 182,
        ten: "Cháo A Giao Kỷ Tử",
        nhom: "Tư âm & Bổ huyết",
        cong_dung: "Tư âm dưỡng huyết, liễm hãn chỉ huyết, trị phế âm hư ho rát.",
        thanh_phan: [
            { vi: "A giao (Cao da lừa)", lieu: "10g" },
            { vi: "Kỷ tử", lieu: "12g" },
            { vi: "Gạo nếp", lieu: "80g" }
        ],
        so_che: "A giao đập nhỏ.",
        cach_lam: [
            "Ninh gạo nếp và kỷ tử thành cháo nhừ.",
            "Cho A giao vào khuấy tan hoàn toàn ăn nóng."
        ],
        kieng_ky: "Người tỳ vị hư hàn tiêu hóa kém."
    },
    {
        stt: 183,
        ten: "Canh Thịt Lợn Nạc Hầm Mạch Môn Thục Địa",
        nhom: "Tư âm & Bổ huyết",
        cong_dung: "Tư âm sinh tân, dưỡng huyết giải khát khô miệng.",
        thanh_phan: [
            { vi: "Thịt lợn nạc", lieu: "200g" },
            { vi: "Mạch môn", lieu: "15g" },
            { vi: "Thục địa", lieu: "15g" }
        ],
        so_che: "Mạch môn rút lõi. Thịt thái khối.",
        cach_lam: [
            "Ninh thịt nạc cùng vị thuốc trong 50 phút."
        ],
        kieng_ky: "Người bị tiêu chảy phân lỏng."
    },
    {
        stt: 184,
        ten: "Cháo Long Nhãn A Giao",
        nhom: "Tư âm & Bổ huyết",
        cong_dung: "Bổ tâm tỳ, tư âm dưỡng huyết, trị mất ngủ sắc mặt nhợt.",
        thanh_phan: [
            { vi: "A giao", lieu: "8g" },
            { vi: "Long nhãn", lieu: "20g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "A giao đập nhỏ.",
        cach_lam: [
            "Nấu cháo gạo long nhãn nhừ, cho A giao khuấy tan nóng."
        ],
        kieng_ky: "Người bị mụn nhọt thực nhiệt."
    },
    {
        stt: 185,
        ten: "Canh Vịt Hầm Bách Hợp Kỷ Tử",
        nhom: "Tư âm & Bổ huyết",
        cong_dung: "Tư âm nhuận phế, dưỡng huyết mát máu, giảm nóng trong.",
        thanh_phan: [
            { vi: "Thịt vịt", lieu: "300g" },
            { vi: "Bách hợp", lieu: "20g" },
            { vi: "Kỷ tử", lieu: "12g" }
        ],
        so_che: "Vịt làm sạch khử hôi bằng rượu gừng.",
        cach_lam: [
            "Hầm thịt vịt và bách hợp kỷ tử 60 phút."
        ],
        kieng_ky: "Người tỳ vị lạnh dễ đau bụng."
    },
    {
        stt: 186,
        ten: "Cháo Bách Hợp Thục Địa",
        nhom: "Tư âm & Bổ huyết",
        cong_dung: "Tư âm dưỡng huyết, dịu hỏa hư phiền.",
        thanh_phan: [
            { vi: "Bách hợp", lieu: "15g" },
            { vi: "Thục địa", lieu: "15g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Thục địa sắc lấy nước bọc.",
        cach_lam: [
            "Dùng nước thục địa ninh gạo bách hợp thành cháo."
        ],
        kieng_ky: "Người rêu lưỡi dày nhớt."
    },
    {
        stt: 187,
        ten: "Canh Bồ Câu Hầm A Giao Đương Quy",
        nhom: "Tư âm & Bổ huyết",
        cong_dung: "Đại bổ âm huyết, chữa gầy yếu kiệt sức.",
        thanh_phan: [
            { vi: "Chim bồ câu", lieu: "1 con" },
            { vi: "A giao", lieu: "10g" },
            { vi: "Đương quy", lieu: "10g" }
        ],
        so_che: "Bồ câu mổ sạch.",
        cach_lam: [
            "Hầm bồ câu đương quy 60 phút, cho A giao tan vào trước khi ăn."
        ],
        kieng_ky: "Người cảm sốt nhiệt."
    },
    {
        stt: 188,
        ten: "Cháo Kỷ Tử Tang Thầm (Quả Dâu Tằm)",
        nhom: "Tư âm & Bổ huyết",
        cong_dung: "Tư bổ gan thận, dưỡng huyết sáng mắt, mượt tóc.",
        thanh_phan: [
            { vi: "Quả dâu tằm chín", lieu: "30g" },
            { vi: "Kỷ tử", lieu: "15g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Dâu tằm rửa nhẹ tay.",
        cach_lam: [
            "Ninh gạo thành cháo, cho dâu tằm kỷ tử vào đun 10 phút."
        ],
        kieng_ky: "Người bị tiêu chảy do tỳ hư."
    },
    {
        stt: 189,
        ten: "Canh Sườn Lợn Hầm Thục Địa Hoài Sơn",
        nhom: "Tư âm & Bổ huyết",
        cong_dung: "Tư âm bổ thận tỳ, sinh tinh dưỡng huyết.",
        thanh_phan: [
            { vi: "Sườn lợn", lieu: "300g" },
            { vi: "Thục địa", lieu: "20g" },
            { vi: "Hoài sơn", lieu: "20g" }
        ],
        so_che: "Sườn chặt khúc chần xát muối.",
        cach_lam: [
            "Hầm sườn cùng thục địa hoài sơn trong 55 phút."
        ],
        kieng_ky: "Người khó tiêu trướng bụng."
    },
    {
        stt: 190,
        ten: "Cháo Quả Dâu Tằm Long Nhãn",
        nhom: "Tư âm & Bổ huyết",
        cong_dung: "Bổ tâm can huyết, tư âm an thần.",
        thanh_phan: [
            { vi: "Dâu tằm tươi", lieu: "30g" },
            { vi: "Long nhãn", lieu: "20g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Dâu rửa sạch.",
        cach_lam: [
            "Nấu gạo, long nhãn, dâu tằm thành cháo ăn ấm."
        ],
        kieng_ky: "Người bị đường huyết cao."
    },
    {
        stt: 191,
        ten: "Canh Rùa Hầm Thục Địa Kỷ Tử",
        nhom: "Tư âm & Bổ huyết",
        cong_dung: "Tư âm tiềm dương, bổ thận dưỡng huyết mỏ gân.",
        thanh_phan: [
            { vi: "Thịt rùa", lieu: "200g" },
            { vi: "Thục địa", lieu: "15g" },
            { vi: "Kỷ tử", lieu: "12g" }
        ],
        so_che: "Thịt rùa làm sạch thái miếng.",
        cach_lam: [
            "Chưng cách thủy thịt rùa và vị thuốc 90 phút."
        ],
        kieng_ky: "Người bị rối loạn tiêu hóa lạnh bụng."
    },
    {
        stt: 192,
        ten: "Cháo A Giao Gạo Nếp",
        nhom: "Tư âm & Bổ huyết",
        cong_dung: "Bổ huyết liễm hãn, an thai tư âm.",
        thanh_phan: [
            { vi: "A giao", lieu: "10g" },
            { vi: "Gạo nếp", lieu: "80g" }
        ],
        so_che: "Gạo vo sạch.",
        cach_lam: [
            "Ninh gạo nếp thành cháo đặc, hòa A giao vào khuấy tan."
        ],
        kieng_ky: "Người đầy bụng ứ đờm."
    },
    {
        stt: 193,
        ten: "Canh Thịt Bò Hầm Đương Quy Thục Địa",
        nhom: "Tư âm & Bổ huyết",
        cong_dung: "Bổ khí dưỡng huyết tư âm, khỏe gân dẻo dai.",
        thanh_phan: [
            { vi: "Thịt bò", lieu: "200g" },
            { vi: "Đương quy", lieu: "10g" },
            { vi: "Thục địa", lieu: "15g" }
        ],
        so_che: "Thịt bò thái khối.",
        cach_lam: [
            "Hầm thịt bò cùng thuốc bắc 50 phút."
        ],
        kieng_ky: "Người thể nhiệt thực hỏa."
    },
    {
        stt: 194,
        ten: "Cháo Kỷ Tử Hà Thủ Ô",
        nhom: "Tư âm & Bổ huyết",
        cong_dung: "Bổ can thận, ích tinh huyết xanh tóc.",
        thanh_phan: [
            { vi: "Kỷ tử", lieu: "15g" },
            { vi: "Hà thủ ô", lieu: "15g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Hà thủ ô sắc lấy nước bọc.",
        cach_lam: [
            "Ninh kỷ tử gạo bằng nước hà thủ ô."
        ],
        kieng_ky: "Người tiêu chảy lâu ngày."
    },
    {
        stt: 195,
        ten: "Canh Ba Ba Hầm Bách Hợp Thục Địa",
        nhom: "Tư âm & Bổ huyết",
        cong_dung: "Tư âm giáng hỏa, trị sốt về chiều triều nhiệt.",
        thanh_phan: [
            { vi: "Thịt ba ba", lieu: "250g" },
            { vi: "Bách hợp", lieu: "15g" },
            { vi: "Thục địa", lieu: "15g" }
        ],
        so_che: "Ba ba mổ làm sạch.",
        cach_lam: [
            "Hầm ba ba cùng vị thuốc 70 phút."
        ],
        kieng_ky: "Phụ nữ có thai, người hư hàn."
    },
    {
        stt: 196,
        ten: "Cháo Mạch Môn Bách Hợp",
        nhom: "Tư âm & Bổ huyết",
        cong_dung: "Tư âm nhuận phế, thanh tâm giải phiền.",
        thanh_phan: [
            { vi: "Mạch môn", lieu: "12g" },
            { vi: "Bách hợp", lieu: "15g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Sắc mạch môn lấy nước.",
        cach_lam: [
            "Ninh bách hợp gạo bằng nước mạch môn."
        ],
        kieng_ky: "Người bị tỳ vị hư hàn."
    },
    {
        stt: 197,
        ten: "Canh Móng Giò Hầm Thục Địa A Giao",
        nhom: "Tư âm & Bổ huyết",
        cong_dung: "Tư âm bổ huyết, dồi dào nguồn sữa.",
        thanh_phan: [
            { vi: "Móng giò lợn", lieu: "1 cái" },
            { vi: "Thục địa", lieu: "15g" },
            { vi: "A giao", lieu: "8g" }
        ],
        so_che: "Móng giò làm sạch chặt nhỏ.",
        cach_lam: [
            "Ninh móng giò thục địa 60 phút, cho A giao hòa tan vào."
        ],
        kieng_ky: "Người mỡ máu quá cao."
    },
    {
    stt: 198,
    ten: "Cháo Sa Sâm Ngọc Trúc Dưỡng Âm",
    nhom: "Tư âm & Bổ huyết",
    cong_dung: "Tư âm nhuận phế, dưỡng vị sinh tân, chữa khô họng, khát nước, hao tổn tân dịch do nhiệt.",
    thanh_phan: [
        { vi: "Sa sâm", lieu: "15g" },
        { vi: "Ngọc trúc", lieu: "15g" },
        { vi: "Gạo tẻ", lieu: "80g" }
    ],
    so_che: "Sa sâm và ngọc trúc rửa sạch, sắc lấy nước đặc lọc bỏ bã.",
    cach_lam: [
        "Dùng nước dược liệu ninh gạo thành cháo chín nhừ.",
        "Nêm chút muối hoặc đường phèn ăn khi còn ấm."
    ],
    kieng_ky: "Người tỳ vị hư hàn, tiêu chảy phân lỏng."
    },
    {
        stt: 199,
        ten: "Canh Chim Cút Hầm Thục Địa Đương Quy",
        nhom: "Tư âm & Bổ huyết",
        cong_dung: "Bổ tinh huyết, hồng hào khỏe mạnh.",
        thanh_phan: [
            { vi: "Chim cút", lieu: "2 con" },
            { vi: "Thục địa", lieu: "12g" },
            { vi: "Đương quy", lieu: "10g" }
        ],
        so_che: "Chim cút mổ sạch.",
        cach_lam: [
            "Chưng cách thủy chim cút và vị thuốc 60 phút."
        ],
        kieng_ky: "Người bị cảm sốt thực nhiệt."
    },
    {
        stt: 200,
        ten: "Cháo Long Nhãn Bách Hợp Tư Âm",
        nhom: "Tư âm & Bổ huyết",
        cong_dung: "Dưỡng âm hòa huyết, dịu tinh thần.",
        thanh_phan: [
            { vi: "Long nhãn", lieu: "20g" },
            { vi: "Bách hợp", lieu: "15g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Bách hợp ngâm mềm.",
        cach_lam: [
            "Ninh gạo, long nhãn, bách hợp thành cháo sánh ăn tối."
        ],
        kieng_ky: "Người nhiều đờm trệ."
    },
    {
    stt: 241,
    ten: "Canh Gà Ác Hầm A Giao Kỷ Tử",
    nhom: "Tư âm & Bổ huyết",
    cong_dung: "Tư âm bổ huyết, điều kinh dưỡng sắc, phục hồi cơ thể suy nhược.",
    thanh_phan: [
        { vi: "Gà ác", lieu: "1 con" },
        { vi: "A giao (Cao da lừa)", lieu: "10g" },
        { vi: "Kỷ tử", lieu: "12g" },
        { vi: "Táo đỏ", lieu: "5 quả" }
    ],
    so_che: "Gà ác làm sạch. A giao đập nhỏ.",
    cach_lam: [
        "Hầm gà ác, kỷ tử, táo đỏ trong 60 phút.",
        "Cho A giao vào khuấy tan hoàn toàn rồi tắt bếp."
    ],
    kieng_ky: "Người bị tỳ vị hư hàn, tiêu chảy phân lỏng."
},
{
    stt: 242,
    ten: "Cháo Yến Sào A Giao Dưỡng Huyết",
    nhom: "Tư âm & Bổ huyết",
    cong_dung: "Đại bổ âm huyết, nhuận phế sinh tân, mượt da thắm hồng.",
    thanh_phan: [
        { vi: "Yến sào ngâm nở", lieu: "10g" },
        { vi: "A giao", lieu: "8g" },
        { vi: "Gạo nếp", lieu: "60g" },
        { vi: "Đường phèn", lieu: "15g" }
    ],
    so_che: "A giao đập vụn.",
    cach_lam: [
        "Ninh gạo nếp thành cháo mịn.",
        "Thả yến sào và A giao vào khuấy đều chưng đun 15 phút đến khi A giao tan hết."
    ],
    kieng_ky: "Người đang bị cảm sốt, ngoại tà phong hàn."
},
{
    stt: 243,
    ten: "Canh Thịt Lợn Nạc Hầm Quy Bản Thục Địa",
    nhom: "Tư âm & Bổ huyết",
    cong_dung: "Tư âm tiềm dương, bổ huyết tiềm hỏa, chữa bốc hỏa sưng nướu do âm hư.",
    thanh_phan: [
        { vi: "Thịt lợn nạc", lieu: "200g" },
        { vi: "Quy bản (Yếm rùa)", lieu: "15g" },
        { vi: "Thục địa", lieu: "15g" }
    ],
    so_che: "Quy bản đập vụn sắc trước 30 phút. Thịt lợn thái khối.",
    cach_lam: [
        "Cho thịt nạc và thục địa vào nước sắc quy bản hầm tiếp 50 phút."
    ],
    kieng_ky: "Phụ nữ có thai, người hay bị đi ngoài lạnh bụng."
},
{
    stt: 244,
    ten: "Cháo Thục Địa Hoàng Kỳ Bổ Huyết",
    nhom: "Tư âm & Bổ huyết",
    cong_dung: "Ích khí sinh huyết, tư âm cố biểu, trị sắc mặt xanh xao mệt mỏi.",
    thanh_phan: [
        { vi: "Thục địa", lieu: "15g" },
        { vi: "Hoàng kỳ", lieu: "15g" },
        { vi: "Gạo tẻ", lieu: "80g" }
    ],
    so_che: "Sắc thục địa và hoàng kỳ lấy nước lọc bã.",
    cach_lam: [
        "Lấy nước dược liệu ninh gạo thành cháo chín nhừ."
    ],
    kieng_ky: "Người cao huyết áp cấp tính, hỏa thực."
},
{
    stt: 245,
    ten: "Canh Vịt Hầm Sa Sâm Ngọc Trúc",
    nhom: "Tư âm & Bổ huyết",
    cong_dung: "Tư âm nhuận phế, thanh hỏa sinh tân, mát phế vị.",
    thanh_phan: [
        { vi: "Thịt vịt", lieu: "300g" },
        { vi: "Sa sâm", lieu: "15g" },
        { vi: "Ngọc trúc", lieu: "15g" }
    ],
    so_che: "Vịt rửa rượu gừng bớt hôi, chặt miếng.",
    cach_lam: [
        "Hầm thịt vịt cùng sa sâm và ngọc trúc trong 60 phút."
    ],
    kieng_ky: "Người tỳ vị hư hàn tiêu chảy."
},
{
    stt: 246,
    ten: "Cháo Quả Dâu Tằm Hà Thủ Ô",
    nhom: "Tư âm & Bổ huyết",
    cong_dung: "Bổ can thận, tư âm dưỡng huyết, nhuận tràng đen tóc.",
    thanh_phan: [
        { vi: "Quả dâu tằm chín", lieu: "30g" },
        { vi: "Hà thủ ô đỏ", lieu: "15g" },
        { vi: "Gạo tẻ", lieu: "80g" }
    ],
    so_che: "Hà thủ ô sắc lấy nước. Dâu tằm rửa sạch nhẹ.",
    cach_lam: [
        "Lấy nước hà thủ ô ninh gạo thành cháo rồi thả dâu tằm vào đun 10 phút."
    ],
    kieng_ky: "Người bị chứng vi khuẩn đường ruột, tiêu chảy."
},
{
    stt: 247,
    ten: "Canh Ba Ba Hầm Quy Bản Kỷ Tử",
    nhom: "Tư âm & Bổ huyết",
    cong_dung: "Đại bổ âm huyết, tiềm dương giáng hỏa, chữa triều nhiệt mồ hôi trộm.",
    thanh_phan: [
        { vi: "Thịt ba ba", lieu: "200g" },
        { vi: "Quy bản", lieu: "12g" },
        { vi: "Kỷ tử", lieu: "12g" }
    ],
    so_che: "Ba ba mổ cạo màng trắng. Quy bản đập vụn.",
    cach_lam: [
        "Ninh thịt ba ba cùng quy bản và kỷ tử trong 70 phút."
    ],
    kieng_ky: "Phụ nữ mang thai, người tiêu hóa trệ."
},
{
    stt: 248,
    ten: "Cháo A Giao Hoài Sơn",
    nhom: "Tư âm & Bổ huyết",
    cong_dung: "Tư âm bổ huyết, kiện tỳ chỉ tả, chữa hư lao kiệt lực.",
    thanh_phan: [
        { vi: "A giao", lieu: "8g" },
        { vi: "Hoài sơn", lieu: "20g" },
        { vi: "Gạo tẻ", lieu: "80g" }
    ],
    so_che: "Hoài sơn thái nhỏ. A giao tán bột.",
    cach_lam: [
        "Ninh gạo và hoài sơn thành cháo, trút A giao vào khuấy tan hoàn toàn."
    ],
    kieng_ky: "Người rêu lưỡi dày nhớt do đầy bụng."
},
{
    stt: 249,
    ten: "Canh Chim Bồ Câu Hầm Sa Sâm Thục Địa",
    nhom: "Tư âm & Bổ huyết",
    cong_dung: "Tư âm bổ thận, dưỡng huyết dồi dào sinh khí.",
    thanh_phan: [
        { vi: "Chim bồ câu", lieu: "1 con" },
        { vi: "Sa sâm", lieu: "12g" },
        { vi: "Thục địa", lieu: "15g" }
    ],
    so_che: "Bồ câu mổ sạch.",
    cach_lam: [
        "Chưng cách thủy bồ câu và vị thuốc 70 phút."
    ],
    kieng_ky: "Người đang cảm sốt phong hàn."
},
{
    stt: 250,
    ten: "Cháo Kỷ Tử Đương Quy Tư Âm",
    nhom: "Tư âm & Bổ huyết",
    cong_dung: "Bổ huyết dưỡng gan, sáng mắt nhuận sắc.",
    thanh_phan: [
        { vi: "Đương quy", lieu: "10g" },
        { vi: "Kỷ tử", lieu: "15g" },
        { vi: "Gạo tẻ", lieu: "80g" }
    ],
    so_che: "Đương quy sắc lấy nước.",
    cach_lam: [
        "Dùng nước đương quy ninh kỷ tử và gạo thành cháo."
    ],
    kieng_ky: "Người bị chướng bụng tiêu chảy."
},
{
    stt: 251,
    ten: "Canh Rùa Hầm Quy Bản Bách Hợp",
    nhom: "Tư âm & Bổ huyết",
    cong_dung: "Tư âm tiềm dương, thanh phế giáng hỏa.",
    thanh_phan: [
        { vi: "Thịt rùa", lieu: "200g" },
        { vi: "Quy bản", lieu: "12g" },
        { vi: "Bách hợp", lieu: "15g" }
    ],
    so_che: "Rùa làm sạch thái khối.",
    cach_lam: [
        "Hầm thịt rùa cùng các vị thuốc 80 phút."
    ],
    kieng_ky: "Phụ nữ có thai, người tỳ vị hư hàn."
},
{
    stt: 252,
    ten: "Cháo Bách Hợp A Giao",
    nhom: "Tư âm & Bổ huyết",
    cong_dung: "Dưỡng âm nhuận phế, bổ huyết an thần.",
    thanh_phan: [
        { vi: "Bách hợp tươi", lieu: "30g" },
        { vi: "A giao", lieu: "8g" },
        { vi: "Gạo tẻ", lieu: "80g" }
    ],
    so_che: "A giao tán mịn.",
    cach_lam: [
        "Ninh bách hợp gạo thành cháo nhừ, hòa A giao tan đều ăn ấm."
    ],
    kieng_ky: "Người có đờm lạnh loãng."
},
{
    stt: 253,
    ten: "Canh Thịt Bò Hầm Hà Thủ Ô Đương Quy",
    nhom: "Tư âm & Bổ huyết",
    cong_dung: "Bổ khí dưỡng huyết, ích tinh tủy, săn chắc cơ bắp.",
    thanh_phan: [
        { vi: "Thịt bò nạc", lieu: "200g" },
        { vi: "Hà thủ ô đỏ", lieu: "15g" },
        { vi: "Đương quy", lieu: "10g" }
    ],
    so_che: "Thịt bò thái miếng. Hà thủ ô bọc gạc.",
    cach_lam: [
        "Hầm thịt bò và vị thuốc trong 55 phút."
    ],
    kieng_ky: "Người thể nhiệt thực hỏa."
},
{
    stt: 254,
    ten: "Cháo Long Nhãn Thục Địa",
    nhom: "Tư âm & Bổ huyết",
    cong_dung: "Bổ tâm tỳ, tư âm dưỡng huyết, dịu thần kinh.",
    thanh_phan: [
        { vi: "Long nhãn", lieu: "20g" },
        { vi: "Thục địa", lieu: "15g" },
        { vi: "Gạo tẻ", lieu: "80g" }
    ],
    so_che: "Thục địa sắc lấy nước đặc.",
    cach_lam: [
        "Ninh long nhãn và gạo bằng nước thục địa thành cháo."
    ],
    kieng_ky: "Người bị bệnh tiểu đường."
},
{
    stt: 255,
    ten: "Canh Sườn Lợn Hầm Quy Bản Đương Quy",
    nhom: "Tư âm & Bổ huyết",
    cong_dung: "Bổ huyết tư âm, cường gân bổ tủy.",
    thanh_phan: [
        { vi: "Sườn lợn", lieu: "300g" },
        { vi: "Quy bản", lieu: "15g" },
        { vi: "Đương quy", lieu: "12g" }
    ],
    so_che: "Sườn chặt khúc chần sơ.",
    cach_lam: [
        "Ninh sườn và vị thuốc 60 phút cho ngấm."
    ],
    kieng_ky: "Phụ nữ mang thai."
},
{
    stt: 256,
    ten: "Cháo Hải Sâm Thục Địa Tư Âm",
    nhom: "Tư âm & Bổ huyết",
    cong_dung: "Tư âm bổ thận, dưỡng huyết tráng sinh lực.",
    thanh_phan: [
        { vi: "Hải sâm", lieu: "50g" },
        { vi: "Thục địa", lieu: "15g" },
        { vi: "Gạo tẻ", lieu: "80g" }
    ],
    so_che: "Thục địa sắc lấy nước. Hải sâm thái hạt lựu.",
    cach_lam: [
        "Nấu cháo gạo bằng nước thục địa rồi thả hải sâm vào đun tiếp 15 phút."
    ],
    kieng_ky: "Người đầy trướng bụng tiêu chảy."
},
{
    stt: 257,
    ten: "Canh Chim Cút Hầm A Giao Kỷ Tử",
    nhom: "Tư âm & Bổ huyết",
    cong_dung: "Bổ tinh huyết, hồng hào sắc mặt, trị hoa mắt chóng mặt.",
    thanh_phan: [
        { vi: "Chim cút", lieu: "2 con" },
        { vi: "A giao", lieu: "8g" },
        { vi: "Kỷ tử", lieu: "12g" }
    ],
    so_che: "Chim cút mổ sạch.",
    cach_lam: [
        "Hầm chim cút kỷ tử 50 phút, cho A giao khuấy tan trước khi ăn."
    ],
    kieng_ky: "Người bị cảm sốt thực nhiệt."
},
{
    stt: 258,
    ten: "Cháo Dâu Tằm A Giao",
    nhom: "Tư âm & Bổ huyết",
    cong_dung: "Tư âm dưỡng huyết, mượt tóc sáng mắt.",
    thanh_phan: [
        { vi: "Quả dâu tằm tươi", lieu: "30g" },
        { vi: "A giao", lieu: "8g" },
        { vi: "Gạo tẻ", lieu: "80g" }
    ],
    so_che: "Dâu tằm rửa sạch nhẹ tay.",
    cach_lam: [
        "Ninh gạo dâu tằm thành cháo, hòa A giao vào đun tan bùng."
    ],
    kieng_ky: "Người bị đại tiện phân lỏng."
},
{
    stt: 259,
    ten: "Canh Lươn Hầm Thục Địa Đương Quy",
    nhom: "Tư âm & Bổ huyết",
    cong_dung: "Bổ khí huyết, tư âm tráng lực.",
    thanh_phan: [
        { vi: "Thịt lươn", lieu: "200g" },
        { vi: "Thục địa", lieu: "15g" },
        { vi: "Đương quy", lieu: "10g" }
    ],
    so_che: "Lươn tuốt sạch nhớt xào sơ.",
    cach_lam: [
        "Hầm lươn cùng thục địa đương quy 45 phút."
    ],
    kieng_ky: "Người dị ứng đạm lươn."
},
{
    stt: 260,
    ten: "Cháo Thục Địa A Giao Táo Đỏ",
    nhom: "Tư âm & Bổ huyết",
    cong_dung: "Đại bổ âm huyết, dưỡng tâm an thần.",
    thanh_phan: [
        { vi: "Thục địa", lieu: "15g" },
        { vi: "A giao", lieu: "10g" },
        { vi: "Táo đỏ", lieu: "6 quả" },
        { vi: "Gạo nếp", lieu: "80g" }
    ],
    so_che: "Sắc thục địa lấy nước đặc.",
    cach_lam: [
        "Ninh gạo nếp táo đỏ bằng nước thục địa, hòa A giao đun tan hoàn toàn."
    ],
    kieng_ky: "Người tỳ hư đờm thấp tích tụ."
},
    // ==========================================
    // NHÓM 11: LỢI THỦY & TIÊU THŨNG (STT 201 - 220)
    // ==========================================
    {
        stt: 201,
        ten: "Canh Bí Đao Hầm Cừu Bò Lợi Thủy",
        nhom: "Lợi thủy & Tiêu thũng",
        cong_dung: "Lợi tiểu tiêu thũng, thanh nhiệt phế bàng quang, giảm phù thũng chân tay.",
        thanh_phan: [
            { vi: "Bí đao giữ nguyên vỏ thái miếng", lieu: "200g" },
            { vi: "Thịt lợn nạc", lieu: "100g" },
            { vi: "Trạch tả", lieu: "10g" }
        ],
        so_che: "Bí đao rửa sạch cắt miếng to. Trạch tả sắc lấy nước.",
        cach_lam: [
            "Lấy nước trạch tả ninh thịt nạc và bí đao trong 35 phút."
        ],
        kieng_ky: "Người bị tiểu đêm nhiều, huyết áp quá thấp."
    },
    {
        stt: 202,
        ten: "Cháo Phục Linh Trạch Tả",
        nhom: "Lợi thủy & Tiêu thũng",
        cong_dung: "Thẩm thấp lợi thủy, kiện tỳ chỉ tả, trị phù thũng tiểu ít.",
        thanh_phan: [
            { vi: "Bạch phục linh", lieu: "15g" },
            { vi: "Trạch tả", lieu: "10g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Sắc trạch tả lấy nước. Phục linh tán bột.",
        cach_lam: [
            "Nấu cháo gạo bằng nước trạch tả, cháo nhừ hòa bột phục linh đun sôi lại."
        ],
        kieng_ky: "Người kiệt tân dịch khát nước."
    },
    {
        stt: 203,
        ten: "Canh Cá Chép Nấu Xích Tiểu Đậu Trạch Tả",
        nhom: "Lợi thủy & Tiêu thũng",
        cong_dung: "Kiện tỳ lợi thủy, tiêu sũng thông tiểu nhẹ nhõm.",
        thanh_phan: [
            { vi: "Cá chép", lieu: "1 con (400g)" },
            { vi: "Xích tiểu đậu", lieu: "40g" },
            { vi: "Trạch tả", lieu: "10g" }
        ],
        so_che: "Cá chép sơ chế để nguyên vảy.",
        cach_lam: [
            "Hầm cá chép cùng xích tiểu đậu và trạch tả trong 60 phút, hạn chế cho muối."
        ],
        kieng_ky: "Người không bị phù thũng."
    },
    {
        stt: 204,
        ten: "Cháo Râu Ngô Xích Tiểu Đậu",
        nhom: "Lợi thủy & Tiêu thũng",
        cong_dung: "Thanh nhiệt lợi tiểu, tiêu thũng giảm đường huyết.",
        thanh_phan: [
            { vi: "Râu ngô tươi", lieu: "30g" },
            { vi: "Xích tiểu đậu", lieu: "30g" },
            { vi: "Gạo tẻ", lieu: "60g" }
        ],
        so_che: "Râu ngô sắc lấy nước đặc.",
        cach_lam: [
            "Ninh xích tiểu đậu và gạo bằng nước râu ngô thành cháo."
        ],
        kieng_ky: "Người đi tiểu không tự chủ."
    },
    {
        stt: 205,
        ten: "Canh Cua Đồng Nấu Củ Cải Trắng Cỏ Tranh",
        nhom: "Lợi thủy & Tiêu thũng",
        cong_dung: "Thanh nhiệt giải độc, lợi thủy thông tiểu tiện.",
        thanh_phan: [
            { vi: "Cua đồng giã lọc", lieu: "200g" },
            { vi: "Củ cải trắng", lieu: "100g" },
            { vi: "Rễ cỏ tranh", lieu: "15g" }
        ],
        so_che: "Rễ cỏ tranh sắc lấy nước lọc.",
        cach_lam: [
            "Dùng nước cỏ tranh hòa nước cua đun đóng gạch rồi thả củ cải vào nấu chín."
        ],
        kieng_ky: "Phụ nữ mang thai thời kỳ đầu, người hư hàn."
    },
    {
        stt: 206,
        ten: "Cháo Ý Dĩ Trạch Tả",
        nhom: "Lợi thủy & Tiêu thũng",
        cong_dung: "Kiện tỳ trừ thấp, lợi thủy thẩm thấp.",
        thanh_phan: [
            { vi: "Ý dĩ nhân", lieu: "30g" },
            { vi: "Trạch tả", lieu: "10g" },
            { vi: "Gạo tẻ", lieu: "60g" }
        ],
        so_che: "Sắc trạch tả lấy nước.",
        cach_lam: [
            "Ninh ý dĩ và gạo bằng nước trạch tả thành cháo."
        ],
        kieng_ky: "Phụ nữ mang thai."
    },
    {
        stt: 207,
        ten: "Canh Bí Đao Nấu Thịt Nạc Lợi Thủy",
        nhom: "Lợi thủy & Tiêu thũng",
        cong_dung: "Thanh nhiệt tư âm, tiêu thũng mát phế vị.",
        thanh_phan: [
            { vi: "Bí đao gọt vỏ", lieu: "200g" },
            { vi: "Thịt lợn nạc băm", lieu: "100g" },
            { vi: "Hành hoa", lieu: "vừa đủ" }
        ],
        so_che: "Bí đao thái miếng.",
        cach_lam: [
            "Nấu canh thịt nạc bí đao đun sôi 20 phút."
        ],
        kieng_ky: "Người lạnh bụng đi ngoài."
    },
    {
        stt: 208,
        ten: "Cháo Phục Linh Xích Tiểu Đậu",
        nhom: "Lợi thủy & Tiêu thũng",
        cong_dung: "Bổ tỳ lợi thủy, giảm sưng phù chân.",
        thanh_phan: [
            { vi: "Bạch phục linh", lieu: "15g" },
            { vi: "Xích tiểu đậu", lieu: "30g" },
            { vi: "Gạo tẻ", lieu: "60g" }
        ],
        so_che: "Xích tiểu đậu ngâm mềm.",
        cach_lam: [
            "Ninh cháo gạo đậu nhừ rồi hòa bột phục linh đun đun bùng."
        ],
        kieng_ky: "Người đái dắt."
    },
    {
        stt: 209,
        ten: "Canh Cá Quả Nấu Củ Cải Râu Ngô",
        nhom: "Lợi thủy & Tiêu thũng",
        cong_dung: "Bổ tỳ lợi tiểu, tiêu phù thũng.",
        thanh_phan: [
            { vi: "Cá quả (Cá lóc)", lieu: "250g" },
            { vi: "Củ cải trắng", lieu: "100g" },
            { vi: "Râu ngô", lieu: "20g" }
        ],
        so_che: "Sắc râu ngô lấy nước.",
        cach_lam: [
            "Nấu cá quả và củ cải bằng nước râu ngô."
        ],
        kieng_ky: "Người không có hội chứng tích nước."
    },
    {
        stt: 210,
        ten: "Cháo Trạch Tả Hạt Kê",
        nhom: "Lợi thủy & Tiêu thũng",
        cong_dung: "Thanh nhiệt bàng quang, lợi tiểu thông suốt.",
        thanh_phan: [
            { vi: "Trạch tả", lieu: "12g" },
            { vi: "Hạt kê", lieu: "60g" }
        ],
        so_che: "Sắc trạch tả lấy nước.",
        cach_lam: [
            "Ninh hạt kê bằng nước trạch tả."
        ],
        kieng_ky: "Người bị thiếu hụt tân dịch."
    },
    {
        stt: 211,
        ten: "Canh Hến Nấu Củ Cải Trắng Rễ Cỏ Tranh",
        nhom: "Lợi thủy & Tiêu thũng",
        cong_dung: "Thanh nhiệt mát máu, lợi tiểu tiêu viêm bàng quang.",
        thanh_phan: [
            { vi: "Thịt hến", lieu: "100g" },
            { vi: "Củ cải trắng", lieu: "100g" },
            { vi: "Rễ cỏ tranh", lieu: "15g" }
        ],
        so_che: "Sắc rễ cỏ tranh lấy nước.",
        cach_lam: [
            "Dùng nước rễ cỏ tranh nấu hến và củ cải."
        ],
        kieng_ky: "Người tỳ vị hư hàn tiêu chảy."
    },
    {
        stt: 212,
        ten: "Cháo Xích Tiểu Đậu Bí Đao",
        nhom: "Lợi thủy & Tiêu thũng",
        cong_dung: "Thải độc lợi tiểu, giảm béo tiêu phù.",
        thanh_phan: [
            { vi: "Xích tiểu đậu", lieu: "40g" },
            { vi: "Bí đao thái nhỏ", lieu: "100g" },
            { vi: "Gạo tẻ", lieu: "50g" }
        ],
        so_che: "Đậu ngâm trước.",
        cach_lam: [
            "Ninh đậu, bí đao, gạo thành cháo nhừ."
        ],
        kieng_ky: "Người tay chân lạnh sợ rét."
    },
    {
        stt: 213,
        ten: "Canh Thịt Nạc Nấu Rau Mã Đề",
        nhom: "Lợi thủy & Tiêu thũng",
        cong_dung: "Thanh phế hỏa, lợi tiểu thông đái dắt đỏ.",
        thanh_phan: [
            { vi: "Rau mã đề tươi", lieu: "50g" },
            { vi: "Thịt lợn nạc băm", lieu: "100g" }
        ],
        so_che: "Mã đề rửa sạch cắt ngắn.",
        cach_lam: [
            "Nấu canh thịt nạc sôi rồi cho mã đề vào đun chín tới."
        ],
        kieng_ky: "Phụ nữ mang thai, người tiêu chảy."
    },
    {
        stt: 214,
        ten: "Cháo Phục Linh Hạt Sen Lợi Thủy",
        nhom: "Lợi thủy & Tiêu thũng",
        cong_dung: "Kiện tỳ bổ tâm, thẩm thấp nhẹ dạ dày.",
        thanh_phan: [
            { vi: "Bạch phục linh", lieu: "15g" },
            { vi: "Hạt sen", lieu: "30g" },
            { vi: "Gạo tẻ", lieu: "60g" }
        ],
        so_che: "Hạt sen ninh mềm trước.",
        cach_lam: [
            "Ninh cháo hạt sen gạo nhừ rồi hòa bột phục linh đun bùng."
        ],
        kieng_ky: "Người bí đái do cơ học."
    },
    {
        stt: 215,
        ten: "Canh Cá Chép Hầm Bí Đao Đậu Đỏ",
        nhom: "Lợi thủy & Tiêu thũng",
        cong_dung: "Bổ tỳ vị, tiêu sũng lợi tiểu dồi dào.",
        thanh_phan: [
            { vi: "Cá chép", lieu: "300g" },
            { vi: "Bí đao", lieu: "150g" },
            { vi: "Đậu đỏ", lieu: "30g" }
        ],
        so_che: "Cá chép làm sạch giữ vảy.",
        cach_lam: [
            "Hầm cá chép bí đao đậu đỏ 50 phút không thêm nhiều muối."
        ],
        kieng_ky: "Người hư hàn không phù."
    },
    {
        stt: 216,
        ten: "Cháo Mã Đề Râu Ngô",
        nhom: "Lợi thủy & Tiêu thũng",
        cong_dung: "Thanh nhiệt thông niệu, giảm buốt rắt tiểu.",
        thanh_phan: [
            { vi: "Rau mã đề", lieu: "20g" },
            { vi: "Râu ngô", lieu: "20g" },
            { vi: "Gạo tẻ", lieu: "80g" }
        ],
        so_che: "Sắc hai vị thuốc lấy nước lọc.",
        cach_lam: [
            "Dùng nước thuốc ninh gạo thành cháo."
        ],
        kieng_ky: "Người đái dầm, phụ nữ mang thai."
    },
    {
        stt: 217,
        ten: "Canh Bầu Nấu Thịt Nạc Lợi Tiểu",
        nhom: "Lợi thủy & Tiêu thũng",
        cong_dung: "Thanh nhiệt giải mộc, lợi tiểu nhẹ.",
        thanh_phan: [
            { vi: "Quả bầu tươi", lieu: "200g" },
            { vi: "Thịt lợn nạc", lieu: "80g" }
        ],
        so_che: "Bầu thái lát.",
        cach_lam: [
            "Nấu canh thịt nạc bầu đun chín nhừ vừa."
        ],
        kieng_ky: "Người lạnh bụng."
    },
    {
        stt: 218,
        ten: "Cháo Trạch Tả Phục Linh Ý Dĩ",
        nhom: "Lợi thủy & Tiêu thũng",
        cong_dung: "Thẩm thấp tiêu sũng, kiện tỳ vị.",
        thanh_phan: [
            { vi: "Trạch tả", lieu: "10g" },
            { vi: "Bạch phục linh", lieu: "12g" },
            { vi: "Ý dĩ", lieu: "25g" },
            { vi: "Gạo tẻ", lieu: "60g" }
        ],
        so_che: "Sắc trạch tả lấy nước.",
        cach_lam: [
            "Ninh ý dĩ gạo bằng nước trạch tả, cháo nhừ hòa bột phục linh đun bùng."
        ],
        kieng_ky: "Phụ nữ mang thai."
    },
    {
        stt: 219,
        ten: "Canh Nghêu Nấu Rau Mã Đề",
        nhom: "Lợi thủy & Tiêu thũng",
        cong_dung: "Thanh nhiệt bàng quang, mát gan lợi niệu.",
        thanh_phan: [
            { vi: "Thịt nghêu (ngao)", lieu: "100g" },
            { vi: "Rau mã đề", lieu: "40g" }
        ],
        so_che: "Mã đề rửa sạch.",
        cach_lam: [
            "Đun nước nghêu sôi thả mã đề đun 5 phút."
        ],
        kieng_ky: "Người đau bụng tiêu chảy do lạnh."
    },
    {
        stt: 220,
        ten: "Cháo Xích Tiểu Đậu Mã Đề",
        nhom: "Lợi thủy & Tiêu thũng",
        cong_dung: "Lợi thủy trừ thấp, thanh nhiệt thông niệu.",
        thanh_phan: [
            { vi: "Xích tiểu đậu", lieu: "30g" },
            { vi: "Rau mã đề tươi", lieu: "20g" },
            { vi: "Gạo tẻ", lieu: "70g" }
        ],
        so_che: "Sắc mã đề lấy nước.",
        cach_lam: [
            "Ninh đậu đỏ và gạo bằng nước mã đề thành cháo nhừ."
        ],
        kieng_ky: "Phụ nữ có thai."
    },

];
duocThienData
    .sort((a, b) => a.stt - b.stt) // Sắp xếp theo STT cũ
    .forEach((item, index) => {
        item.stt = index + 1;     // Đánh lại STT chuẩn từ 1 đến 260
    });
    