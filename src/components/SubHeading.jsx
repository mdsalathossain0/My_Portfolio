import React from 'react'

const SubHeading = ({text, className}) => {
  return (
    <h2 className={` mx-auto text-lg sm:text-xl md:text-2xl lg:text-3xl text-third font-bold font-robo leading-7 ${className}`}>{text}</h2>
  )
}

export default SubHeading