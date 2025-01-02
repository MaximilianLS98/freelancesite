'use client'

import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-4 md:mb-0">
            <p>&copy; 2023 Maximilian Skjønhaug. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400 transition duration-300">
              LinkedIn
            </a>
            <a href="#" className="hover:text-blue-400 transition duration-300">
              GitHub
            </a>
            <a href="#" className="hover:text-blue-400 transition duration-300">
              Twitter
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
