import PageTitle from "@/components/sections/PageTitle";

import React from "react";
import ServiceContact from "../../../components/sections/services/ServiceContact";
import Contact from "@/components/sections/home/Contact";
import Service from "@/components/sections/home/Service";
import { getTranslations } from "next-intl/server";
import { generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }) {
	const { locale } = await params;
	return await generatePageMetadata("services", locale);
}

const Services = async ({ params: { locale } }) => {
	const t = await getTranslations("Services");

	return (
		<>
			<PageTitle
				customClass="servicedetails-style"
				pageName={t("title")}
				floatImage="/images/breadcrumb/breadcrumb_img_3.png"
				pageText={t("subtitle")}
			/>
			<Service
				showButton={false}
				serviceCallout={t("callout")}
				serviceCalloutTitle={t("callout-title")}
				locale={locale}
			/>
			<Contact />
			{/* <ServiceContact /> */}
		</>
	);
};

export default Services;
