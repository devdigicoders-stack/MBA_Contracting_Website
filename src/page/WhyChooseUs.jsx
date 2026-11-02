import React from 'react';
import { ShieldCheck, CheckCircle2, Award, Briefcase, Wrench, Users, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function WhyChooseUs() {
  const { t, isRTL } = useLanguage();
  const icons = [Award, Briefcase, Wrench, ShieldCheck, Users, CheckCircle2];

  return (
    <div className="min-h-screen bg-[#fcfbf9] flex flex-col">
      {/* ========================================================
          1. HERO SECTION (Light Theme)
      ======================================================== */}
      <section className="relative w-full bg-[#f8fafd] overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24 flex items-center justify-center text-center border-b border-gray-100 min-h-[50vh] lg:h-[60vh]">
        
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Bottom Fade Gradient for the Grid */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f8fafd] to-transparent pointer-events-none z-0"></div>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center mt-6 sm:mt-12">
          
          <span className="text-sm font-bold tracking-[0.2em] text-[#f05c26] uppercase mb-4 block animate-fade-in-up">
            {isRTL ? 'مميزاتنا' : 'Our Advantages'}
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0c1b2a] tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            {isRTL ? 'لماذا تختار' : 'Why Choose'}{' '}
            <span className="text-[#004080]">{isRTL ? 'إم بي إيه' : 'MBA'}</span>
          </h1>

          <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            {isRTL 
              ? 'تقديم عمل متقن يُعتمد عليه، وتنفيذ منظّم، وحلول متكاملة تلبي متطلباتكم في قطر.'
              : 'Delivering dependable workmanship, organized execution, and premium solutions tailored to your requirements in Qatar.'}
          </p>

          <div className="flex items-center justify-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Link 
              to="/contact"
              className="inline-flex items-center justify-between gap-3 px-6 py-3.5 bg-[#004080] hover:bg-[#002952] text-white rounded-full font-bold text-[15px] transition-all shadow-md hover:shadow-lg w-full sm:w-auto shrink-0"
            >
              <span>{isRTL ? 'تواصل معنا' : 'Work With Us'}</span>
              <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0">
                <ArrowRight className="w-4 h-4 text-[#004080] stroke-[3] rtl:rotate-180" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-[#f8fafd] py-20 lg:py-28 w-full relative overflow-hidden border-b border-gray-100">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full translate-x-1/2 -translate-y-1/2 opacity-60 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-50 rounded-full -translate-x-1/2 translate-y-1/2 opacity-60 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 lg:mb-20">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#f05c26] uppercase mb-3 block">
              {t.coreValues.label}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0c1b2a] tracking-tight">
              {t.coreValues.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {t.coreValues.items.map((reason, idx) => {
              const Icon = icons[idx] || Award;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-gray-100 hover:border-blue-100 transition-all duration-300 group flex flex-col items-start rtl:items-start text-left rtl:text-right relative overflow-hidden"
                >
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-50/50 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out z-0"></div>

                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 relative z-10 group-hover:bg-[#004080] transition-colors duration-300 border border-blue-100/50">
                    <Icon className="w-6 h-6 text-[#004080] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#0c1b2a] mb-4 relative z-10">{reason.title}</h3>
                  
                  <p className="text-gray-500 leading-relaxed text-[15px] relative z-10 flex-grow">
                    {reason.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section inside the page */}
      <div className="mt-20 bg-[#0c1b2a] rounded-none p-10 md:p-16 text-center relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#004080] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-6 uppercase">
            {isRTL ? 'جاهز لبدء مشروعك؟' : 'Ready to start your project?'}
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            {isRTL 
              ? 'تشارك مع إم بي إيه للمقاولات للحصول على خدمات بناء وتشطيب احترافية وموثوقة وعالية الجودة.'
              : 'Partner with MBA Contracting for professional, reliable, and high-quality construction and finishing services.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#f05c26] hover:bg-[#d94a15] text-white rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
            >
              <span>{t.nav.contact}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
            <a 
              href="tel:+97450722177" 
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-bold text-sm transition-all w-full sm:w-auto justify-center"
            >
              <Phone className="w-4 h-4" />
              <span>{t.nav.callUsNow}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
