"use client";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import LoadingScreen from "@/components/ui/LoadingScreen";
import { LoadingOverlay } from "@/hooks/useLoadingState";
import React from "react";
import { useLocale } from "next-intl";
import { useEffect, useState, useRef } from "react";

const BlogInsidePageClient = ({ params }) => {
	// FIX: extract slug directly from params
	const { slug } = React.use(params);
	const locale = useLocale();
	const [blog, setBlog] = useState(null);
	const [recommended, setRecommended] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isRecommendedLoading, setIsRecommendedLoading] = useState(false);
	const apiUrl = process.env.NEXT_PUBLIC_API_URL;
	const contentRef = useRef(null);

	useEffect(() => {
		const fetchBlogs = async () => {
			setIsLoading(true);
			try {
				const res = await fetch(
					`/api/single_blog?slug=${slug}&locale=${locale}`
				);

				// Check if response is ok
				if (!res.ok) {
					throw new Error(`HTTP error! status: ${res.status}`);
				}

				const data = await res.json();
				console.log("Fetched blog data:", data); // Debug log
				setBlog(data);

				if (data && data.blog_id) {
					setIsRecommendedLoading(true);
					try {
						const recRes = await fetch(
							`/api/recommended_blogs?locale=${locale}&blog_id=${data.blog_id}`
						);
						if (recRes.ok) {
							const recData = await recRes.json();
							setRecommended(recData);
						}
					} catch (err) {
						console.error("Failed to load recommended blogs", err);
					} finally {
						setIsRecommendedLoading(false);
					}
				}
			} catch (err) {
				console.error("Failed to load blog", err);
				console.error("Error details:", err.message); // More detailed error logging
			} finally {
				setIsLoading(false);
			}
		};

		if (slug) {
			fetchBlogs();
		}
	}, [slug, locale]);

	// UPDATED: More robust content handling with error checking
	useEffect(() => {
		console.log("Content effect running:", {
			hasContentRef: !!contentRef.current,
			blogContent: blog?.content,
			contentType: typeof blog?.content,
			contentLength: blog?.content?.length,
		});
		const timer = setTimeout(() => {
			if (contentRef.current && blog?.content) {
				try {
					// Clear existing content first
					contentRef.current.innerHTML = "";

					// Set the content
					contentRef.current.innerHTML = blog.content;

					// Add icons to list items
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

					console.log("Content successfully loaded and processed");
				} catch (error) {
					console.error("Error setting content:", error);
					// Fallback: display content as text if HTML parsing fails
					contentRef.current.textContent = blog.content;
				}
			} else {
				console.log("Content not loaded:", {
					hasRef: !!contentRef.current,
					hasContent: !!blog?.content,
					blog: blog,
				});
			}
		}, 100);
	}, [blog, contentRef.current]);

	// Show loading screen while data is being fetched
	if (isLoading) {
		return <LoadingScreen locale={locale} />;
	}

	// Show error state if blog is not found
	if (!blog) {
		return (
			<section className="details_section blog_details section_space_lg pb-0">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col col-lg-9">
							<div className="details_content text-center">
								<h1 className="item_title">
									{locale === "ro"
										? "Blog nu a fost găsit"
										: "Blog nem található"}
								</h1>
								<p>
									{locale === "ro"
										? "Ne pare rău, blogul pe care îl căutați nu există."
										: "Sajnáljuk, a keresett blog nem létezik."}
								</p>
								<Link href="/blog" className="btn btn-primary">
									{locale === "ro" ? "Înapoi la bloguri" : "Vissza a blogokhoz"}
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
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
								<h1 className="item_title">{blog.title}</h1>
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
											{blog.created_date}
										</Link>
									</li>
								</ul>

								<div ref={contentRef} className="blog-content">
									{/* Fallback content for debugging */}
									{!blog?.content && (
										<p style={{ color: "red", fontStyle: "italic" }}>
											No content available for this blog post.
										</p>
									)}
								</div>

								{/* Additional images */}
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
								<LoadingOverlay
									isLoading={isRecommendedLoading}
									message="Loading recommendations...">
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
															<Link
																className="item_image"
																href={`/blog/${item.slug}`}>
																<Image
																	width={80}
																	height={80}
																	src={`${apiUrl}/uploads/blog/${item.cover_image}`}
																	alt="Pet Care Services"
																/>
															</Link>
															<div className="item_content">
																<h3 className="item_title">
																	<Link href={`/blog/${item.slug}`}>
																		{item.title}
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
								</LoadingOverlay>
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

					<LoadingOverlay
						isLoading={isRecommendedLoading}
						message="Loading more blogs...">
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
													<Link href={`/blog/${item.slug}`}>{item.title}</Link>
												</h3>
												<p className="mb-0">
													{item.lead || "No lead available."}
												</p>
											</div>
										</div>
									</div>
								))}
						</div>
					</LoadingOverlay>
				</div>
			</section>
		</>
	);
};

export default BlogInsidePageClient;
