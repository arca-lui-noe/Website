import { getDictionary } from '@/lib/dictionary';

// SEO metaadatok generálása a nyelv alapján
export async function generateMetadata({ params }) {
  const { locale } = params;
  const dict = await getDictionary(locale);
  
  return {
    // Alapvető SEO meta adatok
    title: {
      default: dict.meta.title,
      template: `%s | ${dict.meta.title}`,
    },
    description: dict.meta.description,
    
    // Nyílt Graf (Open Graph) adatok - közösségi média megosztáshoz
    openGraph: {
      type: 'website',
      locale: locale,
      url: new URL(`/${locale}`, process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com').toString(),
      title: dict.meta.title,
      description: dict.meta.description,
      siteName: dict.meta.siteName,
      images: [
        {
          url: new URL('/og-image.jpg', process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com').toString(),
          width: 1200,
          height: 630,
          alt: dict.meta.ogImageAlt,
        },
      ],
    },
    
    // Twitter kártya
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
      creator: '@yourtwitter',
      images: [
        new URL('/twitter-image.jpg', process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com').toString(),
      ],
    },
    
    // További meta adatok
    alternates: {
      canonical: new URL(`/${locale}`, process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com').toString(),
      languages: {
        'hu': new URL('/hu', process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com').toString(),
        'en': new URL('/en', process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com').toString(),
      },
    },
    
    // Robotok irányelvek
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    // Más meta adatok
    keywords: dict.meta.keywords,
    authors: [{ name: 'Your Name' }],
    category: 'technology',
    
    // JSON-LD strukturált adatok alapbeállítása
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
    },
  };
}

export default function MetadataLayout({ children }) {
  return children;
}