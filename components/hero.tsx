"use client"

import { ArrowRight, Shield } from "lucide-react"
import "./hero.css"

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-grid">
          {/* Left Content */}
          <div>
            <div className="hero-badge">
              <p className="hero-badge-text">🔐 Enterprise Security</p>
            </div>
            <h2 className="hero-title">
              Your Documents,
              <span className="hero-title-accent"> Secure & Organized</span>
            </h2>
            <p className="hero-description">
              Docker is a secure web-based platform designed to store, manage, and access your government documents, tax
              records, and official licenses in one centralized, encrypted vault.
            </p>
            <div className="hero-buttons">
              <button className="hero-button-primary">
                Get Started
                <ArrowRight className="button-icon" />
              </button>
              <button className="hero-button-secondary">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="hero-illustration">
            <div className="hero-illustration-bg" />
            <div className="hero-illustration-container">
              {/* Illustrated security jar */}
              <div className="security-jar">
                {/* Jar base */}
                <div className="jar-base" />
                {/* Jar cap */}
                <div className="jar-cap" />
                {/* Shield with key */}
                <div className="shield-container">
                  <div className="shield">
                    <Shield className="shield-icon" />
                  </div>
                </div>
                {/* Floating elements */}
                <div className="floating-element floating-element-1" />
                <div
                  className="floating-element floating-element-2"
                  style={{ animationDelay: "0.5s" }}
                />
                <div
                  className="floating-element floating-element-3"
                  style={{ animationDelay: "1s" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}