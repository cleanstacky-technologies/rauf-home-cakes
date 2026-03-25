/**
 * JSON-LD Structured Data for Rauf Home Cakes
 * Tells Google exactly what this business is, where it is, and what it sells.
 * Enables rich results: star ratings, address panels, FAQs, product cards.
 */

import { BAKERY_NAME, BAKERY_PHONE, BAKERY_LOCATION, WHATSAPP_NUMBER, INSTAGRAM_HANDLE, GOOGLE_REVIEWS } from '@/data/products';

const BASE_URL = 'https://www.raufhomecakes.com'; // update when deployed

export default function SchemaOrg() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': ['Bakery', 'LocalBusiness', 'FoodEstablishment'],
    '@id': `${BASE_URL}/#bakery`,
    name: BAKERY_NAME,
    alternateName: ['Rauf Cakes', 'Rauf Home Cakes Chromepet'],
    description:
      'Premium custom cakes in Chrompet, Chennai by Fazila Ansari, Professional Baker. Birthdays, weddings, kids\' themed cakes & bento cakes. No premix. FSSAI registered. Order via WhatsApp.',
    url: BASE_URL,
    telephone: BAKERY_PHONE,
    email: 'raufhomecakes@gmail.com',
    image: `${BASE_URL}/images/logo.jpeg`,
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/images/logo.jpeg`,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Nethaji Nagar',
      addressLocality: 'Chromepet',
      addressRegion: 'Tamil Nadu',
      postalCode: '600044',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '12.9516',
      longitude: '80.1462',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '21:00',
      },
    ],
    servesCuisine: 'Bakery',
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, WhatsApp',
    hasMap: 'https://maps.google.com/?q=Nethaji+Nagar,Chromepet,Chennai',
    sameAs: [
      `https://www.instagram.com/${INSTAGRAM_HANDLE.replace('@', '')}`,
      `https://wa.me/${WHATSAPP_NUMBER}`,
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      worstRating: '1',
      ratingCount: GOOGLE_REVIEWS,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Custom Cakes Menu',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Black Forest Cake', description: 'Classic Black Forest with chocolate sponge and cherries' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Red Velvet Cake', description: 'Velvety red sponge with cream cheese frosting' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Ferrero Rocher Cake', description: 'Decadent Ferrero Rocher decorated celebration cake' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Rasmalai Cake', description: 'Fusion rasmalai flavoured cake — Chennai favourite' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Nutella Cake', description: 'Rich Nutella-layered chocolate hazelnut cake' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Rich Chocolate Truffle', description: 'Premium Belgian chocolate truffle celebration cake' } },
      ],
    },
    // FSSAI food safety licence
    identifier: {
      '@type': 'PropertyValue',
      name: 'FSSAI License',
      value: '22425423000394',
    },
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Our Cakes', item: `${BASE_URL}/products` },
      { '@type': 'ListItem', position: 3, name: 'About', item: `${BASE_URL}/about` },
      { '@type': 'ListItem', position: 4, name: 'Contact', item: `${BASE_URL}/contact` },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I order a cake from Rauf Home Cakes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Browse our menu, choose your cake, customise the weight, flavour, and topper, add to cart, and place the order directly via WhatsApp. We confirm within minutes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is Rauf Home Cakes located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We are based in Nethaji Nagar, Chromepet, Chennai – 600044, Tamil Nadu, India.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many days in advance should I order?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We require at least 3 days advance notice for all custom cake orders to ensure freshness and quality.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Rauf Home Cakes FSSAI registered?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Rauf Home Cakes is FSSAI registered with licence number 22425423000394.',
        },
      },
      {
        '@type': 'Question',
        name: 'What cake sizes are available?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer cakes in Half Kg, 1 Kg, 1.5 Kg, 2 Kg, and 2.5 Kg sizes. Prices are proportionally calculated from our base menu prices.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
