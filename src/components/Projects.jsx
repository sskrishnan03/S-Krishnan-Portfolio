import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import routheonSkups from '../assets/about/RoutheonSkups.png';
import studivance from '../assets/about/Studivance.png';
import contactsManager from '../assets/about/Contacts Manager.png';

const projects = [
  {
    id: '01',
    title: 'RoutheonSkups',
    subtitle: 'AI Travel Planning',
    description: 'An AI-powered travel planning web application that generates personalised multi-day itineraries based on user preferences such as budget, interests, and travel style. Leverages Llama 3 for intelligent itinerary generation and integrates route optimization algorithms to ensure efficient travel between destinations. Features dynamic cost estimation, an interactive map interface, destination explorer with categorized discovery, and an AI travel assistant.',
    tech: ['Python', 'Flask', 'Llama 3', 'JavaScript', 'Tailwind CSS', 'SQLite', 'Leaflet.js', 'Serper API'],
    color: '#059669',
    bgGradient: 'from-emerald-600 to-teal-500',
    lightBg: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    demo: '#',
    link: 'https://routheonskups.onrender.com',
    source: '#',
    image: routheonSkups
  },
  {
    id: '02',
    title: 'Study Plan AI',
    subtitle: 'AI-Powered Student Planner',
    description: 'A web-based student planner that lets students manage subjects, daily tasks, exams, and personalised timetables from a single dashboard. Includes modules for user profiles, subject-wise task planning, exam tracking, note-taking, and reference management. Integrates AI assistance to refine notes and explanations, along with a dedicated Doubtrium space for asking doubts.',
    tech: ['Python', 'TypeScript', 'React', 'Node.js', 'MySQL', 'AI Integration'],
    color: '#7c3aed',
    bgGradient: 'from-violet-600 to-purple-600',
    lightBg: 'bg-violet-50',
    borderColor: 'border-violet-200',
    demo: '#',
    link: 'https://studivance-study.onrender.com',
    source: '#',
    image: studivance
  },
  {
    id: '03',
    title: 'Contacts Manager',
    subtitle: 'Modern Contact Management Platform',
    description: 'A feature-rich contact management platform powered by AI. Manage contacts with rich fields, track interactions via activity logs, schedule calendar events, and chat with an AI assistant — all offline-first. Features include vCard QR sharing, CSV import/export, JSON backup/restore, duplicate merging with field-level wizard, AI-generated birthday wishes, profile picture generation, and full undo/redo history.',
    tech: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Groq API', 'IndexedDB', 'PWA'],
    color: '#2563eb',
    bgGradient: 'from-blue-600 to-cyan-500',
    lightBg: 'bg-blue-50',
    borderColor: 'border-blue-200',
    demo: '#',
    link: 'https://contacts-manager-tgbx.onrender.com',
    source: '#',
    image: contactsManager
  }
];

const KRISHNAN_WHATSAPP = '919380076101';

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['30%', '-30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 1, 1, 0.4]);

  const isEven = index % 2 === 0;
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSourceClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    const message = encodeURIComponent(
      `Hi Krishnan,\n\nI would like to request the source code for ${project.title} (#${project.id}).\n\nName: ${name}\nWhatsApp: ${phone}\n\nKindly share it. Thank you!`
    );
    window.open(`https://wa.me/${KRISHNAN_WHATSAPP}?text=${message}`, '_blank');
    setShowModal(false);
    setName('');
    setPhone('');
  };

  return (
    <div ref={cardRef} className="relative mb-20 md:mb-28 last:mb-0">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          style={{ opacity }}
          className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}
        >
          {/* Left: Number + Content */}
          <div className="flex-1 relative z-10 w-full">
            {/* Large background number */}
            <div className="hidden md:block absolute -top-16 -left-8 text-[12rem] font-black text-black/[0.03] select-none pointer-events-none leading-none">
              {project.id}
            </div>

            {/* Category badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-5"
            >
              <span className="w-8 h-[2px]" style={{ backgroundColor: project.color }} />
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: project.color }}>
                Project {project.id}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1] mb-2"
            >
              {project.title}
            </motion.h3>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-base md:text-lg font-semibold text-gray-500 mb-6 tracking-wide"
            >
              {project.subtitle}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="text-gray-600 leading-relaxed text-sm md:text-base mb-8 max-w-lg"
            >
              {project.description}
            </motion.p>

            {/* Tech pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-2"
            >
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 text-xs font-bold rounded-full border bg-white hover:shadow-md transition-all duration-300 cursor-default"
                  style={{
                    color: project.color,
                    borderColor: project.color + '30',
                    backgroundColor: project.color + '08'
                  }}
                >
                  {t}
                </span>
              ))}
            </motion.div>

            {/* Action links - 3 unique styled buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-3 mt-6"
            >
              {/* Button 1: Demo Video - Filled with glossy shimmer */}
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                style={{
                  backgroundColor: project.color,
                  color: 'white',
                  boxShadow: `0 4px 14px ${project.color}40`
                }}
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Demo Video
                </span>
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>

              {/* Button 2: Live Demo - Border with diagonal hover fill */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm tracking-wide border-2 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                style={{
                  borderColor: project.color,
                  color: project.color
                }}
              >
                <span className="relative z-10 flex items-center gap-2.5 transition-colors duration-300 group-hover:text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </span>
                <span
                  className="absolute inset-0 -translate-x-full skew-x-12 group-hover:translate-x-0 transition-transform duration-500"
                  style={{ backgroundColor: project.color }}
                />
              </a>

              {/* Button 3: Source Code - Ghost with animated underline */}
              <button
                onClick={handleSourceClick}
                className="group relative inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                style={{ color: project.color }}
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                  </svg>
                  Source Code
                </span>
                <span
                  className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-[80%]"
                  style={{ backgroundColor: project.color }}
                />
              </button>
            </motion.div>
          </div>

            {/* Right: Visual block with image backdrop */}
            <motion.div
              style={{ y }}
              className="flex-1 w-full md:w-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative rounded-3xl overflow-hidden border border-white/20 p-8 md:p-10 min-h-[280px] md:min-h-[320px] flex items-center justify-center cursor-default"
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Dark gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />

                {/* Decorative circles */}
                <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-20" style={{ backgroundColor: project.color }} />
                <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full opacity-20" style={{ backgroundColor: project.color }} />

                {/* Inner content block */}
                <div className="relative z-10 text-center">
                  {/* Big icon/number */}
                  <div className="text-7xl md:text-8xl font-black leading-none mb-4 text-white/20">
                    {project.id}
                  </div>
                  <div className="w-16 h-[3px] mx-auto rounded-full mb-4" style={{ backgroundColor: project.color }} />
                  <p className="text-lg md:text-xl font-bold text-white">
                    {project.subtitle}
                  </p>
                  <p className="text-sm mt-2 text-white/60">
                    {project.tech.slice(0, 3).join(' · ')} · more
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24">
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[100px] border-r-[100px]" style={{ borderTopColor: project.color + '30', borderRightColor: 'transparent' }} />
                </div>
              </motion.div>
            </motion.div>
        </motion.div>
      </div>

      {/* Source Code Request Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/40"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 12 }}
              transition={{ type: 'spring', duration: 0.5, bounce: 0.25 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-[0_25px_60px_-18px_rgba(0,0,0,0.35)] overflow-hidden"
            >
              {/* Close */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3.5 right-3.5 z-10 w-6 h-6 flex items-center justify-center rounded-full text-gray-300 hover:text-gray-500 hover:bg-gray-100 transition-all"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Split Layout */}
              <div className="flex flex-col md:flex-row">
                {/* Left: Help */}
                <div className="md:w-[45%] p-6 md:p-7 flex flex-col justify-center bg-gray-50/80">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: project.color + '12' }}>
                    <svg className="w-4 h-4" style={{ color: project.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1.5 leading-snug">Need help understanding this project?</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    If you have any questions about this project, including its architecture, implementation, technologies used, setup process, or development workflow, feel free to reach out. I'd be happy to explain the project in detail and guide you through every aspect.
                  </p>
                  <p className="text-[10px] mt-3 font-medium tracking-wide" style={{ color: project.color + '99' }}>{project.title}</p>
                </div>

                {/* Right: Form */}
                <div className="md:w-[55%] p-6 md:p-7">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: project.color + '10' }}>
                      <svg className="w-3.5 h-3.5" style={{ color: project.color }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">Source Code</h4>
                      <p className="text-[10px] text-gray-400">Fill to request access</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-2.5">
                    <div>
                      <label className="block text-[10px] font-semibold text-gray-500 uppercase tracking-wide mb-1">Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        required
                        className="w-full px-3.5 py-2 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none"
                        onFocus={(e) => { e.target.style.borderColor = project.color; e.target.style.boxShadow = `0 0 0 3px ${project.color}15`; }}
                        onBlur={(e) => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none'; }}
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-semibold text-gray-500 uppercase tracking-wide mb-1">WhatsApp Number</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter your number"
                        required
                        className="w-full px-3.5 py-2 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 transition-all duration-200 focus:outline-none"
                        onFocus={(e) => { e.target.style.borderColor = project.color; e.target.style.boxShadow = `0 0 0 3px ${project.color}15`; }}
                        onBlur={(e) => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none'; }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 mt-0.5"
                      style={{
                        backgroundColor: '#25D366',
                        color: 'white'
                      }}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Send Request
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Projects = () => {
  const sectionRef = useRef(null);

  return (
    <section id="projects" ref={sectionRef} className="relative w-full bg-white py-24 md:py-32 overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(0,0,0,.03)_25%,rgba(0,0,0,.03)_26%,transparent_27%,transparent_74%,rgba(0,0,0,.03)_75%,rgba(0,0,0,.03)_76%,transparent_77%,transparent),linear-gradient(0deg,transparent_24%,rgba(0,0,0,.03)_25%,rgba(0,0,0,.03)_26%,transparent_27%,transparent_74%,rgba(0,0,0,.03)_75%,rgba(0,0,0,.03)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
      </div>

      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[3px] bg-[#ff2a2a] rounded-full" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gray-400">Projects</span>
            <span className="w-8 h-[3px] bg-[#ff2a2a] rounded-full" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1] mb-4">
            What I've <span className="text-[#ff2a2a]">Built</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl leading-relaxed">
            Real-world applications crafted with modern technologies, AI integration, and clean architecture.
          </p>
        </motion.div>
      </div>

      {/* Project Cards */}
      <div className="relative">
        {/* Connecting line (desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent -translate-x-1/2 pointer-events-none" />

        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      {/* Floating red accent */}
      <motion.div
        animate={{ y: [0, 15, 0], opacity: [0.03, 0.07, 0.03] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-40 right-10 w-72 h-72 bg-[#ff2a2a] rounded-full blur-3xl pointer-events-none"
      />
    </section>
  );
};

export default Projects;
