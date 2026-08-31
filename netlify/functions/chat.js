exports.handler = async function(event) {
    // 1. Trích xuất Origin case-insensitive & chuẩn hóa chuỗi
    const headersRaw = event.headers || {};
    const originHeader = headersRaw.origin || headersRaw.Origin || headersRaw.referer || headersRaw.Referer || '';
    
    let requestOrigin = '';
    if (originHeader) {
        try {
            const url = new URL(originHeader);
            requestOrigin = url.origin; // Trả về đúng dạng http://localhost:8080
        } catch (e) {
            requestOrigin = originHeader.replace(/\/+$/, '');
        }
    }

    const allowedOrigins = ["https://dailuantriyhct.com", "http://localhost:8888", "http://localhost:8080", "http://127.0.0.1:8080", "http://127.0.0.1:8888"];
    const isAllowed = allowedOrigins.includes(requestOrigin);
    const corsOrigin = isAllowed ? requestOrigin : "https://dailuantriyhct.com";

    // 2. Khai báo CORS Headers dùng chung cho TẤT CẢ các phản hồi
    const headers = {
        'Access-Control-Allow-Origin': corsOrigin,
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
    };

    // Xử lý Preflight Request (OPTIONS)
    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    // Chặn Origin không hợp lệ nhưng VẪN ĐÈ HEADERS CORS để trình duyệt không báo lỗi đỏ
    if (requestOrigin && !isAllowed) {
        return { 
            statusCode: 403, 
            headers,
            body: JSON.stringify({ error: 'Truy cập bị từ chối (CORS Policy).' }) 
        };
    }

    try {
        const { prompt, image, source, max_tokens } = JSON.parse(event.body || '{}');

        if (!prompt || prompt.trim().length === 0) {
            return { statusCode: 400, headers, body: JSON.stringify({ error: 'Nội dung câu hỏi không được để trống.' }) };
        }

        if (prompt.length > 2000) {
            return { statusCode: 400, headers, body: JSON.stringify({ error: 'Nội dung yêu cầu quá dài (tối đa 2000 ký tự).' }) };
        }

        const primaryKey  = process.env.PRIMARY_API_KEY || process.env.AI_API_KEY;
        const svipKey     = process.env.PRIMARY_SVIP_API_KEY || primaryKey;
        const secondKey   = process.env.SECOND_API_KEY;
        const backupKey   = process.env.BACKUP_API_KEY;
        const quizKey     = process.env.QUIZ_API_KEY;
        const searchKey   = process.env.SEARCH_API_KEY;
        const thucdonKey  = process.env.THUCDON_API_KEY;
        const thirdKey    = process.env.THIRD_API_KEY;
        
        let keysToTry = [];
        if (source === 'primarysvip') keysToTry = [svipKey, primaryKey, backupKey];
        else if (source === 'assistant') keysToTry = [primaryKey, backupKey];
        else if (source === 'vongchan') keysToTry = [primaryKey, backupKey];
        else if (source === 'quiz') keysToTry = [quizKey, secondKey];
        else if (source === 'thucdon') keysToTry = [thucdonKey, thirdKey];
        else keysToTry = [searchKey, secondKey];

        keysToTry = [...new Set(keysToTry.filter(Boolean))];

        if (keysToTry.length === 0) {
            return { statusCode: 500, headers, body: JSON.stringify({ error: 'Cấu hình máy chủ chưa hoàn tất.' }) };
        }

        const models = ['gemini-3.6-flash', 'gemini-3.5-flash'];
        const partsPayload = [];
        
        if (image && typeof image === 'string' && image.startsWith('data:image')) {
            const matches = image.match(/^data:(image\/\w+);base64,(.+)$/);
            if (matches && matches.length === 3) {
                partsPayload.push({ inline_data: { mime_type: matches[1], data: matches[2] } });
            }
        }

        partsPayload.push({ 
            text: "Bạn là trợ lý YHCT chuyên nghiệp. Hãy trả lời ngắn gọn, chuẩn xác: " + prompt 
        });

        const requestPayload = {
            contents: [{ parts: partsPayload }]
        };

        if (max_tokens && typeof max_tokens === 'number' && max_tokens > 0) {
            requestPayload.generationConfig = {
                maxOutputTokens: max_tokens
            };
        }

        // Giữ nguyên timeout 35s / 15s theo chuẩn thiết kế của bạn
        const longTimeoutSources = ['vongchan', 'assistant', 'thucdon', 'quiz', 'primarysvip'];
        const timeoutMs = longTimeoutSources.includes(source) ? 35000 : 15000;

        for (const apiKey of keysToTry) {
            for (const model of models) {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

                try {
                    const url = `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${apiKey.trim()}`;
                    const response = await fetch(url, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        signal: controller.signal,
                        body: JSON.stringify(requestPayload)
                    });

                    clearTimeout(timeoutId);
                    const data = await response.json();

                    if (response.ok && data.candidates?.[0]?.content?.parts?.[0]?.text) {
                        return {
                            statusCode: 200,
                            headers,
                            body: JSON.stringify({ reply: data.candidates[0].content.parts[0].text })
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
