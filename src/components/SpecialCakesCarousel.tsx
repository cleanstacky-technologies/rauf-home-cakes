'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { WHATSAPP_NUMBER } from '@/data/products';

const IMAGES = [
  '/images/wedding_and_first_bday_cakes/IMG_4351.jpeg',
  '/images/wedding_and_first_bday_cakes/IMG_3886.jpeg',
  '/images/wedding_and_first_bday_cakes/IMG_3510.jpeg',
  '/images/wedding_and_first_bday_cakes/IMG_3306.jpeg',
  '/images/wedding_and_first_bday_cakes/IMG_3288.png',
  '/images/wedding_and_first_bday_cakes/IMG_3114.jpeg',
  '/images/wedding_and_first_bday_cakes/IMG_2698.jpeg',
  '/images/wedding_and_first_bday_cakes/IMG_2177.jpeg',
  '/images/wedding_and_first_bday_cakes/IMG_0832.jpeg',
  '/images/wedding_and_first_bday_cakes/IMG_0815.jpeg',
  '/images/wedding_and_first_bday_cakes/IMG_0551.jpeg',
  '/images/wedding_and_first_bday_cakes/IMG_0189.jpeg',
  '/images/wedding_and_first_bday_cakes/3062955C-E654-40FA-8B95-2D539AEAB592.jpeg',
  '/images/wedding_and_first_bday_cakes/04DBA9BA-0465-4675-BEF1-2A609BC56867_1_.jpeg',
  '/images/wedding_and_first_bday_cakes/04DBA9BA-0465-4675-BEF1-2A609BC56867.jpeg',
];

const AUTOPLAY_MS = 4500;

export default function SpecialCakesCarousel() {
  const [current, setCurrent]   = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const thumbsRef               = useRef<HTMLDivElement>(null);
  const touchStart              = useRef(0);
  const total                   = IMAGES.length;

  const goTo = useCallback((i: number) => {
    setCurrent((i + total) % total);
  }, [total]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-play — resets whenever `current` or `isPaused` changes
  useEffect(() => {
    if (isPaused) return;
    const t = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [current, isPaused, next]);

  // Keep active thumbnail in view — scroll only within the strip, not the page
  useEffect(() => {
    const strip = thumbsRef.current;
    const el = strip?.children[current] as HTMLElement | undefined;
    if (!strip || !el) return;
    const stripRect = strip.getBoundingClientRect();
    const elRect    = el.getBoundingClientRect();
    const offset    = elRect.left - stripRect.left - stripRect.width / 2 + elRect.width / 2;
    strip.scrollBy({ left: offset, behavior: 'smooth' });
  }, [current]);

  // Touch swipe
  const onTouchStart = (e: React.TouchEvent) => { touchStart.current = e.touches[0].clientX; };
  const onTouchEnd   = (e: React.TouchEvent) => {
    const d = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(d) > 48) d > 0 ? next() : prev();
  };

  const wa = encodeURIComponent(
    "Hi! I'm interested in a custom Wedding / First Birthday cake. Can we discuss the design and pricing?"
  );

  return (
    <section
      className="bg-[#0D0905] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 xl:px-24 pt-16 sm:pt-20 pb-8 sm:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] uppercase text-rose-light/70 mb-3">
              <span className="w-6 h-px bg-rose-light/50" />
              Special Occasions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Wedding &amp; First
              <span className="block italic text-rose-light font-light">Birthday Cakes</span>
            </h2>
          </div>
          <p className="text-cream-400/60 text-sm max-w-xs leading-relaxed sm:text-right">
            Fully custom creations for life&apos;s grandest milestones. Every detail, made with love.
          </p>
        </motion.div>
      </div>

      {/* ── Main image stage ────────────────────────────────────────────────── */}
      <div
        className="relative h-[58vw] min-h-[280px] max-h-[680px] overflow-hidden cursor-pointer"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Progress bar — key resets animation on every slide change */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/[0.06] z-30">
          <motion.div
            key={current}
            className="h-full bg-rose-gold/80"
            initial={{ width: '0%' }}
            animate={{ width: isPaused ? undefined : '100%' }}
            transition={{ duration: AUTOPLAY_MS / 1000, ease: 'linear' }}
          />
        </div>

        {/* Crossfade + Ken Burns */}
        <AnimatePresence>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            {/* Ken Burns zoom */}
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.0 }}
              animate={{ scale: 1.07 }}
              transition={{ duration: AUTOPLAY_MS / 1000 + 1.5, ease: 'linear' }}
            >
              <Image
                src={IMAGES[current]}
                alt={`Special occasion cake ${current + 1}`}
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority={current === 0}
              />
            </motion.div>

            {/* Atmospheric gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0905] via-[#0D0905]/20 to-[#0D0905]/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D0905]/30 via-transparent to-[#0D0905]/30" />
          </motion.div>
        </AnimatePresence>

        {/* Slide counter — bottom left */}
        <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-8 z-20 flex items-center gap-3">
          <div className="flex flex-col">
            <span className="font-mono text-xl sm:text-2xl font-light text-white leading-none">
              {String(current + 1).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="w-4 h-px bg-white/30" />
              <span className="font-mono text-[10px] text-white/30 tracking-widest">
                {String(total).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        {/* Arrows — minimal border style */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute right-16 sm:right-20 bottom-4 sm:bottom-6 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm hover:border-rose-gold hover:bg-rose-gold/20 flex items-center justify-center transition-all duration-300 group"
        >
          <svg className="w-4 h-4 text-white/70 group-hover:text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-4 sm:right-6 bottom-4 sm:bottom-6 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm hover:border-rose-gold hover:bg-rose-gold/20 flex items-center justify-center transition-all duration-300 group"
        >
          <svg className="w-4 h-4 text-white/70 group-hover:text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* ── Thumbnail filmstrip ─────────────────────────────────────────────── */}
      <div
        ref={thumbsRef}
        className="flex gap-1.5 sm:gap-2 overflow-x-auto scrollbar-hide px-5 sm:px-8 lg:px-16 xl:px-24 py-4 sm:py-5"
      >
        {IMAGES.map((src, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`View cake ${i + 1}`}
            className={`flex-shrink-0 relative rounded overflow-hidden transition-all duration-400 ${
              i === current
                ? 'w-16 h-11 sm:w-20 sm:h-14 opacity-100 ring-1 ring-rose-gold ring-offset-1 ring-offset-[#0D0905]'
                : 'w-10 h-7 sm:w-14 sm:h-10 opacity-30 hover:opacity-60 hover:scale-105'
            }`}
          >
            <Image src={src} alt="" fill className="object-cover" sizes="80px" />
            {i === current && (
              <div className="absolute inset-0 bg-rose-gold/10" />
            )}
          </button>
        ))}
      </div>

      {/* ── Bottom CTA ──────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 xl:px-24 pb-16 sm:pb-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-2 border-t border-white/[0.06]">
          <p className="text-cream-400/50 text-xs sm:text-sm tracking-wide">
            Looking for something truly one-of-a-kind? Let&apos;s design it together.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${wa}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 bg-transparent border border-rose-gold/60 text-rose-light hover:bg-rose-gold hover:border-rose-gold hover:text-white font-medium rounded-full text-sm transition-all duration-300 hover:shadow-lg hover:shadow-rose-gold/20 whitespace-nowrap group"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Enquire for Your Special Cake
            <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>

    </section>
  );
}
