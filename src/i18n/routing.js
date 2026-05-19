import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
	// A list of all locales that are supported
	locales: ["hu", "ro"],

	// Used when no locale matches
	defaultLocale: "ro",
	localePrefix: "as-needed",

	// Locale is determined by the URL prefix alone.
	// Disabling cookie/Accept-Language detection prevents a previously set
	// NEXT_LOCALE cookie from redirecting default-locale (ro) URLs to /hu/…
	localeDetection: false,
});
