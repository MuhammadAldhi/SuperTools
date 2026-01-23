import styled from 'styled-components';
import { Download, Bot, Wrench, Search as SearchIcon } from 'lucide-react'; // Pastikan install lucide-react
import { useState } from 'react';

import Ai from './features/Ai';
import Downloader from './features/Downloader';
import Search from './features/Search';
import Tools from './features/Tools';

import BtnMore from '../components/BtnMore'

export default function More() {
  const [activeFeature, setFeature] = useState("download");
  const [activeMore, setMore] = useState(true); // Default false agar rapi di awal

  return (
    <div className='min-h-screen bg-[#0a0a0a] transition-colors duration-500'>
      <StyledWrapper>
        <div className="glass-radio-group w-[90vw] md:w-[60vh] h-12 md:h-14 mt-8">
          {/* Input Radio - Downloader */}
          <input type="radio" name="plan" id="glass-download" checked={activeFeature === "download"} onChange={() => setFeature("download")} />
          <label htmlFor="glass-download">
            <Download className="md:hidden" size={20} />
            <span className="hidden md:block">Downloader</span>
          </label>

          {/* Input Radio - AI */}
          <input type="radio" name="plan" id="glass-ai" checked={activeFeature === "ai"} onChange={() => setFeature("ai")} />
          <label htmlFor="glass-ai">
            <Bot className="md:hidden" size={20} />
            <span className="hidden md:block">AI</span>
          </label>

          {/* Input Radio - Tools */}
          <input type="radio" name="plan" id="glass-tools" checked={activeFeature === "tools"} onChange={() => setFeature("tools")} />
          <label htmlFor="glass-tools">
            <Wrench className="md:hidden" size={20} />
            <span className="hidden md:block">Tools</span>
          </label>

          {/* Input Radio - Search */}
          <input type="radio" name="plan" id="glass-search" checked={activeFeature === "search"} onChange={() => setFeature("search")} />
          <label htmlFor="glass-search">
            <SearchIcon className="md:hidden" size={20} />
            <span className="hidden md:block">Search</span>
          </label>

          <div className="glass-glider" />
        </div>
      </StyledWrapper>

      <div className='p-4 md:p-10'>
        {/* PERBAIKAN: Kirim state activeMore dan fungsi setMore */}
        {activeFeature === "ai" && (<Ai activeMore={activeMore} setMore={setMore} />)}
        {activeFeature === "search" && <Search />}
        {activeFeature === "tools" && <Tools />}
        {activeFeature === "download" && <Downloader />}
      </div>
      

      <div className='flex justify-center py-10 pb-20'>
        <BtnMore url={'/#start'} Nama={'Home Page'} />
      </div>
    </div>
  );
}

const StyledWrapper = styled.div`
  padding-top: 2rem;

  .glass-radio-group {
    --bg: rgba(255, 255, 255, 0.06);
    --text: #e5e5e5;
    display: flex;
    position: relative;
    background: var(--bg);
    border-radius: 1rem;
    backdrop-filter: blur(12px);
    box-shadow:
      inset 1px 1px 4px rgba(255, 255, 255, 0.2),
      inset -1px -1px 6px rgba(0, 0, 0, 0.3),
      0 4px 12px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    margin: 0 auto;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .glass-radio-group input {
    display: none;
  }

  .glass-radio-group label {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-weight: 600;
    color: var(--text);
    position: relative;
    z-index: 2;
    transition: color 0.3s ease-in-out;
    /* Hilangkan min-width agar fleksibel di mobile */
    min-width: 0; 
    font-size: 14px;
  }

  .glass-radio-group label:hover {
    color: white;
  }

  .glass-radio-group input:checked + label {
    color: #fff;
  }

  .glass-glider {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 25%; 
    border-radius: 1rem;
    z-index: 1;
    transition: transform 0.5s cubic-bezier(0.37, 1.95, 0.66, 0.56),
                background 0.4s ease-in-out;
  }

  /* Glider dengan warna neon agar 'pop' di background hitam */
  #glass-download:checked ~ .glass-glider { 
    transform: translateX(0%); 
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
  }
  #glass-ai:checked ~ .glass-glider { 
    transform: translateX(100%); 
    background: linear-gradient(135deg, #ff29ed 0%, #ff00d4 100%);
    box-shadow: 0 0 20px rgba(255, 41, 237, 0.4);
  }
  #glass-tools:checked ~ .glass-glider { 
    transform: translateX(200%); 
    background: linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%);
    box-shadow: 0 0 20px rgba(0, 210, 255, 0.4);
  }
  #glass-search:checked ~ .glass-glider { 
    transform: translateX(300%); 
    background: linear-gradient(135deg, #00ff88 0%, #00bd68 100%);
    box-shadow: 0 0 20px rgba(0, 255, 136, 0.4);
  }
`;

