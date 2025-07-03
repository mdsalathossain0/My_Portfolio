import React, { useEffect } from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import ComText from '../components/ComText'
import Button from '../components/Button'
import Image from '../components/Image'
import SubHeading from '../components/SubHeading'
import Flex from '../components/Flex'

import Inspiration from '../assets/inspiration.PNG'
import Tools from '../components/Tools'
import { Link } from 'react-router'
const OrebiDetails = () => {
   useEffect(()=>{
      window.scrollTo({top:0})
    },[])
  return (
    <section className='bg-fifth py-15 lg:py-28'>
      <Container>
        <Heading className='text-center' text='Inspiration'/>
        <ComText className='text-center py-10' text="Inspiration is a modern portfolio-building platform designed to help professionals showcase their skills creatively. Whether you're a designer, developer, writer, or artist, our intuitive tools let you craft stunning, personalized portfolios in minutes."/>
        <div className='flex justify-center'><a target='blank' href="https://github.com/mdsalathossain0/inspiration-project"><Button text='Project Link'/></a></div>

        <div className='w-full mx-auto px-3 lg:px-0  lg:w-[650px] h-[450px] lg:h-[550px]  rounded-[12px] pt-18'><Image className='w-full h-full rounded-[12px]' src={Inspiration} alt='Inspiration'/></div>

        <SubHeading className='py-12 ml-3 lg:ml-0' text='Project Overview'/>
        <ComText className='pb-5 mx-3 lg-mx-0' text="Inspiration is a modern portfolio-building platform designed to help professionals showcase their skills creatively. Whether you're a designer, developer, writer, or artist, our intuitive tools let you craft stunning, personalized portfolios in minutes. With customizable templates and AI-powered suggestions, Inspiration ensures your profile stands out, making it easier to attract clients, employers, and collaborators."/>
        <ComText className='pb-5 mx-3 lg:mx-0' text="Inspiration caters to freelancers, job seekers, and creative professionals seeking a polished online presence. Students can showcase academic projects, while entrepreneurs highlight startups. Agencies use it for team portfolios. By democratizing design, the platform empowers users across industries to present their stories compellingly—no coding needed."/>
        <ComText className='pb-5 mx-3 lg:mx-0' text="Plans include AI-driven design recommendations, collaboration tools for teams, and integrations with LinkedIn/Behance. A premium tier will offer custom domains and advanced analytics. Inspiration aims to become the go-to hub for personal branding, bridging talent with global opportunities through visually striking, functional portfolios."/>
        <ComText className='mx-3 lg:mx-0' text="Tailored with the latest advancements in React.js and fine-tuned with the sleekness of Tailwind CSS, inspiration's versatile and interactive platform sets a new standard for modern page, ensuring a responsive and customizable shopping journey for users worldwide."/>
       <SubHeading className='py-15 ml-3 lg:ml-0' text='Tools Used'/>
       <Flex className='gap-8 flex-wrap mx-3 lg:mx-0'>
        <Tools text='React'/>
        <Tools text='Tailwind'/>
        <Tools text='JavaScript'/>
        <Tools text='Figma'/>
        <Tools text='React Route'/>
        <Tools text='GIT'/>
        <Tools text='Github'/>
       </Flex>
       <SubHeading className='py-12 ml-3 lg:ml-0' text='See Live'/>
       <Flex className='gap-x-10 mx-3 lg:mx-0'>
        <a target='blank' href="https://inspiration-project.vercel.app/"><Button text='Project Live'/></a>
        <Link to='/'><Button text='Go Back'/></Link>
       </Flex>
      </Container>

    </section>
  )
}

export default OrebiDetails