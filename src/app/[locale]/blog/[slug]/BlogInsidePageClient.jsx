"use client";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import React from "react";
import { useLocale } from "next-intl";
import { useEffect, useState, useRef } from "react";

const BlogInsidePageClient = ({ params }) => {
	// FIX: extract slug directly from params
	const { slug } = React.use(params);
	const locale = useLocale();
	const [blog, setBlog] = useState(null);
	const [recommended, setRecommended] = useState(null);
	const apiUrl = process.env.NEXT_PUBLIC_API_URL;
	const contentRef = useRef(null);
	// REMOVED: unused pageContent state
	// const [pageContent, setPageContent] = useState(null);
	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				const res = await fetch(
					`/api/single_blog?slug=${slug}&locale=${locale}`
				);
				const data = await res.json();
				setBlog(data);
				// console.log("Fetched blog:", data);

				if (data && data.blog_id) {
					try {
						const recRes = await fetch(
							`/api/recommended_blogs?locale=${locale}&blog_id=${data.blog_id}`
						);
						const recData = await recRes.json();
						setRecommended(recData);
						// console.log("Fetched recommended blogs:", recData);
					} catch (err) {
						console.error("Failed to load recommended blogs", err);
					}
				}
			} catch (err) {
				console.error("Failed to load blog", err);
			}
		};

		if (slug) {
			fetchBlogs();
		}
	}, [slug, locale]);

	// UPDATED: depend directly on blog?.content
	useEffect(() => {
		if (contentRef.current && blog?.content) {
			contentRef.current.innerHTML = blog.content;

			const listItems = contentRef.current.querySelectorAll("li");
			listItems.forEach((li) => {
				if (!li.querySelector(".fas, .fa")) {
					const icon = document.createElement("i");
					icon.className = "fas fa-check-circle";
					icon.style.color = "#cca162";
					icon.style.marginRight = "0.5rem";
					li.insertBefore(icon, li.firstChild);
				}
			});
		}
	}, [blog?.content]);

	if (!blog) {
		return <div>Loading...</div>;
	}
	return (
		<>
			<section className="details_section blog_details section_space_lg pb-0">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col col-lg-9">
							<div className="details_image">
								<Image
									style={{ objectFit: "cover", height: "500px" }}
									width={1020}
									height={500}
									src={`${apiUrl}/uploads/blog/${blog.cover_image}`}
									alt="Pet Care Blog"
								/>
							</div>
							<div className="details_content">
								<h1 className="item_title">{blog.title || "Loading..."}</h1>
								<ul className="post_meta unorder_list">
									<li>
										<Link href="#!">
											<i className="fas fa-user"></i>{" "}
											{locale === "ro" ? "de" : "írta"}{" "}
											{blog.author ||
												(locale === "ro" ? "Anonim" : "Ismeretlen")}
										</Link>
									</li>
									<li>
										<Link href="#!">
											<i className="fas fa-calendar-day"></i>{" "}
											{blog.created_date || "Loading..."}
										</Link>
									</li>
								</ul>
								<div ref={contentRef}></div>
								<div className="row mb-3">
									<div className="col col-md-6">
										<div className="details_image m-0">
											{blog.image1 && (
												<Image
													style={{ objectFit: "cover", height: "317px" }}
													width={500}
													height={317}
													src={`${apiUrl}/uploads/blog/${blog.image1}`}
													alt="Pet Care Blog"
												/>
											)}
										</div>
									</div>
									<div className="col col-md-6">
										<div className="details_image m-0">
											{blog.image2 && (
												<Image
													style={{ objectFit: "cover", height: "317px" }}
													width={500}
													height={317}
													src={`${apiUrl}/uploads/blog/${blog.image2}`}
													alt="Pet Care Blog"
												/>
											)}
										</div>
									</div>
								</div>
								<hr />
								<div className="tag_share_links">
									<div className="share_wrap">
										<h3 className="tag_share_title">
											{locale === "ro" ? "Distribuie pe" : "Megosztás itt"}
										</h3>
										<ul className="social_links unorder_list">
											<li>
												<Link href="#!">
													<i className="fab fa-facebook-f"></i>
												</Link>
											</li>
											<li>
												<Link href="#!">
													<i className="fab fa-instagram"></i>
												</Link>
											</li>
											<li>
												<Link href="#!">
													<i className="fab fa-twitter"></i>
												</Link>
											</li>
											<li>
												<Link href="#!">
													<i className="fab fa-whatsapp"></i>
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						<div className="col col-lg-3">
							<aside className="sidebar_section">
								<div className="sb_widget">
									<h3 className="sb_widget_title">
										{locale === "ro"
											? "Bloguri Recomandate"
											: "Ajánlott Blogok"}
									</h3>
									<ul className="small_post_wrap unorder_list_block">
										{recommended &&
											recommended.map((item, index) => (
												<li key={index}>
													<div className="small_blog_item">
														<Link className="item_image" href="blog/asd">
															<Image
																width={80}
																height={80}
																src={`${apiUrl}/uploads/blog/${item.cover_image}`}
																alt="Pet Care Services"
															/>
														</Link>
														<div className="item_content">
															<h3 className="item_title">
																<Link href={`${item.slug}`}>
																	{item.title || "Loading..."}
																</Link>
															</h3>
															<Link className="item_admin" href="#!">
																<i className="fas fa-user"></i> by{" "}
																{item.author || "Unknown"}
															</Link>
														</div>
													</div>
												</li>
											))}
									</ul>
								</div>
							</aside>
						</div>
					</div>
				</div>
			</section>

			<section
				className="blog_section section_space_lg bg_gray"
				style={{ backgroundImage: "url(images/overlay/shapes_overlay_7.svg)" }}>
				<div className="container">
					<div className="section_title text-center">
						<h2 className="title_text mb-0">
							{locale === "ro" ? "Alte Bloguri" : "Ajánlott Blogok"}
						</h2>
					</div>

					<div className="row justify-content-center">
						{recommended &&
							recommended.map((item, index) => (
								<div className="col col-lg-4" key={index}>
									<div className="blog_item">
										<ul className="badge_group unorder_list_right">
											<li>
												{(() => {
													if (!item?.created_date) return null;
													const parts = item.created_date.split("-");
													if (parts.length !== 3) return null;
													const created = new Date(
														Number(parts[0]),
														Number(parts[1]) - 1,
														Number(parts[2])
													);
													const oneWeekMs = 7 * 24 * 60 * 60 * 1000;
													const isRecent =
														Date.now() - created.getTime() <= oneWeekMs;
													if (isRecent) {
														return (
															<Link className="badge badge_sale" href="#!">
																{locale === "ro" ? "Nou" : "Új"}
															</Link>
														);
													}
													return null;
												})()}
											</li>
										</ul>
										<Link className="item_image" href={`/blog/${item.slug}`}>
											<Image
												style={{ objectFit: "cover", height: "300px" }}
												width={420}
												height={300}
												src={`${apiUrl}/uploads/blog/${item.cover_image}`}
												alt="Pet Care Image"
											/>
										</Link>
										<div className="item_content">
											<ul className="post_meta unorder_list">
												<li>
													<Link href="#!">
														<i className="fas fa-user"></i>{" "}
														{item.author ||
															(locale === "ro" ? "Anonim" : "Ismeretlen")}
													</Link>
												</li>
												<li>
													<Link href="#!">
														<i className="fas fa-calendar-day"></i>{" "}
														{item.created_date || "Unknown Date"}
													</Link>
												</li>
											</ul>
											<h3 className="item_title">
												<Link href={`/blog/${item.slug}`}>
													{item.title || "Loading..."}
												</Link>
											</h3>
											<p className="mb-0">
												{item.lead || "No lead available."}
											</p>
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

export default BlogInsidePageClient;
