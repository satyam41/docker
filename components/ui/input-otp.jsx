'use client'

import * as React from 'react'
import { OTPInput, OTPInputContext } from 'input-otp'
import { MinusIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function InputOTP({
  className,
  containerClassName,
  ...props
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        'input-otp-container',
        containerClassName,
      )}
      className={cn('input-otp-base', className)}
      {...props}
    />
  )
}

function InputOTPGroup({ className, ...props }) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn('input-otp-group', className)}
      {...props}
    />
  )
}

function InputOTPSlot({
  index,
  className,
  ...props
}) {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {}

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        'input-otp-slot',
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="input-otp-caret-container">
          <div className="input-otp-caret" />
        </div>
      )}
    </div>
  )
}

function InputOTPSeparator({ ...props }) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>
  )
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }

const styles = `
.input-otp-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.input-otp-container:has(.disabled) {
  opacity: 0.5;
}

.input-otp-base:disabled {
  cursor: not-allowed;
}

.input-otp-group {
  display: flex;
  align-items: center;
}

.input-otp-slot {
  position: relative;
  display: flex;
  height: 2.25rem;
  width: 2.25rem;
  align-items: center;
  justify-content: center;
  border: 1px solid #d1d5db;
  border-left: none;
  border-right: none;
  font-size: 0.875rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.2s;
  outline: none;
}

.input-otp-slot:first-child {
  border-left: 1px solid #d1d5db;
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
}

.input-otp-slot:last-child {
  border-right: 1px solid #d1d5db;
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
}

.input-otp-slot[data-active="true"] {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
  z-index: 10;
}

.input-otp-slot[aria-invalid="true"] {
  border-color: #dc2626;
}

.input-otp-slot[data-active="true"][aria-invalid="true"] {
  border-color: #dc2626;
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.2);
}

.input-otp-caret-container {
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.input-otp-caret {
  animation: caretBlink 1s infinite;
  background-color: #111827;
  height: 1rem;
  width: 1px;
}

@keyframes caretBlink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
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