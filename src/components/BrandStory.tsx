'use client';

import React from 'react';
import AnimatedSection from './AnimatedSection';
import { BAKERY_NAME, BAKER_NAME, BAKER_TITLE, CUSTOMER_COUNT, GOOGLE_RATING } from '@/data/products';

export default function BrandStory() {
  return (
    <section className="section-spacing bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-cream-200/50 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full bg-rose-gold/5 blur-3xl" />

      <div className="max-w-7xl mx-auto section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image / Baker card side */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-cream-200 via-rose-gold/10 to-warm-200 overflow-hidden flex items-center justify-center">
                <div className="text-center px-6">
                  <span className="text-7xl block mb-4">👩‍🍳</span>
                  <p className="font-serif font-bold text-chocolate-800 text-xl mb-1">{BAKER_NAME}</p>
                  <p className="text-xs text-rose-gold font-semibold tracking-widest uppercase">{BAKER_TITLE}</p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {['FSSAI Registered', 'No Premix', 'Professional Baker'].map(tag => (
                      <span key={tag} className="text-[10px] bg-white/70 text-chocolate-600 px-2 py-0.5 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating rating card */}
              <div className="absolute bottom-3 right-3 sm:-bottom-4 sm:-right-4 md:bottom-6 md:right-[-20px] bg-white rounded-2xl shadow-xl p-3 sm:p-5 max-w-[160px] sm:max-w-[200px]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">⭐</span>
                  <span className="font-serif font-bold text-chocolate-800 text-lg">{GOOGLE_RATING}</span>
                </div>
                <p className="text-xs text-chocolate-400">{CUSTOMER_COUNT} happy customers served</p>
              </div>

              {/* Floating instagram card */}
              <div className="absolute top-3 left-3 sm:-top-4 sm:-left-4 md:top-6 md:left-[-20px] bg-white rounded-2xl shadow-lg p-2 sm:p-4">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-rose-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                  </svg>
                  <div>
                    <p className="text-xs font-bold text-chocolate-800">2,074 posts</p>
                    <p className="text-[10px] text-chocolate-400">@rauf_home_cakes</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Text side */}
          <AnimatedSection direction="right">
            <span className="inline-block px-4 py-1.5 bg-cream-100 rounded-full text-[10px] font-bold text-rose-gold tracking-widest uppercase mb-4">
              Our Story
            </span>
            <h2 className="heading-lg text-chocolate-900 mb-6">
              Meet the Baker Behind<br />
              <span className="gradient-text">{BAKERY_NAME}</span>
            </h2>
            <div className="space-y-4 body-md">
              <p>
                Hi, I'm <strong className="text-chocolate-800">{BAKER_NAME}</strong> — a professional baker
                based in Chrompet, Chennai. {BAKERY_NAME} was built on one unwavering belief: that every
                celebration deserves a cake made with genuine skill, love, and the finest ingredients.
              </p>
              <p>
                Every cake is handcrafted from scratch. <strong className="text-chocolate-800">No premix. Ever.</strong>{' '}
                We use real butter, quality chocolate, and fresh ingredients because your special moments
                deserve nothing less than the real thing.
              </p>
              <p>
                From custom birthday cakes and themed kids' designs to stunning wedding cakes and bento boxes —
                each order gets our full attention and artistry, making {CUSTOMER_COUNT} customers happy and counting.
              </p>
            </div>

            {/* Trust badges row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-cream-200">
              {[
                { icon: '🚫', label: 'No Premix' },
                { icon: '🏅', label: 'FSSAI Registered' },
                { icon: '🎂', label: 'Birthdays & Weddings' },
                { icon: '💝', label: 'Made with Love' },
              ].map(item => (
                <div key={item.label} className="text-center">
                  <span className="text-2xl block mb-1.5">{item.icon}</span>
                  <span className="text-[11px] font-semibold text-chocolate-500 tracking-wide leading-tight block">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
