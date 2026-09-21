export const siteConfig = {
  name: 'Faiz Studio',
  tagline: 'Nikkah Signing Cards',
  description:
    'Faiz Studio crafts elegant, premium Nikkah signing cards for Muslim couples — designed to make the moment you sign forever feel truly meaningful.',
  url: 'https://faizstudio.example.com',
  whatsappNumber: '923001234567',
  email: 'hello@faizstudio.example.com',
  instagram: 'https://instagram.com/faizstudio',
  instagramHandle: '@faizstudio',
  businessHours: 'Monday – Saturday · 10am – 7pm (PKT)',
  ogImage: '/og-image.jpg',
  nav: [
    { title: 'Home', href: '/' },
    { title: 'Nikkah Cards', href: '/shop' },
    { title: 'Shipping', href: '/shipping' },
    { title: 'About', href: '/about' },
    { title: 'FAQs', href: '/faq' },
    { title: 'Contact', href: '/contact' },
  ],
  footer: [
    { title: 'Explore', links: [
      { title: 'Home', href: '/' },
      { title: 'Nikkah Cards', href: '/shop' },
      { title: 'Shipping', href: '/shipping' },
      { title: 'About', href: '/about' },
      { title: 'FAQs', href: '/faq' },
      { title: 'Contact', href: '/contact' },
    ]},
    { title: 'Customer Support', links: [
      { title: 'Shipping & Delivery', href: '/shipping' },
      { title: 'Returns & Refunds', href: '/returns' },
      { title: 'Privacy Policy', href: '/privacy' },
      { title: 'Terms & Conditions', href: '/terms' },
    ]},
  ],
};

export type SiteConfig = typeof siteConfig;
