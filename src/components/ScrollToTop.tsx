'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Scrolls to the top of the page whenever the route changes.
 * Also disables the browser's native scroll-restoration so a reload
 * or back-navigation never jumps to a previously-scrolled position.
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  // Disable browser scroll restoration once on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}
