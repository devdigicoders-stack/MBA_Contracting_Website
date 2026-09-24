import React from 'react';
import { Users, Award, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export default function About() {
  const approaches = [
    'Understand the client\'s requirement',
    'Assess the property or project site',
    'Define the scope of work',
    'Execute the approved works professionally',
    'Inspect completed works and coordinate handover'
  ];

  return (
    <div className="min-h-screen bg-[#fcfbf9] flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full bg-[#09121c] overflow-hidden flex items-center min-h-[475px] lg:min-h-[575px]">
        {/* Background Image with Dark Gradient Overlays (matching Home Page) */}
        <div className="absolute inset-0 z-0">
          <img
            src="/image copy 10.png"
            alt="About MBA Contracting"
            className="w-full h-full object-cover object-center"
          />
          {/* Left Dark Gradient for sharp contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070e17] via-[#08121e]/95 sm:via-[#08121e]/90 lg:via-[#08121e]/80 to-transparent lg:w-[65%]" />
          {/* Subtle dark tint */}
          <div className="absolute inset-0 bg-black/20" />
          {/* Bottom edge shadow */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#070e17]/90 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none bg-[#caa359]/20 border border-[#caa359]/30 text-[#caa359] text-xs font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#caa359] animate-pulse" />
              Who We Are
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase leading-none mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#caa359] to-[#d4b475]">Us</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-medium italic border-l-4 border-[#caa359] pl-4 sm:pl-5 py-1">
              "Built on Quality. Driven by Excellence."
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Text Content */}
          <div className="space-y-8">
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                <span className="font-bold text-[#0c1b2a] text-xl">MBA Contracting</span> delivers construction, contracting, finishing and maintenance solutions for clients in Doha, Qatar. Our objective is to provide dependable workmanship, organized project execution and solutions aligned with each client's requirements.
              </p>
              <p>
                We understand that every property project has different requirements. Our team works around the project scope, site conditions and desired finish to deliver practical solutions with attention to detail.
              </p>
            </div>

            {/* Approach Section */}
            <div className="pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-extrabold text-[#0c1b2a] uppercase tracking-tight mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-[#caa359]"></span>
                Our Approach
              </h2>
              
              <ul className="space-y-4">
                {approaches.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-[#caa359]/30 transition-all group">
                    <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#caa359] transition-colors">
                      <span className="text-[#caa359] group-hover:text-white font-bold text-sm">
                        0{idx + 1}
                      </span>
                    </div>
                    <span className="text-gray-700 font-medium pt-1.5">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Floating Stats & Image */}
          <div className="relative">
            <div className="sticky top-24 space-y-6">
              
              <div className="relative rounded-none overflow-hidden h-[400px] shadow-2xl border border-gray-200">
                <img src="/image copy 5.png" alt="Construction Site" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1b2a]/90 via-[#0c1b2a]/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="w-12 h-12 bg-[#caa359] flex items-center justify-center mb-4">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-wide">Dependable Workmanship</h3>
                </div>
              </div>

              {/* Core Values / Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white border border-gray-100 shadow-sm flex flex-col items-center text-center group hover:border-[#caa359] transition-colors">
                  <Users className="w-8 h-8 text-[#caa359] mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-[#0c1b2a]">Expert Team</h4>
                  <p className="text-xs text-gray-500 mt-2">Certified engineers & craftsmen</p>
                </div>
                
                <div className="p-6 bg-white border border-gray-100 shadow-sm flex flex-col items-center text-center group hover:border-[#caa359] transition-colors">
                  <Award className="w-8 h-8 text-[#caa359] mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-bold text-[#0c1b2a]">15+ Years</h4>
                  <p className="text-xs text-gray-500 mt-2">Excellence in execution</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="w-full bg-[#0c1b2a] py-20 px-4 sm:px-6 lg:px-8 text-white mt-12 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#caa359] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-[0.2em] text-[#caa359] uppercase mb-2 block">
              Core Purpose
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase">
              Mission & Vision
            </h2>
            <div className="w-16 h-1 bg-[#caa359] mx-auto mt-6" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission Card */}
            <div className="bg-white/5 border border-white/10 p-8 lg:p-10 hover:bg-white/10 transition-colors rounded-none backdrop-blur-sm">
              <div className="w-14 h-14 bg-[#caa359]/20 flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-[#caa359]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed font-medium">
                To deliver construction and contracting services of the highest quality in Qatar. We are dedicated to providing dependable workmanship, safe project execution, and innovative solutions that exceed client expectations, ensuring every project is completed on time and within budget.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white/5 border border-white/10 p-8 lg:p-10 hover:bg-white/10 transition-colors rounded-none backdrop-blur-sm">
              <div className="w-14 h-14 bg-[#caa359]/20 flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-[#caa359]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed font-medium">
                To be the most trusted and preferred contracting partner in the region, recognized for our commitment to excellence, sustainable building practices, and our ability to transform architectural visions into enduring realities that shape the future skyline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our History Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-[0.2em] text-[#caa359] uppercase mb-2 block">
            Our Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c1b2a] tracking-tight uppercase">
            Our History
          </h2>
          <div className="w-16 h-1 bg-[#caa359] mx-auto mt-6" />
        </div>

        <div className="relative lg:mx-auto lg:w-4/5 py-8 space-y-12 before:absolute before:inset-0 before:left-6 md:before:left-1/2 md:before:-ml-[1px] before:w-0.5 before:bg-[#caa359]/30">
          {/* Timeline Item 1 */}
          <div className="relative pl-14 md:pl-0">
            <div className="md:w-1/2 md:pr-12 md:text-right">
              <div className="absolute left-6 -translate-x-1/2 md:translate-x-0 md:left-1/2 md:-ml-[9px] top-1 md:top-0 w-4 h-4 rounded-full bg-[#caa359] ring-4 ring-amber-50"></div>
              <h3 className="text-xl font-bold text-[#0c1b2a] mb-2">Foundation</h3>
              <span className="inline-block px-3 py-1 bg-gray-100 text-[#caa359] font-bold text-sm mb-3">2008</span>
              <p className="text-gray-600">MBA Contracting was established with a small but highly skilled team, taking on residential finishing and maintenance works across Doha.</p>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="relative pl-14 md:pl-0">
            <div className="md:w-1/2 md:ml-auto md:pl-12">
              <div className="absolute left-6 -translate-x-1/2 md:translate-x-0 md:left-1/2 md:-ml-[9px] top-1 md:top-0 w-4 h-4 rounded-full bg-[#caa359] ring-4 ring-amber-50"></div>
              <h3 className="text-xl font-bold text-[#0c1b2a] mb-2">Commercial Expansion</h3>
              <span className="inline-block px-3 py-1 bg-gray-100 text-[#caa359] font-bold text-sm mb-3">2014</span>
              <p className="text-gray-600">Expanded our operations to include full-scale commercial general contracting, delivering turnkey solutions for major office and retail spaces.</p>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="relative pl-14 md:pl-0">
            <div className="md:w-1/2 md:pr-12 md:text-right">
              <div className="absolute left-6 -translate-x-1/2 md:translate-x-0 md:left-1/2 md:-ml-[9px] top-1 md:top-0 w-4 h-4 rounded-full bg-[#caa359] ring-4 ring-amber-50"></div>
              <h3 className="text-xl font-bold text-[#0c1b2a] mb-2">Excellence & ISO Certification</h3>
              <span className="inline-block px-3 py-1 bg-gray-100 text-[#caa359] font-bold text-sm mb-3">2019</span>
              <p className="text-gray-600">Achieved ISO certification for quality management and safety, solidifying our reputation as one of the most reliable contractors in Qatar.</p>
            </div>
          </div>

          {/* Timeline Item 4 */}
          <div className="relative pl-14 md:pl-0">
            <div className="md:w-1/2 md:ml-auto md:pl-12">
              <div className="absolute left-6 -translate-x-1/2 md:translate-x-0 md:left-1/2 md:-ml-[9px] top-1 md:top-0 w-4 h-4 rounded-full bg-[#caa359] ring-4 ring-amber-50 animate-pulse"></div>
              <h3 className="text-xl font-bold text-[#0c1b2a] mb-2">Leading the Future</h3>
              <span className="inline-block px-3 py-1 bg-[#caa359] text-white font-bold text-sm mb-3">Today</span>
              <p className="text-gray-600">Continuing to build excellence with over 15+ years of experience, a dedicated team of experts, and an uncompromising commitment to client satisfaction.</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
