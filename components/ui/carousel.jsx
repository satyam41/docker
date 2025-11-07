'use client'

import * as React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

const CarouselContext = React.createContext(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />')
  }

  return context
}

function Carousel({
  orientation = 'horizontal',
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === 'horizontal' ? 'x' : 'y',
    },
    plugins,
  )
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((api) => {
    if (!api) return
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handleKeyDown = React.useCallback(
    (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        scrollPrev()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        scrollNext()
      }
    },
    [scrollPrev, scrollNext],
  )

  React.useEffect(() => {
    if (!api || !setApi) return
    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on('reInit', onSelect)
    api.on('select', onSelect)

    return () => {
      api?.off('select', onSelect)
    }
  }, [api, onSelect])

  const containerStyle = {
    position: 'relative'
  }

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation: orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        style={containerStyle}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function CarouselContent({ className, ...props }) {
  const { carouselRef, orientation } = useCarousel()

  const contentContainerStyle = {
    overflow: 'hidden'
  }

  const contentStyle = {
    display: 'flex'
  }

  if (orientation === 'horizontal') {
    contentStyle.marginLeft = '-1rem'
  } else {
    contentStyle.marginTop = '-1rem'
    contentStyle.flexDirection = 'column'
  }

  return (
    <div
      ref={carouselRef}
      style={contentContainerStyle}
      data-slot="carousel-content"
    >
      <div
        style={contentStyle}
        {...props}
      />
    </div>
  )
}

function CarouselItem({ className, ...props }) {
  const { orientation } = useCarousel()

  const itemStyle = {
    minWidth: 0,
    flexShrink: 0,
    flexGrow: 0,
    flexBasis: '100%'
  }

  if (orientation === 'horizontal') {
    itemStyle.paddingLeft = '1rem'
  } else {
    itemStyle.paddingTop = '1rem'
  }

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      style={itemStyle}
      {...props}
    />
  )
}

function CarouselPrevious({
  className,
  variant = 'outline',
  size = 'icon',
  ...props
}) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  const buttonStyle = {
    position: 'absolute',
    width: '2rem',
    height: '2rem',
    borderRadius: '50%'
  }

  if (orientation === 'horizontal') {
    buttonStyle.top = '50%'
    buttonStyle.left = '-3rem'
    buttonStyle.transform = 'translateY(-50%)'
  } else {
    buttonStyle.top = '-3rem'
    buttonStyle.left = '50%'
    buttonStyle.transform = 'translateX(-50%) rotate(90deg)'
  }

  const iconStyle = {
    width: '1rem',
    height: '1rem'
  }

  const srOnlyStyle = {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: 0
  }

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      style={buttonStyle}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft style={iconStyle} />
      <span style={srOnlyStyle}>Previous slide</span>
    </Button>
  )
}

function CarouselNext({
  className,
  variant = 'outline',
  size = 'icon',
  ...props
}) {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  const buttonStyle = {
    position: 'absolute',
    width: '2rem',
    height: '2rem',
    borderRadius: '50%'
  }

  if (orientation === 'horizontal') {
    buttonStyle.top = '50%'
    buttonStyle.right = '-3rem'
    buttonStyle.transform = 'translateY(-50%)'
  } else {
    buttonStyle.bottom = '-3rem'
    buttonStyle.left = '50%'
    buttonStyle.transform = 'translateX(-50%) rotate(90deg)'
  }

  const iconStyle = {
    width: '1rem',
    height: '1rem'
  }

  const srOnlyStyle = {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: 0
  }

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      style={buttonStyle}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight style={iconStyle} />
      <span style={srOnlyStyle}>Next slide</span>
    </Button>
  )
}

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}