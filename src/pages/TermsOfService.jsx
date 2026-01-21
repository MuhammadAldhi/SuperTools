import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 py-20 px-6 sm:px-10 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 border-b border-white/10 pb-8 text-center sm:text-left">
          <h1 className="text-4xl font-bold text-white mb-4">
            Syarat & <span className="text-[#ff29ed]">Ketentuan</span>
          </h1>
          <p className="text-sm text-gray-500">Terakhir diperbarui: 22 Januari 2026</p>
        </div>

        {/* Konten Utama */}
        <div className="space-y-10 leading-relaxed text-sm sm:text-base">
          
          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="w-1 h-6 bg-[#ff29ed] mr-3 rounded-full"></span>
              1. Penerimaan Ketentuan
            </h2>
            <p>
              Dengan mengakses dan menggunakan platform ini, Anda dianggap telah membaca, memahami, dan menyetujui untuk terikat oleh seluruh Syarat dan Ketentuan ini. Jika Anda tidak menyetujui bagian apa pun, mohon untuk tidak melanjutkan penggunaan layanan kami.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="w-1 h-6 bg-[#ff29ed] mr-3 rounded-full"></span>
              2. Penggunaan Layanan
            </h2>
            <p>
              Anda setuju untuk menggunakan layanan kami hanya untuk tujuan yang sah dan tidak melanggar hukum yang berlaku di Indonesia maupun hukum internasional. Anda dilarang:
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-400">
              <li>Menggunakan platform untuk tujuan penipuan atau aktivitas ilegal.</li>
              <li>Berusaha meretas, merusak, atau mengganggu infrastruktur keamanan kami.</li>
              <li>Mengumpulkan data pengguna lain tanpa izin tertulis.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="w-1 h-6 bg-[#ff29ed] mr-3 rounded-full"></span>
              3. Hak Kekayaan Intelektual
            </h2>
            <p>
              Seluruh konten yang tersedia di platform ini, termasuk teks, grafis, logo, ikon, dan kode perangkat lunak adalah milik kami atau pemberi lisensi kami dan dilindungi oleh undang-undang hak cipta.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="w-1 h-6 bg-[#ff29ed] mr-3 rounded-full"></span>
              4. Berlangganan (Subscription)
            </h2>
            <p>
              Dengan mendaftarkan email Anda, Anda setuju untuk menerima komunikasi pemasaran dan pembaruan dari kami. Anda dapat berhenti berlangganan kapan saja melalui tautan "unsubscribe" yang tersedia di setiap email yang kami kirimkan.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="w-1 h-6 bg-[#ff29ed] mr-3 rounded-full"></span>
              5. Batasan Tanggung Jawab
            </h2>
            <p>
              Kami tidak bertanggung jawab atas kerugian langsung maupun tidak langsung yang timbul dari penggunaan atau ketidakmampuan Anda dalam menggunakan layanan kami. Layanan disediakan "sebagaimana adanya" tanpa jaminan dalam bentuk apa pun.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <span className="w-1 h-6 bg-[#ff29ed] mr-3 rounded-full"></span>
              6. Perubahan Ketentuan
            </h2>
            <p>
              Kami berhak untuk mengubah atau mengganti Syarat dan Ketentuan ini kapan saja. Perubahan akan berlaku segera setelah dipublikasikan di halaman ini. Penggunaan berkelanjutan atas platform setelah perubahan tersebut merupakan bentuk persetujuan Anda.
            </p>
          </section>

          <div className="pt-10 border-t border-white/10 text-center sm:text-left">
            <h2 className="text-xl font-semibold text-white mb-2">Punya Pertanyaan?</h2>
            <p className="text-gray-400">Silakan hubungi tim hukum kami di:</p>
            <p className="text-[#ff29ed] mt-2 font-mono font-bold tracking-wider">aldhis907@gmail.com</p>
          </div>
        </div>

        {/* Footer Navigation */}
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

export default TermsOfService;
