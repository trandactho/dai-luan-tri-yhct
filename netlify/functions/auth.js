const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Hàm hỗ trợ kiểm tra thời hạn & TỰ ĐỘNG HẠ CẤP TRỰC TIẾP TRONG CSDL
async function getEffectiveRole(profile) {
    let role = profile?.role || 'FREE';
    
    if (role !== 'FREE' && role !== 'GUEST' && profile?.expire_date) {
        let expStr = typeof profile.expire_date === 'string' ? profile.expire_date.replace(' ', 'T') : profile.expire_date;
        
        if (typeof expStr === 'string' && !expStr.endsWith('Z') && !expStr.includes('+')) {
            expStr += 'Z';
        }

        if (new Date().getTime() > new Date(expStr).getTime()) {
            role = 'FREE';
            profile.role = 'FREE';

            const serviceKey = SUPABASE_SERVICE_ROLE_KEY;
            if (profile.id && serviceKey) {
                try {
                    const resPatch = await fetch(`${SUPABASE_URL}/rest/v1/profiles?id=eq.${profile.id}`, {
                        method: 'PATCH',
                        headers: {
                            'apikey': serviceKey,
                            'Authorization': `Bearer ${serviceKey}`,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ role: 'FREE', expire_date: null })
                    });
                    if (!resPatch.ok) {
                        const errBody = await resPatch.text();
                        console.error('❌ Lỗi PATCH hạ cấp Supabase:', resPatch.status, errBody);
                    }
                } catch (err) {
                    console.error('❌ Lỗi kết nối CSDL khi tự động hạ cấp:', err.message);
                }
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

  const serviceKey = SUPABASE_SERVICE_ROLE_KEY;
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY || !serviceKey) {
      console.error("❌ Thiếu biến môi trường SUPABASE_URL, SUPABASE_ANON_KEY hoặc SUPABASE_SERVICE_ROLE_KEY");
      return { statusCode: 500, headers, body: JSON.stringify({ message: 'Chưa cấu hình đủ biến môi trường trên Server.' }) };
  }

  try {
    let bodyData = {};
    try {
        bodyData = JSON.parse(event.body || '{}');
    } catch (parseErr) {
        return { statusCode: 400, headers, body: JSON.stringify({ message: 'Định dạng JSON gửi lên không hợp lệ.' }) };
    }

    const { action, email, password, token } = bodyData;

    // A. XỬ LÝ ĐĂNG KÝ TÀI KHOẢN
    if (action === 'register') {
      try {
        const resReg = await fetch(`${SUPABASE_URL}/auth/v1/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'apikey': SUPABASE_ANON_KEY },
            body: JSON.stringify({ email, password })
        });
        
        const regData = await resReg.json();
        if (!resReg.ok) {
            return { statusCode: resReg.status || 400, headers, body: JSON.stringify({ message: regData.msg || regData.error_description || 'Đăng ký thất bại', details: regData }) };
        }

        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ message: 'Đăng ký thành công', user: regData.user || regData })
        };
      } catch (err) {
        console.error("❌ Lỗi register:", err);
        return { statusCode: 500, headers, body: JSON.stringify({ message: 'Lỗi server khi đăng ký: ' + err.message }) };
      }
    }

    // B. XỬ LÝ XÁC THỰC TOKEN KHI REFRESH TRANG (VERIFY TOKEN)
    if (action === 'verify_token') {
      try {
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
            'apikey': serviceKey,
            'Authorization': `Bearer ${serviceKey}`
          }
        });
        const profiles = await resProfile.json();
        
        if (!resProfile.ok) {
          console.error("❌ Lỗi query profile (verify_token):", profiles);
          return { statusCode: 500, headers, body: JSON.stringify({ message: 'Lỗi truy vấn hồ sơ người dùng', details: profiles }) };
        }

        const profile = (Array.isArray(profiles) && profiles.length > 0) ? profiles[0] : {};
        profile.id = userData.id;

        if (profile.locked_until && new Date().getTime() < new Date(profile.locked_until).getTime()) {
          const lockDateStr = new Date(profile.locked_until).toLocaleDateString('vi-VN');
          return { 
            statusCode: 403, 
            headers, 
            body: JSON.stringify({ message: `Tài khoản đã bị tạm khóa đến ngày ${lockDateStr} do vi phạm đổi thiết bị.` }) 
          };
        }

        if (profile.current_token && profile.current_token !== token) {
          return { 
            statusCode: 401, 
            headers, 
            body: JSON.stringify({ message: 'Tài khoản đã được đăng nhập ở một thiết bị khác' }) 
          };
        }

        const effectiveRole = await getEffectiveRole(profile);

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
      } catch (err) {
        console.error("❌ Lỗi verify_token:", err);
        return { statusCode: 500, headers, body: JSON.stringify({ message: 'Lỗi hệ thống xác thực: ' + err.message }) };
      }
    }

    // C. XỬ LÝ ĐỒNG BỘ QUOTA AI
    if (action === 'sync_quota') {
      try {
        const resUser = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
          method: 'GET',
          headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${token}` }
        });
        const userData = await resUser.json();
        if (!resUser.ok || !userData.id) {
          return { statusCode: 401, headers, body: JSON.stringify({ message: 'Token không hợp lệ' }) };
        }

        const resProfile = await fetch(`${SUPABASE_URL}/rest/v1/profiles?id=eq.${userData.id}&select=ai_used_today`, {
          method: 'GET',
          headers: { 'apikey': serviceKey, 'Authorization': `Bearer ${serviceKey}` }
        });
        const profiles = await resProfile.json();
        const currentUsed = profiles[0]?.ai_used_today || 0;

        const resSync = await fetch(`${SUPABASE_URL}/rest/v1/profiles?id=eq.${userData.id}`, {
          method: 'PATCH',
          headers: {
            'apikey': serviceKey,
            'Authorization': `Bearer ${serviceKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ ai_used_today: currentUsed + 1 })
        });

        if (!resSync.ok) {
          return { statusCode: 500, headers, body: JSON.stringify({ message: 'Lỗi đồng bộ Quota' }) };
        }

        return { statusCode: 200, headers, body: JSON.stringify({ success: true, aiUsedToday: currentUsed + 1 }) };
      } catch (err) {
        return { statusCode: 500, headers, body: JSON.stringify({ message: err.message }) };
      }
    }

    // E. XỬ LÝ ĐĂNG XUẤT
    if (action === 'logout') {
      try {
        await fetch(`${SUPABASE_URL}/rest/v1/profiles?current_token=eq.${token}`, {
          method: 'PATCH',
          headers: {
            'apikey': serviceKey,
            'Authorization': `Bearer ${serviceKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ current_token: null })
        });
        return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
      } catch (err) {
        console.error("❌ Lỗi logout:", err);
        return { statusCode: 500, headers, body: JSON.stringify({ message: 'Lỗi đăng xuất: ' + err.message }) };
      }
    }

    // F. XỬ LÝ LẤY BẢNG XẾP HẠNG TOP 10
    if (action === 'get_leaderboard') {
      try {
        const resLeaderboard = await fetch(`${SUPABASE_URL}/rest/v1/profiles?select=id,email,role,expire_date,created_at&limit=50`, {
          method: 'GET',
          headers: {
            'apikey': serviceKey,
            'Authorization': `Bearer ${serviceKey}`
          }
        });
        
        const leaderboardData = await resLeaderboard.json();

        if (!resLeaderboard.ok || !Array.isArray(leaderboardData)) {
          return { 
            statusCode: resLeaderboard.status || 500, 
            headers, 
            body: JSON.stringify({ message: "Lỗi truy vấn CSDL Supabase khi lấy bảng xếp hạng" }) 
          };
        }

        for (let user of leaderboardData) {
          user.effectiveRole = await getEffectiveRole(user);
          
          let timeText = 'Vĩnh viễn';
          if (user.effectiveRole === 'FREE' || user.effectiveRole === 'GUEST') {
              timeText = 'Miễn phí';
          } else if (user.expire_date) {
              const expStr = typeof user.expire_date === 'string' ? user.expire_date.replace(' ', 'T') : user.expire_date;
              const diffMs = new Date(expStr).getTime() - Date.now();
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

            const expStrA = a.expire_date ? a.expire_date.replace(' ', 'T') : 0;
            const expStrB = b.expire_date ? b.expire_date.replace(' ', 'T') : 0;
            const expA = expStrA ? new Date(expStrA).getTime() : 0;
            const expB = expStrB ? new Date(expStrB).getTime() : 0;
            if (expA !== expB) return expB - expA;

            const timeA = a.created_at ? new Date(a.created_at.replace(' ', 'T')).getTime() : 0;
            const timeB = b.created_at ? new Date(b.created_at.replace(' ', 'T')).getTime() : 0;
            return timeA - timeB;
          })
          .slice(0, 10);

        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ leaderboard: sortedList })
        };
      } catch (err) {
        return { statusCode: 500, headers, body: JSON.stringify({ message: "Lỗi xử lý bảng xếp hạng: " + err.message }) };
      }
    }

    // G. XỬ LÝ NÂNG CẤP / GIA HẠN GÓI
    if (action === 'upgrade') {
      const adminSecret = event.headers['x-admin-secret'] || event.headers['X-Admin-Secret'];
      if (!process.env.ADMIN_SECRET_KEY || adminSecret !== process.env.ADMIN_SECRET_KEY) {
        return { 
          statusCode: 403, 
          headers, 
          body: JSON.stringify({ message: 'Từ chối truy cập: Thiếu hoặc sai Admin Secret Key.' }) 
        };
      }
      try {
        const { targetEmail, newRole, addDays } = bodyData; 
        if (!targetEmail || !newRole || !addDays) {
          return { statusCode: 400, headers, body: JSON.stringify({ message: 'Thiếu thông tin nâng cấp (targetEmail, newRole, addDays).' }) };
        }

        const resFind = await fetch(`${SUPABASE_URL}/rest/v1/profiles?email=eq.${encodeURIComponent(targetEmail)}&select=*`, {
          method: 'GET',
          headers: { 'apikey': serviceKey, 'Authorization': `Bearer ${serviceKey}` }
        });
        const profiles = await resFind.json();
        if (!resFind.ok || !profiles || profiles.length === 0) {
          return { statusCode: 404, headers, body: JSON.stringify({ message: 'Không tìm thấy tài khoản trong CSDL.' }) };
        }

        const profile = profiles[0];
        let currentExpire = profile.expire_date ? new Date(profile.expire_date.replace(' ', 'T')).getTime() : 0;
        let now = Date.now();

        let baseTime = (currentExpire > now) ? currentExpire : now;
        let newExpireDate = new Date(baseTime + Number(addDays) * 24 * 60 * 60 * 1000).toISOString();

        const roleWeight = { 'SVIP': 4, 'VIP': 3, 'FREE': 2, 'GUEST': 1 };
        let currentRole = profile.role || 'FREE';
        
        let finalRole = (roleWeight[newRole] > roleWeight[currentRole]) ? newRole : currentRole;

        const resUpdate = await fetch(`${SUPABASE_URL}/rest/v1/profiles?id=eq.${profile.id}`, {
          method: 'PATCH',
          headers: {
            'apikey': serviceKey,
            'Authorization': `Bearer ${serviceKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            role: finalRole,
            expire_date: newExpireDate
          })
        });

        if (!resUpdate.ok) {
          const errText = await resUpdate.text();
          return { statusCode: 500, headers, body: JSON.stringify({ message: 'Lỗi cập nhật CSDL', details: errText }) };
        }

        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({
            success: true,
            message: `Gia hạn thành công! Tài khoản đang ở cấp ${finalRole}, hạn sử dụng đến ${newExpireDate}`
          })
        };
      } catch (err) {
        console.error("❌ Lỗi upgrade:", err);
        return { statusCode: 500, headers, body: JSON.stringify({ message: 'Lỗi server khi nâng cấp: ' + err.message }) };
      }
    }

    // D. XỬ LÝ ĐĂNG NHẬP MẶC ĐỊNH (LOGIN)
    try {
      const resAuth = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'apikey': SUPABASE_ANON_KEY },
          body: JSON.stringify({ email, password })
      });
      
      const authData = await resAuth.json();
      if (!resAuth.ok) {
          return { statusCode: 400, headers, body: JSON.stringify({ message: authData.error_description || 'Email hoặc mật khẩu không đúng' }) };
      }

      const resProfile = await fetch(`${SUPABASE_URL}/rest/v1/profiles?id=eq.${authData.user.id}&select=role,expire_date,ai_used_today,device_switch_count,last_switch_date,locked_until`, {
          method: 'GET',
          headers: {
              'apikey': serviceKey,
              'Authorization': `Bearer ${serviceKey}`
          }
      });
      const profiles = await resProfile.json();
      if (!resProfile.ok) {
        console.error("❌ Lỗi query profile đăng nhập:", profiles);
        return { statusCode: 500, headers, body: JSON.stringify({ message: 'Lỗi truy vấn hồ sơ khi đăng nhập', details: profiles }) };
      }

      const profile = (Array.isArray(profiles) && profiles.length > 0) ? profiles[0] : {};
      profile.id = authData.user.id;

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

      const todayStr = new Date().toISOString().slice(0, 10);
      let switchCount = profile.last_switch_date === todayStr ? (profile.device_switch_count || 0) + 1 : 1;

      if (switchCount > 5) {
          const lockedUntil = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
          await fetch(`${SUPABASE_URL}/rest/v1/profiles?id=eq.${authData.user.id}`, {
              method: 'PATCH',
              headers: {
                  'apikey': serviceKey,
                  'Authorization': `Bearer ${serviceKey}`,
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

      await fetch(`${SUPABASE_URL}/rest/v1/profiles?id=eq.${authData.user.id}`, {
          method: 'PATCH',
          headers: {
              'apikey': serviceKey,
              'Authorization': `Bearer ${serviceKey}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 
              current_token: authData.access_token,
              device_switch_count: switchCount,
              last_switch_date: todayStr
          })
      });

      const effectiveRole = await getEffectiveRole(profile);
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
      console.error("❌ Lỗi login mặc định:", err);
      return { statusCode: 500, headers, body: JSON.stringify({ message: 'Lỗi đăng nhập hệ thống: ' + err.message }) };
    }
  } catch (err) {
    console.error("❌ Lỗi chưa phân loại (Handler Root):", err);
    return { statusCode: 500, headers, body: JSON.stringify({ message: err.message }) };
  }
};
