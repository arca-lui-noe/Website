import Link from "next/link";

const Contact = () => {
  const clinics = [
    {
      id: 1,
      name: "Petopia Central",
      phone: ["(913) 756-3126", "(921) 557-1203"],
      email: ["central@petopia.com", "info@petopia.com"],
      address: ["17 Parkman Place, 2122", "Budapest, Hungary"],
      hours: [
        "Hétfő - Péntek: 8:00 - 18:00",
        "Szombat: 9:00 - 16:00",
        "Vasárnap: Zárva",
      ],
      mapSrc:
        "https://maps.google.com/maps?q=Budapest%20Váci%20utca&t=&z=15&ie=UTF8&iwloc=&output=embed",
    },
    {
      id: 2,
      name: "Petopia North",
      phone: ["(913) 756-4567", "(921) 557-8901"],
      email: ["north@petopia.com", "emergency@petopia.com"],
      address: ["25 Oak Street, 1034", "Budapest, Hungary"],
      hours: [
        "Hétfő - Péntek: 7:00 - 19:00",
        "Szombat: 8:00 - 17:00",
        "Vasárnap: 10:00 - 14:00",
      ],
      mapSrc:
        "https://maps.google.com/maps?q=Budapest%20Oktogon&t=&z=15&ie=UTF8&iwloc=&output=embed",
    }
  ];
  return (
    <>
      <section className="contact_section section_space_lg pb-0">
        <div className="container">
          {clinics.map((clinic) => (
            <div key={clinic.id} className="section_space_md pt-0">
              <div className="container">
                <div className="section_title text-center">
                  <h2 className="title_text">
                    <span className="sub_title">Consultation</span>
                    {clinic.name}
                  </h2>
                  <p className="mb-0">
                    Auctor augue mauris augue neque gravida in fermentum
                  </p>
                </div>
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
                       {clinic.phone.map((phone, phoneIndex) => (
                                <li key={phoneIndex}>
                                  <Link href={`tel:${phone}`} className="text-decoration-none">
                                    {phone}
                                  </Link>
                                </li>
                              ))}
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
                       {clinic.email.map((email, emailIndex) => (
                                <li key={emailIndex}>
                                  <Link href={`mailto:${email}`} className="text-decoration-none">
                                    {email}
                                  </Link>
                                </li>
                              ))}
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
                        {clinic.address.map((address, addressIndex) => (
                                <li key={addressIndex}>{address}</li>
                              ))}
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
                       {clinic.hours.map((hour, hourIndex) => (
                                <li key={hourIndex}>{hour}</li>
                              ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="row">
            <div className="col col-lg-6">
              <div className="section_title">
                <h2 className="title_text">
                  <span className="sub_title">Our Contacts</span>Contact Us
                </h2>
                <p className="mb-0">
                  Massa enim nec dui nunc mattis enim ut tellus. Auctor augue
                  mauris augue neque gravida in fermentum
                </p>
              </div>

              <div className="contact_form">
                <form action="#">
                  <div className="row">
                    <div className="col col-md-6 col-sm-6">
                      <div className="form_item mb-0">
                        <label className="input_title" htmlFor="input_name">
                          Name<sup>*</sup>
                        </label>
                        <input
                          id="input_name"
                          type="text"
                          name="name"
                          placeholder="Type Your Name"
                        />
                      </div>
                    </div>
                    <div className="col col-md-6 col-sm-6">
                      <div className="form_item mb-0">
                        <label className="input_title" htmlFor="input_email">
                          Email<sup>*</sup>
                        </label>
                        <input
                          id="input_email"
                          type="email"
                          name="email"
                          placeholder="Type Your Email"
                        />
                      </div>
                    </div>
                    <div className="col col-md-6 col-sm-6">
                      <div className="select_option mb-0">
                        <label className="input_title" htmlFor="select_service">
                          Select Service<sup>*</sup>
                        </label>
                        <select id="select_service">
                          <option data-display="Select Service">
                            Select a Service
                          </option>
                          <option value="1">Some option</option>
                          <option value="2">Another option</option>
                          <option value="3" disabled>
                            A disabled option
                          </option>
                          <option value="4">Potato</option>
                        </select>
                      </div>
                    </div>
                    <div className="col col-md-6 col-sm-6">
                      <div className="form_item mb-0">
                        <label className="input_title" htmlFor="input_time">
                          Select Time<sup>*</sup>
                        </label>
                        <input id="input_time" type="time" name="time" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form_item">
                        <label className="input_title" htmlFor="input_message">
                          Your message<sup>*</sup>
                        </label>
                        <textarea
                          name="message"
                          id="input_message"
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
                        <i className="fas fa-paw"></i>Contact Us
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col col-lg-6">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
