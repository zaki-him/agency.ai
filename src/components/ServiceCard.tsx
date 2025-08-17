import React from 'react'

interface Service {
  title: string,
  desc: string,
  img: string
}

interface ServiceCardProps {
  service: Service
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className='relative overflow-hidden max-w-md md:max-w-md m-2 sm:m-3 border border-neutral-200 rounded-xl shadow-2xl shadow-neutral-200 flex gap-5 items-center py-2 px-6 h-36'>
      <div className='bg-gray-100 rounded-full'>
        <img src={service.img} alt="" className='max-w-24 bg-white rounded-full m-2' />
      </div>
      <div className='py-2 px-4 flex flex-col gap-2'>
        <h1 className='text-xl font-light text-neutral-700'>{service.title}</h1>
        <p className='text-xs md:text-sm text-neutral-400'>{service.desc}</p>
      </div>
    </div>
  )
}

export default ServiceCard