"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import DynamicLogo from "./DynamicLogo";
import { useTranslations } from "next-intl";
import { m } from "framer-motion";

export default function Header1({
	scroll,
	handleMobileMenu,
	isSearch,
	dict,
	locale,
}) {
	const pathname = usePathname();
	const [langMenuOpen, setLangMenuOpen] = useState(false);
	const [animationClass, setAnimationClass] = useState("");

	const menu_text = useTranslations("Menu");

	// Improved language switcher function
	const handleLanguageChange = (newLocale) => {
		// Prevent default behavior if any
		event && event.preventDefault();

		// Close ALL menus before redirecting
		setLangMenuOpen(false);

		// Force close mobile menu by simulating X button click
		const closeBtn = document.querySelector(".mobile-menu .close-btn");
		if (closeBtn) {
			closeBtn.click();
		}

		// Backup: manipulate DOM classes directly
		const mobileMenu = document.querySelector(".mobile-menu");
		const body = document.body;

		if (mobileMenu) {
			mobileMenu.classList.remove("mobile-menu-visible");
			body.classList.remove("mobile-menu-visible");
			// Remove any other possible mobile menu classes
			body.classList.remove("moblie-menu-visible"); // typo in original code
		}

		// Animate out before redirecting
		setAnimationClass("lang-switch-animate-out");

		// Use a timeout to allow animation to complete
		setTimeout(() => {
			// Get the current path without the language prefix
			const currentPath = pathname.replace(/^\/[^\/]+/, "") || "/";
			// Navigate to the same path with the new locale prefix
			window.location.href = `/${newLocale}${currentPath}`;
		}, 300); // Match animation duration
	};

	// Close the language menu when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				langMenuOpen &&
				!event.target.closest(".language-switcher") &&
				!event.target.closest(".mobile-lang-switcher") &&
				!event.target.closest(".sticky-mobile-lang")
			) {
				setLangMenuOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [langMenuOpen]);

	// Close language menu when mobile menu is toggled
	useEffect(() => {
		if (handleMobileMenu) {
			setLangMenuOpen(false);
		}
	}, [handleMobileMenu]);

	return (
		<>
			<header
				className={`main-header header-style3 ${
					isSearch ? "moblie-search-active" : ""
				}`}>
				<div className="header_top d-none d-md-block">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-5 col-sm-3">
								<ul className="social_links">
									<li>
										<Link href="#!">
											<i className="fab fa-facebook-f"></i>
										</Link>
									</li>
									<li>
										<Link href="#!">
											<i className="fab fa-instagram"></i>
										</Link>
									</li>
									<li>
										<Link href="#!">
											<i className="fab fa-twitter"></i>
										</Link>
									</li>
									<li>
										<Link href="#!">
											<i className="fab fa-whatsapp"></i>
										</Link>
									</li>
								</ul>
							</div>
							<div className="col-lg-7 col-sm-9">
								<ul className="icon_list unorder_list justify-content-sm-end">
									<li>
										<Link href="#!">
											<i className="fas fa-phone"></i>
											<span>0000 - 123456789</span>
										</Link>
									</li>
									<li>
										<Link href="#!">
											<i className="fas fa-envelope"></i>
											<span>info@example.com</span>
										</Link>
									</li>
									<li className="language-switcher">
										<div className="vet-lang-dropdown">
											<button
												className="vet-lang-btn"
												onClick={() => setLangMenuOpen(!langMenuOpen)}
												aria-expanded={langMenuOpen}>
												<span className="vet-icon">
													{locale === "hu" ? (
														<span className="vet-emoji">🐶</span>
													) : (
														<span className="vet-emoji">🐱</span>
													)}
												</span>
												<span
													className="current-lang text-white"
													style={{ fontWeight: "bold" }}>
													{locale === "hu" ? "Magyar" : "Română"}
												</span>
											</button>

											<div
												className={`vet-lang-dropdown-content ${
													langMenuOpen ? "show" : ""
												}`}>
												<div className="lang-dropdown-header">
													<span className="paw-icon">🐾</span> {}
												</div>

												<div className="lang-options">
													<button
														onClick={() => handleLanguageChange("hu")}
														className={locale === "hu" ? "active" : ""}>
														<span className="vet-lang-icon hu-vet">🐶</span>
														<span className="lang-name">Magyar</span>
														{locale === "hu" && (
															<span className="active-indicator">
																<i className="fas fa-paw"></i>
															</span>
														)}
													</button>

													<button
														onClick={() => handleLanguageChange("ro")}
														className={locale === "ro" ? "active" : ""}>
														<span className="vet-lang-icon ro-vet">🐱</span>
														<span className="lang-name">Română</span>
														{locale === "ro" && (
															<span className="active-indicator">
																<i className="fas fa-paw"></i>
															</span>
														)}
													</button>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="header-lower">
					<div className="container">
						{/* Main box */}
						<div className="main-wrapper">
							<div className="logo-box">
								<div className="logo">
									<Link href={`/${locale}`}>
										<DynamicLogo locale={locale} />
									</Link>
								</div>
							</div>

							{/* Mobile language switcher - visible only on mobile */}
							<div className="mobile-lang-switcher d-flex d-md-none">
								<div className="vet-lang-dropdown">
									<button
										className="vet-lang-btn mobile-lang-btn"
										onClick={() => setLangMenuOpen(!langMenuOpen)}
										aria-expanded={langMenuOpen}>
										<span className="vet-icon">
											{locale === "hu" ? "🐶" : "🐱"}
										</span>
										<span
											className="ms-2"
											style={{ color: "#000", fontWeight: "bold" }}>
											{locale === "hu" ? "Hu" : "Ro"}
										</span>
									</button>

									<div
										className={`vet-lang-dropdown-content mobile-dropdown ${
											langMenuOpen ? "show" : ""
										}`}>
										<div className="lang-options">
											<button
												onClick={(e) => handleLanguageChange("hu")}
												className={locale === "hu" ? "active" : ""}>
												<span className="vet-lang-icon">🐶</span>
												<span className="lang-name">Magyar</span>
											</button>

											<button
												onClick={(e) => handleLanguageChange("ro")}
												className={locale === "ro" ? "active" : ""}>
												<span className="vet-lang-icon">🐱</span>
												<span className="lang-name">Română</span>
											</button>
										</div>
									</div>
								</div>
							</div>

							<div className="nav-wrapper d-none d-lg-block">
								<nav className="nav main-list">
									<Menu dict={dict} locale={locale} />
								</nav>
							</div>
							<div className="outer-box d-flex align-items-center">
								<div className="mobile-nav-toggler" onClick={handleMobileMenu}>
									<span className="icon fas fa-bars"></span>
								</div>
								<ul className="header_btns_group unorder_list_right">
									<li className="me-0 d-none d-sm-block">
										<Link
											href={`/${locale}/contact`}
											className="contact-btn btn btn_primary">
											<i className="fas fa-stethoscope me-2"></i>
											{menu_text("clinic-title")}
											{/* {locale === "hu" ? "Kapcsolat" : "Contact"} */}
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				{/* Mobile Menu  */}
				<div className="mobile-menu">
					<div className="menu-backdrop" onClick={handleMobileMenu} />

					<nav className="menu-box">
						<div className="upper-box">
							<div className="nav-logo d-block d-lg-none">
								<Link href={`/${locale}`}>
									<DynamicLogo locale={locale} />
								</Link>
							</div>
							<div className="close-btn" onClick={handleMobileMenu}>
								<i className="icon fa fa-times" />
							</div>
						</div>
						<MobileMenu dict={dict} locale={locale} />

						<ul className="social-links">
							<li>
								<Link href="/#">
									<i className="fab fa-twitter" />
								</Link>
							</li>
							<li>
								<Link href="/#">
									<i className="fab fa-facebook-f" />
								</Link>
							</li>
							<li>
								<Link href="/#">
									<i className="fab fa-pinterest" />
								</Link>
							</li>
							<li>
								<Link href="/#">
									<i className="fab fa-instagram" />
								</Link>
							</li>
						</ul>
					</nav>
				</div>

				<div
					className={`sticky-header ${
						scroll ? "fixed-header animated slideInDown" : ""
					}`}>
					<div className="container">
						<div className="main-wrapper">
							{/*Logo*/}
							<div className="logo">
								<Link href={`/${locale}`}>
									<DynamicLogo locale={locale} />
								</Link>
							</div>

							{/* Sticky header language switcher for mobile */}
							<div className="sticky-mobile-lang d-md-none">
								<div className="vet-lang-dropdown">
									<button
										className="vet-lang-btn"
										onClick={() => setLangMenuOpen(!langMenuOpen)}>
										<span className="vet-emoji">
											{locale === "hu" ? "🐶" : "🐱"}
										</span>
										<span
											className="ms-2"
											style={{ color: "#000", fontWeight: "bold" }}>
											{locale === "hu" ? "Hu" : "Ro"}
										</span>
									</button>

									<div
										className={`vet-lang-dropdown-content sticky-dropdown ${
											langMenuOpen ? "show" : ""
										}`}>
										<div className="lang-options">
											<button onClick={(e) => handleLanguageChange("hu")}>
												<span className="vet-lang-icon">🐶</span>
												<span className="lang-name">Magyar</span>
											</button>
											<button onClick={(e) => handleLanguageChange("ro")}>
												<span className="vet-lang-icon">🐱</span>
												<span className="lang-name">Română</span>
											</button>
										</div>
									</div>
								</div>
							</div>

							{/*Right Col*/}
							<div className="nav-wrapper d-none d-lg-block">
								{/* Main Menu */}
								<nav className="main-list">
									<div className="navbar-collapse show collapse clearfix">
										<Menu dict={dict} locale={locale} />
									</div>
								</nav>
								{/* Main Menu End*/}
							</div>
							<div className="outer-box d-flex align-items-center">
								<div className="mobile-nav-toggler" onClick={handleMobileMenu}>
									<span className="icon fas fa-bars"></span>
								</div>
								<ul className="header_btns_group unorder_list_right">
									<li className="me-0 d-none d-sm-block">
										<Link
											href={`/${locale}/contact`}
											className="contact-btn btn btn_primary">
											<i className="fas fa-stethoscope me-2"></i>
											{menu_text("clinic-title")}
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				{/* End Sticky Menu */}
			</header>
		</>
	);
}
