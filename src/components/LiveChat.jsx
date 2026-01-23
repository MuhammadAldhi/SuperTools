import { useState, useEffect, useRef } from 'react';

const LiveCHat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false); // State untuk alert custom
    const [inputValue, setInputValue] = useState('');
    
    const initialMessage = [{ id: 1, text: "Halo! Ada yang bisa kami bantu hari ini? 😊", sender: 'admin' }];

    const [hasReplied, setHasReplied] = useState(() => {
        return sessionStorage.getItem('chat_replied') === 'true';
    });

    const [messages, setMessages] = useState(() => {
        const savedMessages = sessionStorage.getItem('chat_history');
        return savedMessages ? JSON.parse(savedMessages) : initialMessage;
    });

    const scrollRef = useRef(null);

    useEffect(() => {
        sessionStorage.setItem('chat_history', JSON.stringify(messages));
        sessionStorage.setItem('chat_replied', hasReplied);
        
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, hasReplied]);

    // FUNGSI CLEAR CHAT
    const confirmClearChat = () => {
        setMessages(initialMessage);
        setHasReplied(false);
        sessionStorage.removeItem('chat_history');
        sessionStorage.removeItem('chat_replied');
        setShowConfirm(false);
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMsg = { id: Date.now(), text: inputValue, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');

        if (!hasReplied) {
            setTimeout(() => {
                const adminMsg = {
                    id: Date.now() + 1,
                    text: "Terima kasih telah menghubungi kami. Admin akan segera membalas pesan Anda.",
                    sender: 'admin'
                };
                setMessages(prev => [...prev, adminMsg]);
                setHasReplied(true);
            }, 1000);
        }
    };

    return (
        <>
            {/* ALERT CUSTOM DI TENAH LAYAR */}
            {showConfirm && (
                <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                    <div className="bg-[#0a0a0a] border border-[#ff29ed] p-6 rounded-2xl shadow-[0_0_50px_rgba(255,41,237,0.3)] max-w-sm w-full text-center scale-in-center">
                        <div className="w-16 h-16 bg-[#ff29ed]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#ff29ed]/50">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ff29ed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">Hapus Chat?</h3>
                        <p className="text-gray-400 text-sm mb-6">Seluruh riwayat percakapan Anda akan dihapus permanen.</p>
                        <div className="flex gap-3">
                            <button 
                                onClick={() => setShowConfirm(false)}
                                className="flex-1 py-2 rounded-xl border border-gray-700 text-gray-400 hover:bg-gray-800 transition-all"
                            >
                                Batal
                            </button>
                            <button 
                                onClick={confirmClearChat}
                                className="flex-1 py-2 rounded-xl bg-[#ff29ed] text-white font-bold hover:shadow-[0_0_20px_#ff29ed] transition-all"
                            >
                                Hapus
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end pointer-events-none font-sans">
                {/* 1. Jendela Chat */}
                <div className={`
                    pointer-events-auto mb-4 w-80 h-[450px] bg-[#0a0a0a] rounded-2xl shadow-[0_0_20px_rgba(255,41,237,0.2)] 
                    border border-[#ff29ed]/30 overflow-hidden transition-all duration-300 origin-bottom-right flex flex-col
                    ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
                `}>
                    {/* Header */}
                    <div className="bg-[#0a0a0a] border-b border-[#ff29ed]/30 p-4 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#ff29ed] rounded-full animate-pulse shadow-[0_0_8px_#ff29ed]"></div>
                            <span className="font-bold text-[#ff29ed] tracking-wide text-xs uppercase italic">Support</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <button onClick={() => setShowConfirm(true)} className="text-gray-500 hover:text-red-500 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-[#ff29ed] transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Area Pesan */}
                    <div 
                        ref={scrollRef} 
                        className="flex-1 p-4 overflow-y-auto bg-[#0a0a0a] flex flex-col gap-3 scroll-smooth no-scrollbar"
                    >
                        <style>{`.no-scrollbar::-webkit-scrollbar { display: none; } .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
                        {messages.map((msg) => (
                            <div key={msg.id} className={`p-3 rounded-2xl max-w-[85%] text-sm ${msg.sender === 'user' ? 'bg-[#ff29ed] text-white self-end rounded-tr-none shadow-[0_0_10px_rgba(255,41,237,0.2)]' : 'bg-[#1a1a1a] border border-gray-800 text-gray-400 self-start rounded-tl-none'}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSendMessage} className="p-3 border-t border-[#ff29ed]/20 bg-[#0a0a0a] flex gap-2">
                        <input 
                            type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Tulis pesan..." className="flex-1 bg-[#1a1a1a] border border-gray-800 rounded-full px-4 py-2 text-sm text-gray-400 focus:border-[#ff29ed] focus:ring-1 focus:ring-[#ff29ed] outline-none"
                        />
                        <button type="submit" className="bg-[#ff29ed] p-2 rounded-full hover:shadow-[0_0_15px_#ff29ed] transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" className="rotate-90 h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                            </svg>
                        </button>
                    </form>
                </div>

                {/* Toggle Button */}
                <div className="relative group flex flex-col items-center">
                    {!isOpen && (
                        <div className="absolute bottom-full mb-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 duration-500 shadow-lg">
                            <div className="bg-[#ff29ed] text-white text-[10px] font-black p-2 px-3 rounded-lg relative z-10 uppercase tracking-widest flex items-center gap-2">
                                <span className="flex h-2 w-2 relative"><span className="animate-ping absolute h-full w-full rounded-full bg-white opacity-75"></span><span className="relative h-2 w-2 rounded-full bg-white"></span></span>
                                Admin Online
                            </div>
                            <div className="bg-[#ff29ed] absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 rotate-45 p-1" />
                        </div>
                    )}
                    <div onClick={() => setIsOpen(!isOpen)} className={`pointer-events-auto shadow-[0_0_20px_rgba(255,41,237,0.3)] flex items-center bg-[#0a0a0a] border-2 border-[#ff29ed] p-4 rounded-full cursor-pointer duration-300 active:scale-95 text-[#ff29ed] ${isOpen ? 'rotate-90 !border-gray-600 !text-gray-600 shadow-none' : 'hover:shadow-[0_0_30px_#ff29ed]'}`}>
                        {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> : <div className="flex items-center group-hover:gap-3 transition-all duration-300"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383L12 21.75l-3.674-4.634c-1.171-.115-2.332-.262-3.478-.441-1.978-.292-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.678 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clipRule="evenodd" /></svg><span className="max-w-0 overflow-hidden whitespace-nowrap transition-all duration-500 group-hover:max-w-[120px] text-gray-500 font-bold text-sm">Tanya Kami</span></div>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default LiveCHat;
