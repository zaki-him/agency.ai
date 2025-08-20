import { Mail, UserRound } from 'lucide-react'
import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import toast, {Toaster} from 'react-hot-toast'
import { motion } from 'motion/react'

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if(!formRef.current) return;

    emailjs
    .sendForm(
      serviceID,
      templateId,
      formRef.current,
      publicKey
    )
    .then(() => {
      toast.success('Email was sent succesfully')
      formRef.current?.reset()
    },
    (error) => {
      toast.error('failed to send email')
      console.log('error:',error.text)
    }
  )
  }

  return (
    <motion.div
    initial={{opacity: 0, y: 20}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.5, delay: 0.7}}
    viewport={{once: true}}
    id='contact' className='py-30 px-4 sm:px-12 md:px-24 lg:px-40'>
      <div className='flex flex-col items-center gap-5 py-3'>
        <motion.h1
        initial={{opacity: 0, y: 20}}
        transition={{duration: 0.6 , delay: 0.8}}
        viewport={{once: true}}
        whileInView={{opacity: 1, y: 0}}
        className='text-2xl sm:text-3xl md:text-4xl text-neutral-700'>Reach Out To Us</motion.h1>
        <motion.p
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5 , delay: 1}}
        viewport={{once: true}}
        className='max-w-lg text-center text-neutral-500 md:text-xl'>From strategy to execution, we craft digital solutions that move your business forward.</motion.p>
      </div>
      <motion.form
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.6, delay: 1.5}}
      viewport={{once: true}}
      ref={formRef} onSubmit={sendEmail} className='flex flex-col gap-4'>
        <div className='flex max-sm:flex-col justify-between items-center gap-5'>
          <div className='flex flex-col w-full'>
            <label htmlFor="">Your name</label>
            <div className='flex items-center border border-neutral-100 rounded-md px-2'>
              <UserRound className='size-5' />
              <input type="text" name='name' placeholder='Enter your name' className='outline-none p-3' required />
            </div>
          </div>
          <div className='flex flex-col w-full'>
            <label htmlFor="">Email</label>
            <div className='flex items-center border border-neutral-100 rounded-md px-2'>
              <Mail className='size-5' /> 
              <input type="email" name='email' placeholder='Enter your email' className='outline-none p-3' required />
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="">Message</label>
          <textarea name="message" placeholder='Enter your message' rows={8} className='focus:outline-none border border-neutral-200 rounded-xl p-3' required ></textarea>
        </div>
        <button type='submit' className='py-2 px-4 bg-[var(--primary-color)] rounded-2xl max-w-32 text-white cursor-pointer'>Submit</button>
      </motion.form>
      <Toaster />
    </motion.div>
  )
}

export default Contact