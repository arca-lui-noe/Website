// ClientLayout.jsx - Client Component
"use client";

import React, { useEffect, useState } from "react";
import Header1 from "@/components/layouts/Header3";
import Footer1 from "@/components/layouts/Footer1";
import LoadingScreen from "@/components/ui/LoadingScreen";
import { LoadingProvider, useLoading } from "@/contexts/LoadingContext";

function ClientLayoutInner({ children, footerStyle, locale, dict }) {
	const [scroll, setScroll] = useState(0);
	const [initialLoading, setInitialLoading] = useState(true);
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

	useEffect(() => {
		// Initial page load animation
		setInitialLoading(true);
		const timer = setTimeout(() => {
			setInitialLoading(false);
		}, 1500);

		return () => clearTimeout(timer);
	}, []);

	// Show loading screen for initial load or context loading
	if (initialLoading || isLoading) {
		return <LoadingScreen locale={locale} />;
	}

	return (
		<>
			{/* <CustomCursor /> */}
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
