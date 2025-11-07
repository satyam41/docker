'use client'

import * as React from 'react'
import { Drawer as DrawerPrimitive } from 'vaul'

import { cn } from '@/lib/utils'

function Drawer({
  ...props
}) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />
}

function DrawerTrigger({
  ...props
}) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />
}

function DrawerPortal({
  ...props
}) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
}

function DrawerClose({
  ...props
}) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
}

function DrawerOverlay({
  className,
  ...props
}) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        'drawer-overlay',
        className,
      )}
      {...props}
    />
  )
}

function DrawerContent({
  className,
  children,
  ...props
}) {
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          'drawer-content',
          className,
        )}
        {...props}
      >
        <div className="drawer-handle" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
}

function DrawerHeader({ className, ...props }) {
  return (
    <div
      data-slot="drawer-header"
      className={cn('drawer-header', className)}
      {...props}
    />
  )
}

function DrawerFooter({ className, ...props }) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn('drawer-footer', className)}
      {...props}
    />
  )
}

function DrawerTitle({
  className,
  ...props
}) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn('drawer-title', className)}
      {...props}
    />
  )
}

function DrawerDescription({
  className,
  ...props
}) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn('drawer-description', className)}
      {...props}
    />
  )
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}

const styles = `
.drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.5);
}

.drawer-overlay[data-state="open"] {
  animation: fadeIn 0.2s ease-in-out;
}

.drawer-overlay[data-state="closed"] {
  animation: fadeOut 0.2s ease-in-out;
}

.drawer-content {
  position: fixed;
  z-index: 50;
  display: flex;
  height: auto;
  flex-direction: column;
  background-color: white;
}

.drawer-content[data-vaul-drawer-direction="top"] {
  top: 0;
  left: 0;
  right: 0;
  margin-bottom: 6rem;
  max-height: 80vh;
  border-bottom: 1px solid #e5e7eb;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.drawer-content[data-vaul-drawer-direction="bottom"] {
  bottom: 0;
  left: 0;
  right: 0;
  margin-top: 6rem;
  max-height: 80vh;
  border-top: 1px solid #e5e7eb;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.drawer-content[data-vaul-drawer-direction="right"] {
  top: 0;
  right: 0;
  bottom: 0;
  width: 75%;
  border-left: 1px solid #e5e7eb;
}

@media (min-width: 640px) {
  .drawer-content[data-vaul-drawer-direction="right"] {
    max-width: 24rem;
  }
}

.drawer-content[data-vaul-drawer-direction="left"] {
  top: 0;
  left: 0;
  bottom: 0;
  width: 75%;
  border-right: 1px solid #e5e7eb;
}

@media (min-width: 640px) {
  .drawer-content[data-vaul-drawer-direction="left"] {
    max-width: 24rem;
  }
}

.drawer-handle {
  display: none;
  margin: 1rem auto 0 auto;
  height: 0.5rem;
  width: 6.25rem;
  flex-shrink: 0;
  border-radius: 9999px;
  background-color: #f3f4f6;
}

.drawer-content[data-vaul-drawer-direction="bottom"] .drawer-handle {
  display: block;
}

.drawer-header {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  padding: 1rem;
}

.drawer-content[data-vaul-drawer-direction="bottom"] .drawer-header,
.drawer-content[data-vaul-drawer-direction="top"] .drawer-header {
  text-align: center;
}

@media (min-width: 768px) {
  .drawer-header {
    gap: 0.375rem;
    text-align: left;
  }
}

.drawer-footer {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
}

.drawer-title {
  color: #111827;
  font-weight: 600;
}

.drawer-description {
  font-size: 0.875rem;
  color: #6b7280;
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
`

// Inject styles into document head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}