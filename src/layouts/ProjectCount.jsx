import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import CounterCard from '../components/CounterCard'
import { FaAllergies } from 'react-icons/fa'
import { ImHtmlFive } from 'react-icons/im'
import { AiOutlineJavaScript } from 'react-icons/ai'
import { TbBrandReact } from 'react-icons/tb'
import Heading from '../components/Heading'
import ComText from '../components/ComText'

const ProjectCount = () => {
  return (
    <section className='bg-fifth pt-28 pb-18'>
     <Container>
      <Heading className='text-center' text='Total Works'/>
      <ComText className='w-full lg:w-[800px] mx-auto text-center py-8 px-3 lg:px-0' text='I’m a dedicated developer who enjoys solving problems and working with others. I always try to write clean code, keep learning, and give my best to build useful and effective solutions.'/>
        <Flex className='flex-wrap justify-center lg:justify-between gap-5  mx-3 pt-5'>
            <CounterCard text='Total Project' count='28' icon={<FaAllergies />}/>
            <CounterCard text='Total HTML' count='12' icon={<ImHtmlFive />}/>
            <CounterCard text='Total JavaScript' count='10' icon={<AiOutlineJavaScript />}/>
            <CounterCard text='Total React' count='6' icon={<TbBrandReact />}/>
        </Flex>
     </Container>
    </section>
  )
}

export default ProjectCount