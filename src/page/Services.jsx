import React, { useState } from 'react';
import { Hammer, Home, Maximize, Tent, Wrench, CheckCircle2, ArrowRight, X, ArrowUpRight } from 'lucide-react';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const serviceList = [
    { 
      title: 'General Contracting', 
      icon: Hammer, 
      image: '/image copy 6.png',
      desc: 'General construction and contracting support for residential and commercial building projects.',
      bullets: [
        'Civil and general building works',
        'Masonry and block works',
        'Concrete-related works',
        'Renovation and modification works',
        'Site coordination and project execution'
      ]
    },
    { 
      title: 'Villa Construction', 
      icon: Home, 
      image: '/image copy 8.png',
      desc: 'Professional construction solutions for new villa projects, from core construction works through finishing requirements.',
      bullets: [
        'New villa construction',
        'Civil and structural works',
        'Block and plaster works',
        'Flooring and tiling',
        'Painting and gypsum works',
        'Interior finishing'
      ]
    },
    { 
      title: 'Extension Construction', 
      icon: Maximize, 
      image: '/image copy 5.png',
      desc: 'Solutions for expanding existing properties with additional spaces while coordinating construction and finishing requirements.',
      bullets: [
        'Room and living-space extensions',
        'Kitchen and bathroom extensions',
        'Additional bedrooms or spaces',
        'Structural and civil works',
        'Block, plaster, flooring and painting works',
        'Complete finishing'
      ]
    },
    { 
      title: 'Majlis Construction', 
      icon: Tent, 
      image: '/image copy 6.png',
      desc: 'Construction and finishing solutions for Majlis projects, combining practical construction requirements with a refined finished environment.',
      bullets: [
        'Majlis construction',
        'Civil and structural works',
        'Flooring and wall finishes',
        'Gypsum ceilings',
        'Painting and decorative finishing',
        'Interior finishing works'
      ]
    },
    { 
      title: 'Building Maintenance Services', 
      icon: Wrench, 
      image: '/image copy 8.png',
      desc: 'Maintenance and repair solutions designed to help property owners keep buildings functional, presentable and well maintained.',
      bullets: [
        'General building maintenance',
        'Civil repair works',
        'Wall and ceiling repairs',
        'Painting maintenance',
        'Tile and flooring repairs',
        'Gypsum and plaster repairs',
        'Minor renovation works'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative">
      {/* ========================================================
          HERO SECTION (Light Theme)
      ======================================================== */}
      <section className="relative w-full bg-white overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24 flex items-center justify-center text-center">
        
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Bottom Fade Gradient for the Grid */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none z-0"></div>

        <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center mt-6 sm:mt-12">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#004080] text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#004080] animate-pulse" />
            Complete Contracting Solutions Under One Roof
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1f2937] tracking-tight mb-5">
            Professional Services
          </h1>

          <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-xl mx-auto mb-8 sm:mb-10">
            Explore our comprehensive range of contracting, construction, and maintenance services crafted for excellence and durability.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
            {/* Call Us Button */}
            <a 
              href="tel:+97450722177"
              className="group flex items-center justify-center gap-3 px-6 py-3.5 sm:py-3 bg-[#f05c26] hover:bg-[#d94a15] text-white rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg active:scale-95 w-full sm:w-auto"
            >
              Call us now
              <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-[#f05c26] stroke-[3]" />
              </span>
            </a>

            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/97450722177"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-6 py-3.5 sm:py-3 bg-[#25D366] hover:bg-[#1ebd5b] text-white rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg active:scale-95 w-full sm:w-auto"
            >
              Or chat with us on
              <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                <svg className="w-4 h-4 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.079-2.115-.508-1.745-.722-2.859-2.513-2.946-2.628-.088-.116-.708-.941-.708-1.792 0-.85.447-1.268.607-1.442.159-.175.348-.218.463-.218.117 0 .232.001.333.007.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.174.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.42-.099.824z" />
                </svg>
              </span>
            </a>
          </div>

        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c1b2a] tracking-tight uppercase">
            Our Core Services
          </h2>
          <div className="w-16 h-1 bg-[#004080] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {serviceList.map((s, i) => {
            const Icon = s.icon;
            return (
              <div 
                key={i} 
                onClick={() => setSelectedService(s)}
                className="group cursor-pointer bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col"
              >
                {/* Service Image Thumbnail */}
                <div className="w-full h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#0c1b2a]/10 group-hover:bg-transparent transition-colors z-10" />
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                    <Icon className="w-5 h-5 text-[#004080]" />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-extrabold text-xl text-[#0c1b2a] group-hover:text-[#004080] transition-colors mb-3">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                    {s.desc}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#004080] uppercase tracking-wider mt-auto group-hover:translate-x-1 transition-transform">
                    View Details <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dynamic Modal Overlay */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0c1b2a]/80 backdrop-blur-sm animate-fade-in">
          <div 
            className="absolute inset-0 cursor-pointer" 
            onClick={() => setSelectedService(null)} 
          />
          
          <div className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row max-h-[90vh] animate-slide-up">
            
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-gray-800 hover:bg-[#004080] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Image Side */}
            <div className="lg:w-2/5 h-64 lg:h-auto relative bg-gray-100">
              <img 
                src={selectedService.image} 
                alt={selectedService.title} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r" />
              <div className="absolute bottom-6 left-6 right-6 lg:bottom-auto lg:top-6 flex items-center gap-3">
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <selectedService.icon className="w-6 h-6 text-[#004080]" />
                 </div>
              </div>
            </div>

            {/* Right Content Side */}
            <div className="lg:w-3/5 p-8 lg:p-12 overflow-y-auto">
              <h2 className="text-3xl font-extrabold text-[#0c1b2a] mb-4">
                {selectedService.title}
              </h2>
              
              <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 mb-8">
                <p className="text-gray-700 italic font-medium leading-relaxed">
                  "{selectedService.desc}"
                </p>
              </div>

              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2 border-b border-gray-100 pb-2">
                <span className="w-2 h-2 rounded-full bg-[#004080]" />
                Included Works & Features
              </h4>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedService.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#004080] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600 font-medium">{bullet}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 pt-6 border-t border-gray-100 flex justify-end">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-2.5 bg-gray-100 text-gray-700 font-bold text-sm rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Close Details
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
