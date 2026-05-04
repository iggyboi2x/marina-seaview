'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { eventSpacesData } from '@/lib/eventSpacesData';
import { Users, PartyPopper, CalendarDays, Glasses, Building, HeartHandshake } from 'lucide-react';

export default function EventsPage() {
  return (
    <div className="bg-off-white pb-24">
      {/* 1. Premium Side-by-Side Header */}
      <section className="pt-40 pb-20 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2 text-left">
              <ScrollReveal>
                <p className="font-body text-xs uppercase tracking-[0.4em] text-gold mb-6">Unforgettable Moments</p>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-text-primary mb-8 leading-[0.9]">
                  Host Your <br />
                  <span className="text-primary italic">Perfect</span> Event
                </h1>
                <div className="w-24 h-0.5 bg-gold mb-8"></div>
                <p className="font-body text-text-secondary text-lg max-w-md leading-relaxed">
                  From intimate gatherings to grand celebrations, discover our diverse seaside venues tailored to your vision.
                </p>
              </ScrollReveal>
            </div>
            
            <div className="w-full md:w-1/2">
              <ScrollReveal variant="fadeUp" delay={0.2} className="relative">
                <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src="/gallery/event_1.png" 
                    alt="Event at Marina Seaview" 
                    fill 
                    className="object-cover scale-105" 
                  />
                  {/* Decorative frame overlay */}
                  <div className="absolute inset-4 border border-white/30 rounded-xl" />
                </div>
                {/* Floating accent badge */}
                <div className="absolute -bottom-6 -left-6 bg-primary text-white p-8 rounded-2xl shadow-xl hidden lg:block">
                  <p className="font-display text-3xl mb-1">Cebu's Premier</p>
                  <p className="font-body text-[10px] uppercase tracking-widest opacity-80">Seaside Venue Destination</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Occasion types icon grid */}
      <section className="bg-ivory py-16 border-b border-text-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal variant="staggerContainer" className="flex flex-wrap justify-center gap-6 md:gap-12">
            {[
              { icon: HeartHandshake, label: "Weddings" },
              { icon: PartyPopper, label: "Birthdays & Debuts" },
              { icon: Building, label: "Corporate Events" },
              { icon: CalendarDays, label: "Holiday Celebrations" },
              { icon: Glasses, label: "Private Gatherings" }
            ].map((occasion, i) => (
              <motion.div key={i} variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <occasion.icon size={28} strokeWidth={1.5} />
                </div>
                <p className="font-body text-text-primary font-medium text-sm text-center">{occasion.label}</p>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Event Spaces grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {eventSpacesData.map((space, i) => (
            <ScrollReveal key={space.id} delay={i % 2 === 0 ? 0 : 0.2}>
              <div className="group h-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-64 md:h-80 w-full overflow-hidden">
                  <Image
                    src={space.image}
                    alt={space.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-2 shadow-sm">
                    <Users size={14} className="text-primary" />
                    <span className="font-body text-xs font-bold text-text-primary">{space.capacity}</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="font-display text-3xl text-text-primary mb-4">{space.name}</h3>
                  <p className="font-body text-text-secondary leading-relaxed mb-6 flex-1">
                    {space.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {space.tags.map(tag => (
                      <span key={tag} className="bg-ivory text-text-secondary border border-text-primary/10 text-[11px] uppercase tracking-wider font-bold py-1 px-3 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button href={`/reservations?type=event`} variant="ghost" className="w-full text-text-primary border-text-primary/20 hover:bg-primary hover:text-white hover:border-primary">
                    Inquire for {space.name}
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 4. Event Packages CTA */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="bg-primary-dark rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-xl border border-primary-light/20">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 -mt-12 -mr-12 w-48 h-48 bg-primary rounded-full blur-3xl opacity-50" />
              <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-48 h-48 bg-primary rounded-full blur-3xl opacity-50" />
              
              <div className="relative z-10">
                <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">
                  Event Packages as low as <span className="text-gold">₱1,000/head</span>
                </h2>
                <p className="font-body text-lg text-off-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Reserve your space with a ₱10,000 down payment and gain access to exclusive perks and discounts for your special day.
                </p>
                <Button href="/reservations?type=event" variant="gold" className="px-10 py-4 text-lg">
                  Inquire Now
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
