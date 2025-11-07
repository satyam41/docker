"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import "./header.css"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="header">
      <nav className="nav">
        {/* Logo */}
        <div className="logo-container">
          <div className="logo-icon">
            <img src="./logo.png" alt="Logo" />
          </div>
          <div>
            <h1 className="logo-title">Docker</h1>
            <p className="logo-subtitle">Secure Vault</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="desktop-nav">
          <Link href="#features" className="nav-link">
            Features
          </Link>
          <Link href="#security" className="nav-link">
            Security
          </Link>
          <Link href="#how-it-works" className="nav-link">
            How It Works
          </Link>
          <Link
            href="/admin"
            className="admin-button"
          >
            Admin Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mobile-nav">
            <div className="mobile-nav-content">
              <Link href="#features" className="mobile-nav-link">
                Features
              </Link>
              <Link href="#security" className="mobile-nav-link">
                Security
              </Link>
              <Link href="#how-it-works" className="mobile-nav-link">
                How It Works
              </Link>
              <Link
                href="/admin"
                className="mobile-admin-button"
              >
                Admin Login
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}