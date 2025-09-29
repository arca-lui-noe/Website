import { nunito, lato } from "@/lib/fonts";
import { NextIntlClientProvider } from "next-intl";
import ClientLayout from "@/components/layouts/ClientLayout";
import "/public/css/bootstrap.min.css";
import "/public/css/style.css";
import "/public/css/loading-screen.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "/public/css/contact-tabs.css";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { generatePageMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
	return [{ locale: "hu" }, { locale: "ro" }];
}

export async function generateMetadata({ params: { locale } }) {
  return {
    robots: {
      index: false,
      follow: false,
    },
  };
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
