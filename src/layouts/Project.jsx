import React, { useState } from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import Flex from '../components/Flex'





import Orebi from '../assets/ecommerce.PNG'
import Inspiration from '../assets/inspiration.PNG'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundForward } from 'react-icons/io'
import ProjectDetails from '../components/ProjectDetails'


import Html1 from '../assets/nexcent.PNG'
import Html2 from '../assets/foodi.PNG'
import Html3 from '../assets/omah.PNG'
import Html4 from '../assets/fresh.PNG'
import Html5 from '../assets/shoescart.PNG'
import Html6 from '../assets/animation.PNG'
import Html7 from '../assets/startup.PNG'

import Java1 from '../assets/crud.PNG'
import Java2 from '../assets/mathsol.PNG'
import Java3 from '../assets/guessnum.PNG'
import Java4 from '../assets/digitalclock.PNG'
import Java5 from '../assets/counterjs.PNG'
import Java6 from '../assets/fclick.PNG'
import Java7 from '../assets/domclick.PNG'

import React1 from '../assets/ecommerce.PNG'
import React2 from '../assets/inspiration.PNG'
import React3 from '../assets/innovate.PNG'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import SamplePrevArrow from '../components/SamplePrevArrow';
import SampleNextArrow from '../components/SampleNextArrow'


const Project = () => {
  
  let [activelist, setActivelist]=useState(3)
  let list = [ 'All' , 'Html','JavaScript', 'React']

  let handleClick=(index)=>{
    setActivelist(index)
  }

   var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow/>,
    nextArrow: <SampleNextArrow/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
   

  return (
    <section id='project' className='bg-fifth py-28'>
      <Container>
        <Flex className='flex-col lg:flex-row lg:justify-evenly gap-y-10 lg:gap-y-0 mx-3 lg:mx-0 pb-15 lg:pb-20'>
          <Link to='/orebidetails'>
          <div className='w-full lg:w-[550px] h-[400px] rounded-[12px] drop-shadow-2xl'>
            <Image className='w-full h-full rounded-[12px]' src={Orebi}/>
          </div>
          </Link>
          <div>
            <p className='lg:w-[400px] text-3xl md:text-4xl lg:text-[45px] text-third font-medium leading-12 text-center pb-10'>Orebi is a convenient online store where you can purchase any products</p>
            <div className='flex items-center gap-x-3 justify-center relative group/main'>
            <h5 className='text-third text-lg md:text-xl lg:text-2xl font-semibold font-robo relative z-10'>
             Projects Details
            <span className='w-[50px] h-[45px] lg:h-[52px] bg-[#00000040] absolute -top-2 -left-2 rounded-l-sm group-hover/main:w-[185px] lg:group-hover/main:w-[215px] group-hover/main:rounded-sm duration-300 z-0'></span>
            </h5>
            <IoIosArrowRoundForward className='text-black font-bold text-2xl relative z-10'/>
            </div>
              

          </div>
        </Flex>
        <Flex className='flex-col lg:flex-row lg:justify-evenly gap-y-10 lg:gap-y-0 mx-3 lg:mx-0'>
          <Link to='/inspirationdetails'>
          <div className='w-full lg:w-[550px] h-[400px] rounded-[12px] drop-shadow-2xl'>
            <Image className='w-full h-full rounded-[12px]' src={Inspiration}/>
          </div>
          </Link>
          <div>
            <p className='lg:w-[400px] text-3xl md:text-4xl lg:text-[45px] text-third font-medium leading-12 text-center pb-10'>Elevate your career with a personalized people portfolio designed to highlight your skills and experience. </p>
            <div className='flex items-center gap-x-3 justify-center relative group/main'>
            <h5 className='text-third text-lg md:text-xl lg:text-2xl font-semibold font-robo relative z-10'>
             Projects Details
            <span className='w-[50px] h-[45px] lg:h-[52px] bg-[#00000040] absolute -top-2 -left-2 rounded-l-sm group-hover/main:w-[185px] lg:group-hover/main:w-[215px] group-hover/main:rounded-sm duration-300 z-0'></span>
            </h5>
            <IoIosArrowRoundForward className='text-black font-bold text-2xl relative z-10'/>
            </div>
              

          </div>
        </Flex>
        <h3 className='text-center text-[32px] md:text-[36px] lg:text-[48px] text-third font-semibold font-robo pt-18'>Event to Event Project</h3>
        <Flex className='gap-x-[10px] lg:gap-x-5 items-center justify-center pt-5 pb-12'>
          {
            list.map((item,index)=>(
              <div key={index} onClick={()=>handleClick(index)}>
                
                <h4 className={`${index===activelist? 'bg-third text-fifth': ''} text-lg md:text-xl lg:text-2xl  font-medium font-robo py-2 px-3 rounded-lg cursor-pointer`}>{item}</h4>
              </div>
              
            ))
          }
          
        </Flex>
        {
          activelist===0 ? (

            
            <Slider {...settings}>
            <Link to='https://mdsalathossain0.github.io/Nexcent/'><ProjectDetails title='Nextcent' catagory='Html' image={Html1}/></Link>
            <Link to='https://mdsalathossain0.github.io/Foodi-project/'><ProjectDetails title='Foodi' catagory='Html' image={Html2}/></Link>
            <Link to='https://mdsalathossain0.github.io/Omah_project/'><ProjectDetails title='Omah' catagory='Html' image={Html3}/></Link>
            <Link to='https://mdsalathossain0.github.io/Fresh/'><ProjectDetails title='Fresh' catagory='Html' image={Html4}/></Link>
            <Link to='https://mdsalathossain0.github.io/Shoes_Cart/'><ProjectDetails title='Shoes Cart' catagory='Html' image={Html5}/></Link>
            <Link to='https://mdsalathossain0.github.io/Simple_Animation/'><ProjectDetails title='Animation' catagory='Html' image={Html6}/></Link>
            <Link to='https://mdsalathossain0.github.io/Startup3-project/'><ProjectDetails title='Startup' catagory='Html' image={Html7}/></Link>

            <Link to='https://mdsalathossain0.github.io/Crud-Operation/'><ProjectDetails title='Crud Operation' catagory='JavaScript' image={Java1}/></Link>
            <Link to='https://mdsalathossain0.github.io/Meth_solutions/'><ProjectDetails title='Math Solutions' catagory='JavaScript' image={Java2}/></Link>
            <Link to='https://mdsalathossain0.github.io/number-guess-game/'><ProjectDetails title='Number Guess Game' catagory='JavaScript' image={Java3}/></Link>
            <Link to='https://mdsalathossain0.github.io/digital-clock/'><ProjectDetails title='Digital Clock' catagory='JavaScript' image={Java4}/></Link>
            <Link to='https://mdsalathossain0.github.io/counterJs-typeJs/'><ProjectDetails title='CounterJs' catagory='JavaScript' image={Java5}/></Link>
            <Link to='https://mdsalathossain0.github.io/Funny-vt-project/'><ProjectDetails title='Funny Click' catagory='JavaScript' image={Java6}/></Link>
            <Link to='https://mdsalathossain0.github.io/Dom-Click/'><ProjectDetails title='Dom Click' catagory='JavaScript' image={Java7}/></Link>

            <Link to='https://e-commerce-project-seven-omega.vercel.app/'><ProjectDetails title='eCommerce' catagory='React' image={React1}/></Link>
            <Link to='https://inspiration-project.vercel.app/'><ProjectDetails title='Inspiration' catagory='React' image={React2}/></Link>
            <Link to='https://innovative-project-final.vercel.app/'><ProjectDetails title='Innovate' catagory='React' image={React3}/></Link>
            </Slider>
           
          )
          :
          activelist===1 ? (
            
            <Slider {...settings}>
            <Link to='https://mdsalathossain0.github.io/Nexcent/'><ProjectDetails title='Nextcent' catagory='Html' image={Html1}/></Link>
            <Link to='https://mdsalathossain0.github.io/Foodi-project/'><ProjectDetails title='Foodi' catagory='Html' image={Html2}/></Link>
            <Link to='https://mdsalathossain0.github.io/Omah_project/'><ProjectDetails title='Omah' catagory='Html' image={Html3}/></Link>
            <Link to='https://mdsalathossain0.github.io/Fresh/'><ProjectDetails title='Fresh' catagory='Html' image={Html4}/></Link>
            <Link to='https://mdsalathossain0.github.io/Shoes_Cart/'><ProjectDetails title='Shoes Cart' catagory='Html' image={Html5}/></Link>
            <Link to='https://mdsalathossain0.github.io/Simple_Animation/'><ProjectDetails title='Animation' catagory='Html' image={Html6}/></Link>
            <Link to='https://mdsalathossain0.github.io/Startup3-project/'><ProjectDetails title='Startup' catagory='Html' image={Html7}/></Link>
            </Slider>
           
          )
          :
          activelist == 2 ? (
            
            <Slider {...settings}>
             <Link to='https://mdsalathossain0.github.io/Crud-Operation/'><ProjectDetails title='Crud Operation' catagory='JavaScript' image={Java1}/></Link>
            <Link to='https://mdsalathossain0.github.io/Meth_solutions/'><ProjectDetails title='Math Solutions' catagory='JavaScript' image={Java2}/></Link>
            <Link to='https://mdsalathossain0.github.io/number-guess-game/'><ProjectDetails title='Number Guess Game' catagory='JavaScript' image={Java3}/></Link>
            <Link to='https://mdsalathossain0.github.io/digital-clock/'><ProjectDetails title='Digital Clock' catagory='JavaScript' image={Java4}/></Link>
            <Link to='https://mdsalathossain0.github.io/counterJs-typeJs/'><ProjectDetails title='CounterJs' catagory='JavaScript' image={Java5}/></Link>
            <Link to='https://mdsalathossain0.github.io/Funny-vt-project/'><ProjectDetails title='Funny Click' catagory='JavaScript' image={Java6}/></Link>
            <Link to='https://mdsalathossain0.github.io/Dom-Click/'><ProjectDetails title='Dom Click' catagory='JavaScript' image={Java7}/></Link>
            </Slider>
            
          )
          :
          (
            
            <Slider {...settings}>
            <Link to='https://e-commerce-project-seven-omega.vercel.app/'><ProjectDetails title='eCommerce' catagory='React' image={React1}/></Link>
            <Link to='https://inspiration-project.vercel.app/'><ProjectDetails title='Inspiration' catagory='React' image={React2}/></Link>
            <Link to='https://innovative-project-final.vercel.app/'><ProjectDetails title='Innovate' catagory='React' image={React3}/></Link>
            </Slider>
            
          )

        }
      </Container>
        
    </section>
  )
}

export default Project