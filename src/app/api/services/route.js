export async function GET() {
  try {
    const backendRes = await fetch("http://localhost/petvet_admin/admin/events/services_list.php");

    if (!backendRes.ok) {
      return new Response(JSON.stringify({ error: "Failed to fetch services" }), {
        status: backendRes.status,
        headers: { "Content-Type": "application/json" },
      });
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
