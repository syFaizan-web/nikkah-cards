'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import { ProductGallery } from '@/components/site/product-gallery';
import { QuantitySelector } from '@/components/site/quantity-selector';
import { WhatsAppButton } from '@/components/site/whatsapp-button';
import type { Product } from '@/lib/products';
import { formatPrice } from '@/lib/products';
import { productOrderMessage } from '@/lib/whatsapp';
import { MessageCircle, Check, Clock, Ruler, Layers } from 'lucide-react';

export function ProductDetailClient({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const message = productOrderMessage(product.name, quantity);

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-10">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <ProductGallery images={product.images} alt={product.name} />
        </div>

        <div className="flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
            {product.category}
          </span>
          <h1 className="mt-2 font-serif text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
            {product.name}
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {product.shortDescription}
          </p>

          <div className="mt-5 flex items-baseline gap-2">
            <span className="text-sm text-muted-foreground">Starting from</span>
            <span className="font-serif text-2xl font-semibold text-foreground">
              {formatPrice(product.startingPrice, product.currency)}
            </span>
          </div>

          <div className="mt-4 border-t border-border/50 pt-4">
            <p className="text-sm leading-relaxed text-foreground/80">
              {product.description}
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2.5">
              <Ruler className="h-4 w-4 shrink-0 text-accent" />
              <span className="text-xs text-muted-foreground">{product.size}</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2.5">
              <Layers className="h-4 w-4 shrink-0 text-accent" />
              <span className="text-xs text-muted-foreground">{product.material}</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2.5">
              <Clock className="h-4 w-4 shrink-0 text-accent" />
              <span className="text-xs text-muted-foreground">{product.preparationTime}</span>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-sm font-semibold text-foreground">Features</h3>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 rounded-lg border border-accent/20 bg-accent/5 p-4">
            <h3 className="text-sm font-semibold text-foreground">
              Customization Available
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              You can customize names, dates, wording and other details through WhatsApp.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.customization.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-border bg-card px-3 py-1 text-xs text-foreground/70"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-foreground">Quantity</span>
              <QuantitySelector value={quantity} onChange={setQuantity} />
            </div>

            <WhatsAppButton message={message} size="lg" className="w-full sm:w-auto">
              Order / Customize on WhatsApp
            </WhatsAppButton>

            <p className="text-xs text-muted-foreground">
              Final pricing is confirmed on WhatsApp based on your customization and quantity.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between gap-3 border-t border-border/50 bg-background/95 px-4 py-3 backdrop-blur-md md:hidden">
        <div className="flex flex-col">
          <span className="text-xs text-muted-foreground">Starting from</span>
          <span className="font-serif text-base font-semibold text-foreground">
            {formatPrice(product.startingPrice, product.currency)}
          </span>
        </div>
        <a
          href={`https://wa.me/923001234567?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-medium text-white"
        >
          <MessageCircle className="h-4 w-4" />
          Order on WhatsApp
        </a>
      </div>
      <div className="h-20 md:hidden" />
    </div>
  );
}
