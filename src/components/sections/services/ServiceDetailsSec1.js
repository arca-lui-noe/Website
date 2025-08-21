"use client";
import { Link } from "@/i18n/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { useEffect, useRef } from "react";

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 3,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	pagination: {
		clickable: false,
	},
	loop: true,
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		575: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		767: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		991: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		1199: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
};

const ServiceDetailsSec1 = ({ pageDescription, gallery }) => {
	const descriptionRef = useRef(null);
	const apiUrl = process.env.NEXT_PUBLIC_API_URL;

	useEffect(() => {
		if (descriptionRef.current && pageDescription) {
			// Set the HTML content
			descriptionRef.current.innerHTML = pageDescription;

			// Process any list items to add Font Awesome icons
			const listItems = descriptionRef.current.querySelectorAll("li");
			listItems.forEach((li) => {
				// Check if it doesn't already have an icon
				if (!li.querySelector(".fas, .fa")) {
					// Create icon element
					const icon = document.createElement("i");
					icon.className = "fas fa-check-circle";
					icon.style.color = "#cca162";
					icon.style.marginRight = "0.5rem";

					// Insert icon at the beginning
					li.insertBefore(icon, li.firstChild);
				}
			});
		}
	}, [pageDescription]);

	return (
		<>
			<section className="sitting_service section_space_lg">
				<div className="container">
					<div className="row align-items-center justify-content-lg-between">
						<div className="col col-lg-6">
							<div
								ref={descriptionRef}
								className="single-service-description pe-lg-5"></div>
						</div>
						<div className="col col-lg-6">
							<div className="services_image_carousel zoom-gallery">
								<Swiper {...swiperOptions} className="common_carousel_3col">
									{gallery &&
										gallery.length > 0 &&
										gallery.map((item, index) => (
											<SwiperSlide className="carousel_item" key={index}>
												<Link
													className="popup_image"
													href={`${apiUrl}/uploads/services_gallery/${item.gallery_image}`}>
													<Image
														width={303}
														height={430}
														src={`${apiUrl}/uploads/services_gallery/${item.gallery_image}`}
														alt="Pet Service"
													/>
												</Link>
											</SwiperSlide>
										))}
								</Swiper>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default ServiceDetailsSec1;
