'use client';

import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 999,
}: QuantitySelectorProps) {
  const [local, setLocal] = useState(value);

  const update = (val: number) => {
    const clamped = Math.max(min, Math.min(max, val));
    setLocal(clamped);
    onChange(clamped);
  };

  return (
    <div className="inline-flex items-center rounded-full border border-border">
      <button
        onClick={() => update(local - 1)}
        disabled={local <= min}
        className="flex h-10 w-10 items-center justify-center rounded-l-full text-muted-foreground transition-colors hover:text-accent disabled:opacity-40"
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="w-12 text-center text-sm font-medium tabular-nums">
        {local}
      </span>
      <button
        onClick={() => update(local + 1)}
        disabled={local >= max}
        className="flex h-10 w-10 items-center justify-center rounded-r-full text-muted-foreground transition-colors hover:text-accent disabled:opacity-40"
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}
