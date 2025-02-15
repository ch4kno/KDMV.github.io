import React, { useContext, useEffect, useState } from 'react';
import { Shopcontext } from '../context/Shopcontext';
import Title from './Title';
import ProductItem from './ProductItem';

const LastCollection = () => {
  const { products } = useContext(Shopcontext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      setLatestProducts(products.slice(0, 10));
    }
  }, [products]);


  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3x1'>
        <Title text1={'LATEST'} text2={'COLLECTION'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          From casual to chic, our pants are tailored for your unique style—find your perfect pair today!
        </p>
      </div>
      {/* Rendering Products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {latestProducts.map((item, index) => (
          <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default LastCollection;
