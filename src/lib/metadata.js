import { getTranslations } from "next-intl/server";

export async function generatePageMetadata(page, locale, customData = {}) {
	const metadata = await getTranslations("Metadata");
	const baseUrl =
		process.env.NEXT_PUBLIC_PAGE_URL || "https://arcaluinoe.vercel.app";

	// Get page-specific metadata or fallback to home
	const pageMetadata = metadata.raw(page) || metadata.raw("home");

	// Merge with custom data (useful for dynamic pages)
	const title = customData.title || pageMetadata.title;
	const description = customData.description || pageMetadata.description;
	const keywords = customData.keywords || pageMetadata.keywords;
	const image =
		customData.image || `${baseUrl}/images/seo/default-${locale}.jpg`;

	// Generate canonical URL
	const canonical =
		customData.canonical ||
		`${baseUrl}/${locale}${page === "home" ? "" : `/${page}`}`;

	return {
		title,
		description,
		keywords,
		openGraph: {
			title,
			description,
			url: canonical,
			siteName: locale === "hu" ? "Noé Bárkája" : "Arca lui Noe",
			images: [
				{
					url: image,
					width: 1200,
					height: 630,
					alt: title,
				},
			],
			locale: locale === "hu" ? "hu_HU" : "ro_RO",
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [image],
		},
		alternates: {
			canonical,
			languages: {
				hu: `${baseUrl}/hu${page === "home" ? "" : `/${page}`}`,
				ro: `${baseUrl}/ro${page === "home" ? "" : `/${page}`}`,
			},
		},
	};
}

export async function generateDynamicMetadata(blogData, locale) {
	const baseUrl =
		process.env.NEXT_PUBLIC_PAGE_URL || "https://arcaluinoe.vercel.app";
	const apiUrl = process.env.NEXT_PUBLIC_API_URL;

	const title = `${blogData.title || blogData.name} | ${
		locale === "hu" ? "Noé Bárkája Blog" : "Blog Arca lui Noe"
	}`;
	const description = blogData.lead || blogData.short_description;
	const keywords =
		blogData.meta_keywords ||
		`állatorvos, blog, ${locale === "hu" ? "Marosvásárhely" : "Târgu Mureș"}`;
	const image = blogData.cover_image
		? `${apiUrl}/uploads/blog/${blogData.cover_image}`
		: `${baseUrl}/images/seo/blog-default-${locale}.jpg`;
	const canonical = `${baseUrl}/${locale}/blog/${blogData.slug}`;

	return {
		title,
		description,
		keywords,
		openGraph: {
			title,
			description,
			url: canonical,
			siteName: locale === "hu" ? "Noé Bárkája" : "Arca lui Noe",
			images: [
				{
					url: image,
					width: 1200,
					height: 630,
					alt: blogData.title,
				},
			],
			locale: locale === "hu" ? "hu_HU" : "ro_RO",
			type: "article",
			publishedTime: blogData.created_date,
			modifiedTime: blogData.updated_date || blogData.created_date,
			authors: [blogData.author || "Arca lui Noe"],
			section: blogData.category_name,
			tags: blogData.tags ? blogData.tags.split(",") : [],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [image],
		},
		alternates: {
			canonical,
			languages: {
				hu: `${baseUrl}/hu/blog/${blogData.slug}`,
				ro: `${baseUrl}/ro/blog/${blogData.slug}`,
			},
		},
		robots: {
			index: true,
			follow: true,
		},
	};
}
