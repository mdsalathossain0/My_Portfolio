import React, { useEffect } from 'react'
import Banner from '../layouts/Banner'
import About from '../layouts/About'
import Skills from '../layouts/Skills'
import Project from '../layouts/Project'
import Services from '../layouts/Services'
import Contact from '../layouts/Contact'



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
   <Services/>
   <Contact/>

    </>
  )
}

export default Home