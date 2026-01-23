import { useState, useEffect, useRef } from 'react';

const LiveCHat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [inputValue, setInputValue] = useState('');

    // --- KONFIGURASI ---
    const TELEGRAM_BOT_TOKEN = '8521186249:AAGqpqUedD9JMIaZhDL1RhCZq6hyb6MbBvM';
    const ADMIN_TELEGRAM_ID = '7875257969'; // Hanya ID ini yang bisa membalas

    const BASE_URL = `https://api.telegram.org/${TELEGRAM_BOT_TOKEN}`;

    const SEND_URL = `${BASE_URL}/sendMessage`;
    const GET_URL = `${BASE_URL}/getUpdates`;


    // ID Unik User (4 Angka)
    const [userId, setUserId] = useState(() => {
        const savedId = sessionStorage.getItem('chat_user_id');
        if (savedId) return savedId;
        const newId = Math.floor(1000 + Math.random() * 9000).toString();
        sessionStorage.setItem('chat_user_id', newId);
        return newId;
    });

    const initialMessage = [{ id: 1, text: "Halo! Ada yang bisa kami bantu? 😊", sender: 'admin' }];
    const [messages, setMessages] = useState(() => {
        const saved = sessionStorage.getItem('chat_history');
        return saved ? JSON.parse(saved) : initialMessage;
    });

    const [hasReplied, setHasReplied] = useState(() => sessionStorage.getItem('chat_replied') === 'true');
    const [lastUpdateId, setLastUpdateId] = useState(() => parseInt(sessionStorage.getItem('last_update_id')) || 0);
    const scrollRef = useRef(null);

    useEffect(() => {
        sessionStorage.setItem('chat_history', JSON.stringify(messages));
        sessionStorage.setItem('chat_replied', hasReplied);
        sessionStorage.setItem('last_update_id', lastUpdateId);
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, [messages, hasReplied, lastUpdateId]);

    // --- FUNGSI AMBIL BALASAN (VALIDASI ADMIN + ID USER) ---
    useEffect(() => {
        const fetchUpdates = async () => {
            try {
                const response = await fetch(`${GET_URL}?offset=${lastUpdateId + 1}`, {
                    method: 'GET',
                    // Menghindari pre-flight OPTIONS yang berat
                    headers: { 'Accept': 'application/json' }
                });

                // Cek apakah response benar-benar JSON
                const contentType = response.headers.get("content-type");
                if (!response.ok || !contentType || !contentType.includes("application/json")) {
                    return; // Diam saja jika terjadi 502 atau error HTML dari Vercel
                }

                const data = await response.json();

                if (data.ok && data.result.length > 0) {
                    data.result.forEach(update => {
                        const msg = update.message;
                        if (msg && msg.text) {
                            const senderId = msg.from.id.toString();
                            const incomingText = msg.text.trim();

                            if (senderId === ADMIN_TELEGRAM_ID && incomingText.startsWith(userId + ":")) {
                                const adminMessage = incomingText.split(':').slice(1).join(':').trim();
                                if (adminMessage) {
                                    const adminReply = {
                                        id: msg.message_id,
                                        text: adminMessage,
                                        sender: 'admin'
                                    };
                                    setMessages(prev => {
                                        if (prev.find(m => m.id === adminReply.id)) return prev;
                                        return [...prev, adminReply];
                                    });
                                }
                            }
                        }
                        setLastUpdateId(update.update_id);
                    });
                }
            } catch (error) {
                // Silent error agar tidak memenuhi console saat offline/502
            }
        };


        const interval = setInterval(() => {
            if (isOpen) fetchUpdates();
        }, 3000); // Cek setiap 3 detik

        return () => clearInterval(interval);
    }, [isOpen, lastUpdateId, userId, ADMIN_TELEGRAM_ID, GET_URL]);

    // --- KIRIM KE TELEGRAM ---
    const sendToTelegram = async (messageText) => {
        try {
            await fetch(SEND_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: ADMIN_TELEGRAM_ID,
                    text: `🆔 *USER ID:* \`${userId}\`\n💬 *Pesan:* ${messageText}`,
                    parse_mode: 'Markdown'
                })
            });
        } catch (error) {
            console.error("Send error:", error);
        }
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMsg = { id: Date.now(), text: inputValue, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        sendToTelegram(inputValue);
        setInputValue('');

        if (!hasReplied) {
            setTimeout(() => {
                setMessages(prev => [...prev, { id: Date.now() + 1, text: "Pesan terkirim ke Admin. Mohon tunggu.", sender: 'admin' }]);
                setHasReplied(true);
            }, 1000);
        }
    };

    const confirmClearChat = () => {
        setMessages(initialMessage);
        setHasReplied(false);
        setLastUpdateId(0);
        sessionStorage.clear();
        setShowConfirm(false);
        const newId = Math.floor(1000 + Math.random() * 9000).toString();
        setUserId(newId);
        sessionStorage.setItem('chat_user_id', newId);
    };

    return (
        <div className="font-sans text-gray-400">
            {showConfirm && (
                <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 pointer-events-auto">
                    <div className="bg-[#0a0a0a] border border-[#ff29ed] p-6 rounded-2xl shadow-[0_0_50px_rgba(255,41,237,0.3)] max-w-sm w-full text-center">
                        <h3 className="text-white font-bold mb-4">Hapus Chat?</h3>
                        <div className="flex gap-3">
                            <button onClick={() => setShowConfirm(false)} className="flex-1 py-2 border border-gray-700 rounded-xl hover:bg-gray-900 transition-all text-sm">Batal</button>
                            <button onClick={confirmClearChat} className="flex-1 py-2 bg-[#ff29ed] text-white font-bold rounded-xl text-sm">Hapus</button>
                        </div>
                    </div>
                </div>
            )}

            <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end pointer-events-none">
                <div className={`pointer-events-auto mb-4 w-80 h-[450px] bg-[#0a0a0a] rounded-2xl shadow-[0_0_30px_rgba(255,41,237,0.2)] border border-[#ff29ed]/30 overflow-hidden transition-all duration-500 origin-bottom-right flex flex-col ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 translate-y-10'}`}>
                    <div className="bg-[#0a0a0a] border-b border-[#ff29ed]/30 p-4 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#ff29ed] rounded-full animate-pulse shadow-[0_0_8px_#ff29ed]"></div>
                            <div className="flex flex-col">
                                <span className="font-bold text-[#ff29ed] text-[10px] uppercase tracking-widest italic">Admin Support</span>
                                <span className="text-[9px] text-gray-500">Session: #{userId}</span>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <button onClick={() => setShowConfirm(true)} className="text-gray-600 hover:text-red-500 transition-colors"><svg xmlns="http://www.w3.org" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button>
                            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-[#ff29ed]"><svg xmlns="http://www.w3.org" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12" /></svg></button>
                        </div>
                    </div>

                    <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto bg-[#0a0a0a] flex flex-col gap-3 no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
                        {messages.map((msg) => (
                            <div key={msg.id} className={`p-3 rounded-2xl max-w-[85%] text-sm transition-all duration-300 ${msg.sender === 'user' ? 'bg-[#ff29ed] text-white self-end rounded-tr-none shadow-[0_0_15px_rgba(255,41,237,0.2)]' : 'bg-[#1a1a1a] border border-gray-800 text-gray-400 self-start rounded-tl-none'}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleSendMessage} className="p-3 border-t border-[#ff29ed]/20 bg-[#0a0a0a] flex gap-2">
                        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Tulis pesan..." className="flex-1 bg-[#161616] border border-gray-800 rounded-full px-4 py-2 text-sm text-gray-300 focus:border-[#ff29ed] outline-none" />
                        <button type="submit" className="bg-[#ff29ed] p-2 rounded-full hover:shadow-[0_0_20px_#ff29ed] active:scale-90 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org" className="h-5 w-5 text-white transform rotate-90" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
                        </button>
                    </form>
                </div>

                <div onClick={() => setIsOpen(!isOpen)} className={`pointer-events-auto shadow-[0_0_20px_rgba(255,41,237,0.4)] flex items-center justify-center bg-[#0a0a0a] border-2 border-[#ff29ed] w-14 h-14 rounded-full cursor-pointer duration-500 active:scale-90 text-[#ff29ed] ${isOpen ? 'rotate-90 !border-gray-600 !text-gray-600' : 'hover:shadow-[0_0_40px_#ff29ed]'}`}>
                    {isOpen ? <svg xmlns="http://www.w3.org" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12" /></svg> : <svg xmlns="http://www.w3.org" className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 1.821.484 3.53 1.331 5.003L2 22l5.131-1.307A9.944 9.944 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.477 0-2.863-.349-4.089-.963l-.294-.148L4.6 19.645l.764-2.883-.16-.279A7.943 7.943 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" /></svg>}
                </div>
            </div>
        </div>
    );
};

export default LiveCHat;
