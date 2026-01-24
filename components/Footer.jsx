
// import React from 'react';
// import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Clock } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="bg-navy text-white pt-20 pb-10 border-t border-white/5">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
//           <div className="space-y-8">
//             <div className="flex items-center gap-4">
//               <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-1">
//                 <img src="https://defence-habitat-marasandra.defencehousingsociety.com/assets/img/DHS%20Logo.png" alt="DHS Logo" className="w-full h-full object-contain" />
//               </div>
//               <div>
//                 <h3 className="font-bold uppercase tracking-tight text-xl leading-none">Defence Habitat</h3>
//                 <p className="text-[10px] text-gold font-semibold uppercase tracking-[0.2em] mt-1">Co-Op Society Ltd.</p>
//               </div>
//             </div>
//             <p className="text-slate-400 text-sm leading-relaxed font-light">
//               Explore the flourishing scene in Bangalore's exclusive locale, with rising land values and promising career prospects.
//             </p>
//             <div className="flex gap-4">
//               {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
//                 <a key={i} href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-gold hover:text-white transition-all transform hover:-translate-y-1">
//                   <Icon size={18} />
//                 </a>
//               ))}
//             </div>
//           </div>
//           <div>
//             <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-gold italic font-serif">Reach Out</h4>
//             <ul className="space-y-6 text-sm">
//               <li className="flex gap-4">
//                 <MapPin className="text-gold shrink-0" size={20} />
//                 <span className="text-slate-400 font-light">Behind Swathi Garden Hotel, E Block, Sahakarnagar, Bangalore - 560092</span>
//               </li>
//               <li className="flex gap-4">
//                 <Phone className="text-gold shrink-0" size={20} />
//                 <a href="tel:+918884735735" className="text-slate-200 hover:text-gold transition-colors font-bold">+91-8884 735 735</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Clock,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-1">
                <img
                  src="https://defence-habitat-marasandra.defencehousingsociety.com/assets/img/DHS%20Logo.png"
                  alt="DHS Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold uppercase tracking-tight text-xl leading-none">
                  Defence Habitat
                </h3>
                <p className="text-[10px] text-gold font-semibold uppercase tracking-[0.2em] mt-1">
                  Co-Op Society Ltd.
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed font-light">
              Explore the flourishing scene in Bangalore&apos;s exclusive locale,
              with rising land values and promising career prospects.
            </p>

            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-gold hover:text-white transition-all transform hover:-translate-y-1"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-gold italic font-serif">
              Quick Navigation
            </h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              {[
                "Location Advantages",
                "Project Amenities",
                "Price Structure",
                "Privacy Policy",
                "Sitemap",
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={`#${link.toLowerCase().split(" ")[0]}`}
                    className="hover:text-gold transition-colors flex items-center gap-2"
                  >
                    <div className="w-1 h-1 bg-gold/50 rounded-full"></div>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Out */}
          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-gold italic font-serif">
              Reach Out
            </h4>
            <ul className="space-y-6 text-sm">
              <li className="flex gap-4">
                <MapPin className="text-gold shrink-0" size={20} />
                <span className="text-slate-400 font-light">
                  Behind Swathi Garden Hotel, E Block, Sahakarnagar, Bangalore -
                  560092
                </span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-gold shrink-0" size={20} />
                <a
                  href="tel:+918884735735"
                  className="text-slate-200 hover:text-gold transition-colors font-bold"
                >
                  +91-8884 735 735
                </a>
              </li>
              <li className="flex gap-4">
                <Mail className="text-gold shrink-0" size={20} />
                <a
                  href="mailto:info@defencehousingsociety.com"
                  className="text-slate-400 hover:text-gold transition-colors"
                >
                  info@defencehousingsociety.com
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-lg font-bold mb-8 uppercase tracking-widest text-gold italic font-serif">
              Working Hours
            </h4>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-gold" size={18} />
                <span className="font-bold">Operational Timing</span>
              </div>
              <p className="text-sm text-slate-300 font-light mb-2">
                Wednesday to Monday
              </p>
              <p className="text-sm text-white font-bold">
                9:30 AM - 6:30 PM
              </p>
              <div className="w-full h-px bg-white/10 my-4"></div>
              <p className="text-[10px] text-gold uppercase tracking-[0.2em] font-black">
                Weekly Off: Tuesday
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">
          <p>© 2021 DEFENCE HABITAT. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">
              Legal Disclaimer
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
