"use client";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import React from "react";

const ErrorPage = ({ error, reset }) => {
	return (
		<>
			<section className="error_section bg-white position-relative">
				{/* String element that stretches from top to ball */}
				<div className="string-container position-absolute w-100 h-100 d-flex justify-content-center">
					<Image
						width={190}
						height={700}
						src="/images/string2.png"
						alt="String"
						className="string-image"
						style={{
							position: "absolute",
							top: "0",
							left: "49.9%",
							transform: "translateX(-50%)",
							height: "calc(50% + 40px)",
							width: "auto",
							objectFit: "fill",
							zIndex: 1,
						}}
					/>
				</div>

				<div
					className="container text-center position-relative bg-white"
					style={{ zIndex: 2 }}>
					<h1>
						5{" "}
						<Image
							width={216}
							height={230}
							src="/images/ball.png"
							alt="Pet Food Bowl"
						/>{" "}
						0
					</h1>
					<h2>Oops! Something Went Wrong</h2>
					<p>
						Don't worry, even the best pets have bad days.{" "}
						<span className="d-md-block">Let's get you back on track!</span>
					</p>

					{/* Action buttons */}
					<div className="error-actions d-flex flex-column flex-md-row justify-content-center gap-3 mt-4">
						<button className="btn btn_primary" onClick={() => reset()}>
							<i className="fas fa-redo"></i> Try Again
						</button>
						<Link className="btn btn_primary" href="/">
							<i className="fas fa-paw"></i> Home Page
						</Link>
					</div>

					{/* Error details - only show in development */}
					{process.env.NODE_ENV === "development" && error && (
						<div className="error-details mt-5 p-3 bg-light rounded text-left">
							<h5>Error Details (Development Only):</h5>
							<pre className="text-danger small">{error.message}</pre>
						</div>
					)}
				</div>
			</section>
		</>
	);
};

export default ErrorPage;
