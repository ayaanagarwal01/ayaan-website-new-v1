import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/AnimatedBackground";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ResearchPage from "./pages/ResearchPage";
import TheatrePage from "./pages/TheatrePage";
import MusicPage from "./pages/MusicPage";
import ServicePage from "./pages/ServicePage";
import DebatePage from "./pages/DebatePage";
import SocialImpactPage from "./pages/SocialImpactPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  useEffect(() => {
    const removeWatermarks = () => {
      const selectors = [
        '[data-emergent-watermark]',
        '#emergent-badge',
        '#made-with-emergent',
        'div[class*="watermark"]',
        'div[class*="Watermark"]',
      ];
      selectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => el.remove());
      });
      document.querySelectorAll('body > div').forEach(el => {
        const style = window.getComputedStyle(el);
        if (style.position === 'fixed' && style.bottom !== 'auto' && style.right !== 'auto' && style.zIndex > 999) {
          if (el.textContent && el.textContent.toLowerCase().includes('emergent')) {
            el.remove();
          }
        }
      });
    };
    removeWatermarks();
    const observer = new MutationObserver(removeWatermarks);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App bg-[#0a0a1a] overflow-x-clip">
      <BrowserRouter>
        <ScrollToTop />
        <AnimatedBackground />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/theatre" element={<TheatrePage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/debate" element={<DebatePage />} />
          <Route path="/social-impact" element={<SocialImpactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
