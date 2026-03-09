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
import Script from "next/script";

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

				<Script
					src="//cdn.cookie-script.com/s/9ba8aa13f7a6a38d08930be125cd217c.js"
					strategy="afterInteractive"
					charSet="UTF-8"
				/>
				<Script type="text/javascript" strategy="afterInteractive" id="tawkto">
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
			</body>
		</html>
	);
}
