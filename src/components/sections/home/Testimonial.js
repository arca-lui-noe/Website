"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 4,
  spaceBetween: 0,
  freeMode: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: true,
  loop: true,
  breakpoints:{
    320: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    767: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    991: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    1199: {
      slidesPerView: 2,
      freeMode: false,
      centeredSlides: false,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1500: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  }
};
const Testimonial = () => {
  return (
  <>
  <section className="testimonial_section section_space_lg">
    <div className="container">
      <div className="section_title mb-0">
        <h2 className="title_text mb-0">
          <span className="sub_title">Our Reviews</span>
          What People Say
        </h2>
      </div>
    </div>
    <div className="testimonial_carousel">
      <Swiper {...swiperOptions} className="common_carousel_3col">
        {/* Services Block */}
        <SwiperSlide className="carousel_item">
          <div className="testimonial_item">
            <div className="testimonial_admin">
              <div className="admin_thumbnail"><Image src="/images/meta/thumbnail_img_1.png" alt="Pet Thumbnail Image"/></div>
              <div className="admin_info">
                <h4 className="admin_name">Home Visits</h4>
                <span className="admin_designation">Lucas Simões</span>
              </div>
            </div>
            <ul className="rating_star">
              <li><i className="fas fa-star"></i></li>
              <li><i className="fas fa-star"></i></li>
              <li><i className="fas fa-star"></i></li>
              <li><i className="fas fa-star"></i></li>
              <li><i className="fas fa-star"></i></li>
            </ul>
            <p className="mb-0">Tristique nulla aliquet enim tortor at auctor urna nunc. Massa enim nec dui nunc mattis enim ut tellus</p>
            <span className="quote_icon"><i className="fas fa-quote-right"></i></span>
          </div>
        </SwiperSlide>
        {/* Services Block */}
        <SwiperSlide className="carousel_item">
          <div className="testimonial_item">
            <div className="testimonial_admin">
              <div className="admin_thumbnail"><Image src="/images/meta/thumbnail_img_2.png" alt="Pet Thumbnail Image"/></div>
              <div className="admin_info">
                <h4 className="admin_name">Dog Boarding</h4>
                <span className="admin_designation">Wilhelm Dowall</span>
              </div>
            </div>
            <ul className="rating_star">
              <li><i className="fas fa-star"></i></li>
              <li><i className="fas fa-star"></i></li>
              <li><i className="fas fa-star"></i></li>
              <li><i className="fas fa-star"></i></li>
              <li><i className="fas fa-star"></i></li>
            </ul>
            <p className="mb-0">Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Tellus in hac habitasse platea dictumst </p>
            <span className="quote_icon"><i className="fas fa-quote-right"></i></span>
          </div>
        </SwiperSlide>
        {/* Services Block */}
        <SwiperSlide className="carousel_item">
          <div className="testimonial_item">
            <div className="testimonial_admin">
              <div className="admin_thumbnail"><Image src="/images/meta/thumbnail_img_3.png" alt="Pet Thumbnail Image"/></div>
              <div className="admin_info">
                <h4 className="admin_name">Pet Training</h4>
                <span className="admin_designation">Lara Madrigal</span>
              </div>
            </div>
            <ul className="rating_star">
              <li><i className="fas fa-star"></i></li>
              <li><i className="fas fa-star"></i></li>
              <li><i className="fas fa-star"></i></li>
              <li><i className="fas fa-star"></i></li>
              <li><i className="fas fa-star"></i></li>
            </ul>
            <p className="mb-0">Ut tortor pretium viverra suspendisse potenti nullam. Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam</p>
            <span className="quote_icon"><i className="fas fa-quote-right"></i></span>
          </div>
        </SwiperSlide>
        {/* Services Block */}
        <SwiperSlide className="carousel_item">
          <div className="testimonial_item">
            <div className="testimonial_admin">
              <div className="admin_thumbnail"><Image src="/images/meta/thumbnail_img_4.png" alt="Pet Thumbnail Image"/></div>
              <div className="admin_info">
                <h4 className="admin_name">Home Visit</h4>
                <span className="admin_designation">Lara Madrigal</span>
              </div>
            </div>
            <ul className="rating_star">
              <li><i className="fas fa-star"></i></li>
              <li><i className="fas fa-star"></i></li>
              <li><i className="fas fa-star"></i></li>
              <li><i className="fas fa-star"></i></li>
              <li><i className="fas fa-star"></i></li>
            </ul>
            <p className="mb-0">Ut tortor pretium viverra suspendisse potenti nullam. Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam</p>
            <span className="quote_icon"><i className="fas fa-quote-right"></i></span>
          </div>
        </SwiperSlide>
        {/* Services Block */}
        <SwiperSlide className="carousel_item">
          <div className="testimonial_item">
            <div className="testimonial_admin">
              <div className="admin_thumbnail"><Image src="/images/meta/thumbnail_img_1.png" alt="Pet Thumbnail Image"/></div>
              <div className="admin_info">
                <h4 className="admin_name">Home Visits</h4>
                <span className="admin_designation">Lucas Simões</span>
              </div>
            </div>
            <ul className="rating_star">
              <li><i className="fas fa-star"></i></li>
              <li><i className="fas fa-star"></i></li>
              <li><i className="fas fa-star"></i></li>
              <li><i className="fas fa-star"></i></li>
              <li><i className="fas fa-star"></i></li>
            </ul>
            <p className="mb-0">Tristique nulla aliquet enim tortor at auctor urna nunc. Massa enim nec dui nunc mattis enim ut tellus</p>
            <span className="quote_icon"><i className="fas fa-quote-right"></i></span>
          </div>
        </SwiperSlide>
        {/* Services Block */}
        <SwiperSlide className="carousel_item">
          <div className="testimonial_item">
            <div className="testimonial_admin">
              <div className="admin_thumbnail"><Image src="/images/meta/thumbnail_img_2.png" alt="Pet Thumbnail Image"/></div>
              <div className="admin_info">
                <h4 className="admin_name">Dog Boarding</h4>
                <span className="admin_designation">Wilhelm Dowall</span>
              </div>
            </div>
            <ul className="rating_star">
              <li><i className="fas fa-star"></i></li>
              <li><i className="fas fa-star"></i></li>
              <li><i className="fas fa-star"></i></li>
              <li><i className="fas fa-star"></i></li>
              <li><i className="fas fa-star"></i></li>
            </ul>
            <p className="mb-0">Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Tellus in hac habitasse platea dictumst </p>
            <span className="quote_icon"><i className="fas fa-quote-right"></i></span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
  </>
  );
};
export default Testimonial
