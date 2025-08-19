// components/StoryTimeline/StoryTimeline.jsx
"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import Lenis from "@studio-freight/lenis";

import { ChevronLeft, ChevronRight } from "lucide-react";

const StoryTimeline = () => {
	const timelineSectionRef = useRef(null);
	const timelineWrapperRef = useRef(null);
	const leftBtnRef = useRef(null);
	const rightBtnRef = useRef(null);

	let imageWidth = 0;
	let containerWidth = 0;
	let maxScrollX = 0;
	let currentTimelineProgress = 0;
	let timelineTween;

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothTouch: true,
			syncTouch: true,
		});

		lenis.on("scroll", ScrollTrigger.update);
		gsap.ticker.add((time) => {
			lenis.raf(time * 1000);
		});
		gsap.ticker.lagSmoothing(0);

		const setupTimelineAnimation = () => {
			if (!timelineSectionRef.current || !timelineWrapperRef.current) return;

			containerWidth = timelineSectionRef.current.offsetWidth;
			const tempImage = new Image();
			tempImage.src = "/story_timeline.png";

			tempImage.onload = () => {
				const imageHeight = timelineSectionRef.current.offsetHeight;
				imageWidth =
					tempImage.naturalWidth * (imageHeight / tempImage.naturalHeight);
				maxScrollX = Math.max(0, imageWidth - containerWidth);

				if (leftBtnRef.current && rightBtnRef.current) {
					if (maxScrollX <= 0) {
						leftBtnRef.current.style.display = "none";
						rightBtnRef.current.style.display = "none";
					} else {
						leftBtnRef.current.style.display = "flex";
						rightBtnRef.current.style.display = "flex";
					}
				}

				if (timelineTween) {
					timelineTween.kill();
				}
				ScrollTrigger.getById("timelineScroll")?.kill();

				timelineTween = gsap.to(timelineSectionRef.current, {
					backgroundPosition: `-${maxScrollX}px 50%`,
					ease: "none",
					scrollTrigger: {
						id: "timelineScroll",
						trigger: timelineWrapperRef.current,
						start: "top top",
						end: () => `+=${maxScrollX * 1.5}`,
						scrub: 2,
						pin: true,
						anticipatePin: 1,
						invalidateOnRefresh: true,
						onUpdate: (self) => {
							currentTimelineProgress = self.progress;
							updateButtonStates();
						},
					},
				});
				updateButtonStates();
			};
			tempImage.onerror = () => {
				console.error(
					"Failed to load 'story_timeline.webp'. Please ensure the image exists in the public directory."
				);
				if (leftBtnRef.current) leftBtnRef.current.style.display = "none";
				if (rightBtnRef.current) rightBtnRef.current.style.display = "none";
			};
		};

		const updateButtonStates = () => {
			const st = ScrollTrigger.getById("timelineScroll");
			if (st && leftBtnRef.current && rightBtnRef.current) {
				leftBtnRef.current.disabled = st.progress <= 0.01;
				rightBtnRef.current.disabled = st.progress >= 0.99;
			} else if (leftBtnRef.current && rightBtnRef.current) {
				leftBtnRef.current.disabled = true;
				rightBtnRef.current.disabled = true;
			}
		};

		const navigateTimeline = (direction) => {
			const st = ScrollTrigger.getById("timelineScroll");
			if (!st) return;

			const scrollRange = st.end - st.start;
			const step = scrollRange * 0.2;

			let targetScrollPos;
			if (direction > 0) {
				targetScrollPos = Math.min(st.end, st.scroll() + step);
			} else {
				targetScrollPos = Math.max(st.start, st.scroll() - step);
			}

			gsap.to(window, {
				scrollTo: {
					y: targetScrollPos,
					autoKill: false,
				},
				duration: 0.8,
				ease: "power2.inOut",
				onComplete: updateButtonStates,
			});
		};

		if (leftBtnRef.current) {
			leftBtnRef.current.addEventListener("click", () => navigateTimeline(-1));
		}
		if (rightBtnRef.current) {
			rightBtnRef.current.addEventListener("click", () => navigateTimeline(1));
		}

		const handleKeyDown = (e) => {
			if (
				e.key === "ArrowLeft" &&
				leftBtnRef.current &&
				!leftBtnRef.current.disabled
			) {
				e.preventDefault();
				navigateTimeline(-1);
			} else if (
				e.key === "ArrowRight" &&
				rightBtnRef.current &&
				!rightBtnRef.current.disabled
			) {
				e.preventDefault();
				navigateTimeline(1);
			}
		};
		document.addEventListener("keydown", handleKeyDown);

		setupTimelineAnimation();
		ScrollTrigger.refresh(true);

		const handleResize = () => {
			if (window.resizeTimeout) clearTimeout(window.resizeTimeout);
			window.resizeTimeout = setTimeout(() => {
				ScrollTrigger.refresh(true);
				setupTimelineAnimation();
			}, 250);
		};
		window.addEventListener("resize", handleResize);

		const handleScroll = () => updateButtonStates();
		window.addEventListener("scroll", handleScroll);

		return () => {
			lenis.destroy();
			gsap.ticker.remove(lenis.raf);
			ScrollTrigger.getAll().forEach((st) => st.kill());
			if (timelineTween) timelineTween.kill();

			if (leftBtnRef.current) {
				leftBtnRef.current.removeEventListener("click", () =>
					navigateTimeline(-1)
				);
			}
			if (rightBtnRef.current) {
				rightBtnRef.current.removeEventListener("click", () =>
					navigateTimeline(1)
				);
			}
			document.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<section className="timeline-wrapper" ref={timelineWrapperRef}>
				<div className="timeline-container">
					<div className="container">
						<div className="section_title">
							<h2 className="title_text">
								<span className="sub_title">Our History</span> Interactive
								Timeline
							</h2>
						</div>
					</div>
					<div className="position-relative">
						<div id="timeline" ref={timelineSectionRef}>
							<div className="timeline-overlay"></div>
						</div>

						<div className="timeline-controls left">
							<button
								className="btn-control"
								id="control-timeline-left"
								aria-label="Scroll left"
								ref={leftBtnRef}>
								<ChevronLeft size={32} />
							</button>
						</div>

						<div className="timeline-controls right">
							<button
								className="btn-control"
								id="control-timeline-right"
								aria-label="Scroll right"
								ref={rightBtnRef}>
								<ChevronRight size={32} />
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default StoryTimeline;
