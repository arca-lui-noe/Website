export async function POST(req) {
  try {
    const body = await req.json();

    // Send form data to PHP backend using URLSearchParams (simulate form POST)
    const formData = new URLSearchParams();
    formData.append("name", body.name || "");
    formData.append("email", body.email || "");
    formData.append("service_id", body.service_id || "");
    formData.append("selected_date", body.selected_date || "");
    formData.append("message", body.message || "");

    const phpResponse = await fetch(
      "http://localhost/petvet_admin/admin/events/submit_contact.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      }
    );

    const data = await phpResponse.json();

    return new Response(JSON.stringify(data), {
      status: phpResponse.ok ? 200 : 500,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, message: "Server error", error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
