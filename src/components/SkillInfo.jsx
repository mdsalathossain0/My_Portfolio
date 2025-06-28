import React from 'react'
import { GiFlowerStar } from 'react-icons/gi'

const SkillInfo = ({title, info}) => {
  return (
    <div className='flex gap-x-3 items-start pb-7 pl-2 lg:pl-6 pr-6'>
        <GiFlowerStar className='text-black mt-[5px] '/>
        <div>
        <h5 className='text-sm md:text-base lg:text-lg text-black font-semibold font-robo leading-6'>{title}</h5>
        <p className='text-xs md:text-base lg:text-base text-third font-normal font-robo'>{info}</p>
        </div>
    </div>
  )
}

export default SkillInfo