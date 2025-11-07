'use client'

import * as React from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { cn } from '@/lib/utils'

function TooltipProvider({
  delayDuration = 0,
  ...props
}) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({
  ...props
}) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipPrimitive.Provider>
  )
}

function TooltipTrigger({
  ...props
}) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          'tooltip-content',
          className,
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="tooltip-arrow" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }

// Internal CSS
const styles = `
.tooltip-content {
  background-color: hsl(var(--foreground));
  color: hsl(var(--background));
  z-index: 50;
  width: fit-content;
  border-radius: 0.375rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  font-size: 0.75rem;
  text-wrap: balance;
  transform-origin: var(--radix-tooltip-content-transform-origin);
  animation: fadeIn 150ms ease-out, zoomIn 150ms ease-out;
}

.tooltip-content[data-state="closed"] {
  animation: fadeOut 100ms ease-in, zoomOut 100ms ease-in;
}

.tooltip-content[data-side="bottom"] {
  animation: slideInFromTop 150ms ease-out, fadeIn 150ms ease-out, zoomIn 150ms ease-out;
}

.tooltip-content[data-side="left"] {
  animation: slideInFromRight 150ms ease-out, fadeIn 150ms ease-out, zoomIn 150ms ease-out;
}

.tooltip-content[data-side="right"] {
  animation: slideInFromLeft 150ms ease-out, fadeIn 150ms ease-out, zoomIn 150ms ease-out;
}

.tooltip-content[data-side="top"] {
  animation: slideInFromBottom 150ms ease-out, fadeIn 150ms ease-out, zoomIn 150ms ease-out;
}

.tooltip-arrow {
  background-color: hsl(var(--foreground));
  fill: hsl(var(--foreground));
  z-index: 50;
  width: 0.625rem;
  height: 0.625rem;
  transform: translateY(calc(-50% - 2px)) rotate(45deg);
  border-radius: 2px;
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
    transform: scale(0.95);
  }
  to {
    transform: scale(1);
  }
}

@keyframes zoomOut {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.95);
  }
}

@keyframes slideInFromTop {
  from {
    transform: translateY(-0.5rem);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slideInFromRight {
  from {
    transform: translateX(0.5rem);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideInFromLeft {
  from {
    transform: translateX(-0.5rem);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideInFromBottom {
  from {
    transform: translateY(0.5rem);
  }
  to {
    transform: translateY(0);
  }
}
`

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}