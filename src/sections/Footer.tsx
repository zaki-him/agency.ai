import React from 'react'
import assets from '../assets/assets'
import { motion } from 'motion/react'

const Footer: React.FC = () => {
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

  return (
    <motion.div
    initial={{opacity: 0, y: 20}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.5, delay: 0.6}}
    viewport={{once: true}}
    className='pt-10 bg-slate-50 mt-10 px-4 sm:px-10 lg:px-24 xl:px-40 w-full'>
      <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
        <motion.div
        initial={{opacity: 0, x: -20}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 0.5, delay: 0.7}}
        viewport={{once: true}}
        className='space-y-5 text-sm text-gray-700'>
          <img src={assets.logo} alt="" className='w-32 sm:w-44'/>
          <p className='max-w-md'>From strategy to execution, we craft digital solutions that move your business forward.</p>

          <ul className='flex gap-8'>
            {links.map((link, index) => (
              <li key={index}>
                <a className='hover:text-[var(--primary-color)]' href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
        initial={{opacity: 0, x: 20}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 0.5, delay: 1}}
        viewport={{once: true}}
        className='text-gray-600'>
            <h3 className='font-semibold'>Subscribe to our newsletter</h3>
            <p className='text-sm mt-2 mb-6'>The latest news, articles, and resources, sent to your inbox weekly.</p>
            <div className='flex gap-2 text-sm'>
              <input type="email" placeholder='Enter your email' className='w-full p-3 text-sm outline.none rounded bg-transparent border border-gray-300' />
              <button className='bg-[var(--primary-color)] text-white rounded px-6'>Subscribe</button>
            </div>
        </motion.div>
      </div>
      <hr className='border border-gray-300 my-6'/>
      <div className='pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap'>
            <p>Copyright 2025 ©️ Zakaria - All Right Reserved.</p>
            <div className='flex items-center justify-between gap-4'>
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.instagram_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
      </div>
    </motion.div>
  )
}

export default Footer