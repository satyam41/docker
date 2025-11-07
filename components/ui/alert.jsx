import * as React from 'react'

function Alert({
  className,
  variant = 'default',
  ...props
}) {
  const [hasIcon, setHasIcon] = React.useState(false)
  const alertRef = React.useRef(null)

  React.useEffect(() => {
    if (alertRef.current) {
      const hasSvg = alertRef.current.querySelector('svg')
      setHasIcon(!!hasSvg)
    }
  }, [])

  const getAlertStyle = () => {
    const baseStyle = {
      position: 'relative',
      width: '100%',
      borderRadius: '0.5rem',
      border: '1px solid var(--border)',
      padding: '0.75rem 1rem',
      fontSize: '0.875rem',
      display: 'grid',
      gap: '0.125rem',
      alignItems: 'flex-start'
    }

    // Handle grid columns based on icon presence
    if (hasIcon) {
      baseStyle.gridTemplateColumns = 'calc(1rem) 1fr',
      baseStyle.gap = '0 0.75rem'
    } else {
      baseStyle.gridTemplateColumns = '0 1fr'
    }

    // Handle variant styles
    if (variant === 'default') {
      baseStyle.backgroundColor = 'var(--card)',
      baseStyle.color = 'var(--card-foreground)'
    } else if (variant === 'destructive') {
      baseStyle.backgroundColor = 'var(--card)',
      baseStyle.color = 'var(--destructive)'
    }

    return baseStyle
  }

  const iconStyle = {
    width: '1rem',
    height: '1rem',
    transform: 'translateY(2px)',
    color: 'currentColor'
  }

  return (
    <div
      ref={alertRef}
      data-slot="alert"
      role="alert"
      style={getAlertStyle()}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }) {
  const [hasIcon, setHasIcon] = React.useState(false)
  const titleRef = React.useRef(null)

  React.useEffect(() => {
    if (titleRef.current) {
      const alert = titleRef.current.closest('[data-slot="alert"]')
      if (alert) {
        const hasSvg = alert.querySelector('svg')
        setHasIcon(!!hasSvg)
      }
    }
  }, [])

  const titleStyle = {
    gridColumnStart: hasIcon ? 2 : 1,
    minHeight: '1rem',
    fontWeight: '500',
    letterSpacing: '-0.025em',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical'
  }

  return (
    <div
      ref={titleRef}
      data-slot="alert-title"
      style={titleStyle}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}) {
  const [hasIcon, setHasIcon] = React.useState(false)
  const [isDestructive, setIsDestructive] = React.useState(false)
  const descRef = React.useRef(null)

  React.useEffect(() => {
    if (descRef.current) {
      const alert = descRef.current.closest('[data-slot="alert"]')
      if (alert) {
        const hasSvg = alert.querySelector('svg')
        setHasIcon(!!hasSvg)
        
        // Check if parent alert has destructive variant
        const isDestructiveAlert = alert.style.color === 'var(--destructive)' || 
                                 alert.getAttribute('data-variant') === 'destructive'
        setIsDestructive(isDestructiveAlert)
      }
    }
  }, [])

  const descriptionStyle = {
    color: isDestructive ? 'var(--destructive)/0.9' : 'var(--muted-foreground)',
    gridColumnStart: hasIcon ? 2 : 1,
    display: 'grid',
    justifyItems: 'start',
    gap: '0.25rem',
    fontSize: '0.875rem'
  }

  const paragraphStyle = {
    lineHeight: '1.625'
  }

  return (
    <div
      ref={descRef}
      data-slot="alert-description"
      style={descriptionStyle}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }