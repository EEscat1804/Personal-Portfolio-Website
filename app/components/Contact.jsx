import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from "motion/react"

const contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "5b160e93-feb7-41fc-b795-4ad26b286cd7");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
 

  return (
    <motion.div 
    id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] 
    bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
        <motion.h4 
        className='text-center mb-2 text-lg font-Ovo'>
        Connect With Me</motion.h4>

        <motion.h2 
        className='text-center text-5xl font-Ovo'>
        Get In Touch</motion.h2>

        <motion.p 
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            I'd love to hear from you! If you have any questions, comments, or feedback,
            please use the form below.
        </motion.p>

        <motion.form 
        onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                
                <motion.input 
                type="text" placeholder='Enter your name' required
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400
                rounded-md bg-white dark:bg-gray-700 dark:border-white/90' name='name'/>

                <motion.input 
                type="email" placeholder='Enter your email' required
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400
                rounded-md bg-white dark:bg-gray-700 dark:border-white/90' name='email'/>
            </div>
            <motion.textarea 
            rows='6' placeholder='Enter your message' required
            className='w-full p-4 outline-none border-[0.5px] border-gray-400
            rounded-md bg-white mb-6 dark:bg-gray-700 dark:border-white/90' name='message'></motion.textarea>

            <motion.button 
            type='submit'
            className='py-3 px-8 w-max border border-gray-400 rounded-full flex items-center justify-between gap-2 bg-gray-700 text-white mx-auto hover:bg-black duration-500
            dark:hover:bg-darkHover'
            >Submit now <Image src={assets.right_arrow_white} alt='' className='w-4'/> </motion.button>

            <p className='mt-4'>{result}</p>
        </motion.form>
    </motion.div>
  )
}

export default contact
