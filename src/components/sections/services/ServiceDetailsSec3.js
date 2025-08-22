import Image from "next/image";
import React, { useEffect, useRef } from "react";

const ServiceDetailsSec3 = ({ pageDescription, petImage, videoUrl }) => {
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
			<section className="about_section decoration_wrap pb-0 pt-0 pt-md-2">
				<div className="container">
					<div className="row align-items-center justify-content-lg-between">
						<div className="col-12 col-lg-6">
							<div
								className="position-relative d-flex justify-content-center align-items-center"
								style={{ minHeight: "500px" }}>
								<Image
									width={600}
									height={600}
									style={{
										objectFit: "contain",
										maxHeight: "600px",
										maxWidth: "100%",
										zIndex: 4,
									}}
									src={petImage}
									alt="Pet Doctor"
								/>
								<Image
									width={520}
									height={520}
									src="/images/shape/shape_circles.svg"
									alt="Yellow Circle"
									className="position-absolute"
									style={{ zIndex: 2 }}
								/>
							</div>
						</div>
						<div className="col-12 col-lg-6">
							<div
								ref={descriptionRef}
								className="single-service-description"></div>
						</div>
					</div>
				</div>

				<div className="decoration_item shape_dot_1">
					<Image
						width={150}
						height={260}
						src="/images/shape/shape_dot_group_1.svg"
						alt="Colorful Dots"
					/>
				</div>
			</section>
			{videoUrl && (
				<section className="video_section section_space_lg pb-0">
					<div className="container">
						<div
							className="video_widget"
							style={{
								position: "relative",
								paddingBottom: "56.25%",
								height: 0,
							}}>
							<iframe
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									height: "100%",
									borderRadius: "20px",
								}}
								src={videoUrl}
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen></iframe>
						</div>
					</div>
				</section>
			)}
		</>
	);
};
export default ServiceDetailsSec3;
