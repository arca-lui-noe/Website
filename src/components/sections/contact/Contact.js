"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

const LinkClinic = "https://maps.app.goo.gl/5oHoVadU21h6L1e27";
const LinkCabinet = " https://maps.app.goo.gl/GDJgYgkSCiFcx8sr5";

const Contact = () => {
	const [activeTab, setActiveTab] = useState("clinic");
	const contact_clinic = useTranslations("Clinic");
	const contact_cabinet = useTranslations("Cabinet");
	const contact_text = useTranslations("Contact");

	const currentContact =
		activeTab === "clinic" ? contact_clinic : contact_cabinet;

	return (
		<>
			<section className="contact_section section_space_lg pb-0">
				<div className="container">
					<div className="section_title text-center">
						<h2 className="title_text">
							<span className="sub_title">
								{contact_text("contact-subtitle")}
							</span>
							{contact_text("contact-title")}
						</h2>
						<p className="mb-0">{contact_text("contact-desc")}</p>
					</div>

					{/* Contact Type Toggle Menu */}
					<div className="row justify-content-center mb-4">
						<div className="w-auto">
							<div className="contact_tabs_nav">
								<ul
									className="nav nav-tabs justify-content-center"
									role="tablist">
									<li className="nav-item" role="presentation">
										<button
											className={`nav-link ${
												activeTab === "clinic" ? "active" : ""
											}`}
											onClick={() => setActiveTab("clinic")}
											type="button"
											role="tab">
											<i className="fas fa-hospital-alt me-2"></i>
											{contact_clinic("title")}
										</button>
									</li>
									<li className="nav-item" role="presentation">
										<button
											className={`nav-link ${
												activeTab === "cabinet" ? "active" : ""
											}`}
											onClick={() => setActiveTab("cabinet")}
											type="button"
											role="tab">
											<i className="fas fa-user-md me-2"></i>
											{contact_cabinet("title")}
										</button>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="section_space_md pt-0">
						<div className="row justify-content-center">
							<div className="col col-lg-3 col-md-6 col-sm-6">
								<div className="iconbox_item iconbox_overicon">
									<div className="item_icon">
										<i className="fas fa-phone"></i>
									</div>
									<div className="item_content">
										<h3 className="item_title">Telefon</h3>
										<ul className="item_info_list unorder_list_block">
											<li>
												<a
													href={`tel:${currentContact("phone").replace(
														/\s/g,
														""
													)}`}
													className="text-black">
													{currentContact("phone")}
												</a>
											</li>
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
											<li>
												<a
													href="mailto:arcaluinoe.noebarkaja@gmail.com"
													className="text-black">
													arcaluinoe.noebarkaja@gmail.com
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div className="col col-lg-3 col-md-6 col-sm-6">
								<div className="iconbox_item iconbox_overicon">
									<a
										className="w-100 text-black"
										href={activeTab === "clinic" ? LinkClinic : LinkCabinet}
										target="_blank">
										<div className="item_icon">
											<i className="fas fa-map-marker-alt"></i>
										</div>
										<div className="item_content">
											<h3 className="item_title">
												{currentContact("address-title")}
											</h3>
											<ul className="item_info_list unorder_list_block">
												<li>{currentContact("address")}</li>
												<li>{currentContact("address-city")}</li>
											</ul>
										</div>
									</a>
								</div>
							</div>

							<div className="col col-lg-3 col-md-6 col-sm-6">
								<div className="iconbox_item iconbox_overicon">
									<div className="item_icon">
										<i className="fas fa-clock"></i>
									</div>
									<div className="item_content">
										<h3 className="item_title">
											{currentContact("program-title")}
										</h3>
										<ul className="item_info_list unorder_list_block">
											<li>
												{currentContact("program1")}{" "}
												{currentContact("program1-time")}
											</li>
											<li>
												{currentContact("program2")}{" "}
												{currentContact("program2-time")}
											</li>
											<li>
												{currentContact("program3")}{" "}
												{currentContact("program3-time")}
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="mapouter">
								<div className="gmap_canvas">
									<iframe
										id="gmap_canvas"
										src={
											activeTab === "clinic"
												? "https://maps.google.com/maps?q=Tudor%20Vladimirescu%20143%20Târgu%20Mureș&t=&z=15&ie=UTF8&iwloc=&output=embed"
												: "https://maps.google.com/maps?q=Strada%20Arieşului%2019A,%20Târgu%20Mureș&t=&z=15&ie=UTF8&iwloc=&output=embed"
										}></iframe>
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
