import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';

const initiatives = [
  {
    tag: '01 · INCUBATION',
    title: 'Student Founders',
    desc: 'Transform campus ideas into market-ready prototypes with incubation support, seed grants, and IP guidance.',
    img: '/card/hat.png',
  },
  {
    tag: '02 · CHALLENGES',
    title: 'Campus Innovators',
    desc: 'Compete in high-energy 24-hour hackathons, ideathons, and problem-solving sprints for real industry challenges.',
    img: '/card/puzzle.png',
  },
  {
    tag: '03 · TEAMWORK',
    title: 'Cross-Functional Teams',
    desc: 'Bring together tech, design, and business minds to build scalable startups from scratch right on campus.',
    img: '/card/message.png',
  },
  {
    tag: '04 · IPR & PATENTS',
    title: 'Research & IP Creators',
    desc: 'Attend masterclasses on Intellectual Property Rights (IPR), patent filings, and commercialization strategies.',
    img: '/card/papper.png',
  },
  {
    tag: '05 · ECOSYSTEM',
    title: 'Regional Ecosystem',
    desc: 'Network with angel investors, VC firms, incubators, and industry leaders through our flagship Innovation Summit.',
    img: '/card/butterfly.png',
  },
  {
    tag: '06 · INTERNSHIPS',
    title: 'Interns & Aspirants',
    desc: 'Gain hands-on experience through the Startup Internship Programme in fast-growing incubators and innovation labs.',
    img: '/card/hearts.png',
  },
];

export default function Events() {
  const [, setLocation] = useLocation();
  const doodleImg = "/vector2/achievements _ teamwork, team, working together, assistance, man, woman, people, flag, target.svg";

  return (
    <section id="events" className="bg-transparent py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Signature Lime Color Block Container (Block Lime #e4f5a3) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#e4f5a3] text-[#0f172a] rounded-[28px] md:rounded-[36px] p-8 md:p-14 lg:p-16 relative overflow-hidden shadow-sm"
        >
          {/* Decorative Sparkle (Top Right inside Block) */}
          <div className="absolute top-6 right-8 z-10 pointer-events-none opacity-70 hidden sm:block">
            <img src="/vector1/Group 18 (1).svg" alt="Sparkle Doodle Accent" className="w-8 h-8 object-contain" />
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between mb-12">
            <div className="max-w-3xl relative">
              {/* Section Eyebrow (figmaMono) */}
              <div className="mb-4">
                <span className="font-mono text-xs md:text-sm uppercase tracking-[0.35em] text-[#0f172a]/70 font-semibold bg-black/5 px-4 py-1.5 rounded-full inline-block">
                  WHAT WE DO
                </span>
              </div>

              {/* Section Headline */}
              <h2 className="font-sans text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-[#0f172a]">
                Empowering Every Stage of Student Innovation
              </h2>
            </div>

            {/* Achievement Teamwork Doodle Vector */}
            <div className="w-full lg:w-72 flex-shrink-0 flex justify-center relative">
              <img 
                src={doodleImg}
                alt="Teamwork & Target Achievements Doodle"
                className="w-full max-w-[220px] h-auto object-contain pointer-events-none select-none mix-blend-multiply"
              />
            </div>
          </div>

          {/* 6 Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((item) => (
              <div
                key={item.title}
                className="bg-white/95 p-8 rounded-3xl relative overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-black/5 flex flex-col justify-between group"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  loading="lazy"
                  decoding="async"
                  className="h-36 sm:h-40 w-auto absolute z-0 -right-6 -bottom-6 object-contain pointer-events-none select-none grayscale opacity-20 group-hover:opacity-35 group-hover:scale-105 transition-transform duration-500"
                />
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#0f172a]/50 font-semibold block mb-3 relative z-10">
                    {item.tag}
                  </span>
                  <h3 className="font-sans text-2xl font-bold mb-3 relative z-10 text-[#0f172a]">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm md:text-base text-[#0f172a]/80 leading-relaxed relative z-10">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Action CTA Pill */}
          <div className="mt-12 text-center sm:text-left">
            <button 
              onClick={() => setLocation('/events')}
              className="px-8 py-3.5 bg-[#000000] text-white font-sans font-semibold text-base rounded-full hover:bg-neutral-800 transition-all duration-300 shadow-md cursor-pointer inline-flex items-center gap-2"
            >
              <span>View Upcoming Events</span>
              <span className="font-mono text-xs">→</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}