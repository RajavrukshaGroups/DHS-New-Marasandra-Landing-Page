
// import React, { useEffect, useRef, useState } from 'react';
// import { MapPin, Navigation, Car, Plane, ArrowRight } from 'lucide-react';

// const MapSection = () => {
//   const sectionRef = useRef(null);
//   const cardContainerRef = useRef(null);
//   const [activeIdx, setActiveIdx] = useState(null);

//   const projectCoords = "13.261624,77.534247";

//   useEffect(() => {
//     if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
//       gsap.fromTo(cardContainerRef.current?.children || [], 
//         { x: 50, opacity: 0 },
//         { 
//           x: 0, 
//           opacity: 1, 
//           duration: 0.8, 
//           stagger: 0.15, 
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 70%",
//             toggleActions: "play none none none"
//           }
//         }
//       );
//     }
//   }, []);

//   const distances = [
//     { 
//       label: "Bangalore Intl. Airport", 
//       dist: "30 Mins Drive", 
//       icon: <Plane className="text-gold" size={20} />,
//       query: "Kempegowda+International+Airport+Bengaluru"
//     },
//     { 
//       label: "Doddaballapura KIADB", 
//       dist: "05 Mins Drive", 
//       icon: <Car className="text-gold" size={20} />,
//       query: "Doddaballapur+KIADB+Industrial+Area"
//     },
//     { 
//       label: "Rajanukunte Railway Stn", 
//       dist: "21 Mins Drive", 
//       icon: <Navigation className="text-gold" size={20} />,
//       query: "Rajanukunte+Railway+Station"
//     }
//   ];

//   const handleLocationClick = (idx, location) => {
//     setActiveIdx(idx);
//     const directionsUrl = `https://www.google.com/maps/dir/${projectCoords}/${location.query}`;
//     window.open(directionsUrl, '_blank');
//   };

//   return (
//     <section ref={sectionRef} id="map" className="py-24 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col lg:flex-row gap-12 items-start">
//           <div className="w-full lg:w-2/3 h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 relative group lg:sticky lg:top-28">
//             <iframe 
//               src={activeIdx !== null 
//                 ? `https://maps.google.com/maps?q=${distances[activeIdx].query}&output=embed` 
//                 : `https://maps.google.com/maps?q=${projectCoords}&z=15&output=embed`
//               } 
//               width="100%" 
//               height="100%" 
//               style={{ border: 0 }} 
//               allowFullScreen={true} 
//               loading="lazy" 
//               className="grayscale-[0.5] contrast-[1.1] brightness-[1.05] group-hover:grayscale-0 transition-all duration-700"
//             ></iframe>
//           </div>
//           <div className="w-full lg:w-1/3 space-y-6">
//             <div className="mb-10">
//               <h2 className="text-3xl font-bold text-navy mb-4 font-serif italic">Strategic Positioning</h2>
//             </div>
//             <div ref={cardContainerRef} className="space-y-4">
//               {distances.map((item, idx) => (
//                 <button 
//                   key={idx} 
//                   onClick={() => handleLocationClick(idx, item)}
//                   className={`w-full text-left flex flex-col p-5 rounded-2xl border transition-all duration-300 group ${
//                     activeIdx === idx 
//                     ? 'bg-white border-gold shadow-xl scale-[1.02] ring-1 ring-gold/20' 
//                     : 'bg-slate-50 border-slate-100 hover:border-gold/30 hover:shadow-lg'
//                   }`}
//                 >
//                   <div className="flex items-center justify-between w-full">
//                     <div className="flex items-center gap-4">
//                       {item.icon}
//                       <span className="text-sm font-bold text-navy">{item.label}</span>
//                     </div>
//                   </div>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MapSection;



import React, { useEffect, useRef, useState } from "react";
import { MapPin, Navigation, Car, Plane, ArrowRight } from "lucide-react";

/* GSAP assumed to be loaded globally */

const MapSection = () => {
  const sectionRef = useRef(null);
  const cardContainerRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(null);

  // Project location link
  const projectLocationUrl = "https://share.google/37f2xJXcAOwiGxagA";

  // Coordinates for map embed & directions
  const projectCoords = "13.261624,77.534247";

  useEffect(() => {
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      gsap.fromTo(
        cardContainerRef.current?.children || [],
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  const distances = [
    {
      label: "Bangalore Intl. Airport",
      dist: "40 Mins Drive",
      icon: <Plane className="text-gold" size={20} />,
      query: "Kempegowda+International+Airport+Bengaluru",
      destination: "Kempegowda International Airport",
    },
    {
      label: "Doddaballapura KIADB",
      dist: "05 Mins Drive",
      icon: <Car className="text-gold" size={20} />,
      query: "Doddaballapur+KIADB+Industrial+Area",
      destination: "Doddaballapur KIADB",
    },
    {
      label: "Rajanukunte Railway Stn",
      dist: "21 Mins Drive",
      icon: <Navigation className="text-gold" size={20} />,
      query: "Rajanukunte+Railway+Station",
      destination: "Rajanukunte Railway Station",
    },
    {
      label: "North Bangalore DC Office",
      dist: "1 Hour Drive",
      icon: <MapPin className="text-gold" size={20} />,
      query: "Bengaluru+District+Commissioner+Office",
      destination: "District Commissioner Office",
    },
  ];

  const handleLocationClick = (idx, location) => {
    setActiveIdx(idx);

    const directionsUrl = `https://www.google.com/maps/dir/${projectCoords}/${location.query}`;
    window.open(directionsUrl, "_blank");
  };

  return (
    <section
      ref={sectionRef}
      id="map"
      className="py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: Map */}
          <div className="w-full lg:w-2/3 h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 relative group lg:sticky lg:top-28">
            <iframe
              src={
                activeIdx !== null
                  ? `https://maps.google.com/maps?q=${distances[activeIdx].query}&output=embed`
                  : `https://maps.google.com/maps?q=${projectCoords}&z=15&output=embed`
              }
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.5] contrast-[1.1] brightness-[1.05] group-hover:grayscale-0 transition-all duration-700"
            ></iframe>

            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg border border-gold/20 shadow-lg flex items-center gap-2 pointer-events-none">
              <div className="w-2 h-2 rounded-full bg-red animate-pulse"></div>
              <span className="text-xs font-bold text-navy uppercase tracking-widest">
                {activeIdx !== null
                  ? `Destination: ${distances[activeIdx].label}`
                  : "Project Location: Marasandra"}
              </span>
            </div>

            {activeIdx !== null && (
              <button
                onClick={() => setActiveIdx(null)}
                className="absolute bottom-6 left-6 bg-navy text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg hover:bg-gold transition-colors"
              >
                Reset View
              </button>
            )}
          </div>

          {/* Right: Distance Cards */}
          <div className="w-full lg:w-1/3 space-y-6">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-navy mb-4 font-serif italic">
                Strategic Positioning
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Click on a landmark below to calculate real-time distance and view
                turn-by-turn directions from{" "}
                <strong>Defence Habitat</strong>.
              </p>
            </div>

            <div ref={cardContainerRef} className="space-y-4">
              {distances.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleLocationClick(idx, item)}
                  className={`w-full text-left flex flex-col p-5 rounded-2xl border transition-all duration-300 group ${
                    activeIdx === idx
                      ? "bg-white border-gold shadow-xl scale-[1.02] ring-1 ring-gold/20"
                      : "bg-slate-50 border-slate-100 hover:border-gold/30 hover:shadow-lg"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-2 rounded-lg shadow-sm transition-transform ${
                          activeIdx === idx
                            ? "bg-gold/10 scale-110"
                            : "bg-white group-hover:scale-110"
                        }`}
                      >
                        {item.icon}
                      </div>
                      <span
                        className={`text-sm font-bold transition-colors ${
                          activeIdx === idx
                            ? "text-gold"
                            : "text-navy"
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                    <span className="text-xs font-black text-gold uppercase tracking-tighter bg-gold/5 px-3 py-1 rounded-full">
                      {item.dist}
                    </span>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${
                      activeIdx === idx
                        ? "h-6 opacity-100 mt-2 text-navy"
                        : "h-0 opacity-0"
                    }`}
                  >
                    <span>Get Exact Directions</span>
                    <ArrowRight size={14} className="text-gold" />
                  </div>
                </button>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-100">
              <a
                href={projectLocationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-navy font-bold text-sm uppercase tracking-widest hover:text-gold transition-colors group"
              >
                Full Site Navigation
                <Navigation
                  size={16}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-gold"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
