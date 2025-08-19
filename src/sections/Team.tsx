import React from 'react'
import { teamData } from '../assets/assets'
import TeamCard from '../components/TeamCard'

const Team: React.FC = () => {
  return (
    <div className='p-4'>
      <div className='flex flex-col items-center gap-5 py-3'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl text-neutral-700'>Meet The Team</h1>
        <p className='max-w-lg text-center text-neutral-500 md:text-xl'>A passionate team of digital experts dedicated to your brands success.</p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {teamData.map((item , index) => (
          <TeamCard team={item} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Team