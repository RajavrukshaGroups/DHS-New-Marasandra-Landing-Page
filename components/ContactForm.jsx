import React, { useState, useRef } from "react";
import { Send } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    acceptTerms: false,
  });
  const recaptchaRef = useRef(null);

  const [status, setStatus] = useState({ loading: false, ok: null, msg: "" });
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({
      ...s,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({
        loading: false,
        ok: false,
        msg: "Please fill required fields.",
      });
      return false;
    }

    const re = /\S+@\S+\.\S+/;
    if (!re.test(form.email)) {
      setStatus({
        loading: false,
        ok: false,
        msg: "Please enter a valid email.",
      });
      return false;
    }

    if (!captchaValue) {
      setStatus({
        loading: false,
        ok: false,
        msg: "Please verify that you are not a robot.",
      });
      return false;
    }

    if (!form.acceptTerms) {
      setStatus({
        loading: false,
        ok: false,
        msg: "Please accept Terms & Conditions and Privacy Policy.",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, ok: null, msg: "" });

    if (!validate()) return;

    try {
      const endpoint =
        "https://adminpanel.defencehousingsociety.com/defenceWebsiteRoutes/contactus";
      // "http://localhost:4000/defenceWebsiteRoutes/contactus";

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: "Marasandra landing page",
          captchaValue,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({
          loading: false,
          ok: true,
          msg: "Message sent. Thank you!",
        });

        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
          acceptTerms: false,
        });

        setCaptchaValue(null);
        recaptchaRef.current?.reset();
      } else {
        throw new Error(data?.message || "Failed to send");
      }
    } catch (err) {
      console.error(err);
      setStatus({
        loading: false,
        ok: false,
        msg: err.message || "Error sending message.",
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Left panel */}
            <div className="md:col-span-2 bg-navy p-12 text-white">
              <h2 className="text-3xl font-bold mb-6 font-serif italic">
                Get in Touch
              </h2>
              <p className="text-slate-300 font-light">
                For any queries, please fill out the form and our team will
                contact you shortly.
              </p>
            </div>

            {/* Form */}
            <div className="md:col-span-3 p-12">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Name*
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      type="text"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-gold-400 outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      type="tel"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-gold-400 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Email Address*
                  </label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-gold-400 outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Message*
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-gold-400 outline-none"
                    required
                  />
                </div>

                <div className="flex justify-center">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LfarqkrAAAAAFUBBVCodI4OdoTheC6uB1hdtITz"
                    onChange={setCaptchaValue}
                    onExpired={() => setCaptchaValue(null)}
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={form.acceptTerms}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4"
                  />
                  <p className="text-sm text-slate-600">
                    I accept the{" "}
                    <a
                      href="https://defencehousingsociety.com/terms-conditions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold underline"
                    >
                      Terms & Conditions
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://defencehousingsociety.com/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold underline"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full bg-blue-900 text-white font-bold py-4 rounded-sm flex items-center justify-center gap-2"
                >
                  {status.loading ? "Sending..." : "Submit Enquiry"}
                  <Send size={18} />
                </button>

                {status.ok === true && (
                  <p className="text-green-600">{status.msg}</p>
                )}
                {status.ok === false && (
                  <p className="text-red-600">{status.msg}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
