"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const HeaderLink = ({ href, children, isMobile = false }) => {
    const [isHovered, setIsHovered] = useState(false)

    const linkStyle = {
      color: isHovered ? 'var(--primary)' : 'var(--foreground)',
      transition: 'color 0.2s',
      cursor: 'pointer',
      display: isMobile ? 'block' : 'inline'
    }

    return (
      <Link 
        href={href} 
        style={linkStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </Link>
    )
  }

  const AdminLink = ({ isMobile = false }) => {
    const [isHovered, setIsHovered] = useState(false)

    const adminButtonStyle = {
      padding: '0.5rem 1.5rem',
      borderRadius: '0.5rem',
      backgroundColor: isHovered ? '#a03742ff' : 'var(--primary)',
      color: 'var(--primary-foreground)',
      border: 'none',
      cursor: 'pointer',
      fontWeight: '500',
      transition: 'background-color 0.2s',
      display: isMobile ? 'block' : 'inline',
      textAlign: isMobile ? 'center' : 'left'
    }

    return (
      <Link
        href="/admin"
        style={adminButtonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Admin Login
      </Link>
    )
  }

  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        {/* Logo */}
        <div style={logoContainerStyle}>
          <div style={logoIconStyle}>
            <img src="./logo.png" alt="Logo of the Docker Secure Vault" />
          </div>
          <div>
            <h1 style={logoTitleStyle}>Docker</h1>
            <p style={logoSubtitleStyle}>Secure Vault</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div style={desktopNavStyle}>
          <HeaderLink href="#features">Features</HeaderLink>
          <HeaderLink href="#security">Security</HeaderLink>
          <HeaderLink href="#how-it-works">How It Works</HeaderLink>
          <AdminLink />
        </div>

        {/* Mobile Menu Button */}
        <button style={mobileButtonStyle} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X style={iconStyle} /> : <Menu style={iconStyle} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div style={mobileNavStyle}>
            <div style={mobileNavContentStyle}>
              <HeaderLink href="#features" isMobile={true}>Features</HeaderLink>
              <HeaderLink href="#security" isMobile={true}>Security</HeaderLink>
              <HeaderLink href="#how-it-works" isMobile={true}>How It Works</HeaderLink>
              <AdminLink isMobile={true} />
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

// Internal CSS styles
const headerStyle = {
  backgroundColor: 'var(--background)',
  borderBottom: '1px solid var(--border)',
  position: 'sticky',
  top: 0,
  zIndex: 50
}

const navStyle = {
  maxWidth: '80rem',
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: '1rem 1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}

const logoContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem'
}

const logoIconStyle = {
  width: '2.5rem',
  height: '2.5rem',
  borderRadius: '0.5rem',
  background: 'linear-gradient(135deg, var(--secondary) 0%, var(--secondary)/0.7 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const logoSvgStyle = {
  width: '1.5rem',
  height: '1.5rem',
  color: 'var(--foreground)'
}

const logoTitleStyle = {
  fontSize: '1.25rem',
  fontWeight: 'bold',
  color: 'var(--primary)',
  margin: 0
}

const logoSubtitleStyle = {
  fontSize: '0.75rem',
  color: 'var(--muted-foreground)',
  margin: 0
}

const desktopNavStyle = {
  display: 'none',
  alignItems: 'center',
  gap: '2rem'
}

const mobileButtonStyle = {
  display: 'block',
  background: 'none',
  border: 'none',
  cursor: 'pointer'
}

const iconStyle = {
  width: '1.5rem',
  height: '1.5rem'
}

const mobileNavStyle = {
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  backgroundColor: 'var(--background)',
  borderBottom: '1px solid var(--border)'
}

const mobileNavContentStyle = {
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
}

// Media query for desktop
if (typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches) {
  desktopNavStyle.display = 'flex'
  mobileButtonStyle.display = 'none'
  mobileNavStyle.display = 'none'
}