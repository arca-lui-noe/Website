import Image from "next/image";
import { Link } from "@/i18n/navigation";

const AboutUs = ({
	years,
	callout,
	title,
	desc,
	point1,
	point2,
	point3,
	point4,
	locale,
}) => {
	return (
		<>
			<section className="about_section section_space_lg">
				<div className="container">
					<div className="row align-items-center">
						<div className="col order-last col-lg-6">
							<div className="about_image_2">
								<Image
									width={550}
									height={480}
									src="/images/about/about_years_image.webp"
									alt="Pet Care Image"
								/>
								<div
									className="experience_years"
									style={{
										backgroundImage: "url(/images/shape/shape_circle_1.svg)",
									}}>
									<strong>25+</strong>
									<span>{years}</span>
								</div>
							</div>
						</div>
						<div className="col col-lg-6">
							<div className="about_content_2">
								<div className="section_title">
									<h2 className="title_text">
										<span className="sub_title">{callout}</span> {title}
									</h2>
									<p className="mb-0">{desc} </p>
								</div>
								<ul className="icon_list unorder_list_block">
									<li>
										{" "}
										<i className="fas fa-bone"></i> <span>{point1}</span>
									</li>
									<li>
										{" "}
										<i className="fas fa-bone"></i> <span>{point2}</span>
									</li>
									<li>
										{" "}
										<i className="fas fa-bone"></i> <span>{point3}</span>
									</li>
									<li>
										{" "}
										<i className="fas fa-bone"></i> <span>{point4}</span>
									</li>
								</ul>
								<Link className="btn btn_primary" href="/services">
									<i className="fas fa-paw"></i>{" "}
									{locale === "hu" ? "Szolgáltatásaink" : "Serviciile noastre"}
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
AboutUs;
export default AboutUs;
