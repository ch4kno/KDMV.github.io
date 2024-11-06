import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
          <div>
               <img src={assets.logo} className='mb-5 w-32' alt="" />
               <p className='w-full md:w-2/3  text-gray-600'>
                 Welcome to KDMV  bringing you the best in style and comfort. Whether you're looking for something casual or bold, we've got you covered!
                </p>
            </div>
            <div>
              <p className='text-x1 dont-medium mb-5'>COMPANY</p>
              <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
              </ul>
            </div>
            <div>
              <p className='text-x1 font-medium mb-5'>GET IN TOUCH</p>
              <ul className='fle flex-col gap-1 text-gray-600'>
                <li>+855-978-763-425</li>
                <li>KDMVstoreNO@gmail.com</li>
              </ul>
            </div>
        </div>
        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2025@ Van2oDEV.com - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer