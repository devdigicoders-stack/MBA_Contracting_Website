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

  const ourWorkProjects = isRTL ? [
    {
      title: 'بناء الفلل الحديثة والإنارة المعمارية',
      category: 'بناء فلل فاخرة',
      desc: 'تنفيذ وبناء فلل سكنية حديثة في الدوحة مع إنارة معمارية مدمجة بالواجهات وتنسيق متكامل للحديقة والمداخل.',
      img: '/projecet2/IMG-20261024-WA0012.jpg.jpeg',
    },
    {
      title: 'تنفيذ الفلل السكنية تسليم مفتاح',
      category: 'مقاولات عامة وتصميم',
      desc: 'بناء كامل للمبنى من الحفر والأساسات وحتى التشطيبات المعمارية النهائية وتسليم المفتاح بأعلى معايير الإتقان.',
      img: '/projecet2/IMG-20261024-WA0015.jpg.jpeg',
    },
    {
      title: 'الواجهات المعمارية والمداخل الفندقية',
      category: 'تشطيب واجهات خارجية',
      desc: 'تصميم وتنفيذ واجهات خارجية حديثة مع مداخل مزدوجة الارتفاع وإضاءات ديكورية تبرز جمالية التصميم الهندسي.',
      img: '/projecet2/IMG-20261024-WA0013.jpg.jpeg',
    },
    {
      title: 'أسوار الفلل الخارجية والبوابات والكسوات',
      category: 'أسوار وبوابات معمارية',
      desc: 'بناء أسوار الحماية والخصوصية المحيطة بالفلل مع تركيب البوابات الآلية والتشطيبات الحجرية المقاومة للعوامل الجوية.',
      img: '/projecet2/IMG-20261024-WA0014.jpg.jpeg',
    },
    {
      title: 'صب الخرسانة المسلحة للأسقف',
      category: 'أعمال خرسانية وإنشائية',
      desc: 'عمليات صب الخرسانة الجاهزة للأسقف باستخدام مضخات الخرسانة الميكانيكية والهزازات لضمان أعلى كثافة وقوة تحمل.',
      img: '/projecet2/file_000000007cc08211818deee6274b32d6.png',
    },
    {
      title: 'تركيب الجبس بورد والأسقف المعلقة',
      category: 'تشطيبات داخلية وجبس',
      desc: 'تنفيذ أسقف جبسية مستوية وديكورية مع معالجة فواصل الألواح والمعجون بدقة متناهية بأيدي فنيي إم بي إيه.',
      img: '/projecet2/file_000000002fac8211b01ec051ac8697e7.png',
    },
    {
      title: 'الجسور الأرضية (الميدات) والأساسات',
      category: 'توسعات ومقاولات إنشائية',
      desc: 'أعمال النجارة والحدادة والصب للميدات الأرضية وربط التوسعات السكنية الجديدة بالمباني القائمة وفق المواصفات.',
      img: '/projecet2/file_0000000058748211b67b203b299e7ac9.png',
    },
    {
      title: 'العزل البيتوميني لجدران الأساسات',
      category: 'عزل وحماية تحت الأرض',
      desc: 'عزل الجدران الخرسانية والبلوك تحت مستوى الأرض بدهانات بيتومينية سميكة لحماية الهيكل الإنشائي من الرطوبة والأملاح.',
      img: '/projecet2/file_00000000b4fc8211b374f8a143f25d25.png',
    },
    {
      title: 'أعمال تسوية ودك التربة للموقع',
      category: 'تجهيز الموقع والأساسات',
      desc: 'استخدام المداحل والآليات الثقيلة لدك طبقات التربة وتسوية المنسوب قبل بدء صب القواعد الخرسانية للفيلا.',
      img: '/projecet2/file_000000001fc88211876925b828412bdf.png',
    },
    {
      title: 'دمك طبقات الردم وتسليح الأعمدة',
      category: 'أعمال مدنية وتحت الأرض',
      desc: 'تدرج وضغط طبقات الدفان حول الرقاب الإنشائية مع مراعاة حماية حديد التسليح واستقامة المحاور الهندسية.',
      img: '/projecet2/file_000000002ef482118c914afbe7b82f3f.png',
    },
    {
      title: 'فرش عوازل الرطوبة والنايلون المقوى',
      category: 'عزل رطوبة وتربة',
      desc: 'تبطين خنادق القواعد والميدات بطبقات البولي إيثيلين المقاومة للتمزق لعزل الخرسانة عن رطوبة التربة المحيطة.',
      img: '/projecet2/file_00000000d72c8211bc69f2e90eb15cdd.png',
    },
    {
      title: 'صب وعزل رقاب الأعمدة الخرسانية',
      category: 'هيكل إنشائي خرساني',
      desc: 'صب رقاب الأعمدة المسلحة بدقة عالية وتطبيق العازل الوقائي الأسود قبل دفن القواعد الأرضية.',
      img: '/projecet2/file_00000000f0b88211b679781e7fdf0051.png',
    },
  ] : [
    {
      title: 'Modern Luxury Villa & Night Illumination',
      category: 'Turnkey Luxury Villa',
      desc: 'Bespoke contemporary residential villa build in Doha featuring integrated exterior LED profile lighting and private landscape compound.',
      img: '/projecet2/IMG-20261024-WA0012.jpg.jpeg',
    },
    {
      title: 'Turnkey Residential Villa Construction',
      category: 'General Contracting',
      desc: 'Comprehensive turnkey villa execution from initial excavation and civil foundations through architectural finishing and key delivery.',
      img: '/projecet2/IMG-20261024-WA0015.jpg.jpeg',
    },
    {
      title: 'Contemporary Facade Architecture & Portals',
      category: 'Exterior Finishing',
      desc: 'Minimalist exterior facade engineering with double-height entrance portals, architectural lighting accents, and custom glazing.',
      img: '/projecet2/IMG-20261024-WA0013.jpg.jpeg',
    },
    {
      title: 'Boundary Walls, Security Gates & Cladding',
      category: 'Perimeter Infrastructure',
      desc: 'Premium privacy boundary walls, automated driveway gate installation, and high-durability weather-resistant stone plaster finishes.',
      img: '/projecet2/IMG-20261024-WA0014.jpg.jpeg',
    },
    {
      title: 'Reinforced Concrete Roof Slab Casting',
      category: 'Structural Concrete',
      desc: 'High-volume ready-mix roof slab pouring utilizing concrete boom pumps with mechanical vibration for structural integrity.',
      img: '/projecet2/file_000000007cc08211818deee6274b32d6.png',
    },
    {
      title: 'Gypsum Board Ceiling & Joint Finishing',
      category: 'Interior Gypsum Works',
      desc: 'Precision suspended gypsum ceiling grid installation, taping, and seamless joint skim plastering by MBA craftsmen.',
      img: '/projecet2/file_000000002fac8211b01ec051ac8697e7.png',
    },
    {
      title: 'Ground Beams & Villa Extension Foundations',
      category: 'Civil & Extensions',
      desc: 'Formwork, structural steel reinforcement, and tie beam casting for structural expansion and villa additions in Qatar.',
      img: '/projecet2/file_0000000058748211b67b203b299e7ac9.png',
    },
    {
      title: 'Bituminous Waterproofing & Substructure Masonry',
      category: 'Waterproofing Protection',
      desc: 'Heavy-duty multi-layer bituminous damp-proof application over below-grade blockwork walls to shield against subterranean salts and water.',
      img: '/projecet2/file_00000000b4fc8211b374f8a143f25d25.png',
    },
    {
      title: 'Heavy Roller Compaction & Site Earthworks',
      category: 'Earthworks & Ground Prep',
      desc: 'Mechanical ground leveling and compaction using heavy vibrating rollers to ensure firm subgrade bearing capacity.',
      img: '/projecet2/file_000000001fc88211876925b828412bdf.png',
    },
    {
      title: 'Sub-Base Soil Compaction & Rebar Framing',
      category: 'Foundation Substructure',
      desc: 'Controlled layer-by-layer backfill compaction and starter rebar alignment for load-bearing reinforced concrete elements.',
      img: '/projecet2/file_000000002ef482118c914afbe7b82f3f.png',
    },
    {
      title: 'Vapor Barrier & Foundation Trench Lining',
      category: 'Moisture Protection',
      desc: 'High-density polyethylene sheet installation across foundation footing trenches to prevent rising capillary moisture.',
      img: '/projecet2/file_00000000d72c8211bc69f2e90eb15cdd.png',
    },
    {
      title: 'Reinforced Column Necks & Isolated Footing Protection',
      category: 'Substructure Civil',
      desc: 'Cast-in-place reinforced concrete neck columns with complete protective bitumen barrier coating before final site backfilling.',
      img: '/projecet2/file_00000000f0b88211b679781e7fdf0051.png',
    },
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

        <div className="relative z-10 w-full max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center mt-6 sm:mt-12">
          
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

          {/* Features Row - All 4 in one line on tablet and desktop */}
          <div className="pt-8 border-t border-gray-200/80 w-full max-w-5xl mx-auto">
            {/* Desktop / Tablet: All 4 in 1 single line */}
            <div className="hidden sm:flex items-center justify-between gap-3 md:gap-5 lg:gap-8 w-full">
              {/* Feature 1 */}
              <div className="flex items-center gap-2.5 lg:gap-3 shrink-0">
                <Building2 className="w-7 h-7 lg:w-8 lg:h-8 text-[#004080] shrink-0" />
                <div className="flex flex-col text-left rtl:text-right">
                  <span className="text-base sm:text-lg lg:text-xl font-black text-[#1f2937] leading-none whitespace-nowrap">{isRTL ? 'تسليم مفتاح' : 'Turnkey'}</span>
                  <span className="text-[9px] lg:text-[10px] font-bold text-gray-500 uppercase tracking-wide mt-1 whitespace-nowrap">{isRTL ? 'حلول متكاملة' : 'Complete Solutions'}</span>
                </div>
              </div>

              {/* Divider */}
              <div className="w-px h-9 lg:h-10 bg-gray-200 shrink-0" />

              {/* Feature 2 */}
              <div className="flex items-center gap-2.5 lg:gap-3 shrink-0">
                <Award className="w-7 h-7 lg:w-8 lg:h-8 text-[#004080] shrink-0" />
                <div className="flex flex-col text-left rtl:text-right">
                  <span className="text-base sm:text-lg lg:text-xl font-black text-[#1f2937] leading-none whitespace-nowrap">{isRTL ? 'الجودة أولاً' : 'Quality First'}</span>
                  <span className="text-[9px] lg:text-[10px] font-bold text-gray-500 uppercase tracking-wide mt-1 whitespace-nowrap">{isRTL ? 'تشطيبات دقيقة' : 'Precision Finishing'}</span>
                </div>
              </div>

              {/* Divider */}
              <div className="w-px h-9 lg:h-10 bg-gray-200 shrink-0" />

              {/* Feature 3 */}
              <div className="flex items-center gap-2.5 lg:gap-3 shrink-0">
                <Clock className="w-7 h-7 lg:w-8 lg:h-8 text-[#004080] shrink-0" />
                <div className="flex flex-col text-left rtl:text-right">
                  <span className="text-base sm:text-lg lg:text-xl font-black text-[#1f2937] leading-none whitespace-nowrap">{isRTL ? 'في الموعد' : 'On-Time'}</span>
                  <span className="text-[9px] lg:text-[10px] font-bold text-gray-500 uppercase tracking-wide mt-1 whitespace-nowrap">{isRTL ? 'تسليم موثوق' : 'Reliable Handover'}</span>
                </div>
              </div>

              {/* Divider */}
              <div className="w-px h-9 lg:h-10 bg-gray-200 shrink-0" />

              {/* Feature 4 */}
              <div className="flex items-center gap-2.5 lg:gap-3 shrink-0">
                <ShieldCheck className="w-7 h-7 lg:w-8 lg:h-8 text-[#004080] shrink-0" />
                <div className="flex flex-col text-left rtl:text-right">
                  <span className="text-base sm:text-lg lg:text-xl font-black text-[#1f2937] leading-none whitespace-nowrap">{isRTL ? 'فريق متخصص' : 'Skilled Team'}</span>
                  <span className="text-[9px] lg:text-[10px] font-bold text-gray-500 uppercase tracking-wide mt-1 whitespace-nowrap">{isRTL ? 'إشراف دقيق' : 'Strict Supervision'}</span>
                </div>
              </div>
            </div>

            {/* Mobile: Clean 2x2 Grid */}
            <div className="grid grid-cols-2 gap-4 sm:hidden max-w-sm mx-auto">
              <div className="flex items-center gap-2">
                <Building2 className="w-6 h-6 text-[#004080] shrink-0" />
                <div className="flex flex-col text-left rtl:text-right">
                  <span className="text-sm font-black text-[#1f2937] leading-none">{isRTL ? 'تسليم مفتاح' : 'Turnkey'}</span>
                  <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wide mt-0.5">{isRTL ? 'حلول متكاملة' : 'Complete Solutions'}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-[#004080] shrink-0" />
                <div className="flex flex-col text-left rtl:text-right">
                  <span className="text-sm font-black text-[#1f2937] leading-none">{isRTL ? 'الجودة أولاً' : 'Quality First'}</span>
                  <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wide mt-0.5">{isRTL ? 'تشطيبات دقيقة' : 'Precision Finishing'}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-6 h-6 text-[#004080] shrink-0" />
                <div className="flex flex-col text-left rtl:text-right">
                  <span className="text-sm font-black text-[#1f2937] leading-none">{isRTL ? 'في الموعد' : 'On-Time'}</span>
                  <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wide mt-0.5">{isRTL ? 'تسليم موثوق' : 'Reliable Handover'}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-[#004080] shrink-0" />
                <div className="flex flex-col text-left rtl:text-right">
                  <span className="text-sm font-black text-[#1f2937] leading-none">{isRTL ? 'فريق متخصص' : 'Skilled Team'}</span>
                  <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wide mt-0.5">{isRTL ? 'إشراف دقيق' : 'Strict Supervision'}</span>
                </div>
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
            {isRTL ? 'معرض الأعمال الواقعية' : 'Portfolio'}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0c1b2a] tracking-tight uppercase">
            {isRTL ? 'أعمال ومشاريع إم بي إيه' : 'Projects / Our Work'}
          </h2>
          <div className="w-16 h-1 bg-[#004080] mx-auto mt-6 mb-6" />
          <p className="text-[#0c1b2a] font-bold text-lg mb-2">
            {isRTL ? 'مشاريع حقيقية وجودة ملموسة يمكنك رؤيتها.' : 'Quality Work You Can See.'}
          </p>
          <p className="text-gray-500 text-sm">
            {isRTL 
              ? 'توثيق حي لمراحل البناء والتنفيذ والتشطيب للفلل والمشاريع السكنية في قطر.'
              : 'Real on-site photography documenting every phase: excavation, civil structures, gypsum works, and turnkey luxury villas.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ourWorkProjects.map((cat, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedProject(cat)}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col"
            >
              <div className="h-56 overflow-hidden relative bg-gray-100">
                <img 
                  src={cat.img} 
                  alt={cat.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex flex-col flex-1 justify-between bg-white">
                <div>
                  <h3 className="text-base font-bold text-[#0c1b2a] group-hover:text-[#004080] transition-colors line-clamp-2 leading-snug mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#f05c26]">
                  <span>{isRTL ? 'عرض تفاصيل المشروع' : 'View Project Details'}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-14 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#004080] hover:bg-[#002952] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all active:scale-95">
            <span>{isRTL ? 'ابدأ مشروعك الآن' : 'Start Your Project'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setSelectedProject(null)}>
          <div 
            className="bg-white max-w-4xl w-full rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative animate-in fade-in zoom-in duration-300 max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 rtl:right-auto rtl:left-4 z-10 w-10 h-10 bg-white/80 hover:bg-white backdrop-blur-md rounded-full flex items-center justify-center text-gray-700 shadow-md transition-colors cursor-pointer"
              aria-label="Close"
            >
              ✕
            </button>
            
            {/* Image Section */}
            <div className="w-full md:w-1/2 h-64 md:h-auto min-h-[300px] bg-black/5 relative overflow-hidden flex items-center justify-center">
              <img src={selectedProject.img} alt={selectedProject.title} className="w-full h-full object-cover" />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#004080] border border-blue-100 uppercase tracking-wider mb-3">
                  {selectedProject.category || (isRTL ? 'مشروع معتمد' : 'Verified Project')}
                </span>
                <h3 className="text-2xl font-extrabold text-[#0c1b2a] mb-4 leading-snug">{selectedProject.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {selectedProject.desc}
                </p>
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 space-y-2 text-xs text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#004080]"></span>
                    <strong className="text-gray-900">{isRTL ? 'الموقع: ' : 'Location: '}</strong>
                    <span>{isRTL ? 'الدوحة، قطر' : 'Doha, Qatar'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    <strong className="text-gray-900">{isRTL ? 'معيار الجودة: ' : 'Standard: '}</strong>
                    <span>{isRTL ? 'إشراف هندسي وضمان جودة معتمد' : 'Strict Engineering Standards & QA'}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 flex items-center gap-4">
                <Link 
                  to="/contact" 
                  onClick={() => setSelectedProject(null)}
                  className="flex-1 py-3 px-4 bg-[#004080] hover:bg-[#002952] text-white font-bold text-center text-sm rounded-lg transition-colors shadow-sm"
                >
                  {isRTL ? 'طلب استشارة لمشروعك' : 'Inquire for Your Project'}
                </Link>
                <a 
                  href="tel:+97450722177" 
                  className="py-3 px-4 bg-gray-100 hover:bg-gray-200 text-[#0c1b2a] font-bold text-center text-sm rounded-lg transition-colors"
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
