import React from 'react'

const SubHeading = ({text, className}) => {
  return (
    <h2 className={` mx-auto text-sm md:text-base lg:text-lg text-third font-bold font-robo leading-5 lg:leading-7 ${className}`}>{text}</h2>
  )
}

export default SubHeading