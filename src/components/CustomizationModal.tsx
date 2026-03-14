'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '@/types';
import { useCart } from './CartProvider';
import ProductImage from './ProductImage';
import { topperOptions, spongeFlavours } from '@/data/products';

interface CustomizationModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

// Compute all 5 weight options from the product's 2 base prices
function buildAllWeights(product: Product) {
  const halfKg = product.weights.find(w => w.label === 'Half Kg');
  const oneKg  = product.weights.find(w => w.label === '1 Kg');

  if (!halfKg || !oneKg) return product.weights;

  const round50 = (n: number) => Math.ceil(n / 50) * 50;

  return [
    { label: 'Half Kg',  price: halfKg.price },
    { label: '1 Kg',     price: oneKg.price  },
    { label: '1.5 Kg',   price: round50(oneKg.price * 1.5)  },
    { label: '2 Kg',     price: round50(oneKg.price * 2)    },
    { label: '2.5 Kg',   price: round50(oneKg.price * 2.5)  },
  ];
}

export default function CustomizationModal({ product, isOpen, onClose }: CustomizationModalProps) {
  const { addItem } = useCart();

  const [selectedWeightIdx, setSelectedWeightIdx] = useState(1); // default 1 Kg
  const [selectedTopperIdx, setSelectedTopperIdx] = useState(0); // default No Topper
  const [selectedFlavour,   setSelectedFlavour  ] = useState(spongeFlavours[0]);
  const [cakeMessage,        setCakeMessage      ] = useState('');
  const [specialInstructions,setSpecialInstructions] = useState('');
  const [showSuccess,        setShowSuccess      ] = useState(false);

  const allWeights = useMemo(() => product ? buildAllWeights(product) : [], [product]);

  useEffect(() => {
    if (product && isOpen) {
      setSelectedWeightIdx(1);
      setSelectedTopperIdx(0);
      setSelectedFlavour(spongeFlavours[0]);
      setCakeMessage('');
      setSpecialInstructions('');
      setShowSuccess(false);
    }
  }, [product, isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!product) return null;

  const weight = allWeights[selectedWeightIdx];
  const topper = topperOptions[selectedTopperIdx];
  const totalPrice = (weight?.price || 0) + (topper?.price || 0);

  const handleAddToCart = () => {
    addItem({
      productId:          product.id,
      productName:        product.name,
      category:           product.category,
      weight:             weight.label,
      weightPrice:        weight.price,
      topper:             topper.name,
      topperPrice:        topper.price,
      flavour:            selectedFlavour,
      cakeMessage,
      specialInstructions,
      quantity:           1,
      totalPrice,
    });
    setShowSuccess(true);
    setTimeout(() => { onClose(); setShowSuccess(false); }, 1300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">

          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-chocolate-900/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Sheet / Modal */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="relative w-full sm:max-w-lg max-h-[92svh] min-h-0 bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >

            {/* ─── Success overlay ─── */}
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-20 bg-white flex items-center justify-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 14 }}
                    className="text-center"
                  >
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-50 flex items-center justify-center">
                      <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <p className="font-serif text-2xl font-bold text-chocolate-800 mb-1">Added!</p>
                    <p className="text-sm text-chocolate-400">Item added to your cart</p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ─── Scrollable content ─── */}
            <div className="overflow-y-auto flex-1">

              {/* Hero image + close */}
              <div className="relative">
                <ProductImage
                  src={product.image || ''}
                  alt={product.name}
                  category={product.category}
                  className="w-full aspect-video"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate-900/30 to-transparent" />

                {/* Bestseller badge */}
                {product.bestseller && (
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-400 text-amber-900 text-[10px] font-black rounded-full uppercase tracking-widest shadow">
                      ⭐ Best Seller
                    </span>
                  </div>
                )}

                {/* Close btn */}
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow hover:bg-white transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-4 h-4 text-chocolate-600" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Product name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-[10px] font-bold text-white/70 tracking-widest uppercase">{product.category}</span>
                  <h2 className="font-serif text-xl font-bold text-white leading-tight">{product.name}</h2>
                </div>
              </div>

              <div className="p-4 sm:p-6 space-y-5 sm:space-y-6">

                {/* ── Weight selector ── */}
                <div>
                  <label className="flex items-center justify-between mb-3">
                    <span className="text-sm font-bold text-chocolate-800">Cake Size</span>
                    <span className="text-xs text-chocolate-300">Select weight</span>
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
                    {allWeights.map((w, idx) => (
                      <button
                        key={w.label}
                        onClick={() => setSelectedWeightIdx(idx)}
                        className={`flex flex-col items-center justify-center py-2.5 px-1 rounded-xl border text-center transition-all duration-200 ${
                          idx === selectedWeightIdx
                            ? 'border-rose-gold bg-rose-gold/5 text-rose-gold ring-1 ring-rose-gold/20 shadow-sm'
                            : 'border-cream-300 bg-warm-50 text-chocolate-600 hover:border-chocolate-200'
                        }`}
                      >
                        <span className="text-[11px] font-bold block leading-tight">{w.label}</span>
                        <span className="text-[10px] mt-0.5 opacity-70 block">₹{w.price.toLocaleString('en-IN')}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* ── Topper selector ── */}
                <div>
                  <label className="flex items-center justify-between mb-3">
                    <span className="text-sm font-bold text-chocolate-800">Cake Topper</span>
                    <span className="text-xs text-chocolate-300">Optional add-on</span>
                  </label>
                  <div className="grid grid-cols-1 min-[360px]:grid-cols-2 gap-2">
                    {topperOptions.map((t, idx) => (
                      <button
                        key={t.id}
                        onClick={() => setSelectedTopperIdx(idx)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl border text-left transition-all duration-200 ${
                          idx === selectedTopperIdx
                            ? 'border-rose-gold bg-rose-gold/5 text-rose-gold ring-1 ring-rose-gold/20'
                            : 'border-cream-300 bg-warm-50 text-chocolate-600 hover:border-chocolate-200'
                        }`}
                      >
                        <span className="text-xs font-semibold">{t.name}</span>
                        <span className={`text-xs font-bold ml-1 ${idx === selectedTopperIdx ? 'text-rose-gold' : 'text-chocolate-400'}`}>
                          {t.price === 0 ? 'Free' : `+₹${t.price}`}
                        </span>
                      </button>
                    ))}
                  </div>
                  <p className="text-[10px] text-chocolate-300 mt-2">
                    * Fondant decoration charges may vary depending on design complexity.
                  </p>
                </div>

                {/* ── Sponge Flavour ── */}
                <div>
                  <label className="block text-sm font-bold text-chocolate-800 mb-2">
                    Sponge / Base Flavour
                    <span className="font-normal text-chocolate-300 text-xs ml-2">(optional preference)</span>
                  </label>
                  <div className="relative">
                    <select
                      value={selectedFlavour}
                      onChange={e => setSelectedFlavour(e.target.value)}
                      className="w-full px-4 py-3 bg-warm-50 border border-cream-300 rounded-xl text-chocolate-700 text-sm focus:outline-none focus:ring-2 focus:ring-rose-gold/30 focus:border-rose-gold transition-all appearance-none cursor-pointer pr-8"
                    >
                      {spongeFlavours.map(f => (
                        <option key={f} value={f}>{f}</option>
                      ))}
                    </select>
                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-chocolate-400 pointer-events-none" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </div>

                {/* ── Cake Message ── */}
                <div>
                  <label className="block text-sm font-bold text-chocolate-800 mb-2">
                    Message on Cake
                    <span className="font-normal text-chocolate-300 text-xs ml-2">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={cakeMessage}
                    onChange={e => setCakeMessage(e.target.value)}
                    placeholder="e.g., Happy Birthday Aditi! 🎂"
                    maxLength={60}
                    className="w-full px-4 py-3 bg-warm-50 border border-cream-300 rounded-xl text-chocolate-700 text-sm placeholder:text-chocolate-200 focus:outline-none focus:ring-2 focus:ring-rose-gold/30 focus:border-rose-gold transition-all"
                  />
                  <p className="text-[10px] text-chocolate-300 mt-1 text-right">{cakeMessage.length}/60</p>
                </div>

                {/* ── Special Instructions ── */}
                <div>
                  <label className="block text-sm font-bold text-chocolate-800 mb-2">
                    Special Instructions
                    <span className="font-normal text-chocolate-300 text-xs ml-2">(optional)</span>
                  </label>
                  <textarea
                    value={specialInstructions}
                    onChange={e => setSpecialInstructions(e.target.value)}
                    placeholder="e.g., Eggless, less sugar, nut-free, specific design preference…"
                    rows={2}
                    maxLength={200}
                    className="w-full px-4 py-3 bg-warm-50 border border-cream-300 rounded-xl text-chocolate-700 text-sm placeholder:text-chocolate-200 focus:outline-none focus:ring-2 focus:ring-rose-gold/30 focus:border-rose-gold transition-all resize-none"
                  />
                </div>

              </div>
            </div>

            {/* ─── Sticky footer: price + CTA ─── */}
            <div className="flex-shrink-0 px-5 sm:px-6 py-4 bg-white border-t border-cream-100 flex items-center gap-4">
              <div className="flex-1 min-w-0">
                <p className="text-[10px] text-chocolate-300 uppercase tracking-wider">Total</p>
                <p className="text-2xl font-bold text-chocolate-900 leading-tight">
                  <span className="text-base font-normal">₹</span>
                  {totalPrice.toLocaleString('en-IN')}
                </p>
                {topper.price > 0 && (
                  <p className="text-[10px] text-rose-gold">Incl. {topper.name}</p>
                )}
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-shrink-0 px-8 py-3.5 bg-chocolate-500 text-white font-semibold rounded-full hover:bg-rose-gold transition-all duration-300 active:scale-95 hover:shadow-lg hover:shadow-rose-gold/20 text-sm"
              >
                Add to Cart
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
