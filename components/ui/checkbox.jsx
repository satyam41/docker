'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from 'lucide-react'

function Checkbox({
  className,
  ...props
}) {
  const [isChecked, setIsChecked] = React.useState(props.checked || props.defaultChecked || false)
  const [isFocused, setIsFocused] = React.useState(false)
  const [isInvalid, setIsInvalid] = React.useState(false)
  const [isDisabled, setIsDisabled] = React.useState(props.disabled || false)

  React.useEffect(() => {
    // Handle checked state changes
    if (props.checked !== undefined) {
      setIsChecked(props.checked)
    }
  }, [props.checked])

  React.useEffect(() => {
    // Handle aria-invalid attribute
    if (props['aria-invalid'] === 'true' || props['aria-invalid'] === true) {
      setIsInvalid(true)
    }
  }, [props['aria-invalid']])

  React.useEffect(() => {
    // Handle disabled state
    setIsDisabled(props.disabled || false)
  }, [props.disabled])

  const getCheckboxStyle = () => {
    const baseStyle = {
      width: '1rem',
      height: '1rem',
      flexShrink: 0,
      borderRadius: '4px',
      border: '1px solid var(--input)',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      transition: 'box-shadow 0.2s',
      outline: 'none',
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      opacity: isDisabled ? 0.5 : 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }

    // Checked state
    if (isChecked) {
      baseStyle.backgroundColor = 'var(--primary)'
      baseStyle.color = 'var(--primary-foreground)'
      baseStyle.borderColor = 'var(--primary)'
    } else {
      baseStyle.backgroundColor = 'var(--input)/0.3'
    }

    // Focus state
    if (isFocused) {
      baseStyle.borderColor = 'var(--ring)'
      baseStyle.boxShadow = '0 0 0 3px var(--ring)/0.5'
    }

    // Invalid state
    if (isInvalid) {
      baseStyle.borderColor = 'var(--destructive)'
      baseStyle.boxShadow = '0 0 0 3px var(--destructive)/0.2'
    }

    return baseStyle
  }

  const indicatorStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'currentColor',
    transition: 'none'
  }

  const iconStyle = {
    width: '0.875rem',
    height: '0.875rem'
  }

  const handleStateChange = (checked) => {
    setIsChecked(checked)
    if (props.onCheckedChange) {
      props.onCheckedChange(checked)
    }
  }

  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      style={getCheckboxStyle()}
      onCheckedChange={handleStateChange}
      onFocus={() => !isDisabled && setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        style={indicatorStyle}
      >
        <CheckIcon style={iconStyle} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }