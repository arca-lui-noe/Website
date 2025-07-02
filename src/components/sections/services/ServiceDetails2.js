"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ServiceDetailss = () => {
	const [isOpen, setOpen] = useState(false);
	return (
		<>
			<section className="service_details_section section_space_lg">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-12">
							<div className="gmap_canvas ps-lg-3">
								<iframe src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default ServiceDetailss;
