import React, { useState } from 'react'
import assets from '../assets/assets.ts'
import { ArrowRight , Menu , X} from 'lucide-react'

const Header: React.FC = () => {
  const links:{title: string , href: string}[] = [
    {
      title: 'Home',
      href: '#',
    },
    {
      title: 'Services',
      href: '#services',
    },
    {
      title: 'Our Work',
      href: '#work',
    },
    {
      title: 'Contact Us',
      href: '#contact',
    },
  ]
  const [isOpen , setIsOpen] = useState(false)
  return (
    <header className='flex justify-between items-center py-5 xl:px-40 lg:px-24 md:px-16 px-4 sticky top-0 backdrop-blur-xl font-medium bg-white/50 z-20 w-full'>
      
      <a href="">
        <img src={assets.logo} alt="" className='w-32 sm:w-40' />
      </a>

      <ul className={`flex gap-2 text-gray-700 text-sm transition-all ${!isOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 right-0 bottom-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:gap-2 max-sm:bg-[var(--primary-color)] max-sm:text-white max-sm:pt-20`}>

        <button className='absolute top-4 right-4' onClick={() => setIsOpen(false)}>
          <X className='w-5 sm:hidden'/>
        </button>

        {links.map((link , index) => (
          <li key={index} className='max-sm:my-3 max-sm:text-xl'>
            <a href={link.href} className='hover:border-b' onClick={() => setIsOpen(false)}>{link.title}</a>
          </li>
        ))}
      </ul>
      
      <div className='flex items-center'>
        <a href="#contact" className='flex items-center gap-1 px-5 py-1 bg-[var(--primary-color)] rounded-full text-white hover:scale-105 transition-all max-sm:hidden'>
        Contact <ArrowRight className='size-5'/>
        </a>
        <button onClick={() => setIsOpen(true)}>
        <Menu className='w-5 sm:hidden'/>
        </button>
      </div>
    </header>
  )
}

export default Header