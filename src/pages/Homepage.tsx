import Hero from '../components/Homepage/Hero'
import HowItWorks from '../components/Homepage/HowItWorks'
//import ContactSupportSection from '../components/Homepage/ContactSupportSection'
import CTASection from '../components/Homepage/CTASection'
import FeaturesSection from '../components/Homepage/FeaturesSection'
import Slider from '../components/Homepage/Slider'



const Homepage = () => {
  return (
    <>
      <Hero />
      
      
      <HowItWorks />
      <CTASection />
      <FeaturesSection />
      <Slider />
     
    </>
  )
}

export default Homepage