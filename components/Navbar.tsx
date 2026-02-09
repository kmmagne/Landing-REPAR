import React from 'react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="flex items-center px-6 py-4 bg-black/90 backdrop-blur-md border-b border-zinc-800 sticky top-0 z-50 transition-all">
      
      {/* Contenedor del Logo con tamaño Responsivo */}
      {/* - Mobile (por defecto): h-10 (40px) de alto, w-32 (128px) de ancho máximo.
         - PC (md:): h-14 (56px) de alto, w-48 (192px) de ancho máximo.
         - transition-all: Para que el cambio de tamaño sea suave.
      */}
      <div className="relative h-10 w-32 md:h-14 md:w-48 transition-all duration-300">
        <Image 
          src="/logo-iygo.png" 
          alt="Logo IYGO"
          fill // Ocupa todo el espacio del contenedor padre
          className="object-contain object-left" // object-left asegura que se pegue a la izquierda
          priority // Carga la imagen de inmediato (importante para el LCP/SEO)
        />
      </div>

    </nav>
  );
}