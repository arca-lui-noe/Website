import Image from "next/image";
import Link from "next/link";

const ServiceContact = () => {
  return (
    <>
      <section className="getservice_section section_space_lg pb-0">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col col-lg-5 d-none d-lg-block">
              <div className="getservice_image">
                <Image
                  width={580}
                  height={740}
                  src="/images/about/contact.png"
                  alt="Pet Care Service"
                />
              </div>
            </div>
            <div className="col col-lg-6">
              <div className="getservice_form">
                <div className="section_title mb-4">
                  <h2 className="title_text">Get a Service </h2>
                  <p className="mb-0">
                    Massa enim nec dui nunc mattis enim ut tellus. Auctor augue
                    mauris augue neque gravida in fermentum
                  </p>
                </div>
                <form action="#">
                  <div className="row">
                    <div className="col col-md-6">
                      <div className="form_item mb-0">
                        <label htmlFor="input_name" className="input_title">
                          Name<sup>*</sup>
                        </label>
                        <input
                          id="input_name"
                          type="text"
                          name="name"
                          placeholder="Type your Name"
                        />
                      </div>
                    </div>
                    <div className="col col-md-6">
                      <div className="form_item mb-0">
                        <label htmlFor="input_email" className="input_title">
                          Email<sup>*</sup>
                        </label>
                        <input
                          id="input_email"
                          type="email"
                          name="email"
                          placeholder="Type your Email"
                        />
                      </div>
                    </div>
                    <div className="col col-md-6">
                      <div className="select_option mb-0">
                        <label htmlFor="select_service" className="input_title">
                          Select Service
                        </label>
                        <select id="select_service">
                          <option data-display="Select Service">Nothing</option>
                          <option value="1">Some option</option>
                          <option value="2">Another option</option>
                          <option value="3" disabled>
                            A disabled option
                          </option>
                          <option value="4">Potato</option>
                        </select>
                      </div>
                    </div>
                    <div className="col col-md-6">
                      <div className="form_item mb-0">
                        <label htmlFor="input_time" className="input_title">
                          Select Time
                        </label>
                        <input id="input_time" type="time" name="time" />
                      </div>
                    </div>

                    <div className="col">
                      <div className="form_item">
                        <label htmlFor="input_textarea" className="input_title">
                          Your Message
                        </label>
                        <textarea
                          id="input_textarea"
                          name="message"
                          placeholder="Type your message"
                        ></textarea>
                      </div>

                      <label className="d-flex align-items-start">
                        <input
                          type="checkbox"
                          name="gdpr-consent"
                          required
                          className="me-2 mt-1"
                        />
                        <span className="small">
                          I agree to the{" "}
                          <Link
                            href={`/terms`}
                            className="text-decoration-underline"
                          >
                            Privacy Policy
                          </Link>{" "}
                          and consent to the processing of my personal data for
                          newsletter purposes.
                        </span>
                      </label>

                      <button type="submit" className="btn btn_primary mt-3">
                        <i className="fas fa-paw"></i>
                        Get Services
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ServiceContact;
