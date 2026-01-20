import { Link } from 'react-router-dom'

import Magnet from "../components/Magnet"

import { ListData } from '../assets/image/DataImg';

export default function About() {
    return (
        // Menggunakan bg-gradient-to-b dari warna landing page ke warna yang sedikit lebih terang
        <section
            id="about"
            className="relative min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#121212] py-24 px-6 overflow-hidden"
        >
            {/* 1. Dekorasi Cahaya Statis (Agar terlihat menyambung dengan DotGrid) */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[#ff29ed] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

            {/* 2. Glow di pojok kanan bawah */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff29ed] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <div className="inline-block px-4 py-1 rounded-full border border-[#ff29ed]/20 bg-[#ff29ed]/5 mb-6">
                        <h2 className="text-[#ff29ed] text-[10px] font-bold tracking-[0.5em] uppercase">
                            Discover
                        </h2>
                    </div>
                    <h3 className="text-white text-4xl md:text-6xl font-gluten font-bold italic leading-tight">
                        All-in-One <span className="text-[#ff29ed]">Super</span> Tools
                    </h3>
                    <p className="text-gray-400 mt-8 max-w-2xl mx-auto leading-relaxed text-lg">
                        Platform serbaguna yang dirancang untuk memudahkan kehidupan digital Anda.
                        Mulai dari mengunduh konten media sosial hingga asisten AI yang cerdas.
                    </p>
                </div>
            </div>



            {/* Container untuk menaruh tombol di tengah */}
            <div className="flex justify-center mt-16 relative z-20">
                <Link to='/#about' className=""> {/* cursor-none jika Magnet memiliki custom cursor, jika tidak hapus saja */}
                    <Magnet padding={50} disabled={false} magnetStrength={20}>
                        <div className="group relative px-8 py-4 bg-white/5 border border-[#ff29ed]/30 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-[#ff29ed] hover:bg-[#ff29ed]/10">

                            {/* Efek Cahaya di belakang teks saat hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-[#ff29ed]/20 rounded-2xl" />

                            <div className="relative flex items-center gap-3">
                                <svg
                                    className="w-5 h-5 text-[#ff29ed] transform transition-transform duration-300 group-hover:translate-x-1 rotate-180"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>

                                <span className="text-white font-bold tracking-wider uppercase text-sm">
                                    Back To Home Pages
                                </span>


                            </div>
                        </div>
                    </Magnet>
                </Link>
            </div>

        </section >
    )
}
