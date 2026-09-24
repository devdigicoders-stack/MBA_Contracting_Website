import React, { useEffect, useState, useRef } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';

const languages = [
  { code: 'en', label: 'English', nativeLabel: 'English', flag: '🇬🇧' },
  { code: 'ar', label: 'Qatar / Arabic', nativeLabel: 'العربية (قطر)', flag: '🇶🇦' },
];

export default function GoogleTranslate() {
  const [selectedLang, setSelectedLang] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('mba_preferred_lang') || 'en';
    }
    return 'en';
  });
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
      } else {
        setTimeout(() => {
          const retryCombo = document.querySelector('.goog-te-combo');
          if (retryCombo) {
            retryCombo.value = code;
            retryCombo.dispatchEvent(new Event('change'));
          }
        }, 500);
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

  // Initialize Google Translate script
  useEffect(() => {
    const saved = localStorage.getItem('mba_preferred_lang') || 'en';

    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,ar',
            autoDisplay: false,
          },
          'google_translate_element'
        );

        if (saved && saved !== 'en') {
          setTimeout(() => applyLanguage(saved), 600);
        }
      }
    };

    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.type = 'text/javascript';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    } else if (window.google && window.google.translate && saved !== 'en') {
      setTimeout(() => applyLanguage(saved), 400);
    }
  }, []);

  const handleSelectLanguage = (code) => {
    setSelectedLang(code);
    localStorage.setItem('mba_preferred_lang', code);
    setIsOpen(false);
    applyLanguage(code);
  };

  const current = languages.find((l) => l.code === selectedLang) || languages[0];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Hidden Google Translate container (controlled via custom UI) */}
      <div id="google_translate_element" className="hidden" aria-hidden="true" />

      {/* Premium Language Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg border border-gray-200 hover:border-[#c59b4b] bg-white text-gray-800 hover:text-[#0c1b2a] shadow-xs text-xs font-semibold transition-all duration-200 focus:outline-none cursor-pointer"
        aria-expanded={isOpen}
        title="Change Language"
      >
        <Globe className="w-3.5 h-3.5 text-[#c59b4b] shrink-0" />
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
        <div className="absolute right-0 mt-2 w-52 rounded-xl bg-white shadow-xl border border-gray-100 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3 py-1.5 border-b border-gray-100 text-[10px] font-bold uppercase tracking-wider text-gray-400 flex items-center justify-between">
            <span>Select Language</span>
            <span className="text-[9px] text-[#c59b4b] font-normal">Google Translate</span>
          </div>

          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => handleSelectLanguage(lang.code)}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs transition-colors cursor-pointer ${
                  selectedLang === lang.code
                    ? 'bg-amber-50 text-[#c59b4b] font-bold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-lg leading-none">{lang.flag}</span>
                  <div className="text-left">
                    <div className="leading-tight font-medium text-gray-900">{lang.nativeLabel}</div>
                    <div className="text-[10px] text-gray-400">{lang.label}</div>
                  </div>
                </div>
                {selectedLang === lang.code && <Check className="w-4 h-4 text-[#c59b4b] shrink-0" />}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Force-hide Google Translate banner via inline style to ensure maximum priority */}
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
