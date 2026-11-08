import Seo from '../components/Seo'
import Hero from '../components/Hero'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import CtaBanner from '../components/CtaBanner'

export default function Home() {
  return (
    <>
      <Seo
        title="Master Cleaners | Professional Cleaning Services in Lahore"
        description="Master Cleaners offers deep cleaning, general cleaning, window cleaning and high-rise window cleaning in DHA Lahore. Book your cleaning service today."
      />
      <Hero />
      <Services preview />
      <WhyChooseUs />
      <CtaBanner />
    </>
  )
}