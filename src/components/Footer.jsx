import { Link } from 'react-router-dom';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[#0a0a0a] pt-20 pb-10 px-6 overflow-hidden border-t border-white/5">
            {/* Efek Cahaya di Footer */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-200 h-[300px] bg-[#ff29ed] opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Kolom 1: Branding */}
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2">
                            <span className="w-8 h-8 bg-[#ff29ed] rounded-lg flex items-center justify-center text-black font-black text-xl">S</span>
                            SUPER<span className="text-[#ff29ed]">TOOLS</span>
                        </Link>
                        <p className="mt-6 text-gray-400 leading-relaxed text-sm">
                            Solusi all-in-one untuk produktivitas digital Anda. Membangun masa depan dengan kecerdasan buatan.
                        </p>
                        <div className="flex gap-4 mt-6">
                            {[
                                {
                                    name: 'whatsapp', url: 'https://wa.me/6287818457387', icon: (
                                        <svg xmlns="http://www.w3.org" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                    )
                                },
                                {
                                    name: 'tiktok', url: 'https://tiktok.com', icon: (
                                        <svg xmlns="http://www.w3.org" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                                    )
                                },
                                {
                                    name: 'instagram', url: 'https://instagram.com/_aldhi1', icon: (
                                        <svg xmlns="http://www.w3.org" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                    )
                                }
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#ff29ed] hover:text-[#ff29ed] hover:shadow-[0_0_15px_rgba(255,41,237,0.4)] transition-all duration-300 text-gray-400"
                                >
                                    <span className="sr-only">{social.name}</span>
                                    {social.icon}
                                </a>
                            ))}
                        </div>

                    </div>

                    {/* Kolom 2: Product */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Product</h4>
                        <ul className="space-y-4">
                            <li><Link to="/ai" className="text-gray-400 hover:text-[#ff29ed] transition-colors text-sm">AI Assistant</Link></li>
                            <li><Link to="/downloader" className="text-gray-400 hover:text-[#ff29ed] transition-colors text-sm">Downloader</Link></li>
                            <li><Link to="/converter" className="text-gray-400 hover:text-[#ff29ed] transition-colors text-sm">Converter</Link></li>
                        </ul>
                    </div>

                    {/* Kolom 3: Support */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Company</h4>
                        <ul className="space-y-4">
                            <li><Link to="/about" className="text-gray-400 hover:text-[#ff29ed] transition-colors text-sm">About Us</Link></li>
                            <li><Link to="/privacy" className="text-gray-400 hover:text-[#ff29ed] transition-colors text-sm">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="text-gray-400 hover:text-[#ff29ed] transition-colors text-sm">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Kolom 4: Newsletter */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Join Our Newsletter</h4>
                        <p className="text-gray-400 text-sm mb-4">Dapatkan update fitur terbaru setiap minggu.</p>
                        <form className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="email@anda.com"
                                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-[#ff29ed] transition-colors"
                            />
                            <button className="bg-[#ff29ed] hover:bg-[#ff29ed]/80 text-white font-bold py-2 rounded-lg text-sm transition-all shadow-[0_0_20px_rgba(255,41,237,0.2)]">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs">
                        © {currentYear} SuperTools. All rights reserved. Built for 2026.
                    </p>
                    <div className="flex gap-6">
                        <span className="flex items-center gap-2 text-xs text-gray-500">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            Sistem Online
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
