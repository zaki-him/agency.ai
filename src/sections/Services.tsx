import React from 'react'
import assets from '../assets/assets'
import ServiceCard from '../components/ServiceCard'
import { motion } from 'motion/react'

const Services: React.FC = () => {

  const servicesInfo = [
    {
      title: 'Advertising',
      desc: 'We turn bold ideas into powerful digital solutions that connect, engage...',
      img: assets.ads_icon
    },
    {
      title: 'Content Marketing',
      desc: 'We turn bold ideas into powerful digital solutions that connect, engage...',
      img: assets.marketing_icon
    },
    {
      title: 'Content Writing',
      desc: 'We turn bold ideas into powerful digital solutions that connect, engage...',
      img: assets.content_icon
    },
    {
      title: 'Social Media',
      desc: 'We turn bold ideas into powerful digital solutions that connect, engage...',
      img: assets.social_icon
    },
  ]

  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{once: true}}
    transition={{staggerChildren: 0.2}}
    id='services'>
      <div className='flex flex-col items-center gap-5 py-3'>
        <motion.h1
        initial={{opacity: 0, y: 20}}
        transition={{duration: 0.6 , delay: 0.8}}
        viewport={{once: true}}
        whileInView={{opacity: 1, y: 0}}
        className='text-2xl sm:text-3xl md:text-4xl text-neutral-700'>How Can We Help?</motion.h1>
        <motion.p
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5 , delay: 1}}
        viewport={{once: true}}
        className='max-w-lg text-center text-neutral-500 md:text-xl'>From strategy to execution, we craft digital solutions that move your business forward.</motion.p>
      </div>
      <div className='flex flex-col items-center md:grid grid-cols-2 gap-4'>
        {servicesInfo.map((service , index) => (
          <ServiceCard service={service} index={index} key={index}/>
        ))}
      </div>
    </motion.div>
  )
}

export default Services