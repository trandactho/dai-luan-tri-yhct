exports.handler = async function(event, context) {
    // 1. Chỉ chấp nhận phương thức POST
    if (event.httpMethod !== 'POST') {
        return { 
            statusCode: 405, 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ error: 'Method Not Allowed' }) 
        };
    }

    try {
        // 2. Lấy câu hỏi của người dùng gửi lên
        const { prompt } = JSON.parse(event.body);
        
        // 3. Lấy API Key từ biến môi trường của Netlify
        const apiKey = process.env.AI_API_KEY;

        if (!apiKey) {
            return {
                statusCode: 500,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ error: 'Chưa cấu hình khóa API trên máy chủ.' })
            };
        }

        // 4. Gọi đến máy chủ Google Gemini
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${apiKey}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                systemInstruction: {
                    parts: [{ text: "Bạn là một trợ lý chuyên gia về Y học cổ truyền (YHCT). Hãy tư vấn ngắn gọn, chính xác, lịch sự và luôn có khuyến cáo người dùng nên tham khảo ý kiến bác sĩ chuyên khoa." }]
                }
            })
        });

        const data = await response.json();

        // 5. Xử lý lỗi từ Google (nếu có)
        if (!response.ok) {
            return {
                statusCode: response.status,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ error: data.error?.message || 'Lỗi gọi API Google' })
            };
        }

        // 6. Trích xuất câu trả lời và gửi về cho giao diện web
        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Xin lỗi, tôi không thể đưa ra câu trả lời lúc này.';

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ reply })
        };

    } catch (err) {
        return {
            statusCode: 500,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ error: "Lỗi hệ thống: " + err.message })
        };
    }
};
