
// import React from 'react';
// import { Phone } from 'lucide-react';

// const Header = () => {
//   return (
//     <header className="bg-white sticky top-0 z-[100] border-b border-slate-200 py-2 md:py-3 shadow-sm">
//       <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
//           <div className="flex-shrink-0">
//             <img 
//               src="https://defence-habitat-marasandra.defencehousingsociety.com/assets/img/DHS%20Logo.png" 
//               alt="DHS Logo" 
//               className="w-14 h-14 md:w-20 md:h-20 object-contain"
//             />
//           </div>
//           <div className="flex-1 text-center flex flex-col items-center">
//             <h1 className="text-[#1A365D] font-bold text-base md:text-lg lg:text-[18px] uppercase tracking-tight leading-none">
//               DEFENCE HABITAT HOUSING CO-OPERATIVE SOCIETY LTD.
//             </h1>
//             <h2 className="text-[#0070C0] font-semibold text-sm md:text-sm lg:text-[16px] leading-tight mt-0.5">
//               ಡಿಫೆನ್ಸ್ ಹ್ಯಾಬಿಟಾಟ್ ಹೌಸಿಂಗ್ ಕೋ-ಆಪರೇಟಿವ್ ಸೊಸೈಟಿ ಲಿ.
//             </h2>
//             <p className="text-[#ED1C24] font-bold text-xs md:text-xs lg:text-[13px] uppercase tracking-wider mt-0.5">
//               REG. NO.:- HSG-3/64/HHS/53744
//             </p>
//           </div>
//           <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
//             <div className="w-10 h-10 md:w-12 md:h-12 bg-[#E91E63] rounded-full flex items-center justify-center text-white shadow-sm">
//               <Phone size={18} fill="currentColor" />
//             </div>
//             <a 
//               href="tel:+918884735735" 
//               className="text-lg md:text-xl lg:text-[20px] font-bold text-[#1A365D] tracking-tight hover:text-[#E91E63] transition-colors"
//             >
//               +91 8884735735
//             </a>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import sitLogo from "../assets/sitLogo.jpg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Corporate Header - Desktop */}
      <header
        className={`hidden md:flex flex-col w-full z-[100] sticky top-0 transition-all duration-500 ease-in-out border-b border-gray-100 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-1"
            : "bg-white py-3"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center transition-all duration-500">
          {/* Left: Logo */}
          <div className="flex-1 flex justify-start transition-all duration-500 ">
            <img
              src={sitLogo}
              alt="DHS Logo"
              className={`object-contain transition-all duration-500 ${
                isScrolled ? "h-14 w-14" : "h-20 w-20"
              }`}
              onError={(e) =>
                (e.currentTarget.src =
                  "https://via.placeholder.com/150/0f3460/ffffff?text=DHS")
              }
            />
          </div>

          {/* Center: Corporate Text */}
          <div className="flex-3 flex flex-col items-center justify-center px-2 transition-all duration-500 ">
            <h1
              className={`text-navy-800 font-condensed font-bold uppercase tracking-tighter leading-none text-center scale-y-110 transition-all duration-500 ${
                isScrolled ? "text-xl lg:text-2xl" : "text-2xl lg:text-2xl"
              }`}
            >
              DEFENCE HABITAT HOUSING CO-OPERATIVE SOCIETY LTD.
            </h1>
            <h2
              className={`text-navy-800 font-bold mt-1 text-center font-serif leading-tight transition-all duration-500 ${
                isScrolled ? "text-xs lg:text-sm" : "text-sm lg:text-sm"
              }`}
            >
              ಡಿಫೆನ್ಸ್ ಹ್ಯಾಬಿಟಾಟ್ ಹೌಸಿಂಗ್ ಕೋ-ಆಪರೇಟಿವ್ ಸೊಸೈಟಿ ಲಿ.
            </h2>
            <div
              className={`text-center transition-all duration-500 ${
                isScrolled ? "mt-0.5" : "mt-1"
              }`}
            >
              <span
                className={`text-[#dc2626] font-sans font-bold uppercase tracking-tight transition-all duration-500 ${
                  isScrolled ? "text-sm lg:text-base" : "text-base lg:text-base"
                }`}
              >
                Reg. No.:-{" "}
                <span className="text-[#dc2626]">HSG-3/64/HHS/53744</span>
              </span>
            </div>
          </div>

          {/* Right: Phone */}
          <div className="flex-1 flex justify-end items-center gap-3 ">
            <div
              className={`bg-[#e91e63] rounded-full text-white shadow-md transform hover:scale-110 transition-all duration-500 ${
                isScrolled ? "p-1.5" : "p-2 ml-16"
              }`}
            >
              <Phone size={isScrolled ? 18 : 22} fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <a
                href="tel:+918884735735 "
                className={`font-sans font-bold text-navy-900 leading-none hover:text-[#e91e63] transition-all duration-500 whitespace-nowrap ${
                  isScrolled ? "text-lg lg:text-xl" : "text-xl lg:text-2xl"
                }`}
              >
                +91 8884735735
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header - Compact */}
      <div
        className={`md:hidden w-full py-2 px-4 flex justify-between items-center border-b border-slate-200 z-[100] sticky top-0 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="flex items-center gap-2">
          <img
            src={sitLogo}
            alt="DHS Logo"
            className="h-12 w-12 object-contain"
            onError={(e) =>
              (e.currentTarget.src = "https://via.placeholder.com/100?text=DHS")
            }
          />
          <div className="flex flex-col text-center">
            <span className="font-condensed font-bold text-navy-900 text-[8px] leading-tight">
              DEFENCE HABITAT HOUSING CO-OPERATIVE SOCIETY LTD.
            </span>
            <h2 className="text-navy-900 font-bold text-[8px] mt-1 text-center font-serif leading-tight transition-all duration-500">
              ಡಿಫೆನ್ಸ್ ಹ್ಯಾಬಿಟಾಟ್ ಹೌಸಿಂಗ್ ಕೋ-ಆಪರೇಟಿವ್ ಸೊಸೈಟಿ ಲಿ.
            </h2>
            <span className="text-[10px] text-red-600 font-bold leading-tight">
              Reg No: HSG-3/64/HHS/53744
            </span>
          </div>
        </div>
        <a
          // href="tel:+918188992266 "
          href="tel:+918884735735"
          className="text-white bg-[#e91e63] p-2 rounded-full shadow-sm active:scale-95 transition-transform"
        >
          <Phone size={20} fill="currentColor" />
        </a>
      </div>
    </>
  );
};

export default Navbar;
