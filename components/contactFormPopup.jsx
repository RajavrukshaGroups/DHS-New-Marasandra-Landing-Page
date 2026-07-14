// import React, { useState, useEffect, useRef } from 'react';
// import { FiUser, FiMail, FiMessageSquare, FiX } from 'react-icons/fi';
// import { CiPhone } from "react-icons/ci";
// import toast from 'react-hot-toast';
// import { FaPaperPlane } from 'react-icons/fa';
// import ReCAPTCHA from "react-google-recaptcha";

// const ContactFormPopup = () => {
//   const [showPopup, setShowPopup] = useState(false);
//   const [showButton, setShowButton] = useState(false);
//   const [isClosing, setIsClosing] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [captchaValue, setCaptchaValue] = useState(null);
//   const [acceptTerms, setAcceptTerms] = useState(false);

//   const popupRef = useRef(null);
//   const recaptchaRef = useRef(null);
//   const reopenTimerRef = useRef(null);

//   // ✅ HANDLE INPUT CHANGE
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     if (type === "checkbox") {
//       setAcceptTerms(checked);
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   // ✅ AUTO SHOW POPUP
//   useEffect(() => {
//     const timer = setTimeout(() => setShowPopup(true), 3000);

//     return () => {
//       clearTimeout(timer);
//       clearTimeout(reopenTimerRef.current);
//     };
//   }, []);

//   // ✅ CLOSE POPUP
//   const handleClose = () => {
//     setIsClosing(true);

//     setTimeout(() => {
//       setShowPopup(false);
//       setIsClosing(false);
//       setShowButton(true);

//       // reopenTimerRef.current = setTimeout(() => {
//       //   setShowPopup(true);
//       //   setShowButton(false);
//       // }, 10000);
//     }, 500);
//   };

//   // ✅ BUTTON CLICK
//   const handleButtonClick = () => {
//     clearTimeout(reopenTimerRef.current);
//     setShowPopup(true);
//     setShowButton(false);
//   };

//   // ✅ SUBMIT FORM
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!captchaValue) {
//       toast.error("Please verify that you are not a robot");
//       return;
//     }

//     if (!acceptTerms) {
//       toast.error("Please accept Terms & Conditions");
//       return;
//     }

//     setLoading(true);

//     const payload = {
//       name: formData.name.trim(),
//       email: formData.email.trim(),
//       phone: String(formData.phone),
//       message: formData.message.trim(),
//       acceptTerms: acceptTerms,
//       source: "Marasandra landing page",
//       captchaValue: captchaValue,
//     };

//     console.log("POPUP PAYLOAD:", payload);

//     try {
//       const res = await fetch(
//         "https://adminpanel.defencehousingsociety.com/defenceWebsiteRoutes/contactus",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(payload),
//         }
//       );

//       if (res.ok) {
//         toast.success("Message sent successfully!");

//         // RESET
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           message: "",
//         });

//         setAcceptTerms(false);
//         setCaptchaValue(null);
//         recaptchaRef.current?.reset();

//         handleClose();
//       } else {
//         const errorText = await res.text();
//         console.error("Backend Error:", errorText);
//         toast.error(errorText || "Failed to send message.");
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Something went wrong!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed bottom-4 right-4 z-50">

//       {/* BUTTON */}
//       {showButton && !showPopup && !isClosing && (
//         <button
//           onClick={handleButtonClick}
//           className="bg-[#24447c] text-white px-6 py-3 rounded-full shadow-lg hover:bg-sky-700 flex items-center"
//         >
//           <FaPaperPlane className="mr-2" />
//           Contact Us
//         </button>
//       )}

//       {/* POPUP */}
//       {showPopup && (
//         <div className={`bg-white rounded-xl shadow-xl w-80 ${isClosing ? 'animate-slideOut' : 'animate-slideIn'}`}>
          
//           {/* HEADER */}
//           <div className="flex justify-between p-4 bg-gradient-to-r from-[#24447c] to-blue-600">
//             <h2 className="text-white">Contact Us</h2>
//             <FiX className="text-white cursor-pointer" onClick={handleClose} />
//           </div>

//           {/* FORM */}
//           <div className="p-4">
//             <form onSubmit={handleSubmit} className="space-y-4">

//               <div className="relative">
//                 <FiUser className="absolute left-3 top-3 text-gray-400" />
//                 <input
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Name"
//                   className="w-full pl-10 py-2 border rounded"
//                   required
//                 />
//               </div>

//               <div className="relative">
//                 <FiMail className="absolute left-3 top-3 text-gray-400" />
//                 <input
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Email"
//                   className="w-full pl-10 py-2 border rounded"
//                   required
//                 />
//               </div>

//               <div className="relative">
//                 <CiPhone className="absolute left-3 top-3 text-gray-400" />
//                 <input
//                   name="phone"
//                   type="tel"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Phone"
//                   className="w-full pl-10 py-2 border rounded"
//                   required
//                 />
//               </div>

//               <div className="relative">
//                 <FiMessageSquare className="absolute left-3 top-3 text-gray-400" />
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Message"
//                   className="w-full pl-10 py-2 border rounded"
//                   required
//                 />
//               </div>

//               {/* CAPTCHA */}
//               <div className="flex justify-center">
//                 <ReCAPTCHA
//                   ref={recaptchaRef}
//                   sitekey="6LfarqkrAAAAAFUBBVCodI4OdoTheC6uB1hdtITz"
//                   onChange={(val) => setCaptchaValue(val)}
//                   onExpired={() => setCaptchaValue(null)}
//                 />
//               </div>

//               {/* TERMS */}
//               <div className="flex gap-2">
//                 <input
//                   type="checkbox"
//                   checked={acceptTerms}
//                   onChange={handleChange}
//                 />
//                 <p className="text-sm">
//                   I accept the <a  href="https://defencehousingsociety.com/terms-conditions"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="font-semibold underline">
//                         Terms</a> & 
//                       <a  href="https://defencehousingsociety.com/privacy-policy"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="font-semibold underline"> Privacy Policy</a>
//                 </p>
//               </div>

//               <button
//                 disabled={loading}
//                 className="w-full bg-[#24447c] text-white py-2 rounded"
//               >
//                 {loading ? "Sending..." : "Submit"}
//               </button>
//             </form>
//           </div>
//         </div>
//       )}

//       <style jsx global>{`
//         .animate-slideIn { animation: slideIn 0.5s forwards; }
//         .animate-slideOut { animation: slideOut 0.5s forwards; }

//         @keyframes slideIn {
//           from { transform: translateX(100%); opacity: 0; }
//           to { transform: translateX(0); opacity: 1; }
//         }

//         @keyframes slideOut {
//           from { transform: translateX(0); opacity: 1; }
//           to { transform: translateX(100%); opacity: 0; }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ContactFormPopup;


// import React, { useState, useEffect, useRef } from 'react';
// import { FiUser, FiMail, FiMessageSquare, FiX } from 'react-icons/fi';
// import { CiPhone } from "react-icons/ci";
// import toast from 'react-hot-toast';
// import { FaPaperPlane } from 'react-icons/fa';
// import ReCAPTCHA from "react-google-recaptcha";

// const ContactFormPopup = () => {
//   const [showPopup, setShowPopup] = useState(false);
//   const [showButton, setShowButton] = useState(false);
//   const [isClosing, setIsClosing] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [captchaValue, setCaptchaValue] = useState(null);
//   const [acceptTerms, setAcceptTerms] = useState(false);
//   const [phoneError, setPhoneError] = useState("");

//   const popupRef = useRef(null);
//   const recaptchaRef = useRef(null);
//   const reopenTimerRef = useRef(null);

//   // ✅ HANDLE INPUT CHANGE with phone number filtering
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     if (type === "checkbox") {
//       setAcceptTerms(checked);
//     } else {
//       let processedValue = value;
      
//       // For phone field: allow only digits and limit to 10 characters
//       if (name === "phone") {
//         processedValue = value.replace(/\D/g, '').slice(0, 10);
//         // Clear error when user starts typing
//         if (phoneError) setPhoneError("");
//       }
      
//       setFormData((prev) => ({ ...prev, [name]: processedValue }));
//     }
//   };

//   // ✅ Validate phone number (exactly 10 digits)
//   const validatePhoneNumber = (phone) => {
//     if (!phone) return "Phone number is required";
//     if (!/^\d{10}$/.test(phone)) return "Phone number must be exactly 10 digits";
//     return "";
//   };

//   // ✅ AUTO SHOW POPUP
//   useEffect(() => {
//     const timer = setTimeout(() => setShowPopup(true), 3000);

//     return () => {
//       clearTimeout(timer);
//       clearTimeout(reopenTimerRef.current);
//     };
//   }, []);

//   // ✅ CLOSE POPUP
//   const handleClose = () => {
//     setIsClosing(true);

//     setTimeout(() => {
//       setShowPopup(false);
//       setIsClosing(false);
//       setShowButton(true);

//       // reopenTimerRef.current = setTimeout(() => {
//       //   setShowPopup(true);
//       //   setShowButton(false);
//       // }, 10000);
//     }, 500);
//   };

//   // ✅ BUTTON CLICK
//   const handleButtonClick = () => {
//     clearTimeout(reopenTimerRef.current);
//     setShowPopup(true);
//     setShowButton(false);
//   };

//   // ✅ SUBMIT FORM
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate phone number
//     const phoneValidationError = validatePhoneNumber(formData.phone);
//     if (phoneValidationError) {
//       setPhoneError(phoneValidationError);
//       toast.error(phoneValidationError);
//       return;
//     } else {
//       setPhoneError("");
//     }

//     if (!captchaValue) {
//       toast.error("Please verify that you are not a robot");
//       return;
//     }

//     if (!acceptTerms) {
//       toast.error("Please accept Terms & Conditions");
//       return;
//     }

//     setLoading(true);

//     const payload = {
//       name: formData.name.trim(),
//       email: formData.email.trim(),
//       phone: formData.phone, // Already validated as 10 digits
//       message: formData.message.trim(),
//       acceptTerms: acceptTerms,
//       source: "Marasandra landing page",
//       captchaValue: captchaValue,
//     };

//     console.log("POPUP PAYLOAD:", payload);

//     try {
//       const res = await fetch(
//         "https://adminpanel.defencehousingsociety.com/defenceWebsiteRoutes/contactus",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(payload),
//         }
//       );

//       if (res.ok) {
//         toast.success("Message sent successfully!");

//         // RESET
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           message: "",
//         });

//         setAcceptTerms(false);
//         setCaptchaValue(null);
//         setPhoneError("");
//         recaptchaRef.current?.reset();

//         handleClose();
//       } else {
//         const errorText = await res.text();
//         console.error("Backend Error:", errorText);
//         toast.error(errorText || "Failed to send message.");
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Something went wrong!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed bottom-4 right-4 z-50">

//       {/* BUTTON */}
//       {showButton && !showPopup && !isClosing && (
//         <button
//           onClick={handleButtonClick}
//           className="bg-[#24447c] text-white px-6 py-3 rounded-full shadow-lg hover:bg-sky-700 flex items-center"
//         >
//           <FaPaperPlane className="mr-2" />
//           Contact Us
//         </button>
//       )}

//       {/* POPUP */}
//       {showPopup && (
//         <div className={`bg-white rounded-xl shadow-xl w-80 ${isClosing ? 'animate-slideOut' : 'animate-slideIn'}`}>
          
//           {/* HEADER */}
//           <div className="flex justify-between p-4 bg-gradient-to-r from-[#24447c] to-blue-600">
//             <h2 className="text-white">Contact Us</h2>
//             <FiX className="text-white cursor-pointer" onClick={handleClose} />
//           </div>

//           {/* FORM */}
//           <div className="p-4">
//             <form onSubmit={handleSubmit} className="space-y-4">

//               <div className="relative">
//                 <FiUser className="absolute left-3 top-3 text-gray-400" />
//                 <input
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Name"
//                   className="w-full pl-10 py-2 border rounded"
//                   required
//                 />
//               </div>

//               <div className="relative">
//                 <FiMail className="absolute left-3 top-3 text-gray-400" />
//                 <input
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Email"
//                   className="w-full pl-10 py-2 border rounded"
//                   required
//                 />
//               </div>

//               <div className="relative">
//                 <CiPhone className="absolute left-3 top-3 text-gray-400" />
//                 <input
//                   name="phone"
//                   type="tel"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Phone (10 digits)"
//                   className={`w-full pl-10 py-2 border rounded ${phoneError ? 'border-red-500' : ''}`}
//                   required
//                 />
//                 {phoneError && (
//                   <p className="text-red-500 text-xs mt-1">{phoneError}</p>
//                 )}
//               </div>

//               <div className="relative">
//                 <FiMessageSquare className="absolute left-3 top-3 text-gray-400" />
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Message"
//                   className="w-full pl-10 py-2 border rounded"
//                   required
//                 />
//               </div>

//               {/* CAPTCHA */}
//               <div className="flex justify-center">
//                 <ReCAPTCHA
//                   ref={recaptchaRef}
//                   sitekey="6LfarqkrAAAAAFUBBVCodI4OdoTheC6uB1hdtITz"
//                   onChange={(val) => setCaptchaValue(val)}
//                   onExpired={() => setCaptchaValue(null)}
//                 />
//               </div>

//               {/* TERMS */}
//               <div className="flex gap-2">
//                 <input
//                   type="checkbox"
//                   checked={acceptTerms}
//                   onChange={handleChange}
//                 />
//                 <p className="text-sm">
//                   I accept the <a  href="https://defencehousingsociety.com/terms-conditions"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="font-semibold underline">
//                         Terms</a> & 
//                       <a  href="https://defencehousingsociety.com/privacy-policy"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="font-semibold underline"> Privacy Policy</a>
//                 </p>
//               </div>

//               <button
//                 disabled={loading}
//                 className="w-full bg-[#24447c] text-white py-2 rounded"
//               >
//                 {loading ? "Sending..." : "Submit"}
//               </button>
//             </form>
//           </div>
//         </div>
//       )}

//       <style jsx global>{`
//         .animate-slideIn { animation: slideIn 0.5s forwards; }
//         .animate-slideOut { animation: slideOut 0.5s forwards; }

//         @keyframes slideIn {
//           from { transform: translateX(100%); opacity: 0; }
//           to { transform: translateX(0); opacity: 1; }
//         }

//         @keyframes slideOut {
//           from { transform: translateX(0); opacity: 1; }
//           to { transform: translateX(100%); opacity: 0; }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ContactFormPopup;

import React, { useState, useEffect, useRef } from 'react';
import { FiUser, FiMail, FiMessageSquare, FiX, FiCheckCircle } from 'react-icons/fi';
import { CiPhone } from "react-icons/ci";
import toast from 'react-hot-toast';
import { FaPaperPlane } from 'react-icons/fa';
import ReCAPTCHA from "react-google-recaptcha";

const ContactFormPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submissionId, setSubmissionId] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const recaptchaRef = useRef(null);
  const reopenTimerRef = useRef(null);
  const autoCloseTimerRef = useRef(null);

  // Generate unique ID (8 chars alphanumeric)
  const generateUniqueId = () => {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
  };

  // Handle input changes (with phone filtering)
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setAcceptTerms(checked);
    } else {
      let processedValue = value;
      if (name === "phone") {
        processedValue = value.replace(/\D/g, '').replace(/^0+/, '').slice(0, 10);
        if (phoneError) setPhoneError("");
      }
      setFormData((prev) => ({ ...prev, [name]: processedValue }));
    }
  };

  const validatePhoneNumber = (phone) => {
    if (!phone) return "Phone number is required";
    if (phone.length !== 10) return "Phone number must be exactly 10 digits";
    return "";
  };

  // Auto-show popup after 3s
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 3000);
    return () => {
      clearTimeout(timer);
      clearTimeout(reopenTimerRef.current);
      clearTimeout(autoCloseTimerRef.current);
    };
  }, []);

  // Close popup (reset success state)
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowPopup(false);
      setIsClosing(false);
      setShowButton(true);
      setSubmissionSuccess(false); // reset success flag
      setSubmissionId("");
    }, 500);
  };

  // Show button after popup closes
  const handleButtonClick = () => {
    clearTimeout(reopenTimerRef.current);
    setShowPopup(true);
    setShowButton(false);
    setSubmissionSuccess(false); // ensure form is shown
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneValidationError = validatePhoneNumber(formData.phone);
    if (phoneValidationError) {
      setPhoneError(phoneValidationError);
      toast.error(phoneValidationError);
      return;
    }
    if (!captchaValue) {
      toast.error("Please verify that you are not a robot");
      return;
    }
    if (!acceptTerms) {
      toast.error("Please accept Terms & Conditions");
      return;
    }

    setLoading(true);
    const uniqueId = generateUniqueId();

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone,
      message: formData.message.trim(),
      acceptTerms,
      declaration:acceptTerms,
      source: "Marasandra landing page",
      captchaValue,
      uniqueId,
    };

    console.log("Submitting with unique ID:", uniqueId, payload);

    try {
      const res = await fetch(
        "https://adminpanel.defencehousingsociety.com/defenceWebsiteRoutes/contactus",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (res.ok) {
        // Show success view inside popup
        setSubmissionSuccess(true);
        setSubmissionId(uniqueId);

        // Reset form fields (but keep success view)
        setFormData({ name: "", email: "", phone: "", message: "" });
        setAcceptTerms(false);
        setCaptchaValue(null);
        setPhoneError("");
        recaptchaRef.current?.reset();

        // Auto-close after 3 seconds
        autoCloseTimerRef.current = setTimeout(() => {
          handleClose();
        }, 3000);
      } else {
        const errorText = await res.text();
        console.error("Backend Error:", errorText);
        toast.error(errorText || "Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Floating button */}
      {showButton && !showPopup && !isClosing && (
        <button
          onClick={handleButtonClick}
          className="bg-[#24447c] text-white px-6 py-3 rounded-full shadow-lg hover:bg-sky-700 flex items-center"
        >
          <FaPaperPlane className="mr-2" />
          Contact Us
        </button>
      )}

      {/* Popup */}
      {showPopup && (
        <div className={`bg-white rounded-xl shadow-xl w-80 ${isClosing ? 'animate-slideOut' : 'animate-slideIn'}`}>
          {/* Header */}
          <div className="flex justify-between p-4 bg-gradient-to-r from-[#24447c] to-blue-600 rounded-t-xl">
            <h2 className="text-white font-semibold">
              {submissionSuccess ? "Thank You!" : "Contact Us"}
            </h2>
            <FiX className="text-white cursor-pointer text-xl" onClick={handleClose} />
          </div>

          {/* Body: Show success message or form */}
          <div className="p-4">
            {submissionSuccess ? (
              <div className="text-center py-6">
                <FiCheckCircle className="text-green-500 text-5xl mx-auto mb-3" />
                <p className="text-gray-800 font-medium">Your message was sent successfully!</p>
                <p className="text-sm text-gray-500 mt-2">
                  Reference ID: <span className="font-mono font-bold">{submissionId}</span>
                </p>
                <p className="text-xs text-gray-400 mt-3">Closing in 3 seconds...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div className="relative">
                  <FiUser className="absolute left-3 top-3 text-gray-400" />
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full pl-10 py-2 border rounded"
                    required
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <FiMail className="absolute left-3 top-3 text-gray-400" />
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full pl-10 py-2 border rounded"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <CiPhone className="absolute left-3 top-3 text-gray-400" />
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone (10 digits)"
                    className={`w-full pl-10 py-2 border rounded ${phoneError ? 'border-red-500' : ''}`}
                    required
                  />
                  {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
                </div>

                {/* Message */}
                <div className="relative">
                  <FiMessageSquare className="absolute left-3 top-3 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="w-full pl-10 py-2 border rounded"
                    rows="2"
                    required
                  />
                </div>

                {/* CAPTCHA */}
                <div className="flex justify-center scale-90 origin-center">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LfarqkrAAAAAFUBBVCodI4OdoTheC6uB1hdtITz"
                    onChange={(val) => setCaptchaValue(val)}
                    onExpired={() => setCaptchaValue(null)}
                  />
                </div>

                {/* Terms */}
                <div className="flex gap-2 items-start">
                  <input
                    type="checkbox"
                    checked={acceptTerms}
                    onChange={handleChange}
                    className="mt-1"
                  />
                  <p className="text-xs text-gray-600">
                    I accept the <a href="https://defencehousingsociety.com/terms-conditions" target="_blank" rel="noopener noreferrer" className="font-semibold underline">Terms</a> & 
                    <a href="https://defencehousingsociety.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="font-semibold underline"> Privacy Policy</a>
                  </p>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#24447c] text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <style jsx global>{`
        .animate-slideIn { animation: slideIn 0.5s forwards; }
        .animate-slideOut { animation: slideOut 0.5s forwards; }
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(100%); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default ContactFormPopup;