// In cartTotal.jsx
import React, { useContext } from 'react';
import Title from './Title';
import { Shopcontext } from '../context/Shopcontext';

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(Shopcontext);

  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={'CART'} text2={'TOTALS'} />
      </div>
      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>{currency}{getCartAmount().toFixed(2)}</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <p>Shipping Fee</p>
          <p>{currency}{delivery_fee.toFixed(2)}</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <b>Total</b>
          <b>{currency}{getCartAmount() === 0 ? 0 : (getCartAmount() + delivery_fee).toFixed(2)}</b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
