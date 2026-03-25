'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Product } from '@/types';
import ProductImage from './ProductImage';
import CustomizationModal from './CustomizationModal';

interface Props {
  product: Product;
  rank: number;
}

const RANK_COLORS = ['#f59e0b', '#9ca3af', '#b45309', '#c084fc', '#34d399'];
const RANK_LABELS = ['#1', '#2', '#3', '#4', '#5'];

export default function FastSellingCard({ product, rank }: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const startingPrice = product.weights[0]?.price ?? 0;
  const color = RANK_COLORS[rank - 1] ?? RANK_COLORS[4];

  return (
    <>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        onClick={() => setModalOpen(true)}
        className="relative bg-chocolate-800 rounded-2xl overflow-hidden cursor-pointer group border border-chocolate-700/60 hover:border-rose-gold/40 transition-colors duration-300"
      >
        {/* Rank badge */}
        <div
          className="absolute top-2.5 left-2.5 z-10 w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black shadow-lg"
          style={{ backgroundColor: color, color: '#1a0a00' }}
        >
          {RANK_LABELS[rank - 1]}
        </div>

        {/* Image */}
        <div className="relative aspect-square overflow-hidden">
          <ProductImage
            src={product.image || ''}
            alt={product.name}
            category={product.category}
            className="w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-chocolate-900/70 via-transparent to-transparent" />

          {/* Fire badge */}
          <div className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-amber-500/90 rounded-full text-[9px] font-bold text-amber-950 tracking-wide">
            🔥 Hot
          </div>
        </div>

        {/* Info */}
        <div className="p-3 sm:p-4">
          <p className="text-[9px] font-bold text-rose-light/60 tracking-widest uppercase mb-1 truncate">
            {product.category}
          </p>
          <h3 className="font-serif text-sm sm:text-base font-semibold text-white leading-snug line-clamp-2 mb-3 group-hover:text-rose-light transition-colors duration-300">
            {product.name}
          </h3>

          <div className="flex items-center justify-between gap-2">
            <div>
              <p className="text-[9px] text-chocolate-400 uppercase tracking-wider">from</p>
              <p className="text-base font-bold text-white leading-none">
                <span className="text-xs font-normal text-chocolate-300">₹</span>
                {startingPrice.toLocaleString('en-IN')}
              </p>
            </div>
            <button
              onClick={e => { e.stopPropagation(); setModalOpen(true); }}
              className="px-3 py-1.5 bg-rose-gold/90 hover:bg-rose-gold text-white text-[10px] font-bold rounded-full transition-all duration-300 whitespace-nowrap active:scale-95"
            >
              Order Now
            </button>
          </div>
        </div>
      </motion.div>

      <CustomizationModal
        product={product}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
