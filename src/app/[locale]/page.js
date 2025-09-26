import TestComp from "@/components/layouts/TestComp";
import Banner2 from "@/components/sections/home/Banner2";
import BlogPost from "@/components/sections/home/BlogPost";
import Contact from "@/components/sections/home/Contact";
import Faq from "@/components/sections/home/Faq";
import Service from "@/components/sections/home/Service";
import Subscription from "@/components/sections/home/Subscription";
import { generateOrganizationSchema } from "@/lib/schema";
import { generatePageMetadata } from "@/lib/metadata";
import Script from "next/script";

export async function generateMetadata({ params }) {
	const { locale } = await params;
	return await generatePageMetadata("home", locale);
}

export default async function HomePage({ params }) {
	const { locale } = await params;

	const organizationData = {
		name: "Arca lui Noe", // Add this to translation file and replace hardcoded string
		url: process.env.NEXT_PUBLIC_SITE_URL || "https://arca-lui-noe.ro",
		logo: `${
			process.env.NEXT_PUBLIC_SITE_URL || "https://arca-lui-noe.ro"
		}/logo.png`,
		socialLinks: [
			"https://facebook.com/yourcompany",
			"https://twitter.com/yourcompany",
			"https://linkedin.com/company/yourcompany",
		],
		telephone: "+36-1-123-4567",
		areaServed: "Hungary, Romania",
		languages: ["Hungarian", "Romanian"],
	};

	const organizationSchema = generateOrganizationSchema(organizationData);

	return (
		<>
			<Script
				id="schema-organization"
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
