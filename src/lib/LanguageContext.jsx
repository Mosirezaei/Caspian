'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, defaultLang } from './i18n';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(defaultLang);
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);

  // Prevent SSR mismatch for localStorage
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('caspian-theme');
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem('caspian-theme', theme);
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [theme, mounted]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, theme, toggleTheme }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
