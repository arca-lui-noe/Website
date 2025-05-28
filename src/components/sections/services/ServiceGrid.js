import Image from "next/image";
import Link from "next/link";

const ServiceGrid = () => {
  return (
    <>
      <section
        className="service_section section_space_lg"
        style={{ backgroundImage: "url(images/overlay/shapes_overlay_6.svg)" }}
      >
        <div className="container">
          <div className="section_title text-center">
            <h2 className="title_text mb-0">
              <span className="sub_title">Our Services</span>
              All Pet Care Services
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col col-lg-4 col-sm-6">
              <div
                className="service_item"
                style={{
                  backgroundImage: "url(images/shape/shape_path_1.svg)",
                }}
              >
                <div className="title_wrap">
                  <h3 className="item_title mb-0">Walking & Sitting</h3>
                </div>
                <p>
                  Ut tortor pretium viverra suspendisse potenti nullam ac tortor
                  vitae eget dolor morbi{" "}
                </p>

                <Link className="btn_unfill" href="/services/asd">
                  <span>Get Service</span>
                  <i className="far fa-long-arrow-right"></i>
                </Link>
                <div className="decoration_image">
                  <Image
                    width={30}
                    height={30}
                    src="/images/shape/shape_paws.svg"
                    alt="Pet Paws"
                  />
                </div>
              </div>
            </div>

            <div className="col col-lg-4 col-sm-6">
              <div
                className="service_item"
                style={{
                  backgroundImage: "url(images/shape/shape_path_1.svg)",
                }}
              >
                <div className="title_wrap">
                  <div className="item_icon">
                    <Image
                      width={30}
                      height={30}
                      src="/images/icon/icon_pet_grooming.svg"
                      alt="Pet Grooming"
                    />
                  </div>
                  <h3 className="item_title mb-0">Pet Grooming</h3>
                </div>
                <p>
                  Et odio pellentesque diam volutpat commodo sed egestas egestas
                  pellentesque nec nam{" "}
                </p>
                <div className="item_price">
                  <span>From $39 / complex</span>
                </div>
                <Link className="btn_unfill" href="/services/asd">
                  <span>Get Service</span>
                  <i className="far fa-long-arrow-right"></i>
                </Link>
                <div className="decoration_image">
                  <Image
                    width={30}
                    height={30}
                    src="/images/shape/shape_paws.svg"
                    alt="Pet Paws"
                  />
                </div>
              </div>
            </div>

            <div className="col col-lg-4 col-sm-6">
              <div
                className="service_item"
                style={{
                  backgroundImage: "url(images/shape/shape_path_1.svg)",
                }}
              >
                <div className="title_wrap">
                  <div className="item_icon">
                    <Image
                      width={30}
                      height={30}
                      src="/images/icon/icon_pet_training.svg"
                      alt="Pet Training"
                    />
                  </div>
                  <h3 className="item_title mb-0">Pet Training</h3>
                </div>
                <p>
                  Aliquam ut porttitor leo a diam sollicitudin tempor sit amet
                  est placerat{" "}
                </p>
                <div className="item_price">
                  <span>From $27 / hour</span>
                </div>
                <Link className="btn_unfill" href="/services/asd">
                  <span>Get Service</span>
                  <i className="far fa-long-arrow-right"></i>
                </Link>
                <div className="decoration_image">
                  <Image
                    width={30}
                    height={30}
                    src="/images/shape/shape_paws.svg"
                    alt="Pet Paws"
                  />
                </div>
              </div>
            </div>

            <div className="col col-lg-4 col-sm-6">
              <div
                className="service_item"
                style={{
                  backgroundImage: "url(images/shape/shape_path_1.svg)",
                }}
              >
                <div className="title_wrap">
                  <div className="item_icon">
                    <Image
                      width={30}
                      height={30}
                      src="/images/icon/icon_pet_taxi.svg"
                      alt="Pet Taxi"
                    />
                  </div>
                  <h3 className="item_title mb-0">Pet Taxi</h3>
                </div>
                <p>
                  Maecenas ultricies mi eget mauris pharetra et ultrices
                  consectetur adipiscing elit
                </p>
                <div className="item_price">
                  <span>From $22 / trip</span>
                </div>
                <Link className="btn_unfill" href="/services/asd">
                  <span>Get Service</span>
                  <i className="far fa-long-arrow-right"></i>
                </Link>
                <div className="decoration_image">
                  <Image
                    width={30}
                    height={30}
                    src="/images/shape/shape_paws.svg"
                    alt="Pet Paws"
                  />
                </div>
              </div>
            </div>

            <div className="col col-lg-4 col-sm-6">
              <div
                className="service_item"
                style={{
                  backgroundImage: "url(images/shape/shape_path_1.svg)",
                }}
              >
                <div className="title_wrap">
                  <div className="item_icon">
                    <Image
                      width={30}
                      height={30}
                      src="/images/icon/icon_pet_health.svg"
                      alt="Pet Health & Wellness"
                    />
                  </div>
                  <h3 className="item_title mb-0">Health & Wellness</h3>
                </div>
                <p>
                  Amet porttitor eget dolor morbi non arcu risus quis varius
                  blandit aliquam etiam
                </p>
                <div className="item_price">
                  <span>From $39/ visit</span>
                </div>
                <Link className="btn_unfill" href="/services/asd">
                  <span>Get Service</span>
                  <i className="far fa-long-arrow-right"></i>
                </Link>
                <div className="decoration_image">
                  <Image
                    width={30}
                    height={30}
                    src="/images/shape/shape_paws.svg"
                    alt="Pet Paws"
                  />
                </div>
              </div>
            </div>

            <div className="col col-lg-4 col-sm-6">
              <div
                className="service_item"
                style={{
                  backgroundImage: "url(images/shape/shape_path_1.svg)",
                }}
              >
                <div className="title_wrap">
                  <div className="item_icon">
                    <Image
                      width={30}
                      height={30}
                      src="/images/icon/icon_pet_hotel.svg"
                      alt="Pet Hotel"
                    />
                  </div>
                  <h3 className="item_title mb-0">Pet Hotel</h3>
                </div>
                <p>
                  Turpis massa sed elementum tempus egestas sed sed risus
                  aliquam urna cursus eget n
                </p>
                <div className="item_price">
                  <span>From $15 / night</span>
                </div>
                <Link className="btn_unfill" href="/services/asd">
                  <span>Get Service</span>
                  <i className="far fa-long-arrow-right"></i>
                </Link>
                <div className="decoration_image">
                  <Image
                    width={30}
                    height={30}
                    src="/images/shape/shape_paws.svg"
                    alt="Pet Paws"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ServiceGrid;
