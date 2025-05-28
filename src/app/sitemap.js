export default async function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com';
  const { locales } = await import('@/lib/i18n-config');
  
  // Define your primary routes 
  const routes = [
    '',
    '/about',
    '/contact',
    '/products',
    '/services',
    '/blog',
    '/privacy',
    '/terms',
    // Add all your static routes here
  ];

  // Generate entries for the sitemap with all locales
  const entries = [];
  
  // Add all static pages with their locales
  for (const route of routes) {
    for (const locale of locales) {
      entries.push({
        url: `${siteUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : 0.8,
      });
    }
  }
  
  // If you have dynamic pages (like blog posts), add them here
  // For example, if you have blog posts:
  // const posts = await getAllBlogPosts();
  // for (const post of posts) {
  //   for (const locale of locales) {
  //     entries.push({
  //       url: `${siteUrl}/${locale}/blog/${post.slug}`,
  //       lastModified: post.updatedAt,
  //       changeFrequency: 'monthly',
  //       priority: 0.6,
  //     });
  //   }
  // }

  return entries;
}
