import React, { useEffect, useState } from 'react'
import Flex from './Flex'

const CounterCard = ({text, count, icon}) => {

    let [current, setCurrent]=useState(0)

    useEffect(()=>{
        let start=0
        let duration = 1000
        let steps = 50
        let increment = Math.ceil(count/steps)
        let intervalTime = duration/steps

        let interval = setInterval(()=>{
            start+=increment
            if(start>=count){
                start=count
                clearInterval(interval)
            }
            setCurrent(start)

        },intervalTime)
    },[count])
  return (
    <div className='bg-white  w-[160px] md:w-[230px] lg:w-[270px] h-[190px] py-3 px-2 rounded-lg drop-shadow-lg flex flex-col justify-center items-center gap-y-3 text-center'>
        <span className='text-xl md:text-2xl lg:text-3xl text-third pb-3'>{icon}</span>
        <Flex className='gap-x-3 items-center'>
            <h5 className='text-third text-xl md:text-2xl lg:text-3xl font-bold font-robo leading-8'>{current}</h5>
            <span className='text-third text-base md:text-lg lg:text-xl font-bold font-robo leading-8'>+</span>
        </Flex>
        <p className='text-third text-sm font-normal font-robo'>{text}</p>
    </div>
  )
}

export default CounterCard