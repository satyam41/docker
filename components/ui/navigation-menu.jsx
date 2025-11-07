import * as React from 'react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { cva } from 'class-variance-authority'
import { ChevronDownIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        'navigation-menu-root',
        className,
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  )
}

function NavigationMenuList({
  className,
  ...props
}) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        'navigation-menu-list',
        className,
      )}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  ...props
}) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn('navigation-menu-item', className)}
      {...props}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  'navigation-menu-trigger-base',
)

function NavigationMenuTrigger({
  className,
  children,
  ...props
}) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), 'navigation-menu-trigger', className)}
      {...props}
    >
      {children}{' '}
      <ChevronDownIcon
        className="navigation-menu-trigger-chevron"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationMenuContent({
  className,
  ...props
}) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        'navigation-menu-content',
        className,
      )}
      {...props}
    />
  )
}

function NavigationMenuViewport({
  className,
  ...props
}) {
  return (
    <div
      className={'navigation-menu-viewport-container'}
    >
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          'navigation-menu-viewport',
          className,
        )}
        {...props}
      />
    </div>
  )
}

function NavigationMenuLink({
  className,
  ...props
}) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "navigation-menu-link",
        className,
      )}
      {...props}
    />
  )
}

function NavigationMenuIndicator({
  className,
  ...props
}) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        'navigation-menu-indicator',
        className,
      )}
      {...props}
    >
      <div className="navigation-menu-indicator-arrow" />
    </NavigationMenuPrimitive.Indicator>
  )
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
}

const styles = `
.navigation-menu-root {
  position: relative;
  display: flex;
  max-width: max-content;
  flex: 1;
  align-items: center;
  justify-content: center;
}

.navigation-menu-list {
  display: flex;
  flex: 1;
  list-style: none;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
}

.navigation-menu-item {
  position: relative;
}

.navigation-menu-trigger-base {
  background-color: white;
  display: inline-flex;
  height: 2.25rem;
  width: max-content;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 0.2s, box-shadow 0.2s;
  outline: none;
}

.navigation-menu-trigger-base:hover {
  background-color: #f9fafb;
  color: #111827;
}

.navigation-menu-trigger-base:focus {
  background-color: #f9fafb;
  color: #111827;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
}

.navigation-menu-trigger-base:disabled {
  pointer-events: none;
  opacity: 0.5;
}

.navigation-menu-trigger-base[data-state="open"] {
  background-color: rgba(249, 250, 251, 0.5);
  color: #111827;
}

.navigation-menu-trigger-base[data-state="open"]:hover {
  background-color: #f9fafb;
}

.navigation-menu-trigger-base[data-state="open"]:focus {
  background-color: #f9fafb;
}

.navigation-menu-trigger {
  display: flex;
  align-items: center;
}

.navigation-menu-trigger-chevron {
  position: relative;
  top: 1px;
  margin-left: 0.25rem;
  width: 0.75rem;
  height: 0.75rem;
  transition: transform 0.3s;
}

.navigation-menu-trigger-chevron[data-state="open"] {
  transform: rotate(180deg);
}

.navigation-menu-content {
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem;
  padding-right: 0.625rem;
}

.navigation-menu-content[data-motion^="from-"] {
  animation: fadeIn 0.2s ease-in-out;
}

.navigation-menu-content[data-motion^="to-"] {
  animation: fadeOut 0.2s ease-in-out;
}

.navigation-menu-content[data-motion="from-end"] {
  animation: slideInFromRight 0.2s ease-in-out;
}

.navigation-menu-content[data-motion="from-start"] {
  animation: slideInFromLeft 0.2s ease-in-out;
}

.navigation-menu-content[data-motion="to-end"] {
  animation: slideOutToRight 0.2s ease-in-out;
}

.navigation-menu-content[data-motion="to-start"] {
  animation: slideOutToLeft 0.2s ease-in-out;
}

@media (min-width: 768px) {
  .navigation-menu-content {
    position: absolute;
    width: auto;
  }
}

.navigation-menu-content:not([data-viewport="true"]) {
  background-color: white;
  color: #111827;
}

.navigation-menu-content:not([data-viewport="true"])[data-state="open"] {
  animation: fadeIn 0.2s ease-in-out, zoomIn 0.2s ease-in-out;
}

.navigation-menu-content:not([data-viewport="true"])[data-state="closed"] {
  animation: fadeOut 0.2s ease-in-out, zoomOut 0.2s ease-in-out;
}

.navigation-menu-content:not([data-viewport="true"]) {
  top: 100%;
  margin-top: 0.375rem;
  overflow: hidden;
  border-radius: 0.375rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition-duration: 200ms;
}

.navigation-menu-content:not([data-viewport="true"]) [data-slot=navigation-menu-link]:focus {
  box-shadow: none;
  outline: none;
}

.navigation-menu-viewport-container {
  position: absolute;
  top: 100%;
  left: 0;
  isolation: isolate;
  z-index: 50;
  display: flex;
  justify-content: center;
}

.navigation-menu-viewport {
  background-color: white;
  color: #111827;
  transform-origin: top center;
  position: relative;
  margin-top: 0.375rem;
  height: var(--radix-navigation-menu-viewport-height);
  width: 100%;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.navigation-menu-viewport[data-state="open"] {
  animation: zoomIn 0.2s ease-in-out;
}

.navigation-menu-viewport[data-state="closed"] {
  animation: zoomOut 0.2s ease-in-out;
}

@media (min-width: 768px) {
  .navigation-menu-viewport {
    width: var(--radix-navigation-menu-viewport-width);
  }
}

.navigation-menu-link {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  border-radius: 0.125rem;
  padding: 0.5rem;
  font-size: 0.875rem;
  transition: all 0.2s;
  outline: none;
}

.navigation-menu-link:hover {
  background-color: #f9fafb;
  color: #111827;
}

.navigation-menu-link:focus {
  background-color: #f9fafb;
  color: #111827;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
}

.navigation-menu-link[data-active="true"] {
  background-color: rgba(249, 250, 251, 0.5);
  color: #111827;
}

.navigation-menu-link[data-active="true"]:hover {
  background-color: #f9fafb;
}

.navigation-menu-link[data-active="true"]:focus {
  background-color: #f9fafb;
}

.navigation-menu-link svg:not([class*='text-']) {
  color: #6b7280;
}

.navigation-menu-link svg:not([class*='size-']) {
  width: 1rem;
  height: 1rem;
}

.navigation-menu-indicator {
  display: flex;
  height: 0.375rem;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
}

.navigation-menu-indicator[data-state="visible"] {
  animation: fadeIn 0.2s ease-in-out;
}

.navigation-menu-indicator[data-state="hidden"] {
  animation: fadeOut 0.2s ease-in-out;
}

.navigation-menu-indicator-arrow {
  position: relative;
  top: 60%;
  background-color: #e5e7eb;
  height: 0.5rem;
  width: 0.5rem;
  transform: rotate(45deg);
  border-top-left-radius: 0.125rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
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

@keyframes slideInFromRight {
  from {
    transform: translateX(13rem);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideInFromLeft {
  from {
    transform: translateX(-13rem);
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
    transform: translateX(13rem);
  }
}

@keyframes slideOutToLeft {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-13rem);
  }
}
`

// Inject styles into document head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}