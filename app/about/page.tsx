import type { Metadata } from 'next';
import Image from 'next/image';
import { Heart, PenTool, Palette, Award, Sparkles, MessageCircle } from 'lucide-react';
import { WhatsAppButton } from '@/components/site/whatsapp-button';
import { customDesignMessage } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn the story behind Faiz Studio — our passion for crafting premium Nikkah signing cards that honor the sacred moment of signing forever.',
};

const values = [
  { icon: Heart, title: 'Meaningful Details', desc: 'Every element of our cards is designed to honor the significance of your Nikkah — from the typography to the texture.' },
  { icon: Palette, title: 'Customization', desc: 'We believe your card should reflect your story. That is why every design can be personalized to your wishes.' },
  { icon: Award, title: 'Craftsmanship', desc: 'We carefully select our materials and finishes to ensure each card feels premium and lasts a lifetime.' },
  { icon: Sparkles, title: 'Elegant Design', desc: 'Our aesthetic is refined and timeless — never overly decorative, always sophisticated.' },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-secondary/30 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
            Our Story
          </span>
          <h1 className="mt-4 font-serif text-4xl font-semibold text-foreground sm:text-5xl text-balance">
            Crafting Cards for Sacred Beginnings
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Faiz Studio was born from a simple belief: the moment you sign your
            Nikkah deserves a card as meaningful as the commitment it represents.
            We design and craft premium Nikkah signing cards that couples
            cherish for a lifetime.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src="https://images.pexels.com/photos/17947165/pexels-photo-17947165.jpeg?auto=compress&cs=tinysrgb&h=900&w=700"
                alt="Elegant Nikkah card design"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-semibold text-foreground">
                Why Nikkah Stationery Matters
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  The Nikkah is one of the most significant moments in a
                  couple&apos;s life. It is the moment two people sign their
                  names beside each other and begin their journey together.
                </p>
                <p>
                  We believe the card that holds those signatures should be
                  more than just paper. It should be a keepsake — something
                  elegant, personal, and crafted with intention. Something you
                  will look at years later and feel the weight of that moment
                  again.
                </p>
                <p>
                  That is why we pour care into every design, every material
                  choice, and every customization. Your Nikkah card is not
                  just an accessory — it is part of your story.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              What We Stand For
            </span>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              Our Values
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="flex flex-col items-center text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/20 bg-accent/5">
                  <v.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-4 font-serif text-base font-semibold text-foreground">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <PenTool className="mx-auto h-8 w-8 text-accent" />
          <h2 className="mt-5 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Let&apos;s Create Something Meaningful
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Whether you have a clear vision or just a feeling, we would love to
            help you craft the perfect Nikkah card.
          </p>
          <div className="mt-8">
            <WhatsAppButton message={customDesignMessage()} size="lg">
              Reach Out on WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </div>
  );
}
