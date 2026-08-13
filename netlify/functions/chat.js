exports.handler = async function(event, context) {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    if (event.httpMethod !== 'POST') {
        return { statusCode: 200, headers, body: JSON.stringify({ error: 'Method Not Allowed' }) };
    }

    try {
        const { prompt, image, source } = JSON.parse(event.body || '{}');

        const primaryKey = process.env.PRIMARY_API_KEY || process.env.AI_API_KEY;
        const secondKey  = process.env.SECOND_API_KEY;
        const backupKey  = process.env.BACKUP_API_KEY;

        const luantrihcKey  = process.env.LUANTRI_API_KEY2;
        const luantribtKey  = process.env.LUANTRI_API_KEY3;
        const searchKey  = process.env.SEARCH_API_KEY;
        const quizKey  = process.env.QUIZ_API_KEY;

        let keysToTry = [];
        if (source === 'assistant') keysToTry = [primaryKey, backupKey];
        else if (source === 'luantrihc') keysToTry = [luantrihcKey, secondKey];
        else if (source === 'luantribt') keysToTry = [luantribtKey, secondKey];
        else if (source === 'quiz') keysToTry = [quizKey, backupKey];
        else if (source === 'vongchan') keysToTry = [primaryKey, secondKey, backupKey];
        else keysToTry = [searchKey, backupKey];

        keysToTry = [...new Set(keysToTry.filter(Boolean))];

        if (keysToTry.length === 0) {
            return { statusCode: 200, headers, body: JSON.stringify({ error: 'Chưa cấu hình API Key trên Netlify.' }) };
        }

        const models = ['gemini-3.6-flash', 'gemini-3.5-flash'];
        let lastError = null;

        // Xây dựng mảng parts: Tự động thêm phần hình ảnh nếu có (Vọng chẩn)
        const partsPayload = [];
        
        if (image && typeof image === 'string' && image.startsWith('data:image')) {
            const matches = image.match(/^data:(image\/\w+);base64,(.+)$/);
            if (matches && matches.length === 3) {
                partsPayload.push({
                    inline_data: {
                        mime_type: matches[1],
                        data: matches[2]
                    }
                });
            }
        }

        partsPayload.push({ 
            text: "Bạn là trợ lý YHCT chuyên nghiệp. Hãy tuân thủ tuyệt đối y đức, không bịa đặt, thông tin chuẩn xác theo y lý chính thống. Trả lời ngắn gọn, ngắt dòng rõ ràng, dùng gạch đầu dòng cho các ý chính: " + prompt 
        });

        for (let keyIdx = 0; keyIdx < keysToTry.length; keyIdx++) {
            const apiKey = keysToTry[keyIdx];
            
            // Key tính phí (đầu tiên) cho 18s thoải mái sinh câu trả lời. Key dự phòng sau cho 5s.
            const timeoutMs = ((source === 'vongchan')||(source === 'quiz')||(source === 'assistant')) ? 9500 : 5000;

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
                            contents: [{ 
                                parts: partsPayload 
                            }]
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
                    lastError = data.error?.message || JSON.stringify(data);
                } catch (err) {
                    clearTimeout(timeoutId);
                    lastError = err.name === 'AbortError' ? `Request quá ${timeoutMs / 1000}s (Timeout)` : err.message;
                }
            }
        }

        return { statusCode: 200, headers, body: JSON.stringify({ error: `Máy chủ AI bận: ${lastError}` }) };

    } catch (error) {
        return { statusCode: 200, headers, body: JSON.stringify({ error: error.message }) };
    }
};
