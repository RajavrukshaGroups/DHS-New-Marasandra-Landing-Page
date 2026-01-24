
import React, { useEffect, useRef } from 'react';
import { ShieldCheck } from 'lucide-react';

const BookingInfo = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof gsap !== 'undefined') {
      gsap.fromTo(containerRef.current?.children || [], 
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.2, 
          ease: "expo.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
          }
        }
      );
    }
  }, []);

  return (
    <section className="bg-white py-12 md:py-16 border-b border-slate-100 relative overflow-hidden">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <p className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-3">Prestigious Address</p>
          <h2 className="text-2xl md:text-4xl font-bold text-navy italic font-serif leading-tight">
            North-Bangalore, <span className="text-gold not-italic">Yelahanka – Doddaballapur Road</span>
          </h2>
        </div>
        <div className="w-16 h-px bg-slate-200 mx-auto mb-8"></div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <div className="flex items-center gap-3 bg-red/5 border border-red/10 px-6 py-3 rounded-xl">
            <div className="w-2 h-2 bg-red rounded-full animate-pulse shadow-[0_0_8px_rgba(237,28,36,0.6)]"></div>
            <p className="text-navy font-bold text-xs md:text-sm uppercase tracking-wider">
              Allotment: <span className="text-red">"First Come First Serve" Basis</span>
            </p>
          </div>
          <div className="flex items-center gap-3 bg-blue-50 border border-blue-100 px-6 py-3 rounded-xl">
            <ShieldCheck size={18} className="text-[#0070C0]" />
            <p className="text-navy font-bold text-xs md:text-sm uppercase tracking-widest">
              Booking Open for <span className="text-[#0070C0]">General Public</span>
            </p>
          </div>
        </div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-navy/5 rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </section>
  );
};

export default BookingInfo;
