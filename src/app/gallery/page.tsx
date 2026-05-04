'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { galleryData } from '@/lib/galleryData';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { cn } from '@/lib/utils';

type Category = 'All' | 'Food' | 'Interiors' | 'Events' | 'Seaview';
const CATEGORIES: Category[] = ['All', 'Food', 'Interiors', 'Events', 'Seaview'];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Use actual filtering
  const displayImages = activeCategory === 'All' ? galleryData : galleryData.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % displayImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + displayImages.length) % displayImages.length);
    }
  };

  return (
    <div className="bg-off-white min-h-screen pb-24 pt-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. Premium Side-by-Side Header */}
        <section className="pt-40 pb-20 px-6 bg-white overflow-hidden rounded-3xl mb-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full md:w-1/2 text-left">
                <ScrollReveal>
                  <p className="font-body text-xs uppercase tracking-[0.4em] text-gold mb-6">A Visual Journey</p>
                  <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-text-primary mb-8 leading-[0.9]">
                    Coastal <br />
                    <span className="text-primary italic">Atmosphere</span>
                  </h1>
                  <div className="w-24 h-0.5 bg-gold mb-8"></div>
                  <p className="font-body text-text-secondary text-lg max-w-md leading-relaxed">
                    Explore the unique blend of modern architecture and natural seaside beauty that defines Marina Seaview.
                  </p>
                </ScrollReveal>
              </div>
              
              <div className="w-full md:w-1/2">
                <ScrollReveal variant="fadeUp" delay={0.2} className="relative">
                  <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-ivory">
                    <Image 
                      src="/gallery/seaview_3.png" 
                      alt="Marina Seaview Atmosphere" 
                      fill 
                      className="object-cover scale-105" 
                    />
                    <div className="absolute inset-4 border border-white/20 rounded-xl" />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <ScrollReveal className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full font-body text-sm tracking-wide transition-all duration-300 border",
                activeCategory === category 
                  ? "bg-primary text-white border-primary" 
                  : "bg-transparent text-text-secondary border-text-primary/10 hover:border-primary hover:text-primary"
              )}
            >
              {category}
            </button>
          ))}
        </ScrollReveal>

        {/* Masonry Grid via CSS columns */}
        <ScrollReveal>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence mode="popLayout">
              {displayImages.map((image, index) => (
                <motion.div
                  key={`${image.src}-${index}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="break-inside-avoid relative rounded-xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ocean/0 group-hover:bg-ocean/40 transition-colors duration-300 flex items-center justify-center">
                    <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" size={32} />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {displayImages.length === 0 && (
            <div className="text-center py-20 font-body text-text-secondary">
              No images available in this category yet.
            </div>
          )}
        </ScrollReveal>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ocean/95 backdrop-blur-md flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>

            {/* Navigation */}
            {displayImages.length > 1 && (
              <>
                <button 
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 z-50"
                  onClick={prevImage}
                >
                  <ChevronLeft size={48} strokeWidth={1} />
                </button>
                <button 
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 z-50"
                  onClick={nextImage}
                >
                  <ChevronRight size={48} strokeWidth={1} />
                </button>
              </>
            )}

            {/* Main Image */}
            <motion.div 
              key={lightboxIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl h-[80vh] px-16 md:px-24"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={displayImages[lightboxIndex].src}
                alt={displayImages[lightboxIndex].alt}
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
