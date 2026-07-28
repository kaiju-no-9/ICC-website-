import React from 'react';

interface ParallaxRevealProps {
  children: React.ReactNode;
  speed?: number;
  revealOffset?: number;
  className?: string;
  id?: string;
}

export default function ParallaxReveal({
  children,
  className = '',
  id,
}: ParallaxRevealProps) {
  return (
    <div id={id} className={`w-full ${className}`}>
      {children}
    </div>
  );
}
