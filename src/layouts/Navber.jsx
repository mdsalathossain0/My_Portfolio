import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import List from '../components/List'
import Image from '../components/Image'

import Logo from '../assets/logo.jpg'
import { AiOutlineHome } from 'react-icons/ai'
import { FaRegAddressCard, FaRegFileAlt, FaRegUser } from 'react-icons/fa'
import { IoBriefcaseOutline } from 'react-icons/io5'
import { TbMessageCircleUser } from 'react-icons/tb'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { RxCross2 } from 'react-icons/rx'
import { Link, useLocation } from 'react-router-dom'



const Navber = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    let [show , setShow]= useState(false)
    let handleShow=()=>{
        setShow(!show)
    }
  return (
    <>
    {/* desktop start */}
    <nav className='px-5 hidden lg:block bg-second py-10 '>
        <Container>
            <Flex className='items-center'>
                <div className='w-4/12'>
                   <Link to='/' state={{scrollTo:'home'}}>
                    <Flex className='gap-x-5 items-center'>
                        <div className='w-[55px] h-[55px] rounded-full'><Image className='w-full h-full rounded-full' src={Logo}/></div>
                        <h1 className='lg:text-xl text-third font-bold font-pop italic'>LÊMON</h1>
                    </Flex>
                   </Link>
                </div>
                <div className='w-8/12 '>
                <Flex className='gap-x-8 xl:gap-x-10 items-center justify-end'>
                
                  <Link to='/'>
                  <div className='flex items-center gap-x-2'>
                        <AiOutlineHome className='text-base'/>
                        <List text='Home'/>
                  </div>
                
                  </Link>
                <Link state={{scrollTo:'about'}}>
                <div className='flex items-center gap-x-2'>
                        <FaRegUser className='text-base'/>
                        <List text='About'/>
                </div>
                </Link>
                <Link state={{scrollTo:'skills'}}>
                <div className='flex items-center gap-x-2'>
                        <FaRegFileAlt className='text-base'/>
                        <List text='Skills'/>
                </div>
                </Link>
                <Link state={{scrollTo:'services'}}>
                <div className='flex items-center gap-x-2'>
                        <IoBriefcaseOutline className='text-base'/>
                        <List text='Services'/>
                </div>
                </Link>
                <Link state={{scrollTo:'project'}}>
                <div className='flex items-center gap-x-2'>
                        <FaRegAddressCard className='text-base'/>
                        <List text='Project'/>
                </div>
                </Link>
                <Link state={{scrollTo:'contact'}}>
                <div className='flex items-center gap-x-2'>
                        <TbMessageCircleUser className='text-base'/>
                        <List text='Contact'/>
                </div>
                </Link>
                </Flex>                
                </div>
            </Flex>
        </Container>
    </nav>
    {/* desktop end */}
    {/* Mobile Start */}
    <nav className='relative bg-fourth lg:hidden py-4 '>
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
                    <Link to='/' state={{scrollTo:'home'}}>
                     <div className='flex items-center gap-x-2'>
                        <AiOutlineHome className='text-sm'/>
                        <List text='Home'/>
                    </div>
                    </Link>
                    <Link state={{scrollTo:'about'}}>
                    <div className='flex items-center gap-x-2'>
                        <FaRegUser className='text-sm'/>
                        <List text='About'/>
                    </div>
                    </Link>
                    <Link state={{scrollTo:'skills'}}>
                    <div className='flex items-center gap-x-2'>
                        <FaRegFileAlt className='text-sm'/>
                        <List text='Skills'/>
                    </div>
                    </Link>
                    <Link state={{scrollTo:'project'}}>
                    <div className='flex items-center gap-x-2'>
                        <FaRegAddressCard className='text-sm'/>
                        <List text='Project'/>
                    </div>
                    </Link>
                    <Link state={{scrollTo:'services'}}>
                    <div className='flex items-center gap-x-2'>
                        <IoBriefcaseOutline className='text-sm'/>
                        <List text='Services'/>
                    </div>
                    </Link>
                    
                    <Link state={{scrollTo:'contact'}}>
                    <div className='flex items-center gap-x-2'>
                        <TbMessageCircleUser className='text-sm'/>
                        <List text='Contact'/>
                    </div>
                    </Link>
                </ul>
                }
            
    </nav>
    {/* mobile end */}
    </>
    
  )
}

export default Navber