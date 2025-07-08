import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'

import { Link } from 'react-router'
import { FiGithub } from 'react-icons/fi'
import { PiLinkedinLogoBold } from 'react-icons/pi'
import { CiFacebook } from 'react-icons/ci'
import { ImWhatsapp } from 'react-icons/im'
import FooterInfo from '../components/FooterInfo'

import Logo from '../assets/flogo.png'

const Footer = () => {
  return (
    <section className='bg-black py-18 lg:py-28 '>
        
    <Container>
      <Flex className='flex-col lg:flex-row items-center lg:items-start gap-y-12 lg:gap-y-0'>
        <div className='w-full lg:w-5/12 px-10 lg:px-0'>
        <Link to='/' state={{scrollTo:'home'}}>

           <div className='w-[170px] lg:w-[210px] h-[50px] lg:h-[60px] '><Image className='w-full h-full ' src={Logo}/></div>

        </Link>
        <div className='flex  gap-x-5  items-center pt-12 lg:pt-18 pl-3'>
                      <a href="https://github.com/mdsalathossain0"><FiGithub className='text-xl lg:text-3xl text-white hover:text-red-500 duration-500'/></a>
                      <a href="https://www.linkedin.com/in/abusalatlemon/"><PiLinkedinLogoBold className='text-xl lg:text-3xl text-white hover:text-red-500 duration-500'/></a>
                      <a href="https://www.facebook.com/salat2020"><CiFacebook   className='text-2xl lg:text-4xl text-white hover:text-red-500 duration-500'/></a>
                      <a href="https://wa.me/8801600140426"><ImWhatsapp className='text-xl lg:text-3xl text-white hover:text-red-500 duration-500'/></a>
                     </div>
        </div>
        <div className='w-full lg:w-3/12 px-10 lg:px-0'>
        <h3 className='text-xl text-white font-bold font-robo pb-5'>TOP FEATURES</h3>
        <FooterInfo text='E-Commerce'/>
        <FooterInfo text='Inspiration'/>
        <FooterInfo text='Crud Operation'/>
        <FooterInfo text='Innovate'/>
        </div>
        <div className='w-full lg:w-2/12 px-10 lg:px-0'>
        <h3 className='text-xl text-white font-bold font-robo pb-5'>PRODUCT</h3>
        <FooterInfo text='Orebi'/>
        <FooterInfo text='Fresh'/>
        <FooterInfo text='Foodi'/>
        <FooterInfo text='Nextcent'/>
        </div>
        <div className='w-full lg:w-2/12 px-10 lg:px-0'>
        <h3 className='text-xl text-white font-bold font-robo pb-5'>ABOUT US</h3>
        <FooterInfo text='About Us'/>
        <FooterInfo text='Contact Us'/>
        <FooterInfo text='Our Services'/>
        </div>
      </Flex>
      <p className='text-sm lg:text-base text-white font-normal font-robo pt-15 text-center'>Copyright 2025. Made by <Link to='/' state={{scrollTo: 'home'}}><span className=' font-medium underline cursor-pointer'>Lemon</span></Link></p>
    </Container>
    </section>
  )
}

export default Footer