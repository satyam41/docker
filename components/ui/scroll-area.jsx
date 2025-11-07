'use client'

import * as React from 'react'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'

import { cn } from '@/lib/utils'

function ScrollArea({
  className,
  children,
  ...props
}) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn('scroll-area-root', className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="scroll-area-viewport"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}

function ScrollBar({
  className,
  orientation = 'vertical',
  ...props
}) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        'scroll-area-scrollbar',
        orientation === 'vertical' && 'scroll-area-scrollbar-vertical',
        orientation === 'horizontal' && 'scroll-area-scrollbar-horizontal',
        className,
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="scroll-area-thumb"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
}

export { ScrollArea, ScrollBar }

const styles = `
.scroll-area-root {
  position: relative;
}

.scroll-area-viewport {
  width: 100%;
  height: 100%;
  border-radius: inherit;
  transition: color 0.2s, box-shadow 0.2s;
  outline: none;
}

.scroll-area-viewport:focus-visible {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
}

.scroll-area-scrollbar {
  display: flex;
  touch-action: none;
  padding: 1px;
  transition: background-color 0.2s;
  user-select: none;
}

.scroll-area-scrollbar-vertical {
  height: 100%;
  width: 0.625rem;
  border-left: 1px solid transparent;
}

.scroll-area-scrollbar-horizontal {
  height: 0.625rem;
  flex-direction: column;
  border-top: 1px solid transparent;
}

.scroll-area-thumb {
  position: relative;
  background-color: #e5e7eb;
  flex: 1;
  border-radius: 9999px;
}
`

// Inject styles into document head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}