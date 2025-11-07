'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDownIcon } from 'lucide-react'

function Accordion({
  ...props
}) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}) {
  const [isLast, setIsLast] = React.useState(false)
  const itemRef = React.useRef(null)

  React.useEffect(() => {
    if (itemRef.current) {
      const parent = itemRef.current.parentElement
      if (parent && itemRef.current === parent.lastElementChild) {
        setIsLast(true)
      }
    }
  }, [])

  const itemStyle = {
    borderBottom: isLast ? 'none' : '1px solid var(--border)'
  }

  return (
    <AccordionPrimitive.Item
      ref={itemRef}
      data-slot="accordion-item"
      style={itemStyle}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}) {
  const [isHovered, setIsHovered] = React.useState(false)
  const [isFocused, setIsFocused] = React.useState(false)
  const [isDisabled, setIsDisabled] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    const checkDisabled = () => {
      setIsDisabled(props.disabled || false)
    }
    checkDisabled()
  }, [props.disabled])

  const triggerStyle = {
    display: 'flex',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '1rem',
    borderRadius: '0.375rem',
    padding: '1rem 0',
    textAlign: 'left',
    fontSize: '0.875rem',
    fontWeight: '500',
    transition: 'all 0.2s',
    outline: 'none',
    border: isFocused ? '1px solid var(--ring)' : 'none',
    boxShadow: isFocused ? '0 0 0 3px rgba(var(--ring), 0.5)' : 'none',
    background: 'none',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    textDecoration: isHovered && !isDisabled ? 'underline' : 'none',
    opacity: isDisabled ? 0.5 : 1,
    pointerEvents: isDisabled ? 'none' : 'auto'
  }

  const chevronStyle = {
    color: 'var(--muted-foreground)',
    pointerEvents: 'none',
    width: '1rem',
    height: '1rem',
    flexShrink: 0,
    transform: isOpen ? 'translateY(2px) rotate(180deg)' : 'translateY(2px)',
    transition: 'transform 0.2s'
  }

  return (
    <AccordionPrimitive.Header style={{ display: 'flex' }}>
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        style={triggerStyle}
        onMouseEnter={() => !isDisabled && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => !isDisabled && setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onPointerDown={(e) => {
          if (!isDisabled) {
            setIsOpen(!isOpen)
          }
        }}
        {...props}
      >
        {children}
        <ChevronDownIcon style={chevronStyle} />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}) {
  const [isOpen, setIsOpen] = React.useState(false)
  const contentRef = React.useRef(null)

  React.useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-state') {
          const state = contentRef.current?.getAttribute('data-state')
          setIsOpen(state === 'open')
        }
      })
    })

    if (contentRef.current) {
      observer.observe(contentRef.current, { attributes: true })
      const initialState = contentRef.current.getAttribute('data-state')
      setIsOpen(initialState === 'open')
    }

    return () => observer.disconnect()
  }, [])

  const contentStyle = {
    overflow: 'hidden',
    fontSize: '0.875rem',
    animation: isOpen ? 'accordionDown 0.2s ease-out' : 'accordionUp 0.2s ease-out'
  }

  const contentInnerStyle = {
    paddingTop: 0,
    paddingBottom: '1rem'
  }

  // Inject keyframes
  React.useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes accordionDown {
        from {
          height: 0;
          opacity: 0;
        }
        to {
          height: var(--radix-accordion-content-height);
          opacity: 1;
        }
      }
      
      @keyframes accordionUp {
        from {
          height: var(--radix-accordion-content-height);
          opacity: 1;
        }
        to {
          height: 0;
          opacity: 0;
        }
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <AccordionPrimitive.Content
      ref={contentRef}
      data-slot="accordion-content"
      style={contentStyle}
      {...props}
    >
      <div style={contentInnerStyle}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }