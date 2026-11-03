import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { useCartStore } from '../../hooks/useCartStore';
import IMAGES from '../../data/images';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const {
    openCart,
    openSearch,
    getCartCount,
    wishlist
  } = useCartStore();

  const cartCount = getCartCount();
  const wishlistCount = wishlist.length;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer upon route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Shop All', path: '/shop' },
    { name: 'Rings', path: '/shop?category=rings' },
    { name: 'Pendants', path: '/shop?category=pendants' },
    { name: 'Chokers', path: '/shop?category=chokers' },
    { name: 'Lookbook', path: '/#lookbook' },
    { name: 'Philosophy', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#050505]/95 backdrop-blur-md border-b border-altar-silver/10 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3'
          : 'bg-gradient-to-b from-[#050505]/90 via-[#050505]/40 to-transparent py-4 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Mobile Menu Toggle / Desktop Brand Tagline */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-altar-silver hover:text-white transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>

          <span className="hidden xl:inline-block font-serif text-[10px] tracking-widest3 text-altar-pewter/70 uppercase">
            EST. MMXXIV • GOTHIC ACCS.
          </span>
        </div>

        {/* Center: Brand Official Monogram & Wordmark */}
        <Link to="/" className="flex flex-col items-center group">
          <div className="flex items-center gap-2.5">
            <img
              src={IMAGES.brandLogo}
              alt="GRAVE ALTAR"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain filter drop-shadow-[0_0_8px_rgba(214,211,204,0.3)] transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col text-left">
              <span className="font-serif tracking-widest2 text-base sm:text-lg font-semibold text-altar-silver group-hover:text-white transition-colors">
                GRAVE<span className="text-altar-pewter mx-1 font-light">+</span>ALTAR
              </span>
              <span className="font-serif tracking-widest3 text-[8px] sm:text-[9px] text-altar-pewter uppercase -mt-1 group-hover:text-altar-silver transition-colors">
                Gothic Accessories
              </span>
            </div>
          </div>
        </Link>

        {/* Right: Quick Action Icons */}
        <div className="flex items-center gap-1 sm:gap-3">
          <button
            onClick={openSearch}
            className="p-2 text-altar-silver hover:text-white transition-colors relative"
            aria-label="Search Collection"
          >
            <Search size={19} strokeWidth={1.4} />
          </button>

          <Link
            to="/wishlist"
            className="hidden sm:flex p-2 text-altar-silver hover:text-white transition-colors relative"
            aria-label="Wishlist"
          >
            <Heart size={19} strokeWidth={1.4} />
            {wishlistCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-altar-blood text-[9px] font-mono text-altar-bone flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>

          <button
            onClick={openCart}
            className="p-2 text-altar-silver hover:text-white transition-colors relative"
            aria-label="Open Cart"
          >
            <ShoppingBag size={19} strokeWidth={1.4} />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-altar-blood text-[9px] font-mono text-altar-bone flex items-center justify-center ring-1 ring-altar-silver/30">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Desktop Sub-navigation Bar */}
      <nav className="hidden md:flex items-center justify-center gap-8 pt-3 max-w-7xl mx-auto px-4">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.name}
              to={link.path}
              className={`font-serif text-[11px] uppercase tracking-widest2 transition-all duration-300 relative py-1 ${
                isActive
                  ? 'text-altar-silver font-medium'
                  : 'text-altar-pewter hover:text-altar-bone'
              }`}
            >
              {link.name}
              {isActive && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-altar-silver to-transparent" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Mobile Drawer Navigation (Slide-in) */}
      <div
        className={`fixed inset-0 top-[60px] bg-[#050505]/98 backdrop-blur-xl z-50 md:hidden flex flex-col justify-between p-6 transition-all duration-400 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6 pt-4">
          <span className="text-[10px] font-serif uppercase tracking-widest3 text-altar-pewter/60 border-b border-altar-silver/10 pb-2">
            Sanctuary Navigation
          </span>
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between text-lg font-serif tracking-widest text-altar-bone hover:text-white transition-colors py-1"
            >
              <span>{link.name}</span>
              <span className="font-mono text-xs text-altar-pewter/50">0{idx + 1}</span>
            </Link>
          ))}
          <Link
            to="/wishlist"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-between text-lg font-serif tracking-widest text-altar-bone hover:text-white transition-colors py-1"
          >
            <span>My Reliquary (Wishlist)</span>
            <span className="font-mono text-xs text-altar-pewter/50">{wishlistCount}</span>
          </Link>
        </div>

        <div className="border-t border-altar-silver/10 pt-6">
          <p className="font-serif text-xs tracking-widest text-altar-pewter uppercase mb-2">
            The Dark Atelier
          </p>
          <p className="font-sans text-xs text-altar-pewter/70">
            Forged in shadow. Worn in devotion. Worldwide consecrated dispatch.
          </p>
        </div>
      </div>
    </header>
  );
}

