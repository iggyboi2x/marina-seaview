'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Fish, MapPin, Wine, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { CONTACT } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function AboutPage() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const experienceImages = [
    '/gallery/interior_1.png',
    '/gallery/event_1.png',
    '/gallery/interior_2.png',
    '/gallery/event_5.png',
    '/gallery/interior_6.png',
    '/gallery/event_8.png',
    '/gallery/interior_9.png'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % experienceImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [experienceImages.length]);

  return (
    <div className="bg-off-white">
      {/* 1. Premium Side-by-Side Header */}
      <section className="pt-40 pb-20 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2 text-left">
              <ScrollReveal>
                <p className="font-body text-xs uppercase tracking-[0.4em] text-gold mb-6">The Marina Experience</p>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-text-primary mb-8 leading-[0.9]">
                  Our <br />
                  <span className="text-primary italic">Heritage</span> & Story
                </h1>
                <div className="w-24 h-0.5 bg-gold mb-8"></div>
                <p className="font-body text-text-secondary text-lg max-w-md leading-relaxed">
                  Founded on a passion for the sea, we've created a destination where every meal tells a story of tradition and innovation.
                </p>
              </ScrollReveal>
            </div>
            
            <div className="w-full md:w-1/2">
              <ScrollReveal variant="fadeUp" delay={0.2} className="relative">
                <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src="/gallery/seaview_1.png" 
                    alt="Marina Seaview Heritage" 
                    fill 
                    className="object-cover scale-105" 
                  />
                  <div className="absolute inset-4 border border-white/30 rounded-xl" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <ScrollReveal className="w-full lg:w-1/2" variant="fadeIn">
            <h3 className="font-accent italic text-2xl text-gold mb-8">A passion for the sea, served on a plate.</h3>
            
            <div className="font-body text-text-secondary leading-relaxed space-y-6">
              <p>
                Founded on the vibrant shores of Lapu-Lapu City, Marina Seaview Restaurant was born out of a profound love for the ocean and the rich culinary heritage of Cebu. We envisioned a place where locals and travelers alike could gather to celebrate life's moments against the breathtaking canvas of the sea.
              </p>
              <p>
                From the moment you step through our doors, you'll be embraced by our warm Filipino hospitality. Our culinary team works tirelessly to source the freshest local seafood and highest quality ingredients, transforming them into dishes that tell a story of tradition, flavor, and innovation.
              </p>
              <p>
                Whether you're joining us for a casual sunset dinner, hosting an intimate gathering in our Glass House, or celebrating a grand milestone in The Ballroom, Marina Seaview is dedicated to making every experience unforgettable.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal 
            className="w-full lg:w-1/2 relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl" 
            variant="fadeUp" 
            delay={0.2}
          >
            <div className="relative w-full h-full">
              <Image
                src="/gallery/interior_1.png"
                alt="Marina Seaview Story Interior"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Why Marina Seaview & Carousel (Restructured) */}
      <section className="bg-ivory py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-display text-4xl text-text-primary mb-4">The Marina Experience</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto"></div>
          </ScrollReveal>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            {/* Sidebar of cards */}
            <div className="w-full lg:w-[380px] space-y-4 flex-shrink-0">
              <ScrollReveal variant="staggerContainer" className="space-y-4">
                {[
                  { icon: Fish, title: "Fresh Seafood Daily", desc: "Sourced locally to bring you the best flavors." },
                  { icon: MapPin, title: "Seaview Ambiance", desc: "Panoramic views of the ocean to accompany your meal." },
                  { icon: Wine, title: "Event Expertise", desc: "Flawlessly executed events tailored to your need." },
                  { icon: Heart, title: "Warm Hospitality", desc: "Genuine service that makes you feel right at home." }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }} 
                    className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-start space-x-5 border border-transparent hover:border-primary/10"
                  >
                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                      <item.icon size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-text-primary mb-1">{item.title}</h3>
                      <p className="font-body text-text-secondary text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </ScrollReveal>
            </div>

            {/* Experience Carousel - Scaled down height to prevent blur */}
            <div className="flex-1 w-full">
              <ScrollReveal className="relative group" variant="fadeIn" delay={0.3}>
                <div className="relative h-[350px] md:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-primary-dark">
                  <div 
                    className="absolute inset-0 flex transition-transform duration-1000 ease-in-out" 
                    style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
                  >
                    {experienceImages.map((src, i) => (
                      <div key={i} className="min-w-full h-full relative">
                        <Image src={src} alt={`Marina Experience ${i + 1}`} fill className="object-cover brightness-[0.95] contrast-[1.05]" />
                      </div>
                    ))}
                  </div>
                  
                  {/* Premium Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Noise texture to mask low-res */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />

                  <div className="absolute bottom-8 left-8 text-left">
                    <p className="text-gold font-accent italic text-2xl mb-1 shadow-sm">Moments at Marina</p>
                    <p className="text-white/80 font-body text-[10px] uppercase tracking-[0.2em]">Coastal Dining · Events · Atmosphere</p>
                  </div>
                  
                  {/* Navigation Buttons */}
                  <button 
                    onClick={() => setCarouselIndex((prev) => (prev - 1 + experienceImages.length) % experienceImages.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={() => setCarouselIndex((prev) => (prev + 1) % experienceImages.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
                  >
                    <ChevronRight size={20} />
                  </button>
                  
                  {/* Indicators */}
                  <div className="absolute bottom-8 right-8 flex space-x-1.5">
                    {experienceImages.map((_, i) => (
                      <div 
                        key={i} 
                        className={cn(
                          "w-1.5 h-1.5 rounded-full transition-all duration-300", 
                          i === carouselIndex ? "bg-gold w-6" : "bg-white/40"
                        )} 
                      />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Event Spaces Teaser */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal className="mb-12">
            <h2 className="font-display text-4xl text-text-primary mb-6">Unforgettable Venues</h2>
            <p className="font-body text-text-secondary max-w-2xl mx-auto">
              From intimate glass houses to grand ballrooms, our diverse venues offer the perfect setting for your next celebration.
            </p>
          </ScrollReveal>
          
          <ScrollReveal>
            <Button href="/events" variant="primary">
              Explore Our Event Spaces
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. Partner Spotlight */}
      <section className="bg-primary-dark py-24 px-6 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <ScrollReveal className="w-full md:w-1/2" variant="fadeIn">
            <h3 className="font-body text-gold tracking-widest uppercase text-sm mb-4">Partner Spotlight</h3>
            <h2 className="font-display text-4xl md:text-5xl mb-6">Dahlia Chocolates</h2>
            <p className="font-body text-white/80 leading-relaxed mb-8">
              We are proud to partner with Dahlia Chocolates to offer you an exquisite selection of artisanal, handcrafted chocolates. Perfect for gifts, event favors, or simply treating yourself after a wonderful meal.
            </p>
            <p className="font-accent italic text-xl text-gold">Now available at Marina Seaview.</p>
          </ScrollReveal>
          <ScrollReveal className="w-full md:w-1/2" variant="fadeUp" delay={0.2}>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/gallery/event_9.png" alt="Dahlia Chocolate Pairing" fill className="object-cover" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-24 px-6 bg-ivory text-center">
        <ScrollReveal className="max-w-2xl mx-auto">
          <h2 className="font-display text-4xl text-text-primary mb-6">Visit Us Today</h2>
          <p className="font-body text-text-secondary mb-8">{CONTACT.address}</p>
          <Button href="/reservations" variant="gold">
            Reserve a Table
          </Button>
        </ScrollReveal>
      </section>
    </div>
  );
}
