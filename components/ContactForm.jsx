
import React, { useState, useEffect, useRef } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const successRef = useRef(null);

  useEffect(() => {
    if (submitted && successRef.current && typeof gsap !== 'undefined') {
      const check = successRef.current.querySelector('.success-icon');
      gsap.fromTo(check, 
        { scale: 0, rotation: -45 },
        { scale: 1, rotation: 0, duration: 0.6, ease: "back.out(2)" }
      );
    }
  }, [submitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="md:col-span-2 bg-navy p-12 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-6 font-serif italic">Get in Touch</h2>
                <p className="text-slate-300 font-light mb-8">
                  For any queries, please fill out the form, and our professional team will get in touch with you shortly.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform"><Send size={14} /></div>
                  <span className="text-sm">Personalized Consultation</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform"><CheckCircle2 size={14} /></div>
                  <span className="text-sm">Site Visit Scheduling</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-3 p-12">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-slate-400 mb-2 font-bold">Full Name</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="John Doe" 
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-slate-400 mb-2 font-bold">Phone Number</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+91 00000 00000" 
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-slate-400 mb-2 font-bold">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="john@example.com" 
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" 
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-navy text-white py-4 rounded-lg font-bold hover:bg-slate-800 transition-all shadow-lg uppercase tracking-widest text-sm flex items-center justify-center gap-2 group"
                  >
                    <span>Send Message</span>
                    <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              ) : (
                <div ref={successRef} className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center success-icon">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-navy">Message Received!</h3>
                  <p className="text-slate-500">Our representative will call you back within 24 hours.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
