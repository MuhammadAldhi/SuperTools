import { Link } from 'react-router-dom'

import Magnet from '../components/Magnet'

import Stack from '../components/Stack'
import { ListData } from '../assets/image/DataImg';

const images = [
    "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
    "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
    "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
    "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format"
];


export default function About() {
    return (
        // Menggunakan bg-gradient-to-b dari warna landing page ke warna yang sedikit lebih terang
        <section
            id="about"
            className="relative min-h-screen bg-linear-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#121212] py-24 px-6 overflow-hidden"
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


            <div className='w-full min-h-[400px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-center justify-items-center relative z-10 px-9'>
                {/* Gunakan ListData.slice agar mapping sesuai dengan isi data Anda */}
                {ListData.slice(0, 5).map((item, index) => (
                    <div key={index} className="flex flex-col items-center gap-4">

                        {/* Pembungkus Stack (Background Ungu Transparan) */}
                        <div className="relative p-10 bg-[#ff29ed]/10 border border-[#ff29ed]/20 rounded-3xl shadow-xl">

                            <div className="w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] md:w-[208px] md:h-[208px]">
                                <Stack
                                    randomRotation={false}
                                    sensitivity={200}
                                    sendToBackOnClick={false}
                                    cards={ListData.slice(0, 9).map((card, i) => (
                                        <div key={i} className="w-full h-full rounded-xl overflow-hidden shadow-2xl">
                                            <img
                                                src={card.img}
                                                alt={`card-${i}`}
                                                className="w-full h-full object-cover pointer-events-none"
                                            />
                                        </div>
                                    ))}
                                    autoplay={true}
                                    autoplayDelay={1500 + (index * 200)}
                                    pauseOnHover={true}
                                />
                            </div>
                        </div>

                        {/* Keterangan Tools Dinamis */}
                        <div className="text-center">
                            <span className="text-[#ff29ed] text-lg font-bold uppercase tracking-tighter bg-[#ff29ed]/10 px-3 py-1 rounded-full border border-[#ff29ed]/20">
                                {/* Mengambil title dari ListData */}
                                {item.title}
                            </span>
                            <p className="text-gray-400 text-[12px] mt-2 max-w-[150px] leading-relaxed">
                                {/* Mengambil deskripsi dari ListData */}
                                {item.deskripsi}
                            </p>
                        </div>
                    </div>
                ))}
            </div>







            {/* Container untuk menaruh tombol di tengah */}
            <div className="flex justify-center mt-16 relative z-20">
                <Link to='/more'> {/* cursor-none jika Magnet memiliki custom cursor, jika tidak hapus saja */}
                    <Magnet padding={50} disabled={false} magnetStrength={20}>
                        <div className="group relative px-8 py-4 bg-white/5 border border-[#ff29ed]/30 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:border-[#ff29ed] hover:bg-[#ff29ed]/10">

                            {/* Efek Cahaya di belakang teks saat hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-[#ff29ed]/20 rounded-2xl" />

                            <div className="relative flex items-center gap-3">
                                <span className="text-white font-bold tracking-wider uppercase text-sm">
                                    Explore More Features
                                </span>

                                {/* Icon Panah Animatif */}
                                <svg
                                    className="w-5 h-5 text-[#ff29ed] transform transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </div>
                    </Magnet>
                </Link>
            </div>



        </section>
    );
}
