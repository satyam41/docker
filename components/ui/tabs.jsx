'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '@/lib/utils'

function Tabs({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn('tabs-root', className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn('tabs-list', className)}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn('tabs-trigger', className)}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn('tabs-content', className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }

// Internal CSS
const styles = `
.tabs-root {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.tabs-list {
  background-color: hsl(var(--muted));
  color: hsl(var(--muted-foreground));
  display: inline-flex;
  height: 2.25rem;
  width: fit-content;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  padding: 3px;
}

.tabs-trigger {
  display: inline-flex;
  height: calc(100% - 1px);
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  border-radius: 0.375rem;
  border: 1px solid transparent;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: hsl(var(--foreground));
  white-space: nowrap;
  transition: color, box-shadow;
}

.tabs-trigger[data-state="active"] {
  background-color: hsl(var(--background));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}

.tabs-trigger:focus-visible {
  border-color: hsl(var(--ring));
  box-shadow: 0 0 0 3px hsl(var(--ring) / 0.5);
  outline: 1px solid hsl(var(--ring));
}

.tabs-trigger:disabled {
  pointer-events: none;
  opacity: 0.5;
}

.tabs-trigger svg {
  pointer-events: none;
  flex-shrink: 0;
}

.tabs-trigger svg:not([class*='size-']) {
  width: 1rem;
  height: 1rem;
}

.tabs-content {
  flex: 1;
  outline: none;
}

@media (prefers-color-scheme: dark) {
  .tabs-trigger {
    color: hsl(var(--muted-foreground));
  }
  
  .tabs-trigger[data-state="active"] {
    color: hsl(var(--foreground));
    border-color: hsl(var(--input));
    background-color: hsl(var(--input) / 0.3);
  }
}
`

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}