import React from 'react'

const ComText = ({text, className}) => {
  return (
    <p className={` text-base md:text-lg lg:text-xl text-third font-normal font-robo leading-5 lg:leading-7 ${className}`}>{text}</p>
  )
}

export default ComText