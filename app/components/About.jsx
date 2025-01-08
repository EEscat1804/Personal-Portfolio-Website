import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h4 
        className='text-center mb-1 text-lg font-Ovo'>
          Introduction</motion.h4>

        <motion.h2 
        className='text-center text-5xl font-Ovo mb-6'>
          About Me</motion.h2>

          <motion.div 
          className='flex w-full flex-col lg:flex-row items-start gap-16 my-10'>
            <motion.div 
            className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='user' className='w-full
                rounded-3xl' />
            </motion.div>
            <motion.div 
            className='flex-1'>
              <p className='text-center text-lg font-Ovo mx-auto max-w-4xl'
              >
                Hello, my name is Ethan Escat currently a third year studying EECS at Cal. I have a deep interest in 
                robotics and AI and I want to use this interest to make lives of others easier. At Cal I have taken coursework that
                lets me practice my teamwork and collaboration skills. Before Berkeley I worked as a math tutor for my community college
                that allowed me to break out of my shell and develop key communication skills. Currently I am a member of PASAE as a transfer
                rep intern where I help represent transfer STEM students and providing resources to help transfers find their place in Berkeley. 
                I am eager to improve my skills and gain new experiences, I am open to work and find new opportunities so feel free to connect with me!
              </p>

              <motion.ul 
              className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2x1'>
                {infoList.map(({icon, iconDark, title, description}, index)=>(
                  <motion.li 
                  className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover
                  hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-yellow-50
                  dark:hover:bg-darkHover'
                   key={index}>
                    <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3'/>
                    <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                    <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.h4 
              className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Tools I Use</motion.h4>

              <motion.ul 
              className='flex items-center gap-3 sm:gap-5'>
                {toolsData.map((tool, index)=>(
                  <motion.li 
                  className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer 
                  hover:-translate-y-1 duration-500'
                  key={index}>
                    <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
    </motion.div>
  )
}

export default About
