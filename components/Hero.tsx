import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  // AQUÍ PEGAS TU LINK DE GOOGLE FORMS
  const googleFormLink = "https://forms.google.com/tu-formulario-aqui"; 

  return (
    <section className="relative px-6 pt-16 pb-20 md:pt-24 md:pb-32 max-w-5xl mx-auto text-center overflow-hidden">
        
      {/* Etiqueta de estado */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8 animate-fade-in-up">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        Próximamente en La Paz y El Alto
      </div>
      
      {/* Título */}
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
        Reparaciones de hogar <br className="hidden md:block" />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          sin estrés ni estafas.
        </span>
      </h1>
      
      <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
        Conectamos tu hogar con plomeros, electricistas y albañiles verificados. 
        Olvídate de buscar números en postes o grupos de Facebook.
      </p>

      {/* --- NUEVO BOTÓN (Tipo Link) --- */}
      <div className="flex flex-col items-center justify-center gap-4">
        <a 
          href={googleFormLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-4 px-8 rounded-xl transition flex items-center gap-3 shadow-xl shadow-blue-600/30 transform hover:-translate-y-1 hover:shadow-blue-600/40"
        >
          ¡Quiero unirme a la lista!
          <ArrowRight className="w-5 h-5" />
        </a>
        
      </div>

    </section>
  );
}