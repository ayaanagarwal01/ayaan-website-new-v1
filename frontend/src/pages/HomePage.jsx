import React from 'react';
import HeroSection from '../components/HeroSection';
import AwardSection from '../components/AwardSection';
import ServicesCarousel from '../components/ServicesCarousel';
import ContactFooter from '../components/ContactFooter';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <AwardSection />
      <ServicesCarousel />
      <ContactFooter />
    </main>
  );
};

export default HomePage;
