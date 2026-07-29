exports.handler = async function(event, context) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
    }

    try {
        const { prompt } = JSON.parse(event.body || '{}');

        // Lấy danh sách Key: Ưu tiên AI_API_KEY (hoặc PRIMARY_API_KEY) -> Dự phòng BACKUP_API_KEY
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

        let lastError = null;

        // Giữ nguyên 100% model gemini-3.5-flash và endpoint v1 chuẩn cũ của bạn
        for (const apiKey of keys) {
            try {
                const url = `https://generativelanguage.googleapis.com/v1/models/gemini-3.5-flash:generateContent?key=${apiKey}`;

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

                lastError = data.error?.message || JSON.stringify(data);
            } catch (err) {
                lastError = err.message;
            }
        }

        return { 
            statusCode: 500, 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ error: `Google API Error: ${lastError}` }) 
        };

    } catch (error) {
        return {
            statusCode: 500,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ error: error.message })
        };
    }
};
