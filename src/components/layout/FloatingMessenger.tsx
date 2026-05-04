'use client';

import React from 'react';
import { SOCIAL } from '@/lib/constants';
import { motion } from 'framer-motion';

export default function FloatingMessenger() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative group">
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-text-primary text-white text-sm font-body rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us
          <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 border-t-4 border-b-4 border-l-4 border-transparent border-l-text-primary" />
        </div>
        
        {/* Pulse ring */}
        <div className="absolute inset-0 bg-[#0084FF] rounded-full animate-ping opacity-75" />
        
        {/* FAB */}
        <motion.a
          href={SOCIAL.messengerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 bg-[#0084FF] text-white rounded-full shadow-lg hover:bg-[#006ACC] transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Chat with us on Messenger"
        >
          <svg viewBox="0 0 36 36" fill="currentColor" width="28" height="28">
            <path d="M18 2C9.163 2 2 8.794 2 17.175c0 4.778 2.33 9.066 5.962 11.916v4.91L13.11 31.18c1.554.434 3.2.668 4.89.668 8.837 0 16-6.794 16-15.175C34 8.794 26.837 2 18 2zm1.09 20.306l-4.14-4.41-8.086 4.41 8.868-9.397 4.29 4.41 7.935-4.41-8.867 9.397z"/>
          </svg>
        </motion.a>
      </div>
    </div>
  );
}
