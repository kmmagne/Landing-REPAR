import React from 'react';
import { ArrowRight, User, Wrench } from 'lucide-react';

export default function Hero() {
  //  ¡IMPORTANTE! PEGA AQUÍ TUS LINKS DE GOOGLE FORMS 
  const linkCliente = "https://forms.gle/uE4xXqA1JdFSxMg68";
  const linkTecnico = "https://forms.gle/HwGDqpe5FNedd231A";

  return (
    <section className="relative px-6 pt-20 pb-24 md:pt-32 md:pb-40 max-w-6xl mx-auto text-center overflow-hidden">
      
      {/* Fondo con efecto de luz verde sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-500/20 rounded-full blur-[120px] -z-10 opacity-50"></div>

      {/* Badge
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-green-400 text-sm font-medium mb-8">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        La revolución de servicios en Bolivia
      </div>
      ]
    */}
      {/* Título Principal */}
      <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6 leading-tight">
      Técnicos y Profesionales de <br className="hidden md:block" />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-500 to-green-600">
        Confianza para tu Hogar
        </span>
      </h1>
      
      {/* Breve Explicación */}
      <p className="text-lg md:text-xl text-zinc-400 mb-12 leading-relaxed max-w-3xl mx-auto">
        IYGO conecta tu hogar con técnicos verificados para 
        <strong className="text-white"> reparaciones, instalaciones y construcción</strong>. 
        Sin riesgos ni estafas: garantizamos la calidad y protegemos tu pago hasta el final.
      </p>

      {/* --- DOBLE BOTÓN DE ACCIÓN --- */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        
        {/* Opción 1: Cliente */}
        <a 
          href={linkCliente}
          target="_blank" 
          rel="noopener noreferrer"
          className="group w-full md:w-auto relative px-8 py-4 bg-green-500 hover:bg-green-400 text-black font-bold text-lg rounded-2xl transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] flex items-center justify-center gap-3"
        >
          <User className="w-5 h-5" />
          <span>Busco un Servicio</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
        </a>

        {/* Opción 2: Técnico */}
        <a 
          href={linkTecnico}
          target="_blank" 
          rel="noopener noreferrer"
          className="group w-full md:w-auto px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-600 text-white font-bold text-lg rounded-2xl transition-all flex items-center justify-center gap-3"
        >
          <Wrench className="w-5 h-5 text-zinc-400 group-hover:text-white transition" />
          <span>Soy Técnico / Profesional</span>
        </a>

      </div>
      
      <p className="text-lg text-white mt-6">
      <strong> Únete a la lista de espera para obtener descuentos en tu primer servicio en el lanzamiento</strong>
    </p>

    </section>
  );
}