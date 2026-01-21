// 1. Importamos React y los iconos que SOLO usa este componente
import React from 'react';
import { Wrench } from 'lucide-react';

// 2. Definimos la función del componente (siempre con Mayúscula inicial)
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="bg-blue-600 p-2 rounded-lg shadow-lg shadow-blue-600/20">
          <Wrench className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold tracking-tight text-slate-900">
          Repar<span className="text-blue-600">.bo</span>
        </span>
      </div>
    </nav>
  );
}