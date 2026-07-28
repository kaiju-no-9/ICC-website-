import React from 'react';
import { motion } from 'framer-motion';

export default function AboutUs() {
  const doodleImg = "/vector2/product development _ idea, thought, innovation, people, team, teamwork, working together.svg";

  return (
    <section id="about" className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        {/* Decorative Doodle Star (Top Right of Container) */}
        <div className="absolute -top-6 right-4 z-20 pointer-events-none opacity-80 hidden sm:block">
          <img src="/vector1/Group 12.svg" alt="Doodle Star Accent" className="w-10 h-10 object-contain" />
        </div>

        {/* Oversized Pastel Color-Block Section (Block Lilac) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#e9d5ff] text-[#0f172a] rounded-[28px] md:rounded-[36px] p-8 md:p-14 lg:p-16 relative overflow-hidden shadow-sm"
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between mb-8">
            <div className="w-full lg:w-3/5 relative">
              {/* Section Eyebrow (figmaMono) */}
              <div className="mb-6">
                <span className="font-mono text-xs md:text-sm uppercase tracking-[0.35em] text-[#0f172a]/70 font-semibold bg-black/5 px-4 py-1.5 rounded-full inline-block">
                  ABOUT OUR COUNCIL
                </span>
              </div>
              
              {/* Main Headline with Underline Swirl Accent */}
              <div className="relative mb-6">
                <h2 className="font-sans text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-[#0f172a]">
                  Nurturing campus ideas into scalable startups.
                </h2>
                <div className="w-44 mt-2 pointer-events-none opacity-70">
                  <img src="/vector1/Group 22.svg" alt="Underline Swirl Doodle" className="w-full h-auto object-contain" />
                </div>
              </div>

              {/* Description */}
              <p className="font-sans text-base md:text-xl text-[#0f172a]/85 leading-relaxed font-normal">
                Established under MoE's Innovation Cell (MIC), Institution's Innovation Council (IIC) at JSS Academy of Technical Education, Noida, induces an entrepreneurial mindset into students. We nurture creative ideas, support prototype development, provide mentorship, and connect student enterprises directly from campus to incubators, seed funds, and angel investors.
              </p>
            </div>

            {/* Product Development Doodle Vector Illustration */}
            <div className="w-full lg:w-2/5 flex justify-center items-center">
              <img 
                src={doodleImg}
                alt="Product Development & Innovation Doodle"
                className="w-full max-w-xs md:max-w-sm h-auto object-contain pointer-events-none select-none mix-blend-multiply"
              />
            </div>
          </div>

          {/* Feature Badges / Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#0f172a]/15">
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-black/5">
              <span className="font-mono text-xs uppercase tracking-wider text-[#0f172a]/60 block mb-2">01 · ESTABLISHED UNDER</span>
              <span className="font-sans text-lg md:text-xl font-bold text-[#0f172a]">MoE Innovation Cell</span>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-black/5">
              <span className="font-mono text-xs uppercase tracking-wider text-[#0f172a]/60 block mb-2">02 · CAMPUS REACH</span>
              <span className="font-sans text-lg md:text-xl font-bold text-[#0f172a]">JSSATE Noida</span>
            </div>
            <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-black/5">
              <span className="font-mono text-xs uppercase tracking-wider text-[#0f172a]/60 block mb-2">03 · CORE FOCUS</span>
              <span className="font-sans text-lg md:text-xl font-bold text-[#0f172a]">Incubation & Funding</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}