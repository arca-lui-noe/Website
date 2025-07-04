"use client";
import Image from "next/image";
import React from "react";
// import herVideo from "../../../../public/videos/herobg.mp4"; // Remove this line

const HeroVideo = () => {
	return (
		<>
			<video width="1020" height="240" controls autoplay muted preload="none">
				<source src="/video/petvet-video.mp4" type="video/mp4" />
			</video>
		</>
	);
};

export default HeroVideo;
