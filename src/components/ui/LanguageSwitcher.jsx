'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { locales } from '@/lib/i18n-config';

export default function LanguageSwitcher({ currentLocale, label }) {
  const router = useRouter();
  const pathname = usePathname();
  
  const handleChange = useCallback((e) => {
    const newLocale = e.target.value;
    // Eltávolítjuk a jelenlegi locale-t az útvonalból és hozzáadjuk az újat
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
    
    // Opcionálisan állítsunk be egy cookie-t is a nyelvhez
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`; // 1 év
  }, [pathname, router]);

  // Találja meg az adott nyelv teljes nevét
  const getLanguageName = (code) => {
    const names = {
      'hu': 'Magyar',
      'ro': 'Român',
    };
    return names[code] || code;
  };

  return (
    <div className="language-switcher">
      <label htmlFor="language-select" className="sr-only">
        {label}
      </label>
      <select
        id="language-select"
        onChange={handleChange}
        value={currentLocale}
        className="language-select"
        aria-label={label}
      >
        {locales.map((locale) => (
          <option key={locale} value={locale}>
            {getLanguageName(locale)}
          </option>
        ))}
      </select>
    </div>
  );
}