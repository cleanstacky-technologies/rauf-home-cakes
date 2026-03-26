import { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import { BAKERY_NAME, BAKER_NAME, BAKER_TITLE, CUSTOMER_COUNT, GOOGLE_RATING, GOOGLE_REVIEWS } from '@/data/products';

export const metadata: Metadata = {
  title: 'About Fazila Ansari — Professional Baker | Rauf Home Cakes, Chrompet',
  description:
    'Rauf Home Cakes is run by Fazila Ansari, a professional baker in Chrompet, Chennai. FSSAI registered. No premix. Handcrafted custom cakes for birthdays & weddings. 2,000+ happy customers.',
  keywords: [
    'Fazila Ansari baker', 'professional baker Chrompet', 'home baker Chromepet',
    'FSSAI registered bakery Chennai', 'no premix cakes Chennai',
    'best home baker Chennai', 'Rauf Home Cakes story',
  ],
  openGraph: {
    title: 'About Fazila Ansari | Rauf Home Cakes, Chrompet Chennai',
    description: 'Professional baker Fazila Ansari. FSSAI registered. No premix. 2,000+ happy customers. Birthdays & weddings.',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-warm-50 pt-24 sm:pt-28 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto section-padding">

        {/* Hero */}
        <AnimatedSection className="text-center mb-16 lg:mb-20">
          <span className="inline-block px-4 py-1.5 bg-cream-200 rounded-full text-[10px] font-bold text-rose-gold tracking-widest uppercase mb-4">
            Our Story
          </span>
          <h1 className="heading-lg text-chocolate-900 mb-4 max-w-3xl mx-auto">
            Meet <span className="gradient-text">{BAKER_NAME}</span>
          </h1>
          <p className="text-base text-rose-gold font-semibold tracking-wide mb-4">{BAKER_TITLE} · {BAKERY_NAME}</p>
          <p className="body-lg max-w-2xl mx-auto">
            From a home kitchen in Chrompet to {CUSTOMER_COUNT} happy customers — built on passion,
            skill, and one simple rule: <strong>no premix, ever.</strong>
          </p>
        </AnimatedSection>

        {/* Story Sections */}
        <div className="space-y-12 sm:space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-cream-200 via-rose-gold/10 to-warm-200 flex flex-col items-center justify-center gap-3 p-8">
                <span className="text-8xl">👩‍🍳</span>
                <p className="font-serif font-bold text-chocolate-800 text-xl">{BAKER_NAME}</p>
                <p className="text-xs text-rose-gold font-semibold tracking-widest uppercase">{BAKER_TITLE}</p>
                <div className="flex flex-wrap gap-2 justify-center mt-2">
                  {['FSSAI Registered', 'No Premix', 'Professional Baker', 'Chrompet, Chennai'].map(t => (
                    <span key={t} className="text-[10px] bg-white/80 text-chocolate-600 px-2 py-0.5 rounded-full font-medium">{t}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <h2 className="heading-md text-chocolate-900 mb-4">The Beginning</h2>
              <div className="space-y-4 body-md">
                <p>
                  Hi, I'm <strong className="text-chocolate-800">{BAKER_NAME}</strong>, the founder and
                  baker behind {BAKERY_NAME}. What started as a deep love for baking in my home kitchen in
                  Chrompet grew into a full-time passion business — one custom cake at a time.
                </p>
                <p>
                  I discovered {BAKERY_NAME} on Instagram and people didn't just love the taste — they fell
                  in love with the designs, the care, and the soul in every creation. With 2,074 posts shared
                  and {CUSTOMER_COUNT} customers served, the journey has been truly beautiful.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" className="order-2 lg:order-1">
              <h2 className="heading-md text-chocolate-900 mb-4">Our Philosophy</h2>
              <div className="space-y-4 body-md">
                <p>
                  <strong className="text-chocolate-800">No premix. Ever.</strong> Every cake at {BAKERY_NAME}
                  is made completely from scratch. We believe that if you're celebrating something that matters,
                  your cake should be made with ingredients that matter too.
                </p>
                <p>
                  We specialise in <strong className="text-chocolate-800">custom birthday cakes, wedding cakes,
                  kids' themed cakes, and bento cakes</strong> — all FSSAI registered, all made fresh per order,
                  with a minimum 3-day advance notice to ensure perfection.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" className="order-1 lg:order-2">
              <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-warm-200 via-cream-300 to-rose-light/20 flex items-center justify-center">
                <span className="text-8xl">🎂</span>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Stats */}
        <AnimatedSection className="mt-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 bg-white rounded-3xl p-6 sm:p-10 shadow-sm">
            {[
              { number: CUSTOMER_COUNT, label: 'Happy Customers' },
              { number: GOOGLE_RATING, label: `Google Rating` },
              { number: GOOGLE_REVIEWS, label: 'Google Reviews' },
              { number: '2,074', label: 'Instagram Posts' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-xl sm:text-3xl font-bold text-chocolate-800 mb-1">{stat.number}</p>
                <p className="text-xs text-chocolate-400 tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* What Sets Us Apart */}
        <AnimatedSection className="mt-12">
          <div className="bg-white rounded-3xl p-5 sm:p-12 shadow-sm">
            <h2 className="heading-md text-chocolate-900 text-center mb-10">
              What Sets Us Apart
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: '🚫', title: 'No Premix', desc: 'Every cake made 100% from scratch. Real ingredients, real taste.' },
                { icon: '🏅', title: 'FSSAI Registered', desc: 'Fully registered food business. Reg: 22425423000394.' },
                { icon: '🎂', title: 'Birthdays & Weddings', desc: 'Custom designs for every occasion — themed, floral, bento & more.' },
                { icon: '✨', title: 'Fresh Per Order', desc: 'Baked fresh for your date. Never pre-made, never frozen.' },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-cream-100 flex items-center justify-center text-3xl">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-chocolate-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-chocolate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
