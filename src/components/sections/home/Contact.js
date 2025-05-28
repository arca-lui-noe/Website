import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <section className="contact_section bg_gray section_space_lg decoration_wrap">
        <div className="container">
          <div className="section_title text-center">
            <h2 className="title_text">
              {" "}
              <span className="sub_title">Our Contacts</span> Contacts{" "}
            </h2>
            <p className="mb-0">
              Massa enim nec dui nunc mattis enim ut tellus
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col col-lg-3 col-md-6 col-sm-6">
              <div className="iconbox_item iconbox_overicon">
                <div className="item_icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="item_content">
                  <h3 className="item_title">Phone</h3>
                  <ul className="item_info_list unorder_list_block">
                    <li>(913) 756-3126</li>
                    <li>(921) 557-1203</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col col-lg-3 col-md-6 col-sm-6">
              <div className="iconbox_item iconbox_overicon">
                <div className="item_icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="item_content">
                  <h3 className="item_title">Email</h3>
                  <ul className="item_info_list unorder_list_block">
                    <li>petopia@example.com</li>
                    <li>petopia@email.com</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col col-lg-3 col-md-6 col-sm-6">
              <div className="iconbox_item iconbox_overicon">
                <div className="item_icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="item_content">
                  <h3 className="item_title">Address</h3>
                  <ul className="item_info_list unorder_list_block">
                    <li>17 Parkman Place, 2122</li>
                    <li>United States</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col col-lg-3 col-md-6 col-sm-6">
              <div className="iconbox_item iconbox_overicon">
                <div className="item_icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="item_content">
                  <h3 className="item_title">Open Hours</h3>
                  <ul className="item_info_list unorder_list_block">
                    <li>Mon - Fri: 7am - 6pm</li>
                    <li>Saturday: 9am - 4pm</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="decoration_item shape_image_1">
          <Image
            width={130}
            height={90}
            src="/images/shape/shape_purr.svg"
            alt="Pet Purr"
          />
        </div>
        <div className="decoration_item shape_image_2">
          <Image
            width={210}
            height={250}
            src="/images/shape/shape_cat.svg"
            alt="Cat"
          />
        </div>
      </section>
    </>
  );
};
export default Contact;
