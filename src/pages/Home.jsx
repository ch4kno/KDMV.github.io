import React from 'react';
import Hero from '../components/hero';
import LastCollection from '../components/lastcollection';
import Bestseller from '../components/Bestseller';
import Ourpolicy from '../components/Ourpolicy';
import NewsletterBox from '../components/NewsletterBox';

const Home = () => {
  return (
    <div>
      <Hero />
      <LastCollection />
      <Bestseller/>
      <Ourpolicy/>
      <NewsletterBox/>
    </div>
  );
};

export default Home;
