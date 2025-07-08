import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import ComText from '../components/ComText'
import Button from '../components/Button'
import ChatMe from '../components/ChatMe'
import ContactBox from '../components/ContactBox'
import { MdMarkEmailUnread } from 'react-icons/md'
import { RiWhatsappFill } from 'react-icons/ri'
import { FaFacebookMessenger } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id='contact' className='bg-fifth py-18 lg:py-28'>
        <Container>
          <Heading className='text-center' text='CONTACT'/>
          <ComText className='w-full lg:w-[700px] mx-auto py-8 text-center px-3 lg:px-0' text='Feel free to Contact me by submitting the form below and I will get back to you as soon as possible.'/>
          <Flex className='flex-col lg:flex-row lg:items-center pt-5 gap-y-10 lg:gap-y-0'>
            <div className='w-full lg:w-1/2'>
            <ContactBox title='Email' info='mdsalathossain0@gmail.com' icon={<MdMarkEmailUnread />} link="mailto:mdsalathossain0@gmail.com"/>
            <ContactBox title="What's App" info='+8801600140426' icon={<RiWhatsappFill  />} link="https://wa.me/8801600140426"/>
            <ContactBox title='Messenger' info='Lemon' icon={<FaFacebookMessenger />} link="https://m.me/salat2020"/>
            </div>
            <div className='w-full lg:w-1/2'>
            <div className='w-[90%] mx-auto bg-white py-5 px-10 rounded-xl'>
              <label className='block pt-5 pb-2 text-xl text-third font-semibold font-robo' htmlFor="name">Name:</label>
              <input className='block bg-[#00000020] rounded-lg py-2  pl-2 w-full pr-10 border-0 placeholder:text-sm placeholder:text-third placeholder:font-robo' type="text" name="" id="name" placeholder='Enter Your Name' />
              <label className='block pt-5 pb-2 text-xl text-third font-semibold font-robo' htmlFor="email">Email:</label>
              <input className='block bg-[#00000020] rounded-lg py-2  pl-2 w-full pr-10 border-0 placeholder:text-sm placeholder:text-third placeholder:font-robo' type="email" name="" id="email" placeholder='Enter Your Email' />
              <label className='block pt-5 pb-2 text-xl text-third font-semibold font-robo' htmlFor="area">Messages:</label>
              <textarea className='block bg-[#00000020] rounded-lg py-3  w-full pl-2 pr-10 border-0 mb-5 placeholder:text-sm placeholder:text-third placeholder:font-robo' name="" id="area" placeholder='Enter Your Message'></textarea>
              <div className='flex justify-center pt-3'><Button text='Message'/></div>
            </div>
            </div>
          </Flex>
        </Container>
        <ChatMe/>
    </section>
  )
}

export default Contact