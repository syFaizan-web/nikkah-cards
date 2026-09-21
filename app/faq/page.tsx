import type { Metadata } from 'next';
import { faqItems } from '@/lib/content';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { WhatsAppButton } from '@/components/site/whatsapp-button';
import { generalOrderMessage } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'FAQs',
  description:
    'Answers to common questions about our Nikkah signing cards, customization, ordering process, delivery, and more.',
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-accent">
          Help Center
        </span>
        <h1 className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">
          Frequently Asked Questions
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
          Everything you need to know about ordering and customizing your
          Nikkah card. Can&apos;t find your answer? Message us on WhatsApp.
        </p>
      </div>

      <div className="mt-12">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-border/60"
            >
              <AccordionTrigger className="text-left font-serif text-base font-medium text-foreground hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-12 rounded-lg border border-accent/20 bg-accent/5 p-6 text-center">
        <h2 className="font-serif text-lg font-semibold text-foreground">
          Still have questions?
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          We are happy to help on WhatsApp.
        </p>
        <div className="mt-4">
          <WhatsAppButton message={generalOrderMessage()}>Message Us</WhatsAppButton>
        </div>
      </div>
    </div>
  );
}
