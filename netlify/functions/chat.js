const { createClient } = require('@supabase/supabase-js');

// Khởi tạo kết nối Supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const supabase = (supabaseUrl && supabaseAnonKey) ? createClient(supabaseUrl, supabaseAnonKey) : null;

exports.handler = async function(event) {
    const allowedOrigins = ["https://dailuantriyhct.com", "http://localhost:8888", "http://localhost:8080"];
    const requestOrigin = event.headers.origin || event.headers.Origin;

    if (requestOrigin && !allowedOrigins.includes(requestOrigin)) {
        return { 
            statusCode: 403, 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ error: 'Truy cập bị từ chối (CORS Policy).' }) 
        };
    }

    const headers = {
        'Access-Control-Allow-Origin': requestOrigin || "https://dailuantriyhct.com",
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    try {
        // Trích xuất tham số từ Body (bao gồm max_tokens từ client)
        const { prompt, image, source, max_tokens } = JSON.parse(event.body || '{}');

        if (!prompt || prompt.trim().length === 0) {
            return { statusCode: 400, headers, body: JSON.stringify({ error: 'Nội dung câu hỏi không được để trống.' }) };
        }

        if (prompt.length > 2000) {
            return { statusCode: 400, headers, body: JSON.stringify({ error: 'Nội dung yêu cầu quá dài (tối đa 2000 ký tự).' }) };
        }

        // =========================================================================
        // 🔒 CHỐT CHẶN BẢO MẬT SERVER-SIDE: XÁC THỰC TOKEN & KIỂM TRA ROLE
        // =========================================================================
        const vipOnlySources = ['vongchan', 'sach_ai', 'thucdon', 'quiz'];
        
        if (vipOnlySources.includes(source)) {
            const authHeader = event.headers.authorization || event.headers.Authorization;
            let userRole = 'GUEST';

            if (authHeader && supabase) {
                const token = authHeader.replace(/^Bearer\s+/i, '');
                const { data: { user }, error } = await supabase.auth.getUser(token);
                if (user && !error) {
                    userRole = (user.user_metadata?.role || 'FREE').toUpperCase();
                }
            }

            if (userRole === 'GUEST' || userRole === 'FREE') {
                return {
                    statusCode: 403,
                    headers,
                    body: JSON.stringify({ error: `Tài khoản cấp ${userRole} không có quyền sử dụng tính năng VIP này.` })
                };
            }
        }
        // =========================================================================

        const primaryKey = process.env.PRIMARY_API_KEY || process.env.AI_API_KEY;
        const secondKey  = process.env.SECOND_API_KEY;
        const backupKey  = process.env.BACKUP_API_KEY;
        const quizKey    = process.env.QUIZ_API_KEY;
        const searchKey  = process.env.SEARCH_API_KEY;
        const thucdonKey = process.env.THUCDON_API_KEY;
        const thirdKey   = process.env.THIRD_API_KEY;
        
        let keysToTry = [];
        if (source === 'assistant' || source === 'vongchan') {
            keysToTry = [primaryKey, backupKey];
        } else if (source === 'quiz') {
            keysToTry = [quizKey, secondKey];
        } else if (source === 'thucdon') {
            keysToTry = [thucdonKey, thirdKey];
        } else if (source === 'sach_ai') {
            keysToTry = [thirdKey, backupKey];
        } else {
            keysToTry = [searchKey, secondKey];
        }

        keysToTry = [...new Set(keysToTry.filter(Boolean))];

        if (keysToTry.length === 0) {
            return { statusCode: 500, headers, body: JSON.stringify({ error: 'Cấu hình máy chủ chưa hoàn tất.' }) };
        }

        // Model tương thích chính xác với AI Studio dự án dailuantriyhct
        const models = ['gemini-3.6-flash', 'gemini-3.5-flash'];
        const partsPayload = [];
        
        if (image && typeof image === 'string' && image.startsWith('data:image')) {
            const matches = image.match(/^data:(image\/\w+);base64,(.+)$/);
            if (matches && matches.length === 3) {
                partsPayload.push({ inline_data: { mime_type: matches[1], data: matches[2] } });
            }
        }

        // Xử lý không thêm câu dẫn nhập nếu yêu cầu là JSON để tránh AI trả về lỗi văn bản
        const isJsonPrompt = prompt.includes('JSON') || source === 'backup' || source === 'quiz';
        partsPayload.push({ 
            text: isJsonPrompt ? prompt : ("Bạn là trợ lý YHCT chuyên nghiệp. Hãy trả lời ngắn gọn, chuẩn xác: " + prompt)
        });

        // Bổ sung mảng safetySettings để chặn Google ngắt kết nối khi sinh dữ liệu y tế
        const apiRequestBody = {
            contents: [{ parts: partsPayload }],
            safetySettings: [
                { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" },
                { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
                { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
                { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" }
            ]
        };

        // Bổ sung maxOutputTokens nếu client gửi max_tokens lên
        if (max_tokens && !isNaN(max_tokens)) {
            apiRequestBody.generationConfig = {
                maxOutputTokens: parseInt(max_tokens, 10)
            };
        }

        const timeoutMs = (source === 'vongchan' || source === 'assistant' || source === 'thucdon' || source === 'quiz' || source === 'sach_ai') ? 35000 : 15000;

        for (const apiKey of keysToTry) {
            for (const model of models) {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

                try {
                    const url = `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${apiKey.trim()}`;
                    const response = await fetch(url, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        signal: controller.signal,
                        body: JSON.stringify(apiRequestBody)
                    });

                    clearTimeout(timeoutId);
                    const data = await response.json();

                    if (response.ok && data.candidates?.[0]?.content?.parts?.[0]?.text) {
                        return {
                            statusCode: 200,
                            headers,
                            body: JSON.stringify({ reply: data.candidates[0].content.parts[0].text })
                        };
                    }
                } catch (err) {
                    clearTimeout(timeoutId);
                }
            }
        }

        return { statusCode: 503, headers, body: JSON.stringify({ error: 'Hệ thống AI đang bận. Vui lòng thử lại sau ít phút.' }) };

    } catch (error) {
        return { statusCode: 500, headers, body: JSON.stringify({ error: 'Lỗi xử lý hệ thống nội bộ.' }) };
    }
};
