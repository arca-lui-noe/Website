"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
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
	const terms_text = useTranslations("Terms");
	const isIOS =
		typeof navigator !== "undefined" &&
		(/iPad|iPhone|iPod/.test(navigator.userAgent) ||
			(navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1));
	const buttonHref = isIOS
		? "https://apps.apple.com/us/app/digitail-smarter-pet-care/id1473042508"
		: "https://play.google.com/store/apps/details?id=com.digitail.digitail&hl=en&pli=1";

	return (
		<>
			<footer className="footer_section overflow-hidden">
				<div className="footer_widget_area section_space_lg">
					<div className="container">
						<div className="row justify-content-lg-between">
							<div className="col-xl-3 col-sm-6">
								<div className="footer_widget footer_about mb50-lg">
									<div className="site_logo">
										<Link href={`/`}>
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
												<Link href={`/about`}>
													<i className="fas fa-circle"></i>
													{menu_text("about-title")}
												</Link>
											</li>
											<li>
												<Link href={`/about`}>
													<i className="fas fa-circle"></i>
													{menu_text("how_we_started-title")}
												</Link>
											</li>
											<li>
												<Link href={`/services`}>
													<i className="fas fa-circle"></i>
													{menu_text("services-title")}
												</Link>
											</li>
											<li>
												<Link href={`/blog`}>
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
									<a href={buttonHref}>
										<button className="btn btn_primary">
											{menu_text("app-button-text")}
										</button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer_bottom">
					<div className="container">
						<div className="row align-items-center copyrights_text text-start">
							<div className="col-lg-4 mb-3 mb-lg-0">
								<p className=" mb-0">
									Copyright ©{currentYear}. All Rights Reserved |{" "}
									<span className="text-primary-footer">Arca Lui Noe</span>
									<br />
									Designed & Developed by |{" "}
									<Link href="https://www.bloomberryagency.com/en" target="_blank">
										<span className="text-prisma">Bloomberry</span>
									</Link>
								</p>
							</div>
							<div className="col-lg-8">
								<div className="footer_legal_links text-start text-lg-end">
									<Link href="/privacy-policy" style={{color:"#084466",fontWeight:"700"}}>
										{terms_text("title1")}
									</Link>
									<span className="mx-2">•</span>
									<Link href="/cookie-policy" style={{color:"#084466",fontWeight:"700"}}>
										{terms_text("title2")}
									</Link>
									<span className="mx-2">•</span>
									<Link href="/terms-conditions" style={{color:"#084466",fontWeight:"700"}}>
										{terms_text("title3")}
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}