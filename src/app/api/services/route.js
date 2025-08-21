export async function GET(request) {
	try {
		const { searchParams } = new URL(request.url);
		const locale = searchParams.get("locale");
		const apiUrl = process.env.NEXT_PUBLIC_API_URL;
		const backendRes = await fetch(
			`${apiUrl}/admin/events/services_list.php?locale=${locale}`
		);

		if (!backendRes.ok) {
			return new Response(
				JSON.stringify({ error: "Failed to fetch services" }),
				{
					status: backendRes.status,
					headers: { "Content-Type": "application/json" },
				}
			);
		}

		const services = await backendRes.json();
		// console.log("Fetched services:", services);

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
