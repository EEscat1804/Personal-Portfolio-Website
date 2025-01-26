import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Header = ({ isDarkMode }) => {
  const words = ['Engineer', 'Developer', 'Creator', 'Innovator', 'Designer'];
  const [typingIndex, setTypingIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
  const typingInterval = setInterval(() => {
    if (deleting) {
      if (typingIndex > 0) {
        setTypingIndex(typingIndex - 1);
      } else {
        // Finish deleting the word, pause briefly, and then move to the next word
        setDeleting(false);
        setTimeout(() => {
          setWordIndex((wordIndex + 1) % words.length); // Move to the next word
          setTypingIndex(0); // Reset typing index
        }, 300); // Small pause before starting to type the new word
      }
    } else {
      if (typingIndex < words[wordIndex].length) {
        setTypingIndex(typingIndex + 1);
      } else {
        // Finished typing the word, wait before deleting
        if (!isWaiting) {
          setIsWaiting(true);
          setTimeout(() => {
            setIsWaiting(false);
            setDeleting(true);
          }, 3000); // Wait 3 seconds before deleting
        }
      }
    }
  }, 150);

  return () => clearInterval(typingInterval);
}, [typingIndex, deleting, wordIndex, isWaiting, words]);

  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'm Ethan Escat
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        Aspiring{' '}
        <span className="text-blue-500">
        {words[wordIndex].slice(0, typingIndex)}
        </span>
        <span className="cursor animate-blink">|</span> 
        </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        I am a UC Berkeley EECS student currently interested in the applications of robotics and AI.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-2 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="https://calendar.app.google/ySjA7dCnfEYTAyrD6"
          target="_blank"
          rel="noopener noreferrer"
          className="w-48 h-14 border rounded-full border-gray-500 bg-red-400 dark:text-black flex items-center justify-center gap-2 hover:bg-red-500"
        >
          Schedule Meeting
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/sample-resume.pdf"
          download="Ethan_Escat_Resume.pdf"
          className="w-48 h-14 border rounded-full border-gray-400 flex items-center justify-center gap-2 bg-white dark:text-black hover:bg-gray-200"
        >
          My Resume <Image src={assets.download_icon} alt="" className="w-4" />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          href="https://www.linkedin.com/in/eescat2004/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-48 h-14 border rounded-full border-gray-500 bg-blue-400 dark:text-black flex items-center justify-center gap-2 hover:bg-blue-500"
        >
          LinkedIn
          <Image src={assets.linkedIn} alt="" className="w-4" />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          href="https://github.com/EEscat1804"
          target="_blank"
          rel="noopener noreferrer"
          className="w-48 h-14 border rounded-full border-gray-500 bg-gray-400 dark:text-black flex items-center justify-center gap-2 hover:bg-gray-500"
        >
          GitHub
          <Image src={assets.send_icon} alt="" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;

