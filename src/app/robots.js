export default function robots() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://arcaluinoe.vercel.app';
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/private/'], // Add paths you want to exclude
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}