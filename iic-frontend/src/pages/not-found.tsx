import React from 'react';

export default function NotFound() {
  const errorDoodle = "/vector2/error _ parachute, broken, damage, damaged, man, people.svg";

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white text-black p-6">
      <div className="max-w-md w-full text-center flex flex-col items-center">
        {/* Parachute Error Doodle */}
        <img src={errorDoodle} alt="Page Not Found Parachute Doodle" className="w-56 h-56 object-contain pointer-events-none select-none mb-6" />

        <span className="font-mono text-xs uppercase tracking-[0.35em] text-black/50 font-semibold mb-2 block">
          ERROR 404
        </span>

        <h1 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
          Page Parachuted Away
        </h1>

        <p className="font-sans text-sm text-black/70 mb-8 max-w-sm leading-relaxed">
          The page you are looking for doesn't exist or has moved. Let's get you back on track!
        </p>

        <a 
          href="/" 
          className="px-8 py-3.5 bg-black text-white font-sans text-sm font-semibold rounded-full hover:bg-neutral-800 transition-all shadow-md inline-flex items-center gap-2"
        >
          <span>Return Home</span>
          <span className="font-mono text-xs">→</span>
        </a>
      </div>
    </div>
  );
}
