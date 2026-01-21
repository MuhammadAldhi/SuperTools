import React from 'react';
import { Link } from 'react-router-dom'; // Jika menggunakan react-router

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 py-20 px-6 sm:px-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 border-b border-white/10 pb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Kebijakan <span className="text-[#ff29ed]">Privasi</span>
          </h1>
          <p className="text-sm text-gray-500">Terakhir diperbarui: 22 Januari 2026</p>
        </div>

        {/* Konten */}
        <div className="space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Informasi yang Kami Kumpulkan</h2>
            <p>
              Kami mengumpulkan informasi yang Anda berikan secara langsung kepada kami saat mendaftar buletin atau layanan kami, termasuk namun tidak terbatas pada alamat email.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Penggunaan Informasi</h2>
            <p>Kami menggunakan informasi yang dikumpulkan untuk:</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Mengirimkan pembaruan konten dan buletin berkala.</li>
              <li>Meningkatkan pengalaman pengguna dan layanan pelanggan kami.</li>
              <li>Menanggapi pertanyaan, keluhan, atau masukan dari Anda.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Keamanan Data</h2>
            <p>
              Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang ketat untuk melindungi data pribadi Anda dari akses, pengungkapan, atau modifikasi yang tidak sah. Data Anda disimpan dalam lingkungan server yang aman.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Berbagi Informasi Pihak Ketiga</h2>
            <p>
              Kami tidak menjual, memperdagangkan, atau menyewakan informasi identitas pribadi Anda kepada pihak lain. Kami mungkin menggunakan penyedia layanan pihak ketiga (seperti layanan pengiriman email) untuk membantu kami mengoperasikan bisnis kami.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Hak Anda</h2>
            <p>
              Anda memiliki hak untuk meminta salinan data pribadi yang kami simpan, meminta koreksi, atau meminta penghapusan data Anda dari sistem kami (berhenti berlangganan).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Perubahan Kebijakan</h2>
            <p>
              Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Setiap perubahan akan diumumkan di halaman ini dengan memperbarui tanggal "Terakhir diperbarui" di bagian atas.
            </p>
          </section>

          <section className="pt-8 border-t border-white/10">
            <h2 className="text-xl font-semibold text-white mb-3">Kontak Kami</h2>
            <p>Jika ada pertanyaan mengenai kebijakan ini, Anda dapat menghubungi kami melalui:</p>
            <p className="text-[#ff29ed] mt-2 font-medium">aldhis907@gmail.com</p>
          </section>
        </div>

        {/* Tombol Kembali */}
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

export default PrivacyPolicy;
