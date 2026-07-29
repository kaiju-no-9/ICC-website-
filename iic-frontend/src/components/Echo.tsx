import React from 'react';
import { motion } from 'framer-motion';

export default function Echo() {
  const magazineCover = "https://lh3.googleusercontent.com/aida-public/AB6AXuBwZrxsQsVy4erK1tGQFohaxEDI1jG2-2J9MWacw2l16Q4frVUj44AbPVRdEgWwq0YJ9ObV6vAjJ-zMOgjX2t7nlfAGApZX-ErNcpOIV2eHCdRBRIJQHxOYNVYkOejUYKnJ6hBAkeM0xVgRbp3XcJsATzzdpES4dpB2BW4rRwhJ4SLl8EIZU1a9VhR8raRTxbuSonH6ESbDT22La-CijaS2LJQT1M0AQC5GlWYtRPOuN5kGMqJ2lchvVt8gdvxNL4FyDRZotULUCTto";
  const doodleImg = "/vector2/data management _ reciept, document, paper, page, woman, people, pages.svg";

  return (
    <section id="initiatives" className="bg-transparent py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Oversized Coral Color-Block Section (Block Coral #ffedd5) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#ffedd5] text-[#0f172a] rounded-[28px] md:rounded-[36px] p-8 md:p-14 lg:p-20 relative overflow-hidden shadow-sm"
        >
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Left: Magazine Showcase + Document Doodle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 flex flex-col items-center gap-6 relative"
            >
              <div className="relative aspect-[3/4] w-full max-w-sm md:max-w-md mx-auto rounded-3xl border border-black/10 overflow-hidden bg-white shadow-lg group">
                <img 
                  src={magazineCover} 
                  alt="SPARK Innovation Journal Edition"
                  loading="lazy"
                  decoding="async"
                  width="448"
                  height="597"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-black/5">
                  <span className="font-mono text-[11px] font-bold text-[#0f172a]/60 uppercase tracking-widest block mb-1">
                    FLAGSHIP JOURNAL
                  </span>
                  <h4 className="font-sans text-[#0f172a] text-lg font-bold">SPARK Innovation Magazine</h4>
                </div>
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2"
            >
              {/* Section Eyebrow (figmaMono) */}
              <div className="mb-4">
                <span className="font-mono text-xs md:text-sm uppercase tracking-[0.35em] text-[#0f172a]/70 font-semibold bg-black/5 px-4 py-1.5 rounded-full inline-block">
                  CAMPUS INITIATIVE
                </span>
              </div>

              <h2 className="font-sans text-4xl sm:text-6xl text-[#0f172a] font-extrabold tracking-tight leading-none mb-3">
                SPARK Journal
              </h2>
              
              <p className="font-mono text-xs sm:text-sm tracking-widest uppercase text-[#0f172a]/70 font-bold mb-6">
                INSPIRE • INNOVATE • CULTIVATE • TRANSFORM
              </p>

              <p className="font-sans text-base md:text-lg text-[#0f172a]/80 leading-relaxed mb-6">
                SPARK is the official innovation and startup journal of IIC JSSATE Noida. SPARK is crafted to evoke curiosity, highlight student patent achievements, showcase campus startup success stories, and offer a fresh outlook on technological innovation.
              </p>

              {/* Publication Doodle Card */}
              <div className="mb-8 p-4 bg-white/40 backdrop-blur-md rounded-2xl border border-black/5 flex items-center gap-4">
                <img src={doodleImg} alt="Journal Document Doodle" loading="lazy" decoding="async" className="w-16 h-16 object-contain pointer-events-none select-none flex-shrink-0 mix-blend-multiply" />
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0f172a]/60 block">RESEARCH & PUBLICATIONS</span>
                  <p className="font-sans text-sm font-semibold text-[#0f172a]">Featuring student patent filings, research papers, and startup success stories across NCR.</p>
                </div>
              </div>

              {/* Pill Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3.5 bg-[#000000] text-white font-sans font-semibold text-base rounded-full hover:bg-neutral-800 transition-all cursor-pointer shadow-md">
                  Read Latest Edition
                </button>
                <button className="px-8 py-3.5 bg-white text-[#0f172a] border border-black/10 font-sans font-semibold text-base rounded-full hover:bg-neutral-100 transition-all cursor-pointer">
                  Explore Initiatives
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}