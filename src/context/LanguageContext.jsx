import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations/content';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('mba_preferred_lang');
      if (saved === 'ar' || saved === 'en') return saved;
    }
    return 'en';
  });

  const isRTL = lang === 'ar';
  const t = translations[lang] || translations.en;

  const setLang = (newLang) => {
    if (newLang !== 'en' && newLang !== 'ar') return;
    setLangState(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('mba_preferred_lang', newLang);
      document.documentElement.lang = newLang;
      document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
      
      // Update Google Translate cookie as well for backward compatibility
      if (newLang === 'en') {
        document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      } else {
        document.cookie = `googtrans=/en/${newLang}; path=/;`;
      }
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.lang = lang;
      document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    }
  }, [lang, isRTL]);

  return (
    <LanguageContext.Provider value={{ lang, isRTL, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

