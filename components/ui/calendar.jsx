'use client'

import * as React from 'react'
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'lucide-react'
import { DayButton, DayPicker, getDefaultClassNames } from 'react-day-picker'

import { Button } from '@/components/ui/button'

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = 'label',
  buttonVariant = 'ghost',
  formatters,
  components,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames()

  const getCalendarStyles = () => {
    const styles = {
      root: {
        backgroundColor: 'var(--background)',
        padding: '0.75rem',
        '--cell-size': 'var(--spacing-8)'
      },
      months: {
        display: 'flex',
        gap: '1rem',
        flexDirection: 'column'
      },
      month: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        gap: '1rem'
      },
      nav: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.25rem',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        justifyContent: 'space-between'
      },
      button_previous: {
        width: 'var(--cell-size)',
        height: 'var(--cell-size)',
        padding: 0,
        userSelect: 'none'
      },
      button_next: {
        width: 'var(--cell-size)',
        height: 'var(--cell-size)',
        padding: 0,
        userSelect: 'none'
      },
      month_caption: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'var(--cell-size)',
        width: '100%',
        paddingLeft: 'var(--cell-size)',
        paddingRight: 'var(--cell-size)'
      },
      dropdowns: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        fontSize: '0.875rem',
        fontWeight: '500',
        justifyContent: 'center',
        height: 'var(--cell-size)',
        gap: '0.375rem'
      },
      dropdown_root: {
        position: 'relative',
        border: '1px solid var(--input)',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        borderRadius: '0.375rem'
      },
      dropdown: {
        position: 'absolute',
        backgroundColor: 'var(--popover)',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0
      },
      caption_label: {
        userSelect: 'none',
        fontWeight: '500',
        fontSize: '0.875rem'
      },
      table: {
        width: '100%',
        borderCollapse: 'collapse'
      },
      weekdays: {
        display: 'flex'
      },
      weekday: {
        color: 'var(--muted-foreground)',
        borderRadius: '0.375rem',
        flex: 1,
        fontWeight: '400',
        fontSize: '0.8rem',
        userSelect: 'none'
      },
      week: {
        display: 'flex',
        width: '100%',
        marginTop: '0.5rem'
      },
      week_number_header: {
        userSelect: 'none',
        width: 'var(--cell-size)'
      },
      week_number: {
        fontSize: '0.8rem',
        userSelect: 'none',
        color: 'var(--muted-foreground)'
      },
      day: {
        position: 'relative',
        width: '100%',
        height: '100%',
        padding: 0,
        textAlign: 'center',
        aspectRatio: '1 / 1',
        userSelect: 'none'
      },
      range_start: {
        borderTopLeftRadius: '0.375rem',
        borderBottomLeftRadius: '0.375rem',
        backgroundColor: 'var(--accent)'
      },
      range_middle: {
        borderRadius: 0
      },
      range_end: {
        borderTopRightRadius: '0.375rem',
        borderBottomRightRadius: '0.375rem',
        backgroundColor: 'var(--accent)'
      },
      today: {
        backgroundColor: 'var(--accent)',
        color: 'var(--accent-foreground)',
        borderRadius: '0.375rem'
      },
      outside: {
        color: 'var(--muted-foreground)'
      },
      disabled: {
        color: 'var(--muted-foreground)',
        opacity: 0.5
      },
      hidden: {
        visibility: 'hidden'
      }
    }

    return styles
  }

  const styles = getCalendarStyles()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      style={styles.root}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString('default', { month: 'short' }),
        ...formatters,
      }}
      classNames={{
        root: 'w-fit',
        months: 'flex gap-4 flex-col md:flex-row relative',
        month: 'flex flex-col w-full gap-4',
        nav: 'flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between',
        button_previous: 'size-(--cell-size) aria-disabled:opacity-50 p-0 select-none',
        button_next: 'size-(--cell-size) aria-disabled:opacity-50 p-0 select-none',
        month_caption: 'flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)',
        dropdowns: 'w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5',
        dropdown_root: 'relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md',
        dropdown: 'absolute bg-popover inset-0 opacity-0',
        caption_label: 'select-none font-medium',
        table: 'w-full border-collapse',
        weekdays: 'flex',
        weekday: 'text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none',
        week: 'flex w-full mt-2',
        week_number_header: 'select-none w-(--cell-size)',
        week_number: 'text-[0.8rem] select-none text-muted-foreground',
        day: 'relative w-full h-full p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none',
        range_start: 'rounded-l-md bg-accent',
        range_middle: 'rounded-none',
        range_end: 'rounded-r-md bg-accent',
        today: 'bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none',
        outside: 'text-muted-foreground aria-selected:text-muted-foreground',
        disabled: 'text-muted-foreground opacity-50',
        hidden: 'invisible',
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              style={{ width: 'fit-content' }}
              {...props}
            />
          )
        },
        Chevron: ({ className, orientation, ...props }) => {
          const iconStyle = {
            width: '1rem',
            height: '1rem'
          }

          if (orientation === 'left') {
            return (
              <ChevronLeftIcon style={iconStyle} {...props} />
            )
          }

          if (orientation === 'right') {
            return (
              <ChevronRightIcon style={iconStyle} {...props} />
            )
          }

          return (
            <ChevronDownIcon style={iconStyle} {...props} />
          )
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div style={{
                display: 'flex',
                width: 'var(--cell-size)',
                height: 'var(--cell-size)',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
              }}>
                {children}
              </div>
            </td>
          )
        },
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}) {
  const ref = React.useRef(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  const buttonStyle = {
    aspectRatio: '1 / 1',
    width: 'auto',
    minWidth: 'var(--cell-size)',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
    lineHeight: 'none',
    fontWeight: '400'
  }

  const spanStyle = {
    fontSize: '0.75rem',
    opacity: 0.7
  }

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      style={buttonStyle}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }