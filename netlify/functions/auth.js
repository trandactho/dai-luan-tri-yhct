const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

exports.handler = async (event) => {
  // 1. CẤU HÌNH CORS CHO PHÉP LOCALHOST:8080 VÀ DOMAIN THẬT
  const allowedOrigins = ["https://dailuantriyhct.com", "http://localhost:8888", "http://localhost:8080"];
  const requestOrigin = event.headers.origin || event.headers.Origin;

  const headers = {
    'Access-Control-Allow-Origin': allowedOrigins.includes(requestOrigin) ? requestOrigin : '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // 2. XỬ LÝ PREFLIGHT REQUEST (OPTIONS)
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ message: 'Method Not Allowed' }) };
  }

  try {
    const { action, email, password } = JSON.parse(event.body || '{}');

    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
        return { statusCode: 500, headers, body: JSON.stringify({ message: 'Chưa cấu hình Supabase ENV.' }) };
    }

    // 3. XỬ LÝ ĐĂNG KÝ TÀI KHOẢN (REGISTER)
    if (action === 'register') {
      const resReg = await fetch(`${SUPABASE_URL}/auth/v1/signup`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'apikey': SUPABASE_ANON_KEY
          },
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

    // 4. XỬ LÝ ĐĂNG NHẬP (LOGIN)
    const resAuth = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'apikey': SUPABASE_ANON_KEY
        },
        body: JSON.stringify({ email, password })
    });
    
    const authData = await resAuth.json();
    if (!resAuth.ok) {
        return { statusCode: 400, headers, body: JSON.stringify({ message: 'Email hoặc mật khẩu không đúng' }) };
    }

    // 5. LẤY QUYỀN (ROLE) TỪ BẢNG PROFILES BẰNG SERVICE_ROLE_KEY (VƯỢT QUA RLS)
    const resProfile = await fetch(`${SUPABASE_URL}/rest/v1/profiles?id=eq.${authData.user.id}&select=role`, {
        method: 'GET',
        headers: {
            'apikey': SUPABASE_SERVICE_ROLE_KEY,
            'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
        }
    });
    const profiles = await resProfile.json();
    const userRole = (profiles && profiles.length > 0) ? profiles[0].role : 'FREE';

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        token: authData.access_token,
        role: userRole,
        user: { id: authData.user.id, email: authData.user.email }
      })
    };
  } catch (err) {
    return { statusCode: 500, headers, body: JSON.stringify({ message: err.message }) };
  }
};
