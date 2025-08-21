"use client";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

const Faq = () => {
	const [isActive, setIsActive] = useState({
		status: false,
		key: 1,
	});

	const welcome_text = useTranslations("Home");

	const handleClick = (key) => {
		if (isActive.key === key) {
			setIsActive({
				status: false,
			});
		} else {
			setIsActive({
				status: true,
				key,
			});
		}
	};
	return (
		<>
			<section className="about_section section_space_lg pb-0 decoration_wrap">
				<div className="container">
					<div className="row align-items-center justify-content-lg-between">
						<div className="col col-lg-5">
							<div className="section_title">
								<h2 className="title_text">{welcome_text("welcome-title")}</h2>
								<p>{welcome_text("welcome-desc")}</p>
							</div>
							<div className="accordion faq-box-style1" id="faq_accordion">
								<ul className="accordion-box">
									{/* Block */}
									<li className="accordion block">
										<div
											className={
												isActive.key == 1 ? "acc-btn active" : "acc-btn"
											}
											onClick={() => handleClick(1)}>
											{welcome_text("welcome-title1")}
											<div className="icon far fa-angle-down"></div>
										</div>
										<div
											className={
												isActive.key == 1
													? "acc-content current"
													: "acc-content"
											}>
											<div className="content">
												<div className="text">
													{welcome_text("welcome-desc1")}
												</div>
											</div>
										</div>
									</li>
									{/* Block */}
									<li className="accordion block">
										<div
											className={
												isActive.key == 2 ? "acc-btn active" : "acc-btn"
											}
											onClick={() => handleClick(2)}>
											{welcome_text("welcome-title2")}
											<div className="icon far fa-angle-down"></div>
										</div>
										<div
											className={
												isActive.key == 2
													? "acc-content current"
													: "acc-content"
											}>
											<div className="content">
												<div className="text">
													{welcome_text("welcome-desc2")}
												</div>
											</div>
										</div>
									</li>
									{/* Block */}
									<li className="accordion block">
										<div
											className={
												isActive.key == 3 ? "acc-btn active" : "acc-btn"
											}
											onClick={() => handleClick(3)}>
											{welcome_text("welcome-title3")}
											<div className="icon far fa-angle-down"></div>
										</div>
										<div
											className={
												isActive.key == 3
													? "acc-content current"
													: "acc-content"
											}>
											<div className="content">
												<div className="text">
													{welcome_text("welcome-desc3")}
												</div>
											</div>
										</div>
									</li>
									{/* Block */}
									<li className="accordion block">
										<div
											className={
												isActive.key == 4 ? "acc-btn active" : "acc-btn"
											}
											onClick={() => handleClick(4)}>
											{welcome_text("welcome-title4")}
											<div className="icon far fa-angle-down"></div>
										</div>
										<div
											className={
												isActive.key == 4
													? "acc-content current"
													: "acc-content"
											}>
											<div className="content">
												<div className="text">
													{welcome_text("welcome-desc4")}
												</div>
											</div>
										</div>
									</li>
									{/* Block */}
									<li className="accordion block mb-0">
										<div
											className={
												isActive.key == 5 ? "acc-btn active" : "acc-btn"
											}
											onClick={() => handleClick(5)}>
											{welcome_text("welcome-title5")}
											<div className="icon far fa-angle-down"></div>
										</div>
										<div
											className={
												isActive.key == 5
													? "acc-content current"
													: "acc-content"
											}>
											<div className="content">
												<div className="text">
													{welcome_text("welcome-desc5")}
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className="col col-lg-6">
							<div className="about_image_1">
								<div className="image_1 p-0">
									<Image
										width={480}
										height={480}
										src="/images/about/about_img_1.jpg"
										alt="Pet Doctor"
									/>
								</div>
								<div className="image_2">
									<Image
										width={300}
										height={260}
										src="/images/about/about_img_2.jpg"
										alt="Cat Image"
									/>
								</div>
								<div className="image_3">
									<Image
										width={220}
										height={200}
										src="/images/about/about_img_3.jpg"
										alt="Dog Image"
									/>
								</div>
								<div className="shape_img_1">
									<Image
										width={520}
										height={520}
										src="/images/shape/shape_circle_1.svg"
										alt="Yellow Circle"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="decoration_item shape_dot_1">
					<Image
						width={150}
						height={260}
						src="/images/shape/shape_dot_group_1.svg"
						alt="Colorful Dots"
					/>
				</div>
			</section>
		</>
	);
};
export default Faq;
