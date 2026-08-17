const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

function calculateNewExpiration(currentUser, targetRole) {
    const daysToAdd = targetRole === 'VIP' ? 30 : 365;
    const now = new Date();
    let baseDate = now;

    // Mua gia hạn CÙNG GÓI và chưa hết hạn -> Cộng dồn ngày tiếp nối
    if (currentUser && currentUser.role === targetRole && currentUser.expire_date) {
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
    const data = JSON.parse(event.body || '{}');
    const content = (data.content || data.transactionContent || '').toUpperCase();
    const amount = parseInt(data.transferAmount || data.amount || 0);

    let targetRole = null;
    let shortId = null;

    if (content.includes('SUPERVIP')) {
        targetRole = 'SUPERVIP';
        const parts = content.split('SUPERVIP');
        if (parts[1]) shortId = parts[1].trim().split(' ')[0];
    } else if (content.includes('VIP')) {
        targetRole = 'VIP';
        const parts = content.split('VIP');
        if (parts[1]) shortId = parts[1].trim().split(' ')[0];
    }

    if (!targetRole || !shortId) {
        return { statusCode: 200, headers, body: JSON.stringify({ success: true, message: 'Bỏ qua: Không tìm thấy cú pháp VIP/SUPERVIP hợp lệ.' }) };
    }

    if (targetRole === 'VIP' && amount < 99000) {
        return { statusCode: 200, headers, body: JSON.stringify({ success: false, message: 'Số tiền chuyển gói VIP chưa đủ 99.000đ.' }) };
    }
    if (targetRole === 'SUPERVIP' && amount < 1180000) {
        return { statusCode: 200, headers, body: JSON.stringify({ success: false, message: 'Số tiền chuyển gói SUPERVIP chưa đủ 1.180.000đ.' }) };
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

    if (!matchedProfile) {
        return { statusCode: 200, headers, body: JSON.stringify({ success: false, message: `Không tìm thấy tài khoản mang mã định danh ${shortId}` }) };
    }

    // TÍNH MỐC NGÀY HẾT HẠN MỚI
    const newExpireDate = calculateNewExpiration(matchedProfile, targetRole);

    // CẬP NHẬT TRỰC TIẾP ROLE VÀ EXPIRE_DATE LÊN SUPABASE
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
        message: `Đã gia hạn/nâng cấp thành công tài khoản ${matchedProfile.email} lên ${targetRole} tới ngày ${newExpireDate}` 
      })
    };

  } catch (err) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
