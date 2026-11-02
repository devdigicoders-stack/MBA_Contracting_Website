import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import GoogleTranslate from './GoogleTranslate';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { t, isRTL } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.services, path: '/services' },
    { name: t.nav.projects, path: '/projects' },
    { name: t.nav.finishingWorks, path: '/finishing-works' },
    { name: t.nav.contact, path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between gap-4 transition-all duration-300 ${isScrolled ? 'h-16 sm:h-20' : 'h-20'}`}>

          {/* Logo Section */}
          <Link to="/" className="flex items-center group focus:outline-none shrink-0">
            <img 
              src="/logo.png" 
              alt="MBA Contracting Logo" 
              className={`w-auto transition-all duration-300 group-hover:scale-105 ${isScrolled ? 'h-9 sm:h-11 lg:h-14' : 'h-10 sm:h-12 lg:h-14'}`} 
            />
          </Link>

          {/* Desktop Navigation Links - Modern Flexbox gap that works seamlessly in LTR and RTL */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-6 2xl:gap-8 shrink-0">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `relative py-2 text-[13px] xl:text-[15px] font-medium whitespace-nowrap transition-all duration-200 ${isActive
                    ? 'text-[#003366] font-semibold'
                    : 'text-gray-600 hover:text-[#0c1b2a]'
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="inline-block relative whitespace-nowrap">
                    {link.name}
                    {isActive && (
                      <span className="absolute inset-x-0 -bottom-1.5 h-[2.5px] bg-[#003366] rounded-full animate-fade-in" />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Buttons + Google Translate */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <GoogleTranslate />
            <a
              href="tel:+97450722177"
              className="inline-flex items-center gap-2 px-4 xl:px-5 py-2.5 rounded-lg text-white font-medium text-xs xl:text-sm whitespace-nowrap bg-gradient-to-r from-[#004080] via-[#002952] to-[#001a33] hover:from-[#002952] hover:to-[#001326] shadow-sm hover:shadow transition-all duration-200 active:scale-95"
            >
              <Phone className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">{t.nav.getQuote}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden gap-2 shrink-0">
            <GoogleTranslate />

            <a
              href="tel:+97450722177"
              className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-white bg-gradient-to-r from-[#004080] to-[#001a33]"
              aria-label="Call"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-[#003366] hover:bg-gray-50 focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-md text-base font-medium flex items-center justify-between ${isActive
                    ? 'bg-amber-50 text-[#003366] font-semibold border-l-4 rtl:border-r-4 rtl:border-l-0 border-[#003366]'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
              >
                <span>{link.name}</span>
                <span className="text-xs text-gray-400">{isRTL ? '‹' : '›'}</span>
              </NavLink>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-[#0c1b2a] font-medium border border-gray-200 hover:border-[#004080] transition-colors"
              >
                <span>{t.nav.contact}</span>
              </Link>
              <a
                href="tel:+97450722177"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-[#004080] to-[#001a33] shadow"
              >
                <Phone className="w-4 h-4" />
                <span>{t.nav.getQuote}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
