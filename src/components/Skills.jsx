import React from 'react';
import { motion } from 'framer-motion';
 
const Skills = () => {
  const skillsData = [
    {
      category: 'Frontend Development',
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      category: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'Java', 'Python', 'REST APIs', 'JWT Auth', 'MySQL'],
    },
    {
      category: 'AI & Machine Learning',
      skills: ['Machine Learning', 'NLP', 'Generative AI', 'LLMs', 'Prompt Engineering'],
    },
    {
      category: 'Tools & Cloud',
      skills: ['Git', 'GitHub', 'Docker', 'Linux', 'CI/CD', 'AWS','Figma'],
    },
  ];
 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };
 
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };
 
  const skillPillVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.08,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
  };
 
  const SkillCard = ({ category, skills, index }) => {
    return (
      <motion.div
        variants={itemVariants}
        whileHover={{
          y: -8,
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
          },
        }}
        className="group relative bg-[#1E1E1E] border border-white/10 rounded-3xl p-6 h-fit shadow-sm hover:shadow-xl hover:shadow-white/5 transition-all duration-500"
      >
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/5 transition-all duration-500 pointer-events-none" />
 
        <div className="relative z-10">
          <h3 className="text-sm font-semibold text-white mb-4 tracking-tight">
            {category}
          </h3>
 
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <motion.button
                key={idx}
                variants={skillPillVariants}
                initial="initial"
                whileHover="hover"
                className="px-3 py-1.5 text-xs font-medium text-[#D4D4D4] bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full transition-all duration-300 cursor-default select-none hover:text-white"
              >
                {skill}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };
 
  return (
    <section id="skills" className="relative w-full bg-[#121212] py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(255,255,255,.02)_25%,rgba(255,255,255,.02)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.02)_75%,rgba(255,255,255,.02)_76%,transparent_77%,transparent),linear-gradient(0deg,transparent_24%,rgba(255,255,255,.02)_25%,rgba(255,255,255,.02)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.02)_75%,rgba(255,255,255,.02)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
      </div>
 
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-10 md:mb-12"
        >
          <div className="mb-3">
            <span className="inline-block text-xs font-semibold text-[#D4D4D4] uppercase tracking-widest px-3 py-1.5 bg-white/5 border border-white/10 rounded-full">
              Technical Stack
            </span>
          </div>
 
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-2 tracking-tight">
            Technologies I Work With
          </h2>
 
          <p className="text-sm text-[#D4D4D4] font-normal">
            Full-stack expertise across modern development, AI, and cloud infrastructure.
          </p>
        </motion.div>
 
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
        >
          {skillsData.map((item, idx) => (
            <SkillCard
              key={idx}
              category={item.category}
              skills={item.skills}
              index={idx}
            />
          ))}
        </motion.div>
      </div>
 
      <motion.div
        animate={{
          y: [0, 8, 0],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-3xl pointer-events-none"
      />
 
      <motion.div
        animate={{
          y: [0, -8, 0],
          opacity: [0.02, 0.04, 0.02],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-20 left-5 w-40 h-40 bg-white rounded-full blur-3xl pointer-events-none"
      />
    </section>
  );
};
 
export default Skills;
