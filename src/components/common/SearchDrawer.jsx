import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';
import { useCartStore } from '../../hooks/useCartStore';
import { PRODUCTS } from '../../data/products';

export default function SearchDrawer() {
  const { isSearchOpen, closeSearch } = useCartStore();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  if (!isSearchOpen) return null;

  const filtered = query.trim() === ''
    ? []
    : PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.material.toLowerCase().includes(query.toLowerCase())
      );

  const handleSelectProduct = (slug) => {
    closeSearch();
    navigate(`/product/${slug}`);
  };

  const popularSearches = ['Sterling Silver', 'Sepulchre', 'Dagger', 'Obsidian', 'Choker'];

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-start bg-black/90 backdrop-blur-md transition-all">
      <div className="max-w-3xl w-full mx-auto px-4 pt-12 sm:pt-20">
        {/* Top bar with input */}
        <div className="flex items-center gap-3 border-b-2 border-altar-silver pb-3">
          <Search size={24} className="text-altar-silver" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search relics, silver, obsidian..."
            autoFocus
            className="flex-1 bg-transparent text-xl sm:text-2xl font-serif text-altar-bone placeholder:text-altar-pewter/40 focus:outline-none"
          />
          <button
            onClick={closeSearch}
            className="p-2 text-altar-pewter hover:text-white transition-colors"
            aria-label="Close search"
          >
            <X size={24} />
          </button>
        </div>

        {/* Popular searches suggestions */}
        {query.trim() === '' && (
          <div className="mt-8">
            <h4 className="font-serif text-xs uppercase tracking-widest text-altar-pewter mb-3">
              Frequent Invocations
            </h4>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-3 py-1.5 bg-[#121215] border border-altar-silver/20 text-xs font-serif text-altar-silver hover:border-altar-silver transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results */}
        {query.trim() !== '' && (
          <div className="mt-6 max-h-[60vh] overflow-y-auto space-y-3">
            <p className="text-xs font-serif uppercase tracking-widest text-altar-pewter mb-2">
              {filtered.length} {filtered.length === 1 ? 'Relic' : 'Relics'} Discovered
            </p>

            {filtered.length === 0 ? (
              <p className="py-12 text-center text-sm font-serif text-altar-pewter">
                No relics summoned under "{query}". Try searching "Silver", "Dagger", or "Ring".
              </p>
            ) : (
              filtered.map((prod) => (
                <div
                  key={prod.id}
                  onClick={() => handleSelectProduct(prod.slug)}
                  className="flex items-center justify-between p-3 bg-[#111114] border border-altar-silver/10 hover:border-altar-silver/40 cursor-pointer transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={prod.images.primary}
                      alt={prod.name}
                      className="w-14 h-16 object-cover bg-black"
                    />
                    <div>
                      <h5 className="font-serif text-sm text-altar-bone group-hover:text-white transition-colors">
                        {prod.name}
                      </h5>
                      <p className="text-xs font-sans text-altar-pewter">
                        {prod.material} • <span className="font-serif text-altar-silver">₹{prod.price.toLocaleString('en-IN')}</span>
                      </p>
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-altar-pewter group-hover:text-altar-silver group-hover:translate-x-1 transition-all" />
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}

