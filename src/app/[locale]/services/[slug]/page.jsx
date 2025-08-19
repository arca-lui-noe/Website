"use client";
import Service from "@/components/sections/home/Service";
import PageTitle from "@/components/sections/PageTitle";
import ServiceDetailsSec1 from "@/components/sections/services/ServiceDetailsSec1";
import ServiceDetailsSec2 from "@/components/sections/services/ServiceDetailsSec2";
import ServiceDetailsSec3 from "@/components/sections/services/ServiceDetailsSec3";
import ServiceDetailsSec5 from "@/components/sections/services/ServiceDetailsSec5";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

import React from "react";

const ServiceDetails = ({ params }) => {
	const { slug } = React.use(params);
	const locale = useLocale();
	const [service, setService] = useState(null);
	const [gallery, setGallery] = useState(null);
	const apiUrl = process.env.NEXT_PUBLIC_API_URL;

	useEffect(() => {
		const fetchServices = async () => {
			try {
				const res = await fetch(
					`/api/single_service?slug=${slug}&locale=${locale}`
				);
				const data = await res.json();
				setService(data);
				console.log("Fetched service:", data);

				// Fetch gallery after service is loaded
				if (data && data.service_id) {
					try {
						const galleryRes = await fetch(
							`/api/single_service_gallery?id=${data.service_id}`
						);
						const galleryData = await galleryRes.json();
						setGallery(galleryData);
						console.log("Fetched service gallery:", galleryData);
					} catch (galleryErr) {
						console.error("Failed to load service gallery", galleryErr);
					}
				}
			} catch (err) {
				console.error("Failed to load service", err);
			}
		};

		if (slug) {
			fetchServices();
		}
	}, [slug, locale]);

	return (
		<>
			<PageTitle
				customClass="servicedetails-style"
				pageName={service ? service.name : "Loading..."}
				pageDescription={service ? service.short_description : "Loading..."}
				floatImage="/images/breadcrumb/breadcrumb_img_3.png"
				pageText="Blandit cursus risus at ultrices. Enim sit amet venenatis urna cursus eget nunc scelerisque"
			/>
			<ServiceDetailsSec1
				pageDescription={service ? service.description1 : "Loading..."}
				gallery={gallery}
			/>
			{/* <ServiceDetailsSec2 /> */}
			<ServiceDetailsSec3
				pageDescription={service ? service.description2 : "Loading..."}
				petImage={
					service
						? `${apiUrl}/uploads/service/${service.pet_image}`
						: "public\\images\\logo\\logo.svg"
				}
				videoUrl={service ? service.video : null}
			/>
			{/* <ServiceDetailsSec4 /> */}
			{/* <ServiceDetailsSec5 /> */}
			<Service
				noPaddingBottom={true}
				showButton={true}
				limit={3}
				locale={locale}
			/>
		</>
	);
};

export default ServiceDetails;
