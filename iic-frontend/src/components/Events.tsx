import React from 'react';
import { motion } from 'framer-motion';

const initiatives = [
  {
    tag: '01 · INCUBATION',
    title: 'Student Founders',
    desc: 'Transform campus ideas into market-ready prototypes with incubation support, seed grants, and IP guidance.',
    svg: (
      <svg className="h-28 w-auto absolute z-0 -right-4 -bottom-6 text-black/10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    tag: '02 · CHALLENGES',
    title: 'Campus Innovators',
    desc: 'Compete in high-energy 24-hour hackathons, ideathons, and problem-solving sprints for real industry challenges.',
    svg: (
      <svg className="h-28 w-auto absolute z-0 -right-4 -bottom-6 text-black/10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    tag: '03 · TEAMWORK',
    title: 'Cross-Functional Teams',
    desc: 'Bring together tech, design, and business minds to build scalable startups from scratch right on campus.',
    svg: (
      <svg className="h-28 w-auto absolute z-0 -right-4 -bottom-6 text-black/10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    tag: '04 · IPR & PATENTS',
    title: 'Research & IP Creators',
    desc: 'Attend masterclasses on Intellectual Property Rights (IPR), patent filings, and commercialization strategies.',
    svg: (
      <svg className="h-28 w-auto absolute z-0 -right-4 -bottom-6 text-black/10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    tag: '05 · ECOSYSTEM',
    title: 'Regional Ecosystem',
    desc: 'Network with angel investors, VC firms, incubators, and industry leaders through our flagship Innovation Summit.',
    svg: (
      <svg className="h-28 w-auto absolute z-0 -right-4 -bottom-6 text-black/10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c-4 0-8 3-8 8s8 12 8 12 8-7 8-12-4-8-8-8z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    tag: '06 · INTERNSHIPS',
    title: 'Interns & Aspirants',
    desc: 'Gain hands-on experience through the Startup Internship Programme in fast-growing incubators and innovation labs.',
    svg: (
      <svg className="h-28 w-auto absolute z-0 -right-4 -bottom-6 text-black/10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
];

export default function Events() {
  const doodleImg = "/vector2/achievements _ teamwork, team, working together, assistance, man, woman, people, flag, target.svg";

  return (
    <section id="events" className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            {initiatives.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white/80 backdrop-blur-md p-8 rounded-3xl relative overflow-hidden shadow-sm hover:shadow-md transition-all border border-black/5 flex flex-col justify-between"
              >
                {item.svg}
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
              </motion.div>
            ))}
          </div>

          {/* Action CTA Pill */}
          <div className="mt-12 text-center sm:text-left">
            <button className="px-8 py-3.5 bg-[#000000] text-white font-sans font-semibold text-base rounded-full hover:bg-neutral-800 transition-all duration-300 shadow-md cursor-pointer inline-flex items-center gap-2">
              <span>View Upcoming Events</span>
              <span className="font-mono text-xs">→</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}