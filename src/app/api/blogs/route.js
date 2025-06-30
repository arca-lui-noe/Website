import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("http://localhost/petvet_admin/admin/events/get_all_blogs.php");

    if (!res.ok) {
      throw new Error("Failed to fetch blogs");
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}
