import { nunito, lato } from "@/lib/fonts";
import { NextIntlClientProvider } from "next-intl";
import ClientLayout from "@/components/layouts/ClientLayout";
import "/public/css/bootstrap.min.css";
// Formerly @import-ed from the top of style.css. Order must match the old
// @import order so the cascade is unchanged; style.css must come last.
import "/public/css/accordion-style.css";
import "/public/css/custom-style.css";
import "/public/css/fontawesome.css";
import "/public/css/header-style.css";
import "/public/css/modal-video.css";
import "/public/css/slider-style.css";
import "/public/css/style.css";
import "/public/css/loading-screen.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "/public/css/contact-tabs.css";
import "/public/css/hero-video.css";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { generatePageMetadata } from "@/lib/metadata";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

export async function generateStaticParams() {
	return [{ locale: "hu" }, { locale: "ro" }];
}

export async function generateMetadata({ params }) {
	const { locale } = await params;
	return {
		robots: {
			index: true,
			follow: true,
		},
		icons: {
			icon: [
				{ url: "/dark.ico", media: "(prefers-color-scheme: light)" },
				{ url: "/light.ico", media: "(prefers-color-scheme: dark)" },
			],
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
				<GoogleTagManager gtmId="GTM-5DSQW9WM" />
				<NextIntlClientProvider>
					<ClientLayout locale={locale}>{children}</ClientLayout>
				</NextIntlClientProvider>
				{/* <Script
					src="//cdn.cookie-script.com/s/9ba8aa13f7a6a38d08930be125cd217c.js"
					strategy="afterInteractive"
					charSet="UTF-8"
				/> */}
				{/* lazyOnload: the chat widget is a large bundle and does significant
				    main-thread work. Loading it after the window load event keeps it
				    out of the Total Blocking Time window. */}
				<Script type="text/javascript" strategy="lazyOnload" id="tawkto">
					{`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
					(function(){
					var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
					s1.async=true;
					s1.src='https://embed.tawk.to/69aaa5591ee2e61c393c1a68/1jj19bq5l';
					s1.charset='UTF-8';
					s1.setAttribute('crossorigin','*');
					s0.parentNode.insertBefore(s1,s0);
					})();`}
				</Script>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
