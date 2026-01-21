import React from 'react';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 py-20 px-6 sm:px-10 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 border-b border-white/10 pb-8 relative">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#ff29ed]/10 blur-[100px] rounded-full"></div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Penyangkalan <span className="text-[#ff29ed]">(Disclaimer)</span>
          </h1>
          <p className="text-sm text-gray-500 uppercase tracking-widest">Informasi Hukum & Batasan Tanggung Jawab</p>
        </div>

        {/* Content Section */}
        <div className="space-y-10 leading-relaxed text-sm sm:text-base relative z-10">
          
          <section className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h2 className="text-xl font-semibold text-white mb-4">Informasi Umum</h2>
            <p>
              Semua informasi yang disediakan di situs web ini diterbitkan dengan niat baik dan hanya untuk tujuan informasi umum. Kami tidak memberikan jaminan apa pun tentang kelengkapan, keandalan, dan keakuratan informasi ini.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="w-2 h-2 bg-[#ff29ed] mr-3 rounded-full shadow-[0_0_10px_#ff29ed]"></span>
              Risiko Pengguna
            </h2>
            <p>
              Segala tindakan yang Anda lakukan atas informasi yang Anda temukan di situs web ini adalah tanggung jawab Anda sendiri. Kami tidak akan bertanggung jawab atas kerugian dan/atau kerusakan sehubungan dengan penggunaan situs web kami.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="w-2 h-2 bg-[#ff29ed] mr-3 rounded-full shadow-[0_0_10px_#ff29ed]"></span>
              Link Eksternal
            </h2>
            <p>
              Melalui situs web kami, Anda mungkin mengunjungi situs web lain dengan mengikuti tautan ke situs eksternal tersebut. Meskipun kami berupaya menyediakan tautan berkualitas ke situs web yang bermanfaat dan etis, kami tidak memiliki kendali atas konten dan sifat situs tersebut. Pemilik situs dan konten dapat berubah tanpa pemberitahuan.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="w-2 h-2 bg-[#ff29ed] mr-3 rounded-full shadow-[0_0_10px_#ff29ed]"></span>
              Nasihat Profesional
            </h2>
            <p>
              Konten di sini bukan merupakan nasihat profesional (seperti medis, hukum, atau keuangan). Selalu cari saran dari profesional yang berkualifikasi sebelum mengambil keputusan berdasarkan informasi yang Anda baca di platform ini.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="w-2 h-2 bg-[#ff29ed] mr-3 rounded-full shadow-[0_0_10px_#ff29ed]"></span>
              Persetujuan
            </h2>
            <p>
              Dengan menggunakan situs web kami, Anda dengan ini menyetujui penafian kami dan menyetujui ketentuan-ketentuannya.
            </p>
          </section>

          {/* Contact Box */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-[#ff29ed]/10 to-transparent border border-[#ff29ed]/20 text-center">
            <h3 className="text-lg font-bold text-white mb-2">Pembaruan</h3>
            <p className="text-gray-400 text-sm italic">
              Terakhir diperbarui pada 22 Januari 2026. Jika kami memperbarui, mengubah, atau membuat perubahan apa pun pada dokumen ini, perubahan tersebut akan diposting secara jelas di sini.
            </p>
          </div>
        </div>

        {/* Back Button */}
       <div className="mt-16 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <button 
            onClick={() => window.history.back()}
            className="group flex items-center gap-2 text-sm font-bold text-white bg-white/5 hover:bg-[#ff29ed]/10 border border-white/10 hover:border-[#ff29ed]/50 px-8 py-3 rounded-full transition-all duration-300"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Kembali
          </button>
          
          <p className="text-xs text-gray-600 italic text-center">
            Dokumen ini dibuat secara elektronik dan berlaku tanpa tanda tangan basah.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
