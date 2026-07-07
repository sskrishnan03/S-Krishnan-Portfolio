import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, ChevronLeft, ChevronRight, Calendar,
  ArrowUpRight, Award, ScrollText,
} from 'lucide-react';

const pillColors = [
  { bg: 'rgba(255,255,255,0.08)', text: '#FFFFFF' },
  { bg: 'rgba(255,255,255,0.06)', text: '#D4D4D4' },
  { bg: 'rgba(255,255,255,0.04)', text: '#FFFFFF' },
  { bg: 'rgba(255,255,255,0.08)', text: '#D4D4D4' },
];

const ExpandableGallery = ({ items, className = '' }) => {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openItem = (index) => setSelectedIndex(index);
  const closeItem = () => setSelectedIndex(null);

  const goToNext = (e) => {
    e.stopPropagation();
    if (selectedIndex !== null) setSelectedIndex((selectedIndex + 1) % items.length);
  };

  const goToPrev = (e) => {
    e.stopPropagation();
    if (selectedIndex !== null) setSelectedIndex((selectedIndex - 1 + items.length) % items.length);
  };

  return (
    <div className={className}>
      <div className="flex gap-3 w-full flex-col sm:flex-row" style={{ height: 390 }}>
        {items.map((item, index) => {
          const isActive = hoveredIndex === index;

          return (
            <motion.div
              key={item.id}
              className="relative cursor-pointer group"
              animate={{
                flex: hoveredIndex === null ? 1 : isActive ? 4.2 : 0.55,
                boxShadow: isActive
                  ? '0 35px 100px rgba(255,255,255,0.06)'
                  : '0 4px 12px rgba(0,0,0,0.2)',
              }}
              transition={{
                type: 'spring',
                stiffness: 90,
                damping: 32,
                mass: 1.1,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(0)}
              onClick={() => openItem(index)}
              style={{
                borderRadius: 32,
                border: '1px solid rgba(255,255,255,0.1)',
                background: '#1E1E1E',
                height: 390,
                overflow: 'hidden',
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 30%, transparent 70%, rgba(255,255,255,0.02) 100%)',
                  opacity: isActive ? 0.12 : 0.3,
                  transition: 'opacity 0.65s ease',
                }}
              />

              <div
                className="absolute bottom-0 left-0 right-0 pointer-events-none"
                style={{
                  height: '50%',
                  background: `linear-gradient(to top, rgba(255,255,255,0.03), transparent)`,
                  opacity: isActive ? 0 : 1,
                  transition: 'opacity 0.65s ease',
                }}
              />

              <motion.div
                className="absolute inset-0 rounded-[32px] pointer-events-none"
                animate={{
                  opacity: isActive ? 1 : 0,
                  boxShadow: isActive
                    ? 'inset 0 0 0 1px rgba(255,255,255,0.1)'
                    : 'inset 0 0 0 0 transparent',
                }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              />

              <motion.div
                className="absolute inset-0 flex flex-col items-center"
                initial={false}
                animate={{
                  opacity: isActive ? 0 : 1,
                  pointerEvents: isActive ? 'none' : 'auto',
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                  delay: isActive ? 0 : 0.05,
                }}
                style={{ padding: '18px 4px', zIndex: 2 }}
              >
                <span
                  className="font-extrabold"
                  style={{ fontSize: 20, color: '#FFFFFF' }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 6,
                  }}
                >
                  <Award style={{ width: 11, height: 11, color: '#FFFFFF' }} />
                </div>

                <div
                  style={{
                    width: 2,
                    height: 28,
                    borderRadius: 1,
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(255,255,255,0.1))',
                    boxShadow: '0 0 6px rgba(255,255,255,0.1)',
                    marginTop: 8,
                  }}
                />

                <div
                  className="flex flex-col items-center"
                  style={{ gap: 5, marginTop: 12, width: '75%' }}
                >
                  <div
                    style={{
                      height: 4,
                      width: '100%',
                      borderRadius: 2,
                      background: 'rgba(255,255,255,0.08)',
                    }}
                  />
                  <div
                    style={{
                      height: 4,
                      width: '65%',
                      borderRadius: 2,
                      background: 'rgba(255,255,255,0.05)',
                    }}
                  />
                </div>

                <div
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    background: '#FFFFFF',
                    boxShadow: '0 0 5px rgba(255,255,255,0.35)',
                    marginTop: 'auto',
                    marginBottom: 3,
                  }}
                />
              </motion.div>

              <motion.div
                className="absolute inset-0 flex flex-col"
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                  pointerEvents: isActive ? 'auto' : 'none',
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                  delay: isActive ? 0.1 : 0,
                }}
                style={{ padding: '24px 26px 20px', zIndex: 3 }}
              >
                <div
                  className="absolute pointer-events-none select-none"
                  style={{
                    right: 16,
                    bottom: 6,
                    fontSize: 180,
                    fontWeight: 900,
                    color: 'rgba(255,255,255,0.03)',
                    lineHeight: 1,
                    letterSpacing: '-8px',
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div
                  className="flex items-center shrink-0"
                  style={{ gap: 10 }}
                >
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 10,
                      background: 'rgba(255,255,255,0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ScrollText style={{ width: 18, height: 18, color: '#FFFFFF' }} />
                  </div>
                  <span
                    className="font-bold uppercase"
                    style={{ fontSize: 10, letterSpacing: '4px', color: '#FFFFFF' }}
                  >
                    Certificate
                  </span>
                </div>

                <h3
                  className="font-extrabold leading-[1.1]"
                  style={{
                    fontSize: 26,
                    color: '#FFFFFF',
                    marginTop: 18,
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {item.title}
                </h3>

                <span
                  className="font-medium"
                  style={{ fontSize: 14, color: '#D4D4D4', marginTop: 6 }}
                >
                  {item.subtitle}
                </span>

                <div
                  className="flex items-center"
                  style={{ gap: 6, marginTop: 14 }}
                >
                  <Calendar style={{ width: 12, height: 12, color: '#888888' }} />
                  <span
                    className="font-medium"
                    style={{ fontSize: 12, color: '#888888' }}
                  >
                    Issued {item.date}
                  </span>

                </div>

                <div
                  className="flex flex-wrap"
                  style={{ gap: 6, marginTop: 16 }}
                >
                  {item.tags.slice(0, 4).map((tag, i) => {
                    const color = pillColors[i % pillColors.length];
                    return (
                      <span
                        key={tag}
                        className="font-semibold inline-flex items-center"
                        style={{
                          height: 28,
                          padding: '0 12px',
                          borderRadius: 999,
                          fontSize: 11,
                          background: color.bg,
                          color: color.text,
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>

                <div style={{ flex: 1 }} />

                <div style={{ paddingTop: 8 }}>
                  <span
                    className="inline-flex items-center font-extrabold cursor-pointer"
                    style={{ fontSize: 13, color: '#FFFFFF', gap: 6, letterSpacing: '0.5px' }}
                  >
                    View Certificate
                    <ArrowUpRight style={{ width: 14, height: 14 }} />
                  </span>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            onClick={closeItem}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl h-[85vh] md:h-[90vh] bg-[#1E1E1E] rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="flex items-center justify-between px-6 py-4 border-b border-white/10 shrink-0"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                <div className="min-w-0 flex-1">
                  <h3 className="text-base md:text-lg font-bold text-white truncate pr-4">
                    {items[selectedIndex].title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={closeItem}
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex-1 bg-[#121212] min-h-0 relative">
                {items.length > 1 && (
                  <button
                    onClick={goToPrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-sm shadow-md flex items-center justify-center text-white hover:bg-white/20 transition-all cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                )}

                <iframe
                  src={items[selectedIndex].pdf}
                  className="w-full h-full"
                  title={items[selectedIndex].title}
                  style={{ border: 'none' }}
                />

                {items.length > 1 && (
                  <button
                    onClick={goToNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-sm shadow-md flex items-center justify-center text-white hover:bg-white/20 transition-all cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                )}
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-full">
                {selectedIndex + 1} / {items.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpandableGallery;
