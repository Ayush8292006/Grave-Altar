import React, { useEffect, useState } from 'react';
import IMAGES from '../../data/images';

export default function Loader({ onComplete }) {
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setFading(true), 300);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 900);
          return 100;
        }
        return prev + 4;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <aside
      aria-label="Loading Grave Altar"
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050505] transition-opacity duration-700 pointer-events-none ${
        fading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,211,204,0.06)_0%,transparent_70%)] pointer-events-none" />

      {/* Official Brand Logo with silver halo */}
      <div className="relative flex flex-col items-center z-10 px-6 text-center">
        <div className="relative w-40 sm:w-52 h-40 sm:h-52 mb-6 group">
          {/* Subtle pulsating back-glow */}
          <div className="absolute inset-0 rounded-full bg-altar-silver/10 blur-2xl animate-pulse-subtle" />
          
          <img
            src={IMAGES.brandLogo}
            alt="GRAVE ALTAR Monogram"
            className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_0_25px_rgba(214,211,204,0.25)] transition-all duration-1000"
          />
        </div>

        {/* Title & Tagline */}
        <h1 className="font-serif tracking-widest3 text-xs sm:text-sm text-altar-silver uppercase mb-2">
          Grave + Altar
        </h1>
        <p className="font-serif tracking-widest4 text-[10px] text-altar-pewter uppercase mb-8">
          Gothic Accessories
        </p>

        {/* Hairline loading meter */}
        <div className="w-36 sm:w-48 h-[1px] bg-altar-charcoal-border relative overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-altar-silver to-transparent transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="mt-3 font-mono text-[9px] tracking-widest text-altar-pewter/60 uppercase">
          {progress < 100 ? `Consecrating ${progress}%` : 'Entered'}
        </span>
      </div>
    </aside>
  );
}

