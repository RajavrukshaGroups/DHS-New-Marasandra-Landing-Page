
import React, { useEffect, useRef } from 'react';

const CustomSVG = ({ children, className = "", id = "" }) => (
  <svg 
    id={id}
    viewBox="0 0 100 100" 
    className={`w-14 h-14 ${className} overflow-visible`} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

const advantages = [
  {
    id: "loc-sh09",
    icon: (
      <CustomSVG className="icon-svg text-gold" id="svg-sh09">
        <circle className="draw-path" cx="50" cy="50" r="40" strokeOpacity="0.2" />
        <path className="draw-path" d="M50 20 L50 80 M20 50 L80 50" strokeOpacity="0.3" />
        <path className="needle" d="M50 15 L42 45 L50 50 L58 45 Z" fill="currentColor" />
        <path className="needle-bottom" d="M50 85 L42 55 L50 50 L58 55 Z" fill="currentColor" strokeOpacity="0.5" />
      </CustomSVG>
    ),
    title: "Close to SH-09",
    desc: "Proximity to a major 4-lane state highway, offering seamless connectivity for residents.",
    ambient: (el) => {
      gsap.to(el.querySelectorAll('.needle, .needle-bottom'), {
        rotation: "+=15", transformOrigin: "50% 50%", duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut"
      });
    },
    hover: (el) => {
      gsap.to(el.querySelectorAll('.needle, .needle-bottom'), { rotation: 360, transformOrigin: "50% 50%", duration: 1, ease: "back.out(2)" });
    }
  },
  {
    id: "loc-rail",
    icon: (
      <CustomSVG className="icon-svg text-gold" id="svg-rail">
        <path className="draw-path" d="M10 85 L90 85 M10 75 L90 75" strokeOpacity="0.2" />
        <rect className="train-body draw-path" x="25" y="35" width="50" height="35" rx="4" />
        <circle className="wheel" cx="35" cy="75" r="4" fill="currentColor" />
        <circle className="wheel" cx="65" cy="75" r="4" fill="currentColor" />
        <path className="draw-path" d="M30 45 L70 45" strokeOpacity="0.5" />
      </CustomSVG>
    ),
    title: "Rajanukunte Station",
    desc: "Just a 20-minute drive to the railway station, ensuring easy public transit across Bangalore.",
    ambient: (el) => {
      gsap.to(el.querySelector('.train-body'), { y: -2, duration: 0.5, repeat: -1, yoyo: true, ease: "sine.inOut" });
    },
    hover: (el) => {
      gsap.to(el, { x: 10, duration: 0.4, repeat: 1, yoyo: true, ease: "power2.inOut" });
    }
  },
  {
    id: "loc-kiadb",
    icon: (
      <CustomSVG className="icon-svg text-gold" id="svg-kiadb">
        <path className="draw-path" d="M15 85 L85 85 L85 45 L65 60 L65 45 L45 60 L45 45 L15 45 Z" />
        <circle className="smoke smoke-1" cx="30" cy="35" r="3" fill="currentColor" />
        <circle className="smoke smoke-2" cx="50" cy="30" r="4" fill="currentColor" />
      </CustomSVG>
    ),
    title: "Doddaballapura KIADB",
    desc: "Strategic position near the massive industrial area and Aerospace Hardware Park.",
    ambient: (el) => {
      gsap.to(el.querySelectorAll('.smoke'), {
        y: -15, opacity: 0, scale: 2, duration: 1.5, stagger: 0.7, repeat: -1, ease: "power1.out"
      });
    },
    hover: (el) => {
      gsap.to(el, { scale: 1.1, duration: 0.3, yoyo: true, repeat: 1 });
    }
  },
  {
    id: "loc-mall",
    icon: (
      <CustomSVG className="icon-svg text-gold" id="svg-mall">
        <path className="draw-path" d="M25 35 L75 35 L85 85 L15 85 Z" />
        <path className="bag-handle draw-path" d="M40 35 Q50 15 60 35" />
        <circle className="logo-pulse" cx="50" cy="60" r="5" fill="currentColor" />
      </CustomSVG>
    ),
    title: "Century Eden Mall",
    desc: "Upcoming shopping complex and market hub promising a vibrant lifestyle.",
    ambient: (el) => {
      gsap.to(el.querySelector('.logo-pulse'), { scale: 1.5, opacity: 0, duration: 2, repeat: -1, ease: "sine.out" });
    },
    hover: (el) => {
      gsap.to(el.querySelector('.bag-handle'), { scaleY: 0.8, transformOrigin: "bottom", duration: 0.3, yoyo: true, repeat: 1 });
    }
  },
  {
    id: "loc-airport",
    icon: (
      <CustomSVG className="icon-svg text-gold" id="svg-airport">
        <path className="plane-path draw-path" d="M20 50 L50 50 L80 50" strokeOpacity="0.2" />
        <path className="plane" d="M40 50 L55 45 L70 50 L55 55 Z" fill="currentColor" />
        <path className="trail" d="M20 50 L40 50" strokeOpacity="0.5" strokeDasharray="4 4" />
      </CustomSVG>
    ),
    title: "Bangalore Airport",
    desc: "Just a 30-minute drive to Kempegowda International Airport.",
    ambient: (el) => {
      gsap.to(el.querySelector('.plane'), { x: 5, duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut" });
    },
    hover: (el) => {
      const plane = el.querySelector('.plane');
      const tl = gsap.timeline();
      tl.to(plane, { x: 40, opacity: 0, duration: 0.5 })
        .set(plane, { x: -40 })
        .to(plane, { x: 0, opacity: 1, duration: 0.5 });
    }
  },
  {
    id: "loc-sez",
    icon: (
      <CustomSVG className="icon-svg text-gold" id="svg-sez">
        <path className="draw-path" d="M50 15 L85 35 L85 65 L50 85 L15 65 L15 35 Z" />
        <path className="draw-path" d="M50 15 L50 85 M15 35 L85 65 M15 65 L85 35" strokeOpacity="0.2" />
        <circle className="core-node" cx="50" cy="50" r="8" fill="currentColor" />
      </CustomSVG>
    ),
    title: "ITIR/SEZ Hub",
    desc: "Near 10,000 acres of ITIR and Aerospace Parks offering immense growth potential.",
    ambient: (el) => {
      gsap.to(el.querySelector('.core-node'), { filter: "brightness(1.5)", scale: 1.2, duration: 1, repeat: -1, yoyo: true });
    },
    hover: (el) => {
      gsap.to(el, { rotation: 90, duration: 0.6, ease: "expo.out" });
    }
  },
  {
    id: "loc-school",
    icon: (
      <CustomSVG className="icon-svg text-gold" id="svg-school">
        <path className="draw-path" d="M15 85 L85 85 M25 85 L25 45 L50 25 L75 45 L75 85" />
        <rect className="door draw-path" x="42" y="65" width="16" height="20" />
        <path className="window draw-path" d="M35 55 L45 55 M55 55 L65 55" strokeOpacity="0.5" />
      </CustomSVG>
    ),
    title: "Jawahar Navodaya",
    desc: "Surrounded by prestigious educational institutions and learning centres.",
    ambient: (el) => {
      gsap.to(el.querySelector('.door'), { fill: "rgba(184, 134, 11, 0.2)", duration: 2, repeat: -1, yoyo: true });
    },
    hover: (el) => {
      gsap.to(el, { y: -8, duration: 0.4, ease: "back.out(2)", yoyo: true, repeat: 1 });
    }
  },
  {
    id: "loc-hosp",
    icon: (
      <CustomSVG className="icon-svg text-gold" id="svg-hosp">
        <path className="heart-shape draw-path" d="M50 35 C50 35 30 20 20 45 C10 70 50 85 50 85 C50 85 90 70 80 45 C70 20 50 35 50 35 Z" strokeOpacity="0.3" />
        <path className="ekg-line" d="M20 55 L35 55 L42 40 L50 70 L58 55 L80 55" />
      </CustomSVG>
    ),
    title: "Manipal Hospital",
    desc: "Quick access to world-class healthcare facilities for peace of mind.",
    ambient: (el) => {
      const ekg = el.querySelector('.ekg-line');
      gsap.fromTo(ekg, { strokeDasharray: 100, strokeDashoffset: 100 }, {
        strokeDashoffset: -100, duration: 2, repeat: -1, ease: "none"
      });
    },
    hover: (el) => {
      gsap.to(el.querySelector('.heart-shape'), { scale: 1.1, transformOrigin: "center", duration: 0.2, repeat: 3, yoyo: true });
    }
  }
];

const LocationSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      const cards = containerRef.current?.querySelectorAll('.advantage-card');
      
      cards?.forEach((card, idx) => {
        const svg = card.querySelector('.icon-svg');
        const paths = svg.querySelectorAll('.draw-path');

        gsap.set(paths, { strokeDasharray: 300, strokeDashoffset: 300 });

        ScrollTrigger.create({
          trigger: card,
          start: "top 85%",
          onEnter: () => {
            gsap.to(card, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" });
            gsap.to(paths, { strokeDashoffset: 0, duration: 1.5, stagger: 0.1, ease: "power1.inOut" });
            
            setTimeout(() => {
              if (advantages[idx].ambient) advantages[idx].ambient(svg);
            }, 1000);
          }
        });
      });
    }
  }, []);

  const handleMouseEnter = (idx, e) => {
    const svg = e.currentTarget.querySelector('.icon-svg');
    if (svg && advantages[idx].hover) {
      advantages[idx].hover(svg);
    }
  };

  return (
    <section id="location" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 italic font-serif">Location Advantages</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Strategically situated in North Bangalore, this premier location is witnessing an unprecedented uptrend in land value and investor confidence.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((item, idx) => (
            <div 
              key={item.id} 
              onMouseEnter={(e) => handleMouseEnter(idx, e)}
              className="advantage-card opacity-0 translate-y-12 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-2xl transition-all duration-500 group cursor-pointer"
            >
              <div className="mb-6 flex justify-start">
                <div className="icon-wrapper p-3 bg-slate-50 rounded-xl group-hover:bg-gold/5 transition-colors">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
