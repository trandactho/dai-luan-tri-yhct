const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Hạn mức lượt AI theo ngày cho từng Cấp độ
const ROLE_QUOTAS = {
    GUEST: 1,
    FREE: 3,
    VIP: 30,
    SVIP: 99
};

// Khống chế độ dài Token phản hồi AI tối đa theo Cấp độ
const ROLE_MAX_TOKENS = {
    GUEST: 800,
    FREE: 1000,
    VIP: 2000,
    SVIP: 2500
};

exports.handler = async function(event) {
    const allowedOrigins = ["https://dailuantriyhct.com", "http://localhost:8888", "http://localhost:8080"];
    const requestOrigin = event.headers.origin || event.headers.Origin;

        const headers = {
        'Access-Control-Allow-Origin': allowedOrigins.includes(requestOrigin) ? requestOrigin : '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, authorization, X-Member-ID, x-member-id',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
    };


    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    try {
        const authHeader = event.headers.authorization || event.headers.Authorization || '';
        const token = authHeader.replace(/^Bearer\s+/i, '').trim();

        let userRole = 'GUEST';
        let userId = null;
        let userEmail = null;
        let aiUsedToday = 0;
        let expireDate = null;

        // 1. XÁC THỰC TÀI KHOẢN TRỰC TIẾP TỪ SUPABASE
        if (token && token !== 'null' && token !== 'undefined') {
            const resUser = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
                headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${token}` }
            });
            
            if (resUser.ok) {
                const userData = await resUser.json();
                userId = userData.id;
                userEmail = userData.email;

                // Lấy Profile từ CSDL bằng email để đồng bộ cấu trúc với auth.js
                const resProfile = await fetch(`${SUPABASE_URL}/rest/v1/profiles?email=eq.${userEmail}&select=role,expire_date,ai_used_today`, {
                    headers: {
                        'apikey': SUPABASE_SERVICE_ROLE_KEY,
                        'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
                    }
                });
                
                if (resProfile.ok) {
                    const profiles = await resProfile.json();
                    if (profiles && profiles[0]) {
                        userRole = profiles[0].role || 'FREE';
                        aiUsedToday = profiles[0].ai_used_today || 0;
                        expireDate = profiles[0].expire_date;

                        // Kiểm tra hết hạn gói VIP/SVIP -> Giảm về FREE
                        if (userRole !== 'FREE' && userRole !== 'GUEST' && expireDate) {
                            if (new Date().getTime() > new Date(expireDate).getTime()) {
                                userRole = 'FREE';
                            }
                        }
                    }
                }
            }
        }

        const { prompt, image, source, max_tokens: reqMaxTokens } = JSON.parse(event.body || '{}');

        // 2. PHÂN QUYỀN VỌNG CHẨN (Yêu cầu ít nhất FREE)
        if (source === 'vongchan' && userRole === 'GUEST') {
            return {
                statusCode: 403,
                headers,
                body: JSON.stringify({ error: 'Tính năng Soi ảnh Vọng Chẩn yêu cầu đăng nhập tài khoản.' })
            };
        }

        // 3. KIỂM TRA HẠN MỨC QUOTA TRỰC TIẾP Ở BACKEND
        const maxQuota = ROLE_QUOTAS[userRole] || 1;
        if (aiUsedToday >= maxQuota) {
            return {
                statusCode: 429,
                headers,
                body: JSON.stringify({ 
                    error: `Bạn đã sử dụng hết hạn mức AI hôm nay (${aiUsedToday}/${maxQuota} lượt). Vui lòng nâng cấp tài khoản để tiếp tục.` 
                })
            };
        }

        if (!prompt || prompt.trim().length === 0) {
            return { statusCode: 400, headers, body: JSON.stringify({ error: 'Nội dung câu hỏi không được để trống.' }) };
        }

        // 4. LẤY MÁY CHỦ API AI & CẤU HÌNH TOKENS THEO CẤP
        const primaryKey = process.env.PRIMARY_API_KEY || process.env.AI_API_KEY;
        const backupKey  = process.env.BACKUP_API_KEY;
        const quizKey    = process.env.QUIZ_API_KEY;
        const searchKey  = process.env.SEARCH_API_KEY;

        let keysToTry = [];
        if (source === 'assistant' || source === 'vongchan') keysToTry = [primaryKey, backupKey];
        else if (source === 'quiz') keysToTry = [quizKey, primaryKey];
        else keysToTry = [searchKey, backupKey];

        keysToTry = [...new Set(keysToTry.filter(Boolean))];

        if (keysToTry.length === 0) {
            return { statusCode: 500, headers, body: JSON.stringify({ error: 'Cấu hình API Key trên máy chủ chưa hoàn tất.' }) };
        }

        const models = ['gemini-1.5-flash', 'gemini-1.5-pro'];
        
        // Giới hạn max_tokens theo quyền nhưng không vượt quá trần quy định của cấp
        const roleMaxTokens = ROLE_MAX_TOKENS[userRole] || 1000;
        const maxTokens = reqMaxTokens ? Math.min(Number(reqMaxTokens), roleMaxTokens) : roleMaxTokens;

        const partsPayload = [];
        if (image && typeof image === 'string' && image.startsWith('data:image')) {
            const matches = image.match(/^data:(image\/\w+);base64,(.+)$/);
            if (matches && matches.length === 3) {
                partsPayload.push({ inline_data: { mime_type: matches[1], data: matches[2] } });
            }
        }

        partsPayload.push({
            text: "Bạn là chuyên gia Y HỌC CỔ TRUYỀN Đại Luận Trị. Hãy trả lời chuẩn xác, khoa học: " + prompt
        });

        // 5. GỌI GEMINI API
        for (const apiKey of keysToTry) {
            for (const model of models) {
                try {
                    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey.trim()}`;
                    const response = await fetch(url, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ 
                            contents: [{ parts: partsPayload }],
                            generationConfig: { maxOutputTokens: maxTokens }
                        })
                    });

                    const data = await response.json();

                    if (response.ok && data.candidates?.[0]?.content?.parts?.[0]?.text) {
                        
                        // 6. CỘNG VÀ ĐỒNG BỘ LƯỢT DÙNG AI VÀO DATABASE BẰNG EMAIL
                        if (userEmail) {
                            await fetch(`${SUPABASE_URL}/rest/v1/profiles?email=eq.${userEmail}`, {
                                method: 'PATCH',
                                headers: {
                                    'apikey': SUPABASE_SERVICE_ROLE_KEY,
                                    'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ ai_used_today: aiUsedToday + 1 })
                            });
                        }

                        return {
                            statusCode: 200,
                            headers,
                            body: JSON.stringify({ 
                                reply: data.candidates[0].content.parts[0].text,
                                aiUsedToday: aiUsedToday + 1,
                                maxQuota: maxQuota
                            })
                        };
                    }
                } catch (err) {
                    // Tiếp tục thử key/model backup
                }
            }
        }

        return { statusCode: 503, headers, body: JSON.stringify({ error: 'Hệ thống AI đang quá tải. Vui lòng thử lại sau giây lát.' }) };

    } catch (error) {
        return { statusCode: 500, headers, body: JSON.stringify({ error: 'Lỗi xử lý hệ thống nội bộ: ' + error.message }) };
    }
};
