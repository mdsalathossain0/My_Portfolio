import React from 'react'

const List = ({className, text}) => {
  return (
    <li className={`list-none text-sm lg:text-base text-third font-medium font-pop hover:font-bold hover:text-third duration-300 ${className}`}>{text}</li>
  )
}

export default List