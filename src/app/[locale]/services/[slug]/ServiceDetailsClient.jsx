"use client";
import Service from "@/components/sections/home/Service";
import PageTitle from "@/components/sections/PageTitle";
import ServiceDetailsSec1 from "@/components/sections/services/ServiceDetailsSec1";
import ServiceDetailsSec3 from "@/components/sections/services/ServiceDetailsSec3";
import LoadingScreen from "@/components/ui/LoadingScreen";
import { LoadingOverlay } from "@/hooks/useLoadingState";
import { useLocale } from "next-intl";
import { useEffect, useState, useRef } from "react";
import React from "react";
import { useRouter } from "@/i18n/navigation";

const ServiceDetailsClient = ({ params }) => {
	const { slug } = React.use(params);
	const locale = useLocale();
	const router = useRouter();
	const [service, setService] = useState(null);
	const [gallery, setGallery] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isGalleryLoading, setIsGalleryLoading] = useState(false);
	const apiUrl = process.env.NEXT_PUBLIC_API_URL;
	const serviceIdRef = useRef(null);
	const prevLocaleRef = useRef(locale);

	useEffect(() => {
		const fetchServices = async () => {
			setIsLoading(true);
			try {
				const localeChanged = prevLocaleRef.current !== locale;
				prevLocaleRef.current = locale;

				const url =
					localeChanged && serviceIdRef.current
						? `/api/single_service?service_id=${serviceIdRef.current}&locale=${locale}`
						: `/api/single_service?slug=${slug}&locale=${locale}`;

				const res = await fetch(url);
				const data = await res.json();

				if (data?.slug && data.slug !== slug) {
					router.replace(`/services/${data.slug}`);
					return;
				}

				if (data?.service_id) {
					serviceIdRef.current = data.service_id;
				}

				setService(data);
				// console.log("Fetched service:", data);

				// Fetch gallery after service is loaded
				if (data && data.service_id) {
					setIsGalleryLoading(true);
					try {
						const galleryRes = await fetch(
							`/api/single_service_gallery?id=${data.service_id}`
						);
						const galleryData = await galleryRes.json();
						setGallery(galleryData);
						// console.log("Fetched service gallery:", galleryData);
					} catch (galleryErr) {
						console.error("Failed to load service gallery", galleryErr);
					} finally {
						setIsGalleryLoading(false);
					}
				}
			} catch (err) {
				console.error("Failed to load service", err);
			} finally {
				setIsLoading(false);
			}
		};

		if (slug) {
			fetchServices();
		}
	}, [slug, locale]);

	// Show loading screen while data is being fetched
	if (isLoading) {
		return <LoadingScreen locale={locale} />;
	}

	return (
		<>
			<PageTitle
				customClass="servicedetails-style"
				pageName={service?.name || "Service Details"}
				pageDescription=""
				floatImage="/images/breadcrumb/breadcrumb_img_3.png"
				pageText={service?.short_description || ""}
			/>
			<LoadingOverlay isLoading={isGalleryLoading} message="Loading gallery...">
				<ServiceDetailsSec1
					pageDescription={service?.description1 || ""}
					gallery={gallery}
				/>
			</LoadingOverlay>
			{/* <ServiceDetailsSec2 /> */}
			<ServiceDetailsSec3
				pageDescription={service?.description2 || ""}
				petImage={
					service?.pet_image
						? `${apiUrl}/uploads/service/${service.pet_image}`
						: "/images/banner/dogs_img_4.png"
				}
				videoUrl={service?.video || null}
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

export default ServiceDetailsClient;
