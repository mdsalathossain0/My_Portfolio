import React from 'react'
import { BsChatFill } from 'react-icons/bs'
import { Link } from 'react-router'

const ChatMe = () => {
  return (
    <Link to='https://wa.me/8801600140426'>
    <div className=' fixed bottom-3 lg:bottom-5 right-2 lg:right-5 flex items-center gap-x-2 lg:gap-x-4 cursor-pointer'>
    <p className='bg-third text-fifth text-sm lg:text-base font-robo py-1 lg:py-2 px-2 lg:px-3 rounded-xl'>Chat with Me ✋</p>
    <span className='w-[35px] lg:w-[60px] h-[35px] lg:h-[60px] rounded-full bg-third flex justify-center items-center'><BsChatFill className='text-white text-base lg:text-2xl'/></span>
    </div>
    </Link>
  )
}

export default ChatMe