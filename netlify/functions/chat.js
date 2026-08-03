const delay = (ms) => new Promise(res => setTimeout(res, ms));

exports.handler = async function(event, context) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
    }

    try {
        const { prompt, source } = JSON.parse(event.body || '{}');

        const primaryKey = process.env.PRIMARY_API_KEY || process.env.AI_API_KEY;
        const backupKey = process.env.BACKUP_API_KEY;

        // Phân luồng Key: Tab Trợ lý AI ưu tiên key chính, các tab khác ưu tiên key backup
        let keysToTry = [];
        if (source === 'assistant') {
            keysToTry = [primaryKey, backupKey].filter(Boolean);
        } else {
            keysToTry = [backupKey, primaryKey].filter(Boolean);
        }

        if (keysToTry.length === 0) {
            return { 
                statusCode: 500, 
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ error: 'Chưa cấu hình API Key trên Netlify.' }) 
            };
        }

        // Giữ nguyên 2 model cũ đang chạy ổn định của bạn[span_1](start_span)[span_1](end_span)
        const models = ['gemini-3.6-flash', 'gemini-3.5-flash'];
        let lastError = null;

        for (const apiKey of keysToTry) {
            for (const model of models) {
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

                        if (response.ok && data.candidates?.[0]?.content?.parts?.[0]?.text) {
                            return {
                                statusCode: 200,
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ reply: data.candidates[0].content.parts[0].text })
                            };
                        }

                        lastError = data.error?.message || JSON.stringify(data);

                        if (response.status === 503 || response.status === 429 || (lastError && lastError.includes('demand'))) {
                            await delay(2000);
                        } else {
                            break;
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
