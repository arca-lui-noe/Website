export async function GET(request) {
	try {
		const { searchParams } = new URL(request.url);
		const slug = searchParams.get("slug");
		const blogId = searchParams.get("blog_id");
		const locale = searchParams.get("locale");
		const apiUrl = process.env.NEXT_PUBLIC_API_URL;

		const query = blogId
			? `locale=${locale}&blog_id=${blogId}`
			: `locale=${locale}&slug=${slug}`;

		const backendRes = await fetch(
			`${apiUrl}/admin/events/get_single_blog.php?${query}`
		);

		if (!backendRes.ok) {
			return new Response(JSON.stringify({ error: "Failed to fetch blog" }), {
				status: backendRes.status,
				headers: { "Content-Type": "application/json" },
			});
		}

		const blog = await backendRes.json();
		// console.log("Fetched blog:", blog);

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
