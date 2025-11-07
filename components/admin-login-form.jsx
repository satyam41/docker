"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff, Lock, Mail } from "lucide-react"

export default function AdminLoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Simulate form validation and submission
    setTimeout(() => {
      if (!email || !password) {
        setError("Please fill in all fields")
        setIsLoading(false)
        return
      }

      if (!email.includes("@")) {
        setError("Please enter a valid email address")
        setIsLoading(false)
        return
      }

      // Simulate successful login
      console.log("[v0] Admin login attempted with:", { email })
      setIsLoading(false)
      // In a real app, you would handle redirect to admin dashboard here
    }, 800)
  }

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      {/* Email field */}
      <div style={fieldStyle}>
        <label htmlFor="email" style={labelStyle}>
          Admin Email
        </label>
        <div style={inputContainerStyle}>
          <Mail style={iconStyle} />
          <Input
            id="email"
            type="email"
            placeholder="admin@docker.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            disabled={isLoading}
          />
        </div>
      </div>

      {/* Password field */}
      <div style={fieldStyle}>
        <label htmlFor="password" style={labelStyle}>
          Password
        </label>
        <div style={inputContainerStyle}>
          <Lock style={iconStyle} />
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={passwordInputStyle}
            disabled={isLoading}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={passwordToggleStyle}
            disabled={isLoading}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff style={toggleIconStyle} /> : <Eye style={toggleIconStyle} />}
          </button>
        </div>
      </div>

      {/* Error message */}
      {error && (
        <div style={errorStyle}>
          {error}
        </div>
      )}

      {/* Remember me and forgot password */}
      <div style={optionsContainerStyle}>
        <label style={checkboxLabelStyle}>
          <input type="checkbox" style={checkboxStyle} disabled={isLoading} />
          <span style={remembermeText}>Remember me</span>
        </label>
        <button
          type="button"
          style={forgotPasswordStyle}
          disabled={isLoading}
        >
          Forgot password?
        </button>
      </div>

      {/* Submit button */}
      <Button
        type="submit"
        style={submitButtonStyle}
        disabled={isLoading}
      >
        {isLoading ? (
          <div style={loadingStyle}>
            <div style={spinnerStyle} />
            Signing in...
          </div>
        ) : (
          "Sign In"
        )}
      </Button>

      {/* Additional info */}
      <div style={infoContainerStyle}>
        <p style={infoTextStyle}>
          This login portal is protected. All access is logged and monitored for security purposes.
        </p>
      </div>
    </form>
  )
}

// Internal CSS styles
const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem'
}

const fieldStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem'
}

const labelStyle = {
  display: 'block',
  fontSize: '0.875rem',
  fontWeight: '500',
  color: '#000'
}

const inputContainerStyle = {
  position: 'relative'
}

const iconStyle = {
  position: 'absolute',
  left: '0.75rem',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '1rem',
  height: '1rem',
  color: 'var(--muted-foreground)',
  pointerEvents: 'none'
}

const inputStyle = {
  paddingLeft: '2.5rem',
  height: '2.5rem',
  borderColor: 'var(--input)',
  color: '#141212'
}

const passwordInputStyle = {
  paddingLeft: '2.5rem',
  paddingRight: '2.5rem',
  height: '2.5rem',
  borderColor: 'var(--input)',
  color: '#141212'
}

const passwordToggleStyle = {
  position: 'absolute',
  right: '0.75rem',
  top: '50%',
  transform: 'translateY(-50%)',
  color: 'var(--muted-foreground)',
  background: 'none',
  border: 'none',
  cursor: 'pointer'
}

const toggleIconStyle = {
  width: '1rem',
  height: '1rem'
}

const errorStyle = {
  padding: '0.75rem',
  borderRadius: '0.5rem',
  backgroundColor: 'var(--destructive)/0.1',
  border: '1px solid var(--destructive)/0.2',
  color: 'var(--destructive)',
  fontSize: '0.875rem'
}

const optionsContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '0.875rem'
}

const remembermeText = {
  color: '#000'
} 

const checkboxLabelStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  color: 'var(--foreground)',
  cursor: 'pointer'
}

const checkboxStyle = {
  width: '1rem',
  height: '1rem',
  borderRadius: '0.25rem',
  borderColor: 'var(--input)',
  cursor: 'pointer'
}

const forgotPasswordStyle = {
  color: 'var(--primary)',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontWeight: '500'
}

const submitButtonStyle = {
  width: '100%',
  height: '2.5rem',
  background: 'linear-gradient(to right, #000, var(--primary))',
  fontWeight: '500',
  cursor: 'pointer'
}

const loadingStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem'
}

const spinnerStyle = {
  width: '1rem',
  height: '1rem',
  border: '2px solid #000',
  borderTop: '2px solid transparent',
  borderRadius: '50%',
  animation: 'spin 1s linear infinite'
}

const infoContainerStyle = {
  paddingTop: '1rem',
  borderTop: '1px solid var(--border)'
}

const infoTextStyle = {
  fontSize: '0.75rem',
  color: 'var(--muted-foreground)',
  textAlign: 'center'
}