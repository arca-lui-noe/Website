import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    let url = "http://localhost/petvet_admin/admin/events/get_all_blogs.php";

    if (category && !isNaN(category)) {
      // Use the category-specific endpoint with category_id param
      url = `http://localhost/petvet_admin/admin/events/get_blogs_by_category.php?category_id=${encodeURIComponent(
        category
      )}`;
    }

    const res = await fetch(url);

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
