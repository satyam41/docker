'use client'

import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'

import { cn } from '@/lib/utils'

function Label({
  className,
  ...props
}) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        'label-base',
        className,
      )}
      {...props}
    />
  )
}

export { Label }

const styles = `
.label-base {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  line-height: 1;
  font-weight: 500;
  user-select: none;
}

.label-base[data-disabled="true"] {
  pointer-events: none;
  opacity: 0.5;
}

.label-base:has(.peer:disabled) {
  cursor: not-allowed;
  opacity: 0.5;
}
`

// Inject styles into document head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}