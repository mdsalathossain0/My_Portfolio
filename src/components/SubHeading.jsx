import React from 'react'

const SubHeading = ({text, className}) => {
  return (
    <h2 className={`w-w300 md:w-w640 lg:w-full mx-auto text-base sm:text-lg md:text-xl lg:text-2xl text-third font-bold font-robo leading-7 ${className}`}>{text}</h2>
  )
}

export default SubHeading