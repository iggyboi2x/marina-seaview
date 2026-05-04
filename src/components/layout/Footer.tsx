import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE, CONTACT, SOCIAL, NAV_LINKS, HOURS } from '@/lib/constants';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ocean text-white/80 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block relative w-[160px] h-[55px]">
              <Image
                src="/logo/marina_logo2.png"
                alt="Marina Seaview Logo"
                fill
                className="object-contain invert hue-rotate-180 mix-blend-screen"
              />
            </Link>
            <p className="font-body text-sm leading-relaxed max-w-xs">
              {SITE.description}
            </p>
            <div className="flex space-x-4 pt-2">
              <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 font-body text-sm">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Event Spaces */}
          <div>
            <h4 className="font-display text-xl text-white mb-6">Event Spaces</h4>
            <ul className="space-y-3 font-body text-sm">
              <li><Link href="/events" className="hover:text-gold transition-colors">Seaview Pavilion</Link></li>
              <li><Link href="/events" className="hover:text-gold transition-colors">The Ballroom</Link></li>
              <li><Link href="/events" className="hover:text-gold transition-colors">Glass House</Link></li>
              <li><Link href="/events" className="hover:text-gold transition-colors">Meeting Room</Link></li>
              <li><Link href="/events" className="hover:text-gold transition-colors">Main Dining</Link></li>
              <li><Link href="/events" className="hover:text-gold transition-colors">The Salty Wharf</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 font-body text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-gold flex-shrink-0 mt-0.5" />
                <a href={CONTACT.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  {CONTACT.address}
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-gold flex-shrink-0" />
                <a href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`} className="hover:text-gold transition-colors">
                  {CONTACT.phone}
                </a>
                <span className="mx-2">·</span>
                <a href={`tel:${CONTACT.phone2.replace(/\s+/g, '')}`} className="hover:text-gold transition-colors">
                  {CONTACT.phone2}
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-gold flex-shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-gold transition-colors">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center pt-2">
                <Clock size={18} className="mr-3 text-gold flex-shrink-0" />
                <span>{HOURS.label}: {HOURS.time}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center text-xs font-body flex flex-col md:flex-row justify-between items-center opacity-60">
          <p>© {currentYear} {SITE.name}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Developed by Antigravity</p>
        </div>
      </div>
    </footer>
  );
}
