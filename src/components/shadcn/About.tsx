'use client'
import Image from 'next/image'
import CVPicture from '../../../public/maxi.png'

import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="om" className="pt-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white"
        >
          Om meg
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">
            Hi, I'm Maximilian Skjønhaug, a passionate freelance web developer and designer with a
            keen eye for creating beautiful, functional, and user-friendly websites.
          </p>
          <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">
            With years of experience in the field, I specialize in crafting responsive web
            applications using modern technologies like React, Next.js, and Tailwind CSS.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My goal is to help businesses and individuals bring their digital visions to life
            through clean code and stunning design.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
            <Image
                src={CVPicture}
                alt="Maximilian Skjønhaug"
                width={300}
                height={300}
                className='mx-auto'
            />
        </motion.div>
      </div>
    </section>
  )
}

export default About
