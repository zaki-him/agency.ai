import React from 'react'
import { motion } from 'motion/react'

interface Work{
  title: string,
  desc: string,
  img: string
}

interface WorkCardProps {
  work: Work,
  index: number
}

const WorkCard: React.FC<WorkCardProps> = ({ work , index }) => {
  return (
    <motion.div
    initial={{opacity: 0, y: 20}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.6 , delay: index * 0.2}}
    viewport={{once: true}}
    className='flex flex-col max-w-sm md:max-w-lg justify-start pb-6 hover:scale-103 transition-all'>
        
        <img src={work.img} alt="" className='w-full' />

        <div className='flex flex-col gap-2 p-2'>
          <h1 className='text-xl text-neutral-700 text-left'>{work.title}</h1>
          <p className='text-sm text-neutral-400 text-left'>{work.desc}</p>
        </div>
      </motion.div>
  )
}

export default WorkCard