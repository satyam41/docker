'use client'

import * as React from 'react'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'

function AlertDialog({
  ...props
}) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
}

function AlertDialogTrigger({
  ...props
}) {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  )
}

function AlertDialogPortal({
  ...props
}) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  )
}

function AlertDialogOverlay({
  className,
  ...props
}) {
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-state') {
          const state = props['data-state'] || mutation.target.getAttribute('data-state')
          setIsOpen(state === 'open')
        }
      })
    })

    // This would need proper ref handling for complete implementation
    return () => observer.disconnect()
  }, [props])

  const overlayStyle = {
    position: 'fixed',
    inset: 0,
    zIndex: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    animation: isOpen ? 'fadeIn 0.15s ease-out' : 'fadeOut 0.15s ease-out'
  }

  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      style={overlayStyle}
      {...props}
    />
  )
}

function AlertDialogContent({
  className,
  ...props
}) {
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-state') {
          const state = props['data-state'] || mutation.target.getAttribute('data-state')
          setIsOpen(state === 'open')
        }
      })
    })

    // This would need proper ref handling for complete implementation
    return () => observer.disconnect()
  }, [props])

  const contentStyle = {
    backgroundColor: 'var(--background)',
    position: 'fixed',
    top: '50%',
    left: '50%',
    zIndex: 50,
    display: 'grid',
    width: '100%',
    maxWidth: 'calc(100% - 2rem)',
    transform: 'translate(-50%, -50%)',
    gap: '1rem',
    borderRadius: '0.5rem',
    border: '1px solid var(--border)',
    padding: '1.5rem',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.2s',
    animation: isOpen ? 
      'fadeIn 0.15s ease-out, zoomIn 0.15s ease-out' : 
      'fadeOut 0.15s ease-out, zoomOut 0.15s ease-out'
  }

  // Inject keyframes
  React.useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
      }
      
      @keyframes zoomIn {
        from { 
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.95);
        }
        to { 
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
      }
      
      @keyframes zoomOut {
        from { 
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
        to { 
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.95);
        }
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        style={contentStyle}
        {...props}
      />
    </AlertDialogPortal>
  )
}

function AlertDialogHeader({
  className,
  ...props
}) {
  const headerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    textAlign: 'center'
  }

  return (
    <div
      data-slot="alert-dialog-header"
      style={headerStyle}
      {...props}
    />
  )
}

function AlertDialogFooter({
  className,
  ...props
}) {
  const footerStyle = {
    display: 'flex',
    flexDirection: 'column-reverse',
    gap: '0.5rem'
  }

  // Media query for larger screens
  React.useEffect(() => {
    const checkScreenSize = () => {
      if (window.matchMedia('(min-width: 640px)').matches) {
        footerStyle.flexDirection = 'row'
        footerStyle.justifyContent = 'flex-end'
      } else {
        footerStyle.flexDirection = 'column-reverse'
        footerStyle.justifyContent = 'flex-start'
      }
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => {
      window.removeEventListener('resize', checkScreenSize)
    }
  }, [])

  return (
    <div
      data-slot="alert-dialog-footer"
      style={footerStyle}
      {...props}
    />
  )
}

function AlertDialogTitle({
  className,
  ...props
}) {
  const titleStyle = {
    fontSize: '1.125rem',
    fontWeight: '600',
    margin: 0
  }

  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      style={titleStyle}
      {...props}
    />
  )
}

function AlertDialogDescription({
  className,
  ...props
}) {
  const descriptionStyle = {
    color: 'var(--muted-foreground)',
    fontSize: '0.875rem',
    margin: 0
  }

  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      style={descriptionStyle}
      {...props}
    />
  )
}

function AlertDialogAction({
  className,
  ...props
}) {
  // This would use the button component's styles
  const actionStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    transition: 'all 0.2s',
    outline: 'none',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: 'var(--primary)',
    color: 'var(--primary-foreground)',
    padding: '0.5rem 1rem',
    height: '2.5rem'
  }

  return (
    <AlertDialogPrimitive.Action
      style={actionStyle}
      {...props}
    />
  )
}

function AlertDialogCancel({
  className,
  ...props
}) {
  // This would use the button component's outline variant styles
  const cancelStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    transition: 'all 0.2s',
    outline: 'none',
    border: '1px solid var(--input)',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    color: 'var(--foreground)',
    padding: '0.5rem 1rem',
    height: '2.5rem'
  }

  return (
    <AlertDialogPrimitive.Cancel
      style={cancelStyle}
      {...props}
    />
  )
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}