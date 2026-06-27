import React from 'react';
import stackImage from '../assets/about/image.png';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-white py-16 md:py-20 overflow-hidden">
      {/* Colorful background accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-br from-pink-400/20 via-purple-400/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-gradient-to-tr from-blue-400/15 via-cyan-400/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-60 h-60 bg-gradient-to-tl from-orange-400/15 via-red-400/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-gradient-to-br from-violet-400/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(0,0,0,.03)_25%,rgba(0,0,0,.03)_26%,transparent_27%,transparent_74%,rgba(0,0,0,.03)_75%,rgba(0,0,0,.03)_76%,transparent_77%,transparent),linear-gradient(0deg,transparent_24%,rgba(0,0,0,.03)_25%,rgba(0,0,0,.03)_26%,transparent_27%,transparent_74%,rgba(0,0,0,.03)_75%,rgba(0,0,0,.03)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: Signature Card */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black/10 transform -translate-x-1/2 z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Premium Signature Card */}
            <div className="bg-white w-full max-w-[300px] rounded-3xl shadow-[0_25px_50px_rgba(0,0,0,0.12)] relative z-20 transform -rotate-2 hover:rotate-0 transition-all duration-500 border border-gray-100 overflow-hidden">
              
              {/* Photo */}
              <div className="w-full aspect-[3/3.5] overflow-hidden bg-gray-50">
                <img 
                  src={stackImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Signature section */}
              <div className="px-6 pb-5 pt-4 relative">
                {/* </> icon top-left */}
                <div className="text-purple-500/30 text-[10px] font-mono font-bold mb-4">&lt;/&gt;</div>

                {/* Name in elegant serif font */}
                <h3 className="text-3xl md:text-4xl font-['Playfair_Display',serif] font-bold text-[#0a1628] leading-none mb-1">
                  S Krishnan
                </h3>

                {/* Subtitle - clean minimal */}
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-400 mt-3">
                  Aspiring <span className="text-gray-500">Software</span> Engineer
                </p>

                {/* Three accent dots bottom-right */}
                <div className="flex items-center gap-1.5 mt-5 justify-end">
                  <span className="w-2 h-2 rounded-full bg-purple-400/60" />
                  <span className="w-2 h-2 rounded-full bg-blue-400/60" />
                  <span className="w-2 h-2 rounded-full bg-red-400/60" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 mt-8 md:mt-0 relative z-20">
          
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-6 shadow-sm bg-white">
            About Me
          </div>

          <p className="text-base md:text-lg leading-relaxed text-gray-600 mb-5">
            Hi, I'm <span className="text-gray-900 font-black">S Krishnan</span>, an aspiring software engineer with a strong interest in designing modern, responsive, and high-performance web applications. I enjoy transforming ideas into real-world digital solutions by applying full-stack development principles, writing clean code, creating intuitive user interfaces, and building scalable backend systems.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-gray-600 mb-5">
            I continuously explore new technologies, frameworks, and development practices to improve my skills and stay updated with the evolving software industry. Every project I build is an opportunity to learn, solve meaningful problems, and create impactful user experiences.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-gray-600 mb-5">
            As a dedicated learner and aspiring software engineer, I focus on writing maintainable code, building efficient applications, and delivering solutions that are both functional and visually appealing. My goal is to contribute to innovative products, collaborate with talented teams, and grow into a developer capable of building large-scale applications that make a difference.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-gray-600 mb-8">
            Outside of coding, I enjoy exploring new technologies, improving my problem-solving abilities, and challenging myself through real-world development projects.
          </p>

          <div className="flex items-center gap-2 text-sm font-semibold">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Build.
            </span>
            <span className="text-gray-300">·</span>
            <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Learn.
            </span>
            <span className="text-gray-300">·</span>
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Repeat.
            </span>
          </div>

        </div>
      </div>

    </section>
  );
};

export default About;
