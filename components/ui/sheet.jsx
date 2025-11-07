'use client'

import * as React from 'react'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import { XIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Sheet({ ...props }) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({
  ...props
}) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({
  ...props
}) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({
  ...props
}) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({
  className,
  ...props
}) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        'sheet-overlay',
        className,
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = 'right',
  ...props
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          'sheet-content',
          side === 'right' && 'sheet-content-right',
          side === 'left' && 'sheet-content-left',
          side === 'top' && 'sheet-content-top',
          side === 'bottom' && 'sheet-content-bottom',
          className,
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="sheet-close-button">
          <XIcon className="size-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }) {
  return (
    <div
      data-slot="sheet-header"
      className={cn('sheet-header', className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn('sheet-footer', className)}
      {...props}
    />
  )
}

function SheetTitle({
  className,
  ...props
}) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn('sheet-title', className)}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn('sheet-description', className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}

const styles = `
.sheet-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.5);
}

.sheet-overlay[data-state="open"] {
  animation: fadeIn 0.2s ease-in-out;
}

.sheet-overlay[data-state="closed"] {
  animation: fadeOut 0.2s ease-in-out;
}

.sheet-content {
  background-color: white;
  position: fixed;
  z-index: 50;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition-timing-function: ease-in-out;
}

.sheet-content[data-state="open"] {
  animation: slideIn 0.5s ease-in-out;
}

.sheet-content[data-state="closed"] {
  animation: slideOut 0.3s ease-in-out;
}

.sheet-content-right {
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 75%;
  border-left: 1px solid #e5e7eb;
}

.sheet-content-right[data-state="closed"] {
  animation: slideOutToRight 0.3s ease-in-out;
}

.sheet-content-right[data-state="open"] {
  animation: slideInFromRight 0.5s ease-in-out;
}

.sheet-content-left {
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 75%;
  border-right: 1px solid #e5e7eb;
}

.sheet-content-left[data-state="closed"] {
  animation: slideOutToLeft 0.3s ease-in-out;
}

.sheet-content-left[data-state="open"] {
  animation: slideInFromLeft 0.5s ease-in-out;
}

.sheet-content-top {
  top: 0;
  right: 0;
  left: 0;
  height: auto;
  border-bottom: 1px solid #e5e7eb;
}

.sheet-content-top[data-state="closed"] {
  animation: slideOutToTop 0.3s ease-in-out;
}

.sheet-content-top[data-state="open"] {
  animation: slideInFromTop 0.5s ease-in-out;
}

.sheet-content-bottom {
  right: 0;
  bottom: 0;
  left: 0;
  height: auto;
  border-top: 1px solid #e5e7eb;
}

.sheet-content-bottom[data-state="closed"] {
  animation: slideOutToBottom 0.3s ease-in-out;
}

.sheet-content-bottom[data-state="open"] {
  animation: slideInFromBottom 0.5s ease-in-out;
}

@media (min-width: 640px) {
  .sheet-content-right,
  .sheet-content-left {
    max-width: 24rem;
  }
}

.sheet-close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  border-radius: 2px;
  opacity: 0.7;
  transition: opacity 0.2s;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sheet-close-button:hover {
  opacity: 1;
}

.sheet-close-button:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: 0 0 0 2px #3b82f6, 0 0 0 4px rgba(59, 130, 246, 0.5);
}

.sheet-close-button:disabled {
  pointer-events: none;
}

.sheet-header {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  padding: 1rem;
}

.sheet-footer {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
}

.sheet-title {
  color: #111827;
  font-weight: 600;
}

.sheet-description {
  font-size: 0.875rem;
  color: #6b7280;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
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

@keyframes slideInFromRight {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideOutToRight {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}

@keyframes slideInFromLeft {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideOutToLeft {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

@keyframes slideInFromTop {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slideOutToTop {
  from {
    transform: translateY(0);
  to {
    transform: translateY(-100%);
  }
}

@keyframes slideInFromBottom {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slideOutToBottom {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
}
`

// Inject styles into document head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}