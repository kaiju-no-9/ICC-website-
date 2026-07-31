import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const socialDoodle = "/vector2/social media _ hashtag, number, numbers, man, people, tags, tag.svg";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer id="contact" className="bg-[#0b0c10] text-white/80 py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Big Wordmark Header */}
        <div className="mb-16 pb-12 border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border border-white/20 flex-shrink-0 bg-white shadow-lg p-1">
              <img src="/moe-iic-logo.jpg" alt="Official MoE IIC Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.35em] text-[#e4f5a3] block mb-2 font-semibold">
                INSTITUTION'S INNOVATION COUNCIL
              </span>
              <h2 className="font-sans text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tighter leading-none">
                IIC JSS NOIDA
              </h2>
            </div>
          </div>
          <div className="flex gap-3">
            <a href="#home" className="px-6 py-2.5 bg-white/10 backdrop-blur-md text-white font-sans text-sm font-semibold rounded-full border border-white/15 hover:bg-white hover:text-black transition-all">
              Back to Top ↑
            </a>
          </div>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1: Core Pillars */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/50 font-semibold block">
              CORE PILLARS
            </span>
            <ul className="flex flex-col gap-3 font-sans text-base text-white/80 font-normal">
              <li className="hover:text-[#e4f5a3] transition-colors cursor-pointer w-fit">01 · Ideate & Prototype</li>
              <li className="hover:text-[#e4f5a3] transition-colors cursor-pointer w-fit">02 · Innovate & File IP</li>
              <li className="hover:text-[#e4f5a3] transition-colors cursor-pointer w-fit">03 · Incubate & Pitch</li>
              <li className="hover:text-[#e4f5a3] transition-colors cursor-pointer w-fit">04 · Startup Internships</li>
            </ul>
          </div>

          {/* Column 2: Social & Community */}
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/50 font-semibold block">
              CONNECT WITH US
            </span>
            <div className="grid grid-cols-2 gap-3 font-sans text-base text-white/80 font-normal mb-2">
              <a href="https://www.linkedin.com/company/iic-jssaten/posts/" target="_blank" rel="noopener noreferrer" className="hover:text-[#e4f5a3] transition-colors">LinkedIn ↗</a>
              <a href="https://www.instagram.com/iic.jssaten/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-[#e4f5a3] transition-colors">Instagram ↗</a>
              <a href="https://www.linkedin.com/company/iic-jssaten/posts/" target="_blank" rel="noopener noreferrer" className="hover:text-[#e4f5a3] transition-colors">X (Twitter) ↗</a>
              <a href="https://whatsapp.com/channel/0029Vb93O53GE56qqFW7E800" target="_blank" rel="noopener noreferrer" className="hover:text-[#e4f5a3] transition-colors">WhatsApp ↗</a>
            </div>
            {/* Social Doodle Illustration */}
            <img src={socialDoodle} alt="Social Community Doodle" loading="lazy" decoding="async" className="w-36 h-auto object-contain pointer-events-none select-none opacity-90" />
          </div>

          {/* Column 3: Get Notified Newsletter */}
          <div className="flex flex-col gap-4 relative">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/50 font-semibold block">
              GET NOTIFIED
            </span>
            
            {/* Doodle Accent Squiggle Line */}
            <div className="w-20 pointer-events-none opacity-50 -mt-2">
              <img src="/vector1/Group 16.svg" alt="Doodle Accent Squiggle" loading="lazy" decoding="async" className="w-full h-auto object-contain invert" />
            </div>

            <p className="font-sans text-sm text-white/70 leading-relaxed">
              Stay updated on upcoming hackathons, innovation summits, and campus startup calls.
            </p>

            {subscribed ? (
              <div className="px-5 py-3.5 bg-[#e4f5a3] text-black font-mono text-xs rounded-full uppercase tracking-wider font-semibold">
                ✓ Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email..."
                  required
                  className="bg-white/10 border border-white/15 px-5 py-3 flex-grow focus:border-[#e4f5a3] outline-none text-white font-sans text-sm rounded-full placeholder-white/40"
                />
                <button
                  type="submit"
                  className="bg-[#e4f5a3] px-6 text-black font-sans text-xs uppercase tracking-wider font-bold hover:bg-[#d9f99d] transition-all cursor-pointer rounded-full flex items-center justify-center shadow-md whitespace-nowrap"
                >
                  <span>Subscribe</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50 font-mono">
          <p>© {new Date().getFullYear()} Institution's Innovation Council, JSSATE Noida.</p>
          <div className="flex gap-6 uppercase tracking-widest text-[11px]">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">MoE Innovation Cell</a>
          </div>
        </div>

        {/* Subtle Hidden Credit Line */}
        <div className="mt-6 text-center">
          <a 
            href="https://github.com/kaiju-no-9" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-mono text-[10px] text-white/20 hover:text-white/60 transition-colors tracking-widest lowercase select-none"
          >
            designed with ❤️ by kaiju-no-9
          </a>
        </div>
      </div>
    </footer>
  );
}