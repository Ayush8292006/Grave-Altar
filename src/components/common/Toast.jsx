import React from 'react';
import { useCartStore } from '../../hooks/useCartStore';
import { Sparkles } from 'lucide-react';

export default function Toast() {
  const { toastMessage } = useCartStore();

  if (!toastMessage) return null;

  return (
    <aside
      aria-label="Notification"
      className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-50 flex items-center gap-3 px-5 py-3.5 bg-[#0e0e11] border border-altar-silver/40 text-altar-bone shadow-[0_10px_30px_rgba(0,0,0,0.85)] animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="w-2 h-2 rounded-full bg-altar-silver animate-ping" />
      <span className="font-serif text-xs uppercase tracking-wider">
        {toastMessage}
      </span>
    </aside>
  );
}

