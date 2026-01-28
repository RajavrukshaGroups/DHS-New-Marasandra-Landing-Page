import React, { useEffect, useRef } from 'react';

/* GSAP assumed to be loaded globally */

const AmenitySVG = ({ children, className = "" }) => (
  <svg
    viewBox="0 0 100 100"
    className={`w-12 h-12 ${className} overflow-visible`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

const amenities = [
  {
    name: "Water Infrastructure",
    desc: "Seamless connection",
    icon: (
      <AmenitySVG className="amenity-icon text-gold">
        <path
          className="draw-path"
          d="M50 15 C50 15 25 40 25 65 C25 80 35 90 50 90 C65 90 75 80 75 65 C75 40 50 15 50 15 Z"
        />
        <path
          className="liquid-wave"
          d="M30 65 Q40 55 50 65 T70 65"
          strokeOpacity="0.5"
        />
      </AmenitySVG>
    ),
    animate: (el) => {
      gsap.to(el.querySelector(".liquid-wave"), {
        x: 10,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "sine.inOut",
      });
    },
  },
  {
    name: "Electrical Networks",
    desc: "Smart & futuristic",
    icon: (
      <AmenitySVG className="amenity-icon text-gold">
        <path
          className="draw-path bolt"
          d="M60 10 L35 50 L55 50 L40 90 L65 50 L45 50 Z"
        />
      </AmenitySVG>
    ),
    animate: (el) => {
      gsap.to(el.querySelector(".bolt"), {
        filter: "drop-shadow(0 0 5px #B8860B)",
        duration: 0.8,
        repeat: -1,
        yoyo: true,
      });
    },
  },
  {
    name: "Sewage Solutions",
    desc: "Efficient & sustainable",
    icon: (
      <AmenitySVG className="amenity-icon text-gold">
        <circle
          className="draw-path"
          cx="50"
          cy="50"
          r="35"
          strokeOpacity="0.3"
        />
        <path
          className="draw-path inner-ring"
          d="M30 50 L70 50 M50 30 L50 70"
        />
      </AmenitySVG>
    ),
    animate: (el) => {
      gsap.to(el.querySelector(".inner-ring"), {
        rotation: 90,
        transformOrigin: "center",
        duration: 4,
        repeat: -1,
        ease: "none",
      });
    },
  },
  {
    name: "Clubhouse Retreat",
    desc: "Social heart of community",
    icon: (
      <AmenitySVG className="amenity-icon text-gold">
        <path
          className="draw-path"
          d="M15 50 L50 15 L85 50 L85 85 L15 85 Z"
        />
        <circle
          className="social-pulse"
          cx="50"
          cy="55"
          r="8"
          fill="currentColor"
        />
      </AmenitySVG>
    ),
    animate: (el) => {
      gsap.to(el.querySelector(".social-pulse"), {
        scale: 1.3,
        opacity: 0.4,
        duration: 1,
        repeat: -1,
        yoyo: true,
      });
    },
  },
  {
    name: "Tree Plantation",
    desc: "Green environment focus",
    icon: (
      <AmenitySVG className="amenity-icon text-gold">
        <path className="draw-path" d="M50 85 L50 55" />
        <path
          className="leaf draw-path"
          d="M50 55 C50 55 25 45 25 25 Q40 25 50 55"
        />
        <path
          className="leaf draw-path"
          d="M50 55 C50 55 75 45 75 25 Q60 25 50 55"
        />
      </AmenitySVG>
    ),
    animate: (el) => {
      gsap.to(el.querySelectorAll(".leaf"), {
        rotation: 5,
        transformOrigin: "bottom",
        stagger: 0.2,
        duration: 2,
        repeat: -1,
        yoyo: true,
      });
    },
  },
  {
    name: "Street Lighting",
    desc: "Enhanced safety & style",
    icon: (
      <AmenitySVG className="amenity-icon text-gold">
        <path className="draw-path" d="M25 90 L25 15 L65 15" />
        <path
          className="lamp-head"
          d="M55 15 L75 30 L55 45 Z"
          fill="currentColor"
        />
        <path
          className="light-rays"
          d="M65 40 L65 70 M55 35 L40 50 M75 35 L90 50"
          strokeOpacity="0.5"
          strokeDasharray="4 4"
        />
      </AmenitySVG>
    ),
    animate: (el) => {
      gsap.to(el.querySelector(".light-rays"), {
        opacity: 0.2,
        duration: 1,
        repeat: -1,
        yoyo: true,
      });
    },
  },
  {
    name: "Blacktop Roads",
    desc: "Wide & smooth transit",
    icon: (
      <AmenitySVG className="amenity-icon text-gold">
        <path className="draw-path" d="M15 90 L40 10 M60 10 L85 90" />
        <path
          className="road-line"
          d="M50 20 L50 35 M50 50 L50 65 M50 80 L50 95"
          strokeDasharray="5 5"
        />
      </AmenitySVG>
    ),
    animate: (el) => {
      gsap.to(el.querySelector(".road-line"), {
        strokeDashoffset: -20,
        duration: 1,
        repeat: -1,
        ease: "none",
      });
    },
  },
  {
    name: "Multiple Parks",
    desc: "Harmony with nature",
    icon: (
      <AmenitySVG className="amenity-icon text-gold">
        <circle
          className="draw-path"
          cx="50"
          cy="35"
          r="20"
          strokeOpacity="0.4"
        />
        <circle
          className="draw-path"
          cx="35"
          cy="65"
          r="20"
          strokeOpacity="0.4"
        />
        <circle
          className="draw-path"
          cx="65"
          cy="65"
          r="20"
          strokeOpacity="0.4"
        />
      </AmenitySVG>
    ),
    animate: (el) => {
      gsap.to(el.querySelectorAll("circle"), {
        scale: 1.05,
        transformOrigin: "center",
        duration: 3,
        stagger: 0.5,
        repeat: -1,
        yoyo: true,
      });
    },
  },
  {
    name: "CCTV Security",
    desc: "Advanced 24/7 surveillance",
    icon: (
      <AmenitySVG className="amenity-icon text-gold">
        <rect
          className="cam-body draw-path"
          x="15"
          y="30"
          width="50"
          height="30"
          rx="2"
        />
        <circle className="lens" cx="40" cy="45" r="8" fill="currentColor" />
        <path className="cam-mount draw-path" d="M65 45 L85 30 L85 60 Z" />
      </AmenitySVG>
    ),
    animate: (el) => {
      gsap.to(el.querySelector(".lens"), {
        filter: "brightness(2)",
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        repeatDelay: 2,
      });
    },
  },
  {
  name: "Children’s Play Area",
  desc: "Safe & joyful spaces",
  icon: (
    <AmenitySVG className="amenity-icon text-gold">
      {/* Swing Frame */}
      <path
        className="draw-path"
        d="M20 85 L35 20 L50 85 M50 85 L65 20 L80 85"
      />
      {/* Swing Seat */}
      <rect
        className="swing-seat"
        x="42"
        y="55"
        width="16"
        height="6"
        rx="2"
        fill="currentColor"
      />
      {/* Swing Ropes */}
      <path
        className="draw-path"
        d="M45 20 L45 55 M55 20 L55 55"
      />
    </AmenitySVG>
  ),
  animate: (el) => {
    gsap.to(el.querySelector(".swing-seat"), {
      rotation: 8,
      transformOrigin: "top center",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  },
},

];

const AmenitiesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      const cards = containerRef.current?.querySelectorAll(".amenity-card");

      cards?.forEach((card, idx) => {
        const svg = card.querySelector(".amenity-icon");
        const paths = svg.querySelectorAll(".draw-path");

        gsap.set(paths, {
          strokeDasharray: 300,
          strokeDashoffset: 300,
        });

        ScrollTrigger.create({
          trigger: card,
          start: "top 85%",
          onEnter: () => {
            gsap.to(paths, {
              strokeDashoffset: 0,
              duration: 2,
              ease: "power2.inOut",
              stagger: 0.2,
            });

            amenities[idx].animate &&
              setTimeout(() => amenities[idx].animate(svg), 1000);
          },
        });
      });
    }
  }, []);

  return (
    <section
      id="amenities"
      className="py-24 bg-navy text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <pattern
            id="grid"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="white"
              strokeWidth="0.1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1 rounded-full bg-gold/20 text-gold text-xs font-bold uppercase tracking-widest mb-6">
              World Class Living
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 italic font-serif">
              Outstanding Amenities
            </h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed">
              Experience an elevated lifestyle where modern infrastructure meets
              natural serenity. Every detail is crafted for your comfort and
              security.
            </p>
          </div>

          <div className="hidden lg:flex flex-col items-end gap-4">
            <div className="flex -space-x-3">
              {[121, 122, 123, 124].map((id) => (
                <img
                  key={id}
                  src={`https://picsum.photos/id/${id}/80/80`}
                  alt="Resident"
                  className="w-14 h-14 rounded-full border-4 border-navy object-cover shadow-xl"
                />
              ))}
              <div className="w-14 h-14 rounded-full bg-gold border-4 border-navy flex items-center justify-center font-bold text-navy shadow-xl">
                500+
              </div>
            </div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold">
              Thriving Community
            </p>
          </div>
        </div>

        {/* Amenities Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {amenities.map((item, idx) => (
            <div
              key={idx}
              className="amenity-card bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:bg-gold hover:border-gold transition-all duration-500 text-center group cursor-pointer shadow-lg hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/5 rounded-2xl mb-6 text-gold group-hover:text-navy group-hover:bg-white/20 transition-all duration-500">
                {item.icon}
              </div>
              <h4 className="font-bold text-xl mb-2 group-hover:text-navy transition-colors">
                {item.name}
              </h4>
              <p className="text-xs text-slate-400 group-hover:text-navy/70 transition-colors uppercase tracking-widest">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
