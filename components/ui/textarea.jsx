import * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea({ className, ...props }) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'textarea',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }

// Internal CSS
const styles = `
.textarea {
  border: 1px solid hsl(var(--input));
  background-color: transparent;
  color: inherit;
  min-height: 4rem;
  width: 100%;
  border-radius: 0.375rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 1rem;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  transition: color, box-shadow;
  outline: none;
  resize: vertical;
  field-sizing: content;
  display: flex;
}

.textarea::placeholder {
  color: hsl(var(--muted-foreground));
}

.textarea:focus-visible {
  border-color: hsl(var(--ring));
  box-shadow: 0 0 0 3px hsl(var(--ring) / 0.5);
}

.textarea:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.textarea[aria-invalid="true"] {
  border-color: hsl(var(--destructive));
  box-shadow: 0 0 0 3px hsl(var(--destructive) / 0.2);
}

@media (min-width: 768px) {
  .textarea {
    font-size: 0.875rem;
  }
}

@media (prefers-color-scheme: dark) {
  .textarea {
    background-color: hsl(var(--input) / 0.3);
  }
  
  .textarea[aria-invalid="true"] {
    box-shadow: 0 0 0 3px hsl(var(--destructive) / 0.4);
  }
}
`

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}