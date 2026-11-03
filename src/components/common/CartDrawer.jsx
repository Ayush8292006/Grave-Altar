import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { useCartStore } from '../../hooks/useCartStore';

export default function CartDrawer() {
  const { cart, isCartOpen, closeCart, updateQuantity, removeFromCart, getCartTotal } = useCartStore();
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');

  if (!isCartOpen) return null;

  const rawSubtotal = getCartTotal();
  const discountAmount = Math.round((rawSubtotal * discountPercent) / 100);
  const finalTotal = Math.max(0, rawSubtotal - discountAmount);

  const applyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'DEVOTION10') {
      setDiscountPercent(10);
      setPromoSuccess('Sacred rite applied: 10% tribute spared');
      setPromoError('');
    } else {
      setPromoError('Unknown sigil or expired offering');
      setPromoSuccess('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      <aside
        aria-label="Your Altar Cart"
        className="fixed inset-y-0 right-0 max-w-full flex pl-10"
      >
        <div className="w-screen max-w-md bg-[#0a0a0c] border-l border-altar-silver/15 text-altar-bone flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-5 border-b border-altar-silver/10 flex items-center justify-between bg-[#070708]">
            <div>
              <h2 className="font-serif text-base tracking-widest uppercase text-altar-silver">
                Your Altar
              </h2>
              <span className="font-mono text-[10px] text-altar-pewter tracking-wider">
                {cart.length} Consecrated {cart.length === 1 ? 'Relic' : 'Relics'}
              </span>
            </div>
            <button
              onClick={closeCart}
              className="p-2 text-altar-pewter hover:text-white transition-colors"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="py-20 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border border-dashed border-altar-silver/20 flex items-center justify-center mb-4 text-altar-pewter">
                  <ShieldCheck size={28} strokeWidth={1.2} />
                </div>
                <h3 className="font-serif text-sm uppercase tracking-widest text-altar-silver mb-2">
                  Your Altar is Bare
                </h3>
                <p className="font-sans text-xs text-altar-pewter/70 max-w-xs mb-6">
                  No sacred relics currently rest upon your altar stone. Explore our catacomb collection to summon one.
                </p>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="btn-altar text-xs py-2.5 px-6"
                >
                  Explore The Vault
                </Link>
              </div>
            ) : (
              cart.map((item, index) => (
                <div
                  key={`${item.product.id}-${item.size}-${index}`}
                  className="flex gap-4 p-3 bg-[#111114] border border-altar-silver/10 group"
                >
                  <div className="w-20 h-24 bg-[#050505] flex-shrink-0 overflow-hidden border border-altar-silver/10">
                    <img
                      src={item.product.images.primary}
                      alt={item.product.name}
                      className="w-full h-full object-cover object-center gothic-photo"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif text-xs uppercase tracking-wider text-altar-silver line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.size)}
                          className="text-altar-pewter hover:text-altar-blood transition-colors ml-2"
                          aria-label="Remove relic"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <span className="font-mono text-[10px] text-altar-pewter">
                        Size: {item.size}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-altar-silver/20 bg-[#08080a]">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                          className="p-1.5 text-altar-pewter hover:text-white transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-2 font-mono text-xs text-altar-silver">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                          className="p-1.5 text-altar-pewter hover:text-white transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <span className="font-serif text-xs font-semibold text-altar-bone">
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Area */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-altar-silver/10 bg-[#070708] space-y-4">
              {/* Promo code accordion / form */}
              <form onSubmit={applyPromo} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag size={13} className="absolute left-2.5 top-3 text-altar-pewter" />
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter Sigil Code (DEVOTION10)"
                    className="w-full bg-[#121215] border border-altar-silver/20 text-altar-bone text-xs font-mono pl-8 pr-3 py-2 uppercase placeholder:text-altar-pewter/40 focus:outline-none focus:border-altar-silver"
                  />
                </div>
                <button
                  type="submit"
                  className="px-3 py-2 bg-altar-charcoal-card border border-altar-silver/30 text-altar-silver hover:text-white text-xs font-serif uppercase tracking-wider"
                >
                  Apply
                </button>
              </form>
              {promoSuccess && <p className="text-[10px] text-green-400 font-mono">{promoSuccess}</p>}
              {promoError && <p className="text-[10px] text-red-400 font-mono">{promoError}</p>}

              {/* Summary lines */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-altar-pewter">
                  <span>Offering Subtotal</span>
                  <span className="font-mono">₹{rawSubtotal.toLocaleString('en-IN')}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-altar-silver">
                    <span>Sigil Discount (10%)</span>
                    <span className="font-mono text-green-400">-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between text-altar-pewter">
                  <span>Insured Courier Dispatch</span>
                  <span className="font-mono text-altar-silver">Complimentary</span>
                </div>
                <div className="flex justify-between text-sm font-serif text-altar-bone pt-2 border-t border-altar-silver/10 font-semibold">
                  <span>Final Tribute</span>
                  <span>₹{finalTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Link
                to="/checkout"
                onClick={closeCart}
                className="btn-altar w-full py-3.5 text-xs flex items-center justify-center gap-2 group"
              >
                <span>Proceed To Consecration</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <p className="text-center text-[10px] text-altar-pewter/60 flex items-center justify-center gap-1.5">
                <ShieldCheck size={12} />
                <span>Protected by 256-Bit Cryptographic Encryption</span>
              </p>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}

