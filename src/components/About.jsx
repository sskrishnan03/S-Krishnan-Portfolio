import React from 'react';
import stackImage from '../assets/about/image.png';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#121212] py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-gradient-to-tr from-white/[0.06] via-white/[0.02] to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-60 h-60 bg-gradient-to-tl from-white/[0.08] via-white/[0.02] to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-gradient-to-br from-white/[0.05] to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(255,255,255,.03)_25%,rgba(255,255,255,.03)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.03)_75%,rgba(255,255,255,.03)_76%,transparent_77%,transparent),linear-gradient(0deg,transparent_24%,rgba(255,255,255,.03)_25%,rgba(255,255,255,.03)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.03)_75%,rgba(255,255,255,.03)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col md:flex-row gap-16 items-start">

        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">

          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-white/5 transform -translate-x-1/2 z-0"></div>
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-[#333] rounded border border-white/10 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.5)]"></div>

            <div className="bg-[#1E1E1E] w-full max-w-[300px] rounded-3xl shadow-[0_25px_50px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-2 hover:rotate-0 transition-all duration-500 border border-white/10 overflow-hidden">

              <div className="w-full aspect-[3/3.5] overflow-hidden bg-[#1A1A1A]">
                <img
                  src={stackImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="px-6 pb-5 pt-4 relative">
                <div className="text-white/20 text-[10px] font-mono font-bold mb-4">&lt;/&gt;</div>

                <h3 className="text-3xl md:text-4xl font-['Playfair_Display',serif] font-bold text-white leading-none mb-1">
                  S Krishnan
                </h3>

                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D4D4D4] mt-3">
                  Aspiring <span className="text-white">Software</span> Engineer
                </p>

                <div className="flex items-center gap-1.5 mt-5 justify-end">
                  <span className="w-2 h-2 rounded-full bg-white/40" />
                  <span className="w-2 h-2 rounded-full bg-white/40" />
                  <span className="w-2 h-2 rounded-full bg-white/40" />
                </div>
              </div>
            </div>
          </div>

        </div>

        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 mt-8 md:mt-0 relative z-20">

          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-[#D4D4D4] font-bold mb-6 shadow-sm bg-[#1E1E1E]">
            About Me
          </div>

          <p className="text-base md:text-lg leading-relaxed text-[#D4D4D4] mb-5">
            Hi, I'm <span className="text-white font-black">S Krishnan</span>, an aspiring software engineer with a strong interest in designing modern, responsive, and high-performance web applications. I enjoy transforming ideas into real-world digital solutions by applying full-stack development principles, writing clean code, creating intuitive user interfaces, and building scalable backend systems.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-[#D4D4D4] mb-5">
            I continuously explore new technologies, frameworks, and development practices to improve my skills and stay updated with the evolving software industry. Every project I build is an opportunity to learn, solve meaningful problems, and create impactful user experiences.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-[#D4D4D4] mb-5">
            As a dedicated learner and aspiring software engineer, I focus on writing maintainable code, building efficient applications, and delivering solutions that are both functional and visually appealing. My goal is to contribute to innovative products, collaborate with talented teams, and grow into a developer capable of building large-scale applications that make a difference.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-[#D4D4D4] mb-8">
            Outside of coding, I enjoy exploring new technologies, improving my problem-solving abilities, and challenging myself through real-world development projects.
          </p>

          <div className="flex items-center gap-2 text-sm font-semibold">
            <span className="text-white font-black tracking-wide">Build.</span>
            <span className="text-white/20 text-lg">·</span>
            <span className="text-white/70 font-black tracking-wide">Learn.</span>
            <span className="text-white/20 text-lg">·</span>
            <span className="text-white/40 font-black tracking-wide">Repeat.</span>
          </div>

        </div>
      </div>

    </section>
  );
};

export default About;
