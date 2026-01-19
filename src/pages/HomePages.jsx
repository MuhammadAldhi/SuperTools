import DotGrid from '../component/DotGrid'
import About from './About'
import Footer from '../component/Footer'

export default function HomePages() {
  return (
    <>
      <div className='relative w-full h-screen bg-[#0a0a0a] overflow-hidden scroll-smooth'>

        {/* 1. DotGrid sebagai Background */}
        <div className="absolute inset-0 z-0">
          <DotGrid
            dotSize={3}
            gap={15}
            baseColor="#271E37"
            activeColor="#ff29ed"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>

        {/* 2. Overlay Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />

        {/* 3. Konten Utama */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full pointer-events-none">
          <div className="absolute w-64 h-64 bg-[#ff29ed] opacity-20 blur-[120px] rounded-full animate-pulse" />

          <div className="text-center px-4">
            <h2 className="text-white text-7xl md:text-8xl font-bold font-gluten tracking-tighter drop-shadow-[0_0_15px_rgba(255,41,237,0.5)]">
              <span className="bg-clip-text text-transparent bg-linear-to-b from-white via-white to-[#ff29ed]">
                SuperTools.
              </span>
            </h2>
            <p className="text-gray-400 mt-4 text-sm md:text-base tracking-[0.3em] uppercase font-light">
              Whatever Is Here
            </p>
          </div>
          <div className="mt-8 w-24 h-0.5 bg-linear-to-r from-transparent via-[#ff29ed] to-transparent opacity-50" />
        </div>

        {/* 4. Button SVG dengan link ke #about */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 transition-all duration-300 hover:scale-110"
          >
            <span className="text-[#ff29ed] text-[10px] tracking-[0.4em] uppercase font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              scroll
            </span>

            <div className="p-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:border-[#ff29ed]/50 hover:shadow-[0_0_20px_rgba(255,41,237,0.3)] transition-all duration-300 animate-bounce">
              <svg
                xmlns="http://www.w3.org"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white group-hover:text-[#ff29ed] transition-colors"
              >
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
              </svg>
            </div>
          </a>
        </div>
      </div>
      <About />
      <Footer />
    </>
  )
}
