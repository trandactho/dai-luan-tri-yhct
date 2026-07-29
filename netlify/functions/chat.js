exports.handler = async function(event) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
    }

    try {
        const { prompt } = JSON.parse(event.body || '{}');

        // 1. Kiểm tra API Key trên Netlify
        const apiKey = process.env.AI_API_KEY || process.env.PRIMARY_API_KEY || process.env.BACKUP_API_KEY;

        if (!apiKey) {
            return { 
                statusCode: 500, 
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ error: '❌ Netlify chưa nhận API Key. Hãy kiểm tra lại phần Environment variables.' }) 
            };
        }

        // 2. Gọi API chuẩn quốc tế của Google Gemini 1.5 Flash
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey.trim()}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: "Bạn là trợ lý YHCT chuyên nghiệp. Trả lời ngắn gọn, chuẩn xác:\n\n" + prompt }] }]
                })
            }
        );

        const data = await response.json();

        // 3. Trả về kết quả nếu thành công
        if (response.ok && data.candidates?.[0]?.content?.parts?.[0]?.text) {
            return {
                statusCode: 200,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ reply: data.candidates[0].content.parts[0].text })
            };
        }

        // 4. Báo lỗi chi tiết từ Google nếu thất bại
        return {
            statusCode: response.status,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                error: `Lỗi Google API (${response.status}): ${data.error?.message || 'Không thể kết nối'}` 
            })
        };

    } catch (error) {
        return {
            statusCode: 500,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ error: `Lỗi Serverless Function: ${error.message}` })
        };
    }
};
