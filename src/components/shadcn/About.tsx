'use client'
import Image from 'next/image'
import CVPicture from '../../../public/maxi.png'

import { motion } from 'framer-motion'
import Link from 'next/link'

const About = () => (
  <section
    id="om"
    className="pt-20 bg-brutal-green-500 dark:bg-gray-900 border-b-2 border-x-2 border-black"
  >
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-bold text-center mb-8 text-gray-800 dark:text-white"
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
          En allsidig fullstack-utvikler med fire års erfaring fra egen virksomhet og
          konsulentroller, for alt fra startups til større selskaper som Norgesgruppen.
        </p>
        <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">
          Med solid kompetanse i teknologier som TypeScript, Next.js, React, Node.js og PostgreSQL,
          har jeg levert helhetlige løsninger innen helse, transport og medlemsorganisasjoner.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Jeg trives med å se helheten i systemarkitektur og sikre at alle deler fungerer sømløst
          sammen.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-8"
      >
        {/* <Link
          href="CV.pdf"
          target="_blank"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition-colors duration-300"
        >
          Vis CV
        </Link> */}
        <Link
          href="CV.pdf"
          target="_blank"
          className="text-black items-center shadow-custom shadow-lila-600 text-lg font-semibold inline-flex px-6 focus:outline-none justify-center text-center bg-lila-300 focus:bg-lila-600 border-lila-600 duration-300 outline-none focus:shadow-none border-2 sm:w-auto py-3 rounded-lg h-16 tracking-wide focus:translate-y-1 w-full hover:bg-lila-500"
        >
          Vis CV
        </Link>
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
          className="mx-auto"
        />
      </motion.div>
    </div>
  </section>
)

export default About
