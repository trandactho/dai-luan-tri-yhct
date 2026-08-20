const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

function safeParseMs(dateVal) {
    if (!dateVal) return 0;
    const str = typeof dateVal === 'string' ? dateVal.replace(' ', 'T') : dateVal;
    const finalStr = (typeof str === 'string' && !str.endsWith('Z') && !str.includes('+')) ? str + 'Z' : str;
    const ms = new Date(finalStr).getTime();
    return isNaN(ms) ? 0 : ms;
}

async function getEffectiveRole(profile) {
    let role = profile?.role || 'FREE';
    
    if (role !== 'FREE' && role !== 'GUEST' && profile?.expire_date) {
        const expMs = safeParseMs(profile.expire_date);
        
        if (expMs > 0 && Date.now() > expMs) {
            role = 'FREE';
            profile.role = 'FREE';

            const serviceKey = SUPABASE_SERVICE_ROLE_KEY;
            if (profile.id && serviceKey) {
                try {
                    await fetch(`${SUPABASE_URL}/rest/v1/profiles?id=eq.${profile.id}`, {
                        method: 'PATCH',
                        headers: {
                            'apikey': serviceKey,
                            'Authorization': `Bearer ${serviceKey}`,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ role: 'FREE', expire_date: null })
                    });
                } catch (err) {
                    console.error('❌ Lỗi hạ cấp:', err.message);
                }
            }
        }
    }
    return role;
}

exports.handler = async (event) => {
  const allowedOrigins = ["https://dailuantriyhct.com", "http://localhost:8888", "http://localhost:8080"];
  const requestOrigin = event.headers.origin || event.headers.Origin;
  const userAgent = event.headers['user-agent'] || event.headers['User-Agent'] || 'unknown';

  const headers = {
    'Access-Control-Allow-Origin': allowedOrigins.includes(requestOrigin) ? requestOrigin : '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Admin-Secret',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') return { statusCode: 200, headers, body: '' };
  if (event.httpMethod !== 'POST') return { statusCode: 405, headers, body: JSON.stringify({ message: 'Method Not Allowed' }) };

  const serviceKey = SUPABASE_SERVICE_ROLE_KEY;
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY || !serviceKey) {
      return { statusCode: 500, headers, body: JSON.stringify({ message: 'Chưa cấu hình biến môi trường Server.' }) };
  }

  try {
    let bodyData = {};
    try { bodyData = JSON.parse(event.body || '{}'); } catch (e) {
        return { statusCode: 400, headers, body: JSON.stringify({ message: 'JSON không hợp lệ.' }) };
    }

    const { action, email, password, token } = bodyData;

    // A. REGISTER
    if (action === 'register') {
      try {
        const resReg = await fetch(`${SUPABASE_URL}/auth/v1/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'apikey': SUPABASE_ANON_KEY },
            body: JSON.stringify({ email, password })
        });
        const regData = await resReg.json();
        if (!resReg.ok) return { statusCode: resReg.status || 400, headers, body: JSON.stringify({ message: regData.msg || regData.error_description || 'Đăng ký thất bại' }) };
        return { statusCode: 200, headers, body: JSON.stringify({ message: 'Đăng ký thành công', user: regData.user || regData }) };
      } catch (err) {
        return { statusCode: 500, headers, body: JSON.stringify({ message: err.message }) };
      }
    }

    // B. VERIFY TOKEN
    if (action === 'verify_token') {
      try {
        const resUser = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
          method: 'GET',
          headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${token}` }
        });
        const userData = await resUser.json();
        if (!resUser.ok || !userData.id) return { statusCode: 401, headers, body: JSON.stringify({ message: 'Token hết hạn' }) };

        const resProfile = await fetch(`${SUPABASE_URL}/rest/v1/profiles?id=eq.${userData.id}&select=role,expire_date,ai_used_today,current_token,locked_until`, {
          method: 'GET',
          headers: { 'apikey': serviceKey, 'Authorization': `Bearer ${serviceKey}` }
        });
        const profiles = await resProfile.json();
        if (!resProfile.ok || !Array.isArray(profiles)) return { statusCode: 500, headers, body: JSON.stringify({ message: 'Lỗi hồ sơ' }) };

        const profile = profiles[0] || {};
        profile.id = userData.id;

        if (profile.locked_until && Date.now() < safeParseMs(profile.locked_until)) {
          const lockDateStr = new Date(safeParseMs(profile.locked_until)).toLocaleDateString('vi-VN');
          return { statusCode: 403, headers, body: JSON.stringify({ message: `Tài khoản bị khóa đến ngày ${lockDateStr}.` }) };
        }

        if (profile.current_token && profile.current_token !== token) {
          return { statusCode: 401, headers, body: JSON.stringify({ message: 'Tài khoản đang đăng nhập ở thiết bị khác' }) };
        }

        const effectiveRole = await getEffectiveRole(profile);
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ user: { id: userData.id, email: userData.email, role: effectiveRole, expireDate: profile.expire_date || null, aiUsedToday: profile.ai_used_today || 0 } })
        };
      } catch (err) {
        return { statusCode: 500, headers, body: JSON.stringify({ message: err.message }) };
      }
    }

    // C. SYNC QUOTA
    if (action === 'sync_quota') {
      try {
        const resUser = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
          method: 'GET',
          headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${token}` }
        });
        const userData = await resUser.json();
        if (!resUser.ok || !userData.id) return { statusCode: 401, headers, body: JSON.stringify({ message: 'Token không hợp lệ' }) };

        const resProfile = await fetch(`${SUPABASE_URL}/rest/v1/profiles?id=eq.${userData.id}&select=ai_used_today`, {
          method: 'GET',
          headers: { 'apikey': serviceKey, 'Authorization': `Bearer ${serviceKey}` }
        });
        const profiles = await resProfile.json();
        const currentUsed = (Array.isArray(profiles) && profiles[0]?.ai_used_today) || 0;

        await fetch(`${SUPABASE_URL}/rest/v1/profiles?id=eq.${userData.id}`, {
          method: 'PATCH',
          headers: { 'apikey': serviceKey, 'Authorization': `Bearer ${serviceKey}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({ ai_used_today: currentUsed + 1 })
        });

        return { statusCode: 200, headers, body: JSON.stringify({ success: true, aiUsedToday: currentUsed + 1 }) };
      } catch (err) {
        return { statusCode: 500, headers, body: JSON.stringify({ message: err.message }) };
      }
    }

    // D. LOGOUT
    if (action === 'logout') {
      try {
        if (token) {
          await fetch(`${SUPABASE_URL}/rest/v1/profiles?current_token=eq.${encodeURIComponent(token)}`, {
            method: 'PATCH',
            headers: { 'apikey': serviceKey, 'Authorization': `Bearer ${serviceKey}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({ current_token: null })
          });
        }
        return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
      } catch (err) {
        return { statusCode: 500, headers, body: JSON.stringify({ message: err.message }) };
      }
    }

    // E. LEADERBOARD
    if (action === 'get_leaderboard') {
      try {
        const resLeaderboard = await fetch(`${SUPABASE_URL}/rest/v1/profiles?select=id,email,role,expire_date,created_at&limit=50`, {
          method: 'GET',
          headers: { 'apikey': serviceKey, 'Authorization': `Bearer ${serviceKey}` }
        });
        const leaderboardData = await resLeaderboard.json();
        if (!resLeaderboard.ok || !Array.isArray(leaderboardData)) return { statusCode: 500, headers, body: JSON.stringify({ message: "Lỗi CSDL" }) };

        for (let user of leaderboardData) {
          user.effectiveRole = await getEffectiveRole(user);
          let timeText = 'Vĩnh viễn';
          if (user.effectiveRole === 'FREE' || user.effectiveRole === 'GUEST') timeText = 'Miễn phí';
          else if (user.expire_date) {
              const diffMs = safeParseMs(user.expire_date) - Date.now();
              const days = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
              timeText = days > 0 ? `Còn ${days} ngày` : 'Hết hạn';
          }
          user.remainingTimeText = timeText;
        }

        const roleWeight = { 'SVIP': 4, 'VIP': 3, 'FREE': 2, 'GUEST': 1 };
        const sortedList = leaderboardData
          .sort((a, b) => {
            const weightDiff = (roleWeight[b.effectiveRole] || 1) - (roleWeight[a.effectiveRole] || 1);
            if (weightDiff !== 0) return weightDiff;
            const expA = safeParseMs(a.expire_date), expB = safeParseMs(b.expire_date);
            if (expA !== expB) return expB - expA;
            return safeParseMs(a.created_at) - safeParseMs(b.created_at);
          })
          .slice(0, 10);

        return { statusCode: 200, headers, body: JSON.stringify({ leaderboard: sortedList }) };
      } catch (err) {
        return { statusCode: 500, headers, body: JSON.stringify({ message: err.message }) };
      }
    }

    // F. UPGRADE
    if (action === 'upgrade') {
      const adminSecret = event.headers['x-admin-secret'] || event.headers['X-Admin-Secret'];
      if (!process.env.ADMIN_SECRET_KEY || adminSecret !== process.env.ADMIN_SECRET_KEY) {
        return { statusCode: 403, headers, body: JSON.stringify({ message: 'Sai Admin Secret Key.' }) };
      }
      try {
        const { targetEmail, newRole, addDays } = bodyData; 
        if (!targetEmail || !newRole || !addDays) return { statusCode: 400, headers, body: JSON.stringify({ message: 'Thiếu thông tin.' }) };

        const resFind = await fetch(`${SUPABASE_URL}/rest/v1/profiles?email=eq.${encodeURIComponent(targetEmail)}&select=*`, {
          method: 'GET',
          headers: { 'apikey': serviceKey, 'Authorization': `Bearer ${serviceKey}` }
        });
        const profiles = await resFind.json();
        if (!resFind.ok || !Array.isArray(profiles) || profiles.length === 0) return { statusCode: 404, headers, body: JSON.stringify({ message: 'Không tìm thấy tài khoản.' }) };

        const profile = profiles[0];
        let currentExpire = safeParseMs(profile.expire_date);
        let baseTime = (currentExpire > Date.now()) ? currentExpire : Date.now();
        let newExpireDate = new Date(baseTime + Number(addDays) * 24 * 60 * 60 * 1000).toISOString();

        const roleWeight = { 'SVIP': 4, 'VIP': 3, 'FREE': 2, 'GUEST': 1 };
        let finalRole = (roleWeight[newRole] > roleWeight[profile.role || 'FREE']) ? newRole : (profile.role || 'FREE');

        await fetch(`${SUPABASE_URL}/rest/v1/profiles?id=eq.${profile.id}`, {
          method: 'PATCH',
          headers: { 'apikey': serviceKey, 'Authorization': `Bearer ${serviceKey}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({ role: finalRole, expire_date: newExpireDate })
        });

        return { statusCode: 200, headers, body: JSON.stringify({ success: true, message: `Gia hạn thành công cấp ${finalRole} đến ${newExpireDate}` }) };
      } catch (err) {
        return { statusCode: 500, headers, body: JSON.stringify({ message: err.message }) };
      }
    }

    // G. LOGIN (ĐÃ SỬA NHẬN DIỆN THIẾT BỊ BẰNG USER-AGENT)
    try {
      const resAuth = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'apikey': SUPABASE_ANON_KEY },
          body: JSON.stringify({ email, password })
      });
      
      const authData = await resAuth.json();
      if (!resAuth.ok) return { statusCode: 400, headers, body: JSON.stringify({ message: authData.error_description || 'Email hoặc mật khẩu không đúng' }) };

      const resProfile = await fetch(`${SUPABASE_URL}/rest/v1/profiles?id=eq.${authData.user.id}&select=role,expire_date,ai_used_today,device_switch_count,last_switch_date,locked_until,last_user_agent`, {
          method: 'GET',
          headers: { 'apikey': serviceKey, 'Authorization': `Bearer ${serviceKey}` }
      });
      const profiles = await resProfile.json();
      if (!resProfile.ok || !Array.isArray(profiles)) return { statusCode: 500, headers, body: JSON.stringify({ message: 'Lỗi hồ sơ' }) };

      const profile = profiles[0] || {};
      profile.id = authData.user.id;

      if (profile.locked_until && Date.now() < safeParseMs(profile.locked_until)) {
          const lockDateStr = new Date(safeParseMs(profile.locked_until)).toLocaleDateString('vi-VN');
          return { statusCode: 403, headers, body: JSON.stringify({ message: `Tài khoản bị tạm khóa đến ngày ${lockDateStr}.` }) };
      }

      const todayStr = new Date().toISOString().slice(0, 10);
      
      // Đăng nhập thiết bị mới thực sự khi User-Agent thay đổi
      let isNewDevice = profile.last_user_agent && profile.last_user_agent !== userAgent;
      let currentSwitches = profile.last_switch_date === todayStr ? (profile.device_switch_count || 0) : 0;
      let switchCount = isNewDevice ? currentSwitches + 1 : currentSwitches;

      if (switchCount > 5) {
          const lockedUntil = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
          await fetch(`${SUPABASE_URL}/rest/v1/profiles?id=eq.${authData.user.id}`, {
              method: 'PATCH',
              headers: { 'apikey': serviceKey, 'Authorization': `Bearer ${serviceKey}`, 'Content-Type': 'application/json' },
              body: JSON.stringify({ locked_until: lockedUntil, device_switch_count: switchCount, last_switch_date: todayStr })
          });

          const lockDateStr = new Date(safeParseMs(lockedUntil)).toLocaleDateString('vi-VN');
          return { statusCode: 403, headers, body: JSON.stringify({ message: `Tài khoản đổi thiết bị quá 5 lần/ngày và bị khóa đến ${lockDateStr}.` }) };
      }

      await fetch(`${SUPABASE_URL}/rest/v1/profiles?id=eq.${authData.user.id}`, {
          method: 'PATCH',
          headers: { 'apikey': serviceKey, 'Authorization': `Bearer ${serviceKey}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({ current_token: authData.access_token, last_user_agent: userAgent, device_switch_count: switchCount, last_switch_date: todayStr })
      });

      const effectiveRole = await getEffectiveRole(profile);

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          token: authData.access_token,
          role: effectiveRole,
          warning: isNewDevice ? `⚠️ Phát hiện đăng nhập từ thiết bị/trình duyệt mới (${switchCount}/5 lần hôm nay).` : null,
          user: { id: authData.user.id, email: authData.user.email, role: effectiveRole, expireDate: profile.expire_date || null, aiUsedToday: profile.ai_used_today || 0 }
        })
      };
    } catch (err) {
      return { statusCode: 500, headers, body: JSON.stringify({ message: 'Lỗi đăng nhập: ' + err.message }) };
    }
  } catch (err) {
    return { statusCode: 500, headers, body: JSON.stringify({ message: err.message }) };
  }
};
