import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import Title from './Title';
import ProductItem from './ProductItem';

const Bestseller = () => {

    const {products} = useContext(Shopcontext);
    const [bestseller,SetBestseller] = useState([]);

    useEffect (()=>{
        const bestPoduct= products.filter((item)=>(item.bestseller));
        SetBestseller(bestPoduct.slice(0,5))
    },[])

  return (
    <div className='my-10'>
        <div className='text-center text-3x1 py-8'>
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md-text-base  tex-gray-600'>
            From Casual to Chic: Our Best-Selling Pants, Tailored for Your Unique Style
            </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                bestseller.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))
            }
        </div>
    </div>
  )
}

export default Bestseller