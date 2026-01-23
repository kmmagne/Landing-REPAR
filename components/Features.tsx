import React from 'react';
import { ShieldCheck, Wallet, Search, Users, TrendingUp, Package, Hammer } from 'lucide-react';

export default function Features() {
  return (
    <section className="bg-black py-20 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        
        {/* --- SECCIÓN CLIENTES --- */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Para Ti: Soluciones Seguras</h2>
            <p className="text-zinc-400">Olvídate de la incertidumbre. IYGO protege tu hogar y tu dinero.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-green-500/50 transition duration-300">
              <ShieldCheck className="w-10 h-10 text-green-500 mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">Técnicos Verificados</h3>
              <p className="text-zinc-400 text-sm">
                Solo entran los mejores. Revisamos antecedentes y certificamos capacidades. Seguridad total para tu familia.
              </p>
            </div>
            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-green-500/50 transition duration-300">
              <Wallet className="w-10 h-10 text-green-500 mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">Precio Fijo y Seguro</h3>
              <p className="text-zinc-400 text-sm">
                Retenemos el pago hasta que el trabajo esté terminado. Sin cobros sorpresa ni pagos por adelantado a desconocidos.
              </p>
            </div>
            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-green-500/50 transition duration-300">
              <Search className="w-10 h-10 text-green-500 mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">Cotiza y Elige</h3>
              <p className="text-zinc-400 text-sm">
                Recibe varias opciones. Elige por precio, cercanía o velocidad. Tú tienes el control.
              </p>
            </div>
             {/* Card 4 */}
             <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-green-500/50 transition duration-300">
              <Users className="w-10 h-10 text-green-500 mb-4" />
              <h3 className="text-white font-bold text-lg mb-2">Todo en Uno + Puntos</h3>
              <p className="text-zinc-400 text-sm">
                Desde plomeros hasta electricistas. Además, gana descuentos por cada servicio que contrates.
              </p>
            </div>
          </div>
        </div>

        {/* --- DIVIDER --- */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-24"></div>

        {/* --- SECCIÓN TÉCNICOS --- */}
        <div className="relative overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 p-8 md:p-12">
          {/* Fondo decorativo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-600/10 blur-[80px] rounded-full"></div>

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Para Técnicos: <span className="text-green-500">Impulsa tu Trabajo</span>
              </h2>
              <p className="text-zinc-400 mb-8 text-lg">
                Ser parte de IYGO es gratis. Te damos las herramientas para crecer y te protegemos de clientes que no pagan.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-green-500 shrink-0" />
                  <div>
                    <strong className="text-white block">Visibilidad Gratuita</strong>
                    <span className="text-zinc-500 text-sm">Consigue clientes sin salir a buscar. Nosotros te promocionamos.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Wallet className="w-6 h-6 text-green-500 shrink-0" />
                  <div>
                    <strong className="text-white block">Pago Garantizado</strong>
                    <span className="text-zinc-500 text-sm">El cliente paga antes de empezar. Nosotros te damos el dinero al terminar. Adiós a las deudas.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Package className="w-6 h-6 text-green-500 shrink-0" />
                  <div>
                    <strong className="text-white block">Descuentos en Materiales</strong>
                    <span className="text-zinc-500 text-sm">Accede a precios especiales en tuberías, acero y herramientas con nuestros aliados.</span>
                  </div>
                </li>
                 <li className="flex items-start gap-3">
                  <Hammer className="w-6 h-6 text-green-500 shrink-0" />
                  <div>
                    <strong className="text-white block">Red contra el desempleo</strong>
                    <span className="text-zinc-500 text-sm">Sé parte de una comunidad que dignifica el trabajo técnico en Bolivia.</span>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Call to Action Técnico */}
            <div className="bg-black/50 p-8 rounded-2xl border border-zinc-800 text-center">
              <h3 className="text-white font-bold text-xl mb-4">¿Listo para tener más trabajo?</h3>
              <p className="text-zinc-400 text-sm mb-6">
                Las primeras 50 cuentas tendrán beneficios VIP de por vida en la plataforma.
              </p>
              <button className="w-full py-3 bg-white hover:bg-zinc-200 text-black font-bold rounded-xl transition">
                Registrarme como Técnico
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}