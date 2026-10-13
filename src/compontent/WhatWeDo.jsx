import React from 'react';
import { Wrench, Droplets, Zap, PaintBucket, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhatWeDo() {
  return (
    <section className="w-full bg-white py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#0c1b2a] tracking-tight">
            What We Do
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-16">
          
          {/* Card 1: Building Maintenance Services */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgb(0,0,0,0.08)] transition-all duration-300 p-8 sm:p-10 flex flex-col items-center text-center">
            {/* Graphic area */}
            <div className="relative w-full h-48 mb-8 flex items-center justify-center">
              {/* Concentric circles */}
              <div className="absolute w-[220px] h-[220px] rounded-full border border-gray-100"></div>
              <div className="absolute w-[120px] h-[120px] rounded-full border border-gray-100"></div>
              
              {/* Icons orbiting */}
              <div className="absolute top-[10%] right-[20%] bg-white p-2.5 rounded-full shadow-lg text-orange-500"><Wrench className="w-4 h-4"/></div>
              <div className="absolute top-[35%] left-[10%] bg-white p-2.5 rounded-full shadow-lg text-orange-500"><ShieldCheck className="w-4 h-4"/></div>
              <div className="absolute bottom-[15%] left-[30%] bg-white p-2.5 rounded-full shadow-lg text-orange-500"><PaintBucket className="w-4 h-4"/></div>
              <div className="absolute bottom-[25%] right-[10%] bg-white p-2.5 rounded-full shadow-lg text-orange-500"><Zap className="w-4 h-4"/></div>
              <div className="absolute top-[45%] right-[-5%] bg-white p-2.5 rounded-full shadow-lg text-orange-500"><Droplets className="w-4 h-4"/></div>
            </div>

            <h3 className="text-2xl font-bold text-[#0c1b2a] mb-4">Building Maintenance<br/>Services</h3>
            <p className="text-gray-500 leading-relaxed text-[15px]">
              Expert building maintenance in Qatar including Plumbing fixes, electrical work, painting, and general handyman services. Book easily, track progress, and enjoy professional service with upfront pricing.
            </p>
          </div>

          {/* Card 2: Construction Services */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgb(0,0,0,0.08)] transition-all duration-300 p-8 sm:p-10 flex flex-col">
            <h3 className="text-2xl font-bold text-[#0c1b2a] mb-4">Construction<br/>Services</h3>
            
            <div className="mb-6 flex items-center gap-2 border-b border-gray-100 pb-6">
              <span className="text-4xl font-extrabold text-[#004080] italic tracking-tighter">MBA</span>
              <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-2">Build</span>
            </div>

            <p className="text-gray-500 leading-relaxed text-[15px] mb-8">
              Complete construction services from MBA Contracting. From site preparation to final handover, we deliver villa, building, extension and majlis construction with organized execution, quality materials, and close site supervision.
            </p>

            <ul className="space-y-4 mt-auto">
              {['Villa Construction', 'Building Construction', 'Extension Construction', 'Majlis Construction'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#004080] flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-[15px] font-medium text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3: General Finishing Works */}
          <div className="bg-[#fdeed6] rounded-3xl border border-orange-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgb(0,0,0,0.08)] transition-all duration-300 p-8 sm:p-10 flex flex-col">
            <h3 className="text-2xl font-bold text-[#0c1b2a] mb-6 border-b border-orange-200/60 pb-6">General Finishing<br/>Works</h3>
            
            <p className="text-[#0c1b2a]/90 leading-relaxed text-[15px] mb-8 font-medium">
              Complete finishing works for your property. From surface preparation to the final finish, our team manages every detail of your villa, building, or majlis project with skilled workmanship and clean results.
            </p>

            <ul className="space-y-4 mt-auto">
              {['Tile Installation & Flooring Works', 'Painting & Plastering Works', 'Gypsum Board & Interior Finishing', 'Electrical & Plumbing Works'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#e87a38] flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span className="text-[15px] font-medium text-[#0c1b2a]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact" className="inline-flex items-center justify-between gap-3 px-6 py-3.5 bg-[#f05c26] hover:bg-[#d94a15] text-white rounded-full font-bold text-[15px] transition-all shadow-md hover:shadow-lg w-full sm:w-auto shrink-0">
            Book a Service
            <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0">
              <ArrowUpRight className="w-4 h-4 text-[#f05c26] stroke-[3]" />
            </span>
          </Link>
          
          <Link to="/contact" className="inline-flex items-center justify-between gap-3 px-6 py-3.5 bg-white hover:bg-gray-50 text-[#0c1b2a] border border-gray-200 rounded-full font-bold text-[15px] transition-all shadow-sm hover:shadow-md w-full sm:w-auto shrink-0">
            Request Consultation
            <ArrowUpRight className="w-5 h-5 text-[#0c1b2a] stroke-[2]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
