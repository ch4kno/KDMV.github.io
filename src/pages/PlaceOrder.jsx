import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Title from '../components/Title';
import CartTotal from '../components/cartTotal';
import { assets } from '../assets/frontend_assets/assets';

const PlaceOrder = () => {
  const [method, setMethod] = useState('');
  const navigate = useNavigate(); // Get navigate function from React Router

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* Delivery Information Section */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[400px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name' />
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email address' />
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' />
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zip Code' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone' />
      </div>

      {/* Right Side: Cart Total and Payment Method */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>
        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          {/* Payment Method Selection */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={() => setMethod('KHQR')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-[14px] h-[14px] border rounded-full ${method === 'KHQR' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.KHQR_logo} alt="" style={{ width: '86px', height: '38px', objectFit: 'cover' }} />
            </div>
            <div onClick={() => setMethod('mastercard')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-[14px] h-[14px] border rounded-full ${method === 'mastercard' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.mastercard_logo} alt="" style={{ width: '86px', height: '38px', objectFit: 'cover' }} />
            </div>
            <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-[14px] h-[14px] border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.cash_delivery} alt="" style={{ width: '86px', height: '38px', objectFit: 'cover' }} />
            </div>
          </div>

          <div className='w-full text-end mt-8'>
            <button onClick={() => navigate('/Order')} className='bg-black text-white px-16 py-3 text-sm'>
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
