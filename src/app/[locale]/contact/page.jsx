import Contact from "@/components/sections/contact/Contact";
import PageTitle from "@/components/sections/PageTitle";
import React from "react";
import { generatePageMetadata } from "@/lib/metadata";
import { useTranslations } from "next-intl";

export async function generateMetadata({ params }) {
	const { locale } = await params;
	return await generatePageMetadata("contact", locale);
}

const ContactPage = () => {
		const contact_text = useTranslations("Contact");
	return (
		<>
			<PageTitle
				customClass="contact-style"
				pageName={contact_text("title")}
				floatImage="/images/breadcrumb/breadcrumb_img_17.webp"
				pageText={contact_text("desc")}
			/>
			<Contact />
		</>
	);
};

export default ContactPage;
