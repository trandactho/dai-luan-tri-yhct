/* ==========================================================================
   CƠ SỞ DỮ LIỆU HỘI CHỨNG Y HỌC CỔ TRUYỀN (ĐÃ CHUẨN HÓA & THÊM STT, LIỀU LƯỢNG)
   ========================================================================== */

window.database = {

  // =========================================================================
  // 1. TẠNG CAN & PHỦ ĐỜM
  // =========================================================================
  "Can_Khi_Uat_Ket": {
    stt: 1,
    hc: "Can khí uất kết",
    phanloai: ["Tạng Can", "Bình", "Thực", "Khí trệ"],
    tc: ["Ngực sườn đầy trướng", "Tinh thần u uất", "Hay thở dài", "Dễ cáu gắt", "Kinh nguyệt không đều", "Mạch huyền"],
    pdt: "Sơ can giải uất, lý khí chỉ thống",
    bt: "Sài hồ sơ can tán",
    tpbt: ["Sài hồ 12g", "Bạch thược 12g", "Chỉ xác 8g", "Xuyên khung 8g", "Trần bì 8g", "Chích cam thảo 4g"]
  },
  "Can_Huyet_Hu": {
    stt: 2,
    hc: "Can huyết hư",
    phanloai: ["Tạng Can", "Bình", "Hư", "Huyết hư"],
    tc: ["Sắc mặt úa vàng", "Chóng mặt hoa mắt", "Móng tay chân khô nhợt", "Kinh nguyệt ít, sắc nhạt", "Mạch tế nhược"],
    pdt: "Bổ huyết dưỡng can",
    bt: "Tứ vật thang",
    tpbt: ["Thục địa 12g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 8g"]
  },
  "Can_Hoa_Thuong_Viem": {
    stt: 3,
    hc: "Can hỏa thượng viêm",
    phanloai: ["Tạng Can", "Nhiệt", "Thực", "Can hỏa"],
    tc: ["Đau đầu chóng mặt", "Mắt đỏ, tai ù", "Miệng đắng họng khô", "Hay giận dữ", "Tiểu đỏ đại tiện táo", "Mạch huyền sác"],
    pdt: "Thanh can tả hỏa",
    bt: "Long đởm tả can thang",
    tpbt: ["Long đởm thảo 6g", "Hoàng cầm 8g", "Chi tử 8g", "Trạch tả 12g", "Đương quy 8g", "Sinh địa 12g", "Sài hồ 8g", "Cam thảo 4g"]
  },
  "Can_Am_Hu": {
    stt: 4,
    hc: "Can âm hư",
    phanloai: ["Tạng Can", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Chóng mặt hoa mắt", "Mắt khô, nhìn mờ", "Má đỏ, triều nhiệt", "Lòng bàn tay chân nóng", "Mạch tế sác"],
    pdt: "Tư dưỡng can âm, minh mục",
    bt: "Kỷ cúc địa hoàng hoàn",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 8g", "Trạch tả 6g", "Đan bì 6g", "Phục linh 6g", "Kỷ tử 8g", "Cúc hoa 8g"]
  },
  "Han_Tre_Can_Mach": {
    stt: 5,
    hc: "Hàn trệ Can mạch",
    phanloai: ["Tạng Can", "Hàn", "Thực", "Hàn trệ"],
    tc: ["Đau quặn bụng dưới", "Đau lan xuống bộ phận sinh dục", "Gặp lạnh đau tăng, ấm giảm", "Mạch huyền trầm khẩn"],
    pdt: "Ôn kinh tán hàn, noãn can chỉ thống",
    bt: "Noãn can tiễn",
    tpbt: ["Tiểu hồi hương 8g", "Nhục quế 4g", "Đương quy 12g", "Câu kỷ tử 12g", "Ô dược 8g", "Trầm hương 2g", "Phục linh 12g"]
  },
  "Can_Hu_Han": {
    stt: 6,
    hc: "Can hư hàn",
    phanloai: ["Tạng Can", "Hàn", "Hư", "Dương hư"],
    tc: ["Sợ lạnh, tay chân lạnh", "Đau đỉnh đầu âm ỉ", "Sắc mặt xanh sạm", "Rêu lưỡi trắng nhuận", "Mạch trầm trì nhược"],
    pdt: "Ôn bổ can dương",
    bt: "Ngô thù du thang",
    tpbt: ["Ngô thù du 6g", "Nhân sâm 12g", "Sinh khương 12g", "Đại táo 4 quả"]
  },
  "Can_Vi_Bat_Hoa": {
    stt: 7,
    hc: "Can Vị bất hòa",
    phanloai: ["Tạng Can & Phủ Vị", "Bình", "Hư thực thác tạp", "Khí trệ"],
    tc: ["Ngực sườn đầy trướng", "Ợ chua, ợ hơi", "Đau tức vùng thượng vị", "Buồn nôn, ăn kém", "Mạch huyền"],
    pdt: "Sơ can hòa vị, giáng nghịch chỉ thống",
    bt: "Sài hồ sơ can tán hợp Tả kim hoàn",
    tpbt: ["Sài hồ 12g", "Hoàng liên 8g", "Ngô thù du 2g", "Bạch thược 12g", "Chỉ xác 8g", "Xuyên khung 8g", "Chích cam thảo 4g"]
  },
  "Can_Dom_Thap_Nhiet": {
    stt: 8,
    hc: "Can Đởm thấp nhiệt",
    phanloai: ["Tạng Can & Phủ Đờm", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Vàng mắt vàng da", "Đau tức vùng hạ sườn phải", "Miệng đắng, buồn nôn", "Tiểu tiện đỏ ngắn", "Rêu lưỡi vàng nhớt", "Mạch huyền sác"],
    pdt: "Thanh nhiệt lợi thấp, sơ can lợi đởm",
    bt: "Long đởm tả can thang gia giảm",
    tpbt: ["Long đởm thảo 6g", "Hoàng cầm 8g", "Chi tử 8g", "Trạch tả 12g", "Mộc thông 8g", "Xa tiền tử 12g", "Đương quy 8g", "Sinh địa 12g", "Sài hồ 8g", "Cam thảo 4g"]
  },
  "Can_Duong_Thuong_Khang": {
    stt: 9,
    hc: "Can dương thượng kháng",
    phanloai: ["Tạng Can", "Nhiệt", "Hư thực thác tạp", "Can dương thượng kháng"],
    tc: ["Đau đầu chóng mặt dữ dội", "Mặt đỏ mắt đỏ", "Dễ cáu gắt, tai ù như ve kêu", "Mất ngủ, nhiều mộng", "Mạch huyền lực"],
    pdt: "Bình can tiềm dương, thanh nhiệt trấn kinh",
    bt: "Thiên ma câu đằng ẩm",
    tpbt: ["Thiên ma 8g", "Câu đằng 12g", "Thạch quyết minh 20g", "Chi tử 8g", "Hoàng cầm 8g", "Ngưu tất 12g", "Đỗ trọng 12g", "Tang ký sinh 12g", "Phục thần 12g", "Dạ giao đằng 12g"]
  },
  "Can_Ty_Bat_Hoa": {
    stt: 10,
    hc: "Can Tỳ bất hòa",
    phanloai: ["Tạng Can & Tạng Tỳ", "Bình", "Hư thực thác tạp", "Khí trệ Tỳ hư"],
    tc: ["Ngực sườn trướng đau", "Tinh thần u uất, hay thở dài", "Ăn kém, bụng trướng đầy", "Đại tiện lúc lỏng lúc táo", "Mạch huyền tế"],
    pdt: "Sơ can lý tỳ, hòa vị chỉ thống",
    bt: "Tiêu dao tán",
    tpbt: ["Sài hồ 12g", "Đương quy 12g", "Bạch thược 12g", "Bạch truật 12g", "Phục linh 12g", "Cam thảo 6g", "Bạc hà 4g", "Sinh khương 3 lát"]
  },
  "Can_Uat_Hoa_Hoa": {
    stt: 11,
    hc: "Can uất hóa hỏa",
    phanloai: ["Tạng Can", "Nhiệt", "Thực", "Khí uất hóa hỏa"],
    tc: ["Ngực sườn đau rát", "Dễ cáu gắt, nhức đầu", "Mắt đỏ, miệng đắng", "Tiểu đỏ, đại tiện táo", "Lưỡi đỏ rêu vàng", "Mạch huyền sác"],
    pdt: "Sơ can giải uất, thanh nhiệt tả hỏa",
    bt: "Gia vị tiêu dao tán",
    tpbt: ["Sài hồ 12g", "Đương quy 12g", "Bạch thược 12g", "Bạch truật 12g", "Phục linh 12g", "Cam thảo 6g", "Đan bì 8g", "Chi tử 8g"]
  },
  "Can_Phong_Noi_Dong": {
    stt: 12,
    hc: "Can phong nội động (Huyết hư sinh phong)",
    phanloai: ["Tạng Can", "Nhiệt", "Hư", "Huyết hư sinh phong"],
    tc: ["Chân tay run rẩy, co quắp", "Tê dại đầu ngón tay chân", "Chóng mặt hoa mắt", "Sắc mặt nhợt nhạt", "Mạch tế huyền"],
    pdt: "Dưỡng huyết nhuận can, trấn phong chỉ kinh",
    bt: "Chấn can tức phong thang gia giảm",
    tpbt: ["Ngưu tất 20g", "Đại giả thạch 20g", "Long cốt 12g", "Mẫu lệ 12g", "Quy bản 12g", "Bạch thược 12g", "Huyền sâm 12g", "Thiên môn 12g", "Xuyên luyện tử 8g"]
  },
  "Can_Hoa_Pham_Phe": {
    stt: 13,
    hc: "Can hỏa phạm Phế",
    phanloai: ["Tạng Can & Tạng Phế", "Nhiệt", "Thực", "Can hỏa phạm Phế"],
    tc: ["Ho tức ngực sườn, xúc động đau tăng", "Mặt đỏ, miệng đắng họng khô", "Ho khạc đờm dính có lẫn máu", "Dễ cáu gắt", "Rêu lưỡi vàng mỏng", "Mạch huyền sác"],
    pdt: "Thanh can tả hỏa, thanh phế hóa đàm",
    bt: "Thanh kim hóa đàm thang gia giảm",
    tpbt: ["Hoàng cầm 12g", "Chi tử 12g", "Tang bạch bì 12g", "Bối mẫu 8g", "Mạch môn 12g", "Cát cánh 8g", "Chỉ xác 8g", "Bạch thược 12g"]
  },
  "Dom_Uat_Dam_Nhieu": {
    stt: 14,
    hc: "Đởm uất đàm nhiễu",
    phanloai: ["Phủ Đờm", "Nhiệt", "Thực", "Đàm nhiệt"],
    tc: ["Hồi hộp dễ sợ hãi", "Mất ngủ nhiều mộng", "Chóng mặt, miệng đắng", "Nôn mửa nấc cụt", "Rêu lưỡi vàng nhớt", "Mạch hoạt sác"],
    pdt: "Thanh đởm hòa vị, hóa đàm định chí",
    bt: "Ôn đởm thang",
    tpbt: ["Bán hạ 8g", "Trần bì 8g", "Phục linh 12g", "Chỉ thực 8g", "Trúc nhự 8g", "Sinh khương 3 lát", "Cam thảo 4g"]
  },
  "Dom_Khi_Hu": {
    stt: 15,
    hc: "Đởm khí hư (Đởm hư khí uất)",
    phanloai: ["Phủ Đờm", "Bình", "Hư", "Khí hư"],
    tc: ["Tâm thần bàng hoàng, sợ hãi không yên", "Ngủ không sâu giấc, dễ giật mình", "Miệng đắng, hoa mắt", "Thở dài nhẹ", "Mạch huyền nhược"],
    pdt: "Bổ khí dưỡng đởm, an thần định chí",
    bt: "An thần định chí hoàn",
    tpbt: ["Nhân sâm 12g", "Phục linh 12g", "Phục thần 12g", "Viễn chí 8g", "Long cốt 12g", "Mẫu lệ 12g"]
  },
  "Can_Than_Am_Hu": {
    stt: 16,
    hc: "Can Thận âm hư",
    phanloai: ["Tạng Can & Tạng Thận", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Đầu choáng mắt hoa", "Tai ù ve kêu", "Đau lưng mỏi gối", "Mắt khô xót", "Triều nhiệt đạo hãn", "Mạch tế sác"],
    pdt: "Tư bổ can thận, minh mục",
    bt: "Kỷ cúc địa hoàng hoàn",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 8g", "Trạch tả 6g", "Đan bì 6g", "Phục linh 6g", "Kỷ tử 8g", "Cúc hoa 8g"]
  },
  "Can_Dom_Hu_Nhut_Nhat": {
    stt: 17,
    hc: "Can Đởm hư nhút nhát",
    phanloai: ["Tạng Can & Phủ Đờm", "Bình", "Hư", "Khí hư"],
    tc: ["Tâm thần bàng hoàng, hay sợ hãi", "Nghi ngờ lo âu, ngủ mơ nhiều", "Chóng mặt, hoa mắt, thở dài", "Mạch huyền nhược"],
    pdt: "Ích khí ôn đởm, an thần định chí",
    bt: "Nhân sâm định chí hoàn gia Câu kỷ tử",
    tpbt: ["Nhân sâm 12g", "Phục linh 12g", "Phục thần 12g", "Viễn chí 8g", "Thạch xương bồ 8g", "Câu kỷ tử 12g"]
  },
  "Can_Than_Huyet_Hu": {
    stt: 18,
    hc: "Can Thận huyết hư",
    phanloai: ["Tạng Can & Tạng Thận", "Bình", "Hư", "Huyết hư"],
    tc: ["Đau lưng mỏi gối, tóc bạc sớm", "Chóng mặt ù tai, nhìn mờ", "Móng tay móng chân khô nhợt", "Kinh nguyệt ít sắc nhạt", "Mạch tế nhược"],
    pdt: "Tư bổ can thận, dưỡng huyết điền tinh",
    bt: "Hà thủ ô hoán tán",
    tpbt: ["Hà thủ ô chế 16g", "Thục địa 12g", "Đương quy 12g", "Bạch thược 12g", "Thỏ ty tử 12g", "Ngưu tất 12g"]
  },
  "Can_Than_Khi_Hu": {
    stt: 19,
    hc: "Can Thận khí hư",
    phanloai: ["Tạng Can & Tạng Thận", "Bình", "Hư", "Khí hư"],
    tc: ["Thắt lưng hạ sườn mỏi đau âm ỉ", "Sức yếu mệt mỏi, thở ngắn", "Nhìn vật mờ ảo, di tinh rỉ rả", "Mạch trầm hư nhược"],
    pdt: "Bổ ích can thận, cố bản bồi nguyên",
    bt: "Đỗ trọng hoàn gia Nhân sâm",
    tpbt: ["Đỗ trọng 12g", "Tục đoạn 12g", "Nhân sâm 12g", "Cẩu tích 12g", "Hoài sơn 12g", "Kỷ tử 12g"]
  },

  // =========================================================================
  // 2. TẠNG TÂM & PHỦ TIỂU TRƯỜNG
  // =========================================================================
  "Tam_Hoa_Khang_Thinh": {
    stt: 20,
    hc: "Tâm hỏa kháng thịnh",
    phanloai: ["Tạng Tâm", "Nhiệt", "Thực", "Tâm hỏa"],
    tc: ["Tâm phiền mất ngủ", "Mặt đỏ, miệng khát", "Loét miệng lưỡi, đau rát", "Tiểu đỏ tiểu buốt", "Mạch sác hữu lực"],
    pdt: "Thanh tâm tả hỏa",
    bt: "Đạo xích tán",
    tpbt: ["Sinh địa 12g", "Mộc thông 8g", "Cam thảo 4g", "Trúc diệp 8g"]
  },
  "Tam_Am_Hu": {
    stt: 21,
    hc: "Tâm âm hư",
    phanloai: ["Tạng Tâm", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Tâm quý (hồi hộp)", "Mất ngủ, hay quên", "Triều nhiệt, đạo hãn", "Lưỡi đỏ ít rêu", "Mạch tế sác"],
    pdt: "Tư âm thanh nhiệt, dưỡng tâm an thần",
    bt: "Thiên vương bổ tâm đan",
    tpbt: ["Sinh địa 16g", "Huyền sâm 12g", "Cát cánh 6g", "Viễn chí 6g", "Đương quy 12g", "Ngũ vị tử 6g", "Đan sâm 12g", "Toan táo nhân 12g"]
  },
  "Tam_Duong_Hu": {
    stt: 22,
    hc: "Tâm dương hư",
    phanloai: ["Tạng Tâm", "Hàn", "Hư", "Dương hư"],
    tc: ["Tâm quý, ngực khó chịu", "Sợ lạnh, tay chân lạnh", "Sắc mặt trắng bệch", "Lưỡi nhợt bệu", "Mạch trầm tế vô lực"],
    pdt: "Ôn thông tâm dương",
    bt: "Bảo nguyên thang",
    tpbt: ["Nhân sâm 12g", "Hoàng kỳ 16g", "Nhục quế 4g", "Cam thảo 4g", "Sinh khương 3 lát"]
  },
  "Tam_Huyet_Hu": {
    stt: 23,
    hc: "Tâm huyết hư",
    phanloai: ["Tạng Tâm", "Bình", "Hư", "Huyết hư"],
    tc: ["Hồi hộp trống ngực", "Hay quên, mất ngủ, nhiều mộng", "Sắc mặt không tươi", "Môi lưỡi nhợt", "Mạch tế nhược"],
    pdt: "Bổ huyết dưỡng tâm, an thần",
    bt: "Quy tỳ thang",
    tpbt: ["Nhân sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Đương quy 12g", "Long nhãn 12g", "Toan táo nhân 12g", "Viễn chí 6g", "Hoàng kỳ 12g"]
  },
  "Tam_Khi_Hu": {
    stt: 24,
    hc: "Tâm khí hư",
    phanloai: ["Tạng Tâm", "Bình", "Hư", "Khí hư"],
    tc: ["Tâm quý (hồi hộp)", "Hụt hơi, thở ngắn", "Hoạt động tăng lên triệu chứng nặng hơn", "Mệt mỏi, tự hãn", "Mạch tế vô lực hoặc kết đại"],
    pdt: "Ích khí dưỡng tâm, an thần",
    bt: "Chích cam thảo thang",
    tpbt: ["Chích cam thảo 16g", "Nhân sâm 12g", "Sinh địa 24g", "Quế chi 10g", "A giao 12g", "Mạch môn 12g", "Ma nhân 12g", "Đại táo 4 quả", "Sinh khương 12g"]
  },
  "Tam_Huyet_U_Tro": {
    stt: 25,
    hc: "Tâm huyết ứ trở",
    phanloai: ["Tạng Tâm", "Bình", "Thực", "Huyết ứ"],
    tc: ["Đau nhói vùng tim", "Đau lan ra vai lưng", "Môi móng tay tím tái", "Lưỡi có điểm ứ huyết", "Mạch kết đại hoặc sáp"],
    pdt: "Hoạt huyết hóa ứ, thông dương chỉ thống",
    bt: "Huyết phủ trục ứ thang",
    tpbt: ["Đương quy 12g", "Sinh địa 12g", "Đào nhân 12g", "Hồng hoa 8g", "Chỉ xác 8g", "Xích thược 8g", "Sài hồ 6g", "Cát cánh 6g", "Xuyên khung 8g"]
  },
  "Dam_Me_Tam_Khieu": {
    stt: 26,
    hc: "Đàm mê tâm khiếu",
    phanloai: ["Tạng Tâm", "Bình", "Thực", "Đàm trọc"],
    tc: ["Thần chí mê muội", "Nói năng lảm nhảm hoặc không nói được", "Cổ họng có tiếng đờm lọc sọc", "Rêu lưỡi trắng dày nhớt", "Mạch hoạt"],
    pdt: "Địch đàm khai khiếu, giải uất hóa trọc",
    bt: "Địch đàm thang",
    tpbt: ["Bán hạ 10g", "Trần bì 10g", "Phục linh 12g", "Chỉ thực 10g", "Trúc nhự 10g", "Thạch xương bồ 8g", "Đởm nam tinh 8g", "Chích cam thảo 4g"]
  },
  "Tam_Dam_Hoa": {
    stt: 27,
    hc: "Tâm đàm hỏa nhiễu",
    phanloai: ["Tạng Tâm", "Nhiệt", "Thực", "Đàm hỏa"],
    tc: ["Cuồng loạn, nói năng lảm nhảm", "Tâm phiền bứt rứt, mất ngủ", "Nôn ra đờm dính", "Lưỡi đỏ rêu vàng nhớt", "Mạch hoạt sác"],
    pdt: "Thanh tâm tả hỏa, hóa đàm định chí",
    bt: "Hoàng liên ôn đởm thang",
    tpbt: ["Hoàng liên 8g", "Bán hạ 10g", "Trần bì 10g", "Phục linh 12g", "Chỉ thực 8g", "Trúc nhự 10g", "Thạch xương bồ 8g", "Cam thảo 4g"]
  },
  "Tam_Than_Duong_Hu": {
    stt: 28,
    hc: "Tâm Thận dương hư",
    phanloai: ["Tạng Tâm & Tạng Thận", "Hàn", "Hư", "Dương hư"],
    tc: ["Tâm quý, hồi hộp dữ dội", "Sợ lạnh, tay chân lạnh", "Bụng dưới lạnh đau", "Tiểu tiện ít, phù thũng hai chân", "Mạch trầm tế vi"],
    pdt: "Ôn thông tâm thận, trợ dương lợi thủy",
    bt: "Chân vũ thang hợp Bảo nguyên thang",
    tpbt: ["Phụ tử chế 8g", "Nhân sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Bạch thược 12g", "Nhục quế 4g", "Sinh khương 12g"]
  },
  "Tam_Phe_Khi_Hu": {
    stt: 29,
    hc: "Tâm Phế khí hư",
    phanloai: ["Tạng Tâm & Tạng Phế", "Bình", "Hư", "Khí hư"],
    tc: ["Hồi hộp, tâm quý", "Khó thở, thở ngắn, hụt hơi", "Ho khạc không lực", "Sắc mặt trắng bệch", "Tự hãn (vã mồ hôi)", "Mạch hư nhược hoặc kết đại"],
    pdt: "Bổ tâm ích phế, dưỡng khí an thần",
    bt: "Dưỡng tâm thang hợp Bổ phế thang",
    tpbt: ["Nhân sâm 12g", "Hoàng kỳ 16g", "Bạch truật 12g", "Phục linh 12g", "Đương quy 12g", "Thục địa 12g", "Ngũ vị tử 6g", "Chích cam thảo 4g"]
  },
  "Tam_Can_Huyet_Hu": {
    stt: 30,
    hc: "Tâm Can huyết hư",
    phanloai: ["Tạng Tâm & Tạng Can", "Bình", "Hư", "Huyết hư"],
    tc: ["Hồi hộp mất ngủ, hay quên", "Chóng mặt hoa mắt", "Sắc mặt nhợt nhạt", "Kinh nguyệt ít hoặc bế kinh", "Mạch tế nhược"],
    pdt: "Bổ huyết dưỡng tâm, nhuận can an thần",
    bt: "Tứ vật thang hợp Quy tỳ thang gia giảm",
    tpbt: ["Thục địa 12g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 8g", "Nhân sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Toan táo nhân 12g"]
  },
  "Tam_Phe_Am_Hu": {
    stt: 31,
    hc: "Tâm Phế âm hư",
    phanloai: ["Tạng Tâm & Tạng Phế", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Ho khan ít đờm", "Hồi hộp tâm quý, mất ngủ", "Gò má đỏ, triều nhiệt đạo hãn", "Miệng khô họng táo", "Mạch tế sác"],
    pdt: "Dưỡng âm thanh phế, dưỡng tâm an thần",
    bt: "Dưỡng âm thanh phế thang gia giảm",
    tpbt: ["Bách hợp 12g", "Mạch môn 12g", "Huyền sâm 12g", "Sinh địa 12g", "Bối mẫu 8g", "Toan táo nhân 12g", "Bạch thược 12g"]
  },
  "Tieu_Truong_Hoa_Thinh": {
    stt: 32,
    hc: "Tiểu trường hỏa thịnh",
    phanloai: ["Phủ Tiểu trường", "Nhiệt", "Thực", "Nhiệt thịnh"],
    tc: ["Tâm phiền, loét miệng lưỡi", "Tiểu dắt, tiểu buốt, tiểu ra máu", "Nước tiểu đỏ đậm", "Mạch sác hữu lực"],
    pdt: "Thanh tâm tả hỏa, lợi thủy thông lâm",
    bt: "Đạo xích tán",
    tpbt: ["Sinh địa 12g", "Mộc thông 8g", "Trúc diệp 8g", "Cam thảo 4g"]
  },
  "Tieu_Truong_Hu_Han": {
    stt: 33,
    hc: "Tiểu trường hư hàn",
    phanloai: ["Phủ Tiểu trường", "Hàn", "Hư", "Hư hàn"],
    tc: ["Bụng dưới đau âm ỉ, thích chườm ấm", "Tiểu tiện trong dài", "Đại tiện lỏng nhão", "Sợ lạnh, tay chân lạnh", "Mạch trầm trì vô lực"],
    pdt: "Ôn trung tán hàn, ôn thông tiểu trường",
    bt: "Tiểu kiến trung thang gia giảm",
    tpbt: ["Quế chi 10g", "Bạch thược 20g", "Sinh khương 12g", "Đại táo 4 quả", "Chích cam thảo 6g", "Di đường 40g"]
  },

  // =========================================================================
  // 3. TẠNG TỲ & PHỦ VỊ
  // =========================================================================
  "Ty_Khi_Hu": {
    stt: 34,
    hc: "Tỳ khí hư",
    phanloai: ["Tạng Tỳ", "Bình", "Hư", "Khí hư"],
    tc: ["Ăn kém, bụng đầy sau ăn", "Đại tiện lỏng nhão", "Mệt mỏi, vô lực", "Sắc mặt vàng nhợt", "Mạch hoãn nhược"],
    pdt: "Kiện tỳ ích khí",
    bt: "Tứ quân tử thang",
    tpbt: ["Nhân sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Cam thảo 6g"]
  },
  "Ty_Duong_Hu": {
    stt: 35,
    hc: "Tỳ dương hư",
    phanloai: ["Tạng Tỳ", "Hàn", "Hư", "Dương hư"],
    tc: ["Bụng đau âm ỉ, thích ấm và xoa bóp", "Ăn kém, đại tiện trong lỏng", "Tay chân lạnh, sợ lạnh", "Mạch trầm trì vô lực"],
    pdt: "Ôn trung kiện tỳ",
    bt: "Lý trung hoàn",
    tpbt: ["Nhân sâm 12g", "Can khương 8g", "Bạch truật 12g", "Cam thảo 6g"]
  },
  "Trung_Khi_Ha_Ham": {
    stt: 36,
    hc: "Trung khí hạ hãm",
    phanloai: ["Tạng Tỳ", "Bình", "Hư", "Khí hư hạ hãm"],
    tc: ["Bụng trướng đau tức", "Cảm giác nặng tức vùng hậu môn", "Sa nội tạng (sa dạ dày, tử cung, trực tràng)", "Mệt mỏi, ăn kém", "Mạch hoãn nhược"],
    pdt: "Bổ khí thăng dương, ích khí cử hãm",
    bt: "Bổ trung ích khí thang",
    tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Bạch truật 12g", "Cam thảo 6g", "Đương quy 12g", "Trần bì 6g", "Thăng ma 6g", "Sài hồ 6g"]
  },
  "Han_Thap_Khon_Ty": {
    stt: 37,
    hc: "Hàn thấp khốn tỳ",
    phanloai: ["Tạng Tỳ", "Hàn", "Thực", "Hàn thấp"],
    tc: ["Bụng đầy chướng, nôn nao", "Miệng nhạt dính nhớt, không khát", "Đại tiện lỏng nhão", "Thân thể nặng nề", "Rêu lưỡi trắng dày nhớt"],
    pdt: "Ôn trung hóa thấp, kiện tỳ hòa vị",
    bt: "Bình vị tán",
    tpbt: ["Thương truật 12g", "Hậu phác 12g", "Trần bì 10g", "Cam thảo 4g", "Sinh khương 3 lát", "Đại táo 2 quả"]
  },
  "Thap_Nhiet_Uan_Ty": {
    stt: 38,
    hc: "Thấp nhiệt uẩn tỳ",
    phanloai: ["Tạng Tỳ", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Bụng trướng đầy tức", "Sốt hâm hấp không lui", "Thân mình và mắt vàng khè", "Tiểu tiện ngắn đỏ", "Rêu lưỡi vàng nhớt"],
    pdt: "Thanh nhiệt trừ thấp, lợi đởm thoái hoàng",
    bt: "Nhân trần cao thang",
    tpbt: ["Nhân trần 24g", "Chi tử 12g", "Đại hoàng 8g"]
  },
  "Ty_Vi_Thap_Nhiet": {
    stt: 39,
    hc: "Tỳ Vị thấp nhiệt",
    phanloai: ["Tạng Tỳ & Phủ Vị", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Bụng trướng ăn kém", "Miệng đắng dính nhớt", "Nôn mửa buồn nôn", "Đại tiện nhão dính hôi", "Rêu lưỡi vàng nhớt"],
    pdt: "Thanh nhiệt hóa thấp, kiện tỳ hòa vị",
    bt: "Tam nhân thang",
    tpbt: ["Hạnh nhân 12g", "Bạch đậu khấu 8g", "Ý dĩ nhân 20g", "Bán hạ chế 10g", "Hậu phác 8g", "Thông thảo 6g", "Trúc diệp 8g", "Hoạt thạch 16g"]
  },
  "Ty_Than_Duong_Hu": {
    stt: 40,
    hc: "Tỳ Thận dương hư",
    phanloai: ["Tạng Tỳ & Tạng Thận", "Hàn", "Hư", "Dương hư"],
    tc: ["Ngũ canh tả (tiêu chảy lúc sáng sớm)", "Bụng dưới đau lạnh, thích chườm ấm", "Sợ lạnh, tay chân lạnh", "Sắc mặt nhạt nhợt", "Mạch trầm tế trì vô lực"],
    pdt: "Ôn bổ tỳ thận, cố sáp chỉ tả",
    bt: "Tứ thần hoàn",
    tpbt: ["Bổ cốt chỉ 12g", "Ngũ vị tử 6g", "Nhục đậu khấu 8g", "Ngô thù du 4g"]
  },
  "Ty_Hu_Thap_Thinh": {
    stt: 41,
    hc: "Tỳ hư thấp thịnh",
    phanloai: ["Tạng Tỳ", "Bình", "Hư thực thác tạp", "Tỳ hư thấp trệ"],
    tc: ["Bụng trướng đầy, ăn uống kém", "Đại tiện lỏng nhão dai dẳng", "Chân tay nặng nề, phù nhẹ", "Sắc mặt vàng nhợt", "Mạch nhu hoãn"],
    pdt: "Kiện tỳ ích khí, thẩm thấp chỉ tả",
    bt: "Sâm linh bạch truật tán",
    tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Cam thảo 6g", "Hoài sơn 12g", "Liên nhục 12g", "Ý dĩ 12g", "Cát cánh 6g", "Sa nhân 6g", "Bạch biển đậu 12g"]
  },
  "Ty_Bat_Thong_Huyet": {
    stt: 42,
    hc: "Tỳ không thống huyết",
    phanloai: ["Tạng Tỳ", "Bình", "Hư", "Khí hư không nhiếp huyết"],
    tc: ["Xuất huyết dưới da, chảy máu cam, răng lợi", "Rong kinh, đại tiện ra máu, sắc máu nhạt", "Sắc mặt úa vàng, mệt mỏi", "Ăn kém, phân lỏng nhão", "Mạch tế nhược"],
    pdt: "Kiện tỳ ích khí, nhiếp huyết chỉ huyết",
    bt: "Quy tỳ thang gia giảm",
    tpbt: ["Nhân sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Hoàng kỳ 12g", "Đương quy 12g", "Long nhãn 12g", "Toan táo nhân 12g", "Viễn chí 6g", "Mộc hương 6g", "Chích cam thảo 4g"]
  },
  "Ty_Am_Hu": {
    stt: 43,
    hc: "Tỳ âm hư",
    phanloai: ["Tạng Tỳ", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Thân hình gầy còm", "Miệng khô môi nẻ", "Ăn kém không thấy ngon", "Đại tiện khô dính", "Lưỡi đỏ ít rêu", "Mạch tế sác"],
    pdt: "Tư dưỡng tỳ âm, ích vị sinh tân",
    bt: "Tư âm kiện tỳ thang",
    tpbt: ["Sa sâm 12g", "Mạch môn 12g", "Bạch truật 12g", "Hoài sơn 12g", "Bạch thược 12g", "Cam thảo 4g", "Ngọc trúc 12g"]
  },
  "Ty_Than_Khi_Hu": {
    stt: 44,
    hc: "Tỳ Thận khí hư",
    phanloai: ["Tạng Tỳ & Tạng Thận", "Bình", "Hư", "Khí hư"],
    tc: ["Tinh thần mệt mỏi, sức yếu", "Bụng trướng đầy sau ăn, đại tiện lỏng", "Đau lưng mỏi gối, chân tay yếu", "Tiểu tiện rỉ rả hoặc tiểu đêm nhiều lần", "Mạch trầm nhược"],
    pdt: "Kiện tỳ ích khí, ôn bổ thận khí",
    bt: "Sâm linh bạch truật tán hợp Thận khí hoàn",
    tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Hoài sơn 12g", "Thục địa 12g", "Sơn thù nhục 8g", "Trạch tả 6g", "Đan bì 6g"]
  },
  "Ty_Than_Am_Hu": {
    stt: 45,
    hc: "Tỳ Thận âm hư",
    phanloai: ["Tạng Tỳ & Tạng Thận", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Miệng khô khát nước uống nhiều", "Ăn nhiều mau đói", "Thân hình gầy sút", "Đau lưng mỏi gối", "Đi tiểu nhiều lần", "Mạch tế sác"],
    pdt: "Tư dưỡng tỳ thận, dưỡng âm sinh tân",
    bt: "Tả quy hoàn hợp Ích vị thang",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Kỷ tử 12g", "Thỏ ty tử 12g", "Sa sâm 12g", "Mạch môn 12g", "Ngọc trúc 12g"]
  },
  "Ty_Hu_Thuy_Tre": {
    stt: 46,
    hc: "Tỳ hư thủy trệ",
    phanloai: ["Tạng Tỳ", "Bình", "Hư thực thác tạp", "Thủy thũng"],
    tc: ["Phù nhẹ mi mắt và mặt vào buổi sáng", "Bụng trướng, ăn uống kém", "Tiểu tiện ít, nước tiểu trong", "Tay chân nặng nề mệt mỏi", "Mạch nhu hoãn"],
    pdt: "Kiện tỳ lợi thủy, thẩm thấp tiêu thũng",
    bt: "Ngũ linh tán hợp Tứ quân tử thang",
    tpbt: ["Bạch truật 12g", "Phục linh 12g", "Trạch tả 12g", "Trư linh 12g", "Quế chi 8g", "Đảng sâm 12g", "Cam thảo 4g"]
  },
  "Vi_Hoa_Xi_Thinh": {
    stt: 47,
    hc: "Vị hỏa xí thịnh",
    phanloai: ["Phủ Vị", "Nhiệt", "Thực", "Vị hỏa"],
    tc: ["Đau rát vùng thượng vị", "Ăn nhiều mau đói", "Miệng hôi, sưng đau lợi răng", "Khát thích uống nước lạnh", "Mạch hoạt sác"],
    pdt: "Thanh vị tả hỏa",
    bt: "Thanh vị tán",
    tpbt: ["Hoàng liên 8g", "Thăng ma 6g", "Sinh địa 12g", "Đan bì 8g", "Đương quy 12g"]
  },
  "Han_Ta_Pham_Vi": {
    stt: 48,
    hc: "Hàn tà phạm vị",
    phanloai: ["Phủ Vị", "Hàn", "Thực", "Hàn tà"],
    tc: ["Đau bụng vùng vị quản dữ dội", "Gặp lạnh đau tăng, ấm giảm", "Nôn ra nước trong", "Rêu lưỡi trắng", "Mạch trầm khẩn"],
    pdt: "Ôn trung tán hàn, chỉ thống",
    bt: "Lương phu hoàn",
    tpbt: ["Cao lương khương 10g", "Hương phụ 12g"]
  },
  "Vi_Han_Hu": {
    stt: 49,
    hc: "Vị hư hàn",
    phanloai: ["Phủ Vị", "Hàn", "Hư", "Hư hàn"],
    tc: ["Vùng thượng vị đau âm ỉ liên miên", "Thích xoa bóp và chườm ấm", "Nôn ra nước trong, ăn kém", "Mệt mỏi tay chân lạnh", "Mạch trầm tế"],
    pdt: "Ôn trung kiện vị, hoãn cấp chỉ thống",
    bt: "Hoàng kỳ kiến trung thang",
    tpbt: ["Hoàng kỳ 16g", "Quế chi 10g", "Bạch thược 20g", "Sinh khương 12g", "Đại táo 4 quả", "Chích cam thảo 6g", "Di đường 40g"]
  },
  "Vi_Am_Hu": {
    stt: 50,
    hc: "Vị âm hư",
    phanloai: ["Phủ Vị", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Vùng thượng vị đau âm ỉ", "Đói mà không muốn ăn", "Miệng khô họng táo", "Đại tiện khô kết", "Mạch tế sác"],
    pdt: "Tư dưỡng vị âm",
    bt: "Sa sâm mạch đông thang",
    tpbt: ["Sa sâm 12g", "Mạch môn 12g", "Ngọc trúc 12g", "Sinh địa 12g", "Thiên hoa phấn 12g", "Cam thảo 4g"]
  },
  "Thuc_Tich_Vi_Quan": {
    stt: 51,
    hc: "Thực trệ Vị quản",
    phanloai: ["Phủ Vị", "Bình", "Thực", "Thực tích"],
    tc: ["Bụng thượng vị trướng đau, cự án", "Ợ chua, hơi thở hôi thối", "Nôn ra thức ăn chưa tiêu", "Rêu lưỡi dày nhớt"],
    pdt: "Tiêu thực đạo trệ, hòa vị giáng nghịch",
    bt: "Bảo hòa hoàn",
    tpbt: ["Sơn tra 12g", "Thần khúc 12g", "Lai phục tử 8g", "Bán hạ 10g", "Trần bì 8g", "Phục linh 12g", "Liên kiều 8g"]
  },

  // =========================================================================
  // 4. TẠNG PHẾ & PHỦ ĐẠI TRƯỜNG
  // =========================================================================
  "Phe_Khi_Hu": {
    stt: 52,
    hc: "Phế khí hư",
    phanloai: ["Tạng Phế", "Bình", "Hư", "Khí hư"],
    tc: ["Ho khạc không lực", "Thở ngắn, ngại nói", "Tiếng nói nhỏ yếu", "Tự hãn (vã mồ hôi)", "Dễ cảm mạo", "Mạch nhược"],
    pdt: "Bổ phế ích khí",
    bt: "Bổ phế thang",
    tpbt: ["Nhân sâm 12g", "Hoàng kỳ 16g", "Thục địa 12g", "Ngũ vị tử 6g", "Tang bạch bì 12g", "Tử uyển 12g"]
  },
  "Phe_Am_Hu": {
    stt: 53,
    hc: "Phế âm hư",
    phanloai: ["Tạng Phế", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Ho khan ít đờm", "Đờm dính khó khạc hoặc có máu", "Họng khô miệng rát", "Triều nhiệt, gò má đỏ", "Mạch tế sác"],
    pdt: "Tư âm nhuận phế, chỉ khái",
    bt: "Bách hợp cố kim thang",
    tpbt: ["Bách hợp 12g", "Sinh địa 12g", "Thục địa 12g", "Mạch môn 12g", "Huyền sâm 8g", "Bối mẫu 8g", "Cát cánh 6g", "Đương quy 12g", "Bạch thược 12g"]
  },
  "Phong_Han_Pham_Phe": {
    stt: 54,
    hc: "Phong hàn phạm phế",
    phanloai: ["Tạng Phế", "Hàn", "Thực", "Phong hàn"],
    tc: ["Ho ngứa họng", "Đờm trắng loãng dễ khạc", "Nghẹt mũi, chảy nước mũi trong", "Sợ lạnh, sốt nhẹ", "Mạch phù khẩn"],
    pdt: "Tán hàn tuyên phế, chỉ khái",
    bt: "Hạnh tô tán",
    tpbt: ["Tô diệp 10g", "Hạnh nhân 10g", "Tiền hồ 10g", "Cát cánh 8g", "Chỉ xác 8g", "Trần bì 8g", "Phục linh 10g", "Bán hạ 8g", "Cam thảo 4g"]
  },
  "Dam_Nhiet_Ung_Phe": {
    stt: 55,
    hc: "Đàm nhiệt ủng phế",
    phanloai: ["Tạng Phế", "Nhiệt", "Thực", "Đàm nhiệt"],
    tc: ["Ho hen, thở gấp", "Đờm nhiều đặc vàng hoặc mùi hôi", "Sốt khát nước", "Ngực đau tức", "Mạch hoạt sác"],
    pdt: "Thanh nhiệt tuyên phế, hóa đàm định suyễn",
    bt: "Định suyễn thang",
    tpbt: ["Ma hoàng 8g", "Hạnh nhân 10g", "Tang bạch bì 12g", "Hoàng cầm 10g", "Khoản đông hoa 10g", "Tô tử 8g", "Bán hạ 8g", "Bạch quả 10 hạt", "Cam thảo 4g"]
  },
  "Phong_Nhiet_Pham_Phe": {
    stt: 56,
    hc: "Phong nhiệt phạm phế",
    phanloai: ["Tạng Phế", "Nhiệt", "Thực", "Phong nhiệt"],
    tc: ["Ho khan hoặc đờm vàng dính", "Sốt, sợ gió", "Đau họng, mũi chảy nước đặc", "Đầu lưỡi đỏ, rêu mỏng vàng", "Mạch phù sác"],
    pdt: "Sơ phong thanh nhiệt, tuyên phế chỉ khái",
    bt: "Tang cúc ẩm",
    tpbt: ["Tang diệp 10g", "Cúc hoa 10g", "Hạnh nhân 10g", "Liên kiều 10g", "Bạc hà 4g", "Cát cánh 8g", "Cam thảo 4g", "Lô căn 12g"]
  },
  "Phe_Ung": {
    stt: 57,
    hc: "Phế ung",
    phanloai: ["Tạng Phế", "Nhiệt", "Thực", "Hỏa độc / Bài nùng"],
    tc: ["Ho khạc đờm mủ tanh hôi", "Ngực đau tức", "Sốt cao rét run", "Sắc mặt u ám", "Rêu lưỡi vàng dày", "Mạch hoạt sác"],
    pdt: "Thanh nhiệt giải độc, bài nùng tiêu ung",
    bt: "Thiên kim vị kinh thang",
    tpbt: ["Vĩ kinh 24g", "Đông qua nhân 16g", "Ý dĩ nhân 24g", "Đào nhân 10g"]
  },
  "Phe_Ty_Khi_Hu": {
    stt: 58,
    hc: "Phế Tỳ khí hư",
    phanloai: ["Tạng Phế & Tạng Tỳ", "Bình", "Hư", "Khí hư"],
    tc: ["Ho hen lâu ngày, đờm trắng loãng", "Ăn kém, bụng trướng đầy", "Tiếng nói nhỏ yếu, hụt hơi", "Đại tiện lỏng nhão", "Mệt mỏi, vã mồ hôi", "Mạch hư nhược"],
    pdt: "Kiện tỳ ích khí, bổ phế hóa đàm",
    bt: "Lục quân tử thang",
    tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Cam thảo 6g", "Trần bì 8g", "Bán hạ 8g"]
  },
  "Dam_Thap_Un_Phe": {
    stt: 59,
    hc: "Đàm thấp uẩn phế",
    phanloai: ["Tạng Phế", "Hàn", "Thực", "Đàm thấp"],
    tc: ["Ho khạc đờm nhiều trắng loãng dính", "Bụng trướng đầy, ăn kém", "Ngực trướng khó thở", "Rêu lưỡi trắng dính", "Mạch nhu hoặc hoạt"],
    pdt: "Táo thấp hóa đàm, lý khí chỉ khái",
    bt: "Nhị trần thang hợp Tam tử dưỡng thân thang",
    tpbt: ["Bán hạ 10g", "Trần bì 10g", "Phục linh 12g", "Cam thảo 4g", "Bạch giới tử 8g", "Tô tử 8g", "Lai phục tử 8g"]
  },
  "Phong_Han_Phe_Dam_Am": {
    stt: 60,
    hc: "Phong hàn phạm phế kiêm đàm ẩm nội đình",
    phanloai: ["Tạng Phế", "Hàn", "Thực", "Phong hàn đàm ẩm"],
    tc: ["Ho hen thở gấp, ngực trướng đầy", "Đờm trắng loãng nhiều bọt dễ khạc", "Sợ lạnh, sốt nhẹ, không mồ hôi", "Thân thể đau mỏi", "Mạch phù khẩn hoặc tế hoạt"],
    pdt: "Giải biểu tán hàn, ôn phế hóa ẩm",
    bt: "Tiểu thanh long thang",
    tpbt: ["Ma hoàng 8g", "Quế chi 8g", "Tế tân 4g", "Can khương 8g", "Bán hạ 8g", "Ngũ vị tử 6g", "Bạch thược 12g", "Chích cam thảo 6g"]
  },

  "Phe_Vi_Tao_Nhiet": {
    stt: 61,
    hc: "Phế Vị táo nhiệt",
    phanloai: ["Tạng Phế & Phủ Vị", "Nhiệt", "Thực", "Táo nhiệt"],
    tc: ["Ho khô không đờm hoặc đờm dính máu", "Họng khô miệng rát", "Sốt nhẹ, khát nước", "Lưỡi đỏ rêu vàng khô", "Mạch tế sác"],
    pdt: "Thanh phế nhuận táo, dưỡng âm sinh tân",
    bt: "Thanh táo cứu phế thang",
    tpbt: ["Thạch cao 20g", "Tang diệp 12g", "Nhân sâm 8g", "A giao 8g", "Mạch môn 12g", "Hạnh nhân 8g", "Ma nhân 12g", "Tỳ bà diệp 12g", "Cam thảo 4g"]
  },
  "Dai_Truong_Thap_Nhiet": {
    stt: 62,
    hc: "Đại trường thấp nhiệt",
    phanloai: ["Phủ Đại trường", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Đau bụng quặn, mót rặn", "Đại tiện ra máu mủ hoặc chất nhầy", "Hậu môn nóng rát", "Tiểu ngắn đỏ", "Mạch hoạt sác"],
    pdt: "Thanh nhiệt trừ thấp, hành khí hóa trệ",
    bt: "Bạch đầu ông thang",
    tpbt: ["Bạch đầu ông 12g", "Hoàng liên 6g", "Hoàng bá 12g", "Tần bì 12g"]
  },
  "Dai_Truong_Tan_Dich_Kho_Kiet": {
    stt: 63,
    hc: "Đại trường tân dịch khô kiệt",
    phanloai: ["Phủ Đại trường", "Bình", "Hư", "Tân dịch khuy tổn"],
    tc: ["Đại tiện táo bón lâu ngày", "Khó đi, phân khô như phân dê", "Họng khô miệng khát", "Mạch tế sáp"],
    pdt: "Nhuận tràng thông tiện",
    bt: "Ma tử nhân hoàn",
    tpbt: ["Ma tử nhân 12g", "Bạch thược 12g", "Chỉ xác 8g", "Đại hoàng 12g", "Hậu phác 8g", "Hạnh nhân 8g"]
  },
  "Dai_Truong_Thuc_Nhiet": {
    stt: 64,
    hc: "Đại trường thực nhiệt",
    phanloai: ["Phủ Đại trường", "Nhiệt", "Thực", "Thực nhiệt"],
    tc: ["Đại tiện táo bón nhiều ngày không đi", "Bụng trướng đầy cự án", "Triều nhiệt, phiền táo", "Rêu lưỡi vàng khô dày", "Mạch trầm thực"],
    pdt: "Thanh nhiệt tả hạ, nhuận táo thông tiện",
    bt: "Đại thừa khí thang",
    tpbt: ["Đại hoàng 12g", "Hậu phác 12g", "Chỉ xác 8g", "Mang tiêu 12g"]
  },
  "Dai_Truong_Hu_Han": {
    stt: 65,
    hc: "Đại trường hư hàn",
    phanloai: ["Phủ Đại trường", "Hàn", "Hư", "Hư hàn"],
    tc: ["Đại tiện lỏng nhão kéo dài", "Bụng đau âm ỉ thích chườm ấm", "Sa trực tràng (trĩ nội sa)", "Mệt mỏi, sợ lạnh", "Mạch trầm nhược"],
    pdt: "Ôn trung tràng, cố sáp chỉ tả",
    bt: "Chân vũ thang hợp Lương phụ hoàn gia giảm",
    tpbt: ["Phụ tử chế 8g", "Bạch truật 12g", "Phục linh 12g", "Kha tử 8g", "Nhục đậu khấu 8g"]
  },

  // =========================================================================
  // 5. TẠNG THẬN, PHỦ BÀNG QUANG & TAM TIÊU
  // =========================================================================
  "Than_Am_Hu": {
    stt: 66,
    hc: "Thận âm hư",
    phanloai: ["Tạng Thận", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Đau lưng mỏi gối", "Chóng mặt ù tai", "Ngũ tâm phiền nhiệt", "Di tinh, triều nhiệt", "Lưỡi đỏ ít rêu", "Mạch tế sác"],
    pdt: "Tư bổ thận âm",
    bt: "Lục vị địa hoàng hoàn",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 8g", "Trạch tả 6g", "Đan bì 6g", "Phục linh 6g"]
  },
  "Than_Duong_Hu": {
    stt: 67,
    hc: "Thận dương hư",
    phanloai: ["Tạng Thận", "Hàn", "Hư", "Dương hư"],
    tc: ["Đau lưng mỏi gối", "Sợ lạnh, tay chân lạnh", "Liệt dương, ngũ canh tả", "Tiểu đêm nhiều lần hoặc phù thũng", "Mạch trầm nhược"],
    pdt: "Ôn bổ thận dương",
    bt: "Thận khí hoàn",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 8g", "Trạch tả 6g", "Đan bì 6g", "Phục linh 6g", "Nhục quế 4g", "Phụ tử chế 4g"]
  },
  "Than_Am_Duong_Luong_Hu": {
    stt: 68,
    hc: "Thận âm dương lưỡng hư",
    phanloai: ["Tạng Thận", "Hàn nhiệt thác tạp", "Hư", "Âm dương lưỡng hư"],
    tc: ["Đau lưng mỏi gối", "Sợ lạnh lại vừa triều nhiệt về chiều", "Ù tai hoa mắt", "Di tinh hoặc liệt dương", "Tiểu đêm nhiều", "Mạch trầm tế vô lực"],
    pdt: "Âm dương song bổ, tư thận tráng dương",
    bt: "Bát vị hoàn gia vị",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 8g", "Trạch tả 6g", "Đan bì 6g", "Phục linh 6g", "Nhục quế 4g", "Phụ tử chế 4g", "Kỷ tử 8g", "Thỏ ty tử 8g"]
  },
  "Than_Khi_Bat_Co": {
    stt: 69,
    hc: "Thận khí bất cố",
    phanloai: ["Tạng Thận", "Bình", "Hư", "Khí hư bất cố"],
    tc: ["Tiểu tiện rỉ rả không tự chủ", "Hoạt tinh, di tinh", "Tai ù điếc sớm", "Răng lung lay, tóc rụng nhiều", "Mạch nhược"],
    pdt: "Ích thận cố tinh, sáp niệu",
    bt: "Kim tỏa cố tinh hoàn",
    tpbt: ["Sa uyển tử 12g", "Liên tu 8g", "Liên nhục 12g", "Khiếm thực 12g", "Long cốt 12g", "Mẫu lệ 12g"]
  },
  "Than_Tinh_Bat_Tuc": {
    stt: 70,
    hc: "Thận tinh bất túc",
    phanloai: ["Tạng Thận", "Bình", "Hư", "Tinh huyết khuy tổn"],
    tc: ["Trẻ em chậm mọc răng, chậm biết đi", "Người lớn tinh thần đần độn, trí nhớ giảm sút", "Chân gối yếu mềm", "Tóc bạc sớm", "Mạch tế vô lực"],
    pdt: "Bổ thận đầy tinh, dưỡng tủy bổ não",
    bt: "Tả quy hoàn",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Sơn dược 8g", "Kỷ tử 8g", "Thỏ ty tử 8g", "Lộc giác giao 8g", "Quy bản giao 8g", "Ngưu tất 8g"]
  },
  "Than_Bat_Nap_Khi": {
    stt: 71,
    hc: "Thận bất nạp khí",
    phanloai: ["Tạng Thận & Tạng Phế", "Hàn", "Hư", "Thận bất nạp khí"],
    tc: ["Ho hen lâu ngày", "Thở gấp khi vận động", "Hơi thở ngắn khò khè", "Sợ lạnh, tự hãn", "Mạch trầm tế vô lực"],
    pdt: "Ôn thận nạp khí, định suyễn",
    bt: "Hồ đào thang",
    tpbt: ["Hồ đào nhục 12g", "Bổ cốt chỉ 12g", "Nhục quế 4g", "Ngũ vị tử 6g", "Nhân sâm 8g"]
  },
  "Than_Duong_Hu_Thuy_Thung": {
    stt: 72,
    hc: "Thận dương hư thủy thũng",
    phanloai: ["Tạng Thận", "Hàn", "Hư", "Dương hư thủy thũng"],
    tc: ["Phù thũng toàn thân (nặng ở hai chân)", "Ấn lõm lâu hồi phục", "Sợ lạnh, tay chân lạnh", "Tiểu tiện ít, nước tiểu trong", "Mạch trầm tế nhược"],
    pdt: "Ôn thận trợ dương, hóa khí lợi thủy",
    bt: "Chân vũ thang",
    tpbt: ["Phụ tử chế 8g", "Bạch truật 12g", "Phục linh 12g", "Bạch thược 12g", "Sinh khương 12g"]
  },
  "Menh_Mon_Hoa_Suy": {
    stt: 73,
    hc: "Mệnh môn hỏa suy",
    phanloai: ["Tạng Thận", "Hàn", "Hư", "Dương hư suy"],
    tc: ["Sợ lạnh, tay chân lạnh ngắt", "Liệt dương, di tinh, tinh lạnh", "Đau lưng mỏi gối co rút", "Ngũ canh tả", "Mạch trầm tế vi"],
    pdt: "Ôn bổ mệnh môn hỏa, tư âm trợ dương",
    bt: "Hữu quy hoàn",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 8g", "Kỷ tử 8g", "Đỗ trọng 12g", "Thỏ ty tử 12g", "Phụ tử chế 8g", "Nhục quế 4g", "Đương quy 8g", "Lộc giác giao 8g"]
  },
  "Phe_Than_Khi_Hu": {
    stt: 74,
    hc: "Phế Thận khí hư",
    phanloai: ["Tạng Phế & Tạng Thận", "Bình", "Hư", "Khí hư"],
    tc: ["Ho hen lâu ngày, thở gấp", "Thở vào khó hơn thở ra", "Động làm thì khó thở tăng", "Sợ lạnh, tự hãn", "Mạch trầm tế vô lực"],
    pdt: "Bổ phế ích khí, nạp thận bình suyễn",
    bt: "Thất vị đô khí hoàn",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 8g", "Trạch tả 6g", "Đan bì 6g", "Phục linh 6g", "Ngũ vị tử 6g"]
  },
  "Bang_Quang_Thap_Nhiet": {
    stt: 75,
    hc: "Bàng quang thấp nhiệt",
    phanloai: ["Phủ Bàng quang", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Tiểu dắt, tiểu buốt, tiểu gấp", "Nước tiểu đục đỏ hoặc có sỏi", "Bụng dưới trướng đau", "Mạch hoạt sác"],
    pdt: "Thanh nhiệt lợi thấp, thông lâm bài thạch",
    bt: "Bát chính tán",
    tpbt: ["Xa tiền tử 12g", "Cù mạch 12g", "Biển súc 12g", "Hoạt thạch 12g", "Chi tử 8g", "Đại hoàng 8g", "Mộc thông 8g", "Cam thảo 4g"]
  },
  "Bang_Quang_Han_Hu": {
    stt: 76,
    hc: "Bàng quang hư hàn",
    phanloai: ["Phủ Bàng quang", "Hàn", "Hư", "Hư hàn"],
    tc: ["Tiểu đêm nhiều lần", "Tiểu tiện không tự chủ hoặc tiểu sót", "Nước tiểu trong dài", "Sợ lạnh", "Mạch trầm nhược"],
    pdt: "Ôn thận bổ dương, sáp niệu chỉ di",
    bt: "Tang phiêu tiêu tán",
    tpbt: ["Tang phiêu tiêu 12g", "Viễn chí 8g", "Thạch xương bồ 8g", "Long cốt 12g", "Nhân sâm 12g", "Phục thần 12g", "Đương quy 12g", "Quy bản 12g"]
  },
  "Bang_Quang_Huyet_Lam": {
    stt: 77,
    hc: "Thấp nhiệt bàng quang (Huyết lâm)",
    phanloai: ["Phủ Bàng quang", "Nhiệt", "Thực", "Thấp nhiệt huyết lâm"],
    tc: ["Tiểu buốt dắt, nước tiểu đỏ lẫn máu", "Bụng dưới trướng đau", "Sốt nhẹ miệng khô", "Mạch sác"],
    pdt: "Thanh nhiệt lương huyết, thông lâm chỉ huyết",
    bt: "Tiểu kế ẩm",
    tpbt: ["Sinh địa 16g", "Mộc thông 8g", "Hoạt thạch 12g", "Cù mạch 12g", "Xa tiền tử 12g", "Ngó sen 12g", "Trắc bách diệp 12g"]
  },
  "Thach_Lam_Thap_Nhiet": {
    stt: 78,
    hc: "Thạch lâm (Sỏi tiết niệu do thấp nhiệt)",
    phanloai: ["Phủ Bàng quang", "Nhiệt", "Thực", "Thấp nhiệt thạch lâm"],
    tc: ["Tiểu buốt, tiểu dắt, tiểu ngắt quãng", "Đau quặn vùng thắt lưng lan xuống bẹn", "Nước tiểu đục hoặc có máu", "Có thể ra sỏi nhỏ", "Mạch hoạt sác"],
    pdt: "Thanh nhiệt lợi thấp, thông lâm bài thạch",
    bt: "Tam kim thang gia giảm",
    tpbt: ["Kim tiền thảo 30g", "Hải kim sa 12g", "Kê nội kim 8g", "Xa tiền tử 12g", "Trạch tả 12g", "Bạch mao căn 16g", "Chỉ xác 8g"]
  },
  "Tam_Tieu_Hoa_Doc": {
    stt: 79,
    hc: "Tam tiêu hỏa độc kháng thịnh",
    phanloai: ["Tam tiêu", "Nhiệt", "Thực", "Hỏa độc"],
    tc: ["Sốt cao nội nhiệt", "Phiền táo bứt rứt", "Miệng rát họng khô", "Nôn mửa, tiểu đỏ đại tiện táo", "Lưỡi đỏ rêu vàng", "Mạch sác hữu lực"],
    pdt: "Tả hỏa giải độc, thanh nhiệt tam tiêu",
    bt: "Hoàng liên giải độc thang",
    tpbt: ["Hoàng liên 8g", "Hoàng cầm 8g", "Hoàng bá 8g", "Chi tử 8g"]
  },

  // =========================================================================
  // 6. KHÍ - HUYẾT - TÂN DỊCH & TOÀN THÂN
  // =========================================================================
  "Khi_Huyet_Luong_Hu": {
    stt: 80,
    hc: "Khí huyết lưỡng hư",
    phanloai: ["Khí Huyết Tân Dịch", "Bình", "Hư", "Khí huyết hư"],
    tc: ["Sắc mặt nhợt nhạt", "Mệt mỏi hụt hơi", "Hoa mắt chóng mặt", "Hồi hộp ngủ kém", "Mạch hư nhược"],
    pdt: "Song bổ khí huyết",
    bt: "Bát trân thang",
    tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Cam thảo 4g", "Đương quy 12g", "Thục địa 12g", "Bạch thược 12g", "Xuyên khung 8g"]
  },
  "Khi_Tre_Huyet_U": {
    stt: 81,
    hc: "Khí trệ huyết ứ",
    phanloai: ["Khí Huyết Tân Dịch", "Bình", "Thực", "Khí trệ huyết ứ"],
    tc: ["Đau nhói cố định một chỗ", "Cự án (đau tăng khi ấn)", "Sắc mặt u ám", "Lưỡi tím hoặc có điểm ứ huyết", "Mạch sáp hoặc huyền"],
    pdt: "Hành khí hoạt huyết, hóa ứ chỉ thống",
    bt: "Cách hạ trục ứ thang",
    tpbt: ["Đương quy 12g", "Xuyên khung 8g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Chỉ xác 8g", "Hương phụ 8g", "Ô dược 8g", "Ngũ linh chi 8g", "Đan bì 8g", "Cam thảo 4g"]
  },
  "Khi_Am_Luong_Hu": {
    stt: 82,
    hc: "Khí âm lưỡng hư",
    phanloai: ["Khí Huyết Tân Dịch", "Nhiệt", "Hư", "Khí âm lưỡng hư"],
    tc: ["Mệt mỏi, hụt hơi, ngại nói", "Miệng khô họng rát", "Tự hãn kết hợp đạo hãn", "Mạch tế nhược vô lực"],
    pdt: "Ích khí sinh tân, liễm hãn dưỡng âm",
    bt: "Sinh mạch tán",
    tpbt: ["Nhân sâm 12g", "Mạch môn 12g", "Ngũ vị tử 6g"]
  },
  "Khi_Hu_Huyet_U": {
    stt: 83,
    hc: "Khí hư huyết ứ",
    phanloai: ["Khí Huyết Tân Dịch", "Bình", "Hư thực thác tạp", "Khí hư huyết ứ"],
    tc: ["Bán thân bất toại", "Méo miệng lệch mắt", "Nói ngọng, chảy nước dãi", "Tay chân tê dại", "Mạch tế sáp hoặc hư nhược"],
    pdt: "Bổ khí hoạt huyết, thông kinh lạc",
    bt: "Bổ dương hoàn ngũ thang",
    tpbt: ["Hoàng kỳ 40g", "Đương quy vĩ 8g", "Xích thược 8g", "Đào nhân 8g", "Hồng hoa 8g", "Địa long 8g", "Xuyên khung 8g"]
  },
  "Khi_Hu_Tao_Bon": {
    stt: 84,
    hc: "Khí hư tràng táo",
    phanloai: ["Phủ Đại trường", "Bình", "Hư", "Khí hư tràng táo"],
    tc: ["Đại tiện khó đi dù phân không quá khô cứng", "Rặn nhiều vã mồ hôi, hụt hơi mệt mỏi", "Sắc mặt nhợt nhạt", "Sức yếu ngại nói", "Mạch hư nhược"],
    pdt: "Bổ khí nhuận tràng, thông tiện",
    bt: "Hoàng kỳ thang gia giảm",
    tpbt: ["Hoàng kỳ 16g", "Trần bì 8g", "Bạch truật 12g", "Đương quy 12g", "Hỏa ma nhân 12g", "Cam thảo 4g"]
  },
  "Vong_Duong": {
    stt: 85,
    hc: "Vong dương",
    phanloai: ["Toàn thân", "Hàn", "Hư", "Vong dương"],
    tc: ["Vã mồ hôi lạnh như giọt sương", "Tay chân lạnh ngắt quá gối/khuỷu", "Thở yếu ớt, sắc mặt bệch tái", "Tinh thần lơ mơ", "Mạch vi vi muốn tuyệt"],
    pdt: "Hồi dương cứu nghịch, cố thoát chỉ hãn",
    bt: "Tứ nghịch thang hợp Sâm phụ thang",
    tpbt: ["Phụ tử chế 12g", "Can khương 12g", "Nhân sâm 12g", "Chích cam thảo 6g"]
  },
  "Vong_Am": {
    stt: 86,
    hc: "Vong âm",
    phanloai: ["Toàn thân", "Nhiệt", "Hư", "Vong âm"],
    tc: ["Mồ hôi ra nhiều nóng dính", "Thân mình nóng, tay chân ấm", "Khát nước thích uống lạnh", "Thở gấp, da khô nhăn", "Mạch tế sác vô lực muốn tuyệt"],
    pdt: "Tư âm cứu thoát, sinh tân liễm hãn",
    bt: "Sinh mạch tán gia Mẫu lệ, Quy bản",
    tpbt: ["Nhân sâm 12g", "Mạch môn 12g", "Ngũ vị tử 6g", "Mẫu lệ 16g", "Quy bản 16g"]
  },
  "Dam_Khi_Uat_Ket": {
    stt: 87,
    hc: "Đàm khí uất kết (Mai hạt khí)",
    phanloai: ["Khí Huyết Tân Dịch", "Bình", "Thực", "Đàm khí uất kết"],
    tc: ["Họng vướng như có hạt mận, khạc không ra nuốt không xuống", "Ngực sườn trướng đầy", "Hay thở dài, lo âu", "Rêu lưỡi trắng dính", "Mạch huyền hoạt"],
    pdt: "Hành khí giải uất, hóa đàm giáng nghịch",
    bt: "Bán hạ hậu phác thang",
    tpbt: ["Bán hạ 12g", "Hậu phác 8g", "Phục linh 12g", "Sinh khương 12g", "Tô diệp 8g"]
  },
  "Dam_Tre_Kinh_Lac": {
    stt: 88,
    hc: "Đàm trệ kinh lạc",
    phanloai: ["Kinh Lạc", "Bình", "Thực", "Đàm trệ"],
    tc: ["Chân tay tê dại, co quắp", "Xuất hiện u cục mềm dưới da", "Khớp sưng đau không đỏ", "Mạch hoạt"],
    pdt: "Hóa đàm thông lạc, nhuyễn kiên tán kết",
    bt: "Nhị trần thang gia Bạch giới tử, Độc hoạt, Tần giao",
    tpbt: ["Bán hạ 10g", "Trần bì 10g", "Phục linh 12g", "Cam thảo 4g", "Bạch giới tử 8g", "Độc hoạt 10g", "Tần giao 10g"]
  },
  "Dam_Nhiet_Nhieu_Tam": {
    stt: 89,
    hc: "Đàm nhiệt nhiễu Tâm",
    phanloai: ["Tạng Tâm", "Nhiệt", "Thực", "Đàm nhiệt"],
    tc: ["Tâm phiền mất ngủ, nhiều mộng", "Hồi hộp hoảng hốt", "Miệng đắng, cổ họng vướng đờm", "Lưỡi đỏ rêu vàng nhớt", "Mạch hoạt sác"],
    pdt: "Thanh nhiệt hóa đàm, hòa vị an thần",
    bt: "Hoàng liên ôn đởm thang",
    tpbt: ["Hoàng liên 8g", "Bán hạ 10g", "Trần bì 10g", "Phục linh 12g", "Chỉ thực 8g", "Trúc nhự 10g", "Cam thảo 4g", "Sinh khương 3 lát"]
  },
  "Dam_Hoa_Thuong_Nhieu": {
    stt: 90,
    hc: "Đàm hỏa thượng nhiễu",
    phanloai: ["Tạng Tâm", "Nhiệt", "Thực", "Đàm hỏa"],
    tc: ["Phiền bứt rứt, dễ giận dữ, mất ngủ", "Nói năng huyên náo, cuồng loạn", "Mặt đỏ mắt đỏ", "Nôn ra đờm đặc vàng", "Rêu lưỡi vàng nhớt", "Mạch huyền hoạt sác"],
    pdt: "Thanh tâm tả hỏa, địch đàm khai khiếu",
    bt: "Địch đàm thang hợp Ôn đởm thang",
    tpbt: ["Bán hạ 10g", "Trần bì 10g", "Phục linh 12g", "Chỉ thực 8g", "Trúc nhự 10g", "Đởm nam tinh 8g", "Hoàng liên 8g", "Thạch xương bồ 8g"]
  },
  "Dam_Me_Tam_Khieu_Dien": {
    stt: 91,
    hc: "Đàm mê tâm khiếu (Điên chứng)",
    phanloai: ["Tạng Tâm", "Bình", "Thực", "Đàm trọc"],
    tc: ["Trầm cảm, ít nói, ngơ ngác", "Thích ở một mình, tinh thần đần độn", "Nói năng lảm nhảm, cười khóc bất thường", "Rêu lưỡi trắng dày nhớt", "Mạch hoạt hoặc nhu"],
    pdt: "Thuận khí hóa đàm, thanh tâm khai khiếu",
    bt: "Thuận khí đạo đàm thang gia giảm",
    tpbt: ["Bán hạ 10g", "Trần bì 10g", "Phục linh 12g", "Chỉ thực 8g", "Nam tinh 8g", "Thạch xương bồ 8g", "Uất kim 10g", "Mộc hương 6g"]
  },
  "Huyet_Hu_Phong_Tao": {
    stt: 92,
    hc: "Huyết hư phong táo",
    phanloai: ["Khí Huyết Tân Dịch", "Bình", "Hư thực thác tạp", "Huyết hư phong táo"],
    tc: ["Da khô ngứa ngáy, bong tróc", "Tóc khô xơ dễ gãy", "Móng tay chân khô nhợt", "Sắc mặt úa vàng", "Mạch tế sáp"],
    pdt: "Dưỡng huyết nhuận táo, khu phong chỉ ngứa",
    bt: "Dưỡng tiêu phong tán",
    tpbt: ["Đương quy 12g", "Thục địa 12g", "Bạch thược 12g", "Xuyên khung 8g", "Phòng phong 8g", "Kinh giới 8g", "Hà thủ ô 12g", "Thuyền thoái 6g"]
  },
  "Am_Hu_Hoa_Vuong": {
    stt: 93,
    hc: "Âm hư hỏa vượng",
    phanloai: ["Khí Huyết Tân Dịch", "Nhiệt", "Hư", "Âm hư hỏa vượng"],
    tc: ["Triều nhiệt gò má đỏ", "Lòng bàn tay chân nóng", "Miệng khô họng rát", "Di tinh, đạo hãn", "Lưỡi đỏ ít rêu", "Mạch tế sác"],
    pdt: "Tư âm giáng hỏa, thanh nhiệt trừ chưng",
    bt: "Tri bá địa hoàng hoàn",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 8g", "Trạch tả 6g", "Đan bì 6g", "Phục linh 6g", "Tri mẫu 8g", "Hoàng bá 8g"]
  },

  // =========================================================================
  // 7. NGOẠI CẢM & LỤC DÂM
  // =========================================================================
  "Phong_Han_Bieu_Chung": {
    stt: 94,
    hc: "Phong hàn biểu chứng",
    phanloai: ["Ngoại cảm", "Hàn", "Thực", "Phong hàn"],
    tc: ["Sợ lạnh nhiều, sốt nhẹ", "Không ra mồ hôi", "Đau đầu, đau mỏi toàn thân", "Mũi nghẹt chảy nước trong", "Mạch phù khẩn"],
    pdt: "Tán hàn giải biểu, tuyên phế bình suyễn",
    bt: "Ma hoàng thang",
    tpbt: ["Ma hoàng 8g", "Quế chi 6g", "Hạnh nhân 8g", "Cam thảo 4g"]
  },
  "Phong_Nhiet_Bieu_Chung": {
    stt: 95,
    hc: "Phong nhiệt biểu chứng",
    phanloai: ["Ngoại cảm", "Nhiệt", "Thực", "Phong nhiệt"],
    tc: ["Sốt cao, sợ gió nhẹ", "Đau họng, sưng họng", "Mũi chảy nước đặc vàng", "Khát nước thích uống lạnh", "Mạch phù sác"],
    pdt: "Sơ phong thanh nhiệt, tuyên phế giải biểu",
    bt: "Ngân kiều tán",
    tpbt: ["Kim ngân hoa 12g", "Liên kiều 12g", "Cát cánh 8g", "Bạc hà 6g", "Trúc diệp 8g", "Cam thảo 4g", "Kinh giới tuệ 8g", "Đạm đậu xị 8g", "Ngưu bàng tử 8g", "Lô căn 12g"]
  },
  "Phong_Han_Thap_Ty": {
    stt: 96,
    hc: "Phong hàn thấp tý",
    phanloai: ["Cơ Xương Khớp", "Hàn", "Thực", "Phong hàn thấp"],
    tc: ["Đau nhức các khớp xương, gặp lạnh đau tăng", "Co duỗi khó khăn", "Tê dại tay chân", "Thân thể nặng nề", "Mạch nhu trì hoặc trầm khẩn"],
    pdt: "Khu phong tán hàn, trừ thấp thông lạc, bổ can thận",
    bt: "Độc hoạt ký sinh thang",
    tpbt: ["Độc hoạt 12g", "Tang ký sinh 12g", "Đỗ trọng 12g", "Ngưu tất 12g", "Tế tân 4g", "Tần giao 12g", "Phục linh 12g", "Quế tâm 4g", "Phòng phong 12g", "Xuyên khung 8g", "Nhân sâm 12g", "Thục địa 12g", "Bạch thược 12g", "Đương quy 12g", "Cam thảo 4g"]
  },
  "Han_Thap_Ty": {
    stt: 97,
    hc: "Hàn thấp tý",
    phanloai: ["Cơ Xương Khớp", "Hàn", "Thực", "Hàn thấp"],
    tc: ["Các khớp đau dữ dội cố định, gặp lạnh đau tăng, ấm giảm", "Khớp không sưng đỏ", "Sợ lạnh, tay chân lạnh", "Rêu lưỡi trắng dính", "Mạch trầm khẩn"],
    pdt: "Ôn kinh tán hàn, trừ thấp thông lạc",
    bt: "Ô đầu thang",
    tpbt: ["Ô đầu chế 6g", "Ma hoàng 8g", "Bạch thược 12g", "Hoàng kỳ 12g", "Cam thảo 4g"]
  },
  "Nhiet_Ty_Chung": {
    stt: 98,
    hc: "Nhiệt tý",
    phanloai: ["Cơ Xương Khớp", "Nhiệt", "Thực", "Phong thấp nhiệt"],
    tc: ["Các khớp sưng, nóng, đỏ, đau dữ dội", "Gặp lạnh giảm đau, chườm nóng đau tăng", "Sốt, sợ gió, khát nước", "Tiểu vàng, đại tiện táo", "Rêu lưỡi vàng dính", "Mạch hoạt sác"],
    pdt: "Thanh nhiệt thông lạc, khu phong trừ thấp",
    bt: "Bạch hổ quế chi thang",
    tpbt: ["Tri mẫu 12g", "Thạch cao 24g", "Quế chi 8g", "Cam thảo 4g", "Ngạnh mễ 12g"]
  },
  "Thap_Nhiet_Ha_Tieu": {
    stt: 99,
    hc: "Thấp nhiệt hạ tiêu",
    phanloai: ["Hạ tiêu", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Sưng đau nóng đỏ khớp gối, cổ chân", "Tiểu dắt tiểu buốt, nước tiểu đục", "Khí hư ra nhiều vàng hôi (nữ)", "Lưỡi đỏ rêu vàng nhớt", "Mạch nhu sác"],
    pdt: "Thanh nhiệt táo thấp, lợi thủy thông lâm",
    bt: "Nhị diệu tán gia vị",
    tpbt: ["Hoàng bá 12g", "Thương truật 12g", "Ngưu tất 12g", "Ý dĩ 16g"]
  },
  "Thap_Nhiet_Hoang_Dan": {
    stt: 100,
    hc: "Thấp nhiệt hoàng đản (Dương hoàng)",
    phanloai: ["Tạng Can & Phủ Đờm", "Nhiệt", "Thực", "Thấp nhiệt hoàng đản"],
    tc: ["Mắt vàng, da vàng tươi sáng", "Sốt hầm hập, miệng đắng khát nước", "Bụng trướng đầy, nôn nao", "Tiểu tiện ngắn đỏ", "Rêu lưỡi vàng nhớt", "Mạch hoạt sác"],
    pdt: "Thanh nhiệt lợi thấp, thoái hoàng",
    bt: "Nhân trần cao thang",
    tpbt: ["Nhân trần 24g", "Chi tử 12g", "Đại hoàng 8g"]
  },
  "Am_Hoang_Ty_Vi_Hu_Han": {
    stt: 101,
    hc: "Thấp hàn uẩn kết (Âm hoàng)",
    phanloai: ["Tạng Tỳ & Phủ Vị", "Hàn", "Hư thực thác tạp", "Thấp hàn âm hoàng"],
    tc: ["Sắc mặt và mắt vàng tối u ám", "Sợ lạnh, tay chân lạnh", "Ăn uống kém, bụng trướng đầy", "Đại tiện lỏng nhão", "Mạch trầm trì hoặc nhu hoãn"],
    pdt: "Ôn trung tán hàn, kiện tỳ trừ thấp, thoái hoàng",
    bt: "Nhân trần phụ tử thang",
    tpbt: ["Nhân trần 20g", "Phụ tử chế 8g", "Can khương 8g", "Bạch truật 12g", "Phục linh 12g", "Cam thảo 4g"]
  },

  // =========================================================================
  // 8. LỤC KINH & VỆ KHÍ DINH HUYẾT
  // =========================================================================
  "Thai_Duong_Trung_Phong": {
    stt: 102,
    hc: "Thái dương trung phong",
    phanloai: ["Lục Kinh - Thái Dương", "Nhiệt/Hàn", "Hư thực thác tạp", "Biểu hư trung phong"],
    tc: ["Sốt, sợ gió", "Tự hãn (vã mồ hôi)", "Đau đầu, chảy nước mũi", "Cổ gáy cứng mỏi", "Mạch phù hoãn"],
    pdt: "Giải cơ điều hòa doanh vệ",
    bt: "Quế chi thang",
    tpbt: ["Quế chi 10g", "Bạch thược 10g", "Sinh khương 10g", "Đại táo 4 quả", "Chích cam thảo 6g"]
  },
  "Duong_Minh_Kinh_Chung": {
    stt: 103,
    hc: "Dương minh kinh chứng",
    phanloai: ["Lục Kinh - Dương Minh", "Nhiệt", "Thực", "Nhiệt thịnh"],
    tc: ["Sốt cao không sợ lạnh mà sợ nhiệt", "Mặt đỏ, đại hãn (ra mồ hôi nhiều)", "Đại khát thích uống nước lạnh", "Mạch hồng đại hữu lực"],
    pdt: "Thanh nhiệt sinh tân, tả hỏa giải độc",
    bt: "Bạch hổ thang",
    tpbt: ["Tri mẫu 12g", "Thạch cao 24g", "Cam thảo 4g", "Ngạnh mễ 12g"]
  },
  "Thieu_Duong_Chung": {
    stt: 104,
    hc: "Thiếu dương bệnh",
    phanloai: ["Lục Kinh - Thiếu Dương", "Hàn nhiệt thác tạp", "Hư thực thác tạp", "Bán biểu bán lý"],
    tc: ["Miệng đắng, họng khô, mắt hoa", "Hàn nhiệt qua lại (sốt rét run từng cơn)", "Ngực sườn đầy trướng", "Tâm phiền hay nôn", "Mạch huyền"],
    pdt: "Hòa giải thiếu dương",
    bt: "Tiểu sài hồ thang",
    tpbt: ["Sài hồ 12g", "Hoàng cầm 8g", "Bán hạ 8g", "Sinh khương 8g", "Nhân sâm 8g", "Cam thảo 4g", "Đại táo 4 quả"]
  },
  "Thai_Am_Chung": {
    stt: 105,
    hc: "Thái âm bệnh",
    phanloai: ["Lục Kinh - Thái Âm", "Hàn", "Hư", "Hư hàn"],
    tc: ["Bụng trướng đầy, ăn uống không tiêu", "Đau bụng thích chườm ấm", "Nôn mửa, tiêu chảy", "Mạch trầm trì hoãn"],
    pdt: "Ôn trung tán hàn, kiện tỳ hòa vị",
    bt: "Lý trung hoàn",
    tpbt: ["Nhân sâm 12g", "Can khương 8g", "Bạch truật 12g", "Chích cam thảo 6g"]
  },
  "Thieu_Am_Han_Hoa": {
    stt: 106,
    hc: "Thiếu âm hàn hóa chứng",
    phanloai: ["Lục Kinh - Thiếu Âm", "Hàn", "Hư", "Dương hư suy"],
    tc: ["Thích nằm co, tinh thần mệt mỏi", "Sợ lạnh, tay chân lạnh ngắt", "Tiểu tiện trong dài", "Đại tiện lỏng nhão", "Mạch vi tế"],
    pdt: "Hồi dương cứu nghịch",
    bt: "Tứ nghịch thang",
    tpbt: ["Phụ tử chế 12g", "Can khương 12g", "Chích cam thảo 6g"]
  },
  "Quyet_Am_Chung": {
    stt: 107,
    hc: "Quyết âm bệnh",
    phanloai: ["Lục Kinh - Quyết Âm", "Hàn nhiệt thác tạp", "Hư thực thác tạp", "Thượng nhiệt hạ hàn"],
    tc: ["Khát nước, khí thượng xung tâm gây đau rát ngực", "Bụng đói không muốn ăn, ăn vào nôn ra giun", "Tay chân lạnh", "Mạch trầm huyền"],
    pdt: "Ôn hạ thanh thượng, khu trùng chỉ thống",
    bt: "Ô mai hoàn",
    tpbt: ["Ô mai 12g", "Tế tân 4g", "Can khương 8g", "Phụ tử chế 6g", "Đương quy 8g", "Hoàng liên 8g", "Hoàng bá 8g", "Quế chi 6g", "Nhân sâm 8g", "Thục tiêu 4g"]
  },
  "Ve_Phan_Chung": {
    stt: 108,
    hc: "Vệ phận chứng",
    phanloai: ["Vệ Khí Dinh Huyết", "Nhiệt", "Thực", "Vệ phận phong nhiệt"],
    tc: ["Sốt, sợ gió sợ lạnh", "Đau đầu, ít hoặc không có mồ hôi", "Miệng hơi khát, ho nhẹ", "Đầu lưỡi đỏ, rêu mỏng", "Mạch phù sác"],
    pdt: "Thanh nhiệt giải biểu, thấu vệ giải độc",
    bt: "Ngân kiều tán",
    tpbt: ["Kim ngân hoa 12g", "Liên kiều 12g", "Cát cánh 8g", "Bạc hà 6g", "Trúc diệp 8g", "Cam thảo 4g", "Kinh giới tuệ 8g", "Đạm đậu xị 8g", "Ngưu bàng tử 8g", "Lô căn 12g"]
  },
  "Khi_Phan_Chung": {
    stt: 109,
    hc: "Khí phận chứng",
    phanloai: ["Vệ Khí Dinh Huyết", "Nhiệt", "Thực", "Khí phận nhiệt thịnh"],
    tc: ["Sốt cao không sợ lạnh", "Miệng khát thích uống nước lạnh", "Sốt về chiều, vã mồ hôi nhiều", "Tiểu đỏ, phân khô", "Rêu lưỡi vàng khô", "Mạch hồng đại hoặc sác"],
    pdt: "Thanh khí thấu nhiệt, sinh tân chỉ khát",
    bt: "Bạch hổ thang",
    tpbt: ["Tri mẫu 12g", "Thạch cao 24g", "Cam thảo 4g", "Ngạnh mễ 12g"]
  },
  "Dinh_Phan_Nhiet": {
    stt: 110,
    hc: "Dinh phận nhiệt",
    phanloai: ["Vệ Khí Dinh Huyết", "Nhiệt", "Thực", "Dinh phận nhiệt"],
    tc: ["Sốt cao về đêm", "Tâm phiền bứt rứt, mất ngủ", "Nói lảm nhảm hoặc hôn mê", "Lưỡi đỏ thẫm khô", "Mạch tế sác"],
    pdt: "Thanh dinh thấu nhiệt, dưỡng âm thoái hoàng",
    bt: "Thanh dinh thang",
    tpbt: ["Thủy ngưu giác 12g", "Sinh địa 16g", "Huyền sâm 12g", "Trúc diệp tâm 8g", "Mạch môn 12g", "Đan sâm 12g", "Kim ngân hoa 12g", "Liên kiều 12g", "Hoàng liên 6g"]
  },
  "Nhiet_Nhap_Huyet_Phan": {
    stt: 111,
    hc: "Nhiệt nhập huyết phận",
    phanloai: ["Vệ Khí Dinh Huyết", "Nhiệt", "Thực", "Huyết phận nhiệt độc"],
    tc: ["Sốt cao nội nhiệt về đêm", "Cuồng loạn, hôn mê", "Nổi ban chẩn, phát ban", "Xuất huyết (chảy máu cam, nôn ra máu)", "Lưỡi đỏ thẫm", "Mạch tế sác"],
    pdt: "Thanh nhiệt lương huyết, giải độc tán ứ",
    bt: "Tê giác địa hoàng thang",
    tpbt: ["Thủy ngưu giác 12g", "Sinh địa 24g", "Xích thược 12g", "Đan bì 12g"]
  },

  // =========================================================================
  // 9. NỘI KHOA - THẦN KINH & TẬP BỆNH
  // =========================================================================
  "Trung_Phong_Kinh_Lac": {
    stt: 112,
    hc: "Trúng phong kinh lạc",
    phanloai: ["Thần Kinh / Nội Khoa", "Bình", "Thực", "Phong đàm thông lạc"],
    tc: ["Méo miệng lệch mắt", "Nói khó, ngọng", "Tay chân tê dại, yếu nửa người", "Tinh thần tỉnh táo", "Rêu lưỡi trắng dính", "Mạch huyền tế"],
    pdt: "Sơ phong thông lạc, hoạt huyết hòa doanh",
    bt: "Đại tần giao thang",
    tpbt: ["Tần giao 12g", "Khương hoạt 8g", "Độc hoạt 8g", "Phòng phong 8g", "Bạch chỉ 8g", "Đương quy 12g", "Xuyên khung 8g", "Thục địa 12g", "Bạch thược 12g", "Hoàng cầm 8g"]
  },
  "Trung_Phong_Tang_Phu_Be": {
    stt: 113,
    hc: "Trúng phong tạng phủ - Bế chứng",
    phanloai: ["Thần Kinh / Nội Khoa", "Nhiệt", "Thực", "Đàm nhiệt khai khiếu bế"],
    tc: ["Hôn mê đột ngột", "Miệng mím chặt, hai tay nắm chặt", "Thở khò khè đờm dãi", "Mặt đỏ thân nóng", "Đại tiểu tiện bí kết", "Mạch huyền sác hữu lực"],
    pdt: "Khai khiếu thông bế, thanh nhiệt hóa đàm",
    bt: "An cung ngưu hoàng hoàn",
    tpbt: ["Ngưu hoàng 1g", "Thủy ngưu giác 2g", "Xạ hương 0.25g", "Uất kim 1g", "Băng phiến 0.25g", "Mẫu đơn bì 1g", "Hoàng liên 1g", "Hoàng cầm 1g", "Chi tử 1g"]
  },
  "Trung_Phong_Tang_Phu_Thoat": {
    stt: 114,
    hc: "Trúng phong tạng phủ - Thoát chứng",
    phanloai: ["Thần Kinh / Nội Khoa", "Hàn", "Hư", "Nguy cấp vã thoát"],
    tc: ["Hôn mê sâu", "Mắt nhắm miệng há, tay xòe", "Thở nông yếu, hụt hơi", "Vã mồ hôi đầm đìa như dầu", "Chân tay lạnh ngắt", "Mạch vi tế muốn tuyệt"],
    pdt: "Hồi dương cứu thoát, ích khí cố thoát",
    bt: "Sâm phụ thang hợp Sinh mạch tán",
    tpbt: ["Nhân sâm 16g", "Phụ tử chế 12g", "Mạch môn 12g", "Ngũ vị tử 6g"]
  },
  "Nhiet_Cuc_Sinh_Phong": {
    stt: 115,
    hc: "Nhiệt cực sinh phong",
    phanloai: ["Thần Kinh / Nội Khoa", "Nhiệt", "Thực", "Nhiệt cực sinh phong"],
    tc: ["Sốt cao dọa co giật", "Hai mắt trợn ngược", "Cổ gáy cứng còng", "Thần chí mê muội", "Lưỡi đỏ thẫm khô", "Mạch huyền sác hữu lực"],
    pdt: "Thanh nhiệt tả hỏa, tức phong chỉ kính",
    bt: "Linh dương câu đằng ẩm",
    tpbt: ["Linh dương giác 4g", "Câu đằng 12g", "Tang diệp 8g", "Cúc hoa 8g", "Bạch thược 12g", "Sinh địa 16g", "Mẫu đơn bì 8g", "Bối mẫu 8g", "Trúc nhự 8g", "Cam thảo 4g"]
  },
  "Huyen_Vung_Dam_Troc": {
    stt: 116,
    hc: "Huyễn vựng do Đàm trọc trung trở",
    phanloai: ["Đầu Mục", "Bình", "Thực", "Đàm trọc"],
    tc: ["Chóng mặt quay mòng mòng, đầu nặng như bó", "Ngực bụng đầy trướng, buồn nôn ra đờm", "Ăn kém, mệt mỏi", "Rêu lưỡi trắng dày nhớt", "Mạch hoạt"],
    pdt: "Táo thấp hóa đàm, kiện tỳ hòa vị, định vựng",
    bt: "Bán hạ bạch truật thiên ma thang",
    tpbt: ["Bán hạ 10g", "Bạch truật 12g", "Thiên ma 8g", "Phục linh 12g", "Trần bì 8g", "Cam thảo 4g", "Sinh khương 3 lát"]
  },
  "Toa_Cot_Phong_Phong_Han": {
    stt: 117,
    hc: "Tọa cốt phong do Phong hàn thấp",
    phanloai: ["Cơ Xương Khớp", "Hàn", "Thực", "Phong hàn thấp tý"],
    tc: ["Đau lưng lan xuống mông, đùi, bắp chân", "Gặp lạnh đau tăng, ấm giảm", "Chân tay lạnh, sợ gió", "Mạch trầm khẩn hoặc phù khẩn"],
    pdt: "Khu phong tán hàn, trừ thấp thông lạc",
    bt: "Độc hoạt ký sinh thang gia giảm",
    tpbt: ["Độc hoạt 12g", "Tang ký sinh 12g", "Khương hoạt 8g", "Tế tân 4g", "Phòng phong 8g", "Đương quy 12g", "Xuyên khung 8g", "Ngưu tất 12g"]
  },

  // =========================================================================
  // 10. PHỤ KHOA & SẢN KHOA
  // =========================================================================
  "Bao_Cung_Hu_Han": {
    stt: 118,
    hc: "Bào cung hư hàn",
    phanloai: ["Phụ Khoa", "Hàn", "Hư", "Bào cung hư hàn"],
    tc: ["Đau bụng kinh dữ dội, chườm ấm giảm", "Kinh nguyệt chậm, sắc tối có cục máu đông", "Tay chân lạnh, sợ lạnh", "Mạch trầm trì"],
    pdt: "Ôn kinh tán hàn, dưỡng huyết hòa dinh",
    bt: "Ôn kinh thang",
    tpbt: ["Ngô thù du 8g", "Mạch môn 12g", "Đương quy 12g", "Xuyên khung 8g", "Bạch thược 12g", "Nhân sâm 8g", "Quế chi 8g", "A giao 8g", "Mẫu đơn bì 8g", "Bán hạ 8g", "Chích cam thảo 4g", "Sinh khương 8g"]
  },
  "Huyet_U_Bao_Cung": {
    stt: 119,
    hc: "Huyết ứ bào cung",
    phanloai: ["Phụ Khoa", "Bình", "Thực", "Huyết ứ bào cung"],
    tc: ["Bụng dưới đau dữ dội, cự án", "Sản dịch hoặc kinh nguyệt ra màu tím đen có cục", "Sau khi ra máu cục thì giảm đau", "Lưỡi tím hoặc có điểm ứ huyết", "Mạch trầm sáp"],
    pdt: "Hoạt huyết hóa ứ, ôn kinh chỉ thống",
    bt: "Sanh hóa thang",
    tpbt: ["Đương quy 24g", "Xuyên khung 9g", "Đào nhân 6g", "Can khương 2g", "Chích cam thảo 2g"]
  },
"TB_173": { stt: 120, hc: "Biến chứng tai biến tiêu chảy thể Tỳ hư thấp trệ do dùng thuốc kéo dài", phanloai: ["Biến chứng Tai biến", "Bình", "Hư thực thác tạp", "Tỳ hư thấp trệ"], tc: ["Đi tiêu lỏng nhão nhiều lần trong ngày", "Bụng trướng đầy ăn không tiêu", "Mệt mỏi sắc mặt vàng nhợt", "Mạch nhu hoãn"], pdt: "Kiện tỳ ích khí, thẩm thấp chỉ tả", bt: "Sâm linh bạch truật tán", tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Hoài sơn 12g", "Liên nhục 12g", "Ý dĩ 12g", "Cam thảo 6g"] },
"TB_174": { stt: 121, hc: "Biến chứng tai biến sốt kéo dài thể Âm hư triều nhiệt về chiều", phanloai: ["Biến chứng Tai biến", "Nhiệt", "Hư", "Âm hư triều nhiệt"], tc: ["Chiều tối sốt hầm hập 37.5-38 độ kéo dài", "Lòng bàn tay chân nóng, vã mồ hôi trộm", "Lưỡi đỏ ít rêu", "Mạch tế sác"], pdt: "Tư âm thanh nhiệt, trừ chưng thoái nhiệt", bt: "Tri bá địa hoàng hoàn gia Địa cốt bì, Tần giao", tpbt: ["Thục địa 16g", "Tri mẫu 12g", "Hoàng bá 12g", "Sơn thù 8g", "Địa cốt bì 12g", "Tần giao 12g"] },
"TB_175": { stt: 122, hc: "Biến chứng tai biến sốt cao thể Khí phận thực nhiệt xí thịnh", phanloai: ["Biến chứng Tai biến", "Nhiệt", "Thực", "Khí phân nhiệt thịnh"], tc: ["Sốt cao 39-40 độ không sợ lạnh", "Đại khát thích uống nước lạnh liên tục", "Mặt đỏ vã mồ hôi nhiều", "Mạch hồng đại sác"], pdt: "Thanh khí thấu nhiệt, sinh tân chỉ khát", bt: "Bạch hổ thang gia Thiên hoa phấn", tpbt: ["Tri mẫu 12g", "Thạch cao 30g", "Cam thảo 6g", "Ngạnh mễ 20g", "Thiên hoa phấn 12g"] },
"TB_176": { stt: 123, hc: "Biến chứng tai biến trĩ nội sa thể Trung khí hạ hãm rặn nhiều", phanloai: ["Biến chứng Tai biến", "Bình", "Hư", "Khí hư hạ hãm"], tc: ["Búi trĩ sa ra ngoài hậu môn khi đi tiêu", "Khó co lên, mệt mỏi hụt hơi", "Sắc mặt nhợt nhạt", "Mạch hoãn nhược"], pdt: "Bổ trung ích khí, thăng dương cử trĩ", bt: "Bổ trung ích khí thang gia Chỉ xác sao", tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Bạch truật 12g", "Trần bì 6g", "Thăng ma 6g", "Sài hồ 6g", "Chỉ xác 8g"] },
"TB_177": { stt: 124, hc: "Biến chứng tai biến trĩ chảy máu thể Huyết nhiệt hạ chú đại tràng", phanloai: ["Biến chứng Tai biến", "Nhiệt", "Thực", "Huyết nhiệt"], tc: ["Đại tiện ra máu tươi phun thành tia hoặc giọt", "Hậu môn nóng rát sưng đau", "Tiểu đỏ táo bón", "Mạch sác"], pdt: "Thanh nhiệt lương huyết, chỉ huyết tiêu thũng", bt: "Tán trĩ tán hợp Chỉ thang tán", tpbt: ["Hoàng liên 8g", "Hoàng bá 12g", "Trắc bách diệp 12g", "Hòe hoa 12g", "Đương quy 12g"] },
"TB_178": { stt: 125, hc: "Biến chứng tai biến nôn mửa thể Vị hư hàn trào dịch dạ dày", phanloai: ["Biến chứng Tai biến", "Hàn", "Hư", "Vị hư hàn"], tc: ["Nôn ra nước trong nhạt miệng sau ăn", "Bụng thượng vị đau âm ỉ thích ấm", "Chân tay lạnh", "Mạch trầm tế hoãn"], pdt: "Ôn trung kiện vị, giáng nghịch chỉ nôn", bt: "Lương phu hoàn hợp Lý trung hoàn", tpbt: ["Cao lương khương 8g", "Hương phụ 10g", "Đảng sâm 12g", "Can khương 8g", "Bạch truật 12g"] },
"TB_179": { stt: 126, hc: "Biến chứng tai biến nấc cụt thể Vị khí thượng nghịch liên tục", phanloai: ["Biến chứng Tai biến", "Bình", "Thực", "Vị khí thượng nghịch"], tc: ["Nấc cụt tiếng to vang liên tục không ngớt", "Thượng vị trướng đầy khó chịu", "Rêu lưỡi dầy dính", "Mạch hoạt dũng mãnh"], pdt: "Hòa vị giáng nghịch, tuyên thông ách nghịch", bt: "Đinh hương thị đế thang gia Bán hạ, Mộc hương", tpbt: ["Đinh hương 4g", "Thị đế 10g", "Nhân sâm 8g", "Sinh khương 6g", "Bán hạ 10g", "Mộc hương 6g"] },
"TB_180": { stt: 127, hc: "Biến chứng tai biến nấc cụt thể Tỳ Vị hư hàn nấc yếu", phanloai: ["Biến chứng Tai biến", "Hàn", "Hư", "Tỳ Vị hư hàn"], tc: ["Nấc cụt tiếng nhỏ yếu rỉ rả dầm dề", "Chườm ấm thì đỡ nấc, gặp lạnh nấc tăng", "Chân tay lạnh mệt mỏi", "Mạch trầm tế vô lực"], pdt: "Ôn trung kiện tỳ, giáng nghịch chỉ ách", bt: "Đinh hương thị đế thang gia Can khương", tpbt: ["Đinh hương 4g", "Thị đế 10g", "Nhân sâm 8g", "Sinh khương 6g", "Can khương 6g", "Cam thảo 6g"] },
"TB_181": { stt: 128, hc: "Trúng phong thể Can Đởm hỏa độc bốc não xuất huyết", phanloai: ["Tai biến / Trúng phong", "Nhiệt", "Thực", "Hỏa độc nội thịnh"], tc: ["Đau đầu dữ dội nôn ra máu tươi rồi hôn mê", "Mặt đỏ gay, thở xối xả đờm dãi", "Mắt trợn ngược", "Mạch huyền sác hữu lực dũng mãnh"], pdt: "Thanh can tả hỏa, lương huyết chỉ huyết khai khiếu", bt: "Long đởm tả can thang gia Tê giác, An cung ngưu hoàng hoàn", tpbt: ["Long đởm thảo 12g", "Chi tử 12g", "Hoàng cầm 12g", "Thủy ngưu giác 30g", "Ngưu hoàng 1g"] },
"TB_182": { stt: 129, hc: "Trúng phong thể Tâm hỏa bốc trào gây nhồi máu não", phanloai: ["Tai biến / Trúng phong", "Nhiệt", "Thực", "Tâm hỏa xí thịnh"], tc: ["Hôn mê đột ngột tâm phiền bứt rứt trước đó", "Loét miệng lưỡi, mặt đỏ bừng", "Đại tiểu tiện bí kết", "Mạch sác hữu lực dũng mãnh"], pdt: "Thanh tâm tả hỏa, thanh nhiệt khai khiếu", bt: "Hoàng liên giải độc thang gia Ngưu hoàng", tpbt: ["Hoàng liên 10g", "Hoàng cầm 12g", "Hoàng bá 12g", "Chi tử 12g", "Ngưu hoàng 1g"] },
"TB_183": { stt: 130, hc: "Trúng phong thể Đàm trọc ủng tắc mạch máu não", phanloai: ["Tai biến / Trúng phong", "Bình", "Thực", "Đàm trọc bế tắc"], tc: ["Đột ngột ngã gục không biết gì", "Cổ họng lọc sọc đờm dãi, mặt xám tái", "Rêu lưỡi dầy dính dầy nhớt", "Mạch hoạt dũng mãnh"], pdt: "Địch đàm khai khiếu, hóa trọc thông mạch", bt: "Địch đàm thang gia Thạch xương bồ", tpbt: ["Bán hạ 10g", "Trần bì 6g", "Phục linh 12g", "Chỉ thực 8g", "Đởm nam tinh 8g", "Thạch xương bồ 10g"] },
"TB_184": { stt: 131, hc: "Trúng phong thể Phong hàn trệ mạch máu não", phanloai: ["Tai biến / Trúng phong", "Hàn", "Thực", "Phong hàn bế tắc"], tc: ["Ngã gục sau khi tắm đêm hoặc gặp gió lạnh dữ dội", "Mặt bệch lạnh ngắt, cơ co cứng", "Mạch trầm khẩn dũng mãnh"], pdt: "Khu phong tán hàn, ôn thông não mạch", bt: "Tiểu tục mệnh thang gia Tế tân", tpbt: ["Ma hoàng 8g", "Quế chi 10g", "Phòng phong 10g", "Hạnh nhân 10g", "Tế tân 3g", "Xuyên khung 10g"] },
"TB_185": { stt: 132, hc: "Trúng phong thể Khí trệ huyết ứ tắc nghẽn động mạch cảnh", phanloai: ["Tai biến / Trúng phong", "Bình", "Thực", "Khí trệ huyết ứ"], tc: ["Bán thân bất toại đột ngột sau xúc động giận dữ", "Lưỡi tím sẫm có điểm ứ huyết", "Đau đầu nhói cố định", "Mạch huyền sáp"], pdt: "Hành khí hoạt huyết, hóa ứ thông mạch cảnh", bt: "Thông khiếu trục ứ thang gia Đan sâm", tpbt: ["Xuyên khung 10g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Thạch xương bồ 10g", "Đan sâm 15g"] },
"TB_186": { stt: 133, hc: "Trúng phong thể Can Thận dương hư suy liệt hai chân cấp", phanloai: ["Tai biến / Trúng phong", "Hàn", "Hư suy", "Can Thận dương hư"], tc: ["Đột ngột té ngã hai chân duỗi mềm không đứng được", "Thắt lưng lạnh ngắt, sợ lạnh", "Tiểu đái dầm không biết", "Mạch trầm tế vi"], pdt: "Ôn bổ can thận, trợ dương thông mạch", bt: "Thận khí hoàn gia Nhục quế, Lộc nhung", tpbt: ["Thục địa 16g", "Sơn thù 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Nhục quế 6g", "Lộc nhung 4g"] },
"TB_187": { stt: 134, hc: "Trúng phong thể Âm hư phong động giật nửa người", phanloai: ["Tai biến / Trúng phong", "Nhiệt", "Hư", "Âm hư phong động"], tc: ["Co giật nửa người đột ngột trên nền cao huyết áp", "Triều nhiệt gò má đỏ, lưỡi đỏ ít rêu", "Mạch tế huyền sác"], pdt: "Tư âm nhuận can, tắt phong chỉ giật", bt: "Trấn can tức phong thang gia Quy bản, Cúc hoa", tpbt: ["Ngưu tất 12g", "Đại giả thạch 20g", "Long cốt 15g", "Mẫu lệ 15g", "Quy bản 12g", "Cúc hoa 10g"] },
"TB_188": { stt: 135, hc: "Trúng phong thể Tỳ hư đàm thịnh gây tắc mạch não", phanloai: ["Tai biến / Trúng phong", "Bình", "Hư thực thác tạp", "Tỳ hư đàm thịnh"], tc: ["Người béo bệu đột ngột lơ mơ liệt nửa người", "Nôn ra đờm dãi nhạt miệng", "Rêu dầy nhớt", "Mạch nhu hoạt"], pdt: "Kiện tỳ mẫn thấp, hóa đàm thông mạch", bt: "Bán hạ bạch truật thiên ma thang gia Chỉ thực", tpbt: ["Bán hạ 10g", "Bạch truật 12g", "Thiên ma 10g", "Phục linh 12g", "Trần bì 6g", "Chỉ thực 8g"] },
"TB_189": { stt: 136, hc: "Trúng phong thể Khí hư huyết uất gây nhồi máu não diện rộng", phanloai: ["Tai biến / Trúng phong", "Bình", "Hư thực thác tạp", "Khí hư huyết ứ"], tc: ["Liệt nửa người hoàn toàn không nhúc nhích được", "Sắc mặt nhợt nhạt, vã mồ hôi hụt hơi", "Lưỡi nhợt tím", "Mạch tế nhược sáp"], pdt: "Đại bổ khí huyết, hoạt huyết thông kinh lạc", bt: "Bổ dương hoàn ngũ thang gia Hoàng kỳ liều cao", tpbt: ["Hoàng kỳ 60g", "Đương quy vĩ 12g", "Xích thược 12g", "Đào nhân 10g", "Hồng hoa 8g", "Địa long 10g"] },
"TB_190": { stt: 137, hc: "Trúng phong thể Thấp nhiệt uẩn kết hãm tâm bao", phanloai: ["Tai biến / Trúng phong", "Nhiệt", "Thực", "Thấp nhiệt hãm tâm"], tc: ["Sốt hầm hập, thần chí lơ mơ nói nhảm", "Rêu dầy vàng nhớt, tiểu đỏ ngắn", "Thân thể mỏi nặng", "Mạch nhu sác"], pdt: "Thanh nhiệt lợi thấp, thanh tâm khai khiếu", bt: "Tam nhân thang gia Hoàng liên, Trúc diệp tâm", tpbt: ["Hạnh nhân 10g", "Ý dĩ 12g", "Bán hạ 10g", "Hoàng liên 8g", "Trúc diệp tâm 8g", "Cam thảo 6g"] },
"TB_191": { stt: 138, hc: "Trúng phong thể Huyết nhiệt độc bốc não gây phù phát não", phanloai: ["Tai biến / Trúng phong", "Nhiệt", "Thực", "Huyết nhiệt độc"], tc: ["Sốt cao dữ dội, đau đầu quằn quại rồi hôn mê", "Nổi ban chẩn tím trên da", "Lưỡi đỏ thẫm khô", "Mạch sác dũng mãnh"], pdt: "Thanh nhiệt lương huyết, giải độc tiêu phù khai khiếu", bt: "Tê giác địa hoàng thang gia Hoàng liên, An cung ngưu hoàng hoàn", tpbt: ["Thủy ngưu giác 30g", "Sinh địa 20g", "Xích thược 12g", "Đan bì 10g", "Hoàng liên 8g", "Ngưu hoàng 1g"] },
"TB_192": { stt: 139, hc: "Trúng phong thể Hàn đàm uất bế phế vị hôn mê", phanloai: ["Tai biến / Trúng phong", "Hàn", "Thực", "Hàn đàm bế khiếu"], tc: ["Hôn mê bệch tái lạnh ngắt", "Nôn mửa ra đờm loãng bọt đầy cằm", "Cổ họng lọc sọc lạnh", "Mạch trầm hoạt trì"], pdt: "Ôn hóa hàn đàm, khai khiếu thông bế", bt: "Tô hợp hương hoàn gia Nhị trần thang", tpbt: ["Tô hợp hương 2g", "Mộc hương 6g", "Trầm hương 3g", "Bán hạ 10g", "Trần bì 6g", "Phục linh 12g"] },
"TB_193": { stt: 140, hc: "Trúng phong thể Tâm Thận bất giao gây tai biến đêm", phanloai: ["Tai biến / Trúng phong", "Nhiệt", "Hư thực thác tạp", "Tâm Thận bất giao"], tc: ["Mất ngủ bứt rứt cả đêm rồi đột ngột đột quỵ", "Mặt đỏ, đau lưng mỏi gối", "Lòng bàn tay chân nóng", "Mạch tế sác"], pdt: "Tư âm giáng hỏa, an thần thông mạch", bt: "Thiên vương bổ tâm đan gia Ngưu tất, Đỗ trọng", tpbt: ["Sinh địa 16g", "Huyền sâm 12g", "Cát cánh 6g", "Viễn chí 6g", "Ngưu tất 12g", "Đỗ trọng 12g"] },
"TB_194": { stt: 141, hc: "Trúng phong thể Thận tinh bất túc gây tai biến tái phát", phanloai: ["Tai biến / Trúng phong", "Bình", "Hư suy", "Thận tinh bất túc"], tc: ["Tai biến tái phát lần 2-3, đần độn hẳn", "Liệt cứng hai bên, đái dầm liên tục", "Mạch trầm tế vô lực"], pdt: "Bổ thận điền tinh, dưỡng tủy bổ não thông lạc", bt: "Tả quy hoàn gia Lộc giác giao, Thạch xương bồ", tpbt: ["Thục địa 16g", "Sơn thù 8g", "Hoài sơn 12g", "Kỷ tử 12g", "Lộc giác giao 10g", "Thạch xương bồ 10g"] },
"TB_195": { stt: 142, hc: "Trúng phong thể Can hỏa phạm Phế ho ra máu tai biến", phanloai: ["Tai biến / Trúng phong", "Nhiệt", "Thực", "Can hỏa phạm Phế"], tc: ["Đau đầu bứt rứt ho ra máu tươi rồi ngã gục", "Mặt đỏ miệng đắng", "Mạch huyền sác dũng mãnh"], pdt: "Thanh can tả hỏa, thanh phế chỉ huyết khai khiếu", bt: "Long đởm tả can thang gia Bồ hoàng, Mẫu đơn bì", tpbt: ["Long đởm thảo 12g", "Chi tử 12g", "Hoàng cầm 12g", "Bồ hoàng 10g", "Mẫu đơn bì 10g"] },
"TB_196": { stt: 143, hc: "Trúng phong thể Mệnh môn hỏa suy vong dương cấp đột quỵ", phanloai: ["Tai biến / Trúng phong", "Hàn", "Hư suy", "Mệnh môn hỏa suy"], tc: ["Đột quỵ đột ngột tay chân lạnh ngắt quá gối", "Vã mồ hôi lạnh đầm đìa, mặt bệch tái", "Mạch vi vi muốn tuyệt"], pdt: "Hồi dương cứu nghịch, ôn bổ mệnh môn cố thoát", bt: "Tứ nghịch thang hợp Sâm phụ thang gia Nhục quế", tpbt: ["Phụ tử chế 12g", "Can khương 8g", "Nhân sâm 12g", "Chích cam thảo 6g", "Nhục quế 6g"] },
"TB_197": { stt: 144, hc: "Trúng phong thể Vị thực nhiệt táo kết gây vỡ mạch não", phanloai: ["Tai biến / Trúng phong", "Nhiệt", "Thực", "Vị thực nhiệt"], tc: ["Rặn đi tiêu bị vỡ mạch não đột ngột", "Bụng trướng cứng cự án, táo bón nặng", "Mặt đỏ gằn gừ", "Mạch trầm thực sác dũng mãnh"], pdt: "Thanh nhiệt tả hạ, thông phủ giáng hỏa", bt: "Đại thừa khí thang gia Sinh địa", tpbt: ["Đại hoàng 12g", "Mang tiêu 10g", "Hậu phác 10g", "Chỉ thực 8g", "Sinh địa 16g"] },
"TB_198": { stt: 145, hc: "Trúng phong thể Khí âm lưỡng hư kiệt sức cấp đột quỵ", phanloai: ["Tai biến / Trúng phong", "Nhiệt", "Hư suy", "Khí âm lưỡng hư"], tc: ["Đột quỵ ở người gầy còm kiệt sức", "Miệng khô khát nước, mệt mỏi thở nông", "Vã mồ hôi nóng dính", "Mạch tế nhược sác"], pdt: "Ích khí sinh tân, tư âm liễm hãn giải cứu", bt: "Sinh mạch tán gia Hoàng kỳ, Quy bản", tpbt: ["Nhân sâm 12g", "Mạch môn 12g", "Ngũ vị tử 6g", "Hoàng kỳ 20g", "Quy bản 12g"] },
"TB_199": { stt: 146, hc: "Trúng phong thể Tỳ không thống huyết xuất huyết não lan rộng", phanloai: ["Tai biến / Trúng phong", "Bình", "Hư", "Tỳ hư không nhiếp huyết"], tc: ["Chảy máu não diện rộng ở người suy nhược", "Xuất huyết dưới da, sắc mặt nhợt", "Phân lỏng nhão", "Mạch tế nhược vô lực"], pdt: "Kiện tỳ ích khí, nhiếp huyết chỉ huyết thông lạc", bt: "Quy tỳ thang gia Tam thất, Bồ hoàng", tpbt: ["Nhân sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Hoàng kỳ 16g", "Đương quy 12g", "Tam thất 6g", "Bồ hoàng 10g"] },
"TB_200": { stt: 147, hc: "Trúng phong thể Khí uất huyết ứ bế tắc kinh mạch toàn thân", phanloai: ["Tai biến / Trúng phong", "Bình", "Thực", "Khí trệ huyết ứ"], tc: ["Đột quỵ sau khi uất hận nhẫn nại kéo dài", "Cơ thể tê cứng đau nhói toàn thân", "Lưỡi tím sẫm có điểm ứ huyết", "Mạch huyền sáp dũng mãnh"], pdt: "Sơ can giải uất, hoạt huyết hóa ứ thông kinh toàn thân", bt: "Cách hạ trục ứ thang gia Sài hồ, Địa long, Đan sâm", tpbt: ["Sài hồ 8g", "Đương quy 12g", "Xuyên khung 10g", "Đào nhân 12g", "Hồng hoa 8g", "Địa long 10g", "Đan sâm 15g"] },

"NK_001": { stt: 148, hc: "Liệt dương do Thận dương hư suy", phanloai: ["Nam Khoa", "Hàn", "Hư", "Thận dương hư"], tc: ["Dương vật không cương cứng", "Sợ lạnh, tay chân lạnh ngắt", "Đau lưng mỏi gối", "Sắc mặt nhợt nhạt", "Mạch trầm tế trì"], pdt: "Ôn bổ thận dương, tráng dương khởi nuy", bt: "Hữu quy hoàn gia Dâm dương hoắc, Ba kích", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Nhục quế 6g", "Phụ tử chế 8g", "Dâm dương hoắc 12g", "Ba kích 12g", "Đỗ trọng 12g"] },
"NK_002": { stt: 149, hc: "Liệt dương do Can khí uất kết", phanloai: ["Nam Khoa", "Bình", "Thực", "Can khí uất"], tc: ["Dương vật khó cương khi quan hệ", "Tinh thần u uất, hay thở dài", "Ngực sườn trướng đầy", "Dễ cáu gắt", "Mạch huyền"], pdt: "Sơ can giải uất, thông lạc tráng dương", bt: "Sài hồ sơ can tán gia Dâm dương hoắc, Ngưu tất", tpbt: ["Sài hồ 10g", "Bạch thược 12g", "Chỉ xác 8g", "Xuyên khung 10g", "Dâm dương hoắc 12g", "Ngưu tất 12g", "Cam thảo 6g"] },
"NK_003": { stt: 150, hc: "Liệt dương do Thấp nhiệt hạ chú", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Thấp nhiệt"], tc: ["Dương vật ỉu mềm không cứng", "Bì bìu ẩm ngứa, hôi háng", "Tiểu tiện đỏ ngắn, buốt dắt", "Lưỡi đỏ rêu vàng nhớt", "Mạch nhu sác"], pdt: "Thanh nhiệt lợi thấp, thông lạc tráng dương", bt: "Long đởm tả can thang gia Hoàng bá", tpbt: ["Long đởm thảo 12g", "Hoàng cầm 12g", "Chi tử 12g", "Trạch tả 12g", "Hoàng bá 12g", "Mộc thông 8g", "Sài hồ 8g"] },
"NK_004": { stt: 151, hc: "Liệt dương do Tâm Tỳ lưỡng hư", phanloai: ["Nam Khoa", "Bình", "Hư", "Tâm Tỳ hư"], tc: ["Dương vật khó cương cứng, giảm ham muốn", "Hồi hộp, mất ngủ, hay quên", "Sắc mặt nhợt, ăn kém tiêu chảy", "Mạch tế nhược"], pdt: "Bổ ích tâm tỳ, dưỡng huyết tráng dương", bt: "Quy tỳ thang gia Ba kích, Dâm dương hoắc", tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Hoàng kỳ 16g", "Đương quy 12g", "Ba kích 12g", "Long nhãn 12g"] },
"NK_005": { stt: 152, hc: "Liệt dương do Kinh hãi thương Thận", phanloai: ["Nam Khoa", "Bình", "Thực", "Kinh hãi thương thận"], tc: ["Cương cứng thất thường do hoảng sợ khi quan hệ", "Tâm thần bàng hoàng, dễ giật mình", "Mất ngủ nhiều mộng", "Mạch huyền tế"], pdt: "Bình kinh an thần, bổ thận cố tinh", bt: "An thần định chí hoàn gia Thỏ ty tử, Ba kích", tpbt: ["Nhân sâm 10g", "Phục linh 12g", "Phục thần 12g", "Viễn chí 6g", "Long cốt 15g", "Mẫu lệ 15g", "Thỏ ty tử 12g", "Ba kích 12g"] },
"NK_006": { stt: 153, hc: "Liệt dương do Huyết ứ tinh cung", phanloai: ["Nam Khoa", "Bình", "Thực", "Huyết ứ"], tc: ["Liệt dương kèm đau nhói vùng bẹn", "Tiền sử chấn thương tầng sinh môn", "Lưỡi tím sẫm có điểm ứ huyết", "Mạch sáp"], pdt: "Hoạt huyết hóa ứ, thông lạc khởi nuy", bt: "Đào hồng tứ vật thang gia Ngưu tất, Vương bất lưu hành", tpbt: ["Đào nhân 12g", "Hồng hoa 8g", "Đương quy 12g", "Xuyên khung 10g", "Xích thược 12g", "Thục địa 16g", "Ngưu tất 12g"] },
"NK_007": { stt: 154, hc: "Liệt dương do Thận âm hư hỏa vượng", phanloai: ["Nam Khoa", "Nhiệt", "Hư", "Âm hư hỏa vượng"], tc: ["Dễ kích thích cương nhưng mau dịu", "Triều nhiệt đạo hãn, mỏi lưng gối", "Di tinh, lòng bàn tay chân nóng", "Lưỡi đỏ ít rêu", "Mạch tế sác"], pdt: "Tư âm giáng hỏa, bổ thận ích tinh", bt: "Tri bá địa hoàng hoàn gia Dâm dương hoắc", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Tri mẫu 12g", "Hoàng bá 12g", "Phục linh 12g", "Dâm dương hoắc 12g"] },
"NK_008": { stt: 155, hc: "Liệt dương do Tỳ Thận dương hư", phanloai: ["Nam Khoa", "Hàn", "Hư", "Tỳ Thận dương hư"], tc: ["Liệt dương hoàn toàn, không có ham muốn", "Sợ lạnh, tay chân lạnh ngắt", "Bụng dưới lạnh đau, ngũ canh tả", "Mạch trầm tế trì"], pdt: "Ôn bổ tỳ thận, tráng dương khởi nuy", bt: "Phụ tử lý trung hoàn hợp Hữu quy hoàn", tpbt: ["Phụ tử chế 10g", "Nhục quế 6g", "Đảng sâm 12g", "Bạch truật 12g", "Can khương 8g", "Thục địa 16g", "Sơn thù nhục 8g"] },
"NK_009": { stt: 156, hc: "Liệt dương do Đàm thấp trệ kinh lạc", phanloai: ["Nam Khoa", "Bình", "Thực", "Đàm thấp"], tc: ["Liệt dương ở người béo bệu", "Thân thể mệt mỏi, nặng nề", "Ngực bụng trướng đầy, đờm nhiều", "Rêu lưỡi trắng dầy nhớt", "Mạch nhu hoạt"], pdt: "Kiện tỳ mẫn thấp, hóa đàm thông lạc tráng dương", bt: "Bán hạ bạch truật thiên ma thang gia Ba kích, Dâm dương hoắc", tpbt: ["Bán hạ 10g", "Bạch truật 12g", "Thiên ma 10g", "Phục linh 12g", "Trần bì 6g", "Ba kích 12g", "Dâm dương hoắc 12g"] },
"NK_010": { stt: 157, hc: "Liệt dương do Phế Thận khí hư", phanloai: ["Nam Khoa", "Bình", "Hư", "Phế Thận khí hư"], tc: ["Liệt dương kèm ho hen, thở gấp khi vận động", "Tiếng nói nhỏ yếu, tự hãn", "Thắt lưng mỏi yếu", "Mạch trầm nhược"], pdt: "Bổ phế ích khí, ôn thận tráng dương", bt: "Thất vị đô khí hoàn gia Nhân sâm, Ba kích", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Phục linh 12g", "Ngũ vị tử 6g", "Nhân sâm 10g", "Ba kích 12g"] },

"NK_011": { stt: 158, hc: "Xuất tinh sớm do Thận khí bất cố", phanloai: ["Nam Khoa", "Bình", "Hư", "Thận khí hư"], tc: ["Vừa tiếp xúc đã xuất tinh", "Lưng mỏi gối yếu, tai ù", "Tiểu tiện rỉ rả, tóc rụng", "Mạch trầm nhược"], pdt: "Ích thận cố tinh, sáp niệu", bt: "Kim tỏa cố tinh hoàn gia Bổ cốt chỉ", tpbt: ["Sa uyển tử 12g", "Liên tu 8g", "Khiếm thực 12g", "Long cốt 15g", "Mẫu lệ 15g", "Liên nhục 12g", "Bổ cốt chỉ 12g"] },
"NK_012": { stt: 159, hc: "Xuất tinh sớm do Âm hư hỏa vượng", phanloai: ["Nam Khoa", "Nhiệt", "Hư", "Âm hư hỏa vượng"], tc: ["Ham muốn cao nhưng mau xuất tinh", "Ngũ tâm phiền nhiệt, triều nhiệt đạo hãn", "Miệng khô, lưỡi đỏ ít rêu", "Mạch tế sác"], pdt: "Tư âm giáng hỏa, cố tinh chỉ tả", bt: "Tri bá địa hoàng hoàn gia Kim tỏa cố tinh hoàn", tpbt: ["Thục địa 16g", "Tri mẫu 12g", "Hoàng bá 12g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Sa uyển tử 12g", "Mẫu lệ 15g"] },
"NK_013": { stt: 160, hc: "Xuất tinh sớm do Tâm Thận bất giao", phanloai: ["Nam Khoa", "Nhiệt", "Hư thực thác tạp", "Tâm Thận bất giao"], tc: ["Xuất tinh sớm kèm tâm phiền mất ngủ", "Hồi hộp hay quên, bứt rứt", "Thắt lưng đau mỏi, tai ù", "Mạch tế sác"], pdt: "Tư âm giáng hỏa, thanh tâm an thần cố tinh", bt: "Thiên vương bổ tâm đan hợp Kim tỏa cố tinh hoàn", tpbt: ["Sinh địa 16g", "Huyền sâm 12g", "Cát cánh 6g", "Viễn chí 6g", "Toan táo nhân 12g", "Sa uyển tử 12g", "Long cốt 15g"] },
"NK_014": { stt: 161, hc: "Xuất tinh sớm do Can kinh thấp nhiệt", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Thấp nhiệt"], tc: ["Dễ kích thích xuất tinh ngay", "Bì bìu ẩm ngứa, hôi thối", "Miệng đắng, tiểu tiện đỏ dắt", "Rêu lưỡi vàng nhớt", "Mạch nhu sác"], pdt: "Thanh nhiệt lợi thấp, thanh can cố tinh", bt: "Long đởm tả can thang gia Ô tặc cốt, Khiếm thực", tpbt: ["Long đởm thảo 12g", "Hoàng cầm 12g", "Chi tử 12g", "Trạch tả 12g", "Mộc thông 8g", "Ô tặc cốt 15g", "Khiếm thực 12g"] },
"NK_015": { stt: 162, hc: "Xuất tinh sớm do Can khí uất trệ", phanloai: ["Nam Khoa", "Bình", "Thực", "Khí trệ"], tc: ["Xuất tinh sớm do căng thẳng tâm lý", "Tinh thần u uất, hay thở dài", "Ngực sườn trướng đầy", "Mạch huyền"], pdt: "Sơ can giải uất, cố tinh chỉ tả", bt: "Sài hồ sơ can tán gia Sa uyển tử, Khiếm thực", tpbt: ["Sài hồ 10g", "Bạch thược 12g", "Chỉ xác 8g", "Xuyên khung 10g", "Trần bì 6g", "Sa uyển tử 12g", "Khiếm thực 12g"] },
"NK_016": { stt: 163, hc: "Xuất tinh sớm do Tâm Tỳ khí huyết hư", phanloai: ["Nam Khoa", "Bình", "Hư", "Khí huyết hư"], tc: ["Mệt mỏi không sức, vừa quan hệ đã xuất tinh", "Mặt nhợt, sắc mặt úa vàng", "Hồi hộp, tiêu chảy phân lỏng", "Mạch tế nhược"], pdt: "Bổ ích tâm tỳ, cố tinh sáp niệu", bt: "Quy tỳ thang gia Khiếm thực, Long cốt", tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Hoàng kỳ 16g", "Đương quy 12g", "Long nhãn 12g", "Khiếm thực 12g", "Long cốt 15g"] },
"NK_017": { stt: 164, hc: "Xuất tinh sớm do Thận dương hư suy", phanloai: ["Nam Khoa", "Hàn", "Hư", "Thận dương hư"], tc: ["Xuất tinh sớm kèm tinh dịch lạnh loãng", "Sợ lạnh, tay chân lạnh ngắt", "Thắt lưng mỏi lạnh", "Mạch trầm tế trì"], pdt: "Ôn bổ thận dương, cố tinh sáp niệu", bt: "Hữu quy hoàn gia Sa uyển tử, Bổ cốt chỉ", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Nhục quế 6g", "Phụ tử chế 8g", "Sa uyển tử 12g", "Bổ cốt chỉ 12g"] },
"NK_018": { stt: 165, hc: "Xuất tinh sớm do Huyết ứ ngưng trệ tinh đường", phanloai: ["Nam Khoa", "Bình", "Thực", "Huyết ứ"], tc: ["Xuất tinh sớm kèm đau buốt bẹn khi xuất tinh", "Lưỡi tím sẫm có điểm ứ huyết", "Mạch sáp"], pdt: "Hoạt huyết hóa ứ, cố tinh thông lạc", bt: "Đào hồng tứ vật thang gia Kim tỏa cố tinh hoàn", tpbt: ["Đào nhân 12g", "Hồng hoa 8g", "Đương quy 12g", "Xuyên khung 10g", "Sa uyển tử 12g", "Khiếm thực 12g", "Long cốt 15g"] },

"NK_019": { stt: 166, hc: "Di tinh do Thận khí bất cố", phanloai: ["Nam Khoa", "Bình", "Hư", "Thận khí hư"], tc: ["Di tinh mộng tinh liên tục", "Thắt lưng mỏi yếu, tai ù", "Tiểu tiện rỉ rả không tự chủ", "Mạch trầm nhược"], pdt: "Cố tinh sáp niệu, bổ thận ích khí", bt: "Kim tỏa cố tinh hoàn", tpbt: ["Sa uyển tử 12g", "Liên tu 8g", "Khiếm thực 12g", "Long cốt 15g", "Mẫu lệ 15g", "Liên nhục 12g"] },
"NK_020": { stt: 167, hc: "Di tinh do Âm hư hỏa vượng", phanloai: ["Nam Khoa", "Nhiệt", "Hư", "Âm hư hỏa vượng"], tc: ["Mộng tinh nhiều lần về đêm", "Triều nhiệt đạo hãn, ngũ tâm phiền nhiệt", "Miệng khô lưỡi đỏ ít rêu", "Mạch tế sác"], pdt: "Tư âm giáng hỏa, cố tinh an thần", bt: "Tri bá địa hoàng hoàn gia Long cốt, Mẫu lệ", tpbt: ["Thục địa 16g", "Tri mẫu 12g", "Hoàng bá 12g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Long cốt 15g", "Mẫu lệ 15g"] },
"NK_021": { stt: 168, hc: "Di tinh do Tâm Thận bất giao", phanloai: ["Nam Khoa", "Nhiệt", "Hư thực thác tạp", "Tâm Thận bất giao"], tc: ["Ngủ mơ thấy quan hệ rồi di tinh", "Tâm phiền bứt rứt, mất ngủ", "Hồi hộp hoảng hốt, tai ù", "Mạch tế sác"], pdt: "Thanh tâm giáng hỏa, tư thận cố tinh", bt: "Giao thái hoàn hợp Kim tỏa cố tinh hoàn", tpbt: ["Hoàng liên 8g", "Nhục quế 4g", "Sa uyển tử 12g", "Khiếm thực 12g", "Long cốt 15g", "Mẫu lệ 15g", "Liên nhục 12g"] },
"NK_022": { stt: 169, hc: "Di tinh do Thấp nhiệt hạ chú", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Thấp nhiệt"], tc: ["Di tinh kèm tiểu buốt dắt, nước tiểu đục", "Bì bìu ẩm ngứa hôi", "Rêu lưỡi vàng nhớt", "Mạch nhu sác"], pdt: "Thanh nhiệt lợi thấp, chỉ di cố tinh", bt: "Bát chính tán gia Sa uyển tử, Ô tặc cốt", tpbt: ["Xa tiền tử 12g", "Mộc thông 8g", "Cù mạch 10g", "Biển súc 10g", "Chi tử 12g", "Sa uyển tử 12g", "Ô tặc cốt 15g"] },
"NK_023": { stt: 170, hc: "Di tinh do Can uất hóa hỏa", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Can hỏa"], tc: ["Mộng tinh kèm cáu gắt, nhức đầu", "Mắt đỏ, miệng đắng họng khô", "Tiểu tiện đỏ ngắn", "Mạch huyền sác"], pdt: "Thanh can tả hỏa, cố tinh chỉ di", bt: "Long đởm tả can thang gia Kim tỏa cố tinh hoàn", tpbt: ["Long đởm thảo 12g", "Chi tử 12g", "Hoàng cầm 12g", "Trạch tả 12g", "Sa uyển tử 12g", "Long cốt 15g", "Mẫu lệ 15g"] },
"NK_024": { stt: 171, hc: "Di tinh do Tỳ hư thất thu", phanloai: ["Nam Khoa", "Bình", "Hư", "Tỳ hư"], tc: ["Di tinh ban ngày khi nghĩ đến tình dục (Hoạt tinh)", "Mệt mỏi hụt hơi, ăn kém tiêu chảy", "Sắc mặt vàng nhợt", "Mạch hoãn nhược"], pdt: "Kiện tỳ ích khí, thăng dương cố tinh", bt: "Bổ trung ích khí thang gia Khiếm thực, Kim tỏa cố tinh hoàn", tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Bạch truật 12g", "Thăng ma 6g", "Sài hồ 6g", "Khiếm thực 12g", "Sa uyển tử 12g"] },

"NK_025": { stt: 172, hc: "Hoạt tinh do Thận dương hư suy", phanloai: ["Nam Khoa", "Hàn", "Hư suy", "Thận dương hư"], tc: ["Tinh dịch rỉ ra không kiểm soát khi không cương", "Sợ lạnh, tay chân lạnh ngắt", "Thắt lưng mỏi lạnh, tiểu đêm nhiều", "Mạch trầm tế vi"], pdt: "Ôn bổ thận dương, cố sáp chỉ di", bt: "Hữu quy hoàn gia Tang phiêu tiêu, Bổ cốt chỉ", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Nhục quế 6g", "Phụ tử chế 8g", "Tang phiêu tiêu 12g", "Bổ cốt chỉ 12g"] },
"NK_026": { stt: 173, hc: "Hoạt tinh do Trung khí hạ hãm", phanloai: ["Nam Khoa", "Bình", "Hư", "Trung khí hạ hãm"], tc: ["Tinh dịch rỉ ra khi rặn đi tiêu", "Bụng dưới nặng tức, trĩ sa", "Mệt mỏi hụt hơi, sắc mặt nhợt", "Mạch hoãn nhược"], pdt: "Bổ trung ích khí, thăng đề cố tinh", bt: "Bổ trung ích khí thang gia Kim tỏa cố tinh hoàn", tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Bạch truật 12g", "Trần bì 6g", "Thăng ma 6g", "Sài hồ 6g", "Sa uyển tử 12g", "Long cốt 15g"] },

"NK_027": { stt: 174, hc: "Huyết tinh do Âm hư hỏa vượng", phanloai: ["Nam Khoa", "Nhiệt", "Hư", "Âm hư hỏa vượng"], tc: ["Xuất tinh ra máu đỏ tươi", "Lòng bàn tay chân nóng, triều nhiệt đạo hãn", "Đau mỏi thắt lưng gối", "Lưỡi đỏ ít rêu", "Mạch tế sác"], pdt: "Tư âm giáng hỏa, lương huyết chỉ huyết", bt: "Tri bá địa hoàng hoàn gia Trắc bách diệp, Bồ hoàng", tpbt: ["Thục địa 16g", "Tri mẫu 12g", "Hoàng bá 12g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trắc bách diệp 12g", "Bồ hoàng 10g"] },
"NK_028": { stt: 175, hc: "Huyết tinh do Thấp nhiệt hạ chú", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Thấp nhiệt"], tc: ["Xuất tinh ra máu kèm đau buốt bẹn tầng sinh môn", "Tiểu dắt, tiểu buốt, tiểu đục", "Rêu lưỡi vàng nhớt", "Mạch nhu sác"], pdt: "Thanh nhiệt lợi thấp, lương huyết chỉ huyết", bt: "Tiểu kế ẩm gia Hoàng bá, Mộc thông", tpbt: ["Tiểu kế 15g", "Sinh địa 16g", "Mộc thông 8g", "Hoạt thạch 15g", "Trắc bách diệp 12g", "Hoàng bá 12g", "Cam thảo 6g"] },
"NK_029": { stt: 176, hc: "Huyết tinh do Can hỏa bốc trào", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Can hỏa"], tc: ["Xuất tinh ra máu màu đỏ sẫm sau khi tức giận", "Mắt đỏ, miệng đắng, đau đầu", "Dễ cáu gắt", "Mạch huyền sác"], pdt: "Thanh can tả hỏa, lương huyết chỉ huyết", bt: "Long đởm tả can thang gia Tam thất, Bồ hoàng", tpbt: ["Long đởm thảo 12g", "Chi tử 12g", "Hoàng cầm 12g", "Trạch tả 12g", "Sài hồ 8g", "Tam thất 6g", "Bồ hoàng 10g"] },
"NK_030": { stt: 177, hc: "Huyết tinh do Huyết ứ tinh cung", phanloai: ["Nam Khoa", "Bình", "Thực", "Huyết ứ"], tc: ["Xuất tinh ra máu có cục màu tím đen", "Bụng dưới và bẹn đau nhói cự án", "Lưỡi tím sẫm điểm ứ huyết", "Mạch sáp"], pdt: "Hoạt huyết hóa ứ, chỉ huyết thông lạc", bt: "Đào hồng tứ vật thang gia Tam thất, Ngưu tất", tpbt: ["Đào nhân 12g", "Hồng hoa 8g", "Đương quy 12g", "Xuyên khung 10g", "Thục địa 16g", "Tam thất 6g", "Ngưu tất 12g"] },
"NK_031": { stt: 178, hc: "Huyết tinh do Tỳ không thống huyết", phanloai: ["Nam Khoa", "Bình", "Hư", "Khí hư không nhiếp huyết"], tc: ["Xuất tinh ra máu màu hồng nhạt kéo dài", "Sắc mặt úa vàng, mệt mỏi hụt hơi", "Ăn kém tiêu chảy", "Mạch tế nhược"], pdt: "Kiện tỳ ích khí, nhiếp huyết chỉ huyết", bt: "Quy tỳ thang gia Tam thất, A giao", tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Hoàng kỳ 16g", "Đương quy 12g", "Long nhãn 12g", "Tam thất 6g", "A giao 10g"] },

"NK_032": { stt: 179, hc: "Vô sinh nam do Thận tinh bất túc (Tinh trùng ít/yếu)", phanloai: ["Nam Khoa", "Bình", "Hư", "Thận tinh bất túc"], tc: ["Tinh dịch loãng, số lượng và chất lượng tinh trùng kém", "Chân gối yếu mềm, tai ù", "Tóc bạc sớm, trí nhớ giảm", "Mạch tế vô lực"], pdt: "Bổ thận điền tinh, ích tủy sinh tinh", bt: "Tả quy hoàn gia Lộc giác giao, Tử hà xe", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Kỷ tử 12g", "Thỏ ty tử 12g", "Lộc giác giao 10g", "Tử hà xe 8g", "Ngưu tất 12g"] },
"NK_033": { stt: 180, hc: "Vô sinh nam do Thận dương hư suy (Tinh lạnh)", phanloai: ["Nam Khoa", "Hàn", "Hư suy", "Thận dương hư"], tc: ["Tinh dịch lạnh loãng như nước, không tinh trùng", "Sợ lạnh, tay chân lạnh ngắt", "Liệt dương hoặc suy giảm ham muốn", "Mạch trầm tế trì"], pdt: "Ôn bổ thận dương, ích tinh bổ tủy", bt: "Hữu quy hoàn gia Dâm dương hoắc, Nhục thung dung", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Nhục quế 6g", "Phụ tử chế 8g", "Dâm dương hoắc 12g", "Nhục thung dung 12g"] },
"NK_034": { stt: 181, hc: "Vô sinh nam do Thấp nhiệt hạ chú (Tinh trùng dị dạng/viêm tinh)", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Thấp nhiệt"], tc: ["Tinh trùng bạch cầu cao, dị dạng nhiều", "Bì bìu ẩm nóng ngứa, hôi háng", "Tiểu dắt buốt", "Mạch nhu sác"], pdt: "Thanh nhiệt lợi thấp, thanh tinh thông lạc", bt: "Long đởm tả can thang gia Thổ phục linh, Hoàng bá", tpbt: ["Long đởm thảo 12g", "Chi tử 12g", "Hoàng cầm 12g", "Trạch tả 12g", "Thổ phục linh 15g", "Hoàng bá 12g", "Mộc thông 8g"] },
"NK_035": { stt: 182, hc: "Vô sinh nam do Khí trệ huyết ứ (Tắc ống dẫn tinh)", phanloai: ["Nam Khoa", "Bình", "Thực", "Khí trệ huyết ứ"], tc: ["Không có tinh trùng do tắc ống dẫn tinh", "Bì bìu hoặc bẹn có điểm đau nhói cố định", "Lưỡi tím sẫm", "Mạch sáp hoặc huyền"], pdt: "Hành khí hoạt huyết, thông đạo tinh cung", bt: "Thân thống trục ứ thang gia Vương bất lưu hành, Xuyên sơn giáp", tpbt: ["Đào nhân 12g", "Hồng hoa 8g", "Đương quy 12g", "Xuyên khung 10g", "Ngưu tất 12g", "Vương bất lưu hành 12g", "Xuyên sơn giáp 6g"] },
"NK_036": { stt: 183, hc: "Vô sinh nam do Can uất khí trệ", phanloai: ["Nam Khoa", "Bình", "Thực", "Can khí uất"], tc: ["Tinh dịch không phóng xuất được hoặc ít", "Tinh thần căng thẳng lo âu", "Ngực sườn trướng đầy, hay thở dài", "Mạch huyền"], pdt: "Sơ can giải uất, thông tinh khởi nuy", bt: "Sài hồ sơ can tán gia Vương bất lưu hành, Dâm dương hoắc", tpbt: ["Sài hồ 10g", "Bạch thược 12g", "Chỉ xác 8g", "Xuyên khung 10g", "Vương bất lưu hành 12g", "Dâm dương hoắc 12g"] },
"NK_037": { stt: 184, hc: "Vô sinh nam do Khí huyết lưỡng hư (Tinh dịch loãng ít)", phanloai: ["Nam Khoa", "Bình", "Hư", "Khí huyết hư"], tc: ["Tinh dịch loãng ít, mệt mỏi toàn thân", "Sắc mặt nhợt nhạt, hoa mắt chóng mặt", "Ăn kém tiêu chảy", "Mạch tế nhược"], pdt: "Bổ khí dưỡng huyết, sinh tinh bổ tủy", bt: "Bát trân thang gia Thỏ ty tử, Kỷ tử", tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Cam thảo 6g", "Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g", "Thỏ ty tử 12g", "Kỷ tử 12g"] },
"NK_038": { stt: 185, hc: "Vô sinh nam do Đàm thấp uẩn kết tinh cung", phanloai: ["Nam Khoa", "Bình", "Thực", "Đàm thấp"], tc: ["Tinh dịch đặc quánh khó hóa lỏng", "Thân thể béo bệu, mệt mỏi", "Đờm dãi nhiều, rêu dầy nhớt", "Mạch nhu hoạt"], pdt: "Kiện tỳ mẫn thấp, hóa đàm thông tinh", bt: "Bán hạ bạch truật thiên ma thang gia Thần khúc, Sơn tra", tpbt: ["Bán hạ 10g", "Bạch truật 12g", "Thiên ma 10g", "Phục linh 12g", "Trần bì 6g", "Sơn tra 10g", "Thần khúc 10g"] },

"NK_039": { stt: 186, hc: "Sán khí do Hàn trệ Can mạch (Thoát vị bẹn do lạnh)", phanloai: ["Nam Khoa", "Hàn", "Thực", "Hàn trệ"], tc: ["Thoát vị bẹn bì bìu sưng đau co rút", "Gặp lạnh đau tăng, chườm ấm dễ chịu", "Bì bìu lạnh ngắt", "Mạch trầm khẩn"], pdt: "Ôn kinh tán hàn, noãn can chỉ thống", bt: "Noãn can tiễn gia Ngô thù du", tpbt: ["Tiểu hồi hương 8g", "Nhục quế 6g", "Đương quy 12g", "Ô dược 10g", "Trầm hương 3g", "Ngô thù du 6g", "Phục linh 12g"] },
"NK_040": { stt: 187, hc: "Sán khí do Thấp nhiệt hạ chú (Viêm mào tinh / Bìu sưng nóng)", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Thấp nhiệt"], tc: ["Tinh hoàn bì bìu sưng nóng đỏ đau dữ dội", "Sốt, sợ rét, tiểu dắt buốt", "Rêu lưỡi vàng nhớt", "Mạch hoạt sác"], pdt: "Thanh nhiệt lợi thấp, tiêu thũng chỉ thống", bt: "Long đởm tả can thang gia Kim ngân hoa, Bồ công anh", tpbt: ["Long đởm thảo 12g", "Chi tử 12g", "Hoàng cầm 12g", "Trạch tả 12g", "Kim ngân hoa 15g", "Bồ công anh 15g", "Sài hồ 8g"] },
"NK_041": { stt: 188, hc: "Sán khí do Khí trệ huyết ứ (Xoắn tinh hoàn / Chấn thương bìu)", phanloai: ["Nam Khoa", "Bình", "Thực", "Khí trệ huyết ứ"], tc: ["Tinh hoàn đau nhói đột ngột cự án", "Bì bìu bầm tím sưng to", "Lưỡi tím sẫm có điểm ứ huyết", "Mạch sáp"], pdt: "Hoạt huyết hóa ứ, tiêu thũng chỉ thống", bt: "Thân thống trục ứ thang gia Kê nội kim, Ô dược", tpbt: ["Đào nhân 12g", "Hồng hoa 8g", "Đương quy 12g", "Xuyên khung 10g", "Ngưu tất 12g", "Ô dược 10g", "Địa long 10g"] },
"NK_042": { stt: 189, hc: "Sán khí do Trung khí hạ hãm (Sa tinh hoàn mạn)", phanloai: ["Nam Khoa", "Bình", "Hư", "Trung khí hạ hãm"], tc: ["Bì bìu sa thõng nặng tức kéo xuống bẹn", "Nằm nghỉ bớt đau, đứng lâu đau tăng", "Mệt mỏi hụt hơi", "Mạch hoãn nhược"], pdt: "Bổ khí thăng dương, cử hãm chỉ thống", bt: "Bổ trung ích khí thang gia Tiểu hồi hương, Ô dược", tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Bạch truật 12g", "Thăng ma 6g", "Sài hồ 6g", "Tiểu hồi hương 8g", "Ô dược 10g"] },
"NK_043": { stt: 190, hc: "Sán khí do Can uất hóa hỏa", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Can hỏa"], tc: ["Tinh hoàn sưng đau rát sau khi tức giận", "Mắt đỏ, miệng đắng họng khô", "Tiểu đỏ đại tiện táo", "Mạch huyền sác"], pdt: "Thanh can tả hỏa, tán kết chỉ thống", bt: "Long đởm tả can thang gia Mộc hương, Ô dược", tpbt: ["Long đởm thảo 12g", "Chi tử 12g", "Hoàng cầm 12g", "Sài hồ 8g", "Mộc hương 6g", "Ô dược 10g"] },
"NK_044": { stt: 191, hc: "Sán khí do Thận hư sán (Đau mỏi bìu dai dẳng)", phanloai: ["Nam Khoa", "Bình", "Hư", "Thận hư"], tc: ["Thắt lưng và tinh hoàn đau âm ỉ dai dẳng", "Chân gối yếu mỏi, sợ lạnh", "Tiểu đêm nhiều", "Mạch trầm tế"], pdt: "Bổ thận cường gân, tán hàn chỉ thống", bt: "Thận khí hoàn gia Tiểu hồi hương, Bổ cốt chỉ", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Nhục quế 6g", "Phụ tử chế 8g", "Tiểu hồi hương 8g", "Bổ cốt chỉ 12g"] },

"NK_045": { stt: 192, hc: "Viêm tiền liệt tuyến cấp do Thấp nhiệt hạ chú", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Thấp nhiệt"], tc: ["Tiểu buốt, tiểu dắt, tiểu ra mủ hoặc máu", "Đau rát vùng tầng sinh môn và bẹn", "Sốt cao, bứt rứt", "Mạch nhu sác"], pdt: "Thanh nhiệt lợi thấp, giải độc thông lâm", bt: "Bát chính tán gia Hoàng bá, Đan sâm", tpbt: ["Xa tiền tử 12g", "Mộc thông 8g", "Cù mạch 10g", "Biển súc 10g", "Hoạt thạch 15g", "Chi tử 12g", "Hoàng bá 12g", "Đan sâm 15g"] },
"NK_046": { stt: 193, hc: "Viêm tiền liệt tuyến mạn do Khí trệ huyết ứ", phanloai: ["Nam Khoa", "Bình", "Thực", "Khí trệ huyết ứ"], tc: ["Đau tức âm ỉ bẹn, tầng sinh môn, thắt lưng", "Tiểu ngắt quãng, tiểu không hết giọt", "Lưỡi tím sẫm", "Mạch sáp"], pdt: "Hành khí hoạt huyết, tiêu thũng chỉ thống", bt: "Thần hiệu trục ứ thang gia Ngưu tất, Vương bất lưu hành", tpbt: ["Đào nhân 12g", "Hồng hoa 8g", "Đương quy 12g", "Xuyên khung 10g", "Ngưu tất 12g", "Vương bất lưu hành 12g", "Chỉ xác 8g"] },
"NK_047": { stt: 194, hc: "Viêm tiền liệt tuyến mạn do Thận âm hư hỏa vượng", phanloai: ["Nam Khoa", "Nhiệt", "Hư", "Âm hư hỏa vượng"], tc: ["Mỏi lưng gối, tiểu đêm nhiều, tiểu rát nhẹ", "Ra chất nhầy trắng sau khi tiểu", "Triều nhiệt đạo hãn", "Mạch tế sác"], pdt: "Tư âm giáng hỏa, thanh nhiệt thông lâm", bt: "Tri bá địa hoàng hoàn gia Mộc thông, Xa tiền tử", tpbt: ["Thục địa 16g", "Tri mẫu 12g", "Hoàng bá 12g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Mộc thông 8g", "Xa tiền tử 12g"] },
"NK_048": { stt: 195, hc: "Viêm tiền liệt tuyến mạn do Thận dương hư suy", phanloai: ["Nam Khoa", "Hàn", "Hư suy", "Thận dương hư"], tc: ["Tiểu đêm nhiều, tiểu rỉ rả không lực", "Thắt lưng lạnh đau, sợ lạnh", "Liệt dương, di tinh", "Mạch trầm tế vô lực"], pdt: "Ôn bổ thận dương, hóa khí lợi thủy", bt: "Thận khí hoàn gia Ô dược, Ích trí nhân", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Nhục quế 6g", "Phụ tử chế 8g", "Ô dược 10g", "Ích trí nhân 10g"] },
"NK_049": { stt: 196, hc: "Viêm tiền liệt tuyến do Trung khí hạ hãm (Tức nặng bẹn)", phanloai: ["Nam Khoa", "Bình", "Hư", "Trung khí hạ hãm"], tc: ["Bụng dưới và bẹn trướng nặng tức", "Tiểu rỉ rả, rặn nhiều không ra", "Mệt mỏi hụt hơi", "Mạch hoãn nhược"], pdt: "Bổ trung ích khí, thăng dương thông lâm", bt: "Bổ trung ích khí thang gia Mộc thông, Xa tiền tử", tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Bạch truật 12g", "Trần bì 6g", "Thăng ma 6g", "Sài hồ 6g", "Mộc thông 8g", "Xa tiền tử 12g"] },

"NK_050": { stt: 197, hc: "Phì đại tiền liệt tuyến do Thận dương hư khí hóa thất thường", phanloai: ["Nam Khoa", "Hàn", "Hư suy", "Thận dương hư"], tc: ["Tiểu khó, tiểu rỉ rả, tiểu đêm 4-5 lần", "Dòng nước tiểu yếu đứt đoạn", "Chân tay lạnh, đau lưng", "Mạch trầm tế trì"], pdt: "Ôn bổ thận dương, hóa khí lợi thủy", bt: "Tế sinh Thận khí hoàn", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Phục linh 12g", "Nhục quế 6g", "Phụ tử chế 8g", "Ngưu tất 12g", "Xa tiền tử 12g"] },
"NK_051": { stt: 198, hc: "Phì đại tiền liệt tuyến do Khí trệ huyết ứ (Bí tiểu hoàn toàn)", phanloai: ["Nam Khoa", "Bình", "Thực", "Khí trệ huyết ứ"], tc: ["Bí tiểu đột ngột, bụng dưới trướng căng đau dữ dội", "Lưỡi tím sẫm có điểm ứ huyết", "Mạch sáp hoặc huyền"], pdt: "Hành khí hoạt huyết, thông lợi bàng quang", bt: "Trầm hương tán gia Ngưu tất, Vương bất lưu hành", tpbt: ["Trầm hương 3g", "Mộc hương 6g", "Đương quy 12g", "Vương bất lưu hành 12g", "Ngưu tất 12g", "Thạch vi 12g"] },
"NK_052": { stt: 199, hc: "Phì đại tiền liệt tuyến do Thấp nhiệt uẩn kết hạ tiêu", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Thấp nhiệt"], tc: ["Tiểu dắt buốt, nước tiểu vàng đục hôi", "Hậu môn và bẹn nóng trướng", "Rêu dầy vàng nhớt", "Mạch nhu sác"], pdt: "Thanh nhiệt lợi thấp, thông lâm tán kết", bt: "Bát chính tán gia Kê nội kim, Thổ phục linh", tpbt: ["Xa tiền tử 12g", "Mộc thông 8g", "Cù mạch 10g", "Biển súc 10g", "Chi tử 12g", "Kê nội kim 10g", "Thổ phục linh 15g"] },
"NK_053": { stt: 200, hc: "Phì đại tiền liệt tuyến do Phế khí uất trệ (Bí tiểu do phế)", phanloai: ["Nam Khoa", "Bình", "Thực", "Phế khí uất"], tc: ["Bí tiểu kèm ho hen, tức ngạt ngực", "Không tiểu được dù bụng trướng", "Mạch huyền dũng dạc"], pdt: "Tuyên phế lợi thủy, thăng thanh giáng trọc", bt: "Hoàng cầm tả phế thang gia Cát cánh, Mộc thông", tpbt: ["Hoàng cầm 12g", "Tang bạch bì 12g", "Cát cánh 8g", "Chỉ xác 8g", "Mộc thông 8g", "Trạch tả 12g"] },

"NK_054": { stt: 201, hc: "Cường trung do Âm hư hỏa vượng (Cương liên tục đau rát)", phanloai: ["Nam Khoa", "Nhiệt", "Hư thực thác tạp", "Âm hư hỏa vượng"], tc: ["Dương vật cương cứng liên tục không dịu, đau nhói", "Không xuất tinh được", "Mặt đỏ miệng khô, triều nhiệt", "Mạch tế sác hữu lực"], pdt: "Tư âm giáng hỏa, thanh can tả hỏa", bt: "Tri bá địa hoàng hoàn gia Long đởm thảo, Mẫu lệ", tpbt: ["Thục địa 16g", "Tri mẫu 12g", "Hoàng bá 12g", "Long đởm thảo 12g", "Mẫu lệ 20g", "Sơn thù nhục 8g"] },
"NK_055": { stt: 202, hc: "Cường trung do Can kinh nhiệt độc", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Can hỏa nhiệt độc"], tc: ["Dương vật sưng to cương cứng đau dữ dội", "Sốt, bứt rứt, miệng đắng", "Tiểu đỏ buốt", "Mạch huyền sác hữu lực"], pdt: "Thanh can tả hỏa, giải độc lương huyết", bt: "Long đởm tả can thang gia Huyền sâm, Ngưu tất", tpbt: ["Long đởm thảo 12g", "Chi tử 12g", "Hoàng cầm 12g", "Trạch tả 12g", "Huyền sâm 12g", "Ngưu tất 12g", "Sài hồ 8g"] },
"NK_056": { stt: 203, hc: "Cường trung do Huyết ứ ngưng trệ dương vật", phanloai: ["Nam Khoa", "Bình", "Thực", "Huyết ứ"], tc: ["Dương vật cương cứng tím bầm sau chấn thương", "Ấn vào đau nhói cự án", "Mạch sáp"], pdt: "Hoạt huyết hóa ứ, tiêu thũng chỉ thống", bt: "Thông khiếu trục ứ thang gia Ngưu tất", tpbt: ["Xuyên khung 10g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Thạch xương bồ 10g", "Ngưu tất 12g"] },

"NK_057": { stt: 204, hc: "Ngọc hành sang (Viêm loét quy đầu) do Thấp nhiệt hỏa độc", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Thấp nhiệt hỏa độc"], tc: ["Quy đầu bao quy đầu sưng nóng đỏ loét chảy mủ", "Ngứa rát dữ dội, hôi thối", "Tiểu buốt", "Mạch nhu sác"], pdt: "Thanh nhiệt giải độc, trừ thấp chỉ sang", bt: "Ngũ vị tiêu độc ẩm gia Hoàng bá, Khổ sâm", tpbt: ["Kim ngân hoa 15g", "Cúc hoa 10g", "Bồ công anh 15g", "Hoàng bá 12g", "Khổ sâm 10g", "Cam thảo 6g"] },
"NK_058": { stt: 205, hc: "Ngọc hành sang do Can Thận âm hư huyết táo", phanloai: ["Nam Khoa", "Bình", "Hư thực thác tạp", "Âm hư phong táo"], tc: ["Quy đầu khô nẻ, nứt kẽ đau rát kéo dài", "Ngứa ngáy dai dẳng không lành", "Lưng mỏi gối yếu", "Mạch tế sác"], pdt: "Tư bổ can thận, dưỡng huyết nhuận táo", bt: "Kỷ cúc địa hoàng hoàn gia Hà thủ ô, Đương quy", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Kỷ tử 12g", "Hà thủ ô 12g", "Đương quy 12g"] },

"NK_059": { stt: 206, hc: "Âm nang phong (Mẩn ngứa bìu) do Phong thấp uẩn kết", phanloai: ["Nam Khoa", "Bình", "Thực", "Phong thấp"], tc: ["Da bìu nổi mẩn đỏ, ngứa ngáy dãi dề", "Gãi chảy dịch vàng, da dày sừng", "Rêu dầy dính", "Mạch nhu hoãn"], pdt: "Khu phong trừ thấp, thanh nhiệt chỉ ngứa", bt: "Tiêu phong tán gia Khổ sâm, Hoàng bá", tpbt: ["Kinh giới 10g", "Phòng phong 10g", "Thuyền thoái 6g", "Khổ sâm 10g", "Hoàng bá 12g", "Thạch cao 20g"] },
"NK_060": { stt: 207, hc: "Âm nang phong do Huyết hư phong táo", phanloai: ["Nam Khoa", "Bình", "Hư", "Huyết hư phong táo"], tc: ["Da bìu khô tróc vảy trắng, ngứa dữ dội về đêm", "Sắc mặt úa vàng, mệt mỏi", "Lưỡi nhợt", "Mạch tế sáp"], pdt: "Dưỡng huyết nhuận táo, khu phong chỉ ngứa", bt: "Dưỡng tiêu phong tán gia Hà thủ ô", tpbt: ["Đương quy 12g", "Thục địa 16g", "Bạch thược 12g", "Xuyên khung 10g", "Phòng phong 10g", "Hà thủ ô 12g"] },

"NK_061": { stt: 208, hc: "Âm nang thũng (Tràn dịch màng tinh hoàn) do Thủy thấp nội đình", phanloai: ["Nam Khoa", "Bình", "Thực", "Thủy thấp tiêu thũng"], tc: ["Bì bìu sưng to mọng nước, không đỏ không nóng", "Cảm giác nặng nề kéo xuống bẹn", "Mệt mỏi, ăn kém", "Mạch nhu hoãn"], pdt: "Kiện tỳ mẫn thấp, lợi thủy tiêu thũng", bt: "Ngũ linh tán gia Thương truật, Xa tiền tử", tpbt: ["Bạch truật 12g", "Phục linh 12g", "Trạch tả 12g", "Trư linh 10g", "Quế chi 8g", "Thương truật 10g", "Xa tiền tử 12g"] },
"NK_062": { stt: 209, hc: "Âm nang thũng do Thận dương hư suy thủy thũng", phanloai: ["Nam Khoa", "Hàn", "Hư suy", "Thận dương hư"], tc: ["Bì bìu sưng mọng nước kèm phù hai chân", "Tay chân lạnh ngắt, sợ lạnh", "Tiểu ít nước tiểu trong", "Mạch trầm tế vi"], pdt: "Ôn thận trợ dương, hóa khí lợi thủy tiêu thũng", bt: "Chân vũ thang gia Xa tiền tử, Ngưu tất", tpbt: ["Phụ tử chế 10g", "Bạch truật 12g", "Phục linh 12g", "Bạch thược 12g", "Sinh khương 6g", "Xa tiền tử 12g", "Ngưu tất 12g"] },

"NK_063": { stt: 210, hc: "Suy giảm ham muốn do Mệnh môn hỏa suy", phanloai: ["Nam Khoa", "Hàn", "Hư suy", "Mệnh môn hỏa suy"], tc: ["Mất hoàn toàn ham muốn tình dục", "Sợ lạnh, tay chân lạnh ngắt quá gối", "Đau lưng mỏi gối, di tinh tinh lạnh", "Mạch trầm tế vi"], pdt: "Ôn bổ mệnh môn hỏa, tráng dương", bt: "Hữu quy hoàn gia Ba kích, Dâm dương hoắc, Nhục thung dung", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Phụ tử chế 8g", "Nhục quế 6g", "Ba kích 12g", "Dâm dương hoắc 12g", "Nhục thung dung 12g"] },
"NK_064": { stt: 211, hc: "Suy giảm ham muốn do Can uất khí trệ", phanloai: ["Nam Khoa", "Bình", "Thực", "Can khí uất"], tc: ["Thờ ơ tình dục do u uất áp lực", "Hay thở dài, ngực sườn trướng đầy", "Mất ngủ, dễ cáu gắt", "Mạch huyền"], pdt: "Sơ can giải uất, lý khí an thần", bt: "Tiêu dao tán gia Dâm dương hoắc, Ba kích", tpbt: ["Sài hồ 10g", "Đương quy 12g", "Bạch thược 12g", "Bạch truật 12g", "Phục linh 12g", "Dâm dương hoắc 12g", "Ba kích 12g"] },
"NK_065": { stt: 212, hc: "Suy giảm ham muốn do Tâm Tỳ lưỡng hư", phanloai: ["Nam Khoa", "Bình", "Hư", "Tâm Tỳ hư"], tc: ["Không nghĩ tới chuyện chăn gối do kiệt sức", "Hồi hộp hay quên, gầy còm", "Sắc mặt nhợt nhạt, tiêu lỏng", "Mạch tế nhược"], pdt: "Bổ ích tâm tỳ, dưỡng huyết khởi dâm", bt: "Quy tỳ thang gia Ba kích, Nhục thung dung", tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Hoàng kỳ 16g", "Đương quy 12g", "Long nhãn 12g", "Ba kích 12g", "Nhục thung dung 12g"] },
"NK_066": { stt: 213, hc: "Suy giảm ham muốn do Thận âm hư hỏa suy", phanloai: ["Nam Khoa", "Nhiệt", "Hư", "Âm hư"], tc: ["Chán chăn gối kèm người khô gầy", "Triều nhiệt đạo hãn, tai ù", "Miệng khô họng rát", "Mạch tế sác"], pdt: "Tư bổ thận âm, ích tinh trợ dương", bt: "Tả quy hoàn gia Dâm dương hoắc", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Kỷ tử 12g", "Thỏ ty tử 12g", "Dâm dương hoắc 12g", "Ngưu tất 12g"] },

"NK_067": { stt: 214, hc: "Không xuất tinh do Can uất khí trệ kinh lạc", phanloai: ["Nam Khoa", "Bình", "Thực", "Can khí uất"], tc: ["Quan hệ thời gian dài không thể xuất tinh", "Ngực sườn trướng đau, tinh thần ức chế", "Mạch huyền"], pdt: "Sơ can giải uất, thông kinh phát tinh", bt: "Sài hồ sơ can tán gia Vương bất lưu hành, Xuyên sơn giáp", tpbt: ["Sài hồ 10g", "Bạch thược 12g", "Chỉ xác 8g", "Xuyên khung 10g", "Vương bất lưu hành 12g", "Xuyên sơn giáp 6g"] },
"NK_068": { stt: 215, hc: "Không xuất tinh do Thận tinh khuy tổn", phanloai: ["Nam Khoa", "Bình", "Hư", "Thận tinh bất túc"], tc: ["Không xuất tinh được do không có tinh dạt", "Thắt lưng yếu mềm, tai ù điếc", "Mệt mỏi toàn thân", "Mạch trầm tế vô lực"], pdt: "Tư bổ thận tinh, ích tủy sinh tinh", bt: "Tả quy hoàn gia Tử hà xe, Lộc giác giao", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Kỷ tử 12g", "Thỏ ty tử 12g", "Tử hà xe 8g", "Lộc giác giao 10g"] },
"NK_069": { stt: 216, hc: "Không xuất tinh do Thấp nhiệt trở trệ tinh cung", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Thấp nhiệt"], tc: ["Quan hệ không xuất tinh kèm đau buốt bẹn", "Tiểu dắt buốt, bì bìu ẩm hôi", "Rêu vàng nhớt", "Mạch nhu sác"], pdt: "Thanh nhiệt lợi thấp, thông tinh chỉ thống", bt: "Bát chính tán gia Vương bất lưu hành, Ngưu tất", tpbt: ["Xa tiền tử 12g", "Mộc thông 8g", "Cù mạch 10g", "Biển súc 10g", "Chi tử 12g", "Vương bất lưu hành 12g", "Ngưu tất 12g"] },
"NK_070": { stt: 217, hc: "Không xuất tinh do Huyết ứ bế tắc tinh đường", phanloai: ["Nam Khoa", "Bình", "Thực", "Huyết ứ"], tc: ["Không xuất tinh kèm đau nhói vùng tầng sinh môn", "Lưỡi tím sẫm điểm ứ huyết", "Mạch sáp"], pdt: "Hoạt huyết hóa ứ, thông tinh khai khiếu", bt: "Thông khiếu trục ứ thang gia Vương bất lưu hành", tpbt: ["Xuyên khung 10g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Thạch xương bồ 10g", "Vương bất lưu hành 12g"] },

"NK_071": { stt: 218, hc: "Tinh hoàn teo do Thận tinh hư suy", phanloai: ["Nam Khoa", "Bình", "Hư suy", "Thận tinh bất túc"], tc: ["Hai tinh hoàn teo nhỏ, mềm nhão", "Mất ham muốn, không có con", "Tóc bạc sớm, tai ù", "Mạch trầm tế dời"], pdt: "Bổ thận điền tinh, dưỡng tủy bổ nang", bt: "Tả quy hoàn gia Lộc nhung, Tử hà xe, Cốt toái bổ", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Lộc nhung 4g", "Tử hà xe 8g", "Cốt toái bổ 12g", "Kỷ tử 12g"] },
"NK_072": { stt: 219, hc: "Tinh hoàn teo do Huyết ứ bế tắc kinh mạch", phanloai: ["Nam Khoa", "Bình", "Thực", "Huyết ứ"], tc: ["Tinh hoàn teo nhỏ sau chấn thương hoặc biến chứng quai bị", "Sờ vào có cặn cứng đau", "Mạch sáp"], pdt: "Hoạt huyết hóa ứ, thông kinh tiêu kết", bt: "Đào hồng tứ vật thang gia Xuyên sơn giáp, Ngưu tất", tpbt: ["Đào nhân 12g", "Hồng hoa 8g", "Đương quy 12g", "Xuyên khung 10g", "Xích thược 12g", "Xuyên sơn giáp 6g", "Ngưu tất 12g"] },

"NK_073": { stt: 220, hc: "Trĩ nang (Mụn mủ bìu) do Hỏa độc uẩn kết", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Hỏa độc"], tc: ["Bì bìu nổi mụn nhọt sưng nóng đỏ đau dữ dội", "Nhanh hóa mủ vỡ chảy dịch hôi", "Sốt cao", "Mạch sác hữu lực"], pdt: "Thanh nhiệt giải độc, tiêu thũng bài nùng", bt: "Ngũ vị tiêu độc ẩm gia Hoàng liên, Cát cánh", tpbt: ["Kim ngân hoa 15g", "Cúc hoa 10g", "Bồ công anh 15g", "Tử hoa địa đinh 12g", "Hoàng liên 8g", "Cát cánh 8g"] },

"NK_074": { stt: 221, hc: "Tinh thanh (Tinh dịch loãng như nước) do Thận dương hư", phanloai: ["Nam Khoa", "Hàn", "Hư suy", "Thận dương hư"], tc: ["Tinh dịch trong loãng không dính", "Sợ lạnh, tay chân lạnh ngắt", "Đau lưng mỏi gối, liệt dương", "Mạch trầm trì"], pdt: "Ôn bổ thận dương, ích tinh đặc tinh", bt: "Hữu quy hoàn gia Bổ cốt chỉ, Thỏ ty tử", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Nhục quế 6g", "Phụ tử chế 8g", "Bổ cốt chỉ 12g", "Thỏ ty tử 12g"] },
"NK_075": { stt: 222, hc: "Tinh lạnh do Mệnh môn hỏa suy", phanloai: ["Nam Khoa", "Hàn", "Hư suy", "Mệnh môn hỏa suy"], tc: ["Bì bìu và tinh dịch lạnh ngắt khi phóng tinh", "Liệt dương, suy giảm ham muốn", "Sợ lạnh, ngũ canh tả", "Mạch trầm tế vi"], pdt: "Ôn bổ mệnh môn hỏa, trợ dương ích tinh", bt: "Hữu quy hoàn hợp Tứ nghịch thang", tpbt: ["Thục địa 16g", "Nhục quế 6g", "Phụ tử chế 8g", "Can khương 8g", "Sơn thù nhục 8g", "Đỗ trọng 12g", "Chích cam thảo 6g"] },

"NK_076": { stt: 223, hc: "Tinh đặc khó hóa lỏng do Âm hư hỏa vượng", phanloai: ["Nam Khoa", "Nhiệt", "Hư", "Âm hư hỏa vượng"], tc: ["Tinh dịch ra đông đặc dạng vón cục lâu hóa lỏng", "Lòng bàn tay chân nóng, triều nhiệt", "Mỏi lưng gối, lưỡi đỏ", "Mạch tế sác"], pdt: "Tư âm giáng hỏa, hóa đàm sinh tân", bt: "Tri bá địa hoàng hoàn gia Sa sâm, Mạch môn, Sơn tra", tpbt: ["Thục địa 16g", "Tri mẫu 12g", "Hoàng bá 12g", "Sơn thù nhục 8g", "Sa sâm 12g", "Mạch môn 12g", "Sơn tra 10g"] },
"NK_077": { stt: 224, hc: "Tinh đặc khó hóa lỏng do Đàm thấp uẩn kết", phanloai: ["Nam Khoa", "Bình", "Thực", "Đàm thấp"], tc: ["Tinh dịch dính quánh kéo sợi khó lỏng", "Thân thể mệt mỏi béo bệu", "Rêu dầy nhớt", "Mạch nhu hoạt"], pdt: "Kiện tỳ mẫn thấp, hóa đàm thông tinh", bt: "Nhị trần thang gia Sơn tra, Thần khúc, Trạch tả", tpbt: ["Bán hạ 10g", "Trần bì 6g", "Phục linh 12g", "Sơn tra 10g", "Thần khúc 10g", "Trạch tả 12g", "Cam thảo 6g"] },

"NK_078": { stt: 225, hc: "Mỏi gối đau lưng sau quan hệ do Thận khí hư", phanloai: ["Nam Khoa", "Bình", "Hư", "Thận khí hư"], tc: ["Thắt lưng gối đau kiệt sức sau mỗi lần xuất tinh", "Tai ù, hoa mắt, hụt hơi", "Mệt mỏi kéo dài 2-3 ngày", "Mạch trầm nhược"], pdt: "Bổ thận ích khí, cố bản bồi nguyên", bt: "Thận khí hoàn gia Cẩu tích, Đỗ trọng, Tục đoạn", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Đỗ trọng 12g", "Cẩu tích 12g", "Tục đoạn 12g", "Phục linh 12g"] },
"NK_079": { stt: 226, hc: "Mệt mỏi kiệt sức sau quan hệ do Khí huyết lưỡng hư", phanloai: ["Nam Khoa", "Bình", "Hư", "Khí huyết hư"], tc: ["Sắc mặt bệch nhợt, thở xối xả sau quan hệ", "Hồi hộp, vã mồ hôi đầm đìa", "Tay chân bủn rủn", "Mạch tế nhược vô lực"], pdt: "Đại bổ khí huyết, dưỡng tâm an thần", bt: "Thập toàn đại bổ thang", tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Cam thảo 6g", "Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g", "Hoàng kỳ 16g", "Nhục quế 4g"] },

"NK_080": { stt: 227, hc: "Đau rát quy đầu khi quan hệ do Can kinh thấp nhiệt", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Thấp nhiệt"], tc: ["Quy đầu nóng rát đau nhói khi tiếp xúc", "Bì bìu ẩm ngứa hôi", "Tiểu đỏ buốt", "Mạch nhu sác"], pdt: "Thanh nhiệt lợi thấp, sơ can chỉ thống", bt: "Long đởm tả can thang gia Khổ sâm", tpbt: ["Long đởm thảo 12g", "Chi tử 12g", "Hoàng cầm 12g", "Trạch tả 12g", "Khổ sâm 10g", "Mộc thông 8g", "Sài hồ 8g"] },
"NK_081": { stt: 228, hc: "Đau buốt bẹn khi xuất tinh do Huyết ứ tinh đường", phanloai: ["Nam Khoa", "Bình", "Thực", "Huyết ứ"], tc: ["Đau quặn dữ dội bẹn mỗi lần phóng tinh", "Lưỡi tím sẫm", "Mạch sáp"], pdt: "Hoạt huyết hóa ứ, thông lạc chỉ thống", bt: "Thân thống trục ứ thang gia Ngưu tất", tpbt: ["Đào nhân 12g", "Hồng hoa 8g", "Đương quy 12g", "Xuyên khung 10g", "Ngưu tất 12g", "Hương phụ 10g", "Địa long 10g"] },

"NK_082": { stt: 229, hc: "Thao tinh (Tinh dịch tự chảy khi đi tiêu) do Thận khí bất cố", phanloai: ["Nam Khoa", "Bình", "Hư", "Thận khí hư"], tc: ["Rỉ tinh dịch trắng đục khi rặn đại tiện", "Thắt lưng mỏi yếu, tai ù", "Tiểu rỉ rả", "Mạch trầm nhược"], pdt: "Bổ thận cố tinh, sáp niệu", bt: "Kim tỏa cố tinh hoàn gia Bổ cốt chỉ", tpbt: ["Sa uyển tử 12g", "Liên tu 8g", "Khiếm thực 12g", "Long cốt 15g", "Mẫu lệ 15g", "Bổ cốt chỉ 12g"] },
"NK_083": { stt: 230, hc: "Thao tinh do Trung khí hạ hãm", phanloai: ["Nam Khoa", "Bình", "Hư", "Trung khí hạ hãm"], tc: ["Rỉ tinh dịch khi rặn tiêu kèm cảm giác sa trực tràng", "Mệt mỏi hụt hơi, bụng nặng", "Mạch hoãn nhược"], pdt: "Bổ trung ích khí, thăng đề cố tinh", bt: "Bổ trung ích khí thang gia Khiếm thực, Sa uyển tử", tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Bạch truật 12g", "Thăng ma 6g", "Sài hồ 6g", "Khiếm thực 12g", "Sa uyển tử 12g"] },

"NK_084": { stt: 231, hc: "Viêm mào tinh hoàn mạn do Âm hư hỏa vượng", phanloai: ["Nam Khoa", "Nhiệt", "Hư thực thác tạp", "Âm hư hỏa vượng"], tc: ["Mào tinh hoàn sưng cứng đau âm ỉ dai dẳng", "Triều nhiệt đạo hãn, mỏi lưng", "Lưỡi đỏ ít rêu", "Mạch tế sác"], pdt: "Tư âm giáng hỏa, tán kết tiêu thũng", bt: "Tri bá địa hoàng hoàn gia Thổ phục linh, Cốt toái bổ", tpbt: ["Thục địa 16g", "Tri mẫu 12g", "Hoàng bá 12g", "Sơn thù nhục 8g", "Thổ phục linh 15g", "Cốt toái bổ 12g"] },
"NK_085": { stt: 232, hc: "Viêm mào tinh hoàn mạn do Khí trệ huyết ứ", phanloai: ["Nam Khoa", "Bình", "Thực", "Khí trệ huyết ứ"], tc: ["Mào tinh hoàn có cục cứng cố định đau cự án", "Sắc mặt u ám, lưỡi tím", "Mạch sáp"], pdt: "Hoạt huyết hóa ứ, nhuyễn kiên tán kết", bt: "Đào hồng tứ vật thang gia Tam thất, Mộc qua", tpbt: ["Đào nhân 12g", "Hồng hoa 8g", "Đương quy 12g", "Xuyên khung 10g", "Tam thất 6g", "Mộc qua 10g", "Ngưu tất 12g"] },

"NK_086": { stt: 233, hc: "Viêm túi tinh do Thấp nhiệt lương huyết", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Thấp nhiệt huyết nhiệt"], tc: ["Xuất tinh ra máu đỏ sẫm kèm đau buốt bẹn", "Sốt nhẹ, tiểu buốt dắt", "Rêu dầy vàng nhớt", "Mạch nhu sác"], pdt: "Thanh nhiệt lợi thấp, lương huyết chỉ huyết", bt: "Tiểu kế ẩm gia Hoàng bá, Tri mẫu", tpbt: ["Tiểu kế 15g", "Sinh địa 16g", "Mộc thông 8g", "Hoạt thạch 15g", "Hoàng bá 12g", "Tri mẫu 12g", "Cam thảo 6g"] },
"NK_087": { stt: 234, hc: "Viêm túi tinh do Can hỏa bốc trào", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Can hỏa"], tc: ["Xuất tinh ra máu kèm đau rát bẹn dữ dội", "Mắt đỏ, miệng đắng, dễ cáu giận", "Mạch huyền sác"], pdt: "Thanh can tả hỏa, lương huyết chỉ huyết", bt: "Long đởm tả can thang gia Trắc bách diệp, Tam thất", tpbt: ["Long đởm thảo 12g", "Chi tử 12g", "Hoàng cầm 12g", "Trắc bách diệp 12g", "Tam thất 6g", "Sài hồ 8g"] },

"NK_088": { stt: 235, hc: "Giãn tĩnh mạch thừng tinh do Trung khí hạ hãm", phanloai: ["Nam Khoa", "Bình", "Hư", "Trung khí hạ hãm"], tc: ["Bì bìu bên trái sa thõng nổi búi ngoằn ngoèo", "Đứng lâu trướng đau nặng tức, nằm nghỉ bớt", "Mệt mỏi hụt hơi", "Mạch hoãn nhược"], pdt: "Bổ khí thăng dương, hoạt huyết thông lạc", bt: "Bổ trung ích khí thang gia Ngưu tất, Đương quy vĩ", tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Bạch truật 12g", "Thăng ma 6g", "Sài hồ 6g", "Ngưu tất 12g", "Đương quy vĩ 12g"] },
"NK_089": { stt: 236, hc: "Giãn tĩnh mạch thừng tinh do Khí trệ huyết ứ", phanloai: ["Nam Khoa", "Bình", "Thực", "Khí trệ huyết ứ"], tc: ["Búi tĩnh mạch bìu sưng to bầm tím đau nhói", "Ấn vào đau tăng cố định", "Lưỡi tím sẫm", "Mạch sáp"], pdt: "Hành khí hoạt huyết, tiêu thũng chỉ thống", bt: "Thân thống trục ứ thang gia Ngưu tất, Vương bất lưu hành", tpbt: ["Đào nhân 12g", "Hồng hoa 8g", "Đương quy 12g", "Xuyên khung 10g", "Ngưu tất 12g", "Vương bất lưu hành 12g"] },

"NK_090": { stt: 237, hc: "Dương quy đầu mụn nước do Tỳ Vị thấp nhiệt", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Thấp nhiệt"], tc: ["Quy đầu nổi mụn nước nhỏ liti ngứa rát", "Vỡ ra chảy dịch dính hôi", "Rêu dầy vàng nhớt", "Mạch nhu sác"], pdt: "Thanh nhiệt lợi thấp, giải độc chỉ ngứa", bt: "Tam nhân thang gia Khổ sâm, Hoàng bá", tpbt: ["Hạnh nhân 10g", "Ý dĩ 12g", "Bán hạ 10g", "Khổ sâm 10g", "Hoàng bá 12g", "Cam thảo 6g"] },
"NK_091": { stt: 238, hc: "Dương vật mụn nhọt độc do Nhiệt độc hãm hạ tiêu", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Hỏa độc"], tc: ["Thân dương vật nổi mủ sưng to nóng đỏ", "Đau dữ dội, sốt cao", "Tiểu đỏ buốt", "Mạch sác hữu lực"], pdt: "Thanh nhiệt giải độc, tiêu thũng bài nùng", bt: "Hoàng liên giải độc thang gia Ngũ vị tiêu độc ẩm", tpbt: ["Hoàng liên 8g", "Hoàng cầm 12g", "Hoàng bá 12g", "Chi tử 12g", "Kim ngân hoa 15g", "Bồ công anh 15g"] },

"NK_092": { stt: 239, hc: "Bì bìu chàm hóa (Eczema bìu) do Thấp nhiệt uẩn kết", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Thấp nhiệt"], tc: ["Da bìu đỏ nổi mụn nước chảy dịch dính hôi", "Ngứa ngáy dữ dội cuồng loạn", "Mạch nhu sác"], pdt: "Thanh nhiệt táo thấp, khu phong chỉ ngứa", bt: "Long đởm tả can thang gia Khổ sâm, Địa phụ tử", tpbt: ["Long đởm thảo 12g", "Chi tử 12g", "Hoàng cầm 12g", "Khổ sâm 10g", "Địa phụ tử 10g", "Trạch tả 12g"] },
"NK_093": { stt: 240, hc: "Bì bìu khô nẻ do Huyết hư phong táo", phanloai: ["Nam Khoa", "Bình", "Hư", "Huyết hư phong táo"], tc: ["Da bìu khô nẻ dày sừng, tróc vảy mỏng", "Ngứa rát kéo dài mạn tính", "Sắc mặt nhợt", "Mạch tế sáp"], pdt: "Dưỡng huyết nhuận táo, khu phong chỉ ngứa", bt: "Dưỡng tiêu phong tán gia Hà thủ ô, Đương quy", tpbt: ["Đương quy 12g", "Thục địa 16g", "Bạch thược 12g", "Phòng phong 10g", "Hà thủ ô 12g", "Cam thảo 6g"] },

"NK_094": { stt: 241, hc: "Di tinh do Phế khí hư thất thu", phanloai: ["Nam Khoa", "Bình", "Hư", "Phế khí hư"], tc: ["Di tinh mộng tinh kèm ho hắng hụt hơi", "Tự hãn, dễ cảm mạo", "Mệt mỏi ngại nói", "Mạch hư nhược"], pdt: "Bổ phế ích khí, cố tinh sáp niệu", bt: "Bổ phế thang gia Kim tỏa cố tinh hoàn", tpbt: ["Nhân sâm 10g", "Hoàng kỳ 16g", "Thục địa 16g", "Ngũ vị tử 6g", "Sa uyển tử 12g", "Khiếm thực 12g", "Long cốt 15g"] },
"NK_095": { stt: 242, hc: "Di tinh do Tâm Hỏa xí thịnh", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Tâm hỏa"], tc: ["Đêm ngủ thấy lửa nóng rồi mộng tinh", "Tâm phiền bứt rứt, loét miệng lưỡi", "Tiểu đỏ buốt", "Mạch sác hữu lực"], pdt: "Thanh tâm tả hỏa, an thần cố tinh", bt: "Đạo xích tán gia Hoàng liên, Mẫu lệ", tpbt: ["Sinh địa 16g", "Mộc thông 8g", "Trúc diệp 8g", "Hoàng liên 8g", "Mẫu lệ 15g", "Cam thảo 6g"] },

"NK_096": { stt: 243, hc: "Xuất tinh đau do Khí trệ huyết ứ tầng sinh môn", phanloai: ["Nam Khoa", "Bình", "Thực", "Khí trệ huyết ứ"], tc: ["Đau nhói vùng tầng sinh môn lan ra hậu môn khi xuất tinh", "Lưỡi tím điểm ứ huyết", "Mạch sáp"], pdt: "Hành khí hoạt huyết, thông lạc chỉ thống", bt: "Cách hạ trục ứ thang gia Ngưu tất", tpbt: ["Đương quy 12g", "Xuyên khung 10g", "Đào nhân 12g", "Hồng hoa 8g", "Chỉ xác 8g", "Hương phụ 10g", "Ngưu tất 12g"] },
"NK_097": { stt: 244, hc: "Xuất tinh đau do Thấp nhiệt uẩn kết tinh đạo", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Thấp nhiệt"], tc: ["Đau rát buốt dọc niệu đạo và bẹn khi phóng tinh", "Tiểu dắt đục", "Rêu vàng nhớt", "Mạch nhu sác"], pdt: "Thanh nhiệt lợi thấp, thông lâm chỉ thống", bt: "Bát chính tán gia Hoàng bá", tpbt: ["Xa tiền tử 12g", "Mộc thông 8g", "Cù mạch 10g", "Biển súc 10g", "Chi tử 12g", "Hoàng bá 12g", "Cam thảo 6g"] },

"NK_098": { stt: 245, hc: "Suy giảm sinh lý tuổi già do Thận tinh kiệt", phanloai: ["Nam Khoa", "Bình", "Hư suy", "Thận tinh bất túc"], tc: ["Mất hoàn toàn ham muốn và khả năng cương ở người già", "Chân gối yếu mềm, tai điếc răng lung lay", "Trí nhớ sa sút", "Mạch trầm tế vô lực"], pdt: "Tư bổ thận tinh, đại bổ nguyên khí", bt: "Tả quy hoàn gia Lộc nhung, Nhục thung dung, Nhân sâm", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Kỷ tử 12g", "Lộc nhung 4g", "Nhục thung dung 12g", "Nhân sâm 10g"] },
"NK_099": { stt: 246, hc: "Suy giảm sinh lý tuổi già do Âm dương lưỡng hư", phanloai: ["Nam Khoa", "Hàn nhiệt thác tạp", "Hư suy", "Âm dương lưỡng hư"], tc: ["Vừa sợ lạnh tay chân lạnh lại vừa triều nhiệt", "Mệt mỏi kiệt sức, liệt dương", "Tiểu đêm nhiều lần", "Mạch vi tế"], pdt: "Âm dương song bổ, tư thận tráng dương", bt: "Bát vị hoàn gia Kỷ tử, Thỏ ty tử, Bổ cốt chỉ", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Nhục quế 6g", "Phụ tử chế 8g", "Kỷ tử 12g", "Thỏ ty tử 12g", "Bổ cốt chỉ 12g"] },

"NK_100": { stt: 247, hc: "Cương yếu (Lãnh dâm) do Tỳ Thận hỏa suy", phanloai: ["Nam Khoa", "Hàn", "Hư suy", "Tỳ Thận hỏa suy"], tc: ["Dương vật hơi cương rồi dịu ngay, lạnh nhão", "Ăn kém tiêu chảy phân sống", "Tay chân lạnh ngắt, sợ lạnh", "Mạch trầm tế dời"], pdt: "Ôn bổ tỳ thận, tráng dương khởi nuy", bt: "Tứ thần hoàn hợp Hữu quy hoàn", tpbt: ["Bổ cốt chỉ 12g", "Nhục đậu khấu 8g", "Ngô thù du 6g", "Thục địa 16g", "Nhục quế 6g", "Phụ tử chế 8g", "Dâm dương hoắc 12g"] },

"NK_101": { stt: 248, hc: "Liệt dương do Thận khí bất cố", phanloai: ["Nam Khoa", "Bình", "Hư", "Thận khí hư"], tc: ["Dương vật không thể cương cứng, di tinh rỉ rả", "Thắt lưng đau mỏi, tai ù", "Sắc mặt nhợt nhạt", "Mạch trầm nhược"], pdt: "Bổ thận ích khí, tráng dương cố tinh", bt: "Kim tỏa cố tinh hoàn hợp Hữu quy hoàn", tpbt: ["Sa uyển tử 12g", "Khiếm thực 12g", "Thục địa 16g", "Sơn thù nhục 8g", "Dâm dương hoắc 12g", "Ba kích 12g"] },
"NK_102": { stt: 249, hc: "Liệt dương do Tâm Thận bất giao", phanloai: ["Nam Khoa", "Nhiệt", "Hư thực thác tạp", "Tâm Thận bất giao"], tc: ["Khó cương cứng kèm tâm phiền mất ngủ", "Hồi hộp hoảng hốt, triều nhiệt", "Lưng mỏi tai ù", "Mạch tế sác"], pdt: "Tư âm giáng hỏa, thanh tâm tráng dương", bt: "Giao thái hoàn hợp Tri bá địa hoàng hoàn gia Dâm dương hoắc", tpbt: ["Hoàng liên 8g", "Nhục quế 4g", "Thục địa 16g", "Tri mẫu 12g", "Hoàng bá 12g", "Dâm dương hoắc 12g"] },
"NK_103": { stt: 250, hc: "Liệt dương do Tỳ hư thấp trệ", phanloai: ["Nam Khoa", "Bình", "Hư thực thác tạp", "Tỳ hư thấp trệ"], tc: ["Liệt dương ở người ăn kém trướng bụng", "Thân thể mỏi nặng, đại tiện nhão lỏng", "Mạch nhu hoãn"], pdt: "Kiện tỳ mẫn thấp, thông lạc tráng dương", bt: "Sâm linh bạch truật tán gia Ba kích, Dâm dương hoắc", tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Hoài sơn 12g", "Ý dĩ 12g", "Ba kích 12g", "Dâm dương hoắc 12g"] },
"NK_104": { stt: 251, hc: "Liệt dương do Phong hàn xâm nhập can kinh", phanloai: ["Nam Khoa", "Hàn", "Thực", "Phong hàn"], tc: ["Liệt dương đột ngột sau khi nhiễm lạnh bẹn", "Bì bìu lạnh ngắt co rút đau âm ỉ", "Mạch phù khẩn"], pdt: "Khu phong tán hàn, noãn can tráng dương", bt: "Noãn can tiễn gia Dâm dương hoắc, Tế tân", tpbt: ["Tiểu hồi hương 8g", "Nhục quế 6g", "Đương quy 12g", "Ô dược 10g", "Tế tân 3g", "Dâm dương hoắc 12g"] },
"NK_105": { stt: 252, hc: "Liệt dương do Can hỏa xí thịnh", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Can hỏa"], tc: ["Dương vật hoàn toàn không cương do giận dữ kéo dài", "Mắt đỏ, miệng đắng, đau đầu", "Dễ cáu gắt, tiểu đỏ", "Mạch huyền sác hữu lực"], pdt: "Thanh can tả hỏa, thư gân thông lạc", bt: "Long đởm tả can thang gia Ba kích", tpbt: ["Long đởm thảo 12g", "Chi tử 12g", "Hoàng cầm 12g", "Trạch tả 12g", "Sài hồ 8g", "Ba kích 12g"] },
"NK_106": { stt: 253, hc: "Liệt dương do Khí huyết lưỡng hư suy nhược", phanloai: ["Nam Khoa", "Bình", "Hư", "Khí huyết hư"], tc: ["Liệt dương sau khi ốm nặng kéo dài", "Thân thể gầy gộc, mệt mỏi hụt hơi", "Sắc mặt bệch tái", "Mạch tế nhược vô lực"], pdt: "Thập toàn đại bổ, tráng dương khởi nuy", bt: "Thập toàn đại bổ thang gia Ba kích, Dâm dương hoắc", tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Cam thảo 6g", "Thục địa 16g", "Đương quy 12g", "Ba kích 12g", "Dâm dương hoắc 12g"] },
"NK_107": { stt: 254, hc: "Liệt dương do Bàng quang khí hóa thất thường", phanloai: ["Nam Khoa", "Bình", "Hư thực thác tạp", "Khí hóa thất thường"], tc: ["Liệt dương kèm đi tiểu rỉ rả, khó tiểu", "Bụng dưới trướng đầy", "Mạch trầm huyền"], pdt: "Hóa khí lợi thủy, bổ thận tráng dương", bt: "Ngũ linh tán hợp Hữu quy hoàn", tpbt: ["Bạch truật 12g", "Phục linh 12g", "Trạch tả 12g", "Trư linh 10g", "Thục địa 16g", "Phụ tử chế 8g", "Nhục quế 6g"] },

"NK_108": { stt: 255, hc: "Xuất tinh sớm do Thận âm hư phế tân kiệt", phanloai: ["Nam Khoa", "Nhiệt", "Hư", "Âm hư"], tc: ["Xuất tinh sớm kèm ho khan kéo dài", "Họng khô rát, triều nhiệt đạo hãn", "Thắt lưng mỏi gối", "Mạch tế sác"], pdt: "Tư âm nhuận phế, tư bổ thận thủy cố tinh", bt: "Bách hợp cố kim thang gia Sa uyển tử, Khiếm thực", tpbt: ["Bách hợp 12g", "Sinh địa 16g", "Thục địa 16g", "Mạch môn 12g", "Sa uyển tử 12g", "Khiếm thực 12g"] },
"NK_109": { stt: 256, hc: "Xuất tinh sớm do Đàm nhiệt nhiễu tâm", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Đàm nhiệt"], tc: ["Vừa tiếp xúc đã xuất tinh kèm tâm phiền mất ngủ", "Cổ họng vướng đờm dính vàng", "Rêu dầy vàng nhớt", "Mạch hoạt sác"], pdt: "Thanh nhiệt hóa đàm, an thần cố tinh", bt: "Hoàng liên ôn đởm thang gia Kim tỏa cố tinh hoàn", tpbt: ["Hoàng liên 8g", "Bán hạ 10g", "Trần bì 6g", "Phục linh 12g", "Trúc nhự 8g", "Sa uyển tử 12g", "Khiếm thực 12g"] },
"NK_110": { stt: 257, hc: "Xuất tinh sớm do Khí trệ huyết ứ kinh lạc bẹn", phanloai: ["Nam Khoa", "Bình", "Thực", "Khí trệ huyết ứ"], tc: ["Xuất tinh sớm kèm đau nhói vùng bẹn", "Lưỡi tím sẫm có điểm ứ huyết", "Mạch sáp"], pdt: "Hành khí hoạt huyết, cố tinh chỉ tả", bt: "Cách hạ trục ứ thang gia Sa uyển tử, Long cốt", tpbt: ["Đương quy 12g", "Xuyên khung 10g", "Đào nhân 12g", "Hồng hoa 8g", "Chỉ xác 8g", "Sa uyển tử 12g", "Long cốt 15g"] },
"NK_111": { stt: 258, hc: "Xuất tinh sớm do Tỳ hư không nhiếp tinh", phanloai: ["Nam Khoa", "Bình", "Hư", "Tỳ hư"], tc: ["Xuất tinh sớm ở người ăn uống kém tiêu", "Bụng trướng, phân lỏng nhão", "Mệt mỏi hụt hơi", "Mạch hoãn nhược"], pdt: "Kiện tỳ ích khí, nhiếp tinh cố sáp", bt: "Sâm linh bạch truật tán gia Sa uyển tử, Khiếm thực", tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Hoài sơn 12g", "Liên nhục 12g", "Sa uyển tử 12g", "Khiếm thực 12g"] },

"NK_112": { stt: 259, hc: "Mộng tinh do Can hỏa quấy rối tâm thần", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Can hỏa"], tc: ["Đêm ngủ mơ thấy quan hệ tình dục rồi xuất tinh", "Mặt đỏ, miệng đắng, dễ giận dữ", "Tiểu đỏ đại tiện táo", "Mạch huyền sác"], pdt: "Thanh can tả hỏa, trấn tĩnh an thần cố tinh", bt: "Long đởm tả can thang gia Toan táo nhân, Mẫu lệ", tpbt: ["Long đởm thảo 12g", "Chi tử 12g", "Hoàng cầm 12g", "Trạch tả 12g", "Sài hồ 8g", "Toan táo nhân 12g", "Mẫu lệ 15g"] },
"NK_113": { stt: 260, hc: "Mộng tinh do Vị thực nhiệt hóa hỏa", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Vị hỏa"], tc: ["Mộng tinh sau khi ăn uống đồ cay nóng no nê", "Miệng hôi, chân răng sưng đau", "Bụng trướng, táo bón", "Mạch hoạt sác"], pdt: "Thanh vị tả hỏa, giáng nghịch cố tinh", bt: "Thanh vị tán gia Sa uyển tử, Long cốt", tpbt: ["Hoàng liên 8g", "Thăng ma 6g", "Sinh địa 16g", "Đan bì 8g", "Đương quy 12g", "Sa uyển tử 12g", "Long cốt 15g"] },
"NK_114": { stt: 261, hc: "Mộng tinh do Phế Thận âm hư", phanloai: ["Nam Khoa", "Nhiệt", "Hư", "Âm hư"], tc: ["Mộng tinh liên tục kèm ho khan triều nhiệt", "Gò má đỏ, vã mồ hôi trộm", "Lưng mỏi gối yếu", "Mạch tế sác"], pdt: "Tư âm nhuận phế, tư thận cố tinh", bt: "Bách hợp cố kim thang gia Long cốt, Mẫu lệ", tpbt: ["Bách hợp 12g", "Sinh địa 16g", "Thục địa 16g", "Mạch môn 12g", "Huyền sâm 12g", "Long cốt 15g", "Mẫu lệ 15g"] },

"NK_115": { stt: 262, hc: "Hoạt tinh do Mệnh môn hỏa suy kiệt", phanloai: ["Nam Khoa", "Hàn", "Hư suy", "Mệnh môn hỏa suy"], tc: ["Tinh dịch rỉ chảy liên tục cả ngày lẫn đêm", "Chân tay lạnh ngắt quá gối, sợ lạnh dữ dội", "Sắc mặt bệch tái", "Mạch vi vi muốn tuyệt"], pdt: "Hồi dương cứu nghịch, ôn bổ mệnh môn cố tinh", bt: "Hữu quy hoàn hợp Tứ nghịch thang gia Củng đái hoàn", tpbt: ["Thục địa 16g", "Nhục quế 6g", "Phụ tử chế 10g", "Can khương 8g", "Sơn thù nhục 8g", "Bổ cốt chỉ 12g", "Tang phiêu tiêu 12g"] },
"NK_116": { stt: 263, hc: "Hoạt tinh do Tỳ Thận khí hư bất cố", phanloai: ["Nam Khoa", "Bình", "Hư", "Tỳ Thận khí hư"], tc: ["Tinh dịch tự rỉ ra khi vận động nhẹ", "Bụng trướng đầy, tiêu chảy dai dẳng", "Mệt mỏi hụt hơi", "Mạch trầm nhược vô lực"], pdt: "Song bổ tỳ thận, ích khí cố tinh", bt: "Sâm linh bạch truật tán hợp Kim tỏa cố tinh hoàn", tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Hoài sơn 12g", "Sa uyển tử 12g", "Khiếm thực 12g", "Long cốt 15g"] },

"NK_117": { stt: 264, hc: "Huyết tinh do Hỏa độc nội thịnh tinh cung", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Hỏa độc"], tc: ["Xuất tinh ra máu đỏ tươi số lượng nhiều", "Bụng dưới và bẹn sưng nóng đau dữ dội", "Sốt cao, tiểu đỏ buốt", "Mạch sác hữu lực"], pdt: "Thanh nhiệt giải độc, lương huyết chỉ huyết", bt: "Hoàng liên giải độc thang gia Tam thất, Bồ hoàng", tpbt: ["Hoàng liên 8g", "Hoàng cầm 12g", "Hoàng bá 12g", "Chi tử 12g", "Tam thất 6g", "Bồ hoàng 10g"] },
"NK_118": { stt: 265, hc: "Huyết tinh do Khí trệ huyết ứ lâu ngày", phanloai: ["Nam Khoa", "Bình", "Thực", "Khí trệ huyết ứ"], tc: ["Xuất tinh ra máu màu tím đen dai dẳng nhiều tháng", "Bẹn đau nhói cố định", "Lưỡi tím sẫm", "Mạch sáp"], pdt: "Hành khí hoạt huyết, hóa ứ chỉ huyết", bt: "Huyết phủ trục ứ thang gia Tam thất, Ngưu tất", tpbt: ["Đương quy 12g", "Sinh địa 16g", "Đào nhân 12g", "Hồng hoa 8g", "Chỉ xác 8g", "Tam thất 6g", "Ngưu tất 12g"] },

"NK_119": { stt: 266, hc: "Vô sinh nam do Thận âm hư tinh khô", phanloai: ["Nam Khoa", "Nhiệt", "Hư", "Âm hư tinh khô"], tc: ["Không có tinh trùng hoặc tinh trùng chết 100%", "Lòng bàn tay chân nóng, triều nhiệt đạo hãn", "Mỏi lưng gối, tai ù", "Mạch tế sác"], pdt: "Tư bổ thận âm, sinh tân điền tinh", bt: "Lục vị địa hoàng hoàn gia Tử hà xe, Kỷ tử, Mạch môn", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Tử hà xe 8g", "Kỷ tử 12g", "Mạch môn 12g"] },
"NK_120": { stt: 267, hc: "Vô sinh nam do Tỳ Thận dương hư tinh lạnh", phanloai: ["Nam Khoa", "Hàn", "Hư suy", "Tỳ Thận dương hư"], tc: ["Tinh trùng di động yếu (độ A+B < 20%)", "Sợ lạnh, tay chân lạnh, tiêu chảy sáng", "Đau lưng mỏi gối", "Mạch trầm tế trì"], pdt: "Ôn bổ tỳ thận, tráng dương ích tinh", bt: "Tứ thần hoàn hợp Hữu quy hoàn gia Dâm dương hoắc", tpbt: ["Bổ cốt chỉ 12g", "Nhục đậu khấu 8g", "Ngô thù du 6g", "Thục địa 16g", "Nhục quế 6g", "Phụ tử chế 8g", "Dâm dương hoắc 12g"] },
"NK_121": { stt: 268, hc: "Vô sinh nam do Tâm Can uất kết tinh trệ", phanloai: ["Nam Khoa", "Bình", "Thực", "Khí uất"], tc: ["Không phóng tinh được do căng thẳng áp lực", "Tâm phiền, hay thở dài, mất ngủ", "Mạch huyền"], pdt: "Sơ can giải uất, thanh tâm an thần thông tinh", bt: "Tiêu dao tán gia Vương bất lưu hành, Viễn chí", tpbt: ["Sài hồ 10g", "Đương quy 12g", "Bạch thược 12g", "Bạch truật 12g", "Phục linh 12g", "Vương bất lưu hành 12g", "Viễn chí 6g"] },
"NK_122": { stt: 269, hc: "Vô sinh nam do Hàn ngưng huyết ứ tinh cung", phanloai: ["Nam Khoa", "Hàn", "Thực", "Hàn trệ huyết ứ"], tc: ["Tắc ống dẫn tinh do nhiễm lạnh bẹn", "Gặp lạnh đau tăng, bẹn lạnh nhói", "Mạch trầm sáp khẩn"], pdt: "Ôn kinh tán hàn, hoạt huyết thông tinh", bt: "Noãn can tiễn hợp Đào hồng tứ vật thang gia Vương bất lưu hành", tpbt: ["Tiểu hồi hương 8g", "Nhục quế 6g", "Đương quy 12g", "Đào nhân 12g", "Hồng hoa 8g", "Vương bất lưu hành 12g"] },

"NK_123": { stt: 270, hc: "Sán khí do Hàn thấp uẩn kết bìu", phanloai: ["Nam Khoa", "Hàn", "Thực", "Hàn thấp"], tc: ["Tinh hoàn sưng to lạnh ngắt, da bìu dày cứng", "Đau âm ỉ liên miên, gặp lạnh đau tăng", "Rêu dầy dính trắng", "Mạch nhu trì"], pdt: "Ôn trung tán hàn, trừ thấp tiêu sán", bt: "Bình vị tán gia Can khương, Tiểu hồi hương, Ô dược", tpbt: ["Thương truật 10g", "Hậu phác 10g", "Trần bì 6g", "Can khương 8g", "Tiểu hồi hương 8g", "Ô dược 10g"] },
"NK_124": { stt: 271, hc: "Sán khí do Can Hỏa phần huyết", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Can hỏa huyết nhiệt"], tc: ["Tinh hoàn sưng to đỏ tím đau nhói cự án", "Mặt đỏ mắt đỏ, sốt cao", "Tiểu đỏ buốt", "Mạch huyền sác dũng mãnh"], pdt: "Thanh can tả hỏa, lương huyết tiêu thũng", bt: "Long đởm tả can thang gia Trắc bách diệp, Xích thược", tpbt: ["Long đởm thảo 12g", "Chi tử 12g", "Hoàng cầm 12g", "Trắc bách diệp 12g", "Xích thược 12g", "Sài hồ 8g"] },
"NK_125": { stt: 272, hc: "Sán khí do Thận âm hư bìu trướng đau", phanloai: ["Nam Khoa", "Nhiệt", "Hư", "Thận âm hư"], tc: ["Tinh hoàn trướng đau rát nhẹ dai dẳng nhiều năm", "Triều nhiệt đạo hãn, mỏi lưng", "Lưỡi đỏ ít rêu", "Mạch tế sác"], pdt: "Tư bổ thận âm, nhuận can chỉ thống", bt: "Kỷ cúc địa hoàng hoàn gia Tiểu hồi hương, Ô dược", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Kỷ tử 12g", "Cúc hoa 10g", "Tiểu hồi hương 8g", "Ô dược 10g"] },

"NK_126": { stt: 273, hc: "Viêm tiền liệt tuyến mạn do Tâm Thận bất giao", phanloai: ["Nam Khoa", "Nhiệt", "Hư thực thác tạp", "Tâm Thận bất giao"], tc: ["Tiểu dắt rát nhẹ kéo dài kèm mất ngủ bứt rứt", "Hồi hộp hay quên, triều nhiệt", "Thắt lưng mỏi, tai ù", "Mạch tế sác"], pdt: "Tư âm giáng hỏa, thanh tâm thông lâm", bt: "Giao thái hoàn hợp Bát chính tán gia giảm", tpbt: ["Hoàng liên 8g", "Nhục quế 4g", "Mộc thông 8g", "Xa tiền tử 12g", "Chi tử 12g", "Sinh địa 16g"] },
"NK_127": { stt: 274, hc: "Viêm tiền liệt tuyến mạn do Can uất khí trệ", phanloai: ["Nam Khoa", "Bình", "Thực", "Can khí uất"], tc: ["Đau trướng tầng sinh môn lan sang thắt lưng khi xúc động", "Tiểu tiện khó, dòng tiểu yếu", "Hay thở dài", "Mạch huyền"], pdt: "Sơ can giải uất, thông lâm chỉ thống", bt: "Sài hồ sơ can tán gia Mộc thông, Xa tiền tử", tpbt: ["Sài hồ 10g", "Bạch thược 12g", "Chỉ xác 8g", "Xuyên khung 10g", "Mộc thông 8g", "Xa tiền tử 12g"] },
"NK_128": { stt: 275, hc: "Viêm tiền liệt tuyến mạn do Tỳ hư thấp trệ", phanloai: ["Nam Khoa", "Bình", "Hư thực thác tạp", "Tỳ hư thấp trệ"], tc: ["Chảy chất nhầy trắng niệu đạo sau tiểu ở người ăn kém", "Thân thể mỏi nặng, đại tiện nhão", "Mạch nhu hoãn"], pdt: "Kiện tỳ mẫn thấp, chỉ đái thông lâm", bt: "Sâm linh bạch truật tán gia Hoàng bá, Xa tiền tử", tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Hoài sơn 12g", "Ý dĩ 12g", "Hoàng bá 12g", "Xa tiền tử 12g"] },

"NK_129": { stt: 276, hc: "Phì đại tiền liệt tuyến do Khí hư tràng trệ", phanloai: ["Nam Khoa", "Bình", "Hư", "Khí hư"], tc: ["Tiểu rỉ rả không ra hết, rặn nhiều hụt hơi", "Đại tiện khó đi, phân mềm", "Thân thể mệt mỏi", "Mạch hư nhược"], pdt: "Bổ khí thăng dương, nhuận tràng thông niệu", bt: "Bổ trung ích khí thang gia Ma tử nhân, Xa tiền tử", tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Bạch truật 12g", "Thăng ma 6g", "Sài hồ 6g", "Ma tử nhân 12g", "Xa tiền tử 12g"] },
"NK_130": { stt: 277, hc: "Phì đại tiền liệt tuyến do Thận âm hư tân kiệt", phanloai: ["Nam Khoa", "Nhiệt", "Hư", "Thận âm hư"], tc: ["Tiểu đêm 4-5 lần, tiểu buốt nhẹ nóng rát", "Miệng khô họng táo, đại tiện khô", "Thắt lưng mỏi, tai ù", "Mạch tế sác"], pdt: "Tư bổ thận âm, nhuận tràng thông lâm", bt: "Lục vị địa hoàng hoàn gia Tri mẫu, Hoàng bá, Ma tử nhân", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Tri mẫu 12g", "Hoàng bá 12g", "Ma tử nhân 12g"] },

"NK_131": { stt: 278, hc: "Cường trung do Can uất hóa hỏa", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Can hỏa"], tc: ["Dương vật cương cứng đau rát sau cơn giận dữ dữ dội", "Mắt đỏ, miệng đắng, đau đầu", "Mạch huyền sác hữu lực"], pdt: "Thanh can tả hỏa, trấn tĩnh thư gân", bt: "Long đởm tả can thang gia Mẫu lệ, Bạch thược", tpbt: ["Long đởm thảo 12g", "Chi tử 12g", "Hoàng cầm 12g", "Trạch tả 12g", "Sài hồ 8g", "Mẫu lệ 20g", "Bạch thược 12g"] },
"NK_132": { stt: 279, hc: "Cường trung do Thấp nhiệt uẩn kết tinh cung", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Thấp nhiệt"], tc: ["Dương vật cương liên tục nóng rát, bì bìu ẩm hôi", "Tiểu đỏ buốt, rêu vàng nhớt", "Mạch nhu sác"], pdt: "Thanh nhiệt lợi thấp, chỉ thống thư gân", bt: "Bát chính tán gia Hoàng bá, Long đởm thảo", tpbt: ["Xa tiền tử 12g", "Mộc thông 8g", "Cù mạch 10g", "Biển súc 10g", "Chi tử 12g", "Hoàng bá 12g", "Long đởm thảo 12g"] },

"NK_133": { stt: 280, hc: "Ngọc hành sang do Âm hư hỏa độc lingering", phanloai: ["Nam Khoa", "Nhiệt", "Hư thực thác tạp", "Âm hư hỏa độc"], tc: ["Quy đầu rỉ dịch loét nhẹ dai dẳng nhiều tháng không lành", "Lòng bàn tay chân nóng, triều nhiệt", "Mạch tế sác"], pdt: "Tư âm thanh nhiệt, giải độc sinh cơ", bt: "Tri bá địa hoàng hoàn gia Kim ngân hoa, Bồ công anh", tpbt: ["Thục địa 16g", "Tri mẫu 12g", "Hoàng bá 12g", "Sơn thù nhục 8g", "Kim ngân hoa 15g", "Bồ công anh 15g"] },
"NK_134": { stt: 281, hc: "Ngọc hành sang do Huyết ứ hoại tử", phanloai: ["Nam Khoa", "Bình", "Thực", "Huyết ứ"], tc: ["Quy đầu bầm tím sưng to loét đen đau nhói", "Lưỡi tím sẫm có điểm ứ huyết", "Mạch sáp"], pdt: "Hoạt huyết hóa ứ, giải độc tiêu thũng", bt: "Đào hồng tứ vật thang gia Kim ngân hoa, Bồ công anh", tpbt: ["Đào nhân 12g", "Hồng hoa 8g", "Đương quy 12g", "Xuyên khung 10g", "Kim ngân hoa 15g", "Bồ công anh 15g"] },

"NK_135": { stt: 282, hc: "Âm nang phong do Thấp nhiệt hỏa độc", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Thấp nhiệt hỏa độc"], tc: ["Da bìu sưng đỏ nổi mụn mủ đau rát dữ dội", "Mủ vỡ tanh hôi, sốt nhẹ", "Mạch nhu sác"], pdt: "Thanh nhiệt giải độc, trừ thấp chỉ sang", bt: "Ngũ vị tiêu độc ẩm gia Hoàng bá, Khổ sâm", tpbt: ["Kim ngân hoa 15g", "Cúc hoa 10g", "Bồ công anh 15g", "Tử hoa địa đinh 12g", "Hoàng bá 12g", "Khổ sâm 10g"] },

"NK_136": { stt: 283, hc: "Âm nang thũng do Can kinh khí trệ thủy đái", phanloai: ["Nam Khoa", "Bình", "Thực", "Khí trệ thủy trệ"], tc: ["Bì bìu căng to trướng đau lan sang hạ sườn", "Hay thở dài, lo âu xúc động đau tăng", "Mạch huyền hoãn"], pdt: "Sơ can lý khí, lợi thủy tiêu thũng", bt: "Sài hồ sơ can tán hợp Ngũ linh tán", tpbt: ["Sài hồ 10g", "Bạch thược 12g", "Chỉ xác 8g", "Bạch truật 12g", "Phục linh 12g", "Trạch tả 12g", "Trư linh 10g"] },

"NK_137": { stt: 284, hc: "Suy giảm ham muốn do Phế Thận khí hư", phanloai: ["Nam Khoa", "Bình", "Hư", "Phế Thận khí hư"], tc: ["Giảm ham muốn tình dục kèm ho hen, thở ngắn", "Mệt mỏi tự hãn, sợ gió", "Mạch hư nhược"], pdt: "Bổ phế ích khí, ôn thận tráng dương", bt: "Thất vị đô khí hoàn gia Nhân sâm, Ba kích", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Ngũ vị tử 6g", "Nhân sâm 10g", "Ba kích 12g"] },
"NK_138": { stt: 285, hc: "Suy giảm ham muốn do Huyết ứ ngưng trệ", phanloai: ["Nam Khoa", "Bình", "Thực", "Huyết ứ"], tc: ["Chán quan hệ sau chấn thương vùng chậu bẹn", "Sắc mặt u uất, lưỡi tím điểm ứ huyết", "Mạch sáp"], pdt: "Hoạt huyết hóa ứ, thông lạc khởi dâm", bt: "Thân thống trục ứ thang gia Dâm dương hoắc, Ba kích", tpbt: ["Đào nhân 12g", "Hồng hoa 8g", "Đương quy 12g", "Xuyên khung 10g", "Ngưu tất 12g", "Dâm dương hoắc 12g", "Ba kích 12g"] },

"NK_139": { stt: 286, hc: "Không xuất tinh do Mệnh môn hỏa suy kiệt", phanloai: ["Nam Khoa", "Hàn", "Hư suy", "Mệnh môn hỏa suy"], tc: ["Quan hệ lâu không thể xuất tinh do dương vật lạnh", "Tay chân lạnh ngắt, sợ lạnh", "Mệt mỏi kiệt sức", "Mạch vi tế"], pdt: "Ôn bổ mệnh môn, tráng dương thông tinh", bt: "Hữu quy hoàn gia Vương bất lưu hành, Dâm dương hoắc", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Nhục quế 6g", "Phụ tử chế 8g", "Vương bất lưu hành 12g", "Dâm dương hoắc 12g"] },
"NK_140": { stt: 287, hc: "Không xuất tinh do Tâm Tỳ hư suy", phanloai: ["Nam Khoa", "Bình", "Hư", "Tâm Tỳ hư"], tc: ["Quan hệ không xuất tinh ở người suy nhược nặng", "Hồi hộp mất ngủ hay quên", "Ăn kém tiêu chảy", "Mạch tế nhược"], pdt: "Song bổ tâm tỳ, thông tinh khởi nuy", bt: "Quy tỳ thang gia Vương bất lưu hành, Ba kích", tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Hoàng kỳ 16g", "Đương quy 12g", "Long nhãn 12g", "Vương bất lưu hành 12g", "Ba kích 12g"] },

"NK_141": { stt: 288, hc: "Tinh hoàn teo do Thấp nhiệt uẩn kết lâu ngày", phanloai: ["Nam Khoa", "Nhiệt", "Hư thực thác tạp", "Thấp nhiệt"], tc: ["Tinh hoàn teo dần sau đợt viêm cấp quai bị", "Bì bìu còn ẩm nóng ngứa nhẹ", "Mạch nhu sác"], pdt: "Thanh nhiệt lợi thấp, dưỡng tinh tiêu kết", bt: "Long đởm tả can thang gia Tử hà xe, Cốt toái bổ", tpbt: ["Long đởm thảo 12g", "Chi tử 12g", "Hoàng cầm 12g", "Trạch tả 12g", "Tử hà xe 8g", "Cốt toái bổ 12g"] },

"NK_142": { stt: 289, hc: "Tinh thanh do Tỳ Thận khí hư", phanloai: ["Nam Khoa", "Bình", "Hư", "Tỳ Thận khí hư"], tc: ["Tinh dịch trong loãng như nước lã", "Ăn kém bụng trướng, mệt mỏi hụt hơi", "Đau lưng mỏi gối", "Mạch hoãn nhược"], pdt: "Kiện tỳ ích khí, bổ thận đặc tinh", bt: "Sâm linh bạch truật tán hợp Thận khí hoàn", tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Hoài sơn 12g", "Thục địa 16g", "Sơn thù nhục 8g", "Bổ cốt chỉ 12g"] },
"NK_143": { stt: 290, hc: "Tinh lạnh do Can hư hàn kinh mạch", phanloai: ["Nam Khoa", "Hàn", "Hư", "Can hư hàn"], tc: ["Tinh dịch lạnh ngắt kèm bì bìu lạnh co rút", "Sợ lạnh, tay chân lạnh, sắc mặt xanh xạm", "Mạch trầm trì hoãn"], pdt: "Ôn noãn can kinh, tán hàn cố tinh", bt: "Ngô thù du thang gia Tiểu hồi hương, Nhục quế", tpbt: ["Ngô thù du 6g", "Nhân sâm 10g", "Sinh khương 6g", "Đại táo 12g", "Tiểu hồi hương 8g", "Nhục quế 6g"] },

"NK_144": { stt: 291, hc: "Mỏi gối đau lưng sau quan hệ do Âm hư hỏa vượng", phanloai: ["Nam Khoa", "Nhiệt", "Hư", "Âm hư hỏa vượng"], tc: ["Thắt lưng nóng rát đau nhói sau xuất tinh", "Lòng bàn tay chân nóng, triều nhiệt", "Mất ngủ bứt rứt", "Mạch tế sác"], pdt: "Tư âm giáng hỏa, cường gân bổ thận", bt: "Tri bá địa hoàng hoàn gia Đỗ trọng, Tục đoạn", tpbt: ["Thục địa 16g", "Tri mẫu 12g", "Hoàng bá 12g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Đỗ trọng 12g", "Tục đoạn 12g"] },

"NK_145": { stt: 292, hc: "Đau rát quy đầu sau quan hệ do Âm hư huyết táo", phanloai: ["Nam Khoa", "Bình", "Hư", "Âm hư phong táo"], tc: ["Quy đầu khô rát, nứt nẻ sưng nhẹ sau quan hệ", "Khô miệng họng, da khô", "Mạch tế sáp"], pdt: "Dưỡng huyết nhuận táo, tư âm sinh tân", bt: "Sa sâm mạch đông thang gia Đương quy, Bạch thược", tpbt: ["Sa sâm 12g", "Mạch môn 12g", "Ngọc trúc 10g", "Sinh địa 16g", "Đương quy 12g", "Bạch thược 12g"] },

"NK_146": { stt: 293, hc: "Viêm mào tinh hoàn mạn do Hàn thấp ngưng trệ", phanloai: ["Nam Khoa", "Hàn", "Thực", "Hàn thấp"], tc: ["Mào tinh hoàn sưng cứng đau lạnh khi gặp lạnh", "Bì bìu lạnh rét, rêu dầy trắng", "Mạch trầm khẩn"], pdt: "Ôn kinh tán hàn, nhuyễn kiên tán kết", bt: "Noãn can tiễn gia Tiểu hồi hương, Mộc qua", tpbt: ["Tiểu hồi hương 8g", "Nhục quế 6g", "Đương quy 12g", "Ô dược 10g", "Trầm hương 3g", "Mộc qua 10g"] },

"NK_147": { stt: 294, hc: "Viêm túi tinh do Huyết ứ bế tắc", phanloai: ["Nam Khoa", "Bình", "Thực", "Huyết ứ"], tc: ["Xuất tinh ra máu tím đen kèm đau nhói cố định ở bẹn", "Lưỡi tím điểm ứ huyết", "Mạch sáp"], pdt: "Hoạt huyết hóa ứ, chỉ huyết thông lạc", bt: "Thân thống trục ứ thang gia Tam thất, Bồ hoàng", tpbt: ["Đào nhân 12g", "Hồng hoa 8g", "Đương quy 12g", "Xuyên khung 10g", "Ngưu tất 12g", "Tam thất 6g", "Bồ hoàng 10g"] },

"NK_148": { stt: 295, hc: "Giãn tĩnh mạch thừng tinh do Can hỏa uất kết", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Can hỏa"], tc: ["Búi tĩnh mạch bìu sưng to nóng rát sau khi giận dữ", "Mắt đỏ, miệng đắng", "Mạch huyền sác"], pdt: "Thanh can tả hỏa, hoạt huyết thông lạc", bt: "Long đởm tả can thang gia Đào nhân, Ngưu tất", tpbt: ["Long đởm thảo 12g", "Chi tử 12g", "Hoàng cầm 12g", "Đào nhân 12g", "Ngưu tất 12g", "Sài hồ 8g"] },

"NK_149": { stt: 296, hc: "Bì bìu chàm hóa mạn do Huyết hư phong táo", phanloai: ["Nam Khoa", "Bình", "Hư", "Huyết hư phong táo"], tc: ["Da bìu dày sừng nứt nẻ ngứa ngáy dai dẳng nhiều năm", "Sắc mặt nhợt nhạt", "Mạch tế sáp"], pdt: "Dưỡng huyết nhuận táo, khu phong chỉ ngứa", bt: "Dưỡng tiêu phong tán gia Hà thủ ô, Thục địa", tpbt: ["Đương quy 12g", "Thục địa 16g", "Bạch thược 12g", "Phòng phong 10g", "Hà thủ ô 12g", "Cam thảo 6g"] },

"NK_150": { stt: 297, hc: "Liệt dương do Mệnh môn hỏa suy kiệt", phanloai: ["Nam Khoa", "Hàn", "Hư suy", "Mệnh môn hỏa suy"], tc: ["Dương vật hoàn toàn lạnh nhão, mất phản xạ cương", "Sợ lạnh, tay chân lạnh ngắt quá gối", "Tiểu đêm liên tục, tiêu chảy sáng", "Mạch vi tế muốn tuyệt"], pdt: "Ôn bổ mệnh môn hỏa, đại bổ nguyên dương", bt: "Hữu quy hoàn gia Phụ tử chế, Nhục quế, Lộc nhung liều cao", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Phụ tử chế 12g", "Nhục quế 8g", "Lộc nhung 6g", "Dâm dương hoắc 12g"] },

"NK_151": { stt: 298, hc: "Liệt dương do Thận âm hư phế tân kiệt", phanloai: ["Nam Khoa", "Nhiệt", "Hư", "Âm hư"], tc: ["Liệt dương kèm ho khan, gầy còm, da khô", "Triều nhiệt đạo hãn, miệng khô khát", "Mạch tế sác"], pdt: "Tư âm nhuận phế, bổ thận tráng dương", bt: "Bách hợp cố kim thang gia Dâm dương hoắc, Ba kích", tpbt: ["Bách hợp 12g", "Sinh địa 16g", "Thục địa 16g", "Mạch môn 12g", "Huyền sâm 12g", "Dâm dương hoắc 12g", "Ba kích 12g"] },
"NK_152": { stt: 299, hc: "Liệt dương do Đàm nhiệt uẩn kết hạ tiêu", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Đàm nhiệt"], tc: ["Liệt dương ở người béo bệu, bì bìu ẩm hôi nóng", "Cổ họng đờm vàng dính, tiểu đỏ", "Mạch hoạt sác"], pdt: "Thanh nhiệt hóa đàm, thông lạc tráng dương", bt: "Hoàng liên ôn đởm thang gia Ba kích, Dâm dương hoắc", tpbt: ["Hoàng liên 8g", "Bán hạ 10g", "Trần bì 6g", "Phục linh 12g", "Trúc nhự 8g", "Ba kích 12g", "Dâm dương hoắc 12g"] },
"NK_153": { stt: 300, hc: "Liệt dương do Hàn thấp uẩn kết bìu bẹn", phanloai: ["Nam Khoa", "Hàn", "Thực", "Hàn thấp"], tc: ["Liệt dương kèm bì bìu lạnh sưng nặng nề", "Gặp lạnh đau tăng, rêu lưỡi trắng dính", "Mạch trầm khẩn hoãn"], pdt: "Ôn trung tán hàn, mẫn thấp tráng dương", bt: "Bình vị tán gia Can khương, Nhục quế, Ba kích", tpbt: ["Thương truật 10g", "Hậu phác 10g", "Trần bì 6g", "Can khương 8g", "Nhục quế 6g", "Ba kích 12g"] },
"NK_154": { stt: 301, hc: "Liệt dương do Can hỏa uất kết phần huyết", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Can hỏa huyết nhiệt"], tc: ["Liệt dương kèm đau rát bẹn dữ dội sau tức giận", "Mắt đỏ, nôn ra máu nhẹ hoặc chảy máu cam", "Mạch huyền sác dũng mãnh"], pdt: "Thanh can tả hỏa, lương huyết thông lạc tráng dương", bt: "Long đởm tả can thang gia Trắc bách diệp, Ba kích", tpbt: ["Long đởm thảo 12g", "Chi tử 12g", "Hoàng cầm 12g", "Trắc bách diệp 12g", "Ba kích 12g", "Sài hồ 8g"] },

"NK_155": { stt: 302, hc: "Xuất tinh sớm do Thận dương hư suy kiệt", phanloai: ["Nam Khoa", "Hàn", "Hư suy", "Thận dương hư"], tc: ["Vừa chạm vào đã xuất tinh kèm tinh dịch lạnh loãng", "Tay chân lạnh ngắt quá gối, sợ lạnh dữ dội", "Mạch vi tế"], pdt: "Ôn bổ thận dương, sáp niệu cố tinh", bt: "Hữu quy hoàn hợp Kim tỏa cố tinh hoàn gia Phụ tử", tpbt: ["Thục địa 16g", "Nhục quế 6g", "Phụ tử chế 10g", "Sơn thù nhục 8g", "Sa uyển tử 12g", "Khiếm thực 12g", "Long cốt 15g"] },
"NK_156": { stt: 303, hc: "Xuất tinh sớm do Tâm Hỏa phần huyết xí thịnh", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Tâm hỏa huyết nhiệt"], tc: ["Ham muốn cao, xuất tinh ngay trong giây đầu", "Mặt đỏ, tâm phiền bứt rứt không ngủ", "Loét lưỡi, tiểu đỏ", "Mạch sác hữu lực"], pdt: "Thanh tâm tả hỏa, lương huyết cố tinh", bt: "Tê giác địa hoàng thang hợp Đạo xích tán gia Sa uyển tử", tpbt: ["Thủy ngưu giác 30g", "Sinh địa 16g", "Xích thược 12g", "Đan bì 10g", "Mộc thông 8g", "Sa uyển tử 12g"] },

"NK_157": { stt: 304, hc: "Di tinh do Phế Thận âm hư", phanloai: ["Nam Khoa", "Nhiệt", "Hư", "Phế Thận âm hư"], tc: ["Mộng tinh kèm ho khan, gò má đỏ về chiều", "Triều nhiệt đạo hãn, họng khô", "Mỏi lưng gối", "Mạch tế sác"], pdt: "Tư âm nhuận phế, tư thận cố tinh", bt: "Bách hợp cố kim thang gia Sa uyển tử, Mẫu lệ", tpbt: ["Bách hợp 12g", "Sinh địa 16g", "Thục địa 16g", "Mạch môn 12g", "Sa uyển tử 12g", "Mẫu lệ 15g"] },
"NK_158": { stt: 305, hc: "Di tinh do Hàn đàm trệ kinh lạc", phanloai: ["Nam Khoa", "Hàn", "Thực", "Hàn đàm"], tc: ["Di tinh kèm nôn ra đờm loãng bọt", "Thân thể mỏi nặng, sợ lạnh", "Rêu dầy dính trắng", "Mạch trầm hoạt trì"], pdt: "Ôn hóa hàn đàm, khu phong cố tinh", bt: "Nhị trần thang gia Can khương, Nam tinh, Sa uyển tử", tpbt: ["Bán hạ 10g", "Trần bì 6g", "Phục linh 12g", "Can khương 8g", "Đởm nam tinh 8g", "Sa uyển tử 12g"] },

"NK_159": { stt: 306, hc: "Hoạt tinh do Tâm Thận dương hư suy", phanloai: ["Nam Khoa", "Hàn", "Hư suy", "Tâm Thận dương hư"], tc: ["Tinh dịch rỉ chảy đầm đìa kèm hồi hộp khó thở", "Sợ lạnh, tay chân lạnh ngắt, phù nhẹ", "Mạch trầm tế vi"], pdt: "Ôn thông tâm thận, đại bổ dương khí cố tinh", bt: "Chân vũ thang hợp Sâm phụ thang gia Tang phiêu tiêu", tpbt: ["Phụ tử chế 10g", "Nhân sâm 10g", "Bạch truật 12g", "Phục linh 12g", "Tang phiêu tiêu 12g", "Nhục quế 6g"] },

"NK_160": { stt: 307, hc: "Huyết tinh do Can Thận âm hư hỏa vượng", phanloai: ["Nam Khoa", "Nhiệt", "Hư", "Can Thận âm hư hỏa vượng"], tc: ["Xuất tinh ra máu đỏ tươi kéo dài dai dẳng", "Mắt khô xót, tai ù, triều nhiệt đạo hãn", "Đau lưng mỏi gối", "Mạch tế sác"], pdt: "Tư bổ can thận, giáng hỏa lương huyết chỉ huyết", bt: "Kỷ cúc địa hoàng hoàn gia Tri mẫu, Hoàng bá, Bồ hoàng", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Kỷ tử 12g", "Tri mẫu 12g", "Hoàng bá 12g", "Bồ hoàng 10g"] },

"NK_161": { stt: 308, hc: "Vô sinh nam do Phế Tỳ khí hư tinh yếu", phanloai: ["Nam Khoa", "Bình", "Hư", "Phế Tỳ khí hư"], tc: ["Tinh trùng ít yếu ở người ho hen dai dẳng", "Mệt mỏi hụt hơi, ăn kém tiêu chảy", "Sắc mặt bệch nhợt", "Mạch hư nhược"], pdt: "Bổ phế kiện tỳ, sinh tinh bổ tủy", bt: "Lục quân tử thang gia Bổ phế thang, Thỏ ty tử", tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Trần bì 6g", "Bán hạ 10g", "Hoàng kỳ 16g", "Thỏ ty tử 12g"] },
"NK_162": { stt: 309, hc: "Vô sinh nam do Thận dương hư suy mệnh môn hỏa vi", phanloai: ["Nam Khoa", "Hàn", "Hư suy", "Thận dương hư"], tc: ["Không có tinh trùng trong tinh dịch, lạnh ngắt", "Sợ lạnh, tay chân lạnh ngắt, tiêu chảy sáng", "Mạch trầm vi nhược"], pdt: "Ôn bổ mệnh môn hỏa, đại bổ tủy tinh", bt: "Hữu quy hoàn gia Lộc nhung, Tử hà xe, Dâm dương hoắc", tpbt: ["Thục địa 16g", "Nhục quế 6g", "Phụ tử chế 8g", "Sơn thù nhục 8g", "Lộc nhung 4g", "Tử hà xe 8g", "Dâm dương hoắc 12g"] },
"NK_163": { stt: 310, hc: "Sán khí do Can Thận hư hàn đau kéo dài", phanloai: ["Nam Khoa", "Hàn", "Hư", "Can Thận hư hàn"], tc: ["Tinh hoàn đau co rút lên bẹn âm ỉ dai dẳng nhiều năm", "Thắt lưng lạnh mỏi, sợ lạnh", "Mạch trầm tế trì"], pdt: "Ôn bổ can thận, tán hàn chỉ thống", bt: "Noãn can tiễn gia Đỗ trọng, Tục đoạn, Bổ cốt chỉ", tpbt: ["Tiểu hồi hương 8g", "Nhục quế 6g", "Đương quy 12g", "Ô dược 10g", "Đỗ trọng 12g", "Tục đoạn 12g", "Bổ cốt chỉ 12g"] },

"NK_164": { stt: 311, hc: "Viêm tiền liệt tuyến mạn do Khí hư trệ thủy", phanloai: ["Nam Khoa", "Bình", "Hư thực thác tạp", "Khí hư thủy trệ"], tc: ["Tiểu rỉ rả không ra hết, dòng tiểu yếu ở người mệt mỏi", "Bụng dưới nặng trướng nhẹ", "Mạch hư hoãn"], pdt: "Bổ khí kiện tỳ, lợi thủy thông lâm", bt: "Bổ trung ích khí thang hợp Ngũ linh tán gia Mộc thông", tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Trạch tả 12g", "Mộc thông 8g"] },

"NK_165": { stt: 312, hc: "Phì đại tiền liệt tuyến do Tâm Thận dương hư suy", phanloai: ["Nam Khoa", "Hàn", "Hư suy", "Tâm Thận dương hư"], tc: ["Bí tiểu kèm hồi hộp khó thở, phù hai chân", "Sợ lạnh, tay chân lạnh ngắt", "Mạch trầm tế vi"], pdt: "Ôn thông tâm thận, hóa khí lợi thủy thông bí", bt: "Chân vũ thang hợp Tế sinh Thận khí hoàn", tpbt: ["Phụ tử chế 10g", "Bạch truật 12g", "Phục linh 12g", "Nhục quế 6g", "Xa tiền tử 12g", "Ngưu tất 12g"] },

"NK_166": { stt: 313, hc: "Cường trung do Huyết nhiệt vọng hành", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Huyết nhiệt"], tc: ["Dương vật cương cứng liên tục tím đỏ rát", "Xuất huyết dưới da hoặc chảy máu cam", "Sốt, tâm phiền", "Mạch sác hữu lực"], pdt: "Thanh nhiệt lương huyết, chỉ thống giải cường", bt: "Tê giác địa hoàng thang gia Long đởm thảo, Mẫu lệ", tpbt: ["Thủy ngưu giác 30g", "Sinh địa 16g", "Xích thược 12g", "Đan bì 10g", "Long đởm thảo 12g", "Mẫu lệ 20g"] },

"NK_167": { stt: 314, hc: "Ngọc hành sang do Tỳ hư thấp trệ lở loét", phanloai: ["Nam Khoa", "Bình", "Hư thực thác tạp", "Tỳ hư thấp trệ"], tc: ["Quy đầu lở loét chảy dịch trong nhạt dai dẳng", "Ăn kém bụng trướng, tiêu chảy", "Sắc mặt úa vàng", "Mạch nhu hoãn"], pdt: "Kiện tỳ ích khí, trừ thấp sinh cơ chỉ sang", bt: "Sâm linh bạch truật tán gia Hoàng kỳ, Bạch chỉ", tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Hoài sơn 12g", "Ý dĩ 12g", "Hoàng kỳ 16g", "Bạch chỉ 10g"] },

"NK_168": { stt: 315, hc: "Âm nang thũng do Tỳ Thận dương hư thủy thũng", phanloai: ["Nam Khoa", "Hàn", "Hư suy", "Tỳ Thận dương hư"], tc: ["Bì bìu sưng to mọng nước kèm phù toàn thân", "Sợ lạnh, tay chân lạnh ngắt, tiêu chảy sáng", "Mạch trầm tế trì"], pdt: "Ôn bổ tỳ thận, hóa khí lợi thủy tiêu thũng", bt: "Chân vũ thang hợp Thực tỳ ẩm", tpbt: ["Phụ tử chế 10g", "Bạch truật 12g", "Phục linh 12g", "Can khương 8g", "Mộc qua 10g", "Hậu phác 10g", "Xa tiền tử 12g"] },

"NK_169": { stt: 316, hc: "Suy giảm ham muốn do Can Thận âm hư", phanloai: ["Nam Khoa", "Nhiệt", "Hư", "Can Thận âm hư"], tc: ["Chán quan hệ tình dục ở người gầy khô", "Mắt khô xót, tai ù, triều nhiệt đạo hãn", "Đau lưng mỏi gối", "Mạch tế sác"], pdt: "Tư bổ can thận, dưỡng âm sinh tân khởi dâm", bt: "Kỷ cúc địa hoàng hoàn gia Dâm dương hoắc, Ba kích", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Kỷ tử 12g", "Cúc hoa 10g", "Dâm dương hoắc 12g", "Ba kích 12g"] },

"NK_170": { stt: 317, hc: "Không xuất tinh do Phế khí uất trệ", phanloai: ["Nam Khoa", "Bình", "Thực", "Phế khí uất"], tc: ["Quan hệ không xuất tinh được kèm ngực trướng nghẹn", "Hay thở dài, ho hắng nhẹ", "Mạch huyền dũng"], pdt: "Tuyên phế lý khí, thông kinh phát tinh", bt: "Chỉ khái tán gia Vương bất lưu hành, Cát cánh", tpbt: ["Cát cánh 8g", "Kinh giới 10g", "Bách bộ 10g", "Trần bì 6g", "Chỉ xác 8g", "Vương bất lưu hành 12g"] },

"NK_171": { stt: 318, hc: "Tinh trùng yếu do Khí huyết lưỡng hư suy nhược", phanloai: ["Nam Khoa", "Bình", "Hư", "Khí huyết hư"], tc: ["Tinh trùng di động < 10%, số lượng ít", "Mệt mỏi kiệt sức, sắc mặt nhợt nhạt", "Hồi hộp, tiêu chảy", "Mạch tế nhược"], pdt: "Thập toàn đại bổ, ích tinh bổ tủy", bt: "Thập toàn đại bổ thang gia Thỏ ty tử, Kỷ tử", tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Cam thảo 6g", "Thục địa 16g", "Đương quy 12g", "Thỏ ty tử 12g", "Kỷ tử 12g"] },

"NK_172": { stt: 319, hc: "Đau nhói bìu sau quan hệ do Khí trệ huyết ứ", phanloai: ["Nam Khoa", "Bình", "Thực", "Khí trệ huyết ứ"], tc: ["Bì bìu đau nhói cự án sau khi xuất tinh", "Lưỡi tím sẫm có điểm ứ huyết", "Mạch sáp"], pdt: "Hoạt huyết hóa ứ, thông lạc chỉ thống", bt: "Thân thống trục ứ thang gia Ô dược", tpbt: ["Đào nhân 12g", "Hồng hoa 8g", "Đương quy 12g", "Xuyên khung 10g", "Ngưu tất 12g", "Ô dược 10g", "Địa long 10g"] },

"NK_173": { stt: 320, hc: "Liệt dương do Tỳ Thận âm hư", phanloai: ["Nam Khoa", "Nhiệt", "Hư", "Tỳ Thận âm hư"], tc: ["Liệt dương kèm miệng khô khát nước, ăn nhiều mau đói", "Đau lưng mỏi gối, gầy sút", "Mạch tế sác"], pdt: "Tư dưỡng tỳ thận, bổ tinh tráng dương", bt: "Tả quy hoàn hợp Ích vị thang gia Dâm dương hoắc", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Kỷ tử 12g", "Sa sâm 12g", "Mạch môn 12g", "Dâm dương hoắc 12g"] },

"NK_174": { stt: 321, hc: "Xuất tinh sớm do Phế Thận khí hư", phanloai: ["Nam Khoa", "Bình", "Hư", "Phế Thận khí hư"], tc: ["Xuất tinh sớm ở người hay ho hen hụt hơi", "Sợ gió, tự hãn, mệt mỏi", "Thắt lưng mỏi yếu", "Mạch hư nhược"], pdt: "Bổ phế nạp thận, cố tinh sáp niệu", bt: "Thất vị đô khí hoàn gia Sa uyển tử, Khiếm thực", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trạch tả 10g", "Ngũ vị tử 6g", "Sa uyển tử 12g", "Khiếm thực 12g"] },

"NK_175": { stt: 322, hc: "Di tinh do Thấp nhiệt uẩn kết hạ tiêu lâu ngày", phanloai: ["Nam Khoa", "Nhiệt", "Hư thực thác tạp", "Thấp nhiệt"], tc: ["Di tinh kéo dài dai dẳng, bì bìu ẩm ngứa hôi", "Tiểu buốt dắt nhẹ, rêu vàng dầy nhớt", "Mạch nhu sác"], pdt: "Thanh nhiệt táo thấp, cố tinh chỉ di", bt: "Chỉ đới thang gia Sa uyển tử, Ô tặc cốt", tpbt: ["Hoàng bá 12g", "Tri mẫu 12g", "Trúc nhự 8g", "Phục linh 12g", "Trạch tả 12g", "Sa uyển tử 12g", "Ô tặc cốt 15g"] },

"NK_176": { stt: 323, hc: "Hoạt tinh do Phế Tỳ khí hư hạ hãm", phanloai: ["Nam Khoa", "Bình", "Hư", "Phế Tỳ khí hư"], tc: ["Tinh dịch tự rỉ ra khi ho hoặc vận động nhẹ", "Thở ngắn, ngại nói, mệt mỏi tiêu lỏng", "Mạch hư nhược"], pdt: "Bổ phế kiện tỳ, thăng dương cố tinh", bt: "Bổ trung ích khí thang hợp Kim tỏa cố tinh hoàn", tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Bạch truật 12g", "Thăng ma 6g", "Sài hồ 6g", "Sa uyển tử 12g", "Khiếm thực 12g"] },

"NK_177": { stt: 324, hc: "Huyết tinh do Can Thận hỏa độc", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Can Thận hỏa độc"], tc: ["Xuất tinh ra máu đỏ tươi số lượng nhiều kèm đau rát dữ dội", "Mắt đỏ, miệng đắng, sốt cao", "Mạch huyền sác hữu lực"], pdt: "Thanh can tả hỏa, giải độc lương huyết chỉ huyết", bt: "Long đởm tả can thang gia Hoàng liên, Bồ hoàng", tpbt: ["Long đởm thảo 12g", "Chi tử 12g", "Hoàng cầm 12g", "Hoàng liên 8g", "Bồ hoàng 10g", "Sài hồ 8g"] },

"NK_178": { stt: 325, hc: "Vô sinh nam do Tâm Tỳ lưỡng hư tinh suy", phanloai: ["Nam Khoa", "Bình", "Hư", "Tâm Tỳ hư"], tc: ["Không có con do tinh trùng cực ít và yếu ở người gầy yếu", "Hồi hộp, mất ngủ, ăn kém tiêu chảy", "Mạch tế nhược"], pdt: "Bổ ích tâm tỳ, sinh tinh điền tủy", bt: "Quy tỳ thang gia Thỏ ty tử, Kỷ tử, Lộc nhung", tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Hoàng kỳ 16g", "Đương quy 12g", "Long nhãn 12g", "Thỏ ty tử 12g", "Lộc nhung 4g"] },

"NK_179": { stt: 326, hc: "Sán khí do Phế khí hạ hãm sa bìu", phanloai: ["Nam Khoa", "Bình", "Hư", "Phế khí hư hạ hãm"], tc: ["Bì bìu sa thõng đau nặng tức ở người ho hen lâu ngày", "Tiếng nói nhỏ yếu, tự hãn", "Mạch hư hoãn"], pdt: "Bổ phế ích khí, thăng dương cử sán", bt: "Bổ phế thang hợp Bổ trung ích khí thang gia Ô dược", tpbt: ["Nhân sâm 10g", "Hoàng kỳ 16g", "Bạch truật 12g", "Thăng ma 6g", "Sài hồ 6g", "Tang bạch bì 12g", "Ô dược 10g"] },

"NK_180": { stt: 327, hc: "Viêm tiền liệt tuyến mạn do Âm hư hỏa độc lingering", phanloai: ["Nam Khoa", "Nhiệt", "Hư thực thác tạp", "Âm hư hỏa độc"], tc: ["Tiểu buốt nhẹ rát dai dẳng nhiều năm, chảy chất nhầy", "Lòng bàn tay chân nóng, triều nhiệt đạo hãn", "Mạch tế sác"], pdt: "Tư âm thanh nhiệt, giải độc thông lâm", bt: "Tri bá địa hoàng hoàn gia Kim ngân hoa, Mộc thông", tpbt: ["Thục địa 16g", "Tri mẫu 12g", "Hoàng bá 12g", "Sơn thù nhục 8g", "Kim ngân hoa 15g", "Mộc thông 8g"] },

"NK_181": { stt: 328, hc: "Phì đại tiền liệt tuyến do Tỳ Thận khí hư thất thu", phanloai: ["Nam Khoa", "Bình", "Hư", "Tỳ Thận khí hư"], tc: ["Tiểu rỉ rả không tự chủ, đái dầm đêm ở người già", "Ăn kém tiêu chảy, mệt mỏi hụt hơi", "Mạch trầm hoãn vô lực"], pdt: "Song bổ tỳ thận, cố sáp niệu thông lâm", bt: "Sâm linh bạch truật tán hợp Tang phiêu tiêu tán", tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Hoài sơn 12g", "Tang phiêu tiêu 12g", "Ích trí nhân 10g"] },

"NK_182": { stt: 329, hc: "Cường trung do Tâm Hỏa quấy rối phần huyết", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Tâm hỏa huyết nhiệt"], tc: ["Dương vật cương cứng đau rát kèm tâm phiền cuồng loạn", "Mất ngủ, loét lưỡi, tiểu đỏ", "Mạch sác hữu lực"], pdt: "Thanh tâm tả hỏa, lương huyết an thần", bt: "Đạo xích tán hợp Hoàng liên giải độc thang gia Mẫu lệ", tpbt: ["Sinh địa 16g", "Mộc thông 8g", "Trúc diệp 8g", "Hoàng liên 8g", "Hoàng cầm 12g", "Mẫu lệ 20g"] },

"NK_183": { stt: 330, hc: "Ngọc hành sang do Can kinh thấp nhiệt bốc loét", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Thấp nhiệt"], tc: ["Quy đầu sưng to mưng mủ loét đỏ nóng rát dữ dội", "Miệng đắng, tiểu đỏ buốt", "Mạch huyền nhu sác"], pdt: "Thanh can lợi thấp, giải độc tiêu sang", bt: "Long đởm tả can thang gia Khổ sâm, Hoàng bá", tpbt: ["Long đởm thảo 12g", "Chi tử 12g", "Hoàng cầm 12g", "Khổ sâm 10g", "Hoàng bá 12g", "Trạch tả 12g", "Sài hồ 8g"] },

"NK_184": { stt: 331, hc: "Âm nang thũng do Âm hư thủy trệ", phanloai: ["Nam Khoa", "Nhiệt", "Hư thực thác tạp", "Âm hư thủy trệ"], tc: ["Bì bìu sưng mọng nước ở người gầy triều nhiệt", "Lòng bàn tay chân nóng, tiểu ít", "Mạch tế sác hoãn"], pdt: "Tư âm lợi thủy, thẩm thấp tiêu thũng", bt: "Lục vị địa hoàng hoàn gia Trạch tả, Trư linh, Xa tiền tử", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trạch tả 12g", "Trư linh 10g", "Xa tiền tử 12g"] },

"NK_185": { stt: 332, hc: "Suy giảm ham muốn do Khí trệ huyết ứ bẹn chậu", phanloai: ["Nam Khoa", "Bình", "Thực", "Khí trệ huyết ứ"], tc: ["Mất hoàn toàn cảm giác ham muốn sau mổ bẹn", "Điểm đau nhói cố định ở bẹn", "Lưỡi tím điểm ứ huyết", "Mạch sáp"], pdt: "Hành khí hoạt huyết, thông lạc khởi dâm", bt: "Cách hạ trục ứ thang gia Dâm dương hoắc, Ba kích", tpbt: ["Đương quy 12g", "Xuyên khung 10g", "Đào nhân 12g", "Hồng hoa 8g", "Chỉ xác 8g", "Dâm dương hoắc 12g", "Ba kích 12g"] },

"NK_186": { stt: 333, hc: "Không xuất tinh do Tỳ hư thấp trệ tinh đường", phanloai: ["Nam Khoa", "Bình", "Hư thực thác tạp", "Tỳ hư thấp trệ"], tc: ["Quan hệ không xuất tinh ở người béo bệu ăn kém", "Đờm dãi nhiều, phân lỏng nhão", "Mạch nhu hoãn"], pdt: "Kiện tỳ mẫn thấp, thông tinh chỉ trệ", bt: "Sâm linh bạch truật tán gia Vương bất lưu hành, Sơn tra", tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Hoài sơn 12g", "Ý dĩ 12g", "Vương bất lưu hành 12g", "Sơn tra 10g"] },

"NK_187": { stt: 334, hc: "Tinh thanh do Mệnh môn hỏa suy kiệt", phanloai: ["Nam Khoa", "Hàn", "Hư suy", "Mệnh môn hỏa suy"], tc: ["Tinh dịch loãng trong như nước lã, lạnh ngắt", "Liệt dương, sợ lạnh, tay chân lạnh quá gối", "Mạch vi tế"], pdt: "Ôn bổ mệnh môn hỏa, ích tinh đặc tinh", bt: "Hữu quy hoàn gia Phụ tử, Nhục quế, Tử hà xe liều cao", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Phụ tử chế 12g", "Nhục quế 8g", "Tử hà xe 10g", "Dâm dương hoắc 12g"] },

"NK_188": { stt: 335, hc: "Mỏi gối đau lưng sau quan hệ do Tâm Thận bất giao", phanloai: ["Nam Khoa", "Nhiệt", "Hư thực thác tạp", "Tâm Thận bất giao"], tc: ["Đau mỏi thắt lưng gối kèm tâm phiền mất ngủ sau quan hệ", "Hồi hộp hay quên, triều nhiệt", "Mạch tế sác"], pdt: "Tư âm giáng hỏa, thanh tâm cường gân bổ thận", bt: "Giao thái hoàn hợp Tri bá địa hoàng hoàn gia Đỗ trọng", tpbt: ["Hoàng liên 8g", "Nhục quế 4g", "Thục địa 16g", "Tri mẫu 12g", "Hoàng bá 12g", "Đỗ trọng 12g"] },

"NK_189": { stt: 336, hc: "Viêm mào tinh hoàn mạn do Tỳ hư thấp trệ u cục", phanloai: ["Nam Khoa", "Bình", "Hư thực thác tạp", "Tỳ hư thấp trệ"], tc: ["Mào tinh hoàn có cục cứng không đỏ không nóng ở người ăn kém", "Thân thể mỏi nặng, phân nhão", "Mạch nhu hoãn"], pdt: "Kiện tỳ mẫn thấp, nhuyễn kiên tán kết", bt: "Sâm linh bạch truật tán gia Bạch giới tử, Thổ phục linh", tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Hoài sơn 12g", "Bạch giới tử 8g", "Thổ phục linh 15g"] },

"NK_190": { stt: 337, hc: "Viêm túi tinh do Phế Thận âm hư huyết nhiệt", phanloai: ["Nam Khoa", "Nhiệt", "Hư", "Âm hư huyết nhiệt"], tc: ["Xuất tinh ra máu đỏ tươi kèm ho khan họng khô", "Triều nhiệt đạo hãn, mỏi lưng", "Mạch tế sác"], pdt: "Tư âm nhuận phế, tư thận lương huyết chỉ huyết", bt: "Bách hợp cố kim thang gia Trắc bách diệp, Tam thất", tpbt: ["Bách hợp 12g", "Sinh địa 16g", "Thục địa 16g", "Mạch môn 12g", "Trắc bách diệp 12g", "Tam thất 6g"] },

"NK_191": { stt: 338, hc: "Giãn tĩnh mạch thừng tinh do Tỳ hư khí hãm", phanloai: ["Nam Khoa", "Bình", "Hư", "Tỳ hư hạ hãm"], tc: ["Búi tĩnh mạch bìu sa thõng ở người ăn kém trướng bụng", "Đại tiện lỏng nhão, mệt mỏi hụt hơi", "Mạch hoãn nhược"], pdt: "Kiện tỳ ích khí, thăng dương thông lạc tiêu búi", bt: "Sâm linh bạch truật tán hợp Bổ trung ích khí thang gia Ngưu tất", tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Thăng ma 6g", "Sài hồ 6g", "Ngưu tất 12g"] },

"NK_192": { stt: 339, hc: "Bì bìu chàm hóa mạn do Can Thận âm hư", phanloai: ["Nam Khoa", "Nhiệt", "Hư", "Can Thận âm hư"], tc: ["Da bìu khô nẻ dầy sừng ngứa ngáy dai dẳng nhiều năm", "Mắt khô, tai ù, triều nhiệt đạo hãn", "Mạch tế sác"], pdt: "Tư bổ can thận, dưỡng huyết nhuận táo chỉ ngứa", bt: "Kỷ cúc địa hoàng hoàn gia Hà thủ ô, Đương quy", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Kỷ tử 12g", "Cúc hoa 10g", "Hà thủ ô 12g", "Đương quy 12g"] },

"NK_193": { stt: 340, hc: "Liệt dương do Thận tinh khuy tổn suy kiệt", phanloai: ["Nam Khoa", "Bình", "Hư suy", "Thận tinh bất túc"], tc: ["Liệt dương hoàn toàn ở người tóc bạc sớm, tai điếc", "Trí nhớ kém, gối yếu chân mềm", "Mạch trầm tế vô lực"], pdt: "Bổ thận điền tinh, đại bổ tủy não tráng dương", bt: "Tả quy hoàn gia Tử hà xe, Lộc giác giao, Dâm dương hoắc", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Kỷ tử 12g", "Tử hà xe 8g", "Lộc giác giao 10g", "Dâm dương hoắc 12g"] },

"NK_194": { stt: 341, hc: "Xuất tinh sớm do Tâm Tỳ lưỡng hư khí huyết kiệt", phanloai: ["Nam Khoa", "Bình", "Hư", "Tâm Tỳ hư"], tc: ["Chưa kịp quan hệ đã xuất tinh ở người gầy bệch", "Hồi hộp mất ngủ, ăn kém tiêu chảy", "Mạch tế nhược vô lực"], pdt: "Song bổ tâm tỳ, cố tinh sáp niệu", bt: "Quy tỳ thang gia Sa uyển tử, Khiếm thực, Long cốt", tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Hoàng kỳ 16g", "Đương quy 12g", "Sa uyển tử 12g", "Khiếm thực 12g", "Long cốt 15g"] },

"NK_195": { stt: 342, hc: "Di tinh do Khí trệ huyết ứ tinh đạo", phanloai: ["Nam Khoa", "Bình", "Thực", "Khí trệ huyết ứ"], tc: ["Di tinh kèm đau nhói từng cơn ở bẹn", "Lưỡi tím sẫm có điểm ứ huyết", "Mạch sáp"], pdt: "Hành khí hoạt huyết, cố tinh chỉ di", bt: "Thân thống trục ứ thang gia Sa uyển tử, Long cốt", tpbt: ["Đào nhân 12g", "Hồng hoa 8g", "Đương quy 12g", "Xuyên khung 10g", "Ngưu tất 12g", "Sa uyển tử 12g", "Long cốt 15g"] },

"NK_196": { stt: 343, hc: "Hoạt tinh do Mệnh môn hỏa suy kiệt hoàn toàn", phanloai: ["Nam Khoa", "Hàn", "Hư suy", "Mệnh môn hỏa suy"], tc: ["Tinh dịch rỉ chảy liên tục không ngừng, lạnh ngắt", "Thân thể lạnh như băng, sợ lạnh dữ dội", "Mạch vi tế muốn tuyệt"], pdt: "Cứu thoát hồi dương, ôn bổ mệnh môn cố tinh", bt: "Tứ nghịch thang hợp Hữu quy hoàn gia Tang phiêu tiêu liều cao", tpbt: ["Phụ tử chế 12g", "Can khương 8g", "Thục địa 16g", "Nhục quế 6g", "Tang phiêu tiêu 15g", "Chích cam thảo 6g"] },

"NK_197": { stt: 344, hc: "Huyết tinh do Tỳ Thận khí hư không nhiếp huyết", phanloai: ["Nam Khoa", "Bình", "Hư", "Tỳ Thận khí hư"], tc: ["Xuất tinh ra máu hồng nhạt kéo dài dai dẳng", "Mệt mỏi hụt hơi, ăn kém tiêu chảy", "Đau lưng mỏi gối", "Mạch trầm nhược vô lực"], pdt: "Kiện tỳ bổ thận, nhiếp huyết chỉ huyết", bt: "Quy tỳ thang hợp Thận khí hoàn gia Tam thất", tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Thục địa 16g", "Hoài sơn 12g", "Hoàng kỳ 16g", "Tam thất 6g"] },

"NK_198": { stt: 345, hc: "Vô sinh nam do Đàm nhiệt uẩn kết tinh cung", phanloai: ["Nam Khoa", "Nhiệt", "Thực", "Đàm nhiệt"], tc: ["Tinh dịch dính quánh kéo sợi dài không hóa lỏng", "Bì bìu ẩm hôi nóng, cổ họng đờm vàng", "Rêu dầy vàng nhớt", "Mạch hoạt sác"], pdt: "Thanh nhiệt hóa đàm, thông tinh tiêu quánh", bt: "Hoàng liên ôn đởm thang gia Sơn tra, Thần khúc, Trạch tả", tpbt: ["Hoàng liên 8g", "Bán hạ 10g", "Trần bì 6g", "Phục linh 12g", "Trúc nhự 8g", "Sơn tra 10g", "Trạch tả 12g"] },

"NK_199": { stt: 346, hc: "Sán khí do Phế Tỳ khí hư sa bìu", phanloai: ["Nam Khoa", "Bình", "Hư", "Phế Tỳ khí hư"], tc: ["Thoát vị bẹn bìu sa thõng nặng tức ở người ho hen lâu ngày", "Sắc mặt bệch nhợt, ăn kém tiêu chảy", "Mạch hư hoãn"], pdt: "Bổ phế kiện tỳ, thăng dương cử sán chỉ thống", bt: "Lục quân tử thang hợp Bổ trung ích khí thang gia Ô dược", tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Trần bì 6g", "Thăng ma 6g", "Sài hồ 6g", "Ô dược 10g"] },

"NK_200": { stt: 347, hc: "Viêm tiền liệt tuyến mạn do Tỳ Thận dương hư suy", phanloai: ["Nam Khoa", "Hàn", "Hư suy", "Tỳ Thận dương hư"], tc: ["Tiểu rỉ rả không sạch kèm chất nhầy trắng ở người sợ lạnh", "Bụng dưới lạnh đau, tiêu chảy sáng", "Thắt lưng lạnh mỏi", "Mạch trầm tế trì"], pdt: "Ôn bổ tỳ thận, hóa khí thông lâm chỉ đái", bt: "Tứ thần hoàn hợp Tế sinh Thận khí hoàn", tpbt: ["Bổ cốt chỉ 12g", "Nhục đậu khấu 8g", "Ngô thù du 6g", "Thục địa 16g", "Nhục quế 6g", "Phụ tử chế 8g", "Xa tiền tử 12g", "Ngưu tất 12g"] },

"PK_KN_TruocKy_HuyetNhietThuc": { stt: 348, hc: "Kinh nguyệt trước kỳ do Huyết nhiệt (Thực nhiệt)", phanloai: ["Phụ Khoa", "Nhiệt", "Thực", "Huyết nhiệt"], tc: ["Kinh nguyệt đến sớm", "Lượng kinh nhiều", "Sắc kinh đỏ sẫm đặc", "Mặt đỏ miệng khát", "Tiểu đỏ đại tiện táo", "Mạch sác hữu lực"], pdt: "Thanh nhiệt lương huyết, điều kinh", bt: "Thanh kinh thang", tpbt: ["Hoàng bá 12g", "Sinh địa 16g", "Bạch thược 12g", "Mẫu đơn bì 10g", "Nga truật 8g", "Địa cốt bì 12g", "Thục địa 16g"] },

"PK_KN_TruocKy_HuyetNhietHu": { stt: 349, hc: "Kinh nguyệt trước kỳ do Huyết nhiệt (Âm hư huyết nhiệt)", phanloai: ["Phụ Khoa", "Nhiệt", "Hư", "Âm hư huyết nhiệt"], tc: ["Kinh nguyệt đến sớm lượng ít", "Sắc kinh đỏ tươi không có cục", "Triều nhiệt, gò má đỏ", "Lòng bàn tay chân nóng", "Lưỡi đỏ ít rêu", "Mạch tế sác"], pdt: "Tư âm thanh nhiệt, lương huyết điều kinh", bt: "Lưỡng địa thang", tpbt: ["Sinh địa 16g", "Địa cốt bì 12g", "Huyền sâm 12g", "Mạch môn 12g", "Bạch thược 12g", "A giao 10g"] },

"PK_KN_TruocKy_CanHoa": { stt: 350, hc: "Kinh nguyệt trước kỳ do Can hỏa uất bốc", phanloai: ["Phụ Khoa", "Nhiệt", "Thực", "Can hỏa"], tc: ["Kinh nguyệt đến sớm lượng nhiều hay ít bất thường", "Sắc kinh đỏ tím đặc có cục", "Ngực sườn trướng đau", "Dễ cáu gắt, miệng đắng", "Mạch huyền sác"], pdt: "Thanh can tả hỏa, lương huyết điều kinh", bt: "Đan chi tiêu dao tán gia giảm", tpbt: ["Sài hồ 10g", "Đương quy 12g", "Bạch thược 12g", "Bạch truật 12g", "Phục linh 12g", "Cam thảo 6g", "Đan bì 10g", "Chi tử 10g"] },

"PK_KN_TruocKy_KhiHu": { stt: 351, hc: "Kinh nguyệt trước kỳ do Khí hư (Tỳ hư thất thu)", phanloai: ["Phụ Khoa", "Bình", "Hư", "Khí hư không nhiếp huyết"], tc: ["Kinh nguyệt đến sớm lượng nhiều", "Sắc kinh nhạt loãng", "Mệt mỏi, hụt hơi, ngại nói", "Sắc mặt nhợt nhạt", "Mạch hư nhược"], pdt: "Bổ khí kiện tỳ, cố kinh chỉ huyết", bt: "Bổ trung ích khí thang gia A giao", tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Bạch truật 12g", "Trần bì 6g", "Thăng ma 6g", "Sài hồ 6g", "A giao 10g", "Cam thảo 6g"] },

"PK_KN_TruocKy_ThapNhiet": { stt: 352, hc: "Kinh nguyệt trước kỳ do Thấp nhiệt uẩn kết bào cung", phanloai: ["Phụ Khoa", "Nhiệt", "Thực", "Thấp nhiệt"], tc: ["Kinh nguyệt đến sớm sắc đỏ tím dính hôi", "Bụng dưới đau rát cự án", "Khí hư vàng dính hôi", "Rêu lưỡi vàng nhớt", "Mạch nhu sác"], pdt: "Thanh nhiệt lợi thấp, hóa ứ điều kinh", bt: "Thanh nhiệt điều huyết thang gia giảm", tpbt: ["Hoàng liên 8g", "Sinh địa 16g", "Đương quy 12g", "Xuyên khung 10g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Ý dĩ 16g"] },

"PK_KN_SauKy_HuyetHu": { stt: 353, hc: "Kinh nguyệt sau kỳ do Huyết hư", phanloai: ["Phụ Khoa", "Bình", "Hư", "Huyết hư"], tc: ["Kinh nguyệt đến muộn, lượng ít", "Sắc kinh hồng nhạt loãng", "Bụng dưới đau âm ỉ thích xoa bóp", "Hoa mắt chóng mặt", "Mạch tế nhược"], pdt: "Bổ huyết hòa dinh, dưỡng huyết điều kinh", bt: "Tứ vật thang gia Hoàng kỳ", tpbt: ["Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g", "Hoàng kỳ 16g"] },

"PK_KN_SauKy_HanThuc": { stt: 354, hc: "Kinh nguyệt sau kỳ do Hàn thực (Hàn ngưng huyết ứ)", phanloai: ["Phụ Khoa", "Hàn", "Thực", "Hàn ngưng huyết ứ"], tc: ["Kinh nguyệt đến chậm lượng ít", "Sắc kinh tím đen có cục máu đông", "Bụng dưới đau quặn dữ dội, chườm ấm bớt đau", "Tay chân lạnh", "Mạch trầm khẩn"], pdt: "Ôn kinh tán hàn, hoạt huyết hóa ứ điều kinh", bt: "Ôn kinh thang (Cục phương)", tpbt: ["Mẫu đơn bì 10g", "Bạch thược 12g", "Đương quy 12g", "Xuyên khung 10g", "Nhục quế 6g", "Nga truật 8g", "Mộc hương 6g", "Cam thảo 6g"] },

"PK_KN_SauKy_HanHu": { stt: 355, hc: "Kinh nguyệt sau kỳ do Hàn hư (Bào cung hư hàn)", phanloai: ["Phụ Khoa", "Hàn", "Hư", "Hư hàn"], tc: ["Kinh nguyệt đến chậm lượng ít", "Sắc kinh nhạt loãng hoặc tối nhợt", "Bụng dưới lạnh đau âm ỉ", "Sợ lạnh, thắt lưng mỏi lạnh", "Mạch trầm tế trì"], pdt: "Ôn kinh bổ hư, noãn bào cung điều kinh", bt: "Đại ôn kinh thang", tpbt: ["Ngô thù du 6g", "Nhục quế 6g", "Đương quy 12g", "Thục địa 16g", "Bạch thược 12g", "Nhân sâm 10g", "Can khương 6g", "Cam thảo 6g"] },

"PK_KN_SauKy_KhiTre": { stt: 356, hc: "Kinh nguyệt sau kỳ do Khí trệ", phanloai: ["Phụ Khoa", "Bình", "Thực", "Khí trệ"], tc: ["Kinh nguyệt đến chậm lượng ít", "Sắc kinh đỏ sẫm không thông", "Bụng dưới trướng đau", "Ngực sườn đầy tức, hay thở dài", "Mạch huyền"], pdt: "Hành khí giải uất, hoạt huyết điều kinh", bt: "Ô dược thông kinh tán", tpbt: ["Ô dược 10g", "Hương phụ 10g", "Mộc hương 6g", "Đương quy 12g", "Xuyên khung 10g", "Bạch thược 12g", "Chỉ xác 8g"] },

"PK_KN_SauKy_DamThap": { stt: 357, hc: "Kinh nguyệt sau kỳ do Đàm thấp trở trệ", phanloai: ["Phụ Khoa", "Bình", "Thực", "Đàm thấp"], tc: ["Kinh nguyệt đến chậm lượng ít", "Sắc kinh nhạt dính như chất nhầy", "Người béo bệu, thân thể nặng nề", "Miệng dính, nôn nao", "Mạch nhu hoạt"], pdt: "Táo thấp hóa đàm, lý khí điều kinh", bt: "Thương truật đạo đàm thang", tpbt: ["Thương truật 10g", "Bán hạ 10g", "Trần bì 6g", "Phục linh 12g", "Chỉ thực 8g", "Đởm nam tinh 8g", "Hương phụ 10g"] },

"PK_KN_ThatKy_CanUat": { stt: 358, hc: "Kinh nguyệt không định kỳ do Can khí uất kết", phanloai: ["Phụ Khoa", "Bình", "Hư thực thác tạp", "Khí uất"], tc: ["Kinh nguyệt lúc đến sớm lúc đến muộn", "Lượng kinh nhiều ít không chừng", "Sắc kinh tím đen có cục", "Trướng vú ngực sườn đau", "Mạch huyền"], pdt: "Sơ can giải uất, dưỡng huyết điều kinh", bt: "Tiêu dao tán", tpbt: ["Sài hồ 10g", "Đương quy 12g", "Bạch thược 12g", "Bạch truật 12g", "Phục linh 12g", "Cam thảo 6g", "Bạc hà 4g", "Sinh khương 6g"] },

"PK_KN_ThatKy_ThanHu": { stt: 359, hc: "Kinh nguyệt không định kỳ do Thận hư", phanloai: ["Phụ Khoa", "Bình", "Hư", "Thận hư"], tc: ["Kinh nguyệt sớm muộn thất thường", "Lượng kinh ít, sắc kinh nhạt", "Đau lưng mỏi gối, chóng mặt tai ù", "Tiểu đêm nhiều lần", "Mạch trầm tế"], pdt: "Bổ thận ích tinh, tị dưỡng âm dương điều kinh", bt: "Định kinh thang", tpbt: ["Thục địa 16g", "Hoài sơn 12g", "Sơn thù nhục 8g", "Bạch thược 12g", "Đương quy 12g", "Thỏ ty tử 12g", "Kinh giới tuệ sao 8g"] },

"PK_KN_ThatKy_TyHu": { stt: 360, hc: "Kinh nguyệt không định kỳ do Tỳ hư", phanloai: ["Phụ Khoa", "Bình", "Hư", "Tỳ hư"], tc: ["Kinh nguyệt trễ sớm thất thường", "Sắc kinh nhạt loãng", "Ăn kém, bụng trướng đầy sau ăn", "Đại tiện lỏng nhão", "Mạch nhu hoãn nhược"], pdt: "Kiện tỳ ích khí, dưỡng huyết điều kinh", bt: "Quy tỳ thang gia giảm", tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Cam thảo 6g", "Hoàng kỳ 16g", "Đương quy 12g", "Long nhãn 12g", "Toan táo nhân 12g"] },

"PK_KN_LieuNhieu_KhieuHu": { stt: 361, hc: "Kinh nguyệt ra quá nhiều do Khí hư", phanloai: ["Phụ Khoa", "Bình", "Hư", "Khí hư không nhiếp huyết"], tc: ["Kinh nguyệt ra lượng rất nhiều ồ ạt", "Sắc kinh đỏ nhạt loãng", "Mệt mỏi hụt hơi, sắc mặt nhợt", "Tự hãn", "Mạch hư nhược hoãn"], pdt: "Bổ khí kiện tỳ, sáp huyết điều kinh", bt: "Cử nguyên thang", tpbt: ["Hoàng kỳ 20g", "Đảng sâm 12g", "Bạch truật 12g", "Chích cam thảo 6g", "Thăng ma 6g"] },

"PK_KN_LieuNhieu_HuyetNhiet": { stt: 362, hc: "Kinh nguyệt ra quá nhiều do Huyết nhiệt", phanloai: ["Phụ Khoa", "Nhiệt", "Thực", "Huyết nhiệt"], tc: ["Kinh nguyệt ra nhiều như xối", "Sắc kinh đỏ tươi hoặc tím đặc", "Mặt đỏ, miệng khát, tâm phiền", "Tiểu đỏ, đại tiện táo", "Mạch hồng sác"], pdt: "Thanh nhiệt lương huyết, chỉ huyết điều kinh", bt: "Bảo âm tán", tpbt: ["Sinh địa 16g", "Thục địa 16g", "Bạch thược 12g", "Hoàng bá 12g", "Tri mẫu 12g", "Mẫu đơn bì 10g", "Tục đoạn 12g", "Cam thảo 6g"] },

"PK_KN_LieuNhieu_HuyetU": { stt: 363, hc: "Kinh nguyệt ra quá nhiều do Huyết ứ", phanloai: ["Phụ Khoa", "Bình", "Thực", "Huyết ứ"], tc: ["Kinh nguyệt ra nhiều kéo dài", "Sắc kinh tím đen có cục máu đông lớn", "Bụng dưới đau quặn cự án, ra cục bớt đau", "Lưỡi tím sẫm", "Mạch sáp hoặc huyền sáp"], pdt: "Hoạt huyết hóa ứ, chỉ huyết điều kinh", bt: "Tứ vật thang gia Đào nhân, Hồng hoa, Tam thất", tpbt: ["Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g", "Đào nhân 12g", "Hồng hoa 8g", "Tam thất 6g"] },

"PK_KN_LieuIt_HuyetHu": { stt: 364, hc: "Kinh nguyệt ra quá ít do Huyết hư", phanloai: ["Phụ Khoa", "Bình", "Hư", "Huyết hư"], tc: ["Kinh nguyệt ra nhỏ giọt vài giọt là hết", "Sắc kinh nhạt loãng", "Hoa mắt chóng mặt, tâm quý", "Sắc mặt nhợt úa", "Mạch tế nhược"], pdt: "Bổ huyết ích khí, điều kinh", bt: "Tứ vật thang gia Đảng sâm, Kỷ tử", tpbt: ["Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g", "Đảng sâm 12g", "Kỷ tử 12g"] },

"PK_KN_LieuIt_ThanAmHu": { stt: 365, hc: "Kinh nguyệt ra quá ít do Thận âm hư", phanloai: ["Phụ Khoa", "Nhiệt", "Hư", "Thận âm hư"], tc: ["Kinh nguyệt ít sắc đỏ tươi", "Đau lưng mỏi gối, tai ù ve kêu", "Lòng bàn tay chân nóng, triều nhiệt", "Mạch tế sác"], pdt: "Tư bổ thận âm, dưỡng huyết điều kinh", bt: "Tả quy hoàn gia giảm", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Kỷ tử 12g", "Thỏ ty tử 12g", "Quy bản giao 10g", "Lộc giác giao 10g"] },

"PK_KN_LieuIt_ThanDuongHu": { stt: 366, hc: "Kinh nguyệt ra quá ít do Thận dương hư", phanloai: ["Phụ Khoa", "Hàn", "Hư", "Thận dương hư"], tc: ["Kinh nguyệt ít sắc nhạt loãng hoặc xám nhợt", "Thắt lưng lạnh đau, tay chân lạnh ngắt", "Đi tiểu đêm nhiều lần", "Mạch trầm tế trì"], pdt: "Ôn bổ thận dương, ích tinh điều kinh", bt: "Hữu quy hoàn gia giảm", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Kỷ tử 12g", "Đỗ trọng 12g", "Thỏ ty tử 12g", "Nhục quế 6g", "Phụ tử chế 8g"] },

"PK_KN_LieuIt_HuyetU": { stt: 367, hc: "Kinh nguyệt ra quá ít do Huyết ứ ngưng trệ", phanloai: ["Phụ Khoa", "Bình", "Thực", "Huyết ứ"], tc: ["Kinh nguyệt nhỏ giọt rỉ rả sắc tím đen", "Bụng dưới đau quặn cự án", "Lưỡi tím sẫm có điểm ứ huyết", "Mạch trầm sáp"], pdt: "Hoạt huyết hóa ứ, thông kinh chỉ thống", bt: "Thông kinh la hoàn", tpbt: ["Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Đương quy 12g", "Xuyên khung 10g", "Nga truật 8g", "Tam thất 6g"] },

"PK_RongKinh_KhieuHu": { stt: 368, hc: "Rong kinh kéo dài do Khí hư bất cố", phanloai: ["Phụ Khoa", "Bình", "Hư", "Khí hư không nhiếp huyết"], tc: ["Kinh nguyệt kéo dài trên 7 ngày rỉ rả không dứt", "Sắc kinh nhạt loãng", "Mệt mỏi hụt hơi, bụng dưới nặng chèn", "Mạch hư nhược"], pdt: "Bổ khí kiện tỳ, nhiếp huyết cố kinh", bt: "An xung thang", tpbt: ["Hoàng kỳ 20g", "Đảng sâm 12g", "Bạch truật 12g", "Chích cam thảo 6g", "Thục địa 16g", "A giao 10g", "Tục đoạn 12g"] },

"PK_RongKinh_AmHuHoaVuong": { stt: 369, hc: "Rong kinh do Âm hư hỏa vượng bức huyết vọng hành", phanloai: ["Phụ Khoa", "Nhiệt", "Hư", "Âm hư hỏa vượng"], tc: ["Kinh nguyệt kéo dài lượng ít dính đỏ tươi", "Gò má đỏ, ngũ tâm phiền nhiệt", "Mất ngủ mộng mị, họng khô", "Lưỡi đỏ ít rêu", "Mạch tế sác"], pdt: "Tư âm giáng hỏa, lương huyết chỉ huyết", bt: "Thanh hải hoán thai đan gia giảm", tpbt: ["Thục địa 16g", "Sinh địa 16g", "Bạch thược 12g", "Mẫu đơn bì 10g", "Tri mẫu 12g", "Hoàng bá 12g", "A giao 10g", "Địa cốt bì 12g"] },

"PK_RongKinh_HuyetNhiet": { stt: 370, hc: "Rong kinh do Huyết nhiệt vọng hành", phanloai: ["Phụ Khoa", "Nhiệt", "Thực", "Huyết nhiệt"], tc: ["Kinh nguyệt kéo dài sắc đỏ sẫm đặc hôi", "Sốt nhẹ, tâm phiền khát nước", "Tiểu đỏ đại tiện táo", "Mạch sác hữu lực"], pdt: "Thanh nhiệt lương huyết, chỉ huyết điều kinh", bt: "Cố âm tiễn gia giảm", tpbt: ["Sinh địa 16g", "Thục địa 16g", "Bạch thược 12g", "Hoàng bá 12g", "Tri mẫu 12g", "Trắc bách diệp sao đen 12g", "Cam thảo 6g"] },

"PK_RongKinh_HuyetU": { stt: 371, hc: "Rong kinh do Huyết ứ trệ bào cung", phanloai: ["Phụ Khoa", "Bình", "Thực", "Huyết ứ"], tc: ["Kinh nguyệt rỉ rả lâu ngày sắc tím đen có cục", "Bụng dưới đau cố định cự án", "Mạch sáp hữu lực"], pdt: "Hoạt huyết hóa ứ, trừ cũ sinh mới chỉ huyết", bt: "Khẩu vương thất bảo tán", tpbt: ["Đương quy 12g", "Xuyên khung 10g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Bồ hoàng sao 10g", "Ngũ linh chi 10g"] },

"PK_BangLau_TyHu": { stt: 372, hc: "Băng lậu do Tỳ hư khí hãm", phanloai: ["Phụ Khoa", "Bình", "Hư", "Khí hư hạ hãm"], tc: ["Máu kinh ra đột ngột ồ ạt (Băng) hoặc rỉ rả liên miên (Lậu)", "Sắc kinh nhạt loãng", "Sắc mặt bệch tái, chân tay lạnh nhẹ", "Mạch vi nhược hoặc hư đại vô lực"], pdt: "Bổ khí thăng dương, kiện tỳ cố kinh chỉ huyết", bt: "Cử nguyên thang hợp Bổ trung ích khí thang", tpbt: ["Hoàng kỳ 20g", "Đảng sâm 12g", "Bạch truật 12g", "Thăng ma 6g", "Sài hồ 6g", "Chích cam thảo 6g", "A giao sao 10g", "Mộc hương 6g"] },

"PK_BangLau_ThanDuongHu": { stt: 373, hc: "Băng lậu do Thận dương hư suy", phanloai: ["Phụ Khoa", "Hàn", "Hư suy", "Thận dương hư"], tc: ["Máu kinh ra ồ ạt hoặc rỉ rả dai dẳng sắc xám nhợt", "Bụng dưới lạnh đau, sợ lạnh tay chân lạnh ngắt", "Tiểu đêm nhiều, tiêu chảy sáng sớm", "Mạch trầm tế vi"], pdt: "Ôn bổ thận dương, cố xung sáp niệu chỉ huyết", bt: "Hữu quy hoàn gia Lộc giác giao, Bổ cốt chỉ, Chi ma", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Nhục quế 6g", "Phụ tử chế 8g", "Lộc giác giao 10g", "Bổ cốt chỉ 12g", "Đỗ trọng 12g"] },

"PK_BangLau_ThanAmHu": { stt: 374, hc: "Băng lậu do Thận âm hư suy", phanloai: ["Phụ Khoa", "Nhiệt", "Hư", "Thận âm hư"], tc: ["Máu kinh ra rỉ rả dầm dề đỏ tươi đặc", "Đau lưng mỏi gối, hoa mắt tai ù", "Triều nhiệt đạo hãn", "Mạch tế sác vô lực"], pdt: "Tư bổ thận âm, thanh nhiệt cố xung chỉ huyết", bt: "Tả quy hoàn gia A giao, Quy bản, Trắc bách diệp sao", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Kỷ tử 12g", "Quy bản 12g", "A giao 10g", "Trắc bách diệp 12g"] },

"PK_BangLau_ThucNhiet": { stt: 375, hc: "Băng lậu do Thực nhiệt huyết nhiệt", phanloai: ["Phụ Khoa", "Nhiệt", "Thực", "Huyết nhiệt"], tc: ["Máu kinh ra đột ngột xối xả sắc đỏ tươi/tím đặc", "Miệng khát thích uống lạnh, mặt đỏ", "Táo bón, tiểu ngắn đỏ", "Mạch sác hữu lực dũng mãnh"], pdt: "Thanh nhiệt lương huyết, triệt hỏa chỉ huyết", bt: "Thanh nhiệt cố kinh thang", tpbt: ["Hoàng cầm 12g", "Hoàng bá 12g", "Sinh địa 16g", "Bạch thược 12g", "Mẫu đơn bì 10g", "Địa cốt bì 12g", "Cương tàm 10g", "Cát cánh 6g"] },

"PK_BangLau_HuyetU": { stt: 376, hc: "Băng lậu do Huyết ứ trở trệ xung nhâm", phanloai: ["Phụ Khoa", "Bình", "Thực", "Huyết ứ"], tc: ["Máu kinh ra rỉ rả hoặc chảy đợt bùng phát sắc tím đen có cục", "Bụng dưới đau quặn cự án", "Sản dịch/Kinh nguyệt ra cục bớt đau", "Mạch sáp hữu lực"], pdt: "Hoạt huyết hóa ứ, thông xung chỉ huyết", bt: "Sinh hóa thang gia Bồ hoàng, Ngũ linh chi", tpbt: ["Đương quy 12g", "Xuyên khung 10g", "Đào nhân 12g", "Can khương sao đen 6g", "Chích cam thảo 6g", "Bồ hoàng 10g", "Ngũ linh chi 10g"] },

"PK_BeKinh_KhiHuyetSuy": { stt: 377, hc: "Bế kinh do Khí huyết hư suy", phanloai: ["Phụ Khoa", "Bình", "Hư", "Khí huyết hư suy"], tc: ["Bế kinh nhiều tháng liên tục", "Sắc mặt nhợt nhạt úa vàng, gầy còm", "Hoa mắt chóng mặt, mệt mỏi hụt hơi", "Lưỡi nhợt", "Mạch tế nhược"], pdt: "Đại bổ khí huyết, dưỡng xung điều kinh", bt: "Nhân sâm dưỡng vinh thang", tpbt: ["Nhân sâm 10g", "Hoàng kỳ 16g", "Bạch truật 12g", "Phục linh 12g", "Cam thảo 6g", "Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g", "Trần bì 6g"] },

"PK_BeKinh_ThanKhieuHu": { stt: 378, hc: "Bế kinh do Thận khí hư tinh đới kiệt", phanloai: ["Phụ Khoa", "Bình", "Hư suy", "Thận tinh bất túc"], tc: ["Bế kinh ở phụ nữ trẻ hoặc tiền mãn kinh sớm", "Đau lưng mỏi gối, tóc rụng răng lung lay", "Khô âm đạo, giảm ham muốn", "Mạch trầm tế vô lực"], pdt: "Bổ thận điền tinh, dưỡng huyết thông kinh", bt: "Quy thận hoàn gia Kỷ tử, Thỏ ty tử", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Phục linh 12g", "Đỗ trọng 12g", "Đương quy 12g", "Kỷ tử 12g", "Thỏ ty tử 12g"] },

"PK_BeKinh_CanUatKhieuTre": { stt: 379, hc: "Bế kinh do Can khí uất trệ", phanloai: ["Phụ Khoa", "Bình", "Thực", "Khí trệ"], tc: ["Bế kinh do căng thẳng uất hận", "Tinh thần u uất, hay thở dài", "Ngực sườn trướng đau", "Mạch huyền dằn xóc"], pdt: "Sơ can giải uất, lý khí thông kinh", bt: "Sài hồ sơ can tán gia Hồng hoa, Hương phụ", tpbt: ["Sài hồ 10g", "Bạch thược 12g", "Chỉ xác 8g", "Xuyên khung 10g", "Hương phụ 10g", "Hồng hoa 8g", "Chích cam thảo 6g"] },

"PK_BeKinh_HuyetU": { stt: 380, hc: "Bế kinh do Huyết ứ bào cung", phanloai: ["Phụ Khoa", "Bình", "Thực", "Huyết ứ"], tc: ["Bế kinh đột ngột, bụng dưới trướng đau cự án", "Ấn vào bụng đau nhói, mặt u ám", "Lưỡi tím sẫm có điểm ứ huyết", "Mạch trầm sáp"], pdt: "Hoạt huyết hóa ứ, phá trệ thông kinh", bt: "Huyết phủ trục ứ thang gia Nga truật", tpbt: ["Đương quy 12g", "Sinh địa 16g", "Đào nhân 12g", "Hồng hoa 8g", "Chỉ xác 8g", "Xích thược 12g", "Sài hồ 8g", "Xuyên khung 10g", "Nga truật 8g"] },

"PK_BeKinh_DamThapTrangKy": { stt: 381, hc: "Bế kinh do Đàm thấp trở trệ bào mạch", phanloai: ["Phụ Khoa", "Bình", "Thực", "Đàm thấp"], tc: ["Bế kinh ở người thể trạng béo trệ", "Khí hư ra nhiều đặc dính", "Ngực bụng đầy tức, hay nôn nao đờm dãi", "Rêu lưỡi dầy dính trắng", "Mạch nhu hoạt"], pdt: "Táo thấp hóa đàm, thông kinh hoạt lạc", bt: "Bán hạ ma hoàng hoàn gia giảm", tpbt: ["Bán hạ 10g", "Trần bì 6g", "Phục linh 12g", "Ma hoàng 6g", "Thương truật 10g", "Hương phụ 10g", "Thần khúc 10g"] },

"PK_BeKinh_HanNgungHuyetU": { stt: 382, hc: "Bế kinh do Hàn ngưng huyết ứ", phanloai: ["Phụ Khoa", "Hàn", "Thực", "Hàn ngưng huyết ứ"], tc: ["Bế kinh sau khi bị nhiễm lạnh/ăn đồ lạnh kỳ kinh", "Bụng dưới đau quặn lạnh ngắt, gặp ấm bớt đau", "Tay chân lạnh ngắt", "Mạch trầm khẩn"], pdt: "Ôn kinh tán hàn, hoạt huyết thông kinh", bt: "Ôn kinh thang (Kim quỹ)", tpbt: ["Ngô thù du 6g", "Mạch môn 12g", "Đương quy 12g", "Xuyên khung 10g", "Bạch thược 12g", "Nhân sâm 10g", "Quế chi 8g", "A giao 10g", "Mẫu đơn bì 10g", "Bán hạ 10g"] },

"PK_ThongKinh_KhiTreHuyetU": { stt: 383, hc: "Thống kinh do Khí trệ huyết ứ", phanloai: ["Phụ Khoa", "Bình", "Thực", "Khí trệ huyết ứ"], tc: ["Bụng dưới trướng đau quặn trước/trong kỳ kinh", "Kinh nguyệt ra cục tím đen, ra cục bớt đau", "Ngực sườn trướng căng", "Mạch huyền sáp"], pdt: "Hành khí hoạt huyết, trừ ứ chỉ thống", bt: "Cách hạ trục ứ thang", tpbt: ["Đương quy 12g", "Xuyên khung 10g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Chỉ xác 8g", "Hương phụ 10g", "Ô dược 10g", "Ngũ linh chi 10g", "Đan bì 10g"] },

"PK_ThongKinh_HanNgungHuyetU": { stt: 384, hc: "Thống kinh do Hàn ngưng huyết ứ", phanloai: ["Phụ Khoa", "Hàn", "Thực", "Hàn ngưng huyết ứ"], tc: ["Bụng dưới đau dữ dội như đâm trước/trong kỳ kinh", "Gặp lạnh đau tăng, chườm ấm giảm đau", "Kinh nguyệt ít sắc tối có cục", "Mạch trầm khẩn"], pdt: "Ôn kinh tán hàn, hóa ứ chỉ thống", bt: "Thiếu phúc trục ứ thang", tpbt: ["Can khương 6g", "Nhục quế 6g", "Tiểu hồi hương 8g", "Đương quy 12g", "Xuyên khung 10g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Bồ hoàng 10g", "Ngũ linh chi 10g"] },

"PK_ThongKinh_ThapNhietUanKet": { stt: 385, hc: "Thống kinh do Thấp nhiệt uẩn kết", phanloai: ["Phụ Khoa", "Nhiệt", "Thực", "Thấp nhiệt uẩn kết"], tc: ["Bụng dưới đau rát dữ dội trước kỳ kinh cự án", "Kinh nguyệt đỏ sẫm đặc hôi", "Sốt nhẹ, tiểu ngắn đỏ", "Khí hư vàng hôi", "Mạch nhu sác"], pdt: "Thanh nhiệt lợi thấp, hóa ứ chỉ thống", bt: "Thanh nhiệt điều huyết thang", tpbt: ["Hoàng liên 8g", "Sinh địa 16g", "Đương quy 12g", "Xuyên khung 10g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Hương phụ 10g", "Nga truật 8g", "Diên hồ tẩu 10g"] },

"PK_ThongKinh_ThanKhieuHu": { stt: 386, hc: "Thống kinh do Thận hư bào mạch thất dưỡng", phanloai: ["Phụ Khoa", "Bình", "Hư", "Thận hư"], tc: ["Bụng dưới đau âm ỉ dai dẳng sau kỳ kinh", "Thích xoa bóp và chườm ấm", "Đau lưng mỏi gối, kinh ít sắc nhạt", "Mạch trầm tế vô lực"], pdt: "Bổ thận dưỡng huyết, hoãn cấp chỉ thống", bt: "Điều can tán gia giảm", tpbt: ["Sơn thù nhục 8g", "Hoài sơn 12g", "Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "A giao 10g", "Tục đoạn 12g", "Cam thảo 6g"] },

"PK_ThongKinh_KhiHuyetHu": { stt: 387, hc: "Thống kinh do Khí huyết hư suy", phanloai: ["Phụ Khoa", "Bình", "Hư", "Khí huyết hư suy"], tc: ["Bụng dưới đau âm ỉ liên miên sau khi sạch kinh", "Sắc mặt nhợt nhạt, mệt mỏi hụt hơi", "Kinh ít sắc nhạt loãng", "Mạch tế nhược"], pdt: "Bổ khí dưỡng huyết, hòa dinh chỉ thống", bt: "Thánh dũ thang gia giảm", tpbt: ["Nhân sâm 10g", "Hoàng kỳ 16g", "Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g"] },

"PK_ThongKinh_CanHoaHoa": { stt: 388, hc: "Thống kinh do Can uất hóa hỏa", phanloai: ["Phụ Khoa", "Nhiệt", "Thực", "Can uất hóa hỏa"], tc: ["Bụng dưới trướng đau rát trước kỳ kinh", "Mặt đỏ mắt đỏ, dễ giận dữ", "Kinh ra đỏ đặc, miệng đắng", "Mạch huyền sác"], pdt: "Sơ can thanh nhiệt, hóa ứ chỉ thống", bt: "Gia vị tiêu dao tán gia Diên hồ tẩu", tpbt: ["Sài hồ 10g", "Đương quy 12g", "Bạch thược 12g", "Bạch truật 12g", "Phục linh 12g", "Cam thảo 6g", "Đan bì 10g", "Chi tử 10g", "Diên hồ tẩu 10g"] },

"PK_ThongKinh_TyViHuHan": { stt: 389, hc: "Thống kinh do Tỳ Vị hư hàn", phanloai: ["Phụ Khoa", "Hàn", "Hư", "Tỳ Vị hư hàn"], tc: ["Bụng dưới kèm thượng vị đau âm ỉ khi hành kinh", "Thích ấm, nôn ra nước trong", "Tay chân lạnh, tiêu chảy nhão", "Mạch trầm tế hoãn"], pdt: "Ôn trung kiện tỳ, tán hàn chỉ thống", bt: "Tiểu kiến trung thang gia Đương quy", tpbt: ["Quế chi 8g", "Bạch thược 16g", "Sinh khương 8g", "Đại táo 12g", "Chích cam thảo 6g", "Di đường 30g", "Đương quy 12g"] },

"PK_DoiHa_TyHuThapThinh": { stt: 390, hc: "Đới hạ do Tỳ hư thấp thịnh (Bạch đới)", phanloai: ["Phụ Khoa", "Bình", "Hư thực thác tạp", "Tỳ hư thấp trệ"], tc: ["Khí hư ra nhiều màu trắng đục như mỡ hoặc lòng trắng trứng", "Không mùi hôi, âm hộ không ngứa", "Mệt mỏi, sắc mặt nhợt", "Đại tiện lỏng nhão", "Mạch nhu nhược hoãn"], pdt: "Kiện tỳ ích khí, thăng dương trừ thấp chỉ đới", bt: "Hoàn đới thang", tpbt: ["Bạch truật 12g", "Sơn dược 12g", "Nhân sâm 10g", "Bạch thược 12g", "Thương truật 10g", "Cam thảo 6g", "Trần bì 6g", "Kinh giới tuệ 8g", "Sài hồ 6g"] },

"PK_DoiHa_ThanDuongHu": { stt: 391, hc: "Đới hạ do Thận dương hư suy (Bạch đới lạnh)", phanloai: ["Phụ Khoa", "Hàn", "Hư suy", "Thận dương hư"], tc: ["Khí hư ra dai dẳng trong loãng như nước", "Bụng dưới lạnh ngắt, thắt lưng lạnh mỏi", "Đi tiểu đêm nhiều lần, sợ lạnh", "Mạch trầm tế trì"], pdt: "Ôn bổ thận dương, cố sáp chỉ đới", bt: "Nội bổ hoàn", tpbt: ["Thục địa 16g", "Lộc nhung 4g", "Bổ cốt chỉ 12g", "Phụ tử chế 8g", "Nhục quế 6g", "Hoài sơn 12g", "Thỏ ty tử 12g", "Tang phiêu tiêu 12g"] },

"PK_DoiHa_ThanAmHu": { stt: 392, hc: "Đới hạ do Thận âm hư (Khí hư nhầy dính đỏ trắng)", phanloai: ["Phụ Khoa", "Nhiệt", "Hư", "Thận âm hư"], tc: ["Khí hư ra dầm dề màu đỏ trắng xen kẽ hoặc dính đặc", "Âm hộ khô rát, triều nhiệt đạo hãn", "Đau lưng mỏi gối, tai ù", "Mạch tế sác"], pdt: "Tư bổ thận âm, thanh nhiệt chỉ đới", bt: "Tri bá địa hoàng hoàn gia Mẫu lệ, Khiếm thực", tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Phục linh 12g", "Tri mẫu 12g", "Hoàng bá 12g", "Mẫu lệ 15g"] },

"PK_DoiHa_ThapNhietHaChu": { stt: 393, hc: "Đới hạ do Thấp nhiệt hạ chú (Hoàng đới / Xích đới)", phanloai: ["Phụ Khoa", "Nhiệt", "Thực", "Thấp nhiệt hạ chú"], tc: ["Khí hư ra nhiều màu vàng xanh hôi đặc", "Âm hộ nóng rát ngứa ngáy dữ dội", "Tiểu dắt tiểu buốt", "Rêu lưỡi vàng nhớt", "Mạch nhu sác"], pdt: "Thanh nhiệt táo thấp, giải độc chỉ đới", bt: "Chỉ đới thang", tpbt: ["Hoàng bá 12g", "Tri mẫu 12g", "Trúc nhự 8g", "Phục linh 12g", "Trạch tả 12g", "Xa tiền tử 12g", "Dâm dương hoắc 10g"] },

"PK_DoiHa_CanHoaTietTuc": { stt: 394, hc: "Đới hạ do Can kinh hỏa uất thấp nhiệt", phanloai: ["Phụ Khoa", "Nhiệt", "Thực", "Can hỏa thấp nhiệt"], tc: ["Khí hư ra đục màu vàng đắng tanh hôi", "Dễ cáu gắt, miệng đắng họng khô", "Ngực sườn trướng đầy, tiểu đỏ", "Mạch huyền sác"], pdt: "Thanh can tả hỏa, lợi thấp chỉ đới", bt: "Long đởm tả can thang gia Khổ sâm", tpbt: ["Long đởm thảo 12g", "Hoàng cầm 12g", "Chi tử 12g", "Trạch tả 12g", "Mộc thông 8g", "Xa tiền tử 12g", "Đương quy 12g", "Sinh địa 16g", "Sài hồ 8g", "Khổ sâm 10g"] },

"PK_DoiHa_HanThapUanBao": { stt: 395, hc: "Đới hạ do Hàn thấp uẩn kết bào cung", phanloai: ["Phụ Khoa", "Hàn", "Thực", "Hàn thấp"], tc: ["Khí hư ra nhiều loãng trắng như lòng trắng trứng", "Bụng dưới lạnh đau âm ỉ, chườm ấm bớt", "Thân thể mỏi nặng, sợ lạnh", "Mạch trầm nhu hoãn"], pdt: "Ôn kinh tán hàn, trừ thấp chỉ đới", bt: "Xung hòa tán gia giảm", tpbt: ["Thương truật 10g", "Can khương 8g", "Nhục quế 6g", "Bạch truật 12g", "Phục linh 12g", "Phụ tử chế 8g", "Cam thảo 6g"] },

"PK_DoiHa_DocHietTrangNhiet": { stt: 396, hc: "Đới hạ do Nhiệt độc uẩn kết (Khí hư mủ máu)", phanloai: ["Phụ Khoa", "Nhiệt", "Thực", "Hỏa độc"], tc: ["Khí hư ra như mủ lẫn máu hôi thối dữ dội", "Bụng dưới đau dữ dội cự án", "Sốt cao, bứt rứt khát nước", "Lưỡi đỏ rêu vàng khô", "Mạch sác hữu lực"], pdt: "Thanh nhiệt giải độc, bài nùng chỉ đới", bt: "Ngũ vị tiêu độc ẩm gia Hoàng liên, Bồ công anh", tpbt: ["Kim ngân hoa 15g", "Cúc hoa 10g", "Bồ công anh 15g", "Tử hoa địa đinh 12g", "Tử bối thiên quỳ 10g", "Hoàng liên 8g", "Thổ phục linh 15g"] },

"PK_AmNgua_ThapNhiet": { stt: 397, hc: "Âm hộ mẩn ngứa do Thấp nhiệt uẩn kết (Viêm âm đạo)", phanloai: ["Phụ Khoa", "Nhiệt", "Thực", "Thấp nhiệt"], tc: ["Ngứa rát dữ dội âm hộ âm đạo", "Khí hư ra nhiều như cặn sữa/vàng hôi", "Niêm mạc đỏ sưng rát, tiểu buốt", "Mạch nhu sác"], pdt: "Thanh nhiệt lợi thấp, sát trùng chỉ ngứa", bt: "Bội lan tán hợp Nhị diệu tán gia Khổ sâm", tpbt: ["Hoàng bá 12g", "Thương truật 10g", "Khổ sâm 10g", "Bội lan 10g", "Xa tiền tử 12g", "Xà sàng tử 12g"] },
  "PK_AmNgua_GanThucHoa": {
    stt: 398,
    hc: "Âm hộ ngứa do Can kinh hỏa độc",
    phanloai: ["Phụ Khoa", "Nhiệt", "Thực", "Can hỏa"],
    tc: ["Âm hộ nóng rát gãi rớm máu", "Tâm phiền dễ giận, miệng đắng", "Tiểu tiện đỏ dắt", "Mạch huyền sác"],
    pdt: "Thanh can tả hỏa, thanh nhiệt chỉ ngứa",
    bt: "Long đởm tả can thang gia Xà sàng tử",
    tpbt: ["Long đởm thảo 12g", "Chi tử 12g", "Hoàng cầm 12g", "Trạch tả 12g", "Sinh địa 16g", "Sài hồ 8g", "Xà sàng tử 12g"]
  },
  "PK_AmNgua_PhongTaoHuyetHu": {
    stt: 399,
    hc: "Âm hộ ngứa do Huyết hư phong táo (Âm hộ khô ngứa)",
    phanloai: ["Phụ Khoa", "Bình", "Hư thực thác tạp", "Huyết hư phong táo"],
    tc: ["Âm hộ khô teo ngứa ngáy dai dẳng mạn tính", "Càng về đêm ngứa càng tăng", "Da âm hộ khô nẻ mất độ đàn hồi", "Mạch tế sáp"],
    pdt: "Dưỡng huyết nhuận táo, khu phong chỉ ngứa",
    bt: "Dưỡng tiêu phong tán gia Hà thủ ô",
    tpbt: ["Đương quy 12g", "Thục địa 16g", "Bạch thược 12g", "Xuyên khung 10g", "Phòng phong 10g", "Kinh giới 10g", "Hà thủ ô 12g", "Thuyền thoái 6g"]
  },
  "PK_AmNgua_ThanAmHu": {
    stt: 400,
    hc: "Âm hộ ngứa do Thận âm hư suy",
    phanloai: ["Phụ Khoa", "Nhiệt", "Hư", "Thận âm hư"],
    tc: ["Âm hộ khô rát ngứa nhẹ dầm dề lâu ngày", "Triều nhiệt đạo hãn, đau lưng mỏi gối", "Lưỡi đỏ ít rêu", "Mạch tế sác vô lực"],
    pdt: "Tư bổ thận âm, nhuận táo chỉ ngứa",
    bt: "Tả quy hoàn gia Dâm dương hoắc, Xà sàng tử",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Dâm dương hoắc 12g", "Xà sàng tử 12g"]
  },
  "PK_AmSang_ThapNhietDoc": {
    stt: 401,
    hc: "Âm sang do Thấp nhiệt hỏa độc (Loét âm hộ / Áp xe tuyến Bartholin)",
    phanloai: ["Phụ Khoa", "Nhiệt", "Thực", "Hỏa độc uẩn kết"],
    tc: ["Âm hộ nổi mụn nhọt sưng nóng đỏ đau dữ dội", "Mưng mủ chảy dịch hôi hám", "Sốt cao rét run, tiểu khó", "Mạch hoạt sác hữu lực"],
    pdt: "Thanh nhiệt giải độc, trừ thấp bài nùng",
    bt: "Tiên phương hoạt mệnh ẩm gia giảm",
    tpbt: ["Kim ngân hoa 15g", "Trần bì 6g", "Phòng phong 10g", "Bạch chỉ 10g", "Cam thảo 6g", "Bối mẫu 10g", "Nhũ hương 6g", "Một dược 6g", "Cát cánh 8g"]
  },
  "PK_AmSang_NhietDocSieuPhu": {
    stt: 402,
    hc: "Âm sang do Nhiệt độc dư uẩn hoại tử",
    phanloai: ["Phụ Khoa", "Nhiệt", "Thực", "Nhiệt độc nhung huyết"],
    tc: ["Niêm mạc âm hộ loét sâu hoại tử", "Máu mủ hôi thối dầm dề", "Thân thể mệt mỏi, sốt dai dẳng", "Mạch tế sác hữu lực"],
    pdt: "Thanh nhiệt lương huyết, giải độc sinh cơ",
    bt: "Thanh nhiệt giải độc thang gia giảm",
    tpbt: ["Hoàng liên 8g", "Hoàng cầm 12g", "Hoàng bá 12g", "Kim ngân hoa 15g", "Liên kiều 12g", "Sinh địa 16g", "Đan bì 10g", "Bồ công anh 15g"]
  },
  "PK_AmSang_HuyetHuKhieuTao": {
    stt: 403,
    hc: "Âm sang do Huyết hư mụn loét lâu liền",
    phanloai: ["Phụ Khoa", "Bình", "Hư", "Huyết hư không sinh cơ"],
    tc: ["Vết loét âm hộ đáy bệch nhợt chảy dịch trong", "Lâu ngày không liền miệng", "Mệt mỏi sắc mặt nhợt", "Mạch tế nhược vô lực"],
    pdt: "Bổ huyết ích khí, thác độc sinh cơ",
    bt: "Thác quốc tán gia giảm",
    tpbt: ["Hoàng kỳ 16g", "Đương quy 12g", "Bạch truật 12g", "Phục linh 12g", "Bạch chỉ 10g", "Xuyên khung 10g", "Cam thảo 6g"]
  },
  "PK_ViemCoTuCung_ThapNhiet": {
    stt: 404,
    hc: "Viêm cổ tử cung do Thấp nhiệt uẩn kết",
    phanloai: ["Phụ Khoa", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Khí hư ra nhiều như mủ màu vàng xanh hôi", "Cổ tử cung đỏ loét rớm máu khi chạm", "Bụng dưới đau trướng rát", "Mạch nhu sác"],
    pdt: "Thanh nhiệt táo thấp, chỉ đới tiêu thũng",
    bt: "Long đởm tả can thang hợp Nhị diệu tán",
    tpbt: ["Long đởm thảo 12g", "Chi tử 12g", "Hoàng cầm 12g", "Hoàng bá 12g", "Thương truật 10g", "Trạch tả 12g", "Xa tiền tử 12g"]
  },
  "PK_ViemCoTuCung_NhietDoc": {
    stt: 405,
    hc: "Viêm cổ tử cung do Nhiệt độc hỏa thịnh",
    phanloai: ["Phụ Khoa", "Nhiệt", "Thực", "Hỏa độc"],
    tc: ["Cổ tử cung sưng phù loét nặng chảy mủ máu", "Bụng dưới đau nhói dữ dội", "Sốt, miệng khát, tiểu đỏ", "Mạch sác dũng mãnh"],
    pdt: "Thanh nhiệt giải độc, lương huyết tiêu sang",
    bt: "Ngũ vị tiêu độc ẩm gia Hoàng bá, Đan bì",
    tpbt: ["Kim ngân hoa 15g", "Cúc hoa 10g", "Bồ công anh 15g", "Tử hoa địa đinh 12g", "Hoàng bá 12g", "Mẫu đơn bì 10g"]
  },
  "PK_ViemCoTuCung_KhieuHu": {
    stt: 406,
    hc: "Viêm cổ tử cung mạn tính do Khí hư thấp trệ",
    phanloai: ["Phụ Khoa", "Bình", "Hư thực thác tạp", "Tỳ hư thấp trệ"],
    tc: ["Khí hư ra dai dẳng màu trắng vàng loãng", "Cổ tử cung lộn tuyến loét nhẹ bệch", "Mệt mỏi, đau lưng", "Mạch nhu hoãn"],
    pdt: "Kiện tỳ ích khí, thanh nhiệt trừ thấp",
    bt: "Hoàn đới thang gia Hoàng bá, Khổ sâm",
    tpbt: ["Bạch truật 12g", "Sơn dược 12g", "Nhân sâm 10g", "Bạch thược 12g", "Thương truật 10g", "Hoàng bá 12g", "Khổ sâm 10g"]
  },
  "PK_ViemCoTuCung_HuyetU": {
    stt: 407,
    hc: "Viêm cổ tử cung mạn do Huyết ứ trệ",
    phanloai: ["Phụ Khoa", "Bình", "Thực", "Huyết ứ"],
    tc: ["Cổ tử cung phì đại tím tái", "Xuất huyết nhẹ sau quan hệ", "Bụng dưới đau nhói cố định", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, tiêu thũng chỉ thống",
    bt: "Quế chi phục linh hoàn gia Nga truật",
    tpbt: ["Quế chi 8g", "Phục linh 12g", "Mẫu đơn bì 10g", "Xích thược 12g", "Đào nhân 12g", "Nga truật 8g"]
  },
  "PK_ViemPhanPhu_ThapNhiet": {
    stt: 408,
    hc: "Viêm phần phụ cấp do Thấp nhiệt uẩn kết",
    phanloai: ["Phụ Khoa", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Bụng dưới hai bên đau quặn rát cự án", "Sốt nhẹ hoặc sốt cao, khát nước", "Khí hư vàng hôi ra nhiều", "Mạch nhu sác dũng mãnh"],
    pdt: "Thanh nhiệt lợi thấp, hành khí hóa ứ chỉ thống",
    bt: "Đại hoàng mẫu đơn bì thang gia giảm",
    tpbt: ["Đại hoàng 12g", "Mẫu đơn bì 10g", "Đào nhân 12g", "Hạt dưa qua lâu 12g", "Mang tiêu 10g", "Kim ngân hoa 15g", "Bồ công anh 15g"]
  },
  "PK_ViemPhanPhu_KhiTreHuyetU": {
    stt: 409,
    hc: "Viêm phần phụ mạn do Khí trệ huyết ứ",
    phanloai: ["Phụ Khoa", "Bình", "Thực", "Khí trệ huyết ứ"],
    tc: ["Đau âm ỉ quặn hai bên hố chậu kéo dài", "Đau tăng khi đi lại hoặc quan hệ", "Kinh nguyệt có cục máu đông", "Mạch huyền sáp"],
    pdt: "Hành khí hoạt huyết, hóa ứ khu mẫn chỉ thống",
    bt: "Cách hạ trục ứ thang gia Cát cánh, Hương phụ",
    tpbt: ["Đương quy 12g", "Xuyên khung 10g", "Đào nhân 12g", "Hồng hoa 8g", "Chỉ xác 8g", "Hương phụ 10g", "Ngũ linh chi 10g"]
  },
  "PK_ViemPhanPhu_HanThap": {
    stt: 410,
    hc: "Viêm phần phụ mạn do Hàn thấp ngưng trệ",
    phanloai: ["Phụ Khoa", "Hàn", "Hư thực thác tạp", "Hàn thấp ngưng trệ"],
    tc: ["Bụng dưới hai bên đau lạnh âm ỉ, chườm ấm bớt", "Khí hư ra trong loãng nhiều", "Tay chân lạnh, sợ lạnh", "Mạch trầm trì"],
    pdt: "Ôn kinh tán hàn, trừ thấp hóa ứ chỉ thống",
    bt: "Thiếu phúc trục ứ thang gia giảm",
    tpbt: ["Can khương 6g", "Nhục quế 6g", "Tiểu hồi hương 8g", "Đương quy 12g", "Xuyên khung 10g", "Xích thược 12g", "Bồ hoàng 10g"]
  },
  "PK_ViemPhanPhu_NhietDoc": {
    stt: 411,
    hc: "Viêm phần phụ cấp biến chứng Khối áp xe do Nhiệt độc",
    phanloai: ["Phụ Khoa", "Nhiệt", "Thực", "Hỏa độc bài nùng"],
    tc: ["Sốt cao rét run, bụng dưới đau quặn dữ dội", "Sờ thấy khối căng đau ở hố chậu", "Khí hư mủ máu hôi thối", "Mạch sác dũng mãnh"],
    pdt: "Thanh nhiệt giải độc, bài nùng tiêu ứ",
    bt: "Thiên kim vị kinh thang hợp Tiên phương hoạt mệnh ẩm",
    tpbt: ["Vĩ kinh 20g", "Đông qua nhân 15g", "Ý dĩ 15g", "Đào nhân 12g", "Kim ngân hoa 15g", "Bồ công anh 15g", "Nhũ hương 6g", "Một dược 6g"]
  },
  "PK_ViemKhungChau_KhieuHuHuyetU": {
    stt: 412,
    hc: "Viêm vùng chậu mạn do Khí hư huyết ứ",
    phanloai: ["Phụ Khoa", "Bình", "Hư thực thác tạp", "Khí hư huyết ứ"],
    tc: ["Bụng dưới trướng đau dai dẳng lâu ngày", "Lao động nặng đau tăng, mệt mỏi hụt hơi", "Kinh nguyệt kéo dài sắc nhạt có cục", "Mạch tế sáp vô lực"],
    pdt: "Bổ khí hoạt huyết, hóa ứ chỉ thống",
    bt: "Bổ dương hoàn ngũ thang gia Đan sâm, Hương phụ",
    tpbt: ["Hoàng kỳ 60g", "Đương quy vĩ 12g", "Xích thược 12g", "Đào nhân 10g", "Hồng hoa 8g", "Địa long 10g", "Đan sâm 15g", "Hương phụ 10g"]
  },
  "PK_ViemKhungChau_ThapNhietUan": {
    stt: 413,
    hc: "Viêm vùng chậu mạn do Thấp nhiệt dư uẩn",
    phanloai: ["Phụ Khoa", "Nhiệt", "Hư thực thác tạp", "Thấp nhiệt uẩn kết"],
    tc: ["Bụng dưới trướng nặng đau rát hằng ngày", "Mệt mỏi sốt nhẹ về chiều", "Khí hư vàng dính", "Mạch nhu sác"],
    pdt: "Thanh nhiệt lợi thấp, thông lạc chỉ thống",
    bt: "Ý dĩ nhân phụ tử bại tương tán gia giảm",
    tpbt: ["Ý dĩ nhân 15g", "Phụ tử chế 8g", "Bại tương thảo 15g", "Kim ngân hoa 15g", "Bồ công anh 15g", "Xích thược 12g"]
  },
  "PK_ViemKhungChau_HanNgung": {
    stt: 414,
    hc: "Viêm vùng chậu mạn do Thận hư hàn ngưng",
    phanloai: ["Phụ Khoa", "Hàn", "Hư thực thác tạp", "Thận hư hàn ngưng"],
    tc: ["Bụng dưới và thắt lưng đau lạnh dai dẳng", "Gặp lạnh đau tăng, chườm ấm dễ chịu", "Tiểu đêm nhiều, sợ lạnh", "Mạch trầm tế trì"],
    pdt: "Bổ thận ôn kinh, tán hàn chỉ thống",
    bt: "Noãn can tiễn hợp Thiếu phúc trục ứ thang",
    tpbt: ["Tiểu hồi hương 8g", "Nhục quế 6g", "Đương quy 12g", "Ô dược 10g", "Can khương 6g", "Xích thược 12g", "Đào nhân 12g"]
  },
  "PK_ThaiLau_ThanHu": {
    stt: 415,
    hc: "Thai lậu (Dọa sảy thai) do Thận hư bất cố",
    phanloai: ["Sản Khoa", "Bình", "Hư", "Thận hư bất cố"],
    tc: ["Mang thai ra chút ít máu tươi/dịch hồng âm đạo", "Bụng dưới và thắt lưng đau mỏi âm ỉ", "Tiểu đêm nhiều lần, tai ù", "Mạch trầm tế nhược"],
    pdt: "Bổ thận cố xung, an thai chỉ huyết",
    bt: "Thọ thai hoàn",
    tpbt: ["Thỏ ty tử 12g", "Tang ký sinh 12g", "Tục đoạn 12g", "A giao 10g"]
  },
  "PK_ThaiLau_KhieuHu": {
    stt: 416,
    hc: "Thai lậu do Khí hư không nhiếp huyết",
    phanloai: ["Sản Khoa", "Bình", "Hư", "Khí hư không nhiếp huyết"],
    tc: ["Mang thai ra máu nhạt loãng ở âm đạo", "Bụng dưới nặng trướng chèn xuống", "Sắc mặt nhợt nhạt, mệt mỏi hụt hơi", "Mạch hư nhược"],
    pdt: "Bổ khí kiện tỳ, cố xung an thai",
    bt: "Cử nguyên thang gia A giao, Tục đoạn",
    tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Bạch truật 12g", "Chích cam thảo 6g", "Thăng ma 6g", "A giao 10g", "Tục đoạn 12g"]
  },
  "PK_ThaiLau_HuyetNhiet": {
    stt: 417,
    hc: "Thai lậu do Huyết nhiệt bức thai",
    phanloai: ["Sản Khoa", "Nhiệt", "Thực", "Huyết nhiệt"],
    tc: ["Mang thai ra máu đỏ tươi hoặc đỏ sẫm đặc", "Mặt đỏ, tâm phiền bứt rứt, miệng khát", "Tiểu đỏ, đại tiện táo", "Lưỡi đỏ rêu vàng", "Mạch sác hữu lực"],
    pdt: "Thanh nhiệt lương huyết, an thai chỉ huyết",
    bt: "Bảo âm sản gia Ngó sen sao đen",
    tpbt: ["Sinh địa 16g", "Thục địa 16g", "Bạch thược 12g", "Hoàng bá 12g", "Tri mẫu 12g", "Mẫu đơn bì 10g", "Tục đoạn 12g", "Cam thảo 6g"]
  },
  "PK_ThaiLau_HuyetU": {
    stt: 418,
    hc: "Thai lậu do Huyết ứ bao thai",
    phanloai: ["Sản Khoa", "Bình", "Thực", "Huyết ứ"],
    tc: ["Mang thai ra máu ra đợt màu tím đen có cục", "Bụng dưới đau nhói cố định cự án", "Lưỡi tím sẫm", "Mạch sáp"],
    pdt: "Hoạt huyết hòa huyết, an thai chỉ huyết",
    bt: "Quế chi phục linh hoàn gia Tục đoạn, A giao",
    tpbt: ["Quế chi 8g", "Phục linh 12g", "Mẫu đơn bì 10g", "Xích thược 12g", "Đào nhân 10g", "Tục đoạn 12g", "A giao 10g"]
  },
  "PK_ThaiLau_NgoaiThuong": {
    stt: 419,
    hc: "Thai lậu do Ngoại thương dằn xóc",
    phanloai: ["Sản Khoa", "Bình", "Thực", "Ngoại thương chấn động"],
    tc: ["Mang thai sau té ngã/dằn xóc bụng dưới đau quặn", "Âm đạo xuất huyết đỏ tươi", "Mệt mỏi bàng hoàng", "Mạch huyền tế"],
    pdt: "Hòa huyết an thai, chỉ thống chỉ huyết",
    bt: "Thánh dũ thang gia A giao, Tục đoạn, Ngó sen",
    tpbt: ["Nhân sâm 10g", "Hoàng kỳ 16g", "Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g", "A giao 10g", "Tục đoạn 12g"]
  },
  "PK_ThaiDong_ThanHu": {
    stt: 420,
    hc: "Thai động bất an do Thận hư suy",
    phanloai: ["Sản Khoa", "Bình", "Hư", "Thận hư"],
    tc: ["Mang thai bụng dưới đau quặn, thai trồi sụt bất an", "Đau mỏi thắt lưng dữ dội", "Ra rỉ rả dịch hồng âm đạo", "Mạch trầm tế nhược"],
    pdt: "Bổ thận ích tinh, cố xung an thai",
    bt: "Cố thai hoàn",
    tpbt: ["Thỏ ty tử 12g", "Tang ký sinh 12g", "Tục đoạn 12g", "A giao 10g", "Bạch truật 12g", "Hoài sơn 12g", "Đỗ trọng 12g"]
  },
  "PK_ThaiDong_TyKhieuHu": {
    stt: 421,
    hc: "Thai động bất an do Tỳ khí hư nhược",
    phanloai: ["Sản Khoa", "Bình", "Hư", "Tỳ hư"],
    tc: ["Mang thai bụng dưới trướng chèn đau", "Ăn uống kém, đại tiện lỏng nhão", "Mệt mỏi vô lực, mặt vàng nhợt", "Mạch hoãn nhược"],
    pdt: "Kiện tỳ ích khí, bổ trung an thai",
    bt: "Hương sa lục quân tử thang gia Tục đoạn",
    tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Cam thảo 6g", "Trần bì 6g", "Bán hạ 10g", "Mộc hương 6g", "Sa nhân 6g", "Tục đoạn 12g"]
  },
  "PK_ThaiDong_HuyetNhiet": {
    stt: 422,
    hc: "Thai động bất an do Huyết nhiệt hỏa bức",
    phanloai: ["Sản Khoa", "Nhiệt", "Thực", "Huyết nhiệt"],
    tc: ["Thai động máy đạp liên tục đau quặn bụng", "Ngực phiền nhiệt, mặt đỏ miệng khô", "Tiểu vàng đại tiện táo", "Mạch sác hữu lực"],
    pdt: "Thanh nhiệt lương huyết, dưỡng can an thai",
    bt: "Đương quy thược dược tán gia Hoàng cầm, Bạch truật",
    tpbt: ["Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g", "Bạch truật 12g", "Phục linh 12g", "Hoàng cầm 10g"]
  },
  "PK_ThaiDong_KhieuTre": {
    stt: 423,
    hc: "Thai động bất an do Khí trệ uất kết",
    phanloai: ["Sản Khoa", "Bình", "Thực", "Khí trệ"],
    tc: ["Mang thai ngực sườn trướng đau, bụng trướng căng", "Thai động xốc lên trên làm khó thở", "Tinh thần u uất hay cáu giận", "Mạch huyền"],
    pdt: "Sơ can lý khí, hòa vị an thai",
    bt: "Tử tô ẩm",
    tpbt: ["Tô diệp 10g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g", "Trần bì 6g", "Phục linh 12g", "Đại phúc bì 10g", "Chích cam thảo 6g"]
  },
  "PK_ThaiDong_DamThap": {
    stt: 424,
    hc: "Thai động bất an do Đàm thấp ứ trệ",
    phanloai: ["Sản Khoa", "Bình", "Thực", "Đàm thấp"],
    tc: ["Mang thai thai động đau bụng trướng nặng", "Nôn nao ra nhiều đờm dãi, lợm mửa", "Thân thể mỏi nặng", "Mạch nhu hoạt"],
    pdt: "Táo thấp hóa đàm, hòa vị an thai",
    bt: "Chưng đàm hoàn gia Tục đoạn, Tô diệp",
    tpbt: ["Bán hạ 10g", "Trần bì 6g", "Phục linh 12g", "Cam thảo 6g", "Tô diệp 8g", "Tục đoạn 12g", "Sa nhân 6g"]
  },
  "PK_AcTro_TyViHuHan": {
    stt: 425,
    hc: "Ác trở (Ốm nghén nặng) do Tỳ Vị hư hàn",
    phanloai: ["Sản Khoa", "Hàn", "Hư", "Tỳ Vị hư hàn"],
    tc: ["Mang thai nôn mửa liên tục ra nước trong nhạt miệng", "Ăn vào nôn ra ngay, sợ mùi thức ăn", "Sợ lạnh tay chân lạnh", "Mạch trầm tế hoãn"],
    pdt: "Ôn trung kiện tỳ, giáng nghịch chỉ nôn an thai",
    bt: "Can khương nhân sâm bán hạ thang",
    tpbt: ["Can khương 8g", "Nhân sâm 10g", "Bán hạ chế 10g", "Sinh khương 6g", "Bạch truật 12g"]
  },
  "PK_AcTro_CanViBatHoa": {
    stt: 426,
    hc: "Ác trở do Can Vị bất hòa (Can hỏa thượng nghịch)",
    phanloai: ["Sản Khoa", "Nhiệt", "Hư thực thác tạp", "Can Vị bất hòa"],
    tc: ["Ốm nghén nôn ra nước đắng vàng hoặc nước chua", "Miệng đắng họng khô, ngực sườn trướng đau", "Dễ giận dữ cáu gắt", "Mạch huyền sác"],
    pdt: "Sơ can hòa vị, thanh nhiệt giáng nghịch chỉ nôn",
    bt: "Túc quái thang gia Hoàng liên, Trúc nhự",
    tpbt: ["Bán hạ chế 10g", "Trần bì 6g", "Phục linh 12g", "Sinh khương 6g", "Hoàng liên 8g", "Trúc nhự 8g", "Bạch thược 12g", "Cam thảo 6g"]
  },
  "PK_AcTro_DamThapTrungTro": {
    stt: 427,
    hc: "Ác trở do Đàm thấp trung trở",
    phanloai: ["Sản Khoa", "Bình", "Thực", "Đàm thấp"],
    tc: ["Ốm nghén nôn ra nhiều đờm dãi dính nhớt", "Đầu choáng nặng như bó, ngực bụng trướng đầy", "Miệng nhạt dính, không khát", "Rêu dầy dính trắng", "Mạch hoạt"],
    pdt: "Kiện tỳ hóa đàm, giáng nghịch chỉ nôn",
    bt: "Tiểu bán hạ gia phục linh thang gia Trần bì, Sa nhân",
    tpbt: ["Bán hạ chế 10g", "Phục linh 12g", "Sinh khương 8g", "Trần bì 6g", "Sa nhân 6g"]
  },
  "PK_AcTro_ViHoaSuongNghich": {
    stt: 428,
    hc: "Ác trở do Vị hỏa xí thịnh (Ốm nghén nôn mửa rát ngực)",
    phanloai: ["Sản Khoa", "Nhiệt", "Thực", "Vị hỏa thượng nghịch"],
    tc: ["Nôn mửa ra thức ăn lẫn máu tươi/dịch đen rát ngực", "Khát nước thích uống lạnh", "Miệng hôi, táo bón nặng", "Mạch hoạt sác hữu lực"],
    pdt: "Thanh vị tả hỏa, giáng nghịch sinh tân",
    bt: "Thanh vị tán gia Trúc nhự, Bán hạ chế",
    tpbt: ["Hoàng liên 8g", "Thăng ma 6g", "Sinh địa 16g", "Mẫu đơn bì 10g", "Trúc nhự 8g", "Bán hạ chế 10g"]
  },
  "PK_ThaiPhu_TyHuThuyThung": {
    stt: 429,
    hc: "Thai thủy / Thai phù do Tỳ hư thủy thũng",
    phanloai: ["Sản Khoa", "Bình", "Hư thực thác tạp", "Tỳ hư thủy trệ"],
    tc: ["Mang thai tháng cuối hai chân phù thũng ấn lõm", "Mặt và mi mắt phù nhẹ vào buổi sáng", "Bụng trướng, ăn kém tiêu chảy", "Mạch nhu hoãn"],
    pdt: "Kiện tỳ lợi thủy, thẩm thấp tiêu thũng an thai",
    bt: "Phòng kỷ phục linh thang gia Bạch truật",
    tpbt: ["Phòng kỷ 10g", "Phục linh 12g", "Quế chi 8g", "Bạch truật 12g", "Cam thảo 6g"]
  },
  "PK_ThaiPhu_ThanDuongHu": {
    stt: 430,
    hc: "Thai phù do Thận dương hư suy",
    phanloai: ["Sản Khoa", "Hàn", "Hư", "Thận dương hư thủy thũng"],
    tc: ["Mang thai phù toàn thân bắt đầu từ chân căng mọng", "Sợ lạnh, tay chân lạnh ngắt, thắt lưng lạnh đau", "Tiểu tiện rất ít, sắc mặt bệch", "Mạch trầm tế trì vô lực"],
    pdt: "Ôn thận trợ dương, hóa khí lợi thủy tiêu thũng",
    bt: "Chân vũ thang gia Đỗ trọng, Tang ký sinh",
    tpbt: ["Phụ tử chế 8g", "Bạch truật 12g", "Phục linh 12g", "Bạch thược 12g", "Sinh khương 6g", "Đỗ trọng 12g", "Tang ký sinh 12g"]
  },
  "PK_ThaiPhu_KhieuTreThuyTre": {
    stt: 431,
    hc: "Thai phù do Khí trệ thủy ngưng",
    phanloai: ["Sản Khoa", "Bình", "Thực", "Khí trệ thủy ngưng"],
    tc: ["Mang thai phù thũng kèm ngực sườn trướng đau", "Da vùng phù căng bóng không ấn lõm sâu", "Hay thở dài, tâm trạng bất an", "Mạch huyền nhu"],
    pdt: "Lý khí hành thủy, tiêu trướng an thai",
    bt: "Thiên kim tử tô ẩm",
    tpbt: ["Tô diệp 10g", "Đại phúc bì 10g", "Trần bì 6g", "Phục linh 12g", "Bạch truật 12g", "Mộc hương 6g", "Cam thảo 6g"]
  },
  "PK_ThaiSuyen_PheKhieuHu": {
    stt: 432,
    hc: "Thai suyễn do Phế khí hư suy",
    phanloai: ["Sản Khoa", "Bình", "Hư", "Phế khí hư"],
    tc: ["Mang thai ho hen thở gấp khi vận động nhẹ", "Tiếng ho nhỏ yếu, hụt hơi tự hãn", "Mệt mỏi sắc mặt nhợt", "Mạch hư nhược"],
    pdt: "Bổ phế ích khí, bình suyễn an thai",
    bt: "Bổ phế thang gia Sa nhân, Tục đoạn",
    tpbt: ["Nhân sâm 10g", "Hoàng kỳ 16g", "Thục địa 16g", "Ngũ vị tử 6g", "Tang bạch bì 12g", "Tử uyển 10g", "Sa nhân 6g", "Tục đoạn 12g"]
  },
  "PK_ThaiSuyen_DamNhiet": {
    stt: 433,
    hc: "Thai suyễn do Đàm nhiệt ủng phế",
    phanloai: ["Sản Khoa", "Nhiệt", "Thực", "Đàm nhiệt"],
    tc: ["Mang thai ho hen thở khò khè", "Đờm nhiều đặc vàng hôi khó khạc", "Tức ngực sốt nhẹ khát nước", "Mạch hoạt sác"],
    pdt: "Thanh nhiệt tuyên phế, hóa đàm bình suyễn an thai",
    bt: "Định suyễn thang gia giảm",
    tpbt: ["Ma hoàng 6g", "Hạnh nhân 10g", "Tang bạch bì 12g", "Hoàng cầm 10g", "Khoản đông hoa 10g", "Tô tử 10g", "Bán hạ 10g", "Cam thảo 6g"]
  },
  "PK_ThaiGiat_CanPhongNoiDong": {
    stt: 434,
    hc: "Tử giật (Tiền giật / Co giật thai kỳ) do Can phong nội động",
    phanloai: ["Sản Khoa", "Nhiệt", "Thực", "Can phong nội động"],
    tc: ["Mang thai nhức đầu chóng mặt dữ dội rồi co giật", "Hai mắt trợn ngược, răng cắn chặt, hôn mê", "Mặt đỏ, huyết áp tăng cao", "Mạch huyền sác dũng mãnh"],
    pdt: "Bình can tức phong, trấn tĩnh khai khiếu an thai",
    bt: "Linh dương câu đằng ẩm gia Thạch quyết minh",
    tpbt: ["Linh dương giác 3g", "Câu đằng 12g", "Tang diệp 10g", "Cúc hoa 10g", "Bạch thược 12g", "Sinh địa 16g", "Mẫu đơn bì 10g", "Thạch quyết minh 20g"]
  },
  "PK_ThaiGiat_AmHuHoaVuong": {
    stt: 435,
    hc: "Tử giật do Âm hư hỏa vượng phong động",
    phanloai: ["Sản Khoa", "Nhiệt", "Hư", "Âm hư hỏa vượng"],
    tc: ["Mang thai hoa mắt chóng mặt, triều nhiệt đạo hãn", "Chân tay giật nhẹ, mặt gò má đỏ", "Phù nhẹ hai chân, lưỡi đỏ ít rêu", "Mạch tế sác"],
    pdt: "Tư âm giáng hỏa, tức phong an thai",
    bt: "Tri bá địa hoàng hoàn gia Câu đằng, Bạch thược",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Tri mẫu 12g", "Hoàng bá 12g", "Phục linh 12g", "Câu đằng 12g", "Bạch thược 12g"]
  },
  "PK_ThaiGiat_DamHoaNhieuTam": {
    stt: 436,
    hc: "Tử giật do Đàm hỏa nhiễu tâm bế khiếu",
    phanloai: ["Sản Khoa", "Nhiệt", "Thực", "Đàm hỏa bế khiếu"],
    tc: ["Mang thai sốt, tâm phiền cuồng loạn rồi co giật", "Cổ họng lọc sọc đờm dãi, mê muội", "Rêu dầy vàng nhớt", "Mạch hoạt sác"],
    pdt: "Thanh nhiệt hóa đàm, thanh tâm khai khiếu định giật",
    bt: "An cung ngưu hoàng hoàn hợp Ôn đởm thang",
    tpbt: ["Ngưu hoàng 1g", "Thủy ngưu giác 30g", "Xạ hương 0.1g", "Bán hạ 10g", "Trần bì 6g", "Phục linh 12g", "Chỉ thực 8g", "Trúc nhự 8g"]
  },
  "PK_ThaiToa_KhiHuyetLuongHu": {
    stt: 437,
    hc: "Thai tọa không phát triển (Thai chậm phát triển) do Khí huyết lưỡng hư",
    phanloai: ["Sản Khoa", "Bình", "Hư", "Khí huyết hư suy"],
    tc: ["Mang thai tử cung nhỏ hơn tuổi thai", "Sắc mặt nhợt nhạt gầy còm", "Thân thể mệt mỏi hụt hơi", "Mạch tế nhược"],
    pdt: "Song bổ khí huyết, dưỡng thai điền tủy",
    bt: "Bát trân thang gia Thỏ ty tử, Tục đoạn",
    tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Cam thảo 6g", "Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g", "Thỏ ty tử 12g", "Tục đoạn 12g"]
  },
  "PK_ThaiToa_ThanTinhBatTuc": {
    stt: 438,
    hc: "Thai chậm phát triển do Thận tinh bất túc",
    phanloai: ["Sản Khoa", "Bình", "Hư suy", "Thận tinh bất túc"],
    tc: ["Mang thai thai nhi chậm lớn", "Thắt lưng đau mỏi yếu mềm, tai ù", "Tóc bạc rụng, sợ lạnh", "Mạch trầm tế vô lực"],
    pdt: "Bổ thận điền tinh, ích tủy an thai",
    bt: "Tả quy hoàn gia Lộc giác giao, Thỏ ty tử",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Kỷ tử 12g", "Thỏ ty tử 12g", "Lộc giác giao 10g", "Quy bản giao 10g", "Đỗ trọng 12g"]
  },
  "PK_SanHau_PhatSot_HuyetHu": {
    stt: 439,
    hc: "Sản hậu phát sốt do Huyết hư",
    phanloai: ["Sản Khoa", "Bình", "Hư", "Huyết hư phát sốt"],
    tc: ["Sau sinh sốt nhẹ, triều nhiệt về chiều", "Sắc mặt nhợt, hoa mắt chóng mặt, tâm quý", "Sản dịch ra ít sắc nhạt loãng", "Mạch tế nhược"],
    pdt: "Dưỡng huyết ích khí, hòa doanh thoái nhiệt",
    bt: "Bát trân thang gia Ngân hoa, Địa cốt bì",
    tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Cam thảo 6g", "Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g", "Kim ngân hoa 15g", "Địa cốt bì 12g"]
  },
  "PK_SanHau_PhatSot_HuyetU": {
    stt: 440,
    hc: "Sản hậu phát sốt do Huyết ứ ngưng trệ (Sản dịch ứ)",
    phanloai: ["Sản Khoa", "Bình", "Thực", "Huyết ứ phát sốt"],
    tc: ["Sau sinh sốt cao hoặc phát sốt rét run từng cơn", "Bụng dưới đau quặn cự án", "Sản dịch ra ít tím đen hôi hám", "Lưỡi tím sẫm điểm ứ huyết", "Mạch trầm sáp"],
    pdt: "Hoạt huyết hóa ứ, thông trệ thoái nhiệt",
    bt: "Sanh hóa thang gia Đan sâm, Ngưu tất, Kim ngân hoa",
    tpbt: ["Đương quy 12g", "Xuyên khung 10g", "Đào nhân 12g", "Can khương sao 6g", "Chích cam thảo 6g", "Đan sâm 15g", "Ngưu tất 12g", "Kim ngân hoa 15g"]
  },
  "PK_SanHau_PhatSot_NgoaiCam": {
    stt: 441,
    hc: "Sản hậu phát sốt do Ngoại cảm phong hàn/phong nhiệt",
    phanloai: ["Sản Khoa", "Nhiệt", "Thực", "Ngoại cảm tà khí"],
    tc: ["Sau sinh sốt sợ gió sợ lạnh, đau đầu đau mỏi thân thể", "Ho hắt hơi chảy nước mũi", "Mạch phù sác hoặc phù khẩn"],
    pdt: "Thấu biểu giải tà, hòa doanh chỉ sốt",
    bt: "Kinh phòng bại độc tán gia giảm",
    tpbt: ["Kinh giới 10g", "Phòng phong 10g", "Khương hoạt 10g", "Độc hoạt 10g", "Sài hồ 8g", "Cát cánh 8g", "Chỉ xác 8g", "Cam thảo 6g"]
  },
  "PK_SanHau_PhatSot_NhietDoc": {
    stt: 442,
    hc: "Sản hậu phát sốt do Nhiệt độc nhiễm trùng (Nhiễm trùng sản hậu)",
    phanloai: ["Sản Khoa", "Nhiệt", "Thực", "Nhiệt độc hỏa thịnh"],
    tc: ["Sau sinh sốt cao rét run dữ dội, nói lảm nhảm", "Bụng dưới đau quặn không cho chạm vào", "Sản dịch mủ máu hôi thối dữ dội", "Mạch sác hữu lực dũng mãnh"],
    pdt: "Thanh nhiệt giải độc, lương huyết hóa ứ",
    bt: "Giải độc tiễn hợp Tê giác địa hoàng thang",
    tpbt: ["Hoàng liên 8g", "Hoàng cầm 12g", "Hoàng bá 12g", "Chi tử 12g", "Thủy ngưu giác 30g", "Sinh địa 16g", "Xích thược 12g", "Mẫu đơn bì 10g"]
  },
  "PK_SanHau_DauBung_HuyetU": {
    stt: 443,
    hc: "Sản hậu đau bụng do Huyết ứ (Sản hậu nhiễu thống)",
    phanloai: ["Sản Khoa", "Bình", "Thực", "Huyết ứ"],
    tc: ["Sau sinh bụng dưới đau quặn từng cơn cự án", "Sản dịch ra màu tím đen có cục", "Ra cục máu bớt đau hẳn", "Mạch trầm sáp"],
    pdt: "Hoạt huyết hóa ứ, ôn kinh chỉ thống",
    bt: "Sanh hóa thang",
    tpbt: ["Đương quy 12g", "Xuyên khung 10g", "Đào nhân 12g", "Can khương sao 6g", "Chích cam thảo 6g"]
  },
  "PK_SanHau_DauBung_HuyetHu": {
    stt: 444,
    hc: "Sản hậu đau bụng do Huyết hư bào cung thất dưỡng",
    phanloai: ["Sản Khoa", "Bình", "Hư", "Huyết hư"],
    tc: ["Sau sinh bụng dưới đau âm ỉ dai dẳng", "Thích chườm ấm xoa bóp", "Sản dịch ra ít sắc nhạt loãng", "Sắc mặt nhợt nhạt", "Mạch tế nhược"],
    pdt: "Bổ huyết ích khí, ôn kinh chỉ thống",
    bt: "Đương quy kiến trung thang",
    tpbt: ["Đương quy 12g", "Quế chi 8g", "Bạch thược 16g", "Sinh khương 8g", "Đại táo 12g", "Chích cam thảo 6g", "Di đường 30g"]
  },
  "PK_SanHau_DauBung_HanNgung": {
    stt: 445,
    hc: "Sản hậu đau bụng do Hàn ngưng huyết trệ",
    phanloai: ["Sản Khoa", "Hàn", "Thực", "Hàn ngưng huyết ứ"],
    tc: ["Sau sinh bụng dưới đau quặn lạnh ngắt khi gặp gió/nước lạnh", "Chườm ấm đau giảm, tay chân lạnh", "Sản dịch tím đen ít", "Mạch trầm khẩn"],
    pdt: "Ôn kinh tán hàn, hoạt huyết chỉ thống",
    bt: "Sanh hóa thang gia Nhục quế, Ngô thù du",
    tpbt: ["Đương quy 12g", "Xuyên khung 10g", "Đào nhân 12g", "Can khương sao 6g", "Nhục quế 6g", "Ngô thù du 6g", "Chích cam thảo 6g"]
  },
  "PK_SanHau_DauBung_ThucTich": {
    stt: 446,
    hc: "Sản hậu đau bụng do Thực tích trệ Vị quản",
    phanloai: ["Sản Khoa", "Bình", "Thực", "Thực tích"],
    tc: ["Sau sinh bụng thượng vị và bụng dưới trướng đau cự án", "Ợ hôi chua, buồn nôn trớ thức ăn thối", "Đại tiện hôi thối bế kết", "Rêu dầy nhớt", "Mạch hoạt sác"],
    pdt: "Tiêu thực đạo trệ, hòa vị chỉ thống",
    bt: "Bảo hòa hoàn gia Đương quy",
    tpbt: ["Sơn tra 10g", "Thần khúc 10g", "Lai phục tử 10g", "Bán hạ 10g", "Trần bì 6g", "Phục linh 12g", "Liên kiều 10g", "Đương quy 12g"]
  },
  "PK_SanHau_SanDichKhongDut_KhieuHu": {
    stt: 447,
    hc: "Sản dịch không dứt do Khí hư thất thu",
    phanloai: ["Sản Khoa", "Bình", "Hư", "Khí hư không nhiếp huyết"],
    tc: ["Sau sinh sản dịch chảy rỉ rả dai dẳng quá 3 tuần", "Sắc dịch nhạt loãng không hôi", "Mệt mỏi hụt hơi, bụng nặng chèn", "Mạch hư nhược"],
    pdt: "Bổ khí kiện tỳ, cố xung sáp dịch",
    bt: "Bổ trung ích khí thang gia A giao, Tục đoạn",
    tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Bạch truật 12g", "Trần bì 6g", "Thăng ma 6g", "Sài hồ 6g", "A giao 10g", "Tục đoạn 12g", "Cam thảo 6g"]
  },
  "PK_SanHau_SanDichKhongDut_HuyetNhiet": {
    stt: 448,
    hc: "Sản dịch không dứt do Huyết nhiệt vọng hành",
    phanloai: ["Sản Khoa", "Nhiệt", "Thực", "Huyết nhiệt"],
    tc: ["Sản dịch ra rỉ rả không ngừng sắc đỏ tươi đặc", "Miệng khát khát nước, mặt đỏ", "Tiểu đỏ, đại tiện táo", "Mạch sác hữu lực"],
    pdt: "Thanh nhiệt lương huyết, chỉ huyết chỉ dịch",
    bt: "Bảo âm sản gia Ngó sen sao",
    tpbt: ["Sinh địa 16g", "Thục địa 16g", "Bạch thược 12g", "Hoàng bá 12g", "Tri mẫu 12g", "Mẫu đơn bì 10g", "Tục đoạn 12g", "Ngó sen 12g"]
  },
  "PK_SanHau_SanDichKhongDut_HuyetU": {
    stt: 449,
    hc: "Sản dịch không dứt do Huyết ứ bao cung",
    phanloai: ["Sản Khoa", "Bình", "Thực", "Huyết ứ"],
    tc: ["Sản dịch chảy kéo dài sắc tím đen có cục nhỏ hôi", "Bụng dưới đau nhói cự án", "Lưỡi tím sẫm", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, trừ cũ sinh mới",
    bt: "Sanh hóa thang gia Bồ hoàng, Tam thất",
    tpbt: ["Đương quy 12g", "Xuyên khung 10g", "Đào nhân 12g", "Can khương sao 6g", "Chích cam thảo 6g", "Bồ hoàng 10g", "Tam thất 6g"]
  },
  "PK_SanHau_SanDichKhongDut_HanThung": {
    stt: 450,
    hc: "Sản dịch không dứt do Hàn ngưng bao cung",
    phanloai: ["Sản Khoa", "Hàn", "Thực", "Hàn ngưng"],
    tc: ["Sản dịch chảy dai dẳng sắc xám đen loãng lạnh", "Bụng dưới lạnh đau âm ỉ, sợ lạnh", "Tay chân lạnh", "Mạch trầm trì"],
    pdt: "Ôn kinh tán hàn, hoạt huyết sáp dịch",
    bt: "Sanh hóa thang gia Nhục quế, Ngô thù du",
    tpbt: ["Đương quy 12g", "Xuyên khung 10g", "Đào nhân 12g", "Can khương sao 6g", "Nhục quế 6g", "Ngô thù du 6g", "Cam thảo 6g"]
  },
  "PK_SanHau_KhuyetNhu_KhiHuyetHu": {
    stt: 451,
    hc: "Sản hậu khuyết nhũ (Mất sữa/Thiếu sữa) do Khí huyết hư suy",
    phanloai: ["Sản Khoa", "Bình", "Hư", "Khí huyết hư suy"],
    tc: ["Sau sinh sữa không có hoặc ra rất ít loãng", "Vú mềm nhão không trướng đau", "Sắc mặt nhợt nhạt, mệt mỏi hụt hơi", "Mạch tế nhược"],
    pdt: "Song bổ khí huyết, thông lạc hạ sữa",
    bt: "Thông nhũ đan",
    tpbt: ["Nhân sâm 10g", "Hoàng kỳ 16g", "Đương quy 12g", "Mạch môn 12g", "Mộc thông 8g", "Vương bất lưu hành 12g", "Xuyên sơn giáp gia thay thế 6g"]
  },
  "PK_SanHau_KhuyetNhu_CanUatKhieuTre": {
    stt: 452,
    hc: "Sản hậu khuyết nhũ do Can khí uất trệ (Tắc tia sữa)",
    phanloai: ["Sản Khoa", "Bình", "Thực", "Can uất khí trệ"],
    tc: ["Sau sinh vú trướng căng cứng đau dữ dội nhưng sữa không ra", "Sốt nhẹ, tinh thần u uất cáu giận", "Ngực sườn đầy tức", "Mạch huyền"],
    pdt: "Sơ can giải uất, thông lạc hạ sữa tiêu trướng",
    bt: "Ngưng nhũ thang gia Hương phụ, Vương bất lưu hành",
    tpbt: ["Sài hồ 10g", "Bạch thược 12g", "Chỉ xác 8g", "Thăng ma 6g", "Mộc thông 8g", "Vương bất lưu hành 12g", "Hương phụ 10g"]
  },
  "PK_SanHau_KhuyetNhu_DamThap": {
    stt: 453,
    hc: "Sản hậu khuyết nhũ do Đàm thấp trở trệ nhũ mạch",
    phanloai: ["Sản Khoa", "Bình", "Thực", "Đàm thấp"],
    tc: ["Sữa không ra hoặc ra rất ít dính đặc nghẽn", "Người béo bệu, vú to nhão trướng nặng", "Nôn nao đờm dãi, rêu dầy nhớt", "Mạch nhu hoạt"],
    pdt: "Kiện tỳ hóa đàm, thông lạc hạ sữa",
    bt: "Thương truật đạo đàm thang gia Mộc thông, Thông thảo",
    tpbt: ["Thương truật 10g", "Bán hạ 10g", "Trần bì 6g", "Phục linh 12g", "Mộc thông 8g", "Thông thảo 6g", "Hương phụ 10g"]
  },
  "PK_SanHau_KhuyetNhu_ThapNhiet": {
    stt: 454,
    hc: "Sản hậu khuyết nhũ do Thấp nhiệt uẩn kết tuyến vú",
    phanloai: ["Sản Khoa", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Sữa tắc bết vàng hôi, vú nóng đỏ sưng đau", "Sốt, miệng đắng, tiểu vàng ngắn", "Lưỡi đỏ rêu vàng nhớt", "Mạch nhu sác"],
    pdt: "Thanh nhiệt lợi thấp, thông lạc bài sữa",
    bt: "Long đởm tả can thang gia Mộc thông, Bồ công anh",
    tpbt: ["Long đởm thảo 12g", "Hoàng cầm 12g", "Chi tử 12g", "Mộc thông 8g", "Bồ công anh 15g", "Sài hồ 8g"]
  },
  "PK_SanHau_ApxeVu_NhietDoc": {
    stt: 455,
    hc: "Sản hậu áp xe vú (Áp xe tuyến vú) do Hỏa độc uẩn kết",
    phanloai: ["Sản Khoa", "Nhiệt", "Thực", "Hỏa độc bài nùng"],
    tc: ["Vú sưng to tấy đỏ nóng đau dữ dội cự án", "Hóa mủ mưng đau nhói, sốt cao rét run", "Miệng khát, nước tiểu đỏ", "Mạch sác hữu lực dũng mãnh"],
    pdt: "Thanh nhiệt giải độc, tiêu thũng bài nùng chỉ thống",
    bt: "Vũ dung tán gia Kim ngân hoa, Bồ công anh",
    tpbt: ["Kim ngân hoa 15g", "Bồ công anh 15g", "Cúc hoa 10g", "Tử hoa địa đinh 12g", "Bạch chỉ 10g", "Xuyên sơn giáp gia 6g", "Nhũ hương 6g"]
  },
  "PK_SanHau_ApxeVu_CanHoa": {
    stt: 456,
    hc: "Sản hậu áp xe vú do Can uất hóa hỏa",
    phanloai: ["Sản Khoa", "Nhiệt", "Thực", "Can hỏa độc"],
    tc: ["Vú sưng đau rát bứt rứt sau xúc động cáu giận", "Mặt đỏ, miệng đắng, sốt cao", "Tiểu tiện đỏ táo bón", "Mạch huyền sác"],
    pdt: "Sơ can thanh nhiệt, giải độc tiêu ung",
    bt: "Sài hồ thanh can thang gia Bồ công anh",
    tpbt: ["Sài hồ 10g", "Hoàng cầm 12g", "Chi tử 12g", "Sinh địa 16g", "Xích thược 12g", "Bồ công anh 15g", "Kim ngân hoa 15g", "Cam thảo 6g"]
  },
  "PK_SanHau_BongVu_KhieuTre": {
    stt: 457,
    hc: "Sản hậu bóng vú (Trướng sữa) do Khí trệ nhũ mạch",
    phanloai: ["Sản Khoa", "Bình", "Thực", "Khí trệ"],
    tc: ["Hai bầu vú căng bóng cứng như đá đau nhức", "Sữa rỉ rả không chảy thành dòng", "Sốt nhẹ do ứ sữa", "Mạch huyền hoãn"],
    pdt: "Sơ thông nhũ mạch, hành khí tiêu trướng",
    bt: "Tô diệp tán gia Vương bất lưu hành, Mộc thông",
    tpbt: ["Tô diệp 10g", "Trần bì 6g", "Chỉ xác 8g", "Mộc thông 8g", "Vương bất lưu hành 12g", "Cam thảo 6g"]
  },
  "PK_SanHau_TuHan_KhiHu": {
    stt: 458,
    hc: "Sản hậu tự hãn do Khí hư biểu bất cố",
    phanloai: ["Sản Khoa", "Bình", "Hư", "Khí hư biểu hư"],
    tc: ["Sau sinh mồ hôi vã ra liên tục bất kể ngày đêm", "Vận động nhẹ mồ hôi ra như tắm", "Sợ gió, mệt mỏi hụt hơi, mặt nhợt", "Mạch nhược hoãn"],
    pdt: "Ích khí cố biểu, liễm hãn chỉ mồ hôi",
    bt: "Ngọc bình phong tán gia Mẫu lệ, Phù tiểu mạch",
    tpbt: ["Hoàng kỳ 20g", "Bạch truật 12g", "Phòng phong 10g", "Mẫu lệ 15g", "Phù tiểu mạch 15g", "Chích cam thảo 6g"]
  },
  "PK_SanHau_DaoHan_AmHu": {
    stt: 459,
    hc: "Sản hậu đạo hãn do Âm hư nội nhiệt",
    phanloai: ["Sản Khoa", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Sau sinh khi ngủ mồ hôi trộm chảy ra ướt áo", "Tỉnh giấc mồ hôi dừng ngay", "Triều nhiệt gò má đỏ, lòng bàn tay chân nóng", "Mạch tế sác"],
    pdt: "Tư âm thanh nhiệt, liễm hãn an thần",
    bt: "Đương quy lục hoàng thang gia Phù tiểu mạch",
    tpbt: ["Đương quy 12g", "Thục địa 16g", "Sinh địa 16g", "Hoàng kỳ 20g", "Hoàng liên 8g", "Hoàng cầm 12g", "Hoàng bá 12g", "Phù tiểu mạch 15g"]
  },
  "PK_SanHau_TieuTienKhongThong_KhieuHu": {
    stt: 460,
    hc: "Sản hậu bí tiểu (Tiểu tiện không thông) do Khí hư bất hóa",
    phanloai: ["Sản Khoa", "Bình", "Hư", "Khí hư bất hóa"],
    tc: ["Sau sinh bụng dưới trướng căng nhưng không tiểu được", "Muốn tiểu mà rặn không ra", "Thần tinh mệt mỏi hụt hơi", "Mạch hư nhược hoãn"],
    pdt: "Bổ khí thăng dương, hóa khí lợi thủy",
    bt: "Bổ trung ích khí thang gia Thông thảo, Mộc thông",
    tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Bạch truật 12g", "Trần bì 6g", "Thăng ma 6g", "Sài hồ 6g", "Thông thảo 6g", "Mộc thông 8g"]
  },
  "PK_SanHau_TieuTienKhongThong_HuyetU": {
    stt: 461,
    hc: "Sản hậu bí tiểu do Huyết ứ chèn ép bàng quang",
    phanloai: ["Sản Khoa", "Bình", "Thực", "Huyết ứ"],
    tc: ["Sau sinh bụng dưới đau quặn cự án không tiểu được", "Sản dịch tím đen ra ít", "Lưỡi tím sẫm", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, thông lâm lợi niệu",
    bt: "Sanh hóa thang gia Ngưu tất, Mộc thông, Xa tiền tử",
    tpbt: ["Đương quy 12g", "Xuyên khung 10g", "Đào nhân 12g", "Can khương sao 6g", "Ngưu tất 12g", "Mộc thông 8g", "Xa tiền tử 12g"]
  },
  "PK_SanHau_DaiDam_ThanHu": {
    stt: 462,
    hc: "Sản hậu đái dầm (Tiểu tiện không tự chủ) do Thận khí hư suy",
    phanloai: ["Sản Khoa", "Bình", "Hư suy", "Thận khí hư"],
    tc: ["Sau sinh đi tiểu rỉ rả dầm dề không kiểm soát được", "Nước tiểu trong dài", "Thắt lưng mỏi lạnh, sợ lạnh", "Mạch trầm tế trì"],
    pdt: "Bổ thận ích khí, ôn bàng quang sáp niệu",
    bt: "Tang phiêu tiêu tán hợp Củng đái hoàn",
    tpbt: ["Tang phiêu tiêu 12g", "Ích trí nhân 10g", "Bổ cốt chỉ 12g", "Hoài sơn 12g", "Phục linh 12g", "Long cốt 15g", "Mẫu lệ 15g"]
  },
  "PK_SanHau_TaoBon_HuyetHu": {
    stt: 463,
    hc: "Sản hậu táo bón do Huyết hư tràng táo",
    phanloai: ["Sản Khoa", "Bình", "Hư", "Huyết hư tràng táo"],
    tc: ["Sau sinh nhiều ngày không đi tiêu được", "Phân khô cứng như phân dê rặn khó", "Sắc mặt nhợt nhạt khô xơ", "Mạch tế sáp"],
    pdt: "Dưỡng huyết nhuận tràng, thông tiện",
    bt: "Tứ vật thang gia Ma tử nhân, Bá tử nhân",
    tpbt: ["Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g", "Ma tử nhân 12g", "Bá tử nhân 10g"]
  },
  "PK_SanHau_TaoBon_KhieuHu": {
    stt: 464,
    hc: "Sản hậu táo bón do Khí hư tràng nhược",
    phanloai: ["Sản Khoa", "Bình", "Hư", "Khí hư tràng nhược"],
    tc: ["Sau sinh có cảm giác muốn tiêu nhưng rặn không ra", "Rặn nhiều vã mồ hôi hụt hơi", "Phân mềm không khô cứng", "Mạch hư nhược hoãn"],
    pdt: "Bổ khí nhuận tràng, ích khí thông tiện",
    bt: "Hoàng kỳ thang gia Ma tử nhân",
    tpbt: ["Hoàng kỳ 16g", "Trần bì 6g", "Bạch truật 12g", "Đương quy 12g", "Hỏa ma nhân 12g", "Chích cam thảo 6g"]
  },
  "PK_SanHau_ThieuMau_KhiHuyetSuy": {
    stt: 465,
    hc: "Sản hậu thiếu máu suy nhược do Khí huyết kiệt suy",
    phanloai: ["Sản Khoa", "Bình", "Hư suy", "Khí huyết suy kiệt"],
    tc: ["Sau sinh mất máu nhiều, sắc mặt bệch tái như ngà", "Mệt mỏi kiệt sức, đầu choáng mắt hoa", "Môi móng tay chân nhợt trắng", "Mạch vi tế nhược"],
    pdt: "Đại bổ khí huyết, hồi sinh bổ hư",
    bt: "Thập toàn đại bổ thang gia A giao",
    tpbt: ["Nhân sâm 10g", "Bạch truật 12g", "Phục linh 12g", "Cam thảo 6g", "Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g", "Hoàng kỳ 16g", "Nhục quế 4g", "A giao 10g"]
  },
  "PK_SanHau_ChongMat_HuyetHu": {
    stt: 466,
    hc: "Sản hậu huyễn vựng (Chóng mặt sau sinh) do Huyết hư bốc đầu",
    phanloai: ["Sản Khoa", "Bình", "Hư", "Huyết hư huyễn vựng"],
    tc: ["Sau sinh ngồi dậy choáng váng hoa mắt té ngã", "Tâm quý hồi hộp hay quên", "Sắc mặt nhợt nhạt", "Mạch tế nhược"],
    pdt: "Bổ huyết bổ khí, định vựng an thần",
    bt: "Thánh dũ thang gia Viễn chí, Toan táo nhân",
    tpbt: ["Nhân sâm 10g", "Hoàng kỳ 16g", "Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g", "Viễn chí 6g", "Toan táo nhân 12g"]
  },
  "PK_SanHau_ThongPhong_KhongKhi": {
    stt: 467,
    hc: "Sản hậu trúng phong (Trúng gió sau sinh) do Vệ ngoại không cố",
    phanloai: ["Sản Khoa", "Hàn", "Hư thực thác tạp", "Phong hàn xâm nhập kinh lạc"],
    tc: ["Sau sinh ra gió lạnh bị méo miệng lệch mắt", "Cổ gáy vai đau co cứng", "Sợ gió sợ lạnh, mệt mỏi nhợt", "Mạch phù hư nhược"],
    pdt: "Sơ phong tán hàn, bổ khí dưỡng huyết thông lạc",
    bt: "Bổ trung ích khí thang hợp Khiên chính tán",
    tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Bạch truật 12g", "Bạch phụ tử 6g", "Toàn yết 3g", "Cương tàm 8g", "Đương quy 12g", "Sài hồ 6g"]
  },
  "PK_SanHau_KhuyetHoa_VongAm": {
    stt: 468,
    hc: "Sản hậu vong âm do Xuất huyết cấp (Sản dịch ra quá nhiều)",
    phanloai: ["Sản Khoa", "Nhiệt", "Hư suy", "Vong âm nguy cấp"],
    tc: ["Sau sinh chảy máu xối xả không dừng", "Vã mồ hôi nóng dính, da khô nóng", "Thở gấp nông, môi nẻ", "Mạch tế sác vô lực muốn tuyệt"],
    pdt: "Tư âm cứu thoát, liễm hãn chỉ huyết",
    bt: "Sinh mạch tán gia Mẫu lệ, Quy bản, A giao",
    tpbt: ["Nhân sâm 12g", "Mạch môn 12g", "Ngũ vị tử 6g", "Mẫu lệ 20g", "Quy bản 12g", "A giao 10g"]
  },
  "PK_SanHau_CoGiat_VongDuong": {
    stt: 469,
    hc: "Sản hậu vong dương do Mất máu kiệt khí",
    phanloai: ["Sản Khoa", "Hàn", "Hư suy", "Vong dương nguy cấp"],
    tc: ["Sau sinh vã mồ hôi lạnh như giọt sương đầm đìa", "Chân tay lạnh ngắt quá gối, mặt tái bệch", "Thở yếu ớt lơ mơ", "Mạch vi vi muốn tuyệt"],
    pdt: "Hồi dương cứu nghịch, đại bổ nguyên khí cố thoát",
    bt: "Sâm phụ thang hợp Tứ nghịch thang",
    tpbt: ["Nhân sâm 12g", "Phụ tử chế 12g", "Can khương 8g", "Chích cam thảo 6g"]
  },
  "PK_SanHau_CoQuap_HuyetHuSinhPhong": {
    stt: 470,
    hc: "Sản hậu phong kinh (Co giật sau sinh) do Huyết hư sinh phong",
    phanloai: ["Sản Khoa", "Bình", "Hư", "Huyết hư sinh phong"],
    tc: ["Sau sinh tay chân tê dại co quắp run rẩy", "Cổ gáy cứng nhẹ, chóng mặt", "Sắc mặt bệch nhợt", "Mạch tế huyền nhược"],
    pdt: "Dưỡng huyết nhuận can, tức phong chỉ kính",
    bt: "Tam giáp phục mạch thang gia giảm",
    tpbt: ["Sinh địa 16g", "Bạch thược 12g", "A giao 10g", "Mạch môn 12g", "Ma nhân 12g", "Mẫu lệ 15g", "Quy bản 12g", "Chích cam thảo 6g"]
  },
  "PK_SanHau_CoGiat_ThapNhiet": {
    stt: 471,
    hc: "Sản hậu co giật do Nhiệt cực sinh phong (Sản giật sau sinh)",
    phanloai: ["Sản Khoa", "Nhiệt", "Thực", "Nhiệt cực sinh phong"],
    tc: ["Sau sinh sốt cao dữ dội rồi co giật toàn thân", "Hai mắt trợn ngược, răng cắn chặt, hôn mê", "Mặt đỏ gừ", "Mạch huyền sác hữu lực"],
    pdt: "Thanh nhiệt tả hỏa, tức phong chỉ kinh khai khiếu",
    bt: "Linh dương câu đằng ẩm hợp An cung ngưu hoàng hoàn",
    tpbt: ["Linh dương giác 3g", "Câu đằng 12g", "Tang diệp 10g", "Cúc hoa 10g", "Bạch thược 12g", "Sinh địa 16g", "Ngưu hoàng 1g"]
  },
  "PK_SanHau_DauKhop_PhongHanThap": {
    stt: 472,
    hc: "Sản hậu khớp thống (Đau khớp sau sinh) do Phong hàn thấp tý",
    phanloai: ["Sản Khoa", "Hàn", "Hư thực thác tạp", "Phong hàn thấp tý"],
    tc: ["Sau sinh các khớp xương vai cổ tay gối đau nhức", "Gặp gió lạnh đau tăng, chườm ấm bớt", "Thân thể mỏi nặng", "Mạch nhu trì"],
    pdt: "Khu phong tán hàn, trừ thấp thông lạc, dưỡng huyết",
    bt: "Độc hoạt ký sinh thang gia Hoàng kỳ",
    tpbt: ["Độc hoạt 12g", "Tang ký sinh 12g", "Đỗ trọng 12g", "Ngưu tất 12g", "Phòng phong 10g", "Xuyên khung 10g", "Đương quy 12g", "Thục địa 16g", "Hoàng kỳ 16g"]
  },
  "PK_SanHau_DauLung_ThanHu": {
    stt: 473,
    hc: "Sản hậu yêu thống (Đau lưng sau sinh) do Thận hư bào mạch nhão",
    phanloai: ["Sản Khoa", "Bình", "Hư", "Thận hư"],
    tc: ["Sau sinh thắt lưng đau mỏi âm ỉ không sức", "Lao động đau tăng, nằm nghỉ giảm", "Gối yếu chân mềm", "Mạch trầm tế"],
    pdt: "Bổ thận tráng yêu, cường gân trác cốt",
    bt: "Dưỡng thận hoàn gia Đỗ trọng, Tục đoạn",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Kỷ tử 12g", "Thỏ ty tử 12g", "Đỗ trọng 12g", "Tục đoạn 12g", "Cẩu tích 12g"]
  },
  "PK_SanHau_NguyCuc_VongAmVongDuong": {
    stt: 474,
    hc: "Sản hậu nguy kịch thể Khí huyết âm dương câu thoát",
    phanloai: ["Sản Khoa", "Hàn nhiệt thác tạp", "Hư suy", "Âm dương lưỡng thoát"],
    tc: ["Sau sinh hôn mê sâu, thở nông yếu đứt đoạn", "Vã mồ hôi lạnh nhạt dính, tay chân lạnh ngắt", "Môi tím tái, da bệch xám", "Mạch vi vi muốn tuyệt"],
    pdt: "Đại bổ khí huyết, hồi dương tư âm cứu thoát",
    bt: "Sâm phụ thang hợp Sinh mạch tán gia A giao, Mẫu lệ",
    tpbt: ["Nhân sâm 12g", "Phụ tử chế 12g", "Mạch môn 12g", "Ngũ vị tử 6g", "A giao 10g", "Mẫu lệ 20g"]
  },
  "PK_SanHau_TramCam_CanUat": {
    stt: 475,
    hc: "Sản hậu trầm cảm do Can khí uất kết",
    phanloai: ["Sản Khoa", "Bình", "Thực", "Khí uất"],
    tc: ["Sau sinh tinh thần u uất, không muốn chăm con", "Khóc lóc vô cớ, hay thở dài", "Ngực sườn trướng đầy, mất ngủ", "Mạch huyền"],
    pdt: "Sơ can giải uất, lý khí an thần",
    bt: "Bán hạ hậu phác thang hợp Tiêu dao tán",
    tpbt: ["Sài hồ 10g", "Bạch thược 12g", "Đương quy 12g", "Bạch truật 12g", "Phục linh 12g", "Bán hạ chế 10g", "Hậu phác 10g", "Tô diệp 8g"]
  },
  "PK_SanHau_TramCam_TamTyHu": {
    stt: 476,
    hc: "Sản hậu trầm cảm do Tâm Tỳ lưỡng hư",
    phanloai: ["Sản Khoa", "Bình", "Hư", "Tâm Tỳ hư suy"],
    tc: ["Sau sinh lo âu sợ hãi hốt hoảng", "Mất ngủ kéo dài, hay quên, gầy còm", "Sắc mặt nhợt nhạt, ăn kém tiêu chảy", "Mạch tế nhược"],
    pdt: "Song bổ tâm tỳ, dưỡng huyết an thần định chí",
    bt: "Quy tỳ thang gia Viễn chí, Toan táo nhân",
    tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Cam thảo 6g", "Hoàng kỳ 16g", "Đương quy 12g", "Long nhãn 12g", "Toan táo nhân 12g", "Viễn chí 6g"]
  },
  "PK_SanHau_MatNgu_TamHuyetHu": {
    stt: 477,
    hc: "Sản hậu thất miên (Mất ngủ sau sinh) do Tâm huyết hư",
    phanloai: ["Sản Khoa", "Bình", "Hư", "Tâm huyết hư"],
    tc: ["Sau sinh trằn trọc khó ngủ cả đêm", "Hồi hộp trống ngực hay giật mình", "Môi lưỡi nhợt", "Mạch tế nhược"],
    pdt: "Bổ huyết dưỡng tâm, an thần định chí",
    bt: "Dưỡng tâm thang gia giảm",
    tpbt: ["Nhân sâm 10g", "Hoàng kỳ 16g", "Bạch truật 12g", "Phục linh 12g", "Đương quy 12g", "Thục địa 16g", "Toan táo nhân 12g", "Viễn chí 6g"]
  },
  "PK_SanHau_PhuThung_TyThanDuongHu": {
    stt: 478,
    hc: "Sản hậu phù thũng do Tỳ Thận dương hư",
    phanloai: ["Sản Khoa", "Hàn", "Hư suy", "Tỳ Thận dương hư thủy thũng"],
    tc: ["Sau sinh phù thũng toàn thân hai chân ấn lõm sâu", "Sợ lạnh, tay chân lạnh ngắt, tiêu chảy sáng", "Tiểu tiện rất ít", "Mạch trầm tế trì"],
    pdt: "Ôn bổ tỳ thận, hóa khí lợi thủy tiêu thũng",
    bt: "Chân vũ thang hợp Lý trung hoàn gia Mộc thông",
    tpbt: ["Phụ tử chế 10g", "Nhân sâm 10g", "Can khương 8g", "Bạch truật 12g", "Phục linh 12g", "Bạch thược 12g", "Mộc thông 8g"]
  },
  "PK_TrungHa_KhiTreHuyetU": {
    stt: 479,
    hc: "Trưng hà (U xơ tử cung / U nang buồng trứng) do Khí trệ huyết ứ",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Bình", "Thực", "Khí trệ huyết ứ"],
    tc: ["Bụng dưới sờ thấy u cục cứng cố định", "Đau nhói bụng dưới, cự án", "Kinh nguyệt ra nhiều sắc tím đen có cục", "Mạch huyền sáp"],
    pdt: "Hành khí hoạt huyết, nhuyễn kiên tiêu trưng",
    bt: "Cách hạ trục ứ thang gia Cốt khí củ, Nga truật",
    tpbt: ["Đương quy 12g", "Xuyên khung 10g", "Đào nhân 12g", "Hồng hoa 8g", "Chỉ xác 8g", "Hương phụ 10g", "Nga truật 8g", "Mẫu lệ 15g"]
  },
  "PK_TrungHa_DamThap": {
    stt: 480,
    hc: "Trưng hà do Đàm thấp ứ ngưng bao cung",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Bình", "Thực", "Đàm thấp ứ kết"],
    tc: ["Bụng dưới khối u mềm ấn không đau nhói", "Khí hư ra nhiều dính đặc hôi nhẹ", "Thân thể mập mạp béo bệu, nôn nao", "Mạch nhu hoạt"],
    pdt: "Táo thấp hóa đàm, trừ ứ tiêu trưng",
    bt: "Thương truật đạo đàm thang gia Hải tảo, Côn bố",
    tpbt: ["Thương truật 10g", "Bán hạ chế 10g", "Trần bì 6g", "Phục linh 12g", "Chỉ thực 8g", "Đởm nam tinh 8g", "Hải tảo 12g", "Côn bố 12g"]
  },
  "PK_TrungHa_HanNgung": {
    stt: 481,
    hc: "Trưng hà do Hàn ngưng huyết ứ",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Hàn", "Thực", "Hàn ngưng huyết ứ"],
    tc: ["Bụng dưới có u cục lạnh cứng", "Gặp lạnh đau quặn tăng dữ dội, chườm ấm dễ chịu", "Sợ lạnh, tay chân lạnh ngắt", "Mạch trầm khẩn sáp"],
    pdt: "Ôn kinh tán hàn, hoạt huyết tiêu trưng",
    bt: "Thiếu phúc trục ứ thang gia Tam thất, Nga truật",
    tpbt: ["Can khương 6g", "Nhục quế 6g", "Tiểu hồi hương 8g", "Đương quy 12g", "Xuyên khung 10g", "Xích thược 12g", "Nga truật 8g", "Tam thất 6g"]
  },
  "PK_TrungHa_NhietDoc": {
    stt: 482,
    hc: "Trưng hà do Nhiệt độc uẩn kết gây viêm dính",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Nhiệt", "Thực", "Hỏa độc uẩn kết"],
    tc: ["Khối u bụng dưới nóng đau rát cự án", "Sốt nhẹ hoặc sốt dai dẳng, tiểu đỏ", "Khí hư vàng hôi như mủ", "Mạch nhu sác hữu lực"],
    pdt: "Thanh nhiệt giải độc, hoạt huyết tiêu trưng",
    bt: "Đại hoàng mẫu đơn bì thang gia Kim ngân hoa, Thổ phục linh",
    tpbt: ["Đại hoàng 12g", "Mẫu đơn bì 10g", "Đào nhân 12g", "Mang tiêu 10g", "Kim ngân hoa 15g", "Thổ phục linh 15g"]
  },
  "PK_UXoTuCung_HuyetU": {
    stt: 483,
    hc: "U xơ tử cung do Huyết ứ trệ",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Bình", "Thực", "Huyết ứ"],
    tc: ["Tử cung phì đại u cục cứng, kinh nguyệt ra rất nhiều ồ ạt", "Sắc kinh tím đen có cục lớn", "Bụng dưới trướng đau", "Mạch sáp dũng mãnh"],
    pdt: "Hoạt huyết hóa ứ, tiệm tiêu phì đại",
    bt: "Quế chi phục linh hoàn gia Tam thất, Nga truật",
    tpbt: ["Quế chi 8g", "Phục linh 12g", "Mẫu đơn bì 10g", "Xích thược 12g", "Đào nhân 12g", "Tam thất 6g", "Nga truật 8g"]
  },
  "PK_UXoTuCung_KhiTre": {
    stt: 484,
    hc: "U xơ tử cung do Khí trệ can uất",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Bình", "Thực", "Khí trệ"],
    tc: ["Khối u xơ trướng đau khi căng thẳng cáu giận", "Kinh nguyệt không đều, trướng ngực sườn", "Mạch huyền"],
    pdt: "Sơ can giải uất, hành khí tiêu u",
    bt: "Sài hồ sơ can tán gia Mẫu lệ, Côn bố",
    tpbt: ["Sài hồ 10g", "Bạch thược 12g", "Chỉ xác 8g", "Xuyên khung 10g", "Hương phụ 10g", "Mẫu lệ 15g", "Côn bố 12g"]
  },
  "PK_UXoTuCung_DamThap": {
    stt: 485,
    hc: "U xơ tử cung do Đàm thấp kết khối",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Bình", "Thực", "Đàm thấp"],
    tc: ["U xơ tử cung kèm thể trạng béo trệ, kinh ít dính nhầy", "Khí hư dầm dề trắng đục", "Rêu dầy dính", "Mạch nhu hoạt"],
    pdt: "Kiện tỳ hóa đàm, nhuyễn kiên tán kết",
    bt: "Nhị trần thang gia Hải tảo, Côn bố, Bạch giới tử",
    tpbt: ["Bán hạ chế 10g", "Trần bì 6g", "Phục linh 12g", "Hải tảo 12g", "Côn bố 12g", "Bạch giới tử 8g", "Cam thảo 6g"]
  },
  "PK_UXoTuCung_KhieuHu": {
    stt: 486,
    hc: "U xơ tử cung mạn tính do Khí hư huyết ứ",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Bình", "Hư thực thác tạp", "Khí hư huyết ứ"],
    tc: ["U xơ tử cung kéo dài gây rong kinh rong huyết mệt mỏi", "Sắc mặt nhợt nhạt, hụt hơi", "Lưỡi nhợt điểm ứ huyết", "Mạch tế sáp vô lực"],
    pdt: "Bổ khí kiện tỳ, hoạt huyết hóa ứ tiêu u",
    bt: "Bổ dương hoàn ngũ thang gia Quế chi phục linh hoàn",
    tpbt: ["Hoàng kỳ 60g", "Đương quy 12g", "Xích thược 12g", "Đào nhân 10g", "Hồng hoa 8g", "Quế chi 8g", "Phục linh 12g", "Mẫu đơn bì 10g"]
  },
  "PK_NangBuongTrung_DamThap": {
    stt: 487,
    hc: "U nang buồng trứng do Đàm thấp ngưng trệ",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Bình", "Thực", "Đàm thấp"],
    tc: ["Nang buồng trứng mọc vỏ dày dịch dính", "Bụng dưới trướng nặng, kinh nguyệt chậm", "Thể trạng mập mạp", "Mạch nhu hoạt"],
    pdt: "Táo thấp hóa đàm, tiêu nang tán kết",
    bt: "Chưng đàm hoàn gia Hải tảo, Côn bố, Hương phụ",
    tpbt: ["Bán hạ chế 10g", "Trần bì 6g", "Phục linh 12g", "Hải tảo 12g", "Côn bố 12g", "Hương phụ 10g", "Cam thảo 6g"]
  },
  "PK_NangBuongTrung_KhiTreHuyetU": {
    stt: 488,
    hc: "U nang buồng trứng do Khí trệ huyết ứ",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Bình", "Thực", "Khí trệ huyết ứ"],
    tc: ["Nang buồng trứng đau nhói một bên hố chậu", "Kinh nguyệt tím đen có cục", "Lưỡi tím sẫm", "Mạch huyền sáp"],
    pdt: "Hành khí hoạt huyết, tiêu nang chỉ thống",
    bt: "Cách hạ trục ứ thang gia Tam thất, Nga truật",
    tpbt: ["Đương quy 12g", "Xuyên khung 10g", "Đào nhân 12g", "Hồng hoa 8g", "Chỉ xác 8g", "Hương phụ 10g", "Tam thất 6g", "Nga truật 8g"]
  },
  "PK_NangBuongTrung_ThanAmHu": {
    stt: 489,
    hc: "U nang buồng trứng do Thận âm hư suy",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Nhiệt", "Hư", "Thận âm hư"],
    tc: ["U nang buồng trứng ở người gầy triều nhiệt", "Đau lưng mỏi gối, kinh nguyệt ít sắc đỏ", "Mắt khô, tai ù", "Mạch tế sác"],
    pdt: "Tư bổ thận âm, nhuyễn kiên tiêu nang",
    bt: "Lục vị địa hoàng hoàn gia Mẫu lệ, Côn bố",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Phục linh 12g", "Mẫu lệ 15g", "Côn bố 12g"]
  },
  "PK_NangBuongTrung_ThanDuongHu": {
    stt: 490,
    hc: "U nang buồng trứng do Thận dương hư hàn",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Hàn", "Hư", "Thận dương hư"],
    tc: ["Nang buồng trứng kèm bụng dưới lạnh đau âm ỉ", "Sợ lạnh tay chân lạnh ngắt, kinh đến muộn", "Mạch trầm tế trì"],
    pdt: "Ôn bổ thận dương, hóa khí tiêu nang",
    bt: "Thận khí hoàn gia Nhục quế, Tam thất",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Nhục quế 6g", "Phụ tử chế 8g", "Trạch tả 10g", "Đan bì 8g", "Tam thất 6g"]
  },
  "PK_PCOS_DamThapNhiet": {
    stt: 491,
    hc: "Hội chứng buồng trứng đa nang (PCOS) do Đàm thấp uẩn nhiệt",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Nhiệt", "Thực", "Đàm thấp nhiệt"],
    tc: ["Bế kinh kéo dài hoặc vài tháng mới có kinh 1 lần", "Mụn trứng cá nổi nhiều, rậm lông, da nhờn", "Thân thể mập bệu", "Rêu dầy vàng nhớt", "Mạch hoạt sác"],
    pdt: "Thanh nhiệt hóa đàm, thông kinh tán kết",
    bt: "Thương truật đạo đàm thang gia Hoàng liên, Khổ sâm",
    tpbt: ["Bán hạ chế 10g", "Trần bì 6g", "Phục linh 12g", "Thương truật 10g", "Chỉ thực 8g", "Hoàng liên 8g", "Khổ sâm 10g", "Hương phụ 10g"]
  },
  "PK_PCOS_ThanDuongHu": {
    stt: 492,
    hc: "Hội chứng buồng trứng đa nang do Thận dương hư",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Hàn", "Hư suy", "Thận dương hư"],
    tc: ["Bế kinh lâu ngày không thai, sợ lạnh tay chân lạnh", "Thắt lưng lạnh đau, tiểu đêm nhiều", "Thể trạng béo trệ lạnh", "Mạch trầm tế vi"],
    pdt: "Ôn bổ thận dương, hóa đàm thông kinh",
    bt: "Hữu quy hoàn hợp Ôn đởm thang",
    tpbt: ["Thục địa 16g", "Nhục quế 6g", "Phụ tử chế 8g", "Sơn thù nhục 8g", "Bán hạ chế 10g", "Trần bì 6g", "Phục linh 12g"]
  },
  "PK_PCOS_CanUatKhieuTre": {
    stt: 493,
    hc: "Hội chứng buồng trứng đa nang do Can khí uất trệ",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Bình", "Thực", "Khí trệ"],
    tc: ["Kinh nguyệt ít muộn thất thường, lo âu xúc động", "Trướng căng vú ngực sườn", "Mạch huyền dằn xóc"],
    pdt: "Sơ can giải uất, thông kinh hoạt huyết",
    bt: "Sài hồ sơ can tán gia Đào nhân, Hồng hoa",
    tpbt: ["Sài hồ 10g", "Bạch thược 12g", "Chỉ xác 8g", "Xuyên khung 10g", "Hương phụ 10g", "Đào nhân 12g", "Hồng hoa 8g"]
  },
  "PK_PCOS_KhiHuyetLuuHu": {
    stt: 494,
    hc: "Hội chứng buồng trứng đa nang do Khí huyết lưỡng hư",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Bình", "Hư", "Khí huyết hư suy"],
    tc: ["Kinh nguyệt ít nhạt loãng muộn kỳ dài", "Sắc mặt nhợt nhạt, gầy còm mệt mỏi", "Hoa mắt chóng mặt", "Mạch tế nhược"],
    pdt: "Song bổ khí huyết, điều kinh tị thai",
    bt: "Bát trân thang gia Kỷ tử, Thỏ ty tử",
    tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Cam thảo 6g", "Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g", "Kỷ tử 12g", "Thỏ ty tử 12g"]
  },
  "PK_LacNoiMacTuCung_HuyetU": {
    stt: 495,
    hc: "Lạc nội mạc tử cung do Huyết ứ bao cung (Đau bụng kinh dữ dội)",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Bình", "Thực", "Huyết ứ"],
    tc: ["Bụng dưới đau quặn quằn quại dữ dội khi hành kinh", "Đau lan xuống bẹn hậu môn, cự án", "Kinh nguyệt tím đen có cục", "Mạch sáp dũng mãnh"],
    pdt: "Hoạt huyết hóa ứ, phá trệ chỉ thống",
    bt: "Cách hạ trục ứ thang gia Diên hồ tẩu, Tam thất",
    tpbt: ["Đương quy 12g", "Xuyên khung 10g", "Đào nhân 12g", "Hồng hoa 8g", "Chỉ xác 8g", "Hương phụ 10g", "Ngũ linh chi 10g", "Diên hồ tẩu 10g", "Tam thất 6g"]
  },
  "PK_LacNoiMacTuCung_HanNgung": {
    stt: 496,
    hc: "Lạc nội mạc tử cung do Hàn ngưng huyết ứ",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Hàn", "Thực", "Hàn ngưng huyết ứ"],
    tc: ["Đau bụng kinh quặn như đâm chườm ấm giảm", "Tay chân lạnh ngắt vã mồ hôi lạnh khi đau", "Mạch trầm khẩn sáp"],
    pdt: "Ôn kinh tán hàn, hóa ứ chỉ thống",
    bt: "Thiếu phúc trục ứ thang gia Tam thất",
    tpbt: ["Can khương 6g", "Nhục quế 6g", "Tiểu hồi hương 8g", "Đương quy 12g", "Xuyên khung 10g", "Xích thược 12g", "Bồ hoàng 10g", "Tam thất 6g"]
  },
  "PK_LacNoiMacTuCung_ThapNhiet": {
    stt: 497,
    hc: "Lạc nội mạc tử cung do Thấp nhiệt uẩn kết",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Nhiệt", "Thực", "Thấp nhiệt uẩn kết"],
    tc: ["Bụng dưới đau rát kéo dài trước trong kỳ kinh", "Giao hợp đau rát, tiểu ngắn đỏ", "Khí hư vàng hôi", "Mạch nhu sác"],
    pdt: "Thanh nhiệt lợi thấp, hóa ứ chỉ thống",
    bt: "Thanh nhiệt điều huyết thang gia Diên hồ tẩu",
    tpbt: ["Hoàng liên 8g", "Sinh địa 16g", "Đương quy 12g", "Xuyên khung 10g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Diên hồ tẩu 10g"]
  },
  "PK_SaTuCung_TrungKhiHaHam": {
    stt: 498,
    hc: "Sa tử cung (Âm trĩ) do Trung khí hạ hãm",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Bình", "Hư", "Khí hư hạ hãm"],
    tc: ["Khối tử cung sa xệ tụt ra ngoài âm đạo", "Cảm giác trướng nặng âm hộ, đứng lâu đau tăng", "Sắc mặt nhợt nhạt, mệt mỏi hụt hơi", "Mạch hoãn nhược"],
    pdt: "Bổ khí thăng dương, cử hãm thăng đề",
    bt: "Bổ trung ích khí thang gia Chỉ xác sao",
    tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Bạch truật 12g", "Trần bì 6g", "Thăng ma 6g", "Sài hồ 6g", "Chỉ xác sao 8g", "Chích cam thảo 6g"]
  },
  "PK_SaTuCung_ThanDuongHu": {
    stt: 499,
    hc: "Sa tử cung do Thận dương hư suy thất đề",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Hàn", "Hư suy", "Thận dương hư"],
    tc: ["Tử cung sa lệch kéo dài, cọ xát chảy dịch", "Thắt lưng lạnh đau không lực, sợ lạnh", "Tiểu đêm nhiều, tiêu chảy sáng", "Mạch trầm tế trì vô lực"],
    pdt: "Ôn bổ thận dương, sáp niệu thăng đề",
    bt: "Thận khí hoàn gia Thăng ma, Lộc giác giao",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Nhục quế 6g", "Phụ tử chế 8g", "Thăng ma 6g", "Lộc giác giao 10g", "Đỗ trọng 12g"]
  },
  "PK_SaTuCung_TyThanKhieuHu": {
    stt: 500,
    hc: "Sa tử cung mạn tính do Tỳ Thận khí hư",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Bình", "Hư suy", "Tỳ Thận khí hư"],
    tc: ["Sa tử cung lâu ngày không tự co lên được", "Toàn thân mệt mỏi suy nhược kiệt sức", "Đau lưng, ăn kém, tiêu chảy", "Mạch trầm nhược vô lực"],
    pdt: "Song bổ tỳ thận, bổ khí cử hãm",
    bt: "Sâm linh bạch truật tán hợp Bổ trung ích khí thang gia giảm",
    tpbt: ["Đảng sâm 12g", "Hoàng kỳ 16g", "Bạch truật 12g", "Phục linh 12g", "Hoài sơn 12g", "Thăng ma 6g", "Sài hồ 6g", "Cam thảo 6g"]
  },
  "PK_VoSinh_ThanDuongHu": {
    stt: 501,
    hc: "Vô sinh nữ do Thận dương hư (Bào cung hư hàn)",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Hàn", "Hư suy", "Thận dương hư vô sinh"],
    tc: ["Kết hôn lâu năm không thai", "Bụng dưới lạnh, kinh nguyệt chậm ít sắc nhạt", "Sợ lạnh, tay chân lạnh ngắt, giảm ham muốn", "Mạch trầm tế trì"],
    pdt: "Ôn bổ thận dương, noãn bào cung tư thai",
    bt: "Ôn bào hoàn",
    tpbt: ["Thục địa 16g", "Ba kích 12g", "Dâm dương hoắc 12g", "Nhục quế 6g", "Phụ tử chế 8g", "Đỗ trọng 12g", "Thỏ ty tử 12g", "Sơn thù nhục 8g"]
  },
  "PK_VoSinh_ThanAmHu": {
    stt: 502,
    hc: "Vô sinh nữ do Thận âm hư (Tinh huyết khuy tổn)",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Nhiệt", "Hư", "Thận âm hư vô sinh"],
    tc: ["Không thai kéo dài, kinh nguyệt sớm lượng ít sắc đỏ", "Thắt lưng mỏi gối, hoa mắt tai ù", "Triều nhiệt đạo hãn, khô âm đạo", "Mạch tế sác"],
    pdt: "Tư bổ thận âm, dưỡng huyết điền tinh tư thai",
    bt: "Dưỡng tinh chủng ngọc đan",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Đương quy 12g", "Bạch thược 12g"]
  },
  "PK_VoSinh_CanUat": {
    stt: 503,
    hc: "Vô sinh nữ do Can khí uất kết (Căng thẳng hiếm muộn)",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Bình", "Thực", "Khí uất vô sinh"],
    tc: ["Hiếm muộn kèm tâm lý căng thẳng âu lo", "Kinh nguyệt không đều, trướng ngực sườn", "Dễ giận dữ hay thở dài", "Mạch huyền dằn xóc"],
    pdt: "Sơ can giải uất, dưỡng huyết điều kinh tư thai",
    bt: "Khai uất chủng ngọc đan",
    tpbt: ["Sài hồ 10g", "Bạch thược 12g", "Đương quy 12g", "Bạch truật 12g", "Phục linh 12g", "Hương phụ 10g", "Mẫu đơn bì 10g", "Chi tử 10g"]
  },
  "PK_VoSinh_DamThap": {
    stt: 504,
    hc: "Vô sinh nữ do Đàm thấp trệ bào cung",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Bình", "Thực", "Đàm thấp vô sinh"],
    tc: ["Vô sinh ở nữ giới thể trạng mập bệu", "Bế kinh hoặc kinh chậm dính nhầy", "Khí hư ra nhiều đặc dính, nôn nao", "Mạch nhu hoạt"],
    pdt: "Táo thấp hóa đàm, lý khí thông mạch tư thai",
    bt: "Tích linh hoàn",
    tpbt: ["Thương truật 10g", "Bán hạ chế 10g", "Trần bì 6g", "Phục linh 12g", "Hương phụ 10g", "Thần khúc 10g", "Xuyên khung 10g"]
  },
  "PK_VoSinh_HuyetU": {
    stt: 505,
    hc: "Vô sinh nữ do Huyết ứ trệ bào mạch",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Bình", "Thực", "Huyết ứ vô sinh"],
    tc: ["Không thai kèm thống kinh dữ dội", "Kinh nguyệt tím đen có cục máu đông", "Bụng dưới đau nhói cự án", "Mạch sáp dũng mãnh"],
    pdt: "Hoạt huyết hóa ứ, thông xung điều kinh tư thai",
    bt: "Thiếu phúc trục ứ thang gia Tam thất",
    tpbt: ["Can khương 6g", "Nhục quế 6g", "Tiểu hồi hương 8g", "Đương quy 12g", "Xuyên khung 10g", "Xích thược 12g", "Bồ hoàng 10g", "Tam thất 6g"]
  },
  "PK_VoSinh_KhiHuyetHu": {
    stt: 506,
    hc: "Vô sinh nữ do Khí huyết hư suy",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Bình", "Hư suy", "Khí huyết hư vô sinh"],
    tc: ["Không thai, sắc mặt nhợt nhạt gầy yếu", "Kinh nguyệt ít sắc nhạt loãng", "Mệt mỏi hụt hơi chóng mặt", "Mạch tế nhược"],
    pdt: "Song bổ khí huyết, dưỡng xung tư thai",
    bt: "Thánh dũ thang gia Kỷ tử, Thỏ ty tử",
    tpbt: ["Nhân sâm 10g", "Hoàng kỳ 16g", "Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g", "Kỷ tử 12g", "Thỏ ty tử 12g"]
  },
  "PK_VoSinh_BaoCungHuHan": {
    stt: 507,
    hc: "Vô sinh nữ do Bào cung hư hàn (Lạnh tử cung)",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Hàn", "Hư", "Bào cung hư hàn vô sinh"],
    tc: ["Không thai, bụng dưới luôn lạnh đau âm ỉ", "Chườm ấm bớt đau, tay chân lạnh ngắt", "Sợ lạnh, kinh muộn sắc nhợt", "Mạch trầm trì nhược"],
    pdt: "Ôn kinh tán hàn, noãn bào cung dưỡng thai",
    bt: "Ôn kinh thang gia Ba kích, Dâm dương hoắc",
    tpbt: ["Ngô thù du 6g", "Mạch môn 12g", "Đương quy 12g", "Xuyên khung 10g", "Bạch thược 12g", "Nhân sâm 10g", "Quế chi 8g", "A giao 10g", "Ba kích 12g", "Dâm dương hoắc 12g"]
  },
  "PK_VoSinh_BaoCungThapNhiet": {
    stt: 508,
    hc: "Vô sinh nữ do Thấp nhiệt uẩn kết bào cung",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Nhiệt", "Thực", "Thấp nhiệt vô sinh"],
    tc: ["Không thai kèm khí hư vàng xanh hôi dầm dề", "Bụng dưới đau rát, tiểu dắt buốt", "Rêu lưỡi vàng nhớt", "Mạch nhu sác"],
    pdt: "Thanh nhiệt lợi thấp, giải độc thông mạch tư thai",
    bt: "Chỉ đới thang gia Hoàng bá, Đào nhân",
    tpbt: ["Hoàng bá 12g", "Tri mẫu 12g", "Trúc nhự 8g", "Phục linh 12g", "Trạch tả 12g", "Xa tiền tử 12g", "Đào nhân 12g"]
  },
  "PK_ManKinh_CanThanAmHu": {
    stt: 509,
    hc: "Hội chứng tiền mãn kinh / Mãn kinh do Can Thận âm hư",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Nhiệt", "Hư", "Can Thận âm hư mãn kinh"],
    tc: ["Mãn kinh xuất hiện bốc hỏa vã mồ hôi gò má đỏ", "Chóng mặt hoa mắt, tai ù, đau lưng mỏi gối", "Bứt rứt mất ngủ, khô âm đạo", "Mạch tế sác"],
    pdt: "Tư bổ can thận, bình can giáng hỏa",
    bt: "Kỷ cúc địa hoàng hoàn gia Mẫu lệ, Câu đằng",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Phục linh 12g", "Kỷ tử 12g", "Cúc hoa 10g", "Mẫu lệ 15g", "Câu đằng 12g"]
  },
  "PK_ManKinh_ThanDuongHu": {
    stt: 510,
    hc: "Hội chứng mãn kinh do Thận dương hư suy",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Hàn", "Hư suy", "Thận dương hư mãn kinh"],
    tc: ["Mãn kinh sợ lạnh, tay chân lạnh ngắt", "Mệt mỏi suy nhược, thắt lưng lạnh đau", "Phù nhẹ mi mắt mi chân, tiểu đêm nhiều", "Mạch trầm tế trì"],
    pdt: "Ôn bổ thận dương, ích tinh cố bản",
    bt: "Thận khí hoàn gia Nhục quế, Lộc giác giao",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Phục linh 12g", "Nhục quế 6g", "Phụ tử chế 8g", "Lộc giác giao 10g"]
  },
  "PK_ManKinh_TamThanBatGiao": {
    stt: 511,
    hc: "Hội chứng mãn kinh do Tâm Thận bất giao",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Nhiệt", "Hư thực thác tạp", "Tâm Thận bất giao"],
    tc: ["Cơn bốc hỏa kèm trằn trọc mất ngủ dai dẳng", "Hồi hộp hoảng hốt, hay quên, lo âu", "Lòng bàn tay chân nóng", "Lưỡi đỏ ít rêu", "Mạch tế sác"],
    pdt: "Tư âm giáng hỏa, thanh tâm an thần",
    bt: "Thiên vương bổ tâm đan hợp Giao thái hoàn",
    tpbt: ["Sinh địa 16g", "Huyền sâm 12g", "Cát cánh 6g", "Viễn chí 6g", "Đương quy 12g", "Toan táo nhân 12g", "Hoàng liên 8g", "Nhục quế 4g"]
  },
  "PK_ManKinh_CanUatHoaHoa": {
    stt: 512,
    hc: "Hội chứng mãn kinh do Can uất hóa hỏa",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Nhiệt", "Thực", "Can hỏa mãn kinh"],
    tc: ["Tính tình thay đổi dữ dội, dễ cáu giận cáu gắt", "Cơn bốc hỏa nóng rát mặt, đau đầu giật", "Miệng đắng, tiểu tiện đỏ", "Mạch huyền sác hữu lực"],
    pdt: "Sơ can giải uất, thanh nhiệt tả hỏa",
    bt: "Gia vị tiêu dao tán gia Câu đằng",
    tpbt: ["Sài hồ 10g", "Đương quy 12g", "Bạch thược 12g", "Bạch truật 12g", "Phục linh 12g", "Cam thảo 6g", "Đan bì 10g", "Chi tử 10g", "Câu đằng 12g"]
  },
  "PK_ManKinh_TyThanDuongHu": {
    stt: 513,
    hc: "Hội chứng mãn kinh do Tỳ Thận dương hư",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Hàn", "Hư suy", "Tỳ Thận dương hư"],
    tc: ["Mãn kinh sợ lạnh, ăn uống kém không tiêu", "Tiêu chảy sáng sớm, phù thũng hai chân", "Mệt mỏi kiệt sức", "Mạch trầm tế hoãn"],
    pdt: "Ôn bổ tỳ thận, kiện tỳ chỉ tả",
    bt: "Tứ thần hoàn hợp Lý trung hoàn",
    tpbt: ["Bổ cốt chỉ 12g", "Ngũ vị tử 6g", "Nhục đậu khấu 8g", "Ngô thù du 6g", "Nhân sâm 10g", "Can khương 8g", "Bạch truật 12g"]
  },
  "PK_NhiPhuKhoa_ThapNhiet": {
    stt: 514,
    hc: "Viêm âm đạo ở trẻ em (Nhi khoa phụ khoa) do Thấp nhiệt dính bẩn",
    phanloai: ["Phụ Khoa Nhi", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Trẻ nhỏ ngứa ngáy vùng âm hộ, quấy khóc", "Niêm mạc âm hộ đỏ sưng, chảy dịch đục vàng", "Tiểu dắt buốt khóc khi tiểu", "Rêu dầy dính"],
    pdt: "Thanh nhiệt lợi thấp, giải độc chỉ ngứa",
    bt: "Đạo xích tán gia Khổ sâm, Kim ngân hoa",
    tpbt: ["Sinh địa 12g", "Mộc thông 6g", "Cam thảo 4g", "Trúc diệp 6g", "Khổ sâm 8g", "Kim ngân hoa 10g"]
  },
  "PK_NhiPhuKhoa_KhieuHu": {
    stt: 515,
    hc: "Viêm âm đạo trẻ em do Tỳ hư thấp trệ",
    phanloai: ["Phụ Khoa Nhi", "Bình", "Hư thực thác tạp", "Tỳ hư"],
    tc: ["Trẻ gầy còm chảy dịch trắng loãng âm hộ dai dẳng", "Ăn kém tiêu chảy, sắc mặt vàng nhợt", "Mệt mỏi hay nằm", "Mạch hoãn nhược"],
    pdt: "Kiện tỳ mẫn thấp, hòa vị chỉ đới",
    bt: "Sâm linh bạch truật tán gia giảm",
    tpbt: ["Đảng sâm 10g", "Bạch truật 10g", "Phục linh 10g", "Hoài sơn 10g", "Liên nhục 10g", "Ý dĩ 10g", "Cam thảo 4g"]
  },
  "PK_TeNhi_ThanTinhBatTuc": {
    stt: 516,
    hc: "Dị tật sinh dục / Phát triển muộn sinh dục nữ do Thận tinh bất túc",
    phanloai: ["Phụ Khoa Nhi", "Bình", "Hư suy", "Thận tinh bất túc"],
    tc: ["Tuổi dậy thì không có kinh nguyệt, vú không phát triển", "Thân thể lùn thấp, xương khớp mềm yếu", "Đần độn chậm hiểu", "Mạch tế vô lực"],
    pdt: "Bổ thận điền tinh, ích tủy trác cốt",
    bt: "Lục vị địa hoàng hoàn gia Cốt toái bổ, Lộc giác giao",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Phục linh 12g", "Cốt toái bổ 10g", "Lộc giác giao 10g"]
  },
  "PK_GiaiDoanTienManKinh_KhiHoa": {
    stt: 517,
    hc: "Rối loạn vasomotor tiền mãn kinh do Bào cung khí hỏa uất",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Nhiệt", "Hư thực thác tạp", "Khí hỏa uất"],
    tc: ["Cơn nóng bừng từ ngực bốc lên mặt, vã mồ hôi đầm đìa", "Tâm phiền bứt rứt khó chịu đột ngột", "Mạch huyền sác"],
    pdt: "Sơ can thanh nhiệt, trấn tĩnh giáng hỏa",
    bt: "Gia vị tiêu dao tán gia Mẫu lệ, Quy bản",
    tpbt: ["Sài hồ 10g", "Đương quy 12g", "Bạch thược 12g", "Bạch truật 12g", "Phục linh 12g", "Đan bì 10g", "Chi tử 10g", "Mẫu lệ 15g", "Quy bản 12g"]
  },
  "PK_MocNgoaiAm_NhietDoc": {
    stt: 518,
    hc: "Mụn nhọt mọc ngoài âm hộ do Hỏa độc độc khí",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Nhiệt", "Thực", "Hỏa độc"],
    tc: ["Nổi u mụn nhọt sưng đau rát ngoài môi lớn/môi bé", "Có ngòi mủ, sốt nhẹ, tiểu tiện buốt", "Mạch sác hữu lực"],
    pdt: "Thanh nhiệt giải độc, tiêu thũng tán kết",
    bt: "Ngũ vị tiêu độc ẩm gia Hoàng liên",
    tpbt: ["Kim ngân hoa 15g", "Cúc hoa 10g", "Bồ công anh 15g", "Tử hoa địa đinh 12g", "Tử bối thiên quỳ 10g", "Hoàng liên 8g"]
  },
  "PK_TuyenBartholin_ViemCapThapNhiet": {
    stt: 519,
    hc: "Viêm tuyến Bartholin cấp do Thấp nhiệt hỏa độc",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Nhiệt", "Thực", "Thấp nhiệt hỏa độc"],
    tc: ["Một bên mép âm hộ sưng to như quả trứng gà nóng đỏ đau dữ dội", "Đi lại ngồi rất khó khăn", "Sốt, khát nước", "Mạch nhu sác hữu lực"],
    pdt: "Thanh nhiệt táo thấp, giải độc tiêu thũng",
    bt: "Tiên phương hoạt mệnh ẩm gia Bồ công anh, Khổ sâm",
    tpbt: ["Kim ngân hoa 15g", "Trần bì 6g", "Phòng phong 10g", "Bạch chỉ 10g", "Bồ công anh 15g", "Khổ sâm 10g", "Nhũ hương 6g", "Một dược 6g"]
  },
  "PK_TuyenBartholin_HoaDaiNhung": {
    stt: 520,
    hc: "Nang / Áp xe tuyến Bartholin mưng mủ do Bài nùng nhiệt độc",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Nhiệt", "Thực", "Bài nùng hỏa độc"],
    tc: ["Khối viêm sưng hóa mủ phập phồng", "Đau nhói buốt dữ dội không ngủ được", "Mạch hoạt sác"],
    pdt: "Thanh nhiệt giải độc, thác độc bài nùng",
    bt: "Thác quốc tán gia Kim ngân hoa, Cát cánh",
    tpbt: ["Hoàng kỳ 16g", "Đương quy 12g", "Bạch chỉ 10g", "Xuyên khung 10g", "Kim ngân hoa 15g", "Cát cánh 8g", "Xuyên sơn giáp gia thay thế 6g"]
  },
  "PK_XuatHuyetGiaiDoanRungThuc_HuyetNhiet": {
    stt: 521,
    hc: "Xuất huyết giữa kỳ kinh (Xuất huyết giai đoạn rụng trứng) do Huyết nhiệt",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Nhiệt", "Thực", "Huyết nhiệt"],
    tc: ["Xuất huyết ít đỏ tươi giữa 2 kỳ kinh kéo dài 2-3 ngày", "Không đau bụng, ngực hơi trướng nhẹ", "Mạch tế sác"],
    pdt: "Thanh nhiệt lương huyết, cố xung chỉ huyết",
    bt: "Lưỡng địa thang gia Trắc bách diệp sao",
    tpbt: ["Sinh địa 16g", "Địa cốt bì 12g", "Huyền sâm 12g", "Mạch môn 12g", "Bạch thược 12g", "A giao 10g", "Trắc bách diệp sao 12g"]
  },
  "PK_XuatHuyetGiaiDoanRungThuc_ThieuAm": {
    stt: 522,
    hc: "Xuất huyết giữa kỳ kinh do Thiếu âm âm hư hỏa động",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Giữa kỳ kinh ra ít máu hồng nhạt dính", "Lòng bàn tay chân nóng, đau lưng mỏi gối", "Mạch tế sác vô lực"],
    pdt: "Tư bổ thận âm, dưỡng xung chỉ huyết",
    bt: "Tả quy hoàn gia A giao, Địa cốt bì",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Kỷ tử 12g", "A giao 10g", "Địa cốt bì 12g"]
  },
  "PK_XuatHuyetGiaiDoanRungThuc_HuyetU": {
    stt: 523,
    hc: "Xuất huyết giữa kỳ kinh do Huyết ứ trệ",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Bình", "Thực", "Huyết ứ"],
    tc: ["Giữa kỳ kinh ra ít máu tím đen có cục nhỏ", "Bụng dưới đau nhói nhẹ", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, chỉ huyết điều kinh",
    bt: "Đào hồng tứ vật thang gia Tam thất",
    tpbt: ["Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g", "Đào nhân 12g", "Hồng hoa 8g", "Tam thất 6g"]
  },
  "PK_DauThietSinhDuc_KhiTre": {
    stt: 524,
    hc: "Đau rát vùng sinh dục ngoài do Khí trệ kinh lạc",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Bình", "Thực", "Khí trệ"],
    tc: ["Âm hộ âm đạo đau tức trướng di chuyển", "Xúc động cáu giận đau tăng", "Mạch huyền"],
    pdt: "Sơ can lý khí, thông lạc chỉ thống",
    bt: "Sài hồ sơ can tán gia Hương phụ, Ô dược",
    tpbt: ["Sài hồ 10g", "Bạch thược 12g", "Chỉ xác 8g", "Xuyên khung 10g", "Hương phụ 10g", "Ô dược 10g", "Cam thảo 6g"]
  },
  "PK_DauThietSinhDuc_HanNgung": {
    stt: 525,
    hc: "Đau rát âm hộ do Hàn ngưng huyết trệ",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Hàn", "Thực", "Hàn ngưng"],
    tc: ["Âm hộ đau co quắp lạnh ngắt", "Gặp lạnh đau tăng, chườm ấm bớt", "Mạch trầm khẩn"],
    pdt: "Ôn kinh tán hàn, thông lạc chỉ thống",
    bt: "Noãn can tiễn gia Quế chi",
    tpbt: ["Tiểu hồi hương 8g", "Nhục quế 6g", "Đương quy 12g", "Ô dược 10g", "Trầm hương 4g", "Phục linh 12g", "Quế chi 8g"]
  },
  "PK_BaoCungCoThat_CanKhieuBatHoa": {
    stt: 526,
    hc: "Co thắt tử cung (Bào cung co thắt) do Can Vị bất hòa",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Bình", "Thực", "Can Vị bất hòa"],
    tc: ["Tử cung co thắt quặn đau từng cơn dữ dội ngoài kỳ kinh", "Buồn nôn, ợ chua, trướng ngực", "Mạch huyền"],
    pdt: "Sơ can hòa vị, hoãn cấp chỉ thống",
    bt: "Thược dược cam thảo thang hợp Tả kim hoàn",
    tpbt: ["Bạch thược 16g", "Chích cam thảo 8g", "Hoàng liên 6g", "Ngô thù du 3g"]
  },
  "PK_KhieuHuyetKinhLac_HoatHuyet": {
    stt: 527,
    hc: "Dính buồng tử cung (Hội chứng Asherman) do Huyết ứ trệ bào mạch",
    phanloai: ["Tạp Bệnh Phụ Khoa", "Bình", "Thực", "Huyết ứ dính bào cung"],
    tc: ["Sau nạo hút thai bị bế kinh hoặc kinh ra rất ít sắc tím đen", "Bụng dưới đau nhói cự án hằng tháng", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, thông bào mạch giải dính",
    bt: "Cách hạ trục ứ thang gia Nga truật, Tam thất, Đan sâm",
    tpbt: ["Đương quy 12g", "Xuyên khung 10g", "Đào nhân 12g", "Hồng hoa 8g", "Chỉ xác 8g", "Hương phụ 10g", "Nga truật 8g", "Tam thất 6g", "Đan sâm 15g"]
  },
  "NKH_001": {
    stt: 528,
    hc: "Cảm mạo phong hàn ở trẻ em",
    phanloai: ["Nhi Khoa", "Hàn", "Thực", "Phong hàn"],
    tc: ["Sốt nhẹ, sợ lạnh, không mồ hôi", "Ho ngứa họng, nước mũi trong", "Thắt lưng và mình đau mỏi", "Trẻ quấy khóc, bú kém", "Rêu lưỡi trắng mỏng", "Mạch phù khẩn"],
    pdt: "Tán hàn giải biểu, tuyên phế chỉ khái",
    bt: "Hạnh tô tán gia giảm",
    tpbt: ["Tô diệp 6g", "Hạnh nhân 6g", "Tiền hồ 6g", "Cát cánh 6g", "Trần bì 4g", "Phục linh 8g", "Cam thảo 4g"]
  },
  "NKH_002": {
    stt: 529,
    hc: "Cảm mạo phong nhiệt ở trẻ em",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Phong nhiệt"],
    tc: ["Sốt cao, sợ gió, vã mồ hôi nhẹ", "Ho đờm đặc vàng, đau họng đỏ", "Chảy nước mũi đặc, khát nước", "Lưỡi đỏ rêu vàng mỏng", "Mạch phù sác"],
    pdt: "Sơ phong thanh nhiệt, tuyên phế giải biểu",
    bt: "Ngân kiều tán gia giảm",
    tpbt: ["Kim ngân hoa 10g", "Liên kiều 8g", "Cát cánh 6g", "Bạc hà 4g", "Trúc diệp 6g", "Kinh giới 6g", "Cam thảo 4g"]
  },
  "NKH_003": {
    stt: 530,
    hc: "Cảm mạo thử thấp ở trẻ em",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Thử thấp"],
    tc: ["Sốt hầm hập không lui về mùa hè", "Thân thể nặng nề, nôn mửa", "Bụng trướng, đại tiện lỏng nhão", "Rêu lưỡi vàng nhớt", "Mạch nhu sác"],
    pdt: "Thanh thử hóa thấp, hòa trung giải biểu",
    bt: "Tân gia hương nhu ẩm gia giảm",
    tpbt: ["Hương nhu 6g", "Biển đậu 8g", "Hậu phác 6g", "Bạch truật 8g", "Phục linh 8g", "Cam thảo 4g"]
  },
  "NKH_004": {
    stt: 531,
    hc: "Khái đàm phong hàn ở trẻ em",
    phanloai: ["Nhi Khoa", "Hàn", "Thực", "Phong hàn đàm ẩm"],
    tc: ["Ho hen thở gấp, ngực trướng", "Đờm trắng loãng nhiều bọt dễ khạc", "Tiếng ho trong, sợ lạnh", "Rêu lưỡi trắng nhuận", "Mạch phù khẩn"],
    pdt: "Ôn phế tán hàn, hóa đàm chỉ khái",
    bt: "Tiểu thanh long thang gia giảm",
    tpbt: ["Ma hoàng 4g", "Quế chi 4g", "Tế tân 2g", "Can khương 4g", "Bán hạ chế 6g", "Bạch thược 6g", "Cam thảo 4g"]
  },
  "NKH_005": {
    stt: 532,
    hc: "Khái đàm đàm nhiệt ủng phế ở trẻ em",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Đàm nhiệt"],
    tc: ["Ho hen thở gấp, cánh mũi phập phồng", "Đờm dính vàng đặc hôi", "Sốt cao bứt rứt, miệng khát", "Rêu lưỡi vàng dày nhớt", "Mạch hoạt sác"],
    pdt: "Thanh nhiệt tuyên phế, hóa đàm định suyễn",
    bt: "Định suyễn thang gia giảm",
    tpbt: ["Ma hoàng 4g", "Hạnh nhân 6g", "Tang bạch bì 8g", "Hoàng cầm 6g", "Khoản đông hoa 6g", "Tô tử 6g", "Bán hạ chế 6g", "Cam thảo 4g"]
  },
  "NKH_006": {
    stt: 533,
    hc: "Khái đàm đàm thấp uẩn phế ở trẻ em",
    phanloai: ["Nhi Khoa", "Bình", "Thực", "Đàm thấp"],
    tc: ["Ho hắng kéo dài, đờm trắng dính nhiều", "Ăn kém, bụng trướng đầy", "Sắc mặt úa vàng, mệt mỏi", "Rêu lưỡi trắng nhớt", "Mạch nhu hoạt"],
    pdt: "Kiện tỳ táo thấp, hóa đàm chỉ khái",
    bt: "Nhị trần thang hợp Tam tử dưỡng thân thang",
    tpbt: ["Bán hạ chế 6g", "Trần bì 4g", "Phục linh 8g", "Bạch giới tử 6g", "Tô tử 6g", "Lai phục tử 6g", "Cam thảo 4g"]
  },
  "NKH_007": {
    stt: 534,
    hc: "Phế khí hư khái ở trẻ em",
    phanloai: ["Nhi Khoa", "Bình", "Hư", "Phế khí hư"],
    tc: ["Ho kéo dài không lực, tiếng ho nhỏ", "Thở ngắn, vã mồ hôi khi vận động", "Dễ cảm mạo, sắc mặt bệch nhợt", "Lưỡi nhợt", "Mạch tế nhược"],
    pdt: "Bổ phế ích khí, chỉ khái",
    bt: "Bổ phế thang gia giảm",
    tpbt: ["Nhân sâm 6g", "Hoàng kỳ 10g", "Thục địa 10g", "Ngũ vị tử 4g", "Tang bạch bì 8g", "Tử uyển 6g"]
  },
  "NKH_008": {
    stt: 535,
    hc: "Phế âm hư khái ở trẻ em",
    phanloai: ["Nhi Khoa", "Nhiệt", "Hư", "Phế âm hư"],
    tc: ["Ho khan ít đờm, đờm dính máu nhẹ", "Họng khô miệng rát, gò má đỏ", "Triều nhiệt đạo hãn về chiều", "Lưỡi đỏ ít rêu", "Mạch tế sác"],
    pdt: "Tư âm nhuận phế, chỉ khái",
    bt: "Bách hợp cố kim thang gia giảm",
    tpbt: ["Bách hợp 10g", "Sinh địa 10g", "Mạch môn 8g", "Huyền sâm 8g", "Bối mẫu 6g", "Cát cánh 6g", "Bạch thược 8g"]
  },
  "NKH_009": {
    stt: 536,
    hc: "Bách nhật khái (Ho gà) thể Đàm hỏa nhiệt ngưng",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Đàm hỏa"],
    tc: ["Ho cơn dữ dội rít như tiếng gà gáy", "Mặt đỏ mắt đỏ sau cơn ho, nôn ra đờm dãi", "Chảy máu cam, tiểu đỏ", "Rêu lưỡi vàng nhớt", "Mạch hoạt sác"],
    pdt: "Thanh phế hóa đàm, giáng nghịch chỉ khái",
    bt: "Tả bạch tán hợp Đình lịch đại táo tả phế thang",
    tpbt: ["Tang bạch bì 8g", "Địa cốt bì 8g", "Đình lịch tử 6g", "Đại táo 3quả", "Hạnh nhân 6g", "Cam thảo 4g"]
  },
  "NKH_010": {
    stt: 537,
    hc: "Bách nhật khái thể Phế âm khuy tổn",
    phanloai: ["Nhi Khoa", "Nhiệt", "Hư", "Phế âm hư"],
    tc: ["Ho cơn thưa dần nhưng ho khan kéo dài", "Giọng nói khàn, miệng khô họng rát", "Sốt nhẹ về chiều, vã mồ hôi trộm", "Lưỡi đỏ khô", "Mạch tế sác"],
    pdt: "Tư âm nhuận phế, chỉ khái hóa đàm",
    bt: "Sa sâm mạch đông thang gia giảm",
    tpbt: ["Sa sâm 10g", "Mạch môn 8g", "Ngọc trúc 8g", "Sinh địa 10g", "Thiên hoa phấn 8g", "Cam thảo 4g"]
  },
  "NKH_011": {
    stt: 538,
    hc: "Đại khái hen thể Phong hàn ngoại bọc Hàn đàm nội đình",
    phanloai: ["Nhi Khoa", "Hàn", "Thực", "Phong hàn đàm ẩm"],
    tc: ["Ho hen hốt hoảng thở gấp, tiếng cò cử", "Đờm trắng loãng bọt, sợ lạnh", "Sốt nhẹ, không mồ hôi", "Rêu lưỡi trắng dính", "Mạch phù khẩn"],
    pdt: "Tán hàn tuyên phế, ôn đàm bình suyễn",
    bt: "Xạ can bán hạ thang gia giảm",
    tpbt: ["Xạ can 6g", "Bán hạ chế 6g", "Tế tân 2g", "Can khương 4g", "Tô tử 6g", "Ma hoàng 4g", "Cam thảo 4g"]
  },
  "NKH_012": {
    stt: 539,
    hc: "Đại khái hen thể Đàm nhiệt ủng phế",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Đàm nhiệt"],
    tc: ["Thở hen khò khè kêu to, vã mồ hôi nóng", "Đờm vàng dính quánh khó khạc", "Mặt đỏ, miệng khát thích uống lạnh", "Lưỡi đỏ rêu vàng nhớt", "Mạch hoạt sác"],
    pdt: "Thanh nhiệt tuyên phế, hóa đàm bình suyễn",
    bt: "Ma hạnh thạch cam thang gia giảm",
    tpbt: ["Ma hoàng 4g", "Hạnh nhân 6g", "Thạch cao 15g", "Cam thảo 4g", "Tang bạch bì 8g", "Hoàng cầm 6g"]
  },
  "NKH_013": {
    stt: 540,
    hc: "Đại khái hen giai đoạn mạn thể Phế Tỳ khí hư",
    phanloai: ["Nhi Khoa", "Bình", "Hư", "Phế Tỳ khí hư"],
    tc: ["Cơn hen đã đỡ nhưng thở ngắn hụt hơi", "Ăn uống kém, đại tiện nhão lỏng", "Sắc mặt bệch úa, mệt mỏi", "Lưỡi nhợt rêu trắng", "Mạch hư nhược"],
    pdt: "Kiện tỳ ích khí, bổ phế hóa đàm",
    bt: "Lục quân tử thang gia giảm",
    tpbt: ["Đảng sâm 8g", "Bạch truật 8g", "Phục linh 8g", "Cam thảo 4g", "Trần bì 4g", "Bán hạ chế 6g"]
  },
  "NKH_014": {
    stt: 541,
    hc: "Đại khái hen giai đoạn mạn thể Thận bất nạp khí",
    phanloai: ["Nhi Khoa", "Hàn", "Hư suy", "Thận bất nạp khí"],
    tc: ["Thở gấp khi vận động, thở vào khó hơn thở ra", "Tay chân lạnh, sợ lạnh, mệt mỏi kiệt sức", "Chân gối yếu mềm", "Mạch trầm tế vô lực"],
    pdt: "Bổ thận nạp khí, bình suyễn định chí",
    bt: "Kim quỹ Thận khí hoàn gia Hồ đào nhục",
    tpbt: ["Thục địa 10g", "Sơn thù 6g", "Hoài sơn 8g", "Nhục quế 3g", "Phụ tử chế 4g", "Hồ đào nhục 8g"]
  },
  "NKH_015": {
    stt: 542,
    hc: "Phế ung ở trẻ em thể Phong nhiệt ủng phế",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Phong nhiệt hỏa độc"],
    tc: ["Sốt cao rét run, ho hen ngực đau", "Đờm nhiều dính đặc vàng hôi", "Miệng khô khát nước", "Rêu lưỡi vàng dày", "Mạch sác hữu lực"],
    pdt: "Sơ phong thanh nhiệt, tuyên phế giải độc",
    bt: "Ngân kiều tán hợp Tả bạch tán",
    tpbt: ["Kim ngân hoa 10g", "Liên kiều 8g", "Tang bạch bì 8g", "Địa cốt bì 8g", "Hạnh nhân 6g", "Cam thảo 4g"]
  },
  "NKH_016": {
    stt: 543,
    hc: "Phế ung ở trẻ em thể Hỏa độc thành nùng",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Nhiệt độc bài nùng"],
    tc: ["Ho khạc ra nhiều đờm mủ lẫn máu mùi tanh hôi", "Sốt cao không lui, ngực đau quặn", "Mặt đỏ, tiểu đỏ đại tiện táo", "Lưỡi đỏ thẫm rêu vàng nhớt", "Mạch hoạt sác"],
    pdt: "Thanh nhiệt giải độc, bài nùng tiêu ung",
    bt: "Thiên kim vị kinh thang gia giảm",
    tpbt: ["Vĩ kinh 15g", "Đông qua nhân 10g", "Ý dĩ nhân 10g", "Đào nhân 6g", "Bồ công anh 10g", "Kim ngân hoa 10g"]
  },
  "NKH_017": {
    stt: 544,
    hc: "Khai họng sưng đau do Phong nhiệt uất họng",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Phong nhiệt"],
    tc: ["Trẻ kêu đau họng, nuốt sặc quấy khóc", "Cổ họng đỏ sưng, sốt nhẹ sợ gió", "Mũi chảy nước đặc", "Mạch phù sác"],
    pdt: "Sơ phong thanh nhiệt, lợi họng tiêu thũng",
    bt: "Cát cánh thang gia Ngân hoa, Liên kiều",
    tpbt: ["Cát cánh 6g", "Cam thảo 4g", "Kim ngân hoa 10g", "Liên kiều 8g", "Bạc hà 4g", "Ngưu bàng tử 6g"]
  },
  "NKH_018": {
    stt: 545,
    hc: "Khai họng sưng loét do Nhiệt độc hỏa thịnh (Viêm họng mủ)",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Hỏa độc"],
    tc: ["Sốt cao 39-40 độ, họng sưng đỏ nổi mủ trắng", "Nuốt đau dữ dội, không ăn uống được", "Mặt đỏ, hôi miệng", "Mạch sác hữu lực"],
    pdt: "Thanh nhiệt giải độc, lợi họng bài nùng",
    bt: "Hoàng liên giải độc thang gia Cát cánh, Bồ công anh",
    tpbt: ["Hoàng liên 4g", "Hoàng cầm 6g", "Hoàng bá 6g", "Chi tử 6g", "Cát cánh 6g", "Bồ công anh 10g"]
  },
  "NKH_019": {
    stt: 546,
    hc: "Khô họng kéo dài do Can Thận âm hư phế tân kiệt",
    phanloai: ["Nhi Khoa", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Niêm mạc họng khô đỏ rát dai dẳng", "Ho khan không đờm, gò má đỏ về chiều", "Sốt nhẹ, vã mồ hôi trộm", "Mạch tế sác"],
    pdt: "Tư âm thanh nhiệt, nhuận phế lợi họng",
    bt: "Dưỡng âm thanh phế thang gia giảm",
    tpbt: ["Bách hợp 10g", "Mạch môn 8g", "Huyền sâm 8g", "Sinh địa 10g", "Bối mẫu 6g", "Bạch thược 8g"]
  },
  "NKH_020": {
    stt: 547,
    hc: "Mũi chảy nước trong do Phong hàn phạm phế",
    phanloai: ["Nhi Khoa", "Hàn", "Thực", "Phong hàn"],
    tc: ["Mũi nghẹt, chảy nước mũi trong rỉ rả", "Hắt hơi liên tục, ho hắng nhẹ", "Sợ lạnh, không mồ hôi", "Mạch phù khẩn"],
    pdt: "Tán hàn giải biểu, thông khiếu chỉ súc",
    bt: "Thương nhĩ tử tán gia Kinh giới, Phòng phong",
    tpbt: ["Thương nhĩ tử 6g", "Tân di hoa 4g", "Bạch chỉ 6g", "Bạc hà 4g", "Kinh giới 6g", "Phòng phong 6g"]
  },
  "NKH_021": {
    stt: 548,
    hc: "Mũi chảy mủ vàng do Phong nhiệt uất phế (Viêm xoang nhi)",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Phong nhiệt"],
    tc: ["Mũi nghẹt đặc, chảy dịch mủ vàng hôi", "Đau trướng vùng trán và hốc mũi", "Sốt nhẹ, miệng khát", "Mạch phù sác"],
    pdt: "Sơ phong thanh nhiệt, thông khiếu bài nùng",
    bt: "Thương nhĩ tử tán gia Ngân hoa, Liên kiều",
    tpbt: ["Thương nhĩ tử 6g", "Tân di hoa 4g", "Bạch chỉ 6g", "Bạc hà 4g", "Kim ngân hoa 10g", "Liên kiều 8g"]
  },
  "NKH_022": {
    stt: 549,
    hc: "Tị nục (Chảy máu cam) do Phế nhiệt vọng hành",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Phế nhiệt"],
    tc: ["Máu cam chảy ra đỏ tươi từng giọt hoặc dòng", "Khô mũi, ho khan nhẹ, sốt nhẹ", "Mặt đỏ, tiểu vàng", "Mạch sác"],
    pdt: "Thanh phế tả hỏa, lương huyết chỉ huyết",
    bt: "Tang cúc ẩm gia Bồ hoàng sao, Mao căn",
    tpbt: ["Tang diệp 6g", "Cúc hoa 6g", "Hạnh nhân 6g", "Liên kiều 8g", "Bạc hà 4g", "Bồ hoàng 6g", "Bạch mao căn 10g"]
  },
  "NKH_023": {
    stt: 550,
    hc: "Tị nục do Vị hỏa xí thịnh",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Vị hỏa"],
    tc: ["Chảy máu cam nhiều máu đỏ sẫm, chân răng sưng", "Miệng hôi khát nước, bụng trướng", "Táo bón, tiểu đỏ", "Mạch hoạt sác"],
    pdt: "Thanh vị tả hỏa, lương huyết chỉ huyết",
    bt: "Thanh vị tán gia Tam thất, Bạch mao căn",
    tpbt: ["Hoàng liên 4g", "Thăng ma 4g", "Sinh địa 10g", "Đan bì 6g", "Tam thất 4g", "Bạch mao căn 10g"]
  },
  "NKH_024": {
    stt: 551,
    hc: "Tị nục do Can hỏa bốc trào",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Can hỏa"],
    tc: ["Chảy máu cam sau khi quấy khóc tức giận", "Mắt đỏ, miệng đắng, đau đầu", "Trẻ cáu gắt, ngủ trằn trọc", "Mạch huyền sác"],
    pdt: "Thanh can tả hỏa, lương huyết chỉ huyết",
    bt: "Long đởm tả can thang gia Bồ hoàng",
    tpbt: ["Long đởm thảo 6g", "Chi tử 6g", "Hoàng cầm 6g", "Trạch tả 6g", "Sài hồ 4g", "Bồ hoàng 6g"]
  },
  "NKH_025": {
    stt: 552,
    hc: "Tị nục do Khí hư không nhiếp huyết",
    phanloai: ["Nhi Khoa", "Bình", "Hư", "Khí hư không nhiếp huyết"],
    tc: ["Chảy máu cam tái đi tái lại lượng ít sắc hồng nhạt", "Sắc mặt bệch tái, mệt mỏi hụt hơi", "Ăn kém tiêu chảy", "Mạch hư nhược"],
    pdt: "Bổ khí kiện tỳ, nhiếp huyết chỉ huyết",
    bt: "Quy tỳ thang gia Bồ hoàng sao",
    tpbt: ["Đảng sâm 8g", "Bạch truật 8g", "Phục linh 8g", "Hoàng kỳ 10g", "Đương quy 6g", "Long nhãn 8g", "Bồ hoàng 6g"]
  },
  "NKH_026": {
    stt: 553,
    hc: "Trúng phong ngoại cảm ở trẻ em thể Thấp nhiệt trở kinh",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Sốt hầm hập, chân tay co giật nhẹ", "Cổ gáy cứng mỏi, mệt mỏi lơ mơ", "Rêu dầy vàng nhớt", "Mạch nhu sác"],
    pdt: "Thanh nhiệt lợi thấp, thư gân thông lạc",
    bt: "Tam nhân thang gia Khương hoạt, Tần giao",
    tpbt: ["Hạnh nhân 6g", "Ý dĩ 10g", "Bán hạ chế 6g", "Khương hoạt 6g", "Tần giao 6g", "Cam thảo 4g"]
  },
  "NKH_027": {
    stt: 554,
    hc: "Cơn ho biến chứng suy hô hấp thể Phế Thận khí kiệt",
    phanloai: ["Nhi Khoa", "Bình", "Hư suy", "Khí kiệt"],
    tc: ["Thở nông gấp đứt đoạn, vã mồ hôi lạnh", "Cánh mũi phập phồng, môi tím tái", "Trẻ lơ mơ kiệt sức", "Mạch vi tế muốn tuyệt"],
    pdt: "Đại bổ nguyên khí, nạp thận bình suyễn cố thoát",
    bt: "Sâm phụ thang hợp Sinh mạch tán",
    tpbt: ["Nhân sâm 8g", "Phụ tử chế 6g", "Mạch môn 8g", "Ngũ vị tử 4g"]
  },
  "NKH_028": {
    stt: 555,
    hc: "Sốt cao co giật thể Nhiệt cực sinh phong",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Nhiệt cực sinh phong"],
    tc: ["Trẻ sốt cao 39.5-40.5 độ đột ngột co giật", "Hai mắt trợn ngược, răng cắn chặt", "Thần chí mê muội, mặt đỏ gừ", "Mạch huyền sác hữu lực"],
    pdt: "Thanh nhiệt tả hỏa, tức phong chỉ kinh",
    bt: "Linh dương câu đằng ẩm gia giảm",
    tpbt: ["Linh dương giác 2g", "Câu đằng 8g", "Tang diệp 6g", "Cúc hoa 6g", "Bạch thược 8g", "Sinh địa 10g", "Cam thảo 4g"]
  },
  "NKH_029": {
    stt: 556,
    hc: "Sốt cao co giật thể Đàm nhiệt hãm tâm bao",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Đàm nhiệt bế khiếu"],
    tc: ["Sốt cao co giật kèm cổ họng lọc sọc đờm dãi", "Miệng sùi bọt đờm, hôn mê", "Rêu dầy vàng nhớt", "Mạch hoạt sác"],
    pdt: "Thanh nhiệt hóa đàm, thanh tâm khai khiếu",
    bt: "An cung ngưu hoàng hoàn hợp Địch đàm thang",
    tpbt: ["Ngưu hoàng 0.5g", "Trúc nhự 6g", "Bán hạ chế 6g", "Chỉ thực 4g", "Đởm nam tinh 4g", "Thạch xương bồ 6g"]
  },
  "NKH_030": {
    stt: 557,
    hc: "Sốt cao co giật tái phát thể Can Thận âm hư phong động",
    phanloai: ["Nhi Khoa", "Nhiệt", "Hư", "Âm hư phong động"],
    tc: ["Hay bị co giật khi sốt nhẹ hoặc giật cơ nhẹ", "Gò má đỏ, triều nhiệt, lòng bàn tay chân nóng", "Trẻ gầy gộc, ngủ chập chờn", "Mạch tế sác"],
    pdt: "Tư âm giáng hỏa, bình can tức phong",
    bt: "Tri bá địa hoàng hoàn gia Câu đằng, Mẫu lệ",
    tpbt: ["Thục địa 10g", "Tri mẫu 6g", "Hoàng bá 6g", "Sơn thù 6g", "Câu đằng 8g", "Mẫu lệ 10g"]
  },
  "NKH_031": {
    stt: 558,
    hc: "Thích ăn chán ăn (Tích trệ) do Tỳ Vị khí hư",
    phanloai: ["Nhi Khoa", "Bình", "Hư", "Tỳ Vị khí hư"],
    tc: ["Trẻ lười ăn, ăn không ngon miệng", "Bụng trướng nhẹ sau ăn, tiêu chảy nhão", "Mệt mỏi, sắc mặt úa vàng, gầy còm", "Mạch hoãn nhược"],
    pdt: "Kiện tỳ ích khí, hòa vị tiêu thực",
    bt: "Dị công tán gia giảm",
    tpbt: ["Đảng sâm 8g", "Bạch truật 8g", "Phục linh 8g", "Trần bì 4g", "Cam thảo 4g", "Sơn tra 6g"]
  },
  "NKH_032": {
    stt: 559,
    hc: "Tích trệ (Thực tích) do Bội thực ăn uống",
    phanloai: ["Nhi Khoa", "Bình", "Thực", "Thực tích"],
    tc: ["Bụng trướng cứng đau cự án, ợ chua hôi thối", "Nôn ra thức ăn chưa tiêu, nôn xong bớt đau", "Đại tiện hôi thối hoặc bế kết", "Rêu dầy nhớt", "Mạch hoạt"],
    pdt: "Tiêu thực đạo trệ, hòa vị giáng nghịch",
    bt: "Bảo hòa hoàn gia giảm",
    tpbt: ["Sơn tra 8g", "Thần khúc 8g", "Lai phục tử 6g", "Bán hạ chế 6g", "Trần bì 4g", "Phục linh 8g", "Liên kiều 6g"]
  },
  "NKH_033": {
    stt: 560,
    hc: "Thương thực nôn mửa do Vị nhiệt thượng nghịch",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Vị nhiệt"],
    tc: ["Nôn ra thức ăn chua hôi rát cổ họng", "Miệng hôi, khát nước thích uống lạnh", "Mặt đỏ, táo bón", "Rêu vàng nhớt", "Mạch hoạt sác"],
    pdt: "Thanh vị tả hỏa, giáng nghịch chỉ nôn",
    bt: "Thanh vị tán gia Bán hạ, Trúc nhự",
    tpbt: ["Hoàng liên 4g", "Thăng ma 4g", "Sinh địa 10g", "Đan bì 6g", "Bán hạ chế 6g", "Trúc nhự 6g"]
  },
  "NKH_034": {
    stt: 561,
    hc: "Nôn mửa ở trẻ em do Tỳ Vị hư hàn",
    phanloai: ["Nhi Khoa", "Hàn", "Hư", "Tỳ Vị hư hàn"],
    tc: ["Nôn ra nước trong nhạt miệng sau khi ăn bú", "Bụng đau âm ỉ thích ấm và xoa bóp", "Sợ lạnh, tay chân lạnh ngắt", "Mạch trầm tế hoãn"],
    pdt: "Ôn trung kiện tỳ, giáng nghịch chỉ nôn",
    bt: "Can khương nhân sâm bán hạ thang",
    tpbt: ["Can khương 4g", "Nhân sâm 6g", "Bán hạ chế 6g", "Sinh khương 4g", "Bạch truật 8g"]
  },
  "NKH_035": {
    stt: 562,
    hc: "Nôn mửa ở trẻ em do Can Vị bất hòa",
    phanloai: ["Nhi Khoa", "Bình", "Hư thực thác tạp", "Khí nghịch"],
    tc: ["Trẻ nôn trớ mỗi khi khóc giận dữ", "Ợ chua, ngực trướng bức bối", "Miệng đắng, dễ quấy khóc", "Mạch huyền hoãn"],
    pdt: "Sơ can hòa vị, giáng nghịch chỉ nôn",
    bt: "Tiêu dao tán hợp Tả kim hoàn",
    tpbt: ["Sài hồ 6g", "Bạch thược 8g", "Bạch truật 8g", "Phục linh 8g", "Hoàng liên 4g", "Ngô thù du 2g"]
  },
  "NKH_036": {
    stt: 563,
    hc: "Nôn mửa ở trẻ em do Đàm thấp trung trở",
    phanloai: ["Nhi Khoa", "Bình", "Thực", "Đàm thấp"],
    tc: ["Nôn ra nhiều đờm dãi dính nhớt", "Đầu nặng trướng, ngực bụng đầy trướng", "Rêu dầy dính trắng", "Mạch nhu hoạt"],
    pdt: "Táo thấp hóa đàm, hòa vị chỉ nôn",
    bt: "Nhị trần thang gia Sinh khương, Sa nhân",
    tpbt: ["Bán hạ chế 6g", "Trần bì 4g", "Phục linh 8g", "Sinh khương 4g", "Sa nhân 4g", "Cam thảo 4g"]
  },
  "NKH_037": {
    stt: 564,
    hc: "Tiêu chảy ở trẻ em (Thương thực tả) do Tích trệ",
    phanloai: ["Nhi Khoa", "Bình", "Thực", "Thực tích tả"],
    tc: ["Đi tiêu lỏng nhiều lần, phân lổ nhổ chua hôi", "Bụng trướng đau trước khi tiêu, tiêu xong bớt đau", "Ợ hơi hôi, không muốn ăn", "Rêu dầy dính"],
    pdt: "Tiêu thực đạo trệ, hòa trung chỉ tả",
    bt: "Bảo hòa hoàn gia Bạch truật, Phục linh",
    tpbt: ["Sơn tra 8g", "Thần khúc 8g", "Lai phục tử 6g", "Bán hạ chế 6g", "Trần bì 4g", "Phục linh 8g", "Bạch truật 8g"]
  },
  "NKH_038": {
    stt: 565,
    hc: "Tiêu chảy ở trẻ em (Thấp nhiệt tả) do Thấp nhiệt hạ chú",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Thấp nhiệt tả"],
    tc: ["Đi tiêu lỏng như xối, phân vàng bắn vọt hôi nồng", "Hậu môn nóng đỏ rát, trẻ quấy khóc", "Sốt, tiểu ngắn đỏ", "Rêu vàng nhớt", "Mạch nhu sác"],
    pdt: "Thanh nhiệt lợi thấp, chỉ tả",
    bt: "Cát căn hoàng liên hoàng bá thang",
    tpbt: ["Cát căn 10g", "Hoàng liên 4g", "Hoàng cầm 6g", "Cam thảo 4g"]
  },
  "NKH_039": {
    stt: 566,
    hc: "Tiêu chảy ở trẻ em (Phong hàn tả) do Phong hàn ngoại cảm",
    phanloai: ["Nhi Khoa", "Hàn", "Thực", "Phong hàn tả"],
    tc: ["Đi tiêu phân lỏng nhiều bọt nước trong", "Bụng đau quặn lạnh, gặp ấm bớt", "Trẻ sợ lạnh, sốt nhẹ", "Rêu trắng mỏng nhuận", "Mạch phù khẩn"],
    pdt: "Sơ phong tán hàn, ôn trung chỉ tả",
    bt: "Hạnh tô tán hợp Hoắc hương chính khí tán",
    tpbt: ["Tô diệp 6g", "Hoắc hương 6g", "Bán hạ chế 6g", "Trần bì 4g", "Phục linh 8g", "Can khương 4g", "Cam thảo 4g"]
  },
  "NKH_040": {
    stt: 567,
    hc: "Tiêu chảy ở trẻ em (Tỳ hư tả) do Tỳ vị suy nhược",
    phanloai: ["Nhi Khoa", "Bình", "Hư", "Tỳ hư tả"],
    tc: ["Tiêu chảy kéo dài dai dẳng, phân lỏng lẫn thức ăn sống", "Sau khi ăn là muốn đi tiêu ngay", "Sắc mặt vàng nhợt, gầy còm mệt mỏi", "Mạch hoãn nhược"],
    pdt: "Kiện tỳ ích khí, thẩm thấp chỉ tả",
    bt: "Sâm linh bạch truật tán gia giảm",
    tpbt: ["Đảng sâm 8g", "Bạch truật 8g", "Phục linh 8g", "Hoài sơn 8g", "Liên nhục 8g", "Ý dĩ 8g", "Cát cánh 4g", "Cam thảo 4g"]
  },
  "NKH_041": {
    stt: 568,
    hc: "Tiêu chảy ở trẻ em (Tỳ Thận dương hư tả) do Mệnh môn hỏa suy",
    phanloai: ["Nhi Khoa", "Hàn", "Hư suy", "Tỳ Thận dương hư"],
    tc: ["Tiêu chảy sáng sớm hoặc đi tiêu liên tục phân sống lạnh", "Tay chân lạnh ngắt, sợ lạnh, bụng dưới lạnh đau", "Trẻ suy nhược nặng, da bệch tái", "Mạch trầm tế trì"],
    pdt: "Ôn bổ tỳ thận, cố sáp chỉ tả",
    bt: "Tứ thần hoàn gia Phụ tử, Can khương",
    tpbt: ["Bổ cốt chỉ 8g", "Ngũ vị tử 4g", "Nhục đậu khấu 6g", "Ngô thù du 4g", "Phụ tử chế 4g", "Can khương 4g"]
  },
  "NKH_042": {
    stt: 569,
    hc: "Lỵ chứng ở trẻ em thể Thấp nhiệt lỵ",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Thấp nhiệt lỵ"],
    tc: ["Đau bụng quặn mót rặn, đi tiêu ra máu mủ dính nhầy", "Hậu môn nóng rát, sốt, tiểu ngắn đỏ", "Rêu lưỡi vàng nhớt", "Mạch hoạt sác"],
    pdt: "Thanh nhiệt trừ thấp, hòa vinh hành khí chỉ lỵ",
    bt: "Bạch đầu ông thang gia Hoàng liên, Đương quy",
    tpbt: ["Bạch đầu ông 10g", "Hoàng liên 4g", "Hoàng bá 6g", "Tần bì 6g", "Đương quy 6g", "Mộc hương 4g"]
  },
  "NKH_043": {
    stt: 570,
    hc: "Lỵ chứng ở trẻ em thể Hàn thấp lỵ",
    phanloai: ["Nhi Khoa", "Hàn", "Thực", "Hàn thấp lỵ"],
    tc: ["Đau bụng âm ỉ mót rặn đi tiêu ra chất nhầy trắng như mỡ", "Trẻ sợ lạnh, tay chân lạnh, không khát", "Rêu dầy dính trắng", "Mạch nhu trì"],
    pdt: "Ôn trung hóa thấp, lý khí chỉ lỵ",
    bt: "Vị linh tán gia Mộc hương, Nhục đậu khấu",
    tpbt: ["Thương truật 6g", "Hậu phác 6g", "Trần bì 4g", "Bạch truật 8g", "Phục linh 8g", "Quế chi 4g", "Mộc hương 4g"]
  },
  "NKH_044": {
    stt: 571,
    hc: "Lỵ chứng ở trẻ em thể Khí hư cấm khẩu lỵ",
    phanloai: ["Nhi Khoa", "Bình", "Hư thực thác tạp", "Khí hư lỵ"],
    tc: ["Đi tiêu lỵ dai dẳng kèm nôn mửa không ăn được", "Thần tinh mệt mỏi kiệt sức, mặt bệch nhợt", "Mạch hư nhược hoãn"],
    pdt: "Bổ trung ích khí, hòa vị chỉ lỵ",
    bt: "Bổ trung ích khí thang hợp Mộc hương binh lang hoàn",
    tpbt: ["Hoàng kỳ 10g", "Đảng sâm 8g", "Bạch truật 8g", "Thăng ma 4g", "Sài hồ 4g", "Mộc hương 4g", "Binh lang 4g"]
  },
  "NKH_045": {
    stt: 572,
    hc: "Dịch tả ở trẻ em (Thổ tả cấp) do Thử thấp ngột ngạt",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Thử thấp hỏa độc"],
    tc: ["Nôn mửa xối xả kèm tiêu chảy lỏng như nước gội gạo", "Bụng đau quặn, mắt trũng sâu, da nhăn", "Chân tay co rút, sốt cao", "Mạch nhu sác dũng mãnh"],
    pdt: "Thanh nhiệt giải độc, hóa thấp kiên tán chỉ thổ tả",
    bt: "Nhiên chiếu tán gia giảm",
    tpbt: ["Hoắc hương 6g", "Bội lan 6g", "Bán hạ chế 6g", "Hoàng liên 4g", "Mộc hương 4g", "Bạch truật 8g"]
  },
  "NKH_046": {
    stt: 573,
    hc: "Dịch tả biến chứng Vong dương nguy cấp",
    phanloai: ["Nhi Khoa", "Hàn", "Hư suy", "Vong dương"],
    tc: ["Sau nôn mửa tiêu chảy xối xả tay chân lạnh ngắt quá gối", "Vã mồ hôi lạnh đầm đìa, mắt nhắm lơ mơ", "Mạch vi tế muốn tuyệt"],
    pdt: "Hồi dương cứu nghịch, đại bổ nguyên khí",
    bt: "Tứ nghịch thang hợp Sâm phụ thang",
    tpbt: ["Phụ tử chế 8g", "Can khương 6g", "Nhân sâm 8g", "Chích cam thảo 4g"]
  },
  "NKH_047": {
    stt: 574,
    hc: "Tỳ cam (Bệnh cam trẻ em) do Tỳ Vị khí hư tích trệ",
    phanloai: ["Nhi Khoa", "Bình", "Hư thực thác tạp", "Tỳ hư thực tích"],
    tc: ["Trẻ gầy còm đít teo bụng to bện gân xanh", "Sắc mặt úa vàng, tóc thưa xơ xác", "Bội thực nôn mửa, ăn dốt đồ lạ", "Mạch tế nhược"],
    pdt: "Kiện tỳ tiêu tích, thanh nhiệt sát trùng",
    bt: "Tỳ cam hoàn gia giảm",
    tpbt: ["Đảng sâm 8g", "Bạch truật 8g", "Phục linh 8g", "Sơn tra 6g", "Thần khúc 6g", "Sử quân tử 6g", "Hoàng liên 4g"]
  },
  "NKH_048": {
    stt: 575,
    hc: "Can cam ở trẻ em do Can hỏa uất kết nhiệt thịnh",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Can hỏa cam"],
    tc: ["Trẻ gầy gộc bực bội hay cáu giận đập phá", "Mắt đỏ sưng rát, hay dụi mắt (quáng gà)", "Tiểu đỏ, đại tiện táo hôi", "Mạch huyền sác"],
    pdt: "Thanh can tả hỏa, tiêu tích minh mục",
    bt: "Long đởm tả can thang hợp Bát bảo quang minh tán",
    tpbt: ["Long đởm thảo 6g", "Chi tử 6g", "Hoàng cầm 6g", "Trạch tả 6g", "Kỷ tử 8g", "Cúc hoa 6g", "Thạch quyết minh 10g"]
  },
  "NKH_049": {
    stt: 576,
    hc: "Tâm cam ở trẻ em do Tâm hỏa xí thịnh",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Tâm hỏa cam"],
    tc: ["Trẻ gầy còm phiền bứt rứt, mất ngủ quấy đêm", "Loét miệng lưỡi đỏ rát, nghiến răng", "Tiểu buốt đỏ", "Mạch sác hữu lực"],
    pdt: "Thanh tâm tả hỏa, an thần tiêu cam",
    bt: "Đạo xích tán gia Hoàng liên, Sơn tra",
    tpbt: ["Sinh địa 10g", "Mộc thông 6g", "Trúc diệp 6g", "Hoàng liên 4g", "Sơn tra 6g", "Cam thảo 4g"]
  },
  "NKH_050": {
    stt: 577,
    hc: "Thận cam ở trẻ em do Thận tinh bất túc",
    phanloai: ["Nhi Khoa", "Bình", "Hư suy", "Thận tinh bất túc"],
    tc: ["Trẻ gầy khô xương sống lộ rõ, chậm mọc răng", "Chân yếu không đi được, tóc rụng khô bối", "Mệt mỏi đần độn", "Mạch trầm tế vô lực"],
    pdt: "Bổ thận điền tinh, ích tủy tiêu cam",
    bt: "Lục vị địa hoàng hoàn gia Lộc giác giao, Tử hà xe",
    tpbt: ["Thục địa 10g", "Sơn thù 6g", "Hoài sơn 8g", "Trạch tả 6g", "Đan bì 6g", "Phục linh 8g", "Lộc giác giao 6g"]
  },
  "NKH_051": {
    stt: 578,
    hc: "Thất tiêu (Chán ăn dai dẳng) do Tỳ Vị bất hòa",
    phanloai: ["Nhi Khoa", "Bình", "Hư", "Tỳ Vị bất hòa"],
    tc: ["Trẻ hoàn toàn không có cảm giác muốn ăn", "Ép ăn thì nôn, bụng không trướng đau", "Sắc mặt bình thường hoặc hơi úa", "Mạch hoãn nhược"],
    pdt: "Vận tỳ hòa vị, khai vị tiêu thực",
    bt: "Dưỡng vị thăng bỉnh tán gia giảm",
    tpbt: ["Bạch truật 8g", "Thương truật 6g", "Trần bì 4g", "Bán hạ chế 6g", "Sa nhân 4g", "Thần khúc 6g", "Cam thảo 4g"]
  },
  "NKH_052": {
    stt: 579,
    hc: "Thất tiêu do Vị âm hư suy",
    phanloai: ["Nhi Khoa", "Nhiệt", "Hư", "Vị âm hư"],
    tc: ["Chán ăn kèm miệng khô họng rát, khát nước", "Đại tiện khô bế kết, da khô gầy", "Lưỡi đỏ ít rêu hoặc lưỡi bản đồ", "Mạch tế sác"],
    pdt: "Tư dưỡng vị âm, sinh tân khai vị",
    bt: "Sa sâm mạch đông thang gia Sa nhân",
    tpbt: ["Sa sâm 10g", "Mạch môn 8g", "Ngọc trúc 8g", "Sinh địa 10g", "Thiên hoa phấn 8g", "Sa nhân 4g"]
  },
  "NKH_053": {
    stt: 580,
    hc: "Phúc thống (Đau bụng nhi) do Tỳ Vị hư hàn",
    phanloai: ["Nhi Khoa", "Hàn", "Hư", "Tỳ Vị hư hàn"],
    tc: ["Đau bụng quanh rốn âm ỉ tái đi tái lại", "Thích chườm ấm xoa bóp, gặp lạnh đau tăng", "Sợ lạnh, tay chân lạnh, tiêu lỏng", "Mạch trầm tế hoãn"],
    pdt: "Ôn trung kiện tỳ, hoãn cấp chỉ thống",
    bt: "Tiểu kiến trung thang gia giảm",
    tpbt: ["Quế chi 6g", "Bạch thược 10g", "Sinh khương 4g", "Đại táo 3quả", "Chích cam thảo 4g", "Di đường 20g"]
  },
  "NKH_054": {
    stt: 581,
    hc: "Phúc thống do Thực tích uẩn trệ",
    phanloai: ["Nhi Khoa", "Bình", "Thực", "Thực tích đau bụng"],
    tc: ["Bụng trướng đau căng cự án, không cho chạm vào", "Ợ chua, hôi miệng, nôn trớ", "Trung tiện hôi thối xong bớt đau", "Rêu dầy nhớt"],
    pdt: "Tiêu thực đạo trệ, hành khí chỉ thống",
    bt: "Bảo hòa hoàn gia Mộc hương, Chỉ thực",
    tpbt: ["Sơn tra 8g", "Thần khúc 8g", "Lai phục tử 6g", "Bán hạ chế 6g", "Trần bì 4g", "Mộc hương 4g", "Chỉ thực 4g"]
  },
  "NKH_055": {
    stt: 582,
    hc: "Phúc thống do Khí trệ can tỳ bất hòa",
    phanloai: ["Nhi Khoa", "Bình", "Thực", "Khí trệ"],
    tc: ["Đau quặn bụng mỗi khi cáu khóc căng thẳng", "Ngực sườn trướng căng, hay thở dài", "Mạch huyền"],
    pdt: "Sơ can giải uất, lý khí chỉ thống",
    bt: "Sài hồ sơ can tán gia Mộc hương, Diên hồ tẩu",
    tpbt: ["Sài hồ 6g", "Bạch thược 8g", "Chỉ xác 4g", "Xuyên khung 6g", "Mộc hương 4g", "Diên hồ tẩu 6g"]
  },
  "NKH_056": {
    stt: 583,
    hc: "Phúc thống do Trùng tích (Sán dây / Giun chui ống mật)",
    phanloai: ["Nhi Khoa", "Hàn nhiệt thác tạp", "Thực", "Giun gây đau bụng"],
    tc: ["Đau quặn thắt vùng thượng vị nôn ra nước chua/giun", "Nằm co quắp khóc thảm thiết", "Nôn mửa, mặt xanh tái từng cơn", "Mạch huyền khẩn"],
    pdt: "Ôn trung an trùng, khu trùng chỉ thống",
    bt: "Ô mai hoàn gia giảm",
    tpbt: ["Ô mai 8g", "Tế tân 2g", "Can khương 4g", "Phụ tử chế 3g", "Đương quy 6g", "Hoàng liên 4g", "Hoàng bá 4g", "Xuyên tiêu 3g"]
  },
  "NKH_057": {
    stt: 584,
    hc: "Táo bón ở trẻ em do Vị nhiệt tích trệ",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Vị nhiệt táo bón"],
    tc: ["Đại tiện 3-5 ngày/lần, phân khô cứng như phân dê", "Bụng trướng đau cự án, rặn khóc", "Mặt đỏ miệng hôi, khát nước", "Mạch hoạt sác"],
    pdt: "Thanh nhiệt nhuận tràng, thông tiện",
    bt: "Thanh vị tán hợp Ma tử nhân hoàn",
    tpbt: ["Hoàng liên 4g", "Thăng ma 4g", "Sinh địa 10g", "Ma tử nhân 8g", "Bạch thược 8g", "Đại hoàng 4g"]
  },
  "NKH_058": {
    stt: 585,
    hc: "Táo bón ở trẻ em do Khí hư tràng nhược",
    phanloai: ["Nhi Khoa", "Bình", "Hư", "Khí hư táo bón"],
    tc: ["Có cảm giác muốn tiêu nhưng rặn không ra", "Trẻ vã mồ hôi hụt hơi khi rặn", "Phân không quá khô cứng, sắc mặt nhợt", "Mạch hư nhược hoãn"],
    pdt: "Bổ khí nhuận tràng, thông tiện",
    bt: "Hoàng kỳ thang gia Ma tử nhân",
    tpbt: ["Hoàng kỳ 10g", "Trần bì 4g", "Bạch truật 8g", "Đương quy 6g", "Hỏa ma nhân 8g", "Cam thảo 4g"]
  },
  "NKH_059": {
    stt: 586,
    hc: "Táo bón ở trẻ em do Huyết hư tân kiệt",
    phanloai: ["Nhi Khoa", "Bình", "Hư", "Huyết hư tràng táo"],
    tc: ["Đại tiện khô kết kéo dài ở trẻ gầy còm", "Da khô, tóc khô xơ, móng nhợt", "Hoa mắt chóng mặt", "Mạch tế sáp"],
    pdt: "Dưỡng huyết nhuận táo, thông tiện",
    bt: "Tứ vật thang gia Ma tử nhân, Sa sâm",
    tpbt: ["Thục địa 10g", "Đương quy 6g", "Bạch thược 8g", "Xuyên khung 6g", "Ma tử nhân 8g", "Sa sâm 8g"]
  },
  "NKH_060": {
    stt: 587,
    hc: "Sa trực tràng ở trẻ em (Trĩ sa) do Trung khí hạ hãm",
    phanloai: ["Nhi Khoa", "Bình", "Hư", "Trung khí hạ hãm"],
    tc: ["Trực tràng lòi ra ngoài hậu môn sau khi đại tiện", "Trẻ mệt mỏi hụt hơi, sắc mặt nhợt nhạt", "Ăn kém tiêu chảy", "Mạch hoãn nhược"],
    pdt: "Bổ trung ích khí, thăng dương cử trĩ",
    bt: "Bổ trung ích khí thang gia Chỉ xác sao",
    tpbt: ["Hoàng kỳ 10g", "Đảng sâm 8g", "Bạch truật 8g", "Trần bì 4g", "Thăng ma 4g", "Sài hồ 4g", "Chỉ xác sao 4g"]
  },
  "NKH_061": {
    stt: 588,
    hc: "Nhiệt khẩu sang (Loét miệng lưỡi nhi) do Tâm Vị hỏa thịnh",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Hỏa độc khoang miệng"],
    tc: ["Niêm mạc miệng lưỡi nổi nhiều vết loét viền đỏ rát", "Trẻ đau không nuốt được bú quấy khóc", "Hơi thở hôi thối, sốt", "Mạch sác hữu lực"],
    pdt: "Thanh tâm tả hỏa, giải độc tiêu sang",
    bt: "Đạo xích tán hợp Thanh vị tán",
    tpbt: ["Sinh địa 10g", "Mộc thông 6g", "Trúc diệp 6g", "Hoàng liên 4g", "Thăng ma 4g", "Cam thảo 4g"]
  },
  "NKH_062": {
    stt: 589,
    hc: "Nhiệt khẩu sang do Hư hỏa thượng viêm (Âm hư loét miệng)",
    phanloai: ["Nhi Khoa", "Nhiệt", "Hư", "Âm hư hỏa vượng"],
    tc: ["Vết loét miệng lưỡi màu xám nhạt dai dẳng lâu lành", "Trẻ sốt nhẹ về chiều, lòng bàn tay chân nóng", "Miệng khô không khát", "Mạch tế sác"],
    pdt: "Tư âm giáng hỏa, thanh nhiệt tiêu sang",
    bt: "Tri bá địa hoàng hoàn gia giảm",
    tpbt: ["Thục địa 10g", "Tri mẫu 6g", "Hoàng bá 6g", "Sơn thù 6g", "Hoài sơn 8g", "Phục linh 8g"]
  },
  "NKH_063": {
    stt: 590,
    hc: "Nấm miệng (Tuyết khẩu) do Thấp nhiệt uẩn uất",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Thấp nhiệt tuyết khẩu"],
    tc: ["Lớp màng trắng dầy như cặn sữa bám đầy lưỡi má", "Lột ra niêm mạc rớm máu đau quấy", "Rêu dầy vàng dính", "Mạch nhu sác"],
    pdt: "Thanh nhiệt táo thấp, giải độc sát trùng",
    bt: "Tam nhân thang gia Hoàng liên, Khổ sâm",
    tpbt: ["Hạnh nhân 6g", "Ý dĩ 10g", "Bán hạ chế 6g", "Hoàng liên 4g", "Khổ sâm 6g", "Cam thảo 4g"]
  },
  "NKH_064": {
    stt: 591,
    hc: "Trúng độc thức ăn ở trẻ em thể Thấp nhiệt hỏa độc",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Nhiệt độc trúng độc"],
    tc: ["Đột ngột nôn mửa tiêu chảy xối xả sau ăn đồ lạ", "Bụng đau quặn dữ dội, sốt cao", "Tiểu ngắn đỏ, bứt rứt", "Mạch hoạt sác dũng mãnh"],
    pdt: "Thanh nhiệt giải độc, giải độc hòa trung",
    bt: "Hoàng liên giải độc thang hợp Bình vị tán",
    tpbt: ["Hoàng liên 4g", "Hoàng cầm 6g", "Hoàng bá 6g", "Thương truật 6g", "Hậu phác 6g", "Trần bì 4g"]
  },
  "NKH_065": {
    stt: 592,
    hc: "Xuất huyết tiêu hóa trẻ em do Vị hỏa trào huyết",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Vị hỏa xuất huyết"],
    tc: ["Nôn ra máu tươi/dịch đen hoặc đi tiêu phân đen như hắc ín", "Thượng vị đau rát cự án, miệng hôi", "Sốt, khát nước", "Mạch hoạt sác"],
    pdt: "Thanh vị tả hỏa, lương huyết chỉ huyết",
    bt: "Thanh vị tán gia Tam thất, Bồ hoàng",
    tpbt: ["Hoàng liên 4g", "Thăng ma 4g", "Sinh địa 10g", "Đan bì 6g", "Tam thất 4g", "Bồ hoàng 6g"]
  },
  "NKH_066": {
    stt: 593,
    hc: "Xuất huyết tiêu hóa trẻ em do Tỳ không thống huyết",
    phanloai: ["Nhi Khoa", "Bình", "Hư", "Khí hư không nhiếp huyết"],
    tc: ["Đi tiêu ra máu màu hồng nhạt/tiêu phân xám đen kéo dài", "Sắc mặt bệch nhợt, mệt mỏi kiệt sức", "Ăn kém tiêu chảy phân nhão", "Mạch tế nhược vô lực"],
    pdt: "Kiện tỳ ích khí, nhiếp huyết chỉ huyết",
    bt: "Quy tỳ thang gia Tam thất, A giao",
    tpbt: ["Đảng sâm 8g", "Bạch truật 8g", "Phục linh 8g", "Hoàng kỳ 10g", "Đương quy 6g", "Long nhãn 8g", "Tam thất 4g", "A giao 6g"]
  },
  "NKH_067": {
    stt: 594,
    hc: "Bảo trệ chèn ứ ở trẻ sơ sinh (Trớ sữa) do Tỳ Vị lạnh",
    phanloai: ["Nhi Khoa", "Hàn", "Hư", "Sơ sinh Tỳ hư hàn"],
    tc: ["Trẻ sơ sinh trớ sữa liên tục sau bú, sữa ra lỏng", "Chân tay lạnh, bụng lạnh trướng", "Quấy khóc đêm", "Mạch trầm tế"],
    pdt: "Ôn trung kiện tỳ, giáng nghịch chỉ trớ",
    bt: "Tứ quân tử thang gia Can khương, Bán hạ chế",
    tpbt: ["Đảng sâm 6g", "Bạch truật 6g", "Phục linh 6g", "Can khương 3g", "Bán hạ chế 4g", "Cam thảo 3g"]
  },
  "NKH_068": {
    stt: 595,
    hc: "Trớ sữa do Vị nhiệt tích uất",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Sơ sinh Vị nhiệt"],
    tc: ["Trẻ trớ ra sữa vón cục chua hôi rát họng", "Mặt đỏ, môi đỏ khô, táo bón", "Trẻ khóc gừ bứt rứt", "Mạch hoạt sác"],
    pdt: "Thanh vị tả nhiệt, giáng nghịch chỉ trớ",
    bt: "Thanh vị tán gia Bán hạ chế, Trúc nhự",
    tpbt: ["Hoàng liên 3g", "Thăng ma 3g", "Sinh địa 8g", "Bán hạ chế 4g", "Trúc nhự 4g"]
  },
  "NKH_069": {
    stt: 596,
    hc: "Tỳ Vị thấp nhiệt uẩn kết ở trẻ em",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Thấp nhiệt Tỳ Vị"],
    tc: ["Ăn kém, bụng trướng đầy khó chịu", "Miệng đắng dính, nôn nao", "Đại tiện nhão hôi thối, tiểu đỏ", "Rêu dầy vàng nhớt", "Mạch nhu sác"],
    pdt: "Thanh nhiệt táo thấp, kiện tỳ hòa vị",
    bt: "Tam nhân thang gia giảm",
    tpbt: ["Hạnh nhân 6g", "Ý dĩ 10g", "Bán hạ chế 6g", "Hậu phác 6g", "Bạch đậu khấu 4g", "Hoạt thạch 8g"]
  },
  "NKH_070": {
    stt: 597,
    hc: "Tỳ Thận khí hư tiêu hóa mạn tính ở trẻ em",
    phanloai: ["Nhi Khoa", "Bình", "Hư suy", "Tỳ Thận khí hư"],
    tc: ["Gầy còm suy dinh dưỡng nặng, ăn vào trớ ra", "Đi tiêu phân sống rỉ rả, đau lưng mỏi gối", "Sắc mặt nhợt nhạt đần độn", "Mạch trầm nhược vô lực"],
    pdt: "Song bổ tỳ thận, Bổ khí kiện tỳ",
    bt: "Sâm linh bạch truật tán hợp Thận khí hoàn",
    tpbt: ["Đảng sâm 8g", "Bạch truật 8g", "Phục linh 8g", "Hoài sơn 8g", "Thục địa 10g", "Sơn thù 6g", "Bổ cốt chỉ 6g"]
  },
  "NKH_071": {
    stt: 598,
    hc: "Di niệu (Đái dầm) do Thận khí bất cố",
    phanloai: ["Nhi Khoa", "Bình", "Hư", "Thận khí hư di niệu"],
    tc: ["Đái dầm đêm khi ngủ 1-2 lần/đêm, không biết", "Nước tiểu trong dài, thắt lưng lạnh mỏi", "Sợ lạnh, tóc thưa răng yếu", "Mạch trầm nhược"],
    pdt: "Bổ thận cố tinh, ôn bàng quang sáp niệu",
    bt: "Tang phiêu tiêu tán gia Bổ cốt chỉ, Ích trí nhân",
    tpbt: ["Tang phiêu tiêu 8g", "Viễn chí 4g", "Thạch xương bồ 6g", "Long cốt 10g", "Nhân sâm 6g", "Bổ cốt chỉ 6g", "Ích trí nhân 6g"]
  },
  "NKH_072": {
    stt: 599,
    hc: "Di niệu do Tỳ Phế khí hư hạ hãm",
    phanloai: ["Nhi Khoa", "Bình", "Hư", "Phế Tỳ khí hư"],
    tc: ["Đái dầm đêm kèm hay đái dắt ban ngày", "Trẻ mệt mỏi hụt hơi, ngại nói", "Sắc mặt bệch nhợt, ăn kém tiêu chảy", "Mạch hư nhược hoãn"],
    pdt: "Bổ phế kiện tỳ, thăng dương cố niệu",
    bt: "Bổ trung ích khí thang gia Ích trí nhân, Kha tử",
    tpbt: ["Hoàng kỳ 10g", "Đảng sâm 8g", "Bạch truật 8g", "Trần bì 4g", "Thăng ma 4g", "Sài hồ 4g", "Ích trí nhân 6g", "Kha tử 4g"]
  },
  "NKH_073": {
    stt: 600,
    hc: "Di niệu do Can kinh sinh thấp nhiệt bàng quang",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Thấp nhiệt bàng quang"],
    tc: ["Đái dầm đợt ngắn nước tiểu vàng đục hôi", "Trẻ dễ giận dữ cáu gắt, nghiến răng khi ngủ", "Hậu môn ngứa đỏ, rêu vàng nhớt", "Mạch nhu sác"],
    pdt: "Thanh can tả hỏa, lợi thấp sáp niệu",
    bt: "Long đởm tả can thang gia Tang phiêu tiêu",
    tpbt: ["Long đởm thảo 6g", "Chi tử 6g", "Hoàng cầm 6g", "Trạch tả 6g", "Mộc thông 4g", "Tang phiêu tiêu 8g"]
  },
  "NKH_074": {
    stt: 601,
    hc: "Tiểu buốt dắt (Nhiệu lâm) do Bàng quang thấp nhiệt",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Thấp nhiệt nhiệu lâm"],
    tc: ["Tiểu buốt dắt, khóc ré lên mỗi lần tiểu", "Nước tiểu đục vàng hoặc rỉ máu", "Bụng dưới trướng căng, sốt nhẹ", "Mạch nhu sác"],
    pdt: "Thanh nhiệt lợi thấp, thông lâm chỉ thống",
    bt: "Bát chính tán gia giảm",
    tpbt: ["Xa tiền tử 8g", "Mộc thông 4g", "Cù mạch 6g", "Biển súc 6g", "Chi tử 6g", "Hoạt thạch 8g", "Cam thảo 4g"]
  },
  "NKH_075": {
    stt: 602,
    hc: "Tiểu ra máu (Huyết lâm) do Huyết nhiệt hạ chú bàng quang",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Huyết nhiệt huyết lâm"],
    tc: ["Tiểu buốt dắt nước tiểu đỏ tươi hoặc có cục máu", "Bụng dưới đau rát cự án", "Mặt đỏ, tâm phiền khát nước", "Mạch sác hữu lực"],
    pdt: "Thanh nhiệt lương huyết, thông lâm chỉ huyết",
    bt: "Tiểu kế ẩm gia Hoàng bá",
    tpbt: ["Tiểu kế 8g", "Sinh địa 10g", "Mộc thông 4g", "Hoạt thạch 8g", "Trắc bách diệp 6g", "Hoàng bá 6g", "Cam thảo 4g"]
  },
  "NKH_076": {
    stt: 603,
    hc: "Tiểu ra sỏi (Thạch lâm) do Thấp nhiệt chưng đọng sỏi",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Thạch lâm"],
    tc: ["Đau quặn vùng thắt lưng lan xuống bẹn khi tiểu", "Tiểu ngắt quãng, đái dắt đục", "Có thể ra sỏi nhỏ liti", "Mạch hoạt sác"],
    pdt: "Thanh nhiệt lợi thấp, thông lâm bài thạch",
    bt: "Tam kim thang gia giảm",
    tpbt: ["Kim tiền thảo 15g", "Hải kim sa 10g", "Kê nội kim 6g", "Xa tiền tử 8g", "Trạch tả 6g", "Cam thảo 4g"]
  },
  "NKH_077": {
    stt: 604,
    hc: "Bí tiểu ở trẻ em (Lung bế) do Bàng quang thấp nhiệt bế tắc",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Thấp nhiệt lung bế"],
    tc: ["Bụng dưới trướng căng to đau quặn, không tiểu được", "Muốn tiểu rặn khóc không ra", "Mặt đỏ, sốt, bứt rứt", "Mạch nhu sác dũng mãnh"],
    pdt: "Thanh nhiệt lợi thấp, hành khí thông niệu",
    bt: "Bát chính tán gia Hoàng bá, Mộc thông",
    tpbt: ["Xa tiền tử 8g", "Mộc thông 6g", "Cù mạch 6g", "Biển súc 6g", "Chi tử 6g", "Hoàng bá 6g"]
  },
  "NKH_078": {
    stt: 605,
    hc: "Bí tiểu ở trẻ em do Phế khí uất trệ không giáng",
    phanloai: ["Nhi Khoa", "Bình", "Thực", "Phế khí uất lung bế"],
    tc: ["Bí tiểu kèm ho hen ho khan tức ngực", "Bụng dưới trướng căng nhưng không đau rát", "Trẻ lo âu khóc quấy", "Mạch huyền"],
    pdt: "Tuyên phế lợi thủy, thăng thanh giáng trọc",
    bt: "Hoàng cầm tả phế thang gia Cát cánh, Mộc thông",
    tpbt: ["Hoàng cầm 6g", "Tang bạch bì 8g", "Cát cánh 6g", "Chỉ xác 4g", "Mộc thông 4g", "Trạch tả 6g"]
  },
  "NKH_079": {
    stt: 606,
    hc: "Phù thũng ở trẻ em (Thận viêm) do Phong thủy tương bác",
    phanloai: ["Nhi Khoa", "Bình", "Thực", "Phong thủy thũng"],
    tc: ["Phù đột ngột bắt đầu từ mi mắt và mặt rồi lan nhanh", "Sợ gió, sốt nhẹ, ho hắt hơi", "Tiểu tiện ít, nước tiểu đục", "Mạch phù sác hoặc phù khẩn"],
    pdt: "Sơ phong tuyên phế, phát hãn lợi thủy",
    bt: "Ma hoàng liên kiều xích tiểu đậu thang",
    tpbt: ["Ma hoàng 4g", "Liên kiều 6g", "Xích tiểu đậu 10g", "Tang bạch bì 8g", "Hạnh nhân 6g", "Cam thảo 4g"]
  },
  "NKH_080": {
    stt: 607,
    hc: "Phù thũng ở trẻ em do Thấp nhiệt uẩn kết hạ tiêu",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Thấp nhiệt thũng"],
    tc: ["Phù toàn thân da căng bóng rát", "Tiểu ngắn đỏ buốt dắt, mặt đỏ", "Thân thể mỏi nặng, rêu vàng nhớt", "Mạch nhu sác"],
    pdt: "Thanh nhiệt táo thấp, lợi thủy tiêu thũng",
    bt: "Ngũ linh tán hợp Bát chính tán gia giảm",
    tpbt: ["Bạch truật 8g", "Phục linh 8g", "Trạch tả 6g", "Xa tiền tử 8g", "Mộc thông 4g", "Chi tử 6g"]
  },
  "NKH_081": {
    stt: 608,
    hc: "Phù thũng ở trẻ em mạn do Tỳ hư thủy trệ",
    phanloai: ["Nhi Khoa", "Bình", "Hư thực thác tạp", "Tỳ hư thủy thũng"],
    tc: ["Phù nhẹ tái đi tái lại hai chân và mi mắt", "Ấn lõm sâu, sắc mặt vàng nhợt mệt mỏi", "Ăn kém tiêu chảy, tiểu ít", "Mạch nhu hoãn"],
    pdt: "Kiện tỳ ích khí, lợi thủy tiêu thũng",
    bt: "Bổ trung ích khí thang hợp Ngũ linh tán",
    tpbt: ["Hoàng kỳ 10g", "Đảng sâm 8g", "Bạch truật 8g", "Phục linh 8g", "Trạch tả 6g", "Trư linh 6g"]
  },
  "NKH_082": {
    stt: 609,
    hc: "Phù thũng ở trẻ em mạn do Thận dương hư suy",
    phanloai: ["Nhi Khoa", "Hàn", "Hư suy", "Thận dương hư thủy thũng"],
    tc: ["Phù nặng toàn thân căng mọng ấn lõm lâu hồi", "Sợ lạnh, tay chân lạnh ngắt, sắc mặt bệch tái", "Mệt mỏi thở ngắn, tiểu rỉ rả", "Mạch trầm tế trì vô lực"],
    pdt: "Ôn thận trợ dương, hóa khí lợi thủy tiêu thũng",
    bt: "Chân vũ thang gia giảm",
    tpbt: ["Phụ tử chế 6g", "Bạch truật 8g", "Phục linh 8g", "Bạch thược 8g", "Sinh khương 4g", "Xa tiền tử 8g"]
  },
  "NKH_083": {
    stt: 610,
    hc: "Hội chứng thận hư nhi khoa thể Tỳ Thận âm hư",
    phanloai: ["Nhi Khoa", "Nhiệt", "Hư", "Tỳ Thận âm hư"],
    tc: ["Phù nhẹ dai dẳng, lòng bàn tay chân nóng", "Triều nhiệt đạo hãn, miệng khô khát nước", "Lưỡi đỏ ít rêu, đái ra protein kéo dài", "Mạch tế sác"],
    pdt: "Tư bổ tỳ thận, dưỡng âm lợi thủy",
    bt: "Tả quy hoàn gia Mạch môn, Xa tiền tử",
    tpbt: ["Thục địa 10g", "Sơn thù 6g", "Hoài sơn 8g", "Trạch tả 6g", "Đan bì 6g", "Mạch môn 8g", "Xa tiền tử 8g"]
  },
  "NKH_084": {
    stt: 611,
    hc: "Hội chứng thận hư nhi khoa thể Khí trệ huyết ứ kinh lạc",
    phanloai: ["Nhi Khoa", "Bình", "Thực", "Huyết ứ thủy thũng"],
    tc: ["Phù thũng kèm da chân tím tái có điểm ứ huyết", "Bụng trướng to, gan lách to nhẹ", "Lưỡi tím sẫm", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, lợi thủy tiêu thũng",
    bt: "Thân thống trục ứ thang hợp Ngũ linh tán",
    tpbt: ["Đào nhân 6g", "Hồng hoa 4g", "Đương quy 6g", "Xuyên khung 6g", "Bạch truật 8g", "Phục linh 8g", "Trạch tả 6g"]
  },
  "NKH_085": {
    stt: 612,
    hc: "Hội chứng thận hư nhi khoa thể Khí âm lưỡng hư kiệt sức",
    phanloai: ["Nhi Khoa", "Nhiệt", "Hư suy", "Khí âm lưỡng hư"],
    tc: ["Phù kéo dài ở trẻ gầy suy nhược kiệt sức", "Miệng khô họng rát, vã mồ hôi trộm kèm mệt mỏi", "Sắc mặt nhợt gò má đỏ", "Mạch tế nhược sác"],
    pdt: "Ích khí sinh tân, tư âm lợi thủy",
    bt: "Sinh mạch tán gia Hoàng kỳ, Trạch tả",
    tpbt: ["Nhân sâm 6g", "Mạch môn 8g", "Ngũ vị tử 4g", "Hoàng kỳ 10g", "Trạch tả 6g", "Phục linh 8g"]
  },
  "NKH_086": {
    stt: 613,
    hc: "Thận tinh bất túc ở trẻ em (Chậm phát triển sinh dục)",
    phanloai: ["Nhi Khoa", "Bình", "Hư suy", "Thận tinh bất túc"],
    tc: ["Bộ phận sinh dục nhỏ, tinh hoàn teo/chưa xuống bìu", "Trí nhớ kém, đần độn chậm biết nói đi", "Răng lung lay tóc bạc thưa", "Mạch trầm tế vô lực"],
    pdt: "Bổ thận điền tinh, ích tủy bổ não",
    bt: "Tả quy hoàn gia Lộc nhung, Tử hà xe",
    tpbt: ["Thục địa 10g", "Sơn thù 6g", "Hoài sơn 8g", "Kỷ tử 8g", "Thỏ ty tử 8g", "Lộc nhung 2g", "Tử hà xe 4g"]
  },
  "NKH_087": {
    stt: 614,
    hc: "Tiểu đục ở trẻ em (Gao lâm) do Thấp nhiệt hạ chú bàng quang",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Thấp nhiệt gao lâm"],
    tc: ["Nước tiểu đục như nước vôi/nước gội gạo", "Tiểu dắt buốt, hậu môn nóng rát", "Rêu dầy vàng nhớt", "Mạch nhu sác"],
    pdt: "Thanh nhiệt lợi thấp, phân thanh hạ trọc",
    bt: "Tỳ giải phân thanh tán gia Hoàng bá",
    tpbt: ["Tỳ giải 8g", "Ô dược 6g", "Ích trí nhân 6g", "Phục linh 8g", "Hoàng bá 6g", "Cam thảo 4g"]
  },
  "NKH_088": {
    stt: 615,
    hc: "Tiểu đục ở trẻ em do Thận khí hư bất cố",
    phanloai: ["Nhi Khoa", "Bình", "Hư", "Thận khí hư gao lâm"],
    tc: ["Nước tiểu đục dai dẳng không đau rát khi tiểu", "Thắt lưng mỏi yếu, sợ lạnh, mệt mỏi", "Mạch trầm nhược vô lực"],
    pdt: "Bổ thận ích khí, cố sáp phân trọc",
    bt: "Tỳ giải phân thanh tán hợp Kim tỏa cố tinh hoàn",
    tpbt: ["Tỳ giải 8g", "Ô dược 6g", "Ích trí nhân 6g", "Phục linh 8g", "Sa uyển tử 6g", "Khiếm thực 8g"]
  },
  "NKH_089": {
    stt: 616,
    hc: "Tiểu tiện rỉ rả không tự chủ do Thận dương hư suy",
    phanloai: ["Nhi Khoa", "Hàn", "Hư suy", "Thận dương hư"],
    tc: ["Tiểu tiện rỉ chảy liên tục cả ngày lẫn đêm", "Chân tay lạnh ngắt, sợ lạnh, đái dầm", "Sắc mặt bệch tái", "Mạch trầm tế vi"],
    pdt: "Ôn bổ thận dương, sáp niệu chỉ rỉ",
    bt: "Hữu quy hoàn gia Tang phiêu tiêu, Ích trí nhân",
    tpbt: ["Thục địa 10g", "Nhục quế 3g", "Phụ tử chế 4g", "Sơn thù 6g", "Tang phiêu tiêu 8g", "Ích trí nhân 6g"]
  },
  "NKH_090": {
    stt: 617,
    hc: "Viêm bao quy đầu trẻ em do Thấp nhiệt hỏa độc",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Thấp nhiệt hỏa độc"],
    tc: ["Quy đầu bao quy đầu sưng đỏ mưng mủ loét đau khóc", "Trẻ sợ tiểu, đái buốt khóc ré", "Mủ hôi thối", "Mạch nhu sác"],
    pdt: "Thanh nhiệt giải độc, trừ thấp chỉ sang",
    bt: "Ngũ vị tiêu độc ẩm gia Hoàng bá, Khổ sâm",
    tpbt: ["Kim ngân hoa 10g", "Cúc hoa 6g", "Bồ công anh 10g", "Hoàng bá 6g", "Khổ sâm 6g", "Cam thảo 4g"]
  },
  "NKH_091": {
    stt: 618,
    hc: "Thoát vị bẹn ở trẻ em (Sán khí) do Hàn trệ can mạch",
    phanloai: ["Nhi Khoa", "Hàn", "Thực", "Hàn trệ sán khí"],
    tc: ["Khối thoát vị bẹn bìu sưng to co rút khi gặp lạnh", "Gặp lạnh đau quặn khóc thảm, chườm ấm dễ chịu", "Bì bìu lạnh ngắt", "Mạch trầm khẩn"],
    pdt: "Ôn kinh tán hàn, noãn can chỉ thống",
    bt: "Noãn can tiễn gia Tiểu hồi hương, Ô dược",
    tpbt: ["Tiểu hồi hương 6g", "Nhục quế 4g", "Đương quy 6g", "Ô dược 6g", "Trầm hương 2g", "Phục linh 8g"]
  },
  "NKH_092": {
    stt: 619,
    hc: "Thoát vị bẹn ở trẻ em do Trung khí hạ hãm sa bìu",
    phanloai: ["Nhi Khoa", "Bình", "Hư", "Trung khí hạ hãm"],
    tc: ["Khối bẹn sa thõng xuống bìu khi đứng khóc chạy nhảy", "Nằm nghỉ tự co lên, trẻ mệt mỏi hụt hơi", "Sắc mặt nhợt", "Mạch hoãn nhược"],
    pdt: "Bổ khí thăng dương, cử sán chỉ thống",
    bt: "Bổ trung ích khí thang gia Ô dược, Tiểu hồi hương",
    tpbt: ["Hoàng kỳ 10g", "Đảng sâm 8g", "Bạch truật 8g", "Thăng ma 4g", "Sài hồ 4g", "Ô dược 6g", "Tiểu hồi hương 4g"]
  },
  "NKH_093": {
    stt: 620,
    hc: "Tràn dịch màng tinh hoàn nhi (Âm nang thũng) do Thủy thấp trệ",
    phanloai: ["Nhi Khoa", "Bình", "Thực", "Thủy thấp âm nang thũng"],
    tc: ["Bì bìu sưng to mọng nước trong suốt không đỏ nóng", "Cảm giác nặng tức kéo bẹn", "Mệt mỏi ăn kém", "Mạch nhu hoãn"],
    pdt: "Kiện tỳ mẫn thấp, lợi thủy tiêu thũng",
    bt: "Ngũ linh tán gia Thương truật, Xa tiền tử",
    tpbt: ["Bạch truật 8g", "Phục linh 8g", "Trạch tả 6g", "Trư linh 6g", "Quế chi 4g", "Thương truật 6g", "Xa tiền tử 8g"]
  },
  "NKH_094": {
    stt: 621,
    hc: "Tràn dịch màng tinh hoàn nhi do Thận dương hư suy",
    phanloai: ["Nhi Khoa", "Hàn", "Hư suy", "Thận dương hư âm nang thũng"],
    tc: ["Bì bìu mọng nước kèm phù hai chân, sợ lạnh", "Chân tay lạnh ngắt, tiểu ít nước tiểu trong", "Mệt mỏi lơ mơ", "Mạch trầm tế vi"],
    pdt: "Ôn thận trợ dương, hóa khí lợi thủy tiêu thũng",
    bt: "Chân vũ thang gia Xa tiền tử, Ngưu tất",
    tpbt: ["Phụ tử chế 6g", "Bạch truật 8g", "Phục linh 8g", "Bạch thược 8g", "Sinh khương 4g", "Xa tiền tử 8g"]
  },
  "NKH_095": {
    stt: 622,
    hc: "Viêm tinh hoàn sau quai bị (Quai bị sán khí) do Thấp nhiệt độc",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Thấp nhiệt hỏa độc"],
    tc: ["Tinh hoàn bì bìu sưng to nóng đỏ đau quặn cự án", "Sốt cao rét run sau quai bị 3-5 ngày", "Tiểu đỏ, rêu vàng nhớt", "Mạch hoạt sác dũng mãnh"],
    pdt: "Thanh nhiệt giải độc, thanh can tiêu thũng chỉ thống",
    bt: "Long đởm tả can thang gia Kim ngân hoa, Bồ công anh",
    tpbt: ["Long đởm thảo 6g", "Chi tử 6g", "Hoàng cầm 6g", "Trạch tả 6g", "Kim ngân hoa 10g", "Bồ công anh 10g"]
  },
  "NKH_096": {
    stt: 623,
    hc: "Viêm tinh hoàn sau quai bị do Khí trệ huyết ứ",
    phanloai: ["Nhi Khoa", "Bình", "Thực", "Khí trệ huyết ứ"],
    tc: ["Tinh hoàn có cục cứng sưng tím đau nhói cố định", "Sắc mặt u uất, lưỡi tím điểm ứ huyết", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, tiêu thũng chỉ thống",
    bt: "Thân thống trục ứ thang gia Ngưu tất, Ô dược",
    tpbt: ["Đào nhân 6g", "Hồng hoa 4g", "Đương quy 6g", "Xuyên khung 6g", "Ngưu tất 6g", "Ô dược 6g"]
  },
  "NKH_097": {
    stt: 624,
    hc: "Đau thắt lưng trẻ em do Thận hư bào mạch nhão",
    phanloai: ["Nhi Khoa", "Bình", "Hư", "Thận hư yêu thống"],
    tc: ["Thắt lưng đau mỏi không muốn vận động chạy nhảy", "Đứng lâu đau tăng, thích xoa bóp", "Chân yếu hay ngã", "Mạch trầm tế vô lực"],
    pdt: "Bổ thận tráng yêu, cường gân trác cốt",
    bt: "Dưỡng thận hoàn gia Đỗ trọng, Tục đoạn",
    tpbt: ["Thục địa 10g", "Sơn thù nhục 6g", "Hoài sơn 8g", "Kỷ tử 8g", "Thỏ ty tử 8g", "Đỗ trọng 8g", "Tục đoạn 8g"]
  },
  "NKH_098": {
    stt: 625,
    hc: "Khí hư ở trẻ em (Nhi khoa phụ khoa) do Tỳ hư thấp trệ",
    phanloai: ["Nhi Khoa", "Bình", "Hư thực thác tạp", "Tỳ hư đới hạ"],
    tc: ["Bé gái chảy dịch trắng loãng âm hộ dầm dề", "Ăn kém tiêu chảy, mệt mỏi sắc mặt nhợt", "Mạch hoãn nhược"],
    pdt: "Kiện tỳ mẫn thấp, hòa vị chỉ đới",
    bt: "Sâm linh bạch truật tán gia giảm",
    tpbt: ["Đảng sâm 8g", "Bạch truật 8g", "Phục linh 8g", "Hoài sơn 8g", "Liên nhục 8g", "Ý dĩ 8g", "Cam thảo 4g"]
  },
  "NKH_099": {
    stt: 626,
    hc: "Khí hư ở trẻ em do Thấp nhiệt dính bẩn âm hộ",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Thấp nhiệt đới hạ"],
    tc: ["Chảy dịch vàng xanh hôi dính ở âm hộ bé gái", "Niêm mạc âm hộ đỏ sưng ngứa khóc", "Tiểu dắt buốt", "Mạch nhu sác"],
    pdt: "Thanh nhiệt lợi thấp, giải độc chỉ ngứa",
    bt: "Đạo xích tán gia Khổ sâm, Kim ngân hoa",
    tpbt: ["Sinh địa 10g", "Mộc thông 4g", "Cam thảo 4g", "Trúc diệp 6g", "Khổ sâm 6g", "Kim ngân hoa 10g"]
  },
  "NKH_100": {
    stt: 627,
    hc: "Suy thận mạn trẻ em thể Âm dương lưỡng hư kiệt suy",
    phanloai: ["Nhi Khoa", "Hàn nhiệt thác tạp", "Hư suy", "Âm dương lưỡng hư suy thận"],
    tc: ["Phù nhẹ mệt mỏi kiệt sức, gầy đần độn", "Vừa sợ lạnh tay chân lạnh vừa gò má đỏ triều nhiệt", "Tiểu đêm nhiều, tiêu chảy phân sống", "Mạch vi tế muốn tuyệt"],
    pdt: "Âm dương song bổ, đại bổ nguyên khí cố bản",
    bt: "Bát vị hoàn gia Kỷ tử, Thỏ ty tử, Nhân sâm",
    tpbt: ["Thục địa 10g", "Sơn thù 6g", "Hoài sơn 8g", "Nhục quế 3g", "Phụ tử chế 4g", "Kỷ tử 8g", "Nhân sâm 6g"]
  },
  "NKH_101": {
    stt: 628,
    hc: "Thủy đậu (Thủy pha) thể Phong nhiệt nhẹ",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Phong nhiệt thủy đậu"],
    tc: ["Sốt nhẹ, sợ gió, mụn nước mọc rải rác trong trong", "Chân mụn đỏ nhẹ, ngứa ngáy quấy khóc", "Chảy nước mũi nhẹ", "Mạch phù sác"],
    pdt: "Sơ phong thanh nhiệt, tuyên phế giải độc",
    bt: "Ngân kiều tán gia giảm",
    tpbt: ["Kim ngân hoa 10g", "Liên kiều 8g", "Cát cánh 6g", "Bạc hà 4g", "Trúc diệp 6g", "Kinh giới 6g", "Cam thảo 4g"]
  },
  "NKH_102": {
    stt: 629,
    hc: "Thủy đậu thể Nhiệt độc hỏa thịnh (Thủy đậu bội nhiễm)",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Hỏa độc thủy đậu"],
    tc: ["Sốt cao 39-40 độ, mụn nước mọc dày đặc hóa mủ", "Mụn có vệt đỏ sưng rát, mủ hôi", "Miệng khát, bứt rứt, tiểu đỏ táo bón", "Mạch sác hữu lực"],
    pdt: "Thanh nhiệt giải độc, lương huyết tiêu thũng",
    bt: "Hoàng liên giải độc thang gia Ngũ vị tiêu độc ẩm",
    tpbt: ["Hoàng liên 4g", "Hoàng cầm 6g", "Hoàng bá 6g", "Chi tử 6g", "Kim ngân hoa 10g", "Bồ công anh 10g"]
  },
  "NKH_103": {
    stt: 630,
    hc: "Ma chẩn (Sởi) giai đoạn đầu thể Phong nhiệt biểu chứng",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Sởi khởi phát"],
    tc: ["Sốt, sợ gió, ho hắng hắt hơi chảy nước mũi", "Mắt đỏ chảy nước mắt nóng, mủ mắt", "Nổi hạt trắng nhỏ niêm mạc má (Koplik)", "Mạch phù sác"],
    pdt: "Sơ phong thanh nhiệt, thấu chẩn giải độc",
    bt: "Thăng ma sài hồ thang gia giảm",
    tpbt: ["Thăng ma 4g", "Sài hồ 4g", "Cát cánh 6g", "Ngưu bàng tử 6g", "Kinh giới 6g", "Bạc hà 4g", "Cam thảo 4g"]
  },
  "NKH_104": {
    stt: 631,
    hc: "Ma chẩn giai đoạn mọc thể Phế Vị nhiệt thịnh",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Sởi mọc"],
    tc: ["Sốt cao không lui, ban sởi mọc tuần tự từ mặt xuống thân", "Ban đỏ nổi mẩn mịn, ho hen thở gấp", "Miệng khát, bứt rứt, tiểu đỏ", "Mạch hồng sác"],
    pdt: "Thanh nhiệt giải độc, tuyên phế thấu chẩn",
    bt: "Thanh khí thấu chẩn thang gia giảm",
    tpbt: ["Thạch cao 15g", "Tri mẫu 6g", "Kim ngân hoa 10g", "Liên kiều 8g", "Cát cánh 6g", "Hạnh nhân 6g", "Cam thảo 4g"]
  },
  "NKH_105": {
    stt: 632,
    hc: "Ma chẩn giai đoạn lặn thể Phế Vị âm hư dư nhiệt",
    phanloai: ["Nhi Khoa", "Nhiệt", "Hư", "Sởi lặn dư nhiệt"],
    tc: ["Sốt lặn, ban sởi bay để lại vết thâm tróc vảy", "Ho khan ít đờm, miệng khô họng rát", "Ăn kém mệt mỏi, sốt nhẹ về chiều", "Mạch tế sác"],
    pdt: "Tư âm dưỡng vị, thanh giải dư nhiệt",
    bt: "Sa sâm mạch đông thang gia Mạch môn, Sinh địa",
    tpbt: ["Sa sâm 10g", "Mạch môn 8g", "Ngọc trúc 8g", "Sinh địa 10g", "Thiên hoa phấn 8g", "Cam thảo 4g"]
  },
  "NKH_106": {
    stt: 633,
    hc: "Ma chẩn biến chứng Sởi hãm (Chẩn hãm) thể Nhiệt độc nhập tâm bao",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Sởi hãm bế khiếu"],
    tc: ["Ban sởi đột ngột lặn mất hoặc biến tím đen", "Sốt cao cuồng loạn, co giật, hôn mê", "Thở xối xả khò khè, mặt tím tái", "Mạch tế sác dũng mãnh"],
    pdt: "Thanh nhiệt giải độc, lương huyết khai khiếu cứu hãm",
    bt: "Tê giác địa hoàng thang gia An cung ngưu hoàng hoàn",
    tpbt: ["Thủy ngưu giác 15g", "Sinh địa 12g", "Xích thược 8g", "Đan bì 6g", "Ngưu hoàng 0.5g"]
  },
  "NKH_107": {
    stt: 634,
    hc: "Sạ mộc (Quai bị) thể Phong nhiệt uất gáy tai",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Quai bị khởi phát"],
    tc: ["Sốt nhẹ sợ gió, sưng đau một/hai bên góc hàm gáy tai", "Há miệng nuốt đau rát, đau lan ra tai", "Miệng khô, chảy nước dãi", "Mạch phù sác"],
    pdt: "Sơ phong thanh nhiệt, tán kết tiêu thũng",
    bt: "Sài hồ cát cánh thang gia giảm",
    tpbt: ["Sài hồ 6g", "Cát cánh 6g", "Ngưu bàng tử 6g", "Kim ngân hoa 10g", "Liên kiều 8g", "Bạc hà 4g", "Cam thảo 4g"]
  },
  "NKH_108": {
    stt: 635,
    hc: "Sạ mộc thể Nhiệt độc hỏa thịnh (Quai bị bội nhiễm mủ)",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Quai bị hỏa độc"],
    tc: ["Sốt cao 39-40 độ, vùng mang tai sưng to tấy đỏ nóng đau", "Không há miệng được, sốt bứt rứt", "Tiểu đỏ, táo bón nặng", "Mạch sác hữu lực dũng mãnh"],
    pdt: "Thanh nhiệt giải độc, hỏa độc tiêu thũng",
    bt: "Hoàng liên giải độc thang gia Bồ công anh, Thổ phục linh",
    tpbt: ["Hoàng liên 4g", "Hoàng cầm 6g", "Hoàng bá 6g", "Chi tử 6g", "Bồ công anh 10g", "Thổ phục linh 10g"]
  },
  "NKH_109": {
    stt: 636,
    hc: "Sạ mộc biến chứng Nhiệt độc hãm can kinh gây co giật",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Quai bị biến chứng não"],
    tc: ["Sưng mang tai kèm sốt cao dữ dội rồi co giật", "Đau đầu quằn quại, nôn mửa vọt", "Mắt trợn ngược, hôn mê", "Mạch huyền sác hữu lực"],
    pdt: "Thanh nhiệt giải độc, bình can tức phong khai khiếu",
    bt: "Linh dương câu đằng ẩm hợp An cung ngưu hoàng hoàn",
    tpbt: ["Linh dương giác 2g", "Câu đằng 8g", "Tang diệp 6g", "Cúc hoa 6g", "Bạch thược 8g", "Sinh địa 10g", "Ngưu hoàng 0.5g"]
  },
  "NKH_110": {
    stt: 637,
    hc: "Nha cam (Viêm lợi lở loét nhi) do Tâm Vị tích nhiệt",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Viêm lợi nhiệt"],
    tc: ["Lợi răng sưng đỏ chảy máu rớm mủ, hơi thở hôi thối", "Niêm mạc loét đau trẻ không bú ăn được", "Sốt, bứt rứt, tiểu đỏ", "Mạch hoạt sác"],
    pdt: "Thanh vị tả hỏa, giải độc tiêu sang",
    bt: "Thanh vị tán gia Bồ công anh, Hoàng liên",
    tpbt: ["Hoàng liên 4g", "Thăng ma 4g", "Sinh địa 10g", "Đan bì 6g", "Bồ công anh 10g", "Cam thảo 4g"]
  },
  "NKH_111": {
    stt: 638,
    hc: "Nha cam do Hư hỏa bốc lợi (Âm hư viêm lợi)",
    phanloai: ["Nhi Khoa", "Nhiệt", "Hư", "Âm hư viêm lợi"],
    tc: ["Chân răng sưng nhợt rớm máu dai dẳng lâu lành", "Răng lung lay nhẹ, miệng khô không khát", "Triều nhiệt gò má đỏ về chiều", "Mạch tế sác"],
    pdt: "Tư âm giáng hỏa, dưỡng gân cố răng",
    bt: "Tri bá địa hoàng hoàn gia giảm",
    tpbt: ["Thục địa 10g", "Tri mẫu 6g", "Hoàng bá 6g", "Sơn thù 6g", "Hoài sơn 8g", "Phục linh 8g"]
  },
  "NKH_112": {
    stt: 639,
    hc: "Khổ sang (Mụn nhọt độc) do Nhiệt độc hỏa thịnh",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Nhiệt độc mụn nhọt"],
    tc: ["Da nổi mụn nhọt sưng nóng đỏ đau dữ dội hóa mủ", "Mủ vỡ chảy dịch hôi hám", "Sốt, bứt rứt, tiểu đỏ", "Mạch sác hữu lực"],
    pdt: "Thanh nhiệt giải độc, tiêu thũng bài nùng",
    bt: "Ngũ vị tiêu độc ẩm gia giảm",
    tpbt: ["Kim ngân hoa 10g", "Cúc hoa 6g", "Bồ công anh 10g", "Tử hoa địa đinh 8g", "Tử bối thiên quỳ 6g", "Cam thảo 4g"]
  },
  "NKH_113": {
    stt: 640,
    hc: "Chàm trẻ em (Tỳ vị thấp nhiệt chàm)",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Thấp nhiệt chàm"],
    tc: ["Mặt và thân mình nổi mẩn đỏ mụn nước ngứa ngáy", "Mụn vỡ chảy dịch vàng dính, đóng vảy dày", "Trẻ quấy khóc không ngủ", "Mạch nhu sác"],
    pdt: "Thanh nhiệt táo thấp, khu phong chỉ ngứa",
    bt: "Tiêu phong tán gia Khổ sâm, Hoàng bá",
    tpbt: ["Kinh giới 6g", "Phòng phong 6g", "Thuyền thoái 4g", "Khổ sâm 6g", "Hoàng bá 6g", "Thạch cao 10g"]
  },
  "NKH_114": {
    stt: 641,
    hc: "Chàm trẻ em mạn do Huyết hư phong táo",
    phanloai: ["Nhi Khoa", "Bình", "Hư", "Huyết hư phong táo chàm"],
    tc: ["Da khô nẻ tróc vảy mỏng ngứa ngáy mạn tính", "Vùng da chàm dày sừng thâm xạm", "Sắc mặt nhợt nhạt", "Mạch tế sáp"],
    pdt: "Dưỡng huyết nhuận táo, khu phong chỉ ngứa",
    bt: "Dưỡng tiêu phong tán gia Hà thủ ô",
    tpbt: ["Đương quy 6g", "Thục địa 10g", "Bạch thược 8g", "Phòng phong 6g", "Hà thủ ô 8g", "Cam thảo 4g"]
  },
  "NKH_115": {
    stt: 642,
    hc: "Mề đay ở trẻ em (Tẩy chẩn) do Phong hàn phạm biểu",
    phanloai: ["Nhi Khoa", "Hàn", "Thực", "Phong hàn mề đay"],
    tc: ["Da nổi mảng mề đay màu trắng nhợt/hồng ngứa ngáy", "Gặp lạnh ngứa tăng, chườm ấm bớt ngứa", "Sợ lạnh, hắt hơi chảy nước mũi", "Mạch phù khẩn"],
    pdt: "Khu phong tán hàn, điều hòa doanh vệ chỉ ngứa",
    bt: "Quế chi thang gia Kinh giới, Phòng phong",
    tpbt: ["Quế chi 6g", "Bạch thược 6g", "Sinh khương 4g", "Kinh giới 6g", "Phòng phong 6g", "Chích cam thảo 4g"]
  },
  "NKH_116": {
    stt: 643,
    hc: "Mề đay ở trẻ em do Phong nhiệt uất da",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Phong nhiệt mề đay"],
    tc: ["Da nổi mảng mề đay màu đỏ tươi nóng rát ngứa ngáy", "Gặp nóng ngứa tăng, khát nước", "Tiểu đỏ, rêu vàng mỏng", "Mạch phù sác"],
    pdt: "Sơ phong thanh nhiệt, lương huyết chỉ ngứa",
    bt: "Tiêu phong tán gia Ngân hoa, Thạch cao",
    tpbt: ["Kinh giới 6g", "Phòng phong 6g", "Thuyền thoái 4g", "Kim ngân hoa 10g", "Thạch cao 10g", "Cam thảo 4g"]
  },
  "NKH_117": {
    stt: 644,
    hc: "Bệnh Tay Chân Miệng (Thủy bào chẩn) thể Thấp nhiệt uất da",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Thấp nhiệt tay chân miệng"],
    tc: ["Sốt nhẹ, nổi mụn nước nhỏ lòng bàn tay chân mông", "Niêm mạc miệng nổi mụn nước loét đau trớ sữa", "Rêu dầy dính nhớt", "Mạch nhu sác"],
    pdt: "Thanh nhiệt lợi thấp, giải độc thấu chẩn",
    bt: "Cam lộ tiêu độc tán gia giảm",
    tpbt: ["Hoàng cầm 6g", "Bán hạ chế 6g", "Thương truật 6g", "Hậu phác 6g", "Bạch đậu khấu 4g", "Cam thảo 4g"]
  },
  "NKH_118": {
    stt: 645,
    hc: "Bệnh Tay Chân Miệng thể Nhiệt độc hãm tâm bao biến chứng",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Hỏa độc tay chân miệng biến chứng"],
    tc: ["Sốt cao liên tục 39-40 độ không hạ, giật mình chới với", "Chân tay run rẩy co giật, thở gấp nông", "Vã mồ hôi lạnh, lơ mơ hôn mê", "Mạch tế sác vi dũng"],
    pdt: "Thanh nhiệt giải độc, bình can tức phong khai khiếu cứu hãm",
    bt: "An cung ngưu hoàng hoàn hợp Linh dương câu đằng ẩm",
    tpbt: ["Ngưu hoàng 0.5g", "Thủy ngưu giác 15g", "Linh dương giác 2g", "Câu đằng 8g", "Tang diệp 6g", "Cúc hoa 6g"]
  },
  "NKH_119": {
    stt: 646,
    hc: "Lao nhiệt trẻ em (Cốt chưng) do Âm hư hỏa vượng",
    phanloai: ["Nhi Khoa", "Nhiệt", "Hư", "Âm hư cốt chưng"],
    tc: ["Sốt hầm hập về chiều tối kéo dài nhiều tuần", "Triều nhiệt, vã mồ hôi trộm chảy sương đầm đìa", "Trẻ gầy khô xương, gò má đỏ", "Lưỡi đỏ ít rêu", "Mạch tế sác"],
    pdt: "Tư âm thanh nhiệt, trừ chưng thoái nhiệt",
    bt: "Thanh cốt tán gia giảm",
    tpbt: ["Ngân sài hồ 6g", "Hồ hoàng liên 4g", "Địa cốt bì 8g", "Tần giao 6g", "Bạch thược 8g", "Tri mẫu 6g", "Chích cam thảo 4g"]
  },
  "NKH_120": {
    stt: 647,
    hc: "Sốt xuất huyết Dengue giai đoạn đầu thể Vệ khí đồng bệnh",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Sốt xuất huyết khởi phát"],
    tc: ["Sốt cao đột ngột 39-40 độ, đau đầu quằn quại", "Đau hốc mắt đau mỏi cơ xương khớp", "Mặt đỏ, da xung huyết đỏ", "Mạch phù sác hữu lực"],
    pdt: "Thanh khí thấu nhiệt, giải độc thấu biểu",
    bt: "Ngân kiều tán hợp Bạch hổ thang",
    tpbt: ["Kim ngân hoa 10g", "Liên kiều 8g", "Tri mẫu 6g", "Thạch cao 15g", "Cát cánh 6g", "Cam thảo 4g"]
  },
  "NKH_121": {
    stt: 648,
    hc: "Sốt xuất huyết Dengue giai đoạn xuất huyết thể Nhiệt nhập huyết phân",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Huyết nhiệt xuất huyết"],
    tc: ["Nổi ban chẩn xuất huyết dưới da tím đỏ", "Chảy máu cam, chảy máu chân răng, nôn ra máu", "Tiểu đỏ, sốt cao bứt rứt", "Lưỡi đỏ thẫm", "Mạch tế sác hữu lực"],
    pdt: "Thanh nhiệt lương huyết, giải độc chỉ huyết",
    bt: "Tê giác địa hoàng thang gia giảm",
    tpbt: ["Thủy ngưu giác 15g", "Sinh địa 12g", "Xích thược 8g", "Mẫu đơn bì 6g", "Tam thất 4g", "Bồ hoàng 6g"]
  },
  "NKH_122": {
    stt: 649,
    hc: "Sốt xuất huyết Dengue giai đoạn sốc thể Khí âm lưỡng thoát",
    phanloai: ["Nhi Khoa", "Nhiệt", "Hư suy", "Sốc sốt xuất huyết"],
    tc: ["Sốt tụt đột ngột, chân tay lạnh ngắt, vã mồ hôi lạnh", "Mạch nhanh nhỏ khó bắt/vi tế muốn tuyệt", "Huyết áp kẹt/tụt, trẻ lơ mơ kiệt sức", "Da bệch tái"],
    pdt: "Ích khí sinh tân, hồi dương cứu thoát",
    bt: "Sinh mạch tán hợp Sâm phụ thang",
    tpbt: ["Nhân sâm 8g", "Phụ tử chế 6g", "Mạch môn 8g", "Ngũ vị tử 4g"]
  },
  "NKH_123": {
    stt: 650,
    hc: "Rong huyết ở trẻ em (Thiếu niên băng lậu) do Huyết nhiệt",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Huyết nhiệt băng lậu nhi"],
    tc: ["Bé gái dậy thì máu kinh ra xối xả hoặc rỉ rả không dừng", "Sắc kinh đỏ tươi hoặc tím đặc hôi", "Sốt nhẹ, khát nước, tiểu đỏ", "Mạch sác hữu lực"],
    pdt: "Thanh nhiệt lương huyết, chỉ huyết điều kinh",
    bt: "Bảo âm sản gia Ngó sen sao",
    tpbt: ["Sinh địa 10g", "Thục địa 10g", "Bạch thược 8g", "Hoàng bá 6g", "Tri mẫu 6g", "Mẫu đơn bì 6g", "Ngó sen sao 8g"]
  },
  "NKH_124": {
    stt: 651,
    hc: "Rong huyết ở trẻ em do Thận khí bất cố",
    phanloai: ["Nhi Khoa", "Bình", "Hư", "Thận khí hư băng lậu nhi"],
    tc: ["Máu kinh chảy rỉ rả dầm dề nhạt loãng kéo dài", "Mệt mỏi hụt hơi, đau thắt lưng mỏi gối", "Sắc mặt nhợt nhạt", "Mạch trầm tế nhược"],
    pdt: "Bổ thận cố xung, nhiếp huyết chỉ huyết",
    bt: "Thọ thai hoàn gia A giao, Hoàng kỳ",
    tpbt: ["Thỏ ty tử 8g", "Tang ký sinh 8g", "Tục đoạn 8g", "A giao 6g", "Hoàng kỳ 10g"]
  },
  "NKH_125": {
    stt: 652,
    hc: "Trĩ hậu môn trẻ em do Thấp nhiệt hạ chú",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Thấp nhiệt trĩ nhi"],
    tc: ["Búi trĩ sưng đỏ nóng rát hậu môn khi đại tiện", "Chảy máu tươi thành tia/giọt sau phân", "Táo bón, tiểu đỏ", "Mạch nhu sác"],
    pdt: "Thanh nhiệt lợi thấp, lương huyết tiêu trũng trĩ",
    bt: "Tán trĩ tán gia Hòe hoa, Địa dữu",
    tpbt: ["Hoàng liên 4g", "Hoàng bá 6g", "Trắc bách diệp 6g", "Hòe hoa 8g", "Địa dữu 8g", "Đương quy 6g"]
  },
  "NKH_126": {
    stt: 653,
    hc: "Trĩ hậu môn trẻ em do Trung khí hạ hãm sa búi",
    phanloai: ["Nhi Khoa", "Bình", "Hư", "Trung khí hạ hãm trĩ"],
    tc: ["Búi trĩ sa ra ngoài hậu môn rặn tiêu không co lên được", "Không sưng nóng đỏ đau, mệt mỏi hụt hơi", "Sắc mặt nhợt nhạt", "Mạch hoãn nhược"],
    pdt: "Bổ trung ích khí, thăng dương cử trĩ",
    bt: "Bổ trung ích khí thang gia Chỉ xác sao",
    tpbt: ["Hoàng kỳ 10g", "Đảng sâm 8g", "Bạch truật 8g", "Trần bì 4g", "Thăng ma 4g", "Sài hồ 4g", "Chỉ xác sao 4g"]
  },
  "NKH_127": {
    stt: 654,
    hc: "Nổi hạch trẻ em (Lạc trĩ / Thối hạch) do Đàm nhiệt kết hạch",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Đàm nhiệt kết hạch"],
    tc: ["Hạch cổ vai bẹn sưng to đau nhói cự án", "Da trên hạch hới đỏ nóng, sốt nhẹ", "Mạch hoạt sác"],
    pdt: "Thanh nhiệt hóa đàm, nhuyễn kiên tán kết",
    bt: "Tiêu tràng hoàn gia Hải tảo, Côn bố",
    tpbt: ["Bán hạ chế 6g", "Trần bì 4g", "Phục linh 8g", "Hải tảo 8g", "Côn bố 8g", "Hạ khô thảo 8g"]
  },
  "NKH_128": {
    stt: 655,
    hc: "Nổi hạch trẻ em mạn do Âm hư đàm ngưng",
    phanloai: ["Nhi Khoa", "Nhiệt", "Hư thực thác tạp", "Âm hư đàm hạch"],
    tc: ["Hạch sưng cứng dai dẳng nhiều tháng không đỏ không nóng", "Trẻ gầy triều nhiệt, vã mồ hôi trộm", "Mạch tế sác"],
    pdt: "Tư âm thanh nhiệt, hóa đàm tán kết",
    bt: "Lục vị địa hoàng hoàn gia Hạ khô thảo, Mẫu lệ",
    tpbt: ["Thục địa 10g", "Sơn thù 6g", "Hoài sơn 8g", "Trạch tả 6g", "Đan bì 6g", "Hạ khô thảo 8g", "Mẫu lệ 10g"]
  },
  "NKH_129": {
    stt: 656,
    hc: "Sốt chu kỳ ở trẻ em do Can Đởm uất nhiệt qua lại",
    phanloai: ["Nhi Khoa", "Hàn nhiệt thác tạp", "Hư thực thác tạp", "Thiếu dương qua lại"],
    tc: ["Sốt rét run từng cơn chu kỳ 3-5 ngày/lần", "Miệng đắng, họng khô, mắt hoa", "Tâm phiền hay nôn trớ, ngực trướng", "Mạch huyền"],
    pdt: "Hòa giải thiếu dương, thanh nhiệt thoái nhiệt",
    bt: "Tiểu sài hồ thang gia giảm",
    tpbt: ["Sài hồ 6g", "Hoàng cầm 6g", "Bán hạ chế 6g", "Sinh khương 4g", "Nhân sâm 6g", "Cam thảo 4g"]
  },
  "NKH_130": {
    stt: 657,
    hc: "Sốt kéo dài không rõ nguyên nhân thể Âm hư triều nhiệt",
    phanloai: ["Nhi Khoa", "Nhiệt", "Hư", "Âm hư triều nhiệt sốt"],
    tc: ["Sốt hầm hập 37.5-38.3 độ kéo dài nhiều tuần về chiều", "Lòng bàn tay chân nóng, vã mồ hôi trộm", "Trẻ gầy khô, lưỡi đỏ ít rêu", "Mạch tế sác"],
    pdt: "Tư âm thanh nhiệt, thoái chưng chỉ sốt",
    bt: "Tri bá địa hoàng hoàn gia Địa cốt bì, Tần giao",
    tpbt: ["Thục địa 10g", "Tri mẫu 6g", "Hoàng bá 6g", "Sơn thù 6g", "Địa cốt bì 8g", "Tần giao 6g"]
  },
  "NKH_131": {
    stt: 658,
    hc: "Sốt kéo dài thể Khí hư phát sốt",
    phanloai: ["Nhi Khoa", "Bình", "Hư", "Khí hư phát sốt"],
    tc: ["Sốt nhẹ kéo dài dai dẳng, vận động sốt tăng", "Trẻ mệt mỏi hụt hơi, ngại nói ngại chạy nhảy", "Vã mồ hôi nhiều, sắc mặt nhợt", "Mạch hư đại vô lực"],
    pdt: "Bổ trung ích khí, châm dương thoái nhiệt",
    bt: "Bổ trung ích khí thang gia liều Hoàng kỳ cao",
    tpbt: ["Hoàng kỳ 15g", "Đảng sâm 8g", "Bạch truật 8g", "Trần bì 4g", "Thăng ma 4g", "Sài hồ 4g", "Cam thảo 4g"]
  },
  "NKH_132": {
    stt: 659,
    hc: "Bệnh Hoại tử da do Thấp nhiệt hỏa độc hoại tử",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Hỏa độc hoại tử da"],
    tc: ["Vùng da lở loét hoại tử chảy dịch mủ hôi thối dữ dội", "Xung quanh sưng nóng đỏ đau quặn", "Sốt cao rét run, bứt rứt", "Mạch sác hữu lực dũng mãnh"],
    pdt: "Thanh nhiệt giải độc, trừ thấp bài nùng sinh cơ",
    bt: "Ngũ vị tiêu độc ẩm hợp Tiên phương hoạt mệnh hãn",
    tpbt: ["Kim ngân hoa 10g", "Cúc hoa 6g", "Bồ công anh 10g", "Bạch chỉ 6g", "Bối mẫu 6g", "Cam thảo 4g"]
  },
  "NKH_133": {
    stt: 660,
    hc: "Bệnh Lở ngứa dai dẳng (Chàm bội nhiễm) do Thấp nhiệt dư uẩn",
    phanloai: ["Nhi Khoa", "Nhiệt", "Hư thực thác tạp", "Thấp nhiệt dư uẩn"],
    tc: ["Các vết loét ngứa chảy mủ rỉ rả dai dẳng không lành", "Da thâm xạm dày sừng ngứa dữ dội", "Rêu dầy dính vàng", "Mạch nhu sác"],
    pdt: "Thanh nhiệt táo thấp, giải độc chỉ ngứa sinh cơ",
    bt: "Nhị diệu tán gia Khổ sâm, Thổ phục linh",
    tpbt: ["Hoàng bá 6g", "Thương truật 6g", "Khổ sâm 6g", "Thổ phục linh 10g", "Xa tiền tử 8g"]
  },
  "NKH_134": {
    stt: 661,
    hc: "Bệnh Bỏng lửa/nước ở trẻ em thể Nhiệt độc thương tân",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Bỏng nhiệt độc"],
    tc: ["Da bỏng phồng mộp mụn nước sưng đỏ đau dữ dội khóc ré", "Sốt, khát nước bứt rứt", "Tiểu ngắn đỏ", "Mạch hoạt sác"],
    pdt: "Thanh nhiệt giải độc, lương huyết sinh tân chỉ thống",
    bt: "Thanh nhiệt giải độc thang gia Mạch môn, Sinh địa",
    tpbt: ["Hoàng liên 4g", "Hoàng cầm 6g", "Hoàng bá 6g", "Sinh địa 10g", "Mạch môn 8g", "Cam thảo 4g"]
  },
  "NKH_135": {
    stt: 662,
    hc: "Bệnh Bỏng biến chứng Vong âm nguy cấp",
    phanloai: ["Nhi Khoa", "Nhiệt", "Hư suy", "Bỏng vong âm"],
    tc: ["Bỏng diện rộng vã mồ hôi nóng dính đầm đìa", "Thở gấp nông, da khô nhăn, khát xối xả", "Trẻ lơ mơ kiệt sức", "Mạch tế sác vô lực muốn tuyệt"],
    pdt: "Tư âm cứu thoát, sinh tân liễm hãn",
    bt: "Sinh mạch tán gia Mẫu lệ, Quy bản, A giao",
    tpbt: ["Nhân sâm 8g", "Mạch môn 8g", "Ngũ vị tử 4g", "Mẫu lệ 15g", "Quy bản 10g", "A giao 8g"]
  },
  "NKH_136": {
    stt: 663,
    hc: "Bệnh Bỏng biến chứng Vong dương nguy cấp",
    phanloai: ["Nhi Khoa", "Hàn", "Hư suy", "Bỏng vong dương"],
    tc: ["Sau bỏng nặng vã mồ hôi lạnh đầm đìa", "Chân tay lạnh ngắt quá gối, sắc mặt bệch tái", "Thở yếu ớt mắt nhắm lơ mơ", "Mạch vi tế muốn tuyệt"],
    pdt: "Hồi dương cứu nghịch, đại bổ nguyên khí cố thoát",
    bt: "Sâm phụ thang hợp Tứ nghịch thang",
    tpbt: ["Nhân sâm 8g", "Phụ tử chế 6g", "Can khương 4g", "Chích cam thảo 4g"]
  },
  "NKH_137": {
    stt: 664,
    hc: "Chấn thương phần mềm nhi do Huyết ứ sưng đau",
    phanloai: ["Nhi Khoa", "Bình", "Thực", "Huyết ứ chấn thương"],
    tc: ["Vùng chấn thương sưng to bầm tím đau nhói cự án", "Khó vận động, trẻ quấy khóc", "Lưỡi tím sẫm", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, tiêu thũng chỉ thống",
    bt: "Đào hồng tứ vật thang gia Tam thất, Ngưu tất",
    tpbt: ["Đào nhân 6g", "Hồng hoa 4g", "Đương quy 6g", "Xuyên khung 6g", "Tam thất 4g", "Ngưu tất 6g"]
  },
  "NKH_138": {
    stt: 665,
    hc: "Viêm xương tủy xương trẻ em (Cốt phụ mủ) do Hỏa độc uẩn xương",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Hỏa độc cốt phụ"],
    tc: ["Xương sưng to nóng đau dữ dội quằn quại, sốt cao rét run", "Da trên xương đỏ tấy, mưng mủ vỡ lỗ rò", "Mạch hoạt sác dũng mãnh"],
    pdt: "Thanh nhiệt giải độc, tiêu thũng bài nùng trác cốt",
    bt: "Tiên phương hoạt mệnh hãn gia Thổ phục linh",
    tpbt: ["Kim ngân hoa 10g", "Bạch chỉ 6g", "Bối mẫu 6g", "Trần bì 4g", "Cam thảo 4g", "Thổ phục linh 10g"]
  },
  "NKH_139": {
    stt: 666,
    hc: "Viêm xương tủy mạn do Khí huyết hư hoại tử rò mủ",
    phanloai: ["Nhi Khoa", "Bình", "Hư suy", "Khí huyết hư rò mủ"],
    tc: ["Lỗ rò xương chảy mủ nhạt loãng dai dẳng lâu lành", "Mảnh xương chết đọng, trẻ gầy còm bệch nhợt", "Ăn kém mệt mỏi", "Mạch tế nhược vô lực"],
    pdt: "Đại bổ khí huyết, thác độc sinh cơ trác cốt",
    bt: "Thập toàn đại bổ thang gia Hoàng kỳ liều cao",
    tpbt: ["Nhân sâm 8g", "Bạch truật 8g", "Phục linh 8g", "Cam thảo 4g", "Thục địa 10g", "Đương quy 6g", "Hoàng kỳ 15g"]
  },
  "NKH_140": {
    stt: 667,
    hc: "Trúng độc nấm/đồ ăn biến chứng Can Thận hư suy",
    phanloai: ["Nhi Khoa", "Hàn nhiệt thác tạp", "Hư suy", "Độc tố hoại tử can thận"],
    tc: ["Vàng da mắt vàng đục sau nôn mửa tiêu chảy", "Tiểu tiện ít/vô niệu, xuất huyết dưới da", "Trẻ lơ mơ hôn mê", "Mạch vi tế sác"],
    pdt: "Thanh nhiệt giải độc, bảo can dưỡng thận cứu kiệt",
    bt: "Nhân trần cao thang hợp Tả quy hoàn gia giảm",
    tpbt: ["Nhân trần 10g", "Chi tử 6g", "Đại hoàng 4g", "Thục địa 10g", "Sơn thù 6g", "Hoài sơn 8g"]
  },
  "NKH_141": {
    stt: 668,
    hc: "Động kinh ở trẻ em (Giản chứng) thể Đàm hỏa phong động",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Đàm hỏa động kinh"],
    tc: ["Đột ngột ngã gục co giật toàn thân kêu tiếng heo/chó", "Mắt trợn ngược, miệng sùi bọt đờm, đái dầm", "Tỉnh dậy mệt mỏi không nhớ", "Mạch hoạt sác hữu lực"],
    pdt: "Thanh nhiệt hóa đàm, bình can tức phong định giản",
    bt: "Địch đàm thang hợp Định giản hoàn",
    tpbt: ["Bán hạ chế 6g", "Trần bì 4g", "Phục linh 8g", "Chỉ thực 4g", "Đởm nam tinh 4g", "Thạch xương bồ 6g", "Thiên ma 6g"]
  },
  "NKH_142": {
    stt: 669,
    hc: "Động kinh ở trẻ em thể Can phong nội động",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Can phong động kinh"],
    tc: ["Nhiều cơn co giật ngắn trong ngày, chân tay giật nẩy", "Mặt đỏ, cáu gắt trước cơn giật", "Trẻ quấy khóc nghiến răng", "Mạch huyền sác"],
    pdt: "Bình can tức phong, trấn tĩnh chỉ giật",
    bt: "Linh dương câu đằng ẩm gia giảm",
    tpbt: ["Linh dương giác 2g", "Câu đằng 8g", "Tang diệp 6g", "Cúc hoa 6g", "Bạch thược 8g", "Sinh địa 10g", "Cam thảo 4g"]
  },
  "NKH_143": {
    stt: 670,
    hc: "Động kinh ở trẻ em thể Tỳ hư đàm trọc",
    phanloai: ["Nhi Khoa", "Bình", "Hư thực thác tạp", "Tỳ hư đàm trọc động kinh"],
    tc: ["Nổi cơn động kinh nhẹ lơ mơ ngơ ngác vài giây", "Sắc mặt vàng nhợt, ăn kém tiêu chảy", "Nôn nao đờm dãi nhiều", "Mạch nhu hoạt nhược"],
    pdt: "Kiện tỳ hóa đàm, khai khiếu định giản",
    bt: "Lục quân tử thang gia Thiên ma, Thạch xương bồ",
    tpbt: ["Đảng sâm 8g", "Bạch truật 8g", "Phục linh 8g", "Trần bì 4g", "Bán hạ chế 6g", "Thiên ma 6g", "Thạch xương bồ 6g"]
  },
  "NKH_144": {
    stt: 671,
    hc: "Động kinh ở trẻ em thể Thận tinh khuy tổn",
    phanloai: ["Nhi Khoa", "Bình", "Hư suy", "Thận tinh bất túc động kinh"],
    tc: ["Cơn động kinh tái đi tái lại gây sa sút trí tuệ đần độn", "Chân tay yếu mềm, tóc rụng răng yếu", "Đau lưng mỏi gối", "Mạch trầm tế vô lực"],
    pdt: "Bổ thận điền tinh, dưỡng tủy bổ não định giản",
    bt: "Tả quy hoàn gia Lộc giác giao, Thạch xương bồ",
    tpbt: ["Thục địa 10g", "Sơn thù 6g", "Hoài sơn 8g", "Kỷ tử 8g", "Thỏ ty tử 8g", "Lộc giác giao 6g", "Thạch xương bồ 6g"]
  },
  "NKH_145": {
    stt: 672,
    hc: "Bại não nhi khoa (Ngũ trì ngũ nhuyễn) thể Tỳ Thận dương hư",
    phanloai: ["Nhi Khoa", "Hàn", "Hư suy", "Tỳ Thận dương hư bại não"],
    tc: ["Cơ bắp duỗi mềm không sức (Nhuyễn), chậm biết đi ngồi", "Sợ lạnh tay chân lạnh ngắt, tiêu chảy phân sống", "Thần chí đần độn chảy dãi", "Mạch trầm tế trì vô lực"],
    pdt: "Ôn bổ tỳ thận, cường gân trác cốt khai khiếu",
    bt: "Hữu quy hoàn hợp Lục quân tử thang",
    tpbt: ["Thục địa 10g", "Nhục quế 3g", "Phụ tử chế 4g", "Sơn thù 6g", "Đảng sâm 8g", "Bạch truật 8g", "Phục linh 8g"]
  },
  "NKH_146": {
    stt: 673,
    hc: "Bại não nhi khoa thể Can Thận âm hư gân cơ co cứng",
    phanloai: ["Nhi Khoa", "Nhiệt", "Hư thực thác tạp", "Can Thận âm hư bại não"],
    tc: ["Tay chân co quắp cứng đờ khó co duỗi", "Mắt lác, quấy khóc đêm, triều nhiệt đạo hãn", "Lưỡi đỏ ít rêu", "Mạch tế sác"],
    pdt: "Tư bổ can thận, nhuận gân thư lạc",
    bt: "Lục vị địa hoàng hoàn gia Mộc qua, Bạch thược, Câu đằng",
    tpbt: ["Thục địa 10g", "Sơn thù 6g", "Hoài sơn 8g", "Trạch tả 6g", "Đan bì 6g", "Mộc qua 8g", "Bạch thược 8g", "Câu đằng 8g"]
  },
  "NKH_147": {
    stt: 674,
    hc: "Bại não nhi khoa thể Khí huyết hư suy teo cơ",
    phanloai: ["Nhi Khoa", "Bình", "Hư suy", "Khí huyết hư bại não"],
    tc: ["Chân tay gầy teo cơ nhão mềm không lực", "Mệt mỏi sắc mặt nhợt nhạt đần độn", "Ăn kém tiêu chảy", "Mạch tế nhược vô lực"],
    pdt: "Đại bổ khí huyết, cường gân trác cốt",
    bt: "Bát trân thang gia Hoàng kỳ, Ngưu tất, Đỗ trọng",
    tpbt: ["Đảng sâm 8g", "Bạch truật 8g", "Phục linh 8g", "Thục địa 10g", "Đương quy 6g", "Hoàng kỳ 10g", "Ngưu tất 6g"]
  },
  "NKH_148": {
    stt: 675,
    hc: "Bại não nhi khoa thể Đàm trọc bế khiếu sa sút trí tuệ",
    phanloai: ["Nhi Khoa", "Bình", "Thực", "Đàm trọc bế khiếu bại não"],
    tc: ["Nói ú ớ không thành tiếng, chảy dãi liên tục cả ngày", "Thờ ơ ngơ ngác cười khóc bất thường", "Rêu dầy nhớt", "Mạch hoạt nhu"],
    pdt: "Hóa đàm khai khiếu, bổ não định chí",
    bt: "Thuận khí đạo đàm thang gia Thạch xương bồ, Viễn chí",
    tpbt: ["Bán hạ chế 6g", "Trần bì 4g", "Phục linh 8g", "Chỉ thực 4g", "Đởm nam tinh 4g", "Thạch xương bồ 6g", "Viễn chí 4g"]
  },
  "NKH_149": {
    stt: 676,
    hc: "Tăng động giảm chú ý (ADHD) thể Can hỏa uất bốc",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Can hỏa ADHD"],
    tc: ["Trẻ chạy nhảy liên tục không ngừng, hay đập phá", "Tính nết nóng nảy dễ giận dữ, khó tập trung", "Mặt đỏ, tiểu đỏ táo bón", "Mạch huyền sác"],
    pdt: "Thanh can tả hỏa, trấn tĩnh an thần",
    bt: "Long đởm tả can thang gia Mẫu lệ, Câu đằng",
    tpbt: ["Long đởm thảo 6g", "Chi tử 6g", "Hoàng cầm 6g", "Trạch tả 6g", "Sài hồ 4g", "Mẫu lệ 10g", "Câu đằng 8g"]
  },
  "NKH_150": {
    stt: 677,
    hc: "Tăng động giảm chú ý thể Tâm Thận bất giao",
    phanloai: ["Nhi Khoa", "Nhiệt", "Hư thực thác tạp", "Tâm Thận bất giao ADHD"],
    tc: ["Cựa quậy không ngồi yên một chỗ, mất ngủ trằn trọc", "Bứt rứt hay quên, lòng bàn tay chân nóng", "Lưỡi đỏ ít rêu", "Mạch tế sác"],
    pdt: "Tư âm giáng hỏa, thanh tâm an thần định chí",
    bt: "Thiên vương bổ tâm đan hợp Giao thái hoàn",
    tpbt: ["Sinh địa 10g", "Huyền sâm 8g", "Cát cánh 4g", "Viễn chí 4g", "Toan táo nhân 8g", "Hoàng liên 4g", "Nhục quế 2g"]
  },
  "NKH_151": {
    stt: 678,
    hc: "Tăng động giảm chú ý thể Đàm nhiệt nhiễu tâm",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Đàm nhiệt ADHD"],
    tc: ["Nói năng huyên náo lảm nhảm, trêu chọc bạn bè", "Cổ họng đờm dãi dính nhớt, hay quên", "Rêu dầy vàng nhớt", "Mạch hoạt sác"],
    pdt: "Thanh nhiệt hóa đàm, thanh tâm định chí",
    bt: "Hoàng liên ôn đởm thang gia Thạch xương bồ",
    tpbt: ["Hoàng liên 4g", "Bán hạ chế 6g", "Trần bì 4g", "Phục linh 8g", "Trúc nhự 6g", "Chỉ thực 4g", "Thạch xương bồ 6g"]
  },
  "NKH_152": {
    stt: 679,
    hc: "Tự kỷ ở trẻ em (Tự kỷ chứng) thể Can uất tỳ hư",
    phanloai: ["Nhi Khoa", "Bình", "Hư thực thác tạp", "Khí trệ Tỳ hư tự kỷ"],
    tc: ["Thích ở một mình không giao tiếp ánh mắt, không nói", "Khóc lóc thờ ơ xúc động bất thường", "Ăn kém tiêu chảy", "Mạch huyền tế"],
    pdt: "Sơ can giải uất, kiện tỳ an thần khai khiếu",
    bt: "Tiêu dao tán gia Thạch xương bồ, Viễn chí",
    tpbt: ["Sài hồ 6g", "Bạch thược 8g", "Đương quy 6g", "Bạch truật 8g", "Phục linh 8g", "Thạch xương bồ 6g", "Viễn chí 4g"]
  },
  "NKH_153": {
    stt: 680,
    hc: "Tự kỷ ở trẻ em thể Thận tinh bất túc đần độn",
    phanloai: ["Nhi Khoa", "Bình", "Hư suy", "Thận tinh bất túc tự kỷ"],
    tc: ["Chậm phát triển trí tuệ nghiêm trọng, không nhận biết bố mẹ", "Hai chân yếu mềm, tóc bạc rụng", "Mạch trầm tế vô lực"],
    pdt: "Bổ thận điền tinh, dưỡng tủy bổ não khai âm",
    bt: "Tả quy hoàn gia Lộc giác giao, Thạch xương bồ, Tử hà xe",
    tpbt: ["Thục địa 10g", "Sơn thù 6g", "Hoài sơn 8g", "Kỷ tử 8g", "Lộc giác giao 6g", "Thạch xương bồ 6g", "Tử hà xe 4g"]
  },
  "NKH_154": {
    stt: 681,
    hc: "Rối loạn giấc ngủ nhi (Dạ đề / Trằn trọc đêm) do Tâm nhiệt bứt rứt",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Tâm nhiệt dạ đề"],
    tc: ["Ban đêm khóc ré liên tục mặt đỏ gay", "Lòng bàn tay chân nóng, loét lưỡi đỏ", "Tiểu buốt đỏ", "Mạch sác hữu lực"],
    pdt: "Thanh tâm tả hỏa, an thần chỉ khóc",
    bt: "Đạo xích tán gia Toan táo nhân, Đan sâm",
    tpbt: ["Sinh địa 10g", "Mộc thông 4g", "Trúc diệp 6g", "Toan táo nhân 8g", "Đan sâm 8g", "Cam thảo 4g"]
  },
  "NKH_155": {
    stt: 682,
    hc: "Trằn trọc đêm ở trẻ em do Tỳ Vị hư hàn đau bụng đêm",
    phanloai: ["Nhi Khoa", "Hàn", "Hư", "Tỳ Vị hư hàn dạ đề"],
    tc: ["Đêm ngủ trằn trọc khóc hầm hập nằm co quắp", "Thích áp bụng vào bụng mẹ hay chườm ấm", "Sợ lạnh, tay chân lạnh, tiêu lỏng", "Mạch trầm tế hoãn"],
    pdt: "Ôn trung tán hàn, kiện tỳ an thần chỉ khóc",
    bt: "Lý trung hoàn gia Cúc hoa, Toan táo nhân",
    tpbt: ["Đảng sâm 8g", "Can khương 4g", "Bạch truật 8g", "Cam thảo 4g", "Toan táo nhân 8g"]
  },
  "NKH_156": {
    stt: 683,
    hc: "Trằn trọc đêm ở trẻ em do Kinh hãi hoảng sợ",
    phanloai: ["Nhi Khoa", "Bình", "Thực", "Kinh hãi dạ đề"],
    tc: ["Ban đêm tỉnh giấc giật mình khóc ré thảm thiết", "Nghiến răng, vã mồ hôi lạnh", "Trẻ hoảng hốt bám chặt lấy mẹ", "Mạch huyền tế"],
    pdt: "Trấn kinh an thần, định chí chỉ khóc",
    bt: "An thần định chí hoàn gia Mẫu lệ, Long cốt",
    tpbt: ["Nhân sâm 6g", "Phục linh 8g", "Phục thần 8g", "Viễn chí 4g", "Long cốt 10g", "Mẫu lệ 10g"]
  },
  "NKH_157": {
    stt: 684,
    hc: "Thối nhược trẻ sơ sinh (Khóc dạ đề sơ sinh) do Bào thai tích nhiệt",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Sơ sinh tích nhiệt"],
    tc: ["Trẻ sơ sinh vừa sinh ra quấy khóc liên tục ngày đêm", "Mặt đỏ môi đỏ khô, táo bón", "Trớ sữa chua hôi", "Mạch hoạt sác"],
    pdt: "Thanh nhiệt giải độc, hòa trung an thần",
    bt: "Thanh nhiệt giải độc tán gia giảm",
    tpbt: ["Hoàng liên 3g", "Hoàng cầm 4g", "Sinh địa 8g", "Trúc diệp 4g", "Cam thảo 3g"]
  },
  "NKH_158": {
    stt: 685,
    hc: "Thối nhược trẻ sơ sinh do Mẹ ăn lạnh lây tỳ hàn",
    phanloai: ["Nhi Khoa", "Hàn", "Hư", "Sơ sinh Tỳ hư hàn"],
    tc: ["Sơ sinh bú khóc yếu ớt, người lạnh ngắt", "Nôn ra sữa loãng, tiêu phân sống lỏng", "Da bệch tái", "Mạch trầm vi nhược"],
    pdt: "Ôn trung tán hàn, kiện tỳ trợ dương",
    bt: "Tứ quân tử thang gia Can khương, Nhục quế",
    tpbt: ["Đảng sâm 6g", "Bạch truật 6g", "Phục linh 6g", "Can khương 3g", "Nhục quế 2g", "Cam thảo 3g"]
  },
  "NKH_159": {
    stt: 686,
    hc: "Ngũ trì (Chậm đứng, đi, mọc răng, tóc, nói) do Thận tinh bất túc",
    phanloai: ["Nhi Khoa", "Bình", "Hư suy", "Thận tinh bất túc ngũ trì"],
    tc: ["Trẻ 2-3 tuổi chưa biết đi đứng, chưa mọc răng", "Tóc thưa thớt bạc khô, xương sọ chưa khép (Giải thóp)", "Đần độn chậm nói", "Mạch trầm tế vô lực"],
    pdt: "Bổ thận điền tinh, ích tủy bổ não cường gân",
    bt: "Gia vị Địa hoàng hoàn gia Lộc nhung, Ngưu tất",
    tpbt: ["Thục địa 10g", "Sơn thù 6g", "Hoài sơn 8g", "Trạch tả 6g", "Đan bì 6g", "Phục linh 8g", "Lộc nhung 2g", "Ngưu tất 6g"]
  },
  "NKH_160": {
    stt: 687,
    hc: "Ngũ trì do Tỳ Vị khí huyết hư suy",
    phanloai: ["Nhi Khoa", "Bình", "Hư suy", "Khí huyết hư ngũ trì"],
    tc: ["Cơ bắp teo nhão không lực đứng, gầy còm", "Sắc mặt úa vàng nhợt nhạt, ăn kém tiêu chảy", "Mệt mỏi không chạy nhảy", "Mạch tế nhược vô lực"],
    pdt: "Song bổ khí huyết, kiện tỳ thăng dưỡng",
    bt: "Bát trân thang gia Hoàng kỳ, Ngưu tất",
    tpbt: ["Đảng sâm 8g", "Bạch truật 8g", "Phục linh 8g", "Cam thảo 4g", "Thục địa 10g", "Đương quy 6g", "Hoàng kỳ 10g", "Ngưu tất 6g"]
  },
  "NKH_161": {
    stt: 688,
    hc: "Ngũ nhuyễn (Mềm cổ, cơ, tay, chân, miệng) do Tỳ Thận hư suy",
    phanloai: ["Nhi Khoa", "Bình", "Hư suy", "Tỳ Thận hư suy ngũ nhuyễn"],
    tc: ["Cổ ngoẹo không gượng lên được (Cổ nhuyễn), tay chân mềm rũ", "Miệng nhão trễ chảy dãi liên tục không nhai bú tốt", "Trẻ mệt mỏi đần độn", "Mạch trầm nhược vô lực"],
    pdt: "Song bổ tỳ thận, cường gân trác cốt thăng đề",
    bt: "Bổ trung ích khí thang hợp Hữu quy hoàn",
    tpbt: ["Hoàng kỳ 10g", "Đảng sâm 8g", "Bạch truật 8g", "Thục địa 10g", "Nhục quế 3g", "Phụ tử chế 4g", "Thăng ma 4g"]
  },
  "NKH_162": {
    stt: 689,
    hc: "Giải thóp (Thóp đỉnh đầu không khép) do Thận tinh bất túc",
    phanloai: ["Nhi Khoa", "Bình", "Hư suy", "Thận tinh bất túc giải thóp"],
    tc: ["Trẻ 2-4 tuổi thóp đầu vẫn phập phồng rộng không khép", "Xương sọ mềm nhão, đầu to đần độn", "Chân yếu chậm đi, mọc răng chậm", "Mạch trầm tế vô lực"],
    pdt: "Bổ thận điền tinh, trác cốt điền tủy",
    bt: "Lục vị địa hoàng hoàn gia Lộc giác giao, Ngưu tất, Quy bản",
    tpbt: ["Thục địa 10g", "Sơn thù 6g", "Hoài sơn 8g", "Trạch tả 6g", "Đan bì 6g", "Phục linh 8g", "Lộc giác giao 6g", "Ngưu tất 6g"]
  },
  "NKH_163": {
    stt: 690,
    hc: "Thóp hõm (Thóp lõm sâu xuống) do Âm tân khuy kiệt",
    phanloai: ["Nhi Khoa", "Nhiệt", "Hư suy", "Âm tân khuy tổn thóp hõm"],
    tc: ["Thóp đỉnh đầu lõm sâu do nôn mửa tiêu chảy xối xả", "Mắt trũng sâu, da khô nhăn, khát nước", "Trẻ lơ mơ kiệt sức", "Mạch tế sác vô lực"],
    pdt: "Tư âm sinh tân, ích khí cứu thoát",
    bt: "Sinh mạch tán gia Mạch môn, Sinh địa, A giao",
    tpbt: ["Nhân sâm 6g", "Mạch môn 8g", "Ngũ vị tử 4g", "Sinh địa 10g", "A giao 6g"]
  },
  "NKH_164": {
    stt: 691,
    hc: "Thóp nhô (Thóp phồng to) do Nhiệt độc hỏa bốc脑",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Hỏa độc thóp phồng"],
    tc: ["Thóp đầu phồng căng cứng đau, sốt cao quằn quại", "Co giật, mắt trợn ngược, nôn vọt", "Mặt đỏ gừ, bứt rứt", "Mạch hoạt sác dũng mãnh"],
    pdt: "Thanh nhiệt giải độc, giáng hỏa trấn kinh",
    bt: "Hoàng liên giải độc thang gia An cung ngưu hoàng hoàn",
    tpbt: ["Hoàng liên 4g", "Hoàng cầm 6g", "Hoàng bá 6g", "Chi tử 6g", "Ngưu hoàng 0.5g"]
  },
  "NKH_165": {
    stt: 692,
    hc: "Vàng da sơ sinh (Hoàng đản) do Thấp nhiệt uẩn kết (Dương hoàng)",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Dương hoàng sơ sinh"],
    tc: ["Mắt vàng, da toàn thân vàng tươi sáng sau sinh 2-3 ngày", "Trẻ sốt nhẹ, bú quấy, bứt rứt", "Tiểu tiện đỏ ngắn, phân vàng đục", "Rêu vàng nhớt"],
    pdt: "Thanh nhiệt lợi thấp, thoái hoàng",
    bt: "Nhân trần cao thang gia giảm",
    tpbt: ["Nhân trần 10g", "Chi tử 6g", "Đại hoàng 3g"]
  },
  "NKH_166": {
    stt: 693,
    hc: "Vàng da sơ sinh do Hàn thấp trệ tỳ (Âm hoàng)",
    phanloai: ["Nhi Khoa", "Hàn", "Hư thực thác tạp", "Âm hoàng sơ sinh"],
    tc: ["Da và mắt vàng tối u ám kéo dài nhiều tuần", "Trẻ sợ lạnh, tay chân lạnh, bú kém lơ mơ", "Phân bạc màu/trắng nhạt, tiêu lỏng", "Mạch trầm trì nhược"],
    pdt: "Ôn trung tán hàn, kiện tỳ trừ thấp thoái hoàng",
    bt: "Nhân trần phụ tử thang gia giảm",
    tpbt: ["Nhân sâm 6g", "Phụ tử chế 3g", "Can khương 3g", "Bạch truật 6g", "Nhân trần 8g"]
  },
  "NKH_167": {
    stt: 694,
    hc: "Vàng da sơ sinh do Huyết ứ bế tắc mật",
    phanloai: ["Nhi Khoa", "Bình", "Thực", "Huyết ứ hoàng đản"],
    tc: ["Da vàng tím sẫm dai dẳng, bụng trướng gan lách to", "Nổi mạch máu tím vùng bụng", "Phân xám xịt, lưỡi tím điểm ứ huyết", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, lợi đởm thoái hoàng",
    bt: "Đào hồng tứ vật thang gia Nhân trần, Trạch tả",
    tpbt: ["Đào nhân 6g", "Hồng hoa 4g", "Đương quy 6g", "Xuyên khung 6g", "Nhân trần 8g", "Trạch tả 6g"]
  },
  "NKH_168": {
    stt: 695,
    hc: "Cảm phong chảy dãi ở trẻ em do Tỳ khí hư bất cố",
    phanloai: ["Nhi Khoa", "Bình", "Hư", "Tỳ khí hư chảy dãi"],
    tc: ["Nước dãi chảy dầm dề lòng thòng không tự chủ được", "Trẻ ăn kém tiêu chảy, mệt mỏi sắc mặt nhợt", "Cơ miệng nhão", "Mạch hoãn nhược"],
    pdt: "Kiện tỳ ích khí, nhiếp tân chỉ dãi",
    bt: "Tứ quân tử thang gia Ích trí nhân, Kha tử",
    tpbt: ["Đảng sâm 8g", "Bạch truật 8g", "Phục linh 8g", "Cam thảo 4g", "Ích trí nhân 6g", "Kha tử 4g"]
  },
  "NKH_169": {
    stt: 696,
    hc: "Chảy dãi ở trẻ em do Tỳ Vị hư hàn tràng dịch",
    phanloai: ["Nhi Khoa", "Hàn", "Hư", "Tỳ Vị hư hàn chảy dãi"],
    tc: ["Nước dãi chảy ra trong loãng lạnh ngắt gáy cổ", "Sợ lạnh, tay chân lạnh, bụng đau âm ỉ", "Mạch trầm trì vô lực"],
    pdt: "Ôn trung kiện tỳ, sáp tân chỉ dãi",
    bt: "Lý trung hoàn gia Ích trí nhân, Bán hạ chế",
    tpbt: ["Nhân sâm 6g", "Can khương 4g", "Bạch truật 8g", "Cam thảo 4g", "Ích trí nhân 6g", "Bán hạ chế 6g"]
  },
  "NKH_170": {
    stt: 697,
    hc: "Chảy dãi ở trẻ em do Vị nhiệt tích nhiệt bốc dịch",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Vị nhiệt chảy dãi"],
    tc: ["Nước dãi chảy ra dính hôi, miệng hôi rát", "Sưng lợi, táo bón, tiểu đỏ", "Trẻ quấy bứt rứt", "Mạch hoạt sác"],
    pdt: "Thanh vị tả hỏa, giáng nghịch chỉ dãi",
    bt: "Thanh vị tán gia Ích trí nhân",
    tpbt: ["Hoàng liên 4g", "Thăng ma 4g", "Sinh địa 10g", "Đan bì 6g", "Ích trí nhân 6g"]
  },
  "NKH_171": {
    stt: 698,
    hc: "Sưng vú sơ sinh do Thai nhiệt chưa giải",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Sơ sinh sưng vú"],
    tc: ["Trẻ sơ sinh hai bầu vú sưng to bằng hạt đậu đỏ nóng nhẹ", "Trẻ quấy khóc khi sờ vào", "Sốt nhẹ, rêu vàng mỏng", "Mạch sác"],
    pdt: "Thanh nhiệt giải độc, tán kết tiêu thũng",
    bt: "Ngũ vị tiêu độc ẩm gia giảm",
    tpbt: ["Kim ngân hoa 6g", "Cúc hoa 4g", "Bồ công anh 6g", "Cam thảo 3g"]
  },
  "NKH_172": {
    stt: 699,
    hc: "Bảo thai co giật sơ sinh do Phong hỏa nhập vinh",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Sơ sinh co giật phong hỏa"],
    tc: ["Trẻ vừa sinh 1-2 ngày co giật liên tục, mắt trợn", "Thở xối xả khò khè, mặt đỏ gừ", "Mắt trợn ngược", "Mạch huyền sác"],
    pdt: "Thanh nhiệt giải độc, bình can tức phong khai khiếu",
    bt: "Linh dương câu đằng ẩm gia An cung ngưu hoàng hoàn",
    tpbt: ["Linh dương giác 1g", "Câu đằng 6g", "Bạch thược 6g", "Sinh địa 8g", "Ngưu hoàng 0.3g"]
  },
  "NKH_173": {
    stt: 700,
    hc: "Xuất huyết rốn sơ sinh do Tỳ không thống huyết",
    phanloai: ["Nhi Khoa", "Bình", "Hư", "Sơ sinh Tỳ hư rỉ máu rốn"],
    tc: ["Cuống rốn chảy máu hồng nhạt rỉ rả không ngừng", "Da trẻ bệch nhợt, bú yếu lơ mơ", "Chân tay lạnh", "Mạch vi nhược"],
    pdt: "Kiện tỳ ích khí, nhiếp huyết chỉ huyết rốn",
    bt: "Quy tỳ thang gia Tam thất, A giao",
    tpbt: ["Đảng sâm 6g", "Bạch truật 6g", "Phục linh 6g", "Hoàng kỳ 8g", "Tam thất 3g", "A giao 4g"]
  },
  "NKH_174": {
    stt: 701,
    hc: "Xuất huyết rốn sơ sinh do Thấp nhiệt hỏa độc rốn",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Thấp nhiệt rốn rỉ máu"],
    tc: ["Vùng rốn sưng đỏ chảy mủ lẫn máu tươi hôi thối", "Trẻ sốt cao, quấy khóc dữ dội", "Tiểu đỏ", "Mạch nhu sác"],
    pdt: "Thanh nhiệt giải độc, trừ thấp chỉ huyết",
    bt: "Ngũ vị tiêu độc ẩm gia Hoàng liên, Tam thất",
    tpbt: ["Kim ngân hoa 6g", "Cúc hoa 4g", "Bồ công anh 6g", "Hoàng liên 3g", "Tam thất 3g"]
  },
  "NKH_175": {
    stt: 702,
    hc: "Rốn ướt không khô (Chảy dịch rốn sơ sinh) do Tỳ hư thấp trệ",
    phanloai: ["Nhi Khoa", "Bình", "Hư thực thác tạp", "Tỳ hư rốn rỉ dịch"],
    tc: ["Cuống rốn rụng lâu ngày vẫn rỉ dịch trong dính", "Xung quanh rốn không sưng nóng đỏ", "Ăn bú kém tiêu lỏng", "Mạch hoãn nhược"],
    pdt: "Kiện tỳ mẫn thấp, sáp rốn sinh cơ",
    bt: "Sâm linh bạch truật tán gia Bạch chỉ",
    tpbt: ["Đảng sâm 6g", "Bạch truật 6g", "Phục linh 6g", "Hoài sơn 6g", "Ý dĩ 6g", "Bạch chỉ 4g"]
  },
  "NKH_176": {
    stt: 703,
    hc: "Khóc sưng mắt ở trẻ em do Can hỏa bốc trào mắt",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Can hỏa sưng mắt"],
    tc: ["Mắt sưng to đỏ gừ dính mủ mắt vàng dầy", "Nước mắt nóng chảy rỉ rả, trẻ sợ ánh sáng", "Dễ cáu giận quấy khóc", "Mạch huyền sác"],
    pdt: "Thanh can tả hỏa, minh mục tiêu thũng",
    bt: "Long đởm tả can thang gia Cúc hoa, Mẫu lệ",
    tpbt: ["Long đởm thảo 6g", "Chi tử 6g", "Hoàng cầm 6g", "Trạch tả 6g", "Cúc hoa 6g", "Mẫu lệ 10g"]
  },
  "NKH_177": {
    stt: 704,
    hc: "Liệt dây VII ngoại biên nhi do Phong hàn xâm nhập mặt",
    phanloai: ["Nhi Khoa", "Hàn", "Thực", "Phong hàn lệch mặt nhi"],
    tc: ["Méo miệng lệch mắt đột ngột sau khi gặp gió lạnh", "Mắt nhắm không kín, chảy nước dãi bên liệt", "Gáy cổ đau co cứng", "Mạch phù khẩn"],
    pdt: "Khu phong tán hàn, thông kinh hoạt lạc cơ mặt",
    bt: "Khiên chính tán gia Kinh giới, Phòng phong",
    tpbt: ["Bạch phụ tử 4g", "Toàn yết 2g", "Cương tàm 6g", "Kinh giới 6g", "Phòng phong 6g", "Sinh khương 3 lát"]
  },
  "NKH_178": {
    stt: 705,
    hc: "Liệt dây VII ngoại biên nhi do Phong nhiệt uất gáy tai",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Phong nhiệt lệch mặt nhi"],
    tc: ["Méo miệng lệch mắt kèm đau nhói rát sau tai", "Sốt nhẹ, họng sưng đỏ nhẹ", "Mắt đỏ chảy nước mắt nóng", "Mạch phù sác"],
    pdt: "Sơ phong thanh nhiệt, thông kinh hoạt lạc mặt",
    bt: "Đại tần giao thang gia Ngân hoa, Bạch chỉ",
    tpbt: ["Tần giao 6g", "Hoàng cầm 6g", "Kim ngân hoa 10g", "Bạch chỉ 6g", "Thạch cao 10g"]
  },
  "NKH_179": {
    stt: 706,
    hc: "Tật vẹo cổ bẩm sinh trẻ em do Huyết ứ co rút cơ cổ",
    phanloai: ["Nhi Khoa", "Bình", "Thực", "Huyết ứ vẹo cổ bẩm sinh"],
    tc: ["Sờ thấy khối xơ cứng đau nhẹ ở cơ ức đòn chũm cổ", "Đầu trẻ nghiêng lệch hẳn sang một bên", "Lưỡi tím sẫm nhẹ", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, nhuyễn kiên thư gân thông lạc cổ",
    bt: "Đào hồng tứ vật thang gia Bạch giới tử, Mộc qua",
    tpbt: ["Đào nhân 6g", "Hồng hoa 4g", "Đương quy 6g", "Xuyên khung 6g", "Bạch giới tử 4g", "Mộc qua 6g"]
  },
  "NKH_180": {
    stt: 707,
    hc: "Suy nhược toàn thân trẻ em sau bệnh nặng do Khí huyết kiệt suy",
    phanloai: ["Nhi Khoa", "Bình", "Hư suy", "Khí huyết kiệt suy sau bệnh"],
    tc: ["Sau sốt cao/viêm phổi nặng trẻ gầy còm trơ xương", "Sắc mặt bệch tái úa, không bò chạy nhảy được", "Mệt mỏi thở nông, ăn kém tiêu lỏng", "Mạch vi tế nhược"],
    pdt: "Đại bổ khí huyết, hồi sinh bổ hư cố bản",
    bt: "Thập toàn đại bổ thang gia Hoàng kỳ liều cao",
    tpbt: ["Nhân sâm 8g", "Bạch truật 8g", "Phục linh 8g", "Cam thảo 4g", "Thục địa 10g", "Đương quy 6g", "Hoàng kỳ 15g"]
  },
  "NKH_181": {
    stt: 708,
    hc: "Thể trạng Tỳ hư thấp thịnh ở trẻ em",
    phanloai: ["Nhi Khoa", "Bình", "Hư thực thác tạp", "Thể trạng Tỳ hư thấp"],
    tc: ["Trẻ người béo bệu nhão mềm, dễ bị tiêu chảy", "Đờm dãi nhiều, hay trớ trớ sữa", "Mệt mỏi ngại vận động, sắc mặt vàng nhợt", "Mạch nhu hoãn"],
    pdt: "Kiện tỳ ích khí, táo thấp hóa đàm",
    bt: "Sâm linh bạch truật tán gia giảm",
    tpbt: ["Đảng sâm 8g", "Bạch truật 8g", "Phục linh 8g", "Hoài sơn 8g", "Ý dĩ 8g", "Bán hạ chế 6g"]
  },
  "NKH_182": {
    stt: 709,
    hc: "Thể trạng Âm hư nội nhiệt ở trẻ em",
    phanloai: ["Nhi Khoa", "Nhiệt", "Hư", "Thể trạng Âm hư"],
    tc: ["Trẻ gầy khô, lòng bàn tay chân luôn nóng rát", "Triều nhiệt, vã mồ hôi trộm khi ngủ ướt áo", "Hay bị táo bón, chảy máu cam", "Mạch tế sác"],
    pdt: "Tư âm thanh nhiệt, sinh tân nhuận táo",
    bt: "Lục vị địa hoàng hoàn gia Mạch môn, Kỷ tử",
    tpbt: ["Thục địa 10g", "Sơn thù 6g", "Hoài sơn 8g", "Trạch tả 6g", "Đan bì 6g", "Phục linh 8g", "Mạch môn 8g", "Kỷ tử 8g"]
  },
  "NKH_183": {
    stt: 710,
    hc: "Thể trạng Khí hư dễ cảm mạo ở trẻ em",
    phanloai: ["Nhi Khoa", "Bình", "Hư", "Thể trạng Khí hư"],
    tc: ["Rất hay bị cảm mạo ho hắt hơi mỗi khi đổi thời tiết", "Tự hãn (vã mồ hôi ngày) liên tục, sợ gió", "Sắc mặt bệch nhợt, mệt mỏi", "Mạch hư nhược"],
    pdt: "Ích khí cố biểu, củng cố vệ ngoại",
    bt: "Ngọc bình phong tán gia Hoàng kỳ liều cao",
    tpbt: ["Hoàng kỳ 15g", "Bạch truật 8g", "Phòng phong 6g", "Cam thảo 4g"]
  },
  "NKH_184": {
    stt: 711,
    hc: "Thể trạng Dương hư sợ lạnh ở trẻ em",
    phanloai: ["Nhi Khoa", "Hàn", "Hư", "Thể trạng Dương hư"],
    tc: ["Chân tay lạnh ngắt quanh năm, sợ lạnh sợ gió", "Thường xuyên tiêu chảy phân sống khi ăn đồ lạnh", "Tiểu đêm đái dầm nhiều lần", "Mạch trầm tế trì"],
    pdt: "Ôn bổ thận dương, kiện tỳ trợ dương",
    bt: "Thận khí hoàn gia Phụ tử, Nhục quế",
    tpbt: ["Thục địa 10g", "Sơn thù 6g", "Hoài sơn 8g", "Nhục quế 3g", "Phụ tử chế 4g", "Phục linh 8g"]
  },
  "NKH_185": {
    stt: 712,
    hc: "Thể trạng Can hỏa xí thịnh ở trẻ em",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Thể trạng Can hỏa"],
    tc: ["Tính tình cực kỳ bứt rứt, dễ giận dữ cáu gắt đập phá", "Mặt đỏ mắt đỏ, hay cuồng nhảy ngót", "Tiểu tiện đỏ ngắn, táo bón", "Mạch huyền sác"],
    pdt: "Thanh can tả hỏa, bình can trấn tĩnh",
    bt: "Long đởm tả can thang gia Mẫu lệ",
    tpbt: ["Long đởm thảo 6g", "Chi tử 6g", "Hoàng cầm 6g", "Trạch tả 6g", "Sài hồ 4g", "Mẫu lệ 10g"]
  },
  "NKH_186": {
    stt: 713,
    hc: "Thể trạng Đàm nhiệt uẩn kết ở trẻ em",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Thể trạng Đàm nhiệt"],
    tc: ["Trẻ béo mập cứng, họng luôn vướng đờm đặc vàng", "Hay bị nổi mụn nhọt, rôm sẩy hôi thối", "Lưỡi đỏ rêu vàng nhớt", "Mạch hoạt sác"],
    pdt: "Thanh nhiệt hóa đàm, thông phủ giáng hỏa",
    bt: "Hoàng liên ôn đởm thang gia giảm",
    tpbt: ["Hoàng liên 4g", "Bán hạ chế 6g", "Trần bì 4g", "Phục linh 8g", "Trúc nhự 6g", "Chỉ thực 4g"]
  },
  "NKH_187": {
    stt: 714,
    hc: "Rối loạn chuyển hóa canxi (Rạch xương nhi) do Thận tinh hư suy",
    phanloai: ["Nhi Khoa", "Bình", "Hư suy", "Thận tinh bất túc rạch xương"],
    tc: ["Xương lồng ngực biến dạng (Ngực gà), chân vòng kiềng O/X", "Đầu to thóp lâu khép, mọc răng muộn", "Tóc bạc thưa, chân tay yếu", "Mạch trầm tế vô lực"],
    pdt: "Bổ thận điền tinh, trác cốt điền tủy",
    bt: "Tả quy hoàn gia Lộc giác giao, Ngưu tất, Đỗ trọng",
    tpbt: ["Thục địa 10g", "Sơn thù 6g", "Hoài sơn 8g", "Kỷ tử 8g", "Thỏ ty tử 8g", "Lộc giác giao 6g", "Ngưu tất 6g", "Đỗ trọng 8g"]
  },
  "NKH_188": {
    stt: 715,
    hc: "Rạch xương nhi do Tỳ hư không dưỡng cơ xương",
    phanloai: ["Nhi Khoa", "Bình", "Hư", "Tỳ hư rạch xương"],
    tc: ["Cơ bắp nhão mềm không gượng đi đứng được", "Bụng to bện gân xanh, ăn kém tiêu chảy", "Sắc mặt vàng nhợt mệt mỏi", "Mạch hoãn nhược"],
    pdt: "Kiện tỳ ích khí, thăng dương bổ xương",
    bt: "Sâm linh bạch truật tán gia Hoàng kỳ, Ngưu tất",
    tpbt: ["Đảng sâm 8g", "Bạch truật 8g", "Phục linh 8g", "Hoài sơn 8g", "Hoàng kỳ 10g", "Ngưu tất 6g"]
  },
  "NKH_189": {
    stt: 716,
    hc: "Suy dinh dưỡng thể Teo đét (Marasmus) do Khí huyết âm dương kiệt suy",
    phanloai: ["Nhi Khoa", "Bình", "Hư suy", "Kiệt suy teo đét"],
    tc: ["Trẻ chỉ còn da bọc xương, mặt già như người già", "Mất hết mỡ dưới da, da nhăn nheo tróc vảy", "Bú ăn không tiêu, tiêu chảy liên tục", "Mạch vi tế muốn tuyệt"],
    pdt: "Đại bổ khí huyết, bồi nguyên cố bản cứu kiệt",
    bt: "Thập toàn đại bổ thang gia A giao, Tử hà xe",
    tpbt: ["Nhân sâm 8g", "Bạch truật 8g", "Phục linh 8g", "Cam thảo 4g", "Thục địa 10g", "Đương quy 6g", "A giao 6g", "Tử hà xe 4g"]
  },
  "NKH_190": {
    stt: 717,
    hc: "Suy dinh dưỡng thể Phù (Kwashiorkor) do Tỳ hư thủy trệ nặng",
    phanloai: ["Nhi Khoa", "Bình", "Hư thực thác tạp", "Tỳ hư thũng suy dinh dưỡng"],
    tc: ["Toàn thân phù thũng mọng ấn lõm sâu, gan to", "Tóc đỏ thưa dễ gãy, da lở loét thâm xạm", "Ăn vào trớ ra tiêu chảy xối xả", "Mạch nhu hoãn vô lực"],
    pdt: "Đại bổ tỳ vị, lợi thủy tiêu thũng sinh cơ",
    bt: "Bổ trung ích khí thang hợp Ngũ linh tán gia A giao",
    tpbt: ["Hoàng kỳ 10g", "Đảng sâm 8g", "Bạch truật 8g", "Phục linh 8g", "Trạch tả 6g", "A giao 6g"]
  },
  "NKH_191": {
    stt: 718,
    hc: "Cuồng sảng ở trẻ em do Đàm hỏa nhiễu tâm bế khiếu",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Đàm hỏa cuồng sảng nhi"],
    tc: ["Trẻ nói năng huyên náo đập phá đồ đạc bất ngờ", "Cười khóc không lý do, không ngủ ban đêm", "Mặt đỏ mắt đỏ, nôn ra đờm vàng", "Mạch hoạt sác dũng mãnh"],
    pdt: "Thanh tâm tả hỏa, địch đàm khai khiếu định cuồng",
    bt: "Sinh thiết lạc đản hợp Địch đàm thang",
    tpbt: ["Sinh thiết lạc 15g", "Bán hạ chế 6g", "Trần bì 4g", "Phục linh 8g", "Chỉ thực 4g", "Đởm nam tinh 4g", "Thạch xương bồ 6g"]
  },
  "NKH_192": {
    stt: 719,
    hc: "Cảm ho mùa lạnh ở trẻ em thể Hàn ngưng phế vị",
    phanloai: ["Nhi Khoa", "Hàn", "Thực", "Hàn ngưng phế vị"],
    tc: ["Sốt nhẹ sợ lạnh, ho hen nôn ra nước trong nhạt miệng", "Bụng đau lạnh, hắt hơi chảy nước mũi trong", "Rêu lưỡi trắng dính nhuận", "Mạch trầm khẩn"],
    pdt: "Ôn phế tán hàn, giáng nghịch chỉ khái chỉ nôn",
    bt: "Hạnh tô tán gia Can khương, Bán hạ chế",
    tpbt: ["Tô diệp 6g", "Hạnh nhân 6g", "Tiền hồ 6g", "Can khương 4g", "Bán hạ chế 6g", "Trần bì 4g"]
  },
  "NKH_193": {
    stt: 720,
    hc: "Cảm ho mùa nóng ở trẻ em thể Phong nhiệt thử thấp",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Phong nhiệt thử thấp"],
    tc: ["Sốt cao về mùa hè, ho hen thở khò khè", "Đờm vàng dính, thân thể mỏi nặng, nôn nao", "Tiểu đỏ ngắn, rêu vàng nhớt", "Mạch nhu sác"],
    pdt: "Thanh thử giải biểu, tuyên phế hóa đàm",
    bt: "Tân hương nhu ẩm gia Hạnh nhân, Hoàng cầm",
    tpbt: ["Hương nhu 6g", "Biển đậu 8g", "Hậu phác 6g", "Hạnh nhân 6g", "Hoàng cầm 6g", "Cam thảo 4g"]
  },
  "NKH_194": {
    stt: 721,
    hc: "Ứ nhiệt sau tiêm chủng ở trẻ em do Hỏa độc uẩn kết",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Hỏa độc tiêm chủng"],
    tc: ["Sốt cao 38.5-39.5 độ sau tiêm vắc xin 1-2 ngày", "Vùng tiêm sưng đỏ nóng đau tấy", "Trẻ quấy khóc bứt rứt, bỏ bú", "Mạch hoạt sác"],
    pdt: "Thanh nhiệt giải độc, tiêu thũng chỉ thống",
    bt: "Hoàng liên giải độc thang gia Kim ngân hoa",
    tpbt: ["Hoàng liên 4g", "Hoàng cầm 6g", "Hoàng bá 6g", "Chi tử 6g", "Kim ngân hoa 10g", "Cam thảo 4g"]
  },
  "NKH_195": {
    stt: 722,
    hc: "Biến chứng dị ứng thuốc/vắc xin thể Huyết nhiệt phát ban",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Huyết nhiệt dị ứng ban"],
    tc: ["Da nổi mẩn đỏ ngứa rát toàn thân sau dùng thuốc", "Sốt bứt rứt, khát nước", "Tiểu đỏ, lưỡi đỏ thẫm", "Mạch sác hữu lực"],
    pdt: "Thanh nhiệt lương huyết, giải độc chỉ ngứa",
    bt: "Tê giác địa hoàng thang gia Tiêu phong tán",
    tpbt: ["Thủy ngưu giác 15g", "Sinh địa 10g", "Xích thược 8g", "Đan bì 6g", "Kinh giới 6g", "Phòng phong 6g"]
  },
  "NKH_196": {
    stt: 723,
    hc: "Rối loạn nhận thức sau sốt cao thể Đàm trọc lưu trệ não",
    phanloai: ["Nhi Khoa", "Bình", "Hư thực thác tạp", "Đàm trọc lưu trệ não"],
    tc: ["Sau đợt sốt cao co giật trẻ phản ứng chậm chạp ngơ ngác", "Nói ngọng ú ớ, chảy dãi liên tục", "Rêu dầy nhớt", "Mạch nhu hoạt"],
    pdt: "Táo thấp hóa đàm, thông kinh khai khiếu bổ não",
    bt: "Địch đàm thang gia Thạch xương bồ, Viễn chí",
    tpbt: ["Bán hạ chế 6g", "Trần bì 4g", "Phục linh 8g", "Chỉ thực 4g", "Đởm nam tinh 4g", "Thạch xương bồ 6g", "Viễn chí 4g"]
  },
  "NKH_197": {
    stt: 724,
    hc: "Rối loạn hành vi trẻ em do Can uất hóa hỏa quấy rối",
    phanloai: ["Nhi Khoa", "Nhiệt", "Thực", "Can hỏa rối loạn hành vi"],
    tc: ["Hay cắn xé quần áo đồ chơi, vô cớ đánh bạn", "Nói năng cộc lốc cáu giận, gào khóc", "Mặt đỏ, táo bón", "Mạch huyền sác dũng mãnh"],
    pdt: "Thanh can tả hỏa, trấn tĩnh trừ phiền",
    bt: "Long đởm tả can thang gia Chi tử, Hoàng cầm",
    tpbt: ["Long đởm thảo 6g", "Chi tử 6g", "Hoàng cầm 6g", "Trạch tả 6g", "Sài hồ 4g", "Sinh địa 10g"]
  },
  "NKH_198": {
    stt: 725,
    hc: "Thiếu máu dinh dưỡng trẻ em do Tỳ Vị hư suy không sinh huyết",
    phanloai: ["Nhi Khoa", "Bình", "Hư", "Tỳ hư thiếu máu"],
    tc: ["Sắc mặt bệch úa vàng nhợt, móng tay chân nhợt nhạt", "Mệt mỏi không chạy nhảy, ăn kém tiêu chảy", "Hoa mắt chóng mặt", "Mạch tế nhược vô lực"],
    pdt: "Kiện tỳ ích khí, sinh huyết dưỡng vinh",
    bt: "Quy tỳ thang gia Hoàng kỳ liều cao",
    tpbt: ["Đảng sâm 8g", "Bạch truật 8g", "Phục linh 8g", "Hoàng kỳ 15g", "Đương quy 6g", "Long nhãn 8g", "Cam thảo 4g"]
  },
  "NKH_199": {
    stt: 726,
    hc: "Chậm mọc răng và tóc ở trẻ em do Thận tinh bất túc",
    phanloai: ["Nhi Khoa", "Bình", "Hư suy", "Thận tinh bất túc mọc răng chậm"],
    tc: ["Trẻ > 1 tuổi chưa mọc răng hoặc chỉ mọc 1-2 răng", "Tóc thưa thớt xơ xơ vàng, thóp lâu khép", "Chân yếu mềm", "Mạch trầm tế vô lực"],
    pdt: "Bổ thận điền tinh, ích tủy bổ xương",
    bt: "Lục vị địa hoàng hoàn gia Lộc nhung, Quy bản",
    tpbt: ["Thục địa 10g", "Sơn thù 6g", "Hoài sơn 8g", "Trạch tả 6g", "Đan bì 6g", "Phục linh 8g", "Lộc nhung 2g", "Quy bản 6g"]
  },
  "NKH_200": {
    stt: 727,
    hc: "Trẻ em thể trạng hư yếu toàn thân do Tỳ Thận âm dương lưỡng hư",
    phanloai: ["Nhi Khoa", "Hàn nhiệt thác tạp", "Hư suy", "Tỳ Thận âm dương lưỡng hư nhi"],
    tc: ["Hay ốm vặt dai dẳng, gầy gộc còm cõi", "Vừa sợ lạnh tay chân lạnh lại vừa triều nhiệt trộm mồ hôi", "Ăn kém tiêu chảy phân sống, đái dầm đêm", "Mạch vi tế nhược"],
    pdt: "Bổ tỳ trợ thận, âm dương song bổ cố bản bồi nguyên",
    bt: "Bát vị hoàn hợp Sâm linh bạch truật tán gia giảm",
    tpbt: ["Thục địa 10g", "Sơn thù 6g", "Hoài sơn 8g", "Nhục quế 3g", "Phụ tử chế 4g", "Đảng sâm 8g", "Bạch truật 8g", "Phục linh 8g"]
  },
  "can_huyet_hu": {
    stt: 728,
    hc: "Can huyết hư",
    phanloai: ["Tạng Can", "Bình", "Hư", "Huyết hư"],
    tc: ["Sắc mặt úa vàng", "Chóng mặt hoa mắt", "Móng tay chân khô nhợt", "Kinh nguyệt ít sắc nhạt", "Mạch tế nhược"],
    pdt: "Bổ huyết dưỡng can",
    bt: "Tứ vật thang",
    tpbt: ["Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g"]
  },
  "can_hoa_thuong_viem": {
    stt: 729,
    hc: "Can hỏa thượng viêm",
    phanloai: ["Tạng Can", "Nhiệt", "Thực", "Can hỏa"],
    tc: ["Đau đầu chóng mặt", "Mắt đỏ tai ù", "Miệng đắng họng khô", "Hay giận dữ", "Tiểu đỏ đại tiện táo", "Mạch huyền sác"],
    pdt: "Thanh can tả hỏa",
    bt: "Long đởm tả can thang",
    tpbt: ["Long đởm thảo 12g", "Hoàng cầm 12g", "Chi tử 12g", "Trạch tả 12g", "Đương quy 12g", "Sinh địa 16g", "Sài hồ 8g"]
  },
  "can_am_hu": {
    stt: 730,
    hc: "Can âm hư",
    phanloai: ["Tạng Can", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Chóng mặt hoa mắt", "Mắt khô nhìn mờ", "Má đỏ triều nhiệt", "Lòng bàn tay chân nóng", "Mạch tế sác"],
    pdt: "Tư dưỡng can âm, minh mục",
    bt: "Kỷ cúc địa hoàng hoàn",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Phục linh 12g", "Kỷ tử 12g", "Cúc hoa 10g"]
  },
  "tam_khi_hu": {
    stt: 731,
    hc: "Tâm khí hư",
    phanloai: ["Tạng Tâm", "Bình", "Hư", "Khí hư"],
    tc: ["Hồi hộp trống ngực", "Thở ngắn mệt mỏi", "Vận động triệu chứng tăng", "Sắc mặt nhợt nhạt", "Mạch tế nhược"],
    pdt: "Ích khí bổ tâm",
    bt: "Bảo nguyên thang",
    tpbt: ["Đảng sâm 12g", "Hoàng kỳ 16g", "Phục linh 12g", "Cam thảo 6g", "Ngũ vị tử 6g"]
  },
  "tam_duong_hu": {
    stt: 732,
    hc: "Tâm dương hư",
    phanloai: ["Tạng Tâm", "Hàn", "Hư", "Dương hư"],
    tc: ["Hồi hộp trống ngực", "Đau tức vùng ngực", "Sợ lạnh tay chân lạnh", "Lưỡi bệu nhợt rêu trắng", "Mạch trầm tế vi"],
    pdt: "Ôn bổ tâm dương, thông mạch",
    bt: "Quế chi cam thảo thang",
    tpbt: ["Quế chi 12g", "Chích cam thảo 6g", "Đảng sâm 12g", "Phụ tử chế 8g", "Hồng hoa 8g"]
  },
  "tam_am_hu": {
    stt: 733,
    hc: "Tâm âm hư",
    phanloai: ["Tạng Tâm", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Hồi hộp hay hoảng hốt", "Mất ngủ nhiều mộng", "Lòng bàn tay chân nóng đạo hãn", "Gò má đỏ miệng khô", "Mạch tế sác"],
    pdt: "Tư âm dưỡng tâm, an thần",
    bt: "Thiên vương bổ tâm đan",
    tpbt: ["Sinh địa 16g", "Đảng sâm 12g", "Đan sâm 12g", "Bách hợp 12g", "Toan táo nhân 12g", "Viễn chí 6g", "Phục linh 12g"]
  },
  "tam_huyet_hu": {
    stt: 734,
    hc: "Tâm huyết hư",
    phanloai: ["Tạng Tâm", "Bình", "Hư", "Huyết hư"],
    tc: ["Hồi hộp chóng mặt", "Mất ngủ hay quên", "Sắc mặt nhợt nhạt môi nhạt", "Mạch tế nhược"],
    pdt: "Dưỡng huyết an thần",
    bt: "Tứ vật thang hợp A giao kê tử hoàng thang",
    tpbt: ["Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g", "A giao 10g", "Hoàng liên 6g", "Bạch phục thần 12g"]
  },
  "ty_khi_hu": {
    stt: 735,
    hc: "Tỳ khí hư",
    phanloai: ["Tạng Tỳ", "Bình", "Hư", "Khí hư"],
    tc: ["Ăn kém đầy bụng sau ăn", "Mệt mỏi chân tay rã rời", "Sắc mặt vàng úa gầy sút", "Đại tiện lỏng loãng", "Mạch tế nhược"],
    pdt: "Kiện tỳ ích khí",
    bt: "Tứ quân tử thang",
    tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Cam thảo 6g"]
  },
  "ty_duong_hu": {
    stt: 736,
    hc: "Tạng Tỳ dương hư",
    phanloai: ["Tạng Tỳ", "Hàn", "Hư", "Dương hư"],
    tc: ["Bụng lạnh đau thích chườm ấm", "Sợ lạnh tay chân lạnh", "Đại tiện lỏng loãng ăn sống đồ lạnh trướng bụng", "Lưỡi bệu nhợt", "Mạch trầm trì tế"],
    pdt: "Ôn trung kiện tỳ, tán hàn chỉ thống",
    bt: "Lý trung hoàn",
    tpbt: ["Đảng sâm 12g", "Can khương 8g", "Bạch truật 12g", "Cam thảo 6g"]
  },
  "ty_khong_thong_nhiep_huyet": {
    stt: 737,
    hc: "Tỳ không thống huyết",
    phanloai: ["Tạng Tỳ", "Bình", "Hư", "Huyết hư"],
    tc: ["Xuất huyết mạn tính rong kinh đại tiện ra máu", "Sắc mặt nhợt nhạt", "Mệt mỏi ăn kém", "Chất lưỡi nhợt", "Mạch tế nhược"],
    pdt: "Kiện tỳ ích khí, nhiếp huyết",
    bt: "Quy tỳ thang",
    tpbt: ["Đảng sâm 12g", "Hoàng kỳ 16g", "Bạch truật 12g", "Phục thần 12g", "Đương quy 12g", "Long nhãn 12g", "Thán khương 6g"]
  },
  "han_thap_khon_ty": {
    stt: 738,
    hc: "Hàn thấp khốn Tỳ",
    phanloai: ["Tạng Tỳ", "Hàn", "Thực", "Thấp trệ"],
    tc: ["Bụng trướng ăn kém buồn nôn", "Đầu nặng như đội khăn", "Người nặng nề chân tay mỏi", "Rêu lưỡi trắng nhớt", "Mạch nhu hoãn"],
    pdt: "Vận tỳ hóa thấp, ôn trung hóa trọc",
    bt: "Bất hoán kim chính khí tán",
    tpbt: ["Thương truật 10g", "Hậu phác 10g", "Trần bì 6g", "Bán hạ chế 10g", "Phục linh 12g", "Sinh khương 6g"]
  },
  "phe_khi_hu": {
    stt: 739,
    hc: "Phế khí hư",
    phanloai: ["Tạng Phế", "Bình", "Hư", "Khí hư"],
    tc: ["Ho khạc đờm loãng trong tiếng ho nhỏ", "Thở ngắn tiếng nói nhỏ", "Sợ gió dễ cảm mạo", "Sắc mặt trắng nhợt", "Mạch hư nhược"],
    pdt: "Bổ ích phế khí",
    bt: "Bổ phế thang",
    tpbt: ["Đảng sâm 12g", "Hoàng kỳ 16g", "Bạch truật 12g", "Tang bạch bì 12g", "Ngũ vị tử 6g", "Thục địa 16g"]
  },
  "phe_am_hu": {
    stt: 740,
    hc: "Phế âm hư",
    phanloai: ["Tạng Phế", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Ho khan ít đờm ho lâu ngày", "Đờm dính máu hoặc khản tiếng", "Gò má đỏ chiều nhiệt đạo hãn", "Lòng bàn tay chân nóng", "Mạch tế sác"],
    pdt: "Tư âm nhuận phế, chỉ khái",
    bt: "Bách hợp cố kim thang",
    tpbt: ["Bách hợp 12g", "Sinh địa 16g", "Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Bối mẫu 10g", "Cát cánh 8g", "Mạch môn 12g"]
  },
  "phong_han_pham_phe": {
    stt: 741,
    hc: "Phong hàn phạm Phế",
    phanloai: ["Tạng Phế", "Hàn", "Thực", "Ngoại cảm"],
    tc: ["Ho ngứa cổ khạc đờm trắng loãng", "Sợ lạnh sốt không có mồ hôi", "Đau đầu ngạt mũi chảy mũi trong", "Rêu lưỡi trắng mỏng", "Mạch phù khẩn"],
    pdt: "Sơ phong tán hàn, tuyên phế chỉ khái",
    bt: "Tam ảo thang",
    tpbt: ["Ma hoàng 8g", "Hạnh nhân 10g", "Chích cam thảo 6g", "Sinh khương 6g"]
  },
  "phong_nhiet_pham_phe": {
    stt: 742,
    hc: "Phong nhiệt phạm Phế",
    phanloai: ["Tạng Phế", "Nhiệt", "Thực", "Ngoại cảm"],
    tc: ["Sốt sợ gió nhẹ đau đầu", "Ho khạc đờm vàng đặc", "Đau rát họng khát nước", "Rêu lưỡi vàng mỏng", "Mạch phù sác"],
    pdt: "Sơ phong thanh nhiệt, tuyên phế hóa đàm",
    bt: "Tang cúc ẩm",
    tpbt: ["Tang diệp 10g", "Cúc hoa 10g", "Hạnh nhân 10g", "Cát cánh 8g", "Liên kiều 10g", "Bạc hà 6g", "Cam thảo 6g"]
  },
  "vi_khi_hu": {
    stt: 743,
    hc: "Vị khí hư",
    phanloai: ["Phủ Vị", "Bình", "Hư", "Khí hư"],
    tc: ["Thượng vị đau âm ỉ", "Thích xoa thích ấm", "Ăn kém đầy bụng sau ăn", "Mệt mỏi đoản khí", "Mạch hư nhược"],
    pdt: "Ích khí kiện vị",
    bt: "Bổ trung ích khí thang",
    tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Hoàng kỳ 16g", "Trần bì 6g", "Cam thảo 6g", "Đương quy 12g"]
  },
  "vi_am_hu": {
    stt: 744,
    hc: "Vị âm hư",
    phanloai: ["Phủ Vị", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Thượng vị nóng rát", "Âm ỉ đau", "Miệng khô họng khát", "Thích uống nước mát", "Lưỡi đỏ ít rêu", "Mạch tế sác"],
    pdt: "Tư dưỡng vị âm, sinh tân",
    bt: "Ích vị thang",
    tpbt: ["Ngọc trúc 12g", "Sinh địa 16g", "Sa sâm 12g", "Mạch môn 12g"]
  },
  "vi_lac_huyet_u": {
    stt: 745,
    hc: "Vị lạc huyết ứ",
    phanloai: ["Phủ Vị", "Bình", "Thực", "Huyết ứ"],
    tc: ["Thượng vị đau nhói cố định", "Cự án", "Đau về đêm hoặc sau ăn", "Chất lưỡi tím tối", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, lý khí chỉ thống",
    bt: "Thất tiễu tán hợp Diên hồ sách tán",
    tpbt: ["Ngũ linh chi 10g", "Bồ hoàng 10g", "Diên hồ tẩu 10g", "Đương quy 12g", "Xích thược 12g", "Xuyên khung 10g"]
  },
  "dai_trang_thap_nhiet": {
    stt: 746,
    hc: "Đại tràng thấp nhiệt",
    phanloai: ["Phủ Đại tràng", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Bụng quặn đau", "Đại tiện nhầy máu", "Mót rặn", "Hậu môn nóng rát", "Rêu lưỡi vàng nhớt", "Mạch nhu sác"],
    pdt: "Thanh nhiệt lợi thấp, điều khí chỉ lỵ",
    bt: "Thược dược thang",
    tpbt: ["Bạch thược 16g", "Đương quy 12g", "Hậu phác 10g", "Binh lang 10g", "Mộc hương 8g", "Cam thảo 6g", "Hoàng liên 8g", "Hoàng cầm 12g"]
  },
  "dai_trang_han_thap": {
    stt: 747,
    hc: "Đại tràng hàn thấp",
    phanloai: ["Phủ Đại tràng", "Hàn", "Thực", "Hàn thấp"],
    tc: ["Bụng đau âm ỉ", "Đại tiện phân lỏng nhầy trắng", "Sợ lạnh tay chân lạnh", "Mạch trầm hoãn"],
    pdt: "Ôn trung hóa thấp, chỉ tả",
    bt: "Bất hoán kim chính khí tán",
    tpbt: ["Hoắc hương 10g", "Bạch truật 12g", "Hậu phác 10g", "Trần bì 6g", "Phục linh 12g", "Can khương 6g"]
  },
  "tieu_truong_thap_nhiet": {
    stt: 748,
    hc: "Tiểu trường thấp nhiệt",
    phanloai: ["Phủ Tiểu trường", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Tiểu tiện buốt rát", "Tiểu đỏ", "Bụng dưới trướng căng", "Rêu lưỡi vàng", "Mạch sác"],
    pdt: "Thanh nhiệt lợi thấp, thông lâm",
    bt: "Đạo xích tán",
    tpbt: ["Sinh địa 16g", "Mộc thông 8g", "Cam thảo 6g", "Trúc diệp 10g", "Xa tiền tử 12g"]
  },
  "tieu_truong_huyet_u": {
    stt: 749,
    hc: "Tiểu trường ứ trệ",
    phanloai: ["Phủ Tiểu trường", "Bình", "Thực", "Huyết ứ"],
    tc: ["Bụng dưới đau nhói cố định", "Cự án", "Chất lưỡi tím", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, lý khí",
    bt: "Thiếu phúc trục ứ thang",
    tpbt: ["Đương quy 12g", "Xuyên khung 10g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Quan quế 6g"]
  },
  "bang_quang_thap_nhiet": {
    stt: 750,
    hc: "Bàng quang thấp nhiệt",
    phanloai: ["Phủ Bàng quang", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Tiểu tiện khó", "Tiểu buốt tiểu rắt", "Tiểu đỏ đục", "Đau tức hạ vị", "Rêu lưỡi vàng nhớt", "Mạch sác"],
    pdt: "Thanh nhiệt lợi thấp, thông lâm",
    bt: "Bát chính tán",
    tpbt: ["Xa tiền tử 12g", "Cù mạch 10g", "Biển súc 10g", "Hoạt thạch 15g", "Cam thảo 6g", "Đại hoàng 6g", "Chi tử 10g", "Mộc thông 8g"]
  },
  "bang_quang_hu_han": {
    stt: 751,
    hc: "Bàng quang hư hàn",
    phanloai: ["Phủ Bàng quang", "Hàn", "Hư", "Dương hư"],
    tc: ["Tiểu tiện nhiều lần", "Tiểu dầm", "Tiểu rỉ rả không chủ động", "Sợ lạnh tay chân lạnh", "Mạch trầm trì"],
    pdt: "Ôn thận cố sáp, súc niệu",
    bt: "Tang phiêu tiêu tán hợp Súc tuyền hoàn",
    tpbt: ["Tang phiêu tiêu 12g", "Ích trí nhân 10g", "Ô dược 10g", "Phục thần 12g", "Long cốt 15g", "Quy bản 12g"]
  },
  "dom_uat_dam_nhieu": {
    stt: 752,
    hc: "Đởm uất đàm nhiễu",
    phanloai: ["Phủ Đởm", "Nhiệt", "Thực", "Đàm nhiệt"],
    tc: ["Hồi hộp dễ sợ hãi", "Mất ngủ nhiều mộng", "Chóng mặt miệng đắng", "Nôn mửa nấc cụt", "Rêu lưỡi vàng nhớt", "Mạch hoạt sác"],
    pdt: "Thanh đởm hòa vị, hóa đàm định chí",
    bt: "Ôn đởm thang",
    tpbt: ["Bán hạ chế 10g", "Trần bì 6g", "Phục linh 12g", "Chỉ thực 8g", "Trúc nhự 8g", "Sinh khương 6g", "Cam thảo 6g"]
  },
  "tam_tieu_thap_nhiet": {
    stt: 753,
    hc: "Tam tiêu thấp nhiệt",
    phanloai: ["Phủ Tam tiêu", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Bụng trướng đầy", "Tiểu tiện khó khăn buốt rát", "Nước tiểu đỏ đục", "Sốt nhẹ người nặng nề", "Rêu lưỡi vàng nhớt", "Mạch nhu sác"],
    pdt: "Thanh nhiệt lợi thấp, hóa trọc",
    bt: "Tam nhân thang",
    tpbt: ["Hạnh nhân 10g", "Ý dĩ 15g", "Bạch đậu khấu 8g", "Hậu phác 10g", "Thông thảo 6g", "Trúc diệp 10g", "Hoạt thạch 15g", "Bán hạ chế 10g"]
  },
  "ho_phong_han_thuong_phe": {
    stt: 754,
    hc: "Ho phong hàn thương phế",
    phanloai: ["Khái thấu", "Hàn", "Thực", "Ngoại cảm"],
    tc: ["Ho ngứa cổ khạc đờm trắng loãng", "Sợ lạnh sốt không có mồ hôi", "Ngạt mũi chảy nước mũi trong", "Mạch phù khẩn"],
    pdt: "Sơ phong tán hàn, tuyên phế chỉ khái",
    bt: "Tam ảo thang hợp Chỉ thấu tán",
    tpbt: ["Ma hoàng 8g", "Hạnh nhân 10g", "Cát cánh 8g", "Bạch tiền 10g", "Bách bộ 10g", "Trần bì 6g", "Chích cam thảo 6g"]
  },
  "ho_phong_nhiet_pham_phe": {
    stt: 755,
    hc: "Ho phong nhiệt phạm phế",
    phanloai: ["Khái thấu", "Nhiệt", "Thực", "Ngoại cảm"],
    tc: ["Ho khạc đờm vàng đặc khó khạc", "Sốt cao sợ gió đau đầu", "Họng sưng đau khát nước", "Mạch phù sác"],
    pdt: "Sơ phong thanh nhiệt, tuyên phế hóa đàm",
    bt: "Tang cúc ẩm",
    tpbt: ["Tang diệp 10g", "Cúc hoa 10g", "Hạnh nhân 10g", "Cát cánh 8g", "Liên kiều 10g", "Bạc hà 6g", "Cam thảo 6g"]
  },
  "tiet_ta_thap_nhiet": {
    stt: 756,
    hc: "Tiết tả thấp nhiệt",
    phanloai: ["Tiết tả", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Tiêu chảy phân tóe nước vàng", "Hậu môn nóng rát", "Khát nước tiểu đỏ", "Mạch nhu sác"],
    pdt: "Thanh nhiệt lợi thấp, hóa trọc chỉ tả",
    bt: "Cát căn hoàng cầm hoàng liên thang",
    tpbt: ["Cát căn 16g", "Hoàng cầm 12g", "Hoàng liên 8g", "Cam thảo 6g"]
  },
  "tiet_ta_han_thap": {
    stt: 757,
    hc: "Tiết tả hàn thấp",
    phanloai: ["Tiết tả", "Hàn", "Thực", "Hàn thấp"],
    tc: ["Tiêu chảy phân loãng trắng", "Bụng đau sôi bụng", "Sợ lạnh tay chân lạnh", "Mạch trầm hoãn"],
    pdt: "Ôn trung hóa thấp, chỉ tả",
    bt: "Hoắc hương chính khí tán",
    tpbt: ["Hoắc hương 12g", "Tô diệp 10g", "Bạch chỉ 10g", "Bán hạ chế 10g", "Hậu phác 10g", "Trần bì 6g", "Phục linh 12g"]
  },
  "ty_hu_dam_thap_beo_phi": {
    stt: 758,
    hc: "Tỳ hư đàm thấp béo phì",
    phanloai: ["Béo phì", "Bình", "Hư thực thác tạp", "Đàm thấp"],
    tc: ["Béo trệ mỡ bụng nhiều", "Mệt mỏi chân tay nặng nề", "Ăn kém đầy bụng", "Mạch nhu nhược"],
    pdt: "Kiện tỳ ích khí, hóa đàm trừ thấp",
    bt: "Lục quân tử thang gia giảm",
    tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Cam thảo 6g", "Bán hạ chế 10g", "Trần bì 6g"]
  },
  "vi_nhiet_thua_can": {
    stt: 759,
    hc: "Vị nhiệt thặng thực béo phì",
    phanloai: ["Béo phì", "Nhiệt", "Thực", "Vị nhiệt"],
    tc: ["Mau đói ăn nhiều béo phì thể thực", "Miệng hôi khát nước", "Táo bón rêu vàng", "Mạch hoạt sác"],
    pdt: "Thanh vị tả hỏa, tiêu thực hóa trọc",
    bt: "Thanh vị tán hợp Bảo hòa hoàn",
    tpbt: ["Hoàng liên 8g", "Thăng ma 6g", "Sinh địa 16g", "Mẫu đơn bì 10g", "Đại hoàng 8g"]
  },
  "liet_duong_than_duong_hu": {
    stt: 760,
    hc: "Liệt dương do Thận dương hư",
    phanloai: ["Nam khoa", "Hàn", "Hư", "Thận dương hư"],
    tc: ["Dương vật không cương cứng", "Sợ lạnh tay chân lạnh", "Thắt lưng mỏi yếu", "Mạch trầm trì tế"],
    pdt: "Ôn bổ thận dương, tráng dương",
    bt: "Hữu quy hoàn",
    tpbt: ["Phụ tử chế 8g", "Nhục quế 6g", "Thục địa 16g", "Sơn thù nhục 10g", "Kỷ tử 12g", "Đỗ trọng 12g", "Lộc giác giao 12g"]
  },
  "xuat_tinh_som_tam_than_bat_giao": {
    stt: 761,
    hc: "Xuất tinh sớm do Tâm thận bất giao",
    phanloai: ["Nam khoa", "Nhiệt", "Hư thực thác tạp", "Tâm thận bất giao"],
    tc: ["Xuất tinh sớm tinh thần bất an", "Hồi hộp mất ngủ", "Lòng bàn tay chân nóng", "Mạch tế sác"],
    pdt: "Tư âm giáng hỏa, giao hội tâm thận",
    bt: "Giao thái hoàn hợp Thanh tâm liên tử ẩm",
    tpbt: ["Hoàng liên 6g", "Nhục quế 3g", "Sinh địa 16g", "Mạch môn 12g", "Bách hợp 12g"]
  },
  "kinh_nguyet_khong_deu_can_khi_uat": {
    stt: 762,
    hc: "Kinh nguyệt không đều do Can khí uất",
    phanloai: ["Phụ khoa", "Bình", "Thực", "Khí trệ"],
    tc: ["Kinh nguyệt trước kỳ hoặc sau kỳ không định", "Sắc kinh tối có cục", "Ngực sườn trướng đau", "Mạch huyền"],
    pdt: "Sơ can giải uất, điều kinh",
    bt: "Sài hồ sơ can tán hợp Tứ vật thang",
    tpbt: ["Sài hồ 10g", "Bạch thược 12g", "Chỉ xác 8g", "Xuyên khung 10g", "Đương quy 12g", "Thục địa 16g"]
  },
  "thong_kinh_han_thap": {
    stt: 763,
    hc: "Thống kinh do Hàn thấp",
    phanloai: ["Phụ khoa", "Hàn", "Thực", "Hàn thấp"],
    tc: ["Đau bụng kinh dữ dội trước hoặc trong kỳ", "Chườm ấm đỡ đau", "Sợ lạnh tay chân lạnh", "Mạch trầm khẩn"],
    pdt: "Ôn kinh tán hàn, hành khí chỉ thống",
    bt: "Ôn kinh thang gia giảm",
    tpbt: ["Đương quy 12g", "Xuyên khung 10g", "Bạch thược 12g", "Ngô thù du 6g", "Quế chi 8g", "Ngải diệp 10g"]
  },
  "can_khi_thu_nghich": {
    stt: 764,
    hc: "Can khí thượng nghịch",
    phanloai: ["Tạng Can", "Bình", "Thực", "Khí nghịch"],
    tc: ["Đau tức ngực sườn lên đỉnh đầu", "Đau đầu hoa mắt", "Ợ hơi nấc cụt", "Mạch huyền"],
    pdt: "Bình can giáng nghịch, lý khí",
    bt: "Toàn phúc đại giả thang gia giảm",
    tpbt: ["Toàn phúc hoa 10g", "Đại giả thạch 15g", "Hương phụ 10g", "Trần bì 6g", "Bán hạ chế 10g"]
  },
  "can_vi_bat_hoa_thuc_tich": {
    stt: 765,
    hc: "Can Vị bất hòa kèm thực tích",
    phanloai: ["Tạng Can", "Bình", "Thực", "Khí trệ thực tích"],
    tc: ["Thượng vị trướng đau lan sườn", "Ăn không tiêu ợ chua", "Đại tiện táo hoặc không thông", "Mạch huyền hoạt"],
    pdt: "Sơ can lý khí, tiêu tích hòa vị",
    bt: "Sài hồ sơ can tán hợp Bảo hòa hoàn",
    tpbt: ["Sài hồ 10g", "Chỉ xác 8g", "Bạch thược 12g", "Sơn tra 12g", "Thần khúc 10g", "Lai phục tử 10g"]
  },
  "can_than_am_hu": {
    stt: 766,
    hc: "Can Thận âm hư",
    phanloai: ["Tạng Can", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Đau lưng mỏi gối chóng mặt tai ù", "Mắt khô nhìn mờ", "Triều nhiệt đạo hãn", "Mạch tế sác"],
    pdt: "Tư bổ can thận âm",
    bt: "Kỷ cúc địa hoàng hoàn hợp Nhất quán đản",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Phục linh 12g", "Kỷ tử 12g", "Cúc hoa 10g"]
  },
  "can_ty_bat_hoa": {
    stt: 767,
    hc: "Can Tỳ bất hòa",
    phanloai: ["Tạng Can", "Bình", "Thực", "Khí trệ"],
    tc: ["Bụng trướng đau lúc đau lúc thôi", "Đại tiện lỏng hoặc táo thất thường", "Ngực sườn đầy trướng", "Mạch huyền"],
    pdt: "Sơ can kiện tỳ",
    bt: "Thống tả yếu phương hợp Tứ nghịch tán",
    tpbt: ["Sài hồ 10g", "Bạch thược 12g", "Chỉ thực 8g", "Cam thảo 6g", "Bạch truật 12g", "Phòng phong 8g"]
  },
  "tam_khi_am_luong_hu": {
    stt: 768,
    hc: "Tâm khí âm lưỡng hư",
    phanloai: ["Tạng Tâm", "Bình", "Hư", "Khí âm lưỡng hư"],
    tc: ["Hồi hộp trống ngực mệt mỏi", "Miệng khô gò má đỏ", "Đoản khí tự hãn", "Mạch tế sác vô lực"],
    pdt: "Ích khí dưỡng âm, bổ tâm",
    bt: "Sinh mạch tán hợp Bảo nguyên thang",
    tpbt: ["Nhân sâm 10g", "Mạch môn 12g", "Ngũ vị tử 6g", "Đảng sâm 12g", "Hoàng kỳ 16g", "Cam thảo 6g"]
  },
  "tam_mach_uat_tro": {
    stt: 769,
    hc: "Tâm mạch ứ trệ",
    phanloai: ["Tạng Tâm", "Bình", "Thực", "Huyết ứ"],
    tc: ["Đau thắt ngực lan ra vai trái lưng", "Môi lưỡi tím tái", "Mạch sáp hoặc kết đại"],
    pdt: "Hoạt huyết hóa ứ, thông mạch",
    bt: "Huyết phủ trục ứ thang",
    tpbt: ["Đương quy 12g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Xuyên khung 10g", "Đan sâm 15g"]
  },
  "bat_cuong_bieu_han": {
    stt: 770,
    hc: "Biểu hàn chứng",
    phanloai: ["Bát Cương", "Biểu", "Hàn", "Thực"],
    tc: ["Sợ lạnh phát sốt không có mồ hôi", "Đau đầu mỏi người", "Mạch phù khẩn"],
    pdt: "Tân ôn giải biểu",
    bt: "Ma hoàng thang",
    tpbt: ["Ma hoàng 8g", "Quế chi 10g", "Hạnh nhân 10g", "Cam thảo 6g"]
  },
  "bat_cuong_bieu_nhiet": {
    stt: 771,
    hc: "Biểu nhiệt chứng",
    phanloai: ["Bát Cương", "Biểu", "Nhiệt", "Thực"],
    tc: ["Phát sốt sợ gió họng đau", "Ho nhẹ", "Mạch phù sác"],
    pdt: "Tân lương giải biểu",
    bt: "Ngân kiều tán",
    tpbt: ["Kim ngân hoa 12g", "Liên kiều 10g", "Bạc hà 6g", "Cát cánh 8g", "Cúc hoa 10g"]
  },
  "khi_hu_chung": {
    stt: 772,
    hc: "Khí hư chứng",
    phanloai: ["Khí Huyết Tân Dịch", "Bình", "Hư", "Khí hư"],
    tc: ["Mệt mỏi đoản khí", "Tiếng nói nhỏ lười nói", "Sắc mặt nhợt", "Mạch tế nhược"],
    pdt: "Bổ khí kiện tỳ",
    bt: "Tứ quân tử thang",
    tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Cam thảo 6g"]
  },
  "huyet_hu_chung": {
    stt: 773,
    hc: "Huyết hư chứng",
    phanloai: ["Khí Huyết Tân Dịch", "Bình", "Hư", "Huyết hư"],
    tc: ["Chóng mặt hoa mắt", "Sắc mặt nhợt móng tay nhợt", "Mạch tế nhược"],
    pdt: "Dưỡng huyết bổ tâm can",
    bt: "Tứ vật thang",
    tpbt: ["Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g"]
  },
  "thai_duong_bieu_han": {
    stt: 774,
    hc: "Thái dương biểu hàn chứng",
    phanloai: ["Lục Kinh", "Biểu", "Hàn", "Thực"],
    tc: ["Sợ lạnh phát sốt không có mồ hôi", "Đau đầu cứng gáy", "Mạch phù khẩn"],
    pdt: "Tân ôn giải biểu",
    bt: "Ma hoàng thang",
    tpbt: ["Ma hoàng 8g", "Quế chi 10g", "Hạnh nhân 10g", "Cam thảo 6g"]
  },
  "duong_minh_kinh_chung": {
    stt: 775,
    hc: "Dương minh kinh chứng",
    phanloai: ["Lục Kinh", "Lý", "Nhiệt", "Thực"],
    tc: ["Sốt cao mặt đỏ khát nước nhiều", "Mồ hôi ra đầm đìa", "Mạch hồng đại hữu lực"],
    pdt: "Thanh nhiệt sinh tân",
    bt: "Bạch hổ thang",
    tpbt: ["Thạch cao 30g", "Tri mẫu 12g", "Ngạnh mễ 15g", "Cam thảo 6g"]
  },
  "ve_phan_chung": {
    stt: 776,
    hc: "Vệ phận chứng",
    phanloai: ["Vệ Khí Dinh Huyết", "Biểu", "Nhiệt", "Thực"],
    tc: ["Phát sốt sợ gió nhẹ đau đầu", "Họng rát rêu lưỡi mỏng", "Mạch phù sác"],
    pdt: "Tân lương giải biểu, thanh nhiệt",
    bt: "Ngân kiều tán",
    tpbt: ["Kim ngân hoa 12g", "Liên kiều 10g", "Bạc hà 6g", "Cát cánh 8g", "Ngưu bàng tử 10g"]
  },
  "thu_thai_am_phe_kinh": {
    stt: 777,
    hc: "Thủ thái âm Phế kinh chứng",
    phanloai: ["Kinh Lạc", "Biểu", "Hư thực", "Phế kinh"],
    tc: ["Khuyết bồn đau tức", "Cánh tay trong đau mỏi dọc đường đi của kinh", "Sốt ngột ngạt", "Mạch phù"],
    pdt: "Khu phong tán hàn, sơ thông kinh lạc",
    bt: "Thông kinh hoạt lạc thang",
    tpbt: ["Khương hoạt 10g", "Độc hoạt 10g", "Quế chi 8g", "Uy linh tiên 12g", "Cam thảo 6g"]
  },
  "am_kieu_mach_chung": {
    stt: 778,
    hc: "Âm kiều mạch bệnh chứng",
    phanloai: ["Kỳ Kinh", "Lý", "Hư", "Âm kiều mạch"],
    tc: ["Mắt nhắm không muốn mở hay buồn ngủ", "Cơ bắp mặt trong chân co rút", "Mạch trầm tế"],
    pdt: "Dưỡng huyết thư cân, an thần",
    bt: "Tứ vật thang hợp An thần định chí hoàn",
    tpbt: ["Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g", "Phục thần 12g"]
  },
  "duong_kieu_mach_chung": {
    stt: 779,
    hc: "Dương kiều mạch bệnh chứng",
    phanloai: ["Kỳ Kinh", "Lý", "Thực", "Dương kiều mạch"],
    tc: ["Mắt mở to khó nhắm", "Cơ bắp mặt ngoài chân co cứng", "Chứng cuồng", "Mạch huyền sác"],
    pdt: "Khu phong thanh nhiệt, thư cân",
    bt: "Tần giao tang ký sinh thang",
    tpbt: ["Tần giao 12g", "Tang ký sinh 16g", "Phòng phong 10g", "Xích thược 12g"]
  },
  "am_duy_mach_chung": {
    stt: 780,
    hc: "Âm duy mạch bệnh chứng",
    phanloai: ["Kỳ Kinh", "Lý", "Hư", "Âm duy mạch"],
    tc: ["Chứng tâm thống (đau tim ngực)", "Buồn bực bứt rứt", "Mạch tế nhược"],
    pdt: "Bổ khí dưỡng huyết, an tâm",
    bt: "Đan sâm ẩm hợp Cam mạch đại táo thang",
    tpbt: ["Đan sâm 15g", "Đàn hương 6g", "Cam thảo 6g", "Tiểu mạch 30g", "Đại táo 5quả"]
  },
  "duong_duy_mach_chung": {
    stt: 781,
    hc: "Dương duy mạch bệnh chứng",
    phanloai: ["Kỳ Kinh", "Lý", "Thực", "Dương duy mạch"],
    tc: ["Phát sốt sợ lạnh ngoài da", "Đau nhức các khớp xương", "Mạch phù"],
    pdt: "Giải biểu thấu tà, thông lạc",
    bt: "Tiểu sài hồ thang hợp Quế chi thang",
    tpbt: ["Sài hồ 12g", "Hoàng cầm 10g", "Quế chi 10g", "Bạch thược 12g", "Sinh khương 6g"]
  },
  "han_tre_can_mach": {
    stt: 782,
    hc: "Hàn trệ Can mạch",
    phanloai: ["Tạng Can", "Hàn", "Thực", "Hàn trệ"],
    tc: ["Đau quặn bụng dưới", "Đau lan xuống bộ phận sinh dục", "Gặp lạnh đau tăng ấm giảm", "Mạch huyền trầm khẩn"],
    pdt: "Ôn kinh tán hàn, noãn can chỉ thống",
    bt: "Noãn can tiễn",
    tpbt: ["Tiểu hồi hương 10g", "Nhục quế 6g", "Đương quy 12g", "Câu kỷ tử 12g", "Ô dược 10g", "Trầm hương 4g", "Phục linh 12g"]
  },
  "can_hu_han": {
    stt: 783,
    hc: "Can hư hàn",
    phanloai: ["Tạng Can", "Hàn", "Hư", "Dương hư"],
    tc: ["Sợ lạnh tay chân lạnh", "Đau đỉnh đầu âm ỉ", "Sắc mặt xanh sạm", "Rêu lưỡi trắng nhuận", "Mạch trầm trì nhược"],
    pdt: "Ôn bổ can dương",
    bt: "Ngô thù du thang",
    tpbt: ["Ngô thù du 8g", "Nhân sâm 12g", "Sinh khương 10g", "Đại táo 4quả"]
  },
  "can_duong_thuong_khang": {
    stt: 784,
    hc: "Can dương thượng kháng",
    phanloai: ["Tạng Can", "Nhiệt", "Hư thực thác tạp", "Can dương"],
    tc: ["Đau đầu chóng mặt dữ dội", "Mặt đỏ mắt đỏ", "Dễ cáu gắt tai ù như ve kêu", "Mất ngủ nhiều mộng", "Mạch huyền lực"],
    pdt: "Bình can tiềm dương, thanh nhiệt trấn kinh",
    bt: "Thiên ma câu đằng ẩm",
    tpbt: ["Thiên ma 10g", "Câu đằng 12g", "Thạch quyết minh 20g", "Chi tử 10g", "Hoàng cầm 10g", "Ngưu tất 12g", "Đỗ trọng 12g"]
  },
  "can_phong_noi_dong": {
    stt: 785,
    hc: "Can phong nội động",
    phanloai: ["Tạng Can", "Nhiệt", "Hư thực", "Nội phong"],
    tc: ["Chân tay run rẩy co quắp", "Tê dại đầu ngón tay chân", "Chóng mặt hoa mắt", "Sắc mặt nhợt nhạt", "Mạch tế huyền"],
    pdt: "Dưỡng huyết nhuận can, trấn phong chỉ kinh",
    bt: "Chấn can tức phong thang",
    tpbt: ["Ngưu tất 15g", "Đại giả thạch 20g", "Long cốt 15g", "Mẫu lệ 15g", "Quy bản 15g", "Bạch thược 12g", "Huyền sâm 12g"]
  },
  "can_lac_huyet_u": {
    stt: 786,
    hc: "Can lạc huyết ứ",
    phanloai: ["Tạng Can", "Bình", "Thực", "Huyết ứ"],
    tc: ["Sườn ngực đau nhói cố định", "Cự án", "Đau lan ra lưng", "Chất lưỡi tím tối", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, lý khí chỉ thống",
    bt: "Huyết phủ trục ứ thang",
    tpbt: ["Đương quy 12g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Sài hồ 8g", "Xuyên khung 10g"]
  },
  "thap_nhiet_uat_can": {
    stt: 787,
    hc: "Thấp nhiệt uất Can",
    phanloai: ["Tạng Can", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Sườn phải trướng đau", "Miệng đắng ăn kém", "Tiểu tiện đỏ sẻn", "Rêu lưỡi vàng nhớt", "Mạch huyền sác"],
    pdt: "Thanh nhiệt lợi thấp, sơ can",
    bt: "Long đởm tả can thang gia giảm",
    tpbt: ["Long đởm thảo 12g", "Chi tử 10g", "Hoàng cầm 10g", "Sài hồ 8g", "Xa tiền tử 12g", "Trạch tả 10g"]
  },
  "tam_huyet_u_tre": {
    stt: 788,
    hc: "Tâm huyết ứ trệ",
    phanloai: ["Tạng Tâm", "Bình", "Thực", "Huyết ứ"],
    tc: ["Đau thắt ngực lan ra sau lưng hoặc vai trái", "Môi lưỡi tím tái hoặc điểm ứ huyết", "Mạch kết đại hoặc sáp"],
    pdt: "Hoạt huyết hóa ứ, thông mạch chỉ thống",
    bt: "Huyết phủ trục ứ thang",
    tpbt: ["Đương quy 12g", "Sinh địa 16g", "Đào nhân 12g", "Hồng hoa 8g", "Chỉ xác 8g", "Xích thược 12g", "Sài hồ 8g", "Cát cánh 8g"]
  },
  "tam_hoa_thuong_viem": {
    stt: 789,
    hc: "Tâm hỏa thượng viêm",
    phanloai: ["Tạng Tâm", "Nhiệt", "Thực", "Hỏa nhiệt"],
    tc: ["Loét miệng lưỡi đỏ đau", "Hồi hộp bứt rứt khó ngủ", "Mặt đỏ tiểu tiện đỏ rát", "Mạch sác lực"],
    pdt: "Thanh tâm tả hỏa",
    bt: "Đạo xích tán",
    tpbt: ["Sinh địa 16g", "Mộc thông 8g", "Cam thảo 6g", "Trúc diệp 10g"]
  },
  "tam_than_bat_giao": {
    stt: 790,
    hc: "Tâm Thận bất giao",
    phanloai: ["Tạng Tâm", "Nhiệt", "Hư thực", "Tâm Thận bất giao"],
    tc: ["Hồi hộp mất ngủ", "Tâm phiền bứt rứt", "Đầu choáng tai ù", "Lòng bàn tay chân nóng", "Mạch tế sác"],
    pdt: "Tư âm giáng hỏa, giao hội tâm thận",
    bt: "Giao thái hoàn",
    tpbt: ["Hoàng liên 8g", "Nhục quế 3g"]
  },
  "tam_khi_huyet_luon_hu": {
    stt: 791,
    hc: "Tâm khí huyết lưỡng hư",
    phanloai: ["Tạng Tâm", "Bình", "Hư", "Khí huyết lưỡng hư"],
    tc: ["Hồi hộp trống ngực", "Hay quên chóng mặt", "Sắc mặt nhợt nhạt", "Mệt mỏi đoản khí", "Mạch tế nhược"],
    pdt: "Ích khí dưỡng huyết, an thần",
    bt: "Dưỡng tâm thang",
    tpbt: ["Đảng sâm 12g", "Hoàng kỳ 16g", "Đương quy 12g", "Bạch thược 12g", "Phục thần 12g", "Toan táo nhân 12g"]
  },
  "tam_duong_kiep_de": {
    stt: 792,
    hc: "Tâm dương kiệt thoát",
    phanloai: ["Tạng Tâm", "Hàn", "Hư", "Dương khí hư thoát"],
    tc: ["Hồi hộp dữ dội đột ngột", "Tay chân lạnh ngắt", "Mồ hôi vã như tắm", "Thần khí uể oải", "Mạch vi dục tuyệt"],
    pdt: "Hồi dương cứu nghịch, ích khí cố thoát",
    bt: "Sâm phụ thang",
    tpbt: ["Nhân sâm 15g", "Hắc phụ tử 12g"]
  },
  "tam_bao_huyet_nhiet": {
    stt: 793,
    hc: "Tâm bào hỏa nhiệt",
    phanloai: ["Tạng Tâm", "Nhiệt", "Thực", "Hỏa nhiệt"],
    tc: ["Hôn mê nói sảng", "Bứt rứt cuồng loạn", "Lưỡi đỏ thẫm", "Mạch sác hữu lực"],
    pdt: "Thanh tâm lương huyết, định kinh",
    bt: "An cung ngưu hoàng hoàn",
    tpbt: ["Ngưu hoàng 1g", "Thủy ngưu giác 15g", "Uất kim 10g", "Hoàng liên 8g"]
  },
  "ty_vi_khi_hu": {
    stt: 794,
    hc: "Tỳ Vị khí hư",
    phanloai: ["Tạng Tỳ", "Bình", "Hư", "Khí hư"],
    tc: ["Ăn kém đầy bụng", "Mệt mỏi chân tay rã rời", "Đại tiện lỏng loãng", "Chất lưỡi nhợt", "Mạch tế nhược"],
    pdt: "Ích khí kiện tỳ, hòa vị",
    bt: "Bổ trung ích khí thang",
    tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Bạch truật 12g", "Cam thảo 6g", "Trần bì 6g", "Sài hồ 6g", "Thăng ma 6g", "Đương quy 12g"]
  },
  "ty_am_hu": {
    stt: 795,
    hc: "Tỳ âm hư",
    phanloai: ["Tạng Tỳ", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Miệng khô khát không muốn uống nước", "Lòng bàn tay chân nóng", "Đại tiện táo hoặc khô", "Chất lưỡi đỏ khô", "Mạch tế sác"],
    pdt: "Tư dưỡng tỳ âm, sinh tân",
    bt: "Dưỡng vị thang gia giảm",
    tpbt: ["Sa sâm 12g", "Mạch môn 12g", "Đan sâm 12g", "Bạch thược 12g", "Thạch hộc 12g"]
  },
  "ty_khi_ha_ham": {
    stt: 796,
    hc: "Tỳ khí hạ hãm",
    phanloai: ["Tạng Tỳ", "Bình", "Hư", "Khí hãm"],
    tc: ["Bụng dưới nặng tức", "Cảm giác sa giáng nội tạng", "Đại tiện mót rặn hoặc sa trực tràng", "Mệt mỏi đoản khí", "Mạch nhược"],
    pdt: "Bổ khí thăng dương",
    bt: "Bổ trung ích khí thang",
    tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Bạch truật 12g", "Cam thảo 6g", "Trần bì 6g", "Sài hồ 6g", "Thăng ma 6g", "Đương quy 12g"]
  },
  "thap_nhiet_khon_ty": {
    stt: 797,
    hc: "Thấp nhiệt khốn Tỳ",
    phanloai: ["Tạng Tỳ", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Bụng trướng buồn nôn", "Đại tiện nhầy dính hôi", "Nước tiểu vàng đỏ", "Rêu lưỡi vàng nhớt", "Mạch nhu sác"],
    pdt: "Thanh nhiệt hóa thấp, vận tỳ",
    bt: "Nhân trần cao thang hợp Bình vị tán",
    tpbt: ["Nhân trần 15g", "Chi tử 10g", "Đại hoàng 6g", "Thương truật 10g", "Hậu phác 10g", "Trần bì 6g"]
  },
  "thuc_tich_ngu_tr_ty": {
    stt: 798,
    hc: "Thực tích trệ Tỳ",
    phanloai: ["Tạng Tỳ", "Bình", "Thực", "Thực tích"],
    tc: ["Bụng trướng đầy sau ăn", "Ợ hơi chua hôi", "Buồn nôn nôn mửa", "Rêu lưỡi dày nhớt", "Mạch hoạt"],
    pdt: "Tiêu thực hóa tích, kiện tỳ",
    bt: "Bảo hòa hoàn",
    tpbt: ["Sơn tra 12g", "Thần khúc 10g", "Lai phục tử 10g", "Bán hạ chế 10g", "Trần bì 6g", "Phục linh 12g"]
  },
  "ty_vi_han_tre": {
    stt: 799,
    hc: "Tỳ Vị hàn trệ",
    phanloai: ["Tạng Tỳ", "Hàn", "Thực", "Hàn trệ"],
    tc: ["Bụng lạnh đau thích chườm ấm", "Nôn mửa nước trong", "Miệng không khát", "Rêu lưỡi trắng", "Mạch trầm trì"],
    pdt: "Ôn trung tán hàn, hành khí",
    bt: "Lương phụ hoàn",
    tpbt: ["Cao lương khương 10g", "Hương phụ 10g"]
  },
  "phe_khi_uat": {
    stt: 800,
    hc: "Phế khí uất trệ",
    phanloai: ["Tạng Phế", "Bình", "Thực", "Khí trệ"],
    tc: ["Ngực tức thở ngắn", "Ho hắng ít đờm", "Tinh thần u uất", "Mạch huyền"],
    pdt: "Tuyên phế lý khí",
    bt: "Tứ ma thang gia giảm",
    tpbt: ["Trần bì 6g", "Hương phụ 10g", "Ô dược 10g", "Binh lang 8g"]
  },
  "phong_thap_pham_phe": {
    stt: 801,
    hc: "Phong thấp phạm Phế",
    phanloai: ["Tạng Phế", "Bình", "Thực", "Phong thấp"],
    tc: ["Ho khạc đờm dính", "Đầu nặng như đội khăn", "Ngực tức nặng nề", "Rêu lưỡi trắng nhớt", "Mạch nhu"],
    pdt: "Khu phong hóa thấp, tuyên phế",
    bt: "Tam nhân thang gia giảm",
    tpbt: ["Hạnh nhân 10g", "Ý dĩ 15g", "Bạch đậu khấu 8g", "Hậu phác 10g", "Bán hạ chế 10g"]
  },
  "tao_nhiet_thuong_phe": {
    stt: 802,
    hc: "Táo nhiệt thương Phế",
    phanloai: ["Tạng Phế", "Nhiệt", "Thực", "Táo nhiệt"],
    tc: ["Ho khan không đờm", "Họng khô đau rát", "Mũi khô môi táo", "Rêu lưỡi vàng khô", "Mạch sác"],
    pdt: "Thanh nhiệt nhuận táo, tuyên phế",
    bt: "Tang hạnh thang",
    tpbt: ["Tang diệp 10g", "Hạnh nhân 10g", "Bối mẫu 8g", "Sa sâm 12g", "Đạm trúc diệp 10g", "Lô căn 15g"]
  },
  "dam_tro_tr_phe": {
    stt: 803,
    hc: "Đàm trọc trở Phế",
    phanloai: ["Tạng Phế", "Hàn", "Thực", "Đàm trọc"],
    tc: ["Ho khạc đờm trắng loãng nhiều", "Ngực tức thở gấp", "Nằm ngửa không được", "Rêu lưỡi trắng nhớt", "Mạch huyền hoạt"],
    pdt: "Táo thấp hóa đàm, giáng nghịch bình suyễn",
    bt: "Nhị trần thang hợp Tam tử dưỡng thân thang",
    tpbt: ["Bán hạ chế 10g", "Trần bì 6g", "Phục linh 12g", "Cam thảo 6g", "Tô tử 10g", "Lai phục tử 10g", "Bạch giới tử 8g"]
  },
  "phe_lac_huyet_u": {
    stt: 804,
    hc: "Phế lạc huyết ứ",
    phanloai: ["Tạng Phế", "Bình", "Thực", "Huyết ứ"],
    tc: ["Ngực đau nhói cố định", "Ho khạc đờm lẫn máu đen", "Chất lưỡi tím tối", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, thông lạc",
    bt: "Huyết phủ trục ứ thang gia giảm",
    tpbt: ["Đương quy 12g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Xuyên khung 10g", "Cát cánh 8g"]
  },
  "phe_nhiet_uat_ket": {
    stt: 805,
    hc: "Phế nhiệt uất kết",
    phanloai: ["Tạng Phế", "Nhiệt", "Thực", "Phế nhiệt"],
    tc: ["Sốt cao ho thấu", "Đờm vàng đặc tanh hôi", "Ngực tức đau", "Rêu lưỡi vàng", "Mạch hồng sác"],
    pdt: "Thanh phế hóa đàm, giải độc",
    bt: "Thanh kim hóa đàm thang",
    tpbt: ["Hoàng cầm 10g", "Chi tử 10g", "Tri mẫu 10g", "Bối mẫu 8g", "Qua lâu 12g", "Tang bạch bì 12g"]
  },
  "than_am_hu": {
    stt: 806,
    hc: "Thận âm hư",
    phanloai: ["Tạng Thận", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Đau lưng mỏi gối ù tai chóng mặt", "Triều nhiệt đạo hãn lòng bàn tay chân nóng", "Di tinh rụng tóc răng lung lay", "Mạch tế sác"],
    pdt: "Tư bổ thận âm",
    bt: "Lục vị địa hoàng hoàn",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Phục linh 12g"]
  },
  "than_duong_hu": {
    stt: 807,
    hc: "Thận dương hư",
    phanloai: ["Tạng Thận", "Hàn", "Hư", "Dương hư"],
    tc: ["Đau lưng mỏi gối sợ lạnh tay chân lạnh", "Tiểu tiện nhiều lần về đêm tiểu dầm", "Liệt dương di tinh xuất tinh sớm", "Lưỡi bệu nhợt", "Mạch trầm trì tế"],
    pdt: "Ôn bổ thận dương",
    bt: "Hữu quy hoàn",
    tpbt: ["Phụ tử chế 8g", "Nhục quế 6g", "Thục địa 16g", "Sơn thù nhục 10g", "Kỷ tử 12g", "Đỗ trọng 12g", "Lộc giác giao 12g"]
  },
  "than_khi_bat_co": {
    stt: 808,
    hc: "Thận khí bất cố",
    phanloai: ["Tạng Thận", "Bình", "Hư", "Khí hư"],
    tc: ["Tiểu tiện rỉ rả tiểu đêm nhiều lần", "Di tinh hoạt tinh đới hạ trắng loãng", "Thắt lưng mỏi yếu", "Mạch trầm tế nhược"],
    pdt: "Bổ thận cố sáp",
    bt: "Tang phiêu tiêu tán",
    tpbt: ["Tang phiêu tiêu 12g", "Long cốt 15g", "Quy bản 12g", "Thạch xương bồ 8g", "Viễn chí 6g", "Phục thần 12g"]
  },
  "than_nap_khi_hu": {
    stt: 809,
    hc: "Thận nạp khí hư",
    phanloai: ["Tạng Thận", "Bình", "Hư", "Khí hư"],
    tc: ["Ho hen lâu ngày thở gấp khi vận động", "Hơi thở ngắn tiếng nói nhỏ", "Thắt lưng mỏi tự ra mồ hôi", "Mạch trầm tế vô lực"],
    pdt: "Ôn thận nạp khí",
    bt: "Kim quỹ thận khí hoàn gia giảm",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Đỗ trọng 12g", "Phụ tử chế 8g", "Nhục quế 6g", "Hải mã 6g", "Nhân sâm 10g"]
  },
  "than_tinh_bat_tuc": {
    stt: 810,
    hc: "Thận tinh bất túc",
    phanloai: ["Tạng Thận", "Bình", "Hư", "Tinh hư"],
    tc: ["Đầu choáng tai ù", "Trí nhớ giảm sút", "Răng lung lay tóc rụng", "Chân tay mỏi yếu", "Mạch trầm tế"],
    pdt: "Bổ thận ích tinh, điền tủy",
    bt: "Hà xa đại tạo hoàn",
    tpbt: ["Tử hà xe 10g", "Thục địa 16g", "Quy bản 12g", "Kỷ tử 12g", "Đỗ trọng 12g"]
  },
  "than_khi_hu": {
    stt: 811,
    hc: "Thận khí hư",
    phanloai: ["Tạng Thận", "Bình", "Hư", "Khí hư"],
    tc: ["Thắt lưng mỏi yếu", "Tiểu tiện nhiều lần", "Tiểu rỉ rả về đêm", "Chất lưỡi nhợt", "Mạch trầm tế"],
    pdt: "Bổ ích thận khí",
    bt: "Kim quỹ thận khí hoàn",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Phục linh 12g", "Nhục quế 4g", "Phụ tử chế 6g"]
  },
  "than_am_duong_luong_hu": {
    stt: 812,
    hc: "Thận âm dương lưỡng hư",
    phanloai: ["Tạng Thận", "Bình", "Hư", "Âm dương lưỡng hư"],
    tc: ["Đau lưng mỏi gối vừa sợ lạnh vừa sốt nóng về chiều", "Tai ù chóng mặt", "Tiểu đêm nhiều", "Mạch trầm tế sác"],
    pdt: "Âm dương song bổ",
    bt: "Nhị tiên thang hợp Lục vị địa hoàng hoàn",
    tpbt: ["Tiên mao 10g", "Tiên linh tỳ 10g", "Đương quy 12g", "Ba kích thiên 10g", "Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g"]
  },
  "than_hu_thuy_lam": {
    stt: 813,
    hc: "Thận hư thủy lạm",
    phanloai: ["Tạng Thận", "Hàn", "Hư", "Thủy thũng"],
    tc: ["Phù toàn thân nhất là nửa người dưới", "Bụng trướng nước", "Sợ lạnh chân tay lạnh", "Mạch trầm trì"],
    pdt: "Ôn dương lợi thủy",
    bt: "Chân vũ thang",
    tpbt: ["Phụ tử chế 8g", "Bạch truật 12g", "Phục linh 12g", "Bạch thược 12g", "Sinh khương 6g"]
  },
  "than_lac_huyet_u": {
    stt: 814,
    hc: "Thận lạc huyết ứ",
    phanloai: ["Tạng Thận", "Bình", "Thực", "Huyết ứ"],
    tc: ["Thắt lưng đau nhói cố định", "Đau lan xuống mông chân", "Chất lưỡi tím tối", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, thông lạc",
    bt: "Thân thống trục ứ thang",
    tpbt: ["Đương quy 12g", "Xuyên khung 10g", "Đào nhân 12g", "Hồng hoa 8g", "Ngưu tất 12g", "Địa long 10g"]
  },
  "than_hoa_vuong": {
    stt: 815,
    hc: "Thận hỏa vượng",
    phanloai: ["Tạng Thận", "Nhiệt", "Thực", "Thận hỏa"],
    tc: ["Dâm dục vọng động", "Di tinh xuất tinh sớm", "Tâm phiền bứt rứt", "Lưỡi đỏ rêu vàng", "Mạch huyền sác"],
    pdt: "Thanh tả thận hỏa",
    bt: "Tri bá địa hoàng hoàn gia giảm",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Phục linh 12g", "Tri mẫu 10g", "Hoàng bá 10g"]
  },
  "vi_thuc_tru": {
    stt: 816,
    hc: "Vị thực trệ (Thực tích)",
    phanloai: ["Phủ Vị", "Bình", "Thực", "Trệ tích"],
    tc: ["Bụng trướng đau", "Cự án", "Ợ hơi chua", "Buồn nôn nôn ra thức ăn cũ", "Đại tiện thối khắm", "Mạch hoạt"],
    pdt: "Tiêu thực hóa tích, giáng nghịch",
    bt: "Bảo hòa hoàn",
    tpbt: ["Sơn tra 12g", "Thần khúc 10g", "Phục linh 12g", "Bán hạ chế 10g", "Trần bì 6g", "Lai phục tử 10g", "Liên kiều 8g"]
  },
  "vi_han": {
    stt: 817,
    hc: "Vị hàn (Hàn tà phạm Vị)",
    phanloai: ["Phủ Vị", "Hàn", "Thực", "Ngoại cảm hàn"],
    tc: ["Thượng vị đột ngột đau quặn", "Gặp lạnh đau tăng", "Chườm ấm đỡ", "Miệng không khát", "Mạch trầm khẩn"],
    pdt: "Ôn vị tán hàn, hành khí",
    bt: "Lương phương ngô thù du thang",
    tpbt: ["Ngô thù du 8g", "Can khương 8g", "Sinh khương 6g", "Đảng sâm 12g"]
  },
  "vi_nhiet_uat": {
    stt: 818,
    hc: "Vị nhiệt uất kết",
    phanloai: ["Phủ Vị", "Nhiệt", "Thực", "Vị nhiệt"],
    tc: ["Thượng vị nóng rát đau", "Mau đói ăn nhiều", "Miệng hôi họng khát", "Rêu lưỡi vàng", "Mạch sác"],
    pdt: "Thanh vị tả hỏa",
    bt: "Thanh vị tán",
    tpbt: ["Hoàng liên 8g", "Thăng ma 6g", "Sinh địa 16g", "Mẫu đơn bì 10g", "Đại hoàng 8g"]
  },
  "vi_khi_nghich": {
    stt: 819,
    hc: "Vị khí thượng nghịch",
    phanloai: ["Phủ Vị", "Bình", "Thực", "Khí nghịch"],
    tc: ["Nấc cụt liên tục", "Buồn nôn nôn mửa", "Thượng vị trướng tức", "Mạch huyền hoạt"],
    pdt: "Giáng nghịch chỉ ẩu",
    bt: "Quất bì trúc nhự thang",
    tpbt: ["Trần bì 8g", "Trúc nhự 10g", "Đảng sâm 12g", "Cam thảo 6g", "Sinh khương 6g", "Đại táo 4quả"]
  },
  "vi_thong_can_vi_uat": {
    stt: 820,
    hc: "Can khí phạm Vị",
    phanloai: ["Phủ Vị", "Bình", "Thực", "Khí trệ"],
    tc: ["Thượng vị trướng đau lan sườn ngực", "Ợ hơi ợ chua", "Dễ cáu gắt", "Mạch huyền"],
    pdt: "Sơ can lý khí, hòa vị",
    bt: "Sài hồ sơ can tán",
    tpbt: ["Sài hồ 10g", "Chỉ xác 8g", "Bạch thược 12g", "Xuyên khung 10g", "Hương phụ 10g", "Uất kim 10g"]
  },
  "vi_hoa_thuong_cong": {
    stt: 821,
    hc: "Vị hỏa thượng công",
    phanloai: ["Phủ Vị", "Nhiệt", "Thực", "Vị hỏa"],
    tc: ["Răng lợi sưng đau dữ dội", "Hơi thở hôi thối", "Miệng khô khát", "Mạch sác lực"],
    pdt: "Thanh nhiệt tả hỏa, tiêu thũng",
    bt: "Thanh vị tán gia giảm",
    tpbt: ["Thạch cao 20g", "Hoàng liên 8g", "Sinh địa 16g", "Mẫu đơn bì 10g", "Đại hoàng 8g"]
  },
  "vi_duong_hu_han": {
    stt: 822,
    hc: "Vị dương hư hàn",
    phanloai: ["Phủ Vị", "Hàn", "Hư", "Dương hư"],
    tc: ["Thượng vị đau âm ỉ thích chườm ấm", "Nôn ra nước trong", "Tay chân không ấm", "Mạch trầm trì"],
    pdt: "Ôn trung tán hàn, kiện vị",
    bt: "Hoàng kỳ kiến trung thang",
    tpbt: ["Hoàng kỳ 16g", "Quế chi 10g", "Bạch thược 16g", "Cam thảo 6g", "Sinh khương 6g", "Đại táo 4quả", "Di đường 30g"]
  },
  "dai_trang_tan_kho": {
    stt: 823,
    hc: "Đại tràng tân dịch khô kiệt (Táo bón)",
    phanloai: ["Phủ Đại tràng", "Nhiệt", "Hư", "Tân dịch khuy tổn"],
    tc: ["Đại tiện khô cứng như phân dê", "Nhiều ngày không đi", "Miệng khô", "Chất lưỡi đỏ", "Mạch tế sác"],
    pdt: "Tư âm nhuận táo, thông tiện",
    bt: "Tăng dịch thang hợp Ma tử nhân hoàn",
    tpbt: ["Sinh địa 16g", "Mạch môn 12g", "Huyền sâm 12g", "Hỏa ma nhân 12g", "Hạnh nhân 10g", "Bạch thược 12g"]
  },
  "dai_trang_khi_hu": {
    stt: 824,
    hc: "Đại tràng khí hư",
    phanloai: ["Phủ Đại tràng", "Bình", "Hư", "Khí hư"],
    tc: ["Đại tiện lỏng loãng hoặc sa trực tràng", "Mót rặn sau đi ngoài", "Mệt mỏi đoản khí", "Mạch tế nhược"],
    pdt: "Bổ khí kiện tỳ, thăng đề",
    bt: "Bổ trung ích khí thang",
    tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Bạch truật 12g", "Cam thảo 6g", "Trần bì 6g", "Sài hồ 6g", "Thăng ma 6g"]
  },
  "dai_trang_u_trach": {
    stt: 825,
    hc: "Đại tràng ứ trệ huyết trệ",
    phanloai: ["Phủ Đại tràng", "Bình", "Thực", "Huyết ứ"],
    tc: ["Bụng dưới đau nhói", "Đại tiện ra máu sẫm", "Chất lưỡi tím", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, thông lạc",
    bt: "Huyết phủ trục ứ thang",
    tpbt: ["Đương quy 12g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Xuyên khung 10g", "Chỉ xác 8g"]
  },
  "truong_phong_ha_huyet": {
    stt: 826,
    hc: "Trường phong hạ huyết",
    phanloai: ["Phủ Đại tràng", "Nhiệt", "Thực", "Thấp nhiệt tràng vị"],
    tc: ["Đại tiện ra máu tươi phun thành tia", "Hậu môn sưng đau", "Rêu lưỡi vàng", "Mạch hoạt sác"],
    pdt: "Thanh nhiệt lợi thấp, lương huyết chỉ huyết",
    bt: "Hòe hoa tán",
    tpbt: ["Hòe hoa 12g", "Trắc bách diệp 12g", "Kinh giới tuệ 8g", "Chỉ xác 8g", "Hoàng cầm 10g", "Đương quy 12g"]
  },
  "dai_trang_tien_huyet": {
    stt: 827,
    hc: "Đại tràng hư hàn tiện huyết",
    phanloai: ["Phủ Đại tràng", "Hàn", "Hư", "Hư hàn"],
    tc: ["Đại tiện ra máu rỉ rả máu nhạt", "Bụng lạnh đau", "Sắc mặt nhợt", "Mạch trầm tế"],
    pdt: "Ôn dương kiện tỳ, nhiếp huyết",
    bt: "Hoàng thổ thang",
    tpbt: ["Sinh địa 16g", "Cam thảo 6g", "Bạch truật 12g", "Phụ tử chế 8g", "A giao 10g", "Hoàng cầm 10g", "Xích thạch chi 15g"]
  },
  "dai_trang_khi_tre": {
    stt: 828,
    hc: "Đại tràng khí trệ",
    phanloai: ["Phủ Đại tràng", "Bình", "Thực", "Khí trệ"],
    tc: ["Bụng trướng đau cự án", "Đại tiện khó khăn muốn đi mà không rặn được", "Mạch huyền"],
    pdt: "Hành khí đạo trệ",
    bt: "Lục ma thang",
    tpbt: ["Đại hoàng 8g", "Binh lang 10g", "Trầm hương 4g", "Mộc hương 8g", "Chỉ xác 8g", "Ô dược 10g"]
  },
  "dai_trang_tiet_ta": {
    stt: 829,
    hc: "Đại tràng thấp nhiệt tiết tả",
    phanloai: ["Phủ Đại tràng", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Tiêu chảy phân tóe nước như bùn vàng", "Hậu môn nóng rát", "Khát nước", "Mạch nhu sác"],
    pdt: "Thanh nhiệt lợi thấp, chỉ tả",
    bt: "Cát căn hoàng cầm hoàng liên thang",
    tpbt: ["Cát căn 16g", "Hoàng cầm 12g", "Hoàng liên 8g", "Cam thảo 6g"]
  },
  "dai_trang_tan_khu": {
    stt: 830,
    hc: "Đại tràng hư mạn tiết tả",
    phanloai: ["Phủ Đại tràng", "Hàn", "Hư", "Tỳ thận dương hư"],
    tc: ["Đại tiện lỏng vào sáng sớm (ngũ canh tả)", "Bụng lạnh đau", "Chân tay lạnh", "Mạch trầm tế"],
    pdt: "Ôn bổ tỳ thận, sáp trường chỉ tả",
    bt: "Tứ thần hoàn",
    tpbt: ["Bổ cốt chỉ 12g", "Ngô thù du 6g", "Nhục đậu khấu 10g", "Ngũ vị tử 6g", "Sinh khương 6g", "Đại táo 4quả"]
  },
  "tieu_truong_khi_tre": {
    stt: 831,
    hc: "Tiểu trường khí trệ",
    phanloai: ["Phủ Tiểu trường", "Bình", "Thực", "Khí trệ"],
    tc: ["Bụng dưới trướng đau lan tinh hoàn", "Đau tăng khi vận động", "Mạch huyền"],
    pdt: "Hành khí chỉ thống",
    bt: "Thiên đài ô dược tán",
    tpbt: ["Ô dược 10g", "Mộc hương 8g", "Tiểu hồi hương 8g", "Thanh bì 6g", "Cao lương khương 8g", "Trầm hương 4g"]
  },
  "tieu_truong_han": {
    stt: 832,
    hc: "Tiểu trường hư hàn",
    phanloai: ["Phủ Tiểu trường", "Hàn", "Hư", "Dương hư"],
    tc: ["Bụng dưới đau âm ỉ thích chườm ấm", "Sợ lạnh", "Tiểu tiện trong dài", "Mạch trầm trì"],
    pdt: "Ôn bổ thận dương, tán hàn",
    bt: "Hữu quy hoàn gia giảm",
    tpbt: ["Phụ tử chế 8g", "Nhục quế 6g", "Thục địa 16g", "Đỗ trọng 12g", "Kỷ tử 12g"]
  },
  "tieu_truong_thanh_coc": {
    stt: 833,
    hc: "Tiểu trường thanh cốc bất phân",
    phanloai: ["Phủ Tiểu trường", "Hàn", "Hư", "Tỳ thận hư"],
    tc: ["Ăn vào đi ngoài nguyên thức ăn chưa tiêu", "Bụng sôi đau", "Tay chân lạnh", "Mạch trầm tế"],
    pdt: "Ôn trung kiện tỳ, cố sáp",
    bt: "Lý trung hoàn hợp Sâm linh bạch truật tán",
    tpbt: ["Đảng sâm 12g", "Can khương 8g", "Bạch truật 12g", "Cam thảo 6g", "Phục linh 12g", "Ý dĩ 15g"]
  },
  "tieu_truong_nhiet": {
    stt: 834,
    hc: "Tiểu trường thiệt châm nhiệt",
    phanloai: ["Phủ Tiểu trường", "Nhiệt", "Thực", "Hỏa nhiệt"],
    tc: ["Miệng lưỡi lở loét", "Tiểu tiện đỏ rát buốt", "Phiền táo", "Lưỡi đỏ", "Mạch sác"],
    pdt: "Thanh tâm tả tiểu trường hỏa",
    bt: "Đạo xích tán",
    tpbt: ["Sinh địa 16g", "Mộc thông 8g", "Cam thảo 6g", "Trúc diệp 10g"]
  },
  "tieu_truong_binh_truong": {
    stt: 835,
    hc: "Tiểu trường sán khí",
    phanloai: ["Phủ Tiểu trường", "Hàn", "Thực", "Hàn trệ"],
    tc: ["Bụng dưới đau quặn lan xuống dịch hoàn", "Sa giáng tinh hoàn đau", "Gặp lạnh đau tăng", "Mạch huyền khẩn"],
    pdt: "Ôn kinh tán hàn, lý khí định thống",
    bt: "Noãn can tiễn",
    tpbt: ["Tiểu hồi hương 10g", "Nhục quế 6g", "Đương quy 12g", "Câu kỷ tử 12g", "Ô dược 10g", "Trầm hương 4g"]
  },
  "tieu_truong_tan_hu": {
    stt: 836,
    hc: "Tiểu trường tân dịch hư",
    phanloai: ["Phủ Tiểu trường", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Miệng khát thích uống nước mát", "Tiểu tiện ít đỏ", "Đại tiện khô", "Mạch tế sác"],
    pdt: "Tư âm sinh tân",
    bt: "Tăng dịch thang",
    tpbt: ["Sinh địa 16g", "Mạch môn 12g", "Huyền sâm 12g"]
  },
  "tieu_truong_thuc_tich": {
    stt: 837,
    hc: "Tiểu trường thực tích",
    phanloai: ["Phủ Tiểu trường", "Bình", "Thực", "Thực tích"],
    tc: ["Bụng trướng đau quặn", "Sôi bụng", "Đại tiện phân thối", "Mạch hoạt"],
    pdt: "Tiêu thực hóa tích",
    bt: "Bảo hòa hoàn",
    tpbt: ["Sơn tra 12g", "Thần khúc 10g", "Lai phục tử 10g", "Bán hạ chế 10g", "Trần bì 6g"]
  },
  "tieu_truong_khi_huyet_hu": {
    stt: 838,
    hc: "Tiểu trường khí huyết hư",
    phanloai: ["Phủ Tiểu trường", "Bình", "Hư", "Khí huyết lưỡng hư"],
    tc: ["Bụng dưới co thắt âm ỉ", "Sắc mặt nhợt", "Mệt mỏi hoa mắt", "Mạch tế nhược"],
    pdt: "Bổ khí dưỡng huyết",
    bt: "Thập toàn đại bổ thang",
    tpbt: ["Đảng sâm 12g", "Hoàng kỳ 16g", "Bạch truật 12g", "Cam thảo 6g", "Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g", "Quế chi 8g", "Phục linh 12g"]
  },
  "bang_quang_thuc_lau": {
    stt: 839,
    hc: "Bàng quang thạch lâm",
    phanloai: ["Phủ Bàng quang", "Nhiệt", "Thực", "Thấp nhiệt thạch lậu"],
    tc: ["Tiểu tiện tắc nghẽn đột ngột", "Đau buốt buốt rát", "Tiểu ra sỏi hoặc ra máu", "Mạch huyền sác"],
    pdt: "Thanh nhiệt lợi thấp, bài thạch",
    bt: "Thạch vĩ tán gia giảm",
    tpbt: ["Thạch vĩ 12g", "Xa tiền tử 12g", "Biển súc 10g", "Cù mạch 10g", "Hoạt thạch 15g", "Kim tiền thảo 20g"]
  },
  "bang_quang_huyet_u": {
    stt: 840,
    hc: "Bàng quang huyết ứ",
    phanloai: ["Phủ Bàng quang", "Bình", "Thực", "Huyết ứ"],
    tc: ["Hạ vị đau nhói", "Tiểu ra máu cục", "Chất lưỡi tím", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, chỉ huyết",
    bt: "Huyết phủ trục ứ thang",
    tpbt: ["Đương quy 12g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Xuyên khung 10g"]
  },
  "bang_quang_khi_hu": {
    stt: 841,
    hc: "Bàng quang khí hư",
    phanloai: ["Phủ Bàng quang", "Bình", "Hư", "Khí hư"],
    tc: ["Tiểu không tự chủ", "Tiểu đêm nhiều lần", "Lưng mỏi", "Mạch tế nhược"],
    pdt: "Ích khí cố sáp",
    bt: "Bổ trung ích khí thang hợp Tang phiêu tiêu tán",
    tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Bạch truật 12g", "Tang phiêu tiêu 12g", "Ích trí nhân 10g"]
  },
  "bang_quang_am_hu": {
    stt: 842,
    hc: "Bàng quang âm hư",
    phanloai: ["Phủ Bàng quang", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Tiểu tiện ít buốt rát nhẹ", "Lòng bàn tay chân nóng", "Miệng khô", "Mạch tế sác"],
    pdt: "Tư âm thanh nhiệt",
    bt: "Lục vị địa hoàng hoàn",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Phục linh 12g"]
  },
  "bang_quang_khi_tre": {
    stt: 843,
    hc: "Bàng quang khí trệ",
    phanloai: ["Phủ Bàng quang", "Bình", "Thực", "Khí trệ"],
    tc: ["Hạ vị trướng căng", "Tiểu tiện khó khăn không thông", "Mạch huyền"],
    pdt: "Hành khí lợi thủy",
    bt: "Trầm hương tán",
    tpbt: ["Trầm hương 4g", "Biển súc 10g", "Hoạt thạch 15g", "Mộc thông 8g", "Đương quy 12g"]
  },
  "bang_quang_nhiet_lo": {
    stt: 844,
    hc: "Bàng quang cao lâm",
    phanloai: ["Phủ Bàng quang", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Tiểu tiện đục như nước vo gạo", "Buốt rát", "Rêu lưỡi vàng nhớt", "Mạch nhu sác"],
    pdt: "Thanh nhiệt lợi thấp, hóa trọc",
    bt: "Thanh tâm liên tử ẩm",
    tpbt: ["Hoàng liên 8g", "Hoàng cầm 10g", "Mạch môn 12g", "Xa tiền tử 12g", "Thạch xương bồ 8g"]
  },
  "bang_quang_phong_thap": {
    stt: 845,
    hc: "Bàng quang phong thấp",
    phanloai: ["Phủ Bàng quang", "Bình", "Thực", "Phong thấp"],
    tc: ["Tiểu tiện bất định", "Đầu nặng người mỏi", "Mạch phù nhu"],
    pdt: "Khu phong trừ thấp, lợi niệu",
    bt: "Phòng phong thang",
    tpbt: ["Phòng phong 10g", "Tần giao 12g", "Đương quy 12g", "Xích thược 12g", "Ý dĩ 15g"]
  },
  "bang_quang_tan_hu": {
    stt: 846,
    hc: "Bàng quang tân dịch khuy tổn",
    phanloai: ["Phủ Bàng quang", "Nhiệt", "Hư", "Tân dịch hư"],
    tc: ["Tiểu tiện sẻn ít", "Miệng khô khát", "Lưỡi đỏ", "Mạch tế sác"],
    pdt: "Tư âm sinh tân, lợi niệu",
    bt: "Trư linh thang",
    tpbt: ["Trư linh 12g", "Phục linh 12g", "Trạch tả 10g", "Hoạt thạch 15g", "A giao 10g"]
  },
  "dam_thach_thap_nhiet": {
    stt: 847,
    hc: "Đảm thạch thấp nhiệt",
    phanloai: ["Can Đảm", "Nhiệt", "Thực", "Thấp nhiệt uất kết"],
    tc: ["Đau vùng sườn phải đột ngột", "Lan lên vai phải hoặc lưng", "Sốt rét run", "Da mắt vàng", "Mạch huyền sác"],
    pdt: "Thanh nhiệt lợi thấp, thông lợi đản đạo",
    bt: "Đại sài hồ thang hợp Nhân trần cao thang",
    tpbt: ["Sài hồ 12g", "Hoàng cầm 10g", "Bạch thược 12g", "Chỉ xác 8g", "Đại hoàng 8g", "Nhân trần 15g", "Chi tử 10g", "Kim tiền thảo 20g"]
  },
  "dom_khi_hu": {
    stt: 848,
    hc: "Đởm khí hư",
    phanloai: ["Phủ Đởm", "Bình", "Hư", "Khí hư"],
    tc: ["Hay khiếp sợ", "Dễ giật mình", "Tinh thần bất an", "Mạch tế nhược"],
    pdt: "Ích khí ôn đởm, an thần",
    bt: "An thần định chí hoàn",
    tpbt: ["Phục thần 12g", "Phục linh 12g", "Nhân sâm 10g", "Thạch xương bồ 8g", "Viễn chí 6g", "Long răng 12g"]
  },
  "dom_nhiet_uat": {
    stt: 849,
    hc: "Đởm nhiệt uất kết",
    phanloai: ["Phủ Đởm", "Nhiệt", "Thực", "Đàm hỏa"],
    tc: ["Miệng đắng họng khô", "Hay thở dài", "Tâm phiền bứt rứt", "Mạch huyền sác"],
    pdt: "Thanh tả đởm hỏa",
    bt: "Long đởm tả can thang",
    tpbt: ["Long đởm thảo 12g", "Hoàng cầm 10g", "Chi tử 10g", "Sài hồ 8g", "Sinh địa 16g"]
  },
  "dam_han_tre": {
    stt: 850,
    hc: "Đởm hàn trệ",
    phanloai: ["Phủ Đởm", "Hàn", "Thực", "Hàn trệ"],
    tc: ["Sườn phải đau âm ỉ", "Sợ lạnh tay chân lạnh", "Mạch trầm khẩn"],
    pdt: "Ôn kinh tán hàn, lý khí",
    bt: "Ôn đởm thang gia vị quế chi",
    tpbt: ["Bán hạ chế 10g", "Trần bì 6g", "Phục linh 12g", "Quế chi 8g", "Can khương 6g"]
  },
  "dam_huyet_u": {
    stt: 851,
    hc: "Đởm lạc huyết ứ",
    phanloai: ["Phủ Đởm", "Bình", "Thực", "Huyết ứ"],
    tc: ["Sườn phải đau nhói cố định", "Cự án", "Chất lưỡi tím", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ",
    bt: "Huyết phủ trục ứ thang",
    tpbt: ["Đương quy 12g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Sài hồ 8g"]
  },
  "dam_vi_bat_hoa": {
    stt: 852,
    hc: "Can Đởm bất hòa",
    phanloai: ["Phủ Đởm", "Bình", "Thực", "Khí trệ"],
    tc: ["Miệng đắng sườn đau", "Buồn nôn ăn kém", "Mạch huyền"],
    pdt: "Sơ can hòa đởm",
    bt: "Tiểu sài hồ thang",
    tpbt: ["Sài hồ 12g", "Hoàng cầm 10g", "Bán hạ chế 10g", "Đảng sâm 12g", "Cam thảo 6g", "Sinh khương 6g", "Đại táo 4quả"]
  },
  "dam_thap_tru": {
    stt: 853,
    hc: "Đởm thấp trệ",
    phanloai: ["Phủ Đởm", "Bình", "Thực", "Thấp trệ"],
    tc: ["Đầu nặng mắt mờ", "Miệng đắng dính", "Rêu lưỡi nhớt", "Mạch nhu"],
    pdt: "Hóa thấp tả đởm",
    bt: "Nhân trần cao thang",
    tpbt: ["Nhân trần 15g", "Chi tử 10g", "Đại hoàng 6g"]
  },
  "dom_am_hu": {
    stt: 854,
    hc: "Đởm âm hư",
    phanloai: ["Phủ Đởm", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Miệng khô đắng họng ráo", "Hồi hộp khó ngủ", "Mạch tế sác"],
    pdt: "Tư âm thanh đởm",
    bt: "Tư âm địa hoàng hoàn",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Miết giáp 12g"]
  },
  "dom_thuc_tich": {
    stt: 855,
    hc: "Đởm vị thực tích",
    phanloai: ["Phủ Đởm", "Bình", "Thực", "Thực tích"],
    tc: ["Sườn phải trướng đau", "Ăn không tiêu buồn nôn", "Mạch hoạt"],
    pdt: "Tiêu thực hóa trệ, hòa đởm",
    bt: "Bảo hòa hoàn",
    tpbt: ["Sơn tra 12g", "Thần khúc 10g", "Lai phục tử 10g", "Bán hạ chế 10g", "Trần bì 6g"]
  },
  "tam_tieu_han_thap": {
    stt: 856,
    hc: "Tam tiêu hàn thấp",
    phanloai: ["Phủ Tam tiêu", "Hàn", "Thực", "Hàn thấp"],
    tc: ["Thân thể nặng nề", "Bụng trướng nước", "Sợ lạnh tay chân lạnh", "Mạch trầm trì"],
    pdt: "Ôn dương hóa thấp, lợi thủy",
    bt: "Ngũ linh tán hợp Phụ tử lý trung",
    tpbt: ["Phục linh 12g", "Trư linh 10g", "Trạch tả 10g", "Bạch truật 12g", "Quế chi 8g", "Phụ tử chế 8g"]
  },
  "tam_tieu_khi_tre": {
    stt: 857,
    hc: "Tam tiêu khí trệ",
    phanloai: ["Phủ Tam tiêu", "Bình", "Thực", "Khí trệ"],
    tc: ["Tam tiêu đều trướng tức", "Ngực sườn bụng dưới đầy căng", "Mạch huyền"],
    pdt: "Hành khí khai uất, thông tam tiêu",
    bt: "Tứ ma thang",
    tpbt: ["Trần bì 6g", "Hương phụ 10g", "Ô dược 10g", "Binh lang 8g"]
  },
  "tam_tieu_thuy_thung": {
    stt: 858,
    hc: "Tam tiêu thủy thũng",
    phanloai: ["Phủ Tam tiêu", "Nhiệt", "Thực", "Thủy thũng"],
    tc: ["Phù toàn thân từ mặt xuống chân", "Tiểu tiện rất ít", "Rêu lưỡi trắng dày", "Mạch phù sác"],
    pdt: "Tuyên phế lợi thủy, tiêu thũng",
    bt: "Việt tí thang hợp Ngũ linh tán",
    tpbt: ["Ma hoàng 8g", "Thạch cao 15g", "Sinh khương 6g", "Phục linh 12g", "Trạch tả 10g"]
  },
  "tam_tieu_am_hu": {
    stt: 859,
    hc: "Tam tiêu âm hư",
    phanloai: ["Phủ Tam tiêu", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Tam tiêu khô rát", "Miệng khát tiểu ít đỏ", "Triều nhiệt", "Mạch tế sác"],
    pdt: "Tư âm thanh nhiệt",
    bt: "Lục vị địa hoàng hoàn",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Phục linh 12g"]
  },
  "tam_tieu_duong_hu": {
    stt: 860,
    hc: "Tam tiêu dương hư",
    phanloai: ["Phủ Tam tiêu", "Hàn", "Hư", "Dương hư"],
    tc: ["Sợ lạnh rõ rệt", "Tay chân lạnh ngắt", "Thủy thũng ấn lõm", "Mạch trầm tế"],
    pdt: "Ôn bổ tam tiêu dương khí",
    bt: "Hữu quy hoàn",
    tpbt: ["Phụ tử chế 8g", "Nhục quế 6g", "Thục địa 16g", "Sơn thù nhục 10g", "Đỗ trọng 12g"]
  },
  "tam_tieu_phong_nhiet": {
    stt: 861,
    hc: "Tam tiêu phong nhiệt",
    phanloai: ["Phủ Tam tiêu", "Nhiệt", "Thực", "Ngoại cảm"],
    tc: ["Sốt cao sợ gió", "Họng sưng đau", "Tiểu tiện vàng", "Mạch phù sác"],
    pdt: "Tân lương giải biểu, thanh nhiệt",
    bt: "Ngân kiều tán",
    tpbt: ["Kim ngân hoa 12g", "Liên kiều 10g", "Bạc hà 6g", "Cát cánh 8g", "Ngưu bàng tử 10g"]
  },
  "tam_tieu_huyet_u": {
    stt: 862,
    hc: "Tam tiêu huyết ứ",
    phanloai: ["Phủ Tam tiêu", "Bình", "Thực", "Huyết ứ"],
    tc: ["Toàn thân có chỗ đau nhói cố định", "Sắc mặt tối sạm", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, thông tam tiêu",
    bt: "Huyết phủ trục ứ thang",
    tpbt: ["Đương quy 12g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Xuyên khung 10g", "Sài hồ 8g"]
  },
  "tam_tieu_khi_hu": {
    stt: 863,
    hc: "Tam tiêu khí hư",
    phanloai: ["Phủ Tam tiêu", "Bình", "Hư", "Khí hư"],
    tc: ["Mệt mỏi toàn thân", "Đoản khí lười nói", "Sức đề kháng kém", "Mạch tế nhược"],
    pdt: "Bổ khí ích vệ",
    bt: "Ngọc bình phong tán hợp Tứ quân tử",
    tpbt: ["Hoàng kỳ 16g", "Bạch truật 12g", "Phòng phong 10g", "Đảng sâm 12g", "Phục linh 12g"]
  },
  "tam_tieu_thuc_tich": {
    stt: 864,
    hc: "Tam tiêu thực tích trệ",
    phanloai: ["Phủ Tam tiêu", "Bình", "Thực", "Thực tích"],
    tc: ["Bụng ngực trướng đầy", "Ăn uống không tiêu", "Đại tiện bất thường", "Mạch hoạt"],
    pdt: "Tiêu thực hóa trệ",
    bt: "Bảo hòa hoàn",
    tpbt: ["Sơn tra 12g", "Thần khúc 10g", "Lai phục tử 10g", "Bán hạ chế 10g", "Trần bì 6g"]
  },
  "ho_phong_tao_thuong_phe": {
    stt: 865,
    hc: "Ho phong táo thương phế",
    phanloai: ["Khái thấu", "Nhiệt", "Thực", "Phong táo"],
    tc: ["Ho khan ít đờm quánh dính khó khạc", "Họng khô đau rát", "Mũi khô môi khô", "Mạch phù sác"],
    pdt: "Sơ phong thanh phế, nhuận táo chỉ khái",
    bt: "Tang hạnh thang",
    tpbt: ["Tang diệp 10g", "Hạnh nhân 10g", "Bối mẫu 8g", "Sa sâm 12g", "Lô căn 15g", "Chi tử 8g"]
  },
  "ho_thu_nhiet_pham_phe": {
    stt: 866,
    hc: "Ho thử nhiệt phạm phế",
    phanloai: ["Khái thấu", "Nhiệt", "Thực", "Thử nhiệt"],
    tc: ["Ho khạc đờm vàng", "Sốt cao khát nước mệt mỏi", "Ra mồ hôi nhiều", "Mạch nhu sác"],
    pdt: "Thanh thử giải biểu, nhuận phế",
    bt: "Thanh thử ích khí thang",
    tpbt: ["Tây qua diệp 12g", "Thạch cao 15g", "Tri mẫu 10g", "Mạch môn 12g", "Đảng sâm 12g", "Hoàng kỳ 12g"]
  },
  "ho_dam_nhiet_noi_dinh": {
    stt: 867,
    hc: "Ho đàm nhiệt nội đình",
    phanloai: ["Khái thấu", "Nhiệt", "Thực", "Đàm nhiệt"],
    tc: ["Ho nhiều đờm vàng đặc sánh tanh hôi", "Ngực tức họng rát", "Sốt phiền táo", "Mạch hoạt sác"],
    pdt: "Thanh phế hóa đàm, chỉ khái",
    bt: "Thanh kim hóa đàm thang",
    tpbt: ["Hoàng cầm 10g", "Chi tử 10g", "Tri mẫu 10g", "Bối mẫu 8g", "Qua lâu 12g", "Tang bạch bì 12g"]
  },
  "ho_dam_han_tro_phe": {
    stt: 868,
    hc: "Ho đàm hàn trở phế",
    phanloai: ["Khái thấu", "Hàn", "Thực", "Đàm hàn"],
    tc: ["Ho đờm trắng loãng nhiều bọt", "Ngực tức sườn đầy", "Sợ lạnh tay chân lạnh", "Mạch huyền khẩn"],
    pdt: "Ôn phế hóa đàm, chỉ khái",
    bt: "Tiểu thanh long thang",
    tpbt: ["Ma hoàng 8g", "Quế chi 8g", "Can khương 6g", "Tế tân 3g", "Bán hạ chế 10g", "Ngũ vị tử 6g", "Bạch thược 10g"]
  },
  "ho_khat_huyet_lac_u": {
    stt: 869,
    hc: "Ho khái huyết lạc ứ",
    phanloai: ["Khái thấu", "Bình", "Thực", "Huyết ứ"],
    tc: ["Ho ngực đau nhói cố định", "Đờm lẫn máu thẫm", "Chất lưỡi tím", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, thông lạc",
    bt: "Huyết phủ trục ứ thang",
    tpbt: ["Đương quy 12g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Xuyên khung 10g", "Cát cánh 8g"]
  },
  "ho_phe_khi_khuy_ton": {
    stt: 870,
    hc: "Phế khí khuy tổn khái thấu",
    phanloai: ["Khái thấu", "Bình", "Hư", "Khí hư"],
    tc: ["Ho tiếng nhỏ đờm loãng trong", "Thở ngắn mệt mỏi", "Sợ gió dễ cảm", "Mạch tế nhược"],
    pdt: "Bổ ích phế khí, chỉ khái",
    bt: "Bổ phế thang",
    tpbt: ["Đảng sâm 12g", "Hoàng kỳ 16g", "Bạch truật 12g", "Tang bạch bì 12g", "Ngũ vị tử 6g", "Thục địa 16g"]
  },
  "ho_phe_am_noi_nhiet": {
    stt: 871,
    hc: "Phế âm nội nhiệt khái thấu",
    phanloai: ["Khái thấu", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Ho khan lâu ngày ít đờm hoặc đờm lẫn tia máu", "Gò má đỏ chiều nhiệt", "Đạo hãn", "Mạch tế sác"],
    pdt: "Tư âm nhuận phế, chỉ khái",
    bt: "Bách hợp cố kim thang",
    tpbt: ["Bách hợp 12g", "Sinh địa 16g", "Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Bối mẫu 10g", "Mạch môn 12g"]
  },
  "ho_can_hoa_pham_phe": {
    stt: 872,
    hc: "Can hỏa phạm phế khái thấu",
    phanloai: ["Khái thấu", "Nhiệt", "Thực", "Can hỏa"],
    tc: ["Ho từng cơn theo cảm xúc khi cáu gắt", "Ngực sườn trướng đau", "Miệng đắng", "Mạch huyền sác"],
    pdt: "Thanh can tả phế, chỉ khái",
    bt: "Đại cáp tán hợp Tiêu dao tán",
    tpbt: ["Thanh đại 6g", "Sài hồ 8g", "Bạch thược 12g", "Hoàng cầm 10g", "Mẫu lệ 15g"]
  },
  "ho_vi_nhiet_dong_phe": {
    stt: 873,
    hc: "Vị nhiệt động phế khái thấu",
    phanloai: ["Khái thấu", "Nhiệt", "Thực", "Vị nhiệt"],
    tc: ["Ho kèm đầy bụng ợ chua", "Miệng khát họng khô", "Ăn nhiều chóng đói", "Mạch sác"],
    pdt: "Thanh vị tả hỏa, hóa đàm chỉ khái",
    bt: "Thanh vị tán hợp Nhị trần thang",
    tpbt: ["Hoàng liên 8g", "Thăng ma 6g", "Sinh địa 16g", "Bán hạ chế 10g", "Trần bì 6g"]
  },
  "ho_than_duong_hu_suyen": {
    stt: 874,
    hc: "Thận dương hư suy khái thấu",
    phanloai: ["Khái thấu", "Hàn", "Hư", "Thận dương hư"],
    tc: ["Ho hen lâu ngày thở gấp khi vận động", "Lưng mỏi chân lạnh", "Đoản khí", "Mạch trầm tế"],
    pdt: "Ôn bổ thận dương, nạp khí định suyễn",
    bt: "Kim quỹ thận khí hoàn",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Đỗ trọng 12g", "Phụ tử chế 8g", "Nhục quế 6g", "Hải mã 6g"]
  },
  "ho_han_am_noi_dinh": {
    stt: 875,
    hc: "Hàn ẩm nội đình khái thấu",
    phanloai: ["Khái thấu", "Hàn", "Thực", "Hàn ẩm"],
    tc: ["Ho đờm loãng trắng nhiều bọt", "Nằm ngửa không được", "Ngực tức", "Mạch huyền khẩn"],
    pdt: "Ôn dương hóa ẩm, chỉ khái",
    bt: "Linh quý truật cam thang",
    tpbt: ["Phục linh 15g", "Quế chi 10g", "Bạch truật 12g", "Cam thảo 6g"]
  },
  "ho_lao_khai_am_hu": {
    stt: 876,
    hc: "Lão khái thận hư khái thấu",
    phanloai: ["Khái thấu", "Bình", "Hư", "Thận hư"],
    tc: ["Ho mạn tính ở người cao tuổi", "Lưng mỏi tiểu đêm", "Đoản khí", "Mạch trầm tế"],
    pdt: "Bổ thận ích phế",
    bt: "Bổ phế thang hợp Lục vị",
    tpbt: ["Đảng sâm 12g", "Hoàng kỳ 16g", "Thục địa 16g", "Sơn thù nhục 8g", "Ngũ vị tử 6g"]
  },
  "ho_ky_uu_phe_khi_tre": {
    stt: 877,
    hc: "Khí uất phế trệ khái thấu",
    phanloai: ["Khái thấu", "Bình", "Thực", "Khí trệ"],
    tc: ["Ho từng cơn co thắt", "Ngực tức hay thở dài", "Tinh thần u uất", "Mạch huyền"],
    pdt: "Lý khí giải uất, chỉ khái",
    bt: "Tứ ma thang gia giảm",
    tpbt: ["Trần bì 6g", "Hương phụ 10g", "Ô dược 10g", "Binh lang 8g", "Hạnh nhân 10g"]
  },
  "ho_phong_thap_pham_phe": {
    stt: 878,
    hc: "Phong thấp phạm phế khái thấu",
    phanloai: ["Khái thấu", "Bình", "Thực", "Phong thấp"],
    tc: ["Ho khạc đờm dính", "Đầu nặng như đội khăn", "Ngực tức nặng nề", "Mạch nhu"],
    pdt: "Khu phong hóa thấp, tuyên phế",
    bt: "Tam nhân thang",
    tpbt: ["Hạnh nhân 10g", "Ý dĩ 15g", "Bạch đậu khấu 8g", "Hậu phác 10g", "Bán hạ chế 10g"]
  },
  "ho_vi_truong_thuc_tich": {
    stt: 879,
    hc: "Vị tràng thực tích khái thấu",
    phanloai: ["Khái thấu", "Bình", "Thực", "Thực tích"],
    tc: ["Ho kèm đầy bụng sau ăn", "Ợ chua buồn nôn", "Rêu lưỡi dày", "Mạch hoạt"],
    pdt: "Tiêu thực hóa tích, chỉ khái",
    bt: "Bảo hòa hoàn",
    tpbt: ["Sơn tra 12g", "Thần khúc 10g", "Lai phục tử 10g", "Bán hạ chế 10g", "Trần bì 6g"]
  },
  "ho_thu_tao_thuong_phe": {
    stt: 880,
    hc: "Thử táo thương phế khái thấu",
    phanloai: ["Khái thấu", "Nhiệt", "Thực", "Thử táo"],
    tc: ["Ho khan rát họng mùa hè thu", "Khát nước tiểu vàng", "Mạch phù sác"],
    pdt: "Thanh thử nhuận táo",
    bt: "Thanh táo cứu phế thang",
    tpbt: ["Tang diệp 10g", "Thạch cao 15g", "Hạnh nhân 10g", "Mạch môn 12g", "A giao 10g", "Hỏa ma nhân 10g"]
  },
  "ho_am_hu_hoa_vuong": {
    stt: 881,
    hc: "Âm hư hỏa vượng khái thấu",
    phanloai: ["Khái thấu", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Ho khan rát họng về đêm", "Đạo hãn triều nhiệt", "Mạch tế sác"],
    pdt: "Dưỡng âm thanh phế",
    bt: "Dưỡng âm thanh phế thang",
    tpbt: ["Sinh địa 16g", "Mạch môn 12g", "Bối mẫu 8g", "Mẫu đơn bì 10g", "Địa cốt bì 12g"]
  },
  "ho_khi_huyet_luon_hu": {
    stt: 882,
    hc: "Khí huyết lưỡng hư khái thấu",
    phanloai: ["Khái thấu", "Bình", "Hư", "Khí huyết hư"],
    tc: ["Ho kéo dài mệt mỏi sắc mặt nhợt", "Chóng mặt", "Mạch tế nhược"],
    pdt: "Bổ ích khí huyết, chỉ khái",
    bt: "Thập toàn đại bổ thang",
    tpbt: ["Đảng sâm 12g", "Hoàng kỳ 16g", "Thục địa 16g", "Đương quy 12g", "Bạch thược 12g"]
  },
  "tiet_ta_thu_thap": {
    stt: 883,
    hc: "Tiết tả thử thấp",
    phanloai: ["Tiết tả", "Nhiệt", "Thực", "Thử thấp"],
    tc: ["Tiêu chảy mùa hè phân tóe nước", "Sốt khát nước mệt mỏi", "Nặng đầu tức ngực", "Mạch nhu sác"],
    pdt: "Thanh thử hóa thấp, hòa vị",
    bt: "Thanh thử ích khí thang",
    tpbt: ["Tây qua diệp 12g", "Hoàng liên 6g", "Mạch môn 12g", "Đảng sâm 12g", "Trúc diệp 10g", "Thạch hộc 12g"]
  },
  "tiet_ta_thuc_tich": {
    stt: 884,
    hc: "Tiết tả thực tích",
    phanloai: ["Tiết tả", "Bình", "Thực", "Thực tích"],
    tc: ["Tiêu chảy phân thối khắm", "Bụng trướng đau sau giảm", "Ợ hơi chua hôi", "Mạch hoạt"],
    pdt: "Tiêu thực hóa trệ, đạo trệ chỉ tả",
    bt: "Bảo hòa hoàn",
    tpbt: ["Sơn tra 12g", "Thần khúc 10g", "Lai phục tử 10g", "Bán hạ chế 10g", "Trần bì 6g", "Phục linh 12g"]
  },
  "tiet_ta_can_ty_bat_hoa": {
    stt: 885,
    hc: "Can tỳ bất hòa tiết tả",
    phanloai: ["Tiết tả", "Bình", "Thực", "Thống tả"],
    tc: ["Đau bụng muốn đi ngoài ngay sau đau", "Đi xong đỡ đau", "Hay cáu gắt trướng sườn", "Mạch huyền"],
    pdt: "Sơ can kiện tỳ, thống tả",
    bt: "Thống tả yếu phương",
    tpbt: ["Bạch truật 16g", "Bạch thược 12g", "Trần bì 6g", "Phòng phong 8g"]
  },
  "tiet_ta_ty_khi_hu": {
    stt: 886,
    hc: "Tỳ khí hư tiết tả",
    phanloai: ["Tiết tả", "Bình", "Hư", "Khí hư"],
    tc: ["Tiêu chảy mạn tính ăn kém", "Mệt mỏi chân tay rã rời", "Sắc mặt vàng úa", "Mạch tế nhược"],
    pdt: "Kiện tỳ ích khí, chỉ tả",
    bt: "Sâm linh bạch truật tán",
    tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Cam thảo 6g", "Hoài sơn 12g", "Ý dĩ 15g", "Bạch biển đậu 12g"]
  },
  "tiet_ta_ty_duong_hu": {
    stt: 887,
    hc: "Tỳ dương hư tiết tả",
    phanloai: ["Tiết tả", "Hàn", "Hư", "Dương hư"],
    tc: ["Tiêu chảy phân sống ăn đồ lạnh là đi", "Bụng lạnh đau thích chườm ấm", "Chân tay lạnh", "Mạch trầm trì"],
    pdt: "Ôn trung kiện tỳ, tán hàn chỉ tả",
    bt: "Lý trung hoàn",
    tpbt: ["Đảng sâm 12g", "Can khương 8g", "Bạch truật 12g", "Cam thảo 6g"]
  },
  "tiet_ta_ngu_canh_ta": {
    stt: 888,
    hc: "Ngũ canh tả (Thận dương hư)",
    phanloai: ["Tiết tả", "Hàn", "Hư", "Thận dương hư"],
    tc: ["Tiêu chảy vào lúc sáng sớm (5h sáng)", "Bụng lạnh đau sôi bụng", "Thắt lưng mỏi yếu", "Mạch trầm tế"],
    pdt: "Ôn bổ tỳ thận, sáp trường chỉ tả",
    bt: "Tứ thần hoàn",
    tpbt: ["Bổ cốt chỉ 12g", "Ngô thù du 6g", "Nhục đậu khấu 10g", "Ngũ vị tử 6g", "Sinh khương 6g", "Đại táo 4quả"]
  },
  "tiet_ta_khi_ham": {
    stt: 889,
    hc: "Tỳ khí hạ hãm tiết tả",
    phanloai: ["Tiết tả", "Bình", "Hư", "Khí hãm"],
    tc: ["Tiêu chảy kéo dài kèm sa trực tràng", "Bụng dưới nặng tức", "Mệt mỏi đoản khí", "Mạch nhược"],
    pdt: "Bổ khí thăng dương, nhiếp trọc",
    bt: "Bổ trung ích khí thang",
    tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Bạch truật 12g", "Cam thảo 6g", "Trần bì 6g", "Sài hồ 6g", "Thăng ma 6g", "Đương quy 12g"]
  },
  "tiet_ta_dam_troc": {
    stt: 890,
    hc: "Đàm trọc trở trệ tiết tả",
    phanloai: ["Tiết tả", "Bình", "Thực", "Đàm trọc"],
    tc: ["Tiêu chảy phân nhầy dính", "Đầu nặng người mỏi", "Rêu lưỡi nhớt dày", "Mạch nhu nhược"],
    pdt: "Hóa thấp trừ đàm, chỉ tả",
    bt: "Bình vị tán hợp Nhị trần thang",
    tpbt: ["Thương truật 10g", "Hậu phác 10g", "Trần bì 6g", "Bán hạ chế 10g", "Phục linh 12g"]
  },
  "tiet_ta_huyet_u": {
    stt: 891,
    hc: "Trường lạc huyết ứ tiết tả",
    phanloai: ["Tiết tả", "Bình", "Thực", "Huyết ứ"],
    tc: ["Bụng đau nhói cố định kèm tiêu chảy", "Chất lưỡi tím tối", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, thông lạc",
    bt: "Huyết phủ trục ứ thang",
    tpbt: ["Đương quy 12g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Xuyên khung 10g", "Sài hồ 8g"]
  },
  "tiet_ta_vi_han_tich": {
    stt: 892,
    hc: "Vị hàn tích trệ tiết tả",
    phanloai: ["Tiết tả", "Hàn", "Thực", "Hàn tích"],
    tc: ["Tiêu chảy do nhiễm lạnh ăn đồ sống lạnh", "Bụng quặn đau thích ấm", "Mạch trầm khẩn"],
    pdt: "Ôn vị tán hàn, tiêu tích",
    bt: "Hương sa bình vị tán",
    tpbt: ["Hương phụ 10g", "Sa nhân 6g", "Thương truật 10g", "Hậu phác 10g", "Trần bì 6g"]
  },
  "tiet_ta_vi_khi_nghich": {
    stt: 893,
    hc: "Vị khí thượng nghịch tiết tả",
    phanloai: ["Tiết tả", "Bình", "Thực", "Khí nghịch"],
    tc: ["Tiêu chảy kèm buồn nôn nôn mửa", "Nấc cụt trướng bụng", "Mạch huyền hoạt"],
    pdt: "Giáng nghịch hóa trọc, chỉ tả",
    bt: "Bán hạ sái tâm thang",
    tpbt: ["Bán hạ chế 10g", "Hoàng cầm 10g", "Đảng sâm 12g", "Can khương 6g", "Cam thảo 6g", "Hoàng liên 6g"]
  },
  "tiet_ta_am_duong_luong_hu": {
    stt: 894,
    hc: "Tỳ thận âm dương lưỡng hư tiết tả",
    phanloai: ["Tiết tả", "Bình", "Hư", "Âm dương lưỡng hư"],
    tc: ["Tiêu chảy mạn tính gầy sút", "Vừa sợ lạnh vừa lòng bàn tay chân nóng", "Mạch trầm tế sác"],
    pdt: "Âm dương song bổ, sáp trường",
    bt: "Chân vũ thang hợp Tứ thần hoàn",
    tpbt: ["Phụ tử chế 8g", "Bạch truật 12g", "Phục linh 12g", "Bổ cốt chỉ 12g", "Ngũ vị tử 6g"]
  },
  "tiet_ta_khi_am_luong_hu": {
    stt: 895,
    hc: "Khí âm lưỡng hư tiết tả",
    phanloai: ["Tiết tả", "Nhiệt", "Hư", "Khí âm hư"],
    tc: ["Tiêu chảy lâu ngày miệng khô khát", "Mệt mỏi đoản khí", "Lưỡi đỏ ít rêu", "Mạch tế sác"],
    pdt: "Ích khí dưỡng âm, sinh tân chỉ tả",
    bt: "Sinh mạch tán hợp Sâm linh bạch truật",
    tpbt: ["Nhân sâm 10g", "Mạch môn 12g", "Ngũ vị tử 6g", "Đảng sâm 12g", "Bạch truật 12g"]
  },
  "tiet_ta_phong_ta_khon_ty": {
    stt: 896,
    hc: "Phong tà khốn tỳ tiết tả",
    phanloai: ["Tiết tả", "Bình", "Thực", "Phong thấp"],
    tc: ["Tiêu chảy kèm đau đầu sợ gió", "Đau mỏi người", "Mạch phù nhu"],
    pdt: "Sơ phong hóa thấp, kiện tỳ",
    bt: "Kinh giới liên kiều thang gia vị",
    tpbt: ["Kinh giới 10g", "Phòng phong 10g", "Thương truật 10g", "Hậu phác 10g", "Bạch truật 12g"]
  },
  "tiet_ta_nhiet_doc_thinh": {
    stt: 897,
    hc: "Nhiệt độc thịnh tiết tả",
    phanloai: ["Tiết tả", "Nhiệt", "Thực", "Nhiệt độc"],
    tc: ["Tiêu chảy phân máu mủ nhầy", "Sốt cao bứt rứt mót rặn dữ dội", "Mạch sác lực"],
    pdt: "Thanh nhiệt giải độc, lương huyết hóa thấp",
    bt: "Bạch đầu ông thang",
    tpbt: ["Bạch đầu ông 15g", "Hoàng liên 8g", "Hoàng bá 10g", "Tần giao 10g"]
  },
  "tiet_ta_lao_suy_tuan_hoan": {
    stt: 898,
    hc: "Lão suy tỳ thận hư suy tiết tả",
    phanloai: ["Tiết tả", "Bình", "Hư", "Lão suy"],
    tc: ["Người cao tuổi tiêu chảy mạn tính", "Sức lực suy kiệt chân tay yếu", "Mạch tế nhược vô lực"],
    pdt: "Ôn bổ tỳ thận, cố thoát",
    bt: "Sâm phụ thang hợp Tứ thần hoàn",
    tpbt: ["Nhân sâm 12g", "Phụ tử chế 8g", "Bổ cốt chỉ 12g", "Ngô thù du 6g", "Phục linh 12g"]
  },
  "tiet_ta_can_vi_bat_hoa": {
    stt: 899,
    hc: "Can vị bất hòa tiết tả",
    phanloai: ["Tiết tả", "Bình", "Thực", "Khí trệ"],
    tc: ["Tiêu chảy do tức giận", "Đau vùng thượng vị lan sườn", "Ợ hơi", "Mạch huyền"],
    pdt: "Sơ can hòa vị, chỉ tả",
    bt: "Tứ nghịch tán hợp Bình vị tán",
    tpbt: ["Sài hồ 8g", "Bạch thược 12g", "Chỉ thực 8g", "Cam thảo 6g", "Thương truật 10g", "Hậu phác 10g"]
  },
  "tiet_ta_tan_dich_hao_ton": {
    stt: 900,
    hc: "Tân dịch hao tổn tiết tả",
    phanloai: ["Tiết tả", "Nhiệt", "Hư", "Tân dịch khuy tổn"],
    tc: ["Tiêu chảy nhiều lần mất nước", "Miệng khô khát da khô", "Mạch tế sác"],
    pdt: "Sinh tân dưỡng dịch, chỉ tả",
    bt: "Tăng dịch thang",
    tpbt: ["Sinh địa 16g", "Mạch môn 12g", "Huyền sâm 12g", "Bạch thược 12g"]
  },
  "phe_khi_am_luong_hu": {
    stt: 901,
    hc: "Phế khí âm lưỡng hư",
    phanloai: ["Tạng Phế", "Bình", "Hư", "Khí âm lưỡng hư"],
    tc: ["Ho khan ít đờm mệt mỏi", "Thở ngắn tiếng nói nhỏ", "Miệng khô gò má đỏ", "Mạch tế sác vô lực"],
    pdt: "Ích khí dưỡng âm, nhuận phế",
    bt: "Sinh mạch tán hợp Bổ phế thang",
    tpbt: ["Nhân sâm 10g", "Mạch môn 12g", "Ngũ vị tử 6g", "Đảng sâm 12g", "Hoàng kỳ 16g", "Thục địa 16g"]
  },
  "phe_lac_huyet_u_tre": {
    stt: 902,
    hc: "Phế lạc huyết ứ trệ",
    phanloai: ["Tạng Phế", "Bình", "Thực", "Huyết ứ"],
    tc: ["Ngực đau nhói cố định", "Ho khạc đờm lẫn máu", "Chất lưỡi tím tối", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, thông lạc",
    bt: "Huyết phủ trục ứ thang",
    tpbt: ["Đương quy 12g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Xuyên khung 10g", "Cát cánh 8g"]
  },
  "phe_vi_bat_hoa": {
    stt: 903,
    hc: "Phế Vị bất hòa",
    phanloai: ["Tạng Phế", "Bình", "Thực", "Khí trệ"],
    tc: ["Ho kèm đầy bụng ợ hơi", "Ăn kém", "Mạch huyền"],
    pdt: "Tuyên phế hòa vị",
    bt: "Tân ma thang hợp Nhị trần thang",
    tpbt: ["Ma hoàng 6g", "Hạnh nhân 10g", "Bán hạ chế 10g", "Trần bì 6g", "Phục linh 12g"]
  },
  "phe_than_am_hu_phe": {
    stt: 904,
    hc: "Phế Thận âm hư",
    phanloai: ["Tạng Phế", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Ho khan lâu ngày gò má đỏ", "Đau lưng mỏi gối đạo hãn", "Mạch tế sác"],
    pdt: "Tư dưỡng phế thận âm",
    bt: "Bách hợp cố kim thang hợp Lục vị địa hoàng hoàn",
    tpbt: ["Bách hợp 12g", "Sinh địa 16g", "Thục địa 16g", "Sơn thù nhục 8g", "Mạch môn 12g", "Bối mẫu 10g"]
  },
  "phe_khi_trie_nghich": {
    stt: 905,
    hc: "Phế khí thượng nghịch",
    phanloai: ["Tạng Phế", "Bình", "Thực", "Khí nghịch"],
    tc: ["Ho hen thở gấp tức ngực", "Không nằm ngửa được", "Mạch huyền hoạt"],
    pdt: "Tuyên phế giáng nghịch, bình suyễn",
    bt: "Tô tử giáng khí thang",
    tpbt: ["Tô tử 10g", "Bán hạ chế 10g", "Tiền hồ 10g", "Hậu phác 10g", "Đương quy 12g", "Quế tâm 6g"]
  },
  "phe_nhiet_dam_ung": {
    stt: 906,
    hc: "Phế nhiệt đàm ủng",
    phanloai: ["Tạng Phế", "Nhiệt", "Thực", "Đàm nhiệt"],
    tc: ["Ho đờm vàng đặc sánh sốt cao", "Ngực tức", "Mạch hoạt sác"],
    pdt: "Thanh phế hóa đàm",
    bt: "Thanh kim hóa đàm thang",
    tpbt: ["Hoàng cầm 10g", "Chi tử 10g", "Tri mẫu 10g", "Bối mẫu 10g", "Qua lâu nhân 12g", "Tang bạch bì 12g"]
  },
  "phe_han_dam_sthis": {
    stt: 907,
    hc: "Phế hàn đàm trệ",
    phanloai: ["Tạng Phế", "Hàn", "Thực", "Đàm hàn"],
    tc: ["Ho đờm trắng loãng nhiều", "Sợ lạnh tay chân lạnh", "Mạch trầm huyền"],
    pdt: "Ôn phế hóa đàm",
    bt: "Tiểu thanh long thang",
    tpbt: ["Ma hoàng 8g", "Quế chi 8g", "Can khương 6g", "Tế tân 4g", "Bán hạ chế 10g", "Ngũ vị tử 6g"]
  },
  "phe_lac_khi_tret": {
    stt: 908,
    hc: "Phế lạc khí trệ",
    phanloai: ["Tạng Phế", "Bình", "Thực", "Khí trệ"],
    tc: ["Ngực tức thở ngắn", "Ho hắng", "Mạch huyền"],
    pdt: "Tuyên phế lý khí",
    bt: "Tứ ma thang",
    tpbt: ["Trần bì 6g", "Hương phụ 10g", "Ô dược 10g", "Binh lang 8g"]
  },
  "phe_khi_khuy_khai": {
    stt: 909,
    hc: "Phế khí khuy hư",
    phanloai: ["Tạng Phế", "Bình", "Hư", "Khí hư"],
    tc: ["Ho tiếng nhỏ đờm loãng", "Thở ngắn tự hãn", "Mạch tế nhược"],
    pdt: "Bổ ích phế khí",
    bt: "Bổ phế thang",
    tpbt: ["Đảng sâm 12g", "Hoàng kỳ 16g", "Bạch truật 12g", "Tang bạch bì 12g", "Ngũ vị tử 6g"]
  },
  "phe_am_khuy_ton": {
    stt: 910,
    hc: "Phế âm khuy tổn",
    phanloai: ["Tạng Phế", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Ho khan ít đờm chiều nhiệt đạo hãn", "Mạch tế sác"],
    pdt: "Tư âm nhuận phế",
    bt: "Bách hợp cố kim thang",
    tpbt: ["Bách hợp 12g", "Sinh địa 16g", "Thục địa 16g", "Đương quy 12g", "Mạch môn 12g"]
  },
  "phe_khi_vuc_thoat": {
    stt: 911,
    hc: "Phế khí dục thoát",
    phanloai: ["Tạng Phế", "Hàn", "Hư", "Khí hư thoát"],
    tc: ["Thở gấp mồ hôi đầm đìa tay chân lạnh", "Mạch vi dục tuyệt"],
    pdt: "Ích khí cố thoát, cứu nghịch",
    bt: "Sâm phụ thang",
    tpbt: ["Nhân sâm 12g", "Hắc phụ tử 10g"]
  },
  "phong_han_thuc_phe": {
    stt: 912,
    hc: "Phong hàn thúc phế",
    phanloai: ["Tạng Phế", "Hàn", "Thực", "Ngoại cảm"],
    tc: ["Ho ngứa cổ sợ lạnh sốt không mồ hôi", "Mạch phù khẩn"],
    pdt: "Sơ phong tán hàn",
    bt: "Tam ảo thang",
    tpbt: ["Ma hoàng 8g", "Hạnh nhân 10g", "Chích cam thảo 6g", "Sinh khương 6g"]
  },
  "phong_nhiet_pham_phe_chung": {
    stt: 913,
    hc: "Phong nhiệt phạm phế chứng",
    phanloai: ["Tạng Phế", "Nhiệt", "Thực", "Ngoại cảm"],
    tc: ["Sốt đau đầu ho đờm vàng", "Mạch phù sác"],
    pdt: "Sơ phong thanh nhiệt",
    bt: "Tang cúc ẩm",
    tpbt: ["Tang diệp 12g", "Cúc hoa 10g", "Hạnh nhân 10g", "Cát cánh 8g", "Liên kiều 10g"]
  },
  "tao_nhiet_pham_phe": {
    stt: 914,
    hc: "Táo nhiệt phạm phế",
    phanloai: ["Tạng Phế", "Nhiệt", "Thực", "Táo nhiệt"],
    tc: ["Ho khan không đờm họng rát", "Mạch sác"],
    pdt: "Thanh nhiệt nhuận táo",
    bt: "Tang hạnh thang",
    tpbt: ["Tang diệp 12g", "Hạnh nhân 10g", "Bối mẫu 10g", "Sa sâm 12g", "Lô căn 12g"]
  },
  "thu_nhiet_thuong_phe": {
    stt: 915,
    hc: "Thử nhiệt thương phế",
    phanloai: ["Tạng Phế", "Nhiệt", "Thực", "Thử nhiệt"],
    tc: ["Ho khạc đờm vàng sốt cao khát nước", "Mạch nhu sác"],
    pdt: "Thanh thử giải biểu",
    bt: "Thanh thử ích khí thang",
    tpbt: ["Tây qua diệp 12g", "Thạch cao 15g", "Mạch môn 12g", "Đảng sâm 12g", "Hoàng kỳ 12g"]
  },
  "dam_nhiet_pham_phe": {
    stt: 916,
    hc: "Đàm nhiệt phạm phế",
    phanloai: ["Tạng Phế", "Nhiệt", "Thực", "Đàm nhiệt"],
    tc: ["Ho đờm vàng đặc ngực tức", "Mạch hoạt sác"],
    pdt: "Thanh phế hóa đàm",
    bt: "Thanh kim hóa đàm thang",
    tpbt: ["Hoàng cầm 10g", "Chi tử 10g", "Tri mẫu 10g", "Bối mẫu 10g", "Qua lâu nhân 12g"]
  },
  "dam_han_tro_phe": {
    stt: 917,
    hc: "Đàm hàn trở phế",
    phanloai: ["Tạng Phế", "Hàn", "Thực", "Đàm hàn"],
    tc: ["Ho đờm trắng loãng ngực tức", "Mạch huyền khẩn"],
    pdt: "Ôn phế hóa đàm",
    bt: "Tiểu thanh long thang",
    tpbt: ["Ma hoàng 8g", "Quế chi 8g", "Can khương 6g", "Tế tân 4g", "Bán hạ chế 10g"]
  },
  "huyet_u_pham_phe": {
    stt: 918,
    hc: "Huyết ứ phạm phế",
    phanloai: ["Tạng Phế", "Bình", "Thực", "Huyết ứ"],
    tc: ["Ngực đau nhói đờm lẫn máu", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ",
    bt: "Huyết phủ trục ứ thang",
    tpbt: ["Đương quy 12g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Xuyên khung 10g"]
  },
  "phe_than_duong_hu": {
    stt: 919,
    hc: "Phế Thận dương hư",
    phanloai: ["Tạng Phế", "Hàn", "Hư", "Phế Thận dương hư"],
    tc: ["Ho hen lâu ngày sợ lạnh chân tay lạnh", "Mạch trầm tế"],
    pdt: "Ôn bổ phế thận dương",
    bt: "Kim quỹ thận khí hoàn",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Đỗ trọng 12g", "Phụ tử chế 8g", "Nhục quế 6g"]
  },
  "phe_lac_huyet_u_dong": {
    stt: 920,
    hc: "Phế lạc huyết ứ đọng",
    phanloai: ["Tạng Phế", "Bình", "Thực", "Huyết ứ"],
    tc: ["Ngực đau thắt khạc đờm đen", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, thông lạc",
    bt: "Huyết phủ trục ứ thang gia giảm",
    tpbt: ["Đương quy 12g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Xuyên khung 10g", "Cát cánh 8g"]
  },
  "than_khi_am_luong_khuy": {
    stt: 921,
    hc: "Thận khí âm lưỡng khuy",
    phanloai: ["Tạng Thận", "Bình", "Hư", "Khí âm lưỡng hư"],
    tc: ["Đau lưng mỏi gối ù tai chóng mặt", "Triều nhiệt đạo hãn", "Tiểu đêm nhiều", "Mạch trầm tế sác"],
    pdt: "Ích khí tư âm, bổ thận",
    bt: "Lục vị địa hoàng hoàn hợp Sinh mạch tán",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Phục linh 12g", "Nhân sâm 10g", "Mạch môn 12g"]
  },
  "than_duong_khuy_tton_thuy": {
    stt: 922,
    hc: "Thận dương khuy tổn thủy thũng",
    phanloai: ["Tạng Thận", "Hàn", "Hư", "Thận dương hư thủy thũng"],
    tc: ["Phù thũng nửa người dưới ấn lõm", "Sợ lạnh tay chân lạnh", "Lưng mỏi", "Mạch trầm trì"],
    pdt: "Ôn bổ thận dương, hóa khí lợi thủy",
    bt: "Hữu quy hoàn hợp Chân vũ thang",
    tpbt: ["Phụ tử chế 8g", "Nhục quế 6g", "Thục địa 16g", "Sơn thù nhục 8g", "Bạch truật 12g", "Phục linh 12g", "Sinh khương 6g"]
  },
  "than_tinh_khuy_tton_tri": {
    stt: 923,
    hc: "Thận tinh khuy tổn trí tuệ giảm",
    phanloai: ["Tạng Thận", "Bình", "Hư", "Tinh hư"],
    tc: ["Trí nhớ giảm sút đầu choáng tai ù", "Tóc rụng răng lung lay", "Chân tay mỏi yếu", "Mạch trầm tế"],
    pdt: "Bổ thận ích tinh, điền tủy",
    bt: "Hà xa đại tạo hoàn",
    tpbt: ["Tử hà xe 10g", "Thục địa 16g", "Quy bản 12g", "Kỷ tử 12g", "Đỗ trọng 12g", "Sơn thù nhục 8g"]
  },
  "than_lac_huyet_u_trach": {
    stt: 924,
    hc: "Thận lạc huyết ứ trệ",
    phanloai: ["Tạng Thận", "Bình", "Thực", "Huyết ứ"],
    tc: ["Thắt lưng đau nhói cố định lan mông chân", "Chất lưỡi tím tối", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, thông lạc",
    bt: "Thân thống trục ứ thang",
    tpbt: ["Đương quy 12g", "Xuyên khung 10g", "Đào nhân 12g", "Hồng hoa 8g", "Ngưu tất 12g", "Địa long 10g"]
  },
  "than_khi_trie_nghich": {
    stt: 925,
    hc: "Thận khí thượng nghịch",
    phanloai: ["Tạng Thận", "Bình", "Thực", "Khí nghịch"],
    tc: ["Ho hen thở gấp khi vận động", "Lưng mỏi ngực tức", "Mạch trầm huyền"],
    pdt: "Ôn thận nạp khí, giáng nghịch",
    bt: "Kim quỹ thận khí hoàn gia giảm",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Đỗ trọng 12g", "Phụ tử chế 8g", "Nhục quế 6g", "Hải mã 1 đôi"]
  },
  "than_am_hu_hoa_vuong_chung": {
    stt: 926,
    hc: "Thận âm hư hỏa vượng chứng",
    phanloai: ["Tạng Thận", "Nhiệt", "Hư", "Âm hư hỏa vượng"],
    tc: ["Đau lưng mỏi gối lòng bàn tay chân nóng", "Triều nhiệt đạo hãn", "Di tinh", "Mạch tế sác"],
    pdt: "Tư âm giáng hỏa, thanh thận",
    bt: "Tri bá địa hoàng hoàn",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Phục linh 12g", "Tri mẫu 10g", "Hoàng bá 10g"]
  },
  "than_duong_hu_suy_kiet": {
    stt: 927,
    hc: "Thận dương hư suy kiệt",
    phanloai: ["Tạng Thận", "Hàn", "Hư", "Dương hư khí thoát"],
    tc: ["Sợ lạnh rõ rệt tay chân lạnh ngắt", "Mồ hôi vã lạnh", "Mạch vi dục tuyệt"],
    pdt: "Hồi dương cứu nghịch, ôn bổ thận dương",
    bt: "Sâm phụ thang",
    tpbt: ["Nhân sâm 12g", "Hắc phụ tử 12g"]
  },
  "than_nap_khi_vo_luc": {
    stt: 928,
    hc: "Thận nạp khí vô lực",
    phanloai: ["Tạng Thận", "Bình", "Hư", "Thận bất nạp khí"],
    tc: ["Ho hen lâu ngày thở gấp", "Hơi thở ngắn tiếng nói nhỏ", "Mạch trầm tế vô lực"],
    pdt: "Ôn thận nạp khí",
    bt: "Hà xa đại tạo hoàn hợp Kim quỹ thận khí hoàn",
    tpbt: ["Tử hà xe 10g", "Thục địa 16g", "Sơn thù nhục 8g", "Đỗ trọng 12g", "Phụ tử chế 8g", "Nhục quế 6g"]
  },
  "than_khi_bat_co_tieu": {
    stt: 929,
    hc: "Thận khí bất cố tiểu tiện",
    phanloai: ["Tạng Thận", "Bình", "Hư", "Thận khí hư"],
    tc: ["Tiểu tiện rỉ rả tiểu đêm nhiều lần", "Tiểu dầm không chủ động", "Mạch trầm tế nhược"],
    pdt: "Bổ thận cố sáp, súc niệu",
    bt: "Tang phiêu tiêu tán hợp Súc tuyền hoàn",
    tpbt: ["Tang phiêu tiêu 12g", "Ích trí nhân 10g", "Ô dược 10g", "Phục thần 12g", "Long cốt 15g", "Quy bản 12g"]
  },
  "than_am_duong_luong_khuy_chung": {
    stt: 930,
    hc: "Thận âm dương lưỡng khuy chứng",
    phanloai: ["Tạng Thận", "Bình", "Hư", "Âm dương lưỡng hư"],
    tc: ["Đau lưng mỏi gối vừa sợ lạnh vừa sốt nóng về chiều", "Tai ù chóng mặt", "Mạch trầm tế sác"],
    pdt: "Âm dương song bổ",
    bt: "Nhị tiên thang hợp Lục vị địa hoàng hoàn",
    tpbt: ["Tiên mao 10g", "Tiên linh tỳ 10g", "Đương quy 12g", "Ba kích 12g", "Thục địa 16g", "Sơn thù nhục 8g"]
  },
  "than_tinh_bat_tuc_phat_duc": {
    stt: 931,
    hc: "Thận tinh bất túc phát dục kém",
    phanloai: ["Tạng Thận", "Bình", "Hư", "Tinh hư"],
    tc: ["Thóp chậm liền xương mềm yếu", "Trí tuệ chậm phát triển", "Mạch trầm tế"],
    pdt: "Bổ thận ích tinh, điền tủy",
    bt: "Hà xa đại tạo hoàn",
    tpbt: ["Tử hà xe 10g", "Thục địa 16g", "Quy bản 12g", "Kỷ tử 12g", "Đỗ trọng 12g"]
  },
  "than_vi_bat_hoa_than": {
    stt: 932,
    hc: "Thận Vị bất hòa",
    phanloai: ["Tạng Thận", "Bình", "Hư thực thác tạp", "Thận Vị bất hòa"],
    tc: ["Đau lưng mỏi gối kèm buồn nôn ăn kém", "Sợ lạnh", "Mạch trầm tế"],
    pdt: "Ôn thận kiện vị",
    bt: "Hữu quy hoàn hợp Lương phương",
    tpbt: ["Phụ tử chế 8g", "Nhục quế 6g", "Thục địa 16g", "Đảng sâm 12g", "Can khương 6g"]
  },
  "than_tam_bat_giao_than": {
    stt: 933,
    hc: "Tâm Thận bất giao chứng",
    phanloai: ["Tạng Thận", "Nhiệt", "Hư thực thác tạp", "Tâm Thận bất giao"],
    tc: ["Hồi hộp mất ngủ bứt rứt", "Đầu choáng tai ù", "Lòng bàn tay chân nóng", "Mạch tế sác"],
    pdt: "Tư âm giáng hỏa, giao hội tâm thận",
    bt: "Giao thái hoàn",
    tpbt: ["Hoàng liên 6g", "Nhục quế 3g"]
  },
  "than_can_am_hu_than": {
    stt: 934,
    hc: "Can Thận âm hư chứng",
    phanloai: ["Tạng Thận", "Nhiệt", "Hư", "Can Thận âm hư"],
    tc: ["Đau lưng mỏi gối chóng mặt tai ù", "Mắt khô nhìn mờ", "Mạch tế sác"],
    pdt: "Tư bổ can thận âm",
    bt: "Kỷ cúc địa hoàng hoàn",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Kỷ tử 12g", "Cúc hoa 10g"]
  },
  "than_duong_hu_thuy_chieu": {
    stt: 935,
    hc: "Thận dương hư thủy thấp trệ",
    phanloai: ["Tạng Thận", "Hàn", "Hư", "Thận dương hư thủy thũng"],
    tc: ["Phù toàn thân nhất là nửa người dưới", "Bụng trướng nước", "Sợ lạnh", "Mạch trầm trì"],
    pdt: "Ôn dương lợi thủy",
    bt: "Chân vũ thang",
    tpbt: ["Hắc phụ tử 8g", "Bạch truật 12g", "Phục linh 12g", "Bạch thược 12g", "Sinh khương 6g"]
  },
  "than_khi_uat_trie_than": {
    stt: 936,
    hc: "Thận khí uất trệ",
    phanloai: ["Tạng Thận", "Bình", "Thực", "Khí trệ"],
    tc: ["Thắt lưng trướng đau tức", "Tiểu tiện không thông suốt", "Mạch huyền"],
    pdt: "Hành khí lợi thủy",
    bt: "Trầm hương tán",
    tpbt: ["Trầm hương 4g", "Biển súc 10g", "Hoạt thạch 15g", "Mộc thông 8g", "Đương quy 12g"]
  },
  "than_lac_khi_tret_than": {
    stt: 937,
    hc: "Thận lạc khí trệ",
    phanloai: ["Tạng Thận", "Bình", "Thực", "Khí trệ"],
    tc: ["Thắt lưng đau tức lan mông", "Mạch huyền"],
    pdt: "Hành khí thông lạc",
    bt: "Thiếu phúc trục ứ thang gia giảm",
    tpbt: ["Đương quy 12g", "Xuyên khung 10g", "Đào nhân 10g", "Hồng hoa 8g", "Ô dược 10g"]
  },
  "than_am_khuy_sinh_noi_nhiet": {
    stt: 938,
    hc: "Thận âm khuy tổn sinh nội nhiệt",
    phanloai: ["Tạng Thận", "Nhiệt", "Hư", "Âm hư nội nhiệt"],
    tc: ["Triều nhiệt đạo hãn lòng bàn tay chân nóng", "Miệng khô", "Mạch tế sác"],
    pdt: "Tư âm thanh nhiệt",
    bt: "Lục vị địa hoàng hoàn gia Tri mẫu Hoàng bá",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Phục linh 12g", "Tri mẫu 10g", "Hoàng bá 10g"]
  },
  "than_duong_khuy_ha_tieu": {
    stt: 939,
    hc: "Thận dương khuy tổn hạ tiêu hàn",
    phanloai: ["Tạng Thận", "Hàn", "Hư", "Thận dương hư"],
    tc: ["Đau bụng dưới lạnh sợ lạnh tay chân lạnh", "Tiểu trong dài", "Mạch trầm trì"],
    pdt: "Ôn bổ thận dương",
    bt: "Hữu quy hoàn",
    tpbt: ["Phụ tử chế 8g", "Nhục quế 6g", "Thục địa 16g", "Sơn thù nhục 8g", "Đỗ trọng 12g", "Kỷ tử 12g"]
  },
  "than_khi_huyet_luong_hu_than": {
    stt: 940,
    hc: "Thận khí huyết lưỡng hư",
    phanloai: ["Tạng Thận", "Bình", "Hư", "Khí huyết lưỡng hư"],
    tc: ["Thắt lưng mỏi yếu sắc mặt nhợt", "Mệt mỏi hoa mắt", "Mạch tế nhược"],
    pdt: "Bổ khí dưỡng huyết thận tạng",
    bt: "Thập toàn đại bổ thang",
    tpbt: ["Đảng sâm 12g", "Hoàng kỳ 16g", "Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g"]
  },
  "vi_khi_thu_nghich_nang": {
    stt: 941,
    hc: "Vị khí thượng nghịch nặng",
    phanloai: ["Phủ Vị", "Bình", "Thực", "Khí nghịch"],
    tc: ["Nấc cụt dữ dội liên tục", "Buồn nôn và nôn mửa thức ăn ra ngay", "Thượng vị trướng căng", "Mạch huyền hoạt"],
    pdt: "Giáng nghịch chỉ ẩu, hòa vị",
    bt: "Đại bán hạ thang",
    tpbt: ["Bán hạ chế 12g", "Nhân sâm 10g", "Mật ong 20g", "Can khương 6g"]
  },
  "vi_am_hu_hoa_vuong_vi": {
    stt: 942,
    hc: "Vị âm hư hỏa vượng",
    phanloai: ["Phủ Vị", "Nhiệt", "Hư", "Âm hư hỏa vượng"],
    tc: ["Thượng vị nóng rát đau âm ỉ", "Miệng khô khát thích uống nước lạnh", "Lưỡi đỏ ít rêu", "Mạch tế sác"],
    pdt: "Tư dưỡng vị âm, thanh nhiệt giáng hỏa",
    bt: "Ích vị thang gia Tri mẫu Hoàng bá",
    tpbt: ["Ngọc trúc 12g", "Sinh địa 16g", "Sa sâm 12g", "Mạch môn 12g", "Tri mẫu 10g", "Hoàng bá 10g"]
  },
  "vi_duong_hu_han_tre_vi": {
    stt: 943,
    hc: "Vị dương hư hàn trệ",
    phanloai: ["Phủ Vị", "Hàn", "Hư", "Dương hư"],
    tc: ["Thượng vị đau âm ỉ thích xoa thích ấm", "Nôn ra nước trong", "Tay chân không ấm", "Mạch trầm trì"],
    pdt: "Ôn vị tán hàn, kiện vị",
    bt: "Hoàng kỳ kiến trung thang hợp Ngô thù du thang",
    tpbt: ["Hoàng kỳ 16g", "Quế chi 8g", "Bạch thược 12g", "Cam thảo 6g", "Ngô thù du 6g", "Can khương 6g"]
  },
  "vi_lac_huyet_u_dau_that": {
    stt: 944,
    hc: "Vị lạc huyết ứ đau thắt",
    phanloai: ["Phủ Vị", "Bình", "Thực", "Huyết ứ"],
    tc: ["Thượng vị đau nhói cố định cự án", "Đau về đêm hoặc sau ăn", "Chất lưỡi tím tối", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, lý khí chỉ thống",
    bt: "Thất tiễu tán hợp Diên hồ sách tán",
    tpbt: ["Ngũ linh tử 10g", "Bồ hoàng 10g", "Diên hồ sách 10g", "Đương quy 12g", "Xích thược 12g", "Xuyên khung 10g"]
  },
  "vi_nhiet_thang_thuc_vi": {
    stt: 945,
    hc: "Vị nhiệt thặng thực",
    phanloai: ["Phủ Vị", "Nhiệt", "Thực", "Vị nhiệt"],
    tc: ["Thượng vị nóng rát đau ăn nhiều mau đói", "Miệng hôi khát nước", "Táo bón rêu vàng", "Mạch sác lực"],
    pdt: "Thanh vị tả hỏa, tiêu thực",
    bt: "Thanh vị tán hợp Điều vị thừa khí thang",
    tpbt: ["Hoàng liên 8g", "Thăng ma 6g", "Sinh địa 16g", "Mẫu đơn bì 10g", "Đại hoàng 8g", "Hậu phác 10g", "Mang tiêu 10g"]
  },
  "vi_han_ta_pham_vi_cap": {
    stt: 946,
    hc: "Vị hàn tà phạm vị cấp",
    phanloai: ["Phủ Vị", "Hàn", "Thực", "Ngoại cảm hàn"],
    tc: ["Thượng vị đột ngột đau quặn dữ dội", "Gặp lạnh đau tăng chườm ấm giảm", "Miệng không khát", "Mạch trầm khẩn"],
    pdt: "Ôn vị tán hàn, hành khí",
    bt: "Lương phương ngô thù du thang",
    tpbt: ["Ngô thù du 6g", "Can khương 6g", "Sinh khương 6g", "Đảng sâm 12g"]
  },
  "vi_khi_uat_tret_vi": {
    stt: 947,
    hc: "Vị khí uất trệ",
    phanloai: ["Phủ Vị", "Bình", "Thực", "Khí trệ"],
    tc: ["Thượng vị trướng đầy sau ăn", "Ợ hơi ợ chua", "Tinh thần u uất", "Mạch huyền"],
    pdt: "Hành khí hòa vị",
    bt: "Việt cúc hoàn hợp Hương sa bình vị tán",
    tpbt: ["Thương truật 10g", "Hương phụ 10g", "Xuyên khung 10g", "Thần khúc 10g", "Chi tử 10g", "Sa nhân 6g"]
  },
  "vi_thuc_tich_dinh_tre_vi": {
    stt: 948,
    hc: "Vị thực tích đình trệ",
    phanloai: ["Phủ Vị", "Bình", "Thực", "Thực tích"],
    tc: ["Bụng trên trướng đau cự án", "Ợ hơi chua hôi thối", "Nôn ra thức ăn cũ", "Mạch hoạt"],
    pdt: "Tiêu thực hóa tích, giáng nghịch",
    bt: "Bảo hòa hoàn",
    tpbt: ["Sơn tra 12g", "Thần khúc 10g", "Lai phục tử 10g", "Bán hạ chế 10g", "Trần bì 6g", "Phục linh 12g"]
  },
  "vi_dam_troc_tro_trung_vi": {
    stt: 949,
    hc: "Vị đàm trọc trở trệ",
    phanloai: ["Phủ Vị", "Bình", "Thực", "Đàm trọc"],
    tc: ["Thượng vị trướng tức buồn nôn", "Đầu nặng hoa mắt đờm nhiều", "Rêu nhớt", "Mạch huyền hoạt"],
    pdt: "Táo thấp hóa đàm, hòa vị",
    bt: "Ôn đởm thang hợp Bình vị tán",
    tpbt: ["Bán hạ chế 10g", "Trần bì 6g", "Phục linh 12g", "Chỉ thực 8g", "Trúc nhự 10g", "Thương truật 10g"]
  },
  "vi_huyet_u_xuat_huyet_vi": {
    stt: 950,
    hc: "Vị huyết ứ xuất huyết",
    phanloai: ["Phủ Vị", "Bình", "Thực", "Huyết ứ"],
    tc: ["Nôn ra máu sẫm hoặc đi ngoài phân đen", "Thượng vị đau nhói cố định", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, lương huyết chỉ huyết",
    bt: "Thất tiễu tán hợp Tiểu hội ẩm",
    tpbt: ["Ngũ linh tử 10g", "Bồ hoàng 10g", "Đương quy 12g", "Xích thược 12g", "Hắc chi 10g", "A giao 10g"]
  },
  "vi_khi_am_luong_hu_vi": {
    stt: 951,
    hc: "Vị khí âm lưỡng hư",
    phanloai: ["Phủ Vị", "Bình", "Hư", "Khí âm lưỡng hư"],
    tc: ["Thượng vị đau âm ỉ miệng khô khát", "Mệt mỏi ăn kém", "Lưỡi đỏ ít rêu", "Mạch tế sác vô lực"],
    pdt: "Ích khí dưỡng âm, kiện vị",
    bt: "Ích vị thang hợp Tứ quân tử thang",
    tpbt: ["Ngọc trúc 12g", "Sinh địa 16g", "Sa sâm 12g", "Mạch môn 12g", "Đảng sâm 12g", "Bạch truật 12g"]
  },
  "vi_am_khuy_ton_sinh_tan_vi": {
    stt: 952,
    hc: "Vị âm khuy tổn sinh tân kém",
    phanloai: ["Phủ Vị", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Miệng khô họng khát thích uống nước mát", "Thượng vị nóng rát nhẹ", "Mạch tế sác"],
    pdt: "Tư dưỡng vị âm, sinh tân",
    bt: "Ích vị thang",
    tpbt: ["Ngọc trúc 12g", "Sinh địa 16g", "Sa sâm 12g", "Mạch môn 12g"]
  },
  "vi_thu_nhiet_pham_vi_vi": {
    stt: 953,
    hc: "Vị thử nhiệt phạm vị",
    phanloai: ["Phủ Vị", "Nhiệt", "Thực", "Thử nhiệt"],
    tc: ["Thượng vị nóng bức buồn nôn mùa hè", "Khát nước mệt mỏi", "Mạch nhu sác"],
    pdt: "Thanh thử hóa thấp, hòa vị",
    bt: "Thanh thử ích khí thang",
    tpbt: ["Tây qua diệp 12g", "Thạch cao 15g", "Mạch môn 12g", "Đảng sâm 12g", "Hoàng kỳ 12g", "Phục linh 12g"]
  },
  "vi_phong_han_pham_vi_vi": {
    stt: 954,
    hc: "Vị phong hàn phạm vị",
    phanloai: ["Phủ Vị", "Hàn", "Thực", "Ngoại cảm phong hàn"],
    tc: ["Thượng vị đau quặn kèm sốt sợ gió", "Đau đầu", "Mạch phù khẩn"],
    pdt: "Sơ phong tán hàn, ôn vị",
    bt: "Hương sa bình vị tán hợp Cát căn thang",
    tpbt: ["Hương phụ 10g", "Sa nhân 6g", "Thương truật 10g", "Cát căn 12g", "Ma hoàng 6g", "Sinh khương 6g"]
  },
  "vi_can_khi_pham_vi_chung": {
    stt: 955,
    hc: "Can khí phạm Vị chứng nặng",
    phanloai: ["Phủ Vị", "Bình", "Thực", "Khí trệ"],
    tc: ["Thượng vị trướng đau lan sườn ngực dữ dội", "Ợ hơi ợ chua nhiều", "Dễ cáu gắt", "Mạch huyền"],
    pdt: "Sơ can lý khí, hòa vị chỉ thống",
    bt: "Sài hồ sơ can tán hợp Tả kim hoàn",
    tpbt: ["Sài hồ 10g", "Chỉ xác 8g", "Bạch thược 12g", "Xuyên khung 10g", "Hoàng liên 6g", "Ngô thù du 3g"]
  },
  "vi_tam_bat_giao_vi": {
    stt: 956,
    hc: "Tâm Vị bất hòa",
    phanloai: ["Phủ Vị", "Nhiệt", "Hư thực thác tạp", "Tâm Vị bất hòa"],
    tc: ["Hồi hộp mất ngủ kèm thượng vị trướng đau", "Bứt rứt", "Mạch tế sác"],
    pdt: "An thần thanh tâm, hòa vị",
    bt: "Bán hạ sái tâm thang hợp Giao thái hoàn",
    tpbt: ["Bán hạ chế 10g", "Hoàng cầm 10g", "Đảng sâm 12g", "Can khương 6g", "Hoàng liên 6g", "Nhục quế 3g"]
  },
  "vi_ph_khuy_tton_vi": {
    stt: 957,
    hc: "Vị khí khuy nhược vô lực",
    phanloai: ["Phủ Vị", "Bình", "Hư", "Khí hư"],
    tc: ["Thượng vị đau âm ỉ sau ăn mệt mỏi", "Thích xoa ấm", "Mạch hư nhược"],
    pdt: "Ích khí kiện vị",
    bt: "Bổ trung ích khí thang",
    tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Bạch truật 12g", "Cam thảo 6g", "Trần bì 6g", "Sài hồ 6g"]
  },
  "vi_hoa_thinh_nhieu_loet_vi": {
    stt: 958,
    hc: "Vị hỏa thịnh gây lở loét",
    phanloai: ["Phủ Vị", "Nhiệt", "Thực", "Vị hỏa"],
    tc: ["Thượng vị nóng rát đau loét miệng lợi", "Hơi thở hôi khát nước", "Mạch sác lực"],
    pdt: "Thanh nhiệt tả hỏa, sinh cơ",
    bt: "Thanh vị tán hợp Bạch hổ thang",
    tpbt: ["Hoàng liên 8g", "Thăng ma 6g", "Sinh địa 16g", "Mẫu đơn bì 10g", "Thạch cao 20g", "Tri mẫu 10g"]
  },
  "vi_tan_dich_kho_kiet_vi": {
    stt: 959,
    hc: "Vị tân dịch khô kiệt",
    phanloai: ["Phủ Vị", "Nhiệt", "Hư", "Tân dịch khuy tổn"],
    tc: ["Miệng khô họng khát thích uống nước lạnh", "Đại tiện táo cứng", "Lưỡi đỏ", "Mạch tế sác"],
    pdt: "Tư âm sinh tân, nhuận táo",
    bt: "Tăng dịch thang",
    tpbt: ["Sinh địa 16g", "Mạch môn 12g", "Huyền sâm 12g"]
  },
  "vi_huyet_u_lac_dinh_vi": {
    stt: 960,
    hc: "Vị lạc huyết ứ trệ kinh mạn",
    phanloai: ["Phủ Vị", "Bình", "Thực", "Huyết ứ"],
    tc: ["Thượng vị đau mạn tính cố định cự án", "Sắc mặt sạm tối", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, thông lạc chỉ thống",
    bt: "Thất tiễu tán hợp Thiếu phúc trục ứ thang",
    tpbt: ["Ngũ linh tử 10g", "Bồ hoàng 10g", "Đương quy 12g", "Xuyên khung 10g", "Xích thược 12g", "Đào nhân 10g"]
  },
  "dai_trang_nhiet_ket_tao_bon": {
    stt: 961,
    hc: "Đại tràng nhiệt kết táo bón",
    phanloai: ["Phủ Đại tràng", "Nhiệt", "Thực", "Vị trường nhiệt kết"],
    tc: ["Đại tiện khô cứng nhiều ngày không đi", "Bụng trướng đau cự án", "Miệng hôi rêu vàng", "Mạch sác lực"],
    pdt: "Thanh nhiệt tả hỏa, nhuận táo thông tiện",
    bt: "Đại thừa khí thang",
    tpbt: ["Đại hoàng 12g", "Hậu phác 10g", "Mang tiêu 10g", "Chỉ thực 10g"]
  },
  "dai_trang_khi_tret_thong_tien": {
    stt: 962,
    hc: "Đại tràng khí trệ không thông",
    phanloai: ["Phủ Đại tràng", "Bình", "Thực", "Khí trệ"],
    tc: ["Bụng trướng đau cự án muốn đi mà không rặn được", "Đại tiện khó khăn", "Mạch huyền"],
    pdt: "Hành khí đạo trệ",
    bt: "Lục ma thang",
    tpbt: ["Đại hoàng 8g", "Binh lang 8g", "Trầm hương 4g", "Mộc hương 6g", "Chỉ xác 8g", "Ô dược 10g"]
  },
  "dai_trang_thap_nhiet_ha_luy": {
    stt: 963,
    hc: "Đại tràng thấp nhiệt lỵ tật",
    phanloai: ["Phủ Đại tràng", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Bụng quặn đau đại tiện nhầy máu mót rặn", "Hậu môn nóng rát", "Mạch nhu sác"],
    pdt: "Thanh nhiệt lợi thấp, điều khí chỉ lỵ",
    bt: "Thược dược thang",
    tpbt: ["Bạch thược 12g", "Đương quy 12g", "Hậu phác 10g", "Binh lang 8g", "Mộc hương 6g", "Cam thảo 6g", "Hoàng liên 8g", "Hoàng cầm 10g"]
  },
  "dai_trang_hu_han_phuc_thong": {
    stt: 964,
    hc: "Đại tràng hư hàn phúc thống",
    phanloai: ["Phủ Đại tràng", "Hàn", "Hư", "Hư hàn"],
    tc: ["Bụng lạnh đau thích chườm ấm", "Đại tiện lỏng loãng", "Chân tay lạnh", "Mạch trầm tế"],
    pdt: "Ôn trung tán hàn, sáp trường",
    bt: "Hoàng thổ thang",
    tpbt: ["Can địa hoàng 16g", "Cam thảo 6g", "Bạch truật 12g", "Phụ tử chế 8g", "A giao 10g", "Hoàng cầm 8g", "Xích thạch chi 15g"]
  },
  "dai_trang_am_hu_tao_ket": {
    stt: 965,
    hc: "Đại tràng âm hư táo kết",
    phanloai: ["Phủ Đại tràng", "Nhiệt", "Hư", "Âm hư tân dịch khô"],
    tc: ["Đại tiện khô cứng như phân dê nhiều ngày", "Miệng khô họng khát", "Lưỡi đỏ", "Mạch tế sác"],
    pdt: "Tư âm nhuận táo, thông tiện",
    bt: "Tăng dịch thang hợp Ma tử nhân hoàn",
    tpbt: ["Sinh địa 16g", "Mạch môn 12g", "Huyền sâm 12g", "Hỏa ma nhân 12g", "Hạnh nhân 10g", "Bạch thược 12g"]
  },
  "dai_trang_duong_hu_tien_tiet": {
    stt: 966,
    hc: "Đại tràng dương hư tiện tiết",
    phanloai: ["Phủ Đại tràng", "Hàn", "Hư", "Dương hư"],
    tc: ["Đại tiện lỏng nát kéo dài", "Bụng lạnh đau thích ấm", "Sợ lạnh", "Mạch trầm trì"],
    pdt: "Ôn bổ tỳ thận dương, chỉ tả",
    bt: "Tứ thần hoàn",
    tpbt: ["Bổ cốt chỉ 12g", "Ngô thù du 6g", "Nhục đậu khấu 10g", "Ngũ vị tử 6g", "Sinh khương 6g"]
  },
  "dai_trang_huyet_u_thong_ha": {
    stt: 967,
    hc: "Đại tràng huyết ứ thông hà",
    phanloai: ["Phủ Đại tràng", "Bình", "Thực", "Huyết ứ"],
    tc: ["Bụng dưới đau nhói cố định đại tiện ra máu sẫm", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, thông lạc",
    bt: "Huyết phủ trục ứ thang",
    tpbt: ["Đương quy 12g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Xuyên khung 10g", "Chỉ xác 8g"]
  },
  "dai_trang_khi_am_luong_hu": {
    stt: 968,
    hc: "Đại tràng khí âm lưỡng hư",
    phanloai: ["Phủ Đại tràng", "Bình", "Hư", "Khí âm lưỡng hư"],
    tc: ["Đại tiện táo hoặc lỏng mạn tính", "Miệng khô mệt mỏi", "Mạch tế sác vô lực"],
    pdt: "Ích khí dưỡng âm, nhuận tràng",
    bt: "Sinh mạch tán hợp Tăng dịch thang",
    tpbt: ["Nhân sâm 10g", "Mạch môn 12g", "Ngũ vị tử 6g", "Sinh địa 16g", "Huyền sâm 12g"]
  },
  "dai_trang_phong_nhiet_cam_mao": {
    stt: 969,
    hc: "Đại tràng phong nhiệt ngoại cảm",
    phanloai: ["Phủ Đại tràng", "Nhiệt", "Thực", "Ngoại cảm phong nhiệt"],
    tc: ["Sốt đau đầu đại tiện táo bón", "Họng rát", "Mạch phù sác"],
    pdt: "Sơ phong thanh nhiệt, thông tiện",
    bt: "Ngân kiều tán gia Đại hoàng",
    tpbt: ["Kim ngân hoa 12g", "Liên kiều 10g", "Bạc hà 6g", "Cát cánh 8g", "Đại hoàng 6g"]
  },
  "dai_trang_thu_nhiet_tiet_ta": {
    stt: 970,
    hc: "Đại tràng thử nhiệt tiết tả",
    phanloai: ["Phủ Đại tràng", "Nhiệt", "Thực", "Thử nhiệt"],
    tc: ["Tiêu chảy mùa hè phân tóe nước", "Khát nước mệt mỏi", "Mạch nhu sác"],
    pdt: "Thanh thử hóa thấp, chỉ tả",
    bt: "Thanh thử ích khí thang",
    tpbt: ["Tây qua diệp 12g", "Thạch cao 15g", "Mạch môn 12g", "Đảng sâm 12g", "Hoàng kỳ 12g"]
  },
  "dai_trang_dam_trac_tro_tre": {
    stt: 971,
    hc: "Đại tràng đàm trọc trở trệ",
    phanloai: ["Phủ Đại tràng", "Bình", "Thực", "Đàm trọc"],
    tc: ["Đại tiện nhầy dính nặng đầu mỏi người", "Rêu nhớt", "Mạch nhu hoạt"],
    pdt: "Táo thấp hóa đàm, thông tràng",
    bt: "Bình vị tán hợp Nhị trần thang",
    tpbt: ["Thương truật 10g", "Hậu phác 10g", "Trần bì 6g", "Bán hạ chế 10g", "Phục linh 12g"]
  },
  "dai_trang_han_thap_uat_ket": {
    stt: 972,
    hc: "Đại tràng hàn thấp uất kết",
    phanloai: ["Phủ Đại tràng", "Hàn", "Thực", "Hàn thấp"],
    tc: ["Bụng đau âm ỉ đại tiện phân lỏng nhầy trắng", "Mạch trầm hoãn"],
    pdt: "Ôn trung hóa thấp",
    bt: "Hoắc hương chính khí tán",
    tpbt: ["Hoắc hương 10g", "Bạch truật 12g", "Hậu phác 10g", "Trần bì 6g", "Phục linh 12g", "Can khương 6g"]
  },
  "dai_trang_nhiet_doc_thinh_lac": {
    stt: 973,
    hc: "Đại tràng nhiệt độc thịnh",
    phanloai: ["Phủ Đại tràng", "Nhiệt", "Thực", "Nhiệt độc"],
    tc: ["Đại tiện phân máu mủ nhầy sốt cao mót rặn dữ dội", "Mạch sác lực"],
    pdt: "Thanh nhiệt giải độc, lương huyết",
    bt: "Bạch đầu ông thang",
    tpbt: ["Bạch đầu ông 12g", "Hoàng liên 8g", "Hoàng bá 10g", "Tần bì 10g"]
  },
  "dai_trang_khi_ham_sa_truc": {
    stt: 974,
    hc: "Đại tràng khí hãm sa trực tràng",
    phanloai: ["Phủ Đại tràng", "Bình", "Hư", "Khí hãm"],
    tc: ["Sa trực tràng đại tiện lỏng loãng mót rặn", "Mệt mỏi", "Mạch nhược"],
    pdt: "Bổ khí thăng dương, nhiếp trọc",
    bt: "Bổ trung ích khí thang",
    tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Bạch truật 12g", "Cam thảo 6g", "Trần bì 6g", "Sài hồ 6g", "Thăng ma 6g"]
  },
  "dai_trang_vi_nhiet_dong_trang": {
    stt: 975,
    hc: "Vị trường nhiệt động đại tràng",
    phanloai: ["Phủ Đại tràng", "Nhiệt", "Thực", "Vị trường nhiệt"],
    tc: ["Bụng trướng đau táo bón đại tiện khô", "Miệng hôi rêu vàng", "Mạch sác"],
    pdt: "Thanh vị trường nhiệt",
    bt: "Điều vị thừa khí thang",
    tpbt: ["Đại hoàng 10g", "Mang tiêu 10g", "Cam thảo 6g"]
  },
  "dai_trang_tan_dich_hao_ton_tao": {
    stt: 976,
    hc: "Đại tràng tân dịch hao tổn",
    phanloai: ["Phủ Đại tràng", "Nhiệt", "Hư", "Tân dịch khuy tổn"],
    tc: ["Đại tiện khô cứng miệng khô", "Lưỡi đỏ", "Mạch tế sác"],
    pdt: "Tư âm nhuận táo",
    bt: "Tăng dịch thang",
    tpbt: ["Sinh địa 16g", "Mạch môn 12g", "Huyền sâm 12g"]
  },
  "dai_trang_can_khi_pham_truong": {
    stt: 977,
    hc: "Can khí phạm tràng vị",
    phanloai: ["Phủ Đại tràng", "Bình", "Thực", "Khí trệ"],
    tc: ["Bụng quặn đau muốn đi ngoài sau đau đi xong đỡ", "Hay cáu gắt", "Mạch huyền"],
    pdt: "Sơ can lý khí, chỉ tả",
    bt: "Thống tả yếu phương",
    tpbt: ["Bạch truật 12g", "Bạch thược 12g", "Trần bì 6g", "Phòng phong 8g"]
  },
  "dai_trang_ty_than_duong_khuy": {
    stt: 978,
    hc: "Tỳ Thận dương hư đại tràng",
    phanloai: ["Phủ Đại tràng", "Hàn", "Hư", "Tỳ Thận dương hư"],
    tc: ["Ngũ canh tả phân lỏng lạnh đau bụng", "Chân tay lạnh", "Mạch trầm tế"],
    pdt: "Ôn bổ tỳ thận, sáp trường",
    bt: "Tứ thần hoàn",
    tpbt: ["Bổ cốt chỉ 12g", "Ngô thù du 6g", "Nhục đậu khấu 10g", "Ngũ vị tử 6g", "Sinh khương 6g"]
  },
  "dai_trang_thu_tao_thuong_tan": {
    stt: 979,
    hc: "Thử táo thương đại tràng",
    phanloai: ["Phủ Đại tràng", "Nhiệt", "Thực", "Thử táo"],
    tc: ["Đại tiện khô bón mùa hè nóng nực", "Miệng khát", "Mạch sác"],
    pdt: "Thanh thử nhuận táo",
    bt: "Thanh táo cứu phế thang gia giảm",
    tpbt: ["Tang diệp 12g", "Thạch cao 15g", "Hạnh nhân 10g", "Mạch môn 12g", "Hồ ma nhân 12g"]
  },
  "dai_trang_huyet_nhiet_vong_hanh": {
    stt: 980,
    hc: "Đại tràng huyết nhiệt vọng hành",
    phanloai: ["Phủ Đại tràng", "Nhiệt", "Thực", "Huyết nhiệt"],
    tc: ["Đại tiện ra máu tươi phun thành tia", "Hậu môn sưng đau", "Mạch hoạt sác"],
    pdt: "Lương huyết chỉ huyết, thanh nhiệt",
    bt: "Hòe hoa tán",
    tpbt: ["Hòe hoa 12g", "Trắc bách diệp 12g", "Kinh giới tuệ 8g", "Chỉ xác 8g", "Hoàng cầm 10g", "Đương quy 12g"]
  },
  "tieu_truong_thap_nhiet_cap": {
    stt: 981,
    hc: "Tiểu trường thấp nhiệt cấp",
    phanloai: ["Phủ Tiểu trường", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Tiểu tiện buốt rát đỏ sẻn", "Bụng dưới trướng căng", "Miệng khát", "Mạch sác"],
    pdt: "Thanh nhiệt lợi thấp, thông lâm",
    bt: "Đạo xích tán hợp Bát chính tán",
    tpbt: ["Sinh địa 16g", "Mộc thông 8g", "Cam thảo khiếu 6g", "Trúc diệp 10g", "Xa tiền tử 12g"]
  },
  "tieu_truong_khi_tre_truong_thong": {
    stt: 982,
    hc: "Tiểu trường khí trệ trướng thống",
    phanloai: ["Phủ Tiểu trường", "Bình", "Thực", "Khí trệ"],
    tc: ["Bụng dưới trướng đau lan tinh hoàn", "Đau tăng khi vận động", "Mạch huyền"],
    pdt: "Hành khí chỉ thống",
    bt: "Thiên đài ô dược tán",
    tpbt: ["Ô dược 10g", "Mộc hương 6g", "Tiểu hồi hương 8g", "Thanh bì 6g", "Lương khương 6g"]
  },
  "tieu_truong_huyet_u_ha_tieu": {
    stt: 983,
    hc: "Tiểu trường huyết ứ hạ tiêu",
    phanloai: ["Phủ Tiểu trường", "Bình", "Thực", "Huyết ứ"],
    tc: ["Bụng dưới đau nhói cố định cự án", "Chất lưỡi tím", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, lý khí",
    bt: "Thiếu phúc trục ứ thang",
    tpbt: ["Đương quy 12g", "Xuyên khung 10g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Quan quế 6g"]
  },
  "tieu_truong_han_thap_tiet": {
    stt: 984,
    hc: "Tiểu trường hàn thấp tiết tả",
    phanloai: ["Phủ Tiểu trường", "Hàn", "Thực", "Hàn thấp"],
    tc: ["Bụng dưới đau âm ỉ tiêu chảy phân lỏng", "Sợ lạnh", "Mạch trầm trì"],
    pdt: "Ôn trung hóa thấp, chỉ tả",
    bt: "Lý trung hoàn hợp Hoắc hương chính khí tán",
    tpbt: ["Đảng sâm 12g", "Can khương 6g", "Bạch truật 12g", "Cam thảo 6g", "Hoắc hương 10g"]
  },
  "tieu_truong_thanh_coc_bat_phan_nang": {
    stt: 985,
    hc: "Tiểu trường thanh cốc bất phân nặng",
    phanloai: ["Phủ Tiểu trường", "Hàn", "Hư", "Tỳ Thận hư"],
    tc: ["Ăn vào đi ngoài nguyên thức ăn chưa tiêu", "Bụng sôi đau", "Chân tay lạnh", "Mạch trầm tế"],
    pdt: "Ôn trung kiện tỳ, cố sáp",
    bt: "Lý trung hoàn hợp Sâm linh bạch truật tán",
    tpbt: ["Đảng sâm 12g", "Can khương 6g", "Bạch truật 12g", "Cam thảo 6g", "Phục linh 12g", "Ý dĩ 15g"]
  },
  "tieu_truong_nhiet_loet_khieu": {
    stt: 986,
    hc: "Tiểu trường nhiệt thịnh lở miệng",
    phanloai: ["Phủ Tiểu trường", "Nhiệt", "Thực", "Hỏa nhiệt"],
    tc: ["Miệng lưỡi lở loét đỏ đau", "Tiểu tiện đỏ rát buốt", "Mạch sác"],
    pdt: "Thanh tâm tả tiểu trường hỏa",
    bt: "Đạo xích tán",
    tpbt: ["Sinh địa 16g", "Mộc thông 8g", "Cam thảo khiếu 6g", "Trúc diệp 10g"]
  },
  "tieu_truong_san_khi_han_tre": {
    stt: 987,
    hc: "Tiểu trường sán khí hàn trệ",
    phanloai: ["Phủ Tiểu trường", "Hàn", "Thực", "Hàn trệ"],
    tc: ["Bụng dưới đau quặn lan dịch hoàn", "Sa giáng tinh hoàn đau", "Mạch huyền khẩn"],
    pdt: "Ôn kinh tán hàn, lý khí định thống",
    bt: "Noãn can tiễn",
    tpbt: ["Tiểu hồi hương 10g", "Nhục quế 6g", "Đương quy 12g", "Câu kỷ tử 12g", "Ô dược 10g", "Trầm hương 4g"]
  },
  "tieu_truong_tan_dich_khuy_ton": {
    stt: 988,
    hc: "Tiểu trường tân dịch khuy tổn",
    phanloai: ["Phủ Tiểu trường", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Miệng khát thích uống nước mát", "Tiểu tiện ít đỏ", "Đại tiện khô", "Mạch tế sác"],
    pdt: "Tư âm sinh tân",
    bt: "Tăng dịch thang",
    tpbt: ["Sinh địa 16g", "Mạch môn 12g", "Huyền sâm 12g"]
  },
  "tieu_truong_thuc_tich_dinh_tre": {
    stt: 989,
    hc: "Tiểu trường thực tích đình trệ",
    phanloai: ["Phủ Tiểu trường", "Bình", "Thực", "Thực tích"],
    tc: ["Bụng trướng đau quặn sôi bụng", "Đại tiện phân thối", "Mạch hoạt"],
    pdt: "Tiêu thực hóa tích",
    bt: "Bảo hòa hoàn",
    tpbt: ["Sơn tra 12g", "Thần khúc 10g", "Lai phục tử 10g", "Bán hạ chế 10g", "Trần bì 6g"]
  },
  "tieu_truong_khi_huyet_luong_hu_vua": {
    stt: 990,
    hc: "Tiểu trường khí huyết lưỡng hư",
    phanloai: ["Phủ Tiểu trường", "Bình", "Hư", "Khí huyết lưỡng hư"],
    tc: ["Bụng dưới co thắt âm ỉ mệt mỏi", "Sắc mặt nhợt", "Mạch tế nhược"],
    pdt: "Bổ khí dưỡng huyết",
    bt: "Thập toàn đại bổ thang",
    tpbt: ["Đảng sâm 12g", "Hoàng kỳ 16g", "Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g"]
  },
  "tieu_truong_hu_han_phuc_thong": {
    stt: 991,
    hc: "Tiểu trường hư hàn phúc thống",
    phanloai: ["Phủ Tiểu trường", "Hàn", "Hư", "Dương hư"],
    tc: ["Bụng dưới đau âm ỉ thích ấm", "Tiểu tiện trong dài", "Mạch trầm trì"],
    pdt: "Ôn bổ thận dương, tán hàn",
    bt: "Hữu quy hoàn gia giảm",
    tpbt: ["Phụ tử chế 8g", "Nhục quế 6g", "Thục địa 16g", "Đỗ trọng 12g", "Kỷ tử 12g"]
  },
  "tieu_truong_am_hu_noi_nhiet": {
    stt: 992,
    hc: "Tiểu trường âm hư nội nhiệt",
    phanloai: ["Phủ Tiểu trường", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Miệng khô khát lòng bàn tay chân nóng", "Tiểu ít đỏ", "Mạch tế sác"],
    pdt: "Tư âm thanh nhiệt",
    bt: "Lục vị địa hoàng hoàn",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Phục linh 12g"]
  },
  "tieu_truong_duong_hu_ha_tieu": {
    stt: 993,
    hc: "Tiểu trường dương hư hạ tiêu",
    phanloai: ["Phủ Tiểu trường", "Hàn", "Hư", "Dương hư"],
    tc: ["Sợ lạnh tay chân lạnh bụng dưới đau", "Tiểu trong dài", "Mạch trầm tế"],
    pdt: "Ôn bổ hạ tiêu dương khí",
    bt: "Hữu quy hoàn",
    tpbt: ["Phụ tử chế 8g", "Nhục quế 6g", "Thục địa 16g", "Sơn thù nhục 8g", "Đỗ trọng 12g"]
  },
  "tieu_truong_phong_nhiet_ngoai_cam": {
    stt: 994,
    hc: "Tiểu trường phong nhiệt ngoại cảm",
    phanloai: ["Phủ Tiểu trường", "Nhiệt", "Thực", "Ngoại cảm phong nhiệt"],
    tc: ["Sốt đau đầu tiểu tiện vàng đỏ", "Mạch phù sác"],
    pdt: "Sơ phong thanh nhiệt, lợi niệu",
    bt: "Ngân kiều tán hợp Đạo xích tán",
    tpbt: ["Kim ngân hoa 12g", "Liên kiều 10g", "Sinh địa 16g", "Mộc thông 8g", "Trúc diệp 10g"]
  },
  "tieu_truong_dam_trac_tro_tre": {
    stt: 995,
    hc: "Tiểu trường đàm trọc trở trệ",
    phanloai: ["Phủ Tiểu trường", "Bình", "Thực", "Đàm trọc"],
    tc: ["Bụng dưới trướng nặng đầu nặng mỏi", "Rêu nhớt", "Mạch nhu hoạt"],
    pdt: "Táo thấp hóa đàm",
    bt: "Bình vị tán hợp Nhị trần thang",
    tpbt: ["Thương truật 10g", "Hậu phác 10g", "Trần bì 6g", "Bán hạ chế 10g", "Phục linh 12g"]
  },
  "tieu_truong_huyet_u_xuat_huyet": {
    stt: 996,
    hc: "Tiểu trường huyết ứ xuất huyết",
    phanloai: ["Phủ Tiểu trường", "Bình", "Thực", "Huyết ứ"],
    tc: ["Bụng dưới đau nhói đi ngoài tiểu ra máu cục", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, chỉ huyết",
    bt: "Huyết phủ trục ứ thang",
    tpbt: ["Đương quy 12g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Xuyên khung 10g"]
  },
  "tieu_truong_khi_uat_tre": {
    stt: 997,
    hc: "Tiểu trường khí uất trệ",
    phanloai: ["Phủ Tiểu trường", "Bình", "Thực", "Khí trệ"],
    tc: ["Bụng dưới trướng căng tinh thần u uất", "Mạch huyền"],
    pdt: "Hành khí khai uất",
    bt: "Tứ ma thang",
    tpbt: ["Trần bì 6g", "Hương phụ 10g", "Ô dược 10g", "Binh lang 8g"]
  },
  "tieu_truong_ty_than_duong_khuy": {
    stt: 998,
    hc: "Tỳ Thận dương hư tiểu trường",
    phanloai: ["Phủ Tiểu trường", "Hàn", "Hư", "Tỳ Thận dương hư"],
    tc: ["Ăn vào đi ngoài nguyên thức ăn lạnh bụng", "Mạch trầm tế"],
    pdt: "Ôn bổ tỳ thận, sáp trường",
    bt: "Tứ thần hoàn hợp Lý trung hoàn",
    tpbt: ["Bổ cốt chỉ 12g", "Ngô thù du 6g", "Đảng sâm 12g", "Can khương 6g", "Bạch truật 12g"]
  },
  "tieu_truong_thu_nhiet_ha_tieu": {
    stt: 999,
    hc: "Tiểu trường thử nhiệt hạ tiêu",
    phanloai: ["Phủ Tiểu trường", "Nhiệt", "Thực", "Thử nhiệt"],
    tc: ["Tiểu buốt rát mùa hè khát nước mệt mỏi", "Mạch nhu sác"],
    pdt: "Thanh thử lợi thấp",
    bt: "Thanh thử ích khí thang",
    tpbt: ["Tây qua diệp 12g", "Thạch cao 15g", "Mạch môn 12g", "Đảng sâm 12g", "Hoàng kỳ 12g"]
  },
  "tieu_truong_can_khi_pham_tieu": {
    stt: 1000,
    hc: "Can khí phạm tiểu trường",
    phanloai: ["Phủ Tiểu trường", "Bình", "Thực", "Khí trệ"],
    tc: ["Bụng dưới trướng đau lan tinh hoàn do cáu gắt", "Mạch huyền"],
    pdt: "Sơ can lý khí, chỉ thống",
    bt: "Sài hồ sơ can tán hợp Thiên đài ô dược tán",
    tpbt: ["Sài hồ 10g", "Chỉ xác 8g", "Bạch thược 12g", "Ô dược 10g", "Mộc hương 6g"]
  },
  "bang_quang_thap_nhiet_cap": {
    stt: 1001,
    hc: "Bàng quang thấp nhiệt cấp",
    phanloai: ["Phủ Bàng quang", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Tiểu tiện buốt rát đột ngột", "Tiểu rắt tiểu đỏ đục", "Đau tức hạ vị", "Mạch sác"],
    pdt: "Thanh nhiệt lợi thấp, thông lâm",
    bt: "Bát chính tán",
    tpbt: ["Xa tiền tử 12g", "Cù mạch 10g", "Biển súc 10g", "Hoạt thạch 15g", "Cam thảo 6g", "Đại hoàng 6g", "Chi tử 10g", "Mộc thông 8g"]
  },
  "bang_quang_khi_tret_truong": {
    stt: 1002,
    hc: "Bàng quang khí trệ trướng căng",
    phanloai: ["Phủ Bàng quang", "Bình", "Thực", "Khí trệ"],
    tc: ["Hạ vị trướng căng tiểu tiện khó khăn không thông", "Tức nặng", "Mạch huyền"],
    pdt: "Hành khí lợi thủy",
    bt: "Trầm hương tán",
    tpbt: ["Trầm hương 4g", "Biển súc 10g", "Hoạt thạch 15g", "Mộc thông 8g", "Đương quy 12g"]
  },
  "bang_quang_huyet_u_tieu_ha": {
    stt: 1003,
    hc: "Bàng quang huyết ứ hạ tiêu",
    phanloai: ["Phủ Bàng quang", "Bình", "Thực", "Huyết ứ"],
    tc: ["Hạ vị đau nhói cố định", "Tiểu ra máu cục", "Chất lưỡi tím", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, chỉ huyết",
    bt: "Huyết phủ trục ứ thang",
    tpbt: ["Đương quy 12g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Xuyên khung 10g"]
  },
  "bang_quang_han_thap_phu": {
    stt: 1004,
    hc: "Bàng quang hàn thấp phù",
    phanloai: ["Phủ Bàng quang", "Hàn", "Thực", "Hàn thấp"],
    tc: ["Tiểu tiện bất định người nặng nề", "Sợ lạnh tay chân lạnh", "Mạch trầm trì"],
    pdt: "Ôn dương hóa thấp, lợi niệu",
    bt: "Ngũ linh tán",
    tpbt: ["Phục linh 12g", "Trư linh 10g", "Trạch tả 10g", "Bạch truật 12g", "Quế chi 8g"]
  },
  "bang_quang_thanh_coc_bat_phan": {
    stt: 1005,
    hc: "Bàng quang cao lâm đục như sữa",
    phanloai: ["Phủ Bàng quang", "Nhiệt", "Thực", "Thấp nhiệt cao lâm"],
    tc: ["Tiểu tiện đục như nước vo gạo", "Buốt rát", "Rêu lưỡi vàng nhớt", "Mạch nhu sác"],
    pdt: "Thanh nhiệt lợi thấp, hóa trọc",
    bt: "Thanh tâm liên tử ẩm",
    tpbt: ["Hoàng liên 6g", "Hoàng cầm 10g", "Mạch môn 12g", "Xa tiền tử 12g", "Thạch xương bồ 8g"]
  },
  "bang_quang_nhiet_loet_khiu": {
    stt: 1006,
    hc: "Bàng quang nhiệt thịnh lở khiếu",
    phanloai: ["Phủ Bàng quang", "Nhiệt", "Thực", "Hỏa nhiệt"],
    tc: ["Tiểu tiện buốt rát đỏ đau", "Bứt rứt miệng khát", "Mạch sác"],
    pdt: "Thanh tâm tả hỏa, lợi niệu",
    bt: "Đạo xích tán",
    tpbt: ["Sinh địa 16g", "Mộc thông 8g", "Cam thảo khiếu 6g", "Trúc diệp 10g"]
  },
  "bang_quang_thach_lam_dot_ngot": {
    stt: 1007,
    hc: "Bàng quang thạch lâm đột ngột",
    phanloai: ["Phủ Bàng quang", "Nhiệt", "Thực", "Thấp nhiệt thạch lâm"],
    tc: ["Tiểu tiện tắc nghẽn đột ngột đau buốt rát", "Tiểu ra sỏi", "Mạch huyền sác"],
    pdt: "Thanh nhiệt lợi thấp, bài thạch",
    bt: "Thạch vĩ tán",
    tpbt: ["Thạch vĩ 12g", "Xa tiền tử 12g", "Biển súc 10g", "Cù mạch 10g", "Hoạt thạch 15g", "Kim tiền thảo 20g"]
  },
  "bang_quang_tan_dich_khuy_ton": {
    stt: 1008,
    hc: "Bàng quang tân dịch khuy tổn",
    phanloai: ["Phủ Bàng quang", "Nhiệt", "Hư", "Tân dịch khuy tổn"],
    tc: ["Tiểu tiện sẻn ít", "Miệng khô khát", "Lưỡi đỏ", "Mạch tế sác"],
    pdt: "Tư âm sinh tân, lợi niệu",
    bt: "Trư linh thang",
    tpbt: ["Trư linh 10g", "Phục linh 12g", "Trạch tả 10g", "Hoạt thạch 15g", "A giao 10g"]
  },
  "bang_quang_thuc_tich_dinh_tre": {
    stt: 1009,
    hc: "Bàng quang thực tích đình trệ",
    phanloai: ["Phủ Bàng quang", "Bình", "Thực", "Thực tích"],
    tc: ["Hạ vị trướng căng đau quặn nhẹ", "Tiểu tiện bất thường", "Mạch hoạt"],
    pdt: "Tiêu thực lợi niệu",
    bt: "Bảo hòa hoàn hợp Ngũ linh tán",
    tpbt: ["Sơn tra 12g", "Thần khúc 10g", "Lai phục tử 10g", "Phục linh 12g", "Trạch tả 10g"]
  },
  "bang_quang_khi_huyet_luong_hu": {
    stt: 1010,
    hc: "Bàng quang khí huyết lưỡng hư",
    phanloai: ["Phủ Bàng quang", "Bình", "Hư", "Khí huyết lưỡng hư"],
    tc: ["Tiểu không tự chủ tiểu đêm nhiều", "Sắc mặt nhợt", "Mạch tế nhược"],
    pdt: "Bổ khí dưỡng huyết, cố sáp",
    bt: "Bổ trung ích khí thang",
    tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Bạch truật 12g", "Đương quy 12g", "Thục địa 16g"]
  },
  "bang_quang_hu_han_tieu_dem": {
    stt: 1011,
    hc: "Bàng quang hư hàn tiểu đêm",
    phanloai: ["Phủ Bàng quang", "Hàn", "Hư", "Dương hư"],
    tc: ["Tiểu tiện nhiều lần tiểu dầm", "Sợ lạnh tay chân lạnh", "Mạch trầm trì"],
    pdt: "Ôn thận cố sáp, súc niệu",
    bt: "Tang phiêu tiêu tán hợp Súc tuyền hoàn",
    tpbt: ["Tang phiêu tiêu 12g", "Ích trí nhân 10g", "Ô dược 10g", "Phục thần 12g", "Long cốt 15g"]
  },
  "bang_quang_am_hu_noi_nhiet": {
    stt: 1012,
    hc: "Bàng quang âm hư nội nhiệt",
    phanloai: ["Phủ Bàng quang", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Tiểu tiện ít buốt rát nhẹ", "Lòng bàn tay chân nóng", "Mạch tế sác"],
    pdt: "Tư âm thanh nhiệt",
    bt: "Lục vị địa hoàng hoàn",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Phục linh 12g"]
  },
  "bang_quang_duong_hu_ha_tieu": {
    stt: 1013,
    hc: "Bàng quang dương hư hạ tiêu",
    phanloai: ["Phủ Bàng quang", "Hàn", "Hư", "Dương hư"],
    tc: ["Sợ lạnh rõ rệt tay chân lạnh ngắt", "Tiểu không tự chủ", "Mạch trầm tế"],
    pdt: "Ôn bổ tam tiêu dương khí",
    bt: "Hữu quy hoàn",
    tpbt: ["Phụ tử chế 8g", "Nhục quế 6g", "Thục địa 16g", "Sơn thù nhục 8g", "Đỗ trọng 12g"]
  },
  "bang_quang_phong_nhiet_ngoai": {
    stt: 1014,
    hc: "Bàng quang phong nhiệt ngoại cảm",
    phanloai: ["Phủ Bàng quang", "Nhiệt", "Thực", "Ngoại cảm phong nhiệt"],
    tc: ["Tiểu tiện bất định kèm sốt đau đầu", "Mạch phù sác"],
    pdt: "Sơ phong thanh nhiệt, lợi niệu",
    bt: "Phòng phong thang hợp Bát chính tán",
    tpbt: ["Phòng phong 10g", "Tần giao 10g", "Xa tiền tử 12g", "Cù mạch 10g", "Hoạt thạch 15g"]
  },
  "bang_quang_dam_trac_tro_tre": {
    stt: 1015,
    hc: "Bàng quang đàm trọc trở trệ",
    phanloai: ["Phủ Bàng quang", "Bình", "Thực", "Đàm trọc"],
    tc: ["Tiểu tiện đục nặng đầu mỏi người", "Rêu nhớt", "Mạch nhu hoạt"],
    pdt: "Táo thấp hóa đàm, lợi niệu",
    bt: "Bình vị tán hợp Ngũ linh tán",
    tpbt: ["Thương truật 10g", "Hậu phác 10g", "Trần bì 6g", "Phục linh 12g", "Trạch tả 10g"]
  },
  "bang_quang_huyet_u_xuat_huyet": {
    stt: 1016,
    hc: "Bàng quang huyết ứ xuất huyết",
    phanloai: ["Phủ Bàng quang", "Bình", "Thực", "Huyết ứ"],
    tc: ["Hạ vị đau nhói tiểu ra máu cục", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, chỉ huyết",
    bt: "Huyết phủ trục ứ thang",
    tpbt: ["Đương quy 12g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Xuyên khung 10g"]
  },
  "bang_quang_khi_uat_trie_ha": {
    stt: 1017,
    hc: "Bàng quang khí uất trệ hạ vị",
    phanloai: ["Phủ Bàng quang", "Bình", "Thực", "Khí trệ"],
    tc: ["Hạ vị trướng căng tinh thần u uất", "Mạch huyền"],
    pdt: "Hành khí lợi thủy",
    bt: "Trầm hương tán",
    tpbt: ["Trầm hương 4g", "Biển súc 10g", "Hoạt thạch 15g", "Mộc thông 8g", "Đương quy 12g"]
  },
  "bang_quang_ty_than_duong_khuy": {
    stt: 1018,
    hc: "Tỳ Thận dương hư bàng quang",
    phanloai: ["Phủ Bàng quang", "Hàn", "Hư", "Tỳ Thận dương hư"],
    tc: ["Tiểu dầm tiểu nhiều lần về đêm chân tay lạnh", "Mạch trầm tế"],
    pdt: "Ôn bổ tỳ thận, cố sáp",
    bt: "Hữu quy hoàn hợp Lý trung hoàn",
    tpbt: ["Phụ tử chế 8g", "Nhục quế 6g", "Thục địa 16g", "Đảng sâm 12g", "Can khương 6g"]
  },
  "bang_quang_thu_nhiet_ha_tieu": {
    stt: 1019,
    hc: "Bàng quang thử nhiệt hạ tiêu",
    phanloai: ["Phủ Bàng quang", "Nhiệt", "Thực", "Thử nhiệt"],
    tc: ["Tiểu buốt rát mùa hè khát nước mệt mỏi", "Mạch nhu sác"],
    pdt: "Thanh thử lợi thấp",
    bt: "Thanh thử ích khí thang",
    tpbt: ["Tây qua diệp 12g", "Thạch cao 15g", "Mạch môn 12g", "Đảng sâm 12g", "Hoàng kỳ 12g"]
  },
  "bang_quang_can_khi_pham_bang": {
    stt: 1020,
    hc: "Can khí phạm bàng quang",
    phanloai: ["Phủ Bàng quang", "Bình", "Thực", "Khí trệ"],
    tc: ["Tiểu tiện khó khăn đau tức hạ vị do cáu gắt", "Mạch huyền"],
    pdt: "Sơ can lý khí, lợi thủy",
    bt: "Sài hồ sơ can tán hợp Trầm hương tán",
    tpbt: ["Sài hồ 10g", "Chỉ xác 8g", "Bạch thược 12g", "Trầm hương 4g", "Biển súc 10g"]
  },
  "dom_khi_tret_suon": {
    stt: 1021,
    hc: "Đởm khí trệ sườn trướng",
    phanloai: ["Phủ Đởm", "Bình", "Thực", "Khí trệ"],
    tc: ["Sườn phải trướng đau âm ỉ", "Hay thở dài", "Miệng đắng", "Mạch huyền"],
    pdt: "Sơ can lý khí, thanh đởm",
    bt: "Sài hồ sơ can tán",
    tpbt: ["Sài hồ 10g", "Chỉ xác 8g", "Bạch thược 12g", "Xuyên khung 10g", "Trần bì 6g"]
  },
  "dom_nhiet_uat_ket_suon": {
    stt: 1022,
    hc: "Đởm nhiệt uất kết",
    phanloai: ["Phủ Đởm", "Nhiệt", "Thực", "Đàm hỏa"],
    tc: ["Miệng đắng họng khô", "Sườn phải đau tức", "Tâm phiền bứt rứt", "Mạch huyền sác"],
    pdt: "Thanh tả đởm hỏa",
    bt: "Long đởm tả can thang",
    tpbt: ["Long đởm thảo 12g", "Hoàng cầm 10g", "Chi tử 10g", "Sài hồ 8g", "Sinh địa 16g"]
  },
  "dom_thap_nhiet_uat_ket": {
    stt: 1023,
    hc: "Đởm thấp nhiệt uất kết",
    phanloai: ["Can Đảm", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Đau vùng sườn phải lan ra sau lưng", "Sốt rét run da mắt vàng", "Mạch huyền sác"],
    pdt: "Thanh nhiệt lợi thấp, thông lợi đản đạo",
    bt: "Đại sài hồ thang hợp Nhân trần cao thang",
    tpbt: ["Sài hồ 12g", "Hoàng cầm 10g", "Bạch thược 12g", "Chỉ thực 8g", "Đại hoàng 6g", "Nhân trần 15g", "Chi tử 10g"]
  },
  "dom_am_hu_noi_nhiet": {
    stt: 1024,
    hc: "Đởm âm hư nội nhiệt",
    phanloai: ["Phủ Đởm", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Miệng khô đắng họng ráo", "Hồi hộp khó ngủ", "Lòng bàn tay chân nóng", "Mạch tế sác"],
    pdt: "Tư âm thanh đởm",
    bt: "Tư âm địa hoàng hoàn",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Miết giáp 12g"]
  },
  "dom_duong_hu_han_tre": {
    stt: 1025,
    hc: "Đởm dương hư hàn trệ",
    phanloai: ["Phủ Đởm", "Hàn", "Hư", "Dương hư"],
    tc: ["Sườn phải đau âm ỉ thích ấm", "Sợ lạnh tay chân lạnh", "Mạch trầm khẩn"],
    pdt: "Ôn kinh tán hàn, lý khí",
    bt: "Ôn đởm thang gia vị quế chi",
    tpbt: ["Bán hạ chế 10g", "Trần bì 6g", "Phục linh 12g", "Quế chi 8g", "Can khương 6g"]
  },
  "dom_huyet_u_lac_dinh": {
    stt: 1026,
    hc: "Đởm lạc huyết ứ",
    phanloai: ["Phủ Đởm", "Bình", "Thực", "Huyết ứ"],
    tc: ["Sườn phải đau nhói cố định cự án", "Chất lưỡi tím", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ",
    bt: "Huyết phủ trục ứ thang",
    tpbt: ["Đương quy 12g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Sài hồ 8g"]
  },
  "dom_khi_huyet_luong_hu": {
    stt: 1027,
    hc: "Đởm khí huyết lưỡng hư",
    phanloai: ["Phủ Đởm", "Bình", "Hư", "Khí huyết lưỡng hư"],
    tc: ["Sườn trướng âm ỉ mệt mỏi", "Sắc mặt nhợt", "Mạch tế nhược"],
    pdt: "Bổ khí dưỡng huyết",
    bt: "Thập toàn đại bổ thang",
    tpbt: ["Đảng sâm 12g", "Hoàng kỳ 16g", "Thục địa 16g", "Đương quy 12g", "Bạch thược 12g"]
  },
  "dom_vi_bat_hoa_dom": {
    stt: 1028,
    hc: "Đởm Vị bất hòa",
    phanloai: ["Phủ Đởm", "Bình", "Thực", "Khí trệ"],
    tc: ["Miệng đắng sườn đau buồn nôn", "Ăn kém", "Mạch huyền"],
    pdt: "Sơ can hòa đởm, giáng nghịch",
    bt: "Tiểu sài hồ thang",
    tpbt: ["Sài hồ 10g", "Hoàng cầm 10g", "Bán hạ chế 10g", "Đảng sâm 12g", "Cam thảo 6g", "Sinh khương 6g"]
  },
  "dom_thuc_tich_dinh_tre": {
    stt: 1029,
    hc: "Đởm thực tích đình trệ",
    phanloai: ["Phủ Đởm", "Bình", "Thực", "Thực tích"],
    tc: ["Sườn phải trướng đau ăn không tiêu", "Buồn nôn", "Mạch hoạt"],
    pdt: "Tiêu thực hóa trệ, hòa đởm",
    bt: "Bảo hòa hoàn",
    tpbt: ["Sơn tra 12g", "Thần khúc 10g", "Lai phục tử 10g", "Bán hạ chế 10g", "Trần bì 6g"]
  },
  "dom_phong_nhiet_ngoai_cam": {
    stt: 1030,
    hc: "Đởm phong nhiệt ngoại cảm",
    phanloai: ["Phủ Đởm", "Nhiệt", "Thực", "Ngoại cảm"],
    tc: ["Sốt đau đầu miệng đắng", "Mạch phù sác"],
    pdt: "Sơ phong thanh nhiệt",
    bt: "Tiểu sài hồ thang hợp Ngân kiều tán",
    tpbt: ["Sài hồ 10g", "Hoàng cầm 10g", "Kim ngân hoa 12g", "Liên kiều 10g", "Bạc hà 6g"]
  },
      "thach_lam_ha_tieu": {
    stt: 1031,
    hc: "Đởm thạch hạ tiêu thấp nhiệt",
    phanloai: ["Phủ Đởm", "Nhiệt", "Thực", "Thấp nhiệt sỏi"],
    tc: ["Đau sườn phải dữ dội lan vai", "Sốt vàng da", "Mạch huyền sác"],
    pdt: "Thanh nhiệt lợi thấp, bài thạch",
    bt: "Nhân trần cao thang hợp Kim tiền thảo",
    tpbt: ["Nhân trần 15g", "Chi tử 10g", "Đại hoàng 6g", "Kim tiền thảo 20g", "Xa tiền tử 12g"]
  },
  "khi_uat_hoa_hoa_dom": {
    stt: 1032,
    hc: "Đởm khí uất hóa hỏa",
    phanloai: ["Phủ Đởm", "Nhiệt", "Thực", "Khí uất hóa hỏa"],
    tc: ["Sườn trướng đau cáu gắt miệng đắng", "Mạch huyền sác"],
    pdt: "Sơ can tả hỏa",
    bt: "Đan tiêu tiêu dao tán",
    tpbt: ["Sài hồ 10g", "Bạch thược 12g", "Đương quy 12g", "Chi tử 10g", "Mẫu đơn bì 10g"]
  },
  "huyet_u_xuat_huyet_dom": {
    stt: 1033,
    hc: "Đởm lạc huyết ứ xuất huyết",
    phanloai: ["Phủ Đởm", "Bình", "Thực", "Huyết ứ"],
    tc: ["Sườn đau nhói cố định da sạm", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ",
    bt: "Huyết phủ trục ứ thang",
    tpbt: ["Đương quy 12g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Xuyên khung 10g"]
  },
  "ty_than_duong_khuy_dom": {
    stt: 1034,
    hc: "Tỳ Thận dương hư đởm thất",
    phanloai: ["Phủ Đởm", "Hàn", "Hư", "Dương hư"],
    tc: ["Sườn đau âm ỉ sợ lạnh chân tay lạnh", "Mạch trầm tế"],
    pdt: "Ôn bổ tỳ thận",
    bt: "Hữu quy hoàn hợp Lý trung hoàn",
    tpbt: ["Phụ tử chế 8g", "Nhục quế 6g", "Thục địa 16g", "Đảng sâm 12g", "Can khương 6g"]
  },
  "thu_nhiet_ha_tieu_dom": {
    stt: 1035,
    hc: "Đởm thử nhiệt hạ tiêu",
    phanloai: ["Phủ Đởm", "Nhiệt", "Thực", "Thử nhiệt"],
    tc: ["Sườn phải trướng nhẹ mùa hè mệt mỏi", "Mạch nhu sác"],
    pdt: "Thanh thử lợi thấp",
    bt: "Thanh thử ích khí thang",
    tpbt: ["Tây qua diệp 12g", "Thạch cao 15g", "Mạch môn 12g", "Đảng sâm 12g", "Hoàng kỳ 12g"]
  },
  "tam_tieu_khi_tret_toan_than": {
    stt: 1036,
    hc: "Tam tiêu khí trệ toàn thân",
    phanloai: ["Phủ Tam tiêu", "Bình", "Thực", "Khí trệ"],
    tc: ["Ngực sườn bụng dưới đều trướng căng", "Hay thở dài", "Mạch huyền"],
    pdt: "Hành khí khai uất, thông tam tiêu",
    bt: "Tứ ma thang",
    tpbt: ["Trần bì 6g", "Hương phụ 10g", "Ô dược 10g", "Binh lang 8g"]
  },
  "tam_tieu_thap_nhiet_ha_tieu": {
    stt: 1037,
    hc: "Tam tiêu thấp nhiệt hạ tiêu",
    phanloai: ["Phủ Tam tiêu", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Bụng trướng đầy tiểu tiện buốt rát đỏ đục", "Rêu vàng nhớt", "Mạch nhu sác"],
    pdt: "Thanh nhiệt lợi thấp, hóa trọc",
    bt: "Tam nhân thang",
    tpbt: ["Hạnh nhân 10g", "Ý dĩ 15g", "Bạch đậu khấu 8g", "Hậu phác 10g", "Thông thảo 6g", "Trúc diệp 10g"]
  },
  "tam_tieu_han_thap_thuy_thung": {
    stt: 1038,
    hc: "Tam tiêu hàn thấp thủy thũng",
    phanloai: ["Phủ Tam tiêu", "Hàn", "Thực", "Hàn thấp"],
    tc: ["Thân thể nặng nề phù thũng toàn thân", "Sợ lạnh", "Mạch trầm trì"],
    pdt: "Ôn dương hóa thấp, lợi thủy",
    bt: "Ngũ linh tán hợp Phụ tử lý trung thang",
    tpbt: ["Phục linh 12g", "Trư linh 10g", "Trạch tả 10g", "Bạch truật 12g", "Hắc phụ tử 8g"]
  },
  "tam_tieu_am_hu_noi_nhiet": {
    stt: 1039,
    hc: "Tam tiêu âm hư nội nhiệt",
    phanloai: ["Phủ Tam tiêu", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Tam tiêu khô rát miệng khát tiểu ít đỏ", "Triều nhiệt", "Mạch tế sác"],
    pdt: "Tư âm thanh nhiệt",
    bt: "Lục vị địa hoàng hoàn",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Phục linh 12g"]
  },
  "tam_tieu_duong_hu_han_tre": {
    stt: 1040,
    hc: "Tam tiêu dương hư hàn trệ",
    phanloai: ["Phủ Tam tiêu", "Hàn", "Hư", "Dương hư"],
    tc: ["Sợ lạnh rõ rệt tay chân lạnh ngắt", "Thủy thũng ấn lõm", "Mạch trầm tế"],
    pdt: "Ôn bổ tam tiêu dương khí",
    bt: "Hữu quy hoàn",
    tpbt: ["Phụ tử chế 8g", "Nhục quế 6g", "Thục địa 16g", "Sơn thù nhục 8g", "Đỗ trọng 12g"]
  },
  "tam_tieu_huyet_u_toan_than": {
    stt: 1041,
    hc: "Tam tiêu huyết ứ toàn thân",
    phanloai: ["Phủ Tam tiêu", "Bình", "Thực", "Huyết ứ"],
    tc: ["Toàn thân có chỗ đau nhói cố định sắc mặt tối sạm", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, thông tam tiêu",
    bt: "Huyết phủ trục ứ thang",
    tpbt: ["Đương quy 12g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Xuyên khung 10g", "Sài hồ 8g"]
  },
  "tam_tieu_khi_huyet_luong_hu": {
    stt: 1042,
    hc: "Tam tiêu khí huyết lưỡng hư",
    phanloai: ["Phủ Tam tiêu", "Bình", "Hư", "Khí huyết lưỡng hư"],
    tc: ["Mệt mỏi toàn thân đoản khí lười nói", "Sắc mặt nhợt", "Mạch tế nhược"],
    pdt: "Bổ khí ích vệ, dưỡng huyết",
    bt: "Thập toàn đại bổ thang",
    tpbt: ["Đảng sâm 12g", "Hoàng kỳ 16g", "Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g"]
  },
  "tam_tieu_thuc_tich_dinh_tre": {
    stt: 1043,
    hc: "Tam tiêu thực tích đình trệ",
    phanloai: ["Phủ Tam tiêu", "Bình", "Thực", "Thực tích"],
    tc: ["Bụng ngực trướng đầy ăn uống không tiêu", "Đại tiện bất thường", "Mạch hoạt"],
    pdt: "Tiêu thực hóa trệ",
    bt: "Bảo hòa hoàn",
    tpbt: ["Sơn tra 12g", "Thần khúc 10g", "Lai phục tử 10g", "Bán hạ chế 10g", "Trần bì 6g"]
  },
  "tam_tieu_phong_nhiet_ngoai_cam": {
    stt: 1044,
    hc: "Tam tiêu phong nhiệt ngoại cảm",
    phanloai: ["Phủ Tam tiêu", "Nhiệt", "Thực", "Ngoại cảm phong nhiệt"],
    tc: ["Sốt cao sợ gió họng sưng đau", "Tiểu tiện vàng", "Mạch phù sác"],
    pdt: "Tân lương giải biểu, thanh nhiệt",
    bt: "Ngân kiều tán",
    tpbt: ["Kim ngân hoa 12g", "Liên kiều 10g", "Bạc hà 6g", "Cát cánh 8g", "Ngưu bàng tử 10g"]
  },
  "tam_tieu_tan_dich_hao_ton": {
    stt: 1045,
    hc: "Tam tiêu tân dịch hao tổn",
    phanloai: ["Phủ Tam tiêu", "Nhiệt", "Hư", "Tân dịch khuy tổn"],
    tc: ["Miệng khô khát tiểu ít", "Lưỡi đỏ", "Mạch tế sác"],
    pdt: "Tư âm sinh tân",
    bt: "Tăng dịch thang",
    tpbt: ["Sinh địa 16g", "Mạch môn 12g", "Huyền sâm 12g"]
  },
  "tam_tieu_khi_nghich_thuong": {
    stt: 1046,
    hc: "Tam tiêu khí thượng nghịch",
    phanloai: ["Phủ Tam tiêu", "Bình", "Thực", "Khí nghịch"],
    tc: ["Ngực tức nấc cụt ho hen", "Trướng bụng", "Mạch huyền"],
    pdt: "Giáng khí định suyễn",
    bt: "Tô tử giáng khí thang",
    tpbt: ["Tô tử 10g", "Bán hạ chế 10g", "Tiền hồ 10g", "Hậu phác 10g", "Đương quy 12g"]
  },
  "tam_tieu_dam_trac_tro_trung": {
    stt: 1047,
    hc: "Tam tiêu đàm trọc trở trệ",
    phanloai: ["Phủ Tam tiêu", "Bình", "Thực", "Đàm trọc"],
    tc: ["Thân thể nặng nề bụng trướng đờm nhiều", "Rêu nhớt", "Mạch nhu hoạt"],
    pdt: "Táo thấp hóa đàm",
    bt: "Bình vị tán hợp Nhị trần thang",
    tpbt: ["Thương truật 10g", "Hậu phác 10g", "Trần bì 6g", "Bán hạ chế 10g", "Phục linh 12g"]
  },
  "tam_tieu_huyet_nhiet_vong_hanh": {
    stt: 1048,
    hc: "Tam tiêu huyết nhiệt vọng hành",
    phanloai: ["Phủ Tam tiêu", "Nhiệt", "Thực", "Huyết nhiệt"],
    tc: ["Xuất huyết các khiếu sốt cao bứt rứt", "Mạch sác lực"],
    pdt: "Thanh nhiệt lương huyết, chỉ huyết",
    bt: "Tê giác địa hoàng thang",
    tpbt: ["Sinh địa 16g", "Xích thược 12g", "Mẫu đơn bì 10g", "Trắc bách diệp 12g"]
  },
  "tam_tieu_ty_than_duong_khuy": {
    stt: 1049,
    hc: "Tỳ Thận dương hư tam tiêu",
    phanloai: ["Phủ Tam tiêu", "Hàn", "Hư", "Tỳ Thận dương hư"],
    tc: ["Phù thũng toàn thân sợ lạnh chân tay lạnh", "Mạch trầm tế"],
    pdt: "Ôn bổ tỳ thận, lợi thủy",
    bt: "Chân vũ thang hợp Hữu quy hoàn",
    tpbt: ["Hắc phụ tử 8g", "Bạch truật 12g", "Phục linh 12g", "Thục địa 16g", "Đỗ trọng 12g"]
  },
  "tam_tieu_thu_nhiet_ngoai_cam": {
    stt: 1050,
    hc: "Tam tiêu thử nhiệt ngoại cảm",
    phanloai: ["Phủ Tam tiêu", "Nhiệt", "Thực", "Thử nhiệt"],
    tc: ["Sốt cao mùa hè khát nước mệt mỏi", "Mạch nhu sác"],
    pdt: "Thanh thử giải biểu",
    bt: "Thanh thử ích khí thang",
    tpbt: ["Tây qua diệp 12g", "Thạch cao 15g", "Mạch môn 12g", "Đảng sâm 12g", "Hoàng kỳ 12g"]
  },
  "tam_tieu_can_khi_pham_tieu": {
    stt: 1051,
    hc: "Can khí phạm tam tiêu",
    phanloai: ["Phủ Tam tiêu", "Bình", "Thực", "Khí trệ"],
    tc: ["Ngực sườn bụng trướng căng do cáu gắt", "Mạch huyền"],
    pdt: "Sơ can lý khí",
    bt: "Sài hồ sơ can tán",
    tpbt: ["Sài hồ 10g", "Chỉ xác 8g", "Bạch thược 12g", "Xuyên khung 10g", "Trần bì 6g"]
  },
  "tam_tieu_vi_khi_nghich": {
    stt: 1052,
    hc: "Tam tiêu Vị khí thượng nghịch",
    phanloai: ["Phủ Tam tiêu", "Bình", "Thực", "Khí nghịch"],
    tc: ["Buồn nôn nấc cụt trướng bụng", "Mạch huyền hoạt"],
    pdt: "Giáng nghịch hóa trọc",
    bt: "Bán hạ tả tâm thang",
    tpbt: ["Bán hạ chế 10g", "Hoàng cầm 10g", "Đảng sâm 12g", "Can khương 6g", "Hoàng liên 6g"]
  },
  "tam_tieu_huyet_u_lac_dinh": {
    stt: 1053,
    hc: "Tam tiêu huyết ứ trệ kinh lạc",
    phanloai: ["Phủ Tam tiêu", "Bình", "Thực", "Huyết ứ"],
    tc: ["Đau nhói nhiều chỗ sắc mặt sạm", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ",
    bt: "Huyết phủ trục ứ thang",
    tpbt: ["Đương quy 12g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Xuyên khung 10g"]
  },
  "tam_tieu_khi_uat_hoa_hoa": {
    stt: 1054,
    hc: "Tam tiêu khí uất hóa hỏa",
    phanloai: ["Phủ Tam tiêu", "Nhiệt", "Thực", "Khí uất hóa hỏa"],
    tc: ["Bứt rứt ngực sườn trướng căng miệng đắng", "Mạch huyền sác"],
    pdt: "Sơ can tả hỏa, lý khí",
    bt: "Đan tiêu tiêu dao tán",
    tpbt: ["Sài hồ 10g", "Bạch thược 12g", "Đương quy 12g", "Chi tử 10g", "Mẫu đơn bì 10g"]
  },
  "tam_tieu_am_duong_luong_hu": {
    stt: 1055,
    hc: "Tam tiêu âm dương lưỡng khuy",
    phanloai: ["Phủ Tam tiêu", "Bình", "Hư", "Âm dương lưỡng hư"],
    tc: ["Mệt mỏi toàn thân vừa sợ lạnh vừa lòng bàn tay chân nóng", "Mạch trầm tế sác"],
    pdt: "Âm dương song bổ",
    bt: "Nhị tiên thang hợp Lục vị địa hoàng hoàn",
    tpbt: ["Tiên mao 10g", "Tiên linh tỳ 10g", "Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g"]
  },
  "bat_cuong_bieu_han": {
    stt: 1056,
    hc: "Biểu hàn chứng",
    phanloai: ["Bát cương", "Biểu", "Hàn", "Thực"],
    tc: ["Sợ lạnh phát sốt không có mồ hôi", "Đau đầu mỏi người", "Mạch phù khẩn"],
    pdt: "Tân ôn giải biểu",
    bt: "Ma hoàng thang",
    tpbt: ["Ma hoàng 8g", "Quế chi 8g", "Hạnh nhân 10g", "Cam thảo 6g"]
  },
  "bat_cuong_bieu_nhiet": {
    stt: 1057,
    hc: "Biểu nhiệt chứng",
    phanloai: ["Bát cương", "Biểu", "Nhiệt", "Thực"],
    tc: ["Phát sốt sợ gió họng đau", "Ho nhẹ", "Mạch phù sác"],
    pdt: "Tân lương giải biểu",
    bt: "Ngân kiều tán",
    tpbt: ["Kim ngân hoa 12g", "Liên kiều 10g", "Bạc hà 6g", "Cát cánh 8g", "Cúc hoa 10g"]
  },
  "bat_cuong_ly_han": {
    stt: 1058,
    hc: "Lý hàn chứng",
    phanloai: ["Bát cương", "Lý", "Hàn", "Hư"],
    tc: ["Bụng lạnh đau thích ấm", "Sợ lạnh tay chân lạnh", "Đại tiện lỏng", "Mạch trầm trì"],
    pdt: "Ôn trung tán hàn",
    bt: "Lý trung hoàn",
    tpbt: ["Đảng sâm 12g", "Can khương 6g", "Bạch truật 12g", "Cam thảo 6g"]
  },
  "bat_cuong_ly_nhiet": {
    stt: 1059,
    hc: "Lý nhiệt chứng",
    phanloai: ["Bát cương", "Lý", "Nhiệt", "Thực"],
    tc: ["Sốt cao phiền khát", "Mặt đỏ tiểu vàng", "Rêu vàng", "Mạch sác lực"],
    pdt: "Thanh nhiệt tả hỏa",
    bt: "Bạch hổ thang",
    tpbt: ["Thạch cao 20g", "Tri mẫu 12g", "Ngạnh mễ 15g", "Cam thảo 6g"]
  },
  "bat_cuong_ly_hu": {
    stt: 1060,
    hc: "Lý hư chứng",
    phanloai: ["Bát cương", "Lý", "Bình", "Hư"],
    tc: ["Mệt mỏi đoản khí", "Sắc mặt nhợt", "Ăn kém", "Mạch tế nhược"],
    pdt: "Bổ ích khí huyết",
    bt: "Tứ quân tử thang hợp Tứ vật thang",
    tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Thục địa 16g", "Đương quy 12g"]
  },
  "bat_cuong_ly_thuc": {
    stt: 1061,
    hc: "Lý thực chứng",
    phanloai: ["Bát cương", "Lý", "Bình", "Thực"],
    tc: ["Bụng trướng đau cự án", "Đại tiện bí kết", "Mạch thực lực"],
    pdt: "Công hạ tích trệ",
    bt: "Đại thừa khí thang",
    tpbt: ["Đại hoàng 12g", "Hậu phác 10g", "Mang tiêu 10g", "Chỉ thực 10g"]
  },
  "bat_cuong_am_hu": {
    stt: 1062,
    hc: "Âm hư chứng",
    phanloai: ["Bát cương", "Lý", "Nhiệt", "Hư"],
    tc: ["Triều nhiệt đạo hãn", "Lòng bàn tay chân nóng", "Miệng khô họng ráo", "Mạch tế sác"],
    pdt: "Tư âm giáng hỏa",
    bt: "Lục vị địa hoàng hoàn",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Phục linh 12g"]
  },
  "bat_cuong_duong_hu": {
    stt: 1063,
    hc: "Dương hư chứng",
    phanloai: ["Bát cương", "Lý", "Hàn", "Hư"],
    tc: ["Sợ lạnh rõ rệt tay chân lạnh ngắt", "Sắc mặt trắng nhợt", "Mạch trầm vi", "Tiểu trong dài"],
    pdt: "Ôn dương bổ khí",
    bt: "Hữu quy hoàn hợp Tứ nghịch thang",
    tpbt: ["Phụ tử chế 8g", "Nhục quế 6g", "Thục địa 16g", "Sơn thù nhục 8g", "Đảng sâm 12g"]
  },
  "khi_hu_chung": {
    stt: 1064,
    hc: "Khí hư chứng",
    phanloai: ["Khí Huyết Tân Dịch", "Bình", "Hư", "Khí hư"],
    tc: ["Mệt mỏi đoản khí", "Tiếng nói nhỏ lười nói", "Sắc mặt nhợt", "Mạch tế nhược"],
    pdt: "Bổ khí kiện tỳ",
    bt: "Tứ quân tử thang",
    tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Cam thảo 6g"]
  },
  "khi_ham_chung": {
    stt: 1065,
    hc: "Khí hãm chứng",
    phanloai: ["Khí Huyết Tân Dịch", "Bình", "Hư", "Khí hãm"],
    tc: ["Nội tạng sa giáng", "Bụng dưới nặng tức", "Mệt mỏi chóng mặt", "Mạch nhược"],
    pdt: "Bổ khí thăng dương",
    bt: "Bổ trung ích khí thang",
    tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Bạch truật 12g", "Cam thảo 6g", "Sài hồ 6g", "Thăng ma 6g"]
  },
  "khi_tre_chung": {
    stt: 1066,
    hc: "Khí trệ chứng",
    phanloai: ["Khí Huyết Tân Dịch", "Bình", "Thực", "Khí trệ"],
    tc: ["Ngực sườn bụng trướng đau không cố định", "Hay thở dài", "Mạch huyền"],
    pdt: "Hành khí khai uất",
    bt: "Sài hồ sơ can tán",
    tpbt: ["Sài hồ 10g", "Chỉ xác 8g", "Bạch thược 12g", "Xuyên khung 10g", "Hương phụ 10g"]
  },
  "khi_nghich_chung": {
    stt: 1067,
    hc: "Khí nghịch chứng",
    phanloai: ["Khí Huyết Tân Dịch", "Bình", "Thực", "Khí nghịch"],
    tc: ["Ho hen nấc cụt buồn nôn", "Đầu choáng váng", "Mạch huyền hoạt"],
    pdt: "Giáng khí định nghịch",
    bt: "Toàn phúc đại giả thạch thang",
    tpbt: ["Toàn phúc hoa 10g", "Đại giả thạch 15g", "Bán hạ chế 10g", "Trần bì 6g"]
  },
  "khi_thoat_chung": {
    stt: 1068,
    hc: "Khí thoát chứng",
    phanloai: ["Khí Huyết Tân Dịch", "Hàn", "Hư", "Khí thoát"],
    tc: ["Thở gấp mồ hôi vã đầm đìa", "Tay chân lạnh ngắt", "Mạch vi dục tuyệt"],
    pdt: "Ích khí cố thoát, cứu nghịch",
    bt: "Sâm phụ thang",
    tpbt: ["Nhân sâm 12g", "Hắc phụ tử 12g"]
  },
  "huyet_hu_chung": {
    stt: 1069,
    hc: "Huyết hư chứng",
    phanloai: ["Khí Huyết Tân Dịch", "Bình", "Hư", "Huyết hư"],
    tc: ["Chóng mặt hoa mắt", "Sắc mặt nhợt móng tay nhợt", "Mạch tế nhược"],
    pdt: "Dưỡng huyết bổ tâm can",
    bt: "Tứ vật thang",
    tpbt: ["Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g"]
  },
  "huyet_u_chung": {
    stt: 1070,
    hc: "Huyết ứ chứng",
    phanloai: ["Khí Huyết Tân Dịch", "Bình", "Thực", "Huyết ứ"],
    tc: ["Đau nhói cố định cự án", "Chất lưỡi tím tối", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ",
    bt: "Huyết phủ trục ứ thang",
    tpbt: ["Đương quy 12g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Xuyên khung 10g"]
  },
  "huyet_nhiet_chung": {
    stt: 1071,
    hc: "Huyết nhiệt chứng",
    phanloai: ["Khí Huyết Tân Dịch", "Nhiệt", "Thực", "Huyết nhiệt"],
    tc: ["Xuất huyết các khiếu", "Sắc mặt đỏ bứt rứt", "Mạch sác lực"],
    pdt: "Lương huyết chỉ huyết",
    bt: "Tê giác địa hoàng thang",
    tpbt: ["Sinh địa 16g", "Xích thược 12g", "Mẫu đơn bì 10g"]
  },
  "huyet_han_chung": {
    stt: 1072,
    hc: "Huyết hàn chứng",
    phanloai: ["Khí Huyết Tân Dịch", "Hàn", "Thực", "Huyết hàn"],
    tc: ["Đau bụng kinh đau các chi gặp lạnh tăng", "Mạch trầm khẩn"],
    pdt: "Ôn kinh tán hàn, hoạt huyết",
    bt: "Ôn kinh thang",
    tpbt: ["Đương quy 12g", "Xuyên khung 10g", "Bạch thược 12g", "Quế chi 8g", "Ngô thù du 6g"]
  },
  "dam_am_chung": {
    stt: 1073,
    hc: "Đàm ẩm chứng",
    phanloai: ["Khí Huyết Tân Dịch", "Hàn", "Thực", "Đàm ẩm"],
    tc: ["Ho đờm loãng ngực tức", "Chóng mặt buồn nôn", "Mạch huyền hoạt"],
    pdt: "Ôn hóa đàm ẩm",
    bt: "Linh quế truật cam thang",
    tpbt: ["Phục linh 12g", "Quế chi 8g", "Bạch truật 12g", "Cam thảo 6g"]
  },
  "thuy_thung_chung": {
    stt: 1074,
    hc: "Thủy thũng chứng",
    phanloai: ["Khí Huyết Tân Dịch", "Bình", "Thực", "Thủy thấp"],
    tc: ["Phù thũng toàn thân ấn lõm", "Mệt mỏi", "Mạch trầm trì"],
    pdt: "Hóa khí lợi thủy",
    bt: "Ngũ linh tán",
    tpbt: ["Phục linh 12g", "Trư linh 10g", "Trạch tả 10g", "Bạch truật 12g", "Quế chi 8g"]
  },
  "tan_dich_khuy_ton": {
    stt: 1075,
    hc: "Tân dịch khuy tổn chứng",
    phanloai: ["Khí Huyết Tân Dịch", "Nhiệt", "Hư", "Tân dịch hư"],
    tc: ["Miệng khô họng khát da khô", "Đại tiện táo", "Mạch tế sác"],
    pdt: "Tư âm sinh tân",
    bt: "Tăng dịch thang",
    tpbt: ["Sinh địa 16g", "Mạch môn 12g", "Huyền sâm 12g"]
  },
  "thai_duong_bieu_han": {
    stt: 1076,
    hc: "Thái dương biểu hàn chứng",
    phanloai: ["Lục kinh", "Biểu", "Hàn", "Thực"],
    tc: ["Sợ lạnh phát sốt không có mồ hôi", "Đau đầu cứng gáy", "Mạch phù khẩn"],
    pdt: "Tân ôn giải biểu",
    bt: "Ma hoàng thang",
    tpbt: ["Ma hoàng 8g", "Quế chi 8g", "Hạnh nhân 10g", "Cam thảo 6g"]
  },
  "thai_duong_bieu_nhiet": {
    stt: 1077,
    hc: "Thái dương biểu nhiệt chứng",
    phanloai: ["Lục kinh", "Biểu", "Nhiệt", "Thực"],
    tc: ["Sốt sợ gió ra mồ hôi", "Đau đầu họng rát", "Mạch phù hoãn"],
    pdt: "Tân lương giải biểu",
    bt: "Quế chi thang",
    tpbt: ["Quế chi 8g", "Bạch thược 8g", "Sinh khương 6g", "Đại táo 3 quả", "Cam thảo 6g"]
  },
  "thai_duong_suc_thuy": {
    stt: 1078,
    hc: "Thái dương súc thủy chứng",
    phanloai: ["Lục kinh", "Biểu lý", "Nhiệt", "Thực"],
    tc: ["Phát sốt khát nước uống vào nôn ra ngay", "Tiểu tiện khó khăn", "Mạch phù tế sác"],
    pdt: "Hóa khí lợi thủy",
    bt: "Ngũ linh tán",
    tpbt: ["Phục linh 12g", "Trư linh 10g", "Trạch tả 10g", "Bạch truật 12g", "Quế chi 8g"]
  },
  "thai_duong_suc_huyet": {
    stt: 1079,
    hc: "Thái dương súc huyết chứng",
    phanloai: ["Lục kinh", "Biểu lý", "Thực", "Huyết ứ"],
    tc: ["Bụng dưới trướng đầy phát cuồng hoặc tiểu tiện tự lợi", "Chất lưỡi tím", "Mạch trầm tế"],
    pdt: "Hoạt huyết hóa ứ, thông lạc",
    bt: "Đào hạch thừa khí thang",
    tpbt: ["Đào nhân 12g", "Đại hoàng 10g", "Quế chi 8g", "Mang tiêu 8g", "Cam thảo 6g"]
  },
  "duong_minh_kinh_chung": {
    stt: 1080,
    hc: "Dương minh kinh chứng",
    phanloai: ["Lục kinh", "Lý", "Nhiệt", "Thực"],
    tc: ["Sốt cao mặt đỏ khát nước nhiều", "Mồ hôi ra đầm đìa", "Mạch hồng đại hữu lực"],
    pdt: "Thanh nhiệt sinh tân",
    bt: "Bạch hổ thang",
    tpbt: ["Thạch cao 20g", "Tri mẫu 12g", "Ngạnh mễ 15g", "Cam thảo 6g"]
  },
  "duong_minh_phu_chung": {
    stt: 1081,
    hc: "Dương minh phủ chứng",
    phanloai: ["Lục kinh", "Lý", "Nhiệt", "Thực"],
    tc: ["Bụng trướng đau cự án táo bón", "Sốt cao chiều về nặng trán", "Mạch trầm thực"],
    pdt: "Công hạ tích nhiệt",
    bt: "Đại thừa khí thang",
    tpbt: ["Đại hoàng 12g", "Hậu phác 10g", "Mang tiêu 10g", "Chỉ thực 10g"]
  },
  "thieu_duong_chung": {
    stt: 1082,
    hc: "Thiếu dương chứng",
    phanloai: ["Lục kinh", "Bán biểu bán lý", "Hòa", "Hư thực"],
    tc: ["Ngực sườn trướng đau miệng đắng họng khô", "Hàn nhiệt vãng lai", "Mạch huyền"],
    pdt: "Hòa giải thiếu dương",
    bt: "Tiểu sài hồ thang",
    tpbt: ["Sài hồ 10g", "Hoàng cầm 10g", "Bán hạ chế 10g", "Đảng sâm 12g", "Cam thảo 6g", "Sinh khương 6g", "Đại táo 3 quả"]
  },
  "thai_am_benh_chung": {
    stt: 1083,
    hc: "Thái âm bệnh chứng",
    phanloai: ["Lục kinh", "Lý", "Hàn", "Hư"],
    tc: ["Bụng đầy trướng tiêu chảy phân lỏng", "Không khát nước", "Mạch trầm hoãn hoặc tế"],
    pdt: "Ôn trung kiện tỳ",
    bt: "Lý trung hoàn",
    tpbt: ["Đảng sâm 12g", "Can khương 6g", "Bạch truật 12g", "Cam thảo 6g"]
  },
  "thieu_am_han_hoa": {
    stt: 1084,
    hc: "Thiếu âm hàn hóa chứng",
    phanloai: ["Lục kinh", "Lý", "Hàn", "Hư"],
    tc: ["Sợ lạnh tay chân lạnh co ro", "Ngủ gà ngủ gật tiêu chảy phân lỏng", "Mạch trầm vi tế"],
    pdt: "Hồi dương cứu nghịch",
    bt: "Tứ nghịch thang",
    tpbt: ["Hắc phụ tử 12g", "Can khương 8g", "Cam thảo 6g"]
  },
  "thieu_am_nhiet_hoa": {
    stt: 1085,
    hc: "Thiếu âm nhiệt hóa chứng",
    phanloai: ["Lục kinh", "Lý", "Nhiệt", "Hư"],
    tc: ["Tâm phiền mất ngủ loét miệng lưỡi", "Lòng bàn tay chân nóng", "Mạch tế sác"],
    pdt: "Tư âm giáng hỏa, giao tâm thận",
    bt: "Hoàng liên A giao thang",
    tpbt: ["Hoàng liên 8g", "A giao 10g", "Hoàng cầm 8g", "Bạch thược 12g", "Kê tử hoàng 1 cái"]
  },
  "quyet_am_benh_chung": {
    stt: 1086,
    hc: "Quyết âm bệnh chứng",
    phanloai: ["Lục kinh", "Hàn nhiệt thác tạp", "Hư thực", "Quyết âm"],
    tc: ["Tay chân lạnh ngắt kèm tâm phiền nhiệt", "Đau bụng nôn giun", "Mạch huyền hoặc tế"],
    pdt: "Ôn tạng khử hàn, thanh thượng ôn hạ",
    bt: "Ôn tạng thang",
    tpbt: ["Đương quy 12g", "Quế chi 8g", "Thục địa 16g", "Tế tân 4g", "Mộc thông 8g", "Xuyên tiêu 6g"]
  },
  "ve_phan_chung": {
    stt: 1087,
    hc: "Vệ phận chứng",
    phanloai: ["Vệ Khí Dinh Huyết", "Biểu", "Nhiệt", "Thực"],
    tc: ["Phát sốt sợ gió nhẹ đau đầu", "Họng rát rêu lưỡi mỏng", "Mạch phù sác"],
    pdt: "Tân lương giải biểu, thanh nhiệt",
    bt: "Ngân kiều tán",
    tpbt: ["Kim ngân hoa 12g", "Liên kiều 10g", "Bạc hà 6g", "Cát cánh 8g", "Ngưu bàng tử 10g"]
  },
  "khi_phan_chung": {
    stt: 1088,
    hc: "Khí phận chứng",
    phanloai: ["Vệ Khí Dinh Huyết", "Lý", "Nhiệt", "Thực"],
    tc: ["Sốt cao khát nước phiền táo ra mồ hôi", "Rêu vàng", "Mạch hồng sác"],
    pdt: "Thanh nhiệt tả hỏa, sinh tân",
    bt: "Bạch hổ thang",
    tpbt: ["Thạch cao 20g", "Tri mẫu 12g", "Ngạnh mễ 15g", "Cam thảo 6g"]
  },
  "dinh_phan_chung": {
    stt: 1089,
    hc: "Dinh phận chứng",
    phanloai: ["Vệ Khí Dinh Huyết", "Lý", "Nhiệt", "Hư thực"],
    tc: ["Sốt cao về đêm tâm phiền trằn trọc", "Mê sảng nói nhảm phát ban nhẹ", "Lưỡi đỏ sẫm", "Mạch tế sác"],
    pdt: "Thanh dinh thấu nhiệt, lương huyết",
    bt: "Thanh dinh thang",
    tpbt: ["Tê giác 2g", "Sinh địa 16g", "Mạch môn 12g", "Hoàng liên 6g", "Kim ngân hoa 12g", "Đan sâm 12g"]
  },
  "huyet_phan_chung": {
    stt: 1090,
    hc: "Huyết phận chứng",
    phanloai: ["Vệ Khí Dinh Huyết", "Lý", "Nhiệt", "Thực"],
    tc: ["Sốt cao xuất huyết các khiếu ban chẩn sẫm màu", "Hôn mê nói sảng", "Lưỡi tím sẫm", "Mạch tế sác"],
    pdt: "Thanh nhiệt lương huyết, hoạt huyết hóa ứ",
    bt: "Tê giác địa hoàng thang",
    tpbt: ["Sinh địa 16g", "Xích thược 12g", "Mẫu đơn bì 10g", "Tê giác 2g"]
  },
  "ve_khi_dong_su": {
    stt: 1091,
    hc: "Vệ khí đồng bệnh chứng",
    phanloai: ["Vệ Khí Dinh Huyết", "Biểu lý", "Nhiệt", "Thực"],
    tc: ["Vừa sốt sợ gió vừa sốt cao phiền khát", "Mạch phù sác hữu lực"],
    pdt: "Giải biểu thanh lý",
    bt: "Ngân kiều tán hợp Bạch hổ thang",
    tpbt: ["Kim ngân hoa 12g", "Liên kiều 10g", "Thạch cao 20g", "Tri mẫu 12g", "Bạc hà 6g"]
  },
  "khi_dinh_luong_gian": {
    stt: 1092,
    hc: "Khí dinh lưỡng bàn chứng",
    phanloai: ["Vệ Khí Dinh Huyết", "Lý", "Nhiệt", "Thực"],
    tc: ["Sốt cao phiền táo mê sảng nhẹ", "Miệng khát rêu vàng", "Mạch sác"],
    pdt: "Thanh khí lương huyết",
    bt: "Thanh dinh thang hợp Bạch hổ thang",
    tpbt: ["Sinh địa 16g", "Mạch môn 12g", "Thạch cao 20g", "Hoàng liên 6g", "Đan sâm 12g"]
  },
  "dinh_huyet_luong_kien": {
    stt: 1093,
    hc: "Dinh huyết lưỡng kiêm chứng",
    phanloai: ["Vệ Khí Dinh Huyết", "Lý", "Nhiệt", "Thực"],
    tc: ["Sốt cao về đêm xuất huyết ban chẩn đậm", "Hôn mê nói sảng", "Mạch tế sác"],
    pdt: "Thanh dinh lương huyết, giải độc",
    bt: "Tê giác địa hoàng thang hợp Thanh dinh thang",
    tpbt: ["Sinh địa 16g", "Xích thược 12g", "Mẫu đơn bì 10g", "Hoàng liên 6g", "Mạch môn 12g"]
  },
  "duong_minh_nhiet_thinh": {
    stt: 1094,
    hc: "Dương minh nhiệt thịnh chứng",
    phanloai: ["Vệ Khí Dinh Huyết", "Lý", "Nhiệt", "Thực"],
    tc: ["Sốt cao mặt đỏ mồ hôi ra như tắm", "Khát nước thèm lạnh", "Mạch hồng đại"],
    pdt: "Thanh nhiệt sinh tân",
    bt: "Bạch hổ gia nhân sâm thang",
    tpbt: ["Thạch cao 20g", "Tri mẫu 12g", "Đảng sâm 12g", "Ngạnh mễ 15g", "Cam thảo 6g"]
  },
  "thieu_am_hu_kiệt": {
    stt: 1095,
    hc: "Thiếu âm hư kiệt chứng",
    phanloai: ["Lục kinh", "Lý", "Hàn", "Hư thoát"],
    tc: ["Mạch vi dục tuyệt mồ hôi vã lạnh", "Tay chân lạnh ngắt thần khí uể oải", "Hôn mê"],
    pdt: "Hồi dương cứu nghịch, ích khí cố thoát",
    bt: "Sâm phụ thang",
    tpbt: ["Nhân sâm 12g", "Hắc phụ tử 12g"]
  },
  "thu_thai_am_phe_kinh": {
    stt: 1096,
    hc: "Thủ thái âm Phế kinh chứng",
    phanloai: ["Kinh lạc", "Biểu", "Hư thực", "Phế kinh"],
    tc: ["Khuyết bồn đau tức", "Cánh tay trong đau mỏi dọc đường đi của kinh", "Sốt ngột ngạt", "Mạch phù"],
    pdt: "Khu phong tán hàn, sơ thông kinh lạc",
    bt: "Thông kinh hoạt lạc thang",
    tpbt: ["Khương hoạt 10g", "Độc hoạt 10g", "Quế chi 8g", "Uy linh tiên 10g", "Cam thảo 6g"]
  },
  "thu_duong_minh_dai_trang_kinh": {
    stt: 1097,
    hc: "Thủ dương minh Đại tràng kinh chứng",
    phanloai: ["Kinh lạc", "Biểu", "Nhiệt", "Đại tràng kinh"],
    tc: ["Răng lợi sưng đau", "Cổ họng sưng nề", "Mặt trước ngón trỏ và cánh tay đau nhức", "Mạch phù sác"],
    pdt: "Thanh nhiệt lương huyết, thông kinh lạc",
    bt: "Thanh vị tán hợp Hoàng liên giải độc thang",
    tpbt: ["Hoàng liên 8g", "Thăng ma 6g", "Sinh địa 16g", "Mẫu đơn bì 10g", "Chi tử 10g", "Hoàng cầm 10g"]
  },
  "tuc_duong_minh_vi_kinh": {
    stt: 1098,
    hc: "Túc dương minh Vị kinh chứng",
    phanloai: ["Kinh lạc", "Biểu", "Nhiệt", "Vị kinh"],
    tc: ["Đau đầu vùng trán", "Mặt sưng đau", "Đau dọc mặt trước chân đùi", "Sốt trán nóng"],
    pdt: "Thanh nhiệt lợi thấp, sơ thông kinh lạc",
    bt: "Bạch hổ thang gia vị",
    tpbt: ["Thạch cao 20g", "Tri mẫu 12g", "Ngạnh mễ 15g", "Cam thảo 6g", "Ngưu tất 12g"]
  },
  "tuc_thai_am_ty_kinh": {
    stt: 1099,
    hc: "Túc thái âm Tỳ kinh chứng",
    phanloai: ["Kinh lạc", "Lý", "Hư", "Tỳ kinh"],
    tc: ["Gốc lưỡi cứng đau", "Vùng vị quản trướng đau", "Mặt trong đùi và chân lạnh đau", "Mạch tế nhược"],
    pdt: "Ôn kinh tán hàn, kiện tỳ thông lạc",
    bt: "Lý trung hoàn hợp Đương quy tứ nghịch thang",
    tpbt: ["Đảng sâm 12g", "Can khương 6g", "Bạch truật 12g", "Đương quy 12g", "Quế chi 8g", "Xích thược 12g"]
  },
  "thu_shieu_am_tam_kinh": {
    stt: 1100,
    hc: "Thủ thiếu âm Tâm kinh chứng",
    phanloai: ["Kinh lạc", "Lý", "Hư", "Tâm kinh"],
    tc: ["Lòng bàn tay nóng", "Vùng tim ngực đau tức", "Mặt trong cánh tay đau nhức", "Mạch tế"],
    pdt: "Dưỡng tâm an thần, thông kinh hoạt lạc",
    bt: "Thiên vương bổ tâm đan",
    tpbt: ["Sinh địa 16g", "Đảng sâm 12g", "Đan sâm 12g", "Bách hợp 12g", "Toan táo nhân 12g", "Viễn chí 6g"]
  },
  "thu_thai_duong_tieu_truong_kinh": {
    stt: 1101,
    hc: "Thủ thái dương Tiểu trường kinh chứng",
    phanloai: ["Kinh lạc", "Biểu", "Thực", "Tiểu trường kinh"],
    tc: ["Đau vùng vai gáy và mặt sau ngoài tay", "Cổ gáy cứng đơ", "Ù tai đau họng"],
    pdt: "Khu phong trừ thấp, thông kinh hoạt lạc",
    bt: "Cát căn thang",
    tpbt: ["Cát căn 12g", "Ma hoàng 8g", "Quế chi 8g", "Bạch thược 12g", "Cam thảo 6g", "Sinh khương 6g"]
  },
  "tuc_thai_duong_bang_quang_kinh": {
    stt: 1102,
    hc: "Túc thái dương Bàng quang kinh chứng",
    phanloai: ["Kinh lạc", "Biểu", "Thực", "Bàng quang kinh"],
    tc: ["Đau đầu cứng gáy dọc sống lưng", "Đau thắt lưng lan xuống mặt sau chân", "Mạch phù khẩn"],
    pdt: "Khu phong tán hàn, thông lạc chỉ thống",
    bt: "Độc hoạt tang ký sinh thang",
    tpbt: ["Độc hoạt 12g", "Tang ký sinh 16g", "Phòng phong 10g", "Tần giao 10g", "Quế chi 8g", "Đương quy 12g"]
  },
  "tuc_shieu_am_than_kinh": {
    stt: 1103,
    hc: "Túc thiếu âm Thận kinh chứng",
    phanloai: ["Kinh lạc", "Lý", "Hư", "Thận kinh"],
    tc: ["Lưng gối mỏi yếu đau", "Lòng bàn tay chân nóng", "Cổ họng khô đau", "Mạch trầm tế"],
    pdt: "Tư bổ thận âm, thông kinh lạc",
    bt: "Lục vị địa hoàng hoàn",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Phục linh 12g"]
  },
  "thu_quyet_am_tam_bao_kinh": {
    stt: 1104,
    hc: "Thủ quyết âm Tâm bào kinh chứng",
    phanloai: ["Kinh lạc", "Lý", "Thực", "Tâm bào kinh"],
    tc: ["Ngực tức tim đập mạnh", "Nách sưng đau", "Lòng bàn tay nóng co quắp", "Mạch huyền sác"],
    pdt: "Thanh tâm lương huyết, thông kinh lạc",
    bt: "Đan sâm ẩm",
    tpbt: ["Đan sâm 15g", "Đàn hương 6g", "Sa nhân 6g"]
  },
  "thu_shieu_duong_tam_tieu_kinh": {
    stt: 1105,
    hc: "Thủ thiếu dương Tam tiêu kinh chứng",
    phanloai: ["Kinh lạc", "Biểu", "Thực", "Tam tiêu kinh"],
    tc: ["Tai ù điếc đau vùng tai", "Vai gáy và mặt ngoài tay đau mỏi", "Sốt sợ gió"],
    pdt: "Sơ phong thanh nhiệt, thông lạc",
    bt: "Tiểu sài hồ thang",
    tpbt: ["Sài hồ 10g", "Hoàng cầm 10g", "Bán hạ chế 10g", "Đảng sâm 12g", "Cam thảo 6g"]
  },
  "tuc_shieu_duong_dom_kinh": {
    stt: 1106,
    hc: "Túc thiếu dương Đởm kinh chứng",
    phanloai: ["Kinh lạc", "Biểu", "Thực", "Đởm kinh"],
    tc: ["Đau đầu vùng thái dương hai bên", "Đau tức sườn ngực", "Mặt ngoài chân đau nhức", "Mạch huyền"],
    pdt: "Sơ can lý khí, thông kinh hoạt lạc",
    bt: "Sài hồ sơ can tán",
    tpbt: ["Sài hồ 10g", "Bạch thược 12g", "Chỉ xác 8g", "Xuyên khung 10g", "Trần bì 6g"]
  },
  "tuc_quyet_am_can_kinh": {
    stt: 1107,
    hc: "Túc quyết âm Can kinh chứng",
    phanloai: ["Kinh lạc", "Lý", "Thực", "Can kinh"],
    tc: ["Đau tức vùng hạ vị", "Đau lan tinh hoàn hoặc âm hộ", "Mặt sạm nhợt", "Mạch huyền"],
    pdt: "Ôn kinh tán hàn, sơ can lý khí",
    bt: "Noãn can tiễn",
    tpbt: ["Tiểu hồi hương 10g", "Nhục quế 6g", "Đương quy 12g", "Câu kỷ tử 12g", "Ô dược 10g"]
  },
  "doc_mach_chung": {
    stt: 1108,
    hc: "Đốc mạch bệnh chứng",
    phanloai: ["Kỳ kinh", "Lý", "Thực", "Đốc mạch"],
    tc: ["Cột sống cứng đơ đau nhức", "Đầu choáng tai ù", "Co giật uốn ván lưng", "Mạch huyền khẩn"],
    pdt: "Khu phong tán hàn, ôn dương thông lạc",
    bt: "Cát căn thang hợp Quế chi gia phụ tử thang",
    tpbt: ["Cát căn 12g", "Quế chi 8g", "Phụ tử chế 8g", "Bạch thược 12g", "Cam thảo 6g"]
  },
  "nham_mach_chung": {
    stt: 1109,
    hc: "Nhâm mạch bệnh chứng",
    phanloai: ["Kỳ kinh", "Lý", "Hư", "Nhâm mạch"],
    tc: ["Bụng dưới kết hòn cục ở nữ (chứng tích)", "Kinh nguyệt không đều", "Nam giới thất tinh", "Mạch trầm tế"],
    pdt: "Bổ thận dưỡng huyết, điều xung nhâm",
    bt: "Ôn kinh thang",
    tpbt: ["Đương quy 12g", "Xuyên khung 10g", "Bạch thược 12g", "Quế chi 8g", "Ngô thù du 6g", "A giao 10g"]
  },
  "xung_mach_chung": {
    stt: 1110,
    hc: "Xung mạch bệnh chứng",
    phanloai: ["Kỳ kinh", "Lý", "Thực", "Xung mạch"],
    tc: ["Khí nghịch lên ngực gây hồi hộp bứt rứt", "Bụng dưới quặn đau", "Mạch huyền"],
    pdt: "Giáng nghịch hóa trọc, điều xung",
    bt: "Toàn phúc đại giả thạch thang",
    tpbt: ["Toàn phúc hoa 10g", "Đại giả thạch 15g", "Bán hạ chế 10g", "Trần bì 6g"]
  },
  "doi_mach_chung": {
    stt: 1111,
    hc: "Đới mạch bệnh chứng",
    phanloai: ["Kỳ kinh", "Lý", "Hư", "Đới mạch"],
    tc: ["Vùng thắt lưng như ngồi trong nước lạnh", "Đới hạ ra nhiều", "Chân tay mỏi yếu", "Mạch trầm tế"],
    pdt: "Ôn bổ tỳ thận, cố đới",
    bt: "Hoàn đới thang",
    tpbt: ["Bạch truật 16g", "Hoài sơn 16g", "Nhân sâm 10g", "Bạch thược 12g", "Xa tiền tử 12g"]
  },
  "am_kieu_mach_chung": {
    stt: 1112,
    hc: "Âm kiều mạch bệnh chứng",
    phanloai: ["Kỳ kinh", "Lý", "Hư", "Âm kiều mạch"],
    tc: ["Mắt nhắm không muốn mở hay buồn ngủ", "Cơ bắp mặt trong chân co rút", "Mạch trầm tế"],
    pdt: "Dưỡng huyết thư cân, an thần",
    bt: "Tứ vật thang hợp An thần định chí hoàn",
    tpbt: ["Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g", "Phục thần 12g"]
  },
  "duong_kieu_mach_chung": {
    stt: 1113,
    hc: "Dương kiều mạch bệnh chứng",
    phanloai: ["Kỳ kinh", "Lý", "Thực", "Dương kiều mạch"],
    tc: ["Mắt mở to khó nhắm", "Cơ bắp mặt ngoài chân co cứng", "Chứng cuồng", "Mạch huyền sác"],
    pdt: "Khu phong thanh nhiệt, thư cân",
    bt: "Tần giao tang ký sinh thang",
    tpbt: ["Tần giao 12g", "Tang ký sinh 16g", "Phòng phong 10g", "Xích thược 12g"]
  },
  "am_duy_mach_chung": {
    stt: 1114,
    hc: "Âm duy mạch bệnh chứng",
    phanloai: ["Kỳ kinh", "Lý", "Hư", "Âm duy mạch"],
    tc: ["Chứng tâm thống (đau tim ngực)", "Buồn bực bứt rứt", "Mạch tế nhược"],
    pdt: "Bổ khí dưỡng huyết, an tâm",
    bt: "Đan sâm ẩm hợp Cam mạch đại táo thang",
    tpbt: ["Đan sâm 15g", "Đàn hương 6g", "Cam thảo 6g", "Tiểu mạch 30g", "Đại táo 5 quả"]
  },
  "duong_duy_mach_chung": {
    stt: 1115,
    hc: "Dương duy mạch bệnh chứng",
    phanloai: ["Kỳ kinh", "Lý", "Thực", "Dương duy mạch"],
    tc: ["Phát sốt sợ lạnh ngoài da", "Đau nhức các khớp xương", "Mạch phù"],
    pdt: "Giải biểu thấu tà, thông lạc",
    bt: "Tiểu sài hồ thang hợp Quế chi thang",
    tpbt: ["Sài hồ 10g", "Hoàng cầm 10g", "Quế chi 8g", "Bạch thược 12g", "Sinh khương 6g"]
  },
  "than_am_hu": {
    stt: 1116,
    hc: "Thận âm hư",
    phanloai: ["Tạng Thận", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Đau lưng mỏi gối ù tai chóng mặt", "Triều nhiệt đạo hãn lòng bàn tay chân nóng", "Di tinh rụng tóc răng lung lay", "Mạch tế sác"],
    pdt: "Tư bổ thận âm",
    bt: "Lục vị địa hoàng hoàn",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Phục linh 12g"]
  },
  "than_duong_hu": {
    stt: 1117,
    hc: "Thận dương hư",
    phanloai: ["Tạng Thận", "Hàn", "Hư", "Dương hư"],
    tc: ["Đau lưng mỏi gối sợ lạnh tay chân lạnh", "Tiểu tiện nhiều lần về đêm tiểu dầm", "Liệt dương di tinh xuất tinh sớm", "Lưỡi bệu nhợt", "Mạch trầm trì tế"],
    pdt: "Ôn bổ thận dương",
    bt: "Hữu quy hoàn",
    tpbt: ["Phụ tử chế 8g", "Nhục quế 6g", "Thục địa 16g", "Sơn thù nhục 8g", "Kỷ tử 12g", "Đỗ trọng 12g", "Lộc giác giao 12g"]
  },
  "than_khi_bhat_co": {
    stt: 1118,
    hc: "Thận khí bất cố",
    phanloai: ["Tạng Thận", "Bình", "Hư", "Khí hư"],
    tc: ["Tiểu tiện rỉ rả tiểu đêm nhiều lần", "Di tinh hoạt tinh đới hạ trắng loãng", "Thắt lưng mỏi yếu", "Mạch trầm tế nhược"],
    pdt: "Bổ thận cố sáp",
    bt: "Tang phiêu tiêu tán",
    tpbt: ["Tang phiêu tiêu 12g", "Long cốt 15g", "Quy bản 12g", "Thạch xương bồ 8g", "Viễn chí 6g", "Phục thần 12g"]
  },
  "than_nap_khi_vo": {
    stt: 1119,
    hc: "Thận bất nạp khí",
    phanloai: ["Tạng Thận", "Bình", "Hư", "Khí hư"],
    tc: ["Ho hen lâu ngày thở gấp khi vận động", "Hơi thở ngắn tiếng nói nhỏ", "Thắt lưng mỏi tự ra mồ hôi", "Mạch trầm tế vô lực"],
    pdt: "Ôn thận nạp khí",
    bt: "Kim quỹ thận khí hoàn gia giảm",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Đỗ trọng 12g", "Phụ tử chế 8g", "Nhục quế 6g", "Hải mã 1 đôi", "Nhân sâm 10g"]
  },
  "than_tinh_bat_tuc": {
    stt: 1120,
    hc: "Thận tinh bất túc",
    phanloai: ["Tạng Thận", "Bình", "Hư", "Tinh hư"],
    tc: ["Đầu choáng tai ù", "Trí nhớ giảm sút", "Răng lung lay tóc rụng", "Chân tay mỏi yếu", "Mạch trầm tế"],
    pdt: "Bổ thận ích tinh, điền tủy",
    bt: "Hà xa đại tạo hoàn",
    tpbt: ["Tử hà xe 10g", "Thục địa 16g", "Quy bản 12g", "Kỷ tử 12g", "Đỗ trọng 12g"]
  },
  "than_khi_hu": {
    stt: 1121,
    hc: "Thận khí hư",
    phanloai: ["Tạng Thận", "Bình", "Hư", "Khí hư"],
    tc: ["Thắt lưng mỏi yếu", "Tiểu tiện nhiều lần", "Tiểu rỉ rả về đêm", "Chất lưỡi nhợt", "Mạch trầm tế"],
    pdt: "Bổ ích thận khí",
    bt: "Kim quỹ thận khí hoàn",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Phục linh 12g", "Nhục quế 6g", "Phụ tử chế 8g"]
  },
  "than_am_duong_luong_hu": {
    stt: 1122,
    hc: "Thận âm dương lưỡng hư",
    phanloai: ["Tạng Thận", "Bình", "Hư", "Âm dương lưỡng hư"],
    tc: ["Đau lưng mỏi gối vừa sợ lạnh vừa sốt nóng về chiều", "Tai ù chóng mặt", "Tiểu đêm nhiều", "Mạch trầm tế sác"],
    pdt: "Âm dương song bổ",
    bt: "Nhị tiên thang hợp Lục vị địa hoàng hoàn",
    tpbt: ["Tiên mao 10g", "Tiên linh tỳ 10g", "Đương quy 12g", "Ba kích 12g", "Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g"]
  },
  "than_hu_thuy_lam": {
    stt: 1123,
    hc: "Thận hư thủy lạm",
    phanloai: ["Tạng Thận", "Hàn", "Hư", "Thủy thũng"],
    tc: ["Phù toàn thân nhất là nửa người dưới", "Bụng trướng nước", "Sợ lạnh chân tay lạnh", "Mạch trầm trì"],
    pdt: "Ôn dương lợi thủy",
    bt: "Chân vũ thang",
    tpbt: ["Hắc phụ tử 8g", "Bạch truật 12g", "Phục linh 12g", "Bạch thược 12g", "Sinh khương 6g"]
  },
  "than_lac_huyet_u": {
    stt: 1124,
    hc: "Thận lạc huyết ứ",
    phanloai: ["Tạng Thận", "Bình", "Hư thực thác tạp", "Huyết ứ"],
    tc: ["Thắt lưng đau nhói cố định", "Đau lan xuống mông chân", "Chất lưỡi tím tối", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, thông lạc",
    bt: "Thân thống trục ứ thang",
    tpbt: ["Đương quy 12g", "Xuyên khung 10g", "Đào nhân 12g", "Hồng hoa 8g", "Ngưu tất 12g", "Địa long 10g"]
  },
  "than_hoa_vuong": {
    stt: 1125,
    hc: "Thận hỏa vượng",
    phanloai: ["Tạng Thận", "Nhiệt", "Hư thực thác tạp", "Thận hỏa"],
    tc: ["Dâm dục vọng động", "Di tinh xuất tinh sớm", "Tâm phiền bứt rứt", "Lưỡi đỏ rêu vàng", "Mạch huyền sác"],
    pdt: "Thanh tả thận hỏa",
    bt: "Tri bá địa hoàng hoàn gia giảm",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Phục linh 12g", "Tri mẫu 10g", "Hoàng bá 10g"]
  },
  "can_khi_uat_ket": {
    stt: 1126,
    hc: "Can khí uất kết",
    phanloai: ["Tạng Can", "Bình", "Thực", "Khí trệ"],
    tc: ["Ngực sườn đầy trướng", "Tinh thần u uất", "Hay thở dài", "Dễ cáu gắt", "Kinh nguyệt không đều", "Mạch huyền"],
    pdt: "Sơ can giải uất, lý khí chỉ thống",
    bt: "Sài hồ sơ can tán",
    tpbt: ["Sài hồ 10g", "Bạch thược 12g", "Chỉ xác 8g", "Xuyên khung 10g", "Trần bì 6g", "Chích cam thảo 6g"]
  },
  "ty_hu_dam_thap_beo_phi": {
    stt: 1127,
    hc: "Tỳ hư đàm thấp béo phì",
    phanloai: ["Béo phì", "Hư", "Thực", "Đàm thấp"],
    tc: ["Béo trệ mỡ bụng nhiều", "Mệt mỏi chân tay nặng nề", "Ăn kém đầy bụng", "Mạch nhu nhược"],
    pdt: "Kiện tỳ ích khí, hóa đàm trừ thấp",
    bt: "Lục quân tử thang gia giảm",
    tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Cam thảo 6g", "Bán hạ chế 10g", "Trần bì 6g"]
  },
  "vi_nhiet_thua_can": {
    stt: 1128,
    hc: "Vị nhiệt thặng thực béo phì",
    phanloai: ["Béo phì", "Nhiệt", "Thực", "Vị nhiệt"],
    tc: ["Mau đói ăn nhiều béo phì thể thực", "Miệng hôi khát nước", "Táo bón rêu vàng", "Mạch hoạt sác"],
    pdt: "Thanh vị tả hỏa, tiêu thực hóa trọc",
    bt: "Thanh vị tán hợp Hợp hoan hoàn",
    tpbt: ["Hoàng liên 8g", "Thăng ma 6g", "Sinh địa 16g", "Mẫu đơn bì 10g", "Đại hoàng 8g"]
  },
  "can_khi_uat_trie_beo_bung": {
    stt: 1129,
    hc: "Can khí uất trệ béo bụng",
    phanloai: ["Béo phì", "Bình", "Thực", "Khí trệ"],
    tc: ["Bụng trướng căng sườn đau", "Tinh thần u uất hay thở dài", "Kinh nguyệt không đều", "Mạch huyền"],
    pdt: "Sơ can giải uất, lý khí tiêu mỡ",
    bt: "Sài hồ sơ can tán",
    tpbt: ["Sài hồ 10g", "Bạch thược 12g", "Chỉ xác 8g", "Xuyên khung 10g", "Trần bì 6g", "Hương phụ 10g"]
  },
  "than_duong_hu_thuy_thap": {
    stt: 1130,
    hc: "Thận dương hư thủy thấp béo phì",
    phanloai: ["Béo phì", "Hàn", "Hư", "Thận dương hư"],
    tc: ["Béo phì phù thũng nửa người dưới", "Sợ lạnh tay chân lạnh", "Lưng mỏi tiểu đêm", "Mạch trầm trì"],
    pdt: "Ôn bổ thận dương, hóa khí lợi thủy",
    bt: "Hữu quy hoàn hợp Ngũ linh tán",
    tpbt: ["Phụ tử chế 8g", "Nhục quế 6g", "Thục địa 16g", "Đỗ trọng 12g", "Phục linh 12g", "Trạch tả 10g"]
  },
  "dam_truc_tro_trung_tieu": {
    stt: 1131,
    hc: "Đàm trọc trở trệ trung tiêu",
    phanloai: ["Béo phì", "Bình", "Thực", "Đàm trọc"],
    tc: ["Bụng trướng to mỡ dày", "Đầu nặng hoa mắt", "Đờm nhiều miệng dính", "Mạch huyền hoạt"],
    pdt: "Táo thấp hóa đàm, kiện tỳ tiêu trệ",
    bt: "Ôn đởm thang hợp Bình vị tán",
    tpbt: ["Bán hạ chế 10g", "Trần bì 6g", "Phục linh 12g", "Chỉ thực 8g", "Trúc nhự 10g", "Thương truật 10g"]
  },
  "khi_hu_huyet_u_beo_phi": {
    stt: 1132,
    hc: "Khí hư huyết ứ béo phì",
    phanloai: ["Béo phì", "Bình", "Hư thực", "Khí hư huyết ứ"],
    tc: ["Béo phì mệt mỏi đoản khí", "Chất lưỡi tím điểm ứ huyết", "Đau tức ngực sườn", "Mạch tế sáp"],
    pdt: "Ích khí kiện tỳ, hoạt huyết hóa ứ",
    bt: "Bổ trung ích khí thang hợp Huyết phủ trục ứ thang",
    tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Bạch truật 12g", "Đương quy 12g", "Đào nhân 12g", "Hồng hoa 8g"]
  },
  "tam_tieu_thap_nhiet_beo_phu": {
    stt: 1133,
    hc: "Tam tiêu thấp nhiệt béo phì",
    phanloai: ["Béo phì", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Béo phì người nặng nề nóng bức", "Tiểu tiện đỏ sẻn", "Rêu lưỡi vàng nhớt", "Mạch nhu sác"],
    pdt: "Thanh nhiệt lợi thấp, hóa trọc",
    bt: "Tam nhân thang",
    tpbt: ["Hạnh nhân 10g", "Ý dĩ 15g", "Bạch đậu khấu 8g", "Hậu phác 10g", "Thông thảo 6g", "Trúc diệp 10g"]
  },
  "am_hu_noi_nhiet_beo_phi": {
    stt: 1134,
    hc: "Âm hư nội nhiệt béo phì",
    phanloai: ["Béo phì", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Béo phì kèm lòng bàn tay chân nóng", "Miệng khô khát", "Triều nhiệt đạo hãn", "Mạch tế sác"],
    pdt: "Tư âm giáng hỏa, thanh nhiệt",
    bt: "Lục vị địa hoàng hoàn gia giảm",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Tri mẫu 10g"]
  },
  "ty_vi_thuc_tich_beo_phi": {
    stt: 1135,
    hc: "Tỳ Vị thực tích béo phì",
    phanloai: ["Béo phì", "Bình", "Thực", "Thực tích"],
    tc: ["Bụng trướng đau sau ăn", "Ợ hơi chua hôi", "Đại tiện táo hoặc thối", "Mạch hoạt"],
    pdt: "Tiêu thực hóa tích, giảm béo",
    bt: "Bảo hòa hoàn",
    tpbt: ["Sơn tra 12g", "Thần khúc 10g", "Lai phục tử 10g", "Bán hạ chế 10g", "Trần bì 6g", "Phục linh 12g"]
  },
  "phong_thap_tro_trung_beo_phi": {
    stt: 1136,
    hc: "Phong thấp trở trệ béo phì",
    phanloai: ["Béo phì", "Bình", "Thực", "Phong thấp"],
    tc: ["Béo phì kèm chân tay nặng nề đau mỏi", "Đầu như đội khăn", "Mạch nhu", "Rêu trắng nhớt"],
    pdt: "Khu phong hóa thấp, kiện tỳ",
    bt: "Phòng phong thông thánh tán",
    tpbt: ["Phòng phong 10g", "Kinh giới 10g", "Bạc hà 6g", "Ma hoàng 6g", "Thạch cao 15g", "Đại hoàng 8g"]
  },
  "can_dam_thap_nhiet_beo_bung": {
    stt: 1137,
    hc: "Can Đởm thấp nhiệt béo bụng",
    phanloai: ["Béo phì", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Béo phì mệt mỏi miệng đắng", "Sườn phải trướng đau", "Nước tiểu vàng", "Mạch huyền sác"],
    pdt: "Thanh nhiệt lợi thấp, sơ can",
    bt: "Long đởm tả can thang",
    tpbt: ["Long đởm thảo 12g", "Hoàng cầm 10g", "Chi tử 10g", "Trạch tả 10g", "Xa tiền tử 12g", "Sài hồ 8g"]
  },
  "thu_nhiet_dong_tieu_beo_phi": {
    stt: 1138,
    hc: "Thử nhiệt động tiêu béo phì",
    phanloai: ["Béo phì", "Nhiệt", "Thực", "Thử nhiệt"],
    tc: ["Béo phì mùa hè mệt mỏi khát nước", "Nước tiểu ít đỏ", "Mạch nhu sác"],
    pdt: "Thanh thử ích khí, hóa thấp",
    bt: "Thanh thử ích khí thang",
    tpbt: ["Tây qua diệp 12g", "Thạch cao 15g", "Mạch môn 12g", "Đảng sâm 12g", "Hoàng kỳ 12g", "Phục linh 12g"]
  },
  "huyet_u_khoi_tieu_beo_phu": {
    stt: 1139,
    hc: "Huyết ứ trệ trung tiêu béo phì",
    phanloai: ["Béo phì", "Bình", "Thực", "Huyết ứ"],
    tc: ["Bụng trướng đau nhói cố định", "Da sạm tối màu", "Chất lưỡi tím", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, tiêu trệ",
    bt: "Huyết phủ trục ứ thang",
    tpbt: ["Đương quy 12g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Xuyên khung 10g", "Sài hồ 8g"]
  },
  "khi_trie_dam_truc_bung_to": {
    stt: 1140,
    hc: "Khí trệ đàm trọc bụng to",
    phanloai: ["Béo phì", "Bình", "Thực", "Khí trệ đàm trọc"],
    tc: ["Bụng trướng to căng tức", "Ngực sườn đầy", "Tinh thần u uất", "Mạch huyền hoạt"],
    pdt: "Hành khí khai uất, hóa đàm tiêu béo",
    bt: "Tứ ma thang hợp Nhị trần thang",
    tpbt: ["Trần bì 6g", "Hương phụ 10g", "Ô dược 10g", "Binh lang 8g", "Bán hạ chế 10g", "Phục linh 12g"]
  },
  "than_am_hu_hu_nhiet_beo_phi": {
    stt: 1141,
    hc: "Thận âm hư nội nhiệt béo phì",
    phanloai: ["Béo phì", "Nhiệt", "Hư", "Thận âm hư"],
    tc: ["Béo phì lưng mỏi chóng mặt", "Triều nhiệt đạo hãn", "Mạch tế sác"],
    pdt: "Tư bổ thận âm, thanh nhiệt",
    bt: "Tri bá địa hoàng hoàn",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Tri mẫu 10g", "Hoàng bá 10g"]
  },
  "tam_khi_hu_beo_phi_met_moi": {
    stt: 1142,
    hc: "Tâm khí hư béo phì mệt mỏi",
    phanloai: ["Béo phì", "Bình", "Hư", "Tâm khí hư"],
    tc: ["Béo phì kèm hồi hộp trống ngực", "Thở ngắn mệt mỏi", "Mạch tế nhược"],
    pdt: "Ích khí bổ tâm, kiện tỳ",
    bt: "Bảo nguyên thang hợp Tứ quân tử thang",
    tpbt: ["Đảng sâm 12g", "Hoàng kỳ 16g", "Phục linh 12g", "Cam thảo 6g", "Ngũ vị tử 6g"]
  },
  "phe_khi_hu_thuy_thap_beo": {
    stt: 1143,
    hc: "Phế khí hư thủy thấp béo phì",
    phanloai: ["Béo phì", "Bình", "Hư", "Phế khí hư"],
    tc: ["Béo phì đoản khí tiếng nói nhỏ", "Sợ gió dễ cảm", "Mạch hư nhược"],
    pdt: "Bổ ích phế khí, lợi thủy",
    bt: "Bổ phế thang hợp Ngũ linh tán",
    tpbt: ["Đảng sâm 12g", "Hoàng kỳ 16g", "Bạch truật 12g", "Phục linh 12g", "Trạch tả 10g", "Ngũ vị tử 6g"]
  },
  "vi_am_hu_hu_nhiet_beo_bung": {
    stt: 1144,
    hc: "Vị âm hư nội nhiệt béo bụng",
    phanloai: ["Béo phì", "Nhiệt", "Hư", "Vị âm hư"],
    tc: ["Béo phì kèm miệng khô họng khát", "Thượng vị nóng rát", "Mạch tế sác"],
    pdt: "Tư dưỡng vị âm, thanh nhiệt",
    bt: "Ích vị thang",
    tpbt: ["Ngọc trúc 12g", "Sinh địa 16g", "Sa sâm 12g", "Mạch môn 12g"]
  },
  "can_duong_thuong_khang_beo": {
    stt: 1145,
    hc: "Can dương thượng kháng béo phì",
    phanloai: ["Béo phì", "Nhiệt", "Hư thực", "Can dương"],
    tc: ["Béo phì kèm đau đầu chóng mặt", "Mặt đỏ mắt đỏ", "Dễ cáu gắt", "Mạch huyền lực"],
    pdt: "Bình can tiềm dương, thanh nhiệt",
    bt: "Thiên ma câu đằng ẩm",
    tpbt: ["Thiên ma 10g", "Câu đằng 12g", "Thạch quyết minh 15g", "Chi tử 10g", "Hoàng cầm 10g", "Ngưu tất 12g"]
  },
  "thap_nhiet_khon_ty_beo_phi": {
    stt: 1146,
    hc: "Thấp nhiệt khốn tỳ béo phì",
    phanloai: ["Béo phì", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Béo phì bụng trướng buồn nôn", "Đại tiện nhầy dính", "Nước tiểu vàng", "Mạch nhu sác"],
    pdt: "Thanh nhiệt hóa thấp, vận tỳ",
    bt: "Nhân trần cao thang hợp Bình vị tán",
    tpbt: ["Nhân trần 15g", "Chi tử 10g", "Đại hoàng 6g", "Thương truật 10g", "Hậu phác 10g", "Trần bì 6g"]
  },
  "liet_duong_than_duong_hu": {
    stt: 1147,
    hc: "Liệt dương do Thận dương hư",
    phanloai: ["Nam khoa", "Hàn", "Hư", "Thận dương hư"],
    tc: ["Dương vật không cương cứng", "Sợ lạnh tay chân lạnh", "Thắt lưng mỏi yếu", "Mạch trầm trì tế"],
    pdt: "Ôn bổ thận dương, tráng dương",
    bt: "Hữu quy hoàn",
    tpbt: ["Phụ tử chế 8g", "Nhục quế 6g", "Thục địa 16g", "Sơn thù nhục 8g", "Kỷ tử 12g", "Đỗ trọng 12g", "Lộc giác giao 12g"]
  },
  "xuat_tinh_som_tam_than_bat_giao": {
    stt: 1148,
    hc: "Xuất tinh sớm do Tâm Thận bất giao",
    phanloai: ["Nam khoa", "Nhiệt", "Hư", "Tâm Thận bất giao"],
    tc: ["Xuất tinh sớm tinh thần bất an", "Hồi hộp mất ngủ", "Lòng bàn tay chân nóng", "Mạch tế sác"],
    pdt: "Tư âm giáng hỏa, giao hội tâm thận",
    bt: "Giao thái hoàn hợp Thanh tâm liên tử ẩm",
    tpbt: ["Hoàng liên 6g", "Nhục quế 3g", "Sinh địa 16g", "Mạch môn 12g", "Bách hợp 12g"]
  },
  "di_tinh_than_khi_bat_co": {
    stt: 1149,
    hc: "Di tinh do Thận khí bất cố",
    phanloai: ["Nam khoa", "Bình", "Hư", "Thận khí hư"],
    tc: ["Di tinh hoạt tinh ban ngày khi mệt", "Thắt lưng mỏi yếu", "Tiểu rỉ rả", "Mạch trầm tế"],
    pdt: "Bổ thận cố sáp, ích tinh",
    bt: "Tang phiêu tiêu tán",
    tpbt: ["Tang phiêu tiêu 12g", "Long cốt 15g", "Quy bản 12g", "Thạch xương bồ 8g", "Viễn chí 6g", "Phục thần 12g"]
  },
  "mong_tinh_tam_ti_luong_hu": {
    stt: 1150,
    hc: "Mộng tinh do Tâm Tỳ lưỡng hư",
    phanloai: ["Nam khoa", "Bình", "Hư", "Tâm Tỳ hư"],
    tc: ["Mộng tinh nhiều lần kèm hồi hộp", "Hay quên ăn kém", "Sắc mặt nhợt", "Mạch tế nhược"],
    pdt: "Ích khí kiện tỳ, dưỡng tâm an thần",
    bt: "Quy tỳ thang",
    tpbt: ["Đảng sâm 12g", "Hoàng kỳ 16g", "Bạch truật 12g", "Phục thần 12g", "Đương quy 12g", "Long nhãn 12g", "Toan táo nhân 12g"]
  },
  "thap_nhiet_ha_tieu_tien_liet": {
    stt: 1151,
    hc: "Viêm tiền liệt tuyến mạn do thấp nhiệt hạ tiêu",
    phanloai: ["Nam khoa", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Đau tức vùng tầng sinh môn và hạ vị", "Tiểu buốt tiểu rắt nước tiểu đục", "Rêu lưỡi vàng nhớt", "Mạch nhu sác"],
    pdt: "Thanh nhiệt lợi thấp, hóa trọc thông lâm",
    bt: "Bát chính tán hợp Long đởm tả can thang",
    tpbt: ["Xa tiền tử 12g", "Cù mạch 10g", "Biển súc 10g", "Hoạt thạch 15g", "Chi tử 10g", "Hoàng bá 10g", "Xa tiền thảo 12g"]
  },
  "can_kinh_thap_nhiet_tinh_hoan": {
    stt: 1152,
    hc: "Sưng đau tinh hoàn do Can kinh thấp nhiệt",
    phanloai: ["Nam khoa", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Tinh hoàn sưng đau đỏ rát", "Miệng đắng họng khô", "Tiểu đỏ", "Mạch huyền sác"],
    pdt: "Thanh can lợi thấp, tiêu thũng",
    bt: "Long đởm tả can thang",
    tpbt: ["Long đởm thảo 12g", "Hoàng cầm 10g", "Chi tử 10g", "Trạch tả 10g", "Xa tiền tử 12g", "Sài hồ 8g", "Mộc thông 8g"]
  },
  "than_am_hu_hoa_vuong_di_tinh": {
    stt: 1153,
    hc: "Di tinh do Thận âm hư hỏa vượng",
    phanloai: ["Nam khoa", "Nhiệt", "Hư", "Âm hư hỏa vượng"],
    tc: ["Mộng tinh liên tục dâm dục vọng động", "Lòng bàn tay chân nóng", "Triều nhiệt", "Mạch tế sác"],
    pdt: "Tư âm dưỡng huyết, thanh hóa hỏa",
    bt: "Tri bá địa hoàng hoàn",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Tri mẫu 10g", "Hoàng bá 10g"]
  },
  "khi_trie_huyet_u_tinh_lac": {
    stt: 1154,
    hc: "Đau tức tinh hoàn do khí trệ huyết ứ",
    phanloai: ["Nam khoa", "Bình", "Thực", "Huyết ứ"],
    tc: ["Tinh hoàn đau tức cố định", "Cự án", "Chất lưỡi tím tối", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, lý khí chỉ thống",
    bt: "Thiếu phúc trục ứ thang",
    tpbt: ["Đương quy 12g", "Xuyên khung 10g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Quan quế 6g", "Uất kim 10g"]
  },
  "han_tre_can_mach_san_khi": {
    stt: 1155,
    hc: "Sán khí do hàn trệ Can mạch",
    phanloai: ["Nam khoa", "Hàn", "Thực", "Hàn trệ"],
    tc: ["Đau quặn bụng dưới lan xuống tinh hoàn", "Gặp lạnh đau tăng ấm giảm", "Mạch huyền khẩn"],
    pdt: "Ôn kinh tán hàn, noãn can chỉ thống",
    bt: "Noãn can tiễn",
    tpbt: ["Tiểu hồi hương 10g", "Nhục quế 6g", "Đương quy 12g", "Câu kỷ tử 12g", "Ô dược 10g", "Trầm hương 4g"]
  },
  "ty_vi_khi_hu_nuy_chung": {
    stt: 1156,
    hc: "Dương nuy do Tỳ Vị khí hư",
    phanloai: ["Nam khoa", "Bình", "Hư", "Khí hư"],
    tc: ["Dương vật khó cương kèm mệt mỏi ăn kém", "Đại tiện lỏng", "Chất lưỡi nhợt", "Mạch tế nhược"],
    pdt: "Ích khí kiện tỳ, thăng dương",
    bt: "Bổ trung ích khí thang",
    tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Bạch truật 12g", "Cam thảo 6g", "Trần bì 6g", "Sài hồ 6g", "Thăng ma 6g"]
  },
  "tam_khi_hu_liet_duong": {
    stt: 1157,
    hc: "Liệt dương do Tâm khí hư",
    phanloai: ["Nam khoa", "Bình", "Hư", "Tâm khí hư"],
    tc: ["Dương nuy kèm hồi hộp trống ngực", "Thở ngắn mệt mỏi", "Mạch tế nhược"],
    pdt: "Ích khí bổ tâm, an thần",
    bt: "Bảo nguyên thang",
    tpbt: ["Đảng sâm 12g", "Hoàng kỳ 16g", "Phục linh 12g", "Cam thảo 6g", "Ngũ vị tử 6g"]
  },
  "thap_nhiet_dong_tinh_phu": {
    stt: 1158,
    hc: "Động tinh do thấp nhiệt hạ tiêu",
    phanloai: ["Nam khoa", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Di tinh tự xuất khi bứt rứt thấp nhiệt", "Nước tiểu vàng đỏ", "Rêu vàng nhớt", "Mạch nhu sác"],
    pdt: "Thanh nhiệt hóa thấp, cố tinh",
    bt: "Biển súc tán hợp Bát chính tán",
    tpbt: ["Biển súc 10g", "Cù mạch 10g", "Hoạt thạch 15g", "Xa tiền tử 12g", "Mộc thông 8g", "Long đởm thảo 10g"]
  },
  "than_tinh_bat_tuc_vo_tinh": {
    stt: 1159,
    hc: "Vô tinh do Thận tinh bất túc",
    phanloai: ["Nam khoa", "Bình", "Hư", "Tinh hư"],
    tc: ["Không có tinh trùng hoặc chất lượng tinh dịch kém", "Đầu choáng tai ù", "Lưng mỏi", "Mạch trầm tế"],
    pdt: "Bổ thận ích tinh, điền tủy",
    bt: "Hà xa đại tạo hoàn hợp Ngũ tử diễn tông hoàn",
    tpbt: ["Tử hà xe 10g", "Thục địa 16g", "Câu kỷ tử 12g", "Thỏ ti tử 12g", "Phúc bồn tử 10g", "Ngũ vị tử 6g"]
  },
  "khi_huyet_luong_hu_nam_khoa": {
    stt: 1160,
    hc: "Suy giảm sinh lý do khí huyết lưỡng hư",
    phanloai: ["Nam khoa", "Bình", "Hư", "Khí huyết lưỡng hư"],
    tc: ["Giảm ham muốn sinh lý mệt mỏi sắc mặt nhợt", "Chóng mặt", "Mạch tế nhược"],
    pdt: "Bổ ích khí huyết, sung dưỡng tinh tạng",
    bt: "Thập toàn đại bổ thang",
    tpbt: ["Đảng sâm 12g", "Hoàng kỳ 16g", "Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g", "Quế chi 8g"]
  },
  "can_khi_uat_ket_nam_khoa": {
    stt: 1161,
    hc: "Rối loạn cương dương do Can khí uất kết",
    phanloai: ["Nam khoa", "Bình", "Thực", "Khí trệ"],
    tc: ["Dương nuy do căng thẳng stress u uất", "Ngực sườn trướng đau", "Hay thở dài", "Mạch huyền"],
    pdt: "Sơ can giải uất, lý khí",
    bt: "Sài hồ sơ can tán",
    tpbt: ["Sài hồ 10g", "Bạch thược 12g", "Chỉ xác 8g", "Xuyên khung 10g", "Trần bì 6g", "Hương phụ 10g"]
  },
  "thu_nhiet_ha_tieu_nam": {
    stt: 1162,
    hc: "Bệnh lý nam khoa do thử nhiệt hạ tiêu",
    phanloai: ["Nam khoa", "Nhiệt", "Thực", "Thử nhiệt"],
    tc: ["Bứt rứt hạ vị nóng bức mùa hè", "Tiểu buốt nhẹ", "Mạch nhu sác"],
    pdt: "Thanh thử lợi thấp",
    bt: "Thanh thử ích khí thang",
    tpbt: ["Tây qua diệp 12g", "Thạch cao 15g", "Đảng sâm 12g", "Hoàng liên 6g", "Mạch môn 12g"]
  },
  "dam_trac_tro_tinh_lac": {
    stt: 1163,
    hc: "Đàm trọc trở trệ tinh lạc",
    phanloai: ["Nam khoa", "Bình", "Thực", "Đàm trọc"],
    tc: ["Nặng đầu mệt mỏi kèm suy giảm chức năng sinh dục", "Rêu nhớt", "Mạch huyền hoạt"],
    pdt: "Táo thấp hóa đàm, thông lạc",
    bt: "Ôn đởm thang",
    tpbt: ["Bán hạ chế 10g", "Trần bì 6g", "Phục linh 12g", "Chỉ thực 8g", "Trúc nhự 10g", "Sinh khương 6g"]
  },
  "thanh_coc_bat_phan_sinh_tinh": {
    stt: 1164,
    hc: "Tinh dịch loãng do Tỳ Thận hư hàn",
    phanloai: ["Nam khoa", "Hàn", "Hư", "Tỳ Thận hư"],
    tc: ["Tinh dịch loãng ít số lượng", "Bụng lạnh sôi bụng", "Chân tay lạnh", "Mạch trầm tế"],
    pdt: "Ôn bổ tỳ thận, sinh tinh",
    bt: "Hữu quy hoàn hợp Lý trung hoàn",
    tpbt: ["Phụ tử chế 8g", "Nhục quế 6g", "Thục địa 16g", "Đảng sâm 12g", "Can khương 6g", "Bạch truật 12g"]
  },
  "can_hoa_thuong_viem_nam": {
    stt: 1165,
    hc: "Can hỏa vượng gây nhiễu tinh thất",
    phanloai: ["Nam khoa", "Nhiệt", "Thực", "Can hỏa"],
    tc: ["Dễ kích thích mộng tinh di tinh khi cáu gắt", "Mắt đỏ miệng đắng", "Mạch huyền sác"],
    pdt: "Thanh can tả hỏa, an định tinh thất",
    bt: "Long đởm tả can thang",
    tpbt: ["Long đởm thảo 12g", "Hoàng cầm 10g", "Chi tử 10g", "Trạch tả 10g", "Đương quy 12g", "Sinh địa 16g", "Sài hồ 8g"]
  },
  "than_am_duong_luong_hu_nam": {
    stt: 1166,
    hc: "Suy sinh dục do Thận âm dương lưỡng hư",
    phanloai: ["Nam khoa", "Bình", "Hư", "Âm dương lưỡng hư"],
    tc: ["Liệt dương kèm vừa sợ lạnh vừa lòng bàn tay chân nóng", "Đau lưng mỏi gối", "Mạch trầm tế sác"],
    pdt: "Âm dương song bổ, tráng dương ích tinh",
    bt: "Nhị tiên thang hợp Hữu quy hoàn",
    tpbt: ["Tiên mao 10g", "Tiên linh tỳ 10g", "Ba kích 12g", "Phụ tử chế 8g", "Nhục quế 6g", "Thục địa 16g", "Sơn thù nhục 8g"]
  },
  "kinh_nguyet_khong_deu_can_khi_uat": {
    stt: 1167,
    hc: "Kinh nguyệt không đều do Can khí uất",
    phanloai: ["Phụ khoa", "Bình", "Thực", "Khí trệ"],
    tc: ["Kinh nguyệt trước kỳ hoặc sau kỳ không định", "Sắc kinh tối có cục", "Ngực sườn trướng đau", "Mạch huyền"],
    pdt: "Sơ can giải uất, điều kinh",
    bt: "Sài hồ sơ can tán hợp Tứ vật thang",
    tpbt: ["Sài hồ 10g", "Bạch thược 12g", "Chỉ xác 8g", "Xuyên khung 10g", "Đương quy 12g", "Thục địa 16g"]
  },
  "thong_kinh_han_thap": {
    stt: 1168,
    hc: "Thống kinh do hàn thấp",
    phanloai: ["Phụ khoa", "Hàn", "Thực", "Hàn thấp"],
    tc: ["Đau bụng kinh dữ dội trước hoặc trong kỳ", "Chườm ấm đỡ đau", "Sợ lạnh tay chân lạnh", "Mạch trầm khẩn"],
    pdt: "Ôn kinh tán hàn, hành khí chỉ thống",
    bt: "Ôn kinh thang gia giảm",
    tpbt: ["Đương quy 12g", "Xuyên khung 10g", "Bạch thược 12g", "Ngô thù du 6g", "Quế chi 8g", "Ngải diệp 10g"]
  },
  "rong_kinh_ty_khi_hu": {
    stt: 1169,
    hc: "Rong kinh rong huyết do Tỳ khí hư",
    phanloai: ["Phụ khoa", "Bình", "Hư", "Khí hư"],
    tc: ["Kinh ra kéo dài số lượng nhiều sắc nhạt", "Mệt mỏi sắc mặt vàng nhợt", "Ăn kém", "Mạch tế nhược"],
    pdt: "Kiện tỳ ích khí, nhiếp huyết",
    bt: "Quy tỳ thang hợp Cửu vị hoàn",
    tpbt: ["Đảng sâm 12g", "Hoàng kỳ 16g", "Bạch truật 12g", "Phục linh 12g", "Đương quy 12g", "Long nhãn 12g", "Thán khương 6g"]
  },
  "bang_lau_huyet_nhiet": {
    stt: 1170,
    hc: "Băng lậu do huyết nhiệt",
    phanloai: ["Phụ khoa", "Nhiệt", "Thực", "Huyết nhiệt"],
    tc: ["Kinh ra đột ngột ào ạt sắc đỏ sẫm dính", "Mặt đỏ bứt rứt", "Miệng khát", "Mạch sác lực"],
    pdt: "Thanh nhiệt lương huyết, cố kinh",
    bt: "Thanh nhiệt cố kinh thang",
    tpbt: ["Sinh địa 16g", "Hoàng cầm 10g", "Địa cốt bì 12g", "A giao 10g", "Bạch thược 12g", "Hải phiêu tiêu 12g"]
  },
  "doi_ha_thap_nhiet": {
    stt: 1171,
    hc: "Đới hạ do thấp nhiệt",
    phanloai: ["Phụ khoa", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Khí hư ra nhiều màu vàng xanh dính hôi", "Âm hộ ngứa rát", "Tiểu đỏ", "Mạch nhu sác"],
    pdt: "Thanh nhiệt lợi thấp, chỉ đới",
    bt: "Hoàng đới thang",
    tpbt: ["Hoàng bá 10g", "Xa tiền tử 12g", "Xích thược 12g", "Ý dĩ 15g", "Tỳ giải 12g", "Cam thảo 6g"]
  },
  "doi_ha_ty_than_duong_hu": {
    stt: 1172,
    hc: "Đới hạ do Tỳ Thận dương hư",
    phanloai: ["Phụ khoa", "Hàn", "Hư", "Tỳ Thận dương hư"],
    tc: ["Khí hư ra nhiều màu trắng loãng như nước", "Lưng mỏi chân lạnh", "Bụng dưới nặng", "Mạch trầm tế"],
    pdt: "Ôn bổ tỳ thận, cố sáp chỉ đới",
    bt: "Hoàn đới thang",
    tpbt: ["Bạch truật 16g", "Hoài sơn 16g", "Nhân sâm 10g", "Bạch thược 12g", "Xa tiền tử 12g", "Thương truật 10g"]
  },
  "vo_kinh_huyet_u": {
    stt: 1173,
    hc: "Vô kinh do huyết ứ",
    phanloai: ["Phụ khoa", "Bình", "Thực", "Huyết ứ"],
    tc: ["Kinh nguyệt không thấy nhiều tháng", "Bụng dưới đau nhói cố định", "Chất lưỡi tím tối", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, thông kinh",
    bt: "Huyết phủ trục ứ thang",
    tpbt: ["Đương quy 12g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Xuyên khung 10g", "Sài hồ 8g", "Ngưu tất 12g"]
  },
  "thong_kinh_khi_huyet_hu": {
    stt: 1174,
    hc: "Thống kinh do khí huyết lưỡng hư",
    phanloai: ["Phụ khoa", "Bình", "Hư", "Khí huyết lưỡng hư"],
    tc: ["Đau bụng kinh âm ỉ sau kỳ kinh", "Thích xoa bóp", "Sắc mặt nhợt nhạt", "Mạch tế nhược"],
    pdt: "Bổ khí dưỡng huyết, ôn kinh chỉ thống",
    bt: "Thánh dụ thang",
    tpbt: ["Đảng sâm 12g", "Hoàng kỳ 16g", "Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g", "A giao 10g"]
  },
  "kho_chiu_tien_kinh_nguyet_can_duong": {
    stt: 1175,
    hc: "Hội chứng tiền kinh nguyệt do Can dương vượng",
    phanloai: ["Phụ khoa", "Nhiệt", "Hư thực", "Can dương vượng"],
    tc: ["Trước kỳ kinh dễ cáu gắt đau đầu chóng mặt", "Mặt đỏ", "Mất ngủ", "Mạch huyền sác"],
    pdt: "Bình can tiềm dương, điều kinh",
    bt: "Thiên ma câu đằng ẩm",
    tpbt: ["Thiên ma 10g", "Câu đằng 12g", "Thạch quyết minh 15g", "Chi tử 10g", "Hoàng cầm 10g", "Đương quy 12g"]
  },
  "hau_san_phuc_thong_huyet_u": {
    stt: 1176,
    hc: "Hậu sản phúc thống do huyết ứ",
    phanloai: ["Phụ khoa", "Bình", "Thực", "Huyết ứ"],
    tc: ["Sau sinh đau bụng dưới dữ dội", "Sản dịch ra ít hoặc cục sẫm", "Lưỡi tím", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, chỉ thống",
    bt: "Sinh hóa thang",
    tpbt: ["Đương quy 16g", "Xuyên khung 10g", "Đào nhân 10g", "Can khương 6g", "Chích cam thảo 6g"]
  },
  "hau_san_met_moi_khi_huyet_hu": {
    stt: 1177,
    hc: "Hậu sản mệt mỏi do khí huyết lưỡng hư",
    phanloai: ["Phụ khoa", "Bình", "Hư", "Khí huyết lưỡng hư"],
    tc: ["Sau sinh mệt mỏi hoa mắt chóng mặt", "Sắc mặt trắng nhợt", "Mạch tế nhược"],
    pdt: "Bổ ích khí huyết",
    bt: "Bát trân thang",
    tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Cam thảo 6g", "Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g"]
  },
  "tac_tia_sua_can_khi_uat": {
    stt: 1178,
    hc: "Tắc tia sữa do Can khí uất trệ",
    phanloai: ["Phụ khoa", "Bình", "Thực", "Khí trệ"],
    tc: ["Vú sưng căng đau tức sữa không ra", "Tinh thần u uất", "Mạch huyền"],
    pdt: "Sơ can lý khí, thông sữa",
    bt: "Qua lâu uyên tán gia giảm",
    tpbt: ["Qua lâu nhân 12g", "Sài hồ 10g", "Thanh bì 6g", "Xuyên khung 10g", "Bồ công anh 15g", "Thông thảo 6g"]
  },
  "viem_tuyen_vu_nhiet_doc": {
    stt: 1179,
    hc: "Viêm tuyến vú cấp do nhiệt độc",
    phanloai: ["Phụ khoa", "Nhiệt", "Thực", "Nhiệt độc"],
    tc: ["Vú sưng nóng đỏ đau dữ dội", "Sốt cao rét run", "Mạch sác lực"],
    pdt: "Thanh nhiệt giải độc, tiêu thũng tán ung",
    bt: "Tiền căn dược độc thang hợp Tiên phương hoạt mệnh ẩm",
    tpbt: ["Bồ công anh 20g", "Kim ngân hoa 15g", "Liên kiều 12g", "Xích thược 12g", "Đương quy 12g", "Trần bì 6g"]
  },
  "sa_tu_cung_khi_ham": {
    stt: 1180,
    hc: "Sa tử cung do Tỳ khí hạ hãm",
    phanloai: ["Phụ khoa", "Bình", "Hư", "Khí hãm"],
    tc: ["Cảm giác sa giáng vùng âm đạo hạ vị nặng tức", "Mệt mỏi đoản khí", "Mạch nhược"],
    pdt: "Bổ khí thăng dương",
    bt: "Bổ trung ích khí thang",
    tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Bạch truật 12g", "Cam thảo 6g", "Trần bì 6g", "Sài hồ 6g", "Thăng ma 6g", "Đương quy 12g"]
  },
  "hoi_chung_tien_man_kinh_am_hu": {
    stt: 1181,
    hc: "Hội chứng tiền mãn kinh do Âm hư",
    phanloai: ["Phụ khoa", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Cơn bốc hỏa vã mồ hôi về chiều", "Lòng bàn tay chân nóng", "Mất ngủ", "Mạch tế sác"],
    pdt: "Tư âm giáng hỏa",
    bt: "Tri bá địa hoàng hoàn hợp Nhị tiên thang",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Tri mẫu 10g", "Hoàng bá 10g", "Tiên mao 10g"]
  },
  "kinh_thua_ky_huyet_hu": {
    stt: 1182,
    hc: "Kinh thưa do huyết hư",
    phanloai: ["Phụ khoa", "Bình", "Hư", "Huyết hư"],
    tc: ["Kinh nguyệt chậm kỳ 40-50 ngày mới có", "Lượng ít sắc nhạt", "Sắc mặt úa vàng", "Mạch tế nhược"],
    pdt: "Bổ huyết điều kinh",
    bt: "Tứ vật thang gia vị",
    tpbt: ["Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g", "Hoàng kỳ 16g", "Đảng sâm 12g"]
  },
  "vo_sinh_do_than_duong_hu": {
    stt: 1183,
    hc: "Vô sinh nữ do Thận dương hư",
    phanloai: ["Phụ khoa", "Hàn", "Hư", "Thận dương hư"],
    tc: ["Lâu không có con tử cung lạnh", "Kinh muộn sắc nhạt", "Sợ lạnh tay chân lạnh", "Mạch trầm trì"],
    pdt: "Ôn bổ thận dương, sưởi ấm cung bào",
    bt: "Ôn thận tráng dương thang hợp Ôn kinh hoàn",
    tpbt: ["Phụ tử chế 8g", "Nhục quế 6g", "Thục địa 16g", "Sơn thù nhục 8g", "Đỗ trọng 12g", "Ba kích 12g", "Cẩu tích 12g"]
  },
  "vo_sinh_do_than_am_hu": {
    stt: 1184,
    hc: "Vô sinh nữ do Thận âm hư",
    phanloai: ["Phụ khoa", "Nhiệt", "Hư", "Thận âm hư"],
    tc: ["Hiếm muộn kèm kinh ít khô hạn", "Lòng bàn tay chân nóng", "Đầu choáng tai ù", "Mạch tế sác"],
    pdt: "Tư bổ thận âm, dưỡng huyết sinh tinh",
    bt: "Dưỡng tinh chủng ngọc thang",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Đương quy 12g", "Bạch thược 12g", "Kỷ tử 12g", "Thỏ ti tử 12g"]
  },
  "dong_thai_than_khi_hu": {
    stt: 1185,
    hc: "Động thai do Thận khí hư",
    phanloai: ["Phụ khoa", "Bình", "Hư", "Thận khí hư"],
    tc: ["Đau thắt lưng ra huyết âm đạo khi mang thai", "Mệt mỏi", "Mạch trầm tế", "Chất lưỡi nhợt"],
    pdt: "Bổ thận an thai",
    bt: "Thọ thai hoàn",
    tpbt: ["Thỏ ti tử 12g", "Tang ký sinh 16g", "Xuyên tục đoạn 12g", "A giao 10g"]
  },
  "sua_it_hau_san_khi_huyet_hu": {
    stt: 1186,
    hc: "Thiếu sữa sau sinh do khí huyết hư",
    phanloai: ["Phụ khoa", "Bình", "Hư", "Khí huyết hư"],
    tc: ["Sau sinh sữa rất ít hoặc không có", "Vú mềm không đau", "Mệt mỏi sắc mặt nhợt", "Mạch tế nhược"],
    pdt: "Ích khí dưỡng huyết, thông sữa",
    bt: "Thông nhũ dụng pháp thang",
    tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Đương quy 12g", "Xuyên khung 10g", "Mộc thông 6g", "Vương bất lưu hành 10g"]
  },
  "can_khi_thu_nghich": {
    stt: 1187,
    hc: "Can khí thượng nghịch",
    phanloai: ["Tạng Can", "Bình", "Thực", "Khí nghịch"],
    tc: ["Đau tức ngực sườn lên đỉnh đầu", "Đau đầu hoa mắt", "Ợ hơi nấc cụt", "Mạch huyền"],
    pdt: "Bình can giáng nghịch, lý khí",
    bt: "Toàn phúc đại giả hoàn gia giảm",
    tpbt: ["Toàn phúc hoa 10g", "Đại giả thạch 15g", "Hương phụ 10g", "Trần bì 6g", "Bán hạ chế 10g"]
  },
  "can_vi_bat_hoa_thuc_tich": {
    stt: 1188,
    hc: "Can Vị bất hòa kèm thực tích",
    phanloai: ["Tạng Can", "Bình", "Thực", "Khí trệ thực tích"],
    tc: ["Thượng vị trướng đau lan sườn", "Ăn không tiêu ợ chua", "Đại tiện táo hoặc không thông", "Mạch huyền hoạt"],
    pdt: "Sơ can lý khí, tiêu tích hòa vị",
    bt: "Sài hồ sơ can tán hợp Bảo hòa hoàn",
    tpbt: ["Sài hồ 10g", "Chỉ xác 8g", "Bạch thược 12g", "Sơn tra 12g", "Thần khúc 10g", "Lai phục tử 10g"]
  },
  "can_than_am_hu": {
    stt: 1189,
    hc: "Can Thận âm hư",
    phanloai: ["Tạng Can", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Đau lưng mỏi gối chóng mặt tai ù", "Mắt khô nhìn mờ", "Triều nhiệt đạo hãn", "Mạch tế sác"],
    pdt: "Tư bổ can thận âm",
    bt: "Kỷ cúc địa hoàng hoàn hợp Nhất trí ẩm",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Phục linh 12g", "Kỷ tử 12g", "Cúc hoa 10g"]
  },
  "can_ty_bat_hoa": {
    stt: 1190,
    hc: "Can Tỳ bất hòa",
    phanloai: ["Tạng Can", "Bình", "Thực", "Khí trệ"],
    tc: ["Bụng trướng đau lúc đau lúc thôi", "Đại tiện lỏng hoặc táo thất thường", "Ngực sườn đầy trướng", "Mạch huyền"],
    pdt: "Sơ can kiện tỳ",
    bt: "Thống tả yếu phương hợp Tứ nghịch tán",
    tpbt: ["Sài hồ 10g", "Bạch thược 12g", "Chỉ thực 8g", "Cam thảo 6g", "Bạch truật 12g", "Phòng phong 8g"]
  },
  "can_hoa_nhieu_tinh_that": {
    stt: 1191,
    hc: "Can hỏa nhiễu tinh thất",
    phanloai: ["Tạng Can", "Nhiệt", "Thực", "Can hỏa"],
    tc: ["Mộng tinh di tinh liên tục", "Tâm phiền dễ cáu gắt", "Miệng đắng tiểu vàng", "Mạch huyền sác"],
    pdt: "Thanh can tả hỏa, cố tinh",
    bt: "Long đởm tả can thang gia vị",
    tpbt: ["Long đởm thảo 12g", "Hoàng cầm 10g", "Chi tử 10g", "Trạch tả 10g", "Đương quy 12g", "Sinh địa 16g", "Sa uyển tật lê 12g"]
  },
  "can_lac_u_huyet_nhieu_lac": {
    stt: 1192,
    hc: "Can lạc ứ huyết nhiễu lạc",
    phanloai: ["Tạng Can", "Bình", "Thực", "Huyết ứ"],
    tc: ["Sườn ngực đau nhói cố định lan vai lưng", "Chất lưỡi tím sẫm", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, thông lạc",
    bt: "Huyết phủ trục ứ thang",
    tpbt: ["Đương quy 12g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Xuyên khung 10g", "Sài hồ 8g", "Ngưu tất 12g"]
  },
  "can_han_pham_vi": {
    stt: 1193,
    hc: "Can hàn phạm Vị",
    phanloai: ["Tạng Can", "Hàn", "Thực", "Hàn trệ"],
    tc: ["Thượng vị đau quặn lan ra sườn ngực", "Gặp lạnh đau tăng chườm ấm giảm", "Nôn mửa nước trong", "Mạch huyền khẩn"],
    pdt: "Ôn can tán hàn, hành khí hòa vị",
    bt: "Ngô thù du thang hợp Lương phụ hoàn",
    tpbt: ["Ngô thù du 6g", "Cao lương khương 8g", "Hương phụ 10g", "Đảng sâm 12g", "Sinh khương 6g"]
  },
  "can_huyet_bat_tuc_hoa_phong": {
    stt: 1194,
    hc: "Can huyết bất túc hóa phong",
    phanloai: ["Tạng Can", "Bình", "Hư", "Huyết hư nội phong"],
    tc: ["Chân tay tê mỏi run rẩy nhẹ", "Chóng mặt hoa mắt", "Móng tay nhợt", "Mạch tế huyền"],
    pdt: "Dưỡng huyết nhuận can, tức phong",
    bt: "Tứ vật thang hợp Câu đằng ẩm",
    tpbt: ["Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g", "Câu đằng 12g", "Cúc hoa 10g"]
  },
  "can_khi_hoanh_nghich_pham_ty": {
    stt: 1195,
    hc: "Can khí hoành nghịch phạm Tỳ",
    phanloai: ["Tạng Can", "Bình", "Thực", "Khí trệ"],
    tc: ["Bụng trướng đau sau ăn buồn nôn", "Hay thở dài cáu gắt", "Đại tiện lỏng nhão", "Mạch huyền"],
    pdt: "Sơ can kiện tỳ, lý khí",
    bt: "Sài hồ sâm truật thang",
    tpbt: ["Sài hồ 10g", "Bạch truật 12g", "Phục linh 12g", "Trần bì 6g", "Bạch thược 12g", "Cam thảo 6g"]
  },
  "can_doc_hoa_thinh": {
    stt: 1196,
    hc: "Can độc hỏa thịnh",
    phanloai: ["Tạng Can", "Nhiệt", "Thực", "Can hỏa độc"],
    tc: ["Mắt đỏ sưng đau dữ dội", "Đầu thống tai ù", "Miệng đắng bứt rứt", "Mạch huyền sác hữu lực"],
    pdt: "Thanh can tả hỏa, giải độc",
    bt: "Long đởm tả can thang gia Cúc hoa Thảo quyết minh",
    tpbt: ["Long đởm thảo 12g", "Hoàng cầm 10g", "Chi tử 10g", "Trạch tả 10g", "Xa tiền tử 12g", "Cúc hoa 10g", "Thảo quyết minh 12g"]
  },
  "can_dam_khi_hu": {
    stt: 1197,
    hc: "Can Đởm khí hư",
    phanloai: ["Tạng Can", "Bình", "Hư", "Khí hư"],
    tc: ["Hay sợ hãi dễ giật mình", "Tinh thần bất an", "Mệt mỏi", "Mạch tế nhược"],
    pdt: "Ích khí ôn đởm, an thần",
    bt: "An thần định chí hoàn",
    tpbt: ["Phục thần 12g", "Phục linh 12g", "Nhân sâm 10g", "Thạch xương bồ 8g", "Viễn chí 6g"]
  },
  "can_lac_thap_nhiet": {
    stt: 1198,
    hc: "Can lạc thấp nhiệt",
    phanloai: ["Tạng Can", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Sườn phải trướng đau âm ỉ", "Miệng đắng ăn kém", "Nước tiểu vàng", "Mạch nhu sác"],
    pdt: "Thanh nhiệt lợi thấp, thông lạc",
    bt: "Nhân trần cao thang gia giảm",
    tpbt: ["Nhân trần 15g", "Chi tử 10g", "Đại hoàng 6g", "Sài hồ 8g", "Uất kim 10g"]
  },
  "can_duong_hoa_phong": {
    stt: 1199,
    hc: "Can dương hóa phong",
    phanloai: ["Tạng Can", "Nhiệt", "Hư thực", "Can phong"],
    tc: ["Đột ngột chóng mặt hoa mắt dữ dội", "Chân tay run co giật", "Mặt đỏ", "Mạch huyền sác"],
    pdt: "Bình can tiềm dương, tức phong",
    bt: "Thiên ma câu đằng ẩm hợp Khởi giao thang",
    tpbt: ["Thiên ma 10g", "Câu đằng 12g", "Thạch quyết minh 15g", "Ngưu tất 12g", "Bạch thược 12g", "Huyền sâm 12g"]
  },
  "can_am_khuy_ton_sinh_phong": {
    stt: 1200,
    hc: "Can âm khuy tổn sinh phong",
    phanloai: ["Tạng Can", "Nhiệt", "Hư", "Âm hư nội phong"],
    tc: ["Tay chân run giật nhẹ âm ỉ", "Chóng mặt ù tai", "Lòng bàn tay chân nóng", "Mạch tế sác"],
    pdt: "Tư âm dưỡng huyết, tức phong",
    bt: "Trấn can tức phong thang gia giảm",
    tpbt: ["Ngưu tất 12g", "Đại giả thạch 15g", "Quy bản 12g", "Bạch thược 12g", "Huyền sâm 12g", "Thiên ma 10g"]
  },
  "can_huyet_u_tre_ha_tieu": {
    stt: 1201,
    hc: "Can huyết ứ trệ hạ tiêu",
    phanloai: ["Tạng Can", "Bình", "Thực", "Huyết ứ"],
    tc: ["Đau quặn bụng dưới cố định", "Kinh nguyệt cục huyết sẫm", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, chỉ thống",
    bt: "Thiếu phúc trục ứ thang",
    tpbt: ["Đương quy 12g", "Xuyên khung 10g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Quan quế 6g", "Diên hồ sách 10g"]
  },
  "can_khi_uat_hoa_hoa": {
    stt: 1202,
    hc: "Can khí uất hóa hỏa",
    phanloai: ["Tạng Can", "Nhiệt", "Thực", "Khí uất hóa hỏa"],
    tc: ["Ngực sườn trướng đau cáu gắt", "Miệng đắng họng khô", "Mắt đỏ ngủ kém", "Mạch huyền sác"],
    pdt: "Sơ can tả hỏa, lý khí",
    bt: "Đan tiêu tiêu dao tán",
    tpbt: ["Sài hồ 10g", "Bạch thược 12g", "Đương quy 12g", "Bạch truật 12g", "Phục linh 12g", "Mẫu đơn bì 10g", "Chi tử 10g"]
  },
  "can_than_luong_hu": {
    stt: 1203,
    hc: "Can Thận lưỡng hư",
    phanloai: ["Tạng Can", "Bình", "Hư", "Can Thận lưỡng hư"],
    tc: ["Lưng mỏi gối mỏi chóng mặt", "Mắt khô giảm thị lực", "Kinh ít hoặc di tinh", "Mạch trầm tế"],
    pdt: "Bổ can thận",
    bt: "Hà xa đại tạo hoàn",
    tpbt: ["Tử hà xe 10g", "Thục địa 16g", "Sơn thù nhục 8g", "Đỗ trọng 12g", "Kỷ tử 12g", "Quy bản 12g"]
  },
  "can_lac_khi_tri": {
    stt: 1204,
    hc: "Can lạc khí trệ",
    phanloai: ["Tạng Can", "Bình", "Thực", "Khí trệ"],
    tc: ["Sườn ngực trướng đau không cố định", "Hay thở dài", "Mạch huyền"],
    pdt: "Hành khí hoạt lạc",
    bt: "Sài hồ sơ can tán",
    tpbt: ["Sài hồ 10g", "Chỉ xác 8g", "Bạch thược 12g", "Xuyên khung 10g", "Hương phụ 10g", "Uất kim 10g"]
  },
  "can_phong_thu_nhiet": {
    stt: 1205,
    hc: "Can phong thử nhiệt",
    phanloai: ["Tạng Can", "Nhiệt", "Thực", "Thử nhiệt nội phong"],
    tc: ["Sốt cao co giật hôn mê vào mùa hè", "Mặt đỏ bứt rứt", "Mạch huyền sác"],
    pdt: "Thanh thử lương huyết, tức phong",
    bt: "Thanh nhiễu phong đàm thang hợp Tê giác địa hoàng thang",
    tpbt: ["Sinh địa 16g", "Xích thược 12g", "Mẫu đơn bì 10g", "Câu đằng 12g", "Thiên ma 10g"]
  },
  "can_tam_bat_giao": {
    stt: 1206,
    hc: "Can Tâm bất giao",
    phanloai: ["Tạng Can", "Nhiệt", "Hư thực", "Can Tâm bất giao"],
    tc: ["Hồi hộp mất ngủ dễ cáu gắt", "Tâm phiền bứt rứt", "Đầu choáng", "Mạch huyền sác"],
    pdt: "Sơ can dưỡng tâm, an thần",
    bt: "Toan táo nhân thang hợp Tiêu dao tán",
    tpbt: ["Toan táo nhân 12g", "Bạch phục linh 12g", "Tri mẫu 10g", "Xuyên khung 10g", "Sài hồ 8g", "Bạch thược 12g"]
  },
  "tam_khi_am_luong_hu": {
    stt: 1207,
    hc: "Tâm khí âm lưỡng hư",
    phanloai: ["Tạng Tâm", "Bình", "Hư", "Khí âm lưỡng hư"],
    tc: ["Hồi hộp trống ngực mệt mỏi", "Miệng khô gò má đỏ", "Đoản khí tự hãn", "Mạch tế sác vô lực"],
    pdt: "Ích khí dưỡng âm, bổ tâm",
    bt: "Sinh mạch tán hợp Bảo nguyên thang",
    tpbt: ["Nhân sâm 10g", "Mạch môn 12g", "Ngũ vị tử 6g", "Đảng sâm 12g", "Hoàng kỳ 16g", "Cam thảo 6g"]
  },
  "tam_mach_uat_tro": {
    stt: 1208,
    hc: "Tâm mạch ứ trệ",
    phanloai: ["Tạng Tâm", "Bình", "Thực", "Huyết ứ"],
    tc: ["Đau thắt ngực lan ra vai trái lưng", "Môi lưỡi tím tái", "Mạch sáp hoặc kết đại"],
    pdt: "Hoạt huyết hóa ứ, thông mạch",
    bt: "Huyết phủ trục ứ thang hợp Hoắc hương chính khí tán",
    tpbt: ["Đương quy 12g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Xuyên khung 10g", "Đan sâm 15g"]
  },
  "tam_than_duong_hu_tam": {
    stt: 1209,
    hc: "Tâm Thận dương hư",
    phanloai: ["Tạng Tâm", "Hàn", "Hư", "Dương hư"],
    tc: ["Hồi hộp đau tức ngực sợ lạnh", "Tay chân lạnh ngắt", "Lưng mỏi tiểu đêm", "Mạch trầm tế vi"],
    pdt: "Ôn bổ tâm thận dương",
    bt: "Quế chi cam thảo long cốt mẫu lệ thang hợp Tứ nghịch thang",
    tpbt: ["Quế chi 8g", "Cam thảo 6g", "Phụ tử chế 8g", "Can khương 6g", "Long cốt 15g", "Mẫu lệ 15g"]
  },
  "tam_ty_khi_huyet_hu": {
    stt: 1210,
    hc: "Tâm Tỳ khí huyết hư",
    phanloai: ["Tạng Tâm", "Bình", "Hư", "Khí huyết lưỡng hư"],
    tc: ["Hồi hộp hay quên ăn kém", "Mệt mỏi sắc mặt nhợt", "Mất ngủ nhiều mộng", "Mạch tế nhược"],
    pdt: "Ích khí dưỡng huyết, kiện tỳ an thần",
    bt: "Quy tỳ thang",
    tpbt: ["Đảng sâm 12g", "Hoàng kỳ 16g", "Bạch truật 12g", "Phục thần 12g", "Đương quy 12g", "Long nhãn 12g", "Toan táo nhân 12g"]
  },
  "tam_can_huyet_bat_tuc": {
    stt: 1211,
    hc: "Tâm Can huyết bất túc",
    phanloai: ["Tạng Tâm", "Bình", "Hư", "Huyết hư"],
    tc: ["Hồi hộp chóng mặt hoa mắt", "Mất ngủ hay quên", "Móng tay nhợt", "Mạch tế nhược"],
    pdt: "Dưỡng huyết an thần, bổ tâm can",
    bt: "Tứ vật thang hợp A giao kê tử hoàng thang",
    tpbt: ["Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g", "A giao 10g", "Hoàng liên 6g"]
  },
  "tam_than_phiền_táo": {
    stt: 1212,
    hc: "Tâm thần phiền táo",
    phanloai: ["Tạng Tâm", "Nhiệt", "Thực", "Hỏa nhiệt"],
    tc: ["Bứt rứt khó ngủ tâm phiền", "Mặt đỏ miệng khát", "Lưỡi đỏ", "Mạch sác"],
    pdt: "Thanh tâm trừ phiền, an thần",
    bt: "Chu sa an thần hoàn",
    tpbt: ["Chu sa 2g", "Hoàng liên 8g", "Sinh địa 16g", "Đương quy 12g", "Cam thảo 6g"]
  },
  "tam_lac_huyet_u_suyt": {
    stt: 1213,
    hc: "Tâm lạc ứ trệ đau thắt",
    phanloai: ["Tạng Tâm", "Bình", "Thực", "Huyết ứ"],
    tc: ["Đau thắt ngực dữ dội đột ngột", "Môi lưỡi tím thẫm", "Mạch sáp hoặc kết đại"],
    pdt: "Hoạt huyết hóa ứ, lý khí chỉ thống",
    bt: "Thất tiễu tán hợp Huyết phủ trục ứ thang",
    tpbt: ["Ngũ linh tử 10g", "Bồ hoàng 10g", "Đương quy 12g", "Đào nhân 12g", "Hồng hoa 8g", "Xuyên khung 10g"]
  },
  "tam_hoa_nhieu_tam_bao": {
    stt: 1214,
    hc: "Tâm bào hỏa thịnh nhiễu thần",
    phanloai: ["Tạng Tâm", "Nhiệt", "Thực", "Hỏa nhiệt"],
    tc: ["Hôn mê nói sảng cuồng loạn", "Bứt rứt mất ngủ", "Lưỡi đỏ thẫm", "Mạch sác hữu lực"],
    pdt: "Thanh tâm lương huyết, định kinh",
    bt: "An cung ngưu hoàng hoàn",
    tpbt: ["Ngưu hoàng 1g", "Tê giác 2g", "Uất kim 10g", "Hoàng liên 8g", "Chu sa 2g"]
  },
  "tam_khi_trie_nghich": {
    stt: 1215,
    hc: "Tâm khí thượng nghịch",
    phanloai: ["Tạng Tâm", "Bình", "Thực", "Khí nghịch"],
    tc: ["Hồi hộp kèm tức ngực thở gấp", "Đầu choáng váng", "Mạch huyền đại"],
    pdt: "Giáng khí định tâm",
    bt: "Toàn phúc đại giả thạch thang gia giảm",
    tpbt: ["Toàn phúc hoa 10g", "Đại giả thạch 15g", "Đảng sâm 12g", "Bán hạ chế 10g", "Trần bì 6g"]
  },
  "tam_am_hu_hoa_vuong": {
    stt: 1216,
    hc: "Tâm âm hư hỏa vượng",
    phanloai: ["Tạng Tâm", "Nhiệt", "Hư", "Âm hư hỏa vượng"],
    tc: ["Hồi hộp mất ngủ bứt rứt", "Lòng bàn tay chân nóng", "Miệng khô gò má đỏ", "Mạch tế sác"],
    pdt: "Tư âm giáng hỏa, an thần",
    bt: "Thiên vương bổ tâm đan hợp Giao thái hoàn",
    tpbt: ["Sinh địa 16g", "Đảng sâm 12g", "Đan sâm 12g", "Bách hợp 12g", "Toan táo nhân 12g", "Hoàng liên 6g", "Nhục quế 3g"]
  },
  "tam_duong_khuy_tton": {
    stt: 1217,
    hc: "Tâm dương khuy tổn",
    phanloai: ["Tạng Tâm", "Hàn", "Hư", "Dương hư"],
    tc: ["Hồi hộp trống ngực sợ lạnh", "Tay chân không ấm", "Lưỡi nhợt bệu", "Mạch trầm tế"],
    pdt: "Ôn bổ tâm dương",
    bt: "Quế chi cam thảo thang",
    tpbt: ["Quế chi 10g", "Chích cam thảo 6g", "Đảng sâm 12g", "Phụ tử chế 8g"]
  },
  "tam_lac_khi_tret": {
    stt: 1218,
    hc: "Tâm lạc khí trệ",
    phanloai: ["Tạng Tâm", "Bình", "Thực", "Khí trệ"],
    tc: ["Ngực tức đau lan sau lưng", "Tinh thần u uất", "Hay thở dài", "Mạch huyền"],
    pdt: "Hành khí khai uất, thông tâm lạc",
    bt: "Sài hồ sơ can tán hợp Xích thược đương quy",
    tpbt: ["Sài hồ 10g", "Chỉ xác 8g", "Bạch thược 12g", "Xuyên khung 10g", "Đương quy 12g", "Uất kim 10g"]
  },
  "tam_huyet_nhiet_chinh": {
    stt: 1219,
    hc: "Tâm huyết nhiệt chứng",
    phanloai: ["Tạng Tâm", "Nhiệt", "Thực", "Huyết nhiệt"],
    tc: ["Lở loét miệng lưỡi đau xót", "Phiền táo khó ngủ", "Tiểu tiện đỏ rát", "Mạch sác"],
    pdt: "Thanh tâm lương huyết",
    bt: "Đạo xích tán hợp Hoàng liên giải độc thang",
    tpbt: ["Sinh địa 16g", "Mộc thông 8g", "Trúc diệp 10g", "Hoàng liên 8g", "Hoàng cầm 10g", "Chi tử 10g"]
  },
  "tam_than_bat_dinh": {
    stt: 1220,
    hc: "Tâm thần bất định",
    phanloai: ["Tạng Tâm", "Bình", "Hư", "Thần khí hư"],
    tc: ["Hồi hộp hay hoảng hốt dễ sợ hãi", "Mất ngủ nhiều mộng", "Mạch tế nhược"],
    pdt: "Dưỡng tâm an thần",
    bt: "Cam mạch đại táo thang",
    tpbt: ["Cam thảo 6g", "Tiểu mạch 30g", "Đại táo 5 quả"]
  },
  "tam_khi_thap_tre": {
    stt: 1221,
    hc: "Tâm khí thấp trệ",
    phanloai: ["Tạng Tâm", "Bình", "Thực", "Thấp trệ"],
    tc: ["Ngực tức nặng nề đầu nặng", "Ăn kém rêu lưỡi nhớt", "Mạch nhu hoãn"],
    pdt: "Hóa thấp thông dương, lý khí",
    bt: "Ôn đởm thang",
    tpbt: ["Bán hạ chế 10g", "Trần bì 6g", "Phục linh 12g", "Chỉ thực 8g", "Trúc nhự 10g", "Hậu phác 10g"]
  },
  "tam_am_duong_luong_khuy": {
    stt: 1222,
    hc: "Tâm âm dương lưỡng khuy",
    phanloai: ["Tạng Tâm", "Bình", "Hư", "Âm dương lưỡng hư"],
    tc: ["Hồi hộp trống ngực mệt mỏi", "Vừa sợ lạnh vừa lòng bàn tay chân nóng", "Mạch trầm tế sác"],
    pdt: "Âm dương song bổ, an thần",
    bt: "Chấn can tức phong thang hợp Bảo nguyên thang",
    tpbt: ["Nhân sâm 10g", "Phụ tử chế 8g", "Sinh địa 16g", "Mạch môn 12g", "Long cốt 15g", "Mẫu lệ 15g"]
  },
  "tam_lac_sthis_u": {
    stt: 1223,
    hc: "Tâm lạc ứ trọc",
    phanloai: ["Tạng Tâm", "Bình", "Thực", "Huyết ứ đàm trọc"],
    tc: ["Đau thắt ngực kèm đờm nhiều nặng ngực", "Môi tím", "Mạch huyền sác hoặc sáp"],
    pdt: "Hoạt huyết hóa ứ, hóa đàm thông lạc",
    bt: "Huyết phủ trục ứ thang hợp Nhị trần thang",
    tpbt: ["Đương quy 12g", "Đào nhân 12g", "Hồng hoa 8g", "Bán hạ chế 10g", "Trần bì 6g", "Phục linh 12g"]
  },
  "tam_phong_tam_nhieu": {
    stt: 1224,
    hc: "Tâm phong nhiễu động",
    phanloai: ["Tạng Tâm", "Nhiệt", "Thực", "Tâm phong"],
    tc: ["Hồi hộp đột ngột co giật tinh thần hoảng hốt", "Mạch huyền sác"],
    pdt: "Trấn phong định kinh, thanh tâm",
    bt: "Chấn can tức phong thang",
    tpbt: ["Ngưu tất 12g", "Đại giả thạch 15g", "Long cốt 15g", "Mẫu lệ 15g", "Thiên ma 10g", "Câu đằng 12g"]
  },
  "tam_tinh_huyet_khao_thuong": {
    stt: 1225,
    hc: "Tâm tinh huyết hao tổn",
    phanloai: ["Tạng Tâm", "Bình", "Hư", "Tinh huyết hư"],
    tc: ["Hay quên mất ngủ trí nhớ giảm sút", "Sắc mặt nhợt", "Mạch tế nhược"],
    pdt: "Bổ tâm tinh, dưỡng huyết",
    bt: "Đại bổ âm hoàn hợp Thiên vương bổ tâm đan",
    tpbt: ["Thục địa 16g", "Quy bản 12g", "Tri mẫu 10g", "Hoàng bá 10g", "Sinh địa 16g", "Đảng sâm 12g"]
  },
  "tam_khi_khuy_vuc_thoat": {
    stt: 1226,
    hc: "Tâm khí khuy hư dục thoát",
    phanloai: ["Tạng Tâm", "Hàn", "Hư", "Khí hư thoát"],
    tc: ["Hồi hộp dữ dội vã mồ hôi đầm đìa", "Tay chân lạnh ngắt", "Mạch vi dục tuyệt"],
    pdt: "Hồi dương cứu nghịch, ích khí cố thoát",
    bt: "Sâm phụ thang",
    tpbt: ["Nhân sâm 12g", "Hắc phụ tử 12g"]
  },
  "ty_khi_trie_nghich": {
    stt: 1227,
    hc: "Tỳ khí thượng nghịch",
    phanloai: ["Tạng Tỳ", "Bình", "Thực", "Khí nghịch"],
    tc: ["Ợ hơi buồn nôn sau ăn", "Đầy trướng thượng vị", "Mệt mỏi", "Mạch huyền hoạt"],
    pdt: "Giáng nghịch hóa trọc, kiện tỳ",
    bt: "Bán hạ tả tâm thang",
    tpbt: ["Bán hạ chế 10g", "Hoàng cầm 10g", "Đảng sâm 12g", "Can khương 6g", "Cam thảo 6g", "Hoàng liên 6g"]
  },
  "ty_duong_hu_thuy_thap": {
    stt: 1228,
    hc: "Tỳ dương hư thủy thấp",
    phanloai: ["Tạng Tỳ", "Hàn", "Hư", "Dương hư thủy thấp"],
    tc: ["Bụng trướng đầy phù thũng chân tay", "Sợ lạnh tay chân lạnh", "Đại tiện lỏng", "Mạch trầm trì"],
    pdt: "Ôn dương lợi thủy, kiện tỳ",
    bt: "Chân vũ thang",
    tpbt: ["Hắc phụ tử 8g", "Bạch truật 12g", "Phục linh 12g", "Bạch thược 12g", "Sinh khương 6g"]
  },
  "ty_vi_am_hu_sinh_tan": {
    stt: 1229,
    hc: "Tỳ Vị âm hư sinh tân kém",
    phanloai: ["Tạng Tỳ", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Miệng khô khát không muốn uống nước", "Lòng bàn tay chân nóng", "Đại tiện khô", "Mạch tế sác"],
    pdt: "Tư dưỡng tỳ vị âm",
    bt: "Ích vị thang",
    tpbt: ["Ngọc trúc 12g", "Sinh địa 16g", "Sa sâm 12g", "Mạch môn 12g"]
  },
  "ty_han_thap_tro_trung": {
    stt: 1230,
    hc: "Tỳ hàn thấp trở trung tiêu",
    phanloai: ["Tạng Tỳ", "Hàn", "Thực", "Hàn thấp"],
    tc: ["Bụng trướng đau thích chườm ấm", "Nôn mửa nước trong", "Người nặng nề", "Mạch trầm hoãn"],
    pdt: "Ôn trung hóa thấp",
    bt: "Lý trung hoàn",
    tpbt: ["Đảng sâm 12g", "Can khương 6g", "Bạch truật 12g", "Cam thảo 6g"]
  },
  "ty_nhiet_thap_khon_tieu": {
    stt: 1231,
    hc: "Tỳ thấp nhiệt khốn trở",
    phanloai: ["Tạng Tỳ", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Bụng trướng buồn nôn ăn kém", "Đại tiện nhầy dính hôi", "Nước tiểu vàng", "Mạch nhu sác"],
    pdt: "Thanh nhiệt hóa thấp",
    bt: "Nhân trần cao thang",
    tpbt: ["Nhân trần 15g", "Chi tử 10g", "Đại hoàng 6g"]
  },
  "ty_khi_ha_ham_vi_truong": {
    stt: 1232,
    hc: "Tỳ khí hạ hãm vị tràng",
    phanloai: ["Tạng Tỳ", "Bình", "Hư", "Khí hãm"],
    tc: ["Sa giáng nội tạng bụng dưới nặng tức", "Đại tiện mót rặn", "Mệt mỏi đoản khí", "Mạch nhược"],
    pdt: "Bổ khí thăng dương",
    bt: "Bổ trung ích khí thang",
    tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Bạch truật 12g", "Cam thảo 6g", "Trần bì 6g", "Sài hồ 6g", "Thăng ma 6g", "Đương quy 12g"]
  },
  "ty_khong_nhiep_huyet_truong": {
    stt: 1233,
    hc: "Tỳ không thống huyết xuất huyết",
    phanloai: ["Tạng Tỳ", "Bình", "Hư", "Huyết hư"],
    tc: ["Xuất huyết mạn tính dưới da hoặc rong kinh", "Sắc mặt nhợt nhạt", "Mệt mỏi", "Mạch tế nhược"],
    pdt: "Kiện tỳ ích khí, nhiếp huyết",
    bt: "Quy tỳ thang",
    tpbt: ["Đảng sâm 12g", "Hoàng kỳ 16g", "Bạch truật 12g", "Phục linh 12g", "Đương quy 12g", "Long nhãn 12g"]
  },
  "ty_than_duong_hu_ta": {
    stt: 1234,
    hc: "Tỳ Thận dương hư tiết tả",
    phanloai: ["Tạng Tỳ", "Hàn", "Hư", "Tỳ Thận dương hư"],
    tc: ["Tiêu chảy lúc sáng sớm ngũ canh tả", "Bụng lạnh đau", "Chân tay lạnh", "Mạch trầm tế"],
    pdt: "Ôn bổ tỳ thận, sáp trường",
    bt: "Tứ thần hoàn",
    tpbt: ["Bổ cốt chỉ 12g", "Ngô thù du 6g", "Nhục đậu khấu 10g", "Ngũ vị tử 6g", "Sinh khương 6g"]
  },
  "ty_vi_khi_huyet_luong_hu": {
    stt: 1235,
    hc: "Tỳ Vị khí huyết lưỡng hư",
    phanloai: ["Tạng Tỳ", "Bình", "Hư", "Khí huyết lưỡng hư"],
    tc: ["Ăn kém đầy bụng mệt mỏi", "Sắc mặt nhợt nhạt", "Chóng mặt", "Mạch tế nhược"],
    pdt: "Ích khí dưỡng huyết, kiện tỳ",
    bt: "Bổ trung ích khí thang hợp Tứ vật thang",
    tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Bạch truật 12g", "Thục địa 16g", "Đương quy 12g", "Bạch thược 12g"]
  },
  "ty_am_duong_luong_khuy": {
    stt: 1236,
    hc: "Tỳ âm dương lưỡng khuy",
    phanloai: ["Tạng Tỳ", "Bình", "Hư", "Âm dương lưỡng hư"],
    tc: ["Ăn kém mệt mỏi kèm lòng bàn tay chân nóng", "Sợ lạnh nhẹ", "Mạch trầm tế sác"],
    pdt: "Âm dương song bổ, kiện tỳ",
    bt: "Dưỡng vị thang hợp Lý trung hoàn",
    tpbt: ["Sa sâm 12g", "Mạch môn 12g", "Đảng sâm 12g", "Can khương 6g", "Bạch truật 12g"]
  },
  "ty_lac_huyet_u_tre": {
    stt: 1237,
    hc: "Tỳ lạc huyết ứ trệ",
    phanloai: ["Tạng Tỳ", "Bình", "Thực", "Huyết ứ"],
    tc: ["Bụng trướng đau nhói cố định", "Chất lưỡi tím", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, thông lạc",
    bt: "Huyết phủ trục ứ thang",
    tpbt: ["Đương quy 12g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Xuyên khung 10g"]
  },
  "ty_khi_uat_trie": {
    stt: 1238,
    hc: "Tỳ khí uất trệ",
    phanloai: ["Tạng Tỳ", "Bình", "Thực", "Khí trệ"],
    tc: ["Bụng trướng đầy sau ăn", "Tinh thần u uất", "Ợ hơi", "Mạch huyền"],
    pdt: "Hành khí kiện tỳ",
    bt: "Hương sa lục quân tử thang",
    tpbt: ["Hương phụ 10g", "Sa nhân 6g", "Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Trần bì 6g"]
  },
  "ty_dam_troc_tro_trung": {
    stt: 1239,
    hc: "Tỳ đàm trọc trở trệ",
    phanloai: ["Tạng Tỳ", "Bình", "Thực", "Đàm trọc"],
    tc: ["Bụng trướng đầy người nặng nề", "Đờm nhiều miệng dính", "Mạch nhu hoạt"],
    pdt: "Táo thấp hóa đàm, kiện tỳ",
    bt: "Lục quân tử thang",
    tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Cam thảo 6g", "Bán hạ chế 10g", "Trần bì 6g"]
  },
  "ty_vi_thuc_tich_trệ": {
    stt: 1240,
    hc: "Tỳ Vị thực tích đình trệ",
    phanloai: ["Tạng Tỳ", "Bình", "Thực", "Thực tích"],
    tc: ["Bụng trướng đau sau ăn uống", "Ợ chua hôi", "Đại tiện thối", "Mạch hoạt"],
    pdt: "Tiêu thực hóa tích, kiện tỳ",
    bt: "Bảo hòa hoàn",
    tpbt: ["Sơn tra 12g", "Thần khúc 10g", "Lai phục tử 10g", "Bán hạ chế 10g", "Trần bì 6g"]
  },
  "ty_duong_khuy_ton_phu": {
    stt: 1241,
    hc: "Tỳ dương khuy tổn phù thũng",
    phanloai: ["Tạng Tỳ", "Hàn", "Hư", "Dương hư phù thũng"],
    tc: ["Phù thũng toàn thân nhất là chân", "Sợ lạnh tay chân lạnh", "Mạch trầm trì"],
    pdt: "Ôn dương kiện tỳ, lợi thủy",
    bt: "Thực tỳ ẩm",
    tpbt: ["Bạch truật 12g", "Phục linh 12g", "Can khương 6g", "Phụ tử chế 8g", "Hậu phác 10g", "Trần bì 6g"]
  },
  "ty_khi_khuy_nhuoc_met": {
    stt: 1242,
    hc: "Tỳ khí khuy nhược vô lực",
    phanloai: ["Tạng Tỳ", "Bình", "Hư", "Khí hư"],
    tc: ["Mệt mỏi rã rời chân tay không muốn động", "Ăn kém", "Mạch tế nhược"],
    pdt: "Bổ khí kiện tỳ",
    bt: "Tứ quân tử thang",
    tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Cam thảo 6g"]
  },
  "ty_am_khuy_ton_tan": {
    stt: 1243,
    hc: "Tỳ âm khuy tổn sinh tân",
    phanloai: ["Tạng Tỳ", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Miệng khô khát lưỡi đỏ ít rêu", "Đại tiện táo", "Mạch tế sác"],
    pdt: "Tư dưỡng tỳ âm",
    bt: "Dưỡng vị thang",
    tpbt: ["Sa sâm 12g", "Mạch môn 12g", "Ngọc trúc 12g", "Bạch thược 12g"]
  },
  "ty_vi_han_tich": {
    stt: 1244,
    hc: "Tỳ Vị hàn tích quặn đau",
    phanloai: ["Tạng Tỳ", "Hàn", "Thực", "Hàn tích"],
    tc: ["Bụng lạnh quặn đau đột ngột", "Chườm ấm đỡ", "Mạch trầm khẩn"],
    pdt: "Ôn trung tán hàn",
    bt: "Lương phụ hoàn",
    tpbt: ["Cao lương khương 8g", "Hương phụ 10g"]
  },
  "ty_lac_khi_tret": {
    stt: 1245,
    hc: "Tỳ lạc khí trệ trướng đau",
    phanloai: ["Tạng Tỳ", "Bình", "Thực", "Khí trệ"],
    tc: ["Bụng trướng đau tức âm ỉ", "Hay thở dài", "Mạch huyền"],
    pdt: "Hành khí lý tỳ",
    bt: "Hương phụ tử khương thang",
    tpbt: ["Hương phụ 10g", "Can khương 6g", "Trần bì 6g", "Cam thảo 6g"]
  },
  "ty_than_am_duong_luong_hu": {
    stt: 1246,
    hc: "Tỳ Thận âm dương lưỡng hư",
    phanloai: ["Tạng Tỳ", "Bình", "Hư", "Âm dương lưỡng hư"],
    tc: ["Tiêu chảy mạn tính gầy sút kèm bốc hỏa nhẹ", "Mạch trầm tế sác"],
    pdt: "Âm dương song bổ, kiện tỳ",
    bt: "Chân vũ thang hợp Tứ thần hoàn",
    tpbt: ["Phụ tử chế 8g", "Bạch truật 12g", "Phục linh 12g", "Bổ cốt chỉ 12g", "Ngũ vị tử 6g"]
  },
  "Khi_Hu_Doi_Ha": {
    stt: 1247,
    hc: "Khí hư đới hạ (Khí hư do tỳ hư)",
    phanloai: ["Phụ Khoa", "Bình", "Hư", "Khí hư đới hạ"],
    tc: ["Khí hư ra nhiều màu trắng đục như mỡ", "Không mùi hôi, âm hộ không sưng", "Mệt mỏi, sắc mặt nhạt", "Đại tiện lỏng nhão", "Mạch nhu nhược"],
    pdt: "Kiện tỳ ích khí, thăng dương trừ thấp",
    bt: "Hoàn đới thang",
    tpbt: ["Bạch truật 16g", "Sơn dược 16g", "Nhân sâm 10g", "Bạch thược 12g", "Thương truật 10g", "Cam thảo 6g", "Trần bì 6g", "Kinh giới tuệ 8g", "Sài hồ 6g"]
  },
  "Thap_Nhiet_Doi_Ha": {
    stt: 1248,
    hc: "Thấp nhiệt đới hạ",
    phanloai: ["Phụ Khoa", "Nhiệt", "Thực", "Thấp nhiệt đới hạ"],
    tc: ["Khí hư ra nhiều màu vàng xanh, hôi đặc", "Âm hộ nóng rát, ngứa ngáy", "Tiểu dắt, tiểu buốt", "Lưỡi đỏ rêu vàng nhớt", "Mạch sác"],
    pdt: "Thanh nhiệt táo thấp, chỉ đới",
    bt: "Chỉ đới thang",
    tpbt: ["Hoàng bá 10g", "Tri mẫu 10g", "Trúc nhự 10g", "Phục linh 12g", "Trạch tả 10g", "Xa tiền tử 12g"]
  },
  "Liet_Duong_Than_Duong_Hu": {
    stt: 1249,
    hc: "Liệt dương do Thận dương hư",
    phanloai: ["Nam Khoa", "Hàn", "Hư", "Dương hư suy"],
    tc: ["Dương vật không cương cứng", "Sợ lạnh, tay chân lạnh", "Đau lưng mỏi gối", "Mệt mỏi, sắc mặt nhạt", "Mạch trầm tế"],
    pdt: "Ôn bổ thận dương, tráng dương khởi uất",
    bt: "Hữu quy hoàn gia Dâm dương hoắc",
    tpbt: ["Thục địa 16g", "Sơn thù nhục 8g", "Hoài sơn 12g", "Nhục quế 6g", "Phụ tử chế 8g", "Dâm dương hoắc 12g", "Ba kích 12g"]
  },
  "Di_Tinh_Than_Bat_Co": {
    stt: 1250,
    hc: "Di tinh / Hoạt tinh do Thận khí bất cố",
    phanloai: ["Nam Khoa", "Bình", "Hư", "Khí hư bất cố"],
    tc: ["Di tinh mộng tinh nhiều lần", "Thắt lưng mỏi yếu", "Tai ù, tóc rụng", "Tiểu tiện rỉ rả", "Mạch trầm nhược"],
    pdt: "Cố tinh sáp niệu, bổ thận ích khí",
    bt: "Kim tỏa cố tinh hoàn",
    tpbt: ["Sa uyển tử 12g", "Liên tu 10g", "Khiếm thực 12g", "Long cốt 15g", "Mẫu lệ 15g", "Liên nhục 12g"]
  },
  "Phong_Ty_Hanh_Ty": {
    stt: 1251,
    hc: "Phong tý (Hành tý - Đau khớp di chuyển)",
    phanloai: ["Cơ Xương Khớp", "Bình", "Thực", "Phong tý"],
    tc: ["Đau di chuyển các khớp xương (vai, cổ tay, gối)", "Đau không cố định", "Sợ gió, sốt nhẹ", "Mạch phù"],
    pdt: "Khu phong thông lạc, tán hàn trừ thấp",
    bt: "Phòng phong thông thánh tán gia giảm",
    tpbt: ["Phòng phong 10g", "Khương hoạt 10g", "Độc hoạt 10g", "Tần giao 10g", "Xuyên khung 10g", "Đương quy 12g"]
  },
  "Thap_Ty_Truoc_Ty": {
    stt: 1252,
    hc: "Thấp tý (Trước tý - Đau khớp nặng nề)",
    phanloai: ["Cơ Xương Khớp", "Bình", "Thực", "Thấp tý"],
    tc: ["Các khớp đau cố định, cảm giác nặng nề", "Tê dại da thịt", "Thời tiết ẩm ướt đau tăng", "Rêu lưỡi trắng dính", "Mạch nhu hoãn"],
    pdt: "Trừ thấp thông lạc, khu phong tán hàn",
    bt: "Ý dĩ nhân tán",
    tpbt: ["Ý dĩ nhân 15g", "Thương truật 10g", "Đương quy 12g", "Ma hoàng 6g", "Quế chi 8g", "Cam thảo 6g"]
  },
  "Cot_Ty_Than_Hu": {
    stt: 1253,
    hc: "Cốt tý (Thoái hóa khớp do Thận hư)",
    phanloai: ["Cơ Xương Khớp", "Bình", "Hư", "Cốt tý Thận hư"],
    tc: ["Đau nhức trong xương khớp kéo dài", "Thoái hóa khớp, biến dạng khớp", "Thắt lưng yếu mềm, tai ù", "Mạch trầm tế"],
    pdt: "Bổ thận điền tinh, cường gân trác cốt",
    bt: "Bổ thận tráng cốt hoàn",
    tpbt: ["Thục địa 16g", "Đỗ trọng 12g", "Cốt toái bổ 12g", "Cẩu tích 12g", "Ngưu tất 12g", "Thỏ ty tử 12g"]
  },
  "TB_001": {
    stt: 1254,
    hc: "Trúng phong trúng kinh lạc thể Phong đàm trở lạc",
    phanloai: ["Tai biến / Trúng phong", "Bình", "Thực", "Phong đàm"],
    tc: ["Méo miệng lệch mắt", "Bán thân bất toại", "Nói ngọng", "Rêu lưỡi trắng dính", "Mạch huyền hoạt"],
    pdt: "Khu phong hóa đàm, thông kinh hoạt lạc",
    bt: "Chơn nhân dưỡng hoài thang gia giảm",
    tpbt: ["Bán hạ chế 10g", "Trần bì 6g", "Nam tinh 8g", "Bạch chỉ 8g", "Xuyên khung 10g", "Đương quy 12g"]
  },
  "TB_002": {
    stt: 1255,
    hc: "Trúng phong trúng kinh lạc thể Phong nhiệt huyết ứ",
    phanloai: ["Tai biến / Trúng phong", "Nhiệt", "Thực", "Phong nhiệt huyết ứ"],
    tc: ["Đột ngột tê dại nửa người", "Mặt đỏ, miệng đắng", "Lưỡi đỏ tím có điểm ứ huyết", "Mạch huyền sác"],
    pdt: "Sơ phong thanh nhiệt, hoạt huyết thông lạc",
    bt: "Đại tần giao thang gia Đào nhân, Hồng hoa",
    tpbt: ["Tần giao 10g", "Khương hoạt 10g", "Độc hoạt 10g", "Đào nhân 12g", "Hồng hoa 8g", "Xuyên khung 10g"]
  },
  "TB_003": {
    stt: 1256,
    hc: "Trúng phong trúng kinh lạc thể Phong hàn ngưng trệ",
    phanloai: ["Tai biến / Trúng phong", "Hàn", "Thực", "Phong hàn"],
    tc: ["Méo miệng lệch mắt sau gặp lạnh", "Chân tay lạnh, cơ co quắp", "Rêu lưỡi trắng mỏng", "Mạch phù khẩn"],
    pdt: "Khu phong tán hàn, thông kinh hoạt lạc",
    bt: "Tiểu tục mệnh thang gia giảm",
    tpbt: ["Ma hoàng 6g", "Quế chi 8g", "Phòng phong 10g", "Hạnh nhân 10g", "Xuyên khung 10g", "Đương quy 12g"]
  },
  "TB_004": {
    stt: 1257,
    hc: "Trúng phong trúng tạng phủ - Dương bế thể Đàm hỏa thượng nhiễu",
    phanloai: ["Tai biến / Trúng phong", "Nhiệt", "Thực", "Đàm hỏa bế khiếu"],
    tc: ["Hôn mê đột ngột, hai tay nắm chặt", "Thở khò khè đờm dãi", "Mặt đỏ thân nóng, táo bón", "Mạch huyền sác hữu lực"],
    pdt: "Thanh nhiệt hóa đàm, khai khiếu thông bế",
    bt: "An cung ngưu hoàng hoàn hợp Địch đàm thang",
    tpbt: ["Ngưu hoàng 1g", "Trúc nhự 10g", "Chỉ thực 8g", "Bán hạ chế 10g", "Đởm nam tinh 8g", "Thạch xương bồ 8g"]
  },
  "TB_005": {
    stt: 1258,
    hc: "Trúng phong trúng tạng phủ - Âm bế thể Đàm hàn ngưng trệ",
    phanloai: ["Tai biến / Trúng phong", "Hàn", "Thực", "Đàm hàn bế khiếu"],
    tc: ["Hôn mê đột ngột, hàm răng cắn chặt", "Mặt bệch tái, chân tay lạnh", "Cổ họng vướng đờm lọc sọc", "Mạch trầm hoạt trì"],
    pdt: "Ôn hóa đàm hàn, tuyên thông khai khiếu",
    bt: "Tô hợp hương hoàn",
    tpbt: ["Tô hợp hương 4g", "Mộc hương 6g", "Trầm hương 4g", "Tế tân 4g", "Xạ hương 0.1g", "Băng phiến 0.2g"]
  },
  "TB_006": {
    stt: 1259,
    hc: "Trúng phong trúng tạng phủ - Thoát chứng thể Vong dương nguy cấp",
    phanloai: ["Tai biến / Trúng phong", "Hàn", "Hư suy", "Vong dương"],
    tc: ["Hôn mê sâu, mắt nhắm miệng há", "Tay xòe, vã mồ hôi đầm đìa", "Chân tay lạnh ngắt quá gối", "Mạch vi muốn tuyệt"],
    pdt: "Hồi dương cứu nghịch, đại bổ nguyên khí",
    bt: "Sâm phụ thang hợp Tứ nghịch thang",
    tpbt: ["Nhân sâm 12g", "Phụ tử chế 10g", "Can khương 8g", "Chích cam thảo 6g"]
  },
  "TB_007": {
    stt: 1260,
    hc: "Trúng phong trúng tạng phủ - Thoát chứng thể Vong âm thương tân",
    phanloai: ["Tai biến / Trúng phong", "Nhiệt", "Hư suy", "Vong âm"],
    tc: ["Hôn mê, thở gấp nông", "Vã mồ hôi nóng dính, da khô nóng", "Môi nẻ lưỡi đỏ thẫm khô", "Mạch tế sác vô lực muốn tuyệt"],
    pdt: "Tư âm cứu thoát, sinh tân liễm hãn",
    bt: "Sinh mạch tán gia Mẫu lệ, Quy bản",
    tpbt: ["Nhân sâm 12g", "Mạch môn 12g", "Ngũ vị tử 6g", "Mẫu lệ 15g", "Quy bản 12g"]
  },
  "TB_008": {
    stt: 1261,
    hc: "Trúng phong cấp thể Can hỏa bốc trào",
    phanloai: ["Tai biến / Trúng phong", "Nhiệt", "Thực", "Can hỏa thượng viêm"],
    tc: ["Đau đầu dữ dội rồi ngã quỵ", "Mặt đỏ như hoa hiên, nôn ra máu", "Thần chí lơ mơ, cáu gắt", "Mạch huyền sác hữu lực"],
    pdt: "Tả can giáng hỏa, trấn kinh khai khiếu",
    bt: "Long đởm tả can thang gia Đại giả thạch",
    tpbt: ["Long đởm thảo 12g", "Chi tử 10g", "Hoàng cầm 10g", "Đại giả thạch 15g", "Ngưu tất 12g", "Sài hồ 8g"]
  },
  "TB_009": {
    stt: 1262,
    hc: "Trúng phong cấp thể Can phong nội động",
    phanloai: ["Tai biến / Trúng phong", "Nhiệt", "Thực", "Can phong nội động"],
    tc: ["Co giật nửa người đột ngột", "Mắt trợn ngược, răng cắn chặt", "Chóng mặt quay mòng mòng rồi ngã", "Mạch huyền sác dũng mãnh"],
    pdt: "Bình can tức phong, trấn tĩnh khai khiếu",
    bt: "Linh dương câu đằng ẩm",
    tpbt: ["Linh dương giác 4g", "Câu đằng 12g", "Tang diệp 10g", "Cúc hoa 10g", "Bạch thược 12g", "Sinh địa 16g"]
  },
  "TB_010": {
    stt: 1263,
    hc: "Trúng phong cấp thể Khí trệ huyết ứ bế tắc kinh lạc",
    phanloai: ["Tai biến / Trúng phong", "Bình", "Thực", "Khí trệ huyết ứ"],
    tc: ["Bán thân bất toại đột ngột", "Đau đầu nhói cố định một chỗ", "Lưỡi tím xám có điểm ứ huyết", "Mạch huyền sáp"],
    pdt: "Hành khí hoạt huyết, hóa ứ thông lạc",
    bt: "Thông khiếu trục ứ thang",
    tpbt: ["Xuyên khung 10g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Thạch xương bồ 8g", "Địa long 10g"]
  },
  "TB_011": {
    stt: 1264,
    hc: "Trúng phong cấp thể Đàm nhiệt hãm tâm bao",
    phanloai: ["Tai biến / Trúng phong", "Nhiệt", "Thực", "Đàm nhiệt"],
    tc: ["Sốt cao, thần chí mê muội", "Nói lảm nhảm, cổ họng lọc sọc đờm", "Tay chân co giật nhẹ", "Mạch hoạt sác"],
    pdt: "Thanh nhiệt hóa đàm, thanh tâm khai khiếu",
    bt: "Thanh cung thang hợp Ôn đởm thang",
    tpbt: ["Trúc diệp tâm 8g", "Huyền sâm 12g", "Mạch môn 12g", "Bán hạ chế 10g", "Trúc nhự 10g", "Chỉ thực 8g"]
  },
  "TB_012": {
    stt: 1265,
    hc: "Trúng phong cấp thể Tỳ hư đàm trọc thượng nhiễu",
    phanloai: ["Tai biến / Trúng phong", "Bình", "Hư thực thác tạp", "Đàm trọc"],
    tc: ["Chóng mặt dữ dội, đầu nặng như bó", "Buồn nôn ra đờm dãi rồi tê liệt nửa người", "Rêu dầy nhớt", "Mạch nhu hoạt"],
    pdt: "Kiện tỳ hóa đàm, giáng nghịch thông lạc",
    bt: "Bán hạ bạch truật thiên ma thang",
    tpbt: ["Bán hạ chế 10g", "Bạch truật 12g", "Thiên ma 10g", "Phục linh 12g", "Trần bì 6g", "Sinh khương 6g"]
  },
  "TB_013": {
    stt: 1266,
    hc: "Trúng phong cấp thể Can Thận âm hư Can dương thượng kháng",
    phanloai: ["Tai biến / Trúng phong", "Nhiệt", "Hư thực thác tạp", "Can dương thượng kháng"], tc: ["Đầu trướng đau, tai ù ve kêu", "Đột ngột ngã ngất bán thân bất toại", "Lòng bàn tay chân nóng", "Mạch huyền tế sác"], pdt: "Tư âm tiềm dương, bình can tức phong", bt: "Trấn can tức phong thang", tpbt: ["Ngưu tất 12g", "Đại giả thạch 15g", "Long cốt 15g", "Mẫu lệ 15g", "Quy bản 12g", "Bạch thược 12g"]
  },
  "TB_014": {
    stt: 1267,
    hc: "Trúng phong cấp thể Khí hư huyết uất ngưng trệ",
    phanloai: ["Tai biến / Trúng phong", "Bình", "Hư thực thác tạp", "Khí hư huyết ứ"], tc: ["Liệt nửa người mặt bệch nhợt", "Thở ngắn mệt mỏi", "Tay chân mềm yếu không sức", "Mạch tế sáp vô lực"], pdt: "Bổ khí hoạt huyết, thông kinh hoạt lạc", bt: "Bổ dương hoàn ngũ thang", tpbt: ["Hoàng kỳ 20g", "Đương quy vĩ 12g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Địa long 10g"]
  },
  "TB_015": {
    stt: 1268,
    hc: "Trúng phong cấp thể Thấp nhiệt uẩn kết kinh lạc",
    phanloai: ["Tai biến / Trúng phong", "Nhiệt", "Thực", "Thấp nhiệt"], tc: ["Chân tay tê dại nặng nề nóng rát", "Méo miệng, nói ngọng", "Tiểu đỏ ngắn, rêu vàng nhớt", "Mạch nhu sác"], pdt: "Thanh nhiệt lợi thấp, khu phong thông lạc", bt: "Nhị diệu tán gia Khương hoạt, Tần giao", tpbt: ["Hoàng bá 10g", "Thương truật 10g", "Khương hoạt 10g", "Tần giao 10g", "Xuyên khung 10g", "Ngưu tất 12g"]
  },
  "TB_016": {
    stt: 1269,
    hc: "Trúng phong cấp thể Hàn thấp ứ trệ kinh mạch",
    phanloai: ["Tai biến / Trúng phong", "Hàn", "Thực", "Hàn thấp"], tc: ["Liệt nửa người kèm đau nhức gặp lạnh tăng", "Sợ lạnh, tay chân bệch", "Rêu dầy dính trắng", "Mạch trầm khẩn hoãn"], pdt: "Ôn kinh tán hàn, trừ thấp thông lạc", bt: "Ô đầu thang gia giảm", tpbt: ["Ô đầu chế 6g", "Ma hoàng 6g", "Bạch thược 12g", "Hoàng kỳ 16g", "Thương truật 10g", "Can khương 6g"]
  },
  "TB_017": {
    stt: 1270,
    hc: "Trúng phong cấp thể Âm hư hỏa vượng phong động",
    phanloai: ["Tai biến / Trúng phong", "Nhiệt", "Hư", "Âm hư phong động"], tc: ["Tay chân run rẩy co quắp đột ngột", "Triều nhiệt đạo hãn, gò má đỏ", "Miệng khô họng rát", "Mạch tế sác"], pdt: "Tư âm giáng hỏa, tức phong chỉ kinh", bt: "Tri bá địa hoàng hoàn gia Câu đằng", tpbt: ["Thục địa 16g", "Tri mẫu 10g", "Hoàng bá 10g", "Sơn thù 8g", "Câu đằng 12g", "Cúc hoa 10g"]
  },
  "TB_018": {
    stt: 1271,
    hc: "Trúng phong cấp thể Huyết nhiệt vọng hành xuất huyết não",
    phanloai: ["Tai biến / Trúng phong", "Nhiệt", "Thực", "Huyết nhiệt"], tc: ["Đau đầu như búa bổ rồi hôn mê", "Mặt đỏ gay, thở xối xả", "Xuất huyết dưới da hoặc chảy máu cam", "Mạch sác dũng mãnh"], pdt: "Thanh nhiệt lương huyết, chỉ huyết khai khiếu", bt: "Tê giác địa hoàng thang gia An cung ngưu hoàng hoàn", tpbt: ["Thủy ngưu giác 12g", "Sinh địa 16g", "Xích thược 12g", "Đan bì 10g", "Ngưu hoàng 1g"]
  },
  "TB_019": {
    stt: 1272,
    hc: "Trúng phong cấp thể Thận dương hư suy khí hóa thất thường",
    phanloai: ["Tai biến / Trúng phong", "Hàn", "Hư suy", "Thận dương hư"], tc: ["Thần chí lơ mơ, sợ lạnh ngắt", "Bí tiểu hoặc tiểu đái dầm không biết", "Đau thắt lưng gối lạnh", "Mạch trầm vi nhược"], pdt: "Ôn bổ thận dương, hóa khí thông khiếu", bt: "Thận khí hoàn gia Nhục quế", tpbt: ["Thục địa 16g", "Sơn thù 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Nhục quế 6g", "Phụ tử chế 8g"]
  },
  "TB_020": {
    stt: 1273,
    hc: "Trúng phong cấp thể Tâm Tỳ hư suy huyết không dưỡng não",
    phanloai: ["Tai biến / Trúng phong", "Bình", "Hư", "Tâm Tỳ hư"], tc: ["Đột ngột choáng váng ngã gục", "Mặt úa vàng, môi nhợt", "Mệt mỏi hụt hơi, mạch tế nhược", "Mạch tế nhược"], pdt: "Bổ ích tâm tỳ, dưỡng huyết an thần", bt: "Quy tỳ thang gia Viễn chí", tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Hoàng kỳ 16g", "Đương quy 12g", "Long nhãn 12g", "Toan táo nhân 12g"]
  },
  "TB_021": {
    stt: 1274,
    hc: "Trúng phong cấp thể Tâm hỏa xí thịnh nhiễu thần chí",
    phanloai: ["Tai biến / Trúng phong", "Nhiệt", "Thực", "Tâm hỏa"], tc: ["Bứt rứt cuồng loạn trước khi hôn mê", "Mặt đỏ, loét miệng lưỡi", "Tiểu đỏ buốt", "Mạch sác hữu lực"], pdt: "Thanh tâm tả hỏa, an thần khai khiếu", bt: "Đạo xích tán gia Hoàng liên", tpbt: ["Sinh địa 16g", "Mộc thông 8g", "Trúc diệp 10g", "Hoàng liên 8g", "Cam thảo 6g"]
  },
  "TB_022": {
    stt: 1275,
    hc: "Trúng phong cấp thể Vị hỏa thực nhiệt bế kết tiêu hóa",
    phanloai: ["Tai biến / Trúng phong", "Nhiệt", "Thực", "Vị hỏa thực nhiệt"], tc: ["Bụng trướng cứng cự án", "Táo bón 5-7 ngày không đi", "Ợ hơi hôi thối, sốt cao", "Mạch trầm thực sác"], pdt: "Thanh vị tả hạ, thông phủ tiêu tích", bt: "Đại thừa khí thang", tpbt: ["Đại hoàng 12g", "Mang tiêu 10g", "Hậu phác 10g", "Chỉ thực 10g"]
  },
  "TB_023": {
    stt: 1276,
    hc: "Trúng phong cấp thể Can Đởm uất nhiệt sinh phong",
    phanloai: ["Tai biến / Trúng phong", "Nhiệt", "Thực", "Can Đởm uất nhiệt"], tc: ["Miệng đắng cay, đau hạ sườn", "Mắt đỏ sưng rát rồi liệt nửa người", "Dễ cáu giận", "Mạch huyền sác"], pdt: "Thanh can lợi đởm, tức phong thông lạc", bt: "Long đởm tả can thang gia Câu đằng", tpbt: ["Long đởm thảo 12g", "Hoàng cầm 10g", "Chi tử 10g", "Trạch tả 10g", "Câu đằng 12g", "Sài hồ 8g"]
  },
  "TB_024": {
    stt: 1277,
    hc: "Trúng phong cấp thể Phế nhiệt đàm ủng hô hấp",
    phanloai: ["Tai biến / Trúng phong", "Nhiệt", "Thực", "Phế nhiệt đàm ủng"], tc: ["Sốt cao ho thở gấp", "Đờm dính vàng đặc mùi hôi", "Cánh mũi phập phồng", "Mạch hoạt sác"], pdt: "Thanh phế hóa đàm, tuyên thông khí đạo", bt: "Định suyễn thang gia Hoàng liên", tpbt: ["Ma hoàng 8g", "Hạnh nhân 10g", "Tang bạch bì 12g", "Hoàng cầm 10g", "Hoàng liên 8g", "Bán hạ chế 10g"]
  },
  "TB_025": {
    stt: 1278,
    hc: "Trúng phong cấp thể Hàn đàm ngưng trệ phế vị",
    phanloai: ["Tai biến / Trúng phong", "Hàn", "Thực", "Hàn đàm"], tc: ["Nôn ra nhiều đờm trắng loãng", "Sợ lạnh, mặt bệch tái", "Khó thở khò khè", "Mạch trầm hoạt"], pdt: "Ôn phế hóa đàm, giáng nghịch chỉ nôn", bt: "Nhị trần thang gia Can khương, Tế tân", tpbt: ["Bán hạ chế 10g", "Trần bì 6g", "Phục linh 12g", "Can khương 6g", "Tế tân 4g", "Cam thảo 6g"]
  },
  "TB_026": {
    stt: 1279,
    hc: "Trúng phong cấp thể Khí âm lưỡng hư thoát áp",
    phanloai: ["Tai biến / Trúng phong", "Nhiệt", "Hư suy", "Khí âm lưỡng hư"], tc: ["Thần chí lơ mơ, mệt mỏi hụt hơi", "Miệng khô khát nước", "Vã mồ hôi, huyết áp tụt", "Mạch tế nhược sác"], pdt: "Ích khí sinh tân, liễm hãn cứu thoát", bt: "Sinh mạch tán gia Hoàng kỳ", tpbt: ["Nhân sâm 12g", "Mạch môn 12g", "Ngũ vị tử 6g", "Hoàng kỳ 16g"]
  },
  "TB_027": {
    stt: 1280,
    hc: "Trúng phong cấp thể Huyết hư sinh phong tê dại",
    phanloai: ["Tai biến / Trúng phong", "Bình", "Hư", "Huyết hư phong động"], tc: ["Tay chân tê dại co rút đột ngột", "Sắc mặt úa vàng, chóng mặt", "Móng tay chân nhợt", "Mạch tế huyền"], pdt: "Dưỡng huyết nhuận can, khu phong chỉ kinh", bt: "Tứ vật thang gia Thiên ma, Câu đằng", tpbt: ["Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g", "Thiên ma 10g", "Câu đằng 12g"]
  },
  "TB_028": {
    stt: 1281,
    hc: "Trúng phong cấp thể Đàm trọc phong nhiệt hỗ kết",
    phanloai: ["Tai biến / Trúng phong", "Nhiệt", "Thực", "Đàm phong nhiệt"], tc: ["Đau đầu choáng váng, sốt nhẹ", "Nôn ra đờm dính vàng", "Méo miệng lệch mắt", "Mạch hoạt sác"], pdt: "Thanh nhiệt hóa đàm, sơ phong thông lạc", bt: "Ôn đởm thang gia Cúc hoa, Bạc hà", tpbt: ["Bán hạ chế 10g", "Trần bì 6g", "Phục linh 12g", "Trúc nhự 10g", "Chỉ thực 8g", "Cúc hoa 10g", "Bạc hà 6g"]
  },
  "TB_029": {
    stt: 1282,
    hc: "Trúng phong cấp thể Mệnh môn hỏa suy vong dương",
    phanloai: ["Tai biến / Trúng phong", "Hàn", "Hư suy", "Mệnh môn hỏa suy"], tc: ["Thắt lưng lạnh ngắt, chân tay lạnh quá gối", "Tinh thần lơ mơ, thở yếu", "Tiểu rỉ rả không biết", "Mạch vi tế muốn tuyệt"], pdt: "Ôn bổ mệnh môn hỏa, hồi dương cứu nghịch", bt: "Hữu quy hoàn gia Phụ tử, Can khương", tpbt: ["Thục địa 16g", "Sơn thù 8g", "Hoài sơn 12g", "Nhục quế 6g", "Phụ tử chế 10g", "Can khương 6g"]
  },
  "TB_030": {
    stt: 1283,
    hc: "Trúng phong cấp thể Kinh lạc khí uất trở trệ",
    phanloai: ["Tai biến / Trúng phong", "Bình", "Thực", "Khí trệ"], tc: ["Nửa người tê cứng ngột ngạt", "Hay thở dài, tinh thần căng thẳng", "Rêu lưỡi trắng mỏng", "Mạch huyền"], pdt: "Sơ can lý khí, thông kinh hoạt lạc", bt: "Sài hồ sơ can tán gia Địa long", tpbt: ["Sài hồ 10g", "Bạch thược 12g", "Chỉ xác 8g", "Xuyên khung 10g", "Địa long 10g", "Cam thảo 6g"]
  },
  "TB_031": {
    stt: 1284,
    hc: "Di chứng tai biến thể Khí hư huyết ứ chi liệt mềm",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư thực thác tạp", "Khí hư huyết ứ"], tc: ["Liệt nửa người tay chân duỗi mềm", "Sắc mặt nhợt nhạt, mệt mỏi hụt hơi", "Nói nhỏ yếu, tự hãn", "Mạch tế sáp vô lực"], pdt: "Đại bổ khí huyết, hoạt huyết hóa ứ thông lạc", bt: "Bổ dương hoàn ngũ thang", tpbt: ["Hoàng kỳ 20g", "Đương quy vĩ 12g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Địa long 10g", "Xuyên khung 10g"]
  },
  "TB_032": {
    stt: 1285,
    hc: "Di chứng tai biến thể Can Thận âm hư chi liệt cứng",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Hư thực thác tạp", "Can Thận âm hư"], tc: ["Tay chân liệt co quắp cứng đờ", "Đau lưng mỏi gối, tai ù", "Triều nhiệt đạo hãn, lưỡi đỏ ít rêu", "Mạch tế sác"], pdt: "Tư bổ can thận, nhuận gân thông lạc", bt: "Lục vị địa hoàng hoàn gia Ngưu tất, Đỗ trọng, Bạch thược", tpbt: ["Thục địa 16g", "Sơn thù 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Ngưu tất 12g", "Đỗ trọng 12g", "Bạch thược 12g"]
  },
  "TB_033": {
    stt: 1286,
    hc: "Di chứng tai biến thể Phong đàm trệ kinh lạc teo cơ",
    phanloai: ["Di chứng Tai biến", "Bình", "Thực", "Phong đàm thông lạc"], tc: ["Chân tay liệt tê dại teo cơ nhẹ", "Cổ họng vướng đờm dãi", "Rêu lưỡi trắng dầy nhớt", "Mạch hoạt huyền"], pdt: "Kiện tỳ hóa đàm, khu phong thông lạc", bt: "Bán hạ bạch truật thiên ma thang gia Đởm nam tinh, Mộc qua", tpbt: ["Bán hạ chế 10g", "Bạch truật 12g", "Thiên ma 10g", "Phục linh 12g", "Trần bì 6g", "Đởm nam tinh 8g", "Mộc qua 10g"]
  },
  "TB_034": {
    stt: 1287,
    hc: "Di chứng tai biến thể Hàn ngưng huyết ứ đau nhức chi liệt",
    phanloai: ["Di chứng Tai biến", "Hàn", "Thực", "Hàn trệ huyết ứ"], tc: ["Chân tay liệt đau nhức dữ dội khi gặp lạnh", "Sợ lạnh, tay chân bệch", "Lưỡi tím xám", "Mạch trầm sáp khẩn"], pdt: "Ôn kinh tán hàn, hoạt huyết thông lạc chỉ thống", bt: "Thân thống trục ứ thang gia Nhục quế, Can khương", tpbt: ["Đào nhân 12g", "Hồng hoa 8g", "Đương quy 12g", "Xuyên khung 10g", "Ngưu tất 12g", "Nhục quế 6g", "Can khương 6g"]
  },
  "TB_035": {
    stt: 1288,
    hc: "Di chứng tai biến thể Khí huyết lưỡng hư kiêm teo cơ",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư", "Khí huyết hư suy"], tc: ["Liệt nửa người lâu ngày gầy còm teo cơ", "Sắc mặt úa vàng mệt mỏi", "Ăn kém tiêu chảy", "Mạch tế nhược hoãn"], pdt: "Song bổ khí huyết, cường gân trác cốt", bt: "Bát trân thang gia Ngưu tất, Đỗ trọng, Hoàng kỳ", tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Thục địa 16g", "Đương quy 12g", "Hoàng kỳ 16g", "Ngưu tất 12g", "Đỗ trọng 12g"]
  },
  "TB_036": {
    stt: 1289,
    hc: "Di chứng tai biến thể Thận dương hư suy liệt hai chân",
    phanloai: ["Di chứng Tai biến", "Hàn", "Hư suy", "Thận dương hư"], tc: ["Hai chân mềm yếu không đứng vững", "Thắt lưng lạnh mỏi, sợ lạnh", "Tiểu đêm nhiều lần", "Mạch trầm tế trì"], pdt: "Ôn bổ thận dương, ích tinh tráng cốt", bt: "Hữu quy hoàn gia Cốt toái bổ, Tục đoạn", tpbt: ["Thục địa 16g", "Sơn thù 8g", "Hoài sơn 12g", "Nhục quế 6g", "Phụ tử chế 8g", "Cốt toái bổ 12g", "Tục đoạn 12g"]
  },
  "TB_037": {
    stt: 1290,
    hc: "Di chứng tai biến thể Thấp nhiệt uẩn kết khớp chi liệt",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Thực", "Thấp nhiệt"], tc: ["Các khớp chi liệt sưng nóng đỏ đau nhẹ", "Thân thể mỏi nặng, tiểu đỏ", "Rêu dầy vàng nhớt", "Mạch nhu sác"], pdt: "Thanh nhiệt lợi thấp, thông kinh hoạt lạc", bt: "Gia vị nhị diệu tán gia Kê huyết đằng", tpbt: ["Hoàng bá 10g", "Thương truật 10g", "Ngưu tất 12g", "Ý dĩ 15g", "Kê huyết đằng 15g", "Mộc thông 8g"]
  },
  "TB_038": {
    stt: 1291,
    hc: "Di chứng tai biến thể Can hỏa uất kết chi liệt co cứng",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Thực", "Can hỏa"], tc: ["Chân tay liệt co quắp dằn xóc đau", "Miệng đắng, dễ giận dữ cáu gắt", "Mắt đỏ, táo bón", "Mạch huyền sác"], pdt: "Thanh can tả hỏa, thư gân thông lạc", bt: "Long đởm tả can thang gia Bạch thược, Mộc qua", tpbt: ["Long đởm thảo 12g", "Chi tử 10g", "Hoàng cầm 10g", "Bạch thược 12g", "Mộc qua 10g", "Sài hồ 8g"]
  },
  "TB_039": {
    stt: 1292,
    hc: "Di chứng tai biến thể Tỳ hư thấp trệ phù nề chi liệt",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư thực thác tạp", "Tỳ hư thấp trệ"], tc: ["Tay chân liệt phù nề ấn lõm", "Bụng trướng đầy ăn kém", "Đại tiện lỏng nhão", "Mạch nhu hoãn"], pdt: "Kiện tỳ mẫn thấp, thông lạc tiêu thũng", bt: "Ngũ linh tán hợp Tứ quân tử thang gia Kê huyết đằng", tpbt: ["Bạch truật 12g", "Phục linh 12g", "Trạch tả 10g", "Trư linh 10g", "Đảng sâm 12g", "Kê huyết đằng 15g"]
  },
  "TB_040": {
    stt: 1293,
    hc: "Di chứng tai biến thể Đàm ứ tương kết chi liệt cứng",
    phanloai: ["Di chứng Tai biến", "Bình", "Thực", "Đàm ứ ngưng trệ"], tc: ["Chi liệt cơ cứng như khúc gỗ", "Nổi u cục mềm dưới da chi liệt", "Lưỡi tím xám rêu dầy nhớt", "Mạch sáp hoạt"], pdt: "Hóa đàm tán kết, hoạt huyết thông lạc", bt: "Nhị trần thang hợp Đào hồng tứ vật thang gia Bạch giới tử", tpbt: ["Bán hạ chế 10g", "Trần bì 6g", "Phục linh 12g", "Đào nhân 12g", "Hồng hoa 8g", "Bạch giới tử 10g"]
  },
  "TB_041": {
    stt: 1294,
    hc: "Di chứng tai biến thể Âm dương lưỡng hư chi liệt mềm",
    phanloai: ["Di chứng Tai biến", "Hàn nhiệt thác tạp", "Hư suy", "Âm dương lưỡng hư"], tc: ["Chi liệt duỗi mềm không lực", "Sợ lạnh nhưng gò má đỏ về chiều", "Tai ù, tiểu đêm nhiều", "Mạch trầm tế vô lực"], pdt: "Âm dương song bổ, thông kinh hoạt lạc", bt: "Bát vị hoàn gia Kỷ tử, Thỏ ty tử, Hoàng kỳ", tpbt: ["Thục địa 16g", "Sơn thù 8g", "Hoài sơn 12g", "Nhục quế 6g", "Phụ tử chế 8g", "Kỷ tử 12g", "Hoàng kỳ 16g"]
  },
  "TB_042": {
    stt: 1295,
    hc: "Di chứng tai biến thể Khí trệ huyết ứ đau nhói chi liệt",
    phanloai: ["Di chứng Tai biến", "Bình", "Thực", "Khí trệ huyết ứ"], tc: ["Chi liệt đau nhói cố định cự án", "Sắc mặt u uất", "Lưỡi tím sẫm có điểm ứ huyết", "Mạch huyền sáp"], pdt: "Hành khí hoạt huyết, thông kinh chỉ thống", bt: "Cách hạ trục ứ thang gia Ngưu tất", tpbt: ["Đương quy 12g", "Xuyên khung 10g", "Đào nhân 12g", "Hồng hoa 8g", "Chỉ xác 8g", "Hương phụ 10g", "Ngưu tất 12g"]
  },
  "TB_043": {
    stt: 1296,
    hc: "Di chứng tai biến thể Can Thận tinh huyết khuy tổn",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư", "Tinh huyết khuy tổn"], tc: ["Chi liệt teo cơ nặng, bước đi xiêu vẹo", "Tóc bạc rụng nhiều, trí nhớ kém", "Móng khô nhợt", "Mạch tế nhược"], pdt: "Tư bổ can thận, ích tinh điền tủy", bt: "Tả quy hoàn hợp Tứ vật thang gia Hoàng kỳ", tpbt: ["Thục địa 16g", "Sơn thù 8g", "Hoài sơn 12g", "Kỷ tử 12g", "Thỏ ty tử 12g", "Đương quy 12g", "Hoàng kỳ 16g"]
  },
  "TB_044": {
    stt: 1297,
    hc: "Di chứng tai biến thể Phế Tỳ khí hư ho thở liệt tay",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư", "Phế Tỳ khí hư"], tc: ["Liệt tay khó vận động", "Ho hắng lâu ngày hụt hơi", "Ăn kém tiêu chảy", "Mạch hư nhược"], pdt: "Bổ phế kiện tỳ, thăng dương thông lạc", bt: "Lục quân tử thang gia Bổ phế thang", tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Trần bì 6g", "Bán hạ chế 10g", "Hoàng kỳ 16g"]
  },
  "TB_045": {
    stt: 1298,
    hc: "Di chứng tai biến thể Tâm Thận bất giao mất ngủ liệt chi",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Hư thực thác tạp", "Tâm Thận bất giao"], tc: ["Liệt nửa người trằn trọc mất ngủ đêm", "Hồi hộp hoảng hốt, triều nhiệt", "Mắt khô, tai ù", "Mạch tế sác"], pdt: "Tư âm giáng hỏa, thông lạc an thần", bt: "Giao thái hoàn hợp Kỷ cúc địa hoàng hoàn", tpbt: ["Hoàng liên 8g", "Nhục quế 4g", "Thục địa 16g", "Sơn thù 8g", "Kỷ tử 12g", "Cúc hoa 10g"]
  },
  "TB_046": {
    stt: 1299,
    hc: "Di chứng tai biến thể Tâm Huyết hư hồi hộp liệt chi",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư", "Tâm huyết hư"], tc: ["Liệt nửa người mệt mỏi", "Hồi hộp trống ngực hay quên", "Môi lưỡi nhợt", "Mạch tế nhược"], pdt: "Bổ huyết dưỡng tâm, thông kinh hoạt lạc", bt: "Quy tỳ thang gia Kê huyết đằng", tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Hoàng kỳ 16g", "Đương quy 12g", "Long nhãn 12g", "Kê huyết đằng 15g"]
  },
  "TB_047": {
    stt: 1300,
    hc: "Di chứng tai biến thể Vị hỏa thực nhiệt táo bón liệt chi",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Thực", "Vị hỏa"], tc: ["Chi liệt co cứng đau rát", "Đại tiện táo kết 4-5 ngày", "Miệng hôi khát nước", "Mạch hoạt sác"], pdt: "Thanh vị tả hỏa, nhuận tràng thông tiện", bt: "Thanh vị tán hợp Ma tử nhân hoàn", tpbt: ["Hoàng liên 8g", "Thăng ma 6g", "Sinh địa 16g", "Ma tử nhân 12g", "Bạch thược 12g", "Đại hoàng 10g"]
  },
  "TB_048": {
    stt: 1301,
    hc: "Di chứng tai biến thể Hàn thấp ngưng trệ vai tay liệt",
    phanloai: ["Di chứng Tai biến", "Hàn", "Thực", "Hàn thấp"], tc: ["Vai tay bên liệt đau co cứng gặp lạnh đau tăng", "Sợ gió sợ lạnh", "Rêu trắng mỏng", "Mạch trầm khẩn"], pdt: "Ôn kinh tán hàn, khu phong thông lạc", bt: "Quyen thông thang gia Nhục quế, Can khương", tpbt: ["Khương hoạt 10g", "Độc hoạt 10g", "Phòng phong 10g", "Khương hoàng 10g", "Nhục quế 6g", "Can khương 6g"]
  },
  "TB_049": {
    stt: 1302,
    hc: "Di chứng tai biến thể Phong nhiệt uất kinh lạc chi liệt nóng",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Thực", "Phong nhiệt"], tc: ["Chi liệt da nóng rát đỏ nhẹ", "Miệng khô thích uống nước lạnh", "Sốt nhẹ về chiều", "Mạch phù sác"], pdt: "Sơ phong thanh nhiệt, thông kinh hoạt lạc", bt: "Bạch hổ quế chi thang gia Kê huyết đằng", tpbt: ["Tri mẫu 10g", "Thạch cao 20g", "Quế chi 8g", "Kê huyết đằng 15g", "Cam thảo 6g"]
  },
  "TB_050": {
    stt: 1303,
    hc: "Di chứng tai biến thể Đàm thấp uẩn kết vai gáy liệt",
    phanloai: ["Di chứng Tai biến", "Bình", "Thực", "Đàm thấp"], tc: ["Vùng cổ vai bên liệt nặng nề uể oải", "Đầu nặng như bó", "Nôn nao đờm dãi", "Mạch nhu hoạt"], pdt: "Táo thấp hóa đàm, thông lạc chỉ thống", bt: "Nhị trần thang gia Khương hoạt, Bạch giới tử", tpbt: ["Bán hạ chế 10g", "Trần bì 6g", "Phục linh 12g", "Khương hoạt 10g", "Bạch giới tử 10g", "Cam thảo 6g"]
  },
  "TB_051": {
    stt: 1304,
    hc: "Di chứng tai biến thể Can uất khí trệ vai sườn liệt",
    phanloai: ["Di chứng Tai biến", "Bình", "Thực", "Khí trệ"], tc: ["Vai và mạng sườn bên liệt trướng đau", "Tâm trạng buồn u uất hay thở dài", "Mạch huyền"], pdt: "Sơ can giải uất, hành khí thông lạc", bt: "Sài hồ sơ can tán gia Kê huyết đằng", tpbt: ["Sài hồ 10g", "Bạch thược 12g", "Chỉ xác 8g", "Xuyên khung 10g", "Kê huyết đằng 15g", "Cam thảo 6g"]
  },
  "TB_052": {
    stt: 1305,
    hc: "Di chứng tai biến thể Thận khí bất cố chân liệt đái dầm",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư", "Thận khí hư"], tc: ["Chân liệt không sức đứng", "Đi tiểu rỉ rả đái dầm không biết", "Mệt mỏi đau lưng", "Mạch trầm nhược"], pdt: "Bổ thận ích khí, cố sáp niệu thông lạc", bt: "Kim tỏa cố tinh hoàn hợp Bổ dương hoàn ngũ thang", tpbt: ["Sa uyển tử 12g", "Liên tu 10g", "Khiếm thực 12g", "Hoàng kỳ 20g", "Đương quy 12g", "Địa long 10g"]
  },
  "TB_053": {
    stt: 1306,
    hc: "Di chứng tai biến thể Mệnh môn hỏa suy chân liệt lạnh ngắt",
    phanloai: ["Di chứng Tai biến", "Hàn", "Hư suy", "Mệnh môn hỏa suy"], tc: ["Chân liệt lạnh ngắt quá gối", "Sợ lạnh đầm đìa", "Ngũ canh tả, tiểu đêm", "Mạch trầm tế vi"], pdt: "Ôn bổ mệnh môn, thông khiếu tráng cốt", bt: "Hữu quy hoàn gia Phụ tử, Nhục quế", tpbt: ["Thục địa 16g", "Sơn thù 8g", "Hoài sơn 12g", "Phụ tử chế 10g", "Nhục quế 6g", "Đỗ trọng 12g"]
  },
  "TB_054": {
    stt: 1307,
    hc: "Di chứng tai biến thể Tỳ Vị hư hàn ăn kém liệt chi",
    phanloai: ["Di chứng Tai biến", "Hàn", "Hư", "Tỳ Vị hư hàn"], tc: ["Chi liệt mềm yếu", "Bụng đau âm ỉ thích ấm", "Ăn không tiêu nôn nước trong", "Mạch trầm trì nhược"], pdt: "Ôn trung kiện tỳ, ích khí thông lạc", bt: "Lý trung hoàn gia Hoàng kỳ, Đương quy", tpbt: ["Đảng sâm 12g", "Can khương 6g", "Bạch truật 12g", "Hoàng kỳ 16g", "Đương quy 12g", "Cam thảo 6g"]
  },
  "TB_055": {
    stt: 1308,
    hc: "Di chứng tai biến thể Tâm Phế khí hư hụt hơi liệt tay",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư", "Tâm Phế khí hư"], tc: ["Tay liệt không nâng lên được", "Hồi hộp hụt hơi khi nói", "Mệt mỏi tự hãn", "Mạch hư nhược"], pdt: "Bổ tâm ích phế, thăng dương thông lạc", bt: "Bảo nguyên thang gia Bổ dương hoàn ngũ thang", tpbt: ["Nhân sâm 12g", "Hoàng kỳ 20g", "Nhục quế 6g", "Đương quy 12g", "Đào nhân 12g", "Hồng hoa 8g"]
  },
  "TB_056": {
    stt: 1309,
    hc: "Di chứng tai biến thể Huyết hư phong táo da chi liệt ngứa",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư thực thác tạp", "Huyết hư phong táo"], tc: ["Da bên chi liệt khô nẻ bong tróc", "Ngứa ngáy dữ dội về đêm", "Thân thể gầy nhợt", "Mạch tế sáp"], pdt: "Dưỡng huyết nhuận táo, khu phong thông lạc", bt: "Dưỡng tiêu phong tán gia Kê huyết đằng", tpbt: ["Đương quy 12g", "Thục địa 16g", "Bạch thược 12g", "Phòng phong 10g", "Kê huyết đằng 15g", "Cam thảo 6g"]
  },
  "TB_057": {
    stt: 1310,
    hc: "Di chứng tai biến thể Thấp nhiệt hạ chú chân liệt sưng",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Thực", "Thấp nhiệt"], tc: ["Chân liệt sưng to nóng đỏ rát", "Tiểu dắt buốt vàng đục", "Rêu dầy vàng nhớt", "Mạch nhu sác"], pdt: "Thanh nhiệt lợi thấp, thông kinh tiêu thũng", bt: "Nhị diệu tán gia Khổ sâm, Mộc thông", tpbt: ["Hoàng bá 10g", "Thương truật 10g", "Khổ sâm 10g", "Mộc thông 8g", "Ngưu tất 12g"]
  },
  "TB_058": {
    stt: 1311,
    hc: "Di chứng tai biến thể Huyết ứ bao khớp chi liệt biến dạng",
    phanloai: ["Di chứng Tai biến", "Bình", "Thực", "Huyết ứ"], tc: ["Các khớp bên chi liệt sưng cứng biến dạng", "Ấn vào đau nhói cự án", "Móng tay chân tím đen", "Mạch sáp"], pdt: "Hoạt huyết hóa ứ, nhuyễn kiên thông lạc", bt: "Đào hồng tứ vật thang gia Bạch giới tử, Ngưu tất", tpbt: ["Đào nhân 12g", "Hồng hoa 8g", "Đương quy 12g", "Xuyên khung 10g", "Bạch giới tử 10g", "Ngưu tất 12g"]
  },
  "TB_059": {
    stt: 1312,
    hc: "Di chứng tai biến thể Can Thận hỏa vượng chi liệt giật cơ",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Hư thực thác tạp", "Can Thận hỏa vượng"], tc: ["Thỉnh thoảng cơ chi liệt giật nẩy lên", "Mặt đỏ, tai ù, mất ngủ", "Đau lưng mỏi gối", "Mạch huyền tế sác"], pdt: "Tư âm giáng hỏa, trấn tĩnh chỉ giật", bt: "Tri bá địa hoàng hoàn gia Câu đằng, Mẫu lệ", tpbt: ["Thục địa 16g", "Tri mẫu 10g", "Hoàng bá 10g", "Câu đằng 12g", "Mẫu lệ 15g", "Sơn thù 8g"]
  },
  "TB_060": {
    stt: 1313,
    hc: "Di chứng tai biến thể Khí hư trệ thủy chi liệt mập bệu",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư thực thác tạp", "Khí hư thủy trệ"], tc: ["Người béo bệu chi liệt sưng mề", "Mệt mỏi thích nằm ngại nói", "Tiểu tiện ít phân nhão", "Mạch nhu hoãn"], pdt: "Bổ khí kiện tỳ, lợi thủy thông lạc", bt: "Bổ trung ích khí thang hợp Ngũ linh tán", tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Trạch tả 10g", "Trư linh 10g"]
  },
  "TB_061": {
    stt: 1314,
    hc: "Di chứng tai biến thể Can uất hóa hỏa chi liệt đau nhói",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Thực", "Can hỏa"], tc: ["Chi liệt đau rát dữ dội như lửa đốt", "Dễ giận dữ chửi mắng", "Miệng đắng tiểu đỏ", "Mạch huyền sác"], pdt: "Thanh can tả hỏa, thông lạc chỉ thống", bt: "Long đởm tả can thang gia Tam thất, Ngưu tất", tpbt: ["Long đởm thảo 12g", "Chi tử 10g", "Hoàng cầm 10g", "Tam thất 8g", "Ngưu tất 12g", "Sài hồ 8g"]
  },
  "TB_062": {
    stt: 1315,
    hc: "Di chứng tai biến thể Phế âm hư ho khan chi liệt mệt",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Hư", "Phế âm hư"], tc: ["Chi liệt mềm yếu mệt mỏi", "Ho khan ít đờm kéo dài", "Họng khô triều nhiệt", "Mạch tế sác"], pdt: "Tư âm nhuận phế, thông kinh hoạt lạc", bt: "Bách hợp cố kim thang gia Hoàng kỳ", tpbt: ["Bách hợp 12g", "Sinh địa 16g", "Thục địa 16g", "Mạch môn 12g", "Bối mẫu 8g", "Hoàng kỳ 16g"]
  },
  "TB_063": {
    stt: 1316,
    hc: "Di chứng tai biến thể Tỳ Thận hư hàn đi đứng xiêu vẹo",
    phanloai: ["Di chứng Tai biến", "Hàn", "Hư", "Tỳ Thận hư hàn"], tc: ["Bước đi xiêu vẹo không vững", "Bụng dưới lạnh đau tiêu lỏng", "Chân tay lạnh sợ lạnh", "Mạch trầm tế trì"], pdt: "Ôn bổ tỳ thận, cường gân trác cốt", bt: "Chân vũ thang hợp Lý trung hoàn", tpbt: ["Phụ tử chế 8g", "Can khương 6g", "Bạch truật 12g", "Phục linh 12g", "Nhân sâm 12g", "Cam thảo 6g"]
  },
  "TB_064": {
    stt: 1317,
    hc: "Di chứng tai biến thể Tâm Hỏa thượng viêm ngực bứt rứt liệt chi",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Thực", "Tâm hỏa"], tc: ["Tâm phiền bứt rứt khó ngủ", "Chi liệt giật nhẹ không yên", "Loét lưỡi tiểu đỏ", "Mạch sác hữu lực"], pdt: "Thanh tâm tả hỏa, an thần thông lạc", bt: "Đạo xích tán gia Toan táo nhân, Kê huyết đằng", tpbt: ["Sinh địa 16g", "Mộc thông 8g", "Trúc diệp 10g", "Toan táo nhân 12g", "Kê huyết đằng 15g", "Cam thảo 6g"]
  },
  "TB_065": {
    stt: 1318,
    hc: "Di chứng tai biến thể Đàm nhiệt thượng nhiễu chi liệt tê rát",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Thực", "Đàm nhiệt"], tc: ["Chi liệt tê rát nóng nực", "Cổ họng vướng đờm đặc vàng", "Mất ngủ rêu vàng nhớt", "Mạch hoạt sác"], pdt: "Thanh nhiệt hóa đàm, thông kinh hoạt lạc", bt: "Hoàng liên ôn đởm thang gia Kê huyết đằng", tpbt: ["Hoàng liên 8g", "Bán hạ chế 10g", "Trần bì 6g", "Phục linh 12g", "Trúc nhự 10g", "Kê huyết đằng 15g"]
  },
  "TB_066": {
    stt: 1319,
    hc: "Di chứng tai biến thể Hàn đàm trệ khớp chi liệt co rút",
    phanloai: ["Di chứng Tai biến", "Hàn", "Thực", "Hàn đàm"], tc: ["Chi liệt co rút đau lạnh", "Nôn ra đờm loãng bọt", "Sợ lạnh rêu trắng dính", "Mạch trầm hoạt hoãn"], pdt: "Ôn hóa hàn đàm, thư gân thông lạc", bt: "Nhị trần thang gia Can khương, Mộc qua, Tế tân", tpbt: ["Bán hạ chế 10g", "Trần bì 6g", "Phục linh 12g", "Can khương 6g", "Mộc qua 10g", "Tế tân 4g"]
  },
  "TB_067": {
    stt: 1320,
    hc: "Di chứng tai biến thể Khí hư huyết ứ kiêm phù nề ngón tay",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư thực thác tạp", "Khí hư huyết ứ"], tc: ["Các ngón tay bên liệt sưng mề mọng", "Không nắm lại được, mệt mỏi nhợt", "Mạch tế sáp vô lực"], pdt: "Bổ khí hoạt huyết, lợi thủy tiêu thũng", bt: "Bổ dương hoàn ngũ thang gia Mộc thông, Ý dĩ", tpbt: ["Hoàng kỳ 20g", "Đương quy 12g", "Đào nhân 12g", "Hồng hoa 8g", "Mộc thông 8g", "Ý dĩ 15g"]
  },
  "TB_068": {
    stt: 1321,
    hc: "Di chứng tai biến thể Can Thận âm hư móng tay chi liệt mờ nhợt",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Hư", "Can Thận âm hư"], tc: ["Móng tay chân bên liệt khô xơ dễ gãy", "Tê dại hoa mắt tai ù", "Triều nhiệt đạo hãn", "Mạch tế sác"], pdt: "Tư bổ can thận, dưỡng huyết nhuận móng", bt: "Kỷ cúc địa hoàng hoàn gia Hà thủ ô, Đương quy", tpbt: ["Thục địa 16g", "Sơn thù 8g", "Hoài sơn 12g", "Kỷ tử 12g", "Hà thủ ô 12g", "Đương quy 12g"]
  },
  "TB_069": {
    stt: 1322,
    hc: "Di chứng tai biến thể Tâm Tỳ lưỡng hư mặt nhợt liệt mềm",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư", "Tâm Tỳ hư"], tc: ["Liệt nửa người mặt bệch tái úa", "Hồi hộp hụt hơi ăn kém tiêu chảy", "Ngủ chập chờn hay mơ", "Mạch tế nhược"], pdt: "Song bổ tâm tỳ, thăng dương thông lạc", bt: "Quy tỳ thang gia Hoàng kỳ, Kê huyết đằng", tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Hoàng kỳ 16g", "Đương quy 12g", "Kê huyết đằng 15g"]
  },
  "TB_070": {
    stt: 1323,
    hc: "Di chứng tai biến thể Khí uất huyết ứ cơ chi liệt đau nhói",
    phanloai: ["Di chứng Tai biến", "Bình", "Thực", "Khí trệ huyết ứ"], tc: ["Cơ chi liệt đau nhói cố định", "Xúc động cáu giận đau tăng", "Lưỡi tím xám điểm ứ huyết", "Mạch huyền sáp"], pdt: "Sơ can giải uất, hoạt huyết hóa ứ thông lạc", bt: "Cách hạ trục ứ thang gia Sài hồ, Địa long", tpbt: ["Sài hồ 10g", "Đương quy 12g", "Xuyên khung 10g", "Đào nhân 12g", "Hồng hoa 8g", "Địa long 10g"]
  },
  "TB_071": {
    stt: 1324,
    hc: "Di chứng tai biến nói ngọng thể Phong đàm trở khiếu",
    phanloai: ["Di chứng Tai biến", "Bình", "Thực", "Phong đàm bế khiếu"], tc: ["Nói ú ớ nói ngọng không rõ từ", "Cổ họng vướng đờm dãi lọc sọc", "Lưỡi rêu trắng dầy nhớt", "Mạch huyền hoạt"], pdt: "Khu phong hóa đàm, thấu khiếu khai âm", bt: "Địch đàm thang gia Thạch xương bồ, Uất kim", tpbt: ["Bán hạ chế 10g", "Trần bì 6g", "Phục linh 12g", "Chỉ thực 8g", "Đởm nam tinh 8g", "Thạch xương bồ 8g", "Uất kim 10g"]
  },
  "TB_072": {
    stt: 1325,
    hc: "Di chứng tai biến mất ngôn ngữ thể Tâm khí hư suy",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư", "Tâm khí hư"], tc: ["Không nói được hoặc nói rất khó khăn", "Tiếng nói nhỏ yếu hụt hơi", "Sắc mặt nhợt mệt mỏi", "Mạch tế nhược vô lực"], pdt: "Bổ tâm ích khí, dưỡng âm khai khiếu", bt: "Dưỡng tâm thang gia Thạch xương bồ, Viễn chí", tpbt: ["Nhân sâm 12g", "Hoàng kỳ 16g", "Bạch truật 12g", "Phục linh 12g", "Đương quy 12g", "Thạch xương bồ 8g", "Viễn chí 6g"]
  },
  "TB_073": {
    stt: 1326,
    hc: "Di chứng tai biến nói khó thể Can phong nội động",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Thực", "Can phong nội động"], tc: ["Lưỡi rụt co quắp không liếm môi được", "Nói ngọng kèm tay chân giật nhẹ", "Mắt đỏ, cáu gắt", "Mạch huyền sác dũng mãnh"], pdt: "Bình can tức phong, thư gân khai khiếu", bt: "Linh dương câu đằng ẩm gia Thạch xương bồ", tpbt: ["Linh dương giác 4g", "Câu đằng 12g", "Tang diệp 10g", "Cúc hoa 10g", "Thạch xương bồ 8g", "Bạch thược 12g"]
  },
  "TB_074": {
    stt: 1327,
    hc: "Di chứng tai biến nói ngọng thể Khí hư huyết ứ lưỡi tím",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư thực thác tạp", "Khí hư huyết ứ"], tc: ["Nói lắp nói ngọng sau tai biến", "Lưỡi lệch tím sẫm có điểm ứ huyết", "Sắc mặt nhợt mệt mỏi", "Mạch tế sáp"], pdt: "Bổ khí hoạt huyết, hóa ứ thông lạc khai âm", bt: "Bổ dương hoàn ngũ thang gia Thạch xương bồ, Hồng hoa", tpbt: ["Hoàng kỳ 20g", "Đương quy vĩ 12g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Thạch xương bồ 8g"]
  },
  "TB_075": {
    stt: 1328,
    hc: "Di chứng tai biến nói khó thể Đàm nhiệt nhiễu tâm khiếu",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Thực", "Đàm nhiệt bế khiếu"], tc: ["Nói năng lảm nhảm hoặc nói ngọng", "Cổ họng vướng đờm đặc vàng", "Sốt nhẹ, tâm phiền mất ngủ", "Mạch hoạt sác"], pdt: "Thanh nhiệt hóa đàm, thanh tâm khai khiếu", bt: "Hoàng liên ôn đởm thang gia Thạch xương bồ", tpbt: ["Hoàng liên 8g", "Bán hạ chế 10g", "Trần bì 6g", "Phục linh 12g", "Trúc nhự 10g", "Thạch xương bồ 8g"]
  },
  "TB_076": {
    stt: 1329,
    hc: "Di chứng tai biến méo miệng thể Phong hàn xâm nhập kinh lạc",
    phanloai: ["Di chứng Tai biến", "Hàn", "Thực", "Phong hàn kinh lạc"], tc: ["Méo miệng lệch mắt, không nếp nhăn trán", "Mắt nhắm không kín, chảy nước dãi", "Gặp lạnh méo nhiều hơn", "Mạch phù khẩn"], pdt: "Khu phong tán hàn, thông kinh hoạt lạc", bt: "Khu chánh tán gia Kinh giới, Phòng phong", tpbt: ["Bạch phụ tử 8g", "Toàn yết 6g", "Cương tàm 8g", "Kinh giới 10g", "Phòng phong 10g", "Gừng tươi 6g"]
  },
  "TB_077": {
    stt: 1330,
    hc: "Di chứng tai biến lệch mặt thể Phong nhiệt uất kết gáy tai",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Thực", "Phong nhiệt"], tc: ["Méo miệng lệch mắt kèm đau rát sau tai", "Sốt nhẹ sợ gió, miệng khô", "Mắt đỏ sưng nhẹ", "Mạch phù sác"], pdt: "Sơ phong thanh nhiệt, thông kinh hoạt lạc", bt: "Đại tần giao thang gia Ngân hoa, Bạch chỉ", tpbt: ["Tần giao 10g", "Hoàng cầm 10g", "Kim ngân hoa 12g", "Bạch chỉ 8g", "Thạch cao 20g", "Xuyên khung 10g"]
  },
  "TB_078": {
    stt: 1331,
    hc: "Di chứng tai biến méo miệng lâu ngày thể Huyết hư phong động",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư thực thác tạp", "Huyết hư phong động"], tc: ["Méo miệng kéo dài trên 6 tháng không hồi phục", "Cơ mặt teo nhẹ rung giật", "Sắc mặt nhợt nhạt chóng mặt", "Mạch tế nhược sáp"], pdt: "Dưỡng huyết khu phong, thông kinh hoạt lạc mặt", bt: "Tứ vật thang gia Khu chánh tán, Hoàng kỳ", tpbt: ["Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g", "Bạch phụ tử 8g", "Hoàng kỳ 16g"]
  },
  "TB_079": {
    stt: 1332,
    hc: "Di chứng tai biến méo miệng thể Khí hư huyết ứ cơ mặt",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư thực thác tạp", "Khí hư huyết ứ"], tc: ["Lệch mặt nói khó chảy nước dãi liên tục", "Sắc mặt bệch tái mệt mỏi", "Lưỡi lệch tím điểm ứ huyết", "Mạch tế sáp vô lực"], pdt: "Bổ khí hoạt huyết, thông kinh hoạt lạc mặt", bt: "Bổ dương hoàn ngũ thang gia Khu chánh tán", tpbt: ["Hoàng kỳ 20g", "Đương quy vĩ 12g", "Đào nhân 12g", "Hồng hoa 8g", "Bạch phụ tử 8g", "Toàn yết 6g"]
  },
  "TB_080": {
    stt: 1333,
    hc: "Di chứng tai biến nuốt khó thể Đàm trọc trở trệ hầu họng",
    phanloai: ["Di chứng Tai biến", "Bình", "Thực", "Đàm trọc trở hầu"], tc: ["Ăn uống hay nghẹn sặc, nuốt khó", "Cổ họng vướng đờm dãi không khạc được", "Rêu dầy dính nhớt", "Mạch hoạt"], pdt: "Táo thấp hóa đàm, giáng nghịch khai khiếu", bt: "Bán hạ hậu phác thang gia Thạch xương bồ, Cát cánh", tpbt: ["Bán hạ chế 10g", "Hậu phác 10g", "Phục linh 12g", "Sinh khương 6g", "Tô diệp 8g", "Thạch xương bồ 8g", "Cát cánh 8g"]
  },
  "TB_081": {
    stt: 1334,
    hc: "Di chứng tai biến nuốt sặc thể Can phong nhiễu họng",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Thực", "Can phong nội động"], tc: ["Khi nuốt cơ họng co quắp bắn thức ăn ra", "Hay giận dữ, đau đầu chóng mặt", "Lưỡi đỏ dằn xóc", "Mạch huyền sác"], pdt: "Bình can tức phong, thư gân lợi họng", bt: "Linh dương câu đằng ẩm gia Bán hạ, Cát cánh", tpbt: ["Linh dương giác 4g", "Câu đằng 12g", "Tang diệp 10g", "Cúc hoa 10g", "Bán hạ chế 10g", "Cát cánh 8g"]
  },
  "TB_082": {
    stt: 1335,
    hc: "Di chứng tai biến nuốt nghẹn thể Can Thận âm hư khô họng",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Hư", "Can Thận âm hư"], tc: ["Nuốt thức ăn khô rất khó nghẹn", "Niêm mạc họng khô rát không nước bọt", "Triều nhiệt đạo hãn, tai ù", "Mạch tế sác"], pdt: "Tư bổ can thận, nhuận họng sinh tân", bt: "Kỷ cúc địa hoàng hoàn gia Sa sâm, Mạch môn", tpbt: ["Thục địa 16g", "Sơn thù 8g", "Hoài sơn 12g", "Kỷ tử 12g", "Sa sâm 12g", "Mạch môn 12g", "Cúc hoa 10g"]
  },
  "TB_083": {
    stt: 1336,
    hc: "Di chứng tai biến nuốt khó thể Khí hư hạ hãm cơ họng liệt",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư", "Khí hư hạ hãm"], tc: ["Cơ họng duỗi mềm nuốt không vào", "Ăn uống chảy tràn ra môi", "Mệt mỏi hụt hơi sắc mặt nhợt", "Mạch hư nhược"], pdt: "Bổ khí thăng dương, lợi họng cử hãm", bt: "Bổ trung ích khí thang gia Thạch xương bồ, Cát cánh", tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Bạch truật 12g", "Thăng ma 6g", "Sài hồ 6g", "Thạch xương bồ 8g", "Cát cánh 8g"]
  },
  "TB_084": {
    stt: 1337,
    hc: "Di chứng tai biến chảy nước dãi thể Tỳ khí hư bất cố",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư", "Tỳ khí hư"], tc: ["Nước dãi chảy lòng thòng không tự chủ", "Ăn kém bụng trướng, đại tiện lỏng", "Mệt mỏi sắc mặt úa vàng", "Mạch hoãn nhược"], pdt: "Kiện tỳ ích khí, nhiếp tân chỉ hãn", bt: "Tứ quân tử thang gia Ích trí nhân, Kha tử", tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Cam thảo 6g", "Ích trí nhân 10g", "Kha tử 10g"]
  },
  "TB_085": {
    stt: 1338,
    hc: "Di chứng tai biến chảy dãi thể Tỳ Vị hư hàn tràng dịch",
    phanloai: ["Di chứng Tai biến", "Hàn", "Hư", "Tỳ Vị hư hàn"], tc: ["Nước dãi chảy ra trong loãng lạnh", "Sợ lạnh, tay chân lạnh, bụng đau âm ỉ", "Mạch trầm trì vô lực"], pdt: "Ôn trung kiện tỳ, sáp tân chỉ dãi", bt: "Lý trung hoàn gia Ích trí nhân, Bán hạ", tpbt: ["Nhân sâm 12g", "Can khương 6g", "Bạch truật 12g", "Cam thảo 6g", "Ích trí nhân 10g", "Bán hạ chế 10g"]
  },
  "TB_086": {
    stt: 1339,
    hc: "Di chứng tai biến chảy dãi thể Đàm thấp uẩn kết méo miệng",
    phanloai: ["Di chứng Tai biến", "Bình", "Thực", "Đàm thấp"], tc: ["Nước dãi dính nhớt chảy nhiều bên khóe miệng liệt", "Đầu nặng như bó, rêu dầy nhớt", "Mạch hoạt nhu"], pdt: "Táo thấp hóa đàm, thông lạc chỉ dãi", bt: "Nhị trần thang gia Bán hạ chế, Ích trí nhân", tpbt: ["Bán hạ chế 10g", "Trần bì 6g", "Phục linh 12g", "Cam thảo 6g", "Ích trí nhân 10g", "Nam tinh 8g"]
  },
  "TB_087": {
    stt: 1340,
    hc: "Di chứng tai biến lệch mắt thể Huyết ứ kinh lạc mắt nhắm không kín",
    phanloai: ["Di chứng Tai biến", "Bình", "Thực", "Huyết ứ"], tc: ["Mắt bên liệt trợn ngược nhắm không kín", "Đau nhói vùng quanh hốc mắt", "Lưỡi tím sẫm", "Mạch sáp"], pdt: "Hoạt huyết hóa ứ, thông lạc minh mục", bt: "Thông khiếu trục ứ thang gia Cúc hoa", tpbt: ["Xuyên khung 10g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Thạch xương bồ 8g", "Cúc hoa 10g"]
  },
  "TB_088": {
    stt: 1341,
    hc: "Di chứng tai biến lưỡi lệch thể Can phong nhiễu kinh lạc",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Thực", "Can phong"], tc: ["Thè lưỡi ra lệch hẳn sang một bên", "Lưỡi run giật, cáu gắt, mặt đỏ", "Mạch huyền sác"], pdt: "Bình can tức phong, thông kinh hoạt lạc", bt: "Trấn can tức phong thang gia Thạch xương bồ", tpbt: ["Ngưu tất 12g", "Đại giả thạch 15g", "Long cốt 15g", "Mẫu lệ 15g", "Bạch thược 12g", "Thạch xương bồ 8g"]
  },
  "TB_089": {
    stt: 1342,
    hc: "Di chứng tai biến mất âm thể Thận âm hư phế tân kiệt",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Hư suy", "Âm hư"], tc: ["Khàn tiếng hoàn toàn không phát ra âm", "Họng khô rát, triều nhiệt gò má đỏ", "Lưỡi đỏ thẫm ít rêu", "Mạch tế sác vô lực"], pdt: "Tư bổ thận thủy, dưỡng phế nhuận họng", bt: "Bách hợp cố kim thang hợp Lục vị địa hoàng hoàn", tpbt: ["Bách hợp 12g", "Thục địa 16g", "Sinh địa 16g", "Mạch môn 12g", "Huyền sâm 12g", "Kha tử 10g"]
  },
  "TB_090": {
    stt: 1343,
    hc: "Di chứng tai biến nói ngọng thể Khí trệ đàm ngưng cổ họng",
    phanloai: ["Di chứng Tai biến", "Bình", "Thực", "Đàm khí uất"], tc: ["Nói ngọng nghẹn lời khi xúc động", "Họng vướng như có hạt mận", "Hay thở dài, ngực trướng", "Mạch huyền hoạt"], pdt: "Hành khí giải uất, hóa đàm thông khiếu", bt: "Bán hạ hậu phác thang gia Thạch xương bồ", tpbt: ["Bán hạ chế 10g", "Hậu phác 10g", "Phục linh 12g", "Sinh khương 6g", "Tô diệp 8g", "Thạch xương bồ 8g"]
  },
  "TB_091": {
    stt: 1344,
    hc: "Di chứng tai biến liệt cơ mặt thể Can huyết hư không nuôi gân",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư", "Can huyết hư"], tc: ["Cơ mặt trễ nhão không nhếch mép được", "Sắc mặt úa vàng, móng nhợt", "Chóng mặt hoa mắt", "Mạch tế nhược"], pdt: "Bổ huyết nhuận can, thông kinh hoạt lạc mặt", bt: "Tứ vật thang gia Bạch phụ tử, Hoàng kỳ", tpbt: ["Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g", "Bạch phụ tử 8g", "Hoàng kỳ 16g"]
  },
  "TB_092": {
    stt: 1345,
    hc: "Di chứng tai biến nuốt khó thể Thận dương hư cơ hầu teo",
    phanloai: ["Di chứng Tai biến", "Hàn", "Hư suy", "Thận dương hư"], tc: ["Nuốt khó kèm cơ vùng cổ teo nhẹ", "Sợ lạnh tay chân lạnh ngắt", "Thắt lưng lạnh mỏi, tiểu đêm", "Mạch trầm tế trì"], pdt: "Ôn bổ thận dương, thông khiếu lợi hầu", bt: "Thận khí hoàn gia Thạch xương bồ, Cát cánh", tpbt: ["Thục địa 16g", "Sơn thù 8g", "Hoài sơn 12g", "Nhục quế 6g", "Phụ tử chế 8g", "Thạch xương bồ 8g", "Cát cánh 8g"]
  },
  "TB_093": {
    stt: 1346,
    hc: "Di chứng tai biến chảy dãi thể Tâm Tỳ hư khí không nhiếp dịch",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư", "Tâm Tỳ hư"], tc: ["Chảy nước dãi dầm dề cả khi ngủ", "Hồi hộp hay quên, ăn kém tiêu chảy", "Sắc mặt nhợt nhạt mệt mỏi", "Mạch tế nhược"], pdt: "Bổ tâm tỳ, cố sáp nhiếp tân", bt: "Quy tỳ thang gia Ích trí nhân, Kha tử", tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Hoàng kỳ 16g", "Đương quy 12g", "Ích trí nhân 10g", "Kha tử 10g"]
  },
  "TB_094": {
    stt: 1347,
    hc: "Di chứng tai biến lệch mặt thể Thấp nhiệt uẩn kinh lạc mặt",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Thực", "Thấp nhiệt"], tc: ["Méo miệng lệch mắt, da mặt nhờn nóng", "Tiểu ngắn đỏ, rêu vàng nhớt", "Mạch nhu sác"], pdt: "Thanh nhiệt lợi thấp, thông kinh hoạt lạc", bt: "Tam nhân thang gia Khu chánh tán", tpbt: ["Hạnh nhân 10g", "Ý dĩ 15g", "Bán hạ chế 10g", "Bạch phụ tử 8g", "Toàn yết 6g", "Cương tàm 8g"]
  },
  "TB_095": {
    stt: 1348,
    hc: "Di chứng tai biến nói ngọng thể Hàn đàm ngưng trệ cuống lưỡi",
    phanloai: ["Di chứng Tai biến", "Hàn", "Thực", "Hàn đàm"], tc: ["Lưỡi cứng đờ nói ú ớ", "Sợ lạnh nôn ra đờm loãng bọt", "Rêu dầy dính trắng", "Mạch trầm hoạt hoãn"], pdt: "Ôn hóa hàn đàm, khu phong thông khiếu", bt: "Nhị trần thang gia Can khương, Nam tinh, Thạch xương bồ", tpbt: ["Bán hạ chế 10g", "Trần bì 6g", "Phục linh 12g", "Can khương 6g", "Nam tinh 8g", "Thạch xương bồ 8g"]
  },
  "TB_096": {
    stt: 1349,
    hc: "Di chứng tai biến mất âm thể Phế khí hư tiếng ho nhỏ yếu",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư", "Phế khí hư"], tc: ["Mất tiếng, nói không ra hơi", "Thở ngắn ngại nói, tự hãn", "Dễ cảm mạo", "Mạch hư nhược"], pdt: "Bổ phế ích khí, tuyên thông âm khiếu", bt: "Bổ phế thang gia Thạch xương bồ, Cát cánh", tpbt: ["Nhân sâm 12g", "Hoàng kỳ 16g", "Thục địa 16g", "Ngũ vị tử 6g", "Thạch xương bồ 8g", "Cát cánh 8g"]
  },
  "TB_097": {
    stt: 1350,
    hc: "Di chứng tai biến méo miệng thể Hàn thấp ngưng trệ cơ mặt",
    phanloai: ["Di chứng Tai biến", "Hàn", "Thực", "Hàn thấp"], tc: ["Méo miệng gáy cổ cứng đau khi gặp lạnh", "Da mặt lạnh bệch", "Rêu lưỡi trắng dính", "Mạch trầm khẩn"], pdt: "Ôn kinh tán hàn, trừ thấp thông lạc mặt", bt: "Khu chánh tán gia Can khương, Quế chi", tpbt: ["Bạch phụ tử 8g", "Toàn yết 6g", "Cương tàm 8g", "Can khương 6g", "Quế chi 8g", "Gừng tươi 6g"]
  },
  "TB_098": {
    stt: 1351,
    hc: "Di chứng tai biến nuốt nghẹn thể Huyết ứ hầu họng",
    phanloai: ["Di chứng Tai biến", "Bình", "Thực", "Huyết ứ"], tc: ["Nuốt khó đau nhói vùng niêm mạc họng", "Lưỡi tím sẫm điểm ứ huyết", "Mạch sáp"], pdt: "Hoạt huyết hóa ứ, thông lạc lợi hầu", bt: "Huyết phủ trục ứ thang gia Cát cánh", tpbt: ["Đương quy 12g", "Sinh địa 16g", "Đào nhân 12g", "Hồng hoa 8g", "Chỉ xác 8g", "Cát cánh 8g"]
  },
  "TB_099": {
    stt: 1352,
    hc: "Di chứng tai biến nói ngọng thể Can Thận âm hư lưỡi đỏ teo",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Hư", "Can Thận âm hư"], tc: ["Lưỡi đỏ teo thó nói ú ớ", "Triều nhiệt đạo hãn, đau lưng mỏi gối", "Mắt khô, tai ù", "Mạch tế sác"], pdt: "Tư bổ can thận, dưỡng tân thông khiếu", bt: "Kỷ cúc địa hoàng hoàn gia Thạch xương bồ", tpbt: ["Thục địa 16g", "Sơn thù 8g", "Hoài sơn 12g", "Kỷ tử 12g", "Cúc hoa 10g", "Thạch xương bồ 8g"]
  },
  "TB_100": {
    stt: 1353,
    hc: "Di chứng tai biến chảy dãi thể Can uất tỳ hư thất thu",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư thực thác tạp", "Khí trệ Tỳ hư"], tc: ["Chảy nước dãi nhiều khi căng thẳng cáu giận", "Ngực sườn trướng đau, ăn kém tiêu chảy", "Mạch huyền tế"], pdt: "Sơ can kiện tỳ, sáp tân chỉ dãi", bt: "Tiêu dao tán gia Ích trí nhân", tpbt: ["Sài hồ 10g", "Đương quy 12g", "Bạch thược 12g", "Bạch truật 12g", "Phục linh 12g", "Ích trí nhân 10g"]
  },
  "TB_101": {
    stt: 1354,
    hc: "Di chứng tai biến lệch mắt thể Khí hư đàm trệ cơ mặt",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư thực thác tạp", "Khí hư đàm trệ"], tc: ["Lệch mặt nói khó, mặt xị mệt mỏi", "Cổ họng đờm dãi dính", "Mạch tế hoạt vô lực"], pdt: "Bổ khí kiện tỳ, hóa đàm thông lạc mặt", bt: "Lục quân tử thang gia Khu chánh tán", tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Trần bì 6g", "Bán hạ chế 10g", "Bạch phụ tử 8g", "Toàn yết 6g"]
  },
  "TB_102": {
    stt: 1355,
    hc: "Di chứng tai biến nuốt sặc thể Phong nhiệt uất họng",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Thực", "Phong nhiệt"], tc: ["Nuốt vào sặc ho dữ dội, họng sưng đỏ", "Miệng khô khát, sốt nhẹ", "Mạch phù sác"], pdt: "Sơ phong thanh nhiệt, lợi họng giải độc", bt: "Cát cánh thang gia Ngân hoa, Liên kiều, Bán hạ", tpbt: ["Cát cánh 8g", "Cam thảo 6g", "Kim ngân hoa 12g", "Liên kiều 10g", "Bán hạ chế 10g"]
  },
  "TB_103": {
    stt: 1356,
    hc: "Di chứng tai biến lưỡi cứng thể Tâm Hỏa phần huyết uất",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Thực", "Tâm hỏa huyết nhiệt"], tc: ["Lưỡi đỏ thẫm cứng đờ không uốn được", "Tâm phiền bứt rứt, mặt đỏ", "Loét miệng lưỡi", "Mạch sác hữu lực"], pdt: "Thanh tâm lương huyết, thông khiếu chỉ cứng", bt: "Tê giác địa hoàng thang hợp Đạo xích tán", tpbt: ["Thủy ngưu giác 12g", "Sinh địa 16g", "Xích thược 12g", "Đan bì 10g", "Mộc thông 8g", "Trúc diệp 10g"]
  },
  "TB_104": {
    stt: 1357,
    hc: "Di chứng tai biến méo miệng thể Thận dương hư suy mặt bệch",
    phanloai: ["Di chứng Tai biến", "Hàn", "Hư suy", "Thận dương hư"], tc: ["Méo miệng kèm da mặt lạnh bệch tái", "Thắt lưng lạnh ngắt, sợ lạnh", "Tiểu đêm nhiều", "Mạch trầm tế vi"], pdt: "Ôn bổ thận dương, thông kinh hoạt lạc mặt", bt: "Thận khí hoàn gia Khu chánh tán", tpbt: ["Thục địa 16g", "Sơn thù 8g", "Hoài sơn 12g", "Nhục quế 6g", "Phụ tử chế 8g", "Bạch phụ tử 8g"]
  },
  "TB_105": {
    stt: 1358,
    hc: "Di chứng tai biến nuốt khó thể Thấp nhiệt uẩn trung tiêu",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Thực", "Thấp nhiệt"], tc: ["Nuốt khó buồn nôn trào ngược", "Miệng đắng dính nhớt, bụng trướng", "Rêu dầy vàng nhớt", "Mạch nhu sác"], pdt: "Thanh nhiệt hóa thấp, giáng nghịch lợi hầu", bt: "Tam nhân thang gia Cát cánh, Bán hạ", tpbt: ["Hạnh nhân 10g", "Ý dĩ 15g", "Bán hạ chế 10g", "Hậu phác 10g", "Bạch đậu khấu 8g", "Cát cánh 8g"]
  },
  "TB_106": {
    stt: 1359,
    hc: "Di chứng tai biến nói ngọng thể Huyết hư phong táo cuống lưỡi khô",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư thực thác tạp", "Huyết hư phong táo"], tc: ["Cuống lưỡi khô cứng nói khó", "Da da khô nẻ, móng nhợt", "Mệt mỏi hoa mắt", "Mạch tế sáp"], pdt: "Dưỡng huyết nhuận táo, thông kinh khai âm", bt: "Tứ vật thang gia Sa sâm, Mạch môn, Thạch xương bồ", tpbt: ["Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g", "Sa sâm 12g", "Thạch xương bồ 8g"]
  },
  "TB_107": {
    stt: 1360,
    hc: "Di chứng tai biến chảy dãi thể Mệnh môn hỏa suy bàng quang thất thu",
    phanloai: ["Di chứng Tai biến", "Hàn", "Hư suy", "Mệnh môn hỏa suy"], tc: ["Chảy dãi lạnh dầm dề kèm tiểu đái dầm", "Chân tay lạnh ngắt quá gối", "Mệt mỏi thở yếu", "Mạch vi tế"], pdt: "Ôn bổ mệnh môn, cố sáp chỉ dãi", bt: "Hữu quy hoàn gia Ích trí nhân, Kha tử", tpbt: ["Thục địa 16g", "Nhục quế 6g", "Phụ tử chế 8g", "Sơn thù 8g", "Ích trí nhân 10g", "Kha tử 10g"]
  },
  "TB_108": {
    stt: 1361,
    hc: "Di chứng tai biến lệch mắt thể Can hỏa bốc trào đau hốc mắt",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Thực", "Can hỏa"], tc: ["Đau nhói dữ dội hốc mắt bên lệch", "Mắt đỏ chảy nước mắt nóng", "Miệng đắng cáu gắt", "Mạch huyền sác"], pdt: "Thanh can tả hỏa, khu phong thông lạc", bt: "Long đởm tả can thang gia Bạch chỉ, Cúc hoa", tpbt: ["Long đởm thảo 12g", "Chi tử 10g", "Hoàng cầm 10g", "Bạch chỉ 8g", "Cúc hoa 10g", "Sài hồ 8g"]
  },
  "TB_109": {
    stt: 1362,
    hc: "Di chứng tai biến mất âm thể Khí trệ huyết ứ thanh quản",
    phanloai: ["Di chứng Tai biến", "Bình", "Thực", "Khí trệ huyết ứ"], tc: ["Mất tiếng sau khi xúc động mạnh", "Lưỡi tím sẫm có điểm ứ huyết", "Ngực sườn trướng đau", "Mạch huyền sáp"], pdt: "Hành khí hoạt huyết, khai khiếu chỉ âm", bt: "Thông khiếu trục ứ thang gia Cát cánh", tpbt: ["Xuyên khung 10g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Thạch xương bồ 8g", "Cát cánh 8g"]
  },
  "TB_110": {
    stt: 1363,
    hc: "Di chứng tai biến méo miệng thể Tỳ hư thấp trệ má xị",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư thực thác tạp", "Tỳ hư thấp trệ"], tc: ["Má bên liệt xị nhão không thu lại được", "Ăn kém bụng trướng, tiêu chảy", "Thân thể mỏi nặng", "Mạch nhu hoãn"], pdt: "Kiện tỳ mẫn thấp, thăng dương thông lạc mặt", bt: "Sâm linh bạch truật tán gia Khu chánh tán", tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Hoài sơn 16g", "Bạch phụ tử 8g", "Toàn yết 6g"]
  },
  "TB_111": {
    stt: 1364,
    hc: "Di chứng tai biến sa sút trí tuệ thể Đàm mê tâm khiếu",
    phanloai: ["Di chứng Tai biến", "Bình", "Thực", "Đàm trọc sa sút trí tuệ"], tc: ["Lú lẫn hay quên người thân, ngơ ngác", "Thích ở một mình, cười khóc bất thường", "Rêu dầy nhớt", "Mạch hoạt nhu"], pdt: "Thuận khí hóa đàm, thanh tâm khai khiếu định chí", bt: "Thuận khí đạo đàm thang gia Thạch xương bồ, Viễn chí", tpbt: ["Bán hạ chế 10g", "Trần bì 6g", "Phục linh 12g", "Chỉ thực 8g", "Nam tinh 8g", "Thạch xương bồ 8g", "Viễn chí 6g"]
  },
  "TB_112": {
    stt: 1365,
    hc: "Di chứng tai biến sa sút trí tuệ thể Thận tinh khuy tổn bổ não",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư suy", "Thận tinh bất túc"], tc: ["Trí nhớ giảm sút nghiêm trọng, đần độn", "Tóc bạc sớm, tai ù điếc, răng lung lay", "Chân tay yếu mệt", "Mạch trầm tế vô lực"], pdt: "Bổ thận điền tinh, dưỡng tủy bổ não", bt: "Tả quy hoàn gia Thạch xương bồ, Viễn chí, Lộc giác giao", tpbt: ["Thục địa 16g", "Sơn thù 8g", "Hoài sơn 12g", "Kỷ tử 12g", "Thỏ ty tử 12g", "Thạch xương bồ 8g", "Lộc giác giao 12g"]
  },
  "TB_113": {
    stt: 1366,
    hc: "Di chứng tai biến trầm cảm thể Can khí uất kết u uất",
    phanloai: ["Di chứng Tai biến", "Bình", "Thực", "Khí uất trầm cảm"], tc: ["Tinh thần u uất, không muốn giao tiếp", "Hay thở dài, ngực sườn trướng đầy", "Ăn uống không ngon", "Mạch huyền"], pdt: "Sơ can giải uất, lý khí an thần", bt: "Bán hạ hậu phác thang hợp Tiêu dao tán", tpbt: ["Sài hồ 10g", "Bạch thược 12g", "Đương quy 12g", "Bạch truật 12g", "Phục linh 12g", "Bán hạ chế 10g", "Hậu phác 10g"]
  },
  "TB_114": {
    stt: 1367,
    hc: "Di chứng tai biến trầm cảm thể Tâm Tỳ lưỡng hư lo âu",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư", "Tâm Tỳ hư"], tc: ["Lo âu hốt hoảng, mất ngủ dai dẳng", "Hồi hộp hay quên, gầy còm", "Sắc mặt nhợt nhạt, tiêu lỏng", "Mạch tế nhược"], pdt: "Song bổ tâm tỳ, dưỡng huyết an thần", bt: "Quy tỳ thang gia Viễn chí, Toan táo nhân", tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Hoàng kỳ 16g", "Đương quy 12g", "Long nhãn 12g", "Toan táo nhân 12g"]
  },
  "TB_115": {
    stt: 1368,
    hc: "Di chứng tai biến cuồng sảng thể Can Đởm hỏa thịnh cuồng loạn",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Thực", "Can hỏa cuồng sảng"], tc: ["Ghen giận chửi mắng cuồng loạn đêm", "Nói năng huyên náo đập phá", "Mắt đỏ mặt đỏ, táo bón", "Mạch huyền sác hữu lực"], pdt: "Thanh can tả hỏa, địch đàm định cuồng", bt: "Long đởm tả can thang hợp Địch đàm thang", tpbt: ["Long đởm thảo 12g", "Chi tử 10g", "Hoàng cầm 10g", "Bán hạ chế 10g", "Trúc nhự 10g", "Chỉ thực 8g", "Đởm nam tinh 8g"]
  },
  "TB_116": {
    stt: 1369,
    hc: "Di chứng tai biến mất ngủ thể Tâm Thận bất giao trằn trọc",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Hư thực thác tạp", "Tâm Thận bất giao"], tc: ["Trằn trọc cả đêm không vào giấc", "Tâm phiền bứt rứt, triều nhiệt", "Đau lưng mỏi gối, tai ù", "Mạch tế sác"], pdt: "Tư âm giáng hỏa, dưỡng tâm an thần", bt: "Thiên vương bổ tâm đan hợp Kỷ cúc địa hoàng hoàn", tpbt: ["Sinh địa 16g", "Huyền sâm 12g", "Thục địa 16g", "Kỷ tử 12g", "Cúc hoa 10g", "Toan táo nhân 12g", "Viễn chí 6g"]
  },
  "TB_117": {
    stt: 1370,
    hc: "Di chứng tai biến mất ngủ thể Đàm nhiệt nhiễu tâm bứt rứt",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Thực", "Đàm nhiệt"], tc: ["Khó ngủ, mơ thấy ác mộng hoảng hốt", "Cổ họng đờm dãi dính nhớt", "Miệng đắng, buồn nôn", "Mạch hoạt sác"], pdt: "Thanh nhiệt hóa đàm, hòa vị an thần", bt: "Hoàng liên ôn đởm thang gia Dạ giao đằng", tpbt: ["Hoàng liên 8g", "Bán hạ chế 10g", "Trần bì 6g", "Phục linh 12g", "Chỉ thực 8g", "Trúc nhự 10g", "Dạ giao đằng 15g"]
  },
  "TB_118": {
    stt: 1371,
    hc: "Di chứng tai biến tê dại nửa người thể Phong đàm trở lạc cảm giác",
    phanloai: ["Di chứng Tai biến", "Bình", "Thực", "Phong đàm trở lạc"], tc: ["Nửa người tê dại như kiến bò", "Da thịt mất cảm giác nóng lạnh", "Rêu dầy dính nhớt", "Mạch huyền hoạt"], pdt: "Khu phong hóa đàm, thông kinh hoạt lạc cảm giác", bt: "Đại tần giao thang gia Bạch giới tử, Nam tinh", tpbt: ["Tần giao 10g", "Khương hoạt 10g", "Độc hoạt 10g", "Bạch giới tử 10g", "Nam tinh 8g", "Xuyên khung 10g"]
  },
  "TB_119": {
    stt: 1372,
    hc: "Di chứng tai biến tê dại thể Huyết hư không nuôi dưỡng bì phu",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư", "Huyết hư phong động"], tc: ["Tê dại đầu ngón tay chân kéo dài", "Sắc mặt úa vàng, chóng mặt", "Móng tay chân nhợt khô", "Mạch tế nhược"], pdt: "Dưỡng huyết nhuận can, khu phong thông lạc", bt: "Tứ vật thang gia Hoàng kỳ, Kê huyết đằng", tpbt: ["Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g", "Hoàng kỳ 16g", "Kê huyết đằng 15g"]
  },
  "TB_120": {
    stt: 1373,
    hc: "Di chứng tai biến đau nhói nửa người thể Huyết ứ ngưng trệ cảm giác",
    phanloai: ["Di chứng Tai biến", "Bình", "Thực", "Huyết ứ"], tc: ["Đau nhói dằn xóc từng mảng trên da bên liệt", "Đau nhiều về đêm, cự án", "Lưỡi tím sẫm", "Mạch sáp"], pdt: "Hoạt huyết hóa ứ, thông kinh chỉ thống cảm giác", bt: "Thân thống trục ứ thang gia Đan sâm", tpbt: ["Đào nhân 12g", "Hồng hoa 8g", "Đương quy 12g", "Xuyên khung 10g", "Ngưu tất 12g", "Đan sâm 15g", "Địa long 10g"]
  },
  "TB_121": {
    stt: 1374,
    hc: "Di chứng tai biến lo âu sợ hãi thể Tâm Đởm khí hư nhút nhát",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư", "Tâm Đởm khí hư"], tc: ["Tâm thần bàng hoàng hay sợ hãi tiếng động", "Ngủ giật mình hoảng hốt", "Hồi hộp hụt hơi, thở dài", "Mạch nhược"], pdt: "Bổ khí dưỡng tâm, an thần định chí", bt: "An thần định chí hoàn gia Hoàng kỳ", tpbt: ["Nhân sâm 12g", "Hoàng kỳ 16g", "Phục linh 12g", "Phục thần 12g", "Viễn chí 6g", "Long cốt 15g", "Mẫu lệ 15g"]
  },
  "TB_122": {
    stt: 1375,
    hc: "Di chứng tai biến hay quên thể Tâm Tỳ hư khí huyết khuy tổn",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư", "Khí huyết hư suy"], tc: ["Hay quên sự việc mới xảy ra", "Mệt mỏi hụt hơi sắc mặt nhợt", "Ăn kém tiêu chảy, ngủ mơ", "Mạch tế nhược"], pdt: "Bổ tâm tỳ, dưỡng huyết ích trí", bt: "Quy tỳ thang gia Thạch xương bồ, Viễn chí", tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Hoàng kỳ 16g", "Đương quy 12g", "Thạch xương bồ 8g", "Viễn chí 6g"]
  },
  "TB_123": {
    stt: 1376,
    hc: "Di chứng tai biến ảo giác thể Đàm hỏa nhiễu tâm rối loạn nhận thức",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Thực", "Đàm hỏa nhiễu tâm"], tc: ["Thấy ảo giác hình ảnh tiếng động lạ", "Tâm phiền bứt rứt, nói nhảm", "Rêu dầy vàng nhớt", "Mạch hoạt sác"], pdt: "Thanh tâm tả hỏa, địch đàm khai khiếu định chí", bt: "Hoàng liên ôn đởm thang hợp Địch đàm thang", tpbt: ["Hoàng liên 8g", "Bán hạ chế 10g", "Trần bì 6g", "Phục linh 12g", "Chỉ thực 8g", "Đởm nam tinh 8g", "Thạch xương bồ 8g"]
  },
  "TB_124": {
    stt: 1377,
    hc: "Di chứng tai biến lạnh tê chi liệt thể Thận dương hư suy khí huyết trệ",
    phanloai: ["Di chứng Tai biến", "Hàn", "Hư suy", "Thận dương hư"], tc: ["Nửa người bên liệt lạnh ngắt tê dại", "Sợ lạnh, thắt lưng lạnh đau", "Tiểu đêm liên tục", "Mạch trầm tế trì"], pdt: "Ôn bổ thận dương, thông kinh tán hàn chỉ tê", bt: "Hữu quy hoàn gia Nhục quế, Can khương, Kê huyết đằng", tpbt: ["Thục địa 16g", "Sơn thù 8g", "Hoài sơn 12g", "Nhục quế 6g", "Phụ tử chế 8g", "Can khương 6g", "Kê huyết đằng 15g"]
  },
  "TB_125": {
    stt: 1378,
    hc: "Di chứng tai biến rát đỏ da chi liệt thể Thấp nhiệt uẩn kết da",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Thực", "Thấp nhiệt"], tc: ["Da bên chi liệt nóng rát đỏ ngứa", "Tiểu ngắn đỏ, rêu vàng nhớt", "Mạch nhu sác"], pdt: "Thanh nhiệt lợi thấp, thông kinh giải độc", bt: "Long đởm tả can thang gia Khổ sâm, Hoàng bá", tpbt: ["Long đởm thảo 12g", "Chi tử 10g", "Hoàng cầm 10g", "Khổ sâm 10g", "Hoàng bá 10g", "Mộc thông 8g"]
  },
  "TB_126": {
    stt: 1379,
    hc: "Di chứng tai biến cảm giác buốt xương thể Cốt tý Thận hư khuy tổn",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư", "Thận hư cốt tý"], tc: ["Cảm giác đau buốt từ sâu trong xương chi liệt", "Thắt lưng yếu mỏi, tai ù", "Răng lung lay", "Mạch trầm tế vô lực"], pdt: "Bổ thận điền tinh, cường gân trác cốt", bt: "Bổ thận tráng cốt hoàn gia Thục địa, Tục đoạn", tpbt: ["Thục địa 16g", "Đỗ trọng 12g", "Cốt toái bổ 12g", "Tục đoạn 12g", "Ngưu tất 12g", "Thỏ ty tử 12g"]
  },
  "TB_127": {
    stt: 1380,
    hc: "Di chứng tai biến sảng hoảng đêm thể Can âm hư hỏa vượng",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Hư", "Can âm hư"], tc: ["Ban đêm tỉnh dậy sợ hãi hốt hoảng", "Triều nhiệt đạo hãn, mắt khô", "Dễ cáu giận", "Mạch tế sác"], pdt: "Tư dưỡng can âm, giáng hỏa an thần", bt: "Kỷ cúc địa hoàng hoàn gia Toan táo nhân, Mẫu lệ", tpbt: ["Thục địa 16g", "Sơn thù 8g", "Hoài sơn 12g", "Kỷ tử 12g", "Cúc hoa 10g", "Toan táo nhân 12g", "Mẫu lệ 15g"]
  },
  "TB_128": {
    stt: 1381,
    hc: "Di chứng tai biến rối loạn nhận thức thể Khí trệ huyết ứ não khiếu",
    phanloai: ["Di chứng Tai biến", "Bình", "Thực", "Khí trệ huyết ứ"], tc: ["Phản ứng chậm chạp, ngơ ngác khi nói chuyện", "Lưỡi tím sẫm điểm ứ huyết", "Sắc mặt u uất", "Mạch huyền sáp"], pdt: "Hành khí hoạt huyết, khai khiếu thông não", bt: "Thông khiếu trục ứ thang gia Thạch xương bồ", tpbt: ["Xuyên khung 10g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Thạch xương bồ 8g", "Địa long 10g"]
  },
  "TB_129": {
    stt: 1382,
    hc: "Di chứng tai biến tê nhói bàn tay thể Khí hư huyết ứ ngón tay",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư thực thác tạp", "Khí hư huyết ứ"], tc: ["Các ngón tay bên liệt tê nhói cứng khó co", "Mệt mỏi hụt hơi sắc mặt nhợt", "Mạch tế sáp vô lực"], pdt: "Bổ khí hoạt huyết, thông kinh hoạt lạc ngón tay", bt: "Bổ dương hoàn ngũ thang gia Khương hoàng, Tang chi", tpbt: ["Hoàng kỳ 20g", "Đương quy vĩ 12g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Khương hoàng 10g", "Tang chi 12g"]
  },
  "TB_130": {
    stt: 1383,
    hc: "Di chứng tai biến u uất khóc lóc thể Can uất tỳ hư thất điều",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư thực thác tạp", "Khí trệ Tỳ hư"], tc: ["Hay xúc động tự nhiên khóc lóc u uất", "Bụng trướng ăn kém, phân nhão", "Hay thở dài", "Mạch huyền tế"], pdt: "Sơ can giải uất, kiện tỳ an thần", bt: "Tiêu dao tán gia Bán hạ, Hậu phác", tpbt: ["Sài hồ 10g", "Đương quy 12g", "Bạch thược 12g", "Bạch truật 12g", "Phục linh 12g", "Bán hạ chế 10g", "Hậu phác 10g"]
  },
  "TB_131": {
    stt: 1384,
    hc: "Di chứng tai biến ngơ ngác thể Tâm Khí hư suy thần chí bất định",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư", "Tâm khí hư"], tc: ["Mặt ngơ ngác không tập trung suy nghĩ", "Hồi hộp hụt hơi khi vận động", "Tự hãn mệt mỏi", "Mạch hư nhược"], pdt: "Ích khí dưỡng tâm, an thần định chí", bt: "Chích cam thảo thang gia Viễn chí, Phục thần", tpbt: ["Chích cam thảo 6g", "Nhân sâm 12g", "Sinh địa 16g", "Quế chi 8g", "A giao 10g", "Viễn chí 6g", "Phục thần 12g"]
  },
  "TB_132": {
    stt: 1385,
    hc: "Di chứng tai biến quấy phá đêm thể Vị hỏa thực nhiệt quấy tâm",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Thực", "Vị hỏa"], tc: ["Ban đêm bứt rứt quấy phá không ngủ", "Bụng trướng cứng táo bón", "Miệng hôi khát nước", "Mạch hoạt sác hữu lực"], pdt: "Thanh vị tả hỏa, an thần định chí", bt: "Thanh vị tán hợp Ma tử nhân hoàn gia Toan táo nhân", tpbt: ["Hoàng liên 8g", "Thăng ma 6g", "Sinh địa 16g", "Ma tử nhân 12g", "Bạch thược 12g", "Toan táo nhân 12g"]
  },
  "TB_133": {
    stt: 1386,
    hc: "Di chứng tai biến tê dại khớp cổ chân thể Hàn thấp ngưng trệ bắp chân",
    phanloai: ["Di chứng Tai biến", "Hàn", "Thực", "Hàn thấp"], tc: ["Bắp chân và cổ chân bên liệt tê dại lạnh đau", "Gặp lạnh đau tăng chườm ấm dễ chịu", "Mạch trầm khẩn hoãn"], pdt: "Ôn kinh tán hàn, khu phong thông lạc cổ chân", bt: "Độc hoạt ký sinh thang gia Can khương, Nhục quế", tpbt: ["Độc hoạt 10g", "Tang ký sinh 12g", "Đỗ trọng 12g", "Ngưu tất 12g", "Can khương 6g", "Nhục quế 6g"]
  },
  "TB_134": {
    stt: 1387,
    hc: "Di chứng tai biến run tay chi liệt thể Can Thận âm hư phong động",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Hư", "Can Thận âm hư phong động"], tc: ["Bàn tay bên liệt run rẩy không tự chủ", "Chóng mặt tai ù, triều nhiệt", "Móng khô nhợt", "Mạch tế huyền sác"], pdt: "Tư bổ can thận, tắt phong chỉ run", bt: "Trấn can tức phong thang gia Kỷ tử, Cúc hoa", tpbt: ["Ngưu tất 12g", "Đại giả thạch 15g", "Long cốt 15g", "Mẫu lệ 15g", "Quy bản 12g", "Kỷ tử 12g", "Cúc hoa 10g"]
  },
  "TB_135": {
    stt: 1388,
    hc: "Di chứng tai biến mất ngủ thể Tỳ hư đàm thấp ngột ngạt ngực",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư thực thác tạp", "Tỳ hư đàm thấp"], tc: ["Trằn trọc mất ngủ ngực trướng bức bối", "Nôn nao đờm dãi nhạt miệng", "Ăn kém phân nhão", "Mạch nhu hoạt"], pdt: "Kiện tỳ mẫn thấp, hóa đàm an thần", bt: "Ôn đởm thang gia Bạch truật, Phục linh", tpbt: ["Bán hạ chế 10g", "Trần bì 6g", "Phục linh 12g", "Chỉ thực 8g", "Trúc nhự 10g", "Bạch truật 12g"]
  },
  "TB_136": {
    stt: 1389,
    hc: "Di chứng tai biến lú lẫn thể Tâm Thận dương hư suy kiệt",
    phanloai: ["Di chứng Tai biến", "Hàn", "Hư suy", "Tâm Thận dương hư"], tc: ["Lú lẫn tinh thần mệt mỏi thích nằm", "Tay chân lạnh ngắt, sợ lạnh", "Tiểu đêm nhiều phù nhẹ", "Mạch trầm tế vi"], pdt: "Ôn thông tâm thận, đại bổ dương khí định chí", bt: "Chân vũ thang hợp Bảo nguyên thang gia Thạch xương bồ", tpbt: ["Phụ tử chế 8g", "Nhân sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Nhục quế 6g", "Thạch xương bồ 8g"]
  },
  "TB_137": {
    stt: 1390,
    hc: "Di chứng tai biến bực bội thể Can hỏa thượng viêm bứt rứt",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Thực", "Can hỏa"], tc: ["Bực bội cáu giận vô cớ liên tục", "Mắt đỏ mặt đỏ, đau đầu giật", "Tiểu đỏ đại tiện táo", "Mạch huyền sác hữu lực"], pdt: "Thanh can tả hỏa, trấn tĩnh trừ phiền", bt: "Long đởm tả can thang gia Chi tử, Hoàng cầm", tpbt: ["Long đởm thảo 12g", "Chi tử 10g", "Hoàng cầm 10g", "Trạch tả 10g", "Đương quy 12g", "Sinh địa 16g", "Sài hồ 8g"]
  },
  "TB_138": {
    stt: 1391,
    hc: "Di chứng tai biến tê rát ngực thể Khí trệ huyết ứ tâm ngực",
    phanloai: ["Di chứng Tai biến", "Bình", "Thực", "Khí trệ huyết ứ"], tc: ["Tê nhói rát vùng ngực bên liệt", "Hụt hơi khi xúc động", "Lưỡi tím sẫm", "Mạch huyền sáp"], pdt: "Hành khí hoạt huyết, thông dương chỉ thống ngực", bt: "Huyết phủ trục ứ thang gia Đan sâm", tpbt: ["Đương quy 12g", "Sinh địa 16g", "Đào nhân 12g", "Hồng hoa 8g", "Chỉ xác 8g", "Xích thược 12g", "Đan sâm 15g"]
  },
  "TB_139": {
    stt: 1392,
    hc: "Di chứng tai biến ngứa gãi da thể Huyết hư phong táo ngứa dầm dề",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư thực thác tạp", "Huyết hư phong táo"], tc: ["Gãi sần da bên liệt do ngứa dữ dội", "Da khô tróc vảy, sắc mặt nhợt", "Lưỡi nhợt", "Mạch tế sáp"], pdt: "Dưỡng huyết nhuận táo, khu phong chỉ ngứa", bt: "Dưỡng tiêu phong tán gia Hà thủ ô, Thuyền thoái", tpbt: ["Đương quy 12g", "Thục địa 16g", "Bạch thược 12g", "Phòng phong 10g", "Hà thủ ô 12g", "Thuyền thoái 6g"]
  },
  "TB_140": {
    stt: 1393,
    hc: "Di chứng tai biến sợ lạnh nửa người thể Hàn tà ngưng trệ bì phu",
    phanloai: ["Di chứng Tai biến", "Hàn", "Thực", "Hàn trệ"], tc: ["Chỉ nửa người bên liệt sợ lạnh dữ dội", "Mặc nhiều áo vẫn lạnh, da bệch", "Mạch trầm khẩn"], pdt: "Ôn kinh tán hàn, thông doanh vệ", bt: "Quế chi thang gia Tế tân, Can khương", tpbt: ["Quế chi 8g", "Bạch thược 12g", "Sinh khương 6g", "Đại táo 4 quả", "Chích cam thảo 6g", "Tế tân 4g", "Can khương 6g"]
  },
  "TB_141": {
    stt: 1394,
    hc: "Di chứng tai biến nóng rát nửa người thể Âm hư hỏa vượng bì phu",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Hư", "Âm hư hỏa vượng"], tc: ["Nửa người bên liệt nóng rát như đắp chăn nóng", "Triều nhiệt đạo hãn, miệng khô", "Mạch tế sác"], pdt: "Tư âm giáng hỏa, thanh nhiệt bì phu", bt: "Tri bá địa hoàng hoàn gia Mẫu đơn bì", tpbt: ["Thục địa 16g", "Sơn thù 8g", "Hoài sơn 12g", "Tri mẫu 10g", "Hoàng bá 10g", "Mẫu đơn bì 8g"]
  },
  "TB_142": {
    stt: 1395,
    hc: "Di chứng tai biến ảo giác thính giác thể Can Đởm thấp nhiệt tai ù tiếng lạ",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Thực", "Thấp nhiệt"], tc: ["Nghe tiếng lạ xì xào trong tai bên liệt", "Tai đau nhói, miệng đắng", "Tiểu đỏ rêu vàng nhớt", "Mạch huyền nhu sác"], pdt: "Thanh nhiệt lợi thấp, sơ can thông nhĩ", bt: "Long đởm tả can thang gia Thạch xương bồ", tpbt: ["Long đởm thảo 12g", "Chi tử 10g", "Hoàng cầm 10g", "Trạch tả 10g", "Mộc thông 8g", "Thạch xương bồ 8g"]
  },
  "TB_143": {
    stt: 1396,
    hc: "Di chứng tai biến giảm thị lực thể Can Thận âm hư mắt mờ xót",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Hư", "Can Thận âm hư"], tc: ["Mắt bên liệt nhìn mờ ảo xót rát", "Khô mắt không có nước mắt", "Đau lưng mỏi gối", "Mạch tế sác"], pdt: "Tư bổ can thận, dưỡng âm minh mục", bt: "Kỷ cúc địa hoàng hoàn gia Thạch quyết minh", tpbt: ["Thục địa 16g", "Sơn thù 8g", "Hoài sơn 12g", "Kỷ tử 12g", "Cúc hoa 10g", "Thạch quyết minh 15g"]
  },
  "TB_144": {
    stt: 1397,
    hc: "Di chứng tai biến sa sút tâm thần thể Đàm nhiệt kết hỏa cuồng điên",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Thực", "Đàm hỏa cuồng điên"], tc: ["Nói lảm nhảm chửi mắng đập phá đồ đạc", "Mất ngủ, mắt đỏ, nôn đờm vàng", "Mạch hoạt sác hữu lực"], pdt: "Thanh tâm tả hỏa, địch đàm khai khiếu định chí", bt: "Sinh thiết lạc đản hợp Địch đàm thang", tpbt: ["Sinh thiết lạc 20g", "Bán hạ chế 10g", "Trần bì 6g", "Phục linh 12g", "Chỉ thực 8g", "Đởm nam tinh 8g"]
  },
  "TB_145": {
    stt: 1398,
    hc: "Di chứng tai biến tê buốt ngón chân thể Khí hư huyết ứ ngón chân",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư thực thác tạp", "Khí hư huyết ứ"], tc: ["Các ngón chân bên liệt tê buốt tím đen nhẹ", "Đi lại rất khó khăn, mệt mỏi", "Mạch tế sáp vô lực"], pdt: "Bổ khí hoạt huyết, thông kinh hoạt lạc ngón chân", bt: "Bổ dương hoàn ngũ thang gia Ngưu tất, Mộc qua", tpbt: ["Hoàng kỳ 20g", "Đương quy vĩ 12g", "Xích thược 12g", "Đào nhân 12g", "Hồng hoa 8g", "Ngưu tất 12g", "Mộc qua 10g"]
  },
  "TB_146": {
    stt: 1399,
    hc: "Di chứng tai biến lười nói thể Phế Tỳ khí hư lười vận động",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư", "Phế Tỳ khí hư"], tc: ["Ngại nói chuyện, tiếng nhỏ yếu", "Mệt mỏi thích nằm không muốn vận động", "Ăn kém tiêu chảy", "Mạch hư nhược"], pdt: "Kiện tỳ bổ phế, thăng dương an thần", bt: "Bổ trung ích khí thang gia Viễn chí", tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Bạch truật 12g", "Trần bì 6g", "Thăng ma 6g", "Sài hồ 6g", "Viễn chí 6g"]
  },
  "TB_147": {
    stt: 1400,
    hc: "Di chứng tai biến mệt mỏi tinh thần thể Khí âm lưỡng hư suy nhược",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Hư", "Khí âm lưỡng hư"], tc: ["Tinh thần mệt mỏi kiệt sức", "Miệng khô họng rát, vã mồ hôi trộm", "Mạch tế nhược sác"], pdt: "Ích khí sinh tân, dưỡng âm an thần", bt: "Sinh mạch tán gia Hoàng kỳ, Sa sâm", tpbt: ["Nhân sâm 12g", "Mạch môn 12g", "Ngũ vị tử 6g", "Hoàng kỳ 16g", "Sa sâm 12g"]
  },
  "TB_148": {
    stt: 1401,
    hc: "Di chứng tai biến hoảng hốt thể Tâm Huyết hư giật mình đêm",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư", "Tâm huyết hư"], tc: ["Đang ngủ tỉnh dậy hoảng hốt đập ngực", "Hồi hộp hay quên, mặt nhợt", "Mạch tế nhược"], pdt: "Bổ huyết dưỡng tâm, trấn tĩnh an thần", bt: "Quy tỳ thang gia Long cốt, Mẫu lệ", tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Hoàng kỳ 16g", "Đương quy 12g", "Long cốt 15g", "Mẫu lệ 15g"]
  },
  "TB_149": {
    stt: 1402,
    hc: "Di chứng tai biến nhức đầu âm ỉ thể Can dương thượng kháng nhức dai dẳng",
    phanloai: ["Di chứng Tai biến", "Nhiệt", "Hư thực thác tạp", "Can dương thượng kháng"], tc: ["Đau nhức đầu âm ỉ bên liệt kéo dài", "Mặt hơi đỏ, tai ù, mất ngủ", "Mạch huyền tế"], pdt: "Bình can tiềm dương, thông lạc chỉ thống", bt: "Thiên ma câu đằng ẩm gia Xuyên khung", tpbt: ["Thiên ma 10g", "Câu đằng 12g", "Thạch quyết minh 15g", "Ngưu tất 12g", "Đỗ trọng 12g", "Xuyên khung 10g"]
  },
  "TB_150": {
    stt: 1403,
    hc: "Di chứng tai biến thờ ơ thể Thận tinh bất túc mất cảm xúc",
    phanloai: ["Di chứng Tai biến", "Bình", "Hư suy", "Thận tinh bất túc"], tc: ["Thờ ơ không cảm xúc với xung quanh", "Đau lưng mỏi gối, tai ù điếc", "Mạch trầm tế vô lực"], pdt: "Bổ thận điền tinh, dưỡng tủy khai khiếu", bt: "Tả quy hoàn gia Thạch xương bồ", tpbt: ["Thục địa 16g", "Sơn thù 8g", "Hoài sơn 12g", "Kỷ tử 12g", "Thỏ ty tử 12g", "Thạch xương bồ 8g"]
  },
  "TB_151": {
    stt: 1404,
    hc: "Biến chứng tai biến viêm phổi sặc thể Đàm nhiệt ung phế sốt cao",
    phanloai: ["Biến chứng Tai biến", "Nhiệt", "Thực", "Đàm nhiệt ung phế"], tc: ["Sốt cao ho hen thở gấp sau khi sặc", "Đờm dính vàng đặc mùi hôi", "Ngực đau tức, rêu vàng dầy", "Mạch hoạt sác"], pdt: "Thanh nhiệt tuyên phế, hóa đàm định suyễn giải độc", bt: "Định suyễn thang gia Thiên kim vị kinh thang", tpbt: ["Ma hoàng 8g", "Hạnh nhân 10g", "Tang bạch bì 12g", "Hoàng cầm 10g", "Vĩ kinh 12g", "Đông qua nhân 12g", "Ý dĩ 15g"]
  },
  "TB_152": {
    stt: 1405,
    hc: "Biến chứng tai biến viêm phổi sặc thể Phong hàn đàm ẩm ứ phế",
    phanloai: ["Biến chứng Tai biến", "Hàn", "Thực", "Phong hàn đàm ẩm"], tc: ["Ho sặc đờm trắng loãng bọt nhiều", "Sợ lạnh, sốt nhẹ, thở khò khè", "Rêu dầy dính trắng", "Mạch phù khẩn hoãn"], pdt: "Giải biểu tán hàn, ôn phế hóa ẩm", bt: "Tiểu thanh long thang gia Hạnh nhân", tpbt: ["Ma hoàng 8g", "Quế chi 8g", "Tế tân 4g", "Can khương 6g", "Bán hạ chế 10g", "Ngũ vị tử 6g", "Hạnh nhân 10g"]
  },
  "TB_153": {
    stt: 1406,
    hc: "Biến chứng tai biến loét tỳ đè thể Thấp nhiệt hỏa độc hoại tử da",
    phanloai: ["Biến chứng Tai biến", "Nhiệt", "Thực", "Thấp nhiệt hỏa độc"], tc: ["Vùng mông gót chân lở loét chảy dịch hôi", "Xung quanh sưng nóng đỏ đau dữ dội", "Sốt, tiểu đỏ", "Mạch hoạt sác"], pdt: "Thanh nhiệt giải độc, trừ thấp bài nùng", bt: "Ngũ vị tiêu độc ẩm gia Hoàng bá, Khổ sâm", tpbt: ["Kim ngân hoa 12g", "Cúc hoa 10g", "Bồ công anh 15g", "Hoàng bá 10g", "Khổ sâm 10g", "Cát cánh 8g"]
  },
  "TB_154": {
    stt: 1407,
    hc: "Biến chứng tai biến loét tỳ đè thể Khí huyết hư suy khó liền miệng",
    phanloai: ["Biến chứng Tai biến", "Bình", "Hư", "Khí huyết hư suy"], tc: ["Vết loét tỳ đè đáy bệch nhợt chảy dịch trong", "Lâu ngày không liền miệng không mọc thịt", "Sắc mặt nhợt mệt mỏi", "Mạch tế nhược vô lực"], pdt: "Đại bổ khí huyết, sinh cơ liền miệng loét", bt: "Thập toàn đại bổ thang gia Hoàng kỳ, Bạch chỉ", tpbt: ["Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Cam thảo 6g", "Thục địa 16g", "Đương quy 12g", "Hoàng kỳ 20g", "Bạch chỉ 8g"]
  },
  "TB_155": {
    stt: 1408,
    hc: "Biến chứng tai biến táo bón thể Đại tràng thực nhiệt tích trệ",
    phanloai: ["Biến chứng Tai biến", "Nhiệt", "Thực", "Đại tràng thực nhiệt"], tc: ["Đại tiện 5-7 ngày không đi, phân cứng như đá", "Bụng trướng đau căng cự án", "Mặt đỏ miệng hôi", "Mạch trầm thực dũng mãnh"], pdt: "Thanh nhiệt tả hạ, nhuận táo thông tiện", bt: "Đại thừa khí thang", tpbt: ["Đại hoàng 12g", "Mang tiêu 10g", "Hậu phác 10g", "Chỉ thực 10g"]
  },
  "TB_156": {
    stt: 1409,
    hc: "Biến chứng tai biến táo bón thể Tân dịch khô kiệt tràng táo",
    phanloai: ["Biến chứng Tai biến", "Bình", "Hư", "Tân dịch khuy tổn"], tc: ["Phân khô nhỏ như phân dê", "Đi tiêu rặn rất khó khăn khô rát", "Miệng khô họng khát nước", "Mạch tế sáp"], pdt: "Nhuận tràng thông tiện, sinh tân bổ dịch", bt: "Ma tử nhân hoàn gia Sa sâm, Mạch môn", tpbt: ["Ma tử nhân 12g", "Bạch thược 12g", "Chỉ xác 8g", "Đại hoàng 10g", "Hạnh nhân 10g", "Sa sâm 12g", "Mạch môn 12g"]
  },
  "TB_157": {
    stt: 1410,
    hc: "Biến chứng tai biến táo bón thể Khí hư tràng nhược rặn không ra",
    phanloai: ["Biến chứng Tai biến", "Bình", "Hư", "Khí hư tràng táo"], tc: ["Muốn đi tiêu nhưng rặn không ra nổi", "Vã mồ hôi hụt hơi sau khi rặn", "Phân mềm không quá khô", "Mạch hư nhược"], pdt: "Bổ khí nhuận tràng, ích khí thông tiện", bt: "Bổ trung ích khí thang gia Ma tử nhân, Trần bì", tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Bạch truật 12g", "Thăng ma 6g", "Sài hồ 6g", "Ma tử nhân 12g", "Trần bì 6g"]
  },
  "TB_158": {
    stt: 1411,
    hc: "Biến chứng tai biến bí tiểu thể Bàng quang thấp nhiệt ứ niệu",
    phanloai: ["Biến chứng Tai biến", "Nhiệt", "Thực", "Thấp nhiệt bàng quang"], tc: ["Bụng dưới căng trướng đau rát", "Muốn tiểu mà không ra giọt nào hoặc ra máu", "Miệng khát sốt nhẹ", "Mạch nhu sác"], pdt: "Thanh nhiệt lợi thấp, thông lâm lợi niệu", bt: "Bát chính tán gia Hoàng bá, Mộc thông", tpbt: ["Xa tiền tử 12g", "Cù mạch 10g", "Biển súc 10g", "Hoạt thạch 15g", "Chi tử 10g", "Hoàng bá 10g", "Mộc thông 8g"]
  },
  "TB_159": {
    stt: 1412,
    hc: "Biến chứng tai biến bí tiểu thể Thận khí hư bất hóa bàng quang phao chuyển",
    phanloai: ["Biến chứng Tai biến", "Bình", "Hư", "Thận khí hư bất hóa"], tc: ["Bụng dưới căng trướng nhưng không đau rát", "Đi tiểu không ra giọt nào, mệt mỏi hụt hơi", "Thắt lưng mỏi lạnh", "Mạch trầm tế vô lực"], pdt: "Ôn bổ thận khí, thăng thanh giáng trọc lợi niệu", bt: "Tế sinh Thận khí hoàn gia Thăng ma", tpbt: ["Thục địa 16g", "Sơn thù 8g", "Hoài sơn 12g", "Trạch tả 10g", "Đan bì 8g", "Nhục quế 6g", "Thăng ma 6g"]
  },
  "TB_160": {
    stt: 1413,
    hc: "Biến chứng tai biến đái dầm thể Thận dương hư suy thất thu",
    phanloai: ["Biến chứng Tai biến", "Hàn", "Hư suy", "Thận dương hư"], tc: ["Đi tiểu đái dầm chảy rỉ rả không tự chủ", "Nước tiểu trong dài, sợ lạnh chân tay lạnh", "Mệt mỏi sắc mặt bệch", "Mạch trầm tế trì"], pdt: "Ôn bổ thận dương, sáp niệu chỉ di", bt: "Tang phiêu tiêu tán hợp Củng đái hoàn", tpbt: ["Tang phiêu tiêu 12g", "Ích trí nhân 10g", "Bổ cốt chỉ 12g", "Hoài sơn 12g", "Long cốt 15g", "Mẫu lệ 15g"]
  },
  "TB_161": {
    stt: 1414,
    hc: "Biến chứng tai biến viêm đường tiết niệu thể Thấp nhiệt huyết lâm",
    phanloai: ["Biến chứng Tai biến", "Nhiệt", "Thực", "Thấp nhiệt huyết lâm"], tc: ["Tiểu dắt tiểu buốt nước tiểu đục đọng máu", "Bụng dưới trướng đau rát", "Sốt bứt rứt", "Mạch hoạt sác"], pdt: "Thanh nhiệt lợi thấp, lương huyết thông lâm", bt: "Tiểu kế ẩm gia Mộc thông, Hoàng bá", tpbt: ["Sinh địa 16g", "Mộc thông 8g", "Hoạt thạch 15g", "Xa tiền tử 12g", "Tiểu kế 12g", "Hoàng bá 10g"]
  },
  "TB_162": {
    stt: 1415,
    hc: "Biến chứng tai biến phù chân liệt thể Khí hư thủy trệ tràng chi",
    phanloai: ["Biến chứng Tai biến", "Bình", "Hư thực thác tạp", "Khí hư thủy trệ"], tc: ["Chân bên liệt phù thũng mọng ấn lõm sâu", "Sắc mặt nhợt mệt mỏi", "Tiểu tiện ít, phân lỏng", "Mạch nhu hoãn vô lực"], pdt: "Bổ khí kiện tỳ, lợi thủy tiêu thũng thông lạc", bt: "Bổ trung ích khí thang hợp Ngũ linh tán gia Kê huyết đằng", tpbt: ["Hoàng kỳ 16g", "Đảng sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Trạch tả 10g", "Kê huyết đằng 15g"]
  },
  "TB_163": {
    stt: 1416,
    hc: "Biến chứng tai biến phù chân thể Thận dương hư suy thủy khí lăng",
    phanloai: ["Biến chứng Tai biến", "Hàn", "Hư suy", "Thận dương hư thủy thũng"], tc: ["Phù nặng cả hai chân và vùng cạp quần", "Sợ lạnh tay chân lạnh ngắt", "Mệt mỏi thở ngắn", "Mạch trầm tế vi"], pdt: "Ôn thận trợ dương, hóa khí lợi thủy tiêu thũng", bt: "Chân vũ thang gia Mộc thông, Ngưu tất", tpbt: ["Phụ tử chế 8g", "Bạch truật 12g", "Phục linh 12g", "Bạch thược 12g", "Sinh khương 6g", "Mộc thông 8g", "Ngưu tất 12g"]
  },
  "TB_164": {
    stt: 1417,
    hc: "Biến chứng tai biến trào ngược dạ dày thể Can Vị khí nghịch nôn mửa",
    phanloai: ["Biến chứng Tai biến", "Bình", "Hư thực thác tạp", "Khí nghịch Vị bất hòa"], tc: ["Ợ chua ợ hơi trào ngược thức ăn ra miệng", "Thượng vị trướng đau, buồn nôn liên tục", "Hay cáu gắt", "Mạch huyền hoãn"], pdt: "Sơ can hòa vị, giáng nghịch chỉ nôn", bt: "Bán hạ hựu sinh thang hợp Tả kim hoàn", tpbt: ["Bán hạ chế 10g", "Trần bì 6g", "Phục linh 12g", "Hoàng liên 8g", "Ngô thù du 4g", "Sinh khương 6g"]
  },
  "TB_165": {
    stt: 1418,
    hc: "Biến chứng tai biến xuất huyết tiêu hóa thể Vị hỏa trào huyết nôn máu đen",
    phanloai: ["Biến chứng Tai biến", "Nhiệt", "Thực", "Vị hỏa xuất huyết"], tc: ["Nôn ra máu đục đen hoặc đi tiêu phân đen như hắc ín", "Thượng vị đau rát cự án", "Miệng hôi khát nước", "Mạch hoạt sác hữu lực"], pdt: "Thanh vị tả hỏa, lương huyết chỉ huyết", bt: "Thanh vị tán gia Tam thất, Bồ hoàng", tpbt: ["Hoàng liên 8g", "Thăng ma 6g", "Sinh địa 16g", "Đan bì 10g", "Tam thất 8g", "Bồ hoàng 10g"]
  },
  "TB_166": {
    stt: 1419,
    hc: "Biến chứng tai biến huyết khối tĩnh mạch chi thể Huyết ứ bế tắc kinh mạch",
    phanloai: ["Biến chứng Tai biến", "Bình", "Thực", "Huyết ứ bế tắc"], tc: ["Chân bên liệt sưng to đau nhói căng cứng", "Da chân tím đục, ấn vào đau dữ dội", "Mạch sáp"], pdt: "Hoạt huyết hóa ứ, thông kinh tiêu thũng chỉ thống", bt: "Thân thống trục ứ thang gia Đào nhân, Hồng hoa, Ngưu tất", tpbt: ["Đào nhân 12g", "Hồng hoa 8g", "Đương quy 12g", "Xuyên khung 10g", "Ngưu tất 12g", "Địa long 10g"]
  },
  "TB_167": {
    stt: 1420,
    hc: "Biến chứng tai biến suy hô hấp thể Phế Thận khí kiệt thở nông",
    phanloai: ["Biến chứng Tai biến", "Bình", "Hư suy", "Phế Thận khí kiệt"], tc: ["Thở nông gấp đứt đoạn, cánh mũi phập phồng", "Vã mồ hôi lạnh đầm đìa, môi tím tái", "Mạch vi tế muốn tuyệt"], pdt: "Đại bổ nguyên khí, nạp thận bình suyễn cố thoát", bt: "Sâm phụ thang hợp Hồ đào thang", tpbt: ["Nhân sâm 12g", "Phụ tử chế 10g", "Hồ đào nhục 12g", "Bổ cốt chỉ 12g", "Ngũ vị tử 6g"]
  },
  "TB_168": {
    stt: 1421,
    hc: "Biến chứng tai biến suy tim thể Tâm Thận dương hư tràn dịch",
    phanloai: ["Biến chứng Tai biến", "Hàn", "Hư suy", "Dương hư thủy trệ"], tc: ["Tâm quý ho hen khó thở không nằm ngửa được", "Toàn thân phù nặng, tiểu rất ít", "Tay chân lạnh ngắt", "Mạch trầm tế vi"], pdt: "Ôn thông tâm thận, trợ dương lợi thủy cố thoát", bt: "Chân vũ thang hợp Sâm phụ thang gia Quế chi", tpbt: ["Phụ tử chế 8g", "Nhân sâm 12g", "Bạch truật 12g", "Phục linh 12g", "Quế chi 8g", "Sinh khương 6g"]
  },
  "TB_169": {
    stt: 1422,
    hc: "Biến chứng tai biến co rút gân khớp thể Can huyết hư không nuôi gân cơ",
    phanloai: ["Biến chứng Tai biến", "Bình", "Hư", "Can huyết hư suy"], tc: ["Các khớp chi liệt co quắp cứng đờ khó duỗi", "Cơ bắp teo nhão dần", "Móng khô nhợt, chóng mặt", "Mạch tế nhược"], pdt: "Bổ huyết dưỡng can, thư gân thông lạc", bt: "Tứ vật thang gia Mộc qua, Bạch thược, Hoàng kỳ", tpbt: ["Thục địa 16g", "Đương quy 12g", "Bạch thược 12g", "Xuyên khung 10g", "Mộc qua 10g", "Hoàng kỳ 16g"]
  },
  "TB_170": {
    stt: 1423,
    hc: "Biến chứng tai biến cứng khớp gối thể Đàm ứ ngưng trệ bao khớp",
    phanloai: ["Biến chứng Tai biến", "Bình", "Thực", "Đàm ứ kết khớp"], tc: ["Khớp gối bên liệt đau dằn xóc cứng đờ không co duỗi", "Bao khớp dày lên, ấn vào đau", "Lưỡi tím xám", "Mạch sáp hoạt"], pdt: "Hóa đàm tán kết, hoạt huyết thông lạc khớp gối", bt: "Đào hồng tứ vật thang gia Bạch giới tử, Thổ phục linh", tpbt: ["Đào nhân 12g", "Hồng hoa 8g", "Đương quy 12g", "Xuyên khung 10g", "Bạch giới tử 10g", "Thổ phục linh 12g"]
  },
  "TB_171": {
    stt: 1424,
    hc: "Biến chứng tai biến loét miệng thể Vị hỏa tích nhiệt do nằm lâu",
    phanloai: ["Biến chứng Tai biến", "Nhiệt", "Thực", "Vị hỏa"], tc: ["Niêm mạc miệng lưỡi nổi nhiều vết loét đỏ rát", "Hơi thở hôi thối, khát nước", "Đại tiện táo kết", "Mạch hoạt sác"], pdt: "Thanh vị tả hỏa, giải độc tiêu sang", bt: "Thanh vị tán gia Bồ công anh, Hoàng liên", tpbt: ["Hoàng liên 8g", "Thăng ma 6g", "Sinh địa 16g", "Mẫu đơn bì 8g", "Bồ công anh 15g"]
  },
  "TB_172": {
    stt: 1425,
    hc: "Biến chứng tai biến nấm lưỡi thể Thấp nhiệt uẩn uất khoang miệng",
    phanloai: ["Biến chứng Tai biến", "Nhiệt", "Thực", "Thấp nhiệt"], tc: ["Lưỡi đóng lớp màng trắng dày như cặn sữa", "Bốc mùi hôi dính rát, ăn uống khó", "Rêu dầy dính vàng", "Mạch nhu sác"], pdt: "Thanh nhiệt táo thấp, tư miệng chỉ sang", bt: "Tam nhân thang gia Hoàng liên, Khổ sâm", tpbt: ["Hạnh nhân 10g", "Ý dĩ 15g", "Bán hạ chế 10g", "Hoàng liên 8g", "Khổ sâm 10g", "Cam thảo 6g"]
  },
  "dom_han_thap_tro_trung": {
    stt: 1426,
    hc: "Đởm hàn thấp trở trệ",
    phanloai: ["Phủ Đởm", "Hàn", "Thực", "Hàn thấp"],
    tc: ["Sườn đau âm ỉ người nặng nề", "Sợ lạnh", "Mạch trầm hoãn"],
    pdt: "Ôn trung hóa thấp",
    bt: "Hoắc hương chính khí tán",
    tpbt: ["Hoắc hương 10g", "Bạch truật 12g", "Hậu phác 10g", "Trần bì 6g", "Phục linh 12g"]
  },
  "dom_tan_dich_hao_ton": {
    stt: 1427,
    hc: "Đởm tân dịch hao tổn",
    phanloai: ["Phủ Đởm", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Miệng khô đắng khát nước", "Lưỡi đỏ", "Mạch tế sác"],
    pdt: "Tư âm sinh tân",
    bt: "Tăng dịch thang",
    tpbt: ["Sinh địa 16g", "Mạch môn 12g", "Huyền sâm 12g"]
  },
  "dom_khi_nghich_thuong": {
    stt: 1428,
    hc: "Đởm khí thượng nghịch",
    phanloai: ["Phủ Đởm", "Bình", "Thực", "Khí nghịch"],
    tc: ["Sườn trướng đau nấc cụt buồn nôn", "Mạch huyền"],
    pdt: "Hành khí giáng nghịch",
    bt: "Toàn phúc đại giả thạch thang",
    tpbt: ["Toàn phúc hoa 10g", "Đại giả thạch 15g", "Bán hạ chế 10g", "Trần bì 6g", "Hương phụ 10g"]
  },
  "can_dam_hoa_vuong": {
    stt: 1429,
    hc: "Can Đởm hỏa vượng",
    phanloai: ["Phủ Đởm", "Nhiệt", "Thực", "Hỏa nhiệt"],
    tc: ["Đau đầu chóng mặt mắt đỏ miệng đắng", "Dễ cáu gắt", "Mạch huyền sác"],
    pdt: "Thanh can tả đởm hỏa",
    bt: "Long đởm tả can thang",
    tpbt: ["Long đởm thảo 12g", "Hoàng cầm 10g", "Chi tử 10g", "Sài hồ 8g", "Trạch tả 10g"]
  },
  "dam_nhiet_nhieu_than": {
    stt: 1430,
    hc: "Đởm uất đàm nhiễu thần",
    phanloai: ["Phủ Đởm", "Nhiệt", "Thực", "Đàm nhiệt"],
    tc: ["Hồi hộp dễ sợ hãi mất ngủ nhiều mộng", "Miệng đắng", "Mạch hoạt sác"],
    pdt: "Thanh đởm hòa vị, hóa đàm định chí",
    bt: "Ôn đởm thang",
    tpbt: ["Bán hạ chế 10g", "Trần bì 6g", "Phục linh 12g", "Chỉ thực 8g", "Trúc nhự 10g", "Sinh khương 6g"]
  }
  };
console.log("Tổng số hội chứng trước khi lọc:", Object.keys(window.database).length);
// Chuyển window.database thành mảng các object kèm theo key để dễ xử lý
function locTrungDatabase(db) {
  const seenKeys = new Set();
  const seenHCNames = new Set();
  const cleanedDb = {};

  for (const [key, value] of Object.entries(db)) {
    // Kiểm tra trùng key (mã hội chứng) và trùng tên hội chứng (hc)
    if (!seenKeys.has(key) && !seenHCNames.has(value.hc)) {
      seenKeys.add(key);
      seenHCNames.add(value.hc);
      cleanedDb[key] = value;
    }
  }
  return cleanedDb;
}

// Sử dụng:
window.database = locTrungDatabase(window.database);
console.log("Tổng số hội chứng sau khi lọc:", Object.keys(window.database).length);
