import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BAKERY_NAME, INSTAGRAM_HANDLE, WHATSAPP_NUMBER, BAKERY_LOCATION, BAKERY_PHONE } from '@/data/products';

const FSSAI_REG = '22425423000394';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-chocolate-800 text-cream-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 xl:px-24 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              {/* Logo mark — white tinted for dark footer */}
              <div className="relative h-10 w-10 flex-shrink-0 brightness-0 invert opacity-90" style={{ position: 'relative' }}>
                <Image
                  src="/images/logo.jpeg"
                  alt="Rauf Home Cakes logo"
                  width={40}
                  height={40}
                  className="object-contain rounded-sm w-10 h-10"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-lg font-bold text-white tracking-tight">
                  Rauf Home
                </span>
                <span className="font-serif text-[10px] font-medium text-rose-light tracking-[0.25em] uppercase mt-0.5">
                  Cakes
                </span>
              </div>
            </div>
            <p className="text-sm text-cream-300 leading-relaxed mb-4">
              Handcrafted with love, baked to perfection.
              Every creation is a celebration of flavor, art,
              and passion for baking.
            </p>
            {/* FSSAI Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-chocolate-700/60 rounded-lg border border-chocolate-600 mb-5">
              <span className="text-[9px] font-bold text-green-400 tracking-widest uppercase">FSSAI</span>
              <span className="w-px h-3 bg-chocolate-500" />
              <span className="text-[10px] text-cream-400 font-mono tracking-wider">{FSSAI_REG}</span>
            </div>
            <div className="flex gap-4">
              <a
                href={`https://instagram.com/${INSTAGRAM_HANDLE.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-chocolate-700 hover:bg-rose-gold flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-chocolate-700 hover:bg-green-600 flex items-center justify-center transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: '/products', label: 'Our Cakes' },
                { href: '/about', label: 'Our Story' },
                { href: '/corporate', label: 'Corporate Orders' },
                { href: '/contact', label: 'Contact Us' },
              ].map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-300 hover:text-rose-light transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Cakes */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4">Popular Cakes</h3>
            <ul className="space-y-3">
              {[
                'Rich Chocolate Truffle',
                'Pistachio Cake',
                'Rasmalai Cake',
                'Ferrero Rocher Cake',
                'Nutty Butterscotch',
              ].map(cake => (
                <li key={cake}>
                  <Link
                    href="/products"
                    className="text-sm text-cream-300 hover:text-rose-light transition-colors duration-300"
                  >
                    {cake}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-cream-300">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>{BAKERY_LOCATION}</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{BAKERY_PHONE}<br />Order via WhatsApp anytime</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                </svg>
                <span>{INSTAGRAM_HANDLE}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-chocolate-700 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs text-chocolate-400">
            &copy; {currentYear} {BAKERY_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-chocolate-400">
            Powered by{' '}
            <a
              href="https://cleanstacky.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-light hover:text-white transition-colors duration-300 font-medium"
            >
              Cleanstacky Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
