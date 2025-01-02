'use client'

import React, { cache } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import PreTextDebug from '../customComponents/PreTextDebug'

const projects = [
  {
    id: 1,
    title: 'E-commerce Website',
    image: '/placeholder.jpg?height=300&width=400',
    description: 'A fully functional e-commerce platform built with Next.js and Stripe.',
  },
  {
    id: 2,
    title: 'Blog Application',
    image: '/placeholder.jpg?height=300&width=400',
    description: 'A responsive blog application with a custom CMS using React and Node.js.',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    image: '/placeholder.jpg?height=300&width=400',
    description:
      'A sleek portfolio website for a professional photographer using Gatsby and GraphQL.',
  },
]

type Tprops = {
  projectsPayload: any
}

const Portfolio = (props: Tprops) => {
  const { projectsPayload } = props
  return (
    <section id="portefølje" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white"
        >
          Fremhevede prosjekter
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsPayload.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden relative"
            >
              <Image
                // src={project.image}
                src={'/placeholder.jpg?height=300&width=400'}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              </div>
              <div className='h-20'>
                <div className="absolute bottom-4 right-4">
                  <Link href={`/projects/${project.id}`} className="inline-block px-4 py-2">
                    Les mer
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <motion.a
            href="/projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
          >
            Se alle prosjekter
          </motion.a>
        </div>
      </div>
      <PreTextDebug data={projectsPayload} />
    </section>
  )
}

export default Portfolio
