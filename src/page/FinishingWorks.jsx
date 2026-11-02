import React, { useState } from 'react';
import { Award, Users, ShieldCheck, Building2, Paintbrush, Layers, Maximize, Tent, Wrench, CheckCircle2, ArrowRight, X, ArrowUpRight, Zap, Droplets } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function FinishingWorks() {
  const { t, isRTL } = useLanguage();
  const [selectedService, setSelectedService] = useState(null);

  const features = [
    { icon: Award, label: isRTL ? 'عمل عالي الجودة' : 'High Quality Work' },
    { icon: Users, label: isRTL ? 'فريق محترف' : 'Skilled Professionals' },
    { icon: ShieldCheck, label: isRTL ? 'تسليم في الموعد' : 'On-Time Completion' },
    { icon: Building2, label: isRTL ? 'تشطيبات نظيفة وعصرية' : 'Clean & Modern Finishes' },
  ];

  const icons = [Layers, Paintbrush, Maximize, Wrench, Tent, Building2, Zap, Droplets];
  const images = [
    '/finishingwork/Tile Installation Works.png',
    '/finishingwork/Painting Works.png',
    '/finishingwork/Gypsum Board Works.png',
    '/finishingwork/Plastering Works.png',
    '/finishingwork/Flooring Works.png',
    '/finishingwork/Interior Finishing Works.png',
    '/finishingwork/Electrical Works.png',
    '/finishingwork/Plumbing Works.png',
  ];

  const serviceList = t.finishingWorksPage.services.map((item, idx) => ({
    ...item,
    icon: icons[idx] || Layers,
    image: images[idx] || '/finishingwork/Tile Installation Works.png',
  }));

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative">
      {/* ========================================================
          HERO SECTION (Light Theme)
      ======================================================== */}
      <section className="relative w-full bg-white overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24 flex items-center justify-center text-center">
        
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Bottom Fade Gradient for the Grid */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none z-0"></div>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center mt-6 sm:mt-12">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#004080] text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#004080] animate-pulse" />
            {isRTL ? 'أعمال التشطيبات' : 'OUR SERVICES'}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1f2937] tracking-tight mb-5">
            {t.finishingWorksPage.heading}
          </h1>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10">
            {t.finishingWorksPage.intro}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto mb-10">
            {/* Call Us Button */}
            <a 
              href="tel:+97450722177"
              className="group flex items-center justify-center gap-3 px-6 py-3.5 sm:py-3 bg-[#f05c26] hover:bg-[#d94a15] text-white rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg active:scale-95 w-full sm:w-auto"
            >
              <span>{t.nav.callUsNow}</span>
              <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-[#f05c26] stroke-[3]" />
              </span>
            </a>

            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/97450722177"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-6 py-3.5 sm:py-3 bg-[#25D366] hover:bg-[#1ebd5b] text-white rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg active:scale-95 w-full sm:w-auto"
            >
              <span>{t.nav.chatWhatsApp}</span>
              <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                <svg className="w-4 h-4 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.079-2.115-.508-1.745-.722-2.859-2.513-2.946-2.628-.088-.116-.708-.941-.708-1.792 0-.85.447-1.268.607-1.442.159-.175.348-.218.463-.218.117 0 .232.001.333.007.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.174.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.42-.099.824z" />
                </svg>
              </span>
            </a>
          </div>

          {/* Features Row */}
          <div className="flex flex-wrap items-start justify-center gap-4 sm:gap-6 pt-8 border-t border-gray-200 w-full max-w-2xl mx-auto">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center max-w-[80px] sm:max-w-[100px]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-blue-100 flex items-center justify-center bg-blue-50 mb-3 transition-transform hover:scale-105 shadow-sm">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#004080]" strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-gray-700 leading-tight">
                    {feature.label}
                  </span>
                </div>
              );
            })}
          </div>
          
        </div>
      </section>

      {/* Finishing Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c1b2a] tracking-tight uppercase">
            {isRTL ? 'أعمال التشطيبات' : 'Our Expertise'}
          </h2>
          <div className="w-16 h-1 bg-[#004080] mx-auto mt-6" />
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
                <div className="w-full aspect-[3/2] overflow-hidden relative bg-gray-100">
                  <div className="absolute inset-0 bg-[#0c1b2a]/10 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={s.image} 
                    alt={s.title} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 z-20 w-10 h-10 bg-white rounded-none flex items-center justify-center shadow-md">
                    <Icon className="w-5 h-5 text-[#004080]" />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-extrabold text-xl text-[#0c1b2a] group-hover:text-[#004080] transition-colors mb-3">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                    {s.desc}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#004080] uppercase tracking-wider mt-auto group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                    <span>{isRTL ? 'عرض التفاصيل' : 'View Details'}</span> <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Scope & Description Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 w-full">
        <div className="text-center mb-10">
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#004080] uppercase">
            {isRTL ? 'نطاق العمل الكامل' : 'COMPLETE SCOPE'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0c1b2a] tracking-tight mt-2">
            {isRTL ? 'نطاق وتفاصيل أعمال التشطيبات' : 'Service Scope & Description'}
          </h2>
          <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
            {isRTL 
              ? 'ملخص لكافة أعمال التشطيبات العامة التي تديرها إم بي إيه للمقاولات في كافة أنحاء قطر.'
              : 'Summary of all general finishing works managed by MBA Contracting across Qatar.'}
          </p>
        </div>

        <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-200">
          <table className="w-full text-left rtl:text-right border-collapse">
            <thead>
              <tr className="bg-[#0c1b2a] text-white">
                <th className="py-4 px-6 font-bold text-sm tracking-wide w-1/3 border-r rtl:border-r-0 rtl:border-l border-gray-750">
                  {isRTL ? 'الخدمة' : 'Service'}
                </th>
                <th className="py-4 px-6 font-bold text-sm tracking-wide">
                  {isRTL ? 'الوصف' : 'Description'}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-sm">
              {serviceList.map((item, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white hover:bg-gray-50/80 transition-colors' : 'bg-gray-50/50 hover:bg-gray-100/50 transition-colors'}>
                  <td className="py-4 px-6 font-bold text-[#0c1b2a] border-r rtl:border-r-0 rtl:border-l border-gray-200 flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#004080] flex-shrink-0" />
                    {item.title}
                  </td>
                  <td className="py-4 px-6 text-gray-700 leading-relaxed">
                    {item.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Dynamic Modal Overlay */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0c1b2a]/80 backdrop-blur-sm animate-fade-in">
          <div 
            className="absolute inset-0 cursor-pointer" 
            onClick={() => setSelectedService(null)} 
          />
          
          <div className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] animate-slide-up">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 rtl:right-auto rtl:left-4 z-30 w-9 h-9 bg-black/60 hover:bg-[#004080] text-white backdrop-blur rounded-full flex items-center justify-center transition-all shadow-lg hover:scale-105"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Top Showcase Image */}
            <div className="w-full h-64 sm:h-80 md:h-96 relative overflow-hidden bg-gray-900 flex-shrink-0">
              <img 
                src={selectedService.image} 
                alt={selectedService.title} 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
              
              {/* Floating Badge & Title over Image */}
              <div className="absolute bottom-5 left-6 right-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-xl flex-shrink-0">
                  <selectedService.icon className="w-6 h-6 text-[#004080]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400">
                    {isRTL ? 'إم بي إيه للمقاولات قطر' : 'MBA Contracting Qatar'}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight drop-shadow-sm">
                    {selectedService.title}
                  </h2>
                </div>
              </div>
            </div>

            {/* Bottom Content Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#004080] mb-2">
                  {isRTL ? 'الوصف' : 'Description'}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {selectedService.desc}
                </p>
              </div>

              {/* Action Buttons in Modal */}
              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                <a 
                  href="tel:+97450722177"
                  className="flex-1 bg-[#004080] hover:bg-[#002952] text-white py-3 px-4 rounded-xl font-bold text-center text-sm transition-colors flex items-center justify-center gap-2"
                >
                  {t.nav.callUsNow}
                </a>
                <a 
                  href="https://wa.me/97450722177" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 bg-[#2ed573] hover:bg-[#27ae60] text-white py-3 px-4 rounded-xl font-bold text-center text-sm transition-colors flex items-center justify-center gap-2"
                >
                  {t.nav.chatWA}
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
