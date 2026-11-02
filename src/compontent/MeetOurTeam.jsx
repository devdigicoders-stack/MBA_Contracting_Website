import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function MeetOurTeam() {
  const { isRTL } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Image with shadow/offset effect */}
          <div className="relative w-full max-w-md mx-auto lg:mx-0 lg:max-w-none">
            {/* Background shadow/offset block */}
            <div className={`absolute inset-0 bg-gray-200 rounded-[2rem] transform ${isRTL ? '-translate-x-4 sm:-translate-x-6' : 'translate-x-4 sm:translate-x-6'} translate-y-4 sm:translate-y-6`}></div>
            
            {/* Main Image */}
            <div className="relative h-[450px] sm:h-[550px] rounded-[2rem] overflow-hidden bg-white shadow-xl">
              <img 
                src="/who_we_are_team.jpg" 
                alt="Meet Our Team - MBA Contracting" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col justify-center space-y-6 mt-8 lg:mt-0 text-left rtl:text-right">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1f2937] tracking-tight mb-2">
              {isRTL ? 'فريق عملنا' : 'Meet Our Team'}
            </h2>
            
            <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
              {isRTL
                ? 'يقوم نجاحنا على خبرة وتفاني فريقنا. من المهندسين ذوي الخبرة والفنيين المهرة إلى مديري المشاريع، يلتزم كل فرد في فريقنا بتقديم خدمات استثنائية وعالية الجودة.'
                : 'Our success is built on the expertise and dedication of our team. From experienced engineers and skilled technicians to project managers, every team member is committed to delivering exceptional service.'}
            </p>

            <div className="space-y-5">
              <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                <strong className="text-[#1f2937] font-bold">
                  {isRTL ? 'مهندسونا: ' : 'Our Engineers: '}
                </strong>
                {isRTL
                  ? 'مهندسون ذوو خبرة واسعة في قطاع البناء والتشطيب في قطر، يتابعون كافة مراحل العمل بدقة وإشراف دائم في الموقع.'
                  : 'Experienced engineers with strong technical expertise in Qatar\'s construction and finishing sector, ensuring close site supervision at every stage.'}
              </p>
              
              <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                <strong className="text-[#1f2937] font-bold">
                  {isRTL ? 'فنيونا: ' : 'Our Technicians: '}
                </strong>
                {isRTL
                  ? 'حرفيون مهرة في أعمال اللياسة والبلاط والدهانات والجبس بورد والأعمال الكهربائية والسباكة.'
                  : 'Skilled craftsmen dedicated to quality workmanship across plastering, tiling, painting, gypsum works, electrical, and plumbing.'}
              </p>
              
              <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                <strong className="text-[#1f2937] font-bold">
                  {isRTL ? 'فريق التنسيق والدعم: ' : 'Our Project Support: '}
                </strong>
                {isRTL
                  ? 'تواصل واضح وتنسيق مستمر لضمان تنفيذ المشروع وفق النطاق المحدد ورضا العميل التام.'
                  : 'Clear communication and active coordination to ensure project execution strictly follows the approved scope and exceeds expectations.'}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
