import React from 'react';

export default function OrnamentalDivider({ className = '', variant = 'fleur' }) {
  return (
    <div className={`flex items-center justify-center gap-4 py-6 text-altar-pewter/40 ${className}`}>
      <span className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-altar-pewter/30" />
      
      {variant === 'fleur' && (
        <svg className="w-5 h-5 text-altar-pewter/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          {/* Fleur-de-lis inspired gothic motif */}
          <path d="M12 2v20M12 2c-2 4-5 6-5 9a5 5 0 0010 0c0-3-3-5-5-9z" />
          <path d="M7 11c-3-1-5-3-5-5 0 4 3 7 5 7M17 11c3-1 5-3 5-5 0 4-3 7-5 7" />
          <circle cx="12" cy="19" r="1.5" fill="currentColor" />
        </svg>
      )}

      {variant === 'crescent' && (
        <svg className="w-4 h-4 text-altar-pewter/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}

      {variant === 'cross' && (
        <svg className="w-4 h-4 text-altar-pewter/60" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11 2h2v7h7v2h-7v11h-2v-11h-7v-2h7v-7z" />
        </svg>
      )}

      <span className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-altar-pewter/30" />
    </div>
  );
}

