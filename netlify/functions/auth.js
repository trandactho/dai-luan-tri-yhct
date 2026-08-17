const { createClient } = require('@supabase/supabase-js');

// Lấy chìa khóa API bảo mật đã lưu trên Netlify
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

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

  // 2. XỬ LÝ PREFLIGHT REQUEST (OPTIONS) CỦA TRÌNH DUYỆT
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ message: 'Method Not Allowed' }) };
  }

  try {
    const { action, email, password } = JSON.parse(event.body || '{}');

    // 3. XỬ LÝ ĐĂNG KÝ TÀI KHOẢN (REGISTER)
    if (action === 'register') {
      const { data: regData, error: regError } = await supabase.auth.signUp({ email, password });
      if (regError) {
        return { statusCode: 400, headers, body: JSON.stringify({ message: regError.message }) };
      }
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ message: 'Đăng ký thành công', user: regData.user })
      };
    }

    // 4. XỬ LÝ ĐĂNG NHẬP (LOGIN)
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({ email, password });
    if (authError) {
      return { statusCode: 400, headers, body: JSON.stringify({ message: 'Email hoặc mật khẩu không đúng' }) };
    }

    // Lấy quyền (role) từ bảng profiles
    const { data: profile } = await supabase.from('profiles').select('role').eq('id', authData.user.id).single();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        token: authData.session.access_token,
        role: profile?.role || 'FREE',
        user: { id: authData.user.id, email: authData.user.email }
      })
    };
  } catch (err) {
    return { statusCode: 500, headers, body: JSON.stringify({ message: err.message }) };
  }
};
