import { cn } from '@/lib/utils'

function Skeleton({ className, ...props }) {
  return (
    <div
      data-slot="skeleton"
      className={cn('skeleton', className)}
      {...props}
    />
  )
}

export { Skeleton }

// Internal CSS
const styles = `
.skeleton {
  background-color: hsl(var(--accent));
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  border-radius: 0.375rem;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
`

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}