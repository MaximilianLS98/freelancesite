'use client'

import { motion } from 'framer-motion'

const skills = [
  'Next.js',
  'React',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Express',
  'Tailwind CSS',
  'PostgreSQL',
  'MongoDB',
  'Git',
  'GraphQL',
  'Redux',
]

const SkillItem = ({ skill }: { skill: string }) => {
  return (
    <motion.div
      className="relative text-center items-center overflow-hidden text-black shadow-custom shadow-black text-lg font-semibold inline-flex px-6 focus:outline-none justify-center  bg-[#f5f5f5] border-black ease-in-out transform transition-all focus:ring-lila-700 focus:shadow-none border-2 duration-100 focus:bg-black focus:text-white sm:w-auto py-3 rounded-lg h-16 tracking-wide focus:translate-y-1 w-full hover:text-lila-800 gap-3"
    >
      <span className="relative z-10 text-lg font-semibold">
        {skill}
      </span>
    </motion.div>
  )
}

const Skills = () => {
  return (
    <section
      id="teknologier"
      className="py-20 bg-brutal-yellow-500 dark:bg-gray-800 border-black border-b-2 border-x-2"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-bold text-center mb-8 text-gray-800 dark:text-white"
        >
          Mine favoritt teknologier
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {skills.map((skill, index) => (
            <SkillItem key={`${index}${skill}`} skill={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
