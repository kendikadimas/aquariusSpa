'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FeaturesSection from '../components/FeaturesSection';
import BookingFlowSection from '../components/BookingFlowSection';
import GallerySection from '../components/GallerySection';
import TestimonialsAreaSection from '../components/TestimonialsAreaSection';
import FooterContactSection from '../components/FooterContactSection';
import BookingModal from '../components/BookingModal';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenBooking = (service = null) => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedService(null);
  };

  return (
    <main className="min-h-screen bg-[#0a0806] text-[#e6dfd5] relative overflow-x-hidden">
      {/* Navigation Bar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* 8 Main Sections */}
      {/* Section 1: Hero */}
      <HeroSection onOpenBooking={() => handleOpenBooking()} />

      {/* Section 2: About Us */}
      <AboutSection />

      {/* Section 3: Services & Revised Price List (90m 300K, 120m 400K, extended 30m 100K) */}
      <ServicesSection onOpenBooking={handleOpenBooking} />

      {/* Section 4: Key Features & Pillars */}
      <FeaturesSection />

      {/* Section 5: 4-Step Booking Flow */}
      <BookingFlowSection onOpenBooking={() => handleOpenBooking()} />

      {/* Section 6: Relaxation Visual Gallery */}
      <GallerySection />

      {/* Section 7: Service Area, Hours & Verified Testimonials */}
      <TestimonialsAreaSection />

      {/* Section 8: Contact Details & Footer */}
      <FooterContactSection onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Reservation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        defaultService={selectedService}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />
    </main>
  );
}
