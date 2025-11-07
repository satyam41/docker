'use client'

import * as React from 'react'
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'

import { cn } from '@/lib/utils'
import { toggleVariants } from '@/components/ui/toggle'

const ToggleGroupContext = React.createContext({
  size: 'default',
  variant: 'default',
})

function ToggleGroup({
  className,
  variant,
  size,
  children,
  ...props
}) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      className={cn(
        'toggle-group',
        className,
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  )
}

function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}) {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        'toggle-group-item',
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
}

export { ToggleGroup, ToggleGroupItem }

// Internal CSS
const styles = `
.toggle-group {
  display: flex;
  width: fit-content;
  align-items: center;
  border-radius: 0.375rem;
}

.toggle-group[data-variant="outline"] {
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}

.toggle-group-item {
  min-width: 0;
  flex: 1;
  flex-shrink: 0;
  border-radius: 0;
  box-shadow: none;
}

.toggle-group-item:first-child {
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
}

.toggle-group-item:last-child {
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
}

.toggle-group-item:focus {
  z-index: 10;
}

.toggle-group-item:focus-visible {
  z-index: 10;
}

.toggle-group-item[data-variant="outline"] {
  border-left-width: 0;
}

.toggle-group-item[data-variant="outline"]:first-child {
  border-left-width: 1px;
}
`

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}