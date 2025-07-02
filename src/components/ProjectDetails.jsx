import React from 'react'
import Image from '../components/Image'
import { GoArrowRight } from 'react-icons/go'

const ProjectDetails = ({title, catagory , image}) => {
  return (
    <div className= 'w-[370px] bg-white  py-5 px-5 rounded-2xl drop-shadow-2xl relative group/main'>
        <div className='w-[330px] h-[210px] bg-fifth flex justify-center items-center rounded-2xl'>
            <div className='w-[310px] h-[180px] bg-blue-700 rounded-2xl'>
                <Image className='w-full h-full rounded-xl' src={image}/>
            </div>
        </div>
            <h5 className='text-xl text-third font-semibold font-robo pt-4'>{title}</h5>
            <div className='flex gap-x-3 items-center'>
                <p className='text-lg text-third font-normal font-robo '>{catagory} </p>
              <GoArrowRight className='text-third  text-base font-normal font-robo' />
            </div>
            <div className='w-full h-full rounded-2xl absolute top-0 left-0 flex gap-x-4 justify-center items-center bg-gradient-to-l from-[#a4b0be]  to-[#57606f]  opacity-0 group-hover/main:opacity-70 transition-all duration-500 text-black text-2xl font-extrabold font-robo cursor-pointer'>
              <div className='delay-100'>Live</div>
              <div className='delay-150 translate-y-[450%] group-hover/main:translate-y-0 transition-all duration-300'>Project</div>
              <div className='delay-200 translate-y-[450%] group-hover/main:translate-y-0 transition-all duration-300'><GoArrowRight/></div>
            </div>
    </div>
  )
}

export default ProjectDetails