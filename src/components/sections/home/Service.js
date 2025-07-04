import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

// Szolgáltatások adatai
const servicesData = [
	{
		id: 1,
		title: "Walking & Sitting",
		description:
			"Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae eget dolor morbi",
		href: "services/asd",
	},
	{
		id: 2,
		title: "Pet Grooming",
		description:
			"Et odio pellentesque diam volutpat commodo sed egestas egestas pellentesque nec nam",
		href: "services/asd",
	},
	{
		id: 3,
		title: "Pet Training",
		description:
			"Aliquam ut porttitor leo a diam sollicitudin tempor sit amet est placerat",
		href: "services/asd",
	},
	{
		id: 4,
		title: "Pet Taxi",
		description:
			"Maecenas ultricies mi eget mauris pharetra et ultrices consectetur adipiscing elit",
		href: "services/asd",
	},
	{
		id: 5,
		title: "Health & Wellness",
		description:
			"Amet porttitor eget dolor morbi non arcu risus quis varius blandit aliquam etiam",
		href: "services/asd",
	},
	{
		id: 6,
		title: "Pet Hotel",
		description:
			"Turpis massa sed elementum tempus egestas sed sed risus aliquam urna cursus eget n",
		href: "services/asd",
	},
];

const Service = async ({
	noPaddingBottom = false,
	showButton = true,
	limit = null,
}) => {
	// Limitáljuk a szolgáltatásokat, ha meg van adva limit
	const displayedServices = limit ? servicesData.slice(0, limit) : servicesData;
	// Fordítások betöltése
	const service_text = await getTranslations("Home");

	return (
		<>
			<section
				className={`service_section section_space_lg${
					noPaddingBottom ? " pb-0" : ""
				}`}>
				<div className="container">
					<div className="section_title text-center">
						<h2 className="title_text mb-0">
							<span className="sub_title">{service_text("service-title")}</span>{" "}
							{service_text("service-subtitle")}
						</h2>
					</div>

					<div className="row justify-content-center">
						{displayedServices.map((service) => (
							<div key={service.id} className="col col-lg-4 col-sm-6">
								<div
									className="service_item"
									style={{
										backgroundImage: "url(images/shape/shape_path_1.svg)",
									}}>
									<div className="title_wrap">
										<h3 className="item_title mb-0">{service.title}</h3>
									</div>
									<p>{service.description}</p>

									<Link className="btn_unfill" href={service.href}>
										<span>Get Service</span>
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
									<i className="fas fa-paw"></i> All Services
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
