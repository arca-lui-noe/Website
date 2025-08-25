"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

const Subscription = () => {
	const sectionRef = useRef(null);
	const imgRef = useRef(null);
	const [imgVisible, setImgVisible] = useState(false);
	const home_text = useTranslations("Home");

	useEffect(() => {
		// Fallback & reduced motion
		const prefersReduced =
			window.matchMedia &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (prefersReduced) {
			setImgVisible(true);
			return;
		}
		if (!("IntersectionObserver" in window)) {
			setImgVisible(true);
			return;
		}
		const target = sectionRef.current;
		if (!target) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setImgVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.15, root: null, rootMargin: "0px 0px -15% 0px" }
		);
		observer.observe(target);
		return () => observer.disconnect();
	}, []);

	const isIOS =
		typeof navigator !== "undefined" &&
		(/iPad|iPhone|iPod/.test(navigator.userAgent) ||
			(navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1));
	const buttonHref = isIOS
		? "https://apps.apple.com/us/app/digitail-smarter-pet-care/id1473042508"
		: "https://play.google.com/store/apps/details?id=com.digitail.digitail&hl=en&pli=1";

	return (
		<>
			<section ref={sectionRef} className="subscribe_section section_space_md">
				<div className="container">
					<div className="subscribe_wrap decoration_wrap">
						<div className="content_wrap m-0">
							<h2 className="title_text text-start">
								{home_text("application-title")}
							</h2>
							<p className="description_text text-start p-0">
								{home_text("application-desc")}
							</p>
						</div>
						<a href={buttonHref}>
							<button className="btn btn_warning" type="submit">
								{home_text("application-button")}
							</button>
						</a>
						<div
							className="overlay"
							style={{
								backgroundImage: "url(images/overlay/shapes_overlay_5.svg)",
							}}></div>
						<div className="decoration_item shape_image_1">
							<Image
								width={550}
								height={350}
								src="/images/shape/shape_path_5.svg"
								alt="Shape Image"
							/>
						</div>
						{/* <div className="decoration_item shape_image_2">
			  <Image  width={30}
			height={30} src="/images/shape/shape_circle_1.svg" alt="Shape Image" />
			</div> */}
						{/* <div className="decoration_item pet_image_1">
			  <Image  width={30}
			height={30} src="/images/about/about_img_4.png" alt="Pet Image" />
			</div> */}
						<div
							ref={imgRef}
							className={`decoration_item pet_image_2 rise_in ${
								imgVisible ? "visible" : ""
							}`}>
							<a href="https://play.google.com/store/apps/details?id=com.digitail.digitail&hl=en&pli=1">
								<Image
									width={400}
									height={660}
									// src="/images/about/about_img_5.png"
									src="/images/application/mobile1.png"
									alt="Pet Image"
									priority
								/>
							</a>
						</div>
					</div>
				</div>
			</section>
			<style jsx>{`
				.rise_in {
					opacity: 0;
					transform: translateY(180px); /* start farther down */
					transition: opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94),
						transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
					will-change: transform, opacity;
					cursor: pointer; /* make it interactive */
				}
				.rise_in.visible {
					opacity: 1;
					transform: translateY(-230px); /* finish a bit higher than original */
				}
				.rise_in.visible:hover {
					transform: translateY(-250px); /* subtle extra lift on hover */
					transition-duration: 0.6s;
				}
				@media (prefers-reduced-motion: reduce) {
					.rise_in {
						opacity: 1;
						transform: none;
						transition: none;
					}
					.rise_in.visible,
					.rise_in.visible:hover {
						transform: none;
					}
				}
			`}</style>
		</>
	);
};
export default Subscription;
