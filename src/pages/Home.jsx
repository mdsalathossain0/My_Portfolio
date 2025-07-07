import React, { useEffect } from 'react'
import Banner from '../layouts/Banner'
import About from '../layouts/About'
import Skills from '../layouts/Skills'
import Project from '../layouts/Project'
import Services from '../layouts/Services'
import Contact from '../layouts/Contact'
import ProjectCount from '../layouts/ProjectCount'



const Home = () => {
   useEffect(()=>{
      window.scrollTo({top:0})
    },[])
  return (
    <>

   <Banner/>
   <About/>
   <Skills/>
   <Project/>
   <ProjectCount/>
   <Services/>
   <Contact/>

    </>
  )
}

export default Home