import React from 'react'
import Flex from './Flex'

import { HiPlusSm } from 'react-icons/hi'
import { GrHtml5 } from 'react-icons/gr'
import { TbBrandJavascript } from 'react-icons/tb'
import { RiReactjsLine } from 'react-icons/ri'



const ServiceCard = ({heading, text}) => {
  return (
    <div>
        <div className='group/main w-[270px] h-[340px] bg-white  rounded-xl relative'>
      
            <div className='w-[190px] h-[110px] bg-[#2f354280] rounded-tr-xl absolute -bottom-[40px] left-0'>
                <Flex className='py-4 px-3 gap-x-3'>
                    <div className='w-[30px] h-[2px] bg-white mt-3'></div>
                    <div>
                    <h4 className='text-xl text-white font-robo font-semibold pb-1'> {heading}</h4>
                    <p className='text-sm text-white font-robo font-normal'>{text}</p>
                    </div>
                </Flex>
            </div>
            <div className='group/icon w-[40px] h-[40px] bg-[#2f354280] flex justify-center items-center rounded-full absolute bottom-5 right-5 z-10'>
                <HiPlusSm className='text-white text-2xl group-hover/icon:rotate-[360deg] group-hover/icon:duration-500'/>
            </div>
            <div className='group/icon w-[40px] h-[40px] bg-[#2f354280] flex justify-center items-center rounded-full absolute bottom-5 right-5 -z-10 group-hover/main:bottom-[75px] group-hover/main:z-10 group-hover/main:duration-300'>
                <GrHtml5 className='text-white text-2xl group-hover/icon:rotate-[360deg] group-hover/icon:duration-500'/>
            </div>
            <div className='group/icon w-[40px] h-[40px] bg-[#2f354280] flex justify-center items-center rounded-full absolute bottom-5 right-5 -z-10 group-hover/main:bottom-[131px] group-hover/main:z-10 group-hover/main:duration-300'>
                <TbBrandJavascript className='text-white text-2xl group-hover/icon:rotate-[360deg] group-hover/icon:duration-500'/>
            </div>
            <div className='group/icon w-[40px] h-[40px] bg-[#2f354280] flex justify-center items-center rounded-full absolute bottom-5 right-5 -z-10 group-hover/main:bottom-[185px] group-hover/main:z-10 group-hover/main:duration-300'>
                <RiReactjsLine  className='text-white text-2xl group-hover/icon:rotate-[360deg] group-hover/icon:duration-500'/>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard