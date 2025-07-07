import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import CounterCard from '../components/CounterCard'
import { FaAllergies } from 'react-icons/fa'
import { ImHtmlFive } from 'react-icons/im'
import { AiOutlineJavaScript } from 'react-icons/ai'
import { TbBrandReact } from 'react-icons/tb'

const ProjectCount = () => {
  return (
    <section className='bg-fifth pt-28 pb-18'>
     <Container>
        <Flex className='flex-wrap justify-center lg:justify-between gap-5  mx-3 '>
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