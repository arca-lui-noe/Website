"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// import ModalVideo from 'react-modal-video';

const VideoSection = ({ videoUrl }) => {
	const [isOpen, setOpen] = useState(false);
	return (
		<>
			{/* <section className="video_section section_space_lg pb-0">
				<div className="container">
					<div className="section_title text-center">
						<h2 className="title_text mb-0">
							<span className="sub_title">About Us</span>
							We Care About Your Friends
						</h2>
					</div>

					<div className="video_wrap">
						<div className="video_poster_wrap">
							<Image
								width={1350}
								height={450}
								src="/images/video/video_poster_1.jpg"
								alt="We Care About Your Friends"
								style={{ borderRadius: "10px" }}
							/>
						</div>
						<button onClick={() => setOpen(true)} className="popup_video">
							<i className="fas fa-play" />
						</button>
					</div>
				</div>
			</section> */}
			{/* <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="tFC3jE34ilc" onClose={() => setOpen(false)} /> */}
			{videoUrl && (
				<section className="video_section section_space_lg pb-0">
					<div className="container">
						<div
							className="video_widget"
							style={{
								position: "relative",
								paddingBottom: "56.25%",
								height: 0,
							}}>
							<iframe
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									height: "100%",
									borderRadius: "20px",
								}}
								src={videoUrl}
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen></iframe>
						</div>
					</div>
				</section>
			)}
		</>
	);
};
export default VideoSection;
