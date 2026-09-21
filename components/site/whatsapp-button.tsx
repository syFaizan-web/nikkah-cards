import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import { buildWhatsAppUrl, generalOrderMessage } from '@/lib/whatsapp';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  message?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'accent';
  size?: 'default' | 'lg' | 'sm';
  className?: string;
}

const variantClasses: Record<string, string> = {
  primary: 'bg-[#25D366] text-white hover:bg-[#1eb558]',
  accent: 'bg-accent text-accent-foreground hover:bg-accent/90',
  outline:
    'border border-accent/40 text-accent hover:bg-accent/10',
};

const sizeClasses: Record<string, string> = {
  sm: 'px-4 py-2 text-xs',
  default: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export function WhatsAppButton({
  message,
  children,
  variant = 'primary',
  size = 'default',
  className = '',
}: WhatsAppButtonProps) {
  const href = buildWhatsAppUrl(message ?? generalOrderMessage());

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      <MessageCircle className="h-4 w-4" />
      {children}
    </a>
  );
}

export function WhatsAppLink({ message, children, className = '' }: { message?: string; children: React.ReactNode; className?: string }) {
  const href = buildWhatsAppUrl(message ?? generalOrderMessage());
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

export { siteConfig };
