import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const ServiceDetailsSec3 = ({ pageDescription, petImage, videoUrl }) => {
	const descriptionRef = useRef(null);
	const apiUrl = process.env.NEXT_PUBLIC_API_URL;
	console.log("Pet Image URL:", petImage);
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
			<section className="about_section decoration_wrap pb-0">
				<div className="container">
					<div className="row align-items-center justify-content-lg-between">
						<div className="col col-lg-6">
							<div className="about_image_1 bg-transparent">
								<div className="image_1 p-0">
									<Image
										width={640}
										height={640}
										src={petImage}
										alt="Pet Doctor"
									/>
								</div>
								{/* <div className="image_2">
                  <Image
                      width={300}
                    height={260}
                    src="/images/about/about_img_8.jpg"
                    alt="Cat Image"
                  />
                </div>
                <div className="image_3">
                  <Image
                  width={220}
                    height={200}
                    src="/images/about/about_img_9.jpg"
                    alt="Dog Image"
                  />
                </div> */}
								<div className="shape_img_1">
									<Image
										width={520}
										height={520}
										src="/images/shape/shape_circle_1.svg"
										alt="Yellow Circle"
									/>
								</div>
								<div className="shape_img_2">
									<Image
										width={300}
										height={300}
										src="/images/shape/shape_circle_3.svg"
										alt="Yellow Circle"
									/>
								</div>
							</div>
						</div>
						<div
							ref={descriptionRef}
							className="single-service-description col col-lg-5"></div>
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
