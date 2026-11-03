import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, ShieldAlert } from 'lucide-react';
import IMAGES from '../data/images';
import OrnamentalDivider from '../components/common/OrnamentalDivider';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Bespoke Gothic Commission',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#efeae0] pt-28 sm:pt-36 pb-32 md:pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-[10px] text-altar-pewter tracking-widest uppercase">
            // The Cloister Epistle
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl uppercase tracking-widest text-altar-bone mt-2 mb-3">
            Summon The Artisan
          </h1>
          <p className="font-sans text-xs sm:text-sm text-altar-pewter font-light">
            Inquire regarding custom lost-wax commissions, heavy signet ring engraving, or consecrated dispatches.
          </p>
          <OrnamentalDivider variant="fleur" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Form (Spans 7 cols) */}
          <div className="lg:col-span-7 bg-[#0c0c0e] border border-altar-silver/15 p-6 sm:p-10">
            {isSent ? (
              <div className="py-16 text-center space-y-4">
                <CheckCircle2 size={36} className="text-altar-silver mx-auto" />
                <h3 className="font-serif text-xl uppercase tracking-widest text-altar-bone">
                  Epistle Received
                </h3>
                <p className="font-sans text-xs text-altar-pewter leading-relaxed max-w-sm mx-auto">
                  Thy dispatch has been placed into the artisan’s ledger. Our foundry master will reply before the following dusk.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="btn-altar text-xs py-2.5 px-6 mt-4"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-altar-silver mb-2">
                    Thy Name / Inscription *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Lady Corvus"
                    className="w-full bg-[#121215] border border-altar-silver/20 text-xs text-altar-bone px-4 py-3 focus:outline-none focus:border-altar-silver font-serif"
                  />
                </div>

                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-altar-silver mb-2">
                    Epistle (Email) *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="devotee@sanctum.com"
                    className="w-full bg-[#121215] border border-altar-silver/20 text-xs text-altar-bone px-4 py-3 focus:outline-none focus:border-altar-silver font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-altar-silver mb-2">
                    Inquiry Nature
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full bg-[#121215] border border-altar-silver/20 text-xs text-altar-silver px-4 py-3 focus:outline-none focus:border-altar-silver font-serif cursor-pointer"
                  >
                    <option value="Bespoke Gothic Commission">Bespoke Gothic Commission (Custom Cast)</option>
                    <option value="Ring Sizing Exchange">Ring Sizing & Resizing Exchange</option>
                    <option value="Order Tracking">Sanctuary Order Tracking & Dispatch</option>
                    <option value="Press & Sacred Collaboration">Editorial & Dark Artistry Collaboration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-serif uppercase tracking-wider text-altar-silver mb-2">
                    Thy Epistle & Message *
                  </label>
                  <textarea
                    rows="5"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Inscribe the details of thy commission, wrist/finger sizing, or questions..."
                    className="w-full bg-[#121215] border border-altar-silver/20 text-xs text-altar-bone px-4 py-3 focus:outline-none focus:border-altar-silver font-sans leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-altar w-full py-3.5 text-xs flex items-center justify-center gap-2"
                >
                  <Send size={14} />
                  <span>Seal & Dispatch Epistle</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Atelier Info & Map (Spans 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-[#0c0c0e] border border-altar-silver/15 space-y-4">
              <h3 className="font-serif text-sm uppercase tracking-widest text-altar-silver pb-2 border-b border-altar-silver/10">
                The Foundry Sanctuary
              </h3>

              <div className="space-y-4 text-xs text-altar-pewter leading-relaxed">
                <div className="flex gap-3">
                  <MapPin size={18} className="text-altar-silver flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-altar-bone block font-serif">Grave Altar Atelier</strong>
                    <span>Lower Parel Industrial Sanctuary, Old Mill Compound</span>
                    <span className="block">Mumbai, Maharashtra 400013, India</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Mail size={18} className="text-altar-silver flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-altar-bone block font-serif">Direct Scroll</strong>
                    <span className="font-mono text-altar-silver">inquiry@gravealtar.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bespoke Process Callout */}
            <div className="p-6 bg-[#08080a] border border-altar-silver/10 space-y-3">
              <h4 className="font-serif text-xs uppercase tracking-widest text-altar-silver">
                Bespoke Casting Guidelines
              </h4>
              <p className="font-sans text-xs text-altar-pewter/80 leading-relaxed font-light">
                Custom signet crests, memorial ashes reliquary chambers, and unique stone-setting require a minimum of 3 to 4 weeks of hand sculpture, lost-wax investment casting, and sulfur oxidation.
              </p>
            </div>

            {/* Atmospheric photo */}
            <div className="relative aspect-[16/9] border border-altar-silver/15 overflow-hidden">
              <img
                src={IMAGES.ironGates}
                alt="Cathedral iron gates"
                className="w-full h-full object-cover gothic-photo"
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

