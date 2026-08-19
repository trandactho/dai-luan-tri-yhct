const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Hàm tính ngày hết hạn dựa trên cấp độ và số tiền nạp
function calculateNewExpiration(currentUser, targetRole, amount) {
    let daysToAdd = 30; // Mặc định gói VIP tháng

    if (targetRole === 'SVIP') {
        daysToAdd = 365;
    } else if (targetRole === 'VIP') {
        if (amount >= 99000) {
            daysToAdd = 30;  // Gói 30 ngày (99.000đ)
        } else if (amount >= 15000) {
            daysToAdd = 3;   // Gói 3 ngày (15.000đ)
        }
    }

    const now = new Date();
    let baseDate = now;

    if (currentUser && currentUser.expire_date) {
        const currentExpire = new Date(currentUser.expire_date);
        if (currentExpire > now) {
            baseDate = currentExpire;
        }
    }

    const newExpireDate = new Date(baseDate.getTime() + daysToAdd * 24 * 60 * 60 * 1000);
    return newExpireDate.toISOString();
}

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ message: 'Method Not Allowed' }) };
  }

  try {
    const bodyData = JSON.parse(event.body || '{}');
    
    let rawContent = bodyData.content || bodyData.description || bodyData.transactionContent || '';
    if (!rawContent && Array.isArray(bodyData.data) && bodyData.data[0]) {
        rawContent = bodyData.data[0].description || bodyData.data[0].content || '';
    }
    
    const content = rawContent.toUpperCase();
    const amount = parseInt(bodyData.transferAmount || bodyData.amount || (Array.isArray(bodyData.data) ? bodyData.data[0]?.amount : 0) || 0);

    const vipMatch = content.match(/(SVIP|VIP)\s*(DL\d{4})/i);[span_23](start_span)[span_23](end_span)

    if (!vipMatch) {
        return { 
            statusCode: 200, 
            headers, 
            body: JSON.stringify({ success: true, message: 'Bỏ qua: Không tìm thấy cú pháp SVIP/VIP + Mã DLxxxx hợp lệ.' }) 
        };
    }

    const targetRole = vipMatch[1].toUpperCase();
    const shortId = vipMatch[2].toUpperCase(); // Ví dụ: DL1714

    // 🟢 ĐÃ SỬA: Kiểm tra số tiền tối thiểu ngắn gọn, không bị lặp
    if (targetRole === 'VIP' && amount < 15000) {
        return { statusCode: 200, headers, body: JSON.stringify({ success: false, message: 'Số tiền chuyển gói VIP tối thiểu là 15.000đ.' }) };
    }
    if (targetRole === 'SVIP' && amount < 990000) {[span_24](start_span)[span_24](end_span)
        return { statusCode: 200, headers, body: JSON.stringify({ success: false, message: 'Số tiền chuyển gói SVIP chưa đủ 990.000đ.' }) };
    }

    const resFind = await fetch(`${SUPABASE_URL}/rest/v1/profiles?select=id,email,role,expire_date`, {
        method: 'GET',
        headers: {
            'apikey': SUPABASE_SERVICE_ROLE_KEY,
            'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
        }
    });
    const profiles = await resFind.json();
    
    let matchedProfile = null;
    if (Array.isArray(profiles)) {
        for (let p of profiles) {
            if (p.email) {
                let hash = 0;
                const cleanEmail = p.email.trim().toLowerCase();
                for (let i = 0; i < cleanEmail.length; i++) {
                    hash = (hash << 5) - hash + cleanEmail.charCodeAt(i);
                    hash |= 0;
                }
                const calculatedShortId = `DL${1000 + (Math.abs(hash) % 9000)}`;
                if (calculatedShortId === shortId) {
                    matchedProfile = p;
                    break;
                }
            }
        }
    }

    if (!matchedProfile) {
        return { statusCode: 200, headers, body: JSON.stringify({ success: false, message: `Không tìm thấy tài khoản mang mã định danh ${shortId}` }) };
    }

    const newExpireDate = calculateNewExpiration(matchedProfile, targetRole, amount);

    // 🟢 ĐÃ SỬA: Dùng `targetRole` động thay vì hardcode 'SVIP'
    const resUpdate = await fetch(`${SUPABASE_URL}/rest/v1/profiles?id=eq.${matchedProfile.id}`, {
        method: 'PATCH',
        headers: {
            'apikey': SUPABASE_SERVICE_ROLE_KEY,
            'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
            'Content-Type': 'application/json',
            'Prefer': 'return=minimal'
        },
        body: JSON.stringify({ 
            role: targetRole,
            expire_date: newExpireDate 
        })
    });

    if (!resUpdate.ok) {
        throw new Error('Cập nhật database Supabase thất bại');
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: `Đã gia hạn thành công tài khoản ${matchedProfile.email} lên ${targetRole} tới ngày ${newExpireDate}` 
      })
    };

  } catch (err) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
