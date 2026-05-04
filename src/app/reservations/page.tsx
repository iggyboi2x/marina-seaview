'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FORMS, CONTACT } from '@/lib/constants';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

function ReservationsContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<'dining' | 'event'>('dining');
  const [pulseEvent, setPulseEvent] = useState(false);

  // Form States
  const [diningData, setDiningData] = useState({
    name: '',
    email: '',
    phone: '',
    pax: '',
    date: '',
    time: '',
    venue: 'Indoor (Main Dining)'
  });

  const today = new Date().toISOString().split('T')[0];

  const [eventData, setEventData] = useState({
    name: '',
    email: '',
    eventName: '',
    phone: '',
    date: '',
    time: '',
    pax: '',
    company: '',
    venue: 'Seaview Pavilion',
    notes: ''
  });

  useEffect(() => {
    if (searchParams.get('type') === 'event') {
      setActiveTab('event');
      setPulseEvent(true);
      setTimeout(() => setPulseEvent(false), 2500);
    }
  }, [searchParams]);

  const handleDiningSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { entries } = FORMS;
    const params = new URLSearchParams();
    params.append(entries.alaCarte.name, diningData.name);
    params.append(entries.alaCarte.email, diningData.email);
    params.append(entries.alaCarte.phone, diningData.phone);
    params.append(entries.alaCarte.pax, diningData.pax);
    params.append(entries.alaCarte.date, diningData.date);
    params.append(entries.alaCarte.time, diningData.time);
    params.append(entries.alaCarte.venue, diningData.venue);
    
    window.open(`${FORMS.alaCarte}?${params.toString()}`, '_blank');
  };

  const handleEventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { entries } = FORMS;
    const params = new URLSearchParams();
    params.append(entries.event.name, eventData.name);
    params.append(entries.event.email, eventData.email);
    params.append(entries.event.eventType, eventData.eventName);
    params.append(entries.event.phone, eventData.phone);
    params.append(entries.event.date, eventData.date);
    params.append(entries.event.time, eventData.time);
    params.append(entries.event.pax, eventData.pax);
    params.append(entries.event.venue, eventData.venue);
    params.append(entries.event.company, eventData.company);
    
    window.open(`${FORMS.eventInquiry}?${params.toString()}`, '_blank');
  };

  return (
    <>
      {/* 1. Premium Side-by-Side Header */}
      <section className="pt-40 pb-20 px-6 bg-white overflow-hidden rounded-3xl mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2 text-left">
              <ScrollReveal>
                <p className="font-body text-xs uppercase tracking-[0.4em] text-gold mb-6">Join Us At The Seaview</p>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-text-primary mb-8 leading-[0.9]">
                  Book Your <br />
                  <span className="text-primary italic">Experience</span>
                </h1>
                <div className="w-24 h-0.5 bg-gold mb-8"></div>
                <p className="font-body text-text-secondary text-lg max-w-md leading-relaxed">
                  Choose your preferred dining setting and let us prepare an unforgettable table for you and your guests.
                </p>
              </ScrollReveal>
            </div>
            
            <div className="w-full md:w-1/2">
              <ScrollReveal variant="fadeUp" delay={0.2} className="relative">
                <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image 
                    src="/gallery/interior_6.png" 
                    alt="Reservations Ambiance" 
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

      {/* Tabs */}
      <ScrollReveal className="mb-12">
        <div className="flex bg-white rounded-full p-2 shadow-sm border border-text-primary/5 max-w-lg mx-auto relative overflow-hidden">
          {/* Animated background pill */}
          <motion.div 
            className="absolute top-2 bottom-2 w-[calc(50%-8px)] bg-primary rounded-full z-0"
            initial={false}
            animate={{ left: activeTab === 'dining' ? '8px' : 'calc(50%)' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          
          <button
            onClick={() => setActiveTab('dining')}
            className={cn(
              "flex-1 py-3 px-6 text-center rounded-full font-body font-medium transition-colors z-10 relative",
              activeTab === 'dining' ? "text-white" : "text-text-secondary hover:text-text-primary"
            )}
          >
            Reserve a Table
          </button>
          
          <button
            onClick={() => setActiveTab('event')}
            className={cn(
              "flex-1 py-3 px-6 text-center rounded-full font-body font-medium transition-colors z-10 relative",
              activeTab === 'event' ? "text-white" : "text-text-secondary hover:text-text-primary",
              pulseEvent && activeTab !== 'event' ? "animate-pulse ring-2 ring-gold" : ""
            )}
          >
            Plan Your Event
          </button>
        </div>
      </ScrollReveal>

      {/* Form Container */}
      <ScrollReveal className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-text-primary/5 relative overflow-hidden">
        {/* Subtle decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-ivory rounded-bl-full -mr-16 -mt-16 z-0" />
        <div className="relative z-10">
          
          {activeTab === 'dining' && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="max-w-2xl mx-auto"
            >
              <h3 className="font-display text-3xl text-text-primary mb-8 text-center">A La Carte Reservation</h3>
              <form onSubmit={handleDiningSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField 
                    label="Name" 
                    required 
                    type="text" 
                    placeholder="John Doe" 
                    value={diningData.name} 
                    onChange={(val) => setDiningData({...diningData, name: val})} 
                  />
                  <FormField 
                    label="Email" 
                    required 
                    type="email" 
                    placeholder="john@example.com" 
                    value={diningData.email} 
                    onChange={(val) => setDiningData({...diningData, email: val})} 
                  />
                  <FormField 
                    label="Contact Number" 
                    required 
                    type="tel" 
                    placeholder="0917 123 4567" 
                    value={diningData.phone} 
                    onChange={(val) => setDiningData({...diningData, phone: val})} 
                  />
                  <FormField 
                    label="No. of Pax" 
                    required 
                    type="number" 
                    placeholder="2" 
                    min="1" 
                    value={diningData.pax} 
                    onChange={(val) => setDiningData({...diningData, pax: val})} 
                  />
                  <FormField 
                    label="Date" 
                    required 
                    type="date" 
                    min={today}
                    value={diningData.date} 
                    onChange={(val) => setDiningData({...diningData, date: val})} 
                  />
                  <FormField 
                    label="Time" 
                    required 
                    type="time" 
                    value={diningData.time} 
                    onChange={(val) => setDiningData({...diningData, time: val})} 
                  />
                </div>
                
                <div className="pt-4">
                  <label className="block text-xs uppercase tracking-widest text-text-light font-body mb-3">Preferred Venue <span className="text-gold">*</span></label>
                  <div className="flex flex-col sm:flex-row gap-6">
                    {['Indoor (Main Dining)', 'Outdoor (The Salty Wharf)'].map((venue) => (
                      <label key={venue} className="flex items-center space-x-3 cursor-pointer group">
                        <input 
                          type="radio" 
                          name="dining-venue" 
                          className="hidden" 
                          checked={diningData.venue === venue}
                          onChange={() => setDiningData({...diningData, venue})}
                        />
                        <div className={cn(
                          "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
                          diningData.venue === venue ? "border-primary" : "border-text-primary/20 group-hover:border-primary/50"
                        )}>
                          {diningData.venue === venue && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                        </div>
                        <span className={cn(
                          "font-body transition-colors",
                          diningData.venue === venue ? "text-primary font-medium" : "text-text-primary"
                        )}>{venue}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <button 
                    type="submit"
                    className="w-full flex items-center justify-center bg-primary text-white py-4 rounded-full font-body font-medium hover:bg-primary-dark transition-colors group"
                  >
                    Proceed to Booking Form
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center font-body text-[11px] text-text-secondary mt-4">
                    You'll be redirected to complete your booking via Google Forms with your details pre-filled.
                  </p>
                </div>
              </form>
            </motion.div>
          )}

          {activeTab === 'event' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-2xl mx-auto"
            >
              <h3 className="font-display text-3xl text-text-primary mb-8 text-center">Event Inquiry</h3>
              <form onSubmit={handleEventSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField 
                    label="Email" 
                    required 
                    type="email" 
                    placeholder="john@example.com" 
                    value={eventData.email}
                    onChange={(val) => setEventData({...eventData, email: val})}
                  />
                  <FormField 
                    label="Name of Respondent" 
                    required
                    type="text" 
                    placeholder="John Doe" 
                    value={eventData.name}
                    onChange={(val) => setEventData({...eventData, name: val})}
                  />
                  <FormField 
                    label="Event Name / Type" 
                    required
                    type="text" 
                    placeholder="e.g. Wedding Reception" 
                    value={eventData.eventName}
                    onChange={(val) => setEventData({...eventData, eventName: val})}
                  />
                  <FormField 
                    label="Contact Number" 
                    required
                    type="tel" 
                    placeholder="0917 123 4567" 
                    value={eventData.phone}
                    onChange={(val) => setEventData({...eventData, phone: val})}
                  />
                  <FormField 
                    label="Date" 
                    type="date" 
                    min={today}
                    value={eventData.date}
                    onChange={(val) => setEventData({...eventData, date: val})}
                  />
                  <FormField 
                    label="Time" 
                    type="time" 
                    value={eventData.time}
                    onChange={(val) => setEventData({...eventData, time: val})}
                  />
                  <FormField 
                    label="No. of Pax (est.)" 
                    type="number" 
                    placeholder="50" 
                    value={eventData.pax}
                    onChange={(val) => setEventData({...eventData, pax: val})}
                  />
                  <FormField 
                    label="Company Name" 
                    type="text" 
                    placeholder="Optional" 
                    value={eventData.company}
                    onChange={(val) => setEventData({...eventData, company: val})}
                  />
                </div>
                
                <div className="pt-4">
                  <label className="block text-xs uppercase tracking-widest text-text-light font-body mb-4">Preferred Venue</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6">
                    {['Seaview Pavilion', 'Glass House', 'Ballroom', 'Meeting Room', 'The Salty Wharf', 'Main Dining'].map(venue => (
                      <label key={venue} className="flex items-center space-x-3 cursor-pointer group">
                        <input 
                          type="radio" 
                          name="event-venue" 
                          className="hidden" 
                          checked={eventData.venue === venue}
                          onChange={() => setEventData({...eventData, venue})}
                        />
                        <div className={cn(
                          "w-5 h-5 rounded border-2 flex items-center justify-center transition-all",
                          eventData.venue === venue ? "border-gold" : "border-text-primary/20 group-hover:border-gold/50"
                        )}>
                          {eventData.venue === venue && <div className="w-2.5 h-2.5 bg-gold rounded-[2px]" />}
                        </div>
                        <span className={cn(
                          "font-body text-sm transition-colors",
                          eventData.venue === venue ? "text-gold font-medium" : "text-text-primary"
                        )}>{venue}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <button 
                    type="submit"
                    className="w-full flex items-center justify-center bg-gold text-white py-4 rounded-full font-body font-medium hover:bg-[#B3935A] transition-colors group"
                  >
                    Send Event Inquiry
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center font-body text-[11px] text-text-secondary mt-4">
                    You'll be redirected to complete your inquiry via Google Forms.
                  </p>
                </div>
              </form>
            </motion.div>
          )}

        </div>
      </ScrollReveal>

      {/* Direct Contact Info */}
      <ScrollReveal className="mt-16 text-center font-body text-text-secondary flex flex-col items-center space-y-3">
        <p>Prefer to speak with us directly?</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <a href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`} className="flex items-center hover:text-primary transition-colors">
            <Phone size={16} className="mr-2" />
            <span>{CONTACT.phone} · {CONTACT.phone2}</span>
          </a>
          <span className="hidden sm:inline">|</span>
          <a href={`mailto:${CONTACT.email}`} className="flex items-center hover:text-primary transition-colors">
            <Mail size={16} className="mr-2" />
            <span>{CONTACT.email}</span>
          </a>
        </div>
      </ScrollReveal>
    </>
  );
}

export default function ReservationsPage() {
  return (
    <div className="bg-off-white min-h-screen pb-24 pt-32 px-6">
      <div className="max-w-4xl mx-auto">
        <Suspense fallback={<div className="h-[50vh] flex items-center justify-center text-text-secondary">Loading...</div>}>
          <ReservationsContent />
        </Suspense>
      </div>
    </div>
  );
}

// Reusable decorative form field component
function FormField({ 
  label, 
  required, 
  type, 
  placeholder, 
  min, 
  value, 
  onChange 
}: { 
  label: string, 
  required?: boolean, 
  type: string, 
  placeholder?: string, 
  min?: string,
  value: string,
  onChange: (val: string) => void
}) {
  return (
    <div className="flex flex-col">
      <label className="text-xs uppercase tracking-widest text-text-light font-body mb-2">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <input 
        type={type} 
        placeholder={placeholder}
        min={min}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="border-b border-text-primary/20 py-2 bg-transparent focus:outline-none focus:border-gold transition-colors font-body text-text-primary placeholder:text-text-primary/20"
      />
    </div>
  );
}
