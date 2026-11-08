import Seo from '../components/Seo'
import About from '../components/About'
import WhyChooseUs from '../components/WhyChooseUs'

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Master Cleaners | Cleaning Company in DHA, Lahore"
        description="Learn about Master Cleaners, a professional cleaning company in DHA Phase 1, Lahore, serving homes, offices and high-rise buildings."
      />
      <About />
      <WhyChooseUs />
    </>
  )
}