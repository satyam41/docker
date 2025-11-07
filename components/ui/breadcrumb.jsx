import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { ChevronRight, MoreHorizontal } from 'lucide-react'

function Breadcrumb({ ...props }) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />
}

function BreadcrumbList({ className, ...props }) {
  const listStyle = {
    color: 'var(--muted-foreground)',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '0.375rem',
    fontSize: '0.875rem',
    wordBreak: 'break-word'
  }

  return (
    <ol
      data-slot="breadcrumb-list"
      style={listStyle}
      {...props}
    />
  )
}

function BreadcrumbItem({ className, ...props }) {
  const itemStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.375rem'
  }

  return (
    <li
      data-slot="breadcrumb-item"
      style={itemStyle}
      {...props}
    />
  )
}

function BreadcrumbLink({
  asChild,
  className,
  ...props
}) {
  const [isHovered, setIsHovered] = React.useState(false)

  const linkStyle = {
    color: isHovered ? 'var(--foreground)' : 'var(--muted-foreground)',
    transition: 'color 0.2s',
    cursor: 'pointer'
  }

  const Comp = asChild ? Slot : 'a'

  return (
    <Comp
      data-slot="breadcrumb-link"
      style={linkStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    />
  )
}

function BreadcrumbPage({ className, ...props }) {
  const pageStyle = {
    color: 'var(--foreground)',
    fontWeight: '400'
  }

  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      style={pageStyle}
      {...props}
    />
  )
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}) {
  const separatorStyle = {
    listStyle: 'none'
  }

  const iconStyle = {
    width: '0.875rem',
    height: '0.875rem'
  }

  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      style={separatorStyle}
      {...props}
    >
      {children ?? <ChevronRight style={iconStyle} />}
    </li>
  )
}

function BreadcrumbEllipsis({
  className,
  ...props
}) {
  const ellipsisStyle = {
    display: 'flex',
    width: '2.25rem',
    height: '2.25rem',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const iconStyle = {
    width: '1rem',
    height: '1rem'
  }

  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      style={ellipsisStyle}
      {...props}
    >
      <MoreHorizontal style={iconStyle} />
      <span style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}>
        More
      </span>
    </span>
  )
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}