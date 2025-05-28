"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Pricing = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleOnClick = (index) => {
    setActiveIndex(index); // remove the curly braces
  };
  return (
    <>
      <section className="pricing_section bg_gray section_space_lg decoration_wrap">
        <div className="container">
          <div className="section_title text-center">
            <h2 className="title_text">
              <span className="sub_title">Our prices</span> Dog Grooming
              Services & Pricing
            </h2>
            <div className="row justify-content-center">
              <div className="col col-lg-6">
                <p className="mb-0">
                  We can fully customize your pet sitting schedule to fit your
                  pet’s needs. Pick and choose what visits work best for you and
                  your family
                </p>
              </div>
            </div>
          </div>

          <div className="pricing_tab_wrap">
            <ul className="nav tabs_nav unorder_list_center" role="tablist">
              <li className="nav-item">
                <button
                  className={activeIndex === 1 ? "nav-link active" : "nav-link"}
                  onClick={() => handleOnClick(1)}
                  data-tab="#tab1"
                >
                  Small Dog
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={activeIndex === 2 ? "nav-link active" : "nav-link"}
                  onClick={() => handleOnClick(2)}
                  data-tab="#tab2"
                >
                  Medium Dog
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={activeIndex === 3 ? "nav-link active" : "nav-link"}
                  onClick={() => handleOnClick(3)}
                  data-tab="#tab3"
                >
                  Large Dog
                </button>
              </li>
            </ul>
            <div className="tab-content">
              <div
                className={activeIndex === 1 ? "tab active-tab" : "tab"}
                id="tab1"
              >
                <div className="row">
                  <div className="col col-xl-3 col-sm-6">
                    <div className="pricing_table_item">
                      <h3 className="pricing_heading">Bath & Brush</h3>
                      <div className="pricing_value">
                        <span className="value_text">$13 – $18</span>
                      </div>
                      <ul className="pricing_info_list unorder_list_block">
                        <li>
                          <i className="fas fa-check-circle"></i>
                          <span>Bath (Hypo-Allergenic)</span>
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>
                          <span>Conditioning Treatment</span>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Ears Flushed & Cleaned</span>
                          </del>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Watering Plants</span>
                          </del>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Handscissor Finish</span>
                          </del>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Setting Length of Coat</span>
                          </del>
                        </li>
                      </ul>
                      <Link className="btn border_primary" href="#!">
                        Purchase Now
                      </Link>
                    </div>
                  </div>
                  <div className="col col-xl-3 col-sm-6">
                    <div className="pricing_table_item">
                      <h3 className="pricing_heading">Mini Groom</h3>
                      <div className="pricing_value">
                        <span className="value_text">$20 – $25</span>
                      </div>
                      <ul className="pricing_info_list unorder_list_block">
                        <li>
                          <i className="fas fa-check-circle"></i>
                          <span>Bath (Hypo-Allergenic)</span>
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>
                          <span>Conditioning Treatment</span>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Ears Flushed & Cleaned</span>
                          </del>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Watering Plants</span>
                          </del>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Handscissor Finish</span>
                          </del>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Setting Length of Coat</span>
                          </del>
                        </li>
                      </ul>
                      <Link className="btn border_primary" href="#!">
                        Purchase Now
                      </Link>
                    </div>
                  </div>
                  <div className="col col-xl-3 col-sm-6">
                    <div className="pricing_table_item active">
                      <h3 className="pricing_heading">Complete Groom</h3>
                      <div className="pricing_value">
                        <span className="value_text">$35 – $40</span>
                      </div>
                      <ul className="pricing_info_list unorder_list_block">
                        <li>
                          <i className="fas fa-check-circle"></i>
                          <span>Bath (Hypo-Allergenic)</span>
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>
                          <span>Conditioning Treatment</span>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Ears Flushed & Cleaned</span>
                          </del>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Watering Plants</span>
                          </del>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Handscissor Finish</span>
                          </del>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Setting Length of Coat</span>
                          </del>
                        </li>
                      </ul>
                      <Link className="btn btn_warning" href="#!">
                        Purchase Now
                      </Link>
                    </div>
                  </div>
                  <div className="col col-xl-3 col-sm-6">
                    <div className="pricing_table_item">
                      <h3 className="pricing_heading">Hand Scissor Groom</h3>
                      <div className="pricing_value">
                        <span className="value_text">$50 – $55</span>
                      </div>
                      <ul className="pricing_info_list unorder_list_block">
                        <li>
                          <i className="fas fa-check-circle"></i>
                          <span>Bath (Hypo-Allergenic)</span>
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>
                          <span>Conditioning Treatment</span>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Ears Flushed & Cleaned</span>
                          </del>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Watering Plants</span>
                          </del>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Handscissor Finish</span>
                          </del>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Setting Length of Coat</span>
                          </del>
                        </li>
                      </ul>
                      <Link className="btn border_primary" href="#!">
                        Purchase Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={activeIndex === 2 ? "tab active-tab" : "tab"}
                id="tab2"
              >
                <div className="row">
                  <div className="col col-xl-3 col-sm-6">
                    <div className="pricing_table_item">
                      <h3 className="pricing_heading">Bath & Brush</h3>
                      <div className="pricing_value">
                        <span className="value_text">$11 – $16</span>
                      </div>
                      <ul className="pricing_info_list unorder_list_block">
                        <li>
                          <i className="fas fa-check-circle"></i>
                          <span>Bath (Hypo-Allergenic)</span>
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>
                          <span>Conditioning Treatment</span>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Ears Flushed & Cleaned</span>
                          </del>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Watering Plants</span>
                          </del>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Handscissor Finish</span>
                          </del>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Setting Length of Coat</span>
                          </del>
                        </li>
                      </ul>
                      <Link className="btn border_primary" href="#!">
                        Purchase Now
                      </Link>
                    </div>
                  </div>
                  <div className="col col-xl-3 col-sm-6">
                    <div className="pricing_table_item">
                      <h3 className="pricing_heading">Mini Groom</h3>
                      <div className="pricing_value">
                        <span className="value_text">$20 – $25</span>
                      </div>
                      <ul className="pricing_info_list unorder_list_block">
                        <li>
                          <i className="fas fa-check-circle"></i>
                          <span>Bath (Hypo-Allergenic)</span>
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>
                          <span>Conditioning Treatment</span>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Ears Flushed & Cleaned</span>
                          </del>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Watering Plants</span>
                          </del>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Handscissor Finish</span>
                          </del>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Setting Length of Coat</span>
                          </del>
                        </li>
                      </ul>
                      <Link className="btn border_primary" href="#!">
                        Purchase Now
                      </Link>
                    </div>
                  </div>
                  <div className="col col-xl-3 col-sm-6">
                    <div className="pricing_table_item active">
                      <h3 className="pricing_heading">Complete Groom</h3>
                      <div className="pricing_value">
                        <span className="value_text">$25 – $30</span>
                      </div>
                      <ul className="pricing_info_list unorder_list_block">
                        <li>
                          <i className="fas fa-check-circle"></i>
                          <span>Bath (Hypo-Allergenic)</span>
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>
                          <span>Conditioning Treatment</span>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Ears Flushed & Cleaned</span>
                          </del>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Watering Plants</span>
                          </del>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Handscissor Finish</span>
                          </del>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Setting Length of Coat</span>
                          </del>
                        </li>
                      </ul>
                      <Link className="btn btn_warning" href="#!">
                        Purchase Now
                      </Link>
                    </div>
                  </div>
                  <div className="col col-xl-3 col-sm-6">
                    <div className="pricing_table_item">
                      <h3 className="pricing_heading">Hand Scissor Groom</h3>
                      <div className="pricing_value">
                        <span className="value_text">$45 – $50</span>
                      </div>
                      <ul className="pricing_info_list unorder_list_block">
                        <li>
                          <i className="fas fa-check-circle"></i>
                          <span>Bath (Hypo-Allergenic)</span>
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>
                          <span>Conditioning Treatment</span>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Ears Flushed & Cleaned</span>
                          </del>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Watering Plants</span>
                          </del>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Handscissor Finish</span>
                          </del>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Setting Length of Coat</span>
                          </del>
                        </li>
                      </ul>
                      <Link className="btn border_primary" href="#!">
                        Purchase Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={activeIndex === 3 ? "tab active-tab" : "tab"}
                id="tab3"
              >
                <div className="row">
                  <div className="col col-xl-3 col-sm-6">
                    <div className="pricing_table_item">
                      <h3 className="pricing_heading">Bath & Brush</h3>
                      <div className="pricing_value">
                        <span className="value_text">$13 – $18</span>
                      </div>
                      <ul className="pricing_info_list unorder_list_block">
                        <li>
                          <i className="fas fa-check-circle"></i>
                          <span>Bath (Hypo-Allergenic)</span>
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>
                          <span>Conditioning Treatment</span>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Ears Flushed & Cleaned</span>
                          </del>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Watering Plants</span>
                          </del>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Handscissor Finish</span>
                          </del>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Setting Length of Coat</span>
                          </del>
                        </li>
                      </ul>
                      <Link className="btn border_primary" href="#!">
                        Purchase Now
                      </Link>
                    </div>
                  </div>
                  <div className="col col-xl-3 col-sm-6">
                    <div className="pricing_table_item">
                      <h3 className="pricing_heading">Mini Groom</h3>
                      <div className="pricing_value">
                        <span className="value_text">$20 – $25</span>
                      </div>
                      <ul className="pricing_info_list unorder_list_block">
                        <li>
                          <i className="fas fa-check-circle"></i>
                          <span>Bath (Hypo-Allergenic)</span>
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>
                          <span>Conditioning Treatment</span>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Ears Flushed & Cleaned</span>
                          </del>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Watering Plants</span>
                          </del>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Handscissor Finish</span>
                          </del>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Setting Length of Coat</span>
                          </del>
                        </li>
                      </ul>
                      <Link className="btn border_primary" href="#!">
                        Purchase Now
                      </Link>
                    </div>
                  </div>
                  <div className="col col-xl-3 col-sm-6">
                    <div className="pricing_table_item active">
                      <h3 className="pricing_heading">Complete Groom</h3>
                      <div className="pricing_value">
                        <span className="value_text">$35 – $40</span>
                      </div>
                      <ul className="pricing_info_list unorder_list_block">
                        <li>
                          <i className="fas fa-check-circle"></i>
                          <span>Bath (Hypo-Allergenic)</span>
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>
                          <span>Conditioning Treatment</span>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Ears Flushed & Cleaned</span>
                          </del>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Watering Plants</span>
                          </del>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Handscissor Finish</span>
                          </del>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Setting Length of Coat</span>
                          </del>
                        </li>
                      </ul>
                      <Link className="btn btn_warning" href="#!">
                        Purchase Now
                      </Link>
                    </div>
                  </div>
                  <div className="col col-xl-3 col-sm-6">
                    <div className="pricing_table_item">
                      <h3 className="pricing_heading">Hand Scissor Groom</h3>
                      <div className="pricing_value">
                        <span className="value_text">$50 – $55</span>
                      </div>
                      <ul className="pricing_info_list unorder_list_block">
                        <li>
                          <i className="fas fa-check-circle"></i>
                          <span>Bath (Hypo-Allergenic)</span>
                        </li>
                        <li>
                          <i className="fas fa-check-circle"></i>
                          <span>Conditioning Treatment</span>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Ears Flushed & Cleaned</span>
                          </del>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Watering Plants</span>
                          </del>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Handscissor Finish</span>
                          </del>
                        </li>
                        <li>
                          <del>
                            <i className="fas fa-check-circle"></i>
                            <span>Setting Length of Coat</span>
                          </del>
                        </li>
                      </ul>
                      <Link className="btn border_primary" href="#!">
                        Purchase Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="decoration_item shape_dot_1">
          <Image
            width={30}
            height={30}
            src="/images/shape/shape_dot_group_3.svg"
            alt="Colorful Dots"
          />
        </div>
        <div className="decoration_item shape_dot_2">
          <Image
            width={30}
            height={30}
            src="/images/shape/shape_dot_group_4.svg"
            alt="Colorful Dots"
          />
        </div>
      </section>
    </>
  );
};
export default Pricing;
