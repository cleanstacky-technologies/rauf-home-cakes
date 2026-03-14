import { Metadata } from 'next';
import AnimatedSection from '@/components/AnimatedSection';
import { BAKERY_NAME, INSTAGRAM_HANDLE, WHATSAPP_NUMBER, BAKERY_LOCATION } from '@/data/products';

export const metadata: Metadata = {
  title: 'Contact Us — Order Cakes via WhatsApp | Chromepet, Chennai',
  description:
    'Contact Rauf Home Cakes in Nethaji Nagar, Chromepet, Chennai – 600044. Call +91 99406 55245 or order via WhatsApp. Instagram: @raufhomecakes. FSSAI Reg: 22425423000394.',
  keywords: [
    'Rauf Home Cakes contact', 'cake order WhatsApp Chennai', 'bakery Chromepet phone number',
    'Nethaji Nagar bakery', 'home baker contact Chennai',
  ],
  openGraph: {
    title: 'Contact Rauf Home Cakes | Chromepet, Chennai',
    description: 'Order cakes via WhatsApp from Nethaji Nagar, Chromepet, Chennai. +91 99406 55245.',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-warm-50 pt-24 sm:pt-28 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto section-padding">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-cream-200 rounded-full text-[10px] font-bold text-rose-gold tracking-widest uppercase mb-4">
            Get in Touch
          </span>
          <h1 className="heading-lg text-chocolate-900 mb-4">
            We&apos;d Love to<br />
            <span className="gradient-text">Hear From You</span>
          </h1>
          <p className="body-lg max-w-xl mx-auto">
            Whether you have a question, a custom order request, or just want to
            say hello — we&apos;re always happy to chat.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {/* WhatsApp */}
          <AnimatedSection delay={0}>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 text-center group h-full"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h3 className="font-serif text-lg font-semibold text-chocolate-800 mb-2">WhatsApp</h3>
              <p className="text-sm text-chocolate-400 mb-3">Chat with us anytime — orders, queries, or just to say hi.</p>
              <span className="text-sm font-medium text-green-600">Message Us →</span>
            </a>
          </AnimatedSection>

          {/* Instagram */}
          <AnimatedSection delay={0.1}>
            <a
              href={`https://instagram.com/${INSTAGRAM_HANDLE.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 text-center group h-full"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-pink-50 flex items-center justify-center group-hover:bg-pink-100 transition-colors">
                <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                </svg>
              </div>
              <h3 className="font-serif text-lg font-semibold text-chocolate-800 mb-2">Instagram</h3>
              <p className="text-sm text-chocolate-400 mb-3">Follow us for daily inspiration and behind-the-scenes content.</p>
              <span className="text-sm font-medium text-pink-600">{INSTAGRAM_HANDLE} →</span>
            </a>
          </AnimatedSection>

          {/* Location */}
          <AnimatedSection delay={0.2}>
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center h-full">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-cream-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-chocolate-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-semibold text-chocolate-800 mb-2">Pickup Location</h3>
              <p className="text-sm text-chocolate-400 mb-3">Exact address shared on WhatsApp after order confirmation.</p>
              <span className="text-sm font-medium text-chocolate-500">{BAKERY_LOCATION}</span>
            </div>
          </AnimatedSection>
        </div>

        {/* FAQ */}
        <AnimatedSection className="mt-12 sm:mt-20">
          <div className="max-w-2xl mx-auto">
            <h2 className="heading-md text-chocolate-900 text-center mb-6 sm:mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'How do I place an order?',
                  a: 'Browse our products, customize your cake, and click "Place Order". Your order details are automatically sent to our WhatsApp for confirmation.',
                },
                {
                  q: 'How far in advance should I order?',
                  a: 'We require a minimum of 3 days advance notice. For custom designs or large orders, we recommend 5-7 days.',
                },
                {
                  q: 'Do you deliver?',
                  a: 'Currently we offer pickup only. The exact pickup address is shared after order confirmation on WhatsApp.',
                },
                {
                  q: 'Can I get an eggless cake?',
                  a: 'Yes! Most of our cakes can be made eggless. Just mention it in the special instructions while ordering.',
                },
                {
                  q: 'What payment methods do you accept?',
                  a: 'Payment is made at the time of pickup. We accept UPI, cash, and bank transfer. No advance payment needed for standard orders.',
                },
              ].map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm">
                  <h3 className="font-serif font-semibold text-chocolate-800 mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-chocolate-400 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
