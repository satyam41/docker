'use client'

import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Select({
  ...props
}) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
  ...props
}) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  size = 'default',
  children,
  ...props
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "select-trigger",
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = 'popper',
  ...props
}) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          'select-content',
          position === 'popper' && 'select-content-popper',
          className,
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            'select-viewport',
            position === 'popper' && 'select-viewport-popper',
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn('select-label', className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "select-item",
        className,
      )}
      {...props}
    >
      <span className="select-item-indicator">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn('select-separator', className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        'select-scroll-button',
        className,
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        'select-scroll-button',
        className,
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}

const styles = `
.select-trigger {
  border: 1px solid #d1d5db;
  background-color: transparent;
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  white-space: nowrap;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: color 0.2s, box-shadow 0.2s;
  outline: none;
}

.select-trigger[data-placeholder] {
  color: #6b7280;
}

.select-trigger:focus-visible {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
}

.select-trigger[aria-invalid="true"] {
  border-color: #dc2626;
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.2);
}

.select-trigger:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.select-trigger[data-size="default"] {
  height: 2.25rem;
}

.select-trigger[data-size="sm"] {
  height: 2rem;
}

.select-trigger [data-slot=select-value] {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.select-trigger svg:not([class*='text-']) {
  color: #6b7280;
}

.select-trigger svg {
  pointer-events: none;
  flex-shrink: 0;
  width: 1rem;
  height: 1rem;
}

.select-content {
  background-color: white;
  color: #111827;
  position: relative;
  z-index: 50;
  max-height: var(--radix-select-content-available-height);
  min-width: 8rem;
  transform-origin: var(--radix-select-content-transform-origin);
  overflow-x: hidden;
  overflow-y: auto;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.select-content[data-state="open"] {
  animation: fadeIn 0.2s ease-in-out, zoomIn 0.2s ease-in-out;
}

.select-content[data-state="closed"] {
  animation: fadeOut 0.2s ease-in-out, zoomOut 0.2s ease-in-out;
}

.select-content[data-side="bottom"] {
  animation: slideInFromTop 0.2s ease-in-out;
}

.select-content[data-side="left"] {
  animation: slideInFromRight 0.2s ease-in-out;
}

.select-content[data-side="right"] {
  animation: slideInFromLeft 0.2s ease-in-out;
}

.select-content[data-side="top"] {
  animation: slideInFromBottom 0.2s ease-in-out;
}

.select-content-popper[data-side="bottom"] {
  transform: translateY(0.25rem);
}

.select-content-popper[data-side="left"] {
  transform: translateX(-0.25rem);
}

.select-content-popper[data-side="right"] {
  transform: translateX(0.25rem);
}

.select-content-popper[data-side="top"] {
  transform: translateY(-0.25rem);
}

.select-viewport {
  padding: 0.25rem;
}

.select-viewport-popper {
  height: var(--radix-select-trigger-height);
  width: 100%;
  min-width: var(--radix-select-trigger-width);
  scroll-margin-top: 0.25rem;
  scroll-margin-bottom: 0.25rem;
}

.select-label {
  color: #6b7280;
  padding: 0.375rem 0.5rem;
  font-size: 0.75rem;
}

.select-item {
  position: relative;
  display: flex;
  width: 100%;
  cursor: default;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.125rem;
  padding: 0.375rem 2rem 0.375rem 0.5rem;
  font-size: 0.875rem;
  outline: none;
  user-select: none;
}

.select-item:focus {
  background-color: #f9fafb;
  color: #111827;
}

.select-item[data-disabled] {
  pointer-events: none;
  opacity: 0.5;
}

.select-item svg:not([class*='text-']) {
  color: #6b7280;
}

.select-item svg {
  pointer-events: none;
  flex-shrink: 0;
  width: 1rem;
  height: 1rem;
}

.select-item span:last-child {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.select-item-indicator {
  position: absolute;
  right: 0.5rem;
  display: flex;
  width: 0.875rem;
  height: 0.875rem;
  align-items: center;
  justify-content: center;
}

.select-separator {
  background-color: #e5e7eb;
  pointer-events: none;
  margin: 0.25rem -0.25rem;
  height: 1px;
}

.select-scroll-button {
  display: flex;
  cursor: default;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0;
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