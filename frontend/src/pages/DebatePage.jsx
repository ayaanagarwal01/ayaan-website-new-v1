import React from 'react';
import PageHeader from '../components/PageHeader';
import DebateSection from '../components/DebateSection';
import ContactFooter from '../components/ContactFooter';

const DebatePage = () => (
  <main className="bg-[#0a0a1a] min-h-screen relative z-10">
    <PageHeader
      eyebrow="Achievements"
      title="Debate"
      subtitle="National and international debate titles, along with the lessons learned along the way."
      accent="amber"
    />
    <DebateSection />
    <ContactFooter />
  </main>
);

export default DebatePage;
