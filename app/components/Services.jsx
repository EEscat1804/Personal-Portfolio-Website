import { serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'
import { motion } from "motion/react"

const Services = () => {
  return (
    <motion.div 
    id="services" className='w-full px-[12%] py-10 scroll-mt-20'>

        <motion.h4 
          className='text-center mb-2 text-lg font-Ovo'>
          What I Offer</motion.h4>
        <motion.h2 
        className='text-center text-5xl font-Ovo'>
          My Services</motion.h2>

        <motion.p 
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            My projects include practice in different areas of Computer and Data Science. 
            I was able to combine my love for graphic design and fullstack development.
        </motion.p>
        
    <motion.div 
    className="grid grid-cols-auto gap-6 my-10">
      {serviceData.map(({ icon, title }, index) => (
        <motion.div
        key={index}
        className="border border-gray-400 rounded-lg hover:shadow-black hover:bg-blue-300 cursor-pointer hover:translate-y-1 duration-500 overflow-hidden 
          dark:bg-black dark:hover:shadow-yellow-50 dark:hover:bg-red-800"
        >
        {/* Top Half: Image */}
        <div className="card-image h-1/2">
          <Image src={icon} alt={title} className="w-full h-full object-cover" />
        </div>
      
        {/* Bottom Half: Skill Info */}
          <h3 className="text-lg p-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
        </motion.div>
      
     ))}
     
   </motion.div>
 </motion.div>

  )
}
  
export default Services;
