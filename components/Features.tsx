import React from 'react';
import { ShieldCheck, Wallet, LayoutGrid } from 'lucide-react';

export default function Features() {
  return (
    <section className="bg-white py-20 px-6 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">¿Por qué elegir Repar?</h2>
          <p className="text-slate-500">Creamos un sistema justo y seguro para clientes y técnicos.</p>
        </div>

        {/* Grid de 3 tarjetas BASADAS EN LA REALIDAD */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Tarjeta 1: Verificación */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition hover:-translate-y-1">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-xl mb-3 text-slate-900">Técnicos Verificados</h3>
            <p className="text-slate-600 leading-relaxed">
              Tu seguridad es primero. Verificamos documentos y antecedentes de cada técnico antes de que puedan aceptar trabajos.
            </p>
          </div>

          {/* Tarjeta 2: Pago Protegido (La corrección clave) */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition hover:-translate-y-1">
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6">
              <Wallet className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-xl mb-3 text-slate-900">Pago Protegido</h3>
            <p className="text-slate-600 leading-relaxed">
              Cero estafas. Retenemos el pago y solo lo liberamos al técnico cuando el trabajo está terminado y aprobado por ti. Ni trabajos a medias, ni falta de pago.
            </p>
          </div>

          {/* Tarjeta 3: Centralización */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition hover:-translate-y-1">
            <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
              <LayoutGrid className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-xl mb-3 text-slate-900">Todo en un lugar</h3>
            <p className="text-slate-600 leading-relaxed">
              Encuentra plomeros, electricistas y albañiles en una sola plataforma. Simplificamos la búsqueda para que soluciones tu problema rápido.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}