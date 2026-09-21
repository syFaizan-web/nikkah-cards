import type { Metadata } from 'next';
import { PolicyLayout, PolicySection } from '@/components/site/policy-layout';

export const metadata: Metadata = {
  title: 'Returns & Refunds',
  description:
    'Our returns and refunds policy for Nikkah signing cards, including customized product policies.',
};

export default function ReturnsPage() {
  return (
    <PolicyLayout
      title="Returns & Refunds"
      description="Our policy for returns, refunds, and order cancellations. Since many of our cards are personalized, please read carefully."
    >
      <PolicySection title="Order Cancellation">
        <p>
          You may cancel your order before production begins. Since customized
          and personalized cards are made specifically for you, cancellations
          after production has started may not be eligible for a full refund.
        </p>
        <p>
          Please contact us on WhatsApp as soon as possible if you need to
          cancel your order. We will do our best to accommodate your request
          based on the status of your order.
        </p>
      </PolicySection>

      <PolicySection title="Customized Product Policy">
        <p>
          Because personalized Nikkah cards are created specifically for your
          ceremony — with your names, dates, and chosen wording — they cannot
          be resold to another customer. For this reason, customized and
          personalized products are generally non-returnable unless there is a
          defect or error on our part.
        </p>
      </PolicySection>

      <PolicySection title="Damaged or Incorrect Items">
        <p>
          If your card arrives damaged or if we made an error in the
          customization (different from what was approved on your design proof),
          please contact us on WhatsApp within [X] days of receiving your
          order. We will arrange a replacement or refund at no cost to you.
        </p>
        <p>
          Please have your order details and a photo of the issue ready when
          you contact us.
        </p>
      </PolicySection>

      <PolicySection title="Customer-Provided Incorrect Information">
        <p>
          We are not responsible for errors in names, dates, spelling, or
          wording that were provided by you and approved on your design proof.
          Please review your proof carefully before giving approval for
          production.
        </p>
        <p>
          If you notice an error after approval but before production begins,
          contact us immediately and we will try to help. Once production has
          started, changes may not be possible.
        </p>
      </PolicySection>

      <PolicySection title="Refund Conditions">
        <p>
          Approved refunds will be issued to your original payment method.
          Refund processing time may vary depending on your bank or payment
          provider. Shipping costs are generally non-refundable unless the
          return is due to our error.
        </p>
      </PolicySection>

      <PolicySection title="Contact Process">
        <p>
          To request a cancellation, return, or refund, please message us on
          WhatsApp with your order details and the reason for your request. We
          will review and respond as soon as possible during business hours.
        </p>
      </PolicySection>
    </PolicyLayout>
  );
}
