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
    // <motion.div
    //   className="relative bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 text-center overflow-hidden"
    //   whileHover={{ scale: 1.05 }}
    //   transition={{ duration: 0.3 }}
    // >
    <motion.div
      className="relative text-center items-center overflow-hidden text-black shadow-custom shadow-black text-lg font-semibold inline-flex px-6 focus:outline-none justify-center  bg-[#f5f5f5] border-black ease-in-out transform transition-all focus:ring-lila-700 focus:shadow-none border-2 duration-100 focus:bg-black focus:text-white sm:w-auto py-3 rounded-lg h-16 tracking-wide focus:translate-y-1 w-full hover:text-lila-800 gap-3"
    //   whileHover={{ scale: 1.05 }}
    //   transition={{ duration: 0.3 }}
    >
      {/* <motion.div
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
      /> */}
      {/* <span className="relative z-10 text-lg font-semibold text-gray-800 dark:text-white"> */}
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
            //  <motion.div
            //   key={skill}
            //   initial={{ opacity: 0, y: 20 }}
            //   animate={{ opacity: 1, y: 0 }}
            //   transition={{ duration: 0.5, delay: index * 0.1 }}
            //   className='rounded-lg shadow-md'
            // >
            <SkillItem key={`${index}${skill}`} skill={skill} />
            // </motion.div>
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
