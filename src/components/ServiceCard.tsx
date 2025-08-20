import React from 'react'
import { motion } from 'motion/react'

interface Service {
  title: string,
  desc: string,
  img: string
}

interface ServiceCardProps {
  service: Service,
  index: number
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service , index }) => {
  return (
    <motion.div
    initial={{opacity: 0, y: 30}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.5 , delay: index * 0.2}}
    viewport={{once: true}}
    className='relative overflow-hidden max-w-md md:max-w-md m-2 sm:m-3 border border-neutral-200 rounded-xl shadow-2xl shadow-neutral-200 flex gap-5 items-center py-2 px-6 h-36'>
      <div className='bg-gray-100 rounded-full'>
        <img src={service.img} alt="" className='max-w-24 bg-white rounded-full m-2' />
      </div>
      <div className='py-2 px-4 flex flex-col gap-2'>
        <h1 className='text-xl font-light text-neutral-700'>{service.title}</h1>
        <p className='text-xs md:text-sm text-neutral-400'>{service.desc}</p>
      </div>
    </motion.div>
  )
}

export default ServiceCard