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
        // Nhận cả camelCase lẫn snake_case để tránh lọt tham số
        const prompt = bodyData.prompt;
        const image = bodyData.image;
        const source = bodyData.source;
        const reqMaxTokens = bodyData.max_tokens || bodyData.maxTokens;
        const requireJson = bodyData.requireJson || bodyData.require_json;

        if (!prompt || prompt.trim().length === 0) {
            return { statusCode: 400, headers, body: JSON.stringify({ error: 'Nội dung câu hỏi trống.' }) };
        }

        const maxQuota = ROLE_QUOTAS[userRole] || 1;
        if (aiUsedToday >= maxQuota) {
          return {
             statusCode: 429,
             headers,
             body: JSON.stringify({ error: `Bạn đã dùng hết ${aiUsedToday}/${maxQuota} lượt AI hôm nay.` })
          };
        }

        const primaryKey = process.env.PRIMARY_API_KEY || process.env.AI_API_KEY;
        const secondKey  = process.env.SECOND_API_KEY || primaryKey; // Fallback an toàn nếu chưa điền key
        const backupKey  = process.env.BACKUP_API_KEY || primaryKey;
        const quizKey    = process.env.QUIZ_API_KEY || primaryKey;
        const searchKey  = process.env.SEARCH_API_KEY || primaryKey;

        let keysToTry = [];
        if (source === 'assistant' || source === 'vongchan') {
            keysToTry = [primaryKey, backupKey];
        } else if (source === 'quiz') {
            keysToTry = [quizKey, secondKey];
        } else {
            keysToTry = [searchKey, secondKey];
        }
        keysToTry = [...new Set(keysToTry.filter(Boolean))];

        if (keysToTry.length === 0) {
            return { statusCode: 500, headers, body: JSON.stringify({ error: 'Chưa cấu hình API Key trên Netlify.' }) };
        }

        // Bỏ model rác gemini-3.5-flash
        const models = ['gemini-1.5-flash', 'gemini-2.0-flash'];
        const roleMaxTokens = ROLE_MAX_TOKENS[userRole] || 1000;
        const maxTokens = reqMaxTokens ? Math.min(Number(reqMaxTokens), roleMaxTokens) : roleMaxTokens;

        const partsPayload = [];
        if (image && typeof image === 'string' && image.startsWith('data:image')) {
            const matches = image.match(/^data:(image\/\w+);base64,(.+)$/);
            if (matches && matches.length === 3) {
                partsPayload.push({ inline_data: { mime_type: matches[1], data: matches[2] } });
            }
        }

        // ÉP CHẶT SYSTEM PROMPT DÙNG TIẾNG VIỆT VÀ RA CHUẨN ĐỊNH DẠNG
        let systemInstruction = "Bạn là chuyên gia YHCT Đại Luận Trị. BẮT BUỘC trả lời hoàn toàn bằng tiếng Việt, ngắn gọn, chuẩn xác.";
        if (requireJson || source === 'backup') {
            systemInstruction += " Trả về duy nhất 1 chuỗi JSON hợp lệ. KHÔNG thêm bất kỳ câu dẫn tiếng Anh/tiếng Việt nào như 'Here is the JSON' hay dấu đóng ngoặc markdown ```json.";
        }
        
        partsPayload.push({ text: `${systemInstruction}\nNội dung: ${prompt}` });

        for (const apiKey of keysToTry) {
            for (const model of models) {
                try {
                    const url = `[https://generativelanguage.googleapis.com/v1beta/models/$](https://generativelanguage.googleapis.com/v1beta/models/$){model}:generateContent?key=${apiKey.trim()}`;
                    let genConfig = { maxOutputTokens: maxTokens };

                    if (requireJson || source === 'backup') {
                        genConfig.responseMimeType = "application/json";
                    }

                    const response = await fetch(url, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ 
                            contents: [{ parts: partsPayload }],
                            generationConfig: genConfig
                        })
                    });

                    const data = await response.json();
                    let rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;

                    if (response.ok && rawText) {
                        // 🛠 BỘ LỌC CẶT SẠCH CÂU DẪN RÁC
                        let cleanReply = rawText.trim();
                        
                        if (requireJson || source === 'backup') {
                            // Xóa sạch markdown block ```json ... ```
                            cleanReply = cleanReply.replace(/^```json\s*/i, '').replace(/^```\s*/, '').replace(/\s*```$/, '').trim();
                            
                            // Cắt bỏ mọi chữ tiếng Anh đứng trước dấu { đầu tiên
                            const firstBracket = cleanReply.indexOf('{');
                            const lastBracket = cleanReply.lastIndexOf('}');
                            if (firstBracket !== -1 && lastBracket !== -1) {
                                cleanReply = cleanReply.substring(firstBracket, lastBracket + 1);
                            }
                        }

                        // Đồng bộ lượt dùng Supabase
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
                                reply: cleanReply,
                                aiUsedToday: aiUsedToday + 1,
                                maxQuota: maxQuota
                            })
                        };
                    }
                } catch (e) {}
            }
        }

        return { statusCode: 503, headers, body: JSON.stringify({ error: 'Hệ thống AI đang bận, vui lòng thử lại.' }) };

    } catch (error) {
        return { statusCode: 500, headers, body: JSON.stringify({ error: 'Lỗi hệ thống.' }) };
    }
};
