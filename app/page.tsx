import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-slate-200 font-sans selection:bg-green-500 selection:text-black">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}