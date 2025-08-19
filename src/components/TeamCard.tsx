import React from 'react'

interface Team {
  name: string,
  title: string,
  image: string
}

interface TeamProps {
  team: Team
}

const TeamCard: React.FC<TeamProps> = ({ team }) => {
  return (
    <div className='flex max-sm:flex-col items-center p-4 gap-5 border border-neutral-100 rounded-xl shadow-xl shadow-neutral-100 hover:scale-103 transition-all'>
      <img src={team.image} alt="" className='size-12 rounded-full' />
      <div className='flex-1'>
        <h1 className='text-sm font-semibold'>{team.name}</h1>
        <p className='text-xs opacity-60'>{team.title}</p>
      </div>
    </div>
  )
}

export default TeamCard