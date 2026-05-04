'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { fadeUp, fadeIn, scaleReveal, staggerContainer } from '@/lib/animations';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'fadeUp' | 'fadeIn' | 'scaleReveal' | 'staggerContainer';
  delay?: number;
  width?: 'fit-content' | '100%';
}

export default function ScrollReveal({
  children,
  className,
  variant = 'fadeUp',
  delay = 0,
  width = '100%'
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const getVariant = () => {
    switch (variant) {
      case 'fadeUp': return fadeUp;
      case 'fadeIn': return fadeIn;
      case 'scaleReveal': return scaleReveal;
      case 'staggerContainer': return staggerContainer;
      default: return fadeUp;
    }
  };

  const selectedVariant = getVariant();
  // Inject delay if provided and it's not staggerContainer which has its own logic
  const animationVariants = delay > 0 && variant !== 'staggerContainer' 
    ? {
        ...selectedVariant,
        visible: {
          ...selectedVariant.visible,
          transition: { ...selectedVariant.visible.transition, delay }
        }
      }
    : selectedVariant;

  return (
    <div ref={ref} style={{ width }} className={className}>
      <motion.div
        variants={animationVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
