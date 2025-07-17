"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import DynamicLogo from "./DynamicLogo";

// Javítás: a locale paraméter megfelelő destrukturálása
export default function Footer1({ locale }) {
	// Aktuális év meghatározása
	const currentYear = new Date().getFullYear();
	// Fordítások betöltése
	const footer_text = useTranslations("Footer");
	const contact_text = useTranslations("Contact");
	const clinic_text = useTranslations("Clinic");
	const menu_text = useTranslations("Menu");

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
											<DynamicLogo
												locale={locale}
												scroll={true}
												isHomePage={false}
											/>
										</Link>
									</div>
									<p>{footer_text("description")}</p>
									<div className="footer_hotline iconbox_item iconbox_lefticon">
										<div className="item_icon">
											<i className="fas fa-phone-alt"></i>
										</div>
										<div className="item_content">
											<h3 className="item_title">
												<Link href="tel:0365738824">0365 738 824</Link>
											</h3>
											<p className="mb-0">{footer_text("phone-address")}</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-sm-6">
								<div className="footer_widget mb50-lg">
									<h3 className="footer_widget_title">
										{footer_text("program-title")}
									</h3>
									<div className="office_hour">
										<ul className="unorder_list_block">
											<li>
												<span>{clinic_text("program1")}</span>
												<span>{clinic_text("program1-time")}</span>
											</li>
											<li>
												<span>{clinic_text("program2")}</span>
												<span>{clinic_text("program2-time")}</span>
											</li>
											<li>
												<span>{clinic_text("program3")}</span>
												<span>
													<strong>{clinic_text("program3-time")}</strong>
												</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-xl-2 col-sm-6">
								<div className="footer_widget mb50-sm">
									<h3 className="footer_widget_title">
										{footer_text("useful-links-title")}
									</h3>
									<div className="page_list">
										<ul className="unorder_list_block">
											<li>
												<Link href="/">
													<i className="fas fa-circle"></i>
													{menu_text("home-title")}
												</Link>
											</li>
											<li>
												<Link href={`/${locale}/about`}>
													<i className="fas fa-circle"></i>
													{menu_text("about-title")}
												</Link>
											</li>
											<li>
												<Link href={`/${locale}/about`}>
													<i className="fas fa-circle"></i>
													{menu_text("how_we_started-title")}
												</Link>
											</li>
											<li>
												<Link href={`/${locale}/services`}>
													<i className="fas fa-circle"></i>
													{menu_text("services-title")}
												</Link>
											</li>
											<li>
												<Link href={`/${locale}/blog`}>
													<i className="fas fa-circle"></i>
													{menu_text("blog-title")}
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-sm-6">
								<div className="footer_widget">
									<h3 className="footer_widget_title">
										{menu_text("app-title")}
									</h3>
									<button className="btn btn_primary">
										{menu_text("app-button-text")}
									</button>
								</div>
							</div>
							{/* <div className="col-xl-3 col-sm-6">
								<div className="footer_widget">
									<h3 className="footer_widget_title">
										{footer_text("newsletter-title")}
									</h3>
									<form action="#">
										<div className="footer_newslatter">
											<p>{footer_text("newsletter-desc")}</p>
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
														<Link
															href={`/${locale}/terms`}
															className="text-decoration-underline">
															Privacy Policy
														</Link>{" "}
														and consent to the processing of my personal data
														for newsletter purposes.
													</span>
												</label>
											</div>
										</div>
									</form>
								</div>
							</div> */}
						</div>
					</div>
				</div>
				<div className="footer_bottom">
					<div className="container">
						<p className="copyrights_text text-start">
							Copyright ©{currentYear}. All Rights Reserved |{" "}
							<span className="text-primary-footer">Arca Lui Noe</span>
							<br />
							Designed & Developed by |{" "}
							<Link href="https://www.bloomberryagency.com/en" target="_blank">
								<span className="text-prisma">Bloomberry</span>
							</Link>
						</p>
					</div>
				</div>
			</footer>
		</>
	);
}
