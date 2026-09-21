'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import { buildWhatsAppUrl, generalOrderMessage } from '@/lib/whatsapp';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <div className="overflow-hidden bg-primary py-2 text-[11px] tracking-wide text-primary-foreground sm:text-xs">
        <div className="flex w-max animate-[topbar-scroll_22s_linear_infinite] items-center whitespace-nowrap">
          <div className="flex items-center px-4">
            <span>Premium Nikkah cards, made with love in Pakistan</span>
            <span className="mx-3 text-primary-foreground/50">•</span>
            <Link href="/shipping" className="underline underline-offset-2 hover:text-accent">
              Nationwide delivery available
            </Link>
          </div>
          <div className="flex items-center px-4" aria-hidden="true">
            <span>Fast & safe delivery across Pakistan</span>
            <span className="mx-3 text-primary-foreground/50">•</span>
            <span>Custom orders delivered with care</span>
          </div>
          <div className="flex items-center px-4" aria-hidden="true">
            <span>Premium Nikkah cards, made with love in Pakistan</span>
            <span className="mx-3 text-primary-foreground/50">•</span>
            <span>Nationwide delivery available</span>
          </div>
        </div>
      </div>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-md shadow-sm border-b border-border/50'
            : 'bg-background/40 backdrop-blur-sm'
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="group flex items-center gap-2">
            <span className="font-serif text-xl font-semibold tracking-wide text-foreground transition-colors group-hover:text-accent">
              Faiz Studio
            </span>
          </Link>

          <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 whitespace-nowrap font-serif text-xl font-semibold tracking-wide text-accent sm:text-2xl lg:hidden">
            قَبول ہے
          </span>

          <div className="hidden items-center gap-8 lg:flex">
            {siteConfig.nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm tracking-wide transition-colors hover:text-accent ${
                    active ? 'text-accent' : 'text-foreground/70'
                  }`}
                >
                  {item.title}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 h-px w-full bg-accent"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <a
              href={buildWhatsAppUrl(generalOrderMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1eb558]"
            >
              <MessageCircle className="h-4 w-4" />
              Order on WhatsApp
            </a>
          </div>

          <button
            className="flex items-center justify-center p-2 lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5 text-foreground" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 h-full w-[78%] max-w-sm bg-background shadow-xl"
            >
              <div className="flex items-center justify-between border-b border-border/50 px-6 py-4">
                <span className="font-serif text-lg font-semibold">Faiz Studio</span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="p-2"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-col gap-1 px-4 py-6">
                {siteConfig.nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`block rounded-lg px-4 py-3 text-base transition-colors ${
                        pathname === item.href
                          ? 'bg-accent/10 text-accent'
                          : 'text-foreground/80 hover:bg-muted'
                      }`}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
                <a
                  href={buildWhatsAppUrl(generalOrderMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  Order on WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
