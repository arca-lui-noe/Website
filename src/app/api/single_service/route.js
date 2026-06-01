export async function GET(request) {
	try {
		const { searchParams } = new URL(request.url);
		const slug = searchParams.get("slug");
		const serviceId = searchParams.get("service_id");
		const locale = searchParams.get("locale") || "ro";
		const apiUrl = process.env.NEXT_PUBLIC_API_URL;

		const query = serviceId
			? `locale=${locale}&service_id=${serviceId}`
			: `locale=${locale}&slug=${slug}`;

		const backendRes = await fetch(
			`${apiUrl}/admin/events/get_single_service.php?${query}`
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
