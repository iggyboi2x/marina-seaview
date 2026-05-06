import React from "react";
import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FloatingMessenger from "../components/layout/FloatingMessenger";
import ScrollProgressBar from "../components/ui/ScrollProgressBar";
import { ScrollToTop } from "../components/ui/ScrollToTop";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: { default: 'Marina Seaview Restaurant', template: '%s | Marina Seaview' },
  description: 'Your seaside dining destination in Lapu-Lapu City, Cebu. Exceptional seafood, breathtaking ocean views, and premier event spaces for weddings, birthdays & corporate events.',
  keywords: ['Marina Seaview', 'restaurant Lapu-Lapu', 'Cebu seafood', 'wedding venue Cebu', 'MEPZ restaurant', 'Cebu fine dining'],

  openGraph: { locale: 'en_PH', images: [{ url: '/og-image.jpg', width: 1200, height: 630 }] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} ${playfair.variable}`}>
      <body className="antialiased font-body bg-off-white text-text-primary">
        <ScrollProgressBar />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingMessenger />
        <ScrollToTop />
      </body>
    </html>
  );
}
