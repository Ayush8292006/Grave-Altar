import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, SlidersHorizontal, ArrowUpDown, X, Search, RotateCcw } from 'lucide-react';
import { PRODUCTS, CATEGORIES, MATERIALS } from '../data/products';
import ProductCard from '../components/common/ProductCard';
import OrnamentalDivider from '../components/common/OrnamentalDivider';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [selectedMaterial, setSelectedMaterial] = useState('All Materials');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setActiveCategory(categoryParam);
  }, [categoryParam]);

  const handleCategoryChange = (catId) => {
    setIsLoading(true);
    setActiveCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catId);
    }
    setSearchParams(searchParams);
    setTimeout(() => setIsLoading(false), 250);
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      // Material filter
      if (selectedMaterial !== 'All Materials' && !item.material.toLowerCase().includes(selectedMaterial.toLowerCase())) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesTagline = item.tagline.toLowerCase().includes(q);
        if (!matchesName && !matchesTagline) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
    });
  }, [activeCategory, selectedMaterial, sortBy, searchQuery]);

  const resetFilters = () => {
    handleCategoryChange('all');
    setSelectedMaterial('All Materials');
    setSortBy('featured');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#efeae0] pt-28 sm:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-mono text-[10px] text-altar-pewter tracking-widest uppercase">
            // The Crypt Catalogue
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-altar-bone uppercase tracking-widest mt-2 mb-3">
            Sacred Offerings
          </h1>
          <p className="font-sans text-xs sm:text-sm text-altar-pewter font-light">
            Each artifact is individually poured, oxidized, and finished in dark sanctuary workshops.
          </p>
          <OrnamentalDivider variant="fleur" />
        </div>

        {/* Categories Tab Pill Strip */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-4 py-2 text-xs font-serif uppercase tracking-widest whitespace-nowrap transition-all border ${
                activeCategory === cat.id
                  ? 'border-altar-silver bg-altar-silver/10 text-white font-medium shadow-[0_0_12px_rgba(214,211,204,0.15)]'
                  : 'border-altar-silver/15 text-altar-pewter hover:border-altar-silver/40 hover:text-altar-bone'
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>

        {/* Filter and Controls Toolbar */}
        <div className="bg-[#0b0b0e] border border-altar-silver/15 p-4 mb-8 flex flex-wrap items-center justify-between gap-4">
          
          {/* Left: Material Dropdown & Search */}
          <div className="flex flex-wrap items-center gap-3 flex-1">
            {/* Search Input */}
            <div className="relative min-w-[200px] flex-1 sm:flex-initial">
              <Search size={14} className="absolute left-3 top-3 text-altar-pewter" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter by name..."
                className="w-full bg-[#121215] border border-altar-silver/20 text-xs text-altar-bone font-mono pl-8 pr-3 py-2 placeholder:text-altar-pewter/40 focus:outline-none focus:border-altar-silver"
              />
            </div>

            {/* Material select (Desktop) */}
            <div className="hidden md:flex items-center gap-2">
              <span className="text-xs font-serif uppercase tracking-wider text-altar-pewter">
                Material:
              </span>
              <select
                value={selectedMaterial}
                onChange={(e) => setSelectedMaterial(e.target.value)}
                className="bg-[#121215] border border-altar-silver/20 text-xs text-altar-silver font-serif py-2 px-3 focus:outline-none focus:border-altar-silver cursor-pointer"
              >
                {MATERIALS.map((m) => (
                  <option key={m} value={m} className="bg-[#0e0e11] text-altar-bone">
                    {m}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Right: Sort & Mobile Filter Toggle */}
          <div className="flex items-center gap-3">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="md:hidden flex items-center gap-2 px-3 py-2 bg-[#121215] border border-altar-silver/20 text-xs font-serif text-altar-silver"
            >
              <SlidersHorizontal size={14} />
              <span>Filters</span>
            </button>

            {/* Sort Selector */}
            <div className="flex items-center gap-2">
              <ArrowUpDown size={14} className="text-altar-pewter hidden sm:inline" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#121215] border border-altar-silver/20 text-xs text-altar-silver font-serif py-2 px-3 focus:outline-none focus:border-altar-silver cursor-pointer"
              >
                <option value="featured" className="bg-[#0e0e11]">Most Sacred (Featured)</option>
                <option value="price-low" className="bg-[#0e0e11]">Tribute: Low to High</option>
                <option value="price-high" className="bg-[#0e0e11]">Tribute: High to Low</option>
                <option value="newest" className="bg-[#0e0e11]">Newest Consecrations</option>
              </select>
            </div>
          </div>
        </div>

        {/* Active Filter Tags */}
        {(selectedMaterial !== 'All Materials' || activeCategory !== 'all' || searchQuery) && (
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <span className="text-[10px] font-serif uppercase tracking-widest text-altar-pewter">
              Active Filters:
            </span>
            {activeCategory !== 'all' && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-altar-charcoal border border-altar-silver/30 text-xs font-serif text-altar-silver">
                {activeCategory}
                <X size={12} className="cursor-pointer hover:text-white" onClick={() => handleCategoryChange('all')} />
              </span>
            )}
            {selectedMaterial !== 'All Materials' && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-altar-charcoal border border-altar-silver/30 text-xs font-serif text-altar-silver">
                {selectedMaterial}
                <X size={12} className="cursor-pointer hover:text-white" onClick={() => setSelectedMaterial('All Materials')} />
              </span>
            )}
            {searchQuery && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-altar-charcoal border border-altar-silver/30 text-xs font-serif text-altar-silver">
                "{searchQuery}"
                <X size={12} className="cursor-pointer hover:text-white" onClick={() => setSearchQuery('')} />
              </span>
            )}
            <button
              onClick={resetFilters}
              className="text-[10px] font-mono text-altar-pewter hover:text-altar-bone underline underline-offset-4 ml-2"
            >
              Clear All
            </button>
          </div>
        )}

        {/* Product Grid / Skeletons */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <div key={n} className="bg-[#0e0e10] border border-altar-silver/10 animate-pulse h-[420px] p-4 flex flex-col justify-between">
                <div className="aspect-[4/5] bg-altar-charcoal-border/30 w-full mb-4" />
                <div className="space-y-2">
                  <div className="h-4 bg-altar-charcoal-border/40 w-3/4" />
                  <div className="h-3 bg-altar-charcoal-border/30 w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="py-24 text-center border border-dashed border-altar-silver/15 p-8 max-w-md mx-auto">
            <h3 className="font-serif text-base uppercase tracking-widest text-altar-silver mb-2">
              No Sacred Relics Found
            </h3>
            <p className="font-sans text-xs text-altar-pewter mb-6">
              No artifacts match your selected filter criteria. Reset filters to reveal the complete altar.
            </p>
            <button onClick={resetFilters} className="btn-altar text-xs py-2.5 px-6">
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        )}

      </div>

      {/* Mobile Filter Drawer / Bottom Sheet */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex items-end bg-black/80 backdrop-blur-sm">
          <div className="w-full bg-[#0d0d10] border-t border-altar-silver/20 p-6 rounded-t-2xl max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-altar-silver/10 mb-6">
              <h3 className="font-serif text-sm uppercase tracking-widest text-altar-silver">
                Refine Relics
              </h3>
              <button onClick={() => setIsMobileFilterOpen(false)} className="text-altar-pewter">
                <X size={20} />
              </button>
            </div>

            {/* Material select */}
            <div className="mb-6">
              <label className="block text-xs font-serif uppercase tracking-widest text-altar-pewter mb-2">
                Material Composition
              </label>
              <div className="flex flex-col gap-2">
                {MATERIALS.map((mat) => (
                  <button
                    key={mat}
                    onClick={() => setSelectedMaterial(mat)}
                    className={`text-left text-xs font-serif py-2 px-3 border ${
                      selectedMaterial === mat
                        ? 'border-altar-silver bg-altar-silver/15 text-white'
                        : 'border-altar-silver/10 text-altar-pewter'
                    }`}
                  >
                    {mat}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="btn-altar w-full py-3 text-xs"
            >
              Apply Filter Selection
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

