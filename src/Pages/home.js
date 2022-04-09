import React from 'react';
import HeroSection from '../Components/HeroBanner';
import Purpose from '../Components/PurposeSection';
import Promotion from '../Components/Promotion';
import Testimonial from '../Components/Testimonial';
import Resources from '../Components/Resources';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Purpose />
      <Promotion />
      <Testimonial />
      <Resources />
    </>

  )
}

export default Home