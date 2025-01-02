'use client'

import { motion } from 'framer-motion'

const skills = [
  'React',
  'Next.js',
  'JavaScript',
  'TypeScript',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'Node.js',
  'Express',
  'MongoDB',
  'Git',
  'Responsive Design',
]

const SkillItem = ({ skill }: { skill: string }) => {
  return (
    <motion.div
      className="relative bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 text-center overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute inset-0 opacity-0 hover:opacity-100"
        initial={false}
        animate={{
          background: [
            // 'linear-gradient(0deg, #ff00ff, #00ff00)',
            // 'linear-gradient(90deg, #00ff00, #0000ff)',
            // 'linear-gradient(180deg, #0000ff, #ff0000)',
            'linear-gradient(270deg, #ff0000, #ff00ff)',
            // 'linear-gradient(360deg, #ff00ff, #00ff00)',
          ],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      />
      <span className="relative z-10 text-lg font-semibold text-gray-800 dark:text-white">
        {skill}
      </span>
    </motion.div>
  )
}

const Skills = () => {
  return (
    <section id="teknologier" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white"
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
             <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='rounded-lg shadow-md'
            >
              <SkillItem skill={skill} />
            </motion.div>
            /* <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ border: 1, transition: { delay: 0, duration: 0.1, } }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 text-center"
              >
                  <span className="text-lg font-semibold text-gray-800 dark:text-white">{skill} hello</span>
              </motion.div> */
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
