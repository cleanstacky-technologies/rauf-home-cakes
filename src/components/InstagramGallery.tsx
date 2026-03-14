'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { INSTAGRAM_HANDLE, FOLLOWER_COUNT } from '@/data/products';

const galleryItems = [
  { gradient: 'from-rose-gold/40 to-cream-300', emoji: '🎂', label: 'Birthday Special' },
  { gradient: 'from-cream-400 to-warm-300', emoji: '🧁', label: 'Cupcake Art' },
  { gradient: 'from-chocolate-100 to-rose-light/30', emoji: '🍰', label: 'Cheesecake Heaven' },
  { gradient: 'from-warm-300 to-cream-200', emoji: '🍪', label: 'Cookie Collection' },
  { gradient: 'from-rose-light/30 to-cream-300', emoji: '🎀', label: 'Gift Boxes' },
  { gradient: 'from-cream-300 to-warm-200', emoji: '🍫', label: 'Brownie Box' },
];

export default function InstagramGallery() {
  return (
    <section className="section-spacing bg-warm-50">
      <div className="max-w-7xl mx-auto section-padding">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-cream-200 rounded-full text-[10px] font-bold text-rose-gold tracking-widest uppercase mb-4">
            Instagram
          </span>
          <h2 className="heading-lg text-chocolate-900 mb-4">
            Follow Our Journey
          </h2>
          <p className="body-md max-w-xl mx-auto">
            Follow us for daily cake inspiration, behind-the-scenes
            moments, and first looks at new creations — {FOLLOWER_COUNT} followers and growing!
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
          {galleryItems.map((item, idx) => (
            <motion.a
              key={idx}
              href={`https://instagram.com/${INSTAGRAM_HANDLE.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl sm:text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {item.emoji}
                </span>
                <span className="text-xs font-medium text-chocolate-500/60 tracking-wider uppercase">
                  {item.label}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-chocolate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        <AnimatedSection className="text-center mt-10">
          <a
            href={`https://instagram.com/${INSTAGRAM_HANDLE.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
            </svg>
            Follow {INSTAGRAM_HANDLE}
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
