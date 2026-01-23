import { useState, useEffect, useRef } from 'react';

const LiveCHat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [inputValue, setInputValue] = useState('');

    // --- KONFIGURASI ---
    // Di Vercel, file api/chat.js otomatis menjadi endpoint /api/chat
    const API_URL = '/api/chat';
    const ADMIN_TELEGRAM_ID = '7875257969';

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

    // --- AMBIL BALASAN ---
    useEffect(() => {
        const fetchUpdates = async () => {
            try {
                // Memanggil API serverless function
                const response = await fetch(`${API_URL}?offset=${lastUpdateId + 1}`);
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
                                    const adminReply = { id: msg.message_id, text: adminMessage, sender: 'admin' };
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
                console.error("Polling error:", error);
            }
        };

        const interval = setInterval(() => {
            if (isOpen) fetchUpdates();
        }, 3000);
        return () => clearInterval(interval);
    }, [isOpen, lastUpdateId, userId]);

    // --- KIRIM PESAN ---
    const sendToTelegram = async (messageText) => {
        try {
            await fetch(API_URL, {
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
                    {/* Header */}
                    <div className="bg-[#0a0a0a] border-b border-[#ff29ed]/30 p-4 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#ff29ed] rounded-full animate-pulse shadow-[0_0_8px_#ff29ed]"></div>
                            <div className="flex flex-col">
                                <span className="font-bold text-[#ff29ed] text-[10px] uppercase tracking-widest italic">Admin Support</span>
                                <span className="text-[9px] text-gray-500">Session: #{userId}</span>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <button onClick={() => setShowConfirm(true)} className="text-gray-600 hover:text-red-500 transition-colors"><svg xmlns="http://www.w3.org" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></button>
                            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-[#ff29ed]"><svg xmlns="http://www.w3.org" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
                        </div>
                    </div>

                    {/* Chat Messages */}
                    <div
                        ref={scrollRef}
                        className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#050505] scrollbar-hide"
                        style={{
                            msOverflowStyle: 'none', // Untuk IE/Edge
                            scrollbarWidth: 'none'   // Untuk Firefox
                        }}
                    >
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${msg.sender === 'user'
                                        ? 'bg-[#ff29ed] text-white rounded-tr-none'
                                        : 'bg-gray-900 text-gray-300 rounded-tl-none border border-gray-800'
                                    }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>


                    {/* Input */}
                    <form onSubmit={handleSendMessage} className="p-4 bg-[#0a0a0a] border-t border-[#ff29ed]/20">
                        <div className="relative">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Tulis pesan..."
                                className="w-full bg-black border border-gray-800 rounded-xl py-2 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-[#ff29ed] transition-all"
                            />
                            <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-[#ff29ed] hover:scale-110 transition-transform">
                                <svg xmlns="http://www.w3.org" className="h-5 w-5 rotate-90" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
                            </button>
                        </div>
                    </form>
                </div>

                {/* Toggle Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="pointer-events-auto w-14 h-14 bg-[#ff29ed] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,41,237,0.5)] hover:scale-110 transition-all active:scale-95 group">
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    ) : (
                        <div className="relative">
                            <svg xmlns="http://www.w3.org" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping"></span>
                        </div>
                    )}
                </button>
            </div>
        </div>
    );
};

export default LiveCHat;
