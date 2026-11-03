import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Heart, Plus, Minus, ShieldCheck, Truck, RefreshCw, ChevronRight, Share2, Sparkles, Check } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useCartStore } from '../hooks/useCartStore';
import ProductCard from '../components/common/ProductCard';
import OrnamentalDivider from '../components/common/OrnamentalDivider';

export default function ProductPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];

  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : 'Standard');
  const [quantity, setQuantity] = useState(1);
  const [copied, setCopied] = useState(false);

  const { addToCart, toggleWishlist, isInWishlist } = useCartStore();
  const isLiked = isInWishlist(product.id);

  // Reset states when changing product slug
  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImage(0);
    setSelectedSize(product.sizes ? product.sizes[0] : 'Standard');
    setQuantity(1);
  }, [slug, product]);

  const imagesList = product.images.gallery || [product.images.primary, product.images.secondary].filter(Boolean);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.isBestSeller)
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#050505] text-[#efeae0] pt-28 sm:pt-36 pb-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-serif text-altar-pewter mb-8">
          <Link to="/" className="hover:text-altar-silver">Altar</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-altar-silver">Relics</Link>
          <ChevronRight size={12} />
          <Link to={`/shop?category=${product.category}`} className="capitalize hover:text-altar-silver">
            {product.category}
          </Link>
          <ChevronRight size={12} />
          <span className="text-altar-silver truncate max-w-[200px]">{product.name}</span>
        </nav>

        {/* Product Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          
          {/* Left Column: Image Gallery (Spans 7 cols) */}
          <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
            
            {/* Thumbnails (Vertical on desktop) */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible no-scrollbar">
              {imagesList.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-16 h-20 sm:w-20 sm:h-24 flex-shrink-0 bg-[#0e0e11] border overflow-hidden transition-all ${
                    activeImage === idx
                      ? 'border-altar-silver shadow-[0_0_12px_rgba(214,211,204,0.25)]'
                      : 'border-altar-silver/20 opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`View angle ${idx + 1}`}
                >
                  <img src={img} alt={`${product.name} angle ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main Stage Image */}
            <div className="relative flex-1 aspect-[4/5] bg-[#0c0c0e] border border-altar-silver/15 overflow-hidden group">
              <img
                src={imagesList[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover object-center gothic-photo transition-transform duration-700 ease-out group-hover:scale-110 cursor-crosshair"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating Wishlist Button */}
              <button
                onClick={() => toggleWishlist(product)}
                className={`absolute top-4 right-4 z-10 p-3 rounded-full border transition-all ${
                  isLiked
                    ? 'bg-altar-blood border-altar-blood text-white shadow-[0_0_16px_rgba(92,15,20,0.9)]'
                    : 'bg-[#050505]/70 border-altar-silver/20 text-altar-silver hover:border-altar-silver'
                }`}
                aria-label="Save to reliquary"
              >
                <Heart size={18} fill={isLiked ? 'currentColor' : 'none'} />
              </button>
            </div>
          </div>

          {/* Right Column: Information & Purchasing (Spans 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Category & Badge */}
              <div className="flex items-center justify-between text-xs font-serif uppercase tracking-widest text-altar-pewter mb-2">
                <span>{product.category}</span>
                {product.stock <= 5 && (
                  <span className="text-altar-blood-glow font-mono">
                    ● Only {product.stock} remain in crypt
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="font-serif text-2xl sm:text-4xl text-altar-bone tracking-wider uppercase mb-3">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-serif text-2xl sm:text-3xl text-altar-bone font-medium">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice > product.price && (
                  <span className="font-mono text-base text-altar-pewter/60 line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                <span className="font-mono text-[10px] text-altar-pewter tracking-wider uppercase">
                  (Incl. all taxes & consecrated dispatch)
                </span>
              </div>

              <p className="font-sans text-xs sm:text-sm text-altar-pewter leading-relaxed font-light mb-8">
                {product.description}
              </p>

              {/* Size Selector */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between text-xs font-serif uppercase tracking-wider text-altar-silver mb-3">
                    <span>Select Size</span>
                    <span className="font-mono text-altar-pewter">{selectedSize}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setSelectedSize(sz)}
                        className={`px-4 py-2 text-xs font-serif uppercase tracking-wider border transition-all ${
                          selectedSize === sz
                            ? 'border-altar-silver bg-altar-silver/20 text-white shadow-[0_0_10px_rgba(214,211,204,0.2)]'
                            : 'border-altar-silver/20 text-altar-pewter hover:border-altar-silver/60'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-xs font-serif uppercase tracking-wider text-altar-silver">
                  Offering Count:
                </span>
                <div className="flex items-center border border-altar-silver/30 bg-[#0a0a0c]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 text-altar-pewter hover:text-white transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="px-4 font-mono text-xs text-altar-silver">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 text-altar-pewter hover:text-white transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Primary Add to Altar Button (Desktop) */}
              <div className="hidden md:flex gap-3 mb-8">
                <button
                  onClick={() => addToCart(product, selectedSize, quantity)}
                  className="btn-altar flex-1 py-4 text-xs tracking-widest2"
                >
                  Consecrate To Altar • ₹{(product.price * quantity).toLocaleString('en-IN')}
                </button>
                <button
                  onClick={handleShare}
                  className="p-4 border border-altar-silver/30 text-altar-silver hover:border-altar-silver hover:text-white transition-colors"
                  title="Share talisman link"
                >
                  {copied ? <Check size={18} className="text-green-400" /> : <Share2 size={18} />}
                </button>
              </div>

              {/* Metallurgy & Artifact Specifications */}
              <div className="border-t border-altar-silver/10 pt-6 space-y-3 text-xs">
                <h4 className="font-serif uppercase tracking-widest text-altar-silver mb-2">
                  Artisan Specifications
                </h4>
                <div className="grid grid-cols-2 gap-2 text-altar-pewter">
                  <div>
                    <span className="text-altar-silver font-serif block">Alloy:</span>
                    {product.material}
                  </div>
                  <div>
                    <span className="text-altar-silver font-serif block">Gross Mass:</span>
                    {product.weight}
                  </div>
                  <div>
                    <span className="text-altar-silver font-serif block">Atelier Origin:</span>
                    {product.origin}
                  </div>
                  <div>
                    <span className="text-altar-silver font-serif block">Included:</span>
                    Crushed Velvet Coffer
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="mt-8 pt-6 border-t border-altar-silver/10 grid grid-cols-2 gap-4 text-xs text-altar-pewter">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-altar-silver" />
                  <span>Lifetime Authenticity</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck size={16} className="text-altar-silver" />
                  <span>Insured Express Dispatch</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Detailed Ritual Description & Liturgical Bullet points */}
        <div className="mt-20 pt-16 border-t border-altar-silver/10 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="font-serif text-xl sm:text-2xl uppercase tracking-widest text-altar-bone">
              The Rite of Creation
            </h3>
            <OrnamentalDivider variant="crescent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-altar-pewter leading-relaxed">
            <div>
              <h4 className="font-serif text-sm uppercase tracking-wider text-altar-silver mb-3">
                Lost Wax Casting
              </h4>
              <p className="font-light mb-4">
                No high-speed stamping or hollow electroforming. The {product.name} is cast as solid metal from an individualized hand-carved wax matrix. Each microscopic claw, thorn, and fleur-de-lis barb is refined with fine carbide burrs.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-sm uppercase tracking-wider text-altar-silver mb-3">
                Key Attributes
              </h4>
              <ul className="space-y-2">
                {product.details.map((dt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-altar-silver">✦</span>
                    <span>{dt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Relics */}
        <div className="mt-24 pt-16 border-t border-altar-silver/10">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif text-xl uppercase tracking-widest text-altar-bone">
              Related Offerings
            </h3>
            <Link to="/shop" className="text-xs font-serif uppercase tracking-wider text-altar-silver hover:underline">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

      </div>

      {/* Mobile Sticky Add to Cart Bar */}
      <div className="md:hidden fixed bottom-[58px] left-0 right-0 z-30 bg-[#070709]/95 backdrop-blur-lg border-t border-altar-silver/20 p-3 flex items-center justify-between gap-3 shadow-[0_-5px_20px_rgba(0,0,0,0.8)]">
        <div>
          <span className="block font-serif text-xs text-altar-bone font-medium">
            ₹{(product.price * quantity).toLocaleString('en-IN')}
          </span>
          <span className="block font-mono text-[9px] text-altar-pewter">
            Size: {selectedSize}
          </span>
        </div>

        <button
          onClick={() => addToCart(product, selectedSize, quantity)}
          className="btn-altar flex-1 py-2.5 text-xs touch-press"
        >
          Add To Altar
        </button>
      </div>
    </div>
  );
}

