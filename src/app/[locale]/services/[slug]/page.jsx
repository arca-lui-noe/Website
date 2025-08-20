import { generateDynamicMetadata } from "@/lib/metadata";
import ServiceDetailsClient from "./ServiceDetailsClient";

// Server-side metadata generation
export async function generateMetadata({ params }) {
	const { locale, slug } = await params;

	try {
		// Use the full URL for server-side fetch
		const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
		const response = await fetch(
			`${baseUrl}/admin/events/get_single_service.php?slug=${slug}&locale=${locale}`,
			{
				// Add cache control for server-side fetching
				cache: "no-store",
			}
		);

		if (!response.ok) {
			// Fallback metadata if service not found
			return {
				title: `Service | ${locale === "hu" ? "Noé Bárkája" : "Arca lui Noe"}`,
				description: "Service not found",
			};
		}

		const serviceData = await response.json();
		return await generateDynamicMetadata(serviceData, locale);
	} catch (error) {
		console.error("Error generating service metadata:", error);
		return {
			title: `Service | ${locale === "hu" ? "Noé Bárkája" : "Arca lui Noe"}`,
			description: "Error loading service",
		};
	}
}

// Server component that renders the client component
const ServiceDetails = ({ params }) => {
	return <ServiceDetailsClient params={params} />;
};

export default ServiceDetails;
