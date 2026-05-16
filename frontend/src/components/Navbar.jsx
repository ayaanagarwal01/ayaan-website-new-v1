import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { navItems } from '../data/mockData';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const handleNavClick = (item, e) => {
    if (item.href.startsWith('#')) {
      e.preventDefault();
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.querySelector(item.href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      } else {
        const el = document.querySelector(item.href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isActive = (item) => {
    if (item.href === '/' && location.pathname === '/') return true;
    if (item.href.startsWith('/') && location.pathname.startsWith(item.href) && item.href !== '/') return true;
    return false;
  };

  return (
    <>
      {/* Top accent line */}
      <div className="h-[2px] bg-gradient-to-r from-amber-400 via-red-500 to-amber-400 fixed top-0 left-0 right-0 z-[60]" />
      
      <nav
        className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-zinc-950/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
            : 'bg-zinc-950/60 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <span className="text-lg lg:text-xl font-black tracking-[0.15em] text-white group-hover:text-amber-400 transition-colors duration-500">
                AYAAN PORTFOLIO
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0.5" ref={dropdownRef}>
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.dropdown ? (
                    <button
                      onClick={() =>
                        setActiveDropdown(activeDropdown === item.label ? null : item.label)
                      }
                      className={`flex items-center gap-1.5 px-4 py-2 text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-500 rounded-lg hover:bg-white/[0.04] ${
                        isActive(item) ? 'text-amber-400' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-300 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  ) : item.href.startsWith('#') ? (
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(item, e)}
                      className={`px-4 py-2 text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-500 rounded-lg hover:bg-white/[0.04] block ${
                        isActive(item) ? 'text-amber-400' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-4 py-2 text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-500 rounded-lg hover:bg-white/[0.04] block ${
                        isActive(item) ? 'text-amber-400' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {item.dropdown && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-3 w-72 bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden z-50">
                      <div className="p-1.5">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.href}
                            className="block px-4 py-3 text-sm text-gray-400 hover:bg-white/[0.04] hover:text-amber-400 transition-all duration-300 rounded-lg"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-zinc-950/98 backdrop-blur-xl border-t border-zinc-800/50">
            <div className="px-4 py-4 space-y-0.5">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setActiveDropdown(activeDropdown === item.label ? null : item.label)
                        }
                        className="flex items-center justify-between w-full px-4 py-3 text-[11px] font-bold tracking-[0.15em] uppercase text-gray-400 hover:text-amber-400 transition-colors rounded-lg"
                      >
                        {item.label}
                        <ChevronDown
                          size={12}
                          className={`transition-transform duration-300 ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {activeDropdown === item.label && (
                        <div className="pl-4 space-y-0.5">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.label}
                              to={sub.href}
                              className="block px-4 py-2.5 text-sm text-gray-500 hover:text-amber-400 transition-colors rounded-lg"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : item.href.startsWith('#') ? (
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(item, e)}
                      className="block px-4 py-3 text-[11px] font-bold tracking-[0.15em] uppercase text-gray-400 hover:text-amber-400 transition-colors rounded-lg"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-4 py-3 text-[11px] font-bold tracking-[0.15em] uppercase transition-colors rounded-lg ${
                        isActive(item) ? 'text-amber-400' : 'text-gray-400 hover:text-amber-400'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
