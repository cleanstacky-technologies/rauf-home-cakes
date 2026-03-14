'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '@/types';
import ProductImage from './ProductImage';

interface ProductCardProps {
  product: Product;
  onChooseOptions: (product: Product) => void;
  index?: number;
}

export default function ProductCard({ product, onChooseOptions, index = 0 }: ProductCardProps) {
  const startingPrice = product.weights[0]?.price ?? 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-chocolate-100/60 transition-all duration-500 hover:-translate-y-1 flex flex-col cursor-pointer"
      onClick={() => onChooseOptions(product)}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <ProductImage
          src={product.image || ''}
          alt={product.name}
          category={product.category}
          className="w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.bestseller && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-400 text-amber-900 text-[9px] font-black rounded-full uppercase tracking-widest shadow-sm">
              ⭐ Best Seller
            </span>
          )}
        </div>

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-chocolate-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Quick order hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="px-5 py-2 bg-white/90 backdrop-blur-sm text-chocolate-700 text-xs font-bold rounded-full shadow-lg">
            Choose Options
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-5 flex flex-col flex-1">
        <div className="mb-1">
          <span className="text-[9px] font-bold text-rose-gold/70 tracking-widest uppercase">{product.category}</span>
        </div>
        <h3 className="font-serif text-sm sm:text-lg font-semibold text-chocolate-800 mb-2 sm:mb-3 group-hover:text-rose-gold transition-colors duration-300 leading-snug line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="text-[9px] text-chocolate-300 uppercase tracking-wider block">Starting at</span>
            <p className="text-base sm:text-xl font-bold text-chocolate-700 leading-tight">
              <span className="text-sm font-normal">₹</span>
              {startingPrice.toLocaleString('en-IN')}
            </p>
          </div>

          <button
            onClick={e => { e.stopPropagation(); onChooseOptions(product); }}
            className="px-3 sm:px-4 py-1.5 sm:py-2 bg-chocolate-500 text-white text-[10px] sm:text-xs font-semibold rounded-full hover:bg-rose-gold transition-all duration-300 active:scale-95 hover:shadow-md hover:shadow-rose-gold/20 whitespace-nowrap"
          >
            Order Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}
