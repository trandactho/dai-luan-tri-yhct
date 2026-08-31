exports.handler = async function(event) {
    const allowedOrigins = ["https://dailuantriyhct.com", "http://localhost:8888", "http://localhost:8080"];
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
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    try {
        const { prompt, image, source, max_tokens } = JSON.parse(event.body || '{}');

        if (!prompt || prompt.trim().length === 0) {
            return { statusCode: 400, headers, body: JSON.stringify({ error: 'Nội dung câu hỏi không được để trống.' }) };
        }

        if (prompt.length > 2000) {
            return { statusCode: 400, headers, body: JSON.stringify({ error: 'Nội dung yêu cầu quá dài (tối đa 2000 ký tự).' }) };
        }

        const primaryKey = process.env.PRIMARY_API_KEY || process.env.AI_API_KEY;
        const secondKey  = process.env.SECOND_API_KEY;
        const backupKey  = process.env.BACKUP_API_KEY;
        const quizKey    = process.env.QUIZ_API_KEY;
        const searchKey  = process.env.SEARCH_API_KEY;
        const thucdonKey = process.env.THUCDON_API_KEY;
        const thirdKey   = process.env.THIRD_API_KEY;
        
        let keysToTry = [];
        if (source === 'assistant' || source === 'vongchan' || source === 'sach_ai') {
            keysToTry = [primaryKey, backupKey];
        } else if (source === 'quiz') {
            keysToTry = [quizKey, secondKey];
        } else if (source === 'thucdon') {
            keysToTry = [thucdonKey, thirdKey];
        } else {
            keysToTry = [searchKey, secondKey];
        }

        keysToTry = [...new Set(keysToTry.filter(Boolean))];

        if (keysToTry.length === 0) {
            return { statusCode: 500, headers, body: JSON.stringify({ error: 'Cấu hình máy chủ chưa hoàn tất.' }) };
        }

        // Đổi tên model về chuẩn API Google Gemini
        const models = ['gemini-3.5-flash', 'gemini-3.6-flash'];
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

        // Giới hạn timeout tối đa 24 giây để tránh 504 của Netlify
        const timeoutMs = (source === 'vongchan' || source === 'assistant'|| source === 'thucdon'|| source === 'quiz') ? 25000 : 15000;

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
                        body: JSON.stringify({ 
                            contents: [{ parts: partsPayload }],
                            generationConfig: {
                                maxOutputTokens: Number(max_tokens) || 300
                            }
                        })
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
