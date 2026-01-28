import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const pricingData = [
  { dim: "30 X 40", rate: "1699/-", total: "20,38,800", down: "6,11,640", i1: "6,11,640", i2: "4,07,760", i3: "4,07,760" },
  { dim: "30 X 50", rate: "1699/-", total: "25,48,500", down: "7,64,550", i1: "7,64,550", i2: "5,09,700", i3: "5,09,700" },
  { dim: "40 X 60", rate: "1699/-", total: "40,77,600", down: "12,23,280", i1: "12,23,280", i2: "8,15,520", i3: "8,15,520" },
];

const PricingTable = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    if (tableRef.current) {
      const rows = tableRef.current.querySelectorAll('tbody tr');
      gsap.fromTo(
        rows,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power1.out",
          scrollTrigger: {
            trigger: tableRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section id="price-structure" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl xl:text-5xl md:text-4xl font-bold text-navy mb-4 italic font-serif">
            Price Chart
          </h2>
          <div className="w-16 mb-8 h-1 bg-gold mx-auto"></div>
          <p className="text-slate-800 max-w-4xl mx-auto text-lg md:text-xl font-normal leading-relaxed">
            Explore our comprehensive Price Chart to gain insights into the cost structure and pricing details for our offerings.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-200">
          <table ref={tableRef} className="w-full text-left border-collapse min-w-[1000px]">
            <thead className="bg-[#0F305E] text-white">
              <tr>
                <th className="px-6 py-8 font-bold text-[13px] uppercase tracking-wider border-r border-white/10">DIMENSION</th>
                <th className="px-6 py-8 font-bold text-[13px] uppercase tracking-wider border-r border-white/10 text-center">RATE / SQFT</th>
                <th className="px-6 py-8 font-bold text-[13px] uppercase tracking-wider border-r border-white/10 text-center">TOTAL AMOUNT</th>
                <th className="px-6 py-8 font-bold text-[13px] uppercase tracking-wider border-r border-white/10 text-center">DOWN PAYMENT (30%)</th>
                <th className="px-6 py-8 font-bold text-[13px] uppercase tracking-wider border-r border-white/10 text-center">1ST INSTALLMENT (30%)</th>
                <th className="px-6 py-8 font-bold text-[13px] uppercase tracking-wider border-r border-white/10 text-center">2ND INSTALLMENT (20%)</th>
                <th className="px-6 py-8 font-bold text-[13px] uppercase tracking-wider text-center">FINAL (20%)</th>
              </tr>
            </thead>
            <tbody className="text-[#1A365D]">
              {pricingData.map((row, idx) => (
                <tr
                  key={idx}
                  className={`border-b border-slate-100 transition-colors hover:bg-slate-100/50 ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-[#F9FBFE]'
                  }`}
                >
                  <td className="px-6 py-6 font-bold text-[15px] border-r border-slate-50">{row.dim}</td>
                  <td className="px-6 py-6 text-[15px] border-r border-slate-50 text-center">{row.rate}</td>
                  <td className="px-6 py-6 font-bold text-[15px] border-r border-slate-50 text-center">{row.total}</td>
                  <td className="px-6 py-6 text-[15px] border-r border-slate-50 text-center">{row.down}</td>
                  <td className="px-6 py-6 text-[15px] border-r border-slate-50 text-center">{row.i1}</td>
                  <td className="px-6 py-6 text-[15px] border-r border-slate-50 text-center">{row.i2}</td>
                  <td className="px-6 py-6 text-[15px] text-center">{row.i3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
