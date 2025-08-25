import VideoSection from "@/components/layouts/VideoSection";
import AboutUs from "@/components/sections/about/AboutUs";
import Consulting from "@/components/sections/about/Consulting";
import Faq from "@/components/sections/home/Faq";
import PageTitle from "@/components/sections/PageTitle";
import { generatePageMetadata } from "@/lib/metadata";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }) {
	const { locale } = await params;
	return await generatePageMetadata("about", locale);
}

const About = async ({ params: { locale } }) => {
	const about_text = await getTranslations("About");
	return (
		<>
			<PageTitle
				customClass="about-style"
				pageName={about_text("title")}
				floatImage="/images/breadcrumb/breadcrumb_img_1.png"
				pageText={about_text("lead")}
			/>
			<AboutUs
				years={about_text("years")}
				callout={about_text("callout")}
				title={about_text("about-title")}
				desc={about_text("about-desc")}
				point1={about_text("about-point1")}
				point2={about_text("about-point2")}
				point3={about_text("about-point3")}
				point4={about_text("about-point4")}
				locale={locale}
			/>
			<Consulting
				callout={about_text("consult-callout")}
				title={about_text("consult-title")}
				lead={about_text("consult-lead")}
				title1={about_text("consult-title1")}
				desc1={about_text("consult-desc1")}
				title2={about_text("consult-title2")}
				desc2={about_text("consult-desc2")}
				title3={about_text("consult-title3")}
				desc3={about_text("consult-desc3")}
				title4={about_text("consult-title4")}
				desc4={about_text("consult-desc4")}
			/>
			<Faq />
			<VideoSection />
		</>
	);
};

export default About;
