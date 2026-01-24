import React from 'react';
import { Zap } from 'lucide-react'; 

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black/90 backdrop-blur-md border-b border-zinc-800 sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="bg-green-500 p-1.5 rounded-lg shadow-[0_0_15px_rgba(34,197,94,0.5)]">
          <Zap className="w-5 h-5 text-black fill-black" />
        </div>
        <span className="text-2xl font-extrabold tracking-tighter text-white">
          IYGO<span className="text-green-500">.</span>
        </span>
      </div>
    </nav>
  );
}