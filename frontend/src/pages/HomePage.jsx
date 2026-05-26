import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesCarousel from '../components/ServicesCarousel';
import ContactFooter from '../components/ContactFooter';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <ServicesCarousel />
      <ContactFooter />
    </main>
  );
};

export default HomePage;
