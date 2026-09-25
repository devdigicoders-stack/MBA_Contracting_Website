import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhoWeAre() {
  return (
    <section className="py-16 sm:py-24 bg-[#f8fafd] relative overflow-hidden">
      {/* Decorative Top Slanted Strip */}
      <div 
        className="absolute top-0 left-0 w-[50%] md:w-[30%] h-10 sm:h-16 bg-[#ffb78c]" 
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 20%, 0 100%)' }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-6 sm:mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="flex flex-col justify-center max-w-xl mx-auto lg:mx-0">
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#1f2937] tracking-tight mb-8">
              Who We Are
            </h2>
            
            <div className="space-y-6 text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
              <p>
                MBA Contracting is Qatar's leading property maintenance and renovation company, providing comprehensive solutions for residential and commercial properties across all major communities. We specialize in on-demand maintenance services, cost-effective Annual Maintenance Contracts (AMC), and complete renovation and fit-out projects.
              </p>
              
              <p>
                Our mission is simple: make property maintenance effortless, transparent, and reliable. Whether you need emergency AC repair, a complete villa renovation, or ongoing maintenance support, our team of certified engineers and skilled professionals delivers exceptional service with integrity and expertise.
              </p>
            </div>

            <div className="mt-10">
              <Link 
                to="/about"
                className="inline-flex items-center gap-3 bg-[#f05c26] hover:bg-[#e04b15] text-white font-bold text-sm sm:text-base px-6 py-3 rounded-full transition-all duration-300 shadow-[0_4px_14px_0_rgba(240,92,38,0.39)] hover:shadow-[0_6px_20px_rgba(240,92,38,0.23)] hover:-translate-y-0.5"
              >
                Our History
                <span className="bg-white text-[#f05c26] p-1 rounded-full">
                  <ArrowUpRight className="w-4 h-4" strokeWidth={3} />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="w-full h-full min-h-[400px] lg:min-h-[600px] relative rounded-[2rem] overflow-hidden shadow-2xl">
            <img 
              src="/who_we_are_corporate.jpg" 
              alt="MBA Contracting Professional Team" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
