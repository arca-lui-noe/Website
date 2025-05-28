import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogInsidePage = () => {
  return (
    <>
      <section className="details_section blog_details section_space_lg pb-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-lg-9">
              <div className="details_image">
                <Image
                  width={1020}
                  height={500}
                  src="/images/blog/blog_details_img_1.jpg"
                  alt="Pet Care Blog"
                />
              </div>
              <div className="details_content">
                <h2 className="item_title">
                  6 Tips to Keep Your Pet Healthy and Happy
                </h2>
                <ul className="post_meta unorder_list">
                  <li>
                    <Link href="#!">
                      <i className="fas fa-user"></i> by Corabelle Durrad
                    </Link>
                  </li>
                  <li>
                    <Link href="#!">
                      <i className="fas fa-calendar-day"></i> 02.01.2022
                    </Link>
                  </li>
                </ul>
                <h3 className="description_title">
                  Lacus suspendisse faucibus interdum posuere dolor purus non
                  enim
                </h3>
                <p>
                  Vulputate eu scelerisque felis imperdiet proin fermentum leo
                  vel. Massa ultricies mi quis hendrerit. Purus sit amet
                  volutpat consequat mauris nunc congue nisi. Aenean vel elit
                  scelerisque mauris pellentesque. Netus et malesuada fames ac
                  turpis egestas integer eget. Nunc non blandit massa enim nec
                  dui nunc.
                </p>
                <div className="row mb-3">
                  <div className="col col-md-6">
                    <ul className="icon_list unorder_list_block">
                      <li>
                        <i className="fas fa-circle"></i>{" "}
                        <span>Massa massa ultricies mi quis hendrerit</span>{" "}
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>{" "}
                        <span>Facilisi cras fermentum odio eu feugiat</span>{" "}
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>{" "}
                        <span>
                          Placerat vestibulum lectus mauris ultrices eros
                        </span>{" "}
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>{" "}
                        <span>Nullam non nisi est sit amet facilisis</span>{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="col col-md-6">
                    <ul className="icon_list unorder_list_block">
                      <li>1. Lacus sed viverra tellus habitasse </li>
                      <li>2. Gravida neque convallis a semper </li>
                      <li>3. Lacus sed viverra tellus habitasse </li>
                      <li>4. Gravida neque convallis a semper </li>
                    </ul>
                  </div>
                </div>
                <h3 className="description_title">
                  Sit amet justo donec enim diam vulputate
                </h3>
                <p>
                  Elit scelerisque mauris pellentesque pulvinar. Quam adipiscing
                  vitae proin sagittis nisl. Tempor commodo ullamcorper a lacus
                  vestibulum sed arcu non odio. In dictum non consectetur a.
                  Nunc vel risus commodo viverra.
                </p>
                <blockquote>
                  <i className="fas fa-quote-right"></i>
                  <p className="mb-2">
                    “ Aliquet risus feugiat in ante metus dictum at tempor. Id
                    leo in vitae turpis massa sed elementum tempus egestas.
                    Justo eget magna fermentum iaculis eu non diam phasellus ”
                  </p>
                  <cite title="Tina Bradley">Tina Bradley</cite>
                </blockquote>
                <p>
                  Quisque non tellus orci ac auctor augue mauris augue neque.
                  Lacus sed viverra tellus in hac habitasse platea dictumst.
                  Euismod elementum nisi quis eleifend quam adipiscing vitae
                  proin. Massa tincidunt dui ut ornare lectus sit. Gravida neque
                  convallis a cras semper auctor neque vitae. Lacus sed turpis
                  tincidunt id aliquet risus feugiat.
                </p>
                <h3 className="description_title">
                  Sit amet justo donec enim diam vulputate
                </h3>
                <p>
                  Dui faucibus in ornare quam viverra orci sagittis eu. Libero
                  nunc consequat interdum varius sit amet. Ut aliquam purus sit
                  amet luctus venenatis lectus. Pharetra pharetra massa massa
                  ultricies mi quis. Egestas tellus rutrum tellus pellentesque
                  eu tincidunt tortor aliquam nulla. Lectus sit amet est
                  placerat.
                </p>
                <div className="row mb-3">
                  <div className="col col-md-6">
                    <div className="details_image m-0">
                      <Image
                        width={500}
                        height={317}
                        src="/images/blog/blog_details_img_2.jpg"
                        alt="Pet Care Blog"
                      />
                    </div>
                  </div>
                  <div className="col col-md-6">
                    <div className="details_image m-0">
                      <Image
                        width={500}
                        height={317}
                        src="/images/blog/blog_details_img_3.jpg"
                        alt="Pet Care Blog"
                      />
                    </div>
                  </div>
                </div>
                <p>
                  Commodo viverra maecenas accumsan lacus vel facilisis
                  volutpat. Nec tincidunt praesent semper feugiat nibh sed.
                  Felis eget nunc lobortis mattis aliquam. Iaculis eu non diam
                  phasellus vestibulum. Aliquam id diam maecenas ultricies mi
                  eget mauris.
                </p>
                <hr />
                <div className="tag_share_links">
                  <div className="share_wrap">
                    <h3 className="tag_share_title">Share</h3>
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
                  <h3 className="sb_widget_title">Categories</h3>
                  <ul className="icon_list sb_category_list unorder_list_block">
                    <li>
                      <Link href="#!">
                        <i className="fal fa-angle-right"></i>{" "}
                        <span>Pet Health</span> <small>23</small>
                      </Link>
                    </li>
                    <li>
                      <Link href="#!">
                        <i className="fal fa-angle-right"></i>{" "}
                        <span>Grooming</span> <small>31</small>
                      </Link>
                    </li>
                    <li>
                      <Link href="#!">
                        <i className="fal fa-angle-right"></i>{" "}
                        <span>Pet Food</span> <small>34</small>
                      </Link>
                    </li>
                    <li>
                      <Link href="#!">
                        <i className="fal fa-angle-right"></i>{" "}
                        <span>Training</span> <small>18</small>
                      </Link>
                    </li>
                    <li>
                      <Link href="#!">
                        <i className="fal fa-angle-right"></i>{" "}
                        <span>Pet Toys</span> <small>19</small>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="sb_widget">
                  <h3 className="sb_widget_title">Related products</h3>
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
                            <Link href="blog/asd">
                              How to Protect Your Cat From Heatstroke
                            </Link>
                          </h3>
                          <Link className="item_admin" href="#!">
                            <i className="fas fa-user"></i> by Miriam Jesus
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
                            <Link href="blog/asd">
                              Why Are Dogs Scared of Fireworks?{" "}
                            </Link>
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
                            <Link href="blog/asd">
                              How Do Dog’s Digest Their Food?
                            </Link>
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

      <section
        className="blog_section section_space_lg bg_gray"
        style={{ backgroundImage: "url(images/overlay/shapes_overlay_7.svg)" }}
      >
        <div className="container">
          <div className="section_title text-center">
            <h2 className="title_text mb-0">Other Posts</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col col-lg-4">
              <div className="blog_item">
                <ul className="badge_group unorder_list_right">
                  <li>
                    <Link className="badge badge_sale" href="#!">
                      CATEGORY
                    </Link>
                  </li>
                </ul>
                <Link className="item_image" href="blog/asd">
                  <Image
                    width={420}
                    height={300}
                    src="/images/blog/blog_image_15.jpg"
                    alt="Pet Care Image"
                  />
                </Link>
                <div className="item_content">
                  <ul className="post_meta unorder_list">
                    <li>
                      <Link href="#!">
                        <i className="fas fa-user"></i> by Corabelle Durrad
                      </Link>
                    </li>
                    <li>
                      <Link href="#!">
                        <i className="fas fa-calendar-day"></i> 02.01.2022
                      </Link>
                    </li>
                  </ul>
                  <h3 className="item_title">
                    <Link href="blog/asd">
                      5 Crazy Things Dogs Do When Left Alone At Home
                    </Link>
                  </h3>
                  <p className="mb-0">
                    Est pellentesque elit ullamcorper dignissim cras tincidunt
                    lobortis feugiat vivamus.
                  </p>
                </div>
              </div>
            </div>

            <div className="col col-lg-4">
              <div className="blog_item">
                <ul className="badge_group unorder_list_right">
                  <li>
                    <Link className="badge badge_sale" href="#!">
                      CATEGORY
                    </Link>
                  </li>
                </ul>
                <Link className="item_image" href="blog/asd">
                  <Image
                    width={420}
                    height={300}
                    src="/images/blog/blog_image_16.jpg"
                    alt="Pet Care Image"
                  />
                </Link>
                <div className="item_content">
                  <ul className="post_meta unorder_list">
                    <li>
                      <Link href="#!">
                        <i className="fas fa-user"></i> by Corabelle Durrad
                      </Link>
                    </li>
                    <li>
                      <Link href="#!">
                        <i className="fas fa-calendar-day"></i> 02.01.2022
                      </Link>
                    </li>
                  </ul>
                  <h3 className="item_title">
                    <Link href="blog/asd">
                      Your Dog Desperately Needs From You
                    </Link>
                  </h3>
                  <p className="mb-0">
                    Amet porttitor eget dolor morbi non arcu risus quis varius
                    sodales ut etiam sit amet{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col col-lg-4">
              <div className="blog_item">
                <ul className="badge_group unorder_list_right">
                  <li>
                    <Link className="badge badge_sale" href="#!">
                      CATEGORY
                    </Link>
                  </li>
                </ul>
                <Link className="item_image" href="blog/asd">
                  <Image
                    width={420}
                    height={300}
                    src="/images/blog/blog_image_17.jpg"
                    alt="Pet Care Image"
                  />
                </Link>
                <div className="item_content">
                  <ul className="post_meta unorder_list">
                    <li>
                      <Link href="#!">
                        <i className="fas fa-user"></i> by Corabelle Durrad
                      </Link>
                    </li>
                    <li>
                      <Link href="#!">
                        <i className="fas fa-calendar-day"></i> 02.01.2022
                      </Link>
                    </li>
                  </ul>
                  <h3 className="item_title">
                    <Link href="blog/asd">
                      Top Cat Foods to Consider If You Are a First Time Owner
                    </Link>
                  </h3>
                  <p className="mb-0">
                    Vel eros donec ac odio tempor orci dapibus ultrices. Arcu
                    felis bibendum ut tristique et egestas quis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogInsidePage;
