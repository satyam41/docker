'use client'

import * as React from 'react'
import * as HoverCardPrimitive from '@radix-ui/react-hover-card'

import { cn } from '@/lib/utils'

function HoverCard({
  ...props
}) {
  return <HoverCardPrimitive.Root data-slot="hover-card" {...props} />
}

function HoverCardTrigger({
  ...props
}) {
  return (
    <HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
  )
}

function HoverCardContent({
  className,
  align = 'center',
  sideOffset = 4,
  ...props
}) {
  return (
    <HoverCardPrimitive.Portal data-slot="hover-card-portal">
      <HoverCardPrimitive.Content
        data-slot="hover-card-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'hover-card-content',
          className,
        )}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  )
}

export { HoverCard, HoverCardTrigger, HoverCardContent }

const styles = `
.hover-card-content {
  background-color: white;
  color: #111827;
  z-index: 50;
  width: 16rem;
  transform-origin: var(--radix-hover-card-content-transform-origin);
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  padding: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  outline: none;
}

.hover-card-content[data-state="open"] {
  animation: fadeIn 0.2s ease-in-out, zoomIn 0.2s ease-in-out;
}

.hover-card-content[data-state="closed"] {
  animation: fadeOut 0.2s ease-in-out, zoomOut 0.2s ease-in-out;
}

.hover-card-content[data-side="bottom"] {
  animation: slideInFromTop 0.2s ease-in-out;
}

.hover-card-content[data-side="left"] {
  animation: slideInFromRight 0.2s ease-in-out;
}

.hover-card-content[data-side="right"] {
  animation: slideInFromLeft 0.2s ease-in-out;
}

.hover-card-content[data-side="top"] {
  animation: slideInFromBottom 0.2s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes zoomOut {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.95);
  }
}

@keyframes slideInFromTop {
  from {
    transform: translateY(-2px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slideInFromRight {
  from {
    transform: translateX(2px);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideInFromLeft {
  from {
    transform: translateX(-2px);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideInFromBottom {
  from {
    transform: translateY(2px);
  }
  to {
    transform: translateY(0);
  }
}
`

// Inject styles into document head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}