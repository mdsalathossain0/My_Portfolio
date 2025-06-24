import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import List from '../components/List'
import { AiOutlineHome } from 'react-icons/ai'
import { FaRegAddressCard, FaRegFileAlt, FaRegUser } from 'react-icons/fa'
import { IoBriefcaseOutline } from 'react-icons/io5'
import { TbMessageCircleUser } from 'react-icons/tb'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { RxCross2 } from 'react-icons/rx'

const Navber = () => {
    let [show , setShow]= useState(false)
    let handleShow=()=>{
        setShow(!show)
    }
  return (
    <>
    <nav className='hidden lg:block bg-second py-5 '>
        <Container>
            <Flex>
                <div className='w-4/12'>
                    <h1 className='lg:text-xl text-third font-semibold font-pop '><i>Lêmon</i></h1>
                </div>
                <div className='w-8/12'>
                <Flex className='gap-x-8 xl:gap-x-10 items-center'>
                <div className='flex items-center gap-x-2'>
                        <AiOutlineHome className='text-base'/>
                        <List text='Home'/>
                </div>
                <div className='flex items-center gap-x-2'>
                        <FaRegUser className='text-base'/>
                        <List text='About'/>
                </div>
                <div className='flex items-center gap-x-2'>
                        <FaRegFileAlt className='text-base'/>
                        <List text='Skills'/>
                </div>
                <div className='flex items-center gap-x-2'>
                        <IoBriefcaseOutline className='text-base'/>
                        <List text='Services'/>
                </div>
                <div className='flex items-center gap-x-2'>
                        <FaRegAddressCard className='text-base'/>
                        <List text='Portfolio'/>
                </div>
                <div className='flex items-center gap-x-2'>
                        <TbMessageCircleUser className='text-base'/>
                        <List text='Contact'/>
                </div>
                </Flex>                
                </div>
            </Flex>
        </Container>
    </nav>

    <nav className='relative bg-second lg:hidden py-4 '>
        <Flex className='px-4 justify-between items-center '>
            <div><h1 className='text-lg text-third font-semibold font-pop '><i>Lêmon</i></h1></div>
            <div onClick={handleShow}>
                {
                    show ? <RxCross2 className='text-third text-lg' /> : <HiOutlineBars3 className='text-third text-lg'/>
                }
            </div>

        </Flex>
             
                {
                    show && <ul className='absulate top-0 left-0 w-full flex flex-col items-center justify-center gap-y-5 py-4 '>
                    <div className='flex items-center gap-x-2'>
                        <AiOutlineHome className='text-sm'/>
                        <List text='Home'/>
                </div>
                <div className='flex items-center gap-x-2'>
                        <FaRegUser className='text-sm'/>
                        <List text='About'/>
                </div>
                <div className='flex items-center gap-x-2'>
                        <FaRegFileAlt className='text-sm'/>
                        <List text='Skills'/>
                </div>
                <div className='flex items-center gap-x-2'>
                        <IoBriefcaseOutline className='text-sm'/>
                        <List text='Services'/>
                </div>
                <div className='flex items-center gap-x-2'>
                        <FaRegAddressCard className='text-sm'/>
                        <List text='Portfolio'/>
                </div>
                <div className='flex items-center gap-x-2'>
                        <TbMessageCircleUser className='text-sm'/>
                        <List text='Contact'/>
                </div>
                </ul>
                }
            
    </nav>
    </>
    
  )
}

export default Navber