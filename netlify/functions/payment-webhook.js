const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

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
    console.log("📥 Nhận Webhook Payload:", event.body);
    const bodyData = JSON.parse(event.body || '{}');
    
    let rawContent = bodyData.content || bodyData.description || bodyData.transactionContent || '';
    if (!rawContent && Array.isArray(bodyData.data) && bodyData.data[0]) {
        rawContent = bodyData.data[0].description || bodyData.data[0].content || '';
    }
    
    const content = rawContent.toUpperCase();
    const amount = parseInt(bodyData.transferAmount || bodyData.amount || (Array.isArray(bodyData.data) ? bodyData.data[0]?.amount : 0) || 0);

    console.log("🔍 Đã trích xuất nội dung:", content, "| Số tiền:", amount);

    const vipMatch = content.match(/(SVIP|VIP)\s*(DL\d{4})/i);

    if (!vipMatch) {
        console.log("❌ Không tìm thấy cú pháp VIP/SVIP + Mã DLxxxx trong nội dung:", content);
        return { 
            statusCode: 200, 
            headers, 
            body: JSON.stringify({ success: false, message: `Bỏ qua: Nội dung "${content}" không chứa cú pháp VIP/SVIP + Mã DLxxxx.` }) 
        };
    }

    const targetRole = vipMatch[1].toUpperCase();
    const shortId = vipMatch[2].toUpperCase(); 
    console.log("✅ Khớp cú pháp! Gói:", targetRole, "| Mã ID:", shortId);

    if (targetRole === 'VIP' && amount < 15000) {
        console.log("❌ Số tiền chưa đạt mức tối thiểu cho VIP:", amount);
        return { statusCode: 200, headers, body: JSON.stringify({ success: false, message: 'Số tiền chuyển gói VIP tối thiểu là 15.000đ.' }) };
    }
    if (targetRole === 'SVIP' && amount < 990000) {
        console.log("❌ Số tiền chưa đạt mức tối thiểu cho SVIP:", amount);
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
                    console.log("🎯 Tìm thấy tài khoản khớp mã ID:", shortId, "-> Email:", p.email);
                    break;
                }
            }
        }
    }

    if (!matchedProfile) {
        console.log("❌ Không tìm thấy tài khoản nào trong Supabase khớp với mã định danh:", shortId);
        return { statusCode: 200, headers, body: JSON.stringify({ success: false, message: `Không tìm thấy tài khoản mang mã định danh ${shortId}` }) };
    }

    const newExpireDate = calculateNewExpiration(matchedProfile, targetRole, amount);
    console.log("⏳ Thời hạn mới được tính toán:", newExpireDate);

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
        const errText = await resUpdate.text();
        console.error("🔥 Lỗi cập nhật Supabase:", errText);
        throw new Error('Cập nhật database Supabase thất bại: ' + errText);
    }

    console.log("🎉 Nâng cấp thành công tài khoản:", matchedProfile.email, "lên", targetRole);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: `Đã gia hạn thành công tài khoản ${matchedProfile.email} lên ${targetRole} tới ngày ${newExpireDate}` 
      })
    };

  } catch (err) {
    console.error("🔥 Lỗi ngoại lệ trong webhook:", err.message);
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
