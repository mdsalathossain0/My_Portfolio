import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import Flex from '../components/Flex'


import Orebi from '../assets/ecommerce.PNG'
import Inspiration from '../assets/inspiration.PNG'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundForward } from 'react-icons/io'

const Project = () => {
  return (
    <section id='project' className='bg-fifth py-28'>
      <Container>
        <Flex className='justify-evenly'>
          <Link to='/orebidetails'>
          <div className='w-[550px] h-[400px] rounded-[12px] drop-shadow-2xl'>
            <Image className='w-full h-full rounded-[12px]' src={Orebi}/>
          </div>
          </Link>
          <div>
            <p className='lg:w-[400px] text-[45px] text-third font-medium leading-12 text-center pb-10'>Orebi is a convenient online store where you can purchase any products</p>
            <div className='flex items-center gap-x-4 justify-center relative group/main'>
              <h5 className=' text-third text-2xl font-semibold font-robo'> Live Projects <span className='w-[50px] h-[52px] bg-[#00000040] absolute -top-2 left-22 rounded-l-sm group-hover/main:w-[210px] group-hover/main:rounded-sm duration-300'></span></h5>
              <IoIosArrowRoundForward className='text-black font-bold text-2xl'/>

            </div>
              

          </div>
        </Flex>
        <Flex className='justify-evenly pt-28'>
          <Link to='/inspirationdetails'>
          <div className='w-[550px] h-[400px] rounded-[12px] drop-shadow-2xl'>
            <Image className='w-full h-full rounded-[12px]' src={Inspiration}/>
          </div>
          </Link>
          <div>
            <p className='lg:w-[400px] text-[45px] text-third font-medium leading-12 text-center pb-10'>Elevate your career with a personalized people portfolio designed to highlight your skills and experience. </p>
            <div className='flex items-center gap-x-4 justify-center relative group/main'>
              <h5 className=' text-third text-2xl font-semibold font-robo'> Live Projects <span className='w-[50px] h-[52px] bg-[#00000040] absolute -top-2 left-22 rounded-l-sm group-hover/main:w-[210px] group-hover/main:rounded-sm duration-300'></span></h5>
              <IoIosArrowRoundForward className='text-black font-bold text-2xl'/>

            </div>
              

          </div>
        </Flex>
      </Container>
        
    </section>
  )
}

export default Project