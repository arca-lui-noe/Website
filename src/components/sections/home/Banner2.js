import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

const Banner2 = async () => {
	const home_text = await getTranslations("Home");

	return (
		<>
			{/* style={{ backgroundImage: 'url(images/overlay/shapes_overlay_2.svg)' }} */}
			<section
				id="home"
				className="banner_section banner_style_2 decoration_wrap"
				style={{
					backgroundImage: "url('/images/banner/shape_banner_bg.svg')",
				}}>
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
								<h2 className="banner_title">
									<span className="banner_sub_title">
										{home_text("hero-subtitle")}
									</span>{" "}
									{home_text("hero-title")}
								</h2>
								<p className="banner_description">{home_text("hero-desc")}</p>
								<div className="banner_policy_items row">
									<div className="col">
										<div className="iconbox_item iconbox_lefticon">
											<div className="item_icon">
												<i className="fas fa-notes-medical"></i>
											</div>
											<div className="item_content">
												<h3 className="item_title mb-0">
													{home_text("value1-title")}
												</h3>
												<p className="mb-0">{home_text("value1-desc")}</p>
											</div>
											<Link
												className="item_global_link"
												href="/services"></Link>
										</div>
									</div>
									<div className="col">
										<div className="iconbox_item iconbox_lefticon">
											<div className="item_icon">
												<i className="fas fa-badge-check"></i>
											</div>
											<div className="item_content">
												<h3 className="item_title mb-0">
													{home_text("value2-title")}
												</h3>
												<p className="mb-0">{home_text("value2-desc")}</p>
											</div>
											<Link
												className="item_global_link"
												href="/services"></Link>
										</div>
									</div>
									<div className="col">
										<div className="iconbox_item iconbox_lefticon">
											<div className="item_icon">
												<i className="fas fa-stethoscope"></i>
											</div>
											<div className="item_content">
												<h3 className="item_title mb-0">
													{home_text("value3-title")}
												</h3>
												<p className="mb-0">{home_text("value3-desc")}</p>
											</div>
											<Link
												className="item_global_link"
												href="/services"></Link>
										</div>
									</div>
									<div className="col">
										<div className="iconbox_item iconbox_lefticon">
											<div className="item_icon">
												<i className="fas fa-heart"></i>
											</div>
											<div className="item_content">
												<h3 className="item_title mb-0">
													{home_text("value4-title")}
												</h3>
												<p className="mb-0">{home_text("value4-desc")}</p>
											</div>
											<Link
												className="item_global_link"
												href="/services"></Link>
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
