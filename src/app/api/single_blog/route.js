export async function GET(request) {
	try {
		const { searchParams } = new URL(request.url);
		const slug = searchParams.get("slug");
		const locale = searchParams.get("locale");
		const apiUrl = process.env.NEXT_PUBLIC_API_URL;
		const backendRes = await fetch(
			`${apiUrl}/admin/events/get_single_blog.php?locale=${locale}&slug=${slug}`
		);

		if (!backendRes.ok) {
			return new Response(JSON.stringify({ error: "Failed to fetch blog" }), {
				status: backendRes.status,
				headers: { "Content-Type": "application/json" },
			});
		}

		const blog = await backendRes.json();
		console.log("Fetched blog:", blog);

		return new Response(JSON.stringify(blog), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.error("Fetch error:", error);
		return new Response(JSON.stringify({ error: "Internal Server Error" }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
}
