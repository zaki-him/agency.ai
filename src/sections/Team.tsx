import React from 'react'
import { teamData } from '../assets/assets'
import TeamCard from '../components/TeamCard'
import { motion } from 'motion/react'

const Team: React.FC = () => {
  return (
    <motion.div
    initial={{opacity: 0, y: 20}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.6 , delay: 0.8}}
    viewport={{once: true}}
    className='p-4'>
      <div className='flex flex-col items-center gap-5 py-3'>
        <motion.h1
        initial={{opacity: 0, y: 20}}
        transition={{duration: 0.6 , delay: 0.8}}
        viewport={{once: true}}
        whileInView={{opacity: 1, y: 0}}
        className='text-2xl sm:text-3xl md:text-4xl text-neutral-700'>Meet The Team</motion.h1>
        <motion.p
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5 , delay: 1}}
        viewport={{once: true}}
        className='max-w-lg text-center text-neutral-500 md:text-xl'>A passionate team of digital experts dedicated to your brands success.</motion.p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {teamData.map((item , index) => (
          <TeamCard team={item} index={index} key={index} />
        ))}
      </div>
    </motion.div>
  )
}

export default Team