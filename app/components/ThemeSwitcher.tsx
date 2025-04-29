'use client';

import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      if (savedTheme) {
        setIsDark(savedTheme === 'dark');
      } else {
        setIsDark(prefersDark);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const html = document.documentElement;
      if (isDark) {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed hover:cursor-pointer bottom-4 right-4 px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800 shadow-md"
    >
      {isDark ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}
