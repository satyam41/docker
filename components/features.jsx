'use client'

import { Lock, FileText, Share2, Zap, BarChart3, Bell } from "lucide-react"
import { useState, useRef, useEffect } from "react"

const features = [
  {
    icon: Lock,
    title: "Military-Grade Encryption",
    description: "Your documents are protected with end-to-end encryption and multi-layer authentication.",
  },
  {
    icon: FileText,
    title: "Centralized Storage",
    description: "Store tax files, government IDs, licenses, and all official documents in one secure place.",
  },
  {
    icon: Share2,
    title: "Easy Access",
    description: "Access your documents anytime, anywhere. No paperwork, no hassle, all digital.",
  },
  {
    icon: Zap,
    title: "Instant Upload",
    description: "Upload documents in seconds. Automatic organization and categorization included.",
  },
  {
    icon: BarChart3,
    title: "Admin Dashboard",
    description: "Administrators can monitor, verify, and manage user documents with full control.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Get alerts for document expiration, renewal dates, and important updates.",
  },
]

export default function Features() {
  const [isDesktop, setIsDesktop] = useState(false)
  const sectionRef = useRef(null)

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

  const FeatureCard = ({ feature, index }) => {
    const [isHovered, setIsHovered] = useState(false)
    const Icon = feature.icon

    const cardStyle = {
      padding: '2rem',
      borderRadius: '0.75rem',
      backgroundColor: 'var(--card)',
      border: `1px solid ${isHovered ? 'var(--secondary)/0.5' : 'var(--border)'}`,
      transition: 'all 0.3s ease',
      boxShadow: isHovered ? '0 10px 25px rgba(0, 0, 0, 0.1)' : 'none',
      cursor: 'pointer'
    }

    const iconContainerStyle = {
      width: '3rem',
      height: '3rem',
      borderRadius: '0.5rem',
      backgroundColor: isHovered ? 'var(--secondary)/0.3' : 'var(--secondary)/0.2',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1rem',
      transition: 'background-color 0.3s ease'
    }

    return (
      <div
        key={index}
        style={cardStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={iconContainerStyle}>
          <Icon style={iconStyle} />
        </div>
        <h4 style={featureTitleStyle}>{feature.title}</h4>
        <p style={featureDescriptionStyle}>{feature.description}</p>
      </div>
    )
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isDesktop ? 'repeat(3, 1fr)' : 'repeat(1, 1fr)',
    gap: '2rem'
  }

  return (
    <section id="features" ref={sectionRef} style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h3 style={subtitleStyle}>Features</h3>
          <h2 style={titleStyle}>
            Everything You Need for Document Management
          </h2>
          <p style={descriptionStyle}>
            A complete suite of tools designed to simplify your document management and reduce paperwork.
          </p>
        </div>

        <div style={gridStyle}>
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
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
  color: 'var(--foreground)',
  marginBottom: '1rem',
  textWrap: 'balance'
}

const descriptionStyle = {
  fontSize: '1.125rem',
  color: 'var(--muted-foreground)',
  maxWidth: '32rem',
  marginLeft: 'auto',
  marginRight: 'auto',
  textWrap: 'balance'
}

const iconStyle = {
  width: '1.5rem',
  height: '1.5rem',
  color: 'var(--secondary)'
}

const featureTitleStyle = {
  fontSize: '1.125rem',
  fontWeight: '600',
  color: '#000',
  marginBottom: '0.75rem'
}

const featureDescriptionStyle = {
  color: 'var(--muted-foreground)',
  lineHeight: '1.625'
}