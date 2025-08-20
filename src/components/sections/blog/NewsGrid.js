"use client";
import React, { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";

const BLOGS_PER_PAGE = 5;

const NewsGrid = () => {
	const [blogs, setBlogs] = useState([]);
	const [loading, setLoading] = useState(true);
	const [catLoading, setCatLoading] = useState(true);
	const [relatedBlogs, setRelatedBlogs] = useState([]); // will hold recommended blogs
	const [relatedLoading, setRelatedLoading] = useState(true);
	const locale = useLocale();

	// Pagination state
	const [currentPage, setCurrentPage] = useState(1);

	const searchParams = useSearchParams();

	const apiUrl = process.env.NEXT_PUBLIC_API_URL;

	useEffect(() => {
		const fetchBlogs = async () => {
			setLoading(true);
			try {
				const url = `/api/blogs?locale=${locale}`;
				const res = await fetch(url);
				const data = await res.json();
				setBlogs(data);
				setCurrentPage(1); // reset to first page on category change
			} catch (err) {
				console.error("Failed to load blogs", err);
			} finally {
				setLoading(false);
			}
		};

		fetchBlogs();
	}, [locale]);

	// Fetch recommended blogs (independent of loaded blogs)
	useEffect(() => {
		const fetchRecommended = async () => {
			setRelatedLoading(true);
			try {
				const res = await fetch(`/api/recommended_blogs?locale=${locale}`);
				if (!res.ok) throw new Error("Failed to fetch recommended blogs");
				const data = await res.json();
				setRelatedBlogs(data || []);
			} catch (err) {
				console.error("Failed to load recommended blogs", err);
				setRelatedBlogs([]);
			} finally {
				setRelatedLoading(false);
			}
		};

		fetchRecommended();
	}, [locale]);

	// Calculate total pages
	const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE);

	// Slice blogs for current page
	let paginatedBlogs = blogs.slice(
		(currentPage - 1) * BLOGS_PER_PAGE,
		currentPage * BLOGS_PER_PAGE
	);
	// const paginatedBlogs = [];

	// Handle page click
	const handlePageClick = (pageNum) => {
		if (pageNum < 1 || pageNum > totalPages) return;
		setCurrentPage(pageNum);
		// Scroll to top of blogs list or container if desired
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<section className="blog_section section_space_lg pb-0">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col col-lg-9">
						<div className="blogs_wrapper">
							<div className="row">
								{loading && <p>Loading...</p>}
								{!loading && blogs.length === 0 && <p>No blogs found.</p>}

								{!loading &&
									paginatedBlogs.map((blog) => (
										<div className="col col-md-6" key={blog.id}>
											<div className="blog_item">
												<ul className="badge_group unorder_list_right">
													<li>
														<Link className="badge badge_sale" href="#!">
															{blog.category_name}
														</Link>
													</li>
													<li>
														{(() => {
															if (!blog?.created_date) return null;
															// Expecting YYYY-MM-DD
															const parts = blog.created_date.split("-");
															if (parts.length !== 3) return null;
															const created = new Date(
																Number(parts[0]),
																Number(parts[1]) - 1,
																Number(parts[2])
															);
															const oneMonthMs = 31 * 24 * 60 * 60 * 1000;
															const isRecent =
																Date.now() - created.getTime() <= oneMonthMs;
															if (!isRecent) return null;
															return (
																<Link className="badge badge_sale" href="#!">
																	{locale === "ro" ? "Nou" : "Új"}
																</Link>
															);
														})()}
													</li>
												</ul>
												<Link
													className="item_image"
													href={`/blog/${blog.slug}`}>
													<Image
														width={280}
														height={100}
														style={{
															width: "100%",
															height: "300px",
															objectFit: "cover",
														}}
														src={`${apiUrl}/uploads/blog/${blog.cover_image}`}
														alt={blog.title}
													/>
												</Link>
												<div className="item_content">
													<ul className="post_meta unorder_list">
														{blog.sticky && (
															<li>
																<Link href="#!">
																	<i className="fas fa-star"></i>{" "}
																	{locale === "ro" ? "Recommendat" : "Ajánlott"}
																</Link>
															</li>
														)}
														<li>
															<Link href="#!">
																<i className="fas fa-user"></i>{" "}
																{locale === "ro" ? "De" : "Írta"} {blog.author}
															</Link>
														</li>
														<li>
															<Link href="#!">
																<i className="fas fa-calendar-day"></i>{" "}
																{new Date(
																	blog.created_date
																).toLocaleDateString()}
															</Link>
														</li>
													</ul>
													<h3 className="item_title">
														<Link href={`/blog/${blog.slug}`}>
															{blog.title}
														</Link>
													</h3>
													<p className="mb-0">{blog.lead}</p>
													<div className="details_btn">
														<Link
															className="btn_unfill"
															href={`/blog/${blog.slug}`}>
															<span>
																{locale === "ro"
																	? "Citește mai mult"
																	: "Olvasd el"}
															</span>
															<i className="far fa-long-arrow-right"></i>
														</Link>
													</div>
												</div>
											</div>
										</div>
									))}

								{/* Pagination */}
								{totalPages > 1 && (
									<div className="col">
										<div className="pagination_wrap p-0">
											<ul className="pagination_nav unorder_list">
												{/* Previous Button */}
												<li
													className={currentPage === 1 ? "disabled" : ""}
													onClick={() => handlePageClick(currentPage - 1)}
													style={{
														cursor: currentPage === 1 ? "default" : "pointer",
													}}>
													<Link href="#!">&laquo;</Link>
												</li>

												{/* Page Numbers */}
												{Array.from(
													{ length: totalPages },
													(_, i) => i + 1
												).map((num) => (
													<li
														key={num}
														className={num === currentPage ? "active" : ""}
														onClick={() => handlePageClick(num)}
														style={{ cursor: "pointer" }}>
														<Link href="#!">{num}</Link>
													</li>
												))}

												{/* Next Button */}
												<li
													className={
														currentPage === totalPages ? "disabled" : ""
													}
													onClick={() => handlePageClick(currentPage + 1)}
													style={{
														cursor:
															currentPage === totalPages
																? "default"
																: "pointer",
													}}>
													<Link href="#!">&raquo;</Link>
												</li>
											</ul>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>

					<div className="col col-lg-3">
						<aside className="sidebar_section">
							{/* <div className="sb_widget"> */}
							{/* Categories widget omitted */}
							{/* </div> */}

							<div className="sb_widget">
								<h3 className="sb_widget_title">
									{locale === "ro" ? "Recomandate" : "Ajánlott Blogok"}
								</h3>
								{relatedLoading && <p>Loading recommended news...</p>}
								{!relatedLoading && relatedBlogs.length === 0 && (
									<p>No recommended news found.</p>
								)}
								{!relatedLoading && relatedBlogs.length > 0 && (
									<ul className="small_post_wrap unorder_list_block">
										{relatedBlogs.map((blog, idx) => (
											<li key={blog.id || idx}>
												<div className="small_blog_item">
													<Link
														className="item_image"
														href={`/blog/${blog.slug}`}>
														<Image
															width={80}
															height={80}
															src={`${apiUrl}/uploads/blog/${blog.cover_image}`}
															alt={blog.title}
														/>
													</Link>
													<div className="item_content">
														<h3 className="item_title">
															<Link href={`/blog/${blog.slug}`}>
																{blog.title}
															</Link>
														</h3>
														<Link className="item_admin" href="#!">
															<i className="fas fa-user"></i> by{" "}
															{blog.author || "Unknown"}{" "}
														</Link>
													</div>
												</div>
											</li>
										))}
									</ul>
								)}
							</div>
						</aside>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NewsGrid;
