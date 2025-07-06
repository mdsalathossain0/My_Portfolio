import React from 'react'
import ServiceCard from '../components/ServiceCard'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import ComText from '../components/ComText'

import Eshop from '../assets/eshop.jpg'
import Social from '../assets/socialmedia.jpg'
import Corpotrate from '../assets/corporate.jpg'
import Portfolio from '../assets/portfolio.jpg'

const Services = () => {
  return (
    <section id='services' className='py-20 bg-fifth'>
        <Container>
          <Heading className='text-center ' text='Services'/>
          <ComText className='w-full lg:w-[750px] mx-auto text-center pt-8 pb-15 px-3 lg:px-0' text='Our consultants have years of experience on the in success. ​Through the provision of our services. Find the service we provide'/>
          <Flex className='flex-col lg:flex-row lg:justify-between gap-y-18 lg:gap-y-0 items-center'>
            <ServiceCard heading='E-Commerce' text='Development' image={Eshop}/>
            <ServiceCard heading='Social Media' text='Development' image={Social}/>
            <ServiceCard heading='Corporate' text='Development' image={Corpotrate}/>
            <ServiceCard heading='Personal' text='Development' image={Portfolio}/>
          </Flex>
        </Container>
    </section>
  )
}

export default Services