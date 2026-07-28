import React from 'react';

const partners = [
  'MoE INNOVATION CELL',
  'JSSATE NOIDA',
  'UPSTART PITCH FEST',
  'INNOVATION SUMMIT',
  'IPR & TECH TRANSFER',
  'STARTUP INCUBATION',
  'STUDENT ENTERPRISES',
];

export default function MarqueeStrip() {
  return (
    <div className="w-full bg-[#000000] text-white py-3 overflow-hidden border-y border-white/10 flex items-center">
      <div className="flex whitespace-nowrap animate-marquee gap-12 font-mono text-xs uppercase tracking-[0.25em] text-white/80">
        {[...partners, ...partners, ...partners].map((item, idx) => (
          <span key={idx} className="flex items-center gap-6">
            <span>{item}</span>
            <span className="text-[#e4f5a3] font-bold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
