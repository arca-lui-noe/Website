"use client";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useEffect, useState } from "react";

const Service = ({
	noPaddingBottom = false,
	showButton = true,
	limit = null,
	serviceCallout,
	serviceCalloutTitle,
	locale,
}) => {
	// Limitáljuk a szolgáltatásokat, ha meg van adva limit
	const [services, setServices] = useState([]);

	useEffect(() => {
		const fetchServices = async () => {
			try {
				const res = await fetch(`/api/services?locale=${locale}`);
				const data = await res.json();
				setServices(data);
				console.log("Fetched services:", data);
			} catch (err) {
				console.error("Failed to load services", err);
			}
		};

		fetchServices();
	}, [locale]);

	return (
		<>
			<section
				className={`service_section section_space_lg${
					noPaddingBottom ? " pb-0" : ""
				}`}>
				<div className="container">
					<div className="section_title text-center">
						<h2 className="title_text mb-0">
							<span className="sub_title">{serviceCallout}</span>
							{serviceCalloutTitle}
						</h2>
					</div>

					<div className="row justify-content-center">
						{services.map((service) => (
							<div key={service.id} className="col col-lg-4 col-sm-6">
								<div
									className="service_item"
									style={{
										backgroundImage: "url(images/shape/shape_path_1.svg)",
									}}>
									<div className="title_wrap">
										<h3 className="item_title mb-0">{service.name}</h3>
									</div>

									<Link
										className="btn_unfill"
										href={`/services/${service.slug}`}>
										<span>
											{locale === "hu"
												? "Szolgáltatás igénylése"
												: "Solicită serviciul"}
										</span>
										<i className="far fa-long-arrow-right"></i>
									</Link>
									<div className="decoration_image">
										<Image
											width={95}
											height={120}
											src="/images/shape/shape_paws.svg"
											alt="Pet Paws"
										/>
									</div>
								</div>
							</div>
						))}

						{showButton && (
							<div className="text-center mt-2">
								<Link className="btn btn_primary" href="/services">
									<i className="fas fa-paw"></i>
									{locale === "hu" ? "Összes szolgáltatás" : "Toate serviciile"}
								</Link>
							</div>
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default Service;
