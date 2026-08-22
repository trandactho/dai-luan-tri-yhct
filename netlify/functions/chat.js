const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const ROLE_QUOTAS = { GUEST: 1, FREE: 3, VIP: 30, SVIP: 99 };
const ROLE_CONFIG = {
    GUEST: { tokenMultiplier: 1.0 },
    FREE: { tokenMultiplier: 1.0 },
    VIP: { tokenMultiplier: 1.5 },
    SVIP: { tokenMultiplier: 2.0 }
};

function getMaxTokens(sourceKey, role = 'GUEST') {
    const baseTokens = {
        'luantri': 250,
        'backup': 300,
        'phoingu': 400,
        'vongchan': 400,
        'sach_ai': 400,
        'chat': 500,
        'tu_chan': 500,
        'quiz': 800,
        'assistant': 500
    }[sourceKey] || 300;

    const multiplier = ROLE_CONFIG[role]?.tokenMultiplier || 1.0;
    return Math.round(baseTokens * multiplier);
}

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
                                userRole = (profiles[0].role || 'FREE').toUpperCase();
                                aiUsedToday = profiles[0].ai_used_today || 0;
                            }
                        }
                    }
                }
            } catch (err) {}
        }

        const bodyData = JSON.parse(event.body || '{}');
        const { prompt, image, source } = bodyData; 

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
        const secondKey  = process.env.SECOND_API_KEY;
        const backupKey  = process.env.BACKUP_API_KEY;
        const quizKey    = process.env.QUIZ_API_KEY;
        const searchKey  = process.env.SEARCH_API_KEY;

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

        // Giữ đúng model 3.6 theo yêu cầu của bạn
        const model = 'gemini-3.6-flash';
                // 1. TÍNH TOÁN TOKEN TỪ SERVER
        const maxTokens = getMaxTokens(source || 'chat', userRole);[span_0](start_span)[span_0](end_span)

        // 2. CẤU HÌNH GENERATION CONFIG (Dùng responseMimeType khi source là backup để bắt buộc model trả về JSON chuẩn xác không bị tràn chữ thô)
        const generationConfig = { 
            maxOutputTokens: maxTokens,
            ...(source === 'backup' ? { responseMimeType: 'application/json' } : {})
        };[span_1](start_span)[span_1](end_span)

        // 3. KHÓA Y ĐỨC VÀ ĐỊNH DẠNG TUYỆT ĐỐI CHO MODEL 3.6
        let finalPrompt = "Bạn là chuyên gia YHCT Đại Luận Trị. BẮT BUỘC tuân thủ tuyệt đối y đức, không bịa đặt, trả lời hoàn toàn bằng tiếng Việt chuẩn xác dựa trên y lý YHCT chính thống: \n\n" + prompt;[span_2](start_span)[span_2](end_span)
        
        // Nếu là luồng backup tìm và lưu, ép chặt đầu ra phải là JSON thuần không kèm văn bản thừa
        if (source === 'backup') {
            finalPrompt = "QUAN TRỌNG: Hãy trả về ĐÚNG MỘT đối tượng JSON thuần túy (không kèm markdown như ```json, không kèm lời chào hay giải thích ngoài lề). " + finalPrompt;
        }


        const partsPayload = [];
        if (image && typeof image === 'string' && image.startsWith('data:image')) {
            const matches = image.match(/^data:(image\/\w+);base64,(.+)$/);
            if (matches && matches.length === 3) {
                partsPayload.push({ inline_data: { mime_type: matches[1], data: matches[2] } });
            }
        }
        partsPayload.push({ text: finalPrompt });

        let responseSuccess = false;
        let responseData = null;

        for (const apiKey of keysToTry) {
            try {
                const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey.trim()}`;
                const response = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ 
                        contents: [{ parts: partsPayload }],
                        generationConfig: generationConfig 
                    })
                });

                const data = await response.json();
                if (response.ok && data.candidates?.[0]?.content?.parts?.[0]?.text) {
                    responseData = data.candidates[0].content.parts[0].text;
                    responseSuccess = true;
                    break;
                }
            } catch (e) {}
        }

        if (responseSuccess && responseData) {
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
                    reply: responseData,
                    aiUsedToday: aiUsedToday + 1,
                    maxQuota: maxQuota
                })
            };
        }

        return { statusCode: 503, headers, body: JSON.stringify({ error: 'Hệ thống AI đang bận.' }) };

        } catch (error) {
        return { statusCode: 500, headers, body: JSON.stringify({ error: 'Lỗi chi tiết: ' + error.message }) };
    }
};
