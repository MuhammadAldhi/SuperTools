import { Link } from 'react-router-dom'


import SpotlightChard from "../component/SpotlightCard"
import Magnet from "../component/Magnet"

const features = [
    { id: 1, title: "AI Assistant", img: "https://picsum.photos/200/300?random=1", url: '/a', deskripsi: 'isi deskrpisi' },
    { id: 2, title: "Video Downloader", img: "https://picsum.photos/200/300?random=1", url: '/a', deskripsi: 'isi deskrpisi' },
    { id: 3, title: "Fast Converter", img: "https://picsum.photos/200/300?random=1", url: '/a', deskripsi: 'isi deskrpisi' },
    { id: 4, title: "Secure Storage", img: "https://picsum.photos/200/300?random=1", url: '/a', deskripsi: 'isi deskrpisi' },
    { id: 5, title: "Smart Editor", img: "https://picsum.photos/200/300?random=1", url: '/a', deskripsi: 'isi deskrpisi' },
    { id: 6, title: "SEO Tools", img: "https://picsum.photos/200/300?random=1", url: '/a', deskripsi: 'isi deskrpisi' },
    { id: 7, title: "Social Tracker", img: "https://picsum.photos/200/300?random=1", url: '/a', deskripsi: 'isi deskrpisi' },
    { id: 8, title: "Data Analytics", img: "https://picsum.photos/200/300?random=1", url: '/a', deskripsi: 'isi deskrpisi' },
    { id: 9, title: "Data Analytics", img: "https://picsum.photos/200/300?random=1", url: '/a', deskripsi: 'isi deskrpisi' },
    { id: 10, title: "Data Analytics", img: "https://picsum.photos/200/300?random=1", url: '/a', deskripsi: 'isi deskrpisi' },
    { id: 11, title: "Data Analytics", img: "https://picsum.photos/200/300?random=1", url: '/a', deskripsi: 'isi deskrpisi' },
    { id: 12, title: "Data Analytics", img: "https://picsum.photos/200/300?random=1", url: '/a', deskripsi: 'isi deskrpisi' },
    { id: 13, title: "Data Analytics", img: "https://picsum.photos/200/300?random=1", url: '/a', deskripsi: 'isi deskrpisi' },
    { id: 14, title: "Data Analytics", img: "https://picsum.photos/200/300?random=1", url: '/a', deskripsi: 'isi deskrpisi' },
    { id: 15, title: "Data Analytics", img: "https://picsum.photos/200/300?random=1", url: '/a', deskripsi: 'isi deskrpisi' },
    { id: 16, title: "Data Analytics", img: "https://picsum.photos/200/300?random=1", url: '/a', deskripsi: 'isi deskrpisi' },
    { id: 17, title: "Data Analytics", img: "https://picsum.photos/200/300?random=1", url: '/a', deskripsi: 'isi deskrpisi' },
    { id: 18, title: "Data Analytics", img: "https://picsum.photos/200/300?random=1", url: '/a', deskripsi: 'isi deskrpisi' },
    { id: 19, title: "Data Analytics", img: "https://picsum.photos/200/300?random=1", url: '/a', deskripsi: 'isi deskrpisi' },
    { id: 20, title: "Data Analytics", img: "https://picsum.photos/200/300?random=1", url: '/a', deskripsi: 'isi deskrpisi' },
    { id: 21, title: "Data Analytics", img: "https://picsum.photos/200/300?random=1", url: '/a', deskripsi: 'isi deskrpisi' },
    { id: 22, title: "Data Analytics", img: "https://picsum.photos/200/300?random=1", url: '/a', deskripsi: 'isi deskrpisi' },
    { id: 23, title: "Data Analytics", img: "https://picsum.photos/200/300?random=1", url: '/a', deskripsi: 'isi deskrpisi' },

];


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

            <div className="flex justify-center w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10 max-w-7xl">
                    {features.map((item) => (
                        <SpotlightChard
                            key={item.id}
                            className="h-[420px] w-full max-w-[250px] mx-auto text-white flex flex-col overflow-hidden"
                        >
                            {/* Gambar berbeda setiap kartu */}
                            <div className="w-full h-40 overflow-hidden rounded-t-xl mb-4 relative group">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Overlay Tipis agar gambar menyatu */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60"></div>
                            </div>

                            {/* Konten Teks */}
                            <div className="p-4 flex-grow">
                                <h4 className="font-bold text-[#ff29ed] mb-2 text-lg">{item.title}</h4>
                                <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                                    {item.deskripsi}
                                </p>
                            </div>

                            {/* Tombol Explore yang Menarik */}
                            <div className="p-4 pt-0">
                                <Link
                                    to={item.url}
                                    className="group relative flex items-center justify-center w-full py-2.5 text-xs font-bold uppercase tracking-widest text-white border border-[#ff29ed]/40 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#ff29ed] hover:shadow-[0_0_15px_rgba(255,41,237,0.3)]"
                                >
                                    {/* Background Slide Effect */}
                                    <div className="absolute inset-0 w-0 bg-[#ff29ed] transition-all duration-300 ease-out group-hover:w-full"></div>

                                    {/* Teks & Icon */}
                                    <span className="relative z-10 flex items-center gap-2 group-hover:text-black">
                                        Explore Now
                                        <svg
                                            xmlns="http://www.w3.org"
                                            className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </SpotlightChard>
                    ))}
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
