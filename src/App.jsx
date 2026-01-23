// BENAR
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import HomePages from './pages/HomePages';
import NotFound from './pages/NotFound'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService';
import Disclaimer from './pages/Disclaimer'
import More from './pages/More'
import Footer from './components/Footer'
import LiveCHat from './components/LiveChat';

function App() {
  const [activeFeature, setFeature] = useState("download");
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/More" element={<More activeFeature={activeFeature} setFeature={setFeature} />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <LiveCHat />
      <Footer activeFeature={activeFeature} setFeature={setFeature}/>

    </BrowserRouter>
  );
}

export default App;
