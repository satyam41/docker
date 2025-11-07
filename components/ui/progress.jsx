'use client'

import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'

import { cn } from '@/lib/utils'

function Progress({
  className,
  value,
  ...props
}) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        'progress-root',
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="progress-indicator"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }

const styles = `
.progress-root {
  position: relative;
  background-color: rgba(59, 130, 246, 0.2);
  height: 0.5rem;
  width: 100%;
  overflow: hidden;
  border-radius: 9999px;
}

.progress-indicator {
  background-color: #3b82f6;
  height: 100%;
  width: 100%;
  flex: 1;
  transition: all 0.2s;
}
`

// Inject styles into document head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}