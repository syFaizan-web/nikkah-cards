import type { Metadata } from 'next';
import { PolicyLayout, PolicySection } from '@/components/site/policy-layout';

export const metadata: Metadata = {
  title: 'Shipping & Delivery',
  description:
    'Information about shipping, delivery timelines, and areas we serve for Nikkah signing card orders.',
};

export default function ShippingPage() {
  return (
    <PolicyLayout
      title="Shipping & Delivery"
      description="How we deliver your Nikkah cards to you. Timelines and costs are confirmed on WhatsApp when you place your order."
    >
      <PolicySection title="Delivery Areas">
        <p>
          We deliver across Pakistan and can arrange international shipping on
          request. Delivery costs and timelines depend on your location and
          the size of your order.
        </p>
      </PolicySection>

      <PolicySection title="Processing Time">
        <p>
          Each order is crafted after your design proof is approved. Most
          cards take 5–14 business days to prepare. Custom designs may take
          14–21 business days after design approval. We will share an estimated
          timeline when you place your order.
        </p>
      </PolicySection>

      <PolicySection title="Shipping Methods">
        <p>
          We use trusted courier services for delivery. Standard and express
          shipping options may be available depending on your location.
          Shipping costs are calculated based on destination and order weight.
        </p>
      </PolicySection>

      <PolicySection title="Delivery Timeline">
        <p>
          After your card is prepared, delivery within major cities typically
          takes [X–Y] business days. Delivery to other areas may take longer.
          International delivery timelines vary by destination.
        </p>
      </PolicySection>

      <PolicySection title="Tracking Your Order">
        <p>
          Once your order is shipped, we will share a tracking number with you
          on WhatsApp so you can follow your delivery.
        </p>
      </PolicySection>

      <PolicySection title="Delivery Issues">
        <p>
          If your order does not arrive within the expected timeline or arrives
          damaged, please contact us on WhatsApp and we will help resolve the
          issue.
        </p>
      </PolicySection>
    </PolicyLayout>
  );
}
