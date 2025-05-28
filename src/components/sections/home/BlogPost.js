import Image from "next/image";
import Link from "next/link";

const BlogPost = () => {
  return (
    <>
      <section className="blog_section section_space_md">
        <div className="container">
          <div className="section_title text-center">
            <h2 className="title_text mb-0">
              <span className="sub_title">Our Blog</span> Tatest Post
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col col-lg-4 col-md-6 col-sm-6">
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
                    src="/images/blog/blog_image_1.jpg"
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

            <div className="col col-lg-4 col-md-6 col-sm-6">
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
                    src="/images/blog/blog_image_2.jpg"
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

            <div className="col col-lg-4 col-md-6 col-sm-6">
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
                    src="/images/blog/blog_image_3.jpg"
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
export default BlogPost;
