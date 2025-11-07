import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>
          Ready to Secure Your Documents?
        </h2>
        <p style={paragraphStyle}>
          Join thousands of users who trust Docker for their secure document management. Start your free account today.
        </p>
        <div style={buttonContainerStyle}>
          <button style={primaryButtonStyle}>
            Start Free Trial
            <ArrowRight style={arrowStyle} />
          </button>
          <button style={secondaryButtonStyle}>
            Schedule a Demo
          </button>
        </div>
      </div>
    </section>
  )
}

// Internal CSS styles
const sectionStyle = {
  padding: '5rem 1rem',
  background: 'linear-gradient(to right, var(--primary)/0.9, var(--primary))'
}

const containerStyle = {
  maxWidth: '56rem',
  marginLeft: 'auto',
  marginRight: 'auto',
  textAlign: 'center'
}

const headingStyle = {
  fontSize: '2.25rem',
  fontWeight: 'bold',
  color: 'var(--primary-foreground)',
  marginBottom: '1.5rem',
  textWrap: 'balance'
}

const paragraphStyle = {
  fontSize: '1.125rem',
  color: 'var(--primary-foreground)/0.9',
  marginBottom: '2rem',
  maxWidth: '32rem',
  marginLeft: 'auto',
  marginRight: 'auto',
  textWrap: 'balance'
}

const buttonContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  justifyContent: 'center'
}

const primaryButtonStyle = {
  padding: '1rem 2rem',
  borderRadius: '0.5rem',
  backgroundColor: 'var(--primary-foreground)',
  color: 'var(--primary)',
  border: 'none',
  cursor: 'pointer',
  fontWeight: '600',
  transition: 'background-color 0.2s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem'
}

const secondaryButtonStyle = {
  padding: '1rem 2rem',
  borderRadius: '0.5rem',
  border: '1px solid var(--primary-foreground)',
  color: 'var(--primary-foreground)',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  fontWeight: '600',
  transition: 'background-color 0.2s'
}

const arrowStyle = {
  width: '1.25rem',
  height: '1.25rem',
  transition: 'transform 0.2s'
}

// Add hover effects via JavaScript event handlers would be needed for the group-hover effect
// Alternatively, you could use CSS-in-JS libraries or move to external CSS for hover states