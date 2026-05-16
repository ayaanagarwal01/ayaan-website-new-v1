import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesCarousel from '../components/ServicesCarousel';
import ResearchSection from '../components/ResearchSection';
import TheatreSection from '../components/TheatreSection';
import MusicCarousel from '../components/MusicCarousel';
import ServiceSection from '../components/ServiceSection';
import DebateSection from '../components/DebateSection';
import CommunityQuickLinks from '../components/CommunityQuickLinks';
import SocialAwarenessSection from '../components/SocialAwarenessSection';
import ContactFooter from '../components/ContactFooter';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <ServicesCarousel />
      <ResearchSection />
      <TheatreSection />
      <MusicCarousel />
      <ServiceSection />
      <DebateSection />
      <SocialAwarenessSection />
      <CommunityQuickLinks />
      <ContactFooter />
    </main>
  );
};

export default HomePage;
