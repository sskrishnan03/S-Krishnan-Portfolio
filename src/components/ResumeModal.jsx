import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';
import resumePdf from '../assets/resume/Krishna_S_Resume.pdf';

const ResumeModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full md:w-[90%] md:h-[90%] md:rounded-2xl bg-[#1E1E1E] overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
              <a
                href={resumePdf}
                download
                className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm shadow-md flex items-center justify-center text-white hover:bg-white hover:text-[#121212] transition-all cursor-pointer"
                title="Download"
              >
                <Download className="w-4 h-4" />
              </a>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm shadow-md flex items-center justify-center text-white hover:bg-white hover:text-[#121212] transition-all cursor-pointer"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="w-full h-full bg-[#121212]">
              <embed
                src={resumePdf}
                className="w-full h-full"
                type="application/pdf"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
