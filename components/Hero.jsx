
import React, { useEffect, useRef } from 'react';
import heroBanner from '../assets/heroBanner.jpg';

const Hero = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    if (typeof gsap !== 'undefined') {
      gsap.set(imgRef.current, {
        opacity: 0,
        filter: 'brightness(0.7)',
      });

      gsap.set(titleRef.current, {
        opacity: 0,
        y: 20,
      });

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.to(imgRef.current, {
        opacity: 1,
        filter: 'brightness(1)',
        duration: 1.2,
      }).to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        '-=0.6'
      );

      if (typeof ScrollTrigger !== 'undefined') {
        gsap.to(imgRef.current, {
          yPercent: 5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full overflow-hidden bg-black"
    >
      <div className="relative w-full h-auto sm:h-[70vh] md:h-[85vh] lg:h-[100vh] xl:min-h-[110vh]">
        <img
          ref={imgRef}
          src={heroBanner}
          alt="Defence Habitat Marasandra Main Entrance"
          className="w-full h-auto sm:h-full block sm:object-cover sm:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-4 sm:bottom-12 md:bottom-16 left-0 w-full px-4 z-20">
          <h1
            ref={titleRef}
            className="
              text-white font-bold text-center
              tracking-[0.1em] sm:tracking-[0.3em]
              text-[11px] sm:text-base md:text-lg lg:text-xl xl:text-2xl
              drop-shadow-[0_2px_10px_rgba(0,0,0,1)]
              uppercase
              max-w-[98%] mx-auto
              font-sans
            "
          >
            DEFENCE HABITAT – MARASANDRA
          </h1>
        </div>
        <div className="absolute bottom-8 left-6 sm:left-10 hidden md:block z-20">
          <div className="flex items-center gap-4">
            <div className="w-[1px] h-12 sm:h-20 bg-gradient-to-b from-white to-transparent relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gold animate-pulse" />
            </div>
            <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.5em] text-white/40 font-black rotate-90 origin-left">
              Discovery
            </span>
          </div>
        </div>
      </div>
      <div className="h-[2px] w-full bg-gradient-to-r from-navy via-gold to-navy"></div>
    </section>
  );
};

export default Hero;
