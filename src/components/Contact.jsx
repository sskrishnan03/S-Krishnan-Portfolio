import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    permission: false
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
    if (status) setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.permission) {
      alert("Please accept the contact permission checkbox.");
      return;
    }

    setSending(true);
    setStatus(null);

    try {
      const res = await fetch('/api/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to send');

      setStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', message: '', permission: false });
    } catch (error) {
      console.error('Send error:', error);
      setStatus('error');
    } finally {
      setSending(false);
    }
  };

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20 border-t border-gray-900">

      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#ff2a2a] rounded-full blur-[150px] opacity-[0.04] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-[#ff2a2a] rounded-full blur-[120px] opacity-[0.03] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[3px] bg-[#ff2a2a] rounded-full" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">Contact</span>
            <span className="w-8 h-[3px] bg-[#ff2a2a] rounded-full" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05]">
            Get In <br className="md:hidden" />
            <span className="text-[#ff2a2a]">Touch</span>
          </h2>
          <p className="text-white/40 text-base md:text-lg font-medium mt-4 max-w-xl leading-relaxed">
            Whether you have a question, a project idea, or just want to connect — feel free to reach out.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">

          {/* LEFT: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            {/* Phone */}
            <div className="group flex items-start gap-5">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:bg-[#ff2a2a] group-hover:border-[#ff2a2a] transition-all duration-300">
                <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/30 mb-1">Phone</p>
                <a href="tel:+919380076101" className="text-white text-lg font-bold hover:text-[#ff2a2a] transition-colors">+91 93800 76101</a>
              </div>
            </div>

            {/* Email */}
            <div className="group flex items-start gap-5">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:bg-[#ff2a2a] group-hover:border-[#ff2a2a] transition-all duration-300">
                <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/30 mb-1">Email</p>
                <a href="mailto:sskrishnan03@gmail.com" className="text-white text-lg font-bold hover:text-[#ff2a2a] transition-colors break-all">sskrishnan03@gmail.com</a>
              </div>
            </div>

            {/* Social */}
            <div className="group flex items-start gap-5">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:bg-[#ff2a2a] group-hover:border-[#ff2a2a] transition-all duration-300">
                <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/30 mb-1">Social</p>
                <div className="flex items-center gap-3 mt-1">
                  <a href="https://wa.me/919380076101?text=Hi%20Krishnan!%20I%20came%20across%20your%20portfolio%20and%20I'd%20love%20to%20connect." target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#ff2a2a] transition-colors text-sm font-bold">WhatsApp</a>
                  <span className="text-white/20">/</span>
                  <a href="https://github.com/sskrishnan03" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#ff2a2a] transition-colors text-sm font-bold">GitHub</a>
                  <span className="text-white/20">/</span>
                  <a href="https://www.linkedin.com/in/s-krishnan-13516b41a" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#ff2a2a] transition-colors text-sm font-bold">LinkedIn</a>
                </div>
              </div>
            </div>

            {/* Decorative line */}
            <div className="mt-4 w-16 h-[3px] bg-[#ff2a2a] rounded-full" />
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#ff2a2a] focus:bg-white/[0.06] transition-all duration-300 placeholder-white/30 font-medium"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#ff2a2a] focus:bg-white/[0.06] transition-all duration-300 placeholder-white/30 font-medium"
                  />
                </div>
              </div>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#ff2a2a] focus:bg-white/[0.06] transition-all duration-300 placeholder-white/30 font-medium"
                />
              </div>
              <div className="relative">
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows="5"
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#ff2a2a] focus:bg-white/[0.06] transition-all duration-300 placeholder-white/30 font-medium resize-none"
                ></textarea>
              </div>

              {/* Permission */}
              <div
                className={`relative flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                  formData.permission
                    ? 'bg-[#ff2a2a]/5 border-[#ff2a2a]/30'
                    : 'bg-white/[0.02] border-white/[0.06] hover:border-white/[0.12]'
                }`}
                onClick={() => setFormData(prev => ({ ...prev, permission: !prev.permission }))}
              >
                <div className="relative mt-0.5 shrink-0">
                  <input
                    type="checkbox"
                    id="permission"
                    checked={formData.permission}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div
                    className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
                      formData.permission
                        ? 'bg-[#ff2a2a] border-[#ff2a2a]'
                        : 'bg-transparent border-white/20 group-hover:border-white/40'
                    }`}
                  >
                    {formData.permission && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
                <label htmlFor="permission" className="text-sm font-medium leading-snug cursor-pointer select-none">
                  <span className={formData.permission ? 'text-white/80' : 'text-white/50'}>
                    I give permission to contact me at this email address.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#ff2a2a] text-white font-bold text-sm flex items-center justify-center gap-3 hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? (
                  <>Sending<span className="animate-pulse">...</span></>
                ) : (
                  <>
                    Send Message
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="text-green-400 text-sm font-medium">Message sent successfully! I'll get back to you soon.</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-sm font-medium">Something went wrong. Please try again or email me directly.</p>
              )}

              <p className="text-white/30 text-xs font-medium leading-relaxed mt-2">
                This site is protected by reCAPTCHA and the Google <a href="#" className="underline hover:text-white/60 transition-colors">Privacy Policy</a> and <a href="#" className="underline hover:text-white/60 transition-colors">Terms of Service</a> apply.
              </p>
            </form>
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default Contact;
