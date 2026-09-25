import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function AboutCompany() {
  const approaches = [
    "Understand the client's requirement",
    "Assess the property or project site",
    "Define the scope of work",
    "Execute the approved works professionally",
    "Inspect completed works and coordinate handover"
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#004080] text-xs font-bold uppercase tracking-widest mb-6 w-max">
              <span className="w-1.5 h-1.5 rounded-full bg-[#004080] animate-pulse" />
              About Us
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-[#0c1b2a] leading-tight mb-4">
              Built on Quality.<br />Driven by Excellence.
            </h2>
            
            <div className="space-y-5 text-gray-600 leading-relaxed text-[15px] sm:text-base mb-10">
              <p>
                MBA Contracting delivers construction, contracting, finishing and maintenance solutions for clients in Doha, Qatar. Our objective is to provide dependable workmanship, organized project execution and solutions aligned with each client's requirements.
              </p>
              <p>
                We understand that every property project has different requirements. Our team works around the project scope, site conditions and desired finish to deliver practical solutions with attention to detail.
              </p>
            </div>

            {/* Our Approach */}
            <div>
              <h3 className="text-2xl font-bold text-[#f05c26] mb-5">
                Our Approach
              </h3>
              <ul className="space-y-4">
                {approaches.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-[#004080]" strokeWidth={2.5} />
                    </div>
                    <span className="text-gray-700 font-medium leading-relaxed text-[15px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right: Image */}
          <div className="relative w-full h-full min-h-[500px] lg:min-h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
            {/* Background decorative shape */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
            
            <img 
              src="/who_we_are_team.jpg" 
              alt="MBA Contracting Professional Work" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1b2a]/60 to-transparent pointer-events-none"></div>
            
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20">
                <p className="text-[#0c1b2a] font-bold text-lg leading-snug">
                  "Delivering practical solutions with attention to detail across Qatar."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
