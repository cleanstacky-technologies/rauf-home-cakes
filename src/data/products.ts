import { Product, TopperOption, Testimonial, PickupSlot } from '@/types';

// ─── Business Details ────────────────────────────────────────────────────────
export const BAKERY_NAME      = 'Rauf Home Cakes';
export const BAKERY_TAGLINE   = 'Premium Custom Cakes | Chrompet, Chennai';
export const INSTAGRAM_HANDLE = '@rauf_home_cakes';  // exact handle
export const WHATSAPP_NUMBER  = '919940655245'; // +91 99406 55245
export const BAKERY_LOCATION  = 'Nethaji Nagar, Chromepet, Chennai – 600044';
export const BAKERY_PHONE     = '+91 99406 55245';
export const MIN_ADVANCE_DAYS = 3;

// ─── Baker Details ─────────────────────────────────────────────────────────────
export const BAKER_NAME     = 'Fazila Ansari';
export const BAKER_TITLE    = 'Professional Baker & Founder';

// ─── Social Proof (real numbers from Instagram / Google) ─────────────────────
export const FOLLOWER_COUNT  = '3K+';
export const CUSTOMER_COUNT  = '2,000+';
export const GOOGLE_RATING   = '4.9★';
export const GOOGLE_REVIEWS  = '484';

// ─── Sponge / Base Flavours ───────────────────────────────────────────────────
export const spongeFlavours: string[] = [
  'Default (as described)',
  'Chocolate',
  'Vanilla',
  'Red Velvet',
  'Butterscotch',
  'Black Forest',
  'White Forest',
  'Strawberry',
  'Coffee Mocha',
  'Rasmalai',
  'Nutella',
  'Ferrero Rocher',
];

// ─── Topper Options ───────────────────────────────────────────────────────────
export const topperOptions: TopperOption[] = [
  { id: 'none',            name: 'No Topper',          price: 0   },
  { id: 'birthday_topper', name: 'Birthday Topper',    price: 120 },
  { id: 'theme_topper',    name: 'Theme Based Topper', price: 100 },
  { id: 'custom_topper',   name: 'Customised Topper',  price: 395 },
];

// ─── Category Labels ──────────────────────────────────────────────────────────
export const categories = [
  'Classic Premium Cakes',
  'Choco Premium Cakes',
  'Fusion Premium Cakes',
  'Exotic Cakes',
] as const;

// ─── Product Catalog (32 cakes — 4 categories × 8 products) ──────────────────
export const products: Product[] = [

  // ── 1. Classic Premium Cakes ──────────────────────────────────────────────
  { id: 'plain_vanilla',      name: 'Plain Vanilla Cake',     category: 'Classic Premium Cakes', weights: [{ label: 'Half Kg', price: 380  }, { label: '1 Kg', price: 680  }] },
  { id: 'vanilla_cream',      name: 'Vanilla Cream Cake',     category: 'Classic Premium Cakes', weights: [{ label: 'Half Kg', price: 430  }, { label: '1 Kg', price: 830  }] },
  { id: 'vanilla_chocolate',  name: 'Vanilla Chocolate Cake', category: 'Classic Premium Cakes', weights: [{ label: 'Half Kg', price: 480  }, { label: '1 Kg', price: 960  }] },
  { id: 'vanilla_truffle',    name: 'Vanilla Truffle Cake',   category: 'Classic Premium Cakes', weights: [{ label: 'Half Kg', price: 500  }, { label: '1 Kg', price: 1000 }] },
  { id: 'vanilla_fudge',      name: 'Vanilla Fudge Cake',     category: 'Classic Premium Cakes', weights: [{ label: 'Half Kg', price: 580  }, { label: '1 Kg', price: 1160 }] },
  { id: 'white_forest',       name: 'White Forest Cake',      category: 'Classic Premium Cakes', weights: [{ label: 'Half Kg', price: 590  }, { label: '1 Kg', price: 1180 }] },
  { id: 'black_forest',       name: 'Black Forest Cake',      category: 'Classic Premium Cakes', bestseller: true, weights: [{ label: 'Half Kg', price: 580  }, { label: '1 Kg', price: 1160 }] },
  { id: 'red_velvet',         name: 'Red Velvet Cake',        category: 'Classic Premium Cakes', bestseller: true, weights: [{ label: 'Half Kg', price: 630  }, { label: '1 Kg', price: 1260 }] },

  // ── 2. Choco Premium Cakes ────────────────────────────────────────────────
  { id: 'chocolate_cake',         name: 'Chocolate Cake',         category: 'Choco Premium Cakes', weights: [{ label: 'Half Kg', price: 490  }, { label: '1 Kg', price: 980  }] },
  { id: 'mild_chocolate_truffle', name: 'Mild Chocolate Truffle', category: 'Choco Premium Cakes', weights: [{ label: 'Half Kg', price: 585  }, { label: '1 Kg', price: 1170 }] },
  { id: 'rich_chocolate_truffle', name: 'Rich Chocolate Truffle', category: 'Choco Premium Cakes', bestseller: true, weights: [{ label: 'Half Kg', price: 660  }, { label: '1 Kg', price: 1320 }] },
  { id: 'choco_almond_truffle',   name: 'Choco Almond Truffle',   category: 'Choco Premium Cakes', weights: [{ label: 'Half Kg', price: 615  }, { label: '1 Kg', price: 1230 }] },
  { id: 'dutch_truffle',          name: 'Dutch Truffle',          category: 'Choco Premium Cakes', weights: [{ label: 'Half Kg', price: 680  }, { label: '1 Kg', price: 1360 }] },
  { id: 'choco_fudge',            name: 'Choco Fudge',            category: 'Choco Premium Cakes', weights: [{ label: 'Half Kg', price: 690  }, { label: '1 Kg', price: 1380 }] },
  { id: 'coffee_mocha',           name: 'Coffee Mocha',           category: 'Choco Premium Cakes', weights: [{ label: 'Half Kg', price: 580  }, { label: '1 Kg', price: 1160 }] },
  { id: 'irish_coffee',           name: 'Irish Coffee',           category: 'Choco Premium Cakes', weights: [{ label: 'Half Kg', price: 595  }, { label: '1 Kg', price: 1190 }] },

  // ── 3. Fusion Premium Cakes ───────────────────────────────────────────────
  { id: 'rasmalai_cake',           name: 'Rasmalai Cake',           category: 'Fusion Premium Cakes', bestseller: true, weights: [{ label: 'Half Kg', price: 680  }, { label: '1 Kg', price: 1260 }] },
  { id: 'gulab_jamun_cake',        name: 'Gulab Jamun Cake',        category: 'Fusion Premium Cakes', weights: [{ label: 'Half Kg', price: 620  }, { label: '1 Kg', price: 1240 }] },
  { id: 'rose_milk_cake',          name: 'Rose Milk Cake',          category: 'Fusion Premium Cakes', weights: [{ label: 'Half Kg', price: 580  }, { label: '1 Kg', price: 1160 }] },
  { id: 'badam_milk_cake',         name: 'Badam Milk Cake',         category: 'Fusion Premium Cakes', weights: [{ label: 'Half Kg', price: 600  }, { label: '1 Kg', price: 1200 }] },
  { id: 'pistachio_cake',          name: 'Pistachio Cake',          category: 'Fusion Premium Cakes', weights: [{ label: 'Half Kg', price: 800  }, { label: '1 Kg', price: 1600 }] },
  { id: 'pistachio_white_truffle', name: 'Pistachio White Truffle', category: 'Fusion Premium Cakes', weights: [{ label: 'Half Kg', price: 940  }, { label: '1 Kg', price: 1880 }] },
  { id: 'nutty_butterscotch',      name: 'Nutty Butterscotch',      category: 'Fusion Premium Cakes', weights: [{ label: 'Half Kg', price: 600  }, { label: '1 Kg', price: 1200 }] },
  { id: 'elaneer_cake',            name: 'Elaneer Cake',            category: 'Fusion Premium Cakes', weights: [{ label: 'Half Kg', price: 620  }, { label: '1 Kg', price: 1240 }] },

  // ── 4. Exotic Cakes ───────────────────────────────────────────────────────
  { id: 'ferrero_rocher_cake',        name: 'Ferrero Rocher Cake',        category: 'Exotic Cakes', bestseller: true, weights: [{ label: 'Half Kg', price: 880  }, { label: '1 Kg', price: 1760 }] },
  { id: 'rich_hazelnut_truffle',      name: 'Rich Hazelnut Truffle',      category: 'Exotic Cakes', weights: [{ label: 'Half Kg', price: 890  }, { label: '1 Kg', price: 1780 }] },
  { id: 'kitkat_truffle',             name: 'KitKat Truffle',             category: 'Exotic Cakes', weights: [{ label: 'Half Kg', price: 750  }, { label: '1 Kg', price: 1500 }] },
  { id: 'nutella_cake',               name: 'Nutella Cake',               category: 'Exotic Cakes', bestseller: true, weights: [{ label: 'Half Kg', price: 895  }, { label: '1 Kg', price: 1790 }] },
  { id: 'pinata_cake',                name: 'Pinata Cake',                category: 'Exotic Cakes', weights: [{ label: 'Half Kg', price: 700  }, { label: '1 Kg', price: 1400 }] },
  { id: 'triple_rich_choco',          name: 'Triple Rich Choco',          category: 'Exotic Cakes', weights: [{ label: 'Half Kg', price: 900  }, { label: '1 Kg', price: 1800 }] },
  { id: 'rich_caramel_white_truffle', name: 'Rich Caramel White Truffle', category: 'Exotic Cakes', weights: [{ label: 'Half Kg', price: 990  }, { label: '1 Kg', price: 1980 }] },
  { id: 'brownie_slab',               name: 'Brownie Slab',               category: 'Exotic Cakes', weights: [{ label: 'Half Kg', price: 620  }, { label: '1 Kg', price: 1240 }] },
];

// ─── Derived Collections ──────────────────────────────────────────────────────
export const bestSellers = products.filter(p => p.bestseller);

export const featuredProducts = [
  products.find(p => p.id === 'ferrero_rocher_cake')!,
  products.find(p => p.id === 'red_velvet')!,
  products.find(p => p.id === 'rasmalai_cake')!,
  products.find(p => p.id === 'rich_chocolate_truffle')!,
  products.find(p => p.id === 'nutella_cake')!,
  products.find(p => p.id === 'black_forest')!,
];

// ─── Pickup Slots ─────────────────────────────────────────────────────────────
export const pickupSlots: PickupSlot[] = [
  { id: 'morning',   label: '10:00 AM – 1:00 PM' },
  { id: 'afternoon', label: '2:00 PM – 5:00 PM'  },
  { id: 'evening',   label: '6:00 PM – 9:00 PM'  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Anuja Gurusamy',
    text: 'Cake was super awesome. Gave a complex cake design for my daughters 1st birthday. Nailed to perfection. Eye catching and everyone asked me where I ordered. Loved the flavour and the freshness. Go to place for my cake needs.',
    rating: 5,
    occasion: 'Daughter\'s 1st Birthday',
  },
  {
    id: '2',
    name: 'Monikaviya Murugan',
    text: 'We had ordered 3kg Nutty butterscotch cake in the theme of kpop demon hunter for our daughter\'s birthday. Fazila did total justice to the flavour\'s name by adding loads of nuts! All of the guests enquired where we ordered the cake from!',
    rating: 5,
    occasion: 'Birthday Cake · ₹2,000+',
  },
  {
    id: '3',
    name: 'Venkat M',
    text: 'Absolutely amazing experience with Rauf Cake! The cake looked stunning and tasted even better. Perfect texture, balanced sweetness, and very fresh. You can truly see the dedication and passion in the work. Highly recommended for anyone!',
    rating: 5,
    occasion: 'Google Local Guide · 26 Reviews',
  },
  {
    id: '4',
    name: 'Sankari Padmaraj',
    text: 'We never met her. We never went to the shop. Just saw her on Instagram and ordered a sample small cake before the event and based on it ordered our baby\'s first birthday cake. It was nutty butterscotch in animal kingdom theme. Absolutely perfect!',
    rating: 5,
    occasion: 'Baby\'s First Birthday',
  },
  {
    id: '5',
    name: 'Gopika V',
    text: 'The cake was delivered on time and taste was so good! I personally liked their Genoise as well. The service they provided us was great. They also gave us some genuine suggestions, which added to the overall experience.',
    rating: 5,
    occasion: 'Custom Cake · Delivery',
  },
  {
    id: '6',
    name: 'Bhuvi Balakrishnan',
    text: 'Ordered a 3kg Almond Truffle cake for delivery and it was absolutely amazing! The flavour was rich, nutty and perfectly balanced. The texture was super soft and everyone loved it. Thank you for such a delicious and beautifully crafted cake!',
    rating: 5,
    occasion: 'Celebration Cake · ₹2,000+',
  },
  {
    id: '7',
    name: 'Hiba N J',
    text: 'I got an amazing experience with Rauf Home Cakes. I ordered a Ferrero Rocher cake and it exceeded my expectations. The cake was fresh, soft, and full of flavor — not overly sweet. The presentation was stunning. Will definitely order again!',
    rating: 5,
    occasion: 'Google Local Guide · Ferrero Rocher Cake',
  },
  {
    id: '8',
    name: 'Meena Bavya',
    text: 'Saw this page on Instagram and reached out. Ordered eggless 3kg cake and cupcakes for my baby\'s 2nd birthday and it was awesome in taste and look. The texture is also so soft. Highly recommended home baker in Chennai!',
    rating: 5,
    occasion: 'Baby\'s 2nd Birthday · Eggless',
  },
];
