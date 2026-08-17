const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

exports.handler = async function(event) {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
    };

    if (event.httpMethod === 'OPTIONS') return { statusCode: 200, headers, body: '' };

    try {
        const { action, email, otp, newPass } = JSON.parse(event.body || '{}');

        if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
            return { statusCode: 500, headers, body: JSON.stringify({ error: 'Chưa cấu hình Supabase ENV.' }) };
        }

        // --- YÊU CẦU MÃ OTP ---
        if (action === 'request_otp') {
            if (!email) return { statusCode: 400, headers, body: JSON.stringify({ error: 'Thiếu email.' }) };

            const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
            const expiresAt = new Date(Date.now() + 10 * 60 * 1000).toISOString(); // Hạn 10 phút

            // Lưu OTP vào bảng user_otps
            const resDb = await fetch(`${SUPABASE_URL}/rest/v1/user_otps`, {
                method: 'POST',
                headers: {
                    'apikey': SUPABASE_ANON_KEY,
                    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                    'Content-Type': 'application/json',
                    'Prefer': 'return=minimal'
                },
                body: JSON.stringify({
                    email: email,
                    otp_code: generatedOtp,
                    expires_at: expiresAt
                })
            });

            if (!resDb.ok) {
                return { statusCode: 500, headers, body: JSON.stringify({ error: 'Không thể tạo mã OTP.' }) };
            }

            return { 
                statusCode: 200, 
                headers, 
                body: JSON.stringify({ message: 'Gửi OTP thành công.', otp_demo: generatedOtp }) 
            };
        }

        // --- XÁC MINH OTP VÀ ĐỔI MẬT KHẨU ---
        if (action === 'verify_otp') {
            if (!email || !otp || !newPass) {
                return { statusCode: 400, headers, body: JSON.stringify({ error: 'Thông tin không đầy đủ.' }) };
            }

            // Kiểm tra OTP trong CSDL
            const checkRes = await fetch(`${SUPABASE_URL}/rest/v1/user_otps?email=eq.${email}&otp_code=eq.${otp}&is_used=eq.false&select=*`, {
                headers: {
                    'apikey': SUPABASE_ANON_KEY,
                    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
                }
            });
            const otps = await checkRes.json();

            if (!otps || otps.length === 0) {
                return { statusCode: 400, headers, body: JSON.stringify({ error: 'Mã OTP không đúng hoặc đã dùng.' }) };
            }

            // Cập nhật mật khẩu người dùng
            await fetch(`${SUPABASE_URL}/rest/v1/users?email=eq.${email}`, {
                method: 'PATCH',
                headers: {
                    'apikey': SUPABASE_ANON_KEY,
                    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ password_hash: newPass })
            });

            return { statusCode: 200, headers, body: JSON.stringify({ message: 'Đổi mật khẩu thành công.' }) };
        }

        return { statusCode: 400, headers, body: JSON.stringify({ error: 'Hành động không hợp lệ.' }) };

    } catch (err) {
        return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
    }
};
