'use client'

import * as React from 'react'
import * as RechartsPrimitive from 'recharts'

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: '', dark: '.dark' }

const ChartContext = React.createContext(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error('useChart must be used within a <ChartContainer />')
  }

  return context
}

function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}) {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, '')}`

  const containerStyle = {
    display: 'flex',
    aspectRatio: '16 / 9',
    justifyContent: 'center',
    fontSize: '0.75rem'
  }

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        data-chart={chartId}
        style={containerStyle}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
}

const ChartStyle = ({ id, config }) => {
  const colorConfig = Object.entries(config).filter(
    ([, config]) => config.theme || config.color,
  )

  if (!colorConfig.length) {
    return null
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme] ||
      itemConfig.color
    return color ? `  --color-${key}: ${color};` : null
  })
  .join('\n')}
}
`,
          )
          .join('\n'),
      }}
    />
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip

function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = 'dot',
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey,
}) {
  const { config } = useChart()

  const tooltipLabel = React.useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null
    }

    const [item] = payload
    const key = `${labelKey || item?.dataKey || item?.name || 'value'}`
    const itemConfig = getPayloadConfigFromPayload(config, item, key)
    const value =
      !labelKey && typeof label === 'string'
        ? config[label]?.label || label
        : itemConfig?.label

    if (labelFormatter) {
      return (
        <div style={{ fontWeight: '500' }}>
          {labelFormatter(value, payload)}
        </div>
      )
    }

    if (!value) {
      return null
    }

    return <div style={{ fontWeight: '500' }}>{value}</div>
  }, [
    label,
    labelFormatter,
    payload,
    hideLabel,
    config,
    labelKey,
  ])

  if (!active || !payload?.length) {
    return null
  }

  const nestLabel = payload.length === 1 && indicator !== 'dot'

  const tooltipStyle = {
    border: '1px solid var(--border)/0.5',
    backgroundColor: 'var(--background)',
    display: 'grid',
    minWidth: '8rem',
    alignItems: 'flex-start',
    gap: '0.375rem',
    borderRadius: '0.5rem',
    borderColor: 'var(--border)',
    padding: '0.625rem 0.625rem',
    fontSize: '0.75rem',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  }

  const payloadContainerStyle = {
    display: 'grid',
    gap: '0.375rem'
  }

  const itemStyle = {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    gap: '0.5rem'
  }

  const dotIndicatorStyle = {
    height: '0.625rem',
    width: '0.625rem',
    borderRadius: '2px',
    flexShrink: 0
  }

  const lineIndicatorStyle = {
    height: '0.625rem',
    width: '0.125rem',
    borderRadius: '2px',
    flexShrink: 0
  }

  const dashedIndicatorStyle = {
    height: '0.625rem',
    width: 0,
    border: '1.5px dashed',
    borderRadius: '2px',
    backgroundColor: 'transparent',
    flexShrink: 0
  }

  const valueContainerStyle = {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    lineHeight: '1'
  }

  const valueStyle = {
    color: 'var(--foreground)',
    fontFamily: 'monospace',
    fontWeight: '500',
    fontVariantNumeric: 'tabular-nums'
  }

  return (
    <div
      style={tooltipStyle}
    >
      {!nestLabel ? tooltipLabel : null}
      <div style={payloadContainerStyle}>
        {payload.map((item, index) => {
          const key = `${nameKey || item.name || item.dataKey || 'value'}`
          const itemConfig = getPayloadConfigFromPayload(config, item, key)
          const indicatorColor = color || item.payload.fill || item.color

          return (
            <div
              key={item.dataKey}
              style={itemStyle}
            >
              {formatter && item?.value !== undefined && item.name ? (
                formatter(item.value, item.name, item, index, item.payload)
              ) : (
                <>
                  {itemConfig?.icon ? (
                    <itemConfig.icon />
                  ) : (
                    !hideIndicator && (
                      <div
                        style={{
                          ...(indicator === 'dot' ? dotIndicatorStyle : 
                              indicator === 'line' ? lineIndicatorStyle : 
                              dashedIndicatorStyle),
                          backgroundColor: indicator === 'dot' ? indicatorColor : 'transparent',
                          borderColor: indicator !== 'dot' ? indicatorColor : 'transparent'
                        }}
                      />
                    )
                  )}
                  <div
                    style={{
                      ...valueContainerStyle,
                      alignItems: nestLabel ? 'flex-end' : 'center'
                    }}
                  >
                    <div style={{ display: 'grid', gap: '0.375rem' }}>
                      {nestLabel ? tooltipLabel : null}
                      <span style={{ color: 'var(--muted-foreground)' }}>
                        {itemConfig?.label || item.name}
                      </span>
                    </div>
                    {item.value && (
                      <span style={valueStyle}>
                        {item.value.toLocaleString()}
                      </span>
                    )}
                  </div>
                </>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

const ChartLegend = RechartsPrimitive.Legend

function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = 'bottom',
  nameKey,
}) {
  const { config } = useChart()

  if (!payload?.length) {
    return null
  }

  const legendStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    paddingTop: verticalAlign === 'top' ? 0 : '0.75rem',
    paddingBottom: verticalAlign === 'top' ? '0.75rem' : 0
  }

  const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.375rem'
  }

  const dotStyle = {
    height: '0.5rem',
    width: '0.5rem',
    borderRadius: '2px',
    flexShrink: 0
  }

  return (
    <div
      style={legendStyle}
    >
      {payload.map((item) => {
        const key = `${nameKey || item.dataKey || 'value'}`
        const itemConfig = getPayloadConfigFromPayload(config, item, key)

        return (
          <div
            key={item.value}
            style={itemStyle}
          >
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                style={{
                  ...dotStyle,
                  backgroundColor: item.color
                }}
              />
            )}
            {itemConfig?.label}
          </div>
        )
      })}
    </div>
  )
}

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(config, payload, key) {
  if (typeof payload !== 'object' || payload === null) {
    return undefined
  }

  const payloadPayload =
    'payload' in payload &&
    typeof payload.payload === 'object' &&
    payload.payload !== null
      ? payload.payload
      : undefined

  let configLabelKey = key

  if (
    key in payload &&
    typeof payload[key] === 'string'
  ) {
    configLabelKey = payload[key]
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key] === 'string'
  ) {
    configLabelKey = payloadPayload[key]
  }

  return configLabelKey in config
    ? config[configLabelKey]
    : config[key]
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
}