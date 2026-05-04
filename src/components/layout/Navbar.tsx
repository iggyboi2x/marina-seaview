'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { NAV_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use scrolled style if it's not the home page or if scrolled
  const isDarkNav = isScrolled || pathname !== '/';

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out px-6 md:px-12',
          isDarkNav ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="relative z-50">
            {/* Logo swap based on scroll/page state */}
            <div className="relative w-[180px] h-[60px]">
              <Image
                src="/logo/marina_logo_tp.png"
                alt="Marina Seaview Logo"
                fill
                className={cn(
                  "object-contain transition-all duration-300",
                  !isDarkNav && "brightness-0 invert" // Invert to white on transparent hero
                )}
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'font-body text-[15px] font-medium tracking-wide transition-colors relative group',
                    isDarkNav ? 'text-text-primary hover:text-primary' : 'text-white hover:text-white/80'
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute -bottom-1 left-0 h-[2px] bg-gold transition-all duration-300',
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button href="/reservations" variant={isDarkNav ? 'primary' : 'gold'}>
              Reserve a Table
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn('lg:hidden relative z-50 p-2', isDarkNav ? 'text-text-primary' : 'text-white')}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={28} className={isDarkNav ? 'text-text-primary' : 'text-white'} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-ocean/95 backdrop-blur-lg flex flex-col justify-center items-center px-6"
          >
            <nav className="flex flex-col items-center space-y-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-3xl font-display text-white hover:text-gold transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.1 }}
                className="pt-8"
              >
                <Button href="/reservations" variant="primary" onClick={() => setMobileMenuOpen(false)}>
                  Reserve a Table
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
