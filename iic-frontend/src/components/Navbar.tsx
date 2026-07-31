import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navRef = useRef<HTMLDivElement>(null);
  const teamWorkflowSvg = "/vector2/support, workflow _ team, teamwork, introduction, meeting, welcome, diversity, meet the team 1.svg";

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest('#menu-trigger')
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const navLinks = [
    { name: 'Overview', id: 'home', icon: 'dashboard' },
    { name: 'About Us', id: 'about', icon: 'info' },
    { name: 'What We Do', id: 'events', icon: 'event' },
    { name: 'Initiatives', id: 'initiatives', icon: 'auto_awesome' },
    { name: 'Gallery', id: 'gallery', icon: 'collections' },
    { name: 'Team', id: 'team', icon: 'groups' },
  ];

  return (
    <>
      {/* STICKY WHITE TOP NAV */}
      <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md px-4 md:px-12 py-3.5 flex justify-between items-center border-b border-black/10 transition-all">
        {/* Logo Wordmark */}
        <div 
          onClick={() => scrollTo('home')} 
          className="cursor-pointer group flex items-center gap-3"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-black/15 flex-shrink-0 bg-white shadow-xs p-0.5 group-hover:scale-105 transition-transform">
            <img src="/moe-iic-logo.jpg" alt="Official MoE IIC Logo" className="w-full h-full object-contain" />
          </div>
          <div className="font-sans text-lg font-extrabold text-black tracking-tight uppercase">
            IIC JSS <span className="text-black/50 font-normal">NOIDA</span>
          </div>
        </div>

        {/* Action Pills & Navigation */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => scrollTo('contact')}
            className="hidden md:inline-flex px-5 py-2 text-sm font-sans font-medium text-black border border-black/15 bg-white rounded-full hover:bg-neutral-100 transition-all cursor-pointer"
          >
            Contact
          </button>
          
          <button 
            onClick={() => scrollTo('events')}
            className="hidden sm:inline-flex px-5 py-2 text-sm font-sans font-semibold text-white bg-black rounded-full hover:bg-neutral-800 transition-all cursor-pointer shadow-sm"
          >
            Get Started
          </button>

          {/* Menu Trigger Button Pill */}
          <button
            id="menu-trigger"
            onClick={() => setIsOpen(!isOpen)}
            className="px-4 py-2 rounded-full border border-black/15 bg-neutral-100 hover:bg-neutral-200 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <span className="font-mono text-[11px] tracking-[0.2em] text-black uppercase font-bold">
              {isOpen ? 'CLOSE' : 'MENU'}
            </span>
            
            <div className="w-3.5 h-3 flex flex-col justify-between items-end">
              <span 
                className={`h-[1.5px] bg-black transition-all duration-300 ${
                  isOpen ? 'w-3.5 rotate-45 translate-y-[5px]' : 'w-3.5'
                }`} 
              />
              <span 
                className={`h-[1.5px] bg-black transition-all duration-300 ${
                  isOpen ? 'w-3.5 -rotate-45 -translate-y-[5px]' : 'w-2'
                }`} 
              />
            </div>
          </button>
        </div>
      </header>

      {/* DRAWER OVERLAY BACKDROP */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90]"
          />
        )}
      </AnimatePresence>

      {/* SIDEBAR NAVIGATION DRAWER */}
      <nav
        ref={navRef}
        id="side-nav"
        className={`fixed right-0 top-0 h-full w-[290px] sm:w-[320px] z-[100] bg-white text-black border-l border-black/10 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between overflow-y-auto ${
          isOpen ? 'side-nav-open' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-6 p-6">
          {/* Drawer Header */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-sm">lightbulb</span>
              </div>
              <div className="text-black text-base font-sans font-bold tracking-tight">
                IIC JSS Noida
              </div>
            </div>

            {/* Circular Close Button */}
            <button
              id="menu-close"
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-neutral-100 border border-black/10 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          </div>

          <div className="h-[1px] bg-black/10 w-full" />

          {/* Navigation Links Group */}
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`w-full px-4 py-3 rounded-full flex items-center justify-between transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-black text-white font-semibold'
                      : 'text-black/70 hover:bg-neutral-100 hover:text-black'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-lg">
                      {link.icon}
                    </span>
                    <span className="text-sm font-sans font-medium">
                      {link.name}
                    </span>
                  </div>
                  <span className="font-mono text-xs opacity-60">→</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Callout & Vector Illustration */}
        <div className="p-6 mt-auto flex flex-col gap-4">
          <div className="w-full flex justify-center">
            <img 
              src={teamWorkflowSvg} 
              alt="Support & Teamwork Illustration" 
              className="w-full max-w-[270px] h-auto object-contain pointer-events-none select-none mix-blend-multiply"
            />
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-black/50 mb-1">MoE Innovation Cell</p>
            <p className="font-sans text-xs text-black/80 leading-relaxed mb-3">Fostering innovation and entrepreneurship across JSSATE Noida campus.</p>
            <button 
              onClick={() => scrollTo('events')}
              className="w-full py-2.5 bg-black text-white font-sans text-xs font-semibold rounded-full hover:bg-neutral-800 transition-all cursor-pointer"
            >
              Explore Initiatives
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}