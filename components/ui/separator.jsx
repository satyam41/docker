'use client'

import * as React from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

import { cn } from '@/lib/utils'

function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'separator',
        className,
      )}
      {...props}
    />
  )
}

export { Separator }

const styles = `
.separator {
  background-color: #e5e7eb;
  flex-shrink: 0;
}

.separator[data-orientation="horizontal"] {
  height: 1px;
  width: 100%;
}

.separator[data-orientation="vertical"] {
  height: 100%;
  width: 1px;
}
`

// Inject styles into document head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}