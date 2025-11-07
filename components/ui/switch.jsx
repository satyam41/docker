'use client'

import * as React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'

import { cn } from '@/lib/utils'

function Switch({
  className,
  ...props
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        'switch-root',
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="switch-thumb"
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }

// Internal CSS
const styles = `
.switch-root {
  display: inline-flex;
  height: 1.15rem;
  width: 2rem;
  flex-shrink: 0;
  align-items: center;
  border-radius: 9999px;
  border: 1px solid transparent;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  transition: all;
  outline: none;
}

.switch-root[data-state="checked"] {
  background-color: hsl(var(--primary));
}

.switch-root[data-state="unchecked"] {
  background-color: hsl(var(--input));
}

.switch-root:focus-visible {
  border-color: hsl(var(--ring));
  box-shadow: 0 0 0 3px hsl(var(--ring) / 0.5);
}

.switch-root:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

@media (prefers-color-scheme: dark) {
  .switch-root[data-state="unchecked"] {
    background-color: hsl(var(--input) / 0.8);
  }
}

.switch-thumb {
  display: block;
  width: 1rem;
  height: 1rem;
  border-radius: 9999px;
  background-color: hsl(var(--background));
  box-shadow: 0 0 0 0;
  transition: transform;
  pointer-events: none;
}

.switch-thumb[data-state="checked"] {
  transform: translateX(calc(100% - 2px));
}

.switch-thumb[data-state="unchecked"] {
  transform: translateX(0);
}

@media (prefers-color-scheme: dark) {
  .switch-thumb[data-state="unchecked"] {
    background-color: hsl(var(--foreground));
  }
  
  .switch-thumb[data-state="checked"] {
    background-color: hsl(var(--primary-foreground));
  }
}
`

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}