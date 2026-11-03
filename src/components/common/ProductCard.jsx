import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, Plus } from 'lucide-react';
import { useCartStore } from '../../hooks/useCartStore';

export default function ProductCard({ product, className = '' }) {
  const [isHovered, setIsHovered] = useState(false);
  const { toggleWishlist, isInWishlist, setQuickViewProduct, addToCart } = useCartStore();

  const isLiked = isInWishlist(product.id);

  return (
    <article
      className={`group relative flex flex-col bg-[#0e0e10] border border-altar-silver/10 hover:border-altar-silver/30 transition-all duration-500 overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Visual Image Container with Dual Image Crossfade */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#070708]">
        {/* Subtle Shimmer Overlay on Card */}
        <div className="absolute inset-0 z-10 pointer-events-none group-hover:bg-gradient-to-t group-hover:from-black/60 group-hover:to-transparent transition-opacity duration-300" />

        {/* Primary Image */}
        <img
          src={product.images.primary}
          alt={product.name}
          loading="lazy"
          width="400"
          height="500"
          className={`absolute inset-0 w-full h-full object-cover object-center gothic-photo transition-opacity duration-700 ease-in-out ${
            isHovered && product.images.secondary ? 'opacity-0' : 'opacity-100 scale-100 group-hover:scale-105'
          }`}
        />

        {/* Secondary Image (Hover State) */}
        {product.images.secondary && (
          <img
            src={product.images.secondary}
            alt={`${product.name} alternate view`}
            loading="lazy"
            width="400"
            height="500"
            className={`absolute inset-0 w-full h-full object-cover object-center gothic-photo transition-all duration-700 ease-in-out ${
              isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
          />
        )}

        {/* Badges: New / Limited Stock / Sale */}
        <div className="absolute top-3 left-3 z-20 flex flex-col gap-1.5 pointer-events-none">
          {product.isNew && (
            <span className="bg-[#050505]/90 border border-altar-silver/30 text-[9px] font-serif uppercase tracking-widest px-2 py-0.5 text-altar-bone">
              New Relic
            </span>
          )}
          {product.stock <= 5 && (
            <span className="bg-altar-blood/90 border border-altar-blood-glow text-[9px] font-serif uppercase tracking-widest px-2 py-0.5 text-altar-bone">
              {product.stock} Left
            </span>
          )}
        </div>

        {/* Wishlist Button (Always accessible) */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product);
          }}
          className={`absolute top-3 right-3 z-20 p-2 rounded-full border transition-all duration-300 ${
            isLiked
              ? 'bg-altar-blood border-altar-blood-glow text-altar-bone scale-110 shadow-[0_0_12px_rgba(92,15,20,0.8)]'
              : 'bg-[#050505]/75 border-altar-silver/20 text-altar-pewter hover:text-white hover:border-altar-silver/50'
          }`}
          aria-label={isLiked ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart size={15} fill={isLiked ? 'currentColor' : 'none'} strokeWidth={1.5} />
        </button>

        {/* Quick View & Instant Add Overlay Buttons (Desktop Hover) */}
        <div className="hidden sm:flex absolute bottom-3 inset-x-3 z-20 gap-2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={(e) => {
              e.preventDefault();
              setQuickViewProduct(product);
            }}
            className="flex-1 py-2 px-3 bg-[#0a0a0c]/90 border border-altar-silver/30 text-altar-bone text-[10px] font-serif uppercase tracking-widest hover:border-altar-silver hover:bg-altar-charcoal transition-colors flex items-center justify-center gap-1.5 backdrop-blur-sm"
          >
            <Eye size={13} />
            <span>Examine</span>
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="py-2 px-3 bg-altar-silver text-[#050505] text-[10px] font-serif uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center"
            title="Quick add to altar"
          >
            <Plus size={15} />
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-4 flex flex-col flex-1 justify-between bg-gradient-to-b from-[#0e0e10] to-[#070708]">
        <div>
          <div className="flex items-center justify-between text-[10px] font-serif uppercase tracking-widest text-altar-pewter/70 mb-1">
            <span>{product.category}</span>
            <span className="font-mono text-[9px]">{product.material.split('&')[0]}</span>
          </div>

          <Link to={`/product/${product.slug}`} className="block">
            <h3 className="font-serif text-sm tracking-wider text-altar-bone group-hover:text-white transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>
          <p className="font-sans text-xs text-altar-pewter line-clamp-1 mt-1 font-light">
            {product.tagline}
          </p>
        </div>

        {/* Pricing & Mobile Quick Action */}
        <div className="mt-4 pt-3 border-t border-altar-silver/10 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-sm font-semibold tracking-wider text-altar-bone">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice > product.price && (
              <span className="font-mono text-xs text-altar-pewter/60 line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          {/* Mobile Tap-to-Examine */}
          <button
            onClick={() => setQuickViewProduct(product)}
            className="sm:hidden text-[10px] font-serif tracking-widest uppercase text-altar-silver/80 underline underline-offset-4 touch-press py-1"
          >
            View
          </button>
        </div>
      </div>
    </article>
  );
}

