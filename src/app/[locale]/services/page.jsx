import PageTitle from "@/components/sections/PageTitle";

import React from "react";
import ServiceContact from "../../../components/sections/services/ServiceContact";
import Contact from "@/components/sections/home/Contact";
import Service from "@/components/sections/home/Service";

const Services = () => {
  return (
    <>
      <PageTitle
        customClass="servicedetails-style"
        pageName="Pet Sitting"
        floatImage="/images/breadcrumb/breadcrumb_img_3.png"
        pageText="Blandit cursus risus at ultrices. Enim sit amet venenatis urna cursus eget nunc scelerisque"
      />
      <Service showButton={false} />
      <Contact />
      <ServiceContact />
    </>
  );
};

export default Services;
