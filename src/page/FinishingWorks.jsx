import React, { useState } from 'react';
import { Award, Users, ShieldCheck, Building2, Paintbrush, Layers, Maximize, Tent, Wrench, CheckCircle2, ArrowRight, X } from 'lucide-react';

export default function FinishingWorks() {
  const [selectedService, setSelectedService] = useState(null);

  const features = [
    { icon: Award, label: 'High Quality Work' },
    { icon: Users, label: 'Skilled Professionals' },
    { icon: ShieldCheck, label: 'On-Time Completion' },
    { icon: Building2, label: 'Clean & Modern Finishes' },
  ];

  const serviceList = [
    { 
      title: 'Tile Installation Works', 
      icon: Layers, 
      image: '/image copy 6.png',
      desc: 'Expert tiling solutions for functional and beautiful spaces.',
      bullets: [
        'Floor and wall tiles',
        'Bathroom and kitchen tiling',
        'Decorative tile installation',
        'Tile replacement and repair'
      ]
    },
    { 
      title: 'Painting Works', 
      icon: Paintbrush, 
      image: '/image copy 5.png',
      desc: 'Professional painting services for perfect interiors and exteriors.',
      bullets: [
        'Interior and exterior painting',
        'Wall and ceiling painting',
        'Surface preparation',
        'Repainting and touch-up works'
      ]
    },
    { 
      title: 'Gypsum Board Works', 
      icon: Maximize, 
      image: '/image copy 10.png',
      desc: 'Custom gypsum installations for ceilings and partitions.',
      bullets: [
        'Gypsum ceilings',
        'False ceilings',
        'Partition walls',
        'Decorative gypsum features',
        'Repair and modification works'
      ]
    },
    { 
      title: 'Plastering Works', 
      icon: Wrench, 
      image: '/image copy 6.png',
      desc: 'Smooth and durable plastering for all surface types.',
      bullets: [
        'Wall plastering',
        'Ceiling plastering',
        'Surface preparation',
        'Repair plastering',
        'Smooth finishing'
      ]
    },
    { 
      title: 'Flooring Works', 
      icon: Tent, 
      image: '/image copy 8.png',
      desc: 'Comprehensive flooring installation and repair services.',
      bullets: [
        'Floor installation',
        'Floor replacement',
        'Tile flooring',
        'Floor repair',
        'Surface preparation'
      ]
    },
    { 
      title: 'Interior Finishing Works', 
      icon: Building2, 
      image: '/image copy 5.png',
      desc: 'Complete interior renovation and luxury finishing solutions.',
      bullets: [
        'Wall finishes',
        'Ceiling finishes',
        'Flooring and related works',
        'Decorative finishing',
        'Interior renovation and finishing'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative">
      {/* Hero Section - Home Page Style */}
      <section className="relative w-full bg-[#09121c] overflow-hidden min-h-[420px] lg:min-h-[520px] flex items-center">
        
        {/* Background Image with Dark Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="/image copy 8.png"
            alt="General Finishing Works"
            className="w-full h-full object-cover object-right"
          />
          {/* Left Dark Gradient - covers more on mobile to hide image text, reveals on desktop */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070e17] via-[#08121e]/95 md:via-[#08121e]/90 lg:via-[#08121e]/80 to-[#08121e]/90 md:to-transparent" />
          {/* Subtle dark tint - only slight */}
          <div className="absolute inset-0 bg-black/10" />
          {/* Bottom edge shadow */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#070e17]/60 to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl lg:max-w-3xl space-y-5">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none bg-[#caa359]/20 border border-[#caa359]/30 text-[#caa359] text-xs font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-[#caa359] animate-pulse" />
              OUR SERVICES
            </div>

            {/* Main Headings */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-white leading-none mb-2 uppercase">
                GENERAL
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-[#caa359] leading-none uppercase">
                FINISHING WORKS
              </h1>
            </div>
            
            {/* Subtitle */}
            <h3 className="text-lg sm:text-xl font-bold text-gray-100">
              Complete Interior & Finishing Solutions
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-300 max-w-lg leading-relaxed">
              The quality of finishing has a direct impact on the final appearance and usability of a property. MBA Contracting provides a range of finishing works to help clients achieve clean, functional and professionally completed spaces.
            </p>

            {/* Features Row */}
            <div className="flex flex-wrap items-start gap-4 sm:gap-6 pt-2">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="flex flex-col items-center text-center max-w-[70px] sm:max-w-[80px]">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-none border-2 border-[#caa359] flex items-center justify-center bg-[#caa359]/10 mb-2 transition-transform hover:scale-105">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#caa359]" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-gray-300 leading-tight">
                      {feature.label.split(' ').map((word, i) => (
                        <React.Fragment key={i}>
                          {word} {i < feature.label.split(' ').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </span>
                  </div>
                );
              })}
            </div>
            
          </div>
        </div>
      </section>

      {/* Finishing Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c1b2a] tracking-tight uppercase">
            Our Expertise
          </h2>
          <div className="w-16 h-1 bg-[#caa359] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {serviceList.map((s, i) => {
            const Icon = s.icon;
            return (
              <div 
                key={i} 
                onClick={() => setSelectedService(s)}
                className="group cursor-pointer bg-white rounded-none shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col"
              >
                {/* Image Thumbnail */}
                <div className="w-full h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#0c1b2a]/10 group-hover:bg-transparent transition-colors z-10" />
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 z-20 w-10 h-10 bg-white rounded-none flex items-center justify-center shadow-md">
                    <Icon className="w-5 h-5 text-[#caa359]" />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-extrabold text-xl text-[#0c1b2a] group-hover:text-[#caa359] transition-colors mb-3">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                    Click to view the complete list of {s.title.toLowerCase()}.
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
          
          <div className="relative bg-white w-full max-w-4xl rounded-none shadow-2xl overflow-hidden flex flex-col lg:flex-row max-h-[90vh] animate-slide-up">
            
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 bg-white/80 backdrop-blur rounded-none flex items-center justify-center text-gray-800 hover:bg-[#caa359] hover:text-white transition-colors"
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
                 <div className="w-12 h-12 bg-white rounded-none flex items-center justify-center shadow-lg">
                    <selectedService.icon className="w-6 h-6 text-[#caa359]" />
                 </div>
              </div>
            </div>

            {/* Right Content Side */}
            <div className="lg:w-3/5 p-8 lg:p-12 overflow-y-auto">
              <h2 className="text-3xl font-extrabold text-[#0c1b2a] mb-4">
                {selectedService.title}
              </h2>
              
              <div className="p-4 bg-amber-50 rounded-none border border-amber-100 mb-8">
                <p className="text-gray-700 italic font-medium leading-relaxed">
                  {selectedService.desc}
                </p>
              </div>

              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2 border-b border-gray-100 pb-2">
                <span className="w-2 h-2 rounded-none bg-[#caa359]" />
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
                  className="px-6 py-2.5 bg-gray-100 text-gray-700 font-bold text-sm rounded-none hover:bg-gray-200 transition-colors"
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
