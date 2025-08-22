import Image from "next/image";

const Consulting = () => {
	return (
		<>
			<section className="consultation_section section_space_lg decoration_wrap">
				<div className="container">
					<div className="section_title text-center">
						<h2 className="title_text">
							<span className="sub_title">Consultation</span>
							How to Сonsult a Specialist
						</h2>
						<p className="mb-0">
							Auctor augue mauris augue neque gravida in fermentum
						</p>
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
										<i className="fas fa-comment-dots"></i>
									</div>
									<div className="item_content">
										<h3 className="item_title">Get in touch</h3>
										<p className="mb-0">
											Duis aute irure dolor in reprehenderit in voluptate{" "}
										</p>
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
										<h3 className="item_title">Schedule a visit</h3>
										<p className="mb-0">
											Duis aute irure dolor in reprehenderit in voluptate{" "}
										</p>
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
										<i className="fas fa-clipboard-list"></i>
									</div>
									<div className="item_content">
										<h3 className="item_title">Pet admission</h3>
										<p className="mb-0">
											Duis aute irure dolor in reprehenderit in voluptate{" "}
										</p>
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
										<i className="fas fa-home-lg"></i>
									</div>
									<div className="item_content">
										<h3 className="item_title">Take them home</h3>
										<p className="mb-0">
											Duis aute irure dolor in reprehenderit in voluptate{" "}
										</p>
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
