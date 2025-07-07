"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const BLOGS_PER_PAGE = 5;

const NewsGrid = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [catLoading, setCatLoading] = useState(true);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [relatedLoading, setRelatedLoading] = useState(true);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);

  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get("category");

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const url = categoryFilter ? `/api/blogs?category=${categoryFilter}` : "/api/blogs";
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
  }, [categoryFilter]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/blog_categories");
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error("Failed to load categories", err);
      } finally {
        setCatLoading(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchRelatedBlogs = async () => {
      setRelatedLoading(true);
      try {
        const res = await fetch("/api/blogs"); // fetch all blogs
        const data = await res.json();

        const sorted = data
          .filter((blog) => blog.updated_date)
          .sort((a, b) => new Date(b.updated_date) - new Date(a.updated_date));

        setRelatedBlogs(sorted.slice(0, 3));
      } catch (err) {
        console.error("Failed to load related blogs", err);
      } finally {
        setRelatedLoading(false);
      }
    };

    fetchRelatedBlogs();
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE);

  // Slice blogs for current page
  const paginatedBlogs = blogs.slice(
    (currentPage - 1) * BLOGS_PER_PAGE,
    currentPage * BLOGS_PER_PAGE
  );

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
                        </ul>
                        <Link className="item_image" href={`/blog/${blog.slug}`}>
                          <Image
                            width={280}
                            height={310}
                            src={"https://arcaluinoe.prismasolutions.ro/uploads/blog/" + blog.image}
                            alt={blog.title}
                          />
                        </Link>
                        <div className="item_content">
                          <ul className="post_meta unorder_list">
                            {blog.sticky && (
                              <li>
                                <Link href="#!">
                                  <i className="fas fa-thumbtack"></i> Sticky Post
                                </Link>
                              </li>
                            )}
                            <li>
                              <Link href="#!">
                                <i className="fas fa-user"></i> by {blog.author}
                              </Link>
                            </li>
                            <li>
                              <Link href="#!">
                                <i className="fas fa-calendar-day"></i>{" "}
                                {new Date(blog.created_date).toLocaleDateString()}
                              </Link>
                            </li>
                          </ul>
                          <h3 className="item_title">
                            <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                          </h3>
                          <p className="mb-0">{blog.lead}</p>
                          <div className="details_btn">
                            <Link className="btn_unfill" href={`/blogs/${blog.slug}`}>
                              <span>Read Post</span>
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
                          style={{ cursor: currentPage === 1 ? "default" : "pointer" }}
                        >
                          <Link href="#!">&laquo;</Link>
                        </li>

                        {/* Page Numbers */}
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                          <li
                            key={num}
                            className={num === currentPage ? "active" : ""}
                            onClick={() => handlePageClick(num)}
                            style={{ cursor: "pointer" }}
                          >
                            <Link href="#!">{num}</Link>
                          </li>
                        ))}

                        {/* Next Button */}
                        <li
                          className={currentPage === totalPages ? "disabled" : ""}
                          onClick={() => handlePageClick(currentPage + 1)}
                          style={{ cursor: currentPage === totalPages ? "default" : "pointer" }}
                        >
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
              <div className="sb_widget">
                <h3 className="sb_widget_title">Categories</h3>
                {catLoading && <p>Loading categories...</p>}
                {!catLoading && categories.length === 0 && <p>No categories found.</p>}
                {!catLoading && categories.length > 0 && (
                  <ul className="icon_list sb_category_list unorder_list_block">
                    {categories.map((cat) => (
                      <li key={cat.id}>
                        <Link href={`/blog?category=${cat.id}`}>
                          <i className="fal fa-angle-right"></i> <span>{cat.name}</span>{" "}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="sb_widget">
                <h3 className="sb_widget_title">Related News</h3>
                {relatedLoading && <p>Loading related news...</p>}
                {!relatedLoading && relatedBlogs.length === 0 && <p>No related news found.</p>}
                {!relatedLoading && relatedBlogs.length > 0 && (
                  <ul className="small_post_wrap unorder_list_block">
                    {relatedBlogs.map((blog) => (
                      <li key={blog.id}>
                        <div className="small_blog_item">
                          <Link className="item_image" href={`/blog/${blog.slug}`}>
                            <Image
                              width={80}
                              height={80}
                              src={
                                "https://arcaluinoe.prismasolutions.ro/uploads/blog/" + blog.image
                              }
                              alt={blog.title}
                            />
                          </Link>
                          <div className="item_content">
                            <h3 className="item_title">
                              <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                            </h3>
                            <Link className="item_admin" href="#!">
                              <i className="fas fa-user"></i> by {blog.author}{" "}
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
