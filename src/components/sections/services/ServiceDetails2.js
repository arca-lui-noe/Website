"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ServiceDetailss = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className="service_details_section section_space_lg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="service_cost_info p-0 mb-5">
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <h3 className="details_info_title">General Informations</h3>
                    <Link className="btn-link" href="#!">
                      <span className="btn_text">Schledule a Aisit</span>
                      <span className="btn_icon">
                        <i className="fa-solid fa-arrow-up-right"></i>
                      </span>
                    </Link>
                  </div>
                  <div className="col-md-6 col-sm-6 d-md-flex justify-content-md-end d-sm-flex justify-content-sm-end">
                    <div className="item_price mb-0">
                      <span className="price_value">50$</span>
                      <sub>Session price</sub>
                    </div>
                  </div>
                </div>
              </div>
              <div className="details_content">
                <p>
                  Phasellus viverra nulla ut metus varius laoreet. Quisque
                  rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                  Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                  rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
                  quam semper libero, sit amet adipiscing
                </p>
              </div>
            </div>
          </div>

          <div
            className="video_wrapper text-center"
            style={{
              backgroundImage:
                "url(/images/video/video_poster_image_2-min.jpg)",
            }}
          >
            <Link
              onClick={() => setOpen(true)}
              className="video_play_btn popup_video"
            >
              <i className="fa-duotone fa-play" />
            </Link>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="details_content">
                <p>
                  Ontrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of
                  Good and Evil) by Cicero, written in 45 BC. This book is a
                  treatise on the theory of ethics, very popular during the
                  Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum
                  dolor sit amet..&quot;, comes from a line in section 1.10.32.
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="details_content mb-5">
                <h3 className="details_info_title">
                  How a therapy can solve your problem?
                </h3>
                <p className="mb-4">
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested.
                </p>
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <ul className="info_list unordered_list_block mb-md-4">
                      <li>
                        <span className="info_icon">
                          <i className="fa-light fa-circle-check"></i>
                        </span>
                        <span className="info_text">
                          Realize you are not a victim
                        </span>
                      </li>
                      <li>
                        <span className="info_icon">
                          <i className="fa-light fa-circle-check"></i>
                        </span>
                        <span className="info_text">Change it up</span>
                      </li>
                      <li>
                        <span className="info_icon">
                          <i className="fa-light fa-circle-check"></i>
                        </span>
                        <span className="info_text">Change it up</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <ul className="info_list unordered_list_block mb-4">
                      <li>
                        <span className="info_icon">
                          <i className="fa-light fa-circle-check"></i>
                        </span>
                        <span className="info_text">
                          Give a little; get a lot
                        </span>
                      </li>
                      <li>
                        <span className="info_icon">
                          <i className="fa-light fa-circle-check"></i>
                        </span>
                        <span className="info_text">
                          Do what you say you will do
                        </span>
                      </li>
                      <li>
                        <span className="info_icon">
                          <i className="fa-light fa-circle-check"></i>
                        </span>
                        <span className="info_text">Be a good listener</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="mb-0">
                  Sections 1.10.32 and 1.10.33 from &quot;de Finibus Bonorum et
                  Malorum&quot; by Cicero are also reproduced in their exact
                  original form, accompanied by English versions from the 1914
                  translation by H. Rackham.
                </p>
              </div>

              <div className="prev_next_post_nav mb-5">
                <Link href="#!">
                  <span className="item_icon">
                    <i className="fa-regular fa-angle-left"></i>
                  </span>
                  <span className="item_content">
                    <b>Previous</b>
                    <strong>Relationships</strong>
                  </span>
                </Link>
                <Link href="#!">
                  <span className="item_icon">
                    <i className="fa-regular fa-angle-right"></i>
                  </span>
                  <span className="item_content">
                    <b>Next</b>
                    <strong>Couples Counseling</strong>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="service_author shadow-none">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="d-lg-flex text-lg-start justify-content-lg-start text-center justify-content-center align-items-center">
                      <div className="author_image">
                        <Image
                          width={30}
                          height={30}
                          src="/images/meta/author_image_3-min.png"
                          alt="Talking Minds - Psychotherapist React NextJs Template"
                        />
                      </div>
                      <div className="author_content">
                        <h4 className="author_name">Dr. Merry Rose</h4>
                        <span className="author_designation mb-0">
                          Practicing psychologist, Psy. D
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <ul className="social_links unordered_list justify-content-center justify-content-lg-end">
                      <li>
                        <Link href="#!">
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#!">
                          <i className="fa-brands fa-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#!">
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#!">
                          <i className="fa-brands fa-whatsapp"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service_section">
        <div className="container">
          <div className="section_heading text-center">
            <h2 className="section_heading_text">Other Services</h2>
            <p className="section_heading_description mb-0 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service_item">
                <div className="item_icon">
                  <Image
                    width={30}
                    height={30}
                    src="/images/icons/icon_brain.svg"
                    alt="Brain Icon - Talking Minds – Psychotherapist React NextJs Template"
                  />
                </div>
                <div className="item_contact">
                  <h3 className="item_title">Depression Therapy</h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusant doloremqe laudantium.
                  </p>
                  <Link className="btn-link" href="/services/asd">
                    <span className="btn_text">More Info</span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service_item">
                <div className="item_icon">
                  <Image
                    width={30}
                    height={30}
                    src="/images/icons/icon_head_double.svg"
                    alt="Head Double Icon - Talking Minds – Psychotherapist React NextJs Template"
                  />
                </div>
                <div className="item_contact">
                  <h3 className="item_title">Couples Counseling</h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusant doloremqe laudantium.
                  </p>
                  <Link className="btn-link" href="/services/asd">
                    <span className="btn_text">More Info</span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service_item">
                <div className="item_icon">
                  <Image
                    width={30}
                    height={30}
                    src="/images/icons/icon_head.svg"
                    alt="Brain Icon - Talking Minds – Psychotherapist React NextJs Template"
                  />
                </div>
                <div className="item_contact">
                  <h3 className="item_title">Relationships</h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusant doloremqe laudantium.
                  </p>
                  <Link className="btn-link" href="/services/asd">
                    <span className="btn_text">More Info</span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="btn_wrap pb-0 text-center">
            <Link className="btn btn-primary" href="/services">
              <span className="btn_text" data-text="All Services">
                All Services
              </span>
              <span className="btn_icon">
                <i className="fa-solid fa-arrow-up-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="consultation_section section_space_lg pb-0">
        <div className="container">
          <div className="consultation_form bg_primary_light decoration_wrapper">
            <div className="section_heading text-center">
              <h2 className="section_heading_text mb-0">
                <span className="d-md-block">Get your first free</span> online
                consultation
              </h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="input_name">Name</label>
                      <input
                        id="input_name"
                        className="form-control"
                        type="text"
                        name="name"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="input_phone">Phone</label>
                      <input
                        id="input_phone"
                        className="form-control"
                        type="tel"
                        name="phone"
                        placeholder="Mobile phone number"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="select_therapy">Section</label>
                      <select
                        id="select_therapy"
                        className="form-select"
                        aria-label="Therapy Select Options"
                      >
                        <option value="SelectTherapy">Select Therapy</option>
                        <option value="Therapy One">Therapy One</option>
                        <option value="Therapy Two">Therapy Two</option>
                        <option value="Therapy Three">Therapy Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="input_calendar">Phone</label>
                      <input
                        id="input_calendar"
                        className="form-control"
                        type="date"
                        name="date"
                      />
                    </div>
                  </div>
                </div>
                <div className="btn_wrap pb-0 text-center">
                  <button type="submit" className="btn btn-primary">
                    <span className="btn_text" data-text="Get A Consultation">
                      Get A Consultation
                    </span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="decoration_item shape_leaf_1">
              <Image
                width={30}
                height={30}
                src="/images/shapes/shape_leaf_right_top.svg"
                alt="Shape Leaf - Talking Minds - Psychotherapist React NextJs Template"
              />
            </div>
            <div className="decoration_item shape_leaf_2">
              <Image
                width={30}
                height={30}
                src="/images/shapes/shape_leaf_left_bottom.svg"
                alt="Shape Leaf - Talking Minds - Psychotherapist React NextJs Template"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="contact_section section_space_lg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section_heading">
                <h2 className="section_heading_text">Contact Info</h2>
                <p className="section_heading_description mb-0 ">
                  If you are going to use a passage of Lorem Ipsum, you need to
                  be sure there isn&apos;t anything embarrassing hidden
                </p>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <div className="contact_info_box">
                    <div className="item_icon">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="item_contact">
                      <h3 className="item_title">Phone</h3>
                      <ul className="info_list unordered_list_block">
                        <li>
                          <span className="info_text">+880-1680-6361-89</span>
                        </li>
                        <li>
                          <span className="info_text">+1-234-56-78-123</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="contact_info_box">
                    <div className="item_icon">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="item_contact">
                      <h3 className="item_title">Email</h3>
                      <ul className="info_list unordered_list_block">
                        <li>
                          <span className="info_text">
                            info@talkingminds.com
                          </span>
                        </li>
                        <li>
                          <span className="info_text">
                            contact@talkingminds.com
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="contact_info_box">
                    <div className="item_icon">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="item_contact">
                      <h3 className="item_title">Address</h3>
                      <ul className="info_list unordered_list_block">
                        <li>
                          <span className="info_text">49, Caradon Hill, </span>
                        </li>
                        <li>
                          <span className="info_text">ULBSTER</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="contact_info_box">
                    <div className="item_icon">
                      <i className="fa-solid fa-clock"></i>
                    </div>
                    <div className="item_contact">
                      <h3 className="item_title">Working Hours</h3>
                      <ul className="info_list unordered_list_block">
                        <li>
                          <span className="info_text">
                            Mon to Fri 8 am - 6 pm
                          </span>
                        </li>
                        <li>
                          <span className="info_text">
                            Sat to Sun 9 am - 2 pm
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="gmap_canvas ps-lg-3">
                <iframe src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ServiceDetailss;
