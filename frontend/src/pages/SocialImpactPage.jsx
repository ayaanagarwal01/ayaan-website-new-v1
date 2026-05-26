import React from 'react';
import PageHeader from '../components/PageHeader';
import SocialAwarenessSection from '../components/SocialAwarenessSection';
import ContactFooter from '../components/ContactFooter';

const SocialImpactPage = () => (
  <main className="bg-[#0a0a1a] min-h-screen relative z-10">
    <PageHeader
      eyebrow="Coming Soon"
      title="Social Impact"
      subtitle="Storytelling, animation and creative media to raise awareness on causes I care about."
      accent="violet"
    />
    <SocialAwarenessSection />
    <ContactFooter />
  </main>
);

export default SocialImpactPage;
