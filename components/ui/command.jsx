'use client'

import * as React from 'react'
import { Command as CommandPrimitive } from 'cmdk'
import { SearchIcon } from 'lucide-react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

function Command({
  className,
  ...props
}) {
  const commandStyle = {
    backgroundColor: 'var(--popover)',
    color: 'var(--popover-foreground)',
    display: 'flex',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    overflow: 'hidden',
    borderRadius: '0.375rem'
  }

  return (
    <CommandPrimitive
      data-slot="command"
      style={commandStyle}
      {...props}
    />
  )
}

function CommandDialog({
  title = 'Command Palette',
  description = 'Search for a command to run...',
  children,
  className,
  showCloseButton = true,
  ...props
}) {
  const dialogContentStyle = {
    overflow: 'hidden',
    padding: 0
  }

  const commandStyle = {
    '--input-wrapper-height': '3rem',
    '--input-height': '3rem'
  }

  return (
    <Dialog {...props}>
      <DialogHeader style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        style={dialogContentStyle}
        showCloseButton={showCloseButton}
      >
        <Command style={commandStyle}>
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

function CommandInput({
  className,
  ...props
}) {
  const inputWrapperStyle = {
    display: 'flex',
    height: '2.25rem',
    alignItems: 'center',
    gap: '0.5rem',
    borderBottom: '1px solid var(--border)',
    padding: '0 0.75rem'
  }

  const iconStyle = {
    width: '1rem',
    height: '1rem',
    flexShrink: 0,
    opacity: 0.5
  }

  const inputStyle = {
    flex: 1,
    height: '2.5rem',
    width: '100%',
    borderRadius: '0.375rem',
    backgroundColor: 'transparent',
    padding: '0.75rem 0',
    fontSize: '0.875rem',
    outline: 'none',
    border: 'none'
  }

  const placeholderStyle = {
    color: 'var(--muted-foreground)'
  }

  return (
    <div
      data-slot="command-input-wrapper"
      style={inputWrapperStyle}
    >
      <SearchIcon style={iconStyle} />
      <CommandPrimitive.Input
        data-slot="command-input"
        style={inputStyle}
        placeholderStyle={placeholderStyle}
        {...props}
      />
    </div>
  )
}

function CommandList({
  className,
  ...props
}) {
  const listStyle = {
    maxHeight: '300px',
    scrollPadding: '0.25rem',
    overflowX: 'hidden',
    overflowY: 'auto'
  }

  return (
    <CommandPrimitive.List
      data-slot="command-list"
      style={listStyle}
      {...props}
    />
  )
}

function CommandEmpty({
  ...props
}) {
  const emptyStyle = {
    padding: '1.5rem 0',
    textAlign: 'center',
    fontSize: '0.875rem'
  }

  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      style={emptyStyle}
      {...props}
    />
  )
}

function CommandGroup({
  className,
  ...props
}) {
  const groupStyle = {
    color: 'var(--foreground)',
    overflow: 'hidden',
    padding: '0.25rem'
  }

  const headingStyle = {
    color: 'var(--muted-foreground)',
    padding: '0.5rem 0.5rem',
    fontSize: '0.75rem',
    fontWeight: '500'
  }

  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      style={groupStyle}
      {...props}
    />
  )
}

function CommandSeparator({
  className,
  ...props
}) {
  const separatorStyle = {
    backgroundColor: 'var(--border)',
    marginLeft: '-0.25rem',
    marginRight: '-0.25rem',
    height: '1px'
  }

  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      style={separatorStyle}
      {...props}
    />
  )
}

function CommandItem({
  className,
  ...props
}) {
  const [isSelected, setIsSelected] = React.useState(false)
  const [isDisabled, setIsDisabled] = React.useState(false)

  React.useEffect(() => {
    if (props['data-selected'] !== undefined) {
      setIsSelected(props['data-selected'])
    }
    if (props['data-disabled'] !== undefined) {
      setIsDisabled(props['data-disabled'])
    }
  }, [props['data-selected'], props['data-disabled']])

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
    opacity: isDisabled ? 0.5 : 1
  }

  if (isSelected) {
    itemStyle.backgroundColor = 'var(--accent)'
    itemStyle.color = 'var(--accent-foreground)'
  }

  const iconStyle = {
    pointerEvents: 'none',
    flexShrink: 0,
    width: '1rem',
    height: '1rem',
    color: 'var(--muted-foreground)'
  }

  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      style={itemStyle}
      {...props}
    />
  )
}

function CommandShortcut({
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
      data-slot="command-shortcut"
      style={shortcutStyle}
      {...props}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}