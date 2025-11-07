import { Slot } from '@radix-ui/react-slot'
import { Separator } from '@/components/ui/separator'

function ButtonGroup({
  className,
  orientation = 'horizontal',
  ...props
}) {
  const getGroupStyle = () => {
    const baseStyle = {
      display: 'flex',
      width: 'fit-content',
      alignItems: 'stretch'
    }

    if (orientation === 'horizontal') {
      baseStyle.flexDirection = 'row'
    } else {
      baseStyle.flexDirection = 'column'
    }

    return baseStyle
  }

  const getChildStyles = () => {
    const childStyles = {
      focusVisible: {
        zIndex: 10,
        position: 'relative'
      },
      selectTrigger: {
        width: 'fit-content'
      },
      input: {
        flex: 1
      }
    }

    if (orientation === 'horizontal') {
      childStyles.notFirstChild = {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderLeft: 'none'
      }
      childStyles.notLastChild = {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      }
    } else {
      childStyles.notFirstChild = {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderTop: 'none'
      }
      childStyles.notLastChild = {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      }
    }

    return childStyles
  }

  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      style={getGroupStyle()}
      {...props}
    />
  )
}

function ButtonGroupText({
  className,
  asChild = false,
  ...props
}) {
  const textStyle = {
    backgroundColor: 'var(--muted)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    borderRadius: '0.375rem',
    border: '1px solid var(--border)',
    padding: '0 1rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
  }

  const iconStyle = {
    pointerEvents: 'none',
    width: '1rem',
    height: '1rem'
  }

  const Comp = asChild ? Slot : 'div'

  return (
    <Comp
      style={textStyle}
      {...props}
    />
  )
}

function ButtonGroupSeparator({
  className,
  orientation = 'vertical',
  ...props
}) {
  const separatorStyle = {
    backgroundColor: 'var(--input)',
    position: 'relative',
    margin: 0,
    alignSelf: 'stretch'
  }

  if (orientation === 'vertical') {
    separatorStyle.height = 'auto'
  }

  return (
    <Separator
      data-slot="button-group-separator"
      orientation={orientation}
      style={separatorStyle}
      {...props}
    />
  )
}

export {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
}