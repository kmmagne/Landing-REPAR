import React from 'react';
import { Wrench, ShieldCheck, Clock, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* --- NAVBAR --- */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg shadow-lg shadow-blue-600/20">
            <Wrench className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">Repar<span className="text-blue-600">.bo</span></span>
        </div>
        <button className="text-sm font-medium text-slate-600 hover:text-blue-600 transition">
          ¿Eres técnico?
        </button>
      </nav>

      {/* --- HERO SECTION (Lo primero que ven) --- */}
      <section className="relative px-6 pt-16 pb-20 md:pt-24 md:pb-32 max-w-5xl mx-auto text-center overflow-hidden">
        
        {/* Etiqueta de estado */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Próximamente en La Paz y El Alto
        </div>
        
        {/* Título Principal */}
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

        {/* --- FORMULARIO DE ESPERA (Simulado por ahora) --- */}
        <div className="bg-white p-3 rounded-2xl shadow-xl shadow-blue-900/5 border border-slate-200 max-w-md mx-auto transform transition hover:scale-[1.01] duration-300">
          <form className="flex flex-col md:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Tu correo o WhatsApp" 
              className="flex-1 px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition placeholder:text-slate-400"
              required
            />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 group">
              Entrar a la lista
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </button>
          </form>
        </div>
        <p className="text-xs text-slate-400 mt-4 flex justify-center items-center gap-1">
          <CheckCircle2 className="w-3 h-3 text-green-500" /> 
          Más de 50 personas se registraron hoy.
        </p>
      </section>

      {/* --- FEATURES GRID (¿Por qué nosotros?) --- */}
      <section className="bg-white py-20 px-6 border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">¿Por qué usar Repar?</h2>
            <p className="text-slate-500">Resolvemos los problemas clásicos de contratar servicios en Bolivia.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-slate-900">Seguridad Total</h3>
              <p className="text-slate-600 leading-relaxed">
                Todos los técnicos pasan por verificación de identidad y antecedentes policiales. Tu familia estará segura.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition hover:-translate-y-1">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-slate-900">Sin esperas</h3>
              <p className="text-slate-600 leading-relaxed">
                ¿Te dejaron plantado? Con Repar, agendas una hora exacta y puedes ver en tiempo real cuándo llega tu técnico.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition hover:-translate-y-1">
              <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mb-6">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-slate-900">Cobertura Local</h3>
              <p className="text-slate-600 leading-relaxed">
                Desde la zona Sur hasta el Alto. Conectamos con talento local cerca de ti para reparaciones rápidas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-10 text-center border-t border-slate-200 bg-slate-50">
        <p className="text-slate-500 text-sm mb-2">Hecho con 💙 en Bolivia.</p>
        <p className="text-slate-400 text-xs">© 2026 Repar. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}