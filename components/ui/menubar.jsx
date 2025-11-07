'use client'

import * as React from 'react'
import * as MenubarPrimitive from '@radix-ui/react-menubar'
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Menubar({
  className,
  ...props
}) {
  return (
    <MenubarPrimitive.Root
      data-slot="menubar"
      className={cn(
        'menubar-root',
        className,
      )}
      {...props}
    />
  )
}

function MenubarMenu({
  ...props
}) {
  return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />
}

function MenubarGroup({
  ...props
}) {
  return <MenubarPrimitive.Group data-slot="menubar-group" {...props} />
}

function MenubarPortal({
  ...props
}) {
  return <MenubarPrimitive.Portal data-slot="menubar-portal" {...props} />
}

function MenubarRadioGroup({
  ...props
}) {
  return (
    <MenubarPrimitive.RadioGroup data-slot="menubar-radio-group" {...props} />
  )
}

function MenubarTrigger({
  className,
  ...props
}) {
  return (
    <MenubarPrimitive.Trigger
      data-slot="menubar-trigger"
      className={cn(
        'menubar-trigger',
        className,
      )}
      {...props}
    />
  )
}

function MenubarContent({
  className,
  align = 'start',
  alignOffset = -4,
  sideOffset = 8,
  ...props
}) {
  return (
    <MenubarPortal>
      <MenubarPrimitive.Content
        data-slot="menubar-content"
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          'menubar-content',
          className,
        )}
        {...props}
      />
    </MenubarPortal>
  )
}

function MenubarItem({
  className,
  inset,
  variant = 'default',
  ...props
}) {
  return (
    <MenubarPrimitive.Item
      data-slot="menubar-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "menubar-item",
        className,
      )}
      {...props}
    />
  )
}

function MenubarCheckboxItem({
  className,
  children,
  checked,
  ...props
}) {
  return (
    <MenubarPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      className={cn(
        "menubar-checkbox-item",
        className,
      )}
      checked={checked}
      {...props}
    >
      <span className="menubar-checkbox-indicator">
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  )
}

function MenubarRadioItem({
  className,
  children,
  ...props
}) {
  return (
    <MenubarPrimitive.RadioItem
      data-slot="menubar-radio-item"
      className={cn(
        "menubar-radio-item",
        className,
      )}
      {...props}
    >
      <span className="menubar-radio-indicator">
        <MenubarPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  )
}

function MenubarLabel({
  className,
  inset,
  ...props
}) {
  return (
    <MenubarPrimitive.Label
      data-slot="menubar-label"
      data-inset={inset}
      className={cn(
        'menubar-label',
        className,
      )}
      {...props}
    />
  )
}

function MenubarSeparator({
  className,
  ...props
}) {
  return (
    <MenubarPrimitive.Separator
      data-slot="menubar-separator"
      className={cn('menubar-separator', className)}
      {...props}
    />
  )
}

function MenubarShortcut({
  className,
  ...props
}) {
  return (
    <span
      data-slot="menubar-shortcut"
      className={cn(
        'menubar-shortcut',
        className,
      )}
      {...props}
    />
  )
}

function MenubarSub({
  ...props
}) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />
}

function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return (
    <MenubarPrimitive.SubTrigger
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      className={cn(
        'menubar-sub-trigger',
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="menubar-sub-trigger-chevron" />
    </MenubarPrimitive.SubTrigger>
  )
}

function MenubarSubContent({
  className,
  ...props
}) {
  return (
    <MenubarPrimitive.SubContent
      data-slot="menubar-sub-content"
      className={cn(
        'menubar-sub-content',
        className,
      )}
      {...props}
    />
  )
}

export {
  Menubar,
  MenubarPortal,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
  MenubarLabel,
  MenubarItem,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
}

const styles = `
.menubar-root {
  background-color: white;
  display: flex;
  height: 2.25rem;
  align-items: center;
  gap: 0.25rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  padding: 0.25rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.menubar-trigger {
  display: flex;
  align-items: center;
  border-radius: 0.125rem;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  outline: none;
  user-select: none;
}

.menubar-trigger:focus {
  background-color: #f9fafb;
  color: #111827;
}

.menubar-trigger[data-state="open"] {
  background-color: #f9fafb;
  color: #111827;
}

.menubar-content {
  background-color: white;
  color: #111827;
  z-index: 50;
  min-width: 12rem;
  transform-origin: var(--radix-menubar-content-transform-origin);
  overflow: hidden;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  padding: 0.25rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.menubar-content[data-state="open"] {
  animation: fadeIn 0.2s ease-in-out, zoomIn 0.2s ease-in-out;
}

.menubar-content[data-state="closed"] {
  animation: fadeOut 0.2s ease-in-out;
}

.menubar-content[data-side="bottom"] {
  animation: slideInFromTop 0.2s ease-in-out;
}

.menubar-content[data-side="left"] {
  animation: slideInFromRight 0.2s ease-in-out;
}

.menubar-content[data-side="right"] {
  animation: slideInFromLeft 0.2s ease-in-out;
}

.menubar-content[data-side="top"] {
  animation: slideInFromBottom 0.2s ease-in-out;
}

.menubar-item {
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

.menubar-item:focus {
  background-color: #f9fafb;
  color: #111827;
}

.menubar-item[data-variant="destructive"] {
  color: #dc2626;
}

.menubar-item[data-variant="destructive"]:focus {
  background-color: rgba(220, 38, 38, 0.1);
  color: #dc2626;
}

.menubar-item[data-disabled] {
  pointer-events: none;
  opacity: 0.5;
}

.menubar-item[data-inset] {
  padding-left: 2rem;
}

.menubar-item svg:not([class*='text-']) {
  color: #6b7280;
}

.menubar-item[data-variant="destructive"] svg {
  color: #dc2626 !important;
}

.menubar-item svg {
  pointer-events: none;
  flex-shrink: 0;
  width: 1rem;
  height: 1rem;
}

.menubar-checkbox-item,
.menubar-radio-item {
  position: relative;
  display: flex;
  cursor: default;
  align-items: center;
  gap: 0.5rem;
  border-radius: 2px;
  padding: 0.375rem 0.5rem 0.375rem 2rem;
  font-size: 0.875rem;
  outline: none;
  user-select: none;
}

.menubar-checkbox-item:focus,
.menubar-radio-item:focus {
  background-color: #f9fafb;
  color: #111827;
}

.menubar-checkbox-item[data-disabled],
.menubar-radio-item[data-disabled] {
  pointer-events: none;
  opacity: 0.5;
}

.menubar-checkbox-item svg,
.menubar-radio-item svg {
  pointer-events: none;
  flex-shrink: 0;
  width: 1rem;
  height: 1rem;
}

.menubar-checkbox-indicator,
.menubar-radio-indicator {
  pointer-events: none;
  position: absolute;
  left: 0.5rem;
  display: flex;
  width: 0.875rem;
  height: 0.875rem;
  align-items: center;
  justify-content: center;
}

.menubar-label {
  padding: 0.375rem 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.menubar-label[data-inset] {
  padding-left: 2rem;
}

.menubar-separator {
  background-color: #e5e7eb;
  margin: 0.25rem -0.25rem;
  height: 1px;
}

.menubar-shortcut {
  margin-left: auto;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  color: #6b7280;
}

.menubar-sub-trigger {
  display: flex;
  cursor: default;
  align-items: center;
  border-radius: 0.125rem;
  padding: 0.375rem 0.5rem;
  font-size: 0.875rem;
  outline: none;
  user-select: none;
}

.menubar-sub-trigger:focus,
.menubar-sub-trigger[data-state="open"] {
  background-color: #f9fafb;
  color: #111827;
}

.menubar-sub-trigger[data-inset] {
  padding-left: 2rem;
}

.menubar-sub-trigger-chevron {
  margin-left: auto;
  width: 1rem;
  height: 1rem;
}

.menubar-sub-content {
  background-color: white;
  color: #111827;
  z-index: 50;
  min-width: 8rem;
  transform-origin: var(--radix-menubar-content-transform-origin);
  overflow: hidden;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  padding: 0.25rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.menubar-sub-content[data-state="open"] {
  animation: fadeIn 0.2s ease-in-out, zoomIn 0.2s ease-in-out;
}

.menubar-sub-content[data-state="closed"] {
  animation: fadeOut 0.2s ease-in-out, zoomOut 0.2s ease-in-out;
}

.menubar-sub-content[data-side="bottom"] {
  animation: slideInFromTop 0.2s ease-in-out;
}

.menubar-sub-content[data-side="left"] {
  animation: slideInFromRight 0.2s ease-in-out;
}

.menubar-sub-content[data-side="right"] {
  animation: slideInFromLeft 0.2s ease-in-out;
}

.menubar-sub-content[data-side="top"] {
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