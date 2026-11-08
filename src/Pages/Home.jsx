import Hero from '../components/Hero'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import CtaBanner from '../components/CtaBanner'

export default function Home() {
  return (
    <>
      <Hero />
      <Services preview />
      <WhyChooseUs />
      <CtaBanner />
    </>
  )
}