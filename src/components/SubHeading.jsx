import React from 'react'

const SubHeading = ({text, className}) => {
  return (
    <h2 className={`w-w300 md:w-w640 lg:w-full mx-auto text-base md:text-lg lg:text-xl text-third font-bold font-pop leading-7 ${className}`}>{text}</h2>
  )
}

export default SubHeading