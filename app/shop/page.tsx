import type { Metadata } from 'next';
import { ShopClient } from '@/components/site/shop-client';

export const metadata: Metadata = {
  title: 'Nikkah Cards Collection',
  description:
    'Browse our full collection of premium Nikkah signing cards. Minimal, floral, luxury, traditional, modern and custom designs — all personalizable through WhatsApp.',
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-accent">
          Collection
        </span>
        <h1 className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
          Nikkah Cards
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Explore our full range of elegantly crafted Nikkah signing cards.
          Each design can be personalized to make your moment truly yours.
        </p>
      </div>

      <div className="mt-10">
        <ShopClient />
      </div>
    </div>
  );
}
