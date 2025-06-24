import React from 'react'

const Button = ({text, className}) => {
  return (
    <button className={`text-lg text-first bg-third font-pop font-bold rounded-xl px-8 py-3 border border-third hover:bg-transparent hover:text-third duration-300 ${className}`}>{text}</button>
  )
}

export default Button