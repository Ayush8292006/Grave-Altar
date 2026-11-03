import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';

// Common Components
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import BottomTabBar from './components/common/BottomTabBar';
import CustomCursor from './components/common/CustomCursor';
import Loader from './components/common/Loader';
import CartDrawer from './components/common/CartDrawer';
import SearchDrawer from './components/common/SearchDrawer';
import QuickViewModal from './components/common/QuickViewModal';
import Toast from './components/common/Toast';

// Pages
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import WishlistPage from './pages/WishlistPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);

  // Smooth scroll using Lenis
  useEffect(() => {
    // Only smooth-scroll on desktop devices to preserve native touch momentum on phones
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    try {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      const rafId = requestAnimationFrame(raf);

      return () => {
        cancelAnimationFrame(rafId);
        lenis.destroy();
      };
    } catch (e) {
      console.warn('Lenis smooth scroll failed to initialize', e);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#efeae0] selection:bg-altar-blood selection:text-white">
      {/* Film grain noise texture overlay */}
      <div className="film-grain" />

      {/* Cinematic intro loader on first load */}
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {/* Custom silver cursor (desktop) */}
      <CustomCursor />

      {/* Scroll restoration helper */}
      <ScrollToTop />

      {/* Main sticky & responsive header */}
      <Header />

      {/* Page Routing */}
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Global Modals & Drawers */}
      <CartDrawer />
      <SearchDrawer />
      <QuickViewModal />
      <Toast />

      {/* Footer */}
      <Footer />

      {/* Native Mobile App Bottom Tab Bar (fixed below 768px) */}
      <BottomTabBar />
    </div>
  );
}

