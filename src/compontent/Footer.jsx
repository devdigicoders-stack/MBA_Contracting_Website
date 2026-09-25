import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Why Choose Us', path: '/why-choose-us' },
    { name: 'Services', path: '/services' },
    { name: 'Finishing Works', path: '/finishing-works' },
    { name: 'Projects', path: '/projects' },
    // { name: 'Blog & Insights', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'General Contracting',
    'Villa Construction',
    'Extension Construction',
    'Majlis Construction',
    'Building Maintenance',
    'Finishing Works',
  ];

  return (
    <footer className="bg-[#0b1722] text-white pt-0 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Phone CTA Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-8 border-b border-gray-800 mb-12 text-center w-full">
          <span className="text-gray-300 text-base font-medium">📞 Need help with your project?</span>
          <a 
            href="tel:9696559848" 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-2.5 bg-[#caa359] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#b88f44] transition-colors w-full sm:w-auto"
          >
            <Phone className="w-4 h-4" />
            <span>9696559848 — Call Now</span>
          </a>
        </div>


        {/* Top Section: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* Logo */}
            <Link to="/" className="flex items-center justify-center md:justify-start gap-3 mb-6 group focus:outline-none">
              <div className="w-12 h-12 flex-shrink-0">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M10 54V24L22 17V54H10Z" stroke="#c59b4b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="16" y1="26" x2="16" y2="48" stroke="#c59b4b" strokeWidth="2" strokeLinecap="round" />
                  <path d="M22 54V12L32 6L42 12V54H22Z" stroke="#c59b4b" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="28" y1="16" x2="28" y2="48" stroke="#c59b4b" strokeWidth="2" strokeLinecap="round" />
                  <line x1="36" y1="16" x2="36" y2="48" stroke="#c59b4b" strokeWidth="2" strokeLinecap="round" />
                  <path d="M42 54V17L54 24V54H42Z" stroke="#c59b4b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="48" y1="26" x2="48" y2="48" stroke="#c59b4b" strokeWidth="2" strokeLinecap="round" />
                  <line x1="6" y1="54" x2="58" y2="54" stroke="#c59b4b" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-2xl font-black tracking-tight text-white leading-none">MBA</span>
                <span className="text-[10px] font-bold tracking-[0.24em] text-white mt-1 uppercase">CONTRACTING</span>
              </div>
            </Link>

            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Construction • Contracting <br />
              Finishing • Building Maintenance
            </p>

            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300 text-sm mb-6">
              <MapPin className="w-4 h-4 text-[#c59b4b]" />
              <span>Doha, Qatar</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              {/* Facebook */}
              <a href="#" className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#c59b4b] hover:bg-[#c59b4b]/10 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#c59b4b] hover:bg-[#c59b4b]/10 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path fill="#0b1722" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#0b1722" strokeWidth="2" strokeLinecap="round"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#c59b4b] hover:bg-[#c59b4b]/10 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              {/* YouTube */}
              <a href="#" className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#c59b4b] hover:bg-[#c59b4b]/10 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon fill="#0b1722" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-300 hover:text-[#c59b4b] text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3.5">
              {services.map((service, idx) => (
                <li key={idx}>
                  <Link to="/services" className="text-gray-300 hover:text-[#c59b4b] text-sm transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="w-5 h-5 text-[#c59b4b]" />
                <span className="text-gray-300 text-sm">+974 5555 1234</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                {/* WhatsApp Icon placeholder, using MessageCircle for now */}
                <MessageCircle className="w-5 h-5 text-[#c59b4b]" />
                <span className="text-gray-300 text-sm">+974 5555 1234</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="w-5 h-5 text-[#c59b4b]" />
                <span className="text-gray-300 text-sm">info@mbacontracting.qa</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 mt-4 pt-4 border-t border-gray-800">
                <MapPin className="w-5 h-5 text-[#c59b4b]" />
                <span className="text-gray-300 text-sm">Doha, Qatar</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} MBA Contracting. All rights reserved. Doha, Qatar.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-[#c59b4b] text-xs transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-700">|</span>
            <Link to="/terms-conditions" className="text-gray-500 hover:text-[#c59b4b] text-xs transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
