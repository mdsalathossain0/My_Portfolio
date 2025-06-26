import React from 'react'

const Button = ({text,icon, iconPosition='right', className}) => {
  return (
    <button className={`text-base lg:text-xl text-fifth bg-third font-pop font-bold flex items-center  gap-x-3 rounded-[8px] px-6 lg:px-8 py-3 lg:py-5 border border-third hover:bg-transparent hover:text-third duration-300 ${className}`}>
      <span>{text}</span>
      {iconPosition === 'right' && icon}
    </button>
  )
}

export default Button