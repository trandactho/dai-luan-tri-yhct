const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const ROLE_QUOTAS = { GUEST: 1, FREE: 3, VIP: 30, SVIP: 99 };
const ROLE_MAX_TOKENS = { GUEST: 800, FREE: 1000, VIP: 2000, SVIP: 2500 };

exports.handler = async function(event) {
    const allowedOrigins = ["https://dailuantriyhct.com", "http://localhost:8888", "http://localhost:3000"];
    const requestOrigin = event.headers.origin || event.headers.Origin;

    if (requestOrigin && !allowedOrigins.includes(requestOrigin)) {
        return { 
            statusCode: 403, 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ error: 'Truy cập bị từ chối (CORS Policy).' }) 
        };
    }

    const headers = {
        'Access-Control-Allow-Origin': requestOrigin || "https://dailuantriyhct.com",
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

        // XÁC THỰC AN TOÀN QUA SUPABASE
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
                            }
                        }
                    }
                }
            } catch (err) {}
        }

        const bodyData = JSON.parse(event.body || '{}');
        const { prompt, image, source, max_tokens: reqMaxTokens, requireJson } = bodyData;

        if (!prompt || prompt.trim().length === 0) {
            return { statusCode: 400, headers, body: JSON.stringify({ error: 'Nội dung câu hỏi không được để trống.' }) };
        }

        if (prompt.length > 2000) {
            return { statusCode: 400, headers, body: JSON.stringify({ error: 'Nội dung yêu cầu quá dài (tối đa 2000 ký tự).' }) };
        }

        // Kiểm tra quota lượt dùng
        const maxQuota = ROLE_QUOTAS[userRole] || 1;
        if (aiUsedToday >= maxQuota) {
            return {
                statusCode: 429,
                headers,
                body: JSON.stringify({ error: `Bạn đã dùng hết ${aiUsedToday}/${maxQuota} lượt AI hôm nay.` })
            };
        }

        const primaryKey = process.env.PRIMARY_API_KEY || process.env.AI_API_KEY;
        const secondKey  = process.env.SECOND_API_KEY;
        const backupKey  = process.env.BACKUP_API_KEY;
        const searchKey  = process.env.SEARCH_API_KEY;
        const quizKey  = process.env.QUIZ_API_KEY;
        
        let keysToTry = [];
        if (source === 'assistant') keysToTry = [primaryKey, backupKey];
        else if (source === 'vongchan') keysToTry = [primaryKey, backupKey];
        else if (source === 'quiz') keysToTry = [quizKey, secondKey];
        else keysToTry = [searchKey, secondKey];

        keysToTry = [...new Set(keysToTry.filter(Boolean))];

        if (keysToTry.length === 0) {
            return { statusCode: 500, headers, body: JSON.stringify({ error: 'Cấu hình máy chủ chưa hoàn tất.' }) };
        }

        const models = ['gemini-2.0-flash', 'gemini-1.5-flash', 'gemini-3.5-flash'];
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
            text: "Bạn là chuyên gia YHCT Đại Luận Trị. BẮT BUỘC trả lời hoàn toàn bằng tiếng Việt, ngắn gọn, chuẩn xác: " + prompt 
        });

        const timeoutMs = (source === 'vongchan' || source === 'assistant') ? 25000 : 15000;

        for (const apiKey of keysToTry) {
            for (const model of models) {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

                try {
                    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey.trim()}`;
                    
                    let generationConfig = { maxOutputTokens: maxTokens };
                    if (requireJson || source === 'backup') {
                        generationConfig.responseMimeType = "application/json";
                    }

                    const response = await fetch(url, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        signal: controller.signal,
                        body: JSON.stringify({ 
                            contents: [{ parts: partsPayload }],
                            generationConfig: generationConfig
                        })
                    });

                    clearTimeout(timeoutId);
                    const data = await response.json();

                    if (response.ok && data.candidates?.[0]?.content?.parts?.[0]?.text) {
                        // Đồng bộ lượt dùng vào DB nếu có tài khoản
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
                            } catch (e) {}
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
                    clearTimeout(timeoutId);
                }
            }
        }

        return { statusCode: 503, headers, body: JSON.stringify({ error: 'Hệ thống AI đang bận. Vui lòng thử lại sau ít phút.' }) };

    } catch (error) {
        return { statusCode: 500, headers, body: JSON.stringify({ error: 'Lỗi xử lý hệ thống nội bộ.' }) };
    }
};
