// ClientLayout.jsx - Client Component
"use client";

import React, { useEffect, useState } from "react";
import Header1 from "@/components/layouts/Header3";
import Footer1 from "@/components/layouts/Footer1";
import LoadingScreen from "@/components/ui/LoadingScreen";
import { LoadingProvider, useLoading } from "@/contexts/LoadingContext";

function ClientLayoutInner({ children, footerStyle, locale, dict }) {
	const [scroll, setScroll] = useState(0);
	const { isLoading } = useLoading();

	// Mobile Menu
	const [isMobileMenu, setMobileMenu] = useState(false);
	const handleMobileMenu = () => {
		setMobileMenu(!isMobileMenu);
		!isMobileMenu
			? document.body.classList.add("mobile-menu-visible")
			: document.body.classList.remove("mobile-menu-visible");
	};

	const [isSearch, setSearch] = useState(false);
	const handleSearch = () => setSearch(!isSearch);

	useEffect(() => {
		const handleScroll = () => {
			const scrollCheck = window.scrollY > 100;
			if (scrollCheck !== scroll) {
				setScroll(scrollCheck);
			}
		};

		document.addEventListener("scroll", handleScroll);

		// Cleanup
		return () => {
			document.removeEventListener("scroll", handleScroll);
		};
	}, [scroll]);

	return (
		<>
			{/* Data-loading overlay only. `.loading-screen` is position:fixed, so this
			    sits on top of the page instead of replacing it — the page content stays
			    in the server-rendered HTML, which is what LCP measures. */}
			{isLoading && <LoadingScreen locale={locale} />}
			<div className="page-wrapper" id="top">
				<Header1
					scroll={scroll}
					isMobileMenu={isMobileMenu}
					handleMobileMenu={handleMobileMenu}
					isSearch={isSearch}
					handleSearch={handleSearch}
					locale={locale}
					dict={dict}
				/>
				<main className="main">{children}</main>

				{!footerStyle && <Footer1 locale={locale} />}
				{footerStyle === 1 ? <Footer1 locale={locale} /> : null}
				{/* <BackToTop /> */}
			</div>
		</>
	);
}

export default function ClientLayout({ children, footerStyle, locale, dict }) {
	return (
		<LoadingProvider>
			<ClientLayoutInner
				children={children}
				footerStyle={footerStyle}
				locale={locale}
				dict={dict}
			/>
		</LoadingProvider>
	);
}
