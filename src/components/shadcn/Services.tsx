'use client'

import { motion } from 'framer-motion'

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom web applications tailored to your needs using modern technologies.',
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description:
      'Creating intuitive and visually appealing user interfaces for optimal user experience.',
  },
  {
    id: 3,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications using React Native.',
  },
  {
    id: 4,
    title: 'E-commerce Solutions',
    description: 'Setting up and customizing e-commerce platforms for your business.',
  },
]

const Services = () => {
  return (
    <section id="tjenester" className="py-20 bg-gray-100 dark:bg-gray-800 border-black border-b-2 border-x-2">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-bold text-center mb-8 text-gray-800 dark:text-white"
        >
          Tjenester
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl m-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-custom shadow-black p-6"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
