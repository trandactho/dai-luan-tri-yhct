const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Hàm hỗ trợ kiểm tra thời hạn gói cước
function getEffectiveRole(profile) {
    let role = profile?.role || 'FREE';
    if (role !== 'FREE' && role !== 'GUEST' && profile?.expire_date) {
        if (new Date().getTime() > new Date(profile.expire_date).getTime()) {
            return 'FREE';
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

      // Truy vấn profiles theo id thay vì email
      const resProfile = await fetch(`${SUPABASE_URL}/rest/v1/profiles?id=eq.${userData.id}&select=role,expire_date,ai_used_today,current_token`, {
        method: 'GET',
        headers: {
          'apikey': SUPABASE_SERVICE_ROLE_KEY,
          'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
        }
      });
      const profiles = await resProfile.json();
      const profile = (profiles && profiles.length > 0) ? profiles[0] : {};

      // Chặn nếu token trên DB khác token hiện tại
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

    // GHI NHẬN TOKEN MỚI: Cập nhật token vào bảng profiles theo id (UUID)
    await fetch(`${SUPABASE_URL}/rest/v1/profiles?id=eq.${authData.user.id}`, {
        method: 'PATCH',
        headers: {
            'apikey': SUPABASE_SERVICE_ROLE_KEY,
            'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ current_token: authData.access_token })
    });

    const resProfile = await fetch(`${SUPABASE_URL}/rest/v1/profiles?id=eq.${authData.user.id}&select=role,expire_date,ai_used_today`, {
        method: 'GET',
        headers: {
            'apikey': SUPABASE_SERVICE_ROLE_KEY,
            'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
        }
    });
    const profiles = await resProfile.json();
    const profile = (profiles && profiles.length > 0) ? profiles[0] : {};
    const effectiveRole = getEffectiveRole(profile);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        token: authData.access_token,
        role: effectiveRole,
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
