import NewsGrid from "@/components/sections/blog/NewsGrid";
import PageTitle from "@/components/sections/PageTitle";
import { getTranslations } from "next-intl/server";
import React from "react";

const BlogPage = async ({ params: { locale } }) => {
	const blog_text = await getTranslations("Blog");
	return (
		<>
			<PageTitle
				homeName={blog_text("home-title")}
				customClass="news-style"
				pageName={blog_text("title")}
				floatImage="/images/breadcrumb/breadcrumb_img_5.png"
				pageText={blog_text("subtitle")}
			/>
			<NewsGrid locale={locale} />
		</>
	);
};

export default BlogPage;
