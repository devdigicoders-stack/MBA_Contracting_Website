import React from 'react';
import { Compass, FileSearch, HardHat, CheckCircle } from 'lucide-react';

export default function Process() {
  const steps = [
    { num: '01', title: 'Consultation & Estimation', icon: FileSearch, desc: 'Detailed site inspection, blueprint analysis, and accurate cost estimation.' },
    { num: '02', title: 'Planning & Design Sync', icon: Compass, desc: 'Material sourcing, 3D visualization review, and scheduling milestones.' },
    { num: '03', title: 'Contracting Execution', icon: HardHat, desc: 'On-site execution led by master supervisors with strict quality and safety checks.' },
    { num: '04', title: 'Handover & Warranty', icon: CheckCircle, desc: 'Final snagging clearance, client walkthrough, and post-completion warranty.' },
  ];

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        <div className="inline-block px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[#002952] text-sm font-semibold mb-4">
          How We Work
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0c1b2a] tracking-tight">
          Hello from <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004080] to-[#9c7128]">Process</span>
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          A transparent, step-by-step approach ensuring your construction and finishing project runs smoothly.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((st, i) => {
            const Icon = st.icon;
            return (
              <div key={i} className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
                <div className="absolute top-4 right-5 text-4xl font-black text-gray-100">
                  {st.num}
                </div>
                <Icon className="w-8 h-8 text-[#004080] mb-3 relative z-10" />
                <h3 className="text-xl font-bold text-[#0c1b2a] relative z-10">{st.title}</h3>
                <p className="text-gray-500 text-sm mt-2 relative z-10 leading-relaxed">{st.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
