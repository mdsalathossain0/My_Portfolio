import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'

const SamplePrevArrow = ({ className,style, onClick }) => {
  return (
    <div className={`${className} relative`}
          onClick={onClick}> 
     <div className='w-[55px] h-[40px]  bg-third z-10 flex items-center justify-center rounded-lg absolute top-[400px]  left-1/3 lg:left-[450px] -translate-y-1/2 -translate-x-1/3'><IoIosArrowBack className='text-white text-xl' /></div>
    </div>
  )
}

export default SamplePrevArrow