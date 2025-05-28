import Faq from "@/components/sections/home/Faq";
import VideoSection from "@/components/layouts/VideoSection";
import AboutUs from "@/components/sections/about/AboutUs";
import Consulting from "@/components/sections/about/Consulting";
import PageTitle from "@/components/sections/PageTitle";
import React from "react";

const About = () => {
  return (
    <>
      <PageTitle
        customClass="about-style"
        pageName="About Us"
        floatImage="/images/breadcrumb/breadcrumb_img_1.png"
        pageText="Tristique nulla aliquet enim tortor at auctor urna nunc. Massa enim nec dui nunc mattis enim ut tellus"
      />

      <AboutUs/>
    <Consulting />
    <Faq />
    <VideoSection />
    </>
  );
};

export default About;
