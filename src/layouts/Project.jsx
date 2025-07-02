import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import Flex from '../components/Flex'


import Orebi from '../assets/ecommerce.PNG'
import Inspiration from '../assets/inspiration.PNG'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundForward } from 'react-icons/io'
import ProjectDetails from '../components/ProjectDetails'

import Html7 from '../assets/crud.PNG'
import Html1 from '../assets/foodi.PNG'
const Project = () => {
  return (
    <section id='project' className='bg-fifth py-28'>
      <Container>
        <Flex className='flex-col lg:flex-row lg:justify-evenly gap-y-10 lg:gap-y-0 mx-3 lg:mx-0 pb-15 lg:pb-20'>
          <Link to='/orebidetails'>
          <div className='w-full lg:w-[550px] h-[400px] rounded-[12px] drop-shadow-2xl'>
            <Image className='w-full h-full rounded-[12px]' src={Orebi}/>
          </div>
          </Link>
          <div>
            <p className='lg:w-[400px] text-3xl md:text-4xl lg:text-[45px] text-third font-medium leading-12 text-center pb-10'>Orebi is a convenient online store where you can purchase any products</p>
            <div className='flex items-center gap-x-3 justify-center relative group/main'>
            <h5 className='text-third text-lg md:text-xl lg:text-2xl font-semibold font-robo relative z-10'>
             Projects Details
            <span className='w-[50px] h-[45px] lg:h-[52px] bg-[#00000040] absolute -top-2 -left-2 rounded-l-sm group-hover/main:w-[185px] lg:group-hover/main:w-[215px] group-hover/main:rounded-sm duration-300 z-0'></span>
            </h5>
            <IoIosArrowRoundForward className='text-black font-bold text-2xl relative z-10'/>
            </div>
              

          </div>
        </Flex>
        <Flex className='flex-col lg:flex-row lg:justify-evenly gap-y-10 lg:gap-y-0 mx-3 lg:mx-0'>
          <Link to='/inspirationdetails'>
          <div className='w-full lg:w-[550px] h-[400px] rounded-[12px] drop-shadow-2xl'>
            <Image className='w-full h-full rounded-[12px]' src={Inspiration}/>
          </div>
          </Link>
          <div>
            <p className='lg:w-[400px] text-3xl md:text-4xl lg:text-[45px] text-third font-medium leading-12 text-center pb-10'>Elevate your career with a personalized people portfolio designed to highlight your skills and experience. </p>
            <div className='flex items-center gap-x-3 justify-center relative group/main'>
            <h5 className='text-third text-lg md:text-xl lg:text-2xl font-semibold font-robo relative z-10'>
             Projects Details
            <span className='w-[50px] h-[45px] lg:h-[52px] bg-[#00000040] absolute -top-2 -left-2 rounded-l-sm group-hover/main:w-[185px] lg:group-hover/main:w-[215px] group-hover/main:rounded-sm duration-300 z-0'></span>
            </h5>
            <IoIosArrowRoundForward className='text-black font-bold text-2xl relative z-10'/>
            </div>
              

          </div>
        </Flex>
        <Flex className='gap-x-5'>
          <ProjectDetails title='Fresh' catagory='React' image={Html7}/>
          <ProjectDetails title='Fresh' catagory='React' image={Html1}/>
          <ProjectDetails title='Fresh' catagory='React' image={Html7}/>
        </Flex>
      </Container>
        
    </section>
  )
}

export default Project