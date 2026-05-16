import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ResearchDetailPage from "./pages/ResearchDetailPage";
import TheatreDetailPage from "./pages/TheatreDetailPage";
import CommunityPage from "./pages/CommunityPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  useEffect(() => {
    // Remove any external branding/watermark badges
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
      // Also check for fixed-position badges at bottom-right
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
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/research/:id" element={<ResearchDetailPage />} />
          <Route path="/theatre/:id" element={<TheatreDetailPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
