import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <>
    <section className="about_section section_space_lg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col order-last col-lg-6">
            <div className="about_image_2">
              <Image src="/images/about/about_img_6.jpg" alt="Pet Care Image"/>
              <div className="experience_years" style={{ backgroundImage: 'url(/images/shape/shape_circle_1.svg)' }}>
                <strong>20+</strong>
                <span>Years Experience</span>
              </div>
            </div>
          </div>
          <div className="col col-lg-6">
            <div className="about_content_2">
              <div className="section_title">
                <h2 className="title_text"><span className="sub_title">Our Services</span> About Petopia</h2>
                <p className="mb-0">Justo eget magna fermentum iaculis eu non diam phasellus. Eu lobortis elementum nibh tellus molestie nunc. Ullamcorper eget nulla facilisi etiam dignissim diam. Eget felis eget nunc lobortis mattis </p>
              </div>
              <ul className="icon_list unorder_list_block">
                <li> <i className="fas fa-bone"></i> <span>Adipiscing elit pellentesque</span></li>
                <li> <i className="fas fa-bone"></i> <span>Ornare euismod elementum</span></li>
                <li> <i className="fas fa-bone"></i> <span>Posuere ac ut consequat</span></li>
                <li> <i className="fas fa-bone"></i> <span>Sed turpis tinci aliquet risus</span></li>
              </ul>
              <Link className="btn btn_primary" href="/services"><i className="fas fa-paw"></i> Our Service</Link>
            </div>
          </div>
        </div>
      </div>
    </section>


    </>
  );
};AboutUs
export default AboutUs
