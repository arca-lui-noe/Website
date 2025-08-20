import { generateDynamicMetadata } from "@/lib/metadata";
import BlogInsidePageClient from "./BlogInsidePageClient";

// Server-side metadata generation
export async function generateMetadata({ params }) {
	const { locale, slug } = await params;

	try {
		// For server-side fetching, we need to use the backend API directly
		const apiUrl = process.env.NEXT_PUBLIC_API_URL;
		const response = await fetch(
			`${apiUrl}/admin/events/get_single_blog.php?locale=${locale}&slug=${slug}`,
			{
				// Add cache control for server-side fetching
				cache: "no-store",
			}
		);

		if (!response.ok) {
			// Fallback metadata if blog not found
			return {
				title: `Blog | ${locale === "hu" ? "Noé Bárkája" : "Arca lui Noe"}`,
				description: "Blog not found",
			};
		}

		const blogData = await response.json();
		return await generateDynamicMetadata(blogData, locale);
	} catch (error) {
		console.error("Error generating blog metadata:", error);
		return {
			title: `Blog | ${locale === "hu" ? "Noé Bárkája" : "Arca lui Noe"}`,
			description: "Error loading blog",
		};
	}
}

// Server component that renders the client component
const BlogInsidePage = ({ params }) => {
	return <BlogInsidePageClient params={params} />;
};

export default BlogInsidePage;
