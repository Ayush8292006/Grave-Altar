import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCartStore } from '../hooks/useCartStore';
import ProductCard from '../components/common/ProductCard';
import OrnamentalDivider from '../components/common/OrnamentalDivider';

export default function WishlistPage() {
  const { wishlist, toggleWishlist, addToCart } = useCartStore();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-[#050505] text-[#efeae0] pt-36 pb-24 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center border border-altar-silver/15 bg-[#0a0a0c] p-8 sm:p-12">
          <div className="w-16 h-16 mx-auto mb-4 border border-dashed border-altar-silver/30 flex items-center justify-center text-altar-silver">
            <Heart size={28} />
          </div>
          <h1 className="font-serif text-2xl uppercase tracking-widest text-altar-bone mb-3">
            Your Reliquary Is Empty
          </h1>
          <p className="font-sans text-xs text-altar-pewter leading-relaxed mb-8">
            You have not consecrated any talismans into your sacred reliquary. Discover pieces and tap the heart sigil to preserve them.
          </p>
          <Link to="/shop" className="btn-altar w-full py-3 text-xs">
            Explore Relics
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-[#efeae0] pt-28 sm:pt-36 pb-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-mono text-[10px] text-altar-pewter tracking-widest uppercase">
            // Sacred Storage
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl uppercase tracking-widest text-altar-bone mt-2 mb-3">
            The Reliquary
          </h1>
          <p className="font-sans text-xs sm:text-sm text-altar-pewter font-light">
            {wishlist.length} {wishlist.length === 1 ? 'artifact' : 'artifacts'} consecrated in your personal vault.
          </p>
          <OrnamentalDivider variant="crescent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <div key={product.id} className="flex flex-col">
              <ProductCard product={product} />
              <button
                onClick={() => addToCart(product)}
                className="mt-2 py-2.5 px-4 bg-[#111114] border border-altar-silver/20 text-xs font-serif uppercase tracking-wider text-altar-silver hover:border-altar-silver hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag size={14} />
                <span>Transfer To Altar</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

