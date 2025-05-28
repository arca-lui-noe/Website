import Image from "next/image";
import Link from "next/link"

const Gallery = () => {
  return (
  <>

  <section className="gallery_section section_space_lg decoration_wrap">
    <div className="container">
      <div className="section_title text-center">
        <h2 className="title_text"><span className="sub_title">favorite pets</span> Our Gallery</h2>
        <p className="mb-0">Tristique nulla aliquet enim tortor at auctor urna nunc.</p>
      </div>

      <div className="row">
        <div className="col col-lg-4 col-md-6 col-sm-6">
          <div className="gallery_item">
            <div className="item_image"><Image src="/images/gallery/gallery_img_1.jpg" alt="Pet Image"/></div>
            <Link className="item_content" href="#!">
              <span className="d-block"><small>SERVICES</small></span>
              <strong className="d-block">Cat Grooming</strong>
            </Link>
          </div>
        </div>

        <div className="col col-lg-4 col-md-6 col-sm-6">
          <div className="gallery_item">
            <div className="item_image"><Image src="/images/gallery/gallery_img_2.jpg" alt="Pet Image"/></div>
            <Link className="item_content" href="#!">
              <span className="d-block"><small>SERVICES</small></span>
              <strong className="d-block">Cat Grooming</strong>
            </Link>
          </div>
        </div>

        <div className="col col-lg-4 col-md-6 col-sm-6">
          <div className="gallery_item">
            <div className="item_image"><Image src="/images/gallery/gallery_img_3.jpg" alt="Pet Image"/></div>
            <Link className="item_content" href="#!">
              <span className="d-block"><small>SERVICES</small></span>
              <strong className="d-block">Cat Grooming</strong>
            </Link>
          </div>
        </div>

        <div className="col col-lg-4 col-md-6 col-sm-6">
          <div className="gallery_item">
            <div className="item_image"><Image src="/images/gallery/gallery_img_4.jpg" alt="Pet Image"/></div>
            <Link className="item_content" href="#!">
              <span className="d-block"><small>SERVICES</small></span>
              <strong className="d-block">Cat Grooming</strong>
            </Link>
          </div>
        </div>

        <div className="col col-lg-4 col-md-6 col-sm-6">
          <div className="gallery_item">
            <div className="item_image"><Image src="/images/gallery/gallery_img_5.jpg" alt="Pet Image"/></div>
            <Link className="item_content" href="#!">
              <span className="d-block"><small>SERVICES</small></span>
              <strong className="d-block">Cat Grooming</strong>
            </Link>
          </div>
        </div>

        <div className="col col-lg-4 col-md-6 col-sm-6">
          <div className="gallery_item">
            <div className="item_image"><Image src="/images/gallery/gallery_img_6.jpg" alt="Pet Image"/></div>
            <Link className="item_content" href="#!">
              <span className="d-block"><small>SERVICES</small></span>
              <strong className="d-block">Cat Grooming</strong>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="decoration_item shape_dot_1">
      <Image src="/images/shape/shape_dot_group_2.svg" alt="Colorful Dots"/>
    </div>
  </section>

  </>
  );
};
export default Gallery
