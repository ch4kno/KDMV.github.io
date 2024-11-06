import React from 'react';

const Title = ({ text1, text2 }) => {
  return (
    <div className='inline-flex flex-col sm:flex-row gap-2 items-center mb-5'>
      <p className='text-gray-500 text-lg sm:text-xl'>
        {text1} <span className='text-gray-700 font-semibold'>{text2}</span>
      </p>
      <div className='w-10 sm:w-16 h-[4px] bg-gray-700'></div>
    </div>
  );
};

export default Title;
