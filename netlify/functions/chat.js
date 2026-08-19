const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const ROLE_QUOTAS = { GUEST: 1, FREE: 3, VIP: 30, SVIP: 99 };
const ROLE_MAX_TOKENS = { GUEST: 800, FREE: 1000, VIP: 2000, SVIP: 2500 };

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
        let userEmail = null;
        let aiUsedToday = 0;

        // 1. XÁC THỰC AN TOÀN (Không làm sập app nếu Supabase lỗi)
        if (token && token !== 'null' && token !== 'undefined' && SUPABASE_URL && SUPABASE_ANON_KEY) {
            try {
                const resUser = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
                    headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': `Bearer ${token}` }
                });
                
                if (resUser.ok) {
                    const userData = await resUser.json();
                    userEmail = userData.email;

                    if (SUPABASE_SERVICE_ROLE_KEY) {
                        const resProfile = await fetch(`${SUPABASE_URL}/rest/v1/profiles?email=eq.${userEmail}&select=role,expire_date,ai_used_today`, {
                            headers: { 'apikey': SUPABASE_SERVICE_ROLE_KEY, 'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}` }
                        });
                        if (resProfile.ok) {
                            const profiles = await resProfile.json();
                            if (profiles && profiles[0]) {
                                userRole = profiles[0].role || 'FREE';
                                aiUsedToday = profiles[0].ai_used_today || 0;
                                let expireDate = profiles[0].expire_date;
                                if (userRole !== 'FREE' && userRole !== 'GUEST' && expireDate && new Date().getTime() > new Date(expireDate).getTime()) {
                                    userRole = 'FREE';
                                }
                            }
                        }
                    }
                }
            } catch (e) {
                // Bỏ qua lỗi Supabase để tiếp tục chạy AI bình thường
            }
        }

        const bodyData = JSON.parse(event.body || '{}');
        const prompt = bodyData.prompt;
        const image = bodyData.image;
        const source = bodyData.source;
        const reqMaxTokens = bodyData.max_tokens;

        if (!prompt || prompt.trim().length === 0) {
            return { statusCode: 400, headers, body: JSON.stringify({ error: 'Nội dung câu hỏi không được để trống.' }) };
        }

        const maxQuota = ROLE_QUOTAS[userRole] || 1;
        if (aiUsedToday >= maxQuota && userRole !== 'SVIP') {
            return {
                statusCode: 429,
                headers,
                body: JSON.stringify({ error: `Bạn đã dùng hết ${aiUsedToday}/${maxQuota} lượt AI hôm nay.` })
            };
        }

        // 2. LẤY API KEY & MODEL
        const primaryKey = process.env.PRIMARY_API_KEY || process.env.AI_API_KEY;
        const backupKey  = process.env.BACKUP_API_KEY;
        const quizKey    = process.env.QUIZ_API_KEY;
        const searchKey  = process.env.SEARCH_API_KEY;

        let keysToTry = [primaryKey, backupKey, quizKey, searchKey].filter(Boolean);
        keysToTry = [...new Set(keysToTry)];

        if (keysToTry.length === 0) {
            return { statusCode: 500, headers, body: JSON.stringify({ error: 'Chưa cấu hình API Key trên Netlify.' }) };
        }

        const models = ['gemini-1.5-flash', 'gemini-1.5-pro', 'gemini-2.0-flash'];
        const roleMaxTokens = ROLE_MAX_TOKENS[userRole] || 1000;
        const maxTokens = reqMaxTokens ? Math.min(Number(reqMaxTokens), roleMaxTokens) : roleMaxTokens;

        const partsPayload = [];
        if (image && typeof image === 'string' && image.startsWith('data:image')) {
            const matches = image.match(/^data:(image\/\w+);base64,(.+)$/);
            if (matches && matches.length === 3) {
                partsPayload.push({ inline_data: { mime_type: matches[1], data: matches[2] } });
            }
        }
        partsPayload.push({ text: "Bạn là chuyên gia YHCT Đại Luận Trị. Trả lời ngắn gọn, chuẩn xác: " + prompt });

        // 3. GỌI GEMINI API
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
                        
                        // Đồng bộ lượt dùng nếu có userEmail
                        if (userEmail && SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
                            try {
                                await fetch(`${SUPABASE_URL}/rest/v1/profiles?email=eq.${userEmail}`, {
                                    method: 'PATCH',
                                    headers: {
                                        'apikey': SUPABASE_SERVICE_ROLE_KEY,
                                        'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({ ai_used_today: aiUsedToday + 1 })
                                });
                            } catch (err) {}
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
                } catch (err) {}
            }
        }

        return { statusCode: 503, headers, body: JSON.stringify({ error: 'Hệ thống AI đang bận, vui lòng thử lại.' }) };

    } catch (error) {
        return { statusCode: 500, headers, body: JSON.stringify({ error: 'Lỗi hệ thống: ' + error.message }) };
    }
};
