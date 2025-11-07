'use client'

import * as React from 'react'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const toggleVariants = cva(
  "toggle-base",
  {
    variants: {
      variant: {
        default: 'toggle-default',
        outline: 'toggle-outline',
      },
      size: {
        default: 'toggle-default-size',
        sm: 'toggle-sm',
        lg: 'toggle-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Toggle({
  className,
  variant,
  size,
  ...props
}) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }

// Internal CSS
const styles = `
.toggle-base {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  white-space: nowrap;
  outline: none;
  transition: color, box-shadow;
}

.toggle-base:hover {
  background-color: hsl(var(--muted));
  color: hsl(var(--muted-foreground));
}

.toggle-base:disabled {
  pointer-events: none;
  opacity: 0.5;
}

.toggle-base[data-state="on"] {
  background-color: hsl(var(--accent));
  color: hsl(var(--accent-foreground));
}

.toggle-base svg {
  pointer-events: none;
  flex-shrink: 0;
}

.toggle-base svg:not([class*='size-']) {
  width: 1rem;
  height: 1rem;
}

.toggle-base:focus-visible {
  border-color: hsl(var(--ring));
  box-shadow: 0 0 0 3px hsl(var(--ring) / 0.5);
}

.toggle-base[aria-invalid="true"] {
  border-color: hsl(var(--destructive));
  box-shadow: 0 0 0 3px hsl(var(--destructive) / 0.2);
}

.toggle-default {
  background-color: transparent;
}

.toggle-outline {
  border: 1px solid hsl(var(--input));
  background-color: transparent;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}

.toggle-outline:hover {
  background-color: hsl(var(--accent));
  color: hsl(var(--accent-foreground));
}

.toggle-default-size {
  height: 2.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  min-width: 2.25rem;
}

.toggle-sm {
  height: 2rem;
  padding-left: 0.375rem;
  padding-right: 0.375rem;
  min-width: 2rem;
}

.toggle-lg {
  height: 2.5rem;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  min-width: 2.5rem;
}

@media (prefers-color-scheme: dark) {
  .toggle-base[aria-invalid="true"] {
    box-shadow: 0 0 0 3px hsl(var(--destructive) / 0.4);
  }
}
`

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}