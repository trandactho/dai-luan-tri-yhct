const delay = (ms) => new Promise(res => setTimeout(res, ms));

exports.handler = async function(event, context) {
    // 1. Khai báo CORS Headers cho tất cả các phản hồi
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
    };

    // 2. Xử lý yêu cầu Preflight (OPTIONS) từ trình duyệt khi gọi từ Localhost
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
    }

    // 3. Chỉ cho phép phương thức POST
    if (event.httpMethod !== 'POST') {
        return { 
            statusCode: 405, 
            headers,
            body: JSON.stringify({ error: 'Method Not Allowed' }) 
        };
    }

    try {
        const { prompt, source } = JSON.parse(event.body || '{}');

        const primaryKey = process.env.PRIMARY_API_KEY || process.env.AI_API_KEY;
        const backupKey = process.env.BACKUP_API_KEY;

        // Phân luồng Key: Tab Trợ lý AI dùng cả 2 key, các tab còn lại CHỈ dùng 1 key duy nhất là backupKey
        let keysToTry = [];
        if (source === 'assistant') {
            keysToTry = [primaryKey, backupKey].filter(Boolean);
        } else {
            keysToTry = [backupKey].filter(Boolean);
        }

        if (keysToTry.length === 0) {
            return { 
                statusCode: 500, 
                headers,
                body: JSON.stringify({ error: 'Chưa cấu hình API Key trên Netlify.' }) 
            };
        }

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
                                    parts: [{ text: "Bạn là trợ lý YHCT chuyên nghiệp. Hãy tuân thủ tuyệt đối y đức, không bịa đặt, thông tin chuẩn xác theo y lý chính thống. Trả lời ngắn gọn, ngắt dòng rõ ràng, dùng gạch đầu dòng cho các ý chính: " + prompt }] 
                                }]
                            })
                        });

                        const data = await response.json();

                        if (response.ok && data.candidates?.[0]?.content?.parts?.[0]?.text) {
                            return {
                                statusCode: 200,
                                headers,
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
            headers,
            body: JSON.stringify({ error: `Máy chủ AI bận: ${lastError}` }) 
        };

    } catch (error) {
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: error.message })
        };
    }
};
