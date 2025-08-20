export async function GET(request) {
	try {
		const { searchParams } = new URL(request.url);
		const id = searchParams.get("id");
		const apiUrl = process.env.NEXT_PUBLIC_API_URL;

		const backendRes = await fetch(
			`${apiUrl}/admin/events/get_service_gallery.php?id=${id}`
		);

		if (!backendRes.ok) {
			// return new Response(
			// 	JSON.stringify({ error: "Failed to fetch single service gallery" }),
			// 	{
			// 		status: backendRes.status,
			// 		headers: { "Content-Type": "application/json" },
			// 	}
			// );
			return new Response(JSON.stringify([]), {
				status: 200,
				headers: { "Content-Type": "application/json" },
			});
		}

		const gallery = await backendRes.json();

		return new Response(JSON.stringify(gallery), {
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
