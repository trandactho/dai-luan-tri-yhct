window.database = window.database || {};

Object.assign(window.database, {
  // --- TẠNG CAN ---
  "Can_Khi_Uat_Ket": {
    hc: "Can khí uất kết",
    phanloai: ["Tạng Can", "Bình", "Thực", "Khí trệ"],
    tc: ["Ngực sườn đầy trướng", "Tinh thần u uất", "Hay thở dài", "Dễ cáu gắt", "Kinh nguyệt không đều", "Mạch huyền"],
    pdt: "Sơ can giải uất, lý khí chỉ thống",
    bt: "Sài hồ sơ can tán",
    tpbt: ["Sài hồ", "Bạch thược", "Chỉ xác", "Xuyên khung", "Trần bì", "Chích cam thảo"]
  },
  "Can_Huyet_Hu": {
    hc: "Can huyết hư",
    phanloai: ["Tạng Can", "Bình", "Hư", "Huyết hư"],
    tc: ["Sắc mặt úa vàng", "Chóng mặt hoa mắt", "Móng tay chân khô nhợt", "Kinh nguyệt ít sắc nhạt", "Mạch tế nhược"],
    pdt: "Bổ huyết dưỡng can",
    bt: "Tứ vật thang",
    tpbt: ["Thục địa", "Đương quy", "Bạch thược", "Xuyên khung"]
  },
  "Can_Hoa_Thuong_Viem": {
    hc: "Can hỏa thượng viêm",
    phanloai: ["Tạng Can", "Nhiệt", "Thực", "Can hỏa"],
    tc: ["Đau đầu chóng mặt", "Mắt đỏ tai ù", "Miệng đắng họng khô", "Hay giận dữ", "Tiểu đỏ đại tiện táo", "Mạch huyền sác"],
    pdt: "Thanh can tả hỏa",
    bt: "Long đởm tả can thang",
    tpbt: ["Long đởm thảo", "Hoàng cầm", "Chi tử", "Trạch tả", "Đương quy", "Sinh địa", "Sài hồ"]
  },
  "Can_Am_Hu": {
    hc: "Can âm hư",
    phanloai: ["Tạng Can", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Chóng mặt hoa mắt", "Mắt khô nhìn mờ", "Má đỏ triều nhiệt", "Lòng bàn tay chân nóng", "Mạch tế sác"],
    pdt: "Tư dưỡng can âm, minh mục",
    bt: "Kỷ cúc địa hoàng hoàn",
    tpbt: ["Thục địa", "Sơn thù nhục", "Hoài sơn", "Trạch tả", "Đan bì", "Phục linh", "Kỷ tử", "Cúc hoa"]
  },
  "Han_Tre_Can_Mach": {
    hc: "Hàn trệ Can mạch",
    phanloai: ["Tạng Can", "Hàn", "Thực", "Hàn trệ"],
    tc: ["Đau quặn bụng dưới", "Đau lan xuống bộ phận sinh dục", "Gặp lạnh đau tăng ấm giảm", "Mạch huyền trầm khẩn"],
    pdt: "Ôn kinh tán hàn, noãn can chỉ thống",
    bt: "Noãn can tiễn",
    tpbt: ["Tiểu hồi hương", "Nhục quế", "Đương quy", "Câu kỷ tử", "Ô dược", "Trầm hương", "Phục linh"]
  },
  "Can_Hu_Han": {
    hc: "Can hư hàn",
    phanloai: ["Tạng Can", "Hàn", "Hư", "Dương hư"],
    tc: ["Sợ lạnh tay chân lạnh", "Đau đỉnh đầu âm ỉ", "Sắc mặt xanh sạm", "Rêu lưỡi trắng nhuận", "Mạch trầm trì nhược"],
    pdt: "Ôn bổ can dương",
    bt: "Ngô thù du thang",
    tpbt: ["Ngô thù du", "Nhân sâm", "Sinh khương", "Đại táo"]
  },
  "Can_Duong_Thuong_Khang": {
    hc: "Can dương thượng kháng",
    phanloai: ["Tạng Can", "Nhiệt", "Hư thực thác tạp", "Can dương"],
    tc: ["Đau đầu chóng mặt dữ dội", "Mặt đỏ mắt đỏ", "Dễ cáu gắt tai ù như ve kêu", "Mất ngủ nhiều mộng", "Mạch huyền lực"],
    pdt: "Bình can tiềm dương, thanh nhiệt trấn kinh",
    bt: "Thiên ma câu đằng ẩm",
    tpbt: ["Thiên ma", "Câu đằng", "Thạch quyết minh", "Chi tử", "Hoàng cầm", "Ngưu tất", "Đỗ trọng"]
  },
  "Can_Phong_Noi_Dong": {
    hc: "Can phong nội động",
    phanloai: ["Tạng Can", "Nhiệt", "Hư thực", "Nội phong"],
    tc: ["Chân tay run rẩy co quắp", "Tê dại đầu ngón tay chân", "Chóng mặt hoa mắt", "Sắc mặt nhợt nhạt", "Mạch tế huyền"],
    pdt: "Dưỡng huyết nhuận can, trấn phong chỉ kinh",
    bt: "Chấn can tức phong thang",
    tpbt: ["Ngưu tất", "Đại giả thạch", "Long cốt", "Mẫu lệ", "Quy bản", "Bạch thược", "Huyền sâm"]
  },

  // --- TẠNG TÂM ---
  "Tam_Khi_Hu": {
    hc: "Tâm khí hư",
    phanloai: ["Tạng Tâm", "Bình", "Hư", "Khí hư"],
    tc: ["Hồi hộp trống ngực", "Thở ngắn mệt mỏi", "Vận động triệu chứng tăng", "Sắc mặt nhợt nhạt", "Mạch tế nhược"],
    pdt: "Ích khí bổ tâm",
    bt: "Bảo nguyên thang",
    tpbt: ["Đảng sâm", "Hoàng kỳ", "Phục linh", "Cam thảo", "Ngũ vị tử"]
  },
  "Tam_Duong_Hu": {
    hc: "Tâm dương hư",
    phanloai: ["Tạng Tâm", "Hàn", "Hư", "Dương hư"],
    tc: ["Hồi hộp trống ngực", "Đau tức vùng ngực", "Sợ lạnh tay chân lạnh", "Lưỡi bệu nhợt rêu trắng", "Mạch trầm tế vi"],
    pdt: "Ôn bổ tâm dương, thông mạch",
    bt: "Quế chi cam thảo thang",
    tpbt: ["Quế chi", "Chích cam thảo", "Đảng sâm", "Phụ tử", "Hồng hoa"]
  },
  "Tam_Am_Hu": {
    hc: "Tâm âm hư",
    phanloai: ["Tạng Tâm", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Hồi hộp hay hoảng hốt", "Mất ngủ nhiều mộng", "Lòng bàn tay chân nóng đạo hãn", "Gò má đỏ miệng khô", "Mạch tế sác"],
    pdt: "Tư âm dưỡng tâm, an thần",
    bt: "Thiên vương bổ tâm đan",
    tpbt: ["Sinh địa", "Đảng sâm", "Đan sâm", "Bách hợp", "Toan táo nhân", "Viễn chí", "Phục linh"]
  },
  "Tam_Huyet_Hu": {
    hc: "Tâm huyết hư",
    phanloai: ["Tạng Tâm", "Bình", "Hư", "Huyết hư"],
    tc: ["Hồi hộp chóng mặt", "Mất ngủ hay quên", "Sắc mặt nhợt nhạt môi nhạt", "Mạch tế nhược"],
    pdt: "Dưỡng huyết an thần",
    bt: "Tứ vật thang hợp A giao kê tử hoàng thang",
    tpbt: ["Thục địa", "Đương quy", "Bạch thược", "Xuyên khung", "A giao", "Hoàng liên", "Bạch phục thần"]
  },
  "Tam_Huyet_U_Tre": {
    hc: "Tâm huyết ứ trệ",
    phanloai: ["Tạng Tâm", "Bình", "Thực", "Huyết ứ"],
    tc: ["Đau thắt ngực lan ra sau lưng hoặc vai trái", "Môi lưỡi tím tái hoặc điểm ứ huyết", "Mạch kết đại hoặc sáp"],
    pdt: "Hoạt huyết hóa ứ, thông mạch chỉ thống",
    bt: "Huyết phủ trục ứ thang",
    tpbt: ["Đương quy", "Sinh địa", "Đào nhân", "Hồng hoa", "Chỉ xác", "Xích thược", "Sài hồ", "Cát cánh"]
  },
  "Tam_Hoa_Thuong_Viem": {
    hc: "Tâm hỏa thượng viêm",
    phanloai: ["Tạng Tâm", "Nhiệt", "Thực", "Hỏa nhiệt"],
    tc: ["Loét miệng lưỡi đỏ đau", "Hồi hộp bứt rứt khó ngủ", "Mặt đỏ tiểu tiện đỏ rát", "Mạch sác lực"],
    pdt: "Thanh tâm tả hỏa",
    bt: "Đạo xích tán",
    tpbt: ["Sinh địa", "Mộc thông", "Cam thảo khiếu", "Trúc diệp"]
  },

  // --- TẠNG TỲ ---
  "Ty_Khi_Hu": {
    hc: "Tỳ khí hư",
    phanloai: ["Tạng Tỳ", "Bình", "Hư", "Khí hư"],
    tc: ["Ăn kém đầy bụng sau ăn", "Mệt mỏi chân tay rã rời", "Sắc mặt vàng úa gầy sút", "Đại tiện lỏng loãng", "Mạch tế nhược"],
    pdt: "Kiện tỳ ích khí",
    bt: "Tứ quân tử thang",
    tpbt: ["Đảng sâm", "Bạch truật", "Phục linh", "Cam thảo"]
  },
  "Ty_Duong_Hu": {
    hc: "Tạng Tỳ dương hư",
    phanloai: ["Tạng Tỳ", "Hàn", "Hư", "Dương hư"],
    tc: ["Bụng lạnh đau thích chườm ấm", "Sợ lạnh tay chân lạnh", "Đại tiện lỏng loãng ăn sống đồ lạnh trướng bụng", "Lưỡi bệu nhợt", "Mạch trầm trì tế"],
    pdt: "Ôn trung kiện tỳ, tán hàn chỉ thống",
    bt: "Lý trung hoàn",
    tpbt: ["Đảng sâm", "Can khương", "Bạch truật", "Cam thảo"]
  },
  "Ty_Khong_Thong_Nhiep_Huyet": {
    hc: "Tỳ không thống huyết",
    phanloai: ["Tạng Tỳ", "Bình", "Hư", "Huyết hư"],
    tc: ["Xuất huyết mạn tính rong kinh đại tiện ra máu", "Sắc mặt nhợt nhạt", "Mệt mỏi ăn kém", "Chất lưỡi nhợt", "Mạch tế nhược"],
    pdt: "Kiện tỳ ích khí, nhiếp huyết",
    bt: "Quy tỳ thang",
    tpbt: ["Đảng sâm", "Hoàng kỳ", "Bạch truật", "Phục thần", "Đương quy", "Long nhãn", "Thán khương"]
  },
  "Han_Thap_Khon_Ty": {
    hc: "Hàn thấp khốn Tỳ",
    phanloai: ["Tạng Tỳ", "Hàn", "Thực", "Thấp trệ"],
    tc: ["Bụng trướng ăn kém buồn nôn", "Đầu nặng như đội khăn", "Người nặng nề chân tay mỏi", "Rêu lưỡi trắng nhớt", "Mạch nhu hoãn"],
    pdt: "Vận tỳ hóa thấp, ôn trung hóa trọc",
    bt: "Bất hoán kim chính khí tán",
    tpbt: ["Thương truật", "Hậu phác", "Trần bì", "Bán hạ", "Phục linh", "Sinh khương"]
  },

  // --- TẠNG PHẾ ---
  "Phe_Khi_Hu": {
    hc: "Phế khí hư",
    phanloai: ["Tạng Phế", "Bình", "Hư", "Khí hư"],
    tc: ["Ho khạc đờm loãng trong tiếng ho nhỏ", "Thở ngắn tiếng nói nhỏ", "Sợ gió dễ cảm mạo", "Sắc mặt trắng nhợt", "Mạch hư nhược"],
    pdt: "Bổ ích phế khí",
    bt: "Bổ phế thang",
    tpbt: ["Đảng sâm", "Hoàng kỳ", "Bạch truật", "Tang bạch bì", "Ngũ vị tử", "Thục địa"]
  },
  "Phe_Am_Hu": {
    hc: "Phế âm hư",
    phanloai: ["Tạng Phế", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Ho khan ít đờm ho lâu ngày", "Đờm dính máu hoặc khản tiếng", "Gò má đỏ chiều nhiệt đạo hãn", "Lòng bàn tay chân nóng", "Mạch tế sác"],
    pdt: "Tư âm nhuận phế, chỉ khái",
    bt: "Bách hợp cố kim thang",
    tpbt: ["Bách hợp", "Sinh địa", "Thục địa", "Đương quy", "Bạch thược", "Bối mẫu", "Cát cánh", "Mạch môn"]
  },
  "Phong_Han_Pham_Phe": {
    hc: "Phong hàn phạm Phế",
    phanloai: ["Tạng Phế", "Hàn", "Thực", "Ngoại cảm"],
    tc: ["Ho ngứa cổ khạc đờm trắng loãng", "Sợ lạnh sốt không có mồ hôi", "Đau đầu ngạt mũi chảy mũi trong", "Rêu lưỡi trắng mỏng", "Mạch phù khẩn"],
    pdt: "Sơ phong tán hàn, tuyên phế chỉ khái",
    bt: "Tam ảo thang",
    tpbt: ["Ma hoàng", "Hạnh nhân", "Chích cam thảo", "Sinh khương"]
  },
  "Phong_Nhiet_Pham_Phe": {
    hc: "Phong nhiệt phạm Phế",
    phanloai: ["Tạng Phế", "Nhiệt", "Thực", "Ngoại cảm"],
    tc: ["Sốt sợ gió nhẹ đau đầu", "Ho khạc đờm vàng đặc", "Đau rát họng khát nước", "Rêu lưỡi vàng mỏng", "Mạch phù sác"],
    pdt: "Sơ phong thanh nhiệt, tuyên phế hóa đàm",
    bt: "Tang cúc ẩm",
    tpbt: ["Tang diệp", "Cúc hoa", "Hạnh nhân", "Cát cánh", "Liên kiều", "Bạc hà", "Cam thảo"]
  },

  // --- TẠNG THẬN ---
  "Than_Am_Hu": {
    hc: "Thận âm hư",
    phanloai: ["Tạng Thận", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Đau lưng mỏi gối ù tai chóng mặt", "Triều nhiệt đạo hãn lòng bàn tay chân nóng", "Di tinh rụng tóc răng lung lay", "Mạch tế sác"],
    pdt: "Tư bổ thận âm",
    bt: "Lục vị địa hoàng hoàn",
    tpbt: ["Thục địa", "Sơn thù nhục", "Hoài sơn", "Trạch tả", "Đan bì", "Phục linh"]
  },
  "Than_Duong_Hu": {
    hc: "Thận dương hư",
    phanloai: ["Tạng Thận", "Hàn", "Hư", "Dương hư"],
    tc: ["Đau lưng mỏi gối sợ lạnh tay chân lạnh", "Tiểu tiện nhiều lần về đêm tiểu dầm", "Liệt dương di tinh xuất tinh sớm", "Lưỡi bệu nhợt", "Mạch trầm trì tế"],
    pdt: "Ôn bổ thận dương",
    bt: "Hữu quy hoàn",
    tpbt: ["Phụ tử", "Nhục quế", "Thục địa", "Sơn thù", "Kỷ tử", "Đỗ trọng", "Lộc giác giao"]
  },
  "Than_Khi_Bhat_Co": {
    hc: "Thận khí bất cố",
    phanloai: ["Tạng Thận", "Bình", "Hư", "Khí hư"],
    tc: ["Tiểu tiện rỉ rả tiểu đêm nhiều lần", "Di tinh hoạt tinh đới hạ trắng loãng", "Thắt lưng mỏi yếu", "Mạch trầm tế nhược"],
    pdt: "Bổ thận cố sáp",
    bt: "Tang tiêu tiêu tán",
    tpbt: ["Tang tiêu tiêu", "Long cốt", "Quy bản", "Thạch xương bồ", "Viễn chí", "Phục thần"]
  },
  "Than_Nap_Khi_Vo": {
    hc: "Thận nạp khí hư",
    phanloai: ["Tạng Thận", "Bình", "Hư", "Khí hư"],
    tc: ["Ho hen lâu ngày thở gấp khi vận động", "Hơi thở ngắn tiếng nói nhỏ", "Thắt lưng mỏi tự ra mồ hôi", "Mạch trầm tế vô lực"],
    pdt: "Ôn thận nạp khí",
    bt: "Kim quỹ thận khí hoàn gia giảm",
    tpbt: ["Thục địa", "Sơn thù", "Đỗ trọng", "Phụ tử", "Nhục quế", "Hải mã", "Nhân sâm"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- PHỦ ĐỜM, TIỂU TRƯỜNG & BÀNG QUANG ---
  "Dom_Uat_Dam_Nhieu": {
    hc: "Đởm uất đàm nhiễu",
    phanloai: ["Phủ Đờm", "Nhiệt", "Thực", "Đàm nhiệt"],
    tc: ["Hồi hộp dễ sợ hãi", "Mất ngủ nhiều mộng", "Chóng mặt miệng đắng", "Nôn mửa nấc cụt", "Rêu lưỡi vàng nhớt", "Mạch hoạt sác"],
    pdt: "Thanh đởm hòa vị, hóa đàm định chí",
    bt: "Ôn đởm thang",
    tpbt: ["Bán hạ", "Trần bì", "Phục linh", "Chỉ thực", "Trúc nhự", "Sinh khương", "Cam thảo"]
  },
  "Tieu_Truong_Thap_Nhiet": {
    hc: "Tiểu trường thấp nhiệt",
    phanloai: ["Phủ Tiểu trường", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Tiểu tiện buốt rát", "Tiểu đỏ, tiểu sẻn", "Bụng dưới trướng căng", "Rêu lưỡi vàng", "Mạch sác"],
    pdt: "Thanh nhiệt lợi thấp, thông lâm",
    bt: "Đạo xích tán gia giảm",
    tpbt: ["Sinh địa", "Mộc thông", "Cam thảo khiếu", "Trúc diệp", "Xa tiền tử"]
  },
  "Bang_Quang_Thap_Nhiet": {
    hc: "Bàng quang thấp nhiệt",
    phanloai: ["Phủ Bàng quang", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Tiểu tiện khó, tiểu buốt, tiểu rắt", "Tiểu đỏ hoặc đục", "Đau tức vùng hạ vị", "Rêu lưỡi vàng nhớt", "Mạch sác"],
    pdt: "Thanh nhiệt lợi thấp, hóa trọc thông lâm",
    bt: "Bát chính tán",
    tpbt: ["Xa tiền tử", "Cù mạch", "Biển súc", "Hoạt thạch", "Cam thảo", "Đại hoàng", "Chi tử", "Mộc thông"]
  },
  "Bang_Quang_Hu_Han": {
    hc: "Bàng quang hư hàn",
    phanloai: ["Phủ Bàng quang", "Hàn", "Hư", "Dương hư"],
    tc: ["Tiểu tiện nhiều lần, tiểu dầm", "Tiểu rỉ rả không chủ động", "Sợ lạnh tay chân lạnh", "Mạch trầm trì"],
    pdt: "Ôn thận cố sáp, súc niệu",
    bt: "Tang tiêu tiêu tán hợp Súc tuyền hoàn",
    tpbt: ["Tang tiêu tiêu", "Ích trí nhân", "Ô dược", "Phục thần", "Long cốt", "Quy bản"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- PHỦ VỊ (BỔ SUNG) ---
  "Vi_Khi_Hu": {
    hc: "Vị khí hư",
    phanloai: ["Phủ Vị", "Bình", "Hư", "Khí hư"],
    tc: ["Thượng vị đau âm ỉ, thích xoa thích ấm", "Ăn kém, đầy bụng sau ăn", "Mệt mỏi, đoản khí", "Mạch hư nhược"],
    pdt: "Ích khí kiện vị",
    bt: "Bổ trung ích khí thang gia giảm",
    tpbt: ["Đảng sâm", "Bạch truật", "Hoàng kỳ", "Trần bì", "Cam thảo", "Đương quy"]
  },
  "Vi_Am_Hu": {
    hc: "Vị âm hư",
    phanloai: ["Phủ Vị", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Thượng vị nóng rát, âm ỉ đau", "Miệng khô họng khát, thích uống nước mát", "Lưỡi đỏ ít rêu hoặc tróc rêu", "Mạch tế sác"],
    pdt: "Tư dưỡng vị âm, sinh tân chỉ khát",
    bt: "Ích vị thang",
    tpbt: ["Ngọc trúc", "Sinh địa", "Sa sâm", "Mạch môn"]
  },
  "Vi_Lac_Huyet_U": {
    hc: "Vị lạc huyết ứ",
    phanloai: ["Phủ Vị", "Bình", "Thực", "Huyết ứ"],
    tc: ["Thượng vị đau nhói cố định, cự án", "Đau về đêm hoặc sau ăn", "Chất lưỡi tím tối hoặc có điểm ứ huyết", "Mạch sáp hoặc huyền"],
    pdt: "Hoạt huyết hóa ứ, lý khí chỉ thống",
    bt: "Thất tiễu tán hợp Diên hồ sách tán",
    tpbt: ["Ngũ linh tử", "Bồ hoàng", "Diên hồ sách", "Đương quy", "Xích thược", "Xuyên khung"]
  },
  "Vi_Thuc_Tru": {
    hc: "Vị thực trệ (Thực tích)",
    phanloai: ["Phủ Vị", "Bình", "Thực", "Trệ tích"],
    tc: ["Bụng trướng đau, cự án", "Ợ hơi chua, buồn nôn hoặc nôn ra thức ăn cũ", "Đại tiện thối khắm", "Rêu lưỡi dày nhớt", "Mạch hoạt"],
    pdt: "Tiêu thực hóa tích, giáng nghịch hóa trọc",
    bt: "Bảo hòa hoàn",
    tpbt: ["Sơn tra", "Thần khúc", "Phục linh", "Bán hạ", "Trần bì", "Lai phục tử", "Liên kiều"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- TAM TIÊU & BÀO CUNG (KINH NGUYỆT & ĐỚI HẠ) ---
  "Tam_Tieu_Thap_Nhiet": {
    hc: "Tam tiêu thấp nhiệt",
    phanloai: ["Phủ Tam tiêu", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Bụng trướng đầy, tiểu tiện khó khăn", "Tiểu buốt rát, nước tiểu đỏ đục", "Sốt nhẹ, người nặng nề", "Rêu lưỡi vàng nhớt", "Mạch nhu sác"],
    pdt: "Thanh nhiệt lợi thấp, hóa trọc",
    bt: "Tam nhân thang gia giảm",
    tpbt: ["Hạnh nhân", "Ý dĩ", "Bạch đậu khấu", "Hậu phác", "Thông thảo", "Trúc diệp", "Hoạt thạch", "Bán hạ"]
  },
  "Huyet_Tre_Kinh_Bi": {
    hc: "Huyết trệ kinh bế",
    phanloai: ["Kinh nguyệt", "Bình", "Thực", "Huyết ứ"],
    tc: ["Kinh nguyệt chậm nhiều tháng hoặc mất kinh", "Bụng dưới đau cự án, đau tăng khi ấn", "Chất lưỡi tím tối, có điểm ứ huyết", "Mạch sáp hoặc trầm khẩn"],
    pdt: "Hoạt huyết hóa ứ, thông kinh",
    bt: "Huyết phủ trục ứ thang",
    tpbt: ["Đương quy", "Xích thược", "Đào nhân", "Hồng hoa", "Xuyên khung", "Ngưu tất", "Chỉ xác", "Sài hồ"]
  },
  "Khi_Huyet_Hu_Kinh_Bi": {
    hc: "Khí huyết hư kinh bế",
    phanloai: ["Kinh nguyệt", "Bình", "Hư", "Khí huyết lưỡng hư"],
    tc: ["Kinh nguyệt thưa rồi mất hẳn", "Sắc mặt nhợt nhạt, hoa mắt chóng mặt", "Người mệt mỏi, thở ngắn tiếng nói nhỏ", "Chất lưỡi nhợt", "Mạch tế nhược"],
    pdt: "Bổ khí dưỡng huyết, điều kinh",
    bt: "Nhân sâm dưỡng vinh thang",
    tpbt: ["Đảng sâm", "Hoàng kỳ", "Bạch truật", "Phục linh", "Thục địa", "Đương quy", "Bạch thược", "Xuyên khung", "Cam thảo"]
  },
  "Han_Thap_Tru_Doi_Ha": {
    hc: "Hàn thấp trú đới hạ",
    phanloai: ["Đới hạ", "Hàn", "Thực", "Hàn thấp"],
    tc: ["Khí hư ra nhiều màu trắng loãng như nước", "Bụng dưới lạnh đau, thích chườm ấm", "Sợ lạnh, tay chân không ấm", "Rêu lưỡi trắng nhuận", "Mạch trì hoãn"],
    pdt: "Ôn dương hóa thấp, chỉ đới",
    bt: "Uyển đới thang",
    tpbt: ["Hoài sơn", "Bạch truật", "Đảng sâm", "Xa tiền tử", "Thương truật", "Sài hồ", "Bạch thược", "Kinh giới thán"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- BỆNH LÝ LÂM SÀNG: ĐẦU THỐNG & HUYỄN VỰNG ---
  "Phong_Han_Dau_Thong": {
    hc: "Phong hàn đầu thống",
    phanloai: ["Đầu thống", "Hàn", "Thực", "Ngoại cảm"],
    tc: ["Đau đầu căng cứng, gặp lạnh đau tăng", "Sợ lạnh, không có mồ hôi", "Đau lan gáy cổ", "Rêu lưỡi trắng mỏng", "Mạch phù khẩn"],
    pdt: "Sơ phong tán hàn, chỉ thống",
    bt: "Xuyên khung trà điều tán",
    tpbt: ["Xuyên khung", "Bạc hà", "Kinh giới", "Phòng phong", "Bạch chỉ", "Khương hoạt", "Cam thảo", "Tế tân"]
  },
  "Phong_Nhiet_Dau_Thong": {
    hc: "Phong nhiệt đầu thống",
    phanloai: ["Đầu thống", "Nhiệt", "Thực", "Ngoại cảm"],
    tc: ["Đau đầu căng tức như muốn vỡ", "Mặt đỏ, mắt đỏ, sợ gió", "Miệng khát, tiểu đỏ", "Rêu lưỡi vàng mỏng", "Mạch phù sác"],
    pdt: "Sơ phong thanh nhiệt, lợi khiếu",
    bt: "Cúc hoa trà điều tán",
    tpbt: ["Cúc hoa", "Bạc hà", "Kinh giới", "Phòng phong", "Xuyên khung", "Cương tàm", "Thiền thoái", "Cam thảo"]
  },
  "Phong_Thap_Dau_Thong": {
    hc: "Phong thấp đầu thống",
    phanloai: ["Đầu thống", "Bình", "Thực", "Phong thấp"],
    tc: ["Đau đầu như có khăn quấn chặt", "Đầu nặng nề, cơ thể mệt mỏi", "Ăn kém, ngực trướng", "Rêu lưỡi trắng nhớt", "Mạch phù nhu"],
    pdt: "Trừ thấp, sơ phong, chỉ thống",
    bt: "Cường hoạt thắng thấp thang",
    tpbt: ["Cường hoạt", "Độc hoạt", "Cảo bản", "Phòng phong", "Mạn kinh tử", "Xuyên khung", "Cam thảo"]
  },
  "Huyen_Vung_Dam_Troc": {
    hc: "Huyễn vựng đàm trọc",
    phanloai: ["Huyễn vựng", "Bình", "Thực", "Đàm trọc"],
    tc: ["Chóng mặt hoa mắt, đầu nặng như đội khăn", "Buồn nôn, nôn ra đàm dãi", "Ngực đầy trướng, ăn kém", "Rêu lưỡi trắng nhớt", "Mạch huyền hoạt"],
    pdt: "Hóa đàm giáng nghịch, kiện tỳ trừ thấp",
    bt: "Bán hạ bạch truật thiên ma thang",
    tpbt: ["Bán hạ", "Bạch truật", "Thiên ma", "Trần bì", "Phục linh", "Cam thảo", "Sinh khương", "Đại táo"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- BỆNH LÝ LÂM SÀNG: THỦY THŨNG & TIÊU KHÁT ---
  "Thuy_Thung_Phong_Thuy": {
    hc: "Thủy thũng phong thủy",
    phanloai: ["Thủy thũng", "Nhiệt", "Thực", "Ngoại cảm"],
    tc: ["Mặt phù đầu tiên sau lan toàn thân", "Sợ gió sốt đau mỏi các khớp", "Tiểu tiện ít nước tiểu đỏ", "Rêu lưỡi trắng mỏng", "Mạch phù khẩn"],
    pdt: "Tuyên phế lợi thấp, phát hãn thũng tiêu",
    bt: "Việt tí thang",
    tpbt: ["Ma hoàng", "Thạch cao", "Sinh khương", "Đại táo", "Cam thảo", "Bạch truật"]
  },
  "Thuy_Thung_Thap_Nhiet": {
    hc: "Thủy thũng thấp nhiệt",
    phanloai: ["Thủy thũng", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Phù toàn thân da căng bóng", "Sốt nhẹ miệng khát đầy bụng", "Tiểu tiện đỏ sẻn đại tiện táo", "Rêu lưỡi vàng nhớt", "Mạch nhu sác"],
    pdt: "Thanh nhiệt lợi thấp, tiêu thũng",
    bt: "Tỳ giải phân thanh ẩm",
    tpbt: ["Tỳ giải", "Thạch xương bồ", "Ô dược", "Ích trí nhân", "Cam thảo", "Xa tiền tử"]
  },
  "Tieu_Khat_Thuong_Tieu": {
    hc: "Tiêu khát thượng tiêu",
    phanloai: ["Tiêu khát", "Nhiệt", "Thực", "Táo nhiệt"],
    tc: ["Miệng khát họng khô thích uống nước mát", "Uống nhiều tiểu nhiều", "Lưỡi đỏ rêu vàng mỏng", "Mạch sác"],
    pdt: "Thanh nhiệt nhuận phế, sinh tân chỉ khát",
    bt: "Tăng dịch thang gia giảm",
    tpbt: ["Thiên hoa phấn", "Mạch môn", "Sinh địa", "Tri mẫu", "Ngũ vị tử", "Cam thảo"]
  },
  "Tieu_Khat_Trung_Tieu": {
    hc: "Tiêu khát trung tiêu",
    phanloai: ["Tiêu khát", "Nhiệt", "Hư thực", "Vị hỏa"],
    tc: ["Mau đói ăn nhiều mà người gầy", "Miệng khát họng khô táo bón", "Lưỡi vàng rêu khô", "Mạch hồng đại sác"],
    pdt: "Thanh vị tả hỏa, dưỡng âm sinh tân",
    bt: "Ngọc nữ tiễn",
    tpbt: ["Thạch cao", "Tri mẫu", "Sinh địa", "Ngưu tất", "Mạch môn"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- BỆNH LÝ LÂM SÀNG: VỊ THỐNG ---
  "Vi_Thong_Han_Ta": {
    hc: "Vị thống hàn tà phạm vị",
    phanloai: ["Vị thống", "Hàn", "Thực", "Ngoại cảm hàn"],
    tc: ["Thượng vị đột ngột đau quặn, gặp lạnh đau tăng, chườm ấm đỡ", "Sợ lạnh, tay chân không ấm", "Miệng không khát, rêu lưỡi trắng", "Mạch trầm khẩn hoặc huyền"],
    pdt: "Ôn vị tán hàn, hành khí chỉ thống",
    bt: "Lương phương ngô thù du thang gia giảm",
    tpbt: ["Ngô thù du", "Can khương", "Sinh khương", "Đảng sâm", "Diên hồ sách", "Xuyên luyện tử"]
  },
  "Vi_Thong_Khi_Tru": {
    hc: "Vị thống can khí phạm vị",
    phanloai: ["Vị thống", "Bình", "Thực", "Khí trệ"],
    tc: ["Thượng vị trướng đau lan sườn ngực", "Ợ hơi, ợ chua, buồn nôn", "Tinh thần u uất, dễ cáu gắt", "Mạch huyền"],
    pdt: "Sơ can lý khí, hòa vị chỉ thống",
    bt: "Sài hồ sơ can tán gia giảm",
    tpbt: ["Sài hồ", "Chỉ xác", "Bạch thược", "Xuyên khung", "Hương phụ", "Uất kim", "Cam thảo"]
  },
  "Vi_Thong_Thap_Nhiet": {
    hc: "Vị thống thấp nhiệt",
    phanloai: ["Vị thống", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Thượng vị đau bỏng rát, cự án", "Miệng đắng, dính nhợt, khát nước không muốn uống", "Tiểu tiện đỏ, đại tiện dính", "Rêu lưỡi vàng nhớt", "Mạch huyền sác"],
    pdt: "Thanh nhiệt hóa thấp, hòa vị chỉ thống",
    bt: "Thanh vị tán hợp Tả tâm thang",
    tpbt: ["Hoàng liên", "Hoàng cầm", "Đại hoàng", "Chi tử", "Sinh địa", "Thạch cao"]
  },
  "Vi_Thong_Huyet_U": {
    hc: "Vị thống ứ huyết trở trệ",
    phanloai: ["Vị thống", "Hư thực", "Thực", "Huyết ứ"],
    tc: ["Thượng vị đau nhói cố định, cự án, đau như kim châm", "Đau lâu ngày không khỏi, nôn ra máu hoặc đi ngoài phân đen", "Chất lưỡi tím tối hoặc có điểm ứ huyết", "Mạch sáp hoặc huyền sáp"],
    pdt: "Hoạt huyết hóa ứ, lý khí chỉ thống",
    bt: "Thất tiễu tán hợp Diên hồ sách tán",
    tpbt: ["Ngũ linh tử", "Bồ hoàng", "Diên hồ sách", "Đương quy", "Xuyên khung", "Xích thược", "Uất kim"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- BỆNH LÝ LÂM SÀNG: CẢM MẠO & YÊU THỐNG ---
  "Cam_Mao_Phong_Han": {
    hc: "Cảm mạo phong hàn",
    phanloai: ["Cảm mạo", "Hàn", "Thực", "Ngoại cảm"],
    tc: ["Sợ lạnh nhiều, sốt ít, không mồ hôi", "Đau đầu, ngạt mũi, chảy mũi trong", "Đau mỏi cơ thể, ngứa họng ho khan", "Rêu lưỡi trắng mỏng", "Mạch phù khẩn"],
    pdt: "Phát hãn giải biểu, tán hàn",
    bt: "Thông sơ tán hợp Thương truật bại độc tán",
    tpbt: ["Ma hoàng", "Quế chi", "Hạnh nhân", "Cam thảo", "Khương hoạt", "Độc hoạt", "Tiền hồ"]
  },
  "Cam_Mao_Phong_Nhiet": {
    hc: "Cảm mạo phong nhiệt",
    phanloai: ["Cảm mạo", "Nhiệt", "Thực", "Ngoại cảm"],
    tc: ["Sốt cao, sợ gió, đau đầu, có mồ hôi ít", "Miệng khát, họng sưng đau", "Ho khạc đờm vàng, mũi khô", "Rêu lưỡi vàng mỏng", "Mạch phù sác"],
    pdt: "Tân lương giải biểu, thanh nhiệt",
    bt: "Ngân kiều tán",
    tpbt: ["Kim ngân hoa", "Liên kiều", "Cát cánh", "Bạc hà", "Ngưu bàng tử", "Trúc diệp", "Cam thảo", "Kinh giới"]
  },
  "Hu_Lao_Khi_Hu": {
    hc: "Hư lao khí hư",
    phanloai: ["Hư lao", "Bình", "Hư", "Khí hư"],
    tc: ["Tinh thần mệt mỏi, đoản khí lười nói", "Sắc mặt nhợt nhạt, tự ra mồ hôi khi vận động", "Ăn kém, chân tay rã rời", "Mạch hư nhược"],
    pdt: "Bổ khí kiện tỳ",
    bt: "Tứ quân tử thang hợp Hoàng kỳ thang",
    tpbt: ["Đảng sâm", "Hoàng kỳ", "Bạch truật", "Phục linh", "Cam thảo"]
  },
  "Yeu_Thong_Than_Hu": {
    hc: "Yêu thống thận hư",
    phanloai: ["Yêu thống", "Bình", "Hư", "Thận hư"],
    tc: ["Thắt lưng đau âm ỉ, mỏi yếu kéo dài", "Gặp mệt đau tăng, nghỉ ngơi đỡ", "Tai ù, hoa mắt, gối mỏi", "Mạch trầm tế nhược"],
    pdt: "Ôn bổ thận khí, tráng gân cốt",
    bt: "Hữu quy hoàn gia giảm",
    tpbt: ["Thục địa", "Sơn thù", "Đỗ trọng", "Ngưu tất", "Thỏ ty tử", "Kỷ tử", "Lộc giác giao"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- BỆNH LÝ LÂM SÀNG: BẤT MỊ (MẤT NGỦ) & TRÚNG PHONG ---
  "Bat_Mi_Tam_Ty_Luong_Hu": {
    hc: "Bất mị tâm tỳ lưỡng hư",
    phanloai: ["Bất mị", "Bình", "Hư", "Khí huyết lưỡng hư"],
    tc: ["Khó ngủ, ngủ không sâu giấc, hay mê sảng", "Hồi hộp, hay quên, chóng mặt", "Sắc mặt nhợt nhạt, ăn kém, mệt mỏi", "Mạch tế nhược"],
    pdt: "Kiện tỳ dưỡng tâm, ích khí bổ huyết",
    bt: "Quy tỳ thang",
    tpbt: ["Đảng sâm", "Bạch truật", "Phục thần", "Hoàng kỳ", "Long nhãn", "Toan táo nhân", "Đương quy", "Viễn chí"]
  },
  "Bat_Mi_Am_Hu_Hoa_Vuong": {
    hc: "Bất mị âm hư hỏa vượng",
    phanloai: ["Bất mị", "Nhiệt", "Hư", "Âm hư hỏa vượng"],
    tc: ["Trằn trọc không ngủ được, tâm phiền bứt rứt", "Đầu choáng, tai ù, lòng bàn tay bàn chân nóng", "Đạo hãn, miệng khô họng khát", "Mạch tế sác"],
    pdt: "Tư âm giáng hỏa, dưỡng tâm an thần",
    bt: "Lục vị địa hoàng hoàn hợp Hoàng liên nhục quế thang",
    tpbt: ["Thục địa", "Sơn thù", "Hoài sơn", "Trạch tả", "Đan bì", "Phục linh", "Hoàng liên", "Nhục quế"]
  },
  "Trung_Phong_Lac_Huyet": {
    hc: "Trúng phong trúng lạc (Trúng phong kinh lạc)",
    phanloai: ["Trúng phong", "Bình", "Thực", "Huyết ứ phong đàm"],
    tc: ["Bán thân bất toại, tay chân tê dại", "Miệng méo mắt lệch, nói năng khó khăn", "Chất lưỡi lệch, rêu lưỡi trắng nhớt", "Mạch huyền hoạt"],
    pdt: "Phù chính khư tà, hoạt huyết thông lạc",
    bt: "Bổ dương hoàn ngũ thang",
    tpbt: ["Hoàng kỳ", "Đương quy vĩ", "Xích thược", "Địa long", "Xuyên khung", "Đào nhân", "Hồng hoa"]
  },
  "Huyet_Chung_Kha_Huyet": {
    hc: "Khái huyết phế nhiệt",
    phanloai: ["Huyết chứng", "Nhiệt", "Thực", "Phế nhiệt"],
    tc: ["Ho khạc đờm lẫn máu tươi, ngực tức sườn đau", "Miệng khô họng ráo, sốt nhẹ về chiều", "Rêu lưỡi vàng, mạch sác"],
    pdt: "Thanh phế lương huyết, chỉ huyết",
    bt: "Tê giác địa hoàng thang hợp Thập hôi tán",
    tpbt: ["Sinh địa", "Xích thược", "Đan bì", "Trắc bách diệp", "Bạch mao căn", "Tiểu kê củ", "Trắc bách thán"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- BỆNH LÝ LÂM SÀNG: LÂM CHỨNG & PHÚC THỐNG ---
  "Thach_Lam": {
    hc: "Thạch lâm (Sỏi tiết niệu)",
    phanloai: ["Lâm chứng", "Nhiệt", "Thực", "Thấp nhiệt thạch lậu"],
    tc: ["Tiểu tiện đang đi bị tắc nghẽn đột ngột", "Buốt rát, đau buốt lan xuống âm hộ hoặc đùi", "Có khi tiểu ra sỏi nhỏ, tiểu ra máu", "Rêu lưỡi vàng nhớt", "Mạch huyền sác"],
    pdt: "Thanh nhiệt lợi thấp, thông lâm bài thạch",
    bt: "Thạch vĩ tán gia giảm",
    tpbt: ["Thạch vĩ", "Xa tiền tử", "Biển súc", "Cù mạch", "Hoạt thạch", "Đông quỳ tử", "Kim tiền thảo"]
  },
  "Phuc_Thong_Han_Trieu": {
    hc: "Phúc thống hàn trệ",
    phanloai: ["Phúc thống", "Hàn", "Thực", "Hàn trệ"],
    tc: ["Bụng quặn đau đột ngột, chườm ấm đỡ đau", "Gặp lạnh đau tăng, không thích uống nước lạnh", "Rêu lưỡi trắng mỏng", "Mạch trầm khẩn"],
    pdt: "Ôn trung tán hàn, hành khí chỉ thống",
    bt: "Đương quy sinh khương dương nhục thang gia giảm",
    tpbt: ["Đương quy", "Sinh khương", "Dương nhục", "Can khương", "Hắc phụ tử", "Quế chi"]
  },
  "Nuc_Huyet_Vi_Nhiệt": {
    hc: "Nục huyết vị nhiệt (Chảy máu cam)",
    phanloai: ["Huyết chứng", "Nhiệt", "Thực", "Vị hỏa uất nhiệt"],
    tc: ["Chảy máu cam nhiều, máu đỏ tươi", "Miệng khô hôi, phiền táo, khát nước", "Tiểu đỏ, đại tiện táo", "Lưỡi đỏ rêu vàng", "Mạch sác lực"],
    pdt: "Thanh vị tả hỏa, lương huyết chỉ huyết",
    bt: "Ngọc nữ tiễn hợp Thập hôi tán",
    tpbt: ["Thạch cao", "Tri mẫu", "Sinh địa", "Ngưu tất", "Mạch môn", "Trắc bách diệp", "Bạch mao căn"]
  },
  "Tien_Huyet_Thap_Nhiet": {
    hc: "Tiện huyết thấp nhiệt",
    phanloai: ["Huyết chứng", "Nhiệt", "Thực", "Thấp nhiệt xuống đại tràng"],
    tc: ["Đại tiện ra máu tươi hoặc máu đỏ sẫm, phân lẫn máu", "Bụng dưới trướng đau, hậu môn nóng rát", "Rêu lưỡi vàng nhớt", "Mạch nhu sác"],
    pdt: "Thanh nhiệt lợi thấp, lương huyết chỉ huyết",
    bt: "Hòe hoa tán",
    tpbt: ["Hòe hoa", "Trắc bách diệp", "Kinh giới tuệ", "Chỉ xác", "Hoàng cầm", "Đương quy"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- BỆNH LÝ LÂM SÀNG: THỦY THŨNG & TÂM QUÝ ---
  "Thuy_Thung_Ty_Duong_Hu": {
    hc: "Thủy thũng tỳ dương hư",
    phanloai: ["Thủy thũng", "Hàn", "Hư", "Dương hư"],
    tc: ["Phù nhiều ở nửa người dưới, bấm lõm khó hồi phục", "Bụng trướng, ăn kém, tay chân lạnh", "Sắc mặt trắng nhợt, mệt mỏi", "Mạch trầm trì tế"],
    pdt: "Ôn dương lợi thủy, kiện tỳ hóa thấp",
    bt: "Thật tỳ thang",
    tpbt: ["Phục linh", "Bạch truật", "Can khương", "Phụ tử", "Mộc hương", "Thảo quả", "Đương quy", "Xích thược"]
  },
  "Thuy_Thung_Than_Duong_Hu": {
    hc: "Thủy thũng thận dương hư",
    phanloai: ["Thủy thũng", "Hàn", "Hư", "Dương hư"],
    tc: ["Phù toàn thân, lưng dưới chân phù nặng nhất", "Sợ lạnh, tay chân lạnh ngắt", "Lưng mỏi gối đau, tiểu tiện ít", "Mạch trầm tế trì"],
    pdt: "Ôn bổ thận dương, hóa khí lợi thủy",
    bt: "Hữu quy hoàn hợp Tế sinh thận khí hoàn",
    tpbt: ["Phụ tử", "Nhục quế", "Thục địa", "Sơn thù", "Phục linh", "Xa tiền tử", "Ngưu tất"]
  },
  "Tam_Quy_Am_Hu": {
    hc: "Tâm quý âm hư hỏa vượng",
    phanloai: ["Tâm quý", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Hồi hộp, trống ngực từng cơn, tâm phiền khó ngủ", "Lòng bàn tay bàn chân nóng, đạo hãn", "Đầu choáng, tai ù, miệng khô", "Mạch tế sác"],
    pdt: "Tư âm dưỡng tâm, trấn kinh an thần",
    bt: "Thiên vương bổ tâm đan",
    tpbt: ["Sinh địa", "Đảng sâm", "Đan sâm", "Bách hợp", "Toan táo nhân", "Viễn chí", "Phục linh", "Huyền sâm"]
  },
  "Lam_Chung_Nhiet_Lam": {
    hc: "Nhiệt lâm",
    phanloai: ["Lâm chứng", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Tiểu tiện buốt rát, tiểu dắt, tiểu sẻn đỏ", "Bụng dưới trướng căng, đau tức", "Sốt nhẹ hoặc không sốt", "Rêu lưỡi vàng nhớt", "Mạch sác"],
    pdt: "Thanh nhiệt lợi thấp, thông lâm",
    bt: "Bát chính tán",
    tpbt: ["Biển súc", "Cù mạch", "Xa tiền tử", "Hoạt thạch", "Mộc thông", "Đại hoàng", "Chi tử", "Cam thảo"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- BỆNH LÝ LÂM SÀNG: HUNG TÝ & KHÁI THẤU ---
  "Hung_Ty_Han_Tam": {
    hc: "Hung tý hàn trệ tâm mạch",
    phanloai: ["Hung tý", "Hàn", "Thực", "Hàn trệ"],
    tc: ["Đau thắt ngực đột ngột, đau lan ra vai trái hoặc sau lưng", "Sợ lạnh, tay chân lạnh, sắc mặt nhợt", "Mạch trầm khẩn hoặc kết đại"],
    pdt: "Ôn dương tán hàn, thông mạch chỉ thống",
    bt: "Quế chi cam thảo thang hợp Đan sâm ẩm",
    tpbt: ["Quế chi", "Chích cam thảo", "Đan sâm", "Hồng hoa", "Xuyên khung", "Phụ tử"]
  },
  "Hung_Ty_Dam_Truc": {
    hc: "Hung tý đàm trọc trở trệ",
    phanloai: ["Hung tý", "Hàn", "Thực", "Đàm trọc"],
    tc: ["Ngực tức, đau thắt ngực, cảm giác nặng nề", "Đầu nặng, buồn nôn, ăn kém, đờm nhiều", "Rêu lưỡi trắng nhớt, mạch huyền hoạt"],
    pdt: "Hóa đàm thông dương, lý khí chỉ thống",
    bt: "Ôn đởm thang hợp Qua lâu hiễm bạch bán hạ thang",
    tpbt: ["Bán hạ", "Trần bì", "Phục linh", "Chỉ thực", "Trúc nhự", "Qua lâu", "Huấn bạch"]
  },
  "Khai_Thau_Dam_Nhiet": {
    hc: "Khái thấu đàm nhiệt phạm phế",
    phanloai: ["Khái thấu", "Nhiệt", "Thực", "Đàm nhiệt"],
    tc: ["Ho nhiều, khạc đờm vàng đặc hoặc xanh, khó khạc", "Ngực tức, họng rát, miệng khát", "Rêu lưỡi vàng nhớt, mạch sác"],
    pdt: "Thanh phế hóa đàm, chỉ khái",
    bt: "Thanh kim hóa đàm thang",
    tpbt: ["Hoàng cầm", "Chi tử", "Tri mẫu", "Bối mẫu", "Qua lâu", "Tang bạch bì", "Phục linh", "Cam thảo"]
  },
  "Khai_Thau_Phong_Han": {
    hc: "Khái thấu phong hàn phạm phế",
    phanloai: ["Khái thấu", "Hàn", "Thực", "Ngoại cảm"],
    tc: ["Ho ngứa cổ, khạc đờm trắng loãng", "Sợ lạnh, ngạt mũi, chảy mũi trong", "Rêu lưỡi trắng mỏng, mạch phù khẩn"],
    pdt: "Sơ phong tán hàn, tuyên phế chỉ khái",
    bt: "Tam ảo thang hợp Chỉ thấu tán",
    tpbt: ["Ma hoàng", "Hạnh nhân", "Cát cánh", "Bạch tiền", "Bách bộ", "Trần bì", "Cam thảo"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- BỆNH LÝ LÂM SÀNG: SUYỄN CHỨNG & CỔ TRƯỚNG ---
  "Suyen_Chung_Phong_Han": {
    hc: "Suyễn chứng phong hàn phạm phế",
    phanloai: ["Suyễn chứng", "Hàn", "Thực", "Ngoại cảm"],
    tc: ["Thở gấp, hen suyễn, tiếng thở thô, ho khạc đờm trắng loãng", "Sợ lạnh, sốt không có mồ hôi, đau đầu", "Rêu lưỡi trắng mỏng", "Mạch phù khẩn"],
    pdt: "Tuyên phế tán hàn, định suyễn chỉ khái",
    bt: "Ma hoàng thang hợp Tam ảo thang",
    tpbt: ["Ma hoàng", "Hạnh nhân", "Quế chi", "Chích cam thảo", "Bán hạ", "Tô tử"]
  },
  "Suyen_Chung_Dam_Nhiet": {
    hc: "Suyễn chứng đàm nhiệt uất phế",
    phanloai: ["Suyễn chứng", "Nhiệt", "Thực", "Đàm nhiệt"],
    tc: ["Thở gấp, ngực tức, khạc đờm vàng đặc khó khạc", "Sốt, miệng khát, mặt đỏ", "Rêu lưỡi vàng nhớt", "Mạch hoạt sác"],
    pdt: "Thanh nhiệt hóa đàm, tuyên phế định suyễn",
    bt: "Tang bạch bì thang",
    tpbt: ["Tang bạch bì", "Hoàng cầm", "Tri mẫu", "Bối mẫu", "Hạnh nhân", "Đình lịch tử", "Cam thảo"]
  },
  "Co_Truong_Khi_Tru": {
    hc: "Cổ trướng khí trệ thấp trở",
    phanloai: ["Cổ trướng", "Bình", "Thực", "Khí trệ thấp trở"],
    tc: ["Bụng trướng to căng tức, gõ đục vùng thấp", "Sườn ngực đầy tức, ăn kém, đại tiện không thoải mái", "Rêu lưỡi trắng nhớt", "Mạch huyền"],
    pdt: "Hành khí lợi thủy, tiêu trướng",
    bt: "Sài hồ sơ can tán hợp Ngũ linh tán",
    tpbt: ["Sài hồ", "Uất kim", "Hương phụ", "Phục linh", "Trư linh", "Trạch tả", "Bạch truật", "Quế chi"]
  },
  "Co_Truong_Dam_U_Trach": {
    hc: "Cổ trướng ứ huyết trở trệ",
    phanloai: ["Cổ trướng", "Bình", "Thực", "Huyết ứ"],
    tc: ["Bụng trướng to, tĩnh mạch thành bụng nổi rõ", "Đau nhói vùng bụng, sắc mặt sạm tối", "Môi lưỡi tím thẫm hoặc có điểm ứ huyết", "Mạch sáp hoặc trầm huyền"],
    pdt: "Hoạt huyết hóa ứ, hành khí lợi thủy",
    bt: "Huyết phủ trục ứ thang hợp Ngũ linh tán",
    tpbt: ["Đào nhân", "Hồng hoa", "Đương quy", "Xích thược", "Xuyên khung", "Tam lăng", "Nga truật", "Phục linh"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- BỆNH LÝ LÂM SÀNG: TIẾT TẢ & TÝ CHỨNG (ĐAU KHỚP) ---
  "Tiet_Ta_Thap_Nhiet": {
    hc: "Tiết tả thấp nhiệt",
    phanloai: ["Tiết tả", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Đại tiện lỏng như nước hoặc nhầy dính, phân khắm", "Bụng quặn đau, mót rặn, hậu môn nóng rát", "Tiểu tiện ít và đỏ", "Rêu lưỡi vàng nhớt", "Mạch nhu sác"],
    pdt: "Thanh nhiệt lợi thấp, hóa trọc chỉ tả",
    bt: "Cát căn hoàng cầm hoàng liên thang",
    tpbt: ["Cát căn", "Hoàng cầm", "Hoàng liên", "Cam thảo"]
  },
  "Tiet_Ta_Ty_Hu": {
    hc: "Tiết tả tỳ hư",
    phanloai: ["Tiết tả", "Bình", "Hư", "Tỳ khí hư"],
    tc: ["Đại tiện lỏng loãng, ăn vào đi ngoài ngay hoặc sáng sớm đi ngoài (ngũ canh tả)", "Bụng trướng nhẹ, ăn kém, mệt mỏi", "Sắc mặt vàng úa, tay chân mỏi", "Mạch tế nhược"],
    pdt: "Kiện tỳ ích khí, ôn uyển chỉ tả",
    bt: "Sâm linh bạch truật tán",
    tpbt: ["Đảng sâm", "Bạch truật", "Phục linh", "Ý dĩ", "Hoài sơn", "Bạch biển đậu", "Liên nhục", "Sa nhân", "Cát cánh", "Cam thảo"]
  },
  "Hanh_Tiy": {
    hc: "Hành tý (Phong tý)",
    phanloai: ["Tý chứng", "Bình", "Thực", "Phong tà"],
    tc: ["Các khớp xương đau di chuyển, đau nhức mỏi", "Khớp vận động khó khăn, có thể kèm sốt sợ gió", "Rêu lưỡi trắng mỏng", "Mạch phù hoặc phù huyền"],
    pdt: "Khu phong, thông lạc, trừ thấp",
    bt: "Phòng phong thang gia giảm",
    tpbt: ["Phòng phong", "Tần giao", "Đương quy", "Xích thược", "Quế chi", "Ma hoàng", "Sinh khương", "Cam thảo"]
  },
  "Thong_Tiy": {
    hc: "Thống tý (Hàn tý)",
    phanloai: ["Tý chứng", "Hàn", "Thực", "Hàn tà"],
    tc: ["Khớp xương đau dữ dội, vị trí cố định, gặp lạnh đau tăng, chườm ấm đỡ", "Khớp không sưng đỏ, co duỗi khó khăn", "Rêu lưỡi trắng, mạch trầm khẩn"],
    pdt: "Ôn kinh tán hàn, trừ thấp chỉ thống",
    bt: "Ô đầu thang gia giảm",
    tpbt: ["Xuyên ô", "Quế chi", "Bạch thược", "Hoàng kỳ", "Cam thảo"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- BỆNH LÝ LÂM SÀNG: NUY CHỨNG & HUYẾT CHỨNG (TIẾP) ---
  "Thap_Nhiet_Nuy": {
    hc: "Thấp nhiệt nuy chứng (Nuy chứng thấp nhiệt)",
    phanloai: ["Nuy chứng", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Chân tay mềm yếu, cơ bắp teo nhão, vận động khó khăn", "Cảm giác nóng rát ở bắp chân, đau nhức khớp", "Tiểu tiện sẻn đỏ", "Rêu lưỡi vàng nhớt", "Mạch nhu sác"],
    pdt: "Thanh nhiệt lợi thấp, thông lạc cường cân",
    bt: "Nhị diệu tán gia giảm",
    tpbt: ["Thương truật", "Hoàng bá", "Ý dĩ", "Ngưu tất", "Tần giao", "Mộc qua"]
  },
  "Can_Than_Am_Hu_Nuy": {
    hc: "Can thận âm hư nuy chứng",
    phanloai: ["Nuy chứng", "Bình", "Hư", "Can thận âm hư"],
    tc: ["Hai chân teo yếu dần, đi lại khó khăn mạn tính", "Đau lưng mỏi gối, chóng mặt tai ù", "Lưỡi đỏ ít rêu", "Mạch tế sác"],
    pdt: "Tư bổ can thận, cường kiện cân cốt",
    bt: "Hổ vị tủy gia giảm",
    tpbt: ["Thục địa", "Sơn thù", "Đỗ trọng", "Ngưu tất", "Quy bản", "Tri mẫu", "Hoàng bá", "Bạch thược"]
  },
  "Nieu_Huyet_Than_Am_Hu": {
    hc: "Niệu huyết thận âm hư",
    phanloai: ["Huyết chứng", "Nhiệt", "Hư", "Âm hư hỏa vượng"],
    tc: ["Tiểu tiện ra máu kéo dài, máu đỏ sẫm số lượng ít", "Đau lưng mỏi gối, lòng bàn tay chân nóng, đạo hãn", "Lưỡi đỏ ít rêu", "Mạch tế sác"],
    pdt: "Tư bổ thận âm, lương huyết chỉ huyết",
    bt: "Tri bách địa hoàng hoàn hợp Tiểu xế hôi tán",
    tpbt: ["Thục địa", "Sơn thù", "Hoài sơn", "Trạch tả", "Đan bì", "Phục linh", "Tri mẫu", "Hoàng bá", "Trắc bách diệp"]
  },
  "Huyet_Lam": {
    hc: "Huyết lâm (Lâm chứng)",
    phanloai: ["Lâm chứng", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Tiểu tiện buốt rát, tiểu ra máu hoặc tiểu lẫn máu tươi", "Bụng dưới trướng căng, đau tức", "Rêu lưỡi vàng nhớt", "Mạch sác"],
    pdt: "Thanh nhiệt lương huyết, thông lâm chỉ huyết",
    bt: "Tiểu xế ẩm gia giảm",
    tpbt: ["Sinh địa", "Mộc thông", "Cam thảo khiếu", "Trúc diệp", "Xa tiền tử", "Bạch mao căn", "Tiểu kế"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- BỆNH LÝ LÂM SÀNG: ĐẠI BI (TÁO BÓN) & HOẮC LOẠN ---
  "Dai_Tien_Bi_Truong_Vi_Nhiet": {
    hc: "Đại tiện bí trường vị thực nhiệt",
    phanloai: ["Đại bí", "Nhiệt", "Thực", "Thực nhiệt"],
    tc: ["Đại tiện khô cứng, nhiều ngày không đi", "Bụng trướng đau, cự án, đầy bụng", "Miệng hôi, mặt đỏ, người nóng bứt rứt", "Rêu lưỡi vàng dày khô", "Mạch sác hoặc thực"],
    pdt: "Thanh nhiệt tả hỏa, nhuận tràng thông tiện",
    bt: "Ma tử nhân hoàn gia giảm",
    tpbt: ["Hỏa nhân", "Hạnh nhân", "Bạch thược", "Chỉ thực", "Hậu phác", "Đại hoàng"]
  },
  "Dai_Tien_Bi_Khi_Uat": {
    hc: "Đại tiện bí khí trệ",
    phanloai: ["Đại bí", "Bình", "Thực", "Khí trệ"],
    tc: ["Đại tiện khó đi, muốn đi mà không rặn ra được", "Bụng ngực trướng đau, hay ợ hơi, tinh thần u uất", "Rêu lưỡi trắng mỏng", "Mạch huyền"],
    pdt: "Lý khí đạo trệ, thông tiện",
    bt: "Lục ma thang gia giảm",
    tpbt: ["Đại hoàng", "Binh lang", "Trầm hương", "Mộc hương", "Chỉ xác", "Ô dược"]
  },
  "Hoac_Luan_Han_Thap": {
    hc: "Hoắc loạn hàn thấp",
    phanloai: ["Hoắc loạn", "Hàn", "Thực", "Hàn thấp"],
    tc: ["Đột ngột đau bụng, nôn mửa và tiêu chảy cùng lúc", "Phân loãng trắng trong, chất nôn toàn nước", "Sợ lạnh, tay chân lạnh ngắt", "Rêu lưỡi trắng nhớt", "Mạch trầm tế hoặc hoãn"],
    pdt: "Ôn dương hóa thấp, giải biểu hòa vị",
    bt: "Hoắc hương chính khí tán",
    tpbt: ["Hoắc hương", "Tô diệp", "Bạch chỉ", "Bán hạ", "Hậu phác", "Trần bì", "Phục linh", "Cam thảo"]
  },
  "Hoac_Luan_Thap_Nhiet": {
    hc: "Hoắc loạn thấp nhiệt",
    phanloai: ["Hoắc loạn", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Nôn mửa và tiêu chảy dữ dội, phân vàng nhầy thối", "Bụng quặn đau, hậu môn nóng rát", "Miệng khát muốn uống nước, người phiền táo", "Rêu lưỡi vàng nhớt", "Mạch nhu sác"],
    pdt: "Thanh nhiệt lợi thấp, hòa vị chỉ tả",
    bt: "Hoàng liên hương nhu ẩm",
    tpbt: ["Hoàng liên", "Hương nhu", "Hậu phác", "Biển đậu", "Hoàng cầm", "Chi tử"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- BỆNH LÝ LÂM SÀNG: ÂU THỔ & BẤT MỊ (BỔ SUNG) ---
  "Au_Tho_Vi_Han": {
    hc: "Ẩu thổ vị hàn",
    phanloai: ["Ẩu thổ", "Hàn", "Thực", "Vị hàn"],
    tc: ["Nôn ra nước trong hoặc đờm dãi loãng, thức ăn cũ không tiêu", "Thượng vị lạnh đau, thích chườm ấm", "Miệng không khát, rêu lưỡi trắng", "Mạch trầm trì"],
    pdt: "Ôn trung giáng nghịch, chỉ ẩu",
    bt: "Ngô thù du thang gia giảm",
    tpbt: ["Ngô thù du", "Đảng sâm", "Sinh khương", "Đại táo"]
  },
  "Au_Tho_Vi_Nhiệt": {
    hc: "Ẩu thổ vị nhiệt",
    phanloai: ["Ẩu thổ", "Nhiệt", "Thực", "Vị nhiệt"],
    tc: ["Nôn ra thức ăn chua đắng hoặc dịch vàng đục", "Thượng vị nóng rát, miệng đắng họng khô", "Khát muốn uống nước lạnh, đại tiện táo", "Rêu lưỡi vàng", "Mạch sác"],
    pdt: "Thanh nhiệt giáng nghịch, chỉ ẩu",
    bt: "Hoàng liên giải độc thang hợp Trúc nhự đại giả thạch thang",
    tpbt: ["Hoàng liên", "Hoàng cầm", "Trúc nhự", "Đại giả thạch", "Bán hạ", "Phục linh"]
  },
  "Bat_Mi_Vi_Bat_Hoa": {
    hc: "Bất mị vị bất hòa",
    phanloai: ["Bất mị", "Bình", "Thực", "Thực tích vị trệ"],
    tc: ["Trằn trọc khó ngủ, bụng trướng đầy, ợ hơi ợ chua", "Miệng hôi, ăn kém hoặc ăn vào đầy bụng", "Rêu lưỡi dày nhớt", "Mạch hoạt"],
    pdt: "Tiêu thực hóa trệ, hòa vị an thần",
    bt: "Bảo hòa hoàn gia giảm",
    tpbt: ["Sơn tra", "Thần khúc", "Lai phục tử", "Bán hạ", "Trần bì", "Phục linh"]
  },
  "Phe_Ung_Nhiệt_Doc": {
    hc: "Phế ung nhiệt độc uất phế",
    phanloai: ["Phế ung", "Nhiệt", "Thực", "Nhiệt độc uất phế"],
    tc: ["Sốt cao sợ lạnh, ngực tức đau nhói, ho khạc đờm mủ tanh hôi", "Đờm lẫn máu, mặt đỏ môi khô", "Rêu lưỡi vàng dày", "Mạch hồng sác hoặc hoạt sác"],
    pdt: "Thanh nhiệt giải độc, bài nùng trừ đàm",
    bt: "Vối cảnh thang hợp Thiên kim cát cánh thang",
    tpbt: ["Ý dĩ", "Đào nhân", "Đông qua nhân", "Kim ngân hoa", "Liên kiều", "Cát cánh"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- BỆNH LÝ LÂM SÀNG: YÊU THỐNG, TIÊU KHÁT & KHÁI THẤU (TIẾP) ---
  "Yeu_Thong_Thap_Nhiet": {
    hc: "Yêu thống thấp nhiệt",
    phanloai: ["Yêu thống", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Thắt lưng đau nặng nề, cảm giác nóng rát, gặp trời ẩm mưa đau tăng", "Tiểu tiện sẻn đỏ, rêu lưỡi vàng nhớt", "Mạch nhu sác"],
    pdt: "Thanh nhiệt lợi thấp, thông lạc chỉ thống",
    bt: "Tịch sử thang gia giảm",
    tpbt: ["Thương truật", "Hoàng bá", "Ý dĩ", "Ngưu tất", "Uy linh tiên", "Đông qua nhân"]
  },
  "Tieu_Khat_Ha_Tieu": {
    hc: "Tiêu khát hạ tiêu",
    phanloai: ["Tiêu khát", "Nhiệt", "Hư", "Thận âm hư"],
    tc: ["Tiểu tiện nhiều lần, nước tiểu đục như váng mỡ hoặc ngọt như đường", "Đau lưng mỏi gối, tai ù, lòng bàn tay chân nóng", "Lưỡi đỏ rêu ít", "Mạch tế sác"],
    pdt: "Tư âm bổ thận, cố tinh chỉ khát",
    bt: "Lục vị địa hoàng hoàn gia giảm",
    tpbt: ["Thục địa", "Sơn thù", "Hoài sơn", "Trạch tả", "Đan bì", "Phục linh", "Tri mẫu", "Hoàng bá"]
  },
  "Lich_Tiet_Phong_Thap_Nhiet": {
    hc: "Lịch tiết (Phong thấp nhiệt tý)",
    phanloai: ["Tý chứng", "Nhiệt", "Thực", "Phong thấp nhiệt"],
    tc: ["Các khớp xương sưng nóng đỏ đau dữ dội, nhiều khớp cùng đau", "Sốt cao, khát nước, phiền táo", "Rêu lưỡi vàng dày", "Mạch hoạt sác"],
    pdt: "Thanh nhiệt trừ thấp, khu phong thông lạc",
    bt: "Quế chi thược dược tri mẫu thang",
    tpbt: ["Quế chi", "Bạch thược", "Tri mẫu", "Cam thảo", "Ma hoàng", "Phòng phong", "Bạch truật", "Phụ tử"]
  },
  "Khai_Thau_Dam_Truc": {
    hc: "Khái thấu đàm trọc trở phế",
    phanloai: ["Khái thấu", "Bình", "Thực", "Đàm trọc"],
    tc: ["Ho khạc đờm nhiều, trắng dính, dễ khạc", "Ngực tức, đầy bụng, ăn kém", "Rêu lưỡi trắng nhớt", "Mạch huyền hoạt"],
    pdt: "Táo thấp hóa đàm, tuyên phế chỉ khái",
    bt: "Nhị trần thang hợp Tam tử dưỡng thân thang",
    tpbt: ["Bán hạ", "Trần bì", "Phục linh", "Cam thảo", "Tô tử", "Lai phục tử", "Bạch giới tử"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- BỆNH LÝ LÂM SÀNG: HOÀNG ĐẢN & HUYẾT CHỨNG (TỬ BAN) ---
  "Hoang_Dan_Thap_Nhiet": {
    hc: "Hoàng đản thấp nhiệt (Dương hoàng)",
    phanloai: ["Hoàng đản", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Da và mắt vàng sáng như sắc cam quýt", "Sốt nhẹ, người nặng nề, bụng trướng", "Tiểu tiện đỏ sẻn, đại tiện táo hoặc dính", "Rêu lưỡi vàng nhớt", "Mạch nhu sác"],
    pdt: "Thanh nhiệt lợi thấp, thoái hoàng",
    bt: "Nhân trần cao thang",
    tpbt: ["Nhân trần", "Chi tử", "Đại hoàng"]
  },
  "Hoang_Dan_Han_Thap": {
    hc: "Hoàng đản hàn thấp (Âm hoàng)",
    phanloai: ["Hoàng đản", "Hàn", "Thực", "Hàn thấp"],
    tc: ["Da và mắt vàng tối như khói sạm", "Sợ lạnh, tay chân không ấm, người nặng mệt mỏi", "Bụng trướng, ăn kém, đại tiện lỏng", "Rêu lưỡi trắng nhớt", "Mạch trầm trì nhu"],
    pdt: "Ôn trung hóa thấp, thoái hoàng",
    bt: "Nhân trần lý trung thang",
    tpbt: ["Nhân trần", "Can khương", "Đảng sâm", "Bạch truật", "Cam thảo"]
  },
  "Tu_Ban_Huyet_Nhiệt": {
    hc: "Tử ban huyết nhiệt (Ban chẩn xuất huyết)",
    phanloai: ["Huyết chứng", "Nhiệt", "Thực", "Huyết nhiệt"],
    tc: ["Da xuất hiện các điểm hoặc mảng xuất huyết đỏ tía", "Sốt, phiền khát, miệng khô, nhức đầu", "Chất lưỡi đỏ, rêu vàng", "Mạch hồng sác"],
    pdt: "Thanh nhiệt lương huyết, hóa ứ chỉ huyết",
    bt: "Tê giác địa hoàng thang gia giảm",
    tpbt: ["Sinh địa", "Xích thược", "Đan bì", "Thủy ngưu giác", "Tử thảo", "Bắc sa sâm"]
  },
  "Hu_Lao_Can_Than_Am_Hu": {
    hc: "Hư lao can thận âm hư",
    phanloai: ["Hư lao", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Đau lưng mỏi gối, chóng mặt ù tai, hoa mắt", "Triều nhiệt, đạo hãn, lòng bàn tay chân nóng", "Di tinh, rụng tóc, răng lung lay", "Mạch tế sác"],
    pdt: "Tư bổ can thận âm",
    bt: "Tả quy hoàn",
    tpbt: ["Thục địa", "Sơn thù", "Hoài sơn", "Kỷ tử", "Lộc giác giao", "Quy bản giao", "Thỏ ty tử", "Ngưu tất"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- BỆNH LÝ LÂM SÀNG: PHỤ KHOA & TRÚNG PHONG (TIẾP) ---
  "Thong_Kinh_Huyet_U": {
    hc: "Thống kinh huyết ứ",
    phanloai: ["Kinh nguyệt", "Bình", "Thực", "Huyết ứ"],
    tc: ["Đau bụng kinh dữ dội trước hoặc trong kỳ kinh, đau cự án", "Kinh ra cục máu đen, đau giảm sau khi ra máu cục", "Chất lưỡi tím tối hoặc có điểm ứ huyết", "Mạch sáp hoặc huyền"],
    pdt: "Hoạt huyết hóa ứ, hành khí chỉ thống",
    bt: "Thiếu phúc trục ứ thang",
    tpbt: ["Đương quy", "Xuyên khung", "Xích thược", "Đào nhân", "Hồng hoa", "Quan quế", "Can khương", "Bồ hoàng", "Ngũ linh tử", "Diên hồ sách"]
  },
  "Thong_Kinh_Han_Thap": {
    hc: "Thống kinh hàn thấp",
    phanloai: ["Kinh nguyệt", "Hàn", "Thực", "Hàn thấp"],
    tc: ["Đau bụng dưới âm ỉ hoặc quặn trước kỳ kinh, chườm ấm đỡ đau", "Kinh ra ít, sắc tối, vón cục", "Sợ lạnh, tay chân không ấm", "Rêu lưỡi trắng nhuận", "Mạch trầm trì"],
    pdt: "Ôn kinh tán hàn, hóa thấp chỉ thống",
    bt: "Ôn kinh thang gia giảm",
    tpbt: ["Đương quy", "Xuyên khung", "Bạch thược", "Ngô thù du", "Nhục quế", "Đan bì", "Mạch môn", "Hán liên thảo", "Bán hạ", "Chích cam thảo"]
  },
  "Doi_Ha_Thap_Nhiet": {
    hc: "Đới hạ thấp nhiệt",
    phanloai: ["Đới hạ", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Khí hư ra nhiều, màu vàng đặc hoặc xanh như mủ, có mùi hôi", "Bụng dưới trướng đau, tiểu tiện sẻn đỏ, hậu môn nóng rát", "Rêu lưỡi vàng nhớt", "Mạch nhu sác"],
    pdt: "Thanh nhiệt lợi thấp, chỉ đới",
    bt: "Uyển đới thang gia giảm",
    tpbt: ["Sơn dược", "Bạch truật", "Ý dĩ", "Xa tiền tử", "Hoàng bá", "Xa tiền thảo", "Xích thược", "Biển súc"]
  },
  "Trung_Phong_Trung_Tang_Phu_Be": {
    hc: "Trúng phong trúng tạng phủ (Bế chứng)",
    phanloai: ["Trúng phong", "Nhiệt", "Thực", "Đàm hỏa bế chứng"],
    tc: ["Đột ngột hôn mê, ngất xỉu, răng cắn chặt, miệng mím chặt", "Tay nắm chặt, thở khò khè có đờm, mặt đỏ thân nhiệt cao", "Rêu lưỡi vàng dày nhớt", "Mạch huyền sác đại"],
    pdt: "Khu phong hóa đàm, trấn kinh tức phong",
    bt: "An cung ngưu hoàng hoàn hợp Xương bồ uất kim thang",
    tpbt: ["Ngưu hoàng", "Xạ hương", "Trân châu", "Chu sa", "Thạch xương bồ", "Uất kim", "Bán hạ", "Trúc nhự"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- BỆNH LÝ LÂM SÀNG: PHONG CHẨN & HUYỄN VỰNG (BỔ SUNG) ---
  "Phong_Chan_Phong_Han": {
    hc: "Phong chẩn phong hàn (Mề đay do hàn)",
    phanloai: ["Phong chẩn", "Hàn", "Thực", "Ngoại cảm hàn"],
    tc: ["Da nổi sẩn phù màu hồng nhạt hoặc trắng, ngứa nhiều", "Gặp lạnh ngứa tăng, gặp ấm giảm", "Sợ lạnh, rêu lưỡi trắng mỏng", "Mạch phù khẩn"],
    pdt: "Sơ phong tán hàn, chỉ dưỡng",
    bt: "Ma hoàng quế chi các nửa thang gia giảm",
    tpbt: ["Ma hoàng", "Quế chi", "Bạch thược", "Sinh khương", "Đại táo", "Cam thảo", "Phòng phong"]
  },
  "Phong_Chan_Phong_Nhiet": {
    hc: "Phong chẩn phong nhiệt (Mề đay do nhiệt)",
    phanloai: ["Phong chẩn", "Nhiệt", "Thực", "Ngoại cảm nhiệt"],
    tc: ["Da nổi sẩn phù màu đỏ tươi, ngứa rát nhiều", "Gặp nóng ngứa tăng, gặp mát dễ chịu", "Sốt nhẹ, miệng khát, rêu lưỡi vàng mỏng", "Mạch phù sác"],
    pdt: "Sơ phong thanh nhiệt, lương huyết chỉ dưỡng",
    bt: "Tiêu phong tán gia giảm",
    tpbt: ["Khổ sâm", "Thuyền thoái", "Kinh giới", "Phòng phong", "Thương truật", "Ngưu bàng tử", "Sinh địa", "Đương quy"]
  },
  "Huyen_Vung_Can_Duong_Vuong": {
    hc: "Huyễn vựng can dương thượng kháng",
    phanloai: ["Huyễn vựng", "Nhiệt", "Thực", "Can dương vượng"],
    tc: ["Chóng mặt, đầu căng đau như búa bổ", "Mặt đỏ, mắt đỏ, dễ cáu gắt", "U tai như tiếng ve kêu, mất ngủ nhiều mộng", "Lưỡi đỏ rêu vàng", "Mạch huyền sác"],
    pdt: "Bình can tiêm dương, thanh hỏa an thần",
    bt: "Thiên ma câu đằng ẩm gia giảm",
    tpbt: ["Thiên ma", "Câu đằng", "Thạch quyết minh", "Sơn chi", "Hoàng cầm", "Ngưu tất", "Ích mẫu", "Đương quy", "Phục thần"]
  },
  "Huyen_Vung_Khi_Huyet_Hu": {
    hc: "Huyễn vựng khí huyết lưỡng hư",
    phanloai: ["Huyễn vựng", "Bình", "Hư", "Khí huyết lưỡng hư"],
    tc: ["Chóng mặt hoa mắt khi đứng dậy, tim đập hồi hộp", "Sắc mặt nhợt nhạt, mệt mỏi, đoản khí", "Ăn kém, chất lưỡi nhợt", "Mạch tế nhược"],
    pdt: "Ích khí kiện tỳ, dưỡng huyết an thần",
    bt: "Quy tỳ thang hợp Tứ vật thang",
    tpbt: ["Đảng sâm", "Hoàng kỳ", "Bạch truật", "Phục thần", "Đương quy", "Bạch thược", "Xuyên khung", "Thục địa", "Toan táo nhân"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- BỆNH LÝ LÂM SÀNG: HIỆP THỐNG & HƯ LAO (TIẾP) ---
  "Hiep_Thong_Can_Uat": {
    hc: "Hiếp thống can uất khí trệ",
    phanloai: ["Hiếp thống", "Bình", "Thực", "Khí trệ"],
    tc: ["Sườn ngực trướng đau, đau lan ra lưng vai", "Thường đau tăng khi tức giận, ợ hơi, tinh thần u uất", "Rêu lưỡi mỏng, mạch huyền"],
    pdt: "Sơ can lý khí, chỉ thống",
    bt: "Sài hồ sơ can tán",
    tpbt: ["Sài hồ", "Chỉ xác", "Hương phụ", "Xuyên khung", "Bạch thược", "Uất kim", "Cam thảo"]
  },
  "Hiep_Thong_Uyet_U": {
    hc: "Hiếp thống ứ huyết trở trệ",
    phanloai: ["Hiếp thống", "Bình", "Thực", "Huyết ứ"],
    tc: ["Sườn ngực đau nhói cố định, cự án, đau như kim châm", "Đau lâu ngày không khỏi, về đêm đau tăng", "Chất lưỡi tím tối hoặc có điểm ứ huyết", "Mạch sáp hoặc huyền"],
    pdt: "Hoạt huyết hóa ứ, lý khí chỉ thống",
    bt: "Huyết phủ trục ứ thang gia giảm",
    tpbt: ["Đào nhân", "Hồng hoa", "Đương quy", "Xuyên khung", "Xích thược", "Sài hồ", "Chỉ xác", "Ngưu tất"]
  },
  "Hu_Lao_Tam_Duong_Hu": {
    hc: "Hư lao tâm dương hư",
    phanloai: ["Hư lao", "Hàn", "Hư", "Dương hư"],
    tc: ["Tim đập hồi hộp, ngực tức, đoản khí", "Sợ lạnh, tay chân lạnh, tinh thần mệt mỏi", "Chất lưỡi nhợt bệu, mạch trầm tế hoặc kết đại"],
    pdt: "Ôn bổ tâm dương, an thần",
    bt: "Bảo nguyên tiễn hợp Cam thảo mạch môn thang",
    tpbt: ["Hoàng kỳ", "Nhân sâm", "Cam thảo", "Nhục quế", "Mạch môn", "Đại táo"]
  },
  "Tu_Ban_Khi_Bat_Nhiep": {
    hc: "Tử ban khí bất nhiếp huyết",
    phanloai: ["Huyết chứng", "Bình", "Hư", "Khí hư"],
    tc: ["Da xuất hiện các mảng xuất huyết rải rác, sắc nhạt", "Sắc mặt nhợt nhạt, mệt mỏi, đoản khí lười nói", "Ăn kém, chất lưỡi nhợt", "Mạch tế nhược"],
    pdt: "Bổ khí nhiếp huyết",
    bt: "Quy tỳ thang hợp Cửu vị tân lang hoàn",
    tpbt: ["Hoàng kỳ", "Đảng sâm", "Bạch truật", "Phục thần", "Đương quy", "Long nhãn", "Toan táo nhân", "Viễn chí", "Cam thảo"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- BỆNH LÝ LÂM SÀNG: VỊ THỐNG, THỦY THŨNG & PHẾ NUY (BỔ SUNG) ---
  "Vi_Thong_Vi_Am_Hu": {
    hc: "Vị thống vị âm hư",
    phanloai: ["Vị thống", "Nhiệt", "Hư", "Vị âm hư"],
    tc: ["Thượng vị đau âm ỉ, cảm giác nóng rát hoặc đói mà không muốn ăn", "Miệng khô họng ráo, lòng bàn tay bàn chân nóng", "Chất lưỡi đỏ ít rêu", "Mạch tế sác"],
    pdt: "Dưỡng âm sinh tân, hòa vị chỉ thống",
    bt: "Ích vị thang",
    tpbt: ["Sa sâm", "Mạch môn", "Sinh địa", "Ngọc trúc", "Đảng sâm", "Bạch thược", "Cam thảo"]
  },
  "Thuy_Thung_Thuy_Khi_Thuong_Xung": {
    hc: "Thủy thũng thủy khí thượng xung",
    phanloai: ["Thủy thũng", "Hàn", "Thực", "Thủy khí thượng xung"],
    tc: ["Phù toàn thân, ngực tức thở gấp, nằm không được", "Sợ lạnh, tay chân lạnh, ho khạc đờm loãng trắng", "Mạch trầm khẩn hoặc huyền hoạt"],
    pdt: "Ôn dương hóa khí, giáng nghịch định suyễn",
    bt: "Linh quý truật cam thang gia giảm",
    tpbt: ["Phục linh", "Quế chi", "Bạch truật", "Cam thảo", "Hạnh nhân", "Trần bì"]
  },
  "Phe_Nuy_Tao_Nhiệt": {
    hc: "Phế nuy táo nhiệt thương phế",
    phanloai: ["Phế nuy", "Nhiệt", "Hư", "Phế âm hư táo nhiệt"],
    tc: ["Ho khan ít đờm hoặc đờm dính khó khạc, có khi lẫn máu", "Họng khô khát, gầy sút, triều nhiệt đạo hãn", "Chất lưỡi đỏ ít rêu", "Mạch tế sác"],
    pdt: "Tư âm thanh phế, nhuận táo chỉ khái",
    bt: "Thanh táo cứu phế thang",
    tpbt: ["Tang diệp", "Thạch cao", "Hạnh nhân", "Mạch môn", "A giao", "Hồ ma nhân", "Tỳ bà diệp", "Đảng sâm", "Cam thảo"]
  },
  "Tieu_Khat_Huyet_U": {
    hc: "Tiêu khát ứ huyết trở trệ",
    phanloai: ["Tiêu khát", "Bình", "Thực", "Huyết ứ"],
    tc: ["Khát nước, tiểu nhiều, người gầy, tê mỏi chân tay hoặc đau nhói vùng ngực bụng", "Chất lưỡi tím tối hoặc có điểm ứ huyết", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, thông mạch",
    bt: "Huyết phủ trục ứ thang gia giảm",
    tpbt: ["Đào nhân", "Hồng hoa", "Đương quy", "Xuyên khung", "Xích thược", "Sài hồ", "Chỉ xác", "Ngưu tất", "Hoàng kỳ"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- BỆNH LÝ LÂM SÀNG: LỴ TẬT & THỐNG PHONG ---
  "Ly_Tat_Thap_Nhiet": {
    hc: "Lỵ tật thấp nhiệt",
    phanloai: ["Lỵ tật", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Bụng quặn đau, mót rặn nhiều lần", "Đại tiện ra nhầy mũi lẫn máu, phân khắm", "Sốt, miệng khát, tiểu tiện sẻn đỏ", "Rêu lưỡi vàng nhớt", "Mạch hoạt sác"],
    pdt: "Thanh nhiệt hóa thấp, điều khí hành huyết",
    bt: "Thược dược thang gia giảm",
    tpbt: ["Bạch thược", "Đương quy", "Hậu phác", "Binh lang", "Mộc hương", "Cam thảo", "Hoàng liên", "Hoàng cầm", "Đại hoàng"]
  },
  "Ly_Tat_Han_Thap": {
    hc: "Lỵ tật hàn thấp",
    phanloai: ["Lỵ tật", "Hàn", "Thực", "Hàn thấp"],
    tc: ["Bụng đau âm ỉ, mót rặn, đi ngoài phân toàn dịch nhầy trắng", "Sợ lạnh, tay chân không ấm, miệng không khát", "Rêu lưỡi trắng nhớt", "Mạch trầm hoãn"],
    pdt: "Ôn trung hóa thấp, điều khí chỉ lỵ",
    bt: "Bất hoán kim chính khí tán gia giảm",
    tpbt: ["Hoắc hương", "Bạch truật", "Hậu phác", "Trần bì", "Phục linh", "Can khương", "Cam thảo"]
  },
  "Thong_Phong_Thap_Nhiet": {
    hc: "Thống phong thấp nhiệt (Gout cấp)",
    phanloai: ["Thống phong", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Khớp sưng nóng đỏ đau dữ dội, thường gặp ở khớp ngón chân cái", "Sốt, khát nước, phiền táo, vận động khó khăn", "Rêu lưỡi vàng dày", "Mạch sác"],
    pdt: "Thanh nhiệt lợi thấp, thông lạc chỉ thống",
    bt: "Tứ diệu tán gia giảm",
    tpbt: ["Thương truật", "Hoàng bá", "Ý dĩ", "Ngưu tất", "Tri mẫu", "Thạch cao", "Kim ngân hoa"]
  },
  "Di_Tinh_Than_Bat_Co": {
    hc: "Di tinh thận khí bất cố",
    phanloai: ["Di tinh", "Bình", "Hư", "Thận hư không cố"],
    tc: ["Mộng tinh, di tinh thường xuyên, tinh dịch tự chảy", "Đau lưng mỏi gối, tai ù, chóng mặt", "Tinh thần mệt mỏi, tiểu tiện dầm dề", "Mạch trầm tế nhược"],
    pdt: "Ôn bổ thận dương, cố tinh sáp niệu",
    bt: "Kim tỏa cố tinh hoàn gia giảm",
    tpbt: ["Sa uyển tử", "Khiếm thực", "Liên tu", "Long cốt", "Mẫu lệ", "Thục địa", "Sơn thù"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- BỆNH LÝ LÂM SÀNG: LÂM CHỨNG & ĐẦU THỐNG (BỔ SUNG) ---
  "Cao_Lam_Thap_Nhiet": {
    hc: "Cao lâm (Lâm chứng)",
    phanloai: ["Lâm chứng", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Tiểu tiện đục như nước vo gạo hoặc có chất nhờn", "Tiểu buốt rát ít nhiều, bụng dưới trướng", "Rêu lưỡi vàng nhớt", "Mạch nhu sác"],
    pdt: "Thanh nhiệt lợi thấp, hóa trọc",
    bt: "Thanh tâm liên tử ẩm gia giảm",
    tpbt: ["Hoàng liên", "Hoàng cầm", "Mạch môn", "Xa tiền tử", "Thạch xương bồ", "Cam thảo"]
  },
  "Dau_Thong_Phong_Han": {
    hc: "Đầu thống phong hàn",
    phanloai: ["Đầu thống", "Hàn", "Thực", "Ngoại cảm"],
    tc: ["Đầu đau căng hoặc đau như búa bổ, sợ lạnh sợ gió", "Đau lan lên đỉnh đầu hoặc vùng chẩm", "Rêu lưỡi trắng mỏng", "Mạch phù khẩn"],
    pdt: "Khu phong tán hàn, chỉ thống",
    bt: "Xuyên khung trà điều tán gia giảm",
    tpbt: ["Xuyên khung", "Bạch chỉ", "Khương hoạt", "Phòng phong", "Cát cánh", "Cam thảo", "Bạc hà"]
  },
  "Xi_Huyet_Vi_Nhiet": {
    hc: "Xỉ huyết vị nhiệt (Chảy máu chân răng)",
    phanloai: ["Huyết chứng", "Nhiệt", "Thực", "Vị hỏa uất nhiệt"],
    tc: ["Chân răng sưng đau, chảy máu đỏ tươi", "Hơi thở hôi, miệng khô khát, thích uống nước lạnh", "Rêu lưỡi vàng, mạch sác"],
    pdt: "Thanh vị tả hỏa, lương huyết chỉ huyết",
    bt: "Thanh vị tán",
    tpbt: ["Hoàng liên", "Thăng ma", "Sinh địa", "Mẫu đơn bì", "Đại hoàng"]
  },
  "Phuc_Thong_Thap_Nhiet": {
    hc: "Phúc thống thấp nhiệt",
    phanloai: ["Phúc thống", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Bụng đau quặn, cảm giác nóng rát, đại tiện lỏng nhầy dính hoặc táo bón", "Tiểu tiện đỏ sẻn, hậu môn nóng rát", "Rêu lưỡi vàng nhớt", "Mạch nhu sác"],
    pdt: "Thanh nhiệt lợi thấp, lý khí chỉ thống",
    bt: "Đại hoàng thược dược thang gia giảm",
    tpbt: ["Đại hoàng", "Bạch thược", "Hoàng liên", "Hoàng cầm", "Mộc hương", "Cam thảo"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- BỆNH LÝ LÂM SÀNG: TIÊU KHÁT & HUYẾT CHỨNG (BỔ SUNG) ---
  "Tieu_Khat_Vi_Nhiet": {
    hc: "Tiêu khát vị nhiệt (Thượng tiêu)",
    phanloai: ["Tiêu khát", "Nhiệt", "Thực", "Táo nhiệt vị hỏa"],
    tc: ["Uống nhiều, ăn nhiều nhưng chóng đói, người gầy sút", "Miệng khát khô, tiểu tiện nhiều lần số lượng lớn", "Rêu lưỡi vàng, mạch hồng sác"],
    pdt: "Thanh nhiệt sinh tân, dưỡng âm nhuận táo",
    bt: "Tiêu khát phương hợp Ngọc nữ tiễn",
    tpbt: ["Sinh địa", "Tri mẫu", "Thạch cao", "Mạch môn", "Ngưu tất", "Cam thảo"]
  },
  "Tieu_Khat_Khi_Am_Hu": {
    hc: "Tiêu khát khí âm lưỡng hư (Trung tiêu)",
    phanloai: ["Tiêu khát", "Bình", "Hư", "Khí âm lưỡng hư"],
    tc: ["Ăn nhiều chóng đói, mệt mỏi, đoản khí, người gầy yếu", "Miệng khô khát, tiểu tiện nhiều đục", "Chất lưỡi nhợt khô, mạch tế nhược"],
    pdt: "Ích khí dưỡng âm, sinh tân chỉ khát",
    bt: "Ngọc tuyền tán hợp Sinh mạch tán",
    tpbt: ["Thiên hoa phấn", "Cát căn", "Mạch môn", "Ngũ vị tử", "Đảng sâm", "Hoàng kỳ", "Phục linh"]
  },
  "Huyet_Chung_Nuc_Huyet_Phong_Nhiet": {
    hc: "Nục huyết phong nhiệt phạm phế (Chảy máu cam)",
    phanloai: ["Huyết chứng", "Nhiệt", "Thực", "Phong nhiệt"],
    tc: ["Chảy máu cam đột ngột, máu đỏ tươi, kèm đau đầu sốt nhẹ", "Sợ gió, họng sưng đau, rêu lưỡi mỏng vàng", "Mạch phù sác"],
    pdt: "Sơ phong thanh nhiệt, lương huyết chỉ huyết",
    bt: "Tang cúc ẩm gia giảm",
    tpbt: ["Tang diệp", "Cúc hoa", "Bạc hà", "Hạnh nhân", "Cát cánh", "Sinh địa", "Trắc bách diệp"]
  },
  "Phe_Ung_Dam_Nhiet": {
    hc: "Phế ung đàm nhiệt uất kết",
    phanloai: ["Phế ung", "Nhiệt", "Thực", "Đàm nhiệt"],
    tc: ["Sốt cao, sợ lạnh, ngực đau nhói, ho khạc đờm mủ tanh hôi", "Miệng khát, rêu lưỡi vàng dày nhớt", "Mạch hoạt sác"],
    pdt: "Thanh nhiệt giải độc, bài nùng trừ đàm",
    bt: "Thiên kim cát cánh thang hợp Vối cảnh thang",
    tpbt: ["Cát cánh", "Ý dĩ", "Đào nhân", "Đông qua nhân", "Kim ngân hoa", "Liên kiều", "Ngư tinh thảo"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- BỆNH LÝ LÂM SÀNG: PHONG THỦY, ANH LỰU & VỊ THỐNG (BỔ SUNG) ---
  "Thuy_Thung_Phong_Thuy": {
    hc: "Thủy thũng phong thủy",
    phanloai: ["Thủy thũng", "Nhiệt", "Thực", "Phong thủy"],
    tc: ["Mặt và mí mắt phù đầu tiên, sau đó lan toàn thân, bấm lõm nhanh hồi phục", "Sợ gió, sốt, đau đầu, ho, tiểu tiện ít", "Rêu lưỡi trắng mỏng, mạch phù khẩn"],
    pdt: "Sơ phong giải biểu, tuyên phế lợi thủy",
    bt: "Việt cơ tang hám thang gia giảm",
    tpbt: ["Ma hoàng", "Thạch cao", "Sinh khương", "Đại táo", "Tang bạch bì", "Phục linh", "Xa tiền tử"]
  },
  "Anh_Luu_Dam_Khi": {
    hc: "Anh lựu đàm khí uất kết",
    phanloai: ["Anh lựu", "Bình", "Thực", "Đàm khí uất kết"],
    tc: ["Vùng cổ trước có khối u to nhỏ khác nhau, mềm không đau, da cổ bình thường", "Ngực tức, hay thở dài, tinh thần u uất", "Rêu lưỡi trắng mỏng, mạch huyền"],
    pdt: "Lý khí hóa đàm, tiêu anh tán kết",
    bt: "Hải tảo ngọc hồ thang gia giảm",
    tpbt: ["Hải tảo", "Côn bố", "Bán hạ", "Trần bì", "Xuyên khung", "Đương quy", "Liên kiều", "Cam thảo"]
  },
  "Vi_Thong_Han_Ta": {
    hc: "Vị thống hàn tà phạm vị",
    phanloai: ["Vị thống", "Hàn", "Thực", "Hàn tà phạm vị"],
    tc: ["Thượng vị đau đột ngột, đau dữ dội, chườm ấm đỡ, gặp lạnh đau tăng", "Sợ lạnh, tay chân không ấm, miệng không khát", "Rêu lưỡi trắng mỏng, mạch huyền khẩn"],
    pdt: "Ôn trung tán hàn, hành khí chỉ thống",
    bt: "Lương phụ hoàn gia giảm",
    tpbt: ["Cao lương khương", "Hương phụ", "Can khương", "Diên hồ sách", "Chỉ xác"]
  },
  "Tam_Quy_Tam_Khi_Hu": {
    hc: "Tâm quý tâm khí hư",
    phanloai: ["Tâm quý", "Bình", "Hư", "Tâm khí hư"],
    tc: ["Hồi hộp trống ngực, khi mệt mỏi tăng lên", "Đoản khí, mệt mỏi, sắc mặt nhợt nhạt", "Tự ra mồ hôi, chất lưỡi nhợt", "Mạch tế nhược"],
    pdt: "Ích khí dưỡng tâm, an thần",
    bt: "Dưỡng tâm thang gia giảm",
    tpbt: ["Đảng sâm", "Hoàng kỳ", "Phục thần", "Viễn chí", "Toan táo nhân", "Đương quy", "Xuyên khung", "Quế chi"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- BỆNH LÝ LÂM SÀNG: THỔ HUYẾT, HUYỄN VỰNG & ĐẦU THỐNG (BỔ SUNG) ---
  "Tho_Huyet_Vi_Nhiệt": {
    hc: "Thổ huyết vị nhiệt",
    phanloai: ["Huyết chứng", "Nhiệt", "Thực", "Vị nhiệt hừng hực"],
    tc: ["Đột ngột nôn ra máu đỏ tươi hoặc máu cục lẫn thức ăn", "Phiền táo, ngực tức, miệng đắng họng khô", "Đại tiện phân đen, tiểu tiện đỏ", "Lưỡi đỏ rêu vàng, mạch sác"],
    pdt: "Thanh vị lương huyết, chỉ huyết",
    bt: "Tê giác địa hoàng thang hợp Xích dược tứ vật thang",
    tpbt: ["Sinh địa", "Xích thược", "Đan bì", "Trắc bách diệp", "Bạch mao căn", "Hoàng liên"]
  },
  "Huyen_Vung_Dam_Truc": {
    hc: "Huyễn vựng đàm trọc thượng mạo",
    phanloai: ["Huyễn vựng", "Bình", "Thực", "Đàm trọc"],
    tc: ["Chóng mặt, đầu nặng như bị bó, hoa mắt", "Ngực tức, buồn nôn, nôn ra đờm dãi", "Ăn kém, rêu lưỡi trắng nhớt, mạch huyền hoạt"],
    pdt: "Vận tỳ hóa đàm, bình can tức phong",
    bt: "Bán hạ bạch truật thiên ma thang",
    tpbt: ["Bán hạ", "Bạch truật", "Thiên ma", "Trần bì", "Phục linh", "Cam thảo", "Sinh khương", "Đại táo"]
  },
  "Thuy_Thung_Thap_Nhiệt": {
    hc: "Thủy thũng thấp nhiệt uất kết",
    phanloai: ["Thủy thũng", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Phù toàn thân, da căng bóng, tiểu tiện sẻn đỏ ít", "Sốt nhẹ, người nặng nề, đầy bụng", "Rêu lưỡi vàng nhớt, mạch nhu sác"],
    pdt: "Thanh nhiệt lợi thấp, tiêu thũng",
    bt: "Tứ miêu hoàn gia giảm",
    tpbt: ["Thương truật", "Hoàng bá", "Ý dĩ", "Ngưu tất", "Phục linh", "Trư linh", "Xa tiền tử"]
  },
  "Dau_Thong_Huyet_U": {
    hc: "Đầu thống huyết ứ",
    phanloai: ["Đầu thống", "Bình", "Thực", "Huyết ứ"],
    tc: ["Đầu đau như búa bổ hoặc đau nhói cố định một chỗ", "Đau lâu ngày không khỏi, vị trí đau không thay đổi", "Chất lưỡi tím tối hoặc có điểm ứ huyết, mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, thông lạc chỉ thống",
    bt: "Thông khiếu hoạt huyết thang gia giảm",
    tpbt: ["Xuyên khung", "Đào nhân", "Hồng hoa", "Xích thược", "Xương bồ", "Đương quy", "Địa long"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- BỆNH LÝ LÂM SÀNG: BẤT MỊ, HÃN CHỨNG & HƯ LAO (BỔ SUNG) ---
  "Bat_Mi_Tam_Ty_Luong_Hu": {
    hc: "Bất mị tâm tỳ lưỡng hư (Mất ngủ)",
    phanloai: ["Bất mị", "Bình", "Hư", "Tâm tỳ lưỡng hư"],
    tc: ["Khó ngủ, hay mê, hay quên, tim đập hồi hộp", "Sắc mặt nhợt nhạt, mệt mỏi, ăn kém", "Chất lưỡi nhợt, rêu lưỡi mỏng", "Mạch tế nhược"],
    pdt: "Ích khí bổ huyết, kiện tỳ dưỡng tâm",
    bt: "Quy tỳ thang",
    tpbt: ["Đảng sâm", "Bạch truật", "Phục thần", "Đương quy", "Long nhãn", "Toan táo nhân", "Viễn chí", "Hoàng kỳ", "Mộc hương", "Cam thảo"]
  },
  "Han_Chung_Tu_Han": {
    hc: "Hãn chứng tự hãn (Tự ra mồ hôi do khí hư)",
    phanloai: ["Hãn chứng", "Bình", "Hư", "Vệ khí bất cố"],
    tc: ["Ban ngày ra mồ hôi nhiều, vận động càng ra nhiều hơn", "Đoản khí, mệt mỏi, sợ gió, sắc mặt nhợt nhạt", "Chất lưỡi nhợt, rêu lưỡi trắng", "Mạch tế nhược"],
    pdt: "Ích khí cố biểu",
    bt: "Ngọc bình phong tán gia giảm",
    tpbt: ["Hoàng kỳ", "Bạch truật", "Phòng phong", "Đảng sâm", "Phục thần"]
  },
  "Hu_Lao_Than_Duong_Hu": {
    hc: "Hư lao thận dương hư",
    phanloai: ["Hư lao", "Hàn", "Hư", "Dương hư"],
    tc: ["Lưng đau mỏi, tay chân lạnh, sợ lạnh rõ rệt", "Tiểu tiện nhiều lần về đêm, liệt dương, di tinh", "Sắc mặt trắng nhợt, chất lưỡi bệu", "Mạch trầm tế trì"],
    pdt: "Ôn bổ thận dương",
    bt: "Hữu quy hoàn",
    tpbt: ["Thục địa", "Sơn thù", "Hoài sơn", "Kỷ tử", "Đỗ trọng", "Nhục quế", "Phụ tử", "Lộc giác giao"]
  },
  "Phuc_Thong_Thuc_Tich": {
    hc: "Phúc thống thực tích trệ",
    phanloai: ["Phúc thống", "Bình", "Thực", "Thực tích trệ"],
    tc: ["Bụng trướng đau, cự án, đau tăng khi ăn, ợ hơi hoặc nôn ọe", "Đại tiện thối khắm, ợ ra mùi thức ăn chua", "Rêu lưỡi dày nhớt", "Mạch hoạt hoặc thực"],
    pdt: "Tiêu thực đạo trệ, hòa trung chỉ thống",
    bt: "Bảo hòa hoàn gia giảm",
    tpbt: ["Sơn tra", "Thần khúc", "Lai phục tử", "Bán hạ", "Trần bì", "Phục linh", "Liên kiều"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- BỆNH LÝ LÂM SÀNG: TÂM QUÝ, TRÚNG PHONG & YÊU THỐNG (BỔ SUNG) ---
  "Tam_Quy_Dam_Hoa": {
    hc: "Tâm quý đàm hỏa nhiễu tâm",
    phanloai: ["Tâm quý", "Nhiệt", "Thực", "Đàm hỏa"],
    tc: ["Hồi hộp trống ngực dữ dội, tâm phiền bứt rứt, dễ hoảng hốt", "Mất ngủ nhiều mộng, đầu căng choáng, miệng đắng", "Rêu lưỡi vàng nhớt, mạch huyền sác hoặc hoạt sác"],
    pdt: "Thanh nhiệt hóa đàm, trấn tâm an thần",
    bt: "Ôn đởm thang hợp Trân châu mẫu hoàn",
    tpbt: ["Bán hạ", "Trần bì", "Phục linh", "Chỉ thực", "Trúc nhự", "Qua lâu", "Trân châu mẫu", "Viễn chí"]
  },
  "Trung_Phong_Trung_Kinh_Lac": {
    hc: "Trúng phong trung kinh lạc (Liệt nửa người)",
    phanloai: ["Trúng phong", "Bình", "Thực", "Phong đàm ứ trở"],
    tc: ["Đột ngột miệng méo, mắt xệch, nửa người tê mỏi hoặc vận động khó khăn", "Ngôn ngữ khó khăn hoặc không nói được", "Rêu lưỡi trắng nhớt, mạch huyền hoạt"],
    pdt: "Khu phong hóa đàm, hoạt huyết thông lạc",
    bt: "Bổ dương hoàn ngũ thang gia giảm",
    tpbt: ["Hoàng kỳ", "Đương quy vĩ", "Xích thược", "Xuyên khung", "Đào nhân", "Hồng hoa", "Địa long"]
  },
  "Yeu_Thong_Han_Thap": {
    hc: "Yêu thống hàn thấp",
    phanloai: ["Yêu thống", "Hàn", "Thực", "Hàn thấp"],
    tc: ["Thắt lưng đau nặng nề, co cứng, gặp lạnh đau tăng, chườm ấm đỡ", "Vận động cúi ngửa khó khăn, sợ lạnh", "Rêu lưỡi trắng nhớt, mạch trầm khẩn"],
    pdt: "Ôn dương tán hàn, trừ thấp chỉ thống",
    bt: "Độc hoạt tang ký sinh thang gia giảm",
    tpbt: ["Độc hoạt", "Tang ký sinh", "Tần giao", "Phòng phong", "Tế tân", "Đương quy", "Xuyên khung", "Thục địa", "Ngưu tất"]
  },
  "Nuc_Huyet_Vi_Nhiệt": {
    hc: "Nục huyết vị nhiệt (Chảy máu cam do vị nhiệt)",
    phanloai: ["Huyết chứng", "Nhiệt", "Thực", "Vị nhiệt hừng hực"],
    tc: ["Chảy máu cam đột ngột, máu đỏ tươi, số lượng nhiều", "Miệng khô họng khát, hơi thở hôi, bứt rứt phiền táo", "Rêu lưỡi vàng, mạch sác"],
    pdt: "Thanh vị tả hỏa, lương huyết chỉ huyết",
    bt: "Thanh vị tán gia giảm",
    tpbt: ["Hoàng liên", "Sinh địa", "Mẫu đơn bì", "Thăng ma", "Đại hoàng", "Trắc bách diệp", "Bạch mao căn"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- BỆNH LÝ LÂM SÀNG: THỦY THŨNG, HÃN CHỨNG & TÂM QUÝ (BỔ SUNG) ---
  "Thuy_Thung_Ty_Than_Duong_Hu": {
    hc: "Thủy thũng tỳ thận dương hư",
    phanloai: ["Thủy thũng", "Hàn", "Hư", "Tỳ thận dương hư"],
    tc: ["Phù toàn thân, hai chân bấm lõm sâu lâu hồi phục, bụng trướng to", "Sợ lạnh, tay chân lạnh, lưng đau mỏi gối", "Sắc mặt trắng nhợt, chất lưỡi bệu nhợt", "Mạch trầm tế trì"],
    pdt: "Ôn dương lợi thủy, kiện tỳ bổ thận",
    bt: "Thực tỳ ẩm gia giảm",
    tpbt: ["Phục linh", "Bạch truật", "Hậu phác", "Mộc hương", "Can khương", "Phụ tử", "Trạch tả", "Xa tiền tử"]
  },
  "Han_Chung_Dao_Han_Am_Hu": {
    hc: "Hãn chứng đạo hãn âm hư (Đêm ra mồ hôi)",
    phanloai: ["Hãn chứng", "Nhiệt", "Hư", "Âm hư hỏa vượng"],
    tc: ["Ngủ dậy thấy mồ hôi ra đầm đìa (đạo hãn)", "Triều nhiệt, lòng bàn tay bàn chân nóng, họng khô miệng khát", "Lưỡi đỏ ít rêu, mạch tế sác"],
    pdt: "Tư âm giáng hỏa, liễm hãn",
    bt: "Mẫu lệ tán hợp Lục vị địa hoàng hoàn",
    tpbt: ["Mẫu lệ", "Hoàng kỳ", "Ma hoàng căn", "Sinh địa", "Sơn thù", "Hoài sơn", "Trạch tả", "Đan bì"]
  },
  "Vi_Thong_Can_Vi_Uat_Tro": {
    hc: "Vị thống can vị bất hòa (Can khí phạm vị)",
    phanloai: ["Vị thống", "Bình", "Thực", "Can khí phạm vị"],
    tc: ["Thượng vị trướng đau lan sang hai bên sườn", "Ợ hơi, nấc cụt, ăn kém, tinh thần u uất hay cáu gắt", "Rêu lưỡi mỏng trắng, mạch huyền"],
    pdt: "Sơ can lý khí, hòa vị chỉ thống",
    bt: "Sài hồ sơ can tán hợp Hương tô tán",
    tpbt: ["Sài hồ", "Uất kim", "Hương phụ", "Chỉ xác", "Xuyên khung", "Bạch thược", "Cam thảo"]
  },
  "Tam_Quy_Am_Hu_Huo_Vuong": {
    hc: "Tâm quý âm hư hỏa vượng",
    phanloai: ["Tâm quý", "Nhiệt", "Hư", "Âm hư hỏa vượng"],
    tc: ["Hồi hộp trống ngực, bứt rứt khó ngủ, lòng bàn tay chân nóng", "Chóng mặt ù tai, lưng mỏi gối, đạo hãn", "Lưỡi đỏ ít rêu, mạch tế sác"],
    pdt: "Tư âm dưỡng tâm, an thần",
    bt: "Thiên vương bổ tâm đan gia giảm",
    tpbt: ["Sinh địa", "Mạch môn", "Thiên môn", "Bá tử nhân", "Toan táo nhân", "Viễn chí", "Đương quy", "Phục thần", "Chu sa"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- BỆNH LÝ LÂM SÀNG: HẦU TÝ, LÂM CHỨNG & HUYẾT CHỨNG (TIẾP) ---
  "Hau_Ty_Phong_Nhiệt": {
    hc: "Hầu tý phong nhiệt (Viêm họng cấp)",
    phanloai: ["Hầu tý", "Nhiệt", "Thực", "Phong nhiệt"],
    tc: ["Họng sưng đau đột ngột, nuốt đau, khó nuốt", "Sợ gió, sốt, đau đầu, ho khạc đờm ít", "A-mi-đan sưng đỏ, có thể có điểm mủ trắng", "Rêu lưỡi trắng mỏng hoặc vàng mỏng, mạch phù sác"],
    pdt: "Sơ phong thanh nhiệt, lợi họng giải độc",
    bt: "Ngân kiều tán gia giảm",
    tpbt: ["Kim ngân hoa", "Liên kiều", "Bạc hà", "Cát cánh", "Ngưu bàng tử", "Trúc diệp", "Cam thảo"]
  },
  "Thach_Lam_Thap_Nhiệt": {
    hc: "Thạch lâm thấp nhiệt (Sỏi tiết niệu)",
    phanloai: ["Lâm chứng", "Nhiệt", "Thực", "Thấp nhiệt uất kết"],
    tc: ["Tiểu tiện buốt rát, tiểu dắt, thỉnh thoảng tắc dòng tiểu giữa chừng", "Đau buốt vùng thắt lưng hoặc bụng dưới, có thể tiểu ra sỏi nhỏ", "Rêu lưỡi vàng nhớt, mạch huyền sác"],
    pdt: "Thanh nhiệt lợi thấp, thông lâm bài thạch",
    bt: "Thạch vĩ tán hợp Xa tiền tử tán",
    tpbt: ["Thạch vĩ", "Xa tiền tử", "Cù mạch", "Biển súc", "Hoạt thạch", "Đông quỳ tử", "Kim tiền thảo"]
  },
  "Luy_Lich_Dam_U": {
    hc: "Lũy lịch đàm hạch uất kết (Hạch cổ mạn tính)",
    phanloai: ["Lũy lịch", "Bình", "Thực", "Đàm hỏa uất kết"],
    tc: ["Vùng cổ xuất hiện hạch to bằng hạt đậu hoặc hạt dẻ, sờ chắc không đau, di động", "Kèm theo ngực tức, tinh thần u uất, ăn kém", "Rêu lưỡi trắng nhớt, mạch huyền hoạt"],
    pdt: "Hóa đàm nhuyễn kiên, lý khí tán kết",
    bt: "Tiêu lịch hoàn gia giảm",
    tpbt: ["Hải tảo", "Côn bố", "Bối mẫu", "Hạ khô thảo", "Bạch giới tử", "Trần bì", "Phục linh"]
  },
  "Nuc_Huyet_Am_Hu": {
    hc: "Nục huyết âm hư hỏa vượng (Chảy máu cam do âm hư)",
    phanloai: ["Huyết chứng", "Nhiệt", "Hư", "Âm hư hỏa vượng"],
    tc: ["Chảy máu cam tái phát nhiều lần, máu đỏ tươi số lượng ít", "Đau lưng mỏi gối, chóng mặt ù tai, triều nhiệt đạo hãn", "Lưỡi đỏ ít rêu, mạch tế sác"],
    pdt: "Tư âm giáng hỏa, lương huyết chỉ huyết",
    bt: "Tri bách địa hoàng hoàn hợp Tiểu xế hôi tán",
    tpbt: ["Thục địa", "Sơn thù", "Hoài sơn", "Trạch tả", "Đan bì", "Phục linh", "Tri mẫu", "Hoàng bá", "Trắc bách diệp"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- BỆNH LÝ LÂM SÀNG: CỔ CHƯỚNG, TÍCH TỤ & NGOẠI CẢM ---
  "Co_Chuong_Thap_Nhiet": {
    hc: "Cổ chướng thấp nhiệt",
    phanloai: ["Cổ chướng", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Bụng trướng to căng cứng, tĩnh mạch nổi rõ, da và mắt vàng", "Sốt nhẹ, phiền khát, tiểu tiện sẻn đỏ, đại tiện táo hoặc nhầy", "Rêu lưỡi vàng nhớt", "Mạch huyền sác"],
    pdt: "Thanh nhiệt lợi thấp, hành khí thoái hoàng",
    bt: "Nhân trần cao thang hợp Ngũ linh tán",
    tpbt: ["Nhân trần", "Chi tử", "Đại hoàng", "Phục linh", "Trư linh", "Trạch tả", "Bạch truật", "Quế chi"]
  },
  "Co_Chuong_Ty_Than_Duong_Hu": {
    hc: "Cổ chướng tỳ thận dương hư",
    phanloai: ["Cổ chướng", "Hàn", "Hư", "Tỳ thận dương hư"],
    tc: ["Bụng trướng to mềm, vỗ có tiếng nước, ấn lõm", "Sợ lạnh, tay chân lạnh, sắc mặt trắng nhợt hoặc ám đen", "Tiểu tiện ít, chân phù, lưỡi bệu nhợt", "Mạch trầm tế trì"],
    pdt: "Ôn bổ tỳ thận, hành thủy tiêu trướng",
    bt: "Thực tỳ ẩm hợp Phụ tử lý trung hoàn",
    tpbt: ["Phụ tử", "Can khương", "Đảng sâm", "Bạch truật", "Phục linh", "Hậu phác", "Mộc hương", "Trạch tả"]
  },
  "Tich_Tu_Khi_Uat_Huyet_Tru": {
    hc: "Tích tụ khí trệ huyết ứ",
    phanloai: ["Tích tụ", "Bình", "Thực", "Huyết ứ trệ"],
    tc: ["Bụng có hòn cục cứng, đau tức cố định, cự án", "Sắc mặt tối sạm, da khô, kinh nguyệt không đều", "Chất lưỡi tím tối có điểm ứ huyết", "Mạch huyền sáp"],
    pdt: "Hành khí hoạt huyết, tiêu tích tán kết",
    bt: "Cách hạ trục ứ thang gia giảm",
    tpbt: ["Đào nhân", "Hồng hoa", "Đương quy", "Xuyên khung", "Xích thược", "Ô dược", "Diên hồ sách", "Cam thảo", "Chỉ xác", "Hương phụ"]
  },
  "Ngoai_Cam_Phong_Nhiet": {
    hc: "Ngoại cảm phong nhiệt (Cảm mạo phong nhiệt)",
    phanloai: ["Cảm mạo", "Nhiệt", "Thực", "Phong nhiệt"],
    tc: ["Sốt cao, sợ gió nhẹ, đầu đau căng, họng sưng đau", "Miệng khát, ho khạc đờm vàng dính", "Rêu lưỡi vàng mỏng", "Mạch phù sác"],
    pdt: "Sơ phong thanh nhiệt, tuyên phế giải biểu",
    bt: "Ngân kiều tán gia giảm",
    tpbt: ["Kim ngân hoa", "Liên kiều", "Bạc hà", "Cát cánh", "Ngưu bàng tử", "Đạm trúc diệp", "Kinh giới", "Cam thảo"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- BỆNH LÝ LÂM SÀNG: NHĨ MINH, NHA THỐNG & HƯ LAO (BỔ SUNG) ---
  "Nhi_Minh_Nhi_Lung_Than_Xu": {
    hc: "Nhĩ minh nhĩ điếc thận hư (Tai ù tai điếc do thận hư)",
    phanloai: ["Ngũ quan", "Bình", "Hư", "Thận tinh bất túc"],
    tc: ["Tai ù như tiếng ve kêu hoặc điếc mạn tính", "Đau lưng mỏi gối, chóng mặt ù tai", "Trí nhớ giảm sút, di tinh, lưỡi nhợt", "Mạch trầm tế"],
    pdt: "Bổ thận ích tinh, thông tai",
    bt: "Nhĩ lung tả tử hoàn gia giảm",
    tpbt: ["Thục địa", "Sơn thù", "Hoài sơn", "Trạch tả", "Đan bì", "Phục linh", "Từ thạch", "Cốt toái bổ"]
  },
  "Nha_Thong_Vi_Hoa": {
    hc: "Nha thống vị hỏa (Đau răng do vị hỏa)",
    phanloai: ["Ngũ quan", "Nhiệt", "Thực", "Vị hỏa thượng công"],
    tc: ["Răng lợi sưng đau dữ dội, đau lan đầu, chảy máu chân răng", "Hơi thở hôi, miệng khát thích uống lạnh", "Rêu lưỡi vàng dày, mạch sác lực"],
    pdt: "Thanh vị tả hỏa, chỉ thống",
    bt: "Thanh vị tán gia giảm",
    tpbt: ["Thạch cao", "Hoàng liên", "Sinh địa", "Mẫu đơn bì", "Thăng ma", "Đại hoàng"]
  },
  "Hu_Lao_Phi_Am_Hu": {
    hc: "Hư lao phế âm hư",
    phanloai: ["Hư lao", "Nhiệt", "Hư", "Phế âm hư"],
    tc: ["Ho khan ít đờm hoặc đờm dính có tia máu, gầy sút", "Triều nhiệt, đạo hãn, gò má đỏ, họng khô", "Lưỡi đỏ ít rêu, mạch tế sác"],
    pdt: "Tư âm nhuận phế, chỉ khái",
    bt: "Bách hợp cố kim thang gia giảm",
    tpbt: ["Bách hợp", "Sinh địa", "Thục địa", "Đương quy", "Bạch thược", "Bối mẫu", "Cát cánh", "Mạch môn"]
  },
  "Thuy_Thung_Thuy_Khi_Uat": {
    hc: "Thủy thũng thủy khí uất kết",
    phanloai: ["Thủy thũng", "Bình", "Thực", "Thủy khí trệ"],
    tc: ["Phù thũng toàn thân, ngực bụng trướng đầy, thở gấp", "Tiểu tiện ít, nước tiểu đục hoặc vàng", "Rêu lưỡi trắng dày nhớt, mạch huyền sác"],
    pdt: "Hành khí lợi thủy, tiêu thũng",
    bt: "Sơ trướng ẩm gia giảm",
    tpbt: ["Đại phúc bì", "Tang bạch bì", "Phục linh bì", "Trần bì", "Hậu phác", "Tang diệp", "Xa tiền tử"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- BỆNH LÝ LÂM SÀNG: HƯ LAO, PHẾ TRƯỚNG, ĐỚI HẠ & NGOẠI KHOA ---
  "Hu_Lao_Tam_Than_Luong_Hu": {
    hc: "Hư lao tâm thận lưỡng hư",
    phanloai: ["Hư lao", "Bình", "Hư", "Tâm thận lưỡng hư"],
    tc: ["Hồi hộp trống ngực, mất ngủ, hay quên, lưng mỏi gối đau", "Tai ù, chóng mặt, tinh thần mệt mỏi, lòng bàn tay chân nóng", "Lưỡi đỏ ít rêu, mạch tế sác"],
    pdt: "Tư âm bổ thận, dưỡng tâm an thần",
    bt: "Giao thái hoàn hợp Sinh mạch tán",
    tpbt: ["Hoàng liên", "Nhục quế", "Đảng sâm", "Mạch môn", "Ngũ vị tử", "Thục địa", "Sơn thù"]
  },
  "Phe_Truong_Phe_Than_Khi_Hu": {
    hc: "Phế trướng phế thận khí hư",
    phanloai: ["Phế trướng", "Bình", "Hư", "Phế thận khí hư"],
    tc: ["Ho hen lâu ngày, thở gấp khi vận động, tiếng thở ngắn", "Sợ lạnh, tay chân lạnh, lưng mỏi gối", "Đờm nhiều loãng trắng, chất lưỡi nhợt", "Mạch trầm tế vô lực"],
    pdt: "Ôn bổ phế thận, hóa đàm bình suyễn",
    bt: "Tô tử giáng khí thang hợp Kim quỹ thận khí hoàn",
    tpbt: ["Tô tử", "Bán hạ", "Hậu phác", "Tiền hồ", "Nhân sâm", "Thục địa", "Phụ tử", "Đỗ trọng"]
  },
  "Doi_Ha_Ty_Than_Duong_Hu": {
    hc: "Đới hạ tỳ thận dương hư",
    phanloai: ["Đới hạ", "Hàn", "Hư", "Tỳ thận dương hư"],
    tc: ["Khí hư ra nhiều màu trắng loãng như nước, không hôi", "Bụng dưới lạnh đau, lưng mỏi gối, tay chân không ấm", "Sợ lạnh, tiểu tiện trong nhiều hoặc tiểu đêm", "Mạch trầm tế"],
    pdt: "Ôn bổ tỳ thận, thăng dương cố đới",
    bt: "Nội bổ hoàn gia giảm",
    tpbt: ["Lộc giác sương", "Nhục thung dung", "Ba kích thiên", "Thỏ ty tử", "Đảng sâm", "Bạch truật", "Sơn dược", "Xa tiền tử"]
  },
  "Dinh_Doc_Hoa_Doc": {
    hc: "Đinh độc hỏa độc uất kết",
    phanloai: ["Ngoại khoa", "Nhiệt", "Thực", "Hỏa độc uất kết"],
    tc: ["Vùng da xuất hiện mụn đinh nhỏ cứng như đinh, sưng tấy đau nhức dữ dội", "Sốt cao, sợ lạnh, miệng khát, bứt rứt phiền táo", "Rêu lưỡi vàng dày, mạch hồng sác"],
    pdt: "Thanh nhiệt giải độc, tán kết tiêu thũng",
    bt: "Ngũ vị tiêu độc ẩm gia giảm",
    tpbt: ["Kim ngân hoa", "Dã cúc hoa", "Bồ công anh", "Tử hoa địa đinh", "Xích thược", "Xuyên khung", "Cam thảo"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- BỆNH LÝ LÂM SÀNG: THƯƠNG KHOA, THỬ NHIỆT & ĐẠI TRÀNG ---
  "Thuong_Khoa_Huyet_U": {
    hc: "Đả thương ứ huyết (Chấn thương do té ngã)",
    phanloai: ["Thương khoa", "Bình", "Thực", "Huyết ứ"],
    tc: ["Vùng chấn thương sưng đau, bầm tím, cự án", "Đau nhói cố định, vận động khó khăn", "Chất lưỡi tím tối hoặc có điểm ứ huyết", "Mạch sáp hoặc huyền"],
    pdt: "Hoạt huyết hóa ứ, tiêu thũng chỉ thống",
    bt: "Huyết phủ trục ứ thang hợp Phục nguyên hoạt huyết thang",
    tpbt: ["Đào nhân", "Hồng hoa", "Đương quy", "Xuyên khung", "Sài hồ", "Thiên hoa phấn", "Đại hoàng", "Xích thược"]
  },
  "Thu_Nhiệt_Ngoại_Cam": {
    hc: "Thử nhiệt ngoại cảm (Cảm nắng / Say nắng)",
    phanloai: ["Ngoại cảm", "Nhiệt", "Thực", "Thử tà"],
    tc: ["Sốt cao, mặt đỏ, mồ hôi ra nhiều, khát nước muốn uống", "Đau đầu, hoa mắt, mệt mỏi, thân thể nặng nề", "Rêu lưỡi vàng mỏng, mạch hồng đại hoặc sác"],
    pdt: "Thanh thử giải biểu, ích khí sinh tân",
    bt: "Thanh thử ích khí thang gia giảm",
    tpbt: ["Tây qua diệp", "Thạch cao", "Tri mẫu", "Mạch môn", "Cam thảo", "Ngạnh mễ", "Đảng sâm", "Hoàng kỳ", "Đương quy"]
  },
  "Dam_Thach_Thap_Nhiet": {
    hc: "Đảm thạch thấp nhiệt (Sỏi mật cấp)",
    phanloai: ["Can Đảm", "Nhiệt", "Thực", "Thấp nhiệt uất kết"],
    tc: ["Đau vùng sườn phải đột ngột, đau lan lên vai phải hoặc lưng", "Sốt, rét run, da và mắt vàng, buồn nôn", "Rêu lưỡi vàng nhớt, mạch huyền sác"],
    pdt: "Thanh nhiệt lợi thấp, thông lợi đản đạo",
    bt: "Đại sài hồ thang hợp Nhân trần cao thang",
    tpbt: ["Sài hồ", "Hoàng cầm", "Bạch thược", "Chỉ thực", "Đại hoàng", "Bán hạ", "Nhân trần", "Chi tử", "Kim tiền thảo"]
  },
  "Truong_Phong_Ha_Huyet": {
    hc: "Trường phong hạ huyết (Trĩ xuất huyết)",
    phanloai: ["Huyết chứng", "Nhiệt", "Thực", "Thấp nhiệt tràng vị"],
    tc: ["Đại tiện ra máu tươi phun thành tia hoặc nhỏ giọt sau khi đại tiện", "Hậu môn sưng đau, sa búi trĩ, cảm giác nóng rát", "Rêu lưỡi vàng nhớt, mạch hoạt sác"],
    pdt: "Thanh nhiệt lợi thấp, lương huyết chỉ huyết",
    bt: "Hòe hoa tán gia giảm",
    tpbt: ["Hòe hoa", "Trắc bách diệp", "Kinh giới tuệ", "Chỉ xác", "Hoàng cầm", "Đương quy", "Địa du"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- BỆNH LÝ LÂM SÀNG: TRIỀU NHIỆT, NUY CHỨNG & PHỤ KHOA (BỔ SUNG) ---
  "Am_Hu_Trieu_Nhiet": {
    hc: "Âm hư triều nhiệt (Triều nhiệt cốt chứng)",
    phanloai: ["Hư lao", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Sốt âm ỉ về chiều hoặc lòng bàn tay chân nóng", "Đạo hãn, gò má đỏ, họng khô miệng khát", "Lưỡi đỏ ít rêu", "Mạch tế sác"],
    pdt: "Tư âm thăng dương, thanh nhiệt lui cốt chưng",
    bt: "Thanh cốt tán gia giảm",
    tpbt: ["Thanh hao", "Miết giáp", "Tri mẫu", "Hoàng bá", "Đương quy", "Sinh địa", "Địa cốt bì", "Cam thảo"]
  },
  "Nuy_Chung_Phong_Thap": {
    hc: "Phong thấp nuy chứng (Nuy chứng do phong thấp)",
    phanloai: ["Nuy chứng", "Bình", "Thực", "Phong thấp"],
    tc: ["Chân tay mềm yếu, tê mỏi, đau nhức các khớp nặng nề", "Gặp trời mưa ẩm triệu chứng tăng", "Rêu lưỡi trắng nhớt", "Mạch nhu hoãn"],
    pdt: "Khu phong trừ thấp, thông lạc cường cân",
    bt: "Tam khí ẩm gia giảm",
    tpbt: ["Phòng phong", "Ý dĩ", "Xích thược", "Mộc qua", "Tần giao", "Tang ký sinh", "Độc hoạt"]
  },
  "Huyet_Chung_Tu_Ban_Khi_Huyet_Hu": {
    hc: "Tử ban khí huyết lưỡng hư",
    phanloai: ["Huyết chứng", "Bình", "Hư", "Khí huyết lưỡng hư"],
    tc: ["Xuất huyết dưới da rải rác, sắc nhạt, tái phát dai dẳng", "Mệt mỏi, sắc mặt nhợt nhạt, đoản khí", "Chất lưỡi nhợt", "Mạch tế nhược"],
    pdt: "Ích khí dưỡng huyết, nhiếp huyết",
    bt: "Quy tỳ thang gia giảm",
    tpbt: ["Hoàng kỳ", "Đảng sâm", "Bạch truật", "Phục thần", "Đương quy", "Long nhãn", "Toan táo nhân", "Viễn chí", "A giao"]
  },
  "Bao_Cung_Han_Tro": {
    hc: "Bào cung hàn trệ (Vô sinh, thống kinh do hàn)",
    phanloai: ["Phụ khoa", "Hàn", "Thực", "Hàn trệ bào cung"],
    tc: ["Kinh nguyệt chậm, sắc tối, vón cục, đau bụng kinh chườm ấm đỡ", "Lưng mỏi, bụng dưới lạnh, tay chân không ấm", "Rêu lưỡi trắng nhuận", "Mạch trầm trì"],
    pdt: "Ôn kinh tán hàn, noãn cung chỉ thống",
    bt: "Ôn kinh thang gia giảm",
    tpbt: ["Đương quy", "Xuyên khung", "Bạch thược", "Ngô thù du", "Nhục quế", "Đan bì", "Mạch môn", "Bán hạ", "Chích cam thảo"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- BỆNH LÝ LÂM SÀNG: UẤT CHỨNG, KHÁI THẤU & HUYẾT CHỨNG (BỔ SUNG) ---
  "Uat_Chung_Can_Uat_Ty_Hu": {
    hc: "Uất chứng can uất tỳ hư",
    phanloai: ["Uất chứng", "Bình", "Hư", "Can uất tỳ hư"],
    tc: ["Tinh thần u uất, ngực sườn đầy trướng, hay thở dài", "Mệt mỏi, ăn kém, đại tiện lỏng nát", "Chất lưỡi nhợt, rêu lưỡi trắng mỏng", "Mạch huyền tế"],
    pdt: "Sơ can kiện tỳ, dưỡng tâm an thần",
    bt: "Tiêu dao tán gia giảm",
    tpbt: ["Sài hồ", "Đương quy", "Bạch thược", "Bạch truật", "Phục linh", "Bạc hà", "Sinh khương", "Cam thảo"]
  },
  "Khai_Thau_Tao_Nhiệt": {
    hc: "Khái thấu táo nhiệt phạm phế (Ho do táo nhiệt)",
    phanloai: ["Khái thấu", "Nhiệt", "Thực", "Táo nhiệt phạm phế"],
    tc: ["Ho khan ít đờm hoặc đờm dính quánh khó khạc, có khi lẫn tia máu", "Họng khô rát, mũi khô, sợ gió phát sốt nhẹ", "Lưỡi đỏ ít rêu, mạch phù sác"],
    pdt: "Sơ phong thanh phế, nhuận táo chỉ khái",
    bt: "Tang hạnh thang gia giảm",
    tpbt: ["Tang diệp", "Hạnh nhân", "Bối mẫu", "Sa sâm", "Đạm trúc diệp", "Lô căn", "Chi tử"]
  },
  "Nieu_Huyet_Thap_Nhiet": {
    hc: "Niệu huyết thấp nhiệt (Tiểu ra máu do thấp nhiệt)",
    phanloai: ["Huyết chứng", "Nhiệt", "Thực", "Thấp nhiệt bàng quang"],
    tc: ["Tiểu tiện ra máu tươi hoặc máu sẫm, tiểu buốt rát, tiểu dắt", "Bụng dưới trướng đau, bứt rứt khát nước", "Rêu lưỡi vàng nhớt, mạch nhu sác"],
    pdt: "Thanh nhiệt lợi thấp, lương huyết chỉ huyết",
    bt: "Tiểu xế ẩm gia giảm",
    tpbt: ["Sinh địa", "Mộc thông", "Cam thảo", "Trúc diệp", "Xa tiền tử", "Bạch mao căn", "Chi tử", "Hải kim sa"]
  },
  "Thong_Phong_Huyet_U": {
    hc: "Thống phong huyết ứ mạn tính (Gout mạn)",
    phanloai: ["Thống phong", "Bình", "Thực", "Huyết ứ đàm trọc"],
    tc: ["Khớp sưng đau cứng mạn tính, biến dạng, xuất hiện hạt củ tophi", "Đau nhói cố định, về đêm đau tăng", "Chất lưỡi tím tối, rêu lưỡi trắng nhớt", "Mạch sáp hoặc huyền"],
    pdt: "Hóa đàm thông lạc, hoạt huyết hóa ứ",
    bt: "Đào hồng tứ vật thang hợp Nhị diệu tán gia giảm",
    tpbt: ["Đào nhân", "Hồng hoa", "Đương quy", "Xuyên khung", "Xích thược", "Thương truật", "Hoàng bá", "Uy linh tiên", "Địa long"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- BỆNH LÝ LÂM SÀNG: KINH SỚM, BĂNG LẬU & PHÚC THỐNG (BỔ SUNG) ---
  "Kinh_Truoc_Ky_Khi_Hu": {
    hc: "Kinh trước kỳ khí hư (Kinh mau đến do tỳ khí hư)",
    phanloai: ["Kinh nguyệt", "Bình", "Hư", "Tỳ khí hư"],
    tc: ["Kinh nguyệt ra sớm trước kỳ, lượng nhiều, sắc nhạt, chất loãng", "Mệt mỏi, đoản khí, sắc mặt nhợt nhạt", "Ăn kém, chân tay rã rời", "Mạch tế nhược"],
    pdt: "Ích khí kiện tỳ, cố kinh",
    bt: "Cử nguyên tiễn gia giảm",
    tpbt: ["Hoàng kỳ", "Đảng sâm", "Bạch truật", "Thăng ma", "Sài hồ", "Đương quy", "Cam thảo"]
  },
  "Bang_Lau_Huyet_Nhiệt": {
    hc: "Băng lậu huyết nhiệt (Xuất huyết tử cung do huyết nhiệt)",
    phanloai: ["Phụ khoa", "Nhiệt", "Thực", "Huyết nhiệt"],
    tc: ["Kinh nguyệt ra ồ ạt hoặc kéo dài không dứt, máu đỏ tươi hoặc sẫm, chất dính", "Phiền táo, miệng khô khát, mặt đỏ", "Chất lưỡi đỏ, rêu vàng", "Mạch sác lực"],
    pdt: "Thanh nhiệt lương huyết, cố kinh chỉ huyết",
    bt: "Thanh nhiệt cố kinh thang gia giảm",
    tpbt: ["Sinh địa", "Hoàng cầm", "Địa cốt bì", "Thanh hao", "A giao", "Hải phấn", "Uất kim", "Cam thảo"]
  },
  "Phuc_Thong_Huyet_U": {
    hc: "Phúc thống huyết ứ (Đau bụng do huyết ứ)",
    phanloai: ["Phúc thống", "Bình", "Thực", "Huyết ứ"],
    tc: ["Bụng đau nhói cố định, cự án, đau về đêm tăng", "Đau lâu ngày không khỏi, vị trí đau không thay đổi", "Chất lưỡi tím tối hoặc có điểm ứ huyết", "Mạch sáp"],
    pdt: "Hoạt huyết hóa ứ, thông lạc chỉ thống",
    bt: "Thiếu phúc trục ứ thang gia giảm",
    tpbt: ["Đương quy", "Xuyên khung", "Xích thược", "Đào nhân", "Hồng hoa", "Diên hồ sách", "Ngũ linh tử", "Bồ hoàng"]
  },
  "Bi_Chung_Phong_Thap_Han": {
    hc: "Phong hàn thấp tý (Đau khớp do phong hàn thấp)",
    phanloai: ["Tý chứng", "Hàn", "Thực", "Phong hàn thấp"],
    tc: ["Khớp xương đau nhức nặng nề, co duỗi khó khăn, đau cố định hoặc di chuyển", "Gặp lạnh mưa đau tăng, chườm ấm đỡ", "Rêu lưỡi trắng nhớt", "Mạch trầm khẩn"],
    pdt: "Khu phong tán hàn, trừ thấp thông lạc",
    bt: "Quyên tý thang gia giảm",
    tpbt: ["Khương hoạt", "Độc hoạt", "Tần giao", "Phòng phong", "Xuyên khung", "Đương quy", "Cam thảo", "Sinh khương"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- BỆNH LÝ LÂM SÀNG: BỔ SUNG (NGŨ QUAN, THỦY THŨNG & PHỤ KHOA) ---
  "Dau_Mat_Phong_Nhiet": {
    hc: "Mắt đỏ phong nhiệt (Viêm kết mạc cấp)",
    phanloai: ["Ngũ quan", "Nhiệt", "Thực", "Phong nhiệt"],
    tc: ["Mắt sưng đỏ, đau nhức, cộm rát, chảy nước mắt", "Sợ gió, sốt nhẹ, đầu đau, họng khô", "Rêu lưỡi vàng mỏng, mạch phù sác"],
    pdt: "Sơ phong thanh nhiệt, lương huyết chỉ thống",
    bt: "Tang cúc ẩm gia giảm",
    tpbt: ["Tang diệp", "Cúc hoa", "Bạc hà", "Thiền thoái", "Hạnh nhân", "Cát cánh", "Sinh địa", "Thảo quyết minh"]
  },
  "Thuy_Thung_Tam_Thuy": {
    hc: "Thủy thũng tâm thủy phạm tâm (Phù do tim)",
    phanloai: ["Thủy thũng", "Hàn", "Thực", "Thủy khí phạm tâm"],
    tc: ["Phù toàn thân, ngực tức tim đập hồi hộp, thở gấp nằm không được", "Mặt xanh môi tím, tay chân lạnh ngát", "Mạch trầm khẩn hoặc kết đại"],
    pdt: "Ôn dương lợi thủy, giáng nghịch định suyễn",
    bt: "Ma hoàng tang bạch bì thang hợp Ngũ linh tán",
    tpbt: ["Ma hoàng", "Tang bạch bì", "Phục linh", "Trư linh", "Trạch tả", "Bạch truật", "Quế chi", "Phụ tử"]
  },
  "Nuc_Huyet_Khi_Hu": {
    hc: "Nục huyết khí hư (Chảy máu cam do khí hư)",
    phanloai: ["Huyết chứng", "Bình", "Hư", "Khí hư không nhiếp huyết"],
    tc: ["Chảy máu cam tái phát nhiều lần, máu đỏ nhạt, số lượng ít", "Sắc mặt nhợt nhạt, mệt mỏi, đoản khí", "Chất lưỡi nhợt, mạch tế nhược"],
    pdt: "Bổ khí kiện tỳ, nhiếp huyết",
    bt: "Quy tỳ thang gia giảm",
    tpbt: ["Hoàng kỳ", "Đảng sâm", "Bạch truật", "Phục linh", "Đương quy", "Long nhãn", "Toan táo nhân", "Viễn chí", "Thán khương"]
  },
  "Kinh_Muon_Ky_Han_Trệ": {
    hc: "Kinh sau kỳ hàn ngưng huyết trệ (Kinh chậm do hàn)",
    phanloai: ["Kinh nguyệt", "Hàn", "Thực", "Hàn ngưng huyết trệ"],
    tc: ["Kinh nguyệt chậm kỳ nhiều ngày, lượng ít, sắc tối, vón cục", "Đau bụng dưới lạnh, chườm ấm đỡ đau", "Sợ lạnh, tay chân không ấm, rêu lưỡi trắng", "Mạch trầm trì"],
    pdt: "Ôn kinh tán hàn, hoạt huyết điều kinh",
    bt: "Ôn kinh thang gia giảm",
    tpbt: ["Đương quy", "Xuyên khung", "Bạch thược", "Ngô thù du", "Nhục quế", "Đan bì", "Mạch môn", "Bán hạ", "Can khương"]
  }
});
window.database = window.database || {};

Object.assign(window.database, {
  // --- BỆNH LÝ LÂM SÀNG: ĐẦU THỐNG, TIÊU KHÁT, TÝ CHỨNG & PHỤ KHOA (BỔ SUNG) ---
  "Dau_Thong_Dam_Troc": {
    hc: "Đầu thống đàm trọc",
    phanloai: ["Đầu thống", "Bình", "Thực", "Đàm trọc"],
    tc: ["Đầu đau căng nặng như đội khăn, hoa mắt chóng mặt", "Ngực tức, buồn nôn, nôn ra đờm dãi", "Rêu lưỡi trắng nhớt, mạch huyền hoạt"],
    pdt: "Hóa đàm giáng nghịch, thông lạc chỉ thống",
    bt: "Bán hạ bạch truật thiên ma thang gia giảm",
    tpbt: ["Bán hạ", "Bạch truật", "Thiên ma", "Trần bì", "Phục linh", "Cam thảo", "Sinh khương", "Đại táo"]
  },
  "Tieu_Khat_Am_Hu": {
    hc: "Tiêu khát âm hư (Hạ tiêu)",
    phanloai: ["Tiêu khát", "Nhiệt", "Hư", "Âm hư"],
    tc: ["Tiểu tiện nhiều lần, nước tiểu đục ngọt, uống nhiều nước", "Đau lưng mỏi gối, tai ù, lòng bàn tay chân nóng, đạo hãn", "Lưỡi đỏ ít rêu, mạch tế sác"],
    pdt: "Tư âm bổ thận, sinh tân chỉ khát",
    bt: "Lục vị địa hoàng hoàn hợp Tiêu khát phương",
    tpbt: ["Thục địa", "Sơn thù", "Hoài sơn", "Trạch tả", "Đan bì", "Phục linh", "Tri mẫu", "Hoàng bá", "Thiên hoa phấn"]
  },
  "Nhiệt_Tý_Chung": {
    hc: "Nhiệt tý (Phong thấp nhiệt tý)",
    phanloai: ["Tý chứng", "Nhiệt", "Thực", "Phong thấp nhiệt"],
    tc: ["Khớp xương sưng nóng đỏ đau dữ dội, vận động khó khăn", "Sốt, khát nước, phiền táo, mồ hôi ra không giải được", "Rêu lưỡi vàng dày, mạch hồng sác hoặc hoạt sác"],
    pdt: "Thanh nhiệt trừ thấp, khu phong thông lạc",
    bt: "Quế chi thược dược tri mẫu thang gia giảm",
    tpbt: ["Quế chi", "Bạch thược", "Tri mẫu", "Cam thảo", "Ma hoàng", "Phòng phong", "Bạch truật", "Hành nhân", "Ý dĩ"]
  },
  "Bao_Cung_Thap_Nhiệt": {
    hc: "Bào cung thấp nhiệt (Viêm nhiễm phụ khoa cấp)",
    phanloai: ["Phụ khoa", "Nhiệt", "Thực", "Thấp nhiệt"],
    tc: ["Khí hư ra nhiều, màu vàng đặc hoặc xanh như mủ, hôi tanh", "Bụng dưới trướng đau, tiểu buốt rát, sốt nhẹ", "Rêu lưỡi vàng nhớt, mạch nhu sác"],
    pdt: "Thanh nhiệt lợi thấp, giải độc hóa trọc",
    bt: "Ngân kiều tán hợp Bát chính tán gia giảm",
    tpbt: ["Kim ngân hoa", "Liên kiều", "Xa tiền tử", "Hoạt thạch", "Cù mạch", "Biển súc", "Hoàng bá", "Ý dĩ"]
  }
});











