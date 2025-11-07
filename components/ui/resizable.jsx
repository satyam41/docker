'use client'

import * as React from 'react'
import { GripVerticalIcon } from 'lucide-react'
import * as ResizablePrimitive from 'react-resizable-panels'

import { cn } from '@/lib/utils'

function ResizablePanelGroup({
  className,
  ...props
}) {
  return (
    <ResizablePrimitive.PanelGroup
      data-slot="resizable-panel-group"
      className={cn(
        'resizable-panel-group',
        className,
      )}
      {...props}
    />
  )
}

function ResizablePanel({
  ...props
}) {
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}) {
  return (
    <ResizablePrimitive.PanelResizeHandle
      data-slot="resizable-handle"
      className={cn(
        'resizable-handle',
        className,
      )}
      {...props}
    >
      {withHandle && (
        <div className="resizable-handle-grip">
          <GripVerticalIcon className="size-2.5" />
        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
  )
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }

const styles = `
.resizable-panel-group {
  display: flex;
  height: 100%;
  width: 100%;
}

.resizable-panel-group[data-panel-group-direction="vertical"] {
  flex-direction: column;
}

.resizable-handle {
  background-color: #e5e7eb;
  position: relative;
  width: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.resizable-handle:focus-visible {
  box-shadow: 0 0 0 1px #3b82f6;
  outline: none;
}

.resizable-handle::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 0.25rem;
  transform: translateX(-50%);
}

.resizable-handle[data-panel-group-direction="vertical"] {
  height: 1px;
  width: 100%;
}

.resizable-handle[data-panel-group-direction="vertical"]::after {
  top: 0;
  left: 0;
  height: 0.25rem;
  width: 100%;
  transform: translateY(-50%);
}

.resizable-handle[data-panel-group-direction="vertical"] > div {
  transform: rotate(90deg);
}

.resizable-handle-grip {
  background-color: #e5e7eb;
  z-index: 10;
  display: flex;
  height: 1rem;
  width: 0.75rem;
  align-items: center;
  justify-content: center;
  border: 1px solid #e5e7eb;
  border-radius: 2px;
}
`

// Inject styles into document head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}