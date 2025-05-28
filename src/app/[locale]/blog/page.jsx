import NewsGrid from "@/components/sections/blog/NewsGrid";
import PageTitle from "@/components/sections/PageTitle";
import React from "react";

const BlogPage = () => {
  return (
    <>
      <PageTitle
        customClass="news-style"
        pageName="Our Blog"
        floatImage="/images/breadcrumb/breadcrumb_img_5.png"
        pageText="Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Amet purus gravida quis blandit turpis"
      />
      <NewsGrid />
    </>
  );
};

export default BlogPage;
