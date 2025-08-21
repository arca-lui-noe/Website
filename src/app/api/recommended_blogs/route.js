import { NextResponse } from "next/server";

export async function GET(request) {
	try {
		const { searchParams } = new URL(request.url);
		const locale = searchParams.get("locale");
		const blog_id = searchParams.get("blog_id");
		const apiUrl = process.env.NEXT_PUBLIC_API_URL;
		// console.log("Fetching recommended blogs for blog_id:", blog_id);
		// console.log("Locale:", locale);
		const res = await fetch(
			`${apiUrl}/admin/events/get_recommended_blogs.php?locale=${locale}&blog_id=${blog_id}`
		);

		if (!res.ok) {
			throw new Error("Failed to fetch recommended blogs");
		}

		const recommended = await res.json();
		// console.log("Fetched recommended blogs:", recommended);

		return new Response(JSON.stringify(recommended), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.error("API error:", error);
		return new Response(
			JSON.stringify({ error: "Failed to fetch recommended blogs1" }),
			{ status: 500, headers: { "Content-Type": "application/json" } }
		);
	}
}
