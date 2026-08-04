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
        return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method Not Allowed' }) };
    }

    try {
        const { prompt, source } = JSON.parse(event.body || '{}');

        const primaryKey = process.env.PRIMARY_API_KEY || process.env.AI_API_KEY;
        const secondKey  = process.env.SECOND_API_KEY;
        const backupKey  = process.env.BACKUP_API_KEY;

        const luantrihcKey  = process.env.LUANTRIHC_API_KEY;
        
        const luantribtKey  = process.env.LUANTRIBT_API_KEY;
        const searchKey  = process.env.SEARCH_API_KEY;
        const quizKey  = process.env.QUIZ_API_KEY;

        let keysToTry = [];
        if (source === 'assistant') keysToTry = [primaryKey, backupKey];
        else if (source === 'luantrihc') keysToTry = [luantrihcKey, secondKey];
        else if (source === 'luantribt') keysToTry = [luantribtKey, secondKey];
        else if (source === 'quiz') keysToTry = [quizKey, backupKey];
        else keysToTry = [searchKey, backupKey];

        keysToTry = [...new Set(keysToTry.filter(Boolean))];

        if (keysToTry.length === 0) {
            return { statusCode: 500, headers, body: JSON.stringify({ error: 'Chưa cấu hình API Key trên Netlify.' }) };
        }

        // Giữ nguyên các model đang hoạt động trên AI Studio của bạn
        const models = ['gemini-3.6-flash', 'gemini-3.5-flash'];
        let lastError = null;

        // Gọi trực tiếp nhanh nhất, không lặp delay gây Timeout Netlify
        for (const apiKey of keysToTry) {
            for (const model of models) {
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
                } catch (err) {
                    lastError = err.message;
                }
            }
        }

        return { statusCode: 500, headers, body: JSON.stringify({ error: `Máy chủ AI bận: ${lastError}` }) };

    } catch (error) {
        return { statusCode: 500, headers, body: JSON.stringify({ error: error.message }) };
    }
};
