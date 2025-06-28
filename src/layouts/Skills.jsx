import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import ComText from '../components/ComText'
import Flex from '../components/Flex'
import SkillInfo from '../components/SkillInfo'

const Skills = () => {
  return (
    <section id='skills' className='py-15 lg:py-28 bg-fifth '>
      <Container>
        <Heading className='text-center' text='Skills'/>
        <ComText className='py-6 text-center' text='My technical level'/>
        <Flex className='flex-col lg:flex-row lg:justify-evenly gap-y-8 lg:gap-y-0'>
          <div className='w-[340px] md:w-[480px] mx-auto lg:mx-0 h-auto py-7 pl-5 pr-4 bg-white drop-shadow-2xl rounded-[12px] '>
            <h4 className='text-lg md:text-xl lg:text-2xl text-black font-semibold font-robo text-center pt-5 pb-6'>Frontend developer</h4>


            <Flex className='lg:flex-wrap flex-col lg:flex-row gap-x-12 items-center'>
              <div>
                <SkillInfo title='HTML' info='Experienced'/>
                 <SkillInfo title='Css' info='Experienced'/>
                 <SkillInfo title='JavaScript' info='Basic'/>
              </div>

              <div>
              <SkillInfo title='Tailwind' info='Experienced'/>  
              <SkillInfo title='Bootstrap' info='Experienced'/>
              <SkillInfo title='React' info='Intermediate'/>
              </div>
              
            </Flex>
          </div>
          <div className='w-[340px] md:w-[480px] mx-auto lg:mx-0 h-auto py-7 pl-5 pr-4 bg-white drop-shadow-2xl rounded-[12px]'>
             <h4 className='text-lg md:text-xl lg:text-2xl text-black font-semibold font-robo text-center pt-5 pb-6'>Tools & Software</h4>
            <Flex className='lg:flex-wrap flex-col lg:flex-row gap-x-12 items-center'>
              <div>
                   <SkillInfo title='VsCode' info='Experienced'/>
                   <SkillInfo title='Figma' info='Experienced'/>
                   <SkillInfo title='Chrome DevTools' info='Experienced'/>
              </div>
              <div>

              <SkillInfo title='npm' info='Basic'/>
              <SkillInfo title='Nextjs' info='Intermediate'/>
              <SkillInfo title='Vite' info='Intermediate'/>
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
        
    </section>
  )
}

export default Skills