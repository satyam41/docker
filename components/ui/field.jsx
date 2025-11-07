'use client'

import { useMemo } from 'react'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

function FieldSet({ className, ...props }) {
  return (
    <fieldset
      data-slot="field-set"
      className={cn(
        'field-set',
        className,
      )}
      {...props}
    />
  )
}

function FieldLegend({
  className,
  variant = 'legend',
  ...props
}) {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      className={cn(
        'field-legend',
        className,
      )}
      {...props}
    />
  )
}

function FieldGroup({ className, ...props }) {
  return (
    <div
      data-slot="field-group"
      className={cn(
        'field-group',
        className,
      )}
      {...props}
    />
  )
}

const fieldVariants = cva(
  'field-base',
  {
    variants: {
      orientation: {
        vertical: 'field-vertical',
        horizontal: 'field-horizontal',
        responsive: 'field-responsive',
      },
    },
    defaultVariants: {
      orientation: 'vertical',
    },
  },
)

function Field({
  className,
  orientation = 'vertical',
  ...props
}) {
  return (
    <div
      role="group"
      data-slot="field"
      data-orientation={orientation}
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
  )
}

function FieldContent({ className, ...props }) {
  return (
    <div
      data-slot="field-content"
      className={cn(
        'field-content',
        className,
      )}
      {...props}
    />
  )
}

function FieldLabel({
  className,
  ...props
}) {
  return (
    <Label
      data-slot="field-label"
      className={cn(
        'field-label',
        className,
      )}
      {...props}
    />
  )
}

function FieldTitle({ className, ...props }) {
  return (
    <div
      data-slot="field-label"
      className={cn(
        'field-title',
        className,
      )}
      {...props}
    />
  )
}

function FieldDescription({ className, ...props }) {
  return (
    <p
      data-slot="field-description"
      className={cn(
        'field-description',
        className,
      )}
      {...props}
    />
  )
}

function FieldSeparator({
  children,
  className,
  ...props
}) {
  return (
    <div
      data-slot="field-separator"
      data-content={!!children}
      className={cn(
        'field-separator',
        className,
      )}
      {...props}
    >
      <Separator className="field-separator-line" />
      {children && (
        <span
          className="field-separator-content"
          data-slot="field-separator-content"
        >
          {children}
        </span>
      )}
    </div>
  )
}

function FieldError({
  className,
  children,
  errors,
  ...props
}) {
  const content = useMemo(() => {
    if (children) {
      return children
    }

    if (!errors) {
      return null
    }

    if (errors.length === 1 && errors[0]?.message) {
      return errors[0].message
    }

    return (
      <ul className="field-error-list">
        {errors.map(
          (error, index) =>
            error?.message && <li key={index}>{error.message}</li>,
        )}
      </ul>
    )
  }, [children, errors])

  if (!content) {
    return null
  }

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn('field-error', className)}
      {...props}
    >
      {content}
    </div>
  )
}

export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
}

const styles = `
.field-set {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.field-set:has(>[data-slot=checkbox-group]) {
  gap: 0.75rem;
}

.field-set:has(>[data-slot=radio-group]) {
  gap: 0.75rem;
}

.field-legend {
  margin-bottom: 0.75rem;
  font-weight: 500;
}

.field-legend[data-variant="legend"] {
  font-size: 1rem;
}

.field-legend[data-variant="label"] {
  font-size: 0.875rem;
}

.field-group {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1.75rem;
  container-type: inline-size;
}

.field-group[data-slot="checkbox-group"] {
  gap: 0.75rem;
}

.field-group > [data-slot=field-group] {
  gap: 1rem;
}

.field-base {
  display: flex;
  width: 100%;
  gap: 0.75rem;
}

.field-base[data-invalid="true"] {
  color: #dc2626;
}

.field-vertical {
  flex-direction: column;
}

.field-vertical > * {
  width: 100%;
}

.field-vertical > .sr-only {
  width: auto;
}

.field-horizontal {
  flex-direction: row;
  align-items: center;
}

.field-horizontal > [data-slot=field-label] {
  flex: 1 1 auto;
}

.field-horizontal:has(>[data-slot=field-content]) {
  align-items: flex-start;
}

.field-horizontal:has(>[data-slot=field-content]) > [role=checkbox],
.field-horizontal:has(>[data-slot=field-content]) > [role=radio] {
  margin-top: 1px;
}

.field-responsive {
  flex-direction: column;
}

.field-responsive > * {
  width: 100%;
}

.field-responsive > .sr-only {
  width: auto;
}

@media (min-width: 768px) {
  .field-responsive {
    flex-direction: row;
    align-items: center;
  }
  
  .field-responsive > * {
    width: auto;
  }
  
  .field-responsive > [data-slot=field-label] {
    flex: 1 1 auto;
  }
  
  .field-responsive:has(>[data-slot=field-content]) {
    align-items: flex-start;
  }
  
  .field-responsive:has(>[data-slot=field-content]) > [role=checkbox],
  .field-responsive:has(>[data-slot=field-content]) > [role=radio] {
    margin-top: 1px;
  }
}

.field-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.375rem;
  line-height: 1.25;
}

.field-label {
  display: flex;
  width: fit-content;
  gap: 0.5rem;
  line-height: 1.25;
}

.field-label[data-disabled="true"] {
  opacity: 0.5;
}

.field-label:has(>[data-slot=field]) {
  width: 100%;
  flex-direction: column;
  border-radius: 0.375rem;
  border: 1px solid #e5e7eb;
}

.field-label:has(>[data-slot=field]) > * {
  padding: 1rem;
}

.field-label:has([data-state=checked]) {
  background-color: rgba(59, 130, 246, 0.05);
  border-color: #3b82f6;
}

.field-title {
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25;
  font-weight: 500;
}

.field-title[data-disabled="true"] {
  opacity: 0.5;
}

.field-description {
  font-size: 0.875rem;
  line-height: 1.5;
  font-weight: 400;
  color: #6b7280;
}

.field-description:last-child {
  margin-top: 0;
}

.field-description:nth-last-child(2) {
  margin-top: -0.25rem;
}

.field-description:has([data-variant=legend] + &) {
  margin-top: -0.375rem;
}

.field-description > a:hover {
  color: #3b82f6;
}

.field-description > a {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.field-separator {
  position: relative;
  margin-top: -0.5rem;
  margin-bottom: -0.5rem;
  height: 1.25rem;
  font-size: 0.875rem;
}

.field-separator-line {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin-top: 50%;
  transform: translateY(-50%);
}

.field-separator-content {
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background-color: white;
  color: #6b7280;
}

.field-error {
  color: #dc2626;
  font-size: 0.875rem;
  font-weight: 400;
}

.field-error-list {
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  list-style-type: disc;
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
`

// Inject styles into document head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}