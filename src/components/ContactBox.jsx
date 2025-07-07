import React from 'react'
import Flex from './Flex'
import { MdArrowRightAlt } from 'react-icons/md'

const ContactBox = ({title , info , icon, link}) => {
  return (
    <div className='w-[300px] mb-5 lg:w-[350px] mx-auto bg-white px-8 py-8 rounded-xl drop-shadow-xl flex flex-col items-center gap-y-2'>
        <span className='text-2xl text-third'>{icon}</span>
        <h5 className='text-lg md:text-xl lg:text-2xl text-third font-medium font-robo'>{title}</h5>
        <p className='text-sm md:text-base lg:text-xl text-third font-normal font-robo'>{info}</p>
        <Flex className='gap-x-3 items-center'>
            <a href={link} target='blank' className='text-base text-third font-robo hover:font-bold duration-300'>write me</a>
            <MdArrowRightAlt />

        </Flex>
    </div>
  )
}

export default ContactBox