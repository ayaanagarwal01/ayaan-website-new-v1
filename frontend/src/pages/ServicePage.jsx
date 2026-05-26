import React from 'react';
import PageHeader from '../components/PageHeader';
import ServiceSection from '../components/ServiceSection';
import ContactFooter from '../components/ContactFooter';

const ServicePage = () => (
  <main className="bg-[#0a0a1a] min-h-screen relative z-10">
    <PageHeader
      eyebrow="Community"
      title="Service"
      subtitle="Programmes and initiatives where I've worked to give back — YLAC, Service Yatra and ApniShala."
      accent="emerald"
    />
    <ServiceSection />
    <ContactFooter />
  </main>
);

export default ServicePage;
