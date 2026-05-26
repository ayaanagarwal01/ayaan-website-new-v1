import React from 'react';
import PageHeader from '../components/PageHeader';
import MusicCarousel from '../components/MusicCarousel';
import ContactFooter from '../components/ContactFooter';

const MusicPage = () => (
  <main className="bg-[#0a0a1a] min-h-screen relative z-10">
    <PageHeader
      eyebrow="Live Performances"
      title="Music"
      subtitle="Independent vocal performances and band sets — from Hamilton ballads to classic rock."
      accent="pink"
    />
    <MusicCarousel />
    <ContactFooter />
  </main>
);

export default MusicPage;
