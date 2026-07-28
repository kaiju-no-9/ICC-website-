import React, { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      id="scroll-to-top"
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-black border border-outline-variant flex items-center justify-center hover:bg-primary group transition-all duration-300 shadow-xl cursor-pointer rounded"
      aria-label="Scroll to top"
    >
      <span className="material-symbols-outlined text-on-surface group-hover:text-black transition-colors">
        arrow_upward
      </span>
    </button>
  );
}
