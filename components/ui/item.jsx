import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'

function ItemGroup({ className, ...props }) {
  return (
    <div
      role="list"
      data-slot="item-group"
      className={cn('item-group', className)}
      {...props}
    />
  )
}

function ItemSeparator({
  className,
  ...props
}) {
  return (
    <Separator
      data-slot="item-separator"
      orientation="horizontal"
      className={cn('item-separator', className)}
      {...props}
    />
  )
}

const itemVariants = cva(
  'item-base',
  {
    variants: {
      variant: {
        default: 'item-variant-default',
        outline: 'item-variant-outline',
        muted: 'item-variant-muted',
      },
      size: {
        default: 'item-size-default',
        sm: 'item-size-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Item({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : 'div'
  return (
    <Comp
      data-slot="item"
      data-variant={variant}
      data-size={size}
      className={cn(itemVariants({ variant, size, className }))}
      {...props}
    />
  )
}

const itemMediaVariants = cva(
  'item-media-base',
  {
    variants: {
      variant: {
        default: 'item-media-variant-default',
        icon: 'item-media-variant-icon',
        image: 'item-media-variant-image',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function ItemMedia({
  className,
  variant = 'default',
  ...props
}) {
  return (
    <div
      data-slot="item-media"
      data-variant={variant}
      className={cn(itemMediaVariants({ variant, className }))}
      {...props}
    />
  )
}

function ItemContent({ className, ...props }) {
  return (
    <div
      data-slot="item-content"
      className={cn(
        'item-content',
        className,
      )}
      {...props}
    />
  )
}

function ItemTitle({ className, ...props }) {
  return (
    <div
      data-slot="item-title"
      className={cn(
        'item-title',
        className,
      )}
      {...props}
    />
  )
}

function ItemDescription({ className, ...props }) {
  return (
    <p
      data-slot="item-description"
      className={cn(
        'item-description',
        className,
      )}
      {...props}
    />
  )
}

function ItemActions({ className, ...props }) {
  return (
    <div
      data-slot="item-actions"
      className={cn('item-actions', className)}
      {...props}
    />
  )
}

function ItemHeader({ className, ...props }) {
  return (
    <div
      data-slot="item-header"
      className={cn(
        'item-header',
        className,
      )}
      {...props}
    />
  )
}

function ItemFooter({ className, ...props }) {
  return (
    <div
      data-slot="item-footer"
      className={cn(
        'item-footer',
        className,
      )}
      {...props}
    />
  )
}

export {
  Item,
  ItemMedia,
  ItemContent,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
  ItemDescription,
  ItemHeader,
  ItemFooter,
}

const styles = `
.item-group {
  display: flex;
  flex-direction: column;
}

.item-separator {
  margin-top: 0;
  margin-bottom: 0;
}

.item-base {
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  transition: background-color 0.2s;
  flex-wrap: wrap;
  outline: none;
}

.item-base:focus-visible {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
}

.item-base[a]:hover {
  background-color: rgba(249, 250, 251, 0.5);
}

.item-variant-default {
  background-color: transparent;
}

.item-variant-outline {
  border-color: #e5e7eb;
}

.item-variant-muted {
  background-color: rgba(249, 250, 251, 0.5);
}

.item-size-default {
  padding: 1rem;
  gap: 1rem;
}

.item-size-sm {
  padding: 0.75rem 1rem;
  gap: 0.625rem;
}

.item-media-base {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.item-media-base:has([data-slot=item-description]) {
  align-self: flex-start;
  transform: translateY(0.125rem);
}

.item-media-base svg {
  pointer-events: none;
}

.item-media-variant-default {
  background-color: transparent;
}

.item-media-variant-icon {
  width: 2rem;
  height: 2rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.125rem;
  background-color: #f9fafb;
}

.item-media-variant-icon svg:not([class*='size-']) {
  width: 1rem;
  height: 1rem;
}

.item-media-variant-image {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.125rem;
  overflow: hidden;
}

.item-media-variant-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.25rem;
}

.item-content + [data-slot=item-content] {
  flex: none;
}

.item-title {
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25;
  font-weight: 500;
}

.item-description {
  color: #6b7280;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 0.875rem;
  line-height: 1.5;
  font-weight: 400;
  text-wrap: balance;
}

.item-description > a:hover {
  color: #3b82f6;
}

.item-description > a {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.item-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.item-header {
  display: flex;
  flex-basis: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.item-footer {
  display: flex;
  flex-basis: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}
`

// Inject styles into document head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}