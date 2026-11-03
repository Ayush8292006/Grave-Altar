import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Compass, Heart, ShoppingBag, Shield } from 'lucide-react';
import { useCartStore } from '../../hooks/useCartStore';

export default function BottomTabBar() {
  const { getCartCount, wishlist, openCart } = useCartStore();
  const cartCount = getCartCount();
  const wishlistCount = wishlist.length;

  return (
    <nav
      aria-label="Mobile Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#070708]/95 backdrop-blur-xl border-t border-altar-silver/10 px-2 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]"
    >
      <div className="grid grid-cols-5 items-center justify-around">
        {/* Home */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center min-h-[44px] py-1 transition-all touch-press ${
              isActive ? 'text-altar-silver font-medium' : 'text-altar-pewter hover:text-altar-silver'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <Home size={19} strokeWidth={isActive ? 2 : 1.5} />
              <span className="text-[9px] font-serif tracking-wider uppercase mt-1">Home</span>
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-altar-silver mt-0.5 shadow-[0_0_6px_#d6d3cc]" />
              )}
            </>
          )}
        </NavLink>

        {/* Shop */}
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center min-h-[44px] py-1 transition-all touch-press ${
              isActive ? 'text-altar-silver font-medium' : 'text-altar-pewter hover:text-altar-silver'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <Compass size={19} strokeWidth={isActive ? 2 : 1.5} />
              <span className="text-[9px] font-serif tracking-wider uppercase mt-1">Shop</span>
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-altar-silver mt-0.5 shadow-[0_0_6px_#d6d3cc]" />
              )}
            </>
          )}
        </NavLink>

        {/* Wishlist */}
        <NavLink
          to="/wishlist"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center min-h-[44px] py-1 transition-all relative touch-press ${
              isActive ? 'text-altar-silver font-medium' : 'text-altar-pewter hover:text-altar-silver'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div className="relative">
                <Heart size={19} strokeWidth={isActive ? 2 : 1.5} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 w-3.5 h-3.5 bg-altar-blood text-[8px] text-altar-bone rounded-full flex items-center justify-center font-mono">
                    {wishlistCount}
                  </span>
                )}
              </div>
              <span className="text-[9px] font-serif tracking-wider uppercase mt-1">Saved</span>
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-altar-silver mt-0.5 shadow-[0_0_6px_#d6d3cc]" />
              )}
            </>
          )}
        </NavLink>

        {/* Cart */}
        <button
          onClick={openCart}
          className="flex flex-col items-center justify-center min-h-[44px] py-1 transition-all relative touch-press text-altar-pewter hover:text-altar-silver"
          aria-label="Open Cart"
        >
          <div className="relative">
            <ShoppingBag size={19} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 w-3.5 h-3.5 bg-altar-blood text-[8px] text-altar-bone rounded-full flex items-center justify-center font-mono">
                {cartCount}
              </span>
            )}
          </div>
          <span className="text-[9px] font-serif tracking-wider uppercase mt-1">Cart</span>
        </button>

        {/* Creed / About */}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center min-h-[44px] py-1 transition-all touch-press ${
              isActive ? 'text-altar-silver font-medium' : 'text-altar-pewter hover:text-altar-silver'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <Shield size={19} strokeWidth={isActive ? 2 : 1.5} />
              <span className="text-[9px] font-serif tracking-wider uppercase mt-1">Creed</span>
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-altar-silver mt-0.5 shadow-[0_0_6px_#d6d3cc]" />
              )}
            </>
          )}
        </NavLink>
      </div>
    </nav>
  );
}

