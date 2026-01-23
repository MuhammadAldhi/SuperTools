// api/chat.js
export default async function handler(req, res) {
    const BOT_TOKEN = '8521186249:AAGqpqUedD9JMIaZhDL1RhCZq6hyb6MbBvM';
    
    // Ambil parameter dari query atau body
    const { method, offset } = req.query;

    if (req.method === 'POST') {
        // Logika kirim pesan
        const response = await fetch(`https://api.telegram.org/${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(req.body),
        });
        const data = await response.json();
        return res.status(200).json(data);
    } else {
        // Logika ambil pesan (getUpdates)
        const url = `https://api.telegram.org/${BOT_TOKEN}/getUpdates?offset=${offset || 0}`;
        const response = await fetch(url);
        const data = await response.json();
        return res.status(200).json(data);
    }
}
