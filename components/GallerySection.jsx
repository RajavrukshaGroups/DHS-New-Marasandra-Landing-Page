
import React from 'react';

const GallerySection = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-8 italic font-serif">Aerial Scenery</h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Experience the intricate layout and natural beauty from a captivating perspective. Our aerial captures showcase the landscapes, boundaries, and the immense potential of these premium residential plots.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center text-gold font-bold">01</div>
                <p className="font-semibold text-navy">Planned layout with vast green buffers</p>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center text-gold font-bold">02</div>
                <p className="font-semibold text-navy">Blacktop roads providing internal access</p>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center text-gold font-bold">03</div>
                <p className="font-semibold text-navy">Proximity to the major state highway</p>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
            <img 
              src="https://defence-habitat-marasandra.defencehousingsociety.com/assets/img/gallery/Layout1.jpg" 
              alt="Aerial View" 
              className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors"></div>
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-2xl">
              <p className="text-navy font-bold uppercase tracking-widest text-sm mb-1">Perspective View</p>
              <p className="text-slate-500 text-xs">A bird's eye view of the flourishing Marasandra site.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
