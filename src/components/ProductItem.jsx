import React, { useContext } from 'react';
import { Shopcontext } from '../context/Shopcontext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {  // Destructure props here
  const { currency } = useContext(Shopcontext);

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className='overflow-hidden'>
        <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt={name} />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  );
};

export default ProductItem;
