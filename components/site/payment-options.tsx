import Image from 'next/image';

const paymentOptions = [
  {
    name: 'easypaisa',
    description: 'Quick mobile wallet payments',
    logo: '/payment-logos/easypaisa.png',
  },
  {
    name: 'JazzCash',
    description: 'Pay securely from your wallet',
    logo: '/payment-logos/jazzcash.png',
  },
  {
    name: 'Meezan Bank',
    description: 'Direct bank transfer',
    logo: '/payment-logos/meezanbank.png',
  },
];

export function PaymentOptions() {
  return (
    <section className="border-y border-border/50 bg-background py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
            Easy & secure
          </span>
          <h2 className="mt-2 font-serif text-2xl font-semibold text-foreground sm:text-3xl">
            Payment Options
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
            Choose the payment method that works best for you. Details are confirmed
            securely on WhatsApp after your order.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
          {paymentOptions.map((option) => (
            <div
              key={option.name}
              className="flex min-h-28 flex-col items-center justify-center rounded-lg border border-border/60 bg-card px-3 py-4 text-center"
            >
              <Image
                src={option.logo}
                alt={`${option.name} logo`}
                width={112}
                height={32}
                className="h-8 w-auto max-w-[112px] object-contain"
              />
              <p className="mt-2 text-xs text-muted-foreground">{option.description}</p>
            </div>
          ))}
          <div className="flex min-h-28 flex-col items-center justify-center rounded-lg border border-dashed border-border/70 bg-muted/30 px-3 py-4 text-center">
            <span className="text-sm font-semibold text-foreground">Other Banks</span>
            <p className="mt-2 text-xs text-muted-foreground">Bank transfer available</p>
          </div>
        </div>
      </div>
    </section>
  );
}
