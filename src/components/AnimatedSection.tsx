'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) {
  // Smaller offsets → less layout shift, faster perceived animation
  const directionOffset = {
    up:    { y: 20 },
    down:  { y: -20 },
    left:  { x: 20 },
    right: { x: -20 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      // amount: 0.1 → fires as soon as 10% of element is visible (faster on mobile)
      // margin removed → no extra IntersectionObserver root-margin calculation
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.45,   // was 0.7 — snappier on low-end devices
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
