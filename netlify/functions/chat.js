exports.handler = async function(event, context) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
    }

    try {
        const { prompt } = JSON.parse(event.body || '{}');

        // Danh sách API Key (Ưu tiên Key chính -> Key dự phòng)
        const keys = [
            process.env.AI_API_KEY || process.env.PRIMARY_API_KEY,
            process.env.BACKUP_API_KEY
        ].filter(Boolean);

        if (keys.length === 0) {
            return { 
                statusCode: 500, 
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ error: 'Chưa cấu hình AI_API_KEY trên Netlify.' }) 
            };
        }

        // Danh sách model ưu tiên từ cao xuống thấp
        const models = ['gemini-3.5-flash', 'gemini-2.5-flash', 'gemini-2.0-flash'];
        let lastError = null;

        for (const apiKey of keys) {
            for (const model of models) {
                try {
                    const url = `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${apiKey.trim()}`;

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
                        return {
                            statusCode: 200,
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ reply: data.candidates[0].content.parts[0].text })
                        };
                    }

                    // Nếu model hiện tại bận hoặc lỗi, lưu lại lỗi và tiếp tục thử model tiếp theo trong danh sách
                    lastError = data.error?.message || JSON.stringify(data);

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
