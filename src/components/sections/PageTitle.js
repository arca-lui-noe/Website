import Image from "next/image";
import { Link } from "@/i18n/navigation";
import React from "react";

const PageTitle = (props) => {
	return (
		<section className="page-title">
			<div className="container">
				<div className="title-wrapper">
					<ul className="innerpage-breadcrumb ps-0">
						<li>
							<Link href="/">ARCA LUI NOE</Link>
						</li>
						<li>{props.pageName}</li>
					</ul>
					<h1 className="title">{props.pageName}</h1>
					<p className="text">{props.pageText}</p>
				</div>
			</div>
			<Image
				width={1066}
				height={710}
				className={props.customClass}
				src={props.floatImage}
				alt=""
			/>
		</section>
	);
};

export default PageTitle;
