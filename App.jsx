
import React, { useEffect, useRef } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import BookingInfo from './components/BookingInfo.jsx';
import LocationSection from './components/LocationSection.jsx';
import MapSection from './components/MapSection.jsx';
import AmenitiesSection from './components/AmenitiesSection.jsx';
import PricingTable from './components/PricingTable.jsx';
import GallerySection from './components/GallerySection.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';

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
