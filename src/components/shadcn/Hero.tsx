'use client'

import { motion } from 'framer-motion'

const Hero = () => {
  return (
    // <section className="bg-gray-900 dark:bg-gray-800 text-white py-20 border-b-2 border-x-2 border-black">
    <section className="bg-brutal-red-500 dark:bg-gray-800 text-white py-20 border-b-2 border-x-2 border-black">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Maximilian Skjønhaug
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8"
        >
          Freelance Fullstack typescript utvikler
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#kontakt"
            // className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
            className="text-black items-center shadow-custom shadow-lila-600 text-lg font-semibold inline-flex px-6 focus:outline-none justify-center text-center bg-lila-300 focus:bg-lila-600 border-lila-600 duration-300 outline-none focus:shadow-none border-2 sm:w-auto py-3 rounded-lg h-16 tracking-wide focus:translate-y-1 w-full hover:bg-lila-500"
          >
            Ta en prat
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
