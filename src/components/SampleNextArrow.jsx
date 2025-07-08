import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const SampleNextArrow = ({ className, style, onClick }) => {
  return (
    <div className={`${className} relative`} onClick={onClick}> 
     <div className='w-[55px] h-[40px] bg-third z-10 flex justify-center items-center rounded-lg absolute -bottom-[97px] left-2/3 lg:left-1/2 -translate-x-1/2'> <IoIosArrowForward className='text-white text-xl' /></div>
    </div>
  )
}

export default SampleNextArrow