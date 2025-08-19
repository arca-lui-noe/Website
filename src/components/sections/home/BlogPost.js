"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

const BlogPost = () => {
	const locale = useLocale();
	const [recommended, setRecommended] = useState([]);
	const [loading, setLoading] = useState(true);
	const apiUrl = process.env.NEXT_PUBLIC_API_URL;
	const home_text = useTranslations("Home");

	useEffect(() => {
		const fetchRecommended = async () => {
			setLoading(true);
			try {
				const res = await fetch(`/api/recommended_blogs?locale=${locale}`);
				if (res.ok) {
					const data = await res.json();
					setRecommended(Array.isArray(data) ? data : []);
				} else {
					setRecommended([]);
				}
			} catch (e) {
				console.error("Failed to fetch recommended blogs", e);
				setRecommended([]);
			} finally {
				setLoading(false);
			}
		};
		fetchRecommended();
	}, [locale]);

	// Prepare display list: up to 3 items. Fill with other blogs if recommended < 3
	let displayBlogs = recommended.slice(0, 3);

	const isRecent = (created_date) => {
		if (!created_date) return false;
		const parts = created_date.split("-");
		if (parts.length !== 3) return false;
		const d = new Date(
			Number(parts[0]),
			Number(parts[1]) - 1,
			Number(parts[2])
		);
		const oneWeekMs = 7 * 24 * 60 * 60 * 1000;
		return Date.now() - d.getTime() <= oneWeekMs;
	};

	return (
		<>
			<section className="blog_section section_space_md">
				<div className="container">
					<div className="section_title text-center">
						<h2 className="title_text mb-0">
							<span className="sub_title">{home_text("blog-subtitle")}</span>{" "}
							{home_text("blog-title")}
						</h2>
					</div>

					<div className="row justify-content-center">
						{loading && <p>Loading...</p>}
						{!loading && displayBlogs.length === 0 && <p>No posts found.</p>}
						{!loading &&
							displayBlogs.map((blog, idx) => (
								<div
									className="col col-lg-4 col-md-6 col-sm-6"
									key={blog.id || idx}>
									<div className="blog_item">
										<ul className="badge_group unorder_list_right">
											{blog.category_name && (
												<li>
													<Link className="badge badge_sale" href="#!">
														{blog.category_name}
													</Link>
												</li>
											)}
											<li>
												{isRecent(blog.created_date) && (
													<Link className="badge badge_sale" href="#!">
														{locale === "ro" ? "Nou" : "Új"}
													</Link>
												)}
											</li>
										</ul>
										<Link
											className="item_image"
											href={`/blog/${blog.slug || "post"}`}>
											<Image
												width={420}
												height={300}
												style={{
													objectFit: "cover",
													width: "100%",
													height: "300px",
												}}
												src={
													blog.cover_image
														? `${apiUrl}/uploads/blog/${blog.cover_image}`
														: "/images/blog/blog_image_1.jpg"
												}
												alt={blog.title || "Blog post"}
											/>
										</Link>
										<div className="item_content">
											<ul className="post_meta unorder_list">
												<li>
													<Link href="#!">
														<i className="fas fa-user"></i> by{" "}
														{blog.author || "Unknown"}
													</Link>
												</li>
												<li>
													<Link href="#!">
														<i className="fas fa-calendar-day"></i>{" "}
														{blog.created_date || ""}
													</Link>
												</li>
											</ul>
											<h3 className="item_title">
												<Link href={`/blog/${blog.slug || "post"}`}>
													{blog.title || "Untitled Post"}
												</Link>
											</h3>
											<p className="mb-0">{blog.lead || "..."}</p>
										</div>
									</div>
								</div>
							))}
					</div>
				</div>
			</section>
		</>
	);
};
export default BlogPost;
