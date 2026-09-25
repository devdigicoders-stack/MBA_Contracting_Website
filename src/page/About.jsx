import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  Clock, 
  CreditCard, 
  HardHat, 
  HeartHandshake, 
  Award,
  Target,
  Eye 
} from 'lucide-react';
import AboutCompany from '../compontent/AboutCompany';
import MeetOurTeam from '../compontent/MeetOurTeam';
import WhatWeDo from '../compontent/WhatWeDo';


export default function About() {
  const differences = [
    {
      title: 'Certified & Licensed',
      desc: 'Every engineer and technician is certified, licensed, and rigorously vetted. Your project\'s safety is our top priority.',
      icon: ShieldCheck
    },
    {
      title: 'Fast & Reliable',
      desc: 'We value your time. Our team offers swift response times and long-lasting contracting and maintenance solutions.',
      icon: Clock
    },
    {
      title: 'Transparent Pricing',
      desc: 'No hidden fees, no surprises. You\'ll always receive clear, upfront pricing before any work begins.',
      icon: CreditCard
    },
    {
      title: 'Expert Engineers',
      desc: 'Our team comprises highly skilled engineers and craftsmen dedicated to delivering flawless execution on every site.',
      icon: HardHat
    },
    {
      title: 'Customer-Centric',
      desc: 'Your satisfaction is our ultimate metric. We build lasting relationships through trust, not just one-time transactions.',
      icon: HeartHandshake
    },
    {
      title: 'Quality Workmanship',
      desc: 'We use top-tier materials and proven techniques to ensure the highest quality in every job we undertake.',
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#0c1b2a]">
      
      {/* ========================================================
          1. HERO SECTION
      ======================================================== */}
      <section className="relative w-full overflow-hidden bg-white">
        {/* Background Grid Pattern from Contact page */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left: Text Content */}
          <div className="space-y-6 lg:pr-8 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Your Trusted <br />
              <span className="text-[#004080]">Maintenance Partner</span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg">
              Since our founding, MBA Contracting has been dedicated to delivering professional property maintenance, construction, and renovation services that Doha homeowners and businesses can rely on. With certified engineers, transparent pricing, and a commitment to excellence, we've become the trusted partner for countless properties across Qatar.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <Link to="/services" className="inline-flex items-center justify-between gap-3 px-6 py-3.5 bg-[#004080] hover:bg-[#002952] text-white rounded-full font-bold text-[15px] transition-all shadow-md hover:shadow-lg w-full sm:w-auto shrink-0">
                <span>Explore Our Services</span>
                <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0">
                  <ArrowRight className="w-4 h-4 text-[#004080] stroke-[3]" />
                </span>
              </Link>
              
              <a href="https://wa.me/97450722177" target="_blank" rel="noreferrer" className="inline-flex items-center justify-between gap-3 px-6 py-3.5 bg-[#2ed573] text-white font-bold text-[15px] rounded-full hover:bg-[#27ae60] transition-all shadow-md hover:shadow-lg w-full sm:w-auto shrink-0">
                <span>Chat with us on WA</span>
                <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 text-[#2ed573] stroke-[3]" />
                </span>
              </a>
            </div>
          </div>

          {/* Right: Overlapping Images */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full mt-12 lg:mt-0">
            {/* Top Right Image */}
            <div className="absolute top-0 right-0 lg:right-4 w-[65%] h-[60%] rounded-[2rem] overflow-hidden shadow-2xl z-10 border-4 border-white">
              <img src="/about_hero_1.jpg" alt="Happy Clients" className="w-full h-full object-cover" />
            </div>
            
            {/* Bottom Left Image */}
            <div className="absolute bottom-4 left-0 lg:left-4 w-[55%] h-[60%] rounded-[2rem] overflow-hidden shadow-2xl z-20 border-4 border-white">
              <img src="/about_hero_2.jpg" alt="Engineers at work" className="w-full h-full object-cover" />
            </div>
          </div>
          
        </div>
        </div>
      </section>

      {/* ========================================================
          MISSION & VISION SECTION
      ======================================================== */}
      <section className="w-full bg-white py-20 lg:py-28 relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#f8fafd] rounded-full translate-x-1/2 -translate-y-1/4 opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#f05c26] uppercase">Our Purpose</span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0c1b2a] tracking-tight">
              Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full">
            
            {/* Mission Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-orange-100/50 flex items-center justify-center mb-8 relative z-10 border border-orange-100">
                <Target className="w-8 h-8 text-[#f05c26]" strokeWidth={2} />
              </div>
              
              <h3 className="text-2xl font-bold text-[#0c1b2a] mb-4 relative z-10">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                To provide unparalleled property maintenance, construction, and renovation services in Qatar. We strive to deliver transparent, high-quality, and reliable solutions that enhance the value and comfort of every property we touch, ensuring total customer satisfaction on every project.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-blue-100/50 flex items-center justify-center mb-8 relative z-10 border border-blue-100">
                <Eye className="w-8 h-8 text-[#004080]" strokeWidth={2} />
              </div>
              
              <h3 className="text-2xl font-bold text-[#0c1b2a] mb-4 relative z-10">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                To be the most trusted and sought-after contracting and maintenance partner in the Middle East. We envision setting new industry standards for operational excellence, innovation, and sustainable building practices, building a legacy of quality that lasts for generations.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          2. WHO WE ARE SECTION
      ======================================================== */}
      <AboutCompany />

      {/* ========================================================
          WHAT WE DO SECTION
      ======================================================== */}
      <WhatWeDo />

      {/* ========================================================
          3. THE DIFFERENCE SECTION
      ======================================================== */}
      <section className="w-full bg-[#f8fafd] pt-20 lg:pt-28 pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0c1b2a] tracking-tight">
              MBA Difference
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {differences.map((diff, idx) => (
              <div 
                key={idx} 
                className={`
                  flex flex-col items-center md:items-start text-center md:text-left px-6 sm:px-10 py-10
                  ${idx < 3 ? 'lg:border-b lg:border-gray-200/60' : ''} 
                  ${idx % 3 !== 2 ? 'lg:border-r lg:border-gray-200/60' : ''}
                  ${idx < 4 ? 'md:border-b md:border-gray-200/60 lg:border-b-0' : ''}
                  ${idx % 2 !== 1 ? 'md:border-r md:border-gray-200/60 lg:border-r-0' : 'md:border-r-0'}
                  border-b border-gray-200/60 md:border-b-0 last:border-b-0
                `}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50/80 flex items-center justify-center mb-6 shadow-sm border border-blue-100">
                  <diff.icon className="w-6 h-6 text-[#004080]" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-[#0c1b2a] mb-3">
                  {diff.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {diff.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          MEET OUR TEAM SECTION
      ======================================================== */}
      <MeetOurTeam />

    </div>
  );
}
