import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

const Banner2 = async () => {
  const t = await getTranslations("Home");

  return (
    <>
      {/* style={{ backgroundImage: 'url(images/overlay/shapes_overlay_2.svg)' }} */}
      <section
        className="banner_section banner_style_2 decoration_wrap"
        style={{ backgroundImage: "url('/images/banner/shape_banner_bg.svg')" }}
      >
        <div className="section_overlay"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col order-last col-lg-6">
              <div className="banner_image">
                <Image
                  width={670}
                  height={670}
                  src="/images/banner/dogs_img_1.png"
                  alt="Pet Dogs Image"
                />
              </div>
            </div>
            <div className="col col-lg-6">
              <div className="banner_content">
                <h1 className="banner_title">
                  <span className="banner_sub_title">{t("heading")}</span> {t("heading")}
                </h1>
                <p className="banner_description">
                  All offers are subject to availability. Ut tortor pretium viverra suspendisse
                  potenti nullam ac tortor vitae. Consectetur a erat nam at. Potenti nullam ac
                  tortor vitae purus faucibus ornare.
                </p>
                <div className="banner_policy_items row">
                  <div className="col">
                    <div className="iconbox_item iconbox_lefticon">
                      <div className="item_icon">
                        <i className="fas fa-shipping-fast"></i>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title mb-0">Trust & Safety</h3>
                        <p className="mb-0">Velit euismod pellentes</p>
                      </div>
                      <Link className="item_global_link" href="/services"></Link>
                    </div>
                  </div>
                  <div className="col">
                    <div className="iconbox_item iconbox_lefticon">
                      <div className="item_icon">
                        <i className="fas fa-badge-percent"></i>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title mb-0">Discounts</h3>
                        <p className="mb-0">Bibendum ut tristique</p>
                      </div>
                      <Link className="item_global_link" href="/services"></Link>
                    </div>
                  </div>
                  <div className="col">
                    <div className="iconbox_item iconbox_lefticon">
                      <div className="item_icon">
                        <i className="fas fa-user-headset"></i>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title mb-0">Support</h3>
                        <p className="mb-0">Egestas quis ipsum velit</p>
                      </div>
                      <Link className="item_global_link" href="/services"></Link>
                    </div>
                  </div>
                  <div className="col">
                    <div className="iconbox_item iconbox_lefticon">
                      <div className="item_icon">
                        <i className="fas fa-shield-check"></i>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title mb-0">Guarantee</h3>
                        <p className="mb-0">Velit euismod pellentes</p>
                      </div>
                      <Link className="item_global_link" href="/services"></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Banner2;
