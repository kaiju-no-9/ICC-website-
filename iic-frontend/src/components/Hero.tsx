import React from 'react';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[100dvh] w-full flex flex-col items-center justify-between text-center px-4 sm:px-6 md:px-12 overflow-hidden bg-white text-[#060016] pt-20 pb-8 sm:py-0">
      {/* Central Background Image Container (Fully Unblocked) */}
      <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center pointer-events-none">
        <img
          src="/hero/ref_.png_2K_202607291341.svg"
          alt="IIC Hero Doodle Illustration"
          fetchPriority="high"
          decoding="async"
          width="2752"
          height="1536"
          className="w-full h-full object-cover object-center sm:object-cover opacity-85"
        />
      </div>

      {/* Flooded Surrounding SVG Components Layer (Organic 3-Ring Field Grid) */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
        {/* === TOP-LEFT QUADRANT === */}
        {/* 1. Top-Left Outer */}
        <img
          src="/hero/hero-int/Group 59436.svg"
          alt="Hero Accent 59436"
          loading="lazy"
          decoding="async"
          width="395"
          height="593"
          className="absolute top-[6%] left-[4%] sm:top-[8%] sm:left-[6%] w-12 sm:w-20 md:w-28 h-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 pointer-events-auto cursor-pointer"
        />
        {/* 2. Upper Mid-Left Field */}
        <img
          src="/hero/hero-int/Group 59437.svg"
          alt="Hero Accent 59437"
          loading="lazy"
          decoding="async"
          width="298"
          height="465"
          className="absolute top-[18%] left-[18%] sm:top-[20%] sm:left-[20%] w-10 sm:w-16 md:w-24 h-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 pointer-events-auto cursor-pointer"
        />
        {/* 3. Middle-Left Outer Field */}
        <img
          src="/hero/hero-int/Group 59429.svg"
          alt="Hero Accent 59429"
          loading="lazy"
          decoding="async"
          width="872"
          height="2475"
          className="absolute top-[42%] -translate-y-1/2 left-[5%] sm:left-[8%] w-10 sm:w-16 md:w-24 h-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 pointer-events-auto cursor-pointer"
        />
        {/* 4. Lower Mid-Left Field */}
        <img
          src="/hero/hero-int/Group 59442.svg"
          alt="Hero Accent 59442"
          loading="lazy"
          decoding="async"
          width="154"
          height="553"
          className="absolute top-[62%] left-[16%] sm:left-[20%] w-8 sm:w-12 md:w-16 h-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 pointer-events-auto cursor-pointer"
        />

        {/* === TOP-RIGHT QUADRANT === */}
        {/* 5. Top-Right Outer */}
        <img
          src="/hero/hero-int/Group 59441.svg"
          alt="Hero Accent 59441"
          loading="lazy"
          decoding="async"
          width="472"
          height="421"
          className="absolute top-[6%] right-[4%] sm:top-[8%] sm:right-[6%] w-12 sm:w-20 md:w-28 h-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 pointer-events-auto cursor-pointer"
        />
        {/* 6. Upper Mid-Right Field */}
        <img
          src="/hero/hero-int/Group 59440.svg"
          alt="Hero Accent 59440"
          loading="lazy"
          decoding="async"
          width="371"
          height="411"
          className="absolute top-[18%] right-[18%] sm:top-[20%] sm:right-[20%] w-10 sm:w-16 md:w-24 h-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 pointer-events-auto cursor-pointer"
        />
        {/* 7. Middle-Right Outer Field */}
        <img
          src="/hero/hero-int/Group 59443.svg"
          alt="Hero Accent 59443"
          loading="lazy"
          decoding="async"
          width="390"
          height="525"
          className="absolute top-[42%] -translate-y-1/2 right-[5%] sm:right-[8%] w-10 sm:w-16 md:w-24 h-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 pointer-events-auto cursor-pointer"
        />
        {/* 8. Lower Mid-Right Field */}
        <img
          src="/hero/hero-int/Group 59445.svg"
          alt="Hero Accent 59445"
          loading="lazy"
          decoding="async"
          width="532"
          height="374"
          className="absolute top-[60%] right-[16%] sm:right-[20%] w-10 sm:w-16 md:w-24 h-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 pointer-events-auto cursor-pointer"
        />

        {/* === BOTTOM QUADRANT === */}
        {/* 9. Bottom-Left Corner */}
        <img
          src="/hero/hero-int/Group 59448.svg"
          alt="Hero Accent 59448"
          loading="lazy"
          decoding="async"
          width="551"
          height="569"
          className="absolute bottom-[6%] left-[4%] sm:bottom-[8%] sm:left-[6%] w-12 sm:w-20 md:w-28 h-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 pointer-events-auto cursor-pointer"
        />
        {/* 10. Bottom Mid-Left Field */}
        <img
          src="/hero/hero-int/Group 59449.svg"
          alt="Hero Accent 59449"
          loading="lazy"
          decoding="async"
          width="487"
          height="233"
          className="absolute bottom-[14%] left-[22%] sm:bottom-[16%] sm:left-[24%] w-12 sm:w-20 md:w-28 h-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 pointer-events-auto cursor-pointer"
        />
        {/* 11. Bottom Mid-Right Field */}
        <img
          src="/hero/hero-int/Group 59456.svg"
          alt="Hero Accent 59456"
          loading="lazy"
          decoding="async"
          width="1021"
          height="596"
          className="absolute bottom-[14%] right-[22%] sm:bottom-[16%] sm:right-[24%] w-14 sm:w-22 md:w-32 h-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 pointer-events-auto cursor-pointer"
        />
        {/* 12. Bottom-Right Corner */}
        <img
          src="/hero/hero-int/Group 59457.svg"
          alt="Hero Accent 59457"
          loading="lazy"
          decoding="async"
          width="628"
          height="614"
          className="absolute bottom-[6%] right-[4%] sm:bottom-[8%] sm:right-[6%] w-12 sm:w-20 md:w-28 h-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300 pointer-events-auto cursor-pointer"
        />
      </div>

      {/* Decorative Star Accent (Top Right) */}
      <div className="absolute top-24 sm:top-28 right-6 sm:right-12 md:right-24 z-10 opacity-75 pointer-events-none hidden sm:block">
        <img src="/vector1/Group 18.svg" alt="Doodle Star Accent" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain" />
      </div>

      {/* Social Sidebar (Desktop) */}
      <div className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 z-20">
        <div className="w-px h-16 bg-[#060016]/20 mx-auto"></div>
        <a href="#contact" className="text-[#060016]/70 hover:text-[#060016] transition-colors duration-300">
          <span className="material-symbols-outlined">qr_code_2</span>
        </a>
        <a href="#contact" className="text-[#060016]/70 hover:text-[#060016] transition-colors duration-300">
          <span className="material-symbols-outlined">link</span>
        </a>
        <a href="#contact" className="text-[#060016]/70 hover:text-[#060016] transition-colors duration-300">
          <span className="material-symbols-outlined">share</span>
        </a>
        <a href="#contact" className="text-[#060016]/70 hover:text-[#060016] transition-colors duration-300">
          <span className="material-symbols-outlined">alternate_email</span>
        </a>
      </div>

      {/* Desktop Scroll Indicator */}
      <div 
        onClick={() => scrollTo('about')}
        className="absolute right-6 lg:right-12 bottom-12 z-20 hidden md:flex flex-col items-center gap-4 cursor-pointer group"
      >
        <span className="font-mono text-xs uppercase tracking-[0.3em] rotate-90 origin-right whitespace-nowrap mb-12 text-[#060016]/70 group-hover:text-[#060016] transition-colors font-semibold">
          SCROLL DOWN
        </span>
      </div>

      {/* Hero Central Focal Point (Balanced Soft White Text Halo Glow) */}
      <div className="relative z-10 my-auto flex flex-col items-center max-w-4xl px-4 pt-16 sm:pt-20 pb-6 font-rinter">
        {/* Eyebrow Pill */}
        <div className="mb-4">
          <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.35em] text-[#060016] font-bold bg-white/85 shadow-xs border border-black/10 px-4.5 py-1.5 rounded-full inline-block backdrop-blur-xs">
            INSTITUTION'S INNOVATION COUNCIL
          </span>
        </div>

        {/* Focal Point "IIC" Display Title with Medium Soft White Halo */}
        <h1 className="font-rinter text-7xl sm:text-9xl md:text-[10rem] lg:text-[12rem] font-extrabold tracking-tighter leading-none text-[#060016] mb-3 select-none drop-shadow-[0_2px_8px_rgba(255,255,255,0.85)] [text-shadow:_0_0_12px_rgba(255,255,255,0.75)]">
          IIC
        </h1>

        {/* Inspiring Quote with Medium Soft White Halo */}
        <p className="font-rinter text-base sm:text-xl md:text-2xl font-extrabold text-[#060016] max-w-2xl leading-snug tracking-tight mb-8 drop-shadow-[0_2px_6px_rgba(255,255,255,0.85)] [text-shadow:_0_0_10px_rgba(255,255,255,0.7)]">
          “Empowering Student Innovation & Building Tomorrow's Startups From the Ground Up.”
        </p>

        {/* Action CTA Button (UNTOUCHED) */}
        <button 
          onClick={() => scrollTo('events')}
          className="px-8 sm:px-10 py-3.5 sm:py-4 bg-[#060016] text-white font-rinter font-semibold text-xs sm:text-sm hover:bg-neutral-800 transition-all duration-300 tracking-widest uppercase cursor-pointer rounded-full shadow-2xl inline-flex items-center justify-center border border-[#060016] active:scale-95"
        >
          <span>EXPLORE INITIATIVES</span>
        </button>
      </div>

      {/* Mobile Scroll Indicator Pill */}
      <div 
        onClick={() => scrollTo('about')}
        className="relative z-10 flex sm:hidden items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-[#060016]/80 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-black/10 shadow-xs cursor-pointer mb-4 font-bold"
      >
        <span>SCROLL TO EXPLORE</span>
      </div>
    </section>
  );
}