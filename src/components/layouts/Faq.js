import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

const Faq = () => {
  const [isActive, setIsActive] = useState({
      status: false,
      key: 1,
  })

  const handleClick = (key) => {
      if (isActive.key === key) {
          setIsActive({
              status: false,
          })
      } else {
          setIsActive({
              status: true,
              key,
          })
      }
  }
  return (
    <>

  <section className="about_section section_space_lg pb-0 decoration_wrap">
    <div className="container">
      <div className="row align-items-center justify-content-lg-between">
        <div className="col col-lg-5">
          <div className="section_title">
            <h2 className="title_text">Welcome To Our Family</h2>
            <p>Tristique nulla aliquet enim tortor at auctor urna nunc. Massa enim nec dui nunc mattis enim ut tellus. Auctor augue mauris augue neque gravida in fermentum</p>
          </div>
          <div className="accordion faq-box-style1" id="faq_accordion">
            <ul className="accordion-box">
              {/* Block */}
              <li className="accordion block">
                <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>
                  How Petopia Pet Care Started
                  <div className="icon far fa-angle-down"></div>
                </div>
                <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                    <div className="text">Vitae et leo duis ut diam. Amet venenatis urna cursus eget nunc scelerisque. Nec ultrices dui sapien eget. Lectus magna fringilla urna porttitor rhoncus dolor purus</div>
                  </div>
                </div>
              </li>
              {/* Block */}
              <li className="accordion block">
                <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>
                  Mission Statement
                  <div className="icon far fa-angle-down"></div>
                </div>
                <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                    <div className="text">Vitae et leo duis ut diam. Amet venenatis urna cursus eget nunc scelerisque. Nec ultrices dui sapien eget. Lectus magna fringilla urna porttitor rhoncus dolor purus</div>
                  </div>
                </div>
              </li>
              {/* Block */}
              <li className="accordion block">
                <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>
                  Value Added Services
                  <div className="icon far fa-angle-down"></div>
                </div>
                <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                    <div className="text">Vitae et leo duis ut diam. Amet venenatis urna cursus eget nunc scelerisque. Nec ultrices dui sapien eget. Lectus magna fringilla urna porttitor rhoncus dolor purus</div>
                  </div>
                </div>
              </li>
              {/* Block */}
              <li className="accordion block mb-0">
                <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(4)}>
                  Social Responsability
                  <div className="icon far fa-angle-down"></div>
                </div>
                <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                  <div className="content">
                    <div className="text">Vitae et leo duis ut diam. Amet venenatis urna cursus eget nunc scelerisque. Nec ultrices dui sapien eget. Lectus magna fringilla urna porttitor rhoncus dolor purus</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col col-lg-6">
          <div className="about_image_1">
            <div className="image_1 p-0">
              <Image src="/images/about/about_img_1.jpg" alt="Pet Doctor"/>
            </div>
            <div className="image_2">
              <Image src="/images/about/about_img_2.jpg" alt="Cat Image"/>
            </div>
            <div className="image_3">
              <Image src="/images/about/about_img_3.jpg" alt="Dog Image"/>
            </div>
            <div className="shape_img_1">
              <Image src="/images/shape/shape_circle_1.svg" alt="Yellow Circle"/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="decoration_item shape_dot_1">
      <Image src="/images/shape/shape_dot_group_1.svg" alt="Colorful Dots"/>
    </div>
  </section>

    </>
  );
};
export default Faq
