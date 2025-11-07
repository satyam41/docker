'use client'

import * as React from 'react'
import * as ToastPrimitives from '@radix-ui/react-toast'
import { cva } from 'class-variance-authority'
import { X } from 'lucide-react'

import { cn } from '@/lib/utils'

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn('toast-viewport', className)}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  'toast-base',
  {
    variants: {
      variant: {
        default: 'toast-default',
        destructive: 'toast-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

const Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn('toast-action', className)}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn('toast-close', className)}
    toast-close=""
    {...props}
  >
    <X className="toast-close-icon" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn('toast-title', className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn('toast-description', className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

export {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}

// Internal CSS
const styles = `
.toast-viewport {
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  max-height: 100vh;
  width: 100%;
  flex-direction: column-reverse;
  padding: 1rem;
}

@media (min-width: 640px) {
  .toast-viewport {
    bottom: 0;
    right: 0;
    top: auto;
    flex-direction: column;
    max-width: 420px;
  }
}

.toast-base {
  pointer-events: auto;
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  overflow: hidden;
  border-radius: 0.375rem;
  border: 1px solid;
  padding: 1.5rem;
  padding-right: 2rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  transition: all;
}

.toast-base[data-swipe="cancel"] {
  transform: translateX(0);
}

.toast-base[data-swipe="end"] {
  transform: translateX(var(--radix-toast-swipe-end-x));
}

.toast-base[data-swipe="move"] {
  transform: translateX(var(--radix-toast-swipe-move-x));
  transition: none;
}

.toast-base[data-state="open"] {
  animation: slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1);
}

.toast-base[data-state="closed"] {
  animation: fadeOut 100ms ease-in;
}

.toast-base[data-swipe="end"] {
  animation: swipeOut 100ms ease-out;
}

.toast-default {
  border-color: hsl(var(--border));
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
}

.toast-destructive {
  border-color: hsl(var(--destructive));
  background-color: hsl(var(--destructive));
  color: hsl(var(--destructive-foreground));
}

.toast-action {
  display: inline-flex;
  height: 2rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  border: 1px solid;
  background-color: transparent;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background-color;
}

.toast-action:hover {
  background-color: hsl(var(--secondary));
}

.toast-action:focus {
  outline: none;
  box-shadow: 0 0 0 2px hsl(var(--ring)), 0 0 0 4px hsl(var(--ring-offset-background));
}

.toast-action:disabled {
  pointer-events: none;
  opacity: 0.5;
}

.destructive .toast-action {
  border-color: hsl(var(--muted) / 0.4);
}

.destructive .toast-action:hover {
  border-color: hsl(var(--destructive) / 0.3);
  background-color: hsl(var(--destructive));
  color: hsl(var(--destructive-foreground));
}

.destructive .toast-action:focus {
  box-shadow: 0 0 0 2px hsl(var(--destructive));
}

.toast-close {
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  border-radius: 0.375rem;
  padding: 0.25rem;
  color: hsl(var(--foreground) / 0.5);
  opacity: 0;
  transition: opacity;
}

.toast-close:hover {
  color: hsl(var(--foreground));
}

.toast-close:focus {
  opacity: 1;
  outline: none;
  box-shadow: 0 0 0 2px;
}

.toast-base:hover .toast-close {
  opacity: 1;
}

.toast-close-icon {
  width: 1rem;
  height: 1rem;
}

.destructive .toast-close {
  color: hsl(0, 100%, 70%);
}

.destructive .toast-close:hover {
  color: hsl(0, 100%, 90%);
}

.destructive .toast-close:focus {
  box-shadow: 0 0 0 2px hsl(0, 100%, 60%);
}

.toast-title {
  font-size: 0.875rem;
  font-weight: 600;
}

.toast-description {
  font-size: 0.875rem;
  opacity: 0.9;
}

@keyframes slideIn {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
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

@keyframes swipeOut {
  from {
    transform: translateX(var(--radix-toast-swipe-end-x));
  }
  to {
    transform: translateX(100%);
  }
}

@media (min-width: 640px) {
  .toast-base[data-state="open"] {
    animation: slideInFromBottom 150ms cubic-bezier(0.16, 1, 0.3, 1);
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
`

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}