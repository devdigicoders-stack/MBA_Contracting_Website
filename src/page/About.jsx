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
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const icons = [Award, ShieldCheck, HardHat, Target, Eye, HeartHandshake];

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
          <div className="space-y-6 lg:pr-8 rtl:lg:pr-0 rtl:lg:pl-8 text-center lg:text-left rtl:lg:text-right flex flex-col items-center lg:items-start rtl:lg:items-start">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              {t.about.heroHeading}
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg">
              {t.about.heroParagraph}
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start rtl:lg:justify-start gap-4 pt-4">
              <Link to="/services" className="inline-flex items-center justify-between gap-3 px-6 py-3.5 bg-[#004080] hover:bg-[#002952] text-white rounded-full font-bold text-[15px] transition-all shadow-md hover:shadow-lg w-full sm:w-auto shrink-0">
                <span>{t.about.exploreServices}</span>
                <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0">
                  <ArrowRight className="w-4 h-4 text-[#004080] stroke-[3]" />
                </span>
              </Link>
              
              <a href="https://wa.me/97450722177" target="_blank" rel="noreferrer" className="inline-flex items-center justify-between gap-3 px-6 py-3.5 bg-[#2ed573] text-white font-bold text-[15px] rounded-full hover:bg-[#27ae60] transition-all shadow-md hover:shadow-lg w-full sm:w-auto shrink-0">
                <span>{t.about.chatWA}</span>
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
              {t.about.missionTitle} &amp; {t.about.visionTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full">
            
            {/* Mission Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-orange-100/50 flex items-center justify-center mb-8 relative z-10 border border-orange-100">
                <Target className="w-8 h-8 text-[#f05c26]" strokeWidth={2} />
              </div>
              
              <h3 className="text-2xl font-bold text-[#0c1b2a] mb-4 relative z-10">{t.about.missionTitle}</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                {t.about.missionText}
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-blue-100/50 flex items-center justify-center mb-8 relative z-10 border border-blue-100">
                <Eye className="w-8 h-8 text-[#004080]" strokeWidth={2} />
              </div>
              
              <h3 className="text-2xl font-bold text-[#0c1b2a] mb-4 relative z-10">{t.about.visionTitle}</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                {t.about.visionText}
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
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#004080] uppercase">{t.coreValues.label}</span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0c1b2a] tracking-tight">
              {t.coreValues.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {t.coreValues.items.map((diff, idx) => {
              const IconComp = icons[idx] || Award;
              return (
                <div 
                  key={idx} 
                  className={`
                    flex flex-col items-center md:items-start rtl:md:items-start text-center md:text-left rtl:md:text-right px-6 sm:px-10 py-10
                    ${idx < 3 ? 'lg:border-b lg:border-gray-200/60' : ''} 
                    ${idx % 3 !== 2 ? 'lg:border-r rtl:lg:border-r-0 rtl:lg:border-l lg:border-gray-200/60' : ''}
                    ${idx < 4 ? 'md:border-b md:border-gray-200/60 lg:border-b-0' : ''}
                    ${idx % 2 !== 1 ? 'md:border-r rtl:md:border-r-0 rtl:md:border-l md:border-gray-200/60 lg:border-r-0' : 'md:border-r-0'}
                    border-b border-gray-200/60 md:border-b-0 last:border-b-0
                  `}
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50/80 flex items-center justify-center mb-6 shadow-sm border border-blue-100">
                    <IconComp className="w-6 h-6 text-[#004080]" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-bold text-[#0c1b2a] mb-3">
                    {diff.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {diff.desc}
                  </p>
                </div>
              );
            })}
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
