export async function GET(request) {
	try {
		const { searchParams } = new URL(request.url);
		const slug = searchParams.get("slug");
		const apiUrl = process.env.NEXT_PUBLIC_API_URL;
		const backendRes = await fetch(
			`${apiUrl}/admin/events/get_single_service.php?slug=${slug}`
		);

		if (!backendRes.ok) {
			return new Response(
				JSON.stringify({ error: "Failed to fetch single service" }),
				{
					status: backendRes.status,
					headers: { "Content-Type": "application/json" },
				}
			);
		}

		const services = await backendRes.json();

		return new Response(JSON.stringify(services), {
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
