import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from '../data/mockData';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isActive = (item) => {
    if (item.href === '/' && location.pathname === '/') return true;
    if (item.href !== '/' && location.pathname.startsWith(item.href)) return true;
    return false;
  };

  return (
    <>
      <div className="h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 fixed top-0 left-0 right-0 z-[60]" />
      <nav className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0a0a1a]/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-[#0a0a1a]/50 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px] gap-3">
            <Link to="/" className="flex items-center gap-3 group min-w-0 flex-shrink">
              <span className="text-base sm:text-lg lg:text-xl font-black tracking-[0.12em] sm:tracking-[0.15em] text-white group-hover:text-blue-400 transition-colors duration-500 whitespace-nowrap truncate">
                AYAAN AGARWAL
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => (
                <Link key={item.label} to={item.href}
                  data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`px-3 py-2 text-[11px] font-bold tracking-[0.12em] uppercase transition-all duration-500 rounded-lg hover:bg-white/[0.04] block ${
                    isActive(item) ? 'text-blue-400' : 'text-slate-400 hover:text-white'
                  }`}>{item.label}</Link>
              ))}
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} data-testid="mobile-menu-toggle" aria-label="Toggle menu" className="lg:hidden flex-shrink-0 p-2 -mr-2 text-slate-300 hover:text-white transition-colors relative z-10">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0a0a1a]/98 backdrop-blur-xl border-t border-slate-800/50">
            <div className="px-4 py-4 space-y-0.5">
              {navItems.map((item) => (
                <Link key={item.label} to={item.href}
                  data-testid={`nav-mobile-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`block px-4 py-3 text-[11px] font-bold tracking-[0.15em] uppercase transition-colors rounded-lg ${
                    isActive(item) ? 'text-blue-400' : 'text-slate-400 hover:text-blue-400'
                  }`}>{item.label}</Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
