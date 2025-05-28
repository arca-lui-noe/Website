import Image from "next/image";
import Link from "next/link";

const ServiceDetailsSec3 = () => {
  return (
  <>
    <section className="about_section section_space_lg decoration_wrap pb-0">
      <div className="container">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col col-lg-5">
            <div className="section_title">
              <h2 className="title_text">Welcome To Our Family</h2>
              <p>Tristique nulla aliquet enim tortor at auctor urna nunc. Massa enim nec dui nunc mattis enim ut tellus. Auctor augue mauris augue neque gravida in fermentum</p>
            </div>

            <ul className="icon_list unorder_list_block mb-0">
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Bathing – wash and fluff dry</span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Pawdicure – nail trimming and filing</span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span>Breed specific styling, cutting and stripping</span>
              </li>
              <li>
                <i className="fas fa-check-circle"></i>
                <span>De-matting and detangling</span>
              </li>
            </ul>
          </div>

          <div className="col col-lg-6">
            <div className="about_image_1">
              <div className="image_1 p-0"><Image src="/images/about/about_img_7.jpg" alt="Pet Doctor"/></div>
              <div className="image_2"><Image src="/images/about/about_img_8.jpg" alt="Cat Image"/></div>
              <div className="image_3"><Image src="/images/about/about_img_9.jpg" alt="Dog Image"/></div>
              <div className="shape_img_1"><Image src="/images/shape/shape_circle_1.svg" alt="Yellow Circle"/></div>
              <div className="shape_img_2"><Image src="/images/shape/shape_circle_3.svg" alt="Yellow Circle"/></div>
            </div>
          </div>

        </div>
      </div>

      <div className="decoration_item shape_dot_1"><Image src="/images/shape/shape_dot_group_1.svg" alt="Colorful Dots"/></div>
    </section>
  </>
  );
};
export default ServiceDetailsSec3
