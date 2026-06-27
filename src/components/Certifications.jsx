import { motion } from 'framer-motion';
import ExpandableGallery from './ui/gallery-animation';

const certifications = [
  {
    id: '01', title: 'AWS Cloud Foundations', subtitle: 'AWS Academy', date: '2025',
    accent1: '#3b82f6', accent2: '#06b6d4',
    tags: ['Cloud Computing', 'EC2', 'S3', 'AWS Services'],
    pdf: '/certificates/AWS.pdf',
  },
  {
    id: '02', title: 'Data Analytics', subtitle: 'NoviTech', date: '2025',
    accent1: '#8b5cf6', accent2: '#ec4899',
    tags: ['Data Analysis', 'Visualization', 'SQL', 'Statistics'],
    pdf: '/certificates/Data Analytics.pdf',
  },
  {
    id: '03', title: 'Python Essentials 1', subtitle: 'Cisco Networking Academy', date: '2026',
    accent1: '#f97316', accent2: '#eab308',
    tags: ['Python', 'Data Types', 'Control Flow', 'Functions'],
    pdf: '/certificates/Python Essentials 1 certificate.pdf',
  },
  {
    id: '04', title: 'Python Essentials 2', subtitle: 'Cisco Networking Academy', date: '2026',
    accent1: '#22c55e', accent2: '#10b981',
    tags: ['Python', 'OOP', 'Modules', 'File Handling'],
    pdf: '/certificates/Python Essentials 2 certificate.pdf',
  },
  {
    id: '05', title: 'C++ Essentials 1', subtitle: 'Cisco Networking Academy', date: '2026',
    accent1: '#6366f1', accent2: '#8b5cf6',
    tags: ['C++', 'Basics', 'Loops & Arrays', 'Functions'],
    pdf: '/certificates/C++ Essentials 1 certificate.pdf',
  },
  {
    id: '06', title: 'C++ Essentials 2', subtitle: 'Cisco Networking Academy', date: '2026',
    accent1: '#ef4444', accent2: '#f97316',
    tags: ['C++', 'Inheritance', 'Polymorphism', 'Templates'],
    pdf: '/certificates/C++ Essentials 2 certificate.pdf',
  },
  {
    id: '07', title: 'Problem Solving & Innovation', subtitle: 'Wadhwani Foundation', date: '2025',
    accent1: '#14b8a6', accent2: '#3b82f6',
    tags: ['Critical Thinking', 'Creativity', 'Innovation'],
    pdf: '/certificates/Problem Solving & Innovation.pdf',
  },
  {
    id: '08', title: 'Interpersonal Skills', subtitle: 'Wadhwani Foundation', date: '2025',
    accent1: '#f43f5e', accent2: '#ec4899',
    tags: ['Communication', 'Teamwork', 'Empathy'],
    pdf: '/certificates/Interpersonal Skills.pdf',
  },
  {
    id: '09', title: 'Self-Management', subtitle: 'Wadhwani Foundation', date: '2025',
    accent1: '#0ea5e9', accent2: '#06b6d4',
    tags: ['Time Management', 'Goal Setting', 'Productivity'],
    pdf: '/certificates/Self-Management.pdf',
  },
  {
    id: '10', title: 'Self-Presentation', subtitle: 'Wadhwani Foundation', date: '2025',
    accent1: '#84cc16', accent2: '#22c55e',
    tags: ['Personal Branding', 'Confidence', 'Presence'],
    pdf: '/certificates/Self-Presentation.pdf',
  },
  {
    id: '11', title: 'Impactful Writing Skills', subtitle: 'Wadhwani Foundation', date: '2025',
    accent1: '#f59e0b', accent2: '#f97316',
    tags: ['Professional Writing', 'Content Creation', 'Clarity'],
    pdf: '/certificates/Impactful Writing Skills.pdf',
  },
  {
    id: '12', title: 'Effective Speaking & Listening', subtitle: 'Wadhwani Foundation', date: '2025',
    accent1: '#8b5cf6', accent2: '#a855f7',
    tags: ['Public Speaking', 'Active Listening', 'Articulation'],
    pdf: '/certificates/Effective Speaking and Listening Skills.pdf',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="relative w-full bg-gray-50 py-28 md:py-36 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[3px] rounded-full bg-[#ff2a2a]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gray-300">Certifications</span>
            <span className="w-8 h-[3px] rounded-full bg-[#ff2a2a]" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1] mb-4">
            Skills <span className="text-[#ff2a2a]">Certified</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed">
            Industry-validated expertise from Cisco, AWS Academy &amp; Wadhwani Foundation.
          </p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="max-w-5xl mr-auto">
          <ExpandableGallery items={certifications} />
        </div>
      </div>
    </section>
  );
};

export default Certifications;
