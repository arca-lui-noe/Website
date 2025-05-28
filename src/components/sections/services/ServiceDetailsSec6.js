import Image from "next/image";
import Link from "next/link";

const ServiceDetailsSec6 = () => {
  return (
    <>
      <section className="service_section section_space_lg pb-0">
        <div className="container">
          <div className="section_title">
            <h2 className="title_text mb-0">Other Services</h2>
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
                <Link className="btn_unfill" href="service_details">
                  {" "}
                  <span>Get Service</span>{" "}
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
                <Link className="btn_unfill" href="service_details">
                  {" "}
                  <span>Get Service</span>{" "}
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
                      src="/images/icon/icon_pet_walking.svg"
                      alt="Pet Walking"
                    />
                  </div>
                  <h3 className="item_title mb-0">Walking & Sitting</h3>
                </div>
                <p>
                  Ut tortor pretium viverra suspendisse potenti nullam ac tortor
                  vitae eget dolor morbi{" "}
                </p>
                <div className="item_price">
                  <span>From $15 / hour</span>
                </div>
                <Link className="btn_unfill" href="service_details">
                  {" "}
                  <span>Get Service</span>{" "}
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
export default ServiceDetailsSec6;
