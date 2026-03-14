'use client';

import React from 'react';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';
import { WHATSAPP_NUMBER } from '@/data/products';

export default function CorporateCTA() {
  return (
    <section className="section-spacing bg-gradient-to-br from-cream-100 via-warm-100 to-cream-50">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-sm border border-cream-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-rose-gold/5 blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 bg-cream-100 rounded-full text-[10px] font-bold text-rose-gold tracking-widest uppercase mb-4">
                For Businesses
              </span>
              <h2 className="heading-lg text-chocolate-900 mb-4">
                Corporate Orders &<br />
                <span className="gradient-text">Bulk Gifting</span>
              </h2>
              <p className="body-md max-w-md mb-8">
                Impress your clients, celebrate milestones, and sweeten every
                corporate occasion. We offer customized packaging, branded designs,
                and bulk pricing for businesses.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/corporate" className="btn-primary">
                  Learn More
                </Link>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I'd%20like%20to%20enquire%20about%20corporate%20orders.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Get a Quote
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="hidden lg:flex justify-center">
              <div className="grid grid-cols-2 gap-4 max-w-xs">
                {[
                  { emoji: '🏢', label: 'Corporate Events' },
                  { emoji: '🎁', label: 'Gift Hampers' },
                  { emoji: '🎉', label: 'Team Celebrations' },
                  { emoji: '📦', label: 'Bulk Orders' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="aspect-square rounded-2xl bg-gradient-to-br from-cream-100 to-warm-100 flex flex-col items-center justify-center p-4 hover:shadow-md transition-shadow duration-300"
                  >
                    <span className="text-3xl mb-2">{item.emoji}</span>
                    <span className="text-[10px] font-semibold text-chocolate-500 tracking-wider text-center uppercase">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
