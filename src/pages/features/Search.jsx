import { useState, useEffect } from 'react';
import AnimatedList from '../../components/AnimatedList'

export default function Search({ activeMore }) {
  const [isMobile, setIsMobile] = useState(false);

  // Cek apakah layar adalah mobile (kurang dari 768px)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Cek saat komponen dimuat
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const boxStyle = `
    group relative overflow-hidden
    flex items-center justify-center p-6 text-center cursor-pointer
    min-h-[80px] w-full h-full 
    bg-slate-200/60 rounded-[2rem] text-black
    transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
    hover:border-[#ff29ed]/50 hover:-translate-y-2
    hover:shadow-[0_20px_40px_rgba(255,255,255,0.4)]
    `;

  const gridItems = [
    <div className={`col-span-2 md:col-span-2 md:row-span-3 ${boxStyle}`}>1</div>,
    <div className={`col-span-2 md:col-span-2 md:col-start-1 md:row-start-4 ${boxStyle}`}>2</div>,
    <div className={`col-span-2 md:col-span-1 md:row-span-3 md:col-start-1 md:row-start-5 ${boxStyle}`}>3</div>,
    <div className={`col-span-2 md:col-span-1 md:row-span-2 md:col-start-2 md:row-start-5 ${boxStyle}`}>4</div>,
    <div className={`col-span-2 md:col-span-3 md:col-start-2 md:row-start-7 ${boxStyle}`}>5</div>,
    <div className={`col-span-2 md:col-span-2 md:row-span-3 md:col-start-5 md:row-start-5 ${boxStyle}`}>6</div>,
    <div className={`col-span-2 md:col-span-1 md:row-span-2 md:col-start-4 md:row-start-3 ${boxStyle}`}>7</div>,
    <div className={`col-span-2 md:col-span-1 md:row-span-2 md:col-start-3 md:row-start-3 ${boxStyle}`}>8</div>,
    <div className={`col-span-2 md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-1 ${boxStyle}`}>9</div>,
    <div className={`col-span-2 md:col-span-2 md:row-span-4 md:col-start-5 md:row-start-1 ${boxStyle}`}>10</div>,
    <div className={`col-span-2 md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-5 ${boxStyle}`}>11</div>,
    ...(activeMore ? [
      <div className={`col-span-2 md:col-span-1 md:row-span-3 md:col-start-1 md:row-start-8 ${boxStyle}`}>12</div>,
      <div className={`col-span-2 md:col-span-2 md:row-span-2 md:col-start-2 md:row-start-9 ${boxStyle}`}>13</div>,
      <div className={`col-span-2 md:col-span-2 md:col-start-2 md:row-start-8 ${boxStyle}`}>14</div>,
      <div className={`col-span-2 md:col-span-1 md:row-span-2 md:col-start-4 md:row-start-8 ${boxStyle}`}>15</div>,
      <div className={`col-span-2 md:col-span-3 md:col-start-4 md:row-start-10 ${boxStyle}`}>16</div>,
      <div className={`col-span-2 md:col-span-2 md:row-span-2 md:col-start-5 md:row-start-8 ${boxStyle}`}>17</div>,
    ] : [])
  ]

  const gridClass = `grid grid-cols-2 md:grid-cols-6 md:grid-rows-7 ${activeMore && 'md:grid-rows-10'} gap-4 p-4 bg-transparent`

  return (
    
    <div>
      {isMobile ? (
        <AnimatedList
          items={gridItems}
          onItemSelect={(item, index) => alert(index + 1)}
          showGradients={false}
          enableArrowNavigation={true}
          displayScrollbar={false}
          className={`w-full`}
        />
      ) : (

        <div className={gridClass}>
          {gridItems}
        </div>
      )}
    </div>

  )
}
