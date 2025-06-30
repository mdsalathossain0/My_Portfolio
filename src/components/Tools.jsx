import React from 'react'

const Tools = ({text, className}) => {
  return (
    <li className={`text-third text-lg font-medium font-robo bg-[#00000040] w-[150px] py-2 rounded-[8px] text-center list-none ${className}`}>{text}</li>
  )
}

export default Tools