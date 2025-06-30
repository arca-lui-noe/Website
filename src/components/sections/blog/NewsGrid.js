"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NewsGrid = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error("Failed to load blogs", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="blog_section section_space_lg pb-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col col-lg-9">
            <div className="blogs_wrapper">
              <div className="row">
                {loading && <p>Loading...</p>}
                {!loading && blogs.length === 0 && <p>No blogs found.</p>}
                {blogs.map((blog) => (
                  <div className="col col-md-6" key={blog.id}>
                    <div className="blog_item">
                      <ul className="badge_group unorder_list_right">
                        <li>
                          <Link className="badge badge_sale" href="#!">
                            {blog.category.replace("_", " ").toUpperCase()}
                          </Link>
                        </li>
                      </ul>
                      <Link className="item_image" href={`/blogs/${blog.slug}`}>
                        <Image
                          width={280}
                          height={310}
                          src="/images/blog/blog_image_5.jpg"
                          alt="Pet Care Services"
                        />
                      </Link>
                      <div className="item_content">
                        <ul className="post_meta unorder_list">
                          {blog.sticky ? (
                            <li>
                              <Link href="#!">
                                <i className="fas fa-thumbtack"></i> Sticky Post
                              </Link>
                            </li>
                          ) : null}
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
                <div className="col">
                  <div className="pagination_wrap p-0">
                    <ul className="pagination_nav unorder_list">
                      <li className="active">
                        <Link href="#!">1</Link>
                      </li>
                      <li>
                        <Link href="#!">2</Link>
                      </li>
                      <li>
                        <Link href="#!">3</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col col-lg-3">
            <aside className="sidebar_section">
              <div className="sb_widget">
                <h3 className="sb_widget_title">Categories</h3>
                <ul className="icon_list sb_category_list unorder_list_block">
                  <li>
                    <Link href="#!">
                      <i className="fal fa-angle-right"></i> <span>Pet Health</span>{" "}
                      <small>23</small>
                    </Link>
                  </li>
                  <li>
                    <Link href="#!">
                      <i className="fal fa-angle-right"></i> <span>Grooming</span> <small>31</small>
                    </Link>
                  </li>
                  <li>
                    <Link href="#!">
                      <i className="fal fa-angle-right"></i> <span>Pet Food</span> <small>34</small>
                    </Link>
                  </li>
                  <li>
                    <Link href="#!">
                      <i className="fal fa-angle-right"></i> <span>Training</span> <small>18</small>
                    </Link>
                  </li>
                  <li>
                    <Link href="#!">
                      <i className="fal fa-angle-right"></i> <span>Pet Toys</span> <small>19</small>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="sb_widget">
                <h3 className="sb_widget_title">Related News</h3>
                <ul className="small_post_wrap unorder_list_block">
                  <li>
                    <div className="small_blog_item">
                      <Link className="item_image" href="blog/asd">
                        <Image
                          width={80}
                          height={80}
                          src="/images/blog/blog_image_12.jpg"
                          alt="Pet Care Services"
                        />
                      </Link>
                      <div className="item_content">
                        <h3 className="item_title">
                          {" "}
                          <Link href="blog/asd"> How to Protect Your Cat From Heatstroke </Link>
                        </h3>
                        <Link className="item_admin" href="#!">
                          {" "}
                          <i className="fas fa-user"></i> by Miriam Jesus{" "}
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="small_blog_item">
                      <Link className="item_image" href="blog/asd">
                        <Image
                          width={80}
                          height={80}
                          src="/images/blog/blog_image_13.jpg"
                          alt="Pet Care Services"
                        />
                      </Link>
                      <div className="item_content">
                        <h3 className="item_title">
                          <Link href="blog/asd">Why Are Dogs Scared of Fireworks? </Link>
                        </h3>
                        <Link className="item_admin" href="#!">
                          <i className="fas fa-user"></i> by Paulina Gayoso
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="small_blog_item">
                      <Link className="item_image" href="blog/asd">
                        <Image
                          width={80}
                          height={80}
                          src="/images/blog/blog_image_14.jpg"
                          alt="Pet Care Services"
                        />
                      </Link>
                      <div className="item_content">
                        <h3 className="item_title">
                          <Link href="blog/asd"> How Do Dog’s Digest Their Food?</Link>
                        </h3>
                        <Link className="item_admin" href="#!">
                          <i className="fas fa-user"></i> by Neville Griffin
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NewsGrid;
