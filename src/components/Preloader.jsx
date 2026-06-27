import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const letterVariants = {
  hidden: { y: 80, opacity: 0, rotateX: -40 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.7,
      ease: [0.175, 0.885, 0.32, 1.275],
    },
  }),
};

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { delay: 0.7, duration: 0.4, ease: 'easeOut' },
  },
  pulse: {
    scale: [1, 1.3, 1],
    transition: { repeat: Infinity, duration: 1.2, ease: 'easeInOut' },
  },
};

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const name = 'S Krishnan';
  const letters = name.split('');

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-white z-[100000] flex items-center justify-center overflow-hidden"
        >
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.4]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
              backgroundSize: '12px 12px',
            }}
          />

          {/* Corner red gradients */}
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] opacity-30 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,42,42,0.15) 0%, transparent 70%)' }} />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] opacity-30 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,42,42,0.12) 0%, transparent 70%)' }} />
          <div className="absolute top-1/3 -left-20 w-[300px] h-[300px] opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,42,42,0.08) 0%, transparent 70%)' }} />

          {/* Glowing red accent dots */}
          <div className="absolute top-[15%] left-[20%] w-1.5 h-1.5 rounded-full bg-[#ff2a2a] shadow-[0_0_8px_rgba(255,42,42,0.6)] animate-pulse" />
          <div className="absolute top-[35%] right-[25%] w-1 h-1 rounded-full bg-[#ff2a2a] shadow-[0_0_6px_rgba(255,42,42,0.5)] animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-[25%] left-[30%] w-1.5 h-1.5 rounded-full bg-[#ff2a2a] shadow-[0_0_8px_rgba(255,42,42,0.6)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-[40%] right-[15%] w-1 h-1 rounded-full bg-[#ff2a2a] shadow-[0_0_6px_rgba(255,42,42,0.5)] animate-pulse" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-[60%] left-[8%] w-[3px] h-[3px] rounded-full bg-[#ff2a2a] shadow-[0_0_10px_rgba(255,42,42,0.7)] animate-pulse" style={{ animationDelay: '0.3s' }} />
          <div className="absolute top-[10%] right-[35%] w-1 h-1 rounded-full bg-[#ff2a2a] shadow-[0_0_6px_rgba(255,42,42,0.5)] animate-pulse" style={{ animationDelay: '0.8s' }} />
          <div className="absolute bottom-[15%] right-[40%] w-[3px] h-[3px] rounded-full bg-[#ff2a2a] shadow-[0_0_10px_rgba(255,42,42,0.7)] animate-pulse" style={{ animationDelay: '1.2s' }} />
          <div className="absolute top-[45%] left-[55%] w-1 h-1 rounded-full bg-[#ff2a2a] shadow-[0_0_6px_rgba(255,42,42,0.4)] animate-pulse" style={{ animationDelay: '0.6s' }} />

          {/* Micro crosshair elements */}
          <div className="absolute top-[20%] left-[40%] opacity-20">
            <div className="w-3 h-[1px] bg-gray-400" />
            <div className="w-[1px] h-3 bg-gray-400 ml-[5.5px] -mt-[5.5px]" />
          </div>
          <div className="absolute bottom-[30%] right-[30%] opacity-20">
            <div className="w-3 h-[1px] bg-gray-400" />
            <div className="w-[1px] h-3 bg-gray-400 ml-[5.5px] -mt-[5.5px]" />
          </div>
          <div className="absolute top-[70%] left-[60%] opacity-15">
            <div className="w-2 h-[1px] bg-gray-400" />
            <div className="w-[1px] h-2 bg-gray-400 ml-[3.5px] -mt-[3.5px]" />
          </div>
          <div className="absolute top-[25%] right-[10%] opacity-15">
            <div className="w-2 h-[1px] bg-gray-400" />
            <div className="w-[1px] h-2 bg-gray-400 ml-[3.5px] -mt-[3.5px]" />
          </div>

          {/* Tiny dots pattern (micro-patterns) */}
          <div className="absolute top-[12%] left-[60%] flex gap-1.5 opacity-15">
            <div className="w-[2px] h-[2px] rounded-full bg-gray-500" />
            <div className="w-[2px] h-[2px] rounded-full bg-gray-500" />
            <div className="w-[2px] h-[2px] rounded-full bg-gray-500" />
          </div>
          <div className="absolute bottom-[20%] right-[20%] flex gap-1 opacity-15">
            <div className="w-[2px] h-[2px] rounded-full bg-gray-500" />
            <div className="w-[2px] h-[2px] rounded-full bg-gray-500" />
            <div className="w-[2px] h-[2px] rounded-full bg-gray-500" />
            <div className="w-[2px] h-[2px] rounded-full bg-gray-500" />
          </div>
          <div className="absolute top-[55%] left-[15%] flex gap-1 opacity-10">
            <div className="w-[2px] h-[2px] rounded-full bg-gray-500" />
            <div className="w-[2px] h-[2px] rounded-full bg-gray-500" />
          </div>

          <motion.div
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="relative flex items-center z-10"
          >
            <div className="flex text-5xl md:text-7xl font-black tracking-tight">
              {letters.map((char, i) =>
                char === ' ' ? (
                  <span key={i} className="w-[0.4em]" />
                ) : (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block text-gray-900"
                    style={{ perspective: 800 }}
                  >
                    {char}
                  </motion.span>
                )
              )}
              <motion.span
                variants={dotVariants}
                initial="hidden"
                animate={['visible', 'pulse']}
                className="inline-block text-[#ff2a2a] text-5xl md:text-7xl font-black"
              >
                .
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
