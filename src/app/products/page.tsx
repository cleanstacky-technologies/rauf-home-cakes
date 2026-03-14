import { Metadata } from 'next';
import ProductGrid from '@/components/ProductGrid';
import AnimatedSection from '@/components/AnimatedSection';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'Order Custom Cakes Online — Menu & Prices | Chromepet, Chennai',
  description:
    'Browse 32+ handcrafted custom cakes from Rauf Home Cakes in Chromepet, Chennai. Birthday cakes, Red Velvet, Ferrero Rocher, Rasmalai, Black Forest & more. Half Kg from ₹350. Order via WhatsApp.',
  keywords: [
    'cake menu Chennai', 'custom cake prices Chromepet', 'birthday cake order online Chennai',
    'red velvet cake price Chennai', 'ferrero rocher cake order', 'rasmalai cake Chennai',
    'half kg cake Chromepet', 'WhatsApp cake order Chennai',
  ],
  openGraph: {
    title: 'Custom Cake Menu | Rauf Home Cakes — Chromepet, Chennai',
    description: '32+ premium handcrafted cakes. Birthday, anniversary & custom designs. Order via WhatsApp.',
  },
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-warm-50 pt-24 sm:pt-28 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto section-padding">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-cream-200 rounded-full text-[10px] font-bold text-rose-gold tracking-widest uppercase mb-4">
            Our Collection
          </span>
          <h1 className="heading-lg text-chocolate-900 mb-4">
            Cakes & Desserts
          </h1>
          <p className="body-md max-w-xl mx-auto">
            Every creation is handcrafted with premium ingredients and a whole lot of love.
            Pick your favorite and customize it your way.
          </p>
        </AnimatedSection>

        <ProductGrid products={products} showFilters />
      </div>
    </div>
  );
}
