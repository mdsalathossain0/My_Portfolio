import React from 'react'

const ComText = ({text, className}) => {
  return (
    <p className={`w-w300 md:w-w640 lg:w-full mx-auto text-sm md:text-base lg:text-lg text-third font-normal font-pop ${className}`}>{text}</p>
  )
}

export default ComText