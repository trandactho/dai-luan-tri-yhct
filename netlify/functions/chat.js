exports.handler = async function(event, context) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
    }

    try {
        const { prompt } = JSON.parse(event.body);
        const apiKey = process.env.AI_API_KEY;

        if (!apiKey) {
            return { 
                statusCode: 500, 
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ error: 'Chưa cấu hình biến môi trường AI_API_KEY trên Netlify.' }) 
            };
        }

        // Sử dụng model chuẩn mới nhất gemini-3.5-flash trên endpoint v1
        const url = `https://generativelanguage.googleapis.com/v1/models/gemini-3.5-flash:generateContent?key=${apiKey}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: "Bạn là trợ lý YHCT chuyên nghiệp. Hãy trả lời ngắn gọn, ngắt dòng rõ ràng, dùng gạch đầu dòng cho các ý chính: " + prompt }] }]

            })
        });

        const data = await response.json();

        if (!response.ok) {
            return { 
                statusCode: response.status, 
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ error: `Google API Error: ${data.error?.message || JSON.stringify(data)}` }) 
            };
        }

        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Không có phản hồi từ AI.";

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ reply })
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ error: error.message })
        };
    }
};
