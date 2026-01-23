
export default function Tools({ activeMore, setMore }) {
  const boxStyle = `
    group relative overflow-hidden
    flex items-center justify-center p-6 text-center cursor-pointer
    min-h-[80px] w-full h-full 
    bg-slate-200/60 rounded-[2rem] text-black
    transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
    hover:border-[#ff29ed]/50 hover:-translate-y-2
    hover:shadow-[0_20px_40px_rgba(255,255,255,0.4)]
  `;

  return (
    <div className={`grid grid-cols-2 md:grid-cols-6 md:grid-rows-6 ${activeMore && 'md:grid-rows-9'} gap-4 p-4 bg-transparent`}>

      <div className={`col-span-2 md:col-span-2 md:col-start-5 md:row-start-3 ${boxStyle}`}>17</div>
      <div className={`col-span-2 md:row-span-2 md:col-start-1 md:row-start-1 ${boxStyle}`}>23</div>
      <div className={`col-span-2 md:col-span-1 md:row-span-2 md:col-start-3 md:row-start-1 ${boxStyle}`}>24</div>
      <div className={`col-span-2 md:col-span-1 md:row-span-3 md:col-start-4 md:row-start-1 ${boxStyle}`}>25</div>
      <div className={`col-span-2 md:col-span-2 md:row-span-2 md:col-start-5 md:row-start-1 ${boxStyle}`}>26</div>
      <div className={`col-span-2 md:col-span-2 md:col-start-1 md:row-start-3 ${boxStyle}`}>27</div>
      <div className={`col-span-2 md:col-span-1 md:row-span-3 md:col-start-3 md:row-start-3 ${boxStyle}`}>28</div>
      <div className={`col-span-2 md:row-span-2 md:col-start-4 md:col-span-1 md:row-start-4 ${boxStyle}`}>29</div>
      <div className={`col-span-2 md:row-span-3 md:col-span-1 md:col-start-5 md:row-start-4 ${boxStyle}`}>30</div>
      <div className={`col-span-2 md:row-span-2 md:col-start-6 md:row-start-4 ${boxStyle}`}>31</div>
      <div className={`col-span-2 md:col-start-6 md:row-start-6 ${boxStyle}`}>32</div>
      <div className={`col-span-2 md:col-span-2 md:row-span-3 md:col-start-1 md:row-start-4 ${boxStyle}`}>33</div>
      <div className={`col-span-2 md:col-span-2 md:col-start-3 md:row-start-6 ${boxStyle}`}>34</div>

      <div className={`col-span-2 md:row-span-2 md:row-start-7 ${!activeMore && 'hidden'} ${boxStyle}`}>35</div>
      <div className={`col-span-2 md:col-span-1 md:row-span-2 md:row-start-7 ${!activeMore && 'hidden'} ${boxStyle}`}>36</div>
      <div className={`col-span-2 md:col-span-2 md:row-span-2 md:col-start-4 md:row-start-7 ${!activeMore && 'hidden'} ${boxStyle}`}>37</div>
      <div className={`col-span-2 md:row-span-3 md:col-start-6 md:row-start-7 ${!activeMore && 'hidden'} ${boxStyle}`}>38</div>
      <div className={`col-span-2 md:col-span-3 md:row-start-9 ${!activeMore && 'hidden'} ${boxStyle}`}>39</div>
      <div className={`col-span-2 md:col-span-2 md:col-start-4 md:row-start-9 ${!activeMore && 'hidden'} ${boxStyle}`}>40</div>

    </div>

  )
}
