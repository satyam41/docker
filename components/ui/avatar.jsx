'use client'

import * as React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'

function Avatar({
  className,
  ...props
}) {
  const avatarStyle = {
    position: 'relative',
    display: 'flex',
    width: '2rem',
    height: '2rem',
    flexShrink: 0,
    overflow: 'hidden',
    borderRadius: '50%'
  }

  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      style={avatarStyle}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}) {
  const imageStyle = {
    aspectRatio: '1 / 1',
    width: '100%',
    height: '100%'
  }

  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      style={imageStyle}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}) {
  const fallbackStyle = {
    backgroundColor: 'var(--muted)',
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%'
  }

  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      style={fallbackStyle}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }