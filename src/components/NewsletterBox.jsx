import React from 'react'

const NewsletterBox = () => {
  return (
    <div className='text-center'>
        <p className='text-2x1 font-medium text-gray-800'> Subsribe Now & get 23% off</p>
        <p className=' text-gray-400 mt-3'>
            Join our membership store today and unlock exclusive deals, special discounts, and personalized rewards that will enhance your shopping experience!
        </p>
        <from className='w-full sm:w-1/2 flex  items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Plase in ter your Email' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSRIBE</button>
        </from>
    </div>
  )
}

export default NewsletterBox