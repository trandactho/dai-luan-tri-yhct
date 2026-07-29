exports.handler = async function(event, context) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
    }

    try {
        const { prompt } = JSON.parse(event.body || '{}');

        // 1. Danh sách Key (Ưu tiên Key chính -> Key dự phòng)
        const keys = [
            process.env.AI_API_KEY || process.env.PRIMARY_API_KEY,
            process.env.BACKUP_API_KEY
        ].filter(Boolean);

        if (keys.length === 0) {
            return { 
                statusCode: 500, 
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ error: 'Chưa cấu hình biến môi trường AI_API_KEY trên Netlify.' }) 
            };
        }

        // 2. Ưu tiên thử gemini-3.5-flash trước, nếu lỗi tự chuyển sang gemini-1.5-flash
        const models = ['gemini-3.5-flash', 'gemini-1.5-flash'];
        let lastError = null;

        // Xoay vòng qua từng Key và từng Model
        for (const apiKey of keys) {
            for (const model of models) {
                try {
                    // Cấu hình URL linh hoạt theo Model
                    const endpointVersion = model.includes('3.5') ? 'v1' : 'v1beta';
                    const url = `https://generativelanguage.googleapis.com/${endpointVersion}/models/${model}:generateContent?key=${apiKey}`;

                    const response = await fetch(url, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            contents: [{ 
                                parts: [{ text: "Bạn là trợ lý YHCT chuyên nghiệp. Hãy trả lời ngắn gọn, ngắt dòng rõ ràng, dùng gạch đầu dòng cho các ý chính: " + prompt }] 
                            }]
                        })
                    });

                    const data = await response.json();

                    if (response.ok && data.candidates?.[0]?.content?.parts?.[0]?.text) {
                        const reply = data.candidates[0].content.parts[0].text;
                        return {
                            statusCode: 200,
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ reply })
                        };
                    }

                    if (data.error?.message) {
                        lastError = data.error.message;
                    }
                } catch (err) {
                    lastError = err.message;
                }
            }
        }

        return { 
            statusCode: 500, 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ error: `Máy chủ AI bận: ${lastError}` }) 
        };

    } catch (error) {
        return {
            statusCode: 500,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ error: error.message })
        };
    }
};
