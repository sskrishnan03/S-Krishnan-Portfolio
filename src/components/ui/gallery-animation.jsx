import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, ChevronLeft, ChevronRight, Download, Calendar,
  ArrowUpRight, Award, ScrollText,
} from 'lucide-react';

const particles = [
  { top: '18%', left: '40%', size: 2, delay: 0 },
  { top: '42%', left: '55%', size: 1.5, delay: 0.6 },
  { top: '68%', left: '30%', size: 2, delay: 1.2 },
];

const pillColors = [
  { bg: '#EFF6FF', text: '#3B82F6' },
  { bg: '#F0FDF4', text: '#22C55E' },
  { bg: '#FFF7ED', text: '#F97316' },
  { bg: '#F5F3FF', text: '#8B5CF6' },
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
                  ? `0 35px 100px ${item.accent1}2e`
                  : '0 4px 12px rgba(20,40,120,0.06)',
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
                border: '1px solid rgba(255,255,255,0.8)',
                background: '#ffffff',
                height: 390,
                overflow: 'hidden',
              }}
            >
              {/* === BACKGROUND LAYERS === */}

              {/* Subtle diagonal reflection */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 30%, transparent 70%, rgba(255,255,255,0.04) 100%)',
                  opacity: isActive ? 0.12 : 0.3,
                  transition: 'opacity 0.65s ease',
                }}
              />

              {/* Pastel bottom gradient (collapsed only) */}
              <div
                className="absolute bottom-0 left-0 right-0 pointer-events-none"
                style={{
                  height: '50%',
                  background: `linear-gradient(to top, ${item.accent1}0d, transparent)`,
                  opacity: isActive ? 0 : 1,
                  transition: 'opacity 0.65s ease',
                }}
              />

              {/* Inner accent border */}
              <motion.div
                className="absolute inset-0 rounded-[32px] pointer-events-none"
                animate={{
                  opacity: isActive ? 1 : 0,
                  boxShadow: isActive
                    ? `inset 0 0 0 1px ${item.accent1}15`
                    : 'inset 0 0 0 0 transparent',
                }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* ======= COLLAPSED TEASER ======= */}
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
                {/* Number */}
                <span
                  className="font-extrabold"
                  style={{ fontSize: 20, color: item.accent1 }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Icon */}
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: '50%',
                    background: `${item.accent1}14`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 6,
                  }}
                >
                  <Award style={{ width: 11, height: 11, color: item.accent1 }} />
                </div>

                {/* Accent line */}
                <div
                  style={{
                    width: 2,
                    height: 28,
                    borderRadius: 1,
                    background: `linear-gradient(to bottom, ${item.accent1}, ${item.accent1}30)`,
                    boxShadow: `0 0 6px ${item.accent1}25`,
                    marginTop: 8,
                  }}
                />

                {/* Placeholder lines */}
                <div
                  className="flex flex-col items-center"
                  style={{ gap: 5, marginTop: 12, width: '75%' }}
                >
                  <div
                    style={{
                      height: 4,
                      width: '100%',
                      borderRadius: 2,
                      background: `${item.accent1}10`,
                    }}
                  />
                  <div
                    style={{
                      height: 4,
                      width: '65%',
                      borderRadius: 2,
                      background: `${item.accent1}08`,
                    }}
                  />
                </div>

                {/* Particles */}
                {particles.map((p, i) => (
                  <motion.div
                    key={i}
                    className="absolute pointer-events-none"
                    style={{
                      top: p.top,
                      left: p.left,
                      width: p.size,
                      height: p.size,
                      borderRadius: '50%',
                      background: item.accent1,
                      opacity: 0.15,
                    }}
                    animate={{
                      opacity: [0.08, 0.2, 0.08],
                      y: [0, -2, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3 + i * 0.5,
                      delay: p.delay,
                      ease: 'easeInOut',
                    }}
                  />
                ))}

                {/* Status dot */}
                <div
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    background: '#22C55E',
                    boxShadow: '0 0 5px rgba(34,197,94,0.35)',
                    marginTop: 'auto',
                    marginBottom: 3,
                  }}
                />
              </motion.div>

              {/* ======= EXPANDED CONTENT ======= */}
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
                {/* Background number */}
                <div
                  className="absolute pointer-events-none select-none"
                  style={{
                    right: 16,
                    bottom: 6,
                    fontSize: 180,
                    fontWeight: 900,
                    color: `${item.accent1}06`,
                    lineHeight: 1,
                    letterSpacing: '-8px',
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Badge row: icon + label */}
                <div
                  className="flex items-center shrink-0"
                  style={{ gap: 10 }}
                >
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 10,
                      background: `${item.accent1}0c`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <ScrollText style={{ width: 18, height: 18, color: item.accent1 }} />
                  </div>
                  <span
                    className="font-bold uppercase"
                    style={{ fontSize: 10, letterSpacing: '4px', color: item.accent1 }}
                  >
                    Certificate
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="font-extrabold leading-[1.1]"
                  style={{
                    fontSize: 26,
                    color: '#0F172A',
                    marginTop: 18,
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {item.title}
                </h3>

                {/* Provider */}
                <span
                  className="font-medium"
                  style={{ fontSize: 14, color: '#64748B', marginTop: 6 }}
                >
                  {item.subtitle}
                </span>

                {/* Date + ID */}
                <div
                  className="flex items-center"
                  style={{ gap: 6, marginTop: 14 }}
                >
                  <Calendar style={{ width: 12, height: 12, color: '#94A3B8' }} />
                  <span
                    className="font-medium"
                    style={{ fontSize: 12, color: '#94A3B8' }}
                  >
                    Issued {item.date}
                  </span>

                </div>

                {/* Skills pills */}
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
                          border: '1px solid rgba(79,70,229,0.08)',
                        }}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>

                {/* Spacer */}
                <div style={{ flex: 1 }} />

                {/* CTA */}
                <div style={{ paddingTop: 8 }}>
                  <span
                    className="inline-flex items-center font-extrabold cursor-pointer"
                    style={{ fontSize: 13, color: item.accent1, gap: 6, letterSpacing: '0.5px' }}
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
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl h-[85vh] md:h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="flex items-center justify-between px-6 py-4 border-b border-gray-100 shrink-0"
                style={{ background: `${items[selectedIndex].accent1}04` }}
              >
                <div className="min-w-0 flex-1">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 truncate pr-4">
                    {items[selectedIndex].title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-400 font-medium mt-0.5">
                    {items[selectedIndex].subtitle} &middot; {items[selectedIndex].date}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={items[selectedIndex].pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold border transition-all duration-200 hover:text-white"
                    style={{
                      color: items[selectedIndex].accent1,
                      borderColor: `${items[selectedIndex].accent1}25`,
                      background: `${items[selectedIndex].accent1}06`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = items[selectedIndex].accent1;
                      e.currentTarget.style.borderColor = items[selectedIndex].accent1;
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = `${items[selectedIndex].accent1}06`;
                      e.currentTarget.style.borderColor = `${items[selectedIndex].accent1}25`;
                      e.currentTarget.style.color = items[selectedIndex].accent1;
                    }}
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download
                  </a>
                  <button
                    onClick={closeItem}
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all duration-200 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex-1 bg-gray-100 min-h-0 relative">
                {items.length > 1 && (
                  <button
                    onClick={goToPrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center text-gray-700 hover:bg-white transition-all cursor-pointer"
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
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center text-gray-700 hover:bg-white transition-all cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                )}
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-full">
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
