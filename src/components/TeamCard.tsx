import React from 'react'
import { motion } from 'motion/react'

interface Team {
  name: string,
  title: string,
  image: string
}

interface TeamProps {
  team: Team,
  index: number
}

const TeamCard: React.FC<TeamProps> = ({ team , index }) => {
  return (
    <motion.div
    initial={{opacity: 0, y: 20}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.6 , delay: index * 0.2}}
    viewport={{once: true}}
    className='flex max-sm:flex-col items-center p-4 gap-5 border border-neutral-100 rounded-xl shadow-xl shadow-neutral-100 hover:scale-103 transition-all'>
      <img src={team.image} alt="" className='size-12 rounded-full' />
      <div className='flex-1'>
        <h1 className='text-sm font-semibold'>{team.name}</h1>
        <p className='text-xs opacity-60'>{team.title}</p>
      </div>
    </motion.div>
  )
}

export default TeamCard