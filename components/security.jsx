'use client'

import { Shield, Lock, Eye, UserCheck } from "lucide-react"
import { useState, useEffect } from "react"

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data encrypted with AES-256 standards",
  },
  {
    icon: UserCheck,
    title: "Multi-Layer Authentication",
    description: "Two-factor authentication and biometric support",
  },
  {
    icon: Eye,
    title: "Access Control",
    description: "Granular permissions and activity monitoring",
  },
  {
    icon: Shield,
    title: "Compliance",
    description: "GDPR and government standards compliant",
  },
]

export default function Security() {
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

  const SecurityFeature = ({ feature, index }) => {
    const Icon = feature.icon

    return (
      <div key={index} style={featureStyle}>
        <div style={iconContainerStyle}>
          <Icon style={iconStyle} />
        </div>
        <div>
          <p style={featureTitleStyle}>{feature.title}</p>
          <p style={featureDescriptionStyle}>{feature.description}</p>
        </div>
      </div>
    )
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isDesktop ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)',
    gap: '3rem',
    alignItems: 'center'
  }

  const visualStyle = {
    display: isDesktop ? 'flex' : 'none',
    position: 'relative',
    height: '24rem',
    alignItems: 'center',
    justifyContent: 'center'
  }

  return (
    <section id="security" style={sectionStyle}>
      <div style={containerStyle}>
        <div style={gridStyle}>
          {/* Content */}
          <div>
            <h3 style={subtitleStyle}>Security First</h3>
            <h2 style={titleStyle}>
              Your Trust is Our Priority
            </h2>
            <p style={descriptionStyle}>
              We employ military-grade encryption, multi-layer authentication, and strict access controls to ensure your
              documents remain private and secure at all times.
            </p>
            <div style={featuresContainerStyle}>
              {securityFeatures.map((feature, index) => (
                <SecurityFeature key={index} feature={feature} index={index} />
              ))}
            </div>
          </div>

          {/* Visual */}
          <div style={visualStyle}>
            <div style={backgroundGlowStyle} />
            <div style={visualContainerStyle}>
              <div style={visualContentStyle}>
                <Shield style={shieldIconStyle} />
                <p style={visualTextStyle}>Maximum Security Enabled</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Internal CSS styles
const sectionStyle = {
  padding: '5rem 1rem',
  // background: 'linear-gradient(to bottom, var(--muted)/0.3 0%, var(--background) 100%)'
  background: '#1f1f52'
}

const containerStyle = {
  maxWidth: '80rem',
  marginLeft: 'auto',
  marginRight: 'auto'
}

const subtitleStyle = {
  fontSize: '0.875rem',
  fontWeight: '600',
  color: 'var(--secondary)',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  marginBottom: '0.5rem'
}

const titleStyle = {
  fontSize: '2.25rem',
  fontWeight: 'bold',
  color: 'var(--foreground)',
  marginBottom: '1.5rem',
  textWrap: 'balance'
}

const descriptionStyle = {
  fontSize: '1.125rem',
  color: 'var(--muted-foreground)',
  marginBottom: '2rem',
  lineHeight: '1.75',
  textWrap: 'balance'
}

const featuresContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
}

const featureStyle = {
  display: 'flex',
  gap: '1rem'
}

const iconContainerStyle = {
  flexShrink: 0,
  width: '1.5rem',
  height: '1.5rem',
  borderRadius: '50%',
  backgroundColor: 'var(--accent)/0.2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const iconStyle = {
  width: '1rem',
  height: '1rem',
  color: 'var(--accent)'
}

const featureTitleStyle = {
  fontWeight: '600',
  color: 'var(--foreground)',
  margin: 0,
  marginBottom: '0.25rem'
}

const featureDescriptionStyle = {
  fontSize: '0.875rem',
  color: 'var(--muted-foreground)',
  margin: 0
}

const backgroundGlowStyle = {
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(135deg, var(--accent)/0.1, var(--primary)/0.1)',
  borderRadius: '1rem',
  filter: 'blur(48px)'
}

const visualContainerStyle = {
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const visualContentStyle = {
  textAlign: 'center'
}

const shieldIconStyle = {
  width: '8rem',
  height: '8rem',
  color: 'var(--secondary)/0.3',
  margin: '0 auto 1rem auto'
}

const visualTextStyle = {
  color: 'var(--muted-foreground)',
  margin: 0
}