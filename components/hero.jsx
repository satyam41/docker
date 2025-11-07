"use client"

import { ArrowRight, Shield } from "lucide-react"
import { useState, useEffect } from "react"

export default function Hero() {
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

  const PrimaryButton = () => {
    const [isHovered, setIsHovered] = useState(false)

    const buttonStyle = {
      padding: '1rem 2rem',
      borderRadius: '0.5rem',
      backgroundColor: isHovered ? '#a03742ff' : 'var(--primary)',
      color: 'var(--primary-foreground)',
      border: 'none',
      cursor: 'pointer',
      fontWeight: '600',
      transition: 'background-color 0.2s',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem'
    }

    const arrowStyle = {
      width: '1.25rem',
      height: '1.25rem',
      transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
      transition: 'transform 0.2s'
    }

    return (
      <button
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Get Started
        <ArrowRight style={arrowStyle} />
      </button>
    )
  }

  const SecondaryButton = () => {
    const [isHovered, setIsHovered] = useState(false)

    const buttonStyle = {
      padding: '1rem 2rem',
      borderRadius: '0.5rem',
      border: '1px solid var(--border)',
      backgroundColor: isHovered ? 'var(--muted)' : 'var(--background)',
      color: 'var(--foreground)',
      cursor: 'pointer',
      fontWeight: '600',
      transition: 'background-color 0.2s'
    }

    return (
      <button
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Learn More
      </button>
    )
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isDesktop ? 'repeat(2, 1fr)' : 'repeat(1, 1fr)',
    gap: '3rem',
    alignItems: 'center'
  }

  const illustrationStyle = {
    display: isDesktop ? 'block' : 'none',
    position: 'relative',
    height: '24rem'
  }

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={gridStyle}>
          {/* Left Content */}
          <div>
            <div style={badgeStyle}>
              <p style={badgeTextStyle}>🔐 Enterprise Security</p>
            </div>
            <h2 style={headingStyle}>
              Your Documents,
              <span style={primaryTextStyle}> Secure & Organized</span>
            </h2>
            <p style={descriptionStyle}>
              Docker is a secure web-based platform designed to store, manage, and access your government documents, tax
              records, and official licenses in one centralized, encrypted vault.
            </p>
            <div style={buttonContainerStyle}>
              <PrimaryButton />
              <SecondaryButton />
            </div>
          </div>

          {/* Right Illustration */}
          <div style={illustrationStyle}>
            <div style={backgroundGlowStyle} />
            <div style={illustrationContainerStyle}>
              {/* Illustrated security jar */}
              <div style={jarContainerStyle}>
                {/* Floating elements */}
                <div style={{ ...floatingDotStyle, left: '2rem', top: '5rem', animationDelay: '0s' }} />
                <div style={{ ...floatingDotStyle, right: '2rem', top: '10rem', animationDelay: '0.5s' }} />
                <div style={{ ...floatingDotStyle, left: '3rem', bottom: '5rem', animationDelay: '1s' }} />
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
  background: 'linear-gradient(to bottom, var(--background) 0%, var(--background) 50%, var(--muted)/0.3 100%)'
}

const containerStyle = {
  maxWidth: '80rem',
  marginLeft: 'auto',
  marginRight: 'auto'
}

const badgeStyle = {
  display: 'inline-block',
  marginBottom: '1rem',
  padding: '0.25rem 1rem',
  borderRadius: '9999px',
  backgroundColor: 'var(--secondary)/0.2',
  border: '1px solid var(--secondary)/0.4'
}

const badgeTextStyle = {
  border: '1px solid var(--secondary)',
  borderRadius: '21px',
  padding: '5px',
  backgroundColor: 'var(--secondary)/700',
  fontSize: '0.875rem',
  fontWeight: '500',
  color: 'var(--secondary)',
  margin: 0
}

const headingStyle = {
  fontSize: '3rem',
  fontWeight: 'bold',
  color: 'var(--foreground)',
  marginBottom: '1.5rem',
  lineHeight: '1.25',
  textWrap: 'balance'
}

const primaryTextStyle = {
  color: 'var(--primary)'
}

const descriptionStyle = {
  fontSize: '1.125rem',
  color: 'var(--muted-foreground)',
  marginBottom: '2rem',
  lineHeight: '1.75',
  textWrap: 'balance'
}

const buttonContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
}

const backgroundGlowStyle = {
  position: 'absolute',
  inset: 0,
  // background: 'linear-gradient(135deg, var(--primary)/0.2, var(--accent)/0.2)',
  backgroundImage: 'url("./logo.png")',
  borderRadius: '1rem',
  
  // filter: 'blur(48px)'
}

const illustrationContainerStyle = {
  position: 'relative',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const jarContainerStyle = {
  position: 'relative',
  width: '16rem',
  height: '20rem'
}

const jarBaseStyle = {
  position: 'absolute',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  width: '12rem',
  height: '10rem',
  background: 'linear-gradient(to top, var(--primary)/0.4, var(--primary)/0.2)',
  borderRadius: '0 0 1.5rem 1.5rem',
  border: '4px solid var(--secondary)/0.6'
}

const jarCapStyle = {
  position: 'absolute',
  top: '3rem',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '14rem',
  height: '3rem',
  background: 'linear-gradient(to bottom, var(--secondary), var(--secondary)/0.8)',
  borderRadius: '1rem 1rem 0 0',
  border: '4px solid var(--secondary)/0.8',
  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
}

const shieldContainerStyle = {
  position: 'absolute',
  top: '8rem',
  left: '50%',
  transform: 'translateX(-50%)'
}

const shieldStyle = {
  width: '5rem',
  height: '6rem',
  background: 'linear-gradient(135deg, var(--secondary), var(--secondary)/0.6)',
  borderRadius: '0.5rem',
  border: '2px solid var(--secondary)/0.4',
  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const shieldIconStyle = {
  width: '2.5rem',
  height: '2.5rem',
  color: 'var(--foreground)'
}

const floatingDotStyle = {
  position: 'absolute',
  borderRadius: '50%',
  backgroundColor: 'var(--accent)',
  animation: 'pulse 2s infinite'
}

// Add keyframes for pulse animation
const styleSheet = document.styleSheets[0];
const keyframes = `
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
`;
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

// Media query for larger screens
if (typeof window !== 'undefined' && window.matchMedia('(min-width: 640px)').matches) {
  buttonContainerStyle.flexDirection = 'row'
}