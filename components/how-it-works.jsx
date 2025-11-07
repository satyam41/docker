'use client'

import { Upload, Origami as Organize, Brackets as Access } from "lucide-react"
import { useState, useEffect } from "react"

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Sign Up & Verify",
    description: "Create your secure account with email verification and strong authentication setup.",
  },
  {
    number: "02",
    icon: Upload,
    title: "Upload Documents",
    description: "Upload your government documents, tax files, licenses, and official records.",
  },
  {
    number: "03",
    icon: Organize,
    title: "Organize & Categorize",
    description: "Our system automatically organizes documents. Add tags and notes for easy search.",
  },
  {
    number: "04",
    icon: Access,
    title: "Access Anywhere",
    description: "Access your documents securely from any device, anytime you need them.",
  },
]

export default function HowItWorks() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.matchMedia('(min-width: 768px)').matches)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => {
      window.removeEventListener('resize', checkScreenSize)
    }
  }, [])

  const StepCard = ({ step, index, isLast }) => {
    const [isHovered, setIsHovered] = useState(false)
    const Icon = step.icon

    const cardStyle = {
      position: 'relative',
      backgroundColor: 'var(--card)',
      border: `1px solid ${isHovered ? 'var(--secondary)/0.5' : 'var(--border)'}`,
      borderRadius: '0.75rem',
      padding: '2rem',
      textAlign: 'center',
      transition: 'border-color 0.3s ease'
    }

    const connectionLineStyle = {
      display: isDesktop && !isLast ? 'block' : 'none',
      position: 'absolute',
      top: '4rem',
      left: '60%',
      right: '-60%',
      height: '2px',
      background: 'linear-gradient(to right, var(--secondary), var(--accent)/0.3)'
    }

    return (
      <div style={{ position: 'relative' }}>
        {!isLast && <div style={connectionLineStyle} />}
        
        <div 
          style={cardStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div style={numberCircleStyle}>
            {step.number}
          </div>
          <Icon style={iconStyle} />
          <h4 style={titleStyle}>{step.title}</h4>
          <p style={descriptionStyle}>{step.description}</p>
        </div>
      </div>
    )
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isDesktop ? 'repeat(4, 1fr)' : 'repeat(1, 1fr)',
    gap: '1.5rem'
  }

  return (
    <section id="how-it-works" style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h3 style={subtitleStyle}>Process</h3>
          <h2 style={titleStyle1}>
            Simple Steps to Secure Your Documents
          </h2>
          <p style={headerDescriptionStyle}>
            Get started with Docker in just four easy steps.
          </p>
        </div>

        <div style={gridStyle}>
          {steps.map((step, index) => (
            <StepCard 
              key={index} 
              step={step} 
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Internal CSS styles
const sectionStyle = {
  padding: '5rem 1rem',
  backgroundColor: 'var(--background)'
}

const containerStyle = {
  maxWidth: '80rem',
  marginLeft: 'auto',
  marginRight: 'auto'
}

const headerStyle = {
  textAlign: 'center',
  marginBottom: '4rem'
}

const subtitleStyle = {
  fontSize: '0.875rem',
  fontWeight: '600',
  color: '#fff',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  marginBottom: '0.5rem'
}

const titleStyle = {
  fontSize: '2.25rem',
  fontWeight: 'bold',
  color: '#141212',
  marginBottom: '1rem',
  textWrap: 'balance'
}

const titleStyle1 = {
  fontSize: '2.25rem',
  fontWeight: 'bold',
  color: '#fff',
  marginBottom: '1rem',
  textWrap: 'balance'
}

const headerDescriptionStyle = {
  fontSize: '1.125rem',
  color: 'var(--muted-foreground)',
  maxWidth: '32rem',
  marginLeft: 'auto',
  marginRight: 'auto',
  textWrap: 'balance'
}

const numberCircleStyle = {
  width: '4rem',
  height: '4rem',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, var(--secondary), var(--secondary)/0.6)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 1rem auto',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#000'
}

const iconStyle = {
  width: '2rem',
  height: '2rem',
  color: 'var(--accent)',
  margin: '0 auto 1rem auto'
}

const descriptionStyle = {
  fontSize: '0.875rem',
  color: 'var(--muted-foreground)'
}