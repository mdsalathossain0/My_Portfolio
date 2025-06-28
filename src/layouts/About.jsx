import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import ComText from '../components/ComText'
import Flex from '../components/Flex'
import Image from '../components/Image'
import CV from '../assets/Abu_Salat_Lemon_Resume.pdf'

import AboutImg from '../assets/about.jpg'
import { RiVerifiedBadgeFill } from 'react-icons/ri'
import Button from '../components/Button'
import { PiReadCvLogoFill } from 'react-icons/pi'

const About = () => {
  return (
    <section id='about' className='bg-fifth py-15 lg:py-28'>
        
      <Container>
        <div className='text-center'>
          <Heading text='ABOUT ME'/>
          <ComText className='lg:w-[800px] lg:mx-auto py-10 px-5 lg:px-0' text='Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology'/>
        </div>
        <Flex className='flex-wrap  lg:flex-row lg:items-center justify-center lg:px-5'>
          <div className='w-full lg:w-1/2 '>
          <div className='flex justify-center  rounded-xl pt-10 px-5 lg:px-0 lg:w-[80%]'>
            <Image className='w-full rounded-xl' src={AboutImg}/>
          </div>
     
          </div>
          <div className='w-full lg:w-1/2'>
           <Flex className=' gap-x-3 md:gap-x-10 lg:gap-y-0 items-center md:justify-center lg:justify-between  pt-10 mx-2 lg:mx-0'>
            <div className='w-full lg:w-[280px] grid h-[185px]  bg-white rounded-[8px] drop-shadow-lg '>
              <div className='flex flex-col items-center py-5 '>
                <RiVerifiedBadgeFill className='text-2xl'/>
                <h3 className='text-lg lg:text-xl text-black font-bold font-robo leading-8 py-3'>Experience</h3>
                <p className='text-base lg:text-lg text-third font-normal font-robo leading-7 text-center'>1 + years </p>
                <p className='text-base lg:text-lg text-third font-normal font-robo leading-7 text-center pb-3'>Frontend Development </p>

              </div>
            </div>
            <div className='w-full lg:w-[280px] h-[185px]  bg-white rounded-[8px] drop-shadow-lg'>
                <div className='flex flex-col items-center py-5'>
                  <RiVerifiedBadgeFill className='text-2xl'/>
                  <h3 className='text-lg lg:text-xl text-black font-bold font-robo leading-8 py-3'>Education</h3>
                  <p className='text-base lg:text-lg text-third font-normal font-robo leading-7 text-center'>Intermadiate </p>
                  <p className='text-base lg:text-lg text-third font-normal font-robo leading-7 text-center'>B.S.c in CSE </p>

                </div>
            </div>
           </Flex>
           <ComText className='py-10 px-5 lg:px-0 ' text='Im a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.'/>
           <div className='flex justify-center lg:justify-start relative'>
            <a download='' href={CV}><Button  text='Download CV' icon={<PiReadCvLogoFill className='text-base lg:text-xl' />} iconPosition='right'/></a>
           </div>
          </div>
        </Flex>
      </Container>

    </section>
  )
}

export default About