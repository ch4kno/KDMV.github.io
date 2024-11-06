import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
        <div className=' text-2x1 text-center pt-8 border-t'>
          <Title text1={'About'} text2={'Us'}/>
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-16'>
            <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
            <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                <p>Welcome to KDMV, your trusted destination for both original and second-hand products in Cambodia. Founded in 2022, KDMV was born from the idea of creating a seamless platform where customers can buy and sell high-quality goods with confidence. As a leading e-commerce website, we are dedicated to offering a wide range of products that cater to your needs, whether you're looking for brand-new items or second-hand treasures.</p>
                <p>“My motto is that I’d rather bite off more than I can chew than nibble on mediocrity.”.</p>
                <b className='text-gray-800'>Our Mission</b>
                <p>We are committed to delivering exceptional service, building lasting relationships, and supporting local entrepreneurs and buyers alike, all while maintaining the highest standards of trust and customer satisfaction.</p>
            </div>
        </div>

        <div className=' text-3x1 py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
        </div>
        <div className='flex flex-col md:flex-row text-sm mb-20'>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Quality Assurancce</b>
                <p className='text-gray-400'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>

            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Convenience:</b>
                <p className='text-gray-400'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.,/</p>        
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Exceptional Customer Service:</b>
                <p className='text-gray-400'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>        
            </div>
        </div>

        <NewsletterBox/>

    </div>
  )
}

export default About