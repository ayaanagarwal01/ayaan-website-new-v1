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
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-amber-500 via-red-600 to-amber-500 fixed top-0 left-0 right-0 z-[60]" />
      
      <nav
        className={`fixed top-1 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-zinc-900/95 backdrop-blur-md shadow-lg shadow-black/20'
            : 'bg-zinc-900/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <span className="text-xl lg:text-2xl font-bold tracking-wider text-white group-hover:text-amber-400 transition-colors duration-300">
                AYAAN PORTFOLIO
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.dropdown ? (
                    <button
                      onClick={() =>
                        setActiveDropdown(activeDropdown === item.label ? null : item.label)
                      }
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold tracking-wider uppercase transition-all duration-300 rounded-lg hover:bg-white/5 ${
                        isActive(item) ? 'text-amber-400' : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  ) : item.href.startsWith('#') ? (
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(item, e)}
                      className={`px-4 py-2 text-sm font-semibold tracking-wider uppercase transition-all duration-300 rounded-lg hover:bg-white/5 block ${
                        isActive(item) ? 'text-amber-400' : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-4 py-2 text-sm font-semibold tracking-wider uppercase transition-all duration-300 rounded-lg hover:bg-white/5 block ${
                        isActive(item) ? 'text-amber-400' : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {item.dropdown && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-72 bg-zinc-800 border border-zinc-700 rounded-xl shadow-2xl shadow-black/40 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.href}
                          className="block px-5 py-3 text-sm text-gray-300 hover:bg-red-600/20 hover:text-amber-400 transition-colors duration-200 border-b border-zinc-700/50 last:border-0"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-zinc-900/98 backdrop-blur-lg border-t border-zinc-800">
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setActiveDropdown(activeDropdown === item.label ? null : item.label)
                        }
                        className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold tracking-wider uppercase text-gray-300 hover:text-amber-400 transition-colors"
                      >
                        {item.label}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {activeDropdown === item.label && (
                        <div className="pl-6 space-y-1">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.label}
                              to={sub.href}
                              className="block px-4 py-2 text-sm text-gray-400 hover:text-amber-400 transition-colors"
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
                      className="block px-4 py-3 text-sm font-semibold tracking-wider uppercase text-gray-300 hover:text-amber-400 transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-4 py-3 text-sm font-semibold tracking-wider uppercase transition-colors ${
                        isActive(item) ? 'text-amber-400' : 'text-gray-300 hover:text-amber-400'
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
