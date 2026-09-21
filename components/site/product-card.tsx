'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import type { Product } from '@/lib/products';
import { formatPrice } from '@/lib/products';
import { buildWhatsAppUrl, productOrderMessage } from '@/lib/whatsapp';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col overflow-hidden rounded-lg border border-border/60 bg-card shadow-sm transition-all duration-300 hover:shadow-md"
    >
      <Link href={`/products/${product.slug}`} className="relative block aspect-[3/4] overflow-hidden bg-muted">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-medium tracking-wide text-foreground backdrop-blur-sm">
          {product.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-serif text-lg font-semibold leading-snug text-foreground transition-colors hover:text-accent">
            {product.name}
          </h3>
        </Link>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {product.shortDescription}
        </p>
        <p className="mt-3 text-sm font-medium text-foreground">
          Starting from{' '}
          <span className="text-accent">
            {formatPrice(product.startingPrice, product.currency)}
          </span>
        </p>

        <div className="mt-5 flex items-center gap-2">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border px-4 py-2.5 text-xs font-medium tracking-wide text-foreground transition-all hover:border-accent hover:text-accent"
          >
            View Details
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <a
            href={buildWhatsAppUrl(productOrderMessage(product.name))}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Order ${product.name} on WhatsApp`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white transition-colors hover:bg-[#1eb558]"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
