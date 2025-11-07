import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'input-base',
        className,
      )}
      {...props}
    />
  )
}

export { Input }

const styles = `
.input-base {
  height: 2.25rem;
  width: 100%;
  min-width: 0;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  background-color: transparent;
  padding: 0.25rem 0.75rem;
  font-size: 1rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: color 0.2s, box-shadow 0.2s;
  outline: none;
}

.input-base::file-selector-button {
  color: #111827;
  display: inline-flex;
  height: 1.75rem;
  border: 0;
  background-color: transparent;
  font-size: 0.875rem;
  font-weight: 500;
}

.input-base::placeholder {
  color: #6b7280;
}

.input-base::selection {
  background-color: #3b82f6;
  color: white;
}

.input-base:focus-visible {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
}

.input-base[aria-invalid="true"] {
  border-color: #dc2626;
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.2);
}

.input-base:disabled {
  pointer-events: none;
  cursor: not-allowed;
  opacity: 0.5;
}

@media (min-width: 768px) {
  .input-base {
    font-size: 0.875rem;
  }
}
`

// Inject styles into document head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}