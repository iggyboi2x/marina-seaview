'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Waves, Utensils, GlassWater, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function HomePage() {
  const [carouselIndex, setCarouselIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-off-white">
      {/* 1. Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/gallery_refined/marina_seaview_5.png"
            alt="Marina Seaview"
            fill
            sizes="100vw"
            quality={95}
            priority
            className="object-cover"
          />
          {/* Artistic Scrim: Blur + Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-ocean/60 via-ocean/40 to-ocean/70 backdrop-blur-[2px]" />
        </div>

        {/* Hero Content Stack */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto mt-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-body text-gold text-sm tracking-[0.2em] uppercase mb-4"
          >
            MEPZ I · Lapu-Lapu City · Cebu
          </motion.p>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="h-[1px] bg-gold mb-6"
          />

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-[96px] text-white leading-tight mb-6"
          >
            Where the Sea Meets the Table
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-body text-lg md:text-xl text-off-white/90 mb-10 max-w-2xl"
          >
            An extraordinary dining experience with breathtaking ocean views
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button href="/reservations" variant="primary">
              Reserve a Table
            </Button>
            <Button href="/menu" variant="ghost" className="text-white border-white hover:bg-white hover:text-ocean">
              Explore Our Menu
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 2. Intro / Brand Statement */}
      <section className="bg-ivory py-24 md:py-32 px-6 relative">
        <ScrollReveal className="max-w-[760px] mx-auto text-center" variant="fadeUp">
          <h2 className="font-accent italic text-3xl md:text-4xl text-text-primary mb-8">
            "More than a restaurant — a destination."
          </h2>
          <div className="font-body text-text-secondary leading-relaxed space-y-6 text-[17px]">
            <p>
              Nestled along the coastline of Lapu-Lapu City, Marina Seaview Restaurant is a sanctuary of culinary excellence and coastal elegance. We believe that every meal should be a celebration, set against the backdrop of the ocean's timeless beauty.
            </p>
            <p>
              Our menu showcases the freshest local seafood and grilled specialties, paired perfectly with warm, world-class Filipino hospitality. Whether it's an intimate dinner or a grand celebration, we invite you to experience the finest dining the island has to offer.
            </p>
          </div>
          
          <div className="mt-16 flex justify-center">
            <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 12C20 12 20 0 40 0C60 0 60 12 80 12C100 12 100 0 120 0" stroke="#1A9BAB" strokeWidth="2" fill="none"/>
              <path d="M0 24C20 24 20 12 40 12C60 12 60 24 80 24C100 24 100 12 120 12" stroke="#3EC6D4" strokeWidth="2" fill="none"/>
            </svg>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. Highlights Strip & Gallery Carousel */}
      <section className="bg-white py-20 px-6 overflow-hidden border-b border-text-primary/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <ScrollReveal variant="staggerContainer" className="space-y-12">
              <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }} className="flex items-start space-x-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary">
                  <Waves size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-text-primary mb-2">Seaside Ambiance</h3>
                  <p className="font-body text-text-secondary leading-relaxed text-sm">Multiple indoor & outdoor venues with stunning panoramic ocean views, perfect for any mood.</p>
                </div>
              </motion.div>
              
              <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.1 } } }} className="flex items-start space-x-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary">
                  <Utensils size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-text-primary mb-2">Exceptional Cuisine</h3>
                  <p className="font-body text-text-secondary leading-relaxed text-sm">Fresh seafood, off-the-grill specialties, and carefully curated set menus that celebrate local flavors.</p>
                </div>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } } }} className="flex items-start space-x-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary">
                  <GlassWater size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-text-primary mb-2">Private Events</h3>
                  <p className="font-body text-text-secondary leading-relaxed text-sm">Unforgettable weddings, birthdays, and corporate gatherings tailored to your exact vision.</p>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

          <div className="lg:w-1/2 w-full">
            <ScrollReveal variant="fadeIn" delay={0.4}>
              <div className="relative aspect-[4/3] md:aspect-[16/10] lg:aspect-square xl:aspect-[16/10] max-h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-primary-dark">
                <div 
                  className="absolute inset-0 flex transition-transform duration-1000 ease-in-out" 
                  style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
                >
                  {['/gallery_refined/marina_seaview_5.png', '/gallery_refined/marina_interior_1.png', '/gallery_refined/authentic_dish_12.png', '/gallery_refined/marina_seaview_1.png', '/gallery_refined/marina_interior_6.png'].map((src, i) => (
                    <div key={i} className="min-w-full h-full relative">
                      <Image 
                        src={src} 
                        alt="Marina Experience" 
                        fill 
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={90}
                        priority={i === 0}
                        className="object-cover" 
                      />
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-white font-display text-xl">The Marina Experience</p>
                  <p className="text-gold font-body text-sm uppercase tracking-widest mt-1">Authentic · Coastal · Premium</p>
                </div>
                {/* Dots */}
                <div className="absolute bottom-8 right-8 flex space-x-2">
                  {[0,1,2,3,4].map((i) => (
                    <div key={i} className={cn("w-2 h-2 rounded-full transition-all duration-300", i === carouselIndex ? "bg-gold w-6" : "bg-white/50")} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. Featured Dishes */}
      <section className="bg-primary-dark py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">Signature Flavors</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto"></div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Fresh Seafood Platter", img: "/gallery_refined/authentic_dish_14.png" },
              { title: "Crispy Pata Specialty", img: "/gallery_refined/authentic_dish_5.png" },
              { title: "Traditional Set Menu", img: "/gallery_refined/authentic_dish_11.png" }
            ].map((dish, i) => (
              <ScrollReveal key={i} delay={i * 0.15} variant="scaleReveal">
                <div className="group relative h-[400px] overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
                  <Image src={dish.img} alt={dish.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110 brightness-[1.05] contrast-[1.05]" />
                  
                  {/* Premium Overlay: Gradient + Subtle Grain */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean/95 via-ocean/40 to-transparent mix-blend-multiply opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean/60 via-transparent to-transparent" />
                  
                  {/* Noise/Grain texture to mask low-res artifacts */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                    <span className="inline-block bg-gold text-white text-[10px] uppercase tracking-[0.2em] font-bold py-1 px-4 rounded-full mb-4 shadow-lg">Featured Selection</span>
                    <h3 className="font-display text-3xl text-white leading-tight">{dish.title}</h3>
                    <div className="w-0 group-hover:w-16 h-0.5 bg-gold mt-4 transition-all duration-500" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center">
            <Button href="/menu" variant="ghost" className="text-white border-white hover:bg-white hover:text-primary-dark">
              View Full Menu →
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Event Preview */}
      <EventPreview />

      {/* 6. Testimonials */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal className="mb-16">
            <h2 className="font-display text-4xl text-text-primary mb-4">Guest Experiences</h2>
            <div className="w-16 h-0.5 bg-gold mx-auto"></div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "The ambiance is absolutely breathtaking. Watching the sunset while enjoying fresh seafood was the highlight of our trip.", author: "Maria S.", source: "Google Reviews" },
              { quote: "We held our wedding reception at the Glass House. The staff was incredibly attentive and the food exceeded all our expectations.", author: "Jonathan & Claire", source: "TripAdvisor" },
              { quote: "Marina Seaview never disappoints. The off-the-grill selection is superb and the ocean breeze makes every meal special.", author: "David T.", source: "Google Reviews" }
            ].map((test, i) => (
              <ScrollReveal key={i} delay={i * 0.15} className="bg-ivory p-8 rounded-2xl flex flex-col items-center shadow-sm">
                <div className="flex text-gold mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={20} fill="currentColor" />)}
                </div>
                <p className="font-accent italic text-lg text-text-primary mb-8 flex-1 leading-relaxed">"{test.quote}"</p>
                <div>
                  <p className="font-body font-bold text-text-primary">{test.author}</p>
                  <p className="font-body text-xs text-text-secondary uppercase tracking-wider mt-1">{test.source}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA Banner */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero/cta-bg.png" alt="Unforgettable Evening" fill className="object-cover" />
          <div className="absolute inset-0 bg-ocean/70" />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-8 leading-tight">
              Ready for an unforgettable evening?
            </h2>
            <Button href="/reservations" variant="gold">
              Make a Reservation
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

function EventPreview() {
  const venues = [
    { name: "Seaview Pavilion", img: "/venue/Seaview Pavillion.webp" },
    { name: "The Ballroom", img: "/venue/Seaview Ballroom.webp" },
    { name: "Glass House", img: "/venue/Seaview Glass House.webp" },
    { name: "Meeting Room", img: "/venue/Seaview Meeting Room.webp" },
    { name: "Main Dining", img: "/venue/Seaview Main Dining.webp" },
    { name: "The Salty Wharf", img: "/venue/Seaview The Salty Wharf.webp" }
  ];

  const [activeVenue, setActiveVenue] = React.useState(venues[1]);

  return (
    <section className="bg-ivory py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-text-primary mb-4">Host Your Perfect Event</h2>
          <p className="font-body text-text-secondary tracking-widest uppercase text-sm">Weddings · Birthdays · Corporate Gatherings · Holiday Celebrations</p>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Large Photo Left */}
          <div className="w-full lg:w-[60%] h-[400px] md:h-[550px] relative rounded-3xl overflow-hidden shadow-2xl bg-primary-dark group">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeVenue.img}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image 
                  src={activeVenue.img} 
                  alt={activeVenue.name} 
                  fill 
                  className="object-cover" 
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg">
              <p className="font-display text-xl text-primary">{activeVenue.name}</p>
            </div>
          </div>

          {/* Venue List Right */}
          <div className="w-full lg:w-[40%] grid grid-cols-2 lg:flex lg:flex-col gap-4">
            {venues.map((venue, i) => (
              <button 
                key={i} 
                onClick={() => setActiveVenue(venue)}
                className={cn(
                  "flex items-center space-x-4 p-3 rounded-2xl transition-all duration-300 text-left border",
                  activeVenue.name === venue.name 
                    ? "bg-white shadow-lg border-primary/20 scale-[1.02]" 
                    : "bg-white/40 border-transparent hover:bg-white/80 hover:shadow-md"
                )}
              >
                <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-xl overflow-hidden flex-shrink-0">
                  <Image src={venue.img} alt={venue.name} fill className="object-cover" />
                </div>
                <div className="flex-1 overflow-hidden">
                  <h4 className={cn(
                    "font-display text-sm md:text-lg transition-colors truncate",
                    activeVenue.name === venue.name ? "text-primary font-bold" : "text-text-primary"
                  )}>{venue.name}</h4>
                  <p className="text-[9px] text-text-secondary uppercase tracking-widest hidden md:block">Click to view venue</p>
                </div>
              </button>
            ))}
            
            <div className="pt-4 lg:pt-6 col-span-2">
              <Button href="/events" variant="primary" className="w-full">
                Explore All Event Spaces →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
