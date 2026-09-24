import React from 'react';
import { ShieldCheck, CheckCircle2, Award, Briefcase, Wrench, Users, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Professional Workmanship',
      desc: 'A focus on quality and attention to finishing details.',
      icon: Award
    },
    {
      title: 'Complete Solutions',
      desc: 'Construction, extensions, finishing and maintenance services through one contracting partner.',
      icon: Briefcase
    },
    {
      title: 'Practical Project Execution',
      desc: 'Organized execution based on the approved scope and site requirements.',
      icon: Wrench
    },
    {
      title: 'Quality-Focused Approach',
      desc: 'Attention to workmanship, materials and final appearance.',
      icon: ShieldCheck
    },
    {
      title: 'Residential & Commercial Support',
      desc: 'Solutions can be tailored to different property and project requirements.',
      icon: Users
    },
    {
      title: 'Client-Centered Service',
      desc: 'Clear communication and coordination throughout the project.',
      icon: CheckCircle2
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfbf9] flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full bg-[#09121c] overflow-hidden flex items-center min-h-[475px] lg:min-h-[575px]">
        {/* Background Image with Dark Gradient Overlays (matching Home Page) */}
        <div className="absolute inset-0 z-0">
          <img
            src="/image copy 5.png"
            alt="Why Choose MBA Contracting"
            className="w-full h-full object-cover object-center"
          />
          {/* Left Dark Gradient for sharp contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070e17] via-[#08121e]/95 sm:via-[#08121e]/90 lg:via-[#08121e]/80 to-transparent lg:w-[65%]" />
          {/* Subtle dark tint */}
          <div className="absolute inset-0 bg-black/30" />
          {/* Bottom edge shadow */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#070e17]/90 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none bg-[#caa359]/20 border border-[#caa359]/30 text-[#caa359] text-xs font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-none bg-[#caa359] animate-pulse" />
              Our Advantages
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-[2.65rem] font-extrabold text-white tracking-tight uppercase leading-[1.1]">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#caa359] to-[#d4b475]">MBA Contracting?</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 font-medium border-l-4 border-[#caa359] pl-5 py-1">
              Delivering dependable workmanship, organized execution, and premium solutions tailored to your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-[0.2em] text-[#caa359] uppercase mb-2 block">
            Core Values
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c1b2a] tracking-tight uppercase">
            The MBA Difference
          </h2>
          <div className="w-16 h-1 bg-[#caa359] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-8 rounded-none border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#caa359]/30 transition-all duration-300 group flex flex-col"
              >
                <div className="w-16 h-16 rounded-none bg-[#0c1b2a] flex items-center justify-center mb-6 group-hover:bg-[#caa359] transition-colors duration-300 shadow-md">
                  <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-extrabold text-[#0c1b2a] mb-4 uppercase tracking-wide group-hover:text-[#caa359] transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed flex-1">
                  {reason.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section inside the page */}
        <div className="mt-20 bg-[#0c1b2a] rounded-none p-10 md:p-16 text-center relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#caa359] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-white mb-6 uppercase">Ready to start your project?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Partner with MBA Contracting for professional, reliable, and high-quality construction and finishing services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:9696559848"
                className="px-8 py-3.5 bg-[#caa359] text-white font-bold uppercase tracking-wider rounded-none hover:bg-[#b88f44] transition-colors inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> Request a Quote — Call Now <ArrowRight className="w-4 h-4" />
              </a>
              <Link 
                to="/contact" 
                className="px-8 py-3.5 bg-transparent border border-[#caa359] text-[#caa359] font-bold uppercase tracking-wider rounded-none hover:bg-[#caa359]/10 transition-colors inline-flex items-center justify-center gap-2"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
