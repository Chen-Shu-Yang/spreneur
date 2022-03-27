import React from 'react';
import HeroSection from '../Components/HeroBanner';
// import Navbar from '../Components/Navbar';
import Purpose from '../Components/PurposeSection';
import Promotion from '../Components/Promotion';
import Testimonial from '../Components/Testimonial';
import Resources from '../Components/Resources';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Purpose />
      <Promotion />
      <Testimonial />
      <Resources />
      <Footer />
    </>

  )
}

export default Home