'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, LayoutGrid, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl, generalOrderMessage } from '@/lib/whatsapp';

const items = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: LayoutGrid, label: 'Cards', href: '/shop' },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-border/50 bg-background/90 backdrop-blur-md md:hidden">
      <div className="flex items-center justify-around px-2 py-2">
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-1 flex-col items-center gap-1 py-1.5 text-xs transition-colors ${
                active ? 'text-accent' : 'text-muted-foreground'
              }`}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
        <a
          href={buildWhatsAppUrl(generalOrderMessage())}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center gap-1 py-1.5 text-xs text-[#25D366]"
        >
          <MessageCircle className="h-5 w-5" />
          Order
        </a>
      </div>
    </nav>
  );
}
