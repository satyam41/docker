import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}) {
  const [isHovered, setIsHovered] = React.useState(false)
  const [isFocused, setIsFocused] = React.useState(false)
  const [isInvalid, setIsInvalid] = React.useState(false)
  const [hasIcon, setHasIcon] = React.useState(false)
  const buttonRef = React.useRef(null)

  React.useEffect(() => {
    if (buttonRef.current) {
      // Check for aria-invalid
      if (props['aria-invalid'] === 'true' || props['aria-invalid'] === true) {
        setIsInvalid(true)
      }
      
      // Check for icon presence
      const hasSvg = buttonRef.current.querySelector('svg')
      setHasIcon(!!hasSvg)
    }
  }, [props['aria-invalid']])

  const getButtonStyle = () => {
    const baseStyle = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      whiteSpace: 'nowrap',
      borderRadius: '0.375rem',
      fontSize: '0.875rem',
      fontWeight: '500',
      transition: 'all 0.2s',
      outline: 'none',
      flexShrink: 0,
      border: 'none',
      cursor: props.disabled ? 'not-allowed' : 'pointer',
      opacity: props.disabled ? 0.5 : 1,
      pointerEvents: props.disabled ? 'none' : 'auto'
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

    // Size variants
    switch (size) {
      case 'default':
        baseStyle.height = '2.25rem'
        baseStyle.padding = hasIcon ? '0.5rem 0.75rem' : '0.5rem 1rem'
        break
      case 'sm':
        baseStyle.height = '2rem'
        baseStyle.borderRadius = '0.375rem'
        baseStyle.gap = '0.375rem'
        baseStyle.padding = hasIcon ? '0.5rem 0.625rem' : '0.5rem 0.75rem'
        break
      case 'lg':
        baseStyle.height = '2.5rem'
        baseStyle.borderRadius = '0.375rem'
        baseStyle.padding = hasIcon ? '0.5rem 1rem' : '0.5rem 1.5rem'
        break
      case 'icon':
        baseStyle.width = '2.25rem'
        baseStyle.height = '2.25rem'
        baseStyle.padding = '0.5rem'
        break
      case 'icon-sm':
        baseStyle.width = '2rem'
        baseStyle.height = '2rem'
        baseStyle.padding = '0.5rem'
        break
      case 'icon-lg':
        baseStyle.width = '2.5rem'
        baseStyle.height = '2.5rem'
        baseStyle.padding = '0.5rem'
        break
    }

    // Variant styles
    switch (variant) {
      case 'default':
        baseStyle.backgroundColor = isHovered ? 'var(--primary)/0.9' : 'var(--primary)'
        baseStyle.color = 'var(--primary-foreground)'
        break
        
      case 'destructive':
        baseStyle.backgroundColor = isHovered ? 'var(--destructive)/0.9' : 'var(--destructive)'
        baseStyle.color = 'white'
        if (isFocused) {
          baseStyle.boxShadow = '0 0 0 3px var(--destructive)/0.2'
        }
        break
        
      case 'outline':
        baseStyle.border = '1px solid var(--border)'
        baseStyle.backgroundColor = isHovered ? 'var(--accent)' : 'var(--background)'
        baseStyle.color = isHovered ? 'var(--accent-foreground)' : 'var(--foreground)'
        baseStyle.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
        break
        
      case 'secondary':
        baseStyle.backgroundColor = isHovered ? 'var(--secondary)/0.8' : 'var(--secondary)'
        baseStyle.color = 'var(--secondary-foreground)'
        break
        
      case 'ghost':
        baseStyle.backgroundColor = isHovered ? 'var(--accent)' : 'transparent'
        baseStyle.color = isHovered ? 'var(--accent-foreground)' : 'var(--foreground)'
        break
        
      case 'link':
        baseStyle.backgroundColor = 'transparent'
        baseStyle.color = 'var(--primary)'
        baseStyle.textDecoration = isHovered ? 'underline' : 'none'
        baseStyle.textUnderlineOffset = '4px'
        break
    }

    return baseStyle
  }

  const iconStyle = {
    pointerEvents: 'none',
    width: '1rem',
    height: '1rem',
    flexShrink: 0
  }

  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      ref={buttonRef}
      data-slot="button"
      style={getButtonStyle()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...props}
    />
  )
}

export { Button }