// BENAR
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePages from './pages/HomePages';
import More from './pages/More';
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/more" element={<More />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
