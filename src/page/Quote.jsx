import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Quote() {
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-left rtl:text-right">
        
        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#002952] text-sm font-semibold mb-4">
          {isRTL ? 'تقدير التكلفة وعرض السعر' : 'Cost Estimation & Quotation'}
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0c1b2a] tracking-tight">
          {isRTL ? 'طلب عرض سعر لمشروعك' : 'Request a Project Quote'}
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          {isRTL
            ? 'املأ النموذج أدناه للحصول على تفاصيل التكلفة وجدول تنفيذ المشروع من إم بي إيه للمقاولات في قطر.'
            : 'Fill out the form below to receive a personalized cost breakdown and project schedule from MBA Contracting in Qatar.'}
        </p>

        <div className="mt-10 bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-100">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">
                  {t.contact.fullName}
                </label>
                <input
                  type="text"
                  placeholder={isRTL ? 'الاسم الكامل' : 'Your Full Name'}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#004080]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">
                  {t.contact.phone}
                </label>
                <input
                  type="tel"
                  placeholder="+974 XXXXXXXX"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#004080]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">
                  {t.contact.serviceRequired}
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#004080] text-gray-700 bg-white">
                  {t.servicesList.map((srv, idx) => (
                    <option key={idx} value={srv}>{srv}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">
                  {isRTL ? 'المساحة التقريبية (متر مربع)' : 'Approx. Area (Sq. M.)'}
                </label>
                <input
                  type="number"
                  placeholder="e.g. 350"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#004080]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">
                {t.contact.projectDetails}
              </label>
              <textarea
                rows="4"
                placeholder={isRTL ? 'صف متطلبات مشروعك، والجدول الزمني المتوقع...' : 'Describe your project requirements, location, and timeline...'}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#004080]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-white font-semibold text-base bg-gradient-to-r from-[#004080] to-[#001a33] hover:shadow-lg transition-all"
            >
              <span>{t.contact.submit}</span>
              <ArrowRight className="w-5 h-5 rtl:rotate-180" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
