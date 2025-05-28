import { nunito, lato } from "@/lib/fonts";
import { getDictionary } from "@/lib/dictionary";
import ClientLayout from "@/components/layouts/ClientLayout";
import '/public/css/bootstrap.min.css';
import '/public/css/style.css';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
export async function generateStaticParams() {
  return [{ locale: "hu" }, { locale: "ro" }];
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    robots: dict.meta.robots || "index, follow",
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
    },
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <html lang={locale}>
      <body className={`${nunito.variable} ${lato.variable}`}>
        <ClientLayout footerStyle={null} locale={locale} dict={dict}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}