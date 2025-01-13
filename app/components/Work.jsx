import React from 'react'
import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import { motion } from "motion/react"

const Work = ({ isDarkMode }) => {
  return (
    <motion.div 
      id='work' className='w-full px-[12%] py-10 scroll-mt-20'>

      <motion.h4 
        className='text-center mb-2 text-lg font-Ovo'>
        My Portfolio
      </motion.h4>

      <motion.h2 
        className='text-center text-5xl font-Ovo'>
        My Latest Work
      </motion.h2>

      <motion.p 
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Welcome to my portfolio! Explore a collection of projects 
        showcasing my expertise in software development, data analysis, and design.
        Check out ethernet to see a fullstack instagram inspired social media web application or 
        ethernet, a web application that combines my love for software and graphic design that allows
        the user to create a custom designed t-shirt.
      </motion.p>

      <motion.div 
        className='grid grid-cols-auto my-10 gap-5 dark:text-black'>
        {workData.map((project, index) => (
            <motion.div 
              key={index} 
                className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                style={{ backgroundImage: `url(${project.bgImage})` }}>
                <div className='bg-white w-10/12 rounded-mg absolute bottom-5 left-1/2 -translate-x-1/2 
                     py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                  <div>
                  <h2 className='font-semibold'>{project.title}</h2>
                  <p className='text-sm text-gray-700'>{project.description}</p>
                </div>
                <div className="flex items-center space-x-2">
               
               {(index === 0 || index === 2) && (
                <a href={project.demolink} target="_blank" rel="noopener noreferrer">
                <div className='flex flex-col items-center'>
                 <button 
                   className='border rounded-full border-black w-9 aspect-square flex items-center justify-center
                   shadow-[2px_2px_0_#000] group-hover:bg-green-300 transition'>
                 
                 <Image src={assets.sendarrow} alt='Custom Icon' className='w-5 h-5' />
                </button>
                <p className="text-xs mt-2 text-gray-600 group-hover:text-black">Demo</p>
                
                </div>
                 </a>
                )}
        <       a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center
                   shadow-[2px_2px_0_#000] group-hover:bg-blue-300 transition'>
                 <Image src={assets.send_icon} alt='send icon' className='w-5' />
               </div>
                 <p className="text-xs mt-2 text-gray-600 group-hover:text-black">GitHub</p>
                  </a>
                </div>
                </div>
            </motion.div>
      ))}
      </motion.div>
    </motion.div>
  )
}

export default Work;
