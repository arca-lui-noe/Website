import Contact from "@/components/sections/contact/Contact";
import PageTitle from "@/components/sections/PageTitle";
import React from "react";
import { generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }) {
	const { locale } = await params;
	return await generatePageMetadata("contact", locale);
}

const ContactPage = () => {
	return (
		<>
			<PageTitle
				customClass="contact-style"
				pageName="Contacts"
				floatImage="/images/breadcrumb/breadcrumb_img_17.webp"
				pageText="Tristique nulla aliquet enim tortor at auctor urna nunc. Massa enim nec dui nunc mattis enim ut tellus"
			/>
			<Contact />
		</>
	);
};

export default ContactPage;
