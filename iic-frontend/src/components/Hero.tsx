import React from 'react';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center text-center px-4 md:px-12 overflow-hidden bg-white text-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/hero-bg.jpg"
          alt="IIC Doodle Banner - Making startups from the ground up for the future"
          className="w-full h-full object-contain sm:object-cover object-center"
        />
      </div>

      {/* Doodle Star Accent (Top Right) */}
      <div className="absolute top-28 right-12 md:right-24 z-10 opacity-75 pointer-events-none hidden sm:block">
        <img src="/vector1/Group 18.svg" alt="Doodle Star Accent" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
      </div>

      {/* Social Sidebar */}
      <div className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 z-20">
        <div className="w-px h-16 bg-black/20 mx-auto"></div>
        <a href="#contact" className="text-black/70 hover:text-black transition-colors duration-300">
          <span className="material-symbols-outlined">qr_code_2</span>
        </a>
        <a href="#contact" className="text-black/70 hover:text-black transition-colors duration-300">
          <span className="material-symbols-outlined">link</span>
        </a>
        <a href="#contact" className="text-black/70 hover:text-black transition-colors duration-300">
          <span className="material-symbols-outlined">share</span>
        </a>
        <a href="#contact" className="text-black/70 hover:text-black transition-colors duration-300">
          <span className="material-symbols-outlined">alternate_email</span>
        </a>
      </div>

      {/* Scroll Indicator */}
      <div 
        onClick={() => scrollTo('about')}
        className="absolute right-6 lg:right-12 bottom-12 z-20 hidden md:flex flex-col items-center gap-4 cursor-pointer group"
      >
        <span className="font-mono text-xs uppercase tracking-[0.3em] rotate-90 origin-right whitespace-nowrap mb-12 text-black/70 group-hover:text-black transition-colors font-semibold">
          SCROLL DOWN →
        </span>
      </div>

      {/* Content Container (Lower part of Hero) */}
      <div className="relative z-10 max-w-5xl px-4 mt-auto mb-16 md:mb-24 flex flex-col items-center">
        <div>
          <button 
            onClick={() => scrollTo('events')}
            className="px-10 py-4 bg-black text-white font-sans font-semibold text-sm hover:bg-neutral-800 transition-all duration-300 tracking-widest uppercase cursor-pointer rounded-full shadow-2xl inline-flex items-center gap-2 border border-black"
          >
            <span>EXPLORE INITIATIVES</span>
            <span className="font-mono text-xs">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}