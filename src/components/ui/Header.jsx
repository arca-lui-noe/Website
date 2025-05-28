'use client';

import { useThemeStore, useLanguageStore } from '@/lib/client-store';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function Header({ locale, dict }) {
  const { theme, toggleTheme } = useThemeStore();
  const { setLanguage } = useLanguageStore();
  const router = useRouter();
  const pathname = usePathname();
  
  // Handle language change
  const handleLanguageChange = (newLocale) => {
    setLanguage(newLocale);
    
    // Get current path without locale prefix
    let currentPath = pathname;
    if (pathname.startsWith(`/${locale}/`)) {
      currentPath = pathname.substring(locale.length + 1);
    } else if (pathname === `/${locale}`) {
      currentPath = '/';
    }
    
    // Navigate to the same page but with different locale
    router.push(`/${newLocale}${currentPath === '/' ? '' : currentPath}`);
  };
  
  return (
    <header className={`py-4 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="logo">
          <Link href={`/${locale}`} className="text-xl font-bold">
            {dict.meta.siteName}
          </Link>
        </div>
        
        <nav>
          <ul className="flex space-x-6">
            {/* Navigation items based on the actual dictionary structure */}
            <li>
              <Link href={`/${locale}`} className="hover:underline">
                {dict.navigation.home}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/about`} className="hover:underline">
                {dict.navigation.about}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/contact`} className="hover:underline">
                {dict.navigation.contact}
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="controls flex items-center space-x-4">
          <button 
            onClick={toggleTheme} 
            aria-label="Toggle theme"
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          
          <div className="language-selector">
            <label htmlFor="language-select" className="sr-only">{dict.languageSwitcher.label}</label>
            <select 
              id="language-select"
              value={locale} 
              onChange={(e) => handleLanguageChange(e.target.value)}
              className={`px-2 py-1 rounded ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} border`}
            >
              <option value="hu">Magyar</option>
              <option value="ro">Română</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}