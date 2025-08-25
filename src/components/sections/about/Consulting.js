import Image from "next/image";

const Consulting = ({
	callout,
	title,
	lead,
	title1,
	desc1,
	title2,
	desc2,
	title3,
	desc3,
	title4,
	desc4,
}) => {
	return (
		<>
			<section className="consultation_section section_space_lg decoration_wrap">
				<div className="container">
					<div className="section_title text-center">
						<h2 className="title_text">
							<span className="sub_title">{callout}</span>
							{title}
						</h2>
						<p className="mb-0">{lead}</p>
					</div>
				</div>
				<div
					className="consultation_wrap"
					style={{ backgroundImage: "url(/images/shape/shape_path_6.svg)" }}>
					<div className="container">
						<div className="row">
							<div className="col col-lg-3 col-md-6 col-sm-6">
								<div className="iconbox_item iconbox_centericon">
									<div
										className="item_icon"
										style={{
											backgroundImage: "url(/images/shape/shape_outline.svg)",
										}}>
										{/* <i className="fas fa-comment-dots"></i> */}
										<i className="fa-solid fa-phone"></i>
									</div>
									<div className="item_content">
										<h3 className="item_title">{title1}</h3>
										<p className="mb-0">{desc1}</p>
									</div>
								</div>
							</div>

							<div className="col col-lg-3 col-md-6 col-sm-6">
								<div className="iconbox_item iconbox_centericon">
									<div
										className="item_icon"
										style={{
											backgroundImage: "url(/images/shape/shape_outline.svg)",
										}}>
										<i className="fas fa-calendar-check"></i>
									</div>
									<div className="item_content">
										<h3 className="item_title">{title2}</h3>
										<p className="mb-0">{desc2}</p>
									</div>
								</div>
							</div>

							<div className="col col-lg-3 col-md-6 col-sm-6">
								<div className="iconbox_item iconbox_centericon">
									<div
										className="item_icon"
										style={{
											backgroundImage: "url(/images/shape/shape_outline.svg)",
										}}>
										<i className="fa-solid fa-bone-break"></i>
									</div>
									<div className="item_content">
										<h3 className="item_title">{title3}</h3>
										<p className="mb-0">{desc3}</p>
									</div>
								</div>
							</div>

							<div className="col col-lg-3 col-md-6 col-sm-6">
								<div className="iconbox_item iconbox_centericon">
									<div
										className="item_icon"
										style={{
											backgroundImage: "url(/images/shape/shape_outline.svg)",
										}}>
										<i className="fa-solid fa-bone"></i>
									</div>
									<div className="item_content">
										<h3 className="item_title">{title4}</h3>
										<p className="mb-0">{desc4}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="decoration_item paw_shape_1 d-none d-md-block">
					<Image
						width={340}
						height={280}
						src="/images/shape/shape_paw_color2_1.png"
						alt="Pet Paw"
					/>
				</div>

				<div className="decoration_item paw_shape_2 d-none d-md-block">
					<Image
						width={250}
						height={250}
						src="/images/shape/shape_paw_color2_2.png"
						alt="Pet Paw"
					/>
				</div>
			</section>
		</>
	);
};
export default Consulting;
