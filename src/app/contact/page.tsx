'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { MapPin, Phone, Clock, Mail, Link as LinkIcon } from 'lucide-react';
import { CONTACT, SOCIAL, HOURS } from '@/lib/constants';

export default function ContactPage() {
  return (
    <div className="bg-off-white min-h-screen pb-24 pt-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. Premium Side-by-Side Header */}
        <section className="pt-40 pb-20 px-6 bg-white overflow-hidden rounded-3xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full md:w-1/2 text-left">
                <ScrollReveal>
                  <p className="font-body text-xs uppercase tracking-[0.4em] text-gold mb-6">Connect With Us</p>
                  <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-text-primary mb-8 leading-[0.9]">
                    Get in <br />
                    <span className="text-primary italic">Touch</span>
                  </h1>
                  <div className="w-24 h-0.5 bg-gold mb-8"></div>
                  <p className="font-body text-text-secondary text-lg max-w-md leading-relaxed">
                    Whether you're planning a visit or a grand event, our team is here to assist you with every detail.
                  </p>
                </ScrollReveal>
              </div>
              
              <div className="w-full md:w-1/2">
                <ScrollReveal variant="fadeUp" delay={0.2} className="relative">
                  <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                    <Image 
                      src="/gallery_refined/marina_interior_4.png" 
                      alt="Contact Marina Seaview" 
                      fill 
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={90}
                      priority
                      className="object-cover" 
                    />
                    <div className="absolute inset-4 border border-white/20 rounded-xl" />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ScrollReveal variant="fadeUp" delay={0}>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center h-full flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="font-display text-2xl text-text-primary mb-4">Location</h3>
              <p className="font-body text-text-secondary leading-relaxed mb-6 flex-1">
                MEPZ I Skywalk, MEPZ 1<br />
                Lapu-Lapu City, Cebu<br />
                Philippines 6015
              </p>
              <a 
                href={CONTACT.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-primary hover:text-gold font-bold uppercase tracking-wider transition-colors inline-block"
              >
                Get Directions
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.1}>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center h-full flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <Phone size={24} />
              </div>
              <h3 className="font-display text-2xl text-text-primary mb-4">Contact</h3>
              <div className="font-body text-text-secondary space-y-2 flex-1">
                <a href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`} className="block hover:text-primary transition-colors">{CONTACT.phone}</a>
                <a href={`tel:${CONTACT.phone2.replace(/\s+/g, '')}`} className="block hover:text-primary transition-colors">{CONTACT.phone2}</a>
                <a href={`mailto:${CONTACT.email}`} className="block hover:text-primary transition-colors mt-4 text-sm">{CONTACT.email}</a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.2}>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center h-full flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <Clock size={24} />
              </div>
              <h3 className="font-display text-2xl text-text-primary mb-4">Hours</h3>
              <p className="font-body text-text-secondary leading-relaxed flex-1">
                <strong className="block text-text-primary mb-1">{HOURS.label}</strong>
                {HOURS.time}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Social & Maps Section */}
        <ScrollReveal className="mb-20 border-b border-t border-text-primary/10 py-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 lg:gap-24">
            {/* Left: Social Links Vertical */}
            <div className="flex flex-col space-y-5 min-w-[200px]">
              <h4 className="font-display text-2xl text-text-primary mb-2">Connect with us</h4>
              <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-text-secondary hover:text-primary transition-colors group">
                <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </div>
                <span className="font-body font-medium">Facebook</span>
              </a>
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-text-secondary hover:text-primary transition-colors group">
                <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </div>
                <span className="font-body font-medium">Instagram</span>
              </a>
              <a href={SOCIAL.linktree} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-text-secondary hover:text-primary transition-colors group">
                <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <LinkIcon size={20} />
                </div>
                <span className="font-body font-medium">Linktree</span>
              </a>
            </div>

            {/* Right: Hoverable Map Thumb (Side-by-side) */}
            <div className="flex-1 max-w-2xl">
              <a 
                href={CONTACT.googleMapsDetailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-[280px] md:h-[350px] w-full">
                  <Image 
                    src="/gmap_img/gmap_redirect.png"
                    alt="Marina Seaview on Google Maps"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle overlay that clears on hover */}
                  <div className="absolute inset-0 bg-ocean/10 group-hover:bg-transparent transition-colors duration-300" />
                  
                  {/* Premium Badge */}
                  <div className="absolute bottom-6 left-6 bg-white py-3 px-6 rounded-full shadow-xl flex items-center space-x-3 group-hover:bg-gold group-hover:text-white transition-all duration-300 transform group-hover:translate-y-[-5px]">
                    <MapPin size={20} className="text-gold group-hover:text-white" />
                    <span className="font-display text-sm tracking-widest uppercase font-bold">Visit our Google Maps Page</span>
                  </div>
                </div>
              </a>
              <p className="mt-4 font-body text-sm text-text-secondary italic">
                View our location, guest reviews, and more photography on Google Maps.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Map Embed */}
        <ScrollReveal className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-md mb-20 relative bg-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.9601679053896!2d123.97370477498751!3d10.328190489793836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9977f8eaa03e1%3A0x89623e71649784de!2sMarina%20Seaview%20Restaurant!5e0!3m2!1sen!2sph!4v1714731114000!5m2!1sen!2sph"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          ></iframe>
        </ScrollReveal>

        {/* CTA Strip */}
        <ScrollReveal className="text-center bg-primary-dark text-white rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('/images/hero/hero-main.jpg')] bg-cover bg-center" />
          <div className="relative z-10">
            <h2 className="font-display text-4xl mb-6">Plan your visit today</h2>
            <p className="font-body text-off-white/80 max-w-2xl mx-auto mb-8">
              Whether you're joining us for a casual meal or planning a special event, we look forward to welcoming you to Marina Seaview.
            </p>
            <Button href="/reservations" variant="gold">
              Make a Reservation
            </Button>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}
