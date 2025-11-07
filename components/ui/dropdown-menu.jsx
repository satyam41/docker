'use client'

import * as React from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function DropdownMenu({
  ...props
}) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />
}

function DropdownMenuPortal({
  ...props
}) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  )
}

function DropdownMenuTrigger({
  ...props
}) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  )
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          'dropdown-menu-content',
          className,
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
}

function DropdownMenuGroup({
  ...props
}) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  )
}

function DropdownMenuItem({
  className,
  inset,
  variant = 'default',
  ...props
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "dropdown-menu-item",
        className,
      )}
      {...props}
    />
  )
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "dropdown-menu-checkbox-item",
        className,
      )}
      checked={checked}
      {...props}
    >
      <span className="dropdown-menu-checkbox-indicator">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
}

function DropdownMenuRadioGroup({
  ...props
}) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  )
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "dropdown-menu-radio-item",
        className,
      )}
      {...props}
    >
      <span className="dropdown-menu-radio-indicator">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        'dropdown-menu-label',
        className,
      )}
      {...props}
    />
  )
}

function DropdownMenuSeparator({
  className,
  ...props
}) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn('dropdown-menu-separator', className)}
      {...props}
    />
  )
}

function DropdownMenuShortcut({
  className,
  ...props
}) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        'dropdown-menu-shortcut',
        className,
      )}
      {...props}
    />
  )
}

function DropdownMenuSub({
  ...props
}) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "dropdown-menu-sub-trigger",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="dropdown-menu-sub-trigger-chevron" />
    </DropdownMenuPrimitive.SubTrigger>
  )
}

function DropdownMenuSubContent({
  className,
  ...props
}) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        'dropdown-menu-sub-content',
        className,
      )}
      {...props}
    />
  )
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}

const styles = `
.dropdown-menu-content {
  background-color: white;
  color: #111827;
  z-index: 50;
  max-height: var(--radix-dropdown-menu-content-available-height);
  min-width: 8rem;
  transform-origin: var(--radix-dropdown-menu-content-transform-origin);
  overflow-x: hidden;
  overflow-y: auto;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  padding: 0.25rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.dropdown-menu-content[data-state="open"] {
  animation: fadeIn 0.2s ease-in-out, zoomIn 0.2s ease-in-out;
}

.dropdown-menu-content[data-state="closed"] {
  animation: fadeOut 0.2s ease-in-out, zoomOut 0.2s ease-in-out;
}

.dropdown-menu-content[data-side="bottom"] {
  animation: slideInFromTop 0.2s ease-in-out;
}

.dropdown-menu-content[data-side="left"] {
  animation: slideInFromRight 0.2s ease-in-out;
}

.dropdown-menu-content[data-side="right"] {
  animation: slideInFromLeft 0.2s ease-in-out;
}

.dropdown-menu-content[data-side="top"] {
  animation: slideInFromBottom 0.2s ease-in-out;
}

.dropdown-menu-item {
  position: relative;
  display: flex;
  cursor: default;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.125rem;
  padding: 0.375rem 0.5rem;
  font-size: 0.875rem;
  outline: none;
  user-select: none;
}

.dropdown-menu-item:focus {
  background-color: #f9fafb;
  color: #111827;
}

.dropdown-menu-item[data-variant="destructive"] {
  color: #dc2626;
}

.dropdown-menu-item[data-variant="destructive"]:focus {
  background-color: rgba(220, 38, 38, 0.1);
  color: #dc2626;
}

.dropdown-menu-item[data-disabled] {
  pointer-events: none;
  opacity: 0.5;
}

.dropdown-menu-item[data-inset] {
  padding-left: 2rem;
}

.dropdown-menu-item svg:not([class*='text-']) {
  color: #6b7280;
}

.dropdown-menu-item[data-variant="destructive"] svg {
  color: #dc2626 !important;
}

.dropdown-menu-item svg {
  pointer-events: none;
  flex-shrink: 0;
  width: 1rem;
  height: 1rem;
}

.dropdown-menu-checkbox-item,
.dropdown-menu-radio-item {
  position: relative;
  display: flex;
  cursor: default;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.125rem;
  padding: 0.375rem 2rem 0.375rem 0.5rem;
  font-size: 0.875rem;
  outline: none;
  user-select: none;
}

.dropdown-menu-checkbox-item:focus,
.dropdown-menu-radio-item:focus {
  background-color: #f9fafb;
  color: #111827;
}

.dropdown-menu-checkbox-item[data-disabled],
.dropdown-menu-radio-item[data-disabled] {
  pointer-events: none;
  opacity: 0.5;
}

.dropdown-menu-checkbox-item svg,
.dropdown-menu-radio-item svg {
  pointer-events: none;
  flex-shrink: 0;
  width: 1rem;
  height: 1rem;
}

.dropdown-menu-checkbox-indicator,
.dropdown-menu-radio-indicator {
  pointer-events: none;
  position: absolute;
  left: 0.5rem;
  display: flex;
  width: 0.875rem;
  height: 0.875rem;
  align-items: center;
  justify-content: center;
}

.dropdown-menu-label {
  padding: 0.375rem 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.dropdown-menu-label[data-inset] {
  padding-left: 2rem;
}

.dropdown-menu-separator {
  background-color: #e5e7eb;
  margin: 0.25rem -0.25rem;
  height: 1px;
}

.dropdown-menu-shortcut {
  margin-left: auto;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  color: #6b7280;
}

.dropdown-menu-sub-trigger {
  display: flex;
  cursor: default;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.125rem;
  padding: 0.375rem 0.5rem;
  font-size: 0.875rem;
  outline: none;
  user-select: none;
}

.dropdown-menu-sub-trigger:focus,
.dropdown-menu-sub-trigger[data-state="open"] {
  background-color: #f9fafb;
  color: #111827;
}

.dropdown-menu-sub-trigger[data-inset] {
  padding-left: 2rem;
}

.dropdown-menu-sub-trigger svg:not([class*='text-']) {
  color: #6b7280;
}

.dropdown-menu-sub-trigger svg {
  pointer-events: none;
  flex-shrink: 0;
  width: 1rem;
  height: 1rem;
}

.dropdown-menu-sub-trigger-chevron {
  margin-left: auto;
  width: 1rem;
  height: 1rem;
}

.dropdown-menu-sub-content {
  background-color: white;
  color: #111827;
  z-index: 50;
  min-width: 8rem;
  transform-origin: var(--radix-dropdown-menu-content-transform-origin);
  overflow: hidden;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  padding: 0.25rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.dropdown-menu-sub-content[data-state="open"] {
  animation: fadeIn 0.2s ease-in-out, zoomIn 0.2s ease-in-out;
}

.dropdown-menu-sub-content[data-state="closed"] {
  animation: fadeOut 0.2s ease-in-out, zoomOut 0.2s ease-in-out;
}

.dropdown-menu-sub-content[data-side="bottom"] {
  animation: slideInFromTop 0.2s ease-in-out;
}

.dropdown-menu-sub-content[data-side="left"] {
  animation: slideInFromRight 0.2s ease-in-out;
}

.dropdown-menu-sub-content[data-side="right"] {
  animation: slideInFromLeft 0.2s ease-in-out;
}

.dropdown-menu-sub-content[data-side="top"] {
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