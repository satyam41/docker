import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'

function Badge({
  className,
  variant = 'default',
  asChild = false,
  ...props
}) {
  const [isHovered, setIsHovered] = React.useState(false)
  const [isFocused, setIsFocused] = React.useState(false)
  const [isInvalid, setIsInvalid] = React.useState(false)

  React.useEffect(() => {
    // Check for aria-invalid attribute
    if (props['aria-invalid'] === 'true' || props['aria-invalid'] === true) {
      setIsInvalid(true)
    }
  }, [props['aria-invalid']])

  const getBadgeStyle = () => {
    const baseStyle = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '0.375rem',
      border: '1px solid',
      padding: '0.125rem 0.5rem',
      fontSize: '0.75rem',
      fontWeight: '500',
      width: 'fit-content',
      whiteSpace: 'nowrap',
      flexShrink: 0,
      gap: '0.25rem',
      overflow: 'hidden',
      transition: 'color 0.2s, box-shadow 0.2s'
    }

    // Icon styling
    const iconStyle = {
      width: '0.75rem',
      height: '0.75rem',
      pointerEvents: 'none'
    }

    // Focus styles
    if (isFocused) {
      baseStyle.border = '1px solid var(--ring)'
      baseStyle.boxShadow = '0 0 0 3px var(--ring)/0.5'
    }

    // Invalid state styles
    if (isInvalid) {
      baseStyle.border = '1px solid var(--destructive)'
      baseStyle.boxShadow = '0 0 0 3px var(--destructive)/0.2'
    }

    // Variant styles
    switch (variant) {
      case 'default':
        baseStyle.borderColor = 'transparent'
        baseStyle.backgroundColor = 'var(--primary)'
        baseStyle.color = 'var(--primary-foreground)'
        if (isHovered && props.href) {
          baseStyle.backgroundColor = 'var(--primary)/0.9'
        }
        break
        
      case 'secondary':
        baseStyle.borderColor = 'transparent'
        baseStyle.backgroundColor = 'var(--secondary)'
        baseStyle.color = 'var(--secondary-foreground)'
        if (isHovered && props.href) {
          baseStyle.backgroundColor = 'var(--secondary)/0.9'
        }
        break
        
      case 'destructive':
        baseStyle.borderColor = 'transparent'
        baseStyle.backgroundColor = 'var(--destructive)'
        baseStyle.color = 'white'
        if (isHovered && props.href) {
          baseStyle.backgroundColor = 'var(--destructive)/0.9'
        }
        if (isFocused) {
          baseStyle.boxShadow = '0 0 0 3px var(--destructive)/0.2'
        }
        break
        
      case 'outline':
        baseStyle.borderColor = 'var(--border)'
        baseStyle.color = 'var(--foreground)'
        if (isHovered && props.href) {
          baseStyle.backgroundColor = 'var(--accent)'
          baseStyle.color = 'var(--accent-foreground)'
        }
        break
        
      default:
        baseStyle.borderColor = 'transparent'
        baseStyle.backgroundColor = 'var(--primary)'
        baseStyle.color = 'var(--primary-foreground)'
    }

    return baseStyle
  }

  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      data-slot="badge"
      style={getBadgeStyle()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...props}
    />
  )
}

export { Badge }