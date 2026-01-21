import React from 'react';
// Importamos nuestros componentes modulares
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features'; // Asumo que creaste este en el reto anterior
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}