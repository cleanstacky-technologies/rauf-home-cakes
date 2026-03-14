import { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import { WHATSAPP_NUMBER } from '@/data/products';

export const metadata: Metadata = {
  title: 'Corporate Cake Orders & Bulk Gifting | Chennai',
  description:
    'Corporate cake orders and bulk cake gifting in Chennai. Custom branded cakes for office events, team celebrations, and client gifts. Premium packaging. Order from Rauf Home Cakes, Chromepet.',
  keywords: [
    'corporate cake order Chennai', 'bulk cake order Chennai', 'office cake Chennai',
    'corporate gifting bakery Chennai', 'bulk cakes Chromepet', 'event cakes Chennai',
    'branded custom cakes Chennai',
  ],
  openGraph: {
    title: 'Corporate Cake Orders | Rauf Home Cakes, Chennai',
    description: 'Premium corporate cakes, bulk orders & branded gifting in Chennai. Custom designs & packaging.',
  },
};

export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-warm-50 pt-24 sm:pt-28 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto section-padding">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-cream-200 rounded-full text-[10px] font-bold text-rose-gold tracking-widest uppercase mb-4">
            For Businesses
          </span>
          <h1 className="heading-lg text-chocolate-900 mb-6 max-w-3xl mx-auto">
            Corporate Orders &<br />
            <span className="gradient-text">Bulk Gifting</span>
          </h1>
          <p className="body-lg max-w-2xl mx-auto">
            Make every corporate occasion memorable with artisan cakes,
            cupcake boxes, and premium dessert hampers — custom-designed for your brand.
          </p>
        </AnimatedSection>

        {/* Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: '🏢',
              title: 'Corporate Events',
              desc: 'Cakes and dessert tables for conferences, launches, and annual celebrations. Customized to match your event theme.',
              features: ['Custom themes', 'On-time delivery', 'Branding options'],
            },
            {
              icon: '🎁',
              title: 'Client Gifting',
              desc: 'Premium gift hampers and beautifully packaged dessert boxes that leave a lasting impression on your clients.',
              features: ['Branded packaging', 'Personalized cards', 'Bulk pricing'],
            },
            {
              icon: '🎉',
              title: 'Team Celebrations',
              desc: 'Birthday cakes, milestone celebrations, and team treats. Keep your workplace sweet and morale high.',
              features: ['Monthly plans', 'Variety packs', 'Special occasions'],
            },
            {
              icon: '📦',
              title: 'Bulk Orders',
              desc: 'Large quantity orders for weddings, festivals, and retail partnerships. Special pricing for regular orders.',
              features: ['Volume discounts', 'Flexible scheduling', 'Quality guaranteed'],
            },
            {
              icon: '🎨',
              title: 'Custom Designs',
              desc: 'Logo cakes, branded cupcakes, and themed desserts that align perfectly with your corporate identity.',
              features: ['Logo placement', 'Brand colors', 'Custom shapes'],
            },
            {
              icon: '🤝',
              title: 'Regular Partnerships',
              desc: 'Ongoing partnerships with cafes, restaurants, and corporate cafeterias. Consistent quality, reliable supply.',
              features: ['Weekly/monthly supply', 'Dedicated manager', 'Priority scheduling'],
            },
          ].map((service, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.08}>
              <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-cream-100 flex items-center justify-center text-2xl mb-4">
                  {service.icon}
                </div>
                <h3 className="font-serif text-lg font-semibold text-chocolate-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-chocolate-400 leading-relaxed mb-4 flex-1">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map(feature => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-cream-100 text-[10px] font-semibold text-chocolate-500 rounded-full tracking-wide"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection>
          <div className="bg-chocolate-800 rounded-3xl p-6 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-rose-gold/10 blur-3xl" />
            <div className="relative z-10">
              <h2 className="heading-md text-white mb-4">
                Ready to Discuss Your Order?
              </h2>
              <p className="text-chocolate-200 max-w-lg mx-auto mb-8">
                Tell us about your requirements and we&apos;ll create a custom proposal
                tailored to your needs and budget.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I'd%20like%20to%20enquire%20about%20corporate%20orders.%0A%0ACompany:%0AEvent%2FOccasion:%0AApprox.%20Quantity:%0ADate:`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all duration-300 shadow-lg shadow-green-600/20"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Get a Quote on WhatsApp
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
