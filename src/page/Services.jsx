import React, { useState } from 'react';
import { Hammer, Home, Maximize, Tent, Wrench, CheckCircle2, ArrowRight, X } from 'lucide-react';

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
      {/* Hero Section */}
      <section className="relative w-full bg-[#09121c] overflow-hidden flex items-center min-h-[475px] lg:min-h-[575px]">
        <div className="absolute inset-0 z-0">
          <img
            src="/image copy 8.png"
            alt="Services"
            className="w-full h-full object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070e17] via-[#08121e]/95 md:via-[#08121e]/90 lg:via-[#08121e]/80 to-[#08121e]/90 md:to-transparent w-full" />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#070e17]/60 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl space-y-5 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none bg-[#caa359]/20 border border-[#caa359]/30 text-[#caa359] text-xs font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#caa359] animate-pulse" />
              Complete Contracting Solutions Under One Roof
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white tracking-tight uppercase leading-none mb-4">
              Professional <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#caa359] to-[#d4b475]">
                Services
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-lg border-l-4 border-[#caa359] pl-4">
              Explore our comprehensive range of contracting, construction, and maintenance services crafted for excellence and durability.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c1b2a] tracking-tight uppercase">
            Our Core Services
          </h2>
          <div className="w-16 h-1 bg-[#caa359] mx-auto mt-6" />
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
                    <Icon className="w-5 h-5 text-[#caa359]" />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-extrabold text-xl text-[#0c1b2a] group-hover:text-[#caa359] transition-colors mb-3">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                    {s.desc}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#caa359] uppercase tracking-wider mt-auto group-hover:translate-x-1 transition-transform">
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
              className="absolute top-4 right-4 z-20 w-8 h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-gray-800 hover:bg-[#caa359] hover:text-white transition-colors"
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
                    <selectedService.icon className="w-6 h-6 text-[#caa359]" />
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
                <span className="w-2 h-2 rounded-full bg-[#caa359]" />
                Included Works & Features
              </h4>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedService.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#caa359] mt-0.5 flex-shrink-0" />
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
