import ShinyText from '../components/ShinyText'
import PagesFeature from './features/PagesFeature'

export default function GetStarted() {
    return (
        // Tambahkan items-center untuk centering vertikal pada section utama
        <section id="start" className="relative min-h-screen bg-linear-to-b to-[#0a0a0a] via-[#0d0d0d] from-[#121212] py-10 px-6 overflow-hidden flex flex-col justify-center items-center">

            {/* Ambient Background Elements */}
            <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-[#ff29ed] opacity-[0.03] blur-[130px] rounded-full pointer-events-none" />

            <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#ff29ed] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />

            {/* 1. Tulisan Berada di Tengah & Bisa Ditimpa */}

            <div className="text-center">
                <ShinyText
                    text="Let's Start"
                    speed={3}
                    delay={0}
                    color="transparent"
                    shineColor="#ff29ed"
                    spread={150}
                    direction="left"
                    yoyo={true}
                    className='inline-block px-7 text-6xl font-gluten font-bold italic'
                />
            </div>


            {/* 2. Konten Utama (PagesFeature) Berada di Atas Tulisan */}
            <div className=''>
                <PagesFeature />
            </div>

        </section>
    )
}
