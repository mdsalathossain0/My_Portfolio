import React from 'react'

const Heading = ({text, className}) => {
  return (
    <h2 className={`text-4xl md:text-[42px] lg:text-56 text-third font-semibold font-robo leading-8 tracking-wide ${className}`}>{text}</h2>
  )
}

export default Heading