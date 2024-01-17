import Hero from '../components/Homepage/Hero'
import HowItWorks from '../components/Homepage/HowItWorks'
import ContactSupportSection from '../components/Homepage/ContactSupportSection'
import CTASection from '../components/Homepage/CTASection'
import FeaturesSection from '../components/Homepage/FeaturesSection'



const Homepage = () => {
  return (
    <>
      <Hero />
      <CTASection />
      <HowItWorks />
      <FeaturesSection />
      <ContactSupportSection />
    </>
  )
}

export default Homepage