'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Product } from '@/types';
import { categories } from '@/data/products';
import ProductCard from './ProductCard';
import CustomizationModal from './CustomizationModal';

interface ProductGridProps {
  products: Product[];
  showFilters?: boolean;
}

const ALL = 'All';

export default function ProductGrid({ products, showFilters = false }: ProductGridProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen,     setIsModalOpen    ] = useState(false);
  const [activeCategory,  setActiveCategory ] = useState(ALL);

  const filterList = [ALL, ...categories];

  const filtered = activeCategory === ALL
    ? products
    : products.filter(p => p.category === activeCategory);

  const handleChooseOptions = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <>
      {showFilters && (
        /* Mobile: single horizontal scroll strip  |  sm+: wrapping row */
        <div className="flex gap-2 mb-8 sm:mb-10 overflow-x-auto pb-2 scrollbar-hide sm:flex-wrap sm:overflow-x-visible sm:pb-0">
          {filterList.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-4 sm:px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-chocolate-500 text-white shadow-md shadow-chocolate-500/20'
                  : 'bg-cream-100 text-chocolate-500 hover:bg-cream-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <motion.div
        key={activeCategory}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 min-[380px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
      >
        {filtered.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            onChooseOptions={handleChooseOptions}
            index={index}
          />
        ))}
      </motion.div>

      <CustomizationModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
