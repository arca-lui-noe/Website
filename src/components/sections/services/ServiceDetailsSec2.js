import Image from "next/image";
import Link from "next/link";

const ServiceDetailsSec2 = () => {
  return (
    <>
      <section
        className="service_section bg_gray section_space_lg"
        style={{ backgroundImage: "url(images/shape/shape_paws_bg_2.svg)" }}
      >
        <div className="container">
          <div className="section_title text-center mb-2">
            <div className="row justify-content-center">
              <div className="col col-lg-5">
                <h2 className="title_text">
                  <span className="sub_title">Our Prices</span>
                  Pet Services + Rates
                </h2>
                <p className="mb-0">
                  We can fully customize your pet sitting schedule to fit your
                  pet’s needs. Pick and choose what visits work best for you and
                  your family
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col col-lg-6">
              <div className="services_price_items_wrap">
                <div className="service_price_item">
                  <div className="item_image">
                    <Image
                      width={80}
                      height={80}
                      src="/images/service/service_img_1.jpg"
                      alt="Pet Care Service"
                    />
                  </div>
                  <div className="item_content">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="service_time">
                        <i className="fas fa-clock"></i> 15 minute visit
                      </div>
                      <div className="item_price">
                        <span>$22.00</span>
                      </div>
                    </div>
                    <h3 className="item_title mb-0">
                      1 x Visit per day, small pet visit can be added per quote
                    </h3>
                  </div>
                  <Link
                    className="item_global_link"
                    href="/services/asd"
                  ></Link>
                </div>

                <div className="service_price_item">
                  <div className="item_image">
                    <Image
                      width={80}
                      height={80}
                      src="/images/service/service_img_2.jpg"
                      alt="Pet Care Service"
                    />
                  </div>
                  <div className="item_content">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="service_time">
                        <i className="fas fa-clock"></i> 80 minute visit
                      </div>
                      <div className="item_price">
                        <span>$29.00</span>
                      </div>
                    </div>
                    <h3 className="item_title mb-0">
                      A 12-hour stay, including the evening visit and morning
                      visit
                    </h3>
                  </div>
                  <Link
                    className="item_global_link"
                    href="/services/asd"
                  ></Link>
                </div>

                <div className="service_price_item">
                  <div className="item_image">
                    <Image
                      width={80}
                      height={80}
                      src="/images/service/service_img_3.jpg"
                      alt="Pet Care Service"
                    />
                  </div>
                  <div className="item_content">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="service_time">
                        <i className="fas fa-clock"></i> 45 minute visit
                      </div>
                      <div className="item_price">
                        <span>$36.00</span>
                      </div>
                    </div>
                    <h3 className="item_title mb-0">
                      Drop-off and pick-up times are flexible. $10 each
                      additional dog.
                    </h3>
                  </div>
                  <Link
                    className="item_global_link"
                    href="/services/asd"
                  ></Link>
                </div>
              </div>
            </div>

            <div className="col col-lg-6">
              <div className="services_price_items_wrap">
                <div className="service_price_item">
                  <div className="item_image">
                    <Image
                      width={80}
                      height={80}
                      src="/images/service/service_img_4.jpg"
                      alt="Pet Care Service"
                    />
                  </div>
                  <div className="item_content">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="service_time">
                        <i className="fas fa-clock"></i> 29 minute visit
                      </div>
                      <div className="item_price">
                        <span>$22.00</span>
                      </div>
                    </div>
                    <h3 className="item_title mb-0">
                      1 x Visit per day, small pet visit can be added per quote
                    </h3>
                  </div>
                  <Link
                    className="item_global_link"
                    href="/services/asd"
                  ></Link>
                </div>

                <div className="service_price_item">
                  <div className="item_image">
                    <Image
                      width={80}
                      height={80}
                      src="/images/service/service_img_5.jpg"
                      alt="Pet Care Service"
                    />
                  </div>
                  <div className="item_content">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="service_time">
                        <i className="fas fa-clock"></i> 65 Overnight Pet
                        Sitting
                      </div>
                      <div className="item_price">
                        <span>$29.00</span>
                      </div>
                    </div>
                    <h3 className="item_title mb-0">
                      A 12-hour stay, including the evening visit and morning
                      visit
                    </h3>
                  </div>
                  <Link
                    className="item_global_link"
                    href="/services/asd"
                  ></Link>
                </div>

                <div className="service_price_item">
                  <div className="item_image">
                    <Image
                      width={80}
                      height={80}
                      src="/images/service/service_img_6.jpg"
                      alt="Pet Care Service"
                    />
                  </div>
                  <div className="item_content">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="service_time">
                        <i className="fas fa-clock"></i> 40 Private Boarding
                      </div>
                      <div className="item_price">
                        <span>$36.00</span>
                      </div>
                    </div>
                    <h3 className="item_title mb-0">
                      Drop-off and pick-up times are flexible. $10 each
                      additional dog.
                    </h3>
                  </div>
                  <Link
                    className="item_global_link"
                    href="/services/asd"
                  ></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ServiceDetailsSec2;
