import { cn } from '@/lib/utils'

function Kbd({ className, ...props }) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        'kbd-base',
        className,
      )}
      {...props}
    />
  )
}

function KbdGroup({ className, ...props }) {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn('kbd-group', className)}
      {...props}
    />
  )
}

export { Kbd, KbdGroup }

const styles = `
.kbd-base {
  background-color: #f9fafb;
  width: fit-content;
  color: #6b7280;
  pointer-events: none;
  display: inline-flex;
  height: 1.25rem;
  min-width: 1.25rem;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  border-radius: 0.125rem;
  padding: 0 0.25rem;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  user-select: none;
}

.kbd-base svg:not([class*='size-']) {
  width: 0.75rem;
  height: 0.75rem;
}

[data-slot=tooltip-content] .kbd-base {
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
}

.kbd-group {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}
`

// Inject styles into document head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}