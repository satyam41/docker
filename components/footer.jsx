'use client'

import Link from "next/link"
import { Shield } from "lucide-react"
import { useState, useEffect } from "react"

export default function Footer() {
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

  const FooterLink = ({ href, children }) => {
    const [isHovered, setIsHovered] = useState(false)

    const linkStyle = {
      color: isHovered ? 'var(--background)' : 'var(--background)/0.7',
      transition: 'color 0.2s',
      cursor: 'pointer'
    }

    return (
      <li>
        <Link 
          href={href} 
          style={linkStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {children}
        </Link>
      </li>
    )
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isDesktop ? 'repeat(4, 1fr)' : 'repeat(1, 1fr)',
    gap: '2rem',
    marginBottom: '3rem'
  }

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={gridStyle}>
          {/* Brand */}
          <div>
            <div style={brandStyle}>
              <div style={logoStyle}>
                {/* <Shield style={shieldIconStyle} /> */}
                <img src="./logo.png" alt="Logo of the Docker Secure Vault" />
              </div>
              <h3 style={brandTitleStyle}>Docker</h3>
            </div>
            <p style={brandDescriptionStyle}>Secure document management for the modern world.</p>
          </div>

          {/* Product */}
          <div>
            <h4 style={headingStyle}>Product</h4>
            <ul style={listStyle}>
              <FooterLink href="#">Features</FooterLink>
              <FooterLink href="#">Security</FooterLink>
              <FooterLink href="#">Pricing</FooterLink>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={headingStyle}>Company</h4>
            <ul style={listStyle}>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 style={headingStyle}>Legal</h4>
            <ul style={listStyle}>
              <FooterLink href="#">Privacy</FooterLink>
              <FooterLink href="#">Terms</FooterLink>
              <FooterLink href="#">Security</FooterLink>
            </ul>
          </div>
        </div>

        <div style={bottomSectionStyle}>
          <p style={copyrightStyle}>© 2025 Docker Secure Vault. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// Internal CSS styles
const footerStyle = {
  backgroundColor: 'var(--foreground)',
  color: 'var(--background)',
  padding: '4rem 1rem'
}

const containerStyle = {
  maxWidth: '80rem',
  marginLeft: 'auto',
  marginRight: 'auto'
}

const brandStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  marginBottom: '1rem'
}

const logoStyle = {
  width: '2.5rem',
  height: '2.5rem',
  borderRadius: '0.5rem',
  // backgroundColor: 'var(--secondary)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const shieldIconStyle = {
  width: '1.5rem',
  height: '1.5rem',
  color: 'var(--foreground)'
}

const brandTitleStyle = {
  fontWeight: 'bold',
  fontSize: '1.125rem'
}

const brandDescriptionStyle = {
  color: 'var(--background)/0.7',
  fontSize: '0.875rem'
}

const headingStyle = {
  fontWeight: '600',
  marginBottom: '1rem'
}

const listStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  fontSize: '0.875rem'
}

const bottomSectionStyle = {
  borderTop: '1px solid var(--background)/0.1',
  paddingTop: '2rem'
}

const copyrightStyle = {
  textAlign: 'center',
  color: 'var(--background)/0.6',
  fontSize: '0.875rem'
}