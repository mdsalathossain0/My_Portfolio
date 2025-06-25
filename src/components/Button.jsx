import React from 'react'

const Button = ({text, className}) => {
  return (
    <button className={`text-base lg:text-xl text-white bg-third font-pop font-bold rounded-[8px] px-6 lg:px-8 py-3 lg:py-5 border border-third hover:bg-transparent hover:text-third duration-300 ${className}`}>{text}</button>
  )
}

export default Button