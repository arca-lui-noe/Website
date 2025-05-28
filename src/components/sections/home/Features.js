import Image from "next/image";
import Link from "next/link";

const Features = () => {
  return (
  <>

  <section className="feature_service decoration_wrap" style={{ backgroundImage: 'url(images/background/shape_bg_2.png)' }}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col col-lg-5">
          <div className="feature_image">
            <div className="image_wrap">
              <Image src="/images/feature/feature_img_1.jpg" alt="Pet Grooming Service Image"/>
            </div>
            <div className="shape_image_1">
              <Image src="/images/shape/shape_butterfly.svg" alt="Butterfly Shape"/>
            </div>
          </div>
        </div>
        <div className="col col-lg-4">
          <div className="feature_content">
            <h2 className="item_title">Pet Grooming Service</h2>
            <ul className="icon_list unorder_list_block">
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
            <Link className="btn btn_primary" href="/services/asd"> <i className="fas fa-paw"></i> Get Service </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="decoration_item shape_image_2">
      <Image src="/images/shape/shape_group_1.svg" alt="Pet Tools Box"/>
    </div>
    <div className="decoration_item decoration_image_1">
      <Image src="/images/feature/feature_img_2.jpg" alt="Pet Grooming Service Image"/>
    </div>
    <div className="decoration_item decoration_image_2">
      <Image src="/images/feature/feature_img_3.jpg" alt="Pet Grooming Service Image"/>
    </div>
  </section>

  </>
  );
};
export default Features
