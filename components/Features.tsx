import React from 'react';
import { ShieldCheck, Wallet, Search, LayoutGrid, TrendingUp, Package, Hammer, Users } from 'lucide-react';

export default function Features() {
  return (
    <section className="bg-black py-24 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        
        {/* =========================================
            SECCIÓN 1: PARA CLIENTES
           ========================================= */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Para Ti el usuario: <span className="text-green-500">Soluciones Seguras</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Diseñamos IYGO para eliminar los riesgos de contratar servicios. Tu paz mental es nuestra prioridad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Verificación */}
            <div className="group p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-green-500/50 hover:bg-zinc-900 transition duration-300">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <ShieldCheck className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Técnicos Verificados</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Sin antecedentes y con capacidad probada. Sabes exactamente quién entra a tu hogar.
              </p>
            </div>

            {/* Card 2: Pago Retenido */}
            <div className="group p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-green-500/50 hover:bg-zinc-900 transition duration-300">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Wallet className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Pago Protegido</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                El precio no cambia. Retenemos tu dinero y si el técnico falla, te lo devolvemos. Cero estafas.
              </p>
            </div>

            {/* Card 3: Elección */}
            <div className="group p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-green-500/50 hover:bg-zinc-900 transition duration-300">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Search className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Tú Tienes el Control</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Cotiza con varios y elige por precio, cercanía o rapidez. Tú decides quién te conviene.
              </p>
            </div>

             {/* Card 4: Todo en Uno */}
             <div className="group p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-green-500/50 hover:bg-zinc-900 transition duration-300">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <LayoutGrid className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Multi-Servicios + Puntos</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Plomeros, electricistas y más en un solo lugar. Gana descuentos por usar la app frecuentemente.
              </p>
            </div>

          </div>
        </div>


        {/* =========================================
            DIVISOR VISUAL (Línea elegante)
           ========================================= */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-20"></div>


        {/* =========================================
            SECCIÓN 2: PARA TÉCNICOS
           ========================================= */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Para Técnicos: <span className="text-green-500">Impulsa tu Trabajo</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Únete a la red que dignifica el trabajo técnico  
              <strong className="text-white"> de manera gratuita</strong>. 
              Consigue más clientes y asegura tu pago.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Visibilidad */}
            <div className="group p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-green-500/50 hover:bg-zinc-900 transition duration-300">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <TrendingUp className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Publicidad Gratuita</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Deja de buscar clientes, nosotros te los llevamos. Gana visibilidad sin pagar por anuncios.
              </p>
            </div>

            {/* Card 2: Cobro Seguro */}
            <div className="group p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-green-500/50 hover:bg-zinc-900 transition duration-300">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Wallet className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Pago Garantizado</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Nosotros cobramos al cliente. Al terminar el trabajo, tu dinero está seguro. Adiós a los clientes que se niegan a pagar.
              </p>
            </div>

            {/* Card 3: Materiales */}
            <div className="group p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-green-500/50 hover:bg-zinc-900 transition duration-300">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Package className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Descuentos en Insumos</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Accede a precios especiales en tuberías, cables y herramientas gracias a nuestras alianzas.
              </p>
            </div>

             {/* Card 4: Red */}
             <div className="group p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-green-500/50 hover:bg-zinc-900 transition duration-300">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Hammer className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Red de Trabajo</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Sé parte de una comunidad que lucha contra el desempleo y valora tu profesión.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}