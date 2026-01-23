// api/chat.js
export default async function handler(req, res) {
    const BOT_TOKEN = '8521186249:AAGqpqUedD9JMIaZhDL1RhCZq6hyb6MbBvM';
    const BASE_URL = `https://api.telegram.org/bot${BOT_TOKEN}`;

    try {
        if (req.method === 'POST') {
            const response = await fetch(`${BASE_URL}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(req.body),
            });
            const data = await response.json();
            return res.status(200).json(data);
        } else {
            const { offset } = req.query;
            const response = await fetch(`${BASE_URL}/getUpdates?offset=${offset || 0}`);
            const data = await response.json();
            return res.status(200).json(data);
        }
    } catch (error) {
        return res.status(500).json({ ok: false, error: error.message });
    }
}
