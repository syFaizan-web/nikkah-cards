import type { Metadata } from 'next';
import { MessageCircle, Mail, Instagram, Clock, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import { WhatsAppButton } from '@/components/site/whatsapp-button';
import { buildWhatsAppUrl, generalOrderMessage } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Faiz Studio. Reach us on WhatsApp, Instagram, or email to discuss your Nikkah card order.',
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-accent">
          Get in Touch
        </span>
        <h1 className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
          Contact Us
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
          Have a question or ready to order? We would love to hear from you.
          The quickest way to reach us is WhatsApp.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        <a
          href={buildWhatsAppUrl(generalOrderMessage())}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-start rounded-lg border border-border/60 bg-card p-6 shadow-sm transition-all hover:border-accent/40 hover:shadow-md"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/10">
            <MessageCircle className="h-6 w-6 text-[#25D366]" />
          </div>
          <h2 className="mt-4 font-serif text-lg font-semibold text-foreground">
            WhatsApp
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            The fastest way to reach us. Message us to discuss your order or
            customization.
          </p>
          <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
            Chat now
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </a>

        <a
          href={siteConfig.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-start rounded-lg border border-border/60 bg-card p-6 shadow-sm transition-all hover:border-accent/40 hover:shadow-md"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
            <Instagram className="h-6 w-6 text-accent" />
          </div>
          <h2 className="mt-4 font-serif text-lg font-semibold text-foreground">
            Instagram
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Follow us for our latest designs and inspiration.
          </p>
          <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
            {siteConfig.instagramHandle}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </a>

        <a
          href={`mailto:${siteConfig.email}`}
          className="group flex flex-col items-start rounded-lg border border-border/60 bg-card p-6 shadow-sm transition-all hover:border-accent/40 hover:shadow-md"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
            <Mail className="h-6 w-6 text-accent" />
          </div>
          <h2 className="mt-4 font-serif text-lg font-semibold text-foreground">
            Email
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            For detailed inquiries or custom design requests.
          </p>
          <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
            {siteConfig.email}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </a>

        <div className="flex flex-col items-start rounded-lg border border-border/60 bg-card p-6 shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
            <Clock className="h-6 w-6 text-accent" />
          </div>
          <h2 className="mt-4 font-serif text-lg font-semibold text-foreground">
            Business Hours
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {siteConfig.businessHours}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            We respond to WhatsApp messages during business hours.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-lg bg-primary p-8 text-center">
        <h2 className="font-serif text-2xl font-semibold text-primary-foreground">
          Ready to order your Nikkah card?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-primary-foreground/70">
          Message us on WhatsApp and we will guide you through every step.
        </p>
        <div className="mt-6">
          <WhatsAppButton message={generalOrderMessage()} size="lg">
            Order on WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
