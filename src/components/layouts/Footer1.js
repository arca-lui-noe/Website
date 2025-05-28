import Link from "next/link";
import DynamicLogo from "./DynamicLogo";

// Javítás: a locale paraméter megfelelő destrukturálása
export default function Footer1({ locale }) {
  // Aktuális év meghatározása
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer_section">
        <div className="footer_widget_area section_space_lg">
          <div className="container">
            <div className="row justify-content-lg-between">
              <div className="col-xl-3 col-sm-6">
                <div className="footer_widget footer_about mb50-lg">
                  <div className="site_logo">
                    <Link href={`/${locale}`}>
                      <DynamicLogo locale={locale} />
                    </Link>
                  </div>
                  <p>
                    Tristique nulla aliquet enim tortor at auctor urna nunc.
                    Massa enim nec dui nunc mattis enim ut tellus. Sed ut
                    perspiciatis unde ...
                  </p>
                  <div className="footer_hotline iconbox_item iconbox_lefticon">
                    <div className="item_icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">
                        <Link href="tel:(913)756-3126">(913) 756-3126</Link>
                      </h3>
                      <p className="mb-0">Got Questions? Call us 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="footer_widget mb50-lg">
                  <h3 className="footer_widget_title">Working Hours</h3>
                  <div className="office_hour">
                    <ul className="unorder_list_block">
                      <li>
                        <span>Mon - Fri:</span>
                        <span>7am – 6pm</span>
                      </li>
                      <li>
                        <span>Saturday:</span>
                        <span>9am – 4pm</span>
                      </li>
                      <li>
                        <span>Sunday:</span>
                        <span>
                          <strong>Closed</strong>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-sm-6">
                <div className="footer_widget mb50-sm">
                  <h3 className="footer_widget_title">Useful Links</h3>
                  <div className="page_list">
                    <ul className="unorder_list_block">
                      <li>
                        <Link href={`/${locale}`}>
                          <i className="fas fa-circle"></i>Home
                        </Link>
                      </li>
                      <li>
                        <Link href={`/${locale}/about`}>
                          <i className="fas fa-circle"></i>About Us
                        </Link>
                      </li>
                      <li>
                        <Link href={`/${locale}/about`}>
                          <i className="fas fa-circle"></i>How we started
                        </Link>
                      </li>
                      <li>
                        <Link href={`/${locale}/services`}>
                          <i className="fas fa-circle"></i>Services
                        </Link>
                      </li>
                       <li>
                        <Link href={`/${locale}/blog`}>
                          <i className="fas fa-circle"></i>Blogs
                        </Link>
                      </li>
                    </ul>
                    
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="footer_widget">
                  <h3 className="footer_widget_title">Newsletter</h3>
                  <form action="#">
                    <div className="footer_newslatter">
                      <p>
                        Be first in the queue! Get our latest news straight to
                        your inbox.
                      </p>
                      <div className="form_item">
                        <input
                          type="email"
                          name="newsletter-email"
                          placeholder="Email"
                          required
                        />
                        <button type="submit">
                          <i className="far fa-arrow-right"></i>
                        </button>
                      </div>
                      <div className="form_item mt-3">
                        <label className="d-flex align-items-start">
                          <input
                            type="checkbox"
                            name="gdpr-consent"
                            required
                            className="me-2 mt-1"
                          />
                          <span className="small">
                            I agree to the{" "}
                            <Link href={`/${locale}/terms`} className="text-decoration-underline">
                              Privacy Policy
                            </Link>{" "}
                            and consent to the processing of my personal data for newsletter purposes.
                          </span>
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container">
            <p className="copyrights_text text-start">
              Copyright ©{currentYear}. All Rights Reserved | <span className="text-primary-footer">Arca Lui Noe</span>
              <br />
              Designed & Developed by | <Link href="https://prismasolutions.ro" target="_blank"><span className="text-prisma">Prisma Solutions</span></Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}