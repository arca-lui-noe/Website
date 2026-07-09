"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const DESKTOP_VIDEO = "/video/desktop/hero.mp4";
const MOBILE_VIDEO = "/video/mobile/hero.mp4";
const MOBILE_QUERY = "(max-width: 767.98px)";

const VideoBackground = ({ locale }) => {
	// Load translations for the component
	const home_text = useTranslations("Home");
	const menu_text = useTranslations("Menu");

	const videoRef = useRef(null);
	const [videoSrc, setVideoSrc] = useState(null);
	const [videoReady, setVideoReady] = useState(false);

	useEffect(() => {
		const start = () => {
			if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
			const saveData = navigator.connection?.saveData;
			if (saveData) return;

			setVideoSrc(
				window.matchMedia(MOBILE_QUERY).matches ? MOBILE_VIDEO : DESKTOP_VIDEO,
			);
		};

		if (document.readyState === "complete") {
			start();
			return;
		}
		window.addEventListener("load", start, { once: true });
		return () => window.removeEventListener("load", start);
	}, []);

	useEffect(() => {
		if (!videoSrc) return;
		const video = videoRef.current;
		if (!video) return;
		video.load();
		// Autoplay can still be refused (e.g. low power mode); the poster remains.
		video.play().catch(() => {});
	}, [videoSrc]);

	const scrollToHome = () => {
		const targetSection = document.getElementById("home");
		if (targetSection) {
			targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<div className="position-relative w-100 vh-100 overflow-hidden">
			{/* The LCP element. A <picture> lets the browser download exactly one
			    poster for the current viewport; next/image cannot do art direction. */}
			<picture>
				<source
					media={MOBILE_QUERY}
					srcSet="/video/mobile/hero-poster.webp"
					type="image/webp"
				/>
				<img
					src="/video/desktop/hero-poster.webp"
					alt=""
					fetchPriority="high"
					decoding="async"
					className="hero-media position-absolute top-0 start-0 w-100 h-100"
				/>
			</picture>

			{videoSrc && (
				<video
					ref={videoRef}
					className={`hero-video hero-media position-absolute top-0 start-0 w-100 h-100 ${
						videoReady ? "is-ready" : ""
					}`}
					autoPlay
					muted
					loop
					playsInline
					preload="none"
					onCanPlay={() => setVideoReady(true)}>
					<source src={videoSrc} type="video/mp4" />
				</video>
			)}

			{/* Dark Overlay */}
			<div className="hero-overlay position-absolute top-0 start-0 w-100 h-100" />

			{/* Content Layer */}
			<div className="position-relative h-100 d-flex align-items-center justify-content-center">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-10 col-xl-8">
							<div className="text-center text-white">
								<h1 className="hero-title">{home_text("welcome-title")}</h1>
								<div className="d-flex flex-column align-items-center flex-sm-row gap-3 justify-content-center">
									<Link href={`/contact`}>
										<button className="btn btn_primary d-inline-flex align-items-center justify-content-center px-4 py-3 fw-semibold">
											{home_text("appointment-booking")}
										</button>
									</Link>
									<Link href={`/services`}>
										<button className="btn btn-outline-light d-inline-flex align-items-center justify-content-center px-4 py-3 fw-semibold">
											{menu_text("services-title")}
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Scroll indicator */}
			<div
				className="scroll-indicator text-white text-center"
				onClick={scrollToHome}
				role="button"
				tabIndex={0}
				onKeyDown={(e) => {
					if (e.key === "Enter" || e.key === " ") scrollToHome();
				}}>
				<div className="scroll-indicator-text">Scroll Down</div>
				<div className="scroll-indicator-arrow">
					<svg
						width="24"
						height="24"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default VideoBackground;
