import { NextResponse } from 'next/server';
import { defaultLocale, isValidLocale, locales } from './lib/i18n-config';

// Apply to all routes except API routes and static files
export const config = {
  matcher: [
    /*
     * Match all routes except:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /static (if you have such folder)
     * 4. Static files like favicon.ico, robots.txt, etc.
     */
    
    '/((?!api|_next|static|.*\\..*).+)',
    // Also match the root path
    '/'
  ],
};

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  
  // Check if the URL already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  

  // If URL already has a valid locale, proceed normally
  if (pathnameHasLocale) return NextResponse.next();

  // Check for locale in cookies
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  let locale = defaultLocale;
  
  if (cookieLocale && isValidLocale(cookieLocale)) {
    locale = cookieLocale;
  } else {
    // Check browser preferred language
    const acceptLanguage = request.headers.get('accept-language');
    if (acceptLanguage) {
      const browserLocales = acceptLanguage.split(',')
        .map(lang => lang.split(';')[0].trim().substring(0, 2));
      
      // Check if browser's preferred language is among our supported languages
      for (const browserLocale of browserLocales) {
        if (isValidLocale(browserLocale)) {
          locale = browserLocale;
          break;
        }
      }
    }
  }

  // Redirect to the appropriate localized route
  const url = new URL(request.url);
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  
  // Cache and SEO-friendly redirect
  const response = NextResponse.redirect(url);
  
  // Set a cache control header for CDNs
  response.headers.set('Cache-Control', 'public, max-age=3600'); // 1 hour
  
  return response;
}