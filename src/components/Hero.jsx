import React, { useEffect, useState } from 'react';
import { assets } from '../assets/frontend_assets/assets';

const Hero = () => {
  // Array of images
  const images = [
    assets.hero_img,   
    assets.hero_img2,
    assets.hero_img3,
    assets.hero_img4 
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  // Function to change the image
  const changeImage = () => {
    setFade(true); // Trigger fade out
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(false); // Trigger fade in
    }, 560); // Match this timeout with the CSS transition duration
  };

  // Set up interval to change images every 5 seconds
  useEffect(() => {
    const interval = setInterval(changeImage, 4500); // Change image every 5000ms (5 seconds)

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10'>
        <div className='text-[#414141]'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-1 bg-[#414141]'></p>
            <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
          </div>
          <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
          <div className='flex items-center gap-2'>
            <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
            <p className='w-8 md:w-11 h-1 bg-[#414141]'></p>
          </div>
        </div>
      </div>
      {/* Hero Right Side */}
      <div className='relative w-full sm:w-1/3 overflow-hidden' style={{ height: '350px' }}> 
        {images.map((image, index) => (
          <img
            key={index}
            className={`absolute w-full transition-opacity duration-500 ease-in-out ${fade && index === currentImageIndex ? 'opacity-0' : 'opacity-100'} ${index === currentImageIndex ? '' : 'hidden'}`} // Control visibility
            src={image}
            alt="Latest arrivals display"
            style={{ height: '100%', objectFit: 'cover' }} // Cover the container without stretching
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
