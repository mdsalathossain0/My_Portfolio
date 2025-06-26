import React from 'react'
import SubHeading from '../components/SubHeading'
import Container from '../components/Container'
import Flex from '../components/Flex'
import ComText from '../components/ComText'
import Button from '../components/Button'
import { FiGithub } from 'react-icons/fi'
import { PiLinkedinLogoBold } from 'react-icons/pi'
import { ImWhatsapp } from 'react-icons/im'
import { CiFacebook } from 'react-icons/ci'
import { Link } from 'react-scroll'
import { FaArrowDown } from 'react-icons/fa'

const Home = () => {
  return (
    <section id='home' className='bg-second py-15 lg:py-35'>
        <Container>
          
            
            <Flex className='gap-x-5 md:gap-x-10 lg:gap-x-28 items-center'>
             <div className='flex flex-col gap-y-5  items-center'>
              <a href="https://github.com/mdsalathossain0"><FiGithub className='text-xl hover:text-red-500 duration-500'/></a>
              <a href="https://www.linkedin.com/in/abusalatlemon/"><PiLinkedinLogoBold className='text-xl hover:text-red-500 duration-500'/></a>
              <a href="https://www.facebook.com/salat2020"><CiFacebook   className='text-2xl hover:text-red-500 duration-500'/></a>
              <a href="https://wa.me/8801600140426"><ImWhatsapp className='text-xl hover:text-red-500 duration-500'/></a>
             </div>
             <div>
             <div className='text-center'>
               <h1 className=' text-xl md:text-[44px] lg:text-56 text-third font-bold font-pop leading-8 pb-6 md:pb-8 lg:pb-12'>HEY, I'M ABU SALAT LEMON</h1>
              <SubHeading className='pb-5' text='Front-end Developer With React'/>
              <ComText className='pb-15 px-5 lg:px-0' text='I,m a Professional Front-End Developer specializing in React, creating responsive, user-focused web interfaces with clean code, performance optimization, and modern design.'/>
              <Link to='project' smooth={true} duration={500}><span className='flex justify-center'><Button text='View Project' icon={<FaArrowDown />} iconPosition='right'/></span></Link>
             </div>
             </div>
            </Flex>
            
          
        </Container>
    </section>
  )
}

export default Home