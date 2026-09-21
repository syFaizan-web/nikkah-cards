import { siteConfig } from './site-config';

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

export function generalOrderMessage(): string {
  return `Assalamualaikum, I would like to know more about your Nikkah signing cards and discuss an order. Could you please share your available designs and pricing?`;
}

export function productOrderMessage(productName: string, quantity: number = 1): string {
  return `Assalamualaikum, I am interested in ordering the ${productName} Nikkah Card.

I would like to discuss customization details such as:
Names:
Nikkah Date:
Quantity: ${quantity}
Custom wording:
Other requirements:

Please share the available options and final price.`;
}

export function customDesignMessage(): string {
  return `Assalamualaikum, I have a custom design in mind for my Nikkah card. I would love to discuss my ideas and personalization requirements with you.`;
}
