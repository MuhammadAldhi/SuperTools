import DotGrid from '../components/DotGrid'
import About from './About'
import Footer from '../components/Footer'
import Shuffle from '../components/Shuffle';
import GetStarted from './GetStarted';

export default function HomePages() {
  return (
    <div className="bg-[#0a0a0a] selection:bg-[#ff29ed]/30">
      <div className='relative w-full h-screen overflow-hidden scroll-smooth'>

        {/* 1. Background Layer dengan Vignette */}
        <div className="absolute inset-0 z-0">
          <DotGrid
            dotSize={3}
            gap={15}
            baseColor="#1a1425"
            activeColor="#ff29ed"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
          {/* Overlay Gradient untuk menyatukan background dengan konten berikutnya */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />
        </div>

        {/* 2. Main Hero Content */}
        <div className='relative flex flex-col z-10 items-center justify-center w-full h-full text-white text-center px-6'>

          {/* Tag Kecil di Atas */}
          <div className="mb-8 flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-lg animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff29ed] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff29ed]"></span>
            </span>
            <p className="text-[10px] tracking-[0.3em] uppercase font-medium text-white/70">Next Gen Toolkit 2026</p>
          </div>

          <div className="flex flex-col items-center">
            {/* Judul Utama dengan Flex Layout agar rapi di Mobile/Desktop */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-6">

              <Shuffle
                text='Super'
                shuffleDirection="up"
                duration={1.35}
                animationMode="evenodd"
                shuffleTimes={2}
                ease="back.out(1.1)"
                stagger={0.09}
                className='font-gluten text-7xl lg:text-9xl font-bold text-[#ff29ed] drop-shadow-sm'
              />

              <Shuffle
                text='Tools'
                shuffleDirection="up"
                duration={1.35}
                animationMode="evenodd"
                shuffleTimes={2}
                ease="back.out(1.1)"
                stagger={0.09}
                className='font-gluten text-7xl lg:text-9xl font-bold text-white outline-text'
              />
            </div>

            {/* Subtitle dengan Animated Tracking */}
            <p className='mt-8 max-w-lg text-sm lg:text-lg font-light tracking-[0.5em] uppercase text-white/40 border-t border-white/5 pt-6'>
              Elevating your <span className="text-white/80">Digital Workflow</span>
            </p>
          </div>
        </div>

        {/* 3. Scroll Indicator yang Lebih Elegan */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
          <a
            href="#about"
            className="group flex flex-col items-center gap-4 transition-all duration-500"
          >
            <div className="relative w-10 h-10 rounded-full border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-[#ff29ed]/50 transition-all duration-500">
              <div className="absolute inset-0 bg-[#ff29ed] opacity-0 group-hover:opacity-10 transition-opacity" />
              <svg
                xmlns="http://www.w3.org"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white/50 group-hover:text-[#ff29ed] animate-bounce mt-1 transition-colors"
              >
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
              </svg>
            </div>
          </a>
        </div>
      </div>

      {/* Konten Berikutnya */}
      <div id="about" className="relative z-10">
        <About />
      </div>
      <GetStarted />
      <Footer />
    </div>
  )
}
