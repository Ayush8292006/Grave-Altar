import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShieldCheck, ArrowLeft } from 'lucide-react';
import { useCartStore } from '../hooks/useCartStore';
import OrnamentalDivider from '../components/common/OrnamentalDivider';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCartStore();
  const subtotal = getCartTotal();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#050505] text-[#efeae0] pt-36 pb-24 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center border border-altar-silver/15 bg-[#0a0a0c] p-8 sm:p-12">
          <div className="w-16 h-16 mx-auto mb-4 border border-dashed border-altar-silver/30 flex items-center justify-center text-altar-silver">
            <ShieldCheck size={28} />
          </div>
          <h1 className="font-serif text-2xl uppercase tracking-widest text-altar-bone mb-3">
            Altar is Vacant
          </h1>
          <p className="font-sans text-xs text-altar-pewter leading-relaxed mb-8">
            You hold no sacred relics upon your altar stone. Venture into our sanctuary catacomb to claim one.
          </p>
          <Link to="/shop" className="btn-altar w-full py-3 text-xs">
            Summon First Relic
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-[#efeae0] pt-28 sm:pt-36 pb-32 md:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="font-mono text-[10px] text-altar-pewter tracking-widest uppercase">
              // Offerings
            </span>
            <h1 className="font-serif text-2xl sm:text-4xl uppercase tracking-widest text-altar-bone mt-1">
              Consecrated Cart
            </h1>
          </div>
          <button
            onClick={clearCart}
            className="text-xs font-mono text-altar-pewter hover:text-altar-blood transition-colors"
          >
            Clear Entire Altar
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Cart Table / List (Spans 8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            {cart.map((item, idx) => (
              <div
                key={`${item.product.id}-${item.size}-${idx}`}
                className="p-4 sm:p-6 bg-[#0c0c0e] border border-altar-silver/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.product.images.primary}
                    alt={item.product.name}
                    className="w-20 h-24 sm:w-24 sm:h-28 object-cover bg-black border border-altar-silver/10"
                  />
                  <div>
                    <span className="font-mono text-[10px] text-altar-pewter uppercase tracking-wider block">
                      {item.product.category}
                    </span>
                    <Link
                      to={`/product/${item.product.slug}`}
                      className="font-serif text-base text-altar-bone hover:text-white uppercase tracking-wider transition-colors"
                    >
                      {item.product.name}
                    </Link>
                    <p className="font-mono text-xs text-altar-silver/70 mt-1">
                      Size: {item.size}
                    </p>
                    <p className="font-serif text-xs text-altar-bone mt-2 sm:hidden">
                      ₹{item.product.price.toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full sm:w-auto gap-6 pt-2 sm:pt-0 border-t sm:border-0 border-altar-silver/10">
                  {/* Quantity */}
                  <div className="flex items-center border border-altar-silver/20 bg-[#070709]">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                      className="p-2 text-altar-pewter hover:text-white"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="px-3 font-mono text-xs text-altar-silver">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                      className="p-2 text-altar-pewter hover:text-white"
                    >
                      <Plus size={12} />
                    </button>
                  </div>

                  {/* Subtotal */}
                  <div className="text-right">
                    <span className="font-serif text-sm font-semibold text-altar-bone">
                      ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.product.id, item.size)}
                    className="text-altar-pewter hover:text-altar-blood transition-colors p-2"
                    aria-label="Remove item"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}

            <div className="pt-4 flex justify-between items-center text-xs">
              <Link to="/shop" className="inline-flex items-center gap-2 font-serif text-altar-silver hover:text-white">
                <ArrowLeft size={14} />
                <span>Return To Crypt</span>
              </Link>
            </div>
          </div>

          {/* Order Summary (Spans 4 cols) */}
          <div className="lg:col-span-4">
            <div className="p-6 bg-[#0c0c0e] border border-altar-silver/20 space-y-6">
              <h3 className="font-serif text-base uppercase tracking-widest text-altar-silver pb-3 border-b border-altar-silver/10">
                Offering Summary
              </h3>

              <div className="space-y-3 text-xs text-altar-pewter">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono text-altar-bone">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Insured Express Courier</span>
                  <span className="font-mono text-altar-silver">Complimentary</span>
                </div>
                <div className="flex justify-between">
                  <span>Crypt Presentation Coffer</span>
                  <span className="font-mono text-altar-silver">Included</span>
                </div>
                <div className="pt-3 border-t border-altar-silver/10 flex justify-between text-base font-serif text-altar-bone font-medium">
                  <span>Total Tribute</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="btn-altar w-full py-3.5 text-xs flex items-center justify-center gap-2"
              >
                <span>Proceed To Consecration</span>
                <ArrowRight size={14} />
              </Link>

              <div className="text-[11px] text-altar-pewter/70 text-center space-y-1">
                <p>✦ All pieces delivered in wax-sealed velvet coffers</p>
                <p>✦ Lifetime warranty on silver alloy authenticity</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

