'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

import { cn } from '@/lib/utils'

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max],
  )

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        'slider-root',
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className="slider-track"
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className="slider-range"
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="slider-thumb"
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider }

// Internal CSS
const styles = `
.slider-root {
  position: relative;
  display: flex;
  width: 100%;
  touch-action: none;
  user-select: none;
  align-items: center;
}

.slider-root[data-disabled] {
  opacity: 0.5;
}

.slider-root[data-orientation="vertical"] {
  height: 100%;
  min-height: 11rem;
  width: auto;
  flex-direction: column;
}

.slider-track {
  background-color: hsl(var(--muted));
  position: relative;
  flex-grow: 1;
  overflow: hidden;
  border-radius: 9999px;
}

.slider-track[data-orientation="horizontal"] {
  height: 0.375rem;
  width: 100%;
}

.slider-track[data-orientation="vertical"] {
  height: 100%;
  width: 0.375rem;
}

.slider-range {
  background-color: hsl(var(--primary));
  position: absolute;
}

.slider-range[data-orientation="horizontal"] {
  height: 100%;
}

.slider-range[data-orientation="vertical"] {
  width: 100%;
}

.slider-thumb {
  display: block;
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  border-radius: 9999px;
  border: 1px solid hsl(var(--primary));
  background-color: white;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  transition: color, box-shadow;
}

.slider-thumb:hover {
  box-shadow: 0 0 0 4px hsl(var(--ring) / 0.5);
}

.slider-thumb:focus-visible {
  box-shadow: 0 0 0 4px hsl(var(--ring) / 0.5);
  outline: none;
}

.slider-thumb:disabled {
  pointer-events: none;
  opacity: 0.5;
}
`

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}