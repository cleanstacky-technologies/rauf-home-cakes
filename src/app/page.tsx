import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rauf Home Cakes | Custom Birthday & Celebration Cakes — Chromepet, Chennai',
  description:
    'Order premium custom cakes online from Chromepet, Chennai. Birthday cakes, Red Velvet, Ferrero Rocher, Rasmalai, Black Forest & more. FSSAI registered. 100K+ happy customers. Order via WhatsApp in minutes.',
  alternates: { canonical: 'https://www.raufhomecakes.com' },
  openGraph: {
    title: 'Rauf Home Cakes | Custom Cakes in Chromepet, Chennai',
    description: 'Premium handcrafted cakes delivered in Chennai. Birthday, anniversary & custom designs. Order via WhatsApp. FSSAI registered.',
    url: 'https://www.raufhomecakes.com',
  },
};

import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import BrandStory from '@/components/BrandStory';
import SpecialCakesCarousel from '@/components/SpecialCakesCarousel';
import Testimonials from '@/components/Testimonials';
import InstagramGallery from '@/components/InstagramGallery';
import CorporateCTA from '@/components/CorporateCTA';
import AnimatedSection from '@/components/AnimatedSection';
import FastSellingCard from '@/components/FastSellingCard';
import { featuredProducts, fastSelling, WHATSAPP_NUMBER } from '@/data/products';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Hero />


      {/* Fast Selling */}
      <section className="section-spacing bg-chocolate-900">
        <div className="max-w-7xl mx-auto section-padding">
          <AnimatedSection className="text-center mb-10 sm:mb-12">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] uppercase text-amber-400 mb-3">
              <span className="w-5 h-px bg-amber-400" />
              Fast Selling
              <span className="w-5 h-px bg-amber-400" />
            </span>
            <h2 className="heading-lg text-white mb-3">
              Flying Off the Shelf 🔥
            </h2>
            <p className="body-md text-cream-400 max-w-md mx-auto">
              Our most ordered cakes this week — grab yours before they&apos;re gone.
            </p>
          </AnimatedSection>

          {/* Mobile: horizontal scroll strip — Desktop: grid */}
          <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-3 sm:pb-0 scrollbar-hide sm:grid sm:grid-cols-3 lg:grid-cols-5 sm:overflow-x-visible">
            {fastSelling.map((product, index) => (
              <div key={product.id} className="flex-shrink-0 w-[68vw] min-w-[200px] max-w-[260px] sm:w-auto sm:max-w-none">
                <AnimatedSection delay={index * 0.08}>
                  <FastSellingCard product={product} rank={index + 1} />
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-spacing bg-warm-50">
        <div className="max-w-7xl mx-auto section-padding">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-cream-200 rounded-full text-[10px] font-bold text-rose-gold tracking-widest uppercase mb-4">
              Our Collection
            </span>
            <h2 className="heading-lg text-chocolate-900 mb-4">
              Featured Creations
            </h2>
            <p className="body-md max-w-xl mx-auto">
              Explore our most loved cakes and desserts, each one handcrafted
              with premium ingredients and artistic flair.
            </p>
          </AnimatedSection>

          <ProductGrid products={featuredProducts} />

          <AnimatedSection className="text-center mt-12">
            <Link href="/products" className="btn-secondary">
              View All Products
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Brand Story */}
      <BrandStory />

      {/* How It Works */}
      <section className="section-spacing bg-cream-50">
        <div className="max-w-7xl mx-auto section-padding">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-cream-200 rounded-full text-[10px] font-bold text-rose-gold tracking-widest uppercase mb-4">
              Simple Process
            </span>
            <h2 className="heading-lg text-chocolate-900 mb-4">
              How to Order
            </h2>
            <p className="body-md max-w-xl mx-auto">
              Ordering your dream cake is just a few taps away.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                icon: '🎂',
                title: 'Choose Your Cake',
                desc: 'Browse our collection and pick your favorite creation.',
              },
              {
                step: '02',
                icon: '🎨',
                title: 'Customize It',
                desc: 'Select flavor, size, toppings, and add a personal message.',
              },
              {
                step: '03',
                icon: '📱',
                title: 'Order via WhatsApp',
                desc: 'Your order is sent directly to us through WhatsApp.',
              },
              {
                step: '04',
                icon: '🎉',
                title: 'Pick Up & Enjoy',
                desc: 'Collect your freshly baked creation at your chosen time.',
              },
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-cream-100 flex items-center justify-center text-3xl">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold text-rose-gold tracking-widest uppercase">
                    Step {item.step}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-chocolate-800 mt-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-chocolate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Special Occasion Cakes */}
      <SpecialCakesCarousel />

      {/* Testimonials */}
      <Testimonials />

      {/* Instagram Gallery */}
      <InstagramGallery />

      {/* Corporate CTA */}
      <CorporateCTA />

      {/* Final CTA */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto section-padding text-center">
          <AnimatedSection>
            <h2 className="heading-lg text-chocolate-900 mb-4">
              Ready to Make Your<br />
              <span className="gradient-text">Celebration Sweeter?</span>
            </h2>
            <p className="body-md max-w-md mx-auto mb-8">
              Order your perfect cake today. Fresh, handcrafted, and made
              just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products" className="btn-primary text-base px-10 py-4">
                Order Now
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base px-10 py-4"
              >
                Chat on WhatsApp
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
