import React, { useState } from 'react';
import { X, Check, Heart, ShieldAlert, Sparkles } from 'lucide-react';
import { useCartStore } from '../../hooks/useCartStore';

export default function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart, toggleWishlist, isInWishlist } = useCartStore();
  const [selectedSize, setSelectedSize] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const currentSize = selectedSize || (product.sizes ? product.sizes[0] : 'Standard');
  const isLiked = isInWishlist(product.id);

  const handleClose = () => {
    setQuickViewProduct(null);
    setSelectedSize(null);
    setActiveImageIndex(0);
  };

  const handleAdd = () => {
    addToCart(product, currentSize, 1);
    handleClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-md transition-all duration-300">
      {/* Backdrop tap to close */}
      <div className="absolute inset-0" onClick={handleClose} />

      {/* Modal / Bottom Sheet Box */}
      <div className="relative z-10 w-full sm:max-w-3xl max-h-[90vh] sm:max-h-[85vh] bg-[#0c0c0e] border-t sm:border border-altar-silver/20 rounded-t-2xl sm:rounded-none overflow-hidden flex flex-col shadow-[0_20px_60px_rgba(0,0,0,0.9)] animate-in fade-in slide-in-from-bottom duration-300">
        
        {/* Mobile Pull Handle */}
        <div className="sm:hidden w-full flex justify-center py-2.5 bg-[#08080a] border-b border-altar-silver/10">
          <div className="w-12 h-1 rounded-full bg-altar-pewter/40" />
        </div>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 p-2 text-altar-pewter hover:text-white transition-colors bg-[#050505]/60 rounded-full"
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        <div className="overflow-y-auto p-5 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Gallery View */}
          <div className="flex flex-col gap-3">
            <div className="relative aspect-square w-full bg-[#050505] overflow-hidden border border-altar-silver/10">
              <img
                src={product.images.gallery ? product.images.gallery[activeImageIndex] : product.images.primary}
                alt={product.name}
                className="w-full h-full object-cover object-center gothic-photo transition-all duration-500"
              />
            </div>

            {/* Thumbnail dots/selectors */}
            {product.images.gallery && product.images.gallery.length > 1 && (
              <div className="flex gap-2">
                {product.images.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-16 h-16 border overflow-hidden ${
                      activeImageIndex === idx ? 'border-altar-silver' : 'border-altar-silver/20 opacity-60'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details & Actions */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-serif uppercase tracking-widest text-altar-pewter mb-1">
                <span>{product.category}</span>
                <span className="font-mono text-altar-silver">{product.stock} in crypt</span>
              </div>

              <h2 className="font-serif text-xl sm:text-2xl tracking-wider text-altar-bone mb-2">
                {product.name}
              </h2>

              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-serif text-lg text-altar-bone font-medium">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice > product.price && (
                  <span className="font-mono text-sm text-altar-pewter/60 line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
              </div>

              <p className="font-sans text-xs text-altar-pewter leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Sizes */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <div className="flex justify-between text-xs font-serif uppercase tracking-wider text-altar-silver mb-2">
                    <span>Select Size</span>
                    <span className="text-altar-pewter">{currentSize}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`px-3 py-1.5 text-xs font-serif uppercase tracking-wider border transition-all ${
                          currentSize === s
                            ? 'border-altar-silver bg-altar-silver/20 text-white'
                            : 'border-altar-silver/20 text-altar-pewter hover:border-altar-silver/50'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Material specifications */}
              <div className="text-xs space-y-1.5 py-3 border-y border-altar-silver/10 text-altar-pewter mb-6">
                <p><span className="text-altar-silver font-serif">Alloy:</span> {product.material}</p>
                <p><span className="text-altar-silver font-serif">Mass:</span> {product.weight}</p>
                <p><span className="text-altar-silver font-serif">Provenance:</span> {product.origin}</p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={handleAdd}
                className="btn-altar flex-1 py-3 text-xs"
              >
                Consecrate To Altar
              </button>

              <button
                onClick={() => toggleWishlist(product)}
                className={`p-3 border transition-colors ${
                  isLiked
                    ? 'border-altar-blood bg-altar-blood text-white'
                    : 'border-altar-silver/30 text-altar-silver hover:border-altar-silver'
                }`}
                aria-label="Save to Wishlist"
              >
                <Heart size={18} fill={isLiked ? 'currentColor' : 'none'} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

