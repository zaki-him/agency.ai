import { Mail, UserRound } from 'lucide-react'
import React from 'react'

const Contact: React.FC = () => {
  return (
    <div id='contact' className='py-30 px-4 sm:px-12 md:px-24 lg:px-40'>
      <div className='flex flex-col items-center gap-5 py-3'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl text-neutral-700'>Reach Out To Us</h1>
        <p className='max-w-lg text-center text-neutral-500 md:text-xl'>From strategy to execution, we craft digital solutions that move your business forward.</p>
      </div>
      <form action="" className='flex flex-col gap-4'>
        <div className='flex max-sm:flex-col justify-between items-center gap-5'>
          <div className='flex flex-col w-full'>
            <label htmlFor="">Your name</label>
            <div className='flex items-center border border-neutral-100 rounded-md px-2'>
              <UserRound className='size-5' />
              <input type="text" placeholder='Enter your name' className='outline-none p-3' />
            </div>
          </div>
          <div className='flex flex-col w-full'>
            <label htmlFor="">Email</label>
            <div className='flex items-center border border-neutral-100 rounded-md px-2'>
              <Mail className='size-5' /> 
              <input type="email" placeholder='Enter your email' className='outline-none p-3' />
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="">Message</label>
          <textarea name="" placeholder='Enter your message' rows={8} className='focus:outline-none border border-neutral-200 rounded-xl p-3' ></textarea>
        </div>
        <button className='py-2 px-4 bg-[var(--primary-color)] rounded-2xl max-w-32 text-white cursor-pointer'>Submit</button>
      </form>
    </div>
  )
}

export default Contact