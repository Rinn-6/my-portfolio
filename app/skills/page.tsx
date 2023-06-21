
"use client"
import React from 'react'
import Header from '../components/header';
import { motion } from 'framer-motion';



function MySkills() {

  return (
    <div className='bg'>
      <Header />
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className=" flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
      >
        <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          Skills
        </h3>
      
        <div className="skill-logo grid grid-cols-3 gap-5  ">
        
         <img className='image'  src='https://i.pinimg.com/564x/5a/10/dc/5a10dc26f67f4217c22136dbd69dbc47.jpg' alt='JavaScript Logo'/>
         <img className='image bg-white' src='https://logotyp.us/files/css.svg' alt='CSS Logo'/>
         <img className='image bg-white' src='https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png' alt=''/>
         <img className='image' src='https://i.pinimg.com/564x/9b/4e/e0/9b4ee057076232fb57c48cf80947f8a7.jpg' alt=''/>
         <img className='image' src='https://i.pinimg.com/564x/cf/5f/7d/cf5f7dca8d30d52a39f4043f3796d7f0.jpg' alt=''/>
         
         <img className='image' src='https://www.drupal.org/files/project-images/screenshot_361.png' alt=''/>
       
        </div>
      </motion.div>
    </div>
  )
}

export default MySkills