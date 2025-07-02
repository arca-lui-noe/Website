import { generateOrganizationSchema } from "@/lib/schema";
import Script from "next/script";
import Banner from "@/components/sections/home/Banner";
import Service from "@/components/sections/home/Service";
import Faq from "@/components/sections/home/Faq";
import Gallery from "@/components/sections/home/Gallery";
import Pricing from "@/components/sections/home/Pricing";
import Testimonial from "@/components/sections/home/Testimonial";
import Features from "@/components/sections/home/Features";
import Team from "@/components/sections/home/Team";
import Contact from "@/components/sections/home/Contact";
import Banner2 from "@/components/sections/home/Banner2";
import BlogPost from "@/components/sections/home/BlogPost";
import Subscription from "@/components/sections/home/Subscription";
import HeroVideo from "@/components/sections/home/HeroVideo";

export async function generateMetadata({ params }) {}

export default async function HomePage({ params }) {
	const { locale } = await params;

	const organizationData = {
		name: "Arca lui Noe", // Add this to translation file and replace hardcoded string
		url: process.env.NEXT_PUBLIC_SITE_URL || "https://arcaluinoe.vercel.app",
		logo: `${
			process.env.NEXT_PUBLIC_SITE_URL || "https://arcaluinoe.vercel.app"
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

			{/* <Banner /> */}
			<Banner2 />
			<Service noPaddingBottom={true} showButton={true} limit={5} />
			<Faq />
			{/* <Gallery /> */}
			{/* <HeroVideo /> */}
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
