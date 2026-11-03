import { create } from 'zustand';

export const useCartStore = create((set, get) => {
  // Load initial state from localStorage
  const savedCart = (() => {
    try {
      const item = localStorage.getItem('grave_altar_cart');
      return item ? JSON.parse(item) : [];
    } catch {
      return [];
    }
  })();

  const savedWishlist = (() => {
    try {
      const item = localStorage.getItem('grave_altar_wishlist');
      return item ? JSON.parse(item) : [];
    } catch {
      return [];
    }
  })();

  return {
    cart: savedCart,
    wishlist: savedWishlist,
    isCartOpen: false,
    isSearchOpen: false,
    quickViewProduct: null,
    toastMessage: null,

    // Cart actions
    addToCart: (product, size = null, quantity = 1) => {
      const chosenSize = size || (product.sizes && product.sizes.length > 0 ? product.sizes[0] : 'Standard');
      const currentCart = get().cart;
      const existingIndex = currentCart.findIndex(
        item => item.product.id === product.id && item.size === chosenSize
      );

      let newCart;
      if (existingIndex > -1) {
        newCart = currentCart.map((item, idx) =>
          idx === existingIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        newCart = [...currentCart, { product, size: chosenSize, quantity }];
      }

      set({ cart: newCart });
      try {
        localStorage.setItem('grave_altar_cart', JSON.stringify(newCart));
      } catch (e) {
        console.error(e);
      }
      get().showToast(`Added ${product.name} to your Altar`);
    },

    removeFromCart: (productId, size) => {
      const newCart = get().cart.filter(
        item => !(item.product.id === productId && item.size === size)
      );
      set({ cart: newCart });
      try {
        localStorage.setItem('grave_altar_cart', JSON.stringify(newCart));
      } catch (e) {
        console.error(e);
      }
      get().showToast('Item banished from Altar');
    },

    updateQuantity: (productId, size, quantity) => {
      if (quantity <= 0) {
        get().removeFromCart(productId, size);
        return;
      }
      const newCart = get().cart.map(item =>
        item.product.id === productId && item.size === size
          ? { ...item, quantity }
          : item
      );
      set({ cart: newCart });
      try {
        localStorage.setItem('grave_altar_cart', JSON.stringify(newCart));
      } catch (e) {
        console.error(e);
      }
    },

    clearCart: () => {
      set({ cart: [] });
      try {
        localStorage.removeItem('grave_altar_cart');
      } catch (e) {
        console.error(e);
      }
    },

    // Wishlist actions
    toggleWishlist: (product) => {
      const current = get().wishlist;
      const exists = current.some(item => item.id === product.id);
      let newWishlist;
      if (exists) {
        newWishlist = current.filter(item => item.id !== product.id);
        get().showToast(`Removed from your Reliquary`);
      } else {
        newWishlist = [...current, product];
        get().showToast(`Consecrated in your Reliquary`);
      }
      set({ wishlist: newWishlist });
      try {
        localStorage.setItem('grave_altar_wishlist', JSON.stringify(newWishlist));
      } catch (e) {
        console.error(e);
      }
    },

    isInWishlist: (productId) => {
      return get().wishlist.some(item => item.id === productId);
    },

    // UI state
    openCart: () => set({ isCartOpen: true }),
    closeCart: () => set({ isCartOpen: false }),

    openSearch: () => set({ isSearchOpen: true }),
    closeSearch: () => set({ isSearchOpen: false }),

    setQuickViewProduct: (product) => set({ quickViewProduct: product }),

    showToast: (message) => {
      set({ toastMessage: message });
      setTimeout(() => {
        if (get().toastMessage === message) {
          set({ toastMessage: null });
        }
      }, 3200);
    },

    getCartTotal: () => {
      return get().cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    },

    getCartCount: () => {
      return get().cart.reduce((count, item) => count + item.quantity, 0);
    }
  };
});

