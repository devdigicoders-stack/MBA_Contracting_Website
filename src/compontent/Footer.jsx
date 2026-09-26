import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Why Choose Us', path: '/why-choose-us' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
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
    <footer className="bg-[#f4f9fc] text-[#0c1b2a] pt-16 pb-8 border-t border-blue-50 relative overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0040800d_1px,transparent_1px),linear-gradient(to_bottom,#0040800d_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid with Dashed Dividers on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 lg:divide-x lg:divide-dashed lg:divide-gray-200 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left lg:pr-8">
            <Link to="/" className="flex items-center justify-center md:justify-start mb-6 group focus:outline-none">
              <img 
                src="/logo.png" 
                alt="MBA Contracting Logo" 
                className="h-16 w-auto" 
              />
            </Link>

            <p className="text-gray-700 font-medium text-[12px] sm:text-[13px] leading-relaxed mb-6 max-w-[250px]">
              Delivering expert construction, general contracting, finishing, and building maintenance solutions for villas and commercial buildings throughout Qatar.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center md:text-left lg:px-8">
            <h3 className="text-[13px] font-bold mb-5 text-[#0c1b2a]">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-700 font-medium hover:text-[#004080] text-[13px] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="text-center md:text-left lg:px-8">
            <h3 className="text-[13px] font-bold mb-5 text-[#0c1b2a]">Our Services</h3>
            <ul className="space-y-4">
              {services.map((service, idx) => (
                <li key={idx}>
                  <Link to="/services" className="text-gray-700 font-medium hover:text-[#004080] text-[13px] transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Action Buttons */}
          <div className="flex flex-col items-center lg:items-end lg:pl-8">
            
            <div className="flex flex-col xl:flex-row gap-3 w-full sm:w-auto">
              {/* Call Us Button */}
              <a 
                href="tel:+97450722177" 
                className="inline-flex items-center justify-between gap-3 px-5 py-3 xl:py-2.5 bg-[#004080] hover:bg-[#002952] text-white rounded-full font-bold text-[13px] transition-all shadow-sm w-full sm:w-auto shrink-0"
              >
                Call us now
                <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#004080] stroke-[3]" />
                </span>
              </a>

              {/* WhatsApp Button */}
              <a 
                href="https://wa.me/97450722177" 
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-between gap-3 px-5 py-3 xl:py-2.5 bg-[#25D366] hover:bg-[#1ebd5b] text-white rounded-full font-bold text-[13px] transition-all shadow-sm w-full sm:w-auto shrink-0"
              >
                Or chat with us on
                <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.079-2.115-.508-1.745-.722-2.859-2.513-2.946-2.628-.088-.116-.708-.941-.708-1.792 0-.85.447-1.268.607-1.442.159-.175.348-.218.463-.218.117 0 .232.001.333.007.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.174.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.42-.099.824z" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Location Address */}
            <a 
              href="https://maps.google.com/maps?q=Alkhayarin%20holding%20building%20Doha%20Qatar" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-8 lg:mt-10 flex items-start justify-center lg:justify-end gap-2 text-center lg:text-right w-full group cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-[#004080] group-hover:text-[#002952] transition-colors shrink-0 mt-0.5" />
              <p className="text-gray-600 group-hover:text-[#004080] transition-colors font-medium text-[12px] sm:text-[13px] leading-relaxed max-w-[200px]">
                Alkhayarin holding building, first floor, office no 102 Doha - qatar
              </p>
            </a>

            {/* Social Icons */}
            <div className="mt-6 flex items-center justify-center lg:justify-end gap-3 w-full">
              <a href="https://www.instagram.com/mbacontractingqa" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-white hover:border-[#E1306C] hover:bg-[#E1306C] bg-white transition-colors shadow-sm">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-6 pb-2 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 font-semibold text-[11px] sm:text-xs text-center md:text-left">
            © {new Date().getFullYear()} MBA Contracting.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/privacy-policy" className="text-gray-500 font-semibold hover:text-[#004080] text-[11px] sm:text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="text-gray-500 font-semibold hover:text-[#004080] text-[11px] sm:text-xs transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
