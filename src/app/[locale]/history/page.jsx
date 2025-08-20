import VideoSection from "@/components/layouts/VideoSection";
import AboutUs from "@/components/sections/about/AboutUs";
import Consulting from "@/components/sections/about/Consulting";
import Faq from "@/components/sections/home/Faq";
import PageTitle from "@/components/sections/PageTitle";
import StoryTimeline from "@/components/StoryTimeline/StoryTimeline";
import { getTranslations } from "next-intl/server";
const History = async () => {
	const history_text = await getTranslations("History");
	return (
		<>
			<PageTitle
				customClass="about-style"
				pageName={history_text("title")}
				floatImage="/images/breadcrumb/breadcrumb_img_12.png"
				pageText={history_text("lead")}
			/>
			<div className="container pt-5 mt-md-5 pb-0">
				<div className="row">
					<div className="col-lg-12">
						<div className="section_title text-left ">
							<p style={{ fontSize: "1.2em" }}>{history_text("text1")}</p>
						</div>
					</div>
				</div>
			</div>
			<StoryTimeline />
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section_title text-left ">
							<p style={{ fontSize: "1.2em" }}>{history_text("text2")}</p>
						</div>
					</div>
				</div>
			</div>
			{/* <VideoSection videoUrl="https://www.youtube.com/embed/tFC3jE34ilc" /> */}
			<VideoSection videoUrl={null} />
		</>
	);
};

export default History;
