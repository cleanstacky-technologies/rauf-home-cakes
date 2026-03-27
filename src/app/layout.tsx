import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import SchemaOrg from '@/components/SchemaOrg';
import { CartProvider } from '@/components/CartProvider';
import ScrollToTop from '@/components/ScrollToTop';
import { BAKERY_NAME, BAKERY_TAGLINE, BAKERY_LOCATION } from '@/data/products';

const BASE_URL = 'https://www.raufhomecakespremium.in';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: `${BAKERY_NAME} | Custom Cakes in Chromepet, Chennai`,
    template: `%s | ${BAKERY_NAME} — Chromepet Bakery`,
  },

  description:
    'Order premium custom cakes online from Rauf Home Cakes, Chromepet, Chennai. Birthday cakes, anniversary cakes, Red Velvet, Ferrero Rocher, Rasmalai cakes & more. FSSAI registered. Order via WhatsApp in minutes.',

  keywords: [
    // Brand
    'Rauf Home Cakes', 'Rauf cakes', 'raufhomecakes',
    // Product types
    'custom cakes Chennai', 'birthday cake Chennai', 'anniversary cake Chennai',
    'home bakery Chennai', 'order cake online Chennai',
    // Local SEO
    'cake shop Chromepet', 'bakery Chromepet', 'cake delivery Chromepet',
    'cake shop Pallavaram', 'bakery Tambaram', 'home baker Chennai',
    // Products
    'red velvet cake Chennai', 'ferrero rocher cake', 'rasmalai cake',
    'black forest cake Chennai', 'nutella cake', 'chocolate truffle cake',
    // Intent
    'WhatsApp cake order', 'FSSAI registered bakery', 'custom birthday cake order',
    'cake pickup Chennai', '3 day advance cake order',
  ],

  authors: [{ name: BAKERY_NAME, url: BASE_URL }],
  creator: BAKERY_NAME,
  publisher: BAKERY_NAME,

  alternates: {
    canonical: BASE_URL,
    languages: { 'en-IN': BASE_URL },
  },

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: BASE_URL,
    siteName: BAKERY_NAME,
    title: `${BAKERY_NAME} | Custom Cakes in Chromepet, Chennai`,
    description:
      'Premium handcrafted custom cakes in Chromepet, Chennai. Birthday, anniversary & celebration cakes. Order via WhatsApp — pickup ready in 3 days. 100K+ Instagram followers. FSSAI registered.',
    images: [
      {
        url: '/images/logo.jpeg',
        width: 1200,
        height: 630,
        alt: `${BAKERY_NAME} — Custom Cakes in Chennai`,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: `${BAKERY_NAME} | Custom Cakes Chromepet, Chennai`,
    description:
      'Handcrafted premium cakes in Chromepet, Chennai. Order via WhatsApp. FSSAI registered.',
    images: ['/images/logo.jpeg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/svg+xml' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: [{ url: '/favicon.png' }],
  },

  // Geo meta for local SEO
  other: {
    'geo.region': 'IN-TN',
    'geo.placename': 'Chromepet, Chennai',
    'geo.position': '12.9516;80.1462',
    ICBM: '12.9516, 80.1462',
    'og:locality': 'Chromepet',
    'og:region': 'Tamil Nadu',
    'og:country-name': 'India',
    'og:postal-code': '600044',
    'og:street-address': 'Nethaji Nagar',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FFFDF7',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className="scroll-smooth">
      <head>
        {/* Preconnect for font performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col">
        <SchemaOrg />
        <ScrollToTop />
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </CartProvider>
      </body>
    </html>
  );
}
