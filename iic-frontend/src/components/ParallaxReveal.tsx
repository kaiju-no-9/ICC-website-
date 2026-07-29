import React from 'react';
import { motion } from 'framer-motion';

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
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`w-full will-change-transform transform-gpu ${className}`}
    >
      {children}
    </motion.div>
  );
}
