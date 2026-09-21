'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { WhatsAppButton } from '@/components/site/whatsapp-button';
import { ProductCard } from '@/components/site/product-card';
import { TestimonialsSection } from '@/components/site/testimonials-section';
import { FaqPreview } from '@/components/site/faq-preview';
import { PaymentOptions } from '@/components/site/payment-options';
import { getFeaturedProducts } from '@/lib/products';
import { buildWhatsAppUrl, generalOrderMessage, customDesignMessage } from '@/lib/whatsapp';
import {
  Sparkles,
  Palette,
  Heart,
  MessageCircle as WhatsAppIcon,
  Award,
  PenTool,
  CheckCircle2,
  ShoppingBag,
  MessagesSquare,
  ClipboardCheck,
  Package,
  PartyPopper,
  Instagram,
} from 'lucide-react';

const collections = [
  { name: 'Signature Nikkah Cards', desc: 'Our most loved designs', href: '/shop', image: 'https://images.pexels.com/photos/4554072/pexels-photo-4554072.jpeg?auto=compress&cs=tinysrgb&h=600&w=450' },
  { name: 'Minimal Designs', desc: 'Clean and timeless', href: '/shop', image: 'https://images.pexels.com/photos/16655674/pexels-photo-16655674.jpeg?auto=compress&cs=tinysrgb&h=600&w=450' },
  { name: 'Floral Designs', desc: 'Romantic botanicals', href: '/shop', image: 'https://images.pexels.com/photos/18805232/pexels-photo-18805232.jpeg?auto=compress&cs=tinysrgb&h=600&w=450' },
  { name: 'Luxury Designs', desc: 'Gold foil & premium', href: '/shop', image: 'https://images.pexels.com/photos/37460539/pexels-photo-37460539.jpeg?auto=compress&cs=tinysrgb&h=600&w=450' },
  { name: 'Custom Designs', desc: 'Made for your story', href: '/shop', image: 'https://images.pexels.com/photos/11650187/pexels-photo-11650187.jpeg?auto=compress&cs=tinysrgb&h=600&w=450' },
];

const whyChooseUs = [
  { icon: Sparkles, title: 'Elegant Designs', desc: 'Every card is thoughtfully designed to feel premium and timeless.' },
  { icon: Palette, title: 'Customizable Details', desc: 'Names, dates, wording, colors — tailored to your Nikkah.' },
  { icon: Heart, title: 'Made for Your Nikkah', desc: 'Each card is crafted specifically for your sacred moment.' },
  { icon: WhatsAppIcon, title: 'Easy WhatsApp Ordering', desc: 'No complicated checkout. Just message us and we handle the rest.' },
  { icon: Award, title: 'Premium Quality', desc: 'Carefully selected materials and finishes for a luxurious feel.' },
];

const howItWorks = [
  { icon: ShoppingBag, title: 'Choose your design', desc: 'Browse our collection and pick a card you love.' },
  { icon: MessagesSquare, title: 'Discuss on WhatsApp', desc: 'Share your customization details and preferences.' },
  { icon: ClipboardCheck, title: 'Confirm your details', desc: 'Review and approve your personalized design proof.' },
  { icon: Package, title: 'We prepare your order', desc: 'Your card is crafted with care and attention.' },
  { icon: PartyPopper, title: 'Your card is ready', desc: 'Delivered to you, ready for your Nikkah day.' },
];

const customizationOptions = [
  'Bride & groom names',
  'Nikkah date',
  'Custom wording',
  'Colors',
  'Names / signatures',
  'Quantity',
  'Other personalization',
];

const instagramImages = [
  'https://images.pexels.com/photos/26797124/pexels-photo-26797124.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'https://images.pexels.com/photos/11650086/pexels-photo-11650086.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'https://images.pexels.com/photos/4554072/pexels-photo-4554072.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'https://images.pexels.com/photos/29040917/pexels-photo-29040917.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'https://images.pexels.com/photos/18805232/pexels-photo-18805232.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'https://images.pexels.com/photos/17023148/pexels-photo-17023148.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
];

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-secondary/30">
        <div className="mx-auto grid min-h-[520px] max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:min-h-[620px] lg:grid-cols-[0.9fr_0.75fr] lg:gap-16 lg:px-8 lg:py-20">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 max-w-xl lg:order-1"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Faiz Studio
            </span>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.12] text-foreground sm:text-5xl">
              Where your forever begins
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Elegant Nikkah signing cards, thoughtfully crafted for the
              beautiful moment you sign your name beside the one you love.
            </p>
            <div className="mt-7 flex items-center gap-3 text-sm text-foreground/70">
              <span className="h-px w-10 bg-accent" />
              Designed with meaning
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-1 mx-auto w-full max-w-[360px] lg:order-2"
          >
            <div className="absolute -inset-3 rounded-[2rem] border border-accent/20" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-primary shadow-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="h-full w-full object-cover object-center"
                aria-label="Faiz Studio Nikkah cards"
              >
                <source src="/hero/card-hero.mp4" type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-border/60" />
      </section>

      {/* FEATURED COLLECTIONS */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Curated for You
            </span>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              Featured Collections
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {collections.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link href={c.href} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted">
                    <Image
                      src={c.image}
                      alt={c.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 20vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-serif text-sm font-semibold text-white sm:text-base">
                        {c.name}
                      </h3>
                      <p className="mt-0.5 text-xs text-white/80">{c.desc}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-secondary/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                Our Cards
              </span>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                Featured Nikkah Cards
              </h2>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent/80"
            >
              View all cards
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featured.slice(0, 8).map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* PAYMENT OPTIONS */}
      <PaymentOptions />

      {/* WHY CHOOSE US */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Why Faiz Studio
            </span>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              Why Choose Us
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/20 bg-accent/5">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 font-serif text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-secondary/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Simple Process
            </span>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              How It Works
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {howItWorks.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <step.icon className="h-7 w-7" />
                </div>
                <span className="mt-3 text-xs font-semibold uppercase tracking-wider text-accent">
                  Step {i + 1}
                </span>
                <h3 className="mt-1.5 font-serif text-base font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMIZATION */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/5] overflow-hidden rounded-lg"
            >
              <Image
                src="https://images.pexels.com/photos/4234530/pexels-photo-4234530.jpeg?auto=compress&cs=tinysrgb&h=900&w=700"
                alt="Custom Nikkah card details"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                Personalization
              </span>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                Make It Yours
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Every Nikkah card can be personalized to reflect your story.
                Discuss your customization details with us on WhatsApp and we
                will bring your vision to life.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {customizationOptions.map((opt) => (
                  <div
                    key={opt}
                    className="flex items-center gap-2 text-sm text-foreground/80"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                    {opt}
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <WhatsAppButton message={customDesignMessage()} size="lg">
                  Discuss Customization on WhatsApp
                </WhatsAppButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* FAQ PREVIEW */}
      <FaqPreview />

      {/* INSTAGRAM */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Follow Along
            </span>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              From Our Instagram
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
              See our latest designs and behind-the-scenes moments.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-2 sm:gap-3 md:grid-cols-6">
            {instagramImages.map((img, i) => (
              <motion.a
                key={i}
                href="https://instagram.com/faizstudio"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative aspect-square overflow-hidden rounded-md bg-muted"
              >
                <Image
                  src={img}
                  alt="Instagram post"
                  fill
                  sizes="(max-width: 768px) 33vw, 16vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-100 transition-all duration-300 sm:bg-black/0 sm:opacity-0 sm:group-hover:bg-black/30 sm:group-hover:opacity-100">
                  <Instagram className="h-6 w-6 text-white drop-shadow-md" aria-label="Open Instagram" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-primary py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <PenTool className="mx-auto h-8 w-8 text-accent" />
            <h2 className="mt-5 font-serif text-3xl font-semibold text-primary-foreground sm:text-4xl">
              Have a design in mind?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/70">
              Let&apos;s create something meaningful for your Nikkah. Share your
              ideas with us on WhatsApp and we will craft a card as unique as
              your story.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <WhatsAppButton message={customDesignMessage()} size="lg">
                Start Your Custom Design
              </WhatsAppButton>
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition-all hover:bg-primary-foreground/10"
              >
                Browse Collection
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
