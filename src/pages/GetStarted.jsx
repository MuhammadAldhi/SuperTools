import ShinyText from '../components/ShinyText'


export default function GetStarted() {
    return (
        <section className="relative min-h-screen bg-linear-to-b to-[#0a0a0a] via-[#0d0d0d] from-[#121212] py-10 px-6 overflow-hidden flex justify-center">

            {/* Ambient Background Elements */}
            <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-[#ff29ed] opacity-[0.03] blur-[130px] rounded-full pointer-events-none" />

            <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#ff29ed] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />


            <div className="text-center overflow-visible">
                <ShinyText
                    text="Let's Start"
                    speed={3} // Sedikit dipercepat agar kilauan lebih dinamis
                    delay={0}
                    color="transparent" // Kontras diperdalam agar efek shine lebih menonjol
                    shineColor="#ffffff"
                    spread={150} // Spread diperlebar agar transisi cahaya lebih halus
                    direction="left"
                    yoyo={true} // Mengaktifkan yoyo membuat animasi lebih 'hidup'
                    className='inline-block px-7 text-white text-6xl md:text-8xl font-gluten font-bold italic'
                />
            </div>


        </section>
    )
}
