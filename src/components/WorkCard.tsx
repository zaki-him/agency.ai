import React from 'react'

interface Work{
  title: string,
  desc: string,
  img: string
}

interface WorkCardProps {
  work: Work
}

const WorkCard: React.FC<WorkCardProps> = ({ work }) => {
  return (
    <div className='flex flex-col max-w-sm md:max-w-lg justify-start pb-6 hover:scale-103 transition-all'>
        
        <img src={work.img} alt="" className='w-full' />

        <div className='flex flex-col gap-2 p-2'>
          <h1 className='text-xl text-neutral-700 text-left'>{work.title}</h1>
          <p className='text-sm text-neutral-400 text-left'>{work.desc}</p>
        </div>
      </div>
  )
}

export default WorkCard