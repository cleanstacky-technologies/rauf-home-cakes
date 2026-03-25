'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BAKERY_NAME, WHATSAPP_NUMBER, CUSTOMER_COUNT, GOOGLE_RATING, FOLLOWER_COUNT } from '@/data/products';

const FSSAI_REG = '22425423000394';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-50 via-cream-100 to-warm-200" />

      {/* Decorative shapes */}
      <div className="absolute top-20 right-0 w-[200px] sm:w-[350px] lg:w-[500px] h-[200px] sm:h-[350px] lg:h-[500px] rounded-full bg-rose-gold/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[180px] sm:w-[300px] lg:w-[400px] h-[180px] sm:h-[300px] lg:h-[400px] rounded-full bg-cream-400/20 blur-3xl" />
      <div className="absolute top-1/3 left-1/4 w-[200px] h-[200px] rounded-full bg-rose-light/10 blur-2xl" />

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-32 right-[15%] text-6xl sm:text-7xl opacity-20 select-none"
      >
        🎂
      </motion.div>
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-32 left-[10%] text-5xl opacity-15 select-none hidden sm:block"
      >
        🧁
      </motion.div>
      <motion.div
        animate={{ y: [-8, 8, -8], rotate: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 right-[8%] text-4xl opacity-10 select-none hidden lg:block"
      >
        🍰
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto section-padding pt-28 sm:pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 backdrop-blur-sm rounded-full text-xs font-semibold text-rose-gold tracking-widest uppercase border border-rose-gold/10">
              <span className="w-1.5 h-1.5 bg-rose-gold rounded-full animate-pulse" />
              2,000+ Happy Customers · Chrompet, Chennai
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="heading-xl text-chocolate-900 mb-6"
          >
            Handcrafted
            <br />
            <span className="gradient-text">with Love,</span>
            <br />
            Baked to
            <br className="sm:hidden" /> Perfection
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="body-lg max-w-xl mb-10"
          >
            Premium custom cakes for birthdays, weddings & every celebration — by Fazila Ansari, Professional Baker. No premix. FSSAI registered. Made fresh in Chrompet, Chennai.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/products" className="btn-primary text-base px-10 py-4">
              Explore Our Cakes
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-base px-10 py-4"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6 mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-chocolate-100/50"
          >
            {[
              { number: CUSTOMER_COUNT, label: 'Happy Customers' },
              { number: FOLLOWER_COUNT, label: 'Instagram Followers' },
              { number: GOOGLE_RATING, label: 'Google Rating' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-xl sm:text-2xl font-serif font-bold text-chocolate-800">
                  {stat.number}
                </p>
                <p className="text-xs text-chocolate-400 tracking-wide">{stat.label}</p>
              </div>
            ))}
            {/* FSSAI Trust Badge */}
            <div className="flex flex-col gap-0.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-50 rounded-lg border border-green-200">
                <span className="text-[9px] font-bold text-green-700 tracking-widest uppercase">FSSAI</span>
                <span className="w-px h-2.5 bg-green-300" />
                <span className="text-[8px] sm:text-[9px] text-green-600 font-mono truncate">{FSSAI_REG}</span>
              </div>
              <p className="text-[10px] text-chocolate-400 tracking-wide pl-0.5">Licensed &amp; Certified</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-chocolate-300 uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-chocolate-200 flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-chocolate-300 rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
