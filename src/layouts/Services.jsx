import React from 'react'
import ServiceCard from '../components/ServiceCard'
import Container from '../components/Container'
import Flex from '../components/Flex'
import SubHeading from '../components/SubHeading'
import ComText from '../components/ComText'

const Services = () => {
  return (
    <section id='services' className='py-20 bg-fifth'>
        <Container>
          <SubHeading className='text-center ' text='Services'/>
          <ComText className='text-center pt-8 pb-15' text='Our consultants have years of experience on the in success. ​Through the provision of our services. Find the service we provide'/>
          <Flex className='justify-between'>
            <ServiceCard heading='E-Commerce' text='Development'/>
            <ServiceCard heading='Social Media' text='Development'/>
            <ServiceCard heading='Corporate' text='Development'/>
            <ServiceCard heading='Personal' text='Development'/>
          </Flex>
        </Container>
    </section>
  )
}

export default Services