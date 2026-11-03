import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import IMAGES from '../../data/images';
import OrnamentalDivider from './OrnamentalDivider';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#040405] text-altar-pewter border-t border-altar-silver/10 pt-16 pb-28 md:pb-16 relative overflow-hidden">
      {/* Background ambient gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(214,211,204,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Newsletter / The Order Signup */}
        <div className="max-w-xl mx-auto text-center mb-16">
          <img
            src={IMAGES.brandLogo}
            alt="GRAVE ALTAR"
            className="w-16 h-16 mx-auto mb-4 object-contain filter drop-shadow-[0_0_12px_rgba(214,211,204,0.2)]"
          />
          <h3 className="font-serif text-xl sm:text-2xl text-altar-bone tracking-widest uppercase mb-2">
            Join The Order
          </h3>
          <p className="font-sans text-xs text-altar-pewter/80 leading-relaxed mb-6 max-w-md mx-auto">
            Receive clandestine release notifications, secret vault keys, and invitations to solitary seasonal ceremonies.
          </p>

          {subscribed ? (
            <div className="flex items-center justify-center gap-2 p-3 bg-altar-charcoal-card border border-altar-silver/20 text-altar-silver text-xs font-serif tracking-wider">
              <Check size={16} className="text-altar-silver" />
              <span>Thy covenant is recorded in the dark annals.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter thy sacred epistle (email)..."
                className="flex-1 bg-[#0c0c0e] border border-altar-silver/20 px-4 py-2.5 text-xs text-altar-bone font-mono placeholder:text-altar-pewter/40 focus:outline-none focus:border-altar-silver"
              />
              <button
                type="submit"
                className="btn-altar px-5 py-2.5 text-[10px]"
              >
                Inscribe
              </button>
            </form>
          )}
        </div>

        <OrnamentalDivider variant="fleur" className="mb-12" />

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-xs">
          {/* Relics */}
          <div>
            <h4 className="font-serif text-xs text-altar-silver uppercase tracking-widest mb-4">
              Sacred Relics
            </h4>
            <ul className="space-y-2.5">
              <li><Link to="/shop?category=rings" className="hover:text-altar-bone transition-colors">Signet & Claw Rings</Link></li>
              <li><Link to="/shop?category=pendants" className="hover:text-altar-bone transition-colors">Daggers & Talismans</Link></li>
              <li><Link to="/shop?category=chokers" className="hover:text-altar-bone transition-colors">Leather & Silver Chokers</Link></li>
              <li><Link to="/shop?category=bracelets" className="hover:text-altar-bone transition-colors">Vertebrae & Link Cuffs</Link></li>
              <li><Link to="/shop?category=relics" className="hover:text-altar-bone transition-colors">Brooches & Vessels</Link></li>
            </ul>
          </div>

          {/* The Order */}
          <div>
            <h4 className="font-serif text-xs text-altar-silver uppercase tracking-widest mb-4">
              The Order
            </h4>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="hover:text-altar-bone transition-colors">The Solitary Forge</Link></li>
              <li><Link to="/about#metallurgy" className="hover:text-altar-bone transition-colors">Blackened Metallurgy</Link></li>
              <li><Link to="/#lookbook" className="hover:text-altar-bone transition-colors">Devotee Lookbook</Link></li>
              <li><Link to="/contact" className="hover:text-altar-bone transition-colors">Bespoke Commissions</Link></li>
            </ul>
          </div>

          {/* Sanctuary Care */}
          <div>
            <h4 className="font-serif text-xs text-altar-silver uppercase tracking-widest mb-4">
              Sanctuary Care
            </h4>
            <ul className="space-y-2.5">
              <li><Link to="/about#care" className="hover:text-altar-bone transition-colors">Oxidized Silver Care</Link></li>
              <li><Link to="/about#sizing" className="hover:text-altar-bone transition-colors">Ring Sizing Chart</Link></li>
              <li><Link to="/contact" className="hover:text-altar-bone transition-colors">Insured Courier Dispatch</Link></li>
              <li><Link to="/contact" className="hover:text-altar-bone transition-colors">Sacred Guarantee</Link></li>
            </ul>
          </div>

          {/* Crypt Legal */}
          <div>
            <h4 className="font-serif text-xs text-altar-silver uppercase tracking-widest mb-4">
              The Crypt
            </h4>
            <p className="text-[11px] leading-relaxed text-altar-pewter/70 mb-4">
              Forged in Mumbai. Dispatched to gothic devotees across the globe in heavy crushed velvet coffins.
            </p>
            <div className="flex items-center gap-2 text-altar-silver text-[11px] font-mono">
              <ShieldCheck size={14} />
              <span>Complimentary Insured Delivery</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payment methods */}
        <div className="pt-8 border-t border-altar-silver/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-altar-pewter/60">
          <p className="font-mono">
            © {new Date().getFullYear()} GRAVE ALTAR. FORGED IN SHADOW. ALL RIGHTS CONSECRATED.
          </p>

          <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-wider text-altar-pewter">
            <span className="px-1.5 py-0.5 border border-altar-silver/20">UPI</span>
            <span className="px-1.5 py-0.5 border border-altar-silver/20">RuPay</span>
            <span className="px-1.5 py-0.5 border border-altar-silver/20">Visa</span>
            <span className="px-1.5 py-0.5 border border-altar-silver/20">Mastercard</span>
            <span className="px-1.5 py-0.5 border border-altar-silver/20">NetBanking</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

