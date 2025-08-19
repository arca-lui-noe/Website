// components/StoryTimeline/StoryTimeline.jsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SCROLL_STEP_RATIO = 0.4; // 40% of visible width per click
const TARGET_IMAGE_HEIGHT = 550; // Increased visual height for the timeline (was 560)
// Replace fixed duration with base; actual duration will be distance-based
const BASE_SCROLL_DURATION = 320; // ms (faster than previous 550)

const StoryTimeline = () => {
	const scrollContainerRef = useRef(null);
	const imageRef = useRef(null);
	const leftBtnRef = useRef(null);
	const rightBtnRef = useRef(null);
	const [dimensions, setDimensions] = useState({
		width: null,
		height: TARGET_IMAGE_HEIGHT,
	});
	const [loaded, setLoaded] = useState(false);

	// rAF animation state
	const animRef = useRef({
		frame: null,
		start: 0,
		from: 0,
		to: 0,
		duration: BASE_SCROLL_DURATION,
	});

	const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

	const cancelAnim = () => {
		if (animRef.current.frame) cancelAnimationFrame(animRef.current.frame);
		animRef.current.frame = null;
	};

	const smoothScrollTo = (targetX, baseDuration = BASE_SCROLL_DURATION) => {
		const sc = scrollContainerRef.current;
		if (!sc) return;
		const maxX = sc.scrollWidth - sc.clientWidth;
		const clamped = Math.max(0, Math.min(maxX, targetX));

		const now = performance.now();
		const from = sc.scrollLeft;
		// Distance-based dynamic duration (faster overall)
		const distance = Math.abs(clamped - from);
		// Scale: 0px -> 0ms; 800px -> ~320ms (BASE), clamp to [140, 380]
		const scaled = (distance / 800) * baseDuration;
		const duration = Math.min(380, Math.max(140, scaled));

		animRef.current = { frame: null, start: now, from, to: clamped, duration };

		const step = (ts) => {
			const { start, from, to, duration } = animRef.current;
			const elapsed = Math.min(1, (ts - start) / duration);
			const eased = easeOutCubic(elapsed);
			sc.scrollLeft = from + (to - from) * eased;
			if (elapsed < 1) {
				animRef.current.frame = requestAnimationFrame(step);
			} else {
				animRef.current.frame = null;
				updateButtonStates();
			}
		};

		cancelAnim();
		animRef.current.frame = requestAnimationFrame(step);
	};

	const updateButtonStates = () => {
		const sc = scrollContainerRef.current;
		if (!sc || !leftBtnRef.current || !rightBtnRef.current) return;
		const atStart = sc.scrollLeft <= 0;
		const atEnd = sc.scrollLeft + sc.clientWidth >= sc.scrollWidth - 1; // allow tiny rounding
		leftBtnRef.current.disabled = atStart;
		rightBtnRef.current.disabled = atEnd;
	};

	const navigate = (dir) => {
		const sc = scrollContainerRef.current;
		if (!sc) return;
		const step = sc.clientWidth * SCROLL_STEP_RATIO * dir;
		smoothScrollTo(sc.scrollLeft + step);
	};

	useEffect(() => {
		const sc = scrollContainerRef.current;
		if (!sc) return;

		const handleScroll = () => updateButtonStates();
		const handleResize = () => updateButtonStates();
		const handleKeyDown = (e) => {
			if (e.key === "ArrowLeft" && !leftBtnRef.current?.disabled) {
				e.preventDefault();
				navigate(-1);
			} else if (e.key === "ArrowRight" && !rightBtnRef.current?.disabled) {
				e.preventDefault();
				navigate(1);
			}
		};
		const handleWheel = (e) => {
			if (!e.shiftKey && Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
				e.preventDefault();
				const sc = scrollContainerRef.current;
				if (!sc) return;
				const multiplier = 1.1; // slightly faster
				smoothScrollTo(
					sc.scrollLeft + e.deltaY * multiplier,
					BASE_SCROLL_DURATION
				);
			}
		};

		sc.addEventListener("scroll", handleScroll, { passive: true });
		sc.addEventListener("wheel", handleWheel, { passive: false });
		window.addEventListener("resize", handleResize);
		document.addEventListener("keydown", handleKeyDown);

		updateButtonStates();

		return () => {
			sc.removeEventListener("scroll", handleScroll);
			sc.removeEventListener("wheel", handleWheel);
			window.removeEventListener("resize", handleResize);
			document.removeEventListener("keydown", handleKeyDown);
			cancelAnim();
		};
	}, [loaded, dimensions.width]);

	const onImageLoad = () => {
		const img = imageRef.current;
		if (!img) return;
		const { naturalWidth, naturalHeight } = img;
		// Calculate scaled width for target height; ensure width at least 1.5x viewport to force scroll if original not wide enough
		const ratio = naturalWidth / naturalHeight || 1;
		let computedWidth = Math.round(TARGET_IMAGE_HEIGHT * ratio);
		const viewportWidth =
			scrollContainerRef.current?.clientWidth || window.innerWidth;
		if (computedWidth < viewportWidth * 1.5) {
			computedWidth = Math.round(viewportWidth * 1.5); // upscale to guarantee horizontal scroll
		}
		setDimensions({ width: computedWidth, height: TARGET_IMAGE_HEIGHT });
		setLoaded(true);
		requestAnimationFrame(updateButtonStates);
	};

	return (
		<section className="timeline-wrapper">
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
					<div
						className="timeline-scroll-container"
						ref={scrollContainerRef}
						style={{
							overflowX: "auto",
							overflowY: "hidden",
							whiteSpace: "nowrap",
							position: "relative",
							WebkitOverflowScrolling: "touch",
							scrollbarWidth: "none", // hide Firefox scrollbar
							// Hide scrollbar in IE/Edge (legacy) via inline style
							msOverflowStyle: "none",
							borderRadius: 8,
							background: "var(--timeline-bg, rgba(0,0,0,0.03))",
							padding: "16px 0",
							maxWidth: "100%",
							scrollBehavior: "auto", // we control animation manually
							cursor: "grab",
						}}
						aria-label="Historical timeline horizontal scroll">
						{/* Wrapper preserves intrinsic width of the image so horizontal scroll works */}
						<div style={{ display: "inline-block", position: "relative" }}>
							<img
								ref={imageRef}
								src="/story_timeline.png"
								alt="Company history timeline"
								style={{
									display: "block",
									height: dimensions.height,
									width: dimensions.width ? dimensions.width : "auto",
									maxWidth: "none",
									userSelect: "none",
									flexShrink: 0,
									pointerEvents: "none",
								}}
								draggable="false"
								onLoad={onImageLoad}
								onError={() => {
									console.error("Failed to load /story_timeline.png");
									if (leftBtnRef.current)
										leftBtnRef.current.style.display = "none";
									if (rightBtnRef.current)
										rightBtnRef.current.style.display = "none";
								}}
							/>
							{/* Optional overlay retained */}
							<div
								className="timeline-overlay"
								style={{ pointerEvents: "none" }}
							/>
						</div>
					</div>

					<div className="timeline-controls left">
						<button
							className="btn-control"
							id="control-timeline-left"
							aria-label="Scroll left"
							ref={leftBtnRef}
							onClick={() => navigate(-1)}>
							<ChevronLeft size={32} />
						</button>
					</div>

					<div className="timeline-controls right">
						<button
							className="btn-control"
							id="control-timeline-right"
							aria-label="Scroll right"
							ref={rightBtnRef}
							onClick={() => navigate(1)}>
							<ChevronRight size={32} />
						</button>
					</div>
				</div>
			</div>
			{/* Scoped styles to hide WebKit scrollbars without affecting global scrollbars */}
			<style jsx>{`
				.timeline-scroll-container::-webkit-scrollbar {
					display: none;
				}
			`}</style>
		</section>
	);
};

export default StoryTimeline;
