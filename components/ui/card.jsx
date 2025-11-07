import * as React from 'react'

function Card({ className, ...props }) {
  const cardStyle = {
    backgroundColor: 'var(--card)',
    color: 'var(--card-foreground)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    borderRadius: '0.75rem',
    border: '1px solid var(--border)',
    padding: '1.5rem 0',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
  }

  return (
    <div
      data-slot="card"
      style={cardStyle}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }) {
  const [hasCardAction, setHasCardAction] = React.useState(false)
  const headerRef = React.useRef(null)

  React.useEffect(() => {
    if (headerRef.current) {
      const hasAction = headerRef.current.querySelector('[data-slot="card-action"]')
      setHasCardAction(!!hasAction)
    }
  }, [])

  const headerStyle = {
    display: 'grid',
    gridTemplateRows: 'auto auto',
    alignItems: 'flex-start',
    gap: '0.5rem',
    padding: '0 1.5rem'
  }

  if (hasCardAction) {
    headerStyle.gridTemplateColumns = '1fr auto'
  }

  return (
    <div
      ref={headerRef}
      data-slot="card-header"
      style={headerStyle}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }) {
  const titleStyle = {
    lineHeight: '1',
    fontWeight: '600'
  }

  return (
    <div
      data-slot="card-title"
      style={titleStyle}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }) {
  const descriptionStyle = {
    color: 'var(--muted-foreground)',
    fontSize: '0.875rem'
  }

  return (
    <div
      data-slot="card-description"
      style={descriptionStyle}
      {...props}
    />
  )
}

function CardAction({ className, ...props }) {
  const actionStyle = {
    gridColumnStart: 2,
    gridRowStart: 1,
    gridRowEnd: 'span 2',
    alignSelf: 'flex-start',
    justifySelf: 'flex-end'
  }

  return (
    <div
      data-slot="card-action"
      style={actionStyle}
      {...props}
    />
  )
}

function CardContent({ className, ...props }) {
  const contentStyle = {
    padding: '0 1.5rem'
  }

  return (
    <div
      data-slot="card-content"
      style={contentStyle}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }) {
  const footerStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '0 1.5rem'
  }

  return (
    <div
      data-slot="card-footer"
      style={footerStyle}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}