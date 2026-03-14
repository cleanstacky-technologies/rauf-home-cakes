'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from './CartProvider';
import { BAKERY_NAME } from '@/data/products';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Our Cakes' },
  { href: '/about', label: 'About' },
  { href: '/corporate', label: 'Corporate' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label={`${BAKERY_NAME} — Home`}>
            {/* Logo mark */}
            <div className="relative h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/logo.jpeg"
                alt=""
                fill
                className="object-contain rounded-sm"
                priority
                sizes="48px"
              />
            </div>
            {/* Brand name */}
            <div className="flex flex-col leading-none">
              <span className="font-serif text-lg sm:text-xl font-bold text-chocolate-900 tracking-tight group-hover:text-chocolate-700 transition-colors duration-300">
                Rauf Home
              </span>
              <span className="font-serif text-[10px] sm:text-xs font-medium text-rose-gold tracking-[0.25em] uppercase mt-0.5">
                Cakes
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 relative ${
                  pathname === link.href
                    ? 'text-rose-gold'
                    : 'text-chocolate-500 hover:text-rose-gold'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-rose-gold rounded-full"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Cart + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/cart"
              className="relative p-2.5 rounded-full hover:bg-chocolate-50 transition-colors duration-300 group"
              aria-label="View cart"
            >
              <svg
                className="w-6 h-6 text-chocolate-600 group-hover:text-rose-gold transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-rose-gold text-white text-[10px] font-bold rounded-full flex items-center justify-center"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full hover:bg-chocolate-50 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`block h-0.5 bg-chocolate-600 rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 bg-chocolate-600 rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 bg-chocolate-600 rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-chocolate-900/30 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-[280px] bg-white shadow-2xl pt-24 px-6 overflow-y-auto"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`py-3 text-lg font-medium transition-colors border-b border-cream-200 ${
                      pathname === link.href
                        ? 'text-rose-gold'
                        : 'text-chocolate-600 hover:text-rose-gold'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/cart"
                  className="py-3 text-lg font-medium text-chocolate-600 hover:text-rose-gold transition-colors border-b border-cream-200 flex items-center justify-between"
                >
                  <span>Cart</span>
                  {totalItems > 0 && (
                    <span className="w-6 h-6 bg-rose-gold text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
