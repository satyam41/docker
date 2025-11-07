'use client'

import * as React from 'react'
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react'

function ContextMenu({
  ...props
}) {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />
}

function ContextMenuTrigger({
  ...props
}) {
  return (
    <ContextMenuPrimitive.Trigger data-slot="context-menu-trigger" {...props} />
  )
}

function ContextMenuGroup({
  ...props
}) {
  return (
    <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
  )
}

function ContextMenuPortal({
  ...props
}) {
  return (
    <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
  )
}

function ContextMenuSub({
  ...props
}) {
  return <ContextMenuPrimitive.Sub data-slot="context-menu-sub" {...props} />
}

function ContextMenuRadioGroup({
  ...props
}) {
  return (
    <ContextMenuPrimitive.RadioGroup
      data-slot="context-menu-radio-group"
      {...props}
    />
  )
}

function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isFocused, setIsFocused] = React.useState(false)

  const subTriggerStyle = {
    display: 'flex',
    cursor: 'default',
    alignItems: 'center',
    borderRadius: '0.125rem',
    padding: '0.375rem 0.5rem',
    fontSize: '0.875rem',
    outline: 'none',
    userSelect: 'none',
    paddingLeft: inset ? '2rem' : '0.5rem'
  }

  if (isFocused || isOpen) {
    subTriggerStyle.backgroundColor = 'var(--accent)'
    subTriggerStyle.color = 'var(--accent-foreground)'
  }

  const iconStyle = {
    pointerEvents: 'none',
    flexShrink: 0,
    width: '1rem',
    height: '1rem',
    color: 'var(--muted-foreground)'
  }

  const chevronStyle = {
    marginLeft: 'auto'
  }

  return (
    <ContextMenuPrimitive.SubTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      style={subTriggerStyle}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onPointerDown={() => setIsOpen(!isOpen)}
      {...props}
    >
      {children}
      <ChevronRightIcon style={{...iconStyle, ...chevronStyle}} />
    </ContextMenuPrimitive.SubTrigger>
  )
}

function ContextMenuSubContent({
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

    return () => observer.disconnect()
  }, [props])

  const subContentStyle = {
    backgroundColor: 'var(--popover)',
    color: 'var(--popover-foreground)',
    zIndex: 50,
    minWidth: '8rem',
    overflow: 'hidden',
    borderRadius: '0.375rem',
    border: '1px solid var(--border)',
    padding: '0.25rem',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
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
          transform: scale(0.95);
        }
        to { 
          opacity: 1;
          transform: scale(1);
        }
      }
      @keyframes zoomOut {
        from { 
          opacity: 1;
          transform: scale(1);
        }
        to { 
          opacity: 0;
          transform: scale(0.95);
        }
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <ContextMenuPrimitive.SubContent
      data-slot="context-menu-sub-content"
      style={subContentStyle}
      {...props}
    />
  )
}

function ContextMenuContent({
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

    return () => observer.disconnect()
  }, [props])

  const contentStyle = {
    backgroundColor: 'var(--popover)',
    color: 'var(--popover-foreground)',
    zIndex: 50,
    maxHeight: 'var(--radix-context-menu-content-available-height)',
    minWidth: '8rem',
    overflowX: 'hidden',
    overflowY: 'auto',
    borderRadius: '0.375rem',
    border: '1px solid var(--border)',
    padding: '0.25rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    animation: isOpen ? 
      'fadeIn 0.15s ease-out, zoomIn 0.15s ease-out' : 
      'fadeOut 0.15s ease-out, zoomOut 0.15s ease-out'
  }

  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        data-slot="context-menu-content"
        style={contentStyle}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  )
}

function ContextMenuItem({
  className,
  inset,
  variant = 'default',
  ...props
}) {
  const [isFocused, setIsFocused] = React.useState(false)
  const [isDisabled, setIsDisabled] = React.useState(false)

  React.useEffect(() => {
    if (props['data-disabled'] !== undefined) {
      setIsDisabled(props['data-disabled'])
    }
  }, [props['data-disabled']])

  const itemStyle = {
    position: 'relative',
    display: 'flex',
    cursor: isDisabled ? 'not-allowed' : 'default',
    alignItems: 'center',
    gap: '0.5rem',
    borderRadius: '0.125rem',
    padding: '0.375rem 0.5rem',
    fontSize: '0.875rem',
    outline: 'none',
    userSelect: 'none',
    pointerEvents: isDisabled ? 'none' : 'auto',
    opacity: isDisabled ? 0.5 : 1,
    paddingLeft: inset ? '2rem' : '0.5rem'
  }

  if (isFocused) {
    itemStyle.backgroundColor = 'var(--accent)'
    itemStyle.color = 'var(--accent-foreground)'
  }

  if (variant === 'destructive') {
    itemStyle.color = 'var(--destructive)'
    if (isFocused) {
      itemStyle.backgroundColor = 'var(--destructive)/0.1'
    }
  }

  const iconStyle = {
    pointerEvents: 'none',
    flexShrink: 0,
    width: '1rem',
    height: '1rem',
    color: variant === 'destructive' ? 'var(--destructive)' : 'var(--muted-foreground)'
  }

  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-inset={inset}
      data-variant={variant}
      style={itemStyle}
      onFocus={() => !isDisabled && setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...props}
    />
  )
}

function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}) {
  const [isFocused, setIsFocused] = React.useState(false)
  const [isDisabled, setIsDisabled] = React.useState(false)

  React.useEffect(() => {
    if (props['data-disabled'] !== undefined) {
      setIsDisabled(props['data-disabled'])
    }
  }, [props['data-disabled']])

  const checkboxItemStyle = {
    position: 'relative',
    display: 'flex',
    cursor: isDisabled ? 'not-allowed' : 'default',
    alignItems: 'center',
    gap: '0.5rem',
    borderRadius: '0.125rem',
    padding: '0.375rem 0.5rem 0.375rem 2rem',
    fontSize: '0.875rem',
    outline: 'none',
    userSelect: 'none',
    pointerEvents: isDisabled ? 'none' : 'auto',
    opacity: isDisabled ? 0.5 : 1
  }

  if (isFocused) {
    checkboxItemStyle.backgroundColor = 'var(--accent)'
    checkboxItemStyle.color = 'var(--accent-foreground)'
  }

  const indicatorStyle = {
    position: 'absolute',
    left: '0.5rem',
    display: 'flex',
    width: '0.875rem',
    height: '0.875rem',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none'
  }

  const iconStyle = {
    width: '1rem',
    height: '1rem'
  }

  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      style={checkboxItemStyle}
      checked={checked}
      onFocus={() => !isDisabled && setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...props}
    >
      <span style={indicatorStyle}>
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon style={iconStyle} />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  )
}

function ContextMenuRadioItem({
  className,
  children,
  ...props
}) {
  const [isFocused, setIsFocused] = React.useState(false)
  const [isDisabled, setIsDisabled] = React.useState(false)

  React.useEffect(() => {
    if (props['data-disabled'] !== undefined) {
      setIsDisabled(props['data-disabled'])
    }
  }, [props['data-disabled']])

  const radioItemStyle = {
    position: 'relative',
    display: 'flex',
    cursor: isDisabled ? 'not-allowed' : 'default',
    alignItems: 'center',
    gap: '0.5rem',
    borderRadius: '0.125rem',
    padding: '0.375rem 0.5rem 0.375rem 2rem',
    fontSize: '0.875rem',
    outline: 'none',
    userSelect: 'none',
    pointerEvents: isDisabled ? 'none' : 'auto',
    opacity: isDisabled ? 0.5 : 1
  }

  if (isFocused) {
    radioItemStyle.backgroundColor = 'var(--accent)'
    radioItemStyle.color = 'var(--accent-foreground)'
  }

  const indicatorStyle = {
    position: 'absolute',
    left: '0.5rem',
    display: 'flex',
    width: '0.875rem',
    height: '0.875rem',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none'
  }

  const iconStyle = {
    width: '0.5rem',
    height: '0.5rem',
    fill: 'currentColor'
  }

  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      style={radioItemStyle}
      onFocus={() => !isDisabled && setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...props}
    >
      <span style={indicatorStyle}>
        <ContextMenuPrimitive.ItemIndicator>
          <CircleIcon style={iconStyle} />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  )
}

function ContextMenuLabel({
  className,
  inset,
  ...props
}) {
  const labelStyle = {
    color: 'var(--foreground)',
    padding: '0.375rem 0.5rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    paddingLeft: inset ? '2rem' : '0.5rem'
  }

  return (
    <ContextMenuPrimitive.Label
      data-slot="context-menu-label"
      data-inset={inset}
      style={labelStyle}
      {...props}
    />
  )
}

function ContextMenuSeparator({
  className,
  ...props
}) {
  const separatorStyle = {
    backgroundColor: 'var(--border)',
    marginLeft: '-0.25rem',
    marginRight: '-0.25rem',
    marginTop: '0.25rem',
    marginBottom: '0.25rem',
    height: '1px'
  }

  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      style={separatorStyle}
      {...props}
    />
  )
}

function ContextMenuShortcut({
  className,
  ...props
}) {
  const shortcutStyle = {
    color: 'var(--muted-foreground)',
    marginLeft: 'auto',
    fontSize: '0.75rem',
    letterSpacing: '0.1em'
  }

  return (
    <span
      data-slot="context-menu-shortcut"
      style={shortcutStyle}
      {...props}
    />
  )
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}