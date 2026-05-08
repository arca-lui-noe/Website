async function getAllBlogPosts() {
	const apiUrl = process.env.NEXT_PUBLIC_API_URL;
	const { locales } = await import("@/lib/i18n-config");
	const allPosts = [];

	try {
		// Fetch blogs for each locale
		for (const locale of locales) {
			const response = await fetch(
				`${apiUrl}/admin/events/get_all_blogs.php?locale=${locale}`,
				{ cache: "no-store" },
			);

			if (response.ok) {
				const blogs = await response.json();
				// Add blogs with locale information
				if (Array.isArray(blogs)) {
					blogs.forEach((blog) => {
						allPosts.push({
							slug: blog.slug,
							locale: locale,
							updatedAt: blog.updated_date || blog.created_date || new Date(),
						});
					});
				}
			}
		}
	} catch (error) {
		console.error("Error fetching blog posts for sitemap:", error);
	}

	return allPosts;
}

export default async function sitemap() {
	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://arca-lui-noe.ro";
	const { locales } = await import("@/lib/i18n-config");

	// Define your primary routes
	const routes = [
		"",
		"/about",
		"/history",
		"/contact",
		// "/products",
		"/services",
		"/blog",
		// "/privacy",
		// "/terms",
		// Add all your static routes here
	];

	// Generate entries for the sitemap with all locales
	const entries = [];

	// Add all static pages with their locales
	for (const route of routes) {
		for (const locale of locales) {
			entries.push({
				url: locale === "hu" ? `${siteUrl}/hu${route}` : `${siteUrl}${route}`,
				lastModified: new Date(),
				changeFrequency: route === "" ? "daily" : "weekly",
				priority: route === "" ? 1.0 : 0.8,
			});
		}
	}

	// Fetch and add blog posts
	const posts = await getAllBlogPosts();
	for (const post of posts) {
		entries.push({
			url:
				post.locale === "hu"
					? `${siteUrl}/hu/blog/${post.slug}`
					: `${siteUrl}/blog/${post.slug}`,
			lastModified: new Date(post.updatedAt),
			changeFrequency: "monthly",
			priority: 0.6,
		});
	}

	return entries;
}
