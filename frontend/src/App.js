import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ResearchDetailPage from "./pages/ResearchDetailPage";
import TheatreDetailPage from "./pages/TheatreDetailPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
