import TestComp from "@/components/layouts/TestComp";
import Banner2 from "@/components/sections/home/Banner2";
import BlogPost from "@/components/sections/home/BlogPost";
import Contact from "@/components/sections/home/Contact";
import Faq from "@/components/sections/home/Faq";
import Service from "@/components/sections/home/Service";
import Subscription from "@/components/sections/home/Subscription";
import {
	generateOrganizationSchema,
	generateLocalBusinessSchema,
} from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";
import Script from "next/script";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }) {
	const { locale } = await params;
	return await generatePageMetadata("home", locale);
}

export default async function HomePage({ params }) {
	const { locale } = await params;
	const t = await getTranslations("Clinic");
	const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://arca-lui-noe.ro";

	const organizationData = {
		name: "Arca lui Noe",
		url: baseUrl,
		logo: `${baseUrl}/images/logo/noe-logo.png`,
		socialLinks: [
			"https://facebook.com/arcaluinoe",
			// Add other social media links here
		],
		telephone: "+40 365 738 824",
		areaServed:
			locale === "hu" ? "Marosvásárhely, Románia" : "Târgu Mureș, România",
		languages: ["Hungarian", "Romanian"],
	};

	// Main clinic Local Business Schema
	const clinicData = {
		name:
			locale === "hu"
				? "Noé Bárkája Állatklinika"
				: "Clinica Veterinară Arca lui Noe",
		url: baseUrl,
		image: `${baseUrl}/images/logo/noe-logo.png`,
		telephone: "+40 365 738 824",
		address: {
			street:
				locale === "hu"
					? "Tudor Vladimirescu utca 143"
					: "Strada Tudor Vladimirescu 143",
			city: locale === "hu" ? "Marosvásárhely" : "Târgu Mureș",
			zip: "540320",
			country: "RO",
		},
		openingHours: [
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
				opens: "09:00",
				closes: "17:00",
			},
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: "Saturday",
				opens: "10:00",
				closes: "13:00",
			},
		],
		priceRange: "$$",
		areaServed:
			locale === "hu"
				? "Marosvásárhely és környéke"
				: "Târgu Mureș și împrejurimi",
		// GPS coordinates - Add these when available
		geo: {
			latitude: 46.55423332989184,
			longitude: 24.56795696842177,
		},
	};

	const organizationSchema = generateOrganizationSchema(organizationData);
	const localBusinessSchema = generateLocalBusinessSchema(clinicData);

	return (
		<>
			<Script
				id="schema-organization"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
			/>
			<Script
				id="schema-local-business"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(localBusinessSchema),
				}}
			/>
			<TestComp locale={locale} />
			{/* <Banner /> */}
			<Banner2 />
			<Service
				noPaddingBottom={true}
				showButton={true}
				limit={5}
				locale={locale}
			/>
			<Faq />
			{/* <Gallery /> */}
			<BlogPost />
			{/* <Pricing /> */}
			{/* <Testimonial /> */}
			{/* <Features /> */}
			<Subscription />
			{/* <Team /> */}
			<Contact />
		</>
	);
}
