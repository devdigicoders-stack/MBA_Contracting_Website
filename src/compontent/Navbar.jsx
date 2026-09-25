import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ArrowRight, Menu, X, Phone } from 'lucide-react';
import GoogleTranslate from './GoogleTranslate';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Finishing Works', path: '/finishing-works' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            {/* Architectural Building Icon matching the screenshot */}
            <div className="w-12 h-12 flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Left Building */}
                <path
                  d="M10 54V24L22 17V54H10Z"
                  stroke="#c59b4b"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line x1="16" y1="26" x2="16" y2="48" stroke="#c59b4b" strokeWidth="2" strokeLinecap="round" />
                
                {/* Center / Tallest Main Building */}
                <path
                  d="M22 54V12L32 6L42 12V54H22Z"
                  stroke="#c59b4b"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line x1="28" y1="16" x2="28" y2="48" stroke="#c59b4b" strokeWidth="2" strokeLinecap="round" />
                <line x1="36" y1="16" x2="36" y2="48" stroke="#c59b4b" strokeWidth="2" strokeLinecap="round" />

                {/* Right Building */}
                <path
                  d="M42 54V17L54 24V54H42Z"
                  stroke="#c59b4b"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line x1="48" y1="26" x2="48" y2="48" stroke="#c59b4b" strokeWidth="2" strokeLinecap="round" />
                
                {/* Foundation base line */}
                <line x1="6" y1="54" x2="58" y2="54" stroke="#c59b4b" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>

            {/* Brand Text */}
            <div className="flex flex-col justify-center">
              <span className="text-2xl font-black tracking-tight text-[#0c1b2a] leading-none">
                MBA
              </span>
              <span className="text-[10px] font-bold tracking-[0.24em] text-[#0c1b2a] mt-1 uppercase">
                CONTRACTING
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `relative py-2 text-[15px] font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-[#c59b4b] font-semibold'
                      : 'text-gray-600 hover:text-[#0c1b2a]'
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="inline-block relative">
                    {link.name}
                    {isActive && (
                      <span className="absolute left-0 -bottom-1.5 w-full h-[2.5px] bg-[#c59b4b] rounded-full animate-fade-in" />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Buttons + Google Translate */}
          <div className="hidden sm:flex items-center gap-3">
            <GoogleTranslate />
            <a
              href="tel:9696559848"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white font-medium text-sm bg-gradient-to-r from-[#caa359] via-[#b88f44] to-[#a37930] hover:from-[#b99144] hover:to-[#926925] shadow-sm hover:shadow transition-all duration-200 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Get a Quote</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden gap-2">
            <GoogleTranslate />
            
            <a
              href="tel:9696559848"
              className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-white bg-gradient-to-r from-[#caa359] to-[#a37930]"
              aria-label="Call"
            >
              <Phone className="w-4 h-4" />
            </a>
            
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-[#c59b4b] hover:bg-gray-50 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-md text-base font-medium flex items-center justify-between ${
                    isActive
                      ? 'bg-amber-50 text-[#c59b4b] font-semibold border-l-4 border-[#c59b4b]'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
              >
                <span>{link.name}</span>
                <span className="text-xs text-gray-400">›</span>
              </NavLink>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-[#0c1b2a] font-medium border border-gray-200 hover:border-[#caa359] transition-colors"
              >
                <span>Contact Us</span>
              </Link>
              <a
                href="tel:9696559848"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-[#caa359] to-[#a37930] shadow"
              >
                <Phone className="w-4 h-4" />
                <span>Get a Quote — Call Now</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
