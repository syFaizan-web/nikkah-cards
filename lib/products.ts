export type ProductCategory =
  | 'Minimal'
  | 'Floral'
  | 'Luxury'
  | 'Traditional'
  | 'Modern'
  | 'Custom';

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  startingPrice: number;
  currency: string;
  shortDescription: string;
  description: string;
  features: string[];
  customization: string[];
  size: string;
  material: string;
  preparationTime: string;
  images: string[];
  featured?: boolean;
}

export const categories: ProductCategory[] = [
  'Minimal',
  'Floral',
  'Luxury',
  'Traditional',
  'Modern',
  'Custom',
];

export const products: Product[] = [
  {
    id: 'p01',
    slug: 'noor-minimal-nikkah-card',
    name: 'Noor Minimal Nikkah Card',
    category: 'Minimal',
    startingPrice: 1800,
    currency: 'PKR',
    shortDescription: 'Clean lines and quiet elegance for a timeless signing moment.',
    description:
      'The Noor card is designed for couples who appreciate simplicity. Its uncluttered layout places the focus entirely on the names and the moment of signing. A subtle debossed border frames the card, while the interior offers generous space for signatures and the Nikkah date. Printed on premium ivory stock with a matte finish, Noor feels calm, refined, and effortlessly elegant.',
    features: [
      'Debossed border detail',
      'Premium 350gsm ivory stock',
      'Matte soft-touch finish',
      'Generous signing area',
      'Optional matching envelope',
    ],
    customization: [
      'Bride & groom names',
      'Nikkah date',
      'Custom wording',
      'Color accents',
      'Quantity',
    ],
    size: '5 × 7 inches (folded)',
    material: '350gsm premium ivory card stock',
    preparationTime: '5–7 business days after confirmation',
    images: [
      'https://images.pexels.com/photos/16655674/pexels-photo-16655674.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
      'https://images.pexels.com/photos/17207666/pexels-photo-17207666.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
      'https://images.pexels.com/photos/11159162/pexels-photo-11159162.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    ],
    featured: true,
  },
  {
    id: 'p02',
    slug: 'zoya-floral-nikkah-card',
    name: 'Zoya Floral Nikkah Card',
    category: 'Floral',
    startingPrice: 2400,
    currency: 'PKR',
    shortDescription: 'Delicate botanical illustrations framing your sacred moment.',
    description:
      'Zoya brings the gentle beauty of hand-painted florals to your Nikkah ceremony. Soft watercolor botanicals trail along the edges, framing the signing area without overwhelming it. The card opens to reveal a thoughtfully laid out interior with space for names, date, and signatures. Perfect for couples who want a romantic, garden-inspired feel.',
    features: [
      'Hand-painted watercolor florals',
      'Soft pastel palette options',
      '300gsm textured stock',
      'Matching floral envelope',
      'Optional gold foil accents',
    ],
    customization: [
      'Bride & groom names',
      'Nikkah date',
      'Floral color palette',
      'Custom wording',
      'Gold foil upgrade',
      'Quantity',
    ],
    size: '5 × 7 inches (folded)',
    material: '300gsm textured fine art stock',
    preparationTime: '7–10 business days after confirmation',
    images: [
      'https://images.pexels.com/photos/18805232/pexels-photo-18805232.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
      'https://images.pexels.com/photos/29821857/pexels-photo-29821857.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
      'https://images.pexels.com/photos/10070067/pexels-photo-10070067.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    ],
    featured: true,
  },
  {
    id: 'p03',
    slug: 'amal-luxury-gold-nikkah-card',
    name: 'Amal Luxury Gold Nikkah Card',
    category: 'Luxury',
    startingPrice: 4200,
    currency: 'PKR',
    shortDescription: 'Real gold foil calligraphy on heavyweight luxury stock.',
    description:
      'Amal is our most opulent design, featuring genuine gold foil calligraphy pressed onto heavyweight luxury stock. The deep charcoal card provides a striking contrast to the shimmering gold, creating a piece that feels both regal and deeply personal. Each card is individually foil-stamped and inspected by hand. The interior reveals a spacious signing area with delicate gold rulings.',
    features: [
      'Genuine gold foil stamping',
      'Heavyweight 400gsm charcoal stock',
      'Hand-applied wax seal option',
      'Luxury presentation box available',
      'Individual quality inspection',
    ],
    customization: [
      'Bride & groom names',
      'Nikkah date',
      'Gold or rose-gold foil',
      'Custom wording',
      'Wax seal color',
      'Presentation box',
      'Quantity',
    ],
    size: '5 × 7 inches (folded)',
    material: '400gsm luxury charcoal card stock with gold foil',
    preparationTime: '10–14 business days after confirmation',
    images: [
      'https://images.pexels.com/photos/4554072/pexels-photo-4554072.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
      'https://images.pexels.com/photos/4554087/pexels-photo-4554087.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
      'https://images.pexels.com/photos/4234530/pexels-photo-4234530.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    ],
    featured: true,
  },
  {
    id: 'p04',
    slug: 'aya-traditional-nikkah-card',
    name: 'Aya Traditional Nikkah Card',
    category: 'Traditional',
    startingPrice: 2200,
    currency: 'PKR',
    shortDescription: 'Classic Islamic geometric patterns with timeless warmth.',
    description:
      'Aya honors the rich heritage of Islamic art with its intricate geometric patterns framing the card. Warm earth tones and a classic layout make this design feel grounded and reverent. The interior features a traditional layout for the Nikkah details, with space for witnesses and signatures. Ideal for couples who want their card to reflect cultural roots.',
    features: [
      'Islamic geometric pattern border',
      'Warm earth-tone palette',
      '350gsm natural-tone stock',
      'Space for witness signatures',
      'Matching patterned envelope',
    ],
    customization: [
      'Bride & groom names',
      'Nikkah date',
      'Pattern color scheme',
      'Custom wording',
      'Witness lines',
      'Quantity',
    ],
    size: '5 × 7 inches (folded)',
    material: '350gsm natural-tone card stock',
    preparationTime: '7–10 business days after confirmation',
    images: [
      'https://images.pexels.com/photos/4544722/pexels-photo-4544722.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
      'https://images.pexels.com/photos/11503478/pexels-photo-11503478.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
      'https://images.pexels.com/photos/7784602/pexels-photo-7784602.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    ],
    featured: true,
  },
  {
    id: 'p05',
    slug: 'sana-modern-acrylic-nikkah-card',
    name: 'Sana Modern Acrylic Nikkah Card',
    category: 'Modern',
    startingPrice: 3800,
    currency: 'PKR',
    shortDescription: 'Sleek transparent acrylic with engraved gold lettering.',
    description:
      'Sana reimagines the Nikkah card with a contemporary transparent acrylic panel, engraved with precision gold lettering. This modern keepsake is designed to be displayed long after the ceremony. The acrylic panel sits in a elegant backing card, and the engraved details catch light beautifully. A bold choice for couples who want something truly distinctive.',
    features: [
      'Transparent acrylic panel',
      'Precision gold engraving',
      'Elegant backing card',
      'Display-ready keepsake',
      'Custom acrylic tint options',
    ],
    customization: [
      'Bride & groom names',
      'Nikkah date',
      'Acrylic tint (clear, rose, smoke)',
      'Custom wording',
      'Backing card color',
      'Quantity',
    ],
    size: '6 × 8 inches (acrylic panel)',
    material: '3mm transparent acrylic with engraved gold lettering',
    preparationTime: '10–14 business days after confirmation',
    images: [
      'https://images.pexels.com/photos/36028892/pexels-photo-36028892.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
      'https://images.pexels.com/photos/32527824/pexels-photo-32527824.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
      'https://images.pexels.com/photos/17947165/pexels-photo-17947165.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    ],
    featured: true,
  },
  {
    id: 'p06',
    slug: 'iman-soft-blush-nikkah-card',
    name: 'Iman Soft Blush Nikkah Card',
    category: 'Floral',
    startingPrice: 2600,
    currency: 'PKR',
    shortDescription: 'Soft blush tones with delicate pressed-flower detail.',
    description:
      'Iman is a tender, romantic design in soft blush tones. A single pressed-flower accent sits at the corner of the card, adding a natural, tactile element. The interior is warm and inviting, with a gentle layout that guides the signing. This design is perfect for couples planning a soft, intimate Nikkah ceremony.',
    features: [
      'Real pressed-flower accent',
      'Soft blush color palette',
      '300gsm warm-tone stock',
      'Delicate ribbon tie option',
      'Matching blush envelope',
    ],
    customization: [
      'Bride & groom names',
      'Nikkah date',
      'Blush shade options',
      'Custom wording',
      'Ribbon color',
      'Quantity',
    ],
    size: '5 × 7 inches (folded)',
    material: '300gsm warm-tone card stock with pressed-flower accent',
    preparationTime: '7–10 business days after confirmation',
    images: [
      'https://images.pexels.com/photos/16272551/pexels-photo-16272551.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
      'https://images.pexels.com/photos/29821868/pexels-photo-29821868.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
      'https://images.pexels.com/photos/28461106/pexels-photo-28461106.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    ],
    featured: true,
  },
  {
    id: 'p07',
    slug: 'rida-emerald-luxury-nikkah-card',
    name: 'Rida Emerald Luxury Nikkah Card',
    category: 'Luxury',
    startingPrice: 4800,
    currency: 'PKR',
    shortDescription: 'Deep emerald stock with gold foil arabesque detailing.',
    description:
      'Rida pairs deep emerald card stock with intricate gold foil arabesque patterns for a truly majestic feel. The rich green evokes a sense of heritage and depth, while the gold foil adds luminous warmth. The interior features gold-ruled signing lines and a refined layout. A statement piece for a grand Nikkah celebration.',
    features: [
      'Deep emerald card stock',
      'Gold foil arabesque pattern',
      '400gsm luxury stock',
      'Gold-ruled signing lines',
      'Velvet presentation pouch option',
    ],
    customization: [
      'Bride & groom names',
      'Nikkah date',
      'Foil tone (gold or copper)',
      'Custom wording',
      'Presentation pouch',
      'Quantity',
    ],
    size: '5 × 7 inches (folded)',
    material: '400gsm emerald luxury stock with gold foil',
    preparationTime: '10–14 business days after confirmation',
    images: [
      'https://images.pexels.com/photos/37460539/pexels-photo-37460539.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
      'https://images.pexels.com/photos/37524690/pexels-photo-37524690.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
      'https://images.pexels.com/photos/37058530/pexels-photo-37058530.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    ],
    featured: true,
  },
  {
    id: 'p08',
    slug: 'hira-ivory-classic-nikkah-card',
    name: 'Hira Ivory Classic Nikkah Card',
    category: 'Traditional',
    startingPrice: 2000,
    currency: 'PKR',
    shortDescription: 'Timeless ivory card with elegant calligraphy header.',
    description:
      'Hira is a classic ivory card with a beautifully hand-lettered calligraphy header. Its restrained design lets the significance of the moment speak for itself. The interior offers a clean, traditional layout with space for all Nikkah details and witness signatures. A versatile choice that suits any ceremony style.',
    features: [
      'Hand-lettered calligraphy header',
      'Classic ivory palette',
      '350gsm premium stock',
      'Traditional layout with witness lines',
      'Matching ivory envelope',
    ],
    customization: [
      'Bride & groom names',
      'Nikkah date',
      'Calligraphy style',
      'Custom wording',
      'Witness lines',
      'Quantity',
    ],
    size: '5 × 7 inches (folded)',
    material: '350gsm premium ivory card stock',
    preparationTime: '5–7 business days after confirmation',
    images: [
      'https://images.pexels.com/photos/17286636/pexels-photo-17286636.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
      'https://images.pexels.com/photos/14784846/pexels-photo-14784846.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
      'https://images.pexels.com/photos/16975992/pexels-photo-16975992.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    ],
    featured: true,
  },
  {
    id: 'p09',
    slug: 'leila-modern-slate-nikkah-card',
    name: 'Leila Modern Slate Nikkah Card',
    category: 'Modern',
    startingPrice: 2800,
    currency: 'PKR',
    shortDescription: 'Bold slate card with minimalist white ink typography.',
    description:
      'Leila makes a modern statement with its deep slate card and crisp white ink typography. The design is bold yet refined, with a clean asymmetric layout that feels fresh and contemporary. The interior continues the minimalist aesthetic with subtle white-ink guidelines for signing. For couples who want their Nikkah card to feel like a piece of modern design.',
    features: [
      'Deep slate card stock',
      'White ink typography',
      'Asymmetric modern layout',
      '350gsm premium stock',
      'Slate envelope with white ink',
    ],
    customization: [
      'Bride & groom names',
      'Nikkah date',
      'Ink color options',
      'Custom wording',
      'Quantity',
    ],
    size: '5 × 7 inches (folded)',
    material: '350gsm premium slate card stock with white ink',
    preparationTime: '7–10 business days after confirmation',
    images: [
      'https://images.pexels.com/photos/15548880/pexels-photo-15548880.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
      'https://images.pexels.com/photos/15548881/pexels-photo-15548881.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
      'https://images.pexels.com/photos/11385661/pexels-photo-11385661.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    ],
    featured: true,
  },
  {
    id: 'p10',
    slug: 'custom-design-nikkah-card',
    name: 'Custom Design Nikkah Card',
    category: 'Custom',
    startingPrice: 3500,
    currency: 'PKR',
    shortDescription: 'A one-of-a-kind card designed entirely around your story.',
    description:
      'Have something specific in mind? Our Custom Design service lets you create a Nikkah card that is entirely your own. From the color palette and layout to the wording and decorative elements, every detail is crafted in collaboration with you. Share your inspiration, and our designers will bring it to life. Pricing varies based on complexity and quantity.',
    features: [
      'Fully bespoke design process',
      'Personalized color palette',
      'Custom layout and wording',
      'Choice of materials and finishes',
      'Design proofs before production',
      'Flexible quantity options',
    ],
    customization: [
      'Bride & groom names',
      'Nikkah date',
      'Complete custom design',
      'Custom wording',
      'Color palette',
      'Material and finish',
      'Quantity',
    ],
    size: 'Customizable',
    material: 'Based on design requirements',
    preparationTime: '14–21 business days after design approval',
    images: [
      'https://images.pexels.com/photos/11650187/pexels-photo-11650187.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
      'https://images.pexels.com/photos/11650473/pexels-photo-11650473.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
      'https://images.pexels.com/photos/11650091/pexels-photo-11650091.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    ],
    featured: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function formatPrice(price: number, currency: string): string {
  return `${currency} ${price.toLocaleString('en-US')}`;
}
