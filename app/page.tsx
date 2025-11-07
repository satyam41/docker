import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Security from "@/components/security"
import HowItWorks from "@/components/how-it-works"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main style={mainStyle}>
      <Header />
      <Hero />
      <Features />
      <Security />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  )
}

const mainStyle = {
  minHeight: '100vh'
}