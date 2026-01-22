

import CountUp from '../components/CountUp'




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
                <div className="text-center mb-5">
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

            <div className="min-h-screen w-full p-4 sm:p-8 flex justify-center items-center">
                {/* 
        Mobile: grid-cols-1 (satu kolom memanjang ke bawah)
        Desktop (lg): grid-cols-7 (kembali ke layout asli Anda)
    */}
                <div className="grid grid-cols-1 md:grid-cols-7 md:grid-rows-5 gap-4 w-full max-w-6xl md:h-[80vh] md:w-[140vh] font-bold text-white">

                    {/* AI SECTION */}
                    <div className="md:col-span-5 md:row-span-2 border-1 transition-all border-[#ff29ed] hover:shadow-[0_0_20px_rgba(255,41,237,0.5)] rounded-xl flex items-center p-6 md:p-10 order-1">
                        <div className="flex flex-col">
                            <span className="text-5xl md:text-7xl text-white font-bold font-gluten">
                                <CountUp from={0} to={15} duration={1} className="count-up-text pr-1" />+
                            </span>
                            <p className="text-white text-lg mt-2">Ai</p>
                            <p className="text-gray-400 text-sm">Fully maintained and growing monthly</p>
                        </div>
                    </div>

                    {/* DOWNLOADER SECTION */}
                    <div className="md:col-span-2 md:row-span-3 md:row-start-3 border-1 transition-all border-[#ff29ed] hover:shadow-[0_0_20px_rgba(255,41,237,0.5)] rounded-xl flex flex-col justify-end p-6 md:p-10 order-4 md:order-2">
                        <span className="text-5xl md:text-7xl text-white font-bold font-gluten">
                            <CountUp from={0} to={20} duration={1} className="count-up-text pr-1" />+
                        </span>
                        <p className="text-white text-lg mt-2">Downloader</p>
                        <p className="text-gray-400 text-sm">All Sosmed Downloader Video/Photo</p>
                    </div>

                    {/* SUPER TOOLS (LOGO) */}
                    <div className="hidden md:col-span-3 md:col-start-3 md:row-start-3 border-1 transition-all border-[#ff29ed] rounded-xl md:flex items-center justify-center p-6 hover:shadow-[0_0_20px_rgba(255,41,237,0.5)] order-2 md:order-3">
                        <span className="text-3xl md:text-4xl font-gluten text-[#ff29ed] pr-2">Super</span>
                        <span className='text-3xl md:text-4xl font-gluten text-white'>Tools</span>
                    </div>

                    {/* FREE SECTION */}
                    <div className="md:col-span-3 md:row-span-2 md:col-start-3 md:row-start-4 border-1 transition-all border-[#ff29ed] rounded-xl flex flex-col justify-center p-6 md:p-10 hover:shadow-[0_0_20px_rgba(255,41,237,0.2)] order-5 md:order-4">
                        <span className="text-5xl md:text-7xl text-white font-bold font-gluten">
                            <CountUp from={0} to={100} duration={1} className="count-up-text pr-1" />%
                        </span>
                        <p className="text-white text-lg mt-2">Free</p>
                        <p className="text-gray-400 text-sm">unlimited without limitations</p>
                    </div>

                    {/* TOOLS SECTION */}
                    <div className="md:col-span-2 md:row-span-3 md:col-start-6 md:row-start-1 border-1 transition-all border-[#ff29ed] rounded-xl flex flex-col p-6 md:p-10 justify-end hover:shadow-[0_0_20px_rgba(255,41,237,0.5)] order-3 md:order-5">
                        <span className="text-5xl md:text-7xl text-white font-bold font-gluten">
                            <CountUp from={0} to={17} duration={1} className="count-up-text pr-1" />+
                        </span>
                        <p className="text-white text-lg mt-2">Tools</p>
                        <p className="text-gray-400 text-sm">Improve your work</p>
                    </div>

                    {/* SEARCH SECTION */}
                    <div className="md:col-span-2 md:row-span-2 md:col-start-6 md:row-start-4 border-1 transition-all border-[#ff29ed] rounded-xl flex flex-col p-6 md:p-10 justify-center hover:shadow-[0_0_20px_rgba(255,41,237,0.5)] order-6">
                        <span className="text-5xl md:text-7xl text-white font-bold font-gluten">
                            <CountUp from={0} to={19} duration={1} className="count-up-text pr-1" />+
                        </span>
                        <p className="text-white text-lg mt-2">Search</p>
                        <p className="text-gray-400 text-sm">Speed up searches</p>
                    </div>

                </div>
            </div>
        </section>
    );
}
