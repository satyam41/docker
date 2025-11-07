'use client'

import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

function InputGroup({ className, ...props }) {
  return (
    <div
      data-slot="input-group"
      role="group"
      className={cn(
        'input-group',
        className,
      )}
      {...props}
    />
  )
}

const inputGroupAddonVariants = cva(
  "input-group-addon-base",
  {
    variants: {
      align: {
        'inline-start': 'input-group-addon-inline-start',
        'inline-end': 'input-group-addon-inline-end',
        'block-start': 'input-group-addon-block-start',
        'block-end': 'input-group-addon-block-end',
      },
    },
    defaultVariants: {
      align: 'inline-start',
    },
  },
)

function InputGroupAddon({
  className,
  align = 'inline-start',
  ...props
}) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(e) => {
        if (e.target.closest('button')) {
          return
        }
        e.currentTarget.parentElement?.querySelector('input')?.focus()
      }}
      {...props}
    />
  )
}

const inputGroupButtonVariants = cva(
  'input-group-button-base',
  {
    variants: {
      size: {
        xs: 'input-group-button-xs',
        sm: 'input-group-button-sm',
        'icon-xs': 'input-group-button-icon-xs',
        'icon-sm': 'input-group-button-icon-sm',
      },
    },
    defaultVariants: {
      size: 'xs',
    },
  },
)

function InputGroupButton({
  className,
  type = 'button',
  variant = 'ghost',
  size = 'xs',
  ...props
}) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  )
}

function InputGroupText({ className, ...props }) {
  return (
    <span
      className={cn(
        "input-group-text",
        className,
      )}
      {...props}
    />
  )
}

function InputGroupInput({
  className,
  ...props
}) {
  return (
    <Input
      data-slot="input-group-control"
      className={cn(
        'input-group-input',
        className,
      )}
      {...props}
    />
  )
}

function InputGroupTextarea({
  className,
  ...props
}) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(
        'input-group-textarea',
        className,
      )}
      {...props}
    />
  )
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
}

const styles = `
.input-group {
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: color 0.2s, box-shadow 0.2s;
  outline: none;
  height: 2.25rem;
}

.input-group:has(>textarea) {
  height: auto;
}

.input-group:has(>[data-align=inline-start]) > input {
  padding-left: 0.5rem;
}

.input-group:has(>[data-align=inline-end]) > input {
  padding-right: 0.5rem;
}

.input-group:has(>[data-align=block-start]) {
  height: auto;
  flex-direction: column;
}

.input-group:has(>[data-align=block-start]) > input {
  padding-bottom: 0.75rem;
}

.input-group:has(>[data-align=block-end]) {
  height: auto;
  flex-direction: column;
}

.input-group:has(>[data-align=block-end]) > input {
  padding-top: 0.75rem;
}

.input-group:has([data-slot=input-group-control]:focus-visible) {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
}

.input-group:has([data-slot][aria-invalid=true]) {
  border-color: #dc2626;
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.2);
}

.input-group-addon-base {
  color: #6b7280;
  display: flex;
  height: auto;
  cursor: text;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.375rem 0;
  font-size: 0.875rem;
  font-weight: 500;
  user-select: none;
}

.input-group-addon-base svg:not([class*='size-']) {
  width: 1rem;
  height: 1rem;
}

.input-group-addon-base kbd {
  border-radius: calc(var(--radius) - 5px);
}

.input-group-addon-base[data-disabled="true"] {
  opacity: 0.5;
}

.input-group-addon-inline-start {
  order: -1;
  padding-left: 0.75rem;
}

.input-group-addon-inline-start:has(>button) {
  margin-left: -0.45rem;
}

.input-group-addon-inline-start:has(>kbd) {
  margin-left: -0.35rem;
}

.input-group-addon-inline-end {
  order: 9999;
  padding-right: 0.75rem;
}

.input-group-addon-inline-end:has(>button) {
  margin-right: -0.4rem;
}

.input-group-addon-inline-end:has(>kbd) {
  margin-right: -0.35rem;
}

.input-group-addon-block-start {
  order: -1;
  width: 100%;
  justify-content: flex-start;
  padding: 0.75rem 0.75rem 0 0.75rem;
}

.input-group-addon-block-start .border-b {
  padding-bottom: 0.75rem;
}

.input-group-addon-block-start:has(>input) {
  padding-top: 0.625rem;
}

.input-group-addon-block-end {
  order: 9999;
  width: 100%;
  justify-content: flex-start;
  padding: 0 0.75rem 0.75rem 0.75rem;
}

.input-group-addon-block-end .border-t {
  padding-top: 0.75rem;
}

.input-group-addon-block-end:has(>input) {
  padding-bottom: 0.625rem;
}

.input-group-button-base {
  font-size: 0.875rem;
  box-shadow: none;
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.input-group-button-xs {
  height: 1.5rem;
  gap: 0.25rem;
  padding: 0 0.5rem;
  border-radius: calc(var(--radius) - 5px);
}

.input-group-button-xs svg:not([class*='size-']) {
  width: 0.875rem;
  height: 0.875rem;
}

.input-group-button-xs:has(>svg) {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.input-group-button-sm {
  height: 2rem;
  padding: 0 0.625rem;
  gap: 0.375rem;
  border-radius: 0.375rem;
}

.input-group-button-sm:has(>svg) {
  padding-left: 0.625rem;
  padding-right: 0.625rem;
}

.input-group-button-icon-xs {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: calc(var(--radius) - 5px);
  padding: 0;
}

.input-group-button-icon-xs:has(>svg) {
  padding: 0;
}

.input-group-button-icon-sm {
  width: 2rem;
  height: 2rem;
  padding: 0;
}

.input-group-button-icon-sm:has(>svg) {
  padding: 0;
}

.input-group-text {
  color: #6b7280;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
}

.input-group-text svg {
  pointer-events: none;
}

.input-group-text svg:not([class*='size-']) {
  width: 1rem;
  height: 1rem;
}

.input-group-input {
  flex: 1;
  border-radius: 0;
  border: 0;
  background-color: transparent;
  box-shadow: none;
}

.input-group-input:focus-visible {
  box-shadow: none;
}

.input-group-textarea {
  flex: 1;
  resize: none;
  border-radius: 0;
  border: 0;
  background-color: transparent;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  box-shadow: none;
}

.input-group-textarea:focus-visible {
  box-shadow: none;
}
`

// Inject styles into document head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}