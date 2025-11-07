import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

function Empty({ className, ...props }) {
  return (
    <div
      data-slot="empty"
      className={cn(
        'empty',
        className,
      )}
      {...props}
    />
  )
}

function EmptyHeader({ className, ...props }) {
  return (
    <div
      data-slot="empty-header"
      className={cn(
        'empty-header',
        className,
      )}
      {...props}
    />
  )
}

const emptyMediaVariants = cva(
  'empty-media-base',
  {
    variants: {
      variant: {
        default: 'empty-media-default',
        icon: 'empty-media-icon',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function EmptyMedia({
  className,
  variant = 'default',
  ...props
}) {
  return (
    <div
      data-slot="empty-icon"
      data-variant={variant}
      className={cn(emptyMediaVariants({ variant, className }))}
      {...props}
    />
  )
}

function EmptyTitle({ className, ...props }) {
  return (
    <div
      data-slot="empty-title"
      className={cn('empty-title', className)}
      {...props}
    />
  )
}

function EmptyDescription({ className, ...props }) {
  return (
    <div
      data-slot="empty-description"
      className={cn(
        'empty-description',
        className,
      )}
      {...props}
    />
  )
}

function EmptyContent({ className, ...props }) {
  return (
    <div
      data-slot="empty-content"
      className={cn(
        'empty-content',
        className,
      )}
      {...props}
    />
  )
}

export {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
}

const styles = `
.empty {
  display: flex;
  min-width: 0;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  border: 1px dashed #e5e7eb;
  border-radius: 0.5rem;
  padding: 1.5rem;
  text-align: center;
  text-wrap: balance;
}

@media (min-width: 768px) {
  .empty {
    padding: 3rem;
  }
}

.empty-header {
  display: flex;
  max-width: 24rem;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
}

.empty-media-base {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
}

.empty-media-base svg {
  pointer-events: none;
  flex-shrink: 0;
}

.empty-media-default {
  background-color: transparent;
}

.empty-media-icon {
  background-color: #f9fafb;
  color: #111827;
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
}

.empty-media-icon svg:not([class*='size-']) {
  width: 1.5rem;
  height: 1.5rem;
}

.empty-title {
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 500;
  letter-spacing: -0.025em;
}

.empty-description {
  font-size: 0.875rem;
  line-height: 1.5;
  color: #6b7280;
}

.empty-description > a:hover {
  color: #3b82f6;
}

.empty-description > a {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.empty-content {
  display: flex;
  width: 100%;
  max-width: 24rem;
  min-width: 0;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
  text-wrap: balance;
}
`

// Inject styles into document head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}