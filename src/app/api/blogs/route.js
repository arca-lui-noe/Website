import { NextResponse } from "next/server";

export async function GET(request) {
	try {
		const apiUrl = process.env.NEXT_PUBLIC_API_URL;
		const { searchParams } = new URL(request.url);
		const locale = searchParams.get("locale");

		let url = `${apiUrl}/admin/events/get_all_blogs.php?locale=${locale}`;
		const res = await fetch(url);

		if (!res.ok) {
			throw new Error("Failed to fetch blogs");
		}

		const data = await res.json();
		return NextResponse.json(data);
	} catch (error) {
		console.error("API error:", error);
		return NextResponse.json(
			{ error: "Failed to fetch blogs" },
			{ status: 500 }
		);
	}
	d;
}
