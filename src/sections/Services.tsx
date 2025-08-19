import React from 'react'
import assets from '../assets/assets'
import ServiceCard from '../components/ServiceCard'

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
    <div id='services'>
      <div className='flex flex-col items-center gap-5 py-3'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl text-neutral-700'>How Can We Help?</h1>
        <p className='max-w-lg text-center text-neutral-500 md:text-xl'>From strategy to execution, we craft digital solutions that move your business forward.</p>
      </div>
      <div className='flex flex-col items-center md:grid grid-cols-2 gap-4'>
        {servicesInfo.map((service , index) => (
          <ServiceCard service={service} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default Services