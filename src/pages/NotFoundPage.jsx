import React from 'react';
import { Link } from 'react-router-dom';
import IMAGES from '../data/images';
import OrnamentalDivider from '../components/common/OrnamentalDivider';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#efeae0] pt-32 sm:pt-40 pb-24 flex items-center justify-center px-4 relative overflow-hidden">
      
      {/* Background graveyard atmospheric image */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.ironGates}
          alt="Graveyard iron gates"
          className="w-full h-full object-cover filter brightness-[0.2] contrast-150"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-[#050505]/50" />
      </div>

      <div className="relative z-10 max-w-lg w-full text-center border border-altar-silver/20 bg-[#0a0a0c]/90 backdrop-blur-md p-8 sm:p-12 shadow-2xl">
        <span className="font-mono text-xs uppercase tracking-widest3 text-altar-blood">
          // Error 404
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl uppercase tracking-widest text-altar-bone mt-2 mb-3">
          Lost Among The Graves
        </h1>
        <OrnamentalDivider variant="cross" />
        <p className="font-sans text-xs sm:text-sm text-altar-pewter leading-relaxed mb-8 font-light">
          You have wandered beyond the consecrated grounds into the mist. No altar or relic rests upon this barren path.
        </p>

        <Link to="/" className="btn-altar w-full py-3.5 text-xs">
          Return To The Altar
        </Link>
      </div>
    </div>
  );
}

