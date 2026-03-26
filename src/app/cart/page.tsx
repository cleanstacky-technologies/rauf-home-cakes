'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/components/CartProvider';
import { pickupSlots } from '@/data/products';
import { getAvailableDates, formatDate, formatDateShort, toInputDateString } from '@/utils/dates';
import { generateWhatsAppMessage, openWhatsApp } from '@/utils/whatsapp';

// ─── Bug fix #3: parse YYYY-MM-DD as LOCAL midnight, not UTC midnight ───────
function parseDateLocal(dateStr: string): Date {
  const [y, m, d] = dateStr.split('-').map(Number);
  return new Date(y, m - 1, d);
}

// ─── Bug fix #4: strip spaces / dashes before phone validation ────────────
function sanitisePhone(raw: string): string {
  return raw.replace(/[\s\-().+]/g, '');
}

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, totalAmount } = useCart();

  const [selectedDate,    setSelectedDate   ] = useState('');
  const [selectedSlot,    setSelectedSlot   ] = useState('');
  const [customerName,    setCustomerName   ] = useState('');
  const [customerPhone,   setCustomerPhone  ] = useState('');
  const [errors,          setErrors         ] = useState<Record<string, string>>({});

  // ─── Bug fix #5: loading state prevents double-tap ───────────────────────
  const [isSubmitting,    setIsSubmitting   ] = useState(false);

  // ─── Bug fix #1 & #2: show success screen after order ────────────────────
  const [orderPlaced,     setOrderPlaced    ] = useState(false);

  const availableDates = useMemo(() => getAvailableDates(14), []);

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (!selectedDate)                                           e.date  = 'Please select a pickup date.';
    if (!selectedSlot)                                           e.slot  = 'Please select a time slot.';
    if (!customerName.trim())                                    e.name  = 'Please enter your name.';
    const cleaned = sanitisePhone(customerPhone);
    if (!cleaned)                                                e.phone = 'Please enter your phone number.';
    else if (!/^[6-9]\d{9}$/.test(cleaned))                    e.phone = 'Please enter a valid 10-digit Indian mobile number.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handlePlaceOrder = () => {
    if (isSubmitting) return;
    if (!validate()) return;

    setIsSubmitting(true);

    const slotLabel = pickupSlots.find(s => s.id === selectedSlot)?.label || selectedSlot;
    // Bug fix #3: use local date parsing
    const message   = generateWhatsAppMessage(
      items,
      formatDate(parseDateLocal(selectedDate)),
      slotLabel,
      customerName.trim(),
      sanitisePhone(customerPhone).trim()
    );

    openWhatsApp(message);

    // Bug fix #1 & #2: clear cart and show success state
    clearCart();
    setOrderPlaced(true);
    setIsSubmitting(false);
  };

  /* ─── Success screen after order placed ────────────────────────────────── */
  if (orderPlaced) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-warm-50 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', damping: 20 }}
          className="text-center px-6 max-w-md mx-auto"
        >
          {/* Animated checkmark */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 14, delay: 0.1 }}
            className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-50 flex items-center justify-center"
          >
            <svg className="w-12 h-12 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </motion.div>

          <h1 className="font-serif text-3xl font-bold text-chocolate-800 mb-3">
            Order Sent! 🎂
          </h1>
          <p className="text-chocolate-400 mb-2 leading-relaxed">
            Your order has been shared on WhatsApp. Fazila will confirm your order shortly.
          </p>
          <p className="text-sm text-chocolate-300 mb-8">
            Pickup: <span className="font-semibold text-chocolate-500">
              {formatDate(parseDateLocal(selectedDate))}
            </span>
          </p>

          {/* Auto-reply warning — the key UX fix */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-4 text-left">
            <p className="text-sm text-amber-800 font-semibold mb-1">⚠️ You may get an auto-reply asking for details</p>
            <p className="text-xs text-amber-700 leading-relaxed">
              Our WhatsApp sometimes sends an automatic response asking for date, size, etc.{' '}
              <span className="font-semibold">Please ignore it</span> — your complete order
              is already in your message above. Fazila will personally confirm it shortly.
            </p>
          </div>

          {/* WhatsApp status note */}
          <div className="bg-green-50 border border-green-100 rounded-2xl p-4 mb-8 text-left">
            <p className="text-sm text-green-700 font-medium mb-1">📱 Didn&apos;t open WhatsApp?</p>
            <p className="text-xs text-green-600">
              Tap here to message us directly:{' '}
              <a href="https://wa.me/919940655245" className="underline font-semibold">+91 99406 55245</a>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/products"
              className="px-6 py-3 bg-chocolate-800 text-white font-semibold rounded-full hover:bg-chocolate-700 transition-all duration-300 text-sm"
            >
              Browse More Cakes
            </Link>
            <Link
              href="/"
              className="px-6 py-3 border-2 border-cream-300 text-chocolate-600 font-semibold rounded-full hover:border-chocolate-300 transition-all duration-300 text-sm"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  /* ─── Empty cart state ──────────────────────────────────────────────────── */
  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-warm-50 pt-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center px-6">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-cream-100 flex items-center justify-center text-4xl">🛒</div>
          <h1 className="font-serif text-2xl font-bold text-chocolate-800 mb-3">Your Cart is Empty</h1>
          <p className="text-chocolate-400 mb-8 max-w-sm mx-auto">
            Looks like you haven&apos;t added anything yet. Browse our menu to find your perfect cake.
          </p>
          <Link href="/products" className="btn-primary">Browse Cakes</Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-50 pt-24 pb-20">
      <div className="max-w-5xl mx-auto section-padding">

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="heading-lg text-chocolate-900">Your Cart</h1>
          <p className="body-md mt-1">{items.length} item{items.length !== 1 ? 's' : ''} · ₹{totalAmount.toLocaleString('en-IN')}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ── Cart Items ── */}
          <div className="lg:col-span-2 space-y-3 order-2 lg:order-1">
            <AnimatePresence>
              {items.map(item => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    {/* Category icon */}
                    <div className="w-12 h-12 rounded-xl bg-cream-100 flex items-center justify-center text-2xl flex-shrink-0">
                      {item.category === 'Exotic Cakes'          ? '✨' :
                       item.category === 'Choco Premium Cakes'   ? '🍫' :
                       item.category === 'Fusion Premium Cakes'  ? '🌹' : '🎂'}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-serif font-semibold text-chocolate-800 text-sm sm:text-base leading-snug">
                            {item.productName}
                          </h3>
                          <span className="text-[9px] text-rose-gold/70 font-bold tracking-widest uppercase">{item.category}</span>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1.5 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0 ml-1"
                          aria-label="Remove"
                        >
                          <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                          </svg>
                        </button>
                      </div>

                      {/* Chips */}
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        <span className="px-2 py-0.5 bg-cream-100 text-chocolate-500 text-[10px] font-medium rounded-full">{item.weight}</span>
                        {item.flavour && item.flavour !== 'Default (as described)' && (
                          <span className="px-2 py-0.5 bg-cream-100 text-chocolate-500 text-[10px] font-medium rounded-full">{item.flavour}</span>
                        )}
                        {item.topper !== 'No Topper' && (
                          <span className="px-2 py-0.5 bg-rose-gold/10 text-rose-gold text-[10px] font-medium rounded-full">{item.topper}</span>
                        )}
                      </div>

                      {item.cakeMessage && (
                        <p className="text-xs text-rose-gold italic mt-1.5">&ldquo;{item.cakeMessage}&rdquo;</p>
                      )}
                      {item.specialInstructions && (
                        <p className="text-xs text-chocolate-300 mt-0.5">Note: {item.specialInstructions}</p>
                      )}

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="w-7 h-7 rounded-full border border-cream-300 flex items-center justify-center text-chocolate-500 hover:bg-cream-100 disabled:opacity-30 transition-colors"
                          >
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                            </svg>
                          </button>
                          <span className="w-6 text-center text-sm font-bold text-chocolate-800">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 rounded-full border border-cream-300 flex items-center justify-center text-chocolate-500 hover:bg-cream-100 transition-colors"
                          >
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                          </button>
                        </div>
                        <span className="font-bold text-chocolate-800">
                          ₹{(item.totalPrice * item.quantity).toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            <button onClick={clearCart} className="text-xs text-red-400 hover:text-red-500 transition-colors px-1 pt-1">
              Clear Cart
            </button>
          </div>

          {/* ── Order Summary Sidebar ── */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm sticky top-24 space-y-5">
              <h2 className="font-serif text-xl font-bold text-chocolate-800">Complete Order</h2>

              {/* Date */}
              <div>
                <label className="block text-sm font-semibold text-chocolate-700 mb-2">Pickup Date</label>
                <div className="flex flex-wrap gap-1.5">
                  {availableDates.slice(0, 7).map(date => {
                    const dateStr  = toInputDateString(date);
                    const selected = selectedDate === dateStr;
                    return (
                      <button
                        key={dateStr}
                        onClick={() => { setSelectedDate(dateStr); setErrors(p => ({ ...p, date: '' })); }}
                        className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                          selected
                            ? 'border-rose-gold bg-rose-gold/5 text-rose-gold ring-1 ring-rose-gold/20'
                            : 'border-cream-300 bg-warm-50 text-chocolate-600 hover:border-chocolate-300'
                        }`}
                      >
                        <span className="block text-[9px] uppercase opacity-60 leading-none">
                          {date.toLocaleDateString('en-IN', { weekday: 'short' })}
                        </span>
                        <span className="block font-bold">{formatDateShort(date)}</span>
                      </button>
                    );
                  })}
                </div>
                {errors.date && <p className="text-xs text-red-400 mt-1">{errors.date}</p>}
              </div>

              {/* Slot */}
              <div>
                <label className="block text-sm font-semibold text-chocolate-700 mb-2">Pickup Slot</label>
                <div className="space-y-1.5">
                  {pickupSlots.map(slot => (
                    <button
                      key={slot.id}
                      onClick={() => { setSelectedSlot(slot.id); setErrors(p => ({ ...p, slot: '' })); }}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm font-medium text-left transition-all ${
                        selectedSlot === slot.id
                          ? 'border-rose-gold bg-rose-gold/5 text-rose-gold ring-1 ring-rose-gold/20'
                          : 'border-cream-300 bg-warm-50 text-chocolate-600 hover:border-chocolate-300'
                      }`}
                    >
                      {slot.label}
                    </button>
                  ))}
                </div>
                {errors.slot && <p className="text-xs text-red-400 mt-1">{errors.slot}</p>}
              </div>

              {/* Customer info */}
              <div className="space-y-2.5">
                <div>
                  <label className="block text-sm font-semibold text-chocolate-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={e => { setCustomerName(e.target.value); setErrors(p => ({ ...p, name: '' })); }}
                    placeholder="Full name"
                    className="w-full px-3.5 py-2.5 bg-warm-50 border border-cream-300 rounded-xl text-sm text-chocolate-700 placeholder:text-chocolate-200 focus:outline-none focus:ring-2 focus:ring-rose-gold/30 focus:border-rose-gold transition-all"
                  />
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-chocolate-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={e => { setCustomerPhone(e.target.value); setErrors(p => ({ ...p, phone: '' })); }}
                    placeholder="10-digit mobile number"
                    maxLength={15}
                    className="w-full px-3.5 py-2.5 bg-warm-50 border border-cream-300 rounded-xl text-sm text-chocolate-700 placeholder:text-chocolate-200 focus:outline-none focus:ring-2 focus:ring-rose-gold/30 focus:border-rose-gold transition-all"
                  />
                  {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Total + CTA */}
              <div className="pt-4 border-t border-cream-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-chocolate-400">Order Total</span>
                  <span className="text-2xl font-bold text-chocolate-800">₹{totalAmount.toLocaleString('en-IN')}</span>
                </div>

                <button
                  onClick={handlePlaceOrder}
                  disabled={isSubmitting}
                  className={`w-full py-4 text-white font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 text-sm active:scale-[0.98] shadow-lg ${
                    isSubmitting
                      ? 'bg-green-400 shadow-green-400/20 cursor-not-allowed'
                      : 'bg-green-600 hover:bg-green-700 shadow-green-600/20'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Opening WhatsApp…
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Place Order via WhatsApp
                    </>
                  )}
                </button>

                <p className="text-[10px] text-chocolate-300 text-center mt-3 leading-relaxed">
                  Orders are confirmed after full payment only. For customizations, please confirm your requirements via WhatsApp first.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
