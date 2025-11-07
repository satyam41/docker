'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

function Table({ className, ...props }) {
  return (
    <div
      data-slot="table-container"
      className="table-container"
    >
      <table
        data-slot="table"
        className={cn('table', className)}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }) {
  return (
    <thead
      data-slot="table-header"
      className={cn('table-header', className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }) {
  return (
    <tbody
      data-slot="table-body"
      className={cn('table-body', className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn('table-footer', className)}
      {...props}
    />
  )
}

function TableRow({ className, ...props }) {
  return (
    <tr
      data-slot="table-row"
      className={cn('table-row', className)}
      {...props}
    />
  )
}

function TableHead({ className, ...props }) {
  return (
    <th
      data-slot="table-head"
      className={cn('table-head', className)}
      {...props}
    />
  )
}

function TableCell({ className, ...props }) {
  return (
    <td
      data-slot="table-cell"
      className={cn('table-cell', className)}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}) {
  return (
    <caption
      data-slot="table-caption"
      className={cn('table-caption', className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}

// Internal CSS
const styles = `
.table-container {
  position: relative;
  width: 100%;
  overflow-x: auto;
}

.table {
  width: 100%;
  font-size: 0.875rem;
  caption-side: bottom;
}

.table-header tr {
  border-bottom: 1px solid;
}

.table-body tr:last-child {
  border-bottom-width: 0;
}

.table-footer {
  background-color: hsl(var(--muted) / 0.5);
  border-top: 1px solid;
  font-weight: 500;
}

.table-footer tr:last-child {
  border-bottom-width: 0;
}

.table-row {
  border-bottom: 1px solid;
  transition: background-color;
}

.table-row:hover {
  background-color: hsl(var(--muted) / 0.5);
}

.table-row[data-state="selected"] {
  background-color: hsl(var(--muted));
}

.table-head {
  color: hsl(var(--foreground));
  height: 2.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  text-align: left;
  vertical-align: middle;
  font-weight: 500;
  white-space: nowrap;
}

.table-head:has([role=checkbox]) {
  padding-right: 0;
}

.table-head [role=checkbox] {
  transform: translateY(2px);
}

.table-cell {
  padding: 0.5rem;
  vertical-align: middle;
  white-space: nowrap;
}

.table-cell:has([role=checkbox]) {
  padding-right: 0;
}

.table-cell [role=checkbox] {
  transform: translateY(2px);
}

.table-caption {
  color: hsl(var(--muted-foreground));
  margin-top: 1rem;
  font-size: 0.875rem;
}
`

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}