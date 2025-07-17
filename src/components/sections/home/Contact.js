"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
	const [activeTab, setActiveTab] = useState("clinic");
	const contact_clinic = useTranslations("Clinic");
	const contact_cabinet = useTranslations("Cabinet");
	const contact_text = useTranslations("Contact");

	const currentContact =
		activeTab === "clinic" ? contact_clinic : contact_cabinet;
	return (
		<>
			<section className="contact_section bg_gray section_space_lg decoration_wrap">
				<div className="container">
					<div className="section_title text-center">
						<h2 className="title_text">
							{" "}
							<span className="sub_title">
								{contact_text("contact-subtitle")}
							</span>{" "}
							{contact_text("contact-title")}{" "}
						</h2>
						<p className="mb-0">{contact_text("contact-desc")}</p>
					</div>

					{/* Contact Type Toggle Menu */}
					<div className="row justify-content-center mb-4">
						<div className=" w-auto">
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
											<Link
												className="text-black"
												href={`tel:${currentContact("phone").replace(
													/\s/g,
													""
												)}`}>
												{currentContact("phone")}
											</Link>
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
											<Link
												href={`mailto:arcaluinoe.noebarkaja@gmail.com`}
												className="text-black">
												arcaluinoe.noebarkaja@gmail.com
											</Link>
										</li>
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
									<h3 className="item_title">
										{currentContact("address-title")}
									</h3>
									<ul className="item_info_list unorder_list_block">
										<li>{currentContact("address")}</li>
										<li>{currentContact("address-city")}</li>
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

				<div className="decoration_item shape_image_1">
					{/* <Image width={130} height={90} src={contactImage} alt="Pet Purr" /> */}
				</div>
				<div className="decoration_item shape_image_2">
					<Image
						width={210}
						height={250}
						src="/images/shape/shape_cat.svg"
						alt="Cat"
					/>
				</div>
			</section>
		</>
	);
};
export default Contact;
