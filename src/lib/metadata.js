import { getTranslations } from "next-intl/server";

export async function generatePageMetadata(page, locale, customData = {}) {
	const metadata = await getTranslations("Metadata");
	const baseUrl =
		process.env.NEXT_PUBLIC_PAGE_URL || "https://arca-lui-noe.ro";

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

// Shared builder for dynamic detail pages (blog posts, services, ...).
// `section` supplies everything that differs between them: the URL segment,
// the title suffix, where the cover image lives and the OpenGraph type.
async function generateDetailMetadata(data, locale, section) {
	const baseUrl =
		process.env.NEXT_PUBLIC_PAGE_URL || "https://arca-lui-noe.ro";
	const apiUrl = process.env.NEXT_PUBLIC_API_URL;

	const siteName = locale === "hu" ? "Noé Bárkája" : "Arca lui Noe";
	const name = data.title || data.name;
	const title = `${name} | ${section.titleSuffix(locale, siteName)}`;
	const description = data.lead || data.short_description;
	const keywords = data.meta_keywords || section.keywords(locale);

	const cover = section.imageFields.map((field) => data[field]).find(Boolean);
	const image = cover
		? `${apiUrl}/uploads/${section.uploadDir}/${cover}`
		: `${baseUrl}/images/seo/${section.defaultImage}-${locale}.jpg`;

	const path = `${section.segment}/${data.slug}`;
	const canonical = `${baseUrl}/${locale}/${path}`;

	return {
		title,
		description,
		keywords,
		openGraph: {
			title,
			description,
			url: canonical,
			siteName,
			images: [
				{
					url: image,
					width: 1200,
					height: 630,
					alt: name,
				},
			],
			locale: locale === "hu" ? "hu_HU" : "ro_RO",
			...section.openGraph(data),
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
				hu: `${baseUrl}/hu/${path}`,
				ro: `${baseUrl}/ro/${path}`,
			},
		},
		robots: {
			index: true,
			follow: true,
		},
	};
}

export async function generateBlogMetadata(blogData, locale) {
	return generateDetailMetadata(blogData, locale, {
		segment: "blog",
		titleSuffix: (locale) =>
			locale === "hu" ? "Noé Bárkája Blog" : "Blog Arca lui Noe",
		keywords: (locale) =>
			`állatorvos, blog, ${
				locale === "hu" ? "Marosvásárhely" : "Târgu Mureș"
			}`,
		imageFields: ["cover_image"],
		uploadDir: "blog",
		defaultImage: "blog-default",
		openGraph: (data) => ({
			type: "article",
			publishedTime: data.created_date,
			modifiedTime: data.updated_date || data.created_date,
			authors: [data.author || "Arca lui Noe"],
			section: data.category_name,
			tags: data.tags ? data.tags.split(",") : [],
		}),
	});
}

export async function generateServiceMetadata(serviceData, locale) {
	return generateDetailMetadata(serviceData, locale, {
		segment: "services",
		titleSuffix: (locale, siteName) =>
			locale === "hu" ? `${siteName} Szolgáltatás` : `Serviciu ${siteName}`,
		keywords: (locale) =>
			`állatorvos, ${
				locale === "hu" ? "állatorvosi szolgáltatások" : "servicii veterinare"
			}, ${locale === "hu" ? "Marosvásárhely" : "Târgu Mureș"}`,
		imageFields: ["cover_image", "pet_image"],
		uploadDir: "service",
		defaultImage: "service-default",
		openGraph: () => ({ type: "website" }),
	});
}
