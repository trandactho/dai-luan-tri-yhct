const delay = (ms) => new Promise(res => setTimeout(res, ms));

exports.handler = async function(event, context) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
    }

    try {
        const { prompt } = JSON.parse(event.body || '{}');

        // Lấy API Key (AI_API_KEY / PRIMARY_API_KEY -> BACKUP_API_KEY)
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

        // Chỉ dùng 2 model chuẩn xác nhất từ Dashboard của bạn
        const models = ['gemini-3.5-flash', 'gemini-2.0-flash-lite'];
        let lastError = null;

        for (const apiKey of keys) {
            for (const model of models) {
                // Thử tối đa 2 lần cho mỗi model nếu gặp bận mạng
                for (let attempt = 1; attempt <= 2; attempt++) {
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

                        // Trả về kết quả ngay khi thành công
                        if (response.ok && data.candidates?.[0]?.content?.parts?.[0]?.text) {
                            return {
                                statusCode: 200,
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ reply: data.candidates[0].content.parts[0].text })
                            };
                        }

                        lastError = data.error?.message || JSON.stringify(data);

                        // Nếu dính bận/nghẽn mạng (503/429/high demand), đợi 2s rồi thử lại
                        if (response.status === 503 || response.status === 429 || lastError.includes('demand')) {
                            await delay(2000);
                        } else {
                            break; // Lỗi khác thì bỏ qua để đổi sang model/key tiếp theo
                        }

                    } catch (err) {
                        lastError = err.message;
                        await delay(1000);
                    }
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
