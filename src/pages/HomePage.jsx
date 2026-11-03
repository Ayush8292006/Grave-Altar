import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Shield, Flame, Sparkles } from 'lucide-react';
import IMAGES from '../data/images';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { BRAND_LORE } from '../data/brand';
import ProductCard from '../components/common/ProductCard';
import OrnamentalDivider from '../components/common/OrnamentalDivider';

export default function HomePage() {
  const bestSellers = PRODUCTS.filter(p => p.isBestSeller);
  const featuredRings = PRODUCTS.filter(p => p.category === 'rings');

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#efeae0] overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 sm:pt-20 px-4 overflow-hidden">
        {/* Background Atmosphere Image with Ken Burns Zoom */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.heroBackground}
            alt="Grave Altar Vaulted Cathedral"
            className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-125 scale-105 animate-pulse-subtle"
          />
          {/* Gradients to blend into black */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-[#050505]/40" />
          <div className="absolute inset-0 dark-vignette" />
        </div>

        {/* Floating Ember / Star dust particles simulation */}
        <div className="absolute inset-0 pointer-events-none z-10 opacity-30">
          <div className="absolute top-1/4 left-1/5 w-1 h-1 bg-altar-silver rounded-full animate-float-slow" />
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-altar-silver/80 rounded-full animate-float-slow [animation-delay:2s]" />
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-altar-silver/60 rounded-full animate-float-slow [animation-delay:4s]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Official Monogram Badge */}
          <div className="mb-6 relative group">
            <div className="absolute -inset-4 bg-altar-silver/10 rounded-full blur-xl group-hover:bg-altar-blood/20 transition-all duration-700" />
            <img
              src={IMAGES.brandLogo}
              alt="GRAVE ALTAR Seal"
              className="relative w-28 h-28 sm:w-36 sm:h-36 object-contain filter drop-shadow-[0_0_20px_rgba(214,211,204,0.3)] transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Subtitle / Proclamation */}
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-8 sm:w-16 bg-altar-silver/40" />
            <span className="font-serif text-[10px] sm:text-xs uppercase tracking-widest4 text-altar-silver font-light">
              Gothic Accessories
            </span>
            <span className="h-[1px] w-8 sm:w-16 bg-altar-silver/40" />
          </div>

          {/* Main Title Tagline */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium tracking-widest2 text-altar-bone uppercase leading-tight sm:leading-none mb-6 max-w-3xl">
            Forged In Shadow.<br />
            <span className="text-altar-silver italic font-cormorant font-normal lowercase tracking-normal text-4xl sm:text-6xl md:text-7xl">
              worn in devotion.
            </span>
          </h1>

          <p className="font-sans text-xs sm:text-sm text-altar-pewter max-w-lg leading-relaxed mb-10 font-light">
            Subterranean metallurgy, blackened sterling silver, and sacred talismans sculpted for the sovereign and the nocturnal.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              to="/shop"
              className="btn-altar w-full sm:w-auto px-8 py-3.5 text-xs flex items-center justify-center gap-3 group"
            >
              <span>Enter The Altar</span>
              <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
            </Link>

            <a
              href="#collections"
              className="px-6 py-3 text-xs font-serif uppercase tracking-widest text-altar-pewter hover:text-white transition-colors"
            >
              Explore Collections ↓
            </a>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-[9px] font-mono tracking-widest text-altar-pewter uppercase mb-2">Descend</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-altar-silver to-transparent animate-pulse" />
        </div>
      </section>

      {/* 2. INFINITE MARQUEE STRIP */}
      <section className="py-4 bg-[#0a0a0c] border-y border-altar-silver/10 overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-shimmer">
          <div className="flex items-center gap-8 font-serif text-[11px] sm:text-xs uppercase tracking-widest3 text-altar-pewter/80">
            <span>RINGS</span>
            <span className="text-altar-silver/40">✦</span>
            <span>PENDANTS</span>
            <span className="text-altar-silver/40">✦</span>
            <span>CHOKERS</span>
            <span className="text-altar-silver/40">✦</span>
            <span>RELICS</span>
            <span className="text-altar-silver/40">✦</span>
            <span>BLACKENED STERLING SILVER</span>
            <span className="text-altar-silver/40">✦</span>
            <span>SACRED TALISMANS</span>
            <span className="text-altar-silver/40">✦</span>
            <span>OBSIDIAN & LEATHER</span>
            <span className="text-altar-silver/40">✦</span>
            <span>RINGS</span>
            <span className="text-altar-silver/40">✦</span>
            <span>PENDANTS</span>
            <span className="text-altar-silver/40">✦</span>
            <span>CHOKERS</span>
            <span className="text-altar-silver/40">✦</span>
            <span>RELICS</span>
            <span className="text-altar-silver/40">✦</span>
          </div>
        </div>
      </section>

      {/* 3. FEATURED COLLECTIONS (EDITORIAL ASYMMETRIC GRID) */}
      <section id="collections" className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <span className="font-mono text-[10px] text-altar-pewter tracking-widest uppercase">
              // 01 The Vault
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-altar-bone tracking-widest uppercase mt-2">
              Featured Disciplines
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-altar-pewter max-w-md mt-4 md:mt-0 font-light">
            Each artifact is organized by liturgical discipline, hand-poured in oxidized sterling silver and cold pewter.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Tile 1: Rings (Spans 7 cols) */}
          <Link
            to="/shop?category=rings"
            className="group relative md:col-span-7 h-[380px] sm:h-[460px] overflow-hidden bg-[#0c0c0e] border border-altar-silver/15 flex flex-col justify-end p-6 sm:p-10"
          >
            <img
              src={IMAGES.categories.rings}
              alt="Grave Altar Rings"
              className="absolute inset-0 w-full h-full object-cover object-center gothic-photo group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="relative z-10">
              <span className="font-mono text-[10px] tracking-widest text-altar-silver uppercase">
                01 • Hand-Cast Bands
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl tracking-widest uppercase text-altar-bone mt-1 mb-2">
                Sepulchre Rings
              </h3>
              <p className="font-sans text-xs text-altar-pewter max-w-sm mb-4">
                Heavy signets, interlocking vertebrae claws, and textured thorns cast in solid .925 silver.
              </p>
              <span className="inline-flex items-center gap-2 font-serif text-[11px] tracking-widest uppercase text-altar-silver group-hover:text-white group-hover:translate-x-1 transition-all">
                <span>View Rings</span>
                <ArrowRight size={14} />
              </span>
            </div>
          </Link>

          {/* Tile 2: Pendants (Spans 5 cols) */}
          <Link
            to="/shop?category=pendants"
            className="group relative md:col-span-5 h-[380px] sm:h-[460px] overflow-hidden bg-[#0c0c0e] border border-altar-silver/15 flex flex-col justify-end p-6 sm:p-10"
          >
            <img
              src={IMAGES.categories.pendants}
              alt="Grave Altar Pendants"
              className="absolute inset-0 w-full h-full object-cover object-center gothic-photo group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="relative z-10">
              <span className="font-mono text-[10px] tracking-widest text-altar-silver uppercase">
                02 • Talismans & Blades
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl tracking-widest uppercase text-altar-bone mt-1 mb-2">
                Nocturne Pendants
              </h3>
              <p className="font-sans text-xs text-altar-pewter max-w-sm mb-4">
                Wearable daggers, cruciforms, and volcanic black obsidian talismans.
              </p>
              <span className="inline-flex items-center gap-2 font-serif text-[11px] tracking-widest uppercase text-altar-silver group-hover:text-white group-hover:translate-x-1 transition-all">
                <span>View Pendants</span>
                <ArrowRight size={14} />
              </span>
            </div>
          </Link>

          {/* Tile 3: Chokers & Collars (Spans 6 cols) */}
          <Link
            to="/shop?category=chokers"
            className="group relative md:col-span-6 h-[340px] sm:h-[400px] overflow-hidden bg-[#0c0c0e] border border-altar-silver/15 flex flex-col justify-end p-6 sm:p-10"
          >
            <img
              src={IMAGES.categories.chokers}
              alt="Grave Altar Chokers"
              className="absolute inset-0 w-full h-full object-cover object-center gothic-photo group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="relative z-10">
              <span className="font-mono text-[10px] tracking-widest text-altar-silver uppercase">
                03 • Collars & Harnesses
              </span>
              <h3 className="font-serif text-xl sm:text-2xl tracking-widest uppercase text-altar-bone mt-1 mb-2">
                Vesper Chokers
              </h3>
              <span className="inline-flex items-center gap-2 font-serif text-[11px] tracking-widest uppercase text-altar-silver group-hover:text-white group-hover:translate-x-1 transition-all">
                <span>Discover Leather & Steel</span>
                <ArrowRight size={14} />
              </span>
            </div>
          </Link>

          {/* Tile 4: Relics & Vessels (Spans 6 cols) */}
          <Link
            to="/shop?category=relics"
            className="group relative md:col-span-6 h-[340px] sm:h-[400px] overflow-hidden bg-[#0c0c0e] border border-altar-silver/15 flex flex-col justify-end p-6 sm:p-10"
          >
            <img
              src={IMAGES.categories.relics}
              alt="Grave Altar Relics"
              className="absolute inset-0 w-full h-full object-cover object-center gothic-photo group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="relative z-10">
              <span className="font-mono text-[10px] tracking-widest text-altar-silver uppercase">
                04 • Cloister & Pin
              </span>
              <h3 className="font-serif text-xl sm:text-2xl tracking-widest uppercase text-altar-bone mt-1 mb-2">
                Sacred Reliquaries
              </h3>
              <span className="inline-flex items-center gap-2 font-serif text-[11px] tracking-widest uppercase text-altar-silver group-hover:text-white group-hover:translate-x-1 transition-all">
                <span>Explore Relics</span>
                <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* 4. SCROLL-PINNED STORYTELLING & THE METALLURGY OF DEVOTION */}
      <section className="py-24 bg-[#08080a] border-y border-altar-silver/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Story Content */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="font-mono text-[10px] text-altar-pewter tracking-widest uppercase">
                  // 02 The Dark Philosophy
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl text-altar-bone tracking-widest uppercase mt-2 mb-4 leading-snug">
                  The Metallurgy of Darkness
                </h2>
                <p className="font-sans text-sm text-altar-pewter leading-relaxed font-light">
                  {BRAND_LORE.creed}
                </p>
              </div>

              <div className="space-y-6 pt-4 border-t border-altar-silver/10">
                {BRAND_LORE.pillars.map((pillar) => (
                  <div key={pillar.number} className="flex gap-4 group">
                    <span className="font-mono text-sm text-altar-pewter/60 group-hover:text-altar-silver transition-colors">
                      {pillar.number}
                    </span>
                    <div>
                      <h4 className="font-serif text-sm tracking-wider uppercase text-altar-bone mb-1 group-hover:text-white transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="font-sans text-xs text-altar-pewter leading-relaxed font-light">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link to="/about" className="btn-altar text-xs py-3 px-6">
                  Read The Solitary Creed
                </Link>
              </div>
            </div>

            {/* Right Atmospheric Imagery Display */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto bg-[#040405] border border-altar-silver/20 overflow-hidden shadow-2xl">
                <img
                  src={IMAGES.craftAltar}
                  alt="Blacksmith molten metal craft"
                  className="w-full h-full object-cover object-center gothic-photo"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                
                {/* Floating Quote Stamp */}
                <div className="absolute bottom-6 inset-x-6 p-4 bg-[#050505]/90 border border-altar-silver/20 backdrop-blur-md">
                  <p className="font-serif text-xs italic text-altar-silver">
                    "Cold silver against warm pulse—a silent armor forged for eternity."
                  </p>
                  <span className="block font-mono text-[9px] uppercase tracking-widest text-altar-pewter mt-2">
                    — Master Artisan, Grave Altar
                  </span>
                </div>
              </div>

              {/* Decorative Corner Flourish */}
              <div className="hidden sm:block absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-altar-silver/30 pointer-events-none" />
              <div className="hidden sm:block absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-altar-silver/30 pointer-events-none" />
            </div>

          </div>
        </div>
      </section>

      {/* 5. BEST SELLERS RAIL / HORIZONTAL CAROUSEL */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
          <div>
            <span className="font-mono text-[10px] text-altar-pewter tracking-widest uppercase">
              // 03 Revered Offerings
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-altar-bone tracking-widest uppercase mt-2">
              Best Sellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="mt-4 sm:mt-0 font-serif text-xs uppercase tracking-widest text-altar-silver hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <span>View All Relics</span>
            <ChevronRight size={14} />
          </Link>
        </div>

        {/* Swipeable Scroll-Snap Rail */}
        <div className="flex gap-6 overflow-x-auto pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar snap-x snap-mandatory">
          {bestSellers.map((prod) => (
            <div key={prod.id} className="min-w-[280px] sm:min-w-[320px] max-w-[340px] snap-start flex-shrink-0">
              <ProductCard product={prod} />
            </div>
          ))}
        </div>
      </section>

      {/* 6. LOOKBOOK: MASONRY GALLERY OF REAL MODELS */}
      <section id="lookbook" className="py-20 bg-[#070709] border-t border-altar-silver/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-[10px] text-altar-pewter tracking-widest uppercase">
              // 04 Visual Liturgy
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-altar-bone tracking-widest uppercase mt-2 mb-3">
              The Devotee Lookbook
            </h2>
            <p className="font-sans text-xs sm:text-sm text-altar-pewter font-light">
              Captured across twilight cloisters, forgotten catacombs, and quiet sanctuaries. Real bodies adorned in heavy metal.
            </p>
            <OrnamentalDivider variant="crescent" />
          </div>

          {/* Masonry / Staggered Editorial Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {IMAGES.lookbook.map((item, idx) => (
              <div
                key={idx}
                className={`group relative overflow-hidden bg-[#0c0c0e] border border-altar-silver/10 ${
                  idx === 0 ? 'sm:col-span-2 lg:col-span-1 h-[480px]' : 'h-[440px]'
                }`}
              >
                <img
                  src={item.url}
                  alt={item.caption}
                  loading="lazy"
                  className="w-full h-full object-cover object-center gothic-photo group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                
                <div className="absolute bottom-5 inset-x-5 text-left">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-altar-silver/80">
                    {item.location}
                  </span>
                  <h4 className="font-serif text-base tracking-wider uppercase text-altar-bone mt-0.5">
                    {item.caption}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SACRED TESTIMONIALS */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <span className="font-mono text-[10px] text-altar-pewter tracking-widest uppercase">
          // 05 Whispers From The Dark
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl text-altar-bone tracking-widest uppercase mt-2 mb-12">
          Devotee Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BRAND_LORE.testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#0c0c0e] border border-altar-silver/10 flex flex-col justify-between text-left relative"
            >
              <div className="mb-6">
                <span className="font-serif text-3xl text-altar-silver/30 leading-none">“</span>
                <p className="font-sans text-xs text-altar-pewter leading-relaxed font-light mt-2">
                  {t.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-altar-silver/10">
                <p className="font-serif text-xs uppercase tracking-wider text-altar-bone font-medium">
                  {t.author}
                </p>
                <p className="font-mono text-[9px] text-altar-pewter/60 mt-0.5">
                  {t.role} • {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. INSTAGRAM / THE ORDER COMMUNITY GRID */}
      <section className="py-16 bg-[#040405] border-t border-altar-silver/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
          <span className="font-mono text-[10px] text-altar-pewter tracking-widest uppercase">
            // The Order
          </span>
          <h3 className="font-serif text-xl sm:text-2xl text-altar-bone uppercase tracking-widest mt-1">
            Tag #GraveAltar to Consecrate
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 px-2">
          {IMAGES.orderCommunity.map((img, i) => (
            <div key={i} className="aspect-square overflow-hidden bg-[#0a0a0c] relative group">
              <img
                src={img}
                alt="Devotee Order community"
                loading="lazy"
                className="w-full h-full object-cover gothic-photo group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="font-mono text-[10px] text-altar-silver tracking-widest uppercase">
                  @gravealtar
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

