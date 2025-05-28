import Service from '@/components/sections/home/Service'
import PageTitle from '@/components/sections/PageTitle'
import ServiceDetailsSec1 from '@/components/sections/services/ServiceDetailsSec1'
import ServiceDetailsSec2 from '@/components/sections/services/ServiceDetailsSec2'
import ServiceDetailsSec3 from '@/components/sections/services/ServiceDetailsSec3'
import ServiceDetailsSec5 from '@/components/sections/services/ServiceDetailsSec5'

import React from 'react'

const ServiceDetails = () => {
  return (
    <>
     <PageTitle customClass="servicedetails-style" pageName="Pet Sitting" floatImage="/images/breadcrumb/breadcrumb_img_3.png" pageText="Blandit cursus risus at ultrices. Enim sit amet venenatis urna cursus eget nunc scelerisque" />
    <ServiceDetailsSec1 />
    <ServiceDetailsSec2 />
    <ServiceDetailsSec3 />
    {/* <ServiceDetailsSec4 /> */}
    <ServiceDetailsSec5 />
      <Service noPaddingBottom={true} showButton={true} limit={3} />

    </>
  )
}

export default ServiceDetails