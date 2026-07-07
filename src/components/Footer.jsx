import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-[#D4D4D4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh] border-t border-white/10">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          <p>Full-Stack Development</p>
          <p>Frontend &bull; Backend</p>
          <p>UI/UX Design</p>
          <p>Problem Solving</p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <p>Fresh Graduate &middot; Entry Level</p>
          <a href="#projects" className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-1">View Projects</a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <p>Available for</p>
          <p>Internships &amp; Full-Time</p>
          <p className="text-white/80">2026</p>
        </div>
      </div>

      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
        <h2 className="text-[18vw] md:text-[16vw] leading-none font-sans font-bold tracking-tighter select-none text-white/[0.06] w-full text-center">
          S Krishnan
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-6">
          <a href="#contact" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">Contact</a>
          <p className="text-white/60 font-mono text-[9px] md:text-[10px]">
            &copy; {new Date().getFullYear()} S Krishnan Studio | Built with React
          </p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <a href="mailto:sskrishnan03@gmail.com" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase">sskrishnan03@gmail.com</a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <a href="#" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
