"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: false,
  },
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    575: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
};

const ServiceDetailsSec1 = () => {
  return (
    <>
      <section className="sitting_service section_space_lg">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col col-lg-6">
              <div className="pe-lg-5">
                <div className="section_title">
                  <h2 className="title_text">Pet Sitting Service</h2>
                  <p className="mb-0">
                    Justo eget magna fermentum iaculis eu non diam phasellus. Eu
                    lobortis elementum nibh tellus molestie nunc. Ullamcorper
                    eget nulla facilisi etiam dignissim diam. Eget felis eget
                    nunc lobortis mattis
                  </p>
                </div>
                <div className="banner_policy_items row">
                  <div className="col">
                    <div className="iconbox_item iconbox_lefticon">
                      <div className="item_icon">
                        <i className="fas fa-dog-leashed"></i>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title mb-0">Companionship</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="iconbox_item iconbox_lefticon">
                      <div className="item_icon">
                        <i className="fas fa-tennis-ball"></i>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title mb-0">Walks and Play Time</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="iconbox_item iconbox_lefticon">
                      <div className="item_icon">
                        <i className="fas fa-bone"></i>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title mb-0">
                          Fresh water and food
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="iconbox_item iconbox_lefticon">
                      <div className="item_icon">
                        <i className="fas fa-hands-heart"></i>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title mb-0">
                          Lots of love and snuggles
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-lg-6">
              <div className="services_image_carousel zoom-gallery">
                <Swiper {...swiperOptions} className="common_carousel_3col">
                  <SwiperSlide className="carousel_item">
                    <Link
                      className="popup_image"
                      href="assets/images/service/service_img_7.jpg"
                    >
                      <Image
                        width={303}
                        height={430}
                        src="/images/service/service_img_7.jpg"
                        alt="Pet Service"
                      />
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="carousel_item">
                    <Link
                      className="popup_image"
                      href="assets/images/service/service_img_8.jpg"
                    >
                      <Image
                        width={303}
                        height={430}
                        src="/images/service/service_img_8.jpg"
                        alt="Pet Service"
                      />
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="carousel_item">
                    <Link
                      className="popup_image"
                      href="assets/images/service/service_img_9.jpg"
                    >
                      <Image
                        width={303}
                        height={430}
                        src="/images/service/service_img_9.jpg"
                        alt="Pet Service"
                      />
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="carousel_item">
                    <Link
                      className="popup_image"
                      href="assets/images/service/service_img_7.jpg"
                    >
                      <Image
                        width={303}
                        height={430}
                        src="/images/service/service_img_7.jpg"
                        alt="Pet Service"
                      />
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="carousel_item">
                    <Link
                      className="popup_image"
                      href="assets/images/service/service_img_8.jpg"
                    >
                      <Image
                        width={303}
                        height={430}
                        src="/images/service/service_img_8.jpg"
                        alt="Pet Service"
                      />
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide className="carousel_item">
                    <Link
                      className="popup_image"
                      href="assets/images/service/service_img_9.jpg"
                    >
                      <Image
                        width={303}
                        height={430}
                        src="/images/service/service_img_9.jpg"
                        alt="Pet Service"
                      />
                    </Link>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ServiceDetailsSec1;
