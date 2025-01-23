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
    <section
      id="portefølje"
      className="h-full bg-background border-black border-b-2 border-x-2"
    >
      <div className="container md:flex md:flex-row mx-auto">
        <div className="md:w-1/2 md:border-r-2 md:border-black py-20 mx-auto bg-lila-500 px-4">
          <div className="md:sticky md:inset-4">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-bold text-center mb-8 text-gray-800 dark:text-white"
            >
              Fremhevede prosjekter
            </motion.h2>
            <p className="text-foreground max-w-md mx-auto">
              Hi, I'm Maximilian Skjønhaug, a passionate freelance web developer and designer with a
              keen eye for creating beautiful, functional, and user-friendly websites. With years of
              experience in the field, I specialize in crafting responsive web applications using
              modern technologies like React, Next.js, and Tailwind CSS. My goal is to help
              businesses and individuals bring their digital visions to life through clean code and
              stunning design.
            </p>
            <div className="text-center mt-8">
              {/* <motion.a
            href="/projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
          >
            Se alle prosjekter
          </motion.a> */}
              <motion.a
                href="/projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                // className="text-black items-center shadow-custom shadow-lila-600 text-lg font-semibold inline-flex px-6 focus:outline-none justify-center text-center bg-lila-300 focus:bg-lila-600 border-lila-600 duration-300 outline-none focus:shadow-none border-2 sm:w-auto py-3 rounded-lg h-16 tracking-wide focus:translate-y-1 w-full hover:bg-lila-500"
                className="text-black items-center shadow-custom shadow-black text-lg font-semibold inline-flex px-6 focus:outline-none justify-center text-center bg-white border-black ease-in-out transform transition-all focus:ring-lila-700 focus:shadow-none border-2 duration-100 focus:bg-black focus:text-white sm:w-auto py-3 rounded-lg h-16 focus:translate-y-1 w-full hover:text-lila-800 tracing-wide"
              >
                Se alle prosjekter
              </motion.a>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 py-20 px-4 bg-white dark:bg-slate-950">
          <div className="grid grid-cols-1 gap-8 mx-auto max-w-md">
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
                <div className="h-20">
                  <div className="absolute bottom-4 right-4">
                    <Link href={`/projects/${project.id}`} className="inline-block px-4 py-2">
                      Les mer
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* <PreTextDebug data={projectsPayload} /> */}
    </section>
  )
}

export default Portfolio
