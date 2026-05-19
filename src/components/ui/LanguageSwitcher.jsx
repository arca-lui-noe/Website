'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { locales } from '@/lib/i18n-config';
import { routing } from '@/i18n/routing';

const { defaultLocale } = routing;

export default function LanguageSwitcher({ currentLocale, label }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = useCallback((e) => {
    const newLocale = e.target.value;
    const segments = pathname.split('/');

    // segments[1] is a locale prefix only when a non-default locale is active
    const hasLocalePrefix = locales.includes(segments[1]);

    let newSegments;
    if (hasLocalePrefix) {
      if (newLocale === defaultLocale) {
        // Remove the prefix — default locale has no prefix in the URL
        newSegments = ['', ...segments.slice(2)];
      } else {
        // Replace existing prefix
        newSegments = [...segments];
        newSegments[1] = newLocale;
      }
    } else {
      if (newLocale === defaultLocale) {
        // Already on default locale path, nothing to change
        newSegments = [...segments];
      } else {
        // Insert the new locale prefix after the leading ''
        newSegments = ['', newLocale, ...segments.slice(1)];
      }
    }

    router.push(newSegments.join('/') || '/');
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