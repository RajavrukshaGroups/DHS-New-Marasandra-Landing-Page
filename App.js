
import React, { useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BookingInfo from './components/BookingInfo';
import LocationSection from './components/LocationSection';
import MapSection from './components/MapSection';
import AmenitiesSection from './components/AmenitiesSection';
import PricingTable from './components/PricingTable';
import GallerySection from './components/GallerySection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      const sections = mainRef.current?.querySelectorAll('section:not(#hero)');
      sections?.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "expo.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-gold selection:text-white">
      <Header />
      <main>
        <Hero />
        <BookingInfo />
        <LocationSection />
        <MapSection />
        <AmenitiesSection />
        <PricingTable />
        <GallerySection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
