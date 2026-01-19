import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <section className="relative min-h-screen bg-[#0a0a0a] flex items-center justify-center overflow-hidden font-sans">
            {/* 1. Background Glow Ornaments */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff29ed] opacity-[0.07] blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff29ed] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 text-center px-6">
                {/* 2. Animated 404 Text */}
                <div className="relative inline-block">
                    <h1 className="text-[150px] md:text-[200px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#ff29ed] to-[#701a68] animate-pulse">
                        404
                    </h1>
                    {/* Shadow effect */}
                    <div className="absolute inset-0 blur-3xl bg-[#ff29ed]/20 -z-10 animate-pulse" />
                </div>

                {/* 3. Error Message */}
                <div className="mt-[-20px] md:mt-[-40px]">
                    <h2 className="text-white text-3xl md:text-5xl font-bold italic tracking-tight mb-4">
                        LOST IN <span className="text-[#ff29ed]">SPACE?</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-md mx-auto leading-relaxed mb-10">
                        Halaman yang Anda cari telah dipindahkan atau tidak pernah ada di semesta ini.
                    </p>
                </div>

                {/* 4. Action Button (Back to Home) */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/"
                        className="group relative px-8 py-3.5 bg-[#ff29ed] text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,41,237,0.5)] hover:scale-105 active:scale-95"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org" className="h-5 w-5 transform transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Reality
                        </span>
                    </Link>

                    <Link
                        to="/support"
                        className="px-8 py-3.5 border border-[#ff29ed]/30 text-white font-semibold rounded-xl backdrop-blur-sm hover:bg-white/5 transition-colors"
                    >
                        Contact Support
                    </Link>
                </div>
            </div>

            {/* 5. Decorative Floating Particles (Optional CSS Animation) */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-[#ff29ed] rounded-full animate-ping opacity-20"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}
                    />
                ))}
            </div>
        </section>
    );
}
