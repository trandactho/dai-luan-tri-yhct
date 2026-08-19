const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Hàm hỗ trợ kiểm tra thời hạn & TỰ ĐỘNG HẠ CẤP TRỰC TIẾP TRONG CSDL
function getEffectiveRole(profile) {
    let role = profile?.role || 'FREE';
    
    if (role !== 'FREE' && role !== 'GUEST' && profile?.expire_date) {
        if (new Date().getTime() > new Date(profile.expire_date).getTime()) {
            role = 'FREE';
            profile.role = 'FREE';

            // Ghi đè tự động ngầm xuống CSDL Supabase
            if (profile.id && SUPABASE_SERVICE_ROLE_KEY) {
                fetch(`${SUPABASE_URL}/rest/v1/profiles?id=eq.${profile.id}`, {
                    method: 'PATCH',
                    headers: {
                        'apikey': SUPABASE_SERVICE_ROLE_KEY,
                        'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ role: 'FREE', expire_date: null })
                }).catch(err => console.warn('Lỗi tự động cập nhật CSDL:', err));
            }
        }
    }
    return role;
}

exports.handler = async (event) => {
  const allowedOrigins = ["https://dailuantriyhct.com", "http://localhost:8888", "http://localhost:8080"];
  const requestOrigin = event.headers.origin || event.headers.Origin;

  const headers = {
    'Access-Control-Allow-Origin': allowedOrigins.includes(requestOrigin) ? requestOrigin : '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
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
    const { action, email, password, token, aiUsedToday } = JSON.parse(event.body || '{}');

    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
        return { statusCode: 500, headers, body: JSON.stringify({ message: 'Chưa cấu hình Supabase ENV.' }) };
    }

    // A. XỬ LÝ ĐĂNG KÝ TÀI KHOẢN
    if (action === 'register') {
      const resReg = await fetch(`${SUPABASE_URL}/auth/v1/signup`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'apikey': SUPABASE_ANON_KEY },
          body: JSON.stringify({ email, password })
      });
      
      const regData = await resReg.json();
      if (!resReg.ok) {
          return { statusCode: 400, headers, body: JSON.stringify({ message: regData.msg || regData.error_description || 'Đăng ký thất bại' }) };
      }

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ message: 'Đăng ký thành công', user: regData.user || regData })
      };
    }

    // B. XỬ LÝ XÁC THỰC TOKEN KHI REFRESH TRANG (VERIFY TOKEN)
    if (action === 'verify_token') {
      const resUser = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
        method: 'GET',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${token}`
        }
      });
      const userData = await resUser.json();
      if (!resUser.ok || !userData.id) {
        return { statusCode: 401, headers, body: JSON.stringify({ message: 'Token không hợp lệ hoặc hết hạn' }) };
      }

      const resProfile = await fetch(`${SUPABASE_URL}/rest/v1/profiles?id=eq.${userData.id}&select=role,expire_date,ai_used_today,current_token,locked_until`, {
        method: 'GET',
        headers: {
          'apikey': SUPABASE_SERVICE_ROLE_KEY,
          'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
        }
      });
      const profiles = await resProfile.json();
      const profile = (profiles && profiles.length > 0) ? profiles[0] : {};
      profile.id = userData.id;

      // 🟢 Chặn nếu tài khoản đang bị khóa
      if (profile.locked_until && new Date().getTime() < new Date(profile.locked_until).getTime()) {
        const lockDateStr = new Date(profile.locked_until).toLocaleDateString('vi-VN');
        return { 
          statusCode: 403, 
          headers, 
          body: JSON.stringify({ message: `Tài khoản đã bị tạm khóa đến ngày ${lockDateStr} do vi phạm đổi thiết bị.` }) 
        };
      }

      // 🟢 Chặn nếu token trên DB khác token hiện tại (bị đá phiên)
      if (profile.current_token && profile.current_token !== token) {
        return { 
          statusCode: 401, 
          headers, 
          body: JSON.stringify({ message: 'Tài khoản đã được đăng nhập ở một thiết bị khác' }) 
        };
      }

      const effectiveRole = getEffectiveRole(profile);

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          user: {
            id: userData.id,
            email: userData.email,
            role: effectiveRole,
            expireDate: profile.expire_date || null,
            aiUsedToday: profile.ai_used_today || 0
          }
        })
      };
    }

    // C. XỬ LÝ ĐỒNG BỘ QUOTA AI
    if (action === 'sync_quota') {
      const resUser = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
        method: 'GET',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${token}`
        }
      });
      const userData = await resUser.json();
      if (!resUser.ok || !userData.id) {
        return { statusCode: 401, headers, body: JSON.stringify({ message: 'Token không hợp lệ' }) };
      }

      await fetch(`${SUPABASE_URL}/rest/v1/profiles?id=eq.${userData.id}`, {
        method: 'PATCH',
        headers: {
          'apikey': SUPABASE_SERVICE_ROLE_KEY,
          'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ai_used_today: aiUsedToday || 0 })
      });

      return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
    }

    // E. XỬ LÝ ĐĂNG XUẤT (Xóa current_token trên DB)
    if (action === 'logout') {
      await fetch(`${SUPABASE_URL}/rest/v1/profiles?current_token=eq.${token}`, {
        method: 'PATCH',
        headers: {
          'apikey': SUPABASE_SERVICE_ROLE_KEY,
          'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ current_token: null })
      });
      return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
    }

    // F. XỬ LÝ LẤY BẢNG XẾP HẠNG TOP 10 (ƯU TIÊN CẤP ĐỘ, HẠN DÙNG & ĐĂNG KÝ TRƯỚC)
    if (action === 'get_leaderboard') {
      const resLeaderboard = await fetch(`${SUPABASE_URL}/rest/v1/profiles?select=id,email,role,expire_date,created_at&limit=50`, {
        method: 'GET',
        headers: {
          'apikey': SUPABASE_SERVICE_ROLE_KEY,
          'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
        }
      });
      const leaderboardData = await resLeaderboard.json();

      const roleWeight = { 'SVIP': 4, 'VIP': 3, 'FREE': 2, 'GUEST': 1 };
      
      const sortedList = (Array.isArray(leaderboardData) ? leaderboardData : [])
        .map(user => ({
          ...user,
          effectiveRole: getEffectiveRole(user)
        }))
        .sort((a, b) => {
          // 1. Ưu tiên cấp độ thực tế (SVIP > VIP > FREE > GUEST)
          const weightDiff = (roleWeight[b.effectiveRole] || 1) - (roleWeight[a.effectiveRole] || 1);
          if (weightDiff !== 0) return weightDiff;

          // 2. Cùng cấp: Ưu tiên người còn nhiều ngày hiệu lực hơn
          const expA = a.expire_date ? new Date(a.expire_date).getTime() : 0;
          const expB = b.expire_date ? new Date(b.expire_date).getTime() : 0;
          if (expA !== expB) return expB - expA;

          // 3. Cùng ngày hết hạn: Ưu tiên người tạo tài khoản trước
          const timeA = a.created_at ? new Date(a.created_at).getTime() : 0;
          const timeB = b.created_at ? new Date(b.created_at).getTime() : 0;
          return timeA - timeB;
        })
        .slice(0, 10);

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ leaderboard: sortedList })
      };
    }

    // D. XỬ LÝ ĐĂNG NHẬP MẶC ĐỊNH (LOGIN)
    const resAuth = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'apikey': SUPABASE_ANON_KEY },
        body: JSON.stringify({ email, password })
    });
    
    const authData = await resAuth.json();
    if (!resAuth.ok) {
        return { statusCode: 400, headers, body: JSON.stringify({ message: 'Email hoặc mật khẩu không đúng' }) };
    }

    // Lấy thông tin profile kiểm tra vi phạm & thời hạn khóa
    const resProfile = await fetch(`${SUPABASE_URL}/rest/v1/profiles?id=eq.${authData.user.id}&select=role,expire_date,ai_used_today,device_switch_count,last_switch_date,locked_until`, {
        method: 'GET',
        headers: {
            'apikey': SUPABASE_SERVICE_ROLE_KEY,
            'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
        }
    });
    const profiles = await resProfile.json();
    const profile = (profiles && profiles.length > 0) ? profiles[0] : {};
    profile.id = authData.user.id;

    // 🟢 1. KIỂM TRA TÀI KHOẢN BỊ KHÓA
    if (profile.locked_until && new Date().getTime() < new Date(profile.locked_until).getTime()) {
        const lockDateStr = new Date(profile.locked_until).toLocaleDateString('vi-VN');
        return { 
          statusCode: 403, 
          headers, 
          body: JSON.stringify({ 
            message: `Tài khoản bị tạm khóa đến ngày ${lockDateStr} do vi phạm đổi thiết bị quá 5 lần/ngày.` 
          }) 
        };
    }

    // 🟢 2. TÍNH SỐ LẦN ĐỔI THIẾT BỊ TRONG NGÀY
    const todayStr = new Date().toISOString().slice(0, 10);
    let switchCount = profile.last_switch_date === todayStr ? (profile.device_switch_count || 0) + 1 : 1;

    // 🟢 3. XỬ LÝ VI PHẠM (Đổi máy > 5 lần/ngày -> Khóa 30 ngày)
    if (switchCount > 5) {
        const lockedUntil = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
        await fetch(`${SUPABASE_URL}/rest/v1/profiles?id=eq.${authData.user.id}`, {
            method: 'PATCH',
            headers: {
                'apikey': SUPABASE_SERVICE_ROLE_KEY,
                'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                locked_until: lockedUntil,
                device_switch_count: switchCount,
                last_switch_date: todayStr
            })
        });

        const lockDateStr = new Date(lockedUntil).toLocaleDateString('vi-VN');
        return { 
          statusCode: 403, 
          headers, 
          body: JSON.stringify({ 
            message: `Tài khoản đã đổi thiết bị vượt quá 5 lần/ngày và bị khóa 1 tháng (đến ${lockDateStr}).` 
          }) 
        };
    }

    // 🟢 4. LƯU TOKEN MỚI VÀ CẬP NHẬT LỢT ĐỔI MÁY
    await fetch(`${SUPABASE_URL}/rest/v1/profiles?id=eq.${authData.user.id}`, {
        method: 'PATCH',
        headers: {
            'apikey': SUPABASE_SERVICE_ROLE_KEY,
            'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            current_token: authData.access_token,
            device_switch_count: switchCount,
            last_switch_date: todayStr
        })
    });

    const effectiveRole = getEffectiveRole(profile);
    const remainingSwitches = 5 - switchCount;

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        token: authData.access_token,
        role: effectiveRole,
        warning: `⚠️ Bạn đã đăng nhập/đổi thiết bị ${switchCount}/5 lần trong hôm nay (Còn ${remainingSwitches} lần). Nếu vượt quá 5 lần, tài khoản sẽ bị khóa 1 tháng!`,
        user: { 
          id: authData.user.id, 
          email: authData.user.email,
          role: effectiveRole,
          expireDate: profile.expire_date || null,
          aiUsedToday: profile.ai_used_today || 0
        }
      })
    };
  } catch (err) {
    return { statusCode: 500, headers, body: JSON.stringify({ message: err.message }) };
  }
};
