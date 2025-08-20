import { nunito, lato } from "@/lib/fonts";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import ClientLayout from "@/components/layouts/ClientLayout";
import "/public/css/bootstrap.min.css";
import "/public/css/style.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "/public/css/contact-tabs.css";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { notFound } from "next/navigation";
import { generatePageMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
	return [{ locale: "hu" }, { locale: "ro" }];
}

export async function generateMetadata({ params: { locale } }) {
	// Generate metadata for home page
	return await generatePageMetadata("home", locale);
}

export default async function LocaleLayout({ children, params }) {
	// Ensure that the incoming `locale` is valid
	const { locale } = await params;
	// if (!hasLocale(routing.locales, locale)) {
	// 	notFound();
	// }

	return (
		<html lang={locale}>
			<body className={`${nunito.variable} ${lato.variable}`}>
				<NextIntlClientProvider>
					<ClientLayout locale={locale}>{children}</ClientLayout>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
