import Image from "next/image";
import Link from "next/link";

const Subscription = () => {
	return (
		<>
			<section className="subscribe_section section_space_md">
				<div className="container">
					<div className="subscribe_wrap decoration_wrap">
						<div className="content_wrap m-0">
							<h2 className="title_text text-start">
								Get 20% Off Your First Purchase When You Use Petco Credit Card{" "}
							</h2>
							<p className="description_text text-start p-0">
								Sapien nec sagittis aliquam malesuada bibendum arcu vitae
								elementum. Ligula ullamcorper malesuada proin libero nunc
								consequat interdum varius sit.
							</p>
						</div>
						<button className="btn btn_warning" type="submit">
							Subscribe
						</button>
						<div
							className="overlay"
							style={{
								backgroundImage: "url(images/overlay/shapes_overlay_5.svg)",
							}}></div>
						<div className="decoration_item shape_image_1">
							<Image
								width={550}
								height={350}
								src="/images/shape/shape_path_5.svg"
								alt="Shape Image"
							/>
						</div>
						{/* <div className="decoration_item shape_image_2">
              <Image  width={30}
            height={30} src="/images/shape/shape_circle_1.svg" alt="Shape Image" />
            </div> */}
						{/* <div className="decoration_item pet_image_1">
              <Image  width={30}
            height={30} src="/images/about/about_img_4.png" alt="Pet Image" />
            </div> */}
						<div className="decoration_item pet_image_2">
							<Image
								width={400}
								height={660}
								src="/images/about/about_img_5.png"
								alt="Pet Image"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default Subscription;
