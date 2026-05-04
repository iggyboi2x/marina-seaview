'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { menuData } from '@/lib/menuData';
import { drinksData } from '@/lib/drinksData';
import { cn } from '@/lib/utils';

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState<'food' | 'drinks'>('food');

  const scrollToCategory = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -190; // offset for sticky headers (navbar + menu tabs)
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-off-white min-h-screen pb-24">
      {/* 1. Premium Side-by-Side Header */}
      <section className="pt-40 pb-20 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2 text-left">
              <ScrollReveal>
                <p className="font-body text-xs uppercase tracking-[0.4em] text-gold mb-6">Culinary Excellence</p>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-text-primary mb-8 leading-[0.9]">
                  The <br />
                  <span className="text-primary italic">Signature</span> Menu
                </h1>
                <div className="w-24 h-0.5 bg-gold mb-8"></div>
                <p className="font-body text-text-secondary text-lg max-w-md leading-relaxed">
                  A curation of Cebu's finest seafood and traditional Filipino favorites, prepared with modern precision.
                </p>
              </ScrollReveal>
            </div>
            
            <div className="w-full md:w-1/2">
              <ScrollReveal variant="fadeUp" delay={0.2} className="relative">
                <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src="/gallery/dish_14.png" 
                    alt="Signature Menu Selection" 
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

      {/* 2. Top-level Tabs (Sticky) */}
      <div className="sticky top-[84px] z-30 bg-white shadow-sm border-t border-text-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex border-b border-text-primary/10">
            <button
              onClick={() => setActiveTab('food')}
              className={cn(
                'flex-1 py-4 font-display text-xl md:text-2xl transition-colors relative',
                activeTab === 'food' ? 'text-primary' : 'text-text-secondary hover:text-text-primary'
              )}
            >
              FOOD MENU
              {activeTab === 'food' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('drinks')}
              className={cn(
                'flex-1 py-4 font-display text-xl md:text-2xl transition-colors relative',
                activeTab === 'drinks' ? 'text-primary' : 'text-text-secondary hover:text-text-primary'
              )}
            >
              DRINKS MENU
              {activeTab === 'drinks' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Sub-category Filter Bar (Sticky below tabs) */}
      <div className="sticky top-[144px] z-20 bg-ivory/95 backdrop-blur-md shadow-sm overflow-x-auto whitespace-nowrap hide-scrollbar border-b border-text-primary/5">
        <div className="max-w-7xl mx-auto px-6 py-3 flex space-x-6 md:space-x-8">
          {(activeTab === 'food' ? menuData : drinksData).map((category) => (
            <button
              key={category.id}
              onClick={() => scrollToCategory(category.id)}
              className="font-body text-sm font-medium tracking-wide text-text-secondary hover:text-primary transition-colors uppercase"
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>

      {/* 4. Menu Content */}
      <div className="max-w-5xl mx-auto px-6 pt-12">
        {activeTab === 'food' ? (
          <div className="space-y-24">
            {menuData.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-40">
                <ScrollReveal>
                  {/* Category Header */}
                  <div className="relative h-56 md:h-80 rounded-3xl overflow-hidden mb-12 group shadow-xl">
                    <Image 
                      src={category.image} 
                      alt={category.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.85] contrast-[1.1]" 
                    />
                    
                    {/* Premium Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ocean/95 via-ocean/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ocean/40 via-transparent to-transparent opacity-60" />
                    
                    {/* Noise/Grain texture to mask low-res artifacts */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />

                    {/* Centered Glassmorphism Title */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-6 rounded-2xl shadow-2xl">
                        <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide uppercase">
                          {category.title}
                        </h2>
                        <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
                      </div>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                    {category.items.map((item, i) => (
                      <div key={i} className="flex flex-col border-b border-text-primary/5 pb-6 group">
                        <div className="flex justify-between items-baseline mb-2">
                          <h3 className="font-display text-xl text-text-primary group-hover:text-primary transition-colors duration-300">
                            {item.name}
                            {item.isNew && <span className="ml-3 inline-block bg-gold text-white text-[9px] uppercase tracking-widest font-bold py-0.5 px-2 rounded-full align-middle">New</span>}
                          </h3>
                          {item.price && (
                            <span className="font-body font-bold text-text-primary ml-4">
                              {item.price}
                            </span>
                          )}
                        </div>
                        <p className="font-body text-text-secondary text-[13px] leading-relaxed mb-3">
                          {item.description}
                        </p>
                        {item.servingNote && (
                          <div className="mt-auto flex items-center space-x-2">
                            <span className="w-4 h-[1px] bg-gold/50" />
                            <p className="font-accent italic text-gold text-sm">
                              {item.servingNote}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            ))}
            
            {/* Set Menus Special Section */}
            <div id="set-menus" className="scroll-mt-40 pt-12 border-t border-text-primary/10">
              <ScrollReveal>
                <div className="text-center mb-12">
                  <h2 className="font-display text-4xl text-text-primary mb-2">Mini-Party Blow Out</h2>
                  <p className="font-accent italic text-gold text-xl mb-4">Set Menus to share for four</p>
                  <p className="font-body font-bold text-text-primary text-xl mb-2">₱4,095 per set</p>
                  <p className="font-body text-xs text-text-secondary uppercase tracking-wider">All prices inclusive of applicable taxes, subject to 10% service charge</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Set A */}
                  <div className="bg-white rounded-2xl shadow-sm p-8 border border-text-primary/5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gold" />
                    <h3 className="font-display text-3xl text-text-primary mb-6 text-center">Set A <span className="text-gold block text-xl mt-1">Meat Lovers</span></h3>
                    <ul className="space-y-4 font-body text-sm text-text-secondary">
                      <li><span className="font-bold text-gold uppercase text-xs mr-3">Appetizer</span> Pork Sisig</li>
                      <li><span className="font-bold text-gold uppercase text-xs mr-3">Soup</span> Pochero Cebu</li>
                      <li><span className="font-bold text-gold uppercase text-xs mr-3">Main</span> Crispy Pata · Buttered Chicken · Grilled Chicken Teriyaki · Steamed Rice in a Platter</li>
                      <li><span className="font-bold text-gold uppercase text-xs mr-3">Dessert</span> Whole Cake on Display or Whole Buko Pie (choice)</li>
                      <li><span className="font-bold text-gold uppercase text-xs mr-3">Beverage</span> Iced Tea</li>
                    </ul>
                  </div>

                  {/* Set B */}
                  <div className="bg-white rounded-2xl shadow-sm p-8 border border-text-primary/5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gold" />
                    <h3 className="font-display text-3xl text-text-primary mb-6 text-center">Set B <span className="text-gold block text-xl mt-1">Seafood Lovers</span></h3>
                    <ul className="space-y-4 font-body text-sm text-text-secondary">
                      <li><span className="font-bold text-gold uppercase text-xs mr-3">Appetizer</span> Fried Seafood Lumpia</li>
                      <li><span className="font-bold text-gold uppercase text-xs mr-3">Soup</span> Mixed Seafood Soup</li>
                      <li><span className="font-bold text-gold uppercase text-xs mr-3">Main</span> Shrimp Tempura · Calamari Fritto · White Snapper Fish Sweet & Sour · Cheesy Scallops · Steamed Rice in a Platter</li>
                      <li><span className="font-bold text-gold uppercase text-xs mr-3">Dessert</span> Whole Cake on Display or Whole Buko Pie (choice)</li>
                      <li><span className="font-bold text-gold uppercase text-xs mr-3">Beverage</span> Iced Tea</li>
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        ) : (
          <div className="space-y-20">
            {drinksData.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-40">
                <ScrollReveal>
                  {category.image ? (
                    <div className="relative h-56 md:h-72 rounded-3xl overflow-hidden mb-12 group shadow-xl">
                      <Image 
                        src={category.image} 
                        alt={category.title} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.85] contrast-[1.1]" 
                      />
                      
                      {/* Premium Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-ocean/95 via-ocean/30 to-transparent" />
                      
                      {/* Noise/Grain texture to mask low-res artifacts */}
                      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />

                      {/* Centered Glassmorphism Title */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-6 rounded-2xl shadow-xl">
                          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wide uppercase">
                            {category.title}
                          </h2>
                          <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <h2 className="font-display text-3xl text-text-primary mb-8 border-b border-text-primary/10 pb-4">
                      {category.title}
                    </h2>
                  )}

                  {category.id === 'spirits-wine' ? (
                    <div className="bg-ivory p-8 rounded-xl text-center">
                      <p className="font-body text-lg text-text-primary mb-4">See our full bar list</p>
                      <p className="font-body text-sm text-text-secondary mb-4 leading-relaxed">
                        Gin · Vodka · Rum · Tequila · Whisky (Blended/Single Malt/American)<br />
                        Irish · Cognac/Brandy · Liqueur/Aperitif · Sparkling Wines · Rosé · White Wines · Red Wines
                      </p>
                      <p className="font-accent italic text-gold text-lg">Ask our staff for our complete spirits selection.</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                      {category.items.map((item, i) => (
                        <div key={i} className="flex flex-col border-b border-text-primary/5 pb-4 group">
                          <div className="flex justify-between items-baseline mb-2">
                            <h3 className="font-display text-lg text-text-primary group-hover:text-primary transition-colors duration-300">
                              {item.name}
                              {item.isNew && <span className="ml-2 inline-block bg-gold text-white text-[8px] uppercase tracking-widest font-bold py-0.5 px-2 rounded-full align-middle">New</span>}
                            </h3>
                            {item.price && (
                              <span className="font-body font-bold text-text-primary ml-4 text-sm">
                                {item.price}
                              </span>
                            )}
                          </div>
                          {item.description && (
                            <p className="font-body text-text-secondary text-[12px] leading-relaxed">
                              {item.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </ScrollReveal>
              </div>
            ))}
            
            {/* Spirits & Wine special card */}
            <div id="spirits-wine" className="scroll-mt-40">
              <ScrollReveal>
                <div className="bg-primary-dark p-8 md:p-12 rounded-2xl text-center text-white relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20 bg-[url('/gallery/interior_3.png')] bg-cover bg-center" />
                  <div className="relative z-10">
                    <h2 className="font-display text-4xl mb-6">Spirits & Wine</h2>
                    <p className="font-body text-lg mb-4 text-off-white">See our full bar list</p>
                    <p className="font-body text-sm text-off-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
                      Gin · Vodka · Rum · Tequila · Whisky (Blended/Single Malt/American)<br />
                      Irish · Cognac/Brandy · Liqueur/Aperitif · Sparkling Wines · Rosé · White Wines · Red Wines
                    </p>
                    <p className="font-accent italic text-gold-light text-xl">Ask our staff for our complete spirits selection.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="text-center pt-8">
              <p className="font-body text-xs text-text-secondary uppercase tracking-wider">All prices inclusive of applicable taxes, subject to 10% service charge</p>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
