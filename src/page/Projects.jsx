import React, { useState } from 'react';
import { Briefcase, Building2, ShieldCheck, Award, Clock, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Projects() {
  const { t, isRTL } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);

  const projectProcess = isRTL ? [
    { step: '01', title: 'الاستشارة الأولية', desc: 'فهم متطلبات العميل وأهداف المشروع والميزانية المقترحة.' },
    { step: '02', title: 'معاينة الموقع', desc: 'معاينة الموقع وتحديد أعمال البناء أو التشطيب أو الصيانة المطلوبة.' },
    { step: '03', title: 'تحديد النطاق وعرض السعر', desc: 'تحديد نطاق العمل وتقديم عرض سعر تفصيلي بناءً على المتطلبات.' },
    { step: '04', title: 'تنفيذ المشروع', desc: 'تنفيذ الأعمال المعتمدة بتنسيق منظّم وعناية فائقة بالجودة.' },
    { step: '05', title: 'فحص الجودة', desc: 'مراجعة الأعمال المنجزة وضمان مطابقتها لأعلى معايير الإتقان.' },
    { step: '06', title: 'التسليم النهائي', desc: 'إتمام النطاق المتفق عليه وتنسيق تسليم المشروع بشكل رسمي.' },
  ] : [
    { step: '01', title: 'Consultation', desc: 'Understand the client\'s requirements, property and project objectives.' },
    { step: '02', title: 'Site Inspection', desc: 'Assess the site and identify the required construction, finishing or maintenance works.' },
    { step: '03', title: 'Scope & Quotation', desc: 'Define the work scope and provide a project quotation based on the requirements.' },
    { step: '04', title: 'Project Execution', desc: 'Carry out the approved works with organized coordination and attention to quality.' },
    { step: '05', title: 'Quality Inspection', desc: 'Review completed works and address relevant finishing or workmanship requirements.' },
    { step: '06', title: 'Handover', desc: 'Complete the agreed scope and coordinate project handover.' },
  ];

  const projectTypes = isRTL ? [
    { title: 'الفلل السكنية', desc: 'البناء، الملاحق والتوسعات، التشطيبات والصيانة.' },
    { title: 'المجالس', desc: 'بناء المجالس وحلول التشطيب المتكاملة للضيافة.' },
    { title: 'العقارات السكنية', desc: 'التجديد، الإصلاح، أعمال التشطيب والصيانة.' },
    { title: 'المباني التجارية', desc: 'المقاولات العامة، الصيانة والتشطيبات.' },
    { title: 'المكاتب والمساحات الإدارية', desc: 'الدهانات، الأرضيات، أعمال الجبس بورد والتشطيب.' },
  ] : [
    { title: 'Villas', desc: 'Construction, extensions, renovation, finishing and maintenance.' },
    { title: 'Majlis', desc: 'Construction and complete finishing solutions.' },
    { title: 'Residential Properties', desc: 'Renovation, repair, finishing and maintenance.' },
    { title: 'Commercial Buildings', desc: 'Contracting, maintenance and finishing works.' },
    { title: 'Offices & Business Spaces', desc: 'Renovation, painting, flooring, gypsum and finishing.' },
  ];

  const projectCategories = isRTL ? [
    { title: 'بناء الفلل', img: '/projects/villa_construction.jpg' },
    { title: 'بناء الملاحق والتوسعات', img: '/projects/villa_extensions.jpg' },
    { title: 'بناء المجالس', img: '/projects/majlis_construction.jpg' },
    { title: 'التشطيبات الداخلية', img: '/projects/interior_finishing.jpg' },
    { title: 'صيانة المباني', img: '/projects/building_maintenance.jpg' },
    { title: 'أعمال التجديد', img: '/projects/renovation_works.jpg' },
    { title: 'أعمال الدهانات', img: '/projects/painting_projects.jpg' },
    { title: 'البلاط والأرضيات', img: '/projects/flooring_tiling.jpg' },
  ] : [
    { title: 'Villa Construction', img: '/projects/villa_construction.jpg' },
    { title: 'Villa Extensions', img: '/projects/villa_extensions.jpg' },
    { title: 'Majlis Construction', img: '/projects/majlis_construction.jpg' },
    { title: 'Interior Finishing', img: '/projects/interior_finishing.jpg' },
    { title: 'Building Maintenance', img: '/projects/building_maintenance.jpg' },
    { title: 'Renovation Works', img: '/projects/renovation_works.jpg' },
    { title: 'Painting Projects', img: '/projects/painting_projects.jpg' },
    { title: 'Flooring & Tiling', img: '/projects/flooring_tiling.jpg' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* ========================================================
          1. HERO SECTION (Light Theme like Contact Page)
      ======================================================== */}
      <section className="relative w-full bg-white overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24 flex items-center justify-center text-center">
        
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Bottom Fade Gradient for the Grid */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none z-0"></div>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center mt-6 sm:mt-12">
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1f2937] tracking-tight mb-5">
            {isRTL ? 'مشاريعنا المنجزة' : 'Our Projects'}
          </h1>

          <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-xl mx-auto mb-8 sm:mb-10">
            {isRTL
              ? 'استكشف مشاريعنا المنجزة والجارية التي تعكس التزامنا بالجودة والاحترافية والتميز في البناء في قطر.'
              : 'Explore our completed and ongoing projects that reflect our commitment to quality, innovation and excellence in construction.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto mb-12">
            <Link 
              to="/contact"
              className="group flex items-center justify-center gap-3 px-6 py-3.5 sm:py-3 bg-[#f05c26] hover:bg-[#d94a15] text-white rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg active:scale-95 w-full sm:w-auto"
            >
              <span>{isRTL ? 'ابدأ مشروعك معنا' : 'Start Your Project'}</span>
              <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5 text-[#f05c26] stroke-[3]" />
              </span>
            </Link>
          </div>

          {/* Features Row */}
          <div className="flex flex-wrap items-center justify-center gap-y-6 gap-x-8 sm:gap-x-12 pt-8 border-t border-gray-200/80 w-full">
            {/* Feature 1 */}
            <div className="flex items-center gap-3">
              <Building2 className="w-8 h-8 text-[#004080]" />
              <div className="flex flex-col text-left rtl:text-right">
                <span className="text-xl font-black text-[#1f2937] leading-none">{isRTL ? 'تسليم مفتاح' : 'Turnkey'}</span>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide mt-1">{isRTL ? 'حلول متكاملة' : 'Complete Solutions'}</span>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-10 bg-gray-200" />

            {/* Feature 2 */}
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-[#004080]" />
              <div className="flex flex-col text-left rtl:text-right">
                <span className="text-xl font-black text-[#1f2937] leading-none">{isRTL ? 'الجودة أولاً' : 'Quality First'}</span>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide mt-1">{isRTL ? 'تشطيبات دقيقة' : 'Precision Finishing'}</span>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px h-10 bg-gray-200" />

            {/* Feature 3 */}
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-[#004080]" />
              <div className="flex flex-col text-left rtl:text-right">
                <span className="text-xl font-black text-[#1f2937] leading-none">{isRTL ? 'في الموعد' : 'On-Time'}</span>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide mt-1">{isRTL ? 'تسليم موثوق' : 'Reliable Handover'}</span>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-10 bg-gray-200" />

            {/* Feature 4 */}
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-[#004080]" />
              <div className="flex flex-col text-left rtl:text-right">
                <span className="text-xl font-black text-[#1f2937] leading-none">{isRTL ? 'فريق متخصص' : 'Skilled Team'}</span>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide mt-1">{isRTL ? 'إشراف دقيق' : 'Strict Supervision'}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. OUR PROJECT PROCESS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-14">
          <span className="text-sm font-bold tracking-[0.2em] text-[#004080] uppercase mb-2 block">
            {isRTL ? 'منهجية العمل' : 'How We Work'}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c1b2a] tracking-tight uppercase">
            {isRTL ? 'مراحل تنفيذ المشروع' : 'Our Project Process'}
          </h2>
          <div className="w-16 h-1 bg-[#004080] mx-auto mt-6" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {projectProcess.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-none bg-amber-50 text-[#004080] border border-amber-100 flex items-center justify-center text-xl font-black mb-5 group-hover:bg-[#004080] group-hover:text-white transition-colors">
                {item.step}
              </div>
              <h3 className="text-lg font-extrabold text-[#0c1b2a] mb-3 uppercase tracking-wide">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          PROJECT TYPES SECTION
      ======================================================== */}
      <section className="py-20 lg:py-28 bg-[#f8fafd] relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full translate-x-1/2 -translate-y-1/2 opacity-50 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-50 rounded-full -translate-x-1/2 translate-y-1/2 opacity-50 blur-3xl pointer-events-none"></div>

        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
          
          <div className="text-center mb-16 lg:mb-20">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#f05c26] uppercase mb-3 block">
              {isRTL ? 'خبراتنا المتنوعة' : 'Our Expertise'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0c1b2a] tracking-tight">
              {isRTL ? 'أنواع المشاريع' : 'Project Types'}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projectTypes.map((type, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-gray-100 hover:border-blue-100 transition-all duration-300 group flex flex-col items-start rtl:items-start text-left rtl:text-right relative overflow-hidden"
              >
                {/* Decorative subtle corner shape */}
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-50/50 rounded-full group-hover:scale-150 transition-transform duration-500 ease-out z-0"></div>

                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 relative z-10 group-hover:bg-[#004080] transition-colors duration-300 border border-blue-100/50">
                  <Briefcase className="w-6 h-6 text-[#004080] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-bold text-[#0c1b2a] mb-4 relative z-10">{type.title}</h3>
                
                <p className="text-gray-500 leading-relaxed text-[15px] relative z-10 mb-8 flex-grow">
                  {type.desc}
                </p>

                <div className="inline-flex items-center gap-2 text-[13px] font-bold text-[#f05c26] uppercase tracking-wider mt-auto group-hover:translate-x-2 rtl:group-hover:-translate-x-2 transition-transform duration-300 relative z-10">
                  <span>{isRTL ? 'معرفة المزيد' : 'Learn more'}</span> <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PROJECTS / OUR WORK */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="text-sm font-bold tracking-[0.2em] text-[#004080] uppercase mb-2 block">
            {isRTL ? 'معرض الأعمال' : 'Portfolio'}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c1b2a] tracking-tight uppercase">
            {isRTL ? 'أعمال ومشاريع إم بي إيه' : 'Projects / Our Work'}
          </h2>
          <div className="w-16 h-1 bg-[#004080] mx-auto mt-6 mb-6" />
          <p className="text-[#0c1b2a] font-bold text-lg mb-2">
            {isRTL ? 'جودة ملموسة يمكنك رؤيتها.' : 'Quality Work You Can See.'}
          </p>
          <p className="text-gray-500 text-sm">
            {isRTL 
              ? 'مجموعة من صور مشاريعنا المنجزة والجارية في مختلف أنحاء قطر.'
              : 'Showcase of completed and ongoing projects with real photography and clean execution.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectCategories.map((cat, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedProject(cat)}
              className="bg-white rounded-none border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer relative"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={cat.img} 
                  alt={cat.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
              </div>
              <div className="p-4 bg-[#0c1b2a]">
                <h3 className="text-sm font-bold text-white text-center tracking-wide">{cat.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#004080] hover:bg-[#002952] text-white font-bold text-xs uppercase tracking-wider rounded-none shadow-md transition-colors">
            <span>{isRTL ? 'ابدأ مشروعك الآن' : 'Start Your Project'}</span>
          </Link>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setSelectedProject(null)}>
          <div 
            className="bg-white max-w-4xl w-full rounded-none shadow-2xl overflow-hidden flex flex-col md:flex-row relative animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 rtl:right-auto rtl:left-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white md:text-[#0c1b2a] md:bg-gray-100 md:hover:bg-gray-200 transition-colors"
            >
              ✕
            </button>
            
            {/* Image Section */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
              <img src={selectedProject.img} alt={selectedProject.title} className="w-full h-full object-cover" />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#004080] uppercase tracking-wider block mb-1">
                  {isRTL ? 'مشروع معتمد' : 'Verified Project'}
                </span>
                <h3 className="text-2xl font-bold text-[#0c1b2a] mb-4">{selectedProject.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {isRTL
                    ? 'تم تنفيذ المشروع وفق أعلى معايير الجودة والسلامة مع إشراف هندسي دقيق من فريق إم بي إيه للمقاولات في قطر.'
                    : 'Executed according to strict quality and safety standards under close engineering supervision by MBA Contracting in Qatar.'}
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100 flex items-center gap-4">
                <Link 
                  to="/contact" 
                  onClick={() => setSelectedProject(null)}
                  className="flex-1 py-3 px-4 bg-[#004080] hover:bg-[#002952] text-white font-bold text-center text-sm transition-colors"
                >
                  {isRTL ? 'طلب استشارة' : 'Inquire Now'}
                </Link>
                <a 
                  href="tel:+97450722177" 
                  className="py-3 px-4 bg-gray-100 hover:bg-gray-200 text-[#0c1b2a] font-bold text-center text-sm transition-colors"
                >
                  {t.nav.callUsNow}
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
