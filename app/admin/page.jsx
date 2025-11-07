import AdminLoginForm from "@/components/admin-login-form";
import Link from "next/link";
import "./page.css";

export const metadata = {
  title: "Admin Login - Docker",
  description: "Secure admin login for Docker document management platform",
};

export default function AdminPage() {
  return (
    <div className="admin-page-container">
      {/* Header with back link */}
      <header className="admin-header">
        <div className="header-content">
          <Link
            href="/"
            className="back-link"
          >
            <svg className="back-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main content */}
      <div className="main-content">
        <div className="content-wrapper">
          {/* Logo and branding */}
          <div className="branding-section">
            <div className="logo-container">
              <svg
                className="logo-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2L2 7V12C2 18 12 22 12 22S22 18 22 12V7L12 2Z" />
                <path d="M12 12L9 14.5L12 17L15 14.5L12 12Z" />
              </svg>
            </div>
            <h1 className="brand-title">Docker Admin</h1>
            <p className="brand-subtitle">Secure access for administrators</p>
          </div>

          {/* Login form card */}
          <div className="login-card">
            <AdminLoginForm />
          </div>

          {/* Footer text */}
          <p className="footer-text">
            For authorized administrators only. Unauthorized access is prohibited.
          </p>
        </div>
      </div>
    </div>
  );
}