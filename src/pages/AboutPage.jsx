import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_LORE } from '../data/brand';
import IMAGES from '../data/images';
import OrnamentalDivider from '../components/common/OrnamentalDivider';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#efeae0] pt-28 sm:pt-36 pb-32 md:pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <img
            src={IMAGES.brandLogo}
            alt="GRAVE ALTAR Seal"
            className="w-24 h-24 mx-auto mb-6 object-contain filter drop-shadow-[0_0_20px_rgba(214,211,204,0.3)]"
          />
          <span className="font-mono text-[10px] text-altar-pewter tracking-widest uppercase">
            // The Solitary Creed
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl uppercase tracking-widest text-altar-bone mt-2 mb-4">
            The Crypt & The Forge
          </h1>
          <p className="font-sans text-xs sm:text-sm text-altar-pewter leading-relaxed font-light">
            {BRAND_LORE.creed}
          </p>
          <OrnamentalDivider variant="fleur" />
        </div>

        {/* Story Section 1: The Origin */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
          <div className="relative aspect-[4/5] bg-[#0c0c0e] border border-altar-silver/20 overflow-hidden">
            <img
              src={IMAGES.candlelitCrypt}
              alt="Candlelit ritual altar"
              className="w-full h-full object-cover gothic-photo"
            />
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-altar-pewter leading-relaxed font-light">
            <span className="font-mono text-[10px] text-altar-silver uppercase tracking-widest">
              01 • Monastic Roots
            </span>
            <h2 className="font-serif text-2xl uppercase tracking-wider text-altar-bone font-normal">
              Born from the Silence of Stone
            </h2>
            <p>
              GRAVE ALTAR was founded in opposition to the hollow disposable trinkets of commercial fast-fashion. We looked at ancient cathedral cloisters, ossuaries, reliquaries, and Gothic ironwork—structures built to endure plague, fire, and epochal ruin—and resolved to forge jewellery with that exact sovereign permanence.
            </p>
            <p>
              Every talisman carries authentic mass. When you place a Grave Altar ring upon your finger, you feel the immediate density of genuine .925 sterling silver and unadulterated cold pewter.
            </p>
          </div>
        </div>

        {/* Story Section 2: Metallurgy & Blackening */}
        <div id="metallurgy" className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
          <div className="order-2 md:order-1 space-y-4 text-xs sm:text-sm text-altar-pewter leading-relaxed font-light">
            <span className="font-mono text-[10px] text-altar-silver uppercase tracking-widest">
              02 • The Alchemy of Oxidation
            </span>
            <h2 className="font-serif text-2xl uppercase tracking-wider text-altar-bone font-normal">
              The Sulfur Rite
            </h2>
            <p>
              To achieve the deep charcoal patina of centuries-old weathered headstones, our metal undergoes an ancient sulphur oxidation bath. The silver blackens violently in the crucible.
            </p>
            <p>
              Our artisans then spend hours hand-buffing the exterior reliefs with microscopic abrasive cloth. The high ridges shine like polished moonlight, while the recesses remain steeped in midnight shadow.
            </p>
          </div>

          <div className="order-1 md:order-2 relative aspect-[4/5] bg-[#0c0c0e] border border-altar-silver/20 overflow-hidden">
            <img
              src={IMAGES.craftAltar}
              alt="Grave altar artisan metallurgy"
              className="w-full h-full object-cover gothic-photo"
            />
          </div>
        </div>

        {/* Three Pillars */}
        <div className="p-8 sm:p-12 bg-[#0c0c0e] border border-altar-silver/15 mb-20">
          <h3 className="font-serif text-xl sm:text-2xl uppercase tracking-widest text-altar-bone text-center mb-8">
            The Three Sacred Tenets
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BRAND_LORE.pillars.map((p) => (
              <div key={p.number} className="space-y-2">
                <span className="font-mono text-xs text-altar-silver uppercase tracking-widest">
                  Tenet {p.number}
                </span>
                <h4 className="font-serif text-base uppercase tracking-wider text-altar-bone">
                  {p.title}
                </h4>
                <p className="font-sans text-xs text-altar-pewter leading-relaxed font-light">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Ring Sizing Chart */}
        <div id="sizing" className="mb-20">
          <div className="text-center mb-8">
            <span className="font-mono text-[10px] text-altar-pewter tracking-widest uppercase">
              // Proportion & Fit
            </span>
            <h3 className="font-serif text-2xl uppercase tracking-widest text-altar-bone mt-1">
              Sanctuary Ring Sizing Guide
            </h3>
            <p className="font-sans text-xs text-altar-pewter mt-1">
              Wrap a thin strip of paper around the intended knuckle. Measure millimeters to determine your exact US size.
            </p>
          </div>

          <div className="overflow-x-auto bg-[#0a0a0c] border border-altar-silver/15 p-4">
            <table className="w-full text-left text-xs text-altar-pewter font-mono">
              <thead className="border-b border-altar-silver/20 text-altar-silver font-serif uppercase tracking-wider">
                <tr>
                  <th className="py-2.5 px-4">US Size</th>
                  <th className="py-2.5 px-4">Inside Diameter</th>
                  <th className="py-2.5 px-4">Inner Circumference</th>
                  <th className="py-2.5 px-4">Recommended For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-altar-silver/10">
                <tr><td className="py-2.5 px-4 text-altar-bone">US 7</td><td className="py-2.5 px-4">17.3 mm</td><td className="py-2.5 px-4">54.4 mm</td><td className="py-2.5 px-4 text-altar-pewter/80">Pinky / Small Ring Finger</td></tr>
                <tr><td className="py-2.5 px-4 text-altar-bone">US 8</td><td className="py-2.5 px-4">18.1 mm</td><td className="py-2.5 px-4">57.0 mm</td><td className="py-2.5 px-4 text-altar-pewter/80">Standard Ring Finger</td></tr>
                <tr><td className="py-2.5 px-4 text-altar-bone">US 9</td><td className="py-2.5 px-4">18.9 mm</td><td className="py-2.5 px-4">59.5 mm</td><td className="py-2.5 px-4 text-altar-pewter/80">Middle Finger</td></tr>
                <tr><td className="py-2.5 px-4 text-altar-bone">US 10</td><td className="py-2.5 px-4">19.8 mm</td><td className="py-2.5 px-4">62.1 mm</td><td className="py-2.5 px-4 text-altar-pewter/80">Index Finger</td></tr>
                <tr><td className="py-2.5 px-4 text-altar-bone">US 11</td><td className="py-2.5 px-4">20.6 mm</td><td className="py-2.5 px-4">64.6 mm</td><td className="py-2.5 px-4 text-altar-pewter/80">Thumb / Large Index</td></tr>
                <tr><td className="py-2.5 px-4 text-altar-bone">US 12</td><td className="py-2.5 px-4">21.4 mm</td><td className="py-2.5 px-4">67.2 mm</td><td className="py-2.5 px-4 text-altar-pewter/80">Large Thumb / Heavy Band</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs */}
        <div id="care" className="mb-16">
          <div className="text-center mb-8">
            <span className="font-mono text-[10px] text-altar-pewter tracking-widest uppercase">
              // Inquiries
            </span>
            <h3 className="font-serif text-2xl uppercase tracking-widest text-altar-bone mt-1">
              Frequently Inscribed Inquiries
            </h3>
          </div>

          <div className="space-y-4">
            {BRAND_LORE.faqs.map((faq, i) => (
              <div key={i} className="p-6 bg-[#0c0c0e] border border-altar-silver/10">
                <h4 className="font-serif text-sm uppercase tracking-wider text-altar-silver mb-2">
                  {faq.q}
                </h4>
                <p className="font-sans text-xs text-altar-pewter leading-relaxed font-light">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA to Shop */}
        <div className="text-center pt-8 border-t border-altar-silver/10">
          <Link to="/shop" className="btn-altar px-10 py-4 text-xs">
            Enter The Altar Vault
          </Link>
        </div>

      </div>
    </div>
  );
}

