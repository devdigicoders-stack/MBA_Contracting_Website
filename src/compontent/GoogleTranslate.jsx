import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const languages = [
  { code: 'en', label: 'English', nativeLabel: 'English', flag: '🇬🇧' },
  { code: 'ar', label: 'Qatar / Arabic', nativeLabel: 'العربية (قطر)', flag: '🇶🇦' },
];

export default function GoogleTranslate() {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const applyLanguage = (code) => {
    try {
      if (code === 'en') {
        document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
      } else {
        document.cookie = `googtrans=/en/${code}; path=/;`;
        document.cookie = `googtrans=/en/${code}; path=/; domain=${window.location.hostname};`;
      }

      const combo = document.querySelector('.goog-te-combo');
      if (combo) {
        combo.value = code;
        combo.dispatchEvent(new Event('change'));
      }
    } catch (err) {
      console.error('Failed to apply language:', err);
    }
  };

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectLanguage = (code) => {
    setLang(code);
    setIsOpen(false);
    applyLanguage(code);
  };

  const current = languages.find((l) => l.code === lang) || languages[0];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Hidden Google Translate container for fallback if script loaded */}
      <div id="google_translate_element" className="hidden" aria-hidden="true" />

      {/* Language Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg border border-gray-200 hover:border-[#003366] bg-white text-gray-800 hover:text-[#0c1b2a] shadow-xs text-xs font-semibold transition-all duration-200 focus:outline-none cursor-pointer"
        aria-expanded={isOpen}
        title="Change Language"
      >
        <span className="text-sm leading-none">{current.flag}</span>
        <span className="font-semibold text-xs tracking-wide">{current.code.toUpperCase()}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Language Selection Dropdown Menu */}
      {isOpen && (
        <div className={`absolute ${lang === 'ar' ? 'left-0' : 'right-0'} mt-2 w-52 rounded-xl bg-white shadow-xl border border-gray-100 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150`}>
          <div className="px-3 py-1.5 border-b border-gray-100 text-[10px] font-bold uppercase tracking-wider text-gray-400 flex items-center justify-between">
            <span>{lang === 'ar' ? 'اختر اللغة' : 'Select Language'}</span>
            <span className="text-[9px] text-[#003366] font-normal">MBA Qatar</span>
          </div>

          <div className="py-1">
            {languages.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => handleSelectLanguage(item.code)}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs transition-colors cursor-pointer ${
                  lang === item.code
                    ? 'bg-amber-50 text-[#003366] font-bold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-lg leading-none">{item.flag}</span>
                  <div className={lang === 'ar' ? 'text-right' : 'text-left'}>
                    <div className="leading-tight font-medium text-gray-900">{item.nativeLabel}</div>
                    <div className="text-[10px] text-gray-400">{item.label}</div>
                  </div>
                </div>
                {lang === item.code && <Check className="w-4 h-4 text-[#003366] shrink-0" />}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Force-hide Google Translate banner via inline style */}
      <style dangerouslySetInnerHTML={{ __html: `
        .goog-te-banner-frame.skiptranslate, 
        .goog-te-banner-frame, 
        iframe.goog-te-banner-frame,
        iframe.skiptranslate,
        .VIpgJd-ZVi9od-aZ2wEe-wOHMyf,
        .VIpgJd-ZVi9od-aZ2wEe-wOHMyf-ti6hGc {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
        }
        body {
          top: 0px !important;
          margin-top: 0px !important;
          position: static !important;
        }
        #goog-gt-tt, .goog-te-balloon-frame {
          display: none !important;
        }
      `}} />
    </div>
  );
}
