import React from 'react';
import { FileSearch, Compass, HardHat, CheckCircle2, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Process() {
  const { t, isRTL } = useLanguage();

  const icons = [FileSearch, Compass, HardHat, Award, CheckCircle2];

  const steps = t.about.approachSteps.map((stepText, idx) => ({
    num: `0${idx + 1}`,
    title: stepText,
    icon: icons[idx] || CheckCircle2,
  }));

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 text-left rtl:text-right">
      <div className="max-w-5xl mx-auto">
        
        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#002952] text-sm font-semibold mb-4">
          {t.about.approachTitle}
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0c1b2a] tracking-tight">
          {isRTL ? 'منهجية العمل وإدارة المشاريع' : 'Our Project Execution Process'}
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          "{t.about.quote}"
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((st, i) => {
            const Icon = st.icon;
            return (
              <div key={i} className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
                <div className={`absolute top-4 ${isRTL ? 'left-5' : 'right-5'} text-4xl font-black text-gray-100`}>
                  {st.num}
                </div>
                <Icon className="w-8 h-8 text-[#004080] mb-3 relative z-10" />
                <h3 className="text-lg font-bold text-[#0c1b2a] relative z-10">{st.title}</h3>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
