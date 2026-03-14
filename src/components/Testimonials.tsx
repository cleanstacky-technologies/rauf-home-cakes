'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials, GOOGLE_REVIEWS } from '@/data/products';
import AnimatedSection from './AnimatedSection';

const GOOGLE_REVIEW_URL =
  'https://www.google.com/search?q=Rauf+home+cakes+-+Premium+Reviews';

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-chocolate-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    if (isAutoPlaying) startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isAutoPlaying]);

  const goTo = (idx: number) => {
    setCurrent(idx);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((current + 1) % testimonials.length);

  const t = testimonials[current];
  const initials = t.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();

  // Rotate avatar background per reviewer
  const avatarColors = [
    'bg-rose-gold', 'bg-chocolate-500', 'bg-amber-600',
    'bg-rose-light', 'bg-chocolate-400', 'bg-warm-400',
    'bg-rose-gold/80', 'bg-amber-700',
  ];

  return (
    <section className="section-spacing bg-chocolate-800 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-rose-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-chocolate-700/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto section-padding relative z-10">

        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-chocolate-700 rounded-full text-[10px] font-bold text-rose-light tracking-widest uppercase mb-4">
            Real Reviews
          </span>
          <h2 className="heading-lg text-white mb-3">
            What Our Customers Say
          </h2>

          {/* Google aggregate badge */}
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/15 rounded-full border border-white/10 transition-colors duration-300 mt-2"
          >
            <GoogleIcon />
            <span className="text-white font-bold text-sm">4.9</span>
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-chocolate-300 text-xs">{GOOGLE_REVIEWS} Google reviews</span>
            <svg className="w-3 h-3 text-chocolate-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </AnimatedSection>

        {/* Card carousel */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">

            {/* Prev / Next arrows */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 sm:-translate-x-10 z-10 w-9 h-9 rounded-full bg-chocolate-700/80 sm:bg-chocolate-700 hover:bg-rose-gold flex items-center justify-center transition-colors duration-300 shadow-lg sm:shadow-none"
              aria-label="Previous review"
            >
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 sm:translate-x-10 z-10 w-9 h-9 rounded-full bg-chocolate-700/80 sm:bg-chocolate-700 hover:bg-rose-gold flex items-center justify-center transition-colors duration-300 shadow-lg sm:shadow-none"
              aria-label="Next review"
            >
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            {/* Review card */}
            <div className="min-h-[260px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                  className="w-full bg-chocolate-700/50 backdrop-blur-sm rounded-2xl p-5 px-14 sm:px-8 sm:p-8 border border-chocolate-600/50"
                >
                  {/* Top row: stars + Google icon */}
                  <div className="flex items-center justify-between mb-4">
                    <StarRow rating={t.rating} />
                    <div className="flex items-center gap-1.5 text-chocolate-400 text-[10px] tracking-wide">
                      <GoogleIcon />
                      <span>Google Review</span>
                    </div>
                  </div>

                  {/* Quote mark */}
                  <svg className="w-7 h-7 text-rose-gold/30 mb-3" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8C6.134 8 3 11.134 3 15v9h9v-9H6c0-2.206 1.794-4 4-4V8zm16 0c-3.866 0-7 3.134-7 7v9h9v-9h-6c0-2.206 1.794-4 4-4V8z"/>
                  </svg>

                  {/* Review text */}
                  <p className="text-base sm:text-lg text-cream-200 leading-relaxed font-light italic mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  {/* Author row */}
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${avatarColors[current % avatarColors.length]} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                      {initials}
                    </div>
                    <div>
                      <p className="font-serif text-base font-semibold text-white leading-tight">
                        {t.name}
                      </p>
                      <p className="text-xs text-chocolate-300 mt-0.5">
                        {t.occasion}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === current
                    ? 'w-8 bg-rose-gold'
                    : 'w-2 bg-chocolate-600 hover:bg-chocolate-500'
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>

          {/* CTA to leave a review */}
          <div className="text-center mt-8">
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-chocolate-400 hover:text-white transition-colors duration-300 border border-chocolate-600 hover:border-chocolate-400 px-4 py-2 rounded-full"
            >
              <GoogleIcon />
              Read all {GOOGLE_REVIEWS} reviews on Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
