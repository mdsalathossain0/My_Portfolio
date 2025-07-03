import React, { useEffect } from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import ComText from '../components/ComText'
import Button from '../components/Button'
import Image from '../components/Image'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'

import Orebi from '../assets/ecommerce.PNG'
import Tools from '../components/Tools'
import { Link } from 'react-router'
const OrebiDetails = () => {

  useEffect(()=>{
    window.scrollTo({top:0})
  },[])
  return (
    <section className='bg-fifth py-15 lg:py-28'>
      <Container>
        <Heading className='text-center' text='Orebi'/>
        <ComText className='text-center py-10 mx-3 lg:mx-0' text='This page contains the projects details of Orebi E-commerce Project which includes the Project Overview, Tools Used and Live Links to the official product.'/>
        <div className='flex justify-center'><a target='blank' href="https://github.com/mdsalathossain0/E-Commerce-Project"><Button text='Project Link'/></a></div>

        <div className='w-full lg:w-[650px] h-[450px] lg:h-[550px] mx-auto px-3 lg:px-0 rounded-[12px] pt-18'><Image className='w-full h-full rounded-[12px]' src={Orebi}/></div>

        <SubHeading className='py-12 ml-3 lg:ml-0' text='Project Overview'/>
        <ComText className='pb-5 mx-3 lg:mx-0' text='Orebi, built with the dynamic capabilities of React.js and the sleek aesthetics of Tailwind CSS, delivers a seamless and secure shopping experience for users across all devices.'/>
        <ComText className='pb-5 mx-3 lg:mx-0' text='With its intuitive design and customizable features, Orebi, powered by React.js and tailored with Tailwind CSS, ensures an efficient and user-centric eCommerce journey for customers of all preferences.'/>
        <ComText className='pb-5 mx-3 lg:mx-0' text="Orebi's modern and scalable infrastructure, integrated with React.js and polished with Tailwind CSS, provides an elegant and feature-rich online shopping experience, promising both convenience and security to users."/>
        <ComText className='mx-3 lg:mx-0' text="Tailored with the latest advancements in React.js and fine-tuned with the sleekness of Tailwind CSS, Orebi's versatile and interactive platform sets a new standard for modern eCommerce, ensuring a responsive and customizable shopping journey for users worldwide."/>
       <SubHeading className='py-15 ml-3 lg:ml-0' text='Tools Used'/>
       <Flex className='gap-8 flex-wrap mx-3 lg:mx-0'>
        <Tools text='React'/>
        <Tools text='Tailwind'/>
        <Tools text='JavaScript'/>
        <Tools text='Figma'/>
        <Tools text='React Redux'/>
        <Tools text='GIT'/>
        <Tools text='Github'/>
       </Flex>
       <SubHeading className='py-12 ml-3 lg:ml-0' text='See Live'/>
       <Flex className='gap-x-10 mx-3 lg:mx-0'>
        <a target='blank' href="https://e-commerce-project-seven-omega.vercel.app/"><Button text='Project Live'/></a>
        <Link to='/'><Button text='Go Back'/></Link>
       </Flex>
      </Container>

    </section>
  )
}

export default OrebiDetails