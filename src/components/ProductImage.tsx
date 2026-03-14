'use client';

import React, { useState } from 'react';

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  category?: string;
}

// Unique luxury gradient per category
const categoryGradients: Record<string, string> = {
  'Classic Premium Cakes': 'from-cream-300 via-rose-gold/20 to-cream-200',
  'Choco Premium Cakes':   'from-chocolate-100 via-chocolate-200/60 to-warm-200',
  'Fusion Premium Cakes':  'from-amber-100 via-rose-light/20 to-cream-200',
  'Exotic Cakes':          'from-warm-200 via-rose-gold/25 to-cream-100',
};

const categoryEmoji: Record<string, string> = {
  'Classic Premium Cakes': '🎂',
  'Choco Premium Cakes':   '🍫',
  'Fusion Premium Cakes':  '🌹',
  'Exotic Cakes':          '✨',
};

export default function ProductImage({ src, alt, className = '', category = 'Classic Premium Cakes' }: ProductImageProps) {
  const [imgError, setImgError] = useState(false);
  const gradient = categoryGradients[category] ?? categoryGradients['Classic Premium Cakes'];
  const emoji    = categoryEmoji[category]    ?? '🎂';

  const showPlaceholder = imgError || !src;

  if (showPlaceholder) {
    return (
      <div className={`bg-gradient-to-br ${gradient} flex items-center justify-center ${className}`}>
        <div className="text-center select-none">
          <span className="text-5xl sm:text-6xl block mb-2">{emoji}</span>
          <span className="text-[9px] font-semibold text-chocolate-400/50 tracking-widest uppercase px-2 line-clamp-1">
            {alt}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
        onError={() => setImgError(true)}
      />
    </div>
  );
}
