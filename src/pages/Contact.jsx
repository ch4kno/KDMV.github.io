import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2x1 pt-10 border-text'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-3 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[400px]' src={assets.contact_img} alt="" />
        <div className=' flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-x1 text-gray-600'>Our Stor</p>
            <p  className='text-gray-400'> Building # 1253, Phnom Penh Hanoi Friendship Blvd (1019)<br/>Phnom Penh, Cambodia</p>
            <p className='text-gray-400'>Tel:(855) 978-763-425 <br/> Email: kdmv@ahsmos.com</p>
            <p className='font-semibold text-x1 text-gray-600'> Curreers at KDMV</p>
            <p className=' text-gray-500'> Learn more about our teams and job opening</p>
            <button className='border border-black px-8 py-4 text-sm hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact